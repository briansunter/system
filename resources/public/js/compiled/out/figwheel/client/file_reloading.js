// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__36520__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__36520__auto__){
return or__36520__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return ["goog/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__36520__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__36520__auto__)){
return or__36520__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41113_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41113_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__41114 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41115 = null;
var count__41116 = (0);
var i__41117 = (0);
while(true){
if((i__41117 < count__41116)){
var n = cljs.core._nth.call(null,chunk__41115,i__41117);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41118 = seq__41114;
var G__41119 = chunk__41115;
var G__41120 = count__41116;
var G__41121 = (i__41117 + (1));
seq__41114 = G__41118;
chunk__41115 = G__41119;
count__41116 = G__41120;
i__41117 = G__41121;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41114);
if(temp__4657__auto__){
var seq__41114__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41114__$1)){
var c__37359__auto__ = cljs.core.chunk_first.call(null,seq__41114__$1);
var G__41122 = cljs.core.chunk_rest.call(null,seq__41114__$1);
var G__41123 = c__37359__auto__;
var G__41124 = cljs.core.count.call(null,c__37359__auto__);
var G__41125 = (0);
seq__41114 = G__41122;
chunk__41115 = G__41123;
count__41116 = G__41124;
i__41117 = G__41125;
continue;
} else {
var n = cljs.core.first.call(null,seq__41114__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41126 = cljs.core.next.call(null,seq__41114__$1);
var G__41127 = null;
var G__41128 = (0);
var G__41129 = (0);
seq__41114 = G__41126;
chunk__41115 = G__41127;
count__41116 = G__41128;
i__41117 = G__41129;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__41139_41147 = cljs.core.seq.call(null,deps);
var chunk__41140_41148 = null;
var count__41141_41149 = (0);
var i__41142_41150 = (0);
while(true){
if((i__41142_41150 < count__41141_41149)){
var dep_41151 = cljs.core._nth.call(null,chunk__41140_41148,i__41142_41150);
topo_sort_helper_STAR_.call(null,dep_41151,(depth + (1)),state);

var G__41152 = seq__41139_41147;
var G__41153 = chunk__41140_41148;
var G__41154 = count__41141_41149;
var G__41155 = (i__41142_41150 + (1));
seq__41139_41147 = G__41152;
chunk__41140_41148 = G__41153;
count__41141_41149 = G__41154;
i__41142_41150 = G__41155;
continue;
} else {
var temp__4657__auto___41156 = cljs.core.seq.call(null,seq__41139_41147);
if(temp__4657__auto___41156){
var seq__41139_41157__$1 = temp__4657__auto___41156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41139_41157__$1)){
var c__37359__auto___41158 = cljs.core.chunk_first.call(null,seq__41139_41157__$1);
var G__41159 = cljs.core.chunk_rest.call(null,seq__41139_41157__$1);
var G__41160 = c__37359__auto___41158;
var G__41161 = cljs.core.count.call(null,c__37359__auto___41158);
var G__41162 = (0);
seq__41139_41147 = G__41159;
chunk__41140_41148 = G__41160;
count__41141_41149 = G__41161;
i__41142_41150 = G__41162;
continue;
} else {
var dep_41163 = cljs.core.first.call(null,seq__41139_41157__$1);
topo_sort_helper_STAR_.call(null,dep_41163,(depth + (1)),state);

var G__41164 = cljs.core.next.call(null,seq__41139_41157__$1);
var G__41165 = null;
var G__41166 = (0);
var G__41167 = (0);
seq__41139_41147 = G__41164;
chunk__41140_41148 = G__41165;
count__41141_41149 = G__41166;
i__41142_41150 = G__41167;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41143){
var vec__41144 = p__41143;
var seq__41145 = cljs.core.seq.call(null,vec__41144);
var first__41146 = cljs.core.first.call(null,seq__41145);
var seq__41145__$1 = cljs.core.next.call(null,seq__41145);
var x = first__41146;
var xs = seq__41145__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41144,seq__41145,first__41146,seq__41145__$1,x,xs,get_deps__$1){
return (function (p1__41130_SHARP_){
return clojure.set.difference.call(null,p1__41130_SHARP_,x);
});})(vec__41144,seq__41145,first__41146,seq__41145__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__41168 = cljs.core.seq.call(null,provides);
var chunk__41169 = null;
var count__41170 = (0);
var i__41171 = (0);
while(true){
if((i__41171 < count__41170)){
var prov = cljs.core._nth.call(null,chunk__41169,i__41171);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41172_41180 = cljs.core.seq.call(null,requires);
var chunk__41173_41181 = null;
var count__41174_41182 = (0);
var i__41175_41183 = (0);
while(true){
if((i__41175_41183 < count__41174_41182)){
var req_41184 = cljs.core._nth.call(null,chunk__41173_41181,i__41175_41183);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41184,prov);

var G__41185 = seq__41172_41180;
var G__41186 = chunk__41173_41181;
var G__41187 = count__41174_41182;
var G__41188 = (i__41175_41183 + (1));
seq__41172_41180 = G__41185;
chunk__41173_41181 = G__41186;
count__41174_41182 = G__41187;
i__41175_41183 = G__41188;
continue;
} else {
var temp__4657__auto___41189 = cljs.core.seq.call(null,seq__41172_41180);
if(temp__4657__auto___41189){
var seq__41172_41190__$1 = temp__4657__auto___41189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41172_41190__$1)){
var c__37359__auto___41191 = cljs.core.chunk_first.call(null,seq__41172_41190__$1);
var G__41192 = cljs.core.chunk_rest.call(null,seq__41172_41190__$1);
var G__41193 = c__37359__auto___41191;
var G__41194 = cljs.core.count.call(null,c__37359__auto___41191);
var G__41195 = (0);
seq__41172_41180 = G__41192;
chunk__41173_41181 = G__41193;
count__41174_41182 = G__41194;
i__41175_41183 = G__41195;
continue;
} else {
var req_41196 = cljs.core.first.call(null,seq__41172_41190__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41196,prov);

var G__41197 = cljs.core.next.call(null,seq__41172_41190__$1);
var G__41198 = null;
var G__41199 = (0);
var G__41200 = (0);
seq__41172_41180 = G__41197;
chunk__41173_41181 = G__41198;
count__41174_41182 = G__41199;
i__41175_41183 = G__41200;
continue;
}
} else {
}
}
break;
}

var G__41201 = seq__41168;
var G__41202 = chunk__41169;
var G__41203 = count__41170;
var G__41204 = (i__41171 + (1));
seq__41168 = G__41201;
chunk__41169 = G__41202;
count__41170 = G__41203;
i__41171 = G__41204;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41168);
if(temp__4657__auto__){
var seq__41168__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41168__$1)){
var c__37359__auto__ = cljs.core.chunk_first.call(null,seq__41168__$1);
var G__41205 = cljs.core.chunk_rest.call(null,seq__41168__$1);
var G__41206 = c__37359__auto__;
var G__41207 = cljs.core.count.call(null,c__37359__auto__);
var G__41208 = (0);
seq__41168 = G__41205;
chunk__41169 = G__41206;
count__41170 = G__41207;
i__41171 = G__41208;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41168__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41176_41209 = cljs.core.seq.call(null,requires);
var chunk__41177_41210 = null;
var count__41178_41211 = (0);
var i__41179_41212 = (0);
while(true){
if((i__41179_41212 < count__41178_41211)){
var req_41213 = cljs.core._nth.call(null,chunk__41177_41210,i__41179_41212);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41213,prov);

var G__41214 = seq__41176_41209;
var G__41215 = chunk__41177_41210;
var G__41216 = count__41178_41211;
var G__41217 = (i__41179_41212 + (1));
seq__41176_41209 = G__41214;
chunk__41177_41210 = G__41215;
count__41178_41211 = G__41216;
i__41179_41212 = G__41217;
continue;
} else {
var temp__4657__auto___41218__$1 = cljs.core.seq.call(null,seq__41176_41209);
if(temp__4657__auto___41218__$1){
var seq__41176_41219__$1 = temp__4657__auto___41218__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41176_41219__$1)){
var c__37359__auto___41220 = cljs.core.chunk_first.call(null,seq__41176_41219__$1);
var G__41221 = cljs.core.chunk_rest.call(null,seq__41176_41219__$1);
var G__41222 = c__37359__auto___41220;
var G__41223 = cljs.core.count.call(null,c__37359__auto___41220);
var G__41224 = (0);
seq__41176_41209 = G__41221;
chunk__41177_41210 = G__41222;
count__41178_41211 = G__41223;
i__41179_41212 = G__41224;
continue;
} else {
var req_41225 = cljs.core.first.call(null,seq__41176_41219__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41225,prov);

var G__41226 = cljs.core.next.call(null,seq__41176_41219__$1);
var G__41227 = null;
var G__41228 = (0);
var G__41229 = (0);
seq__41176_41209 = G__41226;
chunk__41177_41210 = G__41227;
count__41178_41211 = G__41228;
i__41179_41212 = G__41229;
continue;
}
} else {
}
}
break;
}

