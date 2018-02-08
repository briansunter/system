// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async39249 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39249 = (function (f,meta39250){
this.f = f;
this.meta39250 = meta39250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39251,meta39250__$1){
var self__ = this;
var _39251__$1 = this;
return (new cljs.core.async.t_cljs$core$async39249(self__.f,meta39250__$1));
});

cljs.core.async.t_cljs$core$async39249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39251){
var self__ = this;
var _39251__$1 = this;
return self__.meta39250;
});

cljs.core.async.t_cljs$core$async39249.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta39250","meta39250",-1390480469,null)], null);
});

cljs.core.async.t_cljs$core$async39249.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39249";

cljs.core.async.t_cljs$core$async39249.cljs$lang$ctorPrWriter = (function (this__37145__auto__,writer__37146__auto__,opt__37147__auto__){
return cljs.core._write.call(null,writer__37146__auto__,"cljs.core.async/t_cljs$core$async39249");
});

cljs.core.async.__GT_t_cljs$core$async39249 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async39249(f__$1,meta39250){
return (new cljs.core.async.t_cljs$core$async39249(f__$1,meta39250));
});

}

return (new cljs.core.async.t_cljs$core$async39249(f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__39254 = arguments.length;
switch (G__39254) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__39257 = arguments.length;
switch (G__39257) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39259 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39259);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39259,ret){
return (function (){
return fn1.call(null,val_39259);
});})(val_39259,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__39261 = arguments.length;
switch (G__39261) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__37465__auto___39263 = n;
var x_39264 = (0);
while(true){
if((x_39264 < n__37465__auto___39263)){
(a[x_39264] = (0));

var G__39265 = (x_39264 + (1));
x_39264 = G__39265;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__39266 = (i + (1));
i = G__39266;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39267 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39267 = (function (flag,meta39268){
this.flag = flag;
this.meta39268 = meta39268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39269,meta39268__$1){
var self__ = this;
var _39269__$1 = this;
return (new cljs.core.async.t_cljs$core$async39267(self__.flag,meta39268__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39269){
var self__ = this;
var _39269__$1 = this;
return self__.meta39268;
});})(flag))
;

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39267.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39268","meta39268",1736728731,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39267";

cljs.core.async.t_cljs$core$async39267.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37145__auto__,writer__37146__auto__,opt__37147__auto__){
return cljs.core._write.call(null,writer__37146__auto__,"cljs.core.async/t_cljs$core$async39267");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39267 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39267(flag__$1,meta39268){
return (new cljs.core.async.t_cljs$core$async39267(flag__$1,meta39268));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39267(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39270 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39270 = (function (flag,cb,meta39271){
this.flag = flag;
this.cb = cb;
this.meta39271 = meta39271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39272,meta39271__$1){
var self__ = this;
var _39272__$1 = this;
return (new cljs.core.async.t_cljs$core$async39270(self__.flag,self__.cb,meta39271__$1));
});

cljs.core.async.t_cljs$core$async39270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39272){
var self__ = this;
var _39272__$1 = this;
return self__.meta39271;
});

cljs.core.async.t_cljs$core$async39270.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39270.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39270.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39271","meta39271",-1318899287,null)], null);
});

cljs.core.async.t_cljs$core$async39270.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39270";

cljs.core.async.t_cljs$core$async39270.cljs$lang$ctorPrWriter = (function (this__37145__auto__,writer__37146__auto__,opt__37147__auto__){
return cljs.core._write.call(null,writer__37146__auto__,"cljs.core.async/t_cljs$core$async39270");
});

cljs.core.async.__GT_t_cljs$core$async39270 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39270(flag__$1,cb__$1,meta39271){
return (new cljs.core.async.t_cljs$core$async39270(flag__$1,cb__$1,meta39271));
});

}

