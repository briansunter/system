(ns todomvc.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]
            [datascript.core    :as d]
            [re-posh.core :as re-posh]))

(re-posh/reg-query-sub
 :task-ids
 '[ :find  [?tid ...]
   :where [?tid :app/type :type/task] ])

(re-posh/reg-pull-sub
 :task
 '[*])

(re-posh/reg-query-sub
 :nav/current-page
 '[:find ?n .
   :where [:db/ident :nav/current-page] [_ :nav/page ?n]])

(re-posh/reg-pull-sub
 :ui.add-action/add-action
 '[:ui.add-action/action-name :ui.add-action/tags])

(re-posh/reg-query-sub
 :ui.add-action/tags
 '[:find [?n ...]
   :where [_ :ui.add-action/tag ?n] ])

(re-posh/reg-query-sub
 :ui.add-action/all-tags
 '[:find [?n ...]
   :where [_ :tags/tag ?n] ])

(re-posh/reg-query-sub
 :nav/drawer-open?
 '[:find ?n .
   :where [:db/ident :nav/drawer-open?] [_ :nav/is-drawer-open? ?n]])

(re-posh/reg-query-sub
 :ui.view-action/current-action-id
 '[:find ?c .
   :where
   [?a :db/ident :nav/current-page]
   [?a :nav/route-params ?b]
   [?b :action-id ?c]])

(re-posh/reg-query-sub
 :ui.view-action/current-tag
 '[:find ?c .
   :where
   [?a :db/ident :nav/current-page]
   [?a :nav/route-params ?b]
   [?b :tag ?c]])

(re-posh/reg-pull-sub
 :ui.view-action/current-action
 '[*])

(re-posh/reg-query-sub
 :tags.template/template-types
 '[:find [?n ...]
   :where [_ :tags.template/type ?n]])

(re-posh/reg-query-sub
 :tags.template/tag-templates
 '[:find ?name ?type
   :in $ ?tag
   :where
   [?n :tags/tag ?tag]
   [?n :tags/template-types ?types]
   [?types :tags.template/name ?name]
   [?types :tags.template/type ?type]])

(re-posh/reg-pull-sub
 :db
 '[*])
