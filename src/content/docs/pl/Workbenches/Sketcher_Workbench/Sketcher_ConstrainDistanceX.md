---
title: Szkicownik Zwiąż odległość poziomą
---
|  |
| --- |
| Szkicownik: Zwiąż odległość poziomą |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Zwiąż odległość poziomą |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| L |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wiązanie odległości](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl"), [Zwiąż odległość pionową](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainDistanceX.svg) **Zwiąż odległość poziomą**
ustala poziomą odległość między dwoma punktami lub punktami końcowymi linii. Jeśli wstępnie wybrano pojedynczy punkt, odległość jest względna do początku szkicu.

![](/images/Constraint_H_Distance.png)

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli [ustawienie](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") **Wiązania wymiarów** jest aktywne i wybrano `Narzędzie pojedyncze` *(domyślnie)*: naciśnij strzałkę w dół po prawej stronie przycisku ![](/images/Sketcher_ConstrainDistanceX.svg)![](/images/Toolbar_flyout_arrow.svg) i wybierz opcję **![](/images/Sketcher_ConstrainDistanceX.svg) Zwiąż odległość poziomą** z rozwijanej listy.
   * Jeśli ta preferencja ma inną wartość *(wersja 0.21 i poniżej)*: naciśnij ![](/images/Sketcher_ConstrainDistanceX.svg) **Zwiąż odległość poziomą**.
   * Wybierz z menu opcję **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainDistanceX.svg) Zwiąż odległość poziomą**.
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Wiązanie wymiarów → ![](/images/Sketcher_ConstrainDistanceX.svg) Zwiąż odległość poziomą** z menu podręcznego.
   * Użyj skrótu klawiaturowego: L.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wykonaj jedną z następujących czynności:
   * Wybierz dwa punkty *(jeden z nich może być punktem początkowym)*.
   * Wybierz pojedynczą linię.
5. Jeśli utworzono [kontrolujące wiązanie wymiarowe](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl"), w zależności od [konfiguracji](/Sketcher_Preferences/pl#Wyświetlanie "Sketcher Preferences/pl"), otworzy się okno dialogowe [Wprowadź długość](/Sketcher_Workbench/pl#Edycja_wiązań "Sketcher Workbench/pl").
6. Wiązanie zostanie dodane.
7. Opcjonalnie można kontynuować tworzenie wiązań.
8. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wykonaj jedną z następujących czynności:
   * Wybierz jeden lub dwa punkty.
   * Wybierz pojedynczą linię.
2. Wywołaj narzędzie, jak wyjaśniono powyżej.
3. Opcjonalnie [dostosuj wartość](/Sketcher_Workbench/pl#Edycja_wiązań "Sketcher Workbench/pl").
4. Wiązanie zostało dodane.

## Tworzenie skryptów

Odległość od odniesienia położenia:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Odległość pomiędzy dwoma wierzchołkami:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Pozioma rozpiętość linii *(GUI pozwala wybrać samą krawędź, ale jest to tylko skrót do użycia dwóch skrajnych punktów tej samej linii)*:

```
Sketch.addConstraint(Sketcher.Constraint('DistanceX', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

Strona [Skrypty szkicownika](/Sketcher_scripting/pl "Sketcher scripting/pl") wyjaśnia wartości, które mogą być używane dla `Edge1`, `Edge2`, `Edge`, `PointOfEdge1`, `PointOfEdge2`, `PointOfEdge` i `Line`, a także zawiera kolejne przykłady tworzenia wiązań za pomocą skryptów języka Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistanceX/pl&oldid=1486961>"