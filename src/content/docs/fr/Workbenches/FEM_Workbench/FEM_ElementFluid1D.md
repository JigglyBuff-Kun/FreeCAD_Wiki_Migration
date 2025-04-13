---
title: FEM Section fluide 1D
---
|  |
| --- |
| FEM Section fluide 1D |
| Emplacement du menu |
| Modèle → Géométrie de l'élement → Section de fluide pour un écoulement 1D |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

| Solveurs |
| --- |
| CalculiX |

## Description

Crée un élément FEM de section fluide pour les réseaux pneumatiques et hydrauliques résolus avec CalculiX.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ElementFluid1D.svg) Section de fluide pour un écoulement 1D.
   * Sélectionnez l'option **Modèle → Géométrie de l'élement → ![](/images/FEM_ElementFluid1D.svg) Section de fluide pour un écoulement 1D** du menu.
2. Sélectionnez le type de fluide : Liquid, Gas ou Open Channel
3. Sélectionnez le type de section : Pipe Manning, Pipe Inlet etc.
4. Entrez les paramètres du type de section.
5. Sélectionnez et ajoutez une arête.

## Limitations

1. Le jeu de paramètres ne fonctionne qu'avec un type d'élément de réseau à 3 nœuds. Les informations peuvent être trouvées ici : <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node54.html>

## Remarques

1. Un exemple de la mise en place d'un réseau hydraulique peut être trouvé ici : <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node13.html>
2. Le [jeu de paramètres \*FLUID SECTION](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node205.html) est utilisé pour modéliser les éléments fluides pour un écoulement 1D.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementFluid1D/fr&oldid=1460284>"