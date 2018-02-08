// Compiled by ClojureScript 1.9.908 {}
goog.provide('bidi_tools.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cemerick.url');
goog.require('bidi.bidi');
goog.require('clojure.walk');
goog.require('schema.core');
bidi_tools.core.default_query_params_schema = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.Any]);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
bidi_tools.core.QueryParam = (function (schema,reader,writer,__meta,__extmap,__hash){
this.schema = schema;
this.reader = reader;
this.writer = writer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
bidi_tools.core.QueryParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37160__auto__,k__37161__auto__){
var self__ = this;
var this__37160__auto____$1 = this;
return this__37160__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__37161__auto__,null);
});

bidi_tools.core.QueryParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37162__auto__,k45503,else__37163__auto__){
var self__ = this;
var this__37162__auto____$1 = this;
var G__45507 = k45503;
var G__45507__$1 = (((G__45507 instanceof cljs.core.Keyword))?G__45507.fqn:null);
switch (G__45507__$1) {
case "schema":
return self__.schema;

break;
case "reader":
return self__.reader;

break;
case "writer":
return self__.writer;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45503,else__37163__auto__);

}
});

bidi_tools.core.QueryParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37174__auto__,writer__37175__auto__,opts__37176__auto__){
var self__ = this;
var this__37174__auto____$1 = this;
var pr_pair__37177__auto__ = ((function (this__37174__auto____$1){
return (function (keyval__37178__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37175__auto__,cljs.core.pr_writer,""," ","",opts__37176__auto__,keyval__37178__auto__);
});})(this__37174__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37175__auto__,pr_pair__37177__auto__,"#bidi-tools.core.QueryParam{",", ","}",opts__37176__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reader","reader",169660853),self__.reader],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"writer","writer",-277568236),self__.writer],null))], null),self__.__extmap));
});

bidi_tools.core.QueryParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45502){
var self__ = this;
var G__45502__$1 = this;
return (new cljs.core.RecordIter((0),G__45502__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword(null,"writer","writer",-277568236)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

bidi_tools.core.QueryParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37158__auto__){
var self__ = this;
var this__37158__auto____$1 = this;
return self__.__meta;
});

bidi_tools.core.QueryParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37155__auto__){
var self__ = this;
var this__37155__auto____$1 = this;
return (new bidi_tools.core.QueryParam(self__.schema,self__.reader,self__.writer,self__.__meta,self__.__extmap,self__.__hash));
});

bidi_tools.core.QueryParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37164__auto__){
var self__ = this;
var this__37164__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

bidi_tools.core.QueryParam.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

bidi_tools.core.QueryParam.prototype.schema$core$Schema$spec$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return schema.core.spec.call(null,self__.schema);
});

bidi_tools.core.QueryParam.prototype.schema$core$Schema$explain$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return schema.core.explain.call(null,self__.schema);
});

bidi_tools.core.QueryParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37156__auto__){
var self__ = this;
var this__37156__auto____$1 = this;
var h__36974__auto__ = self__.__hash;
if(!((h__36974__auto__ == null))){
return h__36974__auto__;
} else {
var h__36974__auto____$1 = ((function (h__36974__auto__,this__37156__auto____$1){
return (function (coll__37157__auto__){
return (1478614536 ^ cljs.core.hash_unordered_coll.call(null,coll__37157__auto__));
});})(h__36974__auto__,this__37156__auto____$1))
.call(null,this__37156__auto____$1);
self__.__hash = h__36974__auto____$1;

return h__36974__auto____$1;
}
});

bidi_tools.core.QueryParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45504,other45505){
var self__ = this;
var this45504__$1 = this;
return (!((other45505 == null))) && ((this45504__$1.constructor === other45505.constructor)) && (cljs.core._EQ_.call(null,this45504__$1.schema,other45505.schema)) && (cljs.core._EQ_.call(null,this45504__$1.reader,other45505.reader)) && (cljs.core._EQ_.call(null,this45504__$1.writer,other45505.writer)) && (cljs.core._EQ_.call(null,this45504__$1.__extmap,other45505.__extmap));
});

