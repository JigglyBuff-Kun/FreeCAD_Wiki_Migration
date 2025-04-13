---
title: Sketcher B-spline simple
---

|                                                                                                        |
| ------------------------------------------------------------------------------------------------------ |
| Sketcher B-spline simple                                                                               |
| Emplacement du menu                                                                                    |
| Esquisse → Géométries d'esquisse → Créer une B-spline                                                  |
| Ateliers                                                                                               |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr")                                             |
| Raccourci par défaut                                                                                   |
| G B B                                                                                                  |
| Introduit dans la version                                                                              |
| 0.17                                                                                                   |
| Voir aussi                                                                                             |
| [Sketcher B-spline périodique](/Sketcher_CreatePeriodicBSpline/fr "Sketcher CreatePeriodicBSpline/fr") |
|                                                                                                        |

## Description

L'outil ![](/images/Sketcher_CreateBSpline.svg) Sketcher B-spline simple crée une courbe [B-spline](/B-Splines/fr "B-Splines/fr") par des points de contrôle. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") : ou éventuellement par des points de nœuds.

![](/images/Sketcher_CreateBSpline_Example.png)

Courbe B-spline (en blanc) définie par 5 points de contrôle.  
Le polygone de contrôle (vert) relie les points de contrôle (marqués par des cercles de poids en jaune foncé).  
Le chiffre 3 (vert, sans parenthèses) au centre fait référence au [degré](/Sketcher_BSplineIncreaseDegree/fr#Description "Sketcher BSplineIncreaseDegree/fr") de la B-spline.  
Les nombres (1) et (4) (verts, entre parenthèses) correspondent à la [multiplicité](/Sketcher_BSplineDecreaseKnotMultiplicity/fr#Description "Sketcher BSplineDecreaseKnotMultiplicity/fr") des points des nœuds.  
Les nombres [1.00] (verts, entre parenthèses) correspondent aux poids des points de contrôle.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

1. Il y a plusieurs façons de lancer l'outil :
   - Appuyez sur le bouton ![](/images/Sketcher_CreateBSpline.svg) B-spline par les points de contrôle.
   - Sélectionnez l'option **Esquisse → Géométries d'esquisse → ![](/images/Sketcher_CreateBSpline.svg) Créer une B-spline** du menu.
   - Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_CreateBSpline.svg) Créer une B-spline** du menu contextuel. [introduit dans la version 0.22](/Release_notes_0.22/fr "Release notes 0.22/fr")
   - Utilisez le raccourci clavier : G puis B, puis B.
2. Le curseur se transforme en croix avec l'icône de l'outil.
3. La section **Paramètres de la B-spline** ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")) est ajoutée en haut de la [fenêtre de dialogue de Sketcher](/Sketcher_Dialog/fr "Sketcher Dialog/fr").
4. Il est possible d'appuyer sur la touche M ou de choisir dans la liste déroulante de la section des paramètres pour changer le mode de l'outil :
   - ![](/images/Sketcher_CreateBSpline.svg) **Par points de contrôle** :
     1. Possibilité de changer le **Degré** (également possible après que les points aient été choisis) :
        - Entrez un nombre supérieur à zéro.
        - Appuyez sur la touche U pour augmenter le degré.
        - Appuyez sur la touche J pour diminuer le degré.
   - ![](/images/Sketcher_CreateBSplineByInterpolation.svg) **Par des nœuds** : [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
     1. Les B-splines par des noeuds sont toujours créées avec un degré 3. Mais leur degré peut être changé plus tard. Voir [Remarques](#Remarques).
5. Vous pouvez également appuyer sur la touche R ou cocher la case **Périodique** pour créer une B-spline fermée (également possible après que les points aient été choisis). [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
6. Choisissez plusieurs points.
7. Appuyez éventuellement sur la touche F avant de terminer pour supprimer le dernier point. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
8. Cliquez avec le bouton droit de la souris ou appuyez sur Échap pour terminer la saisie.
9. La B-spline est créée, y compris un ensemble de géométrie interne (cercles de poids et points de nœuds).
10. Si l'outil fonctionne en [continue mode](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr") :
    1. Vous pouvez continuer à créer des B-splines.
    2. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

## Remarques

- Les éléments de la géométrie interne peuvent être supprimés. Ils peuvent être recréés à tout moment avec [Sketcher Géométrie interne d'alignement](/Sketcher_RestoreInternalAlignmentGeometry/fr "Sketcher RestoreInternalAlignmentGeometry/fr").
- Après la création d'une B-spline, il est possible de définir le poids des points de contrôle en modifiant les rayons des cercles de poids. Les contraintes d'égalité sur les cercles doivent d'abord être supprimées. La contrainte de rayon est arbitraire, le poids des points de contrôle sera défini par les rayons relatifs des cercles. Le fonctionnement est similaire à celui de la gravité : plus un cercle est grand par rapport aux autres, plus la courbe sera attirée vers ce point de contrôle.
- Le degré d'une B-spline créée peut être [augmenté](/Sketcher_BSplineIncreaseDegree/fr "Sketcher BSplineIncreaseDegree/fr") ou [diminué](/Sketcher_BSplineDecreaseDegree/fr "Sketcher BSplineDecreaseDegree/fr") et la multiplicité de ses nœuds peut être [augmentée](/Sketcher_BSplineIncreaseKnotMultiplicity/fr "Sketcher BSplineIncreaseKnotMultiplicity/fr") ou [diminuée](/Sketcher_BSplineIncreaseKnotMultiplicity/fr "Sketcher BSplineIncreaseKnotMultiplicity/fr") également.
- La visibilité du [degré](/Sketcher_BSplineDegree/fr "Sketcher BSplineDegree/fr"), du [polygone de contrôle](/Sketcher_BSplinePolygon/fr "Sketcher BSplinePolygon/fr"), du [peigne de courbure](/Sketcher_BSplineComb/fr "Sketcher BSplineComb/fr"), de la [multiplicité des nœuds](/Sketcher_BSplineKnotMultiplicity/fr "Sketcher BSplineKnotMultiplicity/fr") et du [poids des points de contrôle](/Sketcher_BSplinePoleWeight/fr "Sketcher BSplinePoleWeight/fr") peut être activée/désactivée à partir de la barre d'outils [Affichage de Sketcher](/Sketcher_Workbench/fr#Affichage "Sketcher Workbench/fr").

## Limitations

- Plusieurs contraintes ne sont pas prises en charge pour le moment.

- La multiplicité des nœuds définie n'est pas toujours respectée :
  - Pour une spline périodique, le premier nœud (coïncidant avec le dernier) a toujours une multiplicité de 2.
  - Pour une spline non périodique, le premier et le dernier nœuds ont toujours une multiplicité de 4.
  - Si les points juste avant et juste après ont des multiplicités >=3, le morceau entre ces deux points est entièrement continu, et ce point (du milieu) ne sera contraint que par un point sur l'objet. Si un nœud est nécessaire, envisagez d'utiliser l'outil [insérer un nœud](/Sketcher_BSplineInsertKnot/fr "Sketcher BSplineInsertKnot/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateBSpline/fr&oldid=1496244>"
