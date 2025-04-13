---
title: FreeCAD et l'importation de maillage
---
## Après l'importation

Après l'importation, le modèle n'est (pour FreeCAD) qu'un assemblage de faces. Vous voudrez peut-être convertir le modèle en une forme que FreeCAD peut reconnaître et qui pourra être modifiée dans FreeCAD.

Pour ce faire :

1. Basculez vers l'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr").
2. Sélectionnez le maillage et allez au menu **Part → [Créer une forme à partir du maillage](/Part_ShapeFromMesh/fr "Part ShapeFromMesh/fr")** ou cliquez sur le bouton ![](/images/Part_ShapeFromMesh.svg) [Créer une forme à partir du maillage](/Part_ShapeFromMesh/fr "Part ShapeFromMesh/fr").
3. Cliquez sur OK dans la fenêtre de dialogue.
4. Sélectionnez la forme créée.
5. Sélectionnez **Part → [Convertir en solide](/Part_MakeSolid/fr "Part MakeSolid/fr")**.
6. Sélectionnez le nouveau solide créé.
7. Allez à **Part → Créer une copie → [Affiner la forme](/Part_RefineShape/fr "Part RefineShape/fr")** ou pressez le bouton ![](/images/Part_RefineShape.svg) [Affiner la forme](/Part_RefineShape/fr "Part RefineShape/fr").

**Remarque :** la dernière étape n’est pas nécessaire mais elle nettoiera le solide de la plupart de ses arêtes résiduelles sur les surfaces planes et cylindriques.

## Erreurs

### "cannot convert because shape is not a shell"

Votre coque semble avoir des erreurs, peut-être qu'elle n'est pas fermée (elle serait trouée). Étant donné que les fonctions de l'atelier Mesh de FreeCAD sont un peu limitées pour le moment, vous pouvez essayer d’examiner et de réparer votre modèle avec un logiciel tiers. Après cela, vous pouvez essayer à nouveau d’importer et de convertir votre modèle.

## Programmes tierces

* [MeshLab](https://www.meshlab.net/)
  + licence : open source (GPL V2)
  + fonctionne sous Windows 32/64 bits, Linux et macOS
* [Meshmixer](https://meshmixer.com/)
  + Licence : freeware
  + fonctionne sous Windows 64-bit

## Tutoriels

* [Importer des STL ou OBJ](/Import_from_STL_or_OBJ/fr "Import from STL or OBJ/fr")
* [Exporter des STL ou OBJ](/Export_to_STL_or_OBJ/fr "Export to STL or OBJ/fr")

## En relation

* [FreeCAD How to Import Export](/index.php?title=FreeCAD_Howto_Import_Export/fr&action=edit&redlink=1 "FreeCAD Howto Import Export/fr (page does not exist)")

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_and_Mesh_Import/fr&oldid=1514541>"