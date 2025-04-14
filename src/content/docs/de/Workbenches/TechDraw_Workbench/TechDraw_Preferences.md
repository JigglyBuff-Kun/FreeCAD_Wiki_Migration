---
title: TechDraw Einstellungen
---

## Einführung

Die Einstellungen für den Arbeitsbereich ![](/images/Workbench_TechDraw.svg) [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") findet man im [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de"). Den Menüeintrag **Bearbeiten → Einstellungen...** auswählen und dann **![](/images/Workbench_TechDraw.svg) TechDraw**. Diese Gruppe steht nur dann zur Verfügung, wenn der Arbeitsbereich TechDraw in der aktuellen FreeCAD-Sitzung geladen wurde.

Es gibt sieben Seiten: [Allgemein](#General/de), [Skalieren](#Scale/de), [Maßeinträge](#Dimensions/de), [Beschriftung](#Annotation/de), [Farben](#Colors/de), [Ausblenden verdeckter Kanten (HLR)](#HLR/de) und [Erweitert](#Advanced/de).

Alle Einstellungen mit _kursiven_ Beschriftungen sind Standardwerte für neue Zeichnungsobjekte. Sie haben keinen Einfluss auf bestehende Objekte.

Diese Seite wurde für Version 1.0 aktualisiert.

## Allgemeines

![](/images/Preferences_TechDraw_Page_General.png)

Allgemeine Einstellungen

### Zeichnung Aktualisierung

- **Aktualisierung mit 3D (globale Richtlinie)**: Ob die Seiten bei jeder Änderung des 3D-Modells aktualisiert werden oder nicht.
- **Seitenüberschreibung zulassen (globale Richtlinie)**: Ob die Eigenschaft **[Aktualisiert halten](/TechDraw_PageDefault/de#Eigenschaften "TechDraw PageDefault/de")** einer Seite den globalen Parameter **Aktualisierung mit 3D** überschreiben kann oder nicht.
- **Seite auf dem neuesten Stand halten**: Hält Zeichnungsblätter mit Änderungen des 3D-Modells _in Echtzeit_ synchron. Dies kann die Reaktionszeit verlangsamen.
- **Sekundäransichten automatisch verteilen**: Verteilt automatisch Sekundäransichten für [Projektionsgruppen](/TechDraw_ProjectionGroup/de "TechDraw ProjectionGroup/de").

### Beschriftungen

- **Anmerkungsschriftart**: Der Name der Schriftart für Beschriftungen. Die Schriftart wird auch für neue [Maßeinträge](#Maßeinträge) verwendet; sie zu ändern hat keinen Einfluss auf bestehende Maße
- **Anmerkungsschrifthöhe**: Standardhöhe für Beschriftungen.

### Vorgaben

- **Projektionsmethode**: Ob eine [Ansichtengruppe](/TechDraw_ProjectionGroup/de "TechDraw ProjectionGroup/de") entweder die europäische (first-angle) Projektion oder die amerikanische (third-angle) Projektion verwenden. Siehe [multiview projection](https://en.wikipedia.org/wiki/Multiview_projection#Multiviews) (engl.) (oder [Projektionsmethoden](https://de.wikipedia.org/wiki/Normalprojektion#Ansichten)) für eine Erklärung.
- **Schnittlinienkonvention**: Norm nach der die Pfeile und Symbole platziert werden ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")). Optionen sind:
  - _ANSI_
  - _ISO_

### Dateien

- **Standardvorlage**: Standard-[Vorlagendatei](/TechDraw_Templates/de "TechDraw Templates/de") für neue Seiten.
- **Vorlagenverzeichnis**: Startverzeichnis für Symbolleistenschaltfläche ![](/images/TechDraw_PageTemplate.svg) [Seite unter Verwendung einer Vorlage einfügen](/TechDraw_PageTemplate/de "TechDraw PageTemplate/de").
- **Schraffurmusterdatei**: Standard-[SVG](/SVG/de "SVG/de")- oder [Bitmap](/Bitmap/de "Bitmap/de")-Datei für [Schraffuren](/TechDraw_Hatch/de "TechDraw Hatch/de").
- **Liniegruppendatei** Alternative Datei für persönliche [Liniengruppen](/TechDraw_LineGroup/de "TechDraw LineGroup/de")-Definitionen.
- **Schweißverzeichnis**: Standardverzeichnis für Symbolleistenschaltfläche ![](/images/TechDraw_WeldSymbol.svg) [Schweißinformationen zur Hinweislinie hinzufügen](/TechDraw_WeldSymbol/de "TechDraw WeldSymbol/de").
- **PAT Datei**: Standarddatei zum Festlegen von PAT-Mustern für [geometrische Schraffuren](/TechDraw_GeometricHatch/de "TechDraw GeometricHatch/de").
- **Mustername**: Name des Standard-PAT-Musters.
- **Symbolverzeichnis**: Alternatives Verzeichnis für die Suche nach SVG-Symbol-Dateien.

### Raster

- **Raster anzeigen**: Standardeinstellung der Rasteranzeige für neu erstellten Seiten.
- **Rasterabstand**: Standardabstand zwischen Rasterlinien auf neu erstellten Seiten.

### Auswahl

- **Mehrfachauswahl-Modus aktivieren**: Wenn aktiviert, führt das Klicken ohne Strg nicht zum Löschen der bisherigen Auswahl. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

### View Defaults

- **3D-Kamerarichtung verwenden**: Wenn akktiviert, wird die Richtung der 3D-Kamera (oder die Normale einer ausgewählten Fläche) als Ansichtsrichtung verwendet. Wenn nicht aktiviert, werden Ansichten als Vorderansichten erstellt. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
- **Benennung immer anzeigen**: Wenn aktiviert, werden die Benennungen von Ansichten auch dann angezeigt, wenn die Rahmen unterdrückt werden. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

### Einrasten

- **Snap View Alignment**: If checked, Views will be snapped into alignment when dragged. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- **View Snapping Factor**: Tolerance for snapping of Views - if a View is within this fraction of View size of perfect alignment, it will snap into alignment. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## Maßstab

![](/images/Preferences_TechDraw_Page_Scale.png)

Maßstabseinstellungen

### Maßstab

- **Seitenmaßstab**: Standardmaßstab für neue Zeichnungen.
- **Anzeige Maßstabstyp**: Standardmaßstab für neue Ansichten.
- **Anzeige Benutzerdefinierter Maßstab** : Standardmaßstab für Ansichten, wenn **Anzeige Maßstabstyp** _Benutzerdefiniert_ ist.

### Größenanpassungen

- **Knotenmaßstab**: Größe der [vertex](/Glossary#V "Glossary") Punkte. Multiplikator der Linienbreite.
- **Zentrumsmarkierungsmaßstab**: Größe der Mittenmarkierungen. Multiplikator der Knotengröße.
- **Vorlage Bearbeitungsmarkierung**: Größe des [Vorlagenfelds](/TechDraw_Templates/de "TechDraw Templates/de") klicken gehandhabt in mm (grüne Punkte).
- **Schweißsymbolmaßstab**: Größenmultiplikator [Schweißsymbole](/TechDraw_WeldSymbol/de "TechDraw WeldSymbol/de").

## Maßeinträge

![](/images/Preferences_TechDraw_Page_Dimensions.png)

Einstellungen für Maßeinträge

### Maßeinträge

- **Normbasis und Ausführung von Maßeinträgen**: Die Norm, die für Maßeinträge zu verwenden ist. Die Unterschiede zwischen den Normen sind in der Abbildung dargestellt:

![](/images/TechDraw_Dimension_standardization.png)

Unterschiede zwischen den unterstützten Normen. ([Image source](https://forum.freecadweb.org/viewtopic.php?f=35&t=39571#p336144))

: : `ISO ausgerichtet` (ISO Oriented) - gezeichnet gemäß Norm ISO 129-1, Text ist gedreht, um parallel zu der (Tangente an die) Maßlinie zu sein.
: `ISO mit Hinweislinie` (ISO Referencing) - gezeichnet entsprechend der Norm ISO 129-1, Text ist immer horizontal, über der kürzest möglichen Bezugslinie.
: `ASME eingepasst` (ASME Inlined) - gezeichnet gemäß Norm ASME Y14.5M, Text ist horizontal, eingefügt in einer Lücke der Maßlinie (bzw. des "Maßbogens" bei Winkeln).
: `ASME mit Hinweislinie` (ASME Referencing) - gezeichnet entsprechend der Norm ASME Y14.5M, Text ist horizontal, an einer Seite mittig mit einer kurzen, mit der Maßlinie verbundenen Bezugslinie versehen.

- **Globale Dezimalstellen verwenden**: Verwendet die Anzahl der Dezimalstellen aus dem [Voreinstellungseditor](/Preferences_Editor/de#Einheiten "Preferences Editor/de").
- **Maßeinheiten anzeigen**: Fügt die Maßeinheit (mm, in, etc.) hinter den Maßzahlen hinzu.
- **Dezimalstellen ändern**: Anzahl der Dezimalstellen, wenn **Globale Dezimalstellen verwenden** nicht ausgewählt ist und unter **Maßzahlenformat** nichts angegeben wurde.
- **Maßzahlenformat**: Benutzerdefiniertes Format für Maßzahlen (und -Texte). Verwendet die [printf-Formatierung](https://de.wikipedia.org/wiki/Printf).
- **Schrifthöhe**: Schriftgröße für Maßzahlen und -Texte.
- **Skalierung der Toleranzeinträge**: Schrifthöhenanpassung für Toleranzeinträge. Ein Multiplikator der **Schrifthöhe**.
- **Durchmessersymbol**: Zeichen für die Kennzeichnung von Durchmessermaßen.
- **Pfeildarstellung**: Art der Maßpfeile (Maßlinienbegrenzungen).
- **Pfeillänge**: Größe der Maßpfeile.
- **Extension Gap Factor - ISO**: Lücke zwischen Maßpunkt und Anfang der Maßhilfslinie für ISO-Maße. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
- **Extension Gap Factor - ASME**: Lücke zwischen Maßpunkt und Anfang der Maßhilfslinie für ASME-Maße. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
- **Line Spacing - ISO**: Abstand zwischen der Maßlinie und dem Maßtext für ISO-Maße. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

### Werkzeuge

- **Dimensioning tools**: Select the type of dimensioning tools for the toolbar. Whichever you choose, all tools are always available in the menu and through shortcuts. The options are: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
  - _Single tool_: A [single tool](/TechDraw_Dimension "TechDraw Dimension") for all dimensioning in the toolbar: Distance, Distance X / Y, Angle, Radius. Others in dropdown.
  - _Separated tools_: Individual tools for each dimensioning tool.
  - _Both_: You will have both the 'Single tool' and the separated tools.
- **Dimension tool diameter/radius mode**: While using the [Dimension](/TechDraw_Dimension "TechDraw Dimension") tool you may choose how to handle circles and arcs: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
  - _Auto_: The tool will apply radius to arcs and diameter to circles.
  - _Diameter_: The tool will apply diameter to all.
  - _Radius_: The tool will apply radius to all.

## Anmerkung

![](/images/Preferences_TechDraw_Page_Annotation.png)

Einstellungen für Beschriftungen

### Beschriftung

- **Schnittflächendarstellung**: Kennzeichnungsart für Schnittflächen. Die Optionen sind:
  - _Ausblenden_: Es gibt keine sichtbare Schnittfläche.
  - _Farbfüllung_: Die geschnittene Fläche erhält die für **Schnittfläche** gesetzte Farbe
  - _SVG-Schraffur_: Die Schnittfläche wird [schraffiert](/TechDraw_Hatch/de "TechDraw Hatch/de").
  - _PAT-Schraffur_: Die Oberfläche wird [geometrisch schraffiert](/TechDraw_GeometricHatch/de "TechDraw GeometricHatch/de").
- **Schnittlinien in der Ausgangsansicht anzeugen**: Wenn aktiviert, wird die Beschriftung des Schnittes in der Ausgangsansicht dargestellt. Wenn nicht aktiviert, werden keine Schnittlinie, Pfeile oder Symbole in der Ausgangsansicht angezeigt. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
- **Schnittlinie in die Beschriftung des Schnittes einbeziehen**: Wenn aktiviert, wird die Schnittlinie in der Ausgangsansicht eingezeichnet. Wenn nicht aktiviert, werden nur die Verlaufsänderungen, Pfeile und Symbole angezeigt. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
- **Linienmarkierungen für komplexe Schnittlinien**: Zeigt Markierungen an den Richtungswechseln von Schnitlinien [komplexer Schnitte](/TechDraw_ComplexSection/de "TechDraw ComplexSection/de") an. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
- **Umrissform für Detailansichten**: Form des Detailauswahlrahmens für [Detailansichten](/TechDraw_DetailView/de "TechDraw DetailView/de"). Optionen sind:
  - _Kreis_
  - _Quadrat_
- **Umriss der Detailansicht anzeigen**: Diese Checkbox legt fest, ob die Umrisslinie einer Detailansicht dargestellt wird oder nicht. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
- **Detailquelle Hervorhebung anzeigen**: Diese Checkbox legt fest, ob die Linie für die Detailauswahl in der Basisansicht dargestellt wird oder nicht. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
- **Form des Hinweisfeldes**: Form des [Hinweisfeldes](/TechDraw_Balloon/de "TechDraw Balloon/de").
- **Ende der Linie des Hinweisfeldes**: Standardsymbol für Hinweislinienenden, siehe [Eigenschaften des Hinweisfeldes](/TechDraw_Balloon/de#Eigenschaften "TechDraw Balloon/de").
- **Knicklänge der Linie des Hinweisfeldes**: Länge der Bezugslinie am Knick der Hinweislinie.
- **Hinweisfeldes mit rechtwinkligem Dreieck**: Wenn das **Ende der Linie des Hinweisfeldes** ein _gefülltes Dreieck_ ist, kann das Dreieck nur eine vertikale oder horizontale Ausrichtung erhalten, wenn das Hinweisfeld bewegt wird.
- **Hinweislinie automatisch horizontal**: Legt fest, dass das letzte Segment der [Hinweislinie](/TechDraw_LeaderLine/de "TechDraw LeaderLine/de") (Bezugslinie) horizontal ist.
- **Art der unterbrochenen Ansicht**: Die standardmäßige Unterbrechung, die [Unterbrochene Ansichten](/TechDraw_BrokenView/de "TechDraw BrokenView/de") kennzeichnet: [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
  - _Keine Bruchlinien_
  - _Zickzack-Linien_
  - _Einfache Linien_
- **Mittelpunktsmarkierungen darstellen**: Bogenmittenmarkierungen in Ansichten anzeigen.
- **Mittelpunktsmarkierungen drucken**: Bogenmittenmarkierungen in der Druckausgabe anzeigen.
- **Liniengruppe**: Eine [Liniengruppe](/TechDraw_LineGroup/de "TechDraw LineGroup/de") zum Festlegen der vorgegebenen Strichstärken.
- **Linienart für Detailauswahlrahmen**: Linienart der Detailauswahlrahmen für [Detailansichten](/TechDraw_DetailView/de "TechDraw DetailView/de").
- **Mittelliniendarstellung**: Linienart für [Mittellinien](/TechDraw_FaceCenterLine/de "TechDraw FaceCenterLine/de").

### Linien

- **Liniennorm**: Norm nach der Schnittlinien einer [Schnittansicht](/TechDraw_SectionView/de "TechDraw SectionView/de") erstellt werden.
- **Liniengruppe**: Eine [Liniengruppe](/TechDraw_LineGroup/de "TechDraw LineGroup/de") wird zum Einstellen der vorgegebenen Linienbreitenverwendet.
- **Darstellung verdeckter Kanten**: Linienart für verdeckte Kanten. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
- **Schnittliniendarstellung**: Linienart für Schnittlinien.
- **Linienart für Detailauswahlrahmen**: Linienart für die Umrissform der [Detailansichten](/TechDraw_DetailView/de "TechDraw DetailView/de").
- **Mittelliniendarstellung**: Standard-Linienart für [Mittellinien](/TechDraw_FaceCenterLine/de "TechDraw FaceCenterLine/de").
- **Linienart für Bruchkanten**: Standard-Linienart zum Kennzeichnen von [unterbrochenen Ansichten](/TechDraw_BrokenView/de "TechDraw BrokenView/de"). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
- **Form der Linienenden**: Der Standardwert (Rund) sollte in den meisten Fällen die richtige Wahl sein. Flach oder Quadrat sind nützlich, wenn eine Zeichnung als 1:1 Schablone (? cutting guide) verwendet werden soll.

## Farben

![](/images/Preferences_TechDraw_Page_Colors.png)

Farbeinstellungen

Einstellung der Standardfarben für neue Zeichnungsblätter:

- **Normal**: Normale Linienfarbe.
- **Vorausgewählt**: Vorausgewählte Farbe. Die Farbe, die verwendet wird, um Objekte hervorzuheben, wenn die Maus darüber bewegt wird.
- **Ausgewählt**: Farbe für ausgewählte Objekte.
- **Hintergrund**: Hintergrundfarbe um Zeichnungsblätter herum.
- **Maßeintrag**: Farbe der Linien und Texte für Maßeinträge.
- **Mittellinie**: Farbe für [Mittellinien](/TechDraw_FaceCenterLine/de "TechDraw FaceCenterLine/de").
- **Detailauswahl**: Linienfarbe für die Umrissform von [Detailansichten](/TechDraw_DetailView/de "TechDraw DetailView/de").
- **Rasterfarbe**: Farbe für alle Seitenraster.
- **Vorlagenunterstrich**: Farbe für den Unterstrich, der in einer Vorlage die editierbaren Texte kennzeichnet.[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
- **Verdeckte Kante**: Farbe der verdeckten Linie. Diese Farbe wird für alle Arten von [Verdeckten Linien](#HLR) verwendet.
- **Schnittfläche**: Farbe für Schnittflächen in [Schnittansichten](/TechDraw_SectionView/de "TechDraw SectionView/de"). Wird nur verwendet, wenn die Einstellung **Schnittflächendarstellung** auf _Farbfüllung_ gesetzt ist.
- **Schnittlinie**: Farbe der Schnittlinie einer [Schnittansicht](/TechDraw_SectionView/de "TechDraw SectionView/de").
- **Schraffur**: Farbe für [Schraffuren](/TechDraw_Hatch/de "TechDraw Hatch/de").
- **Geometrische Schraffur**: Farbe für [geometrische Schraffurmuster](/TechDraw_GeometricHatch/de "TechDraw GeometricHatch/de").
- **Knoten**: Farbe der auswählbaren [Knoten](/Glossary/de#V "Glossary/de") in Ansichten.
- **Hinweislinie**: Farbe für neue [Hinweislinien](/TechDraw_LeaderLine/de "TechDraw LeaderLine/de").
- **Transparente Flächen**: Wenn angehakt, sind die Objektflächen transparent. Andernfalls wird die eingestellte Farbe für Flächen verwendet.
- **Hell auf dunkel**: Wenn aktiviert, erhalten Texte und Linien eine helle Farbe. Wird verwendet, wenn die "Blattfarbe" dunkel ist. Transparente oder hell eingefärbte Flächen werden für diese Option empfohlen. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
- **Einfarbig**: Wenn aktiviert, wird die eingestellte Farbe für alle Texte und Linien verwendet. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
- **Blattfarbe**: Die Hintergrundfarbe des Zeichenblattes. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

## HLR

![](/images/Preferences_TechDraw_Page_HLR.png)

HLR-Einstellungen

HLR steht für _Entfernen verdeckter Linien_ (engl.: hidden line removal).

- **Polygon Approximation verwenden**: Verwendet eine Approximation, um verborgene Linien zu finden. Dies geht schnell, aber das Ergebnis ist eine Sammlung kurzer gerader Linien.
- **Zeige harte Linien**: Zeigt harte und Umrisskanten an (sichtbare Linien werden immer angezeigt)
- **Glatte Linien anzeigen**: Zeigt glatte Linien an. Eine glatte Linie ist eine Linie, die einen Wechsel zwischen tangentialen Flächen anzeigt, wie beim Übergang von einer ebenen Fläche zu einer [Verrundung](<https://en.wikipedia.org/wiki/Fillet_(mechanics)>).
- **Nahtlinien anzeigen**: Nahtlinien anzeigen. Eine Nahtlinie ist eine Grenzlinie zwischen Flächen.
- **Zeige UV ISO Linien**: Zeigt ISO Linien. ISO steht für _isoparametrisch_. [Hier ist eine Beschreibung](https://knowledge.autodesk.com/support/alias-products/learn-explore/caas/CloudHelp/cloudhelp/2014/ENU/Alias/files/GUID-4CCDF144-DB4F-4BEB-BA5A-E69CED27F4B9-htm.html), was isoparametrische Linien (in Wirklichkeit Kurven) sind.
- **ISO Anzahl'**: Die Anzahl der ISO-Linien pro Flächenkante.

## Erweitert

![](/images/Preferences_TechDraw_Page_Advanced.png)

Erweiterte Einstellungen

- **Flächen erkennen**: Wenn angehakt, versucht TechDraw, Flächen unter Verwendung der Liniensegmente zu erzeugen, die vom Algorithmus zum Entfernen verdeckter Linien zurückgegeben werden. Flächen müssen erkannt werden, um [Schraffieren](/TechDraw_Hatching/de "TechDraw Hatching/de") verwenden zu können, aber bei komplexen Modellen kann es zu Leistungseinbußen kommen.
- **Fortschritt berichten**: Gibt Fortschrittsmeldungen aus, während die darzustellende Geometrie berechnet wird. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
- '_Neuen Flächenfinder-Algorithmus verwenden_: Wenn aktiviert, wird der neue Flächenfinder-Algorithmus verwendet, anstatt des originalen. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
- **Automatische Korrektur der Maßreferenzen**: Wenn aktiviert, wird versucht Maßreferenzen zu aktualisieren, wenn sich das Modell ändert. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
- **Schnittkanten zeigen**: Hebt den Rand des ausgeschnittenen Abschnitts in [Schnittansichten](/TechDraw_SectionView/de "TechDraw SectionView/de") hervor.
- **Verbinden vor Schnitterzeugung**: Führt eine Vereinigungsoperation an der bzw. den Eingangsform(en) durch, bevor die Schnittansicht berechnet wird.
- **Durch klicken den Arbeitsbereich wechseln**: Wenn aktiviert, wird, sobald ein Doppelklick auf ein Zeichnungsblatt (Page-Objekt) erfolgt, zu TechDraw gewechselt und das Blatt wird angezeigt. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")
- **Unübliche Kanten erlauben**: Schließt Kanten mit unerwarteter Geometrie in die Ergebnisse ein, z.B. Nulllängen.
- **Formen validieren**: Wenn aktiviert, werden Eingabeformen auf Fehler überprüft, bevor sie verwendet werden, und ungültige Formen werden ausgelassen. Es kann langsamer sein, sollte aber Abstürze verhindern. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")
- **Fehlersuche und -bereinigung Schnittansicht**: Gibt Zwischenergebnisse während der Verarbeitung einer Schnittansicht aus.
- **Debug Bad Shape**: Wenn aktiviert, werden Formen, die bei der Überprüfung durchgefallen sind, für eine spätere Analyse als brep-Daten gespeichert. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")
- **Fehlersuche und -bereinigung Detailansicht**: Gibt Zwischenergebnisse während der Verarbeitung einer Detailansicht aus.
- **Schruppdurchgänge für überlappende Kanten**: Die Anzahl der Versuche zum Entfernen von überlappenden Kanten, die vom Hidden-Line-Removal-Algorithmus zurückgegeben werden. Ein Wert von 0 bedeutet kein Schruppen. Werte über 2 sind im Allgemeinen nicht sinnvoll. Jeder Versuch trägt zur benötigten Zeit für die Erstellung der Zeichnung bei. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
- **Auswahlbereich für Kanten**: Größe des Auswahlbereichs um Kanten herum. Die Unschärfeeinheit ist ungefähr 0.1 mm, abhängig vom aktuellen Zoom. Der Standardwert ist 10. Werte von 20 bis 30 erleichtern die Auswahl von Kanten deutlich. Große Werte führen zu Überlappungen mit anderen Zeichnungselementen.
- **Fangbereich für Mittelpunktsmarkierungen**: Auswahlbereich um Mittenmarkierungen herum. Die Unschärfeeinheit ist ungefähr 0.1 mm, abhängig vom aktuellen Zoom.
- **Max. SVG-Schraffur-Felder**: Die maximale Anzahl (Limit) von SVG-Kacheln mit einer Größe von 64x64 Pixeln, die zum Schraffieren einer einzelnen Fläche verwendet werden. Bei großen Maßstäben könnte man einen Fehler wegen zu vieler SVG-Kacheln erhalten, dann muss man das Kachellimit erhöhen.
- **Max. PAT-Schraffur-Segmente**: Die maximale Anzahl von Schraffursegmenten, die beim Schraffieren einer Fläche mit einem PAT-Muster verwendet werden.
- **Balloon Drag**: Die Modifikatortaste für Balloon-Drag kann angepasst werden, um Konflikte mit dem Betriebssystem oder der Tastenzuordnungen der Navigationsart zu verhindern. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Preferences/de&oldid=1516786>"
