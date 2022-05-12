"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41412],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,u=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||u;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=n.length,o=new Array(u);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<u;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14043:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),u=(n(67294),n(3905)),o=["components"],a={},l="\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 Rust \u0432 ClickHouse.",c={unversionedId:"ru/development/integrating_rust_libraries",id:"ru/development/integrating_rust_libraries",title:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 Rust \u0432 ClickHouse.",description:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a \u0431\u0443\u0434\u0435\u0442 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u0439 \u0434\u043b\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 BLAKE3.",source:"@site/docs/ru/development/integrating_rust_libraries.md",sourceDirName:"ru/development",slug:"/ru/development/integrating_rust_libraries",permalink:"/docs/ru/development/integrating_rust_libraries",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/development/integrating_rust_libraries.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f \u043f\u043e \u043a\u043e\u0434\u0443 ClickHouse",permalink:"/docs/ru/development/browse-code"},next:{title:"\u041a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438",permalink:"/docs/ru/commercial/"}},s={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,u.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f-\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a-\u043d\u0430-\u044f\u0437\u044b\u043a\u0435-rust-\u0432-clickhouse"},"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 Rust \u0432 ClickHouse."),(0,u.kt)("p",null,"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a \u0431\u0443\u0434\u0435\u0442 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u0439 \u0434\u043b\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 BLAKE3."),(0,u.kt)("p",null,"\u041f\u0435\u0440\u0432\u044b\u043c \u0448\u0430\u0433\u043e\u043c \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0444\u043e\u0440\u043a\u0430 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0434\u043b\u044f \u0432\u043d\u0435\u0441\u0435\u043d\u0438\u044f \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0438\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u043f\u043e \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u043d\u0430 Rust \u0441 C/C++."),(0,u.kt)("p",null,"\u0412 \u0444\u043e\u0440\u043a\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e Cargo.toml, \u0441\u043c\u0435\u043d\u0438\u0432 \u0442\u0430\u0440\u0433\u0435\u0442 \u043d\u0430 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c crate cbindgen \u0434\u043b\u044f \u0435\u0433\u043e \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u0438 \u0441\u0431\u043e\u0440\u043a\u0435."),(0,u.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043b\u0438\u0431\u043e \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0431\u043e\u0440\u043e\u0447\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442 build.rs, \u0434\u043e\u0431\u0430\u0432\u0438\u0432 \u0432 \u043d\u0435\u0433\u043e \u0437\u0430\u043f\u0443\u0441\u043a cbindgen - \u0430\u0432\u0442\u043e\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u0447\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 .h. \u041f\u0440\u0438\u043c\u0435\u0440 \u0442\u0430\u043a\u043e\u0433\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043c\u043e\u0436\u043d\u043e \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0432 build.rs \u0434\u043b\u044f BLAKE3:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'    let crate_dir = env::var("CARGO_MANIFEST_DIR").unwrap();\n\n    let package_name = env::var("CARGO_PKG_NAME").unwrap();\n    let output_file = ("include/".to_owned() + &format!("{}.h", package_name)).to_string();\n\n    match cbindgen::generate(&crate_dir) {\n        Ok(header) => {\n            header.write_to_file(&output_file);\n        }\n        Err(err) => {\n            panic!("{}", err)\n        }\n    }\n')),(0,u.kt)("p",null,"\u0421\u043a\u0440\u0438\u043f\u0442 \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0437\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0447\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u0438 \u0432 \u043a\u043e\u043d\u0446\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043c\u0435\u0442\u043e\u0434 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 cbindgen."),(0,u.kt)("p",null,"\u0414\u0430\u043b\u0435\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 \u043a CMake. \u0412 BLAKE3 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0431\u044b\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0434\u0432\u0430 \u0444\u0430\u0439\u043b\u0430 - CMakeLists.txt \u0438 \u0444\u0430\u0439\u043b, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 cargo build \u043a\u0430\u043a \u0442\u0430\u0440\u0433\u0435\u0442\u0430, - build_rust_lib.cmake. \u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0441\u0442\u043e\u0438\u0442 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c\u0443\u044e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 \u0438 \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0441\u0442\u0432\u0438\u0438 \u0441 \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u044b\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u0434\u043b\u044f \u0441\u0431\u043e\u0440\u043a\u0438 - \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043b\u0430\u0433\u0438 \u0438\u043b\u0438 \u043a\u0430\u043a\u0438\u0435-\u043b\u0438\u0431\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440."),(0,u.kt)("p",null,"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 CMake, \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u0442\u044c \u043a \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u043c\u0435\u0442\u043e\u0434\u043e\u0432-\u043f\u0440\u043e\u0441\u043b\u043e\u0435\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0430\u0442 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0438 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430 ClickHouse. \u0412 \u0447\u0430\u0441\u0442\u043d\u043e\u0441\u0442\u0438, \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u0430\u043a\u043e\u0439 \u043c\u0435\u0442\u043e\u0434, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 \u0434\u043b\u044f BLAKE3:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'#[no_mangle]\npub unsafe extern "C" fn blake3_apply_shim(\n    begin: *const c_char,\n    _size: u32,\n    out_char_data: *mut u8,\n) -> *mut c_char {\n    if begin.is_null() {\n        let err_str = CString::new("input was a null pointer").unwrap();\n        return err_str.into_raw();\n    }\n    let mut hasher = Hasher::new();\n    let input_bytes = CStr::from_ptr(begin);\n    let input_res = input_bytes.to_bytes();\n    hasher.update(input_res);\n    let mut reader = hasher.finalize_xof();\n    reader.fill(std::slice::from_raw_parts_mut(out_char_data, OUT_LEN));\n    std::ptr::null_mut()\n}\n')),(0,u.kt)("p",null,"\u041d\u0430 \u0432\u0445\u043e\u0434 \u043c\u0435\u0442\u043e\u0434 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u0432 C-\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435, \u0435\u0451 \u0440\u0430\u0437\u043c\u0435\u0440 \u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043b\u043e\u0436\u0435\u043d \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0438\u043c\u0435\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u043e\u0448\u0438\u0431\u043a\u0443, \u043c\u0435\u0442\u043e\u0434 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u0441 \u043d\u0435\u0439 \u043a\u0430\u043a \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u0430\u0431\u043e\u0442\u044b (\u0438 \u043d\u0443\u043b\u0435\u0432\u043e\u0439 \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044f \u043e\u0448\u0438\u0431\u043e\u043a). C-\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b\u0435 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u043c\u0435\u0442\u043e\u0434\u0430\u0445 BLAKE3, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u043d\u0438 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c \u0441\u043e\u043e\u0442\u0432\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440 \u0438 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0432 \u043f\u0440\u0438\u0432\u044b\u0447\u043d\u044b\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u044b \u0434\u043b\u044f \u044f\u0437\u044b\u043a\u0430 Rust. \u0414\u0430\u043b\u0435\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438. \u0418\u0445 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0432 C-\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b, \u043e\u0434\u043d\u0430\u043a\u043e \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044f \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u044c \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043f\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044e *mut u8."),(0,u.kt)("p",null,"\u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0441\u0442\u043e\u0438\u0442 \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442\u0430 #","[no_mangle]",' \u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f extern "C" \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0442\u0430\u043a\u0438\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432. \u0411\u0435\u0437 \u043d\u0438\u0445 \u043d\u0435 \u0443\u0434\u0430\u0441\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u0443\u044e \u0441 C/C++ \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u044e \u0438 \u0430\u0432\u0442\u043e\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044e \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432.'),(0,u.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u044e \u0438 \u0440\u0430\u0431\u043e\u0442\u0443 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u043d\u0430 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0434\u043b\u044f \u0432\u044b\u044f\u0432\u043b\u044f\u0435\u043d\u0438\u044f \u043d\u0435\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0438 \u043e\u0448\u0438\u0431\u043e\u043a. \u0415\u0441\u043b\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u043f\u0440\u043e\u0431\u0435\u043c\u044b \u0441 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0435\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432, \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0435\u0439 cbindgen \u0447\u0435\u0440\u0435\u0437 \u0444\u0430\u0439\u043b cbindgen.toml, \u043d\u0430\u0439\u0442\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u043d\u043e \u043b\u0438\u0431\u043e \u0432 BLAKE3, \u043b\u0438\u0431\u043e \u0432\u0437\u044f\u0432 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043c\u043f\u043b\u0435\u0439\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 cbindgen: ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/eqrion/cbindgen/blob/master/template.toml"},"https://github.com/eqrion/cbindgen/blob/master/template.toml"),"."),(0,u.kt)("p",null,"\u0412 \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435, \u0441\u0442\u043e\u0438\u0442 \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043f\u0430\u0440\u0443 \u043f\u0440\u043e\u0431\u0435\u043b\u043c, \u0432\u043e\u0437\u043d\u0438\u043a\u0448\u0438\u0445 \u043f\u0440\u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 BLAKE3:\n1) \u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438 \u0432 build.rs \u0438 \u0432 build_rust_lib.cmake \u0432 \u0441\u0432\u044f\u0437\u0438 \u0441\u043e \u0441\u0432\u043e\u0438\u043c\u0438 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044f\u043c\u0438.\n2) MemorySanitizer \u043f\u043b\u043e\u0445\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u043f\u0430\u043c\u044f\u0442\u0438 \u0432 Rust, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0434\u043b\u044f \u0438\u0437\u0431\u0435\u0436\u0430\u043d\u0438\u044f \u043b\u043e\u0436\u043d\u043e\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u043d\u0438\u0439 \u0434\u043b\u044f BLAKE3 \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u043e\u043b\u0435\u0435 \u044f\u0432\u043d\u043e, \u043d\u043e \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435, \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043b \u043f\u0430\u043c\u044f\u0442\u044c. \u041e\u043d \u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u0431\u043e\u0440\u043a\u0438 \u0441 MemorySanitizer \u0438 \u0432 \u0440\u0435\u043b\u0438\u0437 \u043d\u0435 \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442. \u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b \u0438 \u0431\u043e\u043b\u0435\u0435 \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u044b \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u044d\u0442\u043e\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b, \u043d\u043e \u043f\u0440\u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 BLAKE3 \u043e\u043d\u0438 \u043d\u0435 \u0431\u044b\u043b\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u044b."))}d.isMDXComponent=!0}}]);