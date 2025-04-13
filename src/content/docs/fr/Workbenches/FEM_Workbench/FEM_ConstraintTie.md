---
title: FEM Contrainte de liaison
---
|  |
| --- |
| FEM Contrainte de liaison |
| Emplacement du menu |
| Modèle → Conditions limites et charges mécaniques → Contrainte de liaison |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [FEM Charge de pression](/FEM_ConstraintPressure/fr "FEM ConstraintPressure/fr") |
|  |

| Solveurs |
| --- |
| CalculiX |

## Description

Définit une contrainte de liaison qui relie les deux surfaces sélectionnées de telle sorte que (par opposition à la façon dont le contact fonctionne) elles ne peuvent pas se séparer ou glisser l'une sur l'autre tout au long de l'analyse. Ainsi, les surfaces restent collées en permanence.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") : peut également être utilisé pour définir la symétrie cyclique.

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ConstraintTie.svg) Contrainte de liaison.
   * Sélectionnez l'option **Modèle → Conditions limites et charges mécaniques → ![](/images/FEM_ConstraintTie.svg) Contrainte de liaison** du menu.
2. Appuyez sur le bouton Ajouter du panneau des tâches et cliquez sur la face que vous souhaitez ajouter à la définition de la contrainte de liaison. Deux faces exactement doivent être ajoutées, l'une après l'autre. La première face sélectionnée sera la face esclave tandis que la seconde sera la face maître.
3. Vous pouvez définir une *tolérance* : la contrainte de liaison ne sera appliquée qu'aux nœuds de la surface esclave séparés de la surface maître par une distance inférieure ou égale à celle spécifiée ici.
4. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : vous pouvez cocher la case *Activer l'ajustement* pour permettre aux nœuds de la surface esclave d'être automatiquement déplacés pour s'appuyer sur la surface maître s'ils sont concernés par la contrainte (c'est-à-dire s'ils respectent le critère de tolérance).

![](/images/FEM_tie_constraint_example_no_adjust.png)

Deux moitiés d'une poutre reliées par une contrainte de liaison avec une tolérance non-défaut tenant compte de l'écart.

![](/images/FEM_tie_constraint_example_adjust.png)

Le même exemple que ci-dessus avec l'ajustement activé. Les nœuds sont déplacés pour combler l'écart.

## Symétrie cyclique

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : la contrainte de liaison peut également être utilisée pour définir la symétrie cyclique. Cela permet d'analyser les modèles présentant une symétrie périodique de rotation (motifs circulaires répétitifs autour d'un axe de symétrie) à l'aide d'un seul secteur représentatif. Elle peut être particulièrement utile pour les rotors, les arbres, les turbines, les ventilateurs, les volants d'inertie et les pièces similaires, souvent en combinaison avec la [charge centrifuge](/FEM_ConstraintCentrif/fr "FEM ConstraintCentrif/fr") (la charge doit également présenter cette forme de symétrie)..
La symétrie cyclique peut être définie en sélectionnant les deux faces de la coupe pour la contrainte de liaison et en définissant les propriétés suivantes :

* Données**Cyclic Symmetry** : la valeur *true* active la symétrie cyclique.
* Données**Sectors** : nombre total de secteurs, égal à 360° divisé par l'angle du secteur représentatif (par exemple 8 pour un secteur de 45° ou 6 pour un secteur de 60°).
* Données**Connected Sectors** : nombre de secteurs affichés dans les résultats, le fixer au même nombre que Données**Sectors** si vous voulez visualiser toute la partie à 360°.
* Données**Symmetry Axis** : axe de symétrie cyclique - axe Z global par défaut, peut être déplacé en appliquant la transformation Placement au verseur Z (similaire à ce qui peut être fait avec des [Part Lignes](/Part_Line "Part Line") - pour comprendre comment déplacer l'axe de symétrie, il peut être utile de changer le placement de la ligne qui est généralement nécessaire pour la charge centrifuge).

Une limitation importante de cette fonction dans l'atelier FEM est que les conditions limites ne peuvent pas être appliquées aux nœuds de la surface esclave de la symétrie cyclique (surface esclave dans la définition de la contrainte de liaison), car cela entraînerait une surcontrainte. Dans certains cas, il peut donc s'avérer nécessaire de supprimer de la définition des conditions limites les nœuds situés sur le bord entre la face soumise à la condition limite et la surface esclave de symétrie cyclique. Malheureusement, FreeCAD n'opère pas sur des ensembles de nœuds et les nœuds individuels ne peuvent pas être désélectionnés. Il faudrait donc utiliser des solutions de contournement comme l'ajout d'une étroite [partition de face](/FEM_Geometry_Preparation_and_Meshing/fr#Partitionnement_de_la_géométrie "FEM Geometry Preparation and Meshing/fr") comme transition entre la surface esclave et la surface avec la condition limite.

## Remarques

* Tout comme la [contrainte de contact](/FEM_ConstraintContact/fr "FEM ConstraintContact/fr"), cette contrainte nécessite au moins un petit espace entre les pièces. Dans le cas contraire, le maillage sera continu et ne sera donc pas nécessaire pour la contrainte de liaison.
* Cette fonction utilise le [jeu de paramètres \*TIE de CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node251.).
* [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : la symétrie cyclique utilise également le[jeu de paramètres \*CYCLIC SYMMETRY MODEL de CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node183.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintTie/fr&oldid=1549852>"