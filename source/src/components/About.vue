<template>
  <div id="about" class="about">
      <div class="text">
        <h3>{{msg}}</h3>
        {{about_me}}
        {{about_tech}}
      </div>
      
      <ul>
        <li v-for="link in links">
          <a class="link" :href="link.url" target="_blank">
            <img class="image" :src="link.logo">
          </a>
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return this.$store.state.about
    }
  }
</script>

<style scoped>

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline;
    margin: 2%;
  }

  .text {
    text-align: start;
    font-family: monospace;
    margin-bottom: 3%;
  }

  .image {
    height: 1.5em;
  }

  .about {
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-family: monospace;
  }

  @media screen and (max-width: 700px) {
    h3 {
      text-align: center;
    }
  }

</style>
