(this.webpackJsonprbf=this.webpackJsonprbf||[]).push([[0],{15:function(e,t,n){e.exports=n(31)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=n(6),s=n(2),l=n(14),u=n(4),h=n(5),d=n(8),f=n(7),m=(n(26),function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card_img-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"A random robot face",className:"img-container_img"})),r.a.createElement("div",{className:"card_info"},r.a.createElement("h3",{className:"info_name"},n||"Tester"),r.a.createElement("p",{className:"info_email"},a||"test@test.com")))}),b=(n(27),function(e){var t=e.users;return t.length?r.a.createElement("div",{className:"cards"},t.map((function(e,t){return r.a.createElement(m,{key:t,id:e.id,name:e.name,email:e.email})}))):r.a.createElement("h2",null,"Nothing found!")}),p=(n(28),function(e){var t=e.searchChange;return r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"search",placeholder:"search robots",className:"search-box_input",onChange:t}))}),E=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(h.a)(n,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h2",null,"Oooops. That is not good"):this.props.children}},{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}}]),n}(a.Component),g=(n(29),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.getFilteredRobots(),t=this.props,n=t.onSearchChange,o=t.isPending;return r.a.createElement(a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header_title"},"RBF"),r.a.createElement(p,{searchChange:n})),o?r.a.createElement("h2",null,"Loading..."):r.a.createElement("main",{className:"main"},r.a.createElement(E,null,r.a.createElement(b,{users:e}))))}},{key:"getFilteredRobots",value:function(){var e=this.props,t=e.searchField;return e.robots.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}},{key:"componentDidMount",value:function(){this.props.onRequestRobots()}}]),n}(r.a.Component)),v=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_REQUEST_ROBOTS_SUCCESS_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(g),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var R=n(1),w={searchField:""},y={isPending:!1,error:"",robots:[]},_=(n(30),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_REQUEST_ROBOTS_SUCCESS_FIELD":return Object(R.a)(Object(R.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(R.a)(Object(R.a)({},e),{},{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(R.a)(Object(R.a)({},e),{},{isPending:!1,robots:t.payload});default:return Object(R.a)(Object(R.a)({},e),{},{isPending:!1,error:t.payload})}}})),j=Object(s.d)(_,Object(s.a)(l.a));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:j},r.a.createElement(v,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rbf",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/rbf","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.01f82bc9.chunk.js.map