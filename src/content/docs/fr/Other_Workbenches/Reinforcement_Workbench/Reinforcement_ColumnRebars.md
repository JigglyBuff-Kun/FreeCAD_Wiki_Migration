---
title: Reinforcement Armature pour colonne
---
|  |
| --- |
| Reinforcement Armature pour colonne |
| Emplacement du menu |
| 3D/BIM → Outils pour les armatures → Armature pour colonne |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr"), [Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [Reinforcement Armature 2x6](/Reinforcement_ColumnRebars_TwoTiesSixRebars/fr "Reinforcement ColumnRebars TwoTiesSixRebars/fr"), [Reinforcement Armature circulaire](/Reinforcement_ColumnRebars_Circular/fr "Reinforcement ColumnRebars Circular/fr") |
|  |

## Description

L'outil Armature pour colonne permet à l'utilisateur de créer des armatures à l'intérieur d'un objet colonne de [Arch Structure](/Arch_Structure/fr "Arch Structure/fr").

Cette outil fait partie de l'[atelier Reinforcement](/Reinforcement_Workbench/fr "Reinforcement Workbench/fr"), un [atelier externe](/External_workbenches/fr "External workbenches/fr") qui peut être installé avec le ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

Trois exemples d'utilisation sont disponibles :

* [Colonne rectangulaire à une seul cadre (voir ci-dessous)](#Utilisation)
* [Armature 2 cadres 6 barres](/Reinforcement_ColumnRebars_TwoTiesSixRebars/fr "Reinforcement ColumnRebars TwoTiesSixRebars/fr")
* [Colonne circulaire](/Reinforcement_ColumnRebars_Circular/fr "Reinforcement ColumnRebars Circular/fr")

![](/images/Arch_Rebar_ColumnReinforcement_example.png)

Armature à un seul cadre d'une [colonne](/Arch_Structure/fr "Arch Structure/fr")

## Utilisation

1. Sélectionnez n'importe quelle face d'un objet ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure/fr "Arch Structure/fr").

2. Sélectionnez ensuite ![](/images/Reinforcement_ColumnRebars.svg) Armature pour colonne dans la barre d'outils des armatures.

3. Une boîte de dialogue apparaîtra à l'écran, comme indiqué ci-dessous.

:   ![](/images/ColumnReinforcementDialog_Ties.png)
:   Boîte de dialogue pour l'outil Armature en colonne de Arch

4. Sélectionnez le type d'armature en colonne souhaité.

5. Donnez des entrées pour les données relatives aux étriers.

6. Cliquez sur Suivant et la boîte de dialogue sera mise à jour comme indiqué ci-dessous.

:   ![](/images/ColumnReinforcementDialog_MainRebars.png)
:   Fenêtre de dialogue pour les données des armatures principales

7. Sélectionner le type d'armature souhaité et remplir les données pour les armatures principales.

8. Cliquez sur Suivant et la boîte de dialogue sera mise à jour comme indiqué ci-dessous.

:   ![](/images/ColumnReinforcementDialog_XDirRebars.png)
:   Boîte de dialogue pour les données selon la direction X des armatures

9. Sélectionnez le type d'armature désiré et remplissez les données pour les armatures selon la direction X.

10. Cliquez sur Suivant et la boîte de dialogue sera mise à jour comme indiqué ci-dessous.

:   ![](/images/ColumnReinforcementDialog_YDirRebars.png)
:   Boîte de dialogue pour les données selon la direction Y des armatures

11. Sélectionnez le type d'armature désiré et remplissez les données pour les armatures selon la direction Y.

12. Cliquez sur OK ou Appliquer pour générer une armature pour colonne.

13. Cliquez sur Annuler pour quitter la fenêtre de dialogue.

## Propriétés

**Ties:** étriers

* Données**Left Cover** : distance entre l'extrémité gauche de l'étrier et la face gauche de la structure.
* Données**Right Cover** : distance entre l'extrémité droite de l'étrier et la face droite de la structure.
* Données**Top Cover** : distance séparant la liaison de la face supérieure de la structure.
* Données**Bottom Cover** : distance séparant l'étrier de la face inférieure de la structure.
* Données**Offset** : distance séparant l'étrier de la face supérieure/inférieure de la structure.
* Données**Diameter** : diamètre de l'étrier.
* Données**Bent Angle** : l'angle courbé définit l'angle aux extrémités de l'étrier.
* Données**Extension Factor** : le facteur d'extension définit la longueur de la fin de l'étrier, exprimée en nombre de diamètre.
* Données**Number** : nombre d'étriers.
* Données**Spacing** : distance entre les axes de chaque étrier.

