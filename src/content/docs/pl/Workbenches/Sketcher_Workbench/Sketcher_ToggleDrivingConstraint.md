---
title: Szkicownik Przełącz kontrolę wiązania
---
|  |
| --- |
| Szkicownik: Przełącz kontrolę wiązania |
| Lokalizacja w menu |
| Szkic → Wiązania szkicownika → Przełącz kontrolę wiązania |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| K X |
| Wprowadzono w wersji |
| 0.16 |
| Zobacz także |
| [Przełącz aktywność wiązania](/Sketcher_ToggleActiveConstraint/pl "Sketcher ToggleActiveConstraint/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ToggleDrivingConstraint.svg) **Przełącz kontrolę wiązania** albo przełącza [narzędzia do tworzenia wiązań wymiarowych](/Sketcher_Workbench/pl#Sketcher_CompDimensionTools "Sketcher Workbench/pl") pomiędzy trybem konstrukcyjnym a trybem odniesienia, albo przełącza wybrane wiązania wymiarowe pomiędzy tymi trybami.

W przeciwieństwie do wiązań prowadzących, wiązania referencyjne nie wiążą szkicu, ich wartość zależy od innych wiązań, są one sterowane. Mogą być przydatne do weryfikacji pomiarów. Mogą być używane w [wyrażeniach](/Expressions/pl "Expressions/pl"), ale nie w samym szkicu.

![](/images/Sketcher_ToggleConstraint_example.png)

W celu zdefiniowania profilu ustawiono poziome wiązanie odniesienia odległości *(`50 mm`)*, wiązanie odniesienia pionowe *(`30 mm`)* oraz wiązanie odniesienia kąta *(`75°`); na odcinku linii ukośnej dodano wymiar odniesienia, aby poznać jego długość* (31,0583 mm)*.*

## Użycie

### Przełączanie narzędzi

1. Naciśnij przycisk ![](/images/Sketcher_ToggleDrivingConstraint.svg) Przełącz kontrolę wiązania. Ikony wiązań wymiarowych na pasku narzędzi Wiązania szkicownika zmieniają kolor z czerwonego na niebieski.
2. Zwykła metoda tworzenia wiązań wymiarowych działa tak samo, ale zamiast tego dodawany jest niebieski wymiar porównawczy.
3. Aby przywrócić pasek narzędzi Wiązania szkicownik do trybu konstrukcyjnego *(czerwony)*, naciśnij ponownie przycisk **Przełącz kontrolę wiązania**.
4. Aby przekształcić wiązanie wymiarowe w wymiar informacyjny lub odwrotnie, wybierz je i naciśnij przycisk **Przełącz kontrolę wiązania**.

1. Upewnij się, że nie wybrano żadnych wiązań wymiarowych.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_ToggleDrivingConstraint.svg) **Przełącz kontrolę wiązania**.
   * Wybierz z menu opcję **Szkic → Elementy geometryczne szkicownika → ![](/images/Sketcher_ToggleDrivingConstraint.svg) Przełącz kontrolę wiązania**.
   * Użyj skrótu klawiaturowego: K, a następnie X.
3. Tryb narzędzi do tworzenia wiązań wymiarowych jest przełączany:
   * W trybie kontroli ich ikony w menu i na pasku narzędzi są czerwone i tworzą wiązania kontrolujące *(domyślnie [kolor](/Sketcher_Preferences/pl#Wygląd "Sketcher Preferences/pl") czerwony)*. Ikona tego narzędzia to: ![](/images/Sketcher_ToggleConstraint.svg).
   * W trybie odniesienia ikony menu i paska narzędzi są niebieskie i tworzą wiązania odniesienia *(domyślny kolor niebieski)*. Ikona tego narzędzia to: ![](/images/Sketcher_ToggleConstraint_Driven.svg).

### Przełączanie wiązań

1. Wybierz jedno lub więcej wiązań wymiarowych.
2. Wywołaj narzędzie w sposób opisany powyżej lub z jedną z następujących dodatkowych opcji:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Kliknij prawym przyciskiem myszy w oknie [widoku 3D](/3D_view/pl "3D view/pl") i wybierz z menu kontekstowego **![](/images/Sketcher_ToggleDrivingConstraint.svg) Przełącz kontrolę wiązania**.
   * Kliknij prawym przyciskiem myszy w sekcji **Wiązania** w [oknie dialogowym](/Sketcher_Dialog/pl "Sketcher Dialog/pl") i wybierz opcję **Przełącz z / do trybu konstrukcyjnego** z menu podręcznym.
3. Wybrane wiązania zostaną zmienione z trybu kontroli na tryb odniesienia lub odwrotnie. Ich wygląd zmienia się odpowiednio.
4. Tryb narzędzi do tworzenia wiązań wymiarowych nie ulega zmianie.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ToggleDrivingConstraint/pl&oldid=1497744>"