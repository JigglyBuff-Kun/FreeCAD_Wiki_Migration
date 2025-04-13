---
title: Szkicownik Zwiąż automatycznie promień / średnicę
---
|  |
| --- |
| Szkicownik: Zwiąż automatycznie promień / średnicę |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Zwiąż automatycznie promień / średnicę |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), |
| Domyślny skrót |
| K S |
| Wprowadzono w wersji |
| 0.20 |
| Zobacz także |
| [Wiązanie promienia](/Sketcher_ConstrainRadius/pl "Sketcher ConstrainRadius/pl"), [Wiązanie średnicy](/Sketcher_ConstrainDiameter/pl "Sketcher ConstrainDiameter/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainRadiam.svg) **Zwiąż automatycznie promień / średnicę** ustala promień łuków i [okręgów wagowych](/Sketcher_CreateBSpline/pl#Uwagi "Sketcher CreateBSpline/pl") oraz średnicę okręgów.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli **Wiązania wymiarów** [skonfigurowano](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") na `Narzędzie pojedyncze` *(domyślnie)*: naciśnij strzałkę w dół po prawej stronie przycisku ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) i wybierz opcję **![](/images/Sketcher_ConstrainRadiam.svg) Zwiąż automatycznie promień / średnicę** z rozwijanej listy.
   * Jeśli ta preferencja ma inną wartość *(wersja 0.21 i poniżej)*: naciśnij przycisk ![](/images/Sketcher_ConstrainRadiam.svg) **Zwiąż automatycznie promień / średnicę**.
   * Wybierz z menu **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainRadiam.svg) Zwiąż automatycznie promień / średnicę**.
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Wymiar → ![](/images/Sketcher_ConstrainRadiam.svg) Zwiąż automatycznie promień / średnicę** z menu podręcznego.
   * Użyj skrótu klawiaturowego: K, a następnie S.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wykonaj jedną z następujących czynności:
   * Wybierz krawędź okręgu lub łuku.
   * Wybierz krawędź okręgu o wadze krzywej złożonej.
5. Jeśli utworzono [konstrukcyjne wiązanie wymiaru](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl"), w zależności od [konfiguracji](/Sketcher_Preferences/pl#Wyświetlanie "Sketcher Preferences/pl"), otworzy się okno dialogowe [do edycji wartości](/Sketcher_Workbench/pl#Edycja_wiązań "Sketcher Workbench/pl").
6. Wiązanie zostanie dodane.
7. Opcjonalnie można kontynuować tworzenie wiązań.
8. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wykonaj jedną z następujących czynności:
   * Wybierz krawędź jednego lub więcej okręgów lub łuków.
   * Wybierz krawędź jednego lub więcej okręgów wagi krzywej złożonej.
2. Wywołaj narzędzie, jak wyjaśniono powyżej.
3. Opcjonalnie [popraw wartość](/Sketcher_Workbench/pl#Edycja_wiązań "Sketcher Workbench/pl").
4. W zależności od wyboru dodawane jest jedno lub więcej wiązań, patrz [Uwagi](#Uwagi).

## Uwagi

* Jeśli utworzono [wiązanie konstrukcyjne](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl") i wstępnie wybrano wiele elementów, które nie są [geometria zewnętrzną](/Sketcher_External/pl "Sketcher External/pl"), tylko pierwszy z nich otrzymuje wiązanie wymiarowe, podczas gdy między pierwszym a pozostałymi stosowane są [wiązania równości](/Sketcher_ConstrainEqual/pl "Sketcher ConstrainEqual/pl").

## Tworzenie skryptów

```
Sketch.addConstraint(Sketcher.Constraint('Radius', ArcOrCircle, App.Units.Quantity('123.0 mm')))
Sketch.addConstraint(Sketcher.Constraint('Diameter', ArcOrCircle, App.Units.Quantity('246.0 mm')))

```

Strona [skrypty szkicownika](/Sketcher_scripting/pl "Sketcher scripting/pl") opisuje wartości, których można użyć dla `ArcOrCircle` i zawiera dalsze przykłady tworzenia wiązań ze skryptów Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainRadiam/pl&oldid=1409638>"