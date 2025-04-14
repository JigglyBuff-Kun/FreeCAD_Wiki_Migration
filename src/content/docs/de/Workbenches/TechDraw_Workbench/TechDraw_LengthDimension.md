---
title: TechDraw Längenmaß
---

|                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| TechDraw Längenmaß                                                                                                                                                                   |
| Menüeintrag                                                                                                                                                                          |
| TechDraw → Maßeinträge → Längenmaß einfügen                                                                                                                                          |
| Arbeitsbereich                                                                                                                                                                       |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                                                                           |
| Standardtastenkürzel                                                                                                                                                                 |
| _Keiner_                                                                                                                                                                             |
| Eingeführt in Version                                                                                                                                                                |
| -                                                                                                                                                                                    |
| Siehe auch                                                                                                                                                                           |
| [TechDraw MaßHorizontal](/TechDraw_HorizontalDimension/de "TechDraw HorizontalDimension/de"), [TechDraw MaßVertikal](/TechDraw_VerticalDimension/de "TechDraw VerticalDimension/de") |
|                                                                                                                                                                                      |

## Beschreibung

Das Werkzeug **TechDraw Längenmaß** fügt einer Ansicht ein lineares Maß hinzu. Das Längenmaß kann der Abstand zwischen zwei Punkten, die Länge einer geraden Kante, der senkrechte Abstand zweier Kanten oder der senkrechte Abstand eines Punkte zu einer Kanten sein.

![](/images/TechDraw_Dimension_Length_example.png)

Längenmaß, zwischen zwei Punkten gemssen

## Anwendung

1. Die Punkte und/oder die Kanten auswählen, die das Maß definieren. Die Geometrie kann in der [3D-Ansicht](/3D_view/de "3D view/de") ausgewählt werden (die ersten beiden Möglichkeiten) oder in der Zeichnung (alle Möglichkeiten):
   - Zwei Punkte auswählen.
   - Eine einzelne gerade Kante auswählen.
   - Zwei Kanten auswählen. Sind beide Kanten gerade, müssen sie parallel verlaufen. Dies erstellt ein senkrechtes Maß, wenn ein Endpunkt einer Kante senkrecht auf die andere Kante projiziert werden kann (der resultierende Punkt muss wirklich auf der Linie liegen). Sind mehrere Lösungen möglich, wird der Endpunkt verwendet, der sich am nächsten an seinem projizierten Punkt befindet. Gibt es keine gültige senkrechte Projektion, zeigt das Maß den Abstand zwischen den am nächsten zusammenligenden Endpunkten der Kanten an.
   - Einen Punkt und eine Kante auswählen. Dies erstellt ein senkrechtes Maß. In 0.21 und davor ergibt sich nur dann senkrechte Maß, wenn der Punkt senkrecht auf die Kante projiziert werden kann. Andernfalls zeigt das Maß den Abstand des Punktes zum nächstgelegenen Endpunkt der Kante an.