var G__41230 = cljs.core.next.call(null,seq__41168__$1);
var G__41231 = null;
var G__41232 = (0);
var G__41233 = (0);
seq__41168 = G__41230;
chunk__41169 = G__41231;
count__41170 = G__41232;
i__41171 = G__41233;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__41234_41238 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41235_41239 = null;
var count__41236_41240 = (0);
var i__41237_41241 = (0);
while(true){
if((i__41237_41241 < count__41236_41240)){
var ns_41242 = cljs.core._nth.call(null,chunk__41235_41239,i__41237_41241);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41242);

var G__41243 = seq__41234_41238;
var G__41244 = chunk__41235_41239;
var G__41245 = count__41236_41240;
var G__41246 = (i__41237_41241 + (1));
seq__41234_41238 = G__41243;
chunk__41235_41239 = G__41244;
count__41236_41240 = G__41245;
i__41237_41241 = G__41246;
continue;
} else {
var temp__4657__auto___41247 = cljs.core.seq.call(null,seq__41234_41238);
if(temp__4657__auto___41247){
var seq__41234_41248__$1 = temp__4657__auto___41247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41234_41248__$1)){
var c__37359__auto___41249 = cljs.core.chunk_first.call(null,seq__41234_41248__$1);
var G__41250 = cljs.core.chunk_rest.call(null,seq__41234_41248__$1);
var G__41251 = c__37359__auto___41249;
var G__41252 = cljs.core.count.call(null,c__37359__auto___41249);
var G__41253 = (0);
seq__41234_41238 = G__41250;
chunk__41235_41239 = G__41251;
count__41236_41240 = G__41252;
i__41237_41241 = G__41253;
continue;
} else {
var ns_41254 = cljs.core.first.call(null,seq__41234_41248__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41254);

var G__41255 = cljs.core.next.call(null,seq__41234_41248__$1);
var G__41256 = null;
var G__41257 = (0);
var G__41258 = (0);
seq__41234_41238 = G__41255;
chunk__41235_41239 = G__41256;
count__41236_41240 = G__41257;
i__41237_41241 = G__41258;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__36520__auto__ = goog.require__;
if(cljs.core.truth_(or__36520__auto__)){
return or__36520__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__41259__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41259 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41260__i = 0, G__41260__a = new Array(arguments.length -  0);
while (G__41260__i < G__41260__a.length) {G__41260__a[G__41260__i] = arguments[G__41260__i + 0]; ++G__41260__i;}
  args = new cljs.core.IndexedSeq(G__41260__a,0,null);
} 
return G__41259__delegate.call(this,args);};
G__41259.cljs$lang$maxFixedArity = 0;
G__41259.cljs$lang$applyTo = (function (arglist__41261){
var args = cljs.core.seq(arglist__41261);
return G__41259__delegate(args);
});
G__41259.cljs$core$IFn$_invoke$arity$variadic = G__41259__delegate;
return G__41259;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41263 = cljs.core._EQ_;
var expr__41264 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41263.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41264))){
var path_parts = ((function (pred__41263,expr__41264){
return (function (p1__41262_SHARP_){
return clojure.string.split.call(null,p1__41262_SHARP_,/[\/\\]/);
});})(pred__41263,expr__41264))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__41263,expr__41264){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e41266){if((e41266 instanceof Error)){
var e = e41266;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41266;

}
}})());
});
;})(path_parts,sep,root,pred__41263,expr__41264))
} else {
if(cljs.core.truth_(pred__41263.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41264))){
return ((function (pred__41263,expr__41264){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__41263,expr__41264){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__41263,expr__41264))
);

return deferred.addErrback(((function (deferred,pred__41263,expr__41264){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__41263,expr__41264))
);
});
;})(pred__41263,expr__41264))
} else {
return ((function (pred__41263,expr__41264){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41263,expr__41264))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41267,callback){
var map__41268 = p__41267;
var map__41268__$1 = ((((!((map__41268 == null)))?((((map__41268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41268):map__41268);
var file_msg = map__41268__$1;
var request_url = cljs.core.get.call(null,map__41268__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__41268,map__41268__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41268,map__41268__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__39204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto__){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto__){
return (function (state_41292){
var state_val_41293 = (state_41292[(1)]);
if((state_val_41293 === (7))){
var inst_41288 = (state_41292[(2)]);
var state_41292__$1 = state_41292;
var statearr_41294_41311 = state_41292__$1;
(statearr_41294_41311[(2)] = inst_41288);

(statearr_41294_41311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (1))){
var state_41292__$1 = state_41292;
var statearr_41295_41312 = state_41292__$1;
(statearr_41295_41312[(2)] = null);

(statearr_41295_41312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (4))){
var inst_41272 = (state_41292[(7)]);
var inst_41272__$1 = (state_41292[(2)]);
var state_41292__$1 = (function (){var statearr_41296 = state_41292;
(statearr_41296[(7)] = inst_41272__$1);

return statearr_41296;
})();
if(cljs.core.truth_(inst_41272__$1)){
var statearr_41297_41313 = state_41292__$1;
(statearr_41297_41313[(1)] = (5));

} else {
var statearr_41298_41314 = state_41292__$1;
(statearr_41298_41314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (6))){
var state_41292__$1 = state_41292;
var statearr_41299_41315 = state_41292__$1;
(statearr_41299_41315[(2)] = null);

(statearr_41299_41315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (3))){
var inst_41290 = (state_41292[(2)]);
var state_41292__$1 = state_41292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41292__$1,inst_41290);
} else {
if((state_val_41293 === (2))){
var state_41292__$1 = state_41292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41292__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41293 === (11))){
var inst_41284 = (state_41292[(2)]);
var state_41292__$1 = (function (){var statearr_41300 = state_41292;
(statearr_41300[(8)] = inst_41284);

return statearr_41300;
})();
var statearr_41301_41316 = state_41292__$1;
(statearr_41301_41316[(2)] = null);

(statearr_41301_41316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (9))){
var inst_41278 = (state_41292[(9)]);
var inst_41276 = (state_41292[(10)]);
var inst_41280 = inst_41278.call(null,inst_41276);
var state_41292__$1 = state_41292;
var statearr_41302_41317 = state_41292__$1;
(statearr_41302_41317[(2)] = inst_41280);

(statearr_41302_41317[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (5))){
var inst_41272 = (state_41292[(7)]);
var inst_41274 = figwheel.client.file_reloading.blocking_load.call(null,inst_41272);
var state_41292__$1 = state_41292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41292__$1,(8),inst_41274);
} else {
if((state_val_41293 === (10))){
var inst_41276 = (state_41292[(10)]);
var inst_41282 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41276);
var state_41292__$1 = state_41292;
var statearr_41303_41318 = state_41292__$1;
(statearr_41303_41318[(2)] = inst_41282);

(statearr_41303_41318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41293 === (8))){
var inst_41278 = (state_41292[(9)]);
var inst_41272 = (state_41292[(7)]);
var inst_41276 = (state_41292[(2)]);
var inst_41277 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_41278__$1 = cljs.core.get.call(null,inst_41277,inst_41272);
var state_41292__$1 = (function (){var statearr_41304 = state_41292;
(statearr_41304[(9)] = inst_41278__$1);

(statearr_41304[(10)] = inst_41276);

return statearr_41304;
})();
if(cljs.core.truth_(inst_41278__$1)){
var statearr_41305_41319 = state_41292__$1;
(statearr_41305_41319[(1)] = (9));

} else {
var statearr_41306_41320 = state_41292__$1;
(statearr_41306_41320[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__39204__auto__))
;
return ((function (switch__39116__auto__,c__39204__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__39117__auto__ = null;
var figwheel$client$file_reloading$state_machine__39117__auto____0 = (function (){
var statearr_41307 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41307[(0)] = figwheel$client$file_reloading$state_machine__39117__auto__);

(statearr_41307[(1)] = (1));

return statearr_41307;
});
var figwheel$client$file_reloading$state_machine__39117__auto____1 = (function (state_41292){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_41292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e41308){if((e41308 instanceof Object)){
var ex__39120__auto__ = e41308;
var statearr_41309_41321 = state_41292;
(statearr_41309_41321[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41322 = state_41292;
state_41292 = G__41322;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__39117__auto__ = function(state_41292){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__39117__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__39117__auto____1.call(this,state_41292);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__39117__auto____0;
figwheel$client$file_reloading$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__39117__auto____1;
return figwheel$client$file_reloading$state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto__))
})();
var state__39206__auto__ = (function (){var statearr_41310 = f__39205__auto__.call(null);
(statearr_41310[(6)] = c__39204__auto__);

return statearr_41310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto__))
);

return c__39204__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41323,callback){
var map__41324 = p__41323;
var map__41324__$1 = ((((!((map__41324 == null)))?((((map__41324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41324):map__41324);
var file_msg = map__41324__$1;
var namespace = cljs.core.get.call(null,map__41324__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41324,map__41324__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__41324,map__41324__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41326){
var map__41327 = p__41326;
var map__41327__$1 = ((((!((map__41327 == null)))?((((map__41327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41327.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41327):map__41327);
var file_msg = map__41327__$1;
var namespace = cljs.core.get.call(null,map__41327__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__36508__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__36508__auto__){
var or__36520__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36520__auto__)){
return or__36520__auto__;
} else {
var or__36520__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36520__auto____$1)){
return or__36520__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__36508__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41329,callback){
var map__41330 = p__41329;
var map__41330__$1 = ((((!((map__41330 == null)))?((((map__41330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41330):map__41330);
var file_msg = map__41330__$1;
var request_url = cljs.core.get.call(null,map__41330__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41330__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__39204__auto___41380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___41380,out){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___41380,out){
return (function (state_41365){
var state_val_41366 = (state_41365[(1)]);
if((state_val_41366 === (1))){
var inst_41339 = cljs.core.seq.call(null,files);
var inst_41340 = cljs.core.first.call(null,inst_41339);
var inst_41341 = cljs.core.next.call(null,inst_41339);
var inst_41342 = files;
var state_41365__$1 = (function (){var statearr_41367 = state_41365;
(statearr_41367[(7)] = inst_41341);

(statearr_41367[(8)] = inst_41340);

(statearr_41367[(9)] = inst_41342);

return statearr_41367;
})();
var statearr_41368_41381 = state_41365__$1;
(statearr_41368_41381[(2)] = null);

(statearr_41368_41381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41366 === (2))){
var inst_41348 = (state_41365[(10)]);
var inst_41342 = (state_41365[(9)]);
var inst_41347 = cljs.core.seq.call(null,inst_41342);
var inst_41348__$1 = cljs.core.first.call(null,inst_41347);
var inst_41349 = cljs.core.next.call(null,inst_41347);
var inst_41350 = (inst_41348__$1 == null);
var inst_41351 = cljs.core.not.call(null,inst_41350);
var state_41365__$1 = (function (){var statearr_41369 = state_41365;
(statearr_41369[(11)] = inst_41349);

(statearr_41369[(10)] = inst_41348__$1);

return statearr_41369;
})();
if(inst_41351){
var statearr_41370_41382 = state_41365__$1;
(statearr_41370_41382[(1)] = (4));

} else {
var statearr_41371_41383 = state_41365__$1;
(statearr_41371_41383[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41366 === (3))){
var inst_41363 = (state_41365[(2)]);
var state_41365__$1 = state_41365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41365__$1,inst_41363);
} else {
if((state_val_41366 === (4))){
var inst_41348 = (state_41365[(10)]);
var inst_41353 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41348);
var state_41365__$1 = state_41365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41365__$1,(7),inst_41353);
} else {
if((state_val_41366 === (5))){
var inst_41359 = cljs.core.async.close_BANG_.call(null,out);
var state_41365__$1 = state_41365;
var statearr_41372_41384 = state_41365__$1;
(statearr_41372_41384[(2)] = inst_41359);

(statearr_41372_41384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41366 === (6))){
var inst_41361 = (state_41365[(2)]);
var state_41365__$1 = state_41365;
var statearr_41373_41385 = state_41365__$1;
(statearr_41373_41385[(2)] = inst_41361);

(statearr_41373_41385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41366 === (7))){
var inst_41349 = (state_41365[(11)]);
var inst_41355 = (state_41365[(2)]);
var inst_41356 = cljs.core.async.put_BANG_.call(null,out,inst_41355);
var inst_41342 = inst_41349;
var state_41365__$1 = (function (){var statearr_41374 = state_41365;
(statearr_41374[(12)] = inst_41356);

(statearr_41374[(9)] = inst_41342);

return statearr_41374;
})();
var statearr_41375_41386 = state_41365__$1;
(statearr_41375_41386[(2)] = null);

(statearr_41375_41386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__39204__auto___41380,out))
;
return ((function (switch__39116__auto__,c__39204__auto___41380,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39117__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39117__auto____0 = (function (){
var statearr_41376 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41376[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39117__auto__);

(statearr_41376[(1)] = (1));

return statearr_41376;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39117__auto____1 = (function (state_41365){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_41365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e41377){if((e41377 instanceof Object)){
var ex__39120__auto__ = e41377;
var statearr_41378_41387 = state_41365;
(statearr_41378_41387[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41388 = state_41365;
state_41365 = G__41388;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39117__auto__ = function(state_41365){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39117__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39117__auto____1.call(this,state_41365);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39117__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39117__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___41380,out))
})();
var state__39206__auto__ = (function (){var statearr_41379 = f__39205__auto__.call(null);
(statearr_41379[(6)] = c__39204__auto___41380);

return statearr_41379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___41380,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41389,opts){
var map__41390 = p__41389;
var map__41390__$1 = ((((!((map__41390 == null)))?((((map__41390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41390):map__41390);
var eval_body = cljs.core.get.call(null,map__41390__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41390__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__36508__auto__ = eval_body;
if(cljs.core.truth_(and__36508__auto__)){
return typeof eval_body === 'string';
} else {
return and__36508__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e41392){var e = e41392;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__41393_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41393_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__41394){
var vec__41395 = p__41394;
var k = cljs.core.nth.call(null,vec__41395,(0),null);
var v = cljs.core.nth.call(null,vec__41395,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41398){
var vec__41399 = p__41398;
var k = cljs.core.nth.call(null,vec__41399,(0),null);
var v = cljs.core.nth.call(null,vec__41399,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41405,p__41406){
var map__41407 = p__41405;
var map__41407__$1 = ((((!((map__41407 == null)))?((((map__41407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41407):map__41407);
var opts = map__41407__$1;
var before_jsload = cljs.core.get.call(null,map__41407__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41407__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41407__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41408 = p__41406;
var map__41408__$1 = ((((!((map__41408 == null)))?((((map__41408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41408.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41408):map__41408);
var msg = map__41408__$1;
var files = cljs.core.get.call(null,map__41408__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41408__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41408__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__39204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41562){
var state_val_41563 = (state_41562[(1)]);
if((state_val_41563 === (7))){
var inst_41424 = (state_41562[(7)]);
var inst_41422 = (state_41562[(8)]);
var inst_41423 = (state_41562[(9)]);
var inst_41425 = (state_41562[(10)]);
var inst_41430 = cljs.core._nth.call(null,inst_41423,inst_41425);
var inst_41431 = figwheel.client.file_reloading.eval_body.call(null,inst_41430,opts);
var inst_41432 = (inst_41425 + (1));
var tmp41564 = inst_41424;
var tmp41565 = inst_41422;
var tmp41566 = inst_41423;
var inst_41422__$1 = tmp41565;
var inst_41423__$1 = tmp41566;
var inst_41424__$1 = tmp41564;
var inst_41425__$1 = inst_41432;
var state_41562__$1 = (function (){var statearr_41567 = state_41562;
(statearr_41567[(7)] = inst_41424__$1);

(statearr_41567[(8)] = inst_41422__$1);

(statearr_41567[(9)] = inst_41423__$1);

(statearr_41567[(11)] = inst_41431);

(statearr_41567[(10)] = inst_41425__$1);

return statearr_41567;
})();
var statearr_41568_41651 = state_41562__$1;
(statearr_41568_41651[(2)] = null);

(statearr_41568_41651[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (20))){
var inst_41465 = (state_41562[(12)]);
var inst_41473 = figwheel.client.file_reloading.sort_files.call(null,inst_41465);
var state_41562__$1 = state_41562;
var statearr_41569_41652 = state_41562__$1;
(statearr_41569_41652[(2)] = inst_41473);

(statearr_41569_41652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (27))){
var state_41562__$1 = state_41562;
var statearr_41570_41653 = state_41562__$1;
(statearr_41570_41653[(2)] = null);

(statearr_41570_41653[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (1))){
var inst_41414 = (state_41562[(13)]);
var inst_41411 = before_jsload.call(null,files);
var inst_41412 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41413 = (function (){return ((function (inst_41414,inst_41411,inst_41412,state_val_41563,c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41402_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41402_SHARP_);
});
;})(inst_41414,inst_41411,inst_41412,state_val_41563,c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41414__$1 = cljs.core.filter.call(null,inst_41413,files);
var inst_41415 = cljs.core.not_empty.call(null,inst_41414__$1);
var state_41562__$1 = (function (){var statearr_41571 = state_41562;
(statearr_41571[(13)] = inst_41414__$1);

(statearr_41571[(14)] = inst_41411);

(statearr_41571[(15)] = inst_41412);

return statearr_41571;
})();
if(cljs.core.truth_(inst_41415)){
var statearr_41572_41654 = state_41562__$1;
(statearr_41572_41654[(1)] = (2));

} else {
var statearr_41573_41655 = state_41562__$1;
(statearr_41573_41655[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (24))){
var state_41562__$1 = state_41562;
var statearr_41574_41656 = state_41562__$1;
(statearr_41574_41656[(2)] = null);

(statearr_41574_41656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (39))){
var inst_41515 = (state_41562[(16)]);
var state_41562__$1 = state_41562;
var statearr_41575_41657 = state_41562__$1;
(statearr_41575_41657[(2)] = inst_41515);

(statearr_41575_41657[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (46))){
var inst_41557 = (state_41562[(2)]);
var state_41562__$1 = state_41562;
var statearr_41576_41658 = state_41562__$1;
(statearr_41576_41658[(2)] = inst_41557);

(statearr_41576_41658[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (4))){
var inst_41459 = (state_41562[(2)]);
var inst_41460 = cljs.core.List.EMPTY;
var inst_41461 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41460);
var inst_41462 = (function (){return ((function (inst_41459,inst_41460,inst_41461,state_val_41563,c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41403_SHARP_){
var and__36508__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41403_SHARP_);
if(cljs.core.truth_(and__36508__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41403_SHARP_));
} else {
return and__36508__auto__;
}
});
;})(inst_41459,inst_41460,inst_41461,state_val_41563,c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41463 = cljs.core.filter.call(null,inst_41462,files);
var inst_41464 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41465 = cljs.core.concat.call(null,inst_41463,inst_41464);
var state_41562__$1 = (function (){var statearr_41577 = state_41562;
(statearr_41577[(17)] = inst_41459);

(statearr_41577[(12)] = inst_41465);

(statearr_41577[(18)] = inst_41461);

return statearr_41577;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41578_41659 = state_41562__$1;
(statearr_41578_41659[(1)] = (16));

} else {
var statearr_41579_41660 = state_41562__$1;
(statearr_41579_41660[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (15))){
var inst_41449 = (state_41562[(2)]);
var state_41562__$1 = state_41562;
var statearr_41580_41661 = state_41562__$1;
(statearr_41580_41661[(2)] = inst_41449);

(statearr_41580_41661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (21))){
var inst_41475 = (state_41562[(19)]);
var inst_41475__$1 = (state_41562[(2)]);
var inst_41476 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41475__$1);
var state_41562__$1 = (function (){var statearr_41581 = state_41562;
(statearr_41581[(19)] = inst_41475__$1);

return statearr_41581;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41562__$1,(22),inst_41476);
} else {
if((state_val_41563 === (31))){
var inst_41560 = (state_41562[(2)]);
var state_41562__$1 = state_41562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41562__$1,inst_41560);
} else {
if((state_val_41563 === (32))){
var inst_41515 = (state_41562[(16)]);
var inst_41520 = inst_41515.cljs$lang$protocol_mask$partition0$;
var inst_41521 = (inst_41520 & (64));
var inst_41522 = inst_41515.cljs$core$ISeq$;
var inst_41523 = (cljs.core.PROTOCOL_SENTINEL === inst_41522);
var inst_41524 = (inst_41521) || (inst_41523);
var state_41562__$1 = state_41562;
if(cljs.core.truth_(inst_41524)){
var statearr_41582_41662 = state_41562__$1;
(statearr_41582_41662[(1)] = (35));

} else {
var statearr_41583_41663 = state_41562__$1;
(statearr_41583_41663[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (40))){
var inst_41537 = (state_41562[(20)]);
var inst_41536 = (state_41562[(2)]);
var inst_41537__$1 = cljs.core.get.call(null,inst_41536,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41538 = cljs.core.get.call(null,inst_41536,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41539 = cljs.core.not_empty.call(null,inst_41537__$1);
var state_41562__$1 = (function (){var statearr_41584 = state_41562;
(statearr_41584[(20)] = inst_41537__$1);

(statearr_41584[(21)] = inst_41538);

return statearr_41584;
})();
if(cljs.core.truth_(inst_41539)){
var statearr_41585_41664 = state_41562__$1;
(statearr_41585_41664[(1)] = (41));

} else {
var statearr_41586_41665 = state_41562__$1;
(statearr_41586_41665[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (33))){
var state_41562__$1 = state_41562;
var statearr_41587_41666 = state_41562__$1;
(statearr_41587_41666[(2)] = false);

(statearr_41587_41666[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (13))){
var inst_41435 = (state_41562[(22)]);
var inst_41439 = cljs.core.chunk_first.call(null,inst_41435);
var inst_41440 = cljs.core.chunk_rest.call(null,inst_41435);
var inst_41441 = cljs.core.count.call(null,inst_41439);
var inst_41422 = inst_41440;
var inst_41423 = inst_41439;
var inst_41424 = inst_41441;
var inst_41425 = (0);
var state_41562__$1 = (function (){var statearr_41588 = state_41562;
(statearr_41588[(7)] = inst_41424);

(statearr_41588[(8)] = inst_41422);

(statearr_41588[(9)] = inst_41423);

(statearr_41588[(10)] = inst_41425);

return statearr_41588;
})();
var statearr_41589_41667 = state_41562__$1;
(statearr_41589_41667[(2)] = null);

(statearr_41589_41667[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (22))){
var inst_41479 = (state_41562[(23)]);
var inst_41483 = (state_41562[(24)]);
var inst_41478 = (state_41562[(25)]);
var inst_41475 = (state_41562[(19)]);
var inst_41478__$1 = (state_41562[(2)]);
var inst_41479__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41478__$1);
var inst_41480 = (function (){var all_files = inst_41475;
var res_SINGLEQUOTE_ = inst_41478__$1;
var res = inst_41479__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41479,inst_41483,inst_41478,inst_41475,inst_41478__$1,inst_41479__$1,state_val_41563,c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41404_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41404_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41479,inst_41483,inst_41478,inst_41475,inst_41478__$1,inst_41479__$1,state_val_41563,c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41481 = cljs.core.filter.call(null,inst_41480,inst_41478__$1);
var inst_41482 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41483__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41482);
var inst_41484 = cljs.core.not_empty.call(null,inst_41483__$1);
var state_41562__$1 = (function (){var statearr_41590 = state_41562;
(statearr_41590[(23)] = inst_41479__$1);

(statearr_41590[(24)] = inst_41483__$1);

(statearr_41590[(25)] = inst_41478__$1);

(statearr_41590[(26)] = inst_41481);

return statearr_41590;
})();
if(cljs.core.truth_(inst_41484)){
var statearr_41591_41668 = state_41562__$1;
(statearr_41591_41668[(1)] = (23));

} else {
var statearr_41592_41669 = state_41562__$1;
(statearr_41592_41669[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (36))){
var state_41562__$1 = state_41562;
var statearr_41593_41670 = state_41562__$1;
(statearr_41593_41670[(2)] = false);

(statearr_41593_41670[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (41))){
var inst_41537 = (state_41562[(20)]);
var inst_41541 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41542 = cljs.core.map.call(null,inst_41541,inst_41537);
var inst_41543 = cljs.core.pr_str.call(null,inst_41542);
var inst_41544 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41543)].join('');
var inst_41545 = figwheel.client.utils.log.call(null,inst_41544);
var state_41562__$1 = state_41562;
var statearr_41594_41671 = state_41562__$1;
(statearr_41594_41671[(2)] = inst_41545);

(statearr_41594_41671[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (43))){
var inst_41538 = (state_41562[(21)]);
var inst_41548 = (state_41562[(2)]);
var inst_41549 = cljs.core.not_empty.call(null,inst_41538);
var state_41562__$1 = (function (){var statearr_41595 = state_41562;
(statearr_41595[(27)] = inst_41548);

return statearr_41595;
})();
if(cljs.core.truth_(inst_41549)){
var statearr_41596_41672 = state_41562__$1;
(statearr_41596_41672[(1)] = (44));

} else {
var statearr_41597_41673 = state_41562__$1;
(statearr_41597_41673[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (29))){
var inst_41479 = (state_41562[(23)]);
var inst_41515 = (state_41562[(16)]);
var inst_41483 = (state_41562[(24)]);
var inst_41478 = (state_41562[(25)]);
var inst_41481 = (state_41562[(26)]);
var inst_41475 = (state_41562[(19)]);
var inst_41511 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41514 = (function (){var all_files = inst_41475;
var res_SINGLEQUOTE_ = inst_41478;
var res = inst_41479;
var files_not_loaded = inst_41481;
var dependencies_that_loaded = inst_41483;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41479,inst_41515,inst_41483,inst_41478,inst_41481,inst_41475,inst_41511,state_val_41563,c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41513){
var map__41598 = p__41513;
var map__41598__$1 = ((((!((map__41598 == null)))?((((map__41598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41598):map__41598);
var namespace = cljs.core.get.call(null,map__41598__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41479,inst_41515,inst_41483,inst_41478,inst_41481,inst_41475,inst_41511,state_val_41563,c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41515__$1 = cljs.core.group_by.call(null,inst_41514,inst_41481);
var inst_41517 = (inst_41515__$1 == null);
var inst_41518 = cljs.core.not.call(null,inst_41517);
var state_41562__$1 = (function (){var statearr_41600 = state_41562;
(statearr_41600[(16)] = inst_41515__$1);

(statearr_41600[(28)] = inst_41511);

return statearr_41600;
})();
if(inst_41518){
var statearr_41601_41674 = state_41562__$1;
(statearr_41601_41674[(1)] = (32));

} else {
var statearr_41602_41675 = state_41562__$1;
(statearr_41602_41675[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (44))){
var inst_41538 = (state_41562[(21)]);
var inst_41551 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41538);
var inst_41552 = cljs.core.pr_str.call(null,inst_41551);
var inst_41553 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41552)].join('');
var inst_41554 = figwheel.client.utils.log.call(null,inst_41553);
var state_41562__$1 = state_41562;
var statearr_41603_41676 = state_41562__$1;
(statearr_41603_41676[(2)] = inst_41554);

(statearr_41603_41676[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (6))){
var inst_41456 = (state_41562[(2)]);
var state_41562__$1 = state_41562;
var statearr_41604_41677 = state_41562__$1;
(statearr_41604_41677[(2)] = inst_41456);

(statearr_41604_41677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (28))){
var inst_41481 = (state_41562[(26)]);
var inst_41508 = (state_41562[(2)]);
var inst_41509 = cljs.core.not_empty.call(null,inst_41481);
var state_41562__$1 = (function (){var statearr_41605 = state_41562;
(statearr_41605[(29)] = inst_41508);

return statearr_41605;
})();
if(cljs.core.truth_(inst_41509)){
var statearr_41606_41678 = state_41562__$1;
(statearr_41606_41678[(1)] = (29));

} else {
var statearr_41607_41679 = state_41562__$1;
(statearr_41607_41679[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (25))){
var inst_41479 = (state_41562[(23)]);
var inst_41495 = (state_41562[(2)]);
var inst_41496 = cljs.core.not_empty.call(null,inst_41479);
var state_41562__$1 = (function (){var statearr_41608 = state_41562;
(statearr_41608[(30)] = inst_41495);

return statearr_41608;
})();
if(cljs.core.truth_(inst_41496)){
var statearr_41609_41680 = state_41562__$1;
(statearr_41609_41680[(1)] = (26));

} else {
var statearr_41610_41681 = state_41562__$1;
(statearr_41610_41681[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (34))){
var inst_41531 = (state_41562[(2)]);
var state_41562__$1 = state_41562;
if(cljs.core.truth_(inst_41531)){
var statearr_41611_41682 = state_41562__$1;
(statearr_41611_41682[(1)] = (38));

} else {
var statearr_41612_41683 = state_41562__$1;
(statearr_41612_41683[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (17))){
var state_41562__$1 = state_41562;
var statearr_41613_41684 = state_41562__$1;
(statearr_41613_41684[(2)] = recompile_dependents);

(statearr_41613_41684[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (3))){
var state_41562__$1 = state_41562;
var statearr_41614_41685 = state_41562__$1;
(statearr_41614_41685[(2)] = null);

(statearr_41614_41685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (12))){
var inst_41452 = (state_41562[(2)]);
var state_41562__$1 = state_41562;
var statearr_41615_41686 = state_41562__$1;
(statearr_41615_41686[(2)] = inst_41452);

(statearr_41615_41686[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (2))){
var inst_41414 = (state_41562[(13)]);
var inst_41421 = cljs.core.seq.call(null,inst_41414);
var inst_41422 = inst_41421;
var inst_41423 = null;
var inst_41424 = (0);
var inst_41425 = (0);
var state_41562__$1 = (function (){var statearr_41616 = state_41562;
(statearr_41616[(7)] = inst_41424);

(statearr_41616[(8)] = inst_41422);

(statearr_41616[(9)] = inst_41423);

(statearr_41616[(10)] = inst_41425);

return statearr_41616;
})();
var statearr_41617_41687 = state_41562__$1;
(statearr_41617_41687[(2)] = null);

(statearr_41617_41687[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (23))){
var inst_41479 = (state_41562[(23)]);
var inst_41483 = (state_41562[(24)]);
var inst_41478 = (state_41562[(25)]);
var inst_41481 = (state_41562[(26)]);
var inst_41475 = (state_41562[(19)]);
var inst_41486 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41488 = (function (){var all_files = inst_41475;
var res_SINGLEQUOTE_ = inst_41478;
var res = inst_41479;
var files_not_loaded = inst_41481;
var dependencies_that_loaded = inst_41483;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41479,inst_41483,inst_41478,inst_41481,inst_41475,inst_41486,state_val_41563,c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41487){
var map__41618 = p__41487;
var map__41618__$1 = ((((!((map__41618 == null)))?((((map__41618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41618):map__41618);
var request_url = cljs.core.get.call(null,map__41618__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41479,inst_41483,inst_41478,inst_41481,inst_41475,inst_41486,state_val_41563,c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41489 = cljs.core.reverse.call(null,inst_41483);
var inst_41490 = cljs.core.map.call(null,inst_41488,inst_41489);
var inst_41491 = cljs.core.pr_str.call(null,inst_41490);
var inst_41492 = figwheel.client.utils.log.call(null,inst_41491);
var state_41562__$1 = (function (){var statearr_41620 = state_41562;
(statearr_41620[(31)] = inst_41486);

return statearr_41620;
})();
var statearr_41621_41688 = state_41562__$1;
(statearr_41621_41688[(2)] = inst_41492);

(statearr_41621_41688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (35))){
var state_41562__$1 = state_41562;
var statearr_41622_41689 = state_41562__$1;
(statearr_41622_41689[(2)] = true);

(statearr_41622_41689[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (19))){
var inst_41465 = (state_41562[(12)]);
var inst_41471 = figwheel.client.file_reloading.expand_files.call(null,inst_41465);
var state_41562__$1 = state_41562;
var statearr_41623_41690 = state_41562__$1;
(statearr_41623_41690[(2)] = inst_41471);

(statearr_41623_41690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (11))){
var state_41562__$1 = state_41562;
var statearr_41624_41691 = state_41562__$1;
(statearr_41624_41691[(2)] = null);

(statearr_41624_41691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (9))){
var inst_41454 = (state_41562[(2)]);
var state_41562__$1 = state_41562;
var statearr_41625_41692 = state_41562__$1;
(statearr_41625_41692[(2)] = inst_41454);

(statearr_41625_41692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (5))){
var inst_41424 = (state_41562[(7)]);
var inst_41425 = (state_41562[(10)]);
var inst_41427 = (inst_41425 < inst_41424);
var inst_41428 = inst_41427;
var state_41562__$1 = state_41562;
if(cljs.core.truth_(inst_41428)){
var statearr_41626_41693 = state_41562__$1;
(statearr_41626_41693[(1)] = (7));

} else {
var statearr_41627_41694 = state_41562__$1;
(statearr_41627_41694[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (14))){
var inst_41435 = (state_41562[(22)]);
var inst_41444 = cljs.core.first.call(null,inst_41435);
var inst_41445 = figwheel.client.file_reloading.eval_body.call(null,inst_41444,opts);
var inst_41446 = cljs.core.next.call(null,inst_41435);
var inst_41422 = inst_41446;
var inst_41423 = null;
var inst_41424 = (0);
var inst_41425 = (0);
var state_41562__$1 = (function (){var statearr_41628 = state_41562;
(statearr_41628[(7)] = inst_41424);

(statearr_41628[(32)] = inst_41445);

(statearr_41628[(8)] = inst_41422);

(statearr_41628[(9)] = inst_41423);

(statearr_41628[(10)] = inst_41425);

return statearr_41628;
})();
var statearr_41629_41695 = state_41562__$1;
(statearr_41629_41695[(2)] = null);

(statearr_41629_41695[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (45))){
var state_41562__$1 = state_41562;
var statearr_41630_41696 = state_41562__$1;
(statearr_41630_41696[(2)] = null);

(statearr_41630_41696[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (26))){
var inst_41479 = (state_41562[(23)]);
var inst_41483 = (state_41562[(24)]);
var inst_41478 = (state_41562[(25)]);
var inst_41481 = (state_41562[(26)]);
var inst_41475 = (state_41562[(19)]);
var inst_41498 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41500 = (function (){var all_files = inst_41475;
var res_SINGLEQUOTE_ = inst_41478;
var res = inst_41479;
var files_not_loaded = inst_41481;
var dependencies_that_loaded = inst_41483;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41479,inst_41483,inst_41478,inst_41481,inst_41475,inst_41498,state_val_41563,c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41499){
var map__41631 = p__41499;
var map__41631__$1 = ((((!((map__41631 == null)))?((((map__41631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41631.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41631):map__41631);
var namespace = cljs.core.get.call(null,map__41631__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41631__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41479,inst_41483,inst_41478,inst_41481,inst_41475,inst_41498,state_val_41563,c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41501 = cljs.core.map.call(null,inst_41500,inst_41479);
var inst_41502 = cljs.core.pr_str.call(null,inst_41501);
var inst_41503 = figwheel.client.utils.log.call(null,inst_41502);
var inst_41504 = (function (){var all_files = inst_41475;
var res_SINGLEQUOTE_ = inst_41478;
var res = inst_41479;
var files_not_loaded = inst_41481;
var dependencies_that_loaded = inst_41483;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41479,inst_41483,inst_41478,inst_41481,inst_41475,inst_41498,inst_41500,inst_41501,inst_41502,inst_41503,state_val_41563,c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41479,inst_41483,inst_41478,inst_41481,inst_41475,inst_41498,inst_41500,inst_41501,inst_41502,inst_41503,state_val_41563,c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41505 = setTimeout(inst_41504,(10));
var state_41562__$1 = (function (){var statearr_41633 = state_41562;
(statearr_41633[(33)] = inst_41498);

(statearr_41633[(34)] = inst_41503);

return statearr_41633;
})();
var statearr_41634_41697 = state_41562__$1;
(statearr_41634_41697[(2)] = inst_41505);

(statearr_41634_41697[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (16))){
var state_41562__$1 = state_41562;
var statearr_41635_41698 = state_41562__$1;
(statearr_41635_41698[(2)] = reload_dependents);

(statearr_41635_41698[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (38))){
var inst_41515 = (state_41562[(16)]);
var inst_41533 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41515);
var state_41562__$1 = state_41562;
var statearr_41636_41699 = state_41562__$1;
(statearr_41636_41699[(2)] = inst_41533);

(statearr_41636_41699[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (30))){
var state_41562__$1 = state_41562;
var statearr_41637_41700 = state_41562__$1;
(statearr_41637_41700[(2)] = null);

(statearr_41637_41700[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (10))){
var inst_41435 = (state_41562[(22)]);
var inst_41437 = cljs.core.chunked_seq_QMARK_.call(null,inst_41435);
var state_41562__$1 = state_41562;
if(inst_41437){
var statearr_41638_41701 = state_41562__$1;
(statearr_41638_41701[(1)] = (13));

} else {
var statearr_41639_41702 = state_41562__$1;
(statearr_41639_41702[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (18))){
var inst_41469 = (state_41562[(2)]);
var state_41562__$1 = state_41562;
if(cljs.core.truth_(inst_41469)){
var statearr_41640_41703 = state_41562__$1;
(statearr_41640_41703[(1)] = (19));

} else {
var statearr_41641_41704 = state_41562__$1;
(statearr_41641_41704[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (42))){
var state_41562__$1 = state_41562;
var statearr_41642_41705 = state_41562__$1;
(statearr_41642_41705[(2)] = null);

(statearr_41642_41705[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (37))){
var inst_41528 = (state_41562[(2)]);
var state_41562__$1 = state_41562;
var statearr_41643_41706 = state_41562__$1;
(statearr_41643_41706[(2)] = inst_41528);

(statearr_41643_41706[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (8))){
var inst_41435 = (state_41562[(22)]);
var inst_41422 = (state_41562[(8)]);
var inst_41435__$1 = cljs.core.seq.call(null,inst_41422);
var state_41562__$1 = (function (){var statearr_41644 = state_41562;
(statearr_41644[(22)] = inst_41435__$1);

return statearr_41644;
})();
if(inst_41435__$1){
var statearr_41645_41707 = state_41562__$1;
(statearr_41645_41707[(1)] = (10));

} else {
var statearr_41646_41708 = state_41562__$1;
(statearr_41646_41708[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__39116__auto__,c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39117__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39117__auto____0 = (function (){
var statearr_41647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41647[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__39117__auto__);

(statearr_41647[(1)] = (1));

return statearr_41647;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39117__auto____1 = (function (state_41562){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_41562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e41648){if((e41648 instanceof Object)){
var ex__39120__auto__ = e41648;
var statearr_41649_41709 = state_41562;
(statearr_41649_41709[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41710 = state_41562;
state_41562 = G__41710;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__39117__auto__ = function(state_41562){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39117__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39117__auto____1.call(this,state_41562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39117__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39117__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__39206__auto__ = (function (){var statearr_41650 = f__39205__auto__.call(null);
(statearr_41650[(6)] = c__39204__auto__);

return statearr_41650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto__,map__41407,map__41407__$1,opts,before_jsload,on_jsload,reload_dependents,map__41408,map__41408__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__39204__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41713,link){
var map__41714 = p__41713;
var map__41714__$1 = ((((!((map__41714 == null)))?((((map__41714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41714):map__41714);
var file = cljs.core.get.call(null,map__41714__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__41714,map__41714__$1,file){
return (function (p1__41711_SHARP_,p2__41712_SHARP_){
if(cljs.core._EQ_.call(null,p1__41711_SHARP_,p2__41712_SHARP_)){
return p1__41711_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__41714,map__41714__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41717){
var map__41718 = p__41717;
var map__41718__$1 = ((((!((map__41718 == null)))?((((map__41718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41718):map__41718);
var match_length = cljs.core.get.call(null,map__41718__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41718__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41716_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41716_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var G__41721 = arguments.length;
switch (G__41721) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41723_SHARP_,p2__41724_SHARP_){
return cljs.core.assoc.call(null,p1__41723_SHARP_,cljs.core.get.call(null,p2__41724_SHARP_,key),p2__41724_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__41725){
var map__41726 = p__41725;
var map__41726__$1 = ((((!((map__41726 == null)))?((((map__41726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41726):map__41726);
var f_data = map__41726__$1;
var file = cljs.core.get.call(null,map__41726__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41728,p__41729){
var map__41730 = p__41728;
var map__41730__$1 = ((((!((map__41730 == null)))?((((map__41730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41730):map__41730);
var opts = map__41730__$1;
var on_cssload = cljs.core.get.call(null,map__41730__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41731 = p__41729;
var map__41731__$1 = ((((!((map__41731 == null)))?((((map__41731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41731):map__41731);
var files_msg = map__41731__$1;
var files = cljs.core.get.call(null,map__41731__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__41734_41738 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__41735_41739 = null;
var count__41736_41740 = (0);
var i__41737_41741 = (0);
while(true){
if((i__41737_41741 < count__41736_41740)){
var f_41742 = cljs.core._nth.call(null,chunk__41735_41739,i__41737_41741);
figwheel.client.file_reloading.reload_css_file.call(null,f_41742);

var G__41743 = seq__41734_41738;
var G__41744 = chunk__41735_41739;
var G__41745 = count__41736_41740;
var G__41746 = (i__41737_41741 + (1));
seq__41734_41738 = G__41743;
chunk__41735_41739 = G__41744;
count__41736_41740 = G__41745;
i__41737_41741 = G__41746;
continue;
} else {
var temp__4657__auto___41747 = cljs.core.seq.call(null,seq__41734_41738);
if(temp__4657__auto___41747){
var seq__41734_41748__$1 = temp__4657__auto___41747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41734_41748__$1)){
var c__37359__auto___41749 = cljs.core.chunk_first.call(null,seq__41734_41748__$1);
var G__41750 = cljs.core.chunk_rest.call(null,seq__41734_41748__$1);
var G__41751 = c__37359__auto___41749;
var G__41752 = cljs.core.count.call(null,c__37359__auto___41749);
var G__41753 = (0);
seq__41734_41738 = G__41750;
chunk__41735_41739 = G__41751;
count__41736_41740 = G__41752;
i__41737_41741 = G__41753;
continue;
} else {
var f_41754 = cljs.core.first.call(null,seq__41734_41748__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_41754);

var G__41755 = cljs.core.next.call(null,seq__41734_41748__$1);
var G__41756 = null;
var G__41757 = (0);
var G__41758 = (0);
seq__41734_41738 = G__41755;
chunk__41735_41739 = G__41756;
count__41736_41740 = G__41757;
i__41737_41741 = G__41758;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__41730,map__41730__$1,opts,on_cssload,map__41731,map__41731__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__41730,map__41730__$1,opts,on_cssload,map__41731,map__41731__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1517293982534
