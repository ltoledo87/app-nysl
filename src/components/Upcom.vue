<template>
    <div>
    <div class="secTitle">
        <h1>{{ title}} </h1>
    </div>
    <b-container fluid>
      <b-row>
      <b-col>
        <div >
          <b-card border-variant="light" header="August 4" header-bg-variant="secondary"
        header-text-variant="prymary" align="center" header-tag="h2" body-bg-variant="info">
            <b-card-text><strong>NYSL Fundraiser</strong></b-card-text>
          </b-card>
        </div>
        <div >
          <b-card border-variant="light" header="August 16" header-bg-variant="secondary"
        header-text-variant="primary" align="center" header-tag="h2" body-bg-variant="info">
            <b-card-text><strong>Season Kick-off: Meet the Teams</strong></b-card-text>
          </b-card>
        </div>
        <div >
          <b-card border-variant="light" header="September 1" header-bg-variant="secondary"
        header-text-variant="pimary" align="center" header-tag="h2" body-bg-variant="info">
            <b-card-text><strong>First Game of the Season (Check Game Schedule for details)</strong></b-card-text>
          </b-card>
        </div>
      </b-col>
      </b-row>
    </b-container>

    </div>
</template>

<script>
export default {
  name: 'Upcom',
  props: {
    title: String,
  },
   methods: {
      welcomeToast() {
        this.$bvToast.toast('Welcome to system', {
          title: `NYSL`,
          toaster: 'b-toaster-bottom-center',
          variant: 'primary',
          solid: true
        })
      }
    }
}
</script>

<style>

    
</style>