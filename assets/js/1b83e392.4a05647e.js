"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[27405],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=l(r),f=a,m=g["".concat(c,".").concat(f)]||g[f]||p[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},80265:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={sidebar_position:222},c="stochasticLogisticRegression",l={unversionedId:"ru/sql-reference/aggregate-functions/reference/stochasticlogisticregression",id:"ru/sql-reference/aggregate-functions/reference/stochasticlogisticregression",title:"stochasticLogisticRegression",description:"agg_functions-stochasticlogisticregression}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/stochasticlogisticregression.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/stochasticlogisticregression",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/stochasticlogisticregression",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/stochasticlogisticregression.md",tags:[],version:"current",sidebarPosition:222,frontMatter:{sidebar_position:222},sidebar:"russia",previous:{title:"stochasticLinearRegression",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/stochasticlinearregression"},next:{title:"categoricalInformationValue",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue"}},u={},p=[{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"agg_functions-stochasticlogisticregression-parameters",level:3}],g={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"agg_functions-stochasticlogisticregression"},"stochasticLogisticRegression"),(0,i.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u0441\u0442\u043e\u0445\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u043b\u043e\u0433\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044e. \u0415\u0451 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0439 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0442\u0435 \u0436\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b, \u0447\u0442\u043e \u0438 stochasticLinearRegression \u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u0430\u043a\u0438\u043c \u0436\u0435 \u043e\u0431\u0440\u0430\u0437\u043e\u043c."),(0,i.kt)("h3",{id:"agg_functions-stochasticlogisticregression-parameters"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,i.kt)("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0442\u0435 \u0436\u0435, \u0447\u0442\u043e \u0438 \u0432 stochasticLinearRegression:\n",(0,i.kt)("inlineCode",{parentName:"p"},"learning rate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"l2 regularization coefficient"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mini-batch size"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"method for updating weights"),".\n\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043b ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/aggregate-functions/reference/stochasticlinearregression#agg_functions-stochasticlinearregression-parameters"},"parameters"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"stochasticLogisticRegression(1.0, 1.0, 10, 'SGD')\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438")),(0,i.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043b ",(0,i.kt)("inlineCode",{parentName:"p"},"\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438")," \u0432 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/aggregate-functions/reference/stochasticlinearregression#stochasticlinearregression-usage-fitting"},"stochasticLinearRegression")," ."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u0435\u043c\u044b\u0435 \u043c\u0435\u0442\u043a\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 \\[-1, 1\\].\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435")),(0,i.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435, \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u043b\u0438\u0447\u0438\u044f \u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043c\u0435\u0442\u043a\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"``` sql\nWITH (SELECT state FROM your_model) AS model SELECT\nevalMLMethod(model, param1, param2) FROM test_data\n```\n")),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0435\u0439. \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0435\u0440\u0432\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"evalMLMethod")," \u044d\u0442\u043e \u043e\u0431\u044a\u0435\u043a\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunctionState"),", \u0434\u0430\u043b\u0435\u0435 \u0438\u0434\u0443\u0442 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0441\u0432\u043e\u0439\u0441\u0442\u0432."),(0,i.kt)("p",null,"\u041c\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0433\u0440\u0430\u043d\u0438\u0446\u0443 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043c\u0435\u0442\u043a\u0438."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"``` sql\nSELECT ans < 1.1 AND ans > 0.5 FROM\n(WITH (SELECT state FROM your_model) AS model SELECT\nevalMLMethod(model, param1, param2) AS ans FROM test_data)\n```\n")),(0,i.kt)("p",null,"\u0422\u043e\u0433\u0434\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u0431\u0443\u0434\u0443\u0442 \u043c\u0435\u0442\u043a\u0438."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"test_data")," \u2014 \u044d\u0442\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0430, \u043f\u043e\u0434\u043e\u0431\u043d\u0430\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"train_data"),", \u043d\u043e \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043c\u043e\u0436\u0435\u0442 \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0435\u043b\u0435\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/aggregate-functions/reference/stochasticlinearregression#agg_functions-stochasticlinearregression"},"stochasticLinearRegression")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moredez.ru/q/51225972/"},"\u041e\u0442\u043b\u0438\u0447\u0438\u0435 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u043e\u0442 \u043b\u043e\u0433\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438"))))}f.isMDXComponent=!0}}]);