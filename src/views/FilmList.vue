<template>

 <v-container class="cont">

      <v-container mt-12>
            <v-row justify="center">
                <v-col cols="8">
                <v-text-field label="Поиск" v-model="searchTerm"></v-text-field>
                </v-col>
            </v-row>

            <!-- <ul v-for="age in allFilters" :key="age.id">
                <li >{{age}}</li>
            </ul> -->
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
               <v-col cols="12">
                    <ul>
                        <li v-for="film in filteredFilms" :key="film.id">
                            <v-card class="d-inline-block mx-auto my-12" min-width="100%">
                                <v-row justify="space-between">
                                    <v-col cols="4">
                                        <v-img class="mx-12 my-12" height="400" min-width="250" :src="film.url_poster"></v-img>
                                    </v-col>

                                    <v-col
                                    cols="8"
                                    class="text-center"
                                    >
                                        <v-row
                                            
                                            justify="start"
                                        >
                                            <v-col cols="4">
                                                <p v-if="film.is_premiere">Премьера</p>
                                                <h3>{{film.title}}</h3>
                                                <p>{{film.genres.title}}</p>
                                            </v-col>

                                           
                                                <v-col cols="8">
                                                <v-chip-group
                                                column
                                                active-class="primary--text"
                                                >
                                                    <v-chip v-for="seance in film.seances" :key="seance.id">
                                                        {{seance.time}}
                                                    </v-chip>
                                                </v-chip-group>
                                                </v-col>
                                           
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-card>  
                        </li>
                    </ul> 
               </v-col>
           </v-row>
      </v-lazy>
  </v-container>
</template>


<script>

export default {
    data() {
        return {
            searchTerm: null,
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
             if(this.searchTerm)
               films = films.filter(f => f.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0)
               return films 
           
        }
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