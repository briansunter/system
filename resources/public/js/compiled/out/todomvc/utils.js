// Compiled by ClojureScript 1.9.908 {}
goog.provide('todomvc.utils');
goog.require('cljs.core');
todomvc.utils.not_blank_QMARK_ = (function todomvc$utils$not_blank_QMARK_(s){
return !(clojure.string.blank_QMARK_.call(null,s));
});
todomvc.utils.matches_search_QMARK_ = (function todomvc$utils$matches_search_QMARK_(s,sub){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(sub));
});
todomvc.utils.url_encode = (function todomvc$utils$url_encode(string){
var G__52955 = string;
var G__52955__$1 = (((G__52955 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52955)].join(''));
var G__52955__$2 = (((G__52955__$1 == null))?null:encodeURIComponent(G__52955__$1));
if((G__52955__$2 == null)){
return null;
} else {
return G__52955__$2.replace("+","%20");
}
});
todomvc.utils.map__GT_query = (function todomvc$utils$map__GT_query(m){
var G__52956 = cljs.core.seq.call(null,m);
var G__52956__$1 = (((G__52956 == null))?null:cljs.core.map.call(null,((function (G__52956){
return (function (p__52957){
var vec__52958 = p__52957;
var k = cljs.core.nth.call(null,vec__52958,(0),null);
var v = cljs.core.nth.call(null,vec__52958,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.utils.url_encode.call(null,cljs.core.name.call(null,k)),"=",todomvc.utils.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''))], null);
});})(G__52956))
,G__52956));
var G__52956__$2 = (((G__52956__$1 == null))?null:cljs.core.interpose.call(null,"&",G__52956__$1));
var G__52956__$3 = (((G__52956__$2 == null))?null:cljs.core.flatten.call(null,G__52956__$2));
if((G__52956__$3 == null)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.str,G__52956__$3);
}
});
/**
 * Parse URL parameters into a hashmap
 */
todomvc.utils.parse_path = (function todomvc$utils$parse_path(p){
var vec__52962 = clojure.string.split.call(null,p,/\?/);
var path = cljs.core.nth.call(null,vec__52962,(0),null);
var params = cljs.core.nth.call(null,vec__52962,(1),null);
var param_strs = clojure.string.split.call(null,params,/\&/);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__40654__auto__ = ((function (vec__52962,path,params,param_strs){
return (function todomvc$utils$parse_path_$_iter__52965(s__52966){
return (new cljs.core.LazySeq(null,((function (vec__52962,path,params,param_strs){
return (function (){
var s__52966__$1 = s__52966;
while(true){
var temp__6144__auto__ = cljs.core.seq.call(null,s__52966__$1);
if(temp__6144__auto__){
var s__52966__$2 = temp__6144__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52966__$2)){
var c__40652__auto__ = cljs.core.chunk_first.call(null,s__52966__$2);
var size__40653__auto__ = cljs.core.count.call(null,c__40652__auto__);
var b__52968 = cljs.core.chunk_buffer.call(null,size__40653__auto__);
if((function (){var i__52967 = (0);
while(true){
if((i__52967 < size__40653__auto__)){
var vec__52969 = cljs.core._nth.call(null,c__40652__auto__,i__52967);
var k = cljs.core.nth.call(null,vec__52969,(0),null);
var v = cljs.core.nth.call(null,vec__52969,(1),null);
cljs.core.chunk_append.call(null,b__52968,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null));

var G__52975 = (i__52967 + (1));
i__52967 = G__52975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52968),todomvc$utils$parse_path_$_iter__52965.call(null,cljs.core.chunk_rest.call(null,s__52966__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52968),null);
}
} else {
var vec__52972 = cljs.core.first.call(null,s__52966__$2);
var k = cljs.core.nth.call(null,vec__52972,(0),null);
var v = cljs.core.nth.call(null,vec__52972,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null),todomvc$utils$parse_path_$_iter__52965.call(null,cljs.core.rest.call(null,s__52966__$2)));
}
} else {
return null;
}
break;
}
});})(vec__52962,path,params,param_strs))
,null,null));
});})(vec__52962,path,params,param_strs))
;
return iter__40654__auto__.call(null,cljs.core.map.call(null,((function (iter__40654__auto__,vec__52962,path,params,param_strs){
return (function (p1__52961_SHARP_){
return clojure.string.split.call(null,p1__52961_SHARP_,/=/);
});})(iter__40654__auto__,vec__52962,path,params,param_strs))
,param_strs));
})()),new cljs.core.Keyword(null,"path","path",-188191168),path], null);
});

//# sourceMappingURL=utils.js.map?rel=1518071921540
