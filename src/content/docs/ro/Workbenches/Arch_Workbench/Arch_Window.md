---
title: Arch Fereastră
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- |
| Arch Window                                    |
| poziția meniului                               |
| Arch → Window                                  |
| Ateliere                                       |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură                                     |
| W I                                            |
| Prezentat în versiune                          |
| -                                              |
| A se vedea, de asemenea,                       |
| [Arch Wall](/Arch_Wall/ro "Arch Wall/ro")      |
|                                                |

## Descriere

Fereastra este un obiect de bază pentru toate tipurile de obiecte "încorporate", cum ar fi ferestrele și ușile. Este concepută să fie independentă, sau "găzduită" în interiorul unei alte componente, cum ar fi [Arch Wall](/Arch_Wall "Arch Wall"), [Arch Structure](/Arch_Structure "Arch Structure") sau [Arch Roof](/Arch_Roof "Arch Roof"). Are o geometrie proprie, care poate fi făcută din mai multe componente solide (de obicei un cadru și panouri interioare) și definește de asemenea un volum care trebuie scăzut din obiectele gazdă, pentru a crea o deschidere.

Elementele ferestrei se bazează pe obiecte 2D închise, cum ar fi [Draft Rectangles](/Draft_Rectangle "Draft Rectangle") ori [Sketches](/Sketcher_Workbench "Sketcher Workbench"), care sunt folosite pentru a defini componentele lor interioare. Obiectul de bază 2D trebuie să conțină, prin urmare, mai multe filamente închise, care pot fi combinate pentru a forma panouri umplute (un filament) sau rame (mai multe filamente).

Instrumentul Window are câteva funcții **presets**, acest lucru permite utilizatorului să creeze tipuri comune de ferestre și uși cu anumiți parametri editabili, fără a fi nevoie ca utilizatorul să creeze manual obiecte și componente de bază 2D.

Toate informațiile aplicabile unui [Arch Window](/Arch_Window "Arch Window") se aplică și pentru [Arch Door](/Arch_Door "Arch Door"), deoarece este același obiect de bază. Principala diferență dintre un Ferest și o Ușă este că Ușa are un panou interior care este arătat opac (ușa însăși), în timp ce Fereastra are un panou parțial transparent (geamul).

![](/images/Arch_Window_example2.jpg)

Complex window being constructed on top of a [Sketch](/Sketcher_Workbench "Sketcher Workbench"). When entering the window's edit mode you can create different components, set their thickness, and select and assign wires from the sketch to them.

## Cum se folosește

### Utilizarea predefinitelor

1. Opțional, selectați un obiect Arch. Dacă nu este selectat niciun obiect, fereastra va fi inserată în obiectul de sub mouse când plasați fereastra.
2. Press the ![](/images/Arch_Window.png) [Arch Window](/Arch_Window "Arch Window") button, or press W then I keys
3. Select one of the presets in the list
4. Fill out the desired parameters
5. Press the **OK** button

#### Additional presets

In addition to the default presets, the window tool can also use custom presets. A custom preset is a FreeCAD file containing a single window based on a parametric sketch that has two named constrains: `Width` and `Height`. Custom presets can be placed in the following locations:

The window tool will always search this pair of locations:

$ROOT\_DIR/Arch/Doors/Custom/  
$ROOT_DIR/Arch/Windows/Custom/

If you install the [Parts Library](/Parts_Library_Workbench "Parts Library Workbench") from the [Addon Manager](/Std_AddonMgr "Std AddonMgr"), the window tool will also search this library for additional presets at this pair of locations:

$ROOT\_DIR/Mod/parts\_library/Architectural Parts/Doors/Custom/  
$ROOT_DIR/Mod/parts_library/Architectural Parts/Windows/Custom/

- The $ROOT_DIR is the user directory where FreeCAD configuration files, macros, and external workbenches are stored. It can be found be entering `FreeCAD.getUserAppDataDir()` in the [Python console](/Python_console "Python console").
  - On Linux it is usually /home/username/.local/share/FreeCAD/
  - On Windows it is usually C:\Users\username\Application Data\FreeCAD\
  - On Mac OSX it is usually /Users/username/Library/Preferences/FreeCAD/
- The subdirectory name Custom is just a suggestion, any name can be used. But the files must be placed in one or more subdirectories inside the Doors or Windows directories.

Custom presets will be available in the window tool's presets dropdown menu. Presets in library locations will also be available in the Parts Library dialog.

### Crearea de la zero

1. Opțional, selectați o fațetă de pe Arch unde doriți să fie inclusă fereastra
2. Switch to the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench")
3. Create a new sketch
4. Draw one or more closed wires
5. Close the sketch
6. Switch back to the [Arch Workbench](/Arch_Workbench "Arch Workbench")
7. Press the ![](/images/Arch_Window.png) [Arch Window](/Arch_Window "Arch Window") button, or press W then I keys
8. Enter Edit mode by double-clicking the window in the tree view, to adjust the window components

