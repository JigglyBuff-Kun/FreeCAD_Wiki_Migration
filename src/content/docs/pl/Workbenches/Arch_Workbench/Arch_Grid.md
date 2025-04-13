---
title: Architektura Siatka
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: Siatka |
| Lokalizacja w menu |
| Opisy → Narzędzia osi → Siatka |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Osie](/Arch_Axis/pl "Arch Axis/pl"), [Układ osi](/Arch_AxisSystem/pl "Arch AxisSystem/pl") |
|  |

## Opis

Narzędzie **Siatka** pozwala na umieszczenie w dokumencie obiektu przypominającego siatkę. Obiekt ten ma służyć jako podstawa do budowania obiektów Architektury, które wymagają regularnej, ale złożonej ramy, takich jak okna, ściany osłonowe, siatki kolumn, balustrady itp. Obiekt Siatka jest edytowalny jak arkusz kalkulacyjny, w którym można dodawać lub usuwać kolumny i wiersze, definiować ich rozmiar i łączyć komórki.

Siatka jest obiektem 2D, a zatem może być używana wszędzie tam, gdzie potrzebny jest kształt 2D, taki jak [rysunek roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [szkic](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), ale może również zachowywać się jak [układ osi](/Arch_AxisSystem/pl "Arch AxisSystem/pl") i być używana do umieszczania innych obiektów Architektury.

![](/images/Arch_Grid_example.jpg)

Układ kolumn, system balustrad i okno, każdy oparty na obiekcie siatki.

## Użycie

1. Naciśnij przycisk ![](/images/Arch_Grid.svg) **Siatka**.
2. Ustaw **Szerokość** i **Wysokość** siatki we właściwościach.
3. Przejdź do trybu edycji, klikając dwukrotnie obiekt siatki w widoku drzewa.
4. Dodaj wiersze i kolumny.
5. Ustaw żądaną szerokość i wysokość wierszy i kolumn, klikając dwukrotnie nagłówki wierszy lub kolumn.

## Opcje

* Szerokość kolumny lub wysokość wiersza równa 0 oznacza, że jej rozmiar zostanie automatycznie dostosowany do całkowitej szerokości / wysokości siatki.
* Komórki można łączyć i rozdzielać, zaznaczając je i klikając odpowiedni przycisk.
* W przypadku użycia jako właściwości DANE**Oś** innych obiektów Architektury, siatka będzie sterować pozycjonowaniem tych obiektów. Właściwość DANE**PPunkty wyjściowe** definiuje sposób, w jaki inne obiekty są umieszczane na siatce: W wierzchołkach, punktach środkowych krawędzi lub środkach ścian.
* Ustawiając właściwości DANE**Automatyczna wysokość** lub DANE**Automatyczna szerokość** na wartość niezerową, całkowita liczba wierszy/kolumn i ich indywidualne wysokości/szerokości są ignorowane. Zamiast tego automatycznie tworzona jest maksymalna liczba kolumn lub wierszy o podanej automatycznej szerokości/wysokości.

## Właściwości

* DANE**Wiersze**: Ilość wierszy.
* DANE**Kolumny**: Ilość kolumn.
* DANE**Rozmiar Wierszy**: Rozmiary wierszy.
* DANE**Rozmiar Kolumn**: Rozmiary kolumn.
* DANE**Punkty wyjściowe**: Typ punktów 3D generowanych przez ten obiekt siatki.
* DANE**Szerokość**: Całkowita szerokość tej siatki.
* DANE**Wysokość**: Całkowita wysokość tej siatki.
* DANE**Szerokość automatycznie**: Tworzy automatyczne podziały kolumn *(ustaw na 0, aby wyłączyć)*.
* DANE**Wysokość automatycznie**: Tworzy automatyczne podziały wierszy *(ustaw na 0, aby wyłączyć)*.
* DANE**Reorient**: W trybie punktu środkowego krawędzi, określa czy ta siatka musi zmienić orientację swoich elementów podrzędnych wzdłuż normalnych krawędzi, czy nie.
* DANE**Ukryte ściany**: Indeksy ścian do ukrycia.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Siatka** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
Grid = makeGrid(name="Grid")

```

* Tworzy obiekt `Grid`.

Atrybuty `Width`, `Height`, `Rows` i `Columns` mogą być zmieniane bezpośrednio w celu zdefiniowania wyglądu siatki.

```
import FreeCAD, Draft, Arch
Grid = Arch.makeGrid()

Grid.Width = 5000
Grid.Height = 5000
Grid.Rows = 4
Grid.Columns = 6
FreeCAD.ActiveDocument.recompute()

Structure = Arch.makeStructure(length=200, width=200, height=100)
Draft.move(Structure, FreeCAD.Vector(-100, 0, 0))
Structure.Axis = Grid
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Grid/pl&oldid=1436131>"