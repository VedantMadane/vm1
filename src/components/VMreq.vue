<template>
  <div>
    <EmpNavbar />
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">Request Virtual Machine</h3>
            </div>
            <div class="panel-body">
              <form @submit.prevent="addVmData" accept-charset="UTF-8" role="form">
                <fieldset>
                  <div class="form-group">
                    <label>Program</label>
                    <select v-model="vmData.program" class="form-control">
                      <option>Program 1</option>
                      <option>Program 2</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Project</label>
                    <select v-model="vmData.project" class="form-control">
                      <option>Project 1</option>
                      <option>Project 2</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Datacenter</label>
                    <select v-model="vmData.dataCenter" class="form-control">
                      <option>Datacenter 1</option>
                      <option>Datacenter 2</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Environment</label>
                    <select v-model="vmData.enviornment" class="form-control">
                      <option>Environment 1</option>
                      <option>Environment 2</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Operating System</label>
                    <select v-model="vmData.OS" class="form-control">
                      <option>Windows</option>
                      <option>Linux</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>OS Architecture</label>
                    <select v-model="vmData.OSArchitecture" class="form-control">
                      <option>32-Bit</option>
                      <option>64-Bit</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label>Duration</label>
                    <input
                      class="form-control"
                      placeholder="Enter Duration in Days"
                      name="DisplayName"
                      type="text"
                      value=""
                      v-model="vmData.duration"
                    />
                  </div>
                  <div class="form-group">
                    <label>VM Type</label>
                    <select v-model="vmData.vmType" class="form-control">
                      <option>Type 1</option>
                      <option>Type 2</option>
                    </select>
                  </div>
                  <div><label>Backup Required</label></div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="backupyes"
                      value="yes"
                      v-model="vmData.backupRequired"
                    />
                    <label class="form-check-label" for="backupyes">Yes</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                     
                      id="backupNo"
                      value="no"
                      v-model="vmData.backupRequired"
                    />
                    <label class="form-check-label" for="backupNo">No</label>
                  </div>
                  <div><label>Monitoring Required</label></div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      
                      id="monyes"
                     value="yes"
                      v-model="vmData.monitoringRequired"
                    />
                    <label class="form-check-label" for="monyes">Yes</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                     
                      id="momno"
                      value="no"
                      v-model="vmData.monitoringRequired"
                    />
                    <label class="form-check-label" for="monno">No</label>
                  </div>
                  <div><label>PIP</label></div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="pipy"
                     value="yes"
                      v-model="vmData.pip"
                    />
                    <label class="form-check-label" for="pipy">Yes</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      
                      id="pipno"
                      value="no"
                      v-model="vmData.pip"
                    />
                    <label class="form-check-label" for="pipno">No</label>
                  </div>
                  <div><label>Internet Access</label></div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="iny"
                      value="yes"
                      v-model="vmData.internetAccess"
                    />
                    <label class="form-check-label" for="iny">Yes</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inno"
                      value="no"
                      v-model="vmData.internetAccess"
                    />
                    <label class="form-check-label" for="inno">No</label>
                  </div>
                  <!-- <div class="form-group">
                    <label>Duration</label>
                    <input
                      class="form-control"
                      placeholder="Enter Duration in Days"
                      name="DisplayName"
                      type="text"
                      value=""
                    />
                    
                  </div> -->
                  <div class="form-group">
                    <label>Resources</label>
                    <input
                      class="form-control"
                      placeholder="Enter Ram in GB"
                      name="DisplayName"
                      type="text"
                      value=""
                      v-model="vmData.resources.RAM"
                    />
                  </div>
                   <div class="form-group">
                    
                    <input
                      class="form-control"
                      placeholder="Enter CPU Core"
                      name="DisplayName"
                      type="text"
                      value=""
                      v-model="vmData.resources.CPU"
                    />
                   </div>
                    <div class="form-group">
                     <label>Disk</label>
                    <input
                      class="form-control"
                      placeholder="Enter Disk Partition"
                      name="DisplayName"
                      type="text"
                      value=""
                       v-model="vmData.resources.disks.partition"
                    />
                    <input
                      class="form-control"
                      placeholder="Enter Disk Size"
                      name="DisplayName"
                      type="text"
                      value=""
                       v-model="vmData.resources.disks.size"
                    />
                   </div>
                    
                     
                    
                    <div class="form-group">
                     <label>Firewall Rules</label>
                     <div class="form-group">
                     
                    <input
                      class="form-control"
                      placeholder="Enter Application"
                      name="DisplayName"
                      type="text"
                      value=""
                      v-model="vmData.firewallRules.application"
                    />
                    </div>
                    <div class="form-group">
                     
                    <input
                      class="form-control"
                      placeholder="Enter Port"
                      name="DisplayName"
                      type="text"
                      value=""
                      v-model="vmData.firewallRules.port"
                    />
                    </div>
                    <div class="form-group">
                     
                    <input
                      class="form-control"
                      placeholder="Enter Incoming/Outgoing"
                      name="DisplayName"
                      type="text"
                      value=""
                      v-model="vmData.firewallRules.incomingOutgoing"
                    />
                   </div>
                    <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Enter Source IP"
                      name="DisplayName"
                      type="text"
                      value=""
                      v-model="vmData.firewallRules.sourceIP"
                    />
                    </div>
                    <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Enter Destination IP"
                      name="DisplayName"
                      type="text"
                      value=""
                      v-model="vmData.firewallRules.destinationIP"
                    />
                    </div>

                 <!-- dummy data -->
                     <div class="form-group">
                    <label>author</label>
                    <input
                      class="form-control"
                      placeholder="Enter author"
                      name="author Name"
                      type="text"
                      value=""
                      v-model="vmData.author"
                    />
                  </div>
                  <div class="form-group">
                    <label>recipients</label>
                    

                    <div v-for="(find, index) in vmData.recipients"  :key="index">
                     <input
                      
                     v-model="find.vmData.recipients" 
                     >
                     </div>
                    <b-button class="btn" @click="addFind">
                      Add recipients
                     </b-button>

                    <!-- <input
                      class="form-control"
                      placeholder="Enter reciepent"
                      name="res Name"
                      type="text"
                      value=""
                      v-model="vmData.recipients[0]"
                    /> -->
                  </div>
                  <!-- dummy data -->
                   </div>
                  
                  <input
                    class="btn btn-lg btn-success btn-block"
                    type="submit"
                    value="Request Virtual Machine"
                  />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmpNavbar from "../components/EmpNavbar.vue";
