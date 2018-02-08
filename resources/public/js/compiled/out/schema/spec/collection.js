// Compiled by ClojureScript 1.9.908 {}
goog.provide('schema.spec.collection');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.collection.element_transformer = (function schema$spec$collection$element_transformer(e,params,then){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(e);
var c = schema.spec.core.sub_checker.call(null,e,params);
return ((function (parser,c){
return (function (res,x){
return then.call(null,res,parser.call(null,((function (parser,c){
return (function (t){
return cljs.core.swap_BANG_.call(null,res,cljs.core.conj,(cljs.core.truth_(schema.utils.error_QMARK_.call(null,t))?t:c.call(null,t)));
});})(parser,c))
,x));
});
;})(parser,c))
});
schema.spec.collection.has_error_QMARK_ = (function schema$spec$collection$has_error_QMARK_(l){
return cljs.core.some.call(null,schema.utils.error_QMARK_,l);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
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
schema.spec.collection.CollectionSpec = (function (pre,constructor$,elements,on_error,__meta,__extmap,__hash){
this.pre = pre;
this.constructor$ = constructor$;
this.elements = elements;
this.on_error = on_error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37160__auto__,k__37161__auto__){
var self__ = this;
var this__37160__auto____$1 = this;
return this__37160__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__37161__auto__,null);
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37162__auto__,k38373,else__37163__auto__){
var self__ = this;
var this__37162__auto____$1 = this;
var G__38377 = k38373;
var G__38377__$1 = (((G__38377 instanceof cljs.core.Keyword))?G__38377.fqn:null);
switch (G__38377__$1) {
case "pre":
return self__.pre;

break;
case "constructor":
return self__.constructor$;

break;
case "elements":
return self__.elements;

break;
case "on-error":
return self__.on_error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k38373,else__37163__auto__);

}
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.elements);
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var constructor$__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"return-walked?","return-walked?",-1684646015).cljs$core$IFn$_invoke$arity$1(params))?self__.constructor$:((function (this$__$1){
return (function (_){
return null;
});})(this$__$1))
);
var t = cljs.core.reduce.call(null,((function (constructor$__$1,this$__$1){
return (function (f,e){
return schema.spec.collection.element_transformer.call(null,e,params,f);
});})(constructor$__$1,this$__$1))
,((function (constructor$__$1,this$__$1){
return (function (_,x){
return x;
});})(constructor$__$1,this$__$1))
,cljs.core.reverse.call(null,self__.elements));
return ((function (constructor$__$1,t,this$__$1){
return (function (x){
var or__36520__auto__ = self__.pre.call(null,x);
if(cljs.core.truth_(or__36520__auto__)){
return or__36520__auto__;
} else {
var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var remaining = t.call(null,res,x);
var res__$1 = cljs.core.deref.call(null,res);
if(cljs.core.truth_((function (){var or__36520__auto____$1 = cljs.core.seq.call(null,remaining);
if(or__36520__auto____$1){
return or__36520__auto____$1;
} else {
return schema.spec.collection.has_error_QMARK_.call(null,res__$1);
}
})())){
return schema.utils.error.call(null,self__.on_error.call(null,x,res__$1,remaining));
} else {
return constructor$__$1.call(null,res__$1);
}
}
});
;})(constructor$__$1,t,this$__$1))
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37174__auto__,writer__37175__auto__,opts__37176__auto__){
var self__ = this;
var this__37174__auto____$1 = this;
var pr_pair__37177__auto__ = ((function (this__37174__auto____$1){
return (function (keyval__37178__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37175__auto__,cljs.core.pr_writer,""," ","",opts__37176__auto__,keyval__37178__auto__);
});})(this__37174__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37175__auto__,pr_pair__37177__auto__,"#schema.spec.collection.CollectionSpec{",", ","}",opts__37176__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"constructor","constructor",-1953928811),self__.constructor$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38372){
var self__ = this;
var G__38372__$1 = this;
return (new cljs.core.RecordIter((0),G__38372__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37158__auto__){
var self__ = this;
var this__37158__auto____$1 = this;
return self__.__meta;
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37155__auto__){
var self__ = this;
var this__37155__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37164__auto__){
var self__ = this;
var this__37164__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37156__auto__){
var self__ = this;
var this__37156__auto____$1 = this;
var h__36974__auto__ = self__.__hash;
if(!((h__36974__auto__ == null))){
return h__36974__auto__;
} else {
var h__36974__auto____$1 = ((function (h__36974__auto__,this__37156__auto____$1){
return (function (coll__37157__auto__){
return (1800698765 ^ cljs.core.hash_unordered_coll.call(null,coll__37157__auto__));
});})(h__36974__auto__,this__37156__auto____$1))
.call(null,this__37156__auto____$1);
self__.__hash = h__36974__auto____$1;

return h__36974__auto____$1;
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38374,other38375){
var self__ = this;
var this38374__$1 = this;
return (!((other38375 == null))) && ((this38374__$1.constructor === other38375.constructor)) && (cljs.core._EQ_.call(null,this38374__$1.pre,other38375.pre)) && (cljs.core._EQ_.call(null,this38374__$1.constructor,other38375.constructor)) && (cljs.core._EQ_.call(null,this38374__$1.elements,other38375.elements)) && (cljs.core._EQ_.call(null,this38374__$1.on_error,other38375.on_error)) && (cljs.core._EQ_.call(null,this38374__$1.__extmap,other38375.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37169__auto__,k__37170__auto__){
var self__ = this;
var this__37169__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"elements","elements",657646735),null,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),null], null), null),k__37170__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37169__auto____$1),self__.__meta),k__37170__auto__);
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37170__auto__)),null));
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37167__auto__,k__37168__auto__,G__38372){
var self__ = this;
var this__37167__auto____$1 = this;
var pred__38378 = cljs.core.keyword_identical_QMARK_;
var expr__38379 = k__37168__auto__;
if(cljs.core.truth_(pred__38378.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__38379))){
return (new schema.spec.collection.CollectionSpec(G__38372,self__.constructor$,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38378.call(null,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),expr__38379))){
return (new schema.spec.collection.CollectionSpec(self__.pre,G__38372,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38378.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__38379))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,G__38372,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38378.call(null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),expr__38379))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,G__38372,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37168__auto__,G__38372),null));
}
}
}
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37172__auto__){
var self__ = this;
var this__37172__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"constructor","constructor",-1953928811),self__.constructor$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37159__auto__,G__38372){
var self__ = this;
var this__37159__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,G__38372,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37165__auto__,entry__37166__auto__){
var self__ = this;
var this__37165__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37166__auto__)){
return this__37165__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__37166__auto__,(0)),cljs.core._nth.call(null,entry__37166__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37165__auto____$1,entry__37166__auto__);
}
});

