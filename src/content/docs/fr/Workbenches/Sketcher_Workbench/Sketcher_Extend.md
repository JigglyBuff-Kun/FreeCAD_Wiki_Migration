---
title: Sketcher Prolonger
---
|  |
| --- |
| Sketcher Prolonger |
| Emplacement du menu |
| Esquisse → Outils d'esquisse → Prolonger l'arête |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| G Q |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Sketcher Ajuster](/Sketcher_Trimming/fr "Sketcher Trimming/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_Extend.svg) Sketcher Prolonger permet de prolonger ou de raccourcir une ligne ou un arc jusqu'à un emplacement arbitraire, ou jusqu'à une arête ou un point cible.

![](/images/Sketcher_Extend_example_01.png)

À gauche (1), les deux éléments de l'esquisse avant l'opération  
Au milieu (2), la ligne est prolongée jusqu'à l'arc  
À droite (3), le résultat final.

## Utilisation

Voir aussi : [Aides au dessin](/Sketcher_Workbench/fr#Aides_au_dessin "Sketcher Workbench/fr").

1. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_Extend.svg) Prolonger l'arête.
   * Sélectionnez l'option **Esquisse → Outils d'esquisse → ![](/images/Sketcher_Extend.svg) Prolonger l'arête** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_Extend.svg) Prolonger l'arête** dans le menu contextuel.
   * Utilisez le raccourci clavier : G puis Q.
2. S'il y a une sélection précédente, elle est effacée. L'outil n'accepte pas de présélection.
3. Le curseur se transforme en croix avec l'icône de l'outil.
4. Sélectionnez une ligne ou un arc.
5. Déplacez le curseur dans la direction à prolonger ou à raccourcir.
6. Effectuez l'une des opérations suivantes :
   * Cliquez sur un point arbitraire.
   * Pour étendre/raccourcir vers une autre arête (Les [contraintes automatiques](/Sketcher_Workbench/fr#Contraintes_automatiques "Sketcher Workbench/fr") doivent être activées) : placez le curseur sur l'arête cible. Lorsqu'il est mis en surbrillance et que l'icône de la ![](/images/Sketcher_ConstrainPointOnObject.svg) [contrainte Point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") apparaît à côté du curseur, cliquez pour confirmer. La contrainte est ajoutée.
   * Pour étendre/raccourcir un point (les contraintes automatiques doivent être activées) : placez le curseur sur le point cible. Lorsqu'il est mis en surbrillance et que l'icône de la ![](/images/Sketcher_ConstrainCoincident.svg) [contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") apparaît à côté du curseur, cliquez pour confirmer. La contrainte est ajoutée.
7. Si l'outil fonctionne en [mode continu](/Sketcher_Workbench/fr#Modes_continus "Sketcher Workbench/fr") :
   1. Vous pouvez continuer à allonger/raccourcir les arêtes.
   2. Pour terminer, cliquez dans une zone vide de la [vue 3D](/3D_view/fr "3D view/fr"), cliquez avec le bouton droit de la souris ou appuyez sur Échap, ou démarrez un autre outil de création de géométrie ou de contrainte.

## Remarques

* Si la contrainte n'est pas totale, l'arête ou le point cible peut également être modifié.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Extend/fr&oldid=1415365>"