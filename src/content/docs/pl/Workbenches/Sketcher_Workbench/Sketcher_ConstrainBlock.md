---
title: Szkicownik Wiązanie zablokowania
---
|  |
| --- |
| Szkicownik: Wiązanie zablokowania |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Wiązanie zablokowania |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| K B |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Wiązanie blokady odległości](/Sketcher_ConstrainLock/pl "Sketcher ConstrainLock/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainBlock.svg) **Wiązanie zablokowania** blokuje krawędzie w miejscu za pomocą pojedynczego wiązania. Jest ono przeznaczone głównie dla [krzywych złożonych](/index.php?title=Sketcher_CreateBSpline/p&action=edit&redlink=1 "Sketcher CreateBSpline/p (page does not exist)"), które mogą być trudne do pełnego związania w inny sposób.

Wiązanie blokujące wpływa tylko na swobodnie ruchome części krawędzi. Zablokowane krawędzie mogą mieć inne wiązania, a zastosowanie dodatkowych wiązań do zablokowanej krawędzi może ją zmodyfikować.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_ConstrainBlock.svg) **Wiązanie zablokowania**.
   * Wybierz z menu opcję **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainBlock.svg) Wiązanie zablokowania**.
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Wiązanie → ![](/images/Sketcher_ConstrainBlock.svg) Wiązanie zablokowania** z menu podręcznego.
   * Użyj skrótu klawiaturowego: K, a następnie B.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wybierz pojedynczą krawędź.
5. Zostanie dodane wiązanie.
6. Opcjonalnie można kontynuować tworzenie wiązań.
7. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wybierz jedną lub więcej krawędzi.
2. Wywołaj narzędzie jak wyjaśniono powyżej lub z następującą dodatkową opcją:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widok 3D](/3D_view/pl "3D view/pl") i wybierz opcję **![](/images/Sketcher_ConstrainBlock.svg) Wiązanie zablokowania** z menu podręcznego.
3. W zależności od wyboru dodawane jest jedno lub więcej ograniczeń.

## Tworzenie skryptów

```
Sketch.addConstraint(Sketcher.Constraint('Block', Edge))

```

Strona [skrypty szkicownika](/Sketcher_scripting/pl "Sketcher scripting/pl") wyjaśnia wartości, których można użyć dla `Krawędzi` oraz zawiera dalsze przykłady tworzenia wiązań przy użyciu skryptów języka Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainBlock/pl&oldid=1467471>"