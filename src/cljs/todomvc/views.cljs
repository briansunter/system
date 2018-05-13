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
            [todomvc.scenes.view-tag :refer [view-tag-panel]]
            [todomvc.scenes.tags :refer [tags-page]]
            [todomvc.routes :refer [path-for-page]]))

(defn task-list-item [id]
  (let [task (re-frame/subscribe [:task id])]
    (fn []
      [:div
       {:style
        {:display :flex
         :justify-content :space-between}}
       [:div
        {:style {:flex-grow 3}}
        [ui/list-item {:class-name "task-list-item"
                       :href (path-for-page :view-action :nav/action-id id)}
         [:span (:action/action-name @task)]]]
       ])))

(defn task-list []
  (let [task-ids (re-frame/subscribe [:task-ids])]
    (fn []
      [ui/selectable-list {:class-name "task-list"}
       (for [task-id @task-ids]
         ^{:key task-id} [task-list-item task-id])])))

(defn actions-app-bar
  []
  [nav/main-app-bar #:nav{:title "Actions"
                           :left-element [nav/app-bar-menu-button {:href (path-for-page :actions)}]}])


(defn- add-action-button
  []
  [ui/floating-action-button {:secondary true
                              :href (path-for-page :add-action)
                              :style {:bottom 0
                                      :z-index 5
                                      :right 0
                                      :margin-right 20
                                      :margin-bottom 20
                                      :position "fixed"}}
   (ic/content-add)])

(defn home-page []
  (let [current-page (re-frame/subscribe [:nav/current-page])]
    [:div
     {:style {:margin 0}}
     [add-action-button]
     [actions-app-bar]
     [task-list]
     ]))

(defn- panels [panel-name]
  (case panel-name
    :actions [home-page]
    :add-action [add-action-panel]
    :view-action [view-action-panel]
    :tags [tags-page]
    :view-tag [view-tag-panel]
    :add-template-tag [view-tag-panel]
    [:div [:a "not found"]]))

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:nav/current-page])]
    [theme (panels @active-panel)]))
