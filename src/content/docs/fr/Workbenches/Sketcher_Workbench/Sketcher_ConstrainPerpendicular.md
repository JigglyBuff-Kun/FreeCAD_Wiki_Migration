---
title: Sketcher Contrainte perpendiculaire
---
|  |
| --- |
| Sketcher Contrainte perpendiculaire |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Contrainte perpendiculaire |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| N |
| Introduit dans la version |
| - |
| Voir aussi |
| [Sketcher Contrainte angulaire](/Sketcher_ConstrainAngle/fr "Sketcher ConstrainAngle/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_ConstrainPerpendicular.svg) Sketcher Contrainte perpendiculaire permet de contraindre deux lignes à être perpendiculaires, ou deux arêtes, ou une arête et un axe, à être perpendiculaires à leur intersection. Les lignes sont considérées comme infinies et les courbes ouvertes sont virtuellement étendues. La contrainte peut également relier deux arêtes, les obligeant à être perpendiculaires à la jonction.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

### [Mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr")

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_ConstrainPerpendicular.svg) Contrainte perpendiculaire.
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisse → ![](/images/Sketcher_ConstrainPerpendicular.svg) Contrainte perpendiculaire** du menu.
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Contrainte → ![](/images/Sketcher_ConstrainPerpendicular.svg) Contrainte perpendiculaire** du menu contextuel.
   * Utilisez le raccourci clavier : N.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Faites l'une des choses suivantes :
   * Sélectionnez deux arêtes. L'une des arêtes doit être une ligne droite ou un axe. L'autre peut être n'importe quelle arête à l'exception d'une B-spline.
   * Sélectionnez un point et deux arêtes (dans cet ordre).
   * Sélectionnez une arête, un point et une autre arête (idem).
5. Une contrainte perpendiculaire est ajoutée. Si un point et deux arêtes ont été sélectionnés, jusqu'à deux [contraintes Point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") peuvent également être ajoutées. Voir [Exemples](#Entre_deux_arêtes_au_point).
6. Il est possible de continuer à créer des contraintes.
7. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

### Mode unique

1. Faites l'une des choses suivantes :
   * Sélectionnez deux arêtes (voir ci-dessus).
   * Sélectionnez deux points d'extrémité appartenant à des arêtes différentes.
   * Sélectionnez une arête et l'extrémité d'une autre arête (dans n'importe quel ordre).
   * Sélectionnez un point et deux arêtes (idem).
   * Lancez l'outil comme expliqué ci-dessus, ou avec l'option supplémentaire suivante :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_ConstrainPerpendicular.svg) Contrainte perpendiculaire** dans le menu contextuel.
2. Une contrainte de perpendicularité est ajoutée. Si un point et deux arêtes ont été sélectionnés, jusqu'à deux [contraintes point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") peuvent également être ajoutées. Voir [Exemples](#Entre_deux_arêtes_au_point).

## Exemples

### Entre deux arêtes

![](/images/Sketcher_ConsraintPerpendicular_mode1.png)

Les deux arêtes sont rendues perpendiculaires à leur intersection (virtuelle). Si l'une des arêtes est une [conique](/Sketcher_Workbench/fr#Sketcher_CompCreateConic "Sketcher Workbench/fr"), un objet [Point](/Sketcher_CreatePoint/fr "Sketcher CreatePoint/fr") qui a une [contrainte Point sur objet](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") avec les deux arêtes (étendues) est ajouté.

### Entre deux extrémités

![](/images/Sketcher_ConsraintPerpendicular_mode2.png)

Les extrémités coïncident et les arêtes sont perpendiculaires à ce point.

### Entre une arête et une extrémité

![](/images/Sketcher_ConsraintPerpendicular_mode3.png)

L'extrémité d'une arête est contrainte de se trouver sur l'autre arête, et les arêtes sont rendues perpendiculaires à ce point.

### Entre deux arêtes en un point

![](/images/Sketcher_ConsraintPerpendicular_mode4.png)

Les deux arêtes sont rendues perpendiculaires en un point donné. Le point peut être n'importe quel point, par exemple le centre d'un cercle, l'extrémité d'une arête ou l'origine, il peut appartenir à l'une ou l'autre des arêtes ou aux deux, et il peut également être un [objet Point](/Sketcher_CreatePoint/fr "Sketcher CreatePoint/fr"). Si nécessaire, des [contrainte(s) de point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") sont ajoutées pour s'assurer que le point se trouve sur les deux arêtes (étendues). Ces contraintes supplémentaires sont appelées [contraintes d'aide](/Sketcher_helper_constraint/fr "Sketcher helper constraint/fr").

## Scripts

La Contrainte perpendiculaire peut être créée à partir de [macros](/Macros/fr "Macros/fr") et de la console Python en utilisant ce qui suit :

```
# direct perpendicularity
Sketch.addConstraint(Sketcher.Constraint('Perpendicular',icurve1,icurve2))

# point-to-point perpendicularity
Sketch.addConstraint(Sketcher.Constraint('Perpendicular',icurve1,pointpos1,icurve2,pointpos2))

# point-to-curve perpendicularity
Sketch.addConstraint(Sketcher.Constraint('Perpendicular',icurve1,pointpos1,icurve2))

# perpendicular-via-point (plain constraint, helpers are not added automatically)
Sketch.addConstraint(Sketcher.Constraint('PerpendicularViaPoint',icurve1,icurve2,geoidpoint,pointpos))

```

où :

:   * `Sketch` est un objet d'esquisse
    * `icurve1`, `icurve2` sont deux entiers identifiant les courbes à rendre perpendiculaires. Les entiers sont des indices dans l'esquisse (la valeur, renvoyée par `Sketch.addGeometry`).
    * `pointpos1`, `pointpos2` doivent être `1` pour le point de départ et `2` pour le point d'arrivée.
    * `point géoïde` et `pointpos` dans PerpendicularViaPoint sont les indices spécifiant le point de perpendicularité.

La page [Sketcher Scripts](/Sketcher_scripting/fr "Sketcher scripting/fr") explique les valeurs qui peuvent être utilisées pour `icurve1`, `icurve2`, `pointpos1`, `pointpos2` et `geoidpoint` et contient d'autres exemples sur la façon de créer des contraintes à partir de scripts Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainPerpendicular/fr&oldid=1410788>"