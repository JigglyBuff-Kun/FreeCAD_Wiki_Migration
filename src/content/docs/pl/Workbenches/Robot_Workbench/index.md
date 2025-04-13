---
title: Środowisko pracy Robot
---

:::caution
Środowisko pracy FreeCAD Robot nie jest utrzymywane. Jeśli masz doświadczenie w tym temacie i jesteś zainteresowany jego utrzymaniem, poinformuj o swoich zamiarach w sekcji dla deweloperów na forumFreeCAD.Powodem, dla którego ten warsztat jest nadal w głównym kodzie źródłowym jest to, że jest on zaprogramowany w C++. Jeśli mógłby być zaprogramowany w Pythonie, to można by utworzyćzewnętrzne środowiskoi mógłby być przeniesiony do osobnego repozytorium.
:::

## Wprowadzenie

![](/images/Workbench_Robot.svg)

Ikonka Środowiska pracy Robot

![](/images/Workbench_Robot.svg) [Środowisko pracy Robot](/Robot_Workbench "Robot Workbench") jest narzędziem do symulacji standardowego [6-osiowego robota przemysłowego](/Robot_6-Axis "Robot 6-Axis"), na przykład [Kuka](http://kuka.com/).

Możesz wykonywać następujące zadania:

- Ustawić środowisko symulacyjne z robotem i elementami roboczymi.
- Stworzyć i wypełnić trajektorie ruchu.
- Rozłożyć cechy elementów CAD na trajektorię.
- Symulować ruch robota i osiąganie odległości.
- Wyeksportować trajektorię do pliku programu robota.

Na wstępie wypróbuj [Samouczek robota](/Robot_tutorial "Robot tutorial"), i zobacz interfejs programowania w pliku [RobotExample.py](https://github.com/FreeCAD/FreeCAD_sf_master/blob/master/src/Mod/Robot/RobotExample.py).

![](/images/Robot_Workbench_example.jpg)

## Narzędzia

Tutaj znajdują się główne polecenia, których można użyć do stworzenia konfiguracji dla robota.

### Roboty

Narzędzia do tworzenia i zarządzania robotami 6-osiowymi.

- ![](/images/Robot_CreateRobot.svg) [Wstaw robota](/Robot_CreateRobot/pl "Robot CreateRobot/pl"): Umieść nowego robota na scenie.
- ![](/images/Robot_Simulate.svg) [Uruchom symulacje trajektorii](/Robot_Simulate/pl "Robot Simulate/pl"): Otwiera okno dialogowe symulacji i pozwala na rozpoczęcie symulacji.
- ![](/images/Robot_Export.svg) [Eksport trajektorii](/Robot_Export/pl "Robot Export/pl"): Eksport pliku programu robota.
- ![](/images/Robot_SetHomePos.svg) [Ustaw pozycję startową](/Robot_SetHomePos/pl "Robot SetHomePos/pl"): Ustawianie pozycji startowej robota.
- ![](/images/Robot_RestoreHomePos.svg) [Przejdź do pozycji startowej](/Robot_RestoreHomePos/pl "Robot RestoreHomePos/pl"): Ustaw robota w pozycji startowej.

### Tor ruchu

Narzędzia do tworzenia i manipulowania trajektoriami. Istnieją dwa podstawowe rodzaje, parametryczne i nie parametryczne.

#### Trajektorie nie parametryczne

- ![](/images/Robot_CreateTrajectory.svg) [Utwórz trajektorię](/Robot_CreateTrajectory/pl "Robot CreateTrajectory/pl"): Wstawia nowy pusty obiekt trajektorii do sceny.
- ![](/images/Robot_SetDefaultOrientation.svg) [Ustaw domyślną orientację](/Robot_SetDefaultOrientation/pl "Robot SetDefaultOrientation/pl"): Punkty orientacyjne są tworzone jako domyślne.
- ![](/images/Robot_SetDefaultValues.svg) [Ustaw wartości domyślne](/Robot_SetDefaultValues/pl "Robot SetDefaultValues/pl"): Ustaw wartości domyślne dla sposobu tworzenia punktów trasy.
- ![](/images/Robot_InsertWaypoint.svg) [Wstaw pozycje narzędzia ...](/Robot_InsertWaypoint/pl "Robot InsertWaypoint/pl"): Wstaw punkt trasy z bieżącej pozycji robota do trajektorii.
- ![](/images/Robot_InsertWaypointPre.svg) [Wstaw wstępnie wybrany punkt trasy](/Robot_InsertWaypointPre/pl "Robot InsertWaypointPre/pl"): Wstaw w trajektorię punkt orientacyjny z aktualnej pozycji kursora myszki.

#### Trajektorie parametryczne

- ![](/images/Robot_Edge2Trac.svg) [Generuj trasę z krawędzi](/Robot_Edge2Trac/pl "Robot Edge2Trac/pl"): Wstaw nowy obiekt, którego krawędzie zostaną rozłożone na trajektorię.
- ![](/images/Robot_TrajectoryDressUp.svg) [Ukształtuj trajektorię](/Robot_TrajectoryDressUp/pl "Robot TrajectoryDressUp/pl"): Pozwala nadpisać jedną lub więcej właściwości trajektorii.
- ![](/images/Robot_TrajectoryCompound.svg) [Grupuj i połącz trajektorie](/Robot_TrajectoryCompound/pl "Robot TrajectoryCompound/pl"): Stworzy układ złożony z kilku pojedynczych trajektorii.

## Tworzenie skryptów

Aby uzyskać opis funkcji używanych do modelowania przemieszczeń robota, zobacz [Przykład API dla robota](/Robot_API_example/pl "Robot API example/pl").

## Poradniki

- [Robot 6-Axis](/Robot_6-Axis/pl "Robot 6-Axis/pl")
- [VRML przygotowanie symulacji robota](/VRML_Preparation_for_Robot_Simulation/pl "VRML Preparation for Robot Simulation/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_Workbench/pl&oldid=1141382>"