## Setări prealabile

Sunt disponibile următoarele presetări:

- ![Glass door](/images/ParametersDoorGlass.svg)

  Glass door

- ![Simple door](/images/ParametersDoorSimple.svg)

  Simple door

- ![Double-opening window](/images/ParametersWindowDouble.svg)

  Double-opening window

- ![Fixed window](/images/ParametersWindowFixed.svg)

  Fixed window

- ![Single-opening window](/images/ParametersWindowSimple.svg)

  Single-opening window

- ![Sash-opening window](/images/ParametersWindowStash.svg)

  Sash-opening window

## Construcția de componente

Ferestrele pot include 3 tipuri de componente: panouri, cadre și jaluzele. Panourile și jaluzele sunt realizate dintr-un fir închis, care este extrudat, în timp ce cadrele sunt realizate din 2 sau mai multe fire închise,where each one is extruded, then the smaller ones are subtracted from the biggest one. You can access, create, modify and delete components of a window in edit mode (double-click the window in the Tree view). The components have the following properties:

- **Name**: Un nume al componentului
- **Type**: The type of component. Can be "Frame", "Glass panel", "Solid panel" or "Louvres"
- **Wires**: A comma-separated list of wires the component is based on
- **Thickness**: The extrusion thickness of the component
- **Z Offset**: The distance between the component and its base 2D wire(s)
- **Hinge**: This allows you to select an edge from the base 2D object, then set that edge as a hinge for this component and the next ones in the list
- **Opening mode**: If you defined a hinge in this component or any other earlier in the list, setting the opening mode will allow the window to appear open or to display 2D opening symbols in plan or elevation.

![](/images/Arch_Window_options.jpg)

## Opţiuni

