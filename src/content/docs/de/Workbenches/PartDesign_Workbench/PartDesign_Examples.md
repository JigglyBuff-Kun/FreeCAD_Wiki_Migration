---
title: PartDesign Beispiele
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

## Einführung

Manchmal braucht man einen Hinweis darauf, wie mächtig ein Werkzeug ist, ohne zu viele Erklärungen.

Dies ist eine Sammlung von Beispielen, die mit bestimmten Werkzeugen erzielt werden können. Detaillierte Erklärungen findet man bei den Werkzeugbeschreibungen und in Tutorien, die man im Web findet.

## Pad

![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad/de "PartDesign Pad/de") Ist ein Werkzeug zum Erstellen von Pad-Objekten, die prismatische Objekte sind, wie z. B. Extrusionsobjekte, Zylinder, Kegel, Würfel, Keile...

Jedes Objekt basiert auf einer Kontur (gelb), die die Querschnittsform definiert (vorzugsweise mit dem Arbeitsbereich [Sketcher](/Sketcher_Workbench "Sketcher Workbench") erstellt).

Die Kontur wird entlang einer Richtung gezogen (ausgetragen, extrudiert), um ein Objekt mit einer Dicke oder einer Länge zu versehen.   
Standardmäßig wird die Normalenrichtung der Ebene verwendet, die die Kontur enthält (Skizzenebene). Wahlweise kann die Richtung durch Bearbeiten der Parameter im Eigenschafteneditor geändert werden oder durch das Anwählen einer separaten geraden Linie (weiß).

**Galerie**

### Prismatisch Grundkörper

|  |  |  |
| --- | --- | --- |
| **Zylinder** | Zylinder | * Kontur: **Kreis**. |
| **Würfel** | Würfel | * Kontur: **Quadrat**. * Extrusionslänge: Ist gleich der Länge der Quadratkanten. |
| **Quader** | Quader | * Kontur: **Rechteck**. |
| **Regelmäßiges Prisma** | Regelmäßiges Prisma | * Kontur: **Sechseck**. |
| **Keil** | Keil | * Kontur: **Dreieck**. |

### Prismatische Profile

|  |  |  |
| --- | --- | --- |
| **L-Profil** | L-Profil | * Kontur: **L**-Form. |
| **C-Profil** | C-Profil | * Kontur: **C**-Form. |
| **Z-Profil** | Z-Profil | * Kontur: **Z**-Form. |
| **T-Profil** | T-Profil | * Kontur: **T**-Form. |
| **Doppel-T-Profil** | Doppel-T-Profil | * Kontur: **H**-Form, mit Flanschbreite < Flanschabstand. |
| **H-Profil** | H-Profil | * Kontur: **H**-Form., mit Breite = Höhe. |

## Additive Pipe

![](/images/PartDesign_AdditivePipe.svg) [PartDesign Additive pipe](/PartDesign_AdditivePipe/de "PartDesign AdditivePipe/de") ist ein Werkzeug zum Erstellen von AdditivePipe-Objekten, wie z. B. Sweep-Objekte, Extrusionsobjekte, Rotationsobjekte (Drehkörper), Zylinder, Kegel, Würfel, Pyramiden, Kugeln...

