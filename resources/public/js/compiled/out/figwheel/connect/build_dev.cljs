(ns figwheel.connect.build-dev (:require [todomvc.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/todomvc.core.mount-root (apply js/todomvc.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'todomvc.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

