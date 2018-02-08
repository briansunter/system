// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__42464 = arguments.length;
switch (G__42464) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__37696__auto__ = [];
var len__37689__auto___42467 = arguments.length;
var i__37690__auto___42468 = (0);
while(true){
if((i__37690__auto___42468 < len__37689__auto___42467)){
args__37696__auto__.push((arguments[i__37690__auto___42468]));

var G__42469 = (i__37690__auto___42468 + (1));
i__37690__auto___42468 = G__42469;
continue;
} else {
}
break;
}

var argseq__37697__auto__ = ((((0) < args__37696__auto__.length))?(new cljs.core.IndexedSeq(args__37696__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37697__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42466){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42466));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37696__auto__ = [];
var len__37689__auto___42471 = arguments.length;
var i__37690__auto___42472 = (0);
while(true){
if((i__37690__auto___42472 < len__37689__auto___42471)){
args__37696__auto__.push((arguments[i__37690__auto___42472]));

var G__42473 = (i__37690__auto___42472 + (1));
i__37690__auto___42472 = G__42473;
continue;
} else {
}
break;
}

var argseq__37697__auto__ = ((((0) < args__37696__auto__.length))?(new cljs.core.IndexedSeq(args__37696__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37697__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42470){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42470));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__42474 = cljs.core._EQ_;
var expr__42475 = (function (){var or__36520__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e42478){if((e42478 instanceof Error)){
var e = e42478;
return false;
} else {
throw e42478;

}
}})();
if(cljs.core.truth_(or__36520__auto__)){
return or__36520__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__42474.call(null,"true",expr__42475))){
return true;
} else {
if(cljs.core.truth_(pred__42474.call(null,"false",expr__42475))){
return false;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__42475)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e42479){if((e42479 instanceof Error)){
var e = e42479;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Unable to access localStorage"].join(''));
} else {
throw e42479;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42480){
var map__42481 = p__42480;
var map__42481__$1 = ((((!((map__42481 == null)))?((((map__42481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42481):map__42481);
var message = cljs.core.get.call(null,map__42481__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42481__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__36520__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36520__auto__)){
return or__36520__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__36508__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__36508__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__36508__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__39204__auto___42560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___42560,ch){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___42560,ch){
return (function (state_42532){
var state_val_42533 = (state_42532[(1)]);
if((state_val_42533 === (7))){
var inst_42528 = (state_42532[(2)]);
var state_42532__$1 = state_42532;
var statearr_42534_42561 = state_42532__$1;
(statearr_42534_42561[(2)] = inst_42528);

(statearr_42534_42561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42533 === (1))){
var state_42532__$1 = state_42532;
var statearr_42535_42562 = state_42532__$1;
(statearr_42535_42562[(2)] = null);

(statearr_42535_42562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42533 === (4))){
var inst_42485 = (state_42532[(7)]);
var inst_42485__$1 = (state_42532[(2)]);
var state_42532__$1 = (function (){var statearr_42536 = state_42532;
(statearr_42536[(7)] = inst_42485__$1);

return statearr_42536;
})();
if(cljs.core.truth_(inst_42485__$1)){
var statearr_42537_42563 = state_42532__$1;
(statearr_42537_42563[(1)] = (5));

} else {
var statearr_42538_42564 = state_42532__$1;
(statearr_42538_42564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42533 === (15))){
var inst_42492 = (state_42532[(8)]);
var inst_42507 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42492);
var inst_42508 = cljs.core.first.call(null,inst_42507);
var inst_42509 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42508);
var inst_42510 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42509)].join('');
var inst_42511 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42510);
var state_42532__$1 = state_42532;
var statearr_42539_42565 = state_42532__$1;
(statearr_42539_42565[(2)] = inst_42511);

(statearr_42539_42565[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42533 === (13))){
var inst_42516 = (state_42532[(2)]);
var state_42532__$1 = state_42532;
var statearr_42540_42566 = state_42532__$1;
(statearr_42540_42566[(2)] = inst_42516);

(statearr_42540_42566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42533 === (6))){
var state_42532__$1 = state_42532;
var statearr_42541_42567 = state_42532__$1;
(statearr_42541_42567[(2)] = null);

(statearr_42541_42567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42533 === (17))){
var inst_42514 = (state_42532[(2)]);
var state_42532__$1 = state_42532;
var statearr_42542_42568 = state_42532__$1;
(statearr_42542_42568[(2)] = inst_42514);

(statearr_42542_42568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42533 === (3))){
var inst_42530 = (state_42532[(2)]);
var state_42532__$1 = state_42532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42532__$1,inst_42530);
} else {
if((state_val_42533 === (12))){
var inst_42491 = (state_42532[(9)]);
var inst_42505 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42491,opts);
var state_42532__$1 = state_42532;
if(cljs.core.truth_(inst_42505)){
var statearr_42543_42569 = state_42532__$1;
(statearr_42543_42569[(1)] = (15));

} else {
var statearr_42544_42570 = state_42532__$1;
(statearr_42544_42570[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42533 === (2))){
var state_42532__$1 = state_42532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42532__$1,(4),ch);
} else {
if((state_val_42533 === (11))){
var inst_42492 = (state_42532[(8)]);
var inst_42497 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42498 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42492);
var inst_42499 = cljs.core.async.timeout.call(null,(1000));
var inst_42500 = [inst_42498,inst_42499];
var inst_42501 = (new cljs.core.PersistentVector(null,2,(5),inst_42497,inst_42500,null));
var state_42532__$1 = state_42532;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42532__$1,(14),inst_42501);
} else {
if((state_val_42533 === (9))){
var inst_42492 = (state_42532[(8)]);
var inst_42518 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42519 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42492);
var inst_42520 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42519);
var inst_42521 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42520)].join('');
var inst_42522 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42521);
var state_42532__$1 = (function (){var statearr_42545 = state_42532;
(statearr_42545[(10)] = inst_42518);

return statearr_42545;
})();
var statearr_42546_42571 = state_42532__$1;
(statearr_42546_42571[(2)] = inst_42522);

(statearr_42546_42571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42533 === (5))){
var inst_42485 = (state_42532[(7)]);
var inst_42487 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42488 = (new cljs.core.PersistentArrayMap(null,2,inst_42487,null));
var inst_42489 = (new cljs.core.PersistentHashSet(null,inst_42488,null));
var inst_42490 = figwheel.client.focus_msgs.call(null,inst_42489,inst_42485);
var inst_42491 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42490);
var inst_42492 = cljs.core.first.call(null,inst_42490);
var inst_42493 = figwheel.client.autoload_QMARK_.call(null);
var state_42532__$1 = (function (){var statearr_42547 = state_42532;
(statearr_42547[(9)] = inst_42491);

(statearr_42547[(8)] = inst_42492);

return statearr_42547;
})();
if(cljs.core.truth_(inst_42493)){
var statearr_42548_42572 = state_42532__$1;
(statearr_42548_42572[(1)] = (8));

} else {
var statearr_42549_42573 = state_42532__$1;
(statearr_42549_42573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42533 === (14))){
var inst_42503 = (state_42532[(2)]);
var state_42532__$1 = state_42532;
var statearr_42550_42574 = state_42532__$1;
(statearr_42550_42574[(2)] = inst_42503);

(statearr_42550_42574[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42533 === (16))){
var state_42532__$1 = state_42532;
var statearr_42551_42575 = state_42532__$1;
(statearr_42551_42575[(2)] = null);

(statearr_42551_42575[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42533 === (10))){
var inst_42524 = (state_42532[(2)]);
var state_42532__$1 = (function (){var statearr_42552 = state_42532;
(statearr_42552[(11)] = inst_42524);

return statearr_42552;
})();
var statearr_42553_42576 = state_42532__$1;
(statearr_42553_42576[(2)] = null);

(statearr_42553_42576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42533 === (8))){
var inst_42491 = (state_42532[(9)]);
var inst_42495 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42491,opts);
var state_42532__$1 = state_42532;
if(cljs.core.truth_(inst_42495)){
var statearr_42554_42577 = state_42532__$1;
(statearr_42554_42577[(1)] = (11));

} else {
var statearr_42555_42578 = state_42532__$1;
(statearr_42555_42578[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39204__auto___42560,ch))
;
return ((function (switch__39116__auto__,c__39204__auto___42560,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__39117__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__39117__auto____0 = (function (){
var statearr_42556 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42556[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__39117__auto__);

(statearr_42556[(1)] = (1));

return statearr_42556;
});
var figwheel$client$file_reloader_plugin_$_state_machine__39117__auto____1 = (function (state_42532){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_42532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e42557){if((e42557 instanceof Object)){
var ex__39120__auto__ = e42557;
var statearr_42558_42579 = state_42532;
(statearr_42558_42579[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42580 = state_42532;
state_42532 = G__42580;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__39117__auto__ = function(state_42532){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__39117__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__39117__auto____1.call(this,state_42532);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__39117__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__39117__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___42560,ch))
})();
var state__39206__auto__ = (function (){var statearr_42559 = f__39205__auto__.call(null);
(statearr_42559[(6)] = c__39204__auto___42560);

return statearr_42559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___42560,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42581_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42581_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_42583 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42583){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e42582){if((e42582 instanceof Error)){
var e = e42582;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42583], null));
} else {
var e = e42582;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_42583))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42584){
var map__42585 = p__42584;
var map__42585__$1 = ((((!((map__42585 == null)))?((((map__42585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42585):map__42585);
var opts = map__42585__$1;
var build_id = cljs.core.get.call(null,map__42585__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42585,map__42585__$1,opts,build_id){
return (function (p__42587){
var vec__42588 = p__42587;
var seq__42589 = cljs.core.seq.call(null,vec__42588);
var first__42590 = cljs.core.first.call(null,seq__42589);
var seq__42589__$1 = cljs.core.next.call(null,seq__42589);
var map__42591 = first__42590;
var map__42591__$1 = ((((!((map__42591 == null)))?((((map__42591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42591):map__42591);
var msg = map__42591__$1;
var msg_name = cljs.core.get.call(null,map__42591__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42589__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42588,seq__42589,first__42590,seq__42589__$1,map__42591,map__42591__$1,msg,msg_name,_,map__42585,map__42585__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42588,seq__42589,first__42590,seq__42589__$1,map__42591,map__42591__$1,msg,msg_name,_,map__42585,map__42585__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42585,map__42585__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42593){
var vec__42594 = p__42593;
var seq__42595 = cljs.core.seq.call(null,vec__42594);
var first__42596 = cljs.core.first.call(null,seq__42595);
var seq__42595__$1 = cljs.core.next.call(null,seq__42595);
var map__42597 = first__42596;
var map__42597__$1 = ((((!((map__42597 == null)))?((((map__42597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42597.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42597):map__42597);
var msg = map__42597__$1;
var msg_name = cljs.core.get.call(null,map__42597__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42595__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42599){
var map__42600 = p__42599;
var map__42600__$1 = ((((!((map__42600 == null)))?((((map__42600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42600):map__42600);
var on_compile_warning = cljs.core.get.call(null,map__42600__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42600__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42600,map__42600__$1,on_compile_warning,on_compile_fail){
return (function (p__42602){
var vec__42603 = p__42602;
var seq__42604 = cljs.core.seq.call(null,vec__42603);
var first__42605 = cljs.core.first.call(null,seq__42604);
var seq__42604__$1 = cljs.core.next.call(null,seq__42604);
var map__42606 = first__42605;
var map__42606__$1 = ((((!((map__42606 == null)))?((((map__42606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42606):map__42606);
var msg = map__42606__$1;
var msg_name = cljs.core.get.call(null,map__42606__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42604__$1;
var pred__42608 = cljs.core._EQ_;
var expr__42609 = msg_name;
if(cljs.core.truth_(pred__42608.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42609))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42608.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42609))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42600,map__42600__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__39204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto__,msg_hist,msg_names,msg){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto__,msg_hist,msg_names,msg){
return (function (state_42698){
var state_val_42699 = (state_42698[(1)]);
if((state_val_42699 === (7))){
var inst_42618 = (state_42698[(2)]);
var state_42698__$1 = state_42698;
if(cljs.core.truth_(inst_42618)){
var statearr_42700_42747 = state_42698__$1;
(statearr_42700_42747[(1)] = (8));

} else {
var statearr_42701_42748 = state_42698__$1;
(statearr_42701_42748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (20))){
var inst_42692 = (state_42698[(2)]);
var state_42698__$1 = state_42698;
var statearr_42702_42749 = state_42698__$1;
(statearr_42702_42749[(2)] = inst_42692);

(statearr_42702_42749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (27))){
var inst_42688 = (state_42698[(2)]);
var state_42698__$1 = state_42698;
var statearr_42703_42750 = state_42698__$1;
(statearr_42703_42750[(2)] = inst_42688);

(statearr_42703_42750[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (1))){
var inst_42611 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42698__$1 = state_42698;
if(cljs.core.truth_(inst_42611)){
var statearr_42704_42751 = state_42698__$1;
(statearr_42704_42751[(1)] = (2));

} else {
var statearr_42705_42752 = state_42698__$1;
(statearr_42705_42752[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (24))){
var inst_42690 = (state_42698[(2)]);
var state_42698__$1 = state_42698;
var statearr_42706_42753 = state_42698__$1;
(statearr_42706_42753[(2)] = inst_42690);

(statearr_42706_42753[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (4))){
var inst_42696 = (state_42698[(2)]);
var state_42698__$1 = state_42698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42698__$1,inst_42696);
} else {
if((state_val_42699 === (15))){
var inst_42694 = (state_42698[(2)]);
var state_42698__$1 = state_42698;
var statearr_42707_42754 = state_42698__$1;
(statearr_42707_42754[(2)] = inst_42694);

(statearr_42707_42754[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (21))){
var inst_42647 = (state_42698[(2)]);
var inst_42648 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42649 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42648);
var state_42698__$1 = (function (){var statearr_42708 = state_42698;
(statearr_42708[(7)] = inst_42647);

return statearr_42708;
})();
var statearr_42709_42755 = state_42698__$1;
(statearr_42709_42755[(2)] = inst_42649);

(statearr_42709_42755[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (31))){
var inst_42677 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42698__$1 = state_42698;
if(cljs.core.truth_(inst_42677)){
var statearr_42710_42756 = state_42698__$1;
(statearr_42710_42756[(1)] = (34));

} else {
var statearr_42711_42757 = state_42698__$1;
(statearr_42711_42757[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (32))){
var inst_42686 = (state_42698[(2)]);
var state_42698__$1 = state_42698;
var statearr_42712_42758 = state_42698__$1;
(statearr_42712_42758[(2)] = inst_42686);

(statearr_42712_42758[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (33))){
var inst_42673 = (state_42698[(2)]);
var inst_42674 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42675 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42674);
var state_42698__$1 = (function (){var statearr_42713 = state_42698;
(statearr_42713[(8)] = inst_42673);

return statearr_42713;
})();
var statearr_42714_42759 = state_42698__$1;
(statearr_42714_42759[(2)] = inst_42675);

(statearr_42714_42759[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (13))){
var inst_42632 = figwheel.client.heads_up.clear.call(null);
var state_42698__$1 = state_42698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42698__$1,(16),inst_42632);
} else {
if((state_val_42699 === (22))){
var inst_42653 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42654 = figwheel.client.heads_up.append_warning_message.call(null,inst_42653);
var state_42698__$1 = state_42698;
var statearr_42715_42760 = state_42698__$1;
(statearr_42715_42760[(2)] = inst_42654);

(statearr_42715_42760[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (36))){
var inst_42684 = (state_42698[(2)]);
var state_42698__$1 = state_42698;
var statearr_42716_42761 = state_42698__$1;
(statearr_42716_42761[(2)] = inst_42684);

(statearr_42716_42761[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (29))){
var inst_42664 = (state_42698[(2)]);
var inst_42665 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42666 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42665);
var state_42698__$1 = (function (){var statearr_42717 = state_42698;
(statearr_42717[(9)] = inst_42664);

return statearr_42717;
})();
var statearr_42718_42762 = state_42698__$1;
(statearr_42718_42762[(2)] = inst_42666);

(statearr_42718_42762[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (6))){
var inst_42613 = (state_42698[(10)]);
var state_42698__$1 = state_42698;
var statearr_42719_42763 = state_42698__$1;
(statearr_42719_42763[(2)] = inst_42613);

(statearr_42719_42763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (28))){
var inst_42660 = (state_42698[(2)]);
var inst_42661 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42662 = figwheel.client.heads_up.display_warning.call(null,inst_42661);
var state_42698__$1 = (function (){var statearr_42720 = state_42698;
(statearr_42720[(11)] = inst_42660);

return statearr_42720;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42698__$1,(29),inst_42662);
} else {
if((state_val_42699 === (25))){
var inst_42658 = figwheel.client.heads_up.clear.call(null);
var state_42698__$1 = state_42698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42698__$1,(28),inst_42658);
} else {
if((state_val_42699 === (34))){
var inst_42679 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42698__$1 = state_42698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42698__$1,(37),inst_42679);
} else {
if((state_val_42699 === (17))){
var inst_42638 = (state_42698[(2)]);
var inst_42639 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42640 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42639);
var state_42698__$1 = (function (){var statearr_42721 = state_42698;
(statearr_42721[(12)] = inst_42638);

return statearr_42721;
})();
var statearr_42722_42764 = state_42698__$1;
(statearr_42722_42764[(2)] = inst_42640);

(statearr_42722_42764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (3))){
var inst_42630 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42698__$1 = state_42698;
if(cljs.core.truth_(inst_42630)){
var statearr_42723_42765 = state_42698__$1;
(statearr_42723_42765[(1)] = (13));

} else {
var statearr_42724_42766 = state_42698__$1;
(statearr_42724_42766[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (12))){
var inst_42626 = (state_42698[(2)]);
var state_42698__$1 = state_42698;
var statearr_42725_42767 = state_42698__$1;
(statearr_42725_42767[(2)] = inst_42626);

(statearr_42725_42767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (2))){
var inst_42613 = (state_42698[(10)]);
var inst_42613__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42698__$1 = (function (){var statearr_42726 = state_42698;
(statearr_42726[(10)] = inst_42613__$1);

return statearr_42726;
})();
if(cljs.core.truth_(inst_42613__$1)){
var statearr_42727_42768 = state_42698__$1;
(statearr_42727_42768[(1)] = (5));

} else {
var statearr_42728_42769 = state_42698__$1;
(statearr_42728_42769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (23))){
var inst_42656 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42698__$1 = state_42698;
if(cljs.core.truth_(inst_42656)){
var statearr_42729_42770 = state_42698__$1;
(statearr_42729_42770[(1)] = (25));

} else {
var statearr_42730_42771 = state_42698__$1;
(statearr_42730_42771[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (35))){
var state_42698__$1 = state_42698;
var statearr_42731_42772 = state_42698__$1;
(statearr_42731_42772[(2)] = null);

(statearr_42731_42772[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (19))){
var inst_42651 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42698__$1 = state_42698;
if(cljs.core.truth_(inst_42651)){
var statearr_42732_42773 = state_42698__$1;
(statearr_42732_42773[(1)] = (22));

} else {
var statearr_42733_42774 = state_42698__$1;
(statearr_42733_42774[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (11))){
var inst_42622 = (state_42698[(2)]);
var state_42698__$1 = state_42698;
var statearr_42734_42775 = state_42698__$1;
(statearr_42734_42775[(2)] = inst_42622);

(statearr_42734_42775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (9))){
var inst_42624 = figwheel.client.heads_up.clear.call(null);
var state_42698__$1 = state_42698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42698__$1,(12),inst_42624);
} else {
if((state_val_42699 === (5))){
var inst_42615 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42698__$1 = state_42698;
var statearr_42735_42776 = state_42698__$1;
(statearr_42735_42776[(2)] = inst_42615);

(statearr_42735_42776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (14))){
var inst_42642 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42698__$1 = state_42698;
if(cljs.core.truth_(inst_42642)){
var statearr_42736_42777 = state_42698__$1;
(statearr_42736_42777[(1)] = (18));

} else {
var statearr_42737_42778 = state_42698__$1;
(statearr_42737_42778[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (26))){
var inst_42668 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42698__$1 = state_42698;
if(cljs.core.truth_(inst_42668)){
var statearr_42738_42779 = state_42698__$1;
(statearr_42738_42779[(1)] = (30));

} else {
var statearr_42739_42780 = state_42698__$1;
(statearr_42739_42780[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (16))){
var inst_42634 = (state_42698[(2)]);
var inst_42635 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42636 = figwheel.client.heads_up.display_exception.call(null,inst_42635);
var state_42698__$1 = (function (){var statearr_42740 = state_42698;
(statearr_42740[(13)] = inst_42634);

return statearr_42740;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42698__$1,(17),inst_42636);
} else {
if((state_val_42699 === (30))){
var inst_42670 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42671 = figwheel.client.heads_up.display_warning.call(null,inst_42670);
var state_42698__$1 = state_42698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42698__$1,(33),inst_42671);
} else {
if((state_val_42699 === (10))){
var inst_42628 = (state_42698[(2)]);
var state_42698__$1 = state_42698;
var statearr_42741_42781 = state_42698__$1;
(statearr_42741_42781[(2)] = inst_42628);

(statearr_42741_42781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (18))){
var inst_42644 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42645 = figwheel.client.heads_up.display_exception.call(null,inst_42644);
var state_42698__$1 = state_42698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42698__$1,(21),inst_42645);
} else {
if((state_val_42699 === (37))){
var inst_42681 = (state_42698[(2)]);
var state_42698__$1 = state_42698;
var statearr_42742_42782 = state_42698__$1;
(statearr_42742_42782[(2)] = inst_42681);

(statearr_42742_42782[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42699 === (8))){
var inst_42620 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42698__$1 = state_42698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42698__$1,(11),inst_42620);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39204__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__39116__auto__,c__39204__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39117__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39117__auto____0 = (function (){
var statearr_42743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42743[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39117__auto__);

(statearr_42743[(1)] = (1));

return statearr_42743;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39117__auto____1 = (function (state_42698){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_42698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e42744){if((e42744 instanceof Object)){
var ex__39120__auto__ = e42744;
var statearr_42745_42783 = state_42698;
(statearr_42745_42783[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42784 = state_42698;
state_42698 = G__42784;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39117__auto__ = function(state_42698){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39117__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39117__auto____1.call(this,state_42698);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39117__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39117__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto__,msg_hist,msg_names,msg))
})();
var state__39206__auto__ = (function (){var statearr_42746 = f__39205__auto__.call(null);
(statearr_42746[(6)] = c__39204__auto__);

return statearr_42746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto__,msg_hist,msg_names,msg))
);

return c__39204__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__39204__auto___42813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___42813,ch){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___42813,ch){
return (function (state_42799){
var state_val_42800 = (state_42799[(1)]);
if((state_val_42800 === (1))){
var state_42799__$1 = state_42799;
var statearr_42801_42814 = state_42799__$1;
(statearr_42801_42814[(2)] = null);

(statearr_42801_42814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42800 === (2))){
var state_42799__$1 = state_42799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42799__$1,(4),ch);
} else {
if((state_val_42800 === (3))){
var inst_42797 = (state_42799[(2)]);
var state_42799__$1 = state_42799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42799__$1,inst_42797);
} else {
if((state_val_42800 === (4))){
var inst_42787 = (state_42799[(7)]);
var inst_42787__$1 = (state_42799[(2)]);
var state_42799__$1 = (function (){var statearr_42802 = state_42799;
(statearr_42802[(7)] = inst_42787__$1);

return statearr_42802;
})();
if(cljs.core.truth_(inst_42787__$1)){
var statearr_42803_42815 = state_42799__$1;
(statearr_42803_42815[(1)] = (5));

} else {
var statearr_42804_42816 = state_42799__$1;
(statearr_42804_42816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42800 === (5))){
var inst_42787 = (state_42799[(7)]);
var inst_42789 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42787);
var state_42799__$1 = state_42799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42799__$1,(8),inst_42789);
} else {
if((state_val_42800 === (6))){
var state_42799__$1 = state_42799;
var statearr_42805_42817 = state_42799__$1;
(statearr_42805_42817[(2)] = null);

(statearr_42805_42817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42800 === (7))){
var inst_42795 = (state_42799[(2)]);
var state_42799__$1 = state_42799;
var statearr_42806_42818 = state_42799__$1;
(statearr_42806_42818[(2)] = inst_42795);

(statearr_42806_42818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42800 === (8))){
var inst_42791 = (state_42799[(2)]);
var state_42799__$1 = (function (){var statearr_42807 = state_42799;
(statearr_42807[(8)] = inst_42791);

return statearr_42807;
})();
var statearr_42808_42819 = state_42799__$1;
(statearr_42808_42819[(2)] = null);

(statearr_42808_42819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__39204__auto___42813,ch))
;
return ((function (switch__39116__auto__,c__39204__auto___42813,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__39117__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__39117__auto____0 = (function (){
var statearr_42809 = [null,null,null,null,null,null,null,null,null];
(statearr_42809[(0)] = figwheel$client$heads_up_plugin_$_state_machine__39117__auto__);

(statearr_42809[(1)] = (1));

return statearr_42809;
});
var figwheel$client$heads_up_plugin_$_state_machine__39117__auto____1 = (function (state_42799){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_42799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e42810){if((e42810 instanceof Object)){
var ex__39120__auto__ = e42810;
var statearr_42811_42820 = state_42799;
(statearr_42811_42820[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42821 = state_42799;
state_42799 = G__42821;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__39117__auto__ = function(state_42799){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__39117__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__39117__auto____1.call(this,state_42799);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__39117__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__39117__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___42813,ch))
})();
var state__39206__auto__ = (function (){var statearr_42812 = f__39205__auto__.call(null);
(statearr_42812[(6)] = c__39204__auto___42813);

return statearr_42812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___42813,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__39204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto__){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto__){
return (function (state_42827){
var state_val_42828 = (state_42827[(1)]);
if((state_val_42828 === (1))){
var inst_42822 = cljs.core.async.timeout.call(null,(3000));
var state_42827__$1 = state_42827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42827__$1,(2),inst_42822);
} else {
if((state_val_42828 === (2))){
var inst_42824 = (state_42827[(2)]);
var inst_42825 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42827__$1 = (function (){var statearr_42829 = state_42827;
(statearr_42829[(7)] = inst_42824);

return statearr_42829;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42827__$1,inst_42825);
} else {
return null;
}
}
});})(c__39204__auto__))
;
return ((function (switch__39116__auto__,c__39204__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__39117__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__39117__auto____0 = (function (){
var statearr_42830 = [null,null,null,null,null,null,null,null];
(statearr_42830[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__39117__auto__);

(statearr_42830[(1)] = (1));

return statearr_42830;
});
var figwheel$client$enforce_project_plugin_$_state_machine__39117__auto____1 = (function (state_42827){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_42827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e42831){if((e42831 instanceof Object)){
var ex__39120__auto__ = e42831;
var statearr_42832_42834 = state_42827;
(statearr_42832_42834[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42835 = state_42827;
state_42827 = G__42835;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__39117__auto__ = function(state_42827){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__39117__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__39117__auto____1.call(this,state_42827);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__39117__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__39117__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto__))
})();
var state__39206__auto__ = (function (){var statearr_42833 = f__39205__auto__.call(null);
(statearr_42833[(6)] = c__39204__auto__);

return statearr_42833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto__))
);

return c__39204__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__39204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto__,figwheel_version,temp__4657__auto__){
return (function (state_42842){
var state_val_42843 = (state_42842[(1)]);
if((state_val_42843 === (1))){
var inst_42836 = cljs.core.async.timeout.call(null,(2000));
var state_42842__$1 = state_42842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42842__$1,(2),inst_42836);
} else {
if((state_val_42843 === (2))){
var inst_42838 = (state_42842[(2)]);
var inst_42839 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_42840 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42839);
var state_42842__$1 = (function (){var statearr_42844 = state_42842;
(statearr_42844[(7)] = inst_42838);

return statearr_42844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42842__$1,inst_42840);
} else {
return null;
}
}
});})(c__39204__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__39116__auto__,c__39204__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39117__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39117__auto____0 = (function (){
var statearr_42845 = [null,null,null,null,null,null,null,null];
(statearr_42845[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39117__auto__);

(statearr_42845[(1)] = (1));

return statearr_42845;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39117__auto____1 = (function (state_42842){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_42842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e42846){if((e42846 instanceof Object)){
var ex__39120__auto__ = e42846;
var statearr_42847_42849 = state_42842;
(statearr_42847_42849[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42850 = state_42842;
state_42842 = G__42850;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39117__auto__ = function(state_42842){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39117__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39117__auto____1.call(this,state_42842);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39117__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39117__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto__,figwheel_version,temp__4657__auto__))
})();
var state__39206__auto__ = (function (){var statearr_42848 = f__39205__auto__.call(null);
(statearr_42848[(6)] = c__39204__auto__);

return statearr_42848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto__,figwheel_version,temp__4657__auto__))
);

return c__39204__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42851){
var map__42852 = p__42851;
var map__42852__$1 = ((((!((map__42852 == null)))?((((map__42852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42852):map__42852);
var file = cljs.core.get.call(null,map__42852__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42852__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42852__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42854 = "";
var G__42854__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42854),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42854);
var G__42854__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42854__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42854__$1);
if(cljs.core.truth_((function (){var and__36508__auto__ = line;
if(cljs.core.truth_(and__36508__auto__)){
return column;
} else {
return and__36508__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42854__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42854__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42855){
var map__42856 = p__42855;
var map__42856__$1 = ((((!((map__42856 == null)))?((((map__42856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42856):map__42856);
var ed = map__42856__$1;
var formatted_exception = cljs.core.get.call(null,map__42856__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42856__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42856__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42858_42862 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42859_42863 = null;
var count__42860_42864 = (0);
var i__42861_42865 = (0);
while(true){
if((i__42861_42865 < count__42860_42864)){
var msg_42866 = cljs.core._nth.call(null,chunk__42859_42863,i__42861_42865);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42866);

var G__42867 = seq__42858_42862;
var G__42868 = chunk__42859_42863;
var G__42869 = count__42860_42864;
var G__42870 = (i__42861_42865 + (1));
seq__42858_42862 = G__42867;
chunk__42859_42863 = G__42868;
count__42860_42864 = G__42869;
i__42861_42865 = G__42870;
continue;
} else {
var temp__4657__auto___42871 = cljs.core.seq.call(null,seq__42858_42862);
if(temp__4657__auto___42871){
var seq__42858_42872__$1 = temp__4657__auto___42871;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42858_42872__$1)){
var c__37359__auto___42873 = cljs.core.chunk_first.call(null,seq__42858_42872__$1);
var G__42874 = cljs.core.chunk_rest.call(null,seq__42858_42872__$1);
var G__42875 = c__37359__auto___42873;
var G__42876 = cljs.core.count.call(null,c__37359__auto___42873);
var G__42877 = (0);
seq__42858_42862 = G__42874;
chunk__42859_42863 = G__42875;
count__42860_42864 = G__42876;
i__42861_42865 = G__42877;
continue;
} else {
var msg_42878 = cljs.core.first.call(null,seq__42858_42872__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42878);

var G__42879 = cljs.core.next.call(null,seq__42858_42872__$1);
var G__42880 = null;
var G__42881 = (0);
var G__42882 = (0);
seq__42858_42862 = G__42879;
chunk__42859_42863 = G__42880;
count__42860_42864 = G__42881;
i__42861_42865 = G__42882;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42883){
var map__42884 = p__42883;
var map__42884__$1 = ((((!((map__42884 == null)))?((((map__42884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42884.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42884):map__42884);
var w = map__42884__$1;
var message = cljs.core.get.call(null,map__42884__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__36508__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__36508__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__36508__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__42886 = cljs.core.seq.call(null,plugins);
var chunk__42887 = null;
var count__42888 = (0);
var i__42889 = (0);
while(true){
if((i__42889 < count__42888)){
var vec__42890 = cljs.core._nth.call(null,chunk__42887,i__42889);
var k = cljs.core.nth.call(null,vec__42890,(0),null);
var plugin = cljs.core.nth.call(null,vec__42890,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42896 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42886,chunk__42887,count__42888,i__42889,pl_42896,vec__42890,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42896.call(null,msg_hist);
});})(seq__42886,chunk__42887,count__42888,i__42889,pl_42896,vec__42890,k,plugin))
);
} else {
}

var G__42897 = seq__42886;
var G__42898 = chunk__42887;
var G__42899 = count__42888;
var G__42900 = (i__42889 + (1));
seq__42886 = G__42897;
chunk__42887 = G__42898;
count__42888 = G__42899;
i__42889 = G__42900;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42886);
if(temp__4657__auto__){
var seq__42886__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42886__$1)){
var c__37359__auto__ = cljs.core.chunk_first.call(null,seq__42886__$1);
var G__42901 = cljs.core.chunk_rest.call(null,seq__42886__$1);
var G__42902 = c__37359__auto__;
var G__42903 = cljs.core.count.call(null,c__37359__auto__);
var G__42904 = (0);
seq__42886 = G__42901;
chunk__42887 = G__42902;
count__42888 = G__42903;
i__42889 = G__42904;
continue;
} else {
var vec__42893 = cljs.core.first.call(null,seq__42886__$1);
var k = cljs.core.nth.call(null,vec__42893,(0),null);
var plugin = cljs.core.nth.call(null,vec__42893,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42905 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42886,chunk__42887,count__42888,i__42889,pl_42905,vec__42893,k,plugin,seq__42886__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42905.call(null,msg_hist);
});})(seq__42886,chunk__42887,count__42888,i__42889,pl_42905,vec__42893,k,plugin,seq__42886__$1,temp__4657__auto__))
);
} else {
}

var G__42906 = cljs.core.next.call(null,seq__42886__$1);
var G__42907 = null;
var G__42908 = (0);
var G__42909 = (0);
seq__42886 = G__42906;
chunk__42887 = G__42907;
count__42888 = G__42908;
i__42889 = G__42909;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__42911 = arguments.length;
switch (G__42911) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__42912_42917 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42913_42918 = null;
var count__42914_42919 = (0);
var i__42915_42920 = (0);
while(true){
if((i__42915_42920 < count__42914_42919)){
var msg_42921 = cljs.core._nth.call(null,chunk__42913_42918,i__42915_42920);
figwheel.client.socket.handle_incoming_message.call(null,msg_42921);

var G__42922 = seq__42912_42917;
var G__42923 = chunk__42913_42918;
var G__42924 = count__42914_42919;
var G__42925 = (i__42915_42920 + (1));
seq__42912_42917 = G__42922;
chunk__42913_42918 = G__42923;
count__42914_42919 = G__42924;
i__42915_42920 = G__42925;
continue;
} else {
var temp__4657__auto___42926 = cljs.core.seq.call(null,seq__42912_42917);
if(temp__4657__auto___42926){
var seq__42912_42927__$1 = temp__4657__auto___42926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42912_42927__$1)){
var c__37359__auto___42928 = cljs.core.chunk_first.call(null,seq__42912_42927__$1);
var G__42929 = cljs.core.chunk_rest.call(null,seq__42912_42927__$1);
var G__42930 = c__37359__auto___42928;
var G__42931 = cljs.core.count.call(null,c__37359__auto___42928);
var G__42932 = (0);
seq__42912_42917 = G__42929;
chunk__42913_42918 = G__42930;
count__42914_42919 = G__42931;
i__42915_42920 = G__42932;
continue;
} else {
var msg_42933 = cljs.core.first.call(null,seq__42912_42927__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42933);

var G__42934 = cljs.core.next.call(null,seq__42912_42927__$1);
var G__42935 = null;
var G__42936 = (0);
var G__42937 = (0);
seq__42912_42917 = G__42934;
chunk__42913_42918 = G__42935;
count__42914_42919 = G__42936;
i__42915_42920 = G__42937;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__37696__auto__ = [];
var len__37689__auto___42942 = arguments.length;
var i__37690__auto___42943 = (0);
while(true){
if((i__37690__auto___42943 < len__37689__auto___42942)){
args__37696__auto__.push((arguments[i__37690__auto___42943]));

var G__42944 = (i__37690__auto___42943 + (1));
i__37690__auto___42943 = G__42944;
continue;
} else {
}
break;
}

var argseq__37697__auto__ = ((((0) < args__37696__auto__.length))?(new cljs.core.IndexedSeq(args__37696__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37697__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42939){
var map__42940 = p__42939;
var map__42940__$1 = ((((!((map__42940 == null)))?((((map__42940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42940):map__42940);
var opts = map__42940__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42938){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42938));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42945){if((e42945 instanceof Error)){
var e = e42945;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e42945;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__42946){
var map__42947 = p__42946;
var map__42947__$1 = ((((!((map__42947 == null)))?((((map__42947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42947):map__42947);
var msg_name = cljs.core.get.call(null,map__42947__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1517293983666
