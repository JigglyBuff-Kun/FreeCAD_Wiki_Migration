---
title: Part Éclater le composé
---
|  |
| --- |
| Part Éclater le composé |
| Emplacement du menu |
| Part → Composés → Éclater le composé |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.18 |
| Voir aussi |
| [Part Composé](/Part_Compound/fr "Part Compound/fr"), [Draft Désagréger](/Draft_Downgrade/fr "Draft Downgrade/fr") |
|  |

## Description

L'outil ![](/images/Part_ExplodeCompound.svg) **Part Éclater le composé** fractionne un composé de formes afin de rendre chaque forme contenue (enfant) disponible en tant qu’objet distinct dans l’arborescence du modèle. Les enfants sont automatiquement placés dans un [groupe](/Std_Group/fr "Std Group/fr") s'il y a plus d'un enfant.

Il est semi-paramétrique : les formes des enfants seront mises à jour à mesure que le composé source change, mais si le nombre d'enfants dans le composé est modifié, l'éclaté sera soit dépourvu de certaines formes, soit comportera des objets redondants dans un état d'erreur.

Les emplacements des formes extraites suivent les emplacements des originaux, plus la propriété Placement de chaque enfant.

L'outil fera également exploser des formes non composées dans leurs constituants de niveau inférieur: composé solide en solides, solides en coquilles, coquilles en faces, faces en fils, fils en arêtes, arêtes en arêtes en sommets.

## Utilisation

1. Sélectionnez un seul composé.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Part_ExplodeCompound.svg) Éclater le composé.
   * Sélectionnez l'option **Part → Composés → ![](/images/Part_ExplodeCompound.svg) Éclater le composé** du menu.

## Cas d'utilisation

* Ajustement des positions des formes faites par ![](/images/Draft_OrthoArray.svg) [Draft Réseau orthogonal](/Draft_OrthoArray/fr "Draft OrthoArray/fr").
* Obtention de pièces séparées à partir du résultat de ![](/images/Part_Slice.svg) [Part Scinder](/Part_Slice/fr "Part Slice/fr") et ![](/images/Part_Cut.svg) [Part Couper](/Part_Cut/fr "Part Cut/fr").
* Obtention des contours individuels à partir d'esquisses et de faces à contours multiples.
* Obtention d'un solide pur à partir d'un solide en composé pour une utilisation dans l'![](/images/Workbench_FEM.svg) [atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ExplodeCompound/fr&oldid=1518248>"