(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[4],{101:function(e,t,n){"use strict";var a=n(6),i=(n(1),n(102)),u=n.n(i),s=n(0);t.a=function(e){var t=null,n=[u.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(u.a.Invalid),e.elementType){case"email":t=Object(s.jsx)("input",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":t=Object(s.jsx)("textarea",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(s.jsx)("select",{className:n.join(" "),value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(s.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:t=Object(s.jsx)("input",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(s.jsxs)("div",{className:u.a.Input,children:[Object(s.jsx)("label",{className:u.a.Label,children:e.label}),t]})}},102:function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},106:function(e,t,n){e.exports={Auth:"Auth_Auth__1Zul_"}},107:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(24),u=n(7),s=n(8),r=n(10),l=n(9),c=n(1),o=n(16),h=n(17),d=n(34),p=n(106),b=n.n(p),g=n(101),j=n(33),v=n(4),f=n(5),m=n(0),O=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={controls:{email:{elementType:"input",elementConfig:{type:"text",placeholder:"E-Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"PAssword"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},e.inputChangedHandler=function(t,n){var a=Object(f.b)(e.state.controls,Object(i.a)({},n,Object(f.b)(e.state.controls[n],{value:t.target.value,valid:Object(f.a)(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:a})},e.submitHandler=function(t){console.log("[Auth, submitHandler]"),t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignup)},e.switchAuthMode=function(){console.log("[Auth, switchAuthMode]"),e.setState((function(e){return Object(a.a)(Object(a.a)({},e),{},{isSignup:!e.isSignup})}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){!this.props.buildingBurger&&this.props.authRedirectPath&&this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(n){return Object(m.jsx)(g.a,{elementType:n.config.elementType,elementConfig:n.config.elementConfig,value:n.config.value,invalid:!n.config.valid,shouldValidate:n.config.validation,touched:n.config.touched,changed:function(t){return e.inputChangedHandler(t,n.id)}},t.id)}));this.props.loading&&(a=Object(m.jsx)(d.a,{}));var i=null;this.props.error&&(i=Object(m.jsx)("p",{children:this.props.error.message}));var u=null;return this.props.isAuth&&(u=Object(m.jsx)(v.a,{to:this.props.authRedirectPath})),Object(m.jsxs)("div",{className:b.a.Auth,children:[u,Object(m.jsx)("h1",{children:this.state.isSignup?"Register":"Sign In"}),i,Object(m.jsxs)("form",{onSubmit:this.submitHandler,children:[a,Object(m.jsx)(j.a,{btnType:"Success",children:"Submit"})]}),Object(m.jsxs)(j.a,{btnType:"Danger",clicked:this.switchAuthMode,children:["SWITCH TO ",this.state.isSignup?"Sign In":"Register"]})]})}}]),n}(c.Component);t.default=Object(o.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuth:!!e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,a){return e(h.b(t,n,a))},onSetAuthRedirectPath:function(){return e(h.j("/"))}}}))(O)}}]);
//# sourceMappingURL=4.79b8268d.chunk.js.map