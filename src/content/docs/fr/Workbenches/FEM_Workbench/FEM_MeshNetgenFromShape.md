---
title: FEM Mailler avec Netgen
---
|  |
| --- |
| FEM Mailler avec Netgen |
| Emplacement du menu |
| Maillage → Mailler avec le mailleur Netgen |
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
| CalculiX, Mystran, Z88 |

## Description

Pour une analyse par éléments finis, la géométrie doit être discrétisée en [FEM Maillage](/FEM_Mesh/fr "FEM Mesh/fr"). Cette commande utilise [Netgen](https://www.ngsolve.org/) (à installer sur le système) pour générer le maillage. Les maillages Netgen ne sont pas pris en charge par le solveur [Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr").

En fonction de votre système d'exploitation et de le paquetage d'installation, Netgen peut être fourni avec FreeCAD ou pas. Pour plus d'informations voir [FEM Installation des composants requis](/FEM_Install/fr#Netgen "FEM Install/fr").

## Utilisation

1. Sélectionnez la forme que vous voulez analyser. Pour un volume, il doit s'agir d'un solide ou d'un compsolide (composé de solides). Un compsolid est nécessaire si votre pièce est faite de plusieurs matériaux. (Un compsolid peut être créé avec la commande [Part Fragments booléens](/Part_BooleanFragments/fr "Part BooleanFragments/fr")).
2. Activez l'outil par l'un des moyens suivants :
   * Appuyez sur le bouton ![](/images/FEM_MeshNetgenFromShape.svg) Mailler avec le mailleur Netgen
   * Sélectionnez le bouton **Maillage → ![](/images/FEM_MeshGmshFromShape.svg) Mailler avec le mailleur Netgen** du menu.
3. Vous pouvez également définir la taille max/min des éléments (le paramètre par défaut crée généralement des maillages trop grossiers) et l'ordre des éléments (en utilisant la case à cocher *Second ordre*).
4. Vous pouvez également changer la *Précision* pour l'un des choix prédéfinis ou choisir *Défini par l'utilisateur* et éditer manuellement les paramètres.
5. Cliquez sur le bouton Appliquer pour générer le maillage. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : vous pouvez utiliser le bouton Annuler pour annuler le maillage si vous utilisez la nouvelle implémentation de Netgen.
6. Cliquez sur le bouton OK pour générer le maillage et fermer la fenêtre de dialogue. Vous pouvez également cliquer sur le bouton Annuler pour annuler les modifications ou la création de l'objet de maillage.

## Propriétés

* Données**Max. Size** : taille maximale de l'élément en mm.
* Données**Min. Size** : taille minimale de l'élément en mm. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
* Données**Second order** : les éléments de second ordre contiennent plus de noeuds par élément. En général, il suffit d'utiliser un maillage plus grossier pour obtenir la même précision de solution qu'avec les éléments de premier ordre,
  + true (valueur par défaut) ; éléments de second ordre,
  + false ; éléments de premier ordre.
* Données**Fineness** : offre des niveaux prédéfinis de densité de maillage.
* Données**Growth Rate** : définit de combien les éléments adjacents peuvent différer en taille.
* Données**Nb. Segs per Edge** : définit le nombre minimum de segments de maille par arête.
* Données**Nb. Segs per Radius** : définit le nombre minimum de segments de maillage par rayon.
* Données**Optimize** :
  + true (valeur par défaut) : applique un algorithme d'optimisation pour améliorer la qualité du maillage
  + false

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshNetgenFromShape/fr&oldid=1531411>"