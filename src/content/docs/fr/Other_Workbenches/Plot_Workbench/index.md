---
title: Atelier Plot
---

![](/images/Workbench_Plot.svg)

Icône de l'atelier Plot

## Introduction

FreeCAD est capable d'effectuer des tracés en utilisant la bibliothèque [matplotlib](https://matplotlib.org/) de [Python](/Python/fr "Python/fr"). Un module est fourni à cette fin, en tant qu'extension externe dans la version 0.19 et en tant que composant principal à partir de la version 0.20. Les anciennes versions de FreeCAD ne sont pas couvertes par cette documentation.

Les graphiques produits offrent les outils standard [matplotlib](https://matplotlib.org/) pour l'édition et la sauvegarde. En plus de cela, un ![](/images/Workbench_Plot.svg) atelier Plot est fourni en tant qu'extension externe offrant des outils plus complets pour modifier le tracé et le sauvegarder. L'extension peut être installée avec le [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

## Module

Le module peut être lancé dans une console Python ou dans une [macro](/Macros/fr "Macros/fr"). La première chose que vous devez faire est d'importer le module. Dans FreeCAD 0.19 vous devez d'abord installer l'![](/images/Workbench_Plot.svg) atelier Plot à l'aide du [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") et ensuite vous pouvez importer Plot en écrivant :

```
from freecad.plot import Plot

```

Depuis FreeCAD 0.20, le module de traçage est déjà inclus dans le programme, vous n'avez donc pas besoin d'installer de module complémentaire, mais simplement de taper :

```
from FreeCAD.Plot import Plot

```

Après cela, vous pouvez tracer une ligne droite de (0,0) à (1,2) en tapant tout simplement :

```
Plot.plot([0, 1], [0, 2])

```

Vous pouvez trouver des exemples plus complexes dans le [Tutoriel de base](/Plot_Basic_tutorial/fr "Plot Basic tutorial/fr") et le [Tutoriel graphique à plusieurs axes](/Plot_MultiAxes_tutorial/fr "Plot MultiAxes tutorial/fr").

## Outils de l'atelier

Si vous décidez d'installer le module ![](/images/Workbench_Plot.svg) atelier Plot en utilisant le [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"), vous disposerez des outils suivants pour gérer les tracés créés avec le module :

- ![](/images/Plot_Save.svg) [Sauvegarde](/Plot_Save/fr "Plot Save/fr") : Enregistrer sous plusieurs formats. Vous pouvez sélectionner la taille de sortie et la résolution.
- ![](/images/Plot_Axes.svg) [Axes](/Plot_Axes/fr "Plot Axes/fr") : Ajouter, effacer ou éditer les axes du graphique.
- ![](/images/Plot_Series.svg) [Séries](/Plot_Series/fr "Plot Series/fr") : Editer les séries titres et style.
- ![](/images/Plot_Grid.svg) [Grille](/Plot_Grid/fr "Plot Grid/fr") : Afficher/Cacher la grille.
- ![](/images/Plot_Legend.svg) [Légende](/Plot_Legend/fr "Plot Legend/fr") : Afficher/Cacher les légendes.
- ![](/images/Plot_Labels.svg) [Etiquettes](/Plot_Labels/fr "Plot Labels/fr") : Éditer les étiquettes.
- ![](/images/Plot_Positions.svg) [Positions](/Plot_Positions/fr "Plot Positions/fr") : Ensemble des éléments de positions.

## Script

Puisque l'atelier Plot est une couche sur `matplotlib`, vous êtes libre d'utiliser toutes les commandes de la librairie matplotlib.
Voir [exemples de scripts](/Scripting_and_macros/fr "Scripting and macros/fr") pour des exemples.

## Tutoriels

- [Plot Tutoriel de base](/Plot_Basic_tutorial/fr "Plot Basic tutorial/fr")
- [Plot Tutoriel graphique à plusieurs axes](/Plot_MultiAxes_tutorial/fr "Plot MultiAxes tutorial/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Plot_Workbench/fr&oldid=1210610>"
