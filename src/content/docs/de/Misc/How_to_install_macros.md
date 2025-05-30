---
title: Wie man Makros installiert
---

|                                         |
| --------------------------------------- |
| Tutorium                                |
| Thema                                   |
| Programmierung                          |
| Niveau                                  |
| durchschnittliche Programmierer         |
| Zeit zum Abschluss                      |
| _Not provided_                          |
| Autoren                                 |
| [Mario52](/User:Mario52 "User:Mario52") |
| FreeCAD-Version                         |
| Alle                                    |
| Beispieldateien                         |
| _None_                                  |
| Siehe auch                              |
| _None_                                  |
|                                         |

## Beschreibung

Seit v0.17 ist es einfach, Makros mit Hilfe des [Erweiterungsverwalter](/Std_AddonMgr/de "Std AddonMgr/de") hinzuzufügen. Ein normaler Benutzer braucht nicht mehr zu tun, als dieses Werkzeug zu benutzen. Lies weiter, um weitere Informationen zur Installation von [Makros](/Macros/de "Macros/de") zu erhalten.

Makros sind Befehlssequenzen, die zur Ausführung einer komplexen Zeichenoperation verwendet werden. Makros sind [Python](/Python/de "Python/de") Skripte, d.h. sie sind Textdateien, die mit einem Texteditor geschrieben und bearbeitet werden können.

Während Python Skripte normalerweise die Erweiterung `.py` haben, sollten FreeCAD Makros die Erweiterung `.FCMacro` haben. Eine Sammlung von Makros, die von erfahrenen Anwendern geschrieben wurden, findest Du auf der Seite [Makrozepte](/Macros_recipes/de "Macros recipes/de").

