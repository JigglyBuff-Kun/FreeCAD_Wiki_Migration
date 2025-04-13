---
title: PartDesign Pignon
---
|  |
| --- |
| PartDesign Pignon |
| Emplacement du menu |
| PartDesign → Créer un pignon... |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| *Aucun* |
|  |

## Description

Cet outil vous permet de créer un profil 2D d'un pignon (ou roue à chaîne). Il peut être extrudé avec la fonction [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr").

## Utilisation

1. En règle générale, activer le bon corps.
2. Aller dans le menu **PartDesign → ![](/images/PartDesign_Sprocket.svg) Créer un pignon...**.
3. Définir Données**Number Of Teeth** et Données**Sprocket Reference**.
4. Cliquer sur OK.
5. S'il n'y avait pas de corps actif : glisser et déposer le pignon dans un corps pour appliquer d'autres fonctions comme l'extrusion.

## Propriétés

* Données**Number Of Teeth** : nombre de dents.
* Données**Sprocket Reference** : type de pignon. Une liste de définitions de pignons. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr"). La liste comprend les normes ANSI et ISO ainsi que certaines définitions de pignons pour bicyclettes et motos.
* Données**Pitch** : distance entre deux dents.
* Données**Roller Diameter** : diamètre de la chaîne à rouleaux pour laquelle le pignon est conçu.
* Données**Thickness** : épaisseur principale du pignon. **Remarque :** le pignon ne peut pas simplement être extrudé avec cette épaisseur car les dents ont des chanfreins latéraux. Il faut donc regarder la définition du pignon pour modéliser un pignon 3D valide. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Sprocket/fr&oldid=1463209>"