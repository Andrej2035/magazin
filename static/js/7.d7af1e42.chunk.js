(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{290:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(43),r=n(44),s=n(46),i=n(45),c=n(47),u=n(0),m=n.n(u),d=n(286),o=n(16),l=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){function n(){return Object(a.a)(this,n),Object(s.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return this.props.isAuth?m.a.createElement(e,this.props):m.a.createElement(d.a,{to:"/login"})}}]),n}(m.a.Component);return Object(o.b)(l)(t)}},319:function(e,t,n){e.exports={friends:"Friends_friends__25c-R",items:"Friends_items__116Di",messages:"Friends_messages__3UGeK",active:"Friends_active__2FKPq"}},327:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(319),i=n.n(s),c=n(288),u=function(e){var t="/friends/"+e.id;return r.a.createElement("div",null,r.a.createElement("div",{className:i.a.items},r.a.createElement(c.a,{to:t,activeClassName:i.a.active},e.name)))},m=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:i.a.friends},r.a.createElement("div",{className:i.a.messages},e.message)))},d=function(e){var t=e.friendsPage,n=t.name.map(function(e){return r.a.createElement(u,{name:e.name,id:e.id})}),a=t.message.map(function(e){return r.a.createElement(m,{message:e.message,id:e.id})});return r.a.createElement("div",{className:i.a.friends},r.a.createElement(u,{name:n}),r.a.createElement(m,{message:a}))},o=n(16),l=n(290),f=Object(l.a)(d),v=Object(o.b)(function(e){return{friendsPage:e.friendsPage}})(f);t.default=v}}]);
//# sourceMappingURL=7.d7af1e42.chunk.js.map