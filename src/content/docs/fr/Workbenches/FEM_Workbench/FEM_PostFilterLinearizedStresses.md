---
title: FEM Graphique de linéarisation des critères
---
|  |
| --- |
| FEM Graphique de linéarisation des critères |
| Emplacement du menu |
| Résultats → Graphique de linéarisation des critères |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"), [FEM Filtre d'écrêtage selon une ligne](/FEM_PostFilterDataAlongLine/fr "FEM PostFilterDataAlongLine/fr"), [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

## Description

Crée un graphique de linéarisation des critères.

Pour en savoir plus sur les graphiques de linéarisation des critères, vous pouvez lire [cette description (en)](https://www.graspengineering.com/what-is-stress-linearization/).

![](/images/FEM_Stress-Linearization-Plot-Example.png)

*Un graphique de linéarisation des critères*

## Utilisation

1. Sélectionner un [filtre d'écrêtage selon une ligne](/FEM_PostFilterDataAlongLine/fr "FEM PostFilterDataAlongLine/fr") créé précédemment avec l'un des critères tracés :
   * von Mises,
   * Tresca,
   * Principal majeur,
   * Principal intermédiaire,
   * Principal mineur,
   * Composante XX du critère, [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
   * Composante XY du critère, [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
   * Composante XZ du critère, [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
   * Composante YY du critère, [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
   * Composante YZ du critère, [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
   * Composante ZZ du critère, [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
2. Lancer la commande soit :
   * En appuyant sur le bouton ![](/images/FEM_PostFilterLinearizedStresses.svg) **Graphique de linéarisation des critères**.
   * En utilisant le menu **Résultats → ![](/images/FEM_PostFilterLinearizedStresses.svg) Graphique de linéarisation des critères**.
3. Un tracé XY avec les valeurs de critères linéarisés (membrane, membrane+flexion et total) le long de la ligne sera créé dans une fenêtre séparée. La quantité de critères tracée dans le filtre d'écrêtage sera utilisée pour le calcul des critères linéarisés.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterLinearizedStresses/fr&oldid=1569290>"