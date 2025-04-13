---
title: Szkicownik Zwiąż punkt na obiekcie
---
|  |
| --- |
| Szkicownik: Zwiąż punkt na obiekcie |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Zwiąż punkt na obiekcie |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| O |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wiązanie zbieżności punktów](/Sketcher_ConstrainCoincidentUnified/pl "Sketcher ConstrainCoincidentUnified/pl"), [Wiązanie zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainPointOnObject.svg) **Zwiąż punkt na obiekcie** przyłącza punkt do innego obiektu, takiego jak linia, łuk lub oś szkicu. Linie są traktowane jako nieskończone, a otwarte krzywe są również praktycznie rozszerzone.

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Narzędzie to jest zastępowane przez [Wiązanie zbieżności punktów (ujednolicone)](/Sketcher_ConstrainCoincidentUnified/pl "Sketcher ConstrainCoincidentUnified/pl"), jeśli opcja **Połącz wiązania zbieżności i punkt na obiekcie** jest zaznaczona w [ustawieniach](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") szkicownika.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_ConstrainPointOnObject.svg) **Zwiąż punkt na obiekcie**.
   * Wybierz z menu **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainPointOnObject.svg) Zwiąż punkt na obiekcie**.
   * Użyj skrótu klawiaturowego: O.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wybierz pojedynczy punkt i pojedynczą krawędź *(w dowolnej kolejności)*.
5. Zostanie dodane wiązanie.
6. Opcjonalnie można kontynuować tworzenie wiązań.
7. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wykonaj jedną z następujących czynności:
   * Wybierz pojedynczy punkt i pojedynczą krawędź *(w dowolnej kolejności)*.
   * Wybierz kilka punktów i jedną krawędź *(analogicznie)*.
   * Wybierz pojedynczy punkt i kilka krawędzi *(analogicznie)*.
2. Wywołaj narzędzie w sposób opisany powyżej.
3. W zależności od wyboru dodawane jest jedno lub więcej ograniczeń.

## Tworzenie skryptów

Wiązanie może być utworzone zarówno przez [makrodefinicje](/Macros/pl "Macros/pl") jak i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującego polecenia:

`Sketch.addConstraint(Sketcher.Constraint('PointOnObject',LineMoving,PointOfLineMoving,LineFixed))`

* `Sketch` obiekt szkicu.
* `LineMoving` jest numerem oznaczającym linię, która zawiera punkt, który ma być przeniesiony na `LineFixed` *(linię, która jest ustalona)*.
* `PointOfLineMoving` jest numerem wierzchołka linii `LineMoving`, który ma zostać przeniesiony na `LineFixed`.
* `LinedFixed` jest numerem linii, która ma być dołączona do punktu `PointOfLineMoving`.

Na stronie [Skrypty Szkicownika](/Sketcher_scripting/pl "Sketcher scripting/pl") wyjaśniono, jak identyfikować numery oznaczające linie i punkty.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainPointOnObject/pl&oldid=1407495>"