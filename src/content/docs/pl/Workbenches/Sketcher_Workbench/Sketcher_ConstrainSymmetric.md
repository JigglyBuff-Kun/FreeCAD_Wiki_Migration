---
title: Szkicownik Wiązanie symetrii
---
|  |
| --- |
| Szkicownik: Wiązanie symetrii |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Wiązanie symetrii |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| S |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ConstrainSymmetric.svg) **Wiązanie symetrii** wiąże dwa punkty, aby były symetryczne wokół linii lub osi, lub wokół trzeciego punktu.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

### [Tryb kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl")

1. Upewnij się, że nie ma zaznaczenia.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_ConstrainSymmetric.svg) **Wiązanie symetrii**.
   * Wybierz z menu **Szkic → Wiązania szkicownika → ![](/images/Sketcher_ConstrainSymmetric.svg) Wiązanie symetrii**.
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Wiązanie → ![](/images/Sketcher_ConstrainSymmetric.svg) Wiązanie symetrii** z menu podręcznego.
   * Użyj skrótu klawiaturowego: S.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wykonaj jedną z następujących czynności:
   * Wybierz dwa punkty i punkt symetrii *(w tej kolejności)*.
   * Wybierz dwa punkty i linię symetrii *(w tej samej kolejności)*.
   * Wybierz punkt, linię symetrii i kolejny punkt *(w tej samej kolejności)*.
   * Wybierz linię i punkt symetrii *(analogicznie)*.
5. Wiązanie zostanie dodane.
6. Opcjonalnie można kontynuować tworzenie wiązań.
7. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

### Tryb jednorazowy

1. Wykonaj jedną z następujących czynności:
   * Wybierz dwa punkty i punkt symetrii *(w tej kolejności)*.
   * Wybierz dwa punkty i linię symetrii *(w dowolnej kolejności)*.
   * Wybierz linię i punkt symetrii *(w tej samej kolejności)*.
2. Wywołaj narzędzie jak wyjaśniono powyżej lub z następującą dodatkową opcją:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w [widok 3D](/3D_view/pl "3D view/pl") i wybierz **![](/images/Sketcher_ConstrainSymmetric.svg) Wiązanie symetrii** z menu podręcznego.
3. Wiązanie zostanie dodane.

## Uwagi

* Strzałki tego wiązania pokazują kolor więzów wymiarowych.

## Tworzenie skryptów

Dwa punkty i linia symetrii:

```
Sketch.addConstraint(Sketcher.Constraint('Symmetric', Line1, PointOfLine1, Line2, PointOfLine2, SymmetryLine))

```

Dwa punkty i punkt symetrii:

```
Sketch.addConstraint(Sketcher.Constraint('Symmetric', Line1, PointOfLine1, Line2, PointOfLine2, LineS, PointOfLineS))

```

Linia i punkt symetrii *(W GUI można wybrać linię i punkt, ale używa się wewnętrznie takiej samej formy jak powyżej, z dwoma końcami tej samej linii)*:

```
Sketch.addConstraint(Sketcher.Constraint('Symmetric', Line, 1, Line, 2, LineS, PointOfLineS))

```

Strona [Skrypty szkicownika](/Sketcher_scripting/pl "Sketcher scripting/pl") wyjaśnia wartości, które mogą być używane dla `Line1`, `Line2`, `LineS`, `Line`, `PointOfLine1`, `PointOfLine2` i `PointOfLineS`, a także zawiera kolejne przykłady tworzenia wiązań za pomocą skryptów języka Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainSymmetric/pl&oldid=1414342>"