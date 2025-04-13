---
title: Skrypty Kształt topologiczny
---

:::caution
(listopad 2018 r.)Informacje te mogą być niekompletne i nieaktualne. Najnowsze API - patrzdokumentacja API generowana automatycznie.
:::

Kształt Topologiczny jest obiektem macierzystym modułu Część. Wszystkie typy kształtów _(polilinia, ściana, bryła, itd...)_ modułu Część są Kształtami Topologicznymi i posiadają następujące atrybuty i metody. Przykład:

```
import Part
sh = Part.makeBox(10,10,10)
print sh.Faces
for f in sh.Faces:
   print f.Edges

```

![](/images/Property.png) **Area**

**Returns**: Całkowite pole powierzchni ścian figury.

![](/images/Property.png) **BoundBox**

**Returns**: Ramka otaczająca obiekt

![](/images/Property.png) **CenterOfMass**

**Returns**: Środek masy aktualnego układu. Jeżeli pole grawitacyjne jest jednorodne, jest to środek ciężkości. Współrzędne zwracane dla środka masy są wyrażone w bezwzględnym kartezjańskim układzie współrzędnych.

![](/images/Property.png) **CompSolids**

**Returns**: Wylicza kolejne figury w tym kształcie.

![](/images/Property.png) **Compounds**

**Returns**: Wylicza kolejne złożenia w tym kształcie.

![](/images/Property.png) **Edges**

**Returns**: Wylicza kolejne krawędzie w tym kształcie.

![](/images/Property.png) **Faces**

**Returns**: Wylicza kolejne ściany w tym kształcie.

![](/images/Property.png) **Length**

**Returns**: Całkowita długość krawędzi kształtu.

![](/images/Property.png) **Matrix**

**Returns**: Bieżąca transformacja obiektu jako macierz

![](/images/Property.png) **Orientation**

**Returns**: orientacja kształtu.

![](/images/Property.png) **Placement**

**Returns**: Bieżąca transformacja obiektu jako umiejscowienie

![](/images/Property.png) **ShapeType**

**Returns**: Typ kształtu.

![](/images/Property.png) **Shells**

**Returns**: Wyświetla listę następnych kształtów w tym kształcie.

![](/images/Property.png) **Solids**

**Returns**: Lista następnych kształtów w tym kształcie.

![](/images/Property.png) **Vertexes**

**Returns**: Lista wierzchołków w tym kształcie.

![](/images/Property.png) **Volume**

**Returns**: Całkowita objętość brył tego kształtu.

![](/images/Property.png) **Wires**

**Returns**: Lista polilinii w tym kształcie.

![](/images/Method.png) **approximate(\*\***)\*\*

**Description**: Dokonuje aproksymacji krzywej złożonej z tej polilinii

**Returns**: obiekt BSplineCurve

![](/images/Method.png) **check(\*\***)\*\*

**Description**: Sprawdza kształt i zgłasza błędy w strukturze kształtu. Jest to bardziej szczegółowe sprawdzenie jak w isValid().

**Returns**:

![](/images/Method.png) **common(\***TopoShape**\*)**

**Description**: Przecięcie tego i danego kształtu topologicznego.

**Returns**: kształt topologiczny

![](/images/Method.png) **complement(\*\***)\*\*

**Description**: Oblicza dopełnienie orientacji tego kształtu, tzn. odwraca wewnętrzny/zewnętrzny status granic tego kształtu..

**Returns**: kształt topologiczny

![](/images/Method.png) **copy(\*\***)\*\*

**Description**: Creates a copy of this shape

**Returns**: kształt topologiczny

![](/images/Method.png) **cut(\***TopoShape**\*)**

**Description**: Różnica pomiędzy obecnym a danym kształtem topologicznym.

**Returns**: kształt topologiczny

![](/images/Method.png) **distToShape(** _TopoShape_ **)**

**Description**: Oblicza minimalną odległość pomiędzy obecnym i podanym kształtem topologicznym..

**Returns**: float<minimalny dystans>,list<najbliższe punkty>,list<najbliższe kształty podrzędne i parametry>

![](/images/Method.png) **exportBrep(** _string_ **)**

**Description**: Eksportuje zawartość obecnego kształtu do pliku BREP. BREP jest natywnym formatem CasCade.

**Returns**:

![](/images/Method.png) **exportIges(** _string_ **)**

**Description**: Eksportuje zawartość kształtu do pliku w formacie IGES.

**Returns**:

![](/images/Method.png) **exportStep(** _string_ **)**

**Description**: Eksportuje zawartość kształtu do pliku w formacie STEP.

**Returns**:

![](/images/Method.png) **exportStl(** _string_ **)**

**Description**: Eksportuje zawartość kształtu do pliku w formacie STL siatka.

**Returns**:

![](/images/Method.png) **extrude(\***Vector**\*)**

**Description**: Wyciąga kształt wzdłuż kierunku.

**Returns**: kształt topologiczny

![](/images/Method.png) **fuse(\***TopoShape**\*)**

**Description**: Połączenie obecnego i danego kształtu topologicznego.

**Returns**: kształt topologiczny

