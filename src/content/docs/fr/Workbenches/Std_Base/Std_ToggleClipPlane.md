---
title: Std Couper selon des plans
---
|  |
| --- |
| Std Couper selon des plans |
| Emplacement du menu |
| Affichage → Couper selon des plans |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Part Coupe persistante](/Part_SectionCut/fr "Part SectionCut/fr") |
|  |

## Description

La commande **Std Couper selon des plans** permet de masquer temporairement les objets et leurs parties sur un côté d'un maximum de trois plans virtuels dans la [vue 3D](/3D_view/fr "3D view/fr") active.

![](/images/Std_ToggleClipPlane_example.png)

Un objet creux coupé

![](/images/Std_ToggleClipPlane_Dialog.png)

La boite de dialogue Couper selon des plans

## Utilisation

1. Sélectionnez l'option **Affichage → ![](/images/Std_ToggleClipPlane.svg) Couper selon des plans** du menu.
2. La fenêtre de dialogue **Couper selon des plans** s'ouvre.
3. Faites l'une des choses suivantes :
   * Cochez une ou plusieurs des cases **Couper suivant X** à **Couper suivant Z**.
     + Vous pouvez modifier la ou les distances de décalage.
     + Vous pouvez modifier appuyer sur le bouton Retourner pour changer le côté du plan de découpe où les objets sont masqués.
   * Cochez la case **Couper suivant une direction personnalisée**.
     + Vous pouvez modifier la distance de décalage.
     + Effectuez l'une des actions suivantes :
       - Appuyez sur le bouton Vue pour utiliser la direction de la vue en cours.
       - Cochez la case **Ajuster la direction de la vue** pour une direction qui s'adapte dynamiquement et afficher les changements.
       - Spécifiez la direction en entrant les coordonnées X, Y et Z d'un vecteur normal.
4. Vous pouvez modifier la vue pour inspecter le modèle.
5. Appuyez sur le bouton Fermer pour fermer le panneau des tâches et terminer la commande.

## Remarques

* Pour distinguer clairement l'intérieur des objets partiellement coupés, changez leur propriété Vue**Lighting** en `One side`. La couleur du côté intérieur de leurs surfaces dépendra alors des paramètres de rétroclairage : **Édition → Préférences... → Affichage → Vue 3D → Couleur du rétroéclairage - Intensité**. Voir [Éditeur de préférences](/Preferences_Editor/fr#Vue_3D "Preferences Editor/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleClipPlane/fr&oldid=1496151>"