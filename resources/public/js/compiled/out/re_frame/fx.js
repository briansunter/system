// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__36803 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__36804 = null;
var count__36805 = (0);
var i__36806 = (0);
while(true){
if((i__36806 < count__36805)){
var vec__36807 = cljs.core._nth.call(null,chunk__36804,i__36806);
var effect_key = cljs.core.nth.call(null,vec__36807,(0),null);
var effect_value = cljs.core.nth.call(null,vec__36807,(1),null);
var temp__4655__auto___36813 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___36813)){
var effect_fn_36814 = temp__4655__auto___36813;
effect_fn_36814.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__36815 = seq__36803;
var G__36816 = chunk__36804;
var G__36817 = count__36805;
var G__36818 = (i__36806 + (1));
seq__36803 = G__36815;
chunk__36804 = G__36816;
count__36805 = G__36817;
i__36806 = G__36818;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36803);
if(temp__4657__auto__){
var seq__36803__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36803__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__36803__$1);
var G__36819 = cljs.core.chunk_rest.call(null,seq__36803__$1);
var G__36820 = c__29125__auto__;
var G__36821 = cljs.core.count.call(null,c__29125__auto__);
var G__36822 = (0);
seq__36803 = G__36819;
chunk__36804 = G__36820;
count__36805 = G__36821;
i__36806 = G__36822;
continue;
} else {
var vec__36810 = cljs.core.first.call(null,seq__36803__$1);
var effect_key = cljs.core.nth.call(null,vec__36810,(0),null);
var effect_value = cljs.core.nth.call(null,vec__36810,(1),null);
var temp__4655__auto___36823 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___36823)){
var effect_fn_36824 = temp__4655__auto___36823;
effect_fn_36824.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__36825 = cljs.core.next.call(null,seq__36803__$1);
var G__36826 = null;
var G__36827 = (0);
var G__36828 = (0);
seq__36803 = G__36825;
chunk__36804 = G__36826;
count__36805 = G__36827;
i__36806 = G__36828;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__36829 = cljs.core.seq.call(null,value);
var chunk__36830 = null;
var count__36831 = (0);
var i__36832 = (0);
while(true){
if((i__36832 < count__36831)){
var map__36833 = cljs.core._nth.call(null,chunk__36830,i__36832);
var map__36833__$1 = ((((!((map__36833 == null)))?((((map__36833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36833):map__36833);
var effect = map__36833__$1;
var ms = cljs.core.get.call(null,map__36833__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36833__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__36829,chunk__36830,count__36831,i__36832,map__36833,map__36833__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__36829,chunk__36830,count__36831,i__36832,map__36833,map__36833__$1,effect,ms,dispatch))
,ms);
}

var G__36837 = seq__36829;
var G__36838 = chunk__36830;
var G__36839 = count__36831;
var G__36840 = (i__36832 + (1));
seq__36829 = G__36837;
chunk__36830 = G__36838;
count__36831 = G__36839;
i__36832 = G__36840;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36829);
if(temp__4657__auto__){
var seq__36829__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36829__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__36829__$1);
var G__36841 = cljs.core.chunk_rest.call(null,seq__36829__$1);
var G__36842 = c__29125__auto__;
var G__36843 = cljs.core.count.call(null,c__29125__auto__);
var G__36844 = (0);
seq__36829 = G__36841;
chunk__36830 = G__36842;
count__36831 = G__36843;
i__36832 = G__36844;
continue;
} else {
var map__36835 = cljs.core.first.call(null,seq__36829__$1);
var map__36835__$1 = ((((!((map__36835 == null)))?((((map__36835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36835):map__36835);
var effect = map__36835__$1;
var ms = cljs.core.get.call(null,map__36835__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36835__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__36829,chunk__36830,count__36831,i__36832,map__36835,map__36835__$1,effect,ms,dispatch,seq__36829__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__36829,chunk__36830,count__36831,i__36832,map__36835,map__36835__$1,effect,ms,dispatch,seq__36829__$1,temp__4657__auto__))
,ms);
}

var G__36845 = cljs.core.next.call(null,seq__36829__$1);
var G__36846 = null;
var G__36847 = (0);
var G__36848 = (0);
seq__36829 = G__36845;
chunk__36830 = G__36846;
count__36831 = G__36847;
i__36832 = G__36848;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__36849 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__36850 = null;
var count__36851 = (0);
var i__36852 = (0);
while(true){
if((i__36852 < count__36851)){
var event = cljs.core._nth.call(null,chunk__36850,i__36852);
re_frame.router.dispatch.call(null,event);

var G__36853 = seq__36849;
var G__36854 = chunk__36850;
var G__36855 = count__36851;
var G__36856 = (i__36852 + (1));
seq__36849 = G__36853;
chunk__36850 = G__36854;
count__36851 = G__36855;
i__36852 = G__36856;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36849);
if(temp__4657__auto__){
var seq__36849__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36849__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__36849__$1);
var G__36857 = cljs.core.chunk_rest.call(null,seq__36849__$1);
var G__36858 = c__29125__auto__;
var G__36859 = cljs.core.count.call(null,c__29125__auto__);
var G__36860 = (0);
seq__36849 = G__36857;
chunk__36850 = G__36858;
count__36851 = G__36859;
i__36852 = G__36860;
continue;
} else {
var event = cljs.core.first.call(null,seq__36849__$1);
re_frame.router.dispatch.call(null,event);

var G__36861 = cljs.core.next.call(null,seq__36849__$1);
var G__36862 = null;
var G__36863 = (0);
var G__36864 = (0);
seq__36849 = G__36861;
chunk__36850 = G__36862;
count__36851 = G__36863;
i__36852 = G__36864;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__36865 = cljs.core.seq.call(null,value);
var chunk__36866 = null;
var count__36867 = (0);
var i__36868 = (0);
while(true){
if((i__36868 < count__36867)){
var event = cljs.core._nth.call(null,chunk__36866,i__36868);
clear_event.call(null,event);

var G__36869 = seq__36865;
var G__36870 = chunk__36866;
var G__36871 = count__36867;
var G__36872 = (i__36868 + (1));
seq__36865 = G__36869;
chunk__36866 = G__36870;
count__36867 = G__36871;
i__36868 = G__36872;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36865);
if(temp__4657__auto__){
var seq__36865__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36865__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__36865__$1);
var G__36873 = cljs.core.chunk_rest.call(null,seq__36865__$1);
var G__36874 = c__29125__auto__;
var G__36875 = cljs.core.count.call(null,c__29125__auto__);
var G__36876 = (0);
seq__36865 = G__36873;
chunk__36866 = G__36874;
count__36867 = G__36875;
i__36868 = G__36876;
continue;
} else {
var event = cljs.core.first.call(null,seq__36865__$1);
clear_event.call(null,event);

var G__36877 = cljs.core.next.call(null,seq__36865__$1);
var G__36878 = null;
var G__36879 = (0);
var G__36880 = (0);
seq__36865 = G__36877;
chunk__36866 = G__36878;
count__36867 = G__36879;
i__36868 = G__36880;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1517206659495
