---
title: Exportation de résultats transitoires FEM
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Generic macro icon. Create your personal icon with the same name of the macro](/File:Text-x-python.png "Generic macro icon. Create your personal icon with the same name of the macro") export transient FEM results                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Exporte plusieurs résultats FEM à partir d'une analyse transitoire pour le post-traitement dans ParaView. Macro version: 0.1 Last modified: 2019-08-30 FreeCAD version: All Download: [Macro file (3 kB)](https://drive.google.com/file/d/1MSBxLPlQ-TwzF-sFkgOeFb48zij5_scp/view?usp=sharing) [Example file without results (200 kB)](https://drive.google.com/file/d/1m3RiJ-JM7QSJ6YDhZnafHIbyL92V6sYU/view?usp=sharing) [Example file with results (10 MB)](https://drive.google.com/file/d/157aIdVpIyfpVW9WxL-ReGz0FIsQebH_q/view?usp=sharing) [All example files, including the vtk-export folder (21 MB)](https://drive.google.com/file/d/1g-QOJtl3G5KaY2bSrw03NNQ8mnfBi03T/view?usp=sharing) Author: Luftschraube |
| Author                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Luftschraube](/index.php?title=User:Luftschraube&action=edit&redlink=1 "User:Luftschraube (page does not exist)")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Download                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Macro file (3 kB)](https://drive.google.com/file/d/1MSBxLPlQ-TwzF-sFkgOeFb48zij5_scp/view?usp=sharing) [Example file without results (200 kB)](https://drive.google.com/file/d/1m3RiJ-JM7QSJ6YDhZnafHIbyL92V6sYU/view?usp=sharing) [Example file with results (10 MB)](https://drive.google.com/file/d/157aIdVpIyfpVW9WxL-ReGz0FIsQebH_q/view?usp=sharing) [All example files, including the vtk-export folder (21 MB)](https://drive.google.com/file/d/1g-QOJtl3G5KaY2bSrw03NNQ8mnfBi03T/view?usp=sharing)                                                                                                                                                                                                            |
| Links                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2019-08-30                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| All                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| See also                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Description

Cette macro exporte plusieurs objets de résultats FEM d'une analyse transitoire au format VTK et génère un fichier PVU qui peut être utilisé pour charger les résultats directement dans ParaView pour le post-traitement.

## Contexte

Une analyse transitoire dans FreeCAD se termine par un tas d'objets résultats FEM, un pour chaque horodatage. Les résultats individuels peuvent être analysés directement dans FreeCAD et être post-traités en utilisant [pipelines](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"). Cependant, les possibilités dans FreeCAD sont encore limitées, en particulier pour les analyses transitoires. Un meilleur outil pour le post-traitement et la visualisation est ParaView. Vous pouvez exporter des objets individuels de résultats FEM depuis FreeCAD sous forme de fichier .vtk ou .vtu, qui peuvent ensuite être ouverts avec ParaView. Malheureusement, le Workbench FEM ne supporte pas (encore) l'exportation de plusieurs fichiers .vtk en même temps. C'est là que cette macro entre en jeu.

## Utilisation (pour utilisateurs expérimentés)

Exécutez la macro sur un projet FreeCAD qui inclut plusieurs objets de résultat FEM à partir d'une analyse transitoire. Outre le fichier .FCStd, un nouveau dossier 'vtk-export' sera créé, contenant les résultats individuels (fichiers .vtu) et un fichier .pvu pouvant être ouvert à partir de ParaView.

## Utilisation (pas-à-pas avec exemple)

A titre d'exemple, le pliage d'une bande bimétal aluminium/acier est utilisé. Un pas à pas pour créer l'exemple de fichier est fourni [ici](/Transient_FEM_analysis/fr "Transient FEM analysis/fr"), ou vous pouvez télécharger le fichier à partir de la [section téléchargements](#Téléchargements) de cette page. Enregistrez le fichier FCMacro dans le dossier de macros FreeCAD, qui peut être trouvé via Edition → Préférences → Python → Macro.

Avec l'exemple de fichier ouvert, nous allons dans Macro → Macros ..., sélectionnez "ExportTransientResults_190830.FCMacro" (ou le nom sous lequel vous l'avez enregistré) et exécutons la. La macro va maintenant créer un sous-dossier 'vtk-export' en plus du fichier .FCStd. Selon le nombre et la taille des objets de résultat, cela peut prendre un certain temps. Dans la vue Rapport (Vue → Vue Rapport), nous devrions voir 'Macro finished' si tout s'est bien passé - ou quelques messages d'erreur. (Remarque: Parfois, des messages comme 'PropertyFloatList NOT exported to vtk' apparaissent mais j'ai quand même pu travailler avec les fichiers VTK ...) Dans le sous-dossier 'vtk-export', nous trouverons des fichiers .vtu, un pour chaque résultat défini pour chaque horodatage. De plus, un fichier .pvd est créé, qui indique à ParaView quel jeu de résultats appartient à quel horodatage.

Maintenant, nous ouvrons ParaView et allons dans Fichier → Ouvrir ... et ouvrons le fichier .pvd. Dans l'onglet 'Properties', nous cliquons sur 'Apply' pour charger les résultats. Dans l'onglet 'Information', nous verrons une liste _Index_ et _Value_, correspondant aux horodatages des résultats que nous venons d'importer. (Bien sûr, il est toujours judicieux de vérifier si les heures indiquées ici sont correctes ou si quelque chose d'étrange s'est produit pendant l'exportation.) À partir de là, nous pouvons utiliser ParaView pour jouer avec les résultats. Étant donné que ParaView offre de nombreuses possibilités, veuillez vous référer aux documentations appropriées sur Internet.

