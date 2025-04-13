---
title: Szkicownik Przytnij krawędź
---
|  |
| --- |
| Szkicownik: Przytnij krawędź |
| Lokalizacja w menu |
| Szkic → Narzędzia szkicownika → Przytnij krawędź |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| G T |
| Wprowadzono w wersji |
| 0.12 |
| Zobacz także |
| [Podziel krawędź](/Sketcher_Split/pl "Sketcher Split/pl"), [Rozszerz krawędź](/Sketcher_Extend/pl "Sketcher Extend/pl") |
|  |

## Opis

To narzędzie ![](/images/Sketcher_Trimming.svg) przycina krawędź w miejscu najbliższego przecięcia z innymi krawędziami. Jeśli wybrana krawędź nie przecina innych krawędzi, zostanie usunięta.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

1. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_Trimming.svg) **Przytnij krawędź**.
   * Wybierz z menu opcję **Szkicownik → Narzędzia szkicownika → ![](/images/Sketcher_Trimming.svg) Przytnij krawędź**.
   * Kliknij prawym przyciskiem myszy w oknie [widoku 3D](/3D_view/pl "3D view/pl") i z menu podręcznego wybierz opcję **![](/images/Sketcher_Trimming.svg) Przytnij krawędź**.
   * Użyj skrótu klawiaturowego: G, a następnie T.
2. Jeśli istnieje poprzednie zaznaczenie, zostanie ono usunięte. Narzędzie nie akceptuje wstępnego zaznaczenia.
3. Kursor zmienia się w krzyżyk z ikoną narzędzia.
4. Dostępne są dwa tryby:
   * Przycinanie jednym kliknięciem:
     1. Przesuń kursor nad część krawędzi, która ma zostać przycięta.
     2. Krawędź zostanie podświetlona, a punkty przycięcia zostaną oznaczone tymczasowymi okręgami.
     3. Kliknij, aby potwierdzić.
     4. Krawędź zostanie przycięta w zaznaczonych punktach.
   * Przytrzymaj i przeciągnij: [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
     1. Przytrzymaj lewy przycisk myszki.
     2. Przesuń kursor nad fragmenty krawędzi, które mają zostać przycięte.
     3. Przycinanie następuje natychmiast.
     4. Zwolnij lewy przycisk myszy.
5. Jeśli fragment zostanie wycięty, istniejące wiązania zostaną przeniesione na nową krawędź. Wiązania [Punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl") są dodawane między punktem*(ami)* końcowym*(i)* przyciętej krawędzi a krawędzią*(ami)* tnącą*(i)*.
6. To narzędzie zawsze działa w trybie kontynuacji: opcjonalnie kontynuuj przycinanie krawędzi.
7. Aby zakończyć, kliknij w pustym obszarze w [widoku 3D](/3D_view/pl "3D view/pl"), kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Trimming/pl&oldid=1414370>"