---
title: Część Api
---
:::caution
(listopad 2018 r.)Informacje te mogą być niekompletne i nieaktualne. Najnowsze API - patrzdokumentacja API generowana automatycznielubdokumentacja API środowiska Część generowana automatycznie.
:::

Moduł Część jest bezpośrednim połączeniem pomiędzy programem FreeCAD a jądrem OpenCasCade. Dostarcza on głównie [kształty topologiczne](/TopoShape_API/pl "TopoShape API/pl"), który jest głównym typem obiektu używanym przez OpenCascade. Moduł Część zawiera również wiele funkcji ułatwiających tworzenie i manipulowanie kształtami topologicznymi. Przykład:

```
import Part
mycube = Part.makeBox(2,2,2)
Part.show(mycube)

```

![](/images/Method.png) **\_\_fromPythonOCC\_\_(***OCC.Object***)**

**Description**: Metoda pomocnicza konwersji kształtu pythonocc do kształtu wewnętrznego

**Returns**: A Part.Shape

![](/images/Method.png) **\_\_sortEdges\_\_(***list of edges***)**

**Description**: Metoda pomocnicza sortująca nieposortowaną listę krawędzi w taki sposób, aby po jej zakończeniu wierzchołki początkowy i końcowy dwóch kolejnych krawędzi były geometrycznie zbieżne. Zwraca ona pojedynczą listę krawędzi, a algorytm zatrzymuje się po pierwszym zestawie połączonych krawędzi, co oznacza, że lista wyjściowa może być mniejsza od wejściowej. Posortowana lista może być użyta do stworzenia linii łamanej.

**Returns**: a list of edges

![](/images/Method.png) **\_\_toPythonOCC\_\_(***Part.Shape***)**

**Description**: Metoda pomocnicza konwersji wewnętrznego kształtu do kształtu pythonocc

**Returns**: an OCC.Shape

![](/images/Method.png) **cast\_to\_shape(***Part.Shape***)**

**Description**: rzutowanie na rzeczywisty typ kształtu

**Returns**:

![](/images/Method.png) **export(***list,string***)**

**Description**: Eksportuj listę obiektów do jednego pliku.

**Returns**:

![](/images/Method.png) **getSortedClusters(***list of edges***)**

**Description**: Metoda pomocnicza do sortowania i grupowania różnych krawędzi

**Returns**:

![](/images/Method.png) **insert(***string,string***)**

**Description**: Wstaw plik *(ścieżka podana jako pierwszy argument)* do podanego dokumentu *(drugi argument)*.

**Returns**:

![](/images/Method.png) **makeBox(***length,width,height,[pnt,dir]***)**

**Description**: Tworzy pudełko znajdujące się w pnt o wymiarach *(długość,szerokość,wysokość)*. Domyślnie pnt jest wektorem (0,0,0), a dir wektorem (0,0,1).

**Returns**: the created shape

![](/images/Method.png) **makeCircle(***radius,[pnt,dir,angle1,angle2]***)**

**Description**: Tworzy okrąg o zadanym promieniu. Domyślnie pnt jest wektorem (0,0,0), dir jest wektorem (0,0,1), angle1 jest równy 0, a angle2 jest równy 360.

**Returns**: the created shape

![](/images/Method.png) **makeCompound(***list***)**

**Description**: Tworzy obiekt złożony z listy kształtów.

**Returns**: the created shape

![](/images/Method.png) **makeCone(***radius1,radius2,height,[pnt,dir,angle]***)**

**Description**: Tworzy stożek o zadanych promieniach i wysokościach. Domyślnie pnt jest wektorem (0,0,0), dir jest wektorem (0,0,1), a angle wynosi 360.

**Returns**: the created shape

![](/images/Method.png) **makeCylinder(***radius,height,[pnt,dir,angle]***)**

**Description**: Tworzy walec o zadanym promieniu i wysokości. Domyślnie pnt jest wektorem (0,0,0), dir jest wektorem (0,0,1), a angle wynosi 360.

**Returns**: the created shape

![](/images/Method.png) **makeHelix(***pitch,height,radius,[angle,lefthand,heightstyle]***)**

