<template>
  <div id="app" class="app">
    <!--<img src="/static/logo.png">-->
    <div class="content">
      <div class="component">
        <About class="about"/>
        <Skill class="border-component"/>
      </div>
      <div class="component left-border">
        <Experience/>
      </div>
    </div>
    
  </div>
</template>

<script>
import About from './components/About'
import Experience from './components/Experience'
import Skill from './components/Skill'


export default {
  name: 'App',
  components: {
    About,
    Experience,
    Skill
  }
}
</script>

<style>

  .app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 5%;
  }

  .content {
    display: flex;
    justify-content: space-between;
    height: 80vh;
    align-items: center;
  }

  .component {
    width: 50%;
    text-align: center;
    padding: 5%;
  }

  .left-border {
    border-left: 2px;
    border-left-style: dashed;
    border-left-color: #2c3e50;
  }

  @media screen and (max-width: 700px) {
    .content {
      width: 100%;
      flex-direction: column;
    }
    .component {
      width: 90%;
    }

    .about {
      margin-bottom: 15%;
    }

    .left-border {
      border-left: 0px;
      margin-top: 0%;
    }

    .border-component {
      border-top: 2px;
      border-top-style: dashed;
      border-top-color: #2c3e50;
      border-bottom: 2px;
      border-bottom-style: dashed;
      border-bottom-color: #2c3e50;
      padding-top: 14%;
      padding-bottom: 10%;
    }
  }

  @media screen and (max-heigt: 1030px) {
    padding-top: 30%;

  }
  
</style>
