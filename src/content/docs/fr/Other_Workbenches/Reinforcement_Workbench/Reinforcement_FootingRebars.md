---
title: Reinforcement Armature de semelle
---
|  |
| --- |
| Reinforcement Armature de semelle |
| Emplacement du menu |
| 3D/BIM → Outils pour les armatures → Armature de semelle |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr"), [Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil Armature de semelle permet à l'utilisateur de créer des armatures à l'intérieur d'un objet semelle de [Arch Structure](/Arch_Structure/fr "Arch Structure/fr").

Cette outil fait partie de l'[atelier Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr"), un [atelier externe](/External_workbenches/fr "External workbenches/fr") qui peut être installé avec le ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

![](/images/Isometric_view_of_Columns_footing.png)

Un exemple d'armature de semelle dans une semelle de [Arch Structure](/Arch_Structure/fr "Arch Structure/fr")

![](/images/Front_View_of_Column_footing.png)

Vue de face de l'exemple d'armature de semelle

## Utilisation

1. Sélectionnez la face verticale d'une semelle de ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") préalablement créée comme le montre l'image ci-dessous.

:   ![](/images/Footing_Face_selected.png)
:   Face sélectionnée de la semelle de Arch Structure

2. Sélectionnez ensuite Armature de semelle dans les outils d'armature.

3. Une boîte de dialogue d'armature de semelle apparaît à l'écran, comme illustré ci-dessous.

:   ![](/images/Footing_Reinforcement_GUI_.png)
:   Boîte de dialogue pour l'armature de la semelle

4. Sélectionnez le type d'armature souhaitée et les autres données pour les armatures dans la direction parallèle à la face sélectionnée dans le maillage d'armature de la semelle comme le montre l'image ci-dessous.

:   ![](/images/Input_Fields_for_Parallel_rebars_in_footing_GUI_Dialog_box.png)
:   Boîte de dialogue d'Armature de semelle des armatures dans la direction parallèle à la face sélectionnée.

5. Maintenant, cliquez sur Suivant ou sélectionnez Cross Rebars dans la vue en liste et remplissez les données souhaitées pour les données d'entrée pour les armatures dans la direction transversale de la face sélectionnée dans le maillage de l'armature de la semelle comme le montre l'image ci-dessous.

:   ![](/images/GUICrossRebarInputsFooting.png)
:   Boîte de dialogue d'Armature de semelle des armatures dans le sens transversal de la face sélectionnée

6. Cliquez sur Suivant ou cliquez sur Colonnes dans la liste et complétez l'entrée souhaitée pour les colonnes dans l'armature de la semelle. Vous pouvez ici choisir d'ajouter ou non des armatures secondaires dans les colonnes.

:   ![](/images/Columns_input_fields_for_column_footing.png)
:   Boîte de dialogue pour les champs de saisie des colonnes

7. Cliquez sur Suivant ou cliquez sur Ties dans la liste et remplissez les données souhaitées pour Ties dans les colonnes.

:   ![](/images/Ties_input_fields_for_column_footing.png)
:   Boîte de dialogue pour les champs de saisie des cadres dans les colonnes

    .

8. Cliquez sur Suivant ou cliquez sur Main rebars dans la liste et remplissez les données souhaitées pour les armatures principales dans les colonnes.

:   ![](/images/Main_Rebar_input_fields_for_column_footing.png)
:   Boîte de dialogue pour les champs de saisie des armatures principales dans les colonnes d'Armature de semelle

Remarque : les étapes 9 et 10 ne sont nécessaires que si le contrôle des armatures secondaires est activé à l'étape 6.

9. Cliquez sur Suivant ou cliquez sur XDir Secondary rebar dans la liste et remplissez l'entrée souhaitée pour les armatures secondaires dans la direction X dans une colonne.

:   ![](/images/X_Direction_secondary_rebar_sinput_fields_for_column_footing_Reinforcement.png)
:   Boîte de dialogue pour les champs de saisie des armatures de direction X dans les colonnes d'Armature de semelle

