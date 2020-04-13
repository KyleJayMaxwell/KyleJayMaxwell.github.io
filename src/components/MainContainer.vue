<template>
  <div class="main-container">
    <div class="title-container">
      <h1>{{ title }}</h1>
    </div>
    <div class="social-link-container">
      <font-awesome-icon @click="openInstagramLink()" :icon="['fab', 'instagram']" size="2x"/>
      <font-awesome-icon @click="openGithubLink()" :icon="['fab', 'github']" size="2x"/>
      <font-awesome-icon @click="openLinkedinLink()" :icon="['fab', 'linkedin']" size="2x"/>
      <div v-if="emailCopied" class="copy-message-container">
        Kyle's email has successfully been copied!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContainer',

  data() {
    return {
      emailCopied: false,
    };
  },

  props: {
    title: String,
  },

  methods: {
    openGithubLink() {
      window.open('https://github.com/KyleJayMaxwell');
    },
    openInstagramLink() {
      window.open('https://www.instagram.com/kylejaymaxwell/');
    },
    openLinkedinLink() {
      window.open('https://www.linkedin.com/in/kylejaymaxwell/');
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-container {
  width: 100vw;
  height: 95vh;
  .title-container {
    h1 {
      position: absolute;
      top: 8px;
      left: 16px;
      font-size: 18px;

      &.black {
        color: black;
      }

      &.white {
        color: white;
      }
    }

  }
  .social-link-container {
    text-align: center;
    margin: 0;
    position: absolute;
    top: 50vh;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 100vw;

    svg {
      cursor: pointer;
      margin: 0px 20px;

      &.black {
        color: black;
      }

      &.white {
        color: white;
      }
    }
  }
}
</style>
