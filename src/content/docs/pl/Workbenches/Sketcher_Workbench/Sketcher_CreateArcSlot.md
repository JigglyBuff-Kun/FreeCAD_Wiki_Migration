---
title: Szkicownik Utwórz owal na łuku
---

|                                                                      |
| -------------------------------------------------------------------- |
| Szkicownik: Utwórz owal na łuku                                      |
| Lokalizacja w menu                                                   |
| Sketch → Elementy geometryczne szkicownika → Utwórz szczelinę łukową |
| Środowisko pracy                                                     |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl")         |
| Domyślny skrót                                                       |
| G S 2                                                                |
| Wprowadzono w wersji                                                 |
| 1.0                                                                  |
| Zobacz także                                                         |
| [Utwórz owal](/Sketcher_CreateSlot/pl "Sketcher CreateSlot/pl")      |
|                                                                      |

## Opis

Narzędzie ![](/images/Sketcher_CreateArcSlot.svg) **Utwórz szczelinę łukową** tworzy szczelinę łukową, zamkniętą polilinię składającą się z dwóch równoległych koncentrycznych łuków zamkniętych dwoma półokręgami lub dwiema promieniowymi liniami prostymi.

![](/images/Sketcher_CreateArcSlot_Example.png)

Szczelina łukowa _(biały)_ z wewnętrzną geometrią _(ciemnożółta)_.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

Pos-OVP = Pozycyjne [Parametry w widoku](/Sketcher_Preferences#Ogólne/pl "Sketcher Preferences"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")  
Dim-OVP = Wymiarowe parametry w widoku. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

1. Istnieje kilka sposobów wywołania narzędzia:
   - Naciśnij przycisk ![](/images/Sketcher_CreateArcSlot.svg) **Utwórz szczelinę łukową**.
   - Wybierz z menu opcję **Szkic → Elementy geometryczne szkicownika → ![](/images/Sketcher_CreateArcSlot.svg) Utwórz szczelinę łukową**.
   - Skrót klawiaturowy: G, S, 2.
2. Kursor zmieni się w krzyżyk z ikoną narzędzia.
3. Sekcja **Parametry szczeliny łukowej** jest dodawana w górnej części [okna dialogowego](/Sketcher_Dialog/pl "Sketcher Dialog/pl").
4. Opcjonalnie naciśnij klawisz M lub wybierz z rozwijanej listy w sekcji parametrów, aby zmienić tryb narzędzia:
   - ![](/images/Sketcher_CreateArcSlot.svg) **Końce łuku**:
     1. Wybierz środek szczeliny łuku. Lub z Pos-OVP: wprowadź jego współrzędne X i / lub Y.
     2. Wybierz środek pierwszego półokręgu, który definiuje również promień _(wirtualnej)_ linii środkowej szczeliny. Lub za pomocą Dim-OVP: wprowadź promień i / lub kąt początkowy szczeliny. Kąt jest odniesiony do osi X szkicu. Dla tego kąta nie jest tworzone żadne wiązanie.
     3. Wybierz środek drugiego półkola. Lub z Dim-OVP: wprowadź kąt apertury łuku linii środkowej.
     4. Wybierz punkt, aby zdefiniować promień półkola. Lub za pomocą Dim-OVP: wprowadź ten promień.
   - ![](/images/Sketcher_CreateRectangleSlot.svg) **Płaskie końce**:
     1. Wybierz środek szczeliny łuku. Lub z Pos-OVP: wprowadź jego współrzędne X i / lub Y.
     2. Wybierz punkt początkowy pierwszego łuku, to również definiuje jego promień

## Uwagi

- Punkty wybrane do zdefiniowania promienia półokręgów lub przesunięcia łuków wewnętrznych i zewnętrznych nie muszą dotykać geometrii, odległość od kursora do środka gniazda faktycznie kontroluje wartość.
- W trybie **Końce łuku** pierwszy promień dotyczy wirtualnego łuku środkowego, podczas gdy w trybie **Płaskie końce** dotyczy on jednego z łuków konturowych.
- Jeśli wprowadzona wartość szerokości w trybie **Płaskie końce** jest dodatnia, związany łuk staje się łukiem wewnętrznym, dla wartości ujemnej będzie to łuk zewnętrzny.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArcSlot/pl&oldid=1414314>"
