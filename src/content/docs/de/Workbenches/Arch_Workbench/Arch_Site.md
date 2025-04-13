---
title: Arch Grundstück
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Grundstück |
| Menüeintrag |
| 3D/BIM → Grundstück |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| S I |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das **Arch Grundstück** ist ein spezielles Objekt, das Eigenschaften eines normalen FreeCAD-Gruppenobjekts mit denen von Arch-Objekten kombiniert. Es ist besonders zur Darstellung einer gesamten Projektfläche bzw. eines Geländes geeignet. In IFC-basierter architektonischer Arbeit dient es der Organisation des CAD-Modells und enthält [Gebäude](/Arch_Building/de "Arch Building/de") (Building-Objekte). Das Grundstück wird auch verwendet, um vorhandenes Gelände zu verwalten und anzuzeigen und kann benutzt werden, um das Volumen von aufzufüllender oder abzutragender Erde zu berechnen.

## Anwendung

1. Wahlweise ein oder mehrere Objekte auswählen, die in eine neues Grundstück übernommen werden sollen.
2. Die Schaltfläche ![](/images/Arch_Site.svg) Grundstück drücken oder das Tastaturkürzel S dann I verwenden.

## Optionen

* Nachdem ein Grundstück erstellt wurde, können ihm Objekte hinzugefügt werden, durch Ziehen und Ablegen in der [Baumansicht](/Tree_view/de "Tree view/de") oder durch Verwenden des Werkzeugs ![](/images/Arch_Add.svg) [Arch Hinzufügen](/Arch_Add/de "Arch Add/de"). Dies bestimmt nur, welche Objekte Teil des gegebenen Grundstücks sind, und hat keinen Einfluss auf das Gelände selbst.
* Objekte können von einem Grundstück entfernt werden, indem sie durch Ziehen & Ablegen in der [Baumansicht](/Tree_view/de "Tree view/de") herausgezogen werden oder durch Verwenden des Werkzeugs ![](/images/Arch_Remove.svg) [Arch Entfernen](/Arch_Remove/de "Arch Remove/de").
* Ein Geländeobjekt (Terrain-Objekt) kann hinzugefügt werden, indem die Daten-Eigenschaft**Gelände** des Grundstücks bearbeitet wird. Das Gelände kann eine offene Hülle (Shell) sein oder ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) ein Festkörper.
* Du kannst Volumenkörper hinzufügen, die zum Basisgelände hinzugefügt oder vom Basisgelände subtrahiert werden sollen, indem du auf das Grundstück doppelklickst und Objekte zu ihren Gruppen Ergänzungen oder Subtraktionen hinzufügst. Die Objekte müssen Festkörper sein.
* Die Daten-Eigenschaft**Extrusionsvektor** kann verwendet werden, wenn das Gelände eine offene Hülle ist und/oder Ergänzugen und Subtraktionen vorhanden sind. Um diese Ergänzugen bzw. Subtraktionen durchzuführen, wird die offene Hülle zu einem Körper extrudiert, der dann entsprechend vereinigt bzw. beschnitten wird. Abhängig von der Geländetopologie kann diese Extrusion mit dem Standard Extrusionsvektor fehlschlagen. Dann kann das Problem möglicherweise behoben werden, indem dieser auf einen anderen Wert geändert wird. Diese Eigenschaft wird ignoriert, wenn das Gelände ein Festkörper ist.

## Eigenschaften

### Daten

Site

