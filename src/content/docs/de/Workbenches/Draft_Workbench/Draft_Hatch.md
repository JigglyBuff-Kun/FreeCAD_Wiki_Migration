---
title: Draft Schraffur
---
|  |
| --- |
| Draft Schraffur |
| Menüeintrag |
| Zeichnen → Schraffur Anmerkung → Schraffur |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| H A |
| Eingeführt in Version |
| 0.20 |
| Siehe auch |
| [Draft Muster](/Draft_Pattern/de "Draft Pattern/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Hatch.svg) **Draft Schraffur** erzeugt Schraffuren auf den ebenen Flächen eines ausgewählten Objekts.

## Anwendung

1. Ein Objekt mit Flächen auswählen. Nur die ebenen Flächen des Objekts werden schraffiert.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Hatch.svg) Schraffur drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Zeichnen → ![](/images/Draft_Hatch.svg) Schraffur** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Anmerkung → ![](/images/Draft_Hatch.svg) Schraffur** auswählen.
   * Das Tastaturkürzel H dann A.
3. Das Aufgaben-Fenster **Schraffur** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
4. Die Schaltfläche OK drücken.

## Optionen

* Die Schaltfläche ... drücken und eine **PAT-Datei** auswählen. Siehe [Hinweise](#Hinweise).
* **Muster** aus der Datei wählen.
* **Maßstab** für das Muster angeben.
* **Drehung** für das Muster angeben.
* Esc oder die Schaltfläche Cancel drücken, um den Befehl abzubrechen.

## Schraffur-Ausrichtung

Wenn das Schraffurmuster für eine Fläche berechnet wird, wird es standardmäßig vorübergehend in die globale XY-Ebene übersetzt. Bei einer Fläche mit geraden Kanten bestimmt die erste gerade Kante, wie dies geschieht. Der erste Punkt dieser Kante wird auf den Ursprung gelegt und die Kante selbst wird an der X-Achse ausgerichtet. Wenn ein [Draft-Linienzug](/Draft_Wire/de "Draft Wire/de") in diesem Sinne erstellt wird, kann gesteuert werden, wie das Schraffurmuster an der Kontur der Fläche ausgerichtet wird.

Wenn alle Flächen des ausgewählten Objekts auf der globalen XY-Ebene liegen, kann dieses Standardverhalten ausgeschaltet werden, indem die Eigenschaft Daten-Eigenschaft**Translate** der Draft-Schraffur auf `false` gesetzt wird. Das Schraffurmuster wird dann mit dem Ursprung und der X-Achse des globalen Koordinatensystems ausgerichtet. Für Flächen auf der XY-Ebene mit geraden Kanten kann die Eigenschaft Daten-Eigenschaft**Translate** verwendet werden, um zwischen absoluten (links im Bild) und relativen (rechts im Bild) Mustern zu wechseln.

![](/images/Draft_Hatch_alignment.png)

Zwei Draft-Linienzüge mit Schraffur.  
Die Linien wurden ausgehend vom unteren linken Punkt gegen den Uhrzeigersinn erstellt.  
Bei der Draft-Schraffur auf der linken Seite ist die Eigenschaft Translate auf false gesetzt.  
Bei der Draft-Schraffur auf der rechten Seite ist sie auf true gesetzt.

## Hinweise

* Für den Moment empfiehlt es sich, eine PAT-Datei herunterzuladen. Viele können online gefunden werden. Es kann zum Beispiel eine Websuche nach acad.pat oder acadiso.pat durchgeführt werden.
* Eine kleine PAT-Datei wird mit FreeCAD installiert: <PROGRAMM\_ORDNER>/data/Mod/TechDraw/PAT/FCPAT.pat, wobei der <PROGRAMM\_ORDNER> der FreeCAD-Programmordner ist:
  + Unter Linux ist es normalerweise /usr/share/freecad.
  + Unter Windows ist es normalerweise C:\Program Files\FreeCAD.
  + Unter macOS ist es normalerweise /Applications/FreeCAD.
* 1.0 und davor: Muster mit Strichlinien werden nicht richtig verarbeite.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") und [Draft Einstellungen](/Draft_Preferences/de "Draft Preferences/de").

Es handelt sich dabei um die folgenden Einstellungen:

* PAT-Datei: **Werkzeuge → Parameter bearbeiten... → BaseApp → Preferences → Mod → TechDraw → PAT → FilePattern**.
* Muster: **Werkzeuge → Parameter bearbeiten... → BaseApp → Preferences → Mod → TechDraw → PAT → NamePattern**.
* Maßstab: **Werkzeuge → Parameter bearbeiten... → BaseApp → Preferences → Mod → Draft → HatchPatternScale**.
* Drehung: **Werkzeuge → Parameter bearbeiten... → BaseApp → Preferences → Mod → Draft → HatchPatternRotation**.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Draft-Schraffur-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Hatch

* Daten-Eigenschaft**Basis** (`Link`): gibt das Objekt an, dessen Flächen schraffiert werden.
* Daten-Eigenschaft**File** (`File`): gibt die PAT-Datei an.
* Daten-Eigenschaft**Pattern** (`String`): gibt den Namen des Musters an.
* Daten-Eigenschaft**Rotation** (`Angle`): gibt die Drehung des Musters an.
* Daten-Eigenschaft**Scale** (`Float`): gibt den Maßstab des Musters an.
* Daten-Eigenschaft**Translate** (`Bool`): gibt an, ob die Flächen während des Schraffiervorgangs vorübergehend in die globale XY-Ebene übersetzt werden. Die Einstellung `false` kann zu falschen Ergebnissen bei nicht XY-Flächen führen.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Erstellen einer Draft-Schraffur wird die Methode `make_hatch` des Draft-Moduls verwendet:

```
hatch = make_hatch(baseobject, filename, pattern, scale, rotation)

```

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(4000, 1000)
rectangle.MakeFace = True
filename = App.getHomePath() + "data/Mod/TechDraw/PAT/FCPAT.pat"
pattern = "Horizontal5"
hatch = Draft.make_hatch(rectangle, filename, pattern, scale=50, rotation=45)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Hatch/de&oldid=1556700>"