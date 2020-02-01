<template>
  <v-app>
     <v-card flat>
    <v-app-bar
      color="primary"
      extended
      
    >
      
    </v-app-bar>

    <v-card
      class="mx-auto"
      max-width="1300"
      min-height="50px"
      style="margin-top: -35px;"
    >
      <v-toolbar flat>
       
        <DateFilter/>
        <v-divider vertical></v-divider>
        <SeanceTime/>
        <v-divider vertical></v-divider>
        <Genre/>
        <v-divider vertical></v-divider>
        <AgeRating/>
        <ResetButton/>
      
      </v-toolbar>
    </v-card>
  </v-card>
    

        <v-container><FilmList/></v-container>
   
  </v-app>
</template>

<script>

import FilmList from '@/views/FilmList.vue'
import DateFilter from '@/components/DateFilter.vue'
import SeanceTime from '@/components/SeanceTime.vue'
import Genre from '@/components/Genre.vue'
import AgeRating from '@/components/AgeRating.vue'
import ResetButton from '@/components/ResetButton.vue'

export default {
  name: 'App',

  components: {
      FilmList,
      DateFilter,
      SeanceTime,
      Genre,
      AgeRating,
      ResetButton  
  },

 data(){
        return {
            
            
        }
    },
};
</script>

<style>
  v-btn{
    color: red;
  }
</style>
