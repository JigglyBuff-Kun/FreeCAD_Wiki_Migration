---
title: Sketcher Déplacer
---
:::caution
Cet outil est obsolète, il ne sera plus disponible dansversion 1.0 et suivantes. Utiliser plutôtSketcher Déplacer/dupliquer.
:::

|  |
| --- |
| Sketcher Déplacer |
| Emplacement du menu |
| Esquisse → Outils d'esquisse → Déplacer |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| Z M |
| Introduit dans la version |
| 0.18 |
| Voir aussi |
| [Sketcher Cloner](/Sketcher_Clone/fr "Sketcher Clone/fr"), [Sketcher Copier](/Sketcher_Copy/fr "Sketcher Copy/fr") |
|  |

## Description

La commande ![](/images/Sketcher_Move.svg) Sketcher Déplacer déplace les éléments d'une esquisse sélectionnée d'un point à un autre, en utilisant le dernier point sélectionné comme référence.

![](/images/Sketcher_move.png)

La séquence de clics est indiquée par des flèches jaunes numérotées.  
Sélectionner l'élément **A**. Une ligne vectorielle indiquée par deux lignes rouges à partir du point pivot **A** pointant vers le numéro de la position de la souris en **2** apparait.  
Déplacer le pointeur de la souris sur l'emplacement de la cible **3**. L'élément en **B** est auto-contraint au point **3**.

## Utilisation

1. Sélectionner les éléments d'esquisse pour l'opération de déplacement.
2. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le bouton ![](/images/Sketcher_Move.svg) Déplacer de la barre d'outils
   * Utiliser les raccourcis clavier Z puis M
   * Utiliser l'entrée **Esquisse → Outils d'esquisse → ![](/images/Sketcher_Move.svg) Déplacer** du menu
3. Déplacer la souris dans la [vue 3D](/3D_view/fr "3D view/fr") à l'endroit souhaité.  
   En maintenant Ctrl enfoncé (Cmd pour macOS), l'angle par rapport à l'emplacement peut être fixé par pas de 5°. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")
4. Clic gauche de la souris dans la vue 3D pour terminer le déplacement. Les contraintes existantes se déplacent également.
5. Si vous voulez détacher un élément et le déplacer librement, supprimez ses contraintes de verrouillage et faites-le glisser avec la souris.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Move/fr&oldid=1411394>"