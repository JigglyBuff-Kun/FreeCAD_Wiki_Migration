---
title: Szkicownik Przekształcenie skali
---
|  |
| --- |
| Szkicownik: Przekształcenie skali |
| Lokalizacja w menu |
| Szkic → Narzędzia szkicownika → Przekształcenie skali |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| Z P S |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Sketcher_Scale.svg) **Przekształcenie skali** skaluje lub opcjonalnie tworzy skalowane kopie wybranych elementów.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

Pos-OVP = Pozycyjne [Parametry w widoku](/Sketcher_Preferences#Ogólne/pl "Sketcher Preferences"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")  
Dim-OVP = Wymiarowe parametry w widoku. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

1. Wybierz jedną lub więcej krawędzi i / lub obiektów [punktów](/Sketcher_CreatePoint/pl "Sketcher CreatePoint/pl"). Więzy nałożone na wybrane elementy są również przetwarzane. Jeśli oryginalne elementy zostaną przeskalowane, wszelkie inne powiązane z nimi wiązania zostaną usunięte.
2. Narzędzie można wywołać na kilka sposobów:
   * Naciśnięcie przycisku ![](/images/Sketcher_Scale.svg) **Przekształcenie skali**.
   * Wybierz z menu opcję **Szkic → Narzędzia szkicownika → ![](/images/Sketcher_Scale.svg) Przekształcenie skali**.
   * Kliknij prawym przyciskiem myszy w [3D view](/3D_view "3D view") i wybierz opcję **![](/images/Sketcher_Scale.svg) Przekształcenie skali** z menu podręcznego.
   * Użyj skrótu klawiaturowego: Z, następnie P, a potem S.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Sekcja **Parametry skalowania** jest dodawana w górnej części [okna dialogowego](/Sketcher_Dialog/pl "Sketcher Dialog/pl").
5. Opcjonalnie naciśnij klawisz U lub zaznacz pole wyboru **Zachowaj oryginalne geometrie**, aby utworzyć przeskalowane kopie wybranych elementów.
6. Wybierz punkt bazowy dla operacji skalowania. Lub za pomocą Pos-OVP: wprowadź jego współrzędne X i/lub Y.
7. Wybierz punkt końcowy pierwszej linii pomocniczej. Jej kąt i długość są dowolne.
8. Wybierz punkt końcowy drugiej linii pomocniczej. Jej kąt jest również dowolny. Jego długość w stosunku do długości pierwszej linii pomocniczej określa współczynnik skali. Lub za pomocą Dim-OVP: wprowadź współczynnik skali.
9. Oryginalne elementy są skalowane lub tworzone są skalowane kopie. Nie są dodawane żadne wiązania oparte na Pos-OVP lub Dim-OVP.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Scale/pl&oldid=1409644>"