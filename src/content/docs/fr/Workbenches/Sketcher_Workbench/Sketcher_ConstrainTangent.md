---
title: Sketcher Contrainte tangente
---
|  |
| --- |
| Sketcher Contrainte tangente |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Contrainte tangente ou colinéaire |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| T |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Sketcher_ConstrainTangent.svg) Sketcher Contrainte tangente permet de contraindre deux arêtes, ou une arête et un axe, à être tangentes. Les lignes sont traitées comme infinies et les courbes ouvertes sont virtuellement étendues. La contrainte peut également relier deux arêtes, les obligeant à être tangentes au niveau de la jonction. Si deux lignes sont sélectionnées, ou une ligne et l'extrémité d'une autre ligne, les lignes deviennent colinéaires.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

### [Mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr")

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_ConstrainTangent.svg) Contrainte tangente ou colinéaire.
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisse → ![](/images/Sketcher_ConstrainTangent.svg) Contrainte tangente ou colinéaire** du menu.
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Contrainte → ![](/images/Sketcher_ConstrainTangent.svg) Contrainte tangente ou colinéaire** du menu contextuel.
   * Utilisez le raccourci clavier : T.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Effectuez l'une des opérations suivantes :
   * Sélectionnez deux arêtes. Les arêtes peuvent être n'importe quelle arête sauf une B-spline.
   * Sélectionnez un point et deux arêtes (dans cet ordre).
   * Sélectionnez une arête, un point et une autre arête (idem).
5. Une contrainte de tangente est ajoutée. Si un point et deux arêtes ont été sélectionnés, jusqu'à deux [contraintes Point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") peuvent également être ajoutées. Voir [Exemples](#Entre_deux_arêtes_en_un_point).
6. Il est possible de continuer à créer des contraintes.
7. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

### Mode unique

1. Faites l'une des choses suivantes :
   * Sélectionnez deux arêtes (voir ci-dessus).
   * Sélectionnez deux points d'extrémité appartenant à des arêtes différentes.
   * Sélectionnez une arête et l'extrémité d'une autre arête (dans n'importe quel ordre).
   * Sélectionnez un point et deux arêtes (idem).
2. Lancez l'outil comme expliqué ci-dessus ou avec l'option supplémentaire suivante :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_ConstrainTangent.svg) Contrainte tangente ou colinéaire** du menu contextuel.
3. Une contrainte de tangente est ajoutée. Si un point et deux arêtes ont été sélectionnés, jusqu'à deux [contraintes Point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") peuvent également être ajoutés. Voir [Exemples](#Entre_deux_arêtes_en_un_point).

## Exemples

### Entre deux arêtes

![](/images/Sketcher_ConsraintTangent_mode1.png)

Les deux arêtes sont rendues tangentes. Si l'une des arêtes est une [conique](/Sketcher_Workbench/fr#Sketcher_CompCreateConic "Sketcher Workbench/fr"), un objet [Point](/Sketcher_CreatePoint/fr "Sketcher CreatePoint/fr") qui a une [contrainte Point sur objet](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") avec les deux arêtes (étendues) est ajouté.

Il n'est pas recommandé de reconstruire le point de tangence en créant manuellement un point et en le contraignant à se situer sur les deux courbes. Cela fonctionnera, mais la convergence sera beaucoup plus lente, plus saccadée et nécessitera environ deux fois plus d'itérations pour converger que la normale. Si le point de tangence est nécessaire, sélectionnez plutôt deux arêtes et un point existant.

### Entre deux extrémités

![](/images/Sketcher_ConsraintTangent_mode2.png)

Les extrémités coïncident et l'angle entre les arêtes à ce point est fixé à 180° (lisse) ou à 0° (saillant), en fonction de la position des arêtes avant l'application de la contrainte.

### Entre une arête et une extrémité

![](/images/Sketcher_ConsraintTangent_mode3.png)

L'extrémité d'une arête est contrainte de se trouver sur l'autre arête, et les arêtes sont rendues tangentes à ce point.

### Entre deux arêtes en un point

![](/images/Sketcher_ConsraintTangent_mode4.png)

Les deux arêtes sont rendues tangentes en un point donné. Le point peut être n'importe quel point, par exemple le centre d'un cercle, l'extrémité d'une arête ou l'origine, il peut appartenir à l'une ou l'autre des arêtes ou aux deux, et il peut également être un [objet Point](/Sketcher_CreatePoint/fr "Sketcher CreatePoint/fr"). Si nécessaire, des [contrainte(s) de point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") sont ajoutées pour s'assurer que le point se trouve sur les deux arêtes (étendues). Ces contraintes supplémentaires sont appelées [contraintes d'aide](/Sketcher_helper_constraint/fr "Sketcher helper constraint/fr").

Par rapport à la tangence directe, cette contrainte est plus lente, car elle implique plus de degrés de liberté, mais si le point de tangence est nécessaire, elle est recommandée car elle offre une meilleure convergence.

### Entre deux lignes

![](/images/Sketcher_ConstraintTangent_mode5.png)

Les deux lignes sont rendues colinéaires.

## Programmation

La Contrainte tangente peut être créée à partir de [macros](/Macros/fr "Macros/fr") et de la console de [Python](/Python/fr "Python/fr") en utilisant les éléments suivants :

```
# direct tangency
Sketch.addConstraint(Sketcher.Constraint('Tangent',icurve1,icurve2))

# point-to-point tangency
Sketch.addConstraint(Sketcher.Constraint('Tangent',icurve1,pointpos1,icurve2,pointpos2))

# point-to-curve tangency
Sketch.addConstraint(Sketcher.Constraint('Tangent',icurve1,pointpos1,icurve2))

# tangent-via-point (plain constraint, helpers are not added automatically)
Sketch.addConstraint(Sketcher.Constraint('TangentViaPoint',icurve1,icurve2,geoidpoint,pointpos))

```

où :

:   * `Sketch` est un objet esquisse.
    * `icurve1`, `icurve2` sont deux entiers identifiant les courbes à faire tangenter. Les entiers sont des indices dans l'esquisse (les valeurs retournées par `Sketch.addGeometry`).
    * `pointpos1`, `pointpos2` devrait être `1` pour point de départ et `2` pour le point de fin.
    * `geoidpoint` et `pointpos` dans `TangentViaPoint` sont les indices précisant le point de tangence.

La page [Sketcher Scripts](/Sketcher_scripting/fr "Sketcher scripting/fr") explique les valeurs qui peuvent être utilisées pour `incurve1`, `incurve2`, `pointpos1`, `pointpos2`, `geoidpoint` et `pointpos` et contient d'autres exemples sur la façon de créer des contraintes à partir de scripts Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainTangent/fr&oldid=1499923>"