<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Add Program</h3>
          </div>
          <div class="panel-body">
            <form accept-charset="UTF-8" role="form">
              <fieldset>
                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="Program Name"
                    name="Datacenter"
                    type="text"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="Program Lead"
                    name="DisplayName"
                    type="text"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="Program Manager"
                    name="DisplayName"
                    type="text"
                    value=""
                  />
                </div>
                <div class="form-group">
                    <v-container fluid>
    <v-row align="center">
      <v-col cols="6">
        <v-subheader>
          Projects
        </v-subheader>
      </v-col>

      <v-col cols="6">
        <v-select
          v-model="select"
          :hint="`${select.state}, ${select.abbr}`"
          :items="items"
          item-text="state"
          item-value="abbr"
          label="Select"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
                    
                </div>
                <input
                  class="btn btn-lg btn-success btn-block"
                  type="submit"
                  value="Add Program"
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
  export default {
    data () {
      return {
        select: { state: '', abbr: '' },
        items: [
          { state: 'ProNEXT', abbr: 'BhaktiG@mkcl.org' },
          { state: 'KLCDP', abbr: 'yogeshkaleG@mkcl.org' },
          { state: 'HETP', abbr: 'vedantm@mkcl.org' },
          { state: 'E-Governance', abbr: 'kunalk@mkcl.org' },
        
        ],
      }
    },
  }
</script>
<style>
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
</style>