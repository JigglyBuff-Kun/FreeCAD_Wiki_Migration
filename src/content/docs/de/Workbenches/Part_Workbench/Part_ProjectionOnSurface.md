---
title: Part ProjektionAufOberfläche
---

|                                                |
| ---------------------------------------------- |
| Part ProjektionAufOberfläche                   |
| Menüeintrag                                    |
| Part → Erstelle Projektion auf Oberfläche...   |
| Arbeitsbereich                                 |
| [Part](/Part_Workbench/de "Part Workbench/de") |
| Standardtastenkürzel                           |
| _Keiner_                                       |
| Eingeführt in Version                          |
| 0.19                                           |
| Siehe auch                                     |
| _Keiner_                                       |
|                                                |

## Beschreibung

![](/images/Part_ProjectionOnSurface.svg) Part ProjektionAufOberfläche wird verwendet, um eine [Form](/Shape/de "Shape/de") auf der Oberseite einer Oberfläche auf eine andere [Form](/Shape/de "Shape/de") zu projizieren; dies kann verwendet werden, um ein Logo oder eine Textnachricht (siehe ![](/images/Draft_ShapeString.svg) [Entwurf FormZeichenfolge](/Draft_ShapeString/de "Draft ShapeString/de")) auf unterschiedliche Oberflächen zu projizieren, um interessante Effekte zu erzeugen.

Wenn eine Quelle [Form](/Shape/de "Shape/de") angegeben wird, kann dieses Werkzeug Kanten, Drähte (geschlossene Kanten) oder ganze Flächen daraus projizieren; das Ergebnis können neue Kanten, neue Drähte, neue Flächen oder sogar neue extrudierte Körper sein, die in ![](/images/Part_Boolean.svg) [Boolesche Operationen](/Part_Boolean/de "Part Boolean/de") für Effekte wie Gravieren oder Prägen verwendet werden können.

![](/images/Part_ProjectionOnSurface1.png) ![](/images/Part_ProjectionOnSurface2.png)

Projektion eines Logos auf eine gekrümmte Oberfläche

## Anwendung

1. Stelle sicher, dass du mindestens zwei Objekte in deinem Dokument hast; das "Quell" Objekt, das du projizieren möchtest, und das "Ziel" Objekt, auf das die Projektion erfolgen soll.
2. Klicke auf ![](/images/Part_ProjectionOnSurface.svg) Projektion auf Oberfläche um ein [Aufgabenpaneel](/Task_panel/de "Task panel/de") mit verschiedenen Optionen zu starten.
3. Klicke auf Projektionsfläche wählen, und klicke dann auf die "Ziel" Fläche, auf der die Projektion erstellt werden soll.
4. Klicke dann auf die betreffende Schaltfläche, um den Typ des Unterelements zu wählen, das du deinem Projektionsobjekt hinzufügen möchtest.
   - Fläche hinzufügen: Wähle eine Ausgangsfläche aus.
   - Draht hinzufügen: Wähle eine Ausgangskante. Das Werkzeug extrahiert dann den gesamten Draht, zu dem die Kante gehört. Wenn du z.B. eine einzelne Kante eines Polygons wählst, wird das gesamte Polygon projiziert.
   - Kante hinzufügen: Wähle eine Ausgangskante. Das Werkzeug projiziert nur die ausgewählte Kante.
   - Sobald eine Taste gedrückt ist, wähle ein Unterelement in der [3D Ansicht](/3D_view/de "3D view/de"). Wenn du die Auswahl wieder aufheben möchtest, wähle dasselbe Element erneut.
   - Wenn du mit deiner Auswahl zufrieden bist, drücke die gleiche Taste Hinzufügen..., um den Auswahlmodus zu verlassen.
