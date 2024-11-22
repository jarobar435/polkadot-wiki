"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4484],{11366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"general/web3-and-polkadot","title":"Web3 and Polkadot","description":"Introduction to Web3 and Polkadot\'s Role in shaping the Web3 Vision.","source":"@site/../docs/general/web3-and-polkadot.md","sourceDirName":"general","slug":"/web3-and-polkadot","permalink":"/docs/web3-and-polkadot","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/web3-and-polkadot.md","tags":[],"version":"current","lastUpdatedBy":"Dan Randow","lastUpdatedAt":1732195028000,"frontMatter":{"id":"web3-and-polkadot","title":"Web3 and Polkadot","sidebar_label":"Web3 and Polkadot","description":"Introduction to Web3 and Polkadot\'s Role in shaping the Web3 Vision.","keywords":["web3","polkadot","light clients","decentralization"],"slug":"../web3-and-polkadot"},"sidebar":"docs","previous":{"title":"General","permalink":"/docs/general-index"},"next":{"title":"Polkadot Vision","permalink":"/docs/polkadot-vision-index"}}');var a=t(74848),o=t(28453);const s={id:"web3-and-polkadot",title:"Web3 and Polkadot",sidebar_label:"Web3 and Polkadot",description:"Introduction to Web3 and Polkadot's Role in shaping the Web3 Vision.",keywords:["web3","polkadot","light clients","decentralization"],slug:"../web3-and-polkadot"},r=void 0,c={},l=[{value:"Data Ownership",id:"data-ownership",level:2},{value:"Trustless Environment",id:"trustless-environment",level:2},{value:"Data Immutability",id:"data-immutability",level:2},{value:"Data Retrievability",id:"data-retrievability",level:2},{value:"Decentralization",id:"decentralization",level:3},{value:"Decentralized Storage",id:"decentralized-storage",level:3},{value:"Stake Allocation",id:"stake-allocation",level:3},{value:"Economic Incentives",id:"economic-incentives",level:3},{value:"Governance and Treasury",id:"governance-and-treasury",level:3},{value:"Decentralized Access Points",id:"decentralized-access-points",level:2},{value:"Interoperability",id:"interoperability",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Back in the early 2000's the internet featured read-only, static, basic web pages. The online\nconnected world at the time was only the beginning of virtual data, identities, and more. The\ninternet during this time can be viewed as its first version (Web1)."}),"\n",(0,a.jsx)(n.p,{children:"As social media platforms and online businesses began to emerge, the internet transformed into its\nnext iteration - the Web2. This upgraded internet, which we use today, features dynamic, interactive\nweb pages, where users can read and write information and publish their own for others to see.\nHowever, this version of the web comes with downsides, dealing with data control, privacy issues,\nand the consequences of trusting centralized entities to store our data on their servers. This is\nwhere Web3 comes into the picture."}),"\n",(0,a.jsxs)(n.p,{children:["Web3 is transforming applications hosted on centralized infrastructure into decentralized\napplications (dApps) powered by trust-free blockchain protocols. The goal is to transform the\ninternet into a decentralized web, where users control their data and identity in a trust-free\nenvironment. The Web3 movement aims to remove intermediaries and build trustless infrastructure.\nWeb3 is an interactive and collaborative web where users can read, write, and ",(0,a.jsx)(n.strong,{children:"own"})," data."]}),"\n",(0,a.jsx)(n.admonition,{title:"The Web3 Movement",type:"note",children:(0,a.jsxs)(n.p,{children:["To learn more about the Web3 movement, check out this video from the\n",(0,a.jsx)(n.a,{href:"https://youtu.be/l44z35vabvA",children:"Web3 Summit"})]})}),"\n",(0,a.jsx)(n.h2,{id:"data-ownership",children:"Data Ownership"}),"\n",(0,a.jsxs)(n.p,{children:["In web3, ownership is achieved and validated through cryptography. Each user has a digital identity\nbound to a set of cryptographic keys usually based on the public key cryptographic scheme, i.e., the\nfamous ",(0,a.jsx)(n.strong,{children:"public and private key pair"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Unlike Web2 which is driven by email IDs, phone numbers, and passwords, users onboarding to Web3\njust need to generate a key pair. The public key can be the identity that can be shared with anybody\nto send you messages or assets, while the private key is used to access your account, sign messages,\ntransfer funds, edit identity details, etc. ",(0,a.jsx)(n.a,{href:"/docs/learn-scams",children:"Keeping your private key secure"})," is\nessential to avoid identity theft or consequent loss of funds. Currently, scams are one of the main\nfactors hindering web3 adoption. No legitimate person or entity will ever ask you to share your\nprivate key, and those who attempt to do so are likely trying to steal your digital identity and\nanything you own related to it."]}),"\n",(0,a.jsxs)(n.p,{children:["To mitigate risks of key mismanagement (for ",(0,a.jsx)(n.strong,{children:"non-custodial"})," accounts, i.e. when you have custody\nof your keys) there are ",(0,a.jsx)(n.a,{href:"/docs/learn-account-abstraction",children:"account abstraction"})," solutions that\nseparate the key management from the user experience. To mitigate key hacks, there are cold wallet\nsolutions where the private key is generated and stored on dedicated devices with secure elements\nthat are not exposed to the internet (see ",(0,a.jsx)(n.a,{href:"/docs/ledger",children:"Ledger"}),"), or dedicated applications that can\nbe installed on air-gapped devices such as phones (see ",(0,a.jsx)(n.a,{href:"/docs/polkadot-vault",children:"Polkadot Vault"}),"). For\n",(0,a.jsx)(n.strong,{children:"custodial"})," accounts, you trust third parties to manage your keys and give you access whenever\nneeded."]}),"\n",(0,a.jsxs)(n.p,{children:["To summarize, data ownership comes from the fact that any message you sign with your private key\ncomes from your digital identity, and the signature proof can be cryptographically verified. Unless\nsomeone else stole your keys, you and only you are held accountable for signing the messages and are\nresponsible for the information on your account. Transferring an ",(0,a.jsx)(n.a,{href:"./learn-nft-index",children:"NFT"})," between\ntwo accounts is essentially a transfer of ownership."]}),"\n",(0,a.jsx)(n.h2,{id:"trustless-environment",children:"Trustless Environment"}),"\n",(0,a.jsx)(n.p,{children:"Cryptography also brings the possibility of building a trustless environment where we do not have to\ntrust third parties, or have any relationship between the sender and receiver of a message. We do\nnot need to trust centralized entities since we can verify who wrote the message and who owns what\njust by using cryptography. Trust is embedded in the code. Well-audited and reviewed code ultimately\nprovides a solid, trustless environment."}),"\n",(0,a.jsx)(n.h2,{id:"data-immutability",children:"Data Immutability"}),"\n",(0,a.jsx)(n.p,{children:"But what if the data we own can be easily modified or tampered with after they have been signed and\nstored?"}),"\n",(0,a.jsxs)(n.p,{children:["Here is where ",(0,a.jsx)(n.strong,{children:"blockchain"})," technology plays an important role. Blockchain networks comprise of\ndistributed state machines where increments of data are stored within blocks that build on each\nother using hash functions. For example, the hash of block ",(0,a.jsx)(n.code,{children:"N + 1"})," contains data of that block\ntogether with the hash of the previous block ",(0,a.jsx)(n.code,{children:"N"}),". This creates the situation where if you modify the\ncontent of block ",(0,a.jsx)(n.code,{children:"N"})," you will change the hash of block ",(0,a.jsx)(n.code,{children:"N + 1"}),", ",(0,a.jsx)(n.code,{children:"N + 2"}),", etc. essentially breaking\nthe chain. If a blockchain network is not sufficiently decentralized, it can be possible to add an\ninvalid block (a block with invalid transactions) or to censor certain transactions. In decentralized\nproof-of-stake blockchains like Polkadot however, such attacks are financially expensive and\nattempting them can get you ",(0,a.jsx)(n.a,{href:"/docs/learn-offenses",children:"slashed"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"So, with blockchain as a means of storing data and transactions permanently without an option to\nmodify them, we can ensure what we cryptographically sign with our digital identity is set in stone\ndigitally."}),"\n",(0,a.jsx)(n.h2,{id:"data-retrievability",children:"Data Retrievability"}),"\n",(0,a.jsx)(n.p,{children:"But what if our data are stored in a blockchain, but that blockchain is run on a centralized server\nor by different computers belonging to the same operator?"}),"\n",(0,a.jsx)(n.p,{children:"That server or those computers can be easily shut down, the blockchain can be stopped from running\nand its data wiped out. This can be achieved from the inside by the malicious network participants\nor from the outside by regulatory rules and other forces. Though blockchain offers immutability,\nthere would be little sense in using a centralized blockchain to prove ownership as it can possibly\ncease to exist in the future."}),"\n",(0,a.jsx)(n.p,{children:"Data retrievability is dependent on how resilient the blockchain is. Resiliency is achieved through\nelements such as decentralization, economic incentives, and on-chain governance to ensure the\nnetwork can sustain on its own."}),"\n",(0,a.jsxs)(n.admonition,{title:"Data Retrievability vs. Data Availability",type:"info",children:[(0,a.jsxs)(n.p,{children:["Data ",(0,a.jsx)(n.strong,{children:"retrievability"})," is the ability of nodes to retrieve\xa0historical information\xa0from the\nblockchain. Historical data is not needed to verify new blocks; it is only required for synching\nfull nodes from the Genesis block or serving specific historical requests."]}),(0,a.jsxs)(n.p,{children:["Data ",(0,a.jsx)(n.strong,{children:"availability"})," assures full nodes can access and verify the full transactions associated with\na specific block. It does not necessarily imply that the data is accessible forever. For more\ninformation about data availability on Polkadot, see the\n",(0,a.jsx)(n.a,{href:"/docs/learn-parachains-protocol#availability-and-validity-anv-protocol",children:"dedicated section on the parachain protocol page"}),"."]})]}),"\n",(0,a.jsx)(n.h3,{id:"decentralization",children:"Decentralization"}),"\n",(0,a.jsx)(n.p,{children:"Having multiple nodes belonging to numerous independent identities increases network resiliency and\nthus data retrievability."}),"\n",(0,a.jsx)(n.p,{children:"Blockchain is a state machine, and consensus must be achieved on every single state transition by\nevery node on the blockchain network. In Proof of Work (PoW) based blockchains, which let any node\nin the network produce a block, consensus is achieved probabilistically by building on the longest\nchain (at the cost of energy-intensive computations). Proof of Stake (PoS) based blockchains like\nPolkadot enable deterministic consensus by allowing only a limited number of privileged nodes to\nproduce blocks. A PoW blockchain can be considered centralized if a single entity can capture 51% of\nnetwork nodes. Similarly, a PoS blockchain can be considered centralized if a single entity controls\nmore than one-third of nodes, as a two-thirds majority is required to arrive at a deterministic\nconsensus. Different blockchains have different levels of decentralization."}),"\n",(0,a.jsxs)(n.p,{children:["Nowadays, most of the nodes cannot be run on consumer-grade hardware. Node running equipment is\ntypically rented through service providers. Resiliency is also achieved by ensuring nodes run on as\nmany different providers as possible and avoiding a significant share of the nodes being run under\nthe same provider in the same geographic region. A legislation change or a natural disaster could\nimpact a considerable fraction of the nodes and potentially stop the network. Polkadot's level of\ndecentralization can be explored through the ",(0,a.jsx)(n.a,{href:"https://polkawatch.app/",children:"Polkawatch app"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://nodes.web3.foundation/",children:"Decentralized Nodes program"})," aims to incentivize the creation\nof new validator nodes to increase the level of node decentralization."]}),"\n",(0,a.jsx)(n.h3,{id:"decentralized-storage",children:"Decentralized Storage"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"./glossary/#blockspace",children:"Blockspace"})," is limited and valuable. Not all data we have can be stored on\nthe blockchain. Large files like pictures, music, movies, etc., typically will never be held on the\nblockchain. But where can we stored those files? To stick to the web3 vision, we need a resilient\nand decentralized storage solution."]}),"\n",(0,a.jsxs)(n.p,{children:["The most important thing is that the proof of ownership is stored on the blockchain through the\nhashes of data and metadata. The files are uploaded on decentralized storage networks hosting\nprotocols like ",(0,a.jsx)(n.a,{href:"https://ipfs.tech/",children:"IPFS"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"stake-allocation",children:"Stake Allocation"}),"\n",(0,a.jsxs)(n.p,{children:["In Proof-of-Stake blockchains, security is dictated by how much stake is locked on-chain (financial\nsecurity). In a decentralized network, you want to ensure that the difficulty level for a financial\nattack to happen is equally difficult across all nodes. Polkadot's\n",(0,a.jsx)(n.a,{href:"/docs/learn-phragmen",children:"election algorithm"})," makes sure that the stake is maximized across all\nactive validators, and the variance in stake across validators is minimized as much as possible."]}),"\n",(0,a.jsx)(n.h3,{id:"economic-incentives",children:"Economic Incentives"}),"\n",(0,a.jsx)(n.p,{children:"Strong incentives are essential to incentivize network participants to run nodes and secure the\nnetwork. Strong incentives are possible because blockchain is a trustless system where there are no\nintermediaries between who sends a message and who receives it. Such incentives, coupled with\npunishment for bad behavior, ensure that most of the participants make the interest of the network\nand work together to improve it."}),"\n",(0,a.jsxs)(n.p,{children:["But from where are those incentives coming from? Polkadot's native token\n",(0,a.jsx)(n.a,{href:"/docs/learn-inflation",children:"DOT is inflationary"}),". Inflation is used to pay validators for running\nnodes and reward nominators for providing the necessary stake to secure the network."]}),"\n",(0,a.jsx)(n.h3,{id:"governance-and-treasury",children:"Governance and Treasury"}),"\n",(0,a.jsxs)(n.p,{children:["In Polkadot, an on-chain ",(0,a.jsx)(n.a,{href:"/docs/learn-polkadot-opengov-treasury",children:"treasury"})," together with an\n",(0,a.jsx)(n.a,{href:"/docs/learn-polkadot-opengov",children:"open governance"})," model allow to access funds in a fully\ndecentralized manner without any bank transaction whatsoever. This opens up the possibility to come\nto a decision through on-chain voting mechanism, promoting a sense of community and creating an\nindependent socio-economical environment."]}),"\n",(0,a.jsx)(n.h2,{id:"decentralized-access-points",children:"Decentralized Access Points"}),"\n",(0,a.jsx)(n.p,{children:"But what if we have data we own stored on a resilient blockchain, but the only way to access the\nblockchain is through an RPC server? Whoever is behind the server or an attacker could present us\ndata that is not the truth. How can we trustlessly verify that the data is true?"}),"\n",(0,a.jsx)(n.p,{children:"Here is where light clients play a key role. Light clients are clients that can sit on a web browser\nand can fetch data directly from blockchain. The figure below shows the architectural difference\nbetween web2 and web3 applications."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"light-clients",src:t(13885).A+"",width:"1589",height:"888"})}),"\n",(0,a.jsxs)(n.p,{children:["In web2 applications, data are stored on a centralized server, while in web3 applications, data (or\nbetter data proofs) are stored on the blockchain. With light clients, it is possible to access\nblockchain data through a full node and verify the validity of such data. They efficiently\nsynchronize (",(0,a.jsx)(n.em,{children:"warp sync"})," in case of Polkadot) with a full node to obtain (Merkle Root) commitment of\nthe latest chain state, and hence can trustlessly verify any response by full node against the\ncommitment. In this way, we can always verify that the data we see is the truth, which is done\nautomatically by the light client. Polkadot has a browser-embedded light client\n",(0,a.jsx)(n.a,{href:"/docs/build-light-clients",children:"Substrate connect"})," that uses the\n",(0,a.jsx)(n.a,{href:"https://github.com/smol-dot/smoldot",children:"smoldot"})," codebase. Most web3 applications today access\nblockchain data through a centralized RPC server."]}),"\n",(0,a.jsxs)(n.p,{children:["For more details about the inner workings of Smoldot, see\n",(0,a.jsx)(n.a,{href:"https://hackmd.io/@s_iGZLIITG6WjSgnFX0pcg/rkmmcvBno",children:"this blog post"})," and\n",(0,a.jsx)(n.a,{href:"https://youtu.be/YjsLpfM6a7E",children:"this video"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"interoperability",children:"Interoperability"}),"\n",(0,a.jsx)(n.p,{children:"The Web3 landscape's expansion into a multi-layered ecosystem highlights the need for\ninteroperability. Blockchains compete and differentiate themselves based on decentralization,\nthroughput, and specific use case focus. Some aim for a single high-performance base-layer\nblockchain, while others focus on decentralization through layer-2 networks. With such diverse\napproaches, it's crucial for distinct on-chain environments to interoperate, especially for\ndevelopers building cross-chain applications and traditional systems interacting with multiple\nblockchains."}),"\n",(0,a.jsx)(n.p,{children:"Various cross-chain interactions are employed to achieve interoperability, including token swaps,\ntoken bridges, native payments, contract calls, and programmable token bridges. Each mechanism\nserves specific functions, such as facilitating the exchange of tokens between different blockchains\nor enabling smart contract interactions across chains. Other interoperability solutions validate the\nstate of a source blockchain and relay transactions to the destination blockchain, which is\nessential for completing cross-chain interactions."}),"\n",(0,a.jsxs)(n.p,{children:["Interoperability between chains having different consensus has been a challenging task. Most of\nhacks have exploited vulnerabilities in interoperability protocols. Polkadot provides secure\ninteroperability through ",(0,a.jsx)(n.a,{href:"/docs/learn-xcm",children:"XCM"})," and ",(0,a.jsx)(n.a,{href:"/docs/learn-xcm-transport",children:"XCMP"})," to\nall blockchains attached to it. For more information, see the ",(0,a.jsx)(n.a,{href:"/docs/polkadot-v1",children:"Polkadot 1.0 page"}),"\nand\n",(0,a.jsx)(n.a,{href:"/docs/polkadot-direction#xcm-and-accords",children:"the section about XCM and Accords in Polkadot Direction page"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},13885:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/light-clients-a57adf45f86aa82f7db3547c5d55b92f.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);