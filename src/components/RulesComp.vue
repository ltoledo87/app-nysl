<template>
  <div>
    <div class="secTitle">
      <h1>{{ title }}</h1>
    </div>
    <b-container fluid>
      <b-row>
        <b-col>
          <div class="card">
            <div class="container">
              <br />
              <h4><b>Northside Youth Soccer League</b></h4>
              <p>RULES OF PLAY & POLICIES</p>
              <p>FIFA rules shall govern NYSL play except</p>
              <br />
              <div class="rules-content">
                <p><b>SPORTSMANSHIP</b></p>
                <ul class="square">
                  <li>
                    The common interest that members of the Association share is to
                    inspire youth to practice the ideals of sportsmanship and fair play.
                    Any player, coach, team, parent, spectator, administrator or referee
                    whose behavior detracts from this purpose is subject to disciplinary
                    action regardless of technical soccer background, expertise,
                    accomplishments or standing.
                  </li>
                </ul>
                <br />
                <p><b>FIFA FIELD REGULATIONS</b></p>
                <br />
                <ol class="reglamento">
                  <li>
                    <b>DIMENSIONS.</b> FIFA Law 1 provides for flexible external field
                    dimensions within a given maximum and minimum width and length. These
                    dimensions should be adhered to for all fields used by teams under 12
                    and older.
                  </li>
                  <br />
                  <li>
                    <b>COMPETITION FIELDS.</b> Fields used within the competition program
                    must be a minimum of 100 x 60 yards.Leagues, districts or associations
                    participating in the state competition program that are unable to
                    provide a field that meets these minimum requirements must advise the
                    State Competition Board which will assign its Fields Committee to
                    inspect the field and recommend to the Board whether or not a waiver
                    of the minimum dimensions should be granted. Teams from leagues,
                    districts or associations that are unable to provide an acceptable
                    field may be required to play all their games away.
                  </li>
                  <br />
                  <li><b>FIELDS USED BY YOUNG AGE GROUPS</b></li>
                </ol>
                <ol class="sub-item">
                  <li>
                    U-6 play on a field approximately 20 X 40 yards with no penalty areas.
                    Fields for older age groups should be progressively larger.
                  </li>
                  <li>
                    U-8 plays on a field 40-50 yards in length and 20-30 yards width.
                  </li>
                  <li>
                    U-10 play on a field 70-80 yards in length and 40-50 yards in width.
                  </li>
                  <li>
                    In addition, fields used by young age groups may have their internal
                    dimensions and size of goal similarly modified.
                  </li>
                </ol>
                <br />
                <p><b>TODOS JUEGAN</b></p>
                <br />
                <ul class="square">
                  <li>
                    All-play means that every recreation player on every team shall play
                    atleast fifty percent of each game. Coaches in the competition program
                    are encouraged to play their players 50% of each game.
                  </li>
                </ul>
                <ul class="circle">
                  <li>
                    A Coach shall be permitted to not play a player 50% of each game under
                    special circumstances, e.g., unexcused absences from practice and/or
                    games, ungentlemanly conduct at practice and/or games, and injuries.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "RulesComp",
  props: {
    title: String,
  },
};
</script>

<style scope></style>
