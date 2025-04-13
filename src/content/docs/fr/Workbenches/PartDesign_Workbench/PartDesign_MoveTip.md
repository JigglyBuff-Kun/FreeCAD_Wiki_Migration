---
title: PartDesign Désigner comme fonction résultante
---
|  |
| --- |
| PartDesign Désigner comme fonction résultante |
| Emplacement du menu |
| Menu contextuel → Désigner comme fonction résultante |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Déplacer vers un autre corps](/PartDesign_MoveFeature/fr "PartDesign MoveFeature/fr"), [PartDesign Déplacer après une autre fonction](/PartDesign_MoveFeatureInTree/fr "PartDesign MoveFeatureInTree/fr") |
|  |

## Description

![](/images/PartDesign_MoveTip.svg) Désigner comme fonction résultante, comme elle est appelée dans le menu contextuel, redéfinit la fonction résultante qui est la caractéristique exposée à l'extérieur du corps. Par défaut, la fonction résultante est la dernière fonctionnalité ajoutée au corps mais parfois, il peut être utile de définir temporairement une fonction en amont dans l'arborescence comme fonction résultante. Cela peut être fait pour ajouter une esquisse, une géométrie de référence ou une fonction qui, rétrospectivement, aurait dû être créée plus tôt dans l'historique du corps.

La fonction résultante se distingue visuellement dans l'arborescence Modèle par une petite flèche blanche dans un cercle vert surimposée sur l'icône de la fonction. Par exemple, la fonctionnalité suivante est la fonction résultante:

![](/images/PartDesign_Body_tree-04.png)

## Utilisation

1. Dans l'arborescence du modèle, cliquer avec le bouton droit sur la fonction à définir comme fonction résultante.
2. Sélectionner dans la liste du menu contextuel ![](/images/PartDesign_MoveTip.svg) **Désigner comme fonction résultante**.
3. La nouvelle fonction résultante est visible et tous les éléments se trouvant sous elle sont masqués. Les éléments nouvellement créés à partir de ce point seront placés sous la fonction résultante, et au-dessus des autres éléments existants.

**Remarque** : il est important de ne pas oublier de redéfinir la fonction résultante sur la dernière fonction au bas de l'arborescence du corps.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_MoveTip/fr&oldid=1571315>"