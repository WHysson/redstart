<template>
  <v-app>
     <v-card flat>
    <v-app-bar
      color="primary"
      extended
      class="d-none d-md-flex"
    >
      
    </v-app-bar>

    <v-card
      class="mx-auto d-none d-md-flex"
      max-width="1300"
      min-height="10px"
      style="margin-top: -35px;"
    >
      <v-toolbar class="desktop_bar" flat>
       
        <DateFilter v-model="filterQuery.dateFilter"/>
        <v-divider vertical></v-divider>
        <SeanceTime v-model="filterQuery.timeFilter"/>
        <v-divider vertical></v-divider>
        <Genre v-model="filterQuery.genreFilter"/>
        <v-divider vertical></v-divider>
        <AgeRating v-model="filterQuery.ageFilter"/>
        <ResetButton/>
      
      </v-toolbar>
    </v-card>
  </v-card>
    

        
          <FilmList :film_data="film" v-for="film in allFilms" :key="film.id"/>
     
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
            filterQuery: {
              dateFilter: null,
              timeFilter: null,
              genreFilter: null,
              ageFilter: null
            },
            films: [],
        }
    },
  computed: {
    allFilms () {
      return this.$store.getters.allFilms 
    }
  },
  methods: {
    filteredFilms(){
           let films = this.allFilms
           let reg = new RegExp (this.filterQuery, 'i')
            if(this.filterQuery.dateFilter){
                 films = films.filter(f => reg.test(f.seances.date))
                 return films 
               }
            if (this.filterQuery.timeFilter) {
                 films = films.filter(f => reg.test(f.seances.time))
                 return films 
               }
            if (this.filterQuery.genreFilter) {
                 films = films.filter(f => reg.test(f.genres.title))
                 return films 
               }
            if (this.filterQuery.ageFilter) {
                 films = films.filter(f => reg.test(f.age_rating))
                 return films 
               }
       },
  },
    async mounted() {
      this.$store.dispatch("getFilms")
    }
};
</script>

<style>
  
</style>
