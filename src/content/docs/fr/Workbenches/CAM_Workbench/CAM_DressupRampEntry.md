---
title: CAM Rampe d'entrée
---
|  |
| --- |
| CAM Rampe d'entrée |
| Emplacement du menu |
| CAM → Finition du parcours → Rampe d'entrée |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [CAM Attaches](/CAM_DressupTag/fr "CAM DressupTag/fr"), [CAM Dégagement d'angles](/CAM_DressupDogbone/fr "CAM DressupDogbone/fr"), [CAM Lame rotative](/CAM_DressupDragKnife/fr "CAM DressupDragKnife/fr") |
|  |

## Description

L'outil ![](/images/CAM_DressupRampEntry.svg) Rampe d'entrée ajoute une rampe d'entrée au parcours existant.

## Utilisation

1. Sélectionnez un contour ou des objets parcours de profil.
2. Sélectionnez l'option **CAM → Finition du parcours → ![](/images/CAM_DressupRampEntry.svg) Rampe d'entrée** du menu.

## Propriétés

* **Vitesse d'avance dans la rampe** : peut être la vitesse d'avance verticale ou horizontale en cours ou une autre valeur personnalisée
* **Angle** : angle de la rampe par rapport à l'axe vertical. Une valeur plus faible rend la rampe plus raide.
* **Méthode** : permet de sélectionner différents modes de rampe:
  + *Méthode rampe 1* : descend à l'angle de la rampe et se déplace horizontalement vers le point cible
  + *Méthode rampe 2* : passe d'abord à l'horizontale puis à l'angle de la rampe jusqu'au point cible
  + *Méthode rampe 3* : passe en zigzag
  + *Hélice* : descend en spirale
* **Profondeur de départ cible** : distance au-dessus du niveau cible où la rampe commence.
* **Profondeur de départ de la rampe** : indique que la rampe ne commence pas au-dessus du niveau du brut. Si elle n'est pas définie à true, la première rampe peut être plus raide que prévue.

![](/images/Ramp_method_1.png) ![](/images/Ramp_method_2.png) ![](/images/Ramp_method_3.png)

De gauche à droite : méthode de rampe 1, 2 et 3

![](/images/Ramp_method_Helix.png)

Méthode de rampe Hélice

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_DressupRampEntry/fr&oldid=1388051>"