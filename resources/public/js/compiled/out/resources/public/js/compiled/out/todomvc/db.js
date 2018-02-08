// Compiled by ClojureScript 1.9.908 {}
goog.provide('todomvc.db');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('re_posh.core');
todomvc.db.schema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("tags","tag","tags/tag",-1295218014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("ui.add-action","tag","ui.add-action/tag",-1510264579),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null);
todomvc.db.initial_db = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("nav","current-page","nav/current-page",-101479291),new cljs.core.Keyword("nav","page","nav/page",849241970),new cljs.core.Keyword("nav.page","home","nav.page/home",1703176441)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("ui.add-action","action-name","ui.add-action/action-name",1785126035),new cljs.core.Keyword("ui.add-action","action-name","ui.add-action/action-name",1785126035),"Test"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("ui.add-action","tags","ui.add-action/tags",-1735278195),new cljs.core.Keyword("ui.add-action","tags","ui.add-action/tags",-1735278195),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui.add-action","tag","ui.add-action/tag",-1510264579),new cljs.core.Keyword(null,"foo","foo",1268894036)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui.add-action","tag","ui.add-action/tag",-1510264579),new cljs.core.Keyword(null,"bar","bar",-1386246584)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tags","tag","tags/tag",-1295218014),"fee"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","create-todo-form","type/create-todo-form",-1005495771),new cljs.core.Keyword("create-todo-form","title","create-todo-form/title",-1486760831),"",new cljs.core.Keyword("create-todo-form","description","create-todo-form/description",610557882),""], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-2),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","task","type/task",-1539067719),new cljs.core.Keyword("action","name","action/name",1127464563),"Learn Clojure a little bit",new cljs.core.Keyword("task","description","task/description",-1431594219),"Just learn it",new cljs.core.Keyword("action","tags","action/tags",-834260149),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tags","tag","tags/tag",-1295218014),new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","tag","type/tag",-1295239357)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tags","tag","tags/tag",-1295218014),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","tag","type/tag",-1295239357),new cljs.core.Keyword(null,"bar","bar",-1386246584)], null)], null),new cljs.core.Keyword("task","done?","task/done?",-1853689835),false], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-3),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","task","type/task",-1539067719),new cljs.core.Keyword("action","name","action/name",1127464563),"Have a coffe",new cljs.core.Keyword("task","description","task/description",-1431594219),"Just relax",new cljs.core.Keyword("task","done?","task/done?",-1853689835),false], null)], null);
if(typeof todomvc.db.conn !== 'undefined'){
} else {
todomvc.db.conn = datascript.core.conn_from_datoms.call(null,cljs.core.PersistentArrayMap.EMPTY,todomvc.db.schema);
}
re_posh.core.connect_BANG_.call(null,todomvc.db.conn);
datascript.core.q.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?n","?n",-2053238410,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","tag","type/tag",-1295239357),new cljs.core.Symbol(null,"?n","?n",-2053238410,null)], null)], null),cljs.core.deref.call(null,todomvc.db.conn));

//# sourceMappingURL=db.js.map?rel=1517985855895
