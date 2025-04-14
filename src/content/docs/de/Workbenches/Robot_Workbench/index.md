---
title: Arbeitsbereich Robot
---

:::caution
Der Arbeitsbereich Robot ist nicht gewartet. Wenn du Erfahrung mit dem Thema hast und daran interessiert bist, es zu pflegen, gib bitte deine Absicht im Entwicklerbereich desFreeCAD Forumsan.Der Grund dafür, dass sich dieser Arbeitsbereich noch im Master-Quellcode befindet, liegt darin, dass dieser Arbeitsbereich in C++ programmiert ist. Wenn dieser Arbeitsbereich in Python programmiert werden könnte, dann könnte er zu einemexternen Arbeitsbereichgemacht und in ein separates Repositorium verschoben werden.
:::

## Einleitung

![](/images/Workbench_Robot.svg)

Symbol des Arbeitsbereichs Robot

Der Arbeitsbereich ![](/images/Workbench_Robot.svg) Roboter ist ein Werkzeug zur Simulation eines Standard-[6-Achsen Industrieroboters](/Robot_6-Axis/de "Robot 6-Axis/de"), wie [Kuka](http://kuka.com/).

Du kannst die folgenden Aufgaben erledigen:

- Richten eine Simulationsumgebung mit einem Roboter und Werkstücken ein.
- Erstellen und Auffüllen von Bewegungstrajektorien.
- Zerlege die Merkmale eines CAD-Bauteils in eine Trajektorie.
- Simuliere die Roboterbewegung und das Erreichen der Distanz.
- Exportiere die Trajektorie in eine Roboterprogrammdatei.

Um loszulegen, versuche es mit dem [Roboter Tutorium](/Robot_tutorial/de "Robot tutorial/de"), und sieh Dir die Programmierschnittstelle in der Beispieldatei [RobotExample.py](https://github.com/FreeCAD/FreeCAD_sf_master/blob/master/src/Mod/Robot/RobotExample.py) an.

![](/images/Robot_Workbench_example.jpg)

## Werkzeuge

Hier die wichtigsten Befehle, mit denen eine Roboteranordnung erstellt werden kann.

### Roboter

Die Werkzeuge zur Erstellung und Verwaltung der 6-Achsen-Roboter

- ![](/images/Robot_CreateRobot.svg) [Einen Roboter erstellen](/Robot_CreateRobot/de "Robot CreateRobot/de"): Einen neuen Roboter in die Szene einfügen
- ![](/images/Robot_Simulate.svg) [Eine Bewegungsbahn simulieren](/Robot_Simulate/de "Robot Simulate/de"): Öffnet den Simulationsdialog und lässt dich Folgendes simulieren
- ![](/images/Robot_Export.svg) [Eine Bewegungsbahn exportieren](/Robot_Export/de "Robot Export/de"): Exportieren einer Roboterprogrammdatei
- ![](/images/Robot_SetHomePos.svg) [Ausgangsposition festlegen](/Robot_SetHomePos/de "Robot SetHomePos/de"): Festlegen der Ausgangsposition eines Roboters
- ![](/images/Robot_RestoreHomePos.svg) [Ausgangsposition wiederherstellen](/Robot_RestoreHomePos/de "Robot RestoreHomePos/de"): Bewege den Roboter in seine Ausgangsposition

### Trajektorien

Werkzeuge zum Erstellen und Bearbeiten von Trajektorien. Es gibt zwei Arten, die parametrische und die nicht parametrische.

#### Nicht parametrische Trajektorien

- ![](/images/Robot_CreateTrajectory.svg) [Eine Trajektorie erstellen](/Robot_CreateTrajectory/de "Robot CreateTrajectory/de"): Fügt ein neues leeres Trajektorienobjekt in die Szene ein
- ![](/images/Robot_SetDefaultOrientation.svg) [Lege die Standardausrichtung fest](/index.php?title=Robot_SetDefaultOrientation/de&action=edit&redlink=1 "Robot SetDefaultOrientation/de (page does not exist)"): Lege die Orientierung fest - Wegpunkte werden standardmäßig erstellt
- ![](/images/Robot_SetDefaultValues.svg) [Setze den Standard Geschwindigkeitsparameter](/Robot_SetDefaultValues/de "Robot SetDefaultValues/de"): Lege die Standardwerte für die Weg-punkt Erstellung fest
- ![](/images/Robot_InsertWaypoint.svg) [Einen Wegpunkt einfügen](/Robot_InsertWaypoint/de "Robot InsertWaypoint/de"): Einfügen eines Wegpunktes von der aktuellen Roboterposition in eine Trajektorie
- ![](/images/Robot_InsertWaypointPre.svg) [Einen vorgewählten Wegpunkt einfügen](/Robot_InsertWaypointPre/de "Robot InsertWaypointPre/de"): Einfügen eines Wegpunktes von der aktuellen Mausposition in eine Trajektorie

#### Parametrische Trajektorien

- ![](/images/Robot_Edge2Trac.svg) [Erstellen einer Trajektorie aus Kanten](/index.php?title=Robot_Edge2Trac/de&action=edit&redlink=1 "Robot Edge2Trac/de (page does not exist)"): Einfügen eines neuen Objekts, das Kanten zu einer Trajektorie zerlegt
- ![](/images/Robot_TrajectoryDressUp.svg) [Ankleiden einer Trajektorie](/Robot_TrajectoryDressUp/de "Robot TrajectoryDressUp/de"): Erlaubt dir, eine oder mehrere Eigenschaften einer Trajektorie außer Kraft zu setzen
- ![](/images/Robot_TrajectoryCompound.svg) [Trajektorienverbund](/Robot_TrajectoryCompound/de "Robot TrajectoryCompound/de"): Erzeugen eines Verbunds aus einigen Einzeltrajektorien

## Skripten

Siehe das [Roboter API Beispiel](/Robot_API_example/de "Robot API example/de") für eine Beschreibung der Funktionen, die zur Modellierung der Roboterverschiebungen verwendet werden.

## Tutorien

- [6-Achsen Roboter](/Robot_6-Axis/de "Robot 6-Axis/de")
- [VRML Vorbereitung für Robotersimulation](/VRML_Preparation_for_Robot_Simulation/de "VRML Preparation for Robot Simulation/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_Workbench/de&oldid=1425504>"
