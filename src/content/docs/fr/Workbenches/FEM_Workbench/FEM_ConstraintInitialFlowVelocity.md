---
title: FEM Vitesse initiale d'écoulement
---
|  |
| --- |
| FEM Vitesse initiale d'écoulement |
| Emplacement du menu |
| Modèle → Conditions limites de fluide → Condition de vitesse d'écoulement initial |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Vitesse d'écoulement comme condition limite](/FEM_ConstraintFlowVelocity/fr "FEM ConstraintFlowVelocity/fr"), [FEM Pression initiale](/FEM_ConstraintInitialPressure/fr "FEM ConstraintInitialPressure/fr") |
|  |

| Solveurs |
| --- |
| Elmer |

## Description

Crée une condition de vitesse initiale d'écoulement pour une analyse d'écoulement de fluide.

![](/images/FEM_InitialFlowVelocity_dialog.png)

Panneau des tâches de la vitesse initiale d'écoulement FEM

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ConstraintInitialFlowVelocity.svg) Condition de vitesse d'écoulement initial.
   * Sélectionnez l'option **Modèle → Conditions limites de fluide → ![](/images/FEM_ConstraintInitialFlowVelocity.svg) Condition de vitesse d'écoulement initial** du menu.
2. Saisissez une valeur de vitesse d'écoulement initiale pour l'analyse. La valeur est entrée comme une combinaison des 3 composantes principales des vecteurs cartésiens (X,Y,Z).
3. Pour une analyse 3D, sélectionnez un "solide" (corps) de votre modèle. Pour une analyse 2D, sélectionnez une face. Toutefois, il est également possible de sélectionner une face (par exemple, l'entrée d'un tuyau) en 3D ou un bord en 2D.

## Formules

Pour une description de la saisie des formules, voir la section "Formules" de la page [Vitesse d'écoulement comme condition limite](/FEM_ConstraintFlowVelocity/fr#Formules "FEM ConstraintFlowVelocity/fr").

## Remarques

Dans les analyses simples, il n'est pas nécessaire de spécifier la vitesse d'écoulement initiale, mais cela est recommandé comme une bonne pratique.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintInitialFlowVelocity/fr&oldid=1569614>"