import MQL from "@/plugins/mql.js";
export default {
  data() {
    return {
      vmData: {
        enviornment: "",
        duration: "",
        firewallRules: {
          application: "",
          port: "",
          incomingOutgoing: "",
          sourceIP: "",
          destinationIP: "",
        },
        program: "",
        OS: "",
        internetAccess: "",
        dataCenter: "",
        backupRequired: "",
        pip: "",
        project: "",
        OSArchitecture: "",
        resources: {
          RAM: "",
          CPU: "",
          disks: {
            partition: "",
            size: "",
          },
        },
        vmType: "",
        monitoringRequired: "",
        author: "",
        recipients:[],
        Date: "",
        status: "0",
      },
    };
  },
  components: { EmpNavbar },
  methods: {
    addVmData() {
      console.log(this.vmData);
       new MQL()
        .setActivity("o.[CreateVmReq]")
        .setData(this.vmData)
        .fetch()
        .then((res) => {
          console.log(res);
        });
       
    },
     addFind: function () {
      this.vmData.recipients.push({ username: '' });
    }
  },
};
</script>

<style>
.white {
  color: #000;
  background-color: #fff;
}

.btn-facebook {
  color: #ffffff;
  -webkit-text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  background-color: #2b4b90;
  *background-color: #133783;
  background-image: -moz-linear-gradient(top, #3b5998, #133783);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#3b5998),
    to(#133783)
  );
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
