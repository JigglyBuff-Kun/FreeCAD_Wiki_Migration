---
title: EM Solveur FH
---
|  |
| --- |
| EM Solveur FH |
| Emplacement du menu |
| EM → FHSolver |
| Ateliers |
| [EM](/EM_Workbench/fr "EM Workbench/fr") |
| Raccourci par défaut |
| E X |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [EM Fichier entrée FH](/EM_FHInputFile/fr "EM FHInputFile/fr"), [EM Noeud FH](/EM_FHNode/fr "EM FHNode/fr"), [EM Segment FH](/EM_FHSegment/fr "EM FHSegment/fr"), [EM Chemin Fh](/EM_FHPath/fr "EM FHPath/fr"), [EM Plan FH](/EM_FHPlane/fr "EM FHPlane/fr"), [EM Equivalence FH](/EM_FHEquiv/fr "EM FHEquiv/fr"), [EM Port FH](/EM_FHPort/fr "EM FHPort/fr") |
|  |

## Description

L'outil Solveur FH insère un objet de type Solveur FH.

![](/images/EM_FHSolver_Example.png)

Objet Solveur FH

## Utilisation

Pour insérer un objet de type Solveur FH dans le document :

1. Appuyez sur le bouton ![](/images/EM_FHSolver.svg) EM FHSolver ou appuyez sur les touches E puis X.

### Remarques

* L'objet Solveur FH représente les directives FastHenry qui sont nécessaires dans les sections communes du fichier d'entrée FastHenry pour définir les paramètres de simulation, comme par exemple la liste des points de fréquence auxquels la simulation doit être exécutée, les unités de mesure par défaut, etc... ainsi que le nom du fichier de sortie et le dossier de création du fichier d'entrée FastHenry.

* Vous ne devez avoir qu'un seul objet Solveur FH par document. Si plusieurs objets Solveur FH sont présents, seul le premier sera pris en compte.

## Propriétés

* Données**Units** : le '.units' de FastHenry. Chaque unité dans FreeCad sera une unité de l'unité de mesure correspondante dans FastHenry. Remarque: cela signifie que vous pouvez par exemple avoir un dessin 3D dans FreeCAD avec des unités définies en mètres, et spécifier une unité de mesure différente pour FastHenry, par ex. millimètres. Ainsi, la valeur '1.0m' dans FreeCAD sera en fait '1.0mm' pour la simulation FastHenry.
* Données**Sigma** : la conductivité de segment par défaut (paramètre de segment 'sigma' dans l'instruction FastHenry '.default')
* Données**nhinc** : le nombre par défaut de filaments dans le sens de la hauteur (paramètre de segment 'nhinc' dans l'instruction FastHenry '.default')
* Données**nwinc** : le nombre par défaut de filaments dans le sens de la largeur (paramètre de segment 'nwinc' dans l'instruction FastHenry '.default')
* Données**rh** : le rapport par défaut des filaments adjacents dans le sens de la hauteur (paramètre de segment 'rh' dans l'instruction FastHenry '.default')
* Données**rw** : le rapport par défaut des filaments adjacents dans le sens de la hauteur (paramètre de segment 'rw' dans l'instruction FastHenry '.default')
* Données**fmin** : la fréquence de simulation la plus basse (paramètre de segment 'fmin' dans l'instruction FastHenry '.freq')
* Données**fmax** : la fréquence de simulation la plus élevée (paramètre de segment 'fmax' dans l'instruction FastHenry '.freq')
* Données**ndec** : le nombre de points de fréquence souhaités par décennie (paramètre de segment 'ndec' dans l'instruction FastHenry '.freq')
* Données**Folder** : le chemin du dossier pour exporter le fichier au format de fichier d'entrée FastHenry
* Données**Filename** : le nom du fichier de simulation lors de l'exportation au format de fichier d'entrée FastHenry

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Solveur FH peut-être utilisé dans des [macros](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
node = makeFHSolver(units=None, sigma=None, nhinc=None, nwinc=None, rh=None, rw=None, fmin=None, fmax=None, ndec=None, folder=None, filename=None, name='FHSolver')

```

* Crée un objet `FHSolver`.
* `units` est l'unité de mesure FastHenry. Chaque unité dans FreeCad sera une unité de l'unité de mesure correspondante dans FastHenry. Les valeurs autorisées sont : « km », « m », « cm », « mm », « um », "in", "mils". La valeur par défaut est `EMFHSOLVER_DEFUNITS`
* `sigma` est la conductivité par défaut du flotteur. La valeur par défaut est `EMFHSOLVER_DEF_SEGSIGMA`.
* `nhinc` est le paramètre nhinc entier par défaut dans FastHenry, pour définir la discrétisation de la hauteur du segment en filaments. La valeur par défaut est `EMFHSOLVER_DEFNHINC`.
* `nwinc` est le paramètre nwinc entier par défaut dans FastHenry, pour définir la discrétisation de la largeur du segment en filaments. La valeur par défaut est `EMFHSOLVER_DEFNWINC`.
* `rh` est le paramètre entier par défaut rh dans FastHenry, pour définir le rapport de discrétisation de la hauteur du segment. La valeur par défaut est `EMFHSOLVER_DEFRH`.
* `rw` est le paramètre rw par défaut entier dans FastHenry, pour définir le rapport de discrétisation de hauteur de segment. La valeur par défaut est `EMFHSOLVER_DEFRW`.
* `fmin` est la fréquence minimale de simulation flottante
* `fmax` est la fréquence de simulation maximale du flotteur
* `ndec` est la valeur flottante définissant le nombre de points de fréquence par décennie qui seront simulés.
* `folder` est le dossier dans lequel le fichier FastHenry sera enregistré. Par défaut, le chemin d'accès à la maison de l'utilisateur (par exemple sous Windows "C:\Documents and Settings\username\My Documents", in Linux "/home/username").
* `filename` est le nom du fichier qui sera exporté. La valeur par défaut est `EMFHSOLVER_DEF_FILENAME`.
* `name` est le nom de l'objet

Exemple :

```
import FreeCAD, EM

fhsolver = EM.makeFHSolver()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHSolver/fr&oldid=1335368>"