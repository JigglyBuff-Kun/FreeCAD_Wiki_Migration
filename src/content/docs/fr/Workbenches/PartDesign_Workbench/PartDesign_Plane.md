---
title: PartDesign Plan de référence
---
|  |
| --- |
| PartDesign Plan de référence |
| Emplacement du menu |
| PartDesign → Créer une référence → Plan de référence |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Point de référence](/PartDesign_Point/fr "PartDesign Point/fr"), [PartDesign Ligne de référence](/PartDesign_Line/fr "PartDesign Line/fr") |
|  |

## Description

Crée un **plan de référence** qui peut être utilisé comme référence pour les esquisses ou toute autre géométrie de référence.
Les esquisses peuvent être attachées aux plans de référence.

![](/images/Datum_plane.png)

*Plan de référence traversant les 3 coins du cube avec sur le dessus l'esquisse d'un cylindre en utilisant le plan de référence X-Y.*

## Prérequis

Un plan de référence ne peut être créé qu’à l’intérieur d’un ![](/images/PartDesign_Body.svg) [Corps](/PartDesign_Body/fr "PartDesign Body/fr"). Chaque corps a une origine qui est masquée par défaut. Pour pouvoir faire référence aux plans de base d'origine, rendez visible l'origine. Vous pouvez le faire avant de créer un plan de référence.

## Utilisation

1. Appuyez sur le bouton ![](/images/PartDesign_Plane.svg) Plan de référence.
2. Définissez les paramètres du plan. Sélectionnez une première référence dans la vue 3D pour filtrer les modes [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr") disponibles.
3. En fonction de la référence sélectionnée, un ou plusieurs modes d'ancrage de pièces peuvent être disponibles dans la liste. Le plus probable sera automatiquement sélectionné et affiché en gras dans la liste. Le texte *Ancré avec le mode* ainsi que le nom du mode d'ancrage de la pièce apparaissent en vert en haut du panneau Paramètres.
4. Pour ajouter une référence supplémentaire, appuyez sur le bouton Référence suivant. Une fois appuyé, son étiquette devient *Sélection en cours...* jusqu'à ce qu'une sélection soit faite.
5. Sélectionnez un mode d'ancrage de la pièce dans la liste.
6. **Décalage de l'accrochage :** Définit les valeurs de décalage de l'accrochage. **Remarquez** que les décalages x, y et z représentent le système de coordonnées local du plan de référence, pas le système de coordonnées mondial. Par conséquent, le décalage z est toujours le décalage le long du vecteur normal du plan de référence.
7. **Retourner :** Changer "Autour de l'axe x" fait tourner le plan autour de son axe X local. Changer "Autour de l'axe y" fait tourner le plan autour de son axe Y local. Changer "Autour de l'axe z" fait pivoter le plan autour de son axe Z local.
8. Appuyez sur OK.

## Options

Double-cliquez sur l'étiquette DatumPlane dans l'arborescence du modèle ou cliquez avec le bouton droit de la souris et sélectionnez **Modifier la référence** dans le menu contextuel pour modifier ses paramètres. Pour plus de détails sur le mode d'ancrage et le décalage de l'ancrage, voir [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr").

## Préférences

La couleur diffuse et la transparence par défaut des [PartDesign références](/PartDesign_CompDatums/fr "PartDesign CompDatums/fr") sont contrôlées par le [paramètre de réglage fin](/Fine-tuning/fr#Atelier_PartDesign "Fine-tuning/fr") **DefaultDatumColor**

## Utilité

Les plans de référence ont leur utilité :

* comme plan miroir arbitraire,
* comme support à un décalage désiré pour plusieurs esquisses,
* comme support pour une esquisse qui doit avoir un décalage/angle spécifique par rapport à l'origine,
* comme indicateur visible (par exemple, un plan focal).

Pour la prise en charge d'une seul esquisse, ils sont fondamentalement redondants. Ils souffrent du [problème de dénomination topologique](/Topological_naming_problem/fr "Topological naming problem/fr") autant que les esquisses.

## Propriétés

* Données**MapMode**: donne le mode d'ancrage utilisé.
* Données**Attachment Offset**: applique une transformation (translation et rotation) en référence au placement de l'ancrage.
* Données**Label**: nom donné à l'objet, ce nom peut être changé à la convenance.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Plane/fr&oldid=1543160>"