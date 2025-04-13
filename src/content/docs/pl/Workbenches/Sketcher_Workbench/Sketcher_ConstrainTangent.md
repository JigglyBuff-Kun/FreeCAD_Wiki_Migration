---
title: Szkicownik Wiązanie styczności
---
|  |
| --- |
| Szkicownik: Wiązanie styczności |
| Lokalizacja w menu |
| Sketch → Wiązania szkicownika → Wiązanie styczności |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| T |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainTangent.svg) **Wiązanie styczności** umożliwia ustawienie dwóch krawędzi lub osi jako stycznych. Linie są traktowane jako nieskończone, a otwarte krzywe są również praktycznie rozszerzone. Wiązanie może również łączyć dwie krawędzie, wymuszając ich styczność w miejscu połączenia. Jeśli wybrane zostaną dwie linie lub linia i punkt końcowy innej linii, linie te staną się współliniowe.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_ConstrainTangent.svg) **Wiązanie styczności lub współliniowe**.
   * Wybierz z menu **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainTangent.svg) Wiązanie styczności lub współliniowe**.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view "3D view") i wybierz **Wiązanie → ![](/images/Sketcher_ConstrainTangent.svg) Wiązanie styczności lub współliniowe** z menu podręcznego.
   * Użyj skrótu klawiaturowego: T.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wykonaj jedną z następujących czynności:
   * Wybierz dwie krawędzie. Krawędzie mogą być dowolne z wyjątkiem krawędzi krzywej złożonej.
   * Wybierz punkt i dwie krawędzie *(w tej kolejności)*.
   * Wybierz krawędź, punkt i inną krawędź *(w tej samej kolejności)*.
5. Dodawane jest wiązanie styczne. Jeśli wybrano punkt i dwie krawędzie, można również dodać maksymalnie dwa wiązania [punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl"). Zobacz akapit [z przykładem](#Między_dwiema_krawędziami).
6. Opcjonalnie kontynuuj tworzenie wiązań.
7. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wykonaj jedną z następujących czynności:
   * Wybierz dwie krawędzie *(patrz wyżej)*.
   * Wybierz dwa punkty końcowe należące do różnych krawędzi.
   * Wybierz krawędź i punkt końcowy innej krawędzi *(w dowolnej kolejności)*.
   * Wybierz punkt i dwie krawędzie *(analogicznie)*.
2. Wywołaj narzędzie jak wyjaśniono powyżej lub z następującą dodatkową opcją:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz **![](/images/Sketcher_ConstrainTangent.svg) Wiązanie styczności lub współliniowe** z menu podręcznego.
3. Zostanie dodane wiązanie styczności. Jeśli wybrano punkt i dwie krawędzie, można również dodać maksymalnie dwa wiązania [punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl"). Zobacz akapit [z przykładem](#Między_dwiema_krawędziami).

## Przykłady

### Między dwiema krawędziami

![](/images/Sketcher_ConsraintTangent_mode1.png)

Dwie krawędzie stają się styczne. Jeśli jedna z krawędzi jest [stożkiem](/Sketcher_Workbench/pl#Sketcher_CompCreateConic "Sketcher Workbench/pl"), dodawany jest [obiekt punktu](/Sketcher_CreatePoint/pl "Sketcher CreatePoint/pl"), który ma [wiązanie punk na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl") z obiema *(przedłużonymi)* krawędziami.

Nie zaleca się rekonstrukcji punktu styczności poprzez ręczne utworzenie punktu i związanie go tak, aby leżał na obu krzywych. Będzie to działać, ale zbieżność będzie znacznie wolniejsza, bardziej skokowa i będzie wymagać około dwa razy więcej iteracji niż normalnie. Jeśli potrzebny jest punkt styczny, wybierz dwie krawędzie i istniejący punkt.

### Między dwoma punktami końca

![](/images/Sketcher_ConsraintTangent_mode2.png)

Punkty końcowe są zbieżne, a kąt między krawędziami w tym punkcie jest ustawiony na 180° *(gładkie połączenie)* lub 0° *(ostre połączenie)*, w zależności od położenia krawędzi przed zastosowaniem wiązania.

### Między krawędzią a punktem końcowym

![](/images/Sketcher_ConsraintTangent_mode3.png)

Punkt końcowy jednej krawędzi jest związany tak, aby leżał na drugiej krawędzi, a krawędzie są styczne w tym punkcie.

### Między dwiema krawędziami w punkcie

![](/images/Sketcher_ConsraintTangent_mode4.png)

Dwie krawędzie są styczne w danym punkcie. Punktem może być dowolny punkt, np. środek okręgu, punkt końcowy krawędzi lub początek, może on należeć do jednej z krawędzi, a także może być [obiektem punktu](/Sketcher_CreatePoint/pl "Sketcher CreatePoint/pl"). W razie potrzeby dodawane są wiązania [punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl"), aby zapewnić, że punkt leży na obu *(przedłużonych)* krawędziach. Te dodatkowe wiązania nazywane są [wiązaniami pomocniczymi](/Sketcher_helper_constraint/pl "Sketcher helper constraint/pl").

W porównaniu z bezpośrednią stycznością, to wiązanie jest wolniejsze, ponieważ wiąże się z nim więcej stopni swobody, ale jeśli punkt styczności jest potrzebny, jest to zalecane, ponieważ zapewnia lepszą zbieżność.

### Pomiędzy dwiema liniami

![](/images/Sketcher_ConstraintTangent_mode5.png)

Obie linie są współliniowe.

## Tworzenie skryptów

Wiązanie styczności może być utworzone przez [makropolecenie](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
# direct tangency
Sketch.addConstraint(Sketcher.Constraint('Tangent',icurve1,icurve2))

# point-to-point tangency
Sketch.addConstraint(Sketcher.Constraint('Tangent',icurve1,pointpos1,icurve2,pointpos2))

# point-to-curve tangency
Sketch.addConstraint(Sketcher.Constraint('Tangent',icurve1,pointpos1,icurve2))

# tangent-via-point (plain constraint, helpers are not added automatically)
Sketch.addConstraint(Sketcher.Constraint('TangentViaPoint',icurve1,icurve2,geoidpoint,pointpos))

```

gdzie:

:   * `Sketch` jest obiektem typu szkic
    * `icurve1`, `icurve2` są dwiema liczbami całkowitymi określającymi krzywe, które mają być styczne. Liczby całkowite to wskaźniki w szkicu *(wartość zwracana przez`Sketch.addGeometry`)*.
    * `pointpos1`, `pointpos2` powinny wynosić `1` dla punktu początkowego i `2` dla punktu końcowego.
    * `geoidpoint` oraz `pointpos` w `TangentViaPoint` są wskaźnikami określającymi punkt styczności.

Strona [Skrypty szkicownika](/Sketcher_scripting/pl "Sketcher scripting/pl") wyjaśnia wartości, które mogą być używane dla `incurve1`, `incurve2`, `pointpos1`, `pointpos2`, `geoidpoint` i `pointpos`, a także zawiera kolejne przykłady tworzenia wiązań za pomocą skryptów języka Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainTangent/pl&oldid=1438143>"