5. Klicke dann auf den entsprechenden Auswahlknopf, um die Art der zu erstellenden Projektionsform zu wählen.
   - ![](/images/RadioButtonTrue.svg) Alles Anzeigen: Es werden alle Arten von geschlossenen Drähten und Kanten auf der Zieloberfläche angezeigt. Wenn im vorherigen Schritt ein "Fläche" Unterelement ausgewählt wurde, wird eine Vorschau eines aus der Projektion extrudierten festen Objekts angezeigt, abhängig vom Wert von **Höhe extrudieren**.
   - ![](/images/RadioButtonTrue.svg) Flächen anzeigen: es wird eine Vorschau einer gefüllten Fläche auf der Zielfläche angezeigt. Dies funktioniert nur, wenn du im vorherigen Schritt ein "Flächen" Unterelement ausgewählt hast; wenn du einen geschlossenen "Draht" ausgewählt hast, werden nur die Kanten (keine Fläche) als Projektion erzeugt; wenn du "Kanten" ausgewählt hast, werden nur diese Kanten als Projektion erzeugt.
   - ![](/images/RadioButtonTrue.svg) Kanten anzeigen: es wird eine Vorschau der Kanten auf der Zielfläche angezeigt. Dies funktioniert unabhängig davon, ob du im vorherigen Schritt ein Unterelement "Fläche", "Draht" oder "Kante" hinzugefügt hast; selbst wenn du eine gefüllte "Fläche" hinzugefügt hast, werden nur die Kanten als Projektion erzeugt.
6. Drücke die Taste OK, um den Vorgang abzuschließen und das neue Projektionsobjekt zu erzeugen.

Hinweise:

- Die Projektionsrichtung wird automatisch aus der Kamerarichtung in der [3D Ansicht](/3D_view/de "3D view/de") zum Zeitpunkt des Startens des Werkzeugs übernommen.
- Um die Richtung zu ändern, bewege die Kamera, und drücke Aktuelle Kamerarichtung ermitteln.
- Alternativ drücke die X:, Y:, oder Z: Schaltflächen um die Projektionsrichtung auf die globalen Hauptachsen einzustellen, +X, -X, +Y, -Y, +Z, or -Z.
- Beachte jedoch, dass eine Änderung der Projektionsrichtung die Projektionsvorschau nicht automatisch aktualisiert; dazu musst du die Geometrie neu auswählen, indem du die Hinzufügen... Schaltflächen drückst und die Unterelemente erneut auswählst.

## Optionen

- **Extrusionshöhe**: Dies ist die Höhe der festen Form, die durch Extrudieren der projizierten Fläche aus der Zielfläche und entlang des Negativs der Projektionsrichtung entsteht. Wenn die Projektionsrichtung beispielsweise entlang +Y `(0, 1, 0)`, wird die Extrusion in der Richtung -Y `(0, -1, 0)` erzeugt. Diese Volumenkörper Extrusion wird nur dann erzeugt, wenn das gewählte Unterelement eine geschlossene Fläche war, durch drücken der Fläche hinzufügen Schaltfläche, und durch Auswahl der ![](/images/RadioButtonTrue.svg) Alles anzeigen Option.
- **Festkörpertiefe**: dies ist die Entfernung, um die das Projektionsobjekt entlang der Projektionsrichtung bewegt wird. Negative Werte verschieben das Objekt in die entgegengesetzte Richtung; dadurch kann eine Projektion erzeugt werden, die von der Zielfläche versetzt ist.

## Begrenzungen

Der Projektionsalgorithmus ist manchmal nicht in der Lage, eine gültige Projektionsfläche zu erzeugen. In diesem Fall kann auch keine Vollprojektion erzeugt werden.

Wenn dies geschieht:

- Prüfe, ob deine Quellfläche gültig ist; versuche, das ![](/images/Part_CheckGeometry.svg) [PrüfeGeometrie](/Part_CheckGeometry/de "Part CheckGeometry/de") Werkzeug für Anhaltspunkte ablaufen zu lassen.
- Prüfe, ob die Projektionsrichtung gültig ist. Kann die Quellfläche realistisch auf die Zielfläche projiziert werden? Würde eine gerade Projektion auf die Oberfläche treffen? Stelle die Kamera so ein, dass die Quellfläche vor der Zielfläche liegt, und versuche es erneut.
- Versuche, die Option ![](/images/RadioButtonTrue.svg) Kanten anzeigen zu verwenden. Werden die Kanten korrekt projiziert? Versuche, eine Fläche mit den Kanten von Hand zu erzeugen.

The projection done in the Part workbench is not parametric. If you need a parametric workflow, please consult with the [`Projection` class](https://gist.github.com/CsatiZoltan/f4fd10bf20923143ba0e0678ea1d3d61), which is a Python scripted object, intended for programmatic use.

## Verweise

- Forumsbeitrag: [Flächen auf gebogene Oberfläche projizieren](https://forum.freecadweb.org/viewtopic.php?f=9&t=33700)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ProjectionOnSurface/de&oldid=1471862>"