2. Wurde Geometrie in der 3D-Ansicht ausgewählt, muss die korrekte TechDraw-Ansicht durch Auswählen in der [Baumansicht](/Tree_view/de "Tree view/de") zur Auswahl hinzugefügt werden.
3. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ist die [Einstellung](/TechDraw_Preferences/de#Maßeinträge "TechDraw Preferences/de") **Maß-Werkzeuge** auf `Einzelnes Werkzeug` (Standardeinstellung) gesetzt: Den Nach-unten-Pfeil rechts neben der Schaltfläche ![](/images/TechDraw_Dimension.svg) ![](/images/Toolbar_flyout_arrow.svg) drücken und die Menüoption **![](/images/TechDraw_LengthDimension.svg) Längenmaß einfügen** in der Ausklappliste auswählen.
   - Hat die Einstellung einen anderen Wert (und in 0.21 und davor): Die Schaltfläche ![](/images/TechDraw_LengthDimension.svg) Längenmaß einfügen drücken.
   - Den Menüeintrag **TechDraw → Maßeinträge → ![](/images/TechDraw_LengthDimension.svg) Längenmaß einfügen** auswählen.
4. Ein Maß wird zur Ansicht hinzugefügt.
5. Das Maß kann an die gewünschte Position gezogen werden.
6. Falls erforderlich, können Toleranzen, wie auf der [GD&T-Seite](/TechDraw_Geometric_dimensioning_and_tolerancing/de#Toleranzen "TechDraw Geometric dimensioning and tolerancing/de") beschrieben, hinzugefügt werden.

### 3D-Abmessungen anzeigen

Das Maß zeigt anfangs die projizierte Länge an (d.h. wie auf der Zeichnung dargestellt). Wenn gefordert und wenn das Maß auf 3D-Referenzen basiert, kann es auf die Anzeige der wahren 3D-Länge umgestellt werden, indem seine Daten-Eigenschaft**Measure Type** auf `True` gesetzt wird. Damit ein Maß auf 3D-Referenzen basiert, wird bei seiner Erstellung die Geometrie in der [3D-Ansicht](/3D_view/de "3D view/de") ausgewählt oder es wird das Werkzeug ![](/images/TechDraw_DimensionRepair.svg) [TechDraw Maßreparatur](/TechDraw_DimensionRepair/de "TechDraw DimensionRepair/de") zur Aktualisierung vorhandener Maße verwendet.

### Eigenschaften anpassen

Um die Eigenschaften eines Maßes (Dimension-Objekt) zu ändern, wird es in der Zeichnung oder in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt angeklickt. Dadurch wird der [Dialog Maßeintrag](#Dialog_Maßeintrag) geöffnet.

## Dialog Maßeintrag

![](/images/TechDraw_DimensionDialog.png)

Der Dialog Maßeintrag ermöglicht die folgenden Einstellungen:

### Toleranzen

- **Theoretisch genau**: Wenn diese Option aktiviert ist, wird das Maß als theoretisch genaues Maß angegeben. Als solches darf es keine Toleranzen aufweisen. Das Maß wird durch einen Rahmen um den Wert dargestellt: ![](/images/TechDraw_theoretically_exact.png)

- **Symmetrische Toleranz**: Falls aktiviert, sind das obere und das untere Abmaß gleich und der negierte Wert des oberen Abmaßes wird für das untere Abmaß benutzt. Dargestellt wird es ![](/images/TechDraw_equal-tolerance.png), anderenfalls ![](/images/TechDraw_Non-equal-tolerance.png).

- **Oberes Abmaß**: Der Wert, um den die Abmessung größer sein darf.

- **Unteres Abmaß**: Der Wert, um den die Abmessung kleiner sein darf.

### Formatierung

- **Formatspezifizierer**: Wie die Maßzahl formatiert werden soll. Standardspezifizierer ist `%.xf`, wobei `x` die Anzahl der Dezimalstellen angibt. Details zur Formatierungssyntax findet man unter [printf format string](https://en.wikipedia.org/wiki/Printf_format_string) (engl.). Es gibt noch ein zusätzliches `%w` Format, das die festgelegte Anzahl von Ziffern nach dem Dezimaltrennzeichen ausgibt und die am Ende stehenden Nullen entfernt. Zum Beispiel heißt `%.2w`, dass höchstens 2 Dezimalstellen ausgegeben und alle Nullen am Ende abgeschnitten werden.

- **Beliebiger Text**: Falls aktiviert, wird die Bemaßung durch den Inhalt des **Formatspezifizierer**-Feldes ersetzt.

- **Formatspezifizierer für das obere Abmaß**: Wie das obere Abmaß formatiert werden soll. Standardspezifizierer ist `%.xf`, wobei `x` die Anzahl der Dezimalstellen angibt. Details zur Formatierungssyntax findet man unter [printf format string](https://en.wikipedia.org/wiki/Printf_format_string) (engl.).

- **Formatspezifizierer für das untere Abmaß**: Wie das untere Abmaß formatiert werden soll. Standardspezifizierer ist `%.xf`, wobei `x` die Anzahl der Dezimalstellen angibt. Details zur Formatierungssyntax findet man unter [printf format string](https://en.wikipedia.org/wiki/Printf_format_string) (engl.).

- **Beliebiger Toleranztext**: Falls aktiviert, werden die Toleranzen durch den Inhalt der **Übertoleranz Formatspezifizierer**- und **Untertoleranz Formatspezifizierer**-Felder ersetzt.

### Anzeigeformat

- **Maßpfeile umdrehen**: Dreht die Richtung um, in die die Bemaßungspfeile zeigen. Als Vorgabe sind sie innerhalb der/des Bemaßungslinie/-bogens und zeigen nach außen.

- **Farbe**: Die Farbe für Linien und Texte.

- **Schrifthöhe**: Die Größe des Bemaßungstextes.

- **Zeichnungsstil**: Gibt den Standard (und dessen Stil) an, nach dem die Bemaßung gezeichnet wird. Siehe die Eigenschaft [**Standard und Stil**](#View) für Einzelheiten.

### Linien

- **Winkel überschreiben**: Wenn angehakt, werden die gewöhnlichen Winkel für Maßlinie und Maßhilfslinie durch die angegebenen Werte überschrieben.

- **Maßlinienwinkel**: Vorgabewert für den Winkel zwischen Maßlinie und der X-Achse der Ansich (in Grad).

- **Standardwert verwenden**: Setzt den Maßlinienwinkel auf den üblichen Winkel.

- **Auswahl verwenden**: Setzt den Maßlinienwinkel entsprechend dem Winkel der ausgewählten Kante (oder der 2 Knotenpunkte) in der Ansicht.

- **Maßhilfslinienwinkel**: Vorgabewert für den Winkel zwischen Maßhilfslinie und der X-Achse der Ansicht (in Grad).

- **Standardwert verwenden**: Setzt den Maßhilfslinienwinkel auf den üblichen Winkel.

- **Auswahl verwenden**: Setzt den Maßhilfslinienwinkel entsprechend dem Winkel der ausgewählten Kante (oder der 2 Knotenpunkte) in der Ansicht.

## Begrenzungen

Dimension-Objekte (Maße) sind anfällig für das "[Topological-Naming-Problem](/Topological_naming_problem/de "Topological naming problem/de")" (Problem der topologischen Benennung). Das bedeutet, dass bei einer Änderung der 3D-Geometrie die Flächen und Kanten des Modells intern umbenannt werden könnten. Wenn ein Maß an eine Kante angehängt wird, die dann geändert wird, kann das Maß unbrauchbar werden. Im Allgemeinen ist es nicht möglich, die projizierten 2D-Maße mit den tatsächlichen 3D-Objekten synchronisiert zu halten.

Es wird daher empfohlen, Maße hinzuzufügen, wenn das 3D-Modell nicht mehr verändert wird.

### Zwischenlösung

Soll eine TechDraw-Ansicht erstellt werden, mit Maßen, die nicht unbrauchbar werden, musst ein Objekt bemaßt werden, das sich nicht ändert:

- Eine nicht parametrische Kopie des Objekts erstellen, die mit [Part EinfacheKopie](/Part_SimpleCopy/de "Part SimpleCopy/de") projiziert werden soll.
- Diese Kopie auswählen, dann [TechDraw Ansicht](/TechDraw_View/de "TechDraw View/de") verwenden und die gewünschten Maße hinzufügen.
- Wenn das ursprüngliche 3D-Modell geändert wird, wirken sich die Änderungen weder auf die einfache Kopie noch auf die Maße in der TechDraw-Ansicht aus.

Siehe [Leitbemaßungen](/TechDraw_LandmarkDimension/de "TechDraw LandmarkDimension/de") für einen weiteren Ansatz zur Umgehung des Problems der topologischen Benennung.

## Hinweise

- **Kantenauswahl**. Die Auswahl von Kanten kann schwierig sein. Der Auswahlbereich für Kanten kann durch Ändern der Einstellung [Auswahlbereich für Kanten](/TechDraw_Preferences/de#Erweitert "TechDraw Preferences/de") angepasst werden.
- **Nachkommastellen**. Maße verwenden standardmäßig die globale Einstellung der Dezimalstellen. Diese kann in den [Einstellungen](/TechDraw_Preferences/de#Bemaßungen "TechDraw Preferences/de") oder durch Ändern der Eigenschaft FormatSpec geändert werden.
- **Mehrere Objekte**. Ansichten können mehrere 3D-Objekte als Quelle enthalten. Maße können zwischen Geometrien verschiedener Objekte der Ansicht erstellt werden (z.B. von Object1.Vertex0 bis Object2.Vertex3).

## Eigenschaften

### Daten

Basis

- Daten-Eigenschaft**References 2D** (`LinkSubList`): 2D-Objekt(e) der Zeichnungsansicht, auf denen das Maß basiert. Wird verwendet, wenn die Daten-Eigenschaft**Measure Type** auf `Projected` gesetzt ist.
- Daten-Eigenschaft**References 3D** (`LinkSubList`): 3D Objekt(e) auf denen das Maß basiert. Wird verwendet, wenn die Daten-Eigenschaft**Measure Type** auf `True` gesetzt ist.
- Daten-Eigenschaft**Type** (`Enumeration`): Länge, Radius, Durchmesser usw. Wird normalerweise nicht vom Endanwender geändert.
- Daten-Eigenschaft**MeasureType** (`Enumeration`): Wie die Messung durchgeführt wird.

: : `True` - basierend auf 3D-Geometrie
: `Projected` - basierend auf 2D-Geometrie der Zeichnungsansicht.

- Daten-Eigenschaft**Theoretical Exact** (`Bool`): Gibt ein theoretisch genaues Maß (Nennmaß ohne Toleranzen) an.

: : `false` - standardmäßig ein normales Maß, eventuell mit Toleranzen.
: `true` - ein theoretischer Wert. Als solcher darf er keine Toleranzen aufweisen. Der Wert ist durch einen rechteckigen Rahmen um die Maßzahl gekennzeichnet.

- Daten-Eigenschaft**Equal Tolerance** (`Bool`) (Symmetrische Toleranz): Falls oberes und unteres Abmaß gleich sind, wird der negative Wert des oberen Abmaßes als unteres Abmaß benutzt.

: : `true` - der negierte Wert von Daten-Eigenschaft**Over Tolerance** (oberes Abmaß) wird als Daten-Eigenschaft**Under Tolerance** (unteres Abmaß) benutzt. Die Anzeige zeigt ![](/images/TechDraw_equal-tolerance.png).
: `false` - der Wert von Daten-Eigenschaft**Under Tolerance** wird benutzt. Die Anzeige zeigt ![](/images/TechDraw_Non-equal-tolerance.png).

- Daten-Eigenschaft**Over Tolerance** (`QuantityConstraint`) (oberes Abmaß): Der Betrag, um den das Maß größer sein darf.
- Daten-Eigenschaft**Under Tolerance** (`QuantityConstraint`) (unteres Abmaß): Der Betrag, um den das Maß kleiner sein darf.
- Daten-Eigenschaft**Inverted** (`Bool`): Gibt an, ob das Maß einen üblichen oder einen invertierten Wert darstellt.

: : `false` - der gewöhnliche Wert wird verwendet. Für Länge ist es eine positive Zahl, für Winkel der schräggestellte Wert (0° - 180°).
: `true` - der umgekehrte Wert wird verwendet. Für Länge eine negative Zahl, für Winkel der Reflexwert (180° - 360°).

- Daten-Eigenschaft**X**: Horizontale Position des Maßtexts relativ zur Ansicht.
- Daten-Eigenschaft**Y**: Vertikale Position des Maßtexts relativ zur Ansicht.
- Daten-Eigenschaft (versteckt)**Lock Position** (`Bool`): Wenn `true`, wird die Position des Maßtextes fixiert.
- Daten-Eigenschaft (versteckt)**Rotation** (`Angle`): Schreibgeschützt.
- Daten-Eigenschaft (versteckt)**Scale Type** (`Enumeration`): Schreibgeschützt.
- Daten-Eigenschaft (versteckt)**Scale** (`FloatConstant`): Schreibgeschützt.
- Daten-Eigenschaft (versteckt)**Caption** (`String`): Nicht verwendet.

Format

- Daten-Eigenschaft**Format Spec** (`String`): Wie die Maßzahl formatiert sein wird. Siehe [Formatierung](#Formatierung).
- Daten-Eigenschaft**Format Spec Over Tolerance** (`String`): Wie Daten-Eigenschaft**Format Spec**, aber für obere Abmaße.
- Daten-Eigenschaft**Format Spec Under Tolerance** (`String`): Wie Daten-Eigenschaft**Format Spec**, aber für untere Abmaße.
- Daten-Eigenschaft**Arbitrary** (`Bool`): Gibt an, ob die Maßzahl durch den Inhalt von **Format Spec** ersetzt wird.

: : `false` - der Inhalt von **Format Spec** wird zur Formatierung der Maßzahl verwendet.
: `true` - der Inhalt von **Format Spec** wird anstatt der Maßzahl als Text angezeigt.

- Daten-Eigenschaft**Arbitrary Tolerances** (`Bool`): Wie Daten-Eigenschaft**Arbitrary**, aber für die Toleranz.

Override

- Daten-Eigenschaft**Angle Override** (`Bool`): Gibt an, ob die Richtung der Maßlinien und Maßhilfslinien überschrieben wird.

: : `false` - die Richtungen werden wie üblich berechnet.
: `true` - die Richtungen werden mit den Werten der Eigenschaften Line Angle und Extension Angle überschrieben.

- Daten-Eigenschaft**Line Angle** (`Angle`): Winkel zwischen Maßlinie und der X-Achse der Ansicht (in Grad).
- Daten-Eigenschaft**Extension Angle** (`Angle`): Winkel zwischen Maßlinie(n) und der X-Achse der Ansicht (in Grad).

References

- Daten-Eigenschaft (versteckt)**Saved Geometry** (`TopoShapeList`): Referenzgeometrie. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

### Ansicht

Basis

- Ansicht-Eigenschaft**Keep Label** (`Bool`): Nicht verwendet.
- Ansicht-Eigenschaft**Stack Order** (`Integer`): Angabe der Lage über oder unter anderen Zeichnungsobjekten. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

Dimension Format

- Ansicht-Eigenschaft**Arrowsize** (`Length`): Die Größe der Maßpfeile. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
- Ansicht-Eigenschaft**Color** (Farbe): Farbe für Linien und Text.
- Ansicht-Eigenschaft**Flip Arrowheads** (Pfeilspitzen umkehren): Standardmäßig zeigen bei _innerhalb_ der Maßlinie/des Bogens plazierten Maßzahlen die Maßpfeile _nach außen_. Wird die Maßzahl _außerhalb_ der Maßlinie/des Bogens platziert, zeigen die Maßpfeile _nach innen_.

: : `false` - Wählt die Richtung der Maßpfeile automatisch nach der obigen Regel aus.
: `true` - Dreht die automatisch gewählte Richtung um.

- Ansicht-Eigenschaft**Font** (`Font`): Der Name der Schriftart für die Maßeinträge.
- Ansicht-Eigenschaft**Fontsize** (`Length`) (Schrifthöhe): Höhe des Maßtextes.
- Ansicht-Eigenschaft**Gap Factor ASME** (`Float`) (Lückenfaktor ASME): Legt die Weite der Lücke zwischen Geometrie und Anfang der Maßhilfslinie fest. Dieser Wert mal der Linienbreite (Line Width) ergibt die Weite der Lücke. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
- Ansicht-Eigenschaft**Gap Factor ISO** (`Float`) (Lückenfaktor ISO): Legt die Weite der Lücke zwischen Geometrie und Anfang der Maßhilfslinie fest. Dieser Wert mal der Linienbreite (Line Width) ergibt die Weite der Lücke. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
- Ansicht-Eigenschaft**Line Spacing Factor** (`Float`) (Abstandsfaktor): Stellt den Abstand zwischen Maßzahl und Maßlinie ein. Der Abstand ergibt sich aus diesem Wert mal der Linienbreite. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
- Ansicht-Eigenschaft**Line Width** (Linienbreite): Maßlinienstärke.
- Ansicht-Eigenschaft**Rendering Extent** (Darstellungsergänzung): Eher universelle Eigenschaft, die angibt, wie viel Platz ein Maßeintrag einnehmen darf:

: : `None` - Es werden keine Linien oder Pfeile gezeichnet, sondern nur die nackte Maßzahl dargestellt.
: `Minimal` - Für Längen und Winkel wird eine Hinweislinie (einseitige Maßlinienbegrenzung) gezeichnet, die die Maßzahl mit einer _virtuellen Maßhilfslinie_ verbindet. Die Maßhilfslinie selbst wird nicht hinzugefügt.
: Durchmesser werden mit `Confined`-Ergänzung, Radien mit `Reduced`-Ergänzung dargestellt.
: `Confined` - Für Längen und Winkel wird eine Maßlinie (gerade, oder Bogen) mit beidseitigen Maßlinienbegrenzungen dargestellt, die die _virtuellen Maßhilfslinien_ des Start- und Endpunktes verbindet, wobei die Maßhilfslinien selbst nicht hinzugefügt werden.
: Durchmesser werden mit einer Maßlinie mit mindestens einer Maßlinienbegrenzung von der Maßzahl zum nächsten Punkt auf dem Kreis gezeichnet, Radien wie bei der `Reduced<` -Ergänzung.
: `Reduced` - Für Längen und Winkel wird eine Hinweislinie (einseitige Maßlinienbegrenzung) gezeichnet, die die Maßzahl mit der ebenfalls gezeichneten Maßhilfslinie verbindet.
: Durchmesser werden mit einer Hinweislinie (einseitige Maßlinienbegrenzung) von der Maßzahl zum nächsten Punkt auf dem Kreis, Radien mit einer Maßlinie mit mindestens einer Maßlinienbegrenzung von der Maßzahl zum nächsten Punkt auf dem Kreis gezeichnet.
: `Normal` - Der Standardwert. Für Längen und Winkel wird eine Maßlinie (gerade, oder Bogen) mit beidseitigen Maßlinienbegrenzungen dargestellt, die die Maßhilfslinien verbindet, und die Maßhilfslinien selbst auch.
: Durchmesser werden mit einer Maßlinie mit beidseitigen Maßlinienbegrenzungen dargestellt, die über den Mittelpunkt verlaufen und zwei Punkte auf dem Kreis verbinden.
: Radien werden mit einer Hinweislinie (einseitige Maßlinienbegrenzung) vom Mittelpunkt zum nächsten Punkt auf dem Kreisbogen gezeichnet.
: `Expanded` - Nur Durchmesser unterstützen diesen Wert, so dass sie horizontalen oder vertikalen Längenmaßen ähnlich dargestellt werden. Andere Maßarten werden wie bei der `Normal`-Ergänzung dargestellt.

- Ansicht-Eigenschaft**Standard And Style** (`Enumeration`) (Standard und Stil): Gibt die Norm (und deren Ausführungsart) an, nach der Maßeingeträge erfolgen:

: : ![Unterschiede zwischen den unterstützten Normen](/images/TechDraw_Dimension_standardization.png)
: `ISO Oriented` - Darstellung nach ISO 129-1; Text wird so gedreht, dass er parallel zur Tangente an die Maßlinie liegt.
: `ISO Referencing` - Darstellung nach ISO 129-2; der Text steht immer horizontal, oberhalb einer kürzest möglichen Bezugslinie.
: `ASME Inlined` - Darstellung nach ASME Y14.5M, der Text steht horizontal, in einem Ausbruch innerhalb der Maßlinie oder des Bogens eingefügt.
: `ASME Referencing` - Darstellung nach ASME Y14.5M, der Text steht horizontal, mittig am Ende einer Bezugslinie.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Längenmaß kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen verwendet werden:

```
dim1 = FreeCAD.ActiveDocument.addObject("TechDraw::DrawViewDimension", "Dimension")
dim1.Type = "Distance"
dim1.References2D=[(view1, "Edge1")]
page.addView(dim1)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_LengthDimension/de&oldid=1551506>"
