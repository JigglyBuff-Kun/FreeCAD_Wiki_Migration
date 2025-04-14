---
title: Std ProjektHilfsprogramm
---

|                                        |
| -------------------------------------- |
| Std ProjektHilfsprogramm               |
| Menüeintrag                            |
| Werkzeuge → Dokument-Dienstprogramm... |
| Arbeitsbereich                         |
| Alle                                   |
| Standardtastenkürzel                   |
| _Keiner_                               |
| Eingeführt in Version                  |
| -                                      |
| Siehe auch                             |
| _Keiner_                               |
|                                        |

## Beschreibung

Mit dem Befehl **Std ProjektHilfsprogramm** können Dateien aus einer FreeCAD-Projektdatei (\*.FCStd), die eigentlich eine [ZIP](<https://en.wikipedia.org/wiki/Zip_(file_format)>)-Datei ist, extrahiert werden und nach manueller Bearbeitung daraus eine neue Projektdatei erstellt werden.

![](/images/Project_utility_en.png)

Das Dialogfeld Projekt-Hilfsprogramm

## Anwendung

### Projekt extrahieren

1. Den Menüeintrag **Werkzeuge → ![](/images/Std_ProjectUtil.svg) Dokument-Dienstprogramm...** auswählen.
2. Das Dialogfeld **Dokument-Dienstprogramm** wird geöffnet.
3. Die Schaltfläche ... rechts von **Dokument entpacken → Quelle** drücken.
4. Die \*.FCStd-Datei auswählen, die bearbeitet werden soll.
5. Die Schaltfläche ... rechts von **Dokument entpacken → Zielort** drücken.
6. Einen Ordner auswählen, in dem die Projektdatei extrahiert werden soll. Es ist ratsam, einen leeren Ordner zu wählen.
7. Die Schaltfläche Entpacken drücken.
8. Die Schaltfläche Schließen drücken, um das Dialogfeld zu schließen.

### Manuelle Bearbeitungen

Es ist wichtig zu erkennen, dass die Dateien innerhalb einer FreeCAD-Projektdatei miteinander verknüpft sind. Nur die Bearbeitung einer einzelnen Datei führt typischerweise zu Fehlern. Um konsistente Bearbeitungen über mehrere Dateien hinweg vorzunehmen, verwenden Sie einen guten Code-Editor, wie z.B. [Notepad++](https://notepad-plus-plus.org/) (für das Windows-Betriebssystem) oder [Notepadqq](https://notepadqq.com/s/) (für Linux-Betriebssysteme).

### Projekt erstellen

1. Den Menüeintrag **Werkzeuge → ![](/images/Std_ProjectUtil.svg) Dokument-Dienstprogramm...** auswählen.
2. Das Dialogfeld **Dokument-Dienstprogramm** wird geöffnet.
3. Die Schaltfläche ... rechts von **Dokument erstellen→ Quelle** drücken.
4. Die Datei Document.xml auswählen. Der Befehl wird automatisch alle verknüpften Dateien finden.
5. Die Schaltfläche ... rechts von **Dokument erstellen →Zielort** drücken.
6. Einen Ordner auswählen, in dem die neue Dokumentdatei erstellt werden soll.
7. Die Schaltfläche Erstellen drücken.
8. Eine neue Dokumentdatei mit dem vorgegebenen Namen project.fcstd wird im gewählten Ordner erstellt. Es erfolgt keine Warnung, wenn schon eine Datei mit diesem Namen vorhanden ist.
9. Wahlweise das Kontrollkästchen **Dokumentdatei nach Erstellen laden** aktivieren.
10. Die Schaltfläche Schließen drücken, um das Dialogfeld zu schließen.

## Hinweise

- Für weitere Informationen über das FreeCAD-Projektdatei-Format siehe [Datei-Format FCStd](/File_Format_FCStd/de "File Format FCStd/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ProjectUtil/de&oldid=1463715>"
