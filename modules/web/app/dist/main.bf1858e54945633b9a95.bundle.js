!function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],f=0,p=[];f<c.length;f++)i=c[f],a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;o.push([268,1]),n()}({268:function(e,t,n){e.exports=n(463)},463:function(e,t,n){"use strict";n.r(t);var r,a=n(27),o=n(0),i=n(26),c=n(33),u=n(465),l=n(468),s=n(467),f=n(3),p=n(23),d=n.n(p),b=n(24),m=n.n(b),h=n(25),y=n.n(h),v=n(19),g=n.n(v),w=n(191),O=n.n(w);!function(e){e.DISPLAY="NOTIFICATION_DISPLAY",e.DISMISS="NOTIFICATION_DISMISS"}(r||(r={}));var E,j=function(){return(j=g.a||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};!function(e){e.SUCCESS="SUCCESS",e.ERROR="ERROR"}(E||(E={}));var S,x=function(){return(x=g.a||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},I=function(e,t,n,r){return new(n||(n=y.a))(function(a,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function c(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}u((r=r.apply(e,t||[])).next())})},k=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof m.a&&(o[d.a]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},T=function(e){var t=e.target,n=e.message,r=e.secured;return Object(f.b)(A(),L(),Object(f.g)("form","setForm",function(){return{pending:!1,success:!1}}),Object(f.f)({submit:function(e){var a=e.setForm,o=e.displayNotification,i=e.dismissNotification,c=e.session;return function(e){return I(void 0,void 0,void 0,function(){var u,l,s;return k(this,function(f){switch(f.label){case 0:u="/"+window.env.API_BASE_PATH+"/"+(t||location.pathname).replace(/^\//,""),a({pending:!0,success:!1}),f.label=1;case 1:return f.trys.push([1,3,,4]),i(),[4,O.a.post(u,e||{},{withCredentials:!0,headers:x({"Content-Type":"application/json"},r&&c?{Authorization:"Bearer "+c.access.token}:{})})];case 2:return s=f.sent().data,a({pending:!1,success:!0,response:s}),n&&o({type:E.SUCCESS,message:n}),[3,4];case 3:return l=f.sent(),(s=l.response)&&o({type:E.ERROR,message:s.data.message}),a({pending:!1,success:!1,err:l}),[3,4];case 4:return[2]}})})}}}))},C=n(28),N=n.n(C),P=n(59),R=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof N.a){var a=0;for(r=N()(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},M=function(e){var t=e.initial,n=R(e,["initial"]);return Object(f.b)(T(n),Object(f.g)("request","setRequest",t),Object(f.f)({handleChange:function(e){var t=e.request,n=e.setRequest;return function(e){var r=e.currentTarget,a=r.type,o=r.name,i=r.value,c=r.checked;n("checkbox"===a?Object(P.b)(Object(P.a)(o),c,t):Object(P.b)(Object(P.a)(o),i,t))}},handleSubmit:function(e){var t=e.submit,n=e.request;return function(e){return e.preventDefault(),t(n)}}}))},A=function(){return Object(c.b)(function(e){return{notification:e.notification}},function(e){return{displayNotification:function(t){return e(function(e){return{type:r.DISPLAY,data:e}}(t))},dismissNotification:function(){return e({type:r.DISMISS})}}})};!function(e){e.SET="REMEMBER_ME_SET",e.FAILED="REMEMBER_ME_FAILED"}(S||(S={}));var _=function(){return(_=g.a||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var q,D=function(){return Object(c.b)(function(e){return{remember:e.remember}},function(e){return{setRememberMe:function(t){return e(function(e){return{type:S.SET,active:e}}(t))},failedRememberMe:function(t){return e(function(e){return{type:S.FAILED,failed:e}}(t))}}})};!function(e){e.INIT="SESSION_INIT",e.TERMINATE="SESSION_TERMINATE"}(q||(q={}));var L=function(){return Object(c.b)(function(e){return{session:e.session}},function(e){return{initSession:function(t){return e(function(e){return{type:q.INIT,session:e}}(t))},terminateSession:function(){return e({type:q.TERMINATE})}}})},G=n(4),W=function(e,t,n,r){return new(n||(n=y.a))(function(a,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function c(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}u((r=r.apply(e,t||[])).next())})},Y=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof m.a&&(o[d.a]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},F=Object(f.b)(L(),Object(f.c)({componentWillMount:function(){return W(this,void 0,void 0,function(){var e,t,n,r,a;return Y(this,function(o){return e=this.props,t=e.form,n=e.remember,r=e.initSession,a=e.failedRememberMe,r(t.response),n.active&&a(!1),[2]})})}}),f.d)(function(e){var t=e.session;return o.createElement(be,{href:"//"+window.env.APP_ORIGIN+"#"+t.id.token})}),B=function(){return(B=g.a||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},U=function(e,t,n,r){return new(n||(n=y.a))(function(a,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function c(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}u((r=r.apply(e,t||[])).next())})},J=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof m.a&&(o[d.a]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},z=Object(f.b)(Object(a.withStyles)(function(e){var t=e.palette,n=e.spacing;return Object(a.createStyles)({controls:{display:"flex",alignItems:"center"},forgotPassword:{flex:1,textAlign:"right"},register:{color:t.text.hint,marginTop:2*n.unit,textAlign:"center"}})}),M({target:"/authenticate",initial:{username:"",password:"",remember:!1}}),Object(f.c)({componentWillMount:function(){return U(this,void 0,void 0,function(){var e,t,n;return J(this,function(r){return e=this.props,t=e.remember,n=e.request,(0,e.setRequest)(B({},n,{remember:t.active})),[2]})})}}),Object(f.a)(function(e){return e.form.success},Object(f.e)(F)),f.d)(function(e){var t=e.classes,n=e.form,r=e.request,a=e.handleChange,i=e.handleSubmit;return o.createElement(de,null,o.createElement(Ce,{primary:window.env.COGNITO_IDENTITY_POOL_NAME,secondary:"Sign in to your account"}),o.createElement(Ne,null),o.createElement(ye,{onSubmit:i},o.createElement(Ee,{name:"username",label:"Email address",required:!0,value:r.username,InputProps:{readOnly:n.pending},onChange:a,autoComplete:"username"}),o.createElement(ke,{name:"password",label:"Password",required:!0,value:r.password,InputProps:{readOnly:n.pending},onChange:a,autoComplete:"password"}),o.createElement(G.h,{row:!0,className:t.controls},o.createElement(G.g,{label:"Remember me",control:o.createElement(Te,{name:"remember",checked:r.remember,onChange:a})}),o.createElement(G.p,{className:t.forgotPassword},o.createElement(Re,{to:"/reset",tabIndex:-1},"Forgot password?"))),o.createElement(we,{disabled:n.pending},"Sign in"),o.createElement(G.p,{className:t.register},"Don't have an account? ",o.createElement(Re,{to:"/register"},"Register"))))}),H=function(e,t,n,r){return new(n||(n=y.a))(function(a,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function c(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}u((r=r.apply(e,t||[])).next())})},V=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof m.a&&(o[d.a]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},K=Object(f.b)(T({target:"/authenticate"}),Object(f.c)({componentDidMount:function(){return H(this,void 0,void 0,function(){var e,t,n,r,a;return V(this,function(o){switch(o.label){case 0:return e=this.props,t=e.form,n=e.submit,r=e.dismissNotification,a=e.failedRememberMe,[4,n()];case 1:return o.sent(),r(),t.success||a(!0),[2]}})})}}),Object(f.a)(function(e){return e.form.success},Object(f.e)(F)),f.d)(function(){return o.createElement(G.c,null)}),Q=z,X=Object(f.b)(D(),Object(f.a)(function(e){var t=e.remember,n=t.active,r=t.failed;return n&&!r},Object(f.e)(K)),f.d)(Q),Z=n(466),$=function(){return o.createElement(Z.a,{to:"/"})},ee=Object(f.b)(Object(a.withStyles)(function(e){var t=e.palette,n=e.spacing;return Object(a.createStyles)({authenticate:{color:t.text.hint,marginTop:2*n.unit,textAlign:"center"},button:{borderRadius:2,fontSmoothing:"antialiased",marginTop:4*n.unit}})}),M({message:"We just sent a verification link to your email address. Please click on the link to complete your registration",initial:{email:"",password:""}}),f.d)(function(e){var t=e.classes,n=e.form,r=e.request,a=e.handleChange,i=e.handleSubmit;return o.createElement(de,null,o.createElement(Ce,{primary:window.env.COGNITO_IDENTITY_POOL_NAME,secondary:"Register for a new account"}),o.createElement(Ne,null),o.createElement(ye,{onSubmit:i},o.createElement(Ee,{name:"email",label:"Email address",required:!0,disabled:n.success,value:r.email,InputProps:{readOnly:n.pending},onChange:a,autoComplete:"email"}),o.createElement(ke,{name:"password",label:"Password",required:!0,disabled:n.success,value:r.password,InputProps:{readOnly:n.pending},onChange:a,autoComplete:"new-password"}),o.createElement(we,{className:t.button,disabled:n.pending||n.success},"Register"),o.createElement(G.p,{className:t.authenticate},"Already have an account? ",o.createElement(Re,{to:"/"},"Sign in"))))}),te=function(){return o.createElement(Z.a,{to:"/"})},ne=Object(f.b)(T({message:"You have successfully verified your email address. Use your email address and password to sign in to your account"}),Object(f.c)({componentDidMount:function(){return(0,this.props.submit)()}}),Object(f.a)(function(e){var t=e.form;return t.success||!!t.err},Object(f.e)(te)),f.d)(function(){return o.createElement(G.c,null)}),re=Object(f.b)(Object(a.withStyles)(function(e){var t=e.palette,n=e.spacing;return Object(a.createStyles)({authenticate:{color:t.text.hint,marginTop:2*n.unit,textAlign:"center"},button:{borderRadius:2,fontSmoothing:"antialiased",marginTop:4*n.unit}})}),M({message:"We just sent a verification link to your email address. Please click on the link to reset your password",initial:{username:""}}),f.d)(function(e){var t=e.classes,n=e.form,r=e.request,a=e.handleChange,i=e.handleSubmit;return o.createElement(de,null,o.createElement(Ce,{primary:window.env.COGNITO_IDENTITY_POOL_NAME,secondary:"Unlock your account"}),o.createElement(Ne,null),o.createElement(ye,{onSubmit:i},o.createElement(G.p,null,"Enter your email address in the field below to reset your password. We will send you a verification link to complete the process."),o.createElement(Ee,{name:"username",label:"Email address",required:!0,disabled:n.success,value:r.username,InputProps:{readOnly:n.pending},onChange:a,autoComplete:"email"}),o.createElement(we,{className:t.button,disabled:n.pending||n.success},"Reset password"),o.createElement(G.p,{className:t.authenticate},"Remembered your password? ",o.createElement(Re,{to:"/"},"Sign in"))))}),ae=function(){return o.createElement(Z.a,{to:"/"})},oe=Object(f.b)(Object(a.withStyles)(function(e){var t=e.palette,n=e.spacing;return Object(a.createStyles)({authenticate:{color:t.text.hint,marginTop:2*n.unit,textAlign:"center"},button:{borderRadius:2,fontSmoothing:"antialiased",marginTop:4*n.unit}})}),M({message:"You have successfully changed your password. Use your email address and new password to sign in to your account",initial:{password:""}}),Object(f.a)(function(e){return e.form.success},Object(f.e)(ae)),f.d)(function(e){var t=e.classes,n=e.form,r=e.request,a=e.handleChange,i=e.handleSubmit;return o.createElement(de,null,o.createElement(Ce,{primary:window.env.COGNITO_IDENTITY_POOL_NAME,secondary:"Unlock your account"}),o.createElement(Ne,null),o.createElement(ye,{onSubmit:i},o.createElement(ke,{name:"password",label:"New password",required:!0,disabled:n.success,value:r.password,InputProps:{readOnly:n.pending},onChange:a,autoComplete:"new-password"}),o.createElement(we,{className:t.button,disabled:n.pending||n.success},"Reset password"),o.createElement(G.p,{className:t.authenticate},"Remembered your password? ",o.createElement(Re,{to:"/"},"Sign in"))))}),ie=function(e,t,n,r){return new(n||(n=y.a))(function(a,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function c(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}u((r=r.apply(e,t||[])).next())})},ce=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof m.a&&(o[d.a]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},ue=Object(f.b)(Object(f.c)({componentWillMount:function(){return ie(this,void 0,void 0,function(){var e,t,n;return ce(this,function(r){return e=this.props,t=e.form,n=e.dismissNotification,t.err&&n(),[2]})})}}),f.d)(function(){return o.createElement(Z.a,{to:"/"})}),le=function(e,t,n,r){return new(n||(n=y.a))(function(a,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function c(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}u((r=r.apply(e,t||[])).next())})},se=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof m.a&&(o[d.a]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},fe=Object(f.b)(T({message:"You signed out of your account",secured:!0}),Object(f.c)({componentDidMount:function(){return le(this,void 0,void 0,function(){return se(this,function(e){switch(e.label){case 0:return[4,(0,this.props.submit)()];case 1:return e.sent(),[2]}})})}}),Object(f.a)(function(e){var t=e.form;return t.success||!!t.err},Object(f.e)(ue)),f.d)(function(){return o.createElement(G.c,null)}),pe=Object(f.b)(Object(a.withStyles)(function(e){var t,n=e.palette,r=e.breakpoints;return Object(a.createStyles)({root:(t={display:"flex",height:"100%",alignItems:"center",justifyContent:"center",backgroundColor:n.background.default},t[r.down("xs")]={alignItems:"initial",backgroundColor:n.common.white},t)})}))(function(e){var t=e.classes;return o.createElement("div",{className:t.root},o.createElement(l.a,null,o.createElement(s.a,{exact:!0,path:"/",component:X}),o.createElement(s.a,{exact:!0,path:"/register",component:ee}),o.createElement(s.a,{path:"/register/:code+",component:ne}),o.createElement(s.a,{exact:!0,path:"/reset",component:re}),o.createElement(s.a,{path:"/reset/:code+",component:oe}),o.createElement(s.a,{path:"/user/leave",component:fe}),o.createElement(s.a,{component:$})))}),de=Object(f.b)(Object(a.withStyles)(function(e){var t,n=e.breakpoints;return Object(a.createStyles)({root:(t={width:340,borderRadius:2,overflow:"hidden"},t[n.down("xs")]={width:"100%",borderRadius:0},t)})}),f.d)(function(e){var t=e.classes,n=e.children;return o.createElement(G.n,{elevation:1,className:t.root},n)}),be=Object(f.b)(Object(f.c)({componentWillMount:function(){var e=this.props.href;window.location.href=e}}),f.d)(function(){return null}),me=function(){return(me=g.a||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},he=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof N.a){var a=0;for(r=N()(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},ye=Object(f.b)(Object(a.withStyles)(function(e){var t=e.spacing;return Object(a.createStyles)({root:{padding:4*t.unit}})}),f.d)(function(e){var t=e.classes,n=e.children,r=he(e,["classes","children"]);return o.createElement("form",me({method:"post",className:t.root},r),n)}),ve=function(){return(ve=g.a||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},ge=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof N.a){var a=0;for(r=N()(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},we=Object(f.b)(Object(a.withStyles)(function(e){var t=e.spacing;return Object(a.createStyles)({root:{borderRadius:2,fontSmoothing:"antialiased",marginTop:2*t.unit}})}),f.d)(function(e){var t=e.classes,n=ge(e,["classes"]);return o.createElement(G.a,ve({type:"submit",variant:"contained",color:"primary",fullWidth:!0,className:t.root},n))}),Oe=function(){return(Oe=g.a||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},Ee=function(e){return o.createElement(G.o,Oe({type:"text",margin:"dense",fullWidth:!0,autoCapitalize:"false",autoCorrect:"false",InputLabelProps:{required:!1}},e))},je=n(194),Se=n.n(je),xe=n(193),Ie=n.n(xe),ke=Object(f.b)(Object(a.withStyles)(function(e){return Object(a.createStyles)({adornment:{maxHeight:"1.6em"}})}),Object(f.g)("visibility","setVisibility",function(){return!1}),Object(f.f)({handleClick:function(e){var t=e.visibility,n=e.setVisibility;return function(){n(!t)}},handleMouseDown:function(){return function(e){e.preventDefault()}}}),f.d)(function(e){var t=e.classes,n=e.name,r=e.label,a=e.required,i=e.InputProps,c=e.value,u=e.onChange,l=e.autoComplete,s=e.disabled,f=e.error,p=e.helperText,d=e.visibility,b=e.handleClick,m=e.handleMouseDown;return o.createElement(G.f,{margin:"dense",fullWidth:!0,error:f},o.createElement(G.m,{htmlFor:n,required:!1},r),o.createElement(G.k,{id:n,name:n,type:d?"text":"password",required:a,readOnly:!!i&&i.readOnly,value:c,onChange:u,autoComplete:l,disabled:s,endAdornment:o.createElement(G.l,{position:"end",className:t.adornment},o.createElement(G.j,{"aria-label":"Toggle password visibility",onClick:b,onMouseDown:m,tabIndex:-1},d?o.createElement(Ie.a,null):o.createElement(Se.a,null)))}),p&&o.createElement(G.i,null,p))}),Te=Object(f.b)(D(),Object(f.f)({handleChange:function(e){var t=e.onChange,n=e.setRememberMe;return function(e,r){t&&(t(e,r),n(r))}}}),f.d)(function(e){var t=e.name,n=e.checked,r=e.handleChange;return o.createElement(G.b,{name:t,checked:n,onChange:r})}),Ce=Object(f.b)(Object(a.withStyles)(function(e){var t=e.palette,n=e.spacing;return Object(a.createStyles)({root:{background:G.q.blueGrey[900],padding:4*n.unit},text:{color:t.common.white,fontSmoothing:"antialiased"}})}),f.d)(function(e){var t=e.classes,n=e.primary,r=e.secondary;return o.createElement("div",{className:t.root},o.createElement(G.p,{variant:"headline",className:t.text},n),o.createElement(G.p,{className:t.text},r))}),Ne=Object(f.b)(Object(a.withStyles)(function(e){var t=e.palette,n=e.spacing;return Object(a.createStyles)({root:{color:t.common.white,fontSmoothing:"antialiased",fontWeight:700,paddingTop:2*n.unit,paddingRight:4*n.unit,paddingBottom:2*n.unit,paddingLeft:4*n.unit,transition:"background-color .25s"},success:{backgroundColor:G.q.green.A700},error:{backgroundColor:t.error.main}})}),A(),f.d)(function(e){var t=e.classes,n=e.notification,r=n.data,a=n.show;return o.createElement(G.d,{in:a},r&&o.createElement(G.e,{in:a},o.createElement(G.p,{className:t.root+" "+t[r.type.toLowerCase()]},r.message)))}),Pe=n(464),Re=Object(f.b)(Object(a.withStyles)(function(e){var t=e.palette;return Object(a.createStyles)({root:{color:t.primary.main,outline:0,textDecoration:"none",transition:"color .125s","&:hover":{color:t.secondary.main}}})}),A(),Object(f.f)({handleClick:function(e){return e.dismissNotification}}),f.d)(function(e){var t=e.classes,n=e.children,r=e.handleClick,a=e.to,i=e.tabIndex;return o.createElement(Pe.a,{className:t.root,onClickCapture:r,to:a,tabIndex:i},n)}),Me=n(195),Ae=n.n(Me),_e=n(58);var qe=Object(_e.b)({notification:function(e,t){switch(void 0===e&&(e={show:!1}),t.type){case r.DISPLAY:return{data:t.data,show:!0};case r.DISMISS:return j({},e,{show:!1});default:return e}},remember:function(e,t){switch(void 0===e&&(e={active:!1,failed:!0}),t.type){case S.SET:return _({},e,{active:t.active});case S.FAILED:return _({},e,{failed:t.failed});default:return e}},session:function(e,t){switch(void 0===e&&(e=null),t.type){case q.INIT:var n=t.session;return{id:n.id,access:n.access};case q.TERMINATE:return null;default:return e}}}),De=Object(_e.c)(qe,JSON.parse(localStorage.getItem("state")||"{}"));De.subscribe(function(){return function(e){localStorage.setItem("state",Ae()({remember:e.remember,session:e.session}))}(De.getState())});var Le=Object(a.createMuiTheme)({palette:{primary:G.q.indigo,secondary:G.q.lightBlue,error:{main:G.q.red.A200}}});Object(i.render)(o.createElement(c.a,{store:De},o.createElement(a.MuiThemeProvider,{theme:Le},o.createElement(u.a,null,o.createElement(pe,null)))),document.getElementById("root"))}});
//# sourceMappingURL=main.bf1858e54945633b9a95.bundle.js.map