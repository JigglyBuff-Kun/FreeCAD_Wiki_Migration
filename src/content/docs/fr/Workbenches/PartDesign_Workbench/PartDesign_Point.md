---
title: PartDesign Point de référence
---
|  |
| --- |
| PartDesign Point de référence |
| Emplacement du menu |
| PartDesign → Créer une référence → Point de référence |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Droite de référence](/PartDesign_Line/fr "PartDesign Line/fr"), [PartDesign Plan de référence](/PartDesign_Plane/fr "PartDesign Plane/fr") |
|  |

## Description

Crée un **point de référence** qui peut être utilisé comme référence pour les esquisses ou toute autre géométrie de référence.

![](/images/DatumPoint.png)

Un point de référence attaché à une sphère avec un décalage d'ancrage de `2` dans la direction Z.

## Utilisation

1. Appuyez sur le bouton ![](/images/PartDesign_Point.svg) **Point de référence** .
2. Définissez les paramètres du point. Sélectionnez une première référence dans la vue 3D pour filtrer les modes d'ancrage disponibles.
3. Selon la référence sélectionnée, il peut y avoir un ou plusieurs modes d'ancrage disponibles dans la liste. Le plus probable sera automatiquement sélectionné et affiché en gras dans la liste. Le texte *Mode d'ancrage* ainsi que le nom du mode d'ancrage apparaissent en vert en haut du panneau Paramètres.
4. Pour ajouter une référence supplémentaire, appuyez sur le bouton suivant Référence. Une fois le bouton appuyé, son étiquette devient *Sélection...* jusqu'à ce qu'une sélection soit faite.
5. Sélectionnez un mode d'ancrage dans la liste.
6. Définissez les valeurs de décalage d'ancrage.
7. Appuyez sur OK.

## Options

Double-cliquez sur l'étiquette Point de référence dans l'arborescence du modèle ou cliquez avec le bouton droit de la souris et sélectionnez **Modifier la référence** dans le menu contextuel pour éditer ses paramètres. Pour plus de détails sur le mode de référencement et le décalage de la référence, voir [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").

## Préférences

Voir [PartDesign Plan de référence](/PartDesign_Plane/fr#Préférences "PartDesign Plane/fr").

## Propriétés

* Données**MapMode**: donne le mode d'ancrage utilisé.
* Données**Attachment Offset**: applique une transformation (translation et rotation) en référence au placement de l'ancrage.
* Données**Label**: nom donné à l'objet, ce nom peut être changé à la convenance.

## Limitations

* Le point de référence ne peut pas être utilisé comme section pour les fonctions Balayage et Lissage.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Point/fr&oldid=1460327>"