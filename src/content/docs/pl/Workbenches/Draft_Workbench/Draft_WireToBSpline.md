---
title: Rysunek Roboczy Polilinia na krzywą złożoną
---
|  |
| --- |
| Rysunek Roboczy: Polilinia na krzywą złożoną |
| Lokalizacja w menu |
| Modyfikacja → Polilinia na krzywą złożoną |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Polilinia](/Draft_Wire/pl "Draft Wire/pl"), [Krzywa złożona](/Draft_BSpline/pl "Draft BSpline/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_WireToBSpline.svg) **Polilinia na krzywą złożoną** konwertuje [polilinię](/Draft_Wire/pl "Draft Wire/pl") na [krzywą złożoną](/Draft_BSpline/pl "Draft BSpline/pl") i odwrotnie.

![](/images/Draft_Wire2BSpline_example.jpg)

Konwersja polinii pomocniczej w linię złożoną, a zamkniętej linii złożonej w zamkniętą polinię.

## Użycie

1. Wybierz narzędzie [Polilinia](/Draft_Wire/pl "Draft Wire/pl") lub [Krzywa złożona](/Draft_BSpline/pl "Draft BSpline/pl").
2. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Draft_WireToBSpline.svg) **Polilinia na krzywą złożoną**.
   * Wybierz z menu opcję **Modyfikacja → ![](/images/Draft_WireToBSpline.svg) Polilinia na krzywą złożoną**.
3. Tworzony jest nowy obiekt.

## Uwagi

* Polecenie może spowodować powstanie zamkniętej, samoprzecinającej się [polilinii](/Draft_Wire/pl "Draft Wire/pl") lub [krzywej złożonej](/Draft_BSpline/pl "Draft BSpline/pl") ze ścianą. Taki obiekt nie będzie wyświetlany poprawnie w [widoku 3D](/3D_view/pl "3D view/pl"). Jego właściwość DANE**Utwórz ścianę** lub DANE**Zamknięta** musi być ustawiona na wartość `FAŁSZ`.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby przekonwertować polilinię na krzywą złożoną lub odwrotnie, należy przekazać właściwość `Punkty` obiektu źródłowego do metody `make_bspline` lub odpowiednio metody `make_wire` modułu Rysunek Roboczy.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(1000, 1000, 0)
p2 = App.Vector(2000, 1000, 0)
p3 = App.Vector(2500, -1000, 0)
p4 = App.Vector(3500, -500, 0)

base_wire = Draft.make_wire([p1, p2, p3, p4])
base_spline = Draft.make_bspline([-p1, -1.3*p2, -1.2*p3, -2.1*p4])

points1 = base_wire.Points
spline_from_wire = Draft.make_bspline(points1)

points2 = base_spline.Points
wire_from_spline = Draft.make_wire(points2)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_WireToBSpline/pl&oldid=1462131>"