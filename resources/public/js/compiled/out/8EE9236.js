goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('todomvc.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__47420__delegate = function (x){
if(cljs.core.truth_(todomvc.core.mount_root)){
return cljs.core.apply.call(null,todomvc.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'todomvc.core/mount-root' is missing");
}
};
var G__47420 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__47421__i = 0, G__47421__a = new Array(arguments.length -  0);
while (G__47421__i < G__47421__a.length) {G__47421__a[G__47421__i] = arguments[G__47421__i + 0]; ++G__47421__i;}
  x = new cljs.core.IndexedSeq(G__47421__a,0,null);
} 
return G__47420__delegate.call(this,x);};
G__47420.cljs$lang$maxFixedArity = 0;
G__47420.cljs$lang$applyTo = (function (arglist__47422){
var x = cljs.core.seq(arglist__47422);
return G__47420__delegate(x);
});
G__47420.cljs$core$IFn$_invoke$arity$variadic = G__47420__delegate;
return G__47420;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
