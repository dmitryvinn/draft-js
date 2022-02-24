(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{133:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return s}));var i=t(2),r=t(6),a=(t(0),t(147)),o={id:"api-reference-key-binding-util",title:"KeyBindingUtil"},c={id:"api-reference-key-binding-util",title:"KeyBindingUtil",description:"The KeyBindingUtil module is a static set of utility functions for",source:"@site/../docs/APIReference-KeyBindingUtil.md",permalink:"/docs/api-reference-key-binding-util",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/APIReference-KeyBindingUtil.md",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1576462158,sidebar:"docs",previous:{title:"AtomicBlockUtils",permalink:"/docs/api-reference-atomic-block-utils"},next:{title:"Modifier",permalink:"/docs/api-reference-modifier"}},d=[{value:"Static Methods",id:"static-methods",children:[{value:"<code>isCtrlKeyCommand()</code>",id:"isctrlkeycommand",children:[]},{value:"<code>isOptionKeyCommand()</code>",id:"isoptionkeycommand",children:[]},{value:"<code>usesMacOSHeuristics()</code>",id:"usesmacosheuristics",children:[]},{value:"<code>hasCommandModifier()</code>",id:"hascommandmodifier",children:[]}]}],l={rightToc:d};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"KeyBindingUtil")," module is a static set of utility functions for\ndefining key bindings."),Object(a.b)("h2",{id:"static-methods"},"Static Methods"),Object(a.b)("h3",{id:"isctrlkeycommand"},Object(a.b)("inlineCode",{parentName:"h3"},"isCtrlKeyCommand()")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"isCtrlKeyCommand: function(\n  e: SyntheticKeyboardEvent\n): boolean\n")),Object(a.b)("p",null,"Check whether the ",Object(a.b)("inlineCode",{parentName:"p"},"ctrlKey")," modifier is ",Object(a.b)("em",{parentName:"p"},"not")," being used in conjunction with\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"altKey")," modifier. If they are combined, the result is an ",Object(a.b)("inlineCode",{parentName:"p"},"altGraph"),"\nkey modifier, which is not handled by this set of key bindings."),Object(a.b)("h3",{id:"isoptionkeycommand"},Object(a.b)("inlineCode",{parentName:"h3"},"isOptionKeyCommand()")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"isOptionKeyCommand: function(\n  e: SyntheticKeyboardEvent\n): boolean\n")),Object(a.b)("h3",{id:"usesmacosheuristics"},Object(a.b)("inlineCode",{parentName:"h3"},"usesMacOSHeuristics()")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"usesMacOSHeuristics: function(): boolean\n")),Object(a.b)("p",null,"Check whether heuristics that only apply to macOS are used internally, for\nexample when determining the key combination used as command modifier."),Object(a.b)("h3",{id:"hascommandmodifier"},Object(a.b)("inlineCode",{parentName:"h3"},"hasCommandModifier()")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"hasCommandModifier: function(\n  e: SyntheticKeyboardEvent\n): boolean\n")))}s.isMDXComponent=!0},147:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(t),p=i,b=u["".concat(o,".").concat(p)]||u[p]||m[p]||a;return t?r.a.createElement(b,c(c({ref:n},l),{},{components:t})):r.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);