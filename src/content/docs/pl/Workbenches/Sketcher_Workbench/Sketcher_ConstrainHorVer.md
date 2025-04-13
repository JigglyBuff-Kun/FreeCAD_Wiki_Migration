---
title: Szkicownik Wiązanie poziomo / pionowo
---
|  |
| --- |
| Szkicownik: Wiązanie poziomo / pionowo |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Wiązanie poziomo / pionowo |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| A |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| [Wiązanie poziome](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl"), [Wiązanie pionowe](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainHorVer.svg) **Wiązanie poziomo / pionowo** ogranicza linie lub pary punktów, aby były poziome *(równoległe do poziomej osi szkicu)* lub pionowe, w zależności od tego, co jest najbliższe bieżącemu wyrównaniu.

Narzędzie to łączy [Wiązanie poziomo](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl") i [wiązanie pionowo](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl").

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Jeśli w [ustawieniach](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") wybrana jest opcja **Automatyczne narzędzie dla wiązania poziomo / pionowo** *(domyślnie)*: naciśnij przycisk ![](/images/Sketcher_ConstrainHorVer.svg) **Wiązanie poziomo / pionowo**.
   * Wybierz z menu **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainHorVer.svg) Wiązanie poziomo / pionowo**.
   * Kliknij prawym przyciskiem myszy [widok 3D](/3D_view/pl "3D view/pl") i wybierz **Wiązanie → ![](/images/Sketcher_ConstrainHorVer.svg) Constrain horizontal/vertical** z menu podręcznego.
   * Użyj skrótu klawiaturowego: A.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wykonaj jedną z następujących czynności:
   * Wybierz dwa punkty.
   * Wybierz pojedynczą linię.
5. Zostanie dodane wiązanie.
6. Opcjonalnie można kontynuować tworzenie wiązań.
7. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wykonaj jedną z następujących czynności:
   * Wybierz dwa lub więcej punktów *(kolejność wyboru może być istotna, patrz [Uwagi](#Uwagi))*.
   * Wybierz jedną lub więcej linii. Punkty mogą zostać uwzględnione w zaznaczeniu, ale zostaną zignorowane.
2. Wywołaj narzędzie jak wyjaśniono powyżej lub z następującą dodatkową opcją:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **![](/images/Sketcher_ConstrainHorVer.svg) Wiązanie poziomo / pionowo** z menu kontekstowego.
3. W zależności od wyboru dodawane jest jedno lub więcej wiązań.

## Uwagi

Więcej niż dwa punkty są przetwarzane w kolejności wyboru, po jednej parze na raz. Pierwszy punkt jest łączony z drugim. Podczas wiązania drugi punkt może się przesunąć. Nowa lokalizacja drugiego punktu określa, które wiązanie jest stosowane, gdy wiązane są drugi i trzeci punkt itd.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainHorVer/pl&oldid=1407443>"