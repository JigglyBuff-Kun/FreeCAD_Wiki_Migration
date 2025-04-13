---
title: Assembly StarreVerbindungErstellen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Assembly StarreVerbindungErstellen |
| Menüeintrag |
| Assembly → Starre Verbindung erstellen |
| Arbeitsbereich |
| [Assembly](/Assembly_Workbench/de "Assembly Workbench/de") |
| Standardtastenkürzel |
| F |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/Assembly_CreateJointFixed.svg) Assembly StarreVerbindungErstellen erstellt eine Verbindung zwischen zwei Bauteilen, die keine Verschiebung oder Drehung zulässt.

## Anwendung

1. Wahlweise zwei geometrsche Elemente zweier verschiedener Bauteile auswählen. Andere Auswahlen werden nicht verarbeitet.
2. Es gibt mehrere Möglichkeiten, dieses Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/Assembly_CreateJointFixed.svg) Starre Verbindung erstellen drücken.
   * Den Menüeintrag **Assembly → ![](/images/Assembly_CreateJointFixed.svg) Starre Verbindung erstellen** auswählen.
   * Das Tastaturkürzel F.
3. Vorausgewählte Bauteile werden so bewegt, dass sie sich an ihren ausgewählten Elementen treffen.
4. Der Dialog **Verbindung erstellen** wird im [Aufgaben-Fenster](/Task_panel/de "Task panel/de") geöffnet und listet die vorausgewählten Elemente.
5. Wahlweise die Art der Verbindung in der Ausklappliste ändern:
   * **Starr** auswählen.
     1. Wenn die Auswahlliste leer ist: Zwei geometrische Elemente auswählen.
     2. Die Bauteile werden so bewegt, dass sie sich an ihren ausgewählten Elementen treffen.
     3. Wahlweise einen Wert für *Versatz* eingeben.
     4. Wahlweise einen Wert für *Drehwinkel* eingeben.
     5. Wahlweise ![](/images/Button_sort.svg) drücken, um die Richtung der Verbindung umzukehren.
   * **Drehverbindung** auswählen.
     1. Wenn die Auswahlliste leer ist: Zwei geometrische Elemente auswählen.
     2. Die Bauteile werden so bewegt, dass sie sich an ihren ausgewählten Elementen treffen.
     3. Wahlweise einen Wert für *Versatz* eingeben.
     4. Wahlweise ![](/images/Button_sort.svg) drücken, um die Richtung der Verbindung umzukehren.
     5. Wahlweise die Option **Minimaler Winkel** aktivieren und einen Wert eingeben.
     6. Wahlweise die Option **Maximaler Winkel** aktivieren und einen Wert eingeben.
   * **Zylindrische Verbindung** auswählen.
     1. Wenn die Auswahlliste leer ist: Zwei geometrische Elemente auswählen.
     2. Wahlweise ![](/images/Button_sort.svg) drücken, um die Richtung der Verbindung umzukehren.
     3. Wahlweise die Option **Minimale Länge** aktivieren und einen Wert eingeben.
     4. Wahlweise die Option **Maximale Länge** aktivieren und einen Wert eingeben.
     5. Wahlweise die Option **Minimaler Winkel** aktivieren und einen Wert eingeben.
     6. Wahlweise die Option **Maximaler Winkel** aktivieren und einen Wert eingeben.
   * **Gleitverbindung** auswählen.
     1. Wenn die Auswahlliste leer ist: Zwei geometrische Elemente auswählen.
     2. Wahlweise einen Wert für *Drehwinkel* eingeben.
     3. Wahlweise ![](/images/Button_sort.svg) drücken, um die Richtung der Verbindung umzukehren.
     4. Wahlweise die Option **Minimale Länge** aktivieren und einen Wert eingeben.
     5. Wahlweise die Option **Maximale Länge** aktivieren und einen Wert eingeben.
   * **Kugelverbindung** auswählen.
     1. Wenn die Auswahlliste leer ist: Zwei geometrische Elemente auswählen.
   * **Abstand** auswählen.
     1. Wenn die Auswahlliste leer ist: Zwei geometrische Elemente auswählen.
     2. Wahlweise einen Wert für '*Abstand* eingeben.
     3. Wahlweise ![](/images/Button_sort.svg) drücken, um die Richtung der Verbindung umzukehren.
   * **Parallel** auswählen.
     1. Wenn die Auswahlliste leer ist: Zwei geometrische Elemente auswählen.
     2. Wahlweise ![](/images/Button_sort.svg) drücken, um die Richtung der Verbindung umzukehren.
   * **Rechtwinklig**auswählen.
     1. Wenn die Auswahlliste leer ist: Zwei geometrische Elemente auswählen.
   * **Winkel**.
     1. Wenn die Auswahlliste leer ist: Zwei geometrische Elemente auswählen.
     2. Wahlweise einen Wert für *Winkel* eingeben.
   * **Zahnstange-Ritzel** auswählen.
     1. Wenn die Auswahlliste leer ist: Zwei geometrische Elemente zweier unterschiedlicher Bauteile auswählen, die zuvor verwendet wurden, um eine Gleitverbindung und eine Drehverbindung festzulegen. (Gleitrichtung und Drehachse müssen rechtwinklig zueinander verlaufen)
     2. Wahlweise einen Wert für *Steigungsradius* eingeben.
   * **Spindel** auswählen.
     1. Wenn die Auswahlliste leer ist: Zwei geometrische Elemente zweier unterschiedlicher Bauteile auswählen, die zuvor verwendet wurden, um eine Gleitverbindung und eine Drehverbindung festzulegen. (Gleitrichtung und Drehachse müssen parallel zueinander verlaufen)
     2. Wahlweise einen Wert für *Steigungsradius* eingeben.
   * **Zahnräder** auswählen.
     1. Wenn die Auswahlliste leer ist: Zwei geometrische Elemente zweier unterschiedlicher Bauteile auswählen, die zuvor verwendet wurden, um zwei unterschiedliche Drehverbindungen festzulegen.
     2. Wahlweise einen Wert für *Radius 1* eingeben.
     3. Wahlweise einen Wert für *Radius 2* eingeben.
     4. Wahlweise die Option **Drehrichtung umkehren** aktivieren/deaktivieren. (Deaktivieren wählt die Option **Riemen** aus) - funktioniert bisher nicht für 1.0 RC
   * **Riemen** auswählen.
     1. Wenn die Auswahlliste leer ist: Zwei geometrische Elemente zweier unterschiedlicher Bauteile auswählen, die zuvor verwendet wurden, um zwei unterschiedliche Drehverbindungen festzulegen.
     2. Wahlweise einen Wert für *Radius 1* eingeben.
     3. Wahlweise einen Wert für *Radius 2* eingeben.
     4. Wahlweise die Option **Drehrichtung umkehren** aktivieren/deaktivieren. (aktivieren wählt die Option **Zahnräder** aus) - funktioniert bisher nicht für 1.0 RC
