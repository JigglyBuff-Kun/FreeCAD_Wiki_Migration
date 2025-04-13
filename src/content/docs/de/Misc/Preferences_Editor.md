---
title: Voreinstellungseditor
---
## Einleitung

Zum Start des **Voreinstellungseditors** wähl man den Menüeintrag **Bearbeiten → Einstellungen...** oder ([eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")) verwendet das Tastaturkürzel Ctrl + ,. Im macOS erscheint die Menüoption **Einstellungen...** im **FreeCAD**-Menü anstatt im Bearbeitungsmenü (ersteres ist der vorgegebene Ort für Einstellungen auf dem Mac).

FreeCAD verwendet ein Arbeitsbereich-Konzept, bei dem jeder Arbeitsbereich für bestimmte Aufgaben und Funktionen zuständig ist. Ein Arbeitsbereich kann seine eigenen Voreinstellungen haben. Diese werden nur im Voreinstellungseditor angezeigt, normalerweise in einer fest zugeordneten Gruppe, wenn der Arbeitsbereich in der aktuellen FreeCAD-Sitzung geladen ist. Einige Arbeitsbereiche beinhalten zusätzliche Unterstützung für besondere Import- und Exportformate. Wenn sie dazugehörige Voreinstellungen enthalten, werden diese auf einer oder mehreren zusätzlichen Seiten in der Gruppe [Import-Export](#Import-Export) des Voreinstellungseditors angezeigt.

Um Resourcen zu schonen, lädt FreeCAD nicht automatisch alle vorhandenen Arbeitsbereich. Siehe [Arbeitsbereiche](#Arbeitsbereiche) für Weitere Informationen. Eine Liste mit Einstellungen im Zusammenhang mit Arbeitsbereichen ist unter [Einstellungen der Arbeitsbereiche](#Einstellungen_der_Arbeitsbereiche) zu finden.

Wenn kein Arbeitsbereich geladen ist, erscheinen sieben Gruppen im Voreinstellungseditor: [Allgemein](#Allgemein), [Anzeige](#Anzeige), [Arbeitsbereiche](#Arbeitsbereiche), [Python](#Python), [Addon-Manager](#Addon_Manager), [Import / Export](#Import_/_Export) und [Messen](#Messen). Weitere hinzugeladene Arbeitsbereiche mit eigenen Voreinstellungen erscheinen unter diesen.

Das Drücken der Schaltfläche Zurücksetzen in der linken unteren Ecke des Voreinstellungsdialogs öffnet ein Menü ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")) mit Optionen zum Zurücksetzen der Einstellungen auf ihre Standardwerte. Es kann die aktuelle Seit, die aktuelle Gruppe oder alle Einstellungen zurückgesetzt werden. In 0.21 und davor setzt die Schaltfläche **alle** Einstellungen zurück.

Einige fortgeschrittene Einstellungen können nur im [Parameter-Editor](/Std_DlgParameter/de "Std DlgParameter/de") geändert werden. Die Seite [Fine-tuning](/Fine-tuning/de "Fine-tuning/de") führt einige auf.

Diese Seite wurde für Version 1.0 aktualisiert.

## Allgemein

Diese Gruppe der Voreinstellungen hat standardmäßig sieben Seiten: Allgemein, Dokument, Auswahl, Cache, Benachrichtigungsbereich, Ausgabefenster und Hilfe.

In 0.21 und davor steht die siebente Seite Hilfe nur dann zur Verfügung, wenn das [Hilfe-Addon](https://github.com/FreeCAD/FreeCAD-Help) mit dem [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert wurde.

### Allgemein

![](/images/Preferences_General_Page_General.png)

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Sprache** | Sprache der Benutzeroberfläche der Anwendung. |
| **Standardeinheitensystem** | Einheitensystem für alle Bereiche der Anwendung.[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Wird als Standardwert für das [Dokumenten-Einheitensystem](/Std_ProjectInfo/de "Std ProjectInfo/de") neuer Dokumente verwendet. Das Einheitensystem des aktuellen Dokuments überschreibt das Standardeinheitensystem, solange die nächste Option nicht aktiviert wird. |
| **Projekteinheitensystem ignorieren und Standard verwenden** [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") | Wenn aktiviert, werden Projekteinheitensysteme ignoriert und überschreiben nicht das Standardeinheitensystem. |
| **Anzahl der Nachkommastellen** | Anzahl der Nachkommastellen, die für Zahlen und Maße angezeigt werden sollen. |
| **Kleinster Zollteiler** | Der kleinste Zollteiler, der für Zahlen und Maße angezeigt werden soll. Steht nur für Einheitensysteme zur Verfügung, die Zoll-Bruchwerte verwenden. |
| **Zahlenformat** | Legt das Zahlenformat fest. Optionen sind:  * **Betriebssystem**: Das vom Betriebssystem festgelegte Dezimaltrennzeichen wird verwendet. * **Ausgewählte Sprache**: Das Dezimaltrennzeichen wird entsprechend der ausgewählten Sprache von FreeCADs Benutzerschnittstelle verwendet. * **C/POSIX**: Ein Punkt wird als Dezimaltrennzeichen verwendet. |
| **Dezimaltrennzeichen ersetzen** | Wenn aktiviert, wird das Dezimaltrennzeichen des Ziffernblocks durch das in der Einstellung **Zahlenformat** festgelegte Trennzeichen ersetzt. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de"): Man beachte, dass, wenn diese Einstellung aktiviert ist, in der [Python-Konsole](/Python_console/de "Python console/de") und dem [Makro-Editor](/Std_DlgMacroExecute/de#Bearbeiten "Std DlgMacroExecute/de") immer ein ein Punkt ausgegeben wird, wenn das Dezimaltrennzeichen des Ziffernblocks verwendet wird. |
| **Thema** | Legt ein [Thema](/Interface_Customization/de#Themen "Interface Customization/de") zum Anpassen des Aussehens der Benutzerschnittstelle fest. |
| **Bildgröße in Symbolleisten** | Legt die Größe der Symbole in den Symbolleisten fest. Die Optionen sind:  * **Klein (16px)** * **Mittel (24px)** * **Groß (32px)** * **Extra Groß (48px)** |
| **Anzeige von Baumansicht und Eigenschaften-Ansicht** | Legt fest, wie die Baumansicht in der Benutzerschnittstelle dargestellt wird (Neustart erforderlich). Die Optionen sind:  * **Kombiniert**: Kombiniert die [Baumansicht](/Tree_view/de "Tree view/de") und den [Eigenschafteneditor](/Property_editor/de "Property editor/de") in einem [Fenster](/Combo_view/de "Combo view/de"). * **Eigenständig**: Teilt die Baumansicht und den Eingenschafteneditor in separate Fenster auf. |
| **Anzahl der zuletzt benutzten Dateien** | Legt fest, wie viele Dateien in der Liste der zuletzt verwendeten Dateien gelistet werden sollen. Optionally, imported files can be excluded from this list, and exported files can be included. See [Fine-tuning](/Fine-tuning "Fine-tuning"). |
| **Enable tiled background** | If checked, the background of FreeCAD's main window will by default consist of tiles of this image:  Diese Option hat nur dann einen Effekt, falls keine **Formatvorlage** ausgewählt ist.  Das Bild kann geändert werden, indem die Ordner Gui/Images im Ordner hinzufügt werden:  [%APPDATA%](https://www.howtogeek.com/318177/what-is-the-appdata-folder-in-windows/)/FreeCAD (in Windows),  $HOME/.FreeCAD (auf Linux) oder  $HOME/Library/Preferences/FreeCAD (auf macOS).  Eine Datei mit dem Namen background.png in den Ordner Images legen und diese Option deaktivieren/aktivieren, um die geänderte Datei anzuzeigen. |
| **Startbildschirm beim Starten anzeigen** | Wenn diese Option aktiviert ist, wird der Startbildschirm beim Start von FreeCAD angezeigt. Der Begrüßungsbildschirmbild kann geändert werden, indem eine Datei namens splash\_image.png in den Ordner Images} gestellt wird, der unter **Gekachelten Hintergrund aktivieren** bereits erwähnt wurde. |
| **Blinken des Eingabezeigers aktivieren** | Wenn aktiviert, wird der Textingabezeiger in der [Python-Konsole](/Python_console "Python console") und im [Makroeditor](/Std_DlgMacroExecute/de#Bearbeiten "Std DlgMacroExecute/de") blinken. |
| **Überlagerung aktivieren** [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de") | Wenn aktiviert, werden angedockte Fenster wie transparente Überlagerungen behandelt. |
| **Präferenz-Pakete** | Listet die vorhandenen [Voreinstellungspakete](/Preference_Packs/de "Preference Packs/de") und ermöglicht auch sie zu importieren, sichern, verwalten und rückzusetzen. |

### Dokument

![](/images/Preferences_General_Page_Document.png)

Auf dieser Seite kann Folgendes festgelegt werden:

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

### Auswahl

![](/images/Preferences_General_Page_Selection.png)

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Description |
| --- | --- |
| **Enable preselection** | If checked, [3D view](/3D_view "3D view") preselection is turned on and the specified color will be used for it. Preselection means that for example edges of objects will be highlighted while hovering over them with the mouse to indicate they can be selected. |
| **Enable selection** | If checked, 3D view selection is turned on and the specified color is used for it. If not checked, objects can only be selected in the [Tree view](/Tree_view "Tree view"). Note that objects created while this option is not checked will have their Ansicht**Selectable** property set to `false`. With that value they are not selectable in the 3D view, even if this option is checked again. |
| **Pick radius (px)** | Sets the area for picking elements in the [3D view](/3D_view "3D view"). Larger value makes it easier to pick things, but can make some small features impossible to select. |
| **Auto switch to the 3D view containing the selected item** | Enables the [Tree view SyncView mode](/Std_TreeSyncView "Std TreeSyncView"). |
| **Auto expand tree item when the corresponding object is selected in 3D view** | Enables the [Tree view SyncSelection mode](/Std_TreeSyncSelection "Std TreeSyncSelection"). |
| **Preselect the object in 3D view when mouse over the tree item** | Enables the [Tree view PreSelection mode](/Std_TreePreSelection "Std TreePreSelection"). |
| **Record selection in tree view in order to go back/forward using navigation button** | Enables the [Tree view RecordSelection mode](/Std_TreeRecordSelection "Std TreeRecordSelection"). |
| **Add checkboxes for selection in document tree** | Each [Tree view](/Tree_view "Tree view") item will get a checkbox. This is for example useful for selecting multiple items on a touchscreen. |

### Cache

![](/images/Preferences_General_Page_Cache.png)

Diese Eigenschaften beziehen sich auf den Cache-Ordner, in dem FreeCAD vorübergehend Dateien (temporary files) speichert

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Ort (schreibgeschützt)** | Zeigt den Pfad zum Cache-Verzeichnis. Die Schaltfläche  verwenden, um das Verzeichnis zu durchsuchen. |
| **Prüfen sie regelmäßig zum Programmstart:** | Steuert, wie oft die Ordnergöße geprüft wird. Die Auswahlmöglichkeiten sind:  * **Immer** * **Täglich** * **Wöchentlich** * **Monatlich** * **Jährlich** * **Nie** |
| **Limit der Cache-Größe:** | Nennt die maximale Größe des Ordners. Es wird angezeigt, wenn eine Prüfung durchgeführt wurde und die Größe des Ordners diesen Wert übersteigt. Die Auswahlmöglichkeiten sind:  * **100 MB** * **300 MB** * **500 MB** * **1 GB** * **2 GB** * **3 GB** |
| **Aktuelle Cache-Größe:** | Zeigt die aktuelle Ordnergröße, wenn möglich. Jetzt prüfen ´... klicken umd den Wert zu aktualisieren. |

### Benachrichtigungsbereich

![](/images/Preferences_General_Page_Notification_Area.png)

Diese Einstellungen steuern den Benachrichtigungsbereich und seine Benachrichtigungen.

Auf dieser Seite ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) kann Folgendes eingestellt werden:

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

### Ausgabefenster

![](/images/Preferences_General_Page_Report_view.png)

Diese Einstellungen steuern das Verhalten der [Ausgabefenster](/Report_view/de "Report view/de"). Dieses Fenster wird über den Menüeintrag **Ansicht → Paneele → Ausgabefenster** geöffnet.

Das Ausgabefenster verwendet dieselben Schrifteinstellungen wie der [Makroeditor](#Editor).

Auf dieser Seite kann Folgendes festgelegt werden:

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

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Description |
| --- | --- |
| **Source** | Specifies the source of the Help files. The options are:  * **FreeCAD Wiki (online)**: * **Markdown version (online)**: * **GitHub (online)**: Cannot be selected. * **Custom location**: Enter the path where the downloaded FreeCAD documentation can be found. To download the documentation select the *offline-documentation* addon from the Workbenches list in the [Addon Manager](/Std_AddonMgr "Std AddonMgr").   **Translation suffix**: For the Wiki option and the Markdown option a [language suffix](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) can be specified. Use for example `fr` for the French translation. |
| **Display** | Specifies where the documentation should be displayed. The options are:  * **In your default web browser**: The documentation is displayed in the default web browser. * **In a FreeCAD tab**: The documentation is displayed on a new tab in the [Main view area](/Main_view_area "Main view area"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Can no longer be used. * **In a separate, embeddable, dialog**: The documentation is displayed in a separate dialog. This dialog can be docked on top of the [Combo view](/Combo_view "Combo view") for example. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Can no longer be used. |
| **Custom stylesheet** | Specifies an optional custom stylesheet. Not used for the Wiki. |

## Anzeige

Diese Gruppe der Voreinstellungen enthält normalerweise sechs Seiten, 3D-Ansicht, Lichtquellen, Benutzeroberfläche, Navigation, Farben und Erweitert. Eine siebente, Netz, wird hinzugefügt, wenn der Arbeitsbereich [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") geladen wurde.

### 3D-Viewer

![](/images/Preferences_Display_Page_3D_View.png)

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Koordinatensystem in Ecke anzeigen** | Wenn aktiviert, wird das Haupkoordinatensystem in der rechten unteren Ecke der [3D-Ansicht](/3D_view/de "3D view/de") angezeigt. Die Einstellung **Relative Größe** legt die Größe der Darstellung als prozentuale Größe der Ansicht fest (das Minimum ihrer Höhe und Breite). Die **Textfarbe** legt die Farbe der Achsbeschriftung fest. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de"): Die Einstellungen **Farbe der X-Achse**, **Farbe der Y-Achse** und **Farbe der Z-Achse** legen die Farben der Achsen fest. |
| **Achsenkreuz standardmäßig anzeigen** | Wenn aktiviert, wird das Achsenkreuz standardmäßig in der [3D-Ansicht](/3D_view/de "3D view/de") angezeigt. |
| **Anzeigen der Datenrate pro Sekunde** | Wenn aktiviert, wird die für die letzte Aktion benötigte Zeit und die sich ergebende [Bildrate](https://de.wikipedia.org/wiki/Bildfrequenz) in der unteren linken Ecke der [3D-Ansicht](/3D_view/de "3D view/de") angezeigt. |
| **Software-OpenGL verwenden** | Wenn aktiviert, verwendet [OpenGL](https://en.wikipedia.org/wiki/OpenGL) die CPU anstatt der GPU. Diese Möglichkeit hilft bei der Fehlerbehebung bei Graphikkarten- und Treiberproblemen. Die Änderung dieser Möglichkeit erfordert einen Neustart der Anwendung. |
| **OpenGL VBO (Vertex Buffer Object) verwenden** | Wenn aktiviert, werden [Vertex-Buffer-Objects](https://en.wikipedia.org/wiki/Vertex_Buffer_Object) (VBO) verwendet. Ein VBO ist ein [OpenGL](https://en.wikipedia.org/wiki/OpenGL)-Bestandteil, der Methoden zum Hochladen von Vertex-Daten (Position, Normalenvektor, Farbe usw.) zur Grafikkarte bereitstellt. VBOs bieten ordentliche Performance-Gewinne, da sich die Daten eher im Grafikspeicher befinden als im Hauptspeicher und so der GPU direkt zur verarbeitung bereit stehen. Für mehr Hintergrundinformation siehe [Understanding OpenGL Objects](https://www.haroldserrano.com/blog/understanding-opengl-objects). |
| **Render Cache-Speicher** | "Render Cache" oder "Render Acceleration" wird etwas umfangreicher unter [FreeCAD assembly3 render-caching](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link#render-caching) erläutert. Es gibt drei Wahlmöglichkeiten:  * **Automatisch**: Man lässt Coin3D entscheiden, wo zwischengespeichert wird (voreingestellt). * **Verteilt**: Manuelles Einschalten des Zwischenspeichers für alle view provider root nodes. * **Zentralisiert**: Manuelles Ausschalten des Zwischenspeicher für alle view provider root nodes and only cache at the scene graph root node. Dies bietet die höchste Render-Geschwindigkeit, hat aber eine langsamere Reaktion auf alle Szenenänderungen. |
| **Kantenglättung** | Gibt an, ob und welche Art von [multisample Anti-Aliasing](https://en.wikipedia.org/wiki/Multisample_anti-aliasing) verwendet wird. |
| **Transparente Objekte** | Legt die Art des Renderns transparenter Objekte fest. Die möglichkeiten sind:  * **Einzelner Render-Durchgang**: Das Rendern wird in einem Durchgang ausgeführt (voreingestellt). Dies kann bei der Tiangulation zu Artefakten führen. Wenn diese auftreten, können sie durch die **Zusätzlicher Rückseiten-Render-Durchgang** vermieden werden. * **Zusätzlicher Rückseiten-Render-Durchgang**: Das Rendern wird in zwei Durchgängen ausgeführt. Rückwärts gerichtete Polygone werden im ersten Durchgang gerendert und vorwärts gerichtete Polygone im zweiten Durchgang. |
| **Markergröße** | Legt die Größe von [Vertizes](/Glossary/de#Vertex "Glossary/de") (Knotenpunkte) in der Arbeitsumgebung [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") fest. Der anklickbare Bereich der Punkte kann zusätzlich durch Vergrößerung des **Auswahlradius** erweitert werden . |
| **Augenabstand für Stereo-Modi** | Legt den Augenabstand für stereoskopische Projektionen fest. Der angegebene Wert ist ein Faktor, der mit der Größe der [Bounding Box](/Property_editor/de#Ansicht "Property editor/de") des aktuell dargestellten 3D-Objekts multipliziert wird. |
| **Farbe der Hintergrundbeleuchtung** | Wenn aktiviert, wird die Hintergrundbeleuchtung mit der eingestellten Farbe eingeschaltet. Die Hintergrundbeleuchtung wird beim Rendern von Flächenrückseiten eingesetzt. Normaler Weise ist sie auf Solids nicht sichtbar, außer sie werden mit einer Schnittebene (auf-)geschnitten oder wenn Flächen nicht korrekt ausgerichtet sind. Es wird nur für Objekte verwendet, deren Eigenschaft Lighting (auf der Registerkarte Ansicht) auf **One side** gesetzt ist. Wenn deaktiviert, werden die Rückseiten der Flächen dieser Objektflächen schwarz dargestellt. Die zugehörige Einstellung **Intensity** legt die Intensität der Hintergrundbeleuchtung fest. |
| **Kameratyp** | Legt die Projektionsart der Kamera fest. Die Wahlmöglichkeiten sind:  * **Perspektivische Darstellung**: Objekte werden in [perspektivischer Projektion](/Std_PerspectiveCamera/de "Std PerspectiveCamera/de") dargestellt. * **Orthogonale Darstellung**: Objekte werden in [orthogonaler Projektion](/Std_OrthographicCamera/de "Std OrthographicCamera/de") dargestellt. |

### Lichtquellen

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

![](/images/Preferences_Display_Page_Light_Sources.png)

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Description |
| --- | --- |
| **Light source** | If checked, the objects in the [3D view](/3D_view "3D view") are lit by a directional light source and the specified color will be used for it. Without this all objects appear as solid black. |
| **Intensity** | Move the slider to change the intensity of the light. |
| **Direction** | The preview shows the XY plane and a sphere, indicating the light source, connected by a line to a cone, indicating the direction. All elements in the preview, the sphere, the small cone directly attached to it, the line and the large cone, can be dragged to change the direction of the light. For more precision the direction vector can be set by specifying the **x**, **y** and **z** values or the **q0** - **q3** [quaternion](https://en.wikipedia.org/wiki/Quaternion) values. You can zoom the preview in and out with the buttons in the lower left corner. |

### Benutzeroberfläche

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

![](/images/Preferences_Display_Page_UI.png)

### Navigation

![](/images/Preferences_Display_Page_Navigation.png)

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Description |
| --- | --- |
| **Navigation cube** | If checked, the [Navigation cube](/Navigation_Cube "Navigation Cube") is shown in the [3D view](/3D_view "3D view"). **Steps by turn** defines the number of steps required for a full rotation when using the Navigation cube rotation arrows.  If **Rotate to nearest** is checked, the 3D view is rotated to the nearest most logical position, based on the current orientation of the cube, when a cube face is clicked. Else clicking a face will always result in the same rotation.  **Würfelgröße** bestimmt die Größe des Würfels.  **Farbe** setzt die Basisfarbe für alle Elemente. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")  **Corner** defines where the Navigation cube is displayed in the [3D view](/3D_view "3D view"). The options are:   * **Top left** * **Top right** * **Bottom left** * **Bottom right**   **Schriftname** legt die verwendete Schriftart für den Würfeltext fest. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")  **Opacity when inactive** Opacity of the Navigation cube when not hovered by the mouse. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") |
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

### Farben

![](/images/Preferences_Display_Page_Colors.png)

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Description |
| --- | --- |
| **Simple color** | If selected, the background of the [3D view](/3D_view "3D view") will have the specified color. |
| **Linear gradient** | If selected, the background of the [3D view](/3D_view "3D view") will have a vertical color gradient defined by the specified **Top** and **Bottom** colors. if enabled, a **Middle** color can also be specified. Press the  button ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) to switch the top and bottom colors. |
| **Radial gradient** [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21") | If selected, the background of the [3D view](/3D_view "3D view") will have a radial color gradient defined by the specified **Central** and **End** colors. if enabled, a **Midway** color can also be specified. Press the  button to switch the central and end colors. |
| **Object being edited** | Specifies the background color for objects in the tree view that are currently edited. |
| **Active container** | Specifies the background color for active containers in the tree view. For example an [active PartDesign Body](/PartDesign_Body#Active_Status "PartDesign Body") will get this color. |
| **Label text color** | The color used for the labels of the color bar. The color bar is used in the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") and [FEM Workbench](/FEM_Workbench "FEM Workbench"). |
| **Label text size** | The size of those labels. |

### Erweitert

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

![](/images/Preferences_Display_Page_Advanced.png)

### Netz

![](/images/Preferences_Display_Page_Mesh_view.png)

Diese Seite wird nur angezeigt, wenn der Arbeitsbereich [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") geladen wurde.

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Description |
| --- | --- |
| **Default mesh color** | Specifies the default face color. |
| **Default line color** | Specifies the default line color. |
| **Mesh transparency** | Specifies the default mesh transparency. |
| **Line transparency** | Specifies the default line transparency. |
| **Two-side rendering** | If checked, the default value for the Ansicht**Lighting** property is `Two side` instead of `One side`. `Two side` means the color of the interior side of faces is the same as the color of the exterior side. `One side` means their color is either the [backlight color](#3D_View), if enabled, or black. |
| **Show bounding-box for highlighted or selected meshes** | If checked, the default value for the Ansicht**Selection Style** property is `BoundBox` instead of `Shape`. `BoundBox` means a highlighted bounding box is displayed if meshes are highlighted or selected. `Shape` means the shape itself is then highlighted. |
| **Define normal per vertex** | If checked, [Phong shading](https://en.wikipedia.org/wiki/Phong_shading) is used, otherwise flat shading. Shading defines the appearance of surfaces. With flat shading the surface normals are not defined per vertex. This leads to an unrealistic appearance for curved surfaces. While Phong shading leads to a more realistic, smoother appearance. |
| **Crease angle** | The crease angle is a threshold angle between two faces. It can only be set if the option **Define normal per vertex** is used. If face angle ≥ crease angle, facet shading is used.  If face angle < crease angle, smooth shading is used. |

## Arbeitsbereiche

Diese Gruppe der Voreinstellungen hat nur eine Seite: Vorhandene Arbeitsbereiche.

### Vorhandene Arbeitsbereiche

![](/images/Preferences_Workbenches_Page_Available_Workbenches.png)

These preferences control workbench loading.

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Description |
| --- | --- |
| **Workbench list** | The list displays all installed workbenches. The list can be reordered by drag and drop ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) and sorted by right-clicking the list and selecting **Sort alphabetically** ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")). The order of the list also determines the order of the [Workbench selector](/Std_Workbench "Std Workbench").  * [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): **First checkbox in each row**: If checked, the workbench will be available in the Workbench selector in the next FreeCAD session. The start up workbench cannot be unchecked. Unchecked workbenches are moved to the bottom of the list. * **Auto-load**: If checked, the workbench will auto-load when FreeCAD starts. Loading more workbenches will make the start up slower, but switching between workbenches that have already been loaded is faster. * Load: Press this button to load the workbench in the current FreeCAD session. |
| **Start up workbench** | The workbench that is activated when FreeCAD starts. |
| **Workbench selector type** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | The options are:  * **ComboBox**: Workbenches can be selected from a dropdown list. * **TabBar**: Workbenches can be selected from a tab bar. This takes fewer clicks than the previous option, but takes up more screen space. |
| **Workbench selector items style** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | The options are:  * **Icon & Text** * **Icon** * **Text** |
| **Remember active workbench by tab** | If checked, FreeCAD will remember and restore the workbench that was active for each tab in the [Main view area](/Main_view_area "Main view area"). |

## Python

This preferences group ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) has three pages: Macro, General and Editor.

### Makro

![](/images/Preferences_Python_Page_Macro.png)

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Makros in lokaler Umgebung ausführen** | Wenn angehakt, werden durch Makros definierte Variablen als lokale Variablen erstellt, andernfalls als globale Python Variable. |
| **Makro Pfad** | Legt den Pfad zu den Makro-Dateien fest. |
| **Aufzeichnung von GUI Befehlen** | Wenn angehakt, enthält [Aufgezeichnete Makros](/Std_DlgMacroRecord/de "Std DlgMacroRecord/de") auch Benutzeroberflächenbefehle. |
| **Aufzeichnung als Kommentar** | Wenn diese Option angehakt ist, enthält [Aufgezeichnete Makros](/Std_DlgMacroRecord/de "Std DlgMacroRecord/de") auch Benutzeroberflächenbefehle, jedoch als Kommentare. Dies ist nützlich, wenn du beim Ausführen des Makros keine sichtbaren Aktionen ausführen willst, sondern sehen willst, was sichtbar getan werden könnte. |
| **Skriptbefehle in der Python Konsole anzeigen** | Wenn diese Option aktiviert ist, werden die von den Makroskripten ausgeführten Befehle in der Python Konsole angezeigt. Diese Konsole kann über den Menüeintrag **Ansicht → Paneele → Python-Konsole** geöffnet werden. |
| **Länge der Liste der aktuellen Makros** | Steuert die Anzahl der aktuellen Makros im Menu. |
| **Verknüpfungsanzahl** | Steuert die Anzahl der aktuellen Makros, denen dynamisch Kurzbefehle zugeordnet werden. |
| **Tastatur Modifikatoren** | Steuert, welche Tastatur-Modifikatoren für die Kurzbefehle verwendet werden, z.B. erstellt **Strg+Shift+** Kurzbefehle in der Form **Strg+Shift+1**, **Strg+Shift+2**, etc. |

### Allgemein

![](/images/Preferences_Python_Page_General.png)

Diese Einstellungen steuern das Verhalten der [Python-Konsole](/Python_console/de "Python console/de"). Dieses Fenster wird über den Menüeintrag **Ansicht → Paneele → Python-Konsole** geöffnet.

Beachte, dass die Farbe und Schrifteinstellungen für die Konsole auf der [Editor](#Editor/de)-Seite eingestellt werden.

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Description |
| --- | --- |
| **Enable word wrap** | If checked, words will be wrapped if they exceed the available horizontal space in the console. |
| **Enable block cursor** | If checked, the cursor will have a block shape. |
| **Save history** | If checked, Python history is saved across sessions. |
| **Python profiler interval (milliseconds)** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | The interval at which the profiler runs when there is Python code running (to keep the GUI responding). Set to 0 to disable. |
| **Path to external Python executable (optional)** | Used for package installation with pip and debugging with debugpy. Autodetected if needed and not specified. |

### Editor

![](/images/Preferences_Python_Page_Editor.png)

Diese Einstellungen steuern das Verhalten des [Makroeditors](/Std_DlgMacroExecute/de#Edit "Std DlgMacroExecute/de"). Dieser Editor kann über den Menüeintrag **Makro → Makros... → Erstellen** geöffnet werden.

Die Farb- und Schrifteinstellungen werden auch von der [Python-Konsole](/Python_console/de "Python console/de") verwendet. Die Schrifteinstellungen werden auch vom [Ausgabefenster](/Report_view/de "Report view/de") verwendet.

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Beschreibung |
| --- | --- |
| **Zeilennummern einschalten** | Wenn markiert, werden die Codezeilen nummeriert. |
| **Block-Eingabezeiger aktivieren** | Wenn aktiviert, wird der Eingabezeiger als gefülltes Rechteck dargestellt. |
| **Tabulator Größe** | Legt das Tabulatorraster (Anzahl der Leerzeichen) fest. Wenn es z.B. auf '6' gesetzt ist, wird durch Drücken von Tab zum Zeichen 7 oder 13 oder 19 usw. gesprungen, abhängig von der aktuellen Cursorposition. Diese Einstellung wird nur verwendet, wenn **Tabulatoren behalten** ausgewählt ist. |
| **Einrückungsgröße** | Legt fest, wie viele Leerzeichen eingefügt werden, wenn Tab gedrückt wird. Diese Einstellung wird nur verwendet, wenn **Einfügen Leerzeichen** ausgewählt ist. |
| **Tabulatoren behalten** | Falls ausgewählt, wird durch Drücken von Tab ein Tabulator mit dem durch **Tabulatorgröße** definierten Raster eingefügt |
| **Leerzeichen einfügen** | Falls ausgewählt, wird durch Drücken von Tab die durch **Einrückungsgröße** definierte Anzahl von Leerzeichen eingefügt |
| **Elemente anzeigen** | Legt den Codetyp fest, dem die Farb- und Schrifteinstellungen zugeordnet werden. Das Ergebnis wird im Feld **Vorschau** dargestellt. |
| **Familie** | Legt die Schriftfamilie fest, die für den gewählten Codetyp verwendet werden soll. |
| **Größe** | Legt die Schriftgröße fest, die für den gewählten Codetyp verwendet werden soll. |
| **Farbe** | Legt die Farbe fest, die für den gewählten Codetyp verwendet werden soll. |

## Addon-Manager

Diese Gruppe der Voreinstellungen hat nur eine Seite: Auswahlmöglichkeiten Addon-Manager.

### Addon manager options

![](/images/Preferences_Addon_Manager_Page_Addon_manager_options.png)

Diese Einstellungen steuern das Verhalten des [Addon-Managers](/Std_AddonMgr/de "Std AddonMgr/de").

Auf dieser Seite kann Folgendes festgelegt werden:

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

Die Import-Export-Einstellungen beeinflussen wie Dateien in FreeCAD importiert und exportiert werden. Sie sind auf der Seite [Import Export Einstellungen](/Import_Export_Preferences/de "Import Export Preferences/de") beschrieben.

## Messen

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Diese Eigenschaftengruppe hat eine einzelne Seite: Darstellung.

### Darstellung

![](/images/Preferences_Measure_Page_Appearance.png)

Auf dieser Seite kann Folgendes festgelegt werden:

| Name | Description |
| --- | --- |
| **Text size** | Specifies the size of the text in pixels. |
| **Text color** | Specifies the color of the text. |
| **Line color** | Specifies the color of the line connecting the text label with the measured element(s). |
| **Background color** | Specifies the background color of the text label. |

## Einstellungen der Arbeitsbereiche

Einstellungen für die eingebauten Arbeitsbereiche sind nachfolgend verknüpft. Diese Verknüpfungen sind auch unter [Category:Preferences](/Category:Preferences "Category:Preferences") aufgelistet. Einige Arbeitsbereiche haben keine Einstellungen.

* [Assembly-Einstellungen](/Assembly_Preferences/de "Assembly Preferences/de")
* [BIM-Einstellungen](/BIM_Preferences/de "BIM Preferences/de")
* [CAM Einstellungen](/CAM_Preferences/de "CAM Preferences/de")
* [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de")
* [FEM-Einstellungen](/FEM_Preferences/de "FEM Preferences/de")
* Inspection-Einstellungen (keine)
* [Material-Einstellungen](/Material_Preferences/de "Material Preferences/de")
* [Mesh-Design-Einstellungen](/Mesh_Workbench/de#Einstellungen "Mesh Workbench/de")
* [OpenSCAD-Einstellungen](/OpenSCAD_Preferences/de "OpenSCAD Preferences/de")
* Part-Einstellungen: der Arbeitsbereich Part verwendet auch die [PartDesign-Einstellungen](/PartDesign_Preferences/de "PartDesign Preferences/de")
* [PartDesign-Einstellungen](/PartDesign_Preferences/de "PartDesign Preferences/de")
* Points-Einstellungen (keine)
* Reverse-Engineering-Einstellungen (keine)
* Robot-Einstellungen (keine)
* [Sketcher-Einstellungen](/Sketcher_Preferences/de "Sketcher Preferences/de")
* [Spreadsheet-Einstellungen](/Spreadsheet_Preferences/de "Spreadsheet Preferences/de")
* Surface-Einstellungen (keine)
* [TechDraw-Einstellungen](/TechDraw_Preferences/de "TechDraw Preferences/de")
* Test Framework Einstellungen (keine)

## Skripten

Siehe [Std ParameterDialog](/Std_DlgParameter/de#Scripting "Std DlgParameter/de").

## Verwandt

* [Parametereditor](/Std_DlgParameter/de "Std DlgParameter/de")
* [Feinabstimmung](/Fine-tuning/de "Fine-tuning/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Preferences_Editor/de&oldid=1549939>"