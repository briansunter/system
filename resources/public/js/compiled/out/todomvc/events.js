// Compiled by ClojureScript 1.9.908 {}
goog.provide('todomvc.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.core');
goog.require('todomvc.db');
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return todomvc.db.initial_db;
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("nav","set-current-page","nav/set-current-page",-1047211546),(function (_,p__53008){
var vec__53009 = p__53008;
var ___$1 = cljs.core.nth.call(null,vec__53009,(0),null);
var page = cljs.core.nth.call(null,vec__53009,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("nav","current-page","nav/current-page",-101479291)], null),new cljs.core.Keyword("nav","page","nav/page",849241970),page], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("ui.add-action","update-name","ui.add-action/update-name",-1933137116),(function (_,p__53012){
var vec__53013 = p__53012;
var ___$1 = cljs.core.nth.call(null,vec__53013,(0),null);
var name = cljs.core.nth.call(null,vec__53013,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("ui.add-action","add-action","ui.add-action/add-action",-1011796263)], null),new cljs.core.Keyword("ui.add-action","action-name","ui.add-action/action-name",1785126035),name], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("ui.add-action","add-tag","ui.add-action/add-tag",-716225407),(function (_,p__53016){
var vec__53017 = p__53016;
var ___$1 = cljs.core.nth.call(null,vec__53017,(0),null);
var name = cljs.core.nth.call(null,vec__53017,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("ui.add-action","add-action","ui.add-action/add-action",-1011796263),new cljs.core.Keyword("ui.add-action","tags","ui.add-action/tags",-1735278195),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui.add-action","tag","ui.add-action/tag",-1510264579),name], null)], null)], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("ui.add-action","remove-tag","ui.add-action/remove-tag",404998310),(function (_,p__53020){
var vec__53021 = p__53020;
var ___$1 = cljs.core.nth.call(null,vec__53021,(0),null);
var name = cljs.core.nth.call(null,vec__53021,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.add-action","tag","ui.add-action/tag",-1510264579),name], null)], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("ui.add-action","add-action","ui.add-action/add-action",-1011796263),(function (_,p__53024){
var vec__53025 = p__53024;
var ___$1 = cljs.core.nth.call(null,vec__53025,(0),null);
var name = cljs.core.nth.call(null,vec__53025,(1),null);
var tags = cljs.core.nth.call(null,vec__53025,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("action","id","action/id",241708030),(-1),new cljs.core.Keyword("action","name","action/name",1127464563),name,new cljs.core.Keyword("action","tags","action/tags",-834260149),cljs.core.map.call(null,((function (vec__53025,___$1,name,tags){
return (function (p__53028){
var map__53029 = p__53028;
var map__53029__$1 = ((((!((map__53029 == null)))?((((map__53029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53029.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53029):map__53029);
var tag = cljs.core.get.call(null,map__53029__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tags","tag","tags/tag",-1295218014),tag], null);
});})(vec__53025,___$1,name,tags))
,tags),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","task","type/task",-1539067719)], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("ui.add-action","save-action","ui.add-action/save-action",22208078),(function (_,p__53031){
var vec__53032 = p__53031;
var ___$1 = cljs.core.nth.call(null,vec__53032,(0),null);
var name = cljs.core.nth.call(null,vec__53032,(1),null);
var tags = cljs.core.nth.call(null,vec__53032,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("action","id","action/id",241708030),(-1),new cljs.core.Keyword("action","name","action/name",1127464563),name,new cljs.core.Keyword("action","tags","action/tags",-834260149),cljs.core.map.call(null,((function (vec__53032,___$1,name,tags){
return (function (x){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tags","tag","tags/tag",-1295218014),new cljs.core.Keyword("ui.add-action","tag","ui.add-action/tag",-1510264579).cljs$core$IFn$_invoke$arity$1(x)], null);
});})(vec__53032,___$1,name,tags))
,tags),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","task","type/task",-1539067719)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("ui.add-action","add-action","ui.add-action/add-action",-1011796263),new cljs.core.Keyword("ui.add-action","action-name","ui.add-action/action-name",1785126035),"",new cljs.core.Keyword("ui.add-action","tags","ui.add-action/tags",-1735278195),cljs.core.PersistentVector.EMPTY], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1518071921778