![](/images/Method.png) **getAllDerivedFrom(\*\***)\*\*

**Description**: Zwraca wszystkie pochodne tego typu obiektu

**Returns**: lista

![](/images/Method.png) **hashCode(\*\***)\*\*

**Description**: Wartość ta jest obliczana na podstawie wartości bazowego odniesienia kształtu i lokalizacji. Orientacja nie jest brana pod uwagę..

**Returns**: string

![](/images/Method.png) **isClosed(\*\***)\*\*

**Description**: Sprawdza czy kształt ma formę zamkniętą.

**Returns**: boolean

![](/images/Method.png) **isDerivedFrom(\***string**\*)**

**Description**: Zwraca wartość `Prawda`, jeśli podany typ jest ojcem.

**Returns**: boolean

![](/images/Method.png) **isEqual(\***TopoShape**\*)**

**Description**: Zwraca wartość `Prawda`, jeśli oba kształty korzystają z tego samego kształtu topologicznego, mają to samo położenie i mają tę samą orientację.

**Returns**: boolean

![](/images/Method.png) **isInside(\***Vector,float,Boolean**\*)**

**Description**: Sprawdza, czy punkt znajduje się wewnątrz bryły o określonej tolerancji. Jeśli trzeci parametr jest `Prawda`, punkt na powierzchni jest uważany za wewnętrzny.

**Returns**: boolean

![](/images/Method.png) **isNull(\*\***)\*\*

**Description**: Sprawdza, czy kształt jest istniejący.

**Returns**: boolean

![](/images/Method.png) **isPartner(\***TopoShape**\*)**

**Description**: Zwraca wartość `Prawda`, jeśli oba kształty mają ten sam kształt topologiczny, ale mogą mieć inne położenie i orientację.

**Returns**: boolean

![](/images/Method.png) **isSame(\***TopoShape**\*)**

**Description**: Sprawdza czy oba kształty mają tę samą geometrię, zwraca wartość true jeśli oba kształty mają ten sam kształt topologiczny, mają to samo położenie, ale mogą mieć różną orientację.

**Returns**: boolean

![](/images/Method.png) **isValid(\*\***)\*\*

**Description**: Sprawdza, czy kształt jest poprawny, tzn. czy istnieje, czy nie jest pusty lub uszkodzony.

**Returns**: boolean

![](/images/Method.png) **makeFillet(\***float,TopoShape**\*)**

**Description**: Zwraca nowy obiekt oparty na kształcie topologicznym, ale z zaokrągleniem o promieniu "float" zastosowanym do każdej krawędzi.

**Returns**: kształt topologiczny

![](/images/Method.png) **makeHomogenousWires(\***wire**\*)**

**Description**: Sprawia, że obecna i dany polilinia są jednorodne i mają taką samą liczbę krawędzi

**Returns**: polilinia

![](/images/Method.png) **makeOffset(\***float**\*)**

**Description**: Przesuwa kształt o zadaną wartość.

**Returns**: kształt topologiczny

![](/images/Method.png) **makePipe(\***wire**\*)**

**Description**: Wykonuje rurę przez przeciąganie po polilinii.

**Returns**: kształt topologiczny

![](/images/Method.png) **makePipeShell(\***wire**\*)**

**Description**: Tworzy przeciągnięcie zdefiniowane przez profile wzdłuż polilinii.

**Returns**: kształt topologiczny

![](/images/Method.png) **makeShapeFromMesh(\***mesh**\*)**

**Description**: Tworzy kształt złożony z danych siatki. Uwaga: Powinno być używane tylko dla raczej małych oczek.

**Returns**: kształt topologiczny

![](/images/Method.png) **makeThickness(\***list,float,float**\*)**

**Description**: Bryłę wydrążoną buduje się z bryły wejściowej i zbioru ścian tej bryły, które mają zostać usunięte. Pozostałe ściany bryły stają się ścianami wydrążonej bryły, a ich grubość jest określana w czasie konstrukcji. Przekazywane argumenty to lista ścian, które mają zostać pominięte, grubość ścian oraz wartość tolerancji.

**Returns**: kształt topologiczny

![](/images/Method.png) **nullify(\*\***)\*\*

**Description**: Niszczy referencję do kształtu przechowywaną w tym kształcie. W wyniku tego kształt ten staje się pusty.

**Returns**:

![](/images/Method.png) **project(\***TopoShape**\*)**

**Description**: Rzutuj kształt na ten kształt.

**Returns**: kształt topologiczny

![](/images/Method.png) **read(\***string**\*)**

**Description**: Wczytuje plik typu IGES, STEP lub BREP.

**Returns**: kształt topologiczny

![](/images/Method.png) **reverse(\*\***)\*\*

**Description**: Odwraca orientację tego kształtu.

**Returns**:

![](/images/Method.png) **revolve(\***Vector, Vector, float**\*)**

**Description**: Obraca kształt wokół osi o zadany stopień. ex: Part.revolve(Vector(0,0,0),Vector(0,0,1),360) obraca kształt wokół osi Z o 360 stopni.

**Returns**: kształt topologiczny

