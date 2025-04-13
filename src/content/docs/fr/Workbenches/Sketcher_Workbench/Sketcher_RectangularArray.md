---
title: Sketcher Répétition linéaire
---
:::caution
Cet outil est obsolète, il ne sera plus disponible dansversion 1.0 et suivantes. Utiliser plutôtSketcher Déplacer/dupliquer.
:::

|  |
| --- |
| Sketcher Répétition linéaire |
| Emplacement du menu |
| Esquisse → Outils d'esquisse → Créer une répétition linéaire |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| Z A |
| Introduit dans la version |
| 0.16 |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande ![](/images/Sketcher_RectangularArray.svg) Sketcher Répétition linéaire crée un réseau d'éléments sélectionnés d'esquisses.

## Utilisation

1. Sélectionnez les éléments de l'esquisse dans le [panneau des tâches](/Task_panel/fr "Task panel/fr") ou dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Sketcher_RectangularArray.svg) Créer une répétition linéaire.
   * Sélectionnez l'option **Esquisse → Outils d'esquisse → ![](/images/Sketcher_RectangularArray.svg) Créer une répétition linéaire** du menu.
3. Spécifiez les options du réseau dans la fenêtre de dialogue qui s'ouvre.
4. Appuyez sur le bouton OK.
5. Déplacez la souris dans la [vue 3D](/3D_view/fr "3D view/fr") vers le point de référence souhaité.  
   En maintenant Ctrl enfoncée, l'angle par rapport au point de référence peut être fixé par pas de 5°. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")
6. Cliquez avec le bouton gauche de la souris dans la vue 3D pour créer la répétition.
7. Pour définir les distances entre les éléments de la répétition, modifiez les contraintes dimensionnelles de la répétition.

## Options

![](/images/Sketcher_RectangularArray_Options.jpg)

La **Répétition linéaire** a les options suivantes :

* **Colonnes** : nombre de colonnes du réseau.
* **Rangées** : nombre de rangées du réseau.
* **Espacement vertical/horizontal égal** : si la distance verticale entre les éléments de la répétition doit être la même que la distance horizontale.
* **Contraindre la séparation entre éléments** : lorsque cette option est cochée, la distance entre les éléments de la répétition sera contrainte.  
  Si vous savez par exemple seulement que vous avez besoin d'une répétition de 23 x 15 mm, utilisez cette option pour pouvoir ensuite modifier ces contraintes aux dimensions dont vous avez besoin.
* **Clone** : si cette option est sélectionnée, les contraintes dimensionnelles sont remplacées par des contraintes géométriques dans les copies, de sorte que toute modification de l'élément original se reflète également dans les copies.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_RectangularArray/fr&oldid=1496135>"