10. Cliquez sur Suivant ou cliquez sur YDir Secondary rebar dans la liste et remplissez l'entrée souhaitée pour les armatures secondaires dans la direction Y dans une colonne.

:   ![](/images/Y_Direction_secondary_rebars_input_fields_for_Column_footing_reinforcement.png)
:   Boîte de dialogue pour les champs de saisie des armatures de direction Y dans les colonnes d'Armature de semelle

11. Cliquez sur OK ou Appliquer ou Terminer pour générer l'armature de la semelle.

12. Cliquez sur Annuler pour quitter la fenêtre de dialogue.

## Propriétés

**Propriétés des armatures en direction parallèle à la face sélectionnée dans l'armature de la semelle :**

* Données**Mesh Cover Along** : représente l'alignement du maillage des armatures le long de la face supérieure et/ou inférieure de la structure. Peut avoir trois valeurs : "Top", "Bottom" et "Both".
* Données**Rebar Type** : type d'armature pour les armatures parallèles pour l'armature de la semelle. Peut avoir trois valeurs : "StraightRebar", "LShapeRebar" et "UShapeRebar".
* Données**Front Cover** : distance entre l'armature parallèle et la face sélectionnée.
* Données**Left Cover** : distance entre l'extrémité gauche de l'armature parallèle et la face gauche de la structure.
* Données**Right Cover** : distance entre l'extrémité droite de l'armature parallèle et la face droite de la structure.
* Données**Bottom Cover** : distance entre les armatures parallèles et la face inférieure de la structure.
* Données**Top Cover** : distance entre les armatures parallèles depuis la face supérieure de la structure.
* Données**Rear Cover** : couverture arrière pour le renfort de la semelle des armatures parallèles.
* Données**Rounding** : valeur d'arrondi à appliquer aux coins des barres, exprimée en fois le diamètre des armatures parallèles.
* Données**Diameter** : diamètre d'armatures parallèles
* Données**Amount** : contient le nombre d'armatures parallèles.
* Données**Spacing** : contient l'espacement entre les armatures parallèles.

**Propriétés des armatures dans le sens transversal par rapport à la face sélectionnée dans l'armature de la semelle :**

* Données**Rebar Type** : type d'armature pour les armatures transversales pour l'armature de la semelle. Peut avoir trois valeurs : "StraightRebar", "LShapeRebar" et "UShapeRebar".
* Données**Front Cover** : distance entre l'armature transversale et la face transversale (face perpendiculaire à la face sélectionnée).
* Données**Left Cover** : distance entre l'extrémité gauche de l'armature transversale et la face gauche de la structure.
* Données**Right Cover** : distance entre l'extrémité droite de l'armature transversale et la face droite de la structure.
* Données**Bottom Cover** : distance entre les armatures transversales et la face inférieure de la structure.
* Données**Top Cover** : distance entre les armatures transversales depuis la face supérieure de la structure.
* Données**Rear Cover** : couverture arrière pour l'armature de la semelle des armatures transversales.
* Données**Rounding** : valeur d'arrondi à appliquer aux coins des barres, exprimée en fois le diamètre des armatures transversales.
* Données**Diameter** : diamètre des armatures transversales
* Données**Amount** : contient le nombre d'armatures transversales.
* Données**Spacing** : contient l'espacement entre les armatures transversales.

**Propriétés pour les colonnes dans l'armature de la semelle :**

