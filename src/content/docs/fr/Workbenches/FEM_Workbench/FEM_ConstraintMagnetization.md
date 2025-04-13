---
title: FEM Magnétisation
---
|  |
| --- |
| FEM Magnétisation |
| Emplacement du menu |
| Modèle → Conditions limites électromagnétiques → Condition limite de magnétisation |
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

Crée une condition limite FEM pour la de magnétisation. A utiliser avec les équations [magnétodynamiques](/FEM_EquationMagnetodynamic/fr "FEM EquationMagnetodynamic/fr") et [magnétodynamiques 2D](/FEM_EquationMagnetodynamic2D/fr "FEM EquationMagnetodynamic2D/fr")

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ConstraintMagnetization.svg) Condition limite de magnétisation.
   * Sélectionnez l'option **Modèle → Conditions limites électromagnétiques → ![](/images/FEM_ConstraintMagnetization.svg) Condition limite de magnétisation** du menu.
2. Appuyez sur le bouton Ajouter.
3. Dans la [vue 3D](/3D_view/fr "3D view/fr"), sélectionnez l'objet auquel la condition limite doit être appliquée.

## Options

La fenêtre de dialogue propose les paramètres suivants :

![](/images/FEM_Magnetization_dialog.png)

* **Magnetization\_\*\_1** : partie réelle/imaginaire de la magnétisation dans la direction des x en A/m.  
  Pour les systèmes de coordonnées autres que cartésien 3D, ce sera la première coordonnée du système au lieu de x.
* **Magnetization\_\*\_2** : partie réelle/imaginaire de la magnétisation dans la direction des y en A/m.  
  Pour les systèmes de coordonnées autres que cartésien 3D, ce sera la deuxième coordonnée du système au lieu de y.
* **Magnetization\_\*\_3** : partie réelle/imaginaire de la magnétisation dans la direction des z en A/m.  
  Pour les systèmes de coordonnées autres que cartésien 3D, ce sera la troisième coordonnée du système au lieu de z. Si le système de coordonnées n'a pas de troisième coordonnée, ce paramètre sera ignoré.
* **Magnetization\_\*\_\*\_Disabled** : indique si le paramètre correspondant est désactivé (supposé inconnu par le solveur).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintMagnetization/fr&oldid=1569630>"