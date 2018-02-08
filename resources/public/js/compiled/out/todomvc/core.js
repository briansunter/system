// Compiled by ClojureScript 1.9.908 {}
goog.provide('todomvc.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('todomvc.events');
goog.require('todomvc.subs');
goog.require('todomvc.views');
goog.require('todomvc.routes');
goog.require('todomvc.config');
todomvc.core.dev_setup = (function todomvc$core$dev_setup(){
if(todomvc.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
todomvc.core.mount_root = (function todomvc$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.main_panel], null),document.getElementById("app"));
});
todomvc.core.init = (function todomvc$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

todomvc.core.dev_setup.call(null);

todomvc.core.mount_root.call(null);

return todomvc.routes.app_routes.call(null);
});
goog.exportSymbol('todomvc.core.init', todomvc.core.init);

//# sourceMappingURL=core.js.map?rel=1518071921818
