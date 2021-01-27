<template>
  <div>
    <b-container fluid class="bg-primary py-3">
      <b-row>
        <b-col>
          <b-button variant="outline-light" class="mb-2" v-b-modal.modal-1>
            <b-icon icon="calendar3" font-scale="2" aria-hidden="true"></b-icon><br>
            Calendar
          </b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-light" class="mb-2">
            <b-icon
              icon="geo-alt-fill"
              font-scale="2"
              aria-hidden="true"
            ></b-icon><br>
            Location
          </b-button>
        </b-col>
        <b-col>
          <b-button variant="outline-light" class="mb-2">
            <b-icon
              icon="people-fill"
              font-scale="2"
              aria-hidden="true"
            ></b-icon><br>
            Teams
          </b-button>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid class="py-3">
      <b-row>
        <b-col>
          <b-button-toolbar key-nav justify>
            <b-button-group class="mx-1">
              <b-button>&lsaquo;</b-button>
            </b-button-group>
            <b-button-group class="mx-1">
              <b-button> {{calcOld}} </b-button>
              <b-button :pressed="true"> {{calcToday}} </b-button>
              <b-button> {{calcLast}} </b-button>
            </b-button-group>
            <b-button-group class="mx-1">
              <b-button>&rsaquo;</b-button>
            </b-button-group>
          </b-button-toolbar>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid>
      <b-row>
        <b-col cols="12" v-if="refresca == '' ">
          <div>
            <b-card
              border-variant="light"
              header-bg-variant="secondary"
              header-text-variant="light"
              header="No Match"
              align="center"
              header-tag="h2"
              body-bg-variant="info"
            >
              <b-card-text>
                <b-row>
                  <b-col>
                    <strong>There is no match on this date. Please select another day.</strong>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col sm="6" v-if="!!refresca">
          <div>  
            <b-card
              v-for="item in items"  v-bind:key="item.Partido"
              :header="item.Ubicacion"
              border-variant="light"
              header-bg-variant="secondary"
              header-text-variant="light"
              align="center"
              header-tag="h2"
              body-bg-variant="info"
              v-on:click="refrescadetalle(item.Partido)"
            >
              <b-card-text v-b-modal.modal-details>
                <b-row>
                  <b-col cols="4">
                    <strong>{{ item.Local }}</strong>
                  </b-col>
                  <b-col cols="4">{{ item.hora }} hrs.</b-col>
                  <b-col cols="4">
                    <strong>{{ item.Visita }}</strong>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
          </div>
        </b-col>

        <b-col class="d-none d-sm-block p-0" v-if="!!refresca">
          <div>
            <b-card
              v-for="itemdet in itemsdet"  v-bind:key="itemdet.Partido"
              :header="itemdet.Partido"
              border-variant="light"
              header-bg-variant="secondary"
              header-text-variant="light"
              align="center"
              header-tag="h2"
              body-bg-variant="info"
            >
              <b-card-text>
                <b-row>
                  <b-col align="right" align-self="center" sm="4">
                    <b-icon
                      icon="clock"
                      font-scale="2"
                      aria-hidden="true"
                    ></b-icon>
                  </b-col>
                  <b-col sm="8" align="left">
                    <h3><strong>{{ itemdet.Fecha}}</strong></h3>
                    <h3>{{ itemdet.hora }} hrs</h3>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col align="right" align-self="center" sm="4">
                    <b-icon
                      icon="geo-alt-fill"
                      font-scale="2"
                      aria-hidden="true"
                    ></b-icon>
                  </b-col>
                  <b-col sm="8" align="left">
                    <h3><strong>{{itemdet.Ubicacion}}</strong></h3>
                    <h3>{{itemdet.Direccion}}</h3>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12">
                    <div>
                      <b-embed
                        v-bind:src="itemdet.Url_Mapa"
                        type="iframe"
                        allowfullscreen
                        aria-hidden="false"
                        tabindex="0"
                      ></b-embed>
                    </div>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-modal
      id="modal-1"
      centered
      hide-header
      hide-footer
      no-fade
      content-class="w-auto mx-auto h-auto"
    >
    <div class="bg-white p-2 border rounded">
      <v-date-picker
        mode="date"
        :model-config="modelConfig"
        v-model="event_at"
        color="green"
        :available-dates= datesMatch
        :attributes='attrs'
      />
    </div>
    </b-modal>
    
     <b-modal id="modal-details" 
      title="Game Details"
      centered
      header-bg-variant="primary"
      header-text-variant="light"
      hide-footer>
      <b-container fluid>
                <b-row class="secTitle text-center">
                  <b-col>
                     <h2> E1 vs E2 </h2>
                  </b-col>
                </b-row>
                <b-row class="bg-info">
                  <b-col align="right" align-self="center"  cols="4">
                    <b-icon
                      icon="clock"
                      font-scale="2"
                      aria-hidden="true"
                    ></b-icon>
                  </b-col>
                  <b-col align="left" cols="8">
                    <h3><strong>18/11</strong></h3>
                    <h3>16:00 hrs</h3>
                  </b-col>
                </b-row>
                <b-row class="bg-info">
                  <b-col align="right" align-self="center" cols="4">
                    <b-icon
                      icon="geo-alt-fill"
                      font-scale="2"
                      aria-hidden="true"
                    ></b-icon>
                  </b-col>
                  <b-col align="left" cols="8">
                    <h3><strong>Location 1</strong></h3>
                    <h3>Address #200</h3>
                  </b-col>
                </b-row>
                <b-row class="py-4">
                  <b-col cols="12">
                    <div>
                      <b-embed
                        type="iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.1367191659924!2d-96.04379968457945!3d41.21879097927994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938c94099e3ef7%3A0xc95da51009f25a99!2s4151%20S%2084th%20St%20Suite%20B%2C%20Omaha%2C%20NE%2068127%2C%20EE.%20UU.!5e0!3m2!1ses-419!2scl!4v1605199597208!5m2!1ses-419!2scl"
                        allowfullscreen
                        aria-hidden="false"
                        tabindex="0"
                      ></b-embed>
                    </div>
                  </b-col>
                </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>

