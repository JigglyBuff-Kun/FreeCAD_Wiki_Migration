---
title: FEM Potentiel électrostatique
---
|  |
| --- |
| FEM Potentiel électrostatique |
| Emplacement du menu |
| Modèle → Conditions limites électromagnétiques → Condition limite de potentiel électrostatique |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Exemple calcul capacité de deux sphères](/FEM_Example_Capacitance_Two_Balls/fr "FEM Example Capacitance Two Balls/fr"), [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

| Solveurs |
| --- |
| Elmer |

## Description

Crée une condition limite FEM pour le potentiel électrostatique. À utiliser avec les équations [électrostatiques](/FEM_EquationElectrostatic/fr "FEM EquationElectrostatic/fr"), de [force électrique](/FEM_EquationElectricforce/fr "FEM EquationElectricforce/fr"), [magnétodynamiques](/FEM_EquationMagnetodynamic/fr "FEM EquationMagnetodynamic/fr"), [magnétodynamiques 2D](/FEM_EquationMagnetodynamic2D/fr "FEM EquationMagnetodynamic2D/fr") ou [courant statique](/FEM_EquationStaticCurrent/fr "FEM EquationStaticCurrent/fr").

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ConstraintElectrostaticPotential.svg) Condition limite de potentiel électrostatique.
   * Sélectionnez l'option **Modèle → Conditions limites électromagnétiques → ![](/images/FEM_ConstraintElectrostaticPotential.svg) Condition limite de potentiel électrostatique** du menu.
2. Appuyez sur le bouton Ajouter.
3. Dans la [vue 3D](/3D_view/fr "3D view/fr"), sélectionnez l'objet auquel la condition limite doit être appliquée.

## Options

La fenêtre de dialogue propose les paramètres suivants :

![](/images/FEM_ElectrostaticPotential_dialog.png)

* **Condition aux limites** : permet de choisir entre le type de condition aux limites de Dirichlet (potentiel prescrit) et de Neumann (flux électrique/densité de charge de surface prescrite). [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")
* **Potentiel** : potentiel électrique en V.
* **Potentiel électromagnétique** : permet la saisie des composantes d'un champ de vecteurs potentiels.
* **x** : partie réelle/imaginaire du potentiel dans la direction des x en V.  
  Pour les systèmes de coordonnées autres que cartésien 3D, ce sera la première coordonnée du système au lieu de x.
* **y** : partie réelle/imaginaire du potentiel dans la direction des y dans V.  
  Pour les systèmes de coordonnées autres que cartésien 3D, ce sera la deuxième coordonnée du système au lieu de y.
* **z** : partie réelle/imaginaire du potentiel dans la direction des z dans V.  
  Pour les systèmes de coordonnées autres que cartésien 3D, ce sera la troisième coordonnée du système au lieu de z. Si le système de coordonnées n'a pas de troisième coordonnée, ce paramètre sera ignoré.
* **Cases à cocher x, y, z** : pour déclarer le potentiel correspondant comme inconnu au solveur.
* **Infinité électrique** : option pour faire l'approximation sphérique en sorte que le volume au-dessus de la face s'étend à l'infini.
* **Potentiel constant** : option permettant de définir un potentiel constant.
* **Densité de charge de surface** : densité de charge de surface (flux électrique) en C/m^2. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")
* **Capacité de corps** : nombre de corps (ou de faces) avec une capacité.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintElectrostaticPotential/fr&oldid=1569619>"