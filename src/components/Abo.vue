<template>
    <div>
    <div class="secTitle">
        <h1>{{ title}} </h1>
    </div>
    <b-container fluid>
      <b-row>
      <b-col>
        <div >
          <b-card border-variant="light" header="Mission" header-bg-variant="secondary"
        header-text-variant="prymary" align="center" header-tag="h2" body-bg-variant="info">
            <b-card-text><strong>To support young athletes living in Chicago's northside neighborhoods, who have an interest in learning and playing soccer, with opportunities to learn and practice skills related to the game of soccer, specifically those skills around team cooperation and good sportsmanship.</strong></b-card-text>
          </b-card>
        </div>
        <div >
          <b-card border-variant="light" header="Vision" header-bg-variant="secondary"
        header-text-variant="primary" align="center" header-tag="h2" body-bg-variant="info">
            <b-card-text><strong>The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self-discipline, and leadership.</strong></b-card-text>
          </b-card>
        </div>
        <div >
          <b-card border-variant="light" header="General Information" header-bg-variant="secondary"
        header-text-variant="pimary" align="center" header-tag="h2" body-bg-variant="info">
            <b-card-text><strong>The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's northside neighborhoods an environment in which to learn and play soccer. To be a member of NYSL, you must be between the ages of 4 - 12 and reside in a Chicago northside neighborhood. NYSL is run by a small full-time staff, and relies on the generous volunteer time of parents and previous league members.</strong></b-card-text>
          </b-card>
        </div>
      </b-col>
      </b-row>
    </b-container>
    </div>
</template>

<script>
export default {
  name: 'Abo',
  props: {
    title: String,
  }
}
</script>

<style scope>

</style>