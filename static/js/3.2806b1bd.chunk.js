(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{294:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1_NR3",mainPhoto:"ProfileInfo_mainPhoto__1TRts",contact:"ProfileInfo_contact__qu974"}},295:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1sqTG",posts:"MyPosts_posts__2ZNP9"}},296:function(e,t,a){e.exports={item:"Post_item__1BJ0b"}},297:function(e,t,a){"use strict";a.r(t);var n=a(29),l=a(30),o=a(32),r=a(31),s=a(33),c=a(0),i=a.n(c),u=a(90),m=a(294),p=a.n(m),f=a(41),d=function(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],l=a[1],o=Object(c.useState)(e.status),r=Object(u.a)(o,2),s=r[0],m=r[1];Object(c.useEffect)(function(){m(e.status)},[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("b",null,"Status: ")," ",i.a.createElement("span",{onDoubleClick:function(){l(!0)}},e.status||"-------")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){l(!1),e.updateStatus(s)},value:s})))},b=a(99),E=a.n(b),v=a(20),h=a(121),P=a(45),k=a.n(P),g=Object(h.a)({form:"edit-profile"})(function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",null,i.a.createElement("button",null,"save")),n&&i.a.createElement("div",{className:k.a.formSummaryError},n),i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",Object(v.c)("Full name","fullName",[],v.a)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",Object(v.c)("","lookingForAJob",[],v.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),":",Object(v.c)("My professional skills","lookingForAJobDescription",[],v.b)),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),":",Object(v.c)("About me","aboutMe",[],v.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map(function(e){return i.a.createElement("div",{key:e,className:p.a.contact},i.a.createElement("b",null,e,": ",Object(v.c)(e,"contacts."+e,[],v.a)))})))}),O=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",null,a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"edit")),i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map(function(e){return i.a.createElement(j,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},j=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:p.a.contact},i.a.createElement("b",null,t),": ",a)},y=function(e){var t=e.profile,a=e.status,n=e.updateStatus,l=e.isOwner,o=e.savePhoto,r=e.saveProfile,s=Object(c.useState)(!1),m=Object(u.a)(s,2),b=m[0],v=m[1];if(!t)return i.a.createElement(f.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:p.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large||E.a,className:p.a.mainPhoto}),l&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}),b?i.a.createElement(g,{initialValues:t,profile:t,onSubmit:function(e){r(e).then(function(){v(!1)})}}):i.a.createElement(O,{goToEditMode:function(){v(!0)},profile:t,isOwner:l}),i.a.createElement(d,{status:a,updateStatus:n})))},S=a(89),_=a(34),w=a(295),N=a.n(w),A=a(296),M=a.n(A),T=function(e){return i.a.createElement("div",{className:M.a.item},i.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"like")," ",e.likesCount))},C=a(84),F=a(42),I=Object(F.a)(10),x=Object(h.a)({form:"ProfileAddNewPostForm"})(function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(C.a,{name:"newPostText",component:v.b,placeholder:"Post message",validate:[F.b,I]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))}),B=i.a.memo(function(e){var t=Object(_.a)(e.posts).reverse().map(function(e){return i.a.createElement(T,{key:e.id,message:e.message,likesCount:e.likesCount})});i.a.createRef();return i.a.createElement("div",{className:N.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(x,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:N.a.posts},t))}),J=a(12),D=Object(J.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(Object(S.a)(t))}}})(B),U=function(e){return i.a.createElement("div",null,i.a.createElement(y,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),i.a.createElement(D,null))},R=a(292),V=a(7),q=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(U,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(i.a.Component);t.default=Object(V.d)(Object(J.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:S.d,getStatus:S.c,updateStatus:S.g,savePhoto:S.e,saveProfile:S.f}),R.a)(q)}}]);
//# sourceMappingURL=3.2806b1bd.chunk.js.map