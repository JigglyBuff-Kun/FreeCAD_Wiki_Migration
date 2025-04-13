---
title: Szkicownik Wiązanie prostopadłości
---
|  |
| --- |
| Szkicownik: Wiązanie prostopadłości |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Wiązanie prostopadłości |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| N |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Szkicownik: Wiązanie kąta](/Sketcher_ConstrainAngle/pl "Sketcher ConstrainAngle/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainPerpendicular.svg) **Wiązanie prostopadłości** wymusza prostopadłość dwóch linii lub dwóch krawędzi lub osi. Linie są traktowane jako nieskończone, a otwarte krzywe są również wirtualnie wydłużone. Wiązanie może również łączyć dwie krawędzie, wymuszając ich prostopadłość w miejscu połączenia.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_ConstrainPerpendicular.svg) **Wiązanie prostopadłości**.
   * Wybierz z menu **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainPerpendicular.svg) Wiązanie prostopadłości**.
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz **Wiązanie → ![](/images/Sketcher_ConstrainPerpendicular.svg) Wiązanie prostopadłości** z menu podręcznego.
   * Użyj skrótu klawiaturowego: N.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wykonaj jedną z następujących czynności:
   * Wybierz dwie krawędzie. Jedna z krawędzi musi być linią prostą lub osią. Druga może być dowolną krawędzią z wyjątkiem krzywej złożonej.
   * Wybierz punkt i dwie krawędzie *(w tej kolejności)*.
   * Wybierz krawędź, punkt i inną krawędź *(w tej samej kolejności)*.
5. Dodawane jest wiązanie prostopadłe. Jeśli wybrano punkt i dwie krawędzie, można również dodać maksymalnie dwa wiązania [punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl"). Zobacz [przykłady](#Between_two_edges_at_point/pl).
6. Opcjonalnie kontynuuj tworzenie wiązań.
7. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wykonaj jedną z następujących czynności:
   * Wybierz dwie krawędzie *(patrz wyżej)*.
   * Wybierz dwa punkty końcowe należące do różnych krawędzi.
   * Wybierz krawędź i punkt końcowy innej krawędzi *(w dowolnej kolejności)*.
   * Wybierz punkt i dwie krawędzie *(analogicznie)*.
2. Wywołaj narzędzie w sposób opisany powyżej lub z następującą dodatkową opcją:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz **Wiązanie → ![](/images/Sketcher_ConstrainPerpendicular.svg) Wiązanie prostopadłości** z menu podręcznego.
3. Dodawane jest wiązanie prostopadłe. Jeśli wybrano punkt i dwie krawędzie, można również dodać maksymalnie dwa wiązania [punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl"). Zobacz [przykłady](#Between_two_edges_at_point/pl).

## Przykłady

### Między dwiema krawędziami

![](/images/Sketcher_ConsraintPerpendicular_mode1.png)

Dwie krawędzie są prostopadłe w miejscu ich (wirtualnego) przecięcia. Jeśli jedna z krawędzi jest [stożkiem](/Sketcher_Workbench/pl#Sketcher_CompCreateConic "Sketcher Workbench/pl"), dodawany jest [obiekt punktu](/Sketcher_CreatePoint/pl "Sketcher CreatePoint/pl"), który ma [wiązanie punk na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl") z obiema *(przedłużonymi)* krawędziami.

### Między dwoma punktami końca

![](/images/Sketcher_ConsraintPerpendicular_mode2.png)

Punkty końcowe są zbieżne, a krawędzie są prostopadłe w tym punkcie.

### Między krawędzią a punktem końcowym

![](/images/Sketcher_ConsraintPerpendicular_mode3.png)

Punkt końcowy jednej krawędzi jest ograniczony tak, aby leżał na drugiej krawędzi, a krawędzie są prostopadłe w tym punkcie.

### Między dwiema krawędziami w punkcie

![](/images/Sketcher_ConsraintPerpendicular_mode4.png)

Dwie krawędzie są prostopadłe w danym punkcie. Punktem może być dowolny punkt, np. środek okręgu, punkt końcowy krawędzi lub początek, może on należeć do jednej z krawędzi, a także może być [obiektem punktu](/Sketcher_CreatePoint/pl "Sketcher CreatePoint/pl"). W razie potrzeby dodawane są wiązania [punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl"), aby zapewnić, że punkt leży na obu *(przedłużonych)* krawędziach. Te dodatkowe wiązania nazywane są [wiązaniami pomocniczymi](/Sketcher_helper_constraint/pl "Sketcher helper constraint/pl").

## Tworzenie skryptów

Ograniczenie prostopadłe może być utworzone przez [makropolecenie](/Macros/pl "Macros/pl") i z konsoli Pyton za pomocą następujących narzędzi:

```
# direct perpendicularity
Sketch.addConstraint(Sketcher.Constraint('Perpendicular',icurve1,icurve2))

# point-to-point perpendicularity
Sketch.addConstraint(Sketcher.Constraint('Perpendicular',icurve1,pointpos1,icurve2,pointpos2))

# point-to-curve perpendicularity
Sketch.addConstraint(Sketcher.Constraint('Perpendicular',icurve1,pointpos1,icurve2))

# perpendicular-via-point (plain constraint, helpers are not added automatically)
Sketch.addConstraint(Sketcher.Constraint('PerpendicularViaPoint',icurve1,icurve2,geoidpoint,pointpos))

```

Gdzie:

:   * `Sketch` jest obiektem szkicu
    * `icurve1`, `icurve2` są dwiema liczbami całkowitymi określającymi krzywe, które mają być wykonane prostopadle. Liczby całkowite są indeksami w szkicu *(wartość zwracana przez Sketch.addGeometry)*.
    * `pointpos1`, `pointpos2` powinny mieć wartość `1` dla punktu początkowego i `2` dla końcowego.
    * `geoid point` i `pointpos` w PerpendicularViaPoint są indeksami określającymi punkt prostopadłościanu.

Strona [skrypty szkicownika](/Sketcher_scripting "Sketcher scripting") wyjaśnia wartości, które mogą być użyte do `icurve1`, `icurve2`, `pointpos1`, `pointpos2` i `geoidpoint`, i zawiera dalsze przykłady, jak tworzyć wiązania ze skryptów Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainPerpendicular/pl&oldid=1406895>"