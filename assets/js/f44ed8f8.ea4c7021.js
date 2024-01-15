"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7211],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(t),d=i,u=h["".concat(l,".").concat(d)]||h[d]||m[d]||r;return t?a.createElement(u,o(o({ref:n},c),{},{components:t})):a.createElement(u,o({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>h});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],s={id:"build-hrmp-channels",title:"Opening HRMP Channels",sidebar_label:"Opening HRMP Channels",description:"Steps on how to open HRMP channels between parachains.",keywords:["HRMP","parachain","statemint","proposal","asset hub","statemine"],slug:"../build-hrmp-channels"},l=void 0,p={unversionedId:"build/build-hrmp-channels",id:"build/build-hrmp-channels",title:"Opening HRMP Channels",description:"Steps on how to open HRMP channels between parachains.",source:"@site/../docs/build/build-hrmp-channels.md",sourceDirName:"build",slug:"/build-hrmp-channels",permalink:"/docs/build-hrmp-channels",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-hrmp-channels.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1705277433,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{id:"build-hrmp-channels",title:"Opening HRMP Channels",sidebar_label:"Opening HRMP Channels",description:"Steps on how to open HRMP channels between parachains.",keywords:["HRMP","parachain","statemint","proposal","asset hub","statemine"],slug:"../build-hrmp-channels"},sidebar:"docs",previous:{title:"Integrating Assets",permalink:"/docs/build-integrate-assets"},next:{title:"Development Networks & Node Management",permalink:"/docs/build-network-index"}},c={},h=[{value:"Opening HRMP Channels",id:"opening-hrmp-channels",level:2},{value:"Opening HRMP Channels with System Parachains",id:"opening-hrmp-channels-with-system-parachains",level:2},{value:"Opening HRMP Channels Between Two System Parachains",id:"opening-hrmp-channels-between-two-system-parachains",level:2}],m={toc:h},d="wrapper";function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order to communicate over ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-xcm-transport#hrmp-xcmp-lite"},"HRMP"),", parachains must\nestablish channels by registering them on the Relay Chain. Like\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-xcm-transport#xcmp-cross-chain-message-passing"},"XCMP"),", HRMP is a message\ntransport protocol, but passes all messages via the Relay Chain. When XCMP is implemented on\nPolkadot, HRMP is planned to be deprecated and phased out."),(0,r.kt)("p",null,"HRMP channels are uni-directional. Bi-directional communication between two parachains will require\ntwo channels, one in each direction."),(0,r.kt)("h2",{id:"opening-hrmp-channels"},"Opening HRMP Channels"),(0,r.kt)("p",null,"Opening a channel between two parachains is a two-phase process, with one chain first initiating a\nchannel request and then the second chain accepting it. When neither chain is a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-system-chains"},"system chain"),", they will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"hrmpInitOpenChannel")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"hrmpAcceptOpenChannel")," calls, respectively."),(0,r.kt)("p",null,"Each chain must dispatch the following calls on the Relay Chain from its parachain origin."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"hrmp > hrmpInitOpenChannel(recipient, proposedMaxCapacity, proposedMaxMessageSize)"),": Initiates\nchannel establishment by creating a channel request with a given configuration. Note that the max\ncapacity and max message size must be within the ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration"),"'s limits.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"hrmp > hrmpAcceptOpenChannel(sender)"),": Accept the channel open request from the given sender."))),(0,r.kt)("p",null,"In order to dispatch a call from its sovereign origin, a parachain may use governance to send the\nencoded call in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Transact")," instruction to the Relay Chain, but it may also execute this logic\nautonomously (e.g. on the notification that a channel was requested)."),(0,r.kt)("h2",{id:"opening-hrmp-channels-with-system-parachains"},"Opening HRMP Channels with System Parachains"),(0,r.kt)("p",null,"HRMP channel management involving system parachains takes place entirely on the Relay Chain. No\naction is required from the parachain origin."),(0,r.kt)("p",null,"Opening an HRMP channel with a system parachain requires an\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-guides-polkadot-opengov"},"OpenGov referendum")," using the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-origins#general-admin"},"General Admin Track"),"."),(0,r.kt)("p",null,"Proposals should generally be a ",(0,r.kt)("inlineCode",{parentName:"p"},"batchAll")," call containing two ",(0,r.kt)("inlineCode",{parentName:"p"},"forceOpenHrmpChannel")," calls (one for\neach direction of the channel)."),(0,r.kt)("p",null,"As an example, see ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/referenda/280"},"Referendum 280"),", which opened\ntwo bi-directional channels with Asset Hub (one for Zeitgeist and one for Composable)."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please ensure that you use the new ",(0,r.kt)("inlineCode",{parentName:"p"},"forceOpenHrmpChannel")," directly on the Relay Chain, rather than\nthe old two-phase channel request/accept method.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As of Polkadot and Kusama runtimes 1,001,000, channel establishment with system chains will not\nrequire a deposit. However, for lower spec versions, each chain in the channel will need a free\nbalance of at least the required channel deposits plus the existential deposit."),(0,r.kt)("p",{parentName:"admonition"},"For example, on Polkadot the sender and recipient deposit are both 10 DOT and the existential\ndeposit is 1 DOT. Each chain, as in both the system chain and its interlocutor, will need 21 DOT; 10\nas a channel sender, 10 as a channel recipient, and 1 as existential."),(0,r.kt)("p",{parentName:"admonition"},"Someone must transfer this DOT to the parachain sovereign accounts prior to the execution of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"forceOpenHrmpChannel")," calls.")),(0,r.kt)("h2",{id:"opening-hrmp-channels-between-two-system-parachains"},"Opening HRMP Channels Between Two System Parachains"),(0,r.kt)("p",null,"As of Polkadot and Kusama runtimes 1,001,000, anyone can call an ",(0,r.kt)("inlineCode",{parentName:"p"},"establishSystemChannel")," extrinsic\nwith two system parachains as arguments in order to establish a channel from the given sender to\nreceiver."))}u.isMDXComponent=!0}}]);