<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Update Data Center</h3>
          </div>
          <div class="panel-body">
            <form @submit.prevent="updateDataCenter" role="form">
              <fieldset>
                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="Data Center Key"
                    name="Datacenter"
                    v-model="data[0].key"
                    type="text"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="Data Center Name"
                    name="DisplayName"
                    v-model="data[0].name"
                    type="text"
                    value=""
                  />
                </div>
                
                <input
                  class="btn btn-lg btn-success btn-block"
                  type="submit"
                  value="Update Data Center"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import MQL from "@/plugins/mql.js";
export default {
  name:'UpdateDataCenter',
  data() {
    return {
      data: {
       
        key: "",
        name: "",
      },

    };
  },
  //code of get all data from data center
  created(){
    console.log(this.$route.params.key)
       new MQL()
        .setActivity('o.[GetOneDataCenter]')
        .setData({"key":this.$route.params.key})
        .fetch().then(res => {
          console.log(res.raw.GetOneDataCenter.result.result)
          this.data=res.raw.GetOneDataCenter.result.result
        })
  },
    methods:{
    //code for update data in data center
      updateDataCenter() {
      new MQL()
        .setActivity("o.[UpdateDataCenter]")
        .setData({
          "key":this.data[0].key,
        "name":this.data[0].name
        })
        .fetch()
        .then((res) => {
          console.log(res);
        });
        alert("data center updadted")
        this.$router.push("/AddDatacenter")
        
        
    },
    //end of post data code
    

    }

};
</script>

<style scoped>
.white{
    color:#000;
    background-color:#fff;
}

.btn-facebook {
    color: #ffffff;
    -webkit-text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    background-color: #2b4b90;
    *background-color: #133783;
    background-image: -moz-linear-gradient(top, #3b5998, #133783);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#3b5998), to(#133783));
    background-image: -webkit-linear-gradient(top, #3b5998, #133783);
    background-image: -o-linear-gradient(top, #3b5998, #133783);
    background-image: linear-gradient(to bottom, #3b5998, #133783);
    background-repeat: repeat-x;
    border-color: #133783 #133783 #091b40;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff3b5998', endColorstr='#ff133783', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
}

    .btn-facebook:hover,
    .btn-facebook:focus,
    .btn-facebook:active,
    .btn-facebook.active,
    .btn-facebook.disabled,
    .btn-facebook[disabled] {
        color: #ffffff;
        background-color: #133783 !important;
        *background-color: #102e6d !important;
    }

    .btn-facebook:active,
    .btn-facebook.active {
        background-color: #0d2456 \9 !important;
    }
/* css of table */
    table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.add-new{
  border-radius: 30px;
background: linear-gradient(145deg, #28d946, #21b73b);
box-shadow:  20px 20px 60px #1fad37,
            
}
.custom-btn{
  margin-left: 5px;
}
</style>