---
title: Roboter Tutorium
---

|                        |
| ---------------------- |
| Tutorium               |
| Thema                  |
| Roboter Arbeitsbereich |
| Niveau                 |
| Anfänger               |
| Zeit zum Abschluss     |
|                        |
| Autoren                |
| r-frank                |
| FreeCAD-Version        |
| 0.16.6703              |
| Beispieldateien        |
|                        |
| Siehe auch             |
| _None_                 |
|                        |

## Einführung

Dieses Tutorium soll dir beibringen, wie du den ![](/images/Workbench_Robot.svg) [Roboter Arbeitsbereich](/Robot_Workbench/de "Robot Workbench/de") verwendest, um die Einrichtung einer Roboterzelle zu simulieren.

![](/images/Robot_Tutorial_RobotSimulation.gif)

Endergebnis dieses Tutoriums

## Bevor du beginnst

Dieses Tutorium wurde für FreeCAD 0.16.6703 oder höher geschrieben. Wenn du also FreeCAD nicht auf deinem Computer hast, gehe auf die [Herunterladen](/Download/de "Download/de") Seite und führe die Installation durch.

Dieses Tutorium zielt auf die Verwendung von [Industrieroboter](http://en.wikipedia.org/wiki/Industrial_robot) ab und nicht mobile oder Serviceroboter (siehe Wikipedia Eintrag auf [moderne Roboter](http://en.wikipedia.org/wiki/Robot#Modern_robots)).

## Einrichten der Szenerie

1. Wechsle zum ![](/images/Workbench_Robot.svg)[Roboter Arbeitsbereich](/Robot_Workbench/de "Robot Workbench/de")
2. Erstelle ein neues Dokument, durch auswählen Datei → Neu im oberen Menü
3. Füge einen Kuka IR500 Roboter in die Szene ein, durch auswählen Roboter → Roboter einfügen → Kuka IR500 aus dem oberen Menü
4. Wechsle zur axonometrischen Ansicht, durch anklicken auf die ![](/images/View-axometric.svg) Schaltfläche
5. Zoom um alles anzupassen durch Klicken auf ![](/images/Std_ViewFitAll.svg) [Alle anpassen](/Std_ViewFitAll/de "Std ViewFitAll/de") Schaltfläche
6. Speichere deine Datei ...

## Einstellen einer Bewegungsbahn

1. Wechsle zum ![](/images/Workbench_Robot.svg) [Roboter Arbeitsbereich](/Robot_Workbench/de "Robot Workbench/de")
2. Aktiviere den Modell Reiter in der [Baumansicht](/Tree_view/de "Tree view/de"), durch Klicken darauf
3. Erstelle eine neue Bewegungsbahn durch Klick auf die ![](/images/Robot_CreateTrajectory.svg) [Roboter Erstelle Bewegungsbahn](/Robot_CreateTrajectory/de "Robot CreateTrajectory/de") Schaltfläche
4. Wähle den Roboter in der [Baumansicht](/Tree_view/de "Tree view/de")
5. Lege die Home Position für den Roboter durch Klick auf ![](/images/Robot_SetHomePos.svg) [Robot_SetzeHomePos](/Robot_SetHomePos/de "Robot SetHomePos/de")
6. Wechsle zum [Aufgabenpaneel](/Task_Panel/de "Task Panel/de")
7. Durch Benutzung der Schieber verändere die Roboterposition
8. Wenn der Roboter und Bewegungsbahn in der [Baumansicht](/Tree_view/de "Tree view/de") ausgewählt wurden

klicken auf ![](/images/Robot_InsertWaypoint.svg) [Roboter EinfügenWegpunkt](/Robot_InsertWaypoint/de "Robot InsertWaypoint/de") fügt den Weg-Punkt in die Bewegungsbahn ein

1. Jeder Weg-Punkt wird mit einem gelben Kreuz markiert und die gesamte Bewegungsbahn wird durch orange Linien dargestellt
2. Definiere mindestens drei verschiedene Wegpunkte und füge sie in die Bewegungsbahn ein

## Simulieren der Roboter Bewegung

1. Wähle den Roboter und die Bewegungsbahn in der [Baumansicht](/Tree_view/de "Tree view/de")
2. Wähle die Simulation durch Klick auf ![](/images/Robot_Simulate.svg)[Roboter Simulieren](/Robot_Simulate/de "Robot Simulate/de")
3. Klicke auf den Wiedergabe ▶ Knopf
4. Simulation beobachten

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_tutorial/de&oldid=1251499>"
