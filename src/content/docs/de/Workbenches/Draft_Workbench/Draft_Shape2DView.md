---
title: Draft Form2DAnsicht
---
|  |
| --- |
| Draft Form2DAnsicht |
| Menüeintrag |
| Änderung → Form in 2D Ansicht |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [TechDraw FormProjizieren](/TechDraw_ProjectShape/de "TechDraw ProjectShape/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Shape2DView.svg) **Draft Form2DAnsicht** erstellt 2D-Projektionen von ausgewählten Objekten, in der Regel 3D-Festkörper oder [Arch Schnittebenen](/Arch_SectionPlane/de "Arch SectionPlane/de"). Die Projektionen werden in der [3D-Ansicht](/3D_view/de "3D view/de") dargestellt.

Draft Form2DAnsichten können im [Arbeitsbereich TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") auf einer Seite mit dem [TechDraw DraftAnsicht](/TechDraw_DraftView/de "TechDraw DraftView/de") Befehl angezeigt werden. Wahlweise bietet der Arbeitsbereich [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") seine eigenen Befehle zum Projizieren an. Aber diese Projektionen werden nur in der Seite der Zeichnung, nicht in der [3D Ansicht](/3D_view/de "3D view/de") angezeigt.

![](/images/Draft_Shape2DView_example.jpg)

Projektion einer Festkörper Form in der XY Ebene

## Anwendung

1. Drehe wahlweise die [3D Ansicht](/3D_view/de "3D view/de"). Die Blickrichtung der Kamera in der [3D Ansicht](/3D_view/de "3D view/de") bestimmt den Projektionsvektor. Zum Beispiel eine [Draufsicht](/Std_ViewTop/de "Std ViewTop/de") wird auf die XY Ebene projiziert. Bei Projektionen die aus einer [Arch Schnittebene](/Arch_SectionPlane/de "Arch SectionPlane/de") entstehen wird der Projektionsvektor nicht beachtet.
2. Wahlweise wähle eines oder mehrere Objekte.
3. Es gibt verschiedene Möglichkeiten um den Befehl zu aktivieren:
   * Drücke die ![](/images/Draft_Shape2DView.svg) Form 2D Ansicht Schaltfläche.
   * Wähle die **Änderungen → ![](/images/Draft_Shape2DView.svg) Form 2D Ansicht** Option aus dem Menü.
4. Wenn du bis jetzt noch kein Objekt ausgewählt hast: wähle ein Objekt in der [3D Ansicht](/3D_view/de "3D view/de").
5. Die projizierten Objekte werden in der XY Ebene erzeugt.

## Wie erzeugt man Pläne und Schnitte mit unterschiedlicher Strichbreite

![](/images/Draft_shape2dview_example_plan.png)

Zeichnungen mit unterschiedlicher Strichbreite für gesehene und geschnittene Linien können durch Verwendung von zwei shape2Dview Objekten aus der selben [Arch Schnittebene](/Arch_SectionPlane/de "Arch SectionPlane/de") erzeugt werden. Eines der Form2DAnsichten Objekte hat seinen Projektionsmodus auf **Solid** gesetzt, was zum Zeichnen der gesehenen Linien führt, und ein anderes ist auf **Schnittlinien** gesetzt um die Schnittlinien zu zeichnen. Die zwei Form2DAnsichten werden dann über einander an dem selben Ort platziert.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Draft Shape2DView-Objekt wird von einem [Part Part2DObject](/Part_Part2DObject/de "Part Part2DObject/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Draft

* Daten**Auto Update** (`Bool`): legt fest, ob die Projektion automatisch neu berechnet wird, wenn sich das Daten**Base** Objekt ändert. Wählen von `false` kann ützlich sein, wenn es in einem Dokument viele Draft Form2DAnsichten gibt oder sie kompliziert sind. Falls auf `false` gesetzt muss der Befehl [Std Refresh](/Std_Refresh "Std Refresh") zum neuberechnen der Projektion verwendet werden.
* Daten**Base** (`Link`): legt das Objekt welches projiziert werden muss fest.
* Daten**Clip** (`Bool`): falls True, wird der Inhalt falls möglich mit dem Rand der Schnittebene abgeschnitten. Dies überschreibt die Abschneiden Eigenschaft des Objektes.
* Daten**Face Numbers** (`IntegerList`): legt die Indizes der zu projizierenden Flächen fest. Funktioniert nur wenn Daten-Eigenschaft**Projektionsmodus** auf `Individual Faces` gesetzt ist.
* Daten**Fuse Arch** (`Bool`): legt fest ob [BIM Objekte](/BIM_Workbench/de "BIM Workbench/de") mit gleichem Typ und Material vereinigt werden oder nicht.
* Daten**Hidden Lines** (`Bool`): legt fest, ob versteckte Linien dargestellt werden oder nicht.
* Daten**In Place** (`Bool`): funktioniert nur wenn das gewählte Objekt ein [Arch Schnittebene](/Arch_SectionPlane/de "Arch SectionPlane/de") ist, und Daten-Eigenschaft**Projektionsmodus** den Wert `Cutlines` oder `Cutfaces`hat, legt fest, ob die Projektion co-planar mit der Schnittebene erscheint.
* Daten**Projection** (`Vector`): legt die Richtung der Projektion fest. Wird ignoriert wenn Daten**Base** eine [Arch Schnittebene](/Arch_SectionPlane/de "Arch SectionPlane/de") ist.
* Daten**Projection Mode** (`Enumeration`): legt dem Modus der Projektion fest. Folgende Modi sind möglich:
  + `Solid`: projiziert das gesamte gewählte Objekt.
  + `Individual Faces`: projiziert nur die Flächen aus der Daten-Eigenschaft**Flächen Nummern** Liste.
  + `Cutlines`: funktioniert nur wenn das gewählte Objekt eine [Arch Schnittebene](/Arch_SectionPlane/de "Arch SectionPlane/de") ist, projiziert nur die von der Schnittebene geschnittenen Kanten.
  + `Cutfaces`: funktioniert nur wenn das gewählte Objekt eine [Arch Schnittebene](/Arch_SectionPlane/de "Arch SectionPlane/de") ist, projiziert jene Bereiche die von der Schnittebene durch Festkörper geschnitten wurden als Flächen.
  + `Solid faces`: projiziert das gesamte gewählte Objekt durch schneiden der Flächen eine nach der anderen. Kann verwendet werden, falls der `Solid` Modus falsche Ergebnisse liefert.
* Daten**Segment Length** (`Float`): legt die Größe von linearen Elemente in Millimetern fest falls Daten-Eigenschaft**Mosaik** auf `true` steht.
* Daten**Tessellation** (`Bool`): legt fest, ob ein Mosaik erzeugt werden soll. Mosaik bedeutet, dass Kurven durch eine Reihe von Liniensegmenten ersetzt werden. Das kann zu intensiven Rechnungen führen wenn die Daten-Eigenschaft**Segment Länge** zu kurz ist.
* Daten**Visible Only** (`Bool`): legt fest, ob die Projektion wenn sie sichtbar ist neu berechnet werden soll.
* Daten**Exclusion Points** (`Vector list`): Eine Liste mit ausgeschlossenen Punkten. Kanten die durch einen dieser Punkte gehen werden nicht gezeichnet.
* Daten**Exclusion Names** (`String list`): Eine Liste mit Objektnamen. Jedes sichtbare oder geschnittene Kind Objekt in dieser Liste wird nicht gezeichnet. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### Ansicht

Draft

* Ansicht-Eigenschaft**Pattern** (`Enumeration`): nicht verwendet.
* Ansicht-Eigenschaft**Pattern Size** (`Float`): nicht verwendet.

## Skripten

Siehe auch: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Verwende zum Erzeugen einer Projektion die Methode `make_shape2dview` ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) des Moduls Draft. Diese Methode ersetzt die veraltete Methode `makeShape2DView`.

```
shape2dview = make_shape2dview(baseobj, projectionVector=None, facenumbers=[])

```

* `baseobj` ist das Objekt, welches projiziert werden soll.
* `projectionVector` ist der Projektionsvektor. Falls nicht angegeben wird die Z Achse verwendet.
* `facenumbers` ist eine Liste der Flächennummern (0-beginnend). Falls vorhanden werden nur diese Flächen berücksichtigt.
* `shape2dview` wird mit der erzeugten 2D Projektion zurück geliefert.

Ändere falls notwendig die Eigenschaft `ProjectionMode` des erzeugten Objektes. Sie kann `"Solid"`, `"Individual Faces"`, `"Cutlines"`, `"Cutfaces"` oder `"Solid faces"` sein.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

box = doc.addObject("Part::Box", "Box")
box.Length = 2300
box.Width = 500
box.Height = 1000

shape1 = Draft.make_shape2dview(box)

shape2 = Draft.make_shape2dview(box, App.Vector(1, -1, 1))

shape3 = Draft.make_shape2dview(box, App.Vector(-1, 1, 1), [0, 5])
shape3.ProjectionMode = "Individual Faces"

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Shape2DView/de&oldid=1551699>"