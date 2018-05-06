(ns todomvc.events
  (:require [re-frame.core :as re-frame]
            [re-posh.core :as re-posh]
            [datascript.core :as d]
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

(re-posh/reg-event-ds
 :action/add-tag
 (fn [_ [_ action-id tag-name]]
   [{:db/id action-id :action/tags [{:tags/tag tag-name}]}]))

(re-posh/reg-event-ds
 :set-nav-drawer
 (fn [_ [_ is-open?]]
   (.log js/console "TOGGLE" is-open?)
   [{:db/ident :nav/drawer-open? :nav/is-drawer-open? is-open?}]))

(re-posh/reg-event-ds
 :action/remove-tag
 (fn [ds [_ tag-id ]]
     [[:db.fn/retractEntity tag-id]]))

(re-posh/reg-event-ds
 :tags.template/add-template
 (fn [_ [_ name type tag]]
   [
    {
     :app/type :tags/template
     :tags/tag tag
     :tags.template/name name
     :tags.template/type type
     }
     ]))

;; (d/q  '[:find [(pull ?e [*]) ... ]
;;         :in $ ?action-id
;;         :where [?action-id :action/tags ?e]]
;;       @db/conn 356 )

  ;; (d/q  '[:find ?n .
  ;;                            :in $ ?action-id ?tag-name
  ;;                            :where [?action-id :action/tags ?n]
  ;;                            [?n :tags/tag ?tag-name]
  ;;                            ]
  ;;                          @db/conn 6 :foo)
