<template>
  <v-container class="pt-6">
    <v-row>
      <v-col cols="4">
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

        <v-card class="mb-6 rounded-lg">
          <v-col>
            <p class="ma-0 text-body-2 font-weight-bold">Телефон</p>
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
                  Створити замовника
                  <v-icon right>mdi-plus</v-icon>
                </v-btn>
              </template>

              <v-card class="rounded-lg">
                <v-card-title class="yellow">Створення Замовника</v-card-title>

                <v-card-text class="px-3 pb-3">
                  <v-container>
                    <v-row>
                      <v-col cols="4">
                        <p class="ma-0 text-body-2 font-weight-bold">Ім'я</p>
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
                            <p class="text-body-2">Введіть ім'я</p>
                          </template>
                        </v-text-field>
                      </v-col>

                      <v-col cols="4">
                        <p class="ma-0 text-body-2 font-weight-bold">
                          Прізвище
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
                            <p class="text-body-2">Введіть прізвище</p>
                          </template>
                        </v-text-field>
                      </v-col>

                      <v-col cols="4">
                        <p class="ma-0 text-body-2 font-weight-bold">
                          По батькові
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
                  Редагувати замовника
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
                      Видалити замовника
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
                Чаюк Сергій Олександрович
              </v-card-title>
              <v-card-subtitle class="pb-1 text-caption">
                +380982981083
              </v-card-subtitle>
              <v-chip color="yellow" class="mb-1" x-small>VIP</v-chip>
              <div class="pa-3">
                <v-btn
                  class="text-capitalize rounded-lg"
                  color="yellow"
                  width="100%"
                >
                  Замовлення
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CustomersView",

  data: () => ({
    dialog: false,
  }),
};
</script>

<style scoped></style>
