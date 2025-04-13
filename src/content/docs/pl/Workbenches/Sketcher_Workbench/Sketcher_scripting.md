---
title: Skrypty Szkicownika
---
## Tworzenie obiektu Szkicu przy użyciu środowiska Python

Tworzymy obiekt Szkic w następujący sposób:

```
import FreeCAD as App
import Part
import Sketcher

doc = App.newDocument()  

sketch = doc.addObject("Sketcher::SketchObject", "Sketch")
sketch.addGeometry(Part.LineSegment(App.Vector(1.2, 1.8, 0),
                                    App.Vector(5.2, 5.3, 0)), False)
sketch.addGeometry(Part.LineSegment(App.Vector(6.5, 1.5, 0),
                                    App.Vector(10.2, 5.0, 0)), False)
sketch.addGeometry(Part.LineSegment(App.Vector(12.2, 1.0, 0),
                                    App.Vector(15.4, 5.0, 0)), False)

doc.recompute()

```

Dodaje również trzy [linie](/Topological_data_scripting/pl#Linia "Topological data scripting/pl") w nowo utworzonym Szkicu.

## Tworzenie wiązań przy użyciu środowiska Python

Wiązania geometryczne ![](/images/Sketcher_ConstrainPointOnObject.svg) ![](/images/Sketcher_ConstrainVertical.svg) ![](/images/Sketcher_ConstrainHorizontal.svg) ![](/images/Sketcher_ConstrainParallel.svg) ![](/images/Sketcher_ConstrainPerpendicular.svg) ![](/images/Sketcher_ConstrainTangent.svg) ![](/images/Sketcher_ConstrainEqual.svg) ![](/images/Sketcher_ConstrainSymmetric.svg) oraz ![](/images/Sketcher_ConstrainBlock.svg) można tworzyć z poziomu makropoleceń oraz z poziomu konsoli Python za pomocą następującego polecenia:

```
sketch.addConstraint(Sketcher.Constraint(ConstraintType, EdgeOrPartOfEdge…))

```

Wiązania wymiarowe ![](/images/Sketcher_ConstrainLock.svg) ![](/images/Sketcher_ConstrainDistanceX.svg) ![](/images/Sketcher_ConstrainDistanceY.svg) ![](/images/Sketcher_ConstrainDistance.svg) ![](/images/Sketcher_ConstrainRadius.svg) ![](/images/Sketcher_ConstrainDiameter.svg) ![](/images/Sketcher_ConstrainAngle.svg) oraz specjalne ![](/images/Sketcher_ConstrainSnellsLaw.svg) [wiązanie prawo Snell'a](/Sketcher_ConstrainSnellsLaw/pl "Sketcher ConstrainSnellsLaw/pl") można tworzyć z poziomu makropoleceń oraz konsoli Python za pomocą poniższego polecenia:

```
sketch.addConstraint(Sketcher.Constraint(DimensionalConstraintType, EdgeOrPartOfEdge…, App.Units.Quantity("float_value unit")))

```

na przykład

```
sketch.addConstraint(Sketcher.Constraint(DimensionalConstraintType, EdgeOrPartOfEdge…, App.Units.Quantity("123.0 mm")))

```

Pierwszy argument `ConstraintType` jest opisany poniżej w akapicie [Rodzaje wiązań](#Rodzaje_wiązań).

Wiązanie może przyjąć do sześciu argumentów, które są krawędziami lub wskazują, która część krawędzi jest używana przez wiązanie. Szczegóły dotyczące tego, jakie kombinacje krawędzi i ich części mogą być przekazane jako argumenty, znajdują się w dokumentacji poszczególnych wiązań.
Głównym problemem w przypadku tej funkcji jest poprawne określenie numeru linii i numeru wierzchołka linii, które chcemy przetworzyć.
Poniższe akapity opisują jak [identyfikować numerację linii](#Rozpoznawanie_numeracji_linii) oraz jak [identyfikować numerację części podrzędnych linii](#Rozpoznawanie_numeracji_części_składowych_linii).

## Rodzaje wiązań

W przypadku wiązań geometrycznych pierwszym argumentem jest jeden z poniższych. Aby uzyskać informacje na temat możliwych kombinacji argumentów dozwolonych dla każdego wiązania, zobacz odpowiednią stronę funkcji.

| Kod | Ikonka | Funkcja |
| --- | --- | --- |
| `"Coincident"` |  | [Zbieżność](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl") |
| `"PointOnObject"` |  | [Punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl") |
| `"Vertical"` |  | [Pionowo](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl") |
| `"Horizontal"` |  | [Poziomo](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl") |
| `"Parallel"` |  | [Równolegle](/Sketcher_ConstrainParallel/pl "Sketcher ConstrainParallel/pl") |
| `"Perpendicular"` |  | [Prostopadle](/Sketcher_ConstrainPerpendicular/pl "Sketcher ConstrainPerpendicular/pl") |
| `"Tangent"` |  | [Stycznie](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent") |
| `"Equal"` |  | [Zrównane](/Sketcher_ConstrainEqual/pl "Sketcher ConstrainEqual/pl") |
| `"Symmetric"` |  | [Symetrycznie](/Sketcher_ConstrainSymmetric/pl "Sketcher ConstrainSymmetric/pl") |
| `"Block"` |  | [Zablokowanie](/Sketcher_ConstrainBlock/pl "Sketcher ConstrainBlock/pl") |

W przypadku wiązań wymiarowych pierwszym argumentem jest jeden z poniższych. Zobacz odpowiednią stronę funkcji dla możliwych kombinacji argumentów dozwolonych dla każdego wiązania

| Kod | Ikonka | Funkcja |
| --- | --- | --- |
| `"DistanceX"` |  | [Długość w poziomie](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl") |
| `"DistanceY"` |  | [Długość w pionie](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl") |
| `"Distance"` |  | [Odległości](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl") |
| `"Radius"` |  | [Promień](/Sketcher_ConstrainRadius/pl "Sketcher ConstrainRadius/pl") |
| `"Diameter"` |  | [Średnica](/Sketcher_ConstrainDiameter/pl "Sketcher ConstrainDiameter/pl") |
| `"Angle"` |  | [Kąt](/Sketcher_ConstrainAngle/pl "Sketcher ConstrainAngle/pl") |
| `"AngleViaPoint"` |  | [Kąt](/Sketcher_ConstrainAngle/pl "Sketcher ConstrainAngle/pl") |

Wiązanie ![](/images/Sketcher_ConstrainSnellsLaw.svg) [prawo Snell'a](/Sketcher_ConstrainSnellsLaw/pl "Sketcher ConstrainSnellsLaw/pl") w kontekście skryptów zachowuje się jak wiązanie wymiarowe. Ponownie, zobacz odpowiednią stronę funkcji dla możliwych kombinacji argumentów dozwolonych dla każdego wiązania.

| Kod | Ikonka | Funkcja |
| --- | --- | --- |
| `"SnellsLaw"` |  | [prawo Snell'a](/Sketcher_ConstrainSnellsLaw/pl "Sketcher ConstrainSnellsLaw/pl") |

Wiązanie ![](/images/Sketcher_ConstrainLock.svg) [Lock](/Sketcher_ConstrainLock "Sketcher ConstrainLock") to polecenie GUI, które tworzy więz ![](/images/Sketcher_ConstrainDistanceX.svg). [Odległości poziomej](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX") i ![](/images/Sketcher_ConstrainDistanceY.svg), czyli nie jest wiązaniem samym w sobie.

## Rozpoznawanie numeracji linii

Narysowałem trzy linie, jak pokazano na poniższym rysunku.

![](/images/PartDesignConstraintPointOnPointScriptingFigure1.jpg)

Przesuwając kursor myszy nad linią jej numer można zobaczyć w lewym dolnym rogu okna programu FreeCAD, patrz następny rysunek.

![](/images/PartDesignConstraintPointOnPointScriptingFigure2.jpg)

Niestety numeracja wyświetlana w oknach programu FreeCAD zaczyna się od 1, podczas gdy numeracja linii użytej w skrypcie zaczyna się od 0: oznacza to, że musisz odjąć jeden za każdym razem, gdy chcesz odwołać się do linii.

Liczby dodatnie oznaczają krawędzie szkicu (linie proste, okręgi, stożki, krzywe itd.). Następujące wartości mogą być używane do oznaczania elementów, które nie są krawędziami szkicu:

* `-1` oznacza poziomą oś x
* `-2` oznacza pionową oś y
* `-n` oznacza numer elementu geometrii zewnętrznej `n-3` (np. element geometrii zewnętrznej o indeksie 0 na spłaszczonej liście `n-3`) *(np. element geometrii zewnętrznej o indeksie 0 na spłaszczonej liście `sketch.ExternalGeometry` byłby oznaczony przez -3, kolejny element na spłaszczonej liście byłby oznaczony -4 i tak dalej)*.

## Rozpoznawanie numeracji części składowych linii

Podczas określania, na którą część linii ma wpływ wiązanie, można użyć następujących wartości:

* `0`, aby wskazać, że wiązanie wpływa na całą krawędź.
* `1`, aby wskazać, że wiązanie wpływa na punkt początkowy krawędzi *(pełny okrąg nie ma punktu początkowego)*.
* `2`, aby wskazać, że wiązanie wpływa na punkt końcowy krawędzi.
* `3`, aby wskazać, że wiązanie wpływa na punkt środkowy krawędzi. Może być używane tylko dla okręgów, łuków okręgów, elips i łuków eliptycznych.
* `n` do wskazania, że wiązanie wpływa na n-ty biegun ![](/images/Sketcher_CompCreateBSpline.png) [krzywej złożonej](/Sketcher_CompCreateBSpline/pl "Sketcher CompCreateBSpline/pl").

Wierzchołki oznaczone numerami 1 i 2 są ponumerowane zgodnie z kolejnością ich utworzenia. Aby sprawdzić kolejność ich utworzenia *(jeśli masz wiele linii, nie pamiętasz, który wierzchołek utworzyłeś jako pierwszy)*, wystarczy przesunąć kursor myszki nad dwa wierzchołki jednej linii, patrz poniższy rysunek.

![](/images/PartDesignConstraintPointOnPointScriptingFigure3.jpg)

4 i 5, oznacza to, że do wierzchołka o niższym numerze *(4 w tym przykładzie)* odwołamy się za pomocą numeru 1 *(pierwszego w poleceniu skryptu)*, a do wierzchołka o wyższym numerze *(5 w tym przykładzie)* odwołamy się za pomocą numeru 2 w poleceniu skryptu.

## Przykład

Weźmy przykład z poprzednich trzech linijek. Kolejna cyfra wskazuje numerację każdej linii i ich wierzchołków zgodnie z konwencją dotyczącą skryptów.

![](/images/PartDesignConstraintPointOnPointScriptingFigure3Bis.jpg)

**niebieski tekst:** numeracja linii, **czarny tekst:** numeracja wierzchołków

Polecenie `sketch.addConstraint(Sketcher.Constraint("Coincident", 1, 2, 2, 1))` daje następujący wynik:

![](/images/PartDesignConstraintPointOnPointScriptingFigure4.jpg)

Pełny kod do narysowania trzech linii i dodania wiązania zbieżności dla dwóch punktów z dwóch linii wygląda następująco:

```
import FreeCAD as App
import Part
import Sketcher

doc = App.newDocument()  

sketch = doc.addObject("Sketcher::SketchObject", "Sketch")
sketch.addGeometry(Part.LineSegment(App.Vector(1.2, 1.8, 0),
                                    App.Vector(5.2, 5.3, 0)), False)
sketch.addGeometry(Part.LineSegment(App.Vector(6.5, 1.5, 0),
                                    App.Vector(10.2, 5.0, 0)), False)
sketch.addGeometry(Part.LineSegment(App.Vector(12.2, 1.0, 0),
                                    App.Vector(15.4, 5.0, 0)), False)
sketch.addConstraint(Sketcher.Constraint("Coincident", 1, 2, 2, 1))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_scripting/pl&oldid=1419268>"