// Compiled by ClojureScript 1.9.908 {}
goog.provide('todomvc.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljsjs.material_ui');
goog.require('cljs_react_material_ui.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('cljs_react_material_ui.icons');
goog.require('reagent.core');
todomvc.views.create_task_panel = (function todomvc$views$create_task_panel(){
var form_id = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("create-todo-form","id","create-todo-form/id",801714138)], null));
var form = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-todo-form","create-todo-form",-1017451173),cljs.core.deref.call(null,form_id)], null));
return ((function (form_id,form){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"create-task-panel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("create-todo-form","title","create-todo-form/title",-1486760831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (form_id,form){
return (function (p1__44850_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("create-todo-form","set-title","create-todo-form/set-title",-636384906),cljs.core.deref.call(null,form_id),p1__44850_SHARP_.target.value], null));
});})(form_id,form))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"create-task-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (form_id,form){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("create-todo-form","create-todo","create-todo-form/create-todo",1863578618),cljs.core.deref.call(null,form_id),new cljs.core.Keyword("create-todo-form","title","create-todo-form/title",-1486760831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form))], null));
});})(form_id,form))
], null),"Create"], null)], null);
});
;})(form_id,form))
});
todomvc.views.task_list_item = (function todomvc$views$task_list_item(id){
var task = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"task","task",-1476607993),id], null));
return ((function (task){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"task-list-item"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword("task","done?","task/done?",-1853689835).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,task)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (task){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","set-status","task/set-status",-203836922),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,task)),cljs.core.not.call(null,new cljs.core.Keyword("task","done?","task/done?",-1853689835).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,task)))], null));
});})(task))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword("task","title","task/title",628775788).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,task))], null)], null);
});
;})(task))
});
todomvc.views.task_list = (function todomvc$views$task_list(){
var task_ids = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"task-ids","task-ids",1110050659)], null));
return ((function (task_ids){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"task-list"], null),(function (){var iter__37480__auto__ = ((function (task_ids){
return (function todomvc$views$task_list_$_iter__44851(s__44852){
return (new cljs.core.LazySeq(null,((function (task_ids){
return (function (){
var s__44852__$1 = s__44852;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44852__$1);
if(temp__4657__auto__){
var s__44852__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44852__$2)){
var c__37478__auto__ = cljs.core.chunk_first.call(null,s__44852__$2);
var size__37479__auto__ = cljs.core.count.call(null,c__37478__auto__);
var b__44854 = cljs.core.chunk_buffer.call(null,size__37479__auto__);
if((function (){var i__44853 = (0);
while(true){
if((i__44853 < size__37479__auto__)){
var task_id = cljs.core._nth.call(null,c__37478__auto__,i__44853);
cljs.core.chunk_append.call(null,b__44854,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.task_list_item,task_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),task_id], null)));

var G__44855 = (i__44853 + (1));
i__44853 = G__44855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44854),todomvc$views$task_list_$_iter__44851.call(null,cljs.core.chunk_rest.call(null,s__44852__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44854),null);
}
} else {
var task_id = cljs.core.first.call(null,s__44852__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.task_list_item,task_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),task_id], null)),todomvc$views$task_list_$_iter__44851.call(null,cljs.core.rest.call(null,s__44852__$2)));
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
return iter__37480__auto__.call(null,cljs.core.deref.call(null,task_ids));
})()], null);
});
;})(task_ids))
});
todomvc.views.list = (function todomvc$views$list(){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.selectable_list,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,todomvc.views.list_item_selected),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event,value){
return cljs.core.reset_BANG_.call(null,todomvc.views.list_item_selected,value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.subheader,cljs.core.PersistentArrayMap.EMPTY,"Selectable Contacts"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.list_item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(1),new cljs.core.Keyword(null,"primary-text","primary-text",146474209),"Brendan Lim",new cljs.core.Keyword(null,"nested-items","nested-items",1947364652),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.list_item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(2),new cljs.core.Keyword(null,"key","key",-1516042587),(8),new cljs.core.Keyword(null,"primary-text","primary-text",146474209),"Grace Ng"], null)], null))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.list_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(3),new cljs.core.Keyword(null,"primary-text","primary-text",146474209),"Kerem Suer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.list_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(4),new cljs.core.Keyword(null,"primary-text","primary-text",146474209),"Eric Hoffman"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.list_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(5),new cljs.core.Keyword(null,"primary-text","primary-text",146474209),"Raquel Parrado"], null)], null)], null);
});
});
todomvc.views.home_page = (function todomvc$views$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-color","text-color",1728708298),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"green600","green600",748005461))], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.app_bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Title",new cljs.core.Keyword(null,"icon-element-right","icon-element-right",-2138850585),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.icon_button,cljs_react_material_ui.icons.action_account_balance_wallet.call(null)], null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.paper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-color","text-color",1728708298),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"blue200","blue200",650511877))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.raised_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Blue button"], null)], null)], null),cljs_react_material_ui.icons.action_home.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"grey600","grey600",-289870603))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.raised_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Click me",new cljs.core.Keyword(null,"icon","icon",1679606541),cljs_react_material_ui.icons.social_group.call(null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.println.call(null,"clicked");
})], null)], null)], null)], null)], null);
});
todomvc.views.main_panel = (function todomvc$views$main_panel(){
return todomvc.views.home_page;
});

//# sourceMappingURL=views.js.map?rel=1517292514609
