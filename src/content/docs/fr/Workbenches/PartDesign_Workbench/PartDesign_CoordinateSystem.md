---
title: PartDesign Système de coordonnées local
---
|  |
| --- |
| PartDesign Système de coordonnées local |
| Emplacement du menu |
| PartDesign → Créer un système de coordonnées local |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.18 |
| Voir aussi |
| [PartDesign Point de référence](/PartDesign_Point/fr "PartDesign Point/fr"), [PartDesign Ligne de référence](/PartDesign_Line/fr "PartDesign Line/fr"), [PartDesign Plan de référence](/PartDesign_Plane/fr "PartDesign Plane/fr") |
|  |

## Description

Crée un **système de coordonnées local** qui peut être utilisé comme référence pour une autre géométrie de référence. Cela aide également à identifier l'orientation de la géométrie de référence dans un espace 3D.

![](/images/PartDesign_LocalCoordinateSystem_Example.png)

Système de coordonnées local provenant de l'origine d'un plan de référence.

## Utilisation

1. Cliquer sur le bouton ![](/images/PartDesign_CoordinateSystem.svg) Créer un système de coordonnées local.
2. Pour définir les paramètres du système de coordonnées, sélectionner une première référence dans la vue 3D pour filtrer les modes d'ancrage disponibles.
3. En fonction de la référence sélectionnée, un ou plusieurs modes d'ancrage peuvent être disponibles dans la liste. Le plus probable sera automatiquement sélectionné et affiché en gras dans la liste. Le texte *Ancré avec le mode* ainsi que le nom du mode d'ancrage apparaissent en vert en haut du panneau des paramètres.
4. Pour ajouter une référence supplémentaire, appuyez sur le bouton Référence suivant. Une fois appuyé, son étiquette devient *Sélection de...* jusqu'à ce qu'une sélection soit faite.
5. Sélectionner un mode d'ancrage dans la liste.
6. Définir les valeurs de décalage d'ancrage.
7. Appuyer sur OK.

## Options

Double-cliquez sur l'étiquette **Local\_CS** dans la vue en arborescence du modèle ou cliquez avec le bouton droit de la souris et sélectionnez **Modifier la référence** dans le menu contextuel pour modifier ses paramètres. Pour plus de détails sur le mode d'ancrage et le décalage de l'ancrage, voir [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").

## Préférences

Voir [PartDesign Plan de référence](/PartDesign_Plane/fr#Préférences "PartDesign Plane/fr").

## Propriétés

### Données

* Données**MapMode** : répertorie le mode d'ancrage utilisé.
* Données**Attachment Reversed** : indique si le système de coordonnées est inversé en orientation.
* Données**Attachment Offset** : applique une transformation (translation et rotation) en référence à l'emplacement de l'ancrage.
* Données**Placement** : indique les coordonnées et l’alignement de l’origine du système de coordonnées.
* Données**Label** : nom donné à l'objet, ce nom peut être modifié à tout moment.

## Script

```
lcs = App.activeDocument().addObject( 'PartDesign::CoordinateSystem', 'LCS' )

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_CoordinateSystem/fr&oldid=1460319>"