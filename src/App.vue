<template>
  <v-app>
    
  <Navbar/>
    <v-content class="ma-4">
      <router-view><Homepage/>
      </router-view>

    </v-content>
     <Footer/>
     
  </v-app>
 
</template>

<script>

import Homepage from '@/components/Homepage'
// import Footer from '@/components/Footer'
export default {
  name: 'App',

  components: {
   Homepage,
  //  Footer
  },

  data: () => ({
    //
  }),
};
</script>
