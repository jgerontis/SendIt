<template>
  <v-app>
    <v-app-bar class="primary" temporary app>
      <v-app-bar-title>SendIt</v-app-bar-title>
      <v-spacer />
      <SignUpDialog />
      <LoginDialog />
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card>
          <v-img
            src="https://i.ibb.co/GxxpbMY/office-sendit.png"
            alt="mockup"
          />
          <v-card-title class="hero-title">Message Scheduler</v-card-title>
          <v-card-text class="hero-text">
            Say "hello" to a different messaging experience.<br />
            Being able to send automated messages, so your clients and friends
            will always be in the loop!
          </v-card-text>
        </v-card>

        <br />
        <hr class="rounded" />
        <br />

        <v-card>
          <v-img
            src="https://i.ibb.co/n164jK1/Nonprofit503-876fb51a00d7d9de8a2c23f94394278191947bd56a8048df5d0138cde497332f.png"
            alt="mockup"
          />
        </v-card>

        <br />
        <hr class="rounded" />
        <br />

        <v-card shaped class="adjusted-height1">
          <v-card-title id="free-title">Free for everyone!</v-card-title>
          <v-card-text id="card-text"
            >Send Messages around the globe completely free, Get started and
            schedule messages today!</v-card-text
          >
        </v-card>

        <br />

        <v-card shaped class="adjusted-height">
          <v-card-title id="ad-title"
            >No ads. No trackers. No kidding.</v-card-title
          >
          <v-card-text id="card-text2"
            >There are no ads, no affiliate marketers, and no creepy tracking in
            Send It. So focus on sending the messages that matter with the
            people who matter to you.</v-card-text
          >
        </v-card>
        <br />
        <v-card>
          <v-img
            src="https://i.ibb.co/5LDHsHX/No-Ads-3d8c77d5daeadd4c02fd3f4343745812fd4f79406a01b4924cf53549957297e0.png"
            alt="mockup"
          />
        </v-card>

        <br />
        <hr class="rounded" />
        <br />

        <v-carousel v-model="model">
          <v-carousel-item v-for="(color, i) in colors" :key="color">
            <v-sheet :color="color" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">Slide {{ i + 1 }}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

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
      <!--
      <v-container class="hero-container" fluid v-if="page == 'home'">
        
        
        <br />
        <div class="adjusted-height1">
          
        </div>
        <br />
        <div id="card-section2">
          
        </div>
        <br />

        <br />
        <hr class="rounded" />
        <br />

        <v-container id="testimonial">
          
        </v-container>
        <hr class="rounded" />

        <br />

        
      </v-container>
       -->
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
  })
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
</style>
