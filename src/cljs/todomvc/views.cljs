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
            [todomvc.scenes.home :refer [home-page]]
            [todomvc.routes :refer [path-for-page]]))

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
