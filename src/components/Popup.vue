<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="800px">
      <template v-slot:activator="{ on }">
        <v-btn outlined color="teal lighten-3" dark v-on="on"><router-link to="/VMreq">Add Virtual machine</router-link> |</v-btn>
      </template>
      <v-card>
       
        
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

</script>