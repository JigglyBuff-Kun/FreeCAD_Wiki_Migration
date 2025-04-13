---
title: Architektura Osie
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Arch Axis |
| Menu location |
| Opisy → Osie |
| Workbenches |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Default shortcut |
| A X |
| Introduced in version |
| - |
| See also |
| [Układ osi](/Arch_AxisSystem/pl "Arch AxisSystem/pl"), [Siatka](/Arch_Grid/pl "Arch Grid/pl") |
|  |

## Opis

Narzędzie ![](/images/Arch_Axis.svg) **Osie** pozwala na umieszczenie serii osi w bieżącym dokumencie. Odległość i kąt między osiami można dostosować, podobnie jak styl numeracji. Osie służą głównie jako odniesienia do przyciągania obiektów, ale mogą być również używane razem z ![](/images/Arch_AxisSystem.svg) [Układem osi](/Arch_AxisSystem/pl "Arch AxisSystem/pl"). Mogą być one również przywoływane przez inne obiekty architektury w celu utworzenia parametrycznych szyków, na przykład belek lub słupów. Zamiast osi mozna również użyć ![](/images/Arch_Grid.svg) [Siatki](/Arch_Grid/pl "Arch Grid/pl").

![](/images/Arch_Axis_example.jpg)

Dwie osie obiektów ustawione prostopadle do siebie w celu utworzenia siatki.

## Użycie

1. Naciśnij przycisk ![](/images/Arch_Axis.svg) **Osie** lub naciśnij A, a następnie X przyciski.
2. [Przesuń](/Draft_Move/pl "Draft Move/pl") / [Obróć](/Draft_Rotate/pl "Draft Rotate/pl") system osi do żądanej pozycji.
3. Przejdź do trybu edycji, klikając dwukrotnie układ osi w widoku drzewa, aby dostosować jego ustawienia, takie jak liczba osi, odległości i kąty między osiami.

## Opcje

* Każda oś w serii ma swoją własną odległość i kąt w stosunku do poprzedniej osi. Pozwala to na tworzenie bardzo złożonych układów, takich jak układy nieortogonalne, układy biegunowe lub wszelkiego rodzaju układy niejednolite.
* Dwukrotne kliknięcie osi w widoku drzewa umożliwia edycję odległości, kątów i etykiet każdej osi.
* Długość osi, rozmiar bąbelków i style numeracji można dostosowywać bezpośrednio we właściwościach systemu osi.
* Każda oś może również wyświetlać etykietę, którą można edytować za pomocą okna dialogowego panelu zadań.

## Właściwości

* DANE**Długość**: Długość osi.
* DANE**Limit**: Jeśli wartość jest większa niż zero, każda oś będzie przedstawiona jako dwie linie o danej długości zamiast jednej ciągłej linii [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl").
* WIDOK**Rozmiar dymka**: Rozmiar dymka osi.
* WIDOK**Style numerowania**: Sposób numerowania osi: 1,2,3, A,B,C, itd...
* WIDOK**Pozycja dymka**: Definiuje gdzie znajduje się dymek na osi: Na punkcie początkowym, końcowym, oba lub żaden.
* WIDOK**Nazwa czcionki**: Czcionka do rysowania numeru dymka i / lub etykiet.
* WIDOK**Rozmiar czcionki**: Rozmiar tekstu etykiety *(tekst dymka jest kontrolowany przez rozmiar pęcherzyka)*.
* WIDOK**Wyświetl etykietę**: Włącza lub wyłącza wyświetlanie tekstów etykiet.

## Użycie jako oznaczenie przekroju

Ustawiając właściwość **Pozycja dymka** na **Strzałka lewo/prawo** lub **Pasek lewo/prawo**, oś wyświetli wypełnioną strzałkę lub pasek zamiast dymka, dzięki czemu może być użyta jako oznaczenie przekroju. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Osi** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
Axes = makeAxis(num=5, size=1000, name="Axes")

```

* Tworzy obiekt `Axes` z podanej liczby (`num`) osi i `size`, odstępu między każdą osią.

Przykład:

```
import Draft, Arch

Axes = Arch.makeAxis(5, 1000)

Axes.ViewObject.LineWidth = 3
Axes.ViewObject.BubbleSize = 200
Axes.ViewObject.FontSize = 150

Axes2 = Arch.makeAxis(6, 500)

Axes2.ViewObject.LineWidth = 2
Axes2.ViewObject.BubbleSize = 200
Axes2.ViewObject.FontSize = 150
Axes2.ViewObject.NumberingStyle = "A,B,C"
FreeCAD.ActiveDocument.recompute()

Axes2.Length = 6000
Draft.rotate(Axes2, -90)
Draft.move(Axes2, FreeCAD.Vector(-1000, 2500, 0))
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Axis/pl&oldid=1462418>"