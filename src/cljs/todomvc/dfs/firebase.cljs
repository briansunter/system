(ns todomvc.dfs.firebase
  (:require
    [firebase.auth]
    [firebase.database]))

(def config
  #js {:apiKey            "AIzaSyAqG3KnD7_qHSA2_WBBkajn_nd1ofEkfdY"
       :authDomain        "system-c9f61.firebaseapp.com"
       :databaseURL       "https://system-c9f61.firebaseio.com"
       :projectId         "system-c9f61"
       :storageBucket     "system-c9f61.appspot.com"
       :messagingSenderId "897626728203"})

(def app
  (try
    (js/firebase.initializeApp config)
    (catch js/Error _ (js/firebase.app))))

(def db (.database app))
(def root (.ref db))
(def auth (.auth app))

(defn user->map [user-obj]
  (when user-obj
    {:uid            (.-uid user-obj)
     :display-name   (.-displayName user-obj)
     :email          (.-email user-obj)
     :email-verified (.-emailVerified user-obj)
     :photo-url      (.-photoURL user-obj)}))

(defn child [ref & args]
  (reduce #(.child %1 (str %2)) ref args))
