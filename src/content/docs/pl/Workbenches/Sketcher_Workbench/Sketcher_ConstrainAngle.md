---
title: Szkicownik Wiązanie kąta
---
|  |
| --- |
| Szkicownik: Wiązanie kąta |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Wiązanie kąta |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| K A |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wiązanie prostopadłości](/Sketcher_ConstrainPerpendicular/pl "Sketcher ConstrainPerpendicular/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainAngle.svg) **Wiązanie kąta** ustala kąt pomiędzy dwiema krawędziami *(linie są wówczas traktowane jako nieskończone, a otwarte krzywe również są wirtualnie wydłużane)*, kąt linii z poziomą osią szkicu lub kątem rozwarcia łuku kołowego.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli [preferencja](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") **Wiązania wymiarów** jest ustawiona na `Narzędzie pojedyncze` *(domyślnie)*: naciśnij strzałkę w dół po prawej stronie przycisku ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) i wybierz opcję **![](/images/Sketcher_ConstrainAngle.svg) Wiązanie kąta** z rozwijanej listy.
   * Jeśli ta preferencja ma inną wartość *(i w 0.21 and below)*: naciśnij ![](/images/Sketcher_ConstrainAngle.svg) **Wiązanie kąta**.
   * Wybierz z menu opcję **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainAngle.svg) Wiązanie kąta**.
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Wiązania wymiarów → ![](/images/Sketcher_ConstrainAngle.svg) Wiązanie kąta** z menu podręcznego.
   * Użyj skrótu klawiaturowego: K, a następnie A.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wykonaj jedną z następujących czynności:
   * Wybierz dwie linie.
   * Wybierz punkt i dwie krawędzie *(w tej kolejności)*.
   * Wybierz krawędź, punkt i krawędź *(w tej samej kolejności)*.
5. Jeśli utworzono [konstrukcyjne wiązanie wymiarów](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl"), w zależności od [ustawień](/Sketcher_Preferences/pl#Wyświetlanie "Sketcher Preferences/pl"), otworzy się okno dialogowe [wstaw kąt](/Sketcher_Workbench/pl#Edycja_wiązań "Sketcher Workbench/pl"). Wartość ujemna spowoduje odwrócenie kierunku kąta.
6. Dodawane jest wiązanie kątowe. Jeśli wybrano punkt i dwie krawędzie, można również dodać maksymalnie dwa wiązania [punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl"). Zobacz [przykłady](#Między_dwiema_krawędziami_w_punkcie).
7. Opcjonalnie kontynuuj tworzenie wiązań.
8. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wykonaj jedną z następujących czynności:
   * Wybierz pojedynczą linię.
   * Wybierz pojedynczy łuk kołowy.
   * Wybierz dwie linie.
   * Wybierz punkt i dwie krawędzie (w dowolnej kolejności).
2. Wywołaj narzędzie w sposób opisany powyżej.
3. Opcjonalnie [edytuj wartość wiązania](/Sketcher_Workbench/pl#Edycja_wiązań "Sketcher Workbench/pl").
4. Dodawane jest wiązanie kątowe. Jeśli wybrano punkt i dwie krawędzie, można również dodać maksymalnie dwa wiązania [punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl"). Zobacz akapit [przykłady](#Między_dwiema_krawędziami_w_punkcie).

## Przykłady

### Pojedyncza linia

![](/images/Sketcher_ConsraintAngle_mode1.png)

Kąt linii względem dodatniej osi X szkicu jest stały.

### Pojedynczy łuk kołowy

![](/images/Sketcher_ConsraintAngle_mode2.png)

Kąt rozwarcia łuku jest stały.

### Pomiędzy dwoma liniami

![](/images/Sketcher_ConsraintAngle_mode3.png)

Kąt między dwiema liniami jest stały. Nie jest wymagane, aby linie się przecinały.

### Między dwiema krawędziami w punkcie

![](/images/Sketcher_ConsraintAngle_mode4.png)

Kąt między dwiema krawędziami w danym punkcie jest stały. Punktem może być dowolny punkt, np. środek okręgu, punkt końcowy krawędzi lub początek, może on należeć do jednej z krawędzi, a także może być [obiektem punktu](/Sketcher_CreatePoint/pl "Sketcher CreatePoint/pl"). W razie potrzeby dodawane są wiązania [punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl"), aby zapewnić, że punkt leży na obu *(przedłużonych)* krawędziach. Te dodatkowe wiązania nazywane są [wiązaniami pomocniczymi](/Sketcher_helper_constraint/pl "Sketcher helper constraint/pl").

## Tworzenie skryptów

Ograniczenie kąta może być utworzone przez [makropolecenie](/Macros/pl "Macros/pl") i z konsoli [Pyton](/Python/pl "Python/pl") za pomocą następujących narzędzi:

```
# line slope angle
Sketch.addConstraint(Sketcher.Constraint('Angle',iline,angle))

# angular span of arc
Sketch.addConstraint(Sketcher.Constraint('Angle',iarc,angle))

# angle between lines
Sketch.addConstraint(Sketcher.Constraint('Angle',iline1,pointpos1,iline2,pointpos2,angle))

# angle-via-point (no helper constraints are added automatically when from python)
Sketch.addConstraint(Sketcher.Constraint('AngleViaPoint',icurve1,icurve2,geoidpoint,pointpos,angle))

```

gdzie:

:   * `Sketch` jest obiektem typu szkic,
    * `iline, iline1, iline2` są liczbami całkowitymi określającymi wiersze za pomocą ich liczb porządkowych w obiekcie `Sketch`.
    * `pointpos1, pointpos2` przyjmuje wartość 1 dla punktu początkowego i 2 dla końcowego. Wybór punktów końcowych pozwala na ustawienie kąta wewnętrznego *(lub zewnętrznego)*, a także wpływa na sposób narysowania wiązania na ekranie,
    * `geoidpoint` oraz `pointpos` w `AngleViaPoint` są indeksami określającymi punkt przecięcia,
    * `angle` to wartość kąta w radianach. Kąt jest liczony pomiędzy wektorami stycznymi w kierunku przeciwnym do ruchu wskazówek zegara. to wartość kąta w radianach. Kąt jest liczony pomiędzy wektorami stycznymi w kierunku przeciwnym do ruchu wskazówek zegara. Wektory styczne dla linii są wskazywane od punktu początkowego do końcowego *(lub odwrotnie, jeżeli punkt końcowy jest podany w trybie kąta między liniami)*, zgodnie z kierunkiem przeciwnym do ruchu wskazówek zegara. Ilość jest również przyjmowana jako kąt (np. `App.Units.Quantity('45 deg')`)

Strona [Skrypty szkicownika](/Sketcher_scripting/pl "Sketcher scripting/pl") wyjaśnia wartości, które mogą być używane dla `iline`, `iline1`, `iline2`, `pointpos1`, `pointpos2`, `geoidpoint` i `pointpos`, a także zawiera kolejne przykłady tworzenia wiązań za pomocą skryptów języka Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainAngle/pl&oldid=1406053>"