- Ferestrele partajează proprietățile și comportamentele comune ale tuturor[Arch Components](/Arch_Component "Arch Component")
- If the **Auto-include**checkbox on the Window creation task panel is unchecked, the window won't be inserted into any host object on creation.
- Add a selected window to a [wall](/Arch_Wall "Arch Wall") by selecting both, then pressing the ![](/images/Arch_Add.png) [Arch Add](/Arch_Add "Arch Add") button.
- Remove a selected window from a [wall](/Arch_Wall "Arch Wall") by selecting the window, then pressing the ![](/images/Arch_Remove.png) [Arch Remove](/Arch_Remove "Arch Remove") button.
- When using presets, it is often convenient to turn the "Near" [Draft Snap](/Draft_Snap "Draft Snap") on, so you can snap your window to an existing face.
- The hole created by a window in its host object is determined by two properties: **Hole Depth** and **Hole Wire** ([introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")). The Hole Wire number can be picked in the 3D view from the window's task panel available when double-clicking the window in the tree view
- Windows poate folosi [Multi-Materials](/Arch_MultiMaterial "Arch MultiMaterial"). Fereastra va căuta în Multi-Material -ul atașat pentru straturi de materiale cu același nume pentru fiecare componentă a ferestrei și o folosește dacă este găsită. De exemplu, o componentă numită "OuterFrame" va căuta în Multi-Material atașat, pentru un strat de material numit "OuterFrame". Dacă se găsește un astfel de strat, materialul său va fi atribuit componentei OuterFrame. Valoarea grosimii stratului de material nu este luată în considerare.

## Deschideri

A se vedea de asemenea: [Tutorial for open windows](/Tutorial_for_open_windows "Tutorial for open windows")

Ușile și ferestrele pot apărea parțial sau complet în modelul 3D sau pot fi afișate atât în plan cât și în elevație. Consequently, these will also appear in extracted 2D views generated by [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView") or [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") or [Drawing Workbench](/Drawing_Workbench "Drawing Workbench").Pentru a obține acest lucru, cel puțin una dintre componentele ferestrei trebuie să aibă o articulație și un mod de deschidere definit (vezi [#Building components](#Building_components) de mai sus). Apoi, folosind proprietățile **Open**, **Symbol Plan** sau **Elevation Symbol** , puteți configura aspectul ferestrei:

![](/images/Arch_window_openings.png)

![A door showing from left to right the Symbol Plan, Symbol Elevation and Opening properties at work](/images/Arch_window_openings.png)

## Defining window types

Windows can also take advantage of other tools, specifically [PartDesign](/PartDesign_Workbench "PartDesign Workbench") workflows, to define a type. A type is an object that defines the shape of the window. This is specially well suited to work with [App Parts](/App_Part "App Part"):

![](/images/Arch_window_type_example.png)

[Download the example file shown above](https://github.com/FreeCAD/Examples/raw/master/Arch_Example_Files/Window_Type.FCStd)

### Example workflow

- Create a window frame object, a glass panel, and any other window component you need, using [Part Workbench](/Part_Workbench "Part Workbench") or [PartDesign](/PartDesign_Workbench "PartDesign Workbench") tools.
- For example, create a base rectangular sketch for your window, then a profile sketch for the frame, and create a [Part Sweep](/Part_Sweep "Part Sweep") to sweep the profile around the base sketch. Create a [Part Offset2D](/Part_Offset2D "Part Offset2D") from the base sketch, then a [Part Extrude](/Part_Extrude "Part Extrude") to create the glass panel
- Make sure all these pieces have a unique, meaningful name (for example, "Frame" or "Glass Panel")
- Create an [App Part](/App_Part "App Part"), and place all your subcomponents in it
- Create a volume to be subtracted from the wall, for example by extruding the base sketch. Add this volume to the App Part. Make sure the volume is turned off
- You can add 3 properties to your App Part, by right-clicking its properties view and selecting "Add property". Add the following properties (all of them are optional, the group doesn't matter):
  - **Height** as a PropertyLength and link it, for example, to a vertical constraint of your base sketch
  - **Width** as a PropertyLength and link it, for example, to a horizontal constraint of your base sketch
  - **Subvolume** as a PropertyLink and link it to the volume to be subtracted that we created above
  - **Tag** as a PropertyString

Our window type is now ready. We can create window objects from it, simply by selecting the App Part and pressing the window button. The "Height", "Width", "Subvolume" and "Tag" properties of the window will be linked to the corresponding property of the App Part, if existing.

### Materials

To build a material for type-based windows:

- Create a [multi-material](/Arch_MultiMaterial "Arch MultiMaterial")
- Create one entry in the multi-material for each component of your App Part. For example, one "Frame", one "Glass panel" as we used above. Make sure to use the exact same name.
- Attribute that multi-material to each of the windows derived from the same type

You can use any other kind of workflow than the one described above, the important points to remember are:

- The type object must be one object, no matter the type (App Part, PartDesign Body, Part Compound, or even another Arch Window)
- The type object must have a "Subvolume" property (linked to the window's Subvolume property) for openings in host objects to work
- The type object must have a "Group" property with different children with same names as multi-material items for multi-materials to work

## Proprietăți

An Arch Window object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Window

- Date**Height**: Înălțimea acestei ferestre
- Date**Width**: The width of this window
- Date**Hole Depth**: The depth of the hole created by this window in its host object
- Date**Hole Wire**: The number of the wire from the base object that is used to create a hole in the host object of this window. This value can be set graphically when double-clicking the window in the tree view. Setting a value of 0 will make the window automatically pick its biggest wire for the hole.
- Date**Window Parts**: A list of strings (5 strings per component, setting the component options above)
- Date**Louvre Width**: If any of the components is set to "Louvres", this property defines the size of the louvre elements
- Date**Louvre Spacing**: If any of the components is set to "Louvres", this property defines the spacing between the louvre elements
- Date**Opening**: All components that have their opening mode set, and provided a hinge is defined in them or in an earlier component in the list, will appear open by a percentage defined by this value
- Date**Symbol Plan**: Shows 2D opening symbol in plan
- Date**Symbol Elevation**: Shows 2D opening symbol in elevation

## Scripting

## Script

Instrumentul pentru ferestre poate fi utilizat în [macro-uri](/Macros/ro "Macros/ro") și din consola [Python](/Python "Python") utilizând următoarea funcție:

```
Window = makeWindow(baseobj=None, width=None, height=None, parts=None, name="Window")

```

- Toate argumentele sunt opționale
- Creează un `Window </ code> bazat pe  baseobj </ code>, care ar trebui să fie un Draft Wire sau Sketcher Sketch.`
  `\* Dacă este disponibil, setează width </ code>, height </ code> și name </ code>
- Dacă baseobj </ code> nu este o formă închisă, este posibil ca instrumentul să nu creeze o figură solidă adecvată`

`Exempluː`````
import FreeCAD, Draft, Arch

Rect1 = Draft.makeRectangle(length=900, height=3000)
Window = Arch.makeWindow(Rect1)
FreeCAD.ActiveDocument.recompute()

`You can also create a Window from a preset.`
Window = makeWindowPreset(windowtype, width, height, h1, h2, h3, w1, w2, o1, o2, placement=None)

` ![](/images/Arch_Window_example2.jpg)``Example: `
import FreeCAD, Arch

base = FreeCAD.Vector(2000, 0, 0)
Axis = FreeCAD.Vector(1, 0, 0)
place=FreeCAD.Placement(base, FreeCAD.Rotation(Axis, 90))

Door = Arch.makeWindowPreset("Simple door",
width=900, height=2000,
h1=100, h2=100, h3=100, w1=200, w2=100, o1=0, o2=100,
placement=place)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Window/ro&oldid=1560838>"
```
