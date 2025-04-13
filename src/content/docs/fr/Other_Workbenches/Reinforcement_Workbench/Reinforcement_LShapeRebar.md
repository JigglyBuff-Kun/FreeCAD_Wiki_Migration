---
title: Reinforcement Armature en L
---
|  |
| --- |
| Reinforcement Armature en L |
| Emplacement du menu |
| 3D/BIM → Outils pour les armatures → Armature en L |
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

L'outil [Armature en L](/Arch_Rebar_LShape/fr "Arch Rebar LShape/fr") permet à l'utilisateur de créer un ensemble d'armatures en forme de L à l'intérieur d'un objet de [Arch Structure](/Arch_Structure/fr "Arch Structure/fr").

Cet outil fait partie de l'[atelier Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr"), un [atelier externe](/External_workbenches/fr "External workbenches/fr") qui peut être installé avec le ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

![](/images/Arch_Rebar_LShape_example.png)

Quatre jeux d'armatures en forme de L à l’intérieur d’une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr")

## Utilisation

1. Sélectionnez n’importe quelle face d’un objet de ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") créé précédemment.
2. Ensuite, sélectionnez ![](/images/Reinforcement_LShapeRebar.svg) Armature en L à partir de la barre d'outils des armatures
3. Un [panneau des tâches](/Task_Panel/fr "Task Panel/fr") apparaîtra sur le côté gauche de l'écran, comme indiqué ci-dessous.
4. Sélectionnez l'orientation souhaitée.
5. Remplissez les entrées telles que "Left Cover", Right Cover, Top Cover, "Bottom Cover", "Front Cover", "Bent Angle", "Bent Factor", "Rounding" et "Diameter" de l'armature.
6. Sélectionnez le mode de distribution "Amount" ou "Spacing".
   * Si "Spacing" est sélectionné, un utilisateur peut également opter pour un [espacement personnalisé](/Custom_Spacing/fr "Custom Spacing/fr").
7. Pick Selected Face est utilisé pour vérifier ou modifier la face pour la distribution des armatures.
8. Cliquez sur OK ou Appliquer pour générer l'armature.
9. Cliquez sur Annuler pour quitter le panneau des tâches.

![](/images/LShapeDialog.png)

Panneau des tâches de l'outil

## Propriétés

* Données**Orientation** : définit l'orientation de l'armature (comme bas, haut, droite et gauche).
* Données**Front Cover** : distance entre l'armature et la face sélectionnée.
* Données**Right Cover** : distance entre l'extrémité droite de l'armature et la face droite de la structure.
* Données**Left Cover** : distance entre l'extrémité gauche de l'armature et la face gauche de la structure.
* Données**Bottom Cover** : distance entre l'armature et la face inférieure de la structure.
* Données**Top Cover** : distance entre l'armature et la face supérieure de la structure.
* Données**Rounding** : valeur d'arrondi à appliquer aux coins des armatures, exprimée en fois le diamètre.
* Données**Amount** : nombre d'armatures.
* Données**Spacing** : distance entre les axes de chaque armature.

## Script

*Voir aussi:* [Arch API](/Arch_API/fr "Arch API/fr"), [API de renforts](/Reinforcement_API/fr "Reinforcement API/fr") et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Armature en L peut être utilisé dans les [macro](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") à l'aide de la fonction suivante :

```
Rebar = makeLShapeRebar(f_cover, b_cover, l_cover, r_cover,
                        diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom Left",
                        structure=None, facename=None):

```

* Crée un objet `Rebar` à partir de la `structure` donnée, qui est une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") et `facename` qui est une face de cette structure.
  + Si aucune `structure` ni `facename` n'est donné, la face sélectionnée par l'utilisateur sera entrée.
* `f_cover`, `b_cover`, `l_cover`, `r_cover` et `t_cover` sont des distances de décalage internes pour les éléments de l'armature par rapport aux faces de la structure. Ce sont respectivement les décalages avant, inférieur, gauche, droit et supérieur.
* `diameter` est le diamètre des armatures à l'intérieur de la structure.
* `rounding` est le paramètre qui détermine le rayon de courbure des armatures.
* `amount_spacing_check` mis à True, cela créera autant de armatures que celles indiquées par amount\_spacing\_value. Si la valeur est False, des armatures seront séparées par la valeur numérique de amount\_spacing\_value.
* `amount_spacing_value` spécifie le nombre d'armatures ou la valeur de la séparation les séparant en fonction de amount\_spacing\_check.
* `orientation` spécifie l'orientation de l'armature. Il peut s'agir de

`"Bottom Right"` (En bas à droite), `"Bottom Left"` (En bas à gauche), `"Top Right"` (En haut à droite), or `"Top Left"` (en haut à gauche).

### Exemple

```
import FreeCAD, Arch, LShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=400)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = LShapeRebar.makeLShapeRebar(50, 20, 20, 20,
                                    8, 50, 4, True, 6, "Bottom Left", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = LShapeRebar.makeLShapeRebar(50, 50, 20, 20,
                                     8, 50, 4, True, 6, "Bottom Left", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Éditer l'armature

Vous pouvez changer les propriétés de l’armature avec la fonction suivante :

```
editLShapeRebar(Rebar, f_cover, b_cover, l_cover, r_cover,
                diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation,
                structure=None, facename=None)

```

* `Rebar` est un objet `LShapeRebar` créé précédemment.
* Les autres paramètres sont les mêmes que ceux requis par la fonction `makeLShapeRebar()`.
* `structure` et `facename` peuvent être omis afin que l'armature reste dans la structure d'origine.

```
import LShapeRebar

LShapeRebar.editLShapeRebar(Rebar, 50, 50, 20, 20,
                            12, 50, 6, True, 5, "Top Right")

LShapeRebar.editLShapeRebar(Rebar2, 50, 50, 20, 20,
                            12, 70, 6, True, 5, "Top Right")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_LShapeRebar/fr&oldid=1508195>"