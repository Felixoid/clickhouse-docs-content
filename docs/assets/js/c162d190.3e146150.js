"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[77042],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95569:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:67,sidebar_label:"\u5982\u4f55\u5728Linux\u4e0a\u6784\u5efaClickHouse for AARCH64\uff08ARM64)"},l="\u5982\u4f55\u5728Linux\u4e0a\u4e3aAARCH64\uff08ARM64\uff09\u67b6\u6784\u6784\u5efaClickHouse",u={unversionedId:"zh/development/build-cross-arm",id:"zh/development/build-cross-arm",title:"\u5982\u4f55\u5728Linux\u4e0a\u4e3aAARCH64\uff08ARM64\uff09\u67b6\u6784\u6784\u5efaClickHouse",description:"how-to-build-clickhouse-on-linux-for-aarch64-arm64-architecture}",source:"@site/docs/zh/development/build-cross-arm.md",sourceDirName:"zh/development",slug:"/zh/development/build-cross-arm",permalink:"/zh/development/build-cross-arm",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/development/build-cross-arm.md",tags:[],version:"current",sidebarPosition:67,frontMatter:{machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:67,sidebar_label:"\u5982\u4f55\u5728Linux\u4e0a\u6784\u5efaClickHouse for AARCH64\uff08ARM64)"},sidebar:"chinese",previous:{title:"\u6d4f\u89c8\u6e90\u4ee3\u7801",permalink:"/zh/development/browse-code"},next:{title:"\u5982\u4f55\u5c06\u6d4b\u8bd5\u67e5\u8be2\u6dfb\u52a0\u5230 ClickHouse CI",permalink:"/zh/development/adding_test_queries"}},s={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-build-clickhouse-on-linux-for-aarch64-arm64-architecture"},"\u5982\u4f55\u5728Linux\u4e0a\u4e3aAARCH64\uff08ARM64\uff09\u67b6\u6784\u6784\u5efaClickHouse"),(0,o.kt)("p",null,"\u8fd9\u662f\u5f53\u4f60\u6709Linux\u673a\u5668\uff0c\u5e76\u5e0c\u671b\u4f7f\u7528\u5b83\u6765\u6784\u5efa\u7684\u60c5\u51b5\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u5c06\u8fd0\u884c\u5728\u53e6\u4e00\u4e2aLinux\u673a\u5668\u4e0a\u4e0eAARCH64CPU\u67b6\u6784\u3002 \u8fd9\u9002\u7528\u4e8e\u5728Linux\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u7684\u6301\u7eed\u96c6\u6210\u68c0\u67e5\u3002"),(0,o.kt)("p",null,"Aarch64\u7684\u4ea4\u53c9\u6784\u5efa\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"/zh/development/build"},"\u6784\u5efa\u8bf4\u660e")," \u5148\u8ddf\u7740\u4ed6\u4eec"),(0,o.kt)("h1",{id:"install-clang-8"},"\u5b89\u88c5Clang-8"),(0,o.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u8bf4\u660e\u64cd\u4f5c",(0,o.kt)("a",{parentName:"p",href:"https://apt.llvm.org/%E4%B8%BA%E6%82%A8%E7%9A%84Ubuntu%E6%88%96Debian%E8%AE%BE%E7%BD%AE"},"https://apt.llvm.org/\u4e3a\u60a8\u7684Ubuntu\u6216Debian\u8bbe\u7f6e"),".\n\u4f8b\u5982\uff0c\u5728Ubuntu Bionic\u4e2d\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo "deb [trusted=yes] http://apt.llvm.org/bionic/ llvm-toolchain-bionic-8 main" | sudo tee /etc/apt/sources.list.d/llvm.list\nsudo apt-get update\nsudo apt-get install clang-8\n')),(0,o.kt)("h1",{id:"install-cross-compilation-toolset"},"\u5b89\u88c5\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u96c6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse\nmkdir -p build-aarch64/cmake/toolchain/linux-aarch64\nwget 'https://developer.arm.com/-/media/Files/downloads/gnu-a/8.3-2019.03/binrel/gcc-arm-8.3-2019.03-x86_64-aarch64-linux-gnu.tar.xz?revision=2e88a73f-d233-4f96-b1f4-d8b36e9bb0b9&la=en' -O gcc-arm-8.3-2019.03-x86_64-aarch64-linux-gnu.tar.xz\ntar xJf gcc-arm-8.3-2019.03-x86_64-aarch64-linux-gnu.tar.xz -C build-aarch64/cmake/toolchain/linux-aarch64 --strip-components=1\n")),(0,o.kt)("h1",{id:"build-clickhouse"},"\u5efa\u7acbClickHouse"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse\nmkdir build-arm64\nCC=clang-8 CXX=clang++-8 cmake . -Bbuild-arm64 -DCMAKE_TOOLCHAIN_FILE=cmake/linux/toolchain-aarch64.cmake\nninja -C build-arm64\n")),(0,o.kt)("p",null,"\u751f\u6210\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u5c06\u4ec5\u5728\u5177\u6709AARCH64CPU\u4f53\u7cfb\u7ed3\u6784\u7684Linux\u4e0a\u8fd0\u884c\u3002"))}m.isMDXComponent=!0}}]);