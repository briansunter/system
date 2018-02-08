goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('todomvc.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__48711__delegate = function (x){
if(cljs.core.truth_(todomvc.core.mount_root)){
return cljs.core.apply.call(null,todomvc.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'todomvc.core/mount-root' is missing");
}
};
var G__48711 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__48712__i = 0, G__48712__a = new Array(arguments.length -  0);
while (G__48712__i < G__48712__a.length) {G__48712__a[G__48712__i] = arguments[G__48712__i + 0]; ++G__48712__i;}
  x = new cljs.core.IndexedSeq(G__48712__a,0,null);
} 
return G__48711__delegate.call(this,x);};
G__48711.cljs$lang$maxFixedArity = 0;
G__48711.cljs$lang$applyTo = (function (arglist__48713){
var x = cljs.core.seq(arglist__48713);
return G__48711__delegate(x);
});
G__48711.cljs$core$IFn$_invoke$arity$variadic = G__48711__delegate;
return G__48711;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
