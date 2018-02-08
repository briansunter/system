goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('todomvc.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__50541__delegate = function (x){
if(cljs.core.truth_(todomvc.core.mount_root)){
return cljs.core.apply.call(null,todomvc.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'todomvc.core/mount-root' is missing");
}
};
var G__50541 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__50542__i = 0, G__50542__a = new Array(arguments.length -  0);
while (G__50542__i < G__50542__a.length) {G__50542__a[G__50542__i] = arguments[G__50542__i + 0]; ++G__50542__i;}
  x = new cljs.core.IndexedSeq(G__50542__a,0,null);
} 
return G__50541__delegate.call(this,x);};
G__50541.cljs$lang$maxFixedArity = 0;
G__50541.cljs$lang$applyTo = (function (arglist__50543){
var x = cljs.core.seq(arglist__50543);
return G__50541__delegate(x);
});
G__50541.cljs$core$IFn$_invoke$arity$variadic = G__50541__delegate;
return G__50541;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
