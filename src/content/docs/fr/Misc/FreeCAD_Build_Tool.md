---
title: Outil build de FreeCAD
---
## Présentation

L'**outil build de FreeCAD** (build pour construction) ou **fcbt** est un script python qui se trouve ici :

```
trunc/src/Tools/fcbt.py

```

Il peut être utilisé pour simplifier certaines tâches fréquemment utilisées dans la construction (compilation), la distribution et l'extension de FreeCAD.

## Utilisation

Quand [Python](http://fr.wikipedia.org/wiki/Python_(langage)) est correctement installé, **fcbt** peut être lancé par la commande :

```
python fbct.py

```

Il affiche un menu, où vous pouvez sélectionner la tâche, que vous souhaitez utiliser pour :

```
FreeCAD Build Tool
 Usage:
    fcbt <command name> [command parameter]
 possible commands are:
  - DistSrc         (DS)   Build a source Distr. of the current source tree
  - DistBin         (DB)   Build a binary Distr. of the current source tree
  - DistSetup       (DI)   Build a Setup Distr. of the current source tree
  - DistSetup       (DUI)  Build a User Setup Distr. of the current source tree
  - DistAll         (DA)   Run all three above modules
  - NextBuildNumber (NBN)  Increase the Build Number of this Version
  - CreateModule    (CM)   Insert a new FreeCAD Module (Workbench) in the module directory
 
 For help on the modules type:
   fcbt <command name> ?

```

À l'invite de commande, entrez la commande abrégée que vous voulez appeler.
Par exemple, tapez "CM" pour la [création d'atelier](/Workbench_creation/fr "Workbench creation/fr").

### DistSrc

La commande "DS" **Crée le source de la distribution** de l'arborescence source en court.

### DistBin

La commande "DB" **Créer une distribution binaire** de l'arborescence source en court.

### DistSetup

La commande "DI" **crée une distribution d'installation** de l'arborescence source en court.

### DistSetup

La commande "DUI" **crée une distribution de configuration utilisateur** de l'arborescence source en court.

### DistAll

La commande "DA" exécute les séquences **"DS"**, **"DB"** et **"DI"**.

### NextBuildNumber

La commande "NBN" **incrémente le numéro de compilation** pour créer une nouvelle version de FreeCAD.

### CreateModule

La commande "CM" [crée un nouveau module d'application (atelier)](/Workbench_creation/fr "Workbench creation/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_Build_Tool/fr&oldid=947575>"