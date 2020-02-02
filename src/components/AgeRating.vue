<template>
 <v-col cols="2">
      <v-overflow-btn
          v-model="ageFilter"
          @input="lol"
          :items="ageRatings"
          label="Возраст"
          target="#dropdown-example"
          style="margin-top: 14px;"
    ></v-overflow-btn>
  </v-col>
</template>

<script>
export default {
    data: () => ({
      ageFilter: '',
      dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') },
      ],
    }),
    props: {
      
    },
    computed: {
      ageRatings(){
            return this.$store.getters.ageRatings         
        },
    },
    methods:  {
      lol() {
        console.log(this)
        console.log(this.$root)
        // this.$root.$children[0].filterQuery.rating = this.selected
        
        
      }
    
    }
  }
</script>

<style>

</style>