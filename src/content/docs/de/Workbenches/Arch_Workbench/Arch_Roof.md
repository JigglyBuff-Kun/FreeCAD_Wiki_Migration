---
title: Arch Dach
---

:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|                                             |
| ------------------------------------------- |
| Arch Dach                                   |
| Menüeintrag                                 |
| 3D/BIM → Dach                               |
| Arbeitsbereich                              |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel                        |
| R F                                         |
| Eingeführt in Version                       |
| -                                           |
| Siehe auch                                  |
| _Keiner_                                    |
|                                             |

## Beschreibung

Das Werkzeug **Arch Dach** erlaubt die Erstellung eines geneigten Daches aus einem ausgewählten Linienzug. Das erstellte Dach Objekt ist parametrisch und behält seine Verbindung zum Basisobjekt. Das Prinzip ist, dass jeder Kante ein Dachprofil (Neigung, Breite, Überhang, Dicke) zugewiesen wird.

**Hinweis:** Dieses Werkzeug befindet sich noch in der Entwicklung und kann bei sehr komplexen Formen fehlschlagen.

![](/images/RoofExample.png)

Ansicht von oben auf das Dach eines Gebäudemodell mit einer gewissen Transparenz

## Anwendung (linienzugbasiert)

1. Einen Linienzug gegen den Uhrzeigersinn erstellen und auswählen.
   - ![](/images/CounterclockwiseWire.png)
2. Die Schaltfläche ![](/images/Arch_Roof.svg) Dach drücken oder das Tastaturkürzel R dann F.
3. Das Standard-Dach-Objekt könnte eine seltsame Form haben, weil das Werkzeug nicht alle notwendigen Informationen hat
4. Nach dem Erstellen des Standard-Dachs, auf das Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") doppelklicken, um auf alle Eigenschaften zuzugreifen und sie zu bearbeiten. Der Winkel (Angle) muss zwischen 0 und 90 liegen.
   - ![](/images/RoofTable.png)
5. Jede Zeile entspricht einer Dachscheibe. Es können also für jede Dachscheibe die gewünschten Eigenschaften festgelegt werden.
6. Um Dir zu helfen, kannst Du `Angle` oder `Run` auf `0` setzen und eine `relative Id` definieren, so dass eine automatische Berechnung die Daten relativ zu dieser `relative Id` ermittelt.
7. Es funktioniert folgendermaßen:
   1. Falls `Angle = 0` und `Run = 0`, dann ist das Profil identisch zum relativen Profil
   2. Falls `Angle = 0`, dann wird der `Angle` berechnet, so dass die Höhe die gleiche wie beim relativen Profil ist
   3. Falls `Run = 0`, dann wird der `Run` berechnet, so dass die Höhe die gleiche wie beim relativen Profil ist
8. Am Ende setze den Winkel auf 90°, um einen Giebel zu erstellen
   - ![](/images/RoofProfil.png)
