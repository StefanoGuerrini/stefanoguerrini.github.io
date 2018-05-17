<template>
  <div id="experience" class="experience">
      <div class="text">
        <h3>{{title}}</h3>
      </div>
      <ul>
        <li v-for="experience in experiences">
          <div class="company">
            <img class="image" :src="experience.logo">
            <div class="company-info">
              <p>{{experience.start_date | formatDate}} - {{experience.end_date | formatDate}} 
              | {{experience.start_date | getYears(experience.end_date)}}</p>
              <p>{{experience.role}} • <b>{{experience.company_name}}</b> • {{experience.location}}</p>
              <p><i>{{experience.technologies}}</i></p>
            </div>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return this.$store.state.experience
    }
  }
</script>

<style scoped>

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 3%;
  }

  .image {
    margin-right: 3%;
    height: 5em;
  }

  .experience {
    display: flex;
    flex-direction: column;
    
  }

  .company {
    width: 100%;
    display: inline-flex;
    align-items: center;
  }

  .company-info {
    text-align: start;
    display: table;
  }

  p {
    font-family: monospace;
  }

  .text {
    text-align: start;
    font-family: monospace;
  }

  @media screen and (max-width: 700px) {
    .company {
      flex-direction: column;
    }

    .company-info {
      text-align: center;
    }

    .text {
      text-align: center;
    }

    .image {
      margin-right: 0%;
      height: 5em;
    }
  }

</style>