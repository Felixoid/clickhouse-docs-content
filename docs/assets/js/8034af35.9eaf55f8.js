"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[30174],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82117:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={},c="Kafka Producer",l={unversionedId:"en/integrations/kafka/code/producer/README",id:"en/integrations/kafka/code/producer/README",title:"Kafka Producer",description:"Supports ClickHouse documentation on Kafka.",source:"@site/docs/en/integrations/kafka/code/producer/README.md",sourceDirName:"en/integrations/kafka/code/producer",slug:"/en/integrations/kafka/code/producer/",permalink:"/docs/en/integrations/kafka/code/producer/",editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/kafka/code/producer/README.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"Kafka Connect Configurations",permalink:"/docs/en/integrations/kafka/code/connectors/"},next:{title:"MySQL",permalink:"/docs/en/integrations/mysql"}},u={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Not in scope",id:"not-in-scope",level:2},{value:"Large Datasets",id:"large-datasets",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kafka-producer"},"Kafka Producer"),(0,o.kt)("p",null,"Supports ",(0,o.kt)("a",{parentName:"p",href:"../../"},"ClickHouse documentation on Kafka"),"."),(0,o.kt)("p",null,"This is a simple Kafka producer written in Python for ndjson data. It ensures a schema is set for the JSON - either generating a schema or using a specified one."),(0,o.kt)("p",null,"Schemas are required for tools such as the Kafka JDBC sink."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python 3.8.10+"),(0,o.kt)("li",{parentName:"ul"},"Kafka instance v7+. Easiest solution is to create a Kafka cluster in Confluent Cloud - which offers an adequate free tier."),(0,o.kt)("li",{parentName:"ul"},"Ndjson file. A sample github ndjson file can be found ",(0,o.kt)("a",{parentName:"li",href:"https://datasets-documentation.s3.eu-west-3.amazonaws.com/kafka/github_all_columns.ndjson"},"here")," with accompanying config for the script ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/kafka-samples/blob/main/producer/github.config"},"here"),". See ",(0,o.kt)("a",{parentName:"li",href:"#larger-datasets"},"Larger Datasets")," if a larger test file is required.")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pip install -r requirements.txt")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Prepare a configuration. See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/kafka-samples/blob/main/producer/github.config"},"github.config")," for examples. Any target topic will be automatically created if it doesn't exist."),(0,o.kt)("li",{parentName:"ol"},"(Optional) Prepare a ",(0,o.kt)("a",{parentName:"li",href:"https://json-schema.org/"},"JSON schema file")," for your ndjson and specify this in the config from (1) via ",(0,o.kt)("inlineCode",{parentName:"li"},"input.schema"),". To infer a schema automatically do not set this parameter. This will cause the schema to be inferred from the first 100 lines. This is best effort only (but works for the gitub dataset)!"),(0,o.kt)("li",{parentName:"ol"},"Run it!")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"python producer.py -c <config_file>")),(0,o.kt)("h2",{id:"not-in-scope"},"Not in scope"),(0,o.kt)("p",null,"Whilst all producer configuration parameters supported by the ",(0,o.kt)("a",{parentName:"p",href:"https://kafka-python.readthedocs.io/en/master/apidoc/KafkaProducer.html"},"Kafka python client")," can be used - replace ",(0,o.kt)("inlineCode",{parentName:"p"},"_")," with ",(0,o.kt)("inlineCode",{parentName:"p"},".")," in the configuration, no work has been done regards testing these settings for optimal performance."),(0,o.kt)("h2",{id:"large-datasets"},"Large Datasets"),(0,o.kt)("p",null,"The sample ",(0,o.kt)("a",{parentName:"p",href:"https://datasets-documentation.s3.eu-west-3.amazonaws.com/kafka/github_all_columns.ndjson"},"Github dataset")," consists of events on the ClickHouse Github repository. This static files covers the period ",(0,o.kt)("inlineCode",{parentName:"p"},"2019-09-23")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"2022-01-05"),"."),(0,o.kt)("p",null,"Specifically, this file was generated from the following command executed against the ",(0,o.kt)("a",{parentName:"p",href:"https://ghe.clickhouse.tech/#clickhouse-demo-access"},"ClickHouse play site"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client --secure --host play.clickhouse.com --port 9440 --user explorer --query \"SELECT file_time, event_type, actor_login, repo_name, created_at, updated_at, action, comment_id, path, ref, ref_type, creator_user_login, number, title, labels, state, assignee, assignees, closed_at, merged_at, merge_commit_sha, requested_reviewers, merged_by, review_comments, member_login FROM github_events WHERE repo_name = 'ClickHouse/ClickHouse' ORDER BY created_at ASC LIMIT 200000 FORMAT JSONEachRow\" > github_all_columns.ndjson\n")),(0,o.kt)("p",null,"Note the upper limit 200k rows and restriction to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ClickHouse/ClickHouse")," repository. Feel free to use this command to generate larger datasets for testing, potentially exploring other repositories. If you experience quota limits, instructions for downloading and transforming the data can be found ",(0,o.kt)("a",{parentName:"p",href:"https://ghe.clickhouse.tech/#download-the-dataset"},"here"),"."))}d.isMDXComponent=!0}}]);