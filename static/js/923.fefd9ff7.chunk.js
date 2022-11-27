"use strict";(self.webpackChunkd2_buddy=self.webpackChunkd2_buddy||[]).push([[923],{9412:function(n,A,t){t.d(A,{Z:function(){return N}});var e,o,i,r,a,s,l,c=t(1413),d=t(5987),u=t(168),m=t(6031),h=t(9773),g=t(153),P=t(7442),p=(0,m.iv)(e||(e=(0,u.Z)(["\n  display: ",";\n  ",";\n"])),(function(n){return n.floatIcon?"block":"grid"}),(function(n){return!n.floatIcon&&(0,m.iv)(o||(o=(0,u.Z)(["\n      grid-template-columns: 4.5rem 1fr;\n      column-gap: ",";\n    "])),(function(n){return n.theme.lengths.gap}))})),z=(0,m.F4)(i||(i=(0,u.Z)(["\n  42% {\n    inset: initial;\n  }\n  43% {\n    inset: ",";\n    opacity: 0;\n  }\n  100% {\n    inset: ",";\n    opacity: 0.9;\n  }"])),(0,P.Q)(-9),(0,P.Q)(-5)),f=(0,m.iv)(r||(r=(0,u.Z)(["\n  &:hover,\n  &:active {\n    --card-content-opacity: 1;\n    border-color: ",";\n\n    &::before {\n      background-color: ",";\n    }\n\n    &::after {\n      animation: ","\n        ","s\n        both;\n    }\n  }\n"])),(function(n){return n.theme.colors.primary.foreground}),(function(n){return(0,g.Q)(n.theme.colors.primary.foreground,.2)}),z,(function(n){return 7*parseFloat(n.theme.transition.duration)/6})),C=m.ZP.article.withConfig({displayName:"CardOuterStyle__StyledArticle",componentId:"sc-96vn80-0"})(["--card-content-opacity:0.9;position:relative;border:1px solid ",";color:",";transition-duration:",",",';transition-property:border-color,transform;padding:1rem;&::before{content:"";z-index:-1;position:absolute;inset:0;background:',";transition:background-color ",";}"," "," ",""],(function(n){var A=n.theme;return(0,g.Q)(A.colors.primary.foreground,"var(--card-content-opacity)")}),(function(n){return n.theme.colors.primary.foreground}),(function(n){return n.theme.transition.duration}),(function(n){return n.theme.transition.shortDuration}),(function(n){var A=n.theme;return(0,g.Q)(A.colors.primary.background,.5)}),(function(n){return n.theme.transition.duration}),(function(n){return!!n.icon&&p}),(function(n){var A=n.highlight,t=n.theme;return A&&function(n,A){var t,e,o,i,r,a,s,l,c=null===A||void 0===A||null===(t=A.colors)||void 0===t?void 0:t.highlight,d=(null===c||void 0===c||null===(e=c[n])||void 0===e?void 0:e.dim)||(null===c||void 0===c||null===(o=c[n])||void 0===o?void 0:o.mid)||(null===c||void 0===c||null===(i=c.green)||void 0===i?void 0:i.dim),u=(null===c||void 0===c||null===(r=c[n])||void 0===r?void 0:r.bright)||(null===c||void 0===c||null===(a=c[n])||void 0===a?void 0:a.mid)||(null===c||void 0===c||null===(s=c[n])||void 0===s?void 0:s.dim)||(null===c||void 0===c||null===(l=c.green)||void 0===l?void 0:l.bright);return"\n  border-color: ".concat((0,g.Q)(u,.9),";\n  background-color: ").concat((0,g.Q)(d,.5),";\n  background: linear-gradient(30deg, ").concat((0,g.Q)(d,.1)," 0%, ").concat((0,g.Q)(d)," 100%); \n")}(A,t)}),(function(n){var A=n.hasModal,t=n.href,e=n.onClick;return(A||t||e)&&(0,m.iv)(a||(a=(0,u.Z)(['\n      user-select: none;\n      cursor: pointer;\n\n      * {\n        pointer-events: none;\n      }\n\n      &::after {\n        content: "";\n        position: absolute;\n        max-width: none;\n        inset: 0;\n        border: '," solid\n          ",";\n        opacity: 0;\n      }\n\n      ","\n\n      &:active {\n        transform: scale3d(0.99, 0.99, 1);\n      }\n    "])),(0,P.Q)(2),(function(n){return n.theme.colors.primary.foreground}),f)})),w=(0,m.iv)(s||(s=(0,u.Z)(["\n  float: left;\n  margin: 0 0.5rem -1px 0;\n  max-width: 3rem;\n  max-height: 3rem;\n  opacity: 1;\n"]))),y=(0,m.iv)(l||(l=(0,u.Z)(["\n  grid-row: 1 / 3;\n  grid-column-start: 1;\n  align-self: center;\n"]))),E=(0,m.ZP)(h.Z).withConfig({displayName:"CardInnerStyle__StyledIcon",componentId:"sc-99nati-0"})(["color:",";width:100%;max-width:4.5rem;height:auto;max-height:4.5rem;object-fit:scale-down;opacity:var(--card-content-opacity);transition-duration:",";transition-property:opacity,transform;",";",":hover &,",":active &{transform:scale(1.1);}"],(function(n){return n.theme.colors.heading}),(function(n){return n.theme.transition.duration}),(function(n){return n.$floatIcon?w:y}),C,C),Q=m.ZP.h4.withConfig({displayName:"CardInnerStyle__StyledTitle",componentId:"sc-99nati-1"})(["&::after{content:",";display:block;margin-block:calc(0.95rem - 1px) 0.55rem;border-bottom:1px solid ",";opacity:var(--card-content-opacity);transition-duration:",";transition-property:opacity;}"],(function(n){return n.titleRule?"''":"none"}),(function(n){return n.theme.colors.primary.foreground}),(function(n){return n.theme.transition.duration})),I=m.ZP.section.withConfig({displayName:"CardInnerStyle__StyledSection",componentId:"sc-99nati-2"})(["opacity:var(--card-content-opacity);transition-duration:",";transition-property:opacity;"],(function(n){return n.theme.transition.duration})),k=t(2791),B=t(184),R=function(n){var A=n.children,t=n.title,e=n.titleRule,o=n.floatIcon,i=n.icon,r=(0,k.useMemo)((function(){return i?(0,B.jsx)(E,{$floatIcon:o,src:i}):null}),[o,i]);return(0,B.jsxs)(B.Fragment,{children:[r&&r,t&&(0,B.jsx)(Q,{titleRule:e,children:t}),A&&(0,B.jsx)(I,{children:A})]})};R.defaultProps={titleRule:!1};var x=m.ZP.article.withConfig({displayName:"CardModalStyle__CardModalText",componentId:"sc-v6m2ld-0"})(["padding:",";width:max-content;"],(function(n){return n.theme.lengths.margin})),b=t(4664),M=["children","className","modalContent","customModal","title","icon"],v=(0,k.forwardRef)((function(n,A){var t=n.children,e=n.className,o=n.modalContent,i=n.customModal,r=n.title,a=n.icon,s=(0,d.Z)(n,M);return o?(0,B.jsx)(b.Z,{triggerContent:t,className:e,background:a,children:i?o:(0,B.jsxs)(x,(0,c.Z)((0,c.Z)({ref:A},s),{},{children:[r&&(0,B.jsx)("h1",{children:r}),(0,B.jsx)("section",{children:o})]}))}):t}));v.defaultProps={customModal:!1};var S=["children","hasModal","href"],j=(0,k.forwardRef)((function(n,A){var t=n.children,e=n.hasModal,o=n.href,i=(0,d.Z)(n,S);return e?(0,B.jsx)(C,(0,c.Z)((0,c.Z)({ref:A,hasModal:e},i),{},{children:t})):o?o.startsWith("steam://")?(0,B.jsx)(C,(0,c.Z)((0,c.Z)({as:"a",ref:A,href:o},i),{},{children:t})):(0,B.jsx)(C,(0,c.Z)((0,c.Z)({as:"a",ref:A,href:o,target:"_blank",rel:"noreferrer"},i),{},{children:t})):(0,B.jsx)(C,(0,c.Z)((0,c.Z)({ref:A},i),{},{children:t}))})),Z=t(2007),J=t.n(Z),F=["title","titleRule","children","modalContent","customModal","link","icon","className","floatIcon","highlight"],T=(0,k.forwardRef)((function(n,A){var t=n.title,e=n.titleRule,o=n.children,i=n.modalContent,r=n.customModal,a=n.link,s=n.icon,l=n.className,u=n.floatIcon,m=n.highlight,h=(0,d.Z)(n,F);return(0,B.jsx)(v,{className:l,modalContent:i,title:t,icon:s,customModal:r,children:(0,B.jsx)(j,(0,c.Z)((0,c.Z)({ref:A,hasModal:!!i,href:a,icon:s,floatIcon:u,highlight:m},h),{},{children:(0,B.jsx)(R,{icon:s,floatIcon:u,title:t,titleRule:void 0===e?!u:e,children:o})}))})}));T.propTypes={title:J().string,titleRule:J().bool,modalContent:J().oneOfType([J().string,J().element,J().arrayOf(J().oneOfType([J().string,J().element]))]),link:J().string,icon:J().string,className:J().string,floatIcon:J().bool,highlight:J().oneOfType([J().bool,J().string]),customModal:J().bool},T.defaultProps={floatIcon:!1,highlight:!1,customModal:!1};var N=T},8521:function(n,A,t){t.d(A,{Z:function(){return s}});var e=t(9773),o=t(1982),i=t(184),r={weapons:{"Combat Bow":{symbol:"\ue099",name:"Bow"},"Auto Rifle":{symbol:"\ue100",name:"Auto Rifle"},"Pulse Rifle":{symbol:"\ue101",name:"Pulse Rifle"},"Scout Rifle":{symbol:"\ue102",name:"Scout Rifle"},"Hand Cannon":{symbol:"\ue103",name:"Hand Cannon"},"Submachine Gun":{symbol:"\ue107",name:"Submachine Gun"},Sidearm:{symbol:"\ue109",name:"Sidearm"},Shotgun:{symbol:"\ue104",name:"Shotgun"},"Sniper Rifle":{symbol:"\ue105",name:"Sniper Rifle"},"Fusion Rifle":{symbol:"\ue106",name:"Fusion Rifle"},"Grenade Launcher":{symbol:"\ue155",name:"Grenade Launcher"},Glaive:{symbol:"\ue156",name:"Glaive"},"Rocket Launcher":{symbol:"\ue108",name:"Rocket Launcher"},"Heavy Grenade Launcher":{symbol:"\ue113",name:"Heavy Grenade Launcher"},"Linear Fusion Rifle":{symbol:"\ue152",name:"Linear Fusion Rifle"},Sword:{symbol:"\ue153",name:"Sword"},"Machine Gun":{symbol:"\ue154",name:"Machine Gun"},"Trace Rifle":{symbol:"\ue138",name:"Trace Rifle"}},elements:{Kinetic:{symbol:"",name:"Kinetic"},Void:{symbol:"\ue144",name:"Void"},Solar:{symbol:"\ue140",name:"Solar"},Arc:{symbol:"\ue143",name:"Arc"},Stasis:{symbol:"\ue139",name:"Stasis"}},activities:{LostSector:{symbol:"\ue145",name:"Lost Sector"},Destination:{symbol:(0,i.jsx)(e.Z,{src:"https://www.bungie.net/common/destiny2_content/icons/c60303e278aa5fc566a04e98c3d8024c.png",style:{aspectRatio:"1 / 1",maxWidth:"96px",maxHeight:"96px",height:"1.5em",lineHeight:"1"}}),name:"Destination"}},champions:{modifiers:{Overload:{symbol:(0,i.jsx)(e.Z,{src:"https://bungie.net/common/destiny2_content/icons/c4d9c4f1ec3167e272286bb155dc15f4.png",style:{aspectRatio:"1 / 1",maxWidth:"60px",maxHeight:"60px",height:"1.5em",lineHeight:"1"}}),name:"Overload Champions"},Unstoppable:{symbol:(0,i.jsx)(e.Z,{src:"https://bungie.net/common/destiny2_content/icons/0e40371c49f0beac97e5fd9dc2ea9348.png",style:{aspectRatio:"1 / 1",maxWidth:"60px",maxHeight:"60px",height:"1.5em",lineHeight:"1"}}),name:"Unstoppable Champions"},Barrier:{symbol:(0,i.jsx)(e.Z,{src:"https://bungie.net/common/destiny2_content/icons/2ac9bcf4a961c3b3e31da7b76a5a87f9.png",style:{aspectRatio:"1 / 1",maxWidth:"60px",maxHeight:"60px",height:"1.5em",lineHeight:"1"}}),name:"Barrier Champions"}}},controllers:{playstation:{Cross:{symbol:"\ue025",name:"Cross"}}}},a=[].concat(["Kinetic","Arc","Solar","Void","Stasis"]);var s=function(n){var A=n.icon,t=n.color,e=n.style,s=n.className,l=n.onClick,c=n.tooltip;try{var d=A.reduce((function(n,A){return n[A]}),r);return(0,i.jsx)(o.Z,{contents:c,children:(0,i.jsx)("span",{className:"destiny-icon "+A.join(" ")+" "+(a.includes(t)?null===t||void 0===t?void 0:t.toLowerCase():"")+" "+(s||""),style:e,onClick:l,children:d.symbol})})}catch(u){return console.warn("Unknown Destiny icon: ".concat(A,". ").concat(u)),null}}},9773:function(n,A,t){t.d(A,{Z:function(){return e.E}});var e=t(6292)},5852:function(n,A,t){t.d(A,{Z:function(){return s}});var e=t(885),o=t(9136),i=t(2791),r=t(184);function a(n){var A=n.element,t=n.rowGap,a=(0,i.useState)(0),s=(0,e.Z)(a,2),l=s[0],c=s[1];return(0,r.jsx)(o.Z,{scroll:!0,onResize:function(n){c(n.scroll.height)},children:function(n){var e=n.measureRef;return(0,r.jsx)("div",{ref:e,className:"masonry-item",style:{gridRowEnd:"span "+(l+t),display:"inline-block",height:"max-content",alignItems:"start"},children:A})}})}function s(n){var A=n.rowGap,t=void 0===A?7:A,e=n.className,o=n.children;return o=o.length?o:[o],(0,r.jsx)("div",{className:"masonry "+(e||""),style:{display:"grid",gridAutoRows:"1px",gridAutoFlow:"row dense",rowGap:"0",marginBottom:"-".concat(t,"px")},children:o.map((function(n,A){return(0,r.jsx)(a,{element:n,rowGap:t},A)}))})}},4664:function(n,A,t){t.d(A,{Z:function(){return h}});var e=t(1413),o=t(885),i=t(2791),r=t(8521),a=t(9773),s=t(9136),l=t(7948),c=t.n(l),d=t(9078),u=t(1982),m=t(184);function h(n){var A=n.triggerContent,t=n.className,l=n.tooltip,h=n.background,g=n.children,P=(0,i.useState)(!1),p=(0,o.Z)(P,2),z=p[0],f=p[1],C=(0,i.useState)(0),w=(0,o.Z)(C,2),y=w[0],E=w[1],Q=(0,i.useMemo)((function(){return(0,i.isValidElement)(A)?(0,i.cloneElement)(A,{onClick:function(){return f(!0)}}):(0,m.jsx)("span",{className:"a-link",onClick:function(){return f(!0)},children:A})}),[A]),I=(0,i.useCallback)((function(n,A){return(0,m.jsxs)(c(),{isOpen:n,onRequestClose:function(){return f(!1)},className:"modal "+(t||""),overlayClassName:"modal-overlay",closeTimeoutMS:250,appElement:document.getElementById("root"),style:A?{content:{width:A+2}}:{},children:[(0,m.jsx)(r.Z,{icon:["controllers","playstation","Cross"],className:"close",onClick:function(){return f(!1)},tooltip:"Close Pop-up"}),(0,m.jsx)(a.Z,{className:"background",src:h}),(0,m.jsx)(d.Z,{className:"modal-scroll",children:(0,m.jsx)(s.Z,{bounds:!0,onResize:function(n){E(n.bounds.width)},children:function(n){var A=n.measureRef;return(0,m.jsx)("div",{ref:A,className:"modal-inner",children:g})}})})]})}),[h,g,t]);return(0,m.jsxs)(m.Fragment,{children:[l?(0,m.jsx)(u.Z,(0,e.Z)((0,e.Z)({},l),{},{children:Q})):Q,I(z,y)]})}},153:function(n,A,t){t.d(A,{Q:function(){return e}});var e=function(n){var A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if("transparent"===n)return n;var t=n.match(/^#?((?:[a-f0-9]{3}){1,2})/i)[1];return t?3===t.length?"rgb(".concat(t.split("").map((function(n){return parseInt(n+n,16)})).join(" ")," / ").concat(Math.max(0,Math.min(1,A)),")"):6===t.length?"rgb(".concat(t.match(/../g).map((function(n){return parseInt(n,16)})).join(" ")," / ").concat(A,")"):(console.warn("could not parse color"),n):void 0}},7923:function(n,A,t){t.r(A),t.d(A,{default:function(){return a}});var e=t(9412),o=t(5852),i=t(184),r=[{title:"Destiny Item Manager",link:"https://app.destinyitemmanager.com/",description:"Great for managing your vault and loadouts. Can also track triumphs and look up vendors.",logo:"https://crowdin-static.downloads.crowdin.com/images/project-logo/285312/small/6ce19d53988be6a3140c7a0646dad0de73.png"},{title:"Braytech",link:"https://bray.tech/",description:"Focusses on tracking weeklies, checklists, challenges, triumphs, quests and activities.",logo:"https://bray.tech/static/images/icons/icon-192.png"},{title:"Ishtar Collective",link:"https://www.ishtar-collective.net/",description:"Here you can find all the organised lore entries of Destiny.",logo:"https://yt3.ggpht.com/a/AGF-l7_7ERZ7Bl1YysHY2v-6Jyv5PT0q7SLSPRbhSA=s900-c-k-c0xffffffff-no-rj-mo"},{title:"Blueberries.gg",link:"https://www.blueberries.gg/",description:"Offers 'Getting Started' type guides such as the Leveling Guide (which includes the power caps of the current season), and lists of recommended weapons, armor, etc.",logo:"data:image/jpeg;base64,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"},{title:"Light.gg",link:"https://www.light.gg/",description:"Look up weapons in the game and all the perks they can roll with. Has ratings for weapons and perk combinations and will rate the rolls in your vault for you as well when you log in. Do note that most of the time these rating will be automated and therefore might not be the most useful in finding a god roll, but it's a start.",logo:"https://www.light.gg/Content/Images/new-icon.png"},{title:"Engram Blue",link:"https://engram.blue/",description:"Check the state of your weapon crafts, and other tools of questionable worth (their words, not mine).",logo:"https://engram.blue/favicon.png"}];function a(n){return(0,i.jsxs)("div",{className:"links-page",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Links"}),(0,i.jsx)("p",{className:"description",children:"I have no affiliation with the sites listed. I just think they're great."})]}),(0,i.jsx)(o.Z,{className:"links",children:r.map((function(n){return(0,i.jsx)(e.Z,{link:n.link,icon:n.logo,title:n.title,className:"link",floatIcon:!0,children:n.description},n.title)}))})]})}}}]);
//# sourceMappingURL=923.fefd9ff7.chunk.js.map