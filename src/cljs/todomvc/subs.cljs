(ns todomvc.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]
            [re-posh.core :as re-posh]))

(re-posh/reg-query-sub
 :create-todo-form/id
 '[ :find ?id .
   :where [?id :app/type :type/create-todo-form] ])

(re-posh/reg-pull-sub
 :create-todo-form
 '[*])

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
 :ui.nav.drawer/app-drawer-open
 '[:find ?n .
   :where [:db/ident :ui.nav.drawer/app-drawer-open] [_ :ui.nav.drawer/app-drawer-open ?n]])

(re-posh/reg-query-sub
 :nav/current-action
 '[:find [(pull ?c [*])]
   :where
   [?a :db/ident :nav/current-page]
   [?a :nav/route-params ?b]
   [?b :action-id ?c]])
