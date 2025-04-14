---
title: Std Bewegen
---

|                                                                             |
| --------------------------------------------------------------------------- |
| Std Bewegen                                                                 |
| Menüeintrag                                                                 |
| Bearbeiten → Bewegen                                                        |
| Arbeitsbereich                                                              |
| Alle                                                                        |
| Standardtastenkürzel                                                        |
| _Keiner_                                                                    |
| Eingeführt in Version                                                       |
| -                                                                           |
| Siehe auch                                                                  |
| [Std BenutzerBearbeitungsModus](/Std_UserEditMode/de "Std UserEditMode/de") |
|                                                                             |

## Beschreibung

Der Befehl **Std Bewegen** ermöglicht Rotations- und Verschiebungswerte inkrementell auf ein ausgewähltes Objekt anzuwenden. Dies kann entweder durch Ziehen des interaktiven "Draggers" in der 3D-Ansicht (1.0 und davor) oder zusätzlich durch Eingabe präziser Werte im Aufgaben-Dialog erfolgen, entweder im lokalen (Dragger-Position) oder globalen (Dokument-) Koordinatensystem ([eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")). Objekte werden immer um das Koordinatensystem an der Dragger-Position und in der Ausrichtung der 3D-Ansicht bewegt, wobei sich die Ausrichtung des Draggers zum zu bewegenden Objekt nicht verändert.

![](/images/Std_Transform_Manip_Example_1.1.png)

## Einfache Anwendung

1. Ein Objekt mit einer Daten-Eigenschaft**Placement** auswählen. Siehe [Hinweise](#Hinweise).
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Den Menüeintrag **Bearbeiten → ![](/images/Std_TransformManip.svg) Bewegen** auswählen.
   - Die Menüoption **![](/images/Std_TransformManip.svg) Bewegen** im Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") auswählen.
   - Ist der [Bearbeitungsmodus](/Std_UserEditMode/de "Std UserEditMode/de") auf **![](/images/Std_UserEditModeTransform.svg) Transformieren** gesetzt, kann ein Objekt in der Baumansicht doppelt angeklickt werden.
3. Das Aufgaben-Fenster **Transform** wird geöffnet.
4. Wahlweise die Einrastparameter anpassen: Dies sind Werte für die Schrittweiten, auf die der Dragger beim Ziehen in der 3D-Ansicht einrastet, sowohl für Verschiebungen, als auch für Drehungen.
5. Zum Bewegen hat man folgende Möglichkeiten:
   - Die linke Maustaste auf einem Achspfeil drücken und halten, dann ziehen, um das Objekt entlang dieser Achse zu verschieben.
   - Die linke Maustaste auf einem Ebenensymbol drücken und halten, dann ziehen, um das Objekt auf dieser Ebene zu verschieben.
   - Die linke Maustaste auf einem Kugelsymbol drücken und halten, dann ziehen, um das Objekt um die zugehörige Achse zu drehen.
6. Wahlweise die Position des [Draggers](#Dragger) anpassen, das [Koordinatensystem](#Koordinatensystem) umschalten und präzise Werte für lokale (local) bzw. absolute (global) Schrittweiten eingeben oder [das Objekt auf ein Zielobjekt bewegen](#Dienstprogramm). [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de"). Siehe den folgenden Abschnitt [Optionen](#Optionen) für weitere Informationen.
7. Zum Beenden des Befehls hat man folgende Möglichkeiten:
   - Die Schaltfläche OK drücken, um zu bestätigen und zu beenden.
   - Die Schaltfläche Abbrechen drücken, um die ausgeführten Bewegungen rückgängig zu machen und zu beenden. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

## Optionen

Es gibt neue Optionen für dieses Werkzeug ([eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")). Standardmäßig sind die Optionen so eingestellt, dass sie auf die gleiche Weise wie vorher (1.0 und davor) arbeiten.

![](/images/Std_Transform_Manip_relnotes_1.1.gif)

Folgende Optionen können eingestellt werden:

### Dragger

Dieser Abschnitt steuert die Position und Ausrichtung des interaktiven Draggers sowie sein Verhalten in der 3D-Ansicht. Das Objekt wird immer um das aktuelle Koordinatensystem des Draggers bewegt.

#### Modus

Erlaubt die Position und Ausrichtung des Draggers anzupassen und damit den Ursprung der Bewegung.

- **Object origin** (Standardwert): Setzt den Dragger auf den Ursprung des zu bewegenden Objekts.
- **Center of mass / Centroid**: Setzt den Dragger auf den Schwerpunkt (geometrischer Mittelpunkt) des zu bewegenden Objekts, der nur dann dem Massenschwerpunkt entspricht, wenn das Material (überall) gleich und gleichmäßig verteilt ist oder nicht berücksichtigt wird.
- **Custom**: DerDragger Kann auf jedes Element im Dokument eingerastet werden und ist nicht auf das zu bewegende Objekt beschränkt (Flächen, Kanten, Knotenpunkte, Bezugselemente). Die Auswahl _Custom_ erwartet Eingaben des Anwenders, um den Dragger auf eine benutzerdefinierte Position zu setzen. Schweben über Elementen im Dokument zeigt eine Vorschau der neuen Position und Ausrichtung des Draggers; ein Klick auf die Auswahl befestigt den Dragger an dieser Stelle.
  - **Reference** (nur sichtbar im Modus _Custom_): Stellt das Element dar, auf das der Dragger gesetzt ist (Ursprung der Bewegung). Es zeigt _Select face, edge or vertex..._ an, wenn das Werkzeug auf eine Eingabe (Auswahl) des Anwenders wartet.
  - Pick reference / Cancel (nur sichtbar im Modus _Custom_): Wenn eine benutzerdefinierte Position des Draggers festgelegt wurde, ermöglicht Pick reference dem Anwender die Position des Draggers zu ändern und auf ein anderes Element im Dokument einzurasten. Das Objekt kann bewegt werden, die Position des Draggers geändert und das Objekt wieder bewegt werden, alles in einer aktiven Aufgabe. Cancel wird angezeigt, wenn das Bewegungswerkzeug die Eingabe einer neuen Position des Draggers (Auswahl in der 3D-Asicht) vom Anwenders erwartet und bricht das benutzerdefinierte Positionieren des Draggers ab.

#### Einrasten

Schrittweiten für das Einrasten sind Werte, die nur zum Steuern des Verhaltens des interaktiven Draggers in der 3D-Ansicht dienen. Das zu bewegende Objekt rastet auf folgende Schrittweiten ein:

- **Translation**: Längenwert - Schrittweite für das Einrasten beim Verschieben des Objekts in der 3D-Ansicht, sowohl entlang einer Achse als auch auf einer Ebene.
- **Rotation**: Winkelwert - Schrittweite für das Einrasten beim Drehen des Objekts in der 3D-Ansicht um eine beliebige Achse.

Ist die Schrittweite für das Einrasten auf 0 gesetzt, wird das Einrasten während des Ziehens in der 3D-Ansicht deaktiviert.

### Koordinatensystem

Diese Auswahl stellt das Koordinatensystem für die manuelle Eingabe im Aufgaben-Fenster ein. Das Koordinatensystem hat keine Auswirkung, wenn das Bewegen des Objekts ausschließlich durch Ziehen in der 3D-Ansicht erfolgt (außer wenn _Global_ ausgewählt und _align the dragger rotation to the selected coordinate system_ aktiviert wird.)

Die Achsenbezeichnungen werden auch am Dragger in der 3D-Ansicht angezeigt, wobei **U,V,W** für das lokale Koordinatensystem an der aktuellen Position des Draggers steht und **X,Y,Z** für das globale Koordinatensystem (gleich dem Wert für placement im Eigenschafteneditor, wenn sich der Dragger im Ursprung des Objekts befindet).

- **Local** (Standardwert): Die aktuelle Position und Ausrichtung des Draggers legt den Ursprung der Bewegung für die folgenden Eingaben im Aufgaben-Fenster in **U,V,W** fest. Die Eingabe ist gleich dem Unterschied (Delta) zur aktuellen Position des Draggers entlang seiner Achsen.
- **Global**: Das Aufgaben-Fenster zeigt die Werte der globalen Position und Drehung im globalen Koordinatensystem **X,Y,Z** an und ermöglicht die Werte zu ändern. Ist der Dragger-Modus auf _Object origin_ gesetzt, sind die Werte dieselben, wie in der Eigenschaft placement des zu bewegenden Objekts.
  - **Align dragger rotation with selected coordinate system** (Standardwert _FALSE_, steht nur zur Verfügung, wenn das Koordinatensystem nicht das lokale ist): Ändert die Ausrichtung des Draggers so, dass sie den globalen Achsen **X,Y,Z** entspricht. Die Position des Draggers wird durch dieses Kontrollkästchen nicht verändert, nur die Drehung des Draggers. Dies ermöglicht, das Objekt entlang der globalen Achsen (X,Y,Z) zu ziehen, auch wenn der Ursprung (das Bezugssystem) des Objekt anders ausgerichtet ist.

### Verschieben

Längeneingabe zur Änderung der Bewegung des Objekts um den aktuellen Dragger (Ursprung der Bewegung) herum.

- **U, V, W** (Standardeinstellung im Koordinatensystem _local_): Ermöglicht die Eingabe – oder beim Ziehen in der 3D-Ansicht die Anzeige - des Unterschiedes (Delta) zur vorherigen Position des Draggers im lokalen Koordinatensystem (= Position des Draggers). Die Verschiebungswerte in U,V,W werden aufsummiert, solange die Drehung des Draggers (Ausrichtung der Achsen) nicht verändert wird (Weder durch Ziehen in der 3D-Ansicht noch durch die Eingabe von Drehungswerten im Aufgaben-Fenster), der Dragger auf eine neue benutzerdefinierte Position ausgerichtet wird oder die Funktion _Move to other object_ verwendet wird. In diesen Fällen werden die Werte in der Benutzerschnittstelle des Aufgaben-Fensters auf 0 gesetzt, ohne die tatsächliche Verschiebung des Objekts zu verändern.
- **X, Y, Z** (im Koordinatensystem _global_): Ermöglicht die Eingabe – oder beim Ziehen in der 3D-Ansicht die Anzeige - der Werte der aktuellen Position des Draggers im globalen Koordinatensystem X,Y,Z. Ist der Dragger-Modus auf _Object origin_ gesetzt, entsprechen die Werte denen der Eigenschaft placement des zu verschiebenden Objekts, die auch in der Eigenschaften-Ansicht angezeigt werden.

### Drehen

Winkeleingabe zur Änderung der Bewegung des Objekts um den aktuellen Dragger (Ursprung der Bewegung) herum.

- **U, V, W** (Standardeinstellung im Koordinatensystem _local_): Ermöglicht die Eingabe – oder beim Ziehen in der 3D-Ansicht die Anzeige - des Unterschiedes (Delta) zur vorherigen Ausrichtung des Draggers im lokalen Koordinatensystem (= Ausrichtung des Draggers). Die Werte der Drehungen in U,V,W werden aufsummiert, solange die Position des Draggers (Lage der Achsen) nicht verändert wird (Weder durch Ziehen in der 3D-Ansicht noch durch die Eingabe von Verschiebungswerten im Aufgaben-Fenster), der Dragger auf eine neue benutzerdefinierte Position ausgerichtet wird oder die Funktion _Move to other object_ verwendet wird. In diesen Fällen werden die Werte in der Benutzerschnittstelle des Aufgaben-Fensters auf 0 gesetzt, ohne die tatsächliche Ausrichtung des Objekts zu verändern.
- **X, Y, Z** (im Koordinatensystem _global_): Ermöglicht die Eingabe – oder beim Ziehen in der 3D-Ansicht die Anzeige - der Werte der aktuellen Ausrichtung des Draggers im globalen Koordinatensystem als Euler-Winkel um X,Y,Z herum. Ist der Dragger-Modus auf _Object origin_ gesetzt, entsprechen die Werte den Drehwerten der Eigenschaft placement des zu verschiebenden Objekts.

### Dienstprogramme

Schnelle Verfahren zum Bewegen des ausgewählten Objekts.

- Move to other object: Ermöglicht eine Zielposition (ein beliebiges Element im Dokument), auf die das zu bewegende Objekt bewegt (verschoben und ausgerichtet) wird, interaktiv in der 3D-Ansicht an der aktuellen Position des Draggers auszuwählen. Die Schaltfläche wechselt zu Cancel, wenn das Werkzeug eine Eingabe (3D-Auswahl) des Anwenders erwarte **Cancel** bricht dann die Auswahl eines Ziels ab, schließt aber nicht das Bewegungswerkzeug.
- Flip: Dreht die Ausrichtung des zu bewegenden Objekts jeweils 180° um die X- und die Z-Achse. Dies ist hilfreich, wenn nach _Move to other object_ das zu bewegende Objekt das Zielobjekt überschneidet, weil die Koordinaten der Zielposition um 180° gedreht sind.

## Hinweise

- Sobald das Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") verschoben/gedreht wird, werden diese Änderungen übernommen.
- Einige Objekte mit einer Daten-Eigenschaft**Placement**, wie z.B. Skizzen, oder Objekte, die an anderen Objekten befestigt sind, können nicht bewegt werden.
- Es gibt keine Schaltfläche Abbrechen in 0.21 und davor, in diesen Versionen muss man zunächst die Schaltfläche OK drücken und anschließend den Befehl ![](/images/Std_Undo.svg) [Rückgängig](/Std_Undo/de "Std Undo/de") verwenden, um die Änderungen nachträglich rückgängig zu machen.

## Beispiele

### Benutzerdefinierten Dragger auswählen

Ist der Dragger nicht sichtbar oder an einer unerwünschten Position, kann er entweder auf den Massenschwerpunkt oder auf ein beliebiges Element (nicht beschränkt auf das zu bewegende Objekt) im Dokument bewegt werden:

1. Das Werkzeug **Transform** aufrufen.
2. **Dragger → Mode → Custom** auswählen.
3. Ein beliebiges Element in der 3D-Ansicht auswählen.
4. Um den Ursprung des Draggers herum bewegen, entweder Ziehen in der 3D-Ansicht oder durch Ändern der Werte im Aufgaben-Fenster.

Beispielanimation (Bild anklicken, wenn die Animation nicht startet):

![](/images/Std_Transform_Manip_Pick_Custom_Dragger_1.1.gif)

### Formelement auf den globalen Ursprung bewegen

Dies ermöglicht Körper und importierte STEP-Dateien mit Bezug zu besonderen Formelementen im Dokument (z.B. Löchern) zu positionieren:

1. Das Werkzeug **Transform** aufrufen.
2. **Dragger → Mode → Custom** auswählen.
3. Das Element in der 3D-Ansicht auswählen, das positioniert werden soll.
4. **Coordinate system** auf **Global** ändern.
5. Die neue Position eingeben, z.B. 0,0,0, um das zu bewegenden Objekts zu zentrieren, mit der Position des Draggers auf dem globalen Ursprung .

Beispielanimation (Bild anklicken, wenn die Animation nicht startet):

![](/images/Std_Transform_Manip_Move_Feature_to_Global_Origin_1.1.gif)

### Zum Zielobjekt ausrichten

Wenn ein Objekt auf eine Zielposition (Referenz) bewegt werden soll:

1. Das Werkzeug **Transform** aufrufen.
2. **Dragger → Mode → Custom** auswählen.
3. Das Referenzelement in der 3D-Ansicht auswählen.
4. **Utilities → Move to other object** anklicken.
5. Die Zielposition auswählen (Position auf die das zu bewegende Objekt an der aktuelle Position des Draggers ausgerichtet wird).
6. Wahlweise **Flip** anklicken, um die Ausrichtung zu ändern, wenn sich die Objekte überschneiden.

Beispielanimation (Bild anklicken, wenn die Animation nicht startet):

![](/images/Std_Transform_Manip_Align_to_Target_Object_1.1.gif)

### Im globalen Koordinatensystem ziehen, wenn das Objekt nicht ausgerichtet ist

Wenn ein Objekt (importiert oder bewegt) nicht zum globalen Koordinatensystem X, Y, Z ausgerichtet ist, aber durch Ziehen entlang der globalen Achsen verschoben oder um sie herum gedreht werden soll:

1. Das Werkzeug **Transform** aufrufen.
2. Wahlweise den **Mode** des Draggers ändern.
3. Das Referenzelement in der 3D-Ansicht auswählen.
4. **Coordinate system** auf **Global** ändern.
5. Die Option **Align dragger rotation with selected coordinate system** aktivieren.
6. Die Bezeichnungen am Dragger wechseln von U,V,W zu X,Y,Z und sind jetzt zum globalen Koordinatensystem ausgerichtet.

Beispielanimation (Bild anklicken, wenn die Animation nicht startet):

![](/images/Std_Transform_Manip_Drag_in_Document_CS_1.1.gif)

### BIM-Objekte in benutzerdefinierte Richtungen bewegen

Um beispielsweise eine BIM-Tür entlang eines schrägen Wandelements zu verschieben:

1. Das Werkzeug **Transform** aufrufen.
2. **Dragger → Mode → Custom** auswählen.
3. Ein Element auswählen, das in der Zielrichtung ausgerichtet ist.
4. Um den Dragger herum bewegen, entweder durch Ziehen in der 3D-Ansicht oder durch Ändern der Werte im Aufgaben-Fenster.

Beispielanimation (Bild anklicken, wenn die Animation nicht startet):

![](/images/Std_Transform_Manip_BIM_Door_1.1.gif)

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_TransformManip/de&oldid=1535099>"
