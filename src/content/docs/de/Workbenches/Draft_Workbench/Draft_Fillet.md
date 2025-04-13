---
title: Draft Verrundung
---
|  |
| --- |
| Draft Verrundung |
| Menüeintrag |
| Zeichnen → Verrundung 2D-Entwurf → Verrundung |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| F I |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| [Draft Linie](/Draft_Line/de "Draft Line/de"), [Draft Polylinie](/Draft_Wire/de "Draft Wire/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Fillet.svg) **Draft Verrundung** erstellt eine Verrundung (eine abgerundete Ecke) oder eine Fase (eine gerade Kante) zwischen zwei ausgewählten Kanten.

In 0.21 und davor funktioniert der Befehl nur dann richtig, wenn beide ausgewählte Kanten gerade sind.

In 1.0 und davor, wenn die ausgewählten Objekte mehrere Kanten besitzen, wird ihre erste Kante verwendet. Dies muss nicht die Kante sein, die in der [3D-Ansicht](/3D_view/de "3D view/de") ausgewählt wurde.

![](/images/Draft_Fillet_example.png)

Mehrere Verrundungen und Fasen, die zwischen zwei Kanten erstellt wurden

## Anwendung

1. Zwei Kanten auswählen, die sich in einem einzelnen Punkt treffen. Siehe [Hinweise](#Hinweise).
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Fillet.svg) Verrundung drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Zeichnen → ![](/images/Draft_Fillet.svg) Verrundung** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **2D-Entwurf → ![](/images/Draft_Fillet.svg) Verrundung** auswählen.
   * Das Tastaturkürzel F dann I.
3. Den **Fillet radius** (Abrundungsradius) eingeben. Achtung, der Befehl kann nicht erfolgreich abgeschlossen werden, wenn der Radius bzw. die Fase zu groß für die ausgewählten Kantenobjekte ist.
4. Wahlweise die Option **Originalobjekte löschen** aktivieren.
5. Wahlweise die Option **Fase erstellen** aktivieren.
6. Wurden eine oder beide der vorherigen Optionen ausgewählt: In das Eingabefeld **Abrundungsradius** klicken.
7. Enter drücken.

## Optionen

* Esc oder die Schaltfläche Schließen drücken, um den Befehl abzubrechen.

## Hinweise

* Eine Draft-Verrundung kann nicht bearbeitet werden und ist auch nicht mit den Kanten verknüpft, die zu ihrer Erstellung verwendet wurden.
* Ein [Draft-Linienzug](/Draft_Wire/de "Draft Wire/de"), der mindestens drei Punkte besitzt, kann verrundet oder angefast werden, indem seine Daten-Eigenschaft**Fillet Radius** bzw. Daten-Eigenschaft**Chamfer Size** geändert wird. Da [Draft-Linien](/Draft_Line/de "Draft Line/de") und [Draft-Linienzüge](/Draft_Wire/de "Draft Wire/de") mit den Befehlen [Draft Linienzug](/Draft_Wire/de "Draft Wire/de"), [Draft Verbinden](/Draft_Join/de "Draft Join/de") oder [Draft Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de") verbunden werden können, stellt dies eine alternative Methode zur Erstellung von Verrundungen und Fasen dar.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Draft-Verrundungs-Objekt wird von einem [Part Part2DObject](/Part_Part2DObject/de "Part Part2DObject/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Draft

* Daten-Eigenschaft**End** (`VectorDistance`): (schreibgeschützt) gibt den Endpunkt der Verrundung an.
* Daten-Eigenschaft**Fillet Radius** (`Length`): (schreibgeschützt) Radius, mit dem die Verrundung erstellt wurde.
* Daten-Eigenschaft**Length** (`Length`): (schreibgeschützt) gibt die Gesamtlänge der Verrundung an.
* Daten-Eigenschaft**Start** (`VectorDistance`): (schreibgeschützt) gibt den Startpunkt der Verrundung an.

### Ansicht

Draft

* Ansicht-Eigenschaft**Arrow Size** (`Length`): Gibt die Größe des Symbols an, das am Ende der Verrundung angezeigt wird.
* Ansicht-Eigenschaft**Arrow Type** (`Enumeration`): Gibt den Typ des Symbols an, das am Ende der Verrundung angezeigt wird und die Werte `Punkt` (Dot), `Kreis` (Circle), `Pfeil` (Arrow), `Schrägstrich` (Tick) oder `Schrägstrich-2` annehmen kann.
* Ansicht-Eigenschaft**End Arrow** (`Bool`): Gibt an, ob am Ende der Verrundung ein Symbol angezeigt wird, damit es als Maßlinie verwendet werden kann.
* Ansicht-Eigenschaft**Pattern** (`Enumeration`): wird nicht verwendet.
* Ansicht-Eigenschaft**Pattern Size** (`Float`): wird nicht verwendet.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Erstellen einer Draft-Verrundung wird die Methode `make_fillet` des Draft-Moduls verwendet:

```
fillet = make_fillet([edge1, edge2], radius=100, chamfer=False, delete=False)

```

* Erzeugt ein `Fillet` Objekt zwischen den Kantenobjekten `edge1` und `edge2`, wobei `radius` die Krümmung festlegt.
* Ist `chamfer` `True`, wird eine gerade Kante mit der Länge von `radius` erstellt, anstatt einer abgerundeten Kante.
* Ist `delete` `True`, werden die angegebenen `edge1` und `edge2` gelöscht, und nur das neue Objekt bleibt übrig.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

edge1 = Draft.make_line(p1, p2)
edge2 = Draft.make_line(p2, p3)

doc.recompute()

fillet = Draft.make_fillet([edge1, edge2], radius=500)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Fillet/de&oldid=1510761>"