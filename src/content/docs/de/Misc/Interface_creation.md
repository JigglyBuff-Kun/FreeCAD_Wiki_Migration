---
title: Schnittstellen erstellen
---
## Einleitung

Erfahrene Anwender haben die Möglichkeit, Schnittstellen zu erstellen, also grafische Benutzeroberflächen, die sie bei der Erstellung komplexer Werkzeuge für ihre benutzerdefinierten [Erweiterungen](/Addon/de "Addon/de") (Addons), wie z.B. [Makros](/Macros/de "Macros/de") oder vollständige [Arbeitsbereiche](/Workbenches/de "Workbenches/de"), unterstützen.

Benutzeroberflächen werden mit [PySide](/PySide/de "PySide/de") erstellt, einer Bibliothek die die Verwendung von Qt mit [Python](/Python/de "Python/de") ermöglicht.

![](/images/FreeCAD_creating_interfaces.svg)

Zwei übliche Methoden, um Schnittstellen zu erstellen sind das Einbetten der Schnittstelle in die Python-Datei oder die Verwendung von `.ui`-Dateien.

## Beschreibung

Es gibt zwei übliche Möglichkeiten, Schnittstellen mit PySide zu erstellen.

### Schnittstelle in einer .ui-Datei

Bei dieser Methode wird die Schnittstelle in einer `.ui`-Datei angelegt (Ein XML-Dokument, das die Struktur der Schnittstelle festlegt), die dann in den [Python](/Python/de "Python/de")-Code, der sie verwendet, importiert wird. Dies ist die empfohlene Vorgehensweise.

* Sie ermöglicht dem Anwender, die grafischen Schnittstelle unabhängig von der Logik einzusetzen, die die Schnittstelle verwendet.
* Sie ermöglicht jedem, die Schnittstelle für sich allein zu betrachten, also die `.ui`-Datei, ohne Python-Code ausführen müssen.
* Die `.ui`-Datei kann auch von jemandem ohne Programmierkenntnisse gestaltet werden.
* Die `.ui`-Schnittstelle kann als eigenständiges Fenster (modal) oder in einem eingebetteten Fenster (non-modal) eingesetzt werden; dadurch eignet sich diese bestens für selbsterstellte [Aufgaben-Fenster](/Task_panel/de "Task panel/de") (task-panels).
* da die `.ui`-Datei nur das Erscheinungsbild der Schnittstelle beschreibt, muss sie nicht mit einer bestimmten Programmiersprache verbunden sein; sie kann sowohl in [Python](/Python/de "Python/de")- als auch in C++-Code eingesetzt werden.

### Schniittstelle vollständig im Python-Code

Bei dieser Methode wird die gesamte Schnittstelle durch einige Python-Aufrufe zusammengestellt.

* Dies ist eine ältere Methode mit Schnittstellen zu arbeiten.
* Diese Methode erzeugt sehr viel Code, da viele Einzelheiten der Schnittstelle von Hand angegeben werden müssen.
* Es ist nicht so einfach, die Schnittstelle von der Logik, die diesen Code verwendet zu trennen, das heißt, dass der Anwender die [Python](/Python/de "Python/de")-Datei im richtigen Umfeld einsetzen muss, um zu sehen, wie die Schnittstelle aussehen würde.
* Diese Methode hat den Vorteil, dass sich mehrere Schnittstellen in einem einzigen Dokument befinden können, auf Kosten der Dateigröße, die sehr stark anwächst.
* Diese Methode wird nur für sehr kleine Schnittstellen empfohlen, die nur wenige Widgets anlegen, z.B. solche in [Makros](/Macros/de "Macros/de").

Beispiele für diese Methode befinden sich unter [Dialogerstellung](/Dialog_creation/de "Dialog creation/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Interface_creation/de&oldid=1550977>"