---
title: Reinforcement Armature cintrée
---
|  |
| --- |
| Reinforcement Armature cintrée |
| Emplacement du menu |
| 3D/BIM → Outils pour les armatures → Armature cintrée |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr"), [Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil Armature cintrée permet à l'utilisateur de créer un ensemble de barres d'armature pliées à l'intérieur d'un objet de [Arch Structure](/Arch_Structure/fr "Arch Structure/fr").

Cette outil fait partie de l'[atelier Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr"), un [atelier externe](/External_workbenches/fr "External workbenches/fr") qui peut être installé avec le ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

![](/images/Arch_Rebar_BentShape_example.png)

Deux jeux d'armatures cintrées à l'intérieur d'une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr")

## Utilisation

1. Sélectionnez n’importe quelle face d’un objet ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure/fr "Arch Structure/fr").
2. Ensuite, sélectionnez ![](/images/Reinforcement_BentShapeRebar.svg) Armature cintrée à partir de la barre des outils d'armature.
3. Un [panneau des tâches](/Task_Panel/fr "Task Panel/fr") apparaîtra sur le côté gauche de l'écran, comme indiqué ci-dessous.
4. Sélectionnez l'orientation souhaitée.
5. Remplissez les entrées telles que "Face gauche", "Face droite", "Face supérieure", "Face inférieure", "Face avant", "Angle de flexion", "Facteur de courbure", "Arrondi" et "Diamètre" de l'armature.
6. Sélectionnez le mode de distribution "Quantité" ou "Écartement".
   * Si "Écartement" est sélectionné, l'utilisateur peut également opter pour [espacement personnalisé](/Reinforcement_Custom_Spacing/fr "Reinforcement Custom Spacing/fr").
7. Choisir la face sélectionnée est utilisé pour vérifier ou modifier la face pour la distribution des barres.
8. Cliquez sur OK ou Appliquer pour générer les barres.
9. Cliquez sur Annuler pour quitter le panneau de tâches.

![](/images/BentShapeDialog.png)

Panneau de tâches pour l'outil Armature cintrée

## Propriétés

* Données**Orientation** : définit l'orientation de l'armature (comme un bas, haut, droite et gauche).
* Données**Front Cover** : distance entre l'armature et la face sélectionnée.
* Données**Left Cover** : distance entre l'extrémité gauche de l'armature et la face gauche de la structure.
* Données**Right Cover** : distance entre l'extrémité droite de l'armature et la face droite de la structure.
* Données**Bottom Cover** : distance entre l'armature et la face inférieure de la structure.
* Données**Top Cover** : distance entre l'armature et la face supérieure de la structure.
* Données**Anchor Length** : longueur de la forme courbée de l'armature .
* Données**Bent Angle** : définit l'angle de cintrage de l'armature.
* Données**Amount** : quantité de barres d'armature.
* Données**Spacing** : distance entre les axes de chaque barre.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr"), [API de renforts](/Reinforcement_API/fr "Reinforcement API/fr") et [FreeCAD Scripts de Base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Armature cintrée peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") à l'aide de la fonction suivante :

```
Rebar = makeBentShapeRebar(f_cover, b_cover, l_cover, r_cover,
                           diameter, t_cover, bentLength, bentAngle, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom",
                           structure=None, facename=None)

```

* Crée un objet `Rebar` à partir de la `structure` donnée qui est une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") et `facename` qui est une face de cette structure.
  + Si aucun `structure` ni `facename` n'est donné, la face sélectionnée par l'utilisateur sera entrée.
* `f_cover`, `b_cover`, `l_cover`, `r_cover`, et `t_cover` sont des distances de décalage internes pour les éléments d'armature avec respect des faces de la structure. Ce sont respectivement les décalages avant, inférieur, gauche, droit et supérieur.
* `diameter` est le diamètre des armatures à l'intérieur de la structure.
* `rounding` est le paramètre qui détermine le rayon de courbure des armatures centrales.
* `bentLength` et `bentAngle` définissent la longueur de la pointe des armatures et de l'angle de cintrage à partir des armatures centrales.
* `amount_spacing_check` si `True`, cela créera autant d'armatures que la valeur `amount_spacing_value`. Si `False`, cela créera des armatures séparées par la valeur numérique de `amount_spacing_value`.
* `amount_spacing_value` spécifie le nombre de armatures ou la valeur de la distance qui les sépare en fonction de `amount_spacing_check`.
* `orientation` spécifie l'orientation de l'armature. Il peut s'agir de `"Bottom"`, `"Top"`, `"Left"`, ou `"Right"`.

### Exemples

```
import FreeCAD, Arch, BentShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=100)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = BentShapeRebar.makeBentShapeRebar(50, 20, 20, 20,
                                          8, 40, 100, 135, 2, True, 4, "Bottom", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = BentShapeRebar.makeBentShapeRebar(50, 40, 20, 20,
                                           8, 20, 100, 135, 2, True, 4, "Bottom", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Modifier l'armature

Vous pouvez changer les propriétés de l’armature avec la fonction suivante :

```
editBentShapeRebar(Rebar, f_cover, b_cover, l_cover, r_cover,
                   diameter, t_cover, bentLength, bentAngle, rounding, amount_spacing_check, amount_spacing_value, orientation,
                   structure=None, facename=None)

```

* `Rebar` est un objet `BentShapeRebar` créé précédemment.
* Les autres paramètres sont les mêmes que ceux requis par la fonction `makeBentShapeRebar()`.
* `structure` et `facename` peuvent être omis afin que l'armature reste dans la structure d'origine.

```
import BentShapeRebar

BentShapeRebar.editBentShapeRebar(Rebar, 50, 20, 20, 20,
                                  12, 20, 100, 155, 2, True, 6, "Top")

BentShapeRebar.editBentShapeRebar(Rebar2, 50, 35, 20, 20,
                                  12, 35, 100, 155, 2, True, 6, "Top")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_BentShapeRebar/fr&oldid=1539529>"