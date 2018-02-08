// Compiled by ClojureScript 1.9.908 {}
goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('datascript.core');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__28286__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__28286__auto__){
return or__28286__auto__;
} else {
return stop_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,ls),posh.lib.q_analyze.take_until.call(null,stop_at_QMARK_,cljs.core.rest.call(null,ls)));
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__28286__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__28286__auto__){
return or__28286__auto__;
} else {
return rest_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return ls;
} else {
var G__35961 = rest_at_QMARK_;
var G__35962 = cljs.core.rest.call(null,ls);
rest_at_QMARK_ = G__35961;
ls = G__35962;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_.call(null,ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ls),posh.lib.q_analyze.take_until.call(null,split_at_QMARK_,posh.lib.q_analyze.take_until.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls)))]),posh.lib.q_analyze.split_list_at.call(null,split_at_QMARK_,posh.lib.q_analyze.rest_at.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls))));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if(!(cljs.core.map_QMARK_.call(null,query))){
return posh.lib.q_analyze.split_list_at.call(null,cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),"$"));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),"?"));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_.call(null,query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,query))){
return clojure.set.union.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.first.call(null,query)),posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query)));
} else {
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,cljs.core.first.call(null,query)))){
return cljs.core.conj.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query)),cljs.core.first.call(null,query));
} else {
return posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.call(null,(3284832));
return ((function (qvar_count){
return (function (){
return cljs.core.symbol.call(null,["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,qvar_count,cljs.core.inc))].join(''));
});
;})(qvar_count))
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return (cljs.core.vector_QMARK_.call(null,v)) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.coll_QMARK_,v)));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.call(null,s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.call(null,n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__28274__auto__ = cljs.core.first.call(null,eav);
if(cljs.core.truth_(and__28274__auto__)){
return cljs.core.not.call(null,posh.lib.q_analyze.wildcard_QMARK_.call(null,cljs.core.first.call(null,eav)));
} else {
return and__28274__auto__;
}
})())){
return posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,eav),(n - (1)),cljs.core.conj.call(null,neweav,cljs.core.first.call(null,eav)),vars);
} else {
var var$ = posh.lib.q_analyze.qvar_gen.call(null);
return posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,eav),(n - (1)),cljs.core.conj.call(null,neweav,var$),cljs.core.conj.call(null,vars,var$));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = (cljs.core.truth_(posh.lib.q_analyze.dbvar_QMARK_.call(null,cljs.core.first.call(null,eav)))?eav:cljs.core.cons.call(null,cljs.core.symbol.call(null,"$"),eav));
return cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.first.call(null,dbeav),cljs.core.concat.call(null,new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.call(null,(4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_.call(null,where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_.call(null,where)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,where),cljs.core.second.call(null,where)], null),posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,(2),where))));
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,where),posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))));
}
} else {
if(cljs.core.truth_(posh.lib.q_analyze.eav_QMARK_.call(null,where))){
return posh.lib.q_analyze.normalize_eav.call(null,where);
} else {
if((cljs.core.vector_QMARK_.call(null,where)) && (cljs.core.list_QMARK_.call(null,cljs.core.first.call(null,where)))){
return where;
} else {
if(cljs.core.coll_QMARK_.call(null,where)){
return cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_.call(null,where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first.call(null,where);
if(cljs.core.seq_QMARK_.call(null,item)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.call(null,posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,(2),item))));
} else {
return cljs.core.concat.call(null,posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,item))));
}
} else {
if(cljs.core.truth_(posh.lib.q_analyze.eav_QMARK_.call(null,item))){
return cljs.core.cons.call(null,item,posh.lib.q_analyze.get_eavs.call(null,cljs.core.rest.call(null,where)));
} else {
if((cljs.core.vector_QMARK_.call(null,item)) && (cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,item)))){
var ocr_35963 = cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.first.call(null,item))], null),cljs.core.rest.call(null,item)));
try{if((cljs.core.vector_QMARK_.call(null,ocr_35963)) && ((cljs.core.count.call(null,ocr_35963) === 2))){
try{var ocr_35963_0__35966 = cljs.core.nth.call(null,ocr_35963,(0));
if((cljs.core.vector_QMARK_.call(null,ocr_35963_0__35966)) && ((cljs.core.count.call(null,ocr_35963_0__35966) === 5))){
try{var ocr_35963_0__35966_0__35968 = cljs.core.nth.call(null,ocr_35963_0__35966,(0));
if(cljs.core._EQ_.call(null,ocr_35963_0__35966_0__35968,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.call(null,ocr_35963_0__35966,(1));
var e = cljs.core.nth.call(null,ocr_35963_0__35966,(2));
var a = cljs.core.nth.call(null,ocr_35963_0__35966,(3));
var v = cljs.core.nth.call(null,ocr_35963,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e35975){if((e35975 instanceof Error)){
var e__35167__auto__ = e35975;
if((e__35167__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto__;
}
} else {
throw e35975;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35974){if((e35974 instanceof Error)){
var e__35167__auto__ = e35974;
if((e__35167__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto__;
}
} else {
throw e35974;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35973){if((e35973 instanceof Error)){
var e__35167__auto__ = e35973;
if((e__35167__auto__ === cljs.core.match.backtrack)){
return posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where)));
} else {
throw e__35167__auto__;
}
} else {
throw e35973;

}
}} else {
return posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where)));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.call(null,(function (xs,p__35976){
var vec__35977 = p__35976;
var k = cljs.core.nth.call(null,vec__35977,(0),null);
var v = cljs.core.nth.call(null,vec__35977,(1),null);
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set.call(null,cljs.core.mapcat.call(null,(function (r){
var vs = cljs.core.zipmap.call(null,vars,r);
return cljs.core.map.call(null,((function (vs){
return (function (eav){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (vs){
return (function (p1__35980_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,p1__35980_SHARP_))){
return cljs.core.get.call(null,vs,p1__35980_SHARP_);
} else {
return p1__35980_SHARP_;
}
});})(vs))
,eav));
});})(vs))
,eavs);
}),results));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,xs))){
return cljs.core.merge_with.call(null,cljs.core._PLUS_,posh.lib.q_analyze.count_qvars.call(null,cljs.core.first.call(null,xs)),posh.lib.q_analyze.count_qvars.call(null,cljs.core.rest.call(null,xs)));
} else {
return cljs.core.merge_with.call(null,cljs.core._PLUS_,(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,cljs.core.first.call(null,xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,xs),(1)]):null),posh.lib.q_analyze.count_qvars.call(null,cljs.core.rest.call(null,xs)));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__29094__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__35981(s__35982){
return (new cljs.core.LazySeq(null,(function (){
var s__35982__$1 = s__35982;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35982__$1);
if(temp__4657__auto__){
var s__35982__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35982__$2)){
var c__29092__auto__ = cljs.core.chunk_first.call(null,s__35982__$2);
var size__29093__auto__ = cljs.core.count.call(null,c__29092__auto__);
var b__35984 = cljs.core.chunk_buffer.call(null,size__29093__auto__);
if((function (){var i__35983 = (0);
while(true){
if((i__35983 < size__29093__auto__)){
var r = cljs.core._nth.call(null,c__29092__auto__,i__35983);
cljs.core.chunk_append.call(null,b__35984,(function (){var vars = cljs.core.zipmap.call(null,where,r);
return cljs.core.get.call(null,vars,qvar);
})());

var G__35985 = (i__35983 + (1));
i__35983 = G__35985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35984),posh$lib$q_analyze$fill_qvar_set_$_iter__35981.call(null,cljs.core.chunk_rest.call(null,s__35982__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35984),null);
}
} else {
var r = cljs.core.first.call(null,s__35982__$2);
return cljs.core.cons.call(null,(function (){var vars = cljs.core.zipmap.call(null,where,r);
return cljs.core.get.call(null,vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__35981.call(null,cljs.core.rest.call(null,s__35982__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29094__auto__.call(null,results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_.call(null,seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,seq1),cljs.core.first.call(null,seq2)),posh.lib.q_analyze.seq_merge_with.call(null,f,cljs.core.rest.call(null,seq1),cljs.core.rest.call(null,seq2)));
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.call(null,(function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with.call(null,cljs.core.conj,stacked,eav);
}),cljs.core.take.call(null,cljs.core.count.call(null,cljs.core.first.call(null,vs)),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__35988){
var vec__35989 = p__35988;
var e = cljs.core.nth.call(null,vec__35989,(0),null);
var a = cljs.core.nth.call(null,vec__35989,(1),null);
var v = cljs.core.nth.call(null,vec__35989,(2),null);
var eav = vec__35989;
var vec__35992 = cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.call(null,vec__35992,(0),null);
var qa = cljs.core.nth.call(null,vec__35992,(1),null);
var qv = cljs.core.nth.call(null,vec__35992,(2),null);
var iter__29094__auto__ = ((function (vec__35992,qe,qa,qv,vec__35989,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__35995(s__35996){
return (new cljs.core.LazySeq(null,((function (vec__35992,qe,qa,qv,vec__35989,e,a,v,eav){
return (function (){
var s__35996__$1 = s__35996;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35996__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var ee = cljs.core.first.call(null,xs__5205__auto__);
var iterys__29090__auto__ = ((function (s__35996__$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__35995_$_iter__35997(s__35998){
return (new cljs.core.LazySeq(null,((function (s__35996__$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav){
return (function (){
var s__35998__$1 = s__35998;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__35998__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var aa = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__29090__auto__ = ((function (s__35998__$1,s__35996__$1,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__35995_$_iter__35997_$_iter__35999(s__36000){
return (new cljs.core.LazySeq(null,((function (s__35998__$1,s__35996__$1,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav){
return (function (){
var s__36000__$1 = s__36000;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__36000__$1);
if(temp__4657__auto____$2){
var s__36000__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36000__$2)){
var c__29092__auto__ = cljs.core.chunk_first.call(null,s__36000__$2);
var size__29093__auto__ = cljs.core.count.call(null,c__29092__auto__);
var b__36002 = cljs.core.chunk_buffer.call(null,size__29093__auto__);
if((function (){var i__36001 = (0);
while(true){
if((i__36001 < size__29093__auto__)){
var vv = cljs.core._nth.call(null,c__29092__auto__,i__36001);
if((function (){var wildcard_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__36001,s__36000__$1,s__35998__$1,s__35996__$1,vv,c__29092__auto__,size__29093__auto__,b__36002,s__36000__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav){
return (function (p1__35986_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__35986_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__36001,s__36000__$1,s__35998__$1,s__35996__$1,vv,c__29092__auto__,size__29093__auto__,b__36002,s__36000__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__36001,s__36000__$1,s__35998__$1,s__35996__$1,wildcard_count,vv,c__29092__auto__,size__29093__auto__,b__36002,s__36000__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav){
return (function (p__36003){
var vec__36004 = p__36003;
var var_QMARK_ = cljs.core.nth.call(null,vec__36004,(0),null);
var val = cljs.core.nth.call(null,vec__36004,(1),null);
if(cljs.core.truth_((function (){var and__28274__auto__ = var_QMARK_;
if(cljs.core.truth_(and__28274__auto__)){
return cljs.core.not_EQ_.call(null,val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__28274__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__36001,s__36000__$1,s__35998__$1,s__35996__$1,wildcard_count,vv,c__29092__auto__,size__29093__auto__,b__36002,s__36000__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__36001,s__36000__$1,s__35998__$1,s__35996__$1,wildcard_count,exposed_qvars,vv,c__29092__auto__,size__29093__auto__,b__36002,s__36000__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav){
return (function (p1__35987_SHARP_){
if(cljs.core.truth_(p1__35987_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__36001,s__36000__$1,s__35998__$1,s__35996__$1,wildcard_count,exposed_qvars,vv,c__29092__auto__,size__29093__auto__,b__36002,s__36000__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return ((wildcard_count >= (1))) && ((((qvar_count > (1))) && (cljs.core._EQ_.call(null,(1),exposed_qvars))) || ((qvar_count <= (1)))) && ((wildcard_count <= qvar_count));
})()){
cljs.core.chunk_append.call(null,b__36002,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__36011 = (i__36001 + (1));
i__36001 = G__36011;
continue;
} else {
var G__36012 = (i__36001 + (1));
i__36001 = G__36012;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36002),posh$lib$q_analyze$pattern_from_eav__old_$_iter__35995_$_iter__35997_$_iter__35999.call(null,cljs.core.chunk_rest.call(null,s__36000__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36002),null);
}
} else {
var vv = cljs.core.first.call(null,s__36000__$2);
if((function (){var wildcard_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__36000__$1,s__35998__$1,s__35996__$1,vv,s__36000__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav){
return (function (p1__35986_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__35986_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__36000__$1,s__35998__$1,s__35996__$1,vv,s__36000__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__36000__$1,s__35998__$1,s__35996__$1,wildcard_count,vv,s__36000__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav){
return (function (p__36007){
var vec__36008 = p__36007;
var var_QMARK_ = cljs.core.nth.call(null,vec__36008,(0),null);
var val = cljs.core.nth.call(null,vec__36008,(1),null);
if(cljs.core.truth_((function (){var and__28274__auto__ = var_QMARK_;
if(cljs.core.truth_(and__28274__auto__)){
return cljs.core.not_EQ_.call(null,val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__28274__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__36000__$1,s__35998__$1,s__35996__$1,wildcard_count,vv,s__36000__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__36000__$1,s__35998__$1,s__35996__$1,wildcard_count,exposed_qvars,vv,s__36000__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav){
return (function (p1__35987_SHARP_){
if(cljs.core.truth_(p1__35987_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__36000__$1,s__35998__$1,s__35996__$1,wildcard_count,exposed_qvars,vv,s__36000__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return ((wildcard_count >= (1))) && ((((qvar_count > (1))) && (cljs.core._EQ_.call(null,(1),exposed_qvars))) || ((qvar_count <= (1)))) && ((wildcard_count <= qvar_count));
})()){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__35995_$_iter__35997_$_iter__35999.call(null,cljs.core.rest.call(null,s__36000__$2)));
} else {
var G__36013 = cljs.core.rest.call(null,s__36000__$2);
s__36000__$1 = G__36013;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__35998__$1,s__35996__$1,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav))
,null,null));
});})(s__35998__$1,s__35996__$1,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav))
;
var fs__29091__auto__ = cljs.core.seq.call(null,iterys__29090__auto__.call(null,(cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__29091__auto__){
return cljs.core.concat.call(null,fs__29091__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__35995_$_iter__35997.call(null,cljs.core.rest.call(null,s__35998__$1)));
} else {
var G__36014 = cljs.core.rest.call(null,s__35998__$1);
s__35998__$1 = G__36014;
continue;
}
} else {
return null;
}
break;
}
});})(s__35996__$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav))
,null,null));
});})(s__35996__$1,ee,xs__5205__auto__,temp__4657__auto__,vec__35992,qe,qa,qv,vec__35989,e,a,v,eav))
;
var fs__29091__auto__ = cljs.core.seq.call(null,iterys__29090__auto__.call(null,(cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__29091__auto__){
return cljs.core.concat.call(null,fs__29091__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__35995.call(null,cljs.core.rest.call(null,s__35996__$1)));
} else {
var G__36015 = cljs.core.rest.call(null,s__35996__$1);
s__35996__$1 = G__36015;
continue;
}
} else {
return null;
}
break;
}
});})(vec__35992,qe,qa,qv,vec__35989,e,a,v,eav))
,null,null));
});})(vec__35992,qe,qa,qv,vec__35989,e,a,v,eav))
;
return iter__29094__auto__.call(null,(cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__28286__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_36016 = cljs.core.vec.call(null,eav);
var ocr_36017 = cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav));
try{if((cljs.core.vector_QMARK_.call(null,ocr_36016)) && ((cljs.core.count.call(null,ocr_36016) === 3))){
try{var ocr_36016_0__36045 = cljs.core.nth.call(null,ocr_36016,(0));
if(cljs.core._EQ_.call(null,ocr_36016_0__36045,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_36016_1__36046 = cljs.core.nth.call(null,ocr_36016,(1));
if(cljs.core._EQ_.call(null,ocr_36016_1__36046,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_36016_2__36047 = cljs.core.nth.call(null,ocr_36016,(2));
if(cljs.core._EQ_.call(null,ocr_36016_2__36047,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36121){if((e36121 instanceof Error)){
var e__35167__auto__ = e36121;
if((e__35167__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_36017)) && ((cljs.core.count.call(null,ocr_36017) === 3))){
try{var ocr_36017_2__36050 = cljs.core.nth.call(null,ocr_36017,(2));
if((ocr_36017_2__36050 === false)){
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36123){if((e36123 instanceof Error)){
var e__35167__auto____$1 = e36123;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_36017_2__36050 = cljs.core.nth.call(null,ocr_36017,(2));
if((ocr_36017_2__36050 === true)){
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36124){if((e36124 instanceof Error)){
var e__35167__auto____$2 = e36124;
if((e__35167__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$2;
}
} else {
throw e36124;

}
}} else {
throw e__35167__auto____$1;
}
} else {
throw e36123;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36122){if((e36122 instanceof Error)){
var e__35167__auto____$1 = e36122;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$1;
}
} else {
throw e36122;

}
}} else {
throw e__35167__auto__;
}
} else {
throw e36121;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36116){if((e36116 instanceof Error)){
var e__35167__auto__ = e36116;
if((e__35167__auto__ === cljs.core.match.backtrack)){
try{var ocr_36016_2__36047 = cljs.core.nth.call(null,ocr_36016,(2));
if(cljs.core._EQ_.call(null,ocr_36016_2__36047,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if((cljs.core.vector_QMARK_.call(null,ocr_36017)) && ((cljs.core.count.call(null,ocr_36017) === 3))){
try{var ocr_36017_1__36052 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36052 === false)){
var a = cljs.core.nth.call(null,ocr_36016,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36119){if((e36119 instanceof Error)){
var e__35167__auto____$1 = e36119;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_36017_1__36052 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36052 === true)){
var a = cljs.core.nth.call(null,ocr_36016,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36120){if((e36120 instanceof Error)){
var e__35167__auto____$2 = e36120;
if((e__35167__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$2;
}
} else {
throw e36120;

}
}} else {
throw e__35167__auto____$1;
}
} else {
throw e36119;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36118){if((e36118 instanceof Error)){
var e__35167__auto____$1 = e36118;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$1;
}
} else {
throw e36118;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36117){if((e36117 instanceof Error)){
var e__35167__auto____$1 = e36117;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$1;
}
} else {
throw e36117;

}
}} else {
throw e__35167__auto__;
}
} else {
throw e36116;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36058){if((e36058 instanceof Error)){
var e__35167__auto__ = e36058;
if((e__35167__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_36017)) && ((cljs.core.count.call(null,ocr_36017) === 3))){
try{var ocr_36017_0__36054 = cljs.core.nth.call(null,ocr_36017,(0));
if((ocr_36017_0__36054 === false)){
try{var ocr_36016_1__36046 = cljs.core.nth.call(null,ocr_36016,(1));
if(cljs.core._EQ_.call(null,ocr_36016_1__36046,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_36016_2__36047 = cljs.core.nth.call(null,ocr_36016,(2));
if(cljs.core._EQ_.call(null,ocr_36016_2__36047,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_36016,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36115){if((e36115 instanceof Error)){
var e__35167__auto____$1 = e36115;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$1;
}
} else {
throw e36115;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36114){if((e36114 instanceof Error)){
var e__35167__auto____$1 = e36114;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$1;
}
} else {
throw e36114;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36060){if((e36060 instanceof Error)){
var e__35167__auto____$1 = e36060;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_36017_0__36054 = cljs.core.nth.call(null,ocr_36017,(0));
if((ocr_36017_0__36054 === true)){
try{var ocr_36016_2__36047 = cljs.core.nth.call(null,ocr_36016,(2));
if(cljs.core._EQ_.call(null,ocr_36016_2__36047,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_36016_1__36046 = cljs.core.nth.call(null,ocr_36016,(1));
if(cljs.core._EQ_.call(null,ocr_36016_1__36046,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_36016,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36111){if((e36111 instanceof Error)){
var e__35167__auto____$2 = e36111;
if((e__35167__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_36017_1__36055 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36055 === true)){
var a = cljs.core.nth.call(null,ocr_36016,(1));
var e = cljs.core.nth.call(null,ocr_36016,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36112){if((e36112 instanceof Error)){
var e__35167__auto____$3 = e36112;
if((e__35167__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_36017_1__36055 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36055 === false)){
var a = cljs.core.nth.call(null,ocr_36016,(1));
var e = cljs.core.nth.call(null,ocr_36016,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36113){if((e36113 instanceof Error)){
var e__35167__auto____$4 = e36113;
if((e__35167__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$4;
}
} else {
throw e36113;

}
}} else {
throw e__35167__auto____$3;
}
} else {
throw e36112;

}
}} else {
throw e__35167__auto____$2;
}
} else {
throw e36111;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36110){if((e36110 instanceof Error)){
var e__35167__auto____$2 = e36110;
if((e__35167__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$2;
}
} else {
throw e36110;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36061){if((e36061 instanceof Error)){
var e__35167__auto____$2 = e36061;
if((e__35167__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_36017_0__36054 = cljs.core.nth.call(null,ocr_36017,(0));
if((ocr_36017_0__36054 === false)){
try{var ocr_36017_1__36055 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36055 === true)){
try{var ocr_36016_2__36047 = cljs.core.nth.call(null,ocr_36016,(2));
if(cljs.core._EQ_.call(null,ocr_36016_2__36047,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_36016,(0));
var a = cljs.core.nth.call(null,ocr_36016,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36109){if((e36109 instanceof Error)){
var e__35167__auto____$3 = e36109;
if((e__35167__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$3;
}
} else {
throw e36109;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36106){if((e36106 instanceof Error)){
var e__35167__auto____$3 = e36106;
if((e__35167__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_36017_1__36055 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36055 === false)){
try{var ocr_36016_2__36047 = cljs.core.nth.call(null,ocr_36016,(2));
if(cljs.core._EQ_.call(null,ocr_36016_2__36047,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_36016,(0));
var a = cljs.core.nth.call(null,ocr_36016,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36108){if((e36108 instanceof Error)){
var e__35167__auto____$4 = e36108;
if((e__35167__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$4;
}
} else {
throw e36108;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36107){if((e36107 instanceof Error)){
var e__35167__auto____$4 = e36107;
if((e__35167__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$4;
}
} else {
throw e36107;

}
}} else {
throw e__35167__auto____$3;
}
} else {
throw e36106;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36062){if((e36062 instanceof Error)){
var e__35167__auto____$3 = e36062;
if((e__35167__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_36017_2__36056 = cljs.core.nth.call(null,ocr_36017,(2));
if((ocr_36017_2__36056 === true)){
try{var ocr_36017_0__36054 = cljs.core.nth.call(null,ocr_36017,(0));
if((ocr_36017_0__36054 === true)){
try{var ocr_36016_1__36046 = cljs.core.nth.call(null,ocr_36016,(1));
if(cljs.core._EQ_.call(null,ocr_36016_1__36046,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_36016,(0));
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36105){if((e36105 instanceof Error)){
var e__35167__auto____$4 = e36105;
if((e__35167__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$4;
}
} else {
throw e36105;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36104){if((e36104 instanceof Error)){
var e__35167__auto____$4 = e36104;
if((e__35167__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$4;
}
} else {
throw e36104;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36063){if((e36063 instanceof Error)){
var e__35167__auto____$4 = e36063;
if((e__35167__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_36017_2__36056 = cljs.core.nth.call(null,ocr_36017,(2));
if((ocr_36017_2__36056 === false)){
try{var ocr_36017_0__36054 = cljs.core.nth.call(null,ocr_36017,(0));
if((ocr_36017_0__36054 === true)){
try{var ocr_36016_1__36046 = cljs.core.nth.call(null,ocr_36016,(1));
if(cljs.core._EQ_.call(null,ocr_36016_1__36046,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_36016,(0));
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36103){if((e36103 instanceof Error)){
var e__35167__auto____$5 = e36103;
if((e__35167__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$5;
}
} else {
throw e36103;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36102){if((e36102 instanceof Error)){
var e__35167__auto____$5 = e36102;
if((e__35167__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$5;
}
} else {
throw e36102;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36064){if((e36064 instanceof Error)){
var e__35167__auto____$5 = e36064;
if((e__35167__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_36017_2__36056 = cljs.core.nth.call(null,ocr_36017,(2));
if((ocr_36017_2__36056 === true)){
try{var ocr_36017_0__36054 = cljs.core.nth.call(null,ocr_36017,(0));
if((ocr_36017_0__36054 === false)){
try{var ocr_36016_1__36046 = cljs.core.nth.call(null,ocr_36016,(1));
if(cljs.core._EQ_.call(null,ocr_36016_1__36046,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_36016,(0));
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36101){if((e36101 instanceof Error)){
var e__35167__auto____$6 = e36101;
if((e__35167__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$6;
}
} else {
throw e36101;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36100){if((e36100 instanceof Error)){
var e__35167__auto____$6 = e36100;
if((e__35167__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$6;
}
} else {
throw e36100;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36065){if((e36065 instanceof Error)){
var e__35167__auto____$6 = e36065;
if((e__35167__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_36017_2__36056 = cljs.core.nth.call(null,ocr_36017,(2));
if((ocr_36017_2__36056 === false)){
try{var ocr_36017_0__36054 = cljs.core.nth.call(null,ocr_36017,(0));
if((ocr_36017_0__36054 === false)){
try{var ocr_36016_1__36046 = cljs.core.nth.call(null,ocr_36016,(1));
if(cljs.core._EQ_.call(null,ocr_36016_1__36046,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_36016,(0));
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36099){if((e36099 instanceof Error)){
var e__35167__auto____$7 = e36099;
if((e__35167__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$7;
}
} else {
throw e36099;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36098){if((e36098 instanceof Error)){
var e__35167__auto____$7 = e36098;
if((e__35167__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$7;
}
} else {
throw e36098;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36066){if((e36066 instanceof Error)){
var e__35167__auto____$7 = e36066;
if((e__35167__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_36017_2__36056 = cljs.core.nth.call(null,ocr_36017,(2));
if((ocr_36017_2__36056 === true)){
try{var ocr_36017_1__36055 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36055 === true)){
try{var ocr_36016_0__36045 = cljs.core.nth.call(null,ocr_36016,(0));
if(cljs.core._EQ_.call(null,ocr_36016_0__36045,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_36016,(1));
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36097){if((e36097 instanceof Error)){
var e__35167__auto____$8 = e36097;
if((e__35167__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$8;
}
} else {
throw e36097;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36096){if((e36096 instanceof Error)){
var e__35167__auto____$8 = e36096;
if((e__35167__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$8;
}
} else {
throw e36096;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36067){if((e36067 instanceof Error)){
var e__35167__auto____$8 = e36067;
if((e__35167__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_36017_2__36056 = cljs.core.nth.call(null,ocr_36017,(2));
if((ocr_36017_2__36056 === false)){
try{var ocr_36017_1__36055 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36055 === true)){
try{var ocr_36016_0__36045 = cljs.core.nth.call(null,ocr_36016,(0));
if(cljs.core._EQ_.call(null,ocr_36016_0__36045,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_36016,(1));
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36095){if((e36095 instanceof Error)){
var e__35167__auto____$9 = e36095;
if((e__35167__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$9;
}
} else {
throw e36095;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36094){if((e36094 instanceof Error)){
var e__35167__auto____$9 = e36094;
if((e__35167__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$9;
}
} else {
throw e36094;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36068){if((e36068 instanceof Error)){
var e__35167__auto____$9 = e36068;
if((e__35167__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_36017_2__36056 = cljs.core.nth.call(null,ocr_36017,(2));
if((ocr_36017_2__36056 === true)){
try{var ocr_36017_1__36055 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36055 === false)){
try{var ocr_36016_0__36045 = cljs.core.nth.call(null,ocr_36016,(0));
if(cljs.core._EQ_.call(null,ocr_36016_0__36045,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_36016,(1));
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36093){if((e36093 instanceof Error)){
var e__35167__auto____$10 = e36093;
if((e__35167__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$10;
}
} else {
throw e36093;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36092){if((e36092 instanceof Error)){
var e__35167__auto____$10 = e36092;
if((e__35167__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$10;
}
} else {
throw e36092;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36069){if((e36069 instanceof Error)){
var e__35167__auto____$10 = e36069;
if((e__35167__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_36017_2__36056 = cljs.core.nth.call(null,ocr_36017,(2));
if((ocr_36017_2__36056 === false)){
try{var ocr_36017_1__36055 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36055 === false)){
try{var ocr_36016_0__36045 = cljs.core.nth.call(null,ocr_36016,(0));
if(cljs.core._EQ_.call(null,ocr_36016_0__36045,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_36016,(1));
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36091){if((e36091 instanceof Error)){
var e__35167__auto____$11 = e36091;
if((e__35167__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$11;
}
} else {
throw e36091;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36090){if((e36090 instanceof Error)){
var e__35167__auto____$11 = e36090;
if((e__35167__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$11;
}
} else {
throw e36090;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36070){if((e36070 instanceof Error)){
var e__35167__auto____$11 = e36070;
if((e__35167__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_36017_2__36056 = cljs.core.nth.call(null,ocr_36017,(2));
if((ocr_36017_2__36056 === true)){
try{var ocr_36017_0__36054 = cljs.core.nth.call(null,ocr_36017,(0));
if((ocr_36017_0__36054 === true)){
try{var ocr_36017_1__36055 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36055 === true)){
var e = cljs.core.nth.call(null,ocr_36016,(0));
var a = cljs.core.nth.call(null,ocr_36016,(1));
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36089){if((e36089 instanceof Error)){
var e__35167__auto____$12 = e36089;
if((e__35167__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$12;
}
} else {
throw e36089;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36084){if((e36084 instanceof Error)){
var e__35167__auto____$12 = e36084;
if((e__35167__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_36017_0__36054 = cljs.core.nth.call(null,ocr_36017,(0));
if((ocr_36017_0__36054 === false)){
try{var ocr_36017_1__36055 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36055 === true)){
var e = cljs.core.nth.call(null,ocr_36016,(0));
var a = cljs.core.nth.call(null,ocr_36016,(1));
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36088){if((e36088 instanceof Error)){
var e__35167__auto____$13 = e36088;
if((e__35167__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$13;
}
} else {
throw e36088;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36085){if((e36085 instanceof Error)){
var e__35167__auto____$13 = e36085;
if((e__35167__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_36017_0__36054 = cljs.core.nth.call(null,ocr_36017,(0));
if((ocr_36017_0__36054 === true)){
try{var ocr_36017_1__36055 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36055 === false)){
var e = cljs.core.nth.call(null,ocr_36016,(0));
var a = cljs.core.nth.call(null,ocr_36016,(1));
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36087){if((e36087 instanceof Error)){
var e__35167__auto____$14 = e36087;
if((e__35167__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$14;
}
} else {
throw e36087;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36086){if((e36086 instanceof Error)){
var e__35167__auto____$14 = e36086;
if((e__35167__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$14;
}
} else {
throw e36086;

}
}} else {
throw e__35167__auto____$13;
}
} else {
throw e36085;

}
}} else {
throw e__35167__auto____$12;
}
} else {
throw e36084;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36071){if((e36071 instanceof Error)){
var e__35167__auto____$12 = e36071;
if((e__35167__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_36017_2__36056 = cljs.core.nth.call(null,ocr_36017,(2));
if((ocr_36017_2__36056 === false)){
try{var ocr_36017_0__36054 = cljs.core.nth.call(null,ocr_36017,(0));
if((ocr_36017_0__36054 === true)){
try{var ocr_36017_1__36055 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36055 === true)){
var e = cljs.core.nth.call(null,ocr_36016,(0));
var a = cljs.core.nth.call(null,ocr_36016,(1));
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36083){if((e36083 instanceof Error)){
var e__35167__auto____$13 = e36083;
if((e__35167__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$13;
}
} else {
throw e36083;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36082){if((e36082 instanceof Error)){
var e__35167__auto____$13 = e36082;
if((e__35167__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$13;
}
} else {
throw e36082;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36072){if((e36072 instanceof Error)){
var e__35167__auto____$13 = e36072;
if((e__35167__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_36017_2__36056 = cljs.core.nth.call(null,ocr_36017,(2));
if((ocr_36017_2__36056 === true)){
try{var ocr_36017_0__36054 = cljs.core.nth.call(null,ocr_36017,(0));
if((ocr_36017_0__36054 === false)){
try{var ocr_36017_1__36055 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36055 === false)){
var e = cljs.core.nth.call(null,ocr_36016,(0));
var a = cljs.core.nth.call(null,ocr_36016,(1));
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36081){if((e36081 instanceof Error)){
var e__35167__auto____$14 = e36081;
if((e__35167__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$14;
}
} else {
throw e36081;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36080){if((e36080 instanceof Error)){
var e__35167__auto____$14 = e36080;
if((e__35167__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$14;
}
} else {
throw e36080;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36073){if((e36073 instanceof Error)){
var e__35167__auto____$14 = e36073;
if((e__35167__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_36017_2__36056 = cljs.core.nth.call(null,ocr_36017,(2));
if((ocr_36017_2__36056 === false)){
try{var ocr_36017_0__36054 = cljs.core.nth.call(null,ocr_36017,(0));
if((ocr_36017_0__36054 === true)){
try{var ocr_36017_1__36055 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36055 === false)){
var e = cljs.core.nth.call(null,ocr_36016,(0));
var a = cljs.core.nth.call(null,ocr_36016,(1));
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36079){if((e36079 instanceof Error)){
var e__35167__auto____$15 = e36079;
if((e__35167__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$15;
}
} else {
throw e36079;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36075){if((e36075 instanceof Error)){
var e__35167__auto____$15 = e36075;
if((e__35167__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_36017_0__36054 = cljs.core.nth.call(null,ocr_36017,(0));
if((ocr_36017_0__36054 === false)){
try{var ocr_36017_1__36055 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36055 === true)){
var e = cljs.core.nth.call(null,ocr_36016,(0));
var a = cljs.core.nth.call(null,ocr_36016,(1));
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36077){if((e36077 instanceof Error)){
var e__35167__auto____$16 = e36077;
if((e__35167__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_36017_1__36055 = cljs.core.nth.call(null,ocr_36017,(1));
if((ocr_36017_1__36055 === false)){
var e = cljs.core.nth.call(null,ocr_36016,(0));
var a = cljs.core.nth.call(null,ocr_36016,(1));
var v = cljs.core.nth.call(null,ocr_36016,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36078){if((e36078 instanceof Error)){
var e__35167__auto____$17 = e36078;
if((e__35167__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$17;
}
} else {
throw e36078;

}
}} else {
throw e__35167__auto____$16;
}
} else {
throw e36077;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36076){if((e36076 instanceof Error)){
var e__35167__auto____$16 = e36076;
if((e__35167__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$16;
}
} else {
throw e36076;

}
}} else {
throw e__35167__auto____$15;
}
} else {
throw e36075;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36074){if((e36074 instanceof Error)){
var e__35167__auto____$15 = e36074;
if((e__35167__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$15;
}
} else {
throw e36074;

}
}} else {
throw e__35167__auto____$14;
}
} else {
throw e36073;

}
}} else {
throw e__35167__auto____$13;
}
} else {
throw e36072;

}
}} else {
throw e__35167__auto____$12;
}
} else {
throw e36071;

}
}} else {
throw e__35167__auto____$11;
}
} else {
throw e36070;

}
}} else {
throw e__35167__auto____$10;
}
} else {
throw e36069;

}
}} else {
throw e__35167__auto____$9;
}
} else {
throw e36068;

}
}} else {
throw e__35167__auto____$8;
}
} else {
throw e36067;

}
}} else {
throw e__35167__auto____$7;
}
} else {
throw e36066;

}
}} else {
throw e__35167__auto____$6;
}
} else {
throw e36065;

}
}} else {
throw e__35167__auto____$5;
}
} else {
throw e36064;

}
}} else {
throw e__35167__auto____$4;
}
} else {
throw e36063;

}
}} else {
throw e__35167__auto____$3;
}
} else {
throw e36062;

}
}} else {
throw e__35167__auto____$2;
}
} else {
throw e36061;

}
}} else {
throw e__35167__auto____$1;
}
} else {
throw e36060;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36059){if((e36059 instanceof Error)){
var e__35167__auto____$1 = e36059;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$1;
}
} else {
throw e36059;

}
}} else {
throw e__35167__auto__;
}
} else {
throw e36058;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36057){if((e36057 instanceof Error)){
var e__35167__auto__ = e36057;
if((e__35167__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__35167__auto__;
}
} else {
throw e36057;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_36125 = cljs.core.vec.call(null,eav);
var ocr_36126 = cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav));
try{if((cljs.core.vector_QMARK_.call(null,ocr_36125)) && ((cljs.core.count.call(null,ocr_36125) === 3))){
try{var ocr_36125_0__36151 = cljs.core.nth.call(null,ocr_36125,(0));
if(cljs.core._EQ_.call(null,ocr_36125_0__36151,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_36125_1__36152 = cljs.core.nth.call(null,ocr_36125,(1));
if(cljs.core._EQ_.call(null,ocr_36125_1__36152,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_36125_2__36153 = cljs.core.nth.call(null,ocr_36125,(2));
if(cljs.core._EQ_.call(null,ocr_36125_2__36153,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e36215){if((e36215 instanceof Error)){
var e__35167__auto__ = e36215;
if((e__35167__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_36126)) && ((cljs.core.count.call(null,ocr_36126) === 3))){
try{var ocr_36126_2__36156 = cljs.core.nth.call(null,ocr_36126,(2));
if((ocr_36126_2__36156 === false)){
var v = cljs.core.nth.call(null,ocr_36125,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36217){if((e36217 instanceof Error)){
var e__35167__auto____$1 = e36217;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_36126_2__36156 = cljs.core.nth.call(null,ocr_36126,(2));
if((ocr_36126_2__36156 === true)){
var v = cljs.core.nth.call(null,ocr_36125,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36218){if((e36218 instanceof Error)){
var e__35167__auto____$2 = e36218;
if((e__35167__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$2;
}
} else {
throw e36218;

}
}} else {
throw e__35167__auto____$1;
}
} else {
throw e36217;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36216){if((e36216 instanceof Error)){
var e__35167__auto____$1 = e36216;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$1;
}
} else {
throw e36216;

}
}} else {
throw e__35167__auto__;
}
} else {
throw e36215;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36210){if((e36210 instanceof Error)){
var e__35167__auto__ = e36210;
if((e__35167__auto__ === cljs.core.match.backtrack)){
try{var ocr_36125_2__36153 = cljs.core.nth.call(null,ocr_36125,(2));
if(cljs.core._EQ_.call(null,ocr_36125_2__36153,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if((cljs.core.vector_QMARK_.call(null,ocr_36126)) && ((cljs.core.count.call(null,ocr_36126) === 3))){
try{var ocr_36126_1__36158 = cljs.core.nth.call(null,ocr_36126,(1));
if((ocr_36126_1__36158 === false)){
var a = cljs.core.nth.call(null,ocr_36125,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36213){if((e36213 instanceof Error)){
var e__35167__auto____$1 = e36213;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_36126_1__36158 = cljs.core.nth.call(null,ocr_36126,(1));
if((ocr_36126_1__36158 === true)){
var a = cljs.core.nth.call(null,ocr_36125,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36214){if((e36214 instanceof Error)){
var e__35167__auto____$2 = e36214;
if((e__35167__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$2;
}
} else {
throw e36214;

}
}} else {
throw e__35167__auto____$1;
}
} else {
throw e36213;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36212){if((e36212 instanceof Error)){
var e__35167__auto____$1 = e36212;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$1;
}
} else {
throw e36212;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36211){if((e36211 instanceof Error)){
var e__35167__auto____$1 = e36211;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$1;
}
} else {
throw e36211;

}
}} else {
throw e__35167__auto__;
}
} else {
throw e36210;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36164){if((e36164 instanceof Error)){
var e__35167__auto__ = e36164;
if((e__35167__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_36126)) && ((cljs.core.count.call(null,ocr_36126) === 3))){
try{var ocr_36126_0__36160 = cljs.core.nth.call(null,ocr_36126,(0));
if((ocr_36126_0__36160 === false)){
try{var ocr_36125_1__36152 = cljs.core.nth.call(null,ocr_36125,(1));
if(cljs.core._EQ_.call(null,ocr_36125_1__36152,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_36125_2__36153 = cljs.core.nth.call(null,ocr_36125,(2));
if(cljs.core._EQ_.call(null,ocr_36125_2__36153,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_36125,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36209){if((e36209 instanceof Error)){
var e__35167__auto____$1 = e36209;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$1;
}
} else {
throw e36209;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36208){if((e36208 instanceof Error)){
var e__35167__auto____$1 = e36208;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$1;
}
} else {
throw e36208;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36166){if((e36166 instanceof Error)){
var e__35167__auto____$1 = e36166;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_36126_0__36160 = cljs.core.nth.call(null,ocr_36126,(0));
if((ocr_36126_0__36160 === true)){
try{var ocr_36125_2__36153 = cljs.core.nth.call(null,ocr_36125,(2));
if(cljs.core._EQ_.call(null,ocr_36125_2__36153,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_36125_1__36152 = cljs.core.nth.call(null,ocr_36125,(1));
if(cljs.core._EQ_.call(null,ocr_36125_1__36152,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_36125,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36205){if((e36205 instanceof Error)){
var e__35167__auto____$2 = e36205;
if((e__35167__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_36126_1__36161 = cljs.core.nth.call(null,ocr_36126,(1));
if((ocr_36126_1__36161 === true)){
var a = cljs.core.nth.call(null,ocr_36125,(1));
var e = cljs.core.nth.call(null,ocr_36125,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36206){if((e36206 instanceof Error)){
var e__35167__auto____$3 = e36206;
if((e__35167__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_36126_1__36161 = cljs.core.nth.call(null,ocr_36126,(1));
if((ocr_36126_1__36161 === false)){
var a = cljs.core.nth.call(null,ocr_36125,(1));
var e = cljs.core.nth.call(null,ocr_36125,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36207){if((e36207 instanceof Error)){
var e__35167__auto____$4 = e36207;
if((e__35167__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$4;
}
} else {
throw e36207;

}
}} else {
throw e__35167__auto____$3;
}
} else {
throw e36206;

}
}} else {
throw e__35167__auto____$2;
}
} else {
throw e36205;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36204){if((e36204 instanceof Error)){
var e__35167__auto____$2 = e36204;
if((e__35167__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$2;
}
} else {
throw e36204;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36167){if((e36167 instanceof Error)){
var e__35167__auto____$2 = e36167;
if((e__35167__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_36126_0__36160 = cljs.core.nth.call(null,ocr_36126,(0));
if((ocr_36126_0__36160 === false)){
try{var ocr_36126_1__36161 = cljs.core.nth.call(null,ocr_36126,(1));
if((ocr_36126_1__36161 === true)){
try{var ocr_36125_2__36153 = cljs.core.nth.call(null,ocr_36125,(2));
if(cljs.core._EQ_.call(null,ocr_36125_2__36153,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_36125,(0));
var a = cljs.core.nth.call(null,ocr_36125,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36203){if((e36203 instanceof Error)){
var e__35167__auto____$3 = e36203;
if((e__35167__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$3;
}
} else {
throw e36203;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36202){if((e36202 instanceof Error)){
var e__35167__auto____$3 = e36202;
if((e__35167__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$3;
}
} else {
throw e36202;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36168){if((e36168 instanceof Error)){
var e__35167__auto____$3 = e36168;
if((e__35167__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_36126_2__36162 = cljs.core.nth.call(null,ocr_36126,(2));
if((ocr_36126_2__36162 === true)){
try{var ocr_36126_0__36160 = cljs.core.nth.call(null,ocr_36126,(0));
if((ocr_36126_0__36160 === true)){
try{var ocr_36125_1__36152 = cljs.core.nth.call(null,ocr_36125,(1));
if(cljs.core._EQ_.call(null,ocr_36125_1__36152,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_36125,(0));
var v = cljs.core.nth.call(null,ocr_36125,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36201){if((e36201 instanceof Error)){
var e__35167__auto____$4 = e36201;
if((e__35167__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$4;
}
} else {
throw e36201;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36200){if((e36200 instanceof Error)){
var e__35167__auto____$4 = e36200;
if((e__35167__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$4;
}
} else {
throw e36200;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36169){if((e36169 instanceof Error)){
var e__35167__auto____$4 = e36169;
if((e__35167__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_36126_2__36162 = cljs.core.nth.call(null,ocr_36126,(2));
if((ocr_36126_2__36162 === false)){
try{var ocr_36126_0__36160 = cljs.core.nth.call(null,ocr_36126,(0));
if((ocr_36126_0__36160 === true)){
try{var ocr_36125_1__36152 = cljs.core.nth.call(null,ocr_36125,(1));
if(cljs.core._EQ_.call(null,ocr_36125_1__36152,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_36125,(0));
var v = cljs.core.nth.call(null,ocr_36125,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36199){if((e36199 instanceof Error)){
var e__35167__auto____$5 = e36199;
if((e__35167__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$5;
}
} else {
throw e36199;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36198){if((e36198 instanceof Error)){
var e__35167__auto____$5 = e36198;
if((e__35167__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$5;
}
} else {
throw e36198;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36170){if((e36170 instanceof Error)){
var e__35167__auto____$5 = e36170;
if((e__35167__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_36126_2__36162 = cljs.core.nth.call(null,ocr_36126,(2));
if((ocr_36126_2__36162 === true)){
try{var ocr_36126_0__36160 = cljs.core.nth.call(null,ocr_36126,(0));
if((ocr_36126_0__36160 === false)){
try{var ocr_36125_1__36152 = cljs.core.nth.call(null,ocr_36125,(1));
if(cljs.core._EQ_.call(null,ocr_36125_1__36152,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_36125,(0));
var v = cljs.core.nth.call(null,ocr_36125,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36197){if((e36197 instanceof Error)){
var e__35167__auto____$6 = e36197;
if((e__35167__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$6;
}
} else {
throw e36197;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36194){if((e36194 instanceof Error)){
var e__35167__auto____$6 = e36194;
if((e__35167__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_36126_1__36161 = cljs.core.nth.call(null,ocr_36126,(1));
if((ocr_36126_1__36161 === true)){
try{var ocr_36125_0__36151 = cljs.core.nth.call(null,ocr_36125,(0));
if(cljs.core._EQ_.call(null,ocr_36125_0__36151,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_36125,(1));
var v = cljs.core.nth.call(null,ocr_36125,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36196){if((e36196 instanceof Error)){
var e__35167__auto____$7 = e36196;
if((e__35167__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$7;
}
} else {
throw e36196;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36195){if((e36195 instanceof Error)){
var e__35167__auto____$7 = e36195;
if((e__35167__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$7;
}
} else {
throw e36195;

}
}} else {
throw e__35167__auto____$6;
}
} else {
throw e36194;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36171){if((e36171 instanceof Error)){
var e__35167__auto____$6 = e36171;
if((e__35167__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_36126_2__36162 = cljs.core.nth.call(null,ocr_36126,(2));
if((ocr_36126_2__36162 === false)){
try{var ocr_36126_1__36161 = cljs.core.nth.call(null,ocr_36126,(1));
if((ocr_36126_1__36161 === true)){
try{var ocr_36125_0__36151 = cljs.core.nth.call(null,ocr_36125,(0));
if(cljs.core._EQ_.call(null,ocr_36125_0__36151,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_36125,(1));
var v = cljs.core.nth.call(null,ocr_36125,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36193){if((e36193 instanceof Error)){
var e__35167__auto____$7 = e36193;
if((e__35167__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$7;
}
} else {
throw e36193;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36192){if((e36192 instanceof Error)){
var e__35167__auto____$7 = e36192;
if((e__35167__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$7;
}
} else {
throw e36192;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36172){if((e36172 instanceof Error)){
var e__35167__auto____$7 = e36172;
if((e__35167__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_36126_2__36162 = cljs.core.nth.call(null,ocr_36126,(2));
if((ocr_36126_2__36162 === true)){
try{var ocr_36126_1__36161 = cljs.core.nth.call(null,ocr_36126,(1));
if((ocr_36126_1__36161 === false)){
try{var ocr_36125_0__36151 = cljs.core.nth.call(null,ocr_36125,(0));
if(cljs.core._EQ_.call(null,ocr_36125_0__36151,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_36125,(1));
var v = cljs.core.nth.call(null,ocr_36125,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36191){if((e36191 instanceof Error)){
var e__35167__auto____$8 = e36191;
if((e__35167__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$8;
}
} else {
throw e36191;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36185){if((e36185 instanceof Error)){
var e__35167__auto____$8 = e36185;
if((e__35167__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_36126_1__36161 = cljs.core.nth.call(null,ocr_36126,(1));
if((ocr_36126_1__36161 === true)){
try{var ocr_36126_0__36160 = cljs.core.nth.call(null,ocr_36126,(0));
if((ocr_36126_0__36160 === true)){
var e = cljs.core.nth.call(null,ocr_36125,(0));
var a = cljs.core.nth.call(null,ocr_36125,(1));
var v = cljs.core.nth.call(null,ocr_36125,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36189){if((e36189 instanceof Error)){
var e__35167__auto____$9 = e36189;
if((e__35167__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_36126_0__36160 = cljs.core.nth.call(null,ocr_36126,(0));
if((ocr_36126_0__36160 === false)){
var e = cljs.core.nth.call(null,ocr_36125,(0));
var a = cljs.core.nth.call(null,ocr_36125,(1));
var v = cljs.core.nth.call(null,ocr_36125,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36190){if((e36190 instanceof Error)){
var e__35167__auto____$10 = e36190;
if((e__35167__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$10;
}
} else {
throw e36190;

}
}} else {
throw e__35167__auto____$9;
}
} else {
throw e36189;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36186){if((e36186 instanceof Error)){
var e__35167__auto____$9 = e36186;
if((e__35167__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_36126_1__36161 = cljs.core.nth.call(null,ocr_36126,(1));
if((ocr_36126_1__36161 === false)){
try{var ocr_36126_0__36160 = cljs.core.nth.call(null,ocr_36126,(0));
if((ocr_36126_0__36160 === true)){
var e = cljs.core.nth.call(null,ocr_36125,(0));
var a = cljs.core.nth.call(null,ocr_36125,(1));
var v = cljs.core.nth.call(null,ocr_36125,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36188){if((e36188 instanceof Error)){
var e__35167__auto____$10 = e36188;
if((e__35167__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$10;
}
} else {
throw e36188;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36187){if((e36187 instanceof Error)){
var e__35167__auto____$10 = e36187;
if((e__35167__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$10;
}
} else {
throw e36187;

}
}} else {
throw e__35167__auto____$9;
}
} else {
throw e36186;

}
}} else {
throw e__35167__auto____$8;
}
} else {
throw e36185;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36173){if((e36173 instanceof Error)){
var e__35167__auto____$8 = e36173;
if((e__35167__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_36126_2__36162 = cljs.core.nth.call(null,ocr_36126,(2));
if((ocr_36126_2__36162 === false)){
try{var ocr_36126_0__36160 = cljs.core.nth.call(null,ocr_36126,(0));
if((ocr_36126_0__36160 === true)){
try{var ocr_36126_1__36161 = cljs.core.nth.call(null,ocr_36126,(1));
if((ocr_36126_1__36161 === true)){
var e = cljs.core.nth.call(null,ocr_36125,(0));
var a = cljs.core.nth.call(null,ocr_36125,(1));
var v = cljs.core.nth.call(null,ocr_36125,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36184){if((e36184 instanceof Error)){
var e__35167__auto____$9 = e36184;
if((e__35167__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$9;
}
} else {
throw e36184;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36183){if((e36183 instanceof Error)){
var e__35167__auto____$9 = e36183;
if((e__35167__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$9;
}
} else {
throw e36183;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36174){if((e36174 instanceof Error)){
var e__35167__auto____$9 = e36174;
if((e__35167__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_36126_2__36162 = cljs.core.nth.call(null,ocr_36126,(2));
if((ocr_36126_2__36162 === true)){
try{var ocr_36126_0__36160 = cljs.core.nth.call(null,ocr_36126,(0));
if((ocr_36126_0__36160 === false)){
try{var ocr_36126_1__36161 = cljs.core.nth.call(null,ocr_36126,(1));
if((ocr_36126_1__36161 === false)){
var e = cljs.core.nth.call(null,ocr_36125,(0));
var a = cljs.core.nth.call(null,ocr_36125,(1));
var v = cljs.core.nth.call(null,ocr_36125,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36182){if((e36182 instanceof Error)){
var e__35167__auto____$10 = e36182;
if((e__35167__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$10;
}
} else {
throw e36182;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36181){if((e36181 instanceof Error)){
var e__35167__auto____$10 = e36181;
if((e__35167__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$10;
}
} else {
throw e36181;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36175){if((e36175 instanceof Error)){
var e__35167__auto____$10 = e36175;
if((e__35167__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_36126_2__36162 = cljs.core.nth.call(null,ocr_36126,(2));
if((ocr_36126_2__36162 === false)){
try{var ocr_36126_0__36160 = cljs.core.nth.call(null,ocr_36126,(0));
if((ocr_36126_0__36160 === true)){
try{var ocr_36126_1__36161 = cljs.core.nth.call(null,ocr_36126,(1));
if((ocr_36126_1__36161 === false)){
var e = cljs.core.nth.call(null,ocr_36125,(0));
var a = cljs.core.nth.call(null,ocr_36125,(1));
var v = cljs.core.nth.call(null,ocr_36125,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36180){if((e36180 instanceof Error)){
var e__35167__auto____$11 = e36180;
if((e__35167__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$11;
}
} else {
throw e36180;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36177){if((e36177 instanceof Error)){
var e__35167__auto____$11 = e36177;
if((e__35167__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_36126_0__36160 = cljs.core.nth.call(null,ocr_36126,(0));
if((ocr_36126_0__36160 === false)){
try{var ocr_36126_1__36161 = cljs.core.nth.call(null,ocr_36126,(1));
if((ocr_36126_1__36161 === true)){
var e = cljs.core.nth.call(null,ocr_36125,(0));
var a = cljs.core.nth.call(null,ocr_36125,(1));
var v = cljs.core.nth.call(null,ocr_36125,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36179){if((e36179 instanceof Error)){
var e__35167__auto____$12 = e36179;
if((e__35167__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$12;
}
} else {
throw e36179;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36178){if((e36178 instanceof Error)){
var e__35167__auto____$12 = e36178;
if((e__35167__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$12;
}
} else {
throw e36178;

}
}} else {
throw e__35167__auto____$11;
}
} else {
throw e36177;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36176){if((e36176 instanceof Error)){
var e__35167__auto____$11 = e36176;
if((e__35167__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$11;
}
} else {
throw e36176;

}
}} else {
throw e__35167__auto____$10;
}
} else {
throw e36175;

}
}} else {
throw e__35167__auto____$9;
}
} else {
throw e36174;

}
}} else {
throw e__35167__auto____$8;
}
} else {
throw e36173;

}
}} else {
throw e__35167__auto____$7;
}
} else {
throw e36172;

}
}} else {
throw e__35167__auto____$6;
}
} else {
throw e36171;

}
}} else {
throw e__35167__auto____$5;
}
} else {
throw e36170;

}
}} else {
throw e__35167__auto____$4;
}
} else {
throw e36169;

}
}} else {
throw e__35167__auto____$3;
}
} else {
throw e36168;

}
}} else {
throw e__35167__auto____$2;
}
} else {
throw e36167;

}
}} else {
throw e__35167__auto____$1;
}
} else {
throw e36166;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36165){if((e36165 instanceof Error)){
var e__35167__auto____$1 = e36165;
if((e__35167__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__35167__auto____$1;
}
} else {
throw e36165;

}
}} else {
throw e__35167__auto__;
}
} else {
throw e36164;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36163){if((e36163 instanceof Error)){
var e__35167__auto__ = e36163;
if((e__35167__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__35167__auto__;
}
} else {
throw e36163;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__36220){
var vec__36221 = p__36220;
var k = cljs.core.nth.call(null,vec__36221,(0),null);
var v = cljs.core.nth.call(null,vec__36221,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,k)),cljs.core.mapcat.call(null,((function (vec__36221,k,v){
return (function (p1__36219_SHARP_){
return posh.lib.q_analyze.pattern_from_eav.call(null,vars,cljs.core.rest.call(null,p1__36219_SHARP_));
});})(vec__36221,k,v))
,v)]);
}),cljs.core.group_by.call(null,cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__36225){
var vec__36226 = p__36225;
var k = cljs.core.nth.call(null,vec__36226,(0),null);
var v = cljs.core.nth.call(null,vec__36226,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,k)),cljs.core.mapcat.call(null,((function (vec__36226,k,v){
return (function (p1__36224_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav.call(null,vars,cljs.core.rest.call(null,p1__36224_SHARP_));
});})(vec__36226,k,v))
,v)]);
}),cljs.core.group_by.call(null,cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_.call(null,ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,((((cljs.core.first.call(null,ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,ins))].join('')),"$")))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ins),cljs.core.first.call(null,args)])),posh.lib.q_analyze.just_qvars.call(null,cljs.core.rest.call(null,ins),cljs.core.rest.call(null,args)));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(ins,args){
var varmap = posh.lib.q_analyze.just_qvars.call(null,ins,args);
if(!(cljs.core.empty_QMARK_.call(null,varmap))){
var qvars = cljs.core.vec.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.keys.call(null,varmap)));
var varvals = cljs.core.apply.call(null,cljs.core.partial.call(null,datascript.core.q,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys.call(null,varmap)], null)),cljs.core.vals.call(null,varmap));
var varsets = cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap.call(null,qvars,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.call(null,((function (qvars,varvals,varmap){
return (function (p1__36229_SHARP_){
return cljs.core.zipmap.call(null,qvars,p1__36229_SHARP_);
});})(qvars,varvals,varmap))
,varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return (cljs.core.coll_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,x)));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.truth_(posh.lib.q_analyze.pull_pattern_QMARK_.call(null,x))){
return cljs.core.second.call(null,x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_.call(null,qfind)){
if(cljs.core.empty_QMARK_.call(null,qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(posh.lib.q_analyze.pull_pattern_QMARK_.call(null,qfind))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,qfind),cljs.core.nth.call(null,qfind,(2))]);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_.call(null,dbeavs)){
return null;
} else {
var vec__36230 = cljs.core.first.call(null,dbeavs);
var db = cljs.core.nth.call(null,vec__36230,(0),null);
var e = cljs.core.nth.call(null,vec__36230,(1),null);
var a = cljs.core.nth.call(null,vec__36230,(2),null);
var v = cljs.core.nth.call(null,vec__36230,(3),null);
if(cljs.core.truth_((function (){var or__28286__auto__ = cljs.core._EQ_.call(null,var$,e);
if(or__28286__auto__){
return or__28286__auto__;
} else {
var and__28274__auto__ = cljs.core._EQ_.call(null,var$,v);
if(and__28274__auto__){
return posh.lib.pull_analyze.ref_QMARK_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,db)),a);
} else {
return and__28274__auto__;
}
}
})())){
return dbvarmap.call(null,db);
} else {
var G__36233 = var$;
var G__36234 = dbvarmap;
var G__36235 = cljs.core.rest.call(null,dbeavs);
var$ = G__36233;
dbvarmap = G__36234;
dbeavs = G__36235;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_.call(null,vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,vars),posh.lib.q_analyze.match_var_to_db.call(null,cljs.core.first.call(null,vars),dbvarmap,dbeavs)]),posh.lib.q_analyze.match_vars_to_dbs.call(null,cljs.core.rest.call(null,vars),dbvarmap,dbeavs));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_.call(null,xs__$1)){
return null;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__$1),x)){
return n;
} else {
var G__36236 = (n + (1));
var G__36237 = cljs.core.rest.call(null,xs__$1);
n = G__36236;
xs__$1 = G__36237;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
var and__28274__auto__ = cljs.core.map_QMARK_.call(null,arg);
if(and__28274__auto__){
var and__28274__auto____$1 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__28274__auto____$1)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__28274__auto____$1;
}
} else {
return and__28274__auto__;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.call(null,(function (p1__36238_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_.call(null,p1__36238_SHARP_))){
return type.call(null,p1__36238_SHARP_);
} else {
return p1__36238_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_.call(null,ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,(cljs.core.truth_(posh.lib.q_analyze.dbvar_QMARK_.call(null,cljs.core.first.call(null,ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ins),cljs.core.first.call(null,args)]):null),posh.lib.q_analyze.make_dbarg_map.call(null,cljs.core.rest.call(null,ins),cljs.core.rest.call(null,args)));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__36239){
var vec__36240 = p__36239;
var db_sym = cljs.core.nth.call(null,vec__36240,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__36240,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by.call(null,cljs.core.first,datoms)));
});
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,input_set){
return cljs.core.set.call(null,(function (){var iter__29094__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__36243(s__36244){
return (new cljs.core.LazySeq(null,(function (){
var s__36244__$1 = s__36244;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36244__$1);
if(temp__4657__auto__){
var s__36244__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36244__$2)){
var c__29092__auto__ = cljs.core.chunk_first.call(null,s__36244__$2);
var size__29093__auto__ = cljs.core.count.call(null,c__29092__auto__);
var b__36246 = cljs.core.chunk_buffer.call(null,size__29093__auto__);
if((function (){var i__36245 = (0);
while(true){
if((i__36245 < size__29093__auto__)){
var x = cljs.core._nth.call(null,c__29092__auto__,i__36245);
cljs.core.chunk_append.call(null,b__36246,((cljs.core.coll_QMARK_.call(null,x))?entid_fn.call(null,db,x):x));

var G__36247 = (i__36245 + (1));
i__36245 = G__36247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36246),posh$lib$q_analyze$resolve_any_idents_$_iter__36243.call(null,cljs.core.chunk_rest.call(null,s__36244__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36246),null);
}
} else {
var x = cljs.core.first.call(null,s__36244__$2);
return cljs.core.cons.call(null,((cljs.core.coll_QMARK_.call(null,x))?entid_fn.call(null,db,x):x),posh$lib$q_analyze$resolve_any_idents_$_iter__36243.call(null,cljs.core.rest.call(null,s__36244__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29094__auto__.call(null,input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map.call(null,query));
var where = posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs.call(null,where);
var vars = cljs.core.vec.call(null,posh.lib.q_analyze.get_all_vars.call(null,eavs));
var newqm = cljs.core.merge.call(null,qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.call(null,((function (qm,where,eavs,vars,newqm,dbvarmap){
return (function (p__36253){
var vec__36254 = p__36253;
var sym = cljs.core.nth.call(null,vec__36254,(0),null);
var arg = cljs.core.nth.call(null,vec__36254,(1),null);
var or__28286__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,sym));
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return arg;
}
});})(qm,where,eavs,vars,newqm,dbvarmap))
,cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.call(null,cljs.core.partial.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.call(null,((function (qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r){
return (function (p__36257){
var vec__36258 = p__36257;
var a = cljs.core.nth.call(null,vec__36258,(0),null);
var v = cljs.core.nth.call(null,vec__36258,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
});})(qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r))
,cljs.core.filter.call(null,cljs.core.every_pred.call(null,cljs.core.vector_QMARK_,cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms.call(null,posh.lib.q_analyze.create_q_datoms.call(null,r,eavs,vars));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__36261){
var vec__36262 = p__36261;
var db_sym = cljs.core.nth.call(null,vec__36262,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__36262,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,db_sym)),db_datoms]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__36265){
var vec__36266 = p__36265;
var db_sym = cljs.core.nth.call(null,vec__36266,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__36266,(1),null);
var db = dbvarmap.call(null,db_sym);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null));
})():null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),datascript.core.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null),cljs.core.vec.call(null,r))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.call(null,((function (in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__36269){
var vec__36270 = p__36269;
var seq__36271 = cljs.core.seq.call(null,vec__36270);
var first__36272 = cljs.core.first.call(null,seq__36271);
var seq__36271__$1 = cljs.core.next.call(null,seq__36271);
var db = first__36272;
var eav = seq__36271__$1;
return cljs.core.vec.call(null,cljs.core.cons.call(null,db,cljs.core.map.call(null,((function (vec__36270,seq__36271,first__36272,seq__36271__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__36250_SHARP_){
var temp__4655__auto__ = in_vars.call(null,p1__36250_SHARP_);
if(cljs.core.truth_(temp__4655__auto__)){
var v = temp__4655__auto__;
return posh.lib.q_analyze.resolve_any_idents.call(null,new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,db)),v);
} else {
return p1__36250_SHARP_;
}
});})(vec__36270,seq__36271,first__36272,seq__36271__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eav)));
});})(in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,cljs.core.concat.call(null,lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars.call(null,eavs_ins);
var linked_qvars = cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__36273){
var vec__36274 = p__36273;
var k = cljs.core.nth.call(null,vec__36274,(0),null);
var v = cljs.core.nth.call(null,vec__36274,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
});})(in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,qvar_count)));
var rvars = cljs.core.zipmap.call(null,vars,posh.lib.q_analyze.stack_vectors.call(null,r));
var prepped_eavs = clojure.walk.postwalk.call(null,((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__36251_SHARP_){
if(cljs.core.truth_((function (){var and__28274__auto__ = posh.lib.q_analyze.qvar_QMARK_.call(null,p1__36251_SHARP_);
if(cljs.core.truth_(and__28274__auto__)){
return cljs.core.not.call(null,linked_qvars.call(null,p1__36251_SHARP_));
} else {
return and__28274__auto__;
}
})())){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__36251_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins);
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs.call(null,dbvarmap,rvars,clojure.walk.postwalk.call(null,((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__36252_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,p1__36252_SHARP_))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__36252_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs.call(null,dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs.call(null,dbvarmap,rvars,prepped_eavs)], null):null));
})():null));
});

//# sourceMappingURL=q_analyze.js.map?rel=1517206658759
