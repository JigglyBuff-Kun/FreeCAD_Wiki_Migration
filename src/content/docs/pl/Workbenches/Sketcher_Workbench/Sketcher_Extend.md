---
title: Szkicownik Przedłuż krawędź
---
|  |
| --- |
| Szkicownik: Przedłuż krawędź |
| Lokalizacja w menu |
| Szkic → Narzędzia szkicownika → Przedłuż krawędź |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| G Q |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Przytnij krawędź](/Sketcher_Trimming/pl "Sketcher Trimming/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_Extend.svg) **Przedłuż krawędź** wydłuża lub skraca linię lub łuk do dowolnego miejsca lub do docelowej krawędzi lub punktu.

![](/images/Sketcher_Extend_example_01.png)

Rysunek z lewej **(1)**, dwa elementy szkicu przed operacją,  
w środku **(2)**, linia jest przedłużana do łuku,  
z prawej **(3)**, efekt końcowy.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

1. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_Extend.svg) **Przedłuż krawędź**.
   * Wybierz z menu opcję **Szkic → Narzędzia szkicownika → ![](/images/Sketcher_Extend.svg) Przedłuż krawędź**.
   * Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i z menu kontekstowego wybierz opcję **![](/images/Sketcher_Extend.svg) Przedłuż krawędź**.
   * Użyj skrótu klawiaturowego: G, a następnie Q.
2. Jeśli istnieje poprzednie zaznaczenie, zostanie ono usunięte. Narzędzie nie akceptuje wstępnego zaznaczenia.
3. Kursor zmienia się w krzyżyk z ikoną narzędzia.
4. Wybierz linię lub łuk.
5. Przesuń kursor w kierunku, w którym chcesz wydłużyć lub skrócić.
6. Wykonaj jedną z następujących czynności:
   * Kliknij dowolny punkt.
   * Aby wydłużyć / skrócić do innej krawędzi opcja *([wiązania automatyczne](/Sketcher_Workbench/pl#Wiązania_automatyczne "Sketcher Workbench/pl") musi być włączona)*: Umieść kursor nad krawędzią docelową. Gdy jest ona podświetlona, a ikona wiązania ![](/images/Sketcher_ConstrainPointOnObject.svg) [punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl") pojawi się obok kursora, kliknij aby potwierdzić. Wiązanie zostanie dodane.
   * Aby wydłużyć / skrócić do punktu *(automatyczne wiązania muszą być włączone)*: Umieść kursor nad punktem docelowym. Gdy jest on podświetlony i obok kursora pojawi się ikona ![](/images/Sketcher_ConstrainCoincident.svg) [wiązania zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl"), kliknij, aby potwierdzić. Wiązanie zostanie dodane.
7. Jeśli narzędzie działa w [trybie kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl"):
   1. Opcjonalnie kontynuuj wydłużanie / skracanie krawędzi.
   2. Aby zakończyć, kliknij w pustym obszarze w [widoku 3D](/3D_view/pl "3D view/pl"), kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

## Uwagi

* Docelowy obiekt krawędzi lub punktu może być również modyfikowany, jeśli nie jest w pełni związany.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Extend/pl&oldid=1414378>"