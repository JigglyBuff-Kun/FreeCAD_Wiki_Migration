---
title: Sketcher Wiązanie poziome
---
|  |
| --- |
| Szkicownik: Zwiąż w poziomie |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Zwiąż w poziomie |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| H |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Poziomo / pionowo](/Sketcher_ConstrainHorVer/pl "Sketcher ConstrainHorVer/pl"), [Wiązanie pionowe](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainHorizontal.svg) **Zwiąż w poziomie** ogranicza linie lub pary punktów, aby były poziome *(równoległe do poziomej osi szkicu)*.

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): W większości przypadków zaleca się użycie połączonego narzędzia [Poziomo / pionowo](/Sketcher_ConstrainHorVer/pl "Sketcher ConstrainHorVer/pl").

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli [ustawienie](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") **Automatyczne narzędzie dla wiązania poziomo / pionowo** jest aktywne *(domyślnie)*: naciśnij strzałkę w dół po prawej stronie przycisku ![](/images/Sketcher_ConstrainHorVer.svg)![](/images/Toolbar_flyout_arrow.svg) i wybierz opcję **![](/images/Sketcher_ConstrainHorizontal.svg) Zwiąż w poziomie** z rozwijanej listy.
   * Jeśli ta preferencja nie jest wybrana *(i wersja 0.21 i poniżej): naciśnij ![](/images/Sketcher_ConstrainHorizontal.svg) **Zwiąż w poziomie**.*
   * Wybierz z menu opcję **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainHorizontal.svg) Zwiąż w poziomie**.
   * Użyj skrótu klawiaturowego: H.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wykonaj jedną z następujących czynności:
   * Wybierz dwa punkty.
   * Wybierz pojedynczą linię.
5. Wiązanie zostanie dodane.
6. Opcjonalnie można kontynuować tworzenie wiązań.
7. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wykonaj jedną z następujących czynności:
   * Wybierz dwa lub więcej punktów.
   * Wybierz jedną lub więcej linii. Punkty mogą zostać uwzględnione w zaznaczeniu, ale zostaną zignorowane.
2. Wywołaj narzędzie jak wyjaśniono powyżej lub z następującą dodatkową opcją:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **![](/images/Sketcher_ConstrainHorizontal.svg) Zwiąż w poziomie** z menu kontekstowego.
3. W zależności od wyboru dodawane jest jedno lub więcej ograniczeń.

## Tworzenie skryptów

```
Sketch.addConstraint(Sketcher.Constraint('Horizontal', Line))

```

Strona [skrypty szkicownika](/Sketcher_scripting/pl "Sketcher scripting/pl") wyjaśnia wartości, których można użyć dla `Line` oraz zawiera dalsze przykłady tworzenia wiązań przy użyciu skryptów języka Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainHorizontal/pl&oldid=1467455>"