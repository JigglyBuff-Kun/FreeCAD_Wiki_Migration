---
title: Szkicownik Wiązanie zbieżności punktów (ujednolicone)
---
|  |
| --- |
| Szkicownik: Wiązanie zbieżności punktów (ujednolicone) |
| Lokalizacja w menu |
| Szkicownik → Wiązania szkicownika → Wiązanie zbieżności punktów (ujednolicone) |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| C |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| [Wiązanie zbieżności punktów](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl"), [Zwiąż punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainCoincidentUnified.svg) tworzy wiązanie zbieżne między punktami. Polecenie **Wiązanie zbieżności punktów *(ujednolicone)*** tworzy wiązanie zbieżne między punktami, ustala punkty na krawędziach lub osiach *(linie są wtedy traktowane jako nieskończone, a otwarte krzywe są również praktycznie wydłużone)*, lub tworzy wiązanie koncentryczne między okręgami, łukami i / lub elipsami *(poprzez uczynienie ich środków zbieżnymi)*.

Narzędzie to zastępuje polecenia [Wiązanie zbieżności punktów](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl") i [Zwiąż punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl"), jeśli opcja **Połącz wiązania zbieżności i punkt na obiekcie** jest zaznaczona w [Ustawieniach](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") szkicownika.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_ConstrainCoincidentUnified.svg) **Wiązanie zbieżności**.
   * Wybierz z menu opcję **Szkic → Wiązania szkicownika constraints → ![](/images/Sketcher_ConstrainCoincidentUnified.svg) Wiązanie zbieżności**.
   * Kliknij prawym przyciskiem myszy w oknie [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Wiązania → ![](/images/Sketcher_ConstrainCoincidentUnified.svg) Wiązanie zbieżności** z menu podręcznego.
   * Użyj skrótu klawiaturowego: C.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wykonaj jedną z następujących czynności:
   * Wybierz dwa punkty.
   * Wybierz dwie krawędzie okręgów, łuków, elips lub łuków elips.
   * Wybierz pojedynczy punkt i pojedynczą krawędź *(w dowolnej kolejności)*.
5. Wiązanie zostanie dodane.
6. Opcjonalnie można kontynuować tworzenie wiązań.
7. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wykonaj jedną z następujących czynności:
   * Wybierz dwa lub więcej punktów.
   * Wybierz dwie lub więcej krawędzi okręgów, łuków, elips lub łuków elips.
   * Wybierz pojedynczy punkt i pojedynczą krawędź *(w dowolnej kolejności)*.
   * Wybierz kilka punktów i jedną krawędź *(analogicznie)*.
   * Wybierz pojedynczy punkt i kilka krawędzi *(analogicznie)*.
2. Wywołaj narzędzie w sposób opisany powyżej lub za pomocą następującej dodatkowej opcji:
   * Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **![](/images/Sketcher_ConstrainCoincidentUnified.svg) Wiązanie zbieżności** z menu podręcznego.
3. W zależności od wyboru dodawane jest jedno lub więcej wiązań.

## Uwagi

* [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Punkty z wiązaniami zbieżnymi są oznaczone [kolorem](/Sketcher_Preferences/pl#Wyświetlanie "Sketcher Preferences/pl") **symboli wiązań**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainCoincidentUnified/pl&oldid=1414338>"