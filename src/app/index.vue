<template>
  <v-app>
    <v-app-bar class="primary" temporary app>
      <v-app-bar-title class="justify-center">SendIt</v-app-bar-title>
      <img
        id="sendItLogo"
        src="../assets/Small.png"
        alt="icon"
        height="30px"
        width="40px"
      />

      <v-spacer />
      <SignUpDialog />
      <LoginDialog />
    </v-app-bar>
    <v-main>
      <v-container id="hero-card">
        <v-card>
          <v-img src="../assets/SendItExample.png" alt="mockup" />
          <v-card-title class="hero-title">Message Scheduler</v-card-title>
          <v-card-text class="hero-text">
            Say "hello" to a different messaging experience.<br />
            Being able to send automated messages, so your clients and friends
            will always be in the loop!
          </v-card-text>
        </v-card>
      </v-container>
      <v-container>
        <br />
        <v-row>
          <v-col>
            <v-card>
              <v-img
                src="https://i.ibb.co/n164jK1/Nonprofit503-876fb51a00d7d9de8a2c23f94394278191947bd56a8048df5d0138cde497332f.png"
                alt="mockup"
              />
            </v-card>

            <br />

            <v-card class="adjusted-height1">
              <v-card-title id="free-title">Free for everyone!</v-card-title>
              <v-card-text id="card-text"
                >Send Messages around the globe completely free, Get started and
                schedule messages today!</v-card-text
              >
            </v-card>
          </v-col>
          <br />
          <v-col>
            <v-card>
              <v-img
                src="https://i.ibb.co/5LDHsHX/No-Ads-3d8c77d5daeadd4c02fd3f4343745812fd4f79406a01b4924cf53549957297e0.png"
                alt="mockup"
              />
            </v-card>
            <br />
            <v-card class="adjusted-height">
              <v-card-title id="ad-title"
                >No ads. No trackers. No kidding.</v-card-title
              >
              <v-card-text id="card-text2"
                >There are no ads, no affiliate marketers, and no creepy
                tracking in Send It. So focus on sending the messages that
                matter with the people who matter to you.</v-card-text
              >
            </v-card>
          </v-col>
        </v-row>
        <br />

        <v-container>
          <v-card>
            <v-card-title>
              Meet the team!
            </v-card-title>

            <v-row>
              <v-col>Josh Gerontis </v-col>
              <v-col>Crew Spencer </v-col>
              <v-col>Kayle Shurtliff</v-col>
            </v-row>
            <v-row id="positions">
              <v-col>Full Stack Developer </v-col>
              <v-col>Front End Developer </v-col>
              <v-col>Back End Developer </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-avatar @click="openProfile('josh')" color="teal">
                  <v-icon dark>
                    mdi-account-circle
                  </v-icon>
                </v-avatar>
              </v-col>
              <v-col>
                <v-avatar @click="openProfile('crew')" color="blue">
                  <v-icon dark>
                    mdi-account-circle
                  </v-icon>
                </v-avatar></v-col
              >
              <v-col>
                <v-avatar @click="openProfile('kayle')" color="green">
                  <v-icon dark>
                    mdi-account-circle
                  </v-icon>
                </v-avatar>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
        <br />
        <br />
        <br />
        <br />
        <br />

        <v-footer absolute bottom v-bind="localAttrs" :padless="true">
          <v-card flat tile width="100%" class="orange darken-1 text-center">
            <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                icon
                @click="page = 'calendar'"
              >
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-text>

            <v-divider></v-divider>
            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} — <strong> © SendIt</strong>
            </v-card-text>
          </v-card>
        </v-footer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LoginDialog from "../components/LoginDialog.vue";
import SignUpDialog from "../components/SignupDialog.vue";

export default {
  name: "page",
  components: {
    LoginDialog,
    SignUpDialog
  },
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
  }),
  methods: {
    openProfile: function(who) {
      switch (who) {
        case "josh":
          window.open("https://www.linkedin.com/in/joshua-gerontis-65646920b/");
          break;
        case "crew":
          window.open("https://www.linkedin.com/in/crew-spencer-204b981b8/");
          break;
        case "kayle":
          window.open("https://www.linkedin.com/in/kayle-shurtliff-b962351ab/");
          break;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.v-card__title {
  justify-content: space-around;
}

#positions {
  font-size: 10px;
  margin-top: -20px;
  color: gray;
  font-weight: bold;
}

.v-avatar:hover {
  cursor: pointer;
}
#card-text {
  padding-bottom: 38px;
}
#hero-card {
  margin-top: -50px;
}

#sendItLogo {
  padding-left: 10px;
  padding-bottom: 2px;
}

@media (min-width: 1025px) {
  #hero-card {
    height: 600px;
    width: 1200px;
    padding-bottom: 800px;
  }
}
</style>
