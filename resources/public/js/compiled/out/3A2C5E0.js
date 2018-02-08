goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('todomvc.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__47504__delegate = function (x){
if(cljs.core.truth_(todomvc.core.mount_root)){
return cljs.core.apply.call(null,todomvc.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'todomvc.core/mount-root' is missing");
}
};
var G__47504 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__47505__i = 0, G__47505__a = new Array(arguments.length -  0);
while (G__47505__i < G__47505__a.length) {G__47505__a[G__47505__i] = arguments[G__47505__i + 0]; ++G__47505__i;}
  x = new cljs.core.IndexedSeq(G__47505__a,0,null);
} 
return G__47504__delegate.call(this,x);};
G__47504.cljs$lang$maxFixedArity = 0;
G__47504.cljs$lang$applyTo = (function (arglist__47506){
var x = cljs.core.seq(arglist__47506);
return G__47504__delegate(x);
});
G__47504.cljs$core$IFn$_invoke$arity$variadic = G__47504__delegate;
return G__47504;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
