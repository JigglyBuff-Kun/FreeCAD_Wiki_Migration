---
title: Reinforcement Armature hélicoïdale
---
|  |
| --- |
| Reinforcement Armature hélicoïdale |
| Emplacement du menu |
| 3D/BIM → Reinforcement tools → Armature hélicoïdale |
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

L'outil Armature hélicoïdale permet à l'utilisateur de créer une armature hélicoïdale continue dans un objet de [Arch Structure](/Arch_Structure/fr "Arch Structure/fr").

Cet outil fait partie de l'[atelier Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr"), un [atelier externe](/External_workbenches/fr "External workbenches/fr") qui peut être installé avec le ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

:   ![](/images/Arch_Rebar_Helical_example.png)

Une armature hélicoïdale continue à l'intérieur d'une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr")

## Utilisation

1. Sélectionnez n’importe quelle face d’un objet créé précédemment ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure/fr "Arch Structure/fr").
2. Puis sélectionnez ![](/images/Reinforcement_HelicalRebar.svg) Armature hélicoïdale dans la barre d'outils des armatures.
3. Un [panneau des tâches](/Task_Panel/fr "Task Panel/fr") apparaîtra sur le côté gauche de l'écran, comme indiqué ci-dessous.
4. Sélectionnez l'orientation souhaitée.
5. Remplissez les entrées telles que "Left Cover", "Right Cover", "Top Cover", "Bottom Cover", "Front Cover", "Bent Angle", "Bent Factor", "Rounding" et "Diameter" de l'armature.
6. Sélectionnez le mode de distribution "Amount" ou "Spacing".
   * Si "Spacing" est sélectionné, l'utilisateur peut également opter pour un [espacement personnalisé](/Custom_Spacing/fr "Custom Spacing/fr").
7. Pick Selected Face est utilisé pour vérifier ou modifier la face pour la distribution des armatures.
8. Cliquez sur OK ou Apply pour générer les armatures.
9. Cliquez sur Cancel pour quitter le panneau des tâches.

![](/images/HelicalRebarDialog.png)

Panneau des tâches de l'outil

## Propriétés

* Données**SideCover** : distance entre l'armature et la face incurvée.
* Données**Top Cover** : distance entre l'armature et la face supérieure de la structure.
* Données**Bottom Cover** : distance entre l'armature et la face inférieure de la structure.
* Données**Pitch** : pas d'une hélice est la hauteur d'un tour d'hélice complet, mesuré parallèlement à l'axe de l'hélice.
* Données**Diameter** : diamètre de l'armature.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr"), [Reinforcement API](/Reinforcement_API/fr "Reinforcement API/fr") et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Armature hélicoïdale peut être utilisé dans [macro](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") à l'aide de la fonction suivante :

```
Rebar = makeHelicalRebar(s_cover, b_cover, diameter, t_cover, pitch, structure=None, facename=None)

```

* Crée un objet `Rebar` à partir de la `structure` qui est une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") et `facename` qui est une face de cette structure.
  + Si aucune `structure` ni `facename` n'est donné, la face sélectionnée par l'utilisateur sera entrée.
* `s_cover`, `b_cover` et `t_cover` sont des distances de décalage internes pour l'armature par rapport aux faces de la structure. Ce sont respectivement les décalages latéraux, inférieurs et supérieurs.
* `diameter` est le diamètre de la spirale de renforcement à l'intérieur de la structure.
* `pitch` est le paramètre qui détermine la proximité ou l'éloignement de chaque boucle en spirale.

### Exemple

```
import FreeCAD, Draft, Arch, HelicalRebar

Circle = Draft.makeCircle(radius=250)
Structure = Arch.makeStructure(Circle)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = HelicalRebar.makeHelicalRebar(10, 50, 8, 50, 50, structure, "Face2")

```

### Éditer l'armature

Vous pouvez changer les propriétés de l'armature avec la fonction suivante :

```
editHelicalRebar(Rebar, s_cover, b_cover, diameter, t_cover, pitch, structure=None, facename=None)

```

* `Rebar` est un objet `HelicalRebar` créé précédemment.
* Les autres paramètres sont les mêmes que ceux requis par la fonction `makeHelicalRebar()`.
* `structure` et `facename` peuvent être omis afin que l'armature reste dans la structure d'origine.

```
import HelicalRebar

HelicalRebar.editHelicalRebar(Rebar, 20, 100, 20, 20, 100)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_HelicalRebar/fr&oldid=1508193>"