* Données**Front Cover** : distance entre la face sélectionnée et les colonnes.
* Données**Couverture gauche** : distance entre la face gauche et les colonnes.
* Données**Right Cover** : distance entre la face droite et les colonnes.
* Données**Rear Cover** : distance entre la face arrière et les colonnes.
* Données**Column Width** : largeur de la colonne.
* Données**Column Length** : longueur de la colonne.
* Données**X direction column amount** : contient le nombre de colonnes dans le sens des X. Si le bouton radio Quantité dans le sens X est activé.
* Données**X direction column spacing** : contient l'espacement entre les colonnes dans le sens des X. Si le bouton radio d'espacement dans le sens X est activé.
* Données**Y direction column amount** : contient le nombre de colonnes dans le sens des Y. Si la case d'option Quantité dans le sens des Y est activée.
* Données**Y direction column spacing** : contient l'espacement entre les colonnes dans le sens des Y. Si la case d'option Espacement dans le sens des Y est activée.
* Données**Add Secondary Rebars** : si la case est cochée, ajoute d'armatures secondaires dans les directions X et Y dans les colonnes.

**Propriétés des attaches dans les colonnes de l'armature de la semelle :**

* Données**Top Cover** : protection supérieure pour les cadres à l'extérieur de la semelle à partir de l'extrémité des armatures principales.
* Données**Bottom Cover** : protection inférieure des cadres à partir du bas des armatures principales de la semelle près du treillis.
* Données**Diameter** : diamètre des cadres.
* Données**Bent Angle** : angle de pliage des cadres.
* Données**Extension Factor** : facteur d'extension pour le bord étendu des cadres.
* Données**Tie Number** : contient le nombre de barres d'armature ou l'espacement entre les cadres, si le bouton radio Number est activé.
* Données**Tie Spacing** : contient l'espacement entre les cadres, si le bouton radio Spacing est activé.

**Propriétés des armatures principales des colonnes de l'armature de la semelle :**

* Données**Type d'armature** : type d'armature pour les armatures principales de la colonne. Prend deux entrées différentes pour "StraightRebar", "LShapeRebar".
* Données**Hook Orientation** : orientation du crochet des barres d'armature principales dans les colonnes si le type de barre d'armature principale est LShapeRebar. Prend huit orientations différentes pour les crochets en forme de L, à savoir "Top Inside", "Top Outside", "Bottom Inside", "Bottom Outside", "Top Left", "Top Right", "Bottom Left", "Bottom Right".
* Données**Hook Extend Along** : direction du crochet de l'armature principale (LShapeRebar). Il a deux options "axe x" et "axe y".
* Données**Hook Extension** : spécifie la longueur du crochet de l'armature principale (LShapeRebar).
* Données**Rebar Rounding** : valeur d'arrondi à appliquer aux coins des armatures, exprimée en fois le diamètre de l'armature principale.
* Données**Top Offset** : décalage supérieur des armatures principales dans la colonne à l'extérieur de la face supérieure de la semelle.
* Données**Diameter** : diamètre des armatures principales dans les colonnes.

**Propriétés des armatures de direction X dans les colonnes de l'armature de la semelle :**

Armatures dans la direction X, sauf les armatures principales.

* Données**Rebar Type** : type d'armature dans le sens des X d'une colonne, avec deux valeurs : "StraightRebar" et "LShapeRebar".
* Données**Hook Orientation** : prend huit orientations différentes pour les crochets en forme de L, à savoir "Top Inside", "Top Outside", "Bottom Inside", "Bottom Outside", "Top Left", "Top Right", "Bottom Left", "Bottom Right".
* Données**Hook Extension** : longueur du crochet des armatures en forme de L.
* Données**Rounding** : valeur d'arrondi à appliquer aux coins des armatures en L, exprimée en fois le diamètre.
* Données**Top Offset** : distance entre les armatures à partir de la face supérieure de la structure.
* Données**Number#Diameter** : jeu de Number#Diameter des armatures dans l'axe X.

**Propriétés des armatures de direction Y dans les colonnes de l'armature de la semelle :**

Armatures dans la direction Y, sauf les armatures principales.

