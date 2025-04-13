---
title: Szkicownik Wiązanie blokady odległości
---
|  |
| --- |
| Sketcher: Wiązanie blokady odległości |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Wiązanie blokady odległości |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| K L |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wiązanie zablokowania](/Sketcher_ConstrainBlock/pl "Sketcher ConstrainBlock/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainLock.svg)**Wiązanie blokady odległości** nakłada [dystans poziomy](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl") i [dystans pionowy](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl") na punkty. Jeśli wybrany jest pojedynczy punkt, wiązania odnoszą się do początku szkicu. Jeśli wybrano dwa lub więcej punktów, ograniczenia odnoszą się do ostatniego punktu w zaznaczeniu.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli [ustawienie](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") **Wiązania wymiarów** jest aktywne i wybrano `Narzędzie pojedyncze` *(domyślnie)*: naciśnij strzałkę w dół po prawej stronie przycisku ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) i wybierz opcję **![](/images/Sketcher_ConstrainLock.svg) Wiązanie blokady odległości** z rozwijanej listy.
   * Jeśli ta preferencja ma inną wartość (wersja 0.21 i poniżej): naciśnij przycisk ![](/images/Sketcher_ConstrainLock.svg) **Wiązanie blokady odległości**.
   * Wybierz z menu opcję **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainLock.svg) Wiązanie blokady odległości**.
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Wiązanie → ![](/images/Sketcher_ConstrainLock.svg) Wiązanie blokady odległości** z menu podręcznego.
   * Użyj skrótu klawiaturowego: K, a następnie L.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wybierz pojedynczy punkt.
5. Zostaną dodane dwa wiązania.
6. Opcjonalnie można kontynuować tworzenie wiązań.
7. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wybierz jeden lub więcej punktów.
2. Wywołaj narzędzie, jak wyjaśniono powyżej.
3. W zależności od wyboru dodawane są dwa lub więcej wiązań.

## Uwagi

* Nie ma automatycznego monitu o edycję wartości wiązań. Jeśli jest to wymagane, wartości mogą być [edytowane](/Sketcher_Workbench/pl#Edycja_wiązań "Sketcher Workbench/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainLock/pl&oldid=1467451>"