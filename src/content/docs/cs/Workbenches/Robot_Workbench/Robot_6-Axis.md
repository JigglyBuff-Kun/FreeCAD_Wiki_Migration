---
title: 6-ti osový robot
---
|  |
| --- |
| Tutorial |
| Topic |
| Robot Workbench |
| Level |
| Intermediate |
| Time to complete |
| Unknown |
| Authors |
|  |
| FreeCAD version |
|  |
| Example files |
|  |
| See also |
| *None* |
|  |

## Overview

Tento článek je o zavedení standardů 6-ti osového průmyslového robota pro simulaci ve FreeCADu.

Popis vychází ze systému [Denavit-Hartenberg Parameter](http://en.wikipedia.org/wiki/Denavit-Hartenberg_Parameters), podobně jak popisuje John J. Craigs v knize "Introduction to Robotics".

## Příklad Kuka

**Kuka KR-16**

|  |  |  |
| --- | --- | --- |
|  |  |  |

### Kinematika

**3D aplikace**

| Segment | Parameter | Popis |
| --- | --- | --- |
|  |  | Základní konfigurace |
|  | θ  1 =  q  1 {\displaystyle \theta \_{1}=q\_{1}} {\displaystyle \theta _{1}=q_{1}}  d  1 = 675 m m {\displaystyle d\_{1}=675mm} {\displaystyle d_{1}=675mm}  a  1 = 260 m m {\displaystyle a\_{1}=260mm} {\displaystyle a_{1}=260mm}  α  1 = − 90 {\displaystyle \alpha \_{1}=-90} {\displaystyle \alpha _{1}=-90}° | Segment 1 |
|  | θ  2 =  q  2 − 90 {\displaystyle \theta \_{2}=q\_{2}-90} {\displaystyle \theta _{2}=q_{2}-90}°  d  2 = 0 m m {\displaystyle d\_{2}=0mm} {\displaystyle d_{2}=0mm}  a  2 = 680 m m {\displaystyle a\_{2}=680mm} {\displaystyle a_{2}=680mm}  α  2 = 0 {\displaystyle \alpha \_{2}=0} {\displaystyle \alpha _{2}=0}° | Segment 2 |
|  | θ  3 =  q  3 {\displaystyle \theta \_{3}=q\_{3}} {\displaystyle \theta _{3}=q_{3}}  d  3 = 0 m m {\displaystyle d\_{3}=0mm} {\displaystyle d_{3}=0mm}  a  3 = 0 m m {\displaystyle a\_{3}=0mm} {\displaystyle a_{3}=0mm}  α  3 = 90 {\displaystyle \alpha \_{3}=90} {\displaystyle \alpha _{3}=90}° | Segment 3 |
|  | θ  4 =  q  4 {\displaystyle \theta \_{4}=q\_{4}} {\displaystyle \theta _{4}=q_{4}}  d  4 = − 670 m m {\displaystyle d\_{4}=-670mm} {\displaystyle d_{4}=-670mm}  a  4 = 0 m m {\displaystyle a\_{4}=0mm} {\displaystyle a_{4}=0mm}  α  4 = − 90 {\displaystyle \alpha \_{4}=-90} {\displaystyle \alpha _{4}=-90}° | Segment 4 |
|  | θ  5 =  q  5 {\displaystyle \theta \_{5}=q\_{5}} {\displaystyle \theta _{5}=q_{5}}  d  5 = 0 m m {\displaystyle d\_{5}=0mm} {\displaystyle d_{5}=0mm}  a  5 = 0 m m {\displaystyle a\_{5}=0mm} {\displaystyle a_{5}=0mm}  α  5 = 90 {\displaystyle \alpha \_{5}=90} {\displaystyle \alpha _{5}=90}° | Segment 5 |
|  | θ  6 =  q  6 {\displaystyle \theta \_{6}=q\_{6}} {\displaystyle \theta _{6}=q_{6}}  d  6 = 0 m m {\displaystyle d\_{6}=0mm} {\displaystyle d_{6}=0mm}  a  6 = − 158 m m {\displaystyle a\_{6}=-158mm} {\displaystyle a_{6}=-158mm}  α  6 = 180 {\displaystyle \alpha \_{6}=180} {\displaystyle \alpha _{6}=180}° | Segment 6 |

Řídí se následující tabulkou:

**Kinematická tabulka**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } |
| --- | --- | --- | --- | --- |
| 1 | q1 | 675 mm | 260 mm | -90° |
| 2 | q2 - 90° | 0 mm | 680 mm | 0° |
| 3 | q3 | 0 mm | 0 mm | 90° |
| 4 | q4 | -670 mm | 0 mm | -90° |
| 5 | q5 | 0 mm | 0 mm | 90° |
| 6 | q6 | -158 mm | 0 mm | 180° |

Protože roboty Kuka nemají všechny osy do 0 v nakreslené L-pozici, musíme změnit osy 2 a 3 o 90°.

