(ns todomvc.scenes.home
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

(defn action-list-item
  [{:keys [action/action-name db/id]}]
  [:div
   {:style
    {:display :flex
     :justify-content :space-between}}
   [:div
    {:style {:flex-grow 3}}
    [ui/list-item {:class-name "task-list-item"
                   :href (path-for-page :view-action :nav/action-id id)}
     [:span action-name]]]])

(defn action-list []
  (let [all-actions (re-frame/subscribe [:action/all-actions])]
    [ui/selectable-list {:class-name "action-list"}
     (for [action @all-actions]
       ^{:key (:db/id action)} [action-list-item action])]))

(defn- actions-app-bar
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
     [action-list]]))
