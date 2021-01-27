<template>
    <div>
    <div class="secTitle">
        <h1>{{ title}} </h1>
    </div>
    <div class="cardsContainer">
        <div class="card">
           <form>
            <div class="cardTextInput">
                <input class="inputRegi" type="text" placeholder="Player's First Name">
            </div>
            <div class="cardTextInput">
                <input class="inputRegi" type="text" placeholder="Last Name">
            </div>
            <div class="cardTextInput">
                <input class="inputRegi" type="text" placeholder="Street Address">
            </div>
            <div class="cardTextInput">
                <input class="inputRegi" type="text" placeholder="City">
            </div>
            <div class="cardTextInput">
                <input class="inputRegi" type="text" placeholder="Zip Code">
            </div>
            <div class="cardTextInput">
                <input class="inputRegi" type="text" placeholder="Birth Date (mm/dd/yyyy):">
            </div>
            <div class="cardTextInput">
                <input class="inputRegi" type="text" placeholder="Parent/Guardian Name">
            </div>
            <div class="cardTextInput">
                <input class="inputRegi" type="text" placeholder="Contact Phone">
            </div>
            <div class="cardTextInput">
                <input class="inputRegi" type="text" placeholder="Contact Email">
            </div>
            <div class="cardTextInput">
              <label for="female">Female</label>
              <input type="radio" name="gender" id="female" value="female"/>
              <label for="male">Male</label>
              <input type="radio" name="gender" id="male" value="male"/>
            </div>
            <div class="cardTextInput">
                 <p><input type="submit"/></p>
            </div>
           </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Regi',
  props: {
    title: String,
  }
}
</script>

<style lang="scss" scoped>

.cardTextInput{
    grid-column: 1 / span 1;
    grid-row: auto;
    margin-top: 10px;
    .inputRegi{
      width: 95%;
      background-color: #eee;
      border-radius: 5px;
      padding: 10px;
    }
}
</style>