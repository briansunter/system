goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('todomvc.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__48352__delegate = function (x){
if(cljs.core.truth_(todomvc.core.mount_root)){
return cljs.core.apply.call(null,todomvc.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'todomvc.core/mount-root' is missing");
}
};
var G__48352 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__48353__i = 0, G__48353__a = new Array(arguments.length -  0);
while (G__48353__i < G__48353__a.length) {G__48353__a[G__48353__i] = arguments[G__48353__i + 0]; ++G__48353__i;}
  x = new cljs.core.IndexedSeq(G__48353__a,0,null);
} 
return G__48352__delegate.call(this,x);};
G__48352.cljs$lang$maxFixedArity = 0;
G__48352.cljs$lang$applyTo = (function (arglist__48354){
var x = cljs.core.seq(arglist__48354);
return G__48352__delegate(x);
});
G__48352.cljs$core$IFn$_invoke$arity$variadic = G__48352__delegate;
return G__48352;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));