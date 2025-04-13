---
title: Arch Platte
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Panel |
| Menüeintrag |
| 3D/BIM → Panel Utils → Plattenwerkzeuge → Platte |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| P A |
| Eingeführt in Version |
| 0.15 |
| Siehe auch |
| [Arch Plattenzuschnitt](/Arch_Panel_Cut/de "Arch Panel Cut/de"), [Arch Plattenzeichnung](/Arch_Panel_Sheet/de "Arch Panel Sheet/de") |
|  |

## Beschreibung

Das Werkzeug **Arch Platte** ermöglicht alle Arten von plattenartigen Elementen zu erstellen, typischerweise für Plattenkonstruktionen wie das [WikiHouse](http://www.wikihouse.cc/)-Projekt, aber auch für alle Arten von Objekten, die auf einem ebenen Profil basieren.

![](/images/Arch_Panel_example.jpg)

*Das obige Bild zeigt eine Reihe von Plattenobjekten, die einfach aus importierten 2D-Konturen aus einer DXF-Datei erstellt wurden. Sie können dann gedreht und zusammengesetzt werden, um Strukturen zu erzeugen.*

Seit 0.17 und neuer kann Arch Platte auch zur Erstellung von gewellten oder trapezförmigen Profilen verwendet werden:

![](/images/Arch_panel_wave.jpg)

## Anwendung

1. Eine 2D-Form auswählen (Draft-Objekt, Fläche oder Skizze) - optional
2. Die Schaltfläche ![](/images/Arch_Panel.svg)Platte drücken oder das Tastaturkürzel P dann A.
3. Die gewünschten Eigenschaften anpassen.

### Begrenzungen

* Es gibt derzeit kein automatisches System zur Herstellung von 2D-Schnittbögen aus Plattenobjekten, aber eine solche Funktion ist in Planung enthalten und wird in Zukunft hinzugefügt werden.

## Optionen

* Die Wandstärke einer Platte kann nach der Erstellung angepasst werden.
* Esc oder die Schaltfläche Cancel drücken, um den aktuellen Befehl abzubrechen.
* Nach ihrer Erstellung kann durch Doppelklicken auf die Platte in der Baumansicht in den Bearbeitungsmodus gewechselt und so auf ihre Ergänzungen oder Aussparungen zugegriffen werden, um diese zu ändern.
* Es ist möglich, automatisch Platten zu erstellen, die aus mehr als einer Lage eines Materials zusammengesetzt sind, indem man den Wert ihrer Eigenschaft Sheets erhöht.
* Platten können ![](/images/Arch_MultiMaterial.svg) [Mehrfachmaterial](/Arch_MultiMaterial/de "Arch MultiMaterial/de") in Anspruch nehmen. Wenn ein Mehrfachmaterial verwendet wird, wird die Platte mehrschichtig, wobei die durch das Mehrfachmaterial vorgegebenen Wandstärken verwendet werden. Bei jeder Schicht mit einer Wandstärke von Null wird die Wandstärke automatisch durch den verbleibenden Raum festgelegt, den die Wandstärke der Platte abzüglich der anderen Schichten ergibt.

## Eigenschaften

Eine Arch-Platte (Panel-Objekt) besitzt die gemeinsamen Eigenschaften und Verhaltensweisen aller [Arch-Komponenten](/Arch_Component/de "Arch Component/de").

* Daten**Länge**: Die Länge der Platte
* Daten**Breite**: Die Breite der Platte
* Daten**Dicke**: Die Dicke der Platte
* Daten**Bereich**: Der Bereich des Panels (automatisch)
* Daten**Bleche**: Die Anzahl der Bleche des Materials, aus dem die Tafel besteht
* Daten**Wellenlänge**: Die Länge der Welle für Wellplatten
* Daten**Wellenhöhe**: Die Höhe der Welle für Wellplatten
* Daten**Wellentyp**: Die Art der Welle für gewellte Platten, gebogen, trapezförmig oder mit Stacheln
* Daten**Wellenrichtung**: Die Orientierung der Wellen für gewellte Platten
* Daten**Untere Welle**: Wenn die untere Welle der Tafel flach ist oder nicht

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Platte kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit der folgenden Funktion verwendet werden:

```
Panel = makePanel(baseobj=None, length=0, width=0, thickness=0, placement=None, name="Panel")

```

* Erstellt ein `Panel` Objekt aus dem gegebenen `baseobj`, das ein geschlossenes Profil ist, und der gegebenen Extrusion `thickness`.
  + Wenn kein `baseobj` gegeben ist, kannst du die numerischen Werte für `length`, `width`, und `thickness` angeben, um ein Blocktafel zu erstellen.
* Wenn ein `placement` gegeben wird, wird es verwendet.

Beispiel:

```
import FreeCAD, Draft, Arch

Rect = Draft.makeRectangle(1000, 400)
Panel = Arch.makePanel(Rect, thickness=36)

```

## Tutorien

* [Wikihouse Portierungs Tutorium](/Wikihouse_porting_tutorial/de "Wikihouse porting tutorial/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel/de&oldid=1541992>"