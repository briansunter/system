(ns todomvc.db
  (:require
   [datascript.core    :as d]
   [re-posh.core       :refer [connect!]]))

(def schema {:db/ident {:db/unique :db.unique/identity}
             :tags/tag {:db/unique :db.unique/identity}
             ;; :tags.template/type {:db/unique :db.unique/identity}
             :ui.add-action/tag {:db/unique :db.unique/identity}
             :nav/drawer-open?    {:db/ident :nav/drawer-open?
                                   :db/unique :db.unique/identity
                                   :db/valueType :db.type/ref
                                   :db/cardinality :db.cardinality/one}

             :nav/route-params {:db/ident :nav/route-params
                                :db/isComponent true
                                :db/valueType :db.type/ref
                                :db/cardinality :db.cardinality/one}

             :ui.add-action/tags {:db/ident :ui.add-action/tags
                                  :db/isComponent true
                                  :db/valueType :db.type/ref
                                  :db/cardinality :db.cardinality/many}

             :action-id          {:db/ident :action-id
                                  :db/unique :db.unique/identity
                                  :db/valueType :db.type/ref
                                  :db/cardinality :db.cardinality/one}

             :action/tags {:db/ident :action/tags
                           :db/isComponent true
                           :db/valueType :db.type/ref
                           :db/cardinality :db.cardinality/many}

             :tags/template-types {:db/isComponent true
                                   :db/valueType :db.type/ref
                                   :db/cardinality :db.cardinality/many}

             })

(def initial-db [
                 {:db/ident :nav/current-page :nav/page :nav.page/home}
                 {:tags/tag :note
                  :tags/template-types [{
                                         :tags.template/name :simple-note
                                         :tags.template/type :text-box
                                         }
                                        {
                                         :tags.template/name :simple-field
                                         :tags.template/type :text-field
                                         }
                                        ]}

                 {:tags/tag :task
                  :tags/template-types [
                                        {
                                         :tags.template/name :due-date
                                         :tags.template/type :date-picker
                                         }
                                        ]}

                 ;; {:tags.template/type :text-field}
                 ;; {:tags.template/type :text-box}

                 {:db/ident :ui.add-action/add-action :ui.add-action/action-name "Test"
                  :ui.add-action/tags [{:ui.add-action/tag :foo}
                                       {:ui.add-action/tag :bar}]}
                 { :db/id            -2
                  :app/type         :type/task
                  :action/name "Learn Clojure a little bit"
                  :task/description "Just learn it"
                  :action/tags [{:tags/tag :foo} {:tags/tag :note}]
                  :tags.template/content {:simple-note "foo \n bar"}
                  :task/done?       false }
                 { :db/id            -3
                  :app/type         :type/task
                  :action/tags [{:tags/tag :task} {:tags/tag :note}]
                  :tags.template/content {:simple-note "This is a \n cool note"
                                          :due-date (.getTime (js/Date.))}
                  :action/name "Have a coffee"
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

;; (d/q
;;  '[:find [(pull ?c [*])]
;;    :where
;;    [?a :db/ident :nav/current-page]
;;    [?a :nav/route-params ?b]
;;    [?b :action-id ?c]
;;    ]  @conn)

;; (d/q
;;  '[:find ?n
;;    :where
;;    [?a :db/ident :nav/current-page]
;;    [?a :nav/route-params ?b]
;;    [?b :action-id ?c]
;;    ]  @conn)

;; (d/q
;;  '[:find ?n
;;    :where
;;    [416 :db/ident :nav/current-page]
;;    [?a :nav/route-params ?b]
;;    [?b :action-id ?c]
;;    ]  @conn)

;; (defn parse-int
;;   [s]
;;   (js/parseInt s))

;; (d/q
;;  '[:find ?e
;;    :where
;;    [_ :action-id ?e]
;;    ]  @conn)

;; (d/pull @conn '[*] 10)

;; (d/pull @conn '[:ui.add-action/action-name] [:db/ident :ui.add-action/action-name])

;; #_(d/q '[:find [?n ...]
;;    :where [_ :tags/tag ?n] ] @conn)

#_(d/q '[:find ?n ?a
       :where [_ :tags.template/name ?n]
       [_ :tags.template/type ?a]
       ] @conn)

#_(d/q '[:find [?n ...]
   :where [_ :tags.template/type ?n]] @conn)

;; (d/q
;; '[:find [?name ?type]
;;   :where [?n :tags/tag ?tag]
;;   [?n :tags.template/name ?name]
;;   [?n :tags.template/type ?type]
;;   [?a :db/ident :nav/current-page]
;;   [?a :nav/route-params ?b]
;;   [?b :tag ?tag]] @conn)
