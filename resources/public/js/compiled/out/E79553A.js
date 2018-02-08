goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('todomvc.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__47379__delegate = function (x){
if(cljs.core.truth_(todomvc.core.mount_root)){
return cljs.core.apply.call(null,todomvc.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'todomvc.core/mount-root' is missing");
}
};
var G__47379 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__47380__i = 0, G__47380__a = new Array(arguments.length -  0);
while (G__47380__i < G__47380__a.length) {G__47380__a[G__47380__i] = arguments[G__47380__i + 0]; ++G__47380__i;}
  x = new cljs.core.IndexedSeq(G__47380__a,0,null);
} 
return G__47379__delegate.call(this,x);};
G__47379.cljs$lang$maxFixedArity = 0;
G__47379.cljs$lang$applyTo = (function (arglist__47381){
var x = cljs.core.seq(arglist__47381);
return G__47379__delegate(x);
});
G__47379.cljs$core$IFn$_invoke$arity$variadic = G__47379__delegate;
return G__47379;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
