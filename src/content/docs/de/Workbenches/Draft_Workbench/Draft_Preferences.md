---
title: Draft Einstellungen
---
## Einleitung

Die Einstellungen für den Arbeitsbereich ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench "Draft Workbench") findet man im [Voreinstellungseditor](/Preferences_Editor "Preferences Editor"). Im Menü wählt man **Bearbeiten → Einstellungen...** und dann **![](/images/Workbench_Draft.svg) Draft**. Diese Gruppe steht nur dann zur Verfügung, wenn der Arbeitsbereich Draft in der aktuellen FreeCAD-Sitzung geladen wurde.

Es gibt fünf Seiten: [Allgemeine Einstellungen](#General/de), [Benutzeroberfläche](#Interface/de), [Raster und Einrasten](#Grid_and_snapping/de), [Visuell](#Visual/de) und [Texte und Bemaßungen](#Texts_and_dimensions/de).

Einige fortgeschrittene Einstellungen können nur im [Parameter-Editor](/Std_DlgParameter/de "Std DlgParameter/de") geändert werden. Siehe [Fine-tuning](/Fine-tuning/de#Arbeitsbereich_Draft "Fine-tuning/de").

Diese Seite wurde für Version 1.0 aktualisiert.

In 0.21 und davor können einige Einstellungen auf anderen Seiten erscheinen und in einigen Fällen muss FreeCAD nach dem Anpassen einer Einstellung neu gestartet werden.

## Allgemein

![](/images/Preferences_Draft_Page_General.png)

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Interner Präzisionsgrad** | Die Anzahl der Dezimalstellen, die bei internen Koordinatenoperationen verwendet werden (z. B. 3 = 0,001). Werte zwischen 6 und 8 gelten in der Regel als der beste Kompromiss. |
| **Standard-Arbeitsebene** | Die Standard-[Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") für neue Ansichten. Die Optionen sind:  * **Automatisch**: Wird **Automatisch** ausgewählt, richtet sich die Arbeitsebene automatisch an der aktuellen Ansicht aus, sobald ein Befehl gestartet wird. Außerdem wird sie an vorausgewählten ebenen Flächen ausgerichtet, oder wenn Punkte auf ebenen Flächen während der Befehle ausgewählt werden. * **XY (oben)** * **XZ (vorne)** * **YZ (Seite)** |
| **Zeige Arbeitsebenen-Tracker** | Wenn aktiviert, wird bei der Auswahl von Punkten ein Widget angezeigt, das die aktuelle Ausrichtung der Arbeitsebene angibt. |
| **Gruppen in Ebenenliste einbeziehen** | Wenn aktiviert, enthält die Dropdown-Liste für Ebenen auch Gruppen. Objekte können dann auch automatisch zu Gruppen hinzugefügt werden. Siehe [Draft AutoGruppieren](/Draft_AutoGroup/de "Draft AutoGroup/de"). |
| **Nachrichten der Eingabezeile im Ausgabefenster anzeigen** | Wenn aktiviert, werden, bei Ausführung von Draft-Befehlen, Anweisungen im [Ausgabefenster](/Report_view/de "Report view/de") angezeigt. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") |
| **Fokussierung auf Länge statt auf X-Koordinate setzen** | Wenn aktiviert, liegt der Fokus zunächst auf der Längeneingabe und nicht auf der X-Koordinate. So ist es möglich, eine Richtung und dann eine Entfernung anzugeben. |
| **Wähle ursprüngliche Objekte nach dem Kopieren aus** | Wenn aktiviert, werden nach dem Kopieren die Basisobjekte und nicht die erstellten Kopien ausgewählt. |
| **Part-Grundkörper erstellen, wenn möglich** | Wenn aktiviert, erzeugen Draft-Befehle [Part-Grundkörper](/Part_Primitives/de "Part Primitives/de") anstelle von Draft-Objekten. Man beachte, dass dies nicht vollständig unterstützt wird und dass viele Objekte mit Draft-Modifikationsbefehlen nicht bearbeitet werden können. |
| **Flächenfarben beim Zurückstufen/Hochstufen behalten** | Wenn aktiviert, behalten [Zurückstufen](/Draft_Downgrade/de "Draft Downgrade/de") und [Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de") die Flächenfarben bei. Nur für die Optionen von splitFaces und makeShell. |
| **Flächennamen beim Zurückstufen/Hochstufen behalten** | Wenn aktiviert, behalten [Draft Zurückstufen](/Draft_Downgrade/de "Draft Downgrade/de") und [Draft Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de") die Flächennamen bei. Nur für die Optionen von splitFaces und makeShell. |
| **Mausverzögerung** | Dies ist die Verzögerung in Sekunden, in der die Maus nach der Eingabe einer Zahl in ein Eingabefeld des Aufgaben-Fensters inaktiv ist. Während der Verzögerung wird der eingegebene Wert durch Bewegen der Maus nicht verändert. Den Wert auf 0 setzen, um die Verzögerung zu deaktivieren. |
| **Max. Anzahl editierbarer Objekte** | Die maximale Anzahl von Objekten, die der [Draft-Modus Bearbeiten](/Draft_Edit/de "Draft Edit/de") gleichzeitig bearbeiten kann. |
| **Knotenauswahlradius bearbeiten** | Der Auswahlradius von Editierknoten. |
| **Benennungspräfix für Klone** | Das Standardpräfix, das dem Label des neuen [Klone](/Draft_Clone/de "Draft Clone/de") hinzugefügt wird. |
| **Hilfsgeometriegruppen-Benennung** | Die Standardbezeichnung für die [Hilfsgeometriegruppe](/Draft_ToggleConstructionMode/de "Draft ToggleConstructionMode/de"). |
| **Hilfsgeometrie-Farbe** | Die Standardfarbe für Draft-Objekte im Konstruktionsmodus. |

## Schnittstelle

![](/images/Preferences_Draft_Page_Interface.png)

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Befehlsinterne Tastaturkürzel** | Diese Tastenkombinationen funktionieren nur, wenn ein [Draft](/Draft_Workbench/de "Draft Workbench/de")- oder [BIM](/BIM_Workbench/de "BIM Workbench/de")-Befehl aktiv ist. Hinweis: Nicht alle Befehle unterstützen alle Tastenkombinationen. |
| **Relativ** | Tastenkürzel zum Umschalten des Relativ-Modus. Wenn der Relativ-Modus aktiviert ist, sind die Koordinaten relativ zum letzten Punkt, falls vorhanden, ansonsten relativ zum Ursprung des Koordinatensystems. |
| **Global** | Tastenkürzel zum Umschalten des Global-Modus. Wenn der Global-Modus eingeschaltet ist, sind die Koordinaten relativ zum globalen Koordinatensystem, andernfalls sind sie relativ zum Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de"). |
| **Länge** | Tastenkürzel, um den Fokus vom Eingabefeld für die X-Koordinate auf das Eingabefeld für die Länge zu setzen und umgekehrt. |
| **Füllen** | Tastenkürzel zum Umschalten des Füllen-Modus. Wenn der Füllen-Modus aktiviert ist, wird für das erstellte Objekt Daten-Eigenschaft**Make Face** auf `true` gesetzt. |
| **Kante auswählen** | Tastenkürzel zur Auswahl der Schaltfläche Kante auswählen. Siehe [Draft Maß](/Draft_Dimension/de "Draft Dimension/de"). |
| **Unterelement-Modus** | Tastenkürzel zum Umschalten des Unterelement-Modus. Wenn der Unterelement-Modus aktiviert ist, verwendet der Befehl die ausgewählten Unterelemente anstelle der gesamten Objekte. |
| **Kopieren** | Tastenkürzel zum Umschalten des Kopieren-Modus. Wenn der Kopieren-Modus aktiviert ist, erstellt der Befehl geänderte Kopien, anstatt die Originalobjekte zu ändern. |
| **Rückgängig machen** | Tastenkürzel zum Drücken der Rückgängig-Schaltfläche. |
| **Radieren** | Tastenkürzel zum Drücken der Radieren-Schaltfläche. |
| **Schließen** | Tastenkürzel zum Drücken der Schließen-Schaltfläche. |
| **Verlassen** | Tastenkürzel zum Drücken der Verlassen-Schaltfläche. |
| **Fortsetzen** | Tastenkürzel zum umschalten des Fortsetzen-Modus. Wenn der Fortsetzen-Modus aktiviert ist, werden die Befehle nach Beendigung neu gestartet. |
| **Einrasten durchschalten** | Tastenkürzel zum Ändern der Einrastpriorität für ein Objekt, das durch andere Geometrie verdeckt ist. Siehe [Draft Einrasten](/Draft_Snap/de "Draft Snap/de"). |
| **Halt hinzufügen** | Tastenkürzel zum einfügen eines "Haltepunkts" an der aktuellen Position des Mauszeigers. Siehe [Draft Einrasten](/Draft_Snap/de "Draft Snap/de"). |
| **Arbeitsebene einstellen** | Tastenkürzel zum Drücken der Set WP-Schaltfläche einstellen. Tastenkürzel zum einschalten von [Draft Einrasten](/Draft_Snap/de "Draft Snap/de"). |
| **Radius vergrößern** | Tastenkürzel zur Erhöhung des maximalen Abstands, in dem das [Draft Einrast-Raster](/Draft_Snap_Grid/de "Draft Snap Grid/de") die Schnittpunkte von Rasterlinien erkennt. Siehe [Draft EbeneAuswählen](/Draft_SelectPlane/de "Draft SelectPlane/de"). |
| **Radius verkleinern** | Tastenkürzel zur Verringerung des maximalen Abstands, in dem das [Draft Einrast-Raster](/Draft_Snap_Grid/de "Draft Snap Grid/de") die Schnittpunkte von Rasterlinien erkennt. |
| **BeschränkeX** | Tastenkürzel, um die Bewegung des Mauszeigers auf die X-Achse zu beschränken. Siehe [Draft Einschränken](/Draft_Constrain/de "Draft Constrain/de"). |
| **BeschränkeY** | Tastenkürzel, um die Bewegung des Mauszeigers auf die Y-Achse zu beschränken. |
| **BeschränkeZ** | Tastenkürzel, um die Bewegung des Mauszeigers auf die Z-Achse zu beschränken. |
| **Die Symbolleiste Draft-Einrasten nur während der Ausführung von Befehlen anzeigen** | Wenn diese Option aktiviert ist, ist die Symbolleiste für Draft-Einrasten nur während der Befehle sichtbar. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") |
| **Das Widget Einrasten im Arbeitsbereich Draft anzeigen** | Wenn diese Option aktiviert ist, wird das [Widget Einrasten](/Draft_snap_widget/de "Draft snap widget/de") in der Statusleiste von Draft angezeigt. |
| **Das Widget Beschriftungsmaßstab im Arbeitsbereich Draft anzeigen** | Wenn diese Option aktiviert ist, wird das [Widget Beschriftungsmaßstab](/Draft_annotation_scale_widget/de "Draft annotation scale widget/de") in der Statusleiste von Draft angezeigt. |

## Raster und einrasten

![](/images/Preferences_Draft_Page_Grid_and_snapping.png)

Es ist zu beachten, dass mehrere Rastereinstellungen auch mit dem Befehl [Draft-EbeneAuswählen](/Draft_SelectPlane/de "Draft SelectPlane/de") geändert werden können.

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Raster immer anzeigen** | Wenn diese Option aktiviert ist, wird das Raster in neuen Ansichten immer sichtbar sein. [Draft-RasterUmschalten](/Draft_ToggleGrid/de "Draft ToggleGrid/de"), um dies für die aktive Ansicht zu ändern. |
| **Raster anzeigen, während Befehle ausgeführt werden** | Wenn diese Option aktiviert ist, wird das Raster bei Befehlen in neuen Ansichten sichtbar. [Draft-RasterUmschalten](/Draft_ToggleGrid/de "Draft ToggleGrid/de") , um dies für die aktive Ansicht zu ändern. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") |
| **Rasterrahmen anzeigen** | Wenn diese Option aktiviert ist, wird ein zusätzlicher Rahmen um das Raster angezeigt, der die Größe des Hauptquadrats in der linken unteren Ecke angibt. |
| **Zeige menschliche Figur** | Wenn diese Option aktiviert ist, wird der Umriss einer menschlichen Figur in der linken unteren Ecke des Rasters angezeigt. Nur wirksam, wenn **Rasterrahmen anzeigen** aktiviert ist. |
| **Farbige Achsen benutzen** | Wenn diese Option aktiviert ist, werden die beiden Hauptachsen des Gitters rot, grün oder blau gefärbt, wenn sie mit der X-, Y- oder Z-Achse des globalen Koordinatensystems übereinstimmen. |
| **Hauptlinien alle** | Die Anzahl der Quadrate zwischen den Hauptrasterlinien. Hauptrasterlinien sind dicker als Nebenrasterlinien. |
| **Rasterabstand** | Der Abstand zwischen den Rasterlinien. |
| **Rastergröße** | Die Anzahl der Quadrate in X- und Y-Richtung des Rasters. |
| **Transparenz des Rasters** | Die Transparenz des Rasters. |
| **Farbe des Rasters** | Die Farbe des Rasters. |
| **Stil der Einrastsymbole** | Der Stil für [Draft-Einrasten](/Draft_Snap/de "Draft Snap/de"). Die Optionen sind:  * **Klassischer Entwurfsstil** * **Kleinkram Stil**. |
| **Farbe der Einrastsymbole** | Die Farbe für [Einrastsymbole](/Draft_Snap/de "Draft Snap/de"), [Einrastmaße](/Draft_Snap_Dimensions/de "Draft Snap Dimensions/de") und [Editierknoten](/Draft_Edit/de "Draft Edit/de"). |
| **Immer einrasten** | Wenn diese Option aktiviert ist, wird [Einrasten](/Draft_Snap/de "Draft Snap/de") aktiviert, ohne dass die **Einrast**-Umschalt-Taste betätigt werden muss. |
| **Einrast-Umschalter** | Die Umschalt-Taste für den[Einrast](/Draft_Snap/de "Draft Snap/de")-Modus. |
| **Randbedingungs-Modifikator** | Die [Einschränken](/Draft_Constrain/de "Draft Constrain/de") Modifikator-Taste. |
| **Alt-Umschalter** | Die Alt-Modifikator-Taste. Die Funktion dieser Taste hängt vom jeweiligen Befehl ab. |

## Ansicht

![](/images/Preferences_Draft_Page_Visual.png)

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **SVG-Mustergröße** | Die Standardgröße für SVG-Muster. Ein höherer Wert ergibt ein dichteres Muster. |
| **Ablageort alternativer SVG-Muster** | Ein optionales Verzeichnis mit benutzerdefinierten SVG-Dateien, die Musterdefinitionen enthalten, die den Standardmustern hinzugefügt werden sollen. |
| **Gestrichelte Linien-Definition** | Eine SVG-Linienart-Definition, die vom TechDraw-Befehl [Draft-Ansicht](/TechDraw_DraftView/de "TechDraw DraftView/de") verwendet wird. |
| **Strich-Punkt-Linien-Definition** | Eine Linienart-Definition. |
| **Gepunktete-Linien-Definition** | Eine Linienart-Definition. |

## Texte und Bemaßungen

![](/images/Preferences_Draft_Page_Texts_and_dimensions.png)

Diese Einstellungen sind die Standardwerte, die beim Erstellen neuer Objekte verwendet werden. Sie zu ändern hat keine Auswirkungen auf bestehende Objekte. Auf dieser Seite kann Folgendes festgelegt werden:

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Schriftart oder Familie** | Die Standardschriftart für Texte, Bemaßungen und Beschriftungen. Es kann ein Schriftname wie `Arial`, ein Stil wie `sans`, `serif` oder `mono`, oder eine Familie wie `Arial,Helvetica,sans`, oder eine Familie wie `Arial:Bold` sein. |
| **Schriftgröße** | Die Standardhöhe für Texte, Maßtexte und Beschriftungstexte. |
| **Faktor für den Zeilenabstand** | Der Standard-Zeilenabstand für mehrzeilige Texte und Beschriftungen (relativ zur Schriftgröße). |
| **Skalen Faktor** | Der Standardmultiplikator für den Beschriftungsmaßstab. Dies ist die Umkehrung des Maßstabs, des Draft Widgets [Beschriftungsmaßstab](/Draft_annotation_scale_widget/de "Draft annotation scale widget/de"). Wenn der Maßstab `1:100` ist, ist der Multiplikator `100`. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") |
| **Textfarbe** | Die Standardfarbe für Texte, Maßtexte und Beschriftungstexte. |
| **Maßlinie anzeigen** | Wenn diese Option aktiviert ist, wird die Maßlinie standardmäßig angezeigt. |
| **Linienbreite** | Die Standardlinienbreite. |
| **Pfeiltyp** | Das Standardsymbol, das an den Enden der Maßlinien angezeigt wird. Die Optionen sind:  * **Punkt** * **Kreis** * **Pfeil** * **Schrägstrich** * **Schrägstrich-2** |
| **Pfeilgröße** | Die Standard Pfeilgröße. |
| **Linien- und Pfeilfarbe** | Die Standardfarbe für Linien und Pfeile. |
| **Einheit anzeigen** | Wenn diese Option aktiviert ist, wird den Maßtexten standardmäßig ein Einheitensymbol hinzugefügt. |
| **Einheit überschreiben** | Die Standardeinheit für Bemaßungen. Eingeben einer Einheit wie z.B. `m` oder `cm`, oder leer lassen , um die aktuelle in FreeCAD definierte Einheit zu verwenden. |
| **Anzahl der Nachkommastellen** | Die Standardanzahl der Nachkommastellen für Maßtexte. |
| **Fuß-Trennzeichen** | Die optionale Zeichenkette, die zwischen den Werten Fuß und Zoll in den Abmessungen eingefügt wird. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") |
| **Maßlinienüberstand** | Der Standardabstand der Maßlinie wird über die Hilfslinien hinaus verlängert. |
| **Länge der Maßhilfslinie** | Die Standardlänge von Maßhilfslinien. `0` für vollständige Maßhilfslinien verwenden. Ein negativer Wert definiert den Abstand zwischen den Enden der Maßhilfslinien und den gemessenen Punkten. Ein positiver Wert definiert die maximale Länge der Maßhilfslinien. Wird nur für [lineare Maße](/Draft_Dimension/de#Ansicht "Draft Dimension/de") verwendet. |
| **Maßhilfslinienüberstand** | Die Standardlänge der Maßhilfslinien oberhalb der Maßlinie. |
| **Textabstand** | Der Standardabstand zwischen der Maßlinie und dem Maßtext. |
| **Standardschriftart für Textformen** | Die Standardschriftartdatei für den Befehl [Textform](/Draft_ShapeString/de "Draft ShapeString/de"). Für Windows-Benutzer: Ist der Abschnitt [Auswahl der Schriftdatei unter Windows](/Draft_ShapeString/de#Auswahl_der_Schriftdatei_unter_Windows "Draft ShapeString/de") auf dieser Seite zu beachten. |

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Preferences/de&oldid=1521049>"