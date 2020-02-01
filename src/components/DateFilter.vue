<template>

  <v-row style="max-width: 500px;">
          <v-col align-self="center" cols="3">
                <v-btn dark color="primary" text>Сегодня</v-btn>
            </v-col>
            <v-col align-self="center" cols="3">
                <v-btn text>Завтра</v-btn>
            </v-col>
            
                <v-col md="auto">
                     <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                   
                >
                    <template v-slot:activator="{ on }">
                    <v-text-field
                        v-model="date"
                        label="Другая дата"
                        append-icon="event"
                        readonly
                        v-on="on"
                        style="margin-top: 14px; max-width:150px"
                    ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                </v-menu>
                </v-col>
              
  </v-row>
       

</template>

<script>
 export default {
    data: () => ({
      date: null,
      menu: false,
    }),
  }
</script>

<style>
    
</style>