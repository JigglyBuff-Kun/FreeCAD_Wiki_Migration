---
title: Arch Basculer en B-rep IFC
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Basculer en B-rep IFC |
| Emplacement du menu |
| Utilitaires → Activer/désactiver l'indicateur B-rep de l'IFC |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch Explorateur IFC](/Arch_IfcExplorer/fr "Arch IfcExplorer/fr"), [Arch IFC](/Arch_IFC/fr "Arch IFC/fr") |
|  |

## Description

L'outil **Arch Basculer en B-rep IFC** active/désactive l'indicateur IfcBrep d'un objet sélectionné [BIM](/BIM_Workbench/fr "BIM Workbench/fr") (la valeur par défaut est toujours désactivée). Si l'indicateur est activé lors de l'exportation de l'objet au format IFC, l'objet sera exporté sous forme de [IfcFacetedBrep](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm), même si une exportation de niveau supérieur telle que IfcExtrudedAreaSolid ou IfcBooleanResult est possible. Bien que les objets IfcFacetedBrep sont plus lourds et moins modifiables (ils perdent des informations de géométrie tels que l'historique de la modélisation), ils sont souvent sujets à moins d'erreurs. Dans certains cas la définition de cet indicateur permet de résoudre les problèmes d'objets qui ne sont pas exportés correctement lorsque cet indicateur n'est pas défini.

## Utilisation

1. Selectionnez un objet Arch.
2. Sélectionnez l'option **Utilitaires → ![](/images/Arch_ToggleIfcBrepFlag.svg) Activer/désactiver l'indicateur B-rep de l'IFC** du menu.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_ToggleIfcBrepFlag/fr&oldid=1466004>"