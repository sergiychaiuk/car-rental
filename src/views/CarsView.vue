<template>
  <v-container class="pt-6">
    <v-row>
      <v-col cols="4">
        <v-card class="mb-6 rounded-lg">
          <v-col>
            <p class="ma-0 text-body-2 font-weight-bold">Бренд</p>
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
            Знайти автомобіль
          </v-btn>
        </div>

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
                class="ma-0 pa-0"
                dense
                color="light-blue lighten-2"
                hide-details
              >
                <template v-slot:label>
                  <p class="text-body-2 mb-0">Седан</p>
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
                class="ma-0 pa-0"
                dense
                color="light-blue lighten-2"
                hide-details
              >
                <template v-slot:label>
                  <p class="text-body-2 mb-0">VIP</p>
                </template>
              </v-checkbox>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
                  Створити авто
                  <v-icon right>mdi-plus</v-icon>
                </v-btn>
              </template>

              <v-card class="rounded-lg">
                <v-card-title class="yellow">Створення Авто</v-card-title>

                <v-card-text class="px-3 pb-3">
                  <v-container>
                    <v-row>
                      <v-col cols="5">
                        <p class="ma-0 text-body-2 font-weight-bold">Бренд</p>
                        <v-text-field
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
                        >
                          <template v-slot:label>
                            <p class="text-body-2">Виберіть тип автомобіля</p>
                          </template>
                        </v-select>
                      </v-col>

                      <v-col cols="2">
                        <p class="ma-0 text-body-2 font-weight-bold">Рік</p>
                        <v-text-field
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
        <!--        <v-data-iterator items="">-->
        <!--          <template v-slot:default="props">-->
        <v-row>
          <v-col cols="4">
            <v-card class="text-center pa-3 rounded-lg" hover>
              <div class="pa-3">
                <v-btn
                  class="text-capitalize"
                  width="100%"
                  dark
                  color="green"
                  small
                >
                  Редагувати авто
                  <v-icon right>mdi-pencil</v-icon>
                </v-btn>
              </div>

              <div class="px-3">
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
                      Видалити авто
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
              </div>

              <v-card-title
                class="d-block text-break text-center text-subtitle-1 font-weight-bold line-height pb-4"
              >
                VW Golf Variant
              </v-card-title>
              <v-card-subtitle class="pb-1 text-caption">
                Універсал
              </v-card-subtitle>
              <v-chip color="yellow" class="mb-1" x-small>Эконом</v-chip>
              <v-img
                contain
                height="110"
                src="http://api-carrental/testimages/Volkswagen-Golf-Variant-272x159-916d.png"
              ></v-img>
              <v-card-text class="pb-0">
                <b class="text-black">31 грн </b>
                <p class="d-inline text-caption">/доба</p>
              </v-card-text>
              <div class="pa-3">
                <v-btn
                  class="text-capitalize rounded-lg"
                  color="yellow"
                  width="100%"
                >
                  Орендувати
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!--          </template>-->
        <!--        </v-data-iterator>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",

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