* Daten-Eigenschaft**Addition Volume** (`Volume`): Das diesem Gelände hinzuzufügende Erdvolumen.
* Daten-Eigenschaft**Additions** (`LinkList`): Andere Formen, die an dieses Objekt angeheftet sind.
* Daten-Eigenschaft**Address** (`String`): Die Straße und Hausnummer dieses Grundstücks.
* Daten-Eigenschaft**City** (`String`): Die Stadt dieses Grundstücks.
* Daten-Eigenschaft**Country** (`String`): Das Land dieses Grundstücks.
* Daten-Eigenschaft**Declination** (`Angle`): Der Winkel zwischen dem wahren Norden und der Nordrichtung in diesem Dokument, die der Y-Achse entspricht. Das bedeutet, dass standardmäßig (nach) Norden entlang der Y-Achse und (nach) Osten entlang der X-Achse zeigt; der Winkel nimmt gegen den Uhrzeigersinn zu. Diese Eigenschaft hieß früher Daten-Eigenschaft**North Deviation**.
* Daten-Eigenschaft**EPW File** (`FileIncluded`): Ermöglicht das Anhängen einer EPW-Datei von der [EPW-Daten-Webseite Ladybug](https://www.ladybug.tools/epwmap/) an dieses Grundstück. Dies ist erforderlich, um Windrosengrafiken anzuzeigen.
* Daten-Eigenschaft**Elevation** (`Length`): Erhebung des Geländes über eine Null-Ebene (level 0). (Siehe [Deutsches Haupthöhennetz](https://de.wikipedia.org/wiki/Deutsches_Haupthöhennetz#DHHN2016))
* Daten-Eigenschaft**Extrusion Vector** (`Vector`): Ein Extrusionsvektor zur Verwendung bei der Durchführung boolescher Verknüpfungen.
* Daten-Eigenschaft**Latitude** (`Float`): Der Breitengrad dieses Grundstücks.
* Daten-Eigenschaft**Longitude** (`Float`): Der Längengrad dieses Grundstücks.
* Daten-Eigenschaft**Origin Offset** (`Vector`): Ein optionaler Abstand zwischen dem Modellursprung (0,0,0) und dem durch Geo-Koordinaten angegebenen Punkt.
* Daten-Eigenschaft**Perimeter** (`Length`): Die Umfangslänge der Projektionsfläche.
* Daten-Eigenschaft**Postal Code** (`String`): Die Postleitzahl (postal or zip code) dieses Grundstücks.
* Daten-Eigenschaft**Projected Area** (`Area`) (Projektionsfläche): Die projizierte Fläche dieses Objekts auf der XY-Ebene.
* Daten-Eigenschaft**Region** (`String`): Das Bundesland (region, province or county) dieses Grundstücks.
* Daten-Eigenschaft**Remove Splitter** (`Bool`): Trennstellen(?) aus der resultierenden Form entfernen.
* Daten-Eigenschaft**Subtraction Volume** (`Volume`): Das Erdvolumen, das von diesem Gelände entfernt werden soll.
* Daten-Eigenschaft**Subtractions** (`LinkList`): Andere Formen, die aus diesem Objekt entfernt werden.
* Daten-Eigenschaft**Terrain** (`Link`): Das Basisgelände dieses Grundstücks.
* Daten-Eigenschaft**Time Zone** (`Integer`): Repräsentiert die Zeitzone, in der das Grundstück liegt. Da dies ein ganzzahliger Wert (integer) ist, sind nur Standard-Zeitzonen erlaubt. Ist die Eigenschaft Ansicht-Eigenschaft**Solar Diagram** auf `true` gesetzt und das richtige Modul installiert, wird dieser Wert eingesetzt, um genauere [Solar- und Winddiagramme](#Solar-_und_Winddiagramme) zu generieren. Die Zeitzone kann zwischen -12 und +14 liegen, wobei 0 in Greenwich, UK liegt (GMT+0). Positive Werte verlaufen von Greenwich aus nach Osten und negative Werte nach Westen.
* Daten-Eigenschaft**Url** (`String`): Eine Url, die dieses Grundstück auf einer Kartierungs-Webseite zeigt.

### Ansicht

Compass

* Ansicht**Compass** (`Bool`): Default is `False`. Shows or hides the compass.
* Ansicht**Compass Position** (`Vector`): The position of the compass relative to the site placement.
* Ansicht**Compass Rotation** (`Angle`): The rotation of the compass relative to the site.
* Ansicht**Update Declination** (`Bool`): Default is `False`. Update the declination value based on the compass rotation.

Site

* Ansicht-Eigenschaft**Orientation** (`Enumeration`): Standardwert ist `Project North`. Wird er auf `True North` gesetzt, wird die gesamte Geometrie so gedreht, das sie dem wahren Norden dieses Grundstücks entspricht.
* Ansicht-Eigenschaft**Solar Diagram** (`Bool`): Standardwert ist `False`. Zeigt das Sonnenstandsdiagramm an oder blendet es aus. Siehe [Sonnenstands- und Winddiagramme](#Sonnenstands-_und_Winddiagramme).
* Ansicht-Eigenschaft**Solar Diagram Color** (`Color`): Die Farbe des Sonnenstandsdiagramms.
* Ansicht-Eigenschaft**Solar Diagram Position** (`Vector`): Die Position des Sonnenstandsdiagramms.
* Ansicht-Eigenschaft**Solar Diagram Scale** (`Float`): Der Maßstab des Sonnenstandsdiagramms.
* Ansicht-Eigenschaft**Wind Rose** (`Bool`): Standardwert ist `False`. Zeigt das Windrosendiagramm an oder blendet es aus (erfordert, dass die Daten-Eigenschaft **EPW File** ausgefüllt und das Python-Modul Ladybug installiert ist. Siehe [Sonnenstands- und Winddiagramme](#Sonnenstands-_und_Winddiagramme)).

## Typischer Arbeitsablauf

Man beginnt damit, ein Objekt zu erstellen, das das Gelände repräsentiert. Es können z.B. einfach Netzdaten importiert werden, die mit dem Menüeintrag **Part → Form aus Netz erstellen** in eine Part-Form umgewandelt werden können. Dann wird ein Grundstück (Site-Objekt) erstellt, und dessen Daten-Eigenschaft**Gelände** auf die gerade erstellte Part-Form gesetzt:

![](/images/Arch_site_example_01.jpg)

Erstelle einige Volumina (sie müssen Festkörper sein), die die Bereiche repräsentieren, die ausgegraben oder gefüllt werden sollen. Doppelklicke in der Baumansicht auf das Baustellenobjekt und füge diese Volumina zu den Additions- oder Subtraktionsgruppen hinzu. Klicke auf OK.

![](/images/Arch_site_example_02.jpg)

Die Baustellengeometrie wird neu berechnet und die Flächen, der Umfang und die Volumeneigenschaften werden neu berechnet.

![](/images/Arch_site_example_03.jpg)

## Sonnenstands- und Winddiagramme

Wenn [Ladybug](https://www.ladybug.tools/ladybug.html) auf deinem System installiert ist, kann Arch Grundstück ein Sonnenstandsdiagramm und/oder eine Windrose anzeigen. Hierfür müssen Daten-Eigenschaft**Längengrad**, Daten-Eigenschaft**Breitengrad** und Daten-Eigenschaft**Deklination** (previously Daten-Eigenschaft**Nordabweichung**) korrekt eingestellt und Ansicht-Eigenschaft**Solardiagramm** oder Ansicht-Eigenschaft**Windrose** auf `true` gesetzt sein.

### Hinweise

* Das Diagramm kann skaliert, ausgerichtet und auf einen speziellen Punkt im Modell zentriert werden. Es kann auch ein- und ausgeschaltet werden. Zum jetzigen Zeitpunkt ist es eher ein visuelles denn ein funktionelles Element und dient nur zu Darstellungszwecken.
* Für den Fall, dass Ladybug nicht zur Verfügung steht, wird [Pysolar](http://pysolar.org/) (Version 0.7 und neuer) immer noch unterstützt, um Sonnenstandsdiagramme zu erstellen, es erstellt aber keine Windrosen. Allerdings ist Ladybug ein weitaus leistungsfähigeres Werkzeug, das in Zukunft wahrscheinlich häufiger verwendet werden wird, so dass wir empfehlen, es anstelle von Pysolar zu verwenden. Ladybug kann einfach über den Python-Paket-Manager [pip](https://github.com/ladybug-tools/ladybug?tab=readme-ov-file#installation) installiert werden.

![](/images/Freecad-solar-diagram.jpg)

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Grundstück kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit der folgenden Funktion verwendet werden:

```
Site = makeSite(objectslist=None, baseobj=None, name="Site")

```

* Erstellt ein Grundstück-Objekt `Site` aus einer Liste von Objekten `objectslist` oder einem Basisobjekt `baseobj`, das eine Form `Shape` oder ein Gelände `Terrain` ist.

Beispiel:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Building = Arch.makeBuilding([Wall])
Site = Arch.makeSite([Building])

FreeCAD.ActiveDocument.recompute()
FreeCAD.Gui.ActiveDocument.ActiveView.viewIsometric()

```

### Solardiagramm

Solange das `pysolar` Modul vorhanden ist, kann dem Standort ein Sonnenstandsdiagramm hinzugefügt werden. Stelle den Längen- und Breitengrad und die Deklinationswinkel sowie einen für die Größe deines Modells geeigneten Maßstab ein.

Zum jetzigen Zeitpunkt dient das Diagramm nur zu Informationszwecken und steht für die visuelle Darstellung zur Verfügung. Für ein Sonnenstandsdiagramm, das die Darstellung von Schatten ermöglicht und interaktiv Datum und Uhrzeit anpasst, ist die beste Möglichkeit, eine externe Webseite zu verwenden, die den Upload von 3D-Modellen erlaubt. Einige von diesen unterstützen z.B. die Formate .obj und .stl, die von FreeCAD exportiert werden können.

Bitte beachte, dass Pysolar 0.7 oder höher erforderlich ist und diese Version nur mit Python 3 funktioniert.

```
Site.Longitude = -46.38
Site.Latitude = -23.33
Site.Declination = 30
# Uncomment if you want to show the compass
# Site.ViewObject.Compass = True

Site.ViewObject.SolarDiagram = True
Site.ViewObject.SolarDiagramScale = 10000
FreeCAD.ActiveDocument.recompute()

```

### Sonnendiagramm unabhängig von der Baustelle

Ein Sonnenstandsdiagramm kann unabhängig von einem beliebigen Standort mit der folgenden Funktion erstellt werden.

```
Node = makeSolarDiagram(longitude, latitude, scale=1, complete=False)

```

* Erstellt ein Sonnenstandsdiagramm als ein Pivy Knoten unter Verwendung von `Längengrad` und `Breitengrad`, mit einem optionalen `Maßstab`.
* Wenn `vollständig` `True` ist, werden die 12 Monate gezeichnet, was das vollständige Solardiagramm zeigt [analemma](https://en.wikipedia.org/wiki/Analemma).

```
import FreeCADGui, Arch

Node = Arch.makeSolarDiagram(-46.38, -23.33, scale=10000, complete=True)
FreeCAD.Gui.ActiveDocument.ActiveView.getSceneGraph().addChild(Node)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Site/de&oldid=1561220>"