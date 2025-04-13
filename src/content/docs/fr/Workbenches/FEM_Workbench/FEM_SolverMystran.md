---
title: FEM Solveur Mystran
---
|  |
| --- |
| FEM Solveur Mystran |
| Emplacement du menu |
| Résolution → Solveur Mystran |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| S M |
| Introduit dans la version |
| 0.20 |
| Voir aussi |
| [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

## Description

La commande Solveur Mystran permet d'utiliser le solveur [MYSTRAN](https://www.mystran.com). Il peut être utilisé pour :

1. Définir les paramètres d'analyse.
2. Sélectionner le répertoire de travail.
3. Exécuter le solveur MYSTRAN.

## Installation

### Windows

Vous pouvez obtenir l'exécutable Mystran [ici](https://github.com/MYSTRANsolver/MYSTRAN/releases). Placez le dossier dans lequel vous avez placé mystran.exe (l'exécutable doit avoir ce nom exact, supprimez la partie restante du nom par défaut) dans la variable PATH de Windows ou placez simplement le fichier dans le dossier FreeCAD\bin. Si nécessaire, spécifiez-le sous **Préférences → FEM → Mystran**.

Le Solveur Mystran a également besoin de deux autres paquets :

* [pyNastran](https://github.com/SteveDoyle2/pyNastran) - pour écrire le fichier de cas.
* [hfcMystran](https://github.com/ceanwang/hfcMystran) - pour lire le fichier de résultats NEU de Mystran.

pyNastran peut être installé via pip :

1. Ouvrez un terminal de commande dans votre dossier FreeCAD\bin.
2. Entrez : `python -m pip install pyNastran`
3. Il sera installé dans le dossier FreeCAD\bin\lib\site-packages.

hfcMystran peut être téléchargé depuis son site github sous forme de fichier zip (*Code → Download ZIP*). Décompressez-le et placez-le dans le dossier FreeCAD\Mod.

### Linux

La procédure d'installation sous Linux est similaire mais il y a quelques différences.

Après avoir téléchargé l'exécutable Mystran, renommez-le comme expliqué ci-dessus, autorisez son exécution (*clic droit → Propriétés → Permissions → Autoriser l'exécution du fichier en tant que programme*) et placez-le dans le répertoire usr/bin de FreeCAD.

Pour installer pyNastran, entrez les commandes suivantes dans la [console Python](/Python_console/fr "Python console/fr") de FreeCAD :

```
import subprocess
subprocess.run(['pip', 'install', 'pyNastran'])

```

Enfin, téléchargez et décompressez hfcMystran et placez-le dans le répertoire usr/Mod de FreeCAD.

## Test rapide

Après l'installation, vous pouvez sélectionner **Utilitaires → Ouvrir des exemples de l'atelier FEM** dans l'atelier FEM. Sous **Solveur → Mystran**, vous pouvez trouver des exemples Mystran fonctionnels.

## Utilisation

1. Après la création d'un ![](/images/FEM_Analysis.svg) [conteneur d'analyse](/FEM_Analysis/fr "FEM Analysis/fr"), utilisez l'une des alternatives suivantes :
   * Sélectionnez **Résolution → ![](/images/FEM_SolverMystran.svg) Solveur Mystran** du menu.
   * Appuyez sur les touches de raccourci S puis M.
2. Double-cliquez sur l'objet ![](/images/FEM_SolverMystran.svg) SolverMystran.
3. Cliquez sur le bouton Écrire.
4. Cliquez sur le bouton Lancer.

## Limitations

* Actuellement, seuls les déplacements sont disponibles sous forme de tracés de contour à partir des analyses effectuées avec ce solveur. Pour voir les contraintes, passez à l'atelier hfcMystran, ouvrez votre cas et son fichier F06. L'interface graphique pyNastran peut être utilisée pour tracer tous les résultats.
* Seuls les types d'éléments suivants sont actuellement supportés : tétraèdres du premier et du second ordre, coques triangulaires et quadrilatérales du premier ordre et poutres du premier ordre. Si des éléments différents sont générés avec Gmsh, le solveur Mystran affichera une erreur.

## Fonction du fichier

Sous Mod\Fem\femsolver\mystran, il y a ces fichiers :

```
add_con_displacement.py
add_con_fixed.py
add_con_force.py
add_femelement_geometry.py
add_femelement_material.py
add_mesh.py
add_solver_control.py
writer.py
solver.py
tasks.py

```

Les fonctions de chaque fichier sont les suivantes :

writer.py - Fichier de contrôle principal

```
model = BDF()
model = add_solver_control.add_solver_control(pynasf, model, self)
model = add_femelement_geometry.add_femelement_geometry(pynasf, model, self)
model = add_mesh.add_mesh(pynasf, model, self)
model = add_femelement_material.add_femelement_material(pynasf, model, self)
model = add_con_fixed.add_con_fixed(pynasf, model, self)
model = add_con_displacement.add_con_displacement(pynasf, model, self)
model = add_con_force.add_con_force(pynasf, model, self)

```

BDF() - Crée un fichier de cas vide.

```
$pyNastran: version=msc
$pyNastran: punch=False
$pyNastran: encoding=utf-8
$pyNastran: nnodes=0
$pyNastran: nelements=0
ENDDATA

```

add\_solver\_control.py - Ajout du DECK DE CONTRÔLE EXÉCUTIF et du DECK DE CONTRÔLE DE CASE.

```
$EXECUTIVE CONTROL DECK
SOL 101
CEND
$CASE CONTROL DECK
ECHO = NONE
TITLE = pyNastran for generating solverinput for for Mystran
SUBCASE 1
    DISPLACEMENT(SORT1,REAL) = ALL
    LOAD = 1
    SPC = 1
    SPCFORCES(SORT1,REAL) = ALL
    STRESS(SORT1,REAL,VONMISES,BILIN) = ALL
    SUBTITLE = Default
BEGIN BULK
$PARAMS
PARAM       POST      -1

```

add\_femelement\_geometry.py - Ajout de jeux de paramètres GRID

add\_mesh.py - Ajout de jeux de paramètres d'éléments

add\_femelement\_material.py - Ajout du jeu de paramètres MAT1

add\_con\_fixed.py - Ajout des jeux de paramètres SPCADD et SPC1

add\_con\_displacement.py - Ajout des jeux de paramètres SPCADD et SPC1

add\_con\_force.py - Ajout de jeux de paramètres FORCE

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverMystran/fr&oldid=1569018>"