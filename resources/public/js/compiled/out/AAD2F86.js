goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('todomvc.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__49152__delegate = function (x){
if(cljs.core.truth_(todomvc.core.mount_root)){
return cljs.core.apply.call(null,todomvc.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'todomvc.core/mount-root' is missing");
}
};
var G__49152 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__49153__i = 0, G__49153__a = new Array(arguments.length -  0);
while (G__49153__i < G__49153__a.length) {G__49153__a[G__49153__i] = arguments[G__49153__i + 0]; ++G__49153__i;}
  x = new cljs.core.IndexedSeq(G__49153__a,0,null);
} 
return G__49152__delegate.call(this,x);};
G__49152.cljs$lang$maxFixedArity = 0;
G__49152.cljs$lang$applyTo = (function (arglist__49154){
var x = cljs.core.seq(arglist__49154);
return G__49152__delegate(x);
});
G__49152.cljs$core$IFn$_invoke$arity$variadic = G__49152__delegate;
return G__49152;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
