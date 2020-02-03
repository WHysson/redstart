<template>
  <v-col cols="2">
      <v-select
      v-model="selected"
      @input="$emit('select', timeFilter)"
          :items="dates"
          label="Время сеанса"
          target="#dropdown-example"
          style="margin-top: 14px;"      
    ></v-select>
  </v-col>
</template>

<script>
export default {
    data: () => ({
      dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') },
      ],
      selected: '',
      formattedDates: []
    }),
    computed: {
      dates(){
            return this.$store.getters.dates         
        },
      formattedDates() {
       moment().format('YYYY-MM-DD')

      }
    },
  }
</script>

<style>
   
</style>