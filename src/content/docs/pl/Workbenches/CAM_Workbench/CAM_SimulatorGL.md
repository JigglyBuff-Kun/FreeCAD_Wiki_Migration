---
title: CAM Nowy symulator
---
|  |
| --- |
| CAM: Nowy symulator |
| Lokalizacja w menu |
| CAM → Nowy symulator |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| P N |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| [Symulator](/CAM_Simulator/pl "CAM Simulator/pl") |
|  |

## Opis

Narzędzie ![](/images/CAM_SimulatorGL.svg) Nowy symulator to nowa alternatywa dla [Symulatora](/CAM_Simulator/pl "CAM Simulator/pl"). Jest oparty o funkcje OpenGL niskiego poziomu. Aby wyeliminować konflikty z oknem 3D programu FreeCAD, nowy symulator działa w osobnym oknie z oddzielnym kontekstem OpenGL. Z założenia jest szybszy i bardziej precyzyjny niż stary symulator.

![](/images/CAM_new_simulator.PNG)

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/CAM_SimulatorGL.svg) Nowy symulator.
   * Wybierz opcję **CAM → ![](/images/CAM_Simulator.svg) Nowy symulator** z menu.
   * Użyj skrótu klawiaturowego: P a następnie N.
2. Odznacz wszystkie **Operacje**, które nie mają być symulowane.
3. Dostosuj ustawienie **Dokładność**.
4. Wybierz **Zadanie** do symulacji z menu rozwijanego.
5. Naciśnij przycisk ![](/images/CAM_BPlay.svg) (Aktywuj / wznów symulację).
   * Otworzy się oddzielne okno z symulatorem.
   * Używaj przycisków po lewej stronie: Odtwórz, Pojedynczy krok i Przyspiesz oraz suwaka do kontrolowania animacji.
   * Używaj przycisków po prawej stronie: Pokaż/ukryj nakładkę modelu bazowego, Obrót modelu, Wyświetlenie ścieżki i Włącz/wyłącz Ambient Occlusion.
   * Steruj widokiem 3D za pomocą aktualnego sterowania 3D we FreeCAD.

## Właściwości

* DANE**Dokładność**: Dokładność symulacji wyrażona jako procent wskazujący rozbieżność symulacji od zadania obróbki. W przypadku interaktywnych symulacji, redukcja dokładności do 0.3 działa znacznie szybciej.
* DANE**Zadanie**: Zadanie obróbki używane jako podstawa symulacji
* DANE**Lista operacji**: Lista operacji wybranych do uwzględnienia w symulacji.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_SimulatorGL/pl&oldid=1487246>"