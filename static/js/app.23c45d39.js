(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",e._l(e.pages,(function(t){return a("NavigationItem",{key:t.title,attrs:{title:t.title,icon:t.icon},on:{changepage:e.changepage}})})),1)],1),a("v-app-bar",{staticClass:"primary",attrs:{temporary:"",app:""}},[a("v-app-bar-nav-icon",{staticClass:"d-lg-none",on:{click:function(t){e.drawer=!e.drawer}}}),a("v-app-bar-title",[e._v("SendIt")]),a("v-spacer")],1),a("v-main",["Calendar"==e.page?a("CalendarPage"):"List"==e.page?a("ListPage"):"Settings"==e.page?a("SettingsPage"):e._e()],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",[a("v-date-picker",{ref:"picker",attrs:{"picker-date":e.pickerDate,"event-color":function(e){return e[9]%2?"red":"yellow"},events:e.arrayEvents,"full-width":""},on:{"update:pickerDate":function(t){e.pickerDate=t},"update:picker-date":function(t){e.pickerDate=t}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),a("v-col",[a("div",{staticClass:"text-h6"},[e._v(" Month news ("+e._s(e.pickerDate||"change month...")+") ")]),a("div",{staticClass:"subheading"},[e._v(" Change month to see other news ")]),a("ul",{staticClass:"ma-4"},e._l(e.messages,(function(t){return a("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)])],1)],1)},s=[],l=a("2909"),c=(a("4de4"),a("d81d"),{name:"CalendarPage",data:function(){return{arrayEvents:null,date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),pickerDate:null,messages:["President met with prime minister","New power plant opened","Rocket launch announced","Global warming discussion cancelled","Company changed its location"]}},watch:{pickerDate:function(){this.notes=[this.allNotes[Math.floor(5*Math.random())],this.allNotes[Math.floor(5*Math.random())],this.allNotes[Math.floor(5*Math.random())]].filter((function(e,t,a){return a.indexOf(e)===t}))}},created:function(){},mounted:function(){this.arrayEvents=Object(l["a"])(Array(6)).map((function(){var e=Math.floor(30*Math.random()),t=new Date;return t.setDate(e),t.toISOString().substr(0,10)}))},methods:{}}),d=c,u=a("2877"),p=a("6544"),m=a.n(p),v=a("62ad"),f=a("a523"),g=a("2e4b"),h=a("0fd9"),b=Object(u["a"])(d,o,s,!1,null,null,null),y=b.exports;m()(b,{VCol:v["a"],VContainer:f["a"],VDatePicker:g["a"],VRow:h["a"]});var _=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-list",e._l(e.messages,(function(e){return a("MessageSmall",{key:e._id,attrs:{body:e.body,type:e.type,destination:e.destination}})})),1),a("NewListMessage")],1)},k=[],w=(a("d3b7"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[e._v(" "+e._s(e.destination)+" ")]),a("v-card-subtitle",[e._v(" "+e._s(e.send_date)+" ")]),a("v-card-text",[e._v(" "+e._s(e.body)+" ")])],1)}),x=[],V={name:"MessageSmall",props:["destination","send_date","body"]},D=V,T=a("b0af"),S=a("99d9"),C=Object(u["a"])(D,w,x,!1,null,null,null),O=C.exports;m()(C,{VCard:T["a"],VCardSubtitle:S["b"],VCardText:S["c"],VCardTitle:S["d"]});var P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"primary",attrs:{large:"",bottom:"",right:"",fixed:""}},"v-btn",i,!1),n),[a("v-icon",[e._v(" mdi-plus ")])],1)]}}]),model:{value:e.newMessage,callback:function(t){e.newMessage=t},expression:"newMessage"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v("New Message")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-radio-group",{attrs:{mandatory:""},model:{value:e.radioGroup,callback:function(t){e.radioGroup=t},expression:"radioGroup"}},[a("v-radio",{attrs:{label:"Email",value:e.email}}),a("v-radio",{attrs:{label:"Text",value:e.text}})],1),a("date-time-picker")],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Destination",hint:"Text: 1234567890\n              Email: bob@example.com"}}),a("v-textarea",{attrs:{counter:"",clearable:"","clear-icon":"mdi-close-circle",label:"Message"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.newMessage=!1}}},[e._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.newMessage=!1}}},[e._v(" Save ")])],1)],1)],1)},M=[],j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{width:e.dialogWidth},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-text-field",e._g(e._b({attrs:{disabled:e.disabled,loading:e.loading,label:e.label,value:e.formattedDatetime,readonly:""},scopedSlots:e._u([{key:"progress",fn:function(){return[e._t("progress",(function(){return[a("v-progress-linear",{attrs:{color:"primary",indeterminate:"",absolute:"",height:"2"}})]}))]},proxy:!0}],null,!0)},"v-text-field",e.textFieldProps,!1),n))]}}]),model:{value:e.display,callback:function(t){e.display=t},expression:"display"}},[a("v-card",[a("v-card-text",{staticClass:"px-0 py-0"},[a("v-tabs",{attrs:{"fixed-tabs":""},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[a("v-tab",{key:"calendar"},[e._t("dateIcon",(function(){return[a("v-icon",[e._v("event")])]}))],2),a("v-tab",{key:"timer",attrs:{disabled:e.dateSelected}},[e._t("timeIcon",(function(){return[a("v-icon",[e._v("access_time")])]}))],2),a("v-tab-item",{key:"calendar"},[a("v-date-picker",e._b({attrs:{"full-width":""},on:{input:e.showTimePicker},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-date-picker",e.datePickerProps,!1))],1),a("v-tab-item",{key:"timer"},[a("v-time-picker",e._b({ref:"timer",staticClass:"v-time-picker-custom",attrs:{"full-width":""},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},"v-time-picker",e.timePickerProps,!1))],1)],1)],1),a("v-card-actions",[a("v-spacer"),e._t("actions",(function(){return[a("v-btn",{attrs:{color:"grey lighten-1",text:""},nativeOn:{click:function(t){return e.clearHandler.apply(null,arguments)}}},[e._v(e._s(e.clearText))]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.okHandler}},[e._v(e._s(e.okText))])]}),{parent:this})],2)],1)],1)},I=[],L=(a("a9e3"),a("b166")),$=a("2cf3"),E="",N="00:00:00",F="yyyy-MM-dd",A="HH:mm:ss",H=340,B="CLEAR",G="OK",R={name:"DateTimePicker",model:{prop:"datetime",event:"input"},props:{datetime:{type:[Date,String],default:null},disabled:{type:Boolean},loading:{type:Boolean},label:{type:String,default:""},dialogWidth:{type:Number,default:H},dateFormat:{type:String,default:F},timeFormat:{type:String,default:"HH:mm"},clearText:{type:String,default:B},okText:{type:String,default:G},textFieldProps:{type:Object},datePickerProps:{type:Object},timePickerProps:{type:Object}},data:function(){return{display:!1,activeTab:0,date:E,time:N}},mounted:function(){this.init()},computed:{dateTimeFormat:function(){return this.dateFormat+" "+this.timeFormat},defaultDateTimeFormat:function(){return F+" "+A},formattedDatetime:function(){return this.selectedDatetime?Object(L["a"])(this.selectedDatetime,this.dateTimeFormat):""},selectedDatetime:function(){if(this.date&&this.time){var e=this.date+" "+this.time;return 5===this.time.length&&(e+=":00"),Object($["a"])(e,this.defaultDateTimeFormat,new Date)}return null},dateSelected:function(){return!this.date}},methods:{init:function(){var e;this.datetime&&(this.datetime instanceof Date?e=this.datetime:("string"===typeof this.datetime||this.datetime instanceof String)&&(e=Object($["a"])(this.datetime,this.dateTimeFormat,new Date)),this.date=Object(L["a"])(e,F),this.time=Object(L["a"])(e,A))},okHandler:function(){this.resetPicker(),this.$emit("input",this.selectedDatetime)},clearHandler:function(){this.resetPicker(),this.date=E,this.time=N,this.$emit("input",null)},resetPicker:function(){this.display=!1,this.activeTab=0,this.$refs.timer&&(this.$refs.timer.selectingHour=!0)},showTimePicker:function(){this.activeTab=1}},watch:{datetime:function(){this.init()}}},J=R,W=a("8336"),z=a("169a"),K=a("132d"),Y=a("8e36"),q=a("2fa4"),Q=a("71a3"),U=a("c671"),X=a("fe57"),Z=a("8654"),ee=a("c964"),te=Object(u["a"])(J,j,I,!1,null,null,null),ae=te.exports;m()(te,{VBtn:W["a"],VCard:T["a"],VCardActions:S["a"],VCardText:S["c"],VDatePicker:g["a"],VDialog:z["a"],VIcon:K["a"],VProgressLinear:Y["a"],VSpacer:q["a"],VTab:Q["a"],VTabItem:U["a"],VTabs:X["a"],VTextField:Z["a"],VTimePicker:ee["a"]});var ne={name:"NewListMessage",components:{DateTimePicker:ae},data:function(){return{newMessage:!1,datetime:new Date}}},ie=ne,re=a("67b6"),oe=a("43a6"),se=a("a844"),le=Object(u["a"])(ie,P,M,!1,null,null,null),ce=le.exports;m()(le,{VBtn:W["a"],VCard:T["a"],VCardActions:S["a"],VCardText:S["c"],VCardTitle:S["d"],VCol:v["a"],VContainer:f["a"],VDialog:z["a"],VIcon:K["a"],VRadio:re["a"],VRadioGroup:oe["a"],VRow:h["a"],VSpacer:q["a"],VTextField:Z["a"],VTextarea:se["a"]});var de={name:"ListPage",components:{MessageSmall:O,NewListMessage:ce},data:function(){return{messages:[],server_url:"http://localhost:3000"}},methods:{getMessages:function(){}},created:function(){console.log(this.messages);var e=this;fetch(this.server_url+"/message").then((function(t){return t.json().then((function(t){console.log(t),e.messages=t,console.log(e.messages)}))}))},computed:{filtered_messages:function(){return this.messages}}},ue=de,pe=a("8860"),me=Object(u["a"])(ue,_,k,!1,null,null,null),ve=me.exports;m()(me,{VContainer:f["a"],VList:pe["a"]});var fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"flex"},[a("v-list",{attrs:{rounded:""}},[a("v-list-item",[a("v-list-item-title",[e._v(" Settings will go here :) ")])],1),a("v-list-item",[a("v-toolbar",{attrs:{flat:"",height:"72"}},[a("v-switch",{attrs:{hint:"Switch between Light Theme and Dark",inset:"",label:"Dark Theme","persistent-hint":""},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1)],1),a("v-list-item",[a("SignOutDialog")],1)],1)],1)},ge=[],he=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({},"v-btn",i,!1),n),[e._v(" Sign Out ")])]}}]),model:{value:e.signoutDialog,callback:function(t){e.signoutDialog=t},expression:"signoutDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v("Sign Out")])]),a("v-card-text",[e._v(" Are you sure you want to sign out? ")]),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:function(t){e.loginDialog=!1}}},[e._v(" No ")]),a("v-btn",{attrs:{text:""},on:{click:function(t){e.loginDialog=!1}}},[e._v(" Yes ")])],1)],1)],1)},be=[],ye={name:"SignOutDialog",data:function(){return{loginDialog:!1}}},_e=ye,ke=Object(u["a"])(_e,he,be,!1,null,null,null),we=ke.exports;m()(ke,{VBtn:W["a"],VCard:T["a"],VCardActions:S["a"],VCardText:S["c"],VCardTitle:S["d"],VDialog:z["a"]});var xe={name:"SettingsPage",components:{SignOutDialog:we}},Ve=xe,De=a("da13"),Te=a("5d23"),Se=a("b73d"),Ce=a("71d9"),Oe=Object(u["a"])(Ve,fe,ge,!1,null,null,null),Pe=Oe.exports;m()(Oe,{VContainer:f["a"],VList:pe["a"],VListItem:De["a"],VListItemTitle:Te["b"],VSwitch:Se["a"],VToolbar:Ce["a"]});var Me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-list-item",{on:{click:function(t){return e.$emit("changepage",e.title)}}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(this.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(this.title))])],1)],1)},je=[],Ie={name:"NavigationItem",props:["icon","title"]},Le=Ie,$e=a("34c3"),Ee=Object(u["a"])(Le,Me,je,!1,null,null,null),Ne=Ee.exports;m()(Ee,{VIcon:K["a"],VListItem:De["a"],VListItemContent:Te["a"],VListItemIcon:$e["a"],VListItemTitle:Te["b"]});var Fe={name:"App",components:{CalendarPage:y,ListPage:ve,SettingsPage:Pe,NavigationItem:Ne},data:function(){return{page:"Calendar",drawer:null,pages:[{title:"Calendar",icon:"mdi-calendar-edit"},{title:"List",icon:"mdi-format-list-bulleted"},{title:"Settings",icon:"mdi-account-cog"}],notifications:!1,sound:!0,widgets:!1}},methods:{changepage:function(e){console.log(e),this.page=e}}},Ae=Fe,He=a("7496"),Be=a("40dc"),Ge=a("5bc1"),Re=a("bb78"),Je=a("f6c4"),We=a("f774"),ze=Object(u["a"])(Ae,i,r,!1,null,"5a41e018",null),Ke=ze.exports;m()(ze,{VApp:He["a"],VAppBar:Be["a"],VAppBarNavIcon:Ge["a"],VAppBarTitle:Re["a"],VList:pe["a"],VMain:Je["a"],VNavigationDrawer:We["a"],VSpacer:q["a"]});var Ye=a("f309"),qe=a("fcf4");n["a"].use(Ye["a"]);var Qe=new Ye["a"]({theme:{themes:{light:{primary:qe["a"].orange.darken1,secondary:qe["a"].orange.darken2,accent:qe["a"].blueGrey,error:qe["a"].red,warning:qe["a"].yellow,info:qe["a"].grey,success:qe["a"].green},dark:{primary:qe["a"].orange.darken3,secondary:qe["a"].orange.darken4,accent:qe["a"].blueGrey,error:qe["a"].red,warning:qe["a"].yellow,info:qe["a"].grey,success:qe["a"].green}}}}),Ue=Qe;n["a"].config.productionTip=!1,new n["a"]({vuetify:Ue,render:function(e){return e(Ke)}}).$mount("#app")}});
//# sourceMappingURL=app.23c45d39.js.map