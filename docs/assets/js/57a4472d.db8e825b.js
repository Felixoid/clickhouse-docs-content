"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[32197],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=u(n),d=i,m=k["".concat(s,".").concat(d)]||k[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},81160:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={},s=void 0,u={unversionedId:"zh/development/developer-instruction",id:"zh/development/developer-instruction",title:"developer-instruction",description:"ClickHose\u652f\u6301Linux,FreeBSD \u53ca Mac OS X \u7cfb\u7edf\u3002",source:"@site/docs/zh/development/developer-instruction.md",sourceDirName:"zh/development",slug:"/zh/development/developer-instruction",permalink:"/zh/development/developer-instruction",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/development/developer-instruction.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u4f7f\u7528\u7684\u4e09\u65b9\u5e93",permalink:"/zh/development/contrib"},next:{title:"\u5982\u4f55\u7f16\u5199 C++ \u4ee3\u7801",permalink:"/zh/development/style"}},c={},p=[{value:"\u4f7f\u7528\u5b50\u6a21\u5757",id:"working-with-submodules",level:2}],k={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ClickHose\u652f\u6301Linux,FreeBSD \u53ca Mac OS X \u7cfb\u7edf\u3002"),(0,a.kt)("h1",{id:"windowsshi-yong-zhi-yin"},"Windows\u4f7f\u7528\u6307\u5f15"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u7684\u7cfb\u7edf\u662fWindows\uff0c\u5219\u9700\u8981\u521b\u5efaUbuntu\u865a\u62df\u673a\u3002\u53ef\u4ee5\u5b89\u88c5VirtualBox\u6765\u6784\u5efa\u865a\u62df\u673a\u3002Ubuntu\u7684\u4e0b\u8f7d\u94fe\u63a5\u4e3a\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.ubuntu.com/#download"},"https://www.ubuntu.com/#download")," \u3002\u8bf7\u4f7f\u7528\u4e0b\u8f7d\u597d\u7684\u955c\u50cf\u521b\u5efa\u4e00\u4e2a\u865a\u62df\u673a\uff08\u8bf7\u786e\u4fdd\u865a\u62df\u673a\u6709\u81f3\u5c114GB\u7684\u5185\u5b58\u5bb9\u91cf\uff09\u3002\u5728Ubuntu\u4e2d\u4f7f\u7528\xabterminal\xbb\u7a0b\u5e8f\uff08gnome-terminal\uff0ckonsole\u7b49\uff09\u8fd0\u884c\u547d\u4ee4\u884c\u7ec8\u7aef\uff0c\u6216\u4f7f\u7528\u5feb\u6377\u952eCtrl+Alt+T\u3002"),(0,a.kt)("h1",{id:"zai-githubshang-chuang-jian-yuan-ma-ku"},"\u5728GitHub\u4e0a\u521b\u5efa\u6e90\u7801\u5e93"),(0,a.kt)("p",null,"\u60a8\u9700\u8981(\u7533\u8bf7)\u4e00\u4e2aGitHub\u8d26\u6237\u6765\u4f7f\u7528ClickHouse\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u8d26\u6237\uff0c\u8bf7\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com%E4%B8%8A%E6%B3%A8%E5%86%8C%E4%B8%80%E4%B8%AA%E3%80%82%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89SSH%E5%AF%86%E9%92%A5%EF%BC%8C%E8%AF%B7%E5%9C%A8%E6%9C%AC%E5%9C%B0%E5%88%9B%E5%BB%BA%E5%AF%86%E9%92%A5%E5%B9%B6%E5%B0%86%E5%85%AC%E9%92%A5%E4%B8%8A%E4%BC%A0%E5%88%B0GitHub%E4%B8%8A%E3%80%82%E8%BF%99%E6%9C%89%E5%8A%A9%E4%BA%8E%E4%BD%A0%E6%8F%90%E4%BA%A4%E6%9B%B4%E6%96%B0%E4%BB%A3%E7%A0%81%E3%80%82%E5%B9%B6%E4%B8%94%E5%9C%A8%E4%B8%8D%E5%90%8C%E7%9A%84SSH%E6%9C%8D%E5%8A%A1%E7%AB%AF%EF%BC%8C%E4%BD%A0%E4%B9%9F%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%E7%9B%B8%E5%90%8C%E7%9A%84SSH%E5%AF%86%E9%92%A5%E3%80%82"},"https://github.com\u4e0a\u6ce8\u518c\u4e00\u4e2a\u3002\u5982\u679c\u6ca1\u6709SSH\u5bc6\u94a5\uff0c\u8bf7\u5728\u672c\u5730\u521b\u5efa\u5bc6\u94a5\u5e76\u5c06\u516c\u94a5\u4e0a\u4f20\u5230GitHub\u4e0a\u3002\u8fd9\u6709\u52a9\u4e8e\u4f60\u63d0\u4ea4\u66f4\u65b0\u4ee3\u7801\u3002\u5e76\u4e14\u5728\u4e0d\u540c\u7684SSH\u670d\u52a1\u7aef\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684SSH\u5bc6\u94a5\u3002")),(0,a.kt)("p",null,"\u8981\u521b\u5efaClickHouse\u6e90\u7801\u5e93\u7684\u5206\u652f\uff0c\u8bf7\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse%E9%A1%B5%E9%9D%A2%E4%B8%8A%E7%82%B9%E5%87%BB%E5%8F%B3%E4%B8%8A%E8%A7%92%E7%9A%84%C2%ABfork%C2%BB%E6%8C%89%E9%92%AE%E3%80%82%E5%AE%83%E4%BC%9A%E5%9C%A8%E6%9C%AC%E8%B4%A6%E6%88%B7%E4%B8%8A%E5%88%9B%E5%BB%BA%E6%82%A8%E4%B8%AA%E4%BA%BA%E7%9A%84ClickHouse/ClickHouse%E5%88%86%E6%94%AF%E3%80%82"},"https://github.com/ClickHouse/ClickHouse\u9875\u9762\u4e0a\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\xabfork\xbb\u6309\u94ae\u3002\u5b83\u4f1a\u5728\u672c\u8d26\u6237\u4e0a\u521b\u5efa\u60a8\u4e2a\u4eba\u7684ClickHouse/ClickHouse\u5206\u652f\u3002")),(0,a.kt)("p",null,"\u82e5\u8981\u53c2\u4e0e\u5f00\u53d1\uff0c\u9996\u5148\u8bf7\u5728ClickHouse\u7684\u5206\u652f\u4e2d\u63d0\u4ea4\u60a8\u671f\u671b\u7684\u53d8\u66f4\uff0c\u7136\u540e\u521b\u5efa\u4e00\u4e2a\xabpull\u8bf7\u6c42\xbb\uff0c\u4ee5\u4fbf\u8fd9\u4e9b\u53d8\u66f4\u80fd\u591f\u88ab(ClickHouse/ClickHouse)\u4e3b\u5e93\u63a5\u53d7\u3002"),(0,a.kt)("p",null,"\u8bf7\u5148\u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"p"},"git"),"\u6765\u4f7f\u7528git\u6e90\u7801\u5e93\u3002"),(0,a.kt)("p",null,"\u8bf7\u5728Ubuntu\u7ec8\u7aef\u4e0a\u4f7f\u7528\u4e0b\u5217\u7684\u6307\u4ee4\u6765\u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"p"},"git"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt install git\n")),(0,a.kt)("p",null,"\u5728",(0,a.kt)("a",{parentName:"p",href:"https://education.github.com/git-cheat-sheet-education.pdf%E4%B8%AD%E6%89%BE%E5%88%B0%E6%9C%89%E5%85%B3%E4%BD%BF%E7%94%A8Git%E7%9A%84%E7%AE%80%E6%98%93%E6%89%8B%E5%86%8C%E3%80%82%E6%9C%89%E5%85%B3Git%E7%9A%84%E8%AF%A6%E7%BB%86%E6%89%8B%E5%86%8C%EF%BC%8C%E8%AF%B7%E5%8F%82%E8%A7%81"},"https://education.github.com/git-cheat-sheet-education.pdf\u4e2d\u627e\u5230\u6709\u5173\u4f7f\u7528Git\u7684\u7b80\u6613\u624b\u518c\u3002\u6709\u5173Git\u7684\u8be6\u7ec6\u624b\u518c\uff0c\u8bf7\u53c2\u89c1"),": ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/book/ru/v2"},"https://git-scm.com/book/ru/v2")," \u3002"),(0,a.kt)("h1",{id:"kao-bei-yuan-ma-ku-dao-kai-fa-ji"},"\u62f7\u8d1d\u6e90\u7801\u5e93\u5230\u5f00\u53d1\u673a"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8bf7\u5c06\u6e90\u7801\u4e0b\u8f7d\u5230\u5f00\u53d1\u673a\u4e0a\u3002\u8fd9\u6b65\u64cd\u4f5c\u88ab\u79f0\u4e3a\xab\u62f7\u8d1d\u6e90\u7801\u5e93\xbb\uff0c\u662f\u56e0\u4e3a\u5b83\u5728\u60a8\u7684\u5f00\u53d1\u673a\u4e0a\u521b\u5efa\u4e86\u6e90\u7801\u5e93\u7684\u672c\u5730\u526f\u672c\u3002"),(0,a.kt)("p",null,"\u5728\u7ec8\u7aef\u547d\u4ee4\u884c\u8f93\u5165\u4e0b\u5217\u6307\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone git@guthub.com:your_github_username/ClickHouse.git\ncd ClickHouse\n")),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u60a8\u9700\u8981\u5c06",(0,a.kt)("em",{parentName:"p"},"your_github_username")," \u66ff\u6362\u6210\u5b9e\u9645\u4f7f\u7528\u7684\u8d26\u6237\u540d!"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u6307\u4ee4\u5c06\u521b\u5efa\u4e00\u4e2a\u5305\u542b\u9879\u76ee\u526f\u672c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"ClickHouse"),"\u5de5\u4f5c\u76ee\u5f55\u3002"),(0,a.kt)("p",null,"\u91cd\u8981\u7684\u662f\uff0c\u5de5\u4f5c\u76ee\u5f55\u7684\u8def\u5f84\u4e2d\u4e0d\u5e94\u5305\u542b\u7a7a\u683c\uff0c\u56e0\u4e3a\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8fd0\u884c\u6784\u5efa\u7cfb\u7edf\u65f6\u51fa\u73b0\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cClickHouse\u6e90\u7801\u5e93\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"submodules"),"\u3002\u8fd9\u662f\u5bf9\u5176\u4ed6\u5e93\u7684\u5f15\u7528\uff08\u5373\u9879\u76ee\u6240\u4f9d\u8d56\u7684\u5916\u90e8\u5e93\uff09\u3002\u5373\u5728\u62f7\u8d1d\u6e90\u7801\u5e93\u65f6\uff0c\u9700\u8981\u5982\u4e0a\u8ff0\u6307\u4ee4\u4e2d\u90a3\u6837\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"--recursive"),"\u3002\u5982\u679c\u5728\u62f7\u8d1d\u6e90\u7801\u5e93\u65f6\u6ca1\u6709\u5305\u542b\u5b50\u6a21\u5757\uff0c\u9700\u8981\u6267\u884c\u4f7f\u7528\u4e0b\u5217\u7684\u6307\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git submodule init\ngit submodule update\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"git submodule status"),"\u6765\u68c0\u67e5\u5b50\u6a21\u5757\u7684\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u63d0\u793a\u4e0b\u5217\u7684\u9519\u8bef\u4fe1\u606f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Permission denied (publickey).\nfatal: Could not read from remote repository.\n\nPlease make sure you have the correct access rights\nand the repository exists.\n")),(0,a.kt)("p",null,"\u8fd9\u901a\u5e38\u8868\u793a\u7f3a\u5c11\u7528\u4e8e\u8fde\u63a5GitHub\u7684SSH\u5bc6\u94a5\u3002\u8fd9\u4e9b\u5bc6\u94a5\u4e00\u822c\u90fd\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"~/.ssh"),"\u4e2d\u3002\u8981\u63a5\u53d7SSH\u5bc6\u94a5\uff0c\u8bf7\u5728GitHub UI\u7684\u8bbe\u7f6e\u9875\u9762\u4e2d\u4e0a\u4f20\u5b83\u4eec\u3002"),(0,a.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u901a\u8fc7https\u534f\u8bae\u6765\u62f7\u8d1d\u6e90\u7801\u5e93:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/ClickHouse/ClickHouse.git\n")),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u8fd9\u65e0\u6cd5\u5c06\u53d8\u66f4\u63d0\u4ea4\u5230\u670d\u52a1\u5668\u4e0a\u3002\u60a8\u4ecd\u7136\u53ef\u4ee5\u6682\u65f6\u4f7f\u7528\uff0c\u5e76\u540e\u7eed\u518d\u6dfb\u52a0SSH\u5bc6\u94a5\uff0c\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"git remote"),"\u547d\u4ee4\u66ff\u6362\u6e90\u7801\u5e93\u7684\u8fdc\u7a0b\u5730\u5740\u3002"),(0,a.kt)("p",null,"\u8fd8\u53ef\u4ee5\u5c06\u539f\u59cbClickHouse\u5e93\u7684\u5730\u5740\u6dfb\u52a0\u5230\u672c\u5730\u5e93\u4e2d\uff0c\u4ee5\u4fbf\u4ece\u90a3\u91cc\u83b7\u53d6\u66f4\u65b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git remote add upstream git@github.com:ClickHouse/ClickHouse.git\n")),(0,a.kt)("p",null,"\u547d\u4ee4\u6267\u884c\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"git pull upstream master"),"\uff0c\u4eceClickHouse\u7684\u4e3b\u5206\u652f\u4e2d\u62c9\u53bb\u66f4\u65b0\u3002"),(0,a.kt)("h2",{id:"working-with-submodules"},"\u4f7f\u7528\u5b50\u6a21\u5757"),(0,a.kt)("p",null,"\u5728git\u4e2d\u4f7f\u7528\u5b50\u6a21\u5757\u53ef\u80fd\u4f1a\u5f88\u75db\u82e6\u3002 \u63a5\u4e0b\u6765\u7684\u547d\u4ee4\u5c06\u6709\u52a9\u4e8e\u7ba1\u7406\u5b83:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# ! each command accepts\n# Update remote URLs for submodules. Barely rare case\ngit submodule sync\n# Add new submodules\ngit submodule init\n# Update existing submodules to the current state\ngit submodule update\n# Two last commands could be merged together\ngit submodule update --init\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u7684\u547d\u4ee4\u5c06\u5e2e\u52a9\u60a8\u5c06\u6240\u6709\u5b50\u6a21\u5757\u91cd\u7f6e\u4e3a\u521d\u59cb\u72b6\u6001\uff08\uff01\u534e\u6797\uff01 -\u91cc\u9762\u7684\u4efb\u4f55chenges\u5c06\u88ab\u5220\u9664):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Synchronizes submodules' remote URL with .gitmodules\ngit submodule sync\n# Update the registered submodules with initialize not yet initialized\ngit submodule update --init\n# Reset all changes done after HEAD\ngit submodule foreach git reset --hard\n# Clean files from .gitignore\ngit submodule foreach git clean -xfd\n# Repeat last 4 commands for all submodule\ngit submodule foreach git submodule sync\ngit submodule foreach git submodule update --init\ngit submodule foreach git submodule foreach git reset --hard\ngit submodule foreach git submodule foreach git clean -xfd\n")),(0,a.kt)("h1",{id:"gou-jian-xi-tong"},"\u6784\u5efa\u7cfb\u7edf"),(0,a.kt)("p",null,"ClickHouse\u4f7f\u7528 CMake \u548c Ninja \u6765\u6784\u5efa\u7cfb\u7edf\u3002"),(0,a.kt)("p",null,"CMake - \u4e00\u4e2a\u53ef\u4ee5\u751f\u6210Ninja\u6587\u4ef6\u7684\u5143\u6784\u5efa\u7cfb\u7edf\uff08\u6784\u5efa\u4efb\u52a1\uff09\u3002\nNinja - \u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u6784\u5efa\u7cfb\u7edf\uff0c\u4e13\u6ce8\u4e8e\u901f\u5ea6\uff0c\u7528\u4e8e\u6267\u884c\u8fd9\u4e9bcmake\u751f\u6210\u7684\u4efb\u52a1\u3002"),(0,a.kt)("p",null,"\u5728Ubuntu,Debian\u6216\u8005Mint\u7cfb\u7edf\u4e0a\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"sudo apt install cmake ninja-build"),"\u6765\u5b89\u88c5ninja\u3002"),(0,a.kt)("p",null,"\u5728CentOS,RedHat\u7cfb\u7edf\u4e0a\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"sudo yum install cmake ninja-build"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u66fe\u7ecf\u4f7f\u7528\u8fc7Arch\u6216Gentoo\uff0c\u90a3\u4e48\u4e5f\u8bb8\u77e5\u9053\u5982\u4f55\u5b89\u88c5CMake\u3002"),(0,a.kt)("p",null,"\u82e5\u8981\u5728Mac OS X\u4e0a\u5b89\u88c5CMake\u548cNinja\uff0c\u8bf7\u5148\u5b89\u88c5Homebrew\uff0c\u7136\u540e\u518d\u901a\u8fc7brew\u5b89\u88c5\u5176\u4ed6\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\nbrew install cmake ninja\n')),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u68c0\u67e5CMake\u7684\u7248\u672c\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"cmake --version"),"\u3002\u5982\u679c\u7248\u672c\u4f4e\u4e8e3.3\uff0c\u5219\u9700\u8981\u4ece\u4ee5\u4e0b\u7f51\u7ad9\u5b89\u88c5\u66f4\u65b0\u7248\u672c\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://cmake.org/download/"},"https://cmake.org/download/")," \u3002"),(0,a.kt)("h1",{id:"ke-gong-xuan-ze-de-wai-bu-ku"},"\u53ef\u4f9b\u9009\u62e9\u7684\u5916\u90e8\u5e93"),(0,a.kt)("p",null,"ClickHouse\u4f7f\u7528\u591a\u4e2a\u5916\u90e8\u5e93\u8fdb\u884c\u6784\u5efa\u3002\u5927\u591a\u6570\u5916\u90e8\u5e93\u4e0d\u9700\u8981\u5355\u72ec\u5b89\u88c5\uff0c\u800c\u662f\u548cClickHouse\u4e00\u8d77\u5728\u5b50\u6a21\u5757\u4e2d\u6784\u5efa\u3002\u53ef\u4ee5\u67e5\u770b",(0,a.kt)("inlineCode",{parentName:"p"},"contrib"),"\u4e2d\u7f57\u5217\u7684\u6e05\u5355\u3002"),(0,a.kt)("h1",{id:"c-bian-yi-qi"},"C++ \u7f16\u8bd1\u5668"),(0,a.kt)("p",null,"We support clang starting from version 11."),(0,a.kt)("p",null,"On Ubuntu/Debian you can use the automatic installation script (check ",(0,a.kt)("a",{parentName:"p",href:"https://apt.llvm.org/"},"official webpage"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo bash -c "$(wget -O - https://apt.llvm.org/llvm.sh)"\n')),(0,a.kt)("h1",{id:"gou-jian-de-guo-cheng"},"\u6784\u5efa\u7684\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u5982\u679c\u5f53\u524d\u5df2\u7ecf\u51c6\u5907\u597d\u6784\u5efaClickHouse\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"ClickHouse"),"\u4e2d\u521b\u5efa\u4e00\u4e2a\u5355\u72ec\u7684\u76ee\u5f55",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"\uff0c\u5176\u4e2d\u5305\u542b\u6240\u6709\u6784\u5efa\u7ec4\u4ef6:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir build\ncd build\n")),(0,a.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u6709\u591a\u4e2a\u4e0d\u540c\u7c7b\u578b\u7684\u6784\u5efa\u76ee\u5f55\uff08\u4f8b\u5982\uff0cbuild_release, build_debug\u7b49\u7b49)\u3002"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"\u76ee\u5f55\u4e0b\uff0c\u901a\u8fc7\u8fd0\u884cCMake\u914d\u7f6e\u6784\u5efa\u3002 \u5728\u7b2c\u4e00\u6b21\u8fd0\u884c\u4e4b\u524d\uff0c\u8bf7\u5b9a\u4e49\u7528\u4e8e\u6307\u5b9a\u7f16\u8bd1\u5668\u7684\u73af\u5883\u53d8\u91cf\uff08\u672c\u793a\u4f8b\u4e2d\u4e3agcc 9 \u7f16\u8bd1\u5668\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export CC=clang CXX=clang++\ncmake ..\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CC"),"\u53d8\u91cf\u6307\u4ee3C\u7684\u7f16\u8bd1\u5668\uff08C Compiler\u7684\u7f29\u5199\uff09\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"CXX"),"\u53d8\u91cf\u6307\u4ee3\u8981\u4f7f\u7528\u54ea\u4e2aC++\u7f16\u8bd1\u5668\u8fdb\u884c\u7f16\u8bd1\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u66f4\u5feb\u7684\u6784\u5efa\uff0c\u8bf7\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"debug"),"\u6784\u5efa\u7c7b\u578b-\u4e0d\u542b\u4f18\u5316\u7684\u6784\u5efa\u3002\u4e3a\u6b64\u63d0\u4f9b\u4ee5\u4e0b\u7684\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"-D CMAKE_BUILD_TYPE=Debug"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cmake -D CMAKE_BUILD_TYPE=Debug ..\n")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"\u76ee\u5f55\u4e2d\u8fd0\u884c\u6b64\u547d\u4ee4\u6765\u66f4\u6539\u6784\u5efa\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u8fd0\u884cninja\u8fdb\u884c\u6784\u5efa:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ninja clickhouse-server clickhouse-client\n")),(0,a.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u4ec5\u5c06\u6784\u5efa\u6240\u9700\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u6784\u5efa\u6240\u6709\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\uff08utilities\u548ctests\uff09\uff0c\u8bf7\u8fd0\u884c\u4e0d\u5e26\u53c2\u6570\u7684ninja\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ninja\n")),(0,a.kt)("p",null,"\u5168\u91cf\u6784\u5efa\u9700\u8981\u5927\u7ea630GB\u7684\u53ef\u7528\u78c1\u76d8\u7a7a\u95f4\u621615GB\u7684\u7a7a\u95f4\u6765\u6784\u5efa\u4e3b\u8981\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u5f53\u6784\u5efa\u7684\u673a\u5668\u4e0a\u6709\u5927\u91cf\u5185\u5b58\u65f6\uff0c\u53ef\u8003\u8651\u8bbe\u7f6e\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"-j"),"\u53c2\u6570\u5e76\u884c\u8fd0\u884c\u7684\u6784\u5efa\u4efb\u52a1\u6570\u91cf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ninja -j 1 clickhouse-server clickhouse-client\n")),(0,a.kt)("p",null,"\u5728\u62e5\u67094GB\u5185\u5b58\u7684\u673a\u5668\u4e0a\uff0c\u5efa\u8bae\u8bbe\u7f6e\u62101\uff0c\u5728\u62e5\u67098GB\u5185\u5b58\u7684\u673a\u5668\u4e0a\uff0c\u5efa\u8bae\u6309",(0,a.kt)("inlineCode",{parentName:"p"},"-j 2"),"\u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u6536\u5230\u4ee5\u4e0b\u6d88\u606f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ninja\uff1aerror\uff1aloading'build.ninja'\uff1aNo such file or directory")),(0,a.kt)("p",null,"\u5219\u8868\u793a\u751f\u6210\u6784\u5efa\u914d\u7f6e\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u4e0a\u8ff0\u6d88\u606f\u3002"),(0,a.kt)("p",null,"\u6210\u529f\u542f\u52a8\u6784\u5efa\u8fc7\u7a0b\u540e\uff0c\u60a8\u5c06\u770b\u5230\u6784\u5efa\u8fdb\u5ea6-\u5df2\u5904\u7406\u4efb\u52a1\u7684\u6570\u91cf\u548c\u4efb\u52a1\u603b\u6570\u3002"),(0,a.kt)("p",null,"\u5728libhdfs2\u5e93\u4e2d\u751f\u6210\u6709\u5173protobuf\u6587\u4ef6\u7684\u6d88\u606f\u65f6\uff0c\u53ef\u80fd\u4f1a\u663e\u793a\u8bf8\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"libprotobuf WARNING"),"\u3002\u5b83\u4eec\u6ca1\u6709\u5f71\u54cd\uff0c\u53ef\u4ee5\u5ffd\u7565\u4e0d\u8ba1\u3002"),(0,a.kt)("p",null,"\u6210\u529f\u6784\u5efa\u540e\uff0c\u4f1a\u5f97\u5230\u4e00\u4e2a\u53ef\u6267\u884c\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"ClickHouse/<build_dir>/programs/clickhouse"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ls -l programs/clickhouse\n")),(0,a.kt)("h1",{id:"yun-xing-clickhouseke-zhi-xing-wen-jian"},"\u8fd0\u884cClickHouse\u53ef\u6267\u884c\u6587\u4ef6"),(0,a.kt)("p",null,"\u8981\u4ee5\u5f53\u524d\u7684\u7528\u6237\u8eab\u4efd\u8fd0\u884c\u670d\u52a1\uff0c\u8bf7\u8fdb\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"ClickHouse/programs/server/")," \u76ee\u5f55\uff08\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"\u6587\u4ef6\u5939\u5916\uff09\u5e76\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"../../build/programs/clickhouse server\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cClickHouse\u5c06\u4f7f\u7528\u4f4d\u4e8e\u5f53\u524d\u76ee\u5f55\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u60a8\u53ef\u4ee5\u4ece\u4efb\u4f55\u76ee\u5f55\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"Clickhouse server"),"\uff0c\u5e76\u5c06\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"--config-file"),"\u7684\u8def\u5f84\u6307\u5b9a\u4e3a\u547d\u4ee4\u884c\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u5728\u53e6\u5916\u4e00\u4e2a\u7ec8\u7aef\u4e0a\u8fde\u63a5ClickHouse\u7684clickhouse-client\u5ba2\u6237\u7aef\uff0c\u8bf7\u8fdb\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"ClickHouse/build/programs/")," \u5e76\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"./clickhouse client"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5728Mac OS X \u6216\u8005 FreeBSD\u4e0a\u6536\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Connection refused"),"\u7684\u6d88\u606f\uff0c\u8bf7\u5c1d\u8bd5\u6307\u5b9a\u4e3b\u673a\u5730\u5740\u4e3a127.0.0.1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"clickhouse client --host 127.0.0.1\n")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u6784\u5efa\u7684ClickHouse\u4e8c\u8fdb\u5236\u6587\u4ef6\u66ff\u6362\u7cfb\u7edf\u4e2d\u5b89\u88c5\u7684ClickHouse\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u751f\u6210\u7248\u672c\u3002\u4e3a\u6b64\uff0c\u8bf7\u53c2\u7167\u5b98\u65b9\u7f51\u7ad9\u4e0a\u7684\u8bf4\u660e\u5728\u8ba1\u7b97\u673a\u4e0a\u5b89\u88c5ClickHouse\u3002 \u63a5\u4e0b\u6765\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo service clickhouse-server stop\nsudo cp ClickHouse/build/programs/clickhouse /usr/bin/\nsudo service clickhouse-server start\n")),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),"\u548c\u5176\u4ed6\u670d\u52a1\u901a\u5e38\u5171\u4eab",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse"),"\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u7b26\u53f7\u94fe\u63a5\u3002"),(0,a.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u7cfb\u7edf\u4e0a\u5b89\u88c5\u7684ClickHouse\u8f6f\u4ef6\u5305\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6\u8fd0\u884c\u81ea\u5b9a\u4e49\u6784\u5efa\u7684ClickHouse\u4e8c\u8fdb\u5236\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo service clickhouse-server stop\nsudo -u clickhouse ClickHouse/build/programs/clickhouse server --config-file /etc/clickhouse-server/config.xml\n")),(0,a.kt)("h1",{id:"ide-ji-cheng-kai-fa-huan-jing"},"IDE (\u96c6\u6210\u5f00\u53d1\u73af\u5883)"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u8fd8\u4e0d\u77e5\u9053\u4f7f\u7528\u54ea\u6b3eIDE\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528CLion\u3002CLion\u662f\u4e00\u6b3e\u5546\u4e1a\u8f6f\u4ef6\uff0c\u4f46\u80fd\u591f\u670930\u5929\u7684\u514d\u8d39\u4f7f\u7528\u65f6\u95f4\u3002\u5b83\u540c\u65f6\u4e5f\u5bf9\u5b66\u751f\u514d\u8d39\u3002CLion\u53ef\u4ee5\u5728Linux\u548cMac OS X\u4e0a\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"KDevelop\u548cQTCreator\u662f\u53e6\u5916\u4e24\u6b3e\u9002\u5408\u5f00\u53d1ClickHouse\u7684\u66ff\u4ee3IDE\u3002\u5c3d\u7ba1\u4e0d\u592a\u7a33\u5b9a\uff0c\u4f46KDevelop\u8fd8\u662f\u4f5c\u4e3a\u4e00\u6b3e\u975e\u5e38\u4fbf\u6377\u7684IDE\u3002\u5982\u679cKDevelop\u5728\u6253\u5f00\u9879\u76ee\u540e\u4e0d\u4e45\u5d29\u6e83\uff0c\u5219\u60a8\u5e94\u8be5\u5728\u6253\u5f00\u9879\u76ee\u6587\u4ef6\u5217\u8868\u540e\u7acb\u5373\u5355\u51fb\xab\u5168\u90e8\u505c\u6b62\xbb\u6309\u94ae\u3002\u6309\u6b64\u5904\u7406\u540e\uff0cKDevelop\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u4f5c\u4e3a\u7b80\u6613\u7684\u4ee3\u7801\u7f16\u8f91\u5668\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528Sublime Text\u6216Visual Studio Code\u6216Kate\uff08\u5728Linux\u4e0a\u90fd\u53ef\u7528\uff09\u3002"),(0,a.kt)("p",null,"\u503c\u5f97\u4e00\u63d0\u7684\u662fCLion\u4f1a\u521b\u5efa\u81ea\u5df1\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"\u8def\u5f84\uff0c\u5b83\u8fd8\u4f1a\u81ea\u884c\u9009\u62e9",(0,a.kt)("inlineCode",{parentName:"p"},"debug"),"\u4f5c\u4e3a\u6784\u5efa\u7c7b\u578b\u3002\u5bf9\u4e8e\u914d\u7f6e\uff0c\u5b83\u4f7f\u7528CLion\u4e2d\u5b9a\u4e49\u7684CMake\u7248\u672c\uff0c\u800c\u4e0d\u662f\u60a8\u5b89\u88c5\u7684\u7248\u672c\u3002\u6700\u540e\uff0cCLion\u4f1a\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"make"),"\u800c\u4e0d\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"ninja"),"\u53bb\u6784\u5efa\u4efb\u52a1\u3002\u8fd9\u5c5e\u4e8e\u6b63\u5e38\u7684\u73b0\u8c61\uff0c\u8bf7\u8bb0\u4f4f\u8fd9\u4e00\u70b9\uff0c\u4ee5\u514d\u9020\u6210\u6df7\u6dc6\u3002"),(0,a.kt)("h1",{id:"bian-xie-dai-ma"},"\u7f16\u5199\u4ee3\u7801"),(0,a.kt)("p",null,"ClickHouse\u7684\u67b6\u6784\u63cf\u8ff0\u53ef\u4ee5\u5728\u6b64\u5904\u67e5\u770b\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/development/architecture/"},"https://clickhouse.com/docs/en/development/architecture/")),(0,a.kt)("p",null,"\u4ee3\u7801\u98ce\u683c\u6307\u5f15\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/development/style/"},"https://clickhouse.com/docs/en/development/style/")),(0,a.kt)("p",null,"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/development/tests/"},"https://clickhouse.com/docs/en/development/tests/")),(0,a.kt)("p",null,"\u4efb\u52a1\u5217\u8868\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/issues?q=is%3Aopen+is%3Aissue+label%3A%22easy+task%22"},"https://github.com/ClickHouse/ClickHouse/issues?q=is%3Aopen+is%3Aissue+label%3A%22easy+task%22")),(0,a.kt)("h1",{id:"ce-shi-shu-ju"},"\u6d4b\u8bd5\u6570\u636e"),(0,a.kt)("p",null,"\u5f00\u53d1ClickHouse\u901a\u5e38\u9700\u8981\u52a0\u8f7d\u73b0\u5b9e\u7684\u6570\u636e\u96c6\uff0c\u5c24\u5176\u662f\u5728\u6027\u80fd\u6d4b\u8bd5\u7684\u573a\u666f\u3002\u6211\u4eec\u53ef\u4ee5\u4eceYandex.Metrica\u83b7\u53d6\u4e00\u7ec4\u7279\u522b\u51c6\u5907\u7684\u533f\u540d\u6570\u636e\u3002\u8fd9\u4e9b\u6570\u636e\u9700\u8981\u989d\u5916\u4f7f\u75283GB\u7684\u7a7a\u95f2\u78c1\u76d8\u7a7a\u95f4\u3002\u8bf7\u6ce8\u610f\uff0c\u5b8c\u6210\u5927\u591a\u6570\u5f00\u53d1\u4efb\u52a1\u5e76\u4e0d\u9700\u8981\u6b64\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'sudo apt install wget xz-utils\n\nwget https://datasets.clickhouse.com/hits/tsv/hits_v1.tsv.xz\nwget https://datasets.clickhouse.com/visits/tsv/visits_v1.tsv.xz\n\nxz -v -d hits_v1.tsv.xz\nxz -v -d visits_v1.tsv.xz\n\nclickhouse-client\n\nCREATE TABLE test.hits ( WatchID UInt64,  JavaEnable UInt8,  Title String,  GoodEvent Int16,  EventTime DateTime,  EventDate Date,  CounterID UInt32,  ClientIP UInt32,  ClientIP6 FixedString(16),  RegionID UInt32,  UserID UInt64,  CounterClass Int8,  OS UInt8,  UserAgent UInt8,  URL String,  Referer String,  URLDomain String,  RefererDomain String,  Refresh UInt8,  IsRobot UInt8,  RefererCategories Array(UInt16),  URLCategories Array(UInt16),  URLRegions Array(UInt32),  RefererRegions Array(UInt32),  ResolutionWidth UInt16,  ResolutionHeight UInt16,  ResolutionDepth UInt8,  FlashMajor UInt8,  FlashMinor UInt8,  FlashMinor2 String,  NetMajor UInt8,  NetMinor UInt8,  UserAgentMajor UInt16,  UserAgentMinor FixedString(2),  CookieEnable UInt8,  JavascriptEnable UInt8,  IsMobile UInt8,  MobilePhone UInt8,  MobilePhoneModel String,  Params String,  IPNetworkID UInt32,  TraficSourceID Int8,  SearchEngineID UInt16,  SearchPhrase String,  AdvEngineID UInt8,  IsArtifical UInt8,  WindowClientWidth UInt16,  WindowClientHeight UInt16,  ClientTimeZone Int16,  ClientEventTime DateTime,  SilverlightVersion1 UInt8,  SilverlightVersion2 UInt8,  SilverlightVersion3 UInt32,  SilverlightVersion4 UInt16,  PageCharset String,  CodeVersion UInt32,  IsLink UInt8,  IsDownload UInt8,  IsNotBounce UInt8,  FUniqID UInt64,  HID UInt32,  IsOldCounter UInt8,  IsEvent UInt8,  IsParameter UInt8,  DontCountHits UInt8,  WithHash UInt8,  HitColor FixedString(1),  UTCEventTime DateTime,  Age UInt8,  Sex UInt8,  Income UInt8,  Interests UInt16,  Robotness UInt8,  GeneralInterests Array(UInt16),  RemoteIP UInt32,  RemoteIP6 FixedString(16),  WindowName Int32,  OpenerName Int32,  HistoryLength Int16,  BrowserLanguage FixedString(2),  BrowserCountry FixedString(2),  SocialNetwork String,  SocialAction String,  HTTPError UInt16,  SendTiming Int32,  DNSTiming Int32,  ConnectTiming Int32,  ResponseStartTiming Int32,  ResponseEndTiming Int32,  FetchTiming Int32,  RedirectTiming Int32,  DOMInteractiveTiming Int32,  DOMContentLoadedTiming Int32,  DOMCompleteTiming Int32,  LoadEventStartTiming Int32,  LoadEventEndTiming Int32,  NSToDOMContentLoadedTiming Int32,  FirstPaintTiming Int32,  RedirectCount Int8,  SocialSourceNetworkID UInt8,  SocialSourcePage String,  ParamPrice Int64,  ParamOrderID String,  ParamCurrency FixedString(3),  ParamCurrencyID UInt16,  GoalsReached Array(UInt32),  OpenstatServiceName String,  OpenstatCampaignID String,  OpenstatAdID String,  OpenstatSourceID String,  UTMSource String,  UTMMedium String,  UTMCampaign String,  UTMContent String,  UTMTerm String,  FromTag String,  HasGCLID UInt8,  RefererHash UInt64,  URLHash UInt64,  CLID UInt32,  YCLID UInt64,  ShareService String,  ShareURL String,  ShareTitle String,  `ParsedParams.Key1` Array(String),  `ParsedParams.Key2` Array(String),  `ParsedParams.Key3` Array(String),  `ParsedParams.Key4` Array(String),  `ParsedParams.Key5` Array(String),  `ParsedParams.ValueDouble` Array(Float64),  IslandID FixedString(16),  RequestNum UInt32,  RequestTry UInt8) ENGINE = MergeTree PARTITION BY toYYYYMM(EventDate) SAMPLE BY intHash32(UserID) ORDER BY (CounterID, EventDate, intHash32(UserID), EventTime);\n\nCREATE TABLE test.visits ( CounterID UInt32,  StartDate Date,  Sign Int8,  IsNew UInt8,  VisitID UInt64,  UserID UInt64,  StartTime DateTime,  Duration UInt32,  UTCStartTime DateTime,  PageViews Int32,  Hits Int32,  IsBounce UInt8,  Referer String,  StartURL String,  RefererDomain String,  StartURLDomain String,  EndURL String,  LinkURL String,  IsDownload UInt8,  TraficSourceID Int8,  SearchEngineID UInt16,  SearchPhrase String,  AdvEngineID UInt8,  PlaceID Int32,  RefererCategories Array(UInt16),  URLCategories Array(UInt16),  URLRegions Array(UInt32),  RefererRegions Array(UInt32),  IsYandex UInt8,  GoalReachesDepth Int32,  GoalReachesURL Int32,  GoalReachesAny Int32,  SocialSourceNetworkID UInt8,  SocialSourcePage String,  MobilePhoneModel String,  ClientEventTime DateTime,  RegionID UInt32,  ClientIP UInt32,  ClientIP6 FixedString(16),  RemoteIP UInt32,  RemoteIP6 FixedString(16),  IPNetworkID UInt32,  SilverlightVersion3 UInt32,  CodeVersion UInt32,  ResolutionWidth UInt16,  ResolutionHeight UInt16,  UserAgentMajor UInt16,  UserAgentMinor UInt16,  WindowClientWidth UInt16,  WindowClientHeight UInt16,  SilverlightVersion2 UInt8,  SilverlightVersion4 UInt16,  FlashVersion3 UInt16,  FlashVersion4 UInt16,  ClientTimeZone Int16,  OS UInt8,  UserAgent UInt8,  ResolutionDepth UInt8,  FlashMajor UInt8,  FlashMinor UInt8,  NetMajor UInt8,  NetMinor UInt8,  MobilePhone UInt8,  SilverlightVersion1 UInt8,  Age UInt8,  Sex UInt8,  Income UInt8,  JavaEnable UInt8,  CookieEnable UInt8,  JavascriptEnable UInt8,  IsMobile UInt8,  BrowserLanguage UInt16,  BrowserCountry UInt16,  Interests UInt16,  Robotness UInt8,  GeneralInterests Array(UInt16),  Params Array(String),  `Goals.ID` Array(UInt32),  `Goals.Serial` Array(UInt32),  `Goals.EventTime` Array(DateTime),  `Goals.Price` Array(Int64),  `Goals.OrderID` Array(String),  `Goals.CurrencyID` Array(UInt32),  WatchIDs Array(UInt64),  ParamSumPrice Int64,  ParamCurrency FixedString(3),  ParamCurrencyID UInt16,  ClickLogID UInt64,  ClickEventID Int32,  ClickGoodEvent Int32,  ClickEventTime DateTime,  ClickPriorityID Int32,  ClickPhraseID Int32,  ClickPageID Int32,  ClickPlaceID Int32,  ClickTypeID Int32,  ClickResourceID Int32,  ClickCost UInt32,  ClickClientIP UInt32,  ClickDomainID UInt32,  ClickURL String,  ClickAttempt UInt8,  ClickOrderID UInt32,  ClickBannerID UInt32,  ClickMarketCategoryID UInt32,  ClickMarketPP UInt32,  ClickMarketCategoryName String,  ClickMarketPPName String,  ClickAWAPSCampaignName String,  ClickPageName String,  ClickTargetType UInt16,  ClickTargetPhraseID UInt64,  ClickContextType UInt8,  ClickSelectType Int8,  ClickOptions String,  ClickGroupBannerID Int32,  OpenstatServiceName String,  OpenstatCampaignID String,  OpenstatAdID String,  OpenstatSourceID String,  UTMSource String,  UTMMedium String,  UTMCampaign String,  UTMContent String,  UTMTerm String,  FromTag String,  HasGCLID UInt8,  FirstVisit DateTime,  PredLastVisit Date,  LastVisit Date,  TotalVisits UInt32,  `TraficSource.ID` Array(Int8),  `TraficSource.SearchEngineID` Array(UInt16),  `TraficSource.AdvEngineID` Array(UInt8),  `TraficSource.PlaceID` Array(UInt16),  `TraficSource.SocialSourceNetworkID` Array(UInt8),  `TraficSource.Domain` Array(String),  `TraficSource.SearchPhrase` Array(String),  `TraficSource.SocialSourcePage` Array(String),  Attendance FixedString(16),  CLID UInt32,  YCLID UInt64,  NormalizedRefererHash UInt64,  SearchPhraseHash UInt64,  RefererDomainHash UInt64,  NormalizedStartURLHash UInt64,  StartURLDomainHash UInt64,  NormalizedEndURLHash UInt64,  TopLevelDomain UInt64,  URLScheme UInt64,  OpenstatServiceNameHash UInt64,  OpenstatCampaignIDHash UInt64,  OpenstatAdIDHash UInt64,  OpenstatSourceIDHash UInt64,  UTMSourceHash UInt64,  UTMMediumHash UInt64,  UTMCampaignHash UInt64,  UTMContentHash UInt64,  UTMTermHash UInt64,  FromHash UInt64,  WebVisorEnabled UInt8,  WebVisorActivity UInt32,  `ParsedParams.Key1` Array(String),  `ParsedParams.Key2` Array(String),  `ParsedParams.Key3` Array(String),  `ParsedParams.Key4` Array(String),  `ParsedParams.Key5` Array(String),  `ParsedParams.ValueDouble` Array(Float64),  `Market.Type` Array(UInt8),  `Market.GoalID` Array(UInt32),  `Market.OrderID` Array(String),  `Market.OrderPrice` Array(Int64),  `Market.PP` Array(UInt32),  `Market.DirectPlaceID` Array(UInt32),  `Market.DirectOrderID` Array(UInt32),  `Market.DirectBannerID` Array(UInt32),  `Market.GoodID` Array(String),  `Market.GoodName` Array(String),  `Market.GoodQuantity` Array(Int32),  `Market.GoodPrice` Array(Int64),  IslandID FixedString(16)) ENGINE = CollapsingMergeTree(Sign) PARTITION BY toYYYYMM(StartDate) SAMPLE BY intHash32(UserID) ORDER BY (CounterID, StartDate, intHash32(UserID), VisitID);\n\nclickhouse-client --max_insert_block_size 100000 --query "INSERT INTO test.hits FORMAT TSV" < hits_v1.tsv\nclickhouse-client --max_insert_block_size 100000 --query "INSERT INTO test.visits FORMAT TSV" < visits_v1.tsv\n')),(0,a.kt)("h1",{id:"chuang-jian-la-qu-qing-qiu"},"\u521b\u5efa\u62c9\u53d6\u8bf7\u6c42"),(0,a.kt)("p",null,"\u8fdb\u5165\u5230GitHub \u7528\u6237\u754c\u9762\u4e2d\u7684fork\u5e93\u3002\u5982\u679c\u60a8\u5df2\u7ecf\u5728\u67d0\u4e2a\u5206\u652f\u4e2d\u8fdb\u884c\u5f00\u53d1\uff0c\u5219\u9700\u8981\u9009\u62e9\u8be5\u5206\u652f\u3002\u5728\u5c4f\u5e55\u4e2d\u6709\u4e00\u4e2a \xab\u62c9\u53d6\u8bf7\u6c42\xbb\u7684\u6309\u94ae\u3002\u5b9e\u9645\u4e0a\u8fd9\u7b49\u4ef7\u4e8e\xab\u521b\u5efa\u4e00\u4e2a\u8bf7\u6c42\u4ee5\u63a5\u53d7\u5bf9\u4e3b\u5e93\u7684\u53d8\u66f4\xbb\u3002"),(0,a.kt)("p",null,"\u5373\u4f7f\u5de5\u4f5c\u5c1a\u672a\u5b8c\u6210\uff0c\u4e5f\u53ef\u4ee5\u521b\u5efa\u62c9\u53d6\u8bf7\u6c42\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bf7\u5728\u6807\u9898\u7684\u5f00\u5934\u52a0\u4e0a\xabWIP\xbb\uff08\u6b63\u5728\u8fdb\u884c\u4e2d\uff09\uff0c\u4ee5\u4fbf\u540e\u7eed\u66f4\u6539\u3002\u8fd9\u5bf9\u4e8e\u534f\u540c\u5ba1\u67e5\u548c\u8ba8\u8bba\u66f4\u6539\u4ee5\u53ca\u8fd0\u884c\u6240\u6709\u53ef\u7528\u6d4b\u8bd5\u7528\u4f8b\u5f88\u6709\u7528\u3002\u63d0\u4f9b\u6709\u5173\u53d8\u66f4\u7684\u7b80\u77ed\u63cf\u8ff0\u5f88\u91cd\u8981\uff0c\u8fd9\u5c06\u5728\u540e\u7eed\u7528\u4e8e\u751f\u6210\u91cd\u65b0\u53d1\u5e03\u53d8\u66f4\u65e5\u5fd7\u3002"),(0,a.kt)("p",null,"ClickHouse\u6210\u5458\u4e00\u65e6\u5728\u60a8\u7684\u62c9\u53d6\u8bf7\u6c42\u4e0a\u8d34\u4e0a\xab\u53ef\u4ee5\u6d4b\u8bd5\xbb\u6807\u7b7e\uff0c\u5c31\u4f1a\u5f00\u59cb\u6d4b\u8bd5\u3002\u4e00\u4e9b\u521d\u59cb\u68c0\u67e5\u9879\uff08\u4f8b\u5982\uff0c\u4ee3\u7801\u7c7b\u578b\uff09\u7684\u7ed3\u679c\u4f1a\u5728\u51e0\u5206\u949f\u5185\u53cd\u9988\u3002\u6784\u5efa\u7684\u68c0\u67e5\u7ed3\u679c\u5c06\u5728\u534a\u5c0f\u65f6\u5185\u5b8c\u6210\u3002\u800c\u4e3b\u8981\u7684\u6d4b\u8bd5\u7528\u4f8b\u96c6\u7ed3\u679c\u5c06\u5728\u4e00\u5c0f\u65f6\u5185\u62a5\u544a\u7ed9\u60a8\u3002"),(0,a.kt)("p",null,"\u7cfb\u7edf\u5c06\u5206\u522b\u4e3a\u60a8\u7684\u62c9\u53d6\u8bf7\u6c42\u51c6\u5907ClickHouse\u4e8c\u8fdb\u5236\u7248\u672c\u3002\u82e5\u8981\u68c0\u7d22\u8fd9\u4e9b\u6784\u5efa\u4fe1\u606f\uff0c\u8bf7\u5728\u68c0\u67e5\u5217\u8868\u4e2d\u5355\u51fb\xab ClickHouse\u6784\u5efa\u68c0\u67e5\xbb\u65c1\u8fb9\u7684\xab\u8be6\u7ec6\u4fe1\u606f\xbb\u94fe\u63a5\u3002\u5728\u8fd9\u91cc\uff0c\u60a8\u4f1a\u627e\u5230\u6307\u5411ClickHouse\u7684.deb\u8f6f\u4ef6\u5305\u7684\u76f4\u63a5\u94fe\u63a5\uff0c\u6b64\u5916\uff0c\u751a\u81f3\u53ef\u4ee5\u5c06\u5176\u90e8\u7f72\u5728\u751f\u4ea7\u670d\u52a1\u5668\u4e0a\uff08\u5982\u679c\u60a8\u4e0d\u62c5\u5fc3\uff09\u3002"),(0,a.kt)("p",null,"\u67d0\u4e9b\u6784\u5efa\u9879\u5f88\u53ef\u80fd\u4f1a\u5728\u9996\u6b21\u6784\u5efa\u65f6\u5931\u8d25\u3002\u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u540c\u65f6\u68c0\u67e5\u4e86\u57fa\u4e8egcc\u548cclang\u7684\u6784\u5efa\uff0c\u51e0\u4e4e\u6240\u6709\u73b0\u6709\u7684\u88abclang\u542f\u7528\u7684\u8b66\u544a\uff08\u603b\u662f\u5e26\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"-Werror"),"\u6807\u5fd7\uff09\u3002\u5728\u540c\u4e00\u9875\u9762\u4e0a\uff0c\u60a8\u53ef\u4ee5\u627e\u5230\u6240\u6709\u6784\u5efa\u7684\u65e5\u5fd7\uff0c\u56e0\u6b64\u4e0d\u5fc5\u4ee5\u6240\u6709\u53ef\u80fd\u7684\u65b9\u5f0f\u6784\u5efaClickHouse\u3002"))}d.isMDXComponent=!0}}]);