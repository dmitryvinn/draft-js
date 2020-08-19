/*! For license information please see f0cbc9b5.39ef5304.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(9),c=(n(181),n(180)),a={id:"api-reference-rich-utils",title:"RichUtils"},i={id:"api-reference-rich-utils",title:"RichUtils",description:"The RichUtils module is a static set of utility functions for rich text",source:"@site/../docs/APIReference-RichUtils.md",permalink:"/docs/api-reference-rich-utils",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/APIReference-RichUtils.md",lastUpdatedBy:"dependabot-preview[bot]",lastUpdatedAt:1588878673,sidebar:"docs",previous:{title:"Data Conversion",permalink:"/docs/api-reference-data-conversion"},next:{title:"AtomicBlockUtils",permalink:"/docs/api-reference-atomic-block-utils"}},l=[{value:"Static Methods",id:"static-methods",children:[{value:"<code>currentBlockContainsLink()</code>",id:"currentblockcontainslink",children:[]},{value:"<code>getCurrentBlockType()</code>",id:"getcurrentblocktype",children:[]},{value:"<code>handleKeyCommand()</code>",id:"handlekeycommand",children:[]},{value:"<code>insertSoftNewline()</code>",id:"insertsoftnewline",children:[]},{value:"<code>onBackspace()</code>",id:"onbackspace",children:[]},{value:"<code>onDelete()</code>",id:"ondelete",children:[]},{value:"<code>onTab()</code>",id:"ontab",children:[]},{value:"<code>toggleBlockType()</code>",id:"toggleblocktype",children:[]},{value:"<code>toggleCode()</code>",id:"togglecode",children:[]},{value:"<code>toggleInlineStyle()</code>",id:"toggleinlinestyle",children:[]},{value:"<code>toggleLink()</code>",id:"togglelink",children:[]},{value:"<code>tryToRemoveBlockStyle()</code>",id:"trytoremoveblockstyle",children:[]}]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"RichUtils")," module is a static set of utility functions for rich text\nediting."),Object(c.b)("p",null,"In each case, these methods accept ",Object(c.b)("inlineCode",{parentName:"p"},"EditorState")," objects with relevant\nparameters and return ",Object(c.b)("inlineCode",{parentName:"p"},"EditorState")," objects."),Object(c.b)("h2",{id:"static-methods"},"Static Methods"),Object(c.b)("h3",{id:"currentblockcontainslink"},Object(c.b)("inlineCode",{parentName:"h3"},"currentBlockContainsLink()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"currentBlockContainsLink(\n  editorState: EditorState\n): boolean\n")),Object(c.b)("h3",{id:"getcurrentblocktype"},Object(c.b)("inlineCode",{parentName:"h3"},"getCurrentBlockType()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getCurrentBlockType(\n  editorState: EditorState\n): string\n")),Object(c.b)("h3",{id:"handlekeycommand"},Object(c.b)("inlineCode",{parentName:"h3"},"handleKeyCommand()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"handleKeyCommand(\n  editorState: EditorState,\n  command: string\n): ?EditorState\n")),Object(c.b)("h3",{id:"insertsoftnewline"},Object(c.b)("inlineCode",{parentName:"h3"},"insertSoftNewline()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"insertSoftNewline(\n  editorState: EditorState\n): EditorState\n")),Object(c.b)("h3",{id:"onbackspace"},Object(c.b)("inlineCode",{parentName:"h3"},"onBackspace()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"onBackspace(\n  editorState: EditorState\n): EditorState?\n")),Object(c.b)("h3",{id:"ondelete"},Object(c.b)("inlineCode",{parentName:"h3"},"onDelete()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"onDelete(\n  editorState: EditorState\n): EditorState?\n")),Object(c.b)("h3",{id:"ontab"},Object(c.b)("inlineCode",{parentName:"h3"},"onTab()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"onTab(\n  event: SyntheticEvent,\n  editorState: EditorState,\n  maxDepth: integer\n): EditorState\n")),Object(c.b)("h3",{id:"toggleblocktype"},Object(c.b)("inlineCode",{parentName:"h3"},"toggleBlockType()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"toggleBlockType(\n  editorState: EditorState,\n  blockType: string\n): EditorState\n")),Object(c.b)("h3",{id:"togglecode"},Object(c.b)("inlineCode",{parentName:"h3"},"toggleCode()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"toggleCode(\n  editorState: EditorState\n): EditorState\n")),Object(c.b)("h3",{id:"toggleinlinestyle"},Object(c.b)("inlineCode",{parentName:"h3"},"toggleInlineStyle()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"toggleInlineStyle(\n  editorState: EditorState,\n  inlineStyle: string\n): EditorState\n")),Object(c.b)("p",null,"Toggle the specified inline style for the selection. If the\nuser's selection is collapsed, apply or remove the style for the\ninternal state. If it is not collapsed, apply the change directly\nto the document state."),Object(c.b)("h3",{id:"togglelink"},Object(c.b)("inlineCode",{parentName:"h3"},"toggleLink()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"toggleLink(\n  editorState: EditorState,\n  targetSelection: SelectionState,\n  entityKey: string\n): EditorState\n")),Object(c.b)("h3",{id:"trytoremoveblockstyle"},Object(c.b)("inlineCode",{parentName:"h3"},"tryToRemoveBlockStyle()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"tryToRemoveBlockStyle(\n  editorState: EditorState\n): ContentState?\n")))}s.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||c;return n?o.a.createElement(b,i(i({ref:t},u),{},{components:n})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function O(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||g}function v(){}function S(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=O.prototype;var k=S.prototype=new v;k.constructor=S,r(k,O.prototype),k.isPureReactComponent=!0;var w={current:null},C=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,o={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)C.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:c,type:e,key:a,ref:i,props:o,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var x=/\/+/g,R=[];function _(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function $(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case c:case a:l=!0}}if(l)return r(o,t,""===n?"."+B(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+B(i=t[u],u);l+=e(i,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=m&&t[m]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(i=t.next()).done;)l+=e(i=i.value,s=n+B(i,u++),r,o);else if("object"===i)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function B(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,o){var c="";null!=n&&(c=(""+n).replace(x,"$&/")+"/"),$(e,U,t=_(t,c,r,o)),T(t)}var A={current:null};function L(){var e=A.current;if(null===e)throw Error(h(321));return e}var M={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;$(e,I,t=_(null,null,t,n)),T(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(h(143));return e}},t.Component=O,t.Fragment=i,t.Profiler=u,t.PureComponent=S,t.StrictMode=l,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),a=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)C.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:c,type:e.type,key:a,ref:i,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return L().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,n){return L().useReducer(e,t,n)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="16.13.1"},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,l=a(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(l[s]=n[s]);if(r){i=r(n);for(var p=0;p<i.length;p++)c.call(n,i[p])&&(l[i[p]]=n[i[p]])}}return l}}}]);