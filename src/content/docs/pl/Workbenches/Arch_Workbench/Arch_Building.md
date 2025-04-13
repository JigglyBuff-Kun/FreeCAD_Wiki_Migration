---
title: Architektura Budynek
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: Budynek |
| Lokalizacja w menu |
| 3d / BIM → Budynek |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| B U |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

**Budynek** środowiska Architektura jest specjalnym typem obiektu grupy FreeCAD, szczególnie odpowiednim do reprezentowania całej jednostki budynku. Są one najczęściej używane do organizowania modelu, zawierając obiekty [kondygnacji](/Arch_Floor/pl "Arch Floor/pl").

## Użycie

1. Opcjonalnie wybierz jeden lub więcej obiektów, które mają być zawarte w nowym budynku.
2. Naciśnij przycisk ![](/images/Arch_Building.svg) **Budynek** lub naciśnij klawisze B, a następnie U.

## Opcje

* Począwszy od wersji FreeCAD 0.18, obiekt Budynku jest w rzeczywistości obiektem [Część budynku](/Arch_BuildingPart/pl "Arch BuildingPart/pl") z jego właściwością DANE**Typ IFC** ustawioną na "Building". Możesz przekonwertować dowolną Część budynku na budynek, po prostu zmieniając jej typ IFC.
* Po utworzeniu budynku można dodać do niego więcej obiektów, przeciągając je i upuszczając w widoku drzewa lub używając przycisku ![](/images/Arch_Add.svg) [Połącz obiekty](/Arch_Add/pl "Arch Add/pl").
* Możesz usunąć obiekty z budynku przeciągając i upuszczając je w widoku drzewa lub używając narzędzia ![](/images/Arch_Remove.svg) [Usuń komponent](/Arch_Remove/pl "Arch Remove/pl").

## Właściwości

* DANE**Typ Budynku**: Typ tego budynku, do wyboru z listy.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Budynek** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
Building = makeBuilding(objectslist=None, baseobj=None, name="Building")

```

* Tworzy obiekt `Building` z `objectslist`, który jest listą obiektów, lub `baseobj`, który jest obiektem `Shape`.

Przykład:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
FreeCAD.ActiveDocument.recompute()

Building = Arch.makeBuilding([Wall1, Wall2])

Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Building/pl&oldid=1474068>"