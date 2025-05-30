---
title: Robot 6 Axes
---
|  |
| --- |
| Tutoriel |
| Thème |
| Atelier Robot |
| Niveau |
| Intermédiaire |
| Temps d'exécution estimé |
| Inconnu |
| Auteurs |
|  |
| Version de FreeCAD |
|  |
| Fichiers exemples |
|  |
| Voir aussi |
| *None* |
|  |

## Présentation

Cet article concerne l'importation d'un robot industriel à 6 axes standard dans FreeCAD pour fins de simulation dans l'![](/images/Workbench_Robot.svg) [atelier Robot](/Robot_Workbench/fr "Robot Workbench/fr")

La description est conforme au système [Denavit-Hartenberg](http://en.wikipedia.org/wiki/fr:Denavit-Hartenberg "wikipedia:fr:Denavit-Hartenberg"), tel que décrit également dans le livre de John J. Craigs « Introduction to Robotics ».

## Exemple Kuka

**Le Kuka KR-16**

|  |  |  |
| --- | --- | --- |
|  |  |  |

### Cinématique

**Applications 3D**

| Segment | Paramètre | Description |
| --- | --- | --- |
|  |  | Configuration de base |
|  | θ  1 =  q  1 {\displaystyle \theta \_{1}=q\_{1}} {\displaystyle \theta _{1}=q_{1}}  d  1 = 675 m m {\displaystyle d\_{1}=675mm} {\displaystyle d_{1}=675mm}  a  1 = 260 m m {\displaystyle a\_{1}=260mm} {\displaystyle a_{1}=260mm}  α  1 = − 90 {\displaystyle \alpha \_{1}=-90} {\displaystyle \alpha _{1}=-90}° | Segment 1 |
|  | θ  2 =  q  2 − 90 {\displaystyle \theta \_{2}=q\_{2}-90} {\displaystyle \theta _{2}=q_{2}-90}°  d  2 = 0 m m {\displaystyle d\_{2}=0mm} {\displaystyle d_{2}=0mm}  a  2 = 680 m m {\displaystyle a\_{2}=680mm} {\displaystyle a_{2}=680mm}  α  2 = 0 {\displaystyle \alpha \_{2}=0} {\displaystyle \alpha _{2}=0}° | Segment 2 |
|  | θ  3 =  q  3 {\displaystyle \theta \_{3}=q\_{3}} {\displaystyle \theta _{3}=q_{3}}  d  3 = 0 m m {\displaystyle d\_{3}=0mm} {\displaystyle d_{3}=0mm}  a  3 = 0 m m {\displaystyle a\_{3}=0mm} {\displaystyle a_{3}=0mm}  α  3 = 90 {\displaystyle \alpha \_{3}=90} {\displaystyle \alpha _{3}=90}° | Segment 3 |
|  | θ  4 =  q  4 {\displaystyle \theta \_{4}=q\_{4}} {\displaystyle \theta _{4}=q_{4}}  d  4 = − 670 m m {\displaystyle d\_{4}=-670mm} {\displaystyle d_{4}=-670mm}  a  4 = 0 m m {\displaystyle a\_{4}=0mm} {\displaystyle a_{4}=0mm}  α  4 = − 90 {\displaystyle \alpha \_{4}=-90} {\displaystyle \alpha _{4}=-90}° | Segment 4 |
|  | θ  5 =  q  5 {\displaystyle \theta \_{5}=q\_{5}} {\displaystyle \theta _{5}=q_{5}}  d  5 = 0 m m {\displaystyle d\_{5}=0mm} {\displaystyle d_{5}=0mm}  a  5 = 0 m m {\displaystyle a\_{5}=0mm} {\displaystyle a_{5}=0mm}  α  5 = 90 {\displaystyle \alpha \_{5}=90} {\displaystyle \alpha _{5}=90}° | Segment 5 |
|  | θ  6 =  q  6 {\displaystyle \theta \_{6}=q\_{6}} {\displaystyle \theta _{6}=q_{6}}  d  6 = 0 m m {\displaystyle d\_{6}=0mm} {\displaystyle d_{6}=0mm}  a  6 = − 158 m m {\displaystyle a\_{6}=-158mm} {\displaystyle a_{6}=-158mm}  α  6 = 180 {\displaystyle \alpha \_{6}=180} {\displaystyle \alpha _{6}=180}° | Segment 6 |

Cela conduit au tableau suivant :

**Tableau cinématique**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } |
| --- | --- | --- | --- | --- |
| 1 | q1 | 675 mm | 260 mm | -90° |
| 2 | q2 - 90° | 0 mm | 680 mm | 0° |
| 3 | q3 | 0 mm | 0 mm | 90° |
| 4 | q4 | -670 mm | 0 mm | -90° |
| 5 | q5 | 0 mm | 0 mm | 90° |
| 6 | q6 | -158 mm | 0 mm | 180° |

