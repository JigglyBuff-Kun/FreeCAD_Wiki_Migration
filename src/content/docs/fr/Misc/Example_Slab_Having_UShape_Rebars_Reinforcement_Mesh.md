---
title: Exemple de dalles avec armatures en forme de U
---
|  |
| --- |
| Tutoriel |
| Thème |
| {{{Topic}}} |
| Niveau |
| Intermédiaire |
| Temps d'exécution estimé |
| *Not provided* |
| Auteurs |
| Shiv Charan |
| Version de FreeCAD |
| 0.20 |
| Fichiers exemples |
| *None* |
| Voir aussi |
| *None* |
|  |

## Description

L'outil ![](/images/Reinforcement_SlabRebars.svg) [Renfort de dalle](/Reinforcement_SlabRebars/fr "Reinforcement SlabRebars/fr") permet à l'utilisateur de créer des armatures à l'intérieur d'un objet dalle de [Arch Structure](/Arch_Structure/fr "Arch Structure/fr").

Cet outil fait partie de l'![](/images/Reinforcement_Workbench.svg) [atelier Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr"), un [atelier externe](/External_workbenches/fr "External workbenches/fr") que vous pouvez installer avec le ![](/images/Std_AddonMgr.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

Dans cet exemple, nous allons créer une armature de dalle avec des armatures en forme de U pour les deux directions, comme le montre la figure ci-dessous.

![](/images/U-shape_rebars_isometric_view.png)

Exemple d'armature de dalle avec des armatures en forme de U dans la dalle [Arch Structure](/Arch_Structure/fr "Arch Structure/fr")

## Utilisation

1. Sélectionnez n'importe quelle face d'une dalle ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") déjà créée comme indiqué dans l'image ci-dessous.

:   ![](/images/Selected_face_for_Slab_Arch_Structure.png)
:   Face sélectionnée de la dalle de Arch Structure

2. Sélectionnez ensuite ![](/images/Reinforcement_SlabRebars.svg) [Slab Reinforcement](/Reinforcement_SlabRebars/fr "Reinforcement SlabRebars/fr") dans les outils d'armature.

3. Une boîte de dialogue apparaîtra à l'écran, comme indiqué ci-dessous.

:   ![](/images/Slab_Reinforcement_input_dialog_box.png)
:   Fenêtre de dialogue pour le renfort des dalles

4. Sélectionnez le type souhaité de recouvrement du maillage du renfort (Haut ou Bas). Dans l'exemple, c'est le type Bas (Bottom) qui est sélectionné.

5. Sélectionnez le type de barre d'armature UShapeRebar et les autres données d'entrée pour les barres d'armature dans la direction parallèle à la face sélectionnée, comme le montre l'image ci-dessous.

:   ![](/images/U-shape_parallel_rebars_inputs.png)
:   Boîte de dialogue pour le renfort des dalles des armatures en direction parallèle de la face sélectionnée

6. Cliquez maintenant sur le bouton Suivant ou sélectionnez Cross Rebars dans la vue en liste.

7. Sélectionnez maintenant le type de barre d'armature UShapeRebar et les autres données souhaitées pour les données d'entrée des barres d'armature dans la direction transversale de la face sélectionnée, comme le montre l'image ci-dessous.

:   ![](/images/U-Shape_rebars_in_cross_direction_inputs.png)
:   Boîte de dialogue pour le renfort des dalles des armatures dans le sens transversal de la face sélectionnée

8. Cliquez sur OK ou Apply ou Finish pour générer le ferraillage des dalles.

9. Cliquez sur Annuler pour quitter la fenêtre de dialogue.

## Propriétés utilisées pour le renfort de dalles avec des armatures en forme de U

**Propriétés des armatures dans la direction parallèle à la face sélectionnée :**

* Données**Mesh Cover Along** : représente l'alignement du maillage des barres d'armature le long de la face supérieure ou inférieure de la structure. Peut avoir deux valeurs : "Top" et "Bottom".
* Données**Rebar Type** : type de barre d'armature pour les barres d'armature parallèles pour le renfort des dalles. Peut avoir quatre valeurs : "StraightRebar", "LShapeRebar", "UShapeRebar", "BentShapeRebar".
* Données**Front Cover** : distance entre la barre d'armature parallèle et la face sélectionnée.
* Données**Left Cover** : distance entre l'extrémité gauche de la barre d'armature parallèle et la face gauche de la structure.
* Données**Right Cover** : distance entre l'extrémité droite de la barre d'armature parallèle et la face droite de la structure.
* Données**Bottom Cover** : distance entre les barres d'armature parallèles et la face inférieure de la structure.
* Données**Top Cover** : distance entre les barres d'armature parallèles depuis la face supérieure de la structure.
* Données**Rear Cover** : couverture arrière pour le renfort de la dalle des armatures parallèles.
* Données**Diameter** : diamètre des barres d'armature parallèles.
* Données**Rounding** : valeur d'arrondi à appliquer aux coins des barres, exprimée en fois le diamètre des barres d'armature parallèles.
* Données**Amount** : contient le nombre de barres d'armature parallèles.
* Données**Spacing** : contient l'espacement entre les barres d'armature parallèles.

