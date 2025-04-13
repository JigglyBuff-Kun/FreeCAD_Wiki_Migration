---
title: Arch Treppe
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Treppe |
| Menüeintrag |
| 3D/BIM → Treppe |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| S R |
| Eingeführt in Version |
| 0.14 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug Treppe ermöglicht verschiedene Arten von Treppen automatisch zu erstellen. Gerade Treppen (mit und ohne mittiges Podest) können von Grund auf neu erstellt werden. Komplexere Treppen erfordern Basisobjekte.

Siehe den [Wikipediaeintrag Treppe](https://de.wikipedia.org/wiki/Treppe) für eine Erläuterung der verschiedenen verwendeten Begriffe zum beschreiben der Treppenbauteile.

![](/images/Arch_Stairs_example.jpg)

Zwei konstruierte Treppen, eine mit massiver Struktur und Absatz und die andere mit einer mittigen Treppenwange.

## Optionen

## Anwendung

1. Wahlweise ein oder mehrere Basisobjekte auswählen, z.B. [Draft Linien](/Draft_Line/de "Draft Line/de"), [Draft Linienzüge](/Draft_Wire/de "Draft Wire/de") und [Skizzen](/Sketch/de "Sketch/de"):
   * Draft-Linienzüge oder Skizzen mit zwei und mehr Abschnitten werden verwendet, um Podeste zu erstellen. Sie müssen auf einer Ebene liegen, die parallel zur globalen XY-Ebene verläuft. Z.B. ein U-förmiger Linienzug für ein Podest mit einer halben Drehung (180°) und ein L-förmiger Linienzug für ein Eckpodest (90°).
   * Draft-Linien und Skizzen mit einer einzelnen Kante werden verwendet, um Treppen zu erstellen.
   * Haben die Knoten aller Linien und Linienzüge korrekte Z-Koordinaten, verwendet die erstellte Treppe diese Informationen. Eine Skizze (parallel zur XY-Ebene) mit einer einzelnen Kante oder eine Draft-Linie ohne Abweichung in Z funktioniert auch für ein Podest; Die Höhe wird dann für die Konstruktion des Podests verwendet.
   * Die Basisobjekt müssen in der richtigen Reihenfolge ausgewählt werden, beginnend mit dem untersten Objekt.
2. Die Schaltfläche ![](/images/Arch_Stairs.png) Treppe drücken oder das Tastaturkürzel S, R.
3. Die gewünschten Werte anpassen. Einige Bauteile der Treppe, wie die Struktur, sind nicht sofort sichtbar, wenn irgendeine der Eigenschaften dies unmöglich macht, wie eine Wandstärke der Struktur von 0.

![](/images/Stairs_and_Landing_02.png)

![](/images/Stairs_and_Landing_01.png)

![](/images/Arch_Stairs_Complex_Example.png)

Eine komplexe Treppe, die auf einer Auswahl von Linien und Linienzügen basiert, wie links gezeigt.  
Rot: die Linienzüge für die Podeste auf Z = 1500 mm, Z = 3000 mm and Z = 4500 mm.  
Schwarz: die Linien, die sie verbinden und für die Treppen verwendet werden.

## Eigenschaften

Eine Arch-Treppe (Stairs-Objekt) besitzt die gemeinsamen Eigenschaften und Verhaltensweisen aller [Arch-Komponenten](/Arch_Component/de "Arch Component/de").

### Daten

Segment and Parts

* Daten**Abs Top** (`Vector`): (read-only) The absolute top level the stairs lead to.
* Daten**Last Segment** (`Link`): Last segment (flight or landing) of an Arch Stairs connecting to this segment. The start level of the stairs will be the end level of this last segment.
* Daten**Outline Left** (`VectorList`): The left outline of the stairs (read-only).
* Daten**Outline Left All** (`VectorList`): The left outline of all segments of the stairs (read-only).
* Daten**Outline Right** (`VectorList`): The right outline of the stairs (read-only).
* Daten**Outline Right All** (`VectorList`): The right outline of all segments of the stairs (read-only).
* Daten**Railing Height Left** (`Length`): Height of the left railing of the stairs or landing.
* Daten**Railing Height Right** (`Length`): Height of the right railing of the stairs or landing.
* Daten**Railing Left** (`LinkHidden`): The left railing object. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): Property type updated from `String` to `LinkHidden`.
* Daten**Railing Offset Left** (`Length`): Offset of the left railing from the edge of the stairs or landing.
* Daten**Railing Offset Right** (`Length`): Offset of the right railing from the edge of the stairs or landing.
* Daten**Railing Right** (`LinkHidden`): The right railing object. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): Property type updated from `String` to `LinkHidden`.

