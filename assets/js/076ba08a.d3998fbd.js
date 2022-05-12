"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[91141],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9065:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),s=["components"],i={sidebar_position:56,sidebar_label:"JSON"},o="Functions for Working with JSON",p={unversionedId:"en/sql-reference/functions/json-functions",id:"en/sql-reference/functions/json-functions",title:"Functions for Working with JSON",description:"functions-for-working-with-json}",source:"@site/docs/en/sql-reference/functions/json-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/json-functions",permalink:"/docs/en/sql-reference/functions/json-functions",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/json-functions.md",tags:[],version:"current",sidebarPosition:56,frontMatter:{sidebar_position:56,sidebar_label:"JSON"},sidebar:"english",previous:{title:"IP Addresses",permalink:"/docs/en/sql-reference/functions/ip-address-functions"},next:{title:"External Dictionaries",permalink:"/docs/en/sql-reference/functions/ext-dict-functions"}},c={},u=[{value:"visitParamHas(params, name)",id:"visitparamhasparams-name",level:2},{value:"visitParamExtractUInt(params, name)",id:"visitparamextractuintparams-name",level:2},{value:"visitParamExtractInt(params, name)",id:"visitparamextractintparams-name",level:2},{value:"visitParamExtractFloat(params, name)",id:"visitparamextractfloatparams-name",level:2},{value:"visitParamExtractBool(params, name)",id:"visitparamextractboolparams-name",level:2},{value:"visitParamExtractRaw(params, name)",id:"visitparamextractrawparams-name",level:2},{value:"visitParamExtractString(params, name)",id:"visitparamextractstringparams-name",level:2},{value:"isValidJSON(json)",id:"isvalidjsonjson",level:2},{value:"JSONHas(json[, indices_or_keys]\u2026)",id:"jsonhasjson-indices-or-keys",level:2},{value:"JSONLength(json[, indices_or_keys]\u2026)",id:"jsonlengthjson-indices-or-keys",level:2},{value:"JSONType(json[, indices_or_keys]\u2026)",id:"jsontypejson-indices-or-keys",level:2},{value:"JSONExtractUInt(json[, indices_or_keys]\u2026)",id:"jsonextractuintjson-indices-or-keys",level:2},{value:"JSONExtractInt(json[, indices_or_keys]\u2026)",id:"jsonextractintjson-indices-or-keys",level:2},{value:"JSONExtractFloat(json[, indices_or_keys]\u2026)",id:"jsonextractfloatjson-indices-or-keys",level:2},{value:"JSONExtractBool(json[, indices_or_keys]\u2026)",id:"jsonextractbooljson-indices-or-keys",level:2},{value:"JSONExtractString(json[, indices_or_keys]\u2026)",id:"jsonextractstringjson-indices-or-keys",level:2},{value:"JSONExtract(json[, indices_or_keys\u2026], Return_type)",id:"jsonextractjson-indices-or-keys-return-type",level:2},{value:"JSONExtractKeysAndValues(json[, indices_or_keys\u2026], Value_type)",id:"jsonextractkeysandvaluesjson-indices-or-keys-value-type",level:2},{value:"JSONExtractKeys",id:"jsonextractkeysjson-indices-or-keys",level:2},{value:"JSONExtractRaw(json[, indices_or_keys]\u2026)",id:"jsonextractrawjson-indices-or-keys",level:2},{value:"JSONExtractArrayRaw(json[, indices_or_keys\u2026])",id:"jsonextractarrayrawjson-indices-or-keys",level:2},{value:"JSONExtractKeysAndValuesRaw",id:"json-extract-keys-and-values-raw",level:2},{value:"JSON_EXISTS(json, path)",id:"json-exists",level:2},{value:"JSON_QUERY(json, path)",id:"json-query",level:2},{value:"JSON_VALUE(json, path)",id:"json-value",level:2},{value:"toJSONString",id:"tojsonstring",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"functions-for-working-with-json"},"Functions for Working with JSON"),(0,l.kt)("p",null,"ClickHouse has special functions for working with this JSON. All the JSON functions are based on strong assumptions about what the JSON can be, but they try to do as little as possible to get the job done."),(0,l.kt)("p",null,"The following assumptions are made:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The field name (function argument) must be a constant."),(0,l.kt)("li",{parentName:"ol"},"The field name is somehow canonically encoded in JSON. For example: ",(0,l.kt)("inlineCode",{parentName:"li"},"visitParamHas('{\"abc\":\"def\"}', 'abc') = 1"),", but ",(0,l.kt)("inlineCode",{parentName:"li"},"visitParamHas('{\"\\\\u0061\\\\u0062\\\\u0063\":\"def\"}', 'abc') = 0")),(0,l.kt)("li",{parentName:"ol"},"Fields are searched for on any nesting level, indiscriminately. If there are multiple matching fields, the first occurrence is used."),(0,l.kt)("li",{parentName:"ol"},"The JSON does not have space characters outside of string literals.")),(0,l.kt)("h2",{id:"visitparamhasparams-name"},"visitParamHas(params, name)"),(0,l.kt)("p",null,"Checks whether there is a field with the ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," name."),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"simpleJSONHas"),"."),(0,l.kt)("h2",{id:"visitparamextractuintparams-name"},"visitParamExtractUInt(params, name)"),(0,l.kt)("p",null,"Parses UInt64 from the value of the field named ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),". If this is a string field, it tries to parse a number from the beginning of the string. If the field does not exist, or it exists but does not contain a number, it returns 0."),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"simpleJSONExtractUInt"),"."),(0,l.kt)("h2",{id:"visitparamextractintparams-name"},"visitParamExtractInt(params, name)"),(0,l.kt)("p",null,"The same as for Int64."),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"simpleJSONExtractInt"),"."),(0,l.kt)("h2",{id:"visitparamextractfloatparams-name"},"visitParamExtractFloat(params, name)"),(0,l.kt)("p",null,"The same as for Float64."),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"simpleJSONExtractFloat"),"."),(0,l.kt)("h2",{id:"visitparamextractboolparams-name"},"visitParamExtractBool(params, name)"),(0,l.kt)("p",null,"Parses a true/false value. The result is UInt8."),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"simpleJSONExtractBool"),"."),(0,l.kt)("h2",{id:"visitparamextractrawparams-name"},"visitParamExtractRaw(params, name)"),(0,l.kt)("p",null,"Returns the value of a field, including separators."),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"simpleJSONExtractRaw"),"."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"visitParamExtractRaw('{\"abc\":\"\\\\n\\\\u0000\"}', 'abc') = '\"\\\\n\\\\u0000\"';\nvisitParamExtractRaw('{\"abc\":{\"def\":[1,2,3]}}', 'abc') = '{\"def\":[1,2,3]}';\n")),(0,l.kt)("h2",{id:"visitparamextractstringparams-name"},"visitParamExtractString(params, name)"),(0,l.kt)("p",null,"Parses the string in double quotes. The value is unescaped. If unescaping failed, it returns an empty string."),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"simpleJSONExtractString"),"."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"visitParamExtractString('{\"abc\":\"\\\\n\\\\u0000\"}', 'abc') = '\\n\\0';\nvisitParamExtractString('{\"abc\":\"\\\\u263a\"}', 'abc') = '\u263a';\nvisitParamExtractString('{\"abc\":\"\\\\u263\"}', 'abc') = '';\nvisitParamExtractString('{\"abc\":\"hello}', 'abc') = '';\n")),(0,l.kt)("p",null,"There is currently no support for code points in the format ",(0,l.kt)("inlineCode",{parentName:"p"},"\\uXXXX\\uYYYY")," that are not from the basic multilingual plane (they are converted to CESU-8 instead of UTF-8)."),(0,l.kt)("p",null,"The following functions are based on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lemire/simdjson"},"simdjson")," designed for more complex JSON parsing requirements. The assumption 2 mentioned above still applies."),(0,l.kt)("h2",{id:"isvalidjsonjson"},"isValidJSON(json)"),(0,l.kt)("p",null,"Checks that passed string is a valid json."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT isValidJSON(\'{"a": "hello", "b": [-100, 200.0, 300]}\') = 1\nSELECT isValidJSON(\'not a json\') = 0\n')),(0,l.kt)("h2",{id:"jsonhasjson-indices-or-keys"},"JSONHas(json","[",", indices_or_keys","]","\u2026)"),(0,l.kt)("p",null,"If the value exists in the JSON document, ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," will be returned."),(0,l.kt)("p",null,"If the value does not exist, ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," will be returned."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT JSONHas(\'{"a": "hello", "b": [-100, 200.0, 300]}\', \'b\') = 1\nSELECT JSONHas(\'{"a": "hello", "b": [-100, 200.0, 300]}\', \'b\', 4) = 0\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"indices_or_keys")," is a list of zero or more arguments each of them can be either string or integer."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"String = access object member by key."),(0,l.kt)("li",{parentName:"ul"},"Positive integer = access the n-th member/key from the beginning."),(0,l.kt)("li",{parentName:"ul"},"Negative integer = access the n-th member/key from the end.")),(0,l.kt)("p",null,"Minimum index of the element is 1. Thus the element 0 does not exist."),(0,l.kt)("p",null,"You may use integers to access both JSON arrays and JSON objects."),(0,l.kt)("p",null,"So, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT JSONExtractKey(\'{"a": "hello", "b": [-100, 200.0, 300]}\', 1) = \'a\'\nSELECT JSONExtractKey(\'{"a": "hello", "b": [-100, 200.0, 300]}\', 2) = \'b\'\nSELECT JSONExtractKey(\'{"a": "hello", "b": [-100, 200.0, 300]}\', -1) = \'b\'\nSELECT JSONExtractKey(\'{"a": "hello", "b": [-100, 200.0, 300]}\', -2) = \'a\'\nSELECT JSONExtractString(\'{"a": "hello", "b": [-100, 200.0, 300]}\', 1) = \'hello\'\n')),(0,l.kt)("h2",{id:"jsonlengthjson-indices-or-keys"},"JSONLength(json","[",", indices_or_keys","]","\u2026)"),(0,l.kt)("p",null,"Return the length of a JSON array or a JSON object."),(0,l.kt)("p",null,"If the value does not exist or has a wrong type, ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," will be returned."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT JSONLength(\'{"a": "hello", "b": [-100, 200.0, 300]}\', \'b\') = 3\nSELECT JSONLength(\'{"a": "hello", "b": [-100, 200.0, 300]}\') = 2\n')),(0,l.kt)("h2",{id:"jsontypejson-indices-or-keys"},"JSONType(json","[",", indices_or_keys","]","\u2026)"),(0,l.kt)("p",null,"Return the type of a JSON value."),(0,l.kt)("p",null,"If the value does not exist, ",(0,l.kt)("inlineCode",{parentName:"p"},"Null")," will be returned."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT JSONType(\'{"a": "hello", "b": [-100, 200.0, 300]}\') = \'Object\'\nSELECT JSONType(\'{"a": "hello", "b": [-100, 200.0, 300]}\', \'a\') = \'String\'\nSELECT JSONType(\'{"a": "hello", "b": [-100, 200.0, 300]}\', \'b\') = \'Array\'\n')),(0,l.kt)("h2",{id:"jsonextractuintjson-indices-or-keys"},"JSONExtractUInt(json","[",", indices_or_keys","]","\u2026)"),(0,l.kt)("h2",{id:"jsonextractintjson-indices-or-keys"},"JSONExtractInt(json","[",", indices_or_keys","]","\u2026)"),(0,l.kt)("h2",{id:"jsonextractfloatjson-indices-or-keys"},"JSONExtractFloat(json","[",", indices_or_keys","]","\u2026)"),(0,l.kt)("h2",{id:"jsonextractbooljson-indices-or-keys"},"JSONExtractBool(json","[",", indices_or_keys","]","\u2026)"),(0,l.kt)("p",null,"Parses a JSON and extract a value. These functions are similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"visitParam")," functions."),(0,l.kt)("p",null,"If the value does not exist or has a wrong type, ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," will be returned."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT JSONExtractInt(\'{"a": "hello", "b": [-100, 200.0, 300]}\', \'b\', 1) = -100\nSELECT JSONExtractFloat(\'{"a": "hello", "b": [-100, 200.0, 300]}\', \'b\', 2) = 200.0\nSELECT JSONExtractUInt(\'{"a": "hello", "b": [-100, 200.0, 300]}\', \'b\', -1) = 300\n')),(0,l.kt)("h2",{id:"jsonextractstringjson-indices-or-keys"},"JSONExtractString(json","[",", indices_or_keys","]","\u2026)"),(0,l.kt)("p",null,"Parses a JSON and extract a string. This function is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"visitParamExtractString")," functions."),(0,l.kt)("p",null,"If the value does not exist or has a wrong type, an empty string will be returned."),(0,l.kt)("p",null,"The value is unescaped. If unescaping failed, it returns an empty string."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT JSONExtractString('{\"a\": \"hello\", \"b\": [-100, 200.0, 300]}', 'a') = 'hello'\nSELECT JSONExtractString('{\"abc\":\"\\\\n\\\\u0000\"}', 'abc') = '\\n\\0'\nSELECT JSONExtractString('{\"abc\":\"\\\\u263a\"}', 'abc') = '\u263a'\nSELECT JSONExtractString('{\"abc\":\"\\\\u263\"}', 'abc') = ''\nSELECT JSONExtractString('{\"abc\":\"hello}', 'abc') = ''\n")),(0,l.kt)("h2",{id:"jsonextractjson-indices-or-keys-return-type"},"JSONExtract(json","[",", indices_or_keys\u2026","]",", Return_type)"),(0,l.kt)("p",null,"Parses a JSON and extract a value of the given ClickHouse data type."),(0,l.kt)("p",null,"This is a generalization of the previous ",(0,l.kt)("inlineCode",{parentName:"p"},"JSONExtract<type>")," functions.\nThis means\n",(0,l.kt)("inlineCode",{parentName:"p"},"JSONExtract(..., 'String')")," returns exactly the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"JSONExtractString()"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"JSONExtract(..., 'Float64')")," returns exactly the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"JSONExtractFloat()"),"."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT JSONExtract('{\"a\": \"hello\", \"b\": [-100, 200.0, 300]}', 'Tuple(String, Array(Float64))') = ('hello',[-100,200,300])\nSELECT JSONExtract('{\"a\": \"hello\", \"b\": [-100, 200.0, 300]}', 'Tuple(b Array(Float64), a String)') = ([-100,200,300],'hello')\nSELECT JSONExtract('{\"a\": \"hello\", \"b\": [-100, 200.0, 300]}', 'b', 'Array(Nullable(Int8))') = [-100, NULL, NULL]\nSELECT JSONExtract('{\"a\": \"hello\", \"b\": [-100, 200.0, 300]}', 'b', 4, 'Nullable(Int64)') = NULL\nSELECT JSONExtract('{\"passed\": true}', 'passed', 'UInt8') = 1\nSELECT JSONExtract('{\"day\": \"Thursday\"}', 'day', 'Enum8(\\'Sunday\\' = 0, \\'Monday\\' = 1, \\'Tuesday\\' = 2, \\'Wednesday\\' = 3, \\'Thursday\\' = 4, \\'Friday\\' = 5, \\'Saturday\\' = 6)') = 'Thursday'\nSELECT JSONExtract('{\"day\": 5}', 'day', 'Enum8(\\'Sunday\\' = 0, \\'Monday\\' = 1, \\'Tuesday\\' = 2, \\'Wednesday\\' = 3, \\'Thursday\\' = 4, \\'Friday\\' = 5, \\'Saturday\\' = 6)') = 'Friday'\n")),(0,l.kt)("h2",{id:"jsonextractkeysandvaluesjson-indices-or-keys-value-type"},"JSONExtractKeysAndValues(json","[",", indices_or_keys\u2026","]",", Value_type)"),(0,l.kt)("p",null,"Parses key-value pairs from a JSON where the values are of the given ClickHouse data type."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT JSONExtractKeysAndValues('{\"x\": {\"a\": 5, \"b\": 7, \"c\": 11}}', 'x', 'Int8') = [('a',5),('b',7),('c',11)];\n")),(0,l.kt)("h2",{id:"jsonextractkeysjson-indices-or-keys"},"JSONExtractKeys"),(0,l.kt)("p",null,"Parses a JSON string and extracts the keys."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"JSONExtractKeys(json[, a, b, c...])\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"json")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String")," with valid JSON."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a, b, c...")," \u2014 Comma-separated indices or keys that specify the path to the inner field in a nested JSON object. Each argument can be either a ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String")," to get the field by the key or an ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Integer")," to get the N-th field (indexed from 1, negative integers count from the end). If not set, the whole JSON is parsed as the top-level object. Optional parameter.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("p",null,"Array with the keys of the JSON."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT JSONExtractKeys(\'{"a": "hello", "b": [-100, 200.0, 300]}\');\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"text\n\u250c\u2500JSONExtractKeys('{\"a\": \"hello\", \"b\": [-100, 200.0, 300]}')\u2500\u2510\n\u2502 ['a','b']                                                  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"jsonextractrawjson-indices-or-keys"},"JSONExtractRaw(json","[",", indices_or_keys","]","\u2026)"),(0,l.kt)("p",null,"Returns a part of JSON as unparsed string."),(0,l.kt)("p",null,"If the part does not exist or has a wrong type, an empty string will be returned."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT JSONExtractRaw('{\"a\": \"hello\", \"b\": [-100, 200.0, 300]}', 'b') = '[-100, 200.0, 300]';\n")),(0,l.kt)("h2",{id:"jsonextractarrayrawjson-indices-or-keys"},"JSONExtractArrayRaw(json","[",", indices_or_keys\u2026","]",")"),(0,l.kt)("p",null,"Returns an array with elements of JSON array, each represented as unparsed string."),(0,l.kt)("p",null,"If the part does not exist or isn\u2019t array, an empty array will be returned."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT JSONExtractArrayRaw('{\"a\": \"hello\", \"b\": [-100, 200.0, \"hello\"]}', 'b') = ['-100', '200.0', '\"hello\"'];\n")),(0,l.kt)("h2",{id:"json-extract-keys-and-values-raw"},"JSONExtractKeysAndValuesRaw"),(0,l.kt)("p",null,"Extracts raw data from a JSON object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"JSONExtractKeysAndValuesRaw(json[, p, a, t, h])\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"json")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String")," with valid JSON."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"p, a, t, h")," \u2014 Comma-separated indices or keys that specify the path to the inner field in a nested JSON object. Each argument can be either a ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"string")," to get the field by the key or an ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"integer")," to get the N-th field (indexed from 1, negative integers count from the end). If not set, the whole JSON is parsed as the top-level object. Optional parameter.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Array with ",(0,l.kt)("inlineCode",{parentName:"li"},"('key', 'value')")," tuples. Both tuple members are strings."),(0,l.kt)("li",{parentName:"ul"},"Empty array if the requested object does not exist, or input JSON is invalid.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"(",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT JSONExtractKeysAndValuesRaw(\'{"a": [-100, 200.0], "b":{"c": {"d": "hello", "f": "world"}}}\');\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'\u250c\u2500JSONExtractKeysAndValuesRaw(\'{"a": [-100, 200.0], "b":{"c": {"d": "hello", "f": "world"}}}\')\u2500\u2510\n\u2502 [(\'a\',\'[-100,200]\'),(\'b\',\'{"c":{"d":"hello","f":"world"}}\')]                                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT JSONExtractKeysAndValuesRaw(\'{"a": [-100, 200.0], "b":{"c": {"d": "hello", "f": "world"}}}\', \'b\');\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'\u250c\u2500JSONExtractKeysAndValuesRaw(\'{"a": [-100, 200.0], "b":{"c": {"d": "hello", "f": "world"}}}\', \'b\')\u2500\u2510\n\u2502 [(\'c\',\'{"d":"hello","f":"world"}\')]                                                               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT JSONExtractKeysAndValuesRaw(\'{"a": [-100, 200.0], "b":{"c": {"d": "hello", "f": "world"}}}\', -1, \'c\');\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'\u250c\u2500JSONExtractKeysAndValuesRaw(\'{"a": [-100, 200.0], "b":{"c": {"d": "hello", "f": "world"}}}\', -1, \'c\')\u2500\u2510\n\u2502 [(\'d\',\'"hello"\'),(\'f\',\'"world"\')]                                                                     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')),(0,l.kt)("h2",{id:"json-exists"},"JSON_EXISTS(json, path)"),(0,l.kt)("p",null,"If the value exists in the JSON document, ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," will be returned."),(0,l.kt)("p",null,"If the value does not exist, ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," will be returned."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT JSON_EXISTS('{\"hello\":1}', '$.hello');\nSELECT JSON_EXISTS('{\"hello\":{\"world\":1}}', '$.hello.world');\nSELECT JSON_EXISTS('{\"hello\":[\"world\"]}', '$.hello[*]');\nSELECT JSON_EXISTS('{\"hello\":[\"world\"]}', '$.hello[0]');\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Before version 21.11 the order of arguments was wrong, i.e. JSON_EXISTS(path, json)"))),(0,l.kt)("h2",{id:"json-query"},"JSON_QUERY(json, path)"),(0,l.kt)("p",null,"Parses a JSON and extract a value as JSON array or JSON object."),(0,l.kt)("p",null,"If the value does not exist, an empty string will be returned."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT JSON_QUERY('{\"hello\":\"world\"}', '$.hello');\nSELECT JSON_QUERY('{\"array\":[[0, 1, 2, 3, 4, 5], [0, -1, -2, -3, -4, -5]]}', '$.array[*][0 to 2, 4]');\nSELECT JSON_QUERY('{\"hello\":2}', '$.hello');\nSELECT toTypeName(JSON_QUERY('{\"hello\":2}', '$.hello'));\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'["world"]\n[0, 1, 4, 0, -1, -4]\n[2]\nString\n')),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Before version 21.11 the order of arguments was wrong, i.e. JSON_QUERY(path, json)"))),(0,l.kt)("h2",{id:"json-value"},"JSON_VALUE(json, path)"),(0,l.kt)("p",null,"Parses a JSON and extract a value as JSON scalar."),(0,l.kt)("p",null,"If the value does not exist, an empty string will be returned."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT JSON_VALUE('{\"hello\":\"world\"}', '$.hello');\nSELECT JSON_VALUE('{\"array\":[[0, 1, 2, 3, 4, 5], [0, -1, -2, -3, -4, -5]]}', '$.array[*][0 to 2, 4]');\nSELECT JSON_VALUE('{\"hello\":2}', '$.hello');\nSELECT toTypeName(JSON_VALUE('{\"hello\":2}', '$.hello'));\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"world\n0\n2\nString\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Before version 21.11 the order of arguments was wrong, i.e. JSON_VALUE(path, json)"))),(0,l.kt)("h2",{id:"tojsonstring"},"toJSONString"),(0,l.kt)("p",null,"Serializes a value to its JSON representation. Various data types and nested structures are supported.\n64-bit ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"integers")," or bigger (like ",(0,l.kt)("inlineCode",{parentName:"p"},"UInt64")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Int128"),") are enclosed in quotes by default. ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#session_settings-output_format_json_quote_64bit_integers"},"output_format_json_quote_64bit_integers")," controls this behavior.\nSpecial values ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"inf")," are replaced with ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),". Enable ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#settings-output_format_json_quote_denormals"},"output_format_json_quote_denormals")," setting to show them.\nWhen serializing an ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/enum"},"Enum")," value, the function outputs its name."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"toJSONString(value)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," \u2014 Value to serialize. Value may be of any data type.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JSON representation of the value.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"The first example shows serialization of a ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/map"},"Map"),".\nThe second example shows some special values wrapped into a ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toJSONString(map('key1', 1, 'key2', 2));\nSELECT toJSONString(tuple(1.25, NULL, NaN, +inf, -inf, [])) SETTINGS output_format_json_quote_denormals = 1;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'{"key1":1,"key2":2}\n[1.25,null,"nan","inf","-inf",[]]\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#session_settings-output_format_json_quote_64bit_integers"},"output_format_json_quote_64bit_integers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#settings-output_format_json_quote_denormals"},"output_format_json_quote_denormals"))))}m.isMDXComponent=!0}}]);