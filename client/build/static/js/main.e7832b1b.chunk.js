(this["webpackJsonpprotected-areas-app"]=this["webpackJsonpprotected-areas-app"]||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(28),c=a.n(r),o=a(4),i=a(3),A=a(16),l=a(6),u=(a(50),a(51),a(52),a(2)),d=a.n(u),j=a(7),b=(a(54),a(12)),p=a.n(b),m=a(44),O=a(0),g=function(e){var t=e.setOpen,a=e.setOpenLogin,s=e.setRedirect,n=e.setToggleModal,r=e.setModalText,c=function(){var e=Object(j.a)(d.a.mark((function e(c){var o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={firstName:c.firstName,lastName:c.lastName,address:c.address,city:c.city,country:c.country,volunteer:c.volunteer,about:c.about,email:c.email,password:c.password,confirmPassword:c.confirmPassword},e.prev=1,e.next=4,p.a.post("http://localhost:8080/user/register",o);case 4:"ok"===(i=e.sent).data.status?(i.data.data,s("/user/register"),n(!0),r("Signup successful! Please login to continue"),t(!0),a(!0)):(s("/user/register"),n(!0),r("Passwords must match!")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),i=Object(m.a)(),A=i.register,l=i.handleSubmit,u=i.formState.errors;return Object(O.jsxs)("div",{className:"signup",children:[Object(O.jsx)("h2",{className:"signup__name",children:"Register here!"}),Object(O.jsxs)("form",{onSubmit:l(c),className:"signup__form",children:[Object(O.jsxs)("div",{className:"signup__left",children:[Object(O.jsxs)("label",{htmlFor:"firstName",className:"signup__label",children:["First name",Object(O.jsx)("input",Object(o.a)(Object(o.a)({},A("firstName",{required:!0})),{},{id:"firstName",className:"signup__input"})),u.firstName&&Object(O.jsx)("p",{className:"signup__error",children:"First name is required"})]}),Object(O.jsxs)("label",{htmlFor:"lastName",className:"signup__label",children:["Last Name",Object(O.jsx)("input",Object(o.a)(Object(o.a)({},A("lastName",{required:!0})),{},{className:"signup__input"})),u.lastName&&Object(O.jsx)("p",{className:"signup__error",children:"Last name is required"})]}),Object(O.jsxs)("label",{htmlFor:"address",className:"signup__label",children:["Address",Object(O.jsx)("input",Object(o.a)(Object(o.a)({},A("address",{required:!0})),{},{id:"address",className:"signup__input"})),u.address&&Object(O.jsx)("p",{className:"signup__error",children:"Address is required"})]}),Object(O.jsxs)("label",{htmlFor:"city",className:"signup__label",children:["City",Object(O.jsx)("input",Object(o.a)(Object(o.a)({},A("city",{required:!0})),{},{id:"city",className:"signup__input"})),u.city&&Object(O.jsx)("p",{className:"signup__error",children:"City is required"})]}),Object(O.jsxs)("label",{htmlFor:"country",className:"signup__label",children:["Country",Object(O.jsx)("input",Object(o.a)(Object(o.a)({},A("country",{required:!0})),{},{id:"country",className:"signup__input"})),u.country&&Object(O.jsx)("p",{className:"signup__error",children:"Country is required"})]}),Object(O.jsxs)("label",{htmlFor:"about",className:"signup__label",children:["About you...",Object(O.jsx)("input",Object(o.a)(Object(o.a)({type:"textarea"},A("about",{required:!0})),{},{id:"about",className:"signup__input signup__input--about"})),u.about&&Object(O.jsx)("p",{className:"signup__error",children:"About you is required"})]})]}),Object(O.jsxs)("div",{className:"signup__right",children:[Object(O.jsxs)("label",{htmlFor:"avatar",className:"signup__label",children:["Avatar",Object(O.jsx)("input",{type:"file",id:"avatar",className:"signup__avatar"})]}),Object(O.jsx)("label",{htmlFor:"volunteer",className:"signup__label signup__label--radio",children:"Avaliable to volunteer?"}),Object(O.jsxs)("div",{className:"signup__radio",children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(o.a)(Object(o.a)({type:"radio",value:"Yes"},A("volunteer",{required:!0})),{},{id:"yes"})),"Yes"]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(o.a)(Object(o.a)({type:"radio",value:"No"},A("volunteer",{required:!0})),{},{id:"no"})),"No",u.volunteer&&Object(O.jsx)("p",{className:"signup__error",children:"Availabilty is required"})]})]}),Object(O.jsxs)("label",{htmlFor:"email",className:"signup__label",children:["Email",Object(O.jsx)("input",Object(o.a)(Object(o.a)({type:"email"},A("email",{required:!0})),{},{id:"email",className:"signup__input"})),u.email&&Object(O.jsx)("p",{className:"signup__error",children:"Email is required"})]}),Object(O.jsxs)("label",{htmlFor:"password",className:"signup__label",children:["Password",Object(O.jsx)("input",Object(o.a)(Object(o.a)({type:"password"},A("password",{required:!0})),{},{id:"password",className:"signup__input"})),u.password&&Object(O.jsx)("p",{className:"signup__error",children:"Password is required"})]}),Object(O.jsxs)("label",{htmlFor:"password",className:"signup__label",children:["Confirm Password",Object(O.jsx)("input",Object(o.a)(Object(o.a)({type:"password"},A("confirmPassword",{required:!0})),{},{id:"confirmPassword",className:"signup__input"})),u.confirmPassword&&Object(O.jsx)("p",{className:"signup__error",children:"Confirm password is required"})]}),Object(O.jsx)("button",{type:"submit",className:"signup__submit",children:"Sign Up"})]})]})]})},f=a.p+"static/media/Where-to.49c3402a.png",h=(a(73),function(e){var t=e.setOpen,a=e.setOpenLogin,n=e.setModalText,r=e.setToggleModal,c=e.setRedirect,o=Object(s.useState)(""),A=Object(i.a)(o,2),l=A[0],u=A[1],b=Object(s.useState)(""),m=Object(i.a)(b,2),g=m[0],f=m[1],h=function(){var e=Object(j.a)(d.a.mark((function e(s){var o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),o={email:l,password:g},e.prev=2,e.next=5,p.a.post("http://localhost:8080/user/login",o);case 5:"ok"===(i=e.sent).data.status?(u=i.data.data,sessionStorage.setItem("token",u),c("/profile"),r(!0),n("Successfully logged in! Welcome!"),a(!1),t(!1)):(A=i.data.error,r(!0),n(A)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}var A,u}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"login",children:Object(O.jsxs)("form",{onSubmit:h,className:"login__form",children:[Object(O.jsx)("label",{htmlFor:"email",className:"login__label login__label--top",children:"Username"}),Object(O.jsx)("input",{type:"email",name:"email",value:l,onChange:function(e){return u(e.target.value)},className:"login__input"}),Object(O.jsx)("label",{htmlFor:"password",className:"login__label",children:"Password"}),Object(O.jsx)("input",{type:"password",name:"password",value:g,onChange:function(e){return f(e.target.value)},className:"login__input"}),Object(O.jsx)("button",{type:"submit",className:"login__submit",children:"Login"})]})})}),x=a.p+"static/media/conservation-nation-logo.f8227b9e.png",w=(a(74),Object(l.g)((function(e){var t=e.setRedirect,a=e.history,s=e.setToggleModal,n=e.setModalText,r=e.open,c=e.setOpen,o=e.openLogin,i=e.setOpenLogin;return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)(A.b,{to:"/",className:"header__link",children:Object(O.jsx)("img",{src:x,alt:"Logo",className:"header__logo"})}),Object(O.jsx)("img",{src:f,alt:"Where to navigation text",className:"header__drop",onClick:function(){c(!r)}}),Object(O.jsxs)("nav",{className:r?"dropdown dropdown--slidein":"dropdown dropdown--slideout",children:[Object(O.jsx)(A.b,{to:"/",className:"dropdown__link",onClick:function(){return c(!1)},children:"Home"}),Object(O.jsx)(A.b,{to:"/",onClick:function(){return i(!o)},className:"dropdown__link",children:"Login"}),o&&Object(O.jsx)(h,{history:a,setOpen:c,setOpenLogin:i,setToggleModal:s,setModalText:n,setRedirect:t}),Object(O.jsx)(A.b,{className:"dropdown__link",onClick:function(){"string"!==typeof sessionStorage.getItem("token")?(s(!0),i(!0),n("Please login to continue")):(a.push("/profile"),c(!1))},children:"Profile"}),Object(O.jsx)(A.b,{to:"/user/register",className:"dropdown__link",onClick:function(){return c(!1)},children:"Register"})]})]})}))),v=(a(82),a(96)),N=a(97),_=a(98),C=a(99),k=a(101),I=(a(83),a(84),a(21)),M=a(23),y=a(9),E=a.n(y),T=a.p+"static/media/tree.46b02d7e.png",S=a.p+"static/media/coral.701aa783.png",B=function(e){var t=e.data[0].geojson.geometry.coordinates.find((function(e){return e}));return"MultiPolygon"===e.data[0].geojson.geometry.type?[t[0][0][1],t[0][0][0]]:[t[0][1],t[0][0]]},P={fillColor:"#044F67",weight:2,color:"#044F67",fillOpacity:.3},D={fillColor:"#679267",weight:2,color:"#679267",fillOpacity:.3},Q=E.a.icon({iconUrl:T,iconSize:[25,41],iconAnchor:[12.5,41],popupAnchor:[0,-41]}),K=E.a.icon({iconUrl:S,iconSize:[25,41],iconAnchor:[12.5,41],popupAnchor:[0,-41]});a(87);function J(e){var t,a=e.area;return Object(O.jsxs)("div",{className:"area",children:[Object(O.jsx)("h1",{className:"area__name",children:a.name}),Object(O.jsxs)("span",{className:"area__info",children:[Object(O.jsx)("strong",{children:"Country:"})," ",a.countries[0].name]}),Object(O.jsxs)("span",{className:"area__info",children:[Object(O.jsx)("strong",{children:"Total Area:"})," ",a.reported_area,"km",Object(O.jsx)("sup",{children:"2"})]}),a.marine&&Object(O.jsxs)("span",{className:"area__info",children:[Object(O.jsx)("strong",{children:"Total marine area:"})," ",a.reported_marine_area,"km",Object(O.jsx)("sup",{children:"2"})]}),Object(O.jsxs)("span",{className:"area__info",children:[Object(O.jsx)("strong",{children:"Category:"})," ",(t=a.iucn_category.name,"Ia"===t?"Strict Nature Reserve":"Ib"===t?"Wilderness Area":"II"===t?"National Park":"III"===t?"Natural Monument/Feature":"IV"===t?"Habitat or species management area":"V"===t?"Protected landscape/seascape":"VI"===t?"Protected area with sustainable use of natural resources":"Not designated")]}),Object(O.jsxs)("span",{className:"area__info",children:[Object(O.jsx)("strong",{children:"Jurisdiction:"})," ",a.designation.name]}),Object(O.jsxs)("span",{className:"area__info",children:[Object(O.jsx)("strong",{children:"Management Authority:"})," ",a.management_authority.name]}),Object(O.jsxs)("span",{className:"area__info",children:[Object(O.jsx)("strong",{children:"Governance:"})," ",a.governance.governance_type]})]})}var z=function(e){var t=e.areas,a=e.onEachArea,n=e.PlotObservations,r=e.setClickedArea,c=e.userLocation,o=e.center,A=e.observations,l=Object(s.useState)(!0),u=Object(i.a)(l,2),d=u[0],j=u[1];Object(s.useEffect)((function(){}),[t,c,d]);var b=function(e){return Object(v.a)().flyTo(e.center,6),null},p=function(){var e=Object(v.b)({click:function(t){e.flyTo(t.latlng,9)}});return Object(O.jsx)(O.Fragment,{children:t.map((function(e){return Object(O.jsx)(N.a,{onEachFeature:a,data:e.geojson,style:e.marine?P:D,eventHandlers:{click:function(){r(e)}},children:!A&&Object(O.jsx)(_.a,{direction:"top",className:"tooltips",sticky:!0,children:Object(O.jsx)(J,{area:e})})},e._id)}))})};return Object(O.jsx)("div",{children:Object(O.jsxs)(C.a,{className:"map",center:[52,-122],zoom:2.5,scrollWheelZoom:!0,zoomControl:!1,children:[!A&&o?Object(O.jsx)(b,{center:o}):null,A&&Object(O.jsx)(n,{}),d&&Object(O.jsx)(k.a,{attribution:"\xa9 <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> \xa9 <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",url:"https://api.mapbox.com/styles/v1/dylanmasschelein/ckq1qqqes17n517ju45xlaqfq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZHlsYW5tYXNzY2hlbGVpbiIsImEiOiJja3B5dmlyZXUwaG55Mm9xc3RsNzBybWV2In0.NJDvx0UbxYYMpvuQsamo6w"}),!d&&Object(O.jsx)(k.a,{attribution:"\xa9 <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> \xa9 <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",url:"https://api.mapbox.com/styles/v1/dylanmasschelein/ckq1tjf5b0jig17n785z67zv4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZHlsYW5tYXNzY2hlbGVpbiIsImEiOiJja3B5dmlyZXUwaG55Mm9xc3RsNzBybWV2In0.NJDvx0UbxYYMpvuQsamo6w"}),t&&Object(O.jsx)(p,{}),Object(O.jsx)(I.a,{icon:M.c,onClick:function(){j(!d)},className:d?"map__toggle":" map__toggle map__toggle--off"})]})})};a(88);var L=function(e){var t=e.setSearch,a=e.handleSearch,s=e.search,n=e.setClickedObservation,r=e.setTerrestrial;return Object(O.jsxs)("form",{onSubmit:function(e){a(e),n(null)},className:"search",children:[Object(O.jsx)("input",{type:"text",placeholder:"Discover",name:"search",value:s,onChange:function(e){return t(e.target.value)},className:"search__input"}),Object(O.jsx)("div",{children:Object(O.jsxs)("select",{name:"terrestrial",id:"terrestrial",onChange:function(e){r(e.target.value)},className:"search__select",children:[Object(O.jsx)("option",{value:"all",className:"search__option",children:"All"}),Object(O.jsx)("option",{value:"marine",className:"search__option",children:"Marine"}),Object(O.jsx)("option",{value:"land",className:"search__option",children:"Land"})]})}),Object(O.jsx)("button",{type:"submit",className:"search__btn",children:Object(O.jsx)(I.a,{icon:M.a,className:"search__icon"})})]})};a(89);function R(e){var t=e.setModalText,a=e.setToggleModal,s=e.setClickedObservation;if(!e.observation.taxon)return a(!0),t("Taxon information corrupt, please select another"),s(null),null;var n=e.observation.taxon.default_photo.medium_url,r=e.observation.taxon,c=r.name,o=r.is_active,i=r.observations_count,A=r.preferred_common_name,l=r.threatend,u=r.native;return Object(O.jsxs)("div",{className:"observation",children:[Object(O.jsx)("div",{className:"observation__photo-container",children:n?Object(O.jsx)("img",{src:n,alt:A,className:"observation__photo"}):"Photo not available :("}),Object(O.jsx)("div",{className:"observation__details-container",children:Object(O.jsxs)("div",{className:"observation__details",children:[Object(O.jsx)("h1",{className:"observation__name",children:A}),Object(O.jsx)("h3",{className:"observation__latin-name",children:c}),Object(O.jsx)("span",{className:"observation__info",children:u?"Native wildlife":"Introduced wildlife"}),Object(O.jsxs)("span",{className:"observation__info",children:["Observed population count: ",i]}),Object(O.jsxs)("span",{className:"observation__info",children:["Currently Active: ",o?"Yes":"No"]}),Object(O.jsx)("span",{className:"observation__info",children:l?"Threatend":"Healthy population"})]})})]})}var F=a(100),U=function(e){var t=e.user,a=e.setToggleModal,n=e.setModalText,r=e.setRedirect,c=e.setOpen,o=e.setOpenLogin,A=Object(s.useState)(""),l=Object(i.a)(A,2),u=l[0],b=l[1],m=Object(s.useState)(null),g=Object(i.a)(m,2),f=g[0],h=g[1],x=Object(s.useState)(null),w=Object(i.a)(x,2),v=w[0],N=w[1],_=Object(s.useState)(null),C=Object(i.a)(_,2),k=C[0],I=C[1],M=Object(s.useState)(null),y=Object(i.a)(M,2),E=y[0],T=y[1],S=Object(s.useState)(null),P=Object(i.a)(S,2),D=P[0],J=P[1],U=Object(s.useState)(null),q=Object(i.a)(U,2),Y=q[0],H=q[1],V=Object(s.useState)("all"),X=Object(i.a)(V,2),W=X[0],G=X[1];Object(s.useEffect)((function(){}),[f,k,E,D,Y]);var Z=function(){var e=Object(j.a)(d.a.mark((function e(t){var a,s,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(t),e.prev=1,"marine"!==W){e.next=11;break}return e.next=5,p.a.get("http://localhost:8080/areas/marine/".concat(u));case 5:a=e.sent,H(B(a)),h(a.data),I(null),e.next=26;break;case 11:if("land"!==W){e.next=20;break}return e.next=14,p.a.get("http://localhost:8080/areas/land/".concat(u));case 14:s=e.sent,H(B(s)),h(s.data),I(null),e.next=26;break;case 20:return e.next=22,p.a.get("http://localhost:8080/areas/country/".concat(u));case 22:n=e.sent,H(B(n)),h(n.data),I(null);case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(1),console.error(e.t0);case 31:case"end":return e.stop()}}),e,null,[[1,28]])})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a,s,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.neLat,a=v.neLng,s=v.swLat,n=v.swLng,e.prev=1,e.next=4,p.a.get("https://api.inaturalist.org/v1/observations?geo=true&mappable=true&photos=true&nelat=".concat(t,"&nelng=").concat(a,"&swlat=").concat(s,"&swlng=").concat(n,"&per_page=200"));case 4:r=e.sent,I(r.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(j.a)(d.a.mark((function e(){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=8;break}a(!0),n("Please sign in to follow an area!"),r("/"),c(!0),o(!0),e.next=26;break;case 8:if(D){e.next=14;break}a(!0),n("You must inspect an area to follow it!"),r("/"),e.next=26;break;case 14:return s=t.email,e.prev=15,e.next=18,p.a.put("http://localhost:8080/user/".concat(s),{clickedArea:D});case 18:a(!0),n("Area followed!"),r("/"),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(15),console.error(e.t0);case 26:case"end":return e.stop()}}),e,null,[[15,23]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"home",children:[Object(O.jsxs)("div",{className:"home__left",children:[Object(O.jsx)(L,{setTerrestrial:G,setSearch:b,handleSearch:Z,search:u,setClickedObservation:T}),Object(O.jsxs)("div",{className:"home__button-div",children:[Object(O.jsx)("button",{onClick:ee,className:"home__button",children:"FOLLOW"}),Object(O.jsx)("button",{onClick:function(){D||(r("/"),a(!0),n("You must click an area to explore it!")),v&&$()},className:"home__button home__button--right",children:"EXPLORE"})]}),E&&Object(O.jsx)(R,{setToggleModal:a,setModalText:n,observation:E,setClickedObservation:T})]}),Object(O.jsx)("div",{className:"home__right",children:Object(O.jsx)(z,{areas:f,onEachArea:function(e,t){t.on("click",(function(e){var t=e.target._bounds,a=t._northEast,s=t._southWest;N({neLat:a.lat,neLng:a.lng,swLat:s.lat,swLng:s.lng})}))},PlotObservations:function(){return k?k.map((function(e){return Object(O.jsx)(F.a,{position:[e.geojson.coordinates[1],e.geojson.coordinates[0]],icon:D.marine?K:Q,eventHandlers:{click:function(){T(e)}}},e.id)})):null},setClickedArea:J,center:Y,observations:k})})]})},q=(a(90),a(91),a.p+"static/media/Mugshot-1.78d9c85e.jpg"),Y=a.p+"static/media/linkedin.7fd83a62.png",H=a.p+"static/media/Octocat.363cb5ed.png",V=function(e){var t=e.user,a=t.firstName,s=t.address,n=t.city,r=t.country,c=t.about,o=t.volunteer;return Object(O.jsxs)("div",{className:"user-info",children:[Object(O.jsxs)("h2",{className:"user-info__name",children:["Welcome back ",a,"!"]}),Object(O.jsx)("img",{src:q,alt:"hey its me",className:"user-info__avatar"}),Object(O.jsx)("h5",{className:"user-info__subtitle",children:"Address:"}),Object(O.jsxs)("p",{className:"user-info__details",children:[s,", ",n,", ",r]}),Object(O.jsx)("h5",{className:"user-info__subtitle",children:"Interests:"}),Object(O.jsx)("p",{className:"user-info__details",children:c}),Object(O.jsx)("h5",{className:"user-info__subtitle",children:"Volunteer:"}),Object(O.jsx)("p",{className:"user-info__details",children:o?"Available":"Unavailable"}),Object(O.jsx)("h5",{className:"user-info__subtitle",children:"Contact"}),Object(O.jsxs)("div",{className:"user-info__icon-container",children:[Object(O.jsx)("img",{src:Y,alt:"linkedin logo",className:"user-info__logo"}),Object(O.jsx)("img",{src:H,alt:"octocat-logo",className:"user-info__logo"}),Object(O.jsx)("img",{src:"data:image/png;base64,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",alt:"gmail-logo",className:"user-info__logo"})]})]})},X=(a(92),a(93),function(e){var t=e.name,a=e.country,s=e.id,n=e.handleDelete;return Object(O.jsxs)(A.b,{className:"area-card",children:[Object(O.jsx)("h2",{className:"area-card__name",children:t}),Object(O.jsx)("h3",{className:"area-card__country",children:a}),Object(O.jsx)(I.a,{icon:M.b,onClick:function(){return n(s)},className:"area-card__unfollow"})]})}),W=function(e){var t=e.followedAreas,a=e.handleDelete;return Object(O.jsx)("div",{className:"area-list",children:t.map((function(e){return Object(O.jsx)(X,{id:e.id,name:e.name,country:e.countries[0].name,handleDelete:a},e.id)}))})},G=function(e){var t=e.setUser,a=e.user,n=e.setToggleModal,r=e.setModalText,c=e.setRedirect,o=Object(s.useState)(!1),A=Object(i.a)(o,2),l=A[0],u=A[1],b=Object(s.useState)(null),m=Object(i.a)(b,2),g=m[0],f=m[1],h=sessionStorage.getItem("token"),x=function(){var e=Object(j.a)(d.a.mark((function e(a){var s,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={headers:{Authorization:"Bearer ".concat(a)}},e.prev=1,e.next=4,p.a.get("http://localhost:8080/user/current",s);case 4:n=e.sent,t(n.data),f(n.data.followedAreas),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),u(!0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){h?x(h):u(!0)}),[]);var w=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.delete("http://localhost:8080/user/".concat(a.email,"/area/").concat(t));case 3:x(h),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return l?Object(O.jsx)("h1",{children:"You must be logged in to view your profile"}):Object(O.jsxs)("div",{className:"profile",children:[Object(O.jsxs)("div",{className:"profile__user",children:[a&&Object(O.jsx)(V,{user:a}),Object(O.jsx)("button",{onClick:function(){sessionStorage.removeItem("token"),t(null),u(!0),n(!0),r("You have been logged out!"),c("/")},className:"profile__logout",children:"Log out"})]}),Object(O.jsxs)("div",{className:"profile__followed",children:[Object(O.jsx)("h1",{className:"profile__title",children:"Followed areas"}),Object(O.jsx)("div",{className:"profile__areas",children:g&&Object(O.jsx)(W,{handleDelete:w,followedAreas:g})})]})]})},Z=(a(94),Object(l.g)((function(e){var t=e.setToggleModal,a=e.modalText,s=e.redirect,n=e.history;return Object(O.jsx)("div",{className:"modal",children:Object(O.jsxs)("div",{className:"modal__window",children:[Object(O.jsx)("h3",{className:"modal__message",children:a}),Object(O.jsx)("button",{onClick:function(){t(!1),n.push("".concat(s))},className:"modal__button",children:"Okay!"})]})})}))),$=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(!1),c=Object(i.a)(r,2),u=c[0],d=c[1],j=Object(s.useState)(null),b=Object(i.a)(j,2),p=b[0],m=b[1],f=Object(s.useState)(!1),h=Object(i.a)(f,2),x=h[0],v=h[1],N=Object(s.useState)(""),_=Object(i.a)(N,2),C=_[0],k=_[1],I=Object(s.useState)(""),M=Object(i.a)(I,2),y=M[0],E=M[1];return Object(O.jsxs)(A.a,{children:[Object(O.jsx)(w,{user:p,setToggleModal:v,setModalText:k,setRedirect:E,open:a,setOpen:n,openLogin:u,setOpenLogin:d}),x&&Object(O.jsx)(Z,{redirect:y,setToggleModal:v,modalText:C}),Object(O.jsxs)(l.d,{children:[Object(O.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(U,{user:p,setToggleModal:v,setModalText:k,setRedirect:E,setOpenLogin:d,setOpen:n})}}),Object(O.jsx)(l.b,{path:"/profile",render:function(e){return Object(O.jsx)(G,Object(o.a)({setUser:m,user:p,setToggleModal:v,setModalText:k,setRedirect:E},e))}}),Object(O.jsx)(l.b,{path:"/user/register",render:function(e){return Object(O.jsx)(g,Object(o.a)({setToggleModal:v,setModalText:k,setRedirect:E,setOpenLogin:d,setOpen:n},e))}}),Object(O.jsx)(l.a,{to:"/"})]})]})};c.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)($,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.e7832b1b.chunk.js.map