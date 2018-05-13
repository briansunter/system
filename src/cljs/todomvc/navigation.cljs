(ns todomvc.navigation
  (:require
   [todomvc.routes :refer [path-for-page]]
   [clojure.test.check.generators :as gen]
   [cljs.spec.alpha :as s]
   [cljsjs.material-ui]
   [cljs-react-material-ui.core :refer [get-mui-theme color]]
   [cljs-react-material-ui.reagent :as ui]
   [cljs-react-material-ui.icons :as ic]
   [re-frame.core :as re-frame]
   [reagent.core :as r]))

(defn main-app-drawer
  []
  (let [app-drawer-open (re-frame/subscribe [:nav/drawer-open?])]
    [ui/drawer {:open @app-drawer-open
                :docked false
                :z-depth 2
                :on-request-change #(re-frame/dispatch [:nav/set-drawer-open boolean %])}
     [ui/menu
      [ui/divider]
      [ui/menu-item {:primary-text "Inbox"
                     :href (path-for-page :actions)
                     :left-icon (ic/action-list)}]
      [ui/divider]
      [ui/menu-item {:primary-text "Tags"
                     :href (path-for-page :tags)
                     :left-icon (ic/action-loyalty)}]
      [ui/divider]
      [ui/menu-item {:primary-text "Views"
                     :href (path-for-page :decks)
                     :left-icon (ic/action-pageview)}]
      [ui/divider]]]))

(defn app-bar-menu-button
  []
  [ui/icon-button {:on-click #(re-frame/dispatch [:nav/set-drawer-open true])}
   [ic/navigation-menu {:style {:color "white"}}]])

(defn app-bar-close-button
  [props]
  [ui/icon-button props [ic/navigation-close {:style {:fill "white"}}]])

(defn main-app-bar
  [{:keys [nav/title nav/left-element nav/right-element] :as props}]
  [:div
   [main-app-drawer]
   [ui/app-bar {:title title
                :z-depth 2
                :icon-element-left (r/as-element (or left-element [app-bar-menu-button]))
                :icon-element-right (r/as-element right-element)
                :style {:position "fixed"
                        :top 0
                        :left 0}}]])

(defn theme
  [content]
  [ui/mui-theme-provider
   {:mui-theme (get-mui-theme
                {:palette {:text-color (color :green600)}})}
   [:div {:style {:margin-top 80}}
    content]])