**Main Rebars:** armatures présentes aux coins de l'étrier

* Données**Rebar Type** : type d'armatures principales.
* Données**Hook Orientation** : orientation du crochet en forme de L.
* Données**Hook Extend Along** : direction de l'extension des crochets.
* Données**Hook Extension** : longueur du crochet des armatures en forme de L.
* Données**Rounding** : valeur arrondie à appliquer aux coins des barres d'armature en forme de L, exprimée en nombre de diamètre.
* Données**Top Offset** : distance entre les barres d'armature à partir de la face supérieure de la structure.
* Données**Bottom Offset** : distance entre les barres d'armature et la face inférieure de la structure.
* Données**Diameter** : diamètre des armatures principales.

**XDir Secondary Rebars:** armatures suivant la direction X sauf les armatures principales

* Données**Rebar Type** : type d'armatures dans la direction X.
* Données**Hook Orientation** : Orientation des crochets en forme de L.
* Données**Hook Extension** : longueur du crochet des armatures en forme de L.
* Données**Rounding** : valeur arrondie à appliquer aux coins des armatures en forme de L, exprimée en nombre de diamètre.
* Données**Top Offset** : distance entre les armatures à partir de la face supérieure de la structure.
* Données**Bottom Offset** : distance entre les armatures et la face inférieure de la structure.
* Données**Number#Diameter** : Number#Diameter ensemble des armatures dans la direction X.

**YDir Secondary Rebars:** armatures suivant la direction Y sauf les armature principales

* Données**Rebar Type** : type d'armatures de direction y.
* Données**Hook Orientation** : orientation des crochets en forme de L.
* Données**Hook Extension** : longueur du crochet des armatures en forme de L.
* Données**Rounding** : valeur arrondie à appliquer aux coins des armatures en forme de L, exprimée en nombre de diamètre.
* Données**Top Offset** : distance entre les armatures à partir de la face supérieure de la structure.
* Données**Bottom Offset** : distance entre les armatures et la face inférieure de la structure.
* Données**Number#Diameter** : Number#Diameter ensemble des armatures dans la direction Y.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr"), [Reinforcement API](/Reinforcement_API/fr "Reinforcement API/fr") et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L’outil Armature en colonne peut être utilisé dans une [macros](/Macros/fr "Macros/fr") et dans la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

### Créer un seul étrier pour quatre armatures

```
RebarGroup = makeSingleTieFourRebars(
    l_cover_of_tie,
    r_cover_of_tie,
    t_cover_of_tie,
    b_cover_of_tie,
    offset_of_tie,
    bent_angle,
    extension_factor,
    dia_of_tie,
    number_spacing_check,
    number_spacing_value,
    dia_of_rebars,
    t_offset_of_rebars,
    b_offset_of_rebars,
    rebar_type="StraightRebar",
    hook_orientation="Top Inside",
    hook_extend_along="x-axis",
    l_rebar_rounding=None,
    hook_extension=None,
    structure=None,
    facename=None,
).rebar_group

```

* Crée un objet `RebarGroup` à partir de la `structure` donnée, qui est une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr"), et de `facename`, qui est une face de cette structure.
  + Si ni `structure` ni `facename` n'est donné, la face sélectionnée par l'utilisateur sera entrée.
