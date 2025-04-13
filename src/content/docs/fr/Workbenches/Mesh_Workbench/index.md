---
title: Atelier Mesh
---

![](/images/Workbench_Mesh.svg)

Icône de l'atelier Mesh

## Introduction

L'![](/images/Workbench_Mesh.svg) atelier Mesh manipule des [maillages triangulés](http://fr.wikipedia.org/wiki/Triangle_mesh). Les maillages (on utilise aussi le mot anglais [mesh](<http://fr.wikipedia.org/wiki/Mesh_(Objet)>)) sont un type particulier d'objets 3D, composés de triangles connectés par leurs arêtes et leurs sommets (aussi appelés vertices).

De nombreuses applications 3D, comme [SketchUp](https://fr.wikipedia.org/wiki/SketchUp), [Blender](https://fr.wikipedia.org/wiki/Blender), [Maya](https://fr.wikipedia.org/wiki/Autodesk_Maya) et [3D Studio Max](https://fr.wikipedia.org/wiki/Autodesk_3ds_Max) utilisent les maillages comme principal type d'objet 3D. Comme les maillages sont des objets très simples, ne contenant que des sommets (points), des arêtes et des faces triangulaires, ils sont très faciles à créer, à modifier, à subdiviser, à étirer, et peuvent facilement passer d'une application à l'autre sans perte de détails. En outre, comme les maillages contiennent des données très simples, les applications 3D peuvent généralement en gérer de très grandes quantités sans utiliser beaucoup de ressources. Pour ces raisons, les maillages sont souvent le type d'objet 3D de choix pour les applications de cinéma, d'animation et de création d'images.

Cependant, dans le domaine de l'ingénierie, les maillages présentent une grande limitation : ils ne peuvent pas définir avec précision les surfaces courbes. C'est pourquoi FreeCAD s'appuie à la place sur [Brep](https://fr.wikipedia.org/wiki/B-Rep). L'atelier de maillage propose certaines commandes pour manipuler directement les maillages, mais il est le plus souvent utilisé pour importer des données de maillage 3D et les convertir en solide à utiliser avec l'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr") ou l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").

![](/images/Mesh_example.jpg)

## Outils

Tous les outils de l'atelier Mesh sont accessibles depuis le menu **Maillages**. Presque tous sont également disponibles dans l'une des barres d'outils Mesh.

- ![](/images/Mesh_Import.svg) [Importer un maillage](/Mesh_Import/fr "Mesh Import/fr") : importe un objet maillé depuis un fichier.

- ![](/images/Mesh_Export.svg) [Exporter le maillage](/Mesh_Export/fr "Mesh Export/fr") : exporte un objet maillé vers un fichier.

- ![](/images/Mesh_FromPartShape.svg) [Créer un maillage](/Mesh_FromPartShape/fr "Mesh FromPartShape/fr") : crée des objets maillés à partir de la forme d'objets.

- ![](/images/Mesh_RemeshGmsh.svg) [Remailler avec Gmsh](/Mesh_RemeshGmsh/fr "Mesh RemeshGmsh/fr") : remaille un objet maillé.

* Analyser
  - ![](/images/Mesh_Evaluation.svg) [Evaluation](/Mesh_Evaluation/fr "Mesh Evaluation/fr") : évalue et répare un objet maillé.
  - ![](/images/Mesh_EvaluateFacet.svg) [Infos sur la face](/Mesh_EvaluateFacet/fr "Mesh EvaluateFacet/fr") : affiche des informations sur les faces des objets maillés.
  - ![](/images/Mesh_CurvatureInfo.svg) [Info de courbures](/Mesh_CurvatureInfo/fr "Mesh CurvatureInfo/fr") : affiche la courbure absolue des [courbures](/Mesh_VertexCurvature/fr "Mesh VertexCurvature/fr") aux points sélectionnés.
  - ![](/images/Mesh_EvaluateSolid.svg) [Solidité du maillage](/Mesh_EvaluateSolid/fr "Mesh EvaluateSolid/fr") : vérifie si un objet maillé est solide.
  - ![](/images/Mesh_BoundingBox.svg) [Limites englobantes](/Mesh_BoundingBox/fr "Mesh BoundingBox/fr") : affiche les coordonnées de la boîte englobante d'un objet maillé.

- ![](/images/Mesh_VertexCurvature.svg) [Courbure](/Mesh_VertexCurvature/fr "Mesh VertexCurvature/fr") : crée des objets maillés de courbure pour les objets maillés.

- ![](/images/Mesh_HarmonizeNormals.svg) [Harmoniser les normales](/Mesh_HarmonizeNormals/fr "Mesh HarmonizeNormals/fr") : harmonise les normales d'objets maillés.

- ![](/images/Mesh_FlipNormals.svg) [Inverser les normales](/Mesh_FlipNormals/fr "Mesh FlipNormals/fr") : inverse les normales d'objets maillés.

- ![](/images/Mesh_FillupHoles.svg) [Remplir les trous](/Mesh_FillupHoles/fr "Mesh FillupHoles/fr") : remplit les trous dans des objets maillés.

- ![](/images/Mesh_FillInteractiveHole.svg) [Boucher un trou](/Mesh_FillInteractiveHole/fr "Mesh FillInteractiveHole/fr") : remplit des trous sélectionnés d'objets maillés.

- ![](/images/Mesh_AddFacet.svg) [Ajouter un triangle](/Mesh_AddFacet/fr "Mesh AddFacet/fr") : ajoute des faces le long de la limite d'un objet maillé ouvert.

- ![](/images/Mesh_RemoveComponents.svg) [Supprimer des composants](/Mesh_RemoveComponents/fr "Mesh RemoveComponents/fr") : supprime des faces d'objets maillés.

- ![](/images/Mesh_RemoveCompByHand.svg) [Supprimer manuellement des composants](/Mesh_RemoveCompByHand/fr "Mesh RemoveCompByHand/fr") : supprime des composants d'objets maillés.

- ![](/images/Mesh_Segmentation.svg) [Segmentation](/Mesh_Segmentation/fr "Mesh Segmentation/fr") : crée des segments maillés séparés pour des types de surface spécifiés d'un objet maillé.

- ![](/images/Mesh_SegmentationBestFit.svg) [Segmentation adaptée](/Mesh_SegmentationBestFit/fr "Mesh SegmentationBestFit/fr") : crée des segments de maillage distincts pour des types de surface spécifiés d'un maillage et peut identifier leurs paramètres.

- ![](/images/Mesh_Smoothing.svg) [Lissage](/Mesh_Smoothing/fr "Mesh Smoothing/fr") : lisse des objets maillés.

- ![](/images/Mesh_Decimating.svg) [Décimation](/Mesh_Decimating/fr "Mesh Decimating/fr") : réduit le nombre de faces dans les objets maillés.

- ![](/images/Mesh_Scale.svg) [Echelle](/Mesh_Scale/fr "Mesh Scale/fr") : met à l'échelle les objets maillés.

- ![](/images/Mesh_BuildRegularSolid.svg) [Solide régulier](/Mesh_BuildRegularSolid/fr "Mesh BuildRegularSolid/fr") : crée un objet maillé solide paramétrique régulier.

* Opérations booléennes

  - ![](/images/Mesh_Union.svg) [Union](/Mesh_Union/fr "Mesh Union/fr") : crée un objet maillé qui est l'union de deux objets maillés.
  - ![](/images/Mesh_Intersection.svg) [Intersection](/Mesh_Intersection/fr "Mesh Intersection/fr") : crée un objet maillé qui est l'intersection de deux objets maillés.
  - ![](/images/Mesh_Difference.svg) [Différence](/Mesh_Difference/fr "Mesh Difference/fr") : crée un objet maillé qui est la différence de deux objets maillés.

* Couper
  - ![](/images/Mesh_PolyCut.svg) [Couper le maillage](/Mesh_PolyCut/fr "Mesh PolyCut/fr") : coupe des faces entières à partir des objets maillés.
  - ![](/images/Mesh_PolyTrim.svg) [Ajuster](/Mesh_PolyTrim/fr "Mesh PolyTrim/fr") : ajuste les faces et les parties de faces des objets maillés.
  - ![](/images/Mesh_TrimByPlane.svg) [Ajuster par plan](/Mesh_TrimByPlane/fr "Mesh TrimByPlane/fr") : ajuste les faces et les parties de faces d'un côté d'un plan à partir d'un objet maillé.
  - ![](/images/Mesh_SectionByPlane.svg) [Section](/Mesh_SectionByPlane/fr "Mesh SectionByPlane/fr") : crée une coupe transversale à travers un objet maillé.
  - ![](/images/Mesh_CrossSections.svg) [Coupes](/Mesh_CrossSections/fr "Mesh CrossSections/fr") : crée plusieurs sections transversales à travers les objets maillés.

- ![](/images/Mesh_Merge.svg) [Fusionner](/Mesh_Merge/fr "Mesh Merge/fr") : crée un objet maillé en combinant les mailles d'au moins deux objets maillés.

- ![](/images/Mesh_SplitComponents.svg) [Éclater par composants](/Mesh_SplitComponents/fr "Mesh SplitComponents/fr") : divise un objet maillé en ses composants.

- ![](/images/MeshPart_CreateFlatMesh.svg) [Développer un maillage](/MeshPart_CreateFlatMesh/fr "MeshPart CreateFlatMesh/fr") : crée une représentation à plat d'un objet maillé.

- ![](/images/MeshPart_CreateFlatFace.svg) [Développer une face](/MeshPart_CreateFlatFace/fr "MeshPart CreateFlatFace/fr") : crée une représentation à plat d'une face d'un objet.

## Préférences

- Il existe des [préférences d'exportation liées aux formats Mesh](/Import_Export_Preferences/fr#Formats_Mesh "Import Export Preferences/fr") mais elles ne s'appliquent pas à cette commande. Elles sont utilisées par la commande [Std Exporter](/Std_Export/fr "Std Export/fr").

Les préférences de l'atelier Mesh se trouvent dans les groupes suivantes de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") :

- ![](/images/Preferences-display.svg) [Affichage](/Preferences_Editor/fr#Pr.C3.A9f.C3.A9rences_d.27affichage "Preferences Editor/fr") : à la page [Vue du maillage](/Preferences_Editor/fr#Vue_maillage "Preferences Editor/fr"), plusieurs préférences peuvent être définies.
- ![](/images/Preferences-openscad.svg) [OpenSCAD](/OpenSCAD_Preferences/fr "OpenSCAD Preferences/fr") : les commandes [Mesh Union](/Mesh_Union/fr "Mesh Union/fr"), [Mesh Intersection](/Mesh_Intersection/fr "Mesh Intersection/fr") et [Mesh Différence](/Mesh_Difference/fr "Mesh Difference/fr") nécessitent [OpenSCAD](http://www.openscad.org/) et utilisent la préférence **OpenSCAD executable** pour trouver son exécutable.

## Remarques

- D'autres outils de maillage sont disponibles dans l'![](/images/Workbench_OpenSCAD.svg) [atelier OpenSCAD](/OpenSCAD_Workbench/fr "OpenSCAD Workbench/fr").
- Voir [Mesh Scripts](/Mesh_Scripting/fr "Mesh Scripting/fr") pour manipuler et créer des maillages en utilisant [Python](/Python/fr "Python/fr").
- Voir aussi [FreeCAD et l'importation de maillage](/FreeCAD_and_Mesh_Import/fr "FreeCAD and Mesh Import/fr")
- Voir [Asymptote](/Asymptote/fr "Asymptote/fr") pour exporter des maillages au format Asymptote.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Workbench/fr&oldid=1565541>"
