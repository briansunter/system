goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('todomvc.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__47803__delegate = function (x){
if(cljs.core.truth_(todomvc.core.mount_root)){
return cljs.core.apply.call(null,todomvc.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'todomvc.core/mount-root' is missing");
}
};
var G__47803 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__47804__i = 0, G__47804__a = new Array(arguments.length -  0);
while (G__47804__i < G__47804__a.length) {G__47804__a[G__47804__i] = arguments[G__47804__i + 0]; ++G__47804__i;}
  x = new cljs.core.IndexedSeq(G__47804__a,0,null);
} 
return G__47803__delegate.call(this,x);};
G__47803.cljs$lang$maxFixedArity = 0;
G__47803.cljs$lang$applyTo = (function (arglist__47805){
var x = cljs.core.seq(arglist__47805);
return G__47803__delegate(x);
});
G__47803.cljs$core$IFn$_invoke$arity$variadic = G__47803__delegate;
return G__47803;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
