<template>
   <nav>
       <v-app-bar  color="whitesmoke" >
           <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
           <v-toolbar-title class="font ">
               <span class="font">VM</span>
               <span>Studio</span>
           </v-toolbar-title>
           <v-spacer></v-spacer>
           <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          v-on="on"
        >
          <v-icon left>expand_more</v-icon>
            <span>Menu</span>
        </v-btn>
      </template>
      <v-list flat>
        <v-list-item v-for="link in links"  :key="link.text" router :to="link.route" active-class="border">
          <v-list-item-title >{{link.text}}</v-list-item-title>
        </v-list-item>
      </v-list>
            </v-menu>
            <v-btn text>
                <span>Logout</span>
                <v-icon right>exit_to_app</v-icon>
             </v-btn>
       </v-app-bar>
      <v-navigation-drawer  v-model="drawer" dark app class="aa">
          <v-layout column align-center>
               <v-flex class="mt-5"> 
                    <v-avatar size="120">
                            <img src="https://www.mkcl.org/user/pages/images/logo_mkcl_w.svg" alt="">
                    </v-avatar>
                    <p class="white--text subheading mt-1 text-center">VM Studio</p>
               </v-flex>
               
          </v-layout>
          <v-list flat>
              <v-list-item v-for="link in links"  :key="link.text" router :to="link.route" active-class="border">
                  <v-list-item-action>
                     <v-icon >{{link.icon}}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content >
                      <v-list-item-title >{{link.text}}</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
          </v-list>
      </v-navigation-drawer>
   </nav>
</template>
<script>

export default {
   data: () => ({
      drawer: true,
      links :[
          {icon: 'dashboard', text:'Dashboard', route: '/'},
        
      ]
     
    }),
    components: {
    
  },

   
}
</script>
<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
.aa
{
  background-color: rgb(8, 8, 7);
}
.font{
  color: black;
}
</style>
