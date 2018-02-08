// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__36683_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__36683_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___36684 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___36684)){
var not_i_36685 = temp__4657__auto___36684;
if(cljs.core.fn_QMARK_.call(null,not_i_36685)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_36685);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_36685);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_36686 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_36687 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__36631__auto___36700 = re_frame.interop.now.call(null);
var duration__36632__auto___36701 = (end__36631__auto___36700 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__36688_36702 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__36689_36703 = null;
var count__36690_36704 = (0);
var i__36691_36705 = (0);
while(true){
if((i__36691_36705 < count__36690_36704)){
var vec__36692_36706 = cljs.core._nth.call(null,chunk__36689_36703,i__36691_36705);
var k__36633__auto___36707 = cljs.core.nth.call(null,vec__36692_36706,(0),null);
var cb__36634__auto___36708 = cljs.core.nth.call(null,vec__36692_36706,(1),null);
try{cb__36634__auto___36708.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36632__auto___36701,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e36695){if((e36695 instanceof java.lang.Exception)){
var e__36635__auto___36709 = e36695;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36633__auto___36707,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__36635__auto___36709);
} else {
throw e36695;

}
}
var G__36710 = seq__36688_36702;
var G__36711 = chunk__36689_36703;
var G__36712 = count__36690_36704;
var G__36713 = (i__36691_36705 + (1));
seq__36688_36702 = G__36710;
chunk__36689_36703 = G__36711;
count__36690_36704 = G__36712;
i__36691_36705 = G__36713;
continue;
} else {
var temp__4657__auto___36714 = cljs.core.seq.call(null,seq__36688_36702);
if(temp__4657__auto___36714){
var seq__36688_36715__$1 = temp__4657__auto___36714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36688_36715__$1)){
var c__29125__auto___36716 = cljs.core.chunk_first.call(null,seq__36688_36715__$1);
var G__36717 = cljs.core.chunk_rest.call(null,seq__36688_36715__$1);
var G__36718 = c__29125__auto___36716;
var G__36719 = cljs.core.count.call(null,c__29125__auto___36716);
var G__36720 = (0);
seq__36688_36702 = G__36717;
chunk__36689_36703 = G__36718;
count__36690_36704 = G__36719;
i__36691_36705 = G__36720;
continue;
} else {
var vec__36696_36721 = cljs.core.first.call(null,seq__36688_36715__$1);
var k__36633__auto___36722 = cljs.core.nth.call(null,vec__36696_36721,(0),null);
var cb__36634__auto___36723 = cljs.core.nth.call(null,vec__36696_36721,(1),null);
try{cb__36634__auto___36723.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36632__auto___36701,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e36699){if((e36699 instanceof java.lang.Exception)){
var e__36635__auto___36724 = e36699;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__36633__auto___36722,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__36635__auto___36724);
} else {
throw e36699;

}
}
var G__36725 = cljs.core.next.call(null,seq__36688_36715__$1);
var G__36726 = null;
var G__36727 = (0);
var G__36728 = (0);
seq__36688_36702 = G__36725;
chunk__36689_36703 = G__36726;
count__36690_36704 = G__36727;
i__36691_36705 = G__36728;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_36687;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_36686;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1517206659339
