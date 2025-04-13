---
title: Mausnavigation
---
## Überblick

Die FreeCAD **Mausnavigation** besteht aus den Befehlen zum visuellen Navigieren im 3D-Raum und zur Interaktion mit den angezeigten Objekten. FreeCAD unterstützt mehrere Mausnavigationsstile. Der standardmäßige Navigationsstil wird als [CAD-Navigation](#CAD_navigation) bezeichnet und ist sehr einfach und praktisch, jedoch bietet FreeCAD auch alternative Navigationsstile, die nach eigenen Vorlieben ausgewählt werden können. Der ausgewählte Navigationsstil wird in allen Arbeitsbereichen verwendet.

Für mehr Information über das Auswählen von Objekten siehe [Auswahlmethoden](/Selection_methods/de "Selection methods/de").

Für mehr Informationen zum Bearbeiten von Objekten siehe [Std Bewegen](/Std_TransformManip/de "Std TransformManip/de").

## Navigationsstil auswählen

1. Eine der folgenden Möglichkeiten ausführen:
   * Die Schaltfläche ![](/images/NavigationCAD_dark.svg) in der [Statusleiste](/Status_bar/de "Status bar/de") drücken.
   * Ein Rechtsklick auf einen leeren Bereich in der [3D-Ansicht](/3D_view/de "3D view/de") und **Navigationsstile** im Kontextmenü auswählen.
   * Den [Voreinstellungseditor](/Preferences_Editor/de#Navigation "Preferences Editor/de") über den Menüeintrag **Bearbeiten → Einstellungen** öffnen und dort **Anzeige → Navigation → 3D-Navigation**
2. Einen Stil in der Liste auswählen.
3. Wahlweise den **Orbit-Stil** ändern: Die Schaltfläche ![](/images/NavigationCAD_dark.svg) in der [Statusleiste](/Status_bar/de "Status bar/de") drücken und **Einstellungen → Orbit Stil** auswählen. Siehe [Voreinstellungseditor](/Preferences_Editor/de#Navigation "Preferences Editor/de").
4. Wahlweise die **Art der Drehung** ändern. Siehe [Voreinstellungseditor](/Preferences_Editor/de#Navigation "Preferences Editor/de").
5. Wenn der Navigationsstil **CAD** ausgewählt ist: Wahlweise die Einstellung **Animationen** aktivieren. Siehe [Voreinstellungseditor](/Preferences_Editor/de#Navigation "Preferences Editor/de").

## Verfügbare Navigationsstile

Für alle Navigationsstile gilt: Solange keine Objekte im Sketcher-Bearbeitungsmodus ausgewählt werden, muss immer die Strg-Taste (Ctrl-Taste) gedrückt und gehalten werden, um mehrere Objekte auszuwählen.

Die folgenden Tastatur-Optionen stehen allen Stilen zur Verfügung:

* Ctrl + ![](/images/Ascii_043.svg) and Ctrl + ![](/images/Ascii_022.svg) or PgUp and PgDn to zoom in and out, respectively.
* The arrow keys, ![](/images/Ascii_017.svg)![](/images/Ascii_016.svg)![](/images/Ascii_030.svg)![](/images/Ascii_031.svg), to pan the view left/right and up/down.
* Shift + ![](/images/Ascii_017.svg) and Shift + ![](/images/Ascii_016.svg) to rotate the view by 90 degrees.

### Blender Navigation

Der Navigationsstil Blender ist der Software [Blender](https://www.blender.org) nachempfunden.

| Auswählen | Zoomen | Ansicht drehen | Schwenken | |
| --- | --- | --- | --- | --- |
|  |  |  |  | |
|  |  |  | Shift+ |  |
| Die linke Maustaste über einem Objekt drücken, das ausgewählt werden soll. | Das Mausrad zum Anpassen der Darstellungsgröße (Zoom) verwenden. | Die mittlere Maustaste gedrückt halten und den Mauszeiger bewegen. | Shift und die mittlere Maustaste gedrückt halten und den Mauszeiger bewegen. Alternativ die linke und rechte Maustaste gedrückt halten und den Mauszeiger bewegen. | |

### CAD Navigation

Dies ist der Standard-Navigationsstil. Er ermöglicht dem Benutzer eine einfache Steuerung der Ansicht und erfordert keine Verwendung von Tastaturtasten, außer um Mehrfachauswahlen zu treffen.

| Auswählen | Zoomen | Ansicht drehen Erste Methode | Ansicht drehen Alternative Methode | Schwenken |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
| Die linke Maustaste über einem Objekt drücken, das ausgewählt werden soll. | Das Mausrad zum Anpassen der Darstellungsgröße (Zoom) verwenden. Clicking the middle mouse button re-centers the view on the location of the cursor. | Die mittlere Maustaste gedrückt halten, dann die linke Maustaste drücken und halten, dann den Mauszeiger bewegen. Werden die Tasten losgelassen, bevor die Mausbewegung gestoppt ist, wird die Drehung der Ansicht fortgesetzt, sofern dies aktiviert ist. | Die mittlere Maustaste gedrückt halten, dann die rechte Maustaste drücken und halten, dann den Mauszeiger bewegen. Mit dieser Methode kann die mittlere Maustaste losgelassen werden, wenn die rechte Maustaste gedrückt gehalten wird.  Anwender, die die Maus mit der rechten Hand benutzen, finden diese Methode möglicherweise einfacher als die erste Methode. | Die mittlere Maustaste gedrückt halten und den Mauszeiger bewegen. |
|  | Strg+Shift+ | Shift+ |  | Strg+ |
|  | Zoom mode: hold the Ctrl and Shift keys, press the right mouse button once, then move the pointer. | Rotate mode: hold the Shift key, press the right mouse button once, then move the pointer. |  | Pan mode: hold the Ctrl key, press the right mouse button once, then move the pointer. |

### Gestennavigation

Dieser Stil wurde für die Nutzung mit Touchscreen und Stift entworfen. Er kann natürlich auch mit einer Maus benutzt werden und wird auch empfohlen, wenn ein Mac mit Trackpad eingesetzt wird.

| Auswählen | Zoomen | Ansicht drehen | Schwenken | | Ansicht kippen |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | |  |
|  |  |  |  | |  |
| Die linke Maustaste über einem Objekt drücken, das ausgewählt werden soll. | Das Mausrad zum Anpassen der Darstellungsgröße (Zoom) verwenden. | Hold the left mouse button, then move the pointer. In [Sketcher](/Sketcher_Workbench "Sketcher Workbench") and other edit modes, this behavior is disabled. Hold Alt when pressing the mouse button to enter rotation mode.  Um den Fokuspunkt der Kamera für die Drehung festzulegen, mit der mittleren Maustaste einen Punkt anklicken. Alternativ kann der Mauszeiger auf einen Punkt gerichtet und H auf der Tastatur gedrückt werden. | Die rechte Maustaste gedrückt halten und den Mauszeiger bewegen. | | Die linke und die rechte Maustaste gedrückt halten, dann den Mauszeiger seitwärts bewegen. |
|  |  |  |  |  |  |
| Tap to select. | Drag two fingers (pinch) closer or farther apart. | Mit einem Finger ziehen, um zu rotieren. Im [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") die Alt-Taste gedrückt halten. | Drag with two fingers. Oder tippen, halten und dann ziehen. Dies simuliert das Schwenken mit der rechten Maustaste. | | Die imaginäre Linie rotieren, die durch zwei Berührungspunkte gebildet wird. Diese Methode ist standardmäßig deaktiviert. Zum Aktivieren zu den Voreinstellungen unter **Bearbeiten → Einstellungen → Anzeige → Navigation** wechseln und "Touchscreen-Neige-Geste deaktivieren" deaktivieren. |

### Maya-Gestennavigation

In der Maya-Gestennavigation werden Schwenken, Zoomen und Drehen der Ansicht durch Drücken der ALT-Taste zusammen mit einer Maustaste aktiviert. Daher wird eine 3-Tasten-Maus benötigt. Es ist auch möglich, Gesten zu verwenden, da dieser Stil über den Stil [Gestennavigation](#Gestennavigation) entwickelt wurde.

| Auswählen | Zoomen | | Ansicht drehen | Schwenken | Ansicht kippen |
| --- | --- | --- | --- | --- | --- |
|  |  | |  |  |  |
|  |  | Alt+ | Alt+ | Alt+ | Alt+ |
| Die linke Maustaste über einem Objekt drücken, das ausgewählt werden soll. | Das Mausrad zum Anpassen der Darstellungsgröße (Zoom) verwenden. Alternativ Alt und die rechte Maustaste gedrückt halten und dann den Mauszeiger bewegen. | | Alt und die mittlere Maustaste gedrückt halten und dann den Mauszeiger bewegen. | Alt und die mittlere Maustaste gedrückt halten und dann den Mauszeiger bewegen. | Alt, die linke und die rechte Maustaste gedrückt halten und dann den Mauszeiger seitwärts bewegen. |

### OpenCascade - Navigation

Der Navigationsstil OpenCascade wurde gemäß [OpenCascade](https://www.opencascade.com/) gestaltet.

| Auswählen | Zoomen | | Ansicht drehen | | Schwenken | |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | |  | |  | |
|  |  | Strg+ |  | Strg+ |  | Strg+ |
| Die linke Maustaste über einem Objekt drücken, das ausgewählt werden soll. | Das Mausrad zum Anpassen der Darstellungsgröße (Zoom) verwenden. Alternativ Shift und die linke Maustaste gedrückt gehalten und dann den Mauszeiger bewegen. | | Die mittlere Maustaste gedrückt halten, dann die rechte Maustaste drücken und halten, dann den Mauszeiger bewegen. Alternativ Shift und die rechte Maustaste gedrückt gehalten und dann den Mauszeiger bewegen. | | Die mittlere Maustaste drücken und den Mauszeiger bewegen. Es kann auch Strg gedrückt gehalten werden. | |

### OpenInventor Navigation

Die OpenInventor - Navigation (ehemals Inventor) wurde gemäß [Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor) gestaltet. Um Objekte auszuwählen, muss (Shift) (Umschalttaste) oder Strg gedrückt gehalten werden.

Dieser Stil basiert nicht auf Autodesk Inventor.

| Auswählen | Zoomen | | Ansicht drehen | Schwenken |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
| Shift+ |  |  |  |  |
| Shift gedrückt halten, dann die linke Maustaste über dem Objekt drücken, das ausgewählt werden soll. Stattdessen Strg gedrückt halten, um mehrere Objekte zu markieren. | Das Mausrad zum Anpassen der Darstellungsgröße (Zoom) verwenden. Alternativ die mittlere Maustaste gedrückt halten, dann die linke Maustaste drücken und halten, dann den Mauszeiger bewegen. | | Die linke Maustaste gedrückt halten und den Mauszeiger bewegen. | Die mittlere Maustaste gedrückt halten und den Mauszeiger bewegen. |

### OpenSCAD Navigation

Die OpenSCAD Navigation wurde gemäß [OpenSCAD](https://openscad.org/) gestaltet.

| Auswählen | Zoomen | | | Ansicht drehen | | Schwenken |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | | |  | |  |
|  |  |  | Shift+ |  |  |  |
| Die linke Maustaste über einem Objekt drücken, das ausgewählt werden soll. 0.21 und davor Strg-Taste (Ctrl) und Umschalttaste (Shift) gedrückt halten, wenn die Maustaste gedrückt wird, um ein Objekt im Sketcher-Bearbeitungsmodus zu ziehen. | Das Mausrad zum Anpassen der Darstellungsgröße (Zoom) verwenden. Alternativ die mittlere Maustaste gedrückt halten und den Mauszeiger bewegen.  Alternativ Umschalttaste (Shift) und die rechte Maustaste gedrückt halten und den Mauszeiger bewegen. | | | Die linke Maustaste gedrückt halten und den Mauszeiger bewegen. Alternativ und wenn sich eine Skizze im Bearbeitungsmodus befindet: Die mittlere Maustaste gedrückt halten, dann die rechte Maustaste drücken und halten, dann den Mauszeiger bewegen. | | Die rechte Maustaste gedrückt halten und den Mauszeiger bewegen. |

### Revit Navigation

Der Revit Navigationsstil basiert auf [Revit](https://de.wikipedia.org/wiki/Revit).

| Auswählen | Zoomen | Ansicht drehen | | Schwenken | |
| --- | --- | --- | --- | --- | --- |
|  |  |  | |  | |
|  |  | Shift+ |  |  |  |
| Die linke Maustaste über einem Objekt drücken, das ausgewählt werden soll. | Das Mausrad zum Anpassen der Darstellungsgröße (Zoom) verwenden. | Shift und die mittlere Maustaste gedrückt halten und den Mauszeiger bewegen. Alternativ die mittlere Maustaste gedrückt halten, dann die rechte Maustaste drücken und halten, dann den Mauszeiger bewegen. | | Die mittlere Maustaste gedrückt halten und den Mauszeiger bewegen. Alternativ die linke und rechte Maustaste gedrückt halten und den Mauszeiger bewegen. | |

### SolidWorks navigation

[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

The SolidWorks navigation style was modeled after [SolidWorks](https://en.wikipedia.org/wiki/SolidWorks).

| Select | Zoom | | Rotate view | Pan |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
|  |  | Shift+ |  | Ctrl+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold Shift and the middle mouse button, then move the pointer.  Clicking the middle mouse button re-centers the view on the location of the cursor. | | Hold the middle mouse button, then move the pointer. | Hold Ctrl and the middle mouse button, then move the pointer. |

### TinkerCAD Navigation

Der TinkerCAD-Navigationsstil basiert auf [TinkerCAD](https://en.wikipedia.org/wiki/Tinkercad).

| Auswählen | Zoomen | Ansicht drehen | Schwenken |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
| Die linke Maustaste über einem Objekt drücken, das ausgewählt werden soll. | Das Mausrad zum Anpassen der Darstellungsgröße (Zoom) verwenden. | Die rechte Maustaste drücken und den Mauszeiger bewegen. | Die mittlere Maustaste gedrückt halten und den Mauszeiger bewegen. |

### Touchpad Navigation

Für den Navigationsstil Tastfläche (touchpad) erfordern das Schwenken, Zoomen und Drehen der Ansicht das Drücken einer Erweiterungstaste mit dem Touchpad. Dieser Stil kann auch mit einer Maus verwendet werden

| Auswählen | Zoomen | Ansicht drehen | | Schwenken |
| --- | --- | --- | --- | --- |
|  |  |  | |  |
|  | Strg+Shift+ | Alt+ | Shift+ | Shift+ |
| Die linke Maustaste über einem Objekt drücken, das ausgewählt werden soll. | Strg und Shift gedrückt gehalten und dann den Mauszeiger bewegen. | Alt gedrückt halten und dann dann den Mauszeiger bewegen. Alternativ Shift und die linke Maustaste gedrückt gehalten und dann den Mauszeiger bewegen. | | Shift gedrückt halten und den Mauszeiger bewegen. |

## Hardware support

FreeCAD unterstützt auch einige [3D-Eingabegeräte](/3D_input_devices/de "3D input devices/de").

## Empfohlene Navigation unter macOS

Auf MacBooks mit einer Tastfläche (trackpad) funktioniert die Gesture-Navigation sehr gut, jedoch haben die Gesten eine besondere Bedeutung:

* Zoom: mit zwei Fingern ziehen.
* Drehen: mit drei Fingern ziehen.
* Schwenken: Strg drücken und drei Finger verwenden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mouse_navigation/de&oldid=1552141>"