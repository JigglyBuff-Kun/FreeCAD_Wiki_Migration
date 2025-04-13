---
title: Std Widok stereo czerwony / cyjan
---
|  |
| --- |
| Std: Widok stereo czerwony / cyjan |
| Lokalizacja w menu |
| Widok → Widok trójwymiarowy → Stereo czerwony / cyjan |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Widok poczwórny bufor stereo](/Std_ViewIvStereoQuadBuff/pl "Std ViewIvStereoQuadBuff/pl"), [Widok stereo z przeplotem wierszy](/Std_ViewIvStereoInterleavedRows/pl "Std ViewIvStereoInterleavedRows/pl"), [Widok stereo z przeplotem kolumn](/Std_ViewIvStereoInterleavedColumns/pl "Std ViewIvStereoInterleavedColumns/pl"), [Wyłącz widok trójwymiarowy](/Std_ViewIvStereoOff/pl "Std ViewIvStereoOff/pl") |
|  |

## Opis

Polecenie **Widok stereo czerwony / cyjan** zmienia aktywny [widok 3D](/3D_view/pl "3D view/pl") na czerwono-cyjanowy, [anaglif](https://en.wikipedia.org/wiki/Anaglyph_3D), tryb widoku stereo. Do korzystania z tego trybu stereo wymagane są okulary z kolorowymi soczewkami.

## Użycie

1. Wybierz z menu opcję **Widok → Widok trójwymiarowy → ![](/images/Std_ViewIvStereoRedGreen.svg) Stereo czerwony / cyjan**.

## Ustawienia

Zobacz też: [Edytor preferencji](/Preferences_Editor/pl "Preferences Editor/pl").

* Odległość między oczami można zmienić w preferencjach: **Edycja → Preferencje ... → Wyświetlanie → Widok 3D → Odległość między oczami dla trybu stereo**.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby zmienić widok na widok stereo czerwony / cyjan, należy użyć metody `setStereoType` obiektu View. Dostępne tryby to `"Anaglyph"`, `"QuadBuffer"`, `"InterleavedRows"`, `"InterleavedColumns"` i `"None"`.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.setStereoType("Anaglyph")
view.getStereoType()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewIvStereoRedGreen/pl&oldid=1462436>"