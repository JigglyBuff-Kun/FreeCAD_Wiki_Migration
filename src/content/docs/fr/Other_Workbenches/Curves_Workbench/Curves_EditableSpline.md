---
title: Curves B-spline
---
|  |
| --- |
| Curves B-spline |
| Emplacement du menu |
| Curves → Freehand BSpline |
| Ateliers |
| [Curves](/Curves_Workbench/fr "Curves Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Curves_EditableSpline.svg) **Curves B-spline** crée une courbe B-spline à main levée.

## Utilisation

1. Vous pouvez sélectionner des sommets, des arêtes et/ou des faces :
   * Le nombre de sommets de la spline correspondra au nombre d'éléments sélectionnés.
   * Les sommets de la spline s'accrocheront aux sommets sélectionnés et aux points médians des arêtes et des faces sélectionnées.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_EditableSpline.svg) Freehand BSpline.
   * Sélectionnez l'option **Curves → ![](/images/Curves_EditableSpline.svg) Freehand BSpline** du menu.
3. Un objet **Freehand\_BSpline** est créé et placé dans un mode d'édition spécial.
4. Faites glisser la spline dans la forme souhaitée. Voir les options ci-dessous pour plus de détails
5. Appuyez sur Q, ou cliquez avec le bouton droit de la souris sur la spline dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et sélectionnez l'option **Finish editing** dans le menu contextuel pour quitter le mode d'édition et terminer la commande.

## Options

Pendant la commande, un mode d'édition spécial est actif et il y a plusieurs actions et comportements qui peuvent être contrôlés par des touches et des clics de souris.

* Pour déplacer un sommet ou une ligne de guidage (les lignes de guidage sont les lignes droites entre les sommets), maintenez le bouton gauche de la souris enfoncé et déplacez la souris.
* La touche A sélectionne ou désélectionne tous les sommets et lignes de guidage.
* La touche I ajoute un sommet au segment appartenant à la ligne de guidage sélectionnée. Le nouveau sommet sera sélectionné.
* La touche T active ou désactive le mode tangent pour les sommets ou lignes de guidage sélectionnés (par rapport à la direction de la vue).
* La touche P aligne les objets sélectionnés.
* La touche S peut être utilisée pour accrocher un sommet à un sommet appartenant à une autre B-spline. Un sommet de la courbe B-spline en cours d'édition étant sélectionné, maintenez la touche Ctrl enfoncée et ajoutez le sommet cible à la sélection, puis appuyez sur la touche S. Les sommets sont accrochés ensemble.
* Pour désassembler les sommets, sélectionnez la paire de sommets assemblés et appuyez à nouveau sur la touche S. Le sommet de la courbe B-spline en cours d'édition reste sélectionné et peut maintenant être déplacé.
* La touche L active ou désactive l'interpolation linéaire.
* Les touches X, Y ou Z peuvent être utilisées pour contraindre le mouvement de l'objet que l'on fait glisser. Tout en faisant glisser l'objet, appuyez sur la touche de l'axe souhaité. Appuyez à nouveau sur la même touche pour désactiver la contrainte.
* La touche Q termine la commande et quitte le mode d'édition.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **Freehand\_BSpline** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Profile

* Données**Data** (`VectorList`) : liste de données.
* Données**Data Type** (`IntegerList`) : types de points interpolés.
* Données**Flags** (`BoolList`) : indicateurs de tangente.
* Données**Linear Segments** (`BoolList`) : indicateurs de segments linéaires.
* Données**Parametrization** (`FloatConstraint`) : facteur de paramétrisation.
* Données**Periodic** (`Bool`) : courbe périodique.
* Données**Support** (`LinkSubList`) : formes de contrainte.
* Données**Tangents** (`VectorList`) : liste des tangentes.
* Données**Tolerance** (`Float`) : tolérance.

## Script

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_EditableSpline/fr&oldid=1566961>"