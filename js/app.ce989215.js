(function(e){function t(t){for(var a,i,l=t[0],u=t[1],c=t[2],s=0,d=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},i={app:0},r={app:0},o=[];function l(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-3c34f265":"5a101f0c","chunk-71129550":"50606c47","chunk-bdc77c08":"1485fcfa","chunk-c695805e":"4aa02580","chunk-cb8874a6":"303909a6"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-3c34f265":1,"chunk-71129550":1,"chunk-bdc77c08":1,"chunk-c695805e":1,"chunk-cb8874a6":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-3c34f265":"9b3c99d5","chunk-71129550":"d6854fc9","chunk-bdc77c08":"5583a441","chunk-c695805e":"537d95f2","chunk-cb8874a6":"2a16ba32"}[e]+".css",r=u.p+a,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var c=o[l],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===a||s===r))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],s=c.getAttribute("data-href");if(s===a||s===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[e],m.parentNode.removeChild(m),n(o)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=l(e);var d=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}r[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=n("2f62"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navBar"),n("router-view")],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"navBar"}},[n("b-navbar",{attrs:{transparent:""}},[n("template",{slot:"brand"},[n("b-navbar-item",{staticClass:"app-name title",attrs:{tag:"router-link",to:"/"}},[n("span",{staticClass:"has-text-primary"},[e._v("We")]),n("span",{staticClass:"has-text-secondary"},[e._v("Vote")])])],1),n("template",{slot:"start"},[n("b-navbar-item",{attrs:{tag:"router-link",to:"/"}},[e._v(" Home ")]),n("b-navbar-item",{attrs:{tag:"router-link",to:"/whitepaper"}},[e._v(" Whitepaper ")]),n("b-navbar-item",{attrs:{tag:"router-link",to:"/chainview"}},[e._v(" Blockchain View ")])],1),n("template",{slot:"end"},[n("b-navbar-item",{attrs:{tag:"a",to:"#"}},[e._v(" Subscribe ")]),e.user.surname?n("b-navbar-item",{staticStyle:{"margin-right":"2rem"},on:{click:e.logOut}},[e._v(" Log Out ")]):n("b-navbar-item",{staticStyle:{"margin-right":"2rem"},on:{click:e.toggleLoginModal}},[e._v(" Log In ")])],1)],2),n("b-modal",{attrs:{active:e.loginModalVisible,"has-modal-card":"","trap-focus":"","aria-modal":""},on:{"update:active":function(t){e.loginModalVisible=t}}},[n("div",{staticClass:"modal-card"},[n("div",{staticClass:"modal-card-body"},[n("login-form",{on:{loginSubmit:e.loginSubmit}}),n("p",[e._v("Logging in will show which votes you have already completed.")]),n("p",[e._v("You will need to re-enter your details to complete a vote later to ensure no-one can vote on your behalf.")])],1)])])],1)},u=[],c=n("61b1"),s={name:"navBar",data:function(){return{loginModalVisible:!1}},methods:{toggleLoginModal:function(){this.loginModalVisible=!this.loginModalVisible},logOut:function(){this.$store.commit("updateUser","")},loginSubmit:function(e){e&&(this.loginModalVisible=!1)}},components:{"login-form":c["a"]},computed:{user:function(){return this.$store.state.user}}},d=s,m=(n("5b49"),n("2877")),f=Object(m["a"])(d,l,u,!1,null,null,null),v=f.exports,p={name:"app",components:{navBar:v},created:function(){}},h=p,b=(n("034f"),n("5c64"),Object(m["a"])(h,r,o,!1,null,null,null)),g=b.exports,k=(n("d3b7"),n("8c4f"));a["a"].use(k["a"]);var y=[{path:"/",name:"home",component:function(){return n.e("chunk-cb8874a6").then(n.bind(null,"bb51"))}},{path:"/whitepaper",name:"whitepaper",component:function(){return n.e("chunk-3c34f265").then(n.bind(null,"3c09"))}},{path:"/chainview",name:"chainview",component:function(){return n.e("chunk-71129550").then(n.bind(null,"e9e4"))}},{path:"/:issue/vote",name:"issue-vote",component:function(){return n.e("chunk-c695805e").then(n.bind(null,"9883"))}},{path:"/:issue",name:"issue",component:function(){return n.e("chunk-bdc77c08").then(n.bind(null,"1b10"))}}],w=new k["a"]({mode:"history",base:"/",routes:y}),S=w,_=n("5530"),N=n("522d"),C=n("efe7");a["a"].use(N["a"]);var D="https://wevote-server.herokuapp.com/referendums/graphql";function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(C["createApolloClient"])(Object(_["a"])({httpEndpoint:D},e)),n=t.apolloClient,a=new N["a"]({defaultClient:n,defaultOptions:{$query:{}},errorHandler:function(e){console.log("%cError","background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",e.message)}});return a}var V=n("61b7"),E=n("184c");a["a"].use(V["a"]),a["a"].use(E["a"]),a["a"].use(i["a"]),a["a"].config.productionTip=!1;var x=new i["a"].Store({state:{user:{identifier:window.localStorage.identifier,surname:window.localStorage.surname,alreadyVoted:""}},mutations:{updateUser:function(e,t){e.user=t,t?(window.localStorage.identifier=t.identifier,window.localStorage.surname=t.surname):(window.localStorage.removeItem("identifier"),window.localStorage.removeItem("surname"))}}});new a["a"]({router:S,apolloProvider:O(),store:x,render:function(e){return e(g)}}).$mount("#app")},5800:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getIdentifier"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"licence"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"state"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"surname"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"identifier"},name:{kind:"Name",value:"checkIdentity"},arguments:[{kind:"Argument",name:{kind:"Name",value:"licence"},value:{kind:"Variable",name:{kind:"Name",value:"licence"}}},{kind:"Argument",name:{kind:"Name",value:"state"},value:{kind:"Variable",name:{kind:"Name",value:"state"}}},{kind:"Argument",name:{kind:"Name",value:"surname"},value:{kind:"Variable",name:{kind:"Name",value:"surname"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"identifier"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alreadyVoted"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:211}};n.loc.source={body:"query getIdentifier ($licence: String!, $state: String!, $surname: String!) {\n    identifier: checkIdentity (licence: $licence, state: $state, surname: $surname) {\n        identifier\n        alreadyVoted\n    }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,t)})),e.definitions&&e.definitions.forEach((function(e){a(e,t)}))}var i={};function r(e,t){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==t)return a}}function o(e,t){var n={kind:e.kind,definitions:[r(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=i[t]||new Set,o=new Set,l=new Set;a.forEach((function(e){l.add(e)}));while(l.size>0){var u=l;l=new Set,u.forEach((function(e){if(!o.has(e)){o.add(e);var t=i[e]||new Set;t.forEach((function(e){l.add(e)}))}}))}return o.forEach((function(t){var a=r(e,t);a&&n.definitions.push(a)})),n}(function(){n.definitions.forEach((function(e){if(e.name){var t=new Set;a(e,t),i[e.name.value]=t}}))})(),e.exports=n,e.exports["getIdentifier"]=o(n,"getIdentifier")},"58de":function(e,t,n){},"5b49":function(e,t,n){"use strict";var a=n("58de"),i=n.n(a);i.a},"5c64":function(e,t,n){"use strict";var a=n("d32a"),i=n.n(a);i.a},"61b1":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login-form"}},[n("section",[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Licence / ID Card number")]),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.licence,expression:"formData.licence"}],staticClass:"input",attrs:{type:"number"},domProps:{value:e.formData.licence},on:{input:function(t){t.target.composing||e.$set(e.formData,"licence",t.target.value)}}})])]),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("State")]),n("div",{staticClass:"control"},[n("div",{staticClass:"select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.formData.state,expression:"formData.state"}],attrs:{placeholder:"Please select",required:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.formData,"state",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"nsw"}},[e._v("NSW")]),n("option",{attrs:{value:"qld"}},[e._v("Queensland")]),n("option",{attrs:{value:"vic"}},[e._v("Victoria")]),n("option",{attrs:{value:"tas"}},[e._v("Tasmania")]),n("option",{attrs:{value:"sa"}},[e._v("South Australia")]),n("option",{attrs:{value:"nt"}},[e._v("Northern Territory")]),n("option",{attrs:{value:"act"}},[e._v("ACT")]),n("option",{attrs:{value:"wa"}},[e._v("Western Australia")])])])])]),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Surname")]),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.surname,expression:"formData.surname"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.formData.surname},on:{input:function(t){t.target.composing||e.$set(e.formData,"surname",t.target.value)}}})])]),n("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.loginSubmit(t)}}},[e._v("Log In")])])])},i=[],r=n("5530"),o=n("5800"),l=n.n(o),u={name:"login-form",data:function(){return{formData:{licence:"",state:"",surname:""}}},methods:{loginSubmit:function(){var e=this;this.$apollo.query({query:l.a,variables:Object(r["a"])({},this.formData)}).then((function(t){var n=t.data.identifier;e.$store.commit("updateUser",{identifier:n.identifier,surname:e.formData.surname,alreadyVoted:n.alreadyVoted}),e.$emit("loginSubmit",Object(r["a"])({},e.formData,{alreadyVoted:n.alreadyVoted}))}))}}},c=u,s=(n("a16d"),n("2877")),d=Object(s["a"])(c,a,i,!1,null,"6ee001f2",null);t["a"]=d.exports},"85ec":function(e,t,n){},a16d:function(e,t,n){"use strict";var a=n("d85b"),i=n.n(a);i.a},d32a:function(e,t,n){},d85b:function(e,t,n){}});
//# sourceMappingURL=app.ce989215.js.map