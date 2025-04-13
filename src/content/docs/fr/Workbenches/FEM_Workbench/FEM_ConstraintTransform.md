---
title: FEM Système de coordonnées locales
---
|  |
| --- |
| FEM Système de coordonnées locales |
| Emplacement du menu |
| Modèle → Fonctions d'analyse géométrique → Système de coordonnées locales |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Contrainte multi-points selon un plan](/FEM_ConstraintPlaneRotation/fr "FEM ConstraintPlaneRotation/fr") |
|  |

| Solveurs |
| --- |
| CalculiX |

## Description

Cette commande transforme le système de coordonnées d'une face en un système de coordonnées défini par l'utilisateur (rectangulaire ou cylindrique). Ce système de coordonnées affecte les conditions limites et les définitions des charges. Par exemple, vous pouvez l'utiliser pour fixer les déplacements dans la direction normale d'une face inclinée ou appliquer des conditions limites dans les directions radiales et tangentielles pour les faces cylindriques. Il suffit de sélectionner la composante appropriée de la [condition limite de déplacement](/FEM_ConstraintDisplacement/fr "FEM ConstraintDisplacement/fr").

## Utilisation

1. Appliquez d'abord une [Condition limite de déplacement](/FEM_ConstraintDisplacement/fr "FEM ConstraintDisplacement/fr") ou une [charge d'effort](/FEM_ConstraintForce/fr "FEM ConstraintForce/fr") à une face.
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ConstraintTransform.svg) Système de coordonnées locales.
   * Sélectionnez l'option **Modèle → Fonctions d'analyse géométrique → ![](/images/FEM_ConstraintTransform.svg) Système de coordonnées locales** du menu.
3. Sélectionnez la transformation rectangulaire ou cylindrique. La première peut être appliquée à n'importe quelle face, la seconde n'est disponible que pour les faces cylindriques.
4. Sélectionnez une face à laquelle la condition limite de déplacement ou la charge d'effort a été précédemment appliquée. Appuyez sur le bouton Ajouter.
5. Pour une transformation rectangulaire, spécifiez une rotation autour de chacun des trois axes. Les flèches affichées sur la face représentent les nouvelles directions (X - rouge, Y - vert et Z - bleu).

![](/images/FEM_transform_rect_displ.PNG)

Système de coordonnées locales rectangulaires défini pour une face inclinée. Les flèches longues et fines indiquent le système de coordonnées global, les flèches courtes et épaisses représentent le système de coordonnées local. La condition limite de déplacement avec un déplacement en Z fixe (axe bleu, perpendiculaire à la face dans le système de coordonnées local) a été appliquée en premier (cachée dans l'image). Cela simule un support de rouleau avec la pièce pouvant glisser le long de cette face.

![](/images/FEM_transform_cyl_displ.PNG)

Transformation cylindrique pour une face cylindrique. La direction globale en X (rouge) devient toujours la direction radiale locale. En la fixant via une condition limite de déplacement, cela empêche l'expansion radiale mais pas la rotation autour du trou. Il faudrait pour cela fixer la direction tangentielle (Y dans les axes globaux). La troisième direction (globale Z) est axiale.

![](/images/FEM_transform_cyl_force.PNG)

Transformation cylindrique pour une face cylindrique. La force (flèches violettes) appliquée dans la direction globale en Y devient une force appliquée dans la direction tangentielle (couple). L'arbre est tordu.

## Limitations

* La transformation cylindrique ne peut être appliquée qu'aux faces cylindriques.

## Remarques

* Cette fonction peut être utilisée pour simuler la torsion mais uniquement pour les barres cylindriques ou les pièces contenant de telles barres utilisées pour transmettre un couple.
* La fonction utilise le [jeu de paramètres \*TRANSFORM de CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node253.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintTransform/fr&oldid=1541832>"