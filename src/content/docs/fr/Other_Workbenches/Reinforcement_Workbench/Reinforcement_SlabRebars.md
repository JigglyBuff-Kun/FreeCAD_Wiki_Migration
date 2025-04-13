---
title: Reinforcement Armature de dalle
---
|  |
| --- |
| Reinforcement Armature de dalle |
| Emplacement du menu |
| 3D/BIM → Outils pour les armatures → Armature de dalle |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr"), [Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil Armature de dalle permet à l'utilisateur de créer des armatures à l'intérieur d'un objet dalle de [Arch Structure](/Arch_Structure/fr "Arch Structure/fr").

Cet outil fait partie de l'[atelier Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr"), un [atelier externe](/External_workbenches/fr "External workbenches/fr") qui peut être installé avec le ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

![](/images/Isometric_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

Un exemple d'armature de dalle à l'intérieur d'une dalle de [Arch Structure](/Arch_Structure/fr "Arch Structure/fr")

![](/images/Right_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

Vue de droite de l'exemple de l'armature de dalle

![](/images/Front_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

Vue de face de l'exemple de l'armature de dalle

## Utilisation

1. Sélectionnez n'importe quelle face d'une dalle ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") déjà créée comme indiqué dans l'image ci-dessous.

:   ![](/images/Selected_face_for_Slab_Arch_Structure.png)
:   Face sélectionnée de la dalle de Arch Structure

    .

2. Sélectionnez ensuite ![](/images/Reinforcement_SlabRebars.svg) Armature de dalle dans les outils d'armature.

3. Une boîte de dialogue apparaîtra à l'écran, comme indiqué ci-dessous.

:   ![](/images/Slab_Reinforcement_input_dialog_box.png)
:   Boîte de dialogue pour de l'armature de dalle

4. Sélectionnez le type de couverture du maillage de l'armature souhaité (Dessus ou Dessous).

5. Sélectionnez le type d'armature souhaité et les autres données d'entrée pour les armatures dans la direction parallèle à la face sélectionnée, comme le montre l'image ci-dessous.

:   ![](/images/Bent_Shape_rebars_in_parallel_with_distribution_rebars_inputs_for_Slab_Reinforcement.png)
:   Boîte de dialogue pour des armatures de la dalle en direction parallèle de la face sélectionnée

    .

6. Cliquez maintenant sur Suivant ou sélectionnez Cross Rebars dans la liste.

7. Maintenant, sélectionnez les données souhaitées pour les données d'entrée pour les armatures dans la direction transversale de la face sélectionnée comme le montre l'image ci-dessous.

:   ![](/images/Bent_Shape_rebars_in_cross_direction_with_distribution_rebars.png)
:   Boîte de dialogue pour des armatures de la dalle en direction transversale de la face sélectionnée

    .

8. Cliquez sur OK ou Appliquer ou Terminer pour générer l'armature de la dalle.

9. Cliquez sur Annuler pour quitter la fenêtre de dialogue.

## Propriétés

**Propriétés des armatures dans la direction parallèle à la face sélectionnée :**

* Données**Mesh Cover Along** : représente l'alignement du maillage de armatures le long de la face supérieure ou inférieure de la structure. Peut prendre deux valeurs : "Top" et "Bottom".
* Données**Rebar Type** : type d'armature pour les armatures parallèles pour l'aramture de la dalles. Peut prendre quatre valeurs : "StraightRebar", "LShapeRebar", "UShapeRebar", "BentShapeRebar".
* Données**Couverture avant** : distance entre l'armature parallèle et la face sélectionnée.
* Données**Left Cover** : distance entre l'extrémité gauche de l'armature parallèle et la face gauche de la structure.
* Données**Right Cover** : distance entre l'extrémité droite de l'armature parallèle et la face droite de la structure.
* Données**Bottom Cover** : distance entre les armatures parallèles et la face inférieure de la structure.
* Données**Top Cover** : distance entre les armatures parallèles à partir de la face supérieure de la structure.
* Données**Rear Cover** : couverture arrière pour l'armature de la dalle des armatures parallèles.
* Données**Anchor Length** : représente la longueur du bras de l'armature parallèle pliée lorsque le type d'armature parallèle est BentShapeRebar.
* Données**Bent Angle** : représente l'angle de l'armature parallèle pliée lorsque le type d'armature parallèle est BentShapeRebar.
* Données**Rounding** : valeur d'arrondi à appliquer aux coins des armatures, exprimée en fois le diamètre des barres d'armature parallèles.
* Données**Diameter** : diamètre des armature parallèles
* Données**Amount** : nombre d'armatures parallèles.
* Données**Spacing** : espacement entre les armatures parallèles.

**Propriétés des armatures de distribution pour les armatures de forme pliée en direction parallèle à la face sélectionnée :**

* Données**Amount** : nombre d'armatures de distribution pour les armatures pliées en parallèle.
* Données**Spacing** : espacement entre les armatures de distribution pour les armatures pliées en direction parallèle.

**Propriétés des armatures dans le sens transversal de la face sélectionnée :**

* Données**Rebar Type** : type d'armature pour les armatures transversales pour l'armature des dalles. Peut prendre quatre valeurs : "StraightRebar", "LShapeRebar", "UShapeRebar", "BentShapeRebar".
* Données**Front Cover** : distance entre l'armature transversale et la face sélectionnée.
* Données**Left Cover** : distance entre l'extrémité gauche de l'armature transversale et la face gauche de la structure.
* Données**Right Cover** : distance entre l'extrémité droite de l'armature transversale et la face droite de la structure.
* Données**Bottom Cover** : distance entre les armatures transversales et la face inférieure de la structure.
* Données**Top Cover** : distance entre les armatures transversales depuis la face supérieure de la structure.
* Données**Rear Cover** : couverture arrière pour l'armature de la dalle des armatures transversales.
* Données**Anchor Length** : représente la longueur du bras de l'armature transversale pliée lorsque le type d'armature transversale est BentShapeRebar.
* Données**Bent Angle** : représente l'angle de l'armature transversale pliée lorsque le type d'armature transversale est BentShapeRebar.
* Données**Rounding** : valeur d'arrondi à appliquer aux coins des armatures, exprimée en fois le diamètre des armatures transversales.
* Données**Diameter** : diamètre des armatures transversales
* Données**Amount** : nombre d'armatures transversales.
* Données**Spacing** : espacement entre les armatures transversales.

**Propriétés des armatures de distribution pour les armatures pliées dans le sens transversal par rapport à la face sélectionnée :**

* Données**Amount** : nombre d'armatures de distribution pour les armatures pliées dans le sens transversal.
* Données**Spacing** : espacement entre les armatures de distribution pour les armatures pliées dans le sens transversal.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr"), [Reinforcement API](/Reinforcement_API/fr "Reinforcement API/fr") et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Armature de dalle peut être utilisé à partir de la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

### Créer une armature de dalle

```
from SlabReinforcement.SlabReinforcement import makeSlabReinforcement
SlabReinforcementGroup = makeSlabReinforcement(
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
    cross_amount_spacing_value,
    cross_rounding = 2,
    cross_bent_bar_length = 50,
    cross_bent_bar_angle = 135,
    cross_l_shape_hook_orintation = "Alternate",
    cross_distribution_rebars_check = False,
    cross_distribution_rebars_diameter = 8,
    cross_distribution_rebars_amount_spacing_check = True,
    cross_distribution_rebars_amount_spacing_value = 2,
    parallel_rounding = 2,
    parallel_bent_bar_length = 50,
    parallel_bent_bar_angle = 135,
    parallel_l_shape_hook_orintation = "Alternate",
    parallel_distribution_rebars_check = False,
    parallel_distribution_rebars_diameter = 8,
    parallel_distribution_rebars_amount_spacing_check = True,
    parallel_distribution_rebars_amount_spacing_value = 2,
    mesh_cover_along = "Bottom",
    structure = None,
    facename = None,
)

```

* Crée un objet `SlabReinforcementGroup` à partir des données `structure`, qui est une dalle de [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") et `facename`, qui est une face de cette structure.
  + Si ni `structure` ni `facename` ne sont donnés, il prendra en entrée la face sélectionnée par l'utilisateur.

**Propriétés des armatures dans la direction parallèle à la face sélectionnée :**

* Données**parallel\_rebar\_type** : type d'armature pour les armatures parallèles pour l'armature de la dalle. Peut prendre quatre valeurs : "StraightRebar", "LShapeRebar", "UShapeRebar", "BentShapeRebar".
* Données**parallel\_front\_cover** : distance entre l'armature parallèle et la face sélectionnée.
* Données**parallel\_rear\_cover** : face arrière pour l'armature de la dalle des armatures parallèles.
* Données**parallel\_left\_cover** : distance entre l'extrémité gauche de l'armature parallèle et la face gauche de la structure.
* Données**parallel\_right\_cover** : distance entre l'extrémité droite de l'armature parallèle et la face droite de la structure.
* Données**parallel\_top\_cover** : distance entre les armatures parallèles et la face supérieure de la structure.
* Données**parallel\_bottom\_cover** : distance entre les armatures parallèles à partir de la face inférieure de la structure.
* Données**parallel\_diameter** : distance des armatures parallèles.
* Données**parallel\_amount\_spacing\_check** : si True, alors la valeur de parallel\_amount\_spacing\_value est utilisée comme nombre d'armatures, sinon la valeur de parallel\_amount\_spacing\_value est utilisée comme espacement dans les armatures parallèles.
* Données**parallel\_amount\_spacing\_value** : nombre d'armatures ou l'espacement entre les armatures parallèles en fonction de la valeur de amount\_spacing\_check.
* Données**parallel\_rounding** : valeur d'arrondi à appliquer aux coins des armatures, exprimée en fois parallel\_diameter.
* Données**parallel\_bent\_bar\_length** : représente la longueur du bras de l'armature parallèle pliée lorsque le type d'armature parallèle est BentShapeRebar.
* Données**parallel\_bent\_bar\_angle** : représente l'angle de l'armature parallèle pliée lorsque parallel\_rebar\_type est BentShapeRebar.
* Données**parallel\_l\_shape\_hook\_orintation** : représente l'orientation du crochet de la barre d'armature parallèle en forme de L si le type de barre parallèle est LShapeRebar. Il peut avoir trois valeurs : "Left", "Right", "Alternate".
* Données**parallel\_distribution\_rebars\_check** : si True, ajoute des armatures de distribution pour les armatures de forme pliées parallèles. La valeur par défaut est False.
* Données**parallel\_distribution\_rebars\_diameter** : diamètre des armatures de distribution pour les armatures parallèles pliées.
* Données**parallel\_distribution\_rebars\_amount\_spacing\_check** : si True, alors la valeur de parallel\_distribution\_rebars\_amount\_spacing\_value est utilisée comme nombre d'armatures, sinon la valeur de parallel\_distribution\_rebars\_amount\_spacing\_value est utilisée comme espacement dans parallel\_distribution\_rebars. La valeur par défaut est True.
* Données**parallel\_distribution\_rebars\_amount\_spacing\_value** : nombre ou l'espacement entre les armatures de distribution pour un côté des armatures parallèles pliées en fonction de la valeur de parallel\_distribution\_rebars\_check. La valeur par défaut est 2.

**Propriétés des armatures dans le sens transversal de la face sélectionnée :**

* Données**cross\_rebar\_type** : type d'armature pour les armatures transversales pour l'armature de la dalle. Peut prendre quatre valeurs : "StraightRebar", "LShapeRebar", "UShapeRebar", "BentShapeRebar".
* Données**cross\_front\_cover** : distance entre l'armature transversale et la face transversale (face perpendiculaire à la face sélectionnée).
* Données**cross\_rear\_cover** : face arrière pour l'armature de la dalle des armatures transversales.
* Données**cross\_left\_cover** : distance entre l'extrémité gauche de l'armature transversale et la face gauche de la structure.
* Données**cross\_right\_cover** : distance entre l'extrémité droite d'armature et la face droite de la structure par rapport à la face transversale.
* Données**cross\_top\_cover** : distance entre l'armature transversale et la face supérieure de la structure.
* Données**cross\_bottom\_cover** : distance entre les armatures transversales de la face inférieure de la structure.
* Données**cross\_diameter** : diamètre des armatures transversales.
* Données**cross\_amount\_spacing\_check** : si True, la valeur de cross\_amount\_spacing\_value est utilisée comme nombre d'armatures, sinon la valeur de cross\_amount\_spacing\_value est utilisée comme espacement entre les armatures.
* Données**cross\_amount\_spacing\_value** : nombre d'armatures ou l'espacement entre les armatures en fonction de la valeur de cross\_amount\_spacing\_check.
* Données**cross\_rounding** : valeur d'arrondi à appliquer aux coins des armatures, exprimée en fois cross\_diameter.
* Données**cross\_bent\_bar\_length** : représente la longueur du bras de l'armature transversale pliée lorsque le type d'armature transversale est BentShapeRebar.
* Données**cross\_bent\_bar\_angle** : représente l'angle de l'armature transversale pliée lorsque le type d'armature transversale est BentShapeRebar.
* Données**cross\_l\_shape\_hook\_orintation** : représente l'orientation du crochet d'armature transversale en forme de L si le type d'armature transversale est LShapeRebar. Peut prendre trois valeurs : "Left", "Right", "Alternate".
* Données**cross\_distribution\_rebars\_check** : si True, ajoute des armatures de distribution pour les armatures de forme pliées en croix. La valeur par défaut est False.
* Données**cross\_distribution\_rebars\_diameter** : diamètre des armatures de distribution pour les armatures pliées en croix.
* Données**cross\_distribution\_rebars\_amount\_spacing\_check** : di True, alors la valeur de cross\_distribution\_rebars\_amount\_spacing\_value est utilisée comme nombre de barres, sinon la valeur de cross\_distribution\_rebars\_amount\_spacing\_value est utilisée comme espacement dans cross\_distribution\_rebars. La valeur par défaut est True.
* Données**cross\_distribution\_rebars\_amount\_spacing\_value** : nombre ou l'espacement entre les armatures de distribution pour un côté des armatures de forme pliée en croix en fonction de la valeur de cross\_distribution\_rebars\_check. La valeur par défaut est 2.

**Propriétés communes aux armatures parallèles et transversales :**

* Données**mesh\_cover\_along** : peut avoir deux valeurs "Top" et "Bottom". Représente l'alignement des mailles d'armature le long de la face supérieure ou inférieure de la structure.
* Données**structure** : objet de structure de Arch. La valeur par défaut est None.
* Données**facename** : face sélectionnée de la structure. La valeur par défaut est None.

### Éditer l'armature de la dalle

Vous pouvez modifier les propriétés de l'armature de la dalle à l'aide de la fonction suivante :

```
from SlabReinforcement.SlabReinforcement import editSlabReinforcement
slabReinforcementGroup = editSlabReinforcement(
    slabReinforcementGroup,
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
    cross_amount_spacing_value,
    cross_rounding = 2,
    cross_bent_bar_length = 50,
    cross_bent_bar_angle = 135,
    cross_l_shape_hook_orintation = "Alternate",
    cross_distribution_rebars_check = False,
    cross_distribution_rebars_diameter = 8,
    cross_distribution_rebars_amount_spacing_check = True,
    cross_distribution_rebars_amount_spacing_value = 2,
    parallel_rounding = 2,
    parallel_bent_bar_length = 50,
    parallel_bent_bar_angle = 135,
    parallel_l_shape_hook_orintation = "Alternate",
    parallel_distribution_rebars_check = False,
    parallel_distribution_rebars_diameter = 8,
    parallel_distribution_rebars_amount_spacing_check = True,
    parallel_distribution_rebars_amount_spacing_value = 2,
    mesh_cover_along: str = "Bottom",
    structure = None,
    facename = None,
)

```

* `slabReinforcementGroup` est un objet groupe `Slab Reinforcement` préalablement créé.
* Les autres paramètres sont les mêmes que ceux requis par la fonction `makeSlabReinforcement()`.

### Exemples d'armature de dalle

* [Exemple Dalle s'étendant dans deux directions](/Example_Slab_Spanning_in_Two_Directions/fr "Example Slab Spanning in Two Directions/fr")

![](/images/Isometric_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

* [Exemple Dalle s'étendant dans une direction](/Example_Slab_Spanning_in_One_Direction/fr "Example Slab Spanning in One Direction/fr")

![](/images/Slab_spanning_in_one_Direction.png)

* [Exemple Dalle avec maillage d'armatures droites](/Example_Slab_Having_Mesh_Of_Straight_Rebars/fr "Example Slab Having Mesh Of Straight Rebars/fr")

![](/images/Slab_having_straight_rebars_in_both_direction.png)

* [Exemple Dalle avec armatures en forme de U](/Example_Slab_Having_UShape_Rebars_Reinforcement_Mesh/fr "Example Slab Having UShape Rebars Reinforcement Mesh/fr")

![](/images/U-shape_rebars_isometric_view.png)

* [Exemple Dalle avec armatures en forme de L](/Example_Slab_Having_LShape_Rebars_Reinforcement_Mesh/fr "Example Slab Having LShape Rebars Reinforcement Mesh/fr")

![](/images/L-Shape_Rebars_isometric_view.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_SlabRebars/fr&oldid=1508197>"