bidi_tools.core.QueryParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37169__auto__,k__37170__auto__){
var self__ = this;
var this__37169__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"writer","writer",-277568236),null,new cljs.core.Keyword(null,"reader","reader",169660853),null], null), null),k__37170__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37169__auto____$1),self__.__meta),k__37170__auto__);
} else {
return (new bidi_tools.core.QueryParam(self__.schema,self__.reader,self__.writer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37170__auto__)),null));
}
});

bidi_tools.core.QueryParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37167__auto__,k__37168__auto__,G__45502){
var self__ = this;
var this__37167__auto____$1 = this;
var pred__45508 = cljs.core.keyword_identical_QMARK_;
var expr__45509 = k__37168__auto__;
if(cljs.core.truth_(pred__45508.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__45509))){
return (new bidi_tools.core.QueryParam(G__45502,self__.reader,self__.writer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45508.call(null,new cljs.core.Keyword(null,"reader","reader",169660853),expr__45509))){
return (new bidi_tools.core.QueryParam(self__.schema,G__45502,self__.writer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45508.call(null,new cljs.core.Keyword(null,"writer","writer",-277568236),expr__45509))){
return (new bidi_tools.core.QueryParam(self__.schema,self__.reader,G__45502,self__.__meta,self__.__extmap,null));
} else {
return (new bidi_tools.core.QueryParam(self__.schema,self__.reader,self__.writer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37168__auto__,G__45502),null));
}
}
}
});

bidi_tools.core.QueryParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37172__auto__){
var self__ = this;
var this__37172__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reader","reader",169660853),self__.reader],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"writer","writer",-277568236),self__.writer],null))], null),self__.__extmap));
});

bidi_tools.core.QueryParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37159__auto__,G__45502){
var self__ = this;
var this__37159__auto____$1 = this;
return (new bidi_tools.core.QueryParam(self__.schema,self__.reader,self__.writer,G__45502,self__.__extmap,self__.__hash));
});

bidi_tools.core.QueryParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37165__auto__,entry__37166__auto__){
var self__ = this;
var this__37165__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37166__auto__)){
return this__37165__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__37166__auto__,(0)),cljs.core._nth.call(null,entry__37166__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37165__auto____$1,entry__37166__auto__);
}
});

bidi_tools.core.QueryParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"reader","reader",1810192380,null),new cljs.core.Symbol(null,"writer","writer",1362963291,null)], null);
});

bidi_tools.core.QueryParam.cljs$lang$type = true;

bidi_tools.core.QueryParam.cljs$lang$ctorPrSeq = (function (this__37196__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"bidi-tools.core/QueryParam");
});

bidi_tools.core.QueryParam.cljs$lang$ctorPrWriter = (function (this__37196__auto__,writer__37197__auto__){
return cljs.core._write.call(null,writer__37197__auto__,"bidi-tools.core/QueryParam");
});

bidi_tools.core.__GT_QueryParam = (function bidi_tools$core$__GT_QueryParam(schema__$1,reader,writer){
return (new bidi_tools.core.QueryParam(schema__$1,reader,writer,null,null,null));
});

bidi_tools.core.map__GT_QueryParam = (function bidi_tools$core$map__GT_QueryParam(G__45506){
return (new bidi_tools.core.QueryParam(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__45506),new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(G__45506),new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(G__45506),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__45506,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword(null,"writer","writer",-277568236))),null));
});

