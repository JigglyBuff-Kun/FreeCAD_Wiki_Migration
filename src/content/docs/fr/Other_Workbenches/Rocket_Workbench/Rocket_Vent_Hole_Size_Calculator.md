---
title: Rocket Calcul taille trou d'évent
---
|  |
| --- |
| Rocket Calcul taille trou d'évent |
| Emplacement du menu |
| Rocket → Calculators → Vent Hole Size Calculator |
| Ateliers |
| [Rocket](/Rocket_Workbench/fr "Rocket Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| *Aucun* |
|  |

## Description

Ce calculateur détermine la taille minimale des trous de ventilation pour les altimètres barométriques en fonction du volume de l'espace et du nombre de trous de ventilation.

Le calcul est basé sur la règle empirique de 1/4" de trou d'aération pour chaque 100 pouces cubes de volume. Un seul trou d'aération de la taille appropriée est sensible au bruit causé par les brises et les rafales de vent. Ces effets sont minimisés en utilisant plusieurs trous d'aération répartis autour du volume, 3 trous étant considérés comme un minimum pratique. La surface combinée de tous les trous d'aération sera équivalente à celle d'un seul trou plus grand.

## Utilisation

![](/images/Calc_vent_hole_size.png)

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Rocket_Calculator.svg) Vent Hole Size Calculator.
   * Sélectionnez la **Rocket → Calculatrices → ![](/images/Rocket_Calculator.svg) Vent Hole Size Calculator** dans le menu.
2. Saisissez les paramètres de votre compartiment électronique.

## Calculs

La taille du trou de ventilation est calculée à l'aide de la formule suivante :

:   :   D

        v
        e
        n
        t
        =
        0.004396
        D

        L

        N
        {\displaystyle D\_{vent}=0.004396D{\sqrt {\cfrac {L}{N}}}}
        ![{\displaystyle D_{vent}=0.004396D{\sqrt {\cfrac {L}{N}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f35c59878617d432145dfb8bd22adc4731de240d)

où

:   :   D

        v
        e
        n
        t
        =
        {\displaystyle D\_{vent}=}
        ![{\displaystyle D_{vent}=}](https://wikimedia.org/api/rest_v1/media/math/render/svg/027b6e2bc51844ac51cc74bcb750618515b02c55)taille du trou de ventilation
    :   D
        =
        {\displaystyle D=}
        ![{\displaystyle D=}](https://wikimedia.org/api/rest_v1/media/math/render/svg/46fb38bc4118286d56c5abb752508569fe376931) diamètre du tube du corps
    :   L
        =
        {\displaystyle L=}
        ![{\displaystyle L=}](https://wikimedia.org/api/rest_v1/media/math/render/svg/eb4cfedfc4601f344b83b634f7537f553acb735b) longueur du tube du corps
    :   N
        =
        {\displaystyle N=}
        ![{\displaystyle N=}](https://wikimedia.org/api/rest_v1/media/math/render/svg/868992f39bf07eb15e3b60315480a6769692879e) nombre de trous d'aération

### Unités

Les calculs sont effectués en unités métriques, mais s'affichent dans les unités de votre choix. Les valeurs peuvent également être saisies dans n'importe quelle unité en incluant les unités dans la valeur (*ex* 5 oz, ou 23,2 g).

## Références

1. <http://vernk.com/AltimeterPortSizing.htm>

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_Vent_Hole_Size_Calculator/fr&oldid=868593>"