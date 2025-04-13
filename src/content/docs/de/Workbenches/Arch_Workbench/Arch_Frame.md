---
title: Arch Rahmen
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Rahmen |
| Menüeintrag |
| 3D/BIM → Rahmen |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| F R |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/Arch_Frame.svg) Arch Rahmen wird verwendet, um alle Arten von Rahmenobjekten basierend auf einem Profil und einem Layout zu erstellen. Das Profil wird entlang der Kanten des Layouts extrudiert, bei dem es sich um ein beliebiges 2D-Objekt handeln kann, z. B. eine [Skizze](/Sketcher_Workbench/de "Sketcher Workbench/de") oder ein [Draft-Objekt](/Draft_Workbench/de "Draft Workbench/de"). Es ist besonders nützlich, um Geländer oder Rahmenwände zu erstellen. Rahmenobjekte können dann leicht in [Wände](/Arch_Wall/de "Arch Wall/de") oder [Struktur](/Arch_Structure/de "Arch Structure/de")-Objekte umgewandelt werden.

![](/images/Arch_Frame_example.jpg)

Rahmenobjekt erstellt mit dem Werkzeug [Draft RechtwinkligeAnordnung](/Draft_OrthoArray/de "Draft OrthoArray/de") aus einer [Draft-Linie](/Draft_Line/de "Draft Line/de"), unter Verwendung eines [Draft-Kreises](/Draft_Circle/de "Draft Circle/de") als Profil

## Anwendung

1. Ein Layout- und ein Profilobjekt erstellen, beispielsweise mit dem Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") oder dem Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de").
2. Zuerst das Layoutobjekt auswählen und danach mit gedrückter Strg-Taste das Profilobjekt.
3. Die Schaltfläche ![](/images/Arch_Frame.svg) Rahmen drücken oder das Tastaturkürzel F dann R.

## Optionen

* Das Rahmenobjekt kann in einem bestimmten Abstand vom Layoutobjekt platziert werden, indem seine Eigenschaft Versatz eingestellt wird.
* Das Profil wird an der Basis jeder Kante des Layoutobjekts kopiert und dann entlang dieser Kante extrudiert. Mit den Eigenschaften Ausrichten und Drehen kann gesteuert werden, wie das Profil an der Basis jeder Kante positioniert wird.

## Eigenschaften

Ein Arch-Rahmen (Frame-Objekt) besitzt die gemeinsamen Eigenschaften und Verhaltensweisen aller [Arch-Komponenten](/Arch_Component/de "Arch Component/de").

### Daten

Component

* Daten-Eigenschaft**Base** (`Link`): Das Layout auf dem dieser Rahmen basiert.

Für die anderen Eigenschaften in dieser Gruppe siehe [Arch Komponente](/Arch_Component/de#Eigenschaften "Arch Component/de").

Frame

* Daten-Eigenschaft**Align** (`Bool`): Legt fest, ob das Profil gedreht werden muss, damit seine Normale zu der jeweiligen Kante ausgerichtet wird.
* Daten-Eigenschaft**Base Point** (`Integer`): Bei Null startender Index, der den Kreuzungspunkt von Pfad und Profil indiziert:
  + `0`: Die **Basis** der Positionierung, **Placement**, des Profils. Dieser Punkt wird auch im Falle eines ungültigen Indexes verwendet.
  + `1`: Der Mittelpunkt der ersten Kante des Profils.
  + `2`: Der Endpunkt der ersten Kante des Profils.
  + `3`: Der Mittelpunkt der zweiten Kante des Profils.
  + `4`: Der Endpunkt der zweiten Kante des Profils.
  + ...
  + `n*2-1`: Der Mittelpunkt der n-ten Kante des Profils.
  + `n*2`: Der Endpunkt der n-ten Kante des Profils.
* Daten-Eigenschaft**Edges** (`Enumeration`): Die Art der Kanten, die berücksichtigt werden sollen. Die Optionen sind:
  + `All edges`: Alle Kanten.
  + `Vertical edges`: Vertikale Kanten.
  + `Horizontal edges`: Horizontale Kanten.
  + `Bottom horizontal edges`: Basiert auf der globalen Z-Koordinate des Schwerpunktes der Kante.
  + `Top horizontal edges`: Wie vorher.
* Daten-Eigenschaft**Fuse** (`Bool`): Wenn auf true gesetzt, werden überlappende Festkörper vereinigt.
* Daten-Eigenschaft**Offset** (`VectorDistance`): Ein optionaler Abstand zwischen Layout-Objekt und Frame-Objekt (Rahmen).
* Daten-Eigenschaft**Profile** (`Link`): Das Profil, auf dem dieser Rahmen (frame) basiert.
* Daten-Eigenschaft**Profile Placement** (`Placement`): Eine optionale zusätzliche Positionierung, die dem Profil hinzugefügt wird, bevor es extrudiert wird. Es wird nur die **Rotation** der Eigenschaft **Placement** verwendet. Wird ignoriert, wenn die Daten-Eigenschaft**Align** auf `true` gesetzt ist.
* Daten-Eigenschaft**Rotation** (`Angle`): Die Drehung des Profils um seine Extrusionsachse.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Rahmen kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit der folgenden Funktion verwendet werden:

```
Frame = makeFrame(baseobj, profile)

```

* Erstellt ein `Frame`-Objekt aus den gegebenen Objekten `baseobj` und `profile`.
  + `baseobj` ist ein beliebiges Objekt, das Linienzüge enthält, wie ein [Draft Linienzug](/Draft_Wire/de "Draft Wire/de") oder eine [Draft RechtwinkligeAnordnung](/Draft_OrthoArray/de "Draft OrthoArray/de"), die eine Ansammlung davon enthält.
* `profile` ist ein extrudierbares 2D-Objekt, das Flächen oder geschlossene Linienzüge enthält.

Beispiel:

```
import Draft, Arch

Line = Draft.makeLine(FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(0, 0, 2000))
baseobj = Draft.makeArray(Line, FreeCAD.Vector(1000, 0, 0), FreeCAD.Vector(0, 1, 0), 6, 1)

profile = Draft.makeCircle(200)
Frame = Arch.makeFrame(baseobj, profile)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Frame/de&oldid=1541976>"