---
title: Szkicownik Wiązanie średnicy
---
|  |
| --- |
| Szkicownik: Wiązanie średnicy |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Wiązanie średnicy |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| K O |
| Wprowadzono w wersji |
| 0.18 |
| Zobacz także |
| [Zwiąż automatycznie promień / średnicę](/Sketcher_ConstrainRadiam/pl "Sketcher ConstrainRadiam/pl"), [Wiązanie promienia](/Sketcher_ConstrainRadius/pl "Sketcher ConstrainRadius/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainDiameter.svg) **Wiązanie średnicy** ustala średnicę okręgów i łuków. Nie można go używać do [krzywych złożonych przez punkty kontrolne](/Sketcher_CreateBSpline/pl#Uwagi "Sketcher CreateBSpline/pl").

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli [ustawienie](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") **Wiązania wymiarów** jest aktywne i wybrano `Narzędzie pojedyncze` *(domyślnie)*: naciśnij strzałkę w dół po prawej stronie przycisku ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) i wybierz opcję **![](/images/Sketcher_ConstrainDiameter.svg) Wiązanie średnicy** z rozwijanej listy.
   * Jeśli ta preferencja ma inną wartość *(w wersja 0.21 i poniżej)*: naciśnij ![](/images/Sketcher_ConstrainDiameter.svg) **Wiązanie średnicy**.
   * Wybierz z menu opcję **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainDiameter.svg) Wiązanie średnicy**.
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Wiązanie wymiarów → ![](/images/Sketcher_ConstrainDiameter.svg) Wiązanie średnicy** z menu podręcznego.
   * Użyj skrótu klawiaturowego: K, a następnie O.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wybierz krawędź okręgu lub łuku.
5. Jeśli utworzono [kontrolujące wiązanie wymiarowe](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl"), w zależności od [konfiguracji](/Sketcher_Preferences/pl#Wyświetlanie "Sketcher Preferences/pl"), otworzy się okno dialogowe [Wprowadź średnicę](/Sketcher_Workbench/pl#Edycja_wiązań "Sketcher Workbench/pl").
6. Wiązanie zostanie dodane.
7. Opcjonalnie można kontynuować tworzenie wiązań.
8. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wybierz krawędź jednego lub więcej okręgów lub łuków.
2. Wywołaj narzędzie, jak wyjaśniono powyżej.
3. Opcjonalnie [dostosuj wartość](/Sketcher_Workbench/pl#Edycja_wiązań "Sketcher Workbench/pl").
4. W zależności od zaznaczenia dodawane jest jedno lub więcej wiązań, patrz [Uwagi](#Uwagi).

## Uwagi

* Jeśli utworzono [wiązanie konstrukcyjne](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl") i wstępnie wybrano wiele elementów, które nie są [geometria zewnętrzną](/Sketcher_External/pl "Sketcher External/pl"), tylko pierwszy z nich otrzymuje wiązanie wymiarowe, podczas gdy między pierwszym a pozostałymi stosowane są [wiązania równości](/Sketcher_ConstrainEqual/pl "Sketcher ConstrainEqual/pl").

## Tworzenie skryptów

```
Sketch.addConstraint(Sketcher.Constraint('Diameter', ArcOrCircle, App.Units.Quantity('123.0 mm')))

```

Strona [skrypty szkicownika](/Sketcher_scripting/pl "Sketcher scripting/pl") wyjaśnia wartości, których można użyć dla `ArcOrCircle` oraz zawiera dalsze przykłady tworzenia wiązań przy użyciu skryptów języka Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainDiameter/pl&oldid=1467447>"