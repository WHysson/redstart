<template>
 <v-col cols="2">
      <v-overflow-btn
          :items="dropdown_font"
          label="Возраст"
          target="#dropdown-example"
          style="margin-top: 14px;"
          segmented
    ></v-overflow-btn>
  </v-col>
</template>

<script>
export default {
    data: () => ({
      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') },
      ],
    }),
  }
</script>

<style>

</style>