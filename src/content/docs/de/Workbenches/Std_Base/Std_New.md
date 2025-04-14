---
title: Std Neu
---

|                                                                                |
| ------------------------------------------------------------------------------ |
| Std Neu                                                                        |
| Menüeintrag                                                                    |
| Datei → Neu                                                                    |
| Arbeitsbereich                                                                 |
| Alle                                                                           |
| Standardtastenkürzel                                                           |
| Strg+N                                                                         |
| Eingeführt in Version                                                          |
| -                                                                              |
| Siehe auch                                                                     |
| [Öffnen](/Std_Open/de "Std Open/de"), [Import](/Std_Import/de "Std Import/de") |
|                                                                                |

## Beschreibung

Der Befehl **Std Neu** erzeugt ein neues leeres Dokument und macht es zum aktiven Dokument.

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Std_New.svg) Neu drücken.
   - Den Menüeintrag **Datei → ![](/images/Std_New.svg) Neu** auswählen.
   - Das Tastaturkürzel: Strg + N.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de").

- Standardmäßig startet FreeCAD ohne ein neues Dokument. Unter **Bearbeiten → Einstellungen... → Allgemein → Dokument → Neues Dokument beim Start erzeugen** auf `true` gesetzt ist. Diese Einstellung kann auch im [Voreinstellungseditor](/Preferences_Editor/de#Dokument "Preferences Editor/de") geändert werden.
- Einige Dokumenteigenschaften: Name des Bearbeiters, Firmenname und Lizenzinformationen können unter **Bearbeiten → Einstellungen... → Allgemein → Dokument → Autorenschaft und Lizenz** voreingestellt werden.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Die meisten Eigenschaften können auch im Dialogfeld des [Std ProjektInfo](/Std_ProjectInfo/de "Std ProjectInfo/de") Befehls geändert werden.

### Daten

Basis

- Daten**Comment** (`String`): Irgendein passender Kommentar.
- Daten**Company** (`String`): Firmenname.
- Daten**Created By** (`String`): Autorenname.
- Daten**Creation Date** (`String`): Automatischer Datumstempel (schreibgeschützt).
- Daten**File Name** (`String`): Der vollständige Dateipfad. Leer, falls das Dokument bisher nicht gespeichert wurde (schreibgeschützt).
- Daten**Id** (`String`): Bisher nicht implementiert.
- Daten**Label** (`String`): Der Name, der in der [Baumansicht](/Tree_view/de "Tree view/de") erscheint. Wird nach erneutem Öffnen durch den Namen des Dokuments ersetzt.
- Daten**Last Modified By** (`String`): Autorenname.
- Daten**Last Modified Date** (`String`): Automatischer Datumstempel (schreibgeschützt).
- Daten**License** (`String`): Lizenztyp.
- Daten**License URL** (`String`): Lizenz-URL.
- Daten (Hidden)**Material** (`Map`): Map with material properties.
- Daten (Hidden)**Meta** (`Map`): Map with additional meta information.
- Daten**Show Hidden** (`Bool`): Falls aktiviert, werden in der [Baumansicht](/Tree_view/de "Tree view/de") verborgene Elemente trotzdem angezeigt. Elemente in der Baumansicht zu verbergen kann bei der Arbeit an größeren Modellen nützlich sein.
- Daten**Tip** (`Link`): Bisher nicht implementiert.
- Daten**Tip Name** (`String`): Bisher nicht implementiert.
- Daten**Transient Dir** (`String`): Das flüchtige Verzeichnis wird für Sicherheitskopien benutzt (schreibgeschützt)..
- Daten (Hidden)**Uid** (`UUID`): UUID des Dokuments (schreibgeschützt).
- Daten**Unit System** (`Enumeration`): Das Dokument-Einheitensystem. Der Ausgangswert hängt vom [Standard-Einheitensystem](/Preferences_Editor/de#Allgemein_2 "Preferences Editor/de") ab. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um ein neues Dokument zu erstellen, verwende die `newDocument([name], [hidden=False])`-Methode der FreeCAD-Anwendung. Der Dokumentname muss eindeutig sein, was automatisch geprüft wird. Falls kein Name eingeben wird, bekommt das Dokument den Namen "Untitled". Falls `hidden=True` benutzt wird, wird das neue Dokument nicht in der GUI angezeigt und es wird kein Reiter dafür erscheinen.

```
import FreeCAD
from pathlib import Path

# The folder and filename we will use:
fld = 'D:/testfiles/'
fnm = fld + 'test.FCStd'

# Make sure fld exists:
Path(fld).mkdir(parents=True, exist_ok=True)

doc = FreeCAD.newDocument()
doc.saveAs(fnm)

FreeCAD.closeDocument(doc.Name)

doc = FreeCAD.open(fnm)
doc.save()

FreeCAD.closeDocument(doc.Name)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_New/de&oldid=1500054>"