6. Die Bauteile werden so bewegt, dass sie sich an ihren ausgewählten Elementen treffen.
7. Die Schaltfläche OK drücken um das Werkzeug zu beenden.

## Hinweise

* Eine starre Verbindung kann als Antrieb zur Steuerung der Bewegung von kinematische Simulationen eingesetzt werden. Mausradaktionen im Aufgaben-Fenster werden direkt in neue Positionen der verbundenen Bauteile umgesetzt.
  + Versatz bewirkt Bewegung entlang der lokalen Z-Achse; negative Versatzwerte werden akzeptiert.
  + Drehung erfolgt um die lokale Z-Achse, Winkel > 360° und sogar negative Winkel werden akzeptiert.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **Fixed**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Joint

* Daten-Eigenschaft**Activated** (`Bool`): Dies zeigt an, ob die Verbindung aktiv ist.
* Daten-Eigenschaft**Distance** (`Float`): Dies ist der Abstand der Verbindung. Er wird nur für die Verbindungen Abstand, Zahnstange-Ritzel (Steigungsradius), Spindel, Zahnräder und Riemen (Radius1) eingesetzt.
* Daten-Eigenschaft**Distance2** (`Float`): Dies ist der zweite Abstand der Verbindung. Er wird nur für die Verbindungen Zahnräder und Riemen (Radius2) eingesetzt.
* Daten-Eigenschaft**Joint Type** (`Ennumeration`): Die Art der Verbindung. (`Fixed`, `Revolute`, `Cylindrical`, `Slider`, `Ball`, `Distance`, `Parallel`, `Perpendicular`, `Angle`, `RackPinion`, `Screw`, `Gears`, `Belt`)
* Daten-Eigenschaft**Offset** (`Vector`): Dies ist der Versatzvektor dieser Verbindung.
* Daten-Eigenschaft**Rotation** (`Float`): Dies ist der Drehwinkel dieser Verbindung.

