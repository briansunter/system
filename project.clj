(defproject todomvc "0.1.0-SNAPSHOT"
  :dependencies [[bidi "2.0.14"]
                 [cljs-react-material-ui "0.2.48"]
                 [cljsjs/material-ui-chip-input "0.11.2-0"]
                 [cljsjs/react-dom "15.6.1-1"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [compojure "1.5.0"]
                 [datascript "0.16.2"]
                 [kibu/bidi-tools "0.3.0-SNAPSHOT"]
                 [org.clojure/clojure "1.9.0-alpha4"]
                 [org.clojure/clojurescript "1.9.908"]
                 [org.clojure/test.check "0.9.0"]
                 [re-frame "0.10.1"]
                 [re-posh "0.1.5"]
                 [reagent "0.7.0"]
                 [ring "1.4.0"]
                 [ring/ring-defaults "0.2.1"]
                 [venantius/accountant "0.1.7"]]

  :plugins [[lein-cljsbuild "1.1.5"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :figwheel {:css-dirs ["resources/public/css"]}

  :main todomvc.server

  :aot [todomvc.server]

  :uberjar-name "actions.jar"

  :profiles

  {:dev
   {:dependencies [[binaryage/devtools "0.9.4"]
                   [com.cemerick/piggieback "0.2.1"]
                   [figwheel-sidecar "0.5.8"]
                   [re-frisk "0.5.3"]]

    :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

    :plugins      [[lein-figwheel "0.5.13"]]}}

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs"]
     :figwheel     {:on-jsload "todomvc.core/mount-root"}
     :compiler     {:main                 todomvc.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/out/"
                    :asset-path           "/js/compiled/out"
                    :source-map-timestamp true
                    :preloads             [devtools.preload re-frisk.preload]
                    :external-config      {:devtools/config {:features-to-install :all}}}}

    {:id           "min"
     :source-paths ["src/cljs"]
     :compiler     {:main            todomvc.core
                    :output-to       "resources/public/js/compiled/app.js"
                    :optimizations   :simple
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}]})
