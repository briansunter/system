goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('todomvc.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__46802__delegate = function (x){
if(cljs.core.truth_(todomvc.core.mount_root)){
return cljs.core.apply.call(null,todomvc.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'todomvc.core/mount-root' is missing");
}
};
var G__46802 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__46803__i = 0, G__46803__a = new Array(arguments.length -  0);
while (G__46803__i < G__46803__a.length) {G__46803__a[G__46803__i] = arguments[G__46803__i + 0]; ++G__46803__i;}
  x = new cljs.core.IndexedSeq(G__46803__a,0,null);
} 
return G__46802__delegate.call(this,x);};
G__46802.cljs$lang$maxFixedArity = 0;
G__46802.cljs$lang$applyTo = (function (arglist__46804){
var x = cljs.core.seq(arglist__46804);
return G__46802__delegate(x);
});
G__46802.cljs$core$IFn$_invoke$arity$variadic = G__46802__delegate;
return G__46802;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
