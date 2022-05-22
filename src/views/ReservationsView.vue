<template>
  <v-container class="pt-6">
    <v-row>
      <v-col cols="4">
        <v-card class="mb-6 rounded-lg">
          <v-col>
            <p class="ma-0 text-body-2 font-weight-bold">Автомобіль</p>
            <v-text-field
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
                    :min="minDateReceiving"
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
                    :min="minTimeReceiving"
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
                    :min="minDateReturn"
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
                    :min="minTimeReturn"
                    @click:minute="$refs.menuTimeReturn.save(timeReturn)"
                    color="light-blue lighten-2"
                  ></v-time-picker>
                </v-menu>
              </v-col>
            </v-card>
          </v-col>
        </v-row>

        <div class="mt-3 mb-9">
          <v-btn class="rounded-lg" color="yellow" width="100%" large>
            Знайти замовлення
          </v-btn>
        </div>
      </v-col>

      <v-col cols="8">
        <v-row>
          <v-col>
            <v-btn class="text-capitalize mr-3" dark color="blue" small>
              Режим перегляду
              <v-icon right>mdi-eye</v-icon>
            </v-btn>

            <v-dialog v-model="dialog" persistent max-width="750px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="text-capitalize"
                  dark
                  color="indigo"
                  small
                  v-bind="attrs"
                  v-on="on"
                >
                  Створити замовлення
                  <v-icon right>mdi-plus</v-icon>
                </v-btn>
              </template>

              <v-card class="rounded-lg">
                <v-card-title class="yellow">Створення Замовлення</v-card-title>

                <v-card-text class="px-3 pb-3">
                  <v-container>
                    <v-row>
                      <v-col>
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
                        >
                          <template v-slot:label>
                            <p class="text-body-2">Виберіть тип автомобіля</p>
                          </template>
                        </v-select>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
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
                        >
                          <template v-slot:label>
                            <p class="text-body-2">Виберіть тип автомобіля</p>
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
                                :min="minDateReceiving"
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
                                :min="minTimeReceiving"
                                @click:minute="
                                  $refs.menuTimeReceiving.save(timeReceiving)
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
                                :min="minDateReturn"
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
                                :min="minTimeReturn"
                                @click:minute="
                                  $refs.menuTimeReturn.save(timeReturn)
                                "
                                color="light-blue lighten-2"
                              ></v-time-picker>
                            </v-menu>
                          </v-col>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <div>
                          <p class="d-inline">Тариф:</p>
                          <b class="text-black"> 31 грн </b>
                          <p class="d-inline text-caption">/доба</p>
                        </div>
                        <div>
                          <p class="d-inline text-h6">Всього:</p>
                          <b class="text-black"> 310 грн</b>
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
                    @click="dialog = false"
                  >
                    Закрити
                  </v-btn>
                  <v-btn
                    class="text-capitalize"
                    color="green"
                    text
                    @click="dialog = false"
                  >
                    Зберегти
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card disabled="true">
              <v-container>
                <v-row>
                  <v-col cols="2">
                    <v-img
                      contain
                      height="110"
                      src="http://api-carrental/testimages/Volkswagen-Golf-Variant-272x159-916d.png"
                    ></v-img>
                  </v-col>

                  <v-col
                    cols="3"
                    class="d-flex text-center align-center justify-center"
                  >
                    <div>
                      <v-card-title
                        class="d-block text-break text-center text-subtitle-1 font-weight-bold line-height pb-4"
                      >
                        VW Golf Variant
                      </v-card-title>
                      <v-card-subtitle class="pb-1 text-caption">
                        Універсал
                      </v-card-subtitle>
                      <v-chip color="yellow" class="mb-1" x-small
                        >Эконом</v-chip
                      >
                      <v-card-text class="py-0">
                        <b class="text-black">31 грн </b>
                        <p class="d-inline text-caption">/доба</p>
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
                        Чаюк Сергій Олександрович
                      </v-card-title>
                      <v-card-subtitle class="pb-1 text-caption">
                        +380982981083
                      </v-card-subtitle>
                      <v-chip color="yellow" class="mb-1" x-small>VIP</v-chip>
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
                      <p class="mb-0 text-caption">2022-03-12 13:56</p>

                      <p class="mb-0 text-body-2 font-weight-bold">
                        Дата і час повернення
                      </p>
                      <p class="mb-0 text-caption">2022-03-12 13:56</p>

                      <div>
                        <p class="d-inline">Вартість:</p>
                        <b class="text-black"> 31000 грн </b>
                      </div>
                    </div>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-btn
                      class="text-capitalize"
                      width="100%"
                      dark
                      color="green"
                      small
                    >
                      Редагувати замовлення
                      <v-icon right>mdi-pencil</v-icon>
                    </v-btn>
                  </v-col>

                  <v-col>
                    <v-dialog v-model="dialog" persistent max-width="315px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          class="text-capitalize"
                          width="100%"
                          dark
                          color="red"
                          small
                          v-bind="attrs"
                          v-on="on"
                        >
                          Видалити замовлення
                          <v-icon right>mdi-delete</v-icon>
                        </v-btn>
                      </template>

                      <v-card class="rounded-lg">
                        <v-card-title class="text-h5 text-break">
                          Ви дійсно хочете видалити даний запис?
                        </v-card-title>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            class="text-capitalize"
                            color="red"
                            text
                            @click="dialog = false"
                          >
                            Закрити
                          </v-btn>
                          <v-btn
                            class="text-capitalize"
                            color="green"
                            text
                            @click="dialog = false"
                          >
                            Зберегти
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ReservationsView",

  data: () => ({
    minDateReceiving: new Date().toISOString().substr(0, 10),
    menuDateReceiving: false,
    dateReceiving: null,
    minTimeReceiving: new Date().getHours() + ":" + new Date().getMinutes(),
    menuTimeReceiving: false,
    timeReceiving: null,

    minDateReturn: new Date().toISOString().substr(0, 10),
    menuDateReturn: false,
    dateReturn: null,
    minTimeReturn: new Date().getHours() + ":" + new Date().getMinutes(),
    menuTimeReturn: false,
    timeReturn: null,

    dialog: false,
  }),
};
</script>

<style scoped></style>
