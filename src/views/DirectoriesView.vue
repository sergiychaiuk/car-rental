<template>
  <v-container class="pt-6">
    <v-row>
      <v-dialog v-model="saveDialog" persistent max-width="400px">
        <v-card class="rounded-lg" :loading="loading" :disabled="loading">
          <v-card-title class="yellow">Створення Зипису</v-card-title>

          <v-card-text class="px-3 pb-3">
            <v-container>
              <v-row>
                <v-col>
                  <p class="ma-0 text-body-2 font-weight-bold">Назва запису</p>
                  <v-text-field
                    v-model="itemSave.name"
                    class="ma-0"
                    clearable
                    color="light-blue lighten-2"
                    hide-details
                    dense
                    single-line
                    full-width
                  >
                    <template v-slot:label>
                      <p class="text-body-2">Введіть назву запису</p>
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
              @click="saveItem()"
              :loading="loading"
            >
              Зберегти
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="deleteDialog" persistent max-width="315px">
        <v-card class="rounded-lg" :loading="loading" :disabled="loading">
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
              @click="delItem(itemDel.id)"
              :loading="loading"
            >
              Зберегти
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-col cols="4">
        <v-card class="mb-6 rounded-lg">
          <v-col>
            <p class="ma-0 text-body-2 font-weight-bold">Тип авто</p>
            <v-text-field
              v-model="carType"
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
                <p class="text-body-2">Введіть тип авто</p>
              </template>
            </v-text-field>
          </v-col>
        </v-card>

        <p class="mb-1 px-3 text-body-2 font-weight-bold">Типи автомобіля</p>

        <div>
          <v-btn
            class="mb-3 text-capitalize"
            dark
            color="indigo"
            small
            width="100%"
            @click="createCarType()"
          >
            Створити Запис
            <v-icon right>mdi-plus</v-icon>
          </v-btn>
        </div>

        <v-card class="mb-6 rounded-lg">
          <v-data-iterator
            :items="carTypesFilter"
            hide-default-footer
            loading="true"
          >
            <template v-slot:default="props">
              <v-col
                v-for="item in props.items"
                :key="item.id"
                class="d-flex align-center"
              >
                <div>
                  <p class="mb-0 text-body-2 font-weight-bold">
                    {{ item.name }}
                  </p>
                </div>

                <v-spacer></v-spacer>

                <v-btn
                  class="text-capitalize mr-1"
                  dark
                  color="green"
                  small
                  @click="editCarType(item)"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>

                <v-btn
                  class="text-capitalize"
                  dark
                  color="red"
                  small
                  @click="delCarType(item.id)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-col>

              <v-divider class="type-car-divider"></v-divider>
            </template>
          </v-data-iterator>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card class="mb-6 rounded-lg">
          <v-col>
            <p class="ma-0 text-body-2 font-weight-bold">Категорія авто</p>
            <v-text-field
              v-model="carCategory"
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
                <p class="text-body-2">Введіть категорію авто</p>
              </template>
            </v-text-field>
          </v-col>
        </v-card>

        <p class="mb-1 px-3 text-body-2 font-weight-bold">
          Категорії автомобіля
        </p>

        <div>
          <v-btn
            class="mb-3 text-capitalize"
            dark
            color="indigo"
            small
            width="100%"
            @click="createCarCategory()"
          >
            Створити Запис
            <v-icon right>mdi-plus</v-icon>
          </v-btn>
        </div>

        <v-card class="mb-6 rounded-lg">
          <v-data-iterator
            :items="carCategoriesFilter"
            hide-default-footer
            loading="true"
          >
            <template v-slot:default="props">
              <v-col
                v-for="item in props.items"
                :key="item.id"
                class="d-flex align-center"
              >
                <div>
                  <p class="mb-0 text-body-2 font-weight-bold">
                    {{ item.name }}
                  </p>
                </div>

                <v-spacer></v-spacer>

                <v-btn
                  class="text-capitalize mr-1"
                  dark
                  color="green"
                  small
                  @click="editCarCategory(item)"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>

                <v-btn
                  class="text-capitalize"
                  dark
                  color="red"
                  small
                  @click="delCarCategory(item.id)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-col>

              <v-divider class="type-car-divider"></v-divider>
            </template>
          </v-data-iterator>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card class="mb-6 rounded-lg">
          <v-col>
            <p class="ma-0 text-body-2 font-weight-bold">Категорія замовника</p>
            <v-text-field
              v-model="customerCategory"
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
                <p class="text-body-2">Введіть категорію замовника</p>
              </template>
            </v-text-field>
          </v-col>
        </v-card>

        <p class="mb-1 px-3 text-body-2 font-weight-bold">
          Категорії замовника
        </p>

        <div>
          <v-btn
            class="mb-3 text-capitalize"
            dark
            color="indigo"
            small
            width="100%"
            @click="createCustomerCategory()"
          >
            Створити Запис
            <v-icon right>mdi-plus</v-icon>
          </v-btn>
        </div>

        <v-card class="mb-6 rounded-lg">
          <v-data-iterator
            :items="customerCategoriesFilter"
            hide-default-footer
            loading="true"
          >
            <template v-slot:default="props">
              <v-col
                v-for="item in props.items"
                :key="item.id"
                class="d-flex align-center"
              >
                <div>
                  <p class="mb-0 text-body-2 font-weight-bold">
                    {{ item.name }}
                  </p>
                </div>

                <v-spacer></v-spacer>

                <v-btn
                  class="text-capitalize mr-1"
                  dark
                  color="green"
                  small
                  @click="editCustomerCategory(item)"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>

                <v-btn
                  class="text-capitalize"
                  dark
                  color="red"
                  small
                  @click="delCustomerCategory(item.id)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-col>

              <v-divider class="type-car-divider"></v-divider>
            </template>
          </v-data-iterator>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DirectoriesView",

  created() {
    this.setCarTypes();
    this.setCarCategories();
    this.setCustomerCategories();
  },

  data: () => ({
    loading: false,

    saveDialog: false,
    deleteDialog: false,

    itemSave: {},
    itemDel: {},

    carType: "",
    carCategory: "",
    customerCategory: "",

    carTypes: [],
    carCategories: [],
    customerCategories: [],

    type: "",
  }),

  computed: {
    carTypesFilter() {
      return this.filterCarTypesByName(this.carTypes);
    },

    carCategoriesFilter() {
      return this.filterCarCategoriesByName(this.carCategories);
    },

    customerCategoriesFilter() {
      return this.filterCustomerCategoriesByName(this.customerCategories);
    },
  },

  methods: {
    async setCarTypes() {
      try {
        const { data } = await this.axios.get("carTypes");
        this.carTypes = data;
      } catch (e) {
        console.log(e);
      }
    },
    async setCarCategories() {
      try {
        const { data } = await this.axios.get("carCategories");
        this.carCategories = data;
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

    async saveItem() {
      this.loading = true;

      let formData = new FormData();

      formData.append("name", this.itemSave.name);

      let url = "";

      if (this.itemSave.id && this.type === "carType") {
        url = `carTypes/${this.itemSave.id}`;
      } else if (this.type === "carType") {
        url = "carTypes";
      }

      if (this.itemSave.id && this.type === "carCategory") {
        url = `carCategories/${this.itemSave.id}`;
      } else if (this.type === "carCategory") {
        url = "carCategories";
      }

      if (this.itemSave.id && this.type === "customerCategory") {
        url = `customerCategories/${this.itemSave.id}`;
      } else if (this.type === "customerCategory") {
        url = "customerCategories";
      }

      try {
        const { data } = await this.axios.post(url, formData);
        console.log(data);
      } catch (e) {
        console.log(e);
      } finally {
        if (this.type === "carType") {
          await this.setCarTypes();
        }

        if (this.type === "carCategory") {
          await this.setCarCategories();
        }

        if (this.type === "customerCategory") {
          await this.setCustomerCategories();
        }

        this.saveDialog = false;
        this.loading = false;
      }
    },
    async delItem(id) {
      this.loading = true;

      let url = "";

      if (this.type === "carType") {
        url = `/carTypes/${id}`;
      }

      if (this.type === "carCategory") {
        url = `/carCategories/${id}`;
      }

      if (this.type === "customerCategory") {
        url = `/customerCategories/${id}`;
      }

      try {
        const { data } = await this.axios.delete(url);
        console.log(data);
      } catch (e) {
        console.log(e);
      } finally {
        if (this.type === "carType") {
          await this.setCarTypes();
        }

        if (this.type === "carCategory") {
          await this.setCarCategories();
        }

        if (this.type === "customerCategory") {
          await this.setCustomerCategories();
        }

        this.deleteDialog = false;
        this.loading = false;
      }
    },

    createCarType() {
      this.saveDialog = true;
      this.itemSave = {
        id: "",
        name: "",
      };
      this.type = "carType";
    },
    createCarCategory() {
      this.saveDialog = true;
      this.itemSave = {
        id: "",
        name: "",
      };
      this.type = "carCategory";
    },
    createCustomerCategory() {
      this.saveDialog = true;
      this.itemSave = {
        id: "",
        name: "",
      };
      this.type = "customerCategory";
    },

    editCarType(item) {
      this.saveDialog = true;
      this.itemSave = this.lodash.cloneDeep(item);
      this.type = "carType";
    },
    editCarCategory(item) {
      this.saveDialog = true;
      this.itemSave = this.lodash.cloneDeep(item);
      this.type = "carCategory";
    },
    editCustomerCategory(item) {
      this.saveDialog = true;
      this.itemSave = this.lodash.cloneDeep(item);
      this.type = "customerCategory";
    },

    delCarType(id) {
      this.itemDel.id = id;
      this.deleteDialog = true;
      this.type = "carType";
    },
    delCarCategory(id) {
      this.itemDel.id = id;
      this.deleteDialog = true;
      this.type = "carCategory";
    },
    delCustomerCategory(id) {
      this.itemDel.id = id;
      this.deleteDialog = true;
      this.type = "customerCategory";
    },

    filterCarTypesByName(carTypes) {
      return carTypes.filter(
        (c) => this.carType === null || c.name.indexOf(this.carType) !== -1
      );
    },
    filterCarCategoriesByName(carCategories) {
      return carCategories.filter(
        (c) =>
          this.carCategory === null || c.name.indexOf(this.carCategory) !== -1
      );
    },
    filterCustomerCategoriesByName(customerCategories) {
      return customerCategories.filter(
        (c) =>
          this.customerCategory === null ||
          c.name.indexOf(this.customerCategory) !== -1
      );
    },
  },
};
</script>

<style>
.type-car-divider:last-child,
.category-car-divider:last-child,
.category-customer-divider:last-child {
  display: none !important;
}
</style>
