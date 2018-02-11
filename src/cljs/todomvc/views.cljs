(ns todomvc.views
  (:require [re-frame.core :as re-frame]
            [cljsjs.material-ui]
            [todomvc.navigation :refer [theme] :as nav]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-react-material-ui.icons :as ic]
            [reagent.core :as r]
            [todomvc.scenes.add-action :refer [add-action-panel]]
            [todomvc.scenes.view-action :refer [view-action-panel]]
            [todomvc.routes :refer [path-for-page]]))

(defn task-list-item [id]
  (let [task (re-frame/subscribe [:task id])]
    (fn []

      [:div
       {:style
        {:display :flex
         :justify-content :space-between
         }}
       [:div
        {:style {:flex-grow 3}}
       [ui/list-item {:class-name "task-list-item"
                     :href (path-for-page :view-action :action-id id)
                     }
        [:span
         (:action/name @task)]

        ]

        ]
       #_[ui/raised-button {:primary true
                          :label "done"
                          :style {:z-index 3
                                  :width "50px"
                                  }
                          }]
       ])))

(defn task-list []
  (let [task-ids (re-frame/subscribe [:task-ids])]
    (fn []
      [ui/selectable-list {:class-name "task-list"}
       (for [task-id @task-ids]
         ^{:key task-id} [task-list-item task-id])])))

(defn actions-app-bar
  []
  [nav/main-app-bar #::nav{:title "Actions"
                           :left-element [nav/app-bar-menu-button {:href (path-for-page :actions)}]}])

(defn home-page []
  (let [current-page (re-frame/subscribe [:nav/current-page])]
    [:div
     {:style {:margin 0}}
     [actions-app-bar]
     [task-list]
     [ui/floating-action-button {:secondary true
                                 :href (path-for-page :add-action)
                                 :style {:bottom 0
                                         :z-index 5
                                         :right 0
                                         :margin-right 20
                                         :margin-bottom 20
                                         :position "fixed"}}
      (ic/content-add)]]))

(defn- panels [panel-name]
  (case panel-name
    :actions [home-page]
    :add-action [add-action-panel]
    :view-action [view-action-panel]
    [:div [:a "not found"]]))

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:nav/current-page])]
    [theme (panels @active-panel)]))