import datos from "@/assets/json/base-nysl.json";

export default {
  name: "Game",
  data () {
     return {
          event_at:new Date(),
          refresca:"",
          modelConfig: {
            type: 'string',
            mask: 'YYYY-MM-DD', // Uses 'iso' if missing
          },
           attrs: [
            {
              key: 'today',
              highlight: {
                color: 'blue',
                fillMode: 'outline',
              },
              dates: new Date(),
            },
          ],
   }

   },
  mounted(){
    this.calcEventAt();
        
  },
  methods:{
    refrescadetalle(val){
      this.refresca=val;

    },
    itemsSelectDay(val) {
          console.log(this.event_at)
          var dataDay = datos.filter(item => item.Fecha == val);
          console.log(dataDay)
          if(dataDay.length > 0){
            dataDay = dataDay[0]
            this.refresca = dataDay.Partido
          }
          else{
            this.refresca = "";
          }
          
      }, 
    calcEventAt() {   
            var today = new Date();
            today = today.getFullYear()+'-'+('0' + (today.getMonth()+1)).slice(-2)+'-'+today.getDate();
            this.event_at = today
            console.log(today)
    }, 
  },
  computed: {

    calcOld() {   
            var old = new Date(this.event_at);
            var dateOld = old.getDate()+'-'+('0' + (old.getMonth()+1)).slice(-2);
            return dateOld
      }, 
    calcToday() {   
            var today = new Date(this.event_at);
              today.setDate(today.getDate()+1)
            var dateToday = today.getDate()+'-'+('0' + (today.getMonth()+1)).slice(-2);
            return dateToday
      },
    calcLast() {   
            var last = new Date(this.event_at);
             last.setDate(last.getDate()+2)
            var dateLast= last.getDate()+'-'+('0' + (last.getMonth()+1)).slice(-2);
            return dateLast
      },

    items() {
      return datos.map((item) => {
        return item ;
      }).filter(x => x.Fecha == this.event_at)
      }, 
    
    itemsdet() {
        return datos.map((item) => {
        return item;
      }).filter(x => x.Fecha == this.event_at && x.Partido ==  this.refresca)
      }, 

    datesMatch() {
      var dates= datos.map(x => x.Fecha);
      dates = [...new Set(dates)];
      console.log(dates)
      let results=[];
      dates.forEach(date => {
        results.push(  {start: new Date(date.replace(/-/g, '/')),end: new Date(date.replace(/-/g, '/'))})
      });
      console.log(results);
      return results
    }

    },
  watch: {
  event_at:function(val){

      this.itemsSelectDay(val)
    }
  }

};
</script>

<style scope>
</style>