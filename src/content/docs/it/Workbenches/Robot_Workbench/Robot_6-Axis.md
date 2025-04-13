---
title: Robot a 6 assi
---
|  |
| --- |
| Tutorial |
| Argomento |
| Robot |
| Livello di difficoltà |
| Intermedio |
| Tempo di esecuzione |
|  |
| Autori |
|  |
| Versione di FreeCAD |
|  |
| Files di esempio |
|  |
| Vedere anche |
| *Nessuno* |
|  |

## Vista generale

Questo articolo riguarda il portare un robot industriale standard a 6 assi in FreeCAD per la simulazione nel ![](/images/Workbench_Robot.svg) [Ambiente Robot](/Robot_Workbench/it "Robot Workbench/it")

La descrizione è conforme alla [Convenzione di Denavit-Hartenberg](http://it.wikipedia.org/wiki/Convenzione_di_Denavit-Hartenberg) per i parametri, come descritto anche nel libro **Introduction to Robotics** di John J. Craigs.

## Esempio Kuka

**Il Kuka KR-16**

|  |  |  |
| --- | --- | --- |
|  |  |  |

### Cinematica

**Applicazioni 3D**

| Segmento | Parametro | Descrizione |
| --- | --- | --- |
|  |  | Configurazione di base |
|  | θ  1 =  q  1 {\displaystyle \theta \_{1}=q\_{1}} {\displaystyle \theta _{1}=q_{1}}  d  1 = 675 m m {\displaystyle d\_{1}=675mm} {\displaystyle d_{1}=675mm}  a  1 = 260 m m {\displaystyle a\_{1}=260mm} {\displaystyle a_{1}=260mm}  α  1 = − 90 {\displaystyle \alpha \_{1}=-90} {\displaystyle \alpha _{1}=-90}° | Segmento 1 |
|  | θ  2 =  q  2 − 90 {\displaystyle \theta \_{2}=q\_{2}-90} {\displaystyle \theta _{2}=q_{2}-90}°  d  2 = 0 m m {\displaystyle d\_{2}=0mm} {\displaystyle d_{2}=0mm}  a  2 = 680 m m {\displaystyle a\_{2}=680mm} {\displaystyle a_{2}=680mm}  α  2 = 0 {\displaystyle \alpha \_{2}=0} {\displaystyle \alpha _{2}=0}° | Segmento 2 |
|  | θ  3 =  q  3 {\displaystyle \theta \_{3}=q\_{3}} {\displaystyle \theta _{3}=q_{3}}  d  3 = 0 m m {\displaystyle d\_{3}=0mm} {\displaystyle d_{3}=0mm}  a  3 = 0 m m {\displaystyle a\_{3}=0mm} {\displaystyle a_{3}=0mm}  α  3 = 90 {\displaystyle \alpha \_{3}=90} {\displaystyle \alpha _{3}=90}° | Segmento 3 |
|  | θ  4 =  q  4 {\displaystyle \theta \_{4}=q\_{4}} {\displaystyle \theta _{4}=q_{4}}  d  4 = − 670 m m {\displaystyle d\_{4}=-670mm} {\displaystyle d_{4}=-670mm}  a  4 = 0 m m {\displaystyle a\_{4}=0mm} {\displaystyle a_{4}=0mm}  α  4 = − 90 {\displaystyle \alpha \_{4}=-90} {\displaystyle \alpha _{4}=-90}° | Segmento 4 |
|  | θ  5 =  q  5 {\displaystyle \theta \_{5}=q\_{5}} {\displaystyle \theta _{5}=q_{5}}  d  5 = 0 m m {\displaystyle d\_{5}=0mm} {\displaystyle d_{5}=0mm}  a  5 = 0 m m {\displaystyle a\_{5}=0mm} {\displaystyle a_{5}=0mm}  α  5 = 90 {\displaystyle \alpha \_{5}=90} {\displaystyle \alpha _{5}=90}° | Segmento 5 |
|  | θ  6 =  q  6 {\displaystyle \theta \_{6}=q\_{6}} {\displaystyle \theta _{6}=q_{6}}  d  6 = 0 m m {\displaystyle d\_{6}=0mm} {\displaystyle d_{6}=0mm}  a  6 = − 158 m m {\displaystyle a\_{6}=-158mm} {\displaystyle a_{6}=-158mm}  α  6 = 180 {\displaystyle \alpha \_{6}=180} {\displaystyle \alpha _{6}=180}° | Segmento 6 |

Questo porta alla seguente tabella:

**Tabella cinematica**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } |
| --- | --- | --- | --- | --- |
| 1 | q1 | 675 mm | 260 mm | -90° |
| 2 | q2 - 90° | 0 mm | 680 mm | 0° |
| 3 | q3 | 0 mm | 0 mm | 90° |
| 4 | q4 | -670 mm | 0 mm | -90° |
| 5 | q5 | 0 mm | 0 mm | 90° |
| 6 | q6 | -158 mm | 0 mm | 180° |

Dato che i robot Kuka non hanno tutti gli assi a 0 nella posizione a L disegnata, si devono modificare gli assi 2 e 3 di 90 °.

