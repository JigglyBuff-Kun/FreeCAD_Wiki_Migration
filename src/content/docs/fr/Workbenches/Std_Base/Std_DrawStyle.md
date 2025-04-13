---
title: Std Style de représentation
---
|  |
| --- |
| Std Style de représentation |
| Emplacement du menu |
| Affichage → Style de représentation → ... |
| Ateliers |
| Tous |
| Raccourci par défaut |
| V 1 - V 7 |
| Introduit dans la version |
| - |
| Voir aussi |
| [Std Boîte englobante](/Std_SelBoundingBox/fr "Std SelBoundingBox/fr") |
|  |

## Description

La commande **Std Style de représentation** peut remplacer l'effet de la [propriété](/Property_editor/fr "Property editor/fr") Vue**Display Mode** des objets dans une [vue 3D](/3D_view/fr "3D view/fr").

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Cliquez sur la flèche noire vers le bas à droite du bouton ![](/images/Std_DrawStyleAsIs.svg) Style de représentation et sélectionnez un style dans le menu déroulant.
   * Dans le menu, allez à **Affichage → Style de représentation** et sélectionnez un style.
   * Dans le menu contextuel de la [vue 3D](/3D_view/fr "3D view/fr"), accédez à **Style de représentation** et sélectionnez un style.
   * Utilisez l'un des raccourcis clavier : V puis 1, 2, 3, 4, 5, 6 or 7.

## Styles des représentations disponibles

### Par défaut

Le style **Par défaut** ne supplante pas Vue**Display Mode** des objets.

![](/images/Std_DrawStyleAsIs_example.png)

4 objets identiques chacun avec un mode d'affichage différent (de gauche à droite: "Points", "Filaire", "Ombré" et "Filaire ombré") avec le style de représentation **Par défaut**

### Points

Le style **Points** remplace Vue**Display Mode** des objets. Ce style correspond au mode d'affichage "Points". Les sommets sont affichés en couleurs unies. Les arêtes et les faces ne sont pas affichées.

![](/images/Std_DrawStylePoints_example.png)

Les mêmes objets avec le style "Points" appliqué

### Filaire

Le style **Filaire** remplace Vue**Display Mode** des objets. Ce style correspond au mode d'affichage "Filaire". Les sommets et les bords sont affichés en couleurs unies. Les faces ne sont pas affichés.

![](/images/Std_DrawStyleWireframe_example.png)

Les mêmes objets avec le style "Filaire" appliqué

### Ligne cachée

Le style **Ligne cachée** remplace Vue**Display Mode** des objets. Les objets sont affichés comme s'ils étaient convertis en maillages triangulaires.

![](/images/Std_DrawStyleHiddenLine_example.png)

Les mêmes objets avec le style "Ligne cachée" appliqué

### Pas d'ombrage

Le style **Pas d'ombrage** remplace Vue**Display Mode** des objets. Les sommets, les bords et les faces sont affichés en couleurs unies.

![](/images/Std_DrawStyleNoShading_example.png)

Les mêmes objets avec le style "Pas d'ombrage" appliqué

### Ombré

Le style **Ombré** remplace Vue**Display Mode** des objets. Ce style correspond au mode d'affichage "Ombré". Les sommets et les bords ne sont pas affichés. Les faces sont éclairés en fonction de leur orientation.

![](/images/Std_DrawStyleShaded_example.png)

Les mêmes objets avec le style "Ombré" appliqué

### Filaire ombré

Le style **Filaire ombré** remplace Vue**Display Mode** des objets. Ce style correspond au mode d'affichage "Filaire ombré". Les sommets et les bords sont affichés en couleurs unies. Les faces sont éclairés en fonction de leur orientation.

![](/images/Std_DrawStyleFlatLines_example.png)

Les mêmes objets avec le style "Filaire ombré" appliqué

## Remarques

* Les objets dans une [vue 3D](/3D_view/fr "3D view/fr") ont également une propriété Vue**Draw Style**. Cette propriété contrôle le type de ligne utilisé pour les bords. La commande Std Style de représentation ne remplace pas cette propriété.
* Pour une macro, pour basculer entre deux styles de dessin, voir : [Macro Toggle Drawstyle](/Macro_Toggle_Drawstyle/fr "Macro Toggle Drawstyle/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DrawStyle/fr&oldid=1449863>"