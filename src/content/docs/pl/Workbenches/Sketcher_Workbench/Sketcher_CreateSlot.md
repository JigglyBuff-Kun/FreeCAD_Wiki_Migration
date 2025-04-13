---
title: Szkicownik Utwórz owal
---
|  |
| --- |
| Szkicownik: Utwórz owal |
| Lokalizacja w menu |
| Szkic → Elementy geometryczne szkicownika → Utwórz owal |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| G S |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Utwórz owal na łuku](/Sketcher_CreateArcSlot/pl "Sketcher CreateArcSlot/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_CreateSlot.svg) **Utwórz owal** tworzy szczelinę, zamkniętą polilinię składającą się z dwóch półkoli połączonych dwiema równoległymi liniami prostymi.

![](/images/SketcherCreateSlotExample.png)

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

Pos-OVP = Pozycyjne [Parametry w widoku](/Sketcher_Preferences#Ogólne/pl "Sketcher Preferences"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")  
Dim-OVP = Wymiarowe parametry w widoku. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

1. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_CreateSlot.svg) Utwórz szczelinę.
   * Wybierz z menu opcję **Szkic → Elementy geometryczne szkicownika → ![](/images/Sketcher_CreateSlot.svg) Utwórz szczelinę**.
   * Skrót klawiaturowy: G, a następnie S.
2. Kursor zmieni się w krzyżyk z ikoną narzędzia.
3. Wybierz środek pierwszego półkola. Lub za pomocą Pos-OVP: wprowadź jego współrzędne X i / lub Y.
4. Wybierz środek drugiego półkola. Lub za pomocą Dim-OVP: wprowadź odległość między środkami i / lub kąt szczeliny. Kąt odnosi się do osi X szkicu.
5. Wybierz punkt, aby zdefiniować promień szczeliny. Lub za pomocą Dim-OVP: wprowadź ten promień.
6. Szczelina jest tworzona i dodawane są odpowiednie wiązania oparte na Pos-OVP i Dim-OVP.
7. Jeśli narzędzie działa w [trybie kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl"):
   1. Opcjonalnie kontynuuj tworzenie szczelin.
   2. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

## Uwagi

* wersja 0.21 i poniżej *([dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl"))*: Przytrzymanie Ctrl podczas wybierania drugiego środka ograniczy rysowanie szczeliny w poziomie lub w pionie.
* [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): [Przyciąganie do kąta](/Sketcher_Snap/pl "Sketcher Snap/pl") może być używane do kontrolowania kąta szczeliny.
* [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl"): Szczelina może być również ograniczona poziomo lub pionowo, jeśli włączona jest opcja [Wiązania automatyczne](/Sketcher_Workbench/pl#Wiązania_automatyczne "Sketcher Workbench/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateSlot/pl&oldid=1403372>"