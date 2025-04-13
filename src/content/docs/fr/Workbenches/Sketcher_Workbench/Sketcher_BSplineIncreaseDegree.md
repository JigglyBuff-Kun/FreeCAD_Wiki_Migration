---
title: Sketcher Augmenter le degré d'une B-spline
---
|  |
| --- |
| Sketcher Augmenter le degré d'une B-spline |
| Emplacement du menu |
| Esquisse → Outils d'esquisse des B-splines → Augmenter le degré d'une B-spline |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Sketcher Diminuer le degré d'une B-spline](/Sketcher_BSplineDecreaseDegree/fr "Sketcher BSplineDecreaseDegree/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_BSplineIncreaseDegree.svg) Sketcher Augmenter le degré d'une B-spline augmente le degré (l'ordre) des [B-splines](/B-Splines/fr "B-Splines/fr").

## Utilisation

1. Sélectionnez une ou plusieurs B-splines.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_BSplineIncreaseDegree.svg) Augmenter le degré de la B-spline.
   * Sélectionnez l'option **Esquisse → Outils d'esquisse des B-splines → ![](/images/Sketcher_BSplineIncreaseDegree.svg) Augmenter le degré de la B-spline** du menu.
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_BSplineIncreaseDegree.svg) Augmenter le degré de la B-spline** du menu contextuel.

## Exemple

Les B-splines sont essentiellement une combinaison de [courbes de Bézier](https://fr.wikipedia.org/wiki/Courbe_de_B%C3%A9zier) (bien expliqué ces vidéos [ici](https://www.youtube.com/watch?v=bE1MrrqBAl8) et [ici](https://www.youtube.com/watch?v=xXJylM2S72s)).

Dans cette spline cubique (degré 3) il y a 3 segments, ce qui signifie que 3 courbes sont reliées à 2 nœuds.

Le degré est indiqué par le chiffre au centre. Voir ![](/images/Sketcher_BSplineDegree.svg) [Afficher/masquer le degré des B-splines](/Sketcher_BSplineDegree/fr "Sketcher BSplineDegree/fr").

![](/images/Sketcher_BSplineDegree3.png)

Une B-spline de degrés 3 et avec 2 nœuds qui ont chacun une multiplicité de 1.

Les segments extérieurs ont chacun 2 points de contrôle, le segment intérieur n'en a aucun pour s'assurer que les nœuds ont une multiplicité de 1. Voir [cette page](/Sketcher_BSplineDecreaseKnotMultiplicity/fr#Description "Sketcher BSplineDecreaseKnotMultiplicity/fr") pour une explication de la multiplicité.

En augmentant le degré à 4, on ajoute des points de contrôle sans modifier la forme de la B-spline :

![](/images/Sketcher_BSplineDegree4.png)

Même B-spline où le degré a été changé de 3 à 4. Notez que la multiplicité des nœuds a également été augmentée.

À partir de ce résultat, il n'est pas possible de revenir à l'état initial de la B-spline en diminuant le degré. Certaines informations sont perdues lorsque le degré d'une B-spline est modifié. Diminuer le degré à 3 conduit à ce résultat :

![](/images/Sketcher_BSplineDegree3from4.png)

Même B-spline où le degré a été ramené de 4 à 3. Notez que la multiplicité des nœuds a de nouveau augmenté. En fonction de la B-spline, l'algorithme de réduction du degré peut ajouter un grand nombre de nœuds pour préserver la forme, comme c'est le cas ici.

Chaque segment a maintenant 2 points de contrôle et chaque nœud coïncide avec un point de contrôle supplémentaire. Les nœuds ont une continuité *C0* telle que la B-spline obtiendra des "coins" si vous déplacez un point de contrôle. L'information d'une continuité plus élevée est donc perdue. Voir [cette page](/Sketcher_BSplineDecreaseKnotMultiplicity/fr#Description "Sketcher BSplineDecreaseKnotMultiplicity/fr") pour une explication sur la continuité.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineIncreaseDegree/fr&oldid=1478820>"