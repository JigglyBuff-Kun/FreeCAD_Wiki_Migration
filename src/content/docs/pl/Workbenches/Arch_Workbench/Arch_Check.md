---
title: Architektura Sprawdź
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: Sprawdź |
| Lokalizacja w menu |
| Narzędzia → Sprawdź |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Zamknij otwory](/Arch_CloseHoles/pl "Arch CloseHoles/pl") |
|  |

## Opis

Narzędzie to sprawdza bieżący dokument lub wybrane obiekty pod kątem braku brył typu [Część](/Part_Workbench/pl "Part Workbench/pl") lub [BIM](/BIM_Workbench/pl "BIM Workbench/pl"), co może powodować problemy, ponieważ większość operacji środowiska pracy BIM wymaga obiektów bryłowych.

## Użycie

1. Wybierz z manu opcję ![](/images/Arch_Check.svg) **Sprawdź** lub **Narzędzia → ![](/images/Arch_Check.svg) Sprawdź**.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Kształt z siatki** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
list_bad = check(objectslist, includehidden=False)

```

* Sprawdza, czy podane obiekty w `objectslist` zawierają tylko bryły.
* Jeśli `includehidden` ma wartość `True`, uwzględni wszystkie ukryte obiekty, w przeciwnym razie pominie je w wyszukiwaniu.
* Zwraca `list_bad`, listę obiektów, które nie są pochodnymi `Part::Feature` lub komponentów, które nie są zamknięte, nieważne, nie zawierają brył lub zawierają ściany, które nie są częścią żadnej bryły. Służy do wykrywania polilinii i profili środowiska pracy [BIM](/BIM_Workbench/pl "BIM Workbench/pl") lub [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), które nie są bryłami.
  + Każdy element w `list_bad` jest kolejną listą `[object, message]`, gdzie `object` jest wykrytą nie-bryłą, a `message` wskazuje powód, dla którego został on włączony do tej listy.

Przykład:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Wall2 = Arch.makeWall(None, length=2000, width=200, height=1000)
FreeCAD.ActiveDocument.recompute()

Circle = Draft.makeCircle(450)
Wire = Draft.makeWire([FreeCAD.Vector(1000, 0, 0), FreeCAD.Vector(1500, 1000, 0), FreeCAD.Vector(2500, -1000, 0)])

list_bad = Arch.check([Wall1, Wall2, Circle, Wire], includehidden=True)
print(list_bad)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Check/pl&oldid=1462586>"