<template>
  <v-container class="pt-6">
    <v-row>
      <v-col cols="4">
        <v-card class="mb-6 rounded-lg">
          <v-col>
            <p class="ma-0 text-body-2 font-weight-bold">Автомобіль</p>
            <v-text-field
              v-model="car"
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
                <p class="text-body-2">Введіть автомобіль</p>
              </template>
            </v-text-field>
          </v-col>
        </v-card>

        <v-card class="mb-6 rounded-lg">
          <v-col>
            <p class="ma-0 text-body-2 font-weight-bold">Замовник</p>
            <v-text-field
              v-model="customer"
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

        <v-row>
          <v-col class="pr-0">
            <p class="mb-1 px-3 text-body-2 font-weight-bold">Дата і час з</p>
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
            <p class="mb-1 px-3 text-body-2 font-weight-bold">Дата і час по</p>
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
          <v-btn class="rounded-lg" color="yellow" width="100%" large>
            Знайти замовлення
          </v-btn>
        </div>-->
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
              @click="createReservation()"
            >
              Створити замовлення
              <v-icon right>mdi-plus</v-icon>
            </v-btn>

            <v-dialog v-model="saveDialog" persistent max-width="750px">
              <v-card
                class="rounded-lg"
                :loading="loadingSave"
                :disabled="loadingSave"
              >
                <v-card-title class="yellow">Створення Замовлення</v-card-title>

                <v-card-text class="px-3 pb-3">
                  <v-container>
                    <v-row>
                      <v-col>
                        <p class="ma-0 text-body-2 font-weight-bold">
                          Автомобіль
                        </p>
                        <v-select
                          class="ma-0"
                          clearable
                          color="light-blue lighten-2"
                          hide-details
                          dense
                          single-line
                          full-width
                          :items="filterCars"
                          item-text="brand"
                          item-value="id"
                          v-model="reservationSave.idCar"
                        >
                          <template v-slot:label>
                            <p class="text-body-2">Виберіть автомобіль</p>
                          </template>
                        </v-select>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <p class="ma-0 text-body-2 font-weight-bold">
                          Замовник
                        </p>
                        <v-select
                          class="ma-0"
                          clearable
                          color="light-blue lighten-2"
                          hide-details
                          dense
                          single-line
                          full-width
                          :items="customers"
                          item-value="id"
                          v-model="reservationSave.idCustomer"
                        >
                          <template v-slot:label>
                            <p class="text-body-2">Виберіть замовника</p>
                          </template>
                          <template v-slot:selection="{ item }">
                            {{ fullname(item) }}
                          </template>
                          <template v-slot:item="{ item }">
                            {{ fullname(item) }}
                          </template>
                        </v-select>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="pr-0">
                        <p class="mb-1 px-3 text-body-2 font-weight-bold">
                          Дата і час отримання
                        </p>
                        <v-card class="rounded-lg" outlined elevation="0">
                          <v-col class="px-0">
                            <v-menu
                              v-model="menuDateReceivingSave"
                              :close-on-content-click="false"
                              :nudge-right="40"
                              transition="scale-transition"
                              offset-y
                              min-width="auto"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  class="border rounded-0"
                                  v-model="reservationSave.dateReceiving"
                                  color="light-blue lighten-2"
                                  prepend-inner-icon="mdi-calendar"
                                  solo
                                  flat
                                  readonly
                                  hide-details
                                  dense
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
                                v-model="reservationSave.dateReceiving"
                                no-title
                                @input="menuDateReceivingSave = false"
                                :min="minDate"
                                color="light-blue lighten-2"
                              ></v-date-picker>
                            </v-menu>

                            <v-menu
                              ref="menuTimeReceivingSave"
                              v-model="menuTimeReceivingSave"
                              :close-on-content-click="false"
                              :nudge-right="40"
                              :return-value.sync="reservationSave.timeReceiving"
                              transition="scale-transition"
                              offset-y
                              min-width="auto"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="reservationSave.timeReceiving"
                                  color="light-blue lighten-2"
                                  prepend-inner-icon="mdi-clock-time-four-outline"
                                  solo
                                  flat
                                  readonly
                                  hide-details
                                  dense
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
                                v-if="menuTimeReceivingSave"
                                v-model="reservationSave.timeReceiving"
                                format="24hr"
                                no-title
                                @click:minute="
                                  $refs.menuTimeReceivingSave.save(
                                    reservationSave.timeReceiving
                                  )
                                "
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
                        <v-card class="rounded-lg" outlined elevation="0">
                          <v-col class="px-0">
                            <v-menu
                              v-model="menuDateReturnSave"
                              :close-on-content-click="false"
                              :nudge-right="40"
                              transition="scale-transition"
                              offset-y
                              min-width="auto"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  class="border rounded-0"
                                  v-model="reservationSave.dateReturn"
                                  color="light-blue lighten-2"
                                  prepend-inner-icon="mdi-calendar"
                                  solo
                                  flat
                                  readonly
                                  hide-details
                                  dense
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
                                v-model="reservationSave.dateReturn"
                                no-title
                                @input="menuDateReturnSave = false"
                                :min="minDate"
                                color="light-blue lighten-2"
                              ></v-date-picker>
                            </v-menu>

                            <v-menu
                              ref="menuTimeReturnSave"
                              v-model="menuTimeReturnSave"
                              :close-on-content-click="false"
                              :nudge-right="40"
                              :return-value.sync="reservationSave.timeReturn"
                              transition="scale-transition"
                              offset-y
                              min-width="auto"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="reservationSave.timeReturn"
                                  color="light-blue lighten-2"
                                  prepend-inner-icon="mdi-clock-time-four-outline"
                                  solo
                                  flat
                                  readonly
                                  hide-details
                                  dense
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
                                v-if="menuTimeReturnSave"
                                v-model="reservationSave.timeReturn"
                                format="24hr"
                                no-title
                                @click:minute="
                                  $refs.menuTimeReturnSave.save(
                                    reservationSave.timeReturn
                                  )
                                "
                                color="light-blue lighten-2"
                              ></v-time-picker>
                            </v-menu>
                          </v-col>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col v-if="price !== false && cost !== false">
                        <div>
                          <p class="d-inline">Тариф:</p>
                          <b class="text-black">{{ " " + price }} грн </b>
                          <p class="d-inline text-caption">/год</p>
                        </div>
                        <div>
                          <p class="d-inline text-h6">Всього:</p>
                          <b class="text-black">{{ " " + cost }} грн</b>
                        </div>
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
                    @click="saveReseravation()"
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
                    @click="deleteReservation(reservationDelete.id)"
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
          :items="reservationsFilter"
          hide-default-footer
          loading="true"
        >
          <template v-slot:default="props">
            <v-row v-for="item in props.items" :key="item.id">
              <v-col>
                <v-card>
                  <v-container>
                    <v-row>
                      <v-col cols="2">
                        <v-img
                          contain
                          height="110"
                          :src="`http://api-carrental/images/${item.car.photo}`"
                        ></v-img>
                      </v-col>

                      <v-col
                        cols="3"
                        class="d-flex text-center align-center justify-center"
                      >
                        <div>
                          <v-card-title
                            class="d-block text-break text-center text-subtitle-1 font-weight-bold line-height pt-3 pb-4"
                          >
                            {{ item.car.brand + " " + item.car.graduationYear }}
                          </v-card-title>
                          <v-card-subtitle class="pb-1 text-caption">
                            {{ item.car.carType.name }}
                          </v-card-subtitle>
                          <v-chip color="yellow" class="mb-1" x-small>
                            {{ item.car.carCategory.name }}
                          </v-chip>
                          <v-card-text class="py-0">
                            <b class="text-black">{{ item.car.price }} грн </b>
                            <p class="d-inline text-caption">/год</p>
                          </v-card-text>
                        </div>
                      </v-col>

                      <v-col
                        cols="4"
                        class="d-flex text-center align-center justify-center"
                      >
                        <div>
                          <v-card-title
                            class="d-block text-break text-center text-subtitle-1 font-weight-bold line-height pb-4"
                          >
                            {{ fullname(item.customer) }}
                          </v-card-title>
                          <v-card-subtitle class="pb-1 text-caption">
                            {{ item.customer.phone }}
                          </v-card-subtitle>
                          <v-chip color="yellow" class="mb-1" x-small>
                            {{ item.customer.customerCategory.name }}
                          </v-chip>
                        </div>
                      </v-col>

                      <v-col
                        class="d-flex text-center align-center justify-center"
                        cols="3"
                      >
                        <div>
                          <p class="mb-0 text-body-2 font-weight-bold">
                            Дата і час отримання
                          </p>
                          <p class="mb-0 text-caption">
                            {{
                              date(item.datetimeReceiving) +
                              " " +
                              time(item.datetimeReceiving)
                            }}
                          </p>

                          <p class="mb-0 text-body-2 font-weight-bold">
                            Дата і час повернення
                          </p>
                          <p class="mb-0 text-caption">
                            {{
                              date(item.datetimeReturn) +
                              " " +
                              time(item.datetimeReturn)
                            }}
                          </p>

                          <div>
                            <p class="d-inline">Вартість:</p>
                            <b class="text-black">{{
                              " " + item.cost + " "
                            }}</b>
                          </div>
                        </div>
                      </v-col>
                    </v-row>

                    <v-row v-if="display">
                      <v-col>
                        <v-btn
                          class="text-capitalize"
                          width="100%"
                          dark
                          color="green"
                          small
                          @click="editReservation(item)"
                        >
                          Редагувати замовлення
                          <v-icon right>mdi-pencil</v-icon>
                        </v-btn>
                      </v-col>

                      <v-col>
                        <v-btn
                          class="text-capitalize"
                          width="100%"
                          dark
                          color="red"
                          small
                          @click="delReservation(item.id)"
                        >
                          Видалити замовлення
                          <v-icon right>mdi-delete</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
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
  name: "ReservationsView",

  created() {
    this.setReservations();

    setInterval(() => {
      this.minDate = new Date().toISOString().substr(0, 10);
    }, 1000);
  },

  data: () => ({
    minDate: new Date().toISOString().substr(0, 10),

    menuDateReceiving: false,
    menuDateReceivingSave: false,
    dateReceiving: null,
    menuTimeReceiving: false,
    menuTimeReceivingSave: false,
    timeReceiving: null,

    menuDateReturn: false,
    menuDateReturnSave: false,
    dateReturn: null,
    menuTimeReturn: false,
    menuTimeReturnSave: false,
    timeReturn: null,

    dialog: false,
    loadingSave: false,
    saveDialog: false,
    deleteDialog: false,
    loadingDelete: false,

    display: false,

    reservations: [],
    cars: [],
    customers: [],

    reservationSave: {},
    reservationDelete: {},

    car: "",
    customer: "",
  }),

  computed: {
    filterCars() {
      return this.filterCarsByDateTime(this.cars);
    },

    reservationsFilter() {
      return this.filterReservationsByCustomer(
        this.filterReservationByDataTime(
          this.filterReservationsByCar(this.sort(this.reservations))
        )
      );
    },
    price() {
      if (this.reservationSave.idCar) {
        return this.cars.filter((c) => c.id === this.reservationSave.idCar)[0]
          .price;
      } else {
        return false;
      }
    },
    cost() {
      if (
        this.reservationSave.dateReceiving !== null &&
        this.reservationSave.timeReceiving !== null &&
        this.reservationSave.dateReturn !== null &&
        this.reservationSave.timeReturn !== null &&
        this.reservationSave.idCar
      ) {
        let start =
          this.reservationSave.dateReceiving +
          " " +
          this.reservationSave.timeReceiving;
        let finish =
          this.reservationSave.dateReturn +
          " " +
          this.reservationSave.timeReturn;

        let min =
          (new Date(finish).getTime() - new Date(start).getTime()) / 60000;

        return Math.round(
          (min *
            this.cars.filter((c) => c.id === this.reservationSave.idCar)[0]
              .price) /
            60
        );
      } else {
        return false;
      }
    },
  },

  methods: {
    date(datetime) {
      return new Date(datetime).toISOString().substr(0, 10);
    },

    time(datetime) {
      return (
        new Date(datetime).getHours() + ":" + new Date(datetime).getMinutes()
      );
    },

    async setReservations() {
      try {
        const { data } = await this.axios.get("reservations");
        this.reservations = data;
      } catch (e) {
        console.log(e);
      } finally {
        await this.setCustomers();
        await this.setCars();

        if (Number(this.$route.params.idCar)) {
          this.reservationSave = {
            id: "",
            idCar: this.$route.params.idCar,
            idCustomer: "",
            dateReceiving: this.$route.params.dateReceiving,
            timeReceiving: this.$route.params.timeReceiving,
            dateReturn: this.$route.params.dateReturn,
            timeReturn: this.$route.params.timeReturn,
          };
          this.saveDialog = true;
        }
      }
    },

    async setCustomers() {
      try {
        const { data } = await this.axios.get("customers");
        this.customers = data;
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

    async saveReseravation() {
      this.loadingSave = true;

      let formData = new FormData();

      formData.append("idCar", this.reservationSave.idCar);
      formData.append("idCustomer", this.reservationSave.idCustomer);
      formData.append(
        "datetimeReceiving",
        this.reservationSave.dateReceiving.toString() +
          " " +
          this.reservationSave.timeReceiving.toString()
      );
      formData.append(
        "datetimeReturn",
        this.reservationSave.dateReturn.toString() +
          " " +
          this.reservationSave.timeReturn.toString()
      );
      formData.append("cost", this.cost);

      let url = "";

      this.reservationSave.id
        ? (url = `reservations/${this.reservationSave.id}`)
        : (url = "reservations");

      try {
        const { data } = await this.axios.post(url, formData);
        console.log(data);
      } catch (e) {
        console.log(e);
      } finally {
        await this.setReservations();
        this.saveDialog = false;
        this.loadingSave = false;
      }
    },

    async deleteReservation(id) {
      this.loadingDelete = true;

      try {
        const { data } = await this.axios.delete(`/reservations/${id}`);
        console.log(data);
      } catch (e) {
        console.log(e);
      } finally {
        await this.setReservations();
        this.deleteDialog = false;
        this.loadingDelete = false;
      }
    },

    createReservation() {
      this.saveDialog = true;
      this.reservationSave = {
        id: "",
        idCar: "",
        idCustomer: "",
        dateReceiving: null,
        timeReceiving: null,
        dateReturn: null,
        timeReturn: null,
      };
    },

    editReservation(item) {
      this.saveDialog = true;
      this.reservationSave = {
        id: item.id,
        idCar: item.idCar,
        idCustomer: item.idCustomer,
        dateReceiving: new Date(item.datetimeReceiving)
          .toISOString()
          .substr(0, 10),
        timeReceiving:
          new Date(item.datetimeReceiving).getHours() +
          ":" +
          new Date(item.datetimeReceiving).getMinutes(),
        dateReturn: new Date(item.datetimeReturn).toISOString().substr(0, 10),
        timeReturn:
          new Date(item.datetimeReturn).getHours() +
          ":" +
          new Date(item.datetimeReturn).getMinutes(),
      };
    },

    delReservation(id) {
      this.reservationDelete.id = id;
      this.deleteDialog = true;
    },

    fullname(item) {
      return item.name + " " + item.surname + " " + item.patronymic;
    },

    mod() {
      this.display = true;
    },

    view() {
      this.display = false;
    },

    sort(reservations) {
      return reservations.sort((a, b) =>
        a.datetimeReceiving > b.datetimeReceiving ? 1 : -1
      );
    },

    filterReservationsByCar(reservations) {
      return reservations.filter(
        (c) => this.car === null || c.car.brand.indexOf(this.car) !== -1
      );
    },
    filterReservationsByCustomer(reservations) {
      return reservations.filter(
        (c) =>
          this.customer === null ||
          this.fullname(c.customer).indexOf(this.customer) !== -1
      );
    },
    filterReservationByDataTime(reservations) {
      let start = this.dateReceiving + " " + this.timeReceiving;
      let finish = this.dateReturn + " " + this.timeReturn;

      return reservations.filter((c) => {
        if (
          this.dateReturn === null ||
          this.timeReturn === null ||
          this.dateReceiving === null ||
          this.timeReceiving === null
        ) {
          return true;
        } else {
          if (
            new Date(c.datetimeReceiving) >= new Date(start) &&
            new Date(c.datetimeReceiving) <= new Date(finish)
          ) {
            if (
              new Date(c.datetimeReturn) >= new Date(start) &&
              new Date(c.datetimeReturn) <= new Date(finish)
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
    },
    filterCarsByDateTime(cars) {
      this.reservationSave.car = "";

      return cars.filter((c) => {
        if (c.reservation.length === 0) {
          return true;
        } else {
          return c.reservation.some((r) => {
            if (
              this.reservationSave.dateReturn === null ||
              this.reservationSave.timeReturn === null ||
              this.reservationSave.dateReceiving === null ||
              this.reservationSave.timeReceiving === null
            ) {
              return true;
            } else {
              if (
                !(
                  new Date(r.datetimeReceiving) >=
                    new Date(
                      this.reservationSave.dateReceiving +
                        " " +
                        this.reservationSave.timeReceiving
                    ) &&
                  new Date(r.datetimeReceiving) <=
                    new Date(
                      this.reservationSave.dateReturn +
                        " " +
                        this.reservationSave.timeReturn
                    )
                )
              ) {
                if (
                  !(
                    new Date(r.datetimeReturn) >=
                      new Date(
                        this.reservationSave.dateReceiving +
                          " " +
                          this.reservationSave.timeReceiving
                      ) &&
                    new Date(r.datetimeReturn) <=
                      new Date(
                        this.reservationSave.dateReturn +
                          " " +
                          this.reservationSave.timeReturn
                      )
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
    },
  },
};
</script>

<style scoped></style>
