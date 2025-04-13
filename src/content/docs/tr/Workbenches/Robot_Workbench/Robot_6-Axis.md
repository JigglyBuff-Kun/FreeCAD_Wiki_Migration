---
title: 6 Eksenli Robot
---
|  |
| --- |
| Kılavuz |
| Konu |
| Robot Tezgahı |
| Seviye |
| Orta düzey |
| Tamamlanma süresi |
| Bilinmiyor |
| Yazarlar |
|  |
| FreeCAD Sürümü |
|  |
| Örnek dosyalar |
|  |
| Ayrıca bakınız |
| *None* |
|  |

## Overview

Bu makale, standart 6 Eksenli endüstri robot simülasyonunu FreeCAD'e getirmekle ilgilidir.

John J. Craigs kitabında "Robotiğe Giriş" bölümünde de açıklandığı gibi [Denavit-Hartenberg Parametre](http://en.wikipedia.org/wiki/Denavit-Hartenberg_Parameters) sistemini izlemektedir.

## Kuka Örneği

**The Kuka KR-16**

|  |  |  |
| --- | --- | --- |
|  |  |  |

### Kinematik

**3D Uygulamalar**

| Bölüm | Parametre | Açıklama |
| --- | --- | --- |
|  |  | Temel Yapılandırma |
|  | θ  1 =  q  1 {\displaystyle \theta \_{1}=q\_{1}} {\displaystyle \theta _{1}=q_{1}}  d  1 = 675 m m {\displaystyle d\_{1}=675mm} {\displaystyle d_{1}=675mm}  a  1 = 260 m m {\displaystyle a\_{1}=260mm} {\displaystyle a_{1}=260mm}  α  1 = − 90 {\displaystyle \alpha \_{1}=-90} {\displaystyle \alpha _{1}=-90}° | Bölüm 1 |
|  | θ  2 =  q  2 − 90 {\displaystyle \theta \_{2}=q\_{2}-90} {\displaystyle \theta _{2}=q_{2}-90}°  d  2 = 0 m m {\displaystyle d\_{2}=0mm} {\displaystyle d_{2}=0mm}  a  2 = 680 m m {\displaystyle a\_{2}=680mm} {\displaystyle a_{2}=680mm}  α  2 = 0 {\displaystyle \alpha \_{2}=0} {\displaystyle \alpha _{2}=0}° | Bölüm 2 |
|  | θ  3 =  q  3 {\displaystyle \theta \_{3}=q\_{3}} {\displaystyle \theta _{3}=q_{3}}  d  3 = 0 m m {\displaystyle d\_{3}=0mm} {\displaystyle d_{3}=0mm}  a  3 = 0 m m {\displaystyle a\_{3}=0mm} {\displaystyle a_{3}=0mm}  α  3 = 90 {\displaystyle \alpha \_{3}=90} {\displaystyle \alpha _{3}=90}° | Bölüm 3 |
|  | θ  4 =  q  4 {\displaystyle \theta \_{4}=q\_{4}} {\displaystyle \theta _{4}=q_{4}}  d  4 = − 670 m m {\displaystyle d\_{4}=-670mm} {\displaystyle d_{4}=-670mm}  a  4 = 0 m m {\displaystyle a\_{4}=0mm} {\displaystyle a_{4}=0mm}  α  4 = − 90 {\displaystyle \alpha \_{4}=-90} {\displaystyle \alpha _{4}=-90}° | Bölüm 4 |
|  | θ  5 =  q  5 {\displaystyle \theta \_{5}=q\_{5}} {\displaystyle \theta _{5}=q_{5}}  d  5 = 0 m m {\displaystyle d\_{5}=0mm} {\displaystyle d_{5}=0mm}  a  5 = 0 m m {\displaystyle a\_{5}=0mm} {\displaystyle a_{5}=0mm}  α  5 = 90 {\displaystyle \alpha \_{5}=90} {\displaystyle \alpha _{5}=90}° | Bölüm 5 |
|  | θ  6 =  q  6 {\displaystyle \theta \_{6}=q\_{6}} {\displaystyle \theta _{6}=q_{6}}  d  6 = 0 m m {\displaystyle d\_{6}=0mm} {\displaystyle d_{6}=0mm}  a  6 = − 158 m m {\displaystyle a\_{6}=-158mm} {\displaystyle a_{6}=-158mm}  α  6 = 180 {\displaystyle \alpha \_{6}=180} {\displaystyle \alpha _{6}=180}° | Bölüm 6 |

Bu, aşağıdaki tabloya yol açar:

**Kinematik Tablo**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } |
| --- | --- | --- | --- | --- |
| 1 | q1 | 675 mm | 260 mm | -90° |
| 2 | q2 - 90° | 0 mm | 680 mm | 0° |
| 3 | q3 | 0 mm | 0 mm | 90° |
| 4 | q4 | -670 mm | 0 mm | -90° |
| 5 | q5 | 0 mm | 0 mm | 90° |
| 6 | q6 | -158 mm | 0 mm | 180° |

