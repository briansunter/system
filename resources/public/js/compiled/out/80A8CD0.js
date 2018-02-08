goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('todomvc.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__45186__delegate = function (x){
if(cljs.core.truth_(todomvc.core.mount_root)){
return cljs.core.apply.call(null,todomvc.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'todomvc.core/mount-root' is missing");
}
};
var G__45186 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__45187__i = 0, G__45187__a = new Array(arguments.length -  0);
while (G__45187__i < G__45187__a.length) {G__45187__a[G__45187__i] = arguments[G__45187__i + 0]; ++G__45187__i;}
  x = new cljs.core.IndexedSeq(G__45187__a,0,null);
} 
return G__45186__delegate.call(this,x);};
G__45186.cljs$lang$maxFixedArity = 0;
G__45186.cljs$lang$applyTo = (function (arglist__45188){
var x = cljs.core.seq(arglist__45188);
return G__45186__delegate(x);
});
G__45186.cljs$core$IFn$_invoke$arity$variadic = G__45186__delegate;
return G__45186;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
