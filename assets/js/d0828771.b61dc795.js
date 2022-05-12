"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[99662],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77088:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={sidebar_position:35,sidebar_label:"ALTER"},l="ALTER",c={unversionedId:"en/sql-reference/statements/alter/index",id:"en/sql-reference/statements/alter/index",title:"ALTER",description:"Most ALTER TABLE queries modify table settings or data:",source:"@site/docs/en/sql-reference/statements/alter/index.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/",permalink:"/docs/en/sql-reference/statements/alter/",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/alter/index.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35,sidebar_label:"ALTER"},sidebar:"english",previous:{title:"SETTINGS PROFILE",permalink:"/docs/en/sql-reference/statements/create/settings-profile"},next:{title:"COLUMN",permalink:"/docs/en/sql-reference/statements/alter/column"}},p={},m=[{value:"Mutations",id:"mutations",level:2},{value:"Synchronicity of ALTER Queries",id:"synchronicity-of-alter-queries",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"alter"},"ALTER"),(0,i.kt)("p",null,"Most ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," queries modify table settings or data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/column"},"COLUMN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/partition"},"PARTITION")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/delete"},"DELETE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/update"},"UPDATE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/order-by"},"ORDER BY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/index/"},"INDEX")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/constraint"},"CONSTRAINT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/ttl"},"TTL"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Most ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," queries are supported only for ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/"},"*","MergeTree")," tables, as well as ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/merge"},"Merge")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/distributed"},"Distributed"),"."))),(0,i.kt)("p",null,"These ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER")," statements manipulate views:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/view"},"ALTER TABLE ... MODIFY QUERY")," \u2014 Modifies a ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/create/view#materialized"},"Materialized view")," structure."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/view#alter-live-view"},"ALTER LIVE VIEW")," \u2014 Refreshes a ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/create/view#live-view"},"Live view"),".")),(0,i.kt)("p",null,"These ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER")," statements modify entities related to role-based access control:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/user"},"USER")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/role"},"ROLE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/quota"},"QUOTA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/row-policy"},"ROW POLICY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/settings-profile"},"SETTINGS PROFILE"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/comment"},"ALTER TABLE ... MODIFY COMMENT")," statement adds, modifies, or removes comments to the table, regardless if it was set before or not."),(0,i.kt)("h2",{id:"mutations"},"Mutations"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ALTER")," queries that are intended to manipulate table data are implemented with a mechanism called \u201cmutations\u201d, most notably ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/delete"},"ALTER TABLE \u2026 DELETE")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/update"},"ALTER TABLE \u2026 UPDATE"),". They are asynchronous background processes similar to merges in ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/"},"MergeTree")," tables that to produce new \u201cmutated\u201d versions of parts."),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"*MergeTree")," tables mutations execute by ",(0,i.kt)("strong",{parentName:"p"},"rewriting whole data parts"),". There is no atomicity - parts are substituted for mutated parts as soon as they are ready and a ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query that started executing during a mutation will see data from parts that have already been mutated along with data from parts that have not been mutated yet."),(0,i.kt)("p",null,"Mutations are totally ordered by their creation order and are applied to each part in that order. Mutations are also partially ordered with ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," queries: data that was inserted into the table before the mutation was submitted will be mutated and data that was inserted after that will not be mutated. Note that mutations do not block inserts in any way."),(0,i.kt)("p",null,"A mutation query returns immediately after the mutation entry is added (in case of replicated tables to ZooKeeper, for non-replicated tables - to the filesystem). The mutation itself executes asynchronously using the system profile settings. To track the progress of mutations you can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/mutations#system_tables-mutations"},(0,i.kt)("inlineCode",{parentName:"a"},"system.mutations"))," table. A mutation that was successfully submitted will continue to execute even if ClickHouse servers are restarted. There is no way to roll back the mutation once it is submitted, but if the mutation is stuck for some reason it can be cancelled with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/misc#kill-mutation"},(0,i.kt)("inlineCode",{parentName:"a"},"KILL MUTATION"))," query."),(0,i.kt)("p",null,"Entries for finished mutations are not deleted right away (the number of preserved entries is determined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"finished_mutations_to_keep")," storage engine parameter). Older mutation entries are deleted."),(0,i.kt)("h2",{id:"synchronicity-of-alter-queries"},"Synchronicity of ALTER Queries"),(0,i.kt)("p",null,"For non-replicated tables, all ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER")," queries are performed synchronously. For replicated tables, the query just adds instructions for the appropriate actions to ",(0,i.kt)("inlineCode",{parentName:"p"},"ZooKeeper"),", and the actions themselves are performed as soon as possible. However, the query can wait for these actions to be completed on all the replicas."),(0,i.kt)("p",null,"For all ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER")," queries, you can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#replication-alter-partitions-sync"},"replication_alter_partitions_sync")," setting to set up waiting."),(0,i.kt)("p",null,"You can specify how long (in seconds) to wait for inactive replicas to execute all ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER")," queries with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#replication-wait-for-inactive-replica-timeout"},"replication_wait_for_inactive_replica_timeout")," setting."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For all ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER")," queries, if ",(0,i.kt)("inlineCode",{parentName:"p"},"replication_alter_partitions_sync = 2")," and some replicas are not active for more than the time, specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"replication_wait_for_inactive_replica_timeout")," setting, then an exception ",(0,i.kt)("inlineCode",{parentName:"p"},"UNFINISHED")," is thrown."))),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... UPDATE|DELETE")," queries the synchronicity is defined by the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#mutations_sync"},"mutations_sync")," setting."))}u.isMDXComponent=!0}}]);