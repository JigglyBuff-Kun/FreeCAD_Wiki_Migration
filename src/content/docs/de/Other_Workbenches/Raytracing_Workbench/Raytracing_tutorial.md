---
title: Raytracing Tutorium
---
## Arbeitsbereich Raytracing

:::caution
Der ArbeitsbereichRaytracingwird abgelöst durch den neuen ArbeitsbereichRender Workbench, der als Ersatz geplant ist. Der Arbeitsbereich Render kann mit demAddon-Managerinstalliert werden. Diese Information wird bereitgestellt, weil FreeCAD als Standardeinstellung (mit Stand 0.19-24276) weiterhin mit dem Arbeitsbereich Raytracing ausgeliefert wird und der neue Arbeitsbereich generell in der gleichen Weise arbeiten sollte
:::

|  |
| --- |
| Tutorium |
| Thema |
| Raytracing |
| Niveau |
| Anfänger |
| Zeit zum Abschluss |
| 10 Minuten + Renderzeit |
| Autoren |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| FreeCAD-Version |
| 0.16 oder neuer |
| Beispieldateien |
|  |
| Siehe auch |
| *None* |
|  |

## Einführung

Dieses Tutorial soll den Leser in den grundlegenden Arbeitsablauf des Raytracing Arbeitsbereichs sowie in die meisten der Werkzeuge einführen, die zur Erstellung eines gerenderten Bildes zur Verfügung stehen. **Man beachte**, dass der Arbeitsbereich Raytracing Schritt für Schritt zugunsten des neueren Arbeitsbereichs [Render](https://github.com/FreeCAD/FreeCAD-render) veraltet, der über den [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") zur Verfügung steht.

![](/images/Raytracing_tutorial_result.png)

## Voraussetzungen

* FreeCAD Version 0.16 oder neuer
* [POV-Ray](http://www.povray.org/) und/oder [LuxRender](https://luxcorerender.org/) ist auf dem System installiert
* Im Falle von POV-Ray reicht es nicht aus, nur das Programm (binary executable) an der richtigen Stelle zu haben, sondern es ***erfordert*** die Installation von ***unterstützenden Dateien*** (supporting files), in Ubuntu werden diese durch das Recommends-gekennzeichnete Paket [povray-includes](https://packages.ubuntu.com/search?keywords=povray-includes) zur Verfügung gestellt. Potenzielle Probleme gab es auch bei Linux-Installationen, die manuell im home-Verzeichnis des Benutzer angelegte lokale Konfigurationsdateien erforderten, wie [hier](https://forum.freecadweb.org/viewtopic.php?f=3&t=27548&start=10#p224576) diskutiert.
* Im Falle von POV-Ray wird die zusätzliche Installation von [psicofil's macro](https://github.com/psicofil/Macros_FreeCAD) empfohlen.
* Der Leser sollte Grundkenntnisse über die Arbeitsbereiche [Part](/Part_Workbench/de "Part Workbench/de") und [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") besitzen.

## Prozedur

### Modellierung

In diesem Beispiel verwenden wir einen einfachen Würfel als Beispielobjekt, aber es kann beim Raytracing auch jedes andere Objekt, das mit den Arbeitsbereichen *Part* oder *PartDesign* erstellt wurde, verwendet werden.

1. Erstelle ein neues Dokument
2. Aktiviere den Part Arbeitsbereich
3. Erzeuge einen Würfel. Es steht dir frei, seine Eigenschaften in irgendeiner Weise zu ändern.

Wir haben nun ein Modell, mit dem wir im Folgenden arbeiten können.

### Vorbereiten des Renderns

1. Wechsle in den Raytracing Arbeitsbereich
2. Ändere deine Ansicht in **Perspektive**. Gehe zum Menü **Ansicht** und wähle **Perspektive**.
3. Lege den Speicherort für den Renderer fest. Gehe zum Menü **Bearbeiten** und wähle **Einstellungen**. Klicke auf **Raytracing** und stelle den Speicherort für die ausführbare Datei ein.
4. Lege die Größe des gerenderten Bildes fest. Gehe zum Menü **Bearbeiten** und wähle **Einstellungen**. Klicke auf **Raytracing** und stelle die gewünschte Bildgröße ein.

##### POV-Ray

1. Wähle ![](/images/Raytrace_New.svg) [Neues PovRay Projekt](/Raytracing_New/de "Raytracing New/de"). Wähle aus dem Ausklappmenü **RadiosityNormal**

##### LuxRender

1. Klicken Sie auf ![](/images/Raytrace_Lux.svg) [Neues LuxRender-Projekt](/Raytracing_Lux "Raytracing Lux"). Wähle aus dem Auswklappmenü **LuxClassic**

### Festlegen der Kameraposition

1. Verschiebe die 3D Ansicht in die von dir gewünschte Position. In diesem Fall wählen wir die "Axonometrische Ansicht".
2. Wähle den **Projektordner**im **Modellbaum** aus.
3. Wähle ![](/images/Raytrace_ResetCamera.svg) [Kamera zurücksetzen](/Raytracing_ResetCamera/de "Raytracing ResetCamera/de") .

### Importieren des Modells

1. Wähle das zu rendernde Modell.
2. Wähle ![](/images/Raytrace_NewPartSegment.svg) [Teil einfügen](/Raytracing_InsertPart/de "Raytracing InsertPart/de") .

### Ausführen des Renderers

1. Wähle ![](/images/Raytrace_Render.svg) [Render](/Raytracing_Render/de "Raytracing Render/de") .
2. Lege den Pfad fest, unter dem das Bild gespeichert wird.
3. Warten Sie, bis das Rendern beendet ist. Dies kann einige Zeit dauern.

### Betrachten der Ergebnisse

FreeCAD öffnet das Bild sofort, nachdem das Rendern abgeschlossen ist.

Wir sind nun fertig mit der grundlegenden Vorgehensweise für den Arbeitsbereich [Raytracing](/Raytracing_Workbench/de "Raytracing Workbench/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Raytracing_tutorial/de&oldid=1484902>"