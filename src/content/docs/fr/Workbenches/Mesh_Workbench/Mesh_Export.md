---
title: Mesh Exporter un maillage
---
|  |
| --- |
| Mesh Exporter le maillage |
| Emplacement du menu |
| Maillages → Exporter le maillage... |
| Ateliers |
| [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Std Exporter](/Std_Export/fr "Std Export/fr"), [Import Export](/Import_Export/fr "Import Export/fr") |
|  |

## Description

La commande **Exporter un maillage** exporte un objet maillé dans un format de fichier maillé. Plusieurs formats de fichiers sont pris en charge.

## Utilisation

1. Sélectionnez un seul objet maillé.
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Mesh_Export.svg) Exporter le maillage....
   * Sélectionnez l'option **Maillages → ![](/images/Mesh_Export.svg) Exporter le maillage...** du menu.
   * Sélectionnez l'option **![](/images/Mesh_Export.svg) Exporter le maillage...** du menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou le menu contextuel de la [vue 3D](/3D_view/fr "3D view/fr").
3. Sélectionnez le format de fichier correct dans la fenêtre de dialogue.
4. Entrez un nom de fichier. Si vous avez sélectionné l'option `Tous les fichiers (*.*)` à l'étape précédente et si vous ne spécifiez pas d'extension de fichier ici, l'extension .stl sera utilisée.
5. Appuyez sur le bouton Sauvegarder.

## Remarques

* Il existe des [préférences d'exportation liées aux formats Mesh](/Import_Export_Preferences/fr#Formats_Mesh "Import Export Preferences/fr") mais elles ne s'appliquent pas à cette commande. Elles sont utilisées par la commande [Std Exporter](/Std_Export/fr "Std Export/fr").

## Préférences

* Le dernier emplacement de fichier utilisé est enregistré : **Outils → Editer les paramètres... → BaseApp → Preferences → General → FileOpenSavePath**.

## Script

Voir aussi : [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour exporter des objets (y compris des objets maillés) dans un format de fichier maillé, utilisez la méthode `export` du module Mesh.

```
import FreeCAD
import Mesh

doc = FreeCAD.ActiveDocument

Mesh.export([doc.Cone, doc.Cylinder], 'D:/testfiles/mymodel.stl')

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Export/fr&oldid=1496093>"