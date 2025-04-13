---
title: 調整
---
## 概要

The FreeCAD [Preferences Editor](/Preferences_Editor "Preferences Editor") under menu **Edit → Preferences** is commonly used to set and manipulate the FreeCAD parameters table.

However, it is also possible to access, modify and create parameters manually, using the [Parameter Editor](/Std_DlgParameter "Std DlgParameter") found under menu **Tools → Edit parameters**.

This page lists parameters that are not accessible via the preferences editor, but that you can set manually to fine-tune your FreeCAD installation or overcome problems. All parameters are located in **BaseApp/Preferences/**.

## General

* **Bitmaps/Theme/Name** (string): Specify the name of the icon theme to override the system icon theme used by FreeCAD. Only used if **Bitmaps/Theme/UseIconTheme** is `true`.
* **Bitmaps/Theme/ThemeSearchPaths** (boolean): Set to `false` so FreeCAD uses its included icons instead of the system icon theme on Linux. 0.21 and below. For later versions use **Bitmaps/Theme/UseIconTheme** instead.
* **Bitmaps/Theme/UseIconTheme** (boolean): Set to `true` to force Qt to use icons from the system's icon theme. The default is `false` so FreeCAD will use its own icons. It does not affect other Qt icon theme mechanisms such as system dialogs, buttons and others. Those should always use the icons from the system theme. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* **Dialog/DontUseNativeColorDialog** (boolean): Color picker dialog setting. Set to `false` if you want FreeCAD to use the native color dialog on your system rather than the Qt Color Dialog. Defaults to `true`.
* **Dialog/DontUseNativeDialog** (boolean): File dialog setting. Set to `false` if you want to use the native File dialog when opening files or to `true` to use the Qt File Picker Dialog. The default depends on a compile-time setting: #define (USE\_QT\_FILEDIALOG).
* **Dialog/DontUseNativeFontDialog** (boolean): Used by the [Draft ShapeString](/Draft_ShapeString "Draft ShapeString") command. Set to `false` to use the native Font dialog. Defaults to `true`.
* **DockWindows/DAGView/Enabled** (boolean): Set to `true` to enable a beta [DAG view](/DAG_view "DAG view") dockable widget. After changing the parameter value, a FreeCAD restart is needed so the widget is available in the View/Panels list.
* **DockWindows/PropertyView/Enabled** (boolean): Set to `true` to enable a [Property View](/Property_editor "Property editor") dockable widget independent from the Combo View. After changing the parameter value, a FreeCAD restart is needed so the widget is available in the View/Panels list.
* **DockWindows/TreeView/Enabled** (boolean): Set to `true` to enable a [Tree View](/Document_structure "Document structure") dockable widget independent from the Combo View. After changing the parameter value, a FreeCAD restart is needed so the widget is available in the View/Panels list.
* **Document/AutoNameDynamicProperty** (boolean): Set to `true` to make FreeCAD automatically rename dynamic properties with an invalid specified name instead of throwing an exception. Note that Python code will not have access to the new name.
* **Document/ChangeViewProviderTouchDocument** (boolean): Set to `false` so items visibility changes won't mark the document as changed.
* **Document/SaveThumbnailFix** (boolean): Set to `true` to fix a problem with Qt5 that prevents the generation of `.FCStd` file thumbnails.
* **General/LockToolBars** (boolean): Set to `true` to prevent toolbars from being draggable, and to hide the small drag handles. Mostly used in conjunction with stylesheets that make the toolbars vertical.
* **General/RecentIncludesExported** (boolean): Set to `true` to include exported files in the Recent Files list. Defaults to `false`.
* **General/RecentIncludesImported** (boolean): Set to `false` to exclude imported files from the Recent Files list. Defaults to `true`.
* **General/ShowSplasherMessages** (boolean): Set to `false` to skip showing messages on the splashscreen. This may reduce the FreeCAD startup time. Defaults to `true`.
* **Macro/DuplicateFrom001** (boolean): Set to `true` to always begin searching for suggested duplicate macro filename with @001 instead of current @NNN, if applicable. Defaults to `false`.
* **Macro/DuplicateIgnoreExtraNote** (boolean): Set to `true` to ignore extra note when suggesting duplicate macro filename. Extra note is text in the filename following "@NNN" and before ".FCMacro". Example: "my\_macro@005.my\_note.FCMacro". If `true` the next suggested filename is "my\_macro@006.FCMacro". If set to `false` the next suggested filename is "my\_macro@006.my\_note.FCMacro". To be recognized as an extra note the text should begin with a dot (".") following the "@NNN". Otherwise, for example, "my\_macro@006\_my\_note.FCMacro" gets "my\_macro@006\_my\_note@001.FCMacro" as the suggested new filename, which might be desirable in some cases. Defaults to `false`.
* **Macro/ReplaceSpaces** (boolean): Set to `false` if you do not want spaces in your filenames automatically converted to underscores when creating, renaming, or duplicating a macro. Does not affect existing files, only matters when creating new file or renaming or duplicating existing file. Defaults to `true`.
* **MainWindow/ClearMenuBar** (boolean): Set to `true` to clear the menu bar on workbench change, useful when using a global menu as they may fail to update on workbench change and quickly get cluttered with each workbench's menu entries. Defaults to `false`. On macOS it is cleared either way to workaround a Qt bug.
* **MainWindow/ToolBarNameAsToolTip** (boolean): Set to `false` to not get the toolbar name as a tooltip. Defaults to `true`.
* **PropertyView/AutoTransactionView** (boolean): Set to `true` so changes of View tab properties are added to the undo stack (hence are undoable). Defaults to `false`.
* **Selection/AutoShowSelectionView** (boolean): Set to `true` to make the Selection View pane show automatically when selecting something. Defaults to `false`.
* **Selection/singleClickFeatureSelect** (boolean): Set to `false` to disable single click selection of a feature in PartDesign. Defaults to `true`.
* **TreeView/HideColumn** (boolean): Set to `true` to hide the 'Description' column in the [Tree view](/Tree_view "Tree view"). Defaults to `false`.
* **TreeView/TreeViewStretchDescription** (boolean): Set to `true` to stretch the 'Description' column in the [Tree view](/Tree_view "Tree view") to the right edge of the pane. Defaults to `false`.
* **Units/PropertyVectorListCopyPrecision** (integer): Number of digits of precision to use when copying a table of vectors from the context menu to the system clipboard when using the [Property editor](/Property_editor "Property editor") for properties of type `App::PropertyVectorList`. Defaults to `16`. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* **View/AxisLetterColor** (unsigned): Color for the letters of the coordinate system shown in the lower right corner of the 3D view. Defaults to `255`. See [here](/Navigation_Cube#Customization "Navigation Cube") for information about the color value.
* **View/AxisXColor** (unsigned): Color for the X axis elements of the [Std TransformManip](/Std_TransformManip "Std TransformManip") gizmo. Defaults to `3425907456`. See [here](/Navigation_Cube#Customization "Navigation Cube") for information about the color value.
* **View/AxisYColor** (unsigned): Idem for the Y axis elements. Defaults to `869020416`.
* **View/AxisZColor** (unsigned): Idem for the Z axis elements. Defaults to `859032576`.
* **View/LocalCoordinateSystemSize** (float): Size of local coordinate systems. Defaults to `2.0`.
* **View/NavigationDebug** (boolean): Enables debug output of navigation styles (as of v0.19, only the Gesture navigation style has something to say).
* **View/SavePicture** (string): Set to `FramebufferObject`, `PixelBuffer` or `CoinOffscreenRenderer` for different methods to produce images from the 3D view.
* **View/ToggleTransparency** (integer): The maximum transparency in percentage that the user requires to toggle from zero. Defaults to `70`. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

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

* **Mod/Draft/DefaultAnnoDisplayMode** (integer): Set to `1` to create Draft annotations ([texts](/Draft_Text "Draft Text"), [dimensions](/Draft_Dimension "Draft Dimension") and [labels](/Draft_Label "Draft Label")) with their ビュー**Display Mode** set to `Screen`. Set to `0` for new annotations with this property set to `World`. Defaults to `0`. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* **Mod/Draft/DimAutoFlipText** (boolean): Set to `false` to disable the automatic orientation of the text of newly created dimensions relative to the current [working plane](/Draft_SelectPlane "Draft SelectPlane"). Defaults to `true`. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* **Mod/Draft/GridHideInOtherWorkbenches** (boolean): Set to `false` to keep the [Draft grid](/Draft_ToggleGrid "Draft ToggleGrid") when switching to workbenches other than [BIM](/BIM_Workbench "BIM Workbench") or [Draft](/Draft_Workbench "Draft Workbench"). Defaults to `true`. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
* **Mod/Draft/SvgLinesBlack** (boolean): Set to `true` to convert the color white to black in SVG output. Set to `false` to keep the color white. Affects export to Flattened SVG and [TechDraw DraftViews](/TechDraw_DraftView "TechDraw DraftView"). Defaults to `true`.
* **Mod/Draft/useSupport** (boolean): Set to `true` to set the データ**Support** property of Draft objects created on a face of an exiting base object to that base object. This was standard behavior before FreeCAD version 0.19. Note that this parameter may not be supported in future versions. Defaults to `false`.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Fine-tuning/ja&oldid=1565021>"