---
title: Rysunek Roboczy Połącz
---
|  |
| --- |
| Rysunek Roboczy: Połącz |
| Lokalizacja w menu |
| Modyfikacja → Połącz |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| J O |
| Wprowadzono w wersji |
| 0.18 |
| Zobacz także |
| [Rozdziel](/Draft_Split/pl "Draft Split/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Join.svg) **Połącz** środowiska pracy Rysunek Roboczy łączy [linie](/Draft_Line/pl "Draft Line/pl") i [polilinie](/Draft_Wire/pl "Draft Wire/pl") w jedną linię. Polecenie to jest odpowiednikiem polecenia [Rozdziel](/Draft_Split/pl "Draft Split/pl").

## Użycie

1. Punkty końcowe [linii](/Draft_Line/pl "Draft Line/pl") i / lub [polilinii](/Draft_Wire/pl "Draft Wire/pl"), które mają zostać połączone, muszą się dokładnie pokrywać. W razie potrzeby najpierw dostosuj położenie punktów, aby upewnić się, że tak jest.
2. Wybierz dwie lub więcej [linii](/Draft_Line/pl "Draft Line/pl") i / lub [polilinii](/Draft_Wire/pl "Draft Wire/pl").
3. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Draft_Join.svg) **Połącz**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Modyfikacja → ![](/images/Draft_Join.svg) Połącz**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Modyfikacja → ![](/images/Draft_Join.svg) Połącz** z menu.
   * Użyj skrótu klawiaturowego: J, a następnie O.

## Uwagi

* [Liniie](/Draft_Line/pl "Draft Line/pl") i [polilinie](/Draft_Wire/pl "Draft Wire/pl") mogą być również łączone za pomocą narzędzia [polilinia](/Draft_Wire/pl "Draft Wire/pl") lub [Ulepsz kształt](/Draft_Upgrade/pl "Draft Upgrade/pl").
* Aby połączyć obiekty, które nie są [liniami](/Draft_Line/pl "Draft Line/pl") lub [poliliniami](/Draft_Wire/pl "Draft Wire/pl"), możesz spróbować użyć [Ulepsz kształt](/Draft_Upgrade/pl "Draft Upgrade/pl") i/lub [Rozbij kształt](/Draft_Downgrade/pl "Draft Downgrade/pl") na nich jeden lub więcej razy.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Do Połączenia linii należy użyć metody `join_wires` *([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl"))* modułu Rysunek Roboczy. Metoda ta zastępuje przestarzałą metodę `joinWires`. Metoda ta zwraca `Brak`.

```
join_wires(wires)

```

* `wires` jest listą obiektów linii, które mają zostać połączone.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(500, 0, 0)
p3 = App.Vector(500, 500, 0)
p4 = App.Vector(0, 500, 0)

wire1 = Draft.make_wire([p1, p2])
wire2 = Draft.make_wire([p2, p3])
wire3 = Draft.make_wire([p3, p4])
wire4 = Draft.make_wire([p4, p1])

Draft.join_wires([wire1, wire3, wire2, wire4])
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Join/pl&oldid=1473984>"