---
title: Ausgabefenster
---
## Einleitung

Das Ausgabefenster ist der Bereich, der Textnachrichten von FreeCAD-Prozessen und -Werkzeugen anzeigt. Es ist im Menü **[Ansicht](/Std_View_Menu/de "Std View Menu/de") → Paneele → Ausgabefenster** verfügbar..

Bestimmte Eigenschaften dieses Bereiches, wie die Farbe des Textes und ob er bei Warnungen oder Fehlern automatisch angezeigt werden soll, können im Reiter **Allgemein → Ausgabefenster** des [Einstellungseditors](/Preferences_Editor/de#Ausgabefenster "Preferences Editor/de") konfiguriert werden.

![](/images/FreeCAD_Report_view.png)

Die Meldungen des Ausgabefensters nachdem FreeCAD gerade gestartet wurde.

## Meldungen

*Siehe auch:* [Console API](/Console_API/de "Console API/de") und [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Ausgabefenster zeigt Meldungen der internen FreeCAD-Klasse `Console` an.

* `FreeCAD.Console.PrintMessage("text")` gibt jede Art von informativer Meldung aus, die kein Fehlverhalten impliziert; z.B. die Koordinaten von Punkten, das Ergebnis einer Abstandsberechnung, die Anzahl der Knotenpunkte einer Form usw. Standardmäßig in Schwarz.
* `FreeCAD.Console.PrintWarning("text")` gibt Meldungen aus, die den Benutzer vor ungewöhnlichem Verhalten der Anwendung warnen sollen. Warnungen sollten angezeigt werden, wenn eine bestimmte Funktionalität fehlt, die Software aber noch akzeptabel funktioniert. Standardmäßig in Gelb.
* `FreeCAD.Console.PrintError("text")` gibt Meldungen aus, die als Fehlermeldungen gedacht sind, d.h. wenn eine kritische Komponente fehlt, wodurch eine bestimmte Operation fehlschlägt. Standardmäßig in Rot.
* `FreeCAD.Console.PrintLog("text")`, gibt Meldungen aus, die in Berichtsdateien (logs) protokolliert werden. Diese Meldungen können alles sein, was nützlich ist für eine zukünftige Fehlersuche durch Auslesen der Berichtsdateien, z. B. das Starten oder Schließen eines Arbeitsbereichs. Standardmäßig in Blau.

Diese Funktionen können direkt von der [Python-Konsole](/Python_console/de "Python console/de") aus oder in [Makros](/Macros/de "Macros/de") und benutzerdefinierten Arbeitsbereichen verwendet werden.

![](/images/FreeCAD_Report_view_example.png)

Beispielmeldungen im Ausgabefenster: Eine allgemeine Meldung, eine Warnung, ein Fehler und eine protokollierte Meldung.

## Maßnahmen

Ein Rechtsklick auf das Ausgabefenster öffnet ein Kontextmenü mit den folgenden Befehlen:

* **Optionen**:
  + **Nachrichtenarten anzeigen**: siehe [Voreinstellungseditor](/Preferences_Editor/de#Output_window "Preferences Editor/de").
  + **Show Report view on**: wie vorher.
  + **Python-Ausgabe umleiten**: wie vorher.
  + **Python-Fehler umleiten**: wie vorher.
  + **Go to end**: Wenn aktiviert, wird zur untersten Zeile gescrollt, wenn eine neue Meldung hinzugefügt wird.
* **Kopieren**: speichert den markierten Text in der Zwischenablage zum späteren Einfügen; er ist deaktiviert, wenn nichts markiert ist.
* **Alles auswählen**: wählt den gesamten Text im Ausgabefenster aus.
* **Löschen**: löscht alle Meldungen im Ausgabefenster. Dies ist nützlich, wenn du eine Fehlersuche bei einem Werkzeug durchführen willst, das Meldungen im Ausgabefenster ausgibt, und sicher sein willst, dass keine alten Meldungen von früheren Werkzeugen vorhanden sind.
* **Speichern unter**: speichert die Meldungen im Ausgabefenster in eine Textdatei.

Retrieved from "<http://wiki.freecad.org/index.php?title=Report_view/de&oldid=1299022>"