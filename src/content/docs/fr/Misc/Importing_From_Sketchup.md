---
title: Importer depuis Sketchup
---
## Meilleure méthode

Par expérience, la meilleure méthode pour importer un fichier à partir de Sketchup consiste à utiliser le format Collada (\*.dae). FreeCAD ne supporte pas nativement le format Collada. Pour disposer de cette fonctionnalité dans FreeCAD, l'utilisateur doit installer un module Python pour importer et exporter le format. C'est une tâche relativement facile à effectuer et des instructions peuvent être trouvées sur la page [Modules python supplémentaires](/Extra_python_modules/fr "Extra python modules/fr"). Le lien direct vers les instructions est - [Modules python supplémentaires: pyCollada](http://www.freecadweb.org/wiki/index.php?title=Extra_python_modules/fr#pyCollada).

## Importer les fichiers Collada (\*.dae)

Si le module pyCollada a été installé, vous pouvez ouvrir ou importer les fichiers Collada comme n'importe quel autre. Sélectionnez le menu Fichier, puis choisissez Ouvrir ou Importer. Sélectionnez votre fichier Collada et cliquez sur Ouvrir. Vous pouvez filtrer le type de fichier dans la liste déroulante Type de fichier de la boîte de dialogue Ouvrir ou Importer et en sélectionnant Collada (\*.dae) dans cette liste.

## Alternatives

À l'aide d'un plug-in Sketchup d'exportation STL, vous pouvez également choisir d'utiliser le format pris en charge de manière native par FreeCAD. Un certain nombre de ces plugins sont disponibles pour Sketchup et certains fonctionnent mieux que d'autres. Quelques recherches peuvent être nécessaires à l'utilisateur pour déterminer lequel répondra le mieux à ses besoins.

## Remarques

Collada (\*.dae) et STL sont des formats maillés. Pour utiliser ces fichiers dans FreeCAD, qui fonctionne principalement avec des solides, un travail supplémentaire sur les objets importés à l'aide de ces formats sera requis dans la plupart des cas.

## En relation

* [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export") (en)
* [Import Export](/Import_Export/fr "Import Export/fr")
* [Préférences Importer/Exporter](/Import_Export_Preferences/fr "Import Export Preferences/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Importing_From_Sketchup/fr&oldid=1516082>"