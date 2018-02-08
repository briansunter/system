// Compiled by ClojureScript 1.9.908 {}
goog.provide('todomvc.scenes.add_action');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljsjs.material_ui');
goog.require('cljsjs.material_ui_chip_input');
goog.require('cljs_react_material_ui.reagent');
goog.require('cljs_react_material_ui.icons');
goog.require('todomvc.navigation');
goog.require('todomvc.routes');
goog.require('reagent.core');
todomvc.scenes.add_action.add_action_button = (function todomvc$scenes$add_action$add_action_button(){
var add_action = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.add-action","add-action","ui.add-action/add-action",-1011796263),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("ui.add-action","add-action","ui.add-action/add-action",-1011796263)], null)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"save",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (add_action){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.add-action","save-action","ui.add-action/save-action",22208078),new cljs.core.Keyword("ui.add-action","action-name","ui.add-action/action-name",1785126035).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,add_action)),new cljs.core.Keyword("ui.add-action","tags","ui.add-action/tags",-1735278195).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,todomvc.scenes.add_action.tags))], null));
});})(add_action))
,new cljs.core.Keyword(null,"href","href",-793805698),todomvc.routes.path_for_page.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.call(null,null,new cljs.core.Keyword("ui.add-action","action-name","ui.add-action/action-name",1785126035).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,add_action))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null)], null);
});
todomvc.scenes.add_action.add_action_app_bar = (function todomvc$scenes$add_action$add_action_app_bar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.navigation.main_app_bar,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("todomvc.navigation","title","todomvc.navigation/title",-1049877411),"Add Action",new cljs.core.Keyword("todomvc.navigation","left-element","todomvc.navigation/left-element",779361844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.navigation.app_bar_close_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),todomvc.routes.path_for_page.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882))], null)], null),new cljs.core.Keyword("todomvc.navigation","right-element","todomvc.navigation/right-element",1981759250),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.scenes.add_action.add_action_button], null)], null)], null);
});
todomvc.scenes.add_action.chip_input = reagent.core.adapt_react_class.call(null,MaterialUIChipInput);
todomvc.scenes.add_action.target_value = (function todomvc$scenes$add_action$target_value(tv){
return tv.target.value;
});
todomvc.scenes.add_action.paper_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"z-depth","z-depth",-334122453),(2),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10),new cljs.core.Keyword(null,"padding","padding",1660304693),(10)], null)], null);
todomvc.scenes.add_action.action_tags_input = (function todomvc$scenes$add_action$action_tags_input(props){
var map__52576 = props;
var map__52576__$1 = ((((!((map__52576 == null)))?((((map__52576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52576):map__52576);
var tags = cljs.core.get.call(null,map__52576__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var matching_tags = cljs.core.get.call(null,map__52576__$1,new cljs.core.Keyword(null,"matching-tags","matching-tags",1822958604));
var on_input_update = cljs.core.get.call(null,map__52576__$1,new cljs.core.Keyword(null,"on-input-update","on-input-update",78746968));
var on_add_chip = cljs.core.get.call(null,map__52576__$1,new cljs.core.Keyword(null,"on-add-chip","on-add-chip",624298192));
var on_delete_chip = cljs.core.get.call(null,map__52576__$1,new cljs.core.Keyword(null,"on-delete-chip","on-delete-chip",-1734671046));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.scenes.add_action.chip_input,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"openOnFocus","openOnFocus",-183721789),new cljs.core.Keyword(null,"onRequestAdd","onRequestAdd",-1203010204),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"onRequestDelete","onRequestDelete",1130411472),new cljs.core.Keyword(null,"onUpdateInput","onUpdateInput",-1393930383),new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),new cljs.core.Keyword(null,"hintText","hintText",-1810446561)],[true,on_add_chip,cljs.core.clj__GT_js.call(null,tags),true,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null),on_delete_chip,on_input_update,cljs.core.clj__GT_js.call(null,matching_tags),"Enter tags to describe the action here"])], null);
});
todomvc.scenes.add_action.add_action_panel = (function todomvc$scenes$add_action$add_action_panel(){
var add_action = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.add-action","add-action","ui.add-action/add-action",-1011796263),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("ui.add-action","add-action","ui.add-action/add-action",-1011796263)], null)], null));
var all_tags = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.add-action","all-tags","ui.add-action/all-tags",-14317075)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.scenes.add_action.add_action_app_bar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,all_tags))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.paper,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"z-depth","z-depth",-334122453),(2),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.text_field,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"floating-label-text","floating-label-text",740415797),"Action Name",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("ui.add-action","action-name","ui.add-action/action-name",1785126035).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,add_action)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (add_action,all_tags){
return (function (p1__52578_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.add-action","update-name","ui.add-action/update-name",-1933137116),todomvc.scenes.add_action.target_value.call(null,p1__52578_SHARP_)], null));
});})(add_action,all_tags))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(26),new cljs.core.Keyword(null,"multi-line","multi-line",240640676),true,new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.scenes.add_action.action_tags_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.map.call(null,new cljs.core.Keyword("ui.add-action","tag","ui.add-action/tag",-1510264579),new cljs.core.Keyword("ui.add-action","tags","ui.add-action/tags",-1735278195).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,add_action))),new cljs.core.Keyword(null,"matching-tags","matching-tags",1822958604),cljs.core.deref.call(null,all_tags),new cljs.core.Keyword(null,"on-add-chip","on-add-chip",624298192),((function (add_action,all_tags){
return (function (p1__52580_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.add-action","add-tag","ui.add-action/add-tag",-716225407),cljs.core.keyword.call(null,p1__52580_SHARP_)], null));
});})(add_action,all_tags))
,new cljs.core.Keyword(null,"on-delete-chip","on-delete-chip",-1734671046),((function (add_action,all_tags){
return (function (p1__52581_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.add-action","remove-tag","ui.add-action/remove-tag",404998310),cljs.core.keyword.call(null,p1__52581_SHARP_)], null));
});})(add_action,all_tags))
], null)], null)], null)], null);
});

//# sourceMappingURL=add_action.js.map?rel=1518070861064
