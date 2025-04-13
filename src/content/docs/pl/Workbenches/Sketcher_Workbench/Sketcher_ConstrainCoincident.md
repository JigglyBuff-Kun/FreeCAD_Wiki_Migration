---
title: Szkicownik Wiązanie zbieżności punktów
---
|  |
| --- |
| Szkicownik: Wiązanie zbieżności punktów |
| Lokalizacja w menu |
| Szkicownik → Wiązania szkicownika → Wiązanie zbieżności punktów |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| C |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wiązanie zbieżności punktów (ujednolicone)](/Sketcher_ConstrainCoincidentUnified/pl "Sketcher ConstrainCoincidentUnified/pl"), [Zwiąż punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainCoincident.svg) **Wiązanie zbieżności** tworzy wiązanie zbieżne między punktami lub *([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"))* koncentryczne wiązanie pomiędzy okręgami, łukami i / lub elipsami *(poprzez zapewnienie zbieżności ich środków)*.

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Polecenie to jest zastępowane przez polecenie [Wiązanie zbieżności punktów (ujednolicone)](/Sketcher_ConstrainCoincidentUnified/pl "Sketcher ConstrainCoincidentUnified/pl"), jeśli opcja **Połącz wiązania zbieżności i punkt na obiekcie** jest zaznaczona w [ustawieniach](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") szkicownika.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_ConstrainCoincident.svg) **Wiązanie zbieżności** na pasku narzędzi.
   * Wybierz opcja z menu **Szkic → Ograniczenia szkicownika → ![](/images/Sketcher_ConstrainCoincident.svg) Wiązanie zbieżności**.
   * Użyj skrótu klawiaturowego C.
3. Kursor zmieni się na krzyżyk z ikoną narzędzia.
4. Wykonaj jedną z następujących czynności:
   * Wybierz dwa punkty.
   * Wybierz dwie krawędzie okręgów, łuków, elips lub łuków elips.
5. Wiązanie zostanie dodane.
6. Opcjonalnie można kontynuować tworzenie wiązań.
7. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wykonaj jedną z następujących czynności:
   * Wybierz dwa lub więcej punktów.
   * Wybierz dwie lub więcej krawędzi okręgów, łuków, elips lub łuków elips.
2. Wywołaj narzędzie, jak wyjaśniono powyżej.
3. W zależności od wyboru dodawane jest jedno lub więcej wiązań.

## Uwagi

* [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Punkty z wiązaniami zbieżnymi są oznaczone [kolorem](/Sketcher_Preferences/pl#Wyświetlanie "Sketcher Preferences/pl") **symboli wiązań**.

### Ogólne zasady tworzenia skryptów

Wiązanie może być utworzone zarówno przez [makrodefinicje](/Macros/pl "Macros/pl") jak i z konsoli [Python](/Python "Python") za pomocą następującego polecenia:

```
Sketch.addConstraint(Sketcher.Constraint('Coincident',LineFixed,PointOfLineFixed,LineMoving,PointOfLineMoving))

```

gdzie:

* `Sketch` jest obiektem szkicu,
* `LineFixed` to numer linii, która nie przesunie się po zastosowaniu wiązania,
* `PointOfLineFixed` wskazuje, który wierzchołek `LineFixed` musi spełniać warunek wiązania,
* `LineMoving` to numer linii, która ulegnie przesunięciu przez zastosowanie wiązania,
* `PointOfLineMoving` wskazuje, który wierzchołek `LineMoving`, musi spełniać warunek wiązania,

Jak wskazują nazwy `LineFixed` i `LineMoving`, jeśli oba związane wierzchołki mogą się poruszać w dowolnym kierunku, pierwszy z nich (wybrany jako pierwszy w Gui) pozostanie nieruchomy, a drugi będzie się poruszał. Jednak w obecności istniejących wiązań, obie krawędzie mogą się poruszać.

Strona [skrypty w środowisku szkicownika](/Sketcher_scripting/pl "Sketcher scripting/pl") opisuje wartości, których można użyć dla `LineFixed`, `PointOfLineFixed`, `LineMoving` i `PointOfLineMoving`, a także zawiera dalsze przykłady tworzenia wiązań przy użyciu skryptów języka Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainCoincident/pl&oldid=1405471>"