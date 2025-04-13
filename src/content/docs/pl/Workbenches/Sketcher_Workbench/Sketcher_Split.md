---
title: Szkicownik Podziel krawędź
---
|  |
| --- |
| Szkicownik: Podziel krawędź |
| Lokalizacja w menu |
| Szkic → Narzędzia szkicownika → Podziel krawędź |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| G Z |
| Wprowadzono w wersji |
| 0.20 |
| Zobacz także |
| [Przytnij krawędź](/Sketcher_Trimming/pl "Sketcher Trimming/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_Split.svg) **Podziel krawędź** dzieli krawędź. Jeśli krawędź jest krzywą zamkniętą *(np. okrąg, elipsa lub krzywa złozona okresowa)*, jest ona konwertowana na krzywą otwartą *(odpowiednio łuk, łuk elipsy lub krzywa złozona nieokresowa)*.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

1. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_Split.svg) **Podziel krawędź**.
   * Wybierz z menu opcję **Szkic → Narzędzia szkicownika → ![](/images/Sketcher_Split.svg) Podziel krawędź**.
   * Użyj skrótu klawiaturowego: G, a następnie Z.
2. Jeśli istnieje poprzednie zaznaczenie, zostanie ono usunięte. Narzędzie nie akceptuje wcześniejszego zaznaczenia.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Kliknij krawędź w miejscu, w którym ma zostać podzielona.
5. Jeśli oryginalna krawędź jest linią lub krzywą otwartą, utworzone zostaną dwie nowe krawędzie połączone wiązaniem [zbieżności punktów](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl"). W przypadku krzywych zamkniętych tworzona jest nowa krzywa otwarta, a nowy punkt nie otrzymuje wiązania zbieżności. Istniejące wiązania są przenoszone na nowe krawędzie. Zobacz [Uwagi](#Uwagi).
6. To narzędzie zawsze działa w trybie kontynuacji: opcjonalnie kontynuuj dzielenie krawędzi.
7. Aby zakończyć, kliknij w pustym obszarze w oknie [widoku 3D](/3D_view/pl "3D view/pl"), kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

## Uwagi

* Wiązanie [zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl") jest stosowane do punktów środkowych nowych łuków.
* Wiązania [promienia](/Sketcher_ConstrainRadius/pl "Sketcher ConstrainRadius/pl") i [średnicy](/Sketcher_ConstrainDiameter "Sketcher ConstrainDiameter") są kopiowane do nowych łuków *(co powoduje redundancję)*.
* Wiązania zbieżności i [punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl") są przenoszone do najbliższej nowej krawędzi.
* Więzy [poziomu](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl") i [pionu](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl") między punktami są przenoszone do najbliższej nowej krawędzi.
* Wiązania poziome i pionowe dołączone do linii są kopiowane do nowych segmentów linii.
* Wiązania [równoległości](/Sketcher_ConstrainParallel/pl "Sketcher ConstrainParallel/pl") i [prostopadłości](/Sketcher_ConstrainPerpendicular/pl "Sketcher ConstrainPerpendicular/pl") są kopiowane do nowych segmentów linii, dla nowych łuków są one kopiowane tylko do najbliższego.
* Wiązania [odległość pozioma](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl"), [odległość pionowa](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl") i [odległość](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl") są przenoszone na najbliższą nową krawędź.
* Wiązania [kąta](/Sketcher_ConstrainAngle/pl "Sketcher ConstrainAngle/pl"), [symetrii](/Sketcher_ConstrainSymmetric/pl "Sketcher ConstrainSymmetric/pl") i [zablokowania](/Sketcher_ConstrainBlock/pl "Sketcher ConstrainBlock/pl") nie są obecnie przenoszone.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Split/pl&oldid=1467479>"