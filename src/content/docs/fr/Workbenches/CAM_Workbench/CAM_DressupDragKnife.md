---
title: CAM Lame rotative
---
|  |
| --- |
| CAM Lame rotative |
| Emplacement du menu |
| CAM → Finition du parcours → Lame rotative |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [CAM Attaches](/CAM_DressupTag/fr "CAM DressupTag/fr"), [CAM Rampe d'entrée](/CAM_DressupRampEntry/fr "CAM DressupRampEntry/fr"), [CAM Dégagement d'angles](/CAM_DressupDogbone/fr "CAM DressupDogbone/fr") |
|  |

## Description

L'outil ![](/images/CAM_DressupDragKnife.svg) Lame rotative utilise une lame sur pivot pour couper un matériau en feuille comme le vinyle, le carton et le cuir. Le point de coupe n'est pas aligné avec le centre de la broche mais suit le mouvement de la broche. Parce que le point de coupe est décalé, le parcours doit être modifié pour dépasser le point d'extrémité de chaque segment. En outre, la lame rotative est incapable de faire des virages extrêmement serrés. Pour compenser, une "action de coin" de pivot est insérée et soulève légèrement la lame puis pivote dans la nouvelle position.

Cet outil ajoute au tracé existant des actions de coin et des extensions de bord pour définir le tracé de la lame.

## Utilisation

1. Sélectionnez un objet de contour ou de parcours de profil.
2. Sélectionnez l'option **CAM → Finition du parcours → ![](/images/CAM_DressupDragKnife.svg) Lame rotative** du menu.

## Options

* **Précision de l'angle** : détermine le degré de précision d'un angle avant l'insertion d'une action dans un coin.
* **Décalage** : décalage du point de la lame par rapport au centre de la broche.
* **Hauteur du pivot** : détermine à quelle hauteur soulever la lame pendant une action dans un coin. Cela dépend du matériau et devrait être plus élevé pour les matériaux plus épais. Idéalement, le point doit rester légèrement dans le matériau.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_DressupDragKnife/fr&oldid=1388027>"