bidi_tools.core.query_param = (function bidi_tools$core$query_param(schema__$1,reader,writer){
return (new bidi_tools.core.QueryParam(schema__$1,reader,writer,null,null,null));
});
bidi_tools.core.write_query_param = (function bidi_tools$core$write_query_param(schema__$1,p__45512){
var vec__45513 = p__45512;
var k = cljs.core.nth.call(null,vec__45513,(0),null);
var v = cljs.core.nth.call(null,vec__45513,(1),null);
var write_fn = (function (){var or__36520__auto__ = cljs.core.get_in.call(null,schema__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"writer","writer",-277568236)], null));
if(cljs.core.truth_(or__36520__auto__)){
return or__36520__auto__;
} else {
var or__36520__auto____$1 = cljs.core.get_in.call(null,schema__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.optional_key.call(null,k),new cljs.core.Keyword(null,"writer","writer",-277568236)], null));
if(cljs.core.truth_(or__36520__auto____$1)){
return or__36520__auto____$1;
} else {
return cljs.core.identity;
}
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,write_fn.call(null,v)], null);
});
bidi_tools.core.write_query_params = (function bidi_tools$core$write_query_params(params,schema__$1){
var params__$1 = schema.core.validate.call(null,schema__$1,params);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,bidi_tools.core.write_query_param,schema__$1)),params__$1);
});
bidi_tools.core.read_query_param = (function bidi_tools$core$read_query_param(schema__$1,p__45517){
var vec__45518 = p__45517;
var k = cljs.core.nth.call(null,vec__45518,(0),null);
var v = cljs.core.nth.call(null,vec__45518,(1),null);
var read_fn = (function (){var or__36520__auto__ = cljs.core.get_in.call(null,schema__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"reader","reader",169660853)], null));
if(cljs.core.truth_(or__36520__auto__)){
return or__36520__auto__;
} else {
var or__36520__auto____$1 = cljs.core.get_in.call(null,schema__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.optional_key.call(null,k),new cljs.core.Keyword(null,"reader","reader",169660853)], null));
if(cljs.core.truth_(or__36520__auto____$1)){
return or__36520__auto____$1;
} else {
return ((function (or__36520__auto____$1,or__36520__auto__,vec__45518,k,v){
return (function (p1__45516_SHARP_){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,p1__45516_SHARP_))){
return cljs.core.first.call(null,p1__45516_SHARP_);
} else {
return p1__45516_SHARP_;
}
});
;})(or__36520__auto____$1,or__36520__auto__,vec__45518,k,v))
}
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,read_fn.call(null,v)], null);
});
bidi_tools.core.read_query_params = (function bidi_tools$core$read_query_params(params,schema__$1){
var params__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,bidi_tools.core.read_query_param,schema__$1)),params);
return schema.core.validate.call(null,schema__$1,params__$1);
});
bidi_tools.core.query_string__GT_params = (function bidi_tools$core$query_string__GT_params(var_args){
var G__45522 = arguments.length;
switch (G__45522) {
case 1:
return bidi_tools.core.query_string__GT_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bidi_tools.core.query_string__GT_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bidi_tools.core.query_string__GT_params.cljs$core$IFn$_invoke$arity$1 = (function (q){
return bidi_tools.core.query_string__GT_params.call(null,q,bidi_tools.core.default_query_params_schema);
});

bidi_tools.core.query_string__GT_params.cljs$core$IFn$_invoke$arity$2 = (function (q,schema__$1){
var params = clojure.string.split.call(null,q,/&/);
var params_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,params);
if(cljs.core.truth_(temp__4655__auto__)){
var param = temp__4655__auto__;
var vec__45523 = clojure.string.split.call(null,param,/=/);
var k = cljs.core.nth.call(null,vec__45523,(0),null);
var v = cljs.core.nth.call(null,vec__45523,(1),null);
var G__45527 = cljs.core.rest.call(null,params);
var G__45528 = cljs.core.update_in.call(null,params_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k)], null),cljs.core.conj,v);
params = G__45527;
params_map = G__45528;
continue;
} else {
return bidi_tools.core.read_query_params.call(null,params_map,schema__$1);
}
break;
}
});

bidi_tools.core.query_string__GT_params.cljs$lang$maxFixedArity = 2;

bidi_tools.core.match_route_with_query = (function bidi_tools$core$match_route_with_query(var_args){
var args__37696__auto__ = [];
var len__37689__auto___45538 = arguments.length;
var i__37690__auto___45539 = (0);
while(true){
if((i__37690__auto___45539 < len__37689__auto___45538)){
args__37696__auto__.push((arguments[i__37690__auto___45539]));

var G__45540 = (i__37690__auto___45539 + (1));
i__37690__auto___45539 = G__45540;
continue;
} else {
}
break;
}

var argseq__37697__auto__ = ((((2) < args__37696__auto__.length))?(new cljs.core.IndexedSeq(args__37696__auto__.slice((2)),(0),null)):null);
return bidi_tools.core.match_route_with_query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37697__auto__);
});

