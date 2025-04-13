---
title: Draft Skalieren
---
|  |
| --- |
| Draft Skalieren |
| Menüeintrag |
| Änderung → Skalieren Bearbeiten → Skalieren |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| S C |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Draft UnterelementHervorheben](/Draft_SubelementHighlight/de "Draft SubelementHighlight/de"), [Draft Klonen](/Draft_Clone/de "Draft Clone/de") |
|  |

## Beschreibung

Das Werkzeug ![](/images/Draft_Scale.svg) **Draft Skalieren** skaliert oder kopiert ausgewählte Objekte von einem Basispunkt aus. Im Unterelement-Modus skaliert der Befehl ausgewählte Punkte und Kanten von [Draft Linien](/Draft_Line/de "Draft Line/de") und [Draft-Drähten](/Draft_Wire/de "Draft Wire/de").

Der Befehl kann auf 2D-Formen angewendet werden, die mit den Arbeitsbereichen [Draft](/Draft_Workbench/de "Draft Workbench/de") oder [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") erstellt wurden, kann aber auch mit vielen Arten von 3D-Objekten benutzt werden, wie denen, die mit den Arbeitsbereichen [Part](/Part_Workbench/de "Part Workbench/de") oder [BIM](/BIM_Workbench/de "BIM Workbench/de") erzeugt wurden.

![](/images/Draft_Scale_example.png)

Skalieren eines Objekts von einen Basispunkt aus

## Anwendung

Siehe auch: [Draft Fangen](/Draft_Snap/de "Draft Snap/de") und [Draft Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Wähle wahlweise eines oder mehrere Objekte, oder ein oder mehrere Unterelemente von [Draft Linien](/Draft_Line/de "Draft Line/de") or [Draft Linienzug](/Draft_Wire/de "Draft Wire/de").
2. Es gibt mehrere Möglichkeiten den Befehl zu starten:
   * Drücke die ![](/images/Draft_Scale.svg) Skalieren Schaltfläche.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Wähle die **Änderung → ![](/images/Draft_Scale.svg) Skalieren** Option aus dem Menü.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Wähle die **Modifizieren → ![](/images/Draft_Scale.svg) Skalieren** Option aus dem Menü.
   * Wähle die Abkürzungstaste: S dann C.
3. Wenn du kein Objekt ausgewählt hast: wähle ein Objekt in der [3D Ansicht](/3D_view/de "3D view/de").
4. Das **Skalieren** Aufgabenfenster öffnet. Siehe [Optionen](#Options) für weitere Informationen.
5. Wenn Unterelemente ausgewählt wurden: überprüfe das **Modifiziere Unterelemente** Optionsfeld um in den Unterelemente Modus zu wechseln.
6. Wähle den Basispunkt in der [3D Ansicht](/3D_view/de "3D view/de"), oder gib Koordinaten ein und wähle die ![](/images/Draft_AddPoint.svg) Enter point Schaltfläche.
7. Gib die X, Y und Z Skalierfaktoren ein.
8. Drücke Enter oder die OK Schaltfläche um den Befehl zu beenden.

## Optionen

### Erstes Aufgabenfenster

Alle im Aufgabenfenster vorhandenen Abkürzungstasten können geändert werden. Siehe [Draft Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Abkürzungstasten sind die voreingestellten.

* Um die Koordinaten des Basispunktes von Hand einzugeben, gib die X, Y und Z Komponenten ein und drücke nach jeder Enter. Oder du kannst die ![](/images/Draft_AddPoint.svg) Enter point Schaltfläche betätigen sobald du die gewünschten Werte hast. Es ist ratsam den Zeiger vor der Eingabe der Koordinaten aus der [3D Ansicht](/3D_view/de "3D view/de") heraus zu bewegen.
* Drücke G oder wähle das **Global** Optionsfeld um den globalen Modus umzuschalten. Wenn der Global Modus aktiv ist, dann sind die Koordinaten relativ zum globalen Koordinatensystem, sonst sind sie relativ zum Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* Drücke S um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein oder auszuschalten.
* Drücke die Abbrechen Schaltfläche um den Befehl abzubrechen.

### Zweites Aufgabenfenster

* Gib um die Skalierung zu definieren die X, Y und Z Faktoren ein. Die Werte müssen größer als Null sein.
* Markiere das **Einheitliche Skalierung** Optionsfeld um die X, Y und Z Faktoren auf den gleichen Wert einzurasten.
* Wenn das **Ausrichtung der Arbeitsebene** Optionsfeld gewählt ist dann sind die Skalierungsfaktoren relativ zum Koordinaten System der [Arbeitsebene](/Draft_SelectPlane "Draft SelectPlane"), sonst sind sie relativ zum globalen Koordinatensystem.
* Wenn das **Kopieren** Optionsfeld gewählt ist dann wird eine skalierte Kopie des Originalobjektes erzeugt. Dies funktioniert nur bei Draft Objekten die eine Daten**Punkte** Eigenschaft haben, wie etwa [Draft Linienzug](/Draft_Wire/de "Draft Wire/de").
* Wenn das **Unterelemente ändern** Optionsfeld gewählt ist dann verwendet der Befehl die gewählten Unterelemente an Stelle des gesamten Objektes. Die Unterelemente müssen zu [Draft Linien](/Draft_Line "Draft Line") oder [Draft Linienzug](/Draft_Wire/de "Draft Wire/de") gehören.
* Wenn das **Klon erzeugen** Optionsfeld gewählt ist dann werden skalierte [Klone](/Draft_Clone/de "Draft Clone/de") des original Objektes erzeugt. Dies funktioniert mit allen Objekttypen. Für Objekte die keine Draft Objekte sind, oder für Draft Objekte die keine Daten**Punkte** Eigenschaft haben, *muss* dies gewählt werden.
* Drücke die Anfangs- und Endpunkte wählen Schaltfläche und wähle zwei zusätzliche Punkte in der [3D Ansicht](/3D_view/de "3D view/de") um die Masstabfaktoren zu berechnen. Dies überprüft automatisch das **Einheitliche Skalierung** Optionsfeld. Die X, Y und Z Skalierungsfaktoren werden daher gleich sein und auf den Abstand zwischen Basispunkt und 'von' Punkt, dividiert durch den Abstand zwischen Basispunkt und 'bis' Punkt gesetzt werden.
* Drücke Esc oder die Abbrechen Schaltfläche um den Befehl abzubrechen.

## Hinweise

* Der Befehl kann auch [Bildebenen](/Image_CreateImagePlane/de "Image CreateImagePlane/de") skalieren, aber nicht im Klon-Modus.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") und [Draft Einstellungen](/Draft_Preferences/de "Draft Preferences/de").

* Um die Basisobjekte nach dem Kopieren von Objekten wieder auszuwählen: **Bearbeiten → Einstellungen... → Draft → Allgemein → Wähle ursprüngliche Objekte nach dem Kopieren aus**.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum skalieren von Objekten wird die Methode `scale` des Draft-Moduls verwendet.

```
scaled_list = scale(objectslist, scale=Vector(1,1,1), center=Vector(0,0,0), copy=False)

```

* `objectslist` enthält die Objekte, die skaliert werden sollen. Das ist entweder ein einzelnes Objekt oder eine Liste von Objekten.
* `scale` ist der Vektor welcher die X, Y und Z Skalierungsfaktoren definiert.
* `center` ist der Mittelpunkt der Skalierungsoperation.
* Falls `copy` auf `True` ist, dann werden Kopien erzeugt,anstatt die originalen Objekte zu skalieren.
* `scaled_list` wird mit den originalen skalierten Objekten oder mit neuen Kopien zurückgeliefert. Ist abhängig von `objectslist` entweder ein einzelnes Objekt oder eine Liste von Objekten..

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

pts = [App.Vector(0, 0, 0), App.Vector(500, 500, 0), App.Vector(600, 0, 0)]
wire1 = Draft.make_wire(pts, closed=True)
doc.recompute()

scale1 = App.Vector(2.3, 0.75, 0)
wire2 = Draft.scale(wire1, scale1, copy=True)
doc.recompute()

scale2 = App.Vector(-2, -1.5, 0)
wires = Draft.scale([wire1, wire2], scale2, copy=True)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Scale/de&oldid=1513874>"