(ns todomvc.db
  (:require
   [datascript.core :as d]
   [re-posh.core :refer [connect!]]))

(def schema
  {:db/ident {:db/unique :db.unique/identity}

   :tags/tag {:db/unique :db.unique/identity}

   :tags.template/type {:db/unique :db.unique/identity}

   :ui.add-action/tag {:db/unique :db.unique/identity}

   :nav/drawer-open?
   {:db/ident :nav/drawer-open?
    :db/unique :db.unique/identity
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}

   :nav/route-params
   {:db/ident :nav/route-params
    :db/isComponent true
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}

   :ui.add-action/tags
   {:db/ident :ui.add-action/tags
    :db/isComponent true
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many}

   :nav/action-id
   {:db/ident :nav/action-id
    :db/unique :db.unique/identity
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/one}

   :action/tags
   {:db/ident :action/tags
    :db/isComponent true
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many}

   :tags/template-types
   {:db/isComponent true
    :db/valueType :db.type/ref
    :db/cardinality :db.cardinality/many}})

(def initial-db
  [{:db/ident :nav/current-page :nav/page :nav.page/home}

   {:tags/tag :note
    :tags/template-types
    [{:tags.template/name :simple-note
      :tags.template/type :text-box}
     {:tags.template/name :simple-field
      :tags.template/type :text-field}]}

   {:tags/tag :task
    :tags/template-types
    [{:tags.template/name :due-date
      :tags.template/type :date-picker}]}

   {:tags.template/type :text-field}

   {:tags.template/type :text-box}

   {:db/ident :ui.add-action/add-action
    :ui.add-action/action-name "Test"
    :ui.add-action/tags
    [{:ui.add-action/tag :task}
     {:ui.add-action/tag :note}]
    :tags.template/content
    {:simple-note "this is a cool \n note that i'm using for testing"
     :due-date "0"}}

   {:app/type :app.type/action
    :action/name "Learn Clojure a little bit"
    :action/tags
    [{:tags/tag :foo}
     {:tags/tag :note}]
    :tags.template/content
    {:simple-note "foo \n bar"}}

   {:app/type :app.type/action
    :action/tags
    [{:tags/tag :task}
     {:tags/tag :note}]
    :tags.template/content
    {:simple-note "This is a \n cool note"
     :due-date (.getTime (js/Date.))}
    :action/name "Have a coffee"}])

(defonce conn (d/create-conn schema))
(connect! conn)
