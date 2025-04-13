---
title: Poradnik dla środowiska pracy Robot
---
|  |
| --- |
| Ćwiczenie |
| Temat |
| Środowisko pracy Robot |
| Poziom trudności |
| początkujący |
| Czas wykonania |
| dowolny |
| Autorzy |
| r-frank |
| Wersja FreeCAD |
| 0.16.6703 |
| Pliki z przykładami |
| nie dołączono |
| Zobacz również |
| *-* |
|  |

## Wprowadzenie

W tym poradniku przedstawiono, jak korzystać z ![](/images/Workbench_Robot.svg) [Środowiska pracy Robot](/Robot_Workbench/pl "Robot Workbench/pl") do symulacji konfiguracji jednostki robota.

![](/images/Robot_Tutorial_RobotSimulation.gif)

Efekt końcowy tego poradnika.

## Przed rozpoczęciem

Ten poradnik jest napisany dla FreeCAD w wersji 0.16.6703 lub wyższej. Więc jeśli nie masz programu FreeCAD na swoim
komputerze przejdź do strony [pobierania](/Download "Download") i wykonaj instalację.

Niniejszy poradnik jest skierowany do wykorzystania [Robotów przemysłowych](http://en.wikipedia.org/wiki/Industrial_robot)
a nie robotów ruchomych lub usługowyych *(zobacz stronę Wikipedii [współczesne roboty](http://en.wikipedia.org/wiki/Robot#Modern_robots))*.

## Przygotowanie sceny

1. Włącz Środowisko pracy ![](/images/Workbench_Robot.svg) [Robot](/Robot_Workbench/pl "Robot Workbench/pl").
2. Utwórz nowy dokument wybierając z menu głównego Plik → Nowy.
3. Wstaw robota Kuka IR500 do sceny wybierając z menu głównego Robot → Wstaw roboty → Kuka IR500.
4. Przełącz się na widok aksonometryczny klikając na przycisk ![](/images/View-axometric.svg).
5. Przybliż, aby dopasować widok klikając na ![](/images/Std_ViewFitAll.svg) przycisk [Dopasuj rozmiar do okna](/Std_ViewFitAll "Std ViewFitAll").
6. Zapisz swój dokument...

## Ustalenie trajektorii ruchów

1. Włącz Środowisko pracy ![](/images/Workbench_Robot.svg) [Robot](/Robot_Workbench/pl "Robot Workbench/pl").
2. Aktywuj zakładkę model w [widoku drzewa](/Tree_view/pl "Tree view/pl") klikając na nią.
3. Utwórz nową trajektorię klikając na przycisk ![](/images/Robot_CreateTrajectory.svg) [Utwórz nową pustą trajektorię](/Robot_CreateTrajectory "Robot CreateTrajectory").
4. Wybierz robota w [widoku drzewa](/Tree_view/pl "Tree view/pl").
5. Ustaw pozycję wyjściową dla robota klikając na przycisk ![](/images/Robot_SetHomePos.svg) [Ustaw pozycję startową](/Robot_SetHomePos "Robot SetHomePos").
6. przełącz widok na [panel zadań](/Task_Panel "Task Panel") w [widoku połączonym](/Combo_view/pl "Combo view/pl").
7. Za pomocą suwaków zmień pozycję robota.
8. Gdy robot i obiekt trajektorii są wybrane w [widoku drzewa](/Tree_view/pl "Tree view/pl") kliknięcie na przycisk ![](/images/Robot_InsertWaypoint.svg) [Ustaw lokację narzędzia na trajektorię](/Robot_InsertWaypoint "Robot InsertWaypoint") wstawi punkt trasy w trajektorii.
9. Każdy punkt trasy jest oznaczony żółtym krzyżykiem, punkty trasy są połączone pomarańczową linią.
10. Zdefiniuj co najmniej trzy różne punkty orientacyjne i wstaw je do toru ruchu.

## Symulacja ruchów robota

1. Wybierz robota i zaprojektowaną trajektorię na [widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Wybierz symulację, klikając na przycisk ![](/images/Robot_Simulate.svg) [Symulacja robota](/Robot_Simulate "Robot Simulate").
3. Kliknij na przycisk Odtwarzaj  ▶.
4. Oglądaj efekty.

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_tutorial/pl&oldid=1251474>"