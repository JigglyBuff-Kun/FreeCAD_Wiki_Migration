---
title: Szkicownik Wiązania wymiarów
---
|  |
| --- |
| Sketcher Dimension |
| Menu location |
| Szkic → Wiązania szkicownika → Wiązania wymiarów |
| Workbenches |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Default shortcut |
| D |
| Introduced in version |
| 1.0 |
| See also |
| *None* |
|  |

## Opis

Narzędzie ![](/images/Sketcher_Dimension.svg) **Wiązania wymiarów** jest kontekstowym narzędziem wiązań w środowisku pracy Szkicownik. W oparciu o bieżący wybór, oferuje odpowiednie wiązania wymiarowe, ale także wiązania geometryczne.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

1. Opcjonalnie wybierz jeden lub więcej elementów *(krawędzi lub punktów)*. Krawędzie [krzywej złożonej](/Sketcher_Workbench#Sketcher_CompCreateBSpline/pl "Sketcher Workbench") nie są obecnie obsługiwane.
2. Istnieje kilka sposobów na wywołanie narzędzia:
   * Jeśli [preferencja](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") **Wiązania wymiarów** jest ustawiona na `Obydwa` lub `Narzędzie pojedyncze` *(domyślnie)*: naciśnij przycisk ![](/images/Sketcher_Dimension.svg) Wiązanie odległości.
   * Wybierz z menu opcję **Szkic → Wiązania szkicownika → ![](/images/Sketcher_Dimension.svg) Wiązania wymiarów**.
   * Kliknij prawym przyciskiem myszy na [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Wymiar → ![](/images/Sketcher_Dimension.svg) Wiązania wymiarów** z menu kontekstowego.
   * Jeśli istnieje zaznaczenie: Kliknij prawym przyciskiem myszy w widoku 3D i wybierz opcję **![](/images/Sketcher_Dimension.svg) Wiązania wymiarów** z menu kontekstowego.
   * Użyj skrótu klawiaturowego: D.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Jeśli nie wybrano jeszcze żadnego elementu: wybierz go.
5. W zależności od wybranych elementów zostanie zaproponowane wiązanie.
6. Opcjonalnie wybierz dodatkowy element.
7. Opcjonalnie usuń zaznaczenie elementu, klikając go ponownie.
8. Proponowane ograniczenie jest aktualizowane po każdej zmianie zaznaczenia.
9. Opcjonalnie naciśnij przycisk M jeden lub więcej razy, aby przełączać się między innymi dostępnymi wiązaniami, jeśli takie istnieją.
10. Jeśli proponowane jest wiązanie geometryczne, wybrane elementy mogą się zmienić, dając podgląd wyniku.
11. Wykonaj jedną z następujących czynności:
    * Kliknij pusty obszar w [3D view](/3D_view/pl "3D view/pl"), aby potwierdzić:
      1. Jeśli tworzone jest wiązanie wymiarowe, kliknięty punkt określa jego położenie. W przypadku wymiaru liniowego kliknięty punkt określa również jego typ: ![](/images/Sketcher_ConstrainDistanceX.svg) [Odległość pozioma](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl"), ![](/images/Sketcher_ConstrainDistanceY.svg) [Odległość pionowa](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl") lub ![](/images/Sketcher_ConstrainDistance.svg) [wiązanie odległości](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl").
      2. Jeśli [wiązanie kontrolujące](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl") zostanie utworzone, w zależności od [preferencji](/Sketcher_Preferences/pl#Wyświetlanie "Sketcher Preferences/pl"), otworzy się okno dialogowe [wstaw długość](/Sketcher_Workbench/pl#Edycja_wiązań "Sketcher Workbench/pl").
      3. Wiązanie jest dodawane.
      4. To narzędzie zawsze działa w trybie kontynuacji: opcjonalnie można kontynuować tworzenie ograniczeń.
    * Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Dimension/pl&oldid=1486953>"