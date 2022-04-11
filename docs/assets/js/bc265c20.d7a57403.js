"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[31689],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return f}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var b=r.createContext({}),d=function(t){var e=r.useContext(b),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=d(t.components);return r.createElement(b.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,b=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=d(a),f=n,s=m["".concat(b,".").concat(f)]||m[f]||p[f]||l;return a?r.createElement(s,i(i({ref:e},c),{},{components:a})):r.createElement(s,i({ref:e},c))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var b in e)hasOwnProperty.call(e,b)&&(o[b]=e[b]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13910:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return b},default:function(){return f},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],o={sidebar_position:71,sidebar_label:"Third-Party Libraries",description:"A list of third-party libraries used"},b="Third-Party Libraries Used",d={unversionedId:"en/development/contrib",id:"en/development/contrib",title:"Third-Party Libraries Used",description:"A list of third-party libraries used",source:"@site/docs/en/development/contrib.md",sourceDirName:"en/development",slug:"/en/development/contrib",permalink:"/en/development/contrib",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/development/contrib.md",tags:[],version:"current",sidebarPosition:71,frontMatter:{sidebar_position:71,sidebar_label:"Third-Party Libraries",description:"A list of third-party libraries used"},sidebar:"english",previous:{title:"Testing",permalink:"/en/development/tests"},next:{title:"Source Code Browser",permalink:"/en/development/browse-code"}},c={},p=[{value:"Guidelines for adding new third-party libraries and maintaining custom changes in them",id:"adding-third-party-libraries",level:2}],m={toc:p};function f(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"third-party-libraries-used"},"Third-Party Libraries Used"),(0,l.kt)("p",null,"The list of third-party libraries:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Library name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"License type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"abseil-cpp"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/abseil-cpp/blob/4f3b686f86c3ebaba7e4e926e62a79cb1c659a54/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"AMQP-CPP"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/AMQP-CPP/blob/1a6c51f4ac51ac56610fa95081bd2f349911375a/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"arrow"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/arrow/blob/078e21bad344747b7656ef2d7a4f7410a0a303eb/LICENSE.txt"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"avro"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/avro/blob/e43c46e87fd32eafdc09471e95344555454c5ef8/LICENSE.txt"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"aws"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/aws-sdk-cpp/blob/7d48b2c8193679cc4516e5bd68ae4a64b94dae7d/LICENSE.txt"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"aws-c-common"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/aws-c-common/blob/736a82d1697c108b04a277e66438a7f4e19b6857/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"aws-c-event-stream"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/aws-c-event-stream/blob/3bc33662f9ccff4f4cbcf9509cc78c26e022fde0/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"aws-checksums"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/aws-checksums/blob/519d6d9093819b6cf89ffff589a27ef8f83d0f65/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"base64"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/Turbo-Base64/blob/af9b331f2b4f30b41c70f3a571ff904a8251c1d3/LICENSE"},"BSD 2-clause"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"boost"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/boost/blob/9cf09dbfd55a5c6202dedbdf40781a51b02c2675/LICENSE_1_0.txt"},"Boost"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"boringssl"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/boringssl/blob/a6a2e2ab3e44d97ce98e51c558e989f211de7eb3/LICENSE"},"BSD"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"brotli"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/google/brotli/blob/63be8a99401992075c23e99f7c84de1c653e39e2/LICENSE"},"MIT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"capnproto"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/capnproto/capnproto/blob/a00ccd91b3746ef2ab51d40fe3265829949d1ace/LICENSE"},"MIT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cassandra"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/cpp-driver/blob/eb9b68dadbb4417a2c132ad4a1c2fa76e65e6fc1/LICENSE.txt"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cctz"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/cctz/blob/c0f1bcb97fd2782f7c3f972fadd5aad5affac4b8/LICENSE.txt"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cityhash102"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse/ClickHouse/blob/master/contrib/cityhash102/COPYING"},"MIT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cppkafka"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/mfontanini/cppkafka/blob/5a119f689f8a4d90d10a9635e7ee2bee5c127de1/LICENSE"},"BSD 2-clause"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"croaring"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/RoaringBitmap/CRoaring/blob/2c867e9f9c9e2a3a7032791f94c4c7ae3013f6e0/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"curl"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/curl/curl/blob/3b8bbbbd1609c638a3d3d0acb148a33dedb67be3/docs/LICENSE-MIXING.md"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cyrus-sasl"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/cyrus-sasl/blob/e6466edfd638cc5073debe941c53345b18a09512/COPYING"},"BSD 2-clause"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"double-conversion"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/google/double-conversion/blob/cf2f0f3d547dc73b4612028a155b80536902ba02/LICENSE"},"BSD 3-clause"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dragonbox"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/dragonbox/blob/923705af6fd953aa948fc175f6020b15f7359838/LICENSE-Apache2-LLVM"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fast_float"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/fastfloat/fast_float/blob/7eae925b51fd0f570ccd5c880c12e3e27a23b86f/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fastops"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/fastops/blob/88752a5e03cf34639a4a37a4b41d8b463fffd2b5/LICENSE"},"MIT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"flatbuffers"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/flatbuffers/blob/eb3f827948241ce0e701516f16cd67324802bce9/LICENSE.txt"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fmtlib"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/fmtlib/fmt/blob/c108ee1d590089ccf642fc85652b845924067af2/LICENSE.rst"},"Unknown"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"gcem"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kthohr/gcem/blob/8d4f1b5d76ea8f6ff12f3f4f34cda45424556b00/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"googletest"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/google/googletest/blob/e7e591764baba0a0c3c9ad0014430e7a27331d16/LICENSE"},"BSD 3-clause"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"grpc"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/grpc/blob/60c986e15cae70aade721d26badabab1f822fdd6/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"h3"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/h3/blob/c7f46cfd71fb60e2fefc90e28abe81657deff735/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"hyperscan"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/hyperscan/blob/e9f08df0213fc637aac0a5bbde9beeaeba2fe9fa/LICENSE"},"Boost"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"icu"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/unicode-org/icu/blob/a56dde820dc35665a66f2e9ee8ba58e75049b668/icu4c/LICENSE"},"Public Domain"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"icudata"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/icudata/blob/72d9a4a7febc904e2b0a534ccb25ae40fac5f1e5/LICENSE"},"Public Domain"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"jemalloc"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/jemalloc/blob/e6891d9746143bf2cf617493d880ba5a0b9a3efd/COPYING"},"BSD 2-clause"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"krb5"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/krb5/blob/5149dea4e2be0f67707383d2682b897c14631374/src/lib/gssapi/LICENSE"},"MIT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libc-headers"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/libc-headers/blob/a720b7105a610acbd7427eea475a5b6810c151eb/LICENSE"},"LGPL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libcpuid"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/libcpuid/blob/8db3b8d2d32d22437f063ce692a1b9bb15e42d18/COPYING"},"BSD 2-clause"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libcxx"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/libcxx/blob/2fa892f69acbaa40f8a18c6484854a6183a34482/LICENSE.TXT"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libcxxabi"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/libcxxabi/blob/df8f1e727dbc9e2bedf2282096fa189dc3fe0076/LICENSE.TXT"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libdivide"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse/ClickHouse/blob/master/contrib/libdivide/LICENSE.txt"},"zLib"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libfarmhash"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse/ClickHouse/blob/master/contrib/libfarmhash/COPYING"},"MIT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libgsasl"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/libgsasl/blob/383ee28e82f69fa16ed43b48bd9c8ee5b313ab84/LICENSE"},"LGPL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libhdfs3"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/libhdfs3/blob/095b9d48b400abb72d967cb0539af13b1e3d90cf/LICENSE.txt"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libmetrohash"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse/ClickHouse/blob/master/contrib/libmetrohash/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libpq"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/libpq/blob/e071ea570f8985aa00e34f5b9d50a3cfe666327e/COPYRIGHT"},"Unknown"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libpqxx"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/libpqxx/blob/357608d11b7a1961c3fb7db2ef9a5dbb2e87da77/COPYING"},"BSD 3-clause"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"librdkafka"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/librdkafka/blob/b8554f1682062c85ba519eb54ef2f90e02b812cb/LICENSE.murmur2"},"MIT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libunwind"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/libunwind/blob/6b816d2fba3991f8fd6aaec17d92f68947eab667/LICENSE.TXT"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"libuv"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/libuv/blob/e2e9b7e9f978ce8a1367b5fe781d97d1ce9f94ab/LICENSE"},"BSD"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"llvm"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/llvm/blob/e5751459412bce1391fb7a2e9bbc01e131bf72f1/llvm/LICENSE.TXT"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"lz4"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/lz4/lz4/blob/f39b79fb02962a1cd880bbdecb6dffba4f754a11/LICENSE"},"BSD"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"mariadb-connector-c"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/mariadb-connector-c/blob/5f4034a3a6376416504f17186c55fe401c6d8e5e/COPYING.LIB"},"LGPL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"miniselect"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/danlark1/miniselect/blob/be0af6bd0b6eb044d1acc4f754b229972d99903a/LICENSE_1_0.txt"},"Boost"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"msgpack-c"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/msgpack/msgpack-c/blob/46684265d50b5d1b062d4c5c428ba08462844b1d/LICENSE_1_0.txt"},"Boost"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"murmurhash"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse/ClickHouse/blob/master/contrib/murmurhash/LICENSE"},"Public Domain"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"NuRaft"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/NuRaft/blob/7ecb16844af6a9c283ad432d85ecc2e7d1544676/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"openldap"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/openldap/blob/0208811b6043ca06fda8631a5e473df1ec515ccb/LICENSE"},"Unknown"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"orc"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/orc/blob/0a936f6bbdb9303308973073f8623b5a8d82eae1/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"poco"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/poco/blob/7351c4691b5d401f59e3959adfc5b4fa263b32da/LICENSE"},"Boost"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"protobuf"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/protobuf/blob/75601841d172c73ae6bf4ce8121f42b875cdbabd/LICENSE"},"BSD 3-clause"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"rapidjson"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/rapidjson/blob/c4ef90ccdbc21d5d5a628d08316bfd301e32d6fa/bin/jsonschema/LICENSE"},"MIT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"re2"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/google/re2/blob/13ebb377c6ad763ca61d12dd6f88b1126bd0b911/LICENSE"},"BSD 3-clause"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"replxx"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/replxx/blob/c81be6c68b146f15f2096b7ef80e3f21fe27004c/LICENSE.md"},"BSD 3-clause"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"rocksdb"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/rocksdb/blob/b6480c69bf3ab6e298e0d019a07fd4f69029b26a/LICENSE.leveldb"},"BSD 3-clause"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"s2geometry"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/s2geometry/blob/20ea540d81f4575a3fc0aea585aac611bcd03ede/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sentry-native"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/sentry-native/blob/94644e92f0a3ff14bd35ed902a8622a2d15f7be4/LICENSE"},"MIT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"simdjson"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/simdjson/simdjson/blob/8df32cea3359cb30120795da6020b3b73da01d38/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"snappy"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/google/snappy/blob/3f194acb57e0487531c96b97af61dcbd025a78a3/COPYING"},"Public Domain"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sparsehash-c11"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/sparsehash/sparsehash-c11/blob/cf0bffaa456f23bc4174462a789b90f8b6f5f42f/LICENSE"},"BSD 3-clause"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"stats"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kthohr/stats/blob/b6dd459c10a88c7ea04693c007e9e35820c5d9ad/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"thrift"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/thrift/blob/010ccf0a0c7023fea0f6bf4e4078ebdff7e61982/LICENSE"},"Apache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"unixodbc"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/UnixODBC/blob/b0ad30f7f6289c12b76f04bfb9d466374bb32168/COPYING"},"LGPL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"xz"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/xz-mirror/xz/blob/869b9d1b4edd6df07f819d360d306251f8147353/COPYING"},"Public Domain"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"zlib-ng"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ClickHouse-Extras/zlib-ng/blob/6a5e93b9007782115f7f7e5235dedc81c4f1facb/LICENSE.md"},"zLib"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"zstd"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/facebook/zstd/blob/a488ba114ec17ea1054b9057c26a046fc122b3b6/LICENSE"},"BSD"))))),(0,l.kt)("p",null,"The list of third-party libraries can be obtained by the following query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT library_name, license_type, license_path FROM system.licenses ORDER BY library_name COLLATE 'en';\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://gh-api.clickhouse.com/play?user=play#U0VMRUNUIGxpYnJhcnlfbmFtZSwgbGljZW5zZV90eXBlLCBsaWNlbnNlX3BhdGggRlJPTSBzeXN0ZW0ubGljZW5zZXMgT1JERVIgQlkgbGlicmFyeV9uYW1lIENPTExBVEUgJ2VuJw=="},"Example")),(0,l.kt)("h2",{id:"adding-third-party-libraries"},"Guidelines for adding new third-party libraries and maintaining custom changes in them"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"All external third-party code should reside in the dedicated directories under ",(0,l.kt)("inlineCode",{parentName:"li"},"contrib")," directory of ClickHouse repo. Prefer Git submodules, when available."),(0,l.kt)("li",{parentName:"ol"},"Fork/mirror the official repo in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse-Extras"},"Clickhouse-extras"),". Prefer official GitHub repos, when available."),(0,l.kt)("li",{parentName:"ol"},"Branch from the branch you want to integrate, e.g., ",(0,l.kt)("inlineCode",{parentName:"li"},"master")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse/master"),", or ",(0,l.kt)("inlineCode",{parentName:"li"},"release/vX.Y.Z")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse/release/vX.Y.Z"),"."),(0,l.kt)("li",{parentName:"ol"},"All forks in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse-Extras"},"Clickhouse-extras")," can be automatically synchronized with upstreams. ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse/...")," branches will remain unaffected, since virtually nobody is going to use that naming pattern in their upstream repos."),(0,l.kt)("li",{parentName:"ol"},"Add submodules under ",(0,l.kt)("inlineCode",{parentName:"li"},"contrib")," of ClickHouse repo that refer the above forks/mirrors. Set the submodules to track the corresponding ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse/...")," branches."),(0,l.kt)("li",{parentName:"ol"},"Every time the custom changes have to be made in the library code, a dedicated branch should be created, like ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse/my-fix"),". Then this branch should be merged into the branch, that is tracked by the submodule, e.g., ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse/master")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse/release/vX.Y.Z"),"."),(0,l.kt)("li",{parentName:"ol"},"No code should be pushed in any branch of the forks in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse-Extras"},"Clickhouse-extras"),", whose names do not follow ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse/...")," pattern."),(0,l.kt)("li",{parentName:"ol"},"Always write the custom changes with the official repo in mind. Once the PR is merged from (a feature/fix branch in) your personal fork into the fork in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse-Extras"},"Clickhouse-extras"),", and the submodule is bumped in ClickHouse repo, consider opening another PR from (a feature/fix branch in) the fork in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse-Extras"},"Clickhouse-extras")," to the official repo of the library. This will make sure, that 1) the contribution has more than a single use case and importance, 2) others will also benefit from it, 3) the change will not remain a maintenance burden solely on ClickHouse developers."),(0,l.kt)("li",{parentName:"ol"},"When a submodule needs to start using a newer code from the original branch (e.g., ",(0,l.kt)("inlineCode",{parentName:"li"},"master"),"), and since the custom changes might be merged in the branch it is tracking (e.g., ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse/master"),") and so it may diverge from its original counterpart (i.e., ",(0,l.kt)("inlineCode",{parentName:"li"},"master"),"), a careful merge should be carried out first, i.e., ",(0,l.kt)("inlineCode",{parentName:"li"},"master")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse/master"),", and only then the submodule can be bumped in ClickHouse.")))}f.isMDXComponent=!0}}]);