return (new cljs.core.async.t_cljs$core$async39270(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39273_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39273_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39274_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39274_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__36520__auto__ = wport;
if(cljs.core.truth_(or__36520__auto__)){
return or__36520__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39275 = (i + (1));
i = G__39275;
continue;
}
} else {
return null;
}
break;
}
})();
var or__36520__auto__ = ret;
if(cljs.core.truth_(or__36520__auto__)){
return or__36520__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__36508__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__36508__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__36508__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__37696__auto__ = [];
var len__37689__auto___39281 = arguments.length;
var i__37690__auto___39282 = (0);
while(true){
if((i__37690__auto___39282 < len__37689__auto___39281)){
args__37696__auto__.push((arguments[i__37690__auto___39282]));

var G__39283 = (i__37690__auto___39282 + (1));
i__37690__auto___39282 = G__39283;
continue;
} else {
}
break;
}

var argseq__37697__auto__ = ((((1) < args__37696__auto__.length))?(new cljs.core.IndexedSeq(args__37696__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37697__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39278){
var map__39279 = p__39278;
var map__39279__$1 = ((((!((map__39279 == null)))?((((map__39279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39279):map__39279);
var opts = map__39279__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39276){
var G__39277 = cljs.core.first.call(null,seq39276);
var seq39276__$1 = cljs.core.next.call(null,seq39276);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39277,seq39276__$1);
});

/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__39285 = arguments.length;
switch (G__39285) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__39204__auto___39331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___39331){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___39331){
return (function (state_39309){
var state_val_39310 = (state_39309[(1)]);
if((state_val_39310 === (7))){
var inst_39305 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
var statearr_39311_39332 = state_39309__$1;
(statearr_39311_39332[(2)] = inst_39305);

(statearr_39311_39332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (1))){
var state_39309__$1 = state_39309;
var statearr_39312_39333 = state_39309__$1;
(statearr_39312_39333[(2)] = null);

(statearr_39312_39333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (4))){
var inst_39288 = (state_39309[(7)]);
var inst_39288__$1 = (state_39309[(2)]);
var inst_39289 = (inst_39288__$1 == null);
var state_39309__$1 = (function (){var statearr_39313 = state_39309;
(statearr_39313[(7)] = inst_39288__$1);

return statearr_39313;
})();
if(cljs.core.truth_(inst_39289)){
var statearr_39314_39334 = state_39309__$1;
(statearr_39314_39334[(1)] = (5));

} else {
var statearr_39315_39335 = state_39309__$1;
(statearr_39315_39335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (13))){
var state_39309__$1 = state_39309;
var statearr_39316_39336 = state_39309__$1;
(statearr_39316_39336[(2)] = null);

(statearr_39316_39336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (6))){
var inst_39288 = (state_39309[(7)]);
var state_39309__$1 = state_39309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39309__$1,(11),to,inst_39288);
} else {
if((state_val_39310 === (3))){
var inst_39307 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39309__$1,inst_39307);
} else {
if((state_val_39310 === (12))){
var state_39309__$1 = state_39309;
var statearr_39317_39337 = state_39309__$1;
(statearr_39317_39337[(2)] = null);

(statearr_39317_39337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (2))){
var state_39309__$1 = state_39309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39309__$1,(4),from);
} else {
if((state_val_39310 === (11))){
var inst_39298 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
if(cljs.core.truth_(inst_39298)){
var statearr_39318_39338 = state_39309__$1;
(statearr_39318_39338[(1)] = (12));

} else {
var statearr_39319_39339 = state_39309__$1;
(statearr_39319_39339[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (9))){
var state_39309__$1 = state_39309;
var statearr_39320_39340 = state_39309__$1;
(statearr_39320_39340[(2)] = null);

(statearr_39320_39340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (5))){
var state_39309__$1 = state_39309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39321_39341 = state_39309__$1;
(statearr_39321_39341[(1)] = (8));

} else {
var statearr_39322_39342 = state_39309__$1;
(statearr_39322_39342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (14))){
var inst_39303 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
var statearr_39323_39343 = state_39309__$1;
(statearr_39323_39343[(2)] = inst_39303);

(statearr_39323_39343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (10))){
var inst_39295 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
var statearr_39324_39344 = state_39309__$1;
(statearr_39324_39344[(2)] = inst_39295);

(statearr_39324_39344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (8))){
var inst_39292 = cljs.core.async.close_BANG_.call(null,to);
var state_39309__$1 = state_39309;
var statearr_39325_39345 = state_39309__$1;
(statearr_39325_39345[(2)] = inst_39292);

(statearr_39325_39345[(1)] = (10));


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
});})(c__39204__auto___39331))
;
return ((function (switch__39116__auto__,c__39204__auto___39331){
return (function() {
var cljs$core$async$state_machine__39117__auto__ = null;
var cljs$core$async$state_machine__39117__auto____0 = (function (){
var statearr_39326 = [null,null,null,null,null,null,null,null];
(statearr_39326[(0)] = cljs$core$async$state_machine__39117__auto__);

(statearr_39326[(1)] = (1));

return statearr_39326;
});
var cljs$core$async$state_machine__39117__auto____1 = (function (state_39309){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_39309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e39327){if((e39327 instanceof Object)){
var ex__39120__auto__ = e39327;
var statearr_39328_39346 = state_39309;
(statearr_39328_39346[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39347 = state_39309;
state_39309 = G__39347;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$state_machine__39117__auto__ = function(state_39309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39117__auto____1.call(this,state_39309);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39117__auto____0;
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39117__auto____1;
return cljs$core$async$state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___39331))
})();
var state__39206__auto__ = (function (){var statearr_39329 = f__39205__auto__.call(null);
(statearr_39329[(6)] = c__39204__auto___39331);

return statearr_39329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___39331))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__39348){
var vec__39349 = p__39348;
var v = cljs.core.nth.call(null,vec__39349,(0),null);
var p = cljs.core.nth.call(null,vec__39349,(1),null);
var job = vec__39349;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__39204__auto___39520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___39520,res,vec__39349,v,p,job,jobs,results){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___39520,res,vec__39349,v,p,job,jobs,results){
return (function (state_39356){
var state_val_39357 = (state_39356[(1)]);
if((state_val_39357 === (1))){
var state_39356__$1 = state_39356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39356__$1,(2),res,v);
} else {
if((state_val_39357 === (2))){
var inst_39353 = (state_39356[(2)]);
var inst_39354 = cljs.core.async.close_BANG_.call(null,res);
var state_39356__$1 = (function (){var statearr_39358 = state_39356;
(statearr_39358[(7)] = inst_39353);

return statearr_39358;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39356__$1,inst_39354);
} else {
return null;
}
}
});})(c__39204__auto___39520,res,vec__39349,v,p,job,jobs,results))
;
return ((function (switch__39116__auto__,c__39204__auto___39520,res,vec__39349,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____0 = (function (){
var statearr_39359 = [null,null,null,null,null,null,null,null];
(statearr_39359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__);

(statearr_39359[(1)] = (1));

return statearr_39359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____1 = (function (state_39356){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_39356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e39360){if((e39360 instanceof Object)){
var ex__39120__auto__ = e39360;
var statearr_39361_39521 = state_39356;
(statearr_39361_39521[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39522 = state_39356;
state_39356 = G__39522;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__ = function(state_39356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____1.call(this,state_39356);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___39520,res,vec__39349,v,p,job,jobs,results))
})();
var state__39206__auto__ = (function (){var statearr_39362 = f__39205__auto__.call(null);
(statearr_39362[(6)] = c__39204__auto___39520);

return statearr_39362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___39520,res,vec__39349,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39363){
var vec__39364 = p__39363;
var v = cljs.core.nth.call(null,vec__39364,(0),null);
var p = cljs.core.nth.call(null,vec__39364,(1),null);
var job = vec__39364;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__37465__auto___39523 = n;
var __39524 = (0);
while(true){
if((__39524 < n__37465__auto___39523)){
var G__39367_39525 = type;
var G__39367_39526__$1 = (((G__39367_39525 instanceof cljs.core.Keyword))?G__39367_39525.fqn:null);
switch (G__39367_39526__$1) {
case "compute":
var c__39204__auto___39528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39524,c__39204__auto___39528,G__39367_39525,G__39367_39526__$1,n__37465__auto___39523,jobs,results,process,async){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (__39524,c__39204__auto___39528,G__39367_39525,G__39367_39526__$1,n__37465__auto___39523,jobs,results,process,async){
return (function (state_39380){
var state_val_39381 = (state_39380[(1)]);
if((state_val_39381 === (1))){
var state_39380__$1 = state_39380;
var statearr_39382_39529 = state_39380__$1;
(statearr_39382_39529[(2)] = null);

(statearr_39382_39529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39381 === (2))){
var state_39380__$1 = state_39380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39380__$1,(4),jobs);
} else {
if((state_val_39381 === (3))){
var inst_39378 = (state_39380[(2)]);
var state_39380__$1 = state_39380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39380__$1,inst_39378);
} else {
if((state_val_39381 === (4))){
var inst_39370 = (state_39380[(2)]);
var inst_39371 = process.call(null,inst_39370);
var state_39380__$1 = state_39380;
if(cljs.core.truth_(inst_39371)){
var statearr_39383_39530 = state_39380__$1;
(statearr_39383_39530[(1)] = (5));

} else {
var statearr_39384_39531 = state_39380__$1;
(statearr_39384_39531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39381 === (5))){
var state_39380__$1 = state_39380;
var statearr_39385_39532 = state_39380__$1;
(statearr_39385_39532[(2)] = null);

(statearr_39385_39532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39381 === (6))){
var state_39380__$1 = state_39380;
var statearr_39386_39533 = state_39380__$1;
(statearr_39386_39533[(2)] = null);

(statearr_39386_39533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39381 === (7))){
var inst_39376 = (state_39380[(2)]);
var state_39380__$1 = state_39380;
var statearr_39387_39534 = state_39380__$1;
(statearr_39387_39534[(2)] = inst_39376);

(statearr_39387_39534[(1)] = (3));


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
});})(__39524,c__39204__auto___39528,G__39367_39525,G__39367_39526__$1,n__37465__auto___39523,jobs,results,process,async))
;
return ((function (__39524,switch__39116__auto__,c__39204__auto___39528,G__39367_39525,G__39367_39526__$1,n__37465__auto___39523,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____0 = (function (){
var statearr_39388 = [null,null,null,null,null,null,null];
(statearr_39388[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__);

(statearr_39388[(1)] = (1));

return statearr_39388;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____1 = (function (state_39380){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_39380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e39389){if((e39389 instanceof Object)){
var ex__39120__auto__ = e39389;
var statearr_39390_39535 = state_39380;
(statearr_39390_39535[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39536 = state_39380;
state_39380 = G__39536;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__ = function(state_39380){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____1.call(this,state_39380);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__;
})()
;})(__39524,switch__39116__auto__,c__39204__auto___39528,G__39367_39525,G__39367_39526__$1,n__37465__auto___39523,jobs,results,process,async))
})();
var state__39206__auto__ = (function (){var statearr_39391 = f__39205__auto__.call(null);
(statearr_39391[(6)] = c__39204__auto___39528);

return statearr_39391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(__39524,c__39204__auto___39528,G__39367_39525,G__39367_39526__$1,n__37465__auto___39523,jobs,results,process,async))
);


break;
case "async":
var c__39204__auto___39537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39524,c__39204__auto___39537,G__39367_39525,G__39367_39526__$1,n__37465__auto___39523,jobs,results,process,async){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (__39524,c__39204__auto___39537,G__39367_39525,G__39367_39526__$1,n__37465__auto___39523,jobs,results,process,async){
return (function (state_39404){
var state_val_39405 = (state_39404[(1)]);
if((state_val_39405 === (1))){
var state_39404__$1 = state_39404;
var statearr_39406_39538 = state_39404__$1;
(statearr_39406_39538[(2)] = null);

(statearr_39406_39538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39405 === (2))){
var state_39404__$1 = state_39404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39404__$1,(4),jobs);
} else {
if((state_val_39405 === (3))){
var inst_39402 = (state_39404[(2)]);
var state_39404__$1 = state_39404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39404__$1,inst_39402);
} else {
if((state_val_39405 === (4))){
var inst_39394 = (state_39404[(2)]);
var inst_39395 = async.call(null,inst_39394);
var state_39404__$1 = state_39404;
if(cljs.core.truth_(inst_39395)){
var statearr_39407_39539 = state_39404__$1;
(statearr_39407_39539[(1)] = (5));

} else {
var statearr_39408_39540 = state_39404__$1;
(statearr_39408_39540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39405 === (5))){
var state_39404__$1 = state_39404;
var statearr_39409_39541 = state_39404__$1;
(statearr_39409_39541[(2)] = null);

(statearr_39409_39541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39405 === (6))){
var state_39404__$1 = state_39404;
var statearr_39410_39542 = state_39404__$1;
(statearr_39410_39542[(2)] = null);

(statearr_39410_39542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39405 === (7))){
var inst_39400 = (state_39404[(2)]);
var state_39404__$1 = state_39404;
var statearr_39411_39543 = state_39404__$1;
(statearr_39411_39543[(2)] = inst_39400);

(statearr_39411_39543[(1)] = (3));


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
});})(__39524,c__39204__auto___39537,G__39367_39525,G__39367_39526__$1,n__37465__auto___39523,jobs,results,process,async))
;
return ((function (__39524,switch__39116__auto__,c__39204__auto___39537,G__39367_39525,G__39367_39526__$1,n__37465__auto___39523,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____0 = (function (){
var statearr_39412 = [null,null,null,null,null,null,null];
(statearr_39412[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__);

(statearr_39412[(1)] = (1));

return statearr_39412;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____1 = (function (state_39404){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_39404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e39413){if((e39413 instanceof Object)){
var ex__39120__auto__ = e39413;
var statearr_39414_39544 = state_39404;
(statearr_39414_39544[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39545 = state_39404;
state_39404 = G__39545;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__ = function(state_39404){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____1.call(this,state_39404);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__;
})()
;})(__39524,switch__39116__auto__,c__39204__auto___39537,G__39367_39525,G__39367_39526__$1,n__37465__auto___39523,jobs,results,process,async))
})();
var state__39206__auto__ = (function (){var statearr_39415 = f__39205__auto__.call(null);
(statearr_39415[(6)] = c__39204__auto___39537);

return statearr_39415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(__39524,c__39204__auto___39537,G__39367_39525,G__39367_39526__$1,n__37465__auto___39523,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39367_39526__$1)].join('')));

}

var G__39546 = (__39524 + (1));
__39524 = G__39546;
continue;
} else {
}
break;
}

var c__39204__auto___39547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___39547,jobs,results,process,async){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___39547,jobs,results,process,async){
return (function (state_39437){
var state_val_39438 = (state_39437[(1)]);
if((state_val_39438 === (1))){
var state_39437__$1 = state_39437;
var statearr_39439_39548 = state_39437__$1;
(statearr_39439_39548[(2)] = null);

(statearr_39439_39548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39438 === (2))){
var state_39437__$1 = state_39437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39437__$1,(4),from);
} else {
if((state_val_39438 === (3))){
var inst_39435 = (state_39437[(2)]);
var state_39437__$1 = state_39437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39437__$1,inst_39435);
} else {
if((state_val_39438 === (4))){
var inst_39418 = (state_39437[(7)]);
var inst_39418__$1 = (state_39437[(2)]);
var inst_39419 = (inst_39418__$1 == null);
var state_39437__$1 = (function (){var statearr_39440 = state_39437;
(statearr_39440[(7)] = inst_39418__$1);

return statearr_39440;
})();
if(cljs.core.truth_(inst_39419)){
var statearr_39441_39549 = state_39437__$1;
(statearr_39441_39549[(1)] = (5));

} else {
var statearr_39442_39550 = state_39437__$1;
(statearr_39442_39550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39438 === (5))){
var inst_39421 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39437__$1 = state_39437;
var statearr_39443_39551 = state_39437__$1;
(statearr_39443_39551[(2)] = inst_39421);

(statearr_39443_39551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39438 === (6))){
var inst_39423 = (state_39437[(8)]);
var inst_39418 = (state_39437[(7)]);
var inst_39423__$1 = cljs.core.async.chan.call(null,(1));
var inst_39424 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39425 = [inst_39418,inst_39423__$1];
var inst_39426 = (new cljs.core.PersistentVector(null,2,(5),inst_39424,inst_39425,null));
var state_39437__$1 = (function (){var statearr_39444 = state_39437;
(statearr_39444[(8)] = inst_39423__$1);

return statearr_39444;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39437__$1,(8),jobs,inst_39426);
} else {
if((state_val_39438 === (7))){
var inst_39433 = (state_39437[(2)]);
var state_39437__$1 = state_39437;
var statearr_39445_39552 = state_39437__$1;
(statearr_39445_39552[(2)] = inst_39433);

(statearr_39445_39552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39438 === (8))){
var inst_39423 = (state_39437[(8)]);
var inst_39428 = (state_39437[(2)]);
var state_39437__$1 = (function (){var statearr_39446 = state_39437;
(statearr_39446[(9)] = inst_39428);

return statearr_39446;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39437__$1,(9),results,inst_39423);
} else {
if((state_val_39438 === (9))){
var inst_39430 = (state_39437[(2)]);
var state_39437__$1 = (function (){var statearr_39447 = state_39437;
(statearr_39447[(10)] = inst_39430);

return statearr_39447;
})();
var statearr_39448_39553 = state_39437__$1;
(statearr_39448_39553[(2)] = null);

(statearr_39448_39553[(1)] = (2));


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
});})(c__39204__auto___39547,jobs,results,process,async))
;
return ((function (switch__39116__auto__,c__39204__auto___39547,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____0 = (function (){
var statearr_39449 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39449[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__);

(statearr_39449[(1)] = (1));

return statearr_39449;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____1 = (function (state_39437){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_39437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e39450){if((e39450 instanceof Object)){
var ex__39120__auto__ = e39450;
var statearr_39451_39554 = state_39437;
(statearr_39451_39554[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39555 = state_39437;
state_39437 = G__39555;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__ = function(state_39437){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____1.call(this,state_39437);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___39547,jobs,results,process,async))
})();
var state__39206__auto__ = (function (){var statearr_39452 = f__39205__auto__.call(null);
(statearr_39452[(6)] = c__39204__auto___39547);

return statearr_39452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___39547,jobs,results,process,async))
);


var c__39204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto__,jobs,results,process,async){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto__,jobs,results,process,async){
return (function (state_39490){
var state_val_39491 = (state_39490[(1)]);
if((state_val_39491 === (7))){
var inst_39486 = (state_39490[(2)]);
var state_39490__$1 = state_39490;
var statearr_39492_39556 = state_39490__$1;
(statearr_39492_39556[(2)] = inst_39486);

(statearr_39492_39556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (20))){
var state_39490__$1 = state_39490;
var statearr_39493_39557 = state_39490__$1;
(statearr_39493_39557[(2)] = null);

(statearr_39493_39557[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (1))){
var state_39490__$1 = state_39490;
var statearr_39494_39558 = state_39490__$1;
(statearr_39494_39558[(2)] = null);

(statearr_39494_39558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (4))){
var inst_39455 = (state_39490[(7)]);
var inst_39455__$1 = (state_39490[(2)]);
var inst_39456 = (inst_39455__$1 == null);
var state_39490__$1 = (function (){var statearr_39495 = state_39490;
(statearr_39495[(7)] = inst_39455__$1);

return statearr_39495;
})();
if(cljs.core.truth_(inst_39456)){
var statearr_39496_39559 = state_39490__$1;
(statearr_39496_39559[(1)] = (5));

} else {
var statearr_39497_39560 = state_39490__$1;
(statearr_39497_39560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (15))){
var inst_39468 = (state_39490[(8)]);
var state_39490__$1 = state_39490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39490__$1,(18),to,inst_39468);
} else {
if((state_val_39491 === (21))){
var inst_39481 = (state_39490[(2)]);
var state_39490__$1 = state_39490;
var statearr_39498_39561 = state_39490__$1;
(statearr_39498_39561[(2)] = inst_39481);

(statearr_39498_39561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (13))){
var inst_39483 = (state_39490[(2)]);
var state_39490__$1 = (function (){var statearr_39499 = state_39490;
(statearr_39499[(9)] = inst_39483);

return statearr_39499;
})();
var statearr_39500_39562 = state_39490__$1;
(statearr_39500_39562[(2)] = null);

(statearr_39500_39562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (6))){
var inst_39455 = (state_39490[(7)]);
var state_39490__$1 = state_39490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39490__$1,(11),inst_39455);
} else {
if((state_val_39491 === (17))){
var inst_39476 = (state_39490[(2)]);
var state_39490__$1 = state_39490;
if(cljs.core.truth_(inst_39476)){
var statearr_39501_39563 = state_39490__$1;
(statearr_39501_39563[(1)] = (19));

} else {
var statearr_39502_39564 = state_39490__$1;
(statearr_39502_39564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (3))){
var inst_39488 = (state_39490[(2)]);
var state_39490__$1 = state_39490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39490__$1,inst_39488);
} else {
if((state_val_39491 === (12))){
var inst_39465 = (state_39490[(10)]);
var state_39490__$1 = state_39490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39490__$1,(14),inst_39465);
} else {
if((state_val_39491 === (2))){
var state_39490__$1 = state_39490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39490__$1,(4),results);
} else {
if((state_val_39491 === (19))){
var state_39490__$1 = state_39490;
var statearr_39503_39565 = state_39490__$1;
(statearr_39503_39565[(2)] = null);

(statearr_39503_39565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (11))){
var inst_39465 = (state_39490[(2)]);
var state_39490__$1 = (function (){var statearr_39504 = state_39490;
(statearr_39504[(10)] = inst_39465);

return statearr_39504;
})();
var statearr_39505_39566 = state_39490__$1;
(statearr_39505_39566[(2)] = null);

(statearr_39505_39566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (9))){
var state_39490__$1 = state_39490;
var statearr_39506_39567 = state_39490__$1;
(statearr_39506_39567[(2)] = null);

(statearr_39506_39567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (5))){
var state_39490__$1 = state_39490;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39507_39568 = state_39490__$1;
(statearr_39507_39568[(1)] = (8));

} else {
var statearr_39508_39569 = state_39490__$1;
(statearr_39508_39569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (14))){
var inst_39470 = (state_39490[(11)]);
var inst_39468 = (state_39490[(8)]);
var inst_39468__$1 = (state_39490[(2)]);
var inst_39469 = (inst_39468__$1 == null);
var inst_39470__$1 = cljs.core.not.call(null,inst_39469);
var state_39490__$1 = (function (){var statearr_39509 = state_39490;
(statearr_39509[(11)] = inst_39470__$1);

(statearr_39509[(8)] = inst_39468__$1);

return statearr_39509;
})();
if(inst_39470__$1){
var statearr_39510_39570 = state_39490__$1;
(statearr_39510_39570[(1)] = (15));

} else {
var statearr_39511_39571 = state_39490__$1;
(statearr_39511_39571[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (16))){
var inst_39470 = (state_39490[(11)]);
var state_39490__$1 = state_39490;
var statearr_39512_39572 = state_39490__$1;
(statearr_39512_39572[(2)] = inst_39470);

(statearr_39512_39572[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (10))){
var inst_39462 = (state_39490[(2)]);
var state_39490__$1 = state_39490;
var statearr_39513_39573 = state_39490__$1;
(statearr_39513_39573[(2)] = inst_39462);

(statearr_39513_39573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (18))){
var inst_39473 = (state_39490[(2)]);
var state_39490__$1 = state_39490;
var statearr_39514_39574 = state_39490__$1;
(statearr_39514_39574[(2)] = inst_39473);

(statearr_39514_39574[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39491 === (8))){
var inst_39459 = cljs.core.async.close_BANG_.call(null,to);
var state_39490__$1 = state_39490;
var statearr_39515_39575 = state_39490__$1;
(statearr_39515_39575[(2)] = inst_39459);

(statearr_39515_39575[(1)] = (10));


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
}
}
}
}
});})(c__39204__auto__,jobs,results,process,async))
;
return ((function (switch__39116__auto__,c__39204__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____0 = (function (){
var statearr_39516 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__);

(statearr_39516[(1)] = (1));

return statearr_39516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____1 = (function (state_39490){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_39490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e39517){if((e39517 instanceof Object)){
var ex__39120__auto__ = e39517;
var statearr_39518_39576 = state_39490;
(statearr_39518_39576[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39577 = state_39490;
state_39490 = G__39577;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__ = function(state_39490){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____1.call(this,state_39490);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39117__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto__,jobs,results,process,async))
})();
var state__39206__auto__ = (function (){var statearr_39519 = f__39205__auto__.call(null);
(statearr_39519[(6)] = c__39204__auto__);

return statearr_39519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto__,jobs,results,process,async))
);

return c__39204__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__39579 = arguments.length;
switch (G__39579) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__39582 = arguments.length;
switch (G__39582) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__39585 = arguments.length;
switch (G__39585) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__39204__auto___39634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___39634,tc,fc){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___39634,tc,fc){
return (function (state_39611){
var state_val_39612 = (state_39611[(1)]);
if((state_val_39612 === (7))){
var inst_39607 = (state_39611[(2)]);
var state_39611__$1 = state_39611;
var statearr_39613_39635 = state_39611__$1;
(statearr_39613_39635[(2)] = inst_39607);

(statearr_39613_39635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (1))){
var state_39611__$1 = state_39611;
var statearr_39614_39636 = state_39611__$1;
(statearr_39614_39636[(2)] = null);

(statearr_39614_39636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (4))){
var inst_39588 = (state_39611[(7)]);
var inst_39588__$1 = (state_39611[(2)]);
var inst_39589 = (inst_39588__$1 == null);
var state_39611__$1 = (function (){var statearr_39615 = state_39611;
(statearr_39615[(7)] = inst_39588__$1);

return statearr_39615;
})();
if(cljs.core.truth_(inst_39589)){
var statearr_39616_39637 = state_39611__$1;
(statearr_39616_39637[(1)] = (5));

} else {
var statearr_39617_39638 = state_39611__$1;
(statearr_39617_39638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (13))){
var state_39611__$1 = state_39611;
var statearr_39618_39639 = state_39611__$1;
(statearr_39618_39639[(2)] = null);

(statearr_39618_39639[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (6))){
var inst_39588 = (state_39611[(7)]);
var inst_39594 = p.call(null,inst_39588);
var state_39611__$1 = state_39611;
if(cljs.core.truth_(inst_39594)){
var statearr_39619_39640 = state_39611__$1;
(statearr_39619_39640[(1)] = (9));

} else {
var statearr_39620_39641 = state_39611__$1;
(statearr_39620_39641[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (3))){
var inst_39609 = (state_39611[(2)]);
var state_39611__$1 = state_39611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39611__$1,inst_39609);
} else {
if((state_val_39612 === (12))){
var state_39611__$1 = state_39611;
var statearr_39621_39642 = state_39611__$1;
(statearr_39621_39642[(2)] = null);

(statearr_39621_39642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (2))){
var state_39611__$1 = state_39611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39611__$1,(4),ch);
} else {
if((state_val_39612 === (11))){
var inst_39588 = (state_39611[(7)]);
var inst_39598 = (state_39611[(2)]);
var state_39611__$1 = state_39611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39611__$1,(8),inst_39598,inst_39588);
} else {
if((state_val_39612 === (9))){
var state_39611__$1 = state_39611;
var statearr_39622_39643 = state_39611__$1;
(statearr_39622_39643[(2)] = tc);

(statearr_39622_39643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (5))){
var inst_39591 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39592 = cljs.core.async.close_BANG_.call(null,fc);
var state_39611__$1 = (function (){var statearr_39623 = state_39611;
(statearr_39623[(8)] = inst_39591);

return statearr_39623;
})();
var statearr_39624_39644 = state_39611__$1;
(statearr_39624_39644[(2)] = inst_39592);

(statearr_39624_39644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (14))){
var inst_39605 = (state_39611[(2)]);
var state_39611__$1 = state_39611;
var statearr_39625_39645 = state_39611__$1;
(statearr_39625_39645[(2)] = inst_39605);

(statearr_39625_39645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (10))){
var state_39611__$1 = state_39611;
var statearr_39626_39646 = state_39611__$1;
(statearr_39626_39646[(2)] = fc);

(statearr_39626_39646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39612 === (8))){
var inst_39600 = (state_39611[(2)]);
var state_39611__$1 = state_39611;
if(cljs.core.truth_(inst_39600)){
var statearr_39627_39647 = state_39611__$1;
(statearr_39627_39647[(1)] = (12));

} else {
var statearr_39628_39648 = state_39611__$1;
(statearr_39628_39648[(1)] = (13));

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
});})(c__39204__auto___39634,tc,fc))
;
return ((function (switch__39116__auto__,c__39204__auto___39634,tc,fc){
return (function() {
var cljs$core$async$state_machine__39117__auto__ = null;
var cljs$core$async$state_machine__39117__auto____0 = (function (){
var statearr_39629 = [null,null,null,null,null,null,null,null,null];
(statearr_39629[(0)] = cljs$core$async$state_machine__39117__auto__);

(statearr_39629[(1)] = (1));

return statearr_39629;
});
var cljs$core$async$state_machine__39117__auto____1 = (function (state_39611){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_39611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e39630){if((e39630 instanceof Object)){
var ex__39120__auto__ = e39630;
var statearr_39631_39649 = state_39611;
(statearr_39631_39649[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39650 = state_39611;
state_39611 = G__39650;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$state_machine__39117__auto__ = function(state_39611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39117__auto____1.call(this,state_39611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39117__auto____0;
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39117__auto____1;
return cljs$core$async$state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___39634,tc,fc))
})();
var state__39206__auto__ = (function (){var statearr_39632 = f__39205__auto__.call(null);
(statearr_39632[(6)] = c__39204__auto___39634);

return statearr_39632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___39634,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__39204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto__){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto__){
return (function (state_39665){
var state_val_39666 = (state_39665[(1)]);
if((state_val_39666 === (1))){
var inst_39651 = init;
var state_39665__$1 = (function (){var statearr_39667 = state_39665;
(statearr_39667[(7)] = inst_39651);

return statearr_39667;
})();
var statearr_39668_39680 = state_39665__$1;
(statearr_39668_39680[(2)] = null);

(statearr_39668_39680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39666 === (2))){
var state_39665__$1 = state_39665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39665__$1,(4),ch);
} else {
if((state_val_39666 === (3))){
var inst_39663 = (state_39665[(2)]);
var state_39665__$1 = state_39665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39665__$1,inst_39663);
} else {
if((state_val_39666 === (4))){
var inst_39654 = (state_39665[(8)]);
var inst_39654__$1 = (state_39665[(2)]);
var inst_39655 = (inst_39654__$1 == null);
var state_39665__$1 = (function (){var statearr_39669 = state_39665;
(statearr_39669[(8)] = inst_39654__$1);

return statearr_39669;
})();
if(cljs.core.truth_(inst_39655)){
var statearr_39670_39681 = state_39665__$1;
(statearr_39670_39681[(1)] = (5));

} else {
var statearr_39671_39682 = state_39665__$1;
(statearr_39671_39682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39666 === (5))){
var inst_39651 = (state_39665[(7)]);
var state_39665__$1 = state_39665;
var statearr_39672_39683 = state_39665__$1;
(statearr_39672_39683[(2)] = inst_39651);

(statearr_39672_39683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39666 === (6))){
var inst_39654 = (state_39665[(8)]);
var inst_39651 = (state_39665[(7)]);
var inst_39658 = f.call(null,inst_39651,inst_39654);
var inst_39651__$1 = inst_39658;
var state_39665__$1 = (function (){var statearr_39673 = state_39665;
(statearr_39673[(7)] = inst_39651__$1);

return statearr_39673;
})();
var statearr_39674_39684 = state_39665__$1;
(statearr_39674_39684[(2)] = null);

(statearr_39674_39684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39666 === (7))){
var inst_39661 = (state_39665[(2)]);
var state_39665__$1 = state_39665;
var statearr_39675_39685 = state_39665__$1;
(statearr_39675_39685[(2)] = inst_39661);

(statearr_39675_39685[(1)] = (3));


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
});})(c__39204__auto__))
;
return ((function (switch__39116__auto__,c__39204__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__39117__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39117__auto____0 = (function (){
var statearr_39676 = [null,null,null,null,null,null,null,null,null];
(statearr_39676[(0)] = cljs$core$async$reduce_$_state_machine__39117__auto__);

(statearr_39676[(1)] = (1));

return statearr_39676;
});
var cljs$core$async$reduce_$_state_machine__39117__auto____1 = (function (state_39665){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_39665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e39677){if((e39677 instanceof Object)){
var ex__39120__auto__ = e39677;
var statearr_39678_39686 = state_39665;
(statearr_39678_39686[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39687 = state_39665;
state_39665 = G__39687;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39117__auto__ = function(state_39665){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39117__auto____1.call(this,state_39665);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39117__auto____0;
cljs$core$async$reduce_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39117__auto____1;
return cljs$core$async$reduce_$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto__))
})();
var state__39206__auto__ = (function (){var statearr_39679 = f__39205__auto__.call(null);
(statearr_39679[(6)] = c__39204__auto__);

return statearr_39679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto__))
);

return c__39204__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__39689 = arguments.length;
switch (G__39689) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__39204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto__){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto__){
return (function (state_39714){
var state_val_39715 = (state_39714[(1)]);
if((state_val_39715 === (7))){
var inst_39696 = (state_39714[(2)]);
var state_39714__$1 = state_39714;
var statearr_39716_39737 = state_39714__$1;
(statearr_39716_39737[(2)] = inst_39696);

(statearr_39716_39737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (1))){
var inst_39690 = cljs.core.seq.call(null,coll);
var inst_39691 = inst_39690;
var state_39714__$1 = (function (){var statearr_39717 = state_39714;
(statearr_39717[(7)] = inst_39691);

return statearr_39717;
})();
var statearr_39718_39738 = state_39714__$1;
(statearr_39718_39738[(2)] = null);

(statearr_39718_39738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (4))){
var inst_39691 = (state_39714[(7)]);
var inst_39694 = cljs.core.first.call(null,inst_39691);
var state_39714__$1 = state_39714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39714__$1,(7),ch,inst_39694);
} else {
if((state_val_39715 === (13))){
var inst_39708 = (state_39714[(2)]);
var state_39714__$1 = state_39714;
var statearr_39719_39739 = state_39714__$1;
(statearr_39719_39739[(2)] = inst_39708);

(statearr_39719_39739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (6))){
var inst_39699 = (state_39714[(2)]);
var state_39714__$1 = state_39714;
if(cljs.core.truth_(inst_39699)){
var statearr_39720_39740 = state_39714__$1;
(statearr_39720_39740[(1)] = (8));

} else {
var statearr_39721_39741 = state_39714__$1;
(statearr_39721_39741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (3))){
var inst_39712 = (state_39714[(2)]);
var state_39714__$1 = state_39714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39714__$1,inst_39712);
} else {
if((state_val_39715 === (12))){
var state_39714__$1 = state_39714;
var statearr_39722_39742 = state_39714__$1;
(statearr_39722_39742[(2)] = null);

(statearr_39722_39742[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (2))){
var inst_39691 = (state_39714[(7)]);
var state_39714__$1 = state_39714;
if(cljs.core.truth_(inst_39691)){
var statearr_39723_39743 = state_39714__$1;
(statearr_39723_39743[(1)] = (4));

} else {
var statearr_39724_39744 = state_39714__$1;
(statearr_39724_39744[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (11))){
var inst_39705 = cljs.core.async.close_BANG_.call(null,ch);
var state_39714__$1 = state_39714;
var statearr_39725_39745 = state_39714__$1;
(statearr_39725_39745[(2)] = inst_39705);

(statearr_39725_39745[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (9))){
var state_39714__$1 = state_39714;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39726_39746 = state_39714__$1;
(statearr_39726_39746[(1)] = (11));

} else {
var statearr_39727_39747 = state_39714__$1;
(statearr_39727_39747[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (5))){
var inst_39691 = (state_39714[(7)]);
var state_39714__$1 = state_39714;
var statearr_39728_39748 = state_39714__$1;
(statearr_39728_39748[(2)] = inst_39691);

(statearr_39728_39748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (10))){
var inst_39710 = (state_39714[(2)]);
var state_39714__$1 = state_39714;
var statearr_39729_39749 = state_39714__$1;
(statearr_39729_39749[(2)] = inst_39710);

(statearr_39729_39749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (8))){
var inst_39691 = (state_39714[(7)]);
var inst_39701 = cljs.core.next.call(null,inst_39691);
var inst_39691__$1 = inst_39701;
var state_39714__$1 = (function (){var statearr_39730 = state_39714;
(statearr_39730[(7)] = inst_39691__$1);

return statearr_39730;
})();
var statearr_39731_39750 = state_39714__$1;
(statearr_39731_39750[(2)] = null);

(statearr_39731_39750[(1)] = (2));


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
});})(c__39204__auto__))
;
return ((function (switch__39116__auto__,c__39204__auto__){
return (function() {
var cljs$core$async$state_machine__39117__auto__ = null;
var cljs$core$async$state_machine__39117__auto____0 = (function (){
var statearr_39732 = [null,null,null,null,null,null,null,null];
(statearr_39732[(0)] = cljs$core$async$state_machine__39117__auto__);

(statearr_39732[(1)] = (1));

return statearr_39732;
});
var cljs$core$async$state_machine__39117__auto____1 = (function (state_39714){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_39714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e39733){if((e39733 instanceof Object)){
var ex__39120__auto__ = e39733;
var statearr_39734_39751 = state_39714;
(statearr_39734_39751[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39752 = state_39714;
state_39714 = G__39752;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$state_machine__39117__auto__ = function(state_39714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39117__auto____1.call(this,state_39714);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39117__auto____0;
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39117__auto____1;
return cljs$core$async$state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto__))
})();
var state__39206__auto__ = (function (){var statearr_39735 = f__39205__auto__.call(null);
(statearr_39735[(6)] = c__39204__auto__);

return statearr_39735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto__))
);

return c__39204__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__37203__auto__ = (((_ == null))?null:_);
var m__37204__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__37203__auto__)]);
if(!((m__37204__auto__ == null))){
return m__37204__auto__.call(null,_);
} else {
var m__37204__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__37204__auto____$1 == null))){
return m__37204__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__37203__auto__ = (((m == null))?null:m);
var m__37204__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__37203__auto__)]);
if(!((m__37204__auto__ == null))){
return m__37204__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__37204__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__37204__auto____$1 == null))){
return m__37204__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__37203__auto__ = (((m == null))?null:m);
var m__37204__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__37203__auto__)]);
if(!((m__37204__auto__ == null))){
return m__37204__auto__.call(null,m,ch);
} else {
var m__37204__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__37204__auto____$1 == null))){
return m__37204__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__37203__auto__ = (((m == null))?null:m);
var m__37204__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__37203__auto__)]);
if(!((m__37204__auto__ == null))){
return m__37204__auto__.call(null,m);
} else {
var m__37204__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__37204__auto____$1 == null))){
return m__37204__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39753 = (function (ch,cs,meta39754){
this.ch = ch;
this.cs = cs;
this.meta39754 = meta39754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39755,meta39754__$1){
var self__ = this;
var _39755__$1 = this;
return (new cljs.core.async.t_cljs$core$async39753(self__.ch,self__.cs,meta39754__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39753.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39755){
var self__ = this;
var _39755__$1 = this;
return self__.meta39754;
});})(cs))
;

cljs.core.async.t_cljs$core$async39753.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39753.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39753.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39753.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39753.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39753.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39753.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39754","meta39754",458043773,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39753";

cljs.core.async.t_cljs$core$async39753.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37145__auto__,writer__37146__auto__,opt__37147__auto__){
return cljs.core._write.call(null,writer__37146__auto__,"cljs.core.async/t_cljs$core$async39753");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39753 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39753(ch__$1,cs__$1,meta39754){
return (new cljs.core.async.t_cljs$core$async39753(ch__$1,cs__$1,meta39754));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39753(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__39204__auto___39975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___39975,cs,m,dchan,dctr,done){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___39975,cs,m,dchan,dctr,done){
return (function (state_39890){
var state_val_39891 = (state_39890[(1)]);
if((state_val_39891 === (7))){
var inst_39886 = (state_39890[(2)]);
var state_39890__$1 = state_39890;
var statearr_39892_39976 = state_39890__$1;
(statearr_39892_39976[(2)] = inst_39886);

(statearr_39892_39976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (20))){
var inst_39789 = (state_39890[(7)]);
var inst_39801 = cljs.core.first.call(null,inst_39789);
var inst_39802 = cljs.core.nth.call(null,inst_39801,(0),null);
var inst_39803 = cljs.core.nth.call(null,inst_39801,(1),null);
var state_39890__$1 = (function (){var statearr_39893 = state_39890;
(statearr_39893[(8)] = inst_39802);

return statearr_39893;
})();
if(cljs.core.truth_(inst_39803)){
var statearr_39894_39977 = state_39890__$1;
(statearr_39894_39977[(1)] = (22));

} else {
var statearr_39895_39978 = state_39890__$1;
(statearr_39895_39978[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (27))){
var inst_39831 = (state_39890[(9)]);
var inst_39838 = (state_39890[(10)]);
var inst_39833 = (state_39890[(11)]);
var inst_39758 = (state_39890[(12)]);
var inst_39838__$1 = cljs.core._nth.call(null,inst_39831,inst_39833);
var inst_39839 = cljs.core.async.put_BANG_.call(null,inst_39838__$1,inst_39758,done);
var state_39890__$1 = (function (){var statearr_39896 = state_39890;
(statearr_39896[(10)] = inst_39838__$1);

return statearr_39896;
})();
if(cljs.core.truth_(inst_39839)){
var statearr_39897_39979 = state_39890__$1;
(statearr_39897_39979[(1)] = (30));

} else {
var statearr_39898_39980 = state_39890__$1;
(statearr_39898_39980[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (1))){
var state_39890__$1 = state_39890;
var statearr_39899_39981 = state_39890__$1;
(statearr_39899_39981[(2)] = null);

(statearr_39899_39981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (24))){
var inst_39789 = (state_39890[(7)]);
var inst_39808 = (state_39890[(2)]);
var inst_39809 = cljs.core.next.call(null,inst_39789);
var inst_39767 = inst_39809;
var inst_39768 = null;
var inst_39769 = (0);
var inst_39770 = (0);
var state_39890__$1 = (function (){var statearr_39900 = state_39890;
(statearr_39900[(13)] = inst_39769);

(statearr_39900[(14)] = inst_39808);

(statearr_39900[(15)] = inst_39767);

(statearr_39900[(16)] = inst_39770);

(statearr_39900[(17)] = inst_39768);

return statearr_39900;
})();
var statearr_39901_39982 = state_39890__$1;
(statearr_39901_39982[(2)] = null);

(statearr_39901_39982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (39))){
var state_39890__$1 = state_39890;
var statearr_39905_39983 = state_39890__$1;
(statearr_39905_39983[(2)] = null);

(statearr_39905_39983[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (4))){
var inst_39758 = (state_39890[(12)]);
var inst_39758__$1 = (state_39890[(2)]);
var inst_39759 = (inst_39758__$1 == null);
var state_39890__$1 = (function (){var statearr_39906 = state_39890;
(statearr_39906[(12)] = inst_39758__$1);

return statearr_39906;
})();
if(cljs.core.truth_(inst_39759)){
var statearr_39907_39984 = state_39890__$1;
(statearr_39907_39984[(1)] = (5));

} else {
var statearr_39908_39985 = state_39890__$1;
(statearr_39908_39985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (15))){
var inst_39769 = (state_39890[(13)]);
var inst_39767 = (state_39890[(15)]);
var inst_39770 = (state_39890[(16)]);
var inst_39768 = (state_39890[(17)]);
var inst_39785 = (state_39890[(2)]);
var inst_39786 = (inst_39770 + (1));
var tmp39902 = inst_39769;
var tmp39903 = inst_39767;
var tmp39904 = inst_39768;
var inst_39767__$1 = tmp39903;
var inst_39768__$1 = tmp39904;
var inst_39769__$1 = tmp39902;
var inst_39770__$1 = inst_39786;
var state_39890__$1 = (function (){var statearr_39909 = state_39890;
(statearr_39909[(13)] = inst_39769__$1);

(statearr_39909[(15)] = inst_39767__$1);

(statearr_39909[(16)] = inst_39770__$1);

(statearr_39909[(18)] = inst_39785);

(statearr_39909[(17)] = inst_39768__$1);

return statearr_39909;
})();
var statearr_39910_39986 = state_39890__$1;
(statearr_39910_39986[(2)] = null);

(statearr_39910_39986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (21))){
var inst_39812 = (state_39890[(2)]);
var state_39890__$1 = state_39890;
var statearr_39914_39987 = state_39890__$1;
(statearr_39914_39987[(2)] = inst_39812);

(statearr_39914_39987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (31))){
var inst_39838 = (state_39890[(10)]);
var inst_39842 = done.call(null,null);
var inst_39843 = cljs.core.async.untap_STAR_.call(null,m,inst_39838);
var state_39890__$1 = (function (){var statearr_39915 = state_39890;
(statearr_39915[(19)] = inst_39842);

return statearr_39915;
})();
var statearr_39916_39988 = state_39890__$1;
(statearr_39916_39988[(2)] = inst_39843);

(statearr_39916_39988[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (32))){
var inst_39830 = (state_39890[(20)]);
var inst_39831 = (state_39890[(9)]);
var inst_39832 = (state_39890[(21)]);
var inst_39833 = (state_39890[(11)]);
var inst_39845 = (state_39890[(2)]);
var inst_39846 = (inst_39833 + (1));
var tmp39911 = inst_39830;
var tmp39912 = inst_39831;
var tmp39913 = inst_39832;
var inst_39830__$1 = tmp39911;
var inst_39831__$1 = tmp39912;
var inst_39832__$1 = tmp39913;
var inst_39833__$1 = inst_39846;
var state_39890__$1 = (function (){var statearr_39917 = state_39890;
(statearr_39917[(20)] = inst_39830__$1);

(statearr_39917[(22)] = inst_39845);

(statearr_39917[(9)] = inst_39831__$1);

(statearr_39917[(21)] = inst_39832__$1);

(statearr_39917[(11)] = inst_39833__$1);

return statearr_39917;
})();
var statearr_39918_39989 = state_39890__$1;
(statearr_39918_39989[(2)] = null);

(statearr_39918_39989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (40))){
var inst_39858 = (state_39890[(23)]);
var inst_39862 = done.call(null,null);
var inst_39863 = cljs.core.async.untap_STAR_.call(null,m,inst_39858);
var state_39890__$1 = (function (){var statearr_39919 = state_39890;
(statearr_39919[(24)] = inst_39862);

return statearr_39919;
})();
var statearr_39920_39990 = state_39890__$1;
(statearr_39920_39990[(2)] = inst_39863);

(statearr_39920_39990[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (33))){
var inst_39849 = (state_39890[(25)]);
var inst_39851 = cljs.core.chunked_seq_QMARK_.call(null,inst_39849);
var state_39890__$1 = state_39890;
if(inst_39851){
var statearr_39921_39991 = state_39890__$1;
(statearr_39921_39991[(1)] = (36));

} else {
var statearr_39922_39992 = state_39890__$1;
(statearr_39922_39992[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (13))){
var inst_39779 = (state_39890[(26)]);
var inst_39782 = cljs.core.async.close_BANG_.call(null,inst_39779);
var state_39890__$1 = state_39890;
var statearr_39923_39993 = state_39890__$1;
(statearr_39923_39993[(2)] = inst_39782);

(statearr_39923_39993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (22))){
var inst_39802 = (state_39890[(8)]);
var inst_39805 = cljs.core.async.close_BANG_.call(null,inst_39802);
var state_39890__$1 = state_39890;
var statearr_39924_39994 = state_39890__$1;
(statearr_39924_39994[(2)] = inst_39805);

(statearr_39924_39994[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (36))){
var inst_39849 = (state_39890[(25)]);
var inst_39853 = cljs.core.chunk_first.call(null,inst_39849);
var inst_39854 = cljs.core.chunk_rest.call(null,inst_39849);
var inst_39855 = cljs.core.count.call(null,inst_39853);
var inst_39830 = inst_39854;
var inst_39831 = inst_39853;
var inst_39832 = inst_39855;
var inst_39833 = (0);
var state_39890__$1 = (function (){var statearr_39925 = state_39890;
(statearr_39925[(20)] = inst_39830);

(statearr_39925[(9)] = inst_39831);

(statearr_39925[(21)] = inst_39832);

(statearr_39925[(11)] = inst_39833);

return statearr_39925;
})();
var statearr_39926_39995 = state_39890__$1;
(statearr_39926_39995[(2)] = null);

(statearr_39926_39995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (41))){
var inst_39849 = (state_39890[(25)]);
var inst_39865 = (state_39890[(2)]);
var inst_39866 = cljs.core.next.call(null,inst_39849);
var inst_39830 = inst_39866;
var inst_39831 = null;
var inst_39832 = (0);
var inst_39833 = (0);
var state_39890__$1 = (function (){var statearr_39927 = state_39890;
(statearr_39927[(20)] = inst_39830);

(statearr_39927[(9)] = inst_39831);

(statearr_39927[(21)] = inst_39832);

(statearr_39927[(27)] = inst_39865);

(statearr_39927[(11)] = inst_39833);

return statearr_39927;
})();
var statearr_39928_39996 = state_39890__$1;
(statearr_39928_39996[(2)] = null);

(statearr_39928_39996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (43))){
var state_39890__$1 = state_39890;
var statearr_39929_39997 = state_39890__$1;
(statearr_39929_39997[(2)] = null);

(statearr_39929_39997[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (29))){
var inst_39874 = (state_39890[(2)]);
var state_39890__$1 = state_39890;
var statearr_39930_39998 = state_39890__$1;
(statearr_39930_39998[(2)] = inst_39874);

(statearr_39930_39998[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (44))){
var inst_39883 = (state_39890[(2)]);
var state_39890__$1 = (function (){var statearr_39931 = state_39890;
(statearr_39931[(28)] = inst_39883);

return statearr_39931;
})();
var statearr_39932_39999 = state_39890__$1;
(statearr_39932_39999[(2)] = null);

(statearr_39932_39999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (6))){
var inst_39822 = (state_39890[(29)]);
var inst_39821 = cljs.core.deref.call(null,cs);
var inst_39822__$1 = cljs.core.keys.call(null,inst_39821);
var inst_39823 = cljs.core.count.call(null,inst_39822__$1);
var inst_39824 = cljs.core.reset_BANG_.call(null,dctr,inst_39823);
var inst_39829 = cljs.core.seq.call(null,inst_39822__$1);
var inst_39830 = inst_39829;
var inst_39831 = null;
var inst_39832 = (0);
var inst_39833 = (0);
var state_39890__$1 = (function (){var statearr_39933 = state_39890;
(statearr_39933[(29)] = inst_39822__$1);

(statearr_39933[(20)] = inst_39830);

(statearr_39933[(9)] = inst_39831);

(statearr_39933[(30)] = inst_39824);

(statearr_39933[(21)] = inst_39832);

(statearr_39933[(11)] = inst_39833);

return statearr_39933;
})();
var statearr_39934_40000 = state_39890__$1;
(statearr_39934_40000[(2)] = null);

(statearr_39934_40000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (28))){
var inst_39830 = (state_39890[(20)]);
var inst_39849 = (state_39890[(25)]);
var inst_39849__$1 = cljs.core.seq.call(null,inst_39830);
var state_39890__$1 = (function (){var statearr_39935 = state_39890;
(statearr_39935[(25)] = inst_39849__$1);

return statearr_39935;
})();
if(inst_39849__$1){
var statearr_39936_40001 = state_39890__$1;
(statearr_39936_40001[(1)] = (33));

} else {
var statearr_39937_40002 = state_39890__$1;
(statearr_39937_40002[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (25))){
var inst_39832 = (state_39890[(21)]);
var inst_39833 = (state_39890[(11)]);
var inst_39835 = (inst_39833 < inst_39832);
var inst_39836 = inst_39835;
var state_39890__$1 = state_39890;
if(cljs.core.truth_(inst_39836)){
var statearr_39938_40003 = state_39890__$1;
(statearr_39938_40003[(1)] = (27));

} else {
var statearr_39939_40004 = state_39890__$1;
(statearr_39939_40004[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (34))){
var state_39890__$1 = state_39890;
var statearr_39940_40005 = state_39890__$1;
(statearr_39940_40005[(2)] = null);

(statearr_39940_40005[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (17))){
var state_39890__$1 = state_39890;
var statearr_39941_40006 = state_39890__$1;
(statearr_39941_40006[(2)] = null);

(statearr_39941_40006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (3))){
var inst_39888 = (state_39890[(2)]);
var state_39890__$1 = state_39890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39890__$1,inst_39888);
} else {
if((state_val_39891 === (12))){
var inst_39817 = (state_39890[(2)]);
var state_39890__$1 = state_39890;
var statearr_39942_40007 = state_39890__$1;
(statearr_39942_40007[(2)] = inst_39817);

(statearr_39942_40007[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (2))){
var state_39890__$1 = state_39890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39890__$1,(4),ch);
} else {
if((state_val_39891 === (23))){
var state_39890__$1 = state_39890;
var statearr_39943_40008 = state_39890__$1;
(statearr_39943_40008[(2)] = null);

(statearr_39943_40008[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (35))){
var inst_39872 = (state_39890[(2)]);
var state_39890__$1 = state_39890;
var statearr_39944_40009 = state_39890__$1;
(statearr_39944_40009[(2)] = inst_39872);

(statearr_39944_40009[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (19))){
var inst_39789 = (state_39890[(7)]);
var inst_39793 = cljs.core.chunk_first.call(null,inst_39789);
var inst_39794 = cljs.core.chunk_rest.call(null,inst_39789);
var inst_39795 = cljs.core.count.call(null,inst_39793);
var inst_39767 = inst_39794;
var inst_39768 = inst_39793;
var inst_39769 = inst_39795;
var inst_39770 = (0);
var state_39890__$1 = (function (){var statearr_39945 = state_39890;
(statearr_39945[(13)] = inst_39769);

(statearr_39945[(15)] = inst_39767);

(statearr_39945[(16)] = inst_39770);

(statearr_39945[(17)] = inst_39768);

return statearr_39945;
})();
var statearr_39946_40010 = state_39890__$1;
(statearr_39946_40010[(2)] = null);

(statearr_39946_40010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (11))){
var inst_39767 = (state_39890[(15)]);
var inst_39789 = (state_39890[(7)]);
var inst_39789__$1 = cljs.core.seq.call(null,inst_39767);
var state_39890__$1 = (function (){var statearr_39947 = state_39890;
(statearr_39947[(7)] = inst_39789__$1);

return statearr_39947;
})();
if(inst_39789__$1){
var statearr_39948_40011 = state_39890__$1;
(statearr_39948_40011[(1)] = (16));

} else {
var statearr_39949_40012 = state_39890__$1;
(statearr_39949_40012[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (9))){
var inst_39819 = (state_39890[(2)]);
var state_39890__$1 = state_39890;
var statearr_39950_40013 = state_39890__$1;
(statearr_39950_40013[(2)] = inst_39819);

(statearr_39950_40013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (5))){
var inst_39765 = cljs.core.deref.call(null,cs);
var inst_39766 = cljs.core.seq.call(null,inst_39765);
var inst_39767 = inst_39766;
var inst_39768 = null;
var inst_39769 = (0);
var inst_39770 = (0);
var state_39890__$1 = (function (){var statearr_39951 = state_39890;
(statearr_39951[(13)] = inst_39769);

(statearr_39951[(15)] = inst_39767);

(statearr_39951[(16)] = inst_39770);

(statearr_39951[(17)] = inst_39768);

return statearr_39951;
})();
var statearr_39952_40014 = state_39890__$1;
(statearr_39952_40014[(2)] = null);

(statearr_39952_40014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (14))){
var state_39890__$1 = state_39890;
var statearr_39953_40015 = state_39890__$1;
(statearr_39953_40015[(2)] = null);

(statearr_39953_40015[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (45))){
var inst_39880 = (state_39890[(2)]);
var state_39890__$1 = state_39890;
var statearr_39954_40016 = state_39890__$1;
(statearr_39954_40016[(2)] = inst_39880);

(statearr_39954_40016[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (26))){
var inst_39822 = (state_39890[(29)]);
var inst_39876 = (state_39890[(2)]);
var inst_39877 = cljs.core.seq.call(null,inst_39822);
var state_39890__$1 = (function (){var statearr_39955 = state_39890;
(statearr_39955[(31)] = inst_39876);

return statearr_39955;
})();
if(inst_39877){
var statearr_39956_40017 = state_39890__$1;
(statearr_39956_40017[(1)] = (42));

} else {
var statearr_39957_40018 = state_39890__$1;
(statearr_39957_40018[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (16))){
var inst_39789 = (state_39890[(7)]);
var inst_39791 = cljs.core.chunked_seq_QMARK_.call(null,inst_39789);
var state_39890__$1 = state_39890;
if(inst_39791){
var statearr_39958_40019 = state_39890__$1;
(statearr_39958_40019[(1)] = (19));

} else {
var statearr_39959_40020 = state_39890__$1;
(statearr_39959_40020[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (38))){
var inst_39869 = (state_39890[(2)]);
var state_39890__$1 = state_39890;
var statearr_39960_40021 = state_39890__$1;
(statearr_39960_40021[(2)] = inst_39869);

(statearr_39960_40021[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (30))){
var state_39890__$1 = state_39890;
var statearr_39961_40022 = state_39890__$1;
(statearr_39961_40022[(2)] = null);

(statearr_39961_40022[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (10))){
var inst_39770 = (state_39890[(16)]);
var inst_39768 = (state_39890[(17)]);
var inst_39778 = cljs.core._nth.call(null,inst_39768,inst_39770);
var inst_39779 = cljs.core.nth.call(null,inst_39778,(0),null);
var inst_39780 = cljs.core.nth.call(null,inst_39778,(1),null);
var state_39890__$1 = (function (){var statearr_39962 = state_39890;
(statearr_39962[(26)] = inst_39779);

return statearr_39962;
})();
if(cljs.core.truth_(inst_39780)){
var statearr_39963_40023 = state_39890__$1;
(statearr_39963_40023[(1)] = (13));

} else {
var statearr_39964_40024 = state_39890__$1;
(statearr_39964_40024[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (18))){
var inst_39815 = (state_39890[(2)]);
var state_39890__$1 = state_39890;
var statearr_39965_40025 = state_39890__$1;
(statearr_39965_40025[(2)] = inst_39815);

(statearr_39965_40025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (42))){
var state_39890__$1 = state_39890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39890__$1,(45),dchan);
} else {
if((state_val_39891 === (37))){
var inst_39849 = (state_39890[(25)]);
var inst_39858 = (state_39890[(23)]);
var inst_39758 = (state_39890[(12)]);
var inst_39858__$1 = cljs.core.first.call(null,inst_39849);
var inst_39859 = cljs.core.async.put_BANG_.call(null,inst_39858__$1,inst_39758,done);
var state_39890__$1 = (function (){var statearr_39966 = state_39890;
(statearr_39966[(23)] = inst_39858__$1);

return statearr_39966;
})();
if(cljs.core.truth_(inst_39859)){
var statearr_39967_40026 = state_39890__$1;
(statearr_39967_40026[(1)] = (39));

} else {
var statearr_39968_40027 = state_39890__$1;
(statearr_39968_40027[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39891 === (8))){
var inst_39769 = (state_39890[(13)]);
var inst_39770 = (state_39890[(16)]);
var inst_39772 = (inst_39770 < inst_39769);
var inst_39773 = inst_39772;
var state_39890__$1 = state_39890;
if(cljs.core.truth_(inst_39773)){
var statearr_39969_40028 = state_39890__$1;
(statearr_39969_40028[(1)] = (10));

} else {
var statearr_39970_40029 = state_39890__$1;
(statearr_39970_40029[(1)] = (11));

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
});})(c__39204__auto___39975,cs,m,dchan,dctr,done))
;
return ((function (switch__39116__auto__,c__39204__auto___39975,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__39117__auto__ = null;
var cljs$core$async$mult_$_state_machine__39117__auto____0 = (function (){
var statearr_39971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39971[(0)] = cljs$core$async$mult_$_state_machine__39117__auto__);

(statearr_39971[(1)] = (1));

return statearr_39971;
});
var cljs$core$async$mult_$_state_machine__39117__auto____1 = (function (state_39890){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_39890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e39972){if((e39972 instanceof Object)){
var ex__39120__auto__ = e39972;
var statearr_39973_40030 = state_39890;
(statearr_39973_40030[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40031 = state_39890;
state_39890 = G__40031;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39117__auto__ = function(state_39890){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39117__auto____1.call(this,state_39890);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39117__auto____0;
cljs$core$async$mult_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39117__auto____1;
return cljs$core$async$mult_$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___39975,cs,m,dchan,dctr,done))
})();
var state__39206__auto__ = (function (){var statearr_39974 = f__39205__auto__.call(null);
(statearr_39974[(6)] = c__39204__auto___39975);

return statearr_39974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___39975,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__40033 = arguments.length;
switch (G__40033) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__37203__auto__ = (((m == null))?null:m);
var m__37204__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__37203__auto__)]);
if(!((m__37204__auto__ == null))){
return m__37204__auto__.call(null,m,ch);
} else {
var m__37204__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__37204__auto____$1 == null))){
return m__37204__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__37203__auto__ = (((m == null))?null:m);
var m__37204__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__37203__auto__)]);
if(!((m__37204__auto__ == null))){
return m__37204__auto__.call(null,m,ch);
} else {
var m__37204__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__37204__auto____$1 == null))){
return m__37204__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__37203__auto__ = (((m == null))?null:m);
var m__37204__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__37203__auto__)]);
if(!((m__37204__auto__ == null))){
return m__37204__auto__.call(null,m);
} else {
var m__37204__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__37204__auto____$1 == null))){
return m__37204__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__37203__auto__ = (((m == null))?null:m);
var m__37204__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__37203__auto__)]);
if(!((m__37204__auto__ == null))){
return m__37204__auto__.call(null,m,state_map);
} else {
var m__37204__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__37204__auto____$1 == null))){
return m__37204__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__37203__auto__ = (((m == null))?null:m);
var m__37204__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__37203__auto__)]);
if(!((m__37204__auto__ == null))){
return m__37204__auto__.call(null,m,mode);
} else {
var m__37204__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__37204__auto____$1 == null))){
return m__37204__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__37696__auto__ = [];
var len__37689__auto___40045 = arguments.length;
var i__37690__auto___40046 = (0);
while(true){
if((i__37690__auto___40046 < len__37689__auto___40045)){
args__37696__auto__.push((arguments[i__37690__auto___40046]));

var G__40047 = (i__37690__auto___40046 + (1));
i__37690__auto___40046 = G__40047;
continue;
} else {
}
break;
}

var argseq__37697__auto__ = ((((3) < args__37696__auto__.length))?(new cljs.core.IndexedSeq(args__37696__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37697__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40039){
var map__40040 = p__40039;
var map__40040__$1 = ((((!((map__40040 == null)))?((((map__40040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40040):map__40040);
var opts = map__40040__$1;
var statearr_40042_40048 = state;
(statearr_40042_40048[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__40040,map__40040__$1,opts){
return (function (val){
var statearr_40043_40049 = state;
(statearr_40043_40049[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40040,map__40040__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_40044_40050 = state;
(statearr_40044_40050[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40035){
var G__40036 = cljs.core.first.call(null,seq40035);
var seq40035__$1 = cljs.core.next.call(null,seq40035);
var G__40037 = cljs.core.first.call(null,seq40035__$1);
var seq40035__$2 = cljs.core.next.call(null,seq40035__$1);
var G__40038 = cljs.core.first.call(null,seq40035__$2);
var seq40035__$3 = cljs.core.next.call(null,seq40035__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40036,G__40037,G__40038,seq40035__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async40051 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40051 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40052){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40052 = meta40052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40053,meta40052__$1){
var self__ = this;
var _40053__$1 = this;
return (new cljs.core.async.t_cljs$core$async40051(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40052__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40053){
var self__ = this;
var _40053__$1 = this;
return self__.meta40052;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40051.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40051.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40051.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40051.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40051.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40051.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40051.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40051.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40051.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40052","meta40052",-371878453,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40051";

cljs.core.async.t_cljs$core$async40051.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37145__auto__,writer__37146__auto__,opt__37147__auto__){
return cljs.core._write.call(null,writer__37146__auto__,"cljs.core.async/t_cljs$core$async40051");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40051 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40051(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40052){
return (new cljs.core.async.t_cljs$core$async40051(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40052));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40051(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39204__auto___40215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___40215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___40215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40155){
var state_val_40156 = (state_40155[(1)]);
if((state_val_40156 === (7))){
var inst_40070 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
var statearr_40157_40216 = state_40155__$1;
(statearr_40157_40216[(2)] = inst_40070);

(statearr_40157_40216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (20))){
var inst_40082 = (state_40155[(7)]);
var state_40155__$1 = state_40155;
var statearr_40158_40217 = state_40155__$1;
(statearr_40158_40217[(2)] = inst_40082);

(statearr_40158_40217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (27))){
var state_40155__$1 = state_40155;
var statearr_40159_40218 = state_40155__$1;
(statearr_40159_40218[(2)] = null);

(statearr_40159_40218[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (1))){
var inst_40057 = (state_40155[(8)]);
var inst_40057__$1 = calc_state.call(null);
var inst_40059 = (inst_40057__$1 == null);
var inst_40060 = cljs.core.not.call(null,inst_40059);
var state_40155__$1 = (function (){var statearr_40160 = state_40155;
(statearr_40160[(8)] = inst_40057__$1);

return statearr_40160;
})();
if(inst_40060){
var statearr_40161_40219 = state_40155__$1;
(statearr_40161_40219[(1)] = (2));

} else {
var statearr_40162_40220 = state_40155__$1;
(statearr_40162_40220[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (24))){
var inst_40129 = (state_40155[(9)]);
var inst_40106 = (state_40155[(10)]);
var inst_40115 = (state_40155[(11)]);
var inst_40129__$1 = inst_40106.call(null,inst_40115);
var state_40155__$1 = (function (){var statearr_40163 = state_40155;
(statearr_40163[(9)] = inst_40129__$1);

return statearr_40163;
})();
if(cljs.core.truth_(inst_40129__$1)){
var statearr_40164_40221 = state_40155__$1;
(statearr_40164_40221[(1)] = (29));

} else {
var statearr_40165_40222 = state_40155__$1;
(statearr_40165_40222[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (4))){
var inst_40073 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
if(cljs.core.truth_(inst_40073)){
var statearr_40166_40223 = state_40155__$1;
(statearr_40166_40223[(1)] = (8));

} else {
var statearr_40167_40224 = state_40155__$1;
(statearr_40167_40224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (15))){
var inst_40100 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
if(cljs.core.truth_(inst_40100)){
var statearr_40168_40225 = state_40155__$1;
(statearr_40168_40225[(1)] = (19));

} else {
var statearr_40169_40226 = state_40155__$1;
(statearr_40169_40226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (21))){
var inst_40105 = (state_40155[(12)]);
var inst_40105__$1 = (state_40155[(2)]);
var inst_40106 = cljs.core.get.call(null,inst_40105__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40107 = cljs.core.get.call(null,inst_40105__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40108 = cljs.core.get.call(null,inst_40105__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40155__$1 = (function (){var statearr_40170 = state_40155;
(statearr_40170[(10)] = inst_40106);

(statearr_40170[(12)] = inst_40105__$1);

(statearr_40170[(13)] = inst_40107);

return statearr_40170;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40155__$1,(22),inst_40108);
} else {
if((state_val_40156 === (31))){
var inst_40137 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
if(cljs.core.truth_(inst_40137)){
var statearr_40171_40227 = state_40155__$1;
(statearr_40171_40227[(1)] = (32));

} else {
var statearr_40172_40228 = state_40155__$1;
(statearr_40172_40228[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (32))){
var inst_40114 = (state_40155[(14)]);
var state_40155__$1 = state_40155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40155__$1,(35),out,inst_40114);
} else {
if((state_val_40156 === (33))){
var inst_40105 = (state_40155[(12)]);
var inst_40082 = inst_40105;
var state_40155__$1 = (function (){var statearr_40173 = state_40155;
(statearr_40173[(7)] = inst_40082);

return statearr_40173;
})();
var statearr_40174_40229 = state_40155__$1;
(statearr_40174_40229[(2)] = null);

(statearr_40174_40229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (13))){
var inst_40082 = (state_40155[(7)]);
var inst_40089 = inst_40082.cljs$lang$protocol_mask$partition0$;
var inst_40090 = (inst_40089 & (64));
var inst_40091 = inst_40082.cljs$core$ISeq$;
var inst_40092 = (cljs.core.PROTOCOL_SENTINEL === inst_40091);
var inst_40093 = (inst_40090) || (inst_40092);
var state_40155__$1 = state_40155;
if(cljs.core.truth_(inst_40093)){
var statearr_40175_40230 = state_40155__$1;
(statearr_40175_40230[(1)] = (16));

} else {
var statearr_40176_40231 = state_40155__$1;
(statearr_40176_40231[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (22))){
var inst_40115 = (state_40155[(11)]);
var inst_40114 = (state_40155[(14)]);
var inst_40113 = (state_40155[(2)]);
var inst_40114__$1 = cljs.core.nth.call(null,inst_40113,(0),null);
var inst_40115__$1 = cljs.core.nth.call(null,inst_40113,(1),null);
var inst_40116 = (inst_40114__$1 == null);
var inst_40117 = cljs.core._EQ_.call(null,inst_40115__$1,change);
var inst_40118 = (inst_40116) || (inst_40117);
var state_40155__$1 = (function (){var statearr_40177 = state_40155;
(statearr_40177[(11)] = inst_40115__$1);

(statearr_40177[(14)] = inst_40114__$1);

return statearr_40177;
})();
if(cljs.core.truth_(inst_40118)){
var statearr_40178_40232 = state_40155__$1;
(statearr_40178_40232[(1)] = (23));

} else {
var statearr_40179_40233 = state_40155__$1;
(statearr_40179_40233[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (36))){
var inst_40105 = (state_40155[(12)]);
var inst_40082 = inst_40105;
var state_40155__$1 = (function (){var statearr_40180 = state_40155;
(statearr_40180[(7)] = inst_40082);

return statearr_40180;
})();
var statearr_40181_40234 = state_40155__$1;
(statearr_40181_40234[(2)] = null);

(statearr_40181_40234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (29))){
var inst_40129 = (state_40155[(9)]);
var state_40155__$1 = state_40155;
var statearr_40182_40235 = state_40155__$1;
(statearr_40182_40235[(2)] = inst_40129);

(statearr_40182_40235[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (6))){
var state_40155__$1 = state_40155;
var statearr_40183_40236 = state_40155__$1;
(statearr_40183_40236[(2)] = false);

(statearr_40183_40236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (28))){
var inst_40125 = (state_40155[(2)]);
var inst_40126 = calc_state.call(null);
var inst_40082 = inst_40126;
var state_40155__$1 = (function (){var statearr_40184 = state_40155;
(statearr_40184[(15)] = inst_40125);

(statearr_40184[(7)] = inst_40082);

return statearr_40184;
})();
var statearr_40185_40237 = state_40155__$1;
(statearr_40185_40237[(2)] = null);

(statearr_40185_40237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (25))){
var inst_40151 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
var statearr_40186_40238 = state_40155__$1;
(statearr_40186_40238[(2)] = inst_40151);

(statearr_40186_40238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (34))){
var inst_40149 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
var statearr_40187_40239 = state_40155__$1;
(statearr_40187_40239[(2)] = inst_40149);

(statearr_40187_40239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (17))){
var state_40155__$1 = state_40155;
var statearr_40188_40240 = state_40155__$1;
(statearr_40188_40240[(2)] = false);

(statearr_40188_40240[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (3))){
var state_40155__$1 = state_40155;
var statearr_40189_40241 = state_40155__$1;
(statearr_40189_40241[(2)] = false);

(statearr_40189_40241[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (12))){
var inst_40153 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40155__$1,inst_40153);
} else {
if((state_val_40156 === (2))){
var inst_40057 = (state_40155[(8)]);
var inst_40062 = inst_40057.cljs$lang$protocol_mask$partition0$;
var inst_40063 = (inst_40062 & (64));
var inst_40064 = inst_40057.cljs$core$ISeq$;
var inst_40065 = (cljs.core.PROTOCOL_SENTINEL === inst_40064);
var inst_40066 = (inst_40063) || (inst_40065);
var state_40155__$1 = state_40155;
if(cljs.core.truth_(inst_40066)){
var statearr_40190_40242 = state_40155__$1;
(statearr_40190_40242[(1)] = (5));

} else {
var statearr_40191_40243 = state_40155__$1;
(statearr_40191_40243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (23))){
var inst_40114 = (state_40155[(14)]);
var inst_40120 = (inst_40114 == null);
var state_40155__$1 = state_40155;
if(cljs.core.truth_(inst_40120)){
var statearr_40192_40244 = state_40155__$1;
(statearr_40192_40244[(1)] = (26));

} else {
var statearr_40193_40245 = state_40155__$1;
(statearr_40193_40245[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (35))){
var inst_40140 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
if(cljs.core.truth_(inst_40140)){
var statearr_40194_40246 = state_40155__$1;
(statearr_40194_40246[(1)] = (36));

} else {
var statearr_40195_40247 = state_40155__$1;
(statearr_40195_40247[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (19))){
var inst_40082 = (state_40155[(7)]);
var inst_40102 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40082);
var state_40155__$1 = state_40155;
var statearr_40196_40248 = state_40155__$1;
(statearr_40196_40248[(2)] = inst_40102);

(statearr_40196_40248[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (11))){
var inst_40082 = (state_40155[(7)]);
var inst_40086 = (inst_40082 == null);
var inst_40087 = cljs.core.not.call(null,inst_40086);
var state_40155__$1 = state_40155;
if(inst_40087){
var statearr_40197_40249 = state_40155__$1;
(statearr_40197_40249[(1)] = (13));

} else {
var statearr_40198_40250 = state_40155__$1;
(statearr_40198_40250[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (9))){
var inst_40057 = (state_40155[(8)]);
var state_40155__$1 = state_40155;
var statearr_40199_40251 = state_40155__$1;
(statearr_40199_40251[(2)] = inst_40057);

(statearr_40199_40251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (5))){
var state_40155__$1 = state_40155;
var statearr_40200_40252 = state_40155__$1;
(statearr_40200_40252[(2)] = true);

(statearr_40200_40252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (14))){
var state_40155__$1 = state_40155;
var statearr_40201_40253 = state_40155__$1;
(statearr_40201_40253[(2)] = false);

(statearr_40201_40253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (26))){
var inst_40115 = (state_40155[(11)]);
var inst_40122 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40115);
var state_40155__$1 = state_40155;
var statearr_40202_40254 = state_40155__$1;
(statearr_40202_40254[(2)] = inst_40122);

(statearr_40202_40254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (16))){
var state_40155__$1 = state_40155;
var statearr_40203_40255 = state_40155__$1;
(statearr_40203_40255[(2)] = true);

(statearr_40203_40255[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (38))){
var inst_40145 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
var statearr_40204_40256 = state_40155__$1;
(statearr_40204_40256[(2)] = inst_40145);

(statearr_40204_40256[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (30))){
var inst_40106 = (state_40155[(10)]);
var inst_40115 = (state_40155[(11)]);
var inst_40107 = (state_40155[(13)]);
var inst_40132 = cljs.core.empty_QMARK_.call(null,inst_40106);
var inst_40133 = inst_40107.call(null,inst_40115);
var inst_40134 = cljs.core.not.call(null,inst_40133);
var inst_40135 = (inst_40132) && (inst_40134);
var state_40155__$1 = state_40155;
var statearr_40205_40257 = state_40155__$1;
(statearr_40205_40257[(2)] = inst_40135);

(statearr_40205_40257[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (10))){
var inst_40057 = (state_40155[(8)]);
var inst_40078 = (state_40155[(2)]);
var inst_40079 = cljs.core.get.call(null,inst_40078,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40080 = cljs.core.get.call(null,inst_40078,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40081 = cljs.core.get.call(null,inst_40078,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40082 = inst_40057;
var state_40155__$1 = (function (){var statearr_40206 = state_40155;
(statearr_40206[(16)] = inst_40081);

(statearr_40206[(7)] = inst_40082);

(statearr_40206[(17)] = inst_40080);

(statearr_40206[(18)] = inst_40079);

return statearr_40206;
})();
var statearr_40207_40258 = state_40155__$1;
(statearr_40207_40258[(2)] = null);

(statearr_40207_40258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (18))){
var inst_40097 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
var statearr_40208_40259 = state_40155__$1;
(statearr_40208_40259[(2)] = inst_40097);

(statearr_40208_40259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (37))){
var state_40155__$1 = state_40155;
var statearr_40209_40260 = state_40155__$1;
(statearr_40209_40260[(2)] = null);

(statearr_40209_40260[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (8))){
var inst_40057 = (state_40155[(8)]);
var inst_40075 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40057);
var state_40155__$1 = state_40155;
var statearr_40210_40261 = state_40155__$1;
(statearr_40210_40261[(2)] = inst_40075);

(statearr_40210_40261[(1)] = (10));


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
});})(c__39204__auto___40215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__39116__auto__,c__39204__auto___40215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__39117__auto__ = null;
var cljs$core$async$mix_$_state_machine__39117__auto____0 = (function (){
var statearr_40211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40211[(0)] = cljs$core$async$mix_$_state_machine__39117__auto__);

(statearr_40211[(1)] = (1));

return statearr_40211;
});
var cljs$core$async$mix_$_state_machine__39117__auto____1 = (function (state_40155){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_40155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e40212){if((e40212 instanceof Object)){
var ex__39120__auto__ = e40212;
var statearr_40213_40262 = state_40155;
(statearr_40213_40262[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40263 = state_40155;
state_40155 = G__40263;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39117__auto__ = function(state_40155){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39117__auto____1.call(this,state_40155);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39117__auto____0;
cljs$core$async$mix_$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39117__auto____1;
return cljs$core$async$mix_$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___40215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__39206__auto__ = (function (){var statearr_40214 = f__39205__auto__.call(null);
(statearr_40214[(6)] = c__39204__auto___40215);

return statearr_40214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___40215,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__37203__auto__ = (((p == null))?null:p);
var m__37204__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__37203__auto__)]);
if(!((m__37204__auto__ == null))){
return m__37204__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__37204__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__37204__auto____$1 == null))){
return m__37204__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__37203__auto__ = (((p == null))?null:p);
var m__37204__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__37203__auto__)]);
if(!((m__37204__auto__ == null))){
return m__37204__auto__.call(null,p,v,ch);
} else {
var m__37204__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__37204__auto____$1 == null))){
return m__37204__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40265 = arguments.length;
switch (G__40265) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__37203__auto__ = (((p == null))?null:p);
var m__37204__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37203__auto__)]);
if(!((m__37204__auto__ == null))){
return m__37204__auto__.call(null,p);
} else {
var m__37204__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37204__auto____$1 == null))){
return m__37204__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__37203__auto__ = (((p == null))?null:p);
var m__37204__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37203__auto__)]);
if(!((m__37204__auto__ == null))){
return m__37204__auto__.call(null,p,v);
} else {
var m__37204__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37204__auto____$1 == null))){
return m__37204__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__40269 = arguments.length;
switch (G__40269) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__36520__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__36520__auto__)){
return or__36520__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__36520__auto__,mults){
return (function (p1__40267_SHARP_){
if(cljs.core.truth_(p1__40267_SHARP_.call(null,topic))){
return p1__40267_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40267_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36520__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40270 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40270 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40271){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40271 = meta40271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40272,meta40271__$1){
var self__ = this;
var _40272__$1 = this;
return (new cljs.core.async.t_cljs$core$async40270(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40271__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40272){
var self__ = this;
var _40272__$1 = this;
return self__.meta40271;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40270.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40270.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40270.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40270.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40270.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40270.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40270.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40270.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40271","meta40271",1327133183,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40270.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40270";

cljs.core.async.t_cljs$core$async40270.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37145__auto__,writer__37146__auto__,opt__37147__auto__){
return cljs.core._write.call(null,writer__37146__auto__,"cljs.core.async/t_cljs$core$async40270");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40270 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40270(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40271){
return (new cljs.core.async.t_cljs$core$async40270(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40271));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40270(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39204__auto___40390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___40390,mults,ensure_mult,p){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___40390,mults,ensure_mult,p){
return (function (state_40344){
var state_val_40345 = (state_40344[(1)]);
if((state_val_40345 === (7))){
var inst_40340 = (state_40344[(2)]);
var state_40344__$1 = state_40344;
var statearr_40346_40391 = state_40344__$1;
(statearr_40346_40391[(2)] = inst_40340);

(statearr_40346_40391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (20))){
var state_40344__$1 = state_40344;
var statearr_40347_40392 = state_40344__$1;
(statearr_40347_40392[(2)] = null);

(statearr_40347_40392[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (1))){
var state_40344__$1 = state_40344;
var statearr_40348_40393 = state_40344__$1;
(statearr_40348_40393[(2)] = null);

(statearr_40348_40393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (24))){
var inst_40323 = (state_40344[(7)]);
var inst_40332 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40323);
var state_40344__$1 = state_40344;
var statearr_40349_40394 = state_40344__$1;
(statearr_40349_40394[(2)] = inst_40332);

(statearr_40349_40394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (4))){
var inst_40275 = (state_40344[(8)]);
var inst_40275__$1 = (state_40344[(2)]);
var inst_40276 = (inst_40275__$1 == null);
var state_40344__$1 = (function (){var statearr_40350 = state_40344;
(statearr_40350[(8)] = inst_40275__$1);

return statearr_40350;
})();
if(cljs.core.truth_(inst_40276)){
var statearr_40351_40395 = state_40344__$1;
(statearr_40351_40395[(1)] = (5));

} else {
var statearr_40352_40396 = state_40344__$1;
(statearr_40352_40396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (15))){
var inst_40317 = (state_40344[(2)]);
var state_40344__$1 = state_40344;
var statearr_40353_40397 = state_40344__$1;
(statearr_40353_40397[(2)] = inst_40317);

(statearr_40353_40397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (21))){
var inst_40337 = (state_40344[(2)]);
var state_40344__$1 = (function (){var statearr_40354 = state_40344;
(statearr_40354[(9)] = inst_40337);

return statearr_40354;
})();
var statearr_40355_40398 = state_40344__$1;
(statearr_40355_40398[(2)] = null);

(statearr_40355_40398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (13))){
var inst_40299 = (state_40344[(10)]);
var inst_40301 = cljs.core.chunked_seq_QMARK_.call(null,inst_40299);
var state_40344__$1 = state_40344;
if(inst_40301){
var statearr_40356_40399 = state_40344__$1;
(statearr_40356_40399[(1)] = (16));

} else {
var statearr_40357_40400 = state_40344__$1;
(statearr_40357_40400[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (22))){
var inst_40329 = (state_40344[(2)]);
var state_40344__$1 = state_40344;
if(cljs.core.truth_(inst_40329)){
var statearr_40358_40401 = state_40344__$1;
(statearr_40358_40401[(1)] = (23));

} else {
var statearr_40359_40402 = state_40344__$1;
(statearr_40359_40402[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (6))){
var inst_40275 = (state_40344[(8)]);
var inst_40323 = (state_40344[(7)]);
var inst_40325 = (state_40344[(11)]);
var inst_40323__$1 = topic_fn.call(null,inst_40275);
var inst_40324 = cljs.core.deref.call(null,mults);
var inst_40325__$1 = cljs.core.get.call(null,inst_40324,inst_40323__$1);
var state_40344__$1 = (function (){var statearr_40360 = state_40344;
(statearr_40360[(7)] = inst_40323__$1);

(statearr_40360[(11)] = inst_40325__$1);

return statearr_40360;
})();
if(cljs.core.truth_(inst_40325__$1)){
var statearr_40361_40403 = state_40344__$1;
(statearr_40361_40403[(1)] = (19));

} else {
var statearr_40362_40404 = state_40344__$1;
(statearr_40362_40404[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (25))){
var inst_40334 = (state_40344[(2)]);
var state_40344__$1 = state_40344;
var statearr_40363_40405 = state_40344__$1;
(statearr_40363_40405[(2)] = inst_40334);

(statearr_40363_40405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (17))){
var inst_40299 = (state_40344[(10)]);
var inst_40308 = cljs.core.first.call(null,inst_40299);
var inst_40309 = cljs.core.async.muxch_STAR_.call(null,inst_40308);
var inst_40310 = cljs.core.async.close_BANG_.call(null,inst_40309);
var inst_40311 = cljs.core.next.call(null,inst_40299);
var inst_40285 = inst_40311;
var inst_40286 = null;
var inst_40287 = (0);
var inst_40288 = (0);
var state_40344__$1 = (function (){var statearr_40364 = state_40344;
(statearr_40364[(12)] = inst_40310);

(statearr_40364[(13)] = inst_40285);

(statearr_40364[(14)] = inst_40287);

(statearr_40364[(15)] = inst_40288);

(statearr_40364[(16)] = inst_40286);

return statearr_40364;
})();
var statearr_40365_40406 = state_40344__$1;
(statearr_40365_40406[(2)] = null);

(statearr_40365_40406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (3))){
var inst_40342 = (state_40344[(2)]);
var state_40344__$1 = state_40344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40344__$1,inst_40342);
} else {
if((state_val_40345 === (12))){
var inst_40319 = (state_40344[(2)]);
var state_40344__$1 = state_40344;
var statearr_40366_40407 = state_40344__$1;
(statearr_40366_40407[(2)] = inst_40319);

(statearr_40366_40407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (2))){
var state_40344__$1 = state_40344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40344__$1,(4),ch);
} else {
if((state_val_40345 === (23))){
var state_40344__$1 = state_40344;
var statearr_40367_40408 = state_40344__$1;
(statearr_40367_40408[(2)] = null);

(statearr_40367_40408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (19))){
var inst_40275 = (state_40344[(8)]);
var inst_40325 = (state_40344[(11)]);
var inst_40327 = cljs.core.async.muxch_STAR_.call(null,inst_40325);
var state_40344__$1 = state_40344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40344__$1,(22),inst_40327,inst_40275);
} else {
if((state_val_40345 === (11))){
var inst_40285 = (state_40344[(13)]);
var inst_40299 = (state_40344[(10)]);
var inst_40299__$1 = cljs.core.seq.call(null,inst_40285);
var state_40344__$1 = (function (){var statearr_40368 = state_40344;
(statearr_40368[(10)] = inst_40299__$1);

return statearr_40368;
})();
if(inst_40299__$1){
var statearr_40369_40409 = state_40344__$1;
(statearr_40369_40409[(1)] = (13));

} else {
var statearr_40370_40410 = state_40344__$1;
(statearr_40370_40410[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (9))){
var inst_40321 = (state_40344[(2)]);
var state_40344__$1 = state_40344;
var statearr_40371_40411 = state_40344__$1;
(statearr_40371_40411[(2)] = inst_40321);

(statearr_40371_40411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (5))){
var inst_40282 = cljs.core.deref.call(null,mults);
var inst_40283 = cljs.core.vals.call(null,inst_40282);
var inst_40284 = cljs.core.seq.call(null,inst_40283);
var inst_40285 = inst_40284;
var inst_40286 = null;
var inst_40287 = (0);
var inst_40288 = (0);
var state_40344__$1 = (function (){var statearr_40372 = state_40344;
(statearr_40372[(13)] = inst_40285);

(statearr_40372[(14)] = inst_40287);

(statearr_40372[(15)] = inst_40288);

(statearr_40372[(16)] = inst_40286);

return statearr_40372;
})();
var statearr_40373_40412 = state_40344__$1;
(statearr_40373_40412[(2)] = null);

(statearr_40373_40412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (14))){
var state_40344__$1 = state_40344;
var statearr_40377_40413 = state_40344__$1;
(statearr_40377_40413[(2)] = null);

(statearr_40377_40413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (16))){
var inst_40299 = (state_40344[(10)]);
var inst_40303 = cljs.core.chunk_first.call(null,inst_40299);
var inst_40304 = cljs.core.chunk_rest.call(null,inst_40299);
var inst_40305 = cljs.core.count.call(null,inst_40303);
var inst_40285 = inst_40304;
var inst_40286 = inst_40303;
var inst_40287 = inst_40305;
var inst_40288 = (0);
var state_40344__$1 = (function (){var statearr_40378 = state_40344;
(statearr_40378[(13)] = inst_40285);

(statearr_40378[(14)] = inst_40287);

(statearr_40378[(15)] = inst_40288);

(statearr_40378[(16)] = inst_40286);

return statearr_40378;
})();
var statearr_40379_40414 = state_40344__$1;
(statearr_40379_40414[(2)] = null);

(statearr_40379_40414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (10))){
var inst_40285 = (state_40344[(13)]);
var inst_40287 = (state_40344[(14)]);
var inst_40288 = (state_40344[(15)]);
var inst_40286 = (state_40344[(16)]);
var inst_40293 = cljs.core._nth.call(null,inst_40286,inst_40288);
var inst_40294 = cljs.core.async.muxch_STAR_.call(null,inst_40293);
var inst_40295 = cljs.core.async.close_BANG_.call(null,inst_40294);
var inst_40296 = (inst_40288 + (1));
var tmp40374 = inst_40285;
var tmp40375 = inst_40287;
var tmp40376 = inst_40286;
var inst_40285__$1 = tmp40374;
var inst_40286__$1 = tmp40376;
var inst_40287__$1 = tmp40375;
var inst_40288__$1 = inst_40296;
var state_40344__$1 = (function (){var statearr_40380 = state_40344;
(statearr_40380[(13)] = inst_40285__$1);

(statearr_40380[(14)] = inst_40287__$1);

(statearr_40380[(17)] = inst_40295);

(statearr_40380[(15)] = inst_40288__$1);

(statearr_40380[(16)] = inst_40286__$1);

return statearr_40380;
})();
var statearr_40381_40415 = state_40344__$1;
(statearr_40381_40415[(2)] = null);

(statearr_40381_40415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (18))){
var inst_40314 = (state_40344[(2)]);
var state_40344__$1 = state_40344;
var statearr_40382_40416 = state_40344__$1;
(statearr_40382_40416[(2)] = inst_40314);

(statearr_40382_40416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (8))){
var inst_40287 = (state_40344[(14)]);
var inst_40288 = (state_40344[(15)]);
var inst_40290 = (inst_40288 < inst_40287);
var inst_40291 = inst_40290;
var state_40344__$1 = state_40344;
if(cljs.core.truth_(inst_40291)){
var statearr_40383_40417 = state_40344__$1;
(statearr_40383_40417[(1)] = (10));

} else {
var statearr_40384_40418 = state_40344__$1;
(statearr_40384_40418[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__39204__auto___40390,mults,ensure_mult,p))
;
return ((function (switch__39116__auto__,c__39204__auto___40390,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__39117__auto__ = null;
var cljs$core$async$state_machine__39117__auto____0 = (function (){
var statearr_40385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40385[(0)] = cljs$core$async$state_machine__39117__auto__);

(statearr_40385[(1)] = (1));

return statearr_40385;
});
var cljs$core$async$state_machine__39117__auto____1 = (function (state_40344){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_40344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e40386){if((e40386 instanceof Object)){
var ex__39120__auto__ = e40386;
var statearr_40387_40419 = state_40344;
(statearr_40387_40419[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40420 = state_40344;
state_40344 = G__40420;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$state_machine__39117__auto__ = function(state_40344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39117__auto____1.call(this,state_40344);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39117__auto____0;
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39117__auto____1;
return cljs$core$async$state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___40390,mults,ensure_mult,p))
})();
var state__39206__auto__ = (function (){var statearr_40388 = f__39205__auto__.call(null);
(statearr_40388[(6)] = c__39204__auto___40390);

return statearr_40388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___40390,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__40422 = arguments.length;
switch (G__40422) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__40425 = arguments.length;
switch (G__40425) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__40428 = arguments.length;
switch (G__40428) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__39204__auto___40495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___40495,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___40495,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40467){
var state_val_40468 = (state_40467[(1)]);
if((state_val_40468 === (7))){
var state_40467__$1 = state_40467;
var statearr_40469_40496 = state_40467__$1;
(statearr_40469_40496[(2)] = null);

(statearr_40469_40496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (1))){
var state_40467__$1 = state_40467;
var statearr_40470_40497 = state_40467__$1;
(statearr_40470_40497[(2)] = null);

(statearr_40470_40497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (4))){
var inst_40431 = (state_40467[(7)]);
var inst_40433 = (inst_40431 < cnt);
var state_40467__$1 = state_40467;
if(cljs.core.truth_(inst_40433)){
var statearr_40471_40498 = state_40467__$1;
(statearr_40471_40498[(1)] = (6));

} else {
var statearr_40472_40499 = state_40467__$1;
(statearr_40472_40499[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (15))){
var inst_40463 = (state_40467[(2)]);
var state_40467__$1 = state_40467;
var statearr_40473_40500 = state_40467__$1;
(statearr_40473_40500[(2)] = inst_40463);

(statearr_40473_40500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (13))){
var inst_40456 = cljs.core.async.close_BANG_.call(null,out);
var state_40467__$1 = state_40467;
var statearr_40474_40501 = state_40467__$1;
(statearr_40474_40501[(2)] = inst_40456);

(statearr_40474_40501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (6))){
var state_40467__$1 = state_40467;
var statearr_40475_40502 = state_40467__$1;
(statearr_40475_40502[(2)] = null);

(statearr_40475_40502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (3))){
var inst_40465 = (state_40467[(2)]);
var state_40467__$1 = state_40467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40467__$1,inst_40465);
} else {
if((state_val_40468 === (12))){
var inst_40453 = (state_40467[(8)]);
var inst_40453__$1 = (state_40467[(2)]);
var inst_40454 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40453__$1);
var state_40467__$1 = (function (){var statearr_40476 = state_40467;
(statearr_40476[(8)] = inst_40453__$1);

return statearr_40476;
})();
if(cljs.core.truth_(inst_40454)){
var statearr_40477_40503 = state_40467__$1;
(statearr_40477_40503[(1)] = (13));

} else {
var statearr_40478_40504 = state_40467__$1;
(statearr_40478_40504[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (2))){
var inst_40430 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40431 = (0);
var state_40467__$1 = (function (){var statearr_40479 = state_40467;
(statearr_40479[(7)] = inst_40431);

(statearr_40479[(9)] = inst_40430);

return statearr_40479;
})();
var statearr_40480_40505 = state_40467__$1;
(statearr_40480_40505[(2)] = null);

(statearr_40480_40505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (11))){
var inst_40431 = (state_40467[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40467,(10),Object,null,(9));
var inst_40440 = chs__$1.call(null,inst_40431);
var inst_40441 = done.call(null,inst_40431);
var inst_40442 = cljs.core.async.take_BANG_.call(null,inst_40440,inst_40441);
var state_40467__$1 = state_40467;
var statearr_40481_40506 = state_40467__$1;
(statearr_40481_40506[(2)] = inst_40442);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40467__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (9))){
var inst_40431 = (state_40467[(7)]);
var inst_40444 = (state_40467[(2)]);
var inst_40445 = (inst_40431 + (1));
var inst_40431__$1 = inst_40445;
var state_40467__$1 = (function (){var statearr_40482 = state_40467;
(statearr_40482[(7)] = inst_40431__$1);

(statearr_40482[(10)] = inst_40444);

return statearr_40482;
})();
var statearr_40483_40507 = state_40467__$1;
(statearr_40483_40507[(2)] = null);

(statearr_40483_40507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (5))){
var inst_40451 = (state_40467[(2)]);
var state_40467__$1 = (function (){var statearr_40484 = state_40467;
(statearr_40484[(11)] = inst_40451);

return statearr_40484;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40467__$1,(12),dchan);
} else {
if((state_val_40468 === (14))){
var inst_40453 = (state_40467[(8)]);
var inst_40458 = cljs.core.apply.call(null,f,inst_40453);
var state_40467__$1 = state_40467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40467__$1,(16),out,inst_40458);
} else {
if((state_val_40468 === (16))){
var inst_40460 = (state_40467[(2)]);
var state_40467__$1 = (function (){var statearr_40485 = state_40467;
(statearr_40485[(12)] = inst_40460);

return statearr_40485;
})();
var statearr_40486_40508 = state_40467__$1;
(statearr_40486_40508[(2)] = null);

(statearr_40486_40508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (10))){
var inst_40435 = (state_40467[(2)]);
var inst_40436 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40467__$1 = (function (){var statearr_40487 = state_40467;
(statearr_40487[(13)] = inst_40435);

return statearr_40487;
})();
var statearr_40488_40509 = state_40467__$1;
(statearr_40488_40509[(2)] = inst_40436);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40467__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40468 === (8))){
var inst_40449 = (state_40467[(2)]);
var state_40467__$1 = state_40467;
var statearr_40489_40510 = state_40467__$1;
(statearr_40489_40510[(2)] = inst_40449);

(statearr_40489_40510[(1)] = (5));


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
});})(c__39204__auto___40495,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__39116__auto__,c__39204__auto___40495,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__39117__auto__ = null;
var cljs$core$async$state_machine__39117__auto____0 = (function (){
var statearr_40490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40490[(0)] = cljs$core$async$state_machine__39117__auto__);

(statearr_40490[(1)] = (1));

return statearr_40490;
});
var cljs$core$async$state_machine__39117__auto____1 = (function (state_40467){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_40467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e40491){if((e40491 instanceof Object)){
var ex__39120__auto__ = e40491;
var statearr_40492_40511 = state_40467;
(statearr_40492_40511[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40512 = state_40467;
state_40467 = G__40512;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$state_machine__39117__auto__ = function(state_40467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39117__auto____1.call(this,state_40467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39117__auto____0;
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39117__auto____1;
return cljs$core$async$state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___40495,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__39206__auto__ = (function (){var statearr_40493 = f__39205__auto__.call(null);
(statearr_40493[(6)] = c__39204__auto___40495);

return statearr_40493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___40495,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__40515 = arguments.length;
switch (G__40515) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39204__auto___40569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___40569,out){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___40569,out){
return (function (state_40547){
var state_val_40548 = (state_40547[(1)]);
if((state_val_40548 === (7))){
var inst_40527 = (state_40547[(7)]);
var inst_40526 = (state_40547[(8)]);
var inst_40526__$1 = (state_40547[(2)]);
var inst_40527__$1 = cljs.core.nth.call(null,inst_40526__$1,(0),null);
var inst_40528 = cljs.core.nth.call(null,inst_40526__$1,(1),null);
var inst_40529 = (inst_40527__$1 == null);
var state_40547__$1 = (function (){var statearr_40549 = state_40547;
(statearr_40549[(7)] = inst_40527__$1);

(statearr_40549[(8)] = inst_40526__$1);

(statearr_40549[(9)] = inst_40528);

return statearr_40549;
})();
if(cljs.core.truth_(inst_40529)){
var statearr_40550_40570 = state_40547__$1;
(statearr_40550_40570[(1)] = (8));

} else {
var statearr_40551_40571 = state_40547__$1;
(statearr_40551_40571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40548 === (1))){
var inst_40516 = cljs.core.vec.call(null,chs);
var inst_40517 = inst_40516;
var state_40547__$1 = (function (){var statearr_40552 = state_40547;
(statearr_40552[(10)] = inst_40517);

return statearr_40552;
})();
var statearr_40553_40572 = state_40547__$1;
(statearr_40553_40572[(2)] = null);

(statearr_40553_40572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40548 === (4))){
var inst_40517 = (state_40547[(10)]);
var state_40547__$1 = state_40547;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40547__$1,(7),inst_40517);
} else {
if((state_val_40548 === (6))){
var inst_40543 = (state_40547[(2)]);
var state_40547__$1 = state_40547;
var statearr_40554_40573 = state_40547__$1;
(statearr_40554_40573[(2)] = inst_40543);

(statearr_40554_40573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40548 === (3))){
var inst_40545 = (state_40547[(2)]);
var state_40547__$1 = state_40547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40547__$1,inst_40545);
} else {
if((state_val_40548 === (2))){
var inst_40517 = (state_40547[(10)]);
var inst_40519 = cljs.core.count.call(null,inst_40517);
var inst_40520 = (inst_40519 > (0));
var state_40547__$1 = state_40547;
if(cljs.core.truth_(inst_40520)){
var statearr_40556_40574 = state_40547__$1;
(statearr_40556_40574[(1)] = (4));

} else {
var statearr_40557_40575 = state_40547__$1;
(statearr_40557_40575[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40548 === (11))){
var inst_40517 = (state_40547[(10)]);
var inst_40536 = (state_40547[(2)]);
var tmp40555 = inst_40517;
var inst_40517__$1 = tmp40555;
var state_40547__$1 = (function (){var statearr_40558 = state_40547;
(statearr_40558[(11)] = inst_40536);

(statearr_40558[(10)] = inst_40517__$1);

return statearr_40558;
})();
var statearr_40559_40576 = state_40547__$1;
(statearr_40559_40576[(2)] = null);

(statearr_40559_40576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40548 === (9))){
var inst_40527 = (state_40547[(7)]);
var state_40547__$1 = state_40547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40547__$1,(11),out,inst_40527);
} else {
if((state_val_40548 === (5))){
var inst_40541 = cljs.core.async.close_BANG_.call(null,out);
var state_40547__$1 = state_40547;
var statearr_40560_40577 = state_40547__$1;
(statearr_40560_40577[(2)] = inst_40541);

(statearr_40560_40577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40548 === (10))){
var inst_40539 = (state_40547[(2)]);
var state_40547__$1 = state_40547;
var statearr_40561_40578 = state_40547__$1;
(statearr_40561_40578[(2)] = inst_40539);

(statearr_40561_40578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40548 === (8))){
var inst_40527 = (state_40547[(7)]);
var inst_40526 = (state_40547[(8)]);
var inst_40528 = (state_40547[(9)]);
var inst_40517 = (state_40547[(10)]);
var inst_40531 = (function (){var cs = inst_40517;
var vec__40522 = inst_40526;
var v = inst_40527;
var c = inst_40528;
return ((function (cs,vec__40522,v,c,inst_40527,inst_40526,inst_40528,inst_40517,state_val_40548,c__39204__auto___40569,out){
return (function (p1__40513_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40513_SHARP_);
});
;})(cs,vec__40522,v,c,inst_40527,inst_40526,inst_40528,inst_40517,state_val_40548,c__39204__auto___40569,out))
})();
var inst_40532 = cljs.core.filterv.call(null,inst_40531,inst_40517);
var inst_40517__$1 = inst_40532;
var state_40547__$1 = (function (){var statearr_40562 = state_40547;
(statearr_40562[(10)] = inst_40517__$1);

return statearr_40562;
})();
var statearr_40563_40579 = state_40547__$1;
(statearr_40563_40579[(2)] = null);

(statearr_40563_40579[(1)] = (2));


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
});})(c__39204__auto___40569,out))
;
return ((function (switch__39116__auto__,c__39204__auto___40569,out){
return (function() {
var cljs$core$async$state_machine__39117__auto__ = null;
var cljs$core$async$state_machine__39117__auto____0 = (function (){
var statearr_40564 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40564[(0)] = cljs$core$async$state_machine__39117__auto__);

(statearr_40564[(1)] = (1));

return statearr_40564;
});
var cljs$core$async$state_machine__39117__auto____1 = (function (state_40547){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_40547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e40565){if((e40565 instanceof Object)){
var ex__39120__auto__ = e40565;
var statearr_40566_40580 = state_40547;
(statearr_40566_40580[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40581 = state_40547;
state_40547 = G__40581;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$state_machine__39117__auto__ = function(state_40547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39117__auto____1.call(this,state_40547);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39117__auto____0;
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39117__auto____1;
return cljs$core$async$state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___40569,out))
})();
var state__39206__auto__ = (function (){var statearr_40567 = f__39205__auto__.call(null);
(statearr_40567[(6)] = c__39204__auto___40569);

return statearr_40567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___40569,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__40583 = arguments.length;
switch (G__40583) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39204__auto___40628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___40628,out){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___40628,out){
return (function (state_40607){
var state_val_40608 = (state_40607[(1)]);
if((state_val_40608 === (7))){
var inst_40589 = (state_40607[(7)]);
var inst_40589__$1 = (state_40607[(2)]);
var inst_40590 = (inst_40589__$1 == null);
var inst_40591 = cljs.core.not.call(null,inst_40590);
var state_40607__$1 = (function (){var statearr_40609 = state_40607;
(statearr_40609[(7)] = inst_40589__$1);

return statearr_40609;
})();
if(inst_40591){
var statearr_40610_40629 = state_40607__$1;
(statearr_40610_40629[(1)] = (8));

} else {
var statearr_40611_40630 = state_40607__$1;
(statearr_40611_40630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40608 === (1))){
var inst_40584 = (0);
var state_40607__$1 = (function (){var statearr_40612 = state_40607;
(statearr_40612[(8)] = inst_40584);

return statearr_40612;
})();
var statearr_40613_40631 = state_40607__$1;
(statearr_40613_40631[(2)] = null);

(statearr_40613_40631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40608 === (4))){
var state_40607__$1 = state_40607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40607__$1,(7),ch);
} else {
if((state_val_40608 === (6))){
var inst_40602 = (state_40607[(2)]);
var state_40607__$1 = state_40607;
var statearr_40614_40632 = state_40607__$1;
(statearr_40614_40632[(2)] = inst_40602);

(statearr_40614_40632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40608 === (3))){
var inst_40604 = (state_40607[(2)]);
var inst_40605 = cljs.core.async.close_BANG_.call(null,out);
var state_40607__$1 = (function (){var statearr_40615 = state_40607;
(statearr_40615[(9)] = inst_40604);

return statearr_40615;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40607__$1,inst_40605);
} else {
if((state_val_40608 === (2))){
var inst_40584 = (state_40607[(8)]);
var inst_40586 = (inst_40584 < n);
var state_40607__$1 = state_40607;
if(cljs.core.truth_(inst_40586)){
var statearr_40616_40633 = state_40607__$1;
(statearr_40616_40633[(1)] = (4));

} else {
var statearr_40617_40634 = state_40607__$1;
(statearr_40617_40634[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40608 === (11))){
var inst_40584 = (state_40607[(8)]);
var inst_40594 = (state_40607[(2)]);
var inst_40595 = (inst_40584 + (1));
var inst_40584__$1 = inst_40595;
var state_40607__$1 = (function (){var statearr_40618 = state_40607;
(statearr_40618[(8)] = inst_40584__$1);

(statearr_40618[(10)] = inst_40594);

return statearr_40618;
})();
var statearr_40619_40635 = state_40607__$1;
(statearr_40619_40635[(2)] = null);

(statearr_40619_40635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40608 === (9))){
var state_40607__$1 = state_40607;
var statearr_40620_40636 = state_40607__$1;
(statearr_40620_40636[(2)] = null);

(statearr_40620_40636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40608 === (5))){
var state_40607__$1 = state_40607;
var statearr_40621_40637 = state_40607__$1;
(statearr_40621_40637[(2)] = null);

(statearr_40621_40637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40608 === (10))){
var inst_40599 = (state_40607[(2)]);
var state_40607__$1 = state_40607;
var statearr_40622_40638 = state_40607__$1;
(statearr_40622_40638[(2)] = inst_40599);

(statearr_40622_40638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40608 === (8))){
var inst_40589 = (state_40607[(7)]);
var state_40607__$1 = state_40607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40607__$1,(11),out,inst_40589);
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
});})(c__39204__auto___40628,out))
;
return ((function (switch__39116__auto__,c__39204__auto___40628,out){
return (function() {
var cljs$core$async$state_machine__39117__auto__ = null;
var cljs$core$async$state_machine__39117__auto____0 = (function (){
var statearr_40623 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40623[(0)] = cljs$core$async$state_machine__39117__auto__);

(statearr_40623[(1)] = (1));

return statearr_40623;
});
var cljs$core$async$state_machine__39117__auto____1 = (function (state_40607){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_40607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e40624){if((e40624 instanceof Object)){
var ex__39120__auto__ = e40624;
var statearr_40625_40639 = state_40607;
(statearr_40625_40639[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40640 = state_40607;
state_40607 = G__40640;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$state_machine__39117__auto__ = function(state_40607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39117__auto____1.call(this,state_40607);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39117__auto____0;
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39117__auto____1;
return cljs$core$async$state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___40628,out))
})();
var state__39206__auto__ = (function (){var statearr_40626 = f__39205__auto__.call(null);
(statearr_40626[(6)] = c__39204__auto___40628);

return statearr_40626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___40628,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40642 = (function (f,ch,meta40643){
this.f = f;
this.ch = ch;
this.meta40643 = meta40643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40644,meta40643__$1){
var self__ = this;
var _40644__$1 = this;
return (new cljs.core.async.t_cljs$core$async40642(self__.f,self__.ch,meta40643__$1));
});

cljs.core.async.t_cljs$core$async40642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40644){
var self__ = this;
var _40644__$1 = this;
return self__.meta40643;
});

cljs.core.async.t_cljs$core$async40642.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40642.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40642.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40642.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40642.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40645 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40645 = (function (f,ch,meta40643,_,fn1,meta40646){
this.f = f;
this.ch = ch;
this.meta40643 = meta40643;
this._ = _;
this.fn1 = fn1;
this.meta40646 = meta40646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40647,meta40646__$1){
var self__ = this;
var _40647__$1 = this;
return (new cljs.core.async.t_cljs$core$async40645(self__.f,self__.ch,self__.meta40643,self__._,self__.fn1,meta40646__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40645.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40647){
var self__ = this;
var _40647__$1 = this;
return self__.meta40646;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40645.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40645.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40645.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40641_SHARP_){
return f1.call(null,(((p1__40641_SHARP_ == null))?null:self__.f.call(null,p1__40641_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40645.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40643","meta40643",-934835316,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40642","cljs.core.async/t_cljs$core$async40642",-344403490,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40646","meta40646",-1590233926,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40645";

cljs.core.async.t_cljs$core$async40645.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37145__auto__,writer__37146__auto__,opt__37147__auto__){
return cljs.core._write.call(null,writer__37146__auto__,"cljs.core.async/t_cljs$core$async40645");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40645 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40645(f__$1,ch__$1,meta40643__$1,___$2,fn1__$1,meta40646){
return (new cljs.core.async.t_cljs$core$async40645(f__$1,ch__$1,meta40643__$1,___$2,fn1__$1,meta40646));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40645(self__.f,self__.ch,self__.meta40643,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__36508__auto__ = ret;
if(cljs.core.truth_(and__36508__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__36508__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async40642.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40642.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40643","meta40643",-934835316,null)], null);
});

cljs.core.async.t_cljs$core$async40642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40642";

cljs.core.async.t_cljs$core$async40642.cljs$lang$ctorPrWriter = (function (this__37145__auto__,writer__37146__auto__,opt__37147__auto__){
return cljs.core._write.call(null,writer__37146__auto__,"cljs.core.async/t_cljs$core$async40642");
});

cljs.core.async.__GT_t_cljs$core$async40642 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40642(f__$1,ch__$1,meta40643){
return (new cljs.core.async.t_cljs$core$async40642(f__$1,ch__$1,meta40643));
});

}

return (new cljs.core.async.t_cljs$core$async40642(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40648 = (function (f,ch,meta40649){
this.f = f;
this.ch = ch;
this.meta40649 = meta40649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40650,meta40649__$1){
var self__ = this;
var _40650__$1 = this;
return (new cljs.core.async.t_cljs$core$async40648(self__.f,self__.ch,meta40649__$1));
});

cljs.core.async.t_cljs$core$async40648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40650){
var self__ = this;
var _40650__$1 = this;
return self__.meta40649;
});

cljs.core.async.t_cljs$core$async40648.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40648.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40648.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40649","meta40649",1798341952,null)], null);
});

cljs.core.async.t_cljs$core$async40648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40648";

cljs.core.async.t_cljs$core$async40648.cljs$lang$ctorPrWriter = (function (this__37145__auto__,writer__37146__auto__,opt__37147__auto__){
return cljs.core._write.call(null,writer__37146__auto__,"cljs.core.async/t_cljs$core$async40648");
});

cljs.core.async.__GT_t_cljs$core$async40648 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40648(f__$1,ch__$1,meta40649){
return (new cljs.core.async.t_cljs$core$async40648(f__$1,ch__$1,meta40649));
});

}

return (new cljs.core.async.t_cljs$core$async40648(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40651 = (function (p,ch,meta40652){
this.p = p;
this.ch = ch;
this.meta40652 = meta40652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40653,meta40652__$1){
var self__ = this;
var _40653__$1 = this;
return (new cljs.core.async.t_cljs$core$async40651(self__.p,self__.ch,meta40652__$1));
});

cljs.core.async.t_cljs$core$async40651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40653){
var self__ = this;
var _40653__$1 = this;
return self__.meta40652;
});

cljs.core.async.t_cljs$core$async40651.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40651.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40651.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40651.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40651.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40651.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40651.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40652","meta40652",-1107110340,null)], null);
});

cljs.core.async.t_cljs$core$async40651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40651";

cljs.core.async.t_cljs$core$async40651.cljs$lang$ctorPrWriter = (function (this__37145__auto__,writer__37146__auto__,opt__37147__auto__){
return cljs.core._write.call(null,writer__37146__auto__,"cljs.core.async/t_cljs$core$async40651");
});

cljs.core.async.__GT_t_cljs$core$async40651 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40651(p__$1,ch__$1,meta40652){
return (new cljs.core.async.t_cljs$core$async40651(p__$1,ch__$1,meta40652));
});

}

return (new cljs.core.async.t_cljs$core$async40651(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__40655 = arguments.length;
switch (G__40655) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39204__auto___40695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___40695,out){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___40695,out){
return (function (state_40676){
var state_val_40677 = (state_40676[(1)]);
if((state_val_40677 === (7))){
var inst_40672 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40678_40696 = state_40676__$1;
(statearr_40678_40696[(2)] = inst_40672);

(statearr_40678_40696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (1))){
var state_40676__$1 = state_40676;
var statearr_40679_40697 = state_40676__$1;
(statearr_40679_40697[(2)] = null);

(statearr_40679_40697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (4))){
var inst_40658 = (state_40676[(7)]);
var inst_40658__$1 = (state_40676[(2)]);
var inst_40659 = (inst_40658__$1 == null);
var state_40676__$1 = (function (){var statearr_40680 = state_40676;
(statearr_40680[(7)] = inst_40658__$1);

return statearr_40680;
})();
if(cljs.core.truth_(inst_40659)){
var statearr_40681_40698 = state_40676__$1;
(statearr_40681_40698[(1)] = (5));

} else {
var statearr_40682_40699 = state_40676__$1;
(statearr_40682_40699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (6))){
var inst_40658 = (state_40676[(7)]);
var inst_40663 = p.call(null,inst_40658);
var state_40676__$1 = state_40676;
if(cljs.core.truth_(inst_40663)){
var statearr_40683_40700 = state_40676__$1;
(statearr_40683_40700[(1)] = (8));

} else {
var statearr_40684_40701 = state_40676__$1;
(statearr_40684_40701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (3))){
var inst_40674 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40676__$1,inst_40674);
} else {
if((state_val_40677 === (2))){
var state_40676__$1 = state_40676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40676__$1,(4),ch);
} else {
if((state_val_40677 === (11))){
var inst_40666 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40685_40702 = state_40676__$1;
(statearr_40685_40702[(2)] = inst_40666);

(statearr_40685_40702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (9))){
var state_40676__$1 = state_40676;
var statearr_40686_40703 = state_40676__$1;
(statearr_40686_40703[(2)] = null);

(statearr_40686_40703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (5))){
var inst_40661 = cljs.core.async.close_BANG_.call(null,out);
var state_40676__$1 = state_40676;
var statearr_40687_40704 = state_40676__$1;
(statearr_40687_40704[(2)] = inst_40661);

(statearr_40687_40704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (10))){
var inst_40669 = (state_40676[(2)]);
var state_40676__$1 = (function (){var statearr_40688 = state_40676;
(statearr_40688[(8)] = inst_40669);

return statearr_40688;
})();
var statearr_40689_40705 = state_40676__$1;
(statearr_40689_40705[(2)] = null);

(statearr_40689_40705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (8))){
var inst_40658 = (state_40676[(7)]);
var state_40676__$1 = state_40676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40676__$1,(11),out,inst_40658);
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
});})(c__39204__auto___40695,out))
;
return ((function (switch__39116__auto__,c__39204__auto___40695,out){
return (function() {
var cljs$core$async$state_machine__39117__auto__ = null;
var cljs$core$async$state_machine__39117__auto____0 = (function (){
var statearr_40690 = [null,null,null,null,null,null,null,null,null];
(statearr_40690[(0)] = cljs$core$async$state_machine__39117__auto__);

(statearr_40690[(1)] = (1));

return statearr_40690;
});
var cljs$core$async$state_machine__39117__auto____1 = (function (state_40676){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_40676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e40691){if((e40691 instanceof Object)){
var ex__39120__auto__ = e40691;
var statearr_40692_40706 = state_40676;
(statearr_40692_40706[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40707 = state_40676;
state_40676 = G__40707;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$state_machine__39117__auto__ = function(state_40676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39117__auto____1.call(this,state_40676);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39117__auto____0;
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39117__auto____1;
return cljs$core$async$state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___40695,out))
})();
var state__39206__auto__ = (function (){var statearr_40693 = f__39205__auto__.call(null);
(statearr_40693[(6)] = c__39204__auto___40695);

return statearr_40693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___40695,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40709 = arguments.length;
switch (G__40709) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__39204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto__){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto__){
return (function (state_40772){
var state_val_40773 = (state_40772[(1)]);
if((state_val_40773 === (7))){
var inst_40768 = (state_40772[(2)]);
var state_40772__$1 = state_40772;
var statearr_40774_40812 = state_40772__$1;
(statearr_40774_40812[(2)] = inst_40768);

(statearr_40774_40812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (20))){
var inst_40738 = (state_40772[(7)]);
var inst_40749 = (state_40772[(2)]);
var inst_40750 = cljs.core.next.call(null,inst_40738);
var inst_40724 = inst_40750;
var inst_40725 = null;
var inst_40726 = (0);
var inst_40727 = (0);
var state_40772__$1 = (function (){var statearr_40775 = state_40772;
(statearr_40775[(8)] = inst_40749);

(statearr_40775[(9)] = inst_40724);

(statearr_40775[(10)] = inst_40726);

(statearr_40775[(11)] = inst_40725);

(statearr_40775[(12)] = inst_40727);

return statearr_40775;
})();
var statearr_40776_40813 = state_40772__$1;
(statearr_40776_40813[(2)] = null);

(statearr_40776_40813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (1))){
var state_40772__$1 = state_40772;
var statearr_40777_40814 = state_40772__$1;
(statearr_40777_40814[(2)] = null);

(statearr_40777_40814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (4))){
var inst_40713 = (state_40772[(13)]);
var inst_40713__$1 = (state_40772[(2)]);
var inst_40714 = (inst_40713__$1 == null);
var state_40772__$1 = (function (){var statearr_40778 = state_40772;
(statearr_40778[(13)] = inst_40713__$1);

return statearr_40778;
})();
if(cljs.core.truth_(inst_40714)){
var statearr_40779_40815 = state_40772__$1;
(statearr_40779_40815[(1)] = (5));

} else {
var statearr_40780_40816 = state_40772__$1;
(statearr_40780_40816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (15))){
var state_40772__$1 = state_40772;
var statearr_40784_40817 = state_40772__$1;
(statearr_40784_40817[(2)] = null);

(statearr_40784_40817[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (21))){
var state_40772__$1 = state_40772;
var statearr_40785_40818 = state_40772__$1;
(statearr_40785_40818[(2)] = null);

(statearr_40785_40818[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (13))){
var inst_40724 = (state_40772[(9)]);
var inst_40726 = (state_40772[(10)]);
var inst_40725 = (state_40772[(11)]);
var inst_40727 = (state_40772[(12)]);
var inst_40734 = (state_40772[(2)]);
var inst_40735 = (inst_40727 + (1));
var tmp40781 = inst_40724;
var tmp40782 = inst_40726;
var tmp40783 = inst_40725;
var inst_40724__$1 = tmp40781;
var inst_40725__$1 = tmp40783;
var inst_40726__$1 = tmp40782;
var inst_40727__$1 = inst_40735;
var state_40772__$1 = (function (){var statearr_40786 = state_40772;
(statearr_40786[(14)] = inst_40734);

(statearr_40786[(9)] = inst_40724__$1);

(statearr_40786[(10)] = inst_40726__$1);

(statearr_40786[(11)] = inst_40725__$1);

(statearr_40786[(12)] = inst_40727__$1);

return statearr_40786;
})();
var statearr_40787_40819 = state_40772__$1;
(statearr_40787_40819[(2)] = null);

(statearr_40787_40819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (22))){
var state_40772__$1 = state_40772;
var statearr_40788_40820 = state_40772__$1;
(statearr_40788_40820[(2)] = null);

(statearr_40788_40820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (6))){
var inst_40713 = (state_40772[(13)]);
var inst_40722 = f.call(null,inst_40713);
var inst_40723 = cljs.core.seq.call(null,inst_40722);
var inst_40724 = inst_40723;
var inst_40725 = null;
var inst_40726 = (0);
var inst_40727 = (0);
var state_40772__$1 = (function (){var statearr_40789 = state_40772;
(statearr_40789[(9)] = inst_40724);

(statearr_40789[(10)] = inst_40726);

(statearr_40789[(11)] = inst_40725);

(statearr_40789[(12)] = inst_40727);

return statearr_40789;
})();
var statearr_40790_40821 = state_40772__$1;
(statearr_40790_40821[(2)] = null);

(statearr_40790_40821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (17))){
var inst_40738 = (state_40772[(7)]);
var inst_40742 = cljs.core.chunk_first.call(null,inst_40738);
var inst_40743 = cljs.core.chunk_rest.call(null,inst_40738);
var inst_40744 = cljs.core.count.call(null,inst_40742);
var inst_40724 = inst_40743;
var inst_40725 = inst_40742;
var inst_40726 = inst_40744;
var inst_40727 = (0);
var state_40772__$1 = (function (){var statearr_40791 = state_40772;
(statearr_40791[(9)] = inst_40724);

(statearr_40791[(10)] = inst_40726);

(statearr_40791[(11)] = inst_40725);

(statearr_40791[(12)] = inst_40727);

return statearr_40791;
})();
var statearr_40792_40822 = state_40772__$1;
(statearr_40792_40822[(2)] = null);

(statearr_40792_40822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (3))){
var inst_40770 = (state_40772[(2)]);
var state_40772__$1 = state_40772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40772__$1,inst_40770);
} else {
if((state_val_40773 === (12))){
var inst_40758 = (state_40772[(2)]);
var state_40772__$1 = state_40772;
var statearr_40793_40823 = state_40772__$1;
(statearr_40793_40823[(2)] = inst_40758);

(statearr_40793_40823[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (2))){
var state_40772__$1 = state_40772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40772__$1,(4),in$);
} else {
if((state_val_40773 === (23))){
var inst_40766 = (state_40772[(2)]);
var state_40772__$1 = state_40772;
var statearr_40794_40824 = state_40772__$1;
(statearr_40794_40824[(2)] = inst_40766);

(statearr_40794_40824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (19))){
var inst_40753 = (state_40772[(2)]);
var state_40772__$1 = state_40772;
var statearr_40795_40825 = state_40772__$1;
(statearr_40795_40825[(2)] = inst_40753);

(statearr_40795_40825[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (11))){
var inst_40724 = (state_40772[(9)]);
var inst_40738 = (state_40772[(7)]);
var inst_40738__$1 = cljs.core.seq.call(null,inst_40724);
var state_40772__$1 = (function (){var statearr_40796 = state_40772;
(statearr_40796[(7)] = inst_40738__$1);

return statearr_40796;
})();
if(inst_40738__$1){
var statearr_40797_40826 = state_40772__$1;
(statearr_40797_40826[(1)] = (14));

} else {
var statearr_40798_40827 = state_40772__$1;
(statearr_40798_40827[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (9))){
var inst_40760 = (state_40772[(2)]);
var inst_40761 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40772__$1 = (function (){var statearr_40799 = state_40772;
(statearr_40799[(15)] = inst_40760);

return statearr_40799;
})();
if(cljs.core.truth_(inst_40761)){
var statearr_40800_40828 = state_40772__$1;
(statearr_40800_40828[(1)] = (21));

} else {
var statearr_40801_40829 = state_40772__$1;
(statearr_40801_40829[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (5))){
var inst_40716 = cljs.core.async.close_BANG_.call(null,out);
var state_40772__$1 = state_40772;
var statearr_40802_40830 = state_40772__$1;
(statearr_40802_40830[(2)] = inst_40716);

(statearr_40802_40830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (14))){
var inst_40738 = (state_40772[(7)]);
var inst_40740 = cljs.core.chunked_seq_QMARK_.call(null,inst_40738);
var state_40772__$1 = state_40772;
if(inst_40740){
var statearr_40803_40831 = state_40772__$1;
(statearr_40803_40831[(1)] = (17));

} else {
var statearr_40804_40832 = state_40772__$1;
(statearr_40804_40832[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (16))){
var inst_40756 = (state_40772[(2)]);
var state_40772__$1 = state_40772;
var statearr_40805_40833 = state_40772__$1;
(statearr_40805_40833[(2)] = inst_40756);

(statearr_40805_40833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (10))){
var inst_40725 = (state_40772[(11)]);
var inst_40727 = (state_40772[(12)]);
var inst_40732 = cljs.core._nth.call(null,inst_40725,inst_40727);
var state_40772__$1 = state_40772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40772__$1,(13),out,inst_40732);
} else {
if((state_val_40773 === (18))){
var inst_40738 = (state_40772[(7)]);
var inst_40747 = cljs.core.first.call(null,inst_40738);
var state_40772__$1 = state_40772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40772__$1,(20),out,inst_40747);
} else {
if((state_val_40773 === (8))){
var inst_40726 = (state_40772[(10)]);
var inst_40727 = (state_40772[(12)]);
var inst_40729 = (inst_40727 < inst_40726);
var inst_40730 = inst_40729;
var state_40772__$1 = state_40772;
if(cljs.core.truth_(inst_40730)){
var statearr_40806_40834 = state_40772__$1;
(statearr_40806_40834[(1)] = (10));

} else {
var statearr_40807_40835 = state_40772__$1;
(statearr_40807_40835[(1)] = (11));

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
}
}
}
}
}
}
});})(c__39204__auto__))
;
return ((function (switch__39116__auto__,c__39204__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39117__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39117__auto____0 = (function (){
var statearr_40808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40808[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39117__auto__);

(statearr_40808[(1)] = (1));

return statearr_40808;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39117__auto____1 = (function (state_40772){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_40772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e40809){if((e40809 instanceof Object)){
var ex__39120__auto__ = e40809;
var statearr_40810_40836 = state_40772;
(statearr_40810_40836[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40837 = state_40772;
state_40772 = G__40837;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39117__auto__ = function(state_40772){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39117__auto____1.call(this,state_40772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39117__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39117__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto__))
})();
var state__39206__auto__ = (function (){var statearr_40811 = f__39205__auto__.call(null);
(statearr_40811[(6)] = c__39204__auto__);

return statearr_40811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto__))
);

return c__39204__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40839 = arguments.length;
switch (G__40839) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40842 = arguments.length;
switch (G__40842) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40845 = arguments.length;
switch (G__40845) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39204__auto___40892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___40892,out){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___40892,out){
return (function (state_40869){
var state_val_40870 = (state_40869[(1)]);
if((state_val_40870 === (7))){
var inst_40864 = (state_40869[(2)]);
var state_40869__$1 = state_40869;
var statearr_40871_40893 = state_40869__$1;
(statearr_40871_40893[(2)] = inst_40864);

(statearr_40871_40893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40870 === (1))){
var inst_40846 = null;
var state_40869__$1 = (function (){var statearr_40872 = state_40869;
(statearr_40872[(7)] = inst_40846);

return statearr_40872;
})();
var statearr_40873_40894 = state_40869__$1;
(statearr_40873_40894[(2)] = null);

(statearr_40873_40894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40870 === (4))){
var inst_40849 = (state_40869[(8)]);
var inst_40849__$1 = (state_40869[(2)]);
var inst_40850 = (inst_40849__$1 == null);
var inst_40851 = cljs.core.not.call(null,inst_40850);
var state_40869__$1 = (function (){var statearr_40874 = state_40869;
(statearr_40874[(8)] = inst_40849__$1);

return statearr_40874;
})();
if(inst_40851){
var statearr_40875_40895 = state_40869__$1;
(statearr_40875_40895[(1)] = (5));

} else {
var statearr_40876_40896 = state_40869__$1;
(statearr_40876_40896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40870 === (6))){
var state_40869__$1 = state_40869;
var statearr_40877_40897 = state_40869__$1;
(statearr_40877_40897[(2)] = null);

(statearr_40877_40897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40870 === (3))){
var inst_40866 = (state_40869[(2)]);
var inst_40867 = cljs.core.async.close_BANG_.call(null,out);
var state_40869__$1 = (function (){var statearr_40878 = state_40869;
(statearr_40878[(9)] = inst_40866);

return statearr_40878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40869__$1,inst_40867);
} else {
if((state_val_40870 === (2))){
var state_40869__$1 = state_40869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40869__$1,(4),ch);
} else {
if((state_val_40870 === (11))){
var inst_40849 = (state_40869[(8)]);
var inst_40858 = (state_40869[(2)]);
var inst_40846 = inst_40849;
var state_40869__$1 = (function (){var statearr_40879 = state_40869;
(statearr_40879[(10)] = inst_40858);

(statearr_40879[(7)] = inst_40846);

return statearr_40879;
})();
var statearr_40880_40898 = state_40869__$1;
(statearr_40880_40898[(2)] = null);

(statearr_40880_40898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40870 === (9))){
var inst_40849 = (state_40869[(8)]);
var state_40869__$1 = state_40869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40869__$1,(11),out,inst_40849);
} else {
if((state_val_40870 === (5))){
var inst_40849 = (state_40869[(8)]);
var inst_40846 = (state_40869[(7)]);
var inst_40853 = cljs.core._EQ_.call(null,inst_40849,inst_40846);
var state_40869__$1 = state_40869;
if(inst_40853){
var statearr_40882_40899 = state_40869__$1;
(statearr_40882_40899[(1)] = (8));

} else {
var statearr_40883_40900 = state_40869__$1;
(statearr_40883_40900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40870 === (10))){
var inst_40861 = (state_40869[(2)]);
var state_40869__$1 = state_40869;
var statearr_40884_40901 = state_40869__$1;
(statearr_40884_40901[(2)] = inst_40861);

(statearr_40884_40901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40870 === (8))){
var inst_40846 = (state_40869[(7)]);
var tmp40881 = inst_40846;
var inst_40846__$1 = tmp40881;
var state_40869__$1 = (function (){var statearr_40885 = state_40869;
(statearr_40885[(7)] = inst_40846__$1);

return statearr_40885;
})();
var statearr_40886_40902 = state_40869__$1;
(statearr_40886_40902[(2)] = null);

(statearr_40886_40902[(1)] = (2));


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
});})(c__39204__auto___40892,out))
;
return ((function (switch__39116__auto__,c__39204__auto___40892,out){
return (function() {
var cljs$core$async$state_machine__39117__auto__ = null;
var cljs$core$async$state_machine__39117__auto____0 = (function (){
var statearr_40887 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40887[(0)] = cljs$core$async$state_machine__39117__auto__);

(statearr_40887[(1)] = (1));

return statearr_40887;
});
var cljs$core$async$state_machine__39117__auto____1 = (function (state_40869){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_40869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e40888){if((e40888 instanceof Object)){
var ex__39120__auto__ = e40888;
var statearr_40889_40903 = state_40869;
(statearr_40889_40903[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40904 = state_40869;
state_40869 = G__40904;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$state_machine__39117__auto__ = function(state_40869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39117__auto____1.call(this,state_40869);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39117__auto____0;
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39117__auto____1;
return cljs$core$async$state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___40892,out))
})();
var state__39206__auto__ = (function (){var statearr_40890 = f__39205__auto__.call(null);
(statearr_40890[(6)] = c__39204__auto___40892);

return statearr_40890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___40892,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40906 = arguments.length;
switch (G__40906) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39204__auto___40972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___40972,out){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___40972,out){
return (function (state_40944){
var state_val_40945 = (state_40944[(1)]);
if((state_val_40945 === (7))){
var inst_40940 = (state_40944[(2)]);
var state_40944__$1 = state_40944;
var statearr_40946_40973 = state_40944__$1;
(statearr_40946_40973[(2)] = inst_40940);

(statearr_40946_40973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40945 === (1))){
var inst_40907 = (new Array(n));
var inst_40908 = inst_40907;
var inst_40909 = (0);
var state_40944__$1 = (function (){var statearr_40947 = state_40944;
(statearr_40947[(7)] = inst_40909);

(statearr_40947[(8)] = inst_40908);

return statearr_40947;
})();
var statearr_40948_40974 = state_40944__$1;
(statearr_40948_40974[(2)] = null);

(statearr_40948_40974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40945 === (4))){
var inst_40912 = (state_40944[(9)]);
var inst_40912__$1 = (state_40944[(2)]);
var inst_40913 = (inst_40912__$1 == null);
var inst_40914 = cljs.core.not.call(null,inst_40913);
var state_40944__$1 = (function (){var statearr_40949 = state_40944;
(statearr_40949[(9)] = inst_40912__$1);

return statearr_40949;
})();
if(inst_40914){
var statearr_40950_40975 = state_40944__$1;
(statearr_40950_40975[(1)] = (5));

} else {
var statearr_40951_40976 = state_40944__$1;
(statearr_40951_40976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40945 === (15))){
var inst_40934 = (state_40944[(2)]);
var state_40944__$1 = state_40944;
var statearr_40952_40977 = state_40944__$1;
(statearr_40952_40977[(2)] = inst_40934);

(statearr_40952_40977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40945 === (13))){
var state_40944__$1 = state_40944;
var statearr_40953_40978 = state_40944__$1;
(statearr_40953_40978[(2)] = null);

(statearr_40953_40978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40945 === (6))){
var inst_40909 = (state_40944[(7)]);
var inst_40930 = (inst_40909 > (0));
var state_40944__$1 = state_40944;
if(cljs.core.truth_(inst_40930)){
var statearr_40954_40979 = state_40944__$1;
(statearr_40954_40979[(1)] = (12));

} else {
var statearr_40955_40980 = state_40944__$1;
(statearr_40955_40980[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40945 === (3))){
var inst_40942 = (state_40944[(2)]);
var state_40944__$1 = state_40944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40944__$1,inst_40942);
} else {
if((state_val_40945 === (12))){
var inst_40908 = (state_40944[(8)]);
var inst_40932 = cljs.core.vec.call(null,inst_40908);
var state_40944__$1 = state_40944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40944__$1,(15),out,inst_40932);
} else {
if((state_val_40945 === (2))){
var state_40944__$1 = state_40944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40944__$1,(4),ch);
} else {
if((state_val_40945 === (11))){
var inst_40924 = (state_40944[(2)]);
var inst_40925 = (new Array(n));
var inst_40908 = inst_40925;
var inst_40909 = (0);
var state_40944__$1 = (function (){var statearr_40956 = state_40944;
(statearr_40956[(10)] = inst_40924);

(statearr_40956[(7)] = inst_40909);

(statearr_40956[(8)] = inst_40908);

return statearr_40956;
})();
var statearr_40957_40981 = state_40944__$1;
(statearr_40957_40981[(2)] = null);

(statearr_40957_40981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40945 === (9))){
var inst_40908 = (state_40944[(8)]);
var inst_40922 = cljs.core.vec.call(null,inst_40908);
var state_40944__$1 = state_40944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40944__$1,(11),out,inst_40922);
} else {
if((state_val_40945 === (5))){
var inst_40917 = (state_40944[(11)]);
var inst_40909 = (state_40944[(7)]);
var inst_40908 = (state_40944[(8)]);
var inst_40912 = (state_40944[(9)]);
var inst_40916 = (inst_40908[inst_40909] = inst_40912);
var inst_40917__$1 = (inst_40909 + (1));
var inst_40918 = (inst_40917__$1 < n);
var state_40944__$1 = (function (){var statearr_40958 = state_40944;
(statearr_40958[(11)] = inst_40917__$1);

(statearr_40958[(12)] = inst_40916);

return statearr_40958;
})();
if(cljs.core.truth_(inst_40918)){
var statearr_40959_40982 = state_40944__$1;
(statearr_40959_40982[(1)] = (8));

} else {
var statearr_40960_40983 = state_40944__$1;
(statearr_40960_40983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40945 === (14))){
var inst_40937 = (state_40944[(2)]);
var inst_40938 = cljs.core.async.close_BANG_.call(null,out);
var state_40944__$1 = (function (){var statearr_40962 = state_40944;
(statearr_40962[(13)] = inst_40937);

return statearr_40962;
})();
var statearr_40963_40984 = state_40944__$1;
(statearr_40963_40984[(2)] = inst_40938);

(statearr_40963_40984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40945 === (10))){
var inst_40928 = (state_40944[(2)]);
var state_40944__$1 = state_40944;
var statearr_40964_40985 = state_40944__$1;
(statearr_40964_40985[(2)] = inst_40928);

(statearr_40964_40985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40945 === (8))){
var inst_40917 = (state_40944[(11)]);
var inst_40908 = (state_40944[(8)]);
var tmp40961 = inst_40908;
var inst_40908__$1 = tmp40961;
var inst_40909 = inst_40917;
var state_40944__$1 = (function (){var statearr_40965 = state_40944;
(statearr_40965[(7)] = inst_40909);

(statearr_40965[(8)] = inst_40908__$1);

return statearr_40965;
})();
var statearr_40966_40986 = state_40944__$1;
(statearr_40966_40986[(2)] = null);

(statearr_40966_40986[(1)] = (2));


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
});})(c__39204__auto___40972,out))
;
return ((function (switch__39116__auto__,c__39204__auto___40972,out){
return (function() {
var cljs$core$async$state_machine__39117__auto__ = null;
var cljs$core$async$state_machine__39117__auto____0 = (function (){
var statearr_40967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40967[(0)] = cljs$core$async$state_machine__39117__auto__);

(statearr_40967[(1)] = (1));

return statearr_40967;
});
var cljs$core$async$state_machine__39117__auto____1 = (function (state_40944){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_40944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e40968){if((e40968 instanceof Object)){
var ex__39120__auto__ = e40968;
var statearr_40969_40987 = state_40944;
(statearr_40969_40987[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40988 = state_40944;
state_40944 = G__40988;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$state_machine__39117__auto__ = function(state_40944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39117__auto____1.call(this,state_40944);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39117__auto____0;
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39117__auto____1;
return cljs$core$async$state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___40972,out))
})();
var state__39206__auto__ = (function (){var statearr_40970 = f__39205__auto__.call(null);
(statearr_40970[(6)] = c__39204__auto___40972);

return statearr_40970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___40972,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40990 = arguments.length;
switch (G__40990) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39204__auto___41060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39204__auto___41060,out){
return (function (){
var f__39205__auto__ = (function (){var switch__39116__auto__ = ((function (c__39204__auto___41060,out){
return (function (state_41032){
var state_val_41033 = (state_41032[(1)]);
if((state_val_41033 === (7))){
var inst_41028 = (state_41032[(2)]);
var state_41032__$1 = state_41032;
var statearr_41034_41061 = state_41032__$1;
(statearr_41034_41061[(2)] = inst_41028);

(statearr_41034_41061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41033 === (1))){
var inst_40991 = [];
var inst_40992 = inst_40991;
var inst_40993 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41032__$1 = (function (){var statearr_41035 = state_41032;
(statearr_41035[(7)] = inst_40993);

(statearr_41035[(8)] = inst_40992);

return statearr_41035;
})();
var statearr_41036_41062 = state_41032__$1;
(statearr_41036_41062[(2)] = null);

(statearr_41036_41062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41033 === (4))){
var inst_40996 = (state_41032[(9)]);
var inst_40996__$1 = (state_41032[(2)]);
var inst_40997 = (inst_40996__$1 == null);
var inst_40998 = cljs.core.not.call(null,inst_40997);
var state_41032__$1 = (function (){var statearr_41037 = state_41032;
(statearr_41037[(9)] = inst_40996__$1);

return statearr_41037;
})();
if(inst_40998){
var statearr_41038_41063 = state_41032__$1;
(statearr_41038_41063[(1)] = (5));

} else {
var statearr_41039_41064 = state_41032__$1;
(statearr_41039_41064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41033 === (15))){
var inst_41022 = (state_41032[(2)]);
var state_41032__$1 = state_41032;
var statearr_41040_41065 = state_41032__$1;
(statearr_41040_41065[(2)] = inst_41022);

(statearr_41040_41065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41033 === (13))){
var state_41032__$1 = state_41032;
var statearr_41041_41066 = state_41032__$1;
(statearr_41041_41066[(2)] = null);

(statearr_41041_41066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41033 === (6))){
var inst_40992 = (state_41032[(8)]);
var inst_41017 = inst_40992.length;
var inst_41018 = (inst_41017 > (0));
var state_41032__$1 = state_41032;
if(cljs.core.truth_(inst_41018)){
var statearr_41042_41067 = state_41032__$1;
(statearr_41042_41067[(1)] = (12));

} else {
var statearr_41043_41068 = state_41032__$1;
(statearr_41043_41068[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41033 === (3))){
var inst_41030 = (state_41032[(2)]);
var state_41032__$1 = state_41032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41032__$1,inst_41030);
} else {
if((state_val_41033 === (12))){
var inst_40992 = (state_41032[(8)]);
var inst_41020 = cljs.core.vec.call(null,inst_40992);
var state_41032__$1 = state_41032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41032__$1,(15),out,inst_41020);
} else {
if((state_val_41033 === (2))){
var state_41032__$1 = state_41032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41032__$1,(4),ch);
} else {
if((state_val_41033 === (11))){
var inst_41000 = (state_41032[(10)]);
var inst_40996 = (state_41032[(9)]);
var inst_41010 = (state_41032[(2)]);
var inst_41011 = [];
var inst_41012 = inst_41011.push(inst_40996);
var inst_40992 = inst_41011;
var inst_40993 = inst_41000;
var state_41032__$1 = (function (){var statearr_41044 = state_41032;
(statearr_41044[(11)] = inst_41012);

(statearr_41044[(12)] = inst_41010);

(statearr_41044[(7)] = inst_40993);

(statearr_41044[(8)] = inst_40992);

return statearr_41044;
})();
var statearr_41045_41069 = state_41032__$1;
(statearr_41045_41069[(2)] = null);

(statearr_41045_41069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41033 === (9))){
var inst_40992 = (state_41032[(8)]);
var inst_41008 = cljs.core.vec.call(null,inst_40992);
var state_41032__$1 = state_41032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41032__$1,(11),out,inst_41008);
} else {
if((state_val_41033 === (5))){
var inst_41000 = (state_41032[(10)]);
var inst_40996 = (state_41032[(9)]);
var inst_40993 = (state_41032[(7)]);
var inst_41000__$1 = f.call(null,inst_40996);
var inst_41001 = cljs.core._EQ_.call(null,inst_41000__$1,inst_40993);
var inst_41002 = cljs.core.keyword_identical_QMARK_.call(null,inst_40993,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41003 = (inst_41001) || (inst_41002);
var state_41032__$1 = (function (){var statearr_41046 = state_41032;
(statearr_41046[(10)] = inst_41000__$1);

return statearr_41046;
})();
if(cljs.core.truth_(inst_41003)){
var statearr_41047_41070 = state_41032__$1;
(statearr_41047_41070[(1)] = (8));

} else {
var statearr_41048_41071 = state_41032__$1;
(statearr_41048_41071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41033 === (14))){
var inst_41025 = (state_41032[(2)]);
var inst_41026 = cljs.core.async.close_BANG_.call(null,out);
var state_41032__$1 = (function (){var statearr_41050 = state_41032;
(statearr_41050[(13)] = inst_41025);

return statearr_41050;
})();
var statearr_41051_41072 = state_41032__$1;
(statearr_41051_41072[(2)] = inst_41026);

(statearr_41051_41072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41033 === (10))){
var inst_41015 = (state_41032[(2)]);
var state_41032__$1 = state_41032;
var statearr_41052_41073 = state_41032__$1;
(statearr_41052_41073[(2)] = inst_41015);

(statearr_41052_41073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41033 === (8))){
var inst_41000 = (state_41032[(10)]);
var inst_40996 = (state_41032[(9)]);
var inst_40992 = (state_41032[(8)]);
var inst_41005 = inst_40992.push(inst_40996);
var tmp41049 = inst_40992;
var inst_40992__$1 = tmp41049;
var inst_40993 = inst_41000;
var state_41032__$1 = (function (){var statearr_41053 = state_41032;
(statearr_41053[(14)] = inst_41005);

(statearr_41053[(7)] = inst_40993);

(statearr_41053[(8)] = inst_40992__$1);

return statearr_41053;
})();
var statearr_41054_41074 = state_41032__$1;
(statearr_41054_41074[(2)] = null);

(statearr_41054_41074[(1)] = (2));


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
});})(c__39204__auto___41060,out))
;
return ((function (switch__39116__auto__,c__39204__auto___41060,out){
return (function() {
var cljs$core$async$state_machine__39117__auto__ = null;
var cljs$core$async$state_machine__39117__auto____0 = (function (){
var statearr_41055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41055[(0)] = cljs$core$async$state_machine__39117__auto__);

(statearr_41055[(1)] = (1));

return statearr_41055;
});
var cljs$core$async$state_machine__39117__auto____1 = (function (state_41032){
while(true){
var ret_value__39118__auto__ = (function (){try{while(true){
var result__39119__auto__ = switch__39116__auto__.call(null,state_41032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39119__auto__;
}
break;
}
}catch (e41056){if((e41056 instanceof Object)){
var ex__39120__auto__ = e41056;
var statearr_41057_41075 = state_41032;
(statearr_41057_41075[(5)] = ex__39120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41076 = state_41032;
state_41032 = G__41076;
continue;
} else {
return ret_value__39118__auto__;
}
break;
}
});
cljs$core$async$state_machine__39117__auto__ = function(state_41032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39117__auto____1.call(this,state_41032);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39117__auto____0;
cljs$core$async$state_machine__39117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39117__auto____1;
return cljs$core$async$state_machine__39117__auto__;
})()
;})(switch__39116__auto__,c__39204__auto___41060,out))
})();
var state__39206__auto__ = (function (){var statearr_41058 = f__39205__auto__.call(null);
(statearr_41058[(6)] = c__39204__auto___41060);

return statearr_41058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39206__auto__);
});})(c__39204__auto___41060,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1517293982047