À des fins de démonstration, visualisons maintenant la température de la bande bimétallique pliée: dans l'onglet 'properties' à gauche, sous 'coloring', nous sélectionnons la température, et l'image est mappée en fonction de la température locale. Via la petite icône avec un coeur, nous sélectionnons l'échelle de couleur 'cool to warm'. Avec les icônes de type enregistreur sur le dessus, nous pouvons parcourir tous les résultats individuels qui ont été créés pendant l'analyse. Le bouton 'play' affichera les images individuelles dans leur séquence. Cependant, les résultats individuels ne sont pas séparés par un intervalle de temps constant, de sorte que l'animation n'est pas proportionnelle dans le temps.

Ce dont nous avons besoin, c'est d'une interpolation des résultats entre les pas de temps, qui est disponible via Filters → Temporal → Temporal Interpolator. Ici, nous choisissons à nouveau la température de coloration. Dans 'animation view' (View → Animation View), nous pouvons maintenant passer du mode «séquence» au mode «temps réel». Nous pouvons également définir l'heure de début (la valeur par défaut est 0,01 s), l'heure de fin et la durée. Alors que les heures de début et de fin se réfèrent au temps de simulation, la durée est le temps réel réel que l'animation prend pour jouer complètement. Avec une durée de 10 s, notre temps de simulation de 60 s sera compressé en 10 s en temps réel.

Nous allons plus loin et souhaitons visualiser le pliage réel de la bande. Avec l'interpolateur temporel sélectionné, nous ajoutons Filters → Common → Warp by Vector. Sous 'vectors', nous choisissons 'DisplacementVectors' et définissons le 'scale factor' à 10. Lorsque nous jouons l'animation maintenant, nous pouvons réellement voir la flexion de la bande mappée en couleur (exagérée par un facteur 10).

![](/images/Transient_FEM_Bimetal_ParaView_%281%29.JPG)

Le post-traitement que nous venons de faire peut être enregistré comme un 'state' dans ParaView, qui peut être ouvert à tout moment et même appliqué à un ensemble de résultats différent.

## Téléchargements

