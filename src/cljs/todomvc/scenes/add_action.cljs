(ns todomvc.scenes.add-action
  (:require [re-frame.core :as re-frame]
            [cljsjs.material-ui]
            [cljsjs.material-ui-chip-input]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-react-material-ui.icons :as ic]
            [todomvc.navigation :as nav]
            [todomvc.routes :refer [path-for-page]]
            [reagent.core :as r]))

(defn add-action-button
  []
  (let [add-action (re-frame/subscribe [:ui.add-action/add-action [:db/ident :ui.add-action/add-action]])]
    [ui/flat-button {:label "save"
                     :on-click #(re-frame/dispatch [:ui.add-action/save-action (:action/action-name @add-action) (:ui.add-action/tags @add-action) (:tags.template/content @add-action)])
                     :href (path-for-page :actions)
                     :disabled (clojure.string/blank? (:action/action-name @add-action))
                     :style {:color "white"
                             :margin-top 5}}]))

(defn add-action-app-bar
  []
  [nav/main-app-bar #:nav{:title "Add Action"
                           :left-element [nav/app-bar-close-button {:href (path-for-page :actions)}]
                           :right-element [add-action-button]}])

(def chip-input (r/adapt-react-class js/MaterialUIChipInput))

(defn target-value
  [tv]
  (-> tv .-target .-value))

(def paper-props {:z-depth 2
                  :style {:margin 10
                          :padding 10}})

(defn action-tags-input
  [props]
  (let [{:keys [tags matching-tags on-input-update on-add-chip on-delete-chip]} props]
    [chip-input {:value (clj->js tags)
                 :dataSource (clj->js matching-tags)
                 :hintText "Enter tags to describe the action here"
                 :onUpdateInput on-input-update
                 :onRequestAdd on-add-chip
                 :onRequestDelete on-delete-chip
                 :openOnFocus true
                 :fullWidth true
                 :style {:margin 10}}]))

(defn update-template-content
  [template-name content]
  (re-frame/dispatch [:tags.template/update-add-action-template-content template-name content]))

(defn render-tag-template
  [add-action tag template-type]
  [ui/paper
   {:key (:tags.template/name template-type)
    :style {:flex-direction :row
            :display :flex
            :padding 20
            :margin-top 20
            :margin-bottom 20}}
   [:div {:style {:flex 1
                  :justify-content :center
                  :display :flex} }[:div (str (:tags.template/name template-type))]]
   [:div
    {:style {:flex 3
             :display :flex} }
    (case (:tags.template/type template-type)
      :text-field [ui/text-field {:flex 1
                                  :style {:flex 1}
                                  :on-change #(update-template-content (:tags.template/name template-type)(target-value %))
                                  :value   ((:tags.template/content add-action) (:tags.template/name template-type)(:tags.template/name template-type))}]
      :text-box [ui/text-field {:multi-line true
                                :style {:flex 1}
                                :value ((:tags.template/content add-action) (:tags.template/name template-type))
                                :on-change #(update-template-content (:tags.template/name template-type)(target-value %))
                                }]
      :date-picker [ui/date-picker {:flex 1
                                    :on-change #(update-template-content (:tags.template/name template-type)  (.getTime %2))
                                    :value (js/Date. ((:tags.template/content add-action) (:tags.template/name template-type)))}]
      [:div "NONE"])]])

(defn render-tag-templates
  [add-action]
  [:div
   (doall (for [t (:ui.add-action/tags add-action)]
            (let [tt (re-frame/subscribe [:tags/tag [:tags/tag (keyword (:ui.add-action/tag t))]])]
              {:style {:margin-top 20
                       :margin-bottom 20}}
              (when @tt (doall (for [template-type (:tags/template-types @tt)]
                                 [render-tag-template add-action @tt template-type]))))))])

(defn add-action-panel
  []
  (let [add-action (re-frame/subscribe [:ui.add-action/add-action [:db/ident :ui.add-action/add-action]])
        all-tags (re-frame/subscribe [:ui.add-action/all-tags])]
    [:div
     [add-action-app-bar]
     [ui/paper {:z-depth 2
                :style {:padding 10
                        :overflow "hidden"
                        :margin-bottom 20}}
      [ui/text-field {:floating-label-text "Action Name"
                      :value (:action/action-name @add-action)
                      :on-change #(re-frame/dispatch [:ui.add-action/update-name (target-value %)])
                      :style {:padding 10
                              :font-size 26
                              :multi-line true
                              :width "100%"}}]
      [action-tags-input {:tags (map :ui.add-action/tag (:ui.add-action/tags @add-action))
                          :matching-tags @all-tags
                          :on-add-chip #(re-frame/dispatch [:ui.add-action/add-tag (keyword %)])
                          :on-delete-chip #(re-frame/dispatch [:ui.add-action/remove-tag (keyword %)])}]]
     [render-tag-templates @add-action]]))