* `l_cover_of_tie`, `r_cover_of_tie`, `t_cover_of_tie`, `b_cover_of_tie` et `offset_of_tie` sont les distances de décalage intérieures des éléments d'ancrage par rapport aux faces de la structure. Ce sont respectivement les décalages gauche, droit, haut, bas et avant/arrière.
* `bent_angle` définit l'angle de la pointe de la boucle de l'armature.
* `extension_factor` définit la longueur de la pointe de la boucle de l'armature, exprimée en nombre de diamètre.
* `dia_of_tie` est le diamètre des étriers.
* `number_spacing_check` s'il est `True`, il créera autant d'étriers que ceux donnés par `number_spacing_value`; s'il s'agit de `False`, il créera des étriers séparés par la valeur numérique de `number_spacing_value`.
* `number_spacing_spue` spécifie le nombre d'étriers, ou la valeur de la séparation entre eux, en fonction de `number_spacing_check`.
* `dia_of_rebars` est le diamètre des armatures principales.
* `t_offset_of_rebars` et `b_offset_of_rebars` sont des distances de décalage internes pour les armatures principales par rapport aux faces supérieure et inférieure de la structure, respectivement.
* `rebar_type` est le type des armatures principales. il peut s'agir de `"StraightRebar"` ou de `"LShapeRebar"`.
* `hook_orientation` spécifie l'orientation du crochet en forme de L; il peut s'agir de: `"Top Inside"`, `"Top Outside"`, `"Bottom Inside"`, `"Bottom Outside"`, `"Top Right"`, `"Top Left"`, `"Bottom Right"` or `"Bottom Left"`.
* `hook_extend_along` spécifie la direction de l'extension du crochet; il peut s'agir de `"x-axis"` ou `"y-axis"`.
* `l_rebar_rounding` est le paramètre qui détermine le rayon de courbure des armatures principales en forme de L, exprimé en fois le diamètre.
* `hook_extension` est la longueur du crochet des armatures en forme de L.

#### Exemple

```
import FreeCAD, Draft, Arch
from ColumnReinforcement import SingleTie

# It doesn't work if the structure is not based on a face.
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure = Arch.makeStructure(Rect, height=1600)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

# For Straight Rebars

RebarGroup = SingleTie.makeSingleTieFourRebars(
    l_cover_of_tie=40,        
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_rebars=16,
    t_offset_of_rebars=40,
    b_offset_of_rebars=40,
    rebar_type="StraightRebar",
    hook_orientation="Top Inside",
    hook_extend_along="x-axis",
    l_rebar_rounding=None,
    hook_extension=None,
    structure=Structure,
    facename="Face6",
).rebar_group

# For LShaped Rebars with hook along x-axis

RebarGroup = SingleTie.makeSingleTieFourRebars(
    l_cover_of_tie=40,        
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_rebars=16,
    t_offset_of_rebars=-40,
    b_offset_of_rebars=-40,
    rebar_type="LShapeRebar",
    hook_orientation="Top Outside",
    hook_extend_along="x-axis",
    l_rebar_rounding=2,
    hook_extension=40,
    structure=Structure,
    facename="Face6",
).rebar_group

# For LShaped Rebars with hook along y-axis

RebarGroup = SingleTie.makeSingleTieFourRebars(
    l_cover_of_tie=40,        
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_rebars=16,
    t_offset_of_rebars=-40,
    b_offset_of_rebars=-40,
    rebar_type="LShapeRebar",
    hook_orientation="Top Outside",
    hook_extend_along="y-axis",
    l_rebar_rounding=2,
    hook_extension=40,
    structure=Structure,
    facename="Face6",
).rebar_group

```

### Créer un seul étrier pour plusieurs armatures

```
RebarGroup = makeSingleTieMultipleRebars(
    l_cover_of_tie,
    r_cover_of_tie,
    t_cover_of_tie,           
    b_cover_of_tie,                      
    offset_of_tie,                       
    bent_angle,                          
    extension_factor,
    dia_of_tie,     
    number_spacing_check,
    number_spacing_value,
    dia_of_main_rebars,
    main_rebars_t_offset,
    main_rebars_b_offset,
    main_rebars_type="StraightRebar",
    main_hook_orientation="Top Inside",
    main_hook_extend_along="x-axis",
    l_main_rebar_rounding=None,
    main_hook_extension=None,
    sec_rebars_t_offset=None,
    sec_rebars_b_offset=None,
    sec_rebars_number_diameter=None,
    sec_rebars_type=("StraightRebar", "StraightRebar"),
    sec_hook_orientation=("Top Inside", "Top Inside"),
    l_sec_rebar_rounding=None,
    sec_hook_extension=None,
    structure=None,
    facename=None,
)

```

* Crée un objet `RebarGroup` à partir de la `structure` donnée, qui est une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr"), et de `facename`, qui est une face de cette structure.
  + Si ni `structure` ni `facename` ne sont donnés, la face sélectionnée par l'utilisateur sera entrée.
