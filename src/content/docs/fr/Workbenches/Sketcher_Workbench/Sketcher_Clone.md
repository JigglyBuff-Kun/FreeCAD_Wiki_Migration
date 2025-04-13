---
title: Sketcher Cloner
---
:::caution
Cet outil est obsolète, il ne sera plus disponible dansversion 1.0 et suivantes. Utiliser plutôtSketcher Déplacer/dupliquer.
:::

|  |
| --- |
| Sketcher Cloner |
| Emplacement du menu |
| Esquisse → Outils d'esquisse → Cloner |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| Z L |
| Introduit dans la version |
| 0.16 |
| Voir aussi |
| [Sketcher Copier](/Sketcher_Copy/fr "Sketcher Copy/fr"), [Sketcher Déplacer](/Sketcher_Move/fr "Sketcher Move/fr") |
|  |

## Description

La commande ![](/images/Sketcher_Clone.svg) Sketcher Cloner clone les éléments d'esquisse sélectionnés d'un point à un autre, en utilisant le dernier point sélectionné comme référence. Si des contraintes font partie des éléments source, les nouvelles contraintes sont liées aux contraintes source. si les contraintes du source sont modifiées, les contraintes du clone le sont également. Pour éviter ce lien, voir ![](/images/Sketcher_Copy.svg) [Sketcher Copier](/Sketcher_Copy/fr "Sketcher Copy/fr").

Notez qu'un clone d'un clone devient une copie de l'esquisse. Si vous souhaitez créer des contraintes liées, clonez à nouveau les éléments source d'origine.

## Utilisation

1. Sélectionner le ou les éléments de l'esquisse à cloner.
2. Il y a plusieurs façons de lancer la commande :
   * Appuyer sur le bouton ![](/images/Sketcher_Clone.svg) Cloner.
   * Sélectionner l'option **Sketch → Sketcher tools → ![](/images/Sketcher_Clone.svg) Cloner** du menu.
   * Raccourci clavier : Z puis L.
3. Déplacer la souris dans la [vue 3D](/3D_view/fr "3D view/fr") à l'emplacement souhaité pour le clone.  
   En maintenant Maj enfoncé, l'angle par rapport au point d'emplacement peut être fixé par pas de 5°. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")
4. Clic gauche de la souris dans la vue 3D pour créer le clone.

Aucune contrainte supplémentaire n'est ajoutée pour le clone.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Clone/fr&oldid=1411390>"