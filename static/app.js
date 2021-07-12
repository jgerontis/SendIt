// vue

var app = new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {
    page: "home",
    drawer: false,
    login: false,
    signup: false,

    new_message_type: "",
    new_message_destinationNum: "",
    new_message_destinationAddr: "",
    new_message_sendTime: Date.now(),
    new_message_body: "",

    new_user_fname: "",
    new_user_lname: "",
    new_user_pNumber: "",
    new_user_emailAddr: "",
    new_user_password: "",

    selected_message_id: "",

    messages: [],

    server_url: "http://localhost:8080",
  },
  created: function () {
    this.getMessages();
  },
  methods: {
    // message section WOWZA
    getMessages: function () {
      fetch(this.server_url + "/message").then(function (res) {
        res.json().then(function (data) {
          app.messages = data;
        });
      });
    },
    getMessage: function () {
      fetch(this.server_url + "/message/" + this.selected_message_id).then(
        function (res) {
          res.json().then(function (data) {
            app.messages = data;
          });
        }
      );
    },

    postMessage: function () {
      var new_message = {
        //put the v-model inputs here
      };
      fetch(this.server_url + "message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(new_message),
      }).then(function () {
        //this is where we would reset input feilds
      });
    },
  },
  deleteMessage: function (message_id) {
    fetch(this.server_url + "/message/" + message_id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(function () {
      app.getMessages();
    });
  },

  computed: {
    sorted_messages: function () {
      if (this.selected_category == "all") {
        return this.messages;
      } else {
        var sorted_messages = this.messages.filter(function (message) {
          return message.category == app.selected_category;
        });
        return sorted_messages;
      }
    },
  },
});
