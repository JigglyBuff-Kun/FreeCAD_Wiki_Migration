---
title: Szkicownik Wiązanie odległości
---
|  |
| --- |
| Szkicownik: Wiązanie odległości |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Wiązanie odległości |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| K D |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Zwiąż w poziomie](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl"), [Zwiąż w pionie](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainDistance.svg) **Wiązanie odległości** ustala długość prostej, odległość między dwoma punktami, odległość prostopadłą między punktem a prostą, lub [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") odległość między krawędziami dwóch okręgów lub łuków, lub między krawędzią okręgu lub łuku a prostą, lub [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") długość łuku.

![](/images/Sketcher_ConstrainDistance_example.png)

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli [ustawienie](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") **Wiązania wymiarów** jest aktywne i wybrano `Narzędzie pojedyncze` *(domyślnie)*: naciśnij strzałkę w dół po prawej stronie przycisku ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) i wybierz opcję **![](/images/Sketcher_ConstrainDistance.svg) Wiązanie odległości** z rozwijanej listy.
   * Jeśli ta preferencja ma inną wartość *(w 0.21 and below)*: naciśnij ![](/images/Sketcher_ConstrainDistance.svg) **Wiązanie odległości**.
   * Wybierz z menu opcję **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainDistance.svg) Wiązanie odległości**.
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Wiązanie wymiarów → ![](/images/Sketcher_ConstrainDistance.svg) Wiązanie odległości** z menu podręcznego.
   * Użyj skrótu klawiaturowego: K, a następnie D.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wybierz krawędź okręgu lub łuku.
5. Jeśli utworzono [kontrolujące wiązanie wymiarowe](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl"), w zależności od [konfiguracji](/Sketcher_Preferences/pl#Wyświetlanie "Sketcher Preferences/pl"), otworzy się okno dialogowe [Wprowadź ...](/Sketcher_Workbench/pl#Edycja_wiązań "Sketcher Workbench/pl").
6. Wiązanie zostanie dodane.
7. Opcjonalnie można kontynuować tworzenie wiązań.
8. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wykonaj jedną z następujących czynności:
   * Wybierz pojedynczą linię.
   * Wybierz dwa punkty.
   * Wybierz punkt i linię (w dowolnej kolejności).
   * Wybierz krawędzie dwóch okręgów lub łuków.
   * Wybierz krawędź okręgu lub łuku i linię (idem).
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Wybieranie krawędzi pojedynczego łuku.
2. Wywołaj narzędzie, jak wyjaśniono powyżej.
3. Opcjonalnie [dostosuj wartość](/Sketcher_Workbench/pl#Edycja_wiązań "Sketcher Workbench/pl").
4. Wiązanie zostanie dodane.

## Uwagi

* Jeśli ma to zastosowanie, rozważ użycie wiązań ![](/images/Sketcher_ConstrainDistanceX.svg) [Zwiąż w poziomie](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl") lub ![](/images/Sketcher_ConstrainDistanceY.svg) [Zwiąż w pionie](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl") zamiennie. Są one bardziej wydajne.

## Tworzenie skryptów

Odległość od odniesienia położenia:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge, PointOfEdge, -1, 1, App.Units.Quantity('123.0 mm')))

```

Odległość pomiędzy dwoma wierzchołkami:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge1, PointOfEdge1, Edge2, PointOfEdge2, App.Units.Quantity('123.0 mm')))

```

Długość linii *(GUI pozwala wybrać samą krawędź, ale jest to tylko skrót do użycia dwóch skrajnych punktów tej samej linii)*:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Line, 1, Line, 2, App.Units.Quantity('123.0 mm')))

```

Odległość od punktu (`Edge, PointOfEdge`) do najbliższego prostopadłego punktu na linii (`Line`):

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Edge, PointOfEdge, Line, 0, App.Units.Quantity('123.0 mm')))

```

Odległość między krawędziami dwóch okręgów:

```
Sketch.addConstraint(Sketcher.Constraint('Distance', Circle1, 0, Circle2, 0, App.Units.Quantity('123.0 mm')))

```

Strona [Skrypty szkicownika](/Sketcher_scripting/pl "Sketcher scripting/pl") wyjaśnia wartości, które mogą być używane dla `Edge`,`Edge1`, `Edge2`, `PointOfEdge`, `PointOfEdge1`, `PointOfEdge2` i `Line` oraz `Circle1`, `Circle2` a także zawiera kolejne przykłady tworzenia wiązań za pomocą skryptów języka Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDistance/pl&oldid=1407349>"