* Données**Rebar Type** : type d"armature dans l"axe des Y. Il a deux valeurs, "StraightRebar" et "LShapeRebar".
* Données**Hook Orientation** : orientation des crochets en forme de L. Il prend huit orientations différentes pour les crochets en forme de L, à savoir "Top Inside", "Top Outside", "Bottom Inside", "Bottom Outside", "Top Left", "Top Right", "Bottom Left", "Bottom Right".
* Données**Hook Extension** : longueur du crochet des armatures en forme de L.
* Données**Rounding** : valeur d'arrondi à appliquer aux coins des armatures en L, exprimée en fois le diamètre.
* Données**Top Offset** : distance entre les armatures à partir de la face supérieure de la structure.
* Données**Number#Diameter** : jeu de Number#Diameter des armatures dans l'axe Y.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr"), [Reinforcement API](/Reinforcement_API/fr "Reinforcement API/fr") et [FreeCAD Scripts de bases](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Armature de semelle peut être utilisé à partir de la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

### Créer une armature de semelle

```
from FootingReinforcement.FootingReinforcement import makeFootingReinforcement

footingReinforcementGroup = makeFootingReinforcement(
    parallel_rebar_type,
    parallel_front_cover,
    parallel_rear_cover,
    parallel_left_cover,
    parallel_right_cover,
    parallel_top_cover,
    parallel_bottom_cover,
    parallel_diameter,
    parallel_amount_spacing_check,
    parallel_amount_spacing_value,
    cross_rebar_type,
    cross_front_cover,
    cross_rear_cover,
    cross_left_cover,
    cross_right_cover,
    cross_top_cover,
    cross_bottom_cover,
    cross_diameter,
    cross_amount_spacing_check,
    column_front_cover,
    column_left_cover,
    column_right_cover,
    column_rear_cover,
    tie_top_cover,
    tie_bottom_cover,
    tie_bent_angle,
    tie_extension_factor,
    tie_diameter,
    tie_number_spacing_check,
    tie_number_spacing_value,
    column_main_rebar_diameter,
    column_main_rebars_t_offset,
    cross_amount_spacing_value,
    column_width,
    column_length,
    xdir_column_amount_spacing_check = True,
    xdir_column_amount_spacing_value = 1,
    ydir_column_amount_spacing_check = True,
    ydir_column_amount_spacing_value = 1,
    parallel_rounding = 2,
    parallel_l_shape_hook_orintation = "Alternate",
    cross_rounding = 2,
    cross_l_shape_hook_orintation = "Alternate",
    column_main_rebars_type = "StraightRebar",
    column_main_hook_orientation = "Bottom Outside",
    column_main_hook_extend_along = "x-axis",
    column_l_main_rebar_rounding = 2,
    column_main_hook_extension = 40,
    column_sec_rebar_check = False,
    column_sec_rebars_t_offset = (400, 400),
    column_sec_rebars_number_diameter = (
        "1#8mm+1#8mm+1#8mm",
        "1#8mm+1#8mm+1#8mm",
    ),
    column_sec_rebars_type = (
        "StraightRebar",
        "StraightRebar",
    ),
    column_sec_hook_orientation = (
        "Top Inside",
        "Top Inside",
    ),
    column_l_sec_rebar_rounding = (2, 2),
    column_sec_hook_extension = (40, 40),
    mesh_cover_along = "Bottom",
    structure = None,
    facename = None,
)

```

* Crée un objet `footingReinforcementGroup` à partir des données `structure`, qui est une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") et `facename` qui est une face de cette structure.
  + Si aucun `structure` ou `facename` n'est donné, il prendra en entrée la face sélectionnée par l'utilisateur.

**Propriétés des armatures dans la direction parallèle à la face sélectionnée :**

