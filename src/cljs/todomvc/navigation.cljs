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

(defn toggle-app-drawer-button
  []
  [ui/icon-button {:on-click #(re-frame/dispatch [:nav/set-drawer-open true])}
   [ic/navigation-menu {:style {:color "white"}}]])

(s/def ::title string?)
(s/def ::elem-type #{:div :a :href })
(s/def ::props-elem (s/cat :type ::elem-type :props map? :elem string?))

(s/def ::color #{"blue" "green" "red" "magenta" "lavender"})
(s/def ::font-size (s/and pos-int? #(< 0 20)))
(s/def ::draggable true?)
(s/def ::rotate pos-int?)
(s/def ::x pos-int?)

(s/def ::style (s/keys :req-un [::color ::font-size]))


(s/def ::elem (s/with-gen (s/cat :type #{:a}
                                 :props (s/? (s/keys :req-un [::style]))
                                 :elem vector?)
                #(gen/return [:a "test"])))

(s/def ::hiccup ::elem)

(s/def ::left-element ::hiccup)
(s/def ::right-element ::hiccup)

(s/def ::app-bar-props (s/keys :req [::title ::left-element ::right-element]))

(s/fdef main-app-bar :args ::app-bar-props)

(defn main-app-bar
  [props]
  [:div
   [main-app-drawer]
   [ui/app-bar {:title (::title props)
                :z-depth 2
                :icon-element-left (r/as-element (or (::left-element props) [toggle-app-drawer-button]))
                :icon-element-right (r/as-element (::right-element props))
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
