---
title: Standard Teil
---

|                                                                                                           |
| --------------------------------------------------------------------------------------------------------- |
| Std Teil                                                                                                  |
| Menüeintrag                                                                                               |
| Keine                                                                                                     |
| Arbeitsbereich                                                                                            |
| Alle                                                                                                      |
| Standardtastenkürzel                                                                                      |
| _Keiner_                                                                                                  |
| Eingeführt in Version                                                                                     |
| 0.17                                                                                                      |
| Siehe auch                                                                                                |
| [Std Gruppe](/Std_Group/de "Std Group/de"), [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de") |
|                                                                                                           |

## Beschreibung

![](/src/assets/images/Std_Part.svg) Std Teil, intern [App-Part](/App_Part/de "App Part/de") genannt, ist ein Sammelbehälter zur allgemeinen Verwendung, der eine Gruppe von Objekten (Baugruppe) zusammenhält, so dass sie zusammen als Einheit in der [3D-Ansicht](/3D_view/de "3D view/de") bewegt werden können.

Das 'Std Part'-Element wurde entwickelt, um als Grundbaustein zur Zusammenstellung von mechanischen [Zusammenbauten](/Assembly/de "Assembly/de") (Baugruppen) zu dienen. Es dient zum Anordnen von Objekten, die eine [Part TopoForm](/Part_TopoShape/de "Part TopoShape/de") haben, wie [Part Grundkörper](/Part_Primitives/de "Part Primitives/de"), [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de") und andere [Part Formelement](/Part_Feature/de "Part Feature/de").
Das 'Std Part' stellt ein [Ursprungsobjekt](#Ursprung) mit lokalen X-, Y- und Z-Achsen und Standardebenen zur Verfügung, die als Bezug für die Positionierung der enthaltenen Objekte dienen können. Zusätzlich können 'Std Parts' in andere 'Std Parts' eingebettet werden, um eine Gesamtbaugruppe aus kleineren Unterbaugruppen zu erstellen.

Obwohl es hauptsächlich für Festkörper gedacht ist, kann das 'Std Part' zur Handhabung aller Objekte verwendet werden, die die Eigenschaft [Placement](/Placement/de "Placement/de") besitzen. Daher kann es auch [Mesh Formelemente](/Mesh_Feature/de "Mesh Feature/de"), [Skizzen](/Sketch/de "Sketch/de") und andere Objekte enthalten, die von der Klasse [App-GeoFeature](/App_GeoFeature/de "App GeoFeature/de") abgeleitet werden.

Ein ![](/src/assets/images/PartDesign_Body.svg) [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de") darf nicht mit einem ![](/src/assets/images/Std_Part.svg) Std Teil verwechselt werden. Das erste ist ein entsprechendes Objekt aus dem Arbeitsbereich ![](/src/assets/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de"), zum Erstellen [einteiliger, zusammenhängender Festkörper](/PartDesign_Body/de#Einzeln_zusammenhängender_Körper "PartDesign Body/de") aus [PartDesign Formelementen](/PartDesign_Feature/de "PartDesign Feature/de"). Das Std Teil wird im Gegensatz dazu nicht zur Erstellung von Objekten verwendet, sondern um unterschiedliche Objekte im Raum anzuordnen, mit der Absicht [Baugruppen](/Assembly/de "Assembly/de") zu erstellen.

Das Werkzeug ![](/src/assets/images/Std_Part.svg) Std Part wird nicht durch einen bestimmten Arbeitsbereich festgelegt, sondern durch das Grundsystem. Daher befindet es sich in der **structure toolbar**, die es in allen [Arbeitsbereichen](/Workbenches/de "Workbenches/de") gibt. Mit der Schaltfläche ![](/src/assets/images/Std_Group.svg) [Std Gruppe](/Std_Group/de "Std Group/de") können Objekte in der Baumansicht frei gruppiert werden, ohne ihre Position zu berücksichtigen. Dieses Objekt beeinflußt die Positionen seiner Elemente nicht. Es ist im wesentlichen nur ein Ordner mit dem die [Baumansicht](/Tree_view/de "Tree view/de") geordnet werden kann.

![](/src/assets/images/Std_Part-tree.png)![](/src/assets/images/Std_Part_example.png)

Links: Elemente innerhalb eines Std Teils (Part-Objekt) in der [Baumansicht](/Tree_view/de "Tree view/de"). Rechts: Objekte im Raum positioniert, bezogen auf den Ursprung des Std Teils.

## Anwendung

1. Die Schaltfläche ![](/src/assets/images/Std_Part.svg) Baugruppe erstellen betätigen.
2. Ein leeres Teil wird erzeugt und wird automatisch _[aktiv](/Std_Part#Active_status "Std Part")_.
3. In der [Baumansicht](/Tree_view/de "Tree view/de") Objekte wählen und durch Drag & Drop auf dieses Teil ziehen, um sie zum Teil hinzuzufügen.
4. Um Objekte aus einem Teil zu entfernen, zieht man es per Drag & Drop aus dem Teil auf die Dokumentenbeschriftung oben in der [Baumansicht](/Tree_view/de "Tree view/de").
5. Objekte können durch Bearbeiten der Daten-Eigenschaft**Group** Teileigenschaft auch hinzugefügt oder entfernt werden.

## Hinweise

- Ein Objekt kann nur zu einem einzigen Std Teil (Baugruppe) gehören.
- 3D-Bearbeitungen, wie [Part Boolean](/Part_Boolean/de "Part Boolean/de") können nicht auf Std Teile angewendet werden. Beispielsweise können keine zweit Std Teile markiert und [Part Vereinigung](/Part_Fuse/de "Part Fuse/de") oder [Part Differenz](/Part_Cut/de "Part Cut/de") angewendet werden.

## Eigenschaften

Ein Std Teil wird intern [App Part](/App_Part/de "App Part/de")(Klasse `App::Part`) genannt und ist von einem [App GeoFeature](/App_GeoFeature/de "App GeoFeature/de") (Klasse `App::GeoFeature`) abgeleitet und erbt alle seiner Eigenschaften. Es hat weitere zusätzliche Eigenschaften, vor allem Eigenschaften die ihm helfen, Informationen im Zusammenhang mit Baugruppen/Zusammenbauten zu verwalten, z.B. die Daten-Eigenschaft**Type**, Daten-Eigenschaft**Id**, Daten-Eigenschaft**License**, Daten-Eigenschaft**LicenseURL** und Daten-Eigenschaft**Group**.

Diese sind die im [Eigenschafteneditor](/Property_editor/de "Property editor/de") vorhandenen Eigenschaften. Ausgeblendete Eigenschaften können mit dem Befehl **Ausgeblendete anzeigen** im Kontextmenü des [Eigenschafteneditors](/Property_editor/de "Property editor/de") angezeigt werden.

### Daten

Basis

- Daten-Eigenschaft**Type** (`String`): eine Beschreibung für dieses Objekt. Standardmäßig ist es eine leere Zeichenfolge `""`.
- Daten-Eigenschaft**Material** (`Link`): das Material für dieses Objekt.
- Daten-Eigenschaft (versteckt)**Meta** (`Map`): Zuordnung zusätzlicher Meta-Informationen. Standardmäßig ist sie leer `{}`.
- Daten-Eigenschaft**Id** (`String`): eine Identifikations- oder Teilenummer für dieses Objekt. Standardmäßig ist es eine leere Zeichenfolge `""`.
- Daten (Hidden)**Uid** (`UUID`): Die eindeutige Kennung ([universally unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier), kurz UUID) (128-bit-Zahl) des Objekts. Diese wird zur Erstellungszeit vergeben.
- Daten-Eigenschaft**License** (`String`): ein Feld zur Angabe der Lizenz für dieses Objekt. Standardmäßig ist es eine leere Zeichenfolge `""`.
- Daten-Eigenschaft**LicenseURL** (`String`): ein Feld zur Angabe einer Webadresse zur Lizenz oder zum Vertrag für dieses Objekt. Standardmäßig ist es eine leere Zeichenfolge `""`.
- Daten-Eigenschaft**Color** (`Color`): ein Tupel von vier RGBA-Fließkommawerten `(r,g,b,a)` um die Farbe des Objekts festzulegen; standardmäßig ist es `(1.0, 1.0, 1.0, 1.0)`, das als `[255,255,255]` zur Basis 255, white color angezeigt wird.
- Daten-Eigenschaft**Placement** (`Placement`): die Position des Objekts in der [3D-Ansicht](/3D_view/de "3D view/de"). Die Positionierung wird durch einen Punkt (Ortsvektor)`Base` und eine Drehung `Rotation`, bestehend aus Richtungsvektor (Axis) und Winkel (Angle), festgelegt. Siehe [Positionierung](/Placement/de "Placement/de").
  - Daten-Eigenschaft**Angle**: der Drehwinkel um die Daten-Eigenschaft**Axis**. Standardmäßig ist er `0°` (Null Grad).
  - Daten-Eigenschaft**Axis**: der Einheitsvektor, der die Drehachse für die Positionierung festlegt. Jede Komponente ist eine Fließkommazahl zwischen `0` und `1`. Wenn irgendein Wert über `1` liegt, wird der Vektor so normiert, dass der Betrag des Vektors `1` ist. Standardmäßig ist dies die positive Z Achse, `(0, 0, 1)`.
  - Daten-Eigenschaft**Position**: ein Vektor mit den 3D-Koordinaten des Basispunkts (Ortsvektor). Standardmäßig ist dies der Ursprung `(0, 0, 0)`.
- Daten**Label** (`String`): die vom Benutzer editierbare Bezeichnung dieses Objekts, sie ist eine beliebige UTF8-Zeichenfolge.
- Daten-Eigenschaft (versteckt)**Label2** (`String`): eine längere vom Benutzer editierbare Bezeichnung dieses Objekts, sie ist eine beliebige UTF8-Zeichenfolge, die Zeilenumbrüche enthalten kann. Standardmäßig ist sie eine leere Zeichenfolge `""`.
- Daten-Eigenschaft (versteckt)**Expression Engine** (`ExpressionEngine`): eine Liste von Ausdrücken. Standardmäßig ist sie leer `[]`.
- Daten-Eigenschaft (versteckt)**Visibility** (`Bool`): legt fest, ob das Objekt angezeigt wird oder nicht.
- Daten-Eigenschaft (versteckt)**Origin** (`Link`): das [App Origin](/App_OriginGroupExtension/de "App OriginGroupExtension/de")-Objekt, das als Positionierungsreferenz aller in der Daten-Eigenschaft**Group** enthaltenen Elemente dient.
- Daten-Eigenschaft**Group** (`LinkList`): eine Liste der verknüpften Objekte. Standardmäßig ist sie leer `[]`.
- Daten-Eigenschaft (versteckt)**\_ Group Touched** (`Bool`): legt fest, ob die Gruppe berührt(?) ist/wird oder nicht.

### Ansicht

Optionen anzeigen (Display Options)

- Ansicht-Eigenschaft**Display Mode** (`Enumeration`): `Group`.
- Ansicht-Eigenschaft**Show In Tree** (`Bool`): Wenn auf `true` gesetzt, wird das Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") angezeigt. Andernfalls wird es ausgeblendet.
- Ansicht-Eigenschaft**Visibility** (`Bool`): Wenn auf `true` gesetzt, wird das Objekt in der the [3D-Ansicht](/3D_view/de "3D view/de"); andernfalls wird es ausgeblendet. Standardmäßig kann diese Eigenschaft durch Drücken der Leertaste der Tastatur umgeschaltet werden.

Auswahl (Selection)

- Ansicht-Eigenschaft**On Top When Selected** (`Enumeration`): `Disabled` (Standardwert), `Enabled`, `Object`, `Element`.
- Ansicht-Eigenschaft**Selection Style** (`Enumeration`): `Shape` (Standardwert), `BoundBox`. Ist die Option `Shape` ausgewält, wird die gesamte Form (Knoten, Kanten, und Flächen) in der [3D-Ansicht](/3D_view/de "3D view/de") hervorgehoben; ist es `BoundBox`, wird nur der Begrenzungsrahmen hervorgehoben.

## Detaillierte Beschreibung

### Aktiver Status

Ein geöffnetes Dokument kann mehrere Teile enthalten. Aber nur ein Teil kann aktiv sein. Das aktive Teil wird in der [Baumansicht](/Tree_view/de "Tree view/de") mit einer Hintergrundfarbe angezeigt, die mit dem **Aktiver Behälter**-Wert im [Voreinstellungseditor](/Preferences_Editor/de#Farben "Preferences Editor/de") angegeben wird. Der voreingestellte Wert ist hellblau. Es wird auch mit der Schrifteigenschaft 'fett' angezeigt.

Ein Part-Objekt aktivieren oder deaktivieren:

- Doppelklick auf das Part-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") oder
- Das Kontextmenü öffnen (Rechtsklick) und **Aktives Objekt** wählen.

![](/src/assets/images/Std_Part_active.png)

Dokument mit zwei Std Teilen, in der das zweite aktiv ist.

### Ursprung

Der Ursprung besteht aus den drei Standardachsen (X, Y, Z) und drei Standardebenen (XY, XZ und YZ). An diese können [Skizzen](/Sketch/de "Sketch/de") und andere Objekte angehängt werden, wenn sie erstellt werden.

![](/src/assets/images/Part_Origin_tree.png) ![](/src/assets/images/Part_Origin_view.png)

Links: Teil Ursprung in der [Baumansicht](/Tree_view/de "Tree view/de"). Rechts: Ansicht der Ursprungselemente in der [3D-Ansicht](/3D_view/de "3D view/de").

_Hinweis:_ der Ursprung ist ein [App-Origin](/App_OriginGroupExtension/de "App OriginGroupExtension/de")-Objekt (Klasse `App::OriginGroupExtension`), während die Achsen und Ebenen Objekte des Typs `App::Line` bzw. `App::Plane` sind. Jedes dieser Elemente kann mit der Leertaste individuell ausgeblendet und wieder angezeigt werden. Damit kann sicher die korrekte Referenz gewählt werden, wenn andere Objekte erzeugt werden.

_Hinweis 2:_ alle Elemente innerhalb einer Baugruppe beziehen sich auf den Ursprung der Baugruppe. Das bedeutet, dass die Baugruppe bezogen auf das globale Koordinatensystem verschoben oder gedreht werden kann, ohne die Positionierung der Elemente innerhalb der Baugruppe zu beeinflussen.

### Anzeigeverwaltung

Die Sichtbarkeit der Baugruppe überlagert die Sichtbarkeit jedes darin enthaltenen Objekts. Wenn die Baugruppe ausgeblendet ist, werden auch die darin enthaltenen Objekte ausgeblendet, auch wenn ihre jeweilige Ansicht-Eigenschaft**Sichtbarkeit** auf `true` (wahr) gesetzt ist. Ist die Baugruppe sichtbar, entscheidet die Ansicht-Eigenschaft**Sichtbarkeit** des jeweiligen Objekts, ob das Objekt angezeigt wird oder nicht.

![](/src/assets/images/Part_Visibility_off.png) ![](/src/assets/images/Part_Visibility_on.png)

Die Sichtbarkeit des Std Teils (Part-Objekt) bestimmt, ob die Objekte, die in der Baugruppe zusammengestellt sind, in der [3D-Ansicht](/3D_view/de "3D view/de") angezeigt werden oder nicht. Links: die Baugruppe ist ausgeblendet und keines der Objekte wird in der [3D-Ansicht](/3D_view/de "3D view/de") angezeigt. Rechts: die Baugruppe ist sichtbar und jedes Objekt bestimmt seine Sichtbarkeit selbst.

## Skripten

_Siehe auch:_ [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de") und [Skriptgenerierte Objekte](/Scripted_objects/de "Scripted objects/de").

Siehe [Part Formelement](/Part_Feature/de "Part Feature/de") für allgemeine Informationen zum Hinzufügen von Objekten zu einem Dokument.

Ein Std Teil ([App Part](/App_Part/de "App Part/de")) wird mit der Methode `addObject()` des Dokuments erstellt. Sobald eine Baugruppe (Part-Objekt) existiert, können andere Objekte mit den Methoden `addObject()` oder `addObjects()` zur Baugruppe hinzugefügt werden.

```
import FreeCAD as App

doc = App.newDocument()
part = App.ActiveDocument.addObject("App::Part", "Part")

obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("Part::Box", "Box")

part.addObjects([obj1, obj2])
App.ActiveDocument.recompute()

```

Es kann kein skriptgeneriertes `App::Part` erstellt werden. Es kann aber das Verhalten eines `App::Parts` zu einem skriptgenerierten `Part::FeaturePython`-Objekt durch folgende Codes hinzugefügt werden:

```
class MyGroup(object):
    def __init__(self, obj=None):
        self.Object = obj
        if obj:
            self.attach(obj)

    def dumps(self):
        return

    def loads(self, _state):
        return

    def attach(self, obj):
        obj.addExtension("App::OriginGroupExtensionPython")
        obj.Origin = FreeCAD.ActiveDocument.addObject("App::Origin", "Origin")

    def onDocumentRestored(self, obj):
        self.Object = obj

class ViewProviderMyGroup(object):
    def __init__(self, vobj=None):
        if vobj:
            vobj.Proxy = self
            self.attach(vobj)
        else:
            self.ViewObject = None

    def attach(self, vobj):
        vobj.addExtension("Gui::ViewProviderOriginGroupExtensionPython")
        self.ViewObject = vobj

    def dumps(self):
        return None

    def loads(self, _state):
        return None

App.ActiveDocument.addObject("Part::FeaturePython",
                             "Group",
                             MyGroup(),
                             ViewProviderMyGroup(),
                             True)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Part/de&oldid=1560868>"
