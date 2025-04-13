---
title: CAM Dégagement des angles
---
|  |
| --- |
| CAM Dégagement des angles |
| Emplacement du menu |
| CAM → Finition du parcours → Dégager des angles |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [CAM Attaches](/CAM_DressupTag/fr "CAM DressupTag/fr"), [CAM Rampe d'entrée](/CAM_DressupRampEntry/fr "CAM DressupRampEntry/fr"), [CAM Lame rotative](/CAM_DressupDragKnife/fr "CAM DressupDragKnife/fr") |
|  |

## Description

L'outil ![](/images/CAM_DressupDogbone.svg) Dégagement des angles ajoute une finition à un parcours existant en surcoupant les angles intérieurs d'un profil ou d'un contour. Une fraise cylindrique ne peut pas couper entièrement un angle aigu sans entrer en collision avec le modèle. Dans certains cas, il peut être préférable de violer le modèle et de s'assurer que la matière au niveau de l'angle est enlevée. Cela est particulièrement nécessaire si les pièces doivent se croiser ou s'imbriquer les unes dans les autres.

## Utilisation

1. Sélectionnez un contour ou un profil d'objets [CAM](/CAM_Workbench/fr "CAM Workbench/fr").
2. Sélectionnez l'option **CAM → Finition du parcours → ![](/images/CAM_DressupDogbone.svg) Dégager des angles** du menu.

## Options

* **Côté** : côté du parcours où la modification sera ajoutée.
* **Style** : style de surcoupe (Dégagement, Dégagement horizontal, Dégagement vertical, Dégagement long, Dégagement court).
* **Incision** : algorithme à utiliser pour calculer la longueur de la surcoupe.
* **Personnalisé** : si Incision est sélectionné, la propriété Personnalisé sera utilisée pour définir la longueur.

## Limitations

Le dégagement des angles nécessite un segment de parcours droit (G1) avant et après le coin où le dégagement doit être mis.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_DressupDogbone/fr&oldid=1491775>"