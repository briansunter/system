// Compiled by ClojureScript 1.9.908 {}
goog.provide('posh.core');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('posh.lib.q_analyze');
goog.require('posh.lib.update');
goog.require('posh.lib.db');
goog.require('posh.lib.graph');
posh.core.empty_tree = (function posh$core$empty_tree(p__36314,retrieve){
var map__36315 = p__36314;
var map__36315__$1 = ((((!((map__36315 == null)))?((((map__36315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36315):map__36315);
var dcfg = map__36315__$1;
var q = cljs.core.get.call(null,map__36315__$1,new cljs.core.Keyword(null,"q","q",689001697));
var pull = cljs.core.get.call(null,map__36315__$1,new cljs.core.Keyword(null,"pull","pull",-860544805));
var filter = cljs.core.get.call(null,map__36315__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var entid = cljs.core.get.call(null,map__36315__$1,new cljs.core.Keyword(null,"entid","entid",1720688982));
var db = cljs.core.get.call(null,map__36315__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"retrieve","retrieve",-657129560),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"dbs","dbs",1889628467),new cljs.core.Keyword(null,"schemas","schemas",575070579),new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"dcfg","dcfg",-880371016),new cljs.core.Keyword(null,"conns","conns",-1475268193)],[cljs.core.PersistentArrayMap.EMPTY,retrieve,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,dcfg,cljs.core.PersistentArrayMap.EMPTY]);
});
posh.core.add_db = (function posh$core$add_db(var_args){
var G__36318 = arguments.length;
switch (G__36318) {
case 4:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

posh.core.add_db.cljs$core$IFn$_invoke$arity$4 = (function (posh_tree,db_id,conn,schema){
return posh.core.add_db.call(null,posh_tree,db_id,conn,schema,null);
});

posh.core.add_db.cljs$core$IFn$_invoke$arity$5 = (function (p__36319,db_id,conn,schema,base_filters){
var map__36320 = p__36319;
var map__36320__$1 = ((((!((map__36320 == null)))?((((map__36320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36320):map__36320);
var posh_tree = map__36320__$1;
var dcfg = cljs.core.get.call(null,map__36320__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__36320__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var schemas = cljs.core.get.call(null,map__36320__$1,new cljs.core.Keyword(null,"schemas","schemas",575070579));
var dbs = cljs.core.get.call(null,map__36320__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var cache = cljs.core.get.call(null,map__36320__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__36320__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"conns","conns",-1475268193),cljs.core.assoc.call(null,conns,db_id,conn),new cljs.core.Keyword(null,"schemas","schemas",575070579),cljs.core.assoc.call(null,schemas,db_id,schema),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id,base_filters),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key,new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.call(null,dbs,db_id,posh.lib.db.generate_initial_db.call(null,dcfg,conn,base_filters)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.call(null,cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full.call(null,graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null));
});

posh.core.add_db.cljs$lang$maxFixedArity = 5;

posh.core.set_db = (function posh$core$set_db(var_args){
var G__36324 = arguments.length;
switch (G__36324) {
case 3:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

posh.core.set_db.cljs$core$IFn$_invoke$arity$3 = (function (posh_tree,db_id,db){
return posh.core.set_db.call(null,posh_tree,db_id,db,null);
});

posh.core.set_db.cljs$core$IFn$_invoke$arity$4 = (function (p__36325,db_id,db,filter_pred){
var map__36326 = p__36325;
var map__36326__$1 = ((((!((map__36326 == null)))?((((map__36326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36326):map__36326);
var posh_tree = map__36326__$1;
var dbs = cljs.core.get.call(null,map__36326__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var graph = cljs.core.get.call(null,map__36326__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__36326__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.call(null,dbs,db_id,db),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.call(null,cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full.call(null,graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null));
});

posh.core.set_db.cljs$lang$maxFixedArity = 4;

posh.core.add_filter_tx = (function posh$core$add_filter_tx(p__36329,poshdb,tx_patterns){
var map__36330 = p__36329;
var map__36330__$1 = ((((!((map__36330 == null)))?((((map__36330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36330):map__36330);
var posh_tree = map__36330__$1;
var cache = cljs.core.get.call(null,map__36330__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__36330__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tx","filter-tx",-1870604812),poshdb,tx_patterns], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),tx_patterns], null))], null))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_pull = (function posh$core$add_filter_pull(p__36332,poshdb,pull_pattern,eid){
var map__36333 = p__36332;
var map__36333__$1 = ((((!((map__36333 == null)))?((((map__36333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36333):map__36333);
var posh_tree = map__36333__$1;
var cache = cljs.core.get.call(null,map__36333__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__36333__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.call(null,map__36333__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__36333__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__36333__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-pull","filter-pull",-32246001),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,posh.lib.update.update_filter_pull.call(null,posh_tree,storage_key))], null))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_q = (function posh$core$add_filter_q(var_args){
var args__29462__auto__ = [];
var len__29455__auto___36343 = arguments.length;
var i__29456__auto___36344 = (0);
while(true){
if((i__29456__auto___36344 < len__29455__auto___36343)){
args__29462__auto__.push((arguments[i__29456__auto___36344]));

var G__36345 = (i__29456__auto___36344 + (1));
i__29456__auto___36344 = G__36345;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((2) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((2)),(0),null)):null);
return posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29463__auto__);
});

posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__36338,query,args){
var map__36339 = p__36338;
var map__36339__$1 = ((((!((map__36339 == null)))?((((map__36339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36339):map__36339);
var posh_tree = map__36339__$1;
var graph = cljs.core.get.call(null,map__36339__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__36339__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.call(null,map__36339__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.call(null,map__36339__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var conns = cljs.core.get.call(null,map__36339__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__36339__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-q","filter-q",538431954),query,args], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:(function (){var map__36341 = posh.lib.update.update_q_with_dbvarmap.call(null,posh_tree,storage_key);
var map__36341__$1 = ((((!((map__36341 == null)))?((((map__36341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36341):map__36341);
var analysis = cljs.core.get.call(null,map__36341__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.call(null,map__36341__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,cljs.core.vals.call(null,dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,posh.lib.update.filter_q_transform_analysis.call(null,analysis))], null));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});

posh.core.add_filter_q.cljs$lang$maxFixedArity = (2);

posh.core.add_filter_q.cljs$lang$applyTo = (function (seq36335){
var G__36336 = cljs.core.first.call(null,seq36335);
var seq36335__$1 = cljs.core.next.call(null,seq36335);
var G__36337 = cljs.core.first.call(null,seq36335__$1);
var seq36335__$2 = cljs.core.next.call(null,seq36335__$1);
return posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic(G__36336,G__36337,seq36335__$2);
});

posh.core.add_pull = (function posh$core$add_pull(p__36346,poshdb,pull_pattern,eid){
var map__36347 = p__36346;
var map__36347__$1 = ((((!((map__36347 == null)))?((((map__36347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36347):map__36347);
var posh_tree = map__36347__$1;
var graph = cljs.core.get.call(null,map__36347__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__36347__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.call(null,map__36347__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__36347__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__36347__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.call(null,map__36347__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull.call(null,posh_tree,storage_key));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,analysis)], null));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_q = (function posh$core$add_q(var_args){
var args__29462__auto__ = [];
var len__29455__auto___36357 = arguments.length;
var i__29456__auto___36358 = (0);
while(true){
if((i__29456__auto___36358 < len__29455__auto___36357)){
args__29462__auto__.push((arguments[i__29456__auto___36358]));

var G__36359 = (i__29456__auto___36358 + (1));
i__29456__auto___36358 = G__36359;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((2) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((2)),(0),null)):null);
return posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29463__auto__);
});

posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__36352,query,args){
var map__36353 = p__36352;
var map__36353__$1 = ((((!((map__36353 == null)))?((((map__36353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36353):map__36353);
var posh_tree = map__36353__$1;
var cache = cljs.core.get.call(null,map__36353__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__36353__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.call(null,map__36353__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__36353__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var retrieve = cljs.core.get.call(null,map__36353__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,args], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(function (){var or__28286__auto__ = cached;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var map__36355 = posh.lib.update.update_q_with_dbvarmap.call(null,posh_tree,storage_key);
var map__36355__$1 = ((((!((map__36355 == null)))?((((map__36355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36355):map__36355);
var analysis = cljs.core.get.call(null,map__36355__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.call(null,map__36355__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,cljs.core.vals.call(null,dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,analysis)], null));
}
})(),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});

posh.core.add_q.cljs$lang$maxFixedArity = (2);

posh.core.add_q.cljs$lang$applyTo = (function (seq36349){
var G__36350 = cljs.core.first.call(null,seq36349);
var seq36349__$1 = cljs.core.next.call(null,seq36349);
var G__36351 = cljs.core.first.call(null,seq36349__$1);
var seq36349__$2 = cljs.core.next.call(null,seq36349__$1);
return posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic(G__36350,G__36351,seq36349__$2);
});

posh.core.remove_item = (function posh$core$remove_item(p__36360,storage_key){
var map__36361 = p__36360;
var map__36361__$1 = ((((!((map__36361 == null)))?((((map__36361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36361):map__36361);
var posh_tree = map__36361__$1;
var graph = cljs.core.get.call(null,map__36361__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__36361__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
return cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.remove_item.call(null,graph,storage_key),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.dissoc.call(null,cache,storage_key));
});
posh.core.cache_changes = (function posh$core$cache_changes(p__36363,db_id,tx,new_cache,storage_key){
var map__36364 = p__36363;
var map__36364__$1 = ((((!((map__36364 == null)))?((((map__36364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36364):map__36364);
var posh_tree = map__36364__$1;
var graph = cljs.core.get.call(null,map__36364__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__36364__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
if(cljs.core.truth_(cljs.core.get.call(null,new_cache,storage_key))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var current_analysis = cljs.core.get.call(null,cache,storage_key);
var reloaded = (cljs.core.truth_(posh.lib.datom_matcher.any_datoms_match_QMARK_.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666).cljs$core$IFn$_invoke$arity$1(current_analysis),db_id),tx))?new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860).cljs$core$IFn$_invoke$arity$1(current_analysis).call(null,posh_tree,storage_key):null);
var analysis = (function (){var or__28286__auto__ = reloaded;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return current_analysis;
}
})();
var map__36366 = cljs.core.get.call(null,graph,storage_key);
var map__36366__$1 = ((((!((map__36366 == null)))?((((map__36366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36366):map__36366);
var outputs = cljs.core.get.call(null,map__36366__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
var children_cache = (function (){var temp__4657__auto__ = (function (){var and__28274__auto__ = !(cljs.core.empty_QMARK_.call(null,outputs));
if(and__28274__auto__){
var and__28274__auto____$1 = new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis);
if(cljs.core.truth_(and__28274__auto____$1)){
return posh.lib.datom_matcher.matching_datoms.call(null,new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis),tx);
} else {
return and__28274__auto____$1;
}
} else {
return and__28274__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var pass_tx = temp__4657__auto__;
return cljs.core.reduce.call(null,((function (pass_tx,temp__4657__auto__,current_analysis,reloaded,analysis,map__36366,map__36366__$1,outputs,map__36364,map__36364__$1,posh_tree,graph,cache){
return (function (acc,k){
return cljs.core.merge.call(null,acc,posh.core.cache_changes.call(null,posh_tree,db_id,pass_tx,acc,k));
});})(pass_tx,temp__4657__auto__,current_analysis,reloaded,analysis,map__36366,map__36366__$1,outputs,map__36364,map__36364__$1,posh_tree,graph,cache))
,new_cache,outputs);
} else {
return null;
}
})();
return cljs.core.merge.call(null,children_cache,(cljs.core.truth_(reloaded)?cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,reloaded]):null),cljs.core.PersistentArrayMap.EMPTY);
}
});
posh.core.merge_txs = (function posh$core$merge_txs(oldtx,newtx){
return cljs.core.concat.call(null,newtx,oldtx);
});
posh.core.add_tx = (function posh$core$add_tx(p__36368,poshdb,tx){
var map__36369 = p__36368;
var map__36369__$1 = ((((!((map__36369 == null)))?((((map__36369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36369):map__36369);
var posh_tree = map__36369__$1;
var txs = cljs.core.get.call(null,map__36369__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns = cljs.core.get.call(null,map__36369__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conn = cljs.core.get.call(null,conns,posh.lib.db.poshdb__GT_db_id.call(null,poshdb));
return cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.assoc.call(null,txs,conn,posh.core.merge_txs.call(null,cljs.core.get.call(null,txs,conn),tx)));
});
posh.core.group_db_ids_by_conn = (function posh$core$group_db_ids_by_conn(conns){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,cljs.core.map.call(null,cljs.core.first,v));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by.call(null,cljs.core.second,conns));
});
posh.core.after_transact = (function posh$core$after_transact(p__36371,conns_results){
var map__36372 = p__36371;
var map__36372__$1 = ((((!((map__36372 == null)))?((((map__36372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36372):map__36372);
var posh_tree = map__36372__$1;
var conns = cljs.core.get.call(null,map__36372__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var dcfg = cljs.core.get.call(null,map__36372__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var dbs = cljs.core.get.call(null,map__36372__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var filters = cljs.core.get.call(null,map__36372__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var cache = cljs.core.get.call(null,map__36372__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var new_dbs = cljs.core.apply.call(null,cljs.core.merge,(function (){var iter__29094__auto__ = ((function (map__36372,map__36372__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function posh$core$after_transact_$_iter__36374(s__36375){
return (new cljs.core.LazySeq(null,((function (map__36372,map__36372__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (){
var s__36375__$1 = s__36375;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36375__$1);
if(temp__4657__auto__){
var s__36375__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36375__$2)){
var c__29092__auto__ = cljs.core.chunk_first.call(null,s__36375__$2);
var size__29093__auto__ = cljs.core.count.call(null,c__29092__auto__);
var b__36377 = cljs.core.chunk_buffer.call(null,size__29093__auto__);
if((function (){var i__36376 = (0);
while(true){
if((i__36376 < size__29093__auto__)){
var vec__36378 = cljs.core._nth.call(null,c__29092__auto__,i__36376);
var db_id = cljs.core.nth.call(null,vec__36378,(0),null);
var conn = cljs.core.nth.call(null,vec__36378,(1),null);
cljs.core.chunk_append.call(null,b__36377,(cljs.core.truth_(cljs.core.get.call(null,conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.call(null,dcfg,conn,cljs.core.get.call(null,filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.call(null,dbs,db_id)])));

var G__36388 = (i__36376 + (1));
i__36376 = G__36388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36377),posh$core$after_transact_$_iter__36374.call(null,cljs.core.chunk_rest.call(null,s__36375__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36377),null);
}
} else {
var vec__36381 = cljs.core.first.call(null,s__36375__$2);
var db_id = cljs.core.nth.call(null,vec__36381,(0),null);
var conn = cljs.core.nth.call(null,vec__36381,(1),null);
return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.get.call(null,conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.call(null,dcfg,conn,cljs.core.get.call(null,filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.call(null,dbs,db_id)])),posh$core$after_transact_$_iter__36374.call(null,cljs.core.rest.call(null,s__36375__$2)));
}
} else {
return null;
}
break;
}
});})(map__36372,map__36372__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,null,null));
});})(map__36372,map__36372__$1,posh_tree,conns,dcfg,dbs,filters,cache))
;
return iter__29094__auto__.call(null,conns);
})());
var new_posh_tree = cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"dbs","dbs",1889628467),new_dbs);
var changed_cache = cljs.core.reduce.call(null,((function (new_dbs,new_posh_tree,map__36372,map__36372__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (changed,p__36384){
var vec__36385 = p__36384;
var db_id = cljs.core.nth.call(null,vec__36385,(0),null);
var conn = cljs.core.nth.call(null,vec__36385,(1),null);
return cljs.core.merge.call(null,changed,posh.core.cache_changes.call(null,new_posh_tree,db_id,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,conns_results,conn)),changed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null)));
});})(new_dbs,new_posh_tree,map__36372,map__36372__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,cljs.core.PersistentArrayMap.EMPTY,conns);
var really_changed = cljs.core.reduce_kv.call(null,((function (new_dbs,new_posh_tree,changed_cache,map__36372,map__36372__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (m,k,v){
if(cljs.core.not_EQ_.call(null,v,cljs.core.get.call(null,cache,k))){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
});})(new_dbs,new_posh_tree,changed_cache,map__36372,map__36372__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,cljs.core.PersistentArrayMap.EMPTY,changed_cache);
return cljs.core.merge.call(null,new_posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.call(null,cache,really_changed),new cljs.core.Keyword(null,"changed","changed",570724917),really_changed], null));
});
posh.core.process_tx_BANG_ = (function posh$core$process_tx_BANG_(p__36389){
var map__36390 = p__36389;
var map__36390__$1 = ((((!((map__36390 == null)))?((((map__36390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36390):map__36390);
var posh_tree = map__36390__$1;
var dcfg = cljs.core.get.call(null,map__36390__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var txs = cljs.core.get.call(null,map__36390__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns_results = cljs.core.reduce_kv.call(null,((function (map__36390,map__36390__$1,posh_tree,dcfg,txs){
return (function (m,conn,tx){
return cljs.core.assoc.call(null,m,conn,new cljs.core.Keyword(null,"transact!","transact!",-822725810).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,conn,tx));
});})(map__36390,map__36390__$1,posh_tree,dcfg,txs))
,cljs.core.PersistentArrayMap.EMPTY,txs);
return posh.core.after_transact.call(null,cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.PersistentArrayMap.EMPTY),conns_results);
});

//# sourceMappingURL=core.js.map?rel=1517206658988