**Propriétés des armatures dans le sens transversal de la face sélectionnée :**

* Données**Rebar Type** : type de barre d'armature pour les armatures transversales pour le renfort des dalles. Peut avoir quatre valeurs : "StraightRebar", "LShapeRebar", "UShapeRebar", "BentShapeRebar".
* Données**Front Cover** : distance entre la barre d'armature transversale et la face sélectionnée.
* Données**Left Cover** : distance entre l'extrémité gauche de la barre d'armature transversale et la face gauche de la structure.
* Données**Right Cover** : distance entre l'extrémité droite de la barre d'armature transversale et la face droite de la structure.
* Données**Bottom Cover** : distance entre les armatures transversales et la face inférieure de la structure.
* Données**Top Cover** : distance entre les armatures transversales depuis la face supérieure de la structure.
* Données**Rear Cover** : couverture arrière pour le renforcement de la dalle des armatures transversales.
* Données**Rounding** : valeur d'arrondi à appliquer aux coins des barres, exprimée en fois le diamètre des armatures transversales.
* Données**Diameter** : diamètre des barres d'armature transversales
* Données**Amount** : contient le nombre de barres d'armature transversales.
* Données**Spacing** : contient l'espacement entre les armatures transversales.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr"), [Reinforcement API](/Reinforcement_API/fr "Reinforcement API/fr") et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Renfort des dalles peut être utilisé à partir de la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

### Créer un renfort de dalle avec des armatures en forme de U

Pour créer un renfort de dalles en forme de U comme indiqué dans les figures ci-dessus, vous pouvez utiliser la fonction makeSlabReinforcement comme suit :

```
from SlabReinforcement.SlabReinforcement import makeSlabReinforcement
SlabReinforcementGroup = makeSlabReinforcement(
    parallel_rebar_type="UShapeRebar",
    parallel_front_cover=20,
    parallel_rear_cover=20,
    parallel_left_cover=10,
    parallel_right_cover=10,
    parallel_top_cover=30,
    parallel_bottom_cover=20,
    parallel_rounding=2,
    parallel_diameter=8,
    parallel_amount_spacing_check=True,
    parallel_amount_spacing_value=12,
    cross_rebar_type="UShapeRebar",
    cross_front_cover=20,
    cross_rear_cover=20,
    cross_left_cover=10,
    cross_right_cover=10,
    cross_top_cover=20,
    cross_bottom_cover=20,
    cross_rounding=2,
    cross_diameter=8,
    cross_amount_spacing_check=True,
    cross_amount_spacing_value=12,
    mesh_cover_along = "Bottom",
    structure=App.getDocument("slab").getObject("Beam"),
    facename='Face4',
)

```

* Crée un objet `SlabReinforcementGroup` pour le ferraillage de dalle avec des armatures en forme de U pour la `structure` donnée, qui est une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") dalle, et `facename`, qui est une face de cette structure.
  + Si ni `structure` ni `facename` ne sont donnés, il prendra la face sélectionnée par l'utilisateur comme entrée.

**Propriétés utilisées pour le renfort des dalles ayant des armatures en forme de U pour script de renfort**

**Propriétés des armatures dans la direction parallèle à la face sélectionnée :**

* Données**parallel\_rebar\_type** : type de barre d'armature pour les barres d'armature parallèles pour le renforcement des dalles. Peut avoir quatre valeurs : "StraightRebar", "LShapeRebar", "UShapeRebar", "BentShapeRebar".
* Données**parallel\_front\_cover** : distance entre la barre d'armature parallèle et la face sélectionnée.
* Données**parallel\_rear\_cover** : couverture arrière pour le renforcement de dalle des armatures parallèles.
* Données**parallel\_left\_cover** : distance entre l'extrémité gauche de la barre d'armature parallèle et la face gauche de la structure.
* Données**parallel\_right\_cover** : distance entre l'extrémité droite de la barre d'armature parallèle et la face droite de la structure.
* Données**parallel\_top\_cover** : distance entre les barres d'armature parallèles et la face supérieure de la structure.
* Données**parallel\_bottom\_cover** : distance entre les barres d'armature parallèles à partir de la face inférieure de la structure.
* Données**parallel\_diameter** : diamètre des barres d'armature parallèles.
* Données**parallel\_amount\_spacing\_check** : si elle vaut True, alors la valeur de parallel\_amount\_spacing\_value est utilisée comme nombre de barres, sinon la valeur de parallel\_amount\_spacing\_value est utilisée comme espacement dans les barres parallèles.
* Données**parallel\_amount\_spacing\_value** : contient le nombre d'armatures ou l'espacement entre les armatures parallèles en fonction de la valeur de amount\_spacing\_check.
* Données**parallel\_rounding** : valeur d'arrondi à appliquer aux coins des barres, exprimée en fois le parallel\_diamètre.

