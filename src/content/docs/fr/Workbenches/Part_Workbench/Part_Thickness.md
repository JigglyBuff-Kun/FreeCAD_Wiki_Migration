---
title: Part Évider
---
|  |
| --- |
| Part Évider |
| Emplacement du menu |
| Part → Évider... |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Part Décaler en 3D](/Part_Offset/fr "Part Offset/fr") |
|  |

## Description

L'outil ![](/images/Part_Thickness.svg) Évider travaille sur une forme solide et la transforme en un objet creux, en donnant à chacune de ses faces une épaisseur définie et constante. Sur certains solides, il permet d'accélérer considérablement le travail et d'éviter de faire des extrusions et des cavités.

## Utilisation

1. Créer un solide
2. Sélectionner une ou plusieurs faces
3. Cliquer sur l'outil ![](/images/Part_Thickness.svg) **Évider...**
4. Régler les paramètres (voir [Options](#Options))
5. Cliquer sur OK pour confirmer, créer l'opération et quitter la fonction
6. Dans le tableau des Propriétés, ajuster les paramètres si nécessaire.

## Options

* **Épaisseur** : épaisseur de la paroi de l'objet résultant, définir la valeur souhaitée
  + Une valeur positive décalera les faces vers l'extérieur
  + Une valeur négative décalera les faces vers l'intérieur
* **Mode**
  + **Objet creux** : sélectionner cette option pour obtenir un élément comme un vase, sans dessus mais avec le fond.
  + **Tube** : sélectionner cette option pour obtenir un objet comme un tube, sans dessus et sans fond. Dans ce cas, il peut être pratique de sélectionner les faces à supprimer avant de démarrer l'outil. Utiliser les boutons de vues prédéfinies ou utiliser les touches numériques.
  + **Recto/verso** :
* **Type de jointure**
  + **Arc** : supprime les bords extérieurs et créer un congé avec un rayon égal à l'épaisseur définie.
  + **Tangent** :
  + **Intersection** :
* **Intersection** :
* **Auto-intersection** : permet l'auto-intersection
* Faces : sélectionner les faces à supprimer puis cliquer Terminé.
* **Mise à jour de la vue** : met à jour automatiquement la vue en temps réel.

## Remarques

* Les objets [App Link](/App_Link/fr "App Link/fr") liés aux types d'objets appropriés peuvent également être utilisés comme objets sources. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")
* Les formes complexes peuvent produire des résultats bizarres et difficiles à prévoir. Inspectez soigneusement la forme obtenue et sauvegardez votre travail avant d'appliquer l'opération.

## Liens

Un bon exemple sur la façon d'utiliser cet outil sur le forum : [Re: Help designing a simple enclosure](http://forum.freecadweb.org/viewtopic.php?f=3&t=3766&p=29741&hilit=enclosure#p29547)

## Exemples

**Cylindre creux**

1. Créer un ![](/images/Part_Cylinder.svg) [Part Cylindre](/Part_Cylinder/fr "Part Cylinder/fr") avec un rayon de 10 mm et une hauteur de 20 mm
2. Sélectionner la surface supérieure et inférieure du cylindre
3. Cliquer sur le bouton ![](/images/Part_Thickness.svg) Évider... (pas besoin de modifier les paramètres par défaut) et appuyer sur OK

Remarques :

* Pour cette forme, pensez à utiliser ![](/images/Part_Tube.svg) [Part Tube](/Part_Tube/fr "Part Tube/fr") à la place.
* Sélectionnez la surface supérieure du cylindre uniquement pour créer un réceptacle.

![](/images/ThicknessEsempio1.png)

![](/images/ThicknessEsempio2.png)

**Enveloppe de boîte**

![](/images/ThicknessEsempio3.png)

![](/images/ThicknessEsempio4.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Thickness/fr&oldid=1518115>"