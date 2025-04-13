---
title: Mesh Importer un maillage
---
|  |
| --- |
| Mesh Importer un maillage |
| Emplacement du menu |
| Maillages → Importer un maillage... |
| Ateliers |
| [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Std Importer](/Std_Import/fr "Std Import/fr"), [Std Ouvrir](/Std_Open/fr "Std Open/fr"), [Import Export](/Import_Export/fr "Import Export/fr") |
|  |

## Description

La commande **Importer un maillage** importe la géométrie d'un format de fichier de maillage dans le document actif. Plusieurs formats de fichiers sont pris en charge. La commande crée un objet maillage non paramétrique, un [Mesh Feature](/Mesh_Feature/fr "Mesh Feature/fr").

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Mesh_Import.svg) Importer un maillage....
   * Sélectionnez l'option **Maillages → ![](/images/Mesh_Import.svg) Importer un maillage...** du menu.
   * Sélectionnez l'option **![](/images/Mesh_Import.svg) Importer un maillage...** du menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou le menu contextuel de la [vue 3D](/3D_view/fr "3D view/fr"). Cette option n'est disponible que si un objet maillé existant a été sélectionné. Notez que l'objet sélectionné n'est en fait pas utilisé ou modifié par la commande.
2. Sélectionnez éventuellement le format de fichier correct dans la fenêtre de dialogue.
3. Sélectionner un fichier.
4. Appuyez sur le bouton Ouvrir.

## Formats de fichiers supportés

La commande accepte : les fichiers stl, ast, bms, obj, off, iv, ply, nas et bdf. Pour le format de fichier NASTRAN (nas/bdf), seules les cartes GRID, CTRIA3 et CQUAD4 sont supportées.

## Préférences

* Le dernier emplacement de fichier utilisé est enregistré : **Outils → Editer les paramètres... → BaseApp → Preferences → General → FileOpenSavePath**.

## Propriétés

Voir : [Mesh Feature](/Mesh_Feature/fr "Mesh Feature/fr").

## Script

Voir aussi : [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour importer un fichier maillé, utilisez la méthode `insert` du module Mesh.

```
import Mesh
Mesh.insert('D:/testfiles/cylinder.stl')

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Import/fr&oldid=1496100>"