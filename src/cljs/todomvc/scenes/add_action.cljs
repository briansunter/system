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
                     :on-click #(re-frame/dispatch [:ui.add-action/save-action (:ui.add-action/action-name @add-action) (:ui.add-action/tags @add-action) ])
                     :href (path-for-page :actions)
                     :disabled (clojure.string/blank? (:ui.add-action/action-name @add-action))
                     :style {:color "white"
                             :margin-top 5}}]))

(defn add-action-app-bar
  []
  [nav/main-app-bar #::nav{:title "Add Action"
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

(defn add-action-panel
  []
  (let [add-action (re-frame/subscribe [:ui.add-action/add-action [:db/ident :ui.add-action/add-action]])
        all-tags (re-frame/subscribe [:ui.add-action/all-tags])]
    [:div
    [add-action-app-bar]
    [ui/paper {:z-depth 2
               :style {:padding 10
                       :overflow "hidden"}}
     [ui/text-field {:floating-label-text "Action Name"
                     :value (:ui.add-action/action-name @add-action)
                     :on-change #(re-frame/dispatch [:ui.add-action/update-name (target-value %)])
                     :style {:padding 10
                             :font-size 26
                             :multi-line true
                             :width "100%"}}]
     #_[ui/text-field {:floating-label-text "Action Description"
                     :value @description
                     :on-change  #(re-frame/dispatch [:add-action-update-description (target-value %)])
                     :multi-line true
                     :rows 3
                     :style {:padding 10
                             :width "100%"}}]
     [action-tags-input {:tags (map :ui.add-action/tag (:ui.add-action/tags @add-action))
                        :matching-tags @all-tags
                       ;; :on-input-update #(re-frame/dispatch [:search-for-tag %])
                         :on-add-chip #(re-frame/dispatch [:ui.add-action/add-tag (keyword %)])
                         :on-delete-chip #(re-frame/dispatch [:ui.add-action/remove-tag (keyword %)])}]
     #_[ui/raised-button {:primary true
                          :label "upload cover image"}]
     ]

     (for [t (:ui.add-action/tags @add-action)]
       (let [tt (re-frame/subscribe [:tags/tag [:tags/tag (keyword (:ui.add-action/tag t))]])]
         (when @tt
           [ui/paper
           {:style {:margin-top 20
                    :margin-bottom 20}}
            (for [template-type (:tags/template-types @tt)]
              [:div
               [:div
                (str (:tags.template/name template-type))]
               (case (:tags.template/type template-type)
                 :text-field [ui/text-field]
                 :text-box [ui/text-field {:multi-line true}]
                 :date-picker [ui/date-picker]
                 [:div "NONE"]
                 )
               ]
              )
           ])
         )
       )]
    ))
