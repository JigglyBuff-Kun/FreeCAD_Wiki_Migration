---
title: Szkicownik Utwórz wielokąt foremny
---
|  |
| --- |
| Szkicownik: Utwórz wielokąt foremny |
| Lokalizacja w menu |
| Szkic → Elementy geometryczne szkicownika → Utwórz wielokąt foremny |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| G P R |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Sketcher_CreateRegularPolygon.svg) **Utwórz wielokąt foremny** tworzy wielokąt regularny.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

Pos-OVP = Pozycyjne [Parametry w widoku](/Sketcher_Preferences#Ogólne/pl "Sketcher Preferences"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")  
Dim-OVP = Wymiarowe parametry w widoku. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

1. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_CreateRegularPolygon.svg) **Utwórz wielokąt foremny**.
   * Wybierz z menu opcję **Szkic → Elementy geometryczne szkicownika → ![](/images/Sketcher_CreateRegularPolygon.svg) Utwórz wielokąt foremny**.
   * Użyj skrótu klawiaturowego: G, P, R.
2. Wprowadź **Liczbę boków** w otwartym oknie dialogowym.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Sekcja **Parametry wielokąta** *([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"))* jest dodawana na górze [okna dialogowego](/Sketcher_Dialog/pl "Sketcher Dialog/pl").
5. Opcjonalnie zmień liczbę **boków** *(można to również zrobić po wybraniu środka)*:
   * Wprowadź liczbę większą niż dwa.
   * Naciśnij przycisk U, aby zwiększyć liczbę.
   * Naciśnij przycisk J, aby zmniejszyć liczbę.
6. Wybierz środek wielokąta. Lub za pomocą Pos-OVP: wprowadź jego współrzędne X i / lub Y.
7. Wybierz pierwszy punkt wielokąta, który definiuje również promień opisanego okręgu. Lub za pomocą Dim-OVP: wprowadź promień okręgu i / lub kąt pierwszego punktu. Kąt jest odniesiony do osi X szkicu. Dla tego kąta nie jest tworzone żadne wiązanie.
8. Tworzony jest wielokąt, w tym opisany okrąg geometrii konstrukcyjnej i dodawane są odpowiednie wiązania oparte na Pos-OVP i Dim-OVP.
9. Jeśli narzędzie działa w [trybie kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl"):
   1. Opcjonalnie kontynuuj tworzenie wielokątów.
   2. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

## Uwagi

* Okrąg geometrii konstrukcji nie jest widoczny poza szkicem. Nie można go usunąć bez naruszenia geometrii wielokąta.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateRegularPolygon/pl&oldid=1403368>"