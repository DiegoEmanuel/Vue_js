<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://rjempregos.net/wp-content/uploads/2022/03/EloGroup.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://google.com"
        target="_blank"
        text
      >
        <span class="mr-2">Next</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <register/>
    </v-main>
  </v-app>
</template>

<script>
import register from './components/register';

export default {
  name: 'App',

  components: {
    register,
  },

  data: () => ({
    //
  }),
};
</script>