Jedes Objekt basiert auf wenigstens zwei Linien (vorzugsweise mit dem Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") erstellt):

* Eine Kontur (gelb), die die Querschnittsform definiert.
* Einen Pfad (weiß), an dem entlang die Kontur ausgetragen wird.

Es ist nicht schwer zu erkennen, dass einige Objekte auch mit anderen Werkzeugen erstellt werden können, aber käme man darauf, wie vielseitig dieses Werkzeug ist, ohne diese Beispiele?

**Galerie**

### Kreisförmig ausgetragene Objekte

|  |  |  |
| --- | --- | --- |
| **Kugel** | Kugel | * Kontur: ein **180° Bogen** (Halbkreis) und eine **Linie**, die beide Endpunkte verbindet. * Pfad: **Kreis**. |
| **Kugelsegment** | Kugelsegment 240° | * Kontur: ein **180° Bogen** und eine **Linie**, die beide Endpunkte verbindet. * Pfad: ein **240° Bogen**.   Diese Funktion kann Segmente mit beliebigem Winkel außer 180° erstellen, da sie ein Problem damit hat, wenn Ausgangs- und Zielebene komplanar sind. |
| **Halbkugel** | Halbkugel | * Kontur: ein **90° Bogen** und zwei rechtwinklige **Linien**, die beide Endpunkte verbinden. * Pfad: **Kreis**. |
| **Torus** | Torus | * Kontur: **Kreis**. * Pfad: **Kreis**. |
| **Kegel** | Kegel | * Kontur: **Dreieck**, wobei eine Linie auf der Mittellinie liegt. * Pfad: **Kreis**. |
| **Zylinder** | Zylinder | * Kontur: **Rechteck**, wobei eine Linie auf der Mittellinie liegt. * Pfad: full **Kreis**. |
| **Rohr** (Röhre) Hohlzylinder | Rohr (Hohlzylinder) | * Kontur: **rectangle**. * Pfad: **Kreis**. |

### Prismatische Objekte

Gerade ausgetragene Objekte

|  |  |  |
| --- | --- | --- |
| **Zylinder** | Zylinder | * Kontur: **Kreis**. * Pfad: gerade **Linie**. |
| **Würfel** | Würfel | * Kontur: **Quadrat**. * Pfad: gerade **Linie**, mit gleicher Länge, wie die Quadratkanten. |
| **Quader** | Quader | * Kontur: **Rechteck**. * Pfad: gerade **Linie**. |
| **Keil** | Keil | * Kontur: **Dreieck**. * Pfad: gerade **Linie**. |
| Regelmäßiges **Prisma** | Regelmäßiges Prisma | * Kontur: regelmäßiges **Sechseck**. * Pfad: gerade **Linie**. |
| Sternförmiges Prisma | Sternförmiges Prisma | * Kontur: regelmäßige **Sternform**. * Pfad: gerade **Linie**. |
| Doppel-T-Träger | Doppel-T-Träger | * Kontur: **Trägerquerschnitt**. * Pfad: gerade **Linie**. |

### Konische Objekte

|  |  |  |
| --- | --- | --- |
| **Kegel** | Kegel | * Konturen: Boden: **Kreis**, Deckel: **Punkt**. * Pfad: gerade **Linie**.   (Die Spitze ist ein Endpunkt einer Hilfslinie) |
| **Pyramide** | Pyramide | * Konturen: Boden: **Quadrat**, Deckel: **Punkt**. * Pfad: gerade **Linie**.   (Die Spitze ist ein Endpunkt einer Hilfslinie) |
| Geneigte Pyramide | Geneigte Pyramide | * \* Konturen: Boden: **Quadrat**, Deckel: **Punkt**. * Pfad: gerade **Linie**.   (Die Spitze ist der Endpunkt des Pfades) |

### Gekrümmte ausgetragene Objekte

|  |  |  |
| --- | --- | --- |
| **Schlauch** (Rohr) | Schlauch | * Kontur: 2 konzentrische **Kreise**. * Pfad: **Kurve**. |
| Quadratisches **Rohr** | Quadratisches Rohr | * Kontur: 2 konzentrische **Quadrate**. * Pfad: **Kurve**. |
| **Draht** | Draht | * Kontur: **Kreis**. * Pfad: **Kurve**. |
| Horn | Horn | * Kontur: Boden: **Kreis**, Deckel: (kleinerer) **Kreis**. * Pfad: **Kurve**. |
| Legendärer **Sechskantschlüssel** | Sechskantschlüssel | * Kontur: **Sechseck**. * Pfad: **Kurve**. |

### Spiral- und wendelförmige Objekte

|  |  |  |
| --- | --- | --- |
| Schraubenfeder | Schraubenfeder | * Kontur: **Kreis**. * Pfad:  [Part Helix](/Part_Helix "Part Helix"). |
| Spiralfeder Unruhfeder | Unruhfeder | * Kontur: **Rechteck**. * Pfad:  [Part Spirale](/Part_Spiral "Part Spiral"). |
| **Evolutfeder**, Wickelfeder | Wickelfeder | * Kontur: **Rechteck**. * Pfad:  [Part Helix](/Part_Helix "Part Helix") mit einem Winkel. |

### Übergangsobjekte

|  |  |  |
| --- | --- | --- |
| Quadrat -> Kreis mit Pfad | Gekrümmtes Übergangsobjekt | * Konturen: Boden: **Quadrat**, Deckel: **Kreis**. * Pfad: Gekrümmte **Linie**. |
| Quadrat -> Kreis  gerade | Gerades Übergangsobjekt | * Konturen: Boden: **Quadrat**, Deckel: **Kreis**. * Pfad: Gerade **Linie**. |
| Vieleck -> Stern | Übergang Vieleck -> Stern | * Konturen: Boden: **Fünfeck**, Deckel: **Sternform**. * Pfad: Gerade **Linie**. |

### Optionen

#### Eckübergang

Ein Linienzug kann als Pfad verwendet werden, wobei die Eigenschaft **Transition** (Übergang) die Form der Ecken beeinflußt.

**Transformed** braucht besondere Beachtung, da ebene Bereiche mit Ausdehnung 0 entstehen können.

| Parameter | Iso-Ansicht | Draufsicht |
| --- | --- | --- |
| **Transformed** | Transformed, Iso-Ansicht Innen- und Außenecken sind Kanten. | Transformed, Draufsicht Die Grundform folgt nicht der Ausrichtung der Linie. |
| **Right corner** | Right corner, Iso-Ansicht Inner and outer corners are edges. | Right corner, Draufsicht Die Grundform folgt der Ausrichtung der Linie. |
| **Round corner** | Round corner, Iso-Ansicht Die Ecken, die außerhalb des Pfades liegen, werden abgerundet. | Round corner, Draufsicht Die Grundform folgt der Ausrichtung der Linie. |

#### Ausrichtungsmodus

| Parameter | Iso-Ansicht | Draufsicht |
| --- | --- | --- |
| **Standard** | Standard, Iso-Ansicht Lage und Ausrichtung folgen dem Pfad. | Standard, Draufsicht (Wenn das Objekt auf unerwartete Art verdreht ist, sollte man Frenet ausprobieren) |
| **Fixed** | Fixed, Iso-Ansicht Die Lage folgt dem Pfad und die Ausrichtung bleibt wie die der Grundform. | Fixed, Draufsicht Dies hat die Tendenz, Sebstdurchdringungen zu erzeugen, die zu weiteren Fehlern führen: In diesem Falle eine Geisterfläche. |
| **Frenet** | Frenet, Iso-Ansicht Lage und Ausrichtung folgen dem Pfad, auf einem anderen Algorithmus basierend als unter Standard. | Frenet, Draufsicht Die Grundform folgt der Ausrichtung der Linie. |
| **Zusatz** | Zusatz Iso-Ansicht Die Lage folgt dem Pfad mit einer Verdrehung um den Pfad herum, die von einer zusätzlichen Kurve (Leitkurve) gesteuert wird (blau). | Zusatz Draufsicht (Es ist schlecht zu erkennen, aber die Ebene des Pfades steht in einem Winkel zur Ebene der Leitkurve, der für die Verdrehung verantwortlich ist) |
| **Binormal** |  |  |

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Examples/de&oldid=1340344>"