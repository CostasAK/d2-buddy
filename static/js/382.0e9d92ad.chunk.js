"use strict";(self.webpackChunkd2_buddy=self.webpackChunkd2_buddy||[]).push([[382],{5852:function(e,t,i){i.d(t,{Z:function(){return l}});var r=i(885),o=i(9136),a=i(2791),s=i(184);function n(e){var t=e.element,i=e.rowGap,n=(0,a.useState)(0),l=(0,r.Z)(n,2),c=l[0],h=l[1];return(0,s.jsx)(o.Z,{scroll:!0,onResize:function(e){h(e.scroll.height)},children:function(e){var r=e.measureRef;return(0,s.jsx)("div",{ref:r,className:"masonry-item",style:{gridRowEnd:"span "+(c+i),display:"inline-block",height:"max-content",alignItems:"start"},children:t})}})}function l(e){var t=e.rowGap,i=void 0===t?7:t,r=e.className,o=e.children;return o=o.length?o:[o],(0,s.jsx)("div",{className:"masonry "+(r||""),style:{display:"grid",gridAutoRows:"1px",gridAutoFlow:"row dense",rowGap:"0",marginBottom:"-".concat(i,"px")},children:o.map((function(e,t){return(0,s.jsx)(n,{element:e,rowGap:i},t)}))})}},913:function(e,t,i){i.r(t),i.d(t,{default:function(){return F}});var r=i(1413),o=i(885),a=i(3364),s=i(5987),n=i(6031),l=i(9412),c=i(5852),h=i(8995),d=i(7892),u=i.n(d),p=i(6107),g=i(153),f=i(6948),m=(0,n.iv)(["overflow-wrap:break-word;line-height:1.1;padding-block:0.2em;color:",";"],f.r.colors.heading),y={headers:{fullWidth:(0,n.iv)(["",";position:relative;margin-bottom:",";padding-block:calc(0.2em + ",");padding-inline:",';text-align:center;&:before{content:"";position:absolute;top:0;bottom:0;left:-50vw;z-index:-1;width:150vw;max-width:none;background-color:',";border-bottom:1pt solid ",";}"],m,f.r.lengths.pad,f.r.lengths.pad,f.r.lengths.pad,(0,g.Q)(f.r.colors.primary.foreground,.2),(0,g.Q)(f.r.colors.primary.foreground,.9)),general:(0,n.iv)(["font-weight:600;font-style:normal;font-size:","rem;letter-spacing:0.03em;text-transform:uppercase;"],20/22)},grid:{reading:(0,n.iv)(["display:grid;gap:",";grid-template-columns:repeat(auto-fit,minmax(min(100%,45ch),1fr));"],f.r.lengths.gap)}},b=i(184),v=["children","search"],k=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return"/* ".concat(e," | D2 Buddy | ").concat(u()().format("YYYY-MM-DD")," ").concat((0,p.m)()," */ ").concat(t?"(is:weapon or is:armor or is:ghost or is:emblems or is:ships or is:vehicle) ":"")},x=n.ZP.section.withConfig({displayName:"DimSearchBuilderResults__StyledSection",componentId:"sc-16nqitv-0"})(["> h2{",";}> div,> section{",";gap:",";}"],y.headers.fullWidth,y.grid.reading,f.r.lengths.cardGap),w=function(e){var t=e.children,i=e.search,o=(0,s.Z)(e,v);return(0,b.jsx)(h.Z,{contents:"Click to Copy",children:(0,b.jsx)(l.Z,(0,r.Z)((0,r.Z)({},o),{},{onClick:function(){return navigator.clipboard.writeText(i)},children:t}))})},j=function(e){var t=e.toggles,i=e.toggleState,r=function(e){var t=void 0!==(null===i||void 0===i?void 0:i[e.key])?i[e.key]:e.default;return t>=0&&"Don't care"!==e.options[t]},o=function(e){return e.options[void 0!==(null===i||void 0===i?void 0:i[e.key])?i[e.key]:e.default]},a=function(e){return Array.isArray(e.filter)?e.filter[void 0!==(null===i||void 0===i?void 0:i[e.key])?i[e.key]:e.default]:"function"===typeof e.filter?e.filter(function(e){return void 0!==i[e.key+"Value"]?i[e.key+"Value"]:e.value}(e)):e.filter},s=t.map((function(e){return e.options.filter(r).map((function(t){return Object.assign(t,{category:e.display||"Top Level"})}))})).flat(),n=s.filter((function(e){return"Trash"!==o(e)})),l=s.filter((function(e){return"Trash"===o(e)})),h="".concat(k("Trash")," -is:locked ").concat(n.reduce((function(e,t){return"".concat(e," -").concat(a(t))}),"")," (").concat(l.reduce((function(e,t,i){return"".concat(e," ").concat(i?"or":""," ").concat(a(t))}),"")).concat(n.some((function(e){return"Armor"===e.category}))?" or (is:armor -(is:exotic -is:dupe))":"",")"),d="".concat(k("Wishlist",!1)," is:wishlist or is:weaponmod or is:armormod ").concat(n.reduce((function(e,t,i){return"".concat(e," or ").concat(a(t))}),""));return(0,b.jsxs)(x,{children:[(0,b.jsx)("h2",{children:"Results"}),(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(w,{title:"Trash",search:h,children:"This search will help you clear out your vault, highlighting items that you would probably consider trash."}),(0,b.jsx)(w,{title:"Wishlist",search:d,children:"This search can be used to find desirable items in, for example, the Vendors tab."})]})]})},S=i(2791),C=1.3,I=function(e){var t=e.option;return"Keep"===t?f.r.colors.highlight.green.mid:"Trash"===t?f.r.colors.highlight.red:"#888"},T=function(e){var t=e.option;return"Keep"===t?f.r.colors.highlight.green.mid:"Trash"===t?f.r.colors.highlight.red:"transparent"},D=n.ZP.label.withConfig({displayName:"Checkbox__Outer",componentId:"sc-1bwc9wl-0"})(['&,> *{cursor:pointer;}> input[type="checkbox"]{position:absolute;visibility:hidden;width:0;height:0;}']),Z=n.ZP.span.withConfig({displayName:"Checkbox__Inner",componentId:"sc-1bwc9wl-1"})(["display:grid;grid-auto-flow:row;grid-template-columns:1fr ",'em;align-items:safe center;::after{content:"";aspect-ratio:1 / 1;height:',"em;border:1px solid ",";}&&:hover::after{background-color:",";}",' > input[type="checkbox"]:checked ~ &&::after{background-image:linear-gradient( '," 0%,"," 100% );background-size:calc(","em - 6px) calc(","em - 6px);background-repeat:no-repeat;background-position:center;}"],C,C,I,(function(e){return(0,g.Q)(I(e),.5)}),D,I,I,C,C),_=n.ZP.span.withConfig({displayName:"Checkbox__Label",componentId:"sc-1bwc9wl-2"})(["background-image:linear-gradient( "," 0%,"," 100% ),linear-gradient( "," 0%,"," 100% );background-size:auto ","em;background-repeat:no-repeat;background-position:center;padding-left:","em;display:flex;justify-content:flex-start;align-items:center;"],(0,g.Q)(f.r.colors.primary.foreground,.2),(0,g.Q)(f.r.colors.primary.foreground,.2),(function(e){return(0,g.Q)(T(e),.2)}),(function(e){return(0,g.Q)(T(e),.2)}),C,f.r.text.lineHeight-C),K=n.ZP.input.withConfig({displayName:"Checkbox__Value",componentId:"sc-1bwc9wl-3"})(["margin-left:auto;background:",";color:",";border:1px solid ",";width:3em;height:","rem;"],f.r.colors.primary.background,f.r.colors.primary.foreground,I,C),M=(0,S.forwardRef)((function(e,t){var i=e.checked,r=e.option,o=e.onChange,a=e.value,s=e.onValueChange,n=e.valueMin,l=e.valueMax,c=e.children;return(0,b.jsxs)(D,{ref:t,children:[(0,b.jsx)("input",{type:"checkbox",checked:i,onChange:o}),(0,b.jsx)(Z,{option:r,children:(0,b.jsxs)(_,{option:r,children:[c,void 0!==a&&(0,b.jsx)(K,{type:"number",inputmode:"numeric",value:a,onChange:s,min:n||0,max:l||99})]})})]})})),R=1.3,N=function(e){var t=e.option;return"Trash"!==t&&"Don't care"!==t?f.r.colors.highlight.green.mid:"Trash"===t?f.r.colors.highlight.red:"#888"},A=function(e){var t=e.option;return"Trash"!==t&&"Don't care"!==t?f.r.colors.highlight.green.mid:"Trash"===t?f.r.colors.highlight.red:"transparent"},P=n.ZP.div.withConfig({displayName:"Radios__Outer",componentId:"sc-1xuvln9-0"})(["background-image:linear-gradient( "," 0%,"," 100% );background-size:auto calc(100% + ","em - ","em);background-repeat:no-repeat;background-position:center;"],(0,g.Q)(f.r.colors.primary.foreground,.2),(0,g.Q)(f.r.colors.primary.foreground,.2),R,f.r.text.lineHeight),E=n.ZP.span.withConfig({displayName:"Radios__Name",componentId:"sc-1xuvln9-1"})([""," padding-left:","em;"],y.headers.general,f.r.text.lineHeight-R),Q=n.ZP.label.withConfig({displayName:"Radios__Radio",componentId:"sc-1xuvln9-2"})(['&,> *{cursor:pointer;}> input[type="radio"]{position:absolute;visibility:hidden;width:0;height:0;}']),W=n.ZP.span.withConfig({displayName:"Radios__Inner",componentId:"sc-1xuvln9-3"})(["display:grid;grid-auto-flow:row;grid-template-columns:1fr ","em;align-items:safe center;background:",";padding-left:","em;",":last-child > &&{background:none;background-image:linear-gradient( "," 0%,"," 100% );background-size:auto ",'em;background-repeat:no-repeat;background-position:top;}::after{content:"";aspect-ratio:1 / 1;height:',"em;border:1px solid ",";border-radius:50%;background-color:",";background-size:calc(100% - 2px) calc(100% - 2px);}&&:hover::after{background-color:",";}",' > input[type="radio"]:checked ~ &&::after{background-image:radial-gradient( circle closest-side at center,'," 0%,"," ","%,transparent ","% );background-repeat:no-repeat;background-position:center;}"],R,(function(e){return(0,g.Q)(A(e),.2)}),f.r.text.lineHeight-R,Q,(function(e){return(0,g.Q)(A(e),.2)}),(function(e){return(0,g.Q)(A(e),.2)}),(f.r.text.lineHeight+R)/2,R,N,f.r.colors.primary.background,(function(e){return(0,g.Q)(N(e),.5)}),Q,N,N,130/f.r.text.lineHeight,5+130/f.r.text.lineHeight),B=n.ZP.span.withConfig({displayName:"Radios__Label",componentId:"sc-1xuvln9-4"})([""]),G=(0,S.forwardRef)((function(e,t){var i=e.name,r=e.checked,o=e.onChange,a=e.children;return(0,b.jsxs)(P,{ref:t,children:[(0,b.jsx)(E,{children:i}),a.map((function(e,t){return(0,b.jsxs)(Q,{children:[(0,b.jsx)("input",{type:"radio",name:i,value:e,checked:r===t,onChange:o}),(0,b.jsx)(W,{option:e,children:(0,b.jsx)(B,{children:e})})]},t)}))]})})),V=n.ZP.section.withConfig({displayName:"DimSearchBuilderToggles__StyledSection",componentId:"sc-312ky8-0"})(["> h2{",";}> div,> section{display:grid;grid-template-columns:repeat(auto-fit,18em);gap:",";justify-content:center;}"],y.headers.fullWidth,f.r.lengths.gap),L=function(e){var t=e.toggles,i=e.toggleState,r=e.onChange;return(0,b.jsxs)(V,{children:[(0,b.jsx)("h2",{children:"Preferences"}),(0,b.jsx)(c.Z,{rowGap:16,children:t.map((function(e,t){return(0,b.jsxs)("section",{children:[e.display&&(0,b.jsx)("h4",{children:e.display}),e.options.map((function(e,t){var o,a=void 0!==(null===i||void 0===i?void 0:i[e.key])?i[e.key]:e.default,s=a>=0,n=void 0!==(null===i||void 0===i?void 0:i[e.key+"Value"])?i[e.key+"Value"]:e.value,l=e.valueMin||1,c=e.valueMax||99;return(null===(o=e.options)||void 0===o?void 0:o.length)>1?(0,b.jsx)(G,{name:e.display,checked:a,onChange:function(t){return r(e.key,e.options.indexOf(t.target.value))},children:e.options},e.key):(0,b.jsx)(M,{checked:s,value:n,valueMin:l,valueMax:c,onChange:function(){return r(e.key,s?-1:0)},onValueChange:function(t){return r(e.key+"Value",t.target.value>c?c:t.target.value<l?l:t.target.value)},option:e.options[0],children:e.display},t)}))]},t)}))})]})},z=n.ZP.article.withConfig({displayName:"StyledDimSearchBuilder",componentId:"sc-1mt3v35-0"})(["& > div:not(:first-child){display:flex;flex-flow:column;margin:"," auto;gap:",";}"],f.r.lengths.margin,f.r.lengths.margin);var O={},H=function(e,t,i){return O[e]||(O[e]={callbacks:[],value:i}),O[e].callbacks.push(t),{deregister:function(){var i=O[e].callbacks,r=i.indexOf(t);r>-1&&i.splice(r,1)},emit:function(i){O[e].value!==i&&(O[e].value=i,O[e].callbacks.forEach((function(e){t!==e&&e(i)})))}}};var J=function(e,t){if(void 0===t&&(t="undefined"!=typeof i.g&&i.g.localStorage?i.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),t){var r=(o=t,{get:function(e,t){var i=o.getItem(e);return null==i?"function"==typeof t?t():t:JSON.parse(i)},set:function(e,t){o.setItem(e,JSON.stringify(t))}});return function(t){return function(e,t,r){var o=r.get,a=r.set,s=(0,S.useRef)(null),n=(0,S.useState)((function(){return o(t,e)})),l=n[0],c=n[1];(function(e,t,r,o){void 0===r&&(r=i.g),void 0===o&&(o={});var a=(0,S.useRef)(),s=o.capture,n=o.passive,l=o.once;(0,S.useEffect)((function(){a.current=t}),[t]),(0,S.useEffect)((function(){if(r&&r.addEventListener){var t=function(e){return a.current(e)},i={capture:s,passive:n,once:l};return r.addEventListener(e,t,i),function(){r.removeEventListener(e,t,i)}}}),[e,r,s,n,l])})("storage",(function(e){if(e.key===t){var i=JSON.parse(e.newValue);l!==i&&c(i)}})),(0,S.useEffect)((function(){return s.current=H(t,c,e),function(){s.current.deregister()}}),[e,t]);var h=(0,S.useCallback)((function(e){var i="function"==typeof e?e(l):e;a(t,i),c(i),s.current.emit(e)}),[l,a,t]);return[l,h]}(t,e,r)}}var o;return S.useState}("DimSearchBuilder"),Y=[{display:"",options:[{key:"maxPowerItems",display:"Max Power Items",filter:"is:maxpower",default:0,options:["Keep"]},{key:"itemsInLoadouts",display:"Items in Loadouts",filter:"is:inloadout",default:0,options:["Keep"]},{key:"masterworkedItems",display:"Masterworked Items",filter:"is:masterwork",default:0,options:["Keep"]},{key:"glimmerInfuse",display:"Glimmer Infuse",filter:"is:infusionfodder",default:0,options:["Keep"]},{key:"classifiedItems",display:"Classified Items",filter:"name:classified",default:0,options:["Keep"]},{key:"slowSparrows",display:"Slow Sparrows",filter:"(is:vehicle power:<160)",default:0,options:["Trash"]},{key:"sunsetItems",display:"Sunset Weapons/Armor",filter:"((is:weapon or is:armor) is:sunset)",default:0,options:["Trash"]},{key:"rareItems",display:"Rare Weapons/Armor",filter:"((is:weapon or is:armor) is:rare)",default:0,options:["Trash"]},{key:"uncommonItems",display:"Uncommon Weapons/Armor",filter:"((is:weapon or is:armor) is:uncommon)",default:0,options:["Trash"]},{key:"commonItems",display:"Common Weapons/Armor",filter:"((is:weapon or is:armor) is:common)",default:0,options:["Trash"]}]},{display:"Tags",options:[{key:"tagFavorite",display:"Favorite",filter:"tag:favorite",default:0,options:["Keep","Trash","Don't care"]},{key:"tagKeep",display:"Keep",filter:"tag:keep",default:0,options:["Keep","Trash","Don't care"]},{key:"tagJunk",display:"Junk",filter:"tag:junk",default:1,options:["Keep","Trash","Don't care"]},{key:"tagInfuse",display:"Infuse",filter:"tag:infuse",default:0,options:["Keep","Trash","Don't care"]},{key:"tagArchive",display:"Archive",filter:"tag:archive",default:0,options:["Keep","Trash","Don't care"]}]},{display:"Weapons",options:[{key:"weaponsDeepsightPattern",display:"Deepsight Pattern",filter:"(is:weapon -is:patternunlocked deepsight:pattern)",default:0,options:["Keep"]},{key:"weaponsDeepsightIncomplete",display:"Deepsight Incomplete",filter:"(is:weapon deepsight:incomplete)",default:-1,options:["Keep"]},{key:"weaponsCraftable",display:"Non-crafted Craftable",filter:"(is:weapon is:patternunlocked -is:crafted)",default:-1,options:["Trash"]},{key:"weaponsStaticRollDuplicates",display:"Static Roll Duplicates",filter:"(is:weapon -is:randomroll is:dupelower)",default:0,options:["Trash"]},{key:"weaponsWishlistDuplicates",display:"Wishlist Duplicates",filter:"(is:weapon is:wishlistdupe -is:wishlist is:dupelower)",default:0,options:["Trash"]}]},{display:"Armor",options:[{key:"tmMania",display:"TMMania's Statistics",filter:["(is:armor ((basestat:highest:>=23 ((basestat:recovery:>=23) or (is:hunter (basestat:mobility:>=23 or basestat:recovery:>=23)))) or (basestat:highest&secondhighest:>=18 ((basestat:recovery:>=13 basestat:mobility:<13) or (is:hunter (basestat:mobility:>=13 or basestat:recovery:>=13)))) or (basestat:highest&secondhighest&thirdhighest:>=15 basestat:secondhighest:>=11 ((basestat:recovery:>=11 basestat:mobility:<11) or (is:hunter (basestat:mobility:>=11 or basestat:recovery:>=11)))) or (basestat:highest&secondhighest&thirdhighest&fourthhighest:>=13.25 basestat:fourthhighest:>=10 ((basestat:recovery:>=10 basestat:mobility:<10) or (is:hunter (basestat:mobility:>=10 or basestat:recovery:>=10)))) or (basestat:highest&secondhighest&thirdhighest&fourthhighest&fifthhighest:>=11.6 basestat:fifthhighest:>=6 ((basestat:recovery:>=6 basestat:mobility:<6) or (is:hunter (basestat:mobility:>=6 or basestat:recovery:>=6)))) or (basestat:highest&secondhighest&thirdhighest&fourthhighest&fifthhighest&sixthhighest:>=9.833 basestat:sixthhighest:>=6)))","(is:armor ((basestat:highest:>=24 ((basestat:recovery:>=24 basestat:mobility:<24) or (is:hunter (basestat:mobility:>=24 or basestat:recovery:>=24)))) or (basestat:highest&secondhighest:>=19 basestat:secondhighest:>=14 ((basestat:recovery:>=14 basestat:mobility:<14) or (is:hunter (basestat:mobility:>=14 or basestat:recovery:>=14)))) or (basestat:highest&secondhighest&thirdhighest:>=15.666 basestat:secondhighest:>=12 ((basestat:recovery:>=12 basestat:mobility:<12) or (is:hunter (basestat:mobility:>=12 or basestat:recovery:>=12)))) or (basestat:highest&secondhighest&thirdhighest&fourthhighest:>=13.75 basestat:fourthhighest:>=10 ((basestat:recovery:>=10 basestat:mobility:<10) or (is:hunter (basestat:mobility:>=10 or basestat:recovery:>=12)))) or (basestat:highest&secondhighest&thirdhighest&fourthhighest&fifthhighest:>=12 basestat:fifthhighest:>=6 ((basestat:recovery:>=6 basestat:mobility:<6) or (is:hunter (basestat:mobility:>=6 or basestat:recovery:>=6)))) or (basestat:highest&secondhighest&thirdhighest&fourthhighest&fifthhighest&sixthhighest:>=10.333 basestat:sixthhighest:>=6)))","(is:armor (basestat:highest:>=26 or (basestat:highest&secondhighest:>=20.5 basestat:secondhighest:>=15) or (basestat:highest&secondhighest&thirdhighest:>=16.666 basestat:secondhighest:>=12) or (basestat:highest&secondhighest&thirdhighest&fourthhighest:>=14.25 basestat:fourthhighest:>=10) or (basestat:highest&secondhighest&thirdhighest&fourthhighest&fifthhighest:>=12.2 basestat:fifthhighest:>=6) or (basestat:highest&secondhighest&thirdhighest&fourthhighest&fifthhighest&sixthhighest:>=10.333 basestat:sixthhighest:>=6)))"],default:0,options:["Basic","Mid-Game","End-Game","Don't care"]},{key:"armorMaxBaseStat",display:"Maximum of a Stat",filter:"(is:armor maxbasestatvalue:any)",default:-1,options:["Keep"]},{key:"armorTotalBaseStat",display:"Total Stats Above:",filter:function(e){return"(is:armor basestat:total:>=".concat(e,")")},value:65,default:0,options:["Keep"]},{key:"armorCustomBaseStat",display:"Custom Stats Above:",filter:function(e){return"(is:armor basestat:custom:>=".concat(e,")")},value:50,default:-1,options:["Keep"]},{key:"armorRaid",display:"Raid Armor",filter:"(is:armor source:raid -is:dupelower -source:dcv)",default:0,options:["Keep"]},{key:"armorEvent",display:"Event Armor",filter:"(is:armor source:events)",default:0,options:["Keep"]},{key:"armor1",display:"Armor 1.0",filter:"(is:armor -is:armor2.0)",default:0,options:["Keep","Trash","Don't care"]}]},{display:"Class Items",options:[{key:"classItemMinEnergy",display:"Minimum Energy:",value:7,valueMax:10,filter:function(e){return"(is:classitem energycapacity:>=".concat(e,")")},default:0,options:["Keep"]}]}],F=function(){var e=J({}),t=(0,o.Z)(e,2),i=t[0],s=t[1];return(0,b.jsxs)(z,{children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{children:"DIM Search Builder"}),(0,b.jsxs)("p",{children:["Using the options below, you can construct your own junk, infusion, and vendor item finder search strings for use in"," ",(0,b.jsx)(a.Z,{href:"https://destinyitemmanager.com/",children:"DIM"}),"."]}),(0,b.jsxs)("p",{children:["Green preferences are to keep, red preferences are to trash. Locked items are ",(0,b.jsx)("i",{children:"never"})," included in trash."]}),(0,b.jsxs)("p",{children:[(0,b.jsx)("i",{children:"I take no responsibility for deleted god rolls..."})," \ud83d\ude09"]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)(L,{toggles:Y,toggleState:i,onChange:function(e,t){s((function(i){var o=(0,r.Z)({},i);return o[e]=t,o}))}}),(0,b.jsx)(j,{toggles:Y,toggleState:i})]})]})}}}]);
//# sourceMappingURL=382.0e9d92ad.chunk.js.map