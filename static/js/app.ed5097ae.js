(function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],u=0,m=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;r.push([2,"chunk-vendors"]),a()})({2:function(e,t,a){e.exports=a("bd14")},"402c":function(e,t,a){"use strict";var n=a("2b0e"),i=a("f309"),r=a("fcf4");n["a"].use(i["a"]);var s=new i["a"]({theme:{themes:{light:{primary:r["a"].orange.darken1,secondary:r["a"].orange.darken2,accent:r["a"].blueGrey,error:r["a"].red,warning:r["a"].yellow,info:r["a"].grey,success:r["a"].green},dark:{primary:r["a"].orange.darken3,secondary:r["a"].orange.darken4,accent:r["a"].blueGrey,error:r["a"].red,warning:r["a"].yellow,info:r["a"].grey,success:r["a"].green}}}});t["a"]=s},bd14:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=a("402c"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",e._l(e.pages,(function(t){return a("NavigationItem",{key:t.title,attrs:{title:t.title,icon:t.icon},on:{changepage:e.changepage}})})),1)],1),a("v-app-bar",{staticClass:"primary",attrs:{temporary:"",app:""}},[a("v-app-bar-nav-icon",{staticClass:"d-lg-none",on:{click:function(t){e.drawer=!e.drawer}}}),a("v-app-bar-title",[e._v("SendIt")]),a("v-spacer"),a("v-img",{attrs:{src:e.pic,alt:""}})],1),a("v-main",["Calendar"==e.page?a("CalendarPage"):"List"==e.page?a("ListPage"):"Settings"==e.page?a("SettingsPage"):e._e()],1)],1)},s=[],o=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("ac1f"),a("841c"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",[a("v-date-picker",{ref:"picker",attrs:{"picker-date":e.pickerDate,"event-color":function(e){return e[9]%2?"red":"yellow"},events:e.events,"full-width":""},on:{"update:pickerDate":function(t){e.pickerDate=t},"update:picker-date":function(t){e.pickerDate=t}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),a("v-col",[a("v-list",e._l(e.filteredMessages,(function(t){return a("MessageSmall",{key:t._id,attrs:{destination:t.destination,body:t.body,time:t.sendTime.getHours().toString()+":"+e.formatMinutes(t.sendTime.getMinutes())}})})),1)],1)],1),a("NewListMessage",{on:{update:e.update}})],1)}),l=[],c=(a("4de4"),a("159b"),a("25f0"),a("4e827"),a("d81d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[e._v(" "+e._s(e.destination)+" ")]),a("v-card-subtitle",[e._v(" "+e._s(e.date)+" "),a("br"),e._v(" "+e._s(e.time)+" ")]),a("v-card-text",[e._v(" "+e._s(e.body)+" ")]),a("v-card-actions",[a("v-btn",{on:{click:e.editMessage}},[a("v-icon",[e._v("mdi-pencil")])],1),a("v-btn",[a("v-icon",[e._v("mdi-delete-forever")])],1)],1)],1)}),d=[],u={name:"MessageSmall",props:["destination","date","body","time"],methods:{editMessage:function(){console.log("you clicked the pencil")}}},m=u,p=a("2877"),v=a("6544"),f=a.n(v),g=a("8336"),h=a("b0af"),b=a("99d9"),y=a("132d"),_=Object(p["a"])(m,c,d,!1,null,null,null),k=_.exports;f()(_,{VBtn:g["a"],VCard:h["a"],VCardActions:b["a"],VCardSubtitle:b["b"],VCardText:b["c"],VCardTitle:b["d"],VIcon:y["a"]});var x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"primary",attrs:{large:"",bottom:"",right:"",fixed:""}},"v-btn",i,!1),n),[a("v-icon",[e._v(" mdi-plus ")])],1)]}}]),model:{value:e.display,callback:function(t){e.display=t},expression:"display"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v("New Message")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-radio-group",{attrs:{mandatory:""},model:{value:e.radioGroup,callback:function(t){e.radioGroup=t},expression:"radioGroup"}},[a("v-radio",{attrs:{label:"Email",value:"email"}}),a("v-radio",{attrs:{label:"Text",value:"text"}})],1),a("DateTimePicker",{model:{value:e.datetime,callback:function(t){e.datetime=t},expression:"datetime"}},[a("v-icon",[e._v("mdi-calendar")])],1)],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Destination",hint:"Text: 1234567890\n              Email: bob@example.com"},model:{value:e.destination,callback:function(t){e.destination=t},expression:"destination"}}),a("v-textarea",{attrs:{counter:"",clearable:"","clear-icon":"mdi-close-circle",label:"Message"},model:{value:e.body,callback:function(t){e.body=t},expression:"body"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.display=!1}}},[e._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.postMessage}},[e._v(" Save ")])],1)],1)],1)},V=[],w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{width:e.dialogWidth},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-text-field",e._g(e._b({attrs:{disabled:e.disabled,loading:e.loading,label:e.label,value:e.formattedDatetime,readonly:""},scopedSlots:e._u([{key:"progress",fn:function(){return[e._t("progress",(function(){return[a("v-progress-linear",{attrs:{color:"primary",indeterminate:"",absolute:"",height:"2"}})]}))]},proxy:!0}],null,!0)},"v-text-field",e.textFieldProps,!1),n))]}}]),model:{value:e.display,callback:function(t){e.display=t},expression:"display"}},[a("v-card",[a("v-card-text",{staticClass:"px-0 py-0"},[a("v-tabs",{attrs:{"fixed-tabs":""},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[a("v-tab",{key:"calendar"},[e._t("dateIcon",(function(){return[a("v-icon",[e._v("Day")])]}))],2),a("v-tab",{key:"timer",attrs:{disabled:e.dateSelected}},[e._t("timeIcon",(function(){return[a("v-icon",[e._v("Time")])]}))],2),a("v-tab-item",{key:"calendar"},[a("v-date-picker",e._b({attrs:{min:e.minDate,"full-width":""},on:{input:e.showTimePicker},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-date-picker",e.datePickerProps,!1))],1),a("v-tab-item",{key:"timer"},[a("v-time-picker",e._b({ref:"timer",staticClass:"v-time-picker-custom",attrs:{"ampm-in-title":"",scrollable:"","full-width":"",min:e.minTime},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},"v-time-picker",e.timePickerProps,!1))],1)],1)],1),a("v-card-actions",[a("v-spacer"),e._t("actions",(function(){return[a("v-btn",{attrs:{color:"grey lighten-1",text:""},nativeOn:{click:function(t){return e.clearHandler.apply(null,arguments)}}},[e._v(e._s(e.clearText))]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.okHandler}},[e._v(e._s(e.okText))])]}),{parent:this})],2)],1)],1)},S=[],T=(a("a9e3"),a("b166")),D=a("2cf3"),O="",C="00:00:00",P="yyyy-MM-dd",M="HH:mm:ss",I=340,j="CLEAR",L="OK",$={name:"DateTimePicker",model:{prop:"datetime",event:"input"},props:{datetime:{type:[Date,String],default:null},disabled:{type:Boolean},loading:{type:Boolean},label:{type:String,default:""},dialogWidth:{type:Number,default:I},dateFormat:{type:String,default:P},timeFormat:{type:String,default:"HH:mm"},clearText:{type:String,default:j},okText:{type:String,default:L},textFieldProps:{type:Object},datePickerProps:{type:Object},timePickerProps:{type:Object}},data:function(){return{display:!1,activeTab:0,date:O,time:C,minDate:(new Date).toISOString().substr(0,10)}},mounted:function(){this.init()},computed:{minTime:function(){if(this.minDate===this.date){var e=new Date;return console.log(e.getHours().toString()+":"+e.getMinutes().toString()),e.getHours().toString()+":"+e.getMinutes().toString()}return""},dateTimeFormat:function(){return this.dateFormat+" "+this.timeFormat},defaultDateTimeFormat:function(){return P+" "+M},formattedDatetime:function(){return this.selectedDatetime?Object(T["a"])(this.selectedDatetime,this.dateTimeFormat):""},selectedDatetime:function(){if(this.date&&this.time){var e=this.date+" "+this.time;return 5===this.time.length&&(e+=":00"),Object(D["a"])(e,this.defaultDateTimeFormat,new Date)}return null},dateSelected:function(){return!this.date}},methods:{init:function(){var e;this.datetime&&(this.datetime instanceof Date?e=this.datetime:("string"===typeof this.datetime||this.datetime instanceof String)&&(e=Object(D["a"])(this.datetime,this.dateTimeFormat,new Date)),this.date=Object(T["a"])(e,P),this.time=Object(T["a"])(e,M))},okHandler:function(){this.resetPicker(),this.$emit("input",this.selectedDatetime)},clearHandler:function(){this.resetPicker(),this.date=O,this.time=C,this.$emit("input",null)},resetPicker:function(){this.display=!1,this.activeTab=0,this.$refs.timer&&(this.$refs.timer.selectingHour=!0)},showTimePicker:function(){this.activeTab=1}},watch:{datetime:function(){this.init()}}},E=$,N=a("2e4b"),F=a("169a"),H=a("8e36"),A=a("2fa4"),B=a("71a3"),G=a("c671"),R=a("fe57"),J=a("8654"),U=a("c964"),W=Object(p["a"])(E,w,S,!1,null,null,null),z=W.exports;f()(W,{VBtn:g["a"],VCard:h["a"],VCardActions:b["a"],VCardText:b["c"],VDatePicker:N["a"],VDialog:F["a"],VIcon:y["a"],VProgressLinear:H["a"],VSpacer:A["a"],VTab:B["a"],VTabItem:G["a"],VTabs:R["a"],VTextField:J["a"],VTimePicker:U["a"]});var K={name:"NewListMessage",components:{DateTimePicker:z},data:function(){return{server_url:"http://localhost:3000/message",radioGroup:"",body:"",destination:"",display:!1,datetime:new Date}},methods:{postMessage:function(){var e=this,t={body:this.body,destination:this.destination,type:this.radioGroup,sendTime:this.datetime};console.log("creating message:",t),fetch(this.server_url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){console.log("Created new message:",t),e.$emit("update"),e.display=!1}))}}},Y=K,q=a("62ad"),Q=a("a523"),X=a("67b6"),Z=a("43a6"),ee=a("0fd9"),te=a("a844"),ae=Object(p["a"])(Y,x,V,!1,null,null,null),ne=ae.exports;f()(ae,{VBtn:g["a"],VCard:h["a"],VCardActions:b["a"],VCardText:b["c"],VCardTitle:b["d"],VCol:q["a"],VContainer:Q["a"],VDialog:F["a"],VIcon:y["a"],VRadio:X["a"],VRadioGroup:Z["a"],VRow:ee["a"],VSpacer:A["a"],VTextField:J["a"],VTextarea:te["a"]});var ie={name:"CalendarPage",components:{MessageSmall:k,NewListMessage:ne},data:function(){return{currentDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()),date:null,pickerDate:null,messages:[],server_url:"http://localhost:3000"}},watch:{pickerDate:function(){this.messages.filter((function(e,t,a){return a.indexOf(e)===t}))}},created:function(){this.getMessages(),this.date=this.currentDate.toISOString().substr(0,10)},mounted:function(){},methods:{getMessages:function(){var e=this;fetch(this.server_url+"/message").then((function(t){return t.json().then((function(t){e.messages=t,e.messages.forEach((function(e){e.sendTime=new Date(e.sendTime)}))}))}))},update:function(){this.getMessages(),this.updateEvents()},formatMinutes:function(e){return e=e.toString(),e<10&&(e="0"+e),e}},computed:{filteredMessages:function(){var e=this;return this.messages.filter((function(t){return t.sendTime.toISOString().substr(0,10)===e.date})).sort((function(e,t){return e.sendTime.toISOString().substr(11,5)>t.sendTime.toISOString().substr(11,5)?1:-1}))},events:function(){return this.messages.map((function(e){return e.sendTime.toISOString().substr(0,10)}))}}},re=ie,se=a("8860"),oe=Object(p["a"])(re,o,l,!1,null,null,null),le=oe.exports;f()(oe,{VCol:q["a"],VContainer:Q["a"],VDatePicker:N["a"],VList:se["a"],VRow:ee["a"]});var ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-list",e._l(e.messages,(function(e){return a("MessageSmall",{key:e._id,attrs:{body:e.body,type:e.type,destination:e.destination,sendTime:e.sendTime}})})),1),a("NewListMessage",{on:{update:e.getMessages}})],1)},de=[],ue={name:"ListPage",components:{MessageSmall:k,NewListMessage:ne},data:function(){return{messages:[],server_url:"http://localhost:3000"}},methods:{getMessages:function(){var e=this;fetch(this.server_url+"/message").then((function(t){return t.json().then((function(t){console.log(t),e.messages=t,console.log(e.messages)}))}))}},created:function(){console.log(this.messages),this.getMessages()},computed:{filtered_messages:function(){return this.messages}}},me=ue,pe=Object(p["a"])(me,ce,de,!1,null,null,null),ve=pe.exports;f()(pe,{VContainer:Q["a"],VList:se["a"]});var fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"flex"},[a("v-list",{attrs:{rounded:""}},[a("v-list-item",[a("v-list-item-title",[e._v(" Settings will go here :) ")])],1),a("v-list-item",[a("v-toolbar",{attrs:{flat:"",height:"72"}},[a("v-switch",{attrs:{hint:"Switch between Light Theme and Dark",inset:"",label:"Dark Theme","persistent-hint":""},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1)],1),a("v-list-item",[a("SignOutDialog")],1)],1)],1)},ge=[],he=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({},"v-btn",i,!1),n),[e._v(" Sign Out ")])]}}]),model:{value:e.signoutDialog,callback:function(t){e.signoutDialog=t},expression:"signoutDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v("Sign Out")])]),a("v-card-text",[e._v(" Are you sure you want to sign out? ")]),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:function(t){e.loginDialog=!1}}},[e._v(" No ")]),a("v-btn",{attrs:{text:""},on:{click:function(t){e.loginDialog=!1}}},[e._v(" Yes ")])],1)],1)],1)},be=[],ye={name:"SignOutDialog",data:function(){return{loginDialog:!1}}},_e=ye,ke=Object(p["a"])(_e,he,be,!1,null,null,null),xe=ke.exports;f()(ke,{VBtn:g["a"],VCard:h["a"],VCardActions:b["a"],VCardText:b["c"],VCardTitle:b["d"],VDialog:F["a"]});var Ve={name:"SettingsPage",components:{SignOutDialog:xe}},we=Ve,Se=a("da13"),Te=a("5d23"),De=a("b73d"),Oe=a("71d9"),Ce=Object(p["a"])(we,fe,ge,!1,null,null,null),Pe=Ce.exports;f()(Ce,{VContainer:Q["a"],VList:se["a"],VListItem:Se["a"],VListItemTitle:Te["b"],VSwitch:De["a"],VToolbar:Oe["a"]});var Me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-list-item",{on:{click:function(t){return e.$emit("changepage",e.title)}}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(this.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(this.title))])],1)],1)},Ie=[],je={name:"NavigationItem",props:["icon","title"]},Le=je,$e=a("34c3"),Ee=Object(p["a"])(Le,Me,Ie,!1,null,null,null),Ne=Ee.exports;f()(Ee,{VIcon:y["a"],VListItem:Se["a"],VListItemContent:Te["a"],VListItemIcon:$e["a"],VListItemTitle:Te["b"]});var Fe={name:"App",components:{CalendarPage:le,ListPage:ve,SettingsPage:Pe,NavigationItem:Ne},data:function(){return{page:"Calendar",drawer:null,pages:[{title:"Calendar",icon:"mdi-calendar-edit"},{title:"List",icon:"mdi-format-list-bulleted"},{title:"Settings",icon:"mdi-account-cog"}],notifications:!1,sound:!0,pic:"",userId:""}},created:function(){console.log("created"),this.getUserId(),this.choosepic()},methods:{changepage:function(e){console.log(e),this.page=e},choosepic:function(){var e=this;console.log(this.userId),console.log("pic = ",this.pic),console.log("==============================="),console.log(this);var t="http://localhost:3000/guser/".concat(this.userId);console.log(t),fetch(t).then((function(e){return e.json()})).then((function(t){console.log("this is data",t),console.log(t),e.pic=t[0].picture}))},getUserId:function(){var e=new URLSearchParams(window.location.search);e.has("id")&&(console.log(e.get("id")),this.userId=e.get("id"))}}},He=Fe,Ae=a("7496"),Be=a("40dc"),Ge=a("5bc1"),Re=a("bb78"),Je=a("adda"),Ue=a("f6c4"),We=a("f774"),ze=Object(p["a"])(He,r,s,!1,null,"40f8df29",null),Ke=ze.exports;f()(ze,{VApp:Ae["a"],VAppBar:Be["a"],VAppBarNavIcon:Ge["a"],VAppBarTitle:Re["a"],VImg:Je["a"],VList:se["a"],VMain:Ue["a"],VNavigationDrawer:We["a"],VSpacer:A["a"]}),n["a"].config.productionTip=!1,new n["a"]({vuetify:i["a"],render:function(e){return e(Ke)}}).$mount("#app")}});
//# sourceMappingURL=app.ed5097ae.js.map