**Description**: Tworzy kształt spirali o zadanym skoku, wysokości i promieniu. Domyślnie jest to spirala cylindryczna prawoskrętna. Niezerowy parametr angle tworzy spiralę stożkową. Lefthand True tworzy spiralę lewoskrętną. Heightstyle ma zastosowanie tylko do helis stożkowych. Heightstyle `false` *(domyślnie)* spowoduje, że parametr height będzie interpretowany jako długość boku bazowego frustum. Heightstyle `true` spowoduje, że parametr height będzie interpretowany jako pionowa wysokość helisy. Pitch jest "metrycznym skokiem" *(wyprzedzenie/obrót)*. Dla helisy stożkowej, radius jest promieniem mniejszym.

**Returns**: the created shape

![](/images/Method.png) **makeLine(***(x1,y1,z1),(x2,y2,z2)***)**

**Description**: Makes a line of two points

**Returns**: the created shape

![](/images/Method.png) **makeLoft(***shapelist<profiles>,[boolean<solid>,boolean<ruled>]***)**

**Description**: Tworzy wyciągnięty kształt używając listy profili. Opcjonalnie uczyń wynik bryłą *(vs powierzchnia/powłoka)* lub uczyń wynik powierzchnią obrobioną.

**Returns**: the created shape

![](/images/Method.png) **makePlane(***length,width,[pnt,dir]***)**

**Description**: Tworzy płaszczyznę. Domyślnie pnt jest wektorem (0,0,0) a dir jest wektorem (0,0,1).

**Returns**: the created shape

![](/images/Method.png) **makePolygon(***list***)**

**Description**: Tworzy wielokąt z listy wektorów

**Returns**: the created shape

![](/images/Method.png) **makeRevolution(***Curve,[vmin,vmax,angle,pnt,dir]***)**

**Description**: Tworzy obrócony kształt przez obrót krzywej lub jej części wokół osi określonej przez *(pnt,dir)*. Domyślnie vmin/vmax są ustawione na granice krzywej, kąt wynosi 360, pnt jest wektorem (0,0,0), a dir jest wektorem (0,0,1).

**Returns**: the created shape

![](/images/Method.png) **makeRuledSurface(***Edge or Wire,Edge or Wire***)**

**Description**: Tworzy powierzchnię obrysowaną z dwóch krawędzi lub linii łamanych. Jeśli używane są linie łamane, to muszą one mieć taką samą liczbę krawędzi.

**Returns**: the created shape

![](/images/Method.png) **makeShell(***list***)**

**Description**: Tworzy powłokę z listy ścian. Uwaga: Wynikowa powłoka powinna być foremna. Powłoki inne niż foremne nie są dobrze obsługiwane.

**Returns**: the created shape

![](/images/Method.png) **makeSolid(***Part.Shape***)**

**Description**: Tworzy bryłę z powłok wewnątrz kształtu.

**Returns**: the created shape

![](/images/Method.png) **makeSphere(***radius,[center\_pnt, axis\_dir, V\_startAngle, V\_endAngle, U\_angle]***)**

**Description**: Tworzy sferę *(lub częściową sferę)* o zadanym promieniu. Domyślnie center\_pnt jest wektorem (0,0,0), axis\_dir jest wektorem (0,0,1), V\_startAngle jest równe 0, V\_endAngle jest równe 90, a U\_angle jest równe 360.

**Returns**: the created shape

![](/images/Method.png) **makeTorus(***radius1,radius2,[pnt,dir,angle1,angle2,angle]***)**

**Description**: Tworzy torus o zadanych promieniach i kątach. Domyślnie pnt jest wektorem (0,0,0),dir jest wektorem (0,0,1),angle1 jest 0,angle2 jest 360 i angle jest 360.

**Returns**: the created shape

![](/images/Method.png) **makeTube(***edge,float***)**

**Description**: Tworzy rurę.

**Returns**: the created shape

![](/images/Method.png) **open(***string***)**

**Description**: Tworzy nowy dokument i wczytuje plik do dokumentu.

**Returns**:

![](/images/Method.png) **read(***string***)**

**Description**: Wczytuje plik i zwraca kształt.

**Returns**: a shape

![](/images/Method.png) **show(***shape***)**

**Description**: Dodaje kształt do aktywnego dokumentu lub tworzy go, jeśli dokument nie istnieje.

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_API/pl&oldid=1312335>"