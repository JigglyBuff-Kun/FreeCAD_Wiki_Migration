---
title: Reinforcement Armature droite
---
|  |
| --- |
| Reinforcement Armature droite |
| Emplacement du menu |
| 3D/BIM → Outils pour les armatures → Armature droite |
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

L'outil Armature droite permet à l'utilisateur de créer un ensemble d'armatures droites à l'intérieur d'un objet de [Arch Structure](/Arch_Structure/fr "Arch Structure/fr").

Cet outil fait partie de l'[atelier Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr"), un [atelier externe](/External_workbenches/fr "External workbenches/fr") qui peut être installé avec le ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

![](/images/Arch_Rebar_Straight_example.png)

Deux jeux d'armatures droites à l'intérieur d'une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr")

## Utilisation

1. Sélectionnez n’importe quelle face d’un objet précédemment créé ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure/fr "Arch Structure/fr").
2. Puis sélectionnez ![](/images/Reinforcement_StraightRebar.svg) Armature droite dans la barre des outils pour les armatures
3. Un [panneau des tâches](/Task_Panel/fr "Task Panel/fr") apparaîtra sur le côté gauche de l'écran comme indiqué ci-dessous.
4. Sélectionnez l'orientation souhaitée.
5. Remplissez les entrées telles que "Front cover", "Right side cover", "Left side cover", "Bottom cover" et "Diameter" de l'armature.
6. Sélectionnez le mode de distribution "Amount" ou "Spacing".
   * Si "Spacing" est sélectionné, l'utilisateur peut également opter pour un [espacement personnalisé](/Custom_Spacing/fr "Custom Spacing/fr").
7. Pick Selected Face est utilisé pour vérifier ou modifier la face pour la distribution des armatures.
8. Cliquez sur OK ou Appliquer pour générer les barres.
9. Cliquez sur Annuler pour quitter le panneau de tâches.

![](/images/StraightRebarDialog.png)

Panneau des tâches de l'outil

## Propriétés

* Données**Orientation** : définit l'orientation de l'armature (comme bas, haut, droite et gauche).
* Données**Front Cover** : distance entre l'armature et la face sélectionnée.
* Données**Right Cover** : distance entre l'extrémité droite de l'armature et la face droite de la structure.
* Données**Left Cover** : distance entre l'extrémité gauche de l'armature et la face gauche de la structure.
* Données**Cover along** : ces propriétés permettent à l'utilisateur de spécifier la couverture supérieure ou inférieure.
* Données**Bottom Cover** : distance entre l'armature et la face inférieure de la structure.
* Données**Top Cover** : distance entre l'armature et la face supérieure de la structure.
* Données**Amount** : quantité d'armatures.
* Données**Spacing** : distance entre les axes de chaque armature.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr"), [Reinforcement API](/Reinforcement_API/fr "Reinforcement API/fr") et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Armature droite peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
Rebar = makeStraightRebar(f_cover, coverAlong, rt_cover, lb_cover,
                          diameter, amount_spacing_check, amount_spacing_value, orientation="Horizontal",
                          structure=None, facename=None)

```

* Crée un objet `Rebar` à partir de la `structure` donnée qui est une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr"), et `facename` qui est une face de cette structure.
  + Si ni `structure` ni `facename` n'est donné, la face sélectionnée par l'utilisateur sera entrée.
* `f_cover`, `coverAlong`, `rt_cover` et `lb_cover` sont les distances internes de décalage des éléments d'armature par rapport aux faces de la structure.
  + `f_cover` est le décalage de la couverture avant.
  + `coverAlong` est un tuple `(position, value)` qui définit la valeur de décalage dans une position (haut, bas, gauche, droite) en fonction de `orientation` .
  + `rt_cover` correspond au décalage de la face droite ou supérieure en fonction de la valeur de `coverAlong` et `orientation`.
  + `lb_cover` correspond au décalage de la face gauche ou inférieure en fonction de la valeur de `coverAlong` et `orientation`.
* `diameter` est le diamètre des armatures à l'intérieur de la structure.
* `amount_spacing_check` si `True`, cela créera autant d'armatures que celles données par `amount_spacing_value`. Si `False`, cela créera des armatures séparées par la valeur numérique de `amount_spacing_value`.
* `amount_spacing_value` spécifie le nombre d'armatures, ou la valeur de la distance qui les sépare, en fonction de `amount_spacing_check`.
* `orientation` spécifie l'orientation de l'armature. Il peut s'agir de `"Horizontal"` ou `"Vertical"`.

En fonction de l'orientation de l'armature, la fonction peut être appelée de deux manières générales en définissant `coverAlong` de manière appropriée.

### L'armature est horizontale

```
Rebar = makeStraightRebar(f_cover, ("Top Side", value), right_cover, left_cover, ...)
Rebar = makeStraightRebar(f_cover, ("Bottom Side", value), right_cover, left_cover, ...)

