<template>
  <div>
    <div class="secTitle">
        <h1>{{ title}} </h1>
    </div>
    <b-container fluid>
      <b-row>
      <b-col>
          <b-card border-variant="light" align="center" body-bg-variant="info">
            <b-card-text>
              <strong><p >Please email us at nysl@chisoccer.org</p>
              <p >We will reply to your email as soon as we can.</p></strong>
              </b-card-text>
          </b-card>
      </b-col>
      </b-row>
            
      <b-row>
      <b-col>
        <h2><b-icon icon="geo-alt-fill" font-scale="1" aria-hidden="true"></b-icon> {{$store.getters.datoscontactabilidad}}</h2>
      </b-col>
      </b-row>

      <b-row>
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
  </div>
</template>

<script>
export default {
  name: 'Cont',
  props: {
    title: String,
  }
}
</script>

<style scope>

</style>