* `l_cover_of_tie`, `r_cover_of_tie`, `t_cover_of_tie`, `b_cover_of_tie` et `offset_of_tie` sont les distances de décalage intérieures entre les éléments d'ancrage et les faces de la structure. Il s'agit respectivement des décalages gauche, droit, supérieur, inférieur et avant/arrière..
* `bent_angle` définit l'angle de la pointe de la boucle de l'armature.
* `extension_factor` définit la longueur de la pointe de la boucle de l'armature, exprimée en nombre de diamètre.
* `dia_of_tie` est le diamètre des étriers.
* `number_spacing_check` en position `True`, il créera autant d'étriers que ceux donnés par `number_spacing_value`. Mis à `False`, il créera des étriers séparés par la valeur numérique de `number_spacing_value`.
* `number_spacing_spue` spécifie le nombre des étriers, ou la valeur de la séparation entre eux, en fonction de `number_spacing_check`.
* `dia_of_main_rebars` est le diamètre des armatures principales.
* `main_rebars_t_offset` et `main_rebars_b_offset` sont des distances de décalage internes pour les armatures principales par rapport aux faces supérieure et inférieure de la structure, respectivement.
* `main_rebars_type` est le type des armatures principales. Il peut s'agir de `"StraightRebar"` ou de `"LShapeRebar"`.
* `main_hook_orientation` spécifie l'orientation du crochet principal de forme L. Il peut s'agir de: `"Top Inside"`, `"Top Outside"`, `"Bottom Inside"`, `"Bottom Outside"`, `"En haut à droite"`, `"En haut à gauche"`, `"En bas à droite"` ou `"En bas à gauche"`.
* `main_hook_extend_along` spécifie la direction de l'extension du crochet principal. Il peut s'agir de `"axe x"` ou de `"axe y"`.
* `l_main_rebar_rebar_rounding` est le paramètre qui détermine le rayon de courbure des barres d'armature principales en forme de LS, exprimé en nombre de diamètre.
* `main_hook_extension` est la longueur du crochet des barres d'armature principales en L.
* `sec_rebars_t_offset` et `sec_rebars_b_offset` sont respectivement des tuples (xdir\_rebars\_t\_offset, ydir\_rebars\_t\_offset) et (xdir\_rebars\_b\_offset, ydir\_rebars\_b\_offset), qui définit les distances de décalage intérieures des barres d'armature secondaires à axe des x et à axe des y par rapport aux faces supérieure et inférieure de la structure, respectivement.
* `sec_rebars_number_diameter` est un tuple (xdir\_rebars\_number\_diameter, ydir\_rebars\_number\_diameter) qui définit l'ensemble nombre#diamètre des armatures secondaires des directions x et y, respectivement.
* `sec_rebars_type` est un tuple (xdir\_rebars\_type, ydir\_rebars\_type) qui définit le type de barres d'armature secondaires en direction x et en direction y, respectivement. Il peut prendre pour valeur `"StraightRebar"` ou `"LShapeRebar"` comme type de barre.
* `sec_hook_orientation` est un tuple (xdir\_hook\_orientation, ydir\_hook\_orientation) qui définit l'orientation de la direction secondaire x et de la direction y du crochet en L. Il peut prendre pour valeur `"Top Inside"`, `"Top Outside"`, `"Bottom Inside"`, `"Bottom Outside"`, `"Bottom Outside"`, `"Top Right"`, `"Top Left"`, `"Bottom Left"`.
* `l_sec_rebar_rounding` est un tuple (l\_xdir\_rebar\_rounding, l\_ydir\_rebar\_rounding) qui détermine le rayon de courbure des armatures secondaires en X et en Y en forme de L, exprimé en nombre de diamètre des barres en L en direction x et y respectivement.
* `sec_hook_extension` est un tuple (xdir\_hook\_extension, ydir\_hook\_extension) qui définit la longueur du crochet des armatures secondaires en forme de L en direction x et y.

#### Exemple

```
import FreeCAD, Draft, Arch
from ColumnReinforcement import SingleTieMultipleRebars

# It doesn't work if the structure is not based on a face
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure = Arch.makeStructure(Rect, height=1600)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

RebarGroup = SingleTieMultipleRebars.makeSingleTieMultipleRebars(
    l_cover_of_tie=40,        
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_main_rebars=16,
    main_rebars_t_offset=-40,
    main_rebars_b_offset=-40,
    main_rebars_type="LShapeRebar",
    main_hook_orientation="Top Outside",
    main_hook_extend_along="x-axis",
    l_main_rebar_rounding=2,
    main_hook_extension=40,
    sec_rebars_t_offset=(-40, -40),
    sec_rebars_b_offset=(-40, -40),
    sec_rebars_number_diameter=("2#20mm+1#16mm+2#20mm", "1#20mm+1#16mm+1#20mm"),
    sec_rebars_type=("LShapeRebar", "LShapeRebar"),
    sec_hook_orientation=("Top Outside", "Top Outside"),
    l_sec_rebar_rounding=(2, 2),
    sec_hook_extension=(40, 40),
    structure=Structure,
    facename="Face6",
)

```

