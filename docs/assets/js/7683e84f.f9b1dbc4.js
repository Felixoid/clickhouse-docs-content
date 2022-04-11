"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[76425],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96221:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={sidebar_label:"Adding Test Queries",sidebar_position:63,description:"Instructions on how to add a test case to ClickHouse continuous integration"},l="How to add test queries to ClickHouse CI",u={unversionedId:"en/development/adding_test_queries",id:"en/development/adding_test_queries",title:"How to add test queries to ClickHouse CI",description:"Instructions on how to add a test case to ClickHouse continuous integration",source:"@site/docs/en/development/adding_test_queries.md",sourceDirName:"en/development",slug:"/en/development/adding_test_queries",permalink:"/en/development/adding_test_queries",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/development/adding_test_queries.md",tags:[],version:"current",sidebarPosition:63,frontMatter:{sidebar_label:"Adding Test Queries",sidebar_position:63,description:"Instructions on how to add a test case to ClickHouse continuous integration"},sidebar:"english",previous:{title:"Continuous Integration Checks",permalink:"/en/development/continuous-integration"},next:{title:"Build on Linux",permalink:"/en/development/build"}},c={},p=[{value:"Why adding tests",id:"why-adding-tests",level:2},{value:"Steps to do",id:"steps-to-do",level:3},{value:"Prerequisite",id:"prerequisite",level:4},{value:"Preparation",id:"preparation",level:4},{value:"New branch for the test",id:"new-branch-for-the-test",level:4},{value:"Install &amp; run clickhouse",id:"install--run-clickhouse",level:4},{value:"Creating the test file",id:"creating-the-test-file",level:4},{value:"How to create a good test",id:"how-to-create-a-good-test",level:4},{value:"Test naming rules",id:"test-naming-rules",level:4},{value:"Commit / push / create PR.",id:"commit--push--create-pr",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-add-test-queries-to-clickhouse-ci"},"How to add test queries to ClickHouse CI"),(0,o.kt)("p",null,"ClickHouse has hundreds (or even thousands) of features. Every commit gets checked by a complex set of tests containing many thousands of test cases."),(0,o.kt)("p",null,"The core functionality is very well tested, but some corner-cases and different combinations of features can be uncovered with ClickHouse CI."),(0,o.kt)("p",null,"Most of the bugs/regressions we see happen in that 'grey area' where test coverage is poor."),(0,o.kt)("p",null,"And we are very interested in covering most of the possible scenarios and feature combinations used in real life by tests."),(0,o.kt)("h2",{id:"why-adding-tests"},"Why adding tests"),(0,o.kt)("p",null,"Why/when you should add a test case into ClickHouse code:\n1) you use some complicated scenarios / feature combinations / you have some corner case which is probably not widely used\n2) you see that certain behavior gets changed between version w/o notifications in the changelog\n3) you just want to help to improve ClickHouse quality and ensure the features you use will not be broken in the future releases\n4) once the test is added/accepted, you can be sure the corner case you check will never be accidentally broken.\n5) you will be a part of great open-source community\n6) your name will be visible in the ",(0,o.kt)("inlineCode",{parentName:"p"},"system.contributors")," table!\n7) you will make a world bit better :)"),(0,o.kt)("h3",{id:"steps-to-do"},"Steps to do"),(0,o.kt)("h4",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"I assume you run some Linux machine (you can use docker / virtual machines on other OS) and any modern browser / internet connection, and you have some basic Linux & SQL skills."),(0,o.kt)("p",null,"Any highly specialized knowledge is not needed (so you don't need to know C++ or know something about how ClickHouse CI works)."),(0,o.kt)("h4",{id:"preparation"},"Preparation"),(0,o.kt)("p",null,"1) ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/join"},"create GitHub account")," (if you haven't one yet)\n2) ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/set-up-git"},"setup git")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# for Ubuntu\nsudo apt-get update\nsudo apt-get install git\n\ngit config --global user.name "John Doe" # fill with your name\ngit config --global user.email "email@example.com" # fill with your email\n\n')),(0,o.kt)("p",null,"3) ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo"},"fork ClickHouse project")," - just open ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse"},"https://github.com/ClickHouse/ClickHouse")," and press fork button in the top right corner:\n",(0,o.kt)("img",{parentName:"p",src:"https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png",alt:"fork repo"})),(0,o.kt)("p",null,"4) clone your fork to some folder on your PC, for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"~/workspace/ClickHouse")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir ~/workspace && cd ~/workspace\ngit clone https://github.com/< your GitHub username>/ClickHouse\ncd ClickHouse\ngit remote add upstream https://github.com/ClickHouse/ClickHouse\n")),(0,o.kt)("h4",{id:"new-branch-for-the-test"},"New branch for the test"),(0,o.kt)("p",null,"1) create a new branch from the latest clickhouse master"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~/workspace/ClickHouse\ngit fetch upstream\ngit checkout -b name_for_a_branch_with_my_test upstream/master\n")),(0,o.kt)("h4",{id:"install--run-clickhouse"},"Install & run clickhouse"),(0,o.kt)("p",null,"1) install ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," (follow ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/getting-started/install/"},"official docs"),")\n2) install test configurations (it will use Zookeeper mock implementation and adjust some settings)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~/workspace/ClickHouse/tests/config\nsudo ./install.sh\n")),(0,o.kt)("p",null,"3) run clickhouse-server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl restart clickhouse-server\n")),(0,o.kt)("h4",{id:"creating-the-test-file"},"Creating the test file"),(0,o.kt)("p",null,"1) find the number for your test - find the file with the biggest number in ",(0,o.kt)("inlineCode",{parentName:"p"},"tests/queries/0_stateless/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd ~/workspace/ClickHouse\n$ ls tests/queries/0_stateless/[0-9]*.reference | tail -n 1\ntests/queries/0_stateless/01520_client_print_query_id.reference\n")),(0,o.kt)("p",null,"Currently, the last number for the test is ",(0,o.kt)("inlineCode",{parentName:"p"},"01520"),", so my test will have the number ",(0,o.kt)("inlineCode",{parentName:"p"},"01521")),(0,o.kt)("p",null,"2) create an SQL file with the next number and name of the feature you test"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"touch tests/queries/0_stateless/01521_dummy_test.sql\n")),(0,o.kt)("p",null,"3) edit SQL file with your favorite editor (see hint of creating tests below)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"vim tests/queries/0_stateless/01521_dummy_test.sql\n")),(0,o.kt)("p",null,"4) run the test, and put the result of that into the reference file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clickhouse-client -nmT < tests/queries/0_stateless/01521_dummy_test.sql | tee tests/queries/0_stateless/01521_dummy_test.reference\n")),(0,o.kt)("p",null,"5) ensure everything is correct, if the test output is incorrect (due to some bug for example), adjust the reference file using text editor."),(0,o.kt)("h4",{id:"how-to-create-a-good-test"},"How to create a good test"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A test should be",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"minimal - create only tables related to tested functionality, remove unrelated columns and parts of query"),(0,o.kt)("li",{parentName:"ul"},"fast - should not take longer than a few seconds (better subseconds)"),(0,o.kt)("li",{parentName:"ul"},"correct - fails then feature is not working",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"- deterministic\n"))),(0,o.kt)("li",{parentName:"ul"},"isolated / stateless",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"don't rely on some environment things"),(0,o.kt)("li",{parentName:"ul"},"don't rely on timing when possible"))))),(0,o.kt)("li",{parentName:"ul"},"try to cover corner cases (zeros / Nulls / empty sets / throwing exceptions)"),(0,o.kt)("li",{parentName:"ul"},"to test that query return errors, you can put special comment after the query: ",(0,o.kt)("inlineCode",{parentName:"li"},"-- { serverError 60 }")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"-- { clientError 20 }")),(0,o.kt)("li",{parentName:"ul"},"don't switch databases (unless necessary)"),(0,o.kt)("li",{parentName:"ul"},"you can create several table replicas on the same node if needed"),(0,o.kt)("li",{parentName:"ul"},"you can use one of the test cluster definitions when needed (see system.clusters)"),(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"numbers_mt")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"zeros")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"zeros_mt")," and similar for queries / to initialize data when applicable"),(0,o.kt)("li",{parentName:"ul"},"clean up the created objects after test and before the test (DROP IF EXISTS) - in case of some dirty state"),(0,o.kt)("li",{parentName:"ul"},"prefer sync mode of operations (mutations, merges, etc.)"),(0,o.kt)("li",{parentName:"ul"},"use other SQL files in the ",(0,o.kt)("inlineCode",{parentName:"li"},"0_stateless")," folder as an example"),(0,o.kt)("li",{parentName:"ul"},"ensure the feature / feature combination you want to test is not yet covered with existing tests")),(0,o.kt)("h4",{id:"test-naming-rules"},"Test naming rules"),(0,o.kt)("p",null,"It's important to name tests correctly, so one could turn some tests subset off in clickhouse-test invocation."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Tester flag"),(0,o.kt)("th",{parentName:"tr",align:null},"What should be in test name"),(0,o.kt)("th",{parentName:"tr",align:null},"When flag should be added"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--[no-]zookeeper")),(0,o.kt)("td",{parentName:"tr",align:null},'"zookeeper" or "replica"'),(0,o.kt)("td",{parentName:"tr",align:null},"Test uses tables from ReplicatedMergeTree family"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--[no-]shard")),(0,o.kt)("td",{parentName:"tr",align:null},'"shard" or "distributed" or "global"'),(0,o.kt)("td",{parentName:"tr",align:null},"Test using connections to 127.0.0.2 or similar"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--[no-]long")),(0,o.kt)("td",{parentName:"tr",align:null},'"long" or "deadlock" or "race"'),(0,o.kt)("td",{parentName:"tr",align:null},"Test runs longer than 60 seconds"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h4",{id:"commit--push--create-pr"},"Commit / push / create PR."),(0,o.kt)("p",null,"1) commit & push your changes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/workspace/ClickHouse\ngit add tests/queries/0_stateless/01521_dummy_test.sql\ngit add tests/queries/0_stateless/01521_dummy_test.reference\ngit commit # use some nice commit message when possible\ngit push origin HEAD\n")),(0,o.kt)("p",null,"2) use a link which was shown during the push, to create a PR into the main repo\n3) adjust the PR title and contents, in ",(0,o.kt)("inlineCode",{parentName:"p"},"Changelog category (leave one)")," keep\n",(0,o.kt)("inlineCode",{parentName:"p"},"Build/Testing/Packaging Improvement"),", fill the rest of the fields if you want."))}m.isMDXComponent=!0}}]);