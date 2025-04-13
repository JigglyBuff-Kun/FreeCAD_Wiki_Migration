---
title: Powierzchnia 3D Wypełnianie krzywych granicznych
---
|  |
| --- |
| Powierzchnia 3D: Wypełnianie krzywych granicznych |
| Lokalizacja w menu |
| Surface → Fill boundary curves |
| Środowisko pracy |
| [Powierzchnia 3D](/Surface_Workbench/pl "Surface Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie ![](/images/Surface_GeomFillSurface.svg) **Wypełnianie krzywych granicznych** tworzy parametryczną powierzchnię z dwóch, trzech lub czterech krawędzi granicznych, próbując utworzyć płynne przejście między nimi.

![](/images/Surface_GeomFillSurface_4_edges.png) ![](/images/Surface_GeomFillSurface_4_edges_example.png)

![](/images/Surface_GeomFillSurface_3_edges.png) ![](/images/Surface_GeomFillSurface_3_edges_example.png)

![](/images/Surface_GeomFillSurface_2_edges.png) ![](/images/Surface_GeomFillSurface_2_edges_example.png)

Po lewej: krawędzie używane do generowania powierzchni za pomocą narzędzia **Wypełnianie krzywych granicznych**, cztery połączone krawędzie, trzy połączone krawędzie i dwie odłączone krawędzie. Po prawej: powierzchnia wynikowa z użycia odpowiednio czterech, trzech i dwóch krawędzi.

## Użycie

1. Naciśnij przycisk ![](/images/Surface_GeomFillSurface.svg) **Wypełnianie krzywych granicznych**.
2. Wybierz krawędzie w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Krawędzie muszą łączyć się ze sobą tak, aby tworzyły profil zamknięty.
3. Naciśnij OK.

*Uwaga:* Po utworzeniu nie jest możliwe zastosowanie dodatkowych wiązań do utworzonej powierzchni.

## Opcje

**Typ wypełnienia**: ![](/images/RadioButtonTrue.svg) Rozciągnięcie, ![](/images/RadioButtonTrue.svg) Coons, lub ![](/images/RadioButtonTrue.svg) Zakrzywienie.

## Właściwości

Obiekt **Wypełnianie krzywych granicznych** *(klasa `Surface::GeomFillSurface`)* jest pochodną podstawowej klasy [Część: Cecha](/Part_Feature/pl "Part Feature/pl") *(klasa `Part::Feature`, wraz z klasą podrzędną `Part::Spline`)*, dlatego też współdzieli wszystkie właściwości tej ostatniej.

Oprócz właściwości opisanych na stronie [Cecha części](/Part_Feature/pl "Part Feature/pl"), obiekt Rozszerz powierzchnię, posiada następujące właściwości w [edytorze właściwości](/Property_editor/pl "Property editor/pl").

### Dane

Podstawa

* DANE**Typ wypełnienia** (`Enumeration`): zastosowany algorytm wypełniania; Rozciągnięcie, styl z najbardziej płaskimi łatami. [`Coons`](https://en.wikipedia.org/wiki/Coons_patch), zaokrąglony styl o mniejszej głębokości niż Zakrzywienie. Zakrzywiony, styl z najbardziej zaokrąglonymi łatami.
* DANE**Lista granic** (`LinkSubList`): lista krawędzi, które zostaną użyte do zbudowania powierzchni.
* DANE ((ukryte))**Lista odwrócona** (`BoolList`):

### Widok

Podstawa

* WIDOK**Punkty kontrolne** (`Bool`): wartość domyślna to `FAŁSZ`, Jeśli ustawiono `PRAWDA`, wyświetlona zostanie nakładka z punktami kontrolnymi krzywej.

## Skręcenie powierzchni

Kształt powierzchni zależy od kierunku wybranych krawędzi; jeśli wybrano krawędzie, a wynikiem jest powierzchnia, która "zakręca" na siebie, jedna z krawędzi może wymagać listy wierzchołków w odwrotnej kolejności. Powierzchnia, która skręca się sama na sobie, prawdopodobnie będzie miała samoprzecięcia, a zatem będzie nieprawidłowym [kształtem](/Part_TopoShape/pl "Part TopoShape/pl"). Można to zweryfikować za pomocą narzędzia ![](/images/Part_CheckGeometry.svg) [Sprawdź geometrię](/Part_CheckGeometry/pl "Part CheckGeometry/pl") środowiska pacy Część.

Na przykład, jeśli dwie krzywe mają punkty:

```
curve1 = [a, b, c, d]
curve2 = [e, f, g]

```

oraz wynikową powierzchnię po użyciu ![](/images/Surface_GeomFillSurface.svg) Wypełnianie krzywych granicznych lub ![](/images/Surface_Sections.svg) [Przekrój powierzchni](/Surface_Sections/pl "Surface Sections/pl") jest powierzchnią skręconą, możesz utworzyć trzecią krzywą, która jest równa jednej z dwóch oryginalnych krzywych, ale z odwróconą listą punktów.

Albo

```
curve1 = [a, b, c, d]
curve3 = [g, f, e]

```

lub

```
curve3 = [d, c, b, a]
curve2 = [e, f, g]

```

powinno działać, aby wygenerować powierzchnię, która się nie skręca.

W praktyce oznacza to, że wszystkie krawędzie używane do generowania powierzchni powinny być tworzone najlepiej w tym samym kierunku zgodnym lub przeciwnym do ruchu wskazówek zegara. Przestrzeganie tej prostej zasady zwykle gwarantuje, że powierzchnia będzie podążać w najbardziej płynnym kierunku i nie będzie się skręcać.

Gdy właściwość WIDOK**Oświetlenie** powierzchni ma wartość `Jedna strona`, powierzchnia zostanie pomalowana na czarno, jeśli jej normalny kierunek wskazuje na [widok 3D](/3D_view/pl "3D view/pl") *(z dala od bieżącej widza)*, wskazując odwróconą powierzchnię w stosunku do innych kolorowych powierzchni.

![](/images/Surface_twisting_example_smooth.png) ![](/images/Surface_twisting_example_twisted.png)

Po lewej: krawędzie graniczne są zorientowane w tym samym kierunku, a zatem wygenerowana powierzchnia jest gładka. Po prawej: krawędzie graniczne mają przeciwne kierunki, a zatem wygenerowana powierzchnia skręca się na sobie, powodując samoprzecinanie.

## Tworzenie skryptów

*Zobacz również:* [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie Wypełnianie krzywych granicznych powierzchni może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") poprzez dodanie obiektu `Surface::GeomFillSurface`.

* Krawędzie, które mają być użyte do zdefiniowania powierzchni, muszą być przypisane jako [LinkSubList](/FeaturePython_Custom_Properties/pl#App::PropertyLinkSubList "FeaturePython Custom Properties/pl") do właściwości `BoundaryList` obiektu.
* Typ algorytmu musi być przypisany jako ciąg znaków do właściwości `FillType`.
* Wszystkie obiekty z krawędziami muszą zostać przeliczone, zanim będą mogły zostać użyte jako dane wejściowe dla właściwości obiektu GeomFillSurface.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

a = App.Vector(-140, -100, 0)
b = App.Vector(175, -108, 0)
c = App.Vector(200, 101, 0)
d = App.Vector(-135, 107, 70)

points1 = [a, App.Vector(-55, -91, 65), App.Vector(35, -85, -5), b]
obj1 = Draft.make_bspline(points1)

points2 = [b, App.Vector(217, -45, 55), App.Vector(217, 35, -15), c]
obj2 = Draft.make_bspline(points2)

points3 = [c, App.Vector(33, 121, 55), App.Vector(0, 91, 15), App.Vector(-80, 121, -40), d]
obj3 = Draft.make_bspline(points3)

points4 = [d, App.Vector(-140, 0, 45), a]
obj4 = Draft.make_bspline(points4)
doc.recompute()

surf = doc.addObject("Surface::GeomFillSurface", "Surface")
surf.BoundaryList = [(obj1, "Edge1"),
                     (obj2, "Edge1"),
                     (obj3, "Edge1"),
                     (obj4, "Edge1")]
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_GeomFillSurface/pl&oldid=1467975>"