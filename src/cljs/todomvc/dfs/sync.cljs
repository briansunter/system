(ns todomvc.dfs.sync
  (:require
    [datascript.core :as d]
    [todomvc.db :as db]
    [todomvc.dfs.firebase :as fb]
    [todomvc.dfs.transit :as transit]
    [goog.object :as gobj]))

(def datoms-ref
  (atom nil))

;; (do (.then (.signInAnonymously fb/auth) #(reset! datoms-ref (fb/child fb/root "users/" (str (.-uid (.-user %)) "/datoms"))))
;; (datoms!)
;;     )

(defn update-val [datom]
  (when (.-added datom)
    (transit/write [(.-e datom) (.-a datom) (.-v datom)])))

(defn update-obj [tx-data]
  (let [obj (js-obj)]
    (doseq [datom tx-data]
      (gobj/set obj (hash datom) (update-val datom)))
    obj))

(defn handle-report [{:keys [tx-data tx-meta]}]
  (when-not (= tx-meta ::firebase)
    (js/console.log "update firebase")
    (.update @datoms-ref (update-obj tx-data))))

(defn add! [ss]
  (let [[e a v] (transit/read (.val ss))]
    (js/console.log "add from firebase")
    (d/transact! db/conn [[:db/add e a v]] ::firebase)))

(defn retract! [ss]
  (let [[e a v] (transit/read (.val ss))]
    (js/console.log "retract from firebase")
    (d/transact! db/conn [[:db/retract e a v]] ::firebase)))

(defn datoms! []
 (d/listen! db/conn handle-report)
  (doto @datoms-ref
    (.on "child_added" add!)
    (.on "child_changed" add!)
    (.on "child_removed" retract!)))

(.then (.signInAnonymously fb/auth) #(do (reset! datoms-ref (fb/child fb/root "users/" (str (.-uid (.-user %)) "/datoms")))
                                         (datoms!)

                                          ))
