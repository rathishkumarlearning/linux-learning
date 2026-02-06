(function(){const Y=document.createElement("link").relList;if(Y&&Y.supports&&Y.supports("modulepreload"))return;for(const U of document.querySelectorAll('link[rel="modulepreload"]'))h(U);new MutationObserver(U=>{for(const V of U)if(V.type==="childList")for(const ut of V.addedNodes)ut.tagName==="LINK"&&ut.rel==="modulepreload"&&h(ut)}).observe(document,{childList:!0,subtree:!0});function L(U){const V={};return U.integrity&&(V.integrity=U.integrity),U.referrerPolicy&&(V.referrerPolicy=U.referrerPolicy),U.crossOrigin==="use-credentials"?V.credentials="include":U.crossOrigin==="anonymous"?V.credentials="omit":V.credentials="same-origin",V}function h(U){if(U.ep)return;U.ep=!0;const V=L(U);fetch(U.href,V)}})();var ss={exports:{}},Tn={};var vd;function tg(){if(vd)return Tn;vd=1;var E=Symbol.for("react.transitional.element"),Y=Symbol.for("react.fragment");function L(h,U,V){var ut=null;if(V!==void 0&&(ut=""+V),U.key!==void 0&&(ut=""+U.key),"key"in U){V={};for(var Tt in U)Tt!=="key"&&(V[Tt]=U[Tt])}else V=U;return U=V.ref,{$$typeof:E,type:h,key:ut,ref:U!==void 0?U:null,props:V}}return Tn.Fragment=Y,Tn.jsx=L,Tn.jsxs=L,Tn}var bd;function eg(){return bd||(bd=1,ss.exports=tg()),ss.exports}var S=eg(),fs={exports:{}},G={};var Sd;function lg(){if(Sd)return G;Sd=1;var E=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),ut=Symbol.for("react.context"),Tt=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),mt=Symbol.iterator;function Gt(o){return o===null||typeof o!="object"?null:(o=mt&&o[mt]||o["@@iterator"],typeof o=="function"?o:null)}var Lt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,H={};function K(o,T,M){this.props=o,this.context=T,this.refs=H,this.updater=M||Lt}K.prototype.isReactComponent={},K.prototype.setState=function(o,T){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,T,"setState")},K.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function $(){}$.prototype=K.prototype;function zt(o,T,M){this.props=o,this.context=T,this.refs=H,this.updater=M||Lt}var jt=zt.prototype=new $;jt.constructor=zt,N(jt,K.prototype),jt.isPureReactComponent=!0;var te=Array.isArray;function at(){}var B={H:null,A:null,T:null,S:null},Et=Object.prototype.hasOwnProperty;function pt(o,T,M){var D=M.ref;return{$$typeof:E,type:o,key:T,ref:D!==void 0?D:null,props:M}}function Ce(o,T){return pt(o.type,T,o.props)}function re(o){return typeof o=="object"&&o!==null&&o.$$typeof===E}function Xt(o){var T={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(M){return T[M]})}var El=/\/+/g;function Re(o,T){return typeof o=="object"&&o!==null&&o.key!=null?Xt(""+o.key):T.toString(36)}function Te(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(at,at):(o.status="pending",o.then(function(T){o.status==="pending"&&(o.status="fulfilled",o.value=T)},function(T){o.status==="pending"&&(o.status="rejected",o.reason=T)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function v(o,T,M,D,X){var J=typeof o;(J==="undefined"||J==="boolean")&&(o=null);var it=!1;if(o===null)it=!0;else switch(J){case"bigint":case"string":case"number":it=!0;break;case"object":switch(o.$$typeof){case E:case Y:it=!0;break;case P:return it=o._init,v(it(o._payload),T,M,D,X)}}if(it)return X=X(o),it=D===""?"."+Re(o,0):D,te(X)?(M="",it!=null&&(M=it.replace(El,"$&/")+"/"),v(X,T,M,"",function(Da){return Da})):X!=null&&(re(X)&&(X=Ce(X,M+(X.key==null||o&&o.key===X.key?"":(""+X.key).replace(El,"$&/")+"/")+it)),T.push(X)),1;it=0;var Zt=D===""?".":D+":";if(te(o))for(var At=0;At<o.length;At++)D=o[At],J=Zt+Re(D,At),it+=v(D,T,M,J,X);else if(At=Gt(o),typeof At=="function")for(o=At.call(o),At=0;!(D=o.next()).done;)D=D.value,J=Zt+Re(D,At++),it+=v(D,T,M,J,X);else if(J==="object"){if(typeof o.then=="function")return v(Te(o),T,M,D,X);throw T=String(o),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return it}function A(o,T,M){if(o==null)return o;var D=[],X=0;return v(o,D,"","",function(J){return T.call(M,J,X++)}),D}function q(o){if(o._status===-1){var T=o._result;T=T(),T.then(function(M){(o._status===0||o._status===-1)&&(o._status=1,o._result=M)},function(M){(o._status===0||o._status===-1)&&(o._status=2,o._result=M)}),o._status===-1&&(o._status=0,o._result=T)}if(o._status===1)return o._result.default;throw o._result}var ft=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},ht={map:A,forEach:function(o,T,M){A(o,function(){T.apply(this,arguments)},M)},count:function(o){var T=0;return A(o,function(){T++}),T},toArray:function(o){return A(o,function(T){return T})||[]},only:function(o){if(!re(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return G.Activity=j,G.Children=ht,G.Component=K,G.Fragment=L,G.Profiler=U,G.PureComponent=zt,G.StrictMode=h,G.Suspense=O,G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,G.__COMPILER_RUNTIME={__proto__:null,c:function(o){return B.H.useMemoCache(o)}},G.cache=function(o){return function(){return o.apply(null,arguments)}},G.cacheSignal=function(){return null},G.cloneElement=function(o,T,M){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var D=N({},o.props),X=o.key;if(T!=null)for(J in T.key!==void 0&&(X=""+T.key),T)!Et.call(T,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&T.ref===void 0||(D[J]=T[J]);var J=arguments.length-2;if(J===1)D.children=M;else if(1<J){for(var it=Array(J),Zt=0;Zt<J;Zt++)it[Zt]=arguments[Zt+2];D.children=it}return pt(o.type,X,D)},G.createContext=function(o){return o={$$typeof:ut,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:V,_context:o},o},G.createElement=function(o,T,M){var D,X={},J=null;if(T!=null)for(D in T.key!==void 0&&(J=""+T.key),T)Et.call(T,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(X[D]=T[D]);var it=arguments.length-2;if(it===1)X.children=M;else if(1<it){for(var Zt=Array(it),At=0;At<it;At++)Zt[At]=arguments[At+2];X.children=Zt}if(o&&o.defaultProps)for(D in it=o.defaultProps,it)X[D]===void 0&&(X[D]=it[D]);return pt(o,J,X)},G.createRef=function(){return{current:null}},G.forwardRef=function(o){return{$$typeof:Tt,render:o}},G.isValidElement=re,G.lazy=function(o){return{$$typeof:P,_payload:{_status:-1,_result:o},_init:q}},G.memo=function(o,T){return{$$typeof:z,type:o,compare:T===void 0?null:T}},G.startTransition=function(o){var T=B.T,M={};B.T=M;try{var D=o(),X=B.S;X!==null&&X(M,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(at,ft)}catch(J){ft(J)}finally{T!==null&&M.types!==null&&(T.types=M.types),B.T=T}},G.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},G.use=function(o){return B.H.use(o)},G.useActionState=function(o,T,M){return B.H.useActionState(o,T,M)},G.useCallback=function(o,T){return B.H.useCallback(o,T)},G.useContext=function(o){return B.H.useContext(o)},G.useDebugValue=function(){},G.useDeferredValue=function(o,T){return B.H.useDeferredValue(o,T)},G.useEffect=function(o,T){return B.H.useEffect(o,T)},G.useEffectEvent=function(o){return B.H.useEffectEvent(o)},G.useId=function(){return B.H.useId()},G.useImperativeHandle=function(o,T,M){return B.H.useImperativeHandle(o,T,M)},G.useInsertionEffect=function(o,T){return B.H.useInsertionEffect(o,T)},G.useLayoutEffect=function(o,T){return B.H.useLayoutEffect(o,T)},G.useMemo=function(o,T){return B.H.useMemo(o,T)},G.useOptimistic=function(o,T){return B.H.useOptimistic(o,T)},G.useReducer=function(o,T,M){return B.H.useReducer(o,T,M)},G.useRef=function(o){return B.H.useRef(o)},G.useState=function(o){return B.H.useState(o)},G.useSyncExternalStore=function(o,T,M){return B.H.useSyncExternalStore(o,T,M)},G.useTransition=function(){return B.H.useTransition()},G.version="19.2.4",G}var xd;function hs(){return xd||(xd=1,fs.exports=lg()),fs.exports}var _e=hs(),os={exports:{}},zn={},rs={exports:{}},ds={};var Td;function ag(){return Td||(Td=1,(function(E){function Y(v,A){var q=v.length;v.push(A);t:for(;0<q;){var ft=q-1>>>1,ht=v[ft];if(0<U(ht,A))v[ft]=A,v[q]=ht,q=ft;else break t}}function L(v){return v.length===0?null:v[0]}function h(v){if(v.length===0)return null;var A=v[0],q=v.pop();if(q!==A){v[0]=q;t:for(var ft=0,ht=v.length,o=ht>>>1;ft<o;){var T=2*(ft+1)-1,M=v[T],D=T+1,X=v[D];if(0>U(M,q))D<ht&&0>U(X,M)?(v[ft]=X,v[D]=q,ft=D):(v[ft]=M,v[T]=q,ft=T);else if(D<ht&&0>U(X,q))v[ft]=X,v[D]=q,ft=D;else break t}}return A}function U(v,A){var q=v.sortIndex-A.sortIndex;return q!==0?q:v.id-A.id}if(E.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var V=performance;E.unstable_now=function(){return V.now()}}else{var ut=Date,Tt=ut.now();E.unstable_now=function(){return ut.now()-Tt}}var O=[],z=[],P=1,j=null,mt=3,Gt=!1,Lt=!1,N=!1,H=!1,K=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,zt=typeof setImmediate<"u"?setImmediate:null;function jt(v){for(var A=L(z);A!==null;){if(A.callback===null)h(z);else if(A.startTime<=v)h(z),A.sortIndex=A.expirationTime,Y(O,A);else break;A=L(z)}}function te(v){if(N=!1,jt(v),!Lt)if(L(O)!==null)Lt=!0,at||(at=!0,Xt());else{var A=L(z);A!==null&&Te(te,A.startTime-v)}}var at=!1,B=-1,Et=5,pt=-1;function Ce(){return H?!0:!(E.unstable_now()-pt<Et)}function re(){if(H=!1,at){var v=E.unstable_now();pt=v;var A=!0;try{t:{Lt=!1,N&&(N=!1,$(B),B=-1),Gt=!0;var q=mt;try{e:{for(jt(v),j=L(O);j!==null&&!(j.expirationTime>v&&Ce());){var ft=j.callback;if(typeof ft=="function"){j.callback=null,mt=j.priorityLevel;var ht=ft(j.expirationTime<=v);if(v=E.unstable_now(),typeof ht=="function"){j.callback=ht,jt(v),A=!0;break e}j===L(O)&&h(O),jt(v)}else h(O);j=L(O)}if(j!==null)A=!0;else{var o=L(z);o!==null&&Te(te,o.startTime-v),A=!1}}break t}finally{j=null,mt=q,Gt=!1}A=void 0}}finally{A?Xt():at=!1}}}var Xt;if(typeof zt=="function")Xt=function(){zt(re)};else if(typeof MessageChannel<"u"){var El=new MessageChannel,Re=El.port2;El.port1.onmessage=re,Xt=function(){Re.postMessage(null)}}else Xt=function(){K(re,0)};function Te(v,A){B=K(function(){v(E.unstable_now())},A)}E.unstable_IdlePriority=5,E.unstable_ImmediatePriority=1,E.unstable_LowPriority=4,E.unstable_NormalPriority=3,E.unstable_Profiling=null,E.unstable_UserBlockingPriority=2,E.unstable_cancelCallback=function(v){v.callback=null},E.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Et=0<v?Math.floor(1e3/v):5},E.unstable_getCurrentPriorityLevel=function(){return mt},E.unstable_next=function(v){switch(mt){case 1:case 2:case 3:var A=3;break;default:A=mt}var q=mt;mt=A;try{return v()}finally{mt=q}},E.unstable_requestPaint=function(){H=!0},E.unstable_runWithPriority=function(v,A){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var q=mt;mt=v;try{return A()}finally{mt=q}},E.unstable_scheduleCallback=function(v,A,q){var ft=E.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ft+q:ft):q=ft,v){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=q+ht,v={id:P++,callback:A,priorityLevel:v,startTime:q,expirationTime:ht,sortIndex:-1},q>ft?(v.sortIndex=q,Y(z,v),L(O)===null&&v===L(z)&&(N?($(B),B=-1):N=!0,Te(te,q-ft))):(v.sortIndex=ht,Y(O,v),Lt||Gt||(Lt=!0,at||(at=!0,Xt()))),v},E.unstable_shouldYield=Ce,E.unstable_wrapCallback=function(v){var A=mt;return function(){var q=mt;mt=A;try{return v.apply(this,arguments)}finally{mt=q}}}})(ds)),ds}var zd;function ng(){return zd||(zd=1,rs.exports=ag()),rs.exports}var ms={exports:{}},Qt={};var Ed;function ug(){if(Ed)return Qt;Ed=1;var E=hs();function Y(O){var z="https://react.dev/errors/"+O;if(1<arguments.length){z+="?args[]="+encodeURIComponent(arguments[1]);for(var P=2;P<arguments.length;P++)z+="&args[]="+encodeURIComponent(arguments[P])}return"Minified React error #"+O+"; visit "+z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function L(){}var h={d:{f:L,r:function(){throw Error(Y(522))},D:L,C:L,L,m:L,X:L,S:L,M:L},p:0,findDOMNode:null},U=Symbol.for("react.portal");function V(O,z,P){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:j==null?null:""+j,children:O,containerInfo:z,implementation:P}}var ut=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Tt(O,z){if(O==="font")return"";if(typeof z=="string")return z==="use-credentials"?z:""}return Qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Qt.createPortal=function(O,z){var P=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!z||z.nodeType!==1&&z.nodeType!==9&&z.nodeType!==11)throw Error(Y(299));return V(O,z,null,P)},Qt.flushSync=function(O){var z=ut.T,P=h.p;try{if(ut.T=null,h.p=2,O)return O()}finally{ut.T=z,h.p=P,h.d.f()}},Qt.preconnect=function(O,z){typeof O=="string"&&(z?(z=z.crossOrigin,z=typeof z=="string"?z==="use-credentials"?z:"":void 0):z=null,h.d.C(O,z))},Qt.prefetchDNS=function(O){typeof O=="string"&&h.d.D(O)},Qt.preinit=function(O,z){if(typeof O=="string"&&z&&typeof z.as=="string"){var P=z.as,j=Tt(P,z.crossOrigin),mt=typeof z.integrity=="string"?z.integrity:void 0,Gt=typeof z.fetchPriority=="string"?z.fetchPriority:void 0;P==="style"?h.d.S(O,typeof z.precedence=="string"?z.precedence:void 0,{crossOrigin:j,integrity:mt,fetchPriority:Gt}):P==="script"&&h.d.X(O,{crossOrigin:j,integrity:mt,fetchPriority:Gt,nonce:typeof z.nonce=="string"?z.nonce:void 0})}},Qt.preinitModule=function(O,z){if(typeof O=="string")if(typeof z=="object"&&z!==null){if(z.as==null||z.as==="script"){var P=Tt(z.as,z.crossOrigin);h.d.M(O,{crossOrigin:P,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0})}}else z==null&&h.d.M(O)},Qt.preload=function(O,z){if(typeof O=="string"&&typeof z=="object"&&z!==null&&typeof z.as=="string"){var P=z.as,j=Tt(P,z.crossOrigin);h.d.L(O,P,{crossOrigin:j,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0,type:typeof z.type=="string"?z.type:void 0,fetchPriority:typeof z.fetchPriority=="string"?z.fetchPriority:void 0,referrerPolicy:typeof z.referrerPolicy=="string"?z.referrerPolicy:void 0,imageSrcSet:typeof z.imageSrcSet=="string"?z.imageSrcSet:void 0,imageSizes:typeof z.imageSizes=="string"?z.imageSizes:void 0,media:typeof z.media=="string"?z.media:void 0})}},Qt.preloadModule=function(O,z){if(typeof O=="string")if(z){var P=Tt(z.as,z.crossOrigin);h.d.m(O,{as:typeof z.as=="string"&&z.as!=="script"?z.as:void 0,crossOrigin:P,integrity:typeof z.integrity=="string"?z.integrity:void 0})}else h.d.m(O)},Qt.requestFormReset=function(O){h.d.r(O)},Qt.unstable_batchedUpdates=function(O,z){return O(z)},Qt.useFormState=function(O,z,P){return ut.H.useFormState(O,z,P)},Qt.useFormStatus=function(){return ut.H.useHostTransitionStatus()},Qt.version="19.2.4",Qt}var Ad;function ig(){if(Ad)return ms.exports;Ad=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(Y){console.error(Y)}}return E(),ms.exports=ug(),ms.exports}var Md;function cg(){if(Md)return zn;Md=1;var E=ng(),Y=hs(),L=ig();function h(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function V(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function ut(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tt(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function O(t){if(V(t)!==t)throw Error(h(188))}function z(t){var e=t.alternate;if(!e){if(e=V(t),e===null)throw Error(h(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return O(n),t;if(u===a)return O(n),e;u=u.sibling}throw Error(h(188))}if(l.return!==a.return)l=n,a=u;else{for(var i=!1,c=n.child;c;){if(c===l){i=!0,l=n,a=u;break}if(c===a){i=!0,a=n,l=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===l){i=!0,l=u,a=n;break}if(c===a){i=!0,a=u,l=n;break}c=c.sibling}if(!i)throw Error(h(189))}}if(l.alternate!==a)throw Error(h(190))}if(l.tag!==3)throw Error(h(188));return l.stateNode.current===l?t:e}function P(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=P(t),e!==null)return e;t=t.sibling}return null}var j=Object.assign,mt=Symbol.for("react.element"),Gt=Symbol.for("react.transitional.element"),Lt=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),zt=Symbol.for("react.context"),jt=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),pt=Symbol.for("react.activity"),Ce=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function Xt(t){return t===null||typeof t!="object"?null:(t=re&&t[re]||t["@@iterator"],typeof t=="function"?t:null)}var El=Symbol.for("react.client.reference");function Re(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===El?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case K:return"Profiler";case H:return"StrictMode";case te:return"Suspense";case at:return"SuspenseList";case pt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Lt:return"Portal";case zt:return t.displayName||"Context";case $:return(t._context.displayName||"Context")+".Consumer";case jt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return e=t.displayName||null,e!==null?e:Re(t.type)||"Memo";case Et:e=t._payload,t=t._init;try{return Re(t(e))}catch{}}return null}var Te=Array.isArray,v=Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=L.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ft=[],ht=-1;function o(t){return{current:t}}function T(t){0>ht||(t.current=ft[ht],ft[ht]=null,ht--)}function M(t,e){ht++,ft[ht]=t.current,t.current=e}var D=o(null),X=o(null),J=o(null),it=o(null);function Zt(t,e){switch(M(J,e),M(X,t),M(D,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Gr(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Gr(e),t=Lr(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}T(D),M(D,t)}function At(){T(D),T(X),T(J)}function Da(t){t.memoizedState!==null&&M(it,t);var e=D.current,l=Lr(e,t.type);e!==l&&(M(X,t),M(D,l))}function An(t){X.current===t&&(T(D),T(X)),it.current===t&&(T(it),vn._currentValue=q)}var Qu,gs;function Al(t){if(Qu===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Qu=e&&e[1]||"",gs=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qu+t+gs}var Zu=!1;function Vu(t,e){if(!t||Zu)return"";Zu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(p){var g=p}Reflect.construct(t,[],x)}else{try{x.call()}catch(p){g=p}t.call(x.prototype)}}else{try{throw Error()}catch(p){g=p}(x=t())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(p){if(p&&g&&typeof p.stack=="string")return[p.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var s=i.split(`
`),m=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===m.length)for(a=s.length-1,n=m.length-1;1<=a&&0<=n&&s[a]!==m[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==m[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==m[n]){var y=`
`+s[a].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=a&&0<=n);break}}}finally{Zu=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Al(l):""}function Nd(t,e){switch(t.tag){case 26:case 27:case 5:return Al(t.type);case 16:return Al("Lazy");case 13:return t.child!==e&&e!==null?Al("Suspense Fallback"):Al("Suspense");case 19:return Al("SuspenseList");case 0:case 15:return Vu(t.type,!1);case 11:return Vu(t.type.render,!1);case 1:return Vu(t.type,!0);case 31:return Al("Activity");default:return""}}function ps(t){try{var e="",l=null;do e+=Nd(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ku=Object.prototype.hasOwnProperty,Ju=E.unstable_scheduleCallback,ku=E.unstable_cancelCallback,Ud=E.unstable_shouldYield,$d=E.unstable_requestPaint,ee=E.unstable_now,Rd=E.unstable_getCurrentPriorityLevel,ys=E.unstable_ImmediatePriority,vs=E.unstable_UserBlockingPriority,Mn=E.unstable_NormalPriority,jd=E.unstable_LowPriority,bs=E.unstable_IdlePriority,Hd=E.log,wd=E.unstable_setDisableYieldValue,Ca=null,le=null;function Pe(t){if(typeof Hd=="function"&&wd(t),le&&typeof le.setStrictMode=="function")try{le.setStrictMode(Ca,t)}catch{}}var ae=Math.clz32?Math.clz32:Yd,Bd=Math.log,qd=Math.LN2;function Yd(t){return t>>>=0,t===0?32:31-(Bd(t)/qd|0)|0}var _n=256,Dn=262144,Cn=4194304;function Ml(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function On(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~u,a!==0?n=Ml(a):(i&=c,i!==0?n=Ml(i):l||(l=c&~t,l!==0&&(n=Ml(l))))):(c=a&~u,c!==0?n=Ml(c):i!==0?n=Ml(i):l||(l=a&~t,l!==0&&(n=Ml(l)))),n===0?0:e!==0&&e!==n&&(e&u)===0&&(u=n&-n,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:n}function Oa(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Gd(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ss(){var t=Cn;return Cn<<=1,(Cn&62914560)===0&&(Cn=4194304),t}function Wu(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Na(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ld(t,e,l,a,n,u){var i=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,s=t.expirationTimes,m=t.hiddenUpdates;for(l=i&~l;0<l;){var y=31-ae(l),x=1<<y;c[y]=0,s[y]=-1;var g=m[y];if(g!==null)for(m[y]=null,y=0;y<g.length;y++){var p=g[y];p!==null&&(p.lane&=-536870913)}l&=~x}a!==0&&xs(t,a,0),u!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~e))}function xs(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-ae(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Ts(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-ae(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function zs(t,e){var l=e&-e;return l=(l&42)!==0?1:Fu(l),(l&(t.suspendedLanes|e))!==0?0:l}function Fu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Iu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Es(){var t=A.p;return t!==0?t:(t=window.event,t===void 0?32:rd(t.type))}function As(t,e){var l=A.p;try{return A.p=t,e()}finally{A.p=l}}var tl=Math.random().toString(36).slice(2),Ht="__reactFiber$"+tl,Kt="__reactProps$"+tl,Ql="__reactContainer$"+tl,Pu="__reactEvents$"+tl,Xd="__reactListeners$"+tl,Qd="__reactHandles$"+tl,Ms="__reactResources$"+tl,Ua="__reactMarker$"+tl;function ti(t){delete t[Ht],delete t[Kt],delete t[Pu],delete t[Xd],delete t[Qd]}function Zl(t){var e=t[Ht];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Ql]||l[Ht]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=kr(t);t!==null;){if(l=t[Ht])return l;t=kr(t)}return e}t=l,l=t.parentNode}return null}function Vl(t){if(t=t[Ht]||t[Ql]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function $a(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(h(33))}function Kl(t){var e=t[Ms];return e||(e=t[Ms]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function $t(t){t[Ua]=!0}var _s=new Set,Ds={};function _l(t,e){Jl(t,e),Jl(t+"Capture",e)}function Jl(t,e){for(Ds[t]=e,t=0;t<e.length;t++)_s.add(e[t])}var Zd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cs={},Os={};function Vd(t){return Ku.call(Os,t)?!0:Ku.call(Cs,t)?!1:Zd.test(t)?Os[t]=!0:(Cs[t]=!0,!1)}function Nn(t,e,l){if(Vd(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Un(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function je(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function de(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ns(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Kd(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ei(t){if(!t._valueTracker){var e=Ns(t)?"checked":"value";t._valueTracker=Kd(t,e,""+t[e])}}function Us(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Ns(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function $n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Jd=/[\n"\\]/g;function me(t){return t.replace(Jd,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function li(t,e,l,a,n,u,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+de(e)):t.value!==""+de(e)&&(t.value=""+de(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?ai(t,i,de(e)):l!=null?ai(t,i,de(l)):a!=null&&t.removeAttribute("value"),n==null&&u!=null&&(t.defaultChecked=!!u),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+de(c):t.removeAttribute("name")}function $s(t,e,l,a,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){ei(t);return}l=l!=null?""+de(l):"",e=e!=null?""+de(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),ei(t)}function ai(t,e,l){e==="number"&&$n(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function kl(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+de(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Rs(t,e,l){if(e!=null&&(e=""+de(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+de(l):""}function js(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(h(92));if(Te(a)){if(1<a.length)throw Error(h(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=de(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),ei(t)}function Wl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var kd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hs(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||kd.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function ws(t,e,l){if(e!=null&&typeof e!="object")throw Error(h(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&Hs(t,n,a)}else for(var u in e)e.hasOwnProperty(u)&&Hs(t,u,e[u])}function ni(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rn(t){return Fd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function He(){}var ui=null;function ii(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fl=null,Il=null;function Bs(t){var e=Vl(t);if(e&&(t=e.stateNode)){var l=t[Kt]||null;t:switch(t=e.stateNode,e.type){case"input":if(li(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+me(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[Kt]||null;if(!n)throw Error(h(90));li(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Us(a)}break t;case"textarea":Rs(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&kl(t,!!l.multiple,e,!1)}}}var ci=!1;function qs(t,e,l){if(ci)return t(e,l);ci=!0;try{var a=t(e);return a}finally{if(ci=!1,(Fl!==null||Il!==null)&&(xu(),Fl&&(e=Fl,t=Il,Il=Fl=null,Bs(e),t)))for(e=0;e<t.length;e++)Bs(t[e])}}function Ra(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Kt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(h(231,e,typeof l));return l}var we=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),si=!1;if(we)try{var ja={};Object.defineProperty(ja,"passive",{get:function(){si=!0}}),window.addEventListener("test",ja,ja),window.removeEventListener("test",ja,ja)}catch{si=!1}var el=null,fi=null,jn=null;function Ys(){if(jn)return jn;var t,e=fi,l=e.length,a,n="value"in el?el.value:el.textContent,u=n.length;for(t=0;t<l&&e[t]===n[t];t++);var i=l-t;for(a=1;a<=i&&e[l-a]===n[u-a];a++);return jn=n.slice(t,1<a?1-a:void 0)}function Hn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wn(){return!0}function Gs(){return!1}function Jt(t){function e(l,a,n,u,i){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?wn:Gs,this.isPropagationStopped=Gs,this}return j(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),e}var Dl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bn=Jt(Dl),Ha=j({},Dl,{view:0,detail:0}),Id=Jt(Ha),oi,ri,wa,qn=j({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wa&&(wa&&t.type==="mousemove"?(oi=t.screenX-wa.screenX,ri=t.screenY-wa.screenY):ri=oi=0,wa=t),oi)},movementY:function(t){return"movementY"in t?t.movementY:ri}}),Ls=Jt(qn),Pd=j({},qn,{dataTransfer:0}),tm=Jt(Pd),em=j({},Ha,{relatedTarget:0}),di=Jt(em),lm=j({},Dl,{animationName:0,elapsedTime:0,pseudoElement:0}),am=Jt(lm),nm=j({},Dl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),um=Jt(nm),im=j({},Dl,{data:0}),Xs=Jt(im),cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function om(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fm[t])?!!e[t]:!1}function mi(){return om}var rm=j({},Ha,{key:function(t){if(t.key){var e=cm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mi,charCode:function(t){return t.type==="keypress"?Hn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dm=Jt(rm),mm=j({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qs=Jt(mm),hm=j({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mi}),gm=Jt(hm),pm=j({},Dl,{propertyName:0,elapsedTime:0,pseudoElement:0}),ym=Jt(pm),vm=j({},qn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bm=Jt(vm),Sm=j({},Dl,{newState:0,oldState:0}),xm=Jt(Sm),Tm=[9,13,27,32],hi=we&&"CompositionEvent"in window,Ba=null;we&&"documentMode"in document&&(Ba=document.documentMode);var zm=we&&"TextEvent"in window&&!Ba,Zs=we&&(!hi||Ba&&8<Ba&&11>=Ba),Vs=" ",Ks=!1;function Js(t,e){switch(t){case"keyup":return Tm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ks(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pl=!1;function Em(t,e){switch(t){case"compositionend":return ks(e);case"keypress":return e.which!==32?null:(Ks=!0,Vs);case"textInput":return t=e.data,t===Vs&&Ks?null:t;default:return null}}function Am(t,e){if(Pl)return t==="compositionend"||!hi&&Js(t,e)?(t=Ys(),jn=fi=el=null,Pl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zs&&e.locale!=="ko"?null:e.data;default:return null}}var Mm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ws(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Mm[t.type]:e==="textarea"}function Fs(t,e,l,a){Fl?Il?Il.push(a):Il=[a]:Fl=a,e=Du(e,"onChange"),0<e.length&&(l=new Bn("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var qa=null,Ya=null;function _m(t){jr(t,0)}function Yn(t){var e=$a(t);if(Us(e))return t}function Is(t,e){if(t==="change")return e}var Ps=!1;if(we){var gi;if(we){var pi="oninput"in document;if(!pi){var tf=document.createElement("div");tf.setAttribute("oninput","return;"),pi=typeof tf.oninput=="function"}gi=pi}else gi=!1;Ps=gi&&(!document.documentMode||9<document.documentMode)}function ef(){qa&&(qa.detachEvent("onpropertychange",lf),Ya=qa=null)}function lf(t){if(t.propertyName==="value"&&Yn(Ya)){var e=[];Fs(e,Ya,t,ii(t)),qs(_m,e)}}function Dm(t,e,l){t==="focusin"?(ef(),qa=e,Ya=l,qa.attachEvent("onpropertychange",lf)):t==="focusout"&&ef()}function Cm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yn(Ya)}function Om(t,e){if(t==="click")return Yn(e)}function Nm(t,e){if(t==="input"||t==="change")return Yn(e)}function Um(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ne=typeof Object.is=="function"?Object.is:Um;function Ga(t,e){if(ne(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Ku.call(e,n)||!ne(t[n],e[n]))return!1}return!0}function af(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nf(t,e){var l=af(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=af(l)}}function uf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=$n(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=$n(t.document)}return e}function yi(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var $m=we&&"documentMode"in document&&11>=document.documentMode,ta=null,vi=null,La=null,bi=!1;function sf(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;bi||ta==null||ta!==$n(a)||(a=ta,"selectionStart"in a&&yi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),La&&Ga(La,a)||(La=a,a=Du(vi,"onSelect"),0<a.length&&(e=new Bn("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=ta)))}function Cl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ea={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionrun:Cl("Transition","TransitionRun"),transitionstart:Cl("Transition","TransitionStart"),transitioncancel:Cl("Transition","TransitionCancel"),transitionend:Cl("Transition","TransitionEnd")},Si={},ff={};we&&(ff=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function Ol(t){if(Si[t])return Si[t];if(!ea[t])return t;var e=ea[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in ff)return Si[t]=e[l];return t}var of=Ol("animationend"),rf=Ol("animationiteration"),df=Ol("animationstart"),Rm=Ol("transitionrun"),jm=Ol("transitionstart"),Hm=Ol("transitioncancel"),mf=Ol("transitionend"),hf=new Map,xi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xi.push("scrollEnd");function ze(t,e){hf.set(t,e),_l(e,[t])}var Gn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},he=[],la=0,Ti=0;function Ln(){for(var t=la,e=Ti=la=0;e<t;){var l=he[e];he[e++]=null;var a=he[e];he[e++]=null;var n=he[e];he[e++]=null;var u=he[e];if(he[e++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&gf(l,n,u)}}function Xn(t,e,l,a){he[la++]=t,he[la++]=e,he[la++]=l,he[la++]=a,Ti|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function zi(t,e,l,a){return Xn(t,e,l,a),Qn(t)}function Nl(t,e){return Xn(t,null,null,e),Qn(t)}function gf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,u=t.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(n=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,n&&e!==null&&(n=31-ae(l),t=u.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),u):null}function Qn(t){if(50<rn)throw rn=0,Uc=null,Error(h(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var aa={};function wm(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ue(t,e,l,a){return new wm(t,e,l,a)}function Ei(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Be(t,e){var l=t.alternate;return l===null?(l=ue(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function pf(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Zn(t,e,l,a,n,u){var i=0;if(a=t,typeof t=="function")Ei(t)&&(i=1);else if(typeof t=="string")i=Lh(t,l,D.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case pt:return t=ue(31,l,e,n),t.elementType=pt,t.lanes=u,t;case N:return Ul(l.children,n,u,e);case H:i=8,n|=24;break;case K:return t=ue(12,l,e,n|2),t.elementType=K,t.lanes=u,t;case te:return t=ue(13,l,e,n),t.elementType=te,t.lanes=u,t;case at:return t=ue(19,l,e,n),t.elementType=at,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zt:i=10;break t;case $:i=9;break t;case jt:i=11;break t;case B:i=14;break t;case Et:i=16,a=null;break t}i=29,l=Error(h(130,t===null?"null":typeof t,"")),a=null}return e=ue(i,l,e,n),e.elementType=t,e.type=a,e.lanes=u,e}function Ul(t,e,l,a){return t=ue(7,t,a,e),t.lanes=l,t}function Ai(t,e,l){return t=ue(6,t,null,e),t.lanes=l,t}function yf(t){var e=ue(18,null,null,0);return e.stateNode=t,e}function Mi(t,e,l){return e=ue(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var vf=new WeakMap;function ge(t,e){if(typeof t=="object"&&t!==null){var l=vf.get(t);return l!==void 0?l:(e={value:t,source:e,stack:ps(e)},vf.set(t,e),e)}return{value:t,source:e,stack:ps(e)}}var na=[],ua=0,Vn=null,Xa=0,pe=[],ye=0,ll=null,Oe=1,Ne="";function qe(t,e){na[ua++]=Xa,na[ua++]=Vn,Vn=t,Xa=e}function bf(t,e,l){pe[ye++]=Oe,pe[ye++]=Ne,pe[ye++]=ll,ll=t;var a=Oe;t=Ne;var n=32-ae(a)-1;a&=~(1<<n),l+=1;var u=32-ae(e)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,Oe=1<<32-ae(e)+n|l<<n|a,Ne=u+t}else Oe=1<<u|l<<n|a,Ne=t}function _i(t){t.return!==null&&(qe(t,1),bf(t,1,0))}function Di(t){for(;t===Vn;)Vn=na[--ua],na[ua]=null,Xa=na[--ua],na[ua]=null;for(;t===ll;)ll=pe[--ye],pe[ye]=null,Ne=pe[--ye],pe[ye]=null,Oe=pe[--ye],pe[ye]=null}function Sf(t,e){pe[ye++]=Oe,pe[ye++]=Ne,pe[ye++]=ll,Oe=e.id,Ne=e.overflow,ll=t}var wt=null,yt=null,tt=!1,al=null,ve=!1,Ci=Error(h(519));function nl(t){var e=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qa(ge(e,t)),Ci}function xf(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[Ht]=t,e[Kt]=a,l){case"dialog":W("cancel",e),W("close",e);break;case"iframe":case"object":case"embed":W("load",e);break;case"video":case"audio":for(l=0;l<mn.length;l++)W(mn[l],e);break;case"source":W("error",e);break;case"img":case"image":case"link":W("error",e),W("load",e);break;case"details":W("toggle",e);break;case"input":W("invalid",e),$s(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":W("invalid",e);break;case"textarea":W("invalid",e),js(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||qr(e.textContent,l)?(a.popover!=null&&(W("beforetoggle",e),W("toggle",e)),a.onScroll!=null&&W("scroll",e),a.onScrollEnd!=null&&W("scrollend",e),a.onClick!=null&&(e.onclick=He),e=!0):e=!1,e||nl(t,!0)}function Tf(t){for(wt=t.return;wt;)switch(wt.tag){case 5:case 31:case 13:ve=!1;return;case 27:case 3:ve=!0;return;default:wt=wt.return}}function ia(t){if(t!==wt)return!1;if(!tt)return Tf(t),tt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Kc(t.type,t.memoizedProps)),l=!l),l&&yt&&nl(t),Tf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(317));yt=Jr(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(317));yt=Jr(t)}else e===27?(e=yt,vl(t.type)?(t=Ic,Ic=null,yt=t):yt=e):yt=wt?Se(t.stateNode.nextSibling):null;return!0}function $l(){yt=wt=null,tt=!1}function Oi(){var t=al;return t!==null&&(It===null?It=t:It.push.apply(It,t),al=null),t}function Qa(t){al===null?al=[t]:al.push(t)}var Ni=o(null),Rl=null,Ye=null;function ul(t,e,l){M(Ni,e._currentValue),e._currentValue=l}function Ge(t){t._currentValue=Ni.current,T(Ni)}function Ui(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function $i(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;t:for(;u!==null;){var c=u;u=n;for(var s=0;s<e.length;s++)if(c.context===e[s]){u.lanes|=l,c=u.alternate,c!==null&&(c.lanes|=l),Ui(u.return,l,t),a||(i=null);break t}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(h(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),Ui(i,l,t),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===t){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function ca(t,e,l,a){t=null;for(var n=e,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(h(387));if(i=i.memoizedProps,i!==null){var c=n.type;ne(n.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(n===it.current){if(i=n.alternate,i===null)throw Error(h(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(vn):t=[vn])}n=n.return}t!==null&&$i(e,t,l,a),e.flags|=262144}function Kn(t){for(t=t.firstContext;t!==null;){if(!ne(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function jl(t){Rl=t,Ye=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Bt(t){return zf(Rl,t)}function Jn(t,e){return Rl===null&&jl(t),zf(t,e)}function zf(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},Ye===null){if(t===null)throw Error(h(308));Ye=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ye=Ye.next=e;return l}var Bm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},qm=E.unstable_scheduleCallback,Ym=E.unstable_NormalPriority,Dt={$$typeof:zt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ri(){return{controller:new Bm,data:new Map,refCount:0}}function Za(t){t.refCount--,t.refCount===0&&qm(Ym,function(){t.controller.abort()})}var Va=null,ji=0,sa=0,fa=null;function Gm(t,e){if(Va===null){var l=Va=[];ji=0,sa=Bc(),fa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return ji++,e.then(Ef,Ef),e}function Ef(){if(--ji===0&&Va!==null){fa!==null&&(fa.status="fulfilled");var t=Va;Va=null,sa=0,fa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Lm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Af=v.S;v.S=function(t,e){fr=ee(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Gm(t,e),Af!==null&&Af(t,e)};var Hl=o(null);function Hi(){var t=Hl.current;return t!==null?t:gt.pooledCache}function kn(t,e){e===null?M(Hl,Hl.current):M(Hl,e.pool)}function Mf(){var t=Hi();return t===null?null:{parent:Dt._currentValue,pool:t}}var oa=Error(h(460)),wi=Error(h(474)),Wn=Error(h(542)),Fn={then:function(){}};function _f(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Df(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(He,He),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Of(t),t;default:if(typeof e.status=="string")e.then(He,He);else{if(t=gt,t!==null&&100<t.shellSuspendCounter)throw Error(h(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Of(t),t}throw Bl=e,oa}}function wl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Bl=l,oa):l}}var Bl=null;function Cf(){if(Bl===null)throw Error(h(459));var t=Bl;return Bl=null,t}function Of(t){if(t===oa||t===Wn)throw Error(h(483))}var ra=null,Ka=0;function In(t){var e=Ka;return Ka+=1,ra===null&&(ra=[]),Df(ra,t,e)}function Ja(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Pn(t,e){throw e.$$typeof===mt?Error(h(525)):(t=Object.prototype.toString.call(e),Error(h(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Nf(t){function e(r,f){if(t){var d=r.deletions;d===null?(r.deletions=[f],r.flags|=16):d.push(f)}}function l(r,f){if(!t)return null;for(;f!==null;)e(r,f),f=f.sibling;return null}function a(r){for(var f=new Map;r!==null;)r.key!==null?f.set(r.key,r):f.set(r.index,r),r=r.sibling;return f}function n(r,f){return r=Be(r,f),r.index=0,r.sibling=null,r}function u(r,f,d){return r.index=d,t?(d=r.alternate,d!==null?(d=d.index,d<f?(r.flags|=67108866,f):d):(r.flags|=67108866,f)):(r.flags|=1048576,f)}function i(r){return t&&r.alternate===null&&(r.flags|=67108866),r}function c(r,f,d,b){return f===null||f.tag!==6?(f=Ai(d,r.mode,b),f.return=r,f):(f=n(f,d),f.return=r,f)}function s(r,f,d,b){var R=d.type;return R===N?y(r,f,d.props.children,b,d.key):f!==null&&(f.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Et&&wl(R)===f.type)?(f=n(f,d.props),Ja(f,d),f.return=r,f):(f=Zn(d.type,d.key,d.props,null,r.mode,b),Ja(f,d),f.return=r,f)}function m(r,f,d,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==d.containerInfo||f.stateNode.implementation!==d.implementation?(f=Mi(d,r.mode,b),f.return=r,f):(f=n(f,d.children||[]),f.return=r,f)}function y(r,f,d,b,R){return f===null||f.tag!==7?(f=Ul(d,r.mode,b,R),f.return=r,f):(f=n(f,d),f.return=r,f)}function x(r,f,d){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Ai(""+f,r.mode,d),f.return=r,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Gt:return d=Zn(f.type,f.key,f.props,null,r.mode,d),Ja(d,f),d.return=r,d;case Lt:return f=Mi(f,r.mode,d),f.return=r,f;case Et:return f=wl(f),x(r,f,d)}if(Te(f)||Xt(f))return f=Ul(f,r.mode,d,null),f.return=r,f;if(typeof f.then=="function")return x(r,In(f),d);if(f.$$typeof===zt)return x(r,Jn(r,f),d);Pn(r,f)}return null}function g(r,f,d,b){var R=f!==null?f.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return R!==null?null:c(r,f,""+d,b);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Gt:return d.key===R?s(r,f,d,b):null;case Lt:return d.key===R?m(r,f,d,b):null;case Et:return d=wl(d),g(r,f,d,b)}if(Te(d)||Xt(d))return R!==null?null:y(r,f,d,b,null);if(typeof d.then=="function")return g(r,f,In(d),b);if(d.$$typeof===zt)return g(r,f,Jn(r,d),b);Pn(r,d)}return null}function p(r,f,d,b,R){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return r=r.get(d)||null,c(f,r,""+b,R);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Gt:return r=r.get(b.key===null?d:b.key)||null,s(f,r,b,R);case Lt:return r=r.get(b.key===null?d:b.key)||null,m(f,r,b,R);case Et:return b=wl(b),p(r,f,d,b,R)}if(Te(b)||Xt(b))return r=r.get(d)||null,y(f,r,b,R,null);if(typeof b.then=="function")return p(r,f,d,In(b),R);if(b.$$typeof===zt)return p(r,f,d,Jn(f,b),R);Pn(f,b)}return null}function _(r,f,d,b){for(var R=null,et=null,C=f,Z=f=0,I=null;C!==null&&Z<d.length;Z++){C.index>Z?(I=C,C=null):I=C.sibling;var lt=g(r,C,d[Z],b);if(lt===null){C===null&&(C=I);break}t&&C&&lt.alternate===null&&e(r,C),f=u(lt,f,Z),et===null?R=lt:et.sibling=lt,et=lt,C=I}if(Z===d.length)return l(r,C),tt&&qe(r,Z),R;if(C===null){for(;Z<d.length;Z++)C=x(r,d[Z],b),C!==null&&(f=u(C,f,Z),et===null?R=C:et.sibling=C,et=C);return tt&&qe(r,Z),R}for(C=a(C);Z<d.length;Z++)I=p(C,r,Z,d[Z],b),I!==null&&(t&&I.alternate!==null&&C.delete(I.key===null?Z:I.key),f=u(I,f,Z),et===null?R=I:et.sibling=I,et=I);return t&&C.forEach(function(zl){return e(r,zl)}),tt&&qe(r,Z),R}function w(r,f,d,b){if(d==null)throw Error(h(151));for(var R=null,et=null,C=f,Z=f=0,I=null,lt=d.next();C!==null&&!lt.done;Z++,lt=d.next()){C.index>Z?(I=C,C=null):I=C.sibling;var zl=g(r,C,lt.value,b);if(zl===null){C===null&&(C=I);break}t&&C&&zl.alternate===null&&e(r,C),f=u(zl,f,Z),et===null?R=zl:et.sibling=zl,et=zl,C=I}if(lt.done)return l(r,C),tt&&qe(r,Z),R;if(C===null){for(;!lt.done;Z++,lt=d.next())lt=x(r,lt.value,b),lt!==null&&(f=u(lt,f,Z),et===null?R=lt:et.sibling=lt,et=lt);return tt&&qe(r,Z),R}for(C=a(C);!lt.done;Z++,lt=d.next())lt=p(C,r,Z,lt.value,b),lt!==null&&(t&&lt.alternate!==null&&C.delete(lt.key===null?Z:lt.key),f=u(lt,f,Z),et===null?R=lt:et.sibling=lt,et=lt);return t&&C.forEach(function(Ph){return e(r,Ph)}),tt&&qe(r,Z),R}function dt(r,f,d,b){if(typeof d=="object"&&d!==null&&d.type===N&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Gt:t:{for(var R=d.key;f!==null;){if(f.key===R){if(R=d.type,R===N){if(f.tag===7){l(r,f.sibling),b=n(f,d.props.children),b.return=r,r=b;break t}}else if(f.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Et&&wl(R)===f.type){l(r,f.sibling),b=n(f,d.props),Ja(b,d),b.return=r,r=b;break t}l(r,f);break}else e(r,f);f=f.sibling}d.type===N?(b=Ul(d.props.children,r.mode,b,d.key),b.return=r,r=b):(b=Zn(d.type,d.key,d.props,null,r.mode,b),Ja(b,d),b.return=r,r=b)}return i(r);case Lt:t:{for(R=d.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===d.containerInfo&&f.stateNode.implementation===d.implementation){l(r,f.sibling),b=n(f,d.children||[]),b.return=r,r=b;break t}else{l(r,f);break}else e(r,f);f=f.sibling}b=Mi(d,r.mode,b),b.return=r,r=b}return i(r);case Et:return d=wl(d),dt(r,f,d,b)}if(Te(d))return _(r,f,d,b);if(Xt(d)){if(R=Xt(d),typeof R!="function")throw Error(h(150));return d=R.call(d),w(r,f,d,b)}if(typeof d.then=="function")return dt(r,f,In(d),b);if(d.$$typeof===zt)return dt(r,f,Jn(r,d),b);Pn(r,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,f!==null&&f.tag===6?(l(r,f.sibling),b=n(f,d),b.return=r,r=b):(l(r,f),b=Ai(d,r.mode,b),b.return=r,r=b),i(r)):l(r,f)}return function(r,f,d,b){try{Ka=0;var R=dt(r,f,d,b);return ra=null,R}catch(C){if(C===oa||C===Wn)throw C;var et=ue(29,C,null,r.mode);return et.lanes=b,et.return=r,et}}}var ql=Nf(!0),Uf=Nf(!1),il=!1;function Bi(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qi(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function cl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function sl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(nt&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=Qn(t),gf(t,null,l),e}return Xn(t,a,e,l),Qn(t)}function ka(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Ts(t,l)}}function Yi(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?n=u=e:u=u.next=e}else n=u=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Gi=!1;function Wa(){if(Gi){var t=fa;if(t!==null)throw t}}function Fa(t,e,l,a){Gi=!1;var n=t.updateQueue;il=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,m=s.next;s.next=null,i===null?u=m:i.next=m,i=s;var y=t.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==i&&(c===null?y.firstBaseUpdate=m:c.next=m,y.lastBaseUpdate=s))}if(u!==null){var x=n.baseState;i=0,y=m=s=null,c=u;do{var g=c.lane&-536870913,p=g!==c.lane;if(p?(F&g)===g:(a&g)===g){g!==0&&g===sa&&(Gi=!0),y!==null&&(y=y.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var _=t,w=c;g=e;var dt=l;switch(w.tag){case 1:if(_=w.payload,typeof _=="function"){x=_.call(dt,x,g);break t}x=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,g=typeof _=="function"?_.call(dt,x,g):_,g==null)break t;x=j({},x,g);break t;case 2:il=!0}}g=c.callback,g!==null&&(t.flags|=64,p&&(t.flags|=8192),p=n.callbacks,p===null?n.callbacks=[g]:p.push(g))}else p={lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(m=y=p,s=x):y=y.next=p,i|=g;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;p=c,c=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);y===null&&(s=x),n.baseState=s,n.firstBaseUpdate=m,n.lastBaseUpdate=y,u===null&&(n.shared.lanes=0),ml|=i,t.lanes=i,t.memoizedState=x}}function $f(t,e){if(typeof t!="function")throw Error(h(191,t));t.call(e)}function Rf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)$f(l[t],e)}var da=o(null),tu=o(0);function jf(t,e){t=We,M(tu,t),M(da,e),We=t|e.baseLanes}function Li(){M(tu,We),M(da,da.current)}function Xi(){We=tu.current,T(da),T(tu)}var ie=o(null),be=null;function fl(t){var e=t.alternate;M(Mt,Mt.current&1),M(ie,t),be===null&&(e===null||da.current!==null||e.memoizedState!==null)&&(be=t)}function Qi(t){M(Mt,Mt.current),M(ie,t),be===null&&(be=t)}function Hf(t){t.tag===22?(M(Mt,Mt.current),M(ie,t),be===null&&(be=t)):ol()}function ol(){M(Mt,Mt.current),M(ie,ie.current)}function ce(t){T(ie),be===t&&(be=null),T(Mt)}var Mt=o(0);function eu(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Wc(l)||Fc(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Le=0,Q=null,ot=null,Ct=null,lu=!1,ma=!1,Yl=!1,au=0,Ia=0,ha=null,Xm=0;function St(){throw Error(h(321))}function Zi(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!ne(t[l],e[l]))return!1;return!0}function Vi(t,e,l,a,n,u){return Le=u,Q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,v.H=t===null||t.memoizedState===null?So:cc,Yl=!1,u=l(a,n),Yl=!1,ma&&(u=Bf(e,l,a,n)),wf(t),u}function wf(t){v.H=en;var e=ot!==null&&ot.next!==null;if(Le=0,Ct=ot=Q=null,lu=!1,Ia=0,ha=null,e)throw Error(h(300));t===null||Ot||(t=t.dependencies,t!==null&&Kn(t)&&(Ot=!0))}function Bf(t,e,l,a){Q=t;var n=0;do{if(ma&&(ha=null),Ia=0,ma=!1,25<=n)throw Error(h(301));if(n+=1,Ct=ot=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}v.H=xo,u=e(l,a)}while(ma);return u}function Qm(){var t=v.H,e=t.useState()[0];return e=typeof e.then=="function"?Pa(e):e,t=t.useState()[0],(ot!==null?ot.memoizedState:null)!==t&&(Q.flags|=1024),e}function Ki(){var t=au!==0;return au=0,t}function Ji(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function ki(t){if(lu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}lu=!1}Le=0,Ct=ot=Q=null,ma=!1,Ia=au=0,ha=null}function Vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?Q.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function _t(){if(ot===null){var t=Q.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var e=Ct===null?Q.memoizedState:Ct.next;if(e!==null)Ct=e,ot=t;else{if(t===null)throw Q.alternate===null?Error(h(467)):Error(h(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},Ct===null?Q.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(t){var e=Ia;return Ia+=1,ha===null&&(ha=[]),t=Df(ha,t,e),e=Q,(Ct===null?e.memoizedState:Ct.next)===null&&(e=e.alternate,v.H=e===null||e.memoizedState===null?So:cc),t}function uu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Pa(t);if(t.$$typeof===zt)return Bt(t)}throw Error(h(438,String(t)))}function Wi(t){var e=null,l=Q.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=Q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=nu(),Q.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Ce;return e.index++,l}function Xe(t,e){return typeof e=="function"?e(t):e}function iu(t){var e=_t();return Fi(e,ot,t)}function Fi(t,e,l){var a=t.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=l;var n=t.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}e.baseQueue=n=u,a.pending=null}if(u=t.baseState,n===null)t.memoizedState=u;else{e=n.next;var c=i=null,s=null,m=e,y=!1;do{var x=m.lane&-536870913;if(x!==m.lane?(F&x)===x:(Le&x)===x){var g=m.revertLane;if(g===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),x===sa&&(y=!0);else if((Le&g)===g){m=m.next,g===sa&&(y=!0);continue}else x={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=x,i=u):s=s.next=x,Q.lanes|=g,ml|=g;x=m.action,Yl&&l(u,x),u=m.hasEagerState?m.eagerState:l(u,x)}else g={lane:x,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=g,i=u):s=s.next=g,Q.lanes|=x,ml|=x;m=m.next}while(m!==null&&m!==e);if(s===null?i=u:s.next=c,!ne(u,t.memoizedState)&&(Ot=!0,y&&(l=fa,l!==null)))throw l;t.memoizedState=u,t.baseState=i,t.baseQueue=s,a.lastRenderedState=u}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Ii(t){var e=_t(),l=e.queue;if(l===null)throw Error(h(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,u=e.memoizedState;if(n!==null){l.pending=null;var i=n=n.next;do u=t(u,i.action),i=i.next;while(i!==n);ne(u,e.memoizedState)||(Ot=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,a]}function qf(t,e,l){var a=Q,n=_t(),u=tt;if(u){if(l===void 0)throw Error(h(407));l=l()}else l=e();var i=!ne((ot||n).memoizedState,l);if(i&&(n.memoizedState=l,Ot=!0),n=n.queue,ec(Lf.bind(null,a,n,t),[t]),n.getSnapshot!==e||i||Ct!==null&&Ct.memoizedState.tag&1){if(a.flags|=2048,ga(9,{destroy:void 0},Gf.bind(null,a,n,l,e),null),gt===null)throw Error(h(349));u||(Le&127)!==0||Yf(a,e,l)}return l}function Yf(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=Q.updateQueue,e===null?(e=nu(),Q.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Gf(t,e,l,a){e.value=l,e.getSnapshot=a,Xf(e)&&Qf(t)}function Lf(t,e,l){return l(function(){Xf(e)&&Qf(t)})}function Xf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!ne(t,l)}catch{return!0}}function Qf(t){var e=Nl(t,2);e!==null&&Pt(e,t,2)}function Pi(t){var e=Vt();if(typeof t=="function"){var l=t;if(t=l(),Yl){Pe(!0);try{l()}finally{Pe(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xe,lastRenderedState:t},e}function Zf(t,e,l,a){return t.baseState=l,Fi(t,ot,typeof a=="function"?a:Xe)}function Zm(t,e,l,a,n){if(fu(t))throw Error(h(485));if(t=e.action,t!==null){var u={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};v.T!==null?l(!0):u.isTransition=!1,a(u),l=e.pending,l===null?(u.next=e.pending=u,Vf(e,u)):(u.next=l.next,e.pending=l.next=u)}}function Vf(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var u=v.T,i={};v.T=i;try{var c=l(n,a),s=v.S;s!==null&&s(i,c),Kf(t,e,c)}catch(m){tc(t,e,m)}finally{u!==null&&i.types!==null&&(u.types=i.types),v.T=u}}else try{u=l(n,a),Kf(t,e,u)}catch(m){tc(t,e,m)}}function Kf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Jf(t,e,a)},function(a){return tc(t,e,a)}):Jf(t,e,l)}function Jf(t,e,l){e.status="fulfilled",e.value=l,kf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Vf(t,l)))}function tc(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,kf(e),e=e.next;while(e!==a)}t.action=null}function kf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Wf(t,e){return e}function Ff(t,e){if(tt){var l=gt.formState;if(l!==null){t:{var a=Q;if(tt){if(yt){e:{for(var n=yt,u=ve;n.nodeType!==8;){if(!u){n=null;break e}if(n=Se(n.nextSibling),n===null){n=null;break e}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){yt=Se(n.nextSibling),a=n.data==="F!";break t}}nl(a)}a=!1}a&&(e=l[0])}}return l=Vt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wf,lastRenderedState:e},l.queue=a,l=yo.bind(null,Q,a),a.dispatch=l,a=Pi(!1),u=ic.bind(null,Q,!1,a.queue),a=Vt(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=Zm.bind(null,Q,n,u,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function If(t){var e=_t();return Pf(e,ot,t)}function Pf(t,e,l){if(e=Fi(t,e,Wf)[0],t=iu(Xe)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Pa(e)}catch(i){throw i===oa?Wn:i}else a=e;e=_t();var n=e.queue,u=n.dispatch;return l!==e.memoizedState&&(Q.flags|=2048,ga(9,{destroy:void 0},Vm.bind(null,n,l),null)),[a,u,t]}function Vm(t,e){t.action=e}function to(t){var e=_t(),l=ot;if(l!==null)return Pf(e,l,t);_t(),e=e.memoizedState,l=_t();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ga(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=Q.updateQueue,e===null&&(e=nu(),Q.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function eo(){return _t().memoizedState}function cu(t,e,l,a){var n=Vt();Q.flags|=t,n.memoizedState=ga(1|e,{destroy:void 0},l,a===void 0?null:a)}function su(t,e,l,a){var n=_t();a=a===void 0?null:a;var u=n.memoizedState.inst;ot!==null&&a!==null&&Zi(a,ot.memoizedState.deps)?n.memoizedState=ga(e,u,l,a):(Q.flags|=t,n.memoizedState=ga(1|e,u,l,a))}function lo(t,e){cu(8390656,8,t,e)}function ec(t,e){su(2048,8,t,e)}function Km(t){Q.flags|=4;var e=Q.updateQueue;if(e===null)e=nu(),Q.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function ao(t){var e=_t().memoizedState;return Km({ref:e,nextImpl:t}),function(){if((nt&2)!==0)throw Error(h(440));return e.impl.apply(void 0,arguments)}}function no(t,e){return su(4,2,t,e)}function uo(t,e){return su(4,4,t,e)}function io(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function co(t,e,l){l=l!=null?l.concat([t]):null,su(4,4,io.bind(null,e,t),l)}function lc(){}function so(t,e){var l=_t();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Zi(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function fo(t,e){var l=_t();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Zi(e,a[1]))return a[0];if(a=t(),Yl){Pe(!0);try{t()}finally{Pe(!1)}}return l.memoizedState=[a,e],a}function ac(t,e,l){return l===void 0||(Le&1073741824)!==0&&(F&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=rr(),Q.lanes|=t,ml|=t,l)}function oo(t,e,l,a){return ne(l,e)?l:da.current!==null?(t=ac(t,l,a),ne(t,e)||(Ot=!0),t):(Le&42)===0||(Le&1073741824)!==0&&(F&261930)===0?(Ot=!0,t.memoizedState=l):(t=rr(),Q.lanes|=t,ml|=t,e)}function ro(t,e,l,a,n){var u=A.p;A.p=u!==0&&8>u?u:8;var i=v.T,c={};v.T=c,ic(t,!1,e,l);try{var s=n(),m=v.S;if(m!==null&&m(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var y=Lm(s,a);tn(t,e,y,oe(t))}else tn(t,e,a,oe(t))}catch(x){tn(t,e,{then:function(){},status:"rejected",reason:x},oe())}finally{A.p=u,i!==null&&c.types!==null&&(i.types=c.types),v.T=i}}function Jm(){}function nc(t,e,l,a){if(t.tag!==5)throw Error(h(476));var n=mo(t).queue;ro(t,n,e,q,l===null?Jm:function(){return ho(t),l(a)})}function mo(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xe,lastRenderedState:q},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xe,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ho(t){var e=mo(t);e.next===null&&(e=t.alternate.memoizedState),tn(t,e.next.queue,{},oe())}function uc(){return Bt(vn)}function go(){return _t().memoizedState}function po(){return _t().memoizedState}function km(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=oe();t=cl(l);var a=sl(e,t,l);a!==null&&(Pt(a,e,l),ka(a,e,l)),e={cache:Ri()},t.payload=e;return}e=e.return}}function Wm(t,e,l){var a=oe();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fu(t)?vo(e,l):(l=zi(t,e,l,a),l!==null&&(Pt(l,t,a),bo(l,e,a)))}function yo(t,e,l){var a=oe();tn(t,e,l,a)}function tn(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(fu(t))vo(e,n);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var i=e.lastRenderedState,c=u(i,l);if(n.hasEagerState=!0,n.eagerState=c,ne(c,i))return Xn(t,e,n,0),gt===null&&Ln(),!1}catch{}if(l=zi(t,e,n,a),l!==null)return Pt(l,t,a),bo(l,e,a),!0}return!1}function ic(t,e,l,a){if(a={lane:2,revertLane:Bc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fu(t)){if(e)throw Error(h(479))}else e=zi(t,l,a,2),e!==null&&Pt(e,t,2)}function fu(t){var e=t.alternate;return t===Q||e!==null&&e===Q}function vo(t,e){ma=lu=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function bo(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Ts(t,l)}}var en={readContext:Bt,use:uu,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St};en.useEffectEvent=St;var So={readContext:Bt,use:uu,useCallback:function(t,e){return Vt().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:lo,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,cu(4194308,4,io.bind(null,e,t),l)},useLayoutEffect:function(t,e){return cu(4194308,4,t,e)},useInsertionEffect:function(t,e){cu(4,2,t,e)},useMemo:function(t,e){var l=Vt();e=e===void 0?null:e;var a=t();if(Yl){Pe(!0);try{t()}finally{Pe(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Vt();if(l!==void 0){var n=l(e);if(Yl){Pe(!0);try{l(e)}finally{Pe(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=Wm.bind(null,Q,t),[a.memoizedState,t]},useRef:function(t){var e=Vt();return t={current:t},e.memoizedState=t},useState:function(t){t=Pi(t);var e=t.queue,l=yo.bind(null,Q,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:lc,useDeferredValue:function(t,e){var l=Vt();return ac(l,t,e)},useTransition:function(){var t=Pi(!1);return t=ro.bind(null,Q,t.queue,!0,!1),Vt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=Q,n=Vt();if(tt){if(l===void 0)throw Error(h(407));l=l()}else{if(l=e(),gt===null)throw Error(h(349));(F&127)!==0||Yf(a,e,l)}n.memoizedState=l;var u={value:l,getSnapshot:e};return n.queue=u,lo(Lf.bind(null,a,u,t),[t]),a.flags|=2048,ga(9,{destroy:void 0},Gf.bind(null,a,u,l,e),null),l},useId:function(){var t=Vt(),e=gt.identifierPrefix;if(tt){var l=Ne,a=Oe;l=(a&~(1<<32-ae(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=au++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=Xm++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:uc,useFormState:Ff,useActionState:Ff,useOptimistic:function(t){var e=Vt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=ic.bind(null,Q,!0,l),l.dispatch=e,[t,e]},useMemoCache:Wi,useCacheRefresh:function(){return Vt().memoizedState=km.bind(null,Q)},useEffectEvent:function(t){var e=Vt(),l={impl:t};return e.memoizedState=l,function(){if((nt&2)!==0)throw Error(h(440));return l.impl.apply(void 0,arguments)}}},cc={readContext:Bt,use:uu,useCallback:so,useContext:Bt,useEffect:ec,useImperativeHandle:co,useInsertionEffect:no,useLayoutEffect:uo,useMemo:fo,useReducer:iu,useRef:eo,useState:function(){return iu(Xe)},useDebugValue:lc,useDeferredValue:function(t,e){var l=_t();return oo(l,ot.memoizedState,t,e)},useTransition:function(){var t=iu(Xe)[0],e=_t().memoizedState;return[typeof t=="boolean"?t:Pa(t),e]},useSyncExternalStore:qf,useId:go,useHostTransitionStatus:uc,useFormState:If,useActionState:If,useOptimistic:function(t,e){var l=_t();return Zf(l,ot,t,e)},useMemoCache:Wi,useCacheRefresh:po};cc.useEffectEvent=ao;var xo={readContext:Bt,use:uu,useCallback:so,useContext:Bt,useEffect:ec,useImperativeHandle:co,useInsertionEffect:no,useLayoutEffect:uo,useMemo:fo,useReducer:Ii,useRef:eo,useState:function(){return Ii(Xe)},useDebugValue:lc,useDeferredValue:function(t,e){var l=_t();return ot===null?ac(l,t,e):oo(l,ot.memoizedState,t,e)},useTransition:function(){var t=Ii(Xe)[0],e=_t().memoizedState;return[typeof t=="boolean"?t:Pa(t),e]},useSyncExternalStore:qf,useId:go,useHostTransitionStatus:uc,useFormState:to,useActionState:to,useOptimistic:function(t,e){var l=_t();return ot!==null?Zf(l,ot,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Wi,useCacheRefresh:po};xo.useEffectEvent=ao;function sc(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:j({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var fc={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=oe(),n=cl(a);n.payload=e,l!=null&&(n.callback=l),e=sl(t,n,a),e!==null&&(Pt(e,t,a),ka(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=oe(),n=cl(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=sl(t,n,a),e!==null&&(Pt(e,t,a),ka(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=oe(),a=cl(l);a.tag=2,e!=null&&(a.callback=e),e=sl(t,a,l),e!==null&&(Pt(e,t,l),ka(e,t,l))}};function To(t,e,l,a,n,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,i):e.prototype&&e.prototype.isPureReactComponent?!Ga(l,a)||!Ga(n,u):!0}function zo(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&fc.enqueueReplaceState(e,e.state,null)}function Gl(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=j({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Eo(t){Gn(t)}function Ao(t){console.error(t)}function Mo(t){Gn(t)}function ou(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function _o(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function oc(t,e,l){return l=cl(l),l.tag=3,l.payload={element:null},l.callback=function(){ou(t,e)},l}function Do(t){return t=cl(t),t.tag=3,t}function Co(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;t.payload=function(){return n(u)},t.callback=function(){_o(e,l,a)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){_o(e,l,a),typeof n!="function"&&(hl===null?hl=new Set([this]):hl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Fm(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ca(e,l,n,!0),l=ie.current,l!==null){switch(l.tag){case 31:case 13:return be===null?Tu():l.alternate===null&&xt===0&&(xt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Fn?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),jc(t,a,n)),!1;case 22:return l.flags|=65536,a===Fn?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),jc(t,a,n)),!1}throw Error(h(435,l.tag))}return jc(t,a,n),Tu(),!1}if(tt)return e=ie.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Ci&&(t=Error(h(422),{cause:a}),Qa(ge(t,l)))):(a!==Ci&&(e=Error(h(423),{cause:a}),Qa(ge(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=ge(a,l),n=oc(t.stateNode,a,n),Yi(t,n),xt!==4&&(xt=2)),!1;var u=Error(h(520),{cause:a});if(u=ge(u,l),on===null?on=[u]:on.push(u),xt!==4&&(xt=2),e===null)return!0;a=ge(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=oc(l.stateNode,a,t),Yi(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(hl===null||!hl.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Do(n),Co(n,t,l,a),Yi(l,n),!1}l=l.return}while(l!==null);return!1}var rc=Error(h(461)),Ot=!1;function qt(t,e,l,a){e.child=t===null?Uf(e,null,l,a):ql(e,t.child,l,a)}function Oo(t,e,l,a,n){l=l.render;var u=e.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return jl(e),a=Vi(t,e,l,i,u,n),c=Ki(),t!==null&&!Ot?(Ji(t,e,n),Qe(t,e,n)):(tt&&c&&_i(e),e.flags|=1,qt(t,e,a,n),e.child)}function No(t,e,l,a,n){if(t===null){var u=l.type;return typeof u=="function"&&!Ei(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,Uo(t,e,u,a,n)):(t=Zn(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!bc(t,n)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:Ga,l(i,a)&&t.ref===e.ref)return Qe(t,e,n)}return e.flags|=1,t=Be(u,a),t.ref=e.ref,t.return=e,e.child=t}function Uo(t,e,l,a,n){if(t!==null){var u=t.memoizedProps;if(Ga(u,a)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=a=u,bc(t,n))(t.flags&131072)!==0&&(Ot=!0);else return e.lanes=t.lanes,Qe(t,e,n)}return dc(t,e,l,a,n)}function $o(t,e,l,a){var n=a.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,e.child=null;return Ro(t,e,u,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&kn(e,u!==null?u.cachePool:null),u!==null?jf(e,u):Li(),Hf(e);else return a=e.lanes=536870912,Ro(t,e,u!==null?u.baseLanes|l:l,l,a)}else u!==null?(kn(e,u.cachePool),jf(e,u),ol(),e.memoizedState=null):(t!==null&&kn(e,null),Li(),ol());return qt(t,e,n,l),e.child}function ln(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ro(t,e,l,a,n){var u=Hi();return u=u===null?null:{parent:Dt._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&kn(e,null),Li(),Hf(e),t!==null&&ca(t,e,a,!0),e.childLanes=n,null}function ru(t,e){return e=mu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function jo(t,e,l){return ql(e,t.child,null,l),t=ru(e,e.pendingProps),t.flags|=2,ce(e),e.memoizedState=null,t}function Im(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(tt){if(a.mode==="hidden")return t=ru(e,a),e.lanes=536870912,ln(null,t);if(Qi(e),(t=yt)?(t=Kr(t,ve),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ll!==null?{id:Oe,overflow:Ne}:null,retryLane:536870912,hydrationErrors:null},l=yf(t),l.return=e,e.child=l,wt=e,yt=null)):t=null,t===null)throw nl(e);return e.lanes=536870912,null}return ru(e,a)}var u=t.memoizedState;if(u!==null){var i=u.dehydrated;if(Qi(e),n)if(e.flags&256)e.flags&=-257,e=jo(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(h(558));else if(Ot||ca(t,e,l,!1),n=(l&t.childLanes)!==0,Ot||n){if(a=gt,a!==null&&(i=zs(a,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,Nl(t,i),Pt(a,t,i),rc;Tu(),e=jo(t,e,l)}else t=u.treeContext,yt=Se(i.nextSibling),wt=e,tt=!0,al=null,ve=!1,t!==null&&Sf(e,t),e=ru(e,a),e.flags|=4096;return e}return t=Be(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function du(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(h(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function dc(t,e,l,a,n){return jl(e),l=Vi(t,e,l,a,void 0,n),a=Ki(),t!==null&&!Ot?(Ji(t,e,n),Qe(t,e,n)):(tt&&a&&_i(e),e.flags|=1,qt(t,e,l,n),e.child)}function Ho(t,e,l,a,n,u){return jl(e),e.updateQueue=null,l=Bf(e,a,l,n),wf(t),a=Ki(),t!==null&&!Ot?(Ji(t,e,u),Qe(t,e,u)):(tt&&a&&_i(e),e.flags|=1,qt(t,e,l,u),e.child)}function wo(t,e,l,a,n){if(jl(e),e.stateNode===null){var u=aa,i=l.contextType;typeof i=="object"&&i!==null&&(u=Bt(i)),u=new l(a,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=fc,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=a,u.state=e.memoizedState,u.refs={},Bi(e),i=l.contextType,u.context=typeof i=="object"&&i!==null?Bt(i):aa,u.state=e.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(sc(e,l,i,a),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&fc.enqueueReplaceState(u,u.state,null),Fa(e,a,u,n),Wa(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){u=e.stateNode;var c=e.memoizedProps,s=Gl(l,c);u.props=s;var m=u.context,y=l.contextType;i=aa,typeof y=="object"&&y!==null&&(i=Bt(y));var x=l.getDerivedStateFromProps;y=typeof x=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,y||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||m!==i)&&zo(e,u,a,i),il=!1;var g=e.memoizedState;u.state=g,Fa(e,a,u,n),Wa(),m=e.memoizedState,c||g!==m||il?(typeof x=="function"&&(sc(e,l,x,a),m=e.memoizedState),(s=il||To(e,l,s,a,g,m,i))?(y||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=m),u.props=a,u.state=m,u.context=i,a=s):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{u=e.stateNode,qi(t,e),i=e.memoizedProps,y=Gl(l,i),u.props=y,x=e.pendingProps,g=u.context,m=l.contextType,s=aa,typeof m=="object"&&m!==null&&(s=Bt(m)),c=l.getDerivedStateFromProps,(m=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==x||g!==s)&&zo(e,u,a,s),il=!1,g=e.memoizedState,u.state=g,Fa(e,a,u,n),Wa();var p=e.memoizedState;i!==x||g!==p||il||t!==null&&t.dependencies!==null&&Kn(t.dependencies)?(typeof c=="function"&&(sc(e,l,c,a),p=e.memoizedState),(y=il||To(e,l,y,a,g,p,s)||t!==null&&t.dependencies!==null&&Kn(t.dependencies))?(m||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,p,s),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,p,s)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=p),u.props=a,u.state=p,u.context=s,a=y):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),a=!1)}return u=a,du(t,e),a=(e.flags&128)!==0,u||a?(u=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&a?(e.child=ql(e,t.child,null,n),e.child=ql(e,null,l,n)):qt(t,e,l,n),e.memoizedState=u.state,t=e.child):t=Qe(t,e,n),t}function Bo(t,e,l,a){return $l(),e.flags|=256,qt(t,e,l,a),e.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(t){return{baseLanes:t,cachePool:Mf()}}function gc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=fe),t}function qo(t,e,l){var a=e.pendingProps,n=!1,u=(e.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(Mt.current&2)!==0),i&&(n=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(tt){if(n?fl(e):ol(),(t=yt)?(t=Kr(t,ve),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ll!==null?{id:Oe,overflow:Ne}:null,retryLane:536870912,hydrationErrors:null},l=yf(t),l.return=e,e.child=l,wt=e,yt=null)):t=null,t===null)throw nl(e);return Fc(t)?e.lanes=32:e.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(ol(),n=e.mode,c=mu({mode:"hidden",children:c},n),a=Ul(a,n,l,null),c.return=e,a.return=e,c.sibling=a,e.child=c,a=e.child,a.memoizedState=hc(l),a.childLanes=gc(t,i,l),e.memoizedState=mc,ln(null,a)):(fl(e),pc(e,c))}var s=t.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(u)e.flags&256?(fl(e),e.flags&=-257,e=yc(t,e,l)):e.memoizedState!==null?(ol(),e.child=t.child,e.flags|=128,e=null):(ol(),c=a.fallback,n=e.mode,a=mu({mode:"visible",children:a.children},n),c=Ul(c,n,l,null),c.flags|=2,a.return=e,c.return=e,a.sibling=c,e.child=a,ql(e,t.child,null,l),a=e.child,a.memoizedState=hc(l),a.childLanes=gc(t,i,l),e.memoizedState=mc,e=ln(null,a));else if(fl(e),Fc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var m=i.dgst;i=m,a=Error(h(419)),a.stack="",a.digest=i,Qa({value:a,source:null,stack:null}),e=yc(t,e,l)}else if(Ot||ca(t,e,l,!1),i=(l&t.childLanes)!==0,Ot||i){if(i=gt,i!==null&&(a=zs(i,l),a!==0&&a!==s.retryLane))throw s.retryLane=a,Nl(t,a),Pt(i,t,a),rc;Wc(c)||Tu(),e=yc(t,e,l)}else Wc(c)?(e.flags|=192,e.child=t.child,e=null):(t=s.treeContext,yt=Se(c.nextSibling),wt=e,tt=!0,al=null,ve=!1,t!==null&&Sf(e,t),e=pc(e,a.children),e.flags|=4096);return e}return n?(ol(),c=a.fallback,n=e.mode,s=t.child,m=s.sibling,a=Be(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,m!==null?c=Be(m,c):(c=Ul(c,n,l,null),c.flags|=2),c.return=e,a.return=e,a.sibling=c,e.child=a,ln(null,a),a=e.child,c=t.child.memoizedState,c===null?c=hc(l):(n=c.cachePool,n!==null?(s=Dt._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Mf(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=gc(t,i,l),e.memoizedState=mc,ln(t.child,a)):(fl(e),l=t.child,t=l.sibling,l=Be(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=l,e.memoizedState=null,l)}function pc(t,e){return e=mu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function mu(t,e){return t=ue(22,t,null,e),t.lanes=0,t}function yc(t,e,l){return ql(e,t.child,null,l),t=pc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yo(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Ui(t.return,e,l)}function vc(t,e,l,a,n,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n,i.treeForkCount=u)}function Go(t,e,l){var a=e.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var i=Mt.current,c=(i&2)!==0;if(c?(i=i&1|2,e.flags|=128):i&=1,M(Mt,i),qt(t,e,a,l),a=tt?Xa:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yo(t,l,e);else if(t.tag===19)Yo(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&eu(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),vc(e,!1,n,l,u,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&eu(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}vc(e,!0,l,null,u,a);break;case"together":vc(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Qe(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),ml|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(ca(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(h(153));if(e.child!==null){for(t=e.child,l=Be(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Be(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function bc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Kn(t)))}function Pm(t,e,l){switch(e.tag){case 3:Zt(e,e.stateNode.containerInfo),ul(e,Dt,t.memoizedState.cache),$l();break;case 27:case 5:Da(e);break;case 4:Zt(e,e.stateNode.containerInfo);break;case 10:ul(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Qi(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(fl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?qo(t,e,l):(fl(e),t=Qe(t,e,l),t!==null?t.sibling:null);fl(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(ca(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return Go(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),M(Mt,Mt.current),a)break;return null;case 22:return e.lanes=0,$o(t,e,l,e.pendingProps);case 24:ul(e,Dt,t.memoizedState.cache)}return Qe(t,e,l)}function Lo(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ot=!0;else{if(!bc(t,l)&&(e.flags&128)===0)return Ot=!1,Pm(t,e,l);Ot=(t.flags&131072)!==0}else Ot=!1,tt&&(e.flags&1048576)!==0&&bf(e,Xa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=wl(e.elementType),e.type=t,typeof t=="function")Ei(t)?(a=Gl(t,a),e.tag=1,e=wo(null,e,t,a,l)):(e.tag=0,e=dc(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===jt){e.tag=11,e=Oo(null,e,t,a,l);break t}else if(n===B){e.tag=14,e=No(null,e,t,a,l);break t}}throw e=Re(t)||t,Error(h(306,e,""))}}return e;case 0:return dc(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=Gl(a,e.pendingProps),wo(t,e,a,n,l);case 3:t:{if(Zt(e,e.stateNode.containerInfo),t===null)throw Error(h(387));a=e.pendingProps;var u=e.memoizedState;n=u.element,qi(t,e),Fa(e,a,null,l);var i=e.memoizedState;if(a=i.cache,ul(e,Dt,a),a!==u.cache&&$i(e,[Dt],l,!0),Wa(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Bo(t,e,a,l);break t}else if(a!==n){n=ge(Error(h(424)),e),Qa(n),e=Bo(t,e,a,l);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,yt=Se(t.firstChild),wt=e,tt=!0,al=null,ve=!0,l=Uf(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if($l(),a===n){e=Qe(t,e,l);break t}qt(t,e,a,l)}e=e.child}return e;case 26:return du(t,e),t===null?(l=Pr(e.type,null,e.pendingProps,null))?e.memoizedState=l:tt||(l=e.type,t=e.pendingProps,a=Cu(J.current).createElement(l),a[Ht]=e,a[Kt]=t,Yt(a,l,t),$t(a),e.stateNode=a):e.memoizedState=Pr(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Da(e),t===null&&tt&&(a=e.stateNode=Wr(e.type,e.pendingProps,J.current),wt=e,ve=!0,n=yt,vl(e.type)?(Ic=n,yt=Se(a.firstChild)):yt=n),qt(t,e,e.pendingProps.children,l),du(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&tt&&((n=a=yt)&&(a=Ch(a,e.type,e.pendingProps,ve),a!==null?(e.stateNode=a,wt=e,yt=Se(a.firstChild),ve=!1,n=!0):n=!1),n||nl(e)),Da(e),n=e.type,u=e.pendingProps,i=t!==null?t.memoizedProps:null,a=u.children,Kc(n,u)?a=null:i!==null&&Kc(n,i)&&(e.flags|=32),e.memoizedState!==null&&(n=Vi(t,e,Qm,null,null,l),vn._currentValue=n),du(t,e),qt(t,e,a,l),e.child;case 6:return t===null&&tt&&((t=l=yt)&&(l=Oh(l,e.pendingProps,ve),l!==null?(e.stateNode=l,wt=e,yt=null,t=!0):t=!1),t||nl(e)),null;case 13:return qo(t,e,l);case 4:return Zt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ql(e,null,a,l):qt(t,e,a,l),e.child;case 11:return Oo(t,e,e.type,e.pendingProps,l);case 7:return qt(t,e,e.pendingProps,l),e.child;case 8:return qt(t,e,e.pendingProps.children,l),e.child;case 12:return qt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,ul(e,e.type,a.value),qt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,jl(e),n=Bt(n),a=a(n),e.flags|=1,qt(t,e,a,l),e.child;case 14:return No(t,e,e.type,e.pendingProps,l);case 15:return Uo(t,e,e.type,e.pendingProps,l);case 19:return Go(t,e,l);case 31:return Im(t,e,l);case 22:return $o(t,e,l,e.pendingProps);case 24:return jl(e),a=Bt(Dt),t===null?(n=Hi(),n===null&&(n=gt,u=Ri(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),e.memoizedState={parent:a,cache:n},Bi(e),ul(e,Dt,n)):((t.lanes&l)!==0&&(qi(t,e),Fa(e,null,null,l),Wa()),n=t.memoizedState,u=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),ul(e,Dt,a)):(a=u.cache,ul(e,Dt,a),a!==n.cache&&$i(e,[Dt],l,!0))),qt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(h(156,e.tag))}function Ze(t){t.flags|=4}function Sc(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(gr())t.flags|=8192;else throw Bl=Fn,wi}else t.flags&=-16777217}function Xo(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!nd(e))if(gr())t.flags|=8192;else throw Bl=Fn,wi}function hu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ss():536870912,t.lanes|=e,ba|=e)}function an(t,e){if(!tt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function th(t,e,l){var a=e.pendingProps;switch(Di(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return vt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ge(Dt),At(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ia(e)?Ze(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Oi())),vt(e),null;case 26:var n=e.type,u=e.memoizedState;return t===null?(Ze(e),u!==null?(vt(e),Xo(e,u)):(vt(e),Sc(e,n,null,a,l))):u?u!==t.memoizedState?(Ze(e),vt(e),Xo(e,u)):(vt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Ze(e),vt(e),Sc(e,n,t,a,l)),null;case 27:if(An(e),l=J.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ze(e);else{if(!a){if(e.stateNode===null)throw Error(h(166));return vt(e),null}t=D.current,ia(e)?xf(e):(t=Wr(n,a,l),e.stateNode=t,Ze(e))}return vt(e),null;case 5:if(An(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ze(e);else{if(!a){if(e.stateNode===null)throw Error(h(166));return vt(e),null}if(u=D.current,ia(e))xf(e);else{var i=Cu(J.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}u[Ht]=e,u[Kt]=a;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=u;t:switch(Yt(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Ze(e)}}return vt(e),Sc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Ze(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(h(166));if(t=J.current,ia(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=wt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[Ht]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||qr(t.nodeValue,l)),t||nl(e,!0)}else t=Cu(t).createTextNode(a),t[Ht]=e,e.stateNode=t}return vt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=ia(e),l!==null){if(t===null){if(!a)throw Error(h(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(557));t[Ht]=e}else $l(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;vt(e),t=!1}else l=Oi(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(ce(e),e):(ce(e),null);if((e.flags&128)!==0)throw Error(h(558))}return vt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ia(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(h(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));n[Ht]=e}else $l(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;vt(e),n=!1}else n=Oi(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ce(e),e):(ce(e),null)}return ce(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),hu(e,e.updateQueue),vt(e),null);case 4:return At(),t===null&&Lc(e.stateNode.containerInfo),vt(e),null;case 10:return Ge(e.type),vt(e),null;case 19:if(T(Mt),a=e.memoizedState,a===null)return vt(e),null;if(n=(e.flags&128)!==0,u=a.rendering,u===null)if(n)an(a,!1);else{if(xt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=eu(t),u!==null){for(e.flags|=128,an(a,!1),t=u.updateQueue,e.updateQueue=t,hu(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)pf(l,t),l=l.sibling;return M(Mt,Mt.current&1|2),tt&&qe(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&ee()>bu&&(e.flags|=128,n=!0,an(a,!1),e.lanes=4194304)}else{if(!n)if(t=eu(u),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,hu(e,t),an(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!tt)return vt(e),null}else 2*ee()-a.renderingStartTime>bu&&l!==536870912&&(e.flags|=128,n=!0,an(a,!1),e.lanes=4194304);a.isBackwards?(u.sibling=e.child,e.child=u):(t=a.last,t!==null?t.sibling=u:e.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ee(),t.sibling=null,l=Mt.current,M(Mt,n?l&1|2:l&1),tt&&qe(e,a.treeForkCount),t):(vt(e),null);case 22:case 23:return ce(e),Xi(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),l=e.updateQueue,l!==null&&hu(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&T(Hl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ge(Dt),vt(e),null;case 25:return null;case 30:return null}throw Error(h(156,e.tag))}function eh(t,e){switch(Di(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ge(Dt),At(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return An(e),null;case 31:if(e.memoizedState!==null){if(ce(e),e.alternate===null)throw Error(h(340));$l()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ce(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(h(340));$l()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return T(Mt),null;case 4:return At(),null;case 10:return Ge(e.type),null;case 22:case 23:return ce(e),Xi(),t!==null&&T(Hl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ge(Dt),null;case 25:return null;default:return null}}function Qo(t,e){switch(Di(e),e.tag){case 3:Ge(Dt),At();break;case 26:case 27:case 5:An(e);break;case 4:At();break;case 31:e.memoizedState!==null&&ce(e);break;case 13:ce(e);break;case 19:T(Mt);break;case 10:Ge(e.type);break;case 22:case 23:ce(e),Xi(),t!==null&&T(Hl);break;case 24:Ge(Dt)}}function nn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var u=l.create,i=l.inst;a=u(),i.destroy=a}l=l.next}while(l!==n)}}catch(c){st(e,e.return,c)}}function rl(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&t)===t){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=e;var s=l,m=c;try{m()}catch(y){st(n,s,y)}}}a=a.next}while(a!==u)}}catch(y){st(e,e.return,y)}}function Zo(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Rf(e,l)}catch(a){st(t,t.return,a)}}}function Vo(t,e,l){l.props=Gl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){st(t,e,a)}}function un(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){st(t,e,n)}}function Ue(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){st(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){st(t,e,n)}else l.current=null}function Ko(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){st(t,t.return,n)}}function xc(t,e,l){try{var a=t.stateNode;zh(a,t.type,l,e),a[Kt]=e}catch(n){st(t,t.return,n)}}function Jo(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&vl(t.type)||t.tag===4}function Tc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Jo(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&vl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=He));else if(a!==4&&(a===27&&vl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(zc(t,e,l),t=t.sibling;t!==null;)zc(t,e,l),t=t.sibling}function gu(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&vl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(gu(t,e,l),t=t.sibling;t!==null;)gu(t,e,l),t=t.sibling}function ko(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Yt(e,a,l),e[Ht]=t,e[Kt]=l}catch(u){st(t,t.return,u)}}var Ve=!1,Nt=!1,Ec=!1,Wo=typeof WeakSet=="function"?WeakSet:Set,Rt=null;function lh(t,e){if(t=t.containerInfo,Zc=Hu,t=cf(t),yi(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var i=0,c=-1,s=-1,m=0,y=0,x=t,g=null;e:for(;;){for(var p;x!==l||n!==0&&x.nodeType!==3||(c=i+n),x!==u||a!==0&&x.nodeType!==3||(s=i+a),x.nodeType===3&&(i+=x.nodeValue.length),(p=x.firstChild)!==null;)g=x,x=p;for(;;){if(x===t)break e;if(g===l&&++m===n&&(c=i),g===u&&++y===a&&(s=i),(p=x.nextSibling)!==null)break;x=g,g=x.parentNode}x=p}l=c===-1||s===-1?null:{start:c,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(Vc={focusedElem:t,selectionRange:l},Hu=!1,Rt=e;Rt!==null;)if(e=Rt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Rt=t;else for(;Rt!==null;){switch(e=Rt,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,l=e,n=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var _=Gl(l.type,n);t=a.getSnapshotBeforeUpdate(_,u),a.__reactInternalSnapshotBeforeUpdate=t}catch(w){st(l,l.return,w)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)kc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":kc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(h(163))}if(t=e.sibling,t!==null){t.return=e.return,Rt=t;break}Rt=e.return}}function Fo(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Je(t,l),a&4&&nn(5,l);break;case 1:if(Je(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(i){st(l,l.return,i)}else{var n=Gl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){st(l,l.return,i)}}a&64&&Zo(l),a&512&&un(l,l.return);break;case 3:if(Je(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Rf(t,e)}catch(i){st(l,l.return,i)}}break;case 27:e===null&&a&4&&ko(l);case 26:case 5:Je(t,l),e===null&&a&4&&Ko(l),a&512&&un(l,l.return);break;case 12:Je(t,l);break;case 31:Je(t,l),a&4&&tr(t,l);break;case 13:Je(t,l),a&4&&er(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=rh.bind(null,l),Nh(t,l))));break;case 22:if(a=l.memoizedState!==null||Ve,!a){e=e!==null&&e.memoizedState!==null||Nt,n=Ve;var u=Nt;Ve=a,(Nt=e)&&!u?ke(t,l,(l.subtreeFlags&8772)!==0):Je(t,l),Ve=n,Nt=u}break;case 30:break;default:Je(t,l)}}function Io(t){var e=t.alternate;e!==null&&(t.alternate=null,Io(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ti(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var bt=null,kt=!1;function Ke(t,e,l){for(l=l.child;l!==null;)Po(t,e,l),l=l.sibling}function Po(t,e,l){if(le&&typeof le.onCommitFiberUnmount=="function")try{le.onCommitFiberUnmount(Ca,l)}catch{}switch(l.tag){case 26:Nt||Ue(l,e),Ke(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Nt||Ue(l,e);var a=bt,n=kt;vl(l.type)&&(bt=l.stateNode,kt=!1),Ke(t,e,l),gn(l.stateNode),bt=a,kt=n;break;case 5:Nt||Ue(l,e);case 6:if(a=bt,n=kt,bt=null,Ke(t,e,l),bt=a,kt=n,bt!==null)if(kt)try{(bt.nodeType===9?bt.body:bt.nodeName==="HTML"?bt.ownerDocument.body:bt).removeChild(l.stateNode)}catch(u){st(l,e,u)}else try{bt.removeChild(l.stateNode)}catch(u){st(l,e,u)}break;case 18:bt!==null&&(kt?(t=bt,Zr(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),_a(t)):Zr(bt,l.stateNode));break;case 4:a=bt,n=kt,bt=l.stateNode.containerInfo,kt=!0,Ke(t,e,l),bt=a,kt=n;break;case 0:case 11:case 14:case 15:rl(2,l,e),Nt||rl(4,l,e),Ke(t,e,l);break;case 1:Nt||(Ue(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Vo(l,e,a)),Ke(t,e,l);break;case 21:Ke(t,e,l);break;case 22:Nt=(a=Nt)||l.memoizedState!==null,Ke(t,e,l),Nt=a;break;default:Ke(t,e,l)}}function tr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{_a(t)}catch(l){st(e,e.return,l)}}}function er(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_a(t)}catch(l){st(e,e.return,l)}}function ah(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Wo),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Wo),e;default:throw Error(h(435,t.tag))}}function pu(t,e){var l=ah(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=dh.bind(null,t,a);a.then(n,n)}})}function Wt(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],u=t,i=e,c=i;t:for(;c!==null;){switch(c.tag){case 27:if(vl(c.type)){bt=c.stateNode,kt=!1;break t}break;case 5:bt=c.stateNode,kt=!1;break t;case 3:case 4:bt=c.stateNode.containerInfo,kt=!0;break t}c=c.return}if(bt===null)throw Error(h(160));Po(u,i,n),bt=null,kt=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)lr(e,t),e=e.sibling}var Ee=null;function lr(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wt(e,t),Ft(t),a&4&&(rl(3,t,t.return),nn(3,t),rl(5,t,t.return));break;case 1:Wt(e,t),Ft(t),a&512&&(Nt||l===null||Ue(l,l.return)),a&64&&Ve&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Ee;if(Wt(e,t),Ft(t),a&512&&(Nt||l===null||Ue(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Ua]||u[Ht]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),Yt(u,a,l),u[Ht]=t,$t(u),a=u;break t;case"link":var i=ld("link","href",n).get(a+(l.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(c,1);break e}}u=n.createElement(a),Yt(u,a,l),n.head.appendChild(u);break;case"meta":if(i=ld("meta","content",n).get(a+(l.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(c,1);break e}}u=n.createElement(a),Yt(u,a,l),n.head.appendChild(u);break;default:throw Error(h(468,a))}u[Ht]=t,$t(u),a=u}t.stateNode=a}else ad(n,t.type,t.stateNode);else t.stateNode=ed(n,a,t.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?ad(n,t.type,t.stateNode):ed(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&xc(t,t.memoizedProps,l.memoizedProps)}break;case 27:Wt(e,t),Ft(t),a&512&&(Nt||l===null||Ue(l,l.return)),l!==null&&a&4&&xc(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Wt(e,t),Ft(t),a&512&&(Nt||l===null||Ue(l,l.return)),t.flags&32){n=t.stateNode;try{Wl(n,"")}catch(_){st(t,t.return,_)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,xc(t,n,l!==null?l.memoizedProps:n)),a&1024&&(Ec=!0);break;case 6:if(Wt(e,t),Ft(t),a&4){if(t.stateNode===null)throw Error(h(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(_){st(t,t.return,_)}}break;case 3:if(Uu=null,n=Ee,Ee=Ou(e.containerInfo),Wt(e,t),Ee=n,Ft(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{_a(e.containerInfo)}catch(_){st(t,t.return,_)}Ec&&(Ec=!1,ar(t));break;case 4:a=Ee,Ee=Ou(t.stateNode.containerInfo),Wt(e,t),Ft(t),Ee=a;break;case 12:Wt(e,t),Ft(t);break;case 31:Wt(e,t),Ft(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,pu(t,a)));break;case 13:Wt(e,t),Ft(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(vu=ee()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,pu(t,a)));break;case 22:n=t.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,m=Ve,y=Nt;if(Ve=m||n,Nt=y||s,Wt(e,t),Nt=y,Ve=m,Ft(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||s||Ve||Nt||Ll(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){s=l=e;try{if(u=s.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=s.stateNode;var x=s.memoizedProps.style,g=x!=null&&x.hasOwnProperty("display")?x.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(_){st(s,s.return,_)}}}else if(e.tag===6){if(l===null){s=e;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(_){st(s,s.return,_)}}}else if(e.tag===18){if(l===null){s=e;try{var p=s.stateNode;n?Vr(p,!0):Vr(s.stateNode,!1)}catch(_){st(s,s.return,_)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,pu(t,l))));break;case 19:Wt(e,t),Ft(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,pu(t,a)));break;case 30:break;case 21:break;default:Wt(e,t),Ft(t)}}function Ft(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Jo(a)){l=a;break}a=a.return}if(l==null)throw Error(h(160));switch(l.tag){case 27:var n=l.stateNode,u=Tc(t);gu(t,u,n);break;case 5:var i=l.stateNode;l.flags&32&&(Wl(i,""),l.flags&=-33);var c=Tc(t);gu(t,c,i);break;case 3:case 4:var s=l.stateNode.containerInfo,m=Tc(t);zc(t,m,s);break;default:throw Error(h(161))}}catch(y){st(t,t.return,y)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ar(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;ar(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Je(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Fo(t,e.alternate,e),e=e.sibling}function Ll(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:rl(4,e,e.return),Ll(e);break;case 1:Ue(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Vo(e,e.return,l),Ll(e);break;case 27:gn(e.stateNode);case 26:case 5:Ue(e,e.return),Ll(e);break;case 22:e.memoizedState===null&&Ll(e);break;case 30:Ll(e);break;default:Ll(e)}t=t.sibling}}function ke(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,u=e,i=u.flags;switch(u.tag){case 0:case 11:case 15:ke(n,u,l),nn(4,u);break;case 1:if(ke(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){st(a,a.return,m)}if(a=u,n=a.updateQueue,n!==null){var c=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)$f(s[n],c)}catch(m){st(a,a.return,m)}}l&&i&64&&Zo(u),un(u,u.return);break;case 27:ko(u);case 26:case 5:ke(n,u,l),l&&a===null&&i&4&&Ko(u),un(u,u.return);break;case 12:ke(n,u,l);break;case 31:ke(n,u,l),l&&i&4&&tr(n,u);break;case 13:ke(n,u,l),l&&i&4&&er(n,u);break;case 22:u.memoizedState===null&&ke(n,u,l),un(u,u.return);break;case 30:break;default:ke(n,u,l)}e=e.sibling}}function Ac(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Za(l))}function Mc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Za(t))}function Ae(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nr(t,e,l,a),e=e.sibling}function nr(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Ae(t,e,l,a),n&2048&&nn(9,e);break;case 1:Ae(t,e,l,a);break;case 3:Ae(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Za(t)));break;case 12:if(n&2048){Ae(t,e,l,a),t=e.stateNode;try{var u=e.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){st(e,e.return,s)}}else Ae(t,e,l,a);break;case 31:Ae(t,e,l,a);break;case 13:Ae(t,e,l,a);break;case 23:break;case 22:u=e.stateNode,i=e.alternate,e.memoizedState!==null?u._visibility&2?Ae(t,e,l,a):cn(t,e):u._visibility&2?Ae(t,e,l,a):(u._visibility|=2,pa(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Ac(i,e);break;case 24:Ae(t,e,l,a),n&2048&&Mc(e.alternate,e);break;default:Ae(t,e,l,a)}}function pa(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,i=e,c=l,s=a,m=i.flags;switch(i.tag){case 0:case 11:case 15:pa(u,i,c,s,n),nn(8,i);break;case 23:break;case 22:var y=i.stateNode;i.memoizedState!==null?y._visibility&2?pa(u,i,c,s,n):cn(u,i):(y._visibility|=2,pa(u,i,c,s,n)),n&&m&2048&&Ac(i.alternate,i);break;case 24:pa(u,i,c,s,n),n&&m&2048&&Mc(i.alternate,i);break;default:pa(u,i,c,s,n)}e=e.sibling}}function cn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:cn(l,a),n&2048&&Ac(a.alternate,a);break;case 24:cn(l,a),n&2048&&Mc(a.alternate,a);break;default:cn(l,a)}e=e.sibling}}var sn=8192;function ya(t,e,l){if(t.subtreeFlags&sn)for(t=t.child;t!==null;)ur(t,e,l),t=t.sibling}function ur(t,e,l){switch(t.tag){case 26:ya(t,e,l),t.flags&sn&&t.memoizedState!==null&&Xh(l,Ee,t.memoizedState,t.memoizedProps);break;case 5:ya(t,e,l);break;case 3:case 4:var a=Ee;Ee=Ou(t.stateNode.containerInfo),ya(t,e,l),Ee=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=sn,sn=16777216,ya(t,e,l),sn=a):ya(t,e,l));break;default:ya(t,e,l)}}function ir(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function fn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Rt=a,sr(a,t)}ir(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cr(t),t=t.sibling}function cr(t){switch(t.tag){case 0:case 11:case 15:fn(t),t.flags&2048&&rl(9,t,t.return);break;case 3:fn(t);break;case 12:fn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,yu(t)):fn(t);break;default:fn(t)}}function yu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Rt=a,sr(a,t)}ir(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:rl(8,e,e.return),yu(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,yu(e));break;default:yu(e)}t=t.sibling}}function sr(t,e){for(;Rt!==null;){var l=Rt;switch(l.tag){case 0:case 11:case 15:rl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Za(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Rt=a;else t:for(l=t;Rt!==null;){a=Rt;var n=a.sibling,u=a.return;if(Io(a),a===l){Rt=null;break t}if(n!==null){n.return=u,Rt=n;break t}Rt=u}}}var nh={getCacheForType:function(t){var e=Bt(Dt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Bt(Dt).controller.signal}},uh=typeof WeakMap=="function"?WeakMap:Map,nt=0,gt=null,k=null,F=0,ct=0,se=null,dl=!1,va=!1,_c=!1,We=0,xt=0,ml=0,Xl=0,Dc=0,fe=0,ba=0,on=null,It=null,Cc=!1,vu=0,fr=0,bu=1/0,Su=null,hl=null,Ut=0,gl=null,Sa=null,Fe=0,Oc=0,Nc=null,or=null,rn=0,Uc=null;function oe(){return(nt&2)!==0&&F!==0?F&-F:v.T!==null?Bc():Es()}function rr(){if(fe===0)if((F&536870912)===0||tt){var t=Dn;Dn<<=1,(Dn&3932160)===0&&(Dn=262144),fe=t}else fe=536870912;return t=ie.current,t!==null&&(t.flags|=32),fe}function Pt(t,e,l){(t===gt&&(ct===2||ct===9)||t.cancelPendingCommit!==null)&&(xa(t,0),pl(t,F,fe,!1)),Na(t,l),((nt&2)===0||t!==gt)&&(t===gt&&((nt&2)===0&&(Xl|=l),xt===4&&pl(t,F,fe,!1)),$e(t))}function dr(t,e,l){if((nt&6)!==0)throw Error(h(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Oa(t,e),n=a?sh(t,e):Rc(t,e,!0),u=a;do{if(n===0){va&&!a&&pl(t,e,0,!1);break}else{if(l=t.current.alternate,u&&!ih(l)){n=Rc(t,e,!1),u=!1;continue}if(n===2){if(u=e,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var c=t;n=on;var s=c.current.memoizedState.isDehydrated;if(s&&(xa(c,i).flags|=256),i=Rc(c,i,!1),i!==2){if(_c&&!s){c.errorRecoveryDisabledLanes|=u,Xl|=u,n=4;break t}u=It,It=n,u!==null&&(It===null?It=u:It.push.apply(It,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){xa(t,0),pl(t,e,0,!0);break}t:{switch(a=t,u=n,u){case 0:case 1:throw Error(h(345));case 4:if((e&4194048)!==e)break;case 6:pl(a,e,fe,!dl);break t;case 2:It=null;break;case 3:case 5:break;default:throw Error(h(329))}if((e&62914560)===e&&(n=vu+300-ee(),10<n)){if(pl(a,e,fe,!dl),On(a,0,!0)!==0)break t;Fe=e,a.timeoutHandle=Xr(mr.bind(null,a,l,It,Su,Cc,e,fe,Xl,ba,dl,u,"Throttled",-0,0),n);break t}mr(a,l,It,Su,Cc,e,fe,Xl,ba,dl,u,null,-0,0)}}break}while(!0);$e(t)}function mr(t,e,l,a,n,u,i,c,s,m,y,x,g,p){if(t.timeoutHandle=-1,x=e.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:He},ur(e,u,x);var _=(u&62914560)===u?vu-ee():(u&4194048)===u?fr-ee():0;if(_=Qh(x,_),_!==null){Fe=u,t.cancelPendingCommit=_(xr.bind(null,t,e,u,l,a,n,i,c,s,y,x,null,g,p)),pl(t,u,i,!m);return}}xr(t,e,u,l,a,n,i,c,s)}function ih(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],u=n.getSnapshot;n=n.value;try{if(!ne(u(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pl(t,e,l,a){e&=~Dc,e&=~Xl,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var u=31-ae(n),i=1<<u;a[u]=-1,n&=~i}l!==0&&xs(t,l,e)}function xu(){return(nt&6)===0?(dn(0),!1):!0}function $c(){if(k!==null){if(ct===0)var t=k.return;else t=k,Ye=Rl=null,ki(t),ra=null,Ka=0,t=k;for(;t!==null;)Qo(t.alternate,t),t=t.return;k=null}}function xa(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Mh(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Fe=0,$c(),gt=t,k=l=Be(t.current,null),F=e,ct=0,se=null,dl=!1,va=Oa(t,e),_c=!1,ba=fe=Dc=Xl=ml=xt=0,It=on=null,Cc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-ae(a),u=1<<n;e|=t[n],a&=~u}return We=e,Ln(),l}function hr(t,e){Q=null,v.H=en,e===oa||e===Wn?(e=Cf(),ct=3):e===wi?(e=Cf(),ct=4):ct=e===rc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,se=e,k===null&&(xt=1,ou(t,ge(e,t.current)))}function gr(){var t=ie.current;return t===null?!0:(F&4194048)===F?be===null:(F&62914560)===F||(F&536870912)!==0?t===be:!1}function pr(){var t=v.H;return v.H=en,t===null?en:t}function yr(){var t=v.A;return v.A=nh,t}function Tu(){xt=4,dl||(F&4194048)!==F&&ie.current!==null||(va=!0),(ml&134217727)===0&&(Xl&134217727)===0||gt===null||pl(gt,F,fe,!1)}function Rc(t,e,l){var a=nt;nt|=2;var n=pr(),u=yr();(gt!==t||F!==e)&&(Su=null,xa(t,e)),e=!1;var i=xt;t:do try{if(ct!==0&&k!==null){var c=k,s=se;switch(ct){case 8:$c(),i=6;break t;case 3:case 2:case 9:case 6:ie.current===null&&(e=!0);var m=ct;if(ct=0,se=null,Ta(t,c,s,m),l&&va){i=0;break t}break;default:m=ct,ct=0,se=null,Ta(t,c,s,m)}}ch(),i=xt;break}catch(y){hr(t,y)}while(!0);return e&&t.shellSuspendCounter++,Ye=Rl=null,nt=a,v.H=n,v.A=u,k===null&&(gt=null,F=0,Ln()),i}function ch(){for(;k!==null;)vr(k)}function sh(t,e){var l=nt;nt|=2;var a=pr(),n=yr();gt!==t||F!==e?(Su=null,bu=ee()+500,xa(t,e)):va=Oa(t,e);t:do try{if(ct!==0&&k!==null){e=k;var u=se;e:switch(ct){case 1:ct=0,se=null,Ta(t,e,u,1);break;case 2:case 9:if(_f(u)){ct=0,se=null,br(e);break}e=function(){ct!==2&&ct!==9||gt!==t||(ct=7),$e(t)},u.then(e,e);break t;case 3:ct=7;break t;case 4:ct=5;break t;case 7:_f(u)?(ct=0,se=null,br(e)):(ct=0,se=null,Ta(t,e,u,7));break;case 5:var i=null;switch(k.tag){case 26:i=k.memoizedState;case 5:case 27:var c=k;if(i?nd(i):c.stateNode.complete){ct=0,se=null;var s=c.sibling;if(s!==null)k=s;else{var m=c.return;m!==null?(k=m,zu(m)):k=null}break e}}ct=0,se=null,Ta(t,e,u,5);break;case 6:ct=0,se=null,Ta(t,e,u,6);break;case 8:$c(),xt=6;break t;default:throw Error(h(462))}}fh();break}catch(y){hr(t,y)}while(!0);return Ye=Rl=null,v.H=a,v.A=n,nt=l,k!==null?0:(gt=null,F=0,Ln(),xt)}function fh(){for(;k!==null&&!Ud();)vr(k)}function vr(t){var e=Lo(t.alternate,t,We);t.memoizedProps=t.pendingProps,e===null?zu(t):k=e}function br(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Ho(l,e,e.pendingProps,e.type,void 0,F);break;case 11:e=Ho(l,e,e.pendingProps,e.type.render,e.ref,F);break;case 5:ki(e);default:Qo(l,e),e=k=pf(e,We),e=Lo(l,e,We)}t.memoizedProps=t.pendingProps,e===null?zu(t):k=e}function Ta(t,e,l,a){Ye=Rl=null,ki(e),ra=null,Ka=0;var n=e.return;try{if(Fm(t,n,e,l,F)){xt=1,ou(t,ge(l,t.current)),k=null;return}}catch(u){if(n!==null)throw k=n,u;xt=1,ou(t,ge(l,t.current)),k=null;return}e.flags&32768?(tt||a===1?t=!0:va||(F&536870912)!==0?t=!1:(dl=t=!0,(a===2||a===9||a===3||a===6)&&(a=ie.current,a!==null&&a.tag===13&&(a.flags|=16384))),Sr(e,t)):zu(e)}function zu(t){var e=t;do{if((e.flags&32768)!==0){Sr(e,dl);return}t=e.return;var l=th(e.alternate,e,We);if(l!==null){k=l;return}if(e=e.sibling,e!==null){k=e;return}k=e=t}while(e!==null);xt===0&&(xt=5)}function Sr(t,e){do{var l=eh(t.alternate,t);if(l!==null){l.flags&=32767,k=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){k=t;return}k=t=l}while(t!==null);xt=6,k=null}function xr(t,e,l,a,n,u,i,c,s){t.cancelPendingCommit=null;do Eu();while(Ut!==0);if((nt&6)!==0)throw Error(h(327));if(e!==null){if(e===t.current)throw Error(h(177));if(u=e.lanes|e.childLanes,u|=Ti,Ld(t,l,u,i,c,s),t===gt&&(k=gt=null,F=0),Sa=e,gl=t,Fe=l,Oc=u,Nc=n,or=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,mh(Mn,function(){return Mr(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=v.T,v.T=null,n=A.p,A.p=2,i=nt,nt|=4;try{lh(t,e,l)}finally{nt=i,A.p=n,v.T=a}}Ut=1,Tr(),zr(),Er()}}function Tr(){if(Ut===1){Ut=0;var t=gl,e=Sa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=v.T,v.T=null;var a=A.p;A.p=2;var n=nt;nt|=4;try{lr(e,t);var u=Vc,i=cf(t.containerInfo),c=u.focusedElem,s=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&uf(c.ownerDocument.documentElement,c)){if(s!==null&&yi(c)){var m=s.start,y=s.end;if(y===void 0&&(y=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(y,c.value.length);else{var x=c.ownerDocument||document,g=x&&x.defaultView||window;if(g.getSelection){var p=g.getSelection(),_=c.textContent.length,w=Math.min(s.start,_),dt=s.end===void 0?w:Math.min(s.end,_);!p.extend&&w>dt&&(i=dt,dt=w,w=i);var r=nf(c,w),f=nf(c,dt);if(r&&f&&(p.rangeCount!==1||p.anchorNode!==r.node||p.anchorOffset!==r.offset||p.focusNode!==f.node||p.focusOffset!==f.offset)){var d=x.createRange();d.setStart(r.node,r.offset),p.removeAllRanges(),w>dt?(p.addRange(d),p.extend(f.node,f.offset)):(d.setEnd(f.node,f.offset),p.addRange(d))}}}}for(x=[],p=c;p=p.parentNode;)p.nodeType===1&&x.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<x.length;c++){var b=x[c];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Hu=!!Zc,Vc=Zc=null}finally{nt=n,A.p=a,v.T=l}}t.current=e,Ut=2}}function zr(){if(Ut===2){Ut=0;var t=gl,e=Sa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=v.T,v.T=null;var a=A.p;A.p=2;var n=nt;nt|=4;try{Fo(t,e.alternate,e)}finally{nt=n,A.p=a,v.T=l}}Ut=3}}function Er(){if(Ut===4||Ut===3){Ut=0,$d();var t=gl,e=Sa,l=Fe,a=or;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ut=5:(Ut=0,Sa=gl=null,Ar(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(hl=null),Iu(l),e=e.stateNode,le&&typeof le.onCommitFiberRoot=="function")try{le.onCommitFiberRoot(Ca,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=v.T,n=A.p,A.p=2,v.T=null;try{for(var u=t.onRecoverableError,i=0;i<a.length;i++){var c=a[i];u(c.value,{componentStack:c.stack})}}finally{v.T=e,A.p=n}}(Fe&3)!==0&&Eu(),$e(t),n=t.pendingLanes,(l&261930)!==0&&(n&42)!==0?t===Uc?rn++:(rn=0,Uc=t):rn=0,dn(0)}}function Ar(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Za(e)))}function Eu(){return Tr(),zr(),Er(),Mr()}function Mr(){if(Ut!==5)return!1;var t=gl,e=Oc;Oc=0;var l=Iu(Fe),a=v.T,n=A.p;try{A.p=32>l?32:l,v.T=null,l=Nc,Nc=null;var u=gl,i=Fe;if(Ut=0,Sa=gl=null,Fe=0,(nt&6)!==0)throw Error(h(331));var c=nt;if(nt|=4,cr(u.current),nr(u,u.current,i,l),nt=c,dn(0,!1),le&&typeof le.onPostCommitFiberRoot=="function")try{le.onPostCommitFiberRoot(Ca,u)}catch{}return!0}finally{A.p=n,v.T=a,Ar(t,e)}}function _r(t,e,l){e=ge(l,e),e=oc(t.stateNode,e,2),t=sl(t,e,2),t!==null&&(Na(t,2),$e(t))}function st(t,e,l){if(t.tag===3)_r(t,t,l);else for(;e!==null;){if(e.tag===3){_r(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(hl===null||!hl.has(a))){t=ge(l,t),l=Do(2),a=sl(e,l,2),a!==null&&(Co(l,a,e,t),Na(a,2),$e(a));break}}e=e.return}}function jc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new uh;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(_c=!0,n.add(l),t=oh.bind(null,t,e,l),e.then(t,t))}function oh(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,gt===t&&(F&l)===l&&(xt===4||xt===3&&(F&62914560)===F&&300>ee()-vu?(nt&2)===0&&xa(t,0):Dc|=l,ba===F&&(ba=0)),$e(t)}function Dr(t,e){e===0&&(e=Ss()),t=Nl(t,e),t!==null&&(Na(t,e),$e(t))}function rh(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Dr(t,l)}function dh(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(h(314))}a!==null&&a.delete(e),Dr(t,l)}function mh(t,e){return Ju(t,e)}var Au=null,za=null,Hc=!1,Mu=!1,wc=!1,yl=0;function $e(t){t!==za&&t.next===null&&(za===null?Au=za=t:za=za.next=t),Mu=!0,Hc||(Hc=!0,gh())}function dn(t,e){if(!wc&&Mu){wc=!0;do for(var l=!1,a=Au;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,c=a.pingedLanes;u=(1<<31-ae(42|t)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,Ur(a,u))}else u=F,u=On(a,a===gt?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Oa(a,u)||(l=!0,Ur(a,u));a=a.next}while(l);wc=!1}}function hh(){Cr()}function Cr(){Mu=Hc=!1;var t=0;yl!==0&&Ah()&&(t=yl);for(var e=ee(),l=null,a=Au;a!==null;){var n=a.next,u=Or(a,e);u===0?(a.next=null,l===null?Au=n:l.next=n,n===null&&(za=l)):(l=a,(t!==0||(u&3)!==0)&&(Mu=!0)),a=n}Ut!==0&&Ut!==5||dn(t),yl!==0&&(yl=0)}function Or(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-ae(u),c=1<<i,s=n[i];s===-1?((c&l)===0||(c&a)!==0)&&(n[i]=Gd(c,e)):s<=e&&(t.expiredLanes|=c),u&=~c}if(e=gt,l=F,l=On(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(ct===2||ct===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&ku(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Oa(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&ku(a),Iu(l)){case 2:case 8:l=vs;break;case 32:l=Mn;break;case 268435456:l=bs;break;default:l=Mn}return a=Nr.bind(null,t),l=Ju(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&ku(a),t.callbackPriority=2,t.callbackNode=null,2}function Nr(t,e){if(Ut!==0&&Ut!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Eu()&&t.callbackNode!==l)return null;var a=F;return a=On(t,t===gt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(dr(t,a,e),Or(t,ee()),t.callbackNode!=null&&t.callbackNode===l?Nr.bind(null,t):null)}function Ur(t,e){if(Eu())return null;dr(t,e,!0)}function gh(){_h(function(){(nt&6)!==0?Ju(ys,hh):Cr()})}function Bc(){if(yl===0){var t=sa;t===0&&(t=_n,_n<<=1,(_n&261888)===0&&(_n=256)),yl=t}return yl}function $r(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rn(""+t)}function Rr(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function ph(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var u=$r((n[Kt]||null).action),i=a.submitter;i&&(e=(e=i[Kt]||null)?$r(e.formAction):i.getAttribute("formAction"),e!==null&&(u=e,i=null));var c=new Bn("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(yl!==0){var s=i?Rr(n,i):new FormData(n);nc(l,{pending:!0,data:s,method:n.method,action:u},null,s)}}else typeof u=="function"&&(c.preventDefault(),s=i?Rr(n,i):new FormData(n),nc(l,{pending:!0,data:s,method:n.method,action:u},u,s))},currentTarget:n}]})}}for(var qc=0;qc<xi.length;qc++){var Yc=xi[qc],yh=Yc.toLowerCase(),vh=Yc[0].toUpperCase()+Yc.slice(1);ze(yh,"on"+vh)}ze(of,"onAnimationEnd"),ze(rf,"onAnimationIteration"),ze(df,"onAnimationStart"),ze("dblclick","onDoubleClick"),ze("focusin","onFocus"),ze("focusout","onBlur"),ze(Rm,"onTransitionRun"),ze(jm,"onTransitionStart"),ze(Hm,"onTransitionCancel"),ze(mf,"onTransitionEnd"),Jl("onMouseEnter",["mouseout","mouseover"]),Jl("onMouseLeave",["mouseout","mouseover"]),Jl("onPointerEnter",["pointerout","pointerover"]),Jl("onPointerLeave",["pointerout","pointerover"]),_l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_l("onBeforeInput",["compositionend","keypress","textInput","paste"]),_l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function jr(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var u=void 0;if(e)for(var i=a.length-1;0<=i;i--){var c=a[i],s=c.instance,m=c.currentTarget;if(c=c.listener,s!==u&&n.isPropagationStopped())break t;u=c,n.currentTarget=m;try{u(n)}catch(y){Gn(y)}n.currentTarget=null,u=s}else for(i=0;i<a.length;i++){if(c=a[i],s=c.instance,m=c.currentTarget,c=c.listener,s!==u&&n.isPropagationStopped())break t;u=c,n.currentTarget=m;try{u(n)}catch(y){Gn(y)}n.currentTarget=null,u=s}}}}function W(t,e){var l=e[Pu];l===void 0&&(l=e[Pu]=new Set);var a=t+"__bubble";l.has(a)||(Hr(e,t,2,!1),l.add(a))}function Gc(t,e,l){var a=0;e&&(a|=4),Hr(l,t,a,e)}var _u="_reactListening"+Math.random().toString(36).slice(2);function Lc(t){if(!t[_u]){t[_u]=!0,_s.forEach(function(l){l!=="selectionchange"&&(bh.has(l)||Gc(l,!1,t),Gc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_u]||(e[_u]=!0,Gc("selectionchange",!1,e))}}function Hr(t,e,l,a){switch(rd(e)){case 2:var n=Kh;break;case 8:n=Jh;break;default:n=as}l=n.bind(null,e,l,t),n=void 0,!si||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function Xc(t,e,l,a,n){var u=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=a.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=Zl(c),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){a=u=i;continue t}c=c.parentNode}}a=a.return}qs(function(){var m=u,y=ii(l),x=[];t:{var g=hf.get(t);if(g!==void 0){var p=Bn,_=t;switch(t){case"keypress":if(Hn(l)===0)break t;case"keydown":case"keyup":p=dm;break;case"focusin":_="focus",p=di;break;case"focusout":_="blur",p=di;break;case"beforeblur":case"afterblur":p=di;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=gm;break;case of:case rf:case df:p=am;break;case mf:p=ym;break;case"scroll":case"scrollend":p=Id;break;case"wheel":p=bm;break;case"copy":case"cut":case"paste":p=um;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Qs;break;case"toggle":case"beforetoggle":p=xm}var w=(e&4)!==0,dt=!w&&(t==="scroll"||t==="scrollend"),r=w?g!==null?g+"Capture":null:g;w=[];for(var f=m,d;f!==null;){var b=f;if(d=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||d===null||r===null||(b=Ra(f,r),b!=null&&w.push(hn(f,b,d))),dt)break;f=f.return}0<w.length&&(g=new p(g,_,null,l,y),x.push({event:g,listeners:w}))}}if((e&7)===0){t:{if(g=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",g&&l!==ui&&(_=l.relatedTarget||l.fromElement)&&(Zl(_)||_[Ql]))break t;if((p||g)&&(g=y.window===y?y:(g=y.ownerDocument)?g.defaultView||g.parentWindow:window,p?(_=l.relatedTarget||l.toElement,p=m,_=_?Zl(_):null,_!==null&&(dt=V(_),w=_.tag,_!==dt||w!==5&&w!==27&&w!==6)&&(_=null)):(p=null,_=m),p!==_)){if(w=Ls,b="onMouseLeave",r="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Qs,b="onPointerLeave",r="onPointerEnter",f="pointer"),dt=p==null?g:$a(p),d=_==null?g:$a(_),g=new w(b,f+"leave",p,l,y),g.target=dt,g.relatedTarget=d,b=null,Zl(y)===m&&(w=new w(r,f+"enter",_,l,y),w.target=d,w.relatedTarget=dt,b=w),dt=b,p&&_)e:{for(w=Sh,r=p,f=_,d=0,b=r;b;b=w(b))d++;b=0;for(var R=f;R;R=w(R))b++;for(;0<d-b;)r=w(r),d--;for(;0<b-d;)f=w(f),b--;for(;d--;){if(r===f||f!==null&&r===f.alternate){w=r;break e}r=w(r),f=w(f)}w=null}else w=null;p!==null&&wr(x,g,p,w,!1),_!==null&&dt!==null&&wr(x,dt,_,w,!0)}}t:{if(g=m?$a(m):window,p=g.nodeName&&g.nodeName.toLowerCase(),p==="select"||p==="input"&&g.type==="file")var et=Is;else if(Ws(g))if(Ps)et=Nm;else{et=Cm;var C=Dm}else p=g.nodeName,!p||p.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?m&&ni(m.elementType)&&(et=Is):et=Om;if(et&&(et=et(t,m))){Fs(x,et,l,y);break t}C&&C(t,g,m),t==="focusout"&&m&&g.type==="number"&&m.memoizedProps.value!=null&&ai(g,"number",g.value)}switch(C=m?$a(m):window,t){case"focusin":(Ws(C)||C.contentEditable==="true")&&(ta=C,vi=m,La=null);break;case"focusout":La=vi=ta=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,sf(x,l,y);break;case"selectionchange":if($m)break;case"keydown":case"keyup":sf(x,l,y)}var Z;if(hi)t:{switch(t){case"compositionstart":var I="onCompositionStart";break t;case"compositionend":I="onCompositionEnd";break t;case"compositionupdate":I="onCompositionUpdate";break t}I=void 0}else Pl?Js(t,l)&&(I="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(I="onCompositionStart");I&&(Zs&&l.locale!=="ko"&&(Pl||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pl&&(Z=Ys()):(el=y,fi="value"in el?el.value:el.textContent,Pl=!0)),C=Du(m,I),0<C.length&&(I=new Xs(I,t,null,l,y),x.push({event:I,listeners:C}),Z?I.data=Z:(Z=ks(l),Z!==null&&(I.data=Z)))),(Z=zm?Em(t,l):Am(t,l))&&(I=Du(m,"onBeforeInput"),0<I.length&&(C=new Xs("onBeforeInput","beforeinput",null,l,y),x.push({event:C,listeners:I}),C.data=Z)),ph(x,t,m,l,y)}jr(x,e)})}function hn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Du(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Ra(t,l),n!=null&&a.unshift(hn(t,n,u)),n=Ra(t,e),n!=null&&a.push(hn(t,n,u))),t.tag===3)return a;t=t.return}return[]}function Sh(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function wr(t,e,l,a,n){for(var u=e._reactName,i=[];l!==null&&l!==a;){var c=l,s=c.alternate,m=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||m===null||(s=m,n?(m=Ra(l,u),m!=null&&i.unshift(hn(l,m,s))):n||(m=Ra(l,u),m!=null&&i.push(hn(l,m,s)))),l=l.return}i.length!==0&&t.push({event:e,listeners:i})}var xh=/\r\n?/g,Th=/\u0000|\uFFFD/g;function Br(t){return(typeof t=="string"?t:""+t).replace(xh,`
`).replace(Th,"")}function qr(t,e){return e=Br(e),Br(t)===e}function rt(t,e,l,a,n,u){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Wl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Wl(t,""+a);break;case"className":Un(t,"class",a);break;case"tabIndex":Un(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Un(t,l,a);break;case"style":ws(t,a,u);break;case"data":if(e!=="object"){Un(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Rn(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&rt(t,e,"name",n.name,n,null),rt(t,e,"formEncType",n.formEncType,n,null),rt(t,e,"formMethod",n.formMethod,n,null),rt(t,e,"formTarget",n.formTarget,n,null)):(rt(t,e,"encType",n.encType,n,null),rt(t,e,"method",n.method,n,null),rt(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Rn(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=He);break;case"onScroll":a!=null&&W("scroll",t);break;case"onScrollEnd":a!=null&&W("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(h(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Rn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":W("beforetoggle",t),W("toggle",t),Nn(t,"popover",a);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Nn(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Wd.get(l)||l,Nn(t,l,a))}}function Qc(t,e,l,a,n,u){switch(l){case"style":ws(t,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(h(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Wl(t,a):(typeof a=="number"||typeof a=="bigint")&&Wl(t,""+a);break;case"onScroll":a!=null&&W("scroll",t);break;case"onScrollEnd":a!=null&&W("scrollend",t);break;case"onClick":a!=null&&(t.onclick=He);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ds.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),u=t[Kt]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Nn(t,l,a)}}}function Yt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",t),W("load",t);var a=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,e));default:rt(t,e,u,i,l,null)}}n&&rt(t,e,"srcSet",l.srcSet,l,null),a&&rt(t,e,"src",l.src,l,null);return;case"input":W("invalid",t);var c=u=i=n=null,s=null,m=null;for(a in l)if(l.hasOwnProperty(a)){var y=l[a];if(y!=null)switch(a){case"name":n=y;break;case"type":i=y;break;case"checked":s=y;break;case"defaultChecked":m=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,e));break;default:rt(t,e,a,y,l,null)}}$s(t,u,c,s,m,i,n,!1);return;case"select":W("invalid",t),a=i=u=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:rt(t,e,n,c,l,null)}e=u,l=i,t.multiple=!!a,e!=null?kl(t,!!a,e,!1):l!=null&&kl(t,!!a,l,!0);return;case"textarea":W("invalid",t),u=n=a=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(h(91));break;default:rt(t,e,i,c,l,null)}js(t,a,n,u);return;case"option":for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null)&&(s==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":rt(t,e,s,a,l,null));return;case"dialog":W("beforetoggle",t),W("toggle",t),W("cancel",t),W("close",t);break;case"iframe":case"object":W("load",t);break;case"video":case"audio":for(a=0;a<mn.length;a++)W(mn[a],t);break;case"image":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"embed":case"source":case"link":W("error",t),W("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,e));default:rt(t,e,m,a,l,null)}return;default:if(ni(e)){for(y in l)l.hasOwnProperty(y)&&(a=l[y],a!==void 0&&Qc(t,e,y,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&rt(t,e,c,a,l,null))}function zh(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,s=null,m=null,y=null;for(p in l){var x=l[p];if(l.hasOwnProperty(p)&&x!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":s=x;default:a.hasOwnProperty(p)||rt(t,e,p,null,a,x)}}for(var g in a){var p=a[g];if(x=l[g],a.hasOwnProperty(g)&&(p!=null||x!=null))switch(g){case"type":u=p;break;case"name":n=p;break;case"checked":m=p;break;case"defaultChecked":y=p;break;case"value":i=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(h(137,e));break;default:p!==x&&rt(t,e,g,p,a,x)}}li(t,i,c,s,m,y,u,n);return;case"select":p=i=c=g=null;for(u in l)if(s=l[u],l.hasOwnProperty(u)&&s!=null)switch(u){case"value":break;case"multiple":p=s;default:a.hasOwnProperty(u)||rt(t,e,u,null,a,s)}for(n in a)if(u=a[n],s=l[n],a.hasOwnProperty(n)&&(u!=null||s!=null))switch(n){case"value":g=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==s&&rt(t,e,n,u,a,s)}e=c,l=i,a=p,g!=null?kl(t,!!l,g,!1):!!a!=!!l&&(e!=null?kl(t,!!l,e,!0):kl(t,!!l,l?[]:"",!1));return;case"textarea":p=g=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:rt(t,e,c,null,a,n)}for(i in a)if(n=a[i],u=l[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":g=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(h(91));break;default:n!==u&&rt(t,e,i,n,a,u)}Rs(t,g,p);return;case"option":for(var _ in l)g=l[_],l.hasOwnProperty(_)&&g!=null&&!a.hasOwnProperty(_)&&(_==="selected"?t.selected=!1:rt(t,e,_,null,a,g));for(s in a)g=a[s],p=l[s],a.hasOwnProperty(s)&&g!==p&&(g!=null||p!=null)&&(s==="selected"?t.selected=g&&typeof g!="function"&&typeof g!="symbol":rt(t,e,s,g,a,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in l)g=l[w],l.hasOwnProperty(w)&&g!=null&&!a.hasOwnProperty(w)&&rt(t,e,w,null,a,g);for(m in a)if(g=a[m],p=l[m],a.hasOwnProperty(m)&&g!==p&&(g!=null||p!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,e));break;default:rt(t,e,m,g,a,p)}return;default:if(ni(e)){for(var dt in l)g=l[dt],l.hasOwnProperty(dt)&&g!==void 0&&!a.hasOwnProperty(dt)&&Qc(t,e,dt,void 0,a,g);for(y in a)g=a[y],p=l[y],!a.hasOwnProperty(y)||g===p||g===void 0&&p===void 0||Qc(t,e,y,g,a,p);return}}for(var r in l)g=l[r],l.hasOwnProperty(r)&&g!=null&&!a.hasOwnProperty(r)&&rt(t,e,r,null,a,g);for(x in a)g=a[x],p=l[x],!a.hasOwnProperty(x)||g===p||g==null&&p==null||rt(t,e,x,g,a,p)}function Yr(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Eh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],u=n.transferSize,i=n.initiatorType,c=n.duration;if(u&&c&&Yr(i)){for(i=0,c=n.responseEnd,a+=1;a<l.length;a++){var s=l[a],m=s.startTime;if(m>c)break;var y=s.transferSize,x=s.initiatorType;y&&Yr(x)&&(s=s.responseEnd,i+=y*(s<c?1:(c-m)/(s-m)))}if(--a,e+=8*(u+i)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Zc=null,Vc=null;function Cu(t){return t.nodeType===9?t:t.ownerDocument}function Gr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lr(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Kc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jc=null;function Ah(){var t=window.event;return t&&t.type==="popstate"?t===Jc?!1:(Jc=t,!0):(Jc=null,!1)}var Xr=typeof setTimeout=="function"?setTimeout:void 0,Mh=typeof clearTimeout=="function"?clearTimeout:void 0,Qr=typeof Promise=="function"?Promise:void 0,_h=typeof queueMicrotask=="function"?queueMicrotask:typeof Qr<"u"?function(t){return Qr.resolve(null).then(t).catch(Dh)}:Xr;function Dh(t){setTimeout(function(){throw t})}function vl(t){return t==="head"}function Zr(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),_a(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")gn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,gn(l);for(var u=l.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[Ua]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&gn(t.ownerDocument.body);l=n}while(l);_a(e)}function Vr(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function kc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":kc(l),ti(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Ch(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ua])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Se(t.nextSibling),t===null)break}return null}function Oh(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Se(t.nextSibling),t===null))return null;return t}function Kr(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Se(t.nextSibling),t===null))return null;return t}function Wc(t){return t.data==="$?"||t.data==="$~"}function Fc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Nh(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Se(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Ic=null;function Jr(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Se(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function kr(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function Wr(t,e,l){switch(e=Cu(l),t){case"html":if(t=e.documentElement,!t)throw Error(h(452));return t;case"head":if(t=e.head,!t)throw Error(h(453));return t;case"body":if(t=e.body,!t)throw Error(h(454));return t;default:throw Error(h(451))}}function gn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ti(t)}var xe=new Map,Fr=new Set;function Ou(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ie=A.d;A.d={f:Uh,r:$h,D:Rh,C:jh,L:Hh,m:wh,X:qh,S:Bh,M:Yh};function Uh(){var t=Ie.f(),e=xu();return t||e}function $h(t){var e=Vl(t);e!==null&&e.tag===5&&e.type==="form"?ho(e):Ie.r(t)}var Ea=typeof document>"u"?null:document;function Ir(t,e,l){var a=Ea;if(a&&typeof e=="string"&&e){var n=me(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Fr.has(n)||(Fr.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),Yt(e,"link",t),$t(e),a.head.appendChild(e)))}}function Rh(t){Ie.D(t),Ir("dns-prefetch",t,null)}function jh(t,e){Ie.C(t,e),Ir("preconnect",t,e)}function Hh(t,e,l){Ie.L(t,e,l);var a=Ea;if(a&&t&&e){var n='link[rel="preload"][as="'+me(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+me(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+me(l.imageSizes)+'"]')):n+='[href="'+me(t)+'"]';var u=n;switch(e){case"style":u=Aa(t);break;case"script":u=Ma(t)}xe.has(u)||(t=j({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),xe.set(u,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(pn(u))||e==="script"&&a.querySelector(yn(u))||(e=a.createElement("link"),Yt(e,"link",t),$t(e),a.head.appendChild(e)))}}function wh(t,e){Ie.m(t,e);var l=Ea;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+me(a)+'"][href="'+me(t)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ma(t)}if(!xe.has(u)&&(t=j({rel:"modulepreload",href:t},e),xe.set(u,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(yn(u)))return}a=l.createElement("link"),Yt(a,"link",t),$t(a),l.head.appendChild(a)}}}function Bh(t,e,l){Ie.S(t,e,l);var a=Ea;if(a&&t){var n=Kl(a).hoistableStyles,u=Aa(t);e=e||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(pn(u)))c.loading=5;else{t=j({rel:"stylesheet",href:t,"data-precedence":e},l),(l=xe.get(u))&&Pc(t,l);var s=i=a.createElement("link");$t(s),Yt(s,"link",t),s._p=new Promise(function(m,y){s.onload=m,s.onerror=y}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Nu(i,e,a)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function qh(t,e){Ie.X(t,e);var l=Ea;if(l&&t){var a=Kl(l).hoistableScripts,n=Ma(t),u=a.get(n);u||(u=l.querySelector(yn(n)),u||(t=j({src:t,async:!0},e),(e=xe.get(n))&&ts(t,e),u=l.createElement("script"),$t(u),Yt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Yh(t,e){Ie.M(t,e);var l=Ea;if(l&&t){var a=Kl(l).hoistableScripts,n=Ma(t),u=a.get(n);u||(u=l.querySelector(yn(n)),u||(t=j({src:t,async:!0,type:"module"},e),(e=xe.get(n))&&ts(t,e),u=l.createElement("script"),$t(u),Yt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Pr(t,e,l,a){var n=(n=J.current)?Ou(n):null;if(!n)throw Error(h(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Aa(l.href),l=Kl(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Aa(l.href);var u=Kl(n).hoistableStyles,i=u.get(t);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=n.querySelector(pn(t)))&&!u._p&&(i.instance=u,i.state.loading=5),xe.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},xe.set(t,l),u||Gh(n,t,l,i.state))),e&&a===null)throw Error(h(528,""));return i}if(e&&a!==null)throw Error(h(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ma(l),l=Kl(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,t))}}function Aa(t){return'href="'+me(t)+'"'}function pn(t){return'link[rel="stylesheet"]['+t+"]"}function td(t){return j({},t,{"data-precedence":t.precedence,precedence:null})}function Gh(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Yt(e,"link",l),$t(e),t.head.appendChild(e))}function Ma(t){return'[src="'+me(t)+'"]'}function yn(t){return"script[async]"+t}function ed(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+me(l.href)+'"]');if(a)return e.instance=a,$t(a),a;var n=j({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),$t(a),Yt(a,"style",n),Nu(a,l.precedence,t),e.instance=a;case"stylesheet":n=Aa(l.href);var u=t.querySelector(pn(n));if(u)return e.state.loading|=4,e.instance=u,$t(u),u;a=td(l),(n=xe.get(n))&&Pc(a,n),u=(t.ownerDocument||t).createElement("link"),$t(u);var i=u;return i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),Yt(u,"link",a),e.state.loading|=4,Nu(u,l.precedence,t),e.instance=u;case"script":return u=Ma(l.src),(n=t.querySelector(yn(u)))?(e.instance=n,$t(n),n):(a=l,(n=xe.get(u))&&(a=j({},l),ts(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),$t(n),Yt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(h(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Nu(a,l.precedence,t));return e.instance}function Nu(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===e)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Pc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ts(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Uu=null;function ld(t,e,l){if(Uu===null){var a=new Map,n=Uu=new Map;n.set(l,a)}else n=Uu,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var u=l[n];if(!(u[Ua]||u[Ht]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(e)||"";i=t+i;var c=a.get(i);c?c.push(u):a.set(i,[u])}}return a}function ad(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Lh(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function nd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Xh(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Aa(a.href),u=e.querySelector(pn(n));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=$u.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=u,$t(u);return}u=e.ownerDocument||e,a=td(a),(n=xe.get(n))&&Pc(a,n),u=u.createElement("link"),$t(u);var i=u;i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),Yt(u,"link",a),l.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=$u.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var es=0;function Qh(t,e){return t.stylesheets&&t.count===0&&ju(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&ju(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&es===0&&(es=62500*Eh());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ju(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>es?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function $u(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ju(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ru=null;function ju(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ru=new Map,e.forEach(Zh,t),Ru=null,$u.call(t))}function Zh(t,e){if(!(e.state.loading&4)){var l=Ru.get(t);if(l)var a=l.get(null);else{l=new Map,Ru.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),a=i)}a&&l.set(null,a)}n=e.instance,i=n.getAttribute("data-precedence"),u=l.get(i)||a,u===a&&l.set(null,n),l.set(i,n),this.count++,a=$u.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var vn={$$typeof:zt,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Vh(t,e,l,a,n,u,i,c,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wu(0),this.hiddenUpdates=Wu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function ud(t,e,l,a,n,u,i,c,s,m,y,x){return t=new Vh(t,e,l,i,s,m,y,x,c),e=1,u===!0&&(e|=24),u=ue(3,null,null,e),t.current=u,u.stateNode=t,e=Ri(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:e},Bi(u),t}function id(t){return t?(t=aa,t):aa}function cd(t,e,l,a,n,u){n=id(n),a.context===null?a.context=n:a.pendingContext=n,a=cl(e),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=sl(t,a,e),l!==null&&(Pt(l,t,e),ka(l,t,e))}function sd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function ls(t,e){sd(t,e),(t=t.alternate)&&sd(t,e)}function fd(t){if(t.tag===13||t.tag===31){var e=Nl(t,67108864);e!==null&&Pt(e,t,67108864),ls(t,67108864)}}function od(t){if(t.tag===13||t.tag===31){var e=oe();e=Fu(e);var l=Nl(t,e);l!==null&&Pt(l,t,e),ls(t,e)}}var Hu=!0;function Kh(t,e,l,a){var n=v.T;v.T=null;var u=A.p;try{A.p=2,as(t,e,l,a)}finally{A.p=u,v.T=n}}function Jh(t,e,l,a){var n=v.T;v.T=null;var u=A.p;try{A.p=8,as(t,e,l,a)}finally{A.p=u,v.T=n}}function as(t,e,l,a){if(Hu){var n=ns(a);if(n===null)Xc(t,e,a,wu,l),dd(t,a);else if(Wh(n,t,e,l,a))a.stopPropagation();else if(dd(t,a),e&4&&-1<kh.indexOf(t)){for(;n!==null;){var u=Vl(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Ml(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var s=1<<31-ae(i);c.entanglements[1]|=s,i&=~s}$e(u),(nt&6)===0&&(bu=ee()+500,dn(0))}}break;case 31:case 13:c=Nl(u,2),c!==null&&Pt(c,u,2),xu(),ls(u,2)}if(u=ns(a),u===null&&Xc(t,e,a,wu,l),u===n)break;n=u}n!==null&&a.stopPropagation()}else Xc(t,e,a,null,l)}}function ns(t){return t=ii(t),us(t)}var wu=null;function us(t){if(wu=null,t=Zl(t),t!==null){var e=V(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=ut(e),t!==null)return t;t=null}else if(l===31){if(t=Tt(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return wu=t,null}function rd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rd()){case ys:return 2;case vs:return 8;case Mn:case jd:return 32;case bs:return 268435456;default:return 32}default:return 32}}var is=!1,bl=null,Sl=null,xl=null,bn=new Map,Sn=new Map,Tl=[],kh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dd(t,e){switch(t){case"focusin":case"focusout":bl=null;break;case"dragenter":case"dragleave":Sl=null;break;case"mouseover":case"mouseout":xl=null;break;case"pointerover":case"pointerout":bn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(e.pointerId)}}function xn(t,e,l,a,n,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},e!==null&&(e=Vl(e),e!==null&&fd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Wh(t,e,l,a,n){switch(e){case"focusin":return bl=xn(bl,t,e,l,a,n),!0;case"dragenter":return Sl=xn(Sl,t,e,l,a,n),!0;case"mouseover":return xl=xn(xl,t,e,l,a,n),!0;case"pointerover":var u=n.pointerId;return bn.set(u,xn(bn.get(u)||null,t,e,l,a,n)),!0;case"gotpointercapture":return u=n.pointerId,Sn.set(u,xn(Sn.get(u)||null,t,e,l,a,n)),!0}return!1}function md(t){var e=Zl(t.target);if(e!==null){var l=V(e);if(l!==null){if(e=l.tag,e===13){if(e=ut(l),e!==null){t.blockedOn=e,As(t.priority,function(){od(l)});return}}else if(e===31){if(e=Tt(l),e!==null){t.blockedOn=e,As(t.priority,function(){od(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=ns(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);ui=a,l.target.dispatchEvent(a),ui=null}else return e=Vl(l),e!==null&&fd(e),t.blockedOn=l,!1;e.shift()}return!0}function hd(t,e,l){Bu(t)&&l.delete(e)}function Fh(){is=!1,bl!==null&&Bu(bl)&&(bl=null),Sl!==null&&Bu(Sl)&&(Sl=null),xl!==null&&Bu(xl)&&(xl=null),bn.forEach(hd),Sn.forEach(hd)}function qu(t,e){t.blockedOn===e&&(t.blockedOn=null,is||(is=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,Fh)))}var Yu=null;function gd(t){Yu!==t&&(Yu=t,E.unstable_scheduleCallback(E.unstable_NormalPriority,function(){Yu===t&&(Yu=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(us(a||l)===null)continue;break}var u=Vl(l);u!==null&&(t.splice(e,3),e-=3,nc(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function _a(t){function e(s){return qu(s,t)}bl!==null&&qu(bl,t),Sl!==null&&qu(Sl,t),xl!==null&&qu(xl,t),bn.forEach(e),Sn.forEach(e);for(var l=0;l<Tl.length;l++){var a=Tl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Tl.length&&(l=Tl[0],l.blockedOn===null);)md(l),l.blockedOn===null&&Tl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],u=l[a+1],i=n[Kt]||null;if(typeof u=="function")i||gd(l);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Kt]||null)c=i.formAction;else if(us(n)!==null)continue}else c=i.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),gd(l)}}}function pd(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function cs(t){this._internalRoot=t}Gu.prototype.render=cs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(h(409));var l=e.current,a=oe();cd(l,a,t,e,null,null)},Gu.prototype.unmount=cs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cd(t.current,2,null,t,null,null),xu(),e[Ql]=null}};function Gu(t){this._internalRoot=t}Gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Es();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Tl.length&&e!==0&&e<Tl[l].priority;l++);Tl.splice(l,0,t),l===0&&md(t)}};var yd=Y.version;if(yd!=="19.2.4")throw Error(h(527,yd,"19.2.4"));A.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(h(188)):(t=Object.keys(t).join(","),Error(h(268,t)));return t=z(e),t=t!==null?P(t):null,t=t===null?null:t.stateNode,t};var Ih={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lu.isDisabled&&Lu.supportsFiber)try{Ca=Lu.inject(Ih),le=Lu}catch{}}return zn.createRoot=function(t,e){if(!U(t))throw Error(h(299));var l=!1,a="",n=Eo,u=Ao,i=Mo;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ud(t,1,!1,null,null,l,a,null,n,u,i,pd),t[Ql]=e.current,Lc(t),new cs(e)},zn.hydrateRoot=function(t,e,l){if(!U(t))throw Error(h(299));var a=!1,n="",u=Eo,i=Ao,c=Mo,s=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),e=ud(t,1,!0,e,l??null,a,n,s,u,i,c,pd),e.context=id(null),l=e.current,a=oe(),a=Fu(a),n=cl(a),n.callback=null,sl(l,n,a),l=a,e.current.lanes=l,Na(e,l),$e(e),t[Ql]=e.current,Lc(t),new Gu(e)},zn.version="19.2.4",zn}var _d;function sg(){if(_d)return os.exports;_d=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(Y){console.error(Y)}}return E(),os.exports=cg(),os.exports}var fg=sg();const Me={chapters:[{id:1,title:"File System Navigation",description:"Learn to navigate the Linux file system like a pro",lessons:[{id:1,title:"Understanding the File System Structure",duration:"15 min",content:`
# Understanding the Linux File System

The Linux file system is organized as a hierarchical tree structure, starting from the root directory \`/\`.

## Key Directories

| Directory | Purpose |
|-----------|---------|
| \`/\` | Root - the top of the file system |
| \`/home\` | User home directories |
| \`/etc\` | System configuration files |
| \`/var\` | Variable data (logs, databases) |
| \`/usr\` | User programs and data |
| \`/bin\` | Essential command binaries |
| \`/tmp\` | Temporary files |
| \`/opt\` | Optional/third-party software |

## The pwd Command

The \`pwd\` (print working directory) command shows your current location:

\`\`\`bash
$ pwd
/home/username
\`\`\`

## The ls Command

List directory contents with various options:

\`\`\`bash
# Basic listing
$ ls
Documents  Downloads  Pictures

# Long format with details
$ ls -l
drwxr-xr-x 2 user user 4096 Jan 15 10:30 Documents
drwxr-xr-x 2 user user 4096 Jan 15 10:30 Downloads

# Show hidden files (starting with .)
$ ls -a
.  ..  .bashrc  .profile  Documents

# Human-readable sizes
$ ls -lh
-rw-r--r-- 1 user user 1.5K Jan 15 10:30 file.txt

# Sort by modification time
$ ls -lt

# Combine options
$ ls -lah
\`\`\`

> 💡 **Tip:** Hidden files in Linux start with a dot (.). Your configuration files are usually hidden!

## Understanding ls -l Output

\`\`\`
drwxr-xr-x 2 user group 4096 Jan 15 10:30 Documents
│├─┬─┤├─┤ │  │    │     │    └── Name
││ │ │ │  │  │    │     └── Date modified
││ │ │ │  │  │    └── Size in bytes
││ │ │ │  │  └── Group owner
││ │ │ │  └── User owner
││ │ │ └── Number of hard links
││ │ └── Others permissions (r-x)
││ └── Group permissions (r-x)
│└── User permissions (rwx)
└── File type (d=directory, -=file, l=link)
\`\`\`

> ⚠️ **Warning:** Never run commands you don't understand, especially as root!
          `},{id:2,title:"Navigating with cd and Paths",duration:"12 min",content:`
# Navigating the File System with cd

The \`cd\` (change directory) command is your primary navigation tool.

## Basic Navigation

\`\`\`bash
# Go to a directory
$ cd Documents

# Go to home directory (three ways)
$ cd
$ cd ~
$ cd $HOME

# Go to root directory
$ cd /

# Go up one level
$ cd ..

# Go up two levels
$ cd ../..

# Go to previous directory
$ cd -
\`\`\`

## Absolute vs Relative Paths

| Type | Description | Example |
|------|-------------|---------|
| Absolute | Full path from root | \`/home/user/Documents\` |
| Relative | Path from current location | \`./Documents\` or \`Documents\` |

\`\`\`bash
# Absolute path (starts with /)
$ cd /var/log

# Relative path (from current directory)
$ cd Documents/Projects

# Using . (current directory)
$ cd ./Downloads

# Using ~ (home directory)
$ cd ~/Documents
\`\`\`

## Path Shortcuts

| Symbol | Meaning |
|--------|---------|
| \`~\` | Home directory |
| \`.\` | Current directory |
| \`..\` | Parent directory |
| \`-\` | Previous directory |

## Tab Completion

One of the most useful features! Press Tab to autocomplete:

\`\`\`bash
$ cd Doc[TAB]
$ cd Documents/

$ cd /etc/sys[TAB][TAB]
sysctl.conf  sysctl.d/  systemd/
\`\`\`

> 💡 **Pro Tip:** Double-tap Tab to see all possible completions when there are multiple matches.

## Practical Examples

\`\`\`bash
# Common workflow
$ pwd
/home/user

$ cd /var/log
$ pwd
/var/log

$ cd -
/home/user

$ cd ~/Documents/Projects/myapp
$ pwd
/home/user/Documents/Projects/myapp

$ cd ../../
$ pwd
/home/user/Documents
\`\`\`

## The pushd and popd Commands

For complex navigation, use directory stack:

\`\`\`bash
# Save current directory and change
$ pushd /var/log
/var/log ~

# Go back to saved directory
$ popd
~

# View directory stack
$ dirs
\`\`\`

> ⚠️ **Common Mistake:** Spaces in directory names need escaping or quotes:
> \`cd My\\ Documents\` or \`cd "My Documents"\`
          `}]},{id:2,title:"File Operations",description:"Create, copy, move, and delete files and directories",lessons:[{id:3,title:"Creating and Managing Files",duration:"18 min",content:`
# Creating and Managing Files

Learn to create, copy, move, and organize files from the command line.

## Creating Files

\`\`\`bash
# Create empty file
$ touch newfile.txt

# Create multiple files
$ touch file1.txt file2.txt file3.txt

# Create file with content
$ echo "Hello World" > greeting.txt

# Append to file
$ echo "Another line" >> greeting.txt

# Create file with cat (Ctrl+D to save)
$ cat > notes.txt
Type your content here
Press Ctrl+D when done
\`\`\`

## Creating Directories

\`\`\`bash
# Create single directory
$ mkdir projects

# Create nested directories
$ mkdir -p projects/webapp/src/components

# Create multiple directories
$ mkdir dir1 dir2 dir3

# Create with specific permissions
$ mkdir -m 755 secure_folder
\`\`\`

## Copying Files and Directories

\`\`\`bash
# Copy file
$ cp source.txt destination.txt

# Copy to directory
$ cp file.txt /path/to/directory/

# Copy multiple files
$ cp file1.txt file2.txt /destination/

# Copy directory recursively
$ cp -r sourcedir/ destdir/

# Copy with preservation of attributes
$ cp -p file.txt backup.txt

# Interactive mode (ask before overwrite)
$ cp -i source.txt dest.txt

# Verbose output
$ cp -v file.txt backup.txt
'file.txt' -> 'backup.txt'
\`\`\`

## Useful cp Options

| Option | Description |
|--------|-------------|
| \`-r\` | Recursive (for directories) |
| \`-i\` | Interactive (prompt before overwrite) |
| \`-v\` | Verbose (show what's being done) |
| \`-p\` | Preserve attributes (permissions, timestamps) |
| \`-u\` | Update (copy only when source is newer) |
| \`-n\` | No clobber (don't overwrite existing) |

## Moving and Renaming

The \`mv\` command moves AND renames:

\`\`\`bash
# Rename file
$ mv oldname.txt newname.txt

# Move file to directory
$ mv file.txt /path/to/directory/

# Move and rename
$ mv file.txt /path/to/newname.txt

# Move multiple files
$ mv file1.txt file2.txt /destination/

# Move directory
$ mv sourcedir/ /new/location/

# Interactive mode
$ mv -i source.txt dest.txt
\`\`\`

> 💡 **Tip:** Unlike Windows, Linux has no "rename" command - just use \`mv\`!

## Viewing File Contents

\`\`\`bash
# View entire file
$ cat file.txt

# View with line numbers
$ cat -n file.txt

# View large files page by page
$ less file.txt
$ more file.txt

# View first/last lines
$ head file.txt        # first 10 lines
$ head -n 20 file.txt  # first 20 lines
$ tail file.txt        # last 10 lines
$ tail -f logfile.txt  # follow updates live
\`\`\`

> ⚠️ **Warning:** Be careful with \`mv\` - there's no undo! Use \`-i\` flag when unsure.
          `},{id:4,title:"Deleting and Finding Files",duration:"15 min",content:`
# Deleting and Finding Files

Master file deletion and the powerful find command.

## Deleting Files with rm

\`\`\`bash
# Delete single file
$ rm file.txt

# Delete multiple files
$ rm file1.txt file2.txt file3.txt

# Delete with confirmation
$ rm -i important.txt
rm: remove regular file 'important.txt'? y

# Force delete (no confirmation)
$ rm -f file.txt

# Delete directory and contents
$ rm -r directory/

# Force delete directory
$ rm -rf directory/

# Verbose output
$ rm -v file.txt
removed 'file.txt'
\`\`\`

> ⚠️ **DANGER:** \`rm -rf /\` will destroy your entire system! NEVER run this!

## Safer Alternatives

\`\`\`bash
# Use trash-cli instead of rm
$ trash-put file.txt
$ trash-list
$ trash-restore

# Or use rmdir for empty directories only
$ rmdir empty_directory/
\`\`\`

## The find Command

The most powerful file search tool:

\`\`\`bash
# Find by name
$ find /path -name "filename.txt"

# Find by name (case insensitive)
$ find /path -iname "*.TXT"

# Find in current directory
$ find . -name "*.js"

# Find by type
$ find . -type f  # files only
$ find . -type d  # directories only
$ find . -type l  # symbolic links

# Find by size
$ find . -size +100M  # larger than 100MB
$ find . -size -1k    # smaller than 1KB
$ find . -size 50M    # exactly 50MB

# Find by modification time
$ find . -mtime -7    # modified in last 7 days
$ find . -mtime +30   # modified more than 30 days ago
$ find . -mmin -60    # modified in last 60 minutes
\`\`\`

## find with Actions

\`\`\`bash
# Delete found files
$ find . -name "*.tmp" -delete

# Execute command on each file
$ find . -name "*.log" -exec rm {} \\;

# Execute with confirmation
$ find . -name "*.bak" -ok rm {} \\;

# Print with details
$ find . -name "*.txt" -ls
\`\`\`

## Common find Patterns

| Pattern | Description |
|---------|-------------|
| \`-name "*.log"\` | All .log files |
| \`-type f -empty\` | Empty files |
| \`-type d -empty\` | Empty directories |
| \`-user john\` | Files owned by john |
| \`-perm 755\` | Files with permission 755 |
| \`-newer file.txt\` | Files newer than file.txt |

## Combining Conditions

\`\`\`bash
# AND (implicit)
$ find . -name "*.txt" -size +1M

# OR
$ find . -name "*.jpg" -o -name "*.png"

# NOT
$ find . ! -name "*.txt"

# Complex expression
$ find . \\( -name "*.js" -o -name "*.ts" \\) -type f -mtime -7
\`\`\`

## Alternative: locate

Faster but requires database update:

\`\`\`bash
# Update database
$ sudo updatedb

# Fast search
$ locate filename

# Case insensitive
$ locate -i FILENAME
\`\`\`

> 💡 **Tip:** Use \`find\` for precise, current results. Use \`locate\` for quick searches when the database is fresh.
          `}]},{id:3,title:"File Permissions",description:"Master Linux permission system and file ownership",lessons:[{id:5,title:"Understanding Permission Basics",duration:"20 min",content:`
# Understanding Linux Permissions

Linux uses a robust permission system to control file access.

## Permission Types

| Permission | Symbol | File | Directory |
|------------|--------|------|-----------|
| Read | r (4) | View contents | List contents |
| Write | w (2) | Modify contents | Create/delete files |
| Execute | x (1) | Run as program | Enter directory |

## Reading Permissions

\`\`\`bash
$ ls -l file.txt
-rw-r--r-- 1 owner group 1234 Jan 15 10:30 file.txt
\`\`\`

Breaking down \`-rw-r--r--\`:
- First character: file type (\`-\` = file, \`d\` = directory, \`l\` = link)
- Characters 2-4: Owner permissions (\`rw-\` = read+write)
- Characters 5-7: Group permissions (\`r--\` = read only)
- Characters 8-10: Others permissions (\`r--\` = read only)

## Numeric (Octal) Notation

Each permission has a numeric value:
- Read (r) = 4
- Write (w) = 2
- Execute (x) = 1

| Symbolic | Numeric | Meaning |
|----------|---------|---------|
| rwx | 7 | Full access |
| rw- | 6 | Read and write |
| r-x | 5 | Read and execute |
| r-- | 4 | Read only |
| -wx | 3 | Write and execute |
| -w- | 2 | Write only |
| --x | 1 | Execute only |
| --- | 0 | No access |

## Common Permission Sets

| Numeric | Symbolic | Use Case |
|---------|----------|----------|
| 755 | rwxr-xr-x | Executables, directories |
| 644 | rw-r--r-- | Regular files |
| 700 | rwx------ | Private directories |
| 600 | rw------- | Private files (SSH keys) |
| 777 | rwxrwxrwx | Full access (avoid!) |

## The chmod Command

\`\`\`bash
# Numeric mode
$ chmod 755 script.sh
$ chmod 644 document.txt

# Symbolic mode - adding permissions
$ chmod u+x script.sh    # add execute for user
$ chmod g+w file.txt     # add write for group
$ chmod o-r file.txt     # remove read for others
$ chmod a+r file.txt     # add read for all

# Symbolic mode - setting permissions
$ chmod u=rwx,g=rx,o=r file.txt

# Recursive (directories)
$ chmod -R 755 directory/
\`\`\`

## Symbolic Mode Reference

| Symbol | Meaning |
|--------|---------|
| u | User (owner) |
| g | Group |
| o | Others |
| a | All (u+g+o) |
| + | Add permission |
| - | Remove permission |
| = | Set exact permission |

## Special Permissions

\`\`\`bash
# Setuid (4): Run as file owner
$ chmod u+s executable
$ chmod 4755 executable

# Setgid (2): Inherit group ownership
$ chmod g+s directory/
$ chmod 2755 directory/

# Sticky bit (1): Only owner can delete
$ chmod +t /shared/
$ chmod 1777 /shared/
\`\`\`

> 💡 **Tip:** The sticky bit on /tmp prevents users from deleting each other's files!

> ⚠️ **Security Warning:** Avoid 777 permissions - it allows anyone to do anything!
          `},{id:6,title:"Ownership with chown and chgrp",duration:"12 min",content:`
# Managing File Ownership

Every file has an owner and a group. Learn to change them.

## Understanding Ownership

\`\`\`bash
$ ls -l file.txt
-rw-r--r-- 1 john developers 1234 Jan 15 file.txt
              │    │
              │    └── Group owner
              └── User owner
\`\`\`

## The chown Command

Change file owner and/or group:

\`\`\`bash
# Change owner only
$ sudo chown newowner file.txt

# Change owner and group
$ sudo chown newowner:newgroup file.txt

# Change group only (with colon)
$ sudo chown :newgroup file.txt

# Recursive (directories)
$ sudo chown -R john:developers /project/

# Reference another file
$ sudo chown --reference=reference.txt target.txt
\`\`\`

## The chgrp Command

Change group only:

\`\`\`bash
# Change group
$ sudo chgrp developers file.txt

# Recursive
$ sudo chgrp -R webteam /var/www/

# Reference another file
$ sudo chgrp --reference=ref.txt target.txt
\`\`\`

## Practical Examples

\`\`\`bash
# Web server files (Apache/Nginx)
$ sudo chown -R www-data:www-data /var/www/html/

# Shared project directory
$ sudo chown -R :developers /project/
$ sudo chmod -R g+rw /project/

# User home directory
$ sudo chown -R john:john /home/john/

# Application with different owner/group
$ sudo chown root:appgroup /opt/myapp/
$ sudo chmod 750 /opt/myapp/
\`\`\`

## Working with Groups

\`\`\`bash
# List your groups
$ groups
john sudo developers docker

# List another user's groups
$ groups jane

# Add user to group
$ sudo usermod -aG docker john

# Create new group
$ sudo groupadd projectteam

# Remove user from group
$ sudo gpasswd -d john docker
\`\`\`

## The newgrp Command

Temporarily switch primary group:

\`\`\`bash
# Switch to different group
$ newgrp developers

# Files created now will have 'developers' group
$ touch newfile.txt
$ ls -l newfile.txt
-rw-r--r-- 1 john developers 0 Jan 15 newfile.txt
\`\`\`

## Default Permissions: umask

\`\`\`bash
# View current umask
$ umask
0022

# Files: 666 - 022 = 644 (rw-r--r--)
# Dirs:  777 - 022 = 755 (rwxr-xr-x)

# Set umask
$ umask 027
# Files: 666 - 027 = 640 (rw-r-----)
# Dirs:  777 - 027 = 750 (rwxr-x---)

# View symbolically
$ umask -S
u=rwx,g=rx,o=
\`\`\`

## Common Scenarios

| Scenario | Commands |
|----------|----------|
| Personal files | \`chmod 600 file\` |
| Shared read | \`chmod 644 file\` |
| Shared write | \`chmod 664 file\` & same group |
| Web files | \`chown www-data:www-data\` |
| Scripts | \`chmod 755 script.sh\` |

> 💡 **Tip:** Add yourself to necessary groups and log out/in for changes to take effect.

> ⚠️ **Warning:** Only root can change file ownership. You need sudo!
          `}]},{id:4,title:"Text Processing",description:"Master grep, sed, awk and other text manipulation tools",lessons:[{id:7,title:"Searching with grep",duration:"18 min",content:`
# Searching Text with grep

grep (Global Regular Expression Print) is essential for text searching.

## Basic grep Usage

\`\`\`bash
# Search for pattern in file
$ grep "error" logfile.txt

# Case insensitive
$ grep -i "Error" logfile.txt

# Show line numbers
$ grep -n "error" logfile.txt

# Count matches
$ grep -c "error" logfile.txt

# Show only filenames with matches
$ grep -l "error" *.log

# Recursive search in directories
$ grep -r "TODO" /project/src/

# Invert match (lines NOT matching)
$ grep -v "debug" logfile.txt
\`\`\`

## Useful grep Options

| Option | Description |
|--------|-------------|
| \`-i\` | Case insensitive |
| \`-n\` | Show line numbers |
| \`-c\` | Count matches only |
| \`-l\` | List filenames only |
| \`-L\` | List files without match |
| \`-v\` | Invert match |
| \`-r\` | Recursive search |
| \`-w\` | Match whole words |
| \`-x\` | Match whole lines |
| \`-A n\` | Show n lines after |
| \`-B n\` | Show n lines before |
| \`-C n\` | Show n lines context |

## Context Options

\`\`\`bash
# Show 3 lines after match
$ grep -A 3 "error" logfile.txt

# Show 2 lines before match
$ grep -B 2 "error" logfile.txt

# Show 2 lines before and after
$ grep -C 2 "error" logfile.txt
\`\`\`

## Regular Expressions

\`\`\`bash
# Basic patterns
$ grep "^Error" file.txt      # starts with Error
$ grep "error$" file.txt      # ends with error
$ grep "^$" file.txt          # empty lines
$ grep "colou*r" file.txt     # color or colour

# Extended regex (-E or egrep)
$ grep -E "error|warning" file.txt    # OR
$ grep -E "[0-9]{3}" file.txt         # 3 digits
$ grep -E "https?://" file.txt        # http or https

# Perl regex (-P)
$ grep -P "\\d{3}-\\d{4}" file.txt    # phone pattern
\`\`\`

## Common Patterns

| Pattern | Matches |
|---------|---------|
| \`.\` | Any single character |
| \`*\` | Zero or more of previous |
| \`+\` | One or more of previous |
| \`?\` | Zero or one of previous |
| \`[abc]\` | Any of a, b, c |
| \`[0-9]\` | Any digit |
| \`[a-z]\` | Any lowercase letter |
| \`^\` | Start of line |
| \`$\` | End of line |
| \`\\b\` | Word boundary |

## Practical Examples

\`\`\`bash
# Find IP addresses
$ grep -E "\\b[0-9]{1,3}(\\.[0-9]{1,3}){3}\\b" access.log

# Find email addresses
$ grep -E "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}" file.txt

# Find error lines with timestamp
$ grep -E "^[0-9]{4}-[0-9]{2}-[0-9]{2}.*ERROR" app.log

# Search code for function definitions
$ grep -rn "function.*(" --include="*.js" src/

# Find TODO comments
$ grep -rn "TODO\\|FIXME\\|XXX" --include="*.py" .

# Exclude directories
$ grep -r "pattern" --exclude-dir={node_modules,.git} .
\`\`\`

## Piping with grep

\`\`\`bash
# Filter command output
$ ps aux | grep nginx
$ history | grep ssh
$ cat /var/log/syslog | grep -i error

# Chain grep commands
$ grep "error" log.txt | grep -v "timeout" | grep "server"
\`\`\`

> 💡 **Tip:** Use \`grep -o\` to show only the matching part, not the whole line!
          `},{id:8,title:"Stream Editing with sed and awk",duration:"25 min",content:`
# Text Transformation with sed and awk

sed and awk are powerful stream editors for text manipulation.

## sed Basics

sed (Stream EDitor) transforms text line by line:

\`\`\`bash
# Basic substitution
$ sed 's/old/new/' file.txt           # first occurrence per line
$ sed 's/old/new/g' file.txt          # all occurrences (global)
$ sed 's/old/new/gi' file.txt         # global, case insensitive

# Edit file in place
$ sed -i 's/old/new/g' file.txt

# Backup before editing
$ sed -i.bak 's/old/new/g' file.txt

# Multiple substitutions
$ sed -e 's/old/new/g' -e 's/foo/bar/g' file.txt
\`\`\`

## sed Addressing

\`\`\`bash
# Specific line number
$ sed '5s/old/new/' file.txt          # only line 5

# Line range
$ sed '1,10s/old/new/g' file.txt      # lines 1-10

# From line to end
$ sed '5,$s/old/new/g' file.txt       # line 5 to end

# Pattern matching
$ sed '/error/s/old/new/' file.txt    # lines containing "error"

# Delete lines
$ sed '5d' file.txt                   # delete line 5
$ sed '1,3d' file.txt                 # delete lines 1-3
$ sed '/pattern/d' file.txt           # delete matching lines

# Print specific lines
$ sed -n '5p' file.txt                # print only line 5
$ sed -n '1,10p' file.txt             # print lines 1-10
\`\`\`

## sed Advanced

\`\`\`bash
# Capture groups
$ sed 's/\\(.*\\)@\\(.*\\)/User: \\1, Domain: \\2/' emails.txt

# Insert and append
$ sed '3i\\New line before 3' file.txt
$ sed '3a\\New line after 3' file.txt

# Replace entire line
$ sed '5c\\Replacement line' file.txt

# Multiple commands
$ sed '{
  s/foo/bar/g
  s/old/new/g
  /delete/d
}' file.txt
\`\`\`

## awk Basics

awk is a pattern scanning and processing language:

\`\`\`bash
# Print specific columns
$ awk '{print $1}' file.txt           # first column
$ awk '{print $1, $3}' file.txt       # first and third
$ awk '{print $NF}' file.txt          # last column

# Custom field separator
$ awk -F':' '{print $1}' /etc/passwd
$ awk -F',' '{print $2}' data.csv

# Print with formatting
$ awk '{printf "%-10s %s\\n", $1, $2}' file.txt
\`\`\`

## awk Built-in Variables

| Variable | Meaning |
|----------|---------|
| \`$0\` | Entire line |
| \`$1, $2...\` | Field 1, 2, etc. |
| \`NF\` | Number of fields |
| \`NR\` | Record (line) number |
| \`FS\` | Field separator |
| \`OFS\` | Output field separator |
| \`RS\` | Record separator |

## awk Patterns and Conditions

\`\`\`bash
# Pattern matching
$ awk '/error/' file.txt              # lines with "error"
$ awk '!/error/' file.txt             # lines without "error"

# Conditions
$ awk '$3 > 100' file.txt             # third field > 100
$ awk 'NR > 1' file.txt               # skip header row
$ awk 'NF > 0' file.txt               # non-empty lines

# BEGIN and END blocks
$ awk 'BEGIN {print "Start"} {print} END {print "Done"}' file.txt

# Sum a column
$ awk '{sum += $1} END {print sum}' numbers.txt

# Average
$ awk '{sum += $1; count++} END {print sum/count}' numbers.txt
\`\`\`

## Practical Examples

\`\`\`bash
# Extract usernames from /etc/passwd
$ awk -F':' '{print $1}' /etc/passwd

# Process log files
$ awk '/ERROR/ {print $1, $2, $NF}' app.log

# Sum file sizes
$ ls -l | awk '{sum += $5} END {print "Total:", sum}'

# CSV processing
$ awk -F',' 'NR>1 {sum += $3} END {print "Total:", sum}' sales.csv

# Unique values
$ awk '{a[$1]++} END {for (k in a) print k, a[k]}' file.txt

# Replace in place (using temp file)
$ awk '{gsub(/old/, "new"); print}' file.txt > tmp && mv tmp file.txt
\`\`\`

> 💡 **Tip:** Use \`sed\` for simple substitutions, \`awk\` for column-based processing!
          `}]},{id:5,title:"Bash Scripting",description:"Write powerful shell scripts to automate tasks",lessons:[{id:9,title:"Script Fundamentals",duration:"22 min",content:`
# Bash Scripting Fundamentals

Automate tasks with shell scripts.

## Creating Your First Script

\`\`\`bash
#!/bin/bash
# This is a comment
# my_script.sh - A simple script

echo "Hello, World!"
\`\`\`

\`\`\`bash
# Make it executable
$ chmod +x my_script.sh

# Run it
$ ./my_script.sh
Hello, World!
\`\`\`

## The Shebang

The first line tells the system which interpreter to use:

\`\`\`bash
#!/bin/bash      # Bash shell
#!/bin/sh        # POSIX shell
#!/usr/bin/env bash   # Portable way to find bash
#!/usr/bin/python3    # Python script
\`\`\`

## Variables

\`\`\`bash
#!/bin/bash

# Assign variables (no spaces around =)
name="John"
count=42
today=$(date +%Y-%m-%d)

# Use variables
echo "Hello, $name"
echo "Today is $today"
echo "Count: $count"

# Curly braces for clarity
echo "File: \${name}_backup.txt"

# Read-only variable
readonly PI=3.14159

# Unset variable
unset count
\`\`\`

## Special Variables

| Variable | Meaning |
|----------|---------|
| \`$0\` | Script name |
| \`$1, $2...\` | Arguments 1, 2, etc. |
| \`$#\` | Number of arguments |
| \`$@\` | All arguments as separate strings |
| \`$*\` | All arguments as one string |
| \`$?\` | Exit status of last command |
| \`$$\` | Current script PID |
| \`$!\` | PID of last background command |

## User Input

\`\`\`bash
#!/bin/bash

# Read input
echo "What is your name?"
read name
echo "Hello, $name!"

# Read with prompt
read -p "Enter your age: " age

# Read password (hidden)
read -sp "Enter password: " password
echo  # newline

# Read with timeout
read -t 5 -p "Quick! Enter something: " response

# Read into array
read -a colors -p "Enter colors: "
echo "First color: \${colors[0]}"
\`\`\`

## Command Line Arguments

\`\`\`bash
#!/bin/bash
# greet.sh

if [ $# -eq 0 ]; then
    echo "Usage: $0 <name>"
    exit 1
fi

echo "Hello, $1!"
echo "You passed $# arguments"

# Loop through all arguments
for arg in "$@"; do
    echo "Arg: $arg"
done
\`\`\`

## Exit Codes

\`\`\`bash
#!/bin/bash

# 0 = success, non-zero = error
if some_command; then
    echo "Success"
    exit 0
else
    echo "Failed"
    exit 1
fi

# Check last command status
some_command
if [ $? -eq 0 ]; then
    echo "Command succeeded"
fi
\`\`\`

## Script Template

\`\`\`bash
#!/bin/bash
# ===========================================
# Script Name: backup.sh
# Description: Backup important files
# Author: Your Name
# Date: 2024-01-15
# ===========================================

set -e          # Exit on error
set -u          # Error on undefined variable
set -o pipefail # Pipeline fails on any error

# Variables
BACKUP_DIR="/backup"
DATE=$(date +%Y%m%d)

# Functions
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Main
log "Starting backup..."
# Your code here
log "Backup complete!"
\`\`\`

> 💡 **Tip:** Always use \`set -e\` to stop on errors and \`set -u\` to catch typos!
          `},{id:10,title:"Control Structures and Functions",duration:"25 min",content:`
# Control Structures and Functions

Master conditionals, loops, and functions in Bash.

## If Statements

\`\`\`bash
#!/bin/bash

# Basic if
if [ "$name" = "John" ]; then
    echo "Hello John!"
fi

# If-else
if [ $count -gt 10 ]; then
    echo "Count is greater than 10"
else
    echo "Count is 10 or less"
fi

# If-elif-else
if [ $score -ge 90 ]; then
    grade="A"
elif [ $score -ge 80 ]; then
    grade="B"
elif [ $score -ge 70 ]; then
    grade="C"
else
    grade="F"
fi
\`\`\`

## Test Operators

### String Comparisons
| Operator | Meaning |
|----------|---------|
| \`=\` or \`==\` | Equal |
| \`!=\` | Not equal |
| \`-z\` | Empty string |
| \`-n\` | Non-empty string |

### Numeric Comparisons
| Operator | Meaning |
|----------|---------|
| \`-eq\` | Equal |
| \`-ne\` | Not equal |
| \`-gt\` | Greater than |
| \`-ge\` | Greater or equal |
| \`-lt\` | Less than |
| \`-le\` | Less or equal |

### File Tests
| Operator | Meaning |
|----------|---------|
| \`-e\` | Exists |
| \`-f\` | Is regular file |
| \`-d\` | Is directory |
| \`-r\` | Is readable |
| \`-w\` | Is writable |
| \`-x\` | Is executable |
| \`-s\` | Has size > 0 |

## Example Tests

\`\`\`bash
# File checks
if [ -f "/etc/passwd" ]; then
    echo "File exists"
fi

if [ -d "$HOME/Documents" ]; then
    echo "Directory exists"
fi

if [ ! -e "$file" ]; then
    echo "File does not exist"
fi

# Multiple conditions
if [ -f "$file" ] && [ -r "$file" ]; then
    echo "File exists and is readable"
fi

if [ "$a" = "x" ] || [ "$a" = "y" ]; then
    echo "a is x or y"
fi
\`\`\`

## For Loops

\`\`\`bash
# Loop through list
for fruit in apple banana orange; do
    echo "Fruit: $fruit"
done

# Loop through files
for file in *.txt; do
    echo "Processing $file"
done

# C-style for loop
for ((i=1; i<=5; i++)); do
    echo "Number: $i"
done

# Loop through arguments
for arg in "$@"; do
    echo "Argument: $arg"
done

# Loop through range
for i in {1..10}; do
    echo $i
done

# Range with step
for i in {0..100..10}; do
    echo $i  # 0, 10, 20, ...
done
\`\`\`

## While and Until Loops

\`\`\`bash
# While loop
count=1
while [ $count -le 5 ]; do
    echo "Count: $count"
    ((count++))
done

# Until loop (opposite of while)
count=1
until [ $count -gt 5 ]; do
    echo "Count: $count"
    ((count++))
done

# Read file line by line
while IFS= read -r line; do
    echo "Line: $line"
done < file.txt

# Infinite loop
while true; do
    echo "Press Ctrl+C to stop"
    sleep 1
done
\`\`\`

## Case Statements

\`\`\`bash
case "$1" in
    start)
        echo "Starting..."
        ;;
    stop)
        echo "Stopping..."
        ;;
    restart)
        echo "Restarting..."
        ;;
    *)
        echo "Usage: $0 {start|stop|restart}"
        exit 1
        ;;
esac
\`\`\`

## Functions

\`\`\`bash
#!/bin/bash

# Define function
greet() {
    echo "Hello, $1!"
}

# Function with return value
add() {
    local result=$(( $1 + $2 ))
    echo $result
}

# Function with local variables
process_file() {
    local filename=$1
    local count=$(wc -l < "$filename")
    echo "File $filename has $count lines"
}

# Call functions
greet "World"
sum=$(add 5 3)
echo "Sum: $sum"
process_file "data.txt"
\`\`\`

## Error Handling

\`\`\`bash
#!/bin/bash
set -e  # Exit on error

# Custom error handler
trap 'echo "Error on line $LINENO"; exit 1' ERR

# Function with error handling
safe_cd() {
    cd "$1" || { echo "Failed to cd to $1"; exit 1; }
}

# Check command success
if ! command -v git &> /dev/null; then
    echo "git is not installed"
    exit 1
fi
\`\`\`

> 💡 **Tip:** Always quote variables: \`"$var"\` prevents word splitting issues!
          `}]},{id:6,title:"Process Management",description:"Monitor and control running processes",lessons:[{id:11,title:"Viewing Processes with ps and top",duration:"18 min",content:`
# Viewing and Monitoring Processes

Learn to see what's running on your system.

## The ps Command

\`\`\`bash
# Basic - your processes
$ ps
  PID TTY          TIME CMD
 1234 pts/0    00:00:00 bash
 5678 pts/0    00:00:00 ps

# All processes (BSD style)
$ ps aux
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.1 225816  9324 ?        Ss   Jan10   0:03 /sbin/init
...

# All processes (Unix style)
$ ps -ef
UID        PID  PPID  C STIME TTY          TIME CMD
root         1     0  0 Jan10 ?        00:00:03 /sbin/init
...
\`\`\`

## Understanding ps Output

| Column | Meaning |
|--------|---------|
| PID | Process ID |
| PPID | Parent Process ID |
| %CPU | CPU usage |
| %MEM | Memory usage |
| VSZ | Virtual memory size |
| RSS | Resident memory size |
| TTY | Terminal |
| STAT | Process state |
| TIME | CPU time used |
| COMMAND | Command name |

## Process States

| State | Meaning |
|-------|---------|
| R | Running |
| S | Sleeping (interruptible) |
| D | Sleeping (uninterruptible) |
| T | Stopped |
| Z | Zombie |
| < | High priority |
| N | Low priority |
| s | Session leader |
| + | Foreground process |

## Useful ps Commands

\`\`\`bash
# Find specific process
$ ps aux | grep nginx

# Show process tree
$ ps auxf
$ pstree

# Show only specific columns
$ ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem

# Top 10 memory consumers
$ ps aux --sort=-%mem | head -11

# Top 10 CPU consumers
$ ps aux --sort=-%cpu | head -11

# Show threads
$ ps -eLf
\`\`\`

## The top Command

Real-time process viewer:

\`\`\`bash
$ top
\`\`\`

### top Interface

\`\`\`
top - 10:30:00 up 5 days,  2:00,  1 user,  load average: 0.50, 0.35, 0.25
Tasks: 256 total,   1 running, 255 sleeping,   0 stopped,   0 zombie
%Cpu(s):  2.5 us,  1.0 sy,  0.0 ni, 96.0 id,  0.5 wa,  0.0 hi,  0.0 si
MiB Mem :  16000.0 total,   8000.0 free,   4000.0 used,   4000.0 cache
MiB Swap:   2000.0 total,   2000.0 free,      0.0 used.  11000.0 avail

  PID USER      %CPU %MEM    TIME+  COMMAND
 1234 user      25.0  5.0   1:30.00 chrome
 ...
\`\`\`

### top Keyboard Shortcuts

| Key | Action |
|-----|--------|
| q | Quit |
| k | Kill process |
| r | Renice process |
| M | Sort by memory |
| P | Sort by CPU |
| T | Sort by time |
| c | Toggle command line |
| 1 | Toggle per-CPU stats |
| h | Help |

## Better Alternatives

\`\`\`bash
# htop - colorful, interactive
$ htop

# btop - modern, beautiful
$ btop

# glances - comprehensive monitoring
$ glances
\`\`\`

## Load Average

The three numbers show system load for:
- Last 1 minute
- Last 5 minutes  
- Last 15 minutes

\`\`\`bash
# View load average
$ uptime
10:30:00 up 5 days, 2:00, 1 user, load average: 0.50, 0.35, 0.25

$ cat /proc/loadavg
0.50 0.35 0.25 1/256 12345
\`\`\`

> 💡 **Tip:** Load average should typically stay below your CPU core count. Use \`nproc\` to check cores.

> ⚠️ **Warning:** High load (>2x cores) indicates system stress. Investigate with top/htop.
          `},{id:12,title:"Controlling Processes",duration:"15 min",content:`
# Controlling Processes

Start, stop, and manage running processes.

## Background and Foreground

\`\`\`bash
# Run in background
$ long_command &
[1] 12345

# List background jobs
$ jobs
[1]+  Running    long_command &

# Bring to foreground
$ fg %1

# Send to background (after Ctrl+Z)
$ bg %1

# Suspend current process
$ Ctrl+Z
[1]+  Stopped    long_command
\`\`\`

## The kill Command

\`\`\`bash
# Kill by PID
$ kill 12345

# Force kill
$ kill -9 12345

# Kill by name
$ killall firefox
$ pkill chrome

# Kill all user processes
$ pkill -u username
\`\`\`

## Common Signals

| Signal | Number | Action |
|--------|--------|--------|
| SIGHUP | 1 | Hangup/reload |
| SIGINT | 2 | Interrupt (Ctrl+C) |
| SIGQUIT | 3 | Quit |
| SIGKILL | 9 | Force kill (cannot ignore) |
| SIGTERM | 15 | Terminate (default) |
| SIGSTOP | 19 | Stop (cannot ignore) |
| SIGCONT | 18 | Continue |

\`\`\`bash
# Send specific signal
$ kill -SIGHUP 12345    # Reload config
$ kill -SIGSTOP 12345   # Pause process
$ kill -SIGCONT 12345   # Resume process

# List all signals
$ kill -l
\`\`\`

## Process Priority (nice)

Priority ranges from -20 (highest) to 19 (lowest).

\`\`\`bash
# Run with lower priority
$ nice -n 10 long_command

# Run with higher priority (requires root)
$ sudo nice -n -10 important_command

# Change running process priority
$ renice 10 -p 12345
$ sudo renice -10 -p 12345
\`\`\`

## The nohup Command

Keep processes running after logout:

\`\`\`bash
# Run immune to hangups
$ nohup long_command &
nohup: ignoring input and appending output to 'nohup.out'

# With custom output
$ nohup long_command > output.log 2>&1 &

# Disown a running job
$ long_command &
$ disown %1
\`\`\`

## Screen and tmux

Terminal multiplexers for persistent sessions:

\`\`\`bash
# Start new screen session
$ screen -S mysession

# Detach: Ctrl+A, then D

# List sessions
$ screen -ls

# Reattach
$ screen -r mysession

# tmux equivalents
$ tmux new -s mysession
$ tmux ls
$ tmux attach -t mysession
\`\`\`

## System Services (systemd)

\`\`\`bash
# Service status
$ sudo systemctl status nginx

# Start/stop/restart
$ sudo systemctl start nginx
$ sudo systemctl stop nginx
$ sudo systemctl restart nginx
$ sudo systemctl reload nginx

# Enable/disable at boot
$ sudo systemctl enable nginx
$ sudo systemctl disable nginx

# List all services
$ systemctl list-units --type=service

# View service logs
$ journalctl -u nginx
$ journalctl -u nginx -f  # follow
\`\`\`

## Practical Examples

\`\`\`bash
# Kill all zombie processes
$ ps aux | awk '$8=="Z" {print $2}' | xargs -r kill -9

# Find and kill process using port
$ lsof -ti:8080 | xargs kill

# Monitor specific process
$ watch -n 1 'ps aux | grep nginx'

# Wait for process to finish
$ wait $PID

# Run command with timeout
$ timeout 60 long_command
\`\`\`

> 💡 **Tip:** Always try \`kill\` (SIGTERM) before \`kill -9\` (SIGKILL) to allow graceful shutdown.

> ⚠️ **Warning:** \`kill -9\` doesn't allow cleanup - use only as last resort!
          `}]},{id:7,title:"Networking Commands",description:"Essential networking tools for diagnostics and transfers",lessons:[{id:13,title:"Network Diagnostics",duration:"20 min",content:`
# Network Diagnostics

Essential commands for network troubleshooting.

## Checking Connectivity

\`\`\`bash
# Ping host
$ ping google.com
PING google.com (142.250.80.46) 56(84) bytes of data.
64 bytes from 142.250.80.46: icmp_seq=1 ttl=117 time=12.3 ms

# Ping with count
$ ping -c 4 google.com

# Ping with interval
$ ping -i 0.5 google.com
\`\`\`

## Network Interfaces

\`\`\`bash
# Show all interfaces
$ ip addr
$ ip a

# Show specific interface
$ ip addr show eth0

# Show routing table
$ ip route
$ ip r

# Old commands (still work)
$ ifconfig
$ route -n
\`\`\`

## DNS Lookups

\`\`\`bash
# Basic lookup
$ nslookup google.com
$ host google.com
$ dig google.com

# Detailed dig
$ dig google.com +short
142.250.80.46

$ dig google.com MX    # Mail servers
$ dig google.com NS    # Name servers
$ dig google.com ANY   # All records

# Reverse lookup
$ dig -x 8.8.8.8
$ host 8.8.8.8
\`\`\`

## Tracing Routes

\`\`\`bash
# Trace route
$ traceroute google.com
traceroute to google.com (142.250.80.46), 30 hops max
 1  router (192.168.1.1)  1.234 ms
 2  isp-gateway  10.123 ms
 ...

# Using ICMP (like Windows)
$ traceroute -I google.com

# Modern alternative
$ mtr google.com
\`\`\`

## Port Checking

\`\`\`bash
# Check if port is open
$ nc -zv google.com 443
Connection to google.com 443 port [tcp/https] succeeded!

# Check multiple ports
$ nc -zv host.com 80 443 8080

# Netstat - show listening ports
$ netstat -tlnp
$ netstat -tulnp  # include UDP

# ss - modern replacement
$ ss -tlnp
$ ss -tulnp
\`\`\`

## ss Command Options

| Option | Meaning |
|--------|---------|
| -t | TCP |
| -u | UDP |
| -l | Listening |
| -n | Numeric (don't resolve) |
| -p | Show process |
| -a | All sockets |

## Network Statistics

\`\`\`bash
# Connection statistics
$ ss -s
Total: 234
TCP:   45 (estab 12, closed 8, orphaned 0, timewait 5)

# Active connections
$ ss -tn state established

# Connections to specific port
$ ss -tn dst :443

# Who's connected to my server
$ ss -tn src :22
\`\`\`

## Checking Open Ports/Connections

\`\`\`bash
# What's listening on which port
$ sudo lsof -i -P -n | grep LISTEN
$ sudo lsof -i :80

# Find process using port
$ sudo lsof -ti :8080
$ sudo fuser 8080/tcp
\`\`\`

## Testing HTTP

\`\`\`bash
# Quick check
$ curl -I https://google.com  # headers only
$ curl -s -o /dev/null -w "%{http_code}" https://google.com

# Full request
$ curl -v https://api.example.com

# POST request
$ curl -X POST -d "data=value" https://api.example.com

# With headers
$ curl -H "Authorization: Bearer token" https://api.example.com
\`\`\`

## Downloading

\`\`\`bash
# wget - download file
$ wget https://example.com/file.zip

# Resume interrupted download
$ wget -c https://example.com/large-file.zip

# Download to specific name
$ wget -O myfile.zip https://example.com/file.zip

# curl download
$ curl -O https://example.com/file.zip
$ curl -o myfile.zip https://example.com/file.zip
\`\`\`

> 💡 **Tip:** Use \`mtr\` instead of \`traceroute\` - it combines ping and traceroute with real-time updates!
          `},{id:14,title:"SSH and Remote Connections",duration:"18 min",content:`
# SSH and Remote Connections

Secure Shell (SSH) for remote access.

## Basic SSH

\`\`\`bash
# Connect to remote server
$ ssh user@hostname
$ ssh user@192.168.1.100

# Specify port
$ ssh -p 2222 user@hostname

# Verbose (debugging)
$ ssh -v user@hostname
\`\`\`

## SSH Keys

\`\`\`bash
# Generate SSH key pair
$ ssh-keygen -t ed25519 -C "your_email@example.com"
# or RSA
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Copy public key to server
$ ssh-copy-id user@hostname

# Or manually
$ cat ~/.ssh/id_ed25519.pub | ssh user@hostname 'cat >> ~/.ssh/authorized_keys'
\`\`\`

## SSH Config File

Create \`~/.ssh/config\` for shortcuts:

\`\`\`
# ~/.ssh/config
Host myserver
    HostName 192.168.1.100
    User admin
    Port 22
    IdentityFile ~/.ssh/id_ed25519

Host production
    HostName prod.example.com
    User deploy
    Port 2222

Host *
    ServerAliveInterval 60
    ServerAliveCountMax 3
\`\`\`

Now connect with: \`ssh myserver\`

## Running Remote Commands

\`\`\`bash
# Execute single command
$ ssh user@host "ls -la"

# Execute multiple commands
$ ssh user@host "cd /var/log && tail -100 syslog"

# Run local script remotely
$ ssh user@host 'bash -s' < local_script.sh
\`\`\`

## File Transfer with SCP

\`\`\`bash
# Copy to remote
$ scp file.txt user@host:/path/to/destination/

# Copy from remote
$ scp user@host:/path/to/file.txt ./

# Copy directory
$ scp -r directory/ user@host:/path/

# Specify port
$ scp -P 2222 file.txt user@host:/path/
\`\`\`

## File Transfer with rsync

\`\`\`bash
# Sync to remote
$ rsync -avz local/ user@host:/remote/

# Sync from remote
$ rsync -avz user@host:/remote/ local/

# Dry run (show what would happen)
$ rsync -avzn local/ user@host:/remote/

# Delete files not in source
$ rsync -avz --delete local/ user@host:/remote/

# Exclude files
$ rsync -avz --exclude='*.log' local/ user@host:/remote/
\`\`\`

## rsync Options

| Option | Meaning |
|--------|---------|
| -a | Archive mode (preserves everything) |
| -v | Verbose |
| -z | Compress during transfer |
| -P | Show progress + partial transfers |
| -n | Dry run |
| --delete | Delete extra files at destination |

## SSH Tunneling

\`\`\`bash
# Local port forwarding
# Access remote_host:3306 via localhost:3306
$ ssh -L 3306:localhost:3306 user@remote_host

# Remote port forwarding
# Make local :8080 available on remote :9090
$ ssh -R 9090:localhost:8080 user@remote_host

# Dynamic (SOCKS proxy)
$ ssh -D 8080 user@remote_host
# Configure browser to use localhost:8080 as SOCKS proxy
\`\`\`

## SSH Agent

\`\`\`bash
# Start agent
$ eval "$(ssh-agent -s)"

# Add key
$ ssh-add ~/.ssh/id_ed25519

# List keys
$ ssh-add -l

# Forward agent to remote
$ ssh -A user@host
\`\`\`

## Security Best Practices

\`\`\`bash
# Secure permissions
$ chmod 700 ~/.ssh
$ chmod 600 ~/.ssh/id_ed25519
$ chmod 644 ~/.ssh/id_ed25519.pub
$ chmod 600 ~/.ssh/config

# Disable password auth (in /etc/ssh/sshd_config)
PasswordAuthentication no
PermitRootLogin no
\`\`\`

> 💡 **Tip:** Use \`rsync\` over \`scp\` for large transfers - it's faster and can resume!

> ⚠️ **Security:** Never share private keys. Use \`ssh-keygen -p\` to add passphrase.
          `}]},{id:8,title:"Package Management",description:"Install, update, and manage software packages",lessons:[{id:15,title:"Debian/Ubuntu Package Management (apt)",duration:"15 min",content:`
# Debian/Ubuntu Package Management

APT (Advanced Package Tool) for Debian-based systems.

## Updating Package Lists

\`\`\`bash
# Update package list (always do this first!)
$ sudo apt update

# Upgrade installed packages
$ sudo apt upgrade

# Full upgrade (handles dependencies better)
$ sudo apt full-upgrade

# Update and upgrade together
$ sudo apt update && sudo apt upgrade -y
\`\`\`

## Installing Packages

\`\`\`bash
# Install package
$ sudo apt install nginx

# Install multiple packages
$ sudo apt install nginx mysql-server php

# Install without prompts
$ sudo apt install -y package-name

# Install specific version
$ sudo apt install nginx=1.18.0-0ubuntu1

# Install from .deb file
$ sudo dpkg -i package.deb
$ sudo apt install -f  # fix dependencies
\`\`\`

## Removing Packages

\`\`\`bash
# Remove package (keep config)
$ sudo apt remove nginx

# Remove package and config
$ sudo apt purge nginx

# Remove unused dependencies
$ sudo apt autoremove

# Clean package cache
$ sudo apt autoclean
$ sudo apt clean
\`\`\`

## Searching and Info

\`\`\`bash
# Search for packages
$ apt search nginx
$ apt-cache search "web server"

# Show package info
$ apt show nginx

# List installed packages
$ apt list --installed

# List upgradable
$ apt list --upgradable

# Check if installed
$ dpkg -l nginx
\`\`\`

## Managing Repositories

\`\`\`bash
# Add PPA
$ sudo add-apt-repository ppa:nginx/stable
$ sudo apt update

# Remove PPA
$ sudo add-apt-repository --remove ppa:nginx/stable

# List repositories
$ cat /etc/apt/sources.list
$ ls /etc/apt/sources.list.d/

# Add GPG key
$ wget -qO - https://example.com/key.gpg | sudo apt-key add -
\`\`\`

## Useful Commands

\`\`\`bash
# Which package provides a file
$ dpkg -S /usr/bin/vim
$ apt-file search /usr/bin/vim

# List files in package
$ dpkg -L nginx

# Reconfigure package
$ sudo dpkg-reconfigure tzdata

# Hold package version
$ sudo apt-mark hold nginx
$ sudo apt-mark unhold nginx

# Show held packages
$ apt-mark showhold
\`\`\`

## Package Cache Locations

| Path | Purpose |
|------|---------|
| /var/cache/apt/archives/ | Downloaded .deb files |
| /var/lib/apt/lists/ | Package lists |
| /var/lib/dpkg/status | Installed package database |

## Practical Examples

\`\`\`bash
# Full system update
$ sudo apt update && sudo apt full-upgrade -y && sudo apt autoremove -y

# Find large installed packages
$ dpkg-query -W --showformat='\${Installed-Size;10}\\t\${Package}\\n' | sort -k1,1n | tail -20

# List manually installed packages
$ apt-mark showmanual

# Check broken packages
$ sudo apt --fix-broken install
\`\`\`

> 💡 **Tip:** Run \`sudo apt update\` before installing anything to ensure latest package info!

> ⚠️ **Warning:** Be careful with PPAs - they're third-party and may conflict with system packages.
          `},{id:16,title:"RHEL/CentOS Package Management (yum/dnf)",duration:"15 min",content:`
# RHEL/CentOS Package Management

YUM and DNF for Red Hat-based systems.

## DNF vs YUM

- **YUM** (Yellowdog Updater Modified) - older, still works
- **DNF** (Dandified YUM) - modern replacement (RHEL 8+, Fedora)

Most commands are identical - just replace \`yum\` with \`dnf\`.

## Updating System

\`\`\`bash
# Check for updates
$ sudo dnf check-update

# Update all packages
$ sudo dnf update
$ sudo dnf update -y  # no prompts

# Update specific package
$ sudo dnf update nginx

# Upgrade (same as update in dnf)
$ sudo dnf upgrade
\`\`\`

## Installing Packages

\`\`\`bash
# Install package
$ sudo dnf install nginx

# Install multiple
$ sudo dnf install nginx mariadb php

# Install from local RPM
$ sudo dnf install ./package.rpm

# Install from URL
$ sudo dnf install https://example.com/package.rpm

# Reinstall package
$ sudo dnf reinstall nginx
\`\`\`

## Removing Packages

\`\`\`bash
# Remove package
$ sudo dnf remove nginx

# Remove with dependencies
$ sudo dnf autoremove nginx

# Clean unused dependencies
$ sudo dnf autoremove

# Clean cache
$ sudo dnf clean all
$ sudo dnf clean packages
$ sudo dnf clean metadata
\`\`\`

## Searching and Info

\`\`\`bash
# Search packages
$ dnf search nginx
$ dnf search all "web server"

# Package info
$ dnf info nginx

# List installed
$ dnf list installed

# List available
$ dnf list available

# List updates available
$ dnf list updates

# What provides a file
$ dnf provides /usr/bin/vim
$ dnf provides "*/bin/vim"
\`\`\`

## Managing Repositories

\`\`\`bash
# List repositories
$ dnf repolist
$ dnf repolist all  # including disabled

# Enable/disable repo
$ sudo dnf config-manager --enable epel
$ sudo dnf config-manager --disable epel

# Add repository
$ sudo dnf config-manager --add-repo https://example.com/repo.repo

# Install EPEL (Extra Packages)
$ sudo dnf install epel-release
\`\`\`

## Package Groups

\`\`\`bash
# List available groups
$ dnf group list

# Install group
$ sudo dnf group install "Development Tools"
$ sudo dnf groupinstall "Development Tools"

# Remove group
$ sudo dnf group remove "Development Tools"

# Group info
$ dnf group info "Development Tools"
\`\`\`

## History and Rollback

\`\`\`bash
# View history
$ dnf history

# View specific transaction
$ dnf history info 25

# Undo transaction
$ sudo dnf history undo 25

# Rollback to transaction
$ sudo dnf history rollback 20
\`\`\`

## Useful Commands

\`\`\`bash
# List package files
$ rpm -ql nginx

# Find which package owns file
$ rpm -qf /etc/nginx/nginx.conf

# Verify package integrity
$ rpm -V nginx

# Download without installing
$ dnf download nginx
$ dnfdownloader nginx

# List dependencies
$ dnf repoquery --requires nginx
$ dnf repoquery --whatrequires nginx
\`\`\`

## DNF Modules (RHEL 8+)

\`\`\`bash
# List modules
$ dnf module list

# Enable module stream
$ sudo dnf module enable nodejs:16

# Install module
$ sudo dnf module install nodejs:16

# Reset module
$ sudo dnf module reset nodejs
\`\`\`

## Comparison Table

| Task | apt | dnf/yum |
|------|-----|---------|
| Update lists | apt update | dnf check-update |
| Upgrade all | apt upgrade | dnf update |
| Install | apt install pkg | dnf install pkg |
| Remove | apt remove pkg | dnf remove pkg |
| Search | apt search term | dnf search term |
| Info | apt show pkg | dnf info pkg |
| Clean | apt clean | dnf clean all |
| List installed | apt list --installed | dnf list installed |

> 💡 **Tip:** EPEL repository provides many additional packages for RHEL/CentOS!

> ⚠️ **Warning:** On production servers, test updates in staging first and consider using \`dnf history rollback\` for recovery.
          `}]}]};const Od=(...E)=>E.filter((Y,L,h)=>!!Y&&Y.trim()!==""&&h.indexOf(Y)===L).join(" ").trim();const og=E=>E.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const rg=E=>E.replace(/^([A-Z])|[\s-_]+(\w)/g,(Y,L,h)=>h?h.toUpperCase():L.toLowerCase());const Dd=E=>{const Y=rg(E);return Y.charAt(0).toUpperCase()+Y.slice(1)};var dg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const mg=E=>{for(const Y in E)if(Y.startsWith("aria-")||Y==="role"||Y==="title")return!0;return!1};const hg=_e.forwardRef(({color:E="currentColor",size:Y=24,strokeWidth:L=2,absoluteStrokeWidth:h,className:U="",children:V,iconNode:ut,...Tt},O)=>_e.createElement("svg",{ref:O,...dg,width:Y,height:Y,stroke:E,strokeWidth:h?Number(L)*24/Number(Y):L,className:Od("lucide",U),...!V&&!mg(Tt)&&{"aria-hidden":"true"},...Tt},[...ut.map(([z,P])=>_e.createElement(z,P)),...Array.isArray(V)?V:[V]]));const De=(E,Y)=>{const L=_e.forwardRef(({className:h,...U},V)=>_e.createElement(hg,{ref:V,iconNode:Y,className:Od(`lucide-${og(Dd(E))}`,`lucide-${E}`,h),...U}));return L.displayName=Dd(E),L};const gg=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],pg=De("book-open",gg);const yg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Xu=De("chevron-right",yg);const vg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],En=De("circle-check",vg);const bg=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Sg=De("clock",bg);const xg=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Tg=De("house",xg);const zg=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Eg=De("lightbulb",zg);const Ag=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Mg=De("menu",Ag);const _g=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Dg=De("play",_g);const Cg=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Cd=De("smartphone",Cg);const Og=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ng=De("triangle-alert",Og);const Ug=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$g=De("x",Ug);function Rg(){const[E,Y]=_e.useState(!1),[L,h]=_e.useState("home"),[U,V]=_e.useState(null),[ut,Tt]=_e.useState([]);_e.useEffect(()=>{const N=localStorage.getItem("mobile-learning-progress");N&&Tt(JSON.parse(N))},[]);const O=N=>{const H=[...ut,N];Tt(H),localStorage.setItem("mobile-learning-progress",JSON.stringify(H))},z=Me.chapters.reduce((N,H)=>N+H.lessons.length,0),P=Math.round(ut.length/z*100),j=N=>{V(N),h("lesson"),Y(!1),window.scrollTo(0,0)},mt=()=>{if(!U)return null;for(let N=0;N<Me.chapters.length;N++){const H=Me.chapters[N];for(let K=0;K<H.lessons.length;K++)if(H.lessons[K].id===U.id){if(K<H.lessons.length-1)return H.lessons[K+1];if(N<Me.chapters.length-1)return Me.chapters[N+1].lessons[0]}}return null},Gt=()=>{if(!U)return null;for(let N=0;N<Me.chapters.length;N++){const H=Me.chapters[N];for(let K=0;K<H.lessons.length;K++)if(H.lessons[K].id===U.id){if(K>0)return H.lessons[K-1];if(N>0){const $=Me.chapters[N-1];return $.lessons[$.lessons.length-1]}}}return null},Lt=N=>{const H=N.trim().split(`
`),K=[];let $=0,zt=!1,jt=[],te="";for(;$<H.length;){const at=H[$];if(at.startsWith("```")){zt?(K.push(S.jsxs("div",{className:"code-block",children:[S.jsxs("div",{className:"code-header",children:[S.jsx("span",{className:"code-language",children:te}),S.jsx("button",{className:"code-copy",onClick:()=>navigator.clipboard.writeText(jt.join(`
`)),children:"Copy"})]}),S.jsx("div",{className:"code-content",children:S.jsx("pre",{children:jt.join(`
`)})})]},`code-${$}`)),zt=!1):(zt=!0,te=at.slice(3).trim()||"text",jt=[]),$++;continue}if(zt){jt.push(at),$++;continue}if(at.includes("<tip>")){let B=[];for($++;$<H.length&&!H[$].includes("</tip>");)B.push(H[$]),$++;K.push(S.jsxs("div",{className:"tip-box",children:[S.jsxs("div",{className:"tip-box-header",children:[S.jsx(Eg,{size:18}),S.jsx("span",{children:"Pro Tip"})]}),S.jsx("p",{children:B.join(" ").replace("💡 ","")})]},`tip-${$}`)),$++;continue}if(at.includes("<warning>")){let B=[];for($++;$<H.length&&!H[$].includes("</warning>");)B.push(H[$]),$++;K.push(S.jsxs("div",{className:"warning-box",children:[S.jsxs("div",{className:"warning-box-header",children:[S.jsx(Ng,{size:18}),S.jsx("span",{children:"Warning"})]}),S.jsx("p",{children:B.join(" ").replace("⚠️ ","")})]},`warn-${$}`)),$++;continue}if(at.startsWith("## ")){K.push(S.jsx("h2",{children:at.slice(3)},`h2-${$}`)),$++;continue}if(at.startsWith("### ")){K.push(S.jsx("h3",{children:at.slice(4)},`h3-${$}`)),$++;continue}if(at.includes("|")&&H[$+1]?.includes("---")){const B=at.split("|").filter(pt=>pt.trim()).map(pt=>pt.trim());$+=2;const Et=[];for(;$<H.length&&H[$].includes("|");)Et.push(H[$].split("|").filter(pt=>pt.trim()).map(pt=>pt.trim())),$++;K.push(S.jsx("div",{style:{overflowX:"auto",margin:"20px 0"},children:S.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",background:"var(--bg-card)",borderRadius:"12px",overflow:"hidden"},children:[S.jsx("thead",{children:S.jsx("tr",{children:B.map((pt,Ce)=>S.jsx("th",{style:{padding:"12px 16px",textAlign:"left",borderBottom:"1px solid var(--border-color)",color:"var(--accent-primary)"},children:pt},Ce))})}),S.jsx("tbody",{children:Et.map((pt,Ce)=>S.jsx("tr",{children:pt.map((re,Xt)=>S.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--border-color)",color:"var(--text-secondary)"},children:S.jsx("span",{dangerouslySetInnerHTML:{__html:re.replace(/\*\*(.*?)\*\*/g,'<strong style="color:var(--text-primary)">$1</strong>').replace(/`(.*?)`/g,'<code style="background:rgba(139,92,246,0.1);padding:2px 6px;border-radius:4px;font-size:13px">$1</code>')}})},Xt))},Ce))})]})},`table-${$}`));continue}if(at.startsWith("- ")||at.startsWith("* ")){const B=[];for(;$<H.length&&(H[$].startsWith("- ")||H[$].startsWith("* "));)B.push(H[$].slice(2)),$++;K.push(S.jsx("ul",{children:B.map((Et,pt)=>S.jsx("li",{dangerouslySetInnerHTML:{__html:Et.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(139,92,246,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},pt))},`ul-${$}`));continue}if(/^\d+\. /.test(at)){const B=[];for(;$<H.length&&/^\d+\. /.test(H[$]);)B.push(H[$].replace(/^\d+\. /,"")),$++;K.push(S.jsx("ol",{children:B.map((Et,pt)=>S.jsx("li",{dangerouslySetInnerHTML:{__html:Et.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(139,92,246,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},pt))},`ol-${$}`));continue}at.trim()&&K.push(S.jsx("p",{dangerouslySetInnerHTML:{__html:at.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(139,92,246,0.1);padding:2px 6px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:14px">$1</code>').replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank" style="color:var(--accent-cyan)">$1</a>')}},`p-${$}`)),$++}return K};return S.jsxs("div",{className:"app-container",children:[S.jsx("div",{className:"bg-grid"}),S.jsx("div",{className:"bg-noise"}),S.jsx("div",{className:"gradient-orb orb-primary"}),S.jsx("div",{className:"gradient-orb orb-cyan"}),S.jsx("div",{className:"gradient-orb orb-secondary"}),S.jsx("button",{className:"mobile-menu-btn",onClick:()=>Y(!E),children:E?S.jsx($g,{size:24}):S.jsx(Mg,{size:24})}),S.jsx("div",{className:`sidebar-overlay ${E?"open":""}`,onClick:()=>Y(!1)}),S.jsxs("aside",{className:`sidebar ${E?"open":""}`,children:[S.jsxs("div",{className:"sidebar-header",children:[S.jsx("div",{className:"sidebar-logo",children:S.jsx(Cd,{size:24})}),S.jsx("span",{className:"sidebar-title",children:"Mobile Dev"})]}),S.jsxs("nav",{className:"sidebar-nav",children:[S.jsxs("div",{className:`nav-item ${L==="home"?"active":""}`,onClick:()=>{h("home"),Y(!1)},children:[S.jsx(Tg,{size:20,className:"nav-item-icon"}),S.jsx("span",{children:"Home"})]}),Me.chapters.map(N=>S.jsxs("div",{className:"nav-section",children:[S.jsxs("div",{className:"nav-section-title",children:["Ch ",N.id,": ",N.title]}),N.lessons.map(H=>S.jsxs("div",{className:`nav-item ${U?.id===H.id?"active":""}`,onClick:()=>j(H),children:[ut.includes(H.id)?S.jsx(En,{size:18,className:"nav-item-icon",style:{color:"var(--accent-green)"}}):S.jsx(pg,{size:18,className:"nav-item-icon"}),S.jsx("span",{children:H.title})]},H.id))]},N.id))]}),S.jsxs("div",{style:{marginTop:"auto",padding:"20px",borderTop:"1px solid var(--border-color)"},children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:[S.jsx("span",{children:"Progress"}),S.jsxs("span",{children:[P,"%"]})]}),S.jsx("div",{className:"progress-bar",children:S.jsx("div",{className:"progress-fill",style:{width:`${P}%`}})})]})]}),S.jsxs("main",{className:"main-content",children:[L==="home"&&S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"hero",children:[S.jsxs("div",{className:"hero-badge",children:[S.jsx(Cd,{size:16}),S.jsx("span",{children:"React Native Course"})]}),S.jsxs("h1",{className:"hero-title",children:["Learn",S.jsx("br",{}),S.jsx("span",{children:"Mobile Development"})]}),S.jsx("p",{className:"hero-subtitle",children:"Build beautiful cross-platform mobile apps for iOS and Android using React Native. From zero to app store!"}),S.jsxs("button",{className:"nav-button primary",onClick:()=>j(Me.chapters[0].lessons[0]),style:{margin:"0 auto"},children:[S.jsx(Dg,{size:20}),"Start Learning"]})]}),S.jsxs("div",{style:{marginBottom:"48px"},children:[S.jsx("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"24px"},children:"Course Chapters"}),Me.chapters.map(N=>{const H=N.lessons.filter(K=>ut.includes(K.id)).length;return S.jsxs("div",{className:"chapter-card",onClick:()=>j(N.lessons[0]),children:[S.jsx("div",{className:"chapter-number",children:N.id}),S.jsxs("div",{className:"chapter-info",children:[S.jsx("div",{className:"chapter-title",children:N.title}),S.jsxs("div",{className:"chapter-meta",children:[N.description," • ",N.lessons.length," lessons",H>0&&S.jsxs("span",{style:{color:"var(--accent-green)",marginLeft:"8px"},children:["(",H,"/",N.lessons.length," complete)"]})]})]}),S.jsx(Xu,{size:24,style:{color:"var(--text-muted)"}})]},N.id)})]}),S.jsxs("div",{className:"glass-card",style:{textAlign:"center"},children:[S.jsx("h3",{style:{marginBottom:"16px",fontSize:"20px"},children:"What You'll Learn"}),S.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:"By the end, you'll be able to build and publish your own mobile apps:"}),S.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px"},children:["React Native Basics","UI Components","Navigation","State Management","API Integration","App Store Deploy"].map(N=>S.jsxs("div",{style:{padding:"16px",background:"rgba(139, 92, 246, 0.1)",borderRadius:"12px",border:"1px solid rgba(139, 92, 246, 0.2)"},children:[S.jsx(En,{size:24,style:{color:"var(--accent-primary)",marginBottom:"8px"}}),S.jsx("div",{style:{fontWeight:"500"},children:N})]},N))})]})]}),L==="lesson"&&U&&S.jsxs("div",{className:"lesson-container",children:[S.jsxs("div",{className:"lesson-header",children:[S.jsxs("div",{className:"lesson-breadcrumb",children:[S.jsx("a",{href:"#",onClick:N=>{N.preventDefault(),h("home")},children:"Home"}),S.jsx(Xu,{size:16}),S.jsx("span",{children:U.title})]}),S.jsx("h1",{className:"lesson-title",children:U.title}),S.jsxs("div",{className:"lesson-meta",children:[S.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[S.jsx(Sg,{size:16}),U.duration]}),ut.includes(U.id)&&S.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--accent-green)"},children:[S.jsx(En,{size:16}),"Completed"]})]})]}),S.jsx("div",{className:"lesson-content",children:Lt(U.content)}),!ut.includes(U.id)&&S.jsxs("button",{className:"nav-button primary",style:{width:"100%",justifyContent:"center",marginTop:"32px"},onClick:()=>O(U.id),children:[S.jsx(En,{size:20}),"Mark as Complete"]}),S.jsxs("div",{className:"lesson-nav",children:[Gt()?S.jsxs("button",{className:"nav-button",onClick:()=>j(Gt()),children:[S.jsx(Xu,{size:20,style:{transform:"rotate(180deg)"}}),"Previous"]}):S.jsx("div",{}),mt()?S.jsxs("button",{className:"nav-button primary",onClick:()=>j(mt()),children:["Next Lesson",S.jsx(Xu,{size:20})]}):S.jsxs("button",{className:"nav-button primary",onClick:()=>h("home"),children:["Finish Course",S.jsx(En,{size:20})]})]})]})]})]})}fg.createRoot(document.getElementById("root")).render(S.jsx(_e.StrictMode,{children:S.jsx(Rg,{})}));