### Éditer un seul étrier pour quatre armatures

Vous pouvez modifier les propriétés des étriers et des armatures avec la fonction suivante :

```
rebar_group = editSingleTieFourRebars(
    rebar_group,
    l_cover_of_tie,
    r_cover_of_tie,    
    t_cover_of_tie,           
    b_cover_of_tie,
    offset_of_tie,
    bent_angle,
    extension_factor,
    dia_of_tie,
    number_spacing_check,
    number_spacing_value,
    dia_of_rebars,
    t_offset_of_rebars,
    b_offset_of_rebars,
    rebar_type="StraightRebar",
    hook_orientation="Top Inside",
    hook_extend_along="x-axis",
    l_rebar_rounding=None,
    hook_extension=None,
    structure=None,
    facename=None,
)

```

* `rebar_group` est un objet de groupe `ColumnReinforcement` créé précédemment.
* Les autres paramètres sont les mêmes que ceux requis par la fonction `makeSingleTieFourRebars()`.
* `structure` et `facename` peuvent être omis afin que l'armature reste dans la structure d'origine.

#### Exemple

```
from ColumnReinforcement import SingleTie

rebar_group = SingleTie.editSingleTieFourRebars(
    rebar_group,                                
    l_cover_of_tie=40,        
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_rebars=16,
    t_offset_of_rebars=-40,
    b_offset_of_rebars=-40,
    rebar_type="LShapeRebar",
    hook_orientation="Top Outside",
    hook_extend_along="x-axis",
    l_rebar_rounding=2,
    hook_extension=40,
    structure=None,
    facename=None,
)

```

### Éditer un seul étrier pour plusieurs armatures

Vous pouvez modifier les propriétés des étriers et des armatures avec la fonction suivante :

```
rebar_group = editSingleTieMultipleRebars(
    rebar_group,
    l_cover_of_tie,      
    r_cover_of_tie,       
    t_cover_of_tie,                       
    b_cover_of_tie,                       
    offset_of_tie,                        
    bent_angle,
    extension_factor,
    dia_of_tie,
    number_spacing_check,
    number_spacing_value,
    dia_of_main_rebars,
    main_rebars_t_offset,
    main_rebars_b_offset,
    main_rebars_type="StraightRebar",
    main_hook_orientation="Top Inside",
    main_hook_extend_along="x-axis",
    l_main_rebar_rounding=None,
    main_hook_extension=None,
    sec_rebars_t_offset=None,
    sec_rebars_b_offset=None,
    sec_rebars_number_diameter=None,
    sec_rebars_type=("StraightRebar", "StraightRebar"),
    sec_hook_orientation=("Top Inside", "Top Inside"),
    l_sec_rebar_rounding=None,
    sec_hook_extension=None,
    structure=None,
    facename=None,
)

```

* `rebar_group` est un objet de groupe `ColumnReinforcement` créé précédemment.
* Les autres paramètres sont les mêmes que ceux requis par la fonction `makeSingleTieFourRebars()`.
* `structure` et `facename` peuvent être omis afin que l'armature reste dans la structure d'origine.

#### Exemple

```
from ColumnReinforcement import SingleTieMultipleRebars

rebar_group = SingleTieMultipleRebars.editSingleTieMultipleRebars(
    rebar_group,                                
    l_cover_of_tie=40,        
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_main_rebars=16,
    main_rebars_t_offset=-40,
    main_rebars_b_offset=-40,
    main_rebars_type="LShapeRebar",
    main_hook_orientation="Top Outside",
    main_hook_extend_along="x-axis",
    l_main_rebar_rounding=2,
    main_hook_extension=40,
    sec_rebars_t_offset=(-40, -40),
    sec_rebars_b_offset=(-40, -40),
    sec_rebars_number_diameter=("2#20mm+1#16mm+2#20mm", "1#20mm+1#16mm+1#20mm"),
    sec_rebars_type=("StraightRebar", "StraightRebar"),
    sec_hook_orientation=None,
    l_sec_rebar_rounding=None,
    sec_hook_extension=None,
    structure=None,
    facename=None,
)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_ColumnRebars/fr&oldid=1539533>"