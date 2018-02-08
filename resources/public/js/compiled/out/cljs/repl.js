// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42779){
var map__42780 = p__42779;
var map__42780__$1 = ((((!((map__42780 == null)))?((((map__42780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42780):map__42780);
var m = map__42780__$1;
var n = cljs.core.get.call(null,map__42780__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42780__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42782_42804 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42783_42805 = null;
var count__42784_42806 = (0);
var i__42785_42807 = (0);
while(true){
if((i__42785_42807 < count__42784_42806)){
var f_42808 = cljs.core._nth.call(null,chunk__42783_42805,i__42785_42807);
cljs.core.println.call(null,"  ",f_42808);

var G__42809 = seq__42782_42804;
var G__42810 = chunk__42783_42805;
var G__42811 = count__42784_42806;
var G__42812 = (i__42785_42807 + (1));
seq__42782_42804 = G__42809;
chunk__42783_42805 = G__42810;
count__42784_42806 = G__42811;
i__42785_42807 = G__42812;
continue;
} else {
var temp__4657__auto___42813 = cljs.core.seq.call(null,seq__42782_42804);
if(temp__4657__auto___42813){
var seq__42782_42814__$1 = temp__4657__auto___42813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42782_42814__$1)){
var c__29125__auto___42815 = cljs.core.chunk_first.call(null,seq__42782_42814__$1);
var G__42816 = cljs.core.chunk_rest.call(null,seq__42782_42814__$1);
var G__42817 = c__29125__auto___42815;
var G__42818 = cljs.core.count.call(null,c__29125__auto___42815);
var G__42819 = (0);
seq__42782_42804 = G__42816;
chunk__42783_42805 = G__42817;
count__42784_42806 = G__42818;
i__42785_42807 = G__42819;
continue;
} else {
var f_42820 = cljs.core.first.call(null,seq__42782_42814__$1);
cljs.core.println.call(null,"  ",f_42820);

var G__42821 = cljs.core.next.call(null,seq__42782_42814__$1);
var G__42822 = null;
var G__42823 = (0);
var G__42824 = (0);
seq__42782_42804 = G__42821;
chunk__42783_42805 = G__42822;
count__42784_42806 = G__42823;
i__42785_42807 = G__42824;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42825 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42825);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42825)))?cljs.core.second.call(null,arglists_42825):arglists_42825));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42786_42826 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42787_42827 = null;
var count__42788_42828 = (0);
var i__42789_42829 = (0);
while(true){
if((i__42789_42829 < count__42788_42828)){
var vec__42790_42830 = cljs.core._nth.call(null,chunk__42787_42827,i__42789_42829);
var name_42831 = cljs.core.nth.call(null,vec__42790_42830,(0),null);
var map__42793_42832 = cljs.core.nth.call(null,vec__42790_42830,(1),null);
var map__42793_42833__$1 = ((((!((map__42793_42832 == null)))?((((map__42793_42832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42793_42832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42793_42832):map__42793_42832);
var doc_42834 = cljs.core.get.call(null,map__42793_42833__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42835 = cljs.core.get.call(null,map__42793_42833__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42831);

cljs.core.println.call(null," ",arglists_42835);

if(cljs.core.truth_(doc_42834)){
cljs.core.println.call(null," ",doc_42834);
} else {
}

var G__42836 = seq__42786_42826;
var G__42837 = chunk__42787_42827;
var G__42838 = count__42788_42828;
var G__42839 = (i__42789_42829 + (1));
seq__42786_42826 = G__42836;
chunk__42787_42827 = G__42837;
count__42788_42828 = G__42838;
i__42789_42829 = G__42839;
continue;
} else {
var temp__4657__auto___42840 = cljs.core.seq.call(null,seq__42786_42826);
if(temp__4657__auto___42840){
var seq__42786_42841__$1 = temp__4657__auto___42840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42786_42841__$1)){
var c__29125__auto___42842 = cljs.core.chunk_first.call(null,seq__42786_42841__$1);
var G__42843 = cljs.core.chunk_rest.call(null,seq__42786_42841__$1);
var G__42844 = c__29125__auto___42842;
var G__42845 = cljs.core.count.call(null,c__29125__auto___42842);
var G__42846 = (0);
seq__42786_42826 = G__42843;
chunk__42787_42827 = G__42844;
count__42788_42828 = G__42845;
i__42789_42829 = G__42846;
continue;
} else {
var vec__42795_42847 = cljs.core.first.call(null,seq__42786_42841__$1);
var name_42848 = cljs.core.nth.call(null,vec__42795_42847,(0),null);
var map__42798_42849 = cljs.core.nth.call(null,vec__42795_42847,(1),null);
var map__42798_42850__$1 = ((((!((map__42798_42849 == null)))?((((map__42798_42849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42798_42849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42798_42849):map__42798_42849);
var doc_42851 = cljs.core.get.call(null,map__42798_42850__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42852 = cljs.core.get.call(null,map__42798_42850__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42848);

cljs.core.println.call(null," ",arglists_42852);

if(cljs.core.truth_(doc_42851)){
cljs.core.println.call(null," ",doc_42851);
} else {
}

var G__42853 = cljs.core.next.call(null,seq__42786_42841__$1);
var G__42854 = null;
var G__42855 = (0);
var G__42856 = (0);
seq__42786_42826 = G__42853;
chunk__42787_42827 = G__42854;
count__42788_42828 = G__42855;
i__42789_42829 = G__42856;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__42800 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42801 = null;
var count__42802 = (0);
var i__42803 = (0);
while(true){
if((i__42803 < count__42802)){
var role = cljs.core._nth.call(null,chunk__42801,i__42803);
var temp__4657__auto___42857__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42857__$1)){
var spec_42858 = temp__4657__auto___42857__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_42858));
} else {
}

var G__42859 = seq__42800;
var G__42860 = chunk__42801;
var G__42861 = count__42802;
var G__42862 = (i__42803 + (1));
seq__42800 = G__42859;
chunk__42801 = G__42860;
count__42802 = G__42861;
i__42803 = G__42862;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__42800);
if(temp__4657__auto____$1){
var seq__42800__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42800__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__42800__$1);
var G__42863 = cljs.core.chunk_rest.call(null,seq__42800__$1);
var G__42864 = c__29125__auto__;
var G__42865 = cljs.core.count.call(null,c__29125__auto__);
var G__42866 = (0);
seq__42800 = G__42863;
chunk__42801 = G__42864;
count__42802 = G__42865;
i__42803 = G__42866;
continue;
} else {
var role = cljs.core.first.call(null,seq__42800__$1);
var temp__4657__auto___42867__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42867__$2)){
var spec_42868 = temp__4657__auto___42867__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_42868));
} else {
}

var G__42869 = cljs.core.next.call(null,seq__42800__$1);
var G__42870 = null;
var G__42871 = (0);
var G__42872 = (0);
seq__42800 = G__42869;
chunk__42801 = G__42870;
count__42802 = G__42871;
i__42803 = G__42872;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1517206664459
