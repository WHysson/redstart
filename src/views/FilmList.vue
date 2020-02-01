<template>

 <v-container class="cont">            

    <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >

           <v-row justify="center">
               <v-col cols="12" v-for="film in filteredFilms" :key="film.id">
            
                         <v-card flat class="text-xs-center ma-3">
                             <v-row class="allContent">
                                 <v-col class="poster"><v-img :src="film.url_poster"></v-img></v-col>
                                 <v-col  align-self="center" class="title">
                                     <v-row><v-subheader style="color: #FBCA12" v-if="film.is_premiere"><v-icon color="secondary">spa</v-icon>Премьера</v-subheader></v-row>
                                     <h2>{{film.title}}</h2>
                                     <v-row><v-subheader v-for="genre in genres" :key="genre.title">{{genre.title}}, </v-subheader></v-row>
                                 </v-col>
                                
                                    <v-col  align-self="center" class="seances">
                                     <v-row><v-chip v-for="seance in film.seances" :key="seance.id">{{seance.time}}</v-chip></v-row>
                                    </v-col>
                                
                             </v-row>
                         </v-card>
                       
               </v-col>
           </v-row>
      </v-lazy>
  </v-container>
</template>


<script>

export default {
    data() {
        return {
            date: new Date(),
            searchTerm: null,
            genre: [],
            isActive: false,            
        }
    },
    async mounted(){
        this.$store.dispatch('fetchFilms')
        this.$store.dispatch('fetchFilters')
        
    },
    computed:{
       allFilms() {
           return this.$store.getters.allFilms
       },
       allFilters(){
           return this.$store.getters.allFilters
       },  
       filteredFilms(){
           let films = this.allFilms
           let reg = new RegExp (this.searchTerm, 'i')
            if(this.searchTerm)
               films = films.filter(f => reg.exec (f.age_rating))
            
            
             
               return films 
       },
        ageRatings(){
            return this.$store.getters.ageRatings         
        },
        genres(){
            return this.$store.getters.genres
        },
        
    },
    methods:{
        lights () {
        alert('Toggling lights...')
      },
      
    }
}
</script>

<style>
   
</style>