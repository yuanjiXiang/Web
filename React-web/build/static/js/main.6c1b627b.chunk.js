(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{132:function(e,t,a){e.exports=a.p+"static/media/logo.1e5fb683.png"},141:function(e,t,a){e.exports=a(242)},162:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(7),c=a.n(i),l=a(33),r=a(45),s=a(244),u=a(31),d=a(28),h=a(34),m=a(32),p=a(35),g=a(22),f=a.n(g),b=a(132),v=a.n(b),w=(a(162),a(247)),j=a(10),E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={list:[]},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"getMenuItems",value:function(){return this.state.list.map(function(e){return o.a.createElement(w.a.Item,{key:e.id},o.a.createElement(l.b,{to:"/".concat(e.id)},o.a.createElement(j.a,{type:e.icon}),e.title))})}},{key:"componentDidMount",value:function(){var e=this;f.a.get("http://www.dell-lee.com/react/api/header.json").then(function(t){e.setState({list:t.data.data})})}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement(l.b,{to:"/"},o.a.createElement("img",{src:v.a,className:"app-header-logo",alt:"logo"}),o.a.createElement(w.a,{mode:"horizontal",className:"app-header-menu"},this.getMenuItems())))}}]),t}(n.Component),y=a(245),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this,a=e.match.params.id;f.a.get("http://www.dell-lee.com/react/api/list.json?id="+a).then(function(e){t.setState({data:e.data.data})})}}]),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(y.a,{style:{background:"#fff"},bordered:!0,dataSource:this.state.data,renderItem:function(e){return o.a.createElement(y.a.Item,null,o.a.createElement(l.b,{to:"/detail/".concat(e.id)},e.title))}})}},{key:"componentDidMount",value:function(){var e=this,t="http://www.dell-lee.com/react/api/list.json",a=this.props.match.params.id;a&&(t=t+"?="+a),f.a.get(t).then(function(t){e.setState({data:t.data.data})})}}]),t}(n.Component),k=a(246),M=(a(237),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={title:"",content:""},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(k.a,{title:this.state.title},o.a.createElement("div",{className:"detail",dangerouslySetInnerHTML:{__html:this.state.content}}))}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;f.a.get("http://www.dell-lee.com/react/api/detail.json?id="+t).then(function(t){var a=t.data.data;e.setState(a)})}}]),t}(n.Component)),C=a(40),S=a(250),N=a(39),I=a(249),L=a(248),F=(a(238),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).showModal=a.showModal.bind(Object(C.a)(a)),a.hideModal=a.hideModal.bind(Object(C.a)(a)),a.changeUser=a.changeUser.bind(Object(C.a)(a)),a.changePassword=a.changePassword.bind(Object(C.a)(a)),a.checkLogin=a.checkLogin.bind(Object(C.a)(a)),a.logout=a.logout.bind(Object(C.a)(a)),a.state={login:!1,modal:!1,user:"",password:""},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"showModal",value:function(){this.setState({modal:!0})}},{key:"hideModal",value:function(){this.setState({modal:!1})}},{key:"changeUser",value:function(e){this.setState({user:e.target.value})}},{key:"changePassword",value:function(e){this.setState({password:e.target.value})}},{key:"checkLogin",value:function(){var e=this,t=this.state,a=t.user,n=t.password,o="http://www.dell-lee.com/react/api/login.json?user=".concat(a,"&password=").concat(n);f.a.get(o,{withCredentials:!0}).then(function(t){t.data.data.login?(S.a.success("\u767b\u5f55\u6210\u529f"),e.setState({login:!0,modal:!1})):S.a.error("\u767b\u5f55\u5931\u8d25")})}},{key:"logout",value:function(){var e=this;f.a.get("http://www.dell-lee.com/react/api/logout.json",{withCredentials:!0}).then(function(t){t.data.data.logout&&e.setState({login:!1}),e.props.history.push("/")})}},{key:"render",value:function(){var e=this.state.login;return o.a.createElement("div",{className:"login"},e?o.a.createElement(N.a,{type:"primary",onClick:this.logout},"\u9000\u51fa"):o.a.createElement(N.a,{type:"primary",onClick:this.showModal},"\u767b\u5f55"),o.a.createElement(l.b,{to:"/vip"},o.a.createElement(N.a,{type:"primary",style:{marginLeft:10}},"VIP")),o.a.createElement(I.a,{title:"\u767b\u5f55",visible:this.state.modal,onOk:this.checkLogin,onCancel:this.hideModal},o.a.createElement(L.a,{placeholder:"\u7528\u6237\u540d",style:{marginBottom:"10px"},value:this.state.user,onChange:this.changeUser}),o.a.createElement(L.a,{placeholder:"\u5bc6\u7801",type:"password",value:this.state.password,onChange:this.changePassword})))}},{key:"componentDidMount",value:function(){var e=this;f.a.get("http://www.dell-lee.com/react/api/isLogin.json",{withCredentials:!0}).then(function(t){var a=t.data.data.login;e.setState({login:a})})}}]),t}(n.Component)),P=Object(r.g)(F),D=(a(239),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={login:!0,fetchFinish:!1},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.state.login?this.state.fetchFinish?o.a.createElement("div",{className:"vip"},"vip"):o.a.createElement("div",{className:"vip"},"\u3002\u3002\u3002\u3002\u3002\u3002\u3002"):o.a.createElement(r.a,{to:"/"})}},{key:"componentDidMount",value:function(){var e=this;f.a.get("http://www.dell-lee.com/react/api/isLogin.json",{withCredentials:!0}).then(function(t){var a=t.data.data.login;e.setState({login:a,fetchFinish:!0})})}}]),t}(n.Component)),U=(a(240),a(241),s.a.Header),x=s.a.Footer,_=s.a.Content;c.a.render(o.a.createElement(function(){return o.a.createElement(l.a,null,o.a.createElement(s.a,{style:{minWidth:1300}},o.a.createElement(U,{className:"header"},o.a.createElement(E,null)),o.a.createElement(_,{className:"content"},o.a.createElement(P,null),o.a.createElement(r.d,null,o.a.createElement(r.b,{path:"/vip",component:D}),o.a.createElement(r.b,{path:"/detail/:id",component:M}),o.a.createElement(r.b,{path:"/:id?",component:O}))),o.a.createElement(x,{className:"footer"},"Footer")))},null),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.6c1b627b.chunk.js.map