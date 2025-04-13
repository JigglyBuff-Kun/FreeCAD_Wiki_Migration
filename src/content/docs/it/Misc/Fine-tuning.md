---
title: Ottimizzare l'installazione
---
## Introduzione

Per impostare e manipolare la tabella dei parametri di FreeCAD normalmente si usa l'[Editor delle preferenze](/Preferences_Editor/it "Preferences Editor/it") nel menu **Modifica → Preferenze**.

Tuttavia, è anche possibile accedere, modificare e creare i parametri manualmente, usando l'[Editor dei parametri](/Std_DlgParameter/it "Std DlgParameter/it") che si trova nel menu **Strumenti → Modifica parametri**.

Questa pagina elenca i parametri che non sono accessibili tramite l'editor delle preferenze, ma che è possibile impostare manualmente per ottimizzare l'installazione di FreeCAD o superare i problemi. Tutti i parametri si trovano in **BaseApp/Preferences/**.

## Generale

* **Mod/Part/ParametricRefine** (boolean) : impostare su `false` in modo che [Affina una forma](/Part_RefineShape/it "Part RefineShape/it") crei una copia indipendente anziché una copia collegata. L'impostazione predefinita è `true` se il valore non esiste.
* **Mod/PartDesign/SwitchToTask** (boolean): impostare su `false` per impedire a [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") di passare al pannello Azioni all'avvio. L'impostazione predefinita è `true` se il valore non esiste.
* **Mod/PartDesign/SwitchToWB** (boolean): impostare su `false` per impedire che [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") venga chiamato automaticamente quando viene attivato un [Corpo di PartDesign](/PartDesign_Body/it "PartDesign Body/it"). L'impostazione predefinita è `true` se il valore non esiste.
* **Document/SaveThumbnailFix** (boolean): impostare su `true` per risolvere un problema con Qt5 che impedisce la generazione delle miniature dei file `.FCStd`.
* [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") ha diverse opzioni nascost e documentate nelle [preferenze di TechDraw](/TechDraw_Preferences/it#Impostazioni_nascoste "TechDraw Preferences/it").
* **View/SavePicture** (string): impostare su **FramebufferObject**, **PixelBuffer** o **CoinOffscreenRenderer** per i metodi diversi per produrre immagini dalla vista 3D
* **View/NaviStepByTurn** (integer) : Definisce il numero di passaggi incrementali (tacche) per completare un giro quando si utilizzano le frecce di NaviCube. Se il valore non è definito, il valore predefinito è **8**, il che significa che ogni incremento ruota di 360/8 = 45 gradi.
* **View/NavigationDebug** (boolean) : abilita l'output di debug degli stili di navigazione (a partire dalla v0.19, riguarda solo lo stile di navigazione gestuale).
* **View/GestureRollFwdCommand**, **View/GestureRollBackCommand** (string) : comandi da eseguire con i gesti di scorrimento del pulsante del mouse nello stile di navigazione gestuale.
* **View/GestureMoveThreshold** (integer) : la distanza (px) che il cursore del mouse deve spostarsi per passare alle modalità di rotazione o panoramica nello stile di navigazione gestuale. L'impostazione predefinita è 5.
* **View/GestureTapHoldTimeout** (integer) : imposta il tempo di attesa (in millisecondi) per entrare in modalità panoramica nello stile di navigazione gestuale. Può essere utile aumentarlo se il trascinamento della geometria nello sketcher è difficile. L'impostazione predefinita è 700.
* **Mod/Draft/defaultCameraHeight** (int) : imposta l'altezza della videocamera all'avvio di Draft in un documento vuoto. 0 disabilita, l'impostazione di default è 5, buona quando si lavora in millimetri, una buona altezza per il lavoro per Arch è 4500
* **DockWindows/TreeView/Enabled** (boolean): impostare su `true` per abilitare un widget agganciabile [Struttura del documento](/Document_structure/it "Document structure/it") indipendente dalla Vista combinata. Dopo aver modificato il valore del parametro, è necessario riavviare FreeCAD in modo che il widget sia disponibile nell'elenco Visualizza → Pannelli.
* **DockWindows/PropertyView/Enabled** (boolean): impostare su `true` per abilitare un widget agganciabile [Visualizza proprietà](/Property_editor/it "Property editor/it") indipendente dalla Vista combinata. Dopo aver modificato il valore del parametro, è necessario riavviare FreeCAD in modo che il widget sia disponibile nell'elenco Visualizza → Pannelli.
* **DockWindows/DAGView/Enabled** (boolean): Impostare su `true` per abilitare un widget agganciabile beta [Vista DAG](/DAG_view/it "DAG view/it"). Dopo aver modificato il valore del parametro, è necessario riavvire FreeCAD in modo che il widget sia disponibile nell'elenco Visualizza → Pannelli.
* **General/ComboBoxWheelEventFilter** (boolean) : Impostare su `true` in modo che i widget non catturino gli eventi della rotellina del mouse e impediscano lo scorrimento delle aree scorrevoli.

## Default export filename

* **General/ExportDefaultFilenameMultiple** (string): Set the default filename to use when exporting multiple objects. Defaults to `%F`.
* **General/ExportDefaultFilenameSingle** (string): Set the default filename to use when exporting a single object. Defaults to `%F-%P-`.

Both of these options support the automatic insertion of various pieces of information into the filename, using the following format characters:

* %F - the name of the .FCStd file (or the label, if it is not saved yet)
* %Lx - the label of the selected object(s), separated by character 'x'
* %Px - the label of the selected object(s) and their first parent, separated by character 'x'
* %U - the date and time, in UTC, [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
* %D - the date and time, in local timezone, [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)

Any other characters are treated literally. If the resulting filename is illegal it will be changed on saving, with illegal characters replaced by the underscore (\_).

## Mouse related

* **General/ComboBoxWheelEventFilter** (boolean): Set to `true` so widgets do not catch mouse wheel event and prevent scrollable areas to be scrolled. Needs FreeCAD restart to be taken into account.
* **View/GestureMoveThreshold** (integer): the distance (px) mouse cursor has to move to enter rotation or pan modes of Gesture navigation style. Defaults to `5`.
* **View/GestureRollFwdCommand**, **View/GestureRollBackCommand** (string): commands to be executed by mouse button roll gestures of Gesture navigation style.
* **View/GestureTapHoldTimeout** (integer): sets for how long to wait (in milliseconds) to enter pan mode in Gesture navigation style. It can be helpful to increase it if dragging geometry in sketcher is difficult. Defaults to `700`.

## Keyboard shortcuts

### Escape key

* **General/TasksKeyEsc** (boolean): Create and set to `false` to disable the ESC key exiting the [Task panel](/Task_panel "Task panel") in all workbenches (that is if the task panel has focus).

## Navigation Cube

See [Navigation Cube](/Navigation_Cube#Advanced_parameters "Navigation Cube").

## Specific workbenches

### [BIM Workbench](/BIM_Workbench "BIM Workbench")

* **Mod/BIM/DefaultPageScale** (float): Default scaling for new TechDraw pages created from the BIM Workbench, in case the template doesn't contain any "Scale" or "Scaling" (case insensitive) editable text field.

### [CAM Workbench](/CAM_Workbench "CAM Workbench")

* The [CAM Workbench](/CAM_Workbench "CAM Workbench") has two switches to enable experimental features documented on the [CAM experimental](/CAM_experimental "CAM experimental") page.

### [Draft Workbench](/Draft_Workbench "Draft Workbench")

* **Mod/Draft/DefaultAnnoDisplayMode** (integer): Set to `1` to create Draft annotations ([texts](/Draft_Text "Draft Text"), [dimensions](/Draft_Dimension "Draft Dimension") and [labels](/Draft_Label "Draft Label")) with their Vista**Display Mode** set to `Screen`. Set to `0` for new annotations with this property set to `World`. Defaults to `0`. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* **Mod/Draft/DimAutoFlipText** (boolean): Set to `false` to disable the automatic orientation of the text of newly created dimensions relative to the current [working plane](/Draft_SelectPlane "Draft SelectPlane"). Defaults to `true`. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* **Mod/Draft/GridHideInOtherWorkbenches** (boolean): Set to `false` to keep the [Draft grid](/Draft_ToggleGrid "Draft ToggleGrid") when switching to workbenches other than [BIM](/BIM_Workbench "BIM Workbench") or [Draft](/Draft_Workbench "Draft Workbench"). Defaults to `true`. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* **Mod/Draft/SvgLinesBlack** (boolean): Set to `true` to convert the color white to black in SVG output. Set to `false` to keep the color white. Affects export to Flattened SVG and [TechDraw DraftViews](/TechDraw_DraftView "TechDraw DraftView"). Defaults to `true`.
* **Mod/Draft/useSupport** (boolean): Set to `true` to set the Dati**Support** property of Draft objects created on a face of an exiting base object to that base object. This was standard behavior before FreeCAD version 0.19. Note that this parameter may not be supported in future versions. Defaults to `false`.

### [Part Workbench](/Part_Workbench "Part Workbench")

* **Mod/Part/ParametricRefine** (boolean): Set to `false` so [Part RefineShape](/Part_RefineShape "Part RefineShape") creates an independent copy rather than a linked one. Defaults to `true`.

### [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench")

* **Mod/PartDesign/AdditiveHelixPreview** (boolean): Set to `true` to ensure an additive helix that does not intersect the body is visible in the preview. Defaults to `false`.
* **Mod/PartDesign/DefaultDatumColor** (unsigned): Diffuse color and transparency for [PartDesign datums](/PartDesign_CompDatums "PartDesign CompDatums"), [PartDesign ShapeBinders](/PartDesign_ShapeBinder "PartDesign ShapeBinder") and [PartDesign SubShapeBinders](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder"). Defaults to `4292280473`. See [here](/Navigation_Cube#Customization "Navigation Cube") for information about the color value.
* **Mod/PartDesign/SubtractiveHelixPreview** (boolean): Set to `true` to ensure a subtractive helix that does not intersect the body is visible in the preview. Defaults to `true`.
* **Mod/PartDesign/SwitchToTask** (boolean): Set to `false` to prevent the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") from switching to the Task panel when starting. Defaults to `true`.
* **Mod/PartDesign/SwitchToWB** (boolean): Set to `false` to prevent the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") to be automatically called when a [PartDesign Body](/PartDesign_Body "PartDesign Body") is activated. Defaults to `true`.

### [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench")

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

### [Start Workbench](/Start_Workbench "Start Workbench")

The Start Workbench is no longer included after version 0.21.

* **Mod/Start/DefaultImportXXX** (string): Where XXX is a lowercase file extension. For example DefaultImportifc for .IFC files. Allows to set a default import module to be used when clicking an icon on the start page, when several importers are available. For example, setting DefaultImportifc = ifc\_import will use the NativeIFC importer if available. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* **Mod/Start/TimeFormat** (string): A time format string such as `%m/%d/%Y %H:%M:%S` used for the date in the tooltip that is shown when an item on the start page is hovered.

### [Help Module](/Help_Module "Help Module")

* **Mod/Help/UseWebModule** (boolean): Allows to force the use of the Web module to open MDI tabs. This can be useful to work around QWebEngine issues in some versions of Qt5. Defaults to `false`. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Retrieved from "<http://wiki.freecad.org/index.php?title=Fine-tuning/it&oldid=1565020>"