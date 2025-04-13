---
title: Reinforcement Armature en U
---
|  |
| --- |
| Reinforcement Armature en U |
| Emplacement du menu |
| 3D/BIM → Outils pour les armatures → Armature en U |
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

L'outil Armature en U permet à l'utilisateur de créer un ensemble d'armatures en forme de U à l'intérieur d'un objet de ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure/fr "Arch Structure/fr").

Cet outil fait partie de l'[atelier Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr"), un [atelier externe](/External_workbenches/fr "External workbenches/fr") qui peut être installé avec le ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

![](/images/Arch_Rebar_UShape_example.png)

Deux jeux d'armatures en forme de U à l'intérieur d'une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr")

## Utilisation

1. Sélectionnez n’importe quelle face d’un objet ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") crée précedemment.
2. Ensuite, sélectionnez ![](/images/Reinforcement_UShapeRebar.svg) Armature en U dans la barre d'outil pour les armatures.
3. Un [panneau des tâches](/Task_Panel/fr "Task Panel/fr") apparaîtra sur le côté gauche de l'écran, comme indiqué ci-dessous.
4. Sélectionnez l'orientation souhaitée.
5. Remplissez les entrées telles que "Left Cover", "Right Cover", "Top Cover", "Bottom Cover", "Front Cover", "Bent Angle", "Bent Factor", "Rounding" et "Diameter" de l'armature.
6. Sélectionnez le mode de distribution "Amount" ou "Spacing".
   * Si "Spacing" est sélectionné, l'utilisateur peut également opter pour un [espacement personnalisé](/Custom_Spacing/fr "Custom Spacing/fr").
7. Pick Selected Face est utilisé pour vérifier ou modifier la face pour la distribution des armatures.
8. Cliquez sur OK ou Appliquer pour générer les armatures.
9. Cliquez sur Annuler pour quitter le panneau de tâches.

![](/images/UShapeDialog.png)

Panneau des tâches de l'outil

## Propriétés

* Données**Orientation** : définit l'orientation de l'armature (comme fond, haut, droite et gauche).
* Données**Front Cover** : distance entre l'armature et la face sélectionnée.
* Données**Right Cover** : distance entre l'extrémité droite de l'armature et la face droite de la structure.
* Données**Left Cover** : distance entre l'extrémité gauche de l'armature à la face gauche de la structure.
* Données**Bottom Cover** : distance entre l'armature de la face inférieure de la structure.
* Données**Top Cover** : distance entre l'armature et la face supérieure de la structure.
* Données**Rounding** : valeur d'arrondi à appliquer aux coins des armatures, exprimée en fois le diamètre.
* Données**Amount** : nombre d'armatures.
* Données**Spacing** : distance entre les axes de chaque armature.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr"), [Reinforcement API](/Reinforcement_API/fr "Reinforcement API/fr") et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Armature en U peut être utilisé dans les [macro](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") à l'aide de la fonction suivante :

```
Rebar = makeUShapeRebar(f_cover, b_cover, r_cover, l_cover,
                        diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom",
                        structure=None, facename=None)

```

* Crée un objet `Rebar` à partir de la `structure` donnée qui est une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") et `facename` qui est une face de cette structure.
  + Si aucune `structure` ni `facename` n'est donné, la face sélectionnée par l'utilisateur sera entrée.
* `f_cover`, `b_cover`, `r_cover`, `l_cover` et `t_cover` sont des distances de décalage internes pour les éléments d'armature avec respect des faces de la structure. Ce sont respectivement les décalages avant, inférieur, droit, gauche et supérieur.
* `diameter` est le diamètre des armatures à l'intérieur de la structure.
* `rounding` est le paramètre qui détermine le rayon de courbure des armatures.
* `amount_spacing_check` si `True`, cela créera autant d'armatures que celles données par `amount_spacing_value`. Si `False`, cela créera des armatures séparées par la valeur numérique de `amount_spacing_value`.
* `amount_spacing_value` spécifie le nombre d'armatures, ou la valeur de la distance qui les sépare, en fonction de `amount_spacing_check`.
* `orientation` spécifie l'orientation de d'armature. Il peut s'agir de `"Bottom"` (bas), `"Top"` (haut), `"Right"` (droite), or `"Left"` (gauche).

### Exemple

```
import FreeCAD, Arch, UShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=400)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = UShapeRebar.makeUShapeRebar(50, 20, 20, 20,
                                    8, 50, 4, True, 6, "Bottom", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = UShapeRebar.makeUShapeRebar(50, 50, 20, 20,
                                     8, 50, 4, True, 6, "Bottom", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Éditer l'armature

Vous pouvez changer les propriétés de l’armature avec la fonction suivante :

```
editUShapeRebar(Rebar, f_cover, b_cover, r_cover, l_cover,
                diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation,
                structure=None, facename=None)

```

* `Rebar` est un objet `UShapeRebar` créé précédemment.
* Les autres paramètres sont les mêmes que ceux requis par la fonction `makeUShapeRebar()`.
* `structure` et `facename` peuvent être omis afin que l'armature reste dans la structure d'origine.

```
import UShapeRebar

UShapeRebar.editUShapeRebar(Rebar, 50, 50, 20, 20,
                            16, 20, 5, True, 5, "Top")

UShapeRebar.editUShapeRebar(Rebar2, 70, 50, 20, 20,
                            16, 70, 5, True, 5, "Top")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_UShapeRebar/fr&oldid=1508203>"