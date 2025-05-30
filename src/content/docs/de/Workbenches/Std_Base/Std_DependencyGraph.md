---
title: Std Abhängigkeitsdiagramm
---

|                                                                                                      |
| ---------------------------------------------------------------------------------------------------- |
| Std Abhängigkeitsdiagramm                                                                            |
| Menüeintrag                                                                                          |
| Werkzeuge → Abhängigkeitsdiagramm...                                                                 |
| Arbeitsbereich                                                                                       |
| Alle                                                                                                 |
| Standardtastenkürzel                                                                                 |
| _Keiner_                                                                                             |
| Eingeführt in Version                                                                                |
| -                                                                                                    |
| Siehe auch                                                                                           |
| [Std AbhängigkeitsdiagrammExportieren](/Std_ExportDependencyGraph/de "Std ExportDependencyGraph/de") |
|                                                                                                      |

## Beschreibung

Der Befehl **Std Abhängigkeitsdiagramm** zeigt die Abhängigkeiten zwischen Objekten im aktiven Dokument in einem Diagramm an. Im Gegensatz zur [Baumansicht](/Tree_view/de "Tree view/de") werden die Objekte in umgekehrter chronologischer Reihenfolge aufgelistet, wobei das erste erstellte Objekt unten steht.

Es kann bei der Analyse eines FreeCAD-Dokuments und beim Auffinden von Verzweigungen in einem Baum nützlich sein. Das Layout des Abhängigkeitsdiagramms hängt davon ab, welcher Arbeitsbereich verwendet wurde, um die Objekte im Dokument zu erstellen. Beispielsweise kann ein Modell, das ausschließlich im Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") erstellt wurde, ein lineares Abhängigkeitsdiagramm mit einem einzigen vertikalen Zweig anzeigen. Ein Modell, das mit [Part](/Part_Workbench/de "Part Workbench/de")-Arbeitsgängen erstellt wurde, hat viele Zweige, aber für ein einzelnes Teil schließen sie sich nach [Booleschen](/Part_Boolean/de "Part Boolean/de") Verknüpfungen oben an. Wenn dies nicht der Fall ist, bedeutet dies, dass sie separate Objekte sind.

Der Abhängigkeitsgraph ist ein reines Visualisierungswerkzeug, daher kann er nicht bearbeitet werden. Er wird automatisch aktualisiert, wenn Änderungen am Modell vorgenommen werden.

![](/images/Std_DependencyGraph_example.svg)

Beispiel eines Abhängigkeitsgraphen mit einem PartDesign-Körper auf der linken Seite und einem in der Arbeitsumgebung Part erzeugten Objekt auf der rechten Seite

## Installation

