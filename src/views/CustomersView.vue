<template>
  <v-container class="pt-6">
    <v-row>
      <v-col cols="4">
        <v-card class="mb-6 rounded-lg">
          <v-col>
            <p class="ma-0 text-body-2 font-weight-bold">Замовник</p>
            <v-text-field
              v-model="customerName"
              class="ma-0"
              clearable
              color="light-blue lighten-2"
              append-icon="mdi-magnify"
              hide-details
              dense
              single-line
              full-width
            >
              <template v-slot:label>
                <p class="text-body-2">Введіть замовника</p>
              </template>
            </v-text-field>
          </v-col>
        </v-card>

        <v-card class="mb-6 rounded-lg">
          <v-col>
            <p class="ma-0 text-body-2 font-weight-bold">Телефон</p>
            <v-text-field
              v-model="customerPhone"
              class="ma-0"
              clearable
              color="light-blue lighten-2"
              append-icon="mdi-magnify"
              hide-details
              dense
              single-line
              full-width
            >
              <template v-slot:label>
                <p class="text-body-2">Введіть телефон</p>
              </template>
            </v-text-field>
          </v-col>
        </v-card>

        <v-expansion-panels class="mb-3 rounded-lg">
          <v-expansion-panel class="rounded-lg">
            <v-expansion-panel-header
              color="yellow lighten-3"
              class="pa-3 font-weight-bold text-body-2 rounded-lg"
            >
              Категорія замовника
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-checkbox
                v-for="item in customerCategories"
                :key="item.id"
                class="ma-0 pa-0"
                dense
                color="light-blue lighten-2"
                hide-details
                v-model="selectCustomerCategories"
                :value="item.id"
              >
                <template v-slot:label>
                  <p class="text-body-2 mb-0">{{ item.name }}</p>
                </template>
              </v-checkbox>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="8">
        <v-row>
          <v-col>
            <v-btn
              v-if="!display"
              class="text-capitalize mr-3"
              dark
              color="blue"
              small
              @click="mod()"
            >
              Режим перегляду
              <v-icon right>mdi-eye</v-icon>
            </v-btn>

            <v-btn
              v-if="display"
              class="text-capitalize mr-3"
              dark
              color="blue"
              small
              @click="view()"
            >
              Режим модернізації
              <v-icon right>mdi-eye</v-icon>
            </v-btn>

            <v-btn
              v-if="display"
              class="text-capitalize"
              dark
              color="indigo"
              small
              @click="createCustomer()"
            >
              Створити замовника
              <v-icon right>mdi-plus</v-icon>
            </v-btn>

            <v-dialog v-model="saveDialog" persistent max-width="750px">
              <v-card
                class="rounded-lg"
                :loading="loadingSave"
                :disabled="loadingSave"
              >
                <v-card-title class="yellow">Створення Замовника</v-card-title>

                <v-card-text class="px-3 pb-3">
                  <v-container>
                    <v-row>
                      <v-col cols="4">
                        <p class="ma-0 text-body-2 font-weight-bold">Ім'я</p>
                        <v-text-field
                          v-model="customerSave.name"
                          class="ma-0"
                          clearable
                          color="light-blue lighten-2"
                          hide-details
                          dense
                          single-line
                          full-width
                        >
                          <template v-slot:label>
                            <p class="text-body-2">Введіть ім'я</p>
                          </template>
                        </v-text-field>
                      </v-col>

                      <v-col cols="4">
                        <p class="ma-0 text-body-2 font-weight-bold">
                          Прізвище
                        </p>
                        <v-text-field
                          v-model="customerSave.surname"
                          class="ma-0"
                          clearable
                          color="light-blue lighten-2"
                          hide-details
                          dense
                          single-line
                          full-width
                        >
                          <template v-slot:label>
                            <p class="text-body-2">Введіть прізвище</p>
                          </template>
                        </v-text-field>
                      </v-col>

                      <v-col cols="4">
                        <p class="ma-0 text-body-2 font-weight-bold">
                          По батькові
                        </p>
                        <v-text-field
                          v-model="customerSave.patronymic"
                          class="ma-0"
                          clearable
                          color="light-blue lighten-2"
                          hide-details
                          dense
                          single-line
                          full-width
                        >
                          <template v-slot:label>
                            <p class="text-body-2">Введіть по батькові</p>
                          </template>
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6">
                        <p class="ma-0 text-body-2 font-weight-bold">
                          Категорія замовника
                        </p>
                        <v-select
                          class="ma-0"
                          clearable
                          color="light-blue lighten-2"
                          hide-details
                          dense
                          single-line
                          full-width
                          :items="customerCategories"
                          item-text="name"
                          item-value="id"
                          v-model="customerSave.idCustomerCategory"
                        >
                          <template v-slot:label>
                            <p class="text-body-2">
                              Виберіть категорію замовника
                            </p>
                          </template>
                        </v-select>
                      </v-col>

                      <v-col cols="6">
                        <p class="ma-0 text-body-2 font-weight-bold">Телефон</p>
                        <v-text-field
                          v-model="customerSave.phone"
                          class="ma-0"
                          clearable
                          color="light-blue lighten-2"
                          hide-details
                          dense
                          single-line
                          full-width
                        >
                          <template v-slot:label>
                            <p class="text-body-2">Введіть телефон</p>
                          </template>
                        </v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="text-capitalize"
                    color="red"
                    text
                    @click="saveDialog = false"
                  >
                    Закрити
                  </v-btn>
                  <v-btn
                    class="text-capitalize"
                    color="green"
                    text
                    @click="saveCustomer()"
                    :loading="loadingSave"
                  >
                    Зберегти
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="deleteDialog" persistent max-width="315px">
              <v-card
                class="rounded-lg"
                :loading="loadingDelete"
                :disabled="loadingDelete"
              >
                <v-card-title class="text-h5 text-break">
                  Ви дійсно хочете видалити даний запис?
                </v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="text-capitalize"
                    color="red"
                    text
                    @click="deleteDialog = false"
                  >
                    Закрити
                  </v-btn>
                  <v-btn
                    class="text-capitalize"
                    color="green"
                    text
                    @click="deleteCustomer(customerDelete.id)"
                    :loading="loadingDelete"
                  >
                    Зберегти
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>

        <v-data-iterator
          :items="customersFilter"
          hide-default-footer
          loading="true"
        >
          <template v-slot:default="props">
            <v-row>
              <v-col v-for="item in props.items" :key="item.id" cols="4">
                <v-card class="text-center pa-3 rounded-lg" hover>
                  <div class="pa-3" v-if="display">
                    <v-btn
                      class="text-capitalize"
                      width="100%"
                      dark
                      color="green"
                      small
                      @click="editCustomer(item)"
                    >
                      Редагувати замовника
                      <v-icon right>mdi-pencil</v-icon>
                    </v-btn>
                  </div>

                  <div class="px-3" v-if="display">
                    <v-btn
                      class="text-capitalize"
                      width="100%"
                      dark
                      color="red"
                      small
                      @click="delCustomer(item.id)"
                    >
                      Видалити замовника
                      <v-icon right>mdi-delete</v-icon>
                    </v-btn>
                  </div>

                  <v-card-title
                    class="d-block text-break text-center text-subtitle-1 font-weight-bold line-height pb-4"
                  >
                    {{ fullname(item) }}
                  </v-card-title>
                  <v-card-subtitle class="pb-1 text-caption">
                    {{ item.phone }}
                  </v-card-subtitle>
                  <v-chip color="yellow" class="mb-1" x-small>{{
                    item.customerCategory.name
                  }}</v-chip>
                  <!--                  <div class="pa-3">
                    <v-btn
                      class="text-capitalize rounded-lg"
                      color="yellow"
                      width="100%"
                    >
                      Замовлення
                    </v-btn>
                  </div>-->
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CustomersView",

  created() {
    this.setCustomers();
    this.setCustomerCategories();
  },

  data: () => ({
    saveDialog: false,
    dialog: false,
    loadingSave: false,
    deleteDialog: false,
    loadingDelete: false,

    display: false,

    customers: [],
    customerCategories: [],

    selectCustomerCategories: [],
    customerName: "",
    customerPhone: "",

    customerSave: {},
    customerDelete: {},
  }),

  computed: {
    customersFilter() {
      return this.filterCustomerByName(
        this.filterCustomerByPhone(
          this.filterCustomerByCategories(this.customers)
        )
      );
    },
  },

  methods: {
    async setCustomers() {
      try {
        const { data } = await this.axios.get("customers");
        this.customers = data;
      } catch (e) {
        console.log(e);
      }
    },
    async setCustomerCategories() {
      try {
        const { data } = await this.axios.get("customerCategories");
        this.customerCategories = data;
      } catch (e) {
        console.log(e);
      }
    },

    async saveCustomer() {
      this.loadingSave = true;

      let formData = new FormData();

      formData.append("name", this.customerSave.name);
      formData.append("surname", this.customerSave.surname);
      formData.append("patronymic", this.customerSave.patronymic);
      formData.append("phone", this.customerSave.phone);
      formData.append(
        "idCustomerCategory",
        this.customerSave.idCustomerCategory
      );

      let url = "";

      this.customerSave.id
        ? (url = `customers/${this.customerSave.id}`)
        : (url = "customers");

      try {
        const { data } = await this.axios.post(url, formData);
        console.log(data);
      } catch (e) {
        console.log(e);
      } finally {
        await this.setCustomers();
        this.saveDialog = false;
        this.loadingSave = false;
      }
    },
    async deleteCustomer(id) {
      this.loadingDelete = true;

      try {
        const { data } = await this.axios.delete(`/customers/${id}`);
        console.log(data);
      } catch (e) {
        console.log(e);
      } finally {
        await this.setCustomers();
        this.deleteDialog = false;
        this.loadingDelete = false;
      }
    },

    createCustomer() {
      this.saveDialog = true;
      this.customerSave = {
        id: "",
        name: "",
        surname: "",
        patronymic: "",
        phone: "",
        idCustomerCategory: "",
      };
    },

    editCustomer(item) {
      this.saveDialog = true;
      this.customerSave = this.lodash.cloneDeep(item);
    },

    delCustomer(id) {
      this.customerDelete.id = id;
      this.deleteDialog = true;
    },

    mod() {
      this.display = true;
    },

    view() {
      this.display = false;
    },

    fullname(item) {
      return item.name + " " + item.surname + " " + item.patronymic;
    },

    filterCustomerByName(customer) {
      return customer.filter(
        (c) =>
          this.customerName === null ||
          this.fullname(c).indexOf(this.customerName) !== -1
      );
    },

    filterCustomerByPhone(customer) {
      return customer.filter(
        (c) =>
          this.customerPhone === null ||
          c.phone.indexOf(this.customerPhone) !== -1
      );
    },

    filterCustomerByCategories(customer) {
      return customer.filter(
        (c) =>
          this.selectCustomerCategories.length < 1 ||
          this.selectCustomerCategories.includes(c.idCustomerCategory)
      );
    },
  },
};
</script>

<style scoped></style>
