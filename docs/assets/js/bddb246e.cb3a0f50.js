"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[94954],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),g=i,d=p["".concat(a,".").concat(g)]||p[g]||f[g]||o;return t?r.createElement(d,c(c({ref:n},u),{},{components:t})):r.createElement(d,c({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=p;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},60161:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return a},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return f}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),c=["components"],s={sidebar_position:64,sidebar_label:"Machine Learning"},a="Machine Learning Functions",l={unversionedId:"en/sql-reference/functions/machine-learning-functions",id:"en/sql-reference/functions/machine-learning-functions",title:"Machine Learning Functions",description:"machine-learning-functions}",source:"@site/docs/en/sql-reference/functions/machine-learning-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/machine-learning-functions",permalink:"/en/sql-reference/functions/machine-learning-functions",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/sql-reference/functions/machine-learning-functions.md",tags:[],version:"current",sidebarPosition:64,frontMatter:{sidebar_position:64,sidebar_label:"Machine Learning"},sidebar:"english",previous:{title:"Nullable",permalink:"/en/sql-reference/functions/functions-for-nulls"},next:{title:"Introspection",permalink:"/en/sql-reference/functions/introspection"}},u={},f=[{value:"evalMLMethod",id:"machine_learning_methods-evalmlmethod",level:2},{value:"stochasticLinearRegression",id:"stochastic-linear-regression",level:2},{value:"stochasticLogisticRegression",id:"stochastic-logistic-regression",level:2}],p={toc:f};function g(e){var n=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"machine-learning-functions"},"Machine Learning Functions"),(0,o.kt)("h2",{id:"machine_learning_methods-evalmlmethod"},"evalMLMethod"),(0,o.kt)("p",null,"Prediction using fitted regression models uses ",(0,o.kt)("inlineCode",{parentName:"p"},"evalMLMethod")," function. See link in ",(0,o.kt)("inlineCode",{parentName:"p"},"linearRegression"),"."),(0,o.kt)("h2",{id:"stochastic-linear-regression"},"stochasticLinearRegression"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/stochasticlinearregression#agg_functions-stochasticlinearregression"},"stochasticLinearRegression")," aggregate function implements stochastic gradient descent method using linear model and MSE loss function. Uses ",(0,o.kt)("inlineCode",{parentName:"p"},"evalMLMethod")," to predict on new data."),(0,o.kt)("h2",{id:"stochastic-logistic-regression"},"stochasticLogisticRegression"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/stochasticlogisticregression#agg_functions-stochasticlogisticregression"},"stochasticLogisticRegression")," aggregate function implements stochastic gradient descent method for binary classification problem. Uses ",(0,o.kt)("inlineCode",{parentName:"p"},"evalMLMethod")," to predict on new data."))}g.isMDXComponent=!0}}]);