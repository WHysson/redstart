<template>

 
   <v-col  cols="2" sm-12 xs-12>
      <v-select
          v-model="ageFilter"
          @input="$emit('select', ageFilter)"
          :items="ageRatings"
          label="Возраст"
          target="#dropdown-example"
          style="margin-top: 14px;"
    ></v-select>
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
    
    
    }
  }
</script>

<style>

</style>