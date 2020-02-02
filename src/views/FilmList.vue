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
                                     <v-row><v-card-subtitle style="color: #FBCA12" v-if="film.is_premiere"><v-icon color="secondary">spa</v-icon>Премьера</v-card-subtitle></v-row>
                                     <v-card-title>{{film.title}}</v-card-title>
                                     <v-row><v-subheader v-for="genre in genres" :key="genre.title">{{genre.title}}, </v-subheader></v-row>
                                 </v-col>

                                    
                                
                                    
                                     <v-row align-self="center" class="d-md-none seances">
                                        <v-card flat>
                                        <v-chip-group column>
                                            <v-chip v-for="seance in film.seances" :key="seance.id">{{seance.time}}</v-chip>
                                              
                                        </v-chip-group>
                                     </v-card>
                                     </v-row>
                                    

                                    <v-col  align-self="center" class="d-none d-sm-flex seances">
                                     <v-row>
                                        <v-card flat>
                                        <v-chip-group column>
                                            <v-chip v-for="seance in film.seances" :key="seance.id">{{seance.time}}</v-chip>
                                              
                                        </v-chip-group>
                                     </v-card>
                                     </v-row>
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
            date: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
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