"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[45409],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60722:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],c={sidebar_label:"Connect Java to ClickHouse",sidebar_position:201,keywords:["clickhouse","jdbc","connect","integrate"],description:"The ClickHouse JDBC driver enables a Java application to interact with ClickHouse"},l="Connecting Applications to ClickHouse with JDBC",s={unversionedId:"en/integrations/jdbc/jdbc-with-clickhouse-2",id:"en/integrations/jdbc/jdbc-with-clickhouse-2",title:"Connecting Applications to ClickHouse with JDBC",description:"The ClickHouse JDBC driver enables a Java application to interact with ClickHouse",source:"@site/docs/en/integrations/jdbc/jdbc-with-clickhouse-2.md",sourceDirName:"en/integrations/jdbc",slug:"/en/integrations/jdbc/jdbc-with-clickhouse-2",permalink:"/docs/en/integrations/jdbc/jdbc-with-clickhouse-2",editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/jdbc/jdbc-with-clickhouse-2.md",tags:[],version:"current",sidebarPosition:201,frontMatter:{sidebar_label:"Connect Java to ClickHouse",sidebar_position:201,keywords:["clickhouse","jdbc","connect","integrate"],description:"The ClickHouse JDBC driver enables a Java application to interact with ClickHouse"},sidebar:"english",previous:{title:"JDBC for External Data Sources",permalink:"/docs/en/integrations/jdbc/jdbc-with-clickhouse"},next:{title:"Kafka",permalink:"/docs/en/integrations/kafka"}},u={},p=[],d={toc:p};function m(e){var t=e.components,c=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connecting-applications-to-clickhouse-with-jdbc"},"Connecting Applications to ClickHouse with JDBC"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Overview:")," The ",(0,o.kt)("a",{href:"https://github.com/ClickHouse/clickhouse-jdbc/tree/master/clickhouse-jdbc",target:"_blank"},"ClickHouse JDBC driver")," enables a Java application to interact with ClickHouse:"),(0,o.kt)("img",{src:n(91404).Z,class:"image",alt:"ClickHouse JDBC Driver"}),(0,o.kt)("p",null,"In this lesson we will create a minimal Java application that uses the ClickHouse JDBC driver for querying a ClickHouse database."),(0,o.kt)("p",null,"Let's get started!"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You have access to a machine that has:"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"a Unix shell and internet access "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{href:"https://www.gnu.org/software/wget/",target:"_blank"},"wget")," installed"),(0,o.kt)("li",{parentName:"ol"},"a current version of ",(0,o.kt)("strong",{parentName:"li"},"Java")," (e.g. ",(0,o.kt)("a",{href:"https://openjdk.java.net",target:"_blank"},"OpenJDK")," Version >= 17) installed"),(0,o.kt)("li",{parentName:"ol"},"a current version of ",(0,o.kt)("strong",{parentName:"li"},"ClickHouse")," ",(0,o.kt)("a",{href:"https://clickhouse.com/docs/en/getting-started/install/",target:"_blank"},"installed")," and running")))),(0,o.kt)("p",null,"Let's start by connecting to a Unix shell on your machine where Java is installed and create a project directory for our minimal Java application (feel free to name the folder anything you like and put it anywhere you like):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/hello-clickhouse-java-app\n")),(0,o.kt)("p",null,"Now we download the ",(0,o.kt)("a",{href:"https://repo1.maven.org/maven2/com/clickhouse/clickhouse-jdbc/",target:"_blank"},"current version")," of the ClickHouse JDBC driver into a subfolder of the project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/hello-clickhouse-java-app\nmkdir lib\nwget -P lib https://repo1.maven.org/maven2/com/clickhouse/clickhouse-jdbc/0.3.2-patch7/clickhouse-jdbc-0.3.2-patch7-shaded.jar\n")),(0,o.kt)("p",null,"Next we create a file for the Java main class of our minimal Java application in a subdirectory structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/hello-clickhouse-java-app\nmkdir -p src/main/java/helloclickhouse\ntouch src/main/java/helloclickhouse/HelloClickHouse.java\n")),(0,o.kt)("p",null," You can now copy and paste the following Java code into the file ",(0,o.kt)("inlineCode",{parentName:"p"},"~/hello-clickhouse-java-app/src/main/java/helloclickhouse/HelloClickHouse.java"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.clickhouse.jdbc.*;\nimport java.sql.*;\nimport java.util.*;\n\npublic class HelloClickHouse {\n    public static void main(String[] args) throws Exception {\n\n        String url = "jdbc:ch://<host>:<port>";\n        Properties properties = new Properties();\n        // properties.setProperty("ssl", "true");\n        // properties.setProperty("sslmode", "NONE"); // NONE to trust all servers; STRICT for trusted only\n         \n        ClickHouseDataSource dataSource = new ClickHouseDataSource(url, properties);\n        try (Connection connection = dataSource.getConnection(<username>, <password>);\n            Statement statement = connection.createStatement();\n            ResultSet resultSet = statement.executeQuery("select * from system.tables limit 10")) {\n            ResultSetMetaData resultSetMetaData = resultSet.getMetaData();\n            int columns = resultSetMetaData.getColumnCount();\n            while (resultSet.next()) {\n                for (int c = 1; c <= columns; c++) {\n                    System.out.print(resultSetMetaData.getColumnName(c) + ":" + resultSet.getString(c) + (c < columns ? ", " : "\\n"));\n                }\n            }\n        }\n    }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"in the Java class file above"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"in the first code line inside the main method you need to replace ",(0,o.kt)("inlineCode",{parentName:"li"},"<host>"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"<port>")," with values matching your running ClickHouse instance, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},'"jdbc:ch://localhost:8123"')),(0,o.kt)("li",{parentName:"ul"},"you also need to replace ",(0,o.kt)("inlineCode",{parentName:"li"},"<username>")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"<password>")," with your ClickHouse instance credentials, if you don't use a password, you can replace ",(0,o.kt)("inlineCode",{parentName:"li"},"<password>")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"null"))))),(0,o.kt)("p",null,"That was all! Now we are ready to start our minimal Java application from the Unix shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/hello-clickhouse-java-app\njava -classpath lib/clickhouse-jdbc-0.3.2-patch7-shaded.jar  src/main/java/helloclickhouse/HelloClickHouse.java\n")))}m.isMDXComponent=!0},91404:function(e,t,n){t.Z=n.p+"assets/images/jdbc-2-01-73386a960e96efcf1cabe92833d25df7.png"}}]);