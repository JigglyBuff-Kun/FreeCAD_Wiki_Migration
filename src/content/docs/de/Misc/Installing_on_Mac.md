---
title: Installieren auf Mac
---
FreeCAD kann unter macOS aus einem .dmg-Paket installiert werden, das per Drag & Drop in den Programme-Ordner gezogen wird, siehe Seite [Herunterladen](/Download/de "Download/de").

Zum Herunterladen einer Entwicklungsversion, die möglicherweise instabil ist, siehe die Seite [Weekly builds download](https://github.com/FreeCAD/FreeCAD-Bundle/releases/tag/weekly-builds).

Du kannst auch einen Paketmanager wie HomeBrew verwenden, um deine Software auf dem neuesten Stand zu halten. Eine Anleitung zur Installation von HomeBrew findest du [hier](https://brew.sh/). Wenn HomeBrew installiert ist, kannst du FreeCAD einfach über dein Bash-Terminal installieren mit

```
brew install --cask freecad

```

und um die neueste verfügbare Version auf HomeBrew zu verwenden, kannst du

```
brew install freecad

```

Wenn es irgendwelche Probleme mit dem HomeBrew Cask oder Formula gibt, kannst du diese an [hier](https://github.com/FreeCAD/homebrew-freecad) melden.

Diese Seite beschreibt die Verwendung und die Funktionen des FreeCAD-Installationsprogramms. Sie enthält auch Anweisungen zur Deinstallation. Sobalt die Installation komplett ist, geht es mit [Loslegen](/Getting_started/de "Getting started/de") weiter.

## Einfache Installation

Das FreeCAD Installationsprogramm wird in Form eines Anwendungspakets (.app) bereitgestellt, das in einer Datenträgerabbild Datei enthalten ist.

Du kannst das neueste Installationsprogramm von der Seite [Download](/Download/de "Download/de") herunterladen. Nachdem du die Datei heruntergeladen hast, mounte einfach das Datenträgerabbild und ziehen es dann in den Anwendungsordner oder in einen Ordner deiner Wahl.

![](/images/Mac_installer_1.png)

Das wars. Klicke einfach auf die App, um FreeCAD zu starten. Wenn du die Meldung bekommst, "FreeCAD kann nicht geöffnet werden, da es von einem nicht identifizierten Entwickler stammt.", öffne den Ordner (Application) und klicke mit der rechten Maustaste auf die App. Klicke dann auf Öffnen und akzeptieren, um die Anwendung zu öffnen.

## Deinstallation

Derzeit gibt es kein Deinstallationsprogramm für FreeCAD. Um FreeCAD und alle installierten Komponenten vollständig zu entfernen, ziehe die folgenden Dateien und Ordner in den Papierkorb:

* Im Proramme-Ordner:
  + /Applications/FreeCAD.app
* Im Ordner Library des Home-Verzeichnisses des Benuzers
  + $HOME/Library/Application Support/FreeCAD
  + $HOME/Library/Preferences/FreeCAD
  + $HOME/Library/Preferences/com.freecad.FreeCAD.plist
  + $HOME/Library/Preferences/freecad.plist
  + $HOME/Library/Caches/FreeCAD

Wurde FreeCAD mit Homebrew installiert, wird der Befehl `brew uninstall freecad` verwendet, um /Programme/FreeCAD.app zu deinstallieren. Die zugehörigen Dateien und Verzeichnisse im Ordner Library des Home-Verzeichnisses des Benuzers müssen aber noch immer von Hand gelöscht werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_on_Mac/de&oldid=1484343>"