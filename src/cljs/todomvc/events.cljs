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
           (when params {:nav/route-params params}))
    {:db/ident :nav/drawer-open? :nav/is-drawer-open? false}]))

(re-posh/reg-event-ds
 :ui.add-action/update-name
 (fn [_ [_ name]]
   [{:db/ident :ui.add-action/add-action :action/action-name name}]))

(re-posh/reg-event-ds
 :ui.add-action/add-tag
 (fn [_ [_ name]]
   [{:db/ident :ui.add-action/add-action :ui.add-action/tags [{:ui.add-action/tag name}]}]))

(re-posh/reg-event-ds
 :ui.add-action/remove-tag
 (fn [_ [_ name]]
   [[:db.fn/retractEntity [:ui.add-action/tag name]]]))

(re-posh/reg-event-ds
 :ui.add-action/save-action
 (fn [_ [_ name tags template-content]]
   [{:action/action-name name
     :tags.template/content template-content
     :action/tags (map (fn [x] {:tags/tag (:ui.add-action/tag x)}) tags)
     :app/type :app.type/action}
    {:db/ident :ui.add-action/add-action :action/action-name "" :ui.add-action/tags []}]))

(re-posh/reg-event-ds
 :action/update-name
 (fn [_ [_ id name]]
   [{:db/id id
     :action/action-name name}]))

(re-posh/reg-event-ds
 :action/add-tag
 (fn [_ [_ action-id tag-name]]
   [{:db/id action-id :action/tags [{:tags/tag tag-name}]}]))

(re-posh/reg-event-ds
 :action/remove-tag
 (fn [ds [_ tag-id ]]
   [[:db.fn/retractEntity tag-id]]))

(re-posh/reg-event-ds
 :set-nav-drawer
 (fn [_ [_ is-open?]]
   [{:db/ident :nav/drawer-open? :nav/is-drawer-open? is-open?}]))

(re-posh/reg-event-ds
 :tags.template/add-template
 (fn [_ [_ name type tag]]
   [{:tags/tag tag
     :tags/template-types [{:tags.template/name name
                            :tags.template/type type}]}]))

(re-posh/reg-event-ds
 :tags.template/update-add-action-template-content
 (fn [_ [_ template-name content]]
   [{:db/ident :ui.add-action/add-action
     :tags.template/content {template-name content}}]))

(re-posh/reg-event-ds
 :tags.template/update-action-template-content
 (fn [_ [_ action-id template-name content]]
   [{:db/id action-id
     :tags.template/content {template-name content}}]))