Um den Befehl verwenden zu können, muss eine Drittanbieter Software namens [Graphviz](https://graphviz.org/) installiert sein. Wenn du diese nicht vorinstalliert hast oder sie an einem unkonventionellen Ort installiert ist, zeigt FreeCAD den folgenden Dialog an:

![](/images/FreeCAD-0.17-missing-Graphviz-error-dialogue.png)

The saved path can be changed in the [Parameter Editor](/Std_DlgParameter "Std DlgParameter") under **BaseApp → Preferences → Paths → Graphviz**.

### Windows

Lade das **graphviz-2.xx** Installationsprogramm von der [Graphviz Download Seite](https://graphviz.org/download/#windows) herunter und starten es, um es zu installieren. Einige ältere Versionen scheinen Probleme bei der Anzeige des Graphen zu haben; Version 2.38 und neuer sind als zuverlässig bekannt. Du kannst alle Graphviz Versionen auf [Gitlab](https://gitlab.com/graphviz/graphviz/-/releases) finden.

### macOS

Graphviz lässt sich mit [Homebrew](https://brew.sh/) auf einem System mit macOS Big Sur (11) (oder höher) installieren.
Werde bei der Installation von Homebrew nicht nervös, wenn macOS dich auffordert, Updates zu installieren, z.B. für die Xcode Kommandozeilenprogramme. Diese Updates werden später durch den Installationsprozess durchgeführt.

```
brew install graphviz

```

Dies installiert die Graphviz-Binärdateien unter /usr/local/bin für macOS auf Intel, oder unter /opt/homebrew für macOS auf Apple Silicon/ARM. FreeCAD sollte diese Speicherorte automatisch finden. Wird das Graphviz-Program dort nicht gefunden, wird man aufgefordert einen Pfad anzugeben. Leider können wir in dem Dialog, der mit **Tools → Dependency graph...** geöffnet wird, nicht direkt zum Programm navigieren. Es gibt zwei Möglichkeiten: die Tastenkombination Cmd+Shift+. zum Anzeigen ausgeblendeter Elemente. Oder die Tastenkombination Cmd+Shift+G, um ein Eingabefeld für den Pfad zu öffnen. Einen dieser Pfade im [Terminal](<https://de.wikipedia.org/wiki/Terminal_(Apple)>) eingeben:

```
/usr/local/bin

```

oder:

```
/opt/homebrew/bin

```

ein und bestätigt das Eingabefeld und den Dateiauswahldialog.

Falls die Graphviz-Binärdateien an einem nicht-standardmäßigen Ort installiert sind, kann man versuchen, das Programm mit folgendem Befehl zu finden:

```
type dot

```

Es wird etwas ausgegeben wie:

```
dot is /usr/local/bin/dot

```

Und man kann FreeCAD anweisen, in diesem Verzeichnis zu suchen.

If you don't have macOS Big Sur (11) (or higher) Homebrew might not work, but you can use [MacPorts](https://www.macports.org/index.php) instead. Just download the [appropriate version for your OS](https://www.macports.org/install.php). Once the installation is complete, enter this command in the [Terminal](<https://en.wikipedia.org/wiki/Terminal_(macOS)>):

```
sudo port install graphviz

```

Enter your password and wait while the dependencies are downloaded and installed (it can take some time).

The Graphviz binaries may be under /usr/local/bin or /opt/local/bin/dot. FreeCAD may automatically find the Graphviz program with the file dialog that comes up from **Tools → Dependency graph...**, if not enter this command:

```
type dot

```

It will output something like:

```
dot is /opt/local/bin/dot

```

And you can tell FreeCAD to look in that directory as explained before.

It is also possible to make the opt directory visible with this command:

```
defaults write com.apple.finder AppleShowAllFiles YES;

```

then:

```
killall Finder /System/Library/CoreServices/Finder.app;

```

Therefore you can tell FreeCAD to follow this path. It has been successfully tested on macOS 10.13 (High Sierra).

### Linux

Auf den meisten Linux-Distributionen (Debian/Ubuntu, Fedora, OpenSUSE) muss nur das Paket Graphviz aus den Repositorien installiert werden. Ähnlich wie bei macOS, wenn die Graphviz-Binärdateien an einem nicht standardmäßigen Ort installiert sind, kannman versuchen, das Programm mit folgendem Befehl zu finden:

```
type dot

```

Sie wird etwas ausgeben wie

```
dot is /usr/local/bin/dot

```

Und deshalb kannst du FreeCAD darauf hinweisen, in diesem Verzeichnis zu suchen.

## Anwendung

1. Den Menüeintrag **Werkzeuge → ![](/images/Std_DependencyGraph.svg) Abhängigkeitsgraph...** auswählen.
2. Eine neue Registerkarte mit dem Titel **Abhängigkeitsgraph** wird im [Hauptansichtsbereich](/Main_view_area/de "Main view area/de") geöffnet.
3. Zum Vergrößern oder Verkleinern wird das Scrollrad der Maus verwendet.
4. Die Schieberegler unten und rechts auf dem Bildschirm werden verwendet, um die Ansicht zu verschieben. Alternativ die linke Maustaste gedrückt halten und die Maus bewegen.

## Speichern

Du kannst ein Abhängigkeitsdiagramm speichern:

1. Stelle sicher, dass das Register Abhängigkeitsdiagramm im Vordergrund ist.
2. Wähle die Option **Datei → [Speichern](/Std_Save/de "Std Save/de")** oder **Datei → [Speichern als](/Std_SaveAs/de "Std SaveAs/de")** aus dem Menü.
3. Gib einen Dateinamen ein und wähle den Dateityp (\*.gv, \*.png, \*.bmp, \*.gif, \*.jpg, \*.svg oder \*.pdf).
4. Drücke die Taste Save.

## Allgemeine Grundsätze

- Das Diagramm zeigt die Objekte in umgekehrter chronologischer Reihenfolge.
- Die Richtung der Pfeile, die Abhängigkeiten anzeigen, sollte immer nach unten zeigen. Ein Pfeil, der nach oben zeigt, weist auf eine zyklische Abhängigkeit hin, ein Problem, das gelöst werden muss.
- Eine Skizze, die Verknüpfungen zu [externer Geometrie](/Sketcher_External/de "Sketcher External/de") enthält, hat eine Zahl mit dem Suffix "x" neben dem Pfeil, der sie mit seinem Vorläufer verbindet, die die Anzahl der in der Skizze verknüpften externen Geometrien anzeigt.
- Objekte können Abhängigkeiten zu mehreren Vorläufern haben. Beispielsweise kann bei einem Modell, das in [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") erstellt wurde, eine Tasche mit ihrer Skizze und mit dem Polster Formelement verknüpft sein, das ihr vorausging.
- Unzulässige Abhängigkeiten (z.B. zwischen einem [Draft\_](/Draft_Workbench/de "Draft Workbench/de")/[Part-](/Part_Workbench/de "Part Workbench/de") Vorgang und einem Element innerhalb eines PartDesign-Körpers) werden mit einem roten Pfeil angezeigt. Diese Verknüpfungstyp zeigt normalerweise einen Fehler 'Verknüpfungen gehen außerhalb des zulässigen Bereichs' im [Ausgabefenster](/Report_view/de "Report view/de") an.
- Ein [Part Container](/Std_Part/de "Std Part/de") und [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de") umschließen ihren Inhalt innerhalb eines Rahmens mit einem zufällig gefärbten Hintergrund. Ihr Ursprung umschließt ebenfalls seinen Inhalt (Standardebenen und -achsen) in einem Rahmen.
- Eine [Gruppe](/Std_Group/de "Std Group/de") wird als ein einzelnes Element angezeigt, das mit seinem Inhalt verknüpft ist.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DependencyGraph/de&oldid=1536842>"
