---
title: Skrypty w środowisku Część
---
## Wprowadzenie

Główną strukturą danych używaną w środowisku Część jest typ danych [BRep](http://en.wikipedia.org/wiki/Boundary_representation) z [OpenCASCADE](/OpenCASCADE/pl "OpenCASCADE/pl"). Prawie cała zawartość i typy obiektów środowiska Część są dostępne w skryptach [Python](/Python "Python"). Obejmuje to geometryczne elementy pierwotne, takie jak Linie, Okręgi i Łuki, a także całą gamę Kształtów Topologicznych, takich jak Wierzchołki, Krawędzie, Polilinie, Ściany, Bryły i Złożenia. Dla każdego z tych obiektów istnieje kilka metod tworzenia, a dla niektórych z nich, zwłaszcza Kształtów Topologicznych, dostępne są również zaawansowane operacje, takie jak operacje logiczne połączenie / różnica / przecięcie. Zapoznaj się z zawartością środowiska Część, jak opisano na stronie [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"), aby dowiedzieć się więcej.

Najbardziej podstawowym obiektem, który można utworzyć jest [cecha](/Part_Feature/pl "Part Feature/pl"), który posiada prostą właściwość DANE**Umiejscowienie**, oraz podstawowe cechy określające jego kolor i wygląd.

Innym prostym obiektem używanym w obiektach geometrycznych 2D jest obiekt [Część na obiekt 2D](/Part_Part2DObject/pl "Part Part2DObject/pl"), który jest podstawą [szkicu](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), oraz większości [rysunków roboczych](/Draft_Workbench/pl "Draft Workbench/pl").

## Zobacz również

* [Skrypty danych topologicznych](/Topological_data_scripting/pl "Topological data scripting/pl")
* [OpenCASCADE](/OpenCASCADE/pl "OpenCASCADE/pl")

### Skrypt testowy

Przetestuj tworzenie [elementów pierwotnych](/Part_Primitives/pl "Part Primitives/pl") za pomocą skryptu.

```
import parttests.part_test_objects as pto
pto.create_test_file("example_file")

```

Skrypt ten znajduje się w katalogu instalacyjnym programu i może być badany w celu sprawdzenia, jak budowane są podstawowe elementy pierwotne.

```
$INSTALL_DIR/Mod/Part/parttests/part_test_objects.py

```

## Przykłady

### Linia

Aby utworzyć element linii, przełącz się na [konsolę Python](/Python_console/pl "Python console/pl") i wpisz:

```
import FreeCAD as App
import Part

doc = App.newDocument()

line = Part.LineSegment()
line.StartPoint = (0.0, 0.0, 0.0)
line.EndPoint = (1.0, 1.0, 1.0)
obj = doc.addObject("Part::Feature", "Line")
obj.Shape= line.toShape()

doc.recompute()

```

Prześledźmy powyższy przykład Pyton krok po kroku:

```
import FreeCAD as App
import Part
doc = App.newDocument()

```

Spowoduje to załadowanie modułów FreeCAD i Część oraz utworzenie nowego dokumentu.

```
line = Part.LineSegment()
line.StartPoint = (0.0, 0.0, 0.0)
line.EndPoint = (1.0, 1.0, 1.0)

```

Linia to w rzeczywistości odcinek, stąd punkt początkowy i końcowy.

```
obj = doc.addObject("Part::Feature", "Line")
obj.Shape= line.toShape()

```

Dodaje to typ obiektu Część do dokumentu i przypisuje reprezentację kształtu segmentu linii do właściwości `Kształt` dodanego obiektu. Ważne jest, aby zrozumieć tutaj, że użyliśmy geometrycznego elementu pierwotnego *(Part.LineSegment)*, aby utworzyć z niego **TopoShape** *(metoda toShape ())*. Do dokumentu można dodawać tylko kształty. W programie FreeCAD prymitywy geometrii są używane jako **„budowle konstrukcyjne”** dla kształtów.

```
doc.recompute()

```

Aktualizuje dokument. Także przygotowuje wizualizację nowego obiektu środowiska Część.

Zauważ, że segment linii może być utworzony poprzez określenie jego punktu początkowego i końcowego bezpośrednio w konstruktorze, na przykład `Part.LineSegment(point1,point2)`. Możemy też utworzyć linię domyślną i ustawić jej właściwości później, tak jak zrobiliśmy to tutaj.

Linię można również utworzyć za pomocą:

```
import FreeCAD as App
import Part

def my_create_line(pt1, pt2, obj_name):
    obj = App.ActiveDocument.addObject("Part::Line", obj_name)
    obj.X1 = pt1[0]
    obj.Y1 = pt1[1]
    obj.Z1 = pt1[2]

    obj.X2 = pt2[0]
    obj.Y2 = pt2[1]
    obj.Z2 = pt2[2]

    App.ActiveDocument.recompute()
    return obj

line = my_create_line((0, 0, 0), (0, 10, 0), "LineName")

```

### Okrąg

Okrąg może być stworzony w podobny sposób:

```
import FreeCAD as App
import Part

doc = App.activeDocument()

circle = Part.Circle() 
circle.Radius = 10.0  
obj = doc.addObject("Part::Feature", "Circle")
obj.Shape = circle.toShape()

doc.recompute()

```

lub z użyciem:

```
import FreeCAD as App
import Part

def my_create_circle(rad, obj_name):
    obj = App.ActiveDocument.addObject("Part::Circle", obj_name)
    obj.Radius = rad

    App.ActiveDocument.recompute()
    return obj

circle = my_create_circle(5.0, "CircleName")

```

Alternatywnie możemy utworzyć okrąg, definiując jego środek, oś i promień:

```
import FreeCAD as App
import Part

doc = App.activeDocument()

center = App.Vector(1, 2, 3)
axis = App.Vector(1, 1, 1)
radius = 10
circle = Part.Circle(center, axis, radius)
obj = doc.addObject("Part::Feature", "Circle")
obj.Shape = circle.toShape()

doc.recompute()

```

Lub definiując trzy punkty na jego obwodzie:

```
import FreeCAD as App
import Part

doc = App.activeDocument()

p1 = App.Vector(10, 0, 0)
p2 = App.Vector(0, 10, 0)
p3 = App.Vector(0, 0, 10)
circle = Part.Circle(p1, p2, p3)
obj = doc.addObject("Part::Feature", "Circle")
obj.Shape = circle.toShape()

doc.recompute()

```

Zauważ ponownie, użyliśmy okręgu *(geometria pierwotna)* do skonstruowania z niego kształtu. Oczywiście nadal możemy uzyskać dostęp do naszej geometrii konstrukcyjnej później, wykonując to zadanie:

```
shape = obj.Shape
edge = shape.Edges[0]
curve = edge.Curve

```

Tutaj bierzemy `Kształt` naszego obiektu `obj`, a następnie jego listę `Krawędzi`. W tym przypadku będzie tylko jedna krawędź, ponieważ utworzyliśmy kształt z pojedynczego okręgu. Bierzemy więc tylko pierwszy element z listy `Edges`, a następnie jego krzywą. Każda krawędź ma `Curve`, który jest geometrycznym prymitywem, na którym jest oparta.

### Łuk

Łuk może być utworzony w ten sposób:

```
import FreeCAD as App
import Part

doc = App.activeDocument()

p1 = App.Vector(10, 0, 0)
p2 = App.Vector(0, 10, 0)
p3 = App.Vector(-10, 0, 0)
arc = Part.Arc(p1, p2, p3)
obj = doc.addObject("Part::Feature", "Arc")
obj.Shape = arc.toShape()

doc.recompute()

```

Spowoduje to narysowanie półkola. Środek znajduje się w punkcie (0, 0, 0). Promień wynosi 10. P1 jest punktem początkowym na osi +X. P2 to punkt środkowy na osi +Y, a P3 to punkt końcowy na osi -X.

Możesz również utworzyć łuk na podstawie okręgu:

```
import FreeCAD as App
import Part

doc = App.activeDocument()

p1 = App.Vector(10, 0, 0)
p2 = App.Vector(0, 10, 0)
p3 = App.Vector(-10, 0, 0)
circle = Part.Circle(p1, p2, p3)
arc = Part.ArcOfCircle(circle, 0.0, 0.7854)
obj = doc.addObject("Part::Feature", "Arc")
obj.Shape = arc.toShape()

doc.recompute()

```

Wymaga on okręgu oraz kąta początkowego i końcowego w radianach.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_scripting/pl&oldid=1285811>"