Stairs

* Daten-Eigenschaft**Align** (`Enumeration`): Die Ausrichtung der Treppe zur Basislinie. Wird nur verwendet, wenn eine Basislinie festgelegt ist. Kann `Left` (links), `Right` (rechts) oder `Center` Mitte.
* Daten-Eigenschaft**Height** (`Length`): Die Gesamthöhe der Treppe. Wird nur verwendet, wenn eine Basislinie festgelegt ist oder wenn die Basislinie horizontal ist. Wird ignoriert, wenn die Daten-Eigenschaft**Riser Height Enforce** nicht Null ist.
* Daten-Eigenschaft**Length** (`Length`): Die Gesamtlänge der Treppe, wenn keine Basislinie festgelegt ist. Wird ignoriert, wenn die Daten-Eigenschaft**Tread Depth Enforce** nicht Null ist.
* Daten-Eigenschaft**Width** (`Length`): Die Breite der Treppe.
* Daten-Eigenschaft**Width of Landing** (`FloatList`): Wenn die Daten-Eigenschaft**Number Of Steps** (Anzahl der Stufen) 1 ist, wird das Treppenobjekt als Treppenabsatz eingesetzt. Ist dies der Fall und die Basislinie besteht aus mehreren Abschnitten, wird die Breite des ersten Abschnitts des Treppenabsatzes der Daten-Eigenschaft**Width** entsprechen und die Breiten folgender Abschnitte entsprechen denen dieser Liste.

Steps

* Daten-Eigenschaft**BlondelRatio** (`Float`): (schreibgeschützt) Das errechnete Steigungsverhältnis (Blondel ratio). Dieses Verhältnis sollte für bequeme Stufen zwischen 62 und 64 cm bzw. 24.5 und 25.5 Zoll liegen.
* Daten-Eigenschaft**Landing Depth** (`Length`): Die Tiefe des Absatzes des Stockwerks, wenn in der Daten-Eigenschaft**Landings** aktiviert. Übernimmt standardmäßig den wert der Daten-Eigenschaft**Width**, wenn 0.
* Daten-Eigenschaft**Nosing** (`Length`): Überstand des Auftritts (nosing) gegenüber der darunterliegenden Setzstufe.
* Daten-Eigenschaft**Number Of Steps** (`Integer`): Die Anzahl der Treppenstufen (Setzstufen) der Treppe. Muss mindestens 2 für eine einzelne Treppe sein oder mindestens 4 für 2 Treppen mit einem Absatz dazwischen.
* Daten-Eigenschaft**Riser Height** (`Length`): (schreibgeschützt) Die Höhe der Setzstufen. Ist die Daten-Eigenschaft**Riser Height Enforce** 0, wird sie berechnet (Daten-Eigenschaft**Height** / Daten-Eigenschaft**Number of Steps**). Andernfalls hat sie denselben Wert, wie die Daten-Eigenschaft**Riser Height Enforce**.
* Daten-Eigenschaft**Riser Height Enforce** (`Length`): Die erzwungene Höhe der Setzstufe.
* Daten-Eigenschaft**Riser Thickness** (`Length`): Die Wandstärke der Setzstufen.
* Daten-Eigenschaft**Tread Depth** (`Length`): (schreibgeschützt) Die Tiefe des Auftritts. Ist die Daten-Eigenschaft**Tread Depth Enforce** 0, wird sie berechnet (Daten-Eigenschaft**Length** / Daten**Number of Steps**). Andernfalls hat sie denselben Wert, wie die Daten-Eigenschaft**Tread Depth Enforce**.
* Daten-Eigenschaft**Tread Depth Enforce** (`Length`): Die erzwungene Tiefe des Auftritts.
* Daten-Eigenschaft**Tread Thickness** (`Length`): Die Wandstärke des Auftritts.

