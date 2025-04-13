---
title: Rysunek Roboczy Rozdziel
---
|  |
| --- |
| Rysunek Roboczy: Rozdziel |
| Lokalizacja w menu |
| Modyfikacja → Rozdziel |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| S P |
| Wprowadzono w wersji |
| 0.18 |
| Zobacz także |
| [Połącz](/Draft_Join/pl "Draft Join/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Split.svg) **Rozdziel** środowiska pracy Rysunek Roboczy dzieli [linie](/Draft_Line/pl "Draft Line/pl") lub [polilinie](/Draft_Wire/pl "Draft Wire/pl") w określonym punkcie lub krawędzi. Polecenie to jest odpowiednikiem polecenia [Połącz](/Draft_Join/pl "Draft Join/pl").

## Użycie

1. Istnieje kilka sposobów wywołania polecenia:
   * Naciśnij przycisk ![](/images/Draft_Split.svg) **Rozdziel**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Modyfikacja → ![](/images/Draft_Split.svg) Rozdziel**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Modyfikacja → ![](/images/Draft_Split.svg) Rozdziel** z menu.
   * Użyj skrótu klawiaturowego: S, a następnie P.
2. Przesuń kursor nad właściwą krawędź [linii](/Draft_Line/pl "Draft Line/pl") lub [polilinii](/Draft_Wire/pl "Draft Wire/pl").
3. Krawędź zostanie podświetlona.
4. Wykonaj jedną z następujących czynności:
   * Jeśli krzywa jest zamknięta:
     + Wybierz dowolny punkt na krawędzi.
     + Krawędź zostanie odłączona od linii i stanie się oddzielną linią.
   * Jeśli krzywa jest otwarta:
     + Wybierz odpowiedni punkt na krawędzi. Zobacz [Uwagi](#Uwagi).
     + Lina zostanie podzielona w wybranym punkcie.

## Uwagi

* Jeśli otwarta polilinia zostanie podzielona, a kliknięty punkt nie leży dokładnie na wybranej krawędzi, nowy punkt nie będzie współliniowy z poprzednią krawędzią. Użyj odpowiedniej opcji [przyciągania](/Draft_Snap/pl "Draft Snap/pl"), aby temu zapobiec.
* Aby podzielić obiekty, które nie są [linią](/Draft_Line/pl "Draft Line/pl") lub [polilinią](/Draft_Wire/pl "Draft Wire/pl"), możesz spróbować użyć narzędzia [Ulepsz kształt](/Draft_Upgrade/pl "Draft Upgrade/pl") i / lub [Rozbij kształt](/Draft_Downgrade/pl "Draft Downgrade/pl") na nich jeden lub więcej razy.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby Rozdzielić polilinię, użyj metody `split` modułu Rysunek Roboczy. Metoda ta zwraca `Brak`.

```
split(wire, newPoint, edgeIndex)

```

* `wire` obiekt krzywej, który ma zostać podzielony.
* `newPoint` punkt, w którym ma nastąpić podział.
* `edgeIndex` indeks krawędzi, na której ma nastąpić podział *(z dokładnością do 1)*.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(500, 0, 0)
p3 = App.Vector(250, 0, 0)

wire = Draft.make_wire([p1, p2])

Draft.split(wire, p3, 1)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Split/pl&oldid=1473990>"