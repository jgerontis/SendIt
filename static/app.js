






// vue



var app = new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {
    page: "home",
    drawer: true,
    login: false,
    signup: false,
    senditDialog: false,
    startedDialog: false,
    signupDialog: false,
    loginDialog: false,
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,

    selectedDate: null,

    icons: [
      'mdi-home',
      'mdi-email',
      'mdi-calendar',
      'mdi-delete',
    ],
    items: [
      'default',
      'absolute',
      'fixed',
    ],
    padless: false,
    variant: 'default',


      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
  



    value: '',
    events: [],
    colors: ['#2196F3', '#3F51B5', '#673AB7', '#00BCD4', '#4CAF50', '#FF9800', '#757575'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    dragEvent: null,
    dragStart: null,
    createEvent: null,
    createStart: null,
    extendOriginal: null,

    

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
    users: [],

    server_url: "http://localhost:8080",
  },
  created: function () {
    this.getMessages();
  },




    methods: {
      startDrag ({ event, timed }) {
        if (event && timed) {
          this.dragEvent = event
          this.dragTime = null
          this.extendOriginal = null
        }
      },
      startTime (tms) {
        const mouse = this.toTime(tms)

        if (this.dragEvent && this.dragTime === null) {
          const start = this.dragEvent.start

          this.dragTime = mouse - start
        } else {
          this.createStart = this.roundTime(mouse)
          this.createEvent = {
            name: `Event #${this.events.length}`,
            color: this.rndElement(this.colors),
            start: this.createStart,
            end: this.createStart,
            timed: true,
          }

          this.events.push(this.createEvent)
        }
      },
      extendBottom (event) {
        this.createEvent = event
        this.createStart = event.start
        this.extendOriginal = event.end
      },
      mouseMove (tms) {
        const mouse = this.toTime(tms)

        if (this.dragEvent && this.dragTime !== null) {
          const start = this.dragEvent.start
          const end = this.dragEvent.end
          const duration = end - start
          const newStartTime = mouse - this.dragTime
          const newStart = this.roundTime(newStartTime)
          const newEnd = newStart + duration

          this.dragEvent.start = newStart
          this.dragEvent.end = newEnd
        } else if (this.createEvent && this.createStart !== null) {
          const mouseRounded = this.roundTime(mouse, false)
          const min = Math.min(mouseRounded, this.createStart)
          const max = Math.max(mouseRounded, this.createStart)

          this.createEvent.start = min
          this.createEvent.end = max
        }
      },
      endDrag () {
        this.dragTime = null
        this.dragEvent = null
        this.createEvent = null
        this.createStart = null
        this.extendOriginal = null
      },
      cancelDrag () {
        if (this.createEvent) {
          if (this.extendOriginal) {
            this.createEvent.end = this.extendOriginal
          } else {
            const i = this.events.indexOf(this.createEvent)
            if (i !== -1) {
              this.events.splice(i, 1)
            }
          }
        }

        this.createEvent = null
        this.createStart = null
        this.dragTime = null
        this.dragEvent = null
      },
      roundTime (time, down = true) {
        const roundTo = 15 // minutes
        const roundDownTime = roundTo * 60 * 1000

        return down
          ? time - time % roundDownTime
          : time + (roundDownTime - (time % roundDownTime))
      },
      toTime (tms) {
        return new Date(tms.year, tms.month - 1, tms.day, tms.hour, tms.minute).getTime()
      },
      getEventColor (event) {
        const rgb = parseInt(event.color.substring(1), 16)
        const r = (rgb >> 16) & 0xFF
        const g = (rgb >> 8) & 0xFF
        const b = (rgb >> 0) & 0xFF

        return event === this.dragEvent
          ? `rgba(${r}, ${g}, ${b}, 0.7)`
          : event === this.createEvent
            ? `rgba(${r}, ${g}, ${b}, 0.7)`
            : event.color
      },
      getEvents ({ start, end }) {
        const events = []

        const min = new Date(`${start.date}T00:00:00`).getTime()
        const max = new Date(`${end.date}T23:59:59`).getTime()
        const days = (max - min) / 86400000
        const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < eventCount; i++) {
          const timed = this.rnd(0, 3) !== 0
          const firstTimestamp = this.rnd(min, max)
          const secondTimestamp = this.rnd(2, timed ? 8 : 288) * 900000
          const start = firstTimestamp - (firstTimestamp % 900000)
          const end = start + secondTimestamp

          events.push({
            name: this.rndElement(this.names),
            color: this.rndElement(this.colors),
            start,
            end,
            timed,
          })
        }

        this.events = events
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
      rndElement (arr) {
        return arr[this.rnd(0, arr.length - 1)]
      },
  















    // message section WOWZA
    getMessages: function () {
      fetch(this.server_url + "/message").then(function (res) {
        res.json().then(function (data) {
          app.messages = data;
        });
      });
    },
    /*
    getMessage: function () {
      fetch(this.server_url + "/message/" + this.selected_message_id).then(
        function (res) {
          res.json().then(function (data) {
            app.messages = data;
          });
        }
      );
    },*/

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

    getUsers: function(){
        fetch(this.server_url + "/user").then(function (res) {
            res.json().then(function (data) {
              app.users = data;
            });
          });
    },
    /*getUser: function(){

    }*/
    postUser: function(){
        var new_user = {
            //put the v-model inputs here
          };
          fetch(this.server_url + "user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(new_user),
          }).then(function () {
            //this is where we would reset input feilds
          });
    },
    deleteUser: function (user_id) {
        fetch(this.server_url + "/user/" + user_id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }).then(function () {
          app.getUsers();
        });
    },
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
    localAttrs () {
      const attrs = {}
  
      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
  },





});



