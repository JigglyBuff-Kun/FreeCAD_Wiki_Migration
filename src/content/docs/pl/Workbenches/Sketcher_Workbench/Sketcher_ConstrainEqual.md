---
title: Szkicownik Wiązanie równości
---
|  |
| --- |
| Szkicownik: Wiązanie równości |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Wiązanie równości |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| E |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainEqual.svg) **Wiązanie równości** ogranicza krawędzie, aby miały taką samą długość *(linie)* lub krzywiznę *(inne krawędzie z wyjątkiem [krzywej złożonej](/Sketcher_CreateBSpline/pl "Sketcher CreateBSpline/pl"))*. Wybrane krawędzie muszą być tego samego typu. Okręgi i łuki kołowe są tego samego typu *(ich promienie są równe)*, podobnie jak elipsy i łuki eliptyczne *(ich główne i mniejsze promienie są równe)*.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_ConstrainEqual.svg) **Wiązanie równości**.
   * Wybierz z menu opcję **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainEqual.svg) Wiązanie równości**.
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Wiązanie → ![](/images/Sketcher_ConstrainEqual.svg) Wiązanie równości** z menu podręcznego.
   * Użyj skrótu klawiaturowego: E.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wybierz dwie krawędzie tego samego typu.
5. Zostanie dodane wiązanie.
6. Opcjonalnie można kontynuować tworzenie wiązań.
7. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wybierz jedną lub więcej krawędzi.
2. Wywołaj narzędzie jak wyjaśniono powyżej lub z następującą dodatkową opcją:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widok 3D](/3D_view/pl "3D view/pl") i wybierz opcję **![](/images/Sketcher_ConstrainEqual.svg) Wiązanie równości** z menu podręcznego.
3. W zależności od wyboru dodawane jest jedno lub więcej wiązań.

## Tworzenie skryptów

```
Sketch.addConstraint(Sketcher.Constraint('Equal', Edge1, Edge2))

```

Strona [skrypty szkicownika](/Sketcher_scripting/pl "Sketcher scripting/pl") wyjaśnia wartości, których można użyć dla `Edge1` oraz `Edge2` oraz zawiera dalsze przykłady tworzenia wiązań przy użyciu skryptów języka Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainEqual/pl&oldid=1407425>"