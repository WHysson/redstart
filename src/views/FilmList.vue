<template>

 <v-container class="cont">

     
                <v-container>
                     
                    <v-row justify="center">
                       <v-col cols="1">
                           
                       </v-col>
                        <v-col cols="3">
                            <v-overflow-btn
                            class="my-2"
                            :items="ageRatings"
                            menu-props="bottom"
                            label="Возраст"
                            target="#dropdown-example-1"
                            v-model="searchTerm"
                            ></v-overflow-btn>
                        </v-col>
                            <v-divider vertical></v-divider>
                        <v-col cols="3">
                            <v-overflow-btn
                            class="my-2"
                            :items="genres"
                            menu-props="bottom"
                            label="Жанр"
                            target="#dropdown-example-1"
                            v-model="searchTerm"
                            ></v-overflow-btn>
                        </v-col>
                    </v-row>
                </v-container>

            

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
                                 <v-col class="title">
                                     <v-subheader v-if="film.is_premiere"><v-icon>spa</v-icon>Премьера</v-subheader>
                                     <v-list-item-title>{{film.title}}</v-list-item-title>
                                 </v-col>
                                 <v-col class="seances">seance</v-col>
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
    ul li {
        list-style-type: none;
    }

    .cont {
        margin-top: 200px;
    }
</style>