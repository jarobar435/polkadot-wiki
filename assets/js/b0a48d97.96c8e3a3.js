"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1018],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,g=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67141:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(96540);const a=function(e){var t,n=e.message,a=(0,o.useState)(!0),r=a[0],i=a[1];return o.createElement(o.Fragment,null,r&&o.createElement("div",{className:"message-box"},o.createElement("button",{className:"close-button",onClick:function(){i(!1)}},"\u2716 "),o.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=n,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},95165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=n(58168),a=n(98587),r=(n(96540),n(15680)),i=n(67141),s=["components"],l={id:"learn-guides-ledger",title:"Polkadot-JS Guides for Ledger Devices",sidebar_label:"Ledger Guides",description:"Polkadot-JS Guides for Ledger Devices.",keywords:["ledger","polkadot-js"],slug:"../learn-guides-ledger"},d=void 0,p={unversionedId:"learn/learn-guides-ledger",id:"learn/learn-guides-ledger",title:"Polkadot-JS Guides for Ledger Devices",description:"Polkadot-JS Guides for Ledger Devices.",source:"@site/../docs/learn/learn-guides-ledger.md",sourceDirName:"learn",slug:"/learn-guides-ledger",permalink:"/docs/learn-guides-ledger",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-ledger.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1724922087,formattedLastUpdatedAt:"Aug 29, 2024",frontMatter:{id:"learn-guides-ledger",title:"Polkadot-JS Guides for Ledger Devices",sidebar_label:"Ledger Guides",description:"Polkadot-JS Guides for Ledger Devices.",keywords:["ledger","polkadot-js"],slug:"../learn-guides-ledger"},sidebar:"docs",previous:{title:"Identity Guides",permalink:"/docs/learn-guides-identity"},next:{title:"Polkadot Vault Guides",permalink:"/docs/learn-guides-vault"}},u={},c=[{value:"Loading Your Account",id:"loading-your-account",level:2},{value:"Derivation paths",id:"derivation-paths",level:3},{value:"Confirming the Address on your Device",id:"confirming-the-address-on-your-device",level:3},{value:"Navigating your Account",id:"navigating-your-account",level:2},{value:"Sending a Transfer with Ledger Devices",id:"sending-a-transfer-with-ledger-devices",level:2},{value:"Receiving a Transfer",id:"receiving-a-transfer",level:2},{value:"Staking",id:"staking",level:2},{value:"Ledger Developer Release",id:"ledger-developer-release",level:2},{value:"Why you might need the Developer Release",id:"why-you-might-need-the-developer-release",level:3},{value:"Install the Developer Release",id:"install-the-developer-release",level:3}],h={toc:c},g="wrapper";function y(e){var t=e.components,l=(0,a.A)(e,s);return(0,r.yg)(g,(0,o.A)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(i.A,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](/docs/polkadotjs-ui), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages.",mdxType:"MessageBox"}),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"/docs/ledger"},"Ledger devices")," are hardware wallets that keep your private key secured\non a physical device not directly exposed to your computer or the internet."),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"/docs/ledger#polkadot-generic-app"},"Polkadot Generic application")," allows you to manage\nyour DOT/KSM on Polkadot/Kusama networks, tokens on their Asset Hubs and possibly all chains within the Polkadot ecosystem. It is versatile and capable of handling parachains and relay chains without being affected by their runtime upgrades. "),(0,r.yg)("h2",{id:"loading-your-account"},"Loading Your Account"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Ledger Live should be off while using Ledger with Polkadot-JS UI, as it can interfere with normal\noperation.")),(0,r.yg)("p",null,"You can import your Ledger account to ",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot Extension")," or to\nthe ",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),". For instructions on how to import\nLedger accounts to the Polkadot Extension read through\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000175387-how-to-add-your-ledger-through-the-polkadot-extension"},"this support article"),",\nwhile if you want to import Ledger accounts to the Polkadot-JS UI, you can consult\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000170812-how-to-add-ledger-account-through-the-polkadot-js-ui"},"this other article"),"."),(0,r.yg)("h3",{id:"derivation-paths"},"Derivation paths"),(0,r.yg)("p",null,"When adding a Ledger account using the extension or the UI, you will be asked to select an\n",(0,r.yg)("inlineCode",{parentName:"p"},"account type")," and an ",(0,r.yg)("inlineCode",{parentName:"p"},"account index"),". The first lets you select an account, while the second lets\nyou pick a derivation path from that account - think of it like a formula from which child accounts\nare generated. When you are creating a\nPolkadot ledger account for the first time on\nLedger Live with name ",(0,r.yg)("inlineCode",{parentName:"p"},"Polkadot 1"),"",", this\ncan be added to Polkadot-JS using the 0/0 derivation path (i.e. account type = 0 and account index =\n0). If you add a second account called\n",(0,r.yg)("inlineCode",{parentName:"p"},"Polkadot 2"),"",", this will correspond to the\n1/0 derivation path, and so on. We thus have multiple parent accounts that can be viewed and used in\nboth Ledger Live and Polkadot-JS. Additionally, we can use Polkadot-JS UI to create multiple\nchildren accounts from each parent account. For example,\n",(0,r.yg)("inlineCode",{parentName:"p"},"Polkadot 1"),""," with 0/0 derivation path can\nhave child 0/1, 0/2, etc. that can be used within the UI. However, such children accounts cannot be\nused in Ledger Live, as it only scans through the parent accounts. So, remember that the balances on\nthe children accounts cannot be viewed, and you will not be able to transact with those accounts on\nLedger Live."),(0,r.yg)("h3",{id:"confirming-the-address-on-your-device"},"Confirming the Address on your Device"),(0,r.yg)("p",null,"If your Ledger account is directly imported into the Polkadot-JS UI, you can ask the UI to confirm\nthe address on your Ledger device. There are a few methods to check the balance of your Ledger\naccount. Check out\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000169332-where-can-i-see-the-balance-of-my-account-"},"this support article"),"\nfor information."),(0,r.yg)("h2",{id:"navigating-your-account"},"Navigating your Account"),(0,r.yg)("p",null,"Once you have loaded your account on the \u201cAccounts\u201d tab, it should show a row with your Ledger\naccount. Your account\u2019s DOT balance is on the row\u2019s far right. Expanding the balance arrow will show\nyour balance details, such as locks or reserved amounts. For more information about the type of\nbalances, visit the ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-account-balances#balance-types-on-polkadot-js"},"balances page"),"."),(0,r.yg)("h2",{id:"sending-a-transfer-with-ledger-devices"},"Sending a Transfer with Ledger Devices"),(0,r.yg)("admonition",{title:"Verifying Extrinsics",type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"Visit the\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000179161-how-can-i-verify-what-extrinsic-i-m-signing-#Verify-an-extrinsic-using-Ledger"},(0,r.yg)("strong",{parentName:"a"},"dedicated support page")),"\nand see ",(0,r.yg)("a",{parentName:"p",href:"https://youtu.be/bxMs-9fBtFk?t=360"},(0,r.yg)("strong",{parentName:"a"},"this video tutorial"))," tutorial to learn how to\nverify extrinsics before signing them. The video will also mention potential attacks that can happen\nwhile signing transactions.")),(0,r.yg)("admonition",{title:"Signature error message",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"If you have already connected your device, but an error message appears before signing a\ntransaction, make sure you have opened the\nPolkadot application on your Ledger Nano\ndevice. Visit\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181994"},"this support page")," for\nmore information about signing transactions using your ledger.")),(0,r.yg)("p",null,"General instructions to send a transfer can be found on\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000170304-how-to-send-transfer-funds-out-of-your-dot-account-on-the-polkadot-js-ui"},"this support page"),".\nTo sign transactions with your Ledger Nano check\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181994"},"this support article")," or\nsee ",(0,r.yg)("a",{parentName:"p",href:"https://youtu.be/gbvrHzr4EDY?t=579"},"this video tutorial"),"."),(0,r.yg)("h2",{id:"receiving-a-transfer"},"Receiving a Transfer"),(0,r.yg)("p",null,"To receive a transfer on the accounts stored on your Ledger device, you must provide the sender\n(i.e., the payer) with your address. To do so, follow the instructions on\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181866-how-to-receive-dot-to-my-account-on-polkadot-js-ui"},"this support page"),"."),(0,r.yg)("admonition",{title:"Sharing your account address",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Before giving anyone your address, ensure it matches what's on the Ledger by\n",(0,r.yg)("a",{parentName:"p",href:"#confirming-the-address-on-your-device"},"confirming the address on your device"),". Some malware will\nintercept clicks and clipboard requests and can change your copied value in-flight, so being extra\nvigilant around copy-paste operations makes sense.")),(0,r.yg)("p",null,"The easiest way to get your address is to click on the account name. This will open a sidebar\nshowing your address and other information, such as on-chain identity. Another\nmethod is just clicking on your account's avatar icon - this immediately copies your address to the\nclipboard."),(0,r.yg)("admonition",{title:"Your Asset Hub address is the same as your Relay Chain address",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Make sure that you clarify to the sender that you wish to receive your tokens on the Asset Hub\nparachain, otherwise (if you're receiving DOT\ntokens) they could be sent on the Polkadot\nchain.")),(0,r.yg)("h2",{id:"staking"},"Staking"),(0,r.yg)("p",null,"For staking using Ledger devices, follow the instructions on\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000168057-how-do-i-stake-nominate-on-polkadot-"},"this support article"),"."),(0,r.yg)("h2",{id:"ledger-developer-release"},"Ledger Developer Release"),(0,r.yg)("admonition",{type:"warning"},(0,r.yg)("p",{parentName:"admonition"},"This section is for developers only. It is recommended to install the application from Ledger Live\nunless you ",(0,r.yg)("em",{parentName:"p"},"know precisely what you're doing"),".")),(0,r.yg)("h3",{id:"why-you-might-need-the-developer-release"},"Why you might need the Developer Release"),(0,r.yg)("p",null,"Ledger apps for the Polkadot ecosystem are\ndeveloped by ",(0,r.yg)("a",{parentName:"p",href:"https://zondax.ch/"},"Zondax"),". When new functionalities are added to the Ledger apps,\nthey are made available on a developer release for testing purposes. After a successful audit and\nreview, the apps would be available for download and installation using\n",(0,r.yg)("a",{parentName:"p",href:"https://www.ledger.com/ledger-live"},"Ledger Live"),". As it takes some time for Ledger to audit and\nreview the release, the app upgrade option may not be available on Ledger Live when the new runtime\nis deployed on the network. If this happens, users cannot use Ledger devices to sign transactions.\nSuppose you cannot wait a few days until the app passes the Ledger audit, you can install the\ndeveloper release from the shell using the latest version published on\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot/releases"},"the Zondax GitHub repository"),"."),(0,r.yg)("h3",{id:"install-the-developer-release"},"Install the Developer Release"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"See ",(0,r.yg)("a",{parentName:"p",href:"https://youtu.be/4SyVQrlXZ_Q"},(0,r.yg)("strong",{parentName:"a"},"this video tutorial"))," to learn how to install the developer\nrelease of your ledger app."),(0,r.yg)("p",{parentName:"admonition"},"Currently, the developer release can be installed only on the Nano S and S Plus devices and can't be\ninstalled on the Nano X.")),(0,r.yg)("p",null,"To install the developer version, make sure you have the latest ",(0,r.yg)("inlineCode",{parentName:"p"},"pip")," version and follow the steps\nbelow:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Install ",(0,r.yg)("em",{parentName:"li"},"ledgerblue")," running the command ",(0,r.yg)("inlineCode",{parentName:"li"},"python3 -m pip install ledgerblue"),"."),(0,r.yg)("li",{parentName:"ul"},"Download the developer release from the\n",(0,r.yg)("a",{parentName:"li",href:"https://github.com/Zondax/ledger-polkadot/releases"},"Zondax GitHub repository"),". The file will be\nnamed ",(0,r.yg)("inlineCode",{parentName:"li"},"installer_nanos_plus.sh")," or something similar, depending on your ledger device."),(0,r.yg)("li",{parentName:"ul"},"Locate the downloaded shell script and make it executable in your shell by typing the command\n",(0,r.yg)("inlineCode",{parentName:"li"},"chmod +x installer_nanos_plus.sh"),"."),(0,r.yg)("li",{parentName:"ul"},"You can now use the ",(0,r.yg)("inlineCode",{parentName:"li"},"./installer_nanos_plus.sh --help")," command to visualize the available options\n(see below)")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Dev Ledger Help Menu",src:n(93611).A,width:"525",height:"54"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Attach your Ledger Nano (in this case, Nano S Plus) to your computer, enter the PIN code, and run\nthe command ",(0,r.yg)("inlineCode",{parentName:"li"},"./installer_nanos_plus.sh load"),'. Scroll with the right button until you see "Allow\nunsafe manager", left and right press to confirm. You will be asked to confirm the action of\nuninstalling the app and subsequently installing the newer version. After confirming both actions,\nthe shell script will install the version on your device. You must insert the PIN code to use the\ndevice after the installation.'),(0,r.yg)("li",{parentName:"ul"},"If you wish to revert the version to the stable release, go to Ledger Live. The app will\nautomatically detect the developer release and give the option to install the previous stable\nrelease.")))}y.isMDXComponent=!0},93611:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/ledger-help-menu-3af6592c7bc1830644f7ca9d55005cf4.png"}}]);