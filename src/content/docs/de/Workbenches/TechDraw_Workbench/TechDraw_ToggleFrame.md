---
title: TechDraw RahmenUmschalten
---

|                                                                      |
| -------------------------------------------------------------------- |
| TechDraw RahmenUmschalten                                            |
| Menüeintrag                                                          |
| TechDraw → TechDraw Ansichten → Ansichtsrahmen ein- oder ausschalten |
| Arbeitsbereich                                                       |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")           |
| Standardtastenkürzel                                                 |
| _Keiner_                                                             |
| Eingeführt in Version                                                |
| -                                                                    |
| Siehe auch                                                           |
| [TechDraw Ansicht](/TechDraw_View/de "TechDraw View/de")             |
|                                                                      |

## Beschreibung

Das Werkzeug **TechDraw RahmenUmschalten** schaltet die Darstellung der Umrandungen von Ansichten und Beschriftungen sowie die Anzeige von Knotenpunkten ein bzw. aus.

![](/src/assets/images/TechDraw_ToggleFrame.png)

links Umrandung eingeschaltet, rechts Umrandung ausgeschaltet

## Anwendung

1. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind: Wahlweise das gewünschte Zeichnungsblatt durch Auswahl in der [Baumansicht](/Tree_view/de "Tree view/de") aktivieren.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_ToggleFrame.svg) Ansichtsrahmen ein- oder ausschalten drücken.
   - Den Menüeintrag **TechDraw → TechDraw Ansichten → ![](/src/assets/images/TechDraw_ToggleFrame.svg) Ansichtsrahmen ein- oder ausschalten** auswählen.
   - Wenn ein Zeichnungsblatt im [Hauptansichtsbereich](/Main_view_area/de "Main view area/de") angezeigt wird: Mit der rechten Maustaste in das Fenster des Blattes klicken und im Kontextmenü die Option **Toggle Frames** auswählen.
3. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind und noch kein Blatt aktiviert wurde, wird das Dialogfeld **Blattauswahl** geöffnet:
   1. Das gewünschte Blatt auswählen.
   2. Die Schaltfläche OK drücken.
4. Die aktuell sichtbaren Rahmen der Ansichten werden ausgeblendet bzw. aktuell unsichtbare Rahmen werden wieder dargestellt.
5. Es kann vorkommen, dass sich Ansichten in unterschiedlichen Darstellungszuständen befinden. In diesem Falle kann ein- oder zweimaliges Aufrufen dieses Werkzeugs die Ansichten wieder synchronisieren.

## Hintergrund

Der gestrichelte Ansichtsrahmen und die Knotenpunkte dienen nur als Referenz, sie sind nicht wirklich Teil der Zeichnung, so dass du sie nicht mehr siehst, wenn du die Seite als PDF oder SVG exportierst.

Der vorgeschlagene Arbeitsablauf ist die Verwendung von ![](/src/assets/images/TechDraw_ToggleFrame.svg) Ansichtsrahmen ein- oder ausschalten, um den Rahmen, der die Ansicht umgibt, und auch die zusätzlichen Punkte zu deaktivieren. Mit den Punkten wähle mit den Messwerkzeugen die richtigen zu messenden Kanten aus und schalte dann den Rahmen (und die Punkte) aus, um das Endergebnis zu sehen. Nicht zufrieden? Schalte den Rahmen (und die Punkte) wieder ein, wähle andere Knotenpunkte aus und erstelle neue Messungen, dann schalte den Rahmen wieder aus.

Du kannst die Größe der Knotenpunkte im [TechDraw Einstellungen/Maßstabs Reiter](/TechDraw_Preferences/de#Skalieren "TechDraw Preferences/de") einstellen. Bitte setze ihre Größe nicht auf Null, nur klein oder groß genug, damit du sie bequem aufnehmen kannst.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Umschaltwerkzeug verfügt derzeit nicht über eine Programmierschnittstelle.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ToggleFrame/de&oldid=1500223>"