**Propriétés des armatures dans le sens transversal de la face sélectionnée :**

* Données**cross\_rebar\_type** : type d'armature pour les armatures transversales pour le renforcement des dalles. Peut avoir quatre valeurs : "StraightRebar", "LShapeRebar", "UShapeRebar", "BentShapeRebar".
* Données**cross\_front\_cover** : distance entre l'armature transversale et la face transversale (face perpendiculaire à la face sélectionnée).
* Données**cross\_rear\_cover** : couverture arrière pour le renfort de dalle des armatures transversales.
* Données**cross\_left\_cover** : distance entre l'extrémité gauche de l'armature transversale et la face gauche de la structure.
* Données**cross\_right\_cover** : distance entre l'extrémité droite de la barre d'armature et la face droite de la structure par rapport à la face transversale.
* Données**cross\_top\_cover** : distance entre la barre d'armature transversale et la face supérieure de la structure.
* Données**cross\_bottom\_cover** : distance entre les barres d'armature croisées de la face inférieure de la structure.
* Données**cross\_diameter** : diamètre des barres d'armature transversales.
* Données**cross\_amount\_spacing\_check** : si elle vaut True, la valeur de cross\_amount\_spacing\_value est utilisée comme nombre de barres, sinon la valeur de cross\_amount\_spacing\_value est utilisée comme espacement entre les barres.
* Données**cross\_amount\_spacing\_value** : contient le nombre d'armatures ou l'espacement entre les armatures en fonction de la valeur de cross\_amount\_spacing\_check.
* Données**cross\_rounding** : valeur d'arrondi à appliquer aux coins des barres, exprimée en fois le cross\_diameter.

**Propriétés communes des armatures parallèles et croisées :**

* Données**mesh\_cover\_along** : peut avoir deux valeurs "Top" et "Bottom". Représente l'alignement des mailles d'armature le long de la face supérieure ou inférieure de la structure.
* Données**structure** : objet de structure d'arc. La valeur par défaut est None.
* Données**facename** : face sélectionnée de la structure. La valeur par défaut est None.

### Éditer le renfort des dalles avec des armatures en forme de U

Vous pouvez modifier les propriétés du renfort de dalle avec des armatures en forme de U en utilisant la fonction editSlabReinforcement comme suit :

```
from SlabReinforcement.SlabReinforcement import editSlabReinforcement
SlabReinforcementGroup = editSlabReinforcement(
    SlabReinforcementGroup,
    parallel_rebar_type="UShapeRebar",
    parallel_front_cover=20,
    parallel_rear_cover=20,
    parallel_left_cover=10,
    parallel_right_cover=10,
    parallel_top_cover=30,
    parallel_bottom_cover=20,
    parallel_rounding=2,
    parallel_diameter=8,
    parallel_amount_spacing_check=True,
    parallel_amount_spacing_value=15,
    cross_rebar_type="UShapeRebar",
    cross_front_cover=20,
    cross_rear_cover=20,
    cross_left_cover=10,
    cross_right_cover=10,
    cross_top_cover=20,
    cross_bottom_cover=20,
    cross_rounding=2,
    cross_diameter=8,
    cross_amount_spacing_check=True,
    cross_amount_spacing_value=15,
    mesh_cover_along = "Bottom",
    structure=App.getDocument("slab").getObject("Beam"),
    facename='Face4',
)

```

* `slabReinforcementGroup` est un objet groupe `Slab Reinforcement` déjà créé.
* Les autres paramètres sont les mêmes que ceux requis par la fonction `makeSingleTieFourRebars()`.

vous pouvez changer n'importe quelle propriété pour modifier le renfort des dalles.

Retrieved from "<http://wiki.freecad.org/index.php?title=Example_Slab_Having_UShape_Rebars_Reinforcement_Mesh/fr&oldid=1495581>"