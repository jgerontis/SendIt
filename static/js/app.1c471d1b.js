(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;r.push([2,"chunk-vendors"]),a()})({2:function(e,t,a){e.exports=a("bd14")},"402c":function(e,t,a){"use strict";var n=a("2b0e"),i=a("f309"),r=a("fcf4");n["a"].use(i["a"]);var o=new i["a"]({theme:{themes:{light:{primary:r["a"].orange.darken1,secondary:r["a"].orange.darken2,accent:r["a"].blueGrey,error:r["a"].red,warning:r["a"].yellow,info:r["a"].grey,success:r["a"].green},dark:{primary:r["a"].orange.darken3,secondary:r["a"].orange.darken4,accent:r["a"].blueGrey,error:r["a"].red,warning:r["a"].yellow,info:r["a"].grey,success:r["a"].green}}}});t["a"]=o},bd14:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=a("402c"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",e._l(e.pages,(function(t){return a("NavigationItem",{key:t.title,attrs:{title:t.title,icon:t.icon},on:{changepage:e.changepage}})})),1)],1),a("v-app-bar",{staticClass:"primary",attrs:{temporary:"",app:""}},[a("v-app-bar-nav-icon",{staticClass:"d-lg-none",on:{click:function(t){e.drawer=!e.drawer}}}),a("v-app-bar-title",[e._v("SendIt")]),a("v-spacer")],1),a("v-main",["Calendar"==e.page?a("CalendarPage"):"List"==e.page?a("ListPage"):"Settings"==e.page?a("SettingsPage"):e._e()],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",[a("v-date-picker",{ref:"picker",attrs:{"picker-date":e.pickerDate,"event-color":function(e){return e[9]%2?"red":"yellow"},events:e.arrayEvents,"full-width":""},on:{"update:pickerDate":function(t){e.pickerDate=t},"update:picker-date":function(t){e.pickerDate=t}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),a("v-col",[a("div",{staticClass:"text-h6"},[e._v(" Month news ("+e._s(e.pickerDate||"change month...")+") ")]),a("div",{staticClass:"subheading"},[e._v(" Change month to see other news "),a("button",{on:{click:e.clicked}},[e._v("click me")])]),a("ul",{staticClass:"ma-4"},e._l(e.messages,(function(t){return a("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)])],1)],1)},l=[],c=a("2909"),d=(a("4de4"),a("d81d"),{name:"CalendarPage",data:function(){return{arrayEvents:null,date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),pickerDate:null,messages:["President met with prime minister","New power plant opened","Rocket launch announced","Global warming discussion cancelled","Company changed its location"]}},watch:{pickerDate:function(){this.notes=[this.allNotes[Math.floor(5*Math.random())],this.allNotes[Math.floor(5*Math.random())],this.allNotes[Math.floor(5*Math.random())]].filter((function(e,t,a){return a.indexOf(e)===t}))}},created:function(){},mounted:function(){this.arrayEvents=Object(c["a"])(Array(6)).map((function(){var e=Math.floor(30*Math.random()),t=new Date;return t.setDate(e),t.toISOString().substr(0,10)}))},methods:{clicked:function(){console.log("heelo")}}}),u=d,p=a("2877"),m=a("6544"),v=a.n(m),f=a("62ad"),g=a("a523"),h=a("2e4b"),b=a("0fd9"),y=Object(p["a"])(u,s,l,!1,null,null,null),k=y.exports;v()(y,{VCol:f["a"],VContainer:g["a"],VDatePicker:h["a"],VRow:b["a"]});var _=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-list",e._l(e.messages,(function(e){return a("MessageSmall",{key:e._id,attrs:{body:e.body,type:e.type,destination:e.destination,sendTime:e.sendTime}})})),1),a("NewListMessage")],1)},x=[],w=(a("d3b7"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[e._v(" "+e._s(e.destination)+" ")]),a("v-card-subtitle",[e._v(" "+e._s(e.sendTime)+" ")]),a("v-card-text",[e._v(" "+e._s(e.body)+" ")])],1)}),V=[],T={name:"MessageSmall",props:["destination","sendTime","body"]},S=T,C=a("b0af"),D=a("99d9"),O=Object(p["a"])(S,w,V,!1,null,null,null),P=O.exports;v()(O,{VCard:C["a"],VCardSubtitle:D["b"],VCardText:D["c"],VCardTitle:D["d"]});var j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"primary",attrs:{large:"",bottom:"",right:"",fixed:""}},"v-btn",i,!1),n),[a("v-icon",[e._v(" mdi-plus ")])],1)]}}]),model:{value:e.display,callback:function(t){e.display=t},expression:"display"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v("New Message")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-radio-group",{attrs:{mandatory:""},model:{value:e.radioGroup,callback:function(t){e.radioGroup=t},expression:"radioGroup"}},[a("v-radio",{attrs:{label:"Email",value:"email"}}),a("v-radio",{attrs:{label:"Text",value:"text"}})],1),a("date-time-picker")],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Destination",hint:"Text: 1234567890\n              Email: bob@example.com"},model:{value:e.destination,callback:function(t){e.destination=t},expression:"destination"}}),a("v-textarea",{attrs:{counter:"",clearable:"","clear-icon":"mdi-close-circle",label:"Message"},model:{value:e.body,callback:function(t){e.body=t},expression:"body"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.display=!1}}},[e._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.postMessage}},[e._v(" Save ")])],1)],1)],1)},M=[],I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{width:e.dialogWidth},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-text-field",e._g(e._b({attrs:{disabled:e.disabled,loading:e.loading,label:e.label,value:e.formattedDatetime,readonly:""},scopedSlots:e._u([{key:"progress",fn:function(){return[e._t("progress",(function(){return[a("v-progress-linear",{attrs:{color:"primary",indeterminate:"",absolute:"",height:"2"}})]}))]},proxy:!0}],null,!0)},"v-text-field",e.textFieldProps,!1),n))]}}]),model:{value:e.display,callback:function(t){e.display=t},expression:"display"}},[a("v-card",[a("v-card-text",{staticClass:"px-0 py-0"},[a("v-tabs",{attrs:{"fixed-tabs":""},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[a("v-tab",{key:"calendar"},[e._t("dateIcon",(function(){return[a("v-icon",[e._v("event")])]}))],2),a("v-tab",{key:"timer",attrs:{disabled:e.dateSelected}},[e._t("timeIcon",(function(){return[a("v-icon",[e._v("access_time")])]}))],2),a("v-tab-item",{key:"calendar"},[a("v-date-picker",e._b({attrs:{"full-width":""},on:{input:e.showTimePicker},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-date-picker",e.datePickerProps,!1))],1),a("v-tab-item",{key:"timer"},[a("v-time-picker",e._b({ref:"timer",staticClass:"v-time-picker-custom",attrs:{"full-width":""},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},"v-time-picker",e.timePickerProps,!1))],1)],1)],1),a("v-card-actions",[a("v-spacer"),e._t("actions",(function(){return[a("v-btn",{attrs:{color:"grey lighten-1",text:""},nativeOn:{click:function(t){return e.clearHandler.apply(null,arguments)}}},[e._v(e._s(e.clearText))]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.okHandler}},[e._v(e._s(e.okText))])]}),{parent:this})],2)],1)],1)},L=[],$=(a("a9e3"),a("b166")),N=a("2cf3"),E="",F="00:00:00",A="yyyy-MM-dd",G="HH:mm:ss",H=340,B="CLEAR",R="OK",J={name:"DateTimePicker",model:{prop:"datetime",event:"input"},props:{datetime:{type:[Date,String],default:null},disabled:{type:Boolean},loading:{type:Boolean},label:{type:String,default:""},dialogWidth:{type:Number,default:H},dateFormat:{type:String,default:A},timeFormat:{type:String,default:"HH:mm"},clearText:{type:String,default:B},okText:{type:String,default:R},textFieldProps:{type:Object},datePickerProps:{type:Object},timePickerProps:{type:Object}},data:function(){return{display:!1,activeTab:0,date:E,time:F}},mounted:function(){this.init()},computed:{dateTimeFormat:function(){return this.dateFormat+" "+this.timeFormat},defaultDateTimeFormat:function(){return A+" "+G},formattedDatetime:function(){return this.selectedDatetime?Object($["a"])(this.selectedDatetime,this.dateTimeFormat):""},selectedDatetime:function(){if(this.date&&this.time){var e=this.date+" "+this.time;return 5===this.time.length&&(e+=":00"),Object(N["a"])(e,this.defaultDateTimeFormat,new Date)}return null},dateSelected:function(){return!this.date}},methods:{init:function(){var e;this.datetime&&(this.datetime instanceof Date?e=this.datetime:("string"===typeof this.datetime||this.datetime instanceof String)&&(e=Object(N["a"])(this.datetime,this.dateTimeFormat,new Date)),this.date=Object($["a"])(e,A),this.time=Object($["a"])(e,G))},okHandler:function(){this.resetPicker(),this.$emit("input",this.selectedDatetime)},clearHandler:function(){this.resetPicker(),this.date=E,this.time=F,this.$emit("input",null)},resetPicker:function(){this.display=!1,this.activeTab=0,this.$refs.timer&&(this.$refs.timer.selectingHour=!0)},showTimePicker:function(){this.activeTab=1}},watch:{datetime:function(){this.init()}}},W=J,z=a("8336"),K=a("169a"),Y=a("132d"),q=a("8e36"),Q=a("2fa4"),U=a("71a3"),X=a("c671"),Z=a("fe57"),ee=a("8654"),te=a("c964"),ae=Object(p["a"])(W,I,L,!1,null,null,null),ne=ae.exports;v()(ae,{VBtn:z["a"],VCard:C["a"],VCardActions:D["a"],VCardText:D["c"],VDatePicker:h["a"],VDialog:K["a"],VIcon:Y["a"],VProgressLinear:q["a"],VSpacer:Q["a"],VTab:U["a"],VTabItem:X["a"],VTabs:Z["a"],VTextField:ee["a"],VTimePicker:te["a"]});var ie={name:"NewListMessage",components:{DateTimePicker:ne},data:function(){return{server_url:"http://localhost:3000/message",radioGroup:"",body:"",destination:"",display:!1,datetime:new Date}},methods:{postMessage:function(){var e=this,t={body:this.body,destination:this.destination,type:this.radioGroup,sendTime:this.datetime};console.log("creating message:",t),fetch(this.server_url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){console.log("Created new message:",t),e.display=!1}))}}},re=ie,oe=a("67b6"),se=a("43a6"),le=a("a844"),ce=Object(p["a"])(re,j,M,!1,null,null,null),de=ce.exports;v()(ce,{VBtn:z["a"],VCard:C["a"],VCardActions:D["a"],VCardText:D["c"],VCardTitle:D["d"],VCol:f["a"],VContainer:g["a"],VDialog:K["a"],VIcon:Y["a"],VRadio:oe["a"],VRadioGroup:se["a"],VRow:b["a"],VSpacer:Q["a"],VTextField:ee["a"],VTextarea:le["a"]});var ue={name:"ListPage",components:{MessageSmall:P,NewListMessage:de},data:function(){return{messages:[],server_url:"http://localhost:3000"}},methods:{getMessages:function(){var e=this;fetch(this.server_url+"/message").then((function(t){return t.json().then((function(t){console.log(t),e.messages=t,console.log(e.messages)}))}))}},created:function(){console.log(this.messages),this.getMessages()},computed:{filtered_messages:function(){return this.messages}}},pe=ue,me=a("8860"),ve=Object(p["a"])(pe,_,x,!1,null,null,null),fe=ve.exports;v()(ve,{VContainer:g["a"],VList:me["a"]});var ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"flex"},[a("v-list",{attrs:{rounded:""}},[a("v-list-item",[a("v-list-item-title",[e._v(" Settings will go here :) ")])],1),a("v-list-item",[a("v-toolbar",{attrs:{flat:"",height:"72"}},[a("v-switch",{attrs:{hint:"Switch between Light Theme and Dark",inset:"",label:"Dark Theme","persistent-hint":""},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1)],1),a("v-list-item",[a("SignOutDialog")],1)],1)],1)},he=[],be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({},"v-btn",i,!1),n),[e._v(" Sign Out ")])]}}]),model:{value:e.signoutDialog,callback:function(t){e.signoutDialog=t},expression:"signoutDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v("Sign Out")])]),a("v-card-text",[e._v(" Are you sure you want to sign out? ")]),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:function(t){e.loginDialog=!1}}},[e._v(" No ")]),a("v-btn",{attrs:{text:""},on:{click:function(t){e.loginDialog=!1}}},[e._v(" Yes ")])],1)],1)],1)},ye=[],ke={name:"SignOutDialog",data:function(){return{loginDialog:!1}}},_e=ke,xe=Object(p["a"])(_e,be,ye,!1,null,null,null),we=xe.exports;v()(xe,{VBtn:z["a"],VCard:C["a"],VCardActions:D["a"],VCardText:D["c"],VCardTitle:D["d"],VDialog:K["a"]});var Ve={name:"SettingsPage",components:{SignOutDialog:we}},Te=Ve,Se=a("da13"),Ce=a("5d23"),De=a("b73d"),Oe=a("71d9"),Pe=Object(p["a"])(Te,ge,he,!1,null,null,null),je=Pe.exports;v()(Pe,{VContainer:g["a"],VList:me["a"],VListItem:Se["a"],VListItemTitle:Ce["b"],VSwitch:De["a"],VToolbar:Oe["a"]});var Me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-list-item",{on:{click:function(t){return e.$emit("changepage",e.title)}}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(this.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(this.title))])],1)],1)},Ie=[],Le={name:"NavigationItem",props:["icon","title"]},$e=Le,Ne=a("34c3"),Ee=Object(p["a"])($e,Me,Ie,!1,null,null,null),Fe=Ee.exports;v()(Ee,{VIcon:Y["a"],VListItem:Se["a"],VListItemContent:Ce["a"],VListItemIcon:Ne["a"],VListItemTitle:Ce["b"]});var Ae={name:"App",components:{CalendarPage:k,ListPage:fe,SettingsPage:je,NavigationItem:Fe},data:function(){return{page:"Calendar",drawer:null,pages:[{title:"Calendar",icon:"mdi-calendar-edit"},{title:"List",icon:"mdi-format-list-bulleted"},{title:"Settings",icon:"mdi-account-cog"}],notifications:!1,sound:!0,widgets:!1}},methods:{changepage:function(e){console.log(e),this.page=e}}},Ge=Ae,He=a("7496"),Be=a("40dc"),Re=a("5bc1"),Je=a("bb78"),We=a("f6c4"),ze=a("f774"),Ke=Object(p["a"])(Ge,r,o,!1,null,"749dda48",null),Ye=Ke.exports;v()(Ke,{VApp:He["a"],VAppBar:Be["a"],VAppBarNavIcon:Re["a"],VAppBarTitle:Je["a"],VList:me["a"],VMain:We["a"],VNavigationDrawer:ze["a"],VSpacer:Q["a"]}),n["a"].config.productionTip=!1,new n["a"]({vuetify:i["a"],render:function(e){return e(Ye)}}).$mount("#app")}});
//# sourceMappingURL=app.1c471d1b.js.map