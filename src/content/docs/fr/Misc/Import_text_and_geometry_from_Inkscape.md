---
title: Importer texte et géométrie depuis Inkscape
---
|  |
| --- |
| Tutoriel |
| Thème |
| Importer texte et géométrie depuis Inkscape |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| 30 minutes |
| Auteurs |
| r-frank |
| Version de FreeCAD |
| 0.16.6704 |
| Fichiers exemples |
|  |
| Voir aussi |
| *None* |
|  |

## Introduction

Ce tutoriel est censé montrer comment importer du texte ou de la géométrie créé avec inkscape via svg-format dans FreeCAD.   
Inkscape 0.91 et FreeCAD 0.16.6704 sur Windows sont utilisés pour ces opérations.

## Conseils généraux pour l'importation à partir de inkscape

* l'importation svg dans FreeCAD ne peut pas gérer un fichier svg avec une résolution de plus de 45 dpi, alors vérifiez les paramètres dans inkscape
* lors de l'importation d'objets chemin qui n'apparaissent pas très lisses dans la vue 3D dans FreeCAD , cela peut être dû aux paramètres de FreeCAD pour la vue de la forme.
  + dans FreeCAD, choisissez Édition → Préférences → PartDesign → Vue de la forme
  + en ce qui concerne "Tesselation" (mosaïque), la "Déviation maximale pour la zone de délimitation du modèle", la valeur par défaut est "0,5%"
  + le réglage de cette valeur à une valeur inférieure augmentera la douceur du modèle dans la vue 3D (et utilisera plus de performances du PC)
  + n'utilisez pas de valeurs inférieures à "0,01%", cela entraînera probablement un crash de FreeCAD
  + dans ce cas, la suppression des fichiers "system.cfg" et "user.cfg" dans votre répertoire FreeCAD-user résoudra ce problème

## Importation de texte à partir de inkscape

* Dans inkscape, après avoir inséré du texte (et peut-être en appliquant des effets comme plier ou autre chose), assurez-vous de
  + sélectionnez votre texte et choisissez Path → Object to path
  + dégroupez vos objets
  + Enregistrer sous le fichier sous le format "Plain SVG (\*.svg)"
* ouvrez le fichier dans FreeCAD, en choisissant l'option "SVG en tant que géométrie (importSVG)"
* un objet chemin pour chaque lettre/numéro/signe sera créé dans l'arborescence
* utilisez l'outil [Draft Agréger](/Draft_Upgrade/fr "Draft Upgrade/fr") sur chaque objet chemin pour créer des faces
* Utilisez les outils pad ou l'outil [Part Extrusion](/Part_Extrude/fr "Part Extrude/fr") sur les faces pour obtenir des solides
* vous pouvez fusionner vos objets ou utiliser des composés sur eux en fonction de vos travaux prévus

## Importation de géométrie à partir de inkscape

Puisque inkscape et FreeCAD semblent avoir des approches différentes sur la façon d'appliquer des dimensions sur l'objet svg, le flux de travail recommandé semble être :

* dégrouper tous les objets dans inkscape
* sélectionnez tous les objets dans inkscape
* appliquer un style de contour avec une largeur de 0 mm (oui, bien zéro millimètre) à tous les objets
* Enregistrez au format de fichier "Inkscape SVG (\*.svg)" ou "SVG simple (\*.svg)"
* ouvrez le fichier dans FreeCAD, en choisissant l'option "SVG en tant que géométrie (importSVG)"
* les dimensions des objets dans inkscape et dans FreeCAD devraient maintenant être identiques

## Crédits

Merci aux utilisateurs "freecad-heini-1" et "herbk" pour avoir testé et fourni des commentaires précieux.

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_text_and_geometry_from_Inkscape/fr&oldid=1359785>"