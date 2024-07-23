"use strict";(("undefined"!=typeof self?self:this).__LOADABLE_LOADED_CHUNKS__=("undefined"!=typeof self?self:this).__LOADABLE_LOADED_CHUNKS__||[]).push([[1790],{40933:function(e,t,n){var r=n(76514),o=(n(2784),n(45697)),i=n.n(o),a=n(49372),s=n(5109),u=n(52322),c=(0,r.Z)("h1",{target:"e1mhehm50"})(s.$C.MEDIUM,{marginBottom:a.N.LARGE},""),l=function(e){var t=e.children;return(0,u.jsx)(c,{children:t})};l.propTypes={children:i().string.isRequired},t.Z=l},11790:function(e,t,n){n.d(t,{Z:function(){return ye}});var r=n(90068),o=(n(96928),n(61229),n(58188),n(73439),n(34115),n(634),n(20796),n(15735),n(28673),n(6886),n(76514)),i=(n(35666),n(26936),n(2784)),a=n(45697),s=n.n(a),u=n(75007),c=n(7799),l=n(47741),h=n(77690),f=n(53122),p=n(66263),d=n(30001),g=n(26626),b=n(40933),m=n(4067),y=n(51534),v=n(72779),S=n.n(v),k=n(50535),_=n(66362),R=n(52322);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function x(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?Z(e):t}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(s,e);var t,n,r,o,i,a=j(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=a.call(this,e)).state={fbAuth:{},isLoading:!1,sdkError:!1},t.handleClick=t.handleClick.bind(Z(t)),t.handleAuth=t.handleAuth.bind(Z(t)),t.checkLoginStatus=t.checkLoginStatus.bind(Z(t)),t}return t=s,n=[{key:"componentDidMount",value:(o=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.ZP.loadFacebookSDK();case 3:this.checkLoginStatus(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.setState({sdkError:!0});case 9:return e.prev=9,this.setState({isLoading:!1}),e.finish(9);case 12:case"end":return e.stop()}}),e,this,[[0,6,9,12]])})),i=function(){var e=this,t=arguments;return new Promise((function(n,r){var i=o.apply(e,t);function a(e){x(i,n,r,a,s,"next",e)}function s(e){x(i,n,r,a,s,"throw",e)}a(void 0)}))},function(){return i.apply(this,arguments)})},{key:"checkLoginStatus",value:function(){var e=this;k.ZP.getFacebookAuthStatus((function(t){return e.setState({fbAuth:t})}))}},{key:"handleClick",value:function(){this.state.isLoading||(this.setState({isLoading:!0}),"connected"===this.state.fbAuth.status?this.props.onAuth("facebook",this.state.fbAuth.authResponse.accessToken):k.ZP.loginWithFacebook(this.handleAuth,this.props.isSignup))}},{key:"handleAuth",value:function(e){e&&"connected"===e.status?this.props.onAuth("facebook",e.authResponse.accessToken):(this.setState({isLoading:!1}),this.props.onError("facebook"))}},{key:"render",value:function(){if(this.state.sdkError)return null;var e=this.props.className,t=S()(e,"button--with-badge--social","button--with-badge--auth","button--with-badge--facebook--auth");return(0,R.jsx)(g.ZP,{name:"facebook-login",className:t,styleModifier:[g._Z.WITH_BADGE,g._Z.LITTLE],disabled:this.state.isLoading,onClick:this.handleClick,children:(0,R.jsx)(_.Z,{useBrandColor:!0})})}}],n&&w(t.prototype,n),r&&w(t,r),s}(i.Component);A.propTypes={className:s().string,onAuth:s().func.isRequired,onError:s().func.isRequired,isSignup:s().bool},A.defaultProps={isSignup:!1};var C=A,T=n(16573),N=n(82863),q=n(49372),B=(0,o.Z)("div",{target:"egggxyu0"})({display:"flex",gap:q.N.MEDIUM,justifyContent:"center",marginBottom:q.N.LARGE},"");function D(e){var t=e.onLoginWithSSOToken,n=e.onSSOError;return(0,R.jsxs)(B,{children:[(0,R.jsx)(y.Z,{onAuth:t,onError:n}),(0,R.jsx)(C,{onAuth:t,onError:n}),(0,R.jsx)(N.rg,{clientId:u.Z.GOOGLE_SDK_APP_ID,children:(0,R.jsx)(T.Z,{onAuth:t,onError:n})})]})}D.propTypes={onLoginWithSSOToken:s().func.isRequired,onSSOError:s().func.isRequired};var I=D,F=n(22730),U=n(15997),M=n(80934),W=n(48758),K=n(58123),G=n(5109),H=n(17394),z=n(39285),X=n(8805),Y=n(37757),$=n(46315);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function Q(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function V(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){Q(i,r,o,a,s,"next",e)}function s(e){Q(i,r,o,a,s,"throw",e)}a(void 0)}))}}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e,t){return te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},te(e,t)}function ne(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ie(e);if(t){var o=ie(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return re(this,n)}}function re(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?oe(e):t}function oe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ie(e){return ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ie(e)}var ae=(0,o.Z)(U.Z,{target:"e1hre6jw4"})(H.j.tabletPortraitUp({width:"360px",borderRadius:"5px"}),{".logo--icon":{marginBottom:q.N.LARGE},".field-block":{marginBottom:q.N.LARGE}},""),se=(0,o.Z)(g.ZP,{target:"e1hre6jw3"})({marginBottom:q.N.BASE4X},""),ue=(0,o.Z)("div",{target:"e1hre6jw2"})({marginBottom:q.N.LARGE,textAlign:"right"},""),ce=(0,o.Z)("p",{target:"e1hre6jw1"})(G.TK.SUPPORTING,{marginBottom:q.N.LARGE},""),le=(0,o.Z)("p",{target:"e1hre6jw0"})(G.TK.SUPPORTING,""),he=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(s,e);var t,n,r,o,i,a=ne(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=a.call(this,e)).handlePasswordCredentials=t.handlePasswordCredentials.bind(oe(t)),t.handleChange=t.handleChange.bind(oe(t)),t.handleSubmit=t.handleSubmit.bind(oe(t)),t.handleLoginWithSSOToken=t.handleLoginWithSSOToken.bind(oe(t)),t.handleLogin=t.handleLogin.bind(oe(t)),t}return t=s,n=[{key:"componentDidMount",value:function(){(0,this.props.usageTrackLoginEnter)();try{if(!(0,c.Z)().PasswordCredential)return;(0,c.Z)().navigator.credentials&&(0,c.Z)().navigator.credentials.get({password:!0,mediation:"optional"}).then(this.handlePasswordCredentials).catch(h.ZP.error)}catch(e){}}},{key:"handlePasswordCredentials",value:function(e){e&&this.props.authFormUpdate({username:e.name||e.id,password:e.password})}},{key:"handleLoginWithSSOToken",value:function(e,t){(0,this.props.connectWithSSO)(e,t).then((function(e){(0,c.Z)().location=e.data.redirectTo}))}},{key:"handleChange",value:function(e){var t,n,r;this.props.authFormUpdate((t={},n=e.target.name,r=e.target.value,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))}},{key:"handleLogin",value:(i=V(regeneratorRuntime.mark((function e(){var t,n,r,o,i,a,s,u,h,g,b,m,y,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.authForm,r=n.username,o=n.password,i=t.setErrorMessage,a=t.usageTrackLoginExit,s=t.populateAuthentication,u=t.login,h=t.redirectAfterAuth,g=t.onComplete,b=t.history,m=t.t,r&&o){e.next=3;break}return e.abrupt("return",i(m("forgot_password_error_message_invalid_credentials")));case 3:return e.next=5,u(r,o);case 5:if((y=e.sent)&&!y.error){e.next=11;break}return e.next=9,a(!1,d.K9.FLIPBOARD);case 9:return p.Z.trackLogin(!1,d.K9.FLIPBOARD),e.abrupt("return");case 11:return e.prev=11,e.next=14,a(!0,d.K9.FLIPBOARD);case 14:return p.Z.trackLogin(!0,d.K9.FLIPBOARD),e.next=17,s();case 17:h&&(v=(0,f.Do)("redirect_after_auth"),b.push(v||"/")),g&&g(),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(11),p.Z.trackLogin(!1,d.K9.FLIPBOARD),l.Z.captureException(e.t0),(0,c.Z)().location="/";case 26:case"end":return e.stop()}}),e,this,[[11,21]])}))),function(){return i.apply(this,arguments)})},{key:"handleSubmit",value:(o=V(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.props.validateReCaptcha,e.next=4,n("login",this.handleLogin);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.className,n=e.setSSOError,r=e.ReCaptchaUI,o=e.isReCaptchaPending,i=e.authForm,a=i.username,s=i.password,c=i.isLoading,l=i.errorMessage,h=e.onRequestLoginLink,f=e.t,p=a&&s&&!c&&!o;return(0,R.jsxs)(ae,{className:t,children:[(0,R.jsx)(W.Z,{size:40}),(0,R.jsx)(b.Z,{children:f("log_in_to_flipboard")}),(0,R.jsx)(I,{onLoginWithSSOToken:this.handleLoginWithSSOToken,onSSOError:n}),(0,R.jsx)(se,{name:"login__get-login-button",className:"button--secondary",href:"/request-login-link",onClick:h,children:f("get_log_in_link")}),(0,R.jsx)(ce,{children:f("or_with_email")}),(0,R.jsxs)("form",{onSubmit:this.handleSubmit,children:[(0,R.jsx)("div",{className:"field-block",children:(0,R.jsx)(m.Z,{type:"text",name:"username",placeholder:f("username_or_email"),value:a,onChange:this.handleChange,disabled:c})}),(0,R.jsx)("div",{className:"field-block",children:(0,R.jsx)(m.Z,{name:"password",type:"password",placeholder:f("password"),value:s,onChange:this.handleChange,disabled:c})}),(0,R.jsx)(ue,{children:(0,R.jsx)(K.Z,{name:"login__forgot-password",className:"ui-text--supporting",href:"".concat(u.Z.FLIPBOARD_ACCOUNTS_URL,"/accounts/forgotPassword"),children:f("forgot_your_password")})}),r,(0,R.jsx)(g.ZP,{name:"login__form-submit",className:"button--primary button--block",disabled:!p,type:"submit",loading:c,children:f("log_in")}),(0,R.jsx)(M.Z,{children:l})]}),(0,R.jsxs)(le,{children:[f("new_to_flipboard")," ",(0,R.jsx)(K.Z,{name:"login__sign-up-link",href:"/signup",children:f("sign_up")})]}),(0,R.jsx)(F.Z,{})]})}}],n&&ee(t.prototype,n),r&&ee(t,r),s}(i.Component);he.propTypes={className:s().string,authFormUpdate:s().func.isRequired,usageTrackLoginEnter:s().func.isRequired,usageTrackLoginExit:s().func.isRequired,validateReCaptcha:s().func.isRequired,login:s().func.isRequired,setErrorMessage:s().func.isRequired,setSSOError:s().func.isRequired,t:s().func.isRequired,connectWithSSO:s().func.isRequired,onComplete:s().func,redirectAfterAuth:s().bool,populateAuthentication:s().func.isRequired,onRequestLoginLink:s().func,isReCaptchaPending:s().bool.isRequired,ReCaptchaUI:s().node,history:s().shape({push:s().func}),authForm:s().shape({username:s().string.isRequired,password:s().string.isRequired,errorMessage:s().string,isLoading:s().bool.isRequired})},he.defaultProps={};var fe=(0,r.Z)(z.Z)((0,$.Z)((0,X.Z)((0,Y.Z)(he)))),pe=n(41626),de=n(21681),ge=n(45338),be=n(18529),me=n(83981),ye=(0,r.Z)({selectors:{authForm:me.S9,logoSize:function(e){return(0,be.Mn)(e)?40:80}},actions:{authFormUpdate:ge.p1,connectWithSSO:ge.vI,populateAuthentication:ge.HK,setIsChromeless:pe.W5,usageTrackLoginEnter:de.U3,usageTrackLoginExit:de.RL,setSSOError:ge.iY,setErrorMessage:ge.uH,login:ge.x4}})(fe)}}]);
//# sourceMappingURL=1790.046141316a277ea3a960.bundle.js.map