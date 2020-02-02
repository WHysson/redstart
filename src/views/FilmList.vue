<template>
<v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
    <v-list>
        <v-container class="cont">
           <v-row justify="center">
               <v-col cols="12">
                <v-card flat class="text-xs-center ma-3">
                    <v-row class="allContent">
                        <v-col class="poster">
                            <v-img :aspect-ratio="9/13" :src="film_data.url_poster">
                            <v-row align="center" class="fill-height">
                            <v-col align-self="center" cols="5"></v-col>
                            <v-col align-self="center" cols="2">
                                <v-btn color="secondary" fab><v-icon>play_arrow</v-icon></v-btn>
                            </v-col>
                            <v-col align-self="center" cols="5"></v-col>
                            </v-row>
                            </v-img>
                        </v-col>
                        <v-col  align-self="center" class="title">
                            <v-row>
                                <v-card-subtitle style="color: #FBCA12" v-if="film_data.is_premiere">
                                    <v-icon color="secondary">spa</v-icon>Премьера
                                </v-card-subtitle></v-row>
                            <v-card-title>{{film_data.title}}</v-card-title>
                            <v-row>
                                <v-subheader v-for="genre in film_data.genres" :key="genre.title">{{genre.title}}, </v-subheader>
                            </v-row>
                        </v-col>
                            <v-row align-self="center" class="d-md-none seances">
                            <v-card flat>
                            <v-chip-group column>
                                <v-chip v-for="seance in film_data.seances" :key="seance.id">{{seance.time}}</v-chip>
                            </v-chip-group>
                            </v-card>
                            </v-row>
                        <v-col  align-self="center" class="d-none d-sm-flex seances">
                            <v-row>
                            <v-card flat>
                            <v-chip-group column>
                                <v-chip color="secondary black--text" v-for="seance in film_data.seances" :key="seance.id">{{seance.time}}</v-chip>
                                <v-subheader>2D</v-subheader>
                            </v-chip-group>
                            </v-card>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
               </v-col>
           </v-row>
           <hr>
     
  </v-container>
    </v-list>
    </v-lazy>
</template>


<script>
export default {
    data() {
        return {
           isActive: true,            
        }
    },
    props: {
        film_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    async mounted(){
        this.$store.dispatch('getFilms')
        this.$store.dispatch('fetchFilters')
        
    },
    computed:{
       allFilms() {
           return this.$store.getters.allFilms
       },
       allFilters(){
           return this.$store.getters.allFilters
       },  
       
        
    },
    methods:{

    }
}
</script>

<style>
   
</style>