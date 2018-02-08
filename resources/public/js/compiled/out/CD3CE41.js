goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('todomvc.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__47318__delegate = function (x){
if(cljs.core.truth_(todomvc.core.mount_root)){
return cljs.core.apply.call(null,todomvc.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'todomvc.core/mount-root' is missing");
}
};
var G__47318 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__47319__i = 0, G__47319__a = new Array(arguments.length -  0);
while (G__47319__i < G__47319__a.length) {G__47319__a[G__47319__i] = arguments[G__47319__i + 0]; ++G__47319__i;}
  x = new cljs.core.IndexedSeq(G__47319__a,0,null);
} 
return G__47318__delegate.call(this,x);};
G__47318.cljs$lang$maxFixedArity = 0;
G__47318.cljs$lang$applyTo = (function (arglist__47320){
var x = cljs.core.seq(arglist__47320);
return G__47318__delegate(x);
});
G__47318.cljs$core$IFn$_invoke$arity$variadic = G__47318__delegate;
return G__47318;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