* `parallel_rebar_type` : type d'armature pour les armatures parallèles pour l'armature des semelles. Peut avoir trois valeurs : "StraightRebar", "LShapeRebar", "UShapeRebar".
* `parallel_front_cover` : distance entre l'armature parallèle et la face sélectionnée.
* `parallel_rear_cover` : couverture arrière pour l'armature de la semelle des armatures parallèles.
* `parallel_left_cover` : distance entre l'extrémité gauche de l'armature parallèle et la face gauche de la structure.
* `parallel_right_cover` : distance entre l'extrémité droite de l'armature parallèle et la face droite de la structure.
* `parallel_top_cover` : distance entre les armatures parallèles et la face supérieure de la structure.
* `parallel_bottom_cover` : distance entre les barres d'armature parallèles à partir de la face inférieure de la structure.
* `parallel_diameter` : diamètre des armatures parallèles.
* `parallel_amount_spacing_check` : mis à True, alors la valeur de parallel\_amount\_spacing\_value est utilisée comme nombre d'armatures, sinon la valeur de parallel\_amount\_spacing\_value est utilisée comme espacement dans les armatures parallèles.
* `parallel_amount_spacing_value` : contient le nombre d'armatures ou l'espacement entre les armatures parallèles en fonction de la valeur de amount\_spacing\_check.
* `parallel_rounding` : valeur d'arrondi à appliquer aux coins des armatures, exprimée en fois le parallel\_diamètre.
* `parallel_l_shape_hook_orintation` : représente l'orientation du crochet de l'armature parallèle en forme de L si le type d'armature parallèle est LShapeRebar. Peut avoir trois valeurs : "Left", "Right", "Alternate".

**Propriétés des armatures dans le sens transversal de la face sélectionnée :**

* `cross_rebar_type` : type d'armature pour les armatures transversales pour l'armature des semelles. Peut avoir trois valeurs : "StraightRebar", "LShapeRebar", "UShapeRebar".
* `cross_front_cover` : distance entre l'armature transversale et la face transversale (face perpendiculaire à la face sélectionnée).
* `cross_rear_cover` : couverture arrière pour l'armature de la semelle des armatures transversales.
* `cross_left_cover` : distance entre l'extrémité gauche de l'armature transversale et la face gauche de la structure.
* `cross_right_cover` : distance entre l'extrémité droite de l'armature et la face droite de la structure par rapport à la face transversale.
* `cross_top_cover` : distance entre l'armature transversale et la face supérieure de la structure.
* `cross_bottom_cover` : distance entre les armatures croisées depuis la face inférieure de la structure.
* `cross_diameter` : diamètre des armatures transversales.
* `cross_amount_spacing_check` : mis à True, la valeur de cross\_amount\_spacing\_value est utilisée comme nombre d'armatures, sinon la valeur de cross\_amount\_spacing\_value est utilisée comme espacement entre les armatures.
* `cross_amount_spacing_value` : contient le nombre d'armatures ou l'espacement entre les armatures en fonction de la valeur de cross\_amount\_spacing\_check.
* `cross_rounding` : valeur d'arrondi à appliquer aux coins des armatures, exprimée en fois le cross\_diameter.
* `cross_l_shape_hook_orintation` : représente l'orientation du crochet de l'armature transversale en forme de L si le type d'armature transversale est LShapeRebar. Peut avoir trois valeurs : "Left", "Right", "Alternate".

**Propriétés pour les colonnes dans de l'armature de la semelle :**

* `column_front_cover` : distance entre la face et les colonnes sélectionnées.
* `column_left_cover` : distance entre la face gauche et les colonnes.
* `column_right_cover` : distance entre la face et les colonnes de droite.
* `column_rear_cover` : distance entre la face arrière et les colonnes arrière.
* `column_width` : largeur des colonnes.
* `column_length` : longueur des colonnes.
* `xdir_column_amount_spacing_check` : mis à True, alors la valeur de xdir\_column\_amount\_spacing\_value est utilisée comme nombre de colonnes, sinon la valeur de xdir\_column\_amount\_spacing\_value est utilisée comme espacement entre les colonnes dans la direction x.
* `xdir_column_amount_spacing_value` : contient le nombre de colonnes ou l'espacement entre les colonnes dans le direction X en fonction de la valeur de xdir\_column\_amount\_spacing\_check.
* `ydir_column_amount_spacing_check` : mis à True, alors la valeur de ydir\_column\_amount\_spacing\_value est utilisée comme nombre de colonnes, sinon la valeur de ydir\_column\_amount\_spacing\_value est utilisée comme espacement entre les colonnes dans la direction Y.
* `ydir_column_amount_spacing_value` : contient le nombre de colonnes ou l'espacement entre les colonnes dans le sens des y en fonction de la valeur de ydir\_column\_amount\_spacing\_check.
* `column_sec_rebar_check` : mis à True, ajoute des barres secondaires dans les directions X et Y dans les colonnes.

