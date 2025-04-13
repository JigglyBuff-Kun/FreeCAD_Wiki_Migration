---
title: Sketcher Créer une esquisse
---
|  |
| --- |
| Sketcher Créer une esquisse |
| Emplacement du menu |
| Esquisse → Créer une esquisse |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [PartDesign Esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr"), [Sketcher Ancrer une esquisse](/Sketcher_MapSketch/fr "Sketcher MapSketch/fr"), [Sketcher Réorienter une esquisse](/Sketcher_ReorientSketch/fr "Sketcher ReorientSketch/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_NewSketch.svg) Sketcher Créer une esquisse crée une nouvelle esquisse et ouvre la [boîte de dialogue de Sketcher](/Sketcher_Dialog/fr "Sketcher Dialog/fr") pour l'éditer.

Remarquez que l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") possède son propre outil [Esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr"). Lorsque vous travaillez sur un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), cet outil doit être utilisé à la place.

## Utilisation

1. Si l'esquisse doit être [ancrée](/Part_EditAttachment/fr "Part EditAttachment/fr") à une géométrie existante : sélectionnez un objet avec une forme, ou un ou plusieurs sommets, arêtes et/ou faces, et/ou un plan.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_NewSketch.svg) [Créer une esquisse](/Sketcher_NewSketch "Sketcher NewSketch").
   * Sélectionnez l'option **Esquisse → ![](/images/Sketcher_NewSketch.svg) Créer une esquisse** du menu.
3. Si la géométrie a été sélectionnée :
   1. La fenêtre de dialogue **Ancrage de l'esquisse** s'ouvre.
   2. Sélectionnez un [mode d'ancrage](/Part_EditAttachment/fr#Modes_d'ancrage "Part EditAttachment/fr") dans la liste déroulante ou sélectionnez **Ne pas ancrer** pour ignorer la sélection.
   3. Appuyez sur le bouton OK.
4. S'il n'y a pas de sélection ou si **Ne pas ancrer** a été sélectionné à l'étape précédente :
   1. La fenêtre de dialogue **Sélection du plan** s'ouvre.
   2. Spécifiez le plan pour l'orientation. Le plan est relatif au système de coordonnées local dans lequel se trouve l'esquisse :
      * Si la case **Inverser la direction** n'est pas cochée :
        + Haut : **Plan XY**
        + Avant : **Plan XZ**
        + Droit : **Plan YZ**
      * Si la case **Sens inverse** est cochée :
        + Bas : **Plan XY**
        + Arrière : **Plan XZ**
        + Gauche : **Plan YZ**
   3. Vous pouvez changer le **Décalage**. Le décalage est mesuré par rapport à l'axe Z, Y ou X du système de coordonnées local.
   4. Appuyez sur le bouton OK.
   5. Une esquisse est créée.
5. L'esquisse est mise en mode édition et la [fenêtre de dialogue de Sketcher](/Sketcher_Dialog/fr "Sketcher Dialog/fr") s'ouvre.
6. Pour terminer le mode édition, voir ![](/images/Sketcher_LeaveSketch.svg) [Sketcher Quitter l'esquisse](/Sketcher_LeaveSketch/fr "Sketcher LeaveSketch/fr").

## Remarques

* Les esquisses existantes peuvent être attachées à des objets (différents) avec [Sketcher Ancrer une esquisse](/Sketcher_MapSketch/fr "Sketcher MapSketch/fr") ou détachées et réorientées avec [Sketcher Réorienter une esquisse](/Sketcher_ReorientSketch/fr "Sketcher ReorientSketch/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_NewSketch/fr&oldid=1495813>"