---
title: Arch Komponente
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Komponente |
| Menüeintrag |
| 3D/BIM → Generic 3D tools → Komponente |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Erstellt eine nicht-parametrische [Arch](/BIM_Workbench/de "BIM Workbench/de")-Komponente aus jedem [Part](/Part_Workbench/de "Part Workbench/de")-basierten Objekt. Dies gibt dem Part-basierten Objekt die gleichen Attribute und Eigenschaften wie anderen Arch-Objekten und erlaubt über das Setzen der Daten-Eigenschaft**Ifc Type** festzulegen, wie sie nach IFC exportiert werden soll.

## Anwendung

1. Ein [Part](/Part_Workbench/de "Part Workbench/de")-basiertes Objekt auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/Arch_Component.svg) Komponente drücken.
   * Den Menüeintrag **3D/BIM → Generic 3D tools → ![](/images/Arch_Component.svg) Komponente** auswählen.

## Eigenschaften

Das Arch-Objekt Komponente (Component object) ist auch eine Basis, die von allen anderen Arch-Objekten ([Arch Wand](/Arch_Wall/de "Arch Wall/de"), [Arch Struktur](/Arch_Structure/de "Arch Structure/de"), usw.) verwendet wird. Deshalb sind einige der Eigenschaften und der Verhaltensweisen bei allen Arch-Objekten gleich (ausgenommen Werkzeuge, die keine Festkörper-Objekte erzeugen wie [Schnittebene](/Arch_SectionPlane/de "Arch SectionPlane/de") oder [Achse](/Arch_Axis/de "Arch Axis/de")):

### Daten

Component