bidi_tools.core.match_route_with_query.cljs$core$IFn$_invoke$arity$variadic = (function (routes,path,p__45532){
var map__45533 = p__45532;
var map__45533__$1 = ((((!((map__45533 == null)))?((((map__45533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45533):map__45533);
var query_params_schema = cljs.core.get.call(null,map__45533__$1,new cljs.core.Keyword(null,"query-params-schema","query-params-schema",1360756163));
var query_params_schema__$1 = (function (){var or__36520__auto__ = query_params_schema;
if(cljs.core.truth_(or__36520__auto__)){
return or__36520__auto__;
} else {
return bidi_tools.core.default_query_params_schema;
}
})();
var vec__45535 = clojure.string.split.call(null,path,/\?/);
var path__$1 = cljs.core.nth.call(null,vec__45535,(0),null);
var query = cljs.core.nth.call(null,vec__45535,(1),null);
var query_params = bidi_tools.core.query_string__GT_params.call(null,query,query_params_schema__$1);
return cljs.core.assoc.call(null,bidi.bidi.match_route.call(null,routes,path__$1),new cljs.core.Keyword(null,"query-params","query-params",900640534),query_params);
});

bidi_tools.core.match_route_with_query.cljs$lang$maxFixedArity = (2);

bidi_tools.core.match_route_with_query.cljs$lang$applyTo = (function (seq45529){
var G__45530 = cljs.core.first.call(null,seq45529);
var seq45529__$1 = cljs.core.next.call(null,seq45529);
var G__45531 = cljs.core.first.call(null,seq45529__$1);
var seq45529__$2 = cljs.core.next.call(null,seq45529__$1);
return bidi_tools.core.match_route_with_query.cljs$core$IFn$_invoke$arity$variadic(G__45530,G__45531,seq45529__$2);
});


/**
 * @interface
 */
bidi_tools.core.FormEncodeable = function(){};

bidi_tools.core.form_encode = (function bidi_tools$core$form_encode(x){
if((!((x == null))) && (!((x.bidi_tools$core$FormEncodeable$form_encode$arity$1 == null)))){
return x.bidi_tools$core$FormEncodeable$form_encode$arity$1(x);
} else {
var x__37203__auto__ = (((x == null))?null:x);
var m__37204__auto__ = (bidi_tools.core.form_encode[goog.typeOf(x__37203__auto__)]);
if(!((m__37204__auto__ == null))){
return m__37204__auto__.call(null,x);
} else {
var m__37204__auto____$1 = (bidi_tools.core.form_encode["_"]);
if(!((m__37204__auto____$1 == null))){
return m__37204__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"FormEncodeable.form-encode",x);
}
}
}
});

bidi_tools.core.encode_param = (function bidi_tools$core$encode_param(p__45541){
var vec__45542 = p__45541;
var k = cljs.core.nth.call(null,vec__45542,(0),null);
var v = cljs.core.nth.call(null,vec__45542,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bidi_tools.core.form_encode.call(null,v))].join('');
});
bidi_tools.core.build_query_string = (function bidi_tools$core$build_query_string(p__45546){
var vec__45547 = p__45546;
var k = cljs.core.nth.call(null,vec__45547,(0),null);
var v = cljs.core.nth.call(null,vec__45547,(1),null);
if((cljs.core.seq_QMARK_.call(null,v)) || (cljs.core.sequential_QMARK_.call(null,v))){
return cljs.core.map.call(null,((function (vec__45547,k,v){
return (function (p1__45545_SHARP_){
return bidi_tools.core.encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi_tools.core.form_encode.call(null,k),cemerick.url.url_decode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45545_SHARP_)].join(''))], null));
});})(vec__45547,k,v))
,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi_tools.core.encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bidi_tools.core.form_encode.call(null,k),cemerick.url.url_decode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''))], null))], null);
}
});
bidi_tools.core.map__GT_query_string = (function bidi_tools$core$map__GT_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.mapcat.call(null,bidi_tools.core.build_query_string,params));
});
goog.object.set(bidi_tools.core.FormEncodeable,"string",true);

