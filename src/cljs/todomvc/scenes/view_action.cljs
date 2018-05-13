(ns todomvc.scenes.view-action
  (:require [re-frame.core :as re-frame]
            [cljsjs.material-ui]
            [cljsjs.material-ui-chip-input]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-react-material-ui.icons :as ic]
            [todomvc.navigation :as nav]
            [todomvc.routes :refer [path-for-page]]
            [reagent.core :as r]))

(defn target-value
  [tv]
  (-> tv .-target .-value))

(defn update-template-content
  [action-id template-name content]
  (re-frame/dispatch [:tags.template/update-action-template-content action-id template-name content]))

(defn render-tag-template
  [add-action tag template-type]
  [:div
   {:key (:tags.template/name template-type)
    :style {:flex-direction :row
            :display :flex
            :padding 20}}
   [:div {:style {:flex 1
                  :justify-content :center
                  :display :flex} }[:div (str (:tags.template/name template-type))]]
   [:div
    {:style {:flex 3
             :display :flex} }
    (case (:tags.template/type template-type)
      :text-field [ui/text-field {:flex 1
                                  :style {:flex 1}
                                  :on-change #(update-template-content (:db/id add-action) (:tags.template/name template-type)(target-value %))
                                  :value   ((:tags.template/content add-action) (:tags.template/name template-type)(:tags.template/name template-type))}]
      :text-box [ui/text-field {:multi-line true
                                :style {:flex 1}
                                :value ((:tags.template/content add-action) (:tags.template/name template-type))
                                :on-change #(update-template-content (:db/id add-action) (:tags.template/name template-type)(target-value %))
                                }]
      :date-picker [ui/date-picker {:flex 1
                                    :on-change #(update-template-content (:db/id add-action) (:tags.template/name template-type) (.getTime %2))
                                    :value (js/Date. ((:tags.template/content add-action) (:tags.template/name template-type)))}]
      [:div "NONE"])]])

(defn render-tag-templates
  [add-action]
  [ui/paper
   (doall (for [t (:action/tags add-action)]
            (let [tt (re-frame/subscribe [:tags/tag [:tags/tag (keyword (:tags/tag t))]])]
              {:style {:margin-top 20
                       :margin-bottom 20}}
              (when @tt (doall (for [template-type (:tags/template-types @tt)]
                                 [render-tag-template add-action @tt template-type]))))))])

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
                                           {:href (path-for-page :actions)}
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

(defn view-action-panel
  []
  (let [add-action (re-frame/subscribe [:ui.add-action/add-action [:db/ident :ui.add-action/add-action]])
        all-tags (re-frame/subscribe [:ui.add-action/all-tags])
        current-action-id (re-frame/subscribe [:ui.view-action/current-action-id])
        current-action (re-frame/subscribe [:ui.view-action/current-action @current-action-id])
        ]
    (fn []
      [:div
       [add-action-app-bar]
       [ui/paper {:z-depth 2
                  :style {:padding 10
                          :overflow "hidden"}}
        [ui/text-field {:floating-label-text "Action Name"
                        :value (:action/action-name @current-action)
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
        [action-tags-input {:tags (map :tags/tag (:action/tags @current-action))
                            :matching-tags @all-tags
                            ;; :on-input-update #(re-frame/dispatch [:search-for-tag %])
                            :on-add-chip #(re-frame/dispatch [:action/add-tag @current-action-id (keyword %)])
                            :on-delete-chip (fn [t] (let [tag (keyword t)
                                                          tag-id (:db/id (first (filter #(= (:tags/tag %) tag) (:action/tags @current-action))))
                                                          ](re-frame/dispatch [:action/remove-tag tag-id])))}]


        #_[ui/raised-button {:primary true
                             :label "upload cover image"}]
        ]
       [render-tag-templates @current-action]
       ])))
