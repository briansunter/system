// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__37696__auto__ = [];
var len__37689__auto___41897 = arguments.length;
var i__37690__auto___41898 = (0);
while(true){
if((i__37690__auto___41898 < len__37689__auto___41897)){
args__37696__auto__.push((arguments[i__37690__auto___41898]));

var G__41899 = (i__37690__auto___41898 + (1));
i__37690__auto___41898 = G__41899;
continue;
} else {
}
break;
}

var argseq__37697__auto__ = ((((2) < args__37696__auto__.length))?(new cljs.core.IndexedSeq(args__37696__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37697__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__41889_41900 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__41890_41901 = null;
var count__41891_41902 = (0);
var i__41892_41903 = (0);
while(true){
if((i__41892_41903 < count__41891_41902)){
var k_41904 = cljs.core._nth.call(null,chunk__41890_41901,i__41892_41903);
e.setAttribute(cljs.core.name.call(null,k_41904),cljs.core.get.call(null,attrs,k_41904));

var G__41905 = seq__41889_41900;
var G__41906 = chunk__41890_41901;
var G__41907 = count__41891_41902;
var G__41908 = (i__41892_41903 + (1));
seq__41889_41900 = G__41905;
chunk__41890_41901 = G__41906;
count__41891_41902 = G__41907;
i__41892_41903 = G__41908;
continue;
} else {
var temp__4657__auto___41909 = cljs.core.seq.call(null,seq__41889_41900);
if(temp__4657__auto___41909){
var seq__41889_41910__$1 = temp__4657__auto___41909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41889_41910__$1)){
var c__37359__auto___41911 = cljs.core.chunk_first.call(null,seq__41889_41910__$1);
var G__41912 = cljs.core.chunk_rest.call(null,seq__41889_41910__$1);
var G__41913 = c__37359__auto___41911;
var G__41914 = cljs.core.count.call(null,c__37359__auto___41911);
var G__41915 = (0);
seq__41889_41900 = G__41912;
chunk__41890_41901 = G__41913;
count__41891_41902 = G__41914;
i__41892_41903 = G__41915;
continue;
} else {
var k_41916 = cljs.core.first.call(null,seq__41889_41910__$1);
e.setAttribute(cljs.core.name.call(null,k_41916),cljs.core.get.call(null,attrs,k_41916));

var G__41917 = cljs.core.next.call(null,seq__41889_41910__$1);
var G__41918 = null;
var G__41919 = (0);
var G__41920 = (0);
seq__41889_41900 = G__41917;
chunk__41890_41901 = G__41918;
count__41891_41902 = G__41919;
i__41892_41903 = G__41920;
continue;
}
} else {
}
}
break;
}

var seq__41893_41921 = cljs.core.seq.call(null,children);
var chunk__41894_41922 = null;
var count__41895_41923 = (0);
var i__41896_41924 = (0);
while(true){
if((i__41896_41924 < count__41895_41923)){
var ch_41925 = cljs.core._nth.call(null,chunk__41894_41922,i__41896_41924);
e.appendChild(ch_41925);

var G__41926 = seq__41893_41921;
var G__41927 = chunk__41894_41922;
var G__41928 = count__41895_41923;
var G__41929 = (i__41896_41924 + (1));
seq__41893_41921 = G__41926;
chunk__41894_41922 = G__41927;
count__41895_41923 = G__41928;
i__41896_41924 = G__41929;
continue;
} else {
var temp__4657__auto___41930 = cljs.core.seq.call(null,seq__41893_41921);
if(temp__4657__auto___41930){
var seq__41893_41931__$1 = temp__4657__auto___41930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41893_41931__$1)){
var c__37359__auto___41932 = cljs.core.chunk_first.call(null,seq__41893_41931__$1);
var G__41933 = cljs.core.chunk_rest.call(null,seq__41893_41931__$1);
var G__41934 = c__37359__auto___41932;
var G__41935 = cljs.core.count.call(null,c__37359__auto___41932);
var G__41936 = (0);
seq__41893_41921 = G__41933;
chunk__41894_41922 = G__41934;
count__41895_41923 = G__41935;
i__41896_41924 = G__41936;
continue;
} else {
var ch_41937 = cljs.core.first.call(null,seq__41893_41931__$1);
e.appendChild(ch_41937);

var G__41938 = cljs.core.next.call(null,seq__41893_41931__$1);
var G__41939 = null;
var G__41940 = (0);
var G__41941 = (0);
seq__41893_41921 = G__41938;
chunk__41894_41922 = G__41939;
count__41895_41923 = G__41940;
i__41896_41924 = G__41941;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq41886){
var G__41887 = cljs.core.first.call(null,seq41886);
var seq41886__$1 = cljs.core.next.call(null,seq41886);
var G__41888 = cljs.core.first.call(null,seq41886__$1);
var seq41886__$2 = cljs.core.next.call(null,seq41886__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__41887,G__41888,seq41886__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__37475__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__37476__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__37477__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__37478__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__37479__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__37475__auto__,prefer_table__37476__auto__,method_cache__37477__auto__,cached_hierarchy__37478__auto__,hierarchy__37479__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__37475__auto__,prefer_table__37476__auto__,method_cache__37477__auto__,cached_hierarchy__37478__auto__,hierarchy__37479__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__37479__auto__,method_table__37475__auto__,prefer_table__37476__auto__,method_cache__37477__auto__,cached_hierarchy__37478__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_41942 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;"].join('')], null));
el_41942.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_41942.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_41942.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_41942);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__41943,st_map){
var map__41944 = p__41943;
var map__41944__$1 = ((((!((map__41944 == null)))?((((map__41944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41944):map__41944);
var container_el = cljs.core.get.call(null,map__41944__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__41944,map__41944__$1,container_el){
return (function (p__41946){
var vec__41947 = p__41946;
var k = cljs.core.nth.call(null,vec__41947,(0),null);
var v = cljs.core.nth.call(null,vec__41947,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__41944,map__41944__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__41950,dom_str){
var map__41951 = p__41950;
var map__41951__$1 = ((((!((map__41951 == null)))?((((map__41951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41951):map__41951);
var c = map__41951__$1;
var content_area_el = cljs.core.get.call(null,map__41951__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__41953){
var map__41954 = p__41953;
var map__41954__$1 = ((((!((map__41954 == null)))?((((map__41954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41954):map__41954);
var content_area_el = cljs.core.get.call(null,map__41954__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__39204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto__){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto__){
return (function (state_41971){
var state_val_41972 = (state_41971[(1)]);
if((state_val_41972 === (1))){
var inst_41956 = (state_41971[(7)]);
var inst_41956__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_41957 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_41958 = ["10px","10px","100%","68px","1.0"];
var inst_41959 = cljs.core.PersistentHashMap.fromArrays(inst_41957,inst_41958);
var inst_41960 = cljs.core.merge.call(null,inst_41959,style);
var inst_41961 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41956__$1,inst_41960);
var inst_41962 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_41956__$1,msg);
var inst_41963 = cljs.core.async.timeout.call(null,(300));
var state_41971__$1 = (function (){var statearr_41973 = state_41971;
(statearr_41973[(8)] = inst_41962);

(statearr_41973[(9)] = inst_41961);

(statearr_41973[(7)] = inst_41956__$1);

return statearr_41973;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41971__$1,(2),inst_41963);
} else {
if((state_val_41972 === (2))){
var inst_41956 = (state_41971[(7)]);
var inst_41965 = (state_41971[(2)]);
var inst_41966 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_41967 = ["auto"];
var inst_41968 = cljs.core.PersistentHashMap.fromArrays(inst_41966,inst_41967);
var inst_41969 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41956,inst_41968);
var state_41971__$1 = (function (){var statearr_41974 = state_41971;
(statearr_41974[(10)] = inst_41965);

return statearr_41974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41971__$1,inst_41969);
} else {
return null;
}
}
});})(c__39204__auto__))
;
return ((function (switch__39116__auto__,c__39204__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__39117__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__39117__auto____0 = (function (){
var statearr_41975 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41975[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__39117__auto__);

(statearr_41975[(1)] = (1));

return statearr_41975;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__39117__auto____1 = (function (state_41971){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_41971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e41976){if((e41976 instanceof Object)){
var ex__39120__auto__ = e41976;
var statearr_41977_41979 = state_41971;
(statearr_41977_41979[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41980 = state_41971;
state_41971 = G__41980;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__39117__auto__ = function(state_41971){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__39117__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__39117__auto____1.call(this,state_41971);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__39117__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__39117__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto__))
})();
var state__39206__auto__ = (function (){var statearr_41978 = f__39205__auto__.call(null);
(statearr_41978[(6)] = c__39204__auto__);

return statearr_41978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto__))
);

return c__39204__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__41982 = arguments.length;
switch (G__41982) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__41984){
var map__41985 = p__41984;
var map__41985__$1 = ((((!((map__41985 == null)))?((((map__41985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41985):map__41985);
var file = cljs.core.get.call(null,map__41985__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41985__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41985__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__36520__auto__ = file;
if(cljs.core.truth_(or__36520__auto__)){
return or__36520__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__41987){
var vec__41988 = p__41987;
var typ = cljs.core.nth.call(null,vec__41988,(0),null);
var line_number = cljs.core.nth.call(null,vec__41988,(1),null);
var line = cljs.core.nth.call(null,vec__41988,(2),null);
var pred__41991 = cljs.core._EQ_;
var expr__41992 = typ;
if(cljs.core.truth_(pred__41991.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__41992))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__41991.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__41992))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__41991.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__41992))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__41994_SHARP_){
return cljs.core.update_in.call(null,p1__41994_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__41997){
var map__41998 = p__41997;
var map__41998__$1 = ((((!((map__41998 == null)))?((((map__41998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41998):map__41998);
var exception = map__41998__$1;
var failed_compiling = cljs.core.get.call(null,map__41998__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__41998__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__41998__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__41998__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__41998__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41998__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41998__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__41998__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__41998__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__36508__auto__ = file;
if(cljs.core.truth_(and__36508__auto__)){
return line;
} else {
return and__36508__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__41998,map__41998__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__41995_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41995_SHARP_),"</div>"].join('');
});})(last_message,map__41998,map__41998__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__41998,map__41998__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__41996_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__41996_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__41996_SHARP_)))].join('');
});})(last_message,map__41998,map__41998__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__42000){
var map__42001 = p__42000;
var map__42001__$1 = ((((!((map__42001 == null)))?((((map__42001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42001):map__42001);
var file = cljs.core.get.call(null,map__42001__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42001__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42001__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__42004 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__42004__$1 = ((((!((map__42004 == null)))?((((map__42004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42004):map__42004);
var head = cljs.core.get.call(null,map__42004__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__42004__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__42004__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__42004__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__42004__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42004__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42004__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__42007){
var map__42008 = p__42007;
var map__42008__$1 = ((((!((map__42008 == null)))?((((map__42008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42008):map__42008);
var warning_data = map__42008__$1;
var file = cljs.core.get.call(null,map__42008__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42008__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42008__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__42008__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__42008__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__36508__auto__ = file;
if(cljs.core.truth_(and__36508__auto__)){
return line;
} else {
return and__36508__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__42008,map__42008__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__42006_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42006_SHARP_),"</div>"].join('');
});})(last_message,map__42008,map__42008__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__42010 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__42010__$1 = ((((!((map__42010 == null)))?((((map__42010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42010):map__42010);
var head = cljs.core.get.call(null,map__42010__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__42010__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__42010__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__42010__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__42010__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42010__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42010__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__42012){
var map__42013 = p__42012;
var map__42013__$1 = ((((!((map__42013 == null)))?((((map__42013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42013):map__42013);
var warning_data = map__42013__$1;
var message = cljs.core.get.call(null,map__42013__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__42013__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42013__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42013__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42015 = message;
var G__42015__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42015)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42015);
var G__42015__$2 = (cljs.core.truth_((function (){var and__36508__auto__ = line;
if(cljs.core.truth_(and__36508__auto__)){
return column;
} else {
return and__36508__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42015__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__42015__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42015__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__42015__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__42016){
var map__42017 = p__42016;
var map__42017__$1 = ((((!((map__42017 == null)))?((((map__42017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42017):map__42017);
var warning_data = map__42017__$1;
var message = cljs.core.get.call(null,map__42017__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__42017__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42017__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42017__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__42019 = figwheel.client.heads_up.ensure_container.call(null);
var map__42019__$1 = ((((!((map__42019 == null)))?((((map__42019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42019):map__42019);
var content_area_el = cljs.core.get.call(null,map__42019__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__39204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto__){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto__){
return (function (state_42038){
var state_val_42039 = (state_42038[(1)]);
if((state_val_42039 === (1))){
var inst_42021 = (state_42038[(7)]);
var inst_42021__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_42022 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_42023 = ["0.0"];
var inst_42024 = cljs.core.PersistentHashMap.fromArrays(inst_42022,inst_42023);
var inst_42025 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_42021__$1,inst_42024);
var inst_42026 = cljs.core.async.timeout.call(null,(300));
var state_42038__$1 = (function (){var statearr_42040 = state_42038;
(statearr_42040[(7)] = inst_42021__$1);

(statearr_42040[(8)] = inst_42025);

return statearr_42040;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42038__$1,(2),inst_42026);
} else {
if((state_val_42039 === (2))){
var inst_42021 = (state_42038[(7)]);
var inst_42028 = (state_42038[(2)]);
var inst_42029 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_42030 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_42031 = cljs.core.PersistentHashMap.fromArrays(inst_42029,inst_42030);
var inst_42032 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_42021,inst_42031);
var inst_42033 = cljs.core.async.timeout.call(null,(200));
var state_42038__$1 = (function (){var statearr_42041 = state_42038;
(statearr_42041[(9)] = inst_42032);

(statearr_42041[(10)] = inst_42028);

return statearr_42041;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42038__$1,(3),inst_42033);
} else {
if((state_val_42039 === (3))){
var inst_42021 = (state_42038[(7)]);
var inst_42035 = (state_42038[(2)]);
var inst_42036 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_42021,"");
var state_42038__$1 = (function (){var statearr_42042 = state_42038;
(statearr_42042[(11)] = inst_42035);

return statearr_42042;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42038__$1,inst_42036);
} else {
return null;
}
}
}
});})(c__39204__auto__))
;
return ((function (switch__39116__auto__,c__39204__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__39117__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__39117__auto____0 = (function (){
var statearr_42043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42043[(0)] = figwheel$client$heads_up$clear_$_state_machine__39117__auto__);

(statearr_42043[(1)] = (1));

return statearr_42043;
});
var figwheel$client$heads_up$clear_$_state_machine__39117__auto____1 = (function (state_42038){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_42038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e42044){if((e42044 instanceof Object)){
var ex__39120__auto__ = e42044;
var statearr_42045_42047 = state_42038;
(statearr_42045_42047[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42048 = state_42038;
state_42038 = G__42048;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__39117__auto__ = function(state_42038){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__39117__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__39117__auto____1.call(this,state_42038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__39117__auto____0;
figwheel$client$heads_up$clear_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__39117__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto__))
})();
var state__39206__auto__ = (function (){var statearr_42046 = f__39205__auto__.call(null);
(statearr_42046[(6)] = c__39204__auto__);

return statearr_42046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto__))
);

return c__39204__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__39204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto__){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto__){
return (function (state_42059){
var state_val_42060 = (state_42059[(1)]);
if((state_val_42060 === (1))){
var inst_42049 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_42059__$1 = state_42059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42059__$1,(2),inst_42049);
} else {
if((state_val_42060 === (2))){
var inst_42051 = (state_42059[(2)]);
var inst_42052 = cljs.core.async.timeout.call(null,(400));
var state_42059__$1 = (function (){var statearr_42061 = state_42059;
(statearr_42061[(7)] = inst_42051);

return statearr_42061;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42059__$1,(3),inst_42052);
} else {
if((state_val_42060 === (3))){
var inst_42054 = (state_42059[(2)]);
var inst_42055 = figwheel.client.heads_up.clear.call(null);
var state_42059__$1 = (function (){var statearr_42062 = state_42059;
(statearr_42062[(8)] = inst_42054);

return statearr_42062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42059__$1,(4),inst_42055);
} else {
if((state_val_42060 === (4))){
var inst_42057 = (state_42059[(2)]);
var state_42059__$1 = state_42059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42059__$1,inst_42057);
} else {
return null;
}
}
}
}
});})(c__39204__auto__))
;
return ((function (switch__39116__auto__,c__39204__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__39117__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__39117__auto____0 = (function (){
var statearr_42063 = [null,null,null,null,null,null,null,null,null];
(statearr_42063[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__39117__auto__);

(statearr_42063[(1)] = (1));

return statearr_42063;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__39117__auto____1 = (function (state_42059){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_42059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e42064){if((e42064 instanceof Object)){
var ex__39120__auto__ = e42064;
var statearr_42065_42067 = state_42059;
(statearr_42065_42067[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42068 = state_42059;
state_42059 = G__42068;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__39117__auto__ = function(state_42059){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__39117__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__39117__auto____1.call(this,state_42059);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__39117__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__39117__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto__))
})();
var state__39206__auto__ = (function (){var statearr_42066 = f__39205__auto__.call(null);
(statearr_42066[(6)] = c__39204__auto__);

return statearr_42066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto__))
);

return c__39204__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1517293982882