goog.object.set(bidi_tools.core.form_encode,"string",(function (unencoded){
return cemerick.url.url_encode.call(null,unencoded);
}));

cljs.core.Keyword.prototype.bidi_tools$core$FormEncodeable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.bidi_tools$core$FormEncodeable$form_encode$arity$1 = (function (unencoded){
var unencoded__$1 = this;
return bidi_tools.core.form_encode.call(null,cljs.core.name.call(null,unencoded__$1));
});

cljs.core.PersistentTreeMap.prototype.bidi_tools$core$FormEncodeable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.bidi_tools$core$FormEncodeable$form_encode$arity$1 = (function (params){
var params__$1 = this;
return bidi_tools.core.map__GT_query_string.call(null,params__$1);
});

cljs.core.PersistentArrayMap.prototype.bidi_tools$core$FormEncodeable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.bidi_tools$core$FormEncodeable$form_encode$arity$1 = (function (params){
var params__$1 = this;
return bidi_tools.core.map__GT_query_string.call(null,params__$1);
});

goog.object.set(bidi_tools.core.FormEncodeable,"_",true);

goog.object.set(bidi_tools.core.form_encode,"_",(function (x){
return bidi_tools.core.form_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
}));
bidi_tools.core.get_query_params = (function bidi_tools$core$get_query_params(route,path,params){
var map__45550 = bidi.bidi.match_route.call(null,route,path);
var map__45550__$1 = ((((!((map__45550 == null)))?((((map__45550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45550):map__45550);
var route_params = cljs.core.get.call(null,map__45550__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var query_params_SINGLEQUOTE_ = cljs.core.apply.call(null,cljs.core.dissoc,params,cljs.core.keys.call(null,route_params));
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.filter.call(null,((function (map__45550,map__45550__$1,route_params,query_params_SINGLEQUOTE_){
return (function (p__45552){
var vec__45553 = p__45552;
var _ = cljs.core.nth.call(null,vec__45553,(0),null);
var v = cljs.core.nth.call(null,vec__45553,(1),null);
return !((v == null));
});})(map__45550,map__45550__$1,route_params,query_params_SINGLEQUOTE_))
),query_params_SINGLEQUOTE_));
});
/**
 * Like path-for, but extra parameters will be appended to the url as query parameters
 *   rather than silently ignored
 */
bidi_tools.core.path_with_query_for = (function bidi_tools$core$path_with_query_for(var_args){
var args__37696__auto__ = [];
var len__37689__auto___45563 = arguments.length;
var i__37690__auto___45564 = (0);
while(true){
if((i__37690__auto___45564 < len__37689__auto___45563)){
args__37696__auto__.push((arguments[i__37690__auto___45564]));

var G__45565 = (i__37690__auto___45564 + (1));
i__37690__auto___45564 = G__45565;
continue;
} else {
}
break;
}

var argseq__37697__auto__ = ((((3) < args__37696__auto__.length))?(new cljs.core.IndexedSeq(args__37696__auto__.slice((3)),(0),null)):null);
return bidi_tools.core.path_with_query_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37697__auto__);
});

bidi_tools.core.path_with_query_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,handler,query_params_schema,p__45560){
var map__45561 = p__45560;
var map__45561__$1 = ((((!((map__45561 == null)))?((((map__45561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45561):map__45561);
var all_params = map__45561__$1;
var path = cljs.core.apply.call(null,bidi.bidi.path_for,route,handler,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vec.call(null,all_params)));
var query_params = bidi_tools.core.get_query_params.call(null,route,path,all_params);
return cljs.core.apply.call(null,cljs.core.str,path,(cljs.core.truth_(query_params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?",bidi_tools.core.form_encode.call(null,bidi_tools.core.write_query_params.call(null,query_params,query_params_schema))], null):null));
});

bidi_tools.core.path_with_query_for.cljs$lang$maxFixedArity = (3);

bidi_tools.core.path_with_query_for.cljs$lang$applyTo = (function (seq45556){
var G__45557 = cljs.core.first.call(null,seq45556);
var seq45556__$1 = cljs.core.next.call(null,seq45556);
var G__45558 = cljs.core.first.call(null,seq45556__$1);
var seq45556__$2 = cljs.core.next.call(null,seq45556__$1);
var G__45559 = cljs.core.first.call(null,seq45556__$2);
var seq45556__$3 = cljs.core.next.call(null,seq45556__$2);
return bidi_tools.core.path_with_query_for.cljs$core$IFn$_invoke$arity$variadic(G__45557,G__45558,G__45559,seq45556__$3);
});

bidi_tools.core.url_for = (function bidi_tools$core$url_for(var_args){
var G__45567 = arguments.length;
switch (G__45567) {
case 3:
return bidi_tools.core.url_for.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return bidi_tools.core.url_for.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

bidi_tools.core.url_for.cljs$core$IFn$_invoke$arity$3 = (function (routes,handler,params){
return bidi_tools.core.url_for.call(null,routes,handler,params,bidi_tools.core.default_query_params_schema);
});

bidi_tools.core.url_for.cljs$core$IFn$_invoke$arity$4 = (function (routes,handler,params,query_params_schema){
return cljs.core.apply.call(null,bidi_tools.core.path_with_query_for,routes,handler,query_params_schema,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vec.call(null,params)));
});

bidi_tools.core.url_for.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
bidi_tools.core.IBidiIdentity = function(){};

bidi_tools.core.bidi_identity = (function bidi_tools$core$bidi_identity(this$){
if((!((this$ == null))) && (!((this$.bidi_tools$core$IBidiIdentity$bidi_identity$arity$1 == null)))){
return this$.bidi_tools$core$IBidiIdentity$bidi_identity$arity$1(this$);
} else {
var x__37203__auto__ = (((this$ == null))?null:this$);
var m__37204__auto__ = (bidi_tools.core.bidi_identity[goog.typeOf(x__37203__auto__)]);
if(!((m__37204__auto__ == null))){
return m__37204__auto__.call(null,this$);
} else {
var m__37204__auto____$1 = (bidi_tools.core.bidi_identity["_"]);
if(!((m__37204__auto____$1 == null))){
return m__37204__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IBidiIdentity.bidi-identity",this$);
}
}
}
});

goog.object.set(bidi_tools.core.IBidiIdentity,"function",true);

goog.object.set(bidi_tools.core.bidi_identity,"function",(function (this$){
var pred__45569 = cljs.core._EQ_;
var expr__45570 = this$;
if(cljs.core.truth_(pred__45569.call(null,cljs.core.keyword,expr__45570))){
return new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null);
} else {
if(cljs.core.truth_(pred__45569.call(null,cljs.core.long$,expr__45570))){
return new cljs.core.Symbol(null,"long","long",1469079434,null);
} else {
if(cljs.core.truth_(pred__45569.call(null,bidi.bidi.uuid,expr__45570))){
return new cljs.core.Symbol(null,"uuid","uuid",-504564192,null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__45570)].join('')));
}
}
}
}));

goog.object.set(bidi_tools.core.IBidiIdentity,"_",true);

goog.object.set(bidi_tools.core.bidi_identity,"_",(function (this$){
return this$;
}));
bidi_tools.core.pr_routes = (function bidi_tools$core$pr_routes(routes){
return clojure.walk.postwalk.call(null,bidi_tools.core.bidi_identity,routes);
});
bidi_tools.core.get_handler = (function bidi_tools$core$get_handler(route){
if(cljs.core.map_QMARK_.call(null,route)){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
if(cljs.core.map_QMARK_.call(null,v)){
return cljs.core.concat.call(null,m,cljs.core.flatten.call(null,bidi_tools.core.get_handler.call(null,v)));
} else {
return cljs.core.conj.call(null,m,v);
}
}),cljs.core.PersistentVector.EMPTY,route);
} else {
return null;
}
});
bidi_tools.core.get_handlers = (function bidi_tools$core$get_handlers(routes){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,bidi_tools.core.get_handler),cljs.core.filter.call(null,cljs.core.identity)),routes);
});

//# sourceMappingURL=core.js.map?rel=1517294170486
