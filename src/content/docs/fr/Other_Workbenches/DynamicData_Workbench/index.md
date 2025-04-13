---
title: Atelier DynamicData
---
![](/images/DynamicData_workbench_icon.svg)

Icône de l'atelier externe DynamicData

## Présentation

DynamicData est un [atelier externe](/External_workbenches/fr "External workbenches/fr") avec lequel vous pouvez créer un objet conteneur pour stocker des propriétés personnalisées.

Avec cet atelier, vous pouvez créer une nouvelle [propriété](/Property/fr "Property/fr") personnalisée de tout type pris en charge par FreeCAD. Par exemple une propriété Length ou une propriété [Placement](/Placement/fr "Placement/fr"). Ces propriétés personnalisées peuvent ensuite être utilisées dans [Expressions](/Expressions/fr "Expressions/fr") comme n'importe quelle autre propriété. Par exemple, vous pouvez créer une propriété Length appelée "Largeur" et y faire référence lorsque vous contraignez un élément d'esquisse. Ensuite, lorsque la propriété "Largeur" ​​est modifiée, la contrainte d'esquisse est automatiquement mise à jour. Ceci est similaire à la façon dont on peut utiliser une feuille de calcul, mais est plus interactif car les propriétés peuvent être modifiées tout en permettant de voir la vue 3D, et cela permet également une plus grande variété de types de propriétés.

Certaines fonctionnalités comprennent :

* la possibilité d'importer des contraintes nommées depuis une esquisse
* la possibilité de copier des propriétés ou de définir des valeurs de propriété d'un objet à un autre
* les objets conteneurs restent compatibles avec les installations FreeCAD sur lesquelles l'atelier n'est pas installé

## Installation

Cet atelier peut être installé à partir du [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Pour une installation manuelle, voir [Installer des ateliers supplémentaires](/Installing_more_workbenches/fr "Installing more workbenches/fr").

## Liens

* Code source hébergé sur GitHub : [github.com](https://github.com/mwganson/DynamicData)
* [Documentation officielle complète](https://github.com/mwganson/DynamicData/blob/master/README.md)

## Ateliers externes

Les ateliers FreeCAD sont faciles à programmer en [Python](/Python/fr "Python/fr"), de ce fait, beaucoup de personnes développent des ateliers supplémentaires en dehors des développeurs principaux de FreeCAD.

La page [ateliers externes](/External_workbenches/fr "External workbenches/fr") contient des informations et des tutoriels sur certains d’entre eux, et le projet [FreeCAD Addons](https://github.com/FreeCAD/FreeCAD-addons) vise à les rassembler et à les rendre facilement installables depuis FreeCAD.

De nouveaux ateliers sont en développement, restez à l'écoute !

Retrieved from "<http://wiki.freecad.org/index.php?title=DynamicData_Workbench/fr&oldid=1225417>"