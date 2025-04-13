---
title: FEM Densité de courant
---
|  |
| --- |
| FEM Densité de courant |
| Emplacement du menu |
| Modèle → Conditions limites électromagnétiques → Condition limite de densité de courant |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.21 |
| Voir aussi |
| [FEM Équation magnétodynamique](/FEM_EquationMagnetodynamic/fr "FEM EquationMagnetodynamic/fr"), [FEM Équation magnétodynamique 2D](/FEM_EquationMagnetodynamic2D/fr "FEM EquationMagnetodynamic2D/fr") |
|  |

| Solveurs |
| --- |
| Elmer |

## Description

Crée une condition limite FEM pour la densité de courant. À utiliser avec les équations [magnétodynamiques](/FEM_EquationMagnetodynamic/fr "FEM EquationMagnetodynamic/fr"), [magnétodynamiques 2D](/FEM_EquationMagnetodynamic2D/fr "FEM EquationMagnetodynamic2D/fr") et de [courant statique](/FEM_EquationStaticCurrent/fr "FEM EquationStaticCurrent/fr")

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ConstraintCurrentDensity.svg) Condition limite de densité de courant.
   * Sélectionnez l'option **Modèle → Conditions limites électromagnétiques → ![](/images/FEM_ConstraintCurrentDensity.svg) Condition limite de densité de courant** du menu.
2. Appuyez sur le bouton Ajouter.
3. Dans la [vue 3D](/3D_view/fr "3D view/fr"), sélectionnez l'objet auquel la condition de limite doit être appliquée.

## Options

La fenêtre de dialogue propose les paramètres suivants :

![](/images/FEM_CurrentDensity_dialog.png)

* **Mode** : pour choisir entre le mode personnalisé (directions sélectionnées) et le mode normal (direction normale). [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")
* **Current density\_\*\_1** : partie réelle/imaginaire de la densité de courant dans la direction des x en A/m².  
  Pour les systèmes de coordonnées autres que cartésien 3D, ce sera la première coordonnée du système au lieu de x.
* **Current density\_\*\_2** : partie réelle/imaginaire de la densité de courant dans la direction des y en A/m².  
  Pour les systèmes de coordonnées autres que cartésien 3D, ce sera la deuxième coordonnée du système au lieu de y.
* **Current density\_\*\_3** : partie réelle/imaginaire de la densité de courant dans la direction des z en A/m².  
  Pour les systèmes de coordonnées autres que cartésien 3D, ce sera la troisième coordonnée du système au lieu de z. Si le système de coordonnées n'a pas de troisième coordonnée, ce paramètre sera ignoré.
* **Current density\_\*\_\*\_Disabled** : indique si le paramètre correspondant est désactivé (supposé inconnu par le solveur).
* **Enable current density\_\*** : si le paramètre correspondant est activé ou désactivé (supposé inconnu par le solveur). [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")
* **Normal current density\_\*** : partie réelle/imaginaire de la densité de courant normale à la frontière en A/m². [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintCurrentDensity/fr&oldid=1569624>"