**Tabella cinematica**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } |
| --- | --- | --- | --- | --- |
| 1 | q1 | 675 mm | 260 mm | -90° |
| 2 | q2 | 0 mm | 680 mm | 0° |
| 3 | q3 - 90° | 0 mm | 0 mm | 90° |
| 4 | q4 | -670 mm | 0 mm | -90° |
| 5 | q5 | 0 mm | 0 mm | 90° |
| 6 | q6 | -158 mm | 0 mm | 180° |

Nella scheda tecnica si trovano ulteriori informazioni sugli assi:

![](/images/KukaAxisData.jpg)

Questo permette di compilare la tabella completa:

**Tabella cinematica**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } | θ  m i n {\displaystyle \theta \_{min}} {\displaystyle \theta _{min}} | θ  m a x {\displaystyle \theta \_{max}} {\displaystyle \theta _{max}} | Axis Speed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 675 | 260 | -90 | -185 | 185 | 156 |
| 2 | 0 | 0 | 680 | 0 | -155 | 35 | 156 |
| 3 | - 90 | 0 | 0 | 90 | -130 | 154 | 156 |
| 4 | 0 | -670 | 0 | -90 | -350 | 350 | 330 |
| 5 | 0 | 0 | 0 | 90 | -130 | 130 | 330 |
| 6 | 0 | -158 | 0 | 180 | -350 | 350 | 615 |

### Rappresentazione visiva

FreeCAD può generare una soddisfacente rappresentazione visiva della tabella cinematica. Se si desidera una visione più vicina alla realtà è possibile utilizzare per la simulazione un file VRML con la forma del robot. Ad esempio, [Kuka](http://kuka.com) offre dei file VRML per i suoi modelli. In FreeCAD il file VRML viene caricato durante la creazione di un robot specifico. Per consentire a FreeCAD di muovere gli assi, si deve editare il file VRML e inserire degli speciali nodi di trasformazione che FreeCAD possa trovare e manipolare.

Anche questo esempio si riferisce a un Kuka KR 16.
Cominciando dalla riga 1:

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

Si vede che questo file è stato esportato con un software di simulazione di robot chiamato Tecnomatix. Rimuovere questa nota e inserire l'URL da cui si è ottenuto il file, perché Tecnomatix non ha nessun copyright sul contenuto del file. E' solo un convertitore! Iniziare con il rimuovere il nodo **Background**. Quindi rimuovere i nodi **rotation** e **scale** per ottenere il modello in mm e l'asse Z verticale.

Poi, proprio alla fine:

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

Togliere il segno di commento a **TimeSensor** e alle 6 rotte. Questo 6 righe indicano dove si trova l'asse effettivo del robot!
Ricercare **AXIS\_04\_OBJ** e arrivare a questa parte del file:

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

Dove si deve inserire immediatamente sopra la definizione di questo nodo la riga **"DEF FREECAD\_AXIS1 Transform { rotation 0 1 0 0 children ["** che è l'ancora che FreeCAD utilizza per spostare questo asse.

Poi fare la stessa cosa per **FREECAD\_AXIS2**,**FREECAD\_AXIS3**,**FREECAD\_AXIS4**,**FREECAD\_AXIS5** e **FREECAD\_AXIS6**. Non dimenticare le parentesi di chiusura alla fine del file e il gioco è fatto!

Ora è possibile caricare il file VRML per installare il robot con:

```
App.activeDocument().addObject("Robot::RobotObject","Robot")
App.activeDocument().Robot.RobotVrmlFile = "C:/_Projekte/FreeCAD0.9_build/mod/Robot/Lib/Kuka/kr16.wrl"

```

Che dovrebbe dare questo risultato:
![](/images/KukaKR16FreeCAD.jpg)

### KR 210

[Data sheet](http://free-cad.svn.sourceforge.net/viewvc/free-cad/trunk/src/Mod/Robot/Lib/Kuka/kr_210_2.pdf)

**Tabella cinematica**

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

**Tabella cinematica**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } | θ  m i n {\displaystyle \theta \_{min}} {\displaystyle \theta _{min}} | θ  m a x {\displaystyle \theta \_{max}} {\displaystyle \theta _{max}} | Axis Speed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 1045 | 500 | -90 | -185 | 185 | 156 |
| 2 | 0 | 0 | 1300 | 0 | -155 | 35 | 156 |
| 3 | - 90 | 0 | 0 | 90 | -130 | 154 | 156 |
| 4 | 0 | -1025 | 0 | -90 | -350 | 350 | 330 |
| 5 | 0 | 0 | 0 | 90 | -130 | 130 | 330 |
| 6 | 0 | -250 | 0 | 180 | -350 | 350 | 615 |

### Collegamenti

* [Springer Handbook of Robotics, section Kinematics, p 9-33](https://link.springer.com/referenceworkentry/10.1007%2F978-3-540-30301-5_2).
* [Denavit-Hartenberg Parameter 3D Video Tutorial](https://www.youtube.com/watch?v=qZB3_gKBwf8) Denavit-Hartenberg Parameter 3D Video Tutorial for a KUKA industry robot on YouTube (german).
* [Denavit-Hartenberg Reference Frame Layout](https://www.youtube.com/watch?v=rA9tm0gTln8) Denavit-Hartenberg Reference Frame Layout on YouTube.
* [RoboAnalyzer](http://www.roboanalyzer.com/) RoboAnalyzer is a 3D model based software that can be used to teach and learn the Robotics concepts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_6-Axis/it&oldid=1396886>"