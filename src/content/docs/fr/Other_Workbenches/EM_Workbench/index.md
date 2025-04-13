---
title: Atelier EM
---

![](/images/EMWorkbench.svg)

Icône de l'atelier externe EM

## Introduction

L'atelier EM (ElectroMagnetic) fournit l’interface front-end de CAO à certains solveurs libres et open source. Pour le moment, il prend en charge le solveur d'impédance magnétoquasistatique 3D [FastHenry](https://www.fastfieldsolvers.com/software.htm#fasthenry2) (c'est-à-dire l'extraction d'inductance et de résistance aux « basses » fréquences). La prise en charge du solveur de capacité électrostatique 3D [FasterCap](https://www.fastfieldsolvers.com/software.htm#fastercap) est en cours.

![](/images/Screenshot_EM_window.png)

## Installation

L'atelier EM est un [atelier externe](/External_workbenches/fr "External workbenches/fr") qui peut être installé par le ![](/images/AddonManager.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Ceci peut être fait à partir du menu **Outils → Gestionnaire des extensions**.

Les solveurs électromagnétiques FastHenry2 et FasterCap doivent être installés séparément. Leurs codes binaires ainsi que les sources sont disponibles gratuitement sur [FastFieldSolvers](https://www.fastfieldsolvers.com).

## Utilisation

### FastHenry

FastHenry est un logiciel permettant de calculer les inductances et résistances propres et mutuelles, en fonction de la fréquence, d'une structure conductrice tridimensionnelle générique, dans l'approximation magnétoquasistatique. Il peut également générer des modèles de circuits équivalents multifréquences compatibles avec Spice.

La connaissance de FastHenry est une condition préalable à une utilisation efficace de l'ElectroMagnetic Workbench pour FastHenry. Nous vous suggérons de lire le manuel d'utilisation du logiciel [FastHenry User's manual](https://www.fastfieldsolvers.com/documentation.htm) et de jouer un peu avec les fichiers d'exemple qui sont fournis avec l'installation.

### FasterCap

FasterCap est un puissant programme d'extraction de capacité tri et bidimensionnelle.

La connaissance de FasterCap est une condition préalable à l'utilisation efficace de l'atelier ElectroMagnetic pour FasterCap. Nous vous suggérons de lire le [fichier d'utilisation de FasterCap](https://www.fastfieldsolvers.com/documentation.htm) et de jouer un peu avec les fichiers d'exemple qui sont fournis avec l'installation.

## Outils FastHenry

Voici les outils utilisés pour interagir avec FastHenry :

- ![](/images/EM_FHNode.svg) [Noeud FH](/EM_FHNode/fr "EM FHNode/fr") : Crée un objet FastHenry de type Noeud.
- ![](/images/EM_FHSegment.svg) [Segment FH](/EM_FHSegment/fr "EM FHSegment/fr") : Crée un objet FastHenry de type Segment.
- ![](/images/EM_FHPath.svg) [Chemin FH](/EM_FHPath/fr "EM FHPath/fr") : Crée un objet FastHenry de type Chemin.
- ![](/images/EM_FHPlane.svg) [Plan FH](/EM_FHPlane/fr "EM FHPlane/fr") : Crée un objet FastHenry de type Plan conducteur uniforme.
- ![](/images/EM_FHPlaneHole.svg) [Trou FH](/EM_FHPlaneHole/fr "EM FHPlaneHole/fr") : Crée un objet FastHenry de type Trou dans un plan conducteur uniforme.
- ![](/images/EM_FHPlaneAddRemoveNodeHole.svg) [Bascule noeud trou FH](/EM_FHPlaneAddRemoveNodeHole/fr "EM FHPlaneAddRemoveNodeHole/fr") : Ajoute ou supprime un nœud ou un trou de/vers un plan conducteur.
- ![](/images/EM_FHEquiv.svg) [Equivalence FH](/EM_FHEquiv/fr "EM FHEquiv/fr") : Crée un objet FastHenry de type Equivalence de noeud.
- ![](/images/EM_FHPort.svg) [Port FH](/EM_FHPort/fr "EM FHPort/fr") : Crée un objet FastHenry de type Port.
- ![](/images/EM_FHSolver.svg) [Solveur FH](/EM_FHSolver/fr "EM FHSolver/fr") : Crée un objet FastHenry de type Solveur.
- ![](/images/EM_FHInputFile.svg) [Fichier entrée FH](/EM_FHInputFile/fr "EM FHInputFile/fr") : Crée un fichier FastHenry d'entrée.

## Outils FasterCap

À l’heure actuelle, FasterCap est pris en charge via certaines macros du fichier Export_mesh.py disponible dans le [code source de l'atelier ElectroMagnetic sous GitHub](https://github.com/ediloren/EM-Workbench-for-FreeCAD).

## API

Les outils EM peuvent être utilisés dans [macros](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") à l'aide de l'API EM.

## Tutoriels

Certains tutoriels vidéo sont disponibles pour les versions bêta de l'atelier EM :

- [FreeCAD ElectroMagnetic Workbench tutorial - Getting started](https://www.youtube.com/watch?v=h6Pp-_ovLZM)
- [FreeCAD ElectroMagnetic WorkBench tutorial: create a conductive plane, part 1](https://www.youtube.com/watch?v=5pSzPizw4e8)
- [FreeCAD ElectroMagnetic WorkBench tutorial: create a conductive plane, part 2](https://www.youtube.com/watch?v=BeBNtfH25rM)
- [FreeCAD ElectroMagnetic WorkBench tutorial: create a conductive plane, part 3](https://www.youtube.com/watch?v=BtgdJOf-ql0)
- [FreeCAD ElectroMagnetic WorkBench tutorial: using the path object, part 1](https://www.youtube.com/watch?v=CRqDuEtbdds)
- [FreeCAD ElectroMagnetic WorkBench tutorial: using the path object, part 2](https://www.youtube.com/watch?v=slsLdLoF2OI)

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_Workbench/fr&oldid=1335333>"
