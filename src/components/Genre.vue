<template>
   <v-col cols="2">
      <v-select
          v-model="selected"
          @input="$emit('select', genreFilter)"
          :items="transformGenres"
          label="Жанр"
          target="#dropdown-example"
          style="margin-top: 14px;"
    ></v-select>
  </v-col>
</template>

<script>
export default {
    data: () => ({
      selected: '',
      items: [],
      dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') },
      ],
      genres: []
    }),
    computed: {
       transformGenres(){
            let arr = this.genres
            let arr2 = []
            arr.forEach(el => {
              arr2.push(el.title)
            });
            return arr2
        },
        
    },
    async mounted () {
          this.genres = await this.$store.getters.genres
        }
  }
</script>

<style>

</style>