<template>
  <v-footer
    
    padless
    app
    inset
    
  >
    <v-card
      class="flex"
      flat
      tile
      color="whitesmoke"
      :elevation="10"
    >

      <v-card-text class="py-2 black--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vm Studio</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