9. _Hinweis_: für ein besseres Verständnis siehe bitte diesen [youtube clip](https://www.youtube.com/watch?v=4Urwru71dVk).

## Anwendung (Festkörperbasiert)

Hat das Dach eine komplexe Form (es enthält z.B. geneigte Fenster oder andere nicht standardmäßige Formelemente), kann man selbst ein Festkörperobjekt mit Hilfe verschiedener FreeCAD-Arbeitsbereiche ([Part](/Part_Workbench/de "Part Workbench/de"), [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") usw.) erstellen und dann diesen Festkörper als Daten-Eigenschaft**Base**-Objekt des Daches verwenden:

1. Das Festkörper-Basisobjekt auswählen.
2. Die Schaltfläche ![](/images/Arch_Roof.svg) Arch Dach drücken, oder das Tastaturkürzel R dann F.

## Ein Dach abziehen

Dächer haben ein automatisch erstelltes Abzugsvolumen ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") für Dächer mit einer Festkörper-Basis). Wird ein Dach von den Wänden eines Gebäudes [entfernt](/Arch_Remove/de "Arch Remove/de"), wird sowohl das Dach selbst als auch alles darüber befindliche von den Wänden abgezogen.

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Es ist möglich, das automatische Abzugsvolumen zu überschreiben, indem die Daten-Eigenschaft**Subvolume** des Daches auf ein selbsterstelltes Festkörperobjekt gesetzt wird.

![](/images/Arch_Roof_Subtract_Default.png) ![](/images/Arch_Roof_Subtract_Subvolume.png) ![](/images/Arch_Roof_Subvolume_Example.png)

Festkörperbasiertes Dach bevor (erstes Bild) und nachdem es von Wänden [entfernt](/Arch_Remove/de "Arch Remove/de") wurde (zweites Bild).  
Das dritte Bild zeigt das erstellte Abzugsvolumen.

## Eigenschaften

- Eine Arch Dach (Roof-Objekt) besitzt die gemeinsamen Eigenschaften und Verhaltensweisen aller [Arch-Komponenten](/Arch_Component/de "Arch Component/de").

### Daten

Roof

- Daten-Eigenschaft**Angles** (`FloatList`): Die Liste der Winkel des Dachabschnitts.
- Daten-Eigenschaft**Border Length** (`Length`): Die Gesamtlänge der Ränder des Dachs.
- Daten-Eigenschaft**Face** (`Integer`): Die Nummer der Fläche des Basisobjekts, auf dem das Dach aufbaut (nicht verwendet).
- Daten-Eigenschaft**Flip** (`Bool`): Gibt an, ob die Richtung des Dachs umgedreht werden sollte.
- Daten-Eigenschaft**Heights** (`FloatList`): Die Liste der berechneten Höhen des Dachabschnitts.
- Daten-Eigenschaft**Id Rel** (`IntegerList`): Die Liste der IDs der zugehörigen Profile des Dachabschnitts.
- Daten-Eigenschaft**Overhang** (`FloatList`): Die Liste der Überhänge der Dachabschnitte.
- Daten-Eigenschaft**Ridge Length** (`Length`): Die Gesamtlänge der Grate und Sparren des Dachs.
- Daten-Eigenschaft**Runs** (`FloatList`): Die Liste der Projektionen horizontaler Längen der Dachabschnitte.
- Daten-Eigenschaft**Subvolume** (`Link`): Das abzuziehende Volumen. Wenn angegeben, wird es anstatt des automatisch erstellten Untervolumens verwendet. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
- Daten-Eigenschaft**Thickness** (`FloatList`): Die Liste der Dicken der Dachabschnitte.

## Skripten

_Siehe auch:_ [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Dach kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit folgender Funktion verwendet werden:

```
Roof = makeRoof(baseobj=None, facenr=0, angles=[45.,], run=[], idrel=[0,], thickness=[50.,], overhang=[100.,], name="Roof")

```

- Erstellt ein `Roof` Objekt basierend auf dem vorgegebenen `baseobj`, das ein geschlossener Linienzug oder ein Festkörper sein kann.
  - Falls `baseobj` ein Linienzug ist, kannst Du eine Liste von `angles` (Winkeln), `run` (Auflage?), `idrel`, `thickness` (Stärke) und `overhang` (Überhang) für jede Kante des Linienzuges vorgeben, um die Dachform zu definieren. Der Standardwert für Winkel ist 45 und die Liste wird automatisch komplettiert, so dass sie mit der Anzahl von Kanten übereinstimmt.
  - Die Listen werden automatisch komplettiert, damit die Anzahl mit der Anzahl der Kanten des Linienzuges übereinstimmt.

Beispiel:

```
import FreeCAD as App
import Arch, Draft

doc = App.newDocument()

rect = Draft.makeRectangle(3000, 4000)
doc.recompute()

roof = Arch.makeRoof(rect, angles=[30.,])

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(0, 2000, 0)

wire = Draft.make_wire([p1, p2, p3], closed=True)
doc.recompute()

roof1 = Arch.makeRoof(wire)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Roof/de&oldid=1542090>"
