---
title: Architektura Pręt zbrojeniowy
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| BIM: Zbrojenie |
| Lokalizacja w menu |
| 3D / BIM → Narzędzia zbrojenia → Zbrojenie nietypowe |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl"), [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl") |
| Domyślny skrót |
| R B |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Zbrojenie** pozwala na umieszczenie [prętów zbrojeniowych](http://en.wikipedia.org/wiki/Rebar) wewnątrz obiektów [konstrukcyjnych](/Arch_Structure/pl "Arch Structure/pl").

Obiekty prętów zbrojeniowych są oparte na profilach 2D, takich jak [obiekty rysunku roboczego](/Draft_Workbench/pl "Draft Workbench/pl") i [szkice](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), które muszą być narysowane na powierzchni obiektu konstrukcyjnego. Po utworzeniu można dostosować właściwości pręta zbrojeniowego, w tym liczbę i średnicę prętów oraz odległość przesunięcia między nimi a powierzchniami elementu konstrukcyjnego.

![](/images/Arch_Rebar_example.jpg)

Obiekt konstrukcyjny z dwoma szkicami narysowanymi na jego powierzchniach, które są następnie przekształcane w dwa zestawy obiektów prętów zbrojeniowych.

## Użycie

1. Przełącz się do środowiska pracy ![](/images/Workbench_BIM.svg) [BIM](/BIM_Workbench/pl "BIM Workbench/pl").
2. Utwórz element ![](/images/Arch_Structure.svg) [konstrukcyjny](/Arch_Structure/pl "Arch Structure/pl").
3. Przełącz się do środowiska pracy ![](/images/Workbench_Sketcher.svg) [Rysunek Roboczy](/Sketcher_Workbench/pl "Sketcher Workbench/pl").
4. Wybierz jedną z powierzchni elementu konstrukcyjnego.
5. Naciśnij przycisk ![](/images/Sketcher_NewSketch.svg) [Utwórz szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl"), aby rozpocząć nowy szkic na wybranej powierzchni.
6. Narysuj schemat swojego pręta.
7. Naciśnij przycisk ![](/images/Sketcher_LeaveSketch.svg) [Zamknij szkic](/Sketcher_LeaveSketch/pl "Sketcher LeaveSketch/pl"), aby zakończyć.
8. Przełącz się ponownie do środowiska pracy ![](/images/Workbench_Arch.svg) [Architektura](/Arch_Workbench/pl "Arch Workbench/pl").
9. Wybierz właśnie narysowany szkic.
10. Naciśnij przycisk ![](/images/Arch_Rebar.svg) Zbrojenie nietypowe, lub naciśnij klawisze R a następnie B.
11. Dostosuj właściwości *(pręt zbrojeniowy może nie pojawić się od razu, jeśli niektóre właściwości stworzą sytuację niemożliwą do rozwiązania, taką jak średnica pręta równa 0 lub odległości przesunięcia większe niż długość elementu konstrukcyjnego)*.

Chociaż zwykle pręt zbrojeniowy jest używany wewnątrz konstrukcji architektury, od wersji FreeCAD 0.19 pręt zbrojeniowy może być tworzony poza dowolnym obiektem docelowym. Aby umieścić pręt zbrojeniowy wewnątrz obiektu, wystarczy ustawić jego obiekt DANE**Host**.

## Opcje

* Wartość zaokrąglenia jest wyrażana w wielokrotnościach średnicy pręta. Jeśli twój pręt ma średnicę 5 mm, wartość zaokrąglenia 3 spowoduje zaokrąglenie kątów o promieniu 15 mm.
* Domyślne wartości dla nowych prętów zbrojeniowych można ustawić w preferencjach środowiska pracy Architektura.
* Jeśli wektor kierunku nie jest określony, kierunek i odległość, wzdłuż których rozłożone będą pręty, są obliczane automatycznie na podstawie strukturalnego obiektu nadrzędnego, poprzez pobranie normalnej kierunku bazowego szkicu i jego przecięcie z obiektem konstrukcyjnym. Jeśli określisz wektor kierunku, długość tego wektora również będzie brana pod uwagę.
* Wartość odstępu jest obliczana na podstawie bieżącej liczby prętów i reprezentuje odległość między osiami każdego pręta. Musisz więc odjąć średnicę pręta, aby uzyskać rozmiar wolnej przestrzeni między prętami.

## Właściwości

* Pręty zbrojeniowe dzielą wspólne właściwości i zachowania wszystkich [Komponentów Architektonicznych](/Arch_Component/pl "Arch Component/pl").

* DANE**Ilość**: Ilość prętów.
* DANE**Średnica**: Średnica prętów.
* DANE**Kierunek**: Kierunek *(i długość)*, wzdłuż którego mają się rozłożyć pręty. Jeśli wartość wynosi (0,0,0), kierunek jest obliczany automatycznie na podstawie nadrzędnego obiektu konstrukcyjnego.
* DANE**Przesunięcie początkowe**: Odległość przesunięcia między krawędzią obiektu konstrukcyjnego a pierwszym prętem.
* DANE**Przesunięcie końcowe**: Odległość przesunięcia między krawędzią obiektu konstrukcyjnego a ostatnim prętem.
* DANE**Zaokrąglenie**: Wartość zaokrąglenia stosowana do narożników prętów, wyrażona w wielokrotnościach średnicy.
* DANE**Rozstaw**: Odległość między osiami każdego pręta.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Pręt zbrojeniowy** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
Rebar = makeRebar(baseobj=None, sketch=None, diameter=None, amount=1, offset=None, name="Rebar")

```

* Tworzy obiekt `Rebar` na podstawie podanego `baseobj`, który jest obiektem [konstrukcyjnym](/Arch_Structure/pl "Arch Structure/pl"), oraz `sketch` jako profilu.
  + `diameter`, `amount` i `offset` są używane do definiowania zbrojenia prętami.
  + Jeśli nie podano wartości `diameter`, `amount` lub `offset`, używane są wartości domyślne z [Ustawień](/Arch_Preferences/pl "Arch Preferences/pl") środowiska Architektura.

Przykład:

```
import FreeCAD, Arch, Part

Structure = Arch.makeStructure(None, length=1000, width=1000, height=3000)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

p1 = FreeCAD.Vector(-400, 400, 0)
p2 = FreeCAD.Vector(400, 400, 0)
Sketch = FreeCAD.ActiveDocument.addObject('Sketcher::SketchObject', 'Sketch')
Sketch.MapMode = "FlatFace"
Sketch.Support = [(Structure, "Face6")]
Sketch.addGeometry(Part.LineSegment(p1, p2))
FreeCAD.ActiveDocument.recompute()

Rebar = Arch.makeRebar(Structure, Sketch, diameter=80, amount=7, offset=50)
Rebar.OffsetStart = 100
Rebar.OffsetEnd = 100
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Rebar/pl&oldid=1539913>"