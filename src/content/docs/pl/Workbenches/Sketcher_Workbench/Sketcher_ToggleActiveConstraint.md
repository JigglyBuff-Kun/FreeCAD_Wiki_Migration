---
title: Szkicownik Przełącz aktywność wiązania
---
|  |
| --- |
| Szkicownik: Przełącz aktywność wiązania |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Przełącz aktywność wiązania |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| K Z |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Przełącz kontrolę wiązania](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ToggleActiveConstraint.svg) **Przełącz aktywność wiązania** aktywuje lub dezaktywuje wybrane wiązania. Dezaktywacja wiązań pozwala na testowanie innych układów geometrii bez usuwania wiązań.

Jest to narzędzie podobne do [Przełącz kontrolę wiązania](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl"), ale w przeciwieństwie do niego działa również dla wiązań geometrycznych, a wartości dezaktywowanych wiązań wymiarowych są zachowywane.

## Użycie

1. Wybierz jedno lub więcej wiązań.
2. Istnieje kilka sposobów wywołania tego narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_ToggleActiveConstraint.svg) **Przełącz aktywność wiązania**.
   * Wybierz z menu **Szkic → Elementy geometryczne szkicownika → ![](/images/Sketcher_ToggleActiveConstraint.svg) Przełącz aktywność wiązania**.
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **![](/images/Sketcher_ToggleActiveConstraint.svg) Przełącz aktywność wiązania** z menu podręcznego.
   * W sekcji **Wiązania** [okna dialogowego](/Sketcher_Dialog/pl "Sketcher Dialog/pl") wybierz opcję **Aktywuj** lub **Dezaktywuj** z menu podręcznego. Oferowana opcja zależy od wybranego stanu wybranego wiązania.
   * Użyj skrótu klawiaturowego: K, a następnie Z.
3. Aktywne wybrane wiązania są dezaktywowane i zmieniają kolor na szary *(domyślny [kolor](/Sketcher_Preferences#Wygląd "Sketcher Preferences"))*, podczas gdy wybrane dezaktywowane wiązania są aktywowane i powracają do koloru czerwonego *(domyślny kolor)*.

## Przykład

![](/images/Sketcher_ToggleActiveConstraint_example_active.png)

W pełni związany szkic.

![](/images/Sketcher_ToggleActiveConstraint_example_disabled_1.png)

Jedno z wiązań kątowych zostało dezaktywowane, szkic nie jest już w pełni wiązany.

![](/images/Sketcher_ToggleActiveConstraint_example_disabled_2.png)

Geometria bez wiązań może być przemieszczana. Dezaktywowane wiązanie jest nadal dostępne i można je ponownie aktywować, aby powrócić do w pełni związanego szkicu.

## Tworzenie skryptów

*Zobacz również:* [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aktywny status wiązania może być kontrolowany w [makrodefinicjachs](/Macros/pl "Macros/pl") i z [konsoli środowiska Python](/Python_console/pl "Python console/pl").

```
SketchObject.toggleActive(index)

```

Użyj metody `toggleActive` istniejącego [obiektu szkicu](/Sketcher_SketchObject/pl "Sketcher SketchObject/pl") oraz `index` wiązania, aby je aktywować lub dezaktywować. Indeks zaczyna się od `0` aż do `N-1`, gdzie `N` to całkowita liczba więzów.

Przykład:

```
import FreeCAD as App

sketch = App.ActiveDocument.Sketch
sketch.toggleActive(3)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ToggleActiveConstraint/pl&oldid=1414354>"