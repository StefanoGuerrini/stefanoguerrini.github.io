<template>
  <div id="skill" class="skill">
    <ul>
      <li v-for="skill in skills">
        <div class="text">
          <h3>{{skill.title}}</h3>
        </div>

        <ul class="skill-list">
          <li class=tech v-for="tech in skill.technologies">
            <div class="tech-info">
              <img class="image" :src="tech.logo"/>
              <p>{{tech.name}}</p>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return this.$store.state.skill
    }
  }
</script>

<style scoped>

  ul {
    list-style-type: none;
    padding: 0;
  }

  .skill-list{
    display: flex;
  }

  .tech {
    margin-right: 5%;
  }

  .tech-info {
    display: inline-flex;
    align-items: center;
  }

  .image {
    height: 1em;
    margin-right: 5%;
  }


  .skill {
    font-family: monospace;
  }

  .text {
    text-align: start;
    margin-bottom: -2%;
  }

  @media screen and (max-width: 700px) {
    .text {
      text-align: center;
    }
    .skill-list {
      display: inline-flex;
      width: 100%;
      justify-content: center;
    }
  }

  @media screen and (max-width: 300px) {
    .skill-list {
      display: flow-root;
      width: 100%;
      text-align: center;
    }
  }

</style>