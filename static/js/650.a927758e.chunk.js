(self.webpackChunkd2_buddy=self.webpackChunkd2_buddy||[]).push([[650],{4046:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return cn}});var r=t(1413),i=t(885),a=t(5861),s=t(7757),o=t.n(s);function c(e){e.setUTCMinutes(0),e.setUTCSeconds(0),e.setUTCMilliseconds(0)}var l=17;function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,n=new Date(e);c(n),n.getUTCHours()<l&&n.setUTCDate(n.getUTCDate()-1),n.setUTCHours(l);var t=new Date(n);return t.setUTCDate(t.getUTCDate()+1),{start:n,end:t}}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=new Date(e).getTime(),a=h(e,n,t,r),s=a.start,o=a.end;if(s.getTime()<i&&i<o.getTime())return{start:s,end:o}}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=new Date(e);for(c(i),i.getUTCHours()<t&&i.setUTCDate(i.getUTCDate()-1),i.setUTCHours(t);i.getUTCDay()!==n;)i.setUTCDate(i.getUTCDate()-1);var a=new Date(i);return a.setUTCDate(a.getUTCDate()+r),{start:i,end:a}}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=new Date(e);for(c(i),i.getUTCHours()>=t&&i.setUTCDate(i.getUTCDate()+1),i.setUTCHours(t);i.getUTCDay()!==n;)i.setUTCDate(i.getUTCDate()+1);var a=new Date(i);return a.setUTCDate(a.getUTCDate()+r),{start:i,end:a}}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return h(e,2,l,7)}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return f(e,5,l,4)}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return u(e,5,l,4)}var g=t(4942),y=[0,15047172e5,15124932e5,15257988e5,15360804e5,1543338e6,15518052e5,15596676e5,15699492e5,15759972e5,15838596e5,1591722e6,16050276e5,161289e7,16207524e5],w={redWar:1,curseOfOsiris:2,warmind:3,resurgence:3,forsaken:4,outlaw:4,blackArmory:5,forge:5,jokersWild:6,drifter:6,penumbra:7,opulence:7,shadowkeep:8,undying:8,dawn:9,worthy:10,arrivals:11,beyondLight:12,hunt:12,chosen:13};Object.entries(w).reduce((function(e,n){var t=(0,i.Z)(n,2),r=t[0],a=t[1];return Object.assign(e,(0,g.Z)({},r,function(e){var n=y[e];if(n){var t=y[e+1];return{start:new Date(n),end:t?new Date(t):void 0,seasonNumber:e}}}(a)))}),{});var x,j=6e4,D=36e5,S=24*D,k=7*S,b=30*S,C=365.25*S,_=t(2791),M=t(1625),$=t(168),T=t(6031),N=(0,T.iv)(x||(x=(0,$.Z)(["\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: safe center;\n  text-align: center;\n  margin: auto;\n"]))),A=T.ZP.section.withConfig({displayName:"CycleCardModalStyle__CurrentItem",componentId:"sc-8dv19i-0"})([""," margin-top:",";"],N,(function(e){return e.theme.lengths.pad})),U=T.ZP.section.withConfig({displayName:"CycleCardModalStyle__UpcomingItems",componentId:"sc-8dv19i-1"})([""," gap:",";& > h3{margin:auto;margin-top:",";order:-1;}"],N,(function(e){return e.theme.lengths.gap}),(function(e){return e.theme.lengths.gap})),P=t(7892),O=t.n(P);function Z(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!n)return B(e,!1);var t=new Intl.DateTimeFormat(void 0,{hour:"numeric"}).formatToParts(new Date(e));return void 0!==t.dayPeriod?O()(e).format("h:mm A"):O()(e).format("H:mm")}function B(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return O()(e).format("ddd, D MMM YYYY")+(n?" "+Z(e):"")}function L(e){return e.charAt(0).toUpperCase()+e.slice(1)}function H(e){if(Math.abs(e)<750)return"now";var n=function(e){var n=Math.abs(e);if(n<6e4)return"less than 1 minute";if(n<9e4)return"1 minute";if(n<=345e4)return"".concat(Math.round(n/j)," minutes");if(n<22*D)return"".concat(n%D/D<.875?Math.floor(n/D):Math.ceil(n/D)).concat(n%D/D<.125||n%D/D>=.875?"":n%D/D<.375?"\xbc":n%D/D<.625?"\xbd":"\xbe"," hour").concat(n<675e4?"":"s");if(n<1.5*S)return"1 day";if(n<26*S)return"".concat(Math.round(n/S)," days");if(n<46*S)return"1 month";if(n<11*b)return"".concat(Math.round(n/b)," months");if(n<18*b)return"1 year";return"".concat(Math.round(n/C)," years")}(e);return e<0?"".concat(n," ago"):"in ".concat(n)}function R(e){return e&&e<=Date.now()}function V(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now()+1e3;if(!e||!n)return n;var r=(n-=n%1e3)%e,i=(t+=1e3-t%1e3)%e||0;return i<r?t-i+r:t-i+r+e}var I=t(184),W=function(e){var n=e.timestamp,t=e.hasTime,r=e.prefix,a=e.conditions,s=(0,_.useState)(Date.now()),o=(0,i.Z)(s,2),c=o[0],l=o[1],d=(0,_.useState)(H(n-c)),u=(0,i.Z)(d,2),h=u[0],f=u[1];(0,_.useEffect)((function(){var e=setTimeout((function(){l((function(){return Date.now()})),f((function(){return H(n-c)}))}),V(3e4,0)-Date.now());return function(){return clearTimeout(e)}}),[c,n]),a=Array.isArray(a)?a:[a];var m,p;return n&&a.every((function(e){return!0===e||("past"===e?R(n):"future"===e?!R(n):"past"===(null===e||void 0===e?void 0:e.when)?R(e.timestamp):"future"===(null===e||void 0===e?void 0:e.when)?!R(e.timestamp):void 0)}))?(m=Math.abs(n-c)<S?"at "+Z(n,t):"on "+B(n,t),(0,I.jsx)("p",{children:(p="".concat(r?"".concat(Array.isArray(r)?R(n)?r[1]:r[0]:r," "):"").concat(h?"".concat(h,", "):"").concat(m),p.split(". ").map(L).join(". "))})):null};W.defaultProps={hasTime:!0,conditions:[!0]};var Y=function(e){return e===D?"Hourly":e===S?"Daily":e===k?"Weekly":e===b?"Monrthly":e===C?"Yearly":null},E=function(e){var n=e.items,t=e.nextCycle,r=e.currentItem,i=e.period;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("p",{children:["Period: ",Y(i)]}),(0,I.jsxs)(A,{children:[n[r],(0,I.jsx)(W,{prefix:"Cycles",timestamp:t})]}),n.length>1&&(0,I.jsxs)(U,{children:[(0,I.jsx)("h3",{children:"Upcoming"}),n.map((function(e,a){var s=(a-r+n.length-1)%n.length;return(0,I.jsxs)("section",{style:{order:s},children:[e,(0,I.jsx)(W,{timestamp:t+s*i})]},a)}))]})]})},Q=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=15046488e5;return(e-t+n)/j};function F(e){return!!e&&new Date(e).getTime()}var K=(0,_.forwardRef)((function(e,n){var t=e.title,r=e.items,a=e.start,s=e.period,o=e.icon,c=(0,_.useState)(V(s,F(a))),l=(0,i.Z)(c,2),d=l[0],u=l[1],h=(0,_.useState)(Math.floor((Date.now()-a)/s)%r.length),f=(0,i.Z)(h,2),m=f[0],p=f[1];return(0,_.useEffect)((function(){var e=setTimeout((function(){u(V(s,F(a))),p(Math.floor((Date.now()-a)/s)%r.length)}),d-Date.now());return function(){clearTimeout(e)}}),[a,s,d,r.length]),(0,I.jsxs)(M.Z,{ref:n,className:"cycle-card",title:t,style:{order:Q(d,-5*C)},modalContent:(0,I.jsx)(E,{items:r,nextCycle:d,currentItem:m,period:s}),icon:o,children:[r[m],(0,I.jsx)(W,{prefix:"Cycles",timestamp:d})]})}));K.defaultProps={period:S};var z=K,q=t(4996),G=t(8301),J=t(4036),X=t(8722);function ee(e){var n=(null===e||void 0===e?void 0:e.screenshot)||(null===e||void 0===e?void 0:e.pgcrImage);return n?"https://bungie.net"+n:null}var ne={None:0,Story:2,Strike:3,Raid:4,AllPvP:5,Patrol:6,AllPvE:7,Reserved9:9,Control:10,Reserved11:11,Clash:12,Reserved13:13,CrimsonDoubles:15,Nightfall:16,HeroicNightfall:17,AllStrikes:18,IronBanner:19,Reserved20:20,Reserved21:21,Reserved22:22,Reserved24:24,AllMayhem:25,Reserved26:26,Reserved27:27,Reserved28:28,Reserved29:29,Reserved30:30,Supremacy:31,PrivateMatchesAll:32,Survival:37,Countdown:38,TrialsOfTheNine:39,Social:40,TrialsCountdown:41,TrialsSurvival:42,IronBannerControl:43,IronBannerClash:44,IronBannerSupremacy:45,ScoredNightfall:46,ScoredHeroicNightfall:47,Rumble:48,AllDoubles:49,Doubles:50,PrivateMatchesClash:51,PrivateMatchesControl:52,PrivateMatchesSupremacy:53,PrivateMatchesCountdown:54,PrivateMatchesSurvival:55,PrivateMatchesMayhem:56,PrivateMatchesRumble:57,HeroicAdventure:58,Showdown:59,Lockdown:60,Scorched:61,ScorchedTeam:62,Gambit:63,AllPvECompetitive:64,Breakthrough:65,BlackArmoryRun:66,Salvage:67,IronBannerSalvage:68,PvPCompetitive:69,PvPQuickplay:70,ClashQuickplay:71,ClashCompetitive:72,ControlQuickplay:73,ControlCompetitive:74,GambitPrime:75,Reckoning:76,Menagerie:77,VexOffensive:78,NightmareHunt:79,Elimination:80,Momentum:81,Dungeon:82,Sundial:83,TrialsOfOsiris:84,Dares:85,Offensive:86,LostSector:87},te={None:0,Kinetic:1,Arc:2,Thermal:3,Void:4,Raid:5,Stasis:6},re=3,ie=function(e,n){return Object.keys(e).find((function(t){return e[t]===n}))};var ae=function(e){var n;return null===(n=ie(te,null===e||void 0===e?void 0:e.defaultDamageType))||void 0===n?void 0:n.replace(/thermal/i,"Solar")};var se=function(e){var n,t=null===e||void 0===e?void 0:e.itemTypeDisplayName;return"Grenade Launcher"===t&&re===(null===e||void 0===e||null===(n=e.equippingBlock)||void 0===n?void 0:n.ammoType)&&(t="Heavy "+t),t},oe={Legendary:"#4e3263",Exotic:"#cdad34"};var ce=function(e){return oe[e]||"#04040e"},le=t(1933),de=[{name:"DestinyTracker",url:"https://destinytracker.com/destiny-2/db/items/",icon:"https://cod.tracker.gg/public/icons/icon192.png"},{name:"Gunsmith",url:"https://d2gunsmith.com/w/",icon:"https://d2gunsmith.com/favicon.ico"},{name:"Light.gg",url:"https://www.light.gg/db/en/items/",icon:"https://www.light.gg/Content/Images/new-icon.png"}];function ue(e){var n=e.id;return(0,I.jsx)("ul",{className:"weapon-links",children:de.map((function(e){return(0,I.jsx)("li",{children:(0,I.jsxs)("a",{className:"site-link",href:e.url+n,target:"_blank",rel:"noreferrer",children:[e.icon&&(0,I.jsx)(G.Z,{src:e.icon,className:"site-icon"}),e.name]})},e.name)}))})}function he(e){var n,t,r=e.id,i=e.name,a=(0,le.useQuery)(["DestinyInventoryItemDefinition",r]),s=a.data,o=a.error;if(a.isLoading)return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)("div",{className:"destiny-weapon",children:[(0,I.jsx)(J.Z,{size:"inline"})," ",i&&(0,I.jsx)("span",{children:i})]})});if(o)return console.error(o),null;i||(i=null===s||void 0===s||null===(n=s.displayProperties)||void 0===n?void 0:n.name);var c=se(s),l=ae(s),d=null===s||void 0===s||null===(t=s.inventory)||void 0===t?void 0:t.tierTypeName,u=ee(s);return(0,I.jsx)(X.Z,{triggerContent:(0,I.jsxs)("div",{className:"destiny-weapon a-link",children:[(0,I.jsx)(q.Z,{icon:["weapons",c],color:l})," ",(0,I.jsx)("span",{children:i})]}),tooltip:{contents:"".concat(d," ").concat(l," ").concat(c),backgroundColor:ce(d)},children:(0,I.jsxs)("article",{className:"weapon-modal "+(null===d||void 0===d?void 0:d.toLowerCase()),children:[(0,I.jsx)("div",{className:"weapon-screenshot",style:{backgroundImage:"url(".concat(u,")")},children:(0,I.jsx)(ue,{id:r})}),(0,I.jsxs)("div",{className:"weapon-header",children:[(0,I.jsx)(G.Z,{src:s.displayProperties.icon,className:"weapon-icon"}),(0,I.jsxs)("div",{className:"weapon-header-text",children:[(0,I.jsx)("h3",{children:i}),(0,I.jsxs)("p",{children:[d," |"," ",(0,I.jsx)(q.Z,{icon:["elements",l],color:l})," ",l," | ",(0,I.jsx)(q.Z,{icon:["weapons",c]})," ",c]})]})]})]})})}var fe=[(0,I.jsx)(he,{id:"2782847179",name:"Blasphemer"}),(0,I.jsx)(he,{id:"2164448701",name:"Apostate"}),(0,I.jsx)(he,{id:"3067821200",name:"Heretic"})];function me(){return(0,I.jsx)(z,{title:"Altars of Sorrow Weapon",items:fe,start:16488324e5,period:S,icon:"https://www.bungie.net/common/destiny2_content/icons/58bf5b93ae8cfefc55852fe664179757.png"})}var pe=t(691),ve=t(1694),ge=t.n(ve),ye=(0,_.forwardRef)((function(e,n){var t=e.id,r=e.dataArray,i=e.name,a=t?[].concat(t):[],s=(0,le.useQueries)(a.map((function(e){return{queryKey:["DestinyActivityDefinition",e]}})),{enabled:!!t});if(t){if(!s.every((function(e){return e.isSuccess})))return s.some((function(e){return e.isLoading}))?(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("article",{ref:n,className:"activity",children:(0,I.jsx)(J.Z,{size:"page",fadeIn:"none"})})}):(s.filter((function(e){return e.error})).map((function(e){return console.error(e.error)})),null);s=s.filter((function(e){return e.isSuccess})).map((function(e){return e.data}))}else s=r.map((function(e){return e.data}));return s.sort((function(e,n){return(null===e||void 0===e?void 0:e.activityLightLevel)-(null===n||void 0===n?void 0:n.activityLightLevel)})),(0,I.jsxs)("article",{ref:n,className:ge()("activity","success"),children:[(0,I.jsx)(Ne,{data:s[0],name:i}),s.map((function(e,n){return(0,I.jsxs)(_.Fragment,{children:[(0,I.jsx)(Me,{data:e}),(0,I.jsx)(Oe,{data:e})]},n)}))]})}));ye.defaultProps={};var we=t(907);var xe=t(181);function je(e){return function(e){if(Array.isArray(e))return(0,we.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,xe.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var De=t(935),Se=[{class:"Overload",pattern:/Disruption|Overload/i},{class:"Unstoppable",pattern:/Stagger|Unstoppable/i},{class:"Barrier",pattern:/Shield-Piercing|Barrier/i}],ke=(0,_.forwardRef)((function(e,n){var t=e.champions,r=e.known_champions;if(!t||t.length<1)return null;var i=new Set;return t.map((function(e){return Se.map((function(n){var t;return n.pattern.test(null===e||void 0===e||null===(t=e.displayProperties)||void 0===t?void 0:t.description)&&i.add(n.class)}))})),(0,I.jsxs)("section",{ref:n,className:"activity-champions",children:[(0,I.jsx)("h5",{className:"heading",children:"Champions"}),(0,I.jsx)("div",{className:"champions",children:je(i).map((function(e,n){return(0,I.jsx)(De.Z,{contents:"".concat(e," Champions"),children:(0,I.jsxs)("div",{className:"champion "+e,children:[(0,I.jsx)(q.Z,{icon:["champions","modifiers",e],style:{filter:"brightness(".concat(r[e]&&"75%",")")}}),r[e]>0&&(0,I.jsx)("span",{className:"champion-amount",children:r[e]})]},n)},n)}))})]})}));ke.defaultProps={champions:[],known_champions:{}};var be=(0,_.forwardRef)((function(e,n){var t,r=e.id,i=(0,le.useQuery)(["DestinyDestinationDefinition",r]),a=i.data,s=i.error;return i.isLoading?(0,I.jsxs)("p",{ref:n,className:"destination",children:[(0,I.jsx)(q.Z,{icon:["activities","Destination"]}),(0,I.jsx)(J.Z,{size:"inline"})]}):s?(console.error(s),null):(0,I.jsxs)("p",{ref:n,className:"destination",children:[(0,I.jsx)(q.Z,{icon:["activities","Destination"]}),null===a||void 0===a||null===(t=a.displayProperties)||void 0===t?void 0:t.name]})}));be.defaultProps={};var Ce=t(5987),_e=["className","data"],Me=(0,_.forwardRef)((function(e,n){var t,i=e.className,a=e.data,s=(0,Ce.Z)(e,_e),o=null===a||void 0===a||null===(t=a.selectionScreenDisplayProperties)||void 0===t?void 0:t.name;return(0,I.jsx)("h2",(0,r.Z)((0,r.Z)({ref:n,className:ge()("activity-difficulty",null===o||void 0===o?void 0:o.toLowerCase(),i)},s),{},{children:o}))}));Me.defaultProps={};var $e={LostSector:"Lost Sector"};var Te=function(e){var n=ie(ne,null===e||void 0===e?void 0:e.directActivityModeType);return $e[n]||n},Ne=(0,_.forwardRef)((function(e,n){var t=e.data,r=e.name;r||(r=t.displayProperties.name);var i=Te(t);"Nightfall"===t.originalDisplayProperties.name&&(r=t.originalDisplayProperties.description,i="Nightfall");var a=ee(t);return(0,I.jsxs)("section",{ref:n,className:"activity-header",style:{backgroundImage:"url(".concat(a,")")},children:[(0,I.jsx)("h5",{className:"activity-type",children:i}),(0,I.jsx)("h1",{className:"activity-name",children:r}),(0,I.jsx)(be,{id:t.destinationHash})]})}));Ne.defaultProps={};var Ae=(0,_.forwardRef)((function(e,n){var t,r,i,a,s=e.data,o=null===s||void 0===s||null===(t=s.displayProperties)||void 0===t?void 0:t.name,c=null===s||void 0===s||null===(r=s.displayProperties)||void 0===r?void 0:r.icon,l=null!==s&&void 0!==s&&null!==(i=s.displayProperties)&&void 0!==i&&i.description?(0,I.jsx)("p",{children:null===s||void 0===s||null===(a=s.displayProperties)||void 0===a?void 0:a.description.replace(/(?:[\s.,]*\n+[\s.,]*)+/g,"; ").replace(/(\[Disruption|Stagger\])/g,"|$1|").split("|")}):null;if(!c||!o)return null;var d=[{class:"arc",pattern:/arc/i},{class:"solar",pattern:/solar/i},{class:"void",pattern:/void/i},{class:"stasis",pattern:/stasis/i}];return(0,I.jsxs)("section",{ref:n,className:"activity-modifier",children:[(0,I.jsx)(De.Z,{contents:o,children:(0,I.jsx)(G.Z,{className:ge()("icon",d.filter((function(e){return e.pattern.test(o)})).map((function(e){return e.class}))),src:c})}),(0,I.jsxs)("div",{className:"description",children:[(0,I.jsx)("h6",{className:ge()("heading",d.filter((function(e){return e.pattern.test(o)})).map((function(e){return e.class}))),children:o}),l]})]})}));Ae.defaultProps={};var Ue={0:{known_shields:{Void:0,Solar:0,Arc:0},known_champions:{Barrier:0,Overload:0,Unstoppable:0}},480864726:{known_shields:{Void:0,Solar:1,Arc:2},known_champions:{Barrier:3,Overload:0,Unstoppable:1}},480864721:{known_shields:{Void:0,Solar:0,Arc:1},known_champions:{Barrier:5,Overload:0,Unstoppable:2}},145221019:{known_shields:{Void:5,Solar:0,Arc:7},known_champions:{Barrier:0,Overload:1,Unstoppable:2}},145221020:{known_shields:{Void:5,Solar:0,Arc:4},known_champions:{Barrier:0,Overload:4,Unstoppable:2}},3094493720:{known_shields:{Void:0,Solar:2,Arc:4},known_champions:{Barrier:3,Overload:0,Unstoppable:1}},3094493727:{known_shields:{Void:0,Solar:2,Arc:2},known_champions:{Barrier:3,Overload:0,Unstoppable:4}},2936791996:{known_shields:{Void:4,Solar:0,Arc:0},known_champions:{Barrier:2,Overload:2,Unstoppable:0}},2936791995:{known_shields:{Void:3,Solar:0,Arc:0},known_champions:{Barrier:5,Overload:4,Unstoppable:0}},1898610132:{known_shields:{Void:9,Solar:0,Arc:0},known_champions:{Barrier:0,Overload:2,Unstoppable:2}},1898610131:{known_shields:{Void:10,Solar:0,Arc:0},known_champions:{Barrier:0,Overload:4,Unstoppable:3}},660710127:{known_shields:{Void:1,Solar:0,Arc:0},known_champions:{Barrier:0,Overload:2,Unstoppable:3}},660710120:{known_shields:{Void:1,Solar:0,Arc:0},known_champions:{Barrier:0,Overload:3,Unstoppable:4}},4206916275:{known_shields:{Void:17,Solar:2,Arc:0},known_champions:{Barrier:0,Overload:1,Unstoppable:3}},4206916276:{known_shields:{Void:29,Solar:2,Arc:1},known_champions:{Barrier:0,Overload:3,Unstoppable:5}},3911969233:{known_shields:{Void:0,Solar:0,Arc:4},known_champions:{Barrier:4,Overload:0,Unstoppable:3}},3911969238:{known_shields:{Void:0,Solar:0,Arc:1},known_champions:{Barrier:7,Overload:0,Unstoppable:3}},184186581:{known_shields:{Void:0,Solar:10,Arc:0},known_champions:{Barrier:3,Overload:2,Unstoppable:0}},184186578:{known_shields:{Void:0,Solar:10,Arc:0},known_champions:{Barrier:4,Overload:6,Unstoppable:0}},567131512:{known_shields:{Void:0,Solar:8,Arc:3},known_champions:{Barrier:3,Overload:2,Unstoppable:0}},567131519:{known_shields:{Void:0,Solar:8,Arc:3},known_champions:{Barrier:4,Overload:6,Unstoppable:0}},3678847129:{known_shields:{Void:0,Solar:1,Arc:2},known_champions:{Barrier:0,Overload:3,Unstoppable:2}},3678847134:{known_shields:{Void:0,Solar:1,Arc:2},known_champions:{Barrier:0,Overload:3,Unstoppable:4}}};var Pe=function(e){return Ue[e]||{known_shields:void 0,known_champions:void 0}},Oe=(0,_.forwardRef)((function(e,n){var t=e.data,r=(0,le.useQueries)(t.modifiers.map((function(e){return{queryKey:["DestinyActivityModifierDefinition",e.activityModifierHash]}})));if(!r.every((function(e){return e.isSuccess})))return r.some((function(e){return e.isLoading}))?(0,I.jsx)("section",{ref:n,className:"activity-modifiers",children:(0,I.jsx)(J.Z,{size:"section"})}):(r.filter((function(e){return e.error})).map((function(e){return console.error(e.error)})),null);var i=Pe(null===t||void 0===t?void 0:t.hash),a=i.known_shields,s=i.known_champions,o=r.filter((function(e){return e.isSuccess})).map((function(e){return e.data})),c=o.filter((function(e){return/shielded foes/i.test(e.displayProperties.name)})),l=o.filter((function(e){return/champion foes/i.test(e.displayProperties.name)})),d=o.filter((function(e){return!/(shielded|champion) foes|champions: mob| modifiers$/i.test(e.displayProperties.name)}));return(0,I.jsxs)("section",{ref:n,className:"activity-modifiers",children:[c.length>0&&(0,I.jsx)(Be,{shields:c,known_shields:a}),l.length>0&&(0,I.jsx)(ke,{champions:l,known_champions:s}),d.length>0&&(0,I.jsxs)("section",{className:"other-modifiers",children:[(0,I.jsx)("h5",{className:"heading",children:"Modifiers"}),(0,I.jsx)("div",{className:"modifiers",children:d.map((function(e,n){return(0,I.jsx)(Ae,{data:e},n)}))})]})]})}));Oe.defaultProps={};var Ze=[{name:"Arc",pattern:/arc/i},{name:"Solar",pattern:/solar/i},{name:"Void",pattern:/void/i},{name:"Stasis",pattern:/stasis/i}],Be=(0,_.forwardRef)((function(e,n){var t=e.shields,r=e.known_shields;if(!t||t.length<1)return null;var i=new Set;return t.map((function(e){return Ze.map((function(n){var t;return n.pattern.test(null===e||void 0===e||null===(t=e.displayProperties)||void 0===t?void 0:t.description)&&i.add(n.name)}))})),(0,I.jsxs)("section",{ref:n,className:"activity-shields",children:[(0,I.jsx)("h5",{className:"heading",children:"Shields"}),(0,I.jsx)("div",{className:"shields",children:je(i).map((function(e,n){return(0,I.jsx)(De.Z,{contents:"".concat(e," Shields"),children:(0,I.jsxs)("div",{className:"shield",children:[(0,I.jsx)(q.Z,{icon:["elements",e],color:e}),r[e]>0&&(0,I.jsx)("span",{className:"shield-amount",children:r[e]})]},n)},n)}))})]})}));Be.defaultProps={shields:[],known_shields:{}};var Le=ye;function He(){var e,n,t=(0,le.useQuery)("Milestones"),r=(null===t||void 0===t||null===(e=t.data)||void 0===e||null===(n=e[1942283261])||void 0===n?void 0:n.activities)||[],i=(0,le.useQueries)(r.map((function(e){return{queryKey:["DestinyActivityDefinition",e.activityHash]}})),{enabled:!!r});return t.isSuccess&&i.every((function(e){return e.isSuccess}))?(0,I.jsx)(z,{title:"Nightfall",start:16534116e5,period:k,items:[(0,I.jsx)(X.Z,{triggerContent:i[0].data.displayProperties.description,children:(0,I.jsx)(Le,{dataArray:i})})],icon:"https://www.bungie.net/common/destiny2_content/icons/48dda413d9f412ca2b10fd56a35a2665.png",children:i[0].data.displayProperties.description}):null}var Re="DestinyActivityDefinition";function Ve(e){var n,t=e.name,r=(0,le.useQuery)(["Search",Re,t]),i=r.data,a=r.error,s=r.isLoading,o=(null===i||void 0===i||null===(n=i.results)||void 0===n?void 0:n.results)||[],c=(0,le.useQueries)(o.map((function(e){return{queryKey:[Re,e.hash]}})),{enabled:!!o});if(s||c.some((function(e){return e.isLoading})))return(0,I.jsx)("article",{className:"lost-sector",children:(0,I.jsx)(J.Z,{size:"page",fadeIn:"none"})});if(a||c.some((function(e){return e.error})))return a&&console.error(a),c.map((function(e){return e.error&&console.error(e.error)})),(0,I.jsx)("article",{className:"lost-sector",children:(0,I.jsx)("h2",{className:"error",children:"Can't find Lost Sector info..."})});var l=c.filter((function(e){return"Lost Sector"===Te(e.data)}));return(0,I.jsx)(Le,{dataArray:l})}function Ie(e,n){return n?Ie(n,e%n):e}function We(e,n){return e*n/Ie(e,n)}function Ye(e){var n=e.location;return(0,I.jsx)(X.Z,{triggerContent:(0,I.jsxs)("span",{className:"a-link",children:[n.name," - ",n.location]}),background:"https://www.bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_7d11acd7d5a3daebc0a0c906452932d6.png",children:(0,I.jsx)(Ve,{name:n.name})})}function Ee(){var e=(0,_.useMemo)((function(){var e=[{name:"K1 Crew Quarters",location:"Moon"},{name:"K1 Logistics",location:"Moon"},{name:"K1 Revelation",location:"Moon"},{name:"K1 Communion",location:"Moon"},{name:"Metamorphosis",location:"Throne World"},{name:"Sepulcher",location:"Throne World"},{name:"Extraction",location:"Throne World"},{name:"Veles Labyrinth",location:"Cosmodrome"},{name:"Exodus Garden A2",location:"Cosmodrome"},{name:"Aphelion's Rest",location:"Dreaming City"},{name:"Bay of Drowned Wishes",location:"Dreaming City"},{name:"Chamber of Starlight",location:"Dreaming City"}],n=["Chest","Helmet","Legs","Arms"],t=[];do{t.push((0,I.jsxs)("div",{children:[(0,I.jsx)(Ye,{location:e[t.length%e.length]})," (",n[t.length%n.length],")"]}))}while(t.length<We(n.length,e.length));return t}),[]);return(0,I.jsx)(z,{title:"Legend & Master Lost Sector",items:e,start:16534116e5,period:S,icon:"https://www.bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_7d11acd7d5a3daebc0a0c906452932d6.png"})}var Qe=["EDZ","Cosmodrome","Moon"].map((function(e){return(0,I.jsx)("div",{children:e})}));function Fe(){return(0,I.jsx)(z,{title:"PsiOps Battleground: Legend",items:Qe,start:16521156e5,period:S,icon:"https://www.bungie.net/common/destiny2_content/icons/b5ca23093632aa939e8209a2ee558106.png"})}var Ke=T.ZP.p.withConfig({displayName:"TimerCardDescriptionStyle__StyledDescription",componentId:"sc-an8yzt-0"})(["margin-top:",";"],(function(e){return e.theme.lengths.gap})),ze=function(e){var n=e.start,t=e.end,r=e.period,i=e.description;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(W,{prefix:n&&t&&["Starts","Started"],timestamp:n}),(0,I.jsx)(W,{prefix:n&&t&&["Ends","Ended"],timestamp:t}),Y(r)&&(0,I.jsxs)("p",{children:["Period: ",Y(r)]}),i&&(0,I.jsx)(Ke,{children:i})]})},qe=["description","start","end","period","hasTime"],Ge=function(e,n,t){for(var r=V(t,F(e));t&&n&&r>=n;)r-=t;return r},Je=(0,_.forwardRef)((function(e,n){var t=e.description,a=e.start,s=e.end,o=e.period,c=(e.hasTime,(0,Ce.Z)(e,qe)),l=(0,_.useState)(V(o,F(s))),d=(0,i.Z)(l,2),u=d[0],h=d[1],f=(0,_.useState)(Ge(a,u,o)),m=(0,i.Z)(f,2),p=m[0],v=m[1];return(0,_.useEffect)((function(){var e=setTimeout((function(){h(V(o,F(u))),v(Ge(p,u,o))}),Math.min(p,u)-Date.now);return function(){return clearTimeout(e)}}),[p,u,o]),R(u)||!u&&R(p+S)||!o&&(R(u)||!u&&R(p+S))?null:(0,I.jsxs)(M.Z,(0,r.Z)((0,r.Z)({ref:n,modalContent:(0,I.jsx)(ze,{start:p,end:u,period:o,description:t}),style:{order:Q(p,o?0:-10*C)},highlight:R(p)},c),{},{children:[(0,I.jsx)(W,{prefix:p&&u&&"Starts",timestamp:p,conditions:"future"}),(0,I.jsx)(W,{prefix:p&&u&&"Ends",timestamp:u,conditions:["future",{timestamp:p,when:"past"}]})]}))}));Je.defaultProps={hasTime:!0};var Xe=Je;function en(){var e,n,t=(0,le.useQuery)("Settings"),r=null===t||void 0===t||null===(e=t.data)||void 0===e||null===(n=e.destiny2CoreSettings)||void 0===n?void 0:n.currentSeasonHash,i=(0,le.useQuery)(["DestinySeasonDefinition",r],{enabled:!!r}),a=i.isLoading,s=i.error,o=i.data;return t.isLoading||a?null:t.error||s?(console.error(t.error),null):(0,I.jsx)(Xe,{title:"Season ".concat(o.seasonNumber,": ").concat(o.displayProperties.name),description:o.displayProperties.description,start:o.startDate,end:o.endDate,icon:"".concat("https://bungie.net").concat(o.displayProperties.icon)})}var nn=[(0,I.jsx)(he,{id:"2721157927",name:"Tarnation"}),(0,I.jsx)(he,{id:"1399109800",name:"Fel Taradiddle"}),(0,I.jsx)(he,{id:"3865728990",name:"Father's Sins"}),(0,I.jsx)(he,{id:"927567426",name:"Come to Pass"})];function tn(){return(0,I.jsx)(z,{title:"Wellspring Weapon",items:nn,start:1648746e6,period:S,icon:"https://www.bungie.net/common/destiny2_content/icons/DestinyMilestoneDefinition_feb5aecca544ab023ecf3b74ac8f509b.png"})}var rn=function(){return[{title:"Daily Reset",start:d().end,period:S,icon:"https://cdn.jsdelivr.net/gh/game-icons/icons@c10320edc7ae3f28a29d172e0dd3f029411825d7/delapouite/clockwise-rotation.svg"},{title:"Weekly Reset",start:m().end,period:k,icon:"https://cdn.jsdelivr.net/gh/game-icons/icons@c10320edc7ae3f28a29d172e0dd3f029411825d7/delapouite/clockwise-rotation.svg",link:"https://kyber3000.com/reset"},{title:"Weekend Activities",start:v()?v().start:p().start,end:v()?v().end:p().end,period:k,icon:"https://cdn.jsdelivr.net/gh/game-icons/icons@c10320edc7ae3f28a29d172e0dd3f029411825d7/delapouite/clockwise-rotation.svg",description:(0,I.jsxs)("ul",{children:[(0,I.jsx)("li",{children:(0,I.jsx)("a",{href:"https://kyber3000.com/Xur",target:"_blank",rel:"noreferrer",children:"Xur"})}),(0,I.jsx)("li",{children:(0,I.jsx)("a",{href:"https://kyber3000.com/Trials",target:"_blank",rel:"noreferrer",children:"Trials of Osiris"})})]})}]};function an(){return(an=(0,a.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return e.next=4,e.sent.json();case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var sn=function(e){return an.apply(this,arguments)}("https://raw.githubusercontent.com/CostasAK/d2-timers/events/events.json"),on=[{name:"Destiny Server and Update Status",link:"https://help.bungie.net/hc/en-us/articles/360049199271-Destiny-Server-and-Update-Status"},{name:"Bungie Maintenance Notifications",link:"https://twitter.com/BungieHelp"},{name:"Patch Notes",link:"https://www.bungie.net/en/Explore/Category?category=Updates"}];function cn(){var e=_.useState([]),n=(0,i.Z)(e,2),t=n[0],a=n[1];sn.then((function(e){return a(e)}));var s=_.useState(rn()),o=(0,i.Z)(s,2),c=o[0],l=o[1],d=_.useState(Date.now()),u=(0,i.Z)(d,2),h=u[0],f=u[1];return _.useEffect((function(){var e=setTimeout((function(){l(rn()),f((function(){return Date.now()}))}),D-h%D);return function(){return clearTimeout(e)}}),[h]),(0,I.jsxs)("div",{className:"timers-wrapper",children:[(0,I.jsxs)("div",{className:"timers",children:[(0,I.jsx)(He,{}),(0,I.jsx)(tn,{}),(0,I.jsx)(Ee,{}),(0,I.jsx)(Fe,{}),(0,I.jsx)(me,{}),(0,I.jsx)(en,{}),t.map((function(e,n){return(0,I.jsx)(Xe,(0,r.Z)({},e),n)})),c.map((function(e,n){return(0,I.jsx)(Xe,(0,r.Z)({},e),n)}))]}),(0,I.jsx)("div",{className:"links",children:on.map((function(e){return(0,I.jsx)(pe.Z,{href:e.link,children:e.name},e.name)}))})]})}},7892:function(e){e.exports=function(){"use strict";var e=1e3,n=6e4,t=36e5,r="millisecond",i="second",a="minute",s="hour",o="day",c="week",l="month",d="quarter",u="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(e,n,t){var r=String(e);return!r||r.length>=n?e:""+Array(n+1-r.length).join(t)+e},y={s:g,z:function(e){var n=-e.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),i=t%60;return(n<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function e(n,t){if(n.date()<t.date())return-e(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),i=n.clone().add(r,l),a=t-i<0,s=n.clone().add(r+(a?-1:1),l);return+(-(r+(t-i)/(a?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:c,d:o,D:h,h:s,m:a,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},w="en",x={};x[w]=v;var j=function(e){return e instanceof b},D=function e(n,t,r){var i;if(!n)return w;if("string"==typeof n){var a=n.toLowerCase();x[a]&&(i=a),t&&(x[a]=t,i=a);var s=n.split("-");if(!i&&s.length>1)return e(s[0])}else{var o=n.name;x[o]=n,i=o}return!r&&i&&(w=i),i||!r&&w},S=function(e,n){if(j(e))return e.clone();var t="object"==typeof n?n:{};return t.date=e,t.args=arguments,new b(t)},k=y;k.l=D,k.i=j,k.w=function(e,n){return S(e,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var b=function(){function v(e){this.$L=D(e.locale,null,!0),this.parse(e)}var g=v.prototype;return g.parse=function(e){this.$d=function(e){var n=e.date,t=e.utc;if(null===n)return new Date(NaN);if(k.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(m);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return t?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(n)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return k},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(e,n){var t=S(e);return this.startOf(n)<=t&&t<=this.endOf(n)},g.isAfter=function(e,n){return S(e)<this.startOf(n)},g.isBefore=function(e,n){return this.endOf(n)<S(e)},g.$g=function(e,n,t){return k.u(e)?this[n]:this.set(t,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,n){var t=this,r=!!k.u(n)||n,d=k.p(e),f=function(e,n){var i=k.w(t.$u?Date.UTC(t.$y,n,e):new Date(t.$y,n,e),t);return r?i:i.endOf(o)},m=function(e,n){return k.w(t.toDate()[e].apply(t.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(n)),t)},p=this.$W,v=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case l:return r?f(1,v):f(0,v+1);case c:var w=this.$locale().weekStart||0,x=(p<w?p+7:p)-w;return f(r?g-x:g+(6-x),v);case o:case h:return m(y+"Hours",0);case s:return m(y+"Minutes",1);case a:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,n){var t,c=k.p(e),d="set"+(this.$u?"UTC":""),f=(t={},t[o]=d+"Date",t[h]=d+"Date",t[l]=d+"Month",t[u]=d+"FullYear",t[s]=d+"Hours",t[a]=d+"Minutes",t[i]=d+"Seconds",t[r]=d+"Milliseconds",t)[c],m=c===o?this.$D+(n-this.$W):n;if(c===l||c===u){var p=this.clone().set(h,1);p.$d[f](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(e,n){return this.clone().$set(e,n)},g.get=function(e){return this[k.p(e)]()},g.add=function(r,d){var h,f=this;r=Number(r);var m=k.p(d),p=function(e){var n=S(f);return k.w(n.date(n.date()+Math.round(e*r)),f)};if(m===l)return this.set(l,this.$M+r);if(m===u)return this.set(u,this.$y+r);if(m===o)return p(1);if(m===c)return p(7);var v=(h={},h[a]=n,h[s]=t,h[i]=e,h)[m]||1,g=this.$d.getTime()+r*v;return k.w(g,this)},g.subtract=function(e,n){return this.add(-1*e,n)},g.format=function(e){var n=this,t=this.$locale();if(!this.isValid())return t.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=k.z(this),a=this.$H,s=this.$m,o=this.$M,c=t.weekdays,l=t.months,d=function(e,t,i,a){return e&&(e[t]||e(n,r))||i[t].substr(0,a)},u=function(e){return k.s(a%12||12,e,"0")},h=t.meridiem||function(e,n,t){var r=e<12?"AM":"PM";return t?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:k.s(o+1,2,"0"),MMM:d(t.monthsShort,o,l,3),MMMM:d(l,o),D:this.$D,DD:k.s(this.$D,2,"0"),d:String(this.$W),dd:d(t.weekdaysMin,this.$W,c,2),ddd:d(t.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:k.s(a,2,"0"),h:u(1),hh:u(2),a:h(a,s,!0),A:h(a,s,!1),m:String(s),mm:k.s(s,2,"0"),s:String(this.$s),ss:k.s(this.$s,2,"0"),SSS:k.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(e,n){return n||m[e]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,h,f){var m,p=k.p(h),v=S(r),g=(v.utcOffset()-this.utcOffset())*n,y=this-v,w=k.m(this,v);return w=(m={},m[u]=w/12,m[l]=w,m[d]=w/3,m[c]=(y-g)/6048e5,m[o]=(y-g)/864e5,m[s]=y/t,m[a]=y/n,m[i]=y/e,m)[p]||y,f?w:k.a(w)},g.daysInMonth=function(){return this.endOf(l).$D},g.$locale=function(){return x[this.$L]},g.locale=function(e,n){if(!e)return this.$L;var t=this.clone(),r=D(e,n,!0);return r&&(t.$L=r),t},g.clone=function(){return k.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},v}(),C=b.prototype;return S.prototype=C,[["$ms",r],["$s",i],["$m",a],["$H",s],["$W",o],["$M",l],["$y",u],["$D",h]].forEach((function(e){C[e[1]]=function(n){return this.$g(n,e[0],e[1])}})),S.extend=function(e,n){return e.$i||(e(n,b,S),e.$i=!0),S},S.locale=D,S.isDayjs=j,S.unix=function(e){return S(1e3*e)},S.en=x[w],S.Ls=x,S.p={},S}()}}]);
//# sourceMappingURL=650.a927758e.chunk.js.map