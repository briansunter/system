(ns todomvc.server
  (:require [todomvc.handler :refer [handler]]
            [ring.adapter.jetty :refer [run-jetty]])
  (:gen-class))

 (defn -main [& args]
   (let [port 3000]
     (run-jetty handler {:port port :join? false})))
