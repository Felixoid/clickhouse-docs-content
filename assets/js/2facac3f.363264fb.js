"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[60055],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,b=u["".concat(d,".").concat(p)]||u[p]||m[p]||r;return n?i.createElement(b,o(o({ref:t},c),{},{components:n})):i.createElement(b,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63857:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],s={sidebar_label:"Setup",sidebar_position:2,description:"Setup of dbt and the ClickHouse plugin"},d="Installation",l={unversionedId:"en/integrations/dbt/dbt-setup",id:"en/integrations/dbt/dbt-setup",title:"Installation",description:"Setup of dbt and the ClickHouse plugin",source:"@site/docs/en/integrations/dbt/dbt-setup.md",sourceDirName:"en/integrations/dbt",slug:"/en/integrations/dbt/dbt-setup",permalink:"/docs/en/integrations/dbt/dbt-setup",editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/dbt/dbt-setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Setup",sidebar_position:2,description:"Setup of dbt and the ClickHouse plugin"},sidebar:"english",previous:{title:"Introduction",permalink:"/docs/en/integrations/dbt/dbt-intro"},next:{title:"Connecting to ClickHouse",permalink:"/docs/en/integrations/dbt/dbt-connecting"}},c={},m=[{value:"dbt",id:"dbt",level:2},{value:"ClickHouse plugin",id:"clickhouse-plugin",level:2}],u={toc:m};function p(e){var t=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"dbt"},"dbt"),(0,r.kt)("p",null,"We assume the use of the dbt CLI for the following examples. Users may also wish to consider",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/dbt-cloud/cloud-overview"}," dbt Cloud"),", which offers a web-based Integrated Development Environment (IDE) allowing users to edit and run projects."),(0,r.kt)("p",null,"dbt offers a number of options for CLI installation. Follow the instructions described",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/dbt-cli/install/overview"}," here"),". At this stage install dbt-core only. We recommend the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python install dbt-core\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important: The following is tested under python 3.9.")),(0,r.kt)("h2",{id:"clickhouse-plugin"},"ClickHouse plugin"),(0,r.kt)("p",null,"Install the dbt ClickHouse plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install dbt-clickhouse\n")),(0,r.kt)("h1",{id:"prepare-clickhouse"},"Prepare ClickHouse"),(0,r.kt)("p",null,"dbt excels when modeling highly relational data. For the purposes of example, we provide a small IMDB dataset with the following relational schema. This dataset originates from the",(0,r.kt)("a",{parentName:"p",href:"https://relational.fit.cvut.cz/dataset/IMDb"}," relational dataset repository"),". This is trivial relative to common schemas used with dbt but represents a manageable sample:"),(0,r.kt)("img",{src:n(28975).Z,class:"image",alt:"IMDB table schema",style:{width:"100%"}}),(0,r.kt)("p",null,"We use a subset of these tables as shown."),(0,r.kt)("p",null,"Create the following tables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE imdb ENGINE=Atomic;\n\nCREATE TABLE imdb.actors\n(\n    id         UInt32,\n    first_name String,\n    last_name  String,\n    gender     FixedString(1)\n) ENGINE = MergeTree ORDER BY (id, first_name, last_name, gender);\n\nCREATE TABLE imdb.directors\n(\n    id         UInt32,\n    first_name String,\n    last_name  String\n) ENGINE = MergeTree ORDER BY (id, first_name, last_name);\n\nCREATE TABLE imdb.genres\n(\n    movie_id UInt32,\n    genre    String\n) ENGINE = MergeTree ORDER BY (movie_id, genre);\n\nCREATE TABLE imdb.movie_directors\n(\n    director_id UInt32,\n    movie_id    UInt64\n) ENGINE = MergeTree ORDER BY (director_id, movie_id);\n\nCREATE TABLE imdb.movies\n(\n    id   UInt32,\n    name String,\n    year UInt32,\n    rank Float32 DEFAULT 0\n) ENGINE = MergeTree ORDER BY (id, name, year);\n\nCREATE TABLE imdb.roles\n(\n    created_at DateTime DEFAULT now(),\n    actor_id   UInt32,\n    movie_id   UInt32,\n    role       String\n) ENGINE = MergeTree ORDER BY (actor_id, movie_id);\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The column ",(0,r.kt)("inlineCode",{parentName:"p"},"created_at")," for the table ",(0,r.kt)("inlineCode",{parentName:"p"},"roles"),", which defaults to a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"now()"),". We use this later to identify incremental updates to our models - see ",(0,r.kt)("a",{parentName:"p",href:"./dbt-incremental-model"},"Incremental Models"),"."))),(0,r.kt)("p",null,"We use the ",(0,r.kt)("inlineCode",{parentName:"p"},"s3")," function to read the source data from public endpoints to insert data. Run the following commands to populate the tables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO imdb.actors\nSELECT *\nFROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/imdb/imdb_ijs_actors.tsv.gz',\n'TSVWithNames');\n\nINSERT INTO imdb.directors\nSELECT *\nFROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/imdb/imdb_ijs_directors.tsv.gz',\n'TSVWithNames');\n\nINSERT INTO imdb.genres\nSELECT *\nFROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/imdb/imdb_ijs_movies_genres.tsv.gz',\n'TSVWithNames');\n\nINSERT INTO imdb.movie_directors\nSELECT *\nFROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/imdb/imdb_ijs_movies_directors.tsv.gz',\n        'TSVWithNames');\n\nINSERT INTO imdb.movies\nSELECT *\nFROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/imdb/imdb_ijs_movies.tsv.gz',\n'TSVWithNames');\n\nINSERT INTO imdb.roles\nSELECT *\nFROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/imdb/imdb_ijs_roles.tsv.gz',\n'TSVWithNames');\n\n")),(0,r.kt)("p",null,"The execution of these may vary depending on your bandwidth, but each should only take a few seconds to complete. Execute the following query to compute a summary of each actor, ordered by the most movie appearances, and to confirm the data was loaded successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id,\n       any(actor_name)          as name,\n       uniqExact(movie_id)    as num_movies,\n       avg(rank)                as avg_rank,\n       uniqExact(genre)         as unique_genres,\n       uniqExact(director_name) as uniq_directors,\n       max(created_at)          as updated_at\nFROM (\n         SELECT imdb.actors.id  as id,\n                concat(imdb.actors.first_name, ' ', imdb.actors.last_name)  as actor_name,\n                imdb.movies.id as movie_id,\n                Imdb.movies.rank as rank,\n                genre,\n                concat(imdb.directors.first_name, ' ', imdb.directors.last_name) as director_name,\n                created_at\n         FROM imdb.actors\n                  JOIN imdb.roles ON imdb.roles.actor_id = imdb.actors.id\n                  LEFT OUTER JOIN imdb.movies ON imdb.movies.id = imdb.roles.movie_id\n                  LEFT OUTER JOIN imdb.genres ON imdb.genres.movie_id = imdb.movies.id\n                  LEFT OUTER JOIN imdb.movie_directors ON imdb.movie_directors.movie_id = imdb.movies.id\n                  LEFT OUTER JOIN imdb.directors ON imdb.directors.id = imdb.movie_directors.director_id\n         )\nGROUP BY id\nORDER BY num_movies DESC\nLIMIT 5;\n")),(0,r.kt)("p",null,"The response should look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"+------+------------+----------+------------------+-------------+--------------+-------------------+\n|id    |name        |num_movies|avg_rank          |unique_genres|uniq_directors|updated_at         |\n+------+------------+----------+------------------+-------------+--------------+-------------------+\n|45332 |Mel Blanc   |832       |6.175853582979779 |18           |84            |2022-04-26 14:01:45|\n|621468|Bess Flowers|659       |5.57727638854796  |19           |293           |2022-04-26 14:01:46|\n|372839|Lee Phelps  |527       |5.032976449684617 |18           |261           |2022-04-26 14:01:46|\n|283127|Tom London  |525       |2.8721716524875673|17           |203           |2022-04-26 14:01:46|\n|356804|Bud Osborne |515       |2.0389507108727773|15           |149           |2022-04-26 14:01:46|\n+------+------------+----------+------------------+-------------+--------------+-------------------+\n")),(0,r.kt)("p",null,"In the later guides, we will convert this query into a model - materializing it in ClickHouse as a dbt view and table."))}p.isMDXComponent=!0},28975:function(e,t,n){t.Z=n.p+"assets/images/dbt_01-24a161b0216de65d39a8785fb345730e.png"}}]);