**Propriétés des cadres dans les colonnes de l'armature de la semelle :**

* `tie_top_cover` : protection supérieure des cadres à l'extérieur de la semelle depuis l'extrémité des armatures principales.
* `tie_bottom_cover` : protection inférieure des cadres à partir du bas des armatures principales dans la semelle près du treillis.
* `tie_bent_angle` : angle de courbure des cadres.
* `tie_extension_factor` : facteur d'extension du bord étendu des cadres.
* `tie_diameter` : diamètre des attaches.
* `tie_number_spacing_check` : mis à True, alors la valeur de tie\_number\_spacing\_value est utilisée comme nombre de cadres, sinon la valeur de tie\_number\_spacing\_value est utilisée comme espacement dans les cadres.
* `tie_number_spacing_value` : contient le nombre de cadres ou l'espacement entre les cadres en fonction de la valeur de tie\_number\_spacing\_check.

**Propriétés des armatures principales des colonnes de l'armature de la semelle :**

* `column_main_rebar_diameter` : diamètre des armatures principales dans les colonnes.
* `column_main_rebars_t_offset` : décalage supérieur des armatures principales dans la colonne à l'extérieur de la semelle.
* `column_main_hook_extend_along` : direction du crochet de l'armature principale (LShapeRebar). Il a deux options "x-axis" et "y-axis".
* `column_l_main_rebar_rounding` : valeur d'arrondi à appliquer aux coins des armatures, exprimée en fois le diamètre de la colonne\_main\_rebar\_.
* `column_main_hook_extension` : indique la longueur du crochet de l'armature principale (LShapeRebar).
* `column_main_rebars_type` : type d'armature pour les armatures principales de la colonne. Prend deux entrées différentes pour "StraightRebar", "LShapeRebar". La valeur par défaut est StraightRebar.
* `column_main_hook_orientation` : orientation du crochet des armatures principales dans les colonnes si column\_main\_rebars\_type est LShapeRebar. Prend huit orientations différentes pour les crochets en forme de L, à savoir "Top Inside", "Top Outside", "Bottom Inside", "Bottom Outside", "Top Left", "Top Right", "Bottom Left", "Bottom Right".

**Propriétés pour les directions secondaires X et Y des armatures des colonnes de l'armature de la semelle :**

* `column_sec_rebars_t_offset` et `sec_rebars_b_offset` sont des n-uplets (xdir\_rebars\_t\_offset, ydir\_rebars\_t\_offset) qui définissent les distances de décalage (ou hauteur) pour les armatures secondaires de direction X et de direction Y par rapport aux faces supérieures de la structure, respectivement.
* `column_sec_rebars_number_diameter` est un tuple (xdir\_rebars\_number\_diameter, ydir\_rebars\_number\_diameter) qui définit le jeu de nombres#diamètres des barres secondaires de direction X et de direction Y, respectivement.
* `column_sec_rebars_type` est un tuple (xdir\_rebars\_type, ydir\_rebars\_type) qui définit le type des armatures secondaires de direction X et de direction Y, respectivement. Peut prendre `"StraightRebar"` ou `"LShapeRebar"` comme type d'armature.
* `column_sec_hook_orientation` est un tuple (xdir\_hook\_orientation, ydir\_hook\_orientation) qui définit l'orientation du crochet secondaire en forme de L dans les directions X et Y. Peut prendre `"StraightRebar"` ou `"LShapeRebar"` comme type d'armature ; il peut avoir `"Top Inside"`, `"Top Outside"`, `"Bottom Inside"`, `"Bottom Outside"`, `"Top Right"`, `"Top Left"`, `"Bottom Right"` ou `"Bottom Left"` comme orientation du crochet.
* `column_l_sec_rebar_rounding` est un tuple (l\_xdir\_rebar\_rounding, l\_ydir\_rebar\_rounding) qui détermine le rayon de courbure des armatures secondaires en forme de L dans les directions X et Y, exprimé sous forme de fois le diamètre des armatures en forme de L dans les directions X et Y, respectivement.
* `column_sec_hook_extension` est un tuple (xdir\_hook\_extension, ydir\_hook\_extension) qui définit la longueur du crochet des armatures secondaires en forme de L dans les directions X et Y.

