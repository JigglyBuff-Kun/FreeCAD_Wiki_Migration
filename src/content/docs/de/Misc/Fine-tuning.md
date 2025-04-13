---
title: Feinabstimmung
---
## Einleitung

Der FreeCAD [Einstellungseditor](/Preferences_Editor/de "Preferences Editor/de") unter dem Menüpunkt **Bearbeitungen → Einstellungen** wird üblicherweise verwendet, um die FreeCAD Parametertabelle festzulegen und zu ändern.

Jedoch ist es auch möglich, unter Verwendung des [Parameter Editors](/Std_DlgParameter/de "Std DlgParameter/de") der im Menü **Werkzeuge → Parameter bearbeiten** gefunden werden kann,
auf Parameter manuell zuzugreifen, diese zu ändern und zu erstellen.

Diese Seite listet Parameter, die nicht über den Einstellungseditor zugänglich sind, aber manuell festgelegt werden können, für das Fine-Tuning der FreeCAD-Installation oder zur Fehlerbeseitigung. Alle Parameter befinden sich in **BaseApp/Preferences/**.

## Allgemein

* **Bitmaps/Theme/Name** (string): Den Namen des Icon-themes angeben, das das System-icon-theme überschreibt, das FreeCAD verwendet. Wird nur verwendet, wenn **Bitmaps/Theme/UseIconTheme** auf `true` gesetzt ist.
* **Bitmaps/Theme/ThemeSearchPaths** (boole): auf `false` setzen, damit FreeCAD seine enthaltenen Symbole verwendet anstatt der des System-icon-themes unter Linux. 0.21 und davor. Für neuere Versionen sollte stattdessen **Bitmaps/Theme/UseIconTheme** verwendet werden.
* **Bitmaps/Theme/UseIconTheme** (boole): Auf `true` setzen, um Qt zu zwingen die Symbole des Icon-Themes des Systems einzusetzen. Der Standardwert ist `false` und FreeCAD verwendet seine eigenen Symbole. Dies beeinflusst nicht die anderen Qt-icon-theme-Mechanismen wie Systemdialoge, Schaltflächen und andere. Jene sollten immer die Symbole des System-Themes verwenden. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
* **Dialog/DontUseNativeColorDialog** (boole): Farbauswahldialog-Einstellung. Auf `false` setzen, wenn FreeCAD eher den Farbauswaldialog des Systems verwenden soll als den Qt-Farb-Dialog. Standardwert: `true`.
* **Dialog/DontUseNativeDialog** (boole): Einstellung des Datei-Dialogs. Auf `false` setzen, wenn der Datei-Dialog des Systems zum Öffnen von Dateien verwendet werden soll oder auf `true` setzen, um den Qt-Dateiauswahldialog zu verwenden. Der Standardwert hängt von einer Einstellung während des Kompilierens ab: #define (USE\_QT\_FILEDIALOG).
* **Dialog/DontUseNativeFontDialog** (boole): Wird von dem Befehl [Draft Textform](/Draft_ShapeString/de "Draft ShapeString/de") verwendet. Auf `false` setzen, um den Schrift-Dialog des Systems zu verwenden. Standardwert ist `true`.
* **DockWindows/DAGView/Enabled** (boole): Auf `true` setzen, um in der Beta-[DAG-Ansicht](/DAG_view/de "DAG view/de") ein andockbares Fensterelement zu aktivieren. Nach dem Ändern des Parameterwertes ist es erforderlich, FreeCAD neu zu starten, damit das Fensterelement in der Ansichten-/Fensterliste zur Verfügung steht.
* **DockWindows/PropertyView/Enabled** (boole): Auf `true` setzen, um im [Eigenschafteneditor](/Property_editor/de "Property editor/de") ein andockbares Fensterelement zu aktivieren, unabhängig von der Combo-Ansicht. Nach dem Ändern des Parameterwertes ist es erforderlich, FreeCAD neu zu starten, damit das Fensterelement in der Ansichten-/Fensterliste zur Verfügung steht.
* **DockWindows/TreeView/Enabled** (boole): Auf `true` setzen, um in der [Baumansicht](/Document_structure/de "Document structure/de") ein andockbares Fensterelement zu aktivieren, unabhängig von der Combo-Ansicht. Nach dem Ändern des Parameterwertes ist es erforderlich, FreeCAD neu zu starten, damit das Fensterelement in der Ansichten-/Fensterliste zur Verfügung steht.
* **Document/AutoNameDynamicProperty** (boole): Auf `true` setzen, um FreeCAD zu veranlassen dynamische Eigenschafen mit einem gültigen Namen automatisch umzubenennen, anstatt einen Ausnahme-Fehler auszugeben (throwing an exception). Man beachte, dass Python-Code keinen Zugriff auf den neuen Namen hat.
* **Document/ChangeViewProviderTouchDocument** (boole): Auf `false` setzen, damit Änderungen der Sichtbarkeit eines Elements das Dokument nicht als geändert markieren.
* **Document/SaveThumbnailFix** (boole): Auf `true` setzen, um ein Problem mit Qt5 zu beheben, das das Erstellen von Miniaturansichten für `.FCStd`-Dateien verhindert.
* **General/LockToolBars** (boole): Auf `true` setzen, um die Verschiebbarkeit der Symbolleisten zu verhindern und die kleinen Griffpunkte auszublenden. Meist im Zusammenhang mit Stylesheets eingesetzt, die Symbolleisten vertikal ausrichten.
* **General/RecentIncludesExported** (boole): Auf `true` setzen, um auch exportierte Dateien in der Liste der zuletzt geöffneten Dateien aufzunehmen. Standardwert ist `false`.
* **General/RecentIncludesImported** (boolean): Auf `false` setzen, um importierte Dateien von der Liste der zuletzt geöffneten Dateien auszuschließen. Standardwert ist `true`.
* **General/ShowSplasherMessages** (boole): Auf `false` setzen, um das Anzeigen von Nachrichten auf dem Begrüßungsschirm auszulassen. Dies kann die Dauer des FreeCAD-Starts verkürzen. Standardwert ist `true`.
* **Macro/DuplicateFrom001** (boole): Auf `true` setzen, um die Suche nach Vorschlägen für Dateinamen von duplizierten Makros stets mit @001 zu beginnen, anstatt mit der aktuellen Version @NNN, falls möglich. Standardwert ist `false`.
* **Macro/DuplicateIgnoreExtraNote** (boole): Auf `true` setzen, um Extra-Angaben zu ignorieren, wenn Namen für Dateinamen von duplizierten Makros vorgeschlagen werden. Extra-Angaben sind Texte im Dateinamen nach "@NNN" und vor ".FCMacro". Beispiel: "my\_macro@005.my\_note.FCMacro". Auf `true` gesetzt, ist der nächste vorgeschlagene Dateiname "my\_macro@006.FCMacro". Auf `false` gesetzt, ist dernächste vorgeschlagene Dateiname "my\_macro@006.my\_note.FCMacro". Um als Extra-Angabe erkannt zu werden, sollte der Text mit einem dem "@NNN" folgenden Punkt (".") beginnen. Andernfalls wird z.B. "my\_macro@006\_my\_note.FCMacro" zu "my\_macro@006\_my\_note@001.FCMacro" als vorgeschlagener neuer Dateiname, was in manchen Fällen erwünscht sein kann. Standardwert ist `false`.
* **Macro/ReplaceSpaces** (boole): Auf `false` setzen, wenn Leerzeichen in Dateinamen nicht automatisch in Unterstriche umgewandelt werden sollen, wenn ein Makro erstellt, umbenannt, oder dupliziert wird. Dies beeinflusst vorhandene Dateien nicht; es betrifft nur das Erstellen neuer Dateien bzw. das Umbenennen oder Duplizieren vorhandener Dateien. Standardwert ist `true`.
* **MainWindow/ClearMenuBar** (boole): Auf `true` setzen, um die Menüleiste bei einem Wechsel des Arbeitsbereiches zu leeren; nützlich, wenn ein globales Menü verwendet wird, da diese bei einem Wechsel des Arbeitsbereiches eventuell nicht aktualisiert werden und schnell vollgestopf werden mit den Menüeinträgen jedes Arbeitsbereiches. Standardwert ist `false`. Unter macOS wird sie in beiden Fällen geleert, als Übergangslösung für einen Qt-Fehler.
* **MainWindow/ToolBarNameAsToolTip** (boole): Auf `false` setzen, um zu verhindern, dass der Namen einer Symbolleiste als QuickInfo angezeigt wird. Standardwert ist `true`.
* **PropertyView/AutoTransactionView** (boole): Auf `true` setzen, damit Änderungen der Eigenschaften im Reiter Ansicht zum Rückgängig-Stapel hinzugefügt werden (und so das Rückgängigmachen ermöglicht wird). Standardwert ist `false`.
* **Selection/AutoShowSelectionView** (boole): Auf `true` setzen, um das Fenster der Auswahlansicht automatisch anzuzeigen, wenn etwas ausgewählt wird. Standardwert ist `false`.
* **Selection/singleClickFeatureSelect** (boole): Auf `false` setzen, um die Auswahl eines Formelements in PartDesign mit einem Einzelklick zu deaktivieren. Standardwert ist `true`.
* **TreeView/HideColumn** (boolean): Auf `true` setzen, um die Spalte 'Beschreibung' in der [Baumansicht](/Tree_view/de "Tree view/de") auszublenden. Standardwert ist `false`.
* **TreeView/TreeViewStretchDescription** (boolean): Auf `true` setzen, um die Spalte 'Beschreibung' in der [Baumansicht](/Tree_view/de "Tree view/de") bis zum rechten Fensterrand zu strecken. Standardwert ist `false`.
* **Units/PropertyVectorListCopyPrecision** (integer): Anzahl der Stellen, die für die Genauigkeit beim Kopieren einer Tabelle von Vektoren aus dem Kontextmenü in die Systemzwischenablage verwendet wird, wenn der [Eigenschafteneditor](/Property_editor/de "Property editor/de") für Eigenschaften vom Typ `App::PropertyVectorList` verwendet wird. Standardwert ist `16`. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")
* **View/AxisLetterColor** (unsigned): Farbe der Buchstaben des Koordinatensystems, das in der rechten unteren Ecke der 3D-Ansicht angezeigt wird. Standardwert ist `255`. Siehe [hier](/Navigation_Cube/de#Anpassung "Navigation Cube/de") für Informationen über die Farbwerte.
* **View/AxisXColor** (unsigned): Farbe der Elemente der X-Achse des [Bewegungs](/Std_TransformManip/de "Std TransformManip/de")-Werkzeug. Standardwert ist `3425907456`. Siehe [hier](/Navigation_Cube/de#Anpassung "Navigation Cube/de") für Informationen über den Farbwert.
* **View/AxisYColor** (unsigned): Wie vorher für die Elemente der Y-Achse. Standardwert ist `869020416`.
* **View/AxisZColor** (unsigned): Wie vorher für die Elemente der Z-Achse.. Standardwert ist `859032576`.
* **View/LocalCoordinateSystemSize** (float): Größe des lokalen Koordinatensystems. Standardwert ist `2.0`.
* **View/NavigationDebug** (boole): Aktiviert die Ausgabe für die Fehlerbereinigung von Navigationsstilen (in Version 0.19 hat nur der Navigationsstil Geste etwas zu sagen).
* **View/SavePicture** (string): Auf `FramebufferObject`, `PixelBuffer` oder `CoinOffscreenRenderer` setzen, um verschiedene Methoden zum Erstellen von Abbildungen der 3D-Ansicht auszuwählen.
* **View/ToggleTransparency** (integer): Die größtmögliche Transparenz in Prozent, die der Anwender benötigt, um von Null umzuschalten. Standardwert ist `70`. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")

### Standard-Export-Dateiname

* **General/ExportDefaultFilenameMultiple** (string): Set the default filename to use when exporting multiple objects. Defaults to `%F`.
* **General/ExportDefaultFilenameSingle** (string): Set the default filename to use when exporting a single object. Defaults to `%F-%P-`.

Both of these options support the automatic insertion of various pieces of information into the filename, using the following format characters:

* %F - the name of the .FCStd file (or the label, if it is not saved yet)
* %Lx - the label of the selected object(s), separated by character 'x'
* %Px - the label of the selected object(s) and their first parent, separated by character 'x'
* %U - the date and time, in UTC, [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
* %D - the date and time, in local timezone, [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)

Any other characters are treated literally. If the resulting filename is illegal it will be changed on saving, with illegal characters replaced by the underscore (\_).

## Mausbezogenes

* **General/ComboBoxWheelEventFilter** (boole): Auf `true` setzen, damit Fensterelemente keine Mausradereignisse abfangen und so verhindern, dass scrollbare Bereiche nicht gescrollt werden. Erfordert den Neustart von FreeCAD, um zur Verfügung zu stehen.
* **View/GestureMoveThreshold** (integer): Der Weg (px), den der Mauszeiger zurücklegen muss, um einen Rotations- oder Schwenkmodus des Gesture-Navigationsstils zu starten. Standardwert ist `5`.
* **View/GestureRollFwdCommand**, **View/GestureRollBackCommand** (string): Befehle des Gesture-Navigationsstils, die durch Rollgesten mit der Maustaste ausgeführt werden.

* **View/GestureTapHoldTimeout** (integer) : Der Wert legt fest, wie lange gewartet wird (in Millisekunden), um im Gesture-Navigationsstil den Schwenkmodus (pan-mode) zu starten. Es kann hilfreich sein, den Wert zu erhöhen, wenn das Ziehen von Geometrie im Sketcher schwierig ist. Standardwert ist `700`.

## Tastaturkurzbefehle

### Esc-Taste

* **General/TasksKeyEsc** (boole): Erstellen und auf `false` setzen, um die Funktion der Esc-Taste, das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") zu verlassen, wenn dieses den Fokus hat, in allen Arbeitsbereichen zu deaktivieren.

## Navigationswürfel

Siehe [Navigationswürfel](/Navigation_Cube/de#Erweiterte_Parameter "Navigation Cube/de").

## Bestimmte Arbeitsbereiche

### Arbeisbereich [BIM](/BIM_Workbench/de "BIM Workbench/de")

* **Mod/BIM/DefaultPageScale** (float): Default scaling for new TechDraw pages created from the BIM Workbench, in case the template doesn't contain any "Scale" or "Scaling" (case insensitive) editable text field.

### Arbeisbereich [CAM](/CAM_Workbench/de "CAM Workbench/de")

* The [CAM Workbench](/CAM_Workbench "CAM Workbench") has two switches to enable experimental features documented on the [CAM experimental](/CAM_experimental "CAM experimental") page.

### Arbeisbereich [Draft](/Draft_Workbench/de "Draft Workbench/de")

* **Mod/Draft/DefaultAnnoDisplayMode** (integer): Set to `1` to create Draft annotations ([texts](/Draft_Text "Draft Text"), [dimensions](/Draft_Dimension "Draft Dimension") and [labels](/Draft_Label "Draft Label")) with their Ansicht**Display Mode** set to `Screen`. Set to `0` for new annotations with this property set to `World`. Defaults to `0`. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* **Mod/Draft/DimAutoFlipText** (boolean): Set to `false` to disable the automatic orientation of the text of newly created dimensions relative to the current [working plane](/Draft_SelectPlane "Draft SelectPlane"). Defaults to `true`. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* **Mod/Draft/GridHideInOtherWorkbenches** (boolean): Set to `false` to keep the [Draft grid](/Draft_ToggleGrid "Draft ToggleGrid") when switching to workbenches other than [BIM](/BIM_Workbench "BIM Workbench") or [Draft](/Draft_Workbench "Draft Workbench"). Defaults to `true`. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* **Mod/Draft/SvgLinesBlack** (boolean): Set to `true` to convert the color white to black in SVG output. Set to `false` to keep the color white. Affects export to Flattened SVG and [TechDraw DraftViews](/TechDraw_DraftView "TechDraw DraftView"). Defaults to `true`.
* **Mod/Draft/useSupport** (boolean): Set to `true` to set the Daten**Support** property of Draft objects created on a face of an exiting base object to that base object. This was standard behavior before FreeCAD version 0.19. Note that this parameter may not be supported in future versions. Defaults to `false`.

### Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de")

* **Mod/Part/ParametricRefine** (boolean): Set to `false` so [Part RefineShape](/Part_RefineShape "Part RefineShape") creates an independent copy rather than a linked one. Defaults to `true`.

### Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de")

* **Mod/PartDesign/AdditiveHelixPreview** (boolean): Set to `true` to ensure an additive helix that does not intersect the body is visible in the preview. Defaults to `false`.
* **Mod/PartDesign/DefaultDatumColor** (unsigned): Diffuse color and transparency for [PartDesign datums](/PartDesign_CompDatums "PartDesign CompDatums"), [PartDesign ShapeBinders](/PartDesign_ShapeBinder "PartDesign ShapeBinder") and [PartDesign SubShapeBinders](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder"). Defaults to `4292280473`. See [here](/Navigation_Cube#Customization "Navigation Cube") for information about the color value.
* **Mod/PartDesign/SubtractiveHelixPreview** (boolean): Set to `true` to ensure a subtractive helix that does not intersect the body is visible in the preview. Defaults to `true`.
* **Mod/PartDesign/SwitchToTask** (boolean): Set to `false` to prevent the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") from switching to the Task panel when starting. Defaults to `true`.
* **Mod/PartDesign/SwitchToWB** (boolean): Set to `false` to prevent the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") to be automatically called when a [PartDesign Body](/PartDesign_Body "PartDesign Body") is activated. Defaults to `true`.

### Arbeisbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")

* **Mod/Sketcher/RadiusDiameterConstraintDisplayAngleRandomness** (float): Set an angle randomness on the above value. Value is the range of the random angle, centered on base angle. Defaults to `0`.
* **Mod/Sketcher/RadiusDiameterConstraintDisplayBaseAngle** (float): Set the angle (from horizontal) used to display radius/diameter constraints in Sketcher at creation time. Defaults to `15`.
* **Mod/Sketcher/RoundRectangleSuggConstraints** (boolean): Set to `false` to disable the addition of two extra construction points when creating a rounded rectangle. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

#### Constraint label colors

The label in Sketcher that displays the current status of the constraints (e.g. "Underconstrained," "Fully Constrained," etc.) is styleable on a per-state basis either using the Qt stylesheet, or via user preferences. User preferences take precedence if they have been set (in **Mod/Sketcher/General**):

* **EmptySketchMessageColor** - Defaults to 50% opacity black
* **UnderconstrainedMessageColor** - Defaults to black
* **MalformedConstraintMessageColor** - Defaults to red
* **ConflictingConstraintMessageColor** - Defaults to red
* **RedundantConstraintMessageColor** - Defaults to orange red
* **PartiallyRedundantConstraintMessageColor** - Defaults to royal blue
* **SolverFailedMessageColor** - Defaults to red
* **FullyConstrainedMessageColor** - Defaults to green

### Arbeisbereich [Start](/Start_Workbench/de "Start Workbench/de")

Der Arbeitsbereich Start ist nach der Version 0.21 nicht mehr Bestandteil von FreeCAD:

* **Mod/Start/DefaultImportXXX** (string): Where XXX is a lowercase file extension. For example DefaultImportifc for .IFC files. Allows to set a default import module to be used when clicking an icon on the start page, when several importers are available. For example, setting DefaultImportifc = ifc\_import will use the NativeIFC importer if available. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* **Mod/Start/TimeFormat** (string): A time format string such as `%m/%d/%Y %H:%M:%S` used for the date in the tooltip that is shown when an item on the start page is hovered.

### [Help Module](/Help_Module "Help Module")

* **Mod/Help/UseWebModule** (boolean): Allows to force the use of the Web module to open MDI tabs. This can be useful to work around QWebEngine issues in some versions of Qt5. Defaults to `false`. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Retrieved from "<http://wiki.freecad.org/index.php?title=Fine-tuning/de&oldid=1565022>"