Joint Connector 1

* Daten-Eigenschaft**Detach1** (`Bool`): Dies verhindert das Neuberechnen von Placement1 und ermöglicht dessen Position selbst zu bestimmen.
* Daten-Eigenschaft**Placement1** (`Placement`): Dies ist das lokale Koordinatensystem innerhalb des Objekts von Reference1, das für die Verbindung eingesetzt wird.
* Daten-Eigenschaft**Reference1** (`XlinkSubHidden`): Die erste Referenz der Verbindung.

Entfallene Eigenschaften:

* Daten-Eigenschaft**Element1** (`String`): Das ausgewählte Element des ersten Objekts.
* Daten-Eigenschaft**Object1** (`String`): Das erste Objekt der Verbindung.
* Daten-Eigenschaft**Part1** (`Link`): Das erste Bauteil der Verbindung.
* Daten-Eigenschaft**Vertex1** (`String`): Der ausgewählte Knoten des ersten Objekts.

Joint Connector 2

* Daten-Eigenschaft**Detach2** (`Bool`): Dies verhindert das Neuberechnen von Placement2 und ermöglicht dessen Position selbst zu bestimmen.
* Daten-Eigenschaft**Placement2** (`Placement`): Dies ist das lokale Koordinatensystem innerhalb des Objekts von Reference2, das für die Verbindung eingesetzt wird.
* Daten-Eigenschaft**Reference2** (`XlinkSubHidden`): Die zweite Referenz der Verbindung.

Entfallene Eigenschaften:

* Daten-Eigenschaft**Element2** (`String`): Das ausgewählte Element des zweiten Objekts.
* Daten-Eigenschaft**Object2** (`String`): Das zweite Objekt der Verbindung.
* Daten-Eigenschaft**Part2** (`Link`): Das zweite Bauteil der Verbindung.
* Daten-Eigenschaft**Vertex2** (`String`): Der ausgewählte Knoten des zweiten Objekts.

Limits

* Daten-Eigenschaft**Angle Max** (`Float`): Dies ist der obere Grenzwert des Winkels zwischen den beiden Koordinatensystemen (zwischen ihren X-Achsen).
* Daten-Eigenschaft**Angle Min** (`Float`): Dies ist der untere Grenzwert des Winkels zwischen den beiden Koordinatensystemen (zwischen ihren X-Achsen).
* Daten-Eigenschaft**Enable Angle Max** (`Bool`): Aktiviert den Grenzwert **Maximaler Winkel** der Verbindung.
* Daten-Eigenschaft**Enable Angle Min** (`Bool`): Aktiviert den Grenzwert **Minimaler Winkel** der Verbindung.
* Daten-Eigenschaft**Enable Length Max** (`Bool`): Aktiviert den Grenzwert **Maximale Länge** der Verbindung.
* Daten-Eigenschaft**Enable Length Min** (`Bool`): Aktiviert den Grenzwert **Minimale Länge** der Verbindung.
* Daten-Eigenschaft**Length Max** (`Float`): Dies ist der obere Grenzwert des Abstandes zwischen den beiden Koordinatensystemen (entlang ihrer Y-Achsen).
* Daten-Eigenschaft**Length Min** (`Float`): Dies ist der untere Grenzwert des Abstandes zwischen den beiden Koordinatensystemen (entlang ihrer Y-Achsen).

Entfallene Eigenschaften:

* Daten-Eigenschaft**Enable Limits** (`Bool`): Verwendet diese Verbindung Grenzwerte?

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointFixed/de&oldid=1550334>"