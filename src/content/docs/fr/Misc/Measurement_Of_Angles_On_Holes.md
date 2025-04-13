---
title: Mesure des angles sur les axes des trous
---
|  |
| --- |
| Tutoriel |
| Thème |
| TechDraw |
| Niveau |
| Base |
| Temps d'exécution estimé |
| 1 minute |
| Auteurs |
| AnHi |
| Version de FreeCAD |
| 0.19 |
| Fichiers exemples |
| *None* |
| Voir aussi |
| *None* |
|  |

## Introduction

Ce tutoriel explique comment créer des lignes de perçage centrales à l'aide de l'![](/images/Workbench_TechDraw.svg) [atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") avec des trous orientés.

En créant des angles pour les trous, il n'est pas possible d'utiliser des lignes médianes verticales ou horizontales (false/true) à partir des propriétés de la vue. Pour cette nécessité des lignes guides et/ou des points guides sont créés.

## Procédure

1. Définir des axes sur les trous :

Il existe plusieurs manières pour créer une ligne médiane sur des trous. En premier, les lignes ou les points du trou doivent être sélectionnés comme indiqué ci-dessous. Ensuite, les outils suivants peuvent être utilisés à partir de la barre d'outils pour créer la ligne médiane :

:   ![](/images/TechDraw_2PointCenterLine.svg) [Ajouter une ligne centrale entre 2 Points](/TechDraw_2PointCenterLine/fr "TechDraw 2PointCenterLine/fr")
:   ![](/images/TechDraw_2LineCenterLine.svg) [Ajouter une ligne centrale entre 2 Lignes](/TechDraw_2LineCenterLine/fr "TechDraw 2LineCenterLine/fr")

![](/images/TechDraw_Tutorial_2PointCenterLine_example.png)

Ci-dessus: création avec ![](/images/TechDraw_2PointCenterLine.svg) d'un trait d'axe entre 2 points

![](/images/TechDraw_Tutorial_2LineCenterLine_example.png)

Ci-dessus: création avec ![](/images/TechDraw_2LineCenterLine.svg) d'un trait d'axe entre 2 lignes

Dans la fenêtre de dialogue de la vue combinée associée, sélectionnez dans le panneau des tâches sous *Orientation*, *Aligned* pour les axes hors des axes principaux. Par *Extend By*, on entend la longueur de la ligne centrale au-delà de la ligne du corps dans le dessin. Avec *Shift Horizontal* et *Shift Vertical*, la ligne centrale peut se déplacer dans le sens horizontal ou vertical, si nécessaire. *Style* signifie la figure de la ligne centrale.

![](/images/Create-Center-Line3P.JPG)

Ci-dessus: la fenêtre de dialogue

La ligne médiane créée peut être modifiée. Sélectionnez la ligne centrale et appuyez sur le bouton ![](/images/TechDraw_2LineCenterLine.svg) ou ![](/images/TechDraw_2PointCenterLine.svg) depuis la barre d'outils avec laquelle vous avez créé la ligne centrale. Supprimer uniquement la ligne centrale avec ![](/images/TechDraw_CosmeticEraser.svg) dans la barre d'outils après avoir sélectionné la ligne centrale.

2. Réglage des angles :

Sélection des points du quadrant avec ![](/images/TechDraw_Quadrants.svg) depuis la barre d'outils. Sélectionnez ensuite les points comme indiqué ci-dessous et utilisez ![](/images/TechDraw_Dimension_Angle3Pt.svg) à partir de la barre d'outils pour créer l'angle. Une autre succession crée d'autres angles. S'il n'y a pas de point d'accrochage sur la ligne centrale changer "compte ISO" dans les propriétés.

![](/images/AnHi11.PNG)

Ci-dessus: succession de sélections

Retrieved from "<http://wiki.freecad.org/index.php?title=Measurement_Of_Angles_On_Holes/fr&oldid=1495919>"