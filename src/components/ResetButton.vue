<template>
  <v-col cols="1"><v-btn @click="$emit('select', allFilms)" dark large color="secondary black--text" text>Сбросить <v-icon>close</v-icon></v-btn></v-col>
</template>

<script>
export default {
  computed: {
    allFilms () {
      this.$emit ('select', this.$store.getters.allFilms) 
    }
  },
}
</script>

<style>

</style>