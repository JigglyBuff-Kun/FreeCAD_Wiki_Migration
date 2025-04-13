---
title: Architektura Kondygnacja
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: Kondygnacja |
| Lokalizacja w menu |
| 3D / BIM → Budynek |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| L V |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

**Kondygnacje** są specjalnym typem obiektu grupy FreeCAD, który posiada kilka dodatkowych właściwości szczególnie przydatnych dla pięter budynków. W szczególności posiadają właściwość wysokości, którą mogą wykorzystać dziecięce obiekty ([ściany](/Arch_Wall/pl "Arch Wall/pl") i [konstrukcje](/Arch_Structure/pl "Arch Structure/pl")) do automatycznego ustawiania swojej wysokości. Są one głównie używane do organizacji modelu.

Od wersja 0.18 i powyżej obiekt **Kondygnacja** wywodzi się w całości z obiektu [Część budynku](/Arch_BuildingPart/pl "Arch BuildingPart/pl"), który jest ogólnym kontenerem do organizowania modelu budynku, nie ograniczonym do pięter lub kondygnacji. Starsze obiekty Kondygnacja można przekonwertować na nowy typ, klikając je prawym przyciskiem myszy i wybierając `Konwertuj na Część budynku`.

## Użycie

1. Opcjonalnie wybierz jeden lub więcej obiektów, które mają być uwzględnione w nowym piętrze.
2. Wywołaj polecenie Kondygnacja na kilka sposobów:
   * Naciśnij przycisk ![](/images/Arch_Floor.svg) **Kondygnacja** na pasku narzędziowym.
   * Użyj klawiszy klawiatury L, a następnie V.
   * Skorzystaj z pozycji **3D / BIM → Kondygnacja** z menu głównego.

## Opcje

* Po utworzeniu podłogi można dodać do niej więcej obiektów, przeciągając je i upuszczając w widoku drzewa lub używając narzędzia ![](/images/Arch_Add.svg) [Połącz obiekty](/Arch_Add/pl "Arch Add/pl").
* Obiekty można usuwać z kondygnacji poprzez przeciąganie i upuszczanie ich w widoku drzewa lub za pomocą narzędzia ![](/images/Arch_Remove.svg) [Usuń komponent](/Arch_Remove/pl "Arch Remove/pl").

## Właściwości

Obiekt Kondygnacja dzieli wszystkie właściwości z obiektem [Część budynku](/Arch_BuildingPart/pl "Arch BuildingPart/pl"), przy czym DANE**IFC Type** jest ustawione na `"Building Storey"`.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Kondygnacja** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
Floor = makeFloor(objectslist=None, baseobj=None, name="Floor")

```

* Tworzy obiekt `Floor` z `objectslist`, który jest listą obiektów.

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

Floor = Arch.makeFloor([Wall1, Wall2])

Building = Arch.makeBuilding([Floor])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Floor/pl&oldid=1436321>"