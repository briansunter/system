(ns todomvc.scenes.view-tag
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
    [ui/icon-menu
     {:icon-button-element (r/as-element [ui/icon-button {:touch true}
                                          [ic/navigation-more-vert {:style {:color "white"}}]])}]))

(defn add-action-app-bar
  []
  [nav/main-app-bar #::nav{:title "View Action"
                           :left-element  [ui/icon-button
                                           {:href (path-for-page :tags)}
                                           [ic/navigation-arrow-back {:style {:color "white"}}]] #_[nav/app-bar-close-button ]

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

(defn templates
  [current-tag]
  (let [templates (re-frame/subscribe [:tags.template/tag-templates (keyword current-tag)])]
    [:div
     [:p (str @templates)]
     ]))

(defn view-tag-panel
  []
  (let [add-action (re-frame/subscribe [:ui.add-action/add-action [:db/ident :ui.add-action/add-action]])
        all-tags (re-frame/subscribe [:ui.add-action/all-tags])
        current-action-id (re-frame/subscribe [:ui.view-action/current-action-id])
        active-panel (re-frame/subscribe [:nav/current-page])
        current-tag (re-frame/subscribe [:ui.view-action/current-tag])
        template-types (re-frame/subscribe [:tags.template/template-types])]
    [:div
     [add-action-app-bar]
     [ui/dialog {:open (= :add-template-tag @active-panel)
                 :title "Add Capture Template"
                 :actions [(r/as-element [ui/flat-button {:label "Cancel"}]) (r/as-element [ui/flat-button {:label "Save"
                                                                                                            :on-click #(re-frame/dispatch [:tags.template/add-template :foo :text-box (keyword @current-tag)])}])]}
      [ui/text-field {:floating-label-text "name"}]
      [ui/select-field (for [t @template-types]
                         [ui/menu-item {:primary-text (str t)}])]]
     [ui/floating-action-button {:secondary true
                                 :href (path-for-page :add-template-tag :tag @current-tag)
                                 :style {:bottom 0
                                         :z-index 5
                                         :right 0
                                         :margin-right 20
                                         :margin-bottom 20
                                         :position "fixed"}}
      (ic/content-add)]
     [ui/paper {:z-depth 2
                :style {:padding 10
                        :margin-bottom 20
                        :overflow "hidden"}}
      [ui/text-field {:floating-label-text "Tag Name"
                      :value @current-tag
                      :on-change #(re-frame/dispatch [:action/update-name @current-action-id (target-value %)])
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
      [action-tags-input {:tags (map :tags/tag (:action/tags @current-tag))
                          :matching-tags @all-tags
                          ;; :on-input-update #(re-frame/dispatch [:search-for-tag %])
                          :on-add-chip #(re-frame/dispatch [:action/add-tag @current-action-id (keyword %)])
                          :on-delete-chip (fn [t] (let [tag (keyword t)
                                                        tag-id (:db/id (first (filter #(= (:tags/tag %) tag) (:action/tags @current-tag))))
                                                        ](re-frame/dispatch [:action/remove-tag tag-id]))
                                            )}]
      #_[ui/raised-button {:primary true
                           :label "upload cover image"}]
      ]
     [ui/card {:z-depth 2
               :style {:padding 10
                       :overflow "hidden"}}

      [templates @current-tag]
      #_[:div
         [:div {:style {:display :flex :flex-direction :row :justify-content :space-around}} [:p "Type"] [ui/select-field {:value 1} [ui/menu-item {:value 1 :primary-text "Text Box"}]]]
         [ui/divider]
         [:div {:style {:display :flex :flex-direction :row :justify-content :space-around}} [:p "Name"] [ui/text-field {:value "Note"}]]
         [ui/divider]
         [:div {:style {:display :flex :flex-direction :row :justify-content :space-around}} [:p "Default"] [ui/text-field {:value "Note"}]]]

      ]]))
