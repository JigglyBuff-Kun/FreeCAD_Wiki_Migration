---
title: Rysunek Roboczy Odwróć wymiar
---
|  |
| --- |
| Rysunek Roboczy: Odwróć wymiar |
| Lokalizacja w menu |
| Modyfikacja → Odwróć wymiar |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Draft_FlipDimension.svg) **Odwróć wymiar** przerzuca tekst [wymiaru](/Draft_Dimension/pl "Draft Dimension/pl") wokół linii wymiarowej o 180°. Można go użyć do korekty wymiarów, których tekst ukazuje się w lustrzanym odbiciu. Polecenie nie działa poprawnie dla wymiarów kątowych.

## Użycie

1. Wybierz jeden lub więcej [wymiarów](/Draft_Dimension/pl "Draft Dimension/pl").
2. Istnieje kilka sposobów, aby wywołać to polecenie:
   * Naciśnij przycisk ![](/images/Draft_FlipDimension.svg) **Odwróć wymiar**.
   * Wybierz z menu opcję **Modyfikacja → ![](/images/Draft_FlipDimension.svg) Odwróć wymiar**.

## Uwagi

[Tekst wymiarów](/Draft_Dimension/pl "Draft Dimension/pl") posiada również właściwość DANE**Odwróć Tekst** która, gdy ma wartość `PRAWDA`, obraca tekst o 180 stopni względem normalnego kierunku. Można to połączyć z działaniem tej komendy.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby odwrócić [wymiar](/Draft_Dimension/pl "Draft Dimension/pl") należy zmienić jego właściwość `Normal`.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 0, 0)
p3 = App.Vector(500, 300, 0)
dimension = Draft.make_dimension(p1, p2, p3)
dimension.ViewObject.FontSize = 200

dimension.Normal = dimension.Normal.negative()
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_FlipDimension/pl&oldid=1462176>"