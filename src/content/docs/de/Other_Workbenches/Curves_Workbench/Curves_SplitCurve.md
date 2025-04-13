---
title: Curves KurveTeilen
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Curves KurveTeilen |
| Menüeintrag |
| Curves → Split curve |
| Arbeitsbereich |
| [Curves](/Curves_Workbench/de "Curves Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/Curves_SplitCurve.svg) Curves KurveTeilen teilt ausgewählte Kanten.

## Anwendung

1. Eine oder mehrere Kanten in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/Curves_SplitCurve.svg) Kurve teilen drücken.
   * Den Menüeintrag **Kurven → ![](/images/Curves_SplitCurve.svg) Kurve teilen** auswählen.
3. Ein **SplitCurve**-Objekt wird für jede ausgewählte Kante erstellt.

   :   Die Kante wird nach der in **Number** eingestellten Anzahl in standardmäßig 2 gleichlange Kurvenabschnitte aufgeteilt.
4. Wahlweise die Werte im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen, um verschiedene Methoden zum Teilen zu aktivieren, indem die zugehörigen Eigenschaften eingestellt werden (siehe Eigenschaften):
   * Die Daten-Eigenschaft**Number** einstellen, um die Anzahl von gleichlangen Abschnitten zu erhöhen; `0` oder `1` deaktivieren diese Aufteilungsmethode.
   * Die Daten-Eigenschaft**Distance** einstellen, um das SplitCurve-Objekt mit einem Abstand zum Startknoten (positive Werte) oder zum Endknoten (negatitive Werte) zu teilen. `0.0 mm` deaktiviert diese Aufteilungsmethode.
   * Ein oder mehrere Schnittobjekte in die Daten-Eigenschaft**Cutting Objects** laden (auf das Eingabefeld klicken, anschließend auf die Schaltfläche ... drücken und schließlich eine oder mehrere Kanten oder Linienzüge im Dialogfenster auswählen).
     1. Ist die Daten-Eigenschaft**Cut At Vertexes** auf `false` gesetzt, wird das SplitCurve-Objekt an den Schnittpunkten geteilt oder an der Stelle mit dem kürzesten Abstand, wenn ein Schnittobjekt weder schneidet noch berührt.
     2. Ist die Daten-Eigenschaft**Cut At Vertexes** auf `true` gesetzt, werden alle Knoten des Schnittobjekts auf das SplitCurve-Objekt projiziert, das dann an den projizierten Punkten aufgeteilt wird.
   * Einen Abstandswert zur Daten-Eigenschaft**Values** hinzufügen, um das SplitCurve-Objekt an mehreren Stellen mit Abständen vom Startknoten (positive Werte) oder vom Endknoten (negatitive Werte) zu teilen (auf das Eingabefeld klicken, die Schaltfläche ... drücken und einen oder mehrere Werte im Dialogfenster eingeben). Jeder Wert kann entweder eine Länge oder ein Prozentwert sein.

## Hinweise

* Dieses Werkzeug erlaubt auch die Auswahl eines Objekts in der [Baumansicht](/Tree_view/de "Tree view/de"), das einen Linienzug enthält, als Eingabe einer Kante. Enthält es mehr als eine Kante werden all bis auf die erste ignoriert.
* Aufteilungsmethoden, die unabhängig voneinander Aufteilungsstellen zum endgültigen Ergebnis hinzufügen:
  1. Nach Anzahl: Die Daten-Eigenschaft**Number** auf einen Wert größer als 1 setzen, um Abschnitte gleicher Länge zu erhalten.
  2. Einzelner Abstand: Die Daten-Eigenschaft**Distance** auf einen Wert ungleich `0.0 mm` setzen.
  3. Mehrere Abstände: Abstandswerte zur Daten-Eigenschaft**Values** hinzufügen, entweder absolut (mm) oder relativ (%).
  4. Schnittobjekte: Schnittobjekte zur Daten-Eigenschaft**Cutting Objects** hinzufügen:
     + Schnittpunkte: Die Daten-Eigenschaft**Cut At Vertexes** auf `false` setzen, um an Schnittpunkte aufzuteilen.
     + Kürzester Abstand: Wie vorher, um an der Stelle mit dem kürzesten Abstand aufzuteilen, wenn ein Schnittobjekt weder schneidet noch berührt.
     + Projizierte Punkte: Die Daten-Eigenschaft**Cut At Vertexes** auf `true` setzen, um dort zu teilen, wo die Knoten des Schnittobjekts auf das SplitCurve-Objekt projiziert werden.
* Die werte der Daten-Eigenschaft**Values** können auch durch Ziehen der Knoten in der [3D-Ansicht](/3D_view/de "3D view/de") geändert werden, wenn sich das SplitCurve-Objekt im Bearbeitungsmodus befindet (doppelt auf das SplitCurve-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") klicken, um umzuschalten).

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **SplitCurve**-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Base

* Daten-Eigenschaft**Source** (`LinkSub`): Zu teilende Kante.

Output

* Daten (Hidden)**Normalized Parameters** (`FloatList`): Normalized parameters list.

Split

* Daten**Cut At Vertexes** (`Bool`): Create a split point at nearest of each vertex of the cutting objects.
* Daten**Cutting Objects** (`LinkList`): List of objects that cut the curve.
* Daten**Distance** (`Distance`): Expression-ready distance value.
* Daten**Keep Solid** (`Bool`): Rebuild and output the complete shape.
* Daten**Number** (`Integer`): Number of equal segments.
* Daten**Values** (`StringList`): List of splitting locations.

  :   % and units are allowed.
  :   Negative values are computed from edge end.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_SplitCurve/de&oldid=1570858>"