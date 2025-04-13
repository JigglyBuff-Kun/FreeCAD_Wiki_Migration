---
title: Sketcher Projection
---
|  |
| --- |
| Sketcher Projection |
| Emplacement du menu |
| Esquisse → Outils d'esquisse → Créer la géométrie externe de la projection |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| G X |
| Introduit dans la version |
| 1.1 |
| Voir aussi |
| [Sketcher Géométrie de construction](/Sketcher_ToggleConstruction/fr "Sketcher ToggleConstruction/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_Projection.svg) Sketcher Projection ([introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")) projette sur le plan de l'esquisse les arêtes et/ou les sommets appartenant à des objets situés en dehors de l'esquisse. La géométrie projetée est appelée "géométrie externe". Elle reste paramétriquement liée à ses objets sources. La géométrie externe est marquée par une [couleur](/Sketcher_Preferences/fr#Apparence "Sketcher Preferences/fr") (magenta par défaut) et un type de ligne dédiés. Il peut s'agir d'une géométrie de définition visible en dehors de l'esquisse ou d'une géométrie de construction non visible en dehors de l'esquisse.

## Utilisation

1. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_Projection.svg) Créer la géométrie externe de la projection.
   * Sélectionnez l'option **Esquisse → Outils d'esquisse → ![](/images/Sketcher_Projection.svg) Créer la géométrie externe de la projection** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_Projection.svg) Créer la géométrie externe de la projection** dans le menu contextuel.
   * Utilisez le raccourci clavier : G puis X.
2. Le curseur se transforme en croix avec l'icône de l'outil.
3. Sélectionnez une ou plusieurs faces externes, arêtes et/ou sommets. Voir [Remarques](#Remarques).
4. La géométrie externe est créée.
5. Cet outil fonctionne toujours en mode continu : vous pouvez continuer à sélectionner des faces, des arêtes et/ou des sommets externes.
6. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap ou démarrez un autre outil de création de géométrie ou de contrainte.

## Remarques

* Toutes les arêtes d'une face sont projetées sur le plan d'esquisse.
* La géométrie externe est créée en tant que géométrie de définition ou géométrie de construction en fonction de l'état de l'outil [Sketcher Géométrie de construction](/Sketcher_ToggleConstruction/fr "Sketcher ToggleConstruction/fr"). Cet outil peut également être utilisé pour basculer le mode de chaque arête. Cochez l'option **Édition → Préférences... → Sketcher → Général → Toujours ajouter les géométries externes comme des géométries de référence** pour ignorer le statut de cet outil et toujours ajouter la géométrie externe comme géométrie de construction.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Projection/fr&oldid=1560420>"