Structure

* Daten-Eigenschaft**Connection Down Start Stairs** (`Enumeration`): Die Art der Verbindung zwischen der unteren Bodenplatte und dem Beginn der Treppe. Kann `HorizontalCut`, `VerticalCut` oder `HorizontalVerticalCut` sein.
* Daten-Eigenschaft**Connection End Stairs Up** (`Enumeration`): Die Art der Verbindung zwischen dem Ende der Treppe und der Bodenplatte im oberen Stockwerk. Kann `toFlightThickness` oder `toSlabThickness` sein.
* Daten-Eigenschaft**Down Slab Thickness** (`Length`): Die Dicke der unteren Bodenplatte.
* Daten-Eigenschaft**Flight** (`Enumeration`): die Treppenlaufrichtung nach dem Podest. Kann `Straight`, `HalfTurnLeft` oder `HalfTurnRight` sein. Die Daten-Eigenschaft**Landings** muss auf `At center` gesetzt sein.
* Daten-Eigenschaft**Landings** (`Enumeration`): Die Art der Podeste. Kann `None` oder `At center` sein (`At each corner` ist noch nicht implementiert).
* Daten-Eigenschaft**Stringer Overlap** (`Length`): Die Überlappung der Wangen über die Unterseite der Auftrittflächen.
* Daten-Eigenschaft**Stringer Width** (`Length`): Die Breite der Wangen.
* Daten-Eigenschaft**Structure** (`Enumeration`): Die Art der Struktur der Stufen. Kann `None`, `Massive`, `One stringer` oder `Two stringers` sein. Für die letzten beiden Optionen müssen die Daten-Eigenschaft**Stringer Width** und die Daten-Eigenschaft**Tread Thickness** Werte besitzen, die nicht Null sind.
* Daten-Eigenschaft**Structure Offset** (`Length`): Der Abstand zwischen der Begrenzung der Treppe und der Struktur.
* Daten-Eigenschaft**Structure Thickness** (`Length`): Die Dicke der Struktur.
* Daten-Eigenschaft**Up Slab Thickness** (`Length`): Die Dicke der oberen Bodenplatte.
* Daten-Eigenschaft**Winders** (`Enumeration`): Die art der Wendelung. Nicht implementiert.

## Einschränkungen

* Momentan stehen nur gerade Treppen, solche mit einer halben Drehung nach rechts oder links und Podeste zur Verfügung.
* Siehe [Beitrag im Forum](http://forum.freecadweb.org/viewtopic.php?f=23&t=6534) bezüglich Wendeltreppen
* Siehe [Ankündigung im Forum](http://forum.freecadweb.org/viewtopic.php?f=9&t=4564)

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Treppe kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit der folgenden Funktion verwendet werden:

```
Stairs = makeStairs(baseobj=None, length=None, width=None, height=None, steps=None, name="Stairs")

```

* Erstellt ein `stairs` Objekt aus dem gegebenen `baseobj`.
* Wenn `baseobj` nicht gegeben ist, werden `length`, `width`, `height` und `steps` verwendet, um einen Festkörper zu erstellen.

Beispiel:

```
import Arch

Stairs = Arch.makeStairs(length=5000, width=1200, height=3000, steps=14)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Stairs/de&oldid=1542118>"