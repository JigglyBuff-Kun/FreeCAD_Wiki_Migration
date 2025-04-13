---
title: Begrüßungsbildschirm
---
## Beschreibung

Der Begrüßungsbildschirm (Splash-Screen) ist ein Bild, das während des Starts von FreeCAD erscheint. Der Begrüßungsbildschirm kann im [Voreinstellungseditor](/Preferences_Editor/de#Allgemein_2 "Preferences Editor/de") ausgeschaltet werden, indem die Option "Splashscreen beim Starten anzeigen" deaktiviert wird.

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Das Bild des Begrüßungsbildschirms wird zufällig aus mehreren Bildern ausgewählt, die Modelle von Anwendern zeigen und ausgewählte Addon-Arbeitsbereiche.

## Benutzerdefinierter Begrüßungsbildschirm

Um einen eigenen Begrüßungsbildschirm einzusetzen, muss der als Abbildung mit dem Namen splash\_image.png in einem der, vom jeweiligen Betriebssystem abhängigen, folgenden Verzeichnisse abgelegt werden:

* **Linux:** $XDG\_DATA\_HOME/FreeCAD/Gui/images/ (das entspricht normalerweise ~/.local/share/FreeCAD/Gui/images/)
* **Windows:** %APPDATA%\FreeCAD\Gui\images\ (normalerweise C:\Users\username\AppData\Roaming\FreeCAD\Gui\images\)
* **MacOS:** ~/Library/Application Support/FreeCAD/Gui/images/

Das Verzeichnis kann Durch Eingeben des Python-Befehls `App.getUserAppDataDir()` in der [Python-Konsole](/Python_console/de "Python console/de") gefunden werden. Die Ordner `Gui` und `images` müssen eventuell zuerst noch angelegt werden. Derselbe eigene Begrüßungsbildschirm wird für alle FreeCAD-Versionen auf diesem Computer eingesetzt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Splash_screen/de&oldid=1488390>"