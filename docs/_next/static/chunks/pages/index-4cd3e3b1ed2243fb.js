(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(73412)}])},73412:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var r=t(85893),s=t(9008),a=t.n(s),o=t(67294),i=t(34051),l=t.n(i),c=t(78532);function d(e,n,t,r,s,a,o){try{var i=e[a](o),l=i.value}catch(c){return void t(c)}i.done?n(l):Promise.resolve(l).then(r,s)}var u=function(){var e=(0,c.et)().images;return(0,r.jsx)(r.Fragment,{children:e.length>0&&e.map((function(e,n){return(0,r.jsx)(f,{totalDonationss:e.donationAmount,address:e.author,description:e.description,hash:e.hash,id:e.id},n)}))})},f=function(e){var n,t=e.address,s=e.description,a=e.totalDonationss,o=e.hash,i=e.id,u=(0,c.et)(),f=u.donateImageOwner,x=u.updateImages;return(0,r.jsxs)("div",{className:"w-full md:mx-0 md:max-w-2xl mt-5 p-3 border rounded-xl flex flex-col",children:[(0,r.jsxs)("div",{className:"flex flex-row space-x-5 bg-gray-100 rounded-t-xl py-3 px-4 border-t border-l border-r font-mono items-center",children:[(0,r.jsx)("img",{width:35,height:35,src:"https://picsum.photos/seed/".concat(u.account,"/35/35")}),(0,r.jsx)("div",{className:"overflow-ellipsis w-52 overflow-hidden",children:t})]}),(0,r.jsx)("img",{src:"https://ipfs.infura.io/ipfs/".concat(o)}),(0,r.jsxs)("div",{className:"py-3 px-4 flex flex-col border-l border-r",children:[(0,r.jsx)("span",{className:"font-sans font-bold",children:"Description"}),(0,r.jsx)("span",{className:"font-sans pt-2",children:s})]}),(0,r.jsxs)("div",{className:"bg-gray-100 rounded-b-xl py-3 px-4 border-b border-l border-r font-mono flex flex-row justify-between",children:[(0,r.jsxs)("span",{children:["Total DONATIONS: ",window.web3.utils.fromWei(a,"Ether")," ","MATIC"]}),(0,r.jsx)("div",{onClick:(n=l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.web3.utils.toWei("1","Ether"),e.next=3,f(i,n);case 3:return e.next=5,x();case 5:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(r,s){var a=n.apply(e,t);function o(e){d(a,r,s,o,i,"next",e)}function i(e){d(a,r,s,o,i,"throw",e)}o(void 0)}))}),children:(0,r.jsx)("span",{className:"cursor-pointer font-bold text-blue-400",children:"DONATE: 1 MATIC"})})]})]})};function x(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,s,a=[],o=!0,i=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(l){i=!0,s=l}finally{try{o||null==t.return||t.return()}finally{if(i)throw s}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return x(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=function(){var e=(0,c.et)().account,n=m(o.useState(""),2),t=n[0],s=n[1];return(0,o.useEffect)((function(){"0x0"!==e&&s("https://picsum.photos/seed/".concat(e,"/35/35"))}),[e]),(0,r.jsx)("div",{className:"container items-center",children:(0,r.jsxs)("div",{className:"flex flex-col md:flex-row items-center md:justify-between border py-3 px-5 rounded-xl",children:[(0,r.jsx)("span",{className:"font-mono",children:"Polygon MATIC"}),(0,r.jsxs)("div",{className:"flex flex-row space-x-2 items-center",children:[(0,r.jsx)("div",{className:"h-5 w-5 rounded-full bg-blue-500"}),(0,r.jsx)("span",{className:"font-mono text-xl font-bold",children:"Decentralized Donation Images"})]}),(0,r.jsxs)("div",{className:"flex flex-row space-x-2 items-center",children:[(0,r.jsx)("span",{className:"font-mono overflow-ellipsis w-52 overflow-hidden",children:e}),e&&t&&(0,r.jsx)("img",{width:35,height:35,src:"".concat(t)})]})]})})},p=t(33587),v=t(10001),b=t(92238);function g(e,n,t,r,s,a,o){try{var i=e[a](o),l=i.value}catch(c){return void t(c)}i.done?n(l):Promise.resolve(l).then(r,s)}function j(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var a=e.apply(n,t);function o(e){g(a,r,s,o,i,"next",e)}function i(e){g(a,r,s,o,i,"throw",e)}o(void 0)}))}}var w=function(e){var n=e.isOpen,t=e.closeModal,s=(0,o.useState)("Upload"),a=s[0],i=s[1],d=(0,o.useState)(null),u=d[0],f=d[1],x=(0,c.et)(),m=x.contract,h=x.account,g=x.updateImages,w=(0,b.Ue)({url:"https://ipfs.infura.io:5001/api/v0"}),y=(0,o.useState)(""),N=y[0],I=y[1],C=function(){var e=j(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i("Uploading to IPFS..."),e.next=3,w.add(u);case 3:n=e.sent,i("Creating smart contract..."),m.methods.uploadImage(n.path,N).send({from:h}).then(j(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:f(null),I(""),i("Upload"),t();case 6:case"end":return e.stop()}}),e)})))).catch((function(){t()}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(p.u,{appear:!0,show:n,as:o.Fragment,children:(0,r.jsxs)(v.V,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:t,children:[(0,r.jsx)(v.V.Overlay,{className:"fixed inset-0 bg-black opacity-40"}),(0,r.jsxs)("div",{className:"min-h-screen px-4 text-center ",children:[(0,r.jsx)(p.u.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)(v.V.Overlay,{className:"fixed inset-0"})}),(0,r.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),(0,r.jsx)(p.u.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,r.jsxs)("div",{className:"inline-block w-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl max-w-xl",children:[(0,r.jsx)(v.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Upload Image to IPFS"}),(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsx)("input",{onChange:function(e){return f(e.target.files[0])},className:"my-3",type:"file"})}),u&&(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsx)("img",{src:URL.createObjectURL(u)})}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)("textarea",{onChange:function(e){I(e.target.value)},value:N,placeholder:"Description",className:"px-3 py-1 font-sourceSansPro text-lg bg-gray-100 hover:bg-white focus:bg-white rounded-lg border-4 hover:border-4 border-transparent hover:border-green-200 focus:border-green-200 outline-none focus:outline-none focus:ring w-full pr-10 transition-all duration-500 ring-transparent"})}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)("button",{type:"button",disabled:"Upload"!==a,className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:function(){u&&C()},children:a})})]})})]})]})})})};function y(){var e=(0,o.useState)(!1),n=e[0],t=e[1],s=(0,c.et)().loading;return(0,r.jsxs)("div",{className:"flex flex-col items-center justify-start min-h-screen py-2",children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"DDI"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(w,{isOpen:n,closeModal:function(){t(!1)}}),(0,r.jsx)(h,{}),(0,r.jsx)("div",{className:"max-w-2xl w-full bg-blue-100 rounded-xl flex justify-center items-center py-2 mt-3 hover:bg-blue-200 cursor-pointer",onClick:function(){t(!0)},children:(0,r.jsx)("span",{className:"text-blue-500 font-bold text-lg",children:"Upload Image"})}),s?(0,r.jsx)("div",{className:"font-bold text-gray-400 mt-36 text-4xl",children:"Loading..."}):(0,r.jsx)(u,{})]})}},63897:function(){}},function(e){e.O(0,[152,774,888,179],(function(){return n=48312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);