Puisque les axes des robots Kuka robots ne sont pas toutes à 0 dans la L-Position, il faut changer les axes 2 & 3 de 90°.

**Tableau cinématique**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } |
| --- | --- | --- | --- | --- |
| 1 | q1 | 675 mm | 260 mm | -90° |
| 2 | q2 | 0 mm | 680 mm | 0° |
| 3 | q3 - 90° | 0 mm | 0 mm | 90° |
| 4 | q4 | -670 mm | 0 mm | -90° |
| 5 | q5 | 0 mm | 0 mm | 90° |
| 6 | q6 | -158 mm | 0 mm | 180° |

Dans la fiche technique se trouvent des informations supplémentaires au sujet des axes :

![](/images/KukaAxisData.jpg)

Ce qui conduit à ce tableau complet :

**Tableau cinématique**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } | θ  m i n {\displaystyle \theta \_{min}} {\displaystyle \theta _{min}} | θ  m a x {\displaystyle \theta \_{max}} {\displaystyle \theta _{max}} | Axis Speed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 675 | 260 | -90 | -185 | 185 | 156 |
| 2 | 0 | 0 | 680 | 0 | -155 | 35 | 156 |
| 3 | - 90 | 0 | 0 | 90 | -130 | 154 | 156 |
| 4 | 0 | -670 | 0 | -90 | -350 | 350 | 330 |
| 5 | 0 | 0 | 0 | 90 | -130 | 130 | 330 |
| 6 | 0 | -158 | 0 | 180 | -350 | 350 | 615 |

### Représentation visuelle

