---
title: Skrypty części Łożysko kulkowe - część 2
---

|                                           |
| ----------------------------------------- |
| Ćwiczenie                                 |
| Temat                                     |
| Skrypty części: Łożysko kulkowe - część 2 |
| Poziom trudności                          |
| Początkujący                              |
| Czas wykonania                            |
| 30 min                                    |
| Autorzy                                   |
| r-frank                                   |
| Wersja FreeCAD                            |
| 0.16.6706                                 |
| Pliki z przykładami                       |
| nie dołączono                             |
| Zobacz również                            |
| _-_                                       |
|                                           |

### Wprowadzenie

Ten poradnik ma na celu wprowadzenie początkujących użytkowników w tworzenie części za pomocą skryptów Python w programie FreeCAD.  
Ten samouczek będzie omawiał, jak zbudować łożysko kulkowe przy użyciu szkiców i ich wyciągnięcia przez obrót.  
Kod wygeneruje nowy dokument FreeCAD zawierający 12 kształtów _(wewnętrzną obręcz, zewnętrzną obręcz i 10 kul/sfer)_.  
Będzie to wyglądać tak:

![](/images/Tutorial_BallBearing01.jpg)

### Przebieg pracy

Przebieg pracy jest mniej więcej identyczny z tym, jak tworzyłbyś część w środowisku projektowania Część.  
Istnieje tylko kilka drobnych różnic.

- Utwórz nowy pusty dokument i ustaw go jako aktywny dokument
- Narysuj podstawowy kształt zewnętrznego pierścienia składający się z czterech prostych linii i czterech łuków

![](/images/TutorialBallBearing_P2-Sketch.png)

- Połącz linie i łuki, a następnie zaktualizuj je do jednego ciągu.
- Zaktualizuj ciąg do powierzchni.
- Obróć powierzchnię, aby uzyskać kształt.
- Narysuj koło.
- Zaktualizuj koło do ciągu.
- Zaktualizuj ciąg do powierzchni.
- Obróć powierzchnię i zastosuj odcięcie funkcją logiczną, aby uzyskać rowek w zewnętrznym pierścieniu.
- Narysuj podstawowy kształt wewnętrznego pierścienia składający się z czterech prostych linii i czterech łuków.
- Połącz linie i łuki, a następnie zaktualizuj je do jednej polilinii.
- Zaktualizuj ciąg do powierzchni.
- Obróć powierzchnię, aby uzyskać kształt.
- Narysuj koło.
- Zaktualizuj koło do ciągu.
- Zaktualizuj ciąg do powierzchni.
- Obróć powierzchnię i zastosuj odcięcie funkcją logiczną, aby uzyskać rowek wewnętrznym pierścieniu.
- Wstaw kule tak samo jak w części 1 _(ze względu na efektywność)_
- Ustaw widok na aksometryczny.
- Powiększ, aby wszystko zmieściło się na ekranie.

### Tworzenie rowka

Narysowanie łuku wymaga podania trzech punktów lub kąta początkowego i końcowego.  
W narzędziu do rysowania będziemy korzystać z wiązań, aby zdefiniować punkt początkowy i punkt końcowy łuku.  
Ponieważ nie możemy tego zrobić w skrypcie, narysujemy zaokrąglony prostokąt i dokonamy jego obrotu, aby uzyskać podstawowy "kształt pierścienia".  
Następnie narysujemy okrąg i dokonamy jego obrotu, aby uzyskać geometrię rowka.  
Następnie zastosujemy odcięcie operacją logiczną do dwóch obrotowych kształtów i uzyskamy kompletny kształt wewnętrznego / zewnętrznego pierścienia.

### Wstawianie kul

Prawidłowy sposób wstawiania kul przy użyciu narzędzia do rysowania byłby następujący:

- Narysuj łuk _(półkole)_ z ośrodkiem identycznym z początkiem układu współrzędnych i narysuj linię zamykającą "otwartą" stronę łuku.
- Przekształć oba elementy w polilinię, podnieś do postaci twarzy, obróć wokół osi z, aby uzyskać kształt kuli.
- Użyj polecenia "przesuń", aby przenieść kulę w odpowiednie miejsce.
- Powtórz powyższe kroki dziewięć razy, wykorzystując funkcję matematyczną do tworzenia i pozycjonowania kolejnych kul.
- Tę operację powtarzania można zaprogramować za pomocą pętli.

Jednakże ten sposób nie jest efektywny, wstawianie podstawowych kształtów i ich pozycjonowanie jest łatwiejsze i szybsze w tym przypadku.  
Więc używamy tego samego sposobu co w "[Skrypty części: Łożysko kulkowe - część 1](/Scripted_Parts:_Ball_Bearing_-_Part_1/pl "Scripted Parts: Ball Bearing - Part 1/pl")".

### Odnośniki internetowe

