<template>
  <v-app>
    <v-app-bar app class="white">
      <v-container>
        <v-row>
          <v-col class="d-flex align-center">
            <span class="yellow mr-3">
              <v-icon color="black" x-large>mdi-car</v-icon>
            </span>

            <div class="w-100">
              <div class="text-h6 line-height">Оренда</div>
              <div class="text-body-2">Авто</div>
            </div>
          </v-col>

          <v-col class="text-right">
            <v-menu offset-y rounded="lg" left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item link :to="{ name: 'cars' }">
                  <v-list-item-title>Автомобілі</v-list-item-title>
                </v-list-item>

                <v-list-item link :to="{ name: 'customers' }">
                  <v-list-item-title>Користувачі</v-list-item-title>
                </v-list-item>

                <v-list-item link :to="{ name: 'reservations' }">
                  <v-list-item-title>Замовлення</v-list-item-title>
                </v-list-item>

                <v-list-item link :to="{ name: 'directories' }">
                  <v-list-item-title>Довідки</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
.v-list-item {
  min-height: 30px !important;
}
</style>
