(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[3],{101:function(e,t,a){"use strict";var n=a(6),r=(a(1),a(102)),i=a.n(r),c=a(0);t.a=function(e){var t=null,a=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(i.a.Invalid),e.elementType){case"email":t=Object(c.jsx)("input",Object(n.a)(Object(n.a)({className:a.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":t=Object(c.jsx)("textarea",Object(n.a)(Object(n.a)({className:a.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(c.jsx)("select",{className:a.join(" "),value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(c.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:t=Object(c.jsx)("input",Object(n.a)(Object(n.a)({className:a.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(c.jsxs)("div",{className:i.a.Input,children:[Object(c.jsx)("label",{className:i.a.Label,children:e.label}),t]})}},102:function(e,t,a){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},103:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},104:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__20AK_"}},109:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),i=a(10),c=a(9),o=a(1),l=a(4),u=a(53),s=a(33),d=a(103),p=a.n(d),h=a(0),j=function(e){return Object(h.jsxs)("div",{className:p.a.CheckoutSummary,children:[Object(h.jsx)("h1",{children:"We hope it tastes good!"}),Object(h.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(h.jsx)(u.a,{ingredients:e.ingredients})}),Object(h.jsx)(s.a,{btnType:"Danger",clicked:e.checkoutCancelled,children:"CANCEL"}),Object(h.jsx)(s.a,{btnType:"Success",clicked:e.checkoutContinued,children:"CONTINUE"})]})},v=a(24),b=a(104),m=a.n(b),g=a(19),f=a(34),O=a(101),C=a(16),y=a(43),x=a(17),k=a(5),I=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Full Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Address"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"email",elementConfig:{type:"text",placeholder:"Email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var a={};for(var n in e.state.orderForm)a[n]=e.state.orderForm[n].value;var r={ingredients:e.props.ings,price:e.props.price,orderData:a,userId:e.props.userId};e.props.onOrderBurger(r,e.props.token)},e.inputChangedHandler=function(t,a){var n=Object(k.b)(e.state.orderForm[a],{value:t.target.value,valid:Object(k.a)(t.target.value,e.state.orderForm[a].validation),touched:!0}),r=Object(k.b)(e.state.orderForm,Object(v.a)({},a,n)),i=!0;for(var c in r)i=r[c].valid&&i;e.setState({orderForm:r,formIsValid:i})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=Object(h.jsxs)("form",{onSubmit:this.orderHandler,children:[t.map((function(t){return Object(h.jsx)(O.a,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}},t.id)})),Object(h.jsx)(s.a,{btnType:"Success",disabled:!this.state.formIsValid,children:"ORDER"})]});return this.props.loading&&(n=Object(h.jsx)(f.a,{})),Object(h.jsxs)("div",{className:m.a.ContactData,children:[Object(h.jsx)("h4",{children:" Enter your contact data"}),n]})}}]),a}(o.Component),_=Object(C.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,a){return e(x.g(t,a))}}}))(Object(y.a)(I,g.a)),T=(a(27),function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(r.a)(a,[{key:"render",value:function(){var e=Object(h.jsx)(l.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?Object(h.jsx)(l.a,{to:"/"}):null;e=Object(h.jsxs)("div",{children:[t,Object(h.jsx)(j,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),Object(h.jsx)(l.b,{path:this.props.match.path+"/contact-data",component:_})]})}return Object(h.jsx)(h.Fragment,{children:e})}}]),a}(o.Component));t.default=Object(C.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(T)}}]);
//# sourceMappingURL=3.0de5643e.chunk.js.map