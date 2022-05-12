"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[24916],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,h=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return t?r.createElement(h,c(c({ref:n},p),{},{components:t})):r.createElement(h,c({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54619:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),c=["components"],a={sidebar_position:3,sidebar_label:"ClickHouse\u6027\u80fd"},u="\u6027\u80fd",l={unversionedId:"zh/introduction/performance",id:"zh/introduction/performance",title:"\u6027\u80fd",description:"performance}",source:"@site/docs/zh/introduction/performance.md",sourceDirName:"zh/introduction",slug:"/zh/introduction/performance",permalink:"/docs/zh/introduction/performance",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/introduction/performance.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"ClickHouse\u6027\u80fd"},sidebar:"chinese",previous:{title:"ClickHouse\u7684\u7279\u6027",permalink:"/docs/zh/introduction/distinctive-features"},next:{title:"ClickHouse\u5386\u53f2",permalink:"/docs/zh/introduction/history"}},p={},s=[{value:"\u5355\u4e2a\u5927\u67e5\u8be2\u7684\u541e\u5410\u91cf",id:"dan-ge-da-cha-xun-de-tun-tu-liang",level:2},{value:"\u5904\u7406\u77ed\u67e5\u8be2\u7684\u5ef6\u8fdf\u65f6\u95f4",id:"chu-li-duan-cha-xun-de-yan-chi-shi-jian",level:2},{value:"\u5904\u7406\u5927\u91cf\u77ed\u67e5\u8be2\u7684\u541e\u5410\u91cf",id:"chu-li-da-liang-duan-cha-xun-de-tun-tu-liang",level:2},{value:"\u6570\u636e\u7684\u5199\u5165\u6027\u80fd",id:"shu-ju-de-xie-ru-xing-neng",level:2}],d={toc:s};function f(e){var n=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"performance"},"\u6027\u80fd"),(0,o.kt)("p",null,"\u6839\u636eYandex\u7684\u5185\u90e8\u6d4b\u8bd5\u7ed3\u679c\uff0cClickHouse\u8868\u73b0\u51fa\u4e86\u6bd4\u540c\u7c7b\u53ef\u6bd4\u8f83\u4ea7\u54c1\u66f4\u4f18\u7684\u6027\u80fd\u3002\u4f60\u53ef\u4ee5\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/benchmark/dbms/"},"\u8fd9\u91cc")," \u67e5\u770b\u5177\u4f53\u7684\u6d4b\u8bd5\u7ed3\u679c\u3002"),(0,o.kt)("p",null,"\u8bb8\u591a\u5176\u4ed6\u7684\u6d4b\u8bd5\u4e5f\u8bc1\u5b9e\u8fd9\u4e00\u70b9\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e92\u8054\u7f51\u641c\u7d22\u5230\u5b83\u4eec\uff0c\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u4ece ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/#independent-benchmarks"},"\u6211\u4eec\u6536\u96c6\u7684\u90e8\u5206\u76f8\u5173\u8fde\u63a5")," \u4e2d\u67e5\u770b\u3002"),(0,o.kt)("h2",{id:"dan-ge-da-cha-xun-de-tun-tu-liang"},"\u5355\u4e2a\u5927\u67e5\u8be2\u7684\u541e\u5410\u91cf"),(0,o.kt)("p",null,"\u541e\u5410\u91cf\u53ef\u4ee5\u4f7f\u7528\u6bcf\u79d2\u5904\u7406\u7684\u884c\u6570\u6216\u6bcf\u79d2\u5904\u7406\u7684\u5b57\u8282\u6570\u6765\u8861\u91cf\u3002\u5982\u679c\u6570\u636e\u88ab\u653e\u7f6e\u5728page cache\u4e2d\uff0c\u5219\u4e00\u4e2a\u4e0d\u592a\u590d\u6742\u7684\u67e5\u8be2\u5728\u5355\u4e2a\u670d\u52a1\u5668\u4e0a\u5927\u7ea6\u80fd\u591f\u4ee52-10GB\uff0fs\uff08\u672a\u538b\u7f29\uff09\u7684\u901f\u5ea6\u8fdb\u884c\u5904\u7406\uff08\u5bf9\u4e8e\u7b80\u5355\u7684\u67e5\u8be2\uff0c\u901f\u5ea6\u53ef\u4ee5\u8fbe\u523030GB\uff0fs\uff09\u3002\u5982\u679c\u6570\u636e\u6ca1\u6709\u5728page cache\u4e2d\u7684\u8bdd\uff0c\u90a3\u4e48\u901f\u5ea6\u5c06\u53d6\u51b3\u4e8e\u4f60\u7684\u78c1\u76d8\u7cfb\u7edf\u548c\u6570\u636e\u7684\u538b\u7f29\u7387\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4e00\u4e2a\u78c1\u76d8\u5141\u8bb8\u4ee5400MB\uff0fs\u7684\u901f\u5ea6\u8bfb\u53d6\u6570\u636e\uff0c\u5e76\u4e14\u6570\u636e\u538b\u7f29\u7387\u662f3\uff0c\u5219\u6570\u636e\u7684\u5904\u7406\u901f\u5ea6\u4e3a1.2GB/s\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c\u4f60\u662f\u5728\u63d0\u53d6\u4e00\u4e2a10\u5b57\u8282\u7684\u5217\uff0c\u90a3\u4e48\u5b83\u7684\u5904\u7406\u901f\u5ea6\u5927\u7ea6\u662f1-2\u4ebf\u884c\u6bcf\u79d2\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u5206\u5e03\u5f0f\u5904\u7406\uff0c\u5904\u7406\u901f\u5ea6\u51e0\u4e4e\u662f\u7ebf\u6027\u6269\u5c55\u7684\uff0c\u4f46\u8fd9\u53d7\u9650\u4e8e\u805a\u5408\u6216\u6392\u5e8f\u7684\u7ed3\u679c\u4e0d\u662f\u90a3\u4e48\u5927\u7684\u60c5\u51b5\u4e0b\u3002"),(0,o.kt)("h2",{id:"chu-li-duan-cha-xun-de-yan-chi-shi-jian"},"\u5904\u7406\u77ed\u67e5\u8be2\u7684\u5ef6\u8fdf\u65f6\u95f4"),(0,o.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u67e5\u8be2\u4f7f\u7528\u4e3b\u952e\u5e76\u4e14\u6ca1\u6709\u592a\u591a\u884c(\u51e0\u5341\u4e07)\u8fdb\u884c\u5904\u7406\uff0c\u5e76\u4e14\u6ca1\u6709\u67e5\u8be2\u592a\u591a\u7684\u5217\uff0c\u90a3\u4e48\u5728\u6570\u636e\u88abpage cache\u7f13\u5b58\u7684\u60c5\u51b5\u4e0b\uff0c\u5b83\u7684\u5ef6\u8fdf\u5e94\u8be5\u5c0f\u4e8e50\u6beb\u79d2(\u5728\u6700\u4f73\u7684\u60c5\u51b5\u4e0b\u5e94\u8be5\u5c0f\u4e8e10\u6beb\u79d2)\u3002 \u5426\u5219\uff0c\u5ef6\u8fdf\u53d6\u51b3\u4e8e\u6570\u636e\u7684\u67e5\u627e\u6b21\u6570\u3002\u5982\u679c\u4f60\u5f53\u524d\u4f7f\u7528\u7684\u662fHDD\uff0c\u5728\u6570\u636e\u6ca1\u6709\u52a0\u8f7d\u7684\u60c5\u51b5\u4e0b\uff0c\u67e5\u8be2\u6240\u9700\u8981\u7684\u5ef6\u8fdf\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u516c\u5f0f\u8ba1\u7b97\u5f97\u77e5\uff1a \u67e5\u627e\u65f6\u95f4\uff0810 ms\uff09 ","*"," \u67e5\u8be2\u7684\u5217\u7684\u6570\u91cf ","*"," \u67e5\u8be2\u7684\u6570\u636e\u5757\u7684\u6570\u91cf\u3002"),(0,o.kt)("h2",{id:"chu-li-da-liang-duan-cha-xun-de-tun-tu-liang"},"\u5904\u7406\u5927\u91cf\u77ed\u67e5\u8be2\u7684\u541e\u5410\u91cf"),(0,o.kt)("p",null,"\u5728\u76f8\u540c\u7684\u60c5\u51b5\u4e0b\uff0cClickHouse\u53ef\u4ee5\u5728\u5355\u4e2a\u670d\u52a1\u5668\u4e0a\u6bcf\u79d2\u5904\u7406\u6570\u767e\u4e2a\u67e5\u8be2\uff08\u5728\u6700\u4f73\u7684\u60c5\u51b5\u4e0b\u6700\u591a\u53ef\u4ee5\u5904\u7406\u6570\u5343\u4e2a\uff09\u3002\u4f46\u662f\u7531\u4e8e\u8fd9\u4e0d\u9002\u7528\u4e8e\u5206\u6790\u578b\u573a\u666f\u3002\u56e0\u6b64\u6211\u4eec\u5efa\u8bae\u6bcf\u79d2\u6700\u591a\u67e5\u8be2100\u6b21\u3002"),(0,o.kt)("h2",{id:"shu-ju-de-xie-ru-xing-neng"},"\u6570\u636e\u7684\u5199\u5165\u6027\u80fd"),(0,o.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u6bcf\u6b21\u5199\u5165\u4e0d\u5c11\u4e8e1000\u884c\u7684\u6279\u91cf\u5199\u5165\uff0c\u6216\u6bcf\u79d2\u4e0d\u8d85\u8fc7\u4e00\u4e2a\u5199\u5165\u8bf7\u6c42\u3002\u5f53\u4f7f\u7528tab-separated\u683c\u5f0f\u5c06\u4e00\u4efd\u6570\u636e\u5199\u5165\u5230MergeTree\u8868\u4e2d\u65f6\uff0c\u5199\u5165\u901f\u5ea6\u5927\u7ea6\u4e3a50\u5230200MB/s\u3002\u5982\u679c\u60a8\u5199\u5165\u7684\u6570\u636e\u6bcf\u884c\u4e3a1Kb\uff0c\u90a3\u4e48\u5199\u5165\u7684\u901f\u5ea6\u4e3a50\uff0c000\u5230200\uff0c000\u884c\u6bcf\u79d2\u3002\u5982\u679c\u60a8\u7684\u884c\u66f4\u5c0f\uff0c\u90a3\u4e48\u5199\u5165\u901f\u5ea6\u5c06\u66f4\u9ad8\u3002\u4e3a\u4e86\u63d0\u9ad8\u5199\u5165\u6027\u80fd\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2aINSERT\u8fdb\u884c\u5e76\u884c\u5199\u5165\uff0c\u8fd9\u5c06\u5e26\u6765\u7ebf\u6027\u7684\u6027\u80fd\u63d0\u5347\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/introduction/performance/"},"\u6765\u6e90\u6587\u7ae0")," "))}f.isMDXComponent=!0}}]);