**Kinematická tabulka**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } |
| --- | --- | --- | --- | --- |
| 1 | q1 | 675 mm | 260 mm | -90° |
| 2 | q2 | 0 mm | 680 mm | 0° |
| 3 | q3 - 90° | 0 mm | 0 mm | 90° |
| 4 | q4 | -670 mm | 0 mm | -90° |
| 5 | q5 | 0 mm | 0 mm | 90° |
| 6 | q6 | -158 mm | 0 mm | 180° |

V popisu robota jsou navíc i informace o ose:

![](/images/KukaAxisData.jpg)

Výsledkem je kompletní tabulka:

**Kinematická tabulka**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } | θ  m i n {\displaystyle \theta \_{min}} {\displaystyle \theta _{min}} | θ  m a x {\displaystyle \theta \_{max}} {\displaystyle \theta _{max}} | Axis Speed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 675 | 260 | -90 | -185 | 185 | 156 |
| 2 | 0 | 0 | 680 | 0 | -155 | 35 | 156 |
| 3 | - 90 | 0 | 0 | 90 | -130 | 154 | 156 |
| 4 | 0 | -670 | 0 | -90 | -350 | 350 | 330 |
| 5 | 0 | 0 | 0 | 90 | -130 | 130 | 330 |
| 6 | 0 | -158 | 0 | 180 | -350 | 350 | 615 |

### Vizuální reprezentace

FreeCAD může generovat neupravený vizuální výstup kinematické taulky. Ale pokud se chcete dostat blíž k realitě, můžete pro simulaci použít VRML soubor s tvary robota.
Např. dodávané [Kuka](http://kuka.com) soubory pro jejich model. Při vytváření specifického robota ve FreeCADu je natahován soubor VRML. Pokud je FreeCADu umožněno posunovat osy, musí být upraven VRML soubor a vloženy speciální transformační uzly, které FreeCAD může nalézt a manipulovat s nimi.

Ještě jednou ukážeme příklad Kuka KR 16.
Začínáme od řádku 1:

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

Vidíte, že tento soubor je dodáván se simulačním software robota zvaným Tecnomatix. Odstraňte poznámku a vložte tam URL, ze které jste tento soubor získali, protože Tecnomatix nemá žádný copyright na obsah souboru. Je to pouze konvertor! Nejdřív odstraňte uzel **Background**. Potom odstraňte uzly **rotation** a **scale** abyste dostali model v mm a kolmou Z.

A teď na konci:

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

Odkomentujte **TimeSensor** a 6 routes. Těch 6 řádků určuje kde jsou aktuální osy robota! Nejdříve se podívejte po "AXIS\_04\_OBJ" což Vás přivede na následující místo:

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

Přesně nad definici tohoto uzlu musíte vložit řádek **"DEF FREECAD\_AXIS1 Transform { rotation 0 1 0 0 children ["** což je odkaz pro FreeCAD aby se přesunul na osy.

A teď to samé pro **FREECAD\_AXIS2**,**FREECAD\_AXIS3**,**FREECAD\_AXIS4**,**FREECAD\_AXIS5** a **FREECAD\_AXIS6**.
Nezapomeňte na uzavírací závorky na konci souboru a pak jste hotovi!

Při konkretizaci robota můžete natáhnout VRML:

```
App.activeDocument().addObject("Robot::RobotObject","Robot")
App.activeDocument().Robot.RobotVrmlFile = "C:/_Projekte/FreeCAD0.9_build/mod/Robot/Lib/Kuka/kr16.wrl"

```

což by mělo dát tento výsledek:
![](/images/KukaKR16FreeCAD.jpg)

### KR 210

[Data sheet](http://free-cad.svn.sourceforge.net/viewvc/free-cad/trunk/src/Mod/Robot/Lib/Kuka/kr_210_2.pdf)

**Kinematická tabulka**

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

**Kinematická tabulka**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } | θ  m i n {\displaystyle \theta \_{min}} {\displaystyle \theta _{min}} | θ  m a x {\displaystyle \theta \_{max}} {\displaystyle \theta _{max}} | Axis Speed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 1045 | 500 | -90 | -185 | 185 | 156 |
| 2 | 0 | 0 | 1300 | 0 | -155 | 35 | 156 |
| 3 | - 90 | 0 | 0 | 90 | -130 | 154 | 156 |
| 4 | 0 | -1025 | 0 | -90 | -350 | 350 | 330 |
| 5 | 0 | 0 | 0 | 90 | -130 | 130 | 330 |
| 6 | 0 | -250 | 0 | 180 | -350 | 350 | 615 |

### Links

* [Springer Handbook of Robotics, section Kinematics, p 9-33](https://link.springer.com/referenceworkentry/10.1007%2F978-3-540-30301-5_2).
* [Denavit-Hartenberg Parameter 3D Video Tutorial](https://www.youtube.com/watch?v=qZB3_gKBwf8) Denavit-Hartenberg Parameter 3D Video Tutorial for a KUKA industry robot on YouTube (german).
* [Denavit-Hartenberg Reference Frame Layout](https://www.youtube.com/watch?v=rA9tm0gTln8) Denavit-Hartenberg Reference Frame Layout on YouTube.
* [RoboAnalyzer](http://www.roboanalyzer.com/) RoboAnalyzer is a 3D model based software that can be used to teach and learn the Robotics concepts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_6-Axis/cs&oldid=1251455>"