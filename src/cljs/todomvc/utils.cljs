(ns todomvc.utils
  (:require [re-posh.core :as re-posh]
            [datascript.core :as ds]
            [reagent.ratom :as r]
            [todomvc.db :as db]
            [re-frame.core :as re-frame]))

(defn not-blank?
  [s]
  (not (clojure.string/blank? s)))

(defn matches-search?
  [s sub]
  (not= -1 (.indexOf s sub)))

(defn url-encode
  [string]
  (some-> string str (js/encodeURIComponent) (.replace "+" "%20")))

(defn map->query
  [m]
  (some->> (seq m)
           (map (fn [[k v]]
                  [(url-encode (name k))
                   "="
                   (url-encode (str v))]))
           (interpose "&")
           flatten
           (apply str)))

(defn parse-path
  "Parse URL parameters into a hashmap"
  [p]
  (let [[path params](clojure.string/split p #"\?")
        param-strs (clojure.string/split params #"\&")]
    {:params (into {} (for [[k v] (map #(clojure.string/split % #"=") param-strs)]
                        [(keyword k) v]))
     :path path}))

(defn reg-pull-sub
  ([sub-name pull-pattern]
   (re-frame/reg-sub-raw sub-name
     (fn [_ [_ id]]
      (r/reaction (ds/pull @db/conn pull-pattern id)))))
  ([sub-name query-pattern pull-pattern]
   (re-frame/reg-sub-raw sub-name
     (fn [_ [_ & args]]
    ; result should be: id, nil, [id id ...] or []
        (let [result (apply ds/q query-pattern @db/conn args)]
                             (cond
                               (vector? result) ; [id id ...] or []
                               (->> result
                                    (map (fn [id]
                                           (ds/pull @db/conn pull-pattern id)))
                                    r/reaction)

                               (some? result) ; id
                               (r/reaction (ds/pull @db/conn pull-pattern result))

                               :else ; nil
                               result))))))