**Propriétés communes de l'armature de la semelle :**

* `mesh_cover_along` : peut avoir trois valeurs : "Top", "Bottom" et "Both". Représente l'alignement des mailles d'armature le long de la face supérieure et/ou inférieure de la structure.
* `structure` : objet Arch structure. La valeur par défaut est None.
* `facename` : face sélectionnée de la structure. La valeur par défaut est None.

### Éditer l'armature de la semelle

Vous pouvez modifier les propriétés de l'armature de semelle à l'aide de la fonction suivante :

```
from FootingReinforcement.FootingReinforcement import editFootingReinforcement

footingReinforcementGroup = editFootingReinforcement(
    footingReinforcementGroup,
    parallel_rebar_type,
    parallel_front_cover,
    parallel_rear_cover,
    parallel_left_cover,
    parallel_right_cover,
    parallel_top_cover,
    parallel_bottom_cover,
    parallel_diameter,
    parallel_amount_spacing_check,
    parallel_amount_spacing_value,
    cross_rebar_type,
    cross_front_cover,
    cross_rear_cover,
    cross_left_cover,
    cross_right_cover,
    cross_top_cover,
    cross_bottom_cover,
    cross_diameter,
    cross_amount_spacing_check,
    column_front_cover,
    column_left_cover,
    column_right_cover,
    column_rear_cover,
    tie_top_cover,
    tie_bottom_cover,
    tie_bent_angle,
    tie_extension_factor,
    tie_diameter,
    tie_number_spacing_check,
    tie_number_spacing_value,
    column_main_rebar_diameter,
    column_main_rebars_t_offset,
    cross_amount_spacing_value,
    column_width,
    column_length,
    xdir_column_amount_spacing_check = True,
    xdir_column_amount_spacing_value = 1,
    ydir_column_amount_spacing_check = True,
    ydir_column_amount_spacing_value = 1,
    parallel_rounding = 2,
    parallel_l_shape_hook_orintation = "Alternate",
    cross_rounding = 2,
    cross_l_shape_hook_orintation = "Alternate",
    column_main_rebars_type = "StraightRebar",
    column_main_hook_orientation = "Bottom Outside",
    column_main_hook_extend_along = "x-axis",
    column_l_main_rebar_rounding = 2,
    column_main_hook_extension = 40,
    column_sec_rebar_check = False,
    column_sec_rebars_t_offset = (400, 400),
    column_sec_rebars_number_diameter = (
        "1#8mm+1#8mm+1#8mm",
        "1#8mm+1#8mm+1#8mm",
    ),
    column_sec_rebars_type = (
        "StraightRebar",
        "StraightRebar",
    ),
    column_sec_hook_orientation = (
        "Top Inside",
        "Top Inside",
    ),
    column_l_sec_rebar_rounding = (2, 2),
    column_sec_hook_extension = (40, 40),
    mesh_cover_along = "Bottom",
    structure = None,
    facename = None,
)

```

* `footingReinforcementGroup` est un objet groupe `Footing Reinforcement` préalablement créé.
* Les autres paramètres sont les mêmes que ceux requis par la fonction `makeFootingReinforcement()`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_FootingRebars/fr&oldid=1495555>"