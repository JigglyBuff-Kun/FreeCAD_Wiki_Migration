---
title: Seçenekler Penceresi
---
## Introduction

FreeCAD'in seçenekler sistemi, **Düzen menüsü → Seçenekler** menüsünde bulunur.

FreeCAD'in işlevselliği farklı modüllere ayrılmıştır, her modül belirli bir [tezgahın](/Workbenches "Workbenches") çalışmasından sorumludur. FreeCAD ayrıca geç yükleme adı verilen bir konsept kullanır, yani bileşenlerin yalnızca gerektiğinde yüklendiği anlamına gelir. FreeCAD araç çubuğunda bir tezgah seçtiğinizde, tezgahın ve tüm bileşenlerinin o anda yüklendiğini fark etmiş olabilirsiniz. Bu, seçenek ayarlarını içerir.

To preserve resources, FreeCAD does not automatically load all available workbenches. See [Workbenches](#Workbenches) for more information. For a list of workbench related preferences see [Workbench related preferences](#Workbench_related_preferences).

Yüklenen herhangi bir modül olmadan, genel uygulama ayarlarından ve ekran ayarlarından sorumlu olan iki yapılandırma bölümüne erişebileceksiniz.

Seçenekler ekranının sol alt köşesindeki  Reset düğmesine tıklamak, FreeCAD tercihlerinin **hepsini** varsayılan değerlerine ayarlar.

Some advanced preferences can only be changed in the [Parameter editor](/Std_DlgParameter "Std DlgParameter"). The [Fine-tuning](/Fine-tuning "Fine-tuning") page lists some of them.

This page has been updated for version 1.0.

## Genel seçenek ayarları

FreeCAD'i, tezgah yüklü olmadan başlattığınızda, minimal seçenekler penceresine sahip olursunuz. Ek modüller yükledikçe, her bir tezgahın ayrıntılarını yapılandırmanıza izin veren, seçenekler penceresinde yeni bölümler görünecektir.

In 0.21 and below the seventh page, Help, is only available if the [Help Addon](https://github.com/FreeCAD/FreeCAD-Help) has been [installed](/Std_AddonMgr "Std AddonMgr").

### Genel ayarlar

![](/images/Preferences_General_Page_General.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Language** | Language of the application's user interface. |
| **Default unit system** | Unit system for all parts of the application. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Used as the default for the [document unit system](/Std_ProjectInfo "Std ProjectInfo") of new documents. The active document's unit system overrides the default unit system unless the next option is checked. |
| **Ignore project unit system and use default** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | If checked, project unit systems are ignored and do not override the default unit system. |
| **Number of decimals** | The number of decimals that should be shown for numbers and dimensions. |
| **Minimum fractional inch** | The minimum fractional inch that should be shown for numbers and dimensions. Only available for unit systems with fractional inches. |
| **Number format** | Specifies the number format. The options are:  * **Operating system**: The decimal separator defined by the operating system is used. * **Selected language**: The decimal separator of the selected FreeCAD interface language is used. * **C/POSIX**: A point is used as the decimal separator. |
| **Substitute decimal separator** | If checked, the numerical keypad decimal separator will be substituted with the separator defined by the **Number format** setting. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): Notice that if this preference is enabled, using the numerical keypad decimal separator will always print a dot/period in the [Python console](/Python_console "Python console") and the [Macro editor](/Std_DlgMacroExecute#Edit "Std DlgMacroExecute"). |
| **Theme** | Specifies a [theme](/Interface_Customization#Themes "Interface Customization") to customize the appearance of the user interface. |
| **Size of toolbar icons** | Specifies the size of the toolbar icons. The options are:  * **Small (16px)** * **Medium (24px)** * **Large (32px)** * **Extra large (48px)** |
| **Tree view and Property view mode** | Defines how the Tree view is shown in the user interface (restart required). The options are:  * **Combined**: Combines the [Tree view](/Tree_view "Tree view") and the [Property view](/Property_editor "Property editor") into one [panel](/Combo_view "Combo view"). * **Independent**: Splits the Tree view and the Property view into separate panels. |
| **Size of recent file list** | Specifies how many files should be listed in the recent files list. Optionally, imported files can be excluded from this list, and exported files can be included. See [Fine-tuning](/Fine-tuning "Fine-tuning"). |
| **Enable tiled background** | If checked, the background of FreeCAD's main window will by default consist of tiles of this image:  This option only has an effect if no **Style sheet** is selected.  The image can be changed by adding the folders Gui/Images in the folder:  [%APPDATA%](https://www.howtogeek.com/318177/what-is-the-appdata-folder-in-windows/)/FreeCAD (on Windows),  $HOME/.FreeCAD (on Linux) or  $HOME/Library/Preferences/FreeCAD (on macOS).  Place a file named background.png in the Images folder, and uncheck/check this option to see the changed file. |
| **Enable splash screen at start up** | If checked, a splash screen is shown when starting FreeCAD. The splash screen image can be changed by placing a file named splash\_image.png in the Images folder already mentioned under **Enable tiled background**. |
| **Enable cursor blinking** | If checked the text cursor in the [Python console](/Python_console "Python console") and the [Macro editor](/Std_DlgMacroExecute#Edit "Std DlgMacroExecute") will blink. |
| **Activate overlay handling** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | If checked, docked windows can be handled as transparent overlays. |
| **Preference packs** | Lists the available [preference packs](/Preference_Packs "Preference Packs") and also allows you to import, save, manage and revert them. |

### Belge ayarları

![](/images/Preferences_General_Page_Document.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Create new document at start up** | If checked, FreeCAD will create a new document when started. |
| **Document save compression level** | Specifies the compression level for FCStd files. FCStd files are ZIP-compressed files. Therefore you can rename their suffix .FCStd to .zip and open them with a ZIP archive program. |
| **Using Undo/Redo on documents** | If checked, all changes in documents are stored so that they can be undone/redone. |
| **Maximum Undo/Redo steps** | Specifies how many Undo/Redo steps should be recorded. |
| **Allow aborting recomputation** | If checked, recomputations can be aborted by pressing Esc. This may slightly increase the recomputation time. |
| **Run AutoRecovery at startup** | If there is a recovery file available FreeCAD will automatically run a file recovery when it is started. This way files can be restored if a crash occurred. |
| **Save AutoRecovery information every** | Specifies how often a recovery file is written. |
| **Save thumbnail into project file when saving document** | If checked, a thumbnail will be stored when the document is saved. The thumbnail will for example be shown in the list of recent files on the Start page. It is possible to select a **Size** between 128×128 and 512×512 pixels for the thumbnail. Common sizes are powers of two: 128, 256, 512. |
| **Add the program logo to the generated thumbnail** | If checked, the FreeCAD program logo  will be added to the thumbnail. |
| **Maximum number of backup files to keep when resaving document** | If checked, backup files will be kept when saving the document. You can specify the number of backup files to keep. Backup files are previously saved versions of the document. |
| **Use date and FCBak extension** | If checked, backup files will get the extension .FCbak and their file names get a date suffix according to the specified **Date format**. For a description of the date format see [Date & time formats cheatsheet](https://devhints.io/datetime). With the default settings a backup file will for example get this name TD-Cube.20200315-215654.FCBak (original filename is TD-Cube.FCStd). |
| **Allow duplicate object labels in one document** | If checked, objects can have the same label. |
| **Disable partial loading of external linked objects** | If partial loading of external linked objects is enabled, only the referenced objects and their dependencies will be loaded when the linked document is auto opened together with the main document. Such a partially loaded document cannot be edited. Double click the document icon in the tree view to reload it in full. A more detailed explanation of this feature can be found on the [Assembly3 documentation page](https://github.com/realthunder/FreeCAD_assembly3/wiki/Core-Changes#partial-document-loading). |
| **Author name** | All created documents will get the specified author name. Keep the author field blank if you do not want to include this information. If the option **Set on save** is checked, the field **Last modified by** will be set to the specified author when saving the file. This field can be viewed using the **File → Project information** menu option. |
| **Company** | All created documents will get the specified company name. |
| **Default license** | Specifies the license for new documents. For predefined licenses the **License URL** will automatically be set accordingly. Select **Other** for a custom license. |
| **License URL** | Specifies an URL describing the license selected in **Default license**. |

### Selection

![](/images/Preferences_General_Page_Selection.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Enable preselection** | If checked, [3D view](/3D_view "3D view") preselection is turned on and the specified color will be used for it. Preselection means that for example edges of objects will be highlighted while hovering over them with the mouse to indicate they can be selected. |
| **Enable selection** | If checked, 3D view selection is turned on and the specified color is used for it. If not checked, objects can only be selected in the [Tree view](/Tree_view "Tree view"). Note that objects created while this option is not checked will have their Görünüm**Selectable** property set to `false`. With that value they are not selectable in the 3D view, even if this option is checked again. |
| **Pick radius (px)** | Sets the area for picking elements in the [3D view](/3D_view "3D view"). Larger value makes it easier to pick things, but can make some small features impossible to select. |
| **Auto switch to the 3D view containing the selected item** | Enables the [Tree view SyncView mode](/Std_TreeSyncView "Std TreeSyncView"). |
| **Auto expand tree item when the corresponding object is selected in 3D view** | Enables the [Tree view SyncSelection mode](/Std_TreeSyncSelection "Std TreeSyncSelection"). |
| **Preselect the object in 3D view when mouse over the tree item** | Enables the [Tree view PreSelection mode](/Std_TreePreSelection "Std TreePreSelection"). |
| **Record selection in tree view in order to go back/forward using navigation button** | Enables the [Tree view RecordSelection mode](/Std_TreeRecordSelection "Std TreeRecordSelection"). |
| **Add checkboxes for selection in document tree** | Each [Tree view](/Tree_view "Tree view") item will get a checkbox. This is for example useful for selecting multiple items on a touchscreen. |

### Cache

![](/images/Preferences_General_Page_Cache.png)

These preferences are related to the cache directory where FreeCAD stores temporary files.

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Location (read-only)** | Shows the path of the cache directory. Use the  button to browse the directory. |
| **Check periodically at program start** | Controls the frequency with which the directory size is checked. The options are:  * **Always** * **Daily** * **Weekly** * **Monthly** * **Yearly** * **Never** |
| **Cache size limit** | Specifies the maximum size of the directory. You will be notified if a check is performed and the size exceeds this value. The options are:  * **100 MB** * **300 MB** * **500 MB** * **1 GB** * **2 GB** * **3 GB** |
| **Current cache size** | Shows the current size of the directory, if available. Press the Check now... button to update the value. |

### Notification Area

![](/images/Preferences_General_Page_Notification_Area.png)

These preferences control the Notification Area and its notifications.

On this page ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) you can specify the following:

| Name | Description |
| --- | --- |
| **Enable Notification Area** | If checked, the Notification Area will appear in the status bar. |
| **Enable non-intrusive notifications** | If checked, non-intrusive notifications will appear next to the Notification Area in the status bar. |
| **Debug errors** | If checked, errors intended for developers will appear in the Notification Area. |
| **Debug warnings** | If checked, warnings intended for developers will appear in the Notification Area. |
| **Maximum Duration** | Maximum duration during which notifications are shown (unless mouse buttons are clicked). |
| **Minimum Duration** | Minimum duration (idem). |
| **Maximum Number of Notifications** | Maximum number of notifications shown simultaneously. |
| **Notification width** | Width of the Notification Area in pixels. |
| **Hide when other window is activated** | If checked, open notifications will disappear when another window is activated. |
| **Do not show when inactive** | If checked, notifications will not appear if the FreeCAD window is not the active window. |
| **Maximum Messages (0 = no limit)** | The maximum number of messages kept in the list. Set to 0 for no limit. |
| **Auto-remove User Notifications** | If checked, notifications will be removed from the message list when the **Maximum Duration** has elapsed. |

### Report view

![](/images/Preferences_General_Page_Report_view.png)

These preferences control the behavior of the [Report view](/Report_view "Report view"). This panel can be opened using the **View → Panels → Report view** menu option.

The Report view uses the same font settings as the [Macro editor](#Editor).

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Record normal messages** | If checked, normal messages will be recorded. They will be displayed in the [Report view](/Report_view "Report view") with the color set in **Normal messages**. |
| **Record log messages** | If checked, log messages will be recorded. They will be displayed in the [Report view](/Report_view "Report view") with the color set in **Log messages**. |
| **Record warnings** | If checked, warnings will be recorded. They will be displayed in the [Report view](/Report_view "Report view") with the color set in **Warnings**. |
| **Record error messages** | If checked, error messages will be recorded. They will be displayed in the [Report view](/Report_view "Report view") with the color set in **Errors**. |
| **Show report view on error** | If checked, the [Report view](/Report_view "Report view") will be shown automatically when an error is recorded. |
| **Show report view on warning** | If checked, the [Report view](/Report_view "Report view") will be shown automatically when a warning is recorded. |
| **Show report view on normal message** | If checked, the [Report view](/Report_view "Report view") will be shown automatically when a normal message is recorded. |
| **Show report view on log message** | If checked, the [Report view](/Report_view "Report view") will be shown automatically when a log message is recorded. |
| **Include a timecode for each entry** | If checked, each message and warning will receive a timecode. |
| **Normal messages** | Specifies the font color for normal messages. |
| **Log messages** | Specifies the font color for log messages. |
| **Warnings** | Specifies the font color for warning messages. |
| **Errors** | Specifies the font color for error messages. |
| **Redirect internal Python output to report view** | If checked, internal Python output will be redirected from the [Python console](/Python_console "Python console") to the [Report view](/Report_view "Report view"). |
| **Redirect internal Python errors to report view** | If checked, internal Python error messages will be redirected from the [Python console](/Python_console "Python console") to the [Report view](/Report_view "Report view"). |

### Help

![](/images/Preferences_General_Page_Help.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Source** | Specifies the source of the Help files. The options are:  * **FreeCAD Wiki (online)**: * **Markdown version (online)**: * **GitHub (online)**: Cannot be selected. * **Custom location**: Enter the path where the downloaded FreeCAD documentation can be found. To download the documentation select the *offline-documentation* addon from the Workbenches list in the [Addon Manager](/Std_AddonMgr "Std AddonMgr").   **Translation suffix**: For the Wiki option and the Markdown option a [language suffix](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) can be specified. Use for example `fr` for the French translation. |
| **Display** | Specifies where the documentation should be displayed. The options are:  * **In your default web browser**: The documentation is displayed in the default web browser. * **In a FreeCAD tab**: The documentation is displayed on a new tab in the [Main view area](/Main_view_area "Main view area"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Can no longer be used. * **In a separate, embeddable, dialog**: The documentation is displayed in a separate dialog. This dialog can be docked on top of the [Combo view](/Combo_view "Combo view") for example. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Can no longer be used. |
| **Custom stylesheet** | Specifies an optional custom stylesheet. Not used for the Wiki. |

## Ekran ayarları

This preferences group has six standard pages: 3D View, Light Sources, UI, Navigation, Colors and Advanced. A seventh page, Mesh view, is added if the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") has been loaded.

### 3D View

![](/images/Preferences_Display_Page_3D_View.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Show coordinate system in the corner** | If checked, the main coordinate system will be shown in the lower right corner of the [3D view](/3D_view "3D view"). The **Relative size** defines the size of the representation as a percentage of the view size (the minimum of its height and width). The **Letter color** defines the color of the axis letters. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): The **X-axis color**, **Y-axis color** and **Z-axis color** define the colors of the axes. |
| **Show axis cross by default** | If checked, the axis cross will be shown by default in the [3D view](/3D_view "3D view"). |
| **Show counter of frames per second** | If checked, the time needed for the last operation and the resulting [frame rate](https://en.wikipedia.org/wiki/Frame_rate) will be shown in the lower left corner of the [3D view](/3D_view "3D view"). |
| **Use software OpenGL** | If checked, [OpenGL](https://en.wikipedia.org/wiki/OpenGL) will use the CPU instead of the GPU. This option is useful for troubleshooting graphics card and driver problems. Changing this option requires a restart of the application. |
| **Use OpenGL VBO (Vertex Buffer Object)** | If checked, [Vertex Buffer Objects](https://en.wikipedia.org/wiki/Vertex_Buffer_Object) (VBO) will be used. A VBO is an [OpenGL](https://en.wikipedia.org/wiki/OpenGL) feature that provides methods for uploading vertex data (position, normal vector, color, etc.) to the graphics card. VBOs offer substantial performance gains because the data resides in the graphics memory rather than the system memory and so it can be rendered directly by the GPU. For more background info see [Understanding OpenGL Objects](https://www.haroldserrano.com/blog/understanding-opengl-objects). |
| **Render Cache** | "Render Cache" or "Render Acceleration" is explained in more detail in [FreeCAD assembly3 render-caching](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link#render-caching). The options are:  * **Auto**: Let Coin3D decide where to cache (default). * **Distributed**: Manually turn on cache for all view provider root nodes. * **Centralized**: Manually turn off cache in all nodes of all view providers, and only cache at the scene graph root node. This offers the fastest rendering speed, but slower response to any scene changes. |
| **Anti-Aliasing** | Specifies if and what type of [multisample anti-aliasing](https://en.wikipedia.org/wiki/Multisample_anti-aliasing) is used |
| **Transparent objects** | Specifies the render type of transparent objects. The options are:  * **One pass**: Rendering is done in one pass (default). This can lead to triangular artifacts. If these occur the type **Backface pass** can be used to avoid them. * **Backface pass**: Rendering is done in two passes. Back-facing polygons are rendered in the first pass and front-facing polygons in the second pass. |
| **Marker size** | Specifies the size of [vertices](/Glossary#Vertex "Glossary") (points) in the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"). The clickable area of points can be additionally enlarged by increasing the **Pick radius**. |
| **Eye to eye distance for stereo modes** | Specifies the eye-to-eye distance used for stereo projections. The specified value is a factor that will be multiplied with the [bounding box](/Property_editor#View "Property editor") size of the 3D object that is currently displayed. |
| **Backlight color** | If checked, backlight is enabled with the defined color. Backlight is used for rendering the back sides of faces. Usually, you don't see them in solids, unless you slice one with a clipping plane, or if the faces aren't oriented correctly. It is only used for objects whose Lighting property (on the View tab) is set to **One side**. If disabled, the back side of the faces of those objects will be black. The related **Intensity** setting specifies the intensity of the backlight. |
| **Camera type** | Specifies the camera projection type. The options are:  * **Perspective rendering**: Objects will appear in a [perspective projection](/Std_PerspectiveCamera "Std PerspectiveCamera"). * **Orthographic rendering**: Objects will be appear in an [orthographic projection](/Std_OrthographicCamera "Std OrthographicCamera"). |

### Light Sources

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

![](/images/Preferences_Display_Page_Light_Sources.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Light source** | If checked, the objects in the [3D view](/3D_view "3D view") are lit by a directional light source and the specified color will be used for it. Without this all objects appear as solid black. |
| **Intensity** | Move the slider to change the intensity of the light. |
| **Direction** | The preview shows the XY plane and a sphere, indicating the light source, connected by a line to a cone, indicating the direction. All elements in the preview, the sphere, the small cone directly attached to it, the line and the large cone, can be dragged to change the direction of the light. For more precision the direction vector can be set by specifying the **x**, **y** and **z** values or the **q0** - **q3** [quaternion](https://en.wikipedia.org/wiki/Quaternion) values. You can zoom the preview in and out with the buttons in the lower left corner. |

### UI

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

![](/images/Preferences_Display_Page_UI.png)

### Navigation

![](/images/Preferences_Display_Page_Navigation.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Navigation cube** | If checked, the [Navigation cube](/Navigation_Cube "Navigation Cube") is shown in the [3D view](/3D_view "3D view"). **Steps by turn** defines the number of steps required for a full rotation when using the Navigation cube rotation arrows.  If **Rotate to nearest** is checked, the 3D view is rotated to the nearest most logical position, based on the current orientation of the cube, when a cube face is clicked. Else clicking a face will always result in the same rotation.  **Cube size** defines the size of the cube.  **Color** sets the base color for all elements. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")  **Corner** defines where the Navigation cube is displayed in the [3D view](/3D_view "3D view"). The options are:   * **Top left** * **Top right** * **Bottom left** * **Bottom right**   **Font name** specifies the font used for the cube's texts. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")  **Opacity when inactive** Opacity of the Navigation cube when not hovered by the mouse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") |
| **Rotation center indicator** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | If checked, the rotation center of the view is shown when dragging. The **Sphere size** and the **Color and transparency** of the indicator can be specified. |
| **3D Navigation** | Specifies a [mouse navigation style](/Mouse_navigation "Mouse navigation"). To see the details of each style, select it and then press the Mouse... button. |
| **Orbit style** | Specifies the rotation orbit style used when in rotation mode. The options are:  * **Turntable**: Moving the mouse will divide the rotation in steps, rotations around the different axes are performed sequentially. * **Trackball**: Rotations around the different axes are performed simultaneously. * **Free Turntable**: Like **Trackball**, but if possible the rotation axis is kept collinear with the global 3D view axis. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| **Rotation mode** | Defines the rotation center. The options are:  * **Window center** * **Drag at cursor** * **Object center** |
| **Default camera orientation** | Specifies the camera orientation for new documents. This setting is also used by the [Std ViewHome](/Std_ViewHome "Std ViewHome") command. |
| **Camera zoom** | Affects the initial camera zoom level for new documents. The value you set is the diameter of a sphere that fits in the [3D view](/3D_view "3D view"). The default is 100 mm. It also sets the initial size of origin features (base planes in new [PartDesign Bodies](/PartDesign_Body "PartDesign Body") and [Std Parts](/Std_Part "Std Part")). |
| **Zoom at cursor** | If checked, zoom operations will be performed at the position of the mouse pointer. Otherwise zoom operations will be performed at the center of the current view. The **Zoom step** defines how much will be zoomed. A zoom step of **1** means a factor of 7.5 for every zoom step. |
| **Invert zoom** | If checked, the direction of zoom operations will be inverted. |
| **Disable touchscreen tilt gesture** | If checked, and **3D Navigation** is set to **Gesture**, the tilting gesture will be disabled for pinch-zooming (two-finger zooming). |
| **Enable support of legacy space mouse devices** [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1") | If checked, legacy space mouse devices can be used. May be backported to version 1.0.1. |
| **Animations** | If checked, view rotations and zooms, except those invoked by mouse actions, are animated. The **Animation duration** can be specified. **Enable spinning animations** if checked, and if **3D Navigation** is set to **CAD**, rotations invoked by the mouse can be animated as well. If the mouse is moved while the scroll wheel and the right mouse button are pressed, the view is rotated. If one keeps the mouse moving while releasing the right mouse button, the rotation will continue. To end this animation left-click with the mouse. |

### Renk ayarları

![](/images/Preferences_Display_Page_Colors.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Simple color** | If selected, the background of the [3D view](/3D_view "3D view") will have the specified color. |
| **Linear gradient** | If selected, the background of the [3D view](/3D_view "3D view") will have a vertical color gradient defined by the specified **Top** and **Bottom** colors. if enabled, a **Middle** color can also be specified. Press the  button ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) to switch the top and bottom colors. |
| **Radial gradient** [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | If selected, the background of the [3D view](/3D_view "3D view") will have a radial color gradient defined by the specified **Central** and **End** colors. if enabled, a **Midway** color can also be specified. Press the  button to switch the central and end colors. |
| **Object being edited** | Specifies the background color for objects in the tree view that are currently edited. |
| **Active container** | Specifies the background color for active containers in the tree view. For example an [active PartDesign Body](/PartDesign_Body#Active_Status "PartDesign Body") will get this color. |
| **Label text color** | The color used for the labels of the color bar. The color bar is used in the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") and [FEM Workbench](/FEM_Workbench "FEM Workbench"). |
| **Label text size** | The size of those labels. |

### Advanced

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

![](/images/Preferences_Display_Page_Advanced.png)

### Mesh view

![](/images/Preferences_Display_Page_Mesh_view.png)

This page is only available if the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") has been loaded.

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Default mesh color** | Specifies the default face color. |
| **Default line color** | Specifies the default line color. |
| **Mesh transparency** | Specifies the default mesh transparency. |
| **Line transparency** | Specifies the default line transparency. |
| **Two-side rendering** | If checked, the default value for the Görünüm**Lighting** property is `Two side` instead of `One side`. `Two side` means the color of the interior side of faces is the same as the color of the exterior side. `One side` means their color is either the [backlight color](#3D_View), if enabled, or black. |
| **Show bounding-box for highlighted or selected meshes** | If checked, the default value for the Görünüm**Selection Style** property is `BoundBox` instead of `Shape`. `BoundBox` means a highlighted bounding box is displayed if meshes are highlighted or selected. `Shape` means the shape itself is then highlighted. |
| **Define normal per vertex** | If checked, [Phong shading](https://en.wikipedia.org/wiki/Phong_shading) is used, otherwise flat shading. Shading defines the appearance of surfaces. With flat shading the surface normals are not defined per vertex. This leads to an unrealistic appearance for curved surfaces. While Phong shading leads to a more realistic, smoother appearance. |
| **Crease angle** | The crease angle is a threshold angle between two faces. It can only be set if the option **Define normal per vertex** is used. If face angle ≥ crease angle, facet shading is used.  If face angle < crease angle, smooth shading is used. |

## Workbenches

This preferences group has a single page: Available Workbenches.

### Available Workbenches

![](/images/Preferences_Workbenches_Page_Available_Workbenches.png)

These preferences control workbench loading.

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Workbench list** | The list displays all installed workbenches. The list can be reordered by drag and drop ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) and sorted by right-clicking the list and selecting **Sort alphabetically** ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")). The order of the list also determines the order of the [Workbench selector](/Std_Workbench "Std Workbench").  * [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): **First checkbox in each row**: If checked, the workbench will be available in the Workbench selector in the next FreeCAD session. The start up workbench cannot be unchecked. Unchecked workbenches are moved to the bottom of the list. * **Auto-load**: If checked, the workbench will auto-load when FreeCAD starts. Loading more workbenches will make the start up slower, but switching between workbenches that have already been loaded is faster. * Load: Press this button to load the workbench in the current FreeCAD session. |
| **Start up workbench** | The workbench that is activated when FreeCAD starts. |
| **Workbench selector type** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | The options are:  * **ComboBox**: Workbenches can be selected from a dropdown list. * **TabBar**: Workbenches can be selected from a tab bar. This takes fewer clicks than the previous option, but takes up more screen space. |
| **Workbench selector items style** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | The options are:  * **Icon & Text** * **Icon** * **Text** |
| **Remember active workbench by tab** | If checked, FreeCAD will remember and restore the workbench that was active for each tab in the [Main view area](/Main_view_area "Main view area"). |

## Python

This preferences group ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) has three pages: Macro, General and Editor.

### Makro ayarları

![](/images/Preferences_Python_Page_Macro.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Run macros in local environment** | If checked, variables defined by macros are created as local variables, otherwise as global Python variables. |
| **Macro path** | Specifies the path for macro files. |
| **Record GUI commands** | If checked, [recorded macros](/Std_DlgMacroRecord "Std DlgMacroRecord") will also contain user interface commands. |
| **Record as comment** | If checked, [recorded macros](/Std_DlgMacroRecord "Std DlgMacroRecord") will also contain user interface commands, but as comments. This is useful if you don't want to execute these commands when running the macro, but do want to see what has been done while recording. |
| **Show script commands in python console** | If checked, the commands executed by macro scripts are shown in the Python console. This console can be opened using the **View → Panels → Python console** menu option. |
| **Size of recent macro list** | Controls the number of recent macros to display in the menu. |
| **Shortcut count** | Controls the number of recent macros that get dynamically assigned shortcuts. |
| **Keyboard Modifiers** | Controls which keyboard modifiers are used for the shortcuts, example **Ctrl+Shift+** creates shortcuts in the form of **Ctrl+Shift+1**, **Ctrl+Shift+2**, etc. |

### General

![](/images/Preferences_Python_Page_General.png)

These preferences control the behavior of the [Python console](/Python_console "Python console"). This console can be opened using the **View → Panels → Python console** menu option.

Note that the color and font settings for the console are defined on the [Editor](#Editor) page.

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Enable word wrap** | If checked, words will be wrapped if they exceed the available horizontal space in the console. |
| **Enable block cursor** | If checked, the cursor will have a block shape. |
| **Save history** | If checked, Python history is saved across sessions. |
| **Python profiler interval (milliseconds)** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | The interval at which the profiler runs when there is Python code running (to keep the GUI responding). Set to 0 to disable. |
| **Path to external Python executable (optional)** | Used for package installation with pip and debugging with debugpy. Autodetected if needed and not specified. |

### Seçenekler penceresi ayarları

![](/images/Preferences_Python_Page_Editor.png)

These preferences control the behavior of the [Macro editor](/Std_DlgMacroExecute#Edit "Std DlgMacroExecute"). This editor can be opened using the **Macro → Macros... → Edit** or **Create** menu option.

The color and font settings are also used by the [Python console](/Python_console "Python console"). The font settings are also used by the [Report view](/Report_view "Report view").

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Enable line numbers** | If checked, the code lines will be numbered. |
| **Enable block cursor** | If checked, the cursor will have a block shape. |
| **Tab size** | Specifies the tabulator raster (how many spaces). If it is for example set to **6**, pressing Tab will jump to character 7 or 13 or 19 etc., depending on the current cursor position. This setting is only used if **Keep tabs** is selected. |
| **Indent size** | Specifies how many spaces will be inserted when pressing Tab. This setting is only used if **Insert spaces** is selected. |
| **Keep tabs** | If selected, pressing Tab will insert a tabulator with the raster defined by **Tab size**. |
| **Insert spaces** | If selected, pressing Tab will insert the amount of spaces defined by **Indent size**. |
| **Display Items** | Specifies the code type the color and font settings will be applied to. The result can be checked in the **Preview** field. |
| **Family** | Specifies the font family that should be used for the selected code type. |
| **Size** | Specifies the font size that should be used for the selected code type. |
| **Color** | Specifies the color that should be used for the selected code type. |

## Addon Manager

This preferences group has a single page: Addon manager options.

### Addon manager options

![](/images/Preferences_Addon_Manager_Page_Addon_manager_options.png)

These preferences control the behavior of the [Addon manager](/Std_AddonMgr "Std AddonMgr").

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Automatically check for updates at start (requires git)** | If checked, the Addon manager will check for updates when it is launched. Git must be installed for this to work. |
| **Download Macro metadata (approximately 10MB)** | If checked, macro metadata is downloaded for display in the Addon manager's main addon listing. This data is cached locally. |
| **Cache update frequency** | Controls the frequency with which the locally cached addon availability and metadata information is updated. The options are:  * **Manual (no automatic updates)** * **Daily** * **Weekly** |
| **Hide Addons without license** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | If checked, addons without a license are not included in the listing. |
| **Hide Addons with non-FSF Free/Libre license** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | If checked, addons with a Free/Libre license not published by the [Free Software Foundation](https://www.fsf.org/licensing) are not included in the listing. |
| **Hide Addons with non-OSI-approved license** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | If checked, addons with a license not approved by the [Open Source Initiative](https://opensource.org/licenses) are not included in the listing. |
| **Hide Addons marked Python 2 Only** | If checked, addons marked as "Python 2 Only" are not included in the listing. These addons are unlikely to work in the current FreeCAD version. |
| **Hide Addons marked Obsolete** | If checked, addons marked as "Obsolete" are not included in the listing. |
| **Hide Addons that require a newer version of FreeCAD** | If checked, addons that require a newer FreeCAD version are not included in the listing. |
| **Custom repositories** | Custom repositories can be specified here. To add a repository press the  button. Both the **Repository URL** and the **Branch**, typically `master` or `main`, must be specifies in the dialog that opens. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")  To remove a repository select it in the list and press the  button. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") |
| **Proxy** | The Addon manager includes experimental support for proxies requiring authentication, set up as user-defined proxies. |
| **Score source URL** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | The URL for the Addon Score data. See [Std AddonMgr](/Std_AddonMgr#Sorting_by_score "Std AddonMgr") for formatting and hosting details. |
| **Path to git executable (optional)** [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | The Addon manager attempts to determine the git executable. To override this selection, the path to the executable can be set here. |
| **Show option to change branches (requires git)** | If checked, the Addon manager provides an interface on the addon's details screen that allows switching which git branch is currently checked out. This is intended for advanced users only, as it is possible that a non-primary-branch version of an addon may result in instability and compatibility issues. Git must be installed for this to work. Use with caution. |
| **Disable git (fall back to ZIP downloads only)** [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | If checked, git downloads are disabled. |
| **Addon developer mode** [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | If checked, Addon manager options intended for developers of addons are activated. |

## Import-Export

The Import-Export preferences affect how files are imported and exported. They are described on the [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences") page.

## Measure

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

This preferences group has a single page: Appearance.

### Appearance

![](/images/Preferences_Measure_Page_Appearance.png)

On this page you can specify the following:

| Name | Description |
| --- | --- |
| **Text size** | Specifies the size of the text in pixels. |
| **Text color** | Specifies the color of the text. |
| **Line color** | Specifies the color of the line connecting the text label with the measured element(s). |
| **Background color** | Specifies the background color of the text label. |

## Workbench related preferences

Preferences for the built-in workbenches are linked below. These links are also listed in [Category:Preferences](/Category:Preferences "Category:Preferences"). Some workbenches have no preferences.

Taslak modülü kendi [seçenekler](/Draft_Preferences "Draft Preferences") penceresine sahiptir

## Scripting

See [Std DlgParameter](/Std_DlgParameter#Scripting "Std DlgParameter").

## Related

* [Parameter editor](/Std_DlgParameter "Std DlgParameter")
* [Fine-tuning](/Fine-tuning "Fine-tuning")

Retrieved from "<http://wiki.freecad.org/index.php?title=Preferences_Editor/tr&oldid=1542510>"