* Daten-Eigenschaft**Additions** (`LinkList`): Arch-Komponenten haben eine Addition-Eigenschaft, die eine beliebige Anzahl von Verweisen auf andere [Form](/Part_Workbench/de "Part Workbench/de")-basierte Objekte enthalten kann. Die Form dieser Ergänzungen wird vereinigt mit der Basisform der Komponente, um die endgültige Form zu erstellen. Siehe [Hinweise](#Hinweise).

* Daten-Eigenschaft**Axis** (`Link`): Eine optionale Achse oder ein Achsensystem, von dem auausgehend dieses Objekt dupliziert werden soll.

* Daten-Eigenschaft**Base** (`Link`): Arch-Komponenten basieren immer auf einem [Form](/Part_Workbench/de "Part Workbench/de")-basierten Basisobjekt. Einige Arten von Arch-Objekten werden nur die Basisform an sich nutzen, andere (z.B. [Wand](/Arch_Wall/de "Arch Wall/de")) werden einige zusätzliche Operationen darauf ausführen, wie etwa eine Extrusion. Für einige Arten ist ein Basisobjekt nicht zwingend erforderlich ( [Struktur](/Arch_Structure/de "Arch Structure/de"))

* Daten-Eigenschaft**Clone Of** (`Link`): Jede Arch-Komponente kann ein Klon einer anderen Arch-Komponente des gleichen Typs sein (eine Wand kann nur ein Klon einer anderen Wand sein, etc.). Die einzige Ausnahme ist die generische Arch-Komponente (wie von diesem Befehl erzeugt), die ein Klon jedes anderen Typs (Wand, Struktur, Fenster, etc.) sein kann. Dies erlaubt es, eine generische Arch-Komponente zu benutzen, um den Typ einer anderen zu überschreiben.

* Daten-Eigenschaft**Hi Res** (`Link`): Arch-Komponenten können die Form eines anderen Objekts als eine höher auflösendere Version von sich selbst verwenden. Dafür müssen sowohl die Hi Res-Eigenschaft als auch der Hi Res-Anzeigemodus gesetzt sein. Dies erlaubt z.B. eine einfache Wand zu erstellen und dann jeden Backstein, aus dem die Wand besteht, zu modellieren, bspw. mit ![](/images/Part_Box.svg) [Part Würfel](/Part_Box/de "Part Box/de"). Dann kann man einen Verbund dieser Backsteine als eine höher auflösende Version der Wand benutzen. Die Form der Wand wird durch die Verwendung eines Hi Res-Objekts nicht verändert. Lediglich seine Darstellung in der [3D-Ansicht](/3D_view/de "3D view/de") wird sich durch Übernahme der höher auflösenden Version verändern.

* Daten**Horizontal Area** (`Area`): Die Projektionsfläche dieses Objekts auf der XY-Ebene.

* Daten-Eigenschaft**Material** (`Link`): Alle Arch-Komponenten haben einen Material-Slot (?), der entweder ein [Material](/Arch_SetMaterial/de "Arch SetMaterial/de") oder ein [MultiMaterial](/Arch_MultiMaterial/de "Arch MultiMaterial/de") enthalten kann (nicht alle Arch-Objekttypen unterstützen die Verwendung von [MultiMaterial](/Arch_MultiMaterial/de "Arch MultiMaterial/de")). Die DiffuseColor- und Transparency-Eigenschaften des verbundenen (attached) Materials definiert die Farbe des Formteil und die Transparenz der Arch-Komponente. Das Material wird im- und exportiert von/nach [IFC](/Arch_IFC/de "Arch IFC/de"), [OBJ](/Arch_OBJ/de "Arch OBJ/de") und [DAE](/Arch_DAE/de "Arch DAE/de").

* Daten**Move Base** (`Bool`): Gibt an, ob im Falle einer Bewegung anstatt des Objekts seine Basis bewegt wird.

* Daten-Eigenschaft**Move With Host** (`Bool`): Wenn eine Komponente in einer anderen eingebettet ist (z.B. ein Fenster in einer Wand), dann sorgt das Setzen dieser Eigenschaft auf *True* dafür, dass sie verschoben und gedreht wird, wenn das Host-Objekt durch [Draft Verschieben](/Draft_Move/de "Draft Move/de") oder [Draft Drehen](/Draft_Rotate/de "Draft Rotate/de") verschoben oder gedreht wird.

* Daten**Perimeter Length** (`Length`): Die Umfangslänge der horizontalen Fläche (schreibgeschützt).

* Daten**Standard Code** (`String`): An optional standard (OmniClass, etc...) code for this component.

* Daten-Eigenschaft**Subtractions** (`LinkList`): Arch-Komponenten haben eine Subtraction-Eigenschaft, die eine beliebige Anzahl von Verweisen auf andere [Form](/Part_Workbench/de "Part Workbench/de")-basierte Objekte enthalten kann. Die Form dieser Ergänzungen wird von der Basisform der Komponente subtrahiert, um die endgültige Form zu erstellen. Siehe [Hinweise](#Hinweise).

* Daten**Vertical Area** (`Area`): The area of all vertical faces of this object (read-only).

IFC

* Daten-Eigenschaft (versteckt)**Ifc Data** (`Map`):

* Daten-Eigenschaft (versteckt)**Ifc Properties** (`Map`):

* Daten**Ifc Type** (`Enumeration`): Jede Arch-Komponenente hat, neben der durch den Typ (Wand, Fenster, etc.) festgelegten Funktion, auch eine Rolleneigenschaft, die genauer definieren kann, welche Funktion sie hat. Beispielsweise kann eine [Struktur](/Arch_Structure/de "Arch Structure/de") eine Träger- oder Säulen-Rolle haben. Generische Arch-Komponenten (wie durch diesen Befehl erzeugt) können jede verfügbare Rolle im gesamten Arch-Arbeitsbereich annehmen. Die Rolle wird benutzt, um die Art von IFC-Objekt zu definieren, die beim [Exportieren nach IFC](/Arch_IFC/de "Arch IFC/de") zu exportieren ist.

IFC Attributes

* Daten-Eigenschaft**Description** (`String`): Jede Arch-Komponente hat ein Beschreibungsfeld, das beliebigen Text enthalten kann. Dies wird beim [Exportieren nach IFC](/Arch_IFC/de "Arch IFC/de") benutzt.

* Daten-Eigenschaft**Global Id** (`String`):

* Daten-Eigenschaft**Object Type** (`String`):

* Daten-Eigenschaft**Predefined Type** (`Enumeration`):

* Daten**Tag** (`Enumeration`): Die Tag-Eigenschaft ist ein weiteres Textfeld, das verwendet werden kann, um Objekten eine weitere benutzerdefinierte Identität zu geben.

## Hinweise

* Das Placement von Arch-Komponenten wird nach den Additions und Subtractions vorgenommen, so dass diese gegen das Basisobjekt an der Basisposition durchgeführt werden. Dann wird das Ergebnis an den endgültigen Platz verschoben.

* Objekte können den Listen Ergänzugen bzw. Subtraktionen einer Komponente hinzugefügt bzw. von ihr entfernt werden, indem sowohl das Objekt als auch die Komponente ausgewählt werden und die Befehle [Arch Hinzufügen](/Arch_Add/de "Arch Add/de") bzw. [Arch Entfernen](/Arch_Remove/de "Arch Remove/de") verwendet werden oder durch Doppelklick auf die Komponente in der [Baumansicht](/Tree_view/de "Tree view/de"). Der Aufgaben-Bereich ermöglicht zu prüfen, welches Objekt momentan Teil dieser Listen ist.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Component/de&oldid=1542107>"