(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{290:function(t,e,a){"use strict";a.d(e,"a",function(){return f});var n=a(43),s=a(44),o=a(46),r=a(45),c=a(47),l=a(0),u=a.n(l),i=a(286),m=a(16),p=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(t,this.props):u.a.createElement(i.a,{to:"/login"})}}]),a}(u.a.Component);return Object(m.b)(p)(e)}},292:function(t,e,a){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var a=[],n=!0,s=!1,o=void 0;try{for(var r,c=t[Symbol.iterator]();!(n=(r=c.next()).done)&&(a.push(r.value),!e||a.length!==e);n=!0);}catch(l){s=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(s)throw o}}return a}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(e,"a",function(){return n})},316:function(t,e,a){t.exports={desBlock:"ProfileInfo_desBlock__jPUT7",font:"ProfileInfo_font__2hlf1"}},317:function(t,e,a){t.exports={postBlock:"MyPosts_postBlock__259OR",posts:"MyPosts_posts__2ZNP9",button:"MyPosts_button__23SZ_"}},318:function(t,e,a){t.exports={posts:"Posts_posts__1d87Y",item:"Posts_item__1hcjb"}},324:function(t,e,a){"use strict";a.r(e);var n=a(43),s=a(44),o=a(46),r=a(45),c=a(47),l=a(0),u=a.n(l),i=a(316),m=a.n(i),p=a(56),f=a(292),d=function(t){var e=Object(l.useState)(!1),a=Object(f.a)(e,2),n=a[0],s=a[1],o=Object(l.useState)(t.status),r=Object(f.a)(o,2),c=r[0],i=r[1];Object(l.useEffect)(function(){i(t.status)},[t.status]);return u.a.createElement("div",null,!n&&u.a.createElement("div",null,u.a.createElement("span",{onDoubleClick:function(){s(!0)}},t.status||"======")),n&&u.a.createElement("div",null,u.a.createElement("input",{onChange:function(t){i(t.currentTarget.value)},onBlur:function(){s(!1),t.updateStatus(c)},value:c,autoFocus:!0})))},b=function(t){var e=t.profile,a=t.status,n=t.updateStatus;return e?u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("img",{src:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"})),u.a.createElement("div",{className:m.a.desBlock},u.a.createElement("img",{src:e.photos.large})),u.a.createElement("div",null,u.a.createElement(d,{status:a,updateStatus:n}),u.a.createElement("div",{className:m.a.font},"UserId:",e.userId),u.a.createElement("div",{className:m.a.font},"lookingForAJob: ",e.lookingForAJob),u.a.createElement("div",{className:m.a.font},"lookingForAJobDescription: ",e.lookingForAJobDescription),u.a.createElement("div",{className:m.a.font},"fullName: ",e.fullName),u.a.createElement("div",{className:m.a.font},"contacts:"),u.a.createElement("div",null," ",e.contacts.github),u.a.createElement("div",null," ",e.contacts.vk),u.a.createElement("div",null," ",e.contacts.facebook),u.a.createElement("div",null," ",e.contacts.instagram),u.a.createElement("div",null," ",e.contacts.twitter),u.a.createElement("div",null," ",e.contacts.website),u.a.createElement("div",null," ",e.contacts.youtube),u.a.createElement("div",null," ",e.contacts.mainLink))):u.a.createElement(p.a,null)},v=a(90),h=a(30),E=a(317),g=a.n(E),j=a(318),O=a.n(j),k=function(t){return u.a.createElement("div",{className:O.a.posts},u.a.createElement("div",{className:O.a.item},u.a.createElement("img",{src:"https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg"}),t.message,u.a.createElement("div",null,u.a.createElement("span",null,"like:"),t.likesCount)))},y=a(82),P=a(120),_=a(78),S=a(27),w=Object(_.a)(10),A=Object(P.a)({form:"myPostAddMessageForm"})(function(t){return u.a.createElement("form",{onSubmit:t.handleSubmit},u.a.createElement("div",null,u.a.createElement(y.a,{component:S.b,name:"newPostText",placeholder:"Post Message",validate:[_.b,w]})),u.a.createElement("div",null,u.a.createElement("button",null,"Add post")))}),N=u.a.memo(function(t){var e=Object(h.a)(t.posts).reverse().map(function(t){return u.a.createElement(k,{message:t.message,likesCount:t.likesCount,key:t.id})});return u.a.createElement("div",{className:g.a.postBlock},u.a.createElement("h3",null,"My post"),u.a.createElement("div",{className:g.a.postBlock},u.a.createElement(A,{onSubmit:function(e){t.addPost(e.newPostText)}})),u.a.createElement("div",{className:g.a.posts},e))}),x=a(16),I=Object(x.b)(function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}},function(t){return{addPost:function(e){var a=Object(v.a)(e);t(a)}}})(N),B=function(t){return u.a.createElement("div",null,u.a.createElement(b,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),u.a.createElement(I,null))},C=a(289),M=a(290),T=a(6),F=function(t){function e(){return Object(n.a)(this,e),Object(o.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return u.a.createElement(B,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(u.a.Component);e.default=Object(T.d)(Object(x.b)(function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}},{getUserProfile:v.d,getStatus:v.c,updateStatus:v.e}),C.a,M.a)(F)}}]);
//# sourceMappingURL=5.a919ed0e.chunk.js.map