schema.spec.collection.CollectionSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"constructor","constructor",-313397284,null),new cljs.core.Symbol(null,"elements","elements",-1996789034,null),new cljs.core.Symbol(null,"on-error","on-error",-925902239,null)], null);
});

schema.spec.collection.CollectionSpec.cljs$lang$type = true;

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrSeq = (function (this__37196__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrWriter = (function (this__37196__auto__,writer__37197__auto__){
return cljs.core._write.call(null,writer__37197__auto__,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.__GT_CollectionSpec = (function schema$spec$collection$__GT_CollectionSpec(pre,constructor$,elements,on_error){
return (new schema.spec.collection.CollectionSpec(pre,constructor$,elements,on_error,null,null,null));
});

schema.spec.collection.map__GT_CollectionSpec = (function schema$spec$collection$map__GT_CollectionSpec(G__38376){
return (new schema.spec.collection.CollectionSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__38376),new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(G__38376),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__38376),new cljs.core.Keyword(null,"on-error","on-error",1728533530).cljs$core$IFn$_invoke$arity$1(G__38376),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__38376,new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530))),null));
});

/**
 * A collection represents a collection of elements, each of which is itself
 * schematized.  At the top level, the collection has a precondition
 * (presumably on the overall type), a constructor for the collection from a
 * sequence of items, an element spec, and a function that constructs a
 * descriptive error on failure.
 * 
 * The element spec is a sequence of maps, each of which provides an element
 * schema, cardinality, parser (allowing for efficient processing of
 * structured collections), and optional error wrapper.
 */
schema.spec.collection.collection_spec = (function schema$spec$collection$collection_spec(pre,constructor$,elements,on_error){
return schema.spec.collection.__GT_CollectionSpec.call(null,pre,constructor$,elements,on_error);
});
schema.spec.collection.all_elements = (function schema$spec$collection$all_elements(schema__$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"cardinality","cardinality",-104971109),new cljs.core.Keyword(null,"zero-or-more","zero-or-more",-1629905900),new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (item_fn,coll){
var seq__38382_38386 = cljs.core.seq.call(null,coll);
var chunk__38383_38387 = null;
var count__38384_38388 = (0);
var i__38385_38389 = (0);
while(true){
if((i__38385_38389 < count__38384_38388)){
var x_38390 = cljs.core._nth.call(null,chunk__38383_38387,i__38385_38389);
item_fn.call(null,x_38390);

var G__38391 = seq__38382_38386;
var G__38392 = chunk__38383_38387;
var G__38393 = count__38384_38388;
var G__38394 = (i__38385_38389 + (1));
seq__38382_38386 = G__38391;
chunk__38383_38387 = G__38392;
count__38384_38388 = G__38393;
i__38385_38389 = G__38394;
continue;
} else {
var temp__4657__auto___38395 = cljs.core.seq.call(null,seq__38382_38386);
if(temp__4657__auto___38395){
var seq__38382_38396__$1 = temp__4657__auto___38395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38382_38396__$1)){
var c__37359__auto___38397 = cljs.core.chunk_first.call(null,seq__38382_38396__$1);
var G__38398 = cljs.core.chunk_rest.call(null,seq__38382_38396__$1);
var G__38399 = c__37359__auto___38397;
var G__38400 = cljs.core.count.call(null,c__37359__auto___38397);
var G__38401 = (0);
seq__38382_38386 = G__38398;
chunk__38383_38387 = G__38399;
count__38384_38388 = G__38400;
i__38385_38389 = G__38401;
continue;
} else {
var x_38402 = cljs.core.first.call(null,seq__38382_38396__$1);
item_fn.call(null,x_38402);

var G__38403 = cljs.core.next.call(null,seq__38382_38396__$1);
var G__38404 = null;
var G__38405 = (0);
var G__38406 = (0);
seq__38382_38386 = G__38403;
chunk__38383_38387 = G__38404;
count__38384_38388 = G__38405;
i__38385_38389 = G__38406;
continue;
}
} else {
}
}
break;
}

return null;
})], null);
});
schema.spec.collection.one_element = (function schema$spec$collection$one_element(required_QMARK_,schema__$1,parser){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"cardinality","cardinality",-104971109),(cljs.core.truth_(required_QMARK_)?new cljs.core.Keyword(null,"exactly-one","exactly-one",-294043587):new cljs.core.Keyword(null,"at-most-one","at-most-one",-1612772829)),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
});

//# sourceMappingURL=collection.js.map?rel=1517294164105