- [Macro file (3 kB)](https://drive.google.com/file/d/1MSBxLPlQ-TwzF-sFkgOeFb48zij5_scp/view?usp=sharing)
- [Exemple de fichier sans résultats (200 kB)](https://drive.google.com/file/d/1m3RiJ-JM7QSJ6YDhZnafHIbyL92V6sYU/view?usp=sharing)
- [Exemple de fichier avec résultats (10 MB)](https://drive.google.com/file/d/157aIdVpIyfpVW9WxL-ReGz0FIsQebH_q/view?usp=sharing)
- [Tous les fichiers d'exemple y compris le dossier vtk-export (21 MB)](https://drive.google.com/file/d/1g-QOJtl3G5KaY2bSrw03NNQ8mnfBi03T/view?usp=sharing)

## Script

The ToolBar Icon

**Macro_export_transient_FEM_results.FCMacro**

```
#!/usr/bin/python
# -*- coding: utf-8 -*-

#
# Macro to export multiple FEM results objects from a transient analysis for
# post-processing in ParaView.
#
# Created by <Luftschraube> under the GNU Lesser General Public License (LGPL)
#
# Version 0.1 (30.08.2019)
#

import FreeCAD
import Fem
import feminout.importVTKResults
import os
from sys import exit

FreeCAD.Console.PrintMessage(">>>---------Macro started\n")

#Get the file path and name of the active document
p = FreeCAD.ActiveDocument.FileName
FilePath = "/".join(p.split("/")[:-1])
FileName = p.split("/")[-1].split(".")[0]
FreeCAD.Console.PrintMessage("File path:" + FilePath + "\n")
FreeCAD.Console.PrintMessage("File name:" + FileName + "\n")
FreeCAD.Console.PrintMessage("\n<<<----------Macro finished with errors\n")

#Get FEM result objects into a list
FreeCAD.Console.PrintMessage("Looking for result objects...")
FEMResultObjects = []

for obj in App.ActiveDocument.Objects:
	if obj.TypeId == "Fem::FemResultObjectPython":
		FEMResultObjects.append(obj.Label)
		#FreeCAD.Console.PrintMessage(obj.Label + '\n')

NumberOfResultObjects = len(FEMResultObjects)
FreeCAD.Console.PrintMessage(str(NumberOfResultObjects) + " found\n")

if NumberOfResultObjects > 0:

	#Export result objects as .vtu file and generate .pvu file
	ExportFolderName = "vtk-export"
	ExportOutputPath = FilePath + "/" + ExportFolderName
	if not os.path.exists(ExportOutputPath):
		os.makedirs(ExportOutputPath)
		FreeCAD.Console.PrintMessage(ExportOutputPath + " has been created\n")
	else:
		FreeCAD.Console.PrintMessage(ExportOutputPath + " already exists\n")

	PVUFile = open(ExportOutputPath + "/" + FileName + ".pvd","w")
	PVUFile.write("<VTKFile type=\"Collection\" version=\"1.0\" byte_order=\"LittleEndian\" header_type=\"UInt64\">\n\t<Collection>\n")

	n = 0
	for ExportObject in sorted(FEMResultObjects):
		n = n + 1

		#Read and format time stamp (e.g., 12.37 s = 0001237)
		FreeCADResultLabelParts = ExportObject.split("_")
		PreDecimal = FreeCADResultLabelParts[-3]
		PostDecimal = FreeCADResultLabelParts[-2]

		if len(PostDecimal) == 1:
			PostDecimal = PostDecimal + str(0)
		TimeValue = float(PreDecimal) + float(PostDecimal)/100
		TimeString = str(int(round(TimeValue*100,0))).zfill(7)

		#For some reason, the VTK exporter expects a list (although only one object is processed at once...) - so build a list with the current object
		ExportObjectList = []
		ExportObjectList.append(FreeCAD.ActiveDocument.getObject(ExportObject))
		FileNameOUT = FileName + "_" + TimeString + ".vtu"
		FilePath = ExportOutputPath + "/" + FileNameOUT
		FreeCAD.Console.PrintMessage(FilePath + " is to be created\n")
		feminout.importVTKResults.export(ExportObjectList,FilePath)

		PVUFile.write("\t\t<DataSet timestep=\"" + str(TimeValue) + "\" file=\"" + FileNameOUT + "\"/>\n")

	#Close the .pvu file
	PVUFile.write("\t</Collection>\n</VTKFile>")
	PVUFile.close()
else:
	FreeCAD.Console.PrintMessage("Nothing to export!")

FreeCAD.Console.PrintMessage('\n<<<----------Macro finished\n')
```

## Liens

Exemple [Analyse FEM transitoire](https://www.freecadweb.org/wiki/Transient_FEM_analysis/fr).

Discussion sur le forum [Export transient FEM results to vtk/vtu for ParaView](https://forum.freecadweb.org/viewtopic.php?f=22&t=37650)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_export_transient_FEM_results/fr&oldid=1296957>"
