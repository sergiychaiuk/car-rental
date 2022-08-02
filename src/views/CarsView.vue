<template>
  <v-container class="pt-6">
    <v-row>
      <v-col cols="4">
        <v-card class="mb-6 rounded-lg">
          <v-col>
            <p class="ma-0 text-body-2 font-weight-bold">Бренд</p>
            <v-text-field
              v-model="carBrand"
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
                <p class="text-body-2">Введіть бренд автомобіля</p>
              </template>
            </v-text-field>
          </v-col>
        </v-card>

        <v-row>
          <v-col class="pr-0">
            <p class="mb-1 px-3 text-body-2 font-weight-bold">
              Дата і час отримання
            </p>
            <v-card class="rounded-lg">
              <v-col class="px-0">
                <v-menu
                  v-model="menuDateReceiving"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      class="border rounded-0"
                      v-model="dateReceiving"
                      color="light-blue lighten-2"
                      prepend-inner-icon="mdi-calendar"
                      solo
                      flat
                      readonly
                      hide-details
                      dense
                      clearable
                      single-line
                      full-width
                      v-bind="attrs"
                      v-on="on"
                    >
                      <template v-slot:label>
                        <p class="text-body-2">Введіть дату</p>
                      </template>
                    </v-text-field>
                  </template>

                  <v-date-picker
                    v-model="dateReceiving"
                    no-title
                    @input="menuDateReceiving = false"
                    :min="minDate"
                    color="light-blue lighten-2"
                  ></v-date-picker>
                </v-menu>

                <v-menu
                  ref="menuTimeReceiving"
                  v-model="menuTimeReceiving"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="timeReceiving"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="timeReceiving"
                      color="light-blue lighten-2"
                      prepend-inner-icon="mdi-clock-time-four-outline"
                      solo
                      flat
                      readonly
                      hide-details
                      dense
                      clearable
                      single-line
                      full-width
                      v-bind="attrs"
                      v-on="on"
                    >
                      <template v-slot:label>
                        <p class="text-body-2">Введіть дату</p>
                      </template>
                    </v-text-field>
                  </template>

                  <v-time-picker
                    v-if="menuTimeReceiving"
                    v-model="timeReceiving"
                    format="24hr"
                    no-title
                    @click:minute="$refs.menuTimeReceiving.save(timeReceiving)"
                    color="light-blue lighten-2"
                  ></v-time-picker>
                </v-menu>
              </v-col>
            </v-card>
          </v-col>

          <v-col>
            <p class="mb-1 px-3 text-body-2 font-weight-bold">
              Дата і час повернення
            </p>
            <v-card class="rounded-lg">
              <v-col class="px-0">
                <v-menu
                  v-model="menuDateReturn"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      class="border rounded-0"
                      v-model="dateReturn"
                      color="light-blue lighten-2"
                      prepend-inner-icon="mdi-calendar"
                      solo
                      flat
                      readonly
                      hide-details
                      dense
                      clearable
                      single-line
                      full-width
                      v-bind="attrs"
                      v-on="on"
                    >
                      <template v-slot:label>
                        <p class="text-body-2">Введіть дату</p>
                      </template>
                    </v-text-field>
                  </template>

                  <v-date-picker
                    v-model="dateReturn"
                    no-title
                    @input="menuDateReturn = false"
                    :min="minDate"
                    color="light-blue lighten-2"
                  ></v-date-picker>
                </v-menu>

                <v-menu
                  ref="menuTimeReturn"
                  v-model="menuTimeReturn"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="timeReturn"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="timeReturn"
                      color="light-blue lighten-2"
                      prepend-inner-icon="mdi-clock-time-four-outline"
                      solo
                      flat
                      readonly
                      hide-details
                      dense
                      clearable
                      single-line
                      full-width
                      v-bind="attrs"
                      v-on="on"
                    >
                      <template v-slot:label>
                        <p class="text-body-2">Введіть дату</p>
                      </template>
                    </v-text-field>
                  </template>

                  <v-time-picker
                    v-if="menuTimeReturn"
                    v-model="timeReturn"
                    format="24hr"
                    no-title
                    @click:minute="$refs.menuTimeReturn.save(timeReturn)"
                    color="light-blue lighten-2"
                  ></v-time-picker>
                </v-menu>
              </v-col>
            </v-card>
          </v-col>
        </v-row>

        <!--        <div class="mt-3 mb-9">
          <v-btn
            class="rounded-lg"
            color="yellow"
            width="100%"
            large
            @click="filterCarsByDateTime(carsFilter)"
          >
            Знайти автомобіль
          </v-btn>
        </div>-->

        <div class="mt-6">
          <v-expansion-panels class="mb-3 rounded-lg">
            <v-expansion-panel class="rounded-lg">
              <v-expansion-panel-header
                color="yellow lighten-3"
                class="pa-3 font-weight-bold text-body-2 rounded-lg"
              >
                Тип авто
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-checkbox
                  v-for="item in carTypes"
                  :key="item.id"
                  class="ma-0 pa-0"
                  dense
                  color="light-blue lighten-2"
                  hide-details
                  v-model="selectCarTypes"
                  :value="item.id"
                >
                  <template v-slot:label>
                    <p class="text-body-2 mb-0">{{ item.name }}</p>
                  </template>
                </v-checkbox>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-expansion-panels class="mb-3 rounded-lg">
            <v-expansion-panel class="rounded-lg">
              <v-expansion-panel-header
                color="yellow lighten-3"
                class="pa-3 font-weight-bold text-body-2 rounded-lg"
              >
                Категорія авто
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-checkbox
                  v-for="item in carCategories"
                  :key="item.id"
                  class="ma-0 pa-0"
                  dense
                  color="light-blue lighten-2"
                  hide-details
                  v-model="selectCarCategories"
                  :value="item.id"
                >
                  <template v-slot:label>
                    <p class="text-body-2 mb-0">{{ item.name }}</p>
                  </template>
                </v-checkbox>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
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
              @click="createCar()"
            >
              Створити авто
              <v-icon right>mdi-plus</v-icon>
            </v-btn>

            <v-dialog v-model="saveDialog" persistent max-width="750px">
              <v-card
                class="rounded-lg"
                :loading="loadingSave"
                :disabled="loadingSave"
              >
                <v-card-title class="yellow">Створення Авто</v-card-title>

                <v-card-text class="px-3 pb-3">
                  <v-container>
                    <v-row>
                      <v-col cols="5">
                        <p class="ma-0 text-body-2 font-weight-bold">Бренд</p>
                        <v-text-field
                          v-model="carSave.brand"
                          class="ma-0"
                          clearable
                          color="light-blue lighten-2"
                          hide-details
                          dense
                          single-line
                          full-width
                        >
                          <template v-slot:label>
                            <p class="text-body-2">Введіть бренд автомобіля</p>
                          </template>
                        </v-text-field>
                      </v-col>

                      <v-col cols="5">
                        <p class="ma-0 text-body-2 font-weight-bold">
                          Тип авто
                        </p>
                        <v-select
                          class="ma-0"
                          clearable
                          color="light-blue lighten-2"
                          hide-details
                          dense
                          single-line
                          full-width
                          :items="carTypes"
                          item-text="name"
                          item-value="id"
                          v-model="carSave.idCarType"
                        >
                          <template v-slot:label>
                            <p class="text-body-2">Виберіть тип автомобіля</p>
                          </template>
                        </v-select>
                      </v-col>

                      <v-col cols="2">
                        <p class="ma-0 text-body-2 font-weight-bold">Рік</p>
                        <v-text-field
                          v-model="carSave.graduationYear"
                          class="ma-0"
                          clearable
                          color="light-blue lighten-2"
                          hide-details
                          dense
                          single-line
                          full-width
                        >
                          <template v-slot:label>
                            <p class="text-body-2">Введіть рік</p>
                          </template>
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="5">
                        <p class="ma-0 text-body-2 font-weight-bold">Фото</p>
                        <v-file-input
                          v-model="carSave.photo"
                          class="ma-0"
                          clearable
                          color="light-blue lighten-2"
                          hide-details
                          dense
                          single-line
                          full-width
                          prepend-icon="mdi-camera"
                        >
                          <template v-slot:label>
                            <p class="text-body-2">Виберіть фото автомобіля</p>
                          </template>
                        </v-file-input>
                      </v-col>

                      <v-col cols="5">
                        <p class="ma-0 text-body-2 font-weight-bold">
                          Категорія авто
                        </p>
                        <v-select
                          class="ma-0"
                          clearable
                          color="light-blue lighten-2"
                          hide-details
                          dense
                          single-line
                          full-width
                          :items="carCategories"
                          item-text="name"
                          item-value="id"
                          v-model="carSave.idCarCategory"
                        >
                          <template v-slot:label>
                            <p class="text-body-2">
                              Виберіть категорію автомобіля
                            </p>
                          </template>
                        </v-select>
                      </v-col>

                      <v-col cols="2">
                        <p class="ma-0 text-body-2 font-weight-bold">
                          Ціна/год
                        </p>
                        <v-text-field
                          v-model="carSave.price"
                          class="ma-0"
                          clearable
                          color="light-blue lighten-2"
                          hide-details
                          dense
                          single-line
                          full-width
                        >
                          <template v-slot:label>
                            <p class="text-body-2">Введіть ціну</p>
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
                    @click="saveCar()"
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
                    @click="deleteCar(carDelete.id)"
                    :loading="loadingDelete"
                  >
                    Видалити
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>

        <v-data-iterator :items="carsFilter" hide-default-footer loading="true">
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
                      @click="editCar(item)"
                    >
                      Редагувати авто
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
                      @click="delCar(item.id)"
                    >
                      Видалити авто
                      <v-icon right>mdi-delete</v-icon>
                    </v-btn>
                  </div>

                  <v-card-title
                    class="d-block text-break text-center text-subtitle-1 font-weight-bold line-height pt-3 pb-4"
                  >
                    {{ item.brand + " " + item.graduationYear }}
                  </v-card-title>
                  <v-card-subtitle class="pb-1 text-caption">
                    {{ item.carType.name }}
                  </v-card-subtitle>
                  <v-chip color="yellow" class="mb-1" x-small>{{
                    item.carCategory.name
                  }}</v-chip>
                  <v-img
                    contain
                    height="110"
                    :src="`http://api-carrental/images/${item.photo}`"
                  ></v-img>
                  <v-card-text class="pb-0">
                    <b class="text-black">{{ item.price }} грн </b>
                    <p class="d-inline text-caption">/год</p>
                  </v-card-text>
                  <div class="pa-3">
                    <v-btn
                      class="text-capitalize rounded-lg"
                      color="yellow"
                      width="100%"
                      :disabled="
                        dateReturn === null ||
                        timeReturn === null ||
                        dateReceiving === null ||
                        timeReceiving === null
                      "
                      @click="
                        $router.push({
                          name: 'reservations',
                          params: {
                            idCar: item.id,
                            dateReturn: dateReturn,
                            timeReturn: timeReturn,
                            dateReceiving: dateReceiving,
                            timeReceiving: timeReceiving,
                          },
                        })
                      "
                    >
                      Орендувати
                    </v-btn>
                  </div>
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
  name: "CarsView",

  created() {
    this.setCarTypes();
    this.setCarCategories();
    this.setCars();

    setInterval(() => {
      this.minDate = new Date().toISOString().substr(0, 10);
    }, 1000);
  },

  data: () => ({
    menuDateReceiving: false,
    dateReceiving: null,
    menuTimeReceiving: false,
    timeReceiving: null,

    minDate: new Date().toISOString().substr(0, 10),
    menuDateReturn: false,
    dateReturn: null,
    menuTimeReturn: false,
    timeReturn: null,

    saveDialog: false,
    deleteDialog: false,

    display: false,

    cars: [],
    carTypes: [],
    carCategories: [],

    carSave: {},
    carDelete: {},

    loadingSave: false,
    loadingDelete: false,

    carBrand: "",
    selectCarTypes: [],
    selectCarCategories: [],
  }),

  computed: {
    carsFilter() {
      return this.filterCarsByBrand(
        this.filterCarsByTypes(
          this.filterCarsByCategories(
            this.filterCarsByDateTime(this.filterCarsByDateTime(this.cars))
          )
        )
      );
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

    async setCars() {
      try {
        const { data } = await this.axios.get("cars");
        this.cars = data;
      } catch (e) {
        console.log(e);
      }
    },

    async saveCar() {
      this.loadingSave = true;

      let formData = new FormData();

      formData.append("brand", this.carSave.brand);
      formData.append("idCarType", this.carSave.idCarType);
      formData.append("graduationYear", this.carSave.graduationYear);
      formData.append("idCarCategory", this.carSave.idCarCategory);
      formData.append("photo", this.carSave.photo);
      formData.append("price", this.carSave.price);

      let url = "";

      this.carSave.id ? (url = `cars/${this.carSave.id}`) : (url = "cars");

      try {
        const { data } = await this.axios.post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(data);
      } catch (e) {
        console.log(e);
      } finally {
        await this.setCars();
        this.saveDialog = false;
        this.loadingSave = false;
      }
    },

    async deleteCar(id) {
      this.loadingDelete = true;

      try {
        const { data } = await this.axios.delete(`/cars/${id}`);
        console.log(data);
      } catch (e) {
        console.log(e);
      } finally {
        await this.setCars();
        this.deleteDialog = false;
        this.loadingDelete = false;
      }
    },

    createCar() {
      this.saveDialog = true;
      this.carSave = {
        id: "",
        brand: "",
        graduationYear: "",
        idCarCategory: "",
        idCarType: "",
        photo: undefined,
        price: "",
      };
    },

    editCar(item) {
      this.saveDialog = true;
      this.carSave = this.lodash.cloneDeep(item);
      this.carSave.photo = undefined;
    },

    delCar(id) {
      this.carDelete.id = id;
      this.deleteDialog = true;
    },

    mod() {
      this.display = true;
    },

    view() {
      this.display = false;
    },

    filterCarsByBrand(cars) {
      return cars.filter(
        (c) => this.carBrand === null || c.brand.indexOf(this.carBrand) !== -1
      );
    },

    filterCarsByTypes(cars) {
      return cars.filter(
        (c) =>
          this.selectCarTypes.length < 1 ||
          this.selectCarTypes.includes(c.idCarType)
      );
    },

    filterCarsByCategories(cars) {
      return cars.filter(
        (c) =>
          this.selectCarCategories.length < 1 ||
          this.selectCarCategories.includes(c.idCarCategory)
      );
    },

    filterCarsByDateTime(cars) {
      let test = cars.filter((c) => {
        if (c.reservation.length === 0) {
          return true;
        } else {
          return c.reservation.some((r) => {
            if (
              this.dateReturn === null ||
              this.timeReturn === null ||
              this.dateReceiving === null ||
              this.timeReceiving === null
            ) {
              return true;
            } else {
              if (
                !(
                  new Date(r.datetimeReceiving) >=
                    new Date(this.dateReceiving + " " + this.timeReceiving) &&
                  new Date(r.datetimeReceiving) <=
                    new Date(this.dateReturn + " " + this.timeReturn)
                )
              ) {
                if (
                  !(
                    new Date(r.datetimeReturn) >=
                      new Date(this.dateReceiving + " " + this.timeReceiving) &&
                    new Date(r.datetimeReturn) <=
                      new Date(this.dateReturn + " " + this.timeReturn)
                  )
                ) {
                  return true;
                } else {
                  return false;
                }
              } else {
                return false;
              }
            }
          });
        }
      });

      console.log(test);
      return test;
    },
  },
};
</script>

<style>
.border {
  border-bottom: 1px solid #bdbdbd;
}
.v-expansion-panel-content__wrap {
  padding: 15px !important;
}
.v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 48px !important;
}
.text-black {
  color: black !important;
}
.line-height {
  line-height: 1rem !important;
}
</style>