Siehe [Einführung in Python](/Introduction_to_Python/de "Introduction to Python/de"), um mehr über die Programmiersprache Python zu erfahren, und dann [Python Skript Tutorium](/Python_scripting_tutorial/de "Python scripting tutorial/de") und [FreeCAD Skript Grundlagen](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de"), um das Schreiben von Makros zu erlernen.

Hier ist ein Video über [Installieren von FreeCAD Makros in Ubuntu](https://wiki.opensourceecology.org/wiki/Installing_Macros_in_FreeCAD).

## Das Menü Makro und die Symbolleiste

### Symbolleiste

- ![record](/images/Std_DlgMacroRecord.svg) [Makro aufzeichnen](/Std_DlgMacroRecord/de "Std DlgMacroRecord/de")
- ![stop](/images/Std_MacroStopRecord.svg) [Makroaufzeichnung beenden](/Std_MacroStopRecord/de "Std MacroStopRecord/de")
- ![open editor](/images/Std_DlgMacroExecute.svg) [Makros...](/Std_DlgMacroExecute/de "Std DlgMacroExecute/de")
- ![execute](/images/Std_DlgMacroExecuteDirect.svg) [Makro ausführen](/Std_DlgMacroExecuteDirect/de "Std DlgMacroExecuteDirect/de")

### Menü

Neben den Werkzeugen in der Symbolleiste sind auch die folgenden Funktionen im Menü **Makro** verfügbar.

- [An Remote-Debugger anhängen](/Std_MacroAttachDebugger/de "Std MacroAttachDebugger/de")

* ![](/images/Std_MacroStartDebug.svg) [Makro debuggen](/Std_MacroStartDebug/de "Std MacroStartDebug/de")
* ![](/images/Std_MacroStopDebug.svg) [Debuggen stoppen](/Std_MacroStopDebug/de "Std MacroStopDebug/de")

- [Einen Schritt weiter](/Std_MacroStepOver/de "Std MacroStepOver/de")
- [Einzelschritt](/Std_MacroStepInto/de "Std MacroStepInto/de")
- [Haltepunkt an/aus](/Std_ToggleBreakpoint/de "Std ToggleBreakpoint/de")

## Makros Verzeichnis

Makros werden in einem bestimmten Ordner im FreeCAD-Verzeichnis des Benutzers erstellt. Dieses Verzeichnis kann im Dialogfenster [Makro ausführen](/Std_DlgMacroExecute/de "Std DlgMacroExecute/de") oder im [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") über das Menü **Bearbeiten → Einstellungen → Python → Makro → Einstellungen für Makroaufzeichnung** angepasst werden.

Heruntergeladene Makros sollten ebenfalls in diesem Verzeichnis abgelegt werden.

### Standardverzeichnis

Makros können einfach in das folgende Verzeichnis kopiert werden:

```
$ROOT_DIR/

```

wobei `$ROOT_DIR` ein Verzeichnis der obersten Ebene ist, das von FreeCAD beim Start durchsucht wird.

`$ROOT_DIR` könnte ein systemweites Verzeichnis sein; in dem Fall wird das Makro für alle Benutzer installiert.

- Unter Linux ist es normalerweise `/usr/share/freecad/`
- Unter Windows ist es normalerweise `C:\Program Files\FreeCAD\`
- Unter Mac OSX ist es normalerweise `/Applications/FreeCAD/`

`$ROOT_DIR` könnte das Verzeichnis eines bestimmten Benutzers sein.

- Unter Linux ist es normalerweise `/home/Benutzername/.local/share/FreeCAD/` (0.20 und neuer) oder `/home/Benutzername/.FreeCAD/` (0.19 und davor).
- Unter Windows ist es normalerweise `C:\Users\ Benutzername\AppData\FreeCAD\`
- Unter Mac OSX ist es normalerweise `/Users/Benutzername/Library/Preferences/FreeCAD/`

### Das Benutzerverzeichnis konfigurieren

1. Menüeintrag **Makro → ![](/images/Std_DlgMacroExecute.svg) [Makros...](/Std_DlgMacroExecute/de "Std DlgMacroExecute/de")** auswählen, um den Dialog [Makro ausführen](/Std_DlgMacroExecute/de "Std DlgMacroExecute/de") zu öffnen.

![](/images/Dxf_Importer_Install_01.png)

Öffnen des Makro ausführen Dialogs

2. Den entsprechenden `Speicherort der Benutzermakros` angeben.

- Linux: normalerweise `/home/username/.local/share/FreeCAD/` (0.20 und neuer) oder `/home/username/.FreeCAD/` (0.19 und davor)
- Windows: normalerweise `C:\Users\username\AppData\Roaming\FreeCAD\`
- MacOS: normalerweise `/Users/username/Library/Preferences/FreeCAD/`

![](/images/Dxf_Importer_Install_02.png)

Setting of the macros directory

3. Navigiere zu diesem Verzeichnis auf deinem Computer.

- Linux: Füge die Adresse in deinen Dateimanager ein, "Nautilus" oder andere. Eventuell musst du Ctrl+H drücken, um das versteckte Verzeichnis `.FreeCAD/` sichtbar zu machen.
- Windows: Füge die Adresse in dein "Datei Suchprogramm" ein und bestätige.
- MacOS: Suche den Ordner im "Finder" oder füge die Adresse in ein "Datei Suchprogramm" ein; merke dir das `file:///` Vorsatzzeichen im "Datei Suchprogramm" für eine Datei auf der Festplatte.

![](/images/Dxf_Importer_Install_03.png)

Accessing the macros directory in the operating system

4. Füge diesem Verzeichnis Makrodateien hinzu.

- Linux: Lasse den Dateimanager geöffnet und setze ein Lesezeichen für den schnelleren Zugriff.
- Windows: Lasse das Datei Suchprogramm geöffnet.
- MacOS: Lasse entweder ein "Finder"-Fenster geöffnet, oder setze ein Lesezeichen für den Speicherort in deinem "Datei Suchprogramm", oder richte einen "Alias" ein, um darauf zu zeigen, oder ziehe den Ordner in die " Seitenleiste" des "Finders", so dass er von anderen Programmen, wie z.B. Texteditoren, verwendet werden kann.

![](/images/Dxf_Importer_Install_04.png)

Macros directory

## Makros installieren

### Automatische Methode

Ab FreeCAD 0.17 verwendet man den [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") in **Werkzeuge → Addon-Manager**, um ein Makro zu installieren, das in das [FreeCAD-Macros](https://github.com/FreeCAD/FreeCAD-macros)-Repositorium aufgenommen wurde.

In früheren Versionen von FreeCAD konntest du zwei automatisierte Wege nutzen, um Makros und andere Addons zu installieren:

- [addons_installer.FCMacro](https://github.com/FreeCAD/FreeCAD-addons): selbst ein Makro, dies war der Vorläufer des Zusatzmanagers, und wird im [FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons) Repositorium beherbergt. Bei Neuinstallationen von FreeCAD muss dieses Tool nicht verwendet werden.
- [freecad-pluginloader](https://github.com/microelly2/freecad-pluginloader): ebenfalls ein Makro, es kann verwendet werden, um neue Komponenten in FreeCAD zu installieren. Es wird nicht mehr weiterentwickelt.

Der empfohlene Weg, Zusätze, d.h. [externe Arbeitsbereiche](/External_workbenches/de "External workbenches/de") und Makros zu installieren, ist mit dem [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de"). Du kannst jedoch immer noch Makros mit den in den folgenden Abschnitten beschriebenen manuellen Methoden zu deinem System hinzufügen; dies ist nützlich, wenn du deinen eigenen Code entwickelst und testest.

### Manuelle Methode 1. Den Code in den Makro Editor kopieren=

Für Makros, die relativ klein sind, 300 Zeilen oder weniger, kann der Code kopiert und direkt in den FreeCAD-Makroeditor eingefügt werden.

Wir werden ![](/images/Part_Prism_Apothem.svg) [Macro Apothem Based Prism GUI](/index.php?title=Macro_Apothem_Based_Prism_GUI/de&action=edit&redlink=1 "Macro Apothem Based Prism GUI/de (page does not exist)") als ein Beispiel verwenden.

1. Gehe auf die Makro Wiki Seite, die unter [Makro Rezepte](/Macros_recipes/de "Macros recipes/de") aufgelistet sein sollte.

Wenn es ein benutzerdefiniertes Symbol gibt, lade es herunter; klicke mit der rechten Maustaste darauf und wähle `Bild speichern unter...`; platziere das Symbol im Makroverzeichnis. Dieses Symbol kann als Tastaturkürzel für das Makro in einer [benutzerdefinierten Werkzeugleiste](/Customize_Toolbars/de "Customize Toolbars/de") verwendet werden. Das Standardsymbol ist ![](/images/Text-x-python.png).

![](/images/Macro_Install_HowTo_28.png)

Downloading the icon from the macro page

2. Wähle auf der Makroseite den Code innerhalb der Abschnitte _Skript_ oder _Makro_ aus und kopiere ihn.

3. Öffne in FreeCad das Menü **Makro → ![](/images/Std_DlgMacroExecute.svg) [Makros...](/Std_DlgMacroExecute/de "Std DlgMacroExecute/de")**, um den [Makro Dialog ausführen](/Std_DlgMacroExecute/de "Std DlgMacroExecute/de") zu öffnen.

![](/images/Dxf_Importer_Install_01.png)

Öffnen des Makro ausführen Dialogs

4. Klicke Erstelle.

![](/images/Macro_Install_HowTo_17.png)

Creating a new macro

5. Gib den Makronamen ein, hier `Macro_Apothem_Based_Prism_GUI`, und drücke OK.

![](/images/Macro_Install_HowTo_18.png)

Entering the macro name

6. Der Makro Editor öffnet sich und zeigt den vollständigen Pfad des neuen Makros an.

![](/images/Macro_Install_HowTo_19.png)

The macro editor

7. Füge den Code in das Editorfenster ein und klicke dann auf das Kreuz auf der Registerkarte, um das Fenster zu schließen.

![](/images/Macro_Install_HowTo_20.png)

Closing the macro editor

8. Ein Fenster erscheint, das nach Bestätigung zum Speichern des Codes fragt; klicke auf Ja. Du kannst auch Ctrl+S verwenden, um die Datei zu speichern.

Starte FreeCAD neu, um das neue Makro korrekt zu registrieren.

![](/images/Macro_Install_HowTo_27.png)

Asking for confirmation to save the code

9. Öffne dann das Menü erneut, **Makro → ![](/images/Std_DlgMacroExecute.svg) [Makros...](/Std_DlgMacroExecuteDirect/de "Std DlgMacroExecuteDirect/de")**, wähle das neue Makro und drücke Ausführen.

![](/images/Macro_Install_HowTo_21.png)

Selecting the macro to run it

10. Das Makro läuft jetzt. Fülle die Felder mit deinen Werten aus und klicke auf die Schaltfläche OK.

![](/images/Macro_Install_HowTo_22.png)

The macro in action; fill in the information and press OK when ready

11. Dieses Makro sollte einen Fehler zurückgeben, wenn kein Dokument aktiv ist; andere Makros öffnen ein neues Dokument, wenn keines existiert.

Erstelle ein neues Dokument mit **Datei → ![](/images/Std_New.svg) [Neu](/Std_New/de "Std New/de")**, und wiederhole dann die vorherigen Schritte, um das Makro auszuführen.

![](/images/Macro_Install_HowTo_23.png)

Das Makro gibt einen Fehler zurück, wenn kein Dokument aktiv ist

12. Sobald ein aktives Dokument verfügbar ist, wird das Makro ausgeführt und ein Objekt erstellt.

![](/images/Macro_Install_HowTo_24.png)

Vom Makro erzeugtes Objekt

13. Du kannst das Makro erneut im Editor öffnen, um es auszuführen oder zu modifizieren. Gehe zu **Makro → ![](/images/Std_DlgMacroExecute.svg) [Makros...](/Std_DlgMacroExecute/de "Std DlgMacroExecute/de")**, wähle das Makro aus und drücke Bearbeiten.

![](/images/Macro_Install_HowTo_25.png)

Öffnen des Makros im Editor

14. Das Makro kann nun mit **Makro → ![](/images/Std_DlgMacroExecuteDirect.svg) [Makro ausführen](/Std_DlgMacroExecute "Std DlgMacroExecute")**, oder durch Klicken auf die ![](/images/Std_DlgMacroExecuteDirect.svg) [Ausführen](/Std_DlgMacroExecute/de "Std DlgMacroExecute/de") Taste in der Werkzeugleiste.

![](/images/Macro_Install_HowTo_26.png)

Ausführen des im Editor geladenen Makros

### Manuelle Methode 2. Eine Makrodatei aus einer komprimierten .zip-Datei hinzufügen

Einige Makros sind zu groß, als dass es unbequem ist, sie zu kopieren und in den Makro Editor einzufügen, oder sie können nicht im Wiki beherbergt werden. In diesem Fall kann der Code irgendwo anders beherbergt werden, in einem Github Repositorium oder im [FreeCAD Forum](https://forum.freecadweb.org/). Der Code kann auch in eine `.zip` Datei, einen Tarball `.tar.xz` oder eine andere Art von Archiv komprimiert werden, wenn es mehrere Dateien enthält. Wenn der Code auf diese Weise verteilt wird, sollte das Archiv extrahiert und die Dateien im Makro Verzeichnis abgelegt werden.

Wir werden ![](/images/Text-x-python.png) [Makro Schrauben Ersteller](/Macro_screw_maker1_2 "Macro screw maker1 2") als ein Beispiel.

1. Lade den komprimierten Code aus dem Forum herunter, [Screw Maker](http://forum.freecadweb.org/viewtopic.php?f=22&t=6558#p52887).

Du musst einen Dekompressor verwenden, um die internen Dateien zu erhalten.

- Für Windows kannst Du ein Programm wie [7-zip](http://www.7-zip.org/) oder [L-Zarc](http://www.kanmandet.dk/?p=37) oder [quickzip](http://www.quickzip.org/quickzip51.html) verwenden.
- Für Linux kannst Du einen Befehl vom Terminal aus verwenden

```
unzip your_file.zip -d your_directory

```

2. Lade das komprimierte Archiv mit dem Makrocode in einen lokalen Ordner herunter.

![](/images/Macro_Install_HowTo_01.png)

Herunterladen des komprimierten Archivs in ein lokales Verzeichnis

3. Entpacke die Datei in dem Ordner.

![](/images/Macro_Install_HowTo_02.png)

Entpacken der Datei im Ordner

4. Der Entpacker erstellt ein neues Verzeichnis mit den entpackten Dateien.

![](/images/Macro_Install_HowTo_03.png)

Neues Verzeichnis nach dem Entpacken des Archivs erstellt

5. Gehe in das neue Verzeichnis und kopiere oder schneide die Makrodatei aus.

![](/images/Macro_Install_HowTo_04.png)

Eingeben des neu erstellten Verzeichnisses mit der entpackten Makrodatei

6. Gehe in das Makroverzeichnis und füge die Datei dort ein.

![](/images/Macro_Install_HowTo_05.png)

Platzieren der Makrodatei im Makroverzeichnis

7. Öffne in FreeCAD das Menü **Makro → ![](/images/Std_DlgMacroExecute.svg) [Makros...](/Std_DlgMacroExecute/de "Std DlgMacroExecute/de")**, um den [Makro Dialog ausführen](/Std_DlgMacroExecute/de "Std DlgMacroExecute/de") zu öffnen.

![](/images/Macro_Install_HowTo_06.png)

Öffnen des Makro ausführen Dialogs

8. Wähle das neue Makro aus und drücke Ausführen.

![](/images/Macro_Install_HowTo_07.png)

Auswählen des Makros zur Ausführung

9. Das Makro läuft jetzt. Wähle die gewünschten Optionen aus und klicke auf die Schaltfläche Erstellen.

![](/images/Macro_Install_HowTo_08.png)

Das Makro in Aktion; wähle die gewünschten Optionen und drücke Erstellen, wenn du bereit bist.

![](/images/Macro_Install_HowTo_30.png)

Vom Makro erzeugtes Objekt

## Ein Makro in der Kommandozeile ausführen

Ein Makro von der Kommandozeile aus ausführen (.FCMacro oder .py)

unter Windows

```
"C:\Program Files\FreeCAD\bin\FreeCAD.exe" "C:\Users\userName\AppData\Roaming\FreeCAD\Mod\WorkFeature\start_WF.FCMacro"

```

unter Linux

```
todo

```

## Fehler in Makros

### Einrückungsfehler

Der weiße Raum am Anfang der Zeilen (Einrückung) ist in der Programmiersprache [Python](/Python/de "Python/de") sehr wichtig und ein integraler Bestandteil des Codes. Ein ungeeignetes Leerzeichen kann dazu führen, dass der Code nicht läuft oder Fehler aufweist.

Dieser Abschnitt beschreibt einige Fehler, die beim Kopieren und Einfügen sowie beim Schreiben von Makrocode auftreten können.

Ein typischer Einrückungsfehler sieht wie folgt aus:

```
<unknown exception traceback><type 'exceptions.IndentationError'>: ('expected an indented block', ('C:/Users/d/AppData/Roaming/FreeCAD/Macro_Apothem_Based_Prism_GUI.FCMacro', 21, 3, 'def priSm(self):\n'))

```

#### Beispiel 1

Wenn der Code keine Einrückung aufweist, wird der Code nicht funktionieren. Klassen (`class`) und Funktionsdefinitionen (`def()`), sowie Kontrollstrukturen (`if`, `while`, `for`) sollten von einem Block eingerückten Codes gefolgt werden.

Dieser Fehler ist möglich, wenn der Benutzer den Code nicht korrekt kopiert und alle Leerzeichen versehentlich entfernt wurden.

![](/images/Macro_Install_HowTo_09.png)

Python Code, der keine Einrückung hat; er wird einen Fehler verursachen, wenn er ausgeführt wird

Einrückungsproblem behoben.

![](/images/Macro_Install_HowTo_10.png)

Python Code mit der richtigen Einrückung

Wenn der Code ausgewählt ist, sollten alle Zeilen bis zum linken Rand hervorgehoben werden, um anzuzeigen, dass die Zeilen ausgerichtet sind.

![](/images/Macro_Install_HowTo_11.png)

Python Code hervorgehoben, was zeigt, dass alle Zeilen am linken Rand beginnen

#### Beispiel 2

Wenn ein zusätzliches Leerzeichen am Anfang aller Zeilen eingefügt, wird der Python Interpreter versagen und sich über unnötige Einrückungen beschweren. In diesem Fall muss in alle Zeilen das anfangs Leerzeichen entfernt werden.

![](/images/Macro_Install_HowTo_12.png)

Python Code mit zusätzlichem Leerzeichen in jeder Zeile

#### Beispiel 3

Hier wurde der Code aus einem Foren Thema durch Verwendung Alles auswählen Schaltfläche kopiert. Anscheinend ist die Auswahl gut.

![](/images/Macro_Install_HowTo_14.png)

Python Code kopiert aus einem Forum

Wenn die Auswahl jedoch in den Makro Editor eingefügt wird, scheint es zu einer unerwünschten Einrückung zu kommen.

![](/images/Macro_Install_HowTo_15.png)

Python Code aus einem Forum in den Makro Editor kopiert; unnötige Einrückung wird hinzugefügt

In this case, the initial spaces need to be removed. This can be done with a specialized text editor to quickly decrease the indentation of the lines.

Unter Windows [Notepad++](http://notepad-plus-plus.org/) kann die Auswahl ausgeführt mit Alt + Maus ziehen und dann verwenden **Bearbeiten → Einrücken → Verringere die Einrückung**.

![](/images/Macro_Install_HowTo_16.png)

Python Code mit der korrekten Einrückung

#### Beispiel 4

Hier wählt die Auswahl auch die Zeilennummern im Codebeispiel aus. Wenn diese Auswahl in den Makro Editor eingefügt wird, funktioniert sie nicht. Es müssen alle Zeilennummern entfernt und die Leerzeichen so angepasst werden, dass der Python Code die richtige Einrückung hat.

![](/images/Macro_Install_HowTo_29.png)

Auswahl, die auch die Zeilennummern auswählt; wenn dieser Code in den Makro Editor eingefügt wird, wird es nicht funktionieren

#### Guter Code

![](/images/Macro_Install_HowTo_13.png)

Python Code mit der richtigen Einrückung

### Keine Textausgabe aus Makros

Makros können Informationen im Ausgabefenster ausgeben, um detailliert zu zeigen, was der Code während der Ausführung tut.

Wenn keine Information angezeigt wird, sollte sichergestellt werden, dass das Ausgabrfenster und die [Python](/Python/de "Python/de")-Konsole sichtbar sind und dass die Ausgabe auf das Ausgabrfenster geleitet wird.

#### Informationen ausgeben

FreeCAD-Makros haben zwei Methoden, um Informationen im Ausgabefenster auszugeben.

Die FreeCAD-Funktionen

```
FreeCAD.Console.PrintMessage("Hello World! \n")
FreeCAD.Console.PrintError("Hello World! \n")
FreeCAD.Console.PrintWarning("Hello World! \n")

```

Die einfache Python-Funktion

```
print("Hello World!")

```

#### Ausgabefenster aktivieren

Um die in der Konsole angezeigten Informationen auszugeben, sollte man:

1. Gehe zum Menü **Ansicht → Paneele**.

![](/images/Macro_Install_HowTo_31.png)

![](/images/Macro_Install_HowTo_32.png)

Sichtbarmachung der Panels im Menü Ansicht → Paneele

2. Das `Ausgabefenster` und die `Python-Konsole` aktivieren.

![](/images/Macro_Install_HowTo_33.png)

Aktivieren des Ausgabefensters und der Python-Konsole

3. Die Bedienfelder sind jetzt sichtbar, und Befehle wie `FreeCAD.Console.PrintMessage()` geben jetzt Informationen aus, die im `Ausgabefenster` angezeigt werden.

![](/images/Macro_Install_HowTo_34.png)

FreeCAD-Hauptfenster mit dem Ausgabefenster und der Python-Konsole

#### Den Befehl print() aktivieren

FreeCAD muss möglicherweise so konfiguriert werden, dass die Ausgabe der [Python](/Python/de "Python/de")-Funktion `print()` korrekt ins Ausgabefenster umgeleitet wird.

1. Den Menüeintrag **Bearbeiten → Einstellungen** auswählen, um in den [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") zu wechseln .

![](/images/Macro_Install_HowTo_35.png)

In den Voreinstellungseditor wechseln

2. Zum Abschnitt **Python** wechseln, und dann zu **Ausgabefenster → Python Interpreter**.

![](/images/Macro_Install_HowTo_36.png)

Einstellungen des Ausgabefensters

3. Beide Kästchen ankreuzen:

- ![](/images/Case_a_cocher_O.png) Interne Python-Ausgabe in das Ausgabefenster umleiten

- ![](/images/Case_a_cocher_O.png) Umleiten interner Python-Fehler in das Ausgabefenster

und dann die Schaltfläche OK drücken.

![](/images/Macro_Install_HowTo_37.png)

Umleitung der Python-Ausgabe in das Ausgabefenster.

![](/images/Macro_Install_HowTo_38.png)

Python-Befehle zum Ausgeben von Informationen im Ausgabefenster.

Retrieved from "<http://wiki.freecad.org/index.php?title=How_to_install_macros/de&oldid=1298126>"
