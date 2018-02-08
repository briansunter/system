(ns todomvc.routes
  (:import goog.History)
  (:require
   [goog.events :as events]
   [accountant.core :as accountant]
   [goog.history.EventType :as EventType]
   [re-frame.core :as re-frame]
   [todomvc.utils :refer [parse-path]]
   [bidi.bidi :as bidi]))

(def action-routes
  {"" :actions
   "/" {"" :actions
        "add" :add-action
        [:action-id ""] :view-action
        [:action-id "/"] :view-action
        true :not-found}
   true :not-found})

(def routes
  ["/" {"" :home
        "feed"  :feed
        "actions" action-routes
        true :not-found}
   true :not-found])

(def path-for-page
  (partial bidi/path-for routes))

(defn set-page!
  [match]
  (let [current-page (:handler match)
        route-params (:route-params match)
        query-params (:query-params match)]
    (re-frame/dispatch [:nav/set-current-page current-page])))

(defn app-routes []
  (accountant/configure-navigation!
   {:nav-handler (fn [p]
                   (let [{:keys [path params]} (parse-path p)
                         match (bidi/match-route routes path)]
                     (set-page! (merge {:query-params params} match))))
    :path-exists? (fn [path]
                    (boolean (bidi/match-route routes path)))})
  (accountant/dispatch-current!))