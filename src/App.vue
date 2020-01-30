<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      fixed
      tile
    >
      
    </v-app-bar>

    

        <v-container><FilmList/></v-container>
   
  </v-app>
</template>

<script>

import FilmList from '@/views/FilmList.vue'

export default {
  name: 'App',

  components: {
      FilmList    
  },

 data(){
        return {
            
            
        }
    },
};
</script>
