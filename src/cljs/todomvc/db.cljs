(ns todomvc.db
  (:require
   [datascript.core    :as d]
   [re-posh.core       :refer [connect!]]))


(def schema {:db/ident {:db/unique :db.unique/identity}
             :tags/tag {:db/unique :db.unique/identity}
             :ui.add-action/tag {:db/unique :db.unique/identity}

             :ui.add-action/tags {:db/ident :ui.add-action/tags
                                  :db/isComponent true
                                  :db/valueType :db.type/ref
                                  :db/cardinality :db.cardinality/many}

             :action/tags {:db/ident :action/tags
                           :db/valueType :db.type/ref
                           :db/cardinality :db.cardinality/many}})

(def initial-db [
                 {:db/ident :nav/current-page :nav/page :nav.page/home}
                 ;; {:tags/name :tags.name/brian}
                 {:db/ident :ui.add-action/add-action :ui.add-action/action-name "Test"
                  :ui.add-action/tags [{:ui.add-action/tag :foo}
                                       {:ui.add-action/tag :bar}]}
                 {:tags/tag :fee}
                 { :db/id                        -1
                  :app/type                     :type/create-todo-form
                  :create-todo-form/title        ""
                  :create-todo-form/description  "" }
                 { :db/id            -2
                  :app/type         :type/task
                  :action/name "Learn Clojure a little bit"
                  :task/description "Just learn it"
                  :action/tags [{:tags/tag :foo :app/type :type/tag} {:tags/tag :bar}]
                  :task/done?       false }
                 { :db/id            -3
                  :app/type         :type/task
                  :action/name "Have a coffe"
                  :task/description "Just relax"
                  :task/done?       false } ])


;; specifying ident on an entity
;; (d/transact! conn [{:app/type :nav/current-page :nav/page :nav.page/home}])

;; looking up entity by ident value
;; (d/entity @conn [:app/type :nav/current-page])


#_(d/q '[:find ?n .
         :where [:app/type :nav/current-page][_ :nav/page ?n]]
       @conn)

(defonce conn (d/create-conn schema))
(connect! conn)


;; (d/transact! conn [{:db/id [:db/ident :nav/current-page] :nav/page :nav.page/tags}])
;; (d/transact! conn initial-db)



;; (d/transact! conn [[:db/add 1 :app/type "current-page"]])

#_(d/q '[ :find ?a ?v
         :where [[:app/type :nav/current-page] ?a ?v]]
       @conn)

#_(d/q
   '[ :find  [?tid ...]
     :where [?tid :app/type :type/task] ]
   @conn
   )

;; (d/q '[:find [?n ...]
;;        :where [:db/ident :ui.add-action/tags] [_ :ui.add-action/tags ?n]]
;;      @conn)

;; (d/pull @conn '[:nav/page] [:db/ident :nav/current-page])

;; (d/q
;;  '[:find ?n .
;;    :where
;;    [:db/ident :nav/current-page]]
;;  @(d/conn-from-datoms initial-db schema)
;;  )

;; (d/q
;;  '[:find [?n ...]
;;    :where
;;    [::]


;;    ])

(d/q
 '[:find [?n ...]
   :where [_ :tags/tag ?n] ] @conn)

;; (d/pull @conn '[:ui.add-action/action-name] [:db/ident :ui.add-action/action-name])
