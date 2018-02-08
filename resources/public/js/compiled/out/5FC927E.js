goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('todomvc.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__47240__delegate = function (x){
if(cljs.core.truth_(todomvc.core.mount_root)){
return cljs.core.apply.call(null,todomvc.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'todomvc.core/mount-root' is missing");
}
};
var G__47240 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__47241__i = 0, G__47241__a = new Array(arguments.length -  0);
while (G__47241__i < G__47241__a.length) {G__47241__a[G__47241__i] = arguments[G__47241__i + 0]; ++G__47241__i;}
  x = new cljs.core.IndexedSeq(G__47241__a,0,null);
} 
return G__47240__delegate.call(this,x);};
G__47240.cljs$lang$maxFixedArity = 0;
G__47240.cljs$lang$applyTo = (function (arglist__47242){
var x = cljs.core.seq(arglist__47242);
return G__47240__delegate(x);
});
G__47240.cljs$core$IFn$_invoke$arity$variadic = G__47240__delegate;
return G__47240;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
