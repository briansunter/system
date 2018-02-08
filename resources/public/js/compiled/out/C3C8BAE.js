goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('todomvc.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__47367__delegate = function (x){
if(cljs.core.truth_(todomvc.core.mount_root)){
return cljs.core.apply.call(null,todomvc.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'todomvc.core/mount-root' is missing");
}
};
var G__47367 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__47368__i = 0, G__47368__a = new Array(arguments.length -  0);
while (G__47368__i < G__47368__a.length) {G__47368__a[G__47368__i] = arguments[G__47368__i + 0]; ++G__47368__i;}
  x = new cljs.core.IndexedSeq(G__47368__a,0,null);
} 
return G__47367__delegate.call(this,x);};
G__47367.cljs$lang$maxFixedArity = 0;
G__47367.cljs$lang$applyTo = (function (arglist__47369){
var x = cljs.core.seq(arglist__47369);
return G__47367__delegate(x);
});
G__47367.cljs$core$IFn$_invoke$arity$variadic = G__47367__delegate;
return G__47367;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
