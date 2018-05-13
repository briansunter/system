(ns todomvc.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [todomvc.events]
            [todomvc.subs]
            [todomvc.db :as db]
            #_[re-frisk.core :refer [enable-re-frisk! enable-frisk! add-data] :refer-macros [def-view]]
            [todomvc.dfs.sync :as sync]
            [todomvc.views :as views]
            [todomvc.routes :as routes]
            [todomvc.config :as config]))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (re-frame/dispatch-sync [:initialize-db])
  (dev-setup)
  (enable-console-print!)
  (mount-root)
  (routes/app-routes)
  (sync/datoms!))
