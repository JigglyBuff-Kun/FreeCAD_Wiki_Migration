---
title: Draft PfadAnordnung
---
|  |
| --- |
| Draft PfadAnordnung |
| Menüeintrag |
| Änderung → Anordnungswerkzeuge → Pfad-Anordnung Bearbeiten → Pfad-Anordnung |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.14 |
| Siehe auch |
| [Draft RechtwinkligeAnordnung](/Draft_OrthoArray/de "Draft OrthoArray/de"), [Draft PolareAnordnung](/Draft_PolarArray/de "Draft PolarArray/de"), [Draft KreisAnordnung](/Draft_CircularArray/de "Draft CircularArray/de"), [Draft PfadVerknüpfungsanordnung](/Draft_PathLinkArray/de "Draft PathLinkArray/de"), [Draft PunktAnordnung](/Draft_PointArray/de "Draft PointArray/de"), [Draft PunktVerknüpfungsanordnung](/Draft_PointLinkArray/de "Draft PointLinkArray/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_PathArray.svg) **Draft PfadAnordnung** erstellt eine regelmäßige Anordnung aus einem ausgewählten Objekt, indem er Kopien entlang eines Pfades positioniert. Der Befehl [Draft PfadVerknüpfungsanordnung](/Draft_PathLinkArray/de "Draft PathLinkArray/de") erstellt alternativ eine effizientere Verknüpfungsanordnung ([Link](/App_Link "App Link")-Array). Außer der Art der Anordnung die erstellt wird, normale Anordnung oder Verknüpfungsanordnung, ist der Befehl [Draft PfadVerknüpfungsanordnung](/Draft_PathLinkArray/de "Draft PathLinkArray/de") identisch mit diesem Befehl.

Beide Befehle können für 2D-Objekte verwendet werden, die mit den Arbeitsbereichen [Draft](/Draft_Workbench/de "Draft Workbench/de") oder [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") erstellt wurden, aber auch für viele 3D-Objekte, die mit anderen Arbeitsbereichen wie [Part](/Part_Workbench/de "Part Workbench/de"), [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") oder [BIM](/BIM_Workbench/de "BIM Workbench/de") erstellt wurden.

![](/images/Draft_PathArray_Example.png)

Draft PfadAnordnung

## Anwendung

1. Ein Objekt auswählen, das angeordnet werden soll.
2. Ein Pfadobjekt zur Auswahl hinzufügen. Es ist auch möglich stattdessen Kanten auszuwählen. Die Kanten müssen zu demselben Objekt gehören und miteinander verbunden sein.
3. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_PathArray.svg) [Pfad-Anordnung](/Draft_PathArray "Draft PathArray") drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Änderung → Anordnungswerkzeuge → ![](/images/Draft_PathArray.svg) Pfad-Anordnung** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Bearbeiten → ![](/images/Draft_PathArray.svg) Pfad-Anordnung** auswählen.
4. Die Anordnung wird erstellt.
5. Wahlweise die [Eigenschaften](#Eigenschaften) der Anordnung im [Eigenschafteneditor](/Property_editor/de "Property editor/de") ändern.

## Ausrichtung

Die Anordnung der Elemente in einer Draft PfadAnordnung ist von den Eigenschaften des Array und der Orientierung des Quellobjektes abhängig. Die Position des Quellobjektes wird ignoriert: für den Zweck des Array werden `x`, `y` und `z` auf `0` gesetzt. Wenn die Eigenschaft Daten**Align** des Array auf false gesetzt ist, dann ist die Orientierung der Array Elemente gleich wie beim Quellelement. Wenn sie auf `true` gesetzt ist, dann wird die X Achse des lokalen Koordinatensystems jedes Element Placements die Tangente an den Pfad. Die Y und Z Achsen des lokalen Koordinatensystems hängen von der Daten**Align Mode** Eigenschaft des Array ab. Andere Eigenschaften die an der Anordnung des Daten**Tangent Vector** beteiligt sind, sind Daten**Force Vertical** und Daten**Vertical Vector**.

![](/images/Draft_PathArray_example2.png)

3 Anordnungen die auf demselben nicht ebenen Pfad basieren. Von links nach rechts: **Align** ist *false*, **Align** ist *true* mit **Align Mode** *Original* und **Align** ist *true* mit **Align Mode** *Frenet*

.

### Ausrichtungsmodus

Es gibt drei Ausrichtungsmodi

#### Original

Dieser Modus kommt dem einfachen Daten**Ausrichtungsmodus** der in Version 0.18 verfügbar ist am Nächsten. Er basiert auf einem festen Normalvektor. Wenn der Pfad eben ist, dann ist dieser Vektor im rechten Winkel zur Ebene des Pfades, sonst wird ein Standard Vektor, die positive Z Achse, verwendet. Aus diesem Normalvektor und dem lokalen Tangentenvektor (der lokalen X Achse) wird das [Kreuzprodukt](https://en.wikipedia.org/wiki/Cross_product) gebildet. Dieser neue Vektor wird als lokale Z Achse verwendet. Die Orientierung der lokalen Y Achse wird von der lokalen X und Z Achse festgelegt.

#### Frenet

Dieser Modus verwendet den lokalen Normalvektor der aus dem Pfad an jeder Element Plazierung abgeleitet wird. Wenn dieser Vektor nicht festgelegt werden kann (zum Beispiel bei einem geraden Segment) dann wird stattdessen an ein Standard Vektor, wieder die Positive Z Achse verwendet. Mit diesem Vektor und dem lokalen Tangentenvektor wird das Koordinatensystem nach dem gleichen Verfahren wie im vorigen Abschnitt festgelegt.

#### Tangente

Dieser Modus ist ähnlich dem Daten**Ausrichtungsmodus** `Original` , bietet aber die Möglichkeit das Quellobjekt durch Festlegen eines Daten**Tangenvektors** vorab zu drehen.

### Erzwingen der Vertikalen und des vertikalen Vektors

Diese Eigenschaften sind nur verfügbar wenn der Daten**Align Mode** `Original` oder `Tangent` ist. Wenn Daten**Force Vertical** auf `true` gesetzt ist, dann wird das Koordinatensystem auf eine andere Art berechnet. Der Daten**Vertical Vector** wird wie ein fester Normalvektor verwendet. Aus diesem Normalvektor und dem lokalen Tangentenvektor (die lokale X Achse) wird wieder das Kreuzprodukt gebildet. Aber dieser Vektor wird als lokale Y Achse verwendet. Die Orientierung der lokalen Z Achse wird von den Lokalen X und Y Achsen festgelegt.

Die Verwendung dieser Eigenschaften kann notwendig werden, wenn eine Kante des Pfades (fast) parallel zur Standard Normalen des Pfades wird.

## Hinweise

* Vereinigte Verknüpfungsanordnung werden nicht richtig dargestellt, in der 3D-Ansicht sind ihre Elemente scheinbar nicht vereinigt.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Eine Pfad-Anordnung (Path-Array-Objekt) ist von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften (mit Ausnahme einiger Ansicht-Eigenschaften, die nicht an die Verknüpfungsanordnungen vererbt werden). Außerdem sind, wenn nicht anders angegeben, die folgenden zusätzlichen Eigenschaften vorhanden:

### Daten

Link

Die Eigenschaften dieser Gruppe stehen nur für Verknüpfungsanordnungen zur Verfügung. Siehe [Std VerknüpfungErstellen](/Std_LinkMake/de#Eigenschaften "Std LinkMake/de") für weitere Informationen.

* Daten-Eigenschaft**Scale** (`Float`)
* Daten-Eigenschaft (versteckt)**Scale Vector** (`Vector`)
* Daten-Eigenschaft**Scale List** (`VectorList`)
* Daten-Eigenschaft (versteckt)**Visibility List** (`BoolList`)
* Daten-Eigenschaft (versteckt)**Placement List** (`PlacementList`)
* Daten-Eigenschaft (versteckt)**Element List** (`LinkList`)
* Daten-Eigenschaft (versteckt)**\_ Link Touched** (`Bool`)
* Daten-Eigenschaft (versteckt)**\_ Child Cache** (`LinkList`)
* Daten-Eigenschaft (versteckt)**\_ Link Owner** (`Integer`)
* Daten-Eigenschaft (versteckt)**Colored Elements** (`LinkSubHidden`)
* Daten-Eigenschaft**Link Copy On Change** (`Enumeration`)
* Daten-Eigenschaft**Link Transform** (`Bool`)

Alignment

* Daten-Eigenschaft**Align** (`Bool`): Legt fest, ob die Elemente der Anordnung entlang des Pfades ausgerichtet werden oder nicht. Ist sie `false`, sind alle anderen Eigenschaften in dieser Gruppe, außer Daten-Eigenschaft**Extra Translation** nicht anwendbar und werden ausgeblendet.
* Daten-Eigenschaft**Align Mode** (`Enumeration`): Legt das Ausrichtungsverfahren fest; zur Auswahl stehen `Original`, `Frenet` oder `Tangent`.
* Daten-Eigenschaft**Extra Translation** (`VectorDistance`): Legt einen zusätzlichen Versatz für jedes Element entlang des Pfades fest.
* Daten-Eigenschaft**Force Vertical** (`Bool`): Legt fest, ob die vorgegebene Ausrichtung der Normale mit dem Wert der Daten-Eigenschaft**Vertical Vector** überschrieben wird. Wird nur verwendet, wenn die Daten-Eigenschaft**Align Mode** auf `Original` oder `Tangent` gesetzt ist.
* Daten-Eigenschaft**Reverse Path** (`Bool`): Legt fest, ob der Pfad rückwärts verwendet wird. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")
* Daten-Eigenschaft**Tangent Vector** (`Vector`): Legt den Ausrichtungsvektor fest. Wird nur verwendet, wenn die Daten-Eigenschaft**Align Mode** auf `Tangent` gesetzt ist.
* Daten-Eigenschaft**Vertical Vector** (`Vector`): Legt den Vektor zum Überschreiben der Richtung der Normale fest. Wird nur verwendet, wenn die Daten-Eigenschaft**Vertical Vector** auf `true` gesetzt ist.

Draft

* Daten-Eigenschaft**Always Sync Placement** (`Bool`)

Objects

* Daten-Eigenschaft**Base** (`LinkGlobal`): legt das Objekt fest, das in der Anordnung vervielfacht wird.
* Daten-Eigenschaft**Count** (`Integer`): legt die Anzahl der Elemente in der Anordnung fest.
* Daten-Eigenschaft**Expand Array** (`Bool`): legt fest, ob die Anordnung in der [Baumansicht](/Tree_view/de "Tree view/de") erweitert wird, um die Auswahl der einzelnen Elemente zu ermöglichen. Steht nur für Verknüpfungsanordnungen zur Verfügung.
* Daten-Eigenschaft**Fuse** (`Bool`): legt fest, ob einander überlappende Elemente in der Anordnung vereinigt werden oder nicht. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
* Daten-Eigenschaft**Path Object** (`LinkGlobal`): legt fest, welches Objekt als Pfad verwendet wird. Es muss `Kanten` in seiner [Part TopoForm](/Part_TopoShape/de "Part TopoShape/de") enthalten.
* Daten-Eigenschaft**Path Subelements** (`LinkSubListGlobal`): legt eine Liste mit Kanten der Daten-Eigenschaft**Path Object** fest. Wenn angegeben, werden nur diese Kanten für den Pfad verwendet.
* Daten**Placement List** (`PlacementList`): Die Positionierungen der einzelnen Elemente. Erscheint in der Gruppe Link der Verknüpfungsanordnungen. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")

Spacing

* Daten-Eigenschaft**Count** (`Integer`): legt die Anzahl der Elemente in der Anordnung fest.
* Daten-Eigenschaft**End Offset** (`Length`): legt den Abstand vom Ende des Pfades zur letzten Kopie fest. Muss kleiner sein als die Länge des Pfades minus der Daten-Eigenschaft**Start Offset**. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
* Daten-Eigenschaft**Spacing Mode** (`Enumeration`): legt fest, wie die Elemente verteilt werden. Die Optionen sind: [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")
  + `Fixed count` (Anzahl): die vorhandene Pfadlänge (abzüglich Start- und Endversatz) wird gleichmäßig aufgeteilt, für die in der Daten-Eigenschaft**Count** angegebene Anzahl der Elemente.
  + `Fixed spacing` (Gleichförmiger Abstand): am Startversatz beginnend werden neue Elemente nacheinander mit gleichförmigen Abständen den Pfad entlang angeordnet.
  + `Fixed count and spacing` (Anzahl und Abstand): wie `Fixed spacing`, aber nur für die in der Daten-Eigenschaft**Count** angegebene Anzahl der Elemente.
* Daten-Eigenschaft**Spacing Pattern** (`FloatList`) (Verteilungsmuster): der jeweilige Abstand wird mit der entsprechenden Zahl aus dieser Zahlenfolge multipliziert. Wird nur verwendet, wenn die Daten-Eigenschaft**Use Spacing Pattern** auf `true` gesetzt ist, oder andernfalls ausgeblendet. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")
* Daten-Eigenschaft**Spacing Unit** (`Length`): der grundlegende gleichförmige Abstand zwischen den Elementen. Wird nur verwendet, wenn die Daten-Eigenschaft**Spacing Mode** auf `Fixed spacing` oder `Fixed count and spacing` gesetzt ist oder andernfalls ausgeblendet. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")
* Daten-Eigenschaft**Start Offset** (`Length`): legt den Abstand vom Startpunkt des Pfades bis zur ersten Kopie fest. Muss kleiner sein als die Länge des Pfades. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
* Daten-Eigenschaft**Use Spacing Pattern** (`Bool`): sich wiederholende Verteilungsmuster verwenden anstatt gleichförmiger Abstände. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")

### Ansicht

Link

Die Eigenschaften dieser Gruppe, mit Ausnahme der ererbten Eigenschaften, stehen nur für Verknüpfungsanordnungen zur Verfügung. Siehe [Std VerknüpfungErstellen](/Std_LinkMake/de#Eigenschaften "Std LinkMake/de") für weitere Informationen.

* Ansicht-Eigenschaft**Draw Style** (`Enumeration`)
* Ansicht-Eigenschaft**Line Width** (`FloatConstraint`)
* Ansicht-Eigenschaft**Override Material** (`Bool`)
* Ansicht-Eigenschaft**Point Size** (`FloatConstraint`)
* Ansicht-Eigenschaft**Selectable** (`Bool`): dies ist eine geerbte Eigenschaft, die in der Gruppe Selection für andere Anordnungen erscheint.
* Ansicht-Eigenschaft**Shape Material** (`Material`)

Basis

Die Eigenschaftzen dieser Gruppe sind mit Ausnahme der geerbten Eigenschaft nur bei verbundenen Arrays verfügbar. Siehe [Std VerknüpfungErstellen](/Std_LinkMake/de#Properties "Std LinkMake/de") für weitere Informationen.

* Ansicht (Hidden)**Child View Provider** (`PersistentObject`)
* Ansicht (Hidden)**Material List** (`MaterialList`)
* Ansicht (Hidden)**Override Color List** (`ColorList`)
* Ansicht (Hidden)**Override Material List** (`BoolList`)
* Ansicht (Hidden)**Proxy** (`PythonObject`): das ist eine geerbte Eigenschaft.

Display Options

Die Eigenschaften in dieser Gruppe sind ererbte Eigenschaften. Siehe auch [Part Formelement](/Part_Feature/de#Eigenschaften "Part Feature/de").

* Ansicht-Eigenschaft**Bounding Box** (`Bool`): diese Eigenschaft wird nicht an Verknüpfungsanordnungen vererbt.
* Ansicht-Eigenschaft**Display Mode** (`Enumeration`): für Verknüpfungsanordnungen sind `Link` oder `ChildView` möglich. Für andere Anordnungen stehen `Flat Lines`, `Shaded`, `Wireframe` oder `Points` zur Auswahl.
* Ansicht-Eigenschaft**Show In Tree** (`Bool`)
* Ansicht-Eigenschaft**Visibility** (`Bool`)

Draft

* Ansicht-Eigenschaft**Pattern** (`Enumeration`): nicht verwendet.
* Ansicht-Eigenschaft**Pattern Size** (`Float`): nicht verwendet.

Object style

Die Eigenschaften dieser Gruppe werden nicht an Verknüpfungsanordnungen vererbt.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Erstellen einer Pfad-Anordnung wird die Methode `make_path_array` des Draft-Moduls verwendet ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")). Diese Methode ersetzt die veraltete Methode `makePathArray`.

```
path_array = make_path_array(base_object, path_object,
                             count=4, extra=App.Vector(0, 0, 0), subelements=None,
                             align=False, align_mode="Original", tan_vector=App.Vector(1, 0, 0),
                             force_vertical=False, vertical_vector=App.Vector(0, 0, 1),
                             use_link=True)

```

* `base_object` ist das Objekt, das angeordnet werden soll. Es kann auch die Benennung (die Zeichenkette `Label`) eines Objekts im aktuellen Dokument sein.
* `path_object`: Ist das Pfadobjekt (path object). Es kann auch die Benennung (die Zeichenkette `Label`) eines Objekts im aktuellen Dokument sein.
* `count` ist die Anzahl der Elemente einer Anordnung.
* `extra` ist ein Vektor, der jedes Element versetzt.
* `subelements` ist eine Liste von Kanten im `path_object`, z.B. `["Edge1", "Edge2"]`. Wenn vorhanden, werden nur diese Kanten für den Pfad verwendet.
* Ist `align` auf `True` gestzt, werden die Elemente abhängig von der Eigenschaft `align_mode`, die die Werte `"Original"`, `"Frenet"` oder `"Tangent"` annehmen kann, entlang des Pfades ausgerichtet.
* `tan_vector` ist ein Einheitsvektor, der die örtliche Tangentenrichtung der Elemente entlang des Pfades festlegt. Er wird verwendet, wenn `align_mode` auf `"Tangent"` gesetzt ist.
* Ist `force_vertical` auf `True` gsetzt, wird `vertical_vector` für die lokale Z-Achse der Elemente entlang des Pfades verwendet. Es wird verwendet, wenn `align_mode` auf `"Original"` oder `"Tangent"` gesetzt ist.
* Ist `use_link` auf `True` gesetzt, werden [App-Links](/App_Link/de "App Link/de") anstatt normaler Kopien erstellt.
* `path_array` wird mit der erstellten Anordnung zurückgegeben.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(500, -1000, 0)
p2 = App.Vector(1500, 1000, 0)
p3 = App.Vector(3000, 500, 0)
p4 = App.Vector(4500, 100, 0)
spline = Draft.make_bspline([p1, p2, p3, p4])
obj = Draft.make_polygon(3, 500)

path_array = Draft.make_path_array(obj, spline, 6)
doc.recompute()

wire = Draft.make_wire([p1, -p2, -p3, -p4])
path_array2 = Draft.make_path_array(obj, wire, count=3, extra=App.Vector(0, -500, 0), subelements=["Edge2", "Edge3"], align=True, force_vertical=True)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PathArray/de&oldid=1558024>"