FreeCAD peut générer une ébauche visuelle du tableau cinématique. Mais si vous voulez un visuel plus près de la réalité, vous pouvez utiliser un fichier VRML comprenant la forme du robot pour la simulation. Par exemple, [Kuka](http://kuka.com) publie des fichiers VRML de ses modèles. Le fichier VRML est chargé pendant la création d'un robot spécifique dans FreeCAD. Afin de permettre à FreeCAD de bouger les axes, il faut éditer le fichier VRML et insérer des nodes spéciaux de transformation que FreeCAD peut trouver et manipuler.

Voici par exemple pour le Kuka KR 16.
En commençant à la ligne 1:

```
#VRML V2.0 utf8
#
# This VRML97 file was exported using eM-Workplace
# (c) Tecnomatix Technologies GmbH & Co. KG
#     Heisenberg-Bogen 1
#     D-85609 Aschheim-Dornach
#     GERMANY
#
#Background
#{
#   skyColor   [0.752941 0.752941 0.752941]
#}
Transform
{
   #rotation 1 0 0 -1.5707963
   #scale .001 .001 .001
   children
   [
           DEF AOBJ_0001_000_TRAFO Transform
           {
              children
              [
...

```

On voit que ce fichier a été exporté par un logiciel de simulation de robot nommé Tecnomatix. Supprimez cette note et insérez l'URL d'où vous avez pris ce fichier, puisque Tecnomatix n'a aucun droit sur le contenu du fichier. Il s'agit seulement d'un convertisseur ! Tout d'abord supprimons le node **Background**. Puis supprimons les nodes **rotation** et **scale** pour mettre le modèle en mm et l'axe en Z vertical.

Tout à la fin :

```
  ] }
  ] }
  ] }
  ]
}
#ROUTE SENS_04_OBJ.rotation_changed TO AXIS_04_OBJ.rotation
#ROUTE SENS_27_OBJ.rotation_changed TO AXIS_27_OBJ.rotation
#ROUTE SENS_32_OBJ.rotation_changed TO AXIS_32_OBJ.rotation
#ROUTE SENS_44_OBJ.rotation_changed TO AXIS_44_OBJ.rotation
#ROUTE SENS_46_OBJ.rotation_changed TO AXIS_46_OBJ.rotation
#ROUTE SENS_49_OBJ.rotation_changed TO AXIS_49_OBJ.rotation
#DEF AnySIMTimer TimeSensor
#{
#   cycleInterval 1.000000
#   loop          TRUE
#}

```

Commentez le **TimeSensor** et les 6 routes. Ces 6 lignes indiquent où les axes du robot se trouvent ! Cherchez d'abord "AXIS\_04\_OBJ" qui vous amène à cet endroit :

```
...
    Transform { rotation 1 0 0 1.570796 children [
        DEF SENS_04_OBJ-0001 CylinderSensor
        {
           diskAngle 1.570796
           minAngle  -3.228859
           maxAngle  3.228859
           offset    0.000000
        }
      DEF FREECAD_AXIS1 Transform { rotation 0 1 0 0 children [
      DEF AXIS_04_OBJ-0001 Transform
     {
        children
        [
        Transform { rotation 1 0 0 -1.570796 children [
           DEF AOBJ_0001_003_TRAFO Transform
           {
              rotation 1.000000 0.000000 0.000000 3.141593
              translation -600.000000 500.000000 300.000000
              children
              [
...

```

Vous devez insérer très exactement au dessus de la définition de ce node la ligne : **"DEF FREECAD\_AXIS1 Transform { rotation 0 1 0 0 children ["** qui est le point d'ancrage de FreeCAD pour déplacer l'axe.

Faites ensuite la même chose pour **FREECAD\_AXIS2**,**FREECAD\_AXIS3**,**FREECAD\_AXIS4**,**FREECAD\_AXIS5** et **FREECAD\_AXIS6**. N'oubliez pas de fermer les crochets à la fin du fichier et voilà, vous avez terminé !

Vous pouvez charger le fichier VRML par instanciation du robot:

```
App.activeDocument().addObject("Robot::RobotObject","Robot")
App.activeDocument().Robot.RobotVrmlFile = "C:/_Projekte/FreeCAD0.9_build/mod/Robot/Lib/Kuka/kr16.wrl"

```

Ce qui devrait vous donner ce résultat :
![](/images/KukaKR16FreeCAD.jpg)

### KR 210

[Data sheet](http://free-cad.svn.sourceforge.net/viewvc/free-cad/trunk/src/Mod/Robot/Lib/Kuka/kr_210_2.pdf)

**Tableau cinématique**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } | θ  m i n {\displaystyle \theta \_{min}} {\displaystyle \theta _{min}} | θ  m a x {\displaystyle \theta \_{max}} {\displaystyle \theta _{max}} | Axis Speed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 750 | 350 | -90 | -185 | 185 | 156 |
| 2 | 0 | 0 | 1250 | 0 | -155 | 35 | 156 |
| 3 | - 90 | 0 | 0 | 90 | -130 | 154 | 156 |
| 4 | 0 | -1100 | 0 | -90 | -350 | 350 | 330 |
| 5 | 0 | 0 | 0 | 90 | -130 | 130 | 330 |
| 6 | 0 | -230 | 0 | 180 | -350 | 350 | 615 |

### KR 500

[Data sheet](http://free-cad.svn.sourceforge.net/viewvc/free-cad/trunk/src/Mod/Robot/Lib/Kuka/kr_500_2.pdf)

**Tableau cinématique**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } | θ  m i n {\displaystyle \theta \_{min}} {\displaystyle \theta _{min}} | θ  m a x {\displaystyle \theta \_{max}} {\displaystyle \theta _{max}} | Axis Speed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 1045 | 500 | -90 | -185 | 185 | 156 |
| 2 | 0 | 0 | 1300 | 0 | -155 | 35 | 156 |
| 3 | - 90 | 0 | 0 | 90 | -130 | 154 | 156 |
| 4 | 0 | -1025 | 0 | -90 | -350 | 350 | 330 |
| 5 | 0 | 0 | 0 | 90 | -130 | 130 | 330 |
| 6 | 0 | -250 | 0 | 180 | -350 | 350 | 615 |

### Liens

* [Springer Handbook of Robotics, section Kinematics, p 9-33](https://link.springer.com/referenceworkentry/10.1007%2F978-3-540-30301-5_2).
* [Tutoriel vidéo 3D sur les paramètres Denavit-Hartenberg](https://www.youtube.com/watch?v=qZB3_gKBwf8). Tutoriel vidéo 3D sur les paramètres Denavit-Hartenberg pour un robot industriel KUKA sur YouTube (en allemand).
* [Denavit-Hartenberg Reference Frame Layout](https://www.youtube.com/watch?v=rA9tm0gTln8) Schéma du cadre de référence de Denavit-Hartenberg sur YouTube.
* [RoboAnalyzer](http://www.roboanalyzer.com/) RoboAnalyzer est un logiciel basé sur un modèle 3D qui peut être utilisé pour enseigner et apprendre les concepts de la robotique.

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_6-Axis/fr&oldid=1251457>"