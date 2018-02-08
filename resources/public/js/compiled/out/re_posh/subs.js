// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_posh.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
re_posh.subs.reg_query_sub = (function re_posh$subs$reg_query_sub(sub_name,query){
return re_frame.core.reg_sub_raw.call(null,sub_name,(function (_,p__37265){
var vec__37266 = p__37265;
var seq__37267 = cljs.core.seq.call(null,vec__37266);
var first__37268 = cljs.core.first.call(null,seq__37267);
var seq__37267__$1 = cljs.core.next.call(null,seq__37267);
var ___$1 = first__37268;
var params = seq__37267__$1;
var pre_q = cljs.core.partial.call(null,posh.reagent.q,query,cljs.core.deref.call(null,re_posh.db.store));
return cljs.core.apply.call(null,pre_q,params);
}));
});
re_posh.subs.reg_pull_sub = (function re_posh$subs$reg_pull_sub(sub_name,pattern){
return re_frame.core.reg_sub_raw.call(null,sub_name,(function (_,p__37269){
var vec__37270 = p__37269;
var ___$1 = cljs.core.nth.call(null,vec__37270,(0),null);
var id = cljs.core.nth.call(null,vec__37270,(1),null);
return posh.reagent.pull.call(null,cljs.core.deref.call(null,re_posh.db.store),pattern,id);
}));
});

//# sourceMappingURL=subs.js.map?rel=1517206659845
