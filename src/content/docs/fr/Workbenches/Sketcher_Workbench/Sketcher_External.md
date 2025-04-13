---
title: Sketcher Géométrie externe
---
|  |
| --- |
| Sketcher Géométrie externe |
| Emplacement du menu |
| Esquisse → Outils d'esquisse → Créer une géométrie externe |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| G X |
| Introduit dans la version |
| - |
| Voir aussi |
| [Sketcher Géométrie de construction](/Sketcher_ToggleConstruction/fr "Sketcher ToggleConstruction/fr") |
|  |

## Description

version 1.0 et précédentes : L'outil ![](/images/Sketcher_External.svg) Sketcher Géométrie externe projette sur le plan de l'esquisse des arêtes et/ou des sommets appartenant à des objets situés en dehors de l'esquisse. La géométrie projetée est appelée "géométrie externe". Elle reste paramétriquement liée à ses objets sources. Les arêtes de la géométrie externe sont marquées par une [couleur](/Sketcher_Preferences/fr#Apparence "Sketcher Preferences/fr") dédiée (magenta par défaut) et ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")) un type de ligne. Comme la géométrie de construction, la géométrie externe n'est pas visible à l'extérieur de l'esquisse. Elle est destinée à aider à définir les contraintes et autres géométries à l'intérieur de l'esquisse elle-même.

version 1.1 et suivantes : voir ![](/images/Sketcher_Projection.svg) [Sketcher Projection](/Sketcher_Projection/fr "Sketcher Projection/fr")

![](/images/Sketcher_ExternalEsempio1.png)

Les deux lignes magenta sont des géométries externes liées aux arêtes d'une [protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") préexistante. Elles sont utilisées pour contraindre les cercles.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

1. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_External.svg) Créer une géométrie externe.
   * Sélectionnez l'option **Esquisse → Outils d'esquisse → ![](/images/Sketcher_External.svg) Créer une géométrie externe** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_External.svg) Créer une géométrie externe** du menu contextuel.
   * Utilisez le raccourci clavier : G puis X.
2. Le curseur se transforme en croix avec l'icône de l'outil.
3. Sélectionnez une arête externe ou un sommet. Voir [Remarques](##Remarques).
4. La géométrie externe est créée.
5. Cet outil fonctionne toujours en mode continu : vous pouvez continuer à sélectionner des arêtes externes et/ou des sommets.
6. Pour terminer, cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

## Remarques

* Seuls les arêtes et les sommets des objets situés dans le même système de coordonnées peuvent être sélectionnés. L'esquisse et l'objet doivent se trouver dans le même [corps](/PartDesign_Body/fr "PartDesign Body/fr"), ou le même [Part](/Std_Part/fr "Std Part/fr"), ou les deux dans le système de coordonnées global. Utilisez un [lien](/PartDesign_SubShapeBinder/fr "PartDesign SubShapeBinder/fr") pour amener une copie de l'objet dans le système de coordonnées en cours si nécessaire.
* Les dépendances circulaires ne sont pas autorisées. Vous ne pouvez pas créer de lien vers un objet qui dépend de l'esquisse elle-même.
* Les liens vers des éléments d'autres esquisses sont possibles et encouragés, car ils sont plus fiables que les liens vers une géométrie générée (solide). Ces derniers peuvent souffrir du [problème de dénomination topologique](/Topological_naming_problem/fr "Topological naming problem/fr"). Voir [Conseils pour les modèles stables](/Feature_editing/fr#Conseils_pour_la_création_de_modèles_robustes "Feature editing/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_External/fr&oldid=1521509>"