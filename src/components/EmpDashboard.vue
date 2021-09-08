<template>
  <div>
      <Navbar/>
    <div class="social-box">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-xs-12 text-center">
            <div class="box">
              <!-- <i class="fa fa-behance fa-3x" aria-hidden="true"></i> -->
              <div class="box-title">
                <h3>Manage Data Center</h3>
              </div>
              <div class="box-text"></div>
              <div class="box-btn">
                <button> <router-link to="/AddDatacenter">Add Data Center</router-link> </button>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-xs-12 text-center">
            <div class="box">
              <!-- <i class="fa fa-twitter fa-3x" aria-hidden="true"></i> -->
              <div class="box-title">
                <h3>Manage Environment</h3>
              </div>
              <div class="box-text"></div>
              <div class="box-btn">
                 <button> <router-link to="/AddEnvironment">Add Environment</router-link> </button>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-xs-12 text-center">
            <div class="box">
              <!-- <i class="fa fa-facebook fa-3x" aria-hidden="true"></i> -->
              <div class="box-title">
                <h3>Manage Program</h3>
              </div>
              <div class="box-text"></div>
              <div class="box-btn">
                <button> <router-link to="/ManageProgram">Manage Program </router-link> </button>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-xs-12 text-center">
            <div class="box">
              <!-- <i class="fa fa-pinterest-p fa-3x" aria-hidden="true"></i> -->
              <div class="box-title">
                <h3>Manage User</h3>
              </div>
              <div class="box-text"></div>
              <div class="box-btn">
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-xs-12 text-center">
            <div class="box">
              <!-- <i class="fa fa-google-plus fa-3x" aria-hidden="true"></i> -->
              <div class="box-title">
                <h3>VM Repository</h3>
              </div>
              <div class="box-text"></div>
              <div class="box-btn">
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-xs-12 text-center">
            <div class="box">
              <!-- <i class="fa fa-github fa-3x" aria-hidden="true"></i> -->
              <div class="box-title">
                <h3>VM Reports</h3>
              </div>
              <div class="box-text"></div>
              <div class="box-btn">
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'App',

  components: {
   Navbar,
   Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

body {
  background: #f2f2f2;
  font-family: "Poppins", sans-serif;
}

h3 {
  font-family: "Poppins", sans-serif;
}

.social-box .box {
  background: #fff;
  border-radius: 10px;
  padding: 40px 10px;
  margin: 20px 0px;
  cursor: pointer;
  transition: all 0.5s ease-out;
}

.social-box .box:hover {
  box-shadow: 0 0 6px #4183d7;
 
}

.social-box .box .box-text {
  margin: 20px 0px;
  font-size: 15px;
  line-height: 30px;
}

.social-box .box .box-btn a {
  text-decoration: none;
  color: #4183d7;
  font-size: 16px;
}

.fa {
  color: #4183d7;
}
</style>