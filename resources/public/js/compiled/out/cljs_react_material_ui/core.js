// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('clojure.walk');
goog.require('sablono.util');
cljs_react_material_ui.core.transform_keys = (function cljs_react_material_ui$core$transform_keys(t,coll){

var transform = (function cljs_react_material_ui$core$transform_keys_$_transform(p__44563){
var vec__44564 = p__44563;
var k = cljs.core.nth.call(null,vec__44564,(0),null);
var v = cljs.core.nth.call(null,vec__44564,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.call(null,k),v], null);
});
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,transform,x));
} else {
return x;
}
}),coll);
});
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.call(null,cljs.core.clj__GT_js,sablono.util.camel_case_keys);
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(var_args){
var G__44568 = arguments.length;
switch (G__44568) {
case 2:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2 = (function (react_class,args){
var first_arg = cljs.core.first.call(null,args);
var args__$1 = (((cljs.core.map_QMARK_.call(null,first_arg)) || ((first_arg == null)))?args:cljs.core.cons.call(null,cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.call(null,React.createElement,react_class,cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,cljs.core.first.call(null,args__$1)),cljs.core.rest.call(null,args__$1));
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3 = (function (root_obj,type,args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,(root_obj[type]),args);
});

cljs_react_material_ui.core.create_mui_cmp.cljs$lang$maxFixedArity = 3;

cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var G__44571 = arguments.length;
switch (G__44571) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.get_mui_theme.call(null,null);
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
return MaterialUIStyles.getMuiTheme(cljs.core.clj__GT_js.call(null,cljs_react_material_ui.core.transform_keys.call(null,sablono.util.camel_case,raw_theme)));
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (MaterialUIStyles["colors"][cljs.core.name.call(null,sablono.util.camel_case.call(null,color_key))]);
});
cljs_react_material_ui.core.make_selectable = (MaterialUI["makeSelectable"]);
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.call(null,cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.selectable_list = (function cljs_react_material_ui$core$selectable_list(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44574 = arguments.length;
var i__37842__auto___44575 = (0);
while(true){
if((i__37842__auto___44575 < len__37841__auto___44574)){
args__37848__auto__.push((arguments[i__37842__auto___44575]));

var G__44576 = (i__37842__auto___44575 + (1));
i__37842__auto___44575 = G__44576;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,cljs_react_material_ui.core.make_selectable.call(null,(MaterialUI["List"])),args);
});

cljs_react_material_ui.core.selectable_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq44573){
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44573));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44578 = arguments.length;
var i__37842__auto___44579 = (0);
while(true){
if((i__37842__auto___44579 < len__37841__auto___44578)){
args__37848__auto__.push((arguments[i__37842__auto___44579]));

var G__44580 = (i__37842__auto___44579 + (1));
i__37842__auto___44579 = G__44580;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args);
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq44577){
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44577));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44582 = arguments.length;
var i__37842__auto___44583 = (0);
while(true){
if((i__37842__auto___44583 < len__37841__auto___44582)){
args__37848__auto__.push((arguments[i__37842__auto___44583]));

var G__44584 = (i__37842__auto___44583 + (1));
i__37842__auto___44583 = G__44584;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args);
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq44581){
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44581));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44586 = arguments.length;
var i__37842__auto___44587 = (0);
while(true){
if((i__37842__auto___44587 < len__37841__auto___44586)){
args__37848__auto__.push((arguments[i__37842__auto___44587]));

var G__44588 = (i__37842__auto___44587 + (1));
i__37842__auto___44587 = G__44588;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args);
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq44585){
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44585));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44590 = arguments.length;
var i__37842__auto___44591 = (0);
while(true){
if((i__37842__auto___44591 < len__37841__auto___44590)){
args__37848__auto__.push((arguments[i__37842__auto___44591]));

var G__44592 = (i__37842__auto___44591 + (1));
i__37842__auto___44591 = G__44592;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args);
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq44589){
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44589));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44594 = arguments.length;
var i__37842__auto___44595 = (0);
while(true){
if((i__37842__auto___44595 < len__37841__auto___44594)){
args__37848__auto__.push((arguments[i__37842__auto___44595]));

var G__44596 = (i__37842__auto___44595 + (1));
i__37842__auto___44595 = G__44596;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args);
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq44593){
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44593));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44598 = arguments.length;
var i__37842__auto___44599 = (0);
while(true){
if((i__37842__auto___44599 < len__37841__auto___44598)){
args__37848__auto__.push((arguments[i__37842__auto___44599]));

var G__44600 = (i__37842__auto___44599 + (1));
i__37842__auto___44599 = G__44600;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq44597){
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44597));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44602 = arguments.length;
var i__37842__auto___44603 = (0);
while(true){
if((i__37842__auto___44603 < len__37841__auto___44602)){
args__37848__auto__.push((arguments[i__37842__auto___44603]));

var G__44604 = (i__37842__auto___44603 + (1));
i__37842__auto___44603 = G__44604;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Card",args);
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq44601){
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44601));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44606 = arguments.length;
var i__37842__auto___44607 = (0);
while(true){
if((i__37842__auto___44607 < len__37841__auto___44606)){
args__37848__auto__.push((arguments[i__37842__auto___44607]));

var G__44608 = (i__37842__auto___44607 + (1));
i__37842__auto___44607 = G__44608;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args);
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq44605){
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44605));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44610 = arguments.length;
var i__37842__auto___44611 = (0);
while(true){
if((i__37842__auto___44611 < len__37841__auto___44610)){
args__37848__auto__.push((arguments[i__37842__auto___44611]));

var G__44612 = (i__37842__auto___44611 + (1));
i__37842__auto___44611 = G__44612;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args);
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq44609){
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44609));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44614 = arguments.length;
var i__37842__auto___44615 = (0);
while(true){
if((i__37842__auto___44615 < len__37841__auto___44614)){
args__37848__auto__.push((arguments[i__37842__auto___44615]));

var G__44616 = (i__37842__auto___44615 + (1));
i__37842__auto___44615 = G__44616;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args);
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq44613){
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44613));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44618 = arguments.length;
var i__37842__auto___44619 = (0);
while(true){
if((i__37842__auto___44619 < len__37841__auto___44618)){
args__37848__auto__.push((arguments[i__37842__auto___44619]));

var G__44620 = (i__37842__auto___44619 + (1));
i__37842__auto___44619 = G__44620;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args);
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq44617){
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44617));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44622 = arguments.length;
var i__37842__auto___44623 = (0);
while(true){
if((i__37842__auto___44623 < len__37841__auto___44622)){
args__37848__auto__.push((arguments[i__37842__auto___44623]));

var G__44624 = (i__37842__auto___44623 + (1));
i__37842__auto___44623 = G__44624;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args);
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq44621){
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44621));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44626 = arguments.length;
var i__37842__auto___44627 = (0);
while(true){
if((i__37842__auto___44627 < len__37841__auto___44626)){
args__37848__auto__.push((arguments[i__37842__auto___44627]));

var G__44628 = (i__37842__auto___44627 + (1));
i__37842__auto___44627 = G__44628;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args);
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq44625){
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44625));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44630 = arguments.length;
var i__37842__auto___44631 = (0);
while(true){
if((i__37842__auto___44631 < len__37841__auto___44630)){
args__37848__auto__.push((arguments[i__37842__auto___44631]));

var G__44632 = (i__37842__auto___44631 + (1));
i__37842__auto___44631 = G__44632;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args);
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq44629){
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44629));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44634 = arguments.length;
var i__37842__auto___44635 = (0);
while(true){
if((i__37842__auto___44635 < len__37841__auto___44634)){
args__37848__auto__.push((arguments[i__37842__auto___44635]));

var G__44636 = (i__37842__auto___44635 + (1));
i__37842__auto___44635 = G__44636;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args);
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq44633){
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44633));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44638 = arguments.length;
var i__37842__auto___44639 = (0);
while(true){
if((i__37842__auto___44639 < len__37841__auto___44638)){
args__37848__auto__.push((arguments[i__37842__auto___44639]));

var G__44640 = (i__37842__auto___44639 + (1));
i__37842__auto___44639 = G__44640;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args);
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq44637){
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44637));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44642 = arguments.length;
var i__37842__auto___44643 = (0);
while(true){
if((i__37842__auto___44643 < len__37841__auto___44642)){
args__37848__auto__.push((arguments[i__37842__auto___44643]));

var G__44644 = (i__37842__auto___44643 + (1));
i__37842__auto___44643 = G__44644;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args);
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq44641){
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44641));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44646 = arguments.length;
var i__37842__auto___44647 = (0);
while(true){
if((i__37842__auto___44647 < len__37841__auto___44646)){
args__37848__auto__.push((arguments[i__37842__auto___44647]));

var G__44648 = (i__37842__auto___44647 + (1));
i__37842__auto___44647 = G__44648;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args);
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq44645){
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44645));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44650 = arguments.length;
var i__37842__auto___44651 = (0);
while(true){
if((i__37842__auto___44651 < len__37841__auto___44650)){
args__37848__auto__.push((arguments[i__37842__auto___44651]));

var G__44652 = (i__37842__auto___44651 + (1));
i__37842__auto___44651 = G__44652;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args);
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq44649){
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44649));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44654 = arguments.length;
var i__37842__auto___44655 = (0);
while(true){
if((i__37842__auto___44655 < len__37841__auto___44654)){
args__37848__auto__.push((arguments[i__37842__auto___44655]));

var G__44656 = (i__37842__auto___44655 + (1));
i__37842__auto___44655 = G__44656;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args);
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq44653){
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44653));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44658 = arguments.length;
var i__37842__auto___44659 = (0);
while(true){
if((i__37842__auto___44659 < len__37841__auto___44658)){
args__37848__auto__.push((arguments[i__37842__auto___44659]));

var G__44660 = (i__37842__auto___44659 + (1));
i__37842__auto___44659 = G__44660;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args);
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq44657){
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44657));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44662 = arguments.length;
var i__37842__auto___44663 = (0);
while(true){
if((i__37842__auto___44663 < len__37841__auto___44662)){
args__37848__auto__.push((arguments[i__37842__auto___44663]));

var G__44664 = (i__37842__auto___44663 + (1));
i__37842__auto___44663 = G__44664;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args);
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq44661){
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44661));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44666 = arguments.length;
var i__37842__auto___44667 = (0);
while(true){
if((i__37842__auto___44667 < len__37841__auto___44666)){
args__37848__auto__.push((arguments[i__37842__auto___44667]));

var G__44668 = (i__37842__auto___44667 + (1));
i__37842__auto___44667 = G__44668;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args);
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq44665){
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44665));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44670 = arguments.length;
var i__37842__auto___44671 = (0);
while(true){
if((i__37842__auto___44671 < len__37841__auto___44670)){
args__37848__auto__.push((arguments[i__37842__auto___44671]));

var G__44672 = (i__37842__auto___44671 + (1));
i__37842__auto___44671 = G__44672;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args);
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq44669){
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44669));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44674 = arguments.length;
var i__37842__auto___44675 = (0);
while(true){
if((i__37842__auto___44675 < len__37841__auto___44674)){
args__37848__auto__.push((arguments[i__37842__auto___44675]));

var G__44676 = (i__37842__auto___44675 + (1));
i__37842__auto___44675 = G__44676;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args);
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq44673){
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44673));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44678 = arguments.length;
var i__37842__auto___44679 = (0);
while(true){
if((i__37842__auto___44679 < len__37841__auto___44678)){
args__37848__auto__.push((arguments[i__37842__auto___44679]));

var G__44680 = (i__37842__auto___44679 + (1));
i__37842__auto___44679 = G__44680;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args);
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq44677){
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44677));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44682 = arguments.length;
var i__37842__auto___44683 = (0);
while(true){
if((i__37842__auto___44683 < len__37841__auto___44682)){
args__37848__auto__.push((arguments[i__37842__auto___44683]));

var G__44684 = (i__37842__auto___44683 + (1));
i__37842__auto___44683 = G__44684;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args);
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq44681){
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44681));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44686 = arguments.length;
var i__37842__auto___44687 = (0);
while(true){
if((i__37842__auto___44687 < len__37841__auto___44686)){
args__37848__auto__.push((arguments[i__37842__auto___44687]));

var G__44688 = (i__37842__auto___44687 + (1));
i__37842__auto___44687 = G__44688;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args);
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq44685){
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44685));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44690 = arguments.length;
var i__37842__auto___44691 = (0);
while(true){
if((i__37842__auto___44691 < len__37841__auto___44690)){
args__37848__auto__.push((arguments[i__37842__auto___44691]));

var G__44692 = (i__37842__auto___44691 + (1));
i__37842__auto___44691 = G__44692;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"List",args);
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq44689){
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44689));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44694 = arguments.length;
var i__37842__auto___44695 = (0);
while(true){
if((i__37842__auto___44695 < len__37841__auto___44694)){
args__37848__auto__.push((arguments[i__37842__auto___44695]));

var G__44696 = (i__37842__auto___44695 + (1));
i__37842__auto___44695 = G__44696;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args);
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq44693){
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44693));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44698 = arguments.length;
var i__37842__auto___44699 = (0);
while(true){
if((i__37842__auto___44699 < len__37841__auto___44698)){
args__37848__auto__.push((arguments[i__37842__auto___44699]));

var G__44700 = (i__37842__auto___44699 + (1));
i__37842__auto___44699 = G__44700;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args);
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq44697){
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44697));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44702 = arguments.length;
var i__37842__auto___44703 = (0);
while(true){
if((i__37842__auto___44703 < len__37841__auto___44702)){
args__37848__auto__.push((arguments[i__37842__auto___44703]));

var G__44704 = (i__37842__auto___44703 + (1));
i__37842__auto___44703 = G__44704;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args);
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq44701){
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44701));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44706 = arguments.length;
var i__37842__auto___44707 = (0);
while(true){
if((i__37842__auto___44707 < len__37841__auto___44706)){
args__37848__auto__.push((arguments[i__37842__auto___44707]));

var G__44708 = (i__37842__auto___44707 + (1));
i__37842__auto___44707 = G__44708;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq44705){
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44705));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44710 = arguments.length;
var i__37842__auto___44711 = (0);
while(true){
if((i__37842__auto___44711 < len__37841__auto___44710)){
args__37848__auto__.push((arguments[i__37842__auto___44711]));

var G__44712 = (i__37842__auto___44711 + (1));
i__37842__auto___44711 = G__44712;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args);
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq44709){
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44709));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44714 = arguments.length;
var i__37842__auto___44715 = (0);
while(true){
if((i__37842__auto___44715 < len__37841__auto___44714)){
args__37848__auto__.push((arguments[i__37842__auto___44715]));

var G__44716 = (i__37842__auto___44715 + (1));
i__37842__auto___44715 = G__44716;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args);
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq44713){
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44713));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44718 = arguments.length;
var i__37842__auto___44719 = (0);
while(true){
if((i__37842__auto___44719 < len__37841__auto___44718)){
args__37848__auto__.push((arguments[i__37842__auto___44719]));

var G__44720 = (i__37842__auto___44719 + (1));
i__37842__auto___44719 = G__44720;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args);
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq44717){
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44717));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44722 = arguments.length;
var i__37842__auto___44723 = (0);
while(true){
if((i__37842__auto___44723 < len__37841__auto___44722)){
args__37848__auto__.push((arguments[i__37842__auto___44723]));

var G__44724 = (i__37842__auto___44723 + (1));
i__37842__auto___44723 = G__44724;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args);
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq44721){
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44721));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44726 = arguments.length;
var i__37842__auto___44727 = (0);
while(true){
if((i__37842__auto___44727 < len__37841__auto___44726)){
args__37848__auto__.push((arguments[i__37842__auto___44727]));

var G__44728 = (i__37842__auto___44727 + (1));
i__37842__auto___44727 = G__44728;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args);
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq44725){
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44725));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44730 = arguments.length;
var i__37842__auto___44731 = (0);
while(true){
if((i__37842__auto___44731 < len__37841__auto___44730)){
args__37848__auto__.push((arguments[i__37842__auto___44731]));

var G__44732 = (i__37842__auto___44731 + (1));
i__37842__auto___44731 = G__44732;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args);
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq44729){
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44729));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44734 = arguments.length;
var i__37842__auto___44735 = (0);
while(true){
if((i__37842__auto___44735 < len__37841__auto___44734)){
args__37848__auto__.push((arguments[i__37842__auto___44735]));

var G__44736 = (i__37842__auto___44735 + (1));
i__37842__auto___44735 = G__44736;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args);
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq44733){
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44733));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44738 = arguments.length;
var i__37842__auto___44739 = (0);
while(true){
if((i__37842__auto___44739 < len__37841__auto___44738)){
args__37848__auto__.push((arguments[i__37842__auto___44739]));

var G__44740 = (i__37842__auto___44739 + (1));
i__37842__auto___44739 = G__44740;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args);
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq44737){
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44737));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44742 = arguments.length;
var i__37842__auto___44743 = (0);
while(true){
if((i__37842__auto___44743 < len__37841__auto___44742)){
args__37848__auto__.push((arguments[i__37842__auto___44743]));

var G__44744 = (i__37842__auto___44743 + (1));
i__37842__auto___44743 = G__44744;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args);
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq44741){
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44741));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44746 = arguments.length;
var i__37842__auto___44747 = (0);
while(true){
if((i__37842__auto___44747 < len__37841__auto___44746)){
args__37848__auto__.push((arguments[i__37842__auto___44747]));

var G__44748 = (i__37842__auto___44747 + (1));
i__37842__auto___44747 = G__44748;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args);
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq44745){
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44745));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44750 = arguments.length;
var i__37842__auto___44751 = (0);
while(true){
if((i__37842__auto___44751 < len__37841__auto___44750)){
args__37848__auto__.push((arguments[i__37842__auto___44751]));

var G__44752 = (i__37842__auto___44751 + (1));
i__37842__auto___44751 = G__44752;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Step",args);
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq44749){
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44749));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44754 = arguments.length;
var i__37842__auto___44755 = (0);
while(true){
if((i__37842__auto___44755 < len__37841__auto___44754)){
args__37848__auto__.push((arguments[i__37842__auto___44755]));

var G__44756 = (i__37842__auto___44755 + (1));
i__37842__auto___44755 = G__44756;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args);
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq44753){
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44753));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44758 = arguments.length;
var i__37842__auto___44759 = (0);
while(true){
if((i__37842__auto___44759 < len__37841__auto___44758)){
args__37848__auto__.push((arguments[i__37842__auto___44759]));

var G__44760 = (i__37842__auto___44759 + (1));
i__37842__auto___44759 = G__44760;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args);
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq44757){
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44757));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44762 = arguments.length;
var i__37842__auto___44763 = (0);
while(true){
if((i__37842__auto___44763 < len__37841__auto___44762)){
args__37848__auto__.push((arguments[i__37842__auto___44763]));

var G__44764 = (i__37842__auto___44763 + (1));
i__37842__auto___44763 = G__44764;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args);
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq44761){
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44761));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44766 = arguments.length;
var i__37842__auto___44767 = (0);
while(true){
if((i__37842__auto___44767 < len__37841__auto___44766)){
args__37848__auto__.push((arguments[i__37842__auto___44767]));

var G__44768 = (i__37842__auto___44767 + (1));
i__37842__auto___44767 = G__44768;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args);
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq44765){
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44765));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44770 = arguments.length;
var i__37842__auto___44771 = (0);
while(true){
if((i__37842__auto___44771 < len__37841__auto___44770)){
args__37848__auto__.push((arguments[i__37842__auto___44771]));

var G__44772 = (i__37842__auto___44771 + (1));
i__37842__auto___44771 = G__44772;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args);
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq44769){
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44769));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44774 = arguments.length;
var i__37842__auto___44775 = (0);
while(true){
if((i__37842__auto___44775 < len__37841__auto___44774)){
args__37848__auto__.push((arguments[i__37842__auto___44775]));

var G__44776 = (i__37842__auto___44775 + (1));
i__37842__auto___44775 = G__44776;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args);
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq44773){
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44773));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44778 = arguments.length;
var i__37842__auto___44779 = (0);
while(true){
if((i__37842__auto___44779 < len__37841__auto___44778)){
args__37848__auto__.push((arguments[i__37842__auto___44779]));

var G__44780 = (i__37842__auto___44779 + (1));
i__37842__auto___44779 = G__44780;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args);
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq44777){
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44777));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44782 = arguments.length;
var i__37842__auto___44783 = (0);
while(true){
if((i__37842__auto___44783 < len__37841__auto___44782)){
args__37848__auto__.push((arguments[i__37842__auto___44783]));

var G__44784 = (i__37842__auto___44783 + (1));
i__37842__auto___44783 = G__44784;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Table",args);
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq44781){
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44781));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44786 = arguments.length;
var i__37842__auto___44787 = (0);
while(true){
if((i__37842__auto___44787 < len__37841__auto___44786)){
args__37848__auto__.push((arguments[i__37842__auto___44787]));

var G__44788 = (i__37842__auto___44787 + (1));
i__37842__auto___44787 = G__44788;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args);
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq44785){
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44785));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44790 = arguments.length;
var i__37842__auto___44791 = (0);
while(true){
if((i__37842__auto___44791 < len__37841__auto___44790)){
args__37848__auto__.push((arguments[i__37842__auto___44791]));

var G__44792 = (i__37842__auto___44791 + (1));
i__37842__auto___44791 = G__44792;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args);
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq44789){
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44789));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44794 = arguments.length;
var i__37842__auto___44795 = (0);
while(true){
if((i__37842__auto___44795 < len__37841__auto___44794)){
args__37848__auto__.push((arguments[i__37842__auto___44795]));

var G__44796 = (i__37842__auto___44795 + (1));
i__37842__auto___44795 = G__44796;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args);
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq44793){
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44793));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44798 = arguments.length;
var i__37842__auto___44799 = (0);
while(true){
if((i__37842__auto___44799 < len__37841__auto___44798)){
args__37848__auto__.push((arguments[i__37842__auto___44799]));

var G__44800 = (i__37842__auto___44799 + (1));
i__37842__auto___44799 = G__44800;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args);
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq44797){
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44797));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44802 = arguments.length;
var i__37842__auto___44803 = (0);
while(true){
if((i__37842__auto___44803 < len__37841__auto___44802)){
args__37848__auto__.push((arguments[i__37842__auto___44803]));

var G__44804 = (i__37842__auto___44803 + (1));
i__37842__auto___44803 = G__44804;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args);
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq44801){
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44801));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44806 = arguments.length;
var i__37842__auto___44807 = (0);
while(true){
if((i__37842__auto___44807 < len__37841__auto___44806)){
args__37848__auto__.push((arguments[i__37842__auto___44807]));

var G__44808 = (i__37842__auto___44807 + (1));
i__37842__auto___44807 = G__44808;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args);
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq44805){
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44805));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44810 = arguments.length;
var i__37842__auto___44811 = (0);
while(true){
if((i__37842__auto___44811 < len__37841__auto___44810)){
args__37848__auto__.push((arguments[i__37842__auto___44811]));

var G__44812 = (i__37842__auto___44811 + (1));
i__37842__auto___44811 = G__44812;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args);
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq44809){
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44809));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44814 = arguments.length;
var i__37842__auto___44815 = (0);
while(true){
if((i__37842__auto___44815 < len__37841__auto___44814)){
args__37848__auto__.push((arguments[i__37842__auto___44815]));

var G__44816 = (i__37842__auto___44815 + (1));
i__37842__auto___44815 = G__44816;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args);
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq44813){
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44813));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44818 = arguments.length;
var i__37842__auto___44819 = (0);
while(true){
if((i__37842__auto___44819 < len__37841__auto___44818)){
args__37848__auto__.push((arguments[i__37842__auto___44819]));

var G__44820 = (i__37842__auto___44819 + (1));
i__37842__auto___44819 = G__44820;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args);
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq44817){
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44817));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44822 = arguments.length;
var i__37842__auto___44823 = (0);
while(true){
if((i__37842__auto___44823 < len__37841__auto___44822)){
args__37848__auto__.push((arguments[i__37842__auto___44823]));

var G__44824 = (i__37842__auto___44823 + (1));
i__37842__auto___44823 = G__44824;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args);
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq44821){
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44821));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44826 = arguments.length;
var i__37842__auto___44827 = (0);
while(true){
if((i__37842__auto___44827 < len__37841__auto___44826)){
args__37848__auto__.push((arguments[i__37842__auto___44827]));

var G__44828 = (i__37842__auto___44827 + (1));
i__37842__auto___44827 = G__44828;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args);
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq44825){
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44825));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44830 = arguments.length;
var i__37842__auto___44831 = (0);
while(true){
if((i__37842__auto___44831 < len__37841__auto___44830)){
args__37848__auto__.push((arguments[i__37842__auto___44831]));

var G__44832 = (i__37842__auto___44831 + (1));
i__37842__auto___44831 = G__44832;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args);
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq44829){
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44829));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__37848__auto__ = [];
var len__37841__auto___44834 = arguments.length;
var i__37842__auto___44835 = (0);
while(true){
if((i__37842__auto___44835 < len__37841__auto___44834)){
args__37848__auto__.push((arguments[i__37842__auto___44835]));

var G__44836 = (i__37842__auto___44835 + (1));
i__37842__auto___44835 = G__44836;
continue;
} else {
}
break;
}

var argseq__37849__auto__ = ((((0) < args__37848__auto__.length))?(new cljs.core.IndexedSeq(args__37848__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__37849__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args);
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq44833){
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44833));
});


//# sourceMappingURL=core.js.map?rel=1517290378218
