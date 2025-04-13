---
title: Sketcher Congé avec contrainte
---
:::caution
Cet outil est obsolète, il ne sera plus disponible dansversion 1.0 et suivantes. Utiliser plutôtSketcher Congé.
:::

|  |
| --- |
| Sketcher Congé avec contraintes |
| Emplacement du menu |
| Esquisse → Géometries d'esquisse → Congé d'esquisse préservant les contraintes |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| G F P |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [Sketcher Congé](/Sketcher_CreateFillet/fr "Sketcher CreateFillet/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_CreatePointFillet.svg) Sketcher Congé avec contrainte crée un congé entre deux arêtes non parallèles. Si deux arêtes droites reliées par une [contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") sont supprimées, le point commun correspondant est préservé par l'ajout d'un [objet Point](/Sketcher_CreatePoint/fr "Sketcher CreatePoint/fr") ayant une [contrainte de point sur objet](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") avec les deux arêtes. Les contraintes liées au point commun sont transférées au nouvel objet Point. À part cela, cet outil est identique à l'outil [Sketcher Congé](/Sketcher_CreateFillet/fr "Sketcher CreateFillet/fr"). Voir cet outil pour plus d'informations.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

1. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_CreatePointFillet.svg) Congé d'esquisse préservant les contraintes.
   * Sélectionnez la commande **Esquisse → Géometries d'esquisse → ![](/images/Sketcher_CreatePointFillet.svg) Congé d'esquisse préservant les contraintes** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_CreatePointFillet.svg) Congé d'esquisse préservant les contraintes** du menu contextuel.
   * Utilisez le raccourci clavier : G puis F, puis P.
2. Pour plus d'informations, voir [Sketcher Congé](/Sketcher_CreateFillet/fr#Utilisation "Sketcher CreateFillet/fr").

## Remarques

Voir [Sketcher Congé](/Sketcher_CreateFillet/fr#Remarques "Sketcher CreateFillet/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreatePointFillet/fr&oldid=1411014>"