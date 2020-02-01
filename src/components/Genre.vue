<template>
   <v-col cols="2">
      <v-overflow-btn
          :items="genres"
          label="Жанр"
          target="#dropdown-example"
          style="margin-top: 14px;"
          segmented
    ></v-overflow-btn>
  </v-col>
</template>

<script>
export default {
    data: () => ({
      items: [],
      dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') },
      ],
    }),
    computed: {
       genres(){
            return this.$store.getters.genres
        },
    }
  }
</script>

<style>

</style>