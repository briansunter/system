(ns todomvc.events
  (:require [re-frame.core :as re-frame]
            [re-posh.core :as re-posh]
            [todomvc.db :as db]))

(re-posh/reg-event-ds
 :initialize-db
 (fn [_ _]
   db/initial-db))

(re-posh/reg-event-ds
 :nav/set-current-page
 (fn [_ [_ page params]]
   [(merge {:db/ident :nav/current-page
            :nav/page page}
           (when params {:nav/route-params params}))]))

(re-posh/reg-event-ds
 :ui.add-action/update-name
 (fn [_ [_ name]]
   [[:db/add [:db/ident :ui.add-action/add-action] :ui.add-action/action-name name]]))

(re-posh/reg-event-ds
 :ui.add-action/add-tag
 (fn [_ [_ name]]
   [{:db/ident :ui.add-action/add-action :ui.add-action/tags [{:ui.add-action/tag name}]}]))

(re-posh/reg-event-ds
 :ui.add-action/remove-tag
 (fn [_ [_ name]]
   [[:db.fn/retractEntity [:ui.add-action/tag name]]]))

(re-posh/reg-event-ds
 :ui.add-action/add-action
 (fn [_ [_ name tags]]
   [{
     :action/name name
     :action/tags (map (fn [{:keys [tag]}] {:tags/tag tag}) tags)
     :app/type :type/task} ]))

(re-posh/reg-event-ds
 :ui.add-action/save-action
 (fn [_ [_ name tags]]
   [{
     :action/name name
     :action/tags (map (fn [x] {:tags/tag (:ui.add-action/tag x)}) tags)
     :app/type :type/task}
    {:db/ident :ui.add-action/add-action :ui.add-action/action-name "" :ui.add-action/tags []}]))

(re-posh/reg-event-ds
 :ui.add-action/add-action
 (fn [_ [_ name tags]]
   [{
     :action/name name
     :action/tags (map (fn [{:keys [tag]}] {:tags/tag tag}) tags)
     :app/type :type/task} ]))

(re-posh/reg-event-ds
 :action/update-name
 (fn [_ [_ id name]]
   [{:db/id id
     :action/name name}]))