[Obiekty tworzone skryptami](/Scripted_objects/pl "Scripted objects/pl"): Strona Wiki wyjaśniająca podstawy tworzenia skryptów  
[Skrypty danych topologicznych](/Topological_data_scripting/pl "Topological data scripting/pl"): Poradnik odsłaniający podstawy tworzenia skryptów  
[Skrypty części: Łożysko kulkowe - część 1](/Scripted_Parts:_Ball_Bearing_-_Part_1/pl "Scripted Parts: Ball Bearing - Part 1/pl"): Wykonanie za pomocą szkiców  
[Łożyska ze szkiców tworzonych skryptami](http://linuxforanengineer.blogspot.de/2013/12/bearings-from-scripted-sketches.html): Baza dla tego poradnika, podziękowania dla JMG ...

### Kod

```
## Ball-bearing script
## 11.08.2016 by r-frank (BPLRFE/LearnFreeCAD on Youtube)
## based on ball bearing script by JMG
## (http://linuxforanengineer.blogspot.de/2013/12/bearings-from-scripted-sketches.html)
#
#needed for doing boolean operations
import Part
#needed for calculating the positions of the balls
import math
#needed for translation and rotation of objects
from FreeCAD import Base
#
#VALUES#
#(radius of shaft/inner radius of inner ring)
R1=15.0
#(outer radius of inner ring)
R2=25.0
#(inner radius of outer ring)
R3=30.0
#(outer radius of outer ring)
R4=40.0
#(thickness of bearing)
TH=15.0
#(number of balls)
NBall=10
#(radius of ball)
RBall=5.0
#(rounding radius for fillets)
RR=1
#first coordinate of center of ball
CBall=((R3-R2)/2)+R2
#second coordinate of center of ball
PBall=TH/2
#
#Create new document
App.newDocument("Unnamed")
App.setActiveDocument("Unnamed")
#
#Lines for basic shape of outer ring
L1o=Part.makeLine((R4,0,TH-RR),(R4,0,RR))
L2o=Part.makeLine((R4-RR,0,0),(R3+RR,0,0))
L3o=Part.makeLine((R3,0,RR),(R3,0,TH-RR))
L4o=Part.makeLine((R3+RR,0,TH),(R4-RR,0,TH))
#Corner rounding for basic shape of outer ring
A1o=Part.makeCircle(RR,Base.Vector(R4-RR,0,RR),Base.Vector(0,1,0),0,90)
A2o=Part.makeCircle(RR,Base.Vector(R3+RR,0,RR),Base.Vector(0,1,0),90,180)
A3o=Part.makeCircle(RR,Base.Vector(R3+RR,0,TH-RR),Base.Vector(0,1,0),180,270)
A4o=Part.makeCircle(RR,Base.Vector(R4-RR,0,TH-RR),Base.Vector(0,1,0),270,360)
#Connect Lines and arcs to make wire and upgrade to face, revolve and apply cut to obtain groove
OR=Part.Wire([L1o,A1o,L2o,A2o,L3o,A3o,L4o,A4o])
OR=Part.Face(OR)
OR=OR.revolve(Base.Vector(0,0,1),Base.Vector(0,0,360))
C1=Part.makeCircle(RBall,Base.Vector(R2+(R3-R2)/2,0,TH/2),Base.Vector(0,1,0),0,360)
GRo=Part.Wire([C1])
GRo=Part.Face(GRo)
GRo=GRo.revolve(Base.Vector(0,0,1),Base.Vector(0,0,360))
OR=OR.cut(GRo)
Part.show(OR)
#
#Lines for basic shape of inner ring
L1i=Part.makeLine((R2,0,TH-RR),(R2,0,RR))
L2i=Part.makeLine((R2-RR,0,0),(R1+RR,0,0))
L3i=Part.makeLine((R1,0,RR),(R1,0,TH-RR))
L4i=Part.makeLine((R1+RR,0,TH),(R2-RR,0,TH))
#Corner rounding for basic shape of inner ring
A1i=Part.makeCircle(RR,Base.Vector(R2-RR,0,RR),Base.Vector(0,1,0),0,90)
A2i=Part.makeCircle(RR,Base.Vector(R1+RR,0,RR),Base.Vector(0,1,0),90,180)
A3i=Part.makeCircle(RR,Base.Vector(R1+RR,0,TH-RR),Base.Vector(0,1,0),180,270)
A4i=Part.makeCircle(RR,Base.Vector(R2-RR,0,TH-RR),Base.Vector(0,1,0),270,360)
#Connect Lines and arcs to make wire and upgrade to face, revolve and apply cut to obtain groove
IR=Part.Wire([L1i,A1i,L2i,A2i,L3i,A3i,L4i,A4i])
IR=Part.Face(IR)
IR=IR.revolve(Base.Vector(0,0,1),Base.Vector(0,0,360))
C2=Part.makeCircle(RBall,Base.Vector(R2+(R3-R2)/2,0,TH/2),Base.Vector(0,1,0),0,360)
GRi=Part.Wire([C2])
GRi=Part.Face(GRi)
GRi=GRi.revolve(Base.Vector(0,0,1),Base.Vector(0,0,360))
IR=IR.cut(GRi)
Part.show(IR)
#
#Balls#
for i in range(NBall):
  Ball=Part.makeSphere(RBall)
  Alpha=(i*2*math.pi)/NBall
  BV=(CBall*math.cos(Alpha),CBall*math.sin(Alpha),TH/2)
  Ball.translate(BV)
  Part.show(Ball)
#
#Make it pretty#
App.ActiveDocument.recompute()
Gui.ActiveDocument.ActiveView.viewAxometric()
Gui.SendMsgToActiveView("ViewFit")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Scripted_Parts:_Ball_Bearing_-_Part_2/pl&oldid=1384977>"
