---
title: Part Wyciągnięcie przez obrót
---
|  |
| --- |
| Część: Obrót |
| Lokalizacja w menu |
| Część → Obrót ... |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Funkcja ta obraca wybrany obiekt tworząc wyciągnięcie wokół wybranej osi. Dozwolone są następujące typy kształtów, które prowadzą do uzyskania kształtów wyjściowych:

| Kształt wejściowy | Forma wyjściowa |
| --- | --- |
| Wierzchołek | Krawędź |
| Krawędź | Powierzchnia |
| Linia łamana | Powłoka |
| Powierzchnia | Bryła |
| Powłoka | Bryła złozona *(Compsolid)* |

Można też użyć [Szkicu](/Sketcher_Workbench/pl "Sketcher Workbench/pl"). Bryły lub bryły złożone nie są dozwolone jako kształty wejściowe. Również standardowe związki nie są obecnie dozwolone.

![](/images/Dialog-revolve.png)

Argument **Kąt** określa, jak daleko obiekt ma być obrócony. Współrzędne przesuwają początek osi obrotu w stosunku do początku układu współrzędnych.

Jeśli wybierzemy oś zdefiniowaną przez użytkownika, to liczby określają kierunek osi obrotu w stosunku do układu współrzędnych: Jeśli współrzędna Z wynosi 0, a współrzędne Y i X są niezerowe, to oś znajduje się na płaszczyźnie X-Y. Jej kąt jest taki, że jej styczna jest stosunkiem podanych współrzędnych X i Y.

## Uwagi

* Obiekty typu [odnośnik](/App_Link/pl "App Link/pl") powiązane z odpowiednimi typami obiektów mogą być również używane jako kształty i do określania osi. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")
* Jeśli obiekt do obrócenia przecina oś obrotu, operacja nie powiedzie się w większości przypadków.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Revolve/pl&oldid=1281560>"