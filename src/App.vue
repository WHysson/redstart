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
       
        <DateFilter  @select="filterQuery.dateFilter = $event; filteredFilms()"/>
        <v-divider vertical></v-divider>
        <SeanceTime  @select="filterQuery.timeFilter = $event; filteredFilms()"/>
        <v-divider vertical></v-divider>
        <Genre  @select="filterQuery.genreFilter = $event; filteredFilms()"/>
        <v-divider vertical></v-divider>
        <AgeRating  @select="filterQuery.ageFilter = $event; filteredFilms()"/>
        <ResetButton/>
      
      </v-toolbar>
    </v-card>
    
      
       <v-list class="d-md-none seances" >
        <DateFilter  @select="filterQuery.dateFilter = $event; filteredFilms()"/>
        <v-divider vertical></v-divider>
        <SeanceTime  @select="filterQuery.timeFilter = $event; filteredFilms()"/>
        <v-divider vertical></v-divider>
        <Genre  @select="filterQuery.genreFilter = $event; filteredFilms()"/>
        <v-divider vertical></v-divider>
        <AgeRating  @select="filterQuery.ageFilter = $event; filteredFilms()"/>
        <ResetButton/>
       </v-list>
       
      
     
    </v-card>
  

  <v-list>

  </v-list>
    

        
          <FilmList :film_data="film" v-for="film in films" :key="film.id"/>
     
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
            allFilms: []
        }
    },
  computed: {
    allFilms () {
      return this.$store.getters.allFilms 
    }
  },
  methods: {
    filteredFilms(){
            this.films = this.allFilms
           let reg = new RegExp (this.filterQuery, 'i')
            if(this.filterQuery.dateFilter){
               this.films = this.films.filter (film => {
                   let arr = film.seances
                   let find = []
                   find = film.seances.filter (s => s.date == this.filterQuery.dateFilter)
                   return find.length ? true : false
                 })
               }
            if (this.filterQuery.timeFilter) {
                 this.films = this.films.filter(f => reg.test(f.seances.time))
            
               }
            if (this.filterQuery.genreFilter) {
                 this.films = this.films.filter(f => reg.test(f.genres.title))
              
               }
            if (this.filterQuery.ageFilter) {
                 this.films = this.films.filter(f => f.age_rating === this.filterQuery.ageFilter)

               }
       },
  },
    async mounted() {
     await this.$store.dispatch("getFilms")
      this.allFilms = await this.$store.getters.allFilms 
      this.films = this.allFilms
    }
};
</script>

<style>
  
</style>