Kuka robotları, çizilen L-Konumunda tüm eksenleri 0'a sahip olmadığından, eksen 2 ve 3 ' ü, 90° değiştirmek zorundayız

**Kinematik Tablo**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } |
| --- | --- | --- | --- | --- |
| 1 | q1 | 675 mm | 260 mm | -90° |
| 2 | q2 | 0 mm | 680 mm | 0° |
| 3 | q3 - 90° | 0 mm | 0 mm | 90° |
| 4 | q4 | -670 mm | 0 mm | -90° |
| 5 | q5 | 0 mm | 0 mm | 90° |
| 6 | q6 | -158 mm | 0 mm | 180° |

Veri sayfasında, eksen hakkında ek bilgi bulabilirsiniz:

![](/images/KukaAxisData.jpg)

Bu, tam tabloya götürür:

**Kinematik Tablo**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } | θ  m i n {\displaystyle \theta \_{min}} {\displaystyle \theta _{min}} | θ  m a x {\displaystyle \theta \_{max}} {\displaystyle \theta _{max}} | Axis Speed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 675 | 260 | -90 | -185 | 185 | 156 |
| 2 | 0 | 0 | 680 | 0 | -155 | 35 | 156 |
| 3 | - 90 | 0 | 0 | 90 | -130 | 154 | 156 |
| 4 | 0 | -670 | 0 | -90 | -350 | 350 | 330 |
| 5 | 0 | 0 | 0 | 90 | -130 | 130 | 330 |
| 6 | 0 | -158 | 0 | 180 | -350 | 350 | 615 |

### Görsel gösterim

FreeCAD, kinematik tablodan kaba bir görsel üretebilir. Ancak gerçeğe daha yakın olmak istiyorsanız, simülasyon için robot şeklinde bir VRML dosyası kullanabilirsiniz. Örneğin. [Kuka](http://kuka.com), model VRML dosyaları için sunar. FreeCAD'de belirli robotun oluşturulması sırasında VRML dosyası yüklenir. FreeCAD'in ekseni hareket ettirebilmesi için VRML dosyasını düzenlememiz ve FreeCAD'in bulabileceği ve üzerinde değişiklik yapabileceği özel dönüşüm düğümleri eklemeniz gerekir.

Yine örnek Kuka KR 16 ile gösterilmiştir.
1. satırdan başlayarak:

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

Bu dosyanın Tecnomatix adında bir robot simülasyon yazılımı ile verildiğini görüyorsunuz. Bu bildirimi kaldırın ve bu dosyayı alacağınız bir URL'yi girin, çünkü Tecnomatix dosya içeriğinde telif hakkı yoktur. Bu sadece bir dönüştürücü! Öncelikle **Arka Plan** düğümünü kaldırıyoruz. Ardından, modeli mm ve dik Z'ye getirmek için **dönme** ve **ölçek** düğümünü kaldırın.

Sonunda:

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

**TimeSensor** ve 6 güzergahını yorumlayın. Bu 6 çizgi size robotun asıl ekseninin nerede olduğuna dair bir ipucu verir! Sizi o yere getiren "AXIS\_04\_OBJ" için ilk arama:

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

Bu düğümün tanımının tam üstüne satır eklemek zorundasınız. **"DEF FREECAD\_AXIS1 Transform { rotation 0 1 0 0 children ["** bu da FreeCAD'in ekseni hareket ettirmesi için bir çapa.

Şimdi **FREECAD\_AXIS2**,  **FREECAD\_AXIS3** , **FREECAD\_AXIS4** , **FREECAD\_AXIS5**  ve  **FREECAD\_AXIS6**  için de aynısını yapın. Dosyanın sonundaki kapanış parantezlerini unutmayın, işte bitti!

Robotu başlatarak VRML'yi yükleyebilirsiniz:

```
App.activeDocument().addObject("Robot::RobotObject","Robot")
App.activeDocument().Robot.RobotVrmlFile = "C:/_Projekte/FreeCAD0.9_build/mod/Robot/Lib/Kuka/kr16.wrl"

```

size bu sonucu vermeli:
![](/images/KukaKR16FreeCAD.jpg)

### KR 210

[Data sheet](http://free-cad.svn.sourceforge.net/viewvc/free-cad/trunk/src/Mod/Robot/Lib/Kuka/kr_210_2.pdf)

**Kinematik Tablo**

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

**Kinematik Tablo**

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_6-Axis/tr&oldid=1251471>"