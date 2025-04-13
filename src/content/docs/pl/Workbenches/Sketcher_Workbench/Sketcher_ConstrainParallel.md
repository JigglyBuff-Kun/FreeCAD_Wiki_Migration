---
title: Sketcher Wiązanie równoległości
---
|  |
| --- |
| Szkicownik: Wiązanie równoległości |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Wiązanie równoległości |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| P |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainParallel.svg) **Zwiąż równolegle** wymusza, aby linie były równoległe.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_ConstrainParallel.svg) **Wiązanie równoległości**.
   * Wybierz z menu opcję **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainParallel.svg) Wiązanie równoległości**.
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Wiązanie → ![](/images/Sketcher_ConstrainParallel.svg) Wiązanie równoległości** z menu podręcznego.
   * Użyj skrótu klawiaturowego: P.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wybierz dwie linie.
5. Ograniczenie zostanie dodane.
6. Opcjonalnie można kontynuować tworzenie wiązań.
7. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wybierz dwie lub więcej linii. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Punkty mogą zostać uwzględnione w zaznaczeniu, ale zostaną zignorowane.
2. Wywołaj narzędzie jak wyjaśniono powyżej lub z następującą dodatkową opcją:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **![](/images/Sketcher_ConstrainParallel.svg) Wiązanie równoległości** z menu podręcznego.
3. W zależności od wyboru dodawane jest jedno lub więcej ograniczeń.

## Tworzenie skryptów

```
Sketch.addConstraint(Sketcher.Constraint('Parallel', Line1, Line2))

```

Strona [skrypty szkicownika](/Sketcher_scripting/pl "Sketcher scripting/pl") wyjaśnia wartości, których można użyć dla `Line1` oraz `Line2` oraz zawiera dalsze przykłady tworzenia wiązań przy użyciu skryptów języka Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainParallel/pl&oldid=1407478>"