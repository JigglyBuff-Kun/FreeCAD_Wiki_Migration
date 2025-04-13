---
title: Part Union
---
|  |
| --- |
| Part Union |
| Emplacement du menu |
| Part → Opérations booléennes → Union |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Part Opération booléenne](/Part_Boolean/fr "Part Boolean/fr"), [Part Soustraction](/Part_Cut/fr "Part Cut/fr"), [Part Intersection](/Part_Common/fr "Part Common/fr"), |
|  |

## Description

L'outil ![](/images/Part_Fuse.svg) Union fusionne les objets Part sélectionnés en un seul. Cette opération est entièrement paramétrique et les composants peuvent être modifiés et le résultat recalculé.

**Remarque :** cette commande est une forme automatisée de ![](/images/Part_Boolean.svg) [Part Opération booléenne](/Part_Boolean/fr "Part Boolean/fr").

## Utilisation

1. Sélectionnez deux formes
2. Plusieurs manières pour lancer cette commande :
   * Appuyez sur le bouton ![](/images/Part_Fuse.svg) Union de la barre d'**outils Part**
   * Utilisez l'entrée **Part → Opérations booléennes → Union** depuis le menu Part

## Entrées prises en charge

Les objets utilisés doivent être des formes [OpenCASCADE](/OpenCASCADE/fr "OpenCASCADE/fr"). Exemples : les trucs faits avec un des ateliers Part, PartDesign, Sketcher. Pas de maillages (sauf s'ils ont été convertis en formes) - pour les maillages, il existe des outils booléens spécifiques dans l'atelier MeshDesign.

* Solide + solide : le résultat est un solide qui occupe tout le volume couvert par les volumes d'origine.

* Coque + coque, coque + face, face + face : le résultat est une coque. Lorsque les faces se croisent, elles sont séparées. Les coques peuvent être non-manifold. Après l'union, les faces peuvent être unies en [affinant](/Part_RefineShape/fr "Part RefineShape/fr") le résultat.

* Polyligne + polyligne, arête + polyligne, arête + arête : le résultat est une polyligne. Les arêtes sont divisées là où elles se croisent.

Les composés sont pris en charge ; cependant, il est supposé que les formes contenues dans un composé ne se touchent pas ou ne se croisent pas. Si c'est le cas, l'union échouera probablement ou produira un résultat incorrect.

## Options

Les éléments peuvent être ajoutés et retirés d'une union, en les faisant glisser dans ou hors de l'élément de l'union dans l'arborescence avec la souris. Pour faire glisser des éléments hors d'une union, vous devez les déposer sur le nœud du document (le nom du fichier) de votre modèle. Un recalcul manuel (appuyez sur la touche F5 ou cliquez sur l'icône ![](/images/Std_Refresh.svg) [Recalculer](/Std_Refresh/fr "Std Refresh/fr")) est nécessaire pour voir les résultats.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Fuse/fr&oldid=1559290>"