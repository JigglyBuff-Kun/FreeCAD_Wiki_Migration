---
title: Arch Übersicht
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Übersicht |
| Menüeintrag |
| Utils → Übersicht |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Macro FCInfo](/Macro_FCInfo/de "Macro FCInfo/de"), [Makro EinfacheEigenschaften](/Macro_SimpleProperties/de "Macro SimpleProperties/de") |
|  |

## Beschreibung

Das Werkzeug **Arch Übersicht** verwendet einen speziellen Vermessungsmodus, der es ermöglicht, Maße und Informationen schnell aus einem Modell zu entnehmen und diese Informationen auf andere Anwendungen zu übertragen. Wenn du dich im Vermessungsmodus befindest und auf verschiedene Unterelemente von 3D-Objekten klickst, werden je nachdem, worauf du klickst, die folgenden Informationen erfasst:

* Ein Klick auf eine Kante ergibt ihre Länge.
* Ein Klick auf einen Knoten ergibt seine Höhe (Koordinate auf der Z-Achse)
* Ein Klick auf eine Fläche ergibt ihren Flächeninhalt.
* Ein Doppelklick auf irgendetwas wählt das ganze Objekt aus und ergibt sein Volumen.

Wenn eine solche Information gesammelt wird, geschehen mehrere Dinge:

* Auf dem angeklickten Element wird eine Beschriftung platziert, die den Wert anzeigt (mit "a" für Fläche, "l" für Länge, "z" für Höhe oder "v" für Volumen)
* Der numerische Wert wird in die Zwischenablage kopiert, so dass er in eine andere Anwendung eingefügt werden kann.
* Eine Zeile wird im FreeCAD-Ausgabefenster angezeigt. Nach dem Verlassen des Vermessungsmodus, können diese Zeilen in eine andere Anwendung kopiert und eingefügt werden (die Werte sind durch Komma getrennt, was die Konvertierung in Tabellenkalkulationsdaten erleichtert)
* Die Gesamtlänge oder -fläche der Elemente, die bisher angeklickt wurden, wird ebenfalls im Ausgabefenster angezeigt.
* Jede Länge oder jeder Flächeninhalt wird auch im Aufgabendialog aufgezeichnet.

![](/images/Arch_Survey_example.jpg)

*Das obige Bild zeigt, was passiert, wenn der Übersichtsmodus ausgeführt wird.*

## Anwendung

1. Den Menüeintrag **Utils → ![](/images/Arch_Survey.svg) Messen** auswählen.
2. Knoten, Kanten, Flächen anklicken oder doppelklicken, um ganze Objekte auszuwählen.
3. Außerhalb einer beliebigen Geometrie (auf dem Hintergrund der 3D-Ansicht) klicken, um vorhandene Beschriftungen zu entfernen, eine Gesamtzeile im Dialogfeld Task zu drucken und die Zählung von Längen und Bereichen wieder bei Null zu beginnen.
4. Esc oder die Schaltfläche Schließen drücken, um den Vermessungsmodus zu verlassen und alle Beschriftungen zu entfernen.

## Optionen

* Du kannst eine benutzerdefinierte Bezeichnung zu jeder Zeile im Aufgabendialog hinzufügen, indem du auf diese Zeile klickst, dann einen Text im Beschreibungsfeld hinzufügst und dann die Schaltfläche **Beschreibung festlegen** drückst.
* Wenn du fertig bist, kannst du vor dem Schließen den Inhalt des Aufgabendialogs exportieren, indem du auf die Schaltfläche "CSV exportieren" klickst. Die resultierende CSV Datei kann dann in jeder Tabellenkalkulationsanwendung wie Excel oder LibreOffice Calc geöffnet werden. Die Werte und Einheiten werden in der resultierenden CSV Datei getrennt, und die Summen werden als SUM() Funktionen geschrieben.

![](/images/Arch_Survey_spreadsheet.jpg)

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Übersichtswerkzeug verfügt nicht über eine Programmierschnittstelle, aber die Erfassung, der gleichen Informationen von jedem ausgewählten [Teil](/Part_Workbench/de "Part Workbench/de")-basierten Objekt wird mit dem folgenden Skript reproduziert:

```
import FreeCADGui

selection = FreeCADGui.Selection.getSelectionEx()

for obj in selection:
    for element in obj.SubObjects:
        print("Area: %f", element.Area)
        print("Length: %f", element.Length)
        print("Volume: %f", element.Volume)
        print("Center of Mass: %f", element.CenterOfMass)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Survey/de&oldid=1542014>"