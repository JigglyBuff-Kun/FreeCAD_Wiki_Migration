---
title: Szkicownik Zwiąż odległość pionową
---
|  |
| --- |
| Szkicownik: Zwiąż odległość pionową |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Zwiąż odległość pionową |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| I |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Zwiąż odległość poziomą](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl"), [Wiązanie odległości](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainDistanceY.svg) **Zwiąż odległość pionową**
ustala pionową odległość między dwoma punktami lub punktami końcowymi linii. Jeśli wstępnie wybrano pojedynczy punkt, odległość jest względna do początku szkicu.

![](/images/Sketcher_ConstraintDistanceY_example.png)

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli [ustawienie](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") **Wiązania wymiarów** jest aktywne i wybrano `Narzędzie pojedyncze` *(domyślnie)*: naciśnij strzałkę w dół po prawej stronie przycisku ![](/images/Sketcher_ConstrainDistanceY.svg)![](/images/Toolbar_flyout_arrow.svg) i wybierz opcję **![](/images/Sketcher_ConstrainDistanceY.svg) Zwiąż odległość poziomą** z rozwijanej listy.
   * Jeśli ta preferencja ma inną wartość *(wersja 0.21 i poniżej)*: naciśnij ![](/images/Sketcher_ConstrainDistanceY.svg) **Zwiąż odległość pionową**.
   * Wybierz z menu opcję **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainDistanceY.svg) Zwiąż odległość pionową**.
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Wiązanie wymiarów → ![](/images/Sketcher_ConstrainDistanceY.svg) Zwiąż odległość pionową** z menu podręcznego.
   * Użyj skrótu klawiaturowego: I.
3. Dalsze kroki można znaleźć w prezentacji narzędzia [Zwiąż w poziomie](/Sketcher_ConstrainDistanceX/pl#Tryb_kontynuacji "Sketcher ConstrainDistanceX/pl").

### Tryb jednorazowy

Zapoznaj się z informacjami na stronie: [Zwiąż w poziomie](/Sketcher_ConstrainDistanceX/pl#Tryb_jednorazowy "Sketcher ConstrainDistanceX/pl").

## Tworzenie skryptów

Odległość od odniesienia położenia:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Odległość pomiędzy dwoma wierzchołkami:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Pozioma rozpiętość linii *(GUI pozwala wybrać samą krawędź, ale jest to tylko skrót do użycia dwóch skrajnych punktów tej samej linii)*:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceY', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

Strona [Skrypty szkicownika](/Sketcher_scripting/pl "Sketcher scripting/pl") wyjaśnia wartości, które mogą być używane dla `Edge`, `Edge1`, `Edge2`, `PointOfEdge`, `PointOfEdge1`, `PointOfEdge2` i `Line`, a także zawiera kolejne przykłady tworzenia wiązań za pomocą skryptów języka Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistanceY/pl&oldid=1410577>"