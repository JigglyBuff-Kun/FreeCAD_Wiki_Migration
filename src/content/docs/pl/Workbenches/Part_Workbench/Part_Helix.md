---
title: Część Helisa
---
|  |
| --- |
| Część: Helisa |
| Lokalizacja w menu |
| Część → Utwórz geometrie pierwotne ... → Helisa |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl"), [OpenSCAD](/OpenSCAD_Workbench/pl "OpenSCAD Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Utwórz geometrie pierwotne](/Part_Primitives/pl "Part Primitives/pl") |
|  |

## Opis

![](/images/Part_Helix.svg) **Helisa** środowiska praczy Część to parametryczna bryła, którą można utworzyć za pomocą polecenia ![](/images/Part_Primitives.svg) [Utwórz geometrie pierwotne ...](/Part_Primitives/pl "Part Primitives/pl"). W układzie współrzędnych zdefiniowanym przez właściwość DANE**Umiejscowienie**, oś helisy pokrywa się z osią Z, a jej dolny punkt, punkt początkowy, leży na osi X.

![](/images/Part_Helix_Example.png)

## Użycie

Zobacz stronę [Geometrie pierwotne](/Part_Primitives/pl#Użycie "Part Primitives/pl").

## Przykład

![](/images/Part_Helix_Scripting_Example.png)

Helisa środowiska pracy Część na przykładzie skryptu

Poniżej pokazano obiekt Halisy utworzony za pomocą [przykładowego skryptu](#Tworzenie_skryptów).

## Uwagi

* Helisa środowiska Część może być używana do tworzenia gwintów śrubowych. Zobacz stronę [Tworzenie gwintów](/Thread_for_Screw_Tutorial/pl "Thread for Screw Tutorial/pl").

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Helisa wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Układ współrzędnych

* DANE**Koordynacja Lokalna** (`Enumeration`): [skrętność](https://en.wikipedia.org/wiki/Screw_thread), czyli kierunek spirali: `Prawoskrętny` lub `Lewoskrętny`. Domyślną wartością jest `Prawoskrętny`, co oznacza, że spirala obraca się w kierunku przeciwnym do ruchu wskazówek zegara.

Helisa

* DANE**Skok** (`Length`): Odległość między dwoma kolejnymi zwojami spirali mierzona wzdłuż jej osi Z. Domyślnie `1mm`.
* DANE**Wysokość** (`Length`): Wysokość spirali. Domyślnie `2mm`.
* DANE**Promień** (`Length`): Promień początkowy helisy. Spirala ma stały promień, jeśli DANE**Kąt** ma wartość `0°`.
* DANE**Długość segmentu** (`QuantityConstraint`): Liczba zwojów na każdy podział helisy. Domyślnie `1`, co oznacza, że każdy pełny obrót helisy jest oddzielnym segmentem. Użyj wartości `0`, aby pominąć podział.
* DANE**Kąt** (`Angle`): Kąt określający zewnętrzny kształt helisy. Prawidłowy zakres: `-90° < wartość < 90°`. Wartością domyślną jest `0°`. Jeśli `0°`, helisa jest cylindryczna, w przeciwnym razie jest stożkowa.

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Helisa środowiska pracy Część jest tworzony za pomocą metody `addObject()`.

```
helix = FreeCAD.ActiveDocument.addObject("Part::Helix", "myHelix")

```

* Gdzie parametr `"myHelix"` jest etykietą dla obiektu.
* Funkcja zwraca nowo utworzony obiekt.

Przykład:

```
import FreeCAD as App

doc = App.activeDocument()

helix = doc.addObject("Part::Helix", "myHelix")
helix.Pitch = 2
helix.Height = 3
helix.Radius = 4
helix.SegmentLength = 21
helix.Angle = 45
helix.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(75, 60, 30))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Helix/pl&oldid=1302466>"