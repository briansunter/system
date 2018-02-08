goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('todomvc.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__53000__delegate = function (x){
if(cljs.core.truth_(todomvc.core.mount_root)){
return cljs.core.apply.call(null,todomvc.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'todomvc.core/mount-root' is missing");
}
};
var G__53000 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__53001__i = 0, G__53001__a = new Array(arguments.length -  0);
while (G__53001__i < G__53001__a.length) {G__53001__a[G__53001__i] = arguments[G__53001__i + 0]; ++G__53001__i;}
  x = new cljs.core.IndexedSeq(G__53001__a,0,null);
} 
return G__53000__delegate.call(this,x);};
G__53000.cljs$lang$maxFixedArity = 0;
G__53000.cljs$lang$applyTo = (function (arglist__53002){
var x = cljs.core.seq(arglist__53002);
return G__53000__delegate(x);
});
G__53000.cljs$core$IFn$_invoke$arity$variadic = G__53000__delegate;
return G__53000;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
