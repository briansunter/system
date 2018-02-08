// Compiled by ClojureScript 1.9.908 {}
goog.provide('todomvc.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljsjs.material_ui');
goog.require('todomvc.navigation');
goog.require('cljs_react_material_ui.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('cljs_react_material_ui.icons');
goog.require('reagent.core');
goog.require('todomvc.scenes.add_action');
goog.require('todomvc.routes');
todomvc.views.task_list_item = (function todomvc$views$task_list_item(id){
var task = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"task","task",-1476607993),id], null));
return ((function (task){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.list_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"task-list-item"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword("task","done?","task/done?",-1853689835).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,task)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (task){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","set-status","task/set-status",-203836922),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,task)),cljs.core.not.call(null,new cljs.core.Keyword("task","done?","task/done?",-1853689835).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,task)))], null));
});})(task))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword("action","name","action/name",1127464563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,task))], null)], null);
});
;})(task))
});
todomvc.views.task_list = (function todomvc$views$task_list(){
var task_ids = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"task-ids","task-ids",1110050659)], null));
return ((function (task_ids){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.selectable_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"task-list"], null),(function (){var iter__40654__auto__ = ((function (task_ids){
return (function todomvc$views$task_list_$_iter__52997(s__52998){
return (new cljs.core.LazySeq(null,((function (task_ids){
return (function (){
var s__52998__$1 = s__52998;
while(true){
var temp__6144__auto__ = cljs.core.seq.call(null,s__52998__$1);
if(temp__6144__auto__){
var s__52998__$2 = temp__6144__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52998__$2)){
var c__40652__auto__ = cljs.core.chunk_first.call(null,s__52998__$2);
var size__40653__auto__ = cljs.core.count.call(null,c__40652__auto__);
var b__53000 = cljs.core.chunk_buffer.call(null,size__40653__auto__);
if((function (){var i__52999 = (0);
while(true){
if((i__52999 < size__40653__auto__)){
var task_id = cljs.core._nth.call(null,c__40652__auto__,i__52999);
cljs.core.chunk_append.call(null,b__53000,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.task_list_item,task_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),task_id], null)));

var G__53001 = (i__52999 + (1));
i__52999 = G__53001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53000),todomvc$views$task_list_$_iter__52997.call(null,cljs.core.chunk_rest.call(null,s__52998__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53000),null);
}
} else {
var task_id = cljs.core.first.call(null,s__52998__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.task_list_item,task_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),task_id], null)),todomvc$views$task_list_$_iter__52997.call(null,cljs.core.rest.call(null,s__52998__$2)));
}
} else {
return null;
}
break;
}
});})(task_ids))
,null,null));
});})(task_ids))
;
return iter__40654__auto__.call(null,cljs.core.deref.call(null,task_ids));
})()], null);
});
;})(task_ids))
});
todomvc.views.actions_app_bar = (function todomvc$views$actions_app_bar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.navigation.main_app_bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("todomvc.navigation","title","todomvc.navigation/title",-1049877411),"Actions",new cljs.core.Keyword("todomvc.navigation","left-element","todomvc.navigation/left-element",779361844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.navigation.app_bar_menu_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),todomvc.routes.path_for_page.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882))], null)], null)], null)], null);
});
todomvc.views.home_page = (function todomvc$views$home_page(){
var current_page = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","current-page","nav/current-page",-101479291)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.actions_app_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.task_list], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.floating_action_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"secondary","secondary",-669381460),true,new cljs.core.Keyword(null,"href","href",-793805698),todomvc.routes.path_for_page.call(null,new cljs.core.Keyword(null,"add-action","add-action",-1330871451)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(5),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20),new cljs.core.Keyword(null,"position","position",-2011731912),"fixed"], null)], null),cljs_react_material_ui.icons.content_add.call(null)], null)], null);
});
todomvc.views.panels = (function todomvc$views$panels(panel_name){
var G__53002 = panel_name;
var G__53002__$1 = (((G__53002 instanceof cljs.core.Keyword))?G__53002.fqn:null);
switch (G__53002__$1) {
case "actions":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.home_page], null);

break;
case "add-action":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.scenes.add_action.add_action_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"not found"], null)], null);

}
});
todomvc.views.main_panel = (function todomvc$views$main_panel(){
var active_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","current-page","nav/current-page",-101479291)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.navigation.theme,todomvc.views.panels.call(null,cljs.core.deref.call(null,active_panel))], null);
});

//# sourceMappingURL=views.js.map?rel=1518071921726
