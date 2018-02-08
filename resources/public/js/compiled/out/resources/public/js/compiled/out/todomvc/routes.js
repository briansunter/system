// Compiled by ClojureScript 1.9.908 {}
goog.provide('todomvc.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('accountant.core');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('todomvc.utils');
goog.require('bidi.bidi');
todomvc.routes.deck_routes = new cljs.core.PersistentArrayMap(null, 4, ["",new cljs.core.Keyword(null,"actions","actions",-812656882),"/",cljs.core.PersistentArrayMap.createAsIfByAssoc(["",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-id","action-id",-1727958578),"/actions"], null),new cljs.core.Keyword(null,"deck-cards","deck-cards",207060116),true,new cljs.core.Keyword(null,"not-found","not-found",-629079980)]),"/add",new cljs.core.Keyword(null,"add-action","add-action",-1330871451),true,new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
todomvc.routes.routes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 5, ["",new cljs.core.Keyword(null,"home","home",-74557309),"feed",new cljs.core.Keyword(null,"feed","feed",-1566486205),"cards",new cljs.core.PersistentArrayMap(null, 3, ["",new cljs.core.Keyword(null,"cards","cards",169174038),"/add",new cljs.core.Keyword(null,"add-card","add-card",-858902935),true,new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null),"decks",todomvc.routes.deck_routes,true,new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null),true,new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
todomvc.routes.path_for_page = cljs.core.partial.call(null,bidi.bidi.path_for,todomvc.routes.routes);
todomvc.routes.set_page_BANG_ = (function todomvc$routes$set_page_BANG_(match){
var current_page = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(match);
var route_params = new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(match);
var query_params = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(match);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","set-current-page","nav/set-current-page",-1047211546),current_page], null));
});
todomvc.routes.app_routes = (function todomvc$routes$app_routes(){
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (p){
var map__50728 = todomvc.utils.parse_path.call(null,p);
var map__50728__$1 = ((((!((map__50728 == null)))?((((map__50728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50728):map__50728);
var path = cljs.core.get.call(null,map__50728__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var params = cljs.core.get.call(null,map__50728__$1,new cljs.core.Keyword(null,"params","params",710516235));
var match = bidi.bidi.match_route.call(null,todomvc.routes.routes,path);
return todomvc.routes.set_page_BANG_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),params], null),match));
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$.call(null,bidi.bidi.match_route.call(null,todomvc.routes.routes,path));
})], null));

return accountant.core.dispatch_current_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1517721086344