```

* `coverAlong` est un tuple avec un offset `"Top Side"` (Face supérieure) ou `"Bottom Side"` (Face inférieure) de la `valeur`.
* Dans ce cas, `rt_cover` fait référence à l'offset `right_cover` et `lb_cover` à l'attente `left_cover`.

### L'armature est verticale

```
Rebar = makeStraightRebar(f_cover, ("Left Side", value), top_cover, bottom_cover, ...)
Rebar = makeStraightRebar(f_cover, ("Right Side", value), top_cover, bottom_cover, ...)

```

* `coverAlong` est un tuple avec un `"Left Side"` (Côté gauche)or a `"Right Side"` (Côté droit) d'offset  `valeur`.
* Dans ce cas, `rt_cover` fait référence à l'offset `top_cover` et `lb_cover` à l'offset `bottom_cover`.

### Exemple horizontal

```
import Arch, Draft, StraightRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=400)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = StraightRebar.makeStraightRebar(50, ("Bottom Side", 20), 100, 100,
                                        12, True, 5, "Horizontal", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = StraightRebar.makeStraightRebar(50, ("Bottom Side", 50), 100, 100,
                                         12, True, 5, "Horizontal", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Exemple vertical

```
import Arch, Draft, StraightRebar

Structure2 = Arch.makeStructure(length=1000, width=1000, height=400)
Structure2.ViewObject.Transparency = 80
Draft.move(Structure2, FreeCAD.Vector(1500, 0, 0))
FreeCAD.ActiveDocument.recompute()

Rebar3 = StraightRebar.makeStraightRebar(50, ("Left Side", 20), 100, 100,
                                         12, True, 5, "Vertical", Structure2, "Face4")
Rebar3.ViewObject.ShapeColor = (0.9, 0.5, 0.0)

Rebar4 = StraightRebar.makeStraightRebar(50, ("Left Side", 50), 100, 100,
                                         12, True, 5, "Vertical", Structure2, "Face6")
Rebar4.ViewObject.ShapeColor = (0.0, 0.5, 0.5)

```

### Éditer l'armature

Vous pouvez changer les propriétés de l’armature avec la fonction suivante :

```
editStraightRebar(Rebar, f_cover, coverAlong, rt_cover, lb_cover,
                  diameter, amount_spacing_check, amount_spacing_value, orientation,
                  structure=None, facename=None)

```

* `Rebar` est un objet `StraightRebar` créé précédemment.
* Les autres paramètres sont les mêmes que ceux requis par la fonction `makeStraightRebar()`.
* `structure` et `facename` peuvent être omis afin que l'armature reste dans la structure d'origine.

Exemple :

```
import StraightRebar

StraightRebar.editStraightRebar(Rebar, 50, ("Top Side", 20), 100, 100,
                                24, True, 7, "Horizontal")

StraightRebar.editStraightRebar(Rebar2, 50, ("Top Side", 50), 100, 100,
                                24, True, 7, "Horizontal")

StraightRebar.editStraightRebar(Rebar3, 50, ("Right Side", 20), 100, 100,
                                24, True, 7, "Vertical")

StraightRebar.editStraightRebar(Rebar4, 50, ("Right Side", 50), 100, 100,
                                24, True, 7, "Vertical")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_StraightRebar/fr&oldid=1508201>"