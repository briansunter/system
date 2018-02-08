goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('todomvc.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__54822__delegate = function (x){
if(cljs.core.truth_(todomvc.core.mount_root)){
return cljs.core.apply.call(null,todomvc.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'todomvc.core/mount-root' is missing");
}
};
var G__54822 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__54823__i = 0, G__54823__a = new Array(arguments.length -  0);
while (G__54823__i < G__54823__a.length) {G__54823__a[G__54823__i] = arguments[G__54823__i + 0]; ++G__54823__i;}
  x = new cljs.core.IndexedSeq(G__54823__a,0,null);
} 
return G__54822__delegate.call(this,x);};
G__54822.cljs$lang$maxFixedArity = 0;
G__54822.cljs$lang$applyTo = (function (arglist__54824){
var x = cljs.core.seq(arglist__54824);
return G__54822__delegate(x);
});
G__54822.cljs$core$IFn$_invoke$arity$variadic = G__54822__delegate;
return G__54822;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
