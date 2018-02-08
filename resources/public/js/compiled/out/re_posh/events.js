// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_posh.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_posh.events.reg_event_ds = (function re_posh$events$reg_event_ds(var_args){
var G__37288 = arguments.length;
switch (G__37288) {
case 3:
return re_posh.events.reg_event_ds.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return re_posh.events.reg_event_ds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_posh.events.reg_event_ds.cljs$core$IFn$_invoke$arity$3 = (function (event_name,interceptors,handler){
return re_frame.core.reg_event_fx.call(null,event_name,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859))], null),interceptors)),(function (p__37289,signal){
var map__37290 = p__37289;
var map__37290__$1 = ((((!((map__37290 == null)))?((((map__37290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37290):map__37290);
var ds = cljs.core.get.call(null,map__37290__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),handler.call(null,ds,signal)], null);
}));
});

re_posh.events.reg_event_ds.cljs$core$IFn$_invoke$arity$2 = (function (event_name,handler){
return re_posh.events.reg_event_ds.call(null,event_name,cljs.core.PersistentVector.EMPTY,handler);
});

re_posh.events.reg_event_ds.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=events.js.map?rel=1517206659898
