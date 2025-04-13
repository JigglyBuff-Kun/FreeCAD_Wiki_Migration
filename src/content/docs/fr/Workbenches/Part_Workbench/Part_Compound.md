---
title: Part Composé
---
|  |
| --- |
| Part Composé |
| Emplacement du menu |
| Part → Composés → Créer un composé |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.14 |
| Voir aussi |
| [Part Union](/Part_Fuse/fr "Part Fuse/fr"), [Part Filtre de composé](/Part_CompoundFilter/fr "Part CompoundFilter/fr"), [Part Éclater le composé](/Part_ExplodeCompound/fr "Part ExplodeCompound/fr") |
|  |

## Description

Cette commande crée un composé d'objets ayant une forme topologique tels que des objets solides et d'autres objets avec des faces et/ou des bords. Elle ne peut pas traiter les maillages car ils n'ont pas de forme topologique.

## Utilisation

1. Sélectionnez les formes dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") qui seront ajoutées au composé
2. Faites **Part → Composés → Créer un composé** dans le menu Part ou cliquez sur le bouton ![](/images/Part_Compound.svg).

## Remarques

Un composé contenant des pièces qui se croisent ou qui se touchent est **invalide** pour créer des opérations booléennes. En raison de problèmes de performances, vérifier si les pièces qui se croisent ne sont pas terminée. L'option Vérifier la géométrie automatique (disponible pour les opérations booléennes) est également désactivée pour le composé.

Pour activer cette vérification, allez sur **Outils → Éditer Paramètres... → Préférences → Mod → Part → CheckGeometry → RunBOPCheck** et réglez le paramètre sur `true`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Compound/fr&oldid=1518258>"