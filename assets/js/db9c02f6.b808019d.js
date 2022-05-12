"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[38300],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47209:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={sidebar_label:"Kafka Connect HTTP Connector",sidebar_position:7,description:"Using HTTP Connector Sink with Kafka Connect and ClickHouse"},s="HTTP Sink Connector",c={unversionedId:"en/integrations/kafka/kafka-connect-http",id:"en/integrations/kafka/kafka-connect-http",title:"HTTP Sink Connector",description:"Using HTTP Connector Sink with Kafka Connect and ClickHouse",source:"@site/docs/en/integrations/kafka/kafka-connect-http.md",sourceDirName:"en/integrations/kafka",slug:"/en/integrations/kafka/kafka-connect-http",permalink:"/docs/en/integrations/kafka/kafka-connect-http",editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/kafka/kafka-connect-http.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Kafka Connect HTTP Connector",sidebar_position:7,description:"Using HTTP Connector Sink with Kafka Connect and ClickHouse"},sidebar:"english",previous:{title:"Kafka Connect JDBC Connector",permalink:"/docs/en/integrations/kafka/kafka-connect-jdbc"},next:{title:"Vector with Kafka",permalink:"/docs/en/integrations/kafka/kafka-vector"}},u={},p=[{value:"Self-Managed",id:"self-managed",level:2},{value:"Steps",id:"steps",level:3},{value:"1. Install Kafka Connect and Connector",id:"1-install-kafka-connect-and-connector",level:4},{value:"2. Prepare Configuration",id:"2-prepare-configuration",level:4},{value:"3. Create the ClickHouse table",id:"3-create-the-clickhouse-table",level:4},{value:"4. Add data to Kafka",id:"4-add-data-to-kafka",level:4},{value:"Confluent Cloud",id:"confluent-cloud",level:2}],d={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"http-sink-connector"},"HTTP Sink Connector"),(0,r.kt)("p",null,"The HTTP Sink Connector has several advantages over the JDBC approach. Principally, it is data type agnostic and thus does not need a Kafka schema as well as supporting ClickHouse specific data types such as Maps and Arrays. This additional flexibility comes at a slight increase in configuration complexity."),(0,r.kt)("p",null,"We repeat the example of pulling messages from a single Kafka topic and inserting rows into a ClickHouse table. Note that this example preserves the Array fields of the Github dataset (which are removed for the JDBC Sink example via the insertion script). We assume you have an empty github topic in the examples and use kcat for message insertion to Kafka."),(0,r.kt)("h2",{id:"self-managed"},"Self-Managed"),(0,r.kt)("h3",{id:"steps"},"Steps"),(0,r.kt)("h4",{id:"1-install-kafka-connect-and-connector"},"1. Install Kafka Connect and Connector"),(0,r.kt)("p",null,"Download the Confluent package and install it locally. Follow the installation instructions for installing the connector as documented ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/kafka-connect-http/current/overview.html"},"here"),"."),(0,r.kt)("p",null,"If you use the confluent-hub installation method, your local configuration files will be updated."),(0,r.kt)("h4",{id:"2-prepare-configuration"},"2. Prepare Configuration"),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/cloud/current/cp-component/connect-cloud-config.html#set-up-a-local-connect-worker-with-cp-install"},"these instructions")," for setting up Connect relevant to your installation type, noting the differences between a standalone and distributed cluster. If using Confluent Cloud, the distributed setup is relevant."),(0,r.kt)("p",null,"The most important parameter is the ",(0,r.kt)("inlineCode",{parentName:"p"},"http.api.url"),". The ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/http/"},"HTTP interface")," for ClickHouse requires you to encode the INSERT statement as a parameter in the URL. This must include the format (",(0,r.kt)("inlineCode",{parentName:"p"},"JSONEachRow")," in this case) and target database. The format must be consistent with the Kafka data, which will be converted to a string in the HTTP payload. These parameters must be URL escaped. An example of this format for the Github dataset (assuming you are running ClickHouse locally) is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<protocol>://<clickhouse_host>:<clickhouse_port>?query=INSERT%20INTO%20<database>.<table>%20FORMAT%20JSONEachRow\n\nhttp://localhost:8123?query=INSERT%20INTO%20default.github%20FORMAT%20JSONEachRow\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This URL is error-prone. Ensure escaping is precise to avoid issues.")),(0,r.kt)("p",null,"The following additional parameters are relevant to using the HTTP Sink with ClickHouse. A complete parameter list can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/kafka-connect-http/current/connector_config.html"},"here"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request.method")," - Set to POST**"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"retry.on.status.codes")," - Set to 400-500 to retry on any error codes. Refine based expected errors in data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request.body.format")," - In most cases this will be JSON."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auth.type")," - Set to BASIC if you security with ClickHouse. Other ClickHouse compatible authentication mechanisms are not currently supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ssl.enabled")," - set to true if using SSL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headers"),' - set to "Content-Type: application/json"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connection.user")," - username for ClickHouse."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connection.password")," - password for ClickHouse."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"batch.max.size")," - The number of rows to send in a single batch. Ensure this set is to an appropriately large number. Per ClickHouse ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/introduction/performance/#performance-when-inserting-data"},"recommendations")," a value of 1000 is should be considered a minimum."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tasks.max")," - The HTTP Sink connector supports running one or more tasks. This can be used to increase performance. Along with batch size this represents your primary means of improving performance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key.converter")," - set according to the types of your keys."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value.converter")," - set based on the type of data on your topic. This data does not need a schema. The format here must be consistent with the FORMAT specified in the parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"http.api.url"),". The simplest here is to use JSON and the org.apache.kafka.connect.json.JsonConverter converter. Treating the value as a string, via the converter org.apache.kafka.connect.storage.StringConverter, is also possible - although this will require the user to extract a value in the insert statement using functions. Avro format is also supported in ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/interfaces/formats/#data-format-avro"},"ClickHouse")," if using the io.confluent.connect.avro.AvroConverter converter.  ")),(0,r.kt)("p",null,"A full list of settings, including how to configure a proxy, retries, and advanced SSL, can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/kafka-connect-http/current/connector_config.html"},"here"),"."),(0,r.kt)("p",null,"Example configuration files for the Github sample data can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/integrations/kafka/code/connectors/http_sink"},"here"),", assuming Connect is run in standalone mode and Kafka is hosted in Confluent Cloud."),(0,r.kt)("h4",{id:"3-create-the-clickhouse-table"},"3. Create the ClickHouse table"),(0,r.kt)("p",null,"Ensure the table has been created. An example for a minimal github dataset using a standard MergeTree is shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE github\n(\n    file_time DateTime,\n    event_type Enum('CommitCommentEvent' = 1, 'CreateEvent' = 2, 'DeleteEvent' = 3, 'ForkEvent' = 4,'GollumEvent' = 5, 'IssueCommentEvent' = 6, 'IssuesEvent' = 7, 'MemberEvent' = 8, 'PublicEvent' = 9, 'PullRequestEvent' = 10, 'PullRequestReviewCommentEvent' = 11, 'PushEvent' = 12, 'ReleaseEvent' = 13, 'SponsorshipEvent' = 14, 'WatchEvent' = 15, 'GistEvent' = 16, 'FollowEvent' = 17, 'DownloadEvent' = 18, 'PullRequestReviewEvent' = 19, 'ForkApplyEvent' = 20, 'Event' = 21, 'TeamAddEvent' = 22),\n    actor_login LowCardinality(String),\n    repo_name LowCardinality(String),\n    created_at DateTime,\n    updated_at DateTime,\n    action Enum('none' = 0, 'created' = 1, 'added' = 2, 'edited' = 3, 'deleted' = 4, 'opened' = 5, 'closed' = 6, 'reopened' = 7, 'assigned' = 8, 'unassigned' = 9, 'labeled' = 10, 'unlabeled' = 11, 'review_requested' = 12, 'review_request_removed' = 13, 'synchronize' = 14, 'started' = 15, 'published' = 16, 'update' = 17, 'create' = 18, 'fork' = 19, 'merged' = 20),\n    comment_id UInt64,\n    path String,\n    ref LowCardinality(String),\n    ref_type Enum('none' = 0, 'branch' = 1, 'tag' = 2, 'repository' = 3, 'unknown' = 4),\n    creator_user_login LowCardinality(String),\n    number UInt32,\n    title String,\n    labels Array(LowCardinality(String)),\n    state Enum('none' = 0, 'open' = 1, 'closed' = 2),\n    assignee LowCardinality(String),\n    assignees Array(LowCardinality(String)),\n    closed_at DateTime,\n    merged_at DateTime,\n    merge_commit_sha String,\n    requested_reviewers Array(LowCardinality(String)),\n    merged_by LowCardinality(String),\n    review_comments UInt32,\n    member_login LowCardinality(String)\n) ENGINE = MergeTree ORDER BY (event_type, repo_name, created_at)\n\n")),(0,r.kt)("h4",{id:"4-add-data-to-kafka"},"4. Add data to Kafka"),(0,r.kt)("p",null,"Insert messages to Kafka. Below we use kcat to insert 10k messages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"head -n 10000 github_all_columns.ndjson | kafkacat -b <host>:<port> -X security.protocol=sasl_ssl -X sasl.mechanisms=PLAIN -X sasl.username=<username>  -X sasl.password=<password> -t github\n")),(0,r.kt)("p",null,"A simple read on the target table \u201cGithub\u201d should confirm the insertion of data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM default.github;\n\n| count\\(\\) |\n| :--- |\n| 10000 |\n\n")),(0,r.kt)("h2",{id:"confluent-cloud"},"Confluent Cloud"),(0,r.kt)("p",null,"A fully managed version of HTTP Sink is available for those using Confluent Cloud for their Kafka hosting. This requires your ClickHouse environment to be accessible from Confluent Cloud. We assume you have taken the appropriate measures to secure this."),(0,r.kt)("p",null,"The instructions for creating an HTTP Sink in Confluent Cloud can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/cloud/current/connectors/cc-http-sink.html"},"here"),". The following settings are relevant if connecting to ClickHouse. If not specified, form defaults are applicable:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Input messages")," - Depends on your source data but in most cases JSON or Avro. We assume JSON in the following settings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Kafka Cluster credentials")," - Confluent cloud allows you to generate these for the appropriate topic from which you wish to pull messages."),(0,r.kt)("li",{parentName:"ul"},"HTTP server details - The connection details for ClickHouse. Specifically:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HTTP Url")," - This should be of the same format as the self-managed configuration parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"http.api.url i.e. &lt;protocol>://&lt;clickhouse_host>:&lt;clickhouse_port>?query=INSERT%20INTO%20&lt;database>.&lt;table>%20FORMAT%20JSONEachRow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HTTP Request Method")," - Set to POST"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HTTP Headers")," - \u201cContent Type: application/json\u201d"))),(0,r.kt)("li",{parentName:"ul"},"HTTP server batches",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Request Body Format")," - json"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Batch batch size")," - Per ClickHouse recommendations, set this to at least 1000."))),(0,r.kt)("li",{parentName:"ul"},"HTTP server authentication",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Endpoint Authentication type")," - BASIC"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Auth username")," - ClickHouse username"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Auth password")," - ClickHouse password"))),(0,r.kt)("li",{parentName:"ul"},"HTTP server retries - Settings here can be adjusted according to requirements. Timeouts specifically may need adjusting depending on latency.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Retry on HTTP codes")," - 400-500 but adapt as required e.g. this may change if you have an HTTP proxy in front of ClickHouse."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Maximum Reties")," - the default (10) is appropriate but feel to adjust for more robust retries.")))),(0,r.kt)("img",{src:n(53481).Z,class:"image",alt:"Connecting Confluent HTTP Sink",style:{width:"50%"}}))}m.isMDXComponent=!0},53481:function(e,t,n){t.Z=n.p+"assets/images/kafka_05-701f3b01632023ddc1e67a5be36b7cf9.png"}}]);