![](/images/Method.png) **rotate(\***Vector<position>, Vector<direction>, float<angle>**\*)**

**Description**: Obraca ten kształt o wartość kąta w stopniach wokół osi określonej przez położenie i kierunek. np: Shp.rotate(Vector(0,0,0),Vector(0,0,1),180) obróć kształt wokół osi Z o 180 stopni.

**Returns**:

![](/images/Method.png) **scale(\***float<factor>, [Vector<centre>]**\*)**

**Description**: Równomiernie skaluje ten kształt o współczynnik. Opcjonalnie określ środek transformacji skalującej.

**Returns**:

![](/images/Method.png) **section(\***TopoShape**\*)**

**Description**: Przekrój tego z danym kształtem topologicznym.

**Returns**: kształt topologiczny

![](/images/Method.png) **sewShape(\*\***)\*\*

**Description**: Zszywa kształt, jeśli występuje szczelina.

**Returns**:

![](/images/Method.png) **tessellate(\***float**\*)**

**Description**: Tesseluje kształt i zwraca listę wierzchołków i indeksów ścian. Podana wartość "float" jest tolerancją.

**Returns**: lista

![](/images/Method.png) **toNurbs(\*\***)\*\*

**Description**: Konwersja kompletnej geometrii kształtu na geometrię NURBS. Na przykład, wszystkie krzywe podpierające krawędzie kształtu bazowego są konwertowane na krzywe złożone, a wszystkie powierzchnie podpierające jego ściany są konwertowane na powierzchnie krzywych złożonych.

**Returns**: krzywa NURBS

![](/images/Method.png) **transformGeometry(\***matrix**\*)**

**Description**: Stosuje transformację geometryczną na kopii kształtu. Zastosowana transformacja jest zdefiniowana jako macierz 4x4. Podstawowa geometria poniższych kształtów może zmienić się w krzywą, która obsługuje krawędź kształtu, lub powierzchnię, która obsługuje powierzchnię kształtu. Na przykład, okrąg może zostać przekształcony w elipsę podczas stosowania transformacji powinowactwa. Może się również zdarzyć, że okrąg zostanie wtedy przedstawiony jako krzywa złożona. Przekształcenie jest stosowane do wszystkich krzywych, które obsługują krawędzie kształtu oraz do wszystkich powierzchni, które obsługują ściany kształtu. Uwaga: Jeżeli chcesz przekształcić kształt bez zmiany jego geometrii, użyj metod translate lub rotate.

**Returns**: kształt topologiczny

![](/images/Method.png) **transformShape(\***matrix**\*)**

**Description**: Stosuje transformację na kształcie bez zmiany geometrii bazowej.

**Returns**:

![](/images/Method.png) **translate(\***Vector**\*)**

**Description**: Stosuje przesunięcie do aktualnego położenia tego kształtu.

**Returns**:

![](/images/Method.png) **writeInventor(\*\***)\*\*

**Description**: Zapisuje siatkę w formacie OpenInventor do łańcucha znaków.

**Returns**: string

Niektóre atrybuty i metody mają zastosowanie tylko do określonych Kształtów Topologicznych. Te elementy mają zastosowanie do krawędzi _(TopoShapeEdge)_.

![](/images/Property.png) **FirstParameter**

**Returns**: Wartość parametru na jednym końcu Krawędzi. Niekoniecznie na Vertex[0]. [Patrz równania parametryczne](http://en.wikipedia.org/wiki/Parametric_equations)

![](/images/Property.png) **LastParameter**

**Returns**: Wartość parametru na drugin końcu Krawędzi. Niekoniecznie na Vertex[1].

![](/images/Method.png) **getParameterByLength(\***Float**\*)**

**Description**: Mapuje przedział [0,Długość] na przedział [FirstParameter,LastParameter]

**Returns**: Float

![](/images/Method.png) **valueAt(\***Float**\*)**

**Description**: Zwraca wektor 3D odpowiadający parametrowi value.

**Returns**: Vector

![](/images/Method.png) **parameterAt(\***Vertex,[Face]**\*)**

**Description**: Zwraca wartość parametru odpowiadającą wierzchołkowi _(3D point)_.

**Returns**: Float

![](/images/Method.png) **tangentAt(\***Float**\*)**

**Description**: Zwraca wektor kierunku stycznej do krawędzi przy wartości parametru _(jeśli istnieje)_.

**Returns**: Vector

![](/images/Method.png) **normalAt(\***Float**\*)**

**Description**: Zwraca wektor kierunku normalnej do krawędzi na wartość parametru _(jeśli istnieje jednoznacznie)_.

**Returns**: Vector

![](/images/Method.png) **curvatureAt(\***Float**\*)**

**Description**: Zwraca krzywiznę krawędzi przy parametrze value.

**Returns**: Float

![](/images/Method.png) **centerOfCurvatureAt(\***Float**\*)**

**Description**: Zwraca środek (punkt 3D) okręgu oscylującego przy parametrze value.

**Returns**: Vector

Retrieved from "<http://wiki.freecad.org/index.php?title=TopoShape_API/pl&oldid=1055826>"
