---
title: Sketcher Diminuer la multiplicité d'un nœud
---
|  |
| --- |
| Sketcher Diminuer la multiplicité d'un nœud |
| Emplacement du menu |
| Esquisse → Outils d'esquisse des B-splines → Diminuer la multiplicité du nœud |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Sketcher Augmenter la multiplicité d'un nœud](/Sketcher_BSplineIncreaseKnotMultiplicity/fr "Sketcher BSplineIncreaseKnotMultiplicity/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) Sketcher Diminuer la multiplicité d'un nœud diminue la multiplicité d'un nœud des [B-splines](/B-Splines "B-Splines").

## Utilisation

1. Sélectionnez un nœud d'une B-spline.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) Diminuer la multiplicité du nœud.
   * Sélectionnez l'option **Esquisse → Outils d'esquisse des B-splines → ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) Diminuer la multiplicité du nœud** du menu.

## Exemple

Voir [Sketcher Augmenter la multiplicité d'un nœud](/Sketcher_BSplineIncreaseKnotMultiplicity/fr#Exemple "Sketcher BSplineIncreaseKnotMultiplicity/fr")

## Remarques

Si vous réduisez la multiplicité d'un nœud à zéro, le nœud disparaît. Mathématiquement, il apparaît alors zéro fois dans le vecteur nœud, ce qui signifie qu'il n'y a plus de fonction de base. Pour comprendre cela, il faut faire un peu de mathématiques, mais c'est également clair si vous regardez la multiplicité. Par exemple, un nœud de multiplicité 0 sur une B-spline de degré 3 signifie qu'à la position du nœud, deux courbes de Bézier sont connectées avec une continuité *C3*. La dérivée troisième doit donc être égale des deux côtés du nœud. Cependant, pour une courbe de Bézier cubique, cela signifie que les deux côtés doivent faire partie de la même courbe. Il n'y a donc plus de nœud reliant deux courbes de Bézier.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineDecreaseKnotMultiplicity/fr&oldid=1408998>"