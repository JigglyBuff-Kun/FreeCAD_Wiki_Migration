---
title: Sketcher Congé
---

|                                                            |
| ---------------------------------------------------------- |
| Sketcher Congé                                             |
| Emplacement du menu                                        |
| Esquisse → Outils d'esquisse → Créer un congé              |
| Ateliers                                                   |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut                                       |
| G F F                                                      |
| Introduit dans la version                                  |
| -                                                          |
| Voir aussi                                                 |
| _Aucun_                                                    |
|                                                            |

## Description

L'outil ![](/images/Sketcher_CreateFillet.svg) Sketcher Congé crée un congé entre deux arêtes non parallèles. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'outil peut également créer un chanfrein.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") : si deux arêtes droites reliées par une [contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") reçoivent un congé ou un chanfrein, le point d'angle peut éventuellement être préservé. L'outil ajoute alors un [objet Point](/Sketcher_CreatePoint/fr "Sketcher CreatePoint/fr") qui aura une [contrainte de point sur l'objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") avec les deux arêtes. Les contraintes liées au point d'angle sont alors transférées au nouvel objet point.

![](/images/SketcherCreateFilletExample.png)

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

1. Il y a plusieurs façons de lancer l'outil :
   - Appuyez sur le bouton ![](/images/Sketcher_CreateFillet.svg) Créer un congé.
   - Sélectionnez l'option **Esquisse → Outils d'esquisse → ![](/images/Sketcher_CreateFillet.svg) Créer un congé** du menu.
   - Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_CreateFillet.svg) Créer un congé** du menu contextuel.
   - Utilisez le raccourci clavier : G puis F, puis F.
2. S'il y a une précédente sélection, elle est effacée. L'outil n'accepte pas de présélection.
3. Le curseur se transforme en croix avec l'icône du mode d'outil en cours.
4. La section **Paramètres du congé/chanfrein** ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")) est ajoutée en haut de la [fenêtre de dialogue](/Sketcher_Dialog/fr "Sketcher Dialog/fr").
5. Il est possible d'appuyer sur la touche U ou de décocher la case **Conserver le coin** pour désactiver cette option. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
6. Vous pouvez appuyer sur la touche M ou sélectionner dans la liste déroulante de la section des paramètres pour changer le mode de l'outil :
   - ![](/images/Sketcher_CreateFillet.svg) **Congé**
   - ![](/images/Sketcher_CreateChamfer.svg) **Chanfrein**
7. Faites l'une des choses suivantes :
   - Choisissez un point avec une [contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") reliant deux arêtes droites non parallèles.
   - Choisissez deux arêtes non parallèles. L'une ou l'autre arête peut être une [ligne](/Sketcher_CreateLine/fr "Sketcher CreateLine/fr") droite, un [arc](/Sketcher_CreateArc/fr "Sketcher CreateArc/fr"), un [arc d'ellipse](/Sketcher_CreateArcOfEllipse/fr "Sketcher CreateArcOfEllipse/fr"), un [arc d'hyperbole](/Sketcher_CreateArcOfHyperbola/fr "Sketcher CreateArcOfHyperbola/fr") ou un [arc de parabole](/Sketcher_CreateArcOfParabola/fr "Sketcher CreateArcOfParabola/fr"). Les [B-splines](/Sketcher_Workbench/fr#Sketcher_CompCreateBSpline "Sketcher Workbench/fr") ne sont actuellement pas pris en charge.
8. Le congé ou le chanfrein est créé, y compris un objet ponctuel dans le cas d'un coin conservé. Pour un chanfrein, un arc de géométrie de construction est également créé.
9. Cet outil fonctionne toujours en mode continu : il est possible de continuer à sélectionner des points et/ou des arêtes.
10. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

## Remarques

- L'arc géométrique de construction d'un chanfrein n'est pas visible en dehors de l'esquisse. Il ne peut pas être supprimé sans casser la géométrie du chanfrein.
- Certaines courbes ([coniques](/Sketcher_Workbench/fr#Sketcher_CompCreateConic "Sketcher Workbench/fr")) peuvent devoir être [ajustées](/Sketcher_Trimming/fr "Sketcher Trimming/fr") avant de recevoir un congé.
- Le rayon du congé dépend de la méthode de sélection. Si une [contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") reliant deux arêtes droites est sélectionnée, le rayon du congé est dérivé de la longueur de l'arête la plus courte. Si deux arêtes sont sélectionnées, le rayon est la distance entre le premier point cliqué et l'intersection (étendue) des arêtes.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateFillet/fr&oldid=1519044>"
