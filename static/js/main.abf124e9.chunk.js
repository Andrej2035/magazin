(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,n){"use strict";n.d(t,"b",function(){return o});var a=n(30),r=n(10),i={dialogs:[{id:1,name:"Andrej"},{id:2,name:"Bogdan"},{id:3,name:"Segej"},{id:4,name:"Viktor"},{id:5,name:"Sveta"},{id:6,name:"Katja"}],messages:[{id:1,message:"How are you"},{id:2,message:"are you"},{id:3,message:" you"},{id:4,message:" you"},{id:5,message:" you"}]},o=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0,n=Object(r.a)({},e,{messages:Object(a.a)(e.messages)});switch(t.type){case"SEND-MESSAGE":var o=t.newMessageBody;return n.messages.push({id:6,message:o}),n;default:return e}}},12:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c});var a=n(128),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b480b052-9033-433d-8111-8f383b37e439"}}),i={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},unfollow:function(e){return r.delete("follow/".concat(e))},follow:function(e){return r.post("follow/".concat(e))},getProfile:function(e){return console.log("Obsolete method. Please profileAPI object."),c.getProfile(e)}},o={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")},registration:function(e,t,n,a,i){return r.post("auth/login",{email:e,password:t,username:n,age:a,phoneNumber:i})}},c={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status/",{status:e})}}},122:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(30),o=n(10),c=n(12),s=function(e,t,n,a){return e.map(function(e){return e[n]===t?Object(o.a)({},e,{},a):e})};n.d(t,"d",function(){return d}),n.d(t,"e",function(){return p}),n.d(t,"c",function(){return g}),n.d(t,"b",function(){return v}),n.d(t,"f",function(){return h});var u={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,isAuth:!1,followingInProgress:[]},l=function(e){return{type:"FOLLOW",userId:e}},m=function(e){return{type:"UNFOLLOW",userId:e}},d=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},f=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},p=function(e,t){return{type:"TOGGLE_IN_FOLLOWING_PROGRESS",isFetching:e,userId:t}},g=function(e,t){return function(n){var a;return r.a.async(function(i){for(;;)switch(i.prev=i.next){case 0:return n(f(!0)),n(d(e)),i.next=4,r.a.awrap(c.c.getUsers(e,t));case 4:a=i.sent,n(f(!1)),n({type:"SET-USERS",users:a.items}),n({type:"SET-TOTAL-USERS-COUNT",count:a.totalCount});case 8:case"end":return i.stop()}})}},E=function(e,t,n,a){return r.a.async(function(i){for(;;)switch(i.prev=i.next){case 0:return e(p(!0,t)),i.next=3,r.a.awrap(n(t));case 3:0===i.sent.data.resultCode&&e(a(t)),e(p(!1,t));case 6:case"end":return i.stop()}})},v=function(e){return function(t){return r.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:E(t,e,c.c.follow.bind(c.c),l);case 1:case"end":return n.stop()}})}},h=function(e){return function(t){return r.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:E(t,e,c.c.unfollow.bind(c.c),m);case 1:case"end":return n.stop()}})}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(o.a)({},e,{users:s(e.users,t.userId,"id",{followed:"true"})});case"UNFOLLOW":return Object(o.a)({},e,{users:s(e.users,t.userId,"id",{followed:"false"})});case"SET-USERS":return Object(o.a)({},e,{users:t.users});case"SET-CURRENT-PAGE":return Object(o.a)({},e,{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(o.a)({},e,{totalUsersCount:t.count});case"TOGGLE-IS-FETCHING":return Object(o.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IN_FOLLOWING_PROGRESS":return Object(o.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!==t.userId})});default:return e}}},125:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},129:function(e,t,n){e.exports=n.p+"static/media/preloader.ca139288.gif"},158:function(e,t,n){e.exports=n(284)},163:function(e,t,n){},27:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return m}),n.d(t,"c",function(){return d});var a=n(83),r=n(0),i=n.n(r),o=n(28),c=n.n(o),s=n(82),u=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=(e.element,e.children),o=n&&a;return i.a.createElement("div",{className:c.a.formControl+" "+(o?c.a.error:"")},i.a.createElement("div",null,r),o&&i.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return i.a.createElement(u,e,i.a.createElement("textarea",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return i.a.createElement(u,e,i.a.createElement("input",Object.assign({},t,n)))},d=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return i.a.createElement("div",null,i.a.createElement(s.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r)),o)}},28:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2HfiU",error:"FormsControls_error__2-b2E",formSummaryError:"FormsControls_formSummaryError__nedzK"}},284:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i,o,c=n(123),s=n.n(c),u=n(43),l=n(44),m=n(46),d=n(45),f=n(47),p=(n(163),n(8)),g=n.n(p),E=n(288),v=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:g.a.nav},r.a.createElement("div",{className:g.a.item},r.a.createElement(E.a,{to:"/profile",activeClassName:g.a.active,type:"text"},"Profile")),r.a.createElement("div",{className:g.a.item},r.a.createElement(E.a,{to:"/users",activeClassName:g.a.active,type:"text"},"Users")),r.a.createElement("div",{className:g.a.item},r.a.createElement(E.a,{to:"/messages",activeClassName:g.a.active,type:"text"},"Messages")),r.a.createElement("div",{className:g.a.item},r.a.createElement(E.a,{to:"/news",activeClassName:g.a.active,type:"text"},"News")),r.a.createElement("div",{className:g.a.item},r.a.createElement(E.a,{to:"/music",activeClassName:g.a.active,type:"text"},"Music")),r.a.createElement("div",{className:g.a.item},r.a.createElement(E.a,{to:"/settings",activeClassName:g.a.active,type:"text"},"Settings")),r.a.createElement("div",{className:g.a.item},r.a.createElement("div",{className:g.a.friends},r.a.createElement(E.a,{to:"/friends",activeClassName:g.a.active,type:"text"},"Friends"),r.a.createElement("div",null,r.a.createElement("div",{className:g.a.text},r.a.createElement("h4",null,"Andrej")),r.a.createElement("img",{className:g.a.img,src:"http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg"})),r.a.createElement("div",null,r.a.createElement("div",{className:g.a.text},r.a.createElement("h4",null,"Sveta")),r.a.createElement("img",{className:g.a.img,src:"http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg"})),r.a.createElement("div",null,r.a.createElement("div",{className:g.a.text},r.a.createElement("h4",null,"Katja")),r.a.createElement("img",{className:g.a.img,src:"http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg"}))))))},h=n(84),b=n.n(h),y=n(125),w=n.n(y),O=function(){return r.a.createElement("header",{className:b.a.header},r.a.createElement("img",{className:b.a.logo,src:w.a,alt:"Logo"}))},S=n(124),_=n(289),N=n(287),j=n(120),x=n(27),C=n(78),T=n(28),I=n.n(T),A=function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},Object(x.c)("Email","email",[C.b],x.a),Object(x.c)("Password","password",[C.b],x.a,{type:"password"}),Object(x.c)(null,"rememberMe",[],x.a,{type:"checkbox"},null,"remember me"),n&&r.a.createElement("div",{className:I.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))},P=n(82),L=n(7),U=n.n(L),F=n(10),R=n(12),k=n(22),z={id:null,email:null,login:null,isAuth:!1},G=function(e,t,n,a){return{type:"SET-USER-DATA",payload:{userId:e,login:n,email:t,isAuth:a}}},M=function(){return function(e){var t,n,a,r,i;return U.a.async(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,U.a.awrap(R.a.me());case 2:0===(t=o.sent).data.resultCode&&(n=t.data.data,a=n.id,r=n.email,i=n.login,e(G(a,r,i,!0)));case 4:case"end":return o.stop()}})}},D=function(e,t,n){return function(a){var r,i;return U.a.async(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,U.a.awrap(R.a.login(e,t,n));case 2:0===(r=o.sent).data.resultCode?a(M()):(i=r.data.messages.length>0?r.data.messages[0]:"Some error",a(Object(k.a)("login",{_error:i})));case 4:case"end":return o.stop()}})}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(F.a)({},e,{},t.payload);default:return e}},W=function(e){return e||"number"===typeof e?void 0:"Required"},H=(i=15,function(e){return e&&e.length>i?"Must be ".concat(i," characters or less"):void 0}),K=(o=2,function(e){return e&&e.length<o?"Must be ".concat(o," characters or more"):void 0}),V=function(e){return e&&isNaN(Number(e))?"Must be a number":void 0},Z=function(e){return function(t){return t&&t<e?"Must be at least ".concat(e):void 0}}(13),J=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0},Y=function(e){return e&&e<13?"You do not meet the minimum age requirement!":void 0},q=function(e){return e&&/.+@aol\.com/.test(e)?"Really? You still use AOL for your email?":void 0},$=function(e){return e&&/[^a-zA-Z0-9 ]/i.test(e)?"Only alphanumeric characters":void 0},X=function(e){return e&&!/^(0|[1-9][0-9]{11})$/i.test(e)?"Invalid phone number, must be 12 digits":void 0},Q=function(e){var t=e.input,n=e.label,a=e.type,i=e.meta,o=i.touched,c=i.error,s=i.warning;return r.a.createElement("div",null,r.a.createElement("label",null,n),r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,{placeholder:n,type:a})),o&&(c&&r.a.createElement("span",null,c)||s&&r.a.createElement("span",null,s))))},ee=Object(j.a)({form:"fieldLevelValidation",registration:function(e,t,n,a,r){return function(i){var o,c;return U.a.async(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,U.a.awrap(R.a.registration(e,t,n,a,r));case 2:0===(o=s.sent).data.resultCode?i(M()):(c=o.data.messages.length>0?o.data.messages[0]:"Some error",i(Object(k.a)("login",{_error:c})));case 4:case"end":return s.stop()}})}}})(function(e){var t=e.pristine,n=e.reset,a=e.submitting;return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(P.a,{name:"username",type:"text",component:Q,label:"Username",validate:[W,H,K],warn:$})),r.a.createElement("div",null,r.a.createElement(P.a,{name:"email",type:"email",component:Q,label:"Email",validate:J,warn:q})),r.a.createElement("div",null,r.a.createElement(P.a,{name:"age",type:"number",component:Q,label:"Age",validate:[W,V,Z],warn:Y})),r.a.createElement("div",null,r.a.createElement(P.a,{name:"phone",type:"number",component:Q,label:"Phone number",validate:[W,X]})),r.a.createElement("div",null,r.a.createElement(P.a,{label:"Password",name:"password",placeholder:"Password",validate:[W],component:Q})),e.error&&r.a.createElement("div",{className:I.a.formSummaryError},e.error),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",disabled:a},"Submit"),r.a.createElement("button",{type:"button",disabled:t||a,onClick:n},"Clear Values")))}),te=n(64),ne=n.n(te),ae=n(16),re=n(286),ie=Object(j.a)({form:"login"})(A),oe=Object(j.a)({form:"registration"})(ee),ce=Object(ae.b)(function(e){return{isAuth:e.auth.isAuth}},{login:D})(function(e){var t=function(t){e.login(t.email,t.password,t.rememberMe,t.username,t.age,t.phoneNumber)};return e.isAuth?r.a.createElement(re.a,{to:"/profile"}):r.a.createElement("div",{className:ne.a.logination},r.a.createElement("div",{className:ne.a.login},r.a.createElement("h1",null,"Login"),r.a.createElement(ie,{onSubmit:t})),r.a.createElement("div",{className:ne.a.registration},r.a.createElement("h1",null,"Registration"),r.a.createElement(oe,{onSubmit:t})))}),se=n(6),ue={initialized:!1},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(F.a)({},e,{initialized:!0});default:return e}},me=n(56),de=n(90),fe=n(119),pe={message:[{id:1,message:"Hi, how are you friends?"},{id:2,message:"It's my first post"},{id:3,message:"props it is"},{id:4,message:"yo ho yo ho yo"},{id:5,message:"yo ho yo ho yo"},{id:6,message:"yo ho yo ho yo"}],name:[{id:1,name:"Andrej"},{id:2,name:"Bogdan"},{id:3,name:"Segej"},{id:4,name:"Viktor"},{id:5,name:"Sveta"},{id:6,name:"Katja"}]},ge=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe},Ee=n(122),ve=n(130),he=n(121),be=Object(se.c)({profilePage:de.b,messagesPage:fe.a,friendsPage:ge,usersPage:Ee.a,auth:B,app:le,form:he.a}),ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.d,we=Object(se.e)(be,ye(Object(se.a)(ve.a)));window.__store__=we;var Oe=we,Se=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(me.a,null)},r.a.createElement(e,t))}},_e=n(88),Ne=n.n(_e),je=function(e){return r.a.createElement("header",{className:Ne.a.header},r.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),r.a.createElement("div",{className:Ne.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login,"-",r.a.createElement("button",{onClick:e.logout},"Log out")," "):r.a.createElement(E.a,{to:"/login"},"Login")))},xe=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(je,this.props)}}]),t}(r.a.Component),Ce=Object(ae.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(e){return U.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.a.awrap(R.a.logout());case 2:0===t.sent.data.resultCode&&e(G(null,null,D,!1));case 4:case"end":return t.stop()}})}}})(xe),Te=r.a.lazy(function(){return n.e(6).then(n.bind(null,326))}),Ie=r.a.lazy(function(){return n.e(9).then(n.bind(null,321))}),Ae=r.a.lazy(function(){return Promise.all([n.e(3),n.e(8)]).then(n.bind(null,322))}),Pe=r.a.lazy(function(){return n.e(10).then(n.bind(null,323))}),Le=r.a.lazy(function(){return n.e(4).then(n.bind(null,325))}),Ue=r.a.lazy(function(){return n.e(5).then(n.bind(null,324))}),Fe=r.a.lazy(function(){return n.e(7).then(n.bind(null,327))}),Re=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Ce,null),r.a.createElement(v,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(S.a,{path:"/messages",render:Se(Te)}),r.a.createElement(S.a,{path:"/profile/:userId?",render:Se(Ue)}),r.a.createElement(S.a,{path:"/users",render:Se(Le)}),r.a.createElement(S.a,{path:"/news",render:Se(Ie)}),r.a.createElement(S.a,{path:"/music",render:Se(Ae)}),r.a.createElement(S.a,{path:"/settings",render:Se(Pe)}),r.a.createElement(S.a,{path:"/friends",render:Se(Fe)}),r.a.createElement(S.a,{path:"/login",render:function(){return r.a.createElement(ce,null)}})),r.a.createElement(O,null)):r.a.createElement(me.a,null)}}]),t}(a.Component),ke=Object(se.d)(_.a,Object(ae.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(M());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(Re),ze=function(e){return r.a.createElement(N.a,null,r.a.createElement(ae.a,{store:Oe},r.a.createElement(ke,null)))};s.a.render(r.a.createElement(ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(129),o=n.n(i);t.a=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:o.a}))}},64:function(e,t,n){e.exports={logination:"login_logination__YSxBt",login:"login_login__108Kr",registration:"login_registration__1514y"}},78:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},8:function(e,t,n){e.exports={nav:"Navbar_nav__1cnY_",item:"Navbar_item__2TOQe",active:"Navbar_active__1LJvz",friends:"Navbar_friends__1hmLW",img:"Navbar_img__Vt8mu",text:"Navbar_text__3owuw"}},84:function(e,t,n){e.exports={header:"Footer_header__1u5cS",logo:"Footer_logo__gdMJ7"}},88:function(e,t,n){e.exports={header:"Header_header__3ox8W",loginBlock:"Header_loginBlock__1DJL3"}},90:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"d",function(){return m}),n.d(t,"c",function(){return d}),n.d(t,"e",function(){return f});var a=n(7),r=n.n(a),i=n(30),o=n(10),c=n(12),s={posts:[{id:1,message:"Hi, how are you?",likesCount:"12"},{id:2,message:"It's my first post",likesCount:"16"},{id:3,message:"props it is",likesCount:"9"},{id:4,message:"yo yo yo",likesCount:"7"}],profile:null,status:""},u=function(e){return{type:"ADD-POST",newPostText:e}},l=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(t){var n;return r.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(c.c.getProfile(e));case 2:n=a.sent,t({type:"SET-USER-PROFILE",profile:n.data});case 4:case"end":return a.stop()}})}},d=function(e){return function(t){var n;return r.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(c.b.getStatus(e));case 2:n=a.sent,t(l(n.data));case 4:case"end":return a.stop()}})}},f=function(e){return function(t){return r.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(c.b.updateStatus(e));case 2:0===n.sent.data.resaultCode&&t(l(e));case 4:case"end":return n.stop()}})}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)({},e,{posts:[].concat(Object(i.a)(e.posts),[n])});case"SET-USER-PROFILE":return Object(o.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(o.a)({},e,{status:t.status});default:return e}}}},[[158,1,2]]]);
//# sourceMappingURL=main.abf124e9.chunk.js.map