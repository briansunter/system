// Compiled by ClojureScript 1.9.908 {}
goog.provide('todomvc.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.core');
goog.require('todomvc.db');
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return todomvc.db.initial_db;
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("nav","set-current-page","nav/set-current-page",-1047211546),(function (_,p__55555){
var vec__55556 = p__55555;
var ___$1 = cljs.core.nth.call(null,vec__55556,(0),null);
var page = cljs.core.nth.call(null,vec__55556,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("nav","current-page","nav/current-page",-101479291)], null),new cljs.core.Keyword("nav","page","nav/page",849241970),page], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("ui.add-action","update-name","ui.add-action/update-name",-1933137116),(function (_,p__55559){
var vec__55560 = p__55559;
var ___$1 = cljs.core.nth.call(null,vec__55560,(0),null);
var name = cljs.core.nth.call(null,vec__55560,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("ui.add-action","action-name","ui.add-action/action-name",1785126035)], null),new cljs.core.Keyword("ui.add-action","action-name","ui.add-action/action-name",1785126035),name], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("ui.add-action","update-name","ui.add-action/update-name",-1933137116),(function (_,p__55563){
var vec__55564 = p__55563;
var ___$1 = cljs.core.nth.call(null,vec__55564,(0),null);
var name = cljs.core.nth.call(null,vec__55564,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("ui.add-action","action-name","ui.add-action/action-name",1785126035)], null),new cljs.core.Keyword("ui.add-action","action-name","ui.add-action/action-name",1785126035),name], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("ui.add-action","add-tag","ui.add-action/add-tag",-716225407),(function (_,p__55567){
var vec__55568 = p__55567;
var ___$1 = cljs.core.nth.call(null,vec__55568,(0),null);
var name = cljs.core.nth.call(null,vec__55568,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui.add-action","tag","ui.add-action/tag",-1510264579),name], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("ui.add-action","remove-tag","ui.add-action/remove-tag",404998310),(function (_,p__55571){
var vec__55572 = p__55571;
var ___$1 = cljs.core.nth.call(null,vec__55572,(0),null);
var name = cljs.core.nth.call(null,vec__55572,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.add-action","tag","ui.add-action/tag",-1510264579),name], null)], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("ui.add-action","add-action","ui.add-action/add-action",-1011796263),(function (_,p__55575){
var vec__55576 = p__55575;
var ___$1 = cljs.core.nth.call(null,vec__55576,(0),null);
var name = cljs.core.nth.call(null,vec__55576,(1),null);
var tags = cljs.core.nth.call(null,vec__55576,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("action","id","action/id",241708030),(-1),new cljs.core.Keyword("action","name","action/name",1127464563),name,new cljs.core.Keyword("action","tags","action/tags",-834260149),cljs.core.map.call(null,((function (vec__55576,___$1,name,tags){
return (function (x){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tags","tag","tags/tag",-1295218014),x], null);
});})(vec__55576,___$1,name,tags))
,tags),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","task","type/task",-1539067719)], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("ui.add-action","save-action","ui.add-action/save-action",22208078),(function (_,p__55579){
var vec__55580 = p__55579;
var ___$1 = cljs.core.nth.call(null,vec__55580,(0),null);
var name = cljs.core.nth.call(null,vec__55580,(1),null);
var tags = cljs.core.nth.call(null,vec__55580,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("action","id","action/id",241708030),(-1),new cljs.core.Keyword("action","name","action/name",1127464563),name,new cljs.core.Keyword("action","tags","action/tags",-834260149),cljs.core.map.call(null,((function (vec__55580,___$1,name,tags){
return (function (x){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tags","tag","tags/tag",-1295218014),x], null);
});})(vec__55580,___$1,name,tags))
,tags),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","task","type/task",-1539067719)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("ui.add-action","action-name","ui.add-action/action-name",1785126035)], null)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1517813127613
