---
title: Sketcher Augmenter la multiplicité d'un nœud
---
|  |
| --- |
| Sketcher Augmenter la multiplicité d'un nœud |
| Emplacement du menu |
| Esquisse → Outils d'esquisse des B-splines → Augmenter la multiplicité de noeuds |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Sketcher Diminuer la multiplicité d'un nœud](/Sketcher_BSplineDecreaseKnotMultiplicity/fr "Sketcher BSplineDecreaseKnotMultiplicity/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) Sketcher Augmenter la multiplicité d'un nœud augmente la multiplicité d'un nœud des [B-splines](/B-Splines "B-Splines").

## Utilisation

1. Sélectionnez un nœud d'une B-spline.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) Augmenter la multiplicité du nœud.
   * Sélectionnez l'option **Esquisse → Outils d'esquisse des B-splines → ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) Augmenter la multiplicité du nœud** du menu.

## Exemple

Les B-splines sont essentiellement une combinaison de [courbes de Bézier](/B-Splines/fr#Courbes_de_B.C3.A9zier "B-Splines/fr") (bien expliquées dans les vidéos [ici](https://www.youtube.com/watch?v=bE1MrrqBAl8) et [ici](https://www.youtube.com/watch?v=xXJylM2S72s)). Les points où deux courbes de Bézier sont connectés sont appelés des noeuds. Un noeud de multiplicité *m* sur une B-spline de degré *d* signifie que la courbe à gauche et à droite du noeud a au moins une dérivée d'ordre égal à *n* (appelée continuité *C**n*) où *n = d - m*.

Dans cette B-spline cubique (degré 3), il y a 3 segments, ce qui signifie que 3 courbes sont connectées à 2 nœuds. Les nœuds ont une multiplicité de 1.

La multiplicité est indiquée par les nombres entre crochets. Voir ![](/images/Sketcher_BSplineKnotMultiplicity.svg) [Multiplicité des nœuds d'une B-spline](/Sketcher_BSplineKnotMultiplicity/fr "Sketcher BSplineKnotMultiplicity/fr").

![](/images/Sketcher_KnotMultiplicity_multiplicity1.png)

B-spline où deux nœuds ont une multiplicité de 1.

Une multiplicité de 3 modifie cette B-spline de sorte que même les dérivées du premier ordre ne sont pas égales (continuité *C0*). Voici la même B-spline où la multiplicité du nœud à gauche a été augmentée à 3 :

![](/images/Sketcher_KnotMultiplicity_multiplicity3.png)

Même B-spline d'en haut avec une multiplicité de nœuds 3. Un point de contrôle a été déplacé pour montrer que le nœud a une continuité 'C0*.*

La conséquence d'une multiplicité plus élevée est qu'au prix d'une perte de continuité, on obtient un contrôle local. Cela signifie que la modification d'un point de contrôle n'affectera la B-spline que localement.

C'est ce que montre cet exemple, où la B-spline avec la multiplicité 1 de nœuds de la première image ci-dessus a été prise, et le deuxième point de contrôle en partant de la droite a été déplacé vers le haut. En conséquence, la forme complète de la B-spline a changé :

![](/images/Sketcher_KnotMultiplicity_locality1.png)

Après avoir augmenté la multiplicité des nœuds à 2, le déplacement du deuxième point de contrôle à partir de la droite entraîne des changements significatifs sur le côté droit de la forme uniquement :

![](/images/Sketcher_KnotMultiplicity_locality2.png)

## Remarques

* La multiplicité des nœuds peut également être augmentée avec [Sketcher Insérer un nœud dans une B-spline](/Sketcher_BSplineInsertKnot/fr "Sketcher BSplineInsertKnot/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineIncreaseKnotMultiplicity/fr&oldid=1409025>"