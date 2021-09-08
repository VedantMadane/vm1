<template>
  <div id="app">
  <nav>
       <v-app-bar  color="whitesmoke" >
           <v-avatar size="80">
                            <img src="https://www.mkcl.org/user/pages/images/logo_mkcl_w.svg" alt="">
                    </v-avatar>
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
          <v-icon left></v-icon>
            <span>Login</span>
        </v-btn>
      </template>
      <v-list flat>
        <v-list-item v-for="link in links"  :key="link.text" router :to="link.route" >
          <v-list-item-title >{{link.text}}</v-list-item-title>
        </v-list-item>
      </v-list>
            </v-menu>
            
       </v-app-bar>
  </nav>
  <div class="jumbotron">
  <h1 class="display-4">Hello</h1>
  <p class="lead">Welcome To Virtual Machine Management</p>
  <hr class="my-4">
  <p>Here You Can Manage your Projects</p>
  <p >
    <a class="btn btn-light btn-lg" href="#" role="button">Login here</a>
  </p>
</div>
  </div>
</template>



<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
.aa
{
  background-color: blanchedalmond;
}
.font{
  color: black;
}
.btn btn-secondary btn-lg{
  color: black;
}
</style>
