---
title: Weitere Arbeitsbereiche installieren
---
## Einführung

Seit v0.17 ist es einfach, [externe Arbeitsbereiche](/External_workbenches/de "External workbenches/de") mit Hilfe des [Erweiterungsverwalters](/Std_AddonMgr/de "Std AddonMgr/de") hinzuzufügen. Ein normaler Benutzer muss nicht mehr tun, als dieses Werkzeug zu benutzen.

Lies weiter, um weitere Informationen zur Installation von Arbeitsbereichen zu erhalten.

## Allgemeine Beschreibung

Arbeitsbereiche sind nichts anderes als Sammlungen von Dateien, die in einem Ordner abgelegt sind. Dieser Ordner ist in der Regel in einem Zip Archiv komprimiert. Bei der Installation wird dieser Ordner einfach dekomprimiert und nach

```
$ROOT_DIR/Mod/

```

wobei `$ROOT_DIR` ein Verzeichnis der obersten Ebene ist, das von FreeCAD beim Start durchsucht wird. Dies ist im Wesentlichen das, was der [Erweiterungsverwalter](/Std_AddonMgr/de "Std AddonMgr/de") macht.

Die `Mod/` Verzeichnisse werden bei jedem Start von FreeCAD eingelesen und die verfügbaren Arbeitsbereiche werden automatisch hinzugefügt.

## Systemweites Installieren

Auf diese Weise installierte Arbeitsbereiche sind für alle Benutzer verfügbar. Abhängig von deinem System benötigst du möglicherweise Administratorrechte, um auf das Installationsverzeichnis zuzugreifen.

Kopiere den Arbeitsbereichsordner in `$INSTALL_DIR/Mod/`, wobei `$INSTALL_DIR` das FreeCAD Installationsverzeichnis ist.

* Unter Linux ist es normalerweise `/usr/share/freecad/Mod/`
* Unter Windows ist es normalerweise `C:\Programmdateien\FreeCAD\Mod\`
* Unter macOS ist es normalerweise `/Anwendungen/FreeCAD/Mod/`

## Installation für einen einzelnen Anwender

Auf diese Weise installierte Arbeitsbereiche stehen nur einem Benutzer zur Verfügung, erfordern aber keine Administratorrechte.

Kopiere den Arbeitsbereichsordner nach `$USER_DIR/Mod/`, wobei `$USER_DIR` das FreeCAD-Verzeichnis für einen bestimmten `Benutzernamen` ist (letzterer lässt sich finden, wenn man `App.getUserAppDataDir()` in die [Python-Konsole](/Python_console/de "Python console/de")) eingibt.

* Unter Linux ist es normalerweise `/home/username/.local/share/FreeCAD/Mod/`.
* Unter Windows ist es `%APPDATA%\FreeCAD\Mod\`, das ist normalerweise `C:\Users\username\Appdata\Roaming\FreeCAD\Mod\`
* Unter macOS ist es normalerweise `/Users/username/Library/Application Support/FreeCAD/Mod/`.

## Zusätzliche Informationen

Weitere Informationen zur Erstellung eines benutzerdefinierten Arbeitsbereichs findest du im [Verteiler für Erfahrene Anwender](/Power_users_hub/de "Power users hub/de") und im [Verteiler für Entwickler](/Developer_hub/de "Developer hub/de").

Siehe auch eine detaillierte Beschreibung auf der Seite [Wie man zusätzliche Arbeitsbereiche installiert](/How_to_install_additional_workbenches/de "How to install additional workbenches/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_more_workbenches/de&oldid=1526348>"