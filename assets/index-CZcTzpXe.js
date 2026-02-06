(function(){const Y=document.createElement("link").relList;if(Y&&Y.supports&&Y.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))h(N);new MutationObserver(N=>{for(const V of N)if(V.type==="childList")for(const ie of V.addedNodes)ie.tagName==="LINK"&&ie.rel==="modulepreload"&&h(ie)}).observe(document,{childList:!0,subtree:!0});function G(N){const V={};return N.integrity&&(V.integrity=N.integrity),N.referrerPolicy&&(V.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?V.credentials="include":N.crossOrigin==="anonymous"?V.credentials="omit":V.credentials="same-origin",V}function h(N){if(N.ep)return;N.ep=!0;const V=G(N);fetch(N.href,V)}})();var ss={exports:{}},Tn={};var vd;function ep(){if(vd)return Tn;vd=1;var z=Symbol.for("react.transitional.element"),Y=Symbol.for("react.fragment");function G(h,N,V){var ie=null;if(V!==void 0&&(ie=""+V),N.key!==void 0&&(ie=""+N.key),"key"in N){V={};for(var Te in N)Te!=="key"&&(V[Te]=N[Te])}else V=N;return N=V.ref,{$$typeof:z,type:h,key:ie,ref:N!==void 0?N:null,props:V}}return Tn.Fragment=Y,Tn.jsx=G,Tn.jsxs=G,Tn}var bd;function tp(){return bd||(bd=1,ss.exports=ep()),ss.exports}var S=tp(),fs={exports:{}},L={};var Sd;function lp(){if(Sd)return L;Sd=1;var z=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),ie=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),me=Symbol.iterator;function Le(o){return o===null||typeof o!="object"?null:(o=me&&o[me]||o["@@iterator"],typeof o=="function"?o:null)}var Ge={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,j={};function k(o,T,M){this.props=o,this.context=T,this.refs=j,this.updater=M||Ge}k.prototype.isReactComponent={},k.prototype.setState=function(o,T){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,T,"setState")},k.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function $(){}$.prototype=k.prototype;function Ee(o,T,M){this.props=o,this.context=T,this.refs=j,this.updater=M||Ge}var we=Ee.prototype=new $;we.constructor=Ee,U(we,k.prototype),we.isPureReactComponent=!0;var et=Array.isArray;function ae(){}var B={H:null,A:null,T:null,S:null},ze=Object.prototype.hasOwnProperty;function ge(o,T,M){var _=M.ref;return{$$typeof:z,type:o,key:T,ref:_!==void 0?_:null,props:M}}function Dt(o,T){return ge(o.type,T,o.props)}function rt(o){return typeof o=="object"&&o!==null&&o.$$typeof===z}function Xe(o){var T={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(M){return T[M]})}var zl=/\/+/g;function Rt(o,T){return typeof o=="object"&&o!==null&&o.key!=null?Xe(""+o.key):T.toString(36)}function Tt(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(ae,ae):(o.status="pending",o.then(function(T){o.status==="pending"&&(o.status="fulfilled",o.value=T)},function(T){o.status==="pending"&&(o.status="rejected",o.reason=T)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function v(o,T,M,_,X){var K=typeof o;(K==="undefined"||K==="boolean")&&(o=null);var ue=!1;if(o===null)ue=!0;else switch(K){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(o.$$typeof){case z:case Y:ue=!0;break;case P:return ue=o._init,v(ue(o._payload),T,M,_,X)}}if(ue)return X=X(o),ue=_===""?"."+Rt(o,0):_,et(X)?(M="",ue!=null&&(M=ue.replace(zl,"$&/")+"/"),v(X,T,M,"",function(_a){return _a})):X!=null&&(rt(X)&&(X=Dt(X,M+(X.key==null||o&&o.key===X.key?"":(""+X.key).replace(zl,"$&/")+"/")+ue)),T.push(X)),1;ue=0;var Ze=_===""?".":_+":";if(et(o))for(var Ae=0;Ae<o.length;Ae++)_=o[Ae],K=Ze+Rt(_,Ae),ue+=v(_,T,M,K,X);else if(Ae=Le(o),typeof Ae=="function")for(o=Ae.call(o),Ae=0;!(_=o.next()).done;)_=_.value,K=Ze+Rt(_,Ae++),ue+=v(_,T,M,K,X);else if(K==="object"){if(typeof o.then=="function")return v(Tt(o),T,M,_,X);throw T=String(o),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return ue}function A(o,T,M){if(o==null)return o;var _=[],X=0;return v(o,_,"","",function(K){return T.call(M,K,X++)}),_}function q(o){if(o._status===-1){var T=o._result;T=T(),T.then(function(M){(o._status===0||o._status===-1)&&(o._status=1,o._result=M)},function(M){(o._status===0||o._status===-1)&&(o._status=2,o._result=M)}),o._status===-1&&(o._status=0,o._result=T)}if(o._status===1)return o._result.default;throw o._result}var fe=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},he={map:A,forEach:function(o,T,M){A(o,function(){T.apply(this,arguments)},M)},count:function(o){var T=0;return A(o,function(){T++}),T},toArray:function(o){return A(o,function(T){return T})||[]},only:function(o){if(!rt(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return L.Activity=w,L.Children=he,L.Component=k,L.Fragment=G,L.Profiler=N,L.PureComponent=Ee,L.StrictMode=h,L.Suspense=O,L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,L.__COMPILER_RUNTIME={__proto__:null,c:function(o){return B.H.useMemoCache(o)}},L.cache=function(o){return function(){return o.apply(null,arguments)}},L.cacheSignal=function(){return null},L.cloneElement=function(o,T,M){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var _=U({},o.props),X=o.key;if(T!=null)for(K in T.key!==void 0&&(X=""+T.key),T)!ze.call(T,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&T.ref===void 0||(_[K]=T[K]);var K=arguments.length-2;if(K===1)_.children=M;else if(1<K){for(var ue=Array(K),Ze=0;Ze<K;Ze++)ue[Ze]=arguments[Ze+2];_.children=ue}return ge(o.type,X,_)},L.createContext=function(o){return o={$$typeof:ie,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:V,_context:o},o},L.createElement=function(o,T,M){var _,X={},K=null;if(T!=null)for(_ in T.key!==void 0&&(K=""+T.key),T)ze.call(T,_)&&_!=="key"&&_!=="__self"&&_!=="__source"&&(X[_]=T[_]);var ue=arguments.length-2;if(ue===1)X.children=M;else if(1<ue){for(var Ze=Array(ue),Ae=0;Ae<ue;Ae++)Ze[Ae]=arguments[Ae+2];X.children=Ze}if(o&&o.defaultProps)for(_ in ue=o.defaultProps,ue)X[_]===void 0&&(X[_]=ue[_]);return ge(o,K,X)},L.createRef=function(){return{current:null}},L.forwardRef=function(o){return{$$typeof:Te,render:o}},L.isValidElement=rt,L.lazy=function(o){return{$$typeof:P,_payload:{_status:-1,_result:o},_init:q}},L.memo=function(o,T){return{$$typeof:E,type:o,compare:T===void 0?null:T}},L.startTransition=function(o){var T=B.T,M={};B.T=M;try{var _=o(),X=B.S;X!==null&&X(M,_),typeof _=="object"&&_!==null&&typeof _.then=="function"&&_.then(ae,fe)}catch(K){fe(K)}finally{T!==null&&M.types!==null&&(T.types=M.types),B.T=T}},L.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},L.use=function(o){return B.H.use(o)},L.useActionState=function(o,T,M){return B.H.useActionState(o,T,M)},L.useCallback=function(o,T){return B.H.useCallback(o,T)},L.useContext=function(o){return B.H.useContext(o)},L.useDebugValue=function(){},L.useDeferredValue=function(o,T){return B.H.useDeferredValue(o,T)},L.useEffect=function(o,T){return B.H.useEffect(o,T)},L.useEffectEvent=function(o){return B.H.useEffectEvent(o)},L.useId=function(){return B.H.useId()},L.useImperativeHandle=function(o,T,M){return B.H.useImperativeHandle(o,T,M)},L.useInsertionEffect=function(o,T){return B.H.useInsertionEffect(o,T)},L.useLayoutEffect=function(o,T){return B.H.useLayoutEffect(o,T)},L.useMemo=function(o,T){return B.H.useMemo(o,T)},L.useOptimistic=function(o,T){return B.H.useOptimistic(o,T)},L.useReducer=function(o,T,M){return B.H.useReducer(o,T,M)},L.useRef=function(o){return B.H.useRef(o)},L.useState=function(o){return B.H.useState(o)},L.useSyncExternalStore=function(o,T,M){return B.H.useSyncExternalStore(o,T,M)},L.useTransition=function(){return B.H.useTransition()},L.version="19.2.4",L}var xd;function hs(){return xd||(xd=1,fs.exports=lp()),fs.exports}var Ct=hs(),os={exports:{}},En={},rs={exports:{}},ds={};var Td;function ap(){return Td||(Td=1,(function(z){function Y(v,A){var q=v.length;v.push(A);e:for(;0<q;){var fe=q-1>>>1,he=v[fe];if(0<N(he,A))v[fe]=A,v[q]=he,q=fe;else break e}}function G(v){return v.length===0?null:v[0]}function h(v){if(v.length===0)return null;var A=v[0],q=v.pop();if(q!==A){v[0]=q;e:for(var fe=0,he=v.length,o=he>>>1;fe<o;){var T=2*(fe+1)-1,M=v[T],_=T+1,X=v[_];if(0>N(M,q))_<he&&0>N(X,M)?(v[fe]=X,v[_]=q,fe=_):(v[fe]=M,v[T]=q,fe=T);else if(_<he&&0>N(X,q))v[fe]=X,v[_]=q,fe=_;else break e}}return A}function N(v,A){var q=v.sortIndex-A.sortIndex;return q!==0?q:v.id-A.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var V=performance;z.unstable_now=function(){return V.now()}}else{var ie=Date,Te=ie.now();z.unstable_now=function(){return ie.now()-Te}}var O=[],E=[],P=1,w=null,me=3,Le=!1,Ge=!1,U=!1,j=!1,k=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,Ee=typeof setImmediate<"u"?setImmediate:null;function we(v){for(var A=G(E);A!==null;){if(A.callback===null)h(E);else if(A.startTime<=v)h(E),A.sortIndex=A.expirationTime,Y(O,A);else break;A=G(E)}}function et(v){if(U=!1,we(v),!Ge)if(G(O)!==null)Ge=!0,ae||(ae=!0,Xe());else{var A=G(E);A!==null&&Tt(et,A.startTime-v)}}var ae=!1,B=-1,ze=5,ge=-1;function Dt(){return j?!0:!(z.unstable_now()-ge<ze)}function rt(){if(j=!1,ae){var v=z.unstable_now();ge=v;var A=!0;try{e:{Ge=!1,U&&(U=!1,$(B),B=-1),Le=!0;var q=me;try{t:{for(we(v),w=G(O);w!==null&&!(w.expirationTime>v&&Dt());){var fe=w.callback;if(typeof fe=="function"){w.callback=null,me=w.priorityLevel;var he=fe(w.expirationTime<=v);if(v=z.unstable_now(),typeof he=="function"){w.callback=he,we(v),A=!0;break t}w===G(O)&&h(O),we(v)}else h(O);w=G(O)}if(w!==null)A=!0;else{var o=G(E);o!==null&&Tt(et,o.startTime-v),A=!1}}break e}finally{w=null,me=q,Le=!1}A=void 0}}finally{A?Xe():ae=!1}}}var Xe;if(typeof Ee=="function")Xe=function(){Ee(rt)};else if(typeof MessageChannel<"u"){var zl=new MessageChannel,Rt=zl.port2;zl.port1.onmessage=rt,Xe=function(){Rt.postMessage(null)}}else Xe=function(){k(rt,0)};function Tt(v,A){B=k(function(){v(z.unstable_now())},A)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(v){v.callback=null},z.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ze=0<v?Math.floor(1e3/v):5},z.unstable_getCurrentPriorityLevel=function(){return me},z.unstable_next=function(v){switch(me){case 1:case 2:case 3:var A=3;break;default:A=me}var q=me;me=A;try{return v()}finally{me=q}},z.unstable_requestPaint=function(){j=!0},z.unstable_runWithPriority=function(v,A){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var q=me;me=v;try{return A()}finally{me=q}},z.unstable_scheduleCallback=function(v,A,q){var fe=z.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?fe+q:fe):q=fe,v){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=q+he,v={id:P++,callback:A,priorityLevel:v,startTime:q,expirationTime:he,sortIndex:-1},q>fe?(v.sortIndex=q,Y(E,v),G(O)===null&&v===G(E)&&(U?($(B),B=-1):U=!0,Tt(et,q-fe))):(v.sortIndex=he,Y(O,v),Ge||Le||(Ge=!0,ae||(ae=!0,Xe()))),v},z.unstable_shouldYield=Dt,z.unstable_wrapCallback=function(v){var A=me;return function(){var q=me;me=A;try{return v.apply(this,arguments)}finally{me=q}}}})(ds)),ds}var Ed;function np(){return Ed||(Ed=1,rs.exports=ap()),rs.exports}var ms={exports:{}},Qe={};var zd;function ip(){if(zd)return Qe;zd=1;var z=hs();function Y(O){var E="https://react.dev/errors/"+O;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var P=2;P<arguments.length;P++)E+="&args[]="+encodeURIComponent(arguments[P])}return"Minified React error #"+O+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function G(){}var h={d:{f:G,r:function(){throw Error(Y(522))},D:G,C:G,L:G,m:G,X:G,S:G,M:G},p:0,findDOMNode:null},N=Symbol.for("react.portal");function V(O,E,P){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:w==null?null:""+w,children:O,containerInfo:E,implementation:P}}var ie=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Te(O,E){if(O==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Qe.createPortal=function(O,E){var P=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(Y(299));return V(O,E,null,P)},Qe.flushSync=function(O){var E=ie.T,P=h.p;try{if(ie.T=null,h.p=2,O)return O()}finally{ie.T=E,h.p=P,h.d.f()}},Qe.preconnect=function(O,E){typeof O=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,h.d.C(O,E))},Qe.prefetchDNS=function(O){typeof O=="string"&&h.d.D(O)},Qe.preinit=function(O,E){if(typeof O=="string"&&E&&typeof E.as=="string"){var P=E.as,w=Te(P,E.crossOrigin),me=typeof E.integrity=="string"?E.integrity:void 0,Le=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;P==="style"?h.d.S(O,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:w,integrity:me,fetchPriority:Le}):P==="script"&&h.d.X(O,{crossOrigin:w,integrity:me,fetchPriority:Le,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Qe.preinitModule=function(O,E){if(typeof O=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var P=Te(E.as,E.crossOrigin);h.d.M(O,{crossOrigin:P,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&h.d.M(O)},Qe.preload=function(O,E){if(typeof O=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var P=E.as,w=Te(P,E.crossOrigin);h.d.L(O,P,{crossOrigin:w,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Qe.preloadModule=function(O,E){if(typeof O=="string")if(E){var P=Te(E.as,E.crossOrigin);h.d.m(O,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:P,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else h.d.m(O)},Qe.requestFormReset=function(O){h.d.r(O)},Qe.unstable_batchedUpdates=function(O,E){return O(E)},Qe.useFormState=function(O,E,P){return ie.H.useFormState(O,E,P)},Qe.useFormStatus=function(){return ie.H.useHostTransitionStatus()},Qe.version="19.2.4",Qe}var Ad;function up(){if(Ad)return ms.exports;Ad=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(Y){console.error(Y)}}return z(),ms.exports=ip(),ms.exports}var Md;function cp(){if(Md)return En;Md=1;var z=np(),Y=hs(),G=up();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function V(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function ie(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Te(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O(e){if(V(e)!==e)throw Error(h(188))}function E(e){var t=e.alternate;if(!t){if(t=V(e),t===null)throw Error(h(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return O(n),e;if(i===a)return O(n),t;i=i.sibling}throw Error(h(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(h(189))}}if(l.alternate!==a)throw Error(h(190))}if(l.tag!==3)throw Error(h(188));return l.stateNode.current===l?e:t}function P(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=P(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,me=Symbol.for("react.element"),Le=Symbol.for("react.transitional.element"),Ge=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),Ee=Symbol.for("react.context"),we=Symbol.for("react.forward_ref"),et=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),ge=Symbol.for("react.activity"),Dt=Symbol.for("react.memo_cache_sentinel"),rt=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=rt&&e[rt]||e["@@iterator"],typeof e=="function"?e:null)}var zl=Symbol.for("react.client.reference");function Rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===zl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case k:return"Profiler";case j:return"StrictMode";case et:return"Suspense";case ae:return"SuspenseList";case ge:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ge:return"Portal";case Ee:return e.displayName||"Context";case $:return(e._context.displayName||"Context")+".Consumer";case we:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return t=e.displayName||null,t!==null?t:Rt(e.type)||"Memo";case ze:t=e._payload,e=e._init;try{return Rt(e(t))}catch{}}return null}var Tt=Array.isArray,v=Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=G.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},fe=[],he=-1;function o(e){return{current:e}}function T(e){0>he||(e.current=fe[he],fe[he]=null,he--)}function M(e,t){he++,fe[he]=e.current,e.current=t}var _=o(null),X=o(null),K=o(null),ue=o(null);function Ze(e,t){switch(M(K,t),M(X,e),M(_,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Lr(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Lr(t),e=Gr(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(_),M(_,e)}function Ae(){T(_),T(X),T(K)}function _a(e){e.memoizedState!==null&&M(ue,e);var t=_.current,l=Gr(t,e.type);t!==l&&(M(X,e),M(_,l))}function An(e){X.current===e&&(T(_),T(X)),ue.current===e&&(T(ue),vn._currentValue=q)}var Qi,ps;function Al(e){if(Qi===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Qi=t&&t[1]||"",ps=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qi+e+ps}var Zi=!1;function Vi(e,t){if(!e||Zi)return"";Zi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(g){var p=g}Reflect.construct(e,[],x)}else{try{x.call()}catch(g){p=g}e.call(x.prototype)}}else{try{throw Error()}catch(g){p=g}(x=e())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(g){if(g&&p&&typeof g.stack=="string")return[g.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),m=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===m.length)for(a=s.length-1,n=m.length-1;1<=a&&0<=n&&s[a]!==m[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==m[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==m[n]){var y=`
`+s[a].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=a&&0<=n);break}}}finally{Zi=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Al(l):""}function Ud(e,t){switch(e.tag){case 26:case 27:case 5:return Al(e.type);case 16:return Al("Lazy");case 13:return e.child!==t&&t!==null?Al("Suspense Fallback"):Al("Suspense");case 19:return Al("SuspenseList");case 0:case 15:return Vi(e.type,!1);case 11:return Vi(e.type.render,!1);case 1:return Vi(e.type,!0);case 31:return Al("Activity");default:return""}}function gs(e){try{var t="",l=null;do t+=Ud(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ki=Object.prototype.hasOwnProperty,Ki=z.unstable_scheduleCallback,Ji=z.unstable_cancelCallback,Nd=z.unstable_shouldYield,$d=z.unstable_requestPaint,tt=z.unstable_now,Rd=z.unstable_getCurrentPriorityLevel,ys=z.unstable_ImmediatePriority,vs=z.unstable_UserBlockingPriority,Mn=z.unstable_NormalPriority,wd=z.unstable_LowPriority,bs=z.unstable_IdlePriority,jd=z.log,Hd=z.unstable_setDisableYieldValue,Da=null,lt=null;function Pt(e){if(typeof jd=="function"&&Hd(e),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(Da,e)}catch{}}var at=Math.clz32?Math.clz32:Yd,Bd=Math.log,qd=Math.LN2;function Yd(e){return e>>>=0,e===0?32:31-(Bd(e)/qd|0)|0}var Cn=256,_n=262144,Dn=4194304;function Ml(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function On(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=Ml(a):(u&=c,u!==0?n=Ml(u):l||(l=c&~e,l!==0&&(n=Ml(l))))):(c=a&~i,c!==0?n=Ml(c):u!==0?n=Ml(u):l||(l=a&~e,l!==0&&(n=Ml(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Oa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ld(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ss(){var e=Dn;return Dn<<=1,(Dn&62914560)===0&&(Dn=4194304),e}function Fi(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ua(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gd(e,t,l,a,n,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,s=e.expirationTimes,m=e.hiddenUpdates;for(l=u&~l;0<l;){var y=31-at(l),x=1<<y;c[y]=0,s[y]=-1;var p=m[y];if(p!==null)for(m[y]=null,y=0;y<p.length;y++){var g=p[y];g!==null&&(g.lane&=-536870913)}l&=~x}a!==0&&xs(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function xs(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-at(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function Ts(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-at(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Es(e,t){var l=t&-t;return l=(l&42)!==0?1:Wi(l),(l&(e.suspendedLanes|t))!==0?0:l}function Wi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ii(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zs(){var e=A.p;return e!==0?e:(e=window.event,e===void 0?32:rd(e.type))}function As(e,t){var l=A.p;try{return A.p=e,t()}finally{A.p=l}}var el=Math.random().toString(36).slice(2),je="__reactFiber$"+el,ke="__reactProps$"+el,Ql="__reactContainer$"+el,Pi="__reactEvents$"+el,Xd="__reactListeners$"+el,Qd="__reactHandles$"+el,Ms="__reactResources$"+el,Na="__reactMarker$"+el;function eu(e){delete e[je],delete e[ke],delete e[Pi],delete e[Xd],delete e[Qd]}function Zl(e){var t=e[je];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Ql]||l[je]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Jr(e);e!==null;){if(l=e[je])return l;e=Jr(e)}return t}e=l,l=e.parentNode}return null}function Vl(e){if(e=e[je]||e[Ql]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function $a(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function kl(e){var t=e[Ms];return t||(t=e[Ms]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[Na]=!0}var Cs=new Set,_s={};function Cl(e,t){Kl(e,t),Kl(e+"Capture",t)}function Kl(e,t){for(_s[e]=t,e=0;e<t.length;e++)Cs.add(t[e])}var Zd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ds={},Os={};function Vd(e){return ki.call(Os,e)?!0:ki.call(Ds,e)?!1:Zd.test(e)?Os[e]=!0:(Ds[e]=!0,!1)}function Un(e,t,l){if(Vd(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Nn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function wt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Us(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kd(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tu(e){if(!e._valueTracker){var t=Us(e)?"checked":"value";e._valueTracker=kd(e,t,""+e[t])}}function Ns(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Us(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function $n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kd=/[\n"\\]/g;function mt(e){return e.replace(Kd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function lu(e,t,l,a,n,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?au(e,u,dt(t)):l!=null?au(e,u,dt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+dt(c):e.removeAttribute("name")}function $s(e,t,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){tu(e);return}l=l!=null?""+dt(l):"",t=t!=null?""+dt(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),tu(e)}function au(e,t,l){t==="number"&&$n(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Jl(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+dt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Rs(e,t,l){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+dt(l):""}function ws(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(h(92));if(Tt(a)){if(1<a.length)throw Error(h(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=dt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),tu(e)}function Fl(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Jd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function js(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Jd.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Hs(e,t,l){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&js(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&js(e,i,t[i])}function nu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rn(e){return Wd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function jt(){}var iu=null;function uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wl=null,Il=null;function Bs(e){var t=Vl(e);if(t&&(e=t.stateNode)){var l=e[ke]||null;e:switch(e=t.stateNode,t.type){case"input":if(lu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[ke]||null;if(!n)throw Error(h(90));lu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Ns(a)}break e;case"textarea":Rs(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Jl(e,!!l.multiple,t,!1)}}}var cu=!1;function qs(e,t,l){if(cu)return e(t,l);cu=!0;try{var a=e(t);return a}finally{if(cu=!1,(Wl!==null||Il!==null)&&(xi(),Wl&&(t=Wl,e=Il,Il=Wl=null,Bs(t),e)))for(t=0;t<e.length;t++)Bs(e[t])}}function Ra(e,t){var l=e.stateNode;if(l===null)return null;var a=l[ke]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(h(231,t,typeof l));return l}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(Ht)try{var wa={};Object.defineProperty(wa,"passive",{get:function(){su=!0}}),window.addEventListener("test",wa,wa),window.removeEventListener("test",wa,wa)}catch{su=!1}var tl=null,fu=null,wn=null;function Ys(){if(wn)return wn;var e,t=fu,l=t.length,a,n="value"in tl?tl.value:tl.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===n[i-a];a++);return wn=n.slice(e,1<a?1-a:void 0)}function jn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hn(){return!0}function Ls(){return!1}function Ke(e){function t(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hn:Ls,this.isPropagationStopped=Ls,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),t}var _l={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bn=Ke(_l),ja=w({},_l,{view:0,detail:0}),Id=Ke(ja),ou,ru,Ha,qn=w({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ha&&(Ha&&e.type==="mousemove"?(ou=e.screenX-Ha.screenX,ru=e.screenY-Ha.screenY):ru=ou=0,Ha=e),ou)},movementY:function(e){return"movementY"in e?e.movementY:ru}}),Gs=Ke(qn),Pd=w({},qn,{dataTransfer:0}),em=Ke(Pd),tm=w({},ja,{relatedTarget:0}),du=Ke(tm),lm=w({},_l,{animationName:0,elapsedTime:0,pseudoElement:0}),am=Ke(lm),nm=w({},_l,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),im=Ke(nm),um=w({},_l,{data:0}),Xs=Ke(um),cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function om(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fm[e])?!!t[e]:!1}function mu(){return om}var rm=w({},ja,{key:function(e){if(e.key){var t=cm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dm=Ke(rm),mm=w({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qs=Ke(mm),hm=w({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),pm=Ke(hm),gm=w({},_l,{propertyName:0,elapsedTime:0,pseudoElement:0}),ym=Ke(gm),vm=w({},qn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bm=Ke(vm),Sm=w({},_l,{newState:0,oldState:0}),xm=Ke(Sm),Tm=[9,13,27,32],hu=Ht&&"CompositionEvent"in window,Ba=null;Ht&&"documentMode"in document&&(Ba=document.documentMode);var Em=Ht&&"TextEvent"in window&&!Ba,Zs=Ht&&(!hu||Ba&&8<Ba&&11>=Ba),Vs=" ",ks=!1;function Ks(e,t){switch(e){case"keyup":return Tm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pl=!1;function zm(e,t){switch(e){case"compositionend":return Js(t);case"keypress":return t.which!==32?null:(ks=!0,Vs);case"textInput":return e=t.data,e===Vs&&ks?null:e;default:return null}}function Am(e,t){if(Pl)return e==="compositionend"||!hu&&Ks(e,t)?(e=Ys(),wn=fu=tl=null,Pl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zs&&t.locale!=="ko"?null:t.data;default:return null}}var Mm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mm[e.type]:t==="textarea"}function Ws(e,t,l,a){Wl?Il?Il.push(a):Il=[a]:Wl=a,t=_i(t,"onChange"),0<t.length&&(l=new Bn("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var qa=null,Ya=null;function Cm(e){wr(e,0)}function Yn(e){var t=$a(e);if(Ns(t))return e}function Is(e,t){if(e==="change")return t}var Ps=!1;if(Ht){var pu;if(Ht){var gu="oninput"in document;if(!gu){var ef=document.createElement("div");ef.setAttribute("oninput","return;"),gu=typeof ef.oninput=="function"}pu=gu}else pu=!1;Ps=pu&&(!document.documentMode||9<document.documentMode)}function tf(){qa&&(qa.detachEvent("onpropertychange",lf),Ya=qa=null)}function lf(e){if(e.propertyName==="value"&&Yn(Ya)){var t=[];Ws(t,Ya,e,uu(e)),qs(Cm,t)}}function _m(e,t,l){e==="focusin"?(tf(),qa=t,Ya=l,qa.attachEvent("onpropertychange",lf)):e==="focusout"&&tf()}function Dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yn(Ya)}function Om(e,t){if(e==="click")return Yn(t)}function Um(e,t){if(e==="input"||e==="change")return Yn(t)}function Nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Nm;function La(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!ki.call(t,n)||!nt(e[n],t[n]))return!1}return!0}function af(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nf(e,t){var l=af(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=af(l)}}function uf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$n(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=$n(e.document)}return t}function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var $m=Ht&&"documentMode"in document&&11>=document.documentMode,ea=null,vu=null,Ga=null,bu=!1;function sf(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;bu||ea==null||ea!==$n(a)||(a=ea,"selectionStart"in a&&yu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ga&&La(Ga,a)||(Ga=a,a=_i(vu,"onSelect"),0<a.length&&(t=new Bn("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ea)))}function Dl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ta={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionrun:Dl("Transition","TransitionRun"),transitionstart:Dl("Transition","TransitionStart"),transitioncancel:Dl("Transition","TransitionCancel"),transitionend:Dl("Transition","TransitionEnd")},Su={},ff={};Ht&&(ff=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function Ol(e){if(Su[e])return Su[e];if(!ta[e])return e;var t=ta[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in ff)return Su[e]=t[l];return e}var of=Ol("animationend"),rf=Ol("animationiteration"),df=Ol("animationstart"),Rm=Ol("transitionrun"),wm=Ol("transitionstart"),jm=Ol("transitioncancel"),mf=Ol("transitionend"),hf=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function Et(e,t){hf.set(e,t),Cl(t,[e])}var Ln=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ht=[],la=0,Tu=0;function Gn(){for(var e=la,t=Tu=la=0;t<e;){var l=ht[t];ht[t++]=null;var a=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var i=ht[t];if(ht[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&pf(l,n,i)}}function Xn(e,t,l,a){ht[la++]=e,ht[la++]=t,ht[la++]=l,ht[la++]=a,Tu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Eu(e,t,l,a){return Xn(e,t,l,a),Qn(e)}function Ul(e,t){return Xn(e,null,null,t),Qn(e)}function pf(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-at(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function Qn(e){if(50<rn)throw rn=0,Nc=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var aa={};function Hm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,l,a){return new Hm(e,t,l,a)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bt(e,t){var l=e.alternate;return l===null?(l=it(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function gf(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Zn(e,t,l,a,n,i){var u=0;if(a=e,typeof e=="function")zu(e)&&(u=1);else if(typeof e=="string")u=Gh(e,l,_.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ge:return e=it(31,l,t,n),e.elementType=ge,e.lanes=i,e;case U:return Nl(l.children,n,i,t);case j:u=8,n|=24;break;case k:return e=it(12,l,t,n|2),e.elementType=k,e.lanes=i,e;case et:return e=it(13,l,t,n),e.elementType=et,e.lanes=i,e;case ae:return e=it(19,l,t,n),e.elementType=ae,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ee:u=10;break e;case $:u=9;break e;case we:u=11;break e;case B:u=14;break e;case ze:u=16,a=null;break e}u=29,l=Error(h(130,e===null?"null":typeof e,"")),a=null}return t=it(u,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Nl(e,t,l,a){return e=it(7,e,a,t),e.lanes=l,e}function Au(e,t,l){return e=it(6,e,null,t),e.lanes=l,e}function yf(e){var t=it(18,null,null,0);return t.stateNode=e,t}function Mu(e,t,l){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vf=new WeakMap;function pt(e,t){if(typeof e=="object"&&e!==null){var l=vf.get(e);return l!==void 0?l:(t={value:e,source:t,stack:gs(t)},vf.set(e,t),t)}return{value:e,source:t,stack:gs(t)}}var na=[],ia=0,Vn=null,Xa=0,gt=[],yt=0,ll=null,Ot=1,Ut="";function qt(e,t){na[ia++]=Xa,na[ia++]=Vn,Vn=e,Xa=t}function bf(e,t,l){gt[yt++]=Ot,gt[yt++]=Ut,gt[yt++]=ll,ll=e;var a=Ot;e=Ut;var n=32-at(a)-1;a&=~(1<<n),l+=1;var i=32-at(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Ot=1<<32-at(t)+n|l<<n|a,Ut=i+e}else Ot=1<<i|l<<n|a,Ut=e}function Cu(e){e.return!==null&&(qt(e,1),bf(e,1,0))}function _u(e){for(;e===Vn;)Vn=na[--ia],na[ia]=null,Xa=na[--ia],na[ia]=null;for(;e===ll;)ll=gt[--yt],gt[yt]=null,Ut=gt[--yt],gt[yt]=null,Ot=gt[--yt],gt[yt]=null}function Sf(e,t){gt[yt++]=Ot,gt[yt++]=Ut,gt[yt++]=ll,Ot=t.id,Ut=t.overflow,ll=e}var He=null,ye=null,ee=!1,al=null,vt=!1,Du=Error(h(519));function nl(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qa(pt(t,e)),Du}function xf(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[je]=e,t[ke]=a,l){case"dialog":F("cancel",t),F("close",t);break;case"iframe":case"object":case"embed":F("load",t);break;case"video":case"audio":for(l=0;l<mn.length;l++)F(mn[l],t);break;case"source":F("error",t);break;case"img":case"image":case"link":F("error",t),F("load",t);break;case"details":F("toggle",t);break;case"input":F("invalid",t),$s(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":F("invalid",t);break;case"textarea":F("invalid",t),ws(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||qr(t.textContent,l)?(a.popover!=null&&(F("beforetoggle",t),F("toggle",t)),a.onScroll!=null&&F("scroll",t),a.onScrollEnd!=null&&F("scrollend",t),a.onClick!=null&&(t.onclick=jt),t=!0):t=!1,t||nl(e,!0)}function Tf(e){for(He=e.return;He;)switch(He.tag){case 5:case 31:case 13:vt=!1;return;case 27:case 3:vt=!0;return;default:He=He.return}}function ua(e){if(e!==He)return!1;if(!ee)return Tf(e),ee=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||kc(e.type,e.memoizedProps)),l=!l),l&&ye&&nl(e),Tf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ye=Kr(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ye=Kr(e)}else t===27?(t=ye,vl(e.type)?(e=Ic,Ic=null,ye=e):ye=t):ye=He?St(e.stateNode.nextSibling):null;return!0}function $l(){ye=He=null,ee=!1}function Ou(){var e=al;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),al=null),e}function Qa(e){al===null?al=[e]:al.push(e)}var Uu=o(null),Rl=null,Yt=null;function il(e,t,l){M(Uu,t._currentValue),t._currentValue=l}function Lt(e){e._currentValue=Uu.current,T(Uu)}function Nu(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function $u(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var s=0;s<t.length;s++)if(c.context===t[s]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),Nu(i.return,l,e),a||(u=null);break e}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(h(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Nu(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ca(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(h(387));if(u=u.memoizedProps,u!==null){var c=n.type;nt(n.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(n===ue.current){if(u=n.alternate,u===null)throw Error(h(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(vn):e=[vn])}n=n.return}e!==null&&$u(t,e,l,a),t.flags|=262144}function kn(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wl(e){Rl=e,Yt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Be(e){return Ef(Rl,e)}function Kn(e,t){return Rl===null&&wl(e),Ef(e,t)}function Ef(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Yt===null){if(e===null)throw Error(h(308));Yt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yt=Yt.next=t;return l}var Bm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},qm=z.unstable_scheduleCallback,Ym=z.unstable_NormalPriority,_e={$$typeof:Ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ru(){return{controller:new Bm,data:new Map,refCount:0}}function Za(e){e.refCount--,e.refCount===0&&qm(Ym,function(){e.controller.abort()})}var Va=null,wu=0,sa=0,fa=null;function Lm(e,t){if(Va===null){var l=Va=[];wu=0,sa=Bc(),fa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return wu++,t.then(zf,zf),t}function zf(){if(--wu===0&&Va!==null){fa!==null&&(fa.status="fulfilled");var e=Va;Va=null,sa=0,fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Gm(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Af=v.S;v.S=function(e,t){fr=tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Lm(e,t),Af!==null&&Af(e,t)};var jl=o(null);function ju(){var e=jl.current;return e!==null?e:pe.pooledCache}function Jn(e,t){t===null?M(jl,jl.current):M(jl,t.pool)}function Mf(){var e=ju();return e===null?null:{parent:_e._currentValue,pool:e}}var oa=Error(h(460)),Hu=Error(h(474)),Fn=Error(h(542)),Wn={then:function(){}};function Cf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _f(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(jt,jt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Of(e),e;default:if(typeof t.status=="string")t.then(jt,jt);else{if(e=pe,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Of(e),e}throw Bl=t,oa}}function Hl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Bl=l,oa):l}}var Bl=null;function Df(){if(Bl===null)throw Error(h(459));var e=Bl;return Bl=null,e}function Of(e){if(e===oa||e===Fn)throw Error(h(483))}var ra=null,ka=0;function In(e){var t=ka;return ka+=1,ra===null&&(ra=[]),_f(ra,e,t)}function Ka(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Pn(e,t){throw t.$$typeof===me?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Uf(e){function t(r,f){if(e){var d=r.deletions;d===null?(r.deletions=[f],r.flags|=16):d.push(f)}}function l(r,f){if(!e)return null;for(;f!==null;)t(r,f),f=f.sibling;return null}function a(r){for(var f=new Map;r!==null;)r.key!==null?f.set(r.key,r):f.set(r.index,r),r=r.sibling;return f}function n(r,f){return r=Bt(r,f),r.index=0,r.sibling=null,r}function i(r,f,d){return r.index=d,e?(d=r.alternate,d!==null?(d=d.index,d<f?(r.flags|=67108866,f):d):(r.flags|=67108866,f)):(r.flags|=1048576,f)}function u(r){return e&&r.alternate===null&&(r.flags|=67108866),r}function c(r,f,d,b){return f===null||f.tag!==6?(f=Au(d,r.mode,b),f.return=r,f):(f=n(f,d),f.return=r,f)}function s(r,f,d,b){var R=d.type;return R===U?y(r,f,d.props.children,b,d.key):f!==null&&(f.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ze&&Hl(R)===f.type)?(f=n(f,d.props),Ka(f,d),f.return=r,f):(f=Zn(d.type,d.key,d.props,null,r.mode,b),Ka(f,d),f.return=r,f)}function m(r,f,d,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==d.containerInfo||f.stateNode.implementation!==d.implementation?(f=Mu(d,r.mode,b),f.return=r,f):(f=n(f,d.children||[]),f.return=r,f)}function y(r,f,d,b,R){return f===null||f.tag!==7?(f=Nl(d,r.mode,b,R),f.return=r,f):(f=n(f,d),f.return=r,f)}function x(r,f,d){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Au(""+f,r.mode,d),f.return=r,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Le:return d=Zn(f.type,f.key,f.props,null,r.mode,d),Ka(d,f),d.return=r,d;case Ge:return f=Mu(f,r.mode,d),f.return=r,f;case ze:return f=Hl(f),x(r,f,d)}if(Tt(f)||Xe(f))return f=Nl(f,r.mode,d,null),f.return=r,f;if(typeof f.then=="function")return x(r,In(f),d);if(f.$$typeof===Ee)return x(r,Kn(r,f),d);Pn(r,f)}return null}function p(r,f,d,b){var R=f!==null?f.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return R!==null?null:c(r,f,""+d,b);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Le:return d.key===R?s(r,f,d,b):null;case Ge:return d.key===R?m(r,f,d,b):null;case ze:return d=Hl(d),p(r,f,d,b)}if(Tt(d)||Xe(d))return R!==null?null:y(r,f,d,b,null);if(typeof d.then=="function")return p(r,f,In(d),b);if(d.$$typeof===Ee)return p(r,f,Kn(r,d),b);Pn(r,d)}return null}function g(r,f,d,b,R){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return r=r.get(d)||null,c(f,r,""+b,R);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Le:return r=r.get(b.key===null?d:b.key)||null,s(f,r,b,R);case Ge:return r=r.get(b.key===null?d:b.key)||null,m(f,r,b,R);case ze:return b=Hl(b),g(r,f,d,b,R)}if(Tt(b)||Xe(b))return r=r.get(d)||null,y(f,r,b,R,null);if(typeof b.then=="function")return g(r,f,d,In(b),R);if(b.$$typeof===Ee)return g(r,f,d,Kn(f,b),R);Pn(f,b)}return null}function C(r,f,d,b){for(var R=null,te=null,D=f,Z=f=0,I=null;D!==null&&Z<d.length;Z++){D.index>Z?(I=D,D=null):I=D.sibling;var le=p(r,D,d[Z],b);if(le===null){D===null&&(D=I);break}e&&D&&le.alternate===null&&t(r,D),f=i(le,f,Z),te===null?R=le:te.sibling=le,te=le,D=I}if(Z===d.length)return l(r,D),ee&&qt(r,Z),R;if(D===null){for(;Z<d.length;Z++)D=x(r,d[Z],b),D!==null&&(f=i(D,f,Z),te===null?R=D:te.sibling=D,te=D);return ee&&qt(r,Z),R}for(D=a(D);Z<d.length;Z++)I=g(D,r,Z,d[Z],b),I!==null&&(e&&I.alternate!==null&&D.delete(I.key===null?Z:I.key),f=i(I,f,Z),te===null?R=I:te.sibling=I,te=I);return e&&D.forEach(function(El){return t(r,El)}),ee&&qt(r,Z),R}function H(r,f,d,b){if(d==null)throw Error(h(151));for(var R=null,te=null,D=f,Z=f=0,I=null,le=d.next();D!==null&&!le.done;Z++,le=d.next()){D.index>Z?(I=D,D=null):I=D.sibling;var El=p(r,D,le.value,b);if(El===null){D===null&&(D=I);break}e&&D&&El.alternate===null&&t(r,D),f=i(El,f,Z),te===null?R=El:te.sibling=El,te=El,D=I}if(le.done)return l(r,D),ee&&qt(r,Z),R;if(D===null){for(;!le.done;Z++,le=d.next())le=x(r,le.value,b),le!==null&&(f=i(le,f,Z),te===null?R=le:te.sibling=le,te=le);return ee&&qt(r,Z),R}for(D=a(D);!le.done;Z++,le=d.next())le=g(D,r,Z,le.value,b),le!==null&&(e&&le.alternate!==null&&D.delete(le.key===null?Z:le.key),f=i(le,f,Z),te===null?R=le:te.sibling=le,te=le);return e&&D.forEach(function(Ph){return t(r,Ph)}),ee&&qt(r,Z),R}function de(r,f,d,b){if(typeof d=="object"&&d!==null&&d.type===U&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Le:e:{for(var R=d.key;f!==null;){if(f.key===R){if(R=d.type,R===U){if(f.tag===7){l(r,f.sibling),b=n(f,d.props.children),b.return=r,r=b;break e}}else if(f.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ze&&Hl(R)===f.type){l(r,f.sibling),b=n(f,d.props),Ka(b,d),b.return=r,r=b;break e}l(r,f);break}else t(r,f);f=f.sibling}d.type===U?(b=Nl(d.props.children,r.mode,b,d.key),b.return=r,r=b):(b=Zn(d.type,d.key,d.props,null,r.mode,b),Ka(b,d),b.return=r,r=b)}return u(r);case Ge:e:{for(R=d.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===d.containerInfo&&f.stateNode.implementation===d.implementation){l(r,f.sibling),b=n(f,d.children||[]),b.return=r,r=b;break e}else{l(r,f);break}else t(r,f);f=f.sibling}b=Mu(d,r.mode,b),b.return=r,r=b}return u(r);case ze:return d=Hl(d),de(r,f,d,b)}if(Tt(d))return C(r,f,d,b);if(Xe(d)){if(R=Xe(d),typeof R!="function")throw Error(h(150));return d=R.call(d),H(r,f,d,b)}if(typeof d.then=="function")return de(r,f,In(d),b);if(d.$$typeof===Ee)return de(r,f,Kn(r,d),b);Pn(r,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,f!==null&&f.tag===6?(l(r,f.sibling),b=n(f,d),b.return=r,r=b):(l(r,f),b=Au(d,r.mode,b),b.return=r,r=b),u(r)):l(r,f)}return function(r,f,d,b){try{ka=0;var R=de(r,f,d,b);return ra=null,R}catch(D){if(D===oa||D===Fn)throw D;var te=it(29,D,null,r.mode);return te.lanes=b,te.return=r,te}}}var ql=Uf(!0),Nf=Uf(!1),ul=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ne&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Qn(e),pf(e,null,l),t}return Xn(e,a,t,l),Qn(e)}function Ja(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Ts(e,l)}}function Yu(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Lu=!1;function Fa(){if(Lu){var e=fa;if(e!==null)throw e}}function Wa(e,t,l,a){Lu=!1;var n=e.updateQueue;ul=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,m=s.next;s.next=null,u===null?i=m:u.next=m,u=s;var y=e.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==u&&(c===null?y.firstBaseUpdate=m:c.next=m,y.lastBaseUpdate=s))}if(i!==null){var x=n.baseState;u=0,y=m=s=null,c=i;do{var p=c.lane&-536870913,g=p!==c.lane;if(g?(W&p)===p:(a&p)===p){p!==0&&p===sa&&(Lu=!0),y!==null&&(y=y.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var C=e,H=c;p=t;var de=l;switch(H.tag){case 1:if(C=H.payload,typeof C=="function"){x=C.call(de,x,p);break e}x=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=H.payload,p=typeof C=="function"?C.call(de,x,p):C,p==null)break e;x=w({},x,p);break e;case 2:ul=!0}}p=c.callback,p!==null&&(e.flags|=64,g&&(e.flags|=8192),g=n.callbacks,g===null?n.callbacks=[p]:g.push(p))}else g={lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(m=y=g,s=x):y=y.next=g,u|=p;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;g=c,c=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);y===null&&(s=x),n.baseState=s,n.firstBaseUpdate=m,n.lastBaseUpdate=y,i===null&&(n.shared.lanes=0),ml|=u,e.lanes=u,e.memoizedState=x}}function $f(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Rf(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)$f(l[e],t)}var da=o(null),ei=o(0);function wf(e,t){e=Ft,M(ei,e),M(da,t),Ft=e|t.baseLanes}function Gu(){M(ei,Ft),M(da,da.current)}function Xu(){Ft=ei.current,T(da),T(ei)}var ut=o(null),bt=null;function fl(e){var t=e.alternate;M(Me,Me.current&1),M(ut,e),bt===null&&(t===null||da.current!==null||t.memoizedState!==null)&&(bt=e)}function Qu(e){M(Me,Me.current),M(ut,e),bt===null&&(bt=e)}function jf(e){e.tag===22?(M(Me,Me.current),M(ut,e),bt===null&&(bt=e)):ol()}function ol(){M(Me,Me.current),M(ut,ut.current)}function ct(e){T(ut),bt===e&&(bt=null),T(Me)}var Me=o(0);function ti(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Fc(l)||Wc(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gt=0,Q=null,oe=null,De=null,li=!1,ma=!1,Yl=!1,ai=0,Ia=0,ha=null,Xm=0;function Se(){throw Error(h(321))}function Zu(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!nt(e[l],t[l]))return!1;return!0}function Vu(e,t,l,a,n,i){return Gt=i,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?So:cc,Yl=!1,i=l(a,n),Yl=!1,ma&&(i=Bf(t,l,a,n)),Hf(e),i}function Hf(e){v.H=tn;var t=oe!==null&&oe.next!==null;if(Gt=0,De=oe=Q=null,li=!1,Ia=0,ha=null,t)throw Error(h(300));e===null||Oe||(e=e.dependencies,e!==null&&kn(e)&&(Oe=!0))}function Bf(e,t,l,a){Q=e;var n=0;do{if(ma&&(ha=null),Ia=0,ma=!1,25<=n)throw Error(h(301));if(n+=1,De=oe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}v.H=xo,i=t(l,a)}while(ma);return i}function Qm(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?Pa(t):t,e=e.useState()[0],(oe!==null?oe.memoizedState:null)!==e&&(Q.flags|=1024),t}function ku(){var e=ai!==0;return ai=0,e}function Ku(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Ju(e){if(li){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}li=!1}Gt=0,De=oe=Q=null,ma=!1,Ia=ai=0,ha=null}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Q.memoizedState=De=e:De=De.next=e,De}function Ce(){if(oe===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=De===null?Q.memoizedState:De.next;if(t!==null)De=t,oe=e;else{if(e===null)throw Q.alternate===null?Error(h(467)):Error(h(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},De===null?Q.memoizedState=De=e:De=De.next=e}return De}function ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(e){var t=Ia;return Ia+=1,ha===null&&(ha=[]),e=_f(ha,e,t),t=Q,(De===null?t.memoizedState:De.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?So:cc),e}function ii(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pa(e);if(e.$$typeof===Ee)return Be(e)}throw Error(h(438,String(e)))}function Fu(e){var t=null,l=Q.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=Q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=ni(),Q.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Dt;return t.index++,l}function Xt(e,t){return typeof t=="function"?t(e):t}function ui(e){var t=Ce();return Wu(t,oe,e)}function Wu(e,t,l){var a=e.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=u=null,s=null,m=t,y=!1;do{var x=m.lane&-536870913;if(x!==m.lane?(W&x)===x:(Gt&x)===x){var p=m.revertLane;if(p===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),x===sa&&(y=!0);else if((Gt&p)===p){m=m.next,p===sa&&(y=!0);continue}else x={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=x,u=i):s=s.next=x,Q.lanes|=p,ml|=p;x=m.action,Yl&&l(i,x),i=m.hasEagerState?m.eagerState:l(i,x)}else p={lane:x,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=p,u=i):s=s.next=p,Q.lanes|=x,ml|=x;m=m.next}while(m!==null&&m!==t);if(s===null?u=i:s.next=c,!nt(i,e.memoizedState)&&(Oe=!0,y&&(l=fa,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=s,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Iu(e){var t=Ce(),l=t.queue;if(l===null)throw Error(h(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);nt(i,t.memoizedState)||(Oe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function qf(e,t,l){var a=Q,n=Ce(),i=ee;if(i){if(l===void 0)throw Error(h(407));l=l()}else l=t();var u=!nt((oe||n).memoizedState,l);if(u&&(n.memoizedState=l,Oe=!0),n=n.queue,tc(Gf.bind(null,a,n,e),[e]),n.getSnapshot!==t||u||De!==null&&De.memoizedState.tag&1){if(a.flags|=2048,pa(9,{destroy:void 0},Lf.bind(null,a,n,l,t),null),pe===null)throw Error(h(349));i||(Gt&127)!==0||Yf(a,t,l)}return l}function Yf(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=Q.updateQueue,t===null?(t=ni(),Q.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Lf(e,t,l,a){t.value=l,t.getSnapshot=a,Xf(t)&&Qf(e)}function Gf(e,t,l){return l(function(){Xf(t)&&Qf(e)})}function Xf(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!nt(e,l)}catch{return!0}}function Qf(e){var t=Ul(e,2);t!==null&&Pe(t,e,2)}function Pu(e){var t=Ve();if(typeof e=="function"){var l=e;if(e=l(),Yl){Pt(!0);try{l()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:e},t}function Zf(e,t,l,a){return e.baseState=l,Wu(e,oe,typeof a=="function"?a:Xt)}function Zm(e,t,l,a,n){if(fi(e))throw Error(h(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};v.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,Vf(t,i)):(i.next=l.next,t.pending=l.next=i)}}function Vf(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=v.T,u={};v.T=u;try{var c=l(n,a),s=v.S;s!==null&&s(u,c),kf(e,t,c)}catch(m){ec(e,t,m)}finally{i!==null&&u.types!==null&&(i.types=u.types),v.T=i}}else try{i=l(n,a),kf(e,t,i)}catch(m){ec(e,t,m)}}function kf(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Kf(e,t,a)},function(a){return ec(e,t,a)}):Kf(e,t,l)}function Kf(e,t,l){t.status="fulfilled",t.value=l,Jf(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Vf(e,l)))}function ec(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Jf(t),t=t.next;while(t!==a)}e.action=null}function Jf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ff(e,t){return t}function Wf(e,t){if(ee){var l=pe.formState;if(l!==null){e:{var a=Q;if(ee){if(ye){t:{for(var n=ye,i=vt;n.nodeType!==8;){if(!i){n=null;break t}if(n=St(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ye=St(n.nextSibling),a=n.data==="F!";break e}}nl(a)}a=!1}a&&(t=l[0])}}return l=Ve(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ff,lastRenderedState:t},l.queue=a,l=yo.bind(null,Q,a),a.dispatch=l,a=Pu(!1),i=uc.bind(null,Q,!1,a.queue),a=Ve(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Zm.bind(null,Q,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function If(e){var t=Ce();return Pf(t,oe,e)}function Pf(e,t,l){if(t=Wu(e,t,Ff)[0],e=ui(Xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Pa(t)}catch(u){throw u===oa?Fn:u}else a=t;t=Ce();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(Q.flags|=2048,pa(9,{destroy:void 0},Vm.bind(null,n,l),null)),[a,i,e]}function Vm(e,t){e.action=t}function eo(e){var t=Ce(),l=oe;if(l!==null)return Pf(t,l,e);Ce(),t=t.memoizedState,l=Ce();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function pa(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=Q.updateQueue,t===null&&(t=ni(),Q.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function to(){return Ce().memoizedState}function ci(e,t,l,a){var n=Ve();Q.flags|=e,n.memoizedState=pa(1|t,{destroy:void 0},l,a===void 0?null:a)}function si(e,t,l,a){var n=Ce();a=a===void 0?null:a;var i=n.memoizedState.inst;oe!==null&&a!==null&&Zu(a,oe.memoizedState.deps)?n.memoizedState=pa(t,i,l,a):(Q.flags|=e,n.memoizedState=pa(1|t,i,l,a))}function lo(e,t){ci(8390656,8,e,t)}function tc(e,t){si(2048,8,e,t)}function km(e){Q.flags|=4;var t=Q.updateQueue;if(t===null)t=ni(),Q.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function ao(e){var t=Ce().memoizedState;return km({ref:t,nextImpl:e}),function(){if((ne&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function no(e,t){return si(4,2,e,t)}function io(e,t){return si(4,4,e,t)}function uo(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function co(e,t,l){l=l!=null?l.concat([e]):null,si(4,4,uo.bind(null,t,e),l)}function lc(){}function so(e,t){var l=Ce();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Zu(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function fo(e,t){var l=Ce();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Zu(t,a[1]))return a[0];if(a=e(),Yl){Pt(!0);try{e()}finally{Pt(!1)}}return l.memoizedState=[a,t],a}function ac(e,t,l){return l===void 0||(Gt&1073741824)!==0&&(W&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=rr(),Q.lanes|=e,ml|=e,l)}function oo(e,t,l,a){return nt(l,t)?l:da.current!==null?(e=ac(e,l,a),nt(e,t)||(Oe=!0),e):(Gt&42)===0||(Gt&1073741824)!==0&&(W&261930)===0?(Oe=!0,e.memoizedState=l):(e=rr(),Q.lanes|=e,ml|=e,t)}function ro(e,t,l,a,n){var i=A.p;A.p=i!==0&&8>i?i:8;var u=v.T,c={};v.T=c,uc(e,!1,t,l);try{var s=n(),m=v.S;if(m!==null&&m(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var y=Gm(s,a);en(e,t,y,ot(e))}else en(e,t,a,ot(e))}catch(x){en(e,t,{then:function(){},status:"rejected",reason:x},ot())}finally{A.p=i,u!==null&&c.types!==null&&(u.types=c.types),v.T=u}}function Km(){}function nc(e,t,l,a){if(e.tag!==5)throw Error(h(476));var n=mo(e).queue;ro(e,n,t,q,l===null?Km:function(){return ho(e),l(a)})}function mo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:q},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ho(e){var t=mo(e);t.next===null&&(t=e.alternate.memoizedState),en(e,t.next.queue,{},ot())}function ic(){return Be(vn)}function po(){return Ce().memoizedState}function go(){return Ce().memoizedState}function Jm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=ot();e=cl(l);var a=sl(t,e,l);a!==null&&(Pe(a,t,l),Ja(a,t,l)),t={cache:Ru()},e.payload=t;return}t=t.return}}function Fm(e,t,l){var a=ot();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fi(e)?vo(t,l):(l=Eu(e,t,l,a),l!==null&&(Pe(l,e,a),bo(l,t,a)))}function yo(e,t,l){var a=ot();en(e,t,l,a)}function en(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(fi(e))vo(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,nt(c,u))return Xn(e,t,n,0),pe===null&&Gn(),!1}catch{}if(l=Eu(e,t,n,a),l!==null)return Pe(l,e,a),bo(l,t,a),!0}return!1}function uc(e,t,l,a){if(a={lane:2,revertLane:Bc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fi(e)){if(t)throw Error(h(479))}else t=Eu(e,l,a,2),t!==null&&Pe(t,e,2)}function fi(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function vo(e,t){ma=li=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function bo(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Ts(e,l)}}var tn={readContext:Be,use:ii,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se,useHostTransitionStatus:Se,useFormState:Se,useActionState:Se,useOptimistic:Se,useMemoCache:Se,useCacheRefresh:Se};tn.useEffectEvent=Se;var So={readContext:Be,use:ii,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:lo,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,ci(4194308,4,uo.bind(null,t,e),l)},useLayoutEffect:function(e,t){return ci(4194308,4,e,t)},useInsertionEffect:function(e,t){ci(4,2,e,t)},useMemo:function(e,t){var l=Ve();t=t===void 0?null:t;var a=e();if(Yl){Pt(!0);try{e()}finally{Pt(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Ve();if(l!==void 0){var n=l(t);if(Yl){Pt(!0);try{l(t)}finally{Pt(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Fm.bind(null,Q,e),[a.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:function(e){e=Pu(e);var t=e.queue,l=yo.bind(null,Q,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:lc,useDeferredValue:function(e,t){var l=Ve();return ac(l,e,t)},useTransition:function(){var e=Pu(!1);return e=ro.bind(null,Q,e.queue,!0,!1),Ve().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=Q,n=Ve();if(ee){if(l===void 0)throw Error(h(407));l=l()}else{if(l=t(),pe===null)throw Error(h(349));(W&127)!==0||Yf(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,lo(Gf.bind(null,a,i,e),[e]),a.flags|=2048,pa(9,{destroy:void 0},Lf.bind(null,a,i,l,t),null),l},useId:function(){var e=Ve(),t=pe.identifierPrefix;if(ee){var l=Ut,a=Ot;l=(a&~(1<<32-at(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=ai++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Xm++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ic,useFormState:Wf,useActionState:Wf,useOptimistic:function(e){var t=Ve();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=uc.bind(null,Q,!0,l),l.dispatch=t,[e,t]},useMemoCache:Fu,useCacheRefresh:function(){return Ve().memoizedState=Jm.bind(null,Q)},useEffectEvent:function(e){var t=Ve(),l={impl:e};return t.memoizedState=l,function(){if((ne&2)!==0)throw Error(h(440));return l.impl.apply(void 0,arguments)}}},cc={readContext:Be,use:ii,useCallback:so,useContext:Be,useEffect:tc,useImperativeHandle:co,useInsertionEffect:no,useLayoutEffect:io,useMemo:fo,useReducer:ui,useRef:to,useState:function(){return ui(Xt)},useDebugValue:lc,useDeferredValue:function(e,t){var l=Ce();return oo(l,oe.memoizedState,e,t)},useTransition:function(){var e=ui(Xt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:Pa(e),t]},useSyncExternalStore:qf,useId:po,useHostTransitionStatus:ic,useFormState:If,useActionState:If,useOptimistic:function(e,t){var l=Ce();return Zf(l,oe,e,t)},useMemoCache:Fu,useCacheRefresh:go};cc.useEffectEvent=ao;var xo={readContext:Be,use:ii,useCallback:so,useContext:Be,useEffect:tc,useImperativeHandle:co,useInsertionEffect:no,useLayoutEffect:io,useMemo:fo,useReducer:Iu,useRef:to,useState:function(){return Iu(Xt)},useDebugValue:lc,useDeferredValue:function(e,t){var l=Ce();return oe===null?ac(l,e,t):oo(l,oe.memoizedState,e,t)},useTransition:function(){var e=Iu(Xt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:Pa(e),t]},useSyncExternalStore:qf,useId:po,useHostTransitionStatus:ic,useFormState:eo,useActionState:eo,useOptimistic:function(e,t){var l=Ce();return oe!==null?Zf(l,oe,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:go};xo.useEffectEvent=ao;function sc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:w({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var fc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=ot(),n=cl(a);n.payload=t,l!=null&&(n.callback=l),t=sl(e,n,a),t!==null&&(Pe(t,e,a),Ja(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=ot(),n=cl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=sl(e,n,a),t!==null&&(Pe(t,e,a),Ja(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=ot(),a=cl(l);a.tag=2,t!=null&&(a.callback=t),t=sl(e,a,l),t!==null&&(Pe(t,e,l),Ja(t,e,l))}};function To(e,t,l,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!La(l,a)||!La(n,i):!0}function Eo(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&fc.enqueueReplaceState(t,t.state,null)}function Ll(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=w({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function zo(e){Ln(e)}function Ao(e){console.error(e)}function Mo(e){Ln(e)}function oi(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Co(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function oc(e,t,l){return l=cl(l),l.tag=3,l.payload={element:null},l.callback=function(){oi(e,t)},l}function _o(e){return e=cl(e),e.tag=3,e}function Do(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Co(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Co(t,l,a),typeof n!="function"&&(hl===null?hl=new Set([this]):hl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Wm(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ca(t,l,n,!0),l=ut.current,l!==null){switch(l.tag){case 31:case 13:return bt===null?Ti():l.alternate===null&&xe===0&&(xe=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Wn?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),wc(e,a,n)),!1;case 22:return l.flags|=65536,a===Wn?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),wc(e,a,n)),!1}throw Error(h(435,l.tag))}return wc(e,a,n),Ti(),!1}if(ee)return t=ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Du&&(e=Error(h(422),{cause:a}),Qa(pt(e,l)))):(a!==Du&&(t=Error(h(423),{cause:a}),Qa(pt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=pt(a,l),n=oc(e.stateNode,a,n),Yu(e,n),xe!==4&&(xe=2)),!1;var i=Error(h(520),{cause:a});if(i=pt(i,l),on===null?on=[i]:on.push(i),xe!==4&&(xe=2),t===null)return!0;a=pt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=oc(l.stateNode,a,e),Yu(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(hl===null||!hl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=_o(n),Do(n,e,l,a),Yu(l,n),!1}l=l.return}while(l!==null);return!1}var rc=Error(h(461)),Oe=!1;function qe(e,t,l,a){t.child=e===null?Nf(t,null,l,a):ql(t,e.child,l,a)}function Oo(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return wl(t),a=Vu(e,t,l,u,i,n),c=ku(),e!==null&&!Oe?(Ku(e,t,n),Qt(e,t,n)):(ee&&c&&Cu(t),t.flags|=1,qe(e,t,a,n),t.child)}function Uo(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!zu(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,No(e,t,i,a,n)):(e=Zn(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!bc(e,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:La,l(u,a)&&e.ref===t.ref)return Qt(e,t,n)}return t.flags|=1,e=Bt(i,a),e.ref=t.ref,e.return=t,t.child=e}function No(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(La(i,a)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=a=i,bc(e,n))(e.flags&131072)!==0&&(Oe=!0);else return t.lanes=e.lanes,Qt(e,t,n)}return dc(e,t,l,a,n)}function $o(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return Ro(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Jn(t,i!==null?i.cachePool:null),i!==null?wf(t,i):Gu(),jf(t);else return a=t.lanes=536870912,Ro(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Jn(t,i.cachePool),wf(t,i),ol(),t.memoizedState=null):(e!==null&&Jn(t,null),Gu(),ol());return qe(e,t,n,l),t.child}function ln(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ro(e,t,l,a,n){var i=ju();return i=i===null?null:{parent:_e._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&Jn(t,null),Gu(),jf(t),e!==null&&ca(e,t,a,!0),t.childLanes=n,null}function ri(e,t){return t=mi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function wo(e,t,l){return ql(t,e.child,null,l),e=ri(t,t.pendingProps),e.flags|=2,ct(t),t.memoizedState=null,e}function Im(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(a.mode==="hidden")return e=ri(t,a),t.lanes=536870912,ln(null,e);if(Qu(t),(e=ye)?(e=kr(e,vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ll!==null?{id:Ot,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},l=yf(e),l.return=t,t.child=l,He=t,ye=null)):e=null,e===null)throw nl(t);return t.lanes=536870912,null}return ri(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Qu(t),n)if(t.flags&256)t.flags&=-257,t=wo(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(Oe||ca(e,t,l,!1),n=(l&e.childLanes)!==0,Oe||n){if(a=pe,a!==null&&(u=Es(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ul(e,u),Pe(a,e,u),rc;Ti(),t=wo(e,t,l)}else e=i.treeContext,ye=St(u.nextSibling),He=t,ee=!0,al=null,vt=!1,e!==null&&Sf(t,e),t=ri(t,a),t.flags|=4096;return t}return e=Bt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function di(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(h(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function dc(e,t,l,a,n){return wl(t),l=Vu(e,t,l,a,void 0,n),a=ku(),e!==null&&!Oe?(Ku(e,t,n),Qt(e,t,n)):(ee&&a&&Cu(t),t.flags|=1,qe(e,t,l,n),t.child)}function jo(e,t,l,a,n,i){return wl(t),t.updateQueue=null,l=Bf(t,a,l,n),Hf(e),a=ku(),e!==null&&!Oe?(Ku(e,t,i),Qt(e,t,i)):(ee&&a&&Cu(t),t.flags|=1,qe(e,t,l,i),t.child)}function Ho(e,t,l,a,n){if(wl(t),t.stateNode===null){var i=aa,u=l.contextType;typeof u=="object"&&u!==null&&(i=Be(u)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Bu(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?Be(u):aa,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(sc(t,l,u,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&fc.enqueueReplaceState(i,i.state,null),Wa(t,a,i,n),Fa(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,s=Ll(l,c);i.props=s;var m=i.context,y=l.contextType;u=aa,typeof y=="object"&&y!==null&&(u=Be(y));var x=l.getDerivedStateFromProps;y=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||m!==u)&&Eo(t,i,a,u),ul=!1;var p=t.memoizedState;i.state=p,Wa(t,a,i,n),Fa(),m=t.memoizedState,c||p!==m||ul?(typeof x=="function"&&(sc(t,l,x,a),m=t.memoizedState),(s=ul||To(t,l,s,a,p,m,u))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=m),i.props=a,i.state=m,i.context=u,a=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,qu(e,t),u=t.memoizedProps,y=Ll(l,u),i.props=y,x=t.pendingProps,p=i.context,m=l.contextType,s=aa,typeof m=="object"&&m!==null&&(s=Be(m)),c=l.getDerivedStateFromProps,(m=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==x||p!==s)&&Eo(t,i,a,s),ul=!1,p=t.memoizedState,i.state=p,Wa(t,a,i,n),Fa();var g=t.memoizedState;u!==x||p!==g||ul||e!==null&&e.dependencies!==null&&kn(e.dependencies)?(typeof c=="function"&&(sc(t,l,c,a),g=t.memoizedState),(y=ul||To(t,l,y,a,p,g,s)||e!==null&&e.dependencies!==null&&kn(e.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,g,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,g,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),i.props=a,i.state=g,i.context=s,a=y):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,di(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=ql(t,e.child,null,n),t.child=ql(t,null,l,n)):qe(e,t,l,n),t.memoizedState=i.state,e=t.child):e=Qt(e,t,n),e}function Bo(e,t,l,a){return $l(),t.flags|=256,qe(e,t,l,a),t.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(e){return{baseLanes:e,cachePool:Mf()}}function pc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=ft),e}function qo(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(n?fl(t):ol(),(e=ye)?(e=kr(e,vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ll!==null?{id:Ot,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},l=yf(e),l.return=t,t.child=l,He=t,ye=null)):e=null,e===null)throw nl(t);return Wc(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(ol(),n=t.mode,c=mi({mode:"hidden",children:c},n),a=Nl(a,n,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=hc(l),a.childLanes=pc(e,u,l),t.memoizedState=mc,ln(null,a)):(fl(t),gc(t,c))}var s=e.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(i)t.flags&256?(fl(t),t.flags&=-257,t=yc(e,t,l)):t.memoizedState!==null?(ol(),t.child=e.child,t.flags|=128,t=null):(ol(),c=a.fallback,n=t.mode,a=mi({mode:"visible",children:a.children},n),c=Nl(c,n,l,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,ql(t,e.child,null,l),a=t.child,a.memoizedState=hc(l),a.childLanes=pc(e,u,l),t.memoizedState=mc,t=ln(null,a));else if(fl(t),Wc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var m=u.dgst;u=m,a=Error(h(419)),a.stack="",a.digest=u,Qa({value:a,source:null,stack:null}),t=yc(e,t,l)}else if(Oe||ca(e,t,l,!1),u=(l&e.childLanes)!==0,Oe||u){if(u=pe,u!==null&&(a=Es(u,l),a!==0&&a!==s.retryLane))throw s.retryLane=a,Ul(e,a),Pe(u,e,a),rc;Fc(c)||Ti(),t=yc(e,t,l)}else Fc(c)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,ye=St(c.nextSibling),He=t,ee=!0,al=null,vt=!1,e!==null&&Sf(t,e),t=gc(t,a.children),t.flags|=4096);return t}return n?(ol(),c=a.fallback,n=t.mode,s=e.child,m=s.sibling,a=Bt(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,m!==null?c=Bt(m,c):(c=Nl(c,n,l,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,ln(null,a),a=t.child,c=e.child.memoizedState,c===null?c=hc(l):(n=c.cachePool,n!==null?(s=_e._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Mf(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=pc(e,u,l),t.memoizedState=mc,ln(e.child,a)):(fl(t),l=e.child,e=l.sibling,l=Bt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function gc(e,t){return t=mi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mi(e,t){return e=it(22,e,null,t),e.lanes=0,e}function yc(e,t,l){return ql(t,e.child,null,l),e=gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yo(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Nu(e.return,t,l)}function vc(e,t,l,a,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function Lo(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=Me.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,M(Me,u),qe(e,t,a,l),a=ee?Xa:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yo(e,l,t);else if(e.tag===19)Yo(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&ti(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),vc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ti(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}vc(t,!0,l,null,i,a);break;case"together":vc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Qt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),ml|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ca(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,l=Bt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Bt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function bc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&kn(e)))}function Pm(e,t,l){switch(t.tag){case 3:Ze(t,t.stateNode.containerInfo),il(t,_e,e.memoizedState.cache),$l();break;case 27:case 5:_a(t);break;case 4:Ze(t,t.stateNode.containerInfo);break;case 10:il(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Qu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(fl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?qo(e,t,l):(fl(t),e=Qt(e,t,l),e!==null?e.sibling:null);fl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ca(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Lo(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),M(Me,Me.current),a)break;return null;case 22:return t.lanes=0,$o(e,t,l,t.pendingProps);case 24:il(t,_e,e.memoizedState.cache)}return Qt(e,t,l)}function Go(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Oe=!0;else{if(!bc(e,l)&&(t.flags&128)===0)return Oe=!1,Pm(e,t,l);Oe=(e.flags&131072)!==0}else Oe=!1,ee&&(t.flags&1048576)!==0&&bf(t,Xa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Hl(t.elementType),t.type=e,typeof e=="function")zu(e)?(a=Ll(e,a),t.tag=1,t=Ho(null,t,e,a,l)):(t.tag=0,t=dc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===we){t.tag=11,t=Oo(null,t,e,a,l);break e}else if(n===B){t.tag=14,t=Uo(null,t,e,a,l);break e}}throw t=Rt(e)||e,Error(h(306,t,""))}}return t;case 0:return dc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Ll(a,t.pendingProps),Ho(e,t,a,n,l);case 3:e:{if(Ze(t,t.stateNode.containerInfo),e===null)throw Error(h(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,qu(e,t),Wa(t,a,null,l);var u=t.memoizedState;if(a=u.cache,il(t,_e,a),a!==i.cache&&$u(t,[_e],l,!0),Fa(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Bo(e,t,a,l);break e}else if(a!==n){n=pt(Error(h(424)),t),Qa(n),t=Bo(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ye=St(e.firstChild),He=t,ee=!0,al=null,vt=!0,l=Nf(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if($l(),a===n){t=Qt(e,t,l);break e}qe(e,t,a,l)}t=t.child}return t;case 26:return di(e,t),e===null?(l=Pr(t.type,null,t.pendingProps,null))?t.memoizedState=l:ee||(l=t.type,e=t.pendingProps,a=Di(K.current).createElement(l),a[je]=t,a[ke]=e,Ye(a,l,e),$e(a),t.stateNode=a):t.memoizedState=Pr(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _a(t),e===null&&ee&&(a=t.stateNode=Fr(t.type,t.pendingProps,K.current),He=t,vt=!0,n=ye,vl(t.type)?(Ic=n,ye=St(a.firstChild)):ye=n),qe(e,t,t.pendingProps.children,l),di(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((n=a=ye)&&(a=Dh(a,t.type,t.pendingProps,vt),a!==null?(t.stateNode=a,He=t,ye=St(a.firstChild),vt=!1,n=!0):n=!1),n||nl(t)),_a(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,kc(n,i)?a=null:u!==null&&kc(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Vu(e,t,Qm,null,null,l),vn._currentValue=n),di(e,t),qe(e,t,a,l),t.child;case 6:return e===null&&ee&&((e=l=ye)&&(l=Oh(l,t.pendingProps,vt),l!==null?(t.stateNode=l,He=t,ye=null,e=!0):e=!1),e||nl(t)),null;case 13:return qo(e,t,l);case 4:return Ze(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ql(t,null,a,l):qe(e,t,a,l),t.child;case 11:return Oo(e,t,t.type,t.pendingProps,l);case 7:return qe(e,t,t.pendingProps,l),t.child;case 8:return qe(e,t,t.pendingProps.children,l),t.child;case 12:return qe(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,il(t,t.type,a.value),qe(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,wl(t),n=Be(n),a=a(n),t.flags|=1,qe(e,t,a,l),t.child;case 14:return Uo(e,t,t.type,t.pendingProps,l);case 15:return No(e,t,t.type,t.pendingProps,l);case 19:return Lo(e,t,l);case 31:return Im(e,t,l);case 22:return $o(e,t,l,t.pendingProps);case 24:return wl(t),a=Be(_e),e===null?(n=ju(),n===null&&(n=pe,i=Ru(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},Bu(t),il(t,_e,n)):((e.lanes&l)!==0&&(qu(e,t),Wa(t,null,null,l),Fa()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),il(t,_e,a)):(a=i.cache,il(t,_e,a),a!==n.cache&&$u(t,[_e],l,!0))),qe(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function Zt(e){e.flags|=4}function Sc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(pr())e.flags|=8192;else throw Bl=Wn,Hu}else e.flags&=-16777217}function Xo(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nd(t))if(pr())e.flags|=8192;else throw Bl=Wn,Hu}function hi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ss():536870912,e.lanes|=t,ba|=t)}function an(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function eh(e,t,l){var a=t.pendingProps;switch(_u(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return ve(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Lt(_e),Ae(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ua(t)?Zt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ou())),ve(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Zt(t),i!==null?(ve(t),Xo(t,i)):(ve(t),Sc(t,n,null,a,l))):i?i!==e.memoizedState?(Zt(t),ve(t),Xo(t,i)):(ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Zt(t),ve(t),Sc(t,n,e,a,l)),null;case 27:if(An(t),l=K.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Zt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return ve(t),null}e=_.current,ua(t)?xf(t):(e=Fr(n,a,l),t.stateNode=e,Zt(t))}return ve(t),null;case 5:if(An(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Zt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return ve(t),null}if(i=_.current,ua(t))xf(t);else{var u=Di(K.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[je]=t,i[ke]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Ye(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Zt(t)}}return ve(t),Sc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Zt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(h(166));if(e=K.current,ua(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=He,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[je]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||qr(e.nodeValue,l)),e||nl(t,!0)}else e=Di(e).createTextNode(a),e[je]=t,t.stateNode=e}return ve(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ua(t),l!==null){if(e===null){if(!a)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[je]=t}else $l(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),e=!1}else l=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(ct(t),t):(ct(t),null);if((t.flags&128)!==0)throw Error(h(558))}return ve(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ua(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(h(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));n[je]=t}else $l(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),n=!1}else n=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ct(t),t):(ct(t),null)}return ct(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),hi(t,t.updateQueue),ve(t),null);case 4:return Ae(),e===null&&Gc(t.stateNode.containerInfo),ve(t),null;case 10:return Lt(t.type),ve(t),null;case 19:if(T(Me),a=t.memoizedState,a===null)return ve(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)an(a,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ti(e),i!==null){for(t.flags|=128,an(a,!1),e=i.updateQueue,t.updateQueue=e,hi(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)gf(l,e),l=l.sibling;return M(Me,Me.current&1|2),ee&&qt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&tt()>bi&&(t.flags|=128,n=!0,an(a,!1),t.lanes=4194304)}else{if(!n)if(e=ti(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,hi(t,e),an(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ee)return ve(t),null}else 2*tt()-a.renderingStartTime>bi&&l!==536870912&&(t.flags|=128,n=!0,an(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=tt(),e.sibling=null,l=Me.current,M(Me,n?l&1|2:l&1),ee&&qt(t,a.treeForkCount),e):(ve(t),null);case 22:case 23:return ct(t),Xu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),l=t.updateQueue,l!==null&&hi(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&T(jl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Lt(_e),ve(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function th(e,t){switch(_u(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lt(_e),Ae(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return An(t),null;case 31:if(t.memoizedState!==null){if(ct(t),t.alternate===null)throw Error(h(340));$l()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ct(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));$l()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(Me),null;case 4:return Ae(),null;case 10:return Lt(t.type),null;case 22:case 23:return ct(t),Xu(),e!==null&&T(jl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Lt(_e),null;case 25:return null;default:return null}}function Qo(e,t){switch(_u(t),t.tag){case 3:Lt(_e),Ae();break;case 26:case 27:case 5:An(t);break;case 4:Ae();break;case 31:t.memoizedState!==null&&ct(t);break;case 13:ct(t);break;case 19:T(Me);break;case 10:Lt(t.type);break;case 22:case 23:ct(t),Xu(),e!==null&&T(jl);break;case 24:Lt(_e)}}function nn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){se(t,t.return,c)}}function rl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=t;var s=l,m=c;try{m()}catch(y){se(n,s,y)}}}a=a.next}while(a!==i)}}catch(y){se(t,t.return,y)}}function Zo(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Rf(t,l)}catch(a){se(e,e.return,a)}}}function Vo(e,t,l){l.props=Ll(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){se(e,t,a)}}function un(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){se(e,t,n)}}function Nt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){se(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){se(e,t,n)}else l.current=null}function ko(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){se(e,e.return,n)}}function xc(e,t,l){try{var a=e.stateNode;Eh(a,e.type,l,t),a[ke]=t}catch(n){se(e,e.return,n)}}function Ko(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vl(e.type)||e.tag===4}function Tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ko(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ec(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=jt));else if(a!==4&&(a===27&&vl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Ec(e,t,l),e=e.sibling;e!==null;)Ec(e,t,l),e=e.sibling}function pi(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&vl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(pi(e,t,l),e=e.sibling;e!==null;)pi(e,t,l),e=e.sibling}function Jo(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ye(t,a,l),t[je]=e,t[ke]=l}catch(i){se(e,e.return,i)}}var Vt=!1,Ue=!1,zc=!1,Fo=typeof WeakSet=="function"?WeakSet:Set,Re=null;function lh(e,t){if(e=e.containerInfo,Zc=ji,e=cf(e),yu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,c=-1,s=-1,m=0,y=0,x=e,p=null;t:for(;;){for(var g;x!==l||n!==0&&x.nodeType!==3||(c=u+n),x!==i||a!==0&&x.nodeType!==3||(s=u+a),x.nodeType===3&&(u+=x.nodeValue.length),(g=x.firstChild)!==null;)p=x,x=g;for(;;){if(x===e)break t;if(p===l&&++m===n&&(c=u),p===i&&++y===a&&(s=u),(g=x.nextSibling)!==null)break;x=p,p=x.parentNode}x=g}l=c===-1||s===-1?null:{start:c,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(Vc={focusedElem:e,selectionRange:l},ji=!1,Re=t;Re!==null;)if(t=Re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Re=e;else for(;Re!==null;){switch(t=Re,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var C=Ll(l.type,n);e=a.getSnapshotBeforeUpdate(C,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(H){se(l,l.return,H)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Jc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,Re=e;break}Re=t.return}}function Wo(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Kt(e,l),a&4&&nn(5,l);break;case 1:if(Kt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){se(l,l.return,u)}else{var n=Ll(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){se(l,l.return,u)}}a&64&&Zo(l),a&512&&un(l,l.return);break;case 3:if(Kt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Rf(e,t)}catch(u){se(l,l.return,u)}}break;case 27:t===null&&a&4&&Jo(l);case 26:case 5:Kt(e,l),t===null&&a&4&&ko(l),a&512&&un(l,l.return);break;case 12:Kt(e,l);break;case 31:Kt(e,l),a&4&&er(e,l);break;case 13:Kt(e,l),a&4&&tr(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=rh.bind(null,l),Uh(e,l))));break;case 22:if(a=l.memoizedState!==null||Vt,!a){t=t!==null&&t.memoizedState!==null||Ue,n=Vt;var i=Ue;Vt=a,(Ue=t)&&!i?Jt(e,l,(l.subtreeFlags&8772)!==0):Kt(e,l),Vt=n,Ue=i}break;case 30:break;default:Kt(e,l)}}function Io(e){var t=e.alternate;t!==null&&(e.alternate=null,Io(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&eu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,Je=!1;function kt(e,t,l){for(l=l.child;l!==null;)Po(e,t,l),l=l.sibling}function Po(e,t,l){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Da,l)}catch{}switch(l.tag){case 26:Ue||Nt(l,t),kt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ue||Nt(l,t);var a=be,n=Je;vl(l.type)&&(be=l.stateNode,Je=!1),kt(e,t,l),pn(l.stateNode),be=a,Je=n;break;case 5:Ue||Nt(l,t);case 6:if(a=be,n=Je,be=null,kt(e,t,l),be=a,Je=n,be!==null)if(Je)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(l.stateNode)}catch(i){se(l,t,i)}else try{be.removeChild(l.stateNode)}catch(i){se(l,t,i)}break;case 18:be!==null&&(Je?(e=be,Zr(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ca(e)):Zr(be,l.stateNode));break;case 4:a=be,n=Je,be=l.stateNode.containerInfo,Je=!0,kt(e,t,l),be=a,Je=n;break;case 0:case 11:case 14:case 15:rl(2,l,t),Ue||rl(4,l,t),kt(e,t,l);break;case 1:Ue||(Nt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Vo(l,t,a)),kt(e,t,l);break;case 21:kt(e,t,l);break;case 22:Ue=(a=Ue)||l.memoizedState!==null,kt(e,t,l),Ue=a;break;default:kt(e,t,l)}}function er(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ca(e)}catch(l){se(t,t.return,l)}}}function tr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ca(e)}catch(l){se(t,t.return,l)}}function ah(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Fo),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Fo),t;default:throw Error(h(435,e.tag))}}function gi(e,t){var l=ah(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=dh.bind(null,e,a);a.then(n,n)}})}function Fe(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(vl(c.type)){be=c.stateNode,Je=!1;break e}break;case 5:be=c.stateNode,Je=!1;break e;case 3:case 4:be=c.stateNode.containerInfo,Je=!0;break e}c=c.return}if(be===null)throw Error(h(160));Po(i,u,n),be=null,Je=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)lr(t,e),t=t.sibling}var zt=null;function lr(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fe(t,e),We(e),a&4&&(rl(3,e,e.return),nn(3,e),rl(5,e,e.return));break;case 1:Fe(t,e),We(e),a&512&&(Ue||l===null||Nt(l,l.return)),a&64&&Vt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=zt;if(Fe(t,e),We(e),a&512&&(Ue||l===null||Nt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Na]||i[je]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Ye(i,a,l),i[je]=e,$e(i),a=i;break e;case"link":var u=ld("link","href",n).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break t}}i=n.createElement(a),Ye(i,a,l),n.head.appendChild(i);break;case"meta":if(u=ld("meta","content",n).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break t}}i=n.createElement(a),Ye(i,a,l),n.head.appendChild(i);break;default:throw Error(h(468,a))}i[je]=e,$e(i),a=i}e.stateNode=a}else ad(n,e.type,e.stateNode);else e.stateNode=td(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?ad(n,e.type,e.stateNode):td(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&xc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Fe(t,e),We(e),a&512&&(Ue||l===null||Nt(l,l.return)),l!==null&&a&4&&xc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Fe(t,e),We(e),a&512&&(Ue||l===null||Nt(l,l.return)),e.flags&32){n=e.stateNode;try{Fl(n,"")}catch(C){se(e,e.return,C)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,xc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(zc=!0);break;case 6:if(Fe(t,e),We(e),a&4){if(e.stateNode===null)throw Error(h(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(C){se(e,e.return,C)}}break;case 3:if(Ni=null,n=zt,zt=Oi(t.containerInfo),Fe(t,e),zt=n,We(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ca(t.containerInfo)}catch(C){se(e,e.return,C)}zc&&(zc=!1,ar(e));break;case 4:a=zt,zt=Oi(e.stateNode.containerInfo),Fe(t,e),We(e),zt=a;break;case 12:Fe(t,e),We(e);break;case 31:Fe(t,e),We(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,gi(e,a)));break;case 13:Fe(t,e),We(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(vi=tt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,gi(e,a)));break;case 22:n=e.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,m=Vt,y=Ue;if(Vt=m||n,Ue=y||s,Fe(t,e),Ue=y,Vt=m,We(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||s||Vt||Ue||Gl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){s=l=t;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=s.stateNode;var x=s.memoizedProps.style,p=x!=null&&x.hasOwnProperty("display")?x.display:null;c.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(C){se(s,s.return,C)}}}else if(t.tag===6){if(l===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(C){se(s,s.return,C)}}}else if(t.tag===18){if(l===null){s=t;try{var g=s.stateNode;n?Vr(g,!0):Vr(s.stateNode,!1)}catch(C){se(s,s.return,C)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,gi(e,l))));break;case 19:Fe(t,e),We(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,gi(e,a)));break;case 30:break;case 21:break;default:Fe(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Ko(a)){l=a;break}a=a.return}if(l==null)throw Error(h(160));switch(l.tag){case 27:var n=l.stateNode,i=Tc(e);pi(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(Fl(u,""),l.flags&=-33);var c=Tc(e);pi(e,c,u);break;case 3:case 4:var s=l.stateNode.containerInfo,m=Tc(e);Ec(e,m,s);break;default:throw Error(h(161))}}catch(y){se(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ar(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ar(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Kt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Wo(e,t.alternate,t),t=t.sibling}function Gl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:rl(4,t,t.return),Gl(t);break;case 1:Nt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Vo(t,t.return,l),Gl(t);break;case 27:pn(t.stateNode);case 26:case 5:Nt(t,t.return),Gl(t);break;case 22:t.memoizedState===null&&Gl(t);break;case 30:Gl(t);break;default:Gl(t)}e=e.sibling}}function Jt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Jt(n,i,l),nn(4,i);break;case 1:if(Jt(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){se(a,a.return,m)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)$f(s[n],c)}catch(m){se(a,a.return,m)}}l&&u&64&&Zo(i),un(i,i.return);break;case 27:Jo(i);case 26:case 5:Jt(n,i,l),l&&a===null&&u&4&&ko(i),un(i,i.return);break;case 12:Jt(n,i,l);break;case 31:Jt(n,i,l),l&&u&4&&er(n,i);break;case 13:Jt(n,i,l),l&&u&4&&tr(n,i);break;case 22:i.memoizedState===null&&Jt(n,i,l),un(i,i.return);break;case 30:break;default:Jt(n,i,l)}t=t.sibling}}function Ac(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Za(l))}function Mc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Za(e))}function At(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nr(e,t,l,a),t=t.sibling}function nr(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:At(e,t,l,a),n&2048&&nn(9,t);break;case 1:At(e,t,l,a);break;case 3:At(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Za(e)));break;case 12:if(n&2048){At(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){se(t,t.return,s)}}else At(e,t,l,a);break;case 31:At(e,t,l,a);break;case 13:At(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?At(e,t,l,a):cn(e,t):i._visibility&2?At(e,t,l,a):(i._visibility|=2,ga(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Ac(u,t);break;case 24:At(e,t,l,a),n&2048&&Mc(t.alternate,t);break;default:At(e,t,l,a)}}function ga(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,c=l,s=a,m=u.flags;switch(u.tag){case 0:case 11:case 15:ga(i,u,c,s,n),nn(8,u);break;case 23:break;case 22:var y=u.stateNode;u.memoizedState!==null?y._visibility&2?ga(i,u,c,s,n):cn(i,u):(y._visibility|=2,ga(i,u,c,s,n)),n&&m&2048&&Ac(u.alternate,u);break;case 24:ga(i,u,c,s,n),n&&m&2048&&Mc(u.alternate,u);break;default:ga(i,u,c,s,n)}t=t.sibling}}function cn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:cn(l,a),n&2048&&Ac(a.alternate,a);break;case 24:cn(l,a),n&2048&&Mc(a.alternate,a);break;default:cn(l,a)}t=t.sibling}}var sn=8192;function ya(e,t,l){if(e.subtreeFlags&sn)for(e=e.child;e!==null;)ir(e,t,l),e=e.sibling}function ir(e,t,l){switch(e.tag){case 26:ya(e,t,l),e.flags&sn&&e.memoizedState!==null&&Xh(l,zt,e.memoizedState,e.memoizedProps);break;case 5:ya(e,t,l);break;case 3:case 4:var a=zt;zt=Oi(e.stateNode.containerInfo),ya(e,t,l),zt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=sn,sn=16777216,ya(e,t,l),sn=a):ya(e,t,l));break;default:ya(e,t,l)}}function ur(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function fn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Re=a,sr(a,e)}ur(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cr(e),e=e.sibling}function cr(e){switch(e.tag){case 0:case 11:case 15:fn(e),e.flags&2048&&rl(9,e,e.return);break;case 3:fn(e);break;case 12:fn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yi(e)):fn(e);break;default:fn(e)}}function yi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Re=a,sr(a,e)}ur(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:rl(8,t,t.return),yi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,yi(t));break;default:yi(t)}e=e.sibling}}function sr(e,t){for(;Re!==null;){var l=Re;switch(l.tag){case 0:case 11:case 15:rl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Za(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Re=a;else e:for(l=e;Re!==null;){a=Re;var n=a.sibling,i=a.return;if(Io(a),a===l){Re=null;break e}if(n!==null){n.return=i,Re=n;break e}Re=i}}}var nh={getCacheForType:function(e){var t=Be(_e),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Be(_e).controller.signal}},ih=typeof WeakMap=="function"?WeakMap:Map,ne=0,pe=null,J=null,W=0,ce=0,st=null,dl=!1,va=!1,Cc=!1,Ft=0,xe=0,ml=0,Xl=0,_c=0,ft=0,ba=0,on=null,Ie=null,Dc=!1,vi=0,fr=0,bi=1/0,Si=null,hl=null,Ne=0,pl=null,Sa=null,Wt=0,Oc=0,Uc=null,or=null,rn=0,Nc=null;function ot(){return(ne&2)!==0&&W!==0?W&-W:v.T!==null?Bc():zs()}function rr(){if(ft===0)if((W&536870912)===0||ee){var e=_n;_n<<=1,(_n&3932160)===0&&(_n=262144),ft=e}else ft=536870912;return e=ut.current,e!==null&&(e.flags|=32),ft}function Pe(e,t,l){(e===pe&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(xa(e,0),gl(e,W,ft,!1)),Ua(e,l),((ne&2)===0||e!==pe)&&(e===pe&&((ne&2)===0&&(Xl|=l),xe===4&&gl(e,W,ft,!1)),$t(e))}function dr(e,t,l){if((ne&6)!==0)throw Error(h(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Oa(e,t),n=a?sh(e,t):Rc(e,t,!0),i=a;do{if(n===0){va&&!a&&gl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!uh(l)){n=Rc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;n=on;var s=c.current.memoizedState.isDehydrated;if(s&&(xa(c,u).flags|=256),u=Rc(c,u,!1),u!==2){if(Cc&&!s){c.errorRecoveryDisabledLanes|=i,Xl|=i,n=4;break e}i=Ie,Ie=n,i!==null&&(Ie===null?Ie=i:Ie.push.apply(Ie,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){xa(e,0),gl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:gl(a,t,ft,!dl);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(n=vi+300-tt(),10<n)){if(gl(a,t,ft,!dl),On(a,0,!0)!==0)break e;Wt=t,a.timeoutHandle=Xr(mr.bind(null,a,l,Ie,Si,Dc,t,ft,Xl,ba,dl,i,"Throttled",-0,0),n);break e}mr(a,l,Ie,Si,Dc,t,ft,Xl,ba,dl,i,null,-0,0)}}break}while(!0);$t(e)}function mr(e,t,l,a,n,i,u,c,s,m,y,x,p,g){if(e.timeoutHandle=-1,x=t.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:jt},ir(t,i,x);var C=(i&62914560)===i?vi-tt():(i&4194048)===i?fr-tt():0;if(C=Qh(x,C),C!==null){Wt=i,e.cancelPendingCommit=C(xr.bind(null,e,t,i,l,a,n,u,c,s,y,x,null,p,g)),gl(e,i,u,!m);return}}xr(e,t,i,l,a,n,u,c,s)}function uh(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!nt(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gl(e,t,l,a){t&=~_c,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-at(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&xs(e,l,t)}function xi(){return(ne&6)===0?(dn(0),!1):!0}function $c(){if(J!==null){if(ce===0)var e=J.return;else e=J,Yt=Rl=null,Ju(e),ra=null,ka=0,e=J;for(;e!==null;)Qo(e.alternate,e),e=e.return;J=null}}function xa(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Mh(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Wt=0,$c(),pe=e,J=l=Bt(e.current,null),W=t,ce=0,st=null,dl=!1,va=Oa(e,t),Cc=!1,ba=ft=_c=Xl=ml=xe=0,Ie=on=null,Dc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-at(a),i=1<<n;t|=e[n],a&=~i}return Ft=t,Gn(),l}function hr(e,t){Q=null,v.H=tn,t===oa||t===Fn?(t=Df(),ce=3):t===Hu?(t=Df(),ce=4):ce=t===rc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,st=t,J===null&&(xe=1,oi(e,pt(t,e.current)))}function pr(){var e=ut.current;return e===null?!0:(W&4194048)===W?bt===null:(W&62914560)===W||(W&536870912)!==0?e===bt:!1}function gr(){var e=v.H;return v.H=tn,e===null?tn:e}function yr(){var e=v.A;return v.A=nh,e}function Ti(){xe=4,dl||(W&4194048)!==W&&ut.current!==null||(va=!0),(ml&134217727)===0&&(Xl&134217727)===0||pe===null||gl(pe,W,ft,!1)}function Rc(e,t,l){var a=ne;ne|=2;var n=gr(),i=yr();(pe!==e||W!==t)&&(Si=null,xa(e,t)),t=!1;var u=xe;e:do try{if(ce!==0&&J!==null){var c=J,s=st;switch(ce){case 8:$c(),u=6;break e;case 3:case 2:case 9:case 6:ut.current===null&&(t=!0);var m=ce;if(ce=0,st=null,Ta(e,c,s,m),l&&va){u=0;break e}break;default:m=ce,ce=0,st=null,Ta(e,c,s,m)}}ch(),u=xe;break}catch(y){hr(e,y)}while(!0);return t&&e.shellSuspendCounter++,Yt=Rl=null,ne=a,v.H=n,v.A=i,J===null&&(pe=null,W=0,Gn()),u}function ch(){for(;J!==null;)vr(J)}function sh(e,t){var l=ne;ne|=2;var a=gr(),n=yr();pe!==e||W!==t?(Si=null,bi=tt()+500,xa(e,t)):va=Oa(e,t);e:do try{if(ce!==0&&J!==null){t=J;var i=st;t:switch(ce){case 1:ce=0,st=null,Ta(e,t,i,1);break;case 2:case 9:if(Cf(i)){ce=0,st=null,br(t);break}t=function(){ce!==2&&ce!==9||pe!==e||(ce=7),$t(e)},i.then(t,t);break e;case 3:ce=7;break e;case 4:ce=5;break e;case 7:Cf(i)?(ce=0,st=null,br(t)):(ce=0,st=null,Ta(e,t,i,7));break;case 5:var u=null;switch(J.tag){case 26:u=J.memoizedState;case 5:case 27:var c=J;if(u?nd(u):c.stateNode.complete){ce=0,st=null;var s=c.sibling;if(s!==null)J=s;else{var m=c.return;m!==null?(J=m,Ei(m)):J=null}break t}}ce=0,st=null,Ta(e,t,i,5);break;case 6:ce=0,st=null,Ta(e,t,i,6);break;case 8:$c(),xe=6;break e;default:throw Error(h(462))}}fh();break}catch(y){hr(e,y)}while(!0);return Yt=Rl=null,v.H=a,v.A=n,ne=l,J!==null?0:(pe=null,W=0,Gn(),xe)}function fh(){for(;J!==null&&!Nd();)vr(J)}function vr(e){var t=Go(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?Ei(e):J=t}function br(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=jo(l,t,t.pendingProps,t.type,void 0,W);break;case 11:t=jo(l,t,t.pendingProps,t.type.render,t.ref,W);break;case 5:Ju(t);default:Qo(l,t),t=J=gf(t,Ft),t=Go(l,t,Ft)}e.memoizedProps=e.pendingProps,t===null?Ei(e):J=t}function Ta(e,t,l,a){Yt=Rl=null,Ju(t),ra=null,ka=0;var n=t.return;try{if(Wm(e,n,t,l,W)){xe=1,oi(e,pt(l,e.current)),J=null;return}}catch(i){if(n!==null)throw J=n,i;xe=1,oi(e,pt(l,e.current)),J=null;return}t.flags&32768?(ee||a===1?e=!0:va||(W&536870912)!==0?e=!1:(dl=e=!0,(a===2||a===9||a===3||a===6)&&(a=ut.current,a!==null&&a.tag===13&&(a.flags|=16384))),Sr(t,e)):Ei(t)}function Ei(e){var t=e;do{if((t.flags&32768)!==0){Sr(t,dl);return}e=t.return;var l=eh(t.alternate,t,Ft);if(l!==null){J=l;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);xe===0&&(xe=5)}function Sr(e,t){do{var l=th(e.alternate,e);if(l!==null){l.flags&=32767,J=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=l}while(e!==null);xe=6,J=null}function xr(e,t,l,a,n,i,u,c,s){e.cancelPendingCommit=null;do zi();while(Ne!==0);if((ne&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(i=t.lanes|t.childLanes,i|=Tu,Gd(e,l,i,u,c,s),e===pe&&(J=pe=null,W=0),Sa=t,pl=e,Wt=l,Oc=i,Uc=n,or=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,mh(Mn,function(){return Mr(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null,n=A.p,A.p=2,u=ne,ne|=4;try{lh(e,t,l)}finally{ne=u,A.p=n,v.T=a}}Ne=1,Tr(),Er(),zr()}}function Tr(){if(Ne===1){Ne=0;var e=pl,t=Sa,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=v.T,v.T=null;var a=A.p;A.p=2;var n=ne;ne|=4;try{lr(t,e);var i=Vc,u=cf(e.containerInfo),c=i.focusedElem,s=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&uf(c.ownerDocument.documentElement,c)){if(s!==null&&yu(c)){var m=s.start,y=s.end;if(y===void 0&&(y=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(y,c.value.length);else{var x=c.ownerDocument||document,p=x&&x.defaultView||window;if(p.getSelection){var g=p.getSelection(),C=c.textContent.length,H=Math.min(s.start,C),de=s.end===void 0?H:Math.min(s.end,C);!g.extend&&H>de&&(u=de,de=H,H=u);var r=nf(c,H),f=nf(c,de);if(r&&f&&(g.rangeCount!==1||g.anchorNode!==r.node||g.anchorOffset!==r.offset||g.focusNode!==f.node||g.focusOffset!==f.offset)){var d=x.createRange();d.setStart(r.node,r.offset),g.removeAllRanges(),H>de?(g.addRange(d),g.extend(f.node,f.offset)):(d.setEnd(f.node,f.offset),g.addRange(d))}}}}for(x=[],g=c;g=g.parentNode;)g.nodeType===1&&x.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<x.length;c++){var b=x[c];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}ji=!!Zc,Vc=Zc=null}finally{ne=n,A.p=a,v.T=l}}e.current=t,Ne=2}}function Er(){if(Ne===2){Ne=0;var e=pl,t=Sa,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=v.T,v.T=null;var a=A.p;A.p=2;var n=ne;ne|=4;try{Wo(e,t.alternate,t)}finally{ne=n,A.p=a,v.T=l}}Ne=3}}function zr(){if(Ne===4||Ne===3){Ne=0,$d();var e=pl,t=Sa,l=Wt,a=or;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ne=5:(Ne=0,Sa=pl=null,Ar(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(hl=null),Ii(l),t=t.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Da,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=v.T,n=A.p,A.p=2,v.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{v.T=t,A.p=n}}(Wt&3)!==0&&zi(),$t(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===Nc?rn++:(rn=0,Nc=e):rn=0,dn(0)}}function Ar(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Za(t)))}function zi(){return Tr(),Er(),zr(),Mr()}function Mr(){if(Ne!==5)return!1;var e=pl,t=Oc;Oc=0;var l=Ii(Wt),a=v.T,n=A.p;try{A.p=32>l?32:l,v.T=null,l=Uc,Uc=null;var i=pl,u=Wt;if(Ne=0,Sa=pl=null,Wt=0,(ne&6)!==0)throw Error(h(331));var c=ne;if(ne|=4,cr(i.current),nr(i,i.current,u,l),ne=c,dn(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Da,i)}catch{}return!0}finally{A.p=n,v.T=a,Ar(e,t)}}function Cr(e,t,l){t=pt(l,t),t=oc(e.stateNode,t,2),e=sl(e,t,2),e!==null&&(Ua(e,2),$t(e))}function se(e,t,l){if(e.tag===3)Cr(e,e,l);else for(;t!==null;){if(t.tag===3){Cr(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(hl===null||!hl.has(a))){e=pt(l,e),l=_o(2),a=sl(t,l,2),a!==null&&(Do(l,a,t,e),Ua(a,2),$t(a));break}}t=t.return}}function wc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new ih;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Cc=!0,n.add(l),e=oh.bind(null,e,t,l),t.then(e,e))}function oh(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,pe===e&&(W&l)===l&&(xe===4||xe===3&&(W&62914560)===W&&300>tt()-vi?(ne&2)===0&&xa(e,0):_c|=l,ba===W&&(ba=0)),$t(e)}function _r(e,t){t===0&&(t=Ss()),e=Ul(e,t),e!==null&&(Ua(e,t),$t(e))}function rh(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),_r(e,l)}function dh(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(h(314))}a!==null&&a.delete(t),_r(e,l)}function mh(e,t){return Ki(e,t)}var Ai=null,Ea=null,jc=!1,Mi=!1,Hc=!1,yl=0;function $t(e){e!==Ea&&e.next===null&&(Ea===null?Ai=Ea=e:Ea=Ea.next=e),Mi=!0,jc||(jc=!0,ph())}function dn(e,t){if(!Hc&&Mi){Hc=!0;do for(var l=!1,a=Ai;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-at(42|e)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Nr(a,i))}else i=W,i=On(a,a===pe?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Oa(a,i)||(l=!0,Nr(a,i));a=a.next}while(l);Hc=!1}}function hh(){Dr()}function Dr(){Mi=jc=!1;var e=0;yl!==0&&Ah()&&(e=yl);for(var t=tt(),l=null,a=Ai;a!==null;){var n=a.next,i=Or(a,t);i===0?(a.next=null,l===null?Ai=n:l.next=n,n===null&&(Ea=l)):(l=a,(e!==0||(i&3)!==0)&&(Mi=!0)),a=n}Ne!==0&&Ne!==5||dn(e),yl!==0&&(yl=0)}function Or(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-at(i),c=1<<u,s=n[u];s===-1?((c&l)===0||(c&a)!==0)&&(n[u]=Ld(c,t)):s<=t&&(e.expiredLanes|=c),i&=~c}if(t=pe,l=W,l=On(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ji(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Oa(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Ji(a),Ii(l)){case 2:case 8:l=vs;break;case 32:l=Mn;break;case 268435456:l=bs;break;default:l=Mn}return a=Ur.bind(null,e),l=Ki(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Ji(a),e.callbackPriority=2,e.callbackNode=null,2}function Ur(e,t){if(Ne!==0&&Ne!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(zi()&&e.callbackNode!==l)return null;var a=W;return a=On(e,e===pe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(dr(e,a,t),Or(e,tt()),e.callbackNode!=null&&e.callbackNode===l?Ur.bind(null,e):null)}function Nr(e,t){if(zi())return null;dr(e,t,!0)}function ph(){Ch(function(){(ne&6)!==0?Ki(ys,hh):Dr()})}function Bc(){if(yl===0){var e=sa;e===0&&(e=Cn,Cn<<=1,(Cn&261888)===0&&(Cn=256)),yl=e}return yl}function $r(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rn(""+e)}function Rr(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function gh(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=$r((n[ke]||null).action),u=a.submitter;u&&(t=(t=u[ke]||null)?$r(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new Bn("action","action",null,a,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(yl!==0){var s=u?Rr(n,u):new FormData(n);nc(l,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=u?Rr(n,u):new FormData(n),nc(l,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var qc=0;qc<xu.length;qc++){var Yc=xu[qc],yh=Yc.toLowerCase(),vh=Yc[0].toUpperCase()+Yc.slice(1);Et(yh,"on"+vh)}Et(of,"onAnimationEnd"),Et(rf,"onAnimationIteration"),Et(df,"onAnimationStart"),Et("dblclick","onDoubleClick"),Et("focusin","onFocus"),Et("focusout","onBlur"),Et(Rm,"onTransitionRun"),Et(wm,"onTransitionStart"),Et(jm,"onTransitionCancel"),Et(mf,"onTransitionEnd"),Kl("onMouseEnter",["mouseout","mouseover"]),Kl("onMouseLeave",["mouseout","mouseover"]),Kl("onPointerEnter",["pointerout","pointerover"]),Kl("onPointerLeave",["pointerout","pointerover"]),Cl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Cl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Cl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Cl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Cl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Cl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function wr(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var c=a[u],s=c.instance,m=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=m;try{i(n)}catch(y){Ln(y)}n.currentTarget=null,i=s}else for(u=0;u<a.length;u++){if(c=a[u],s=c.instance,m=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=m;try{i(n)}catch(y){Ln(y)}n.currentTarget=null,i=s}}}}function F(e,t){var l=t[Pi];l===void 0&&(l=t[Pi]=new Set);var a=e+"__bubble";l.has(a)||(jr(t,e,2,!1),l.add(a))}function Lc(e,t,l){var a=0;t&&(a|=4),jr(l,e,a,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Gc(e){if(!e[Ci]){e[Ci]=!0,Cs.forEach(function(l){l!=="selectionchange"&&(bh.has(l)||Lc(l,!1,e),Lc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,Lc("selectionchange",!1,t))}}function jr(e,t,l,a){switch(rd(t)){case 2:var n=kh;break;case 8:n=Kh;break;default:n=as}l=n.bind(null,t,l,e),n=void 0,!su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Xc(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Zl(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){a=i=u;continue e}c=c.parentNode}}a=a.return}qs(function(){var m=i,y=uu(l),x=[];e:{var p=hf.get(e);if(p!==void 0){var g=Bn,C=e;switch(e){case"keypress":if(jn(l)===0)break e;case"keydown":case"keyup":g=dm;break;case"focusin":C="focus",g=du;break;case"focusout":C="blur",g=du;break;case"beforeblur":case"afterblur":g=du;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=pm;break;case of:case rf:case df:g=am;break;case mf:g=ym;break;case"scroll":case"scrollend":g=Id;break;case"wheel":g=bm;break;case"copy":case"cut":case"paste":g=im;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qs;break;case"toggle":case"beforetoggle":g=xm}var H=(t&4)!==0,de=!H&&(e==="scroll"||e==="scrollend"),r=H?p!==null?p+"Capture":null:p;H=[];for(var f=m,d;f!==null;){var b=f;if(d=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||d===null||r===null||(b=Ra(f,r),b!=null&&H.push(hn(f,b,d))),de)break;f=f.return}0<H.length&&(p=new g(p,C,null,l,y),x.push({event:p,listeners:H}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&l!==iu&&(C=l.relatedTarget||l.fromElement)&&(Zl(C)||C[Ql]))break e;if((g||p)&&(p=y.window===y?y:(p=y.ownerDocument)?p.defaultView||p.parentWindow:window,g?(C=l.relatedTarget||l.toElement,g=m,C=C?Zl(C):null,C!==null&&(de=V(C),H=C.tag,C!==de||H!==5&&H!==27&&H!==6)&&(C=null)):(g=null,C=m),g!==C)){if(H=Gs,b="onMouseLeave",r="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(H=Qs,b="onPointerLeave",r="onPointerEnter",f="pointer"),de=g==null?p:$a(g),d=C==null?p:$a(C),p=new H(b,f+"leave",g,l,y),p.target=de,p.relatedTarget=d,b=null,Zl(y)===m&&(H=new H(r,f+"enter",C,l,y),H.target=d,H.relatedTarget=de,b=H),de=b,g&&C)t:{for(H=Sh,r=g,f=C,d=0,b=r;b;b=H(b))d++;b=0;for(var R=f;R;R=H(R))b++;for(;0<d-b;)r=H(r),d--;for(;0<b-d;)f=H(f),b--;for(;d--;){if(r===f||f!==null&&r===f.alternate){H=r;break t}r=H(r),f=H(f)}H=null}else H=null;g!==null&&Hr(x,p,g,H,!1),C!==null&&de!==null&&Hr(x,de,C,H,!0)}}e:{if(p=m?$a(m):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var te=Is;else if(Fs(p))if(Ps)te=Um;else{te=Dm;var D=_m}else g=p.nodeName,!g||g.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?m&&nu(m.elementType)&&(te=Is):te=Om;if(te&&(te=te(e,m))){Ws(x,te,l,y);break e}D&&D(e,p,m),e==="focusout"&&m&&p.type==="number"&&m.memoizedProps.value!=null&&au(p,"number",p.value)}switch(D=m?$a(m):window,e){case"focusin":(Fs(D)||D.contentEditable==="true")&&(ea=D,vu=m,Ga=null);break;case"focusout":Ga=vu=ea=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,sf(x,l,y);break;case"selectionchange":if($m)break;case"keydown":case"keyup":sf(x,l,y)}var Z;if(hu)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Pl?Ks(e,l)&&(I="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(I="onCompositionStart");I&&(Zs&&l.locale!=="ko"&&(Pl||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pl&&(Z=Ys()):(tl=y,fu="value"in tl?tl.value:tl.textContent,Pl=!0)),D=_i(m,I),0<D.length&&(I=new Xs(I,e,null,l,y),x.push({event:I,listeners:D}),Z?I.data=Z:(Z=Js(l),Z!==null&&(I.data=Z)))),(Z=Em?zm(e,l):Am(e,l))&&(I=_i(m,"onBeforeInput"),0<I.length&&(D=new Xs("onBeforeInput","beforeinput",null,l,y),x.push({event:D,listeners:I}),D.data=Z)),gh(x,e,m,l,y)}wr(x,t)})}function hn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function _i(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ra(e,l),n!=null&&a.unshift(hn(e,n,i)),n=Ra(e,t),n!=null&&a.push(hn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function Sh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hr(e,t,l,a,n){for(var i=t._reactName,u=[];l!==null&&l!==a;){var c=l,s=c.alternate,m=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||m===null||(s=m,n?(m=Ra(l,i),m!=null&&u.unshift(hn(l,m,s))):n||(m=Ra(l,i),m!=null&&u.push(hn(l,m,s)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var xh=/\r\n?/g,Th=/\u0000|\uFFFD/g;function Br(e){return(typeof e=="string"?e:""+e).replace(xh,`
`).replace(Th,"")}function qr(e,t){return t=Br(t),Br(e)===t}function re(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Fl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Fl(e,""+a);break;case"className":Nn(e,"class",a);break;case"tabIndex":Nn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Nn(e,l,a);break;case"style":Hs(e,a,i);break;case"data":if(t!=="object"){Nn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Rn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&re(e,t,"name",n.name,n,null),re(e,t,"formEncType",n.formEncType,n,null),re(e,t,"formMethod",n.formMethod,n,null),re(e,t,"formTarget",n.formTarget,n,null)):(re(e,t,"encType",n.encType,n,null),re(e,t,"method",n.method,n,null),re(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Rn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=jt);break;case"onScroll":a!=null&&F("scroll",e);break;case"onScrollEnd":a!=null&&F("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Rn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":F("beforetoggle",e),F("toggle",e),Un(e,"popover",a);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Un(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Fd.get(l)||l,Un(e,l,a))}}function Qc(e,t,l,a,n,i){switch(l){case"style":Hs(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Fl(e,a):(typeof a=="number"||typeof a=="bigint")&&Fl(e,""+a);break;case"onScroll":a!=null&&F("scroll",e);break;case"onScrollEnd":a!=null&&F("scrollend",e);break;case"onClick":a!=null&&(e.onclick=jt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_s.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[ke]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Un(e,l,a)}}}function Ye(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":F("error",e),F("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:re(e,t,i,u,l,null)}}n&&re(e,t,"srcSet",l.srcSet,l,null),a&&re(e,t,"src",l.src,l,null);return;case"input":F("invalid",e);var c=i=u=n=null,s=null,m=null;for(a in l)if(l.hasOwnProperty(a)){var y=l[a];if(y!=null)switch(a){case"name":n=y;break;case"type":u=y;break;case"checked":s=y;break;case"defaultChecked":m=y;break;case"value":i=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,t));break;default:re(e,t,a,y,l,null)}}$s(e,i,c,s,m,u,n,!1);return;case"select":F("invalid",e),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:re(e,t,n,c,l,null)}t=i,l=u,e.multiple=!!a,t!=null?Jl(e,!!a,t,!1):l!=null&&Jl(e,!!a,l,!0);return;case"textarea":F("invalid",e),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(h(91));break;default:re(e,t,u,c,l,null)}ws(e,a,n,i);return;case"option":for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null)&&(s==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":re(e,t,s,a,l,null));return;case"dialog":F("beforetoggle",e),F("toggle",e),F("cancel",e),F("close",e);break;case"iframe":case"object":F("load",e);break;case"video":case"audio":for(a=0;a<mn.length;a++)F(mn[a],e);break;case"image":F("error",e),F("load",e);break;case"details":F("toggle",e);break;case"embed":case"source":case"link":F("error",e),F("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:re(e,t,m,a,l,null)}return;default:if(nu(t)){for(y in l)l.hasOwnProperty(y)&&(a=l[y],a!==void 0&&Qc(e,t,y,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&re(e,t,c,a,l,null))}function Eh(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,s=null,m=null,y=null;for(g in l){var x=l[g];if(l.hasOwnProperty(g)&&x!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":s=x;default:a.hasOwnProperty(g)||re(e,t,g,null,a,x)}}for(var p in a){var g=a[p];if(x=l[p],a.hasOwnProperty(p)&&(g!=null||x!=null))switch(p){case"type":i=g;break;case"name":n=g;break;case"checked":m=g;break;case"defaultChecked":y=g;break;case"value":u=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,t));break;default:g!==x&&re(e,t,p,g,a,x)}}lu(e,u,c,s,m,y,i,n);return;case"select":g=u=c=p=null;for(i in l)if(s=l[i],l.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":g=s;default:a.hasOwnProperty(i)||re(e,t,i,null,a,s)}for(n in a)if(i=a[n],s=l[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":p=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==s&&re(e,t,n,i,a,s)}t=c,l=u,a=g,p!=null?Jl(e,!!l,p,!1):!!a!=!!l&&(t!=null?Jl(e,!!l,t,!0):Jl(e,!!l,l?[]:"",!1));return;case"textarea":g=p=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:re(e,t,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":p=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(h(91));break;default:n!==i&&re(e,t,u,n,a,i)}Rs(e,p,g);return;case"option":for(var C in l)p=l[C],l.hasOwnProperty(C)&&p!=null&&!a.hasOwnProperty(C)&&(C==="selected"?e.selected=!1:re(e,t,C,null,a,p));for(s in a)p=a[s],g=l[s],a.hasOwnProperty(s)&&p!==g&&(p!=null||g!=null)&&(s==="selected"?e.selected=p&&typeof p!="function"&&typeof p!="symbol":re(e,t,s,p,a,g));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in l)p=l[H],l.hasOwnProperty(H)&&p!=null&&!a.hasOwnProperty(H)&&re(e,t,H,null,a,p);for(m in a)if(p=a[m],g=l[m],a.hasOwnProperty(m)&&p!==g&&(p!=null||g!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(h(137,t));break;default:re(e,t,m,p,a,g)}return;default:if(nu(t)){for(var de in l)p=l[de],l.hasOwnProperty(de)&&p!==void 0&&!a.hasOwnProperty(de)&&Qc(e,t,de,void 0,a,p);for(y in a)p=a[y],g=l[y],!a.hasOwnProperty(y)||p===g||p===void 0&&g===void 0||Qc(e,t,y,p,a,g);return}}for(var r in l)p=l[r],l.hasOwnProperty(r)&&p!=null&&!a.hasOwnProperty(r)&&re(e,t,r,null,a,p);for(x in a)p=a[x],g=l[x],!a.hasOwnProperty(x)||p===g||p==null&&g==null||re(e,t,x,p,a,g)}function Yr(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&Yr(u)){for(u=0,c=n.responseEnd,a+=1;a<l.length;a++){var s=l[a],m=s.startTime;if(m>c)break;var y=s.transferSize,x=s.initiatorType;y&&Yr(x)&&(s=s.responseEnd,u+=y*(s<c?1:(c-m)/(s-m)))}if(--a,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Zc=null,Vc=null;function Di(e){return e.nodeType===9?e:e.ownerDocument}function Lr(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gr(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function kc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kc=null;function Ah(){var e=window.event;return e&&e.type==="popstate"?e===Kc?!1:(Kc=e,!0):(Kc=null,!1)}var Xr=typeof setTimeout=="function"?setTimeout:void 0,Mh=typeof clearTimeout=="function"?clearTimeout:void 0,Qr=typeof Promise=="function"?Promise:void 0,Ch=typeof queueMicrotask=="function"?queueMicrotask:typeof Qr<"u"?function(e){return Qr.resolve(null).then(e).catch(_h)}:Xr;function _h(e){setTimeout(function(){throw e})}function vl(e){return e==="head"}function Zr(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Ca(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")pn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,pn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Na]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&pn(e.ownerDocument.body);l=n}while(l);Ca(t)}function Vr(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Jc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Jc(l),eu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Dh(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Na])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=St(e.nextSibling),e===null)break}return null}function Oh(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=St(e.nextSibling),e===null))return null;return e}function kr(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=St(e.nextSibling),e===null))return null;return e}function Fc(e){return e.data==="$?"||e.data==="$~"}function Wc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Uh(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ic=null;function Kr(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return St(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Jr(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Fr(e,t,l){switch(t=Di(l),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function pn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);eu(e)}var xt=new Map,Wr=new Set;function Oi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var It=A.d;A.d={f:Nh,r:$h,D:Rh,C:wh,L:jh,m:Hh,X:qh,S:Bh,M:Yh};function Nh(){var e=It.f(),t=xi();return e||t}function $h(e){var t=Vl(e);t!==null&&t.tag===5&&t.type==="form"?ho(t):It.r(e)}var za=typeof document>"u"?null:document;function Ir(e,t,l){var a=za;if(a&&typeof t=="string"&&t){var n=mt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Wr.has(n)||(Wr.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Ye(t,"link",e),$e(t),a.head.appendChild(t)))}}function Rh(e){It.D(e),Ir("dns-prefetch",e,null)}function wh(e,t){It.C(e,t),Ir("preconnect",e,t)}function jh(e,t,l){It.L(e,t,l);var a=za;if(a&&e&&t){var n='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+mt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+mt(l.imageSizes)+'"]')):n+='[href="'+mt(e)+'"]';var i=n;switch(t){case"style":i=Aa(e);break;case"script":i=Ma(e)}xt.has(i)||(e=w({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),xt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(gn(i))||t==="script"&&a.querySelector(yn(i))||(t=a.createElement("link"),Ye(t,"link",e),$e(t),a.head.appendChild(t)))}}function Hh(e,t){It.m(e,t);var l=za;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+mt(a)+'"][href="'+mt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ma(e)}if(!xt.has(i)&&(e=w({rel:"modulepreload",href:e},t),xt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(yn(i)))return}a=l.createElement("link"),Ye(a,"link",e),$e(a),l.head.appendChild(a)}}}function Bh(e,t,l){It.S(e,t,l);var a=za;if(a&&e){var n=kl(a).hoistableStyles,i=Aa(e);t=t||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(gn(i)))c.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},l),(l=xt.get(i))&&Pc(e,l);var s=u=a.createElement("link");$e(s),Ye(s,"link",e),s._p=new Promise(function(m,y){s.onload=m,s.onerror=y}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ui(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function qh(e,t){It.X(e,t);var l=za;if(l&&e){var a=kl(l).hoistableScripts,n=Ma(e),i=a.get(n);i||(i=l.querySelector(yn(n)),i||(e=w({src:e,async:!0},t),(t=xt.get(n))&&es(e,t),i=l.createElement("script"),$e(i),Ye(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Yh(e,t){It.M(e,t);var l=za;if(l&&e){var a=kl(l).hoistableScripts,n=Ma(e),i=a.get(n);i||(i=l.querySelector(yn(n)),i||(e=w({src:e,async:!0,type:"module"},t),(t=xt.get(n))&&es(e,t),i=l.createElement("script"),$e(i),Ye(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Pr(e,t,l,a){var n=(n=K.current)?Oi(n):null;if(!n)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Aa(l.href),l=kl(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Aa(l.href);var i=kl(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(gn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),xt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},xt.set(e,l),i||Lh(n,e,l,u.state))),t&&a===null)throw Error(h(528,""));return u}if(t&&a!==null)throw Error(h(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ma(l),l=kl(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Aa(e){return'href="'+mt(e)+'"'}function gn(e){return'link[rel="stylesheet"]['+e+"]"}function ed(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Lh(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ye(t,"link",l),$e(t),e.head.appendChild(t))}function Ma(e){return'[src="'+mt(e)+'"]'}function yn(e){return"script[async]"+e}function td(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+mt(l.href)+'"]');if(a)return t.instance=a,$e(a),a;var n=w({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),$e(a),Ye(a,"style",n),Ui(a,l.precedence,e),t.instance=a;case"stylesheet":n=Aa(l.href);var i=e.querySelector(gn(n));if(i)return t.state.loading|=4,t.instance=i,$e(i),i;a=ed(l),(n=xt.get(n))&&Pc(a,n),i=(e.ownerDocument||e).createElement("link"),$e(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),Ye(i,"link",a),t.state.loading|=4,Ui(i,l.precedence,e),t.instance=i;case"script":return i=Ma(l.src),(n=e.querySelector(yn(i)))?(t.instance=n,$e(n),n):(a=l,(n=xt.get(i))&&(a=w({},l),es(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),$e(n),Ye(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ui(a,l.precedence,e));return t.instance}function Ui(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Pc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function es(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ni=null;function ld(e,t,l){if(Ni===null){var a=new Map,n=Ni=new Map;n.set(l,a)}else n=Ni,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[Na]||i[je]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function ad(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Gh(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xh(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Aa(a.href),i=t.querySelector(gn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=$i.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,$e(i);return}i=t.ownerDocument||t,a=ed(a),(n=xt.get(n))&&Pc(a,n),i=i.createElement("link"),$e(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),Ye(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=$i.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var ts=0;function Qh(e,t){return e.stylesheets&&e.count===0&&wi(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&wi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&ts===0&&(ts=62500*zh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&wi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>ts?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function $i(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)wi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ri=null;function wi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ri=new Map,t.forEach(Zh,e),Ri=null,$i.call(e))}function Zh(e,t){if(!(t.state.loading&4)){var l=Ri.get(e);if(l)var a=l.get(null);else{l=new Map,Ri.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=$i.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var vn={$$typeof:Ee,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Vh(e,t,l,a,n,i,u,c,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.hiddenUpdates=Fi(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function id(e,t,l,a,n,i,u,c,s,m,y,x){return e=new Vh(e,t,l,u,s,m,y,x,c),t=1,i===!0&&(t|=24),i=it(3,null,null,t),e.current=i,i.stateNode=e,t=Ru(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},Bu(i),e}function ud(e){return e?(e=aa,e):aa}function cd(e,t,l,a,n,i){n=ud(n),a.context===null?a.context=n:a.pendingContext=n,a=cl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=sl(e,a,t),l!==null&&(Pe(l,e,t),Ja(l,e,t))}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function ls(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function fd(e){if(e.tag===13||e.tag===31){var t=Ul(e,67108864);t!==null&&Pe(t,e,67108864),ls(e,67108864)}}function od(e){if(e.tag===13||e.tag===31){var t=ot();t=Wi(t);var l=Ul(e,t);l!==null&&Pe(l,e,t),ls(e,t)}}var ji=!0;function kh(e,t,l,a){var n=v.T;v.T=null;var i=A.p;try{A.p=2,as(e,t,l,a)}finally{A.p=i,v.T=n}}function Kh(e,t,l,a){var n=v.T;v.T=null;var i=A.p;try{A.p=8,as(e,t,l,a)}finally{A.p=i,v.T=n}}function as(e,t,l,a){if(ji){var n=ns(a);if(n===null)Xc(e,t,a,Hi,l),dd(e,a);else if(Fh(n,e,t,l,a))a.stopPropagation();else if(dd(e,a),t&4&&-1<Jh.indexOf(e)){for(;n!==null;){var i=Vl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ml(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-at(u);c.entanglements[1]|=s,u&=~s}$t(i),(ne&6)===0&&(bi=tt()+500,dn(0))}}break;case 31:case 13:c=Ul(i,2),c!==null&&Pe(c,i,2),xi(),ls(i,2)}if(i=ns(a),i===null&&Xc(e,t,a,Hi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Xc(e,t,a,null,l)}}function ns(e){return e=uu(e),is(e)}var Hi=null;function is(e){if(Hi=null,e=Zl(e),e!==null){var t=V(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=ie(t),e!==null)return e;e=null}else if(l===31){if(e=Te(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hi=e,null}function rd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rd()){case ys:return 2;case vs:return 8;case Mn:case wd:return 32;case bs:return 268435456;default:return 32}default:return 32}}var us=!1,bl=null,Sl=null,xl=null,bn=new Map,Sn=new Map,Tl=[],Jh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dd(e,t){switch(e){case"focusin":case"focusout":bl=null;break;case"dragenter":case"dragleave":Sl=null;break;case"mouseover":case"mouseout":xl=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}function xn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Vl(t),t!==null&&fd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Fh(e,t,l,a,n){switch(t){case"focusin":return bl=xn(bl,e,t,l,a,n),!0;case"dragenter":return Sl=xn(Sl,e,t,l,a,n),!0;case"mouseover":return xl=xn(xl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return bn.set(i,xn(bn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Sn.set(i,xn(Sn.get(i)||null,e,t,l,a,n)),!0}return!1}function md(e){var t=Zl(e.target);if(t!==null){var l=V(t);if(l!==null){if(t=l.tag,t===13){if(t=ie(l),t!==null){e.blockedOn=t,As(e.priority,function(){od(l)});return}}else if(t===31){if(t=Te(l),t!==null){e.blockedOn=t,As(e.priority,function(){od(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=ns(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);iu=a,l.target.dispatchEvent(a),iu=null}else return t=Vl(l),t!==null&&fd(t),e.blockedOn=l,!1;t.shift()}return!0}function hd(e,t,l){Bi(e)&&l.delete(t)}function Wh(){us=!1,bl!==null&&Bi(bl)&&(bl=null),Sl!==null&&Bi(Sl)&&(Sl=null),xl!==null&&Bi(xl)&&(xl=null),bn.forEach(hd),Sn.forEach(hd)}function qi(e,t){e.blockedOn===t&&(e.blockedOn=null,us||(us=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,Wh)))}var Yi=null;function pd(e){Yi!==e&&(Yi=e,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){Yi===e&&(Yi=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(is(a||l)===null)continue;break}var i=Vl(l);i!==null&&(e.splice(t,3),t-=3,nc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ca(e){function t(s){return qi(s,e)}bl!==null&&qi(bl,e),Sl!==null&&qi(Sl,e),xl!==null&&qi(xl,e),bn.forEach(t),Sn.forEach(t);for(var l=0;l<Tl.length;l++){var a=Tl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Tl.length&&(l=Tl[0],l.blockedOn===null);)md(l),l.blockedOn===null&&Tl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[ke]||null;if(typeof i=="function")u||pd(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[ke]||null)c=u.formAction;else if(is(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),pd(l)}}}function gd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function cs(e){this._internalRoot=e}Li.prototype.render=cs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var l=t.current,a=ot();cd(l,a,e,t,null,null)},Li.prototype.unmount=cs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cd(e.current,2,null,e,null,null),xi(),t[Ql]=null}};function Li(e){this._internalRoot=e}Li.prototype.unstable_scheduleHydration=function(e){if(e){var t=zs();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Tl.length&&t!==0&&t<Tl[l].priority;l++);Tl.splice(l,0,e),l===0&&md(e)}};var yd=Y.version;if(yd!=="19.2.4")throw Error(h(527,yd,"19.2.4"));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=E(t),e=e!==null?P(e):null,e=e===null?null:e.stateNode,e};var Ih={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{Da=Gi.inject(Ih),lt=Gi}catch{}}return En.createRoot=function(e,t){if(!N(e))throw Error(h(299));var l=!1,a="",n=zo,i=Ao,u=Mo;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=id(e,1,!1,null,null,l,a,null,n,i,u,gd),e[Ql]=t.current,Gc(e),new cs(t)},En.hydrateRoot=function(e,t,l){if(!N(e))throw Error(h(299));var a=!1,n="",i=zo,u=Ao,c=Mo,s=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),t=id(e,1,!0,t,l??null,a,n,s,i,u,c,gd),t.context=ud(null),l=t.current,a=ot(),a=Wi(a),n=cl(a),n.callback=null,sl(l,n,a),l=a,t.current.lanes=l,Ua(t,l),$t(t),e[Ql]=t.current,Gc(e),new Li(t)},En.version="19.2.4",En}var Cd;function sp(){if(Cd)return os.exports;Cd=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(Y){console.error(Y)}}return z(),os.exports=cp(),os.exports}var fp=sp();const Mt={chapters:[{id:1,title:"File System Navigation",description:"Learn to navigate the Linux file system like a pro",lessons:[{id:1,title:"Understanding the File System Structure",duration:"15 min",content:`
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

<tip>
💡 Hidden files in Linux start with a dot (.). Your configuration files are usually hidden!
</tip>

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

<warning>
⚠️ Never run commands you don't understand, especially as root!
</warning>

### Practice Exercises

1. **Navigate the filesystem**: Use \`ls -la /\` to list the root directory. Identify 5 directories and describe their purpose.
2. **Read ls -l output**: Run \`ls -l\` in your home directory and identify the owner, group, permissions, and size of each item.
3. **Find hidden files**: Use \`ls -a\` to find hidden files in your home directory. What do \`.bashrc\` and \`.profile\` do?
4. **Practice commands**: Navigate to \`/var/log\`, list the contents sorted by modification time (\`ls -lt\`), and find the most recently modified log file.
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

<tip>
💡 Double-tap Tab to see all possible completions when there are multiple matches.
</tip>

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

<warning>
⚠️ Spaces in directory names need escaping or quotes: \`cd My\\ Documents\` or \`cd "My Documents"\`
</warning>

### Practice Exercises

1. **Navigate challenge**: From your home directory, navigate to \`/var/log\`, then use \`cd -\` to return. Use \`pushd\` and \`popd\` to switch between 3 directories.
2. **Path practice**: Navigate to a deep directory using an absolute path. Then navigate to the same place using a relative path. Verify with \`pwd\`.
3. **Tab completion**: Practice tab completion by typing partial directory names and pressing Tab. Try double-Tab to see multiple options.
4. **Speed drill**: Navigate to /etc, /var/log, /tmp, /home, and back to your home directory — all within 30 seconds using shortcuts.
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

<tip>
💡 Unlike Windows, Linux has no "rename" command — just use \`mv\`!
</tip>

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

<warning>
⚠️ Be careful with \`mv\` — there's no undo! Use the \`-i\` flag when unsure.
</warning>

### Practice Exercises

1. **File creation**: Create a directory structure: \`project/src/components/\` and \`project/tests/\` in one command using \`mkdir -p\`.
2. **Copy and move**: Create 3 files, copy them to a new directory with \`cp\`, then rename one using \`mv\`.
3. **View files**: Create a file with 100 lines (\`seq 1 100 > numbers.txt\`). Practice viewing with \`head -20\`, \`tail -20\`, and \`less\`.
4. **Append content**: Use \`echo\` with \`>>\` to build a file line by line. Then use \`cat\` to view the result.
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

<warning>
⚠️ \`rm -rf /\` will destroy your entire system! NEVER run this!
</warning>

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

<tip>
💡 Use \`find\` for precise, current results. Use \`locate\` for quick searches when the database is fresh.
</tip>

### Practice Exercises

1. **Find by name**: Find all \`.txt\` files in your home directory recursively.
2. **Find by size**: Find all files larger than 10MB in \`/var\`. Then find all empty files in your home directory.
3. **Find with actions**: Find all \`.log\` files in \`/tmp\` and delete them (use \`-delete\` or \`-exec rm\`).
4. **Complex find**: Find all \`.js\` or \`.ts\` files modified in the last 7 days, excluding \`node_modules\`.
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

<tip>
💡 The sticky bit on /tmp prevents users from deleting each other's files!
</tip>

<warning>
⚠️ Avoid 777 permissions — it allows anyone to do anything with your files!
</warning>

### Practice Exercises

1. **Read permissions**: Run \`ls -l\` on several files and decode the permission string for each.
2. **Set permissions**: Create a script file. Set it to owner-executable using both numeric (\`chmod 755\`) and symbolic (\`chmod u+x\`) modes.
3. **Test access**: Create a file as your user, remove read permission for others, then try to read it as a different user (or test with group permissions).
4. **Private file**: Create a file with 600 permissions. Verify that only you can read and write it.
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

<tip>
💡 Add yourself to necessary groups and log out/in for changes to take effect.
</tip>

<warning>
⚠️ Only root can change file ownership. You need sudo!
</warning>

### Practice Exercises

1. **Check your groups**: Run \`groups\` to see your group memberships. Run \`id\` for detailed user/group info.
2. **Change ownership**: Create a file, check its owner with \`ls -l\`, then change the group using \`chgrp\`.
3. **Shared directory**: Create a directory for a group with setgid bit. Verify that new files inherit the group ownership.
4. **Umask practice**: Check your current umask. Create a file and directory — verify their permissions match the umask calculation.
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

<tip>
💡 Use \`grep -o\` to show only the matching part, not the whole line!
</tip>

### Practice Exercises

1. **Basic grep**: Search for "error" (case-insensitive) in system logs: \`grep -i "error" /var/log/syslog\`.
2. **Regex practice**: Use grep to find lines starting with a number, lines ending with a period, and lines containing an email address pattern.
3. **Context search**: Search for "failed" in a log file and show 3 lines before and after each match using \`-C 3\`.
4. **Pipeline mastery**: Use \`ps aux | grep\` to find specific processes. Then use \`history | grep\` to find past commands.
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

<tip>
💡 Use \`sed\` for simple substitutions, \`awk\` for column-based processing!
</tip>

### Practice Exercises

1. **sed substitution**: Create a file with "Hello World" repeated 5 times. Use sed to replace "World" with "Linux" globally.
2. **sed line operations**: Use sed to delete the first 3 lines of a file, then to print only lines 5-10.
3. **awk columns**: Use awk to print the first and last columns from \`ls -l\` output. Then print only the file sizes.
4. **awk calculation**: Use awk on \`ls -l\` to sum all file sizes: \`ls -l | awk '{sum += $5} END {print sum}'\`.
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

<tip>
💡 Always use \`set -e\` to stop on errors and \`set -u\` to catch typos in variable names!
</tip>

### Practice Exercises

1. **First script**: Write a script that takes your name as an argument and prints "Hello, [name]! Today is [date]."
2. **Variables**: Write a script that stores the current date, hostname, and username in variables, then prints a formatted system summary.
3. **User input**: Write a script that asks for a filename, checks if it exists (\`-f\`), and displays its contents or an error message.
4. **Error handling**: Write a script with \`set -e\` that tries to cd to a non-existent directory — observe how it exits on error.
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

<tip>
💡 Always quote variables: \`"$var"\` prevents word splitting issues!
</tip>

### Practice Exercises

1. **If statements**: Write a script that checks if a number (argument) is positive, negative, or zero.
2. **For loop**: Write a script that loops through all \`.txt\` files in a directory and prints their line counts.
3. **While loop**: Write a script that reads a file line by line and counts the total lines.
4. **Functions**: Write a script with a \`backup()\` function that copies a file to a \`.bak\` version. Call it with different filenames.
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

<tip>
💡 Load average should typically stay below your CPU core count. Use \`nproc\` to check cores.
</tip>

<warning>
⚠️ High load (>2x cores) indicates system stress. Investigate with top/htop.
</warning>

### Practice Exercises

1. **Explore processes**: Run \`ps aux\` and identify the top 5 CPU-consuming processes. Then do the same for memory.
2. **Use top**: Open \`top\`, press \`M\` to sort by memory, then \`P\` for CPU. Practice killing a process with \`k\`.
3. **Process tree**: Run \`ps auxf\` or \`pstree\` to see the process hierarchy. Find the init/systemd process at the top.
4. **Load average**: Check your system's load average with \`uptime\`. Compare it to the number of CPU cores (\`nproc\`). Is your system stressed?
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

<tip>
💡 Always try \`kill\` (SIGTERM) before \`kill -9\` (SIGKILL) to allow graceful shutdown.
</tip>

<warning>
⚠️ \`kill -9\` doesn't allow cleanup — use only as last resort!
</warning>

### Practice Exercises

1. **Background jobs**: Start a long-running command (\`sleep 300\`), send it to background with \`&\`, list jobs, bring to foreground, then kill it.
2. **Signal practice**: Start a \`sleep 1000\` process. Send SIGTERM, then SIGKILL. Observe the difference.
3. **Service management**: List all running services with \`systemctl\`. Check the status of \`sshd\` or \`nginx\`.
4. **Screen/tmux**: Start a screen or tmux session, run a command, detach, list sessions, and reattach.
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

<tip>
💡 Use \`mtr\` instead of \`traceroute\` — it combines ping and traceroute with real-time updates!
</tip>

### Practice Exercises

1. **Connectivity check**: Ping google.com with 5 packets. Then use \`traceroute\` to see the network path.
2. **DNS lookup**: Use \`dig google.com\` to find IP addresses. Try \`dig -x 8.8.8.8\` for reverse lookup.
3. **Port scanning**: Use \`ss -tlnp\` to find all listening ports on your system. Identify which services are running.
4. **HTTP testing**: Use \`curl -I\` to check the headers of 3 different websites. Note the HTTP status codes and server types.
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

<tip>
💡 Use \`rsync\` over \`scp\` for large transfers — it's faster and can resume!
</tip>

<warning>
⚠️ Never share private SSH keys. Use \`ssh-keygen -p\` to add a passphrase for extra protection.
</warning>

### Practice Exercises

1. **SSH key setup**: Generate an ED25519 SSH key pair. Examine the public and private key files.
2. **SSH config**: Create an \`~/.ssh/config\` file with at least one host alias. Test connecting using the alias.
3. **File transfer**: Use \`scp\` to copy a file to a remote server (or between directories locally). Then do the same with \`rsync\`.
4. **SSH tunnel**: Set up a local port forward to access a remote service (e.g., a database) through SSH.
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

<tip>
💡 Run \`sudo apt update\` before installing anything to ensure latest package info!
</tip>

<warning>
⚠️ Be careful with PPAs — they're third-party and may conflict with system packages.
</warning>

### Practice Exercises

1. **Update system**: Run a full system update with \`sudo apt update && sudo apt upgrade\`.
2. **Install and remove**: Install a package (e.g., \`tree\`), verify it works, then remove it with \`apt remove\` and clean up with \`autoremove\`.
3. **Package info**: Use \`apt show\` to get info about a package before installing. Use \`dpkg -L\` to list installed files.
4. **Find packages**: Search for "web server" packages using \`apt search\`. Compare the results.
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

<tip>
💡 EPEL repository provides many additional packages for RHEL/CentOS!
</tip>

<warning>
⚠️ On production servers, test updates in staging first and consider using \`dnf history rollback\` for recovery.
</warning>

### Practice Exercises

1. **Compare package managers**: If you have access to both Ubuntu and CentOS systems, install the same package on both and compare the commands.
2. **Repository management**: List all configured repositories. On Ubuntu, add and remove a PPA. On CentOS, enable/disable EPEL.
3. **Package history**: On a CentOS/RHEL system, use \`dnf history\` to review recent package operations.
4. **Group install**: On CentOS, list available package groups with \`dnf group list\` and install "Development Tools".
          `}]}]};const Od=(...z)=>z.filter((Y,G,h)=>!!Y&&Y.trim()!==""&&h.indexOf(Y)===G).join(" ").trim();const op=z=>z.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const rp=z=>z.replace(/^([A-Z])|[\s-_]+(\w)/g,(Y,G,h)=>h?h.toUpperCase():G.toLowerCase());const _d=z=>{const Y=rp(z);return Y.charAt(0).toUpperCase()+Y.slice(1)};var dp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const mp=z=>{for(const Y in z)if(Y.startsWith("aria-")||Y==="role"||Y==="title")return!0;return!1};const hp=Ct.forwardRef(({color:z="currentColor",size:Y=24,strokeWidth:G=2,absoluteStrokeWidth:h,className:N="",children:V,iconNode:ie,...Te},O)=>Ct.createElement("svg",{ref:O,...dp,width:Y,height:Y,stroke:z,strokeWidth:h?Number(G)*24/Number(Y):G,className:Od("lucide",N),...!V&&!mp(Te)&&{"aria-hidden":"true"},...Te},[...ie.map(([E,P])=>Ct.createElement(E,P)),...Array.isArray(V)?V:[V]]));const _t=(z,Y)=>{const G=Ct.forwardRef(({className:h,...N},V)=>Ct.createElement(hp,{ref:V,iconNode:Y,className:Od(`lucide-${op(_d(z))}`,`lucide-${z}`,h),...N}));return G.displayName=_d(z),G};const pp=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],gp=_t("book-open",pp);const yp=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Xi=_t("chevron-right",yp);const vp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],zn=_t("circle-check",vp);const bp=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Sp=_t("clock",bp);const xp=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Tp=_t("house",xp);const Ep=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],zp=_t("lightbulb",Ep);const Ap=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Mp=_t("menu",Ap);const Cp=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],_p=_t("play",Cp);const Dp=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Dd=_t("terminal",Dp);const Op=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Up=_t("triangle-alert",Op);const Np=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$p=_t("x",Np);function Rp(){const[z,Y]=Ct.useState(!1),[G,h]=Ct.useState("home"),[N,V]=Ct.useState(null),[ie,Te]=Ct.useState([]);Ct.useEffect(()=>{const U=localStorage.getItem("linux-learning-progress");U&&Te(JSON.parse(U))},[]);const O=U=>{const j=[...ie,U];Te(j),localStorage.setItem("linux-learning-progress",JSON.stringify(j))},E=Mt.chapters.reduce((U,j)=>U+j.lessons.length,0),P=Math.round(ie.length/E*100),w=U=>{V(U),h("lesson"),Y(!1),window.scrollTo(0,0)},me=()=>{if(!N)return null;for(let U=0;U<Mt.chapters.length;U++){const j=Mt.chapters[U];for(let k=0;k<j.lessons.length;k++)if(j.lessons[k].id===N.id){if(k<j.lessons.length-1)return j.lessons[k+1];if(U<Mt.chapters.length-1)return Mt.chapters[U+1].lessons[0]}}return null},Le=()=>{if(!N)return null;for(let U=0;U<Mt.chapters.length;U++){const j=Mt.chapters[U];for(let k=0;k<j.lessons.length;k++)if(j.lessons[k].id===N.id){if(k>0)return j.lessons[k-1];if(U>0){const $=Mt.chapters[U-1];return $.lessons[$.lessons.length-1]}}}return null},Ge=U=>{const j=U.trim().split(`
`),k=[];let $=0,Ee=!1,we=[],et="";for(;$<j.length;){const ae=j[$];if(ae.startsWith("```")){Ee?(k.push(S.jsxs("div",{className:"code-block",children:[S.jsxs("div",{className:"code-header",children:[S.jsx("span",{className:"code-language",children:et}),S.jsx("button",{className:"code-copy",onClick:()=>navigator.clipboard.writeText(we.join(`
`)),children:"Copy"})]}),S.jsx("div",{className:"code-content",children:S.jsx("pre",{children:we.join(`
`)})})]},`code-${$}`)),Ee=!1):(Ee=!0,et=ae.slice(3).trim()||"text",we=[]),$++;continue}if(Ee){we.push(ae),$++;continue}if(ae.includes("<tip>")){let B=[];for($++;$<j.length&&!j[$].includes("</tip>");)B.push(j[$]),$++;k.push(S.jsxs("div",{className:"tip-box",children:[S.jsxs("div",{className:"tip-box-header",children:[S.jsx(zp,{size:18}),S.jsx("span",{children:"Pro Tip"})]}),S.jsx("p",{children:B.join(" ").replace("💡 ","")})]},`tip-${$}`)),$++;continue}if(ae.includes("<warning>")){let B=[];for($++;$<j.length&&!j[$].includes("</warning>");)B.push(j[$]),$++;k.push(S.jsxs("div",{className:"warning-box",children:[S.jsxs("div",{className:"warning-box-header",children:[S.jsx(Up,{size:18}),S.jsx("span",{children:"Warning"})]}),S.jsx("p",{children:B.join(" ").replace("⚠️ ","")})]},`warn-${$}`)),$++;continue}if(ae.startsWith("## ")){k.push(S.jsx("h2",{children:ae.slice(3)},`h2-${$}`)),$++;continue}if(ae.startsWith("### ")){k.push(S.jsx("h3",{children:ae.slice(4)},`h3-${$}`)),$++;continue}if(ae.includes("|")&&j[$+1]?.includes("---")){const B=ae.split("|").filter(ge=>ge.trim()).map(ge=>ge.trim());$+=2;const ze=[];for(;$<j.length&&j[$].includes("|");)ze.push(j[$].split("|").filter(ge=>ge.trim()).map(ge=>ge.trim())),$++;k.push(S.jsx("div",{style:{overflowX:"auto",margin:"20px 0"},children:S.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",background:"var(--bg-card)",borderRadius:"12px",overflow:"hidden"},children:[S.jsx("thead",{children:S.jsx("tr",{children:B.map((ge,Dt)=>S.jsx("th",{style:{padding:"12px 16px",textAlign:"left",borderBottom:"1px solid var(--border-color)",color:"var(--accent-primary)"},children:ge},Dt))})}),S.jsx("tbody",{children:ze.map((ge,Dt)=>S.jsx("tr",{children:ge.map((rt,Xe)=>S.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--border-color)",color:"var(--text-secondary)"},children:S.jsx("span",{dangerouslySetInnerHTML:{__html:rt.replace(/\*\*(.*?)\*\*/g,'<strong style="color:var(--text-primary)">$1</strong>').replace(/`(.*?)`/g,'<code style="background:rgba(168,85,247,0.1);padding:2px 6px;border-radius:4px;font-size:13px">$1</code>')}})},Xe))},Dt))})]})},`table-${$}`));continue}if(ae.startsWith("- ")||ae.startsWith("* ")){const B=[];for(;$<j.length&&(j[$].startsWith("- ")||j[$].startsWith("* "));)B.push(j[$].slice(2)),$++;k.push(S.jsx("ul",{children:B.map((ze,ge)=>S.jsx("li",{dangerouslySetInnerHTML:{__html:ze.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(168,85,247,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},ge))},`ul-${$}`));continue}if(/^\d+\. /.test(ae)){const B=[];for(;$<j.length&&/^\d+\. /.test(j[$]);)B.push(j[$].replace(/^\d+\. /,"")),$++;k.push(S.jsx("ol",{children:B.map((ze,ge)=>S.jsx("li",{dangerouslySetInnerHTML:{__html:ze.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(168,85,247,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},ge))},`ol-${$}`));continue}ae.trim()&&k.push(S.jsx("p",{dangerouslySetInnerHTML:{__html:ae.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(168,85,247,0.1);padding:2px 6px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:14px">$1</code>').replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank" style="color:var(--accent-cyan)">$1</a>')}},`p-${$}`)),$++}return k};return S.jsxs("div",{className:"app-container",children:[S.jsx("div",{className:"bg-grid"}),S.jsx("div",{className:"bg-noise"}),S.jsx("div",{className:"gradient-orb orb-primary"}),S.jsx("div",{className:"gradient-orb orb-cyan"}),S.jsx("div",{className:"gradient-orb orb-secondary"}),S.jsx("button",{className:"mobile-menu-btn",onClick:()=>Y(!z),children:z?S.jsx($p,{size:24}):S.jsx(Mp,{size:24})}),S.jsx("div",{className:`sidebar-overlay ${z?"open":""}`,onClick:()=>Y(!1)}),S.jsxs("aside",{className:`sidebar ${z?"open":""}`,children:[S.jsxs("div",{className:"sidebar-header",children:[S.jsx("div",{className:"sidebar-logo",children:S.jsx(Dd,{size:24})}),S.jsx("span",{className:"sidebar-title",children:"Linux CLI"})]}),S.jsxs("nav",{className:"sidebar-nav",children:[S.jsxs("div",{className:`nav-item ${G==="home"?"active":""}`,onClick:()=>{h("home"),Y(!1)},children:[S.jsx(Tp,{size:20,className:"nav-item-icon"}),S.jsx("span",{children:"Home"})]}),Mt.chapters.map(U=>S.jsxs("div",{className:"nav-section",children:[S.jsxs("div",{className:"nav-section-title",children:["Ch ",U.id,": ",U.title]}),U.lessons.map(j=>S.jsxs("div",{className:`nav-item ${N?.id===j.id?"active":""}`,onClick:()=>w(j),children:[ie.includes(j.id)?S.jsx(zn,{size:18,className:"nav-item-icon",style:{color:"var(--accent-green)"}}):S.jsx(gp,{size:18,className:"nav-item-icon"}),S.jsx("span",{children:j.title})]},j.id))]},U.id))]}),S.jsxs("div",{style:{marginTop:"auto",padding:"20px",borderTop:"1px solid var(--border-color)"},children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:[S.jsx("span",{children:"Progress"}),S.jsxs("span",{children:[P,"%"]})]}),S.jsx("div",{className:"progress-bar",children:S.jsx("div",{className:"progress-fill",style:{width:`${P}%`}})})]})]}),S.jsxs("main",{className:"main-content",children:[G==="home"&&S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"hero",children:[S.jsxs("div",{className:"hero-badge",children:[S.jsx(Dd,{size:16}),S.jsx("span",{children:"Linux Command Line Course"})]}),S.jsxs("h1",{className:"hero-title",children:["Master the",S.jsx("br",{}),S.jsx("span",{children:"Linux Terminal"})]}),S.jsx("p",{className:"hero-subtitle",children:"Navigate filesystems, manage processes, write bash scripts, and become a command line power user!"}),S.jsxs("button",{className:"nav-button primary",onClick:()=>w(Mt.chapters[0].lessons[0]),style:{margin:"0 auto"},children:[S.jsx(_p,{size:20}),"Start Learning"]})]}),S.jsxs("div",{style:{marginBottom:"48px"},children:[S.jsx("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"24px"},children:"Course Chapters"}),Mt.chapters.map(U=>{const j=U.lessons.filter(k=>ie.includes(k.id)).length;return S.jsxs("div",{className:"chapter-card",onClick:()=>w(U.lessons[0]),children:[S.jsx("div",{className:"chapter-number",children:U.id}),S.jsxs("div",{className:"chapter-info",children:[S.jsx("div",{className:"chapter-title",children:U.title}),S.jsxs("div",{className:"chapter-meta",children:[U.description," • ",U.lessons.length," lessons",j>0&&S.jsxs("span",{style:{color:"var(--accent-green)",marginLeft:"8px"},children:["(",j,"/",U.lessons.length," complete)"]})]})]}),S.jsx(Xi,{size:24,style:{color:"var(--text-muted)"}})]},U.id)})]}),S.jsxs("div",{className:"glass-card",style:{textAlign:"center"},children:[S.jsx("h3",{style:{marginBottom:"16px",fontSize:"20px"},children:"What You'll Learn"}),S.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:"By the end, you'll be comfortable in any Linux environment:"}),S.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px"},children:["File Navigation","Permissions","Bash Scripting","Processes","Package Mgmt","Networking"].map(U=>S.jsxs("div",{style:{padding:"16px",background:"rgba(168, 85, 247, 0.1)",borderRadius:"12px",border:"1px solid rgba(168, 85, 247, 0.2)"},children:[S.jsx(zn,{size:24,style:{color:"var(--accent-primary)",marginBottom:"8px"}}),S.jsx("div",{style:{fontWeight:"500"},children:U})]},U))})]})]}),G==="lesson"&&N&&S.jsxs("div",{className:"lesson-container",children:[S.jsxs("div",{className:"lesson-header",children:[S.jsxs("div",{className:"lesson-breadcrumb",children:[S.jsx("a",{href:"#",onClick:U=>{U.preventDefault(),h("home")},children:"Home"}),S.jsx(Xi,{size:16}),S.jsx("span",{children:N.title})]}),S.jsx("h1",{className:"lesson-title",children:N.title}),S.jsxs("div",{className:"lesson-meta",children:[S.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[S.jsx(Sp,{size:16}),N.duration]}),ie.includes(N.id)&&S.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--accent-green)"},children:[S.jsx(zn,{size:16}),"Completed"]})]})]}),S.jsx("div",{className:"lesson-content",children:Ge(N.content)}),!ie.includes(N.id)&&S.jsxs("button",{className:"nav-button primary",style:{width:"100%",justifyContent:"center",marginTop:"32px"},onClick:()=>O(N.id),children:[S.jsx(zn,{size:20}),"Mark as Complete"]}),S.jsxs("div",{className:"lesson-nav",children:[Le()?S.jsxs("button",{className:"nav-button",onClick:()=>w(Le()),children:[S.jsx(Xi,{size:20,style:{transform:"rotate(180deg)"}}),"Previous"]}):S.jsx("div",{}),me()?S.jsxs("button",{className:"nav-button primary",onClick:()=>w(me()),children:["Next Lesson",S.jsx(Xi,{size:20})]}):S.jsxs("button",{className:"nav-button primary",onClick:()=>h("home"),children:["Finish Course",S.jsx(zn,{size:20})]})]})]})]})]})}fp.createRoot(document.getElementById("root")).render(S.jsx(Ct.StrictMode,{children:S.jsx(Rp,{})}));
