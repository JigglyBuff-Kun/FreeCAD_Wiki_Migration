---
title: EM Fichier entrée FH
---
|  |
| --- |
| EM Fichier entrée FH |
| Emplacement du menu |
| EM → FHInputFile |
| Ateliers |
| [EM](/EM_Workbench/fr "EM Workbench/fr") |
| Raccourci par défaut |
| E I |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [EM Solveur FH](/EM_FHSolver/fr "EM FHSolver/fr") |
|  |

## Description

L'outil Fichier entrée FH crée le fichier FastHenry d'entrée basé sur les objets de l'atelier Document EM.

## Utilisation

Pour créer un fichier d'entrée FastHenry :

1. Créez un objet [EM Solveur FH](/EM_FHSolver/fr "EM FHSolver/fr") et d'autres objets d'atelier EM représentant la géométrie 3D requise pour votre modèle.
2. Appuyez sur le bouton ![](/images/EM_FHInputFile.svg) EM FHInputFile ou appuyez sur les touches E puis I.

### Remarques

* Si un fichier portant le même nom existe déjà dans le dossier spécifié dans l'objet [EM Solveur FH](/EM_FHSolver/fr "EM FHSolver/fr"), il vous sera demandé de l'écraser ou non.

* Le document peut également contenir des objets n'appartenant pas à l'atelier EM. Ils seront ignorés lors de la création du fichier d'entrée FastHenry. Vous pouvez donc utiliser tout autre type d'objet FreeCAD comme guide pour vos modèles de l'atelier EM.

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Fichier entrée FH peut-être utilisé dans des [macros](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
node = createFHInputFile(doc=None,filename=None,folder=None)

```

* Génère un fichier d'entrée FastHenry basé sur la géométrie du document actif.
* `doc` est l'objet Document qui doit contenir au moins un objet EM\_FHSolver et la géométrie appropriée. Si aucun `doc` n'est donné, le document actif est utilisé, le cas échéant.
* `filename` est le nom de fichier à utiliser. Si elle n'est pas passée en argument, la propriété Données**Filename** de l'objet FHSolver contenu dans le document sera utilisée. Si la chaîne Données**Folder** dans l'objet FHSolver est vide, la fonction crée un nom de fichier concaténant le nom du document avec l'extension par défaut `EMFHSOLVER_DEF_FILENAME`.
* `folder` est le dossier où le fichier sera stocké. Si elle n'est pas passée en argument, la propriété Données **Folder** de l'objet FHSolver contenu dans le document sera utilisée. Si la chaîne Données**Folder** dans l'objet FHSolver est vide, la fonction utilise par défaut le chemin d'accès de l'utilisateur (par exemple sous Windows "C:\Documents and Settings\username\My Documents", sous Linux "/home/username")

Exemple :

```
import FreeCAD, EM

fhsolver = EM.createFHInputFile()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHInputFile/fr&oldid=1335376>"