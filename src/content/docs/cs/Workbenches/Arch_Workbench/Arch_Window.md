---
title: Architektura Okno
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Okno |
| Umístění Menu |
| Arch → Window |
| Pracovní stoly |
| [Arch](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| W I |
| Představen ve verzi |
| - |
| Viz také |
| [Arch Wall](/Arch_Wall/cs "Arch Wall/cs") |
|  |

## Popis

Okno je základní objekt pro všechny druhy "vestavěných" objektů, jako jsou okna, dveře, atd... Je konstruované tak aby bylo buď nezávislé nebo "hostováno" uvnitř jiné komponenty jako je zeď. Má svoji vlastní konfiguraci, která může být vytvořena z několika komponent (např. rám okna) a také definuje objem, který bude ubrán z hostitelského objektu při vytvoření otvoru.

Okna jsou založena na uzavřených 2D objektech jako jsou [Kreslení obdélníků](/Draft_Rectangle "Draft Rectangle") nebo [Náčrty](/Sketcher_Workbench "Sketcher Workbench"), které jsou využity k definování jejich vnitřních komponent. Základní 2D objekt proto může obsahovat několik uzavřených lomených čar, které mohou být kombinovány tak aby utvořily vyplněné křídlo (jedna lomená čára) nebo rámy (několik lomených čar). Jestliže byl 2D objekt nakreslen na podpůrném objektu a je-li tento podpůrný objekt zeď, je okno automaticky včleněno do zdi.

The Window tool features several [presets](#Presets). These allow the user to create common types of windows and doors with certain editable parameters, without the need to create the base 2D objects and components manually.

All information applicable to an Arch Window also applies to an [Arch Door](/Arch_Door "Arch Door"), as it's the same underlying object.

![](/images/Arch_Window_example2.jpg)

Complex window being constructed on top of a [Sketch](/Sketcher_Workbench "Sketcher Workbench"). When entering the window's edit mode you can create different components, set their thickness, and select and assign wires from the sketch to them.

## Použití

### Použití předvoleb

1. There are several ways to invoke the tool:
   * Press the ![](/images/Arch_Window.svg) [Window](/Arch_Window "Arch Window") button.
   * Select the **3D/BIM → ![](/images/Arch_Window.svg) Window** option from the menu.
   * Use the keyboard shortcut: W then I.
2. Select one of the presets in the list.
3. Fill out the desired parameters.
4. In the [3D view](/3D_view "3D view"), move the window to the location where you wish to place it. If you move the pointer over an [Arch Wall](/Arch_Wall "Arch Wall"), the outline of the window should align itself with the face of that object.
5. Click on the [3D view](/3D_view "3D view") with the mouse, or press the Enter key three times to confirm the X, Y, Z coordinates of the placement.

#### Additional presets

In addition to the default presets, the window tool can also use custom presets. A custom preset is a FreeCAD file containing a single window based on a parametric sketch that has two named constrains: `Width` and `Height`. Custom presets can be placed in the following locations:

The window tool will always search this pair of locations:

$ROOT\_DIR/Arch/Doors/Custom/  
$ROOT\_DIR/Arch/Windows/Custom/

If you install the [Parts Library](/Parts_Library_Workbench "Parts Library Workbench") from the [Addon Manager](/Std_AddonMgr "Std AddonMgr"), the window tool will also search this library for additional presets at this pair of locations:

$ROOT\_DIR/Mod/parts\_library/Architectural Parts/Doors/Custom/  
$ROOT\_DIR/Mod/parts\_library/Architectural Parts/Windows/Custom/

* The $ROOT\_DIR is the user directory where FreeCAD configuration files, macros, and external workbenches are stored. It can be found be entering `FreeCAD.getUserAppDataDir()` in the [Python console](/Python_console "Python console").
  + On Linux it is usually /home/username/.local/share/FreeCAD/
  + On Windows it is usually C:\Users\username\Application Data\FreeCAD\
  + On Mac OSX it is usually /Users/username/Library/Preferences/FreeCAD/
* The subdirectory name Custom is just a suggestion, any name can be used. But the files must be placed in one or more subdirectories inside the Doors or Windows directories.

Custom presets will be available in the window tool's presets dropdown menu. Presets in library locations will also be available in the Parts Library dialog.

### Creating a custom window

1. Optionally, select a face on the Arch object where you want the window to be included.
2. Switch to the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench").
3. Create a new sketch.
4. Draw one or more closed wires (loops). Pay close attention to the creation order of these loops, the numbering of the "wires" in the [task panel](/Task_panel "Task panel") ("Window elements") depends on this.
5. Close the sketch.
6. Switch back to the [BIM Workbench](/BIM_Workbench "BIM Workbench").
7. Invoke the tool as described above.
8. To adjust the window components and various properties, enter the window [task panel](/Task_panel "Task panel") by double-clicking on the created object in the [tree view](/Tree_view "Tree view").
9. Note that since components following a hinged component will also hinge, all fixed components, such as outer frames and fixed glass panels, must be defined before any hinged components. And a glass panel in a hinged frame must be defined after that frame, and before any other hinged components.

## Presets

The following presets are available:

* ![Fixed](/images/ParametersWindowFixed.svg)

  Fixed
* ![Open 1-pane](/images/ParametersWindowSimple.svg)

  Open 1-pane
* ![Open 2-pane](/images/ParametersWindowDouble.svg)

  Open 2-pane
* ![Sash 2-pane](/images/ParametersWindowStash.svg)

  Sash 2-pane
* ![Sliding 2-pane](/images/ParametersWindowDouble.svg)

  Sliding 2-pane
* ![Simple door](/images/ParametersDoorSimple.svg)

  Simple door
* ![Glass door](/images/ParametersDoorGlass.svg)

  Glass door
* ![Sliding 4-pane](/images/ParametersWindowDouble.svg)

  Sliding 4-pane
* ![Awning](/images/ParametersWindowSimple.svg)

  Awning
* ![Opening only introduced in 1.0](/images/ParametersOpening.svg)

  Opening only [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## Konstrukce komponent

Okna mohou obsahovat 2 typy komponent: křídla a rámy. Křídla jsou vytvořena z jedné uzavřené lomené čáry, která se vysune, zatímco rámy jsou udělány ze 2 nebo více uzavřených lomených čar, z nichž každá je samostatně vysunuta, potom ty menší jsou odebrány z těch větších. Na komponenty okna můžete přistupovat, měnit a mazat je v editačním módu (dvojklikem na okno v pohledu stromu). Komponenty mají následující vlastnosti:

* **Jméno**: Jméno komponenty
* **Typ**: Typ komponenty. Může být "Frame" (Rám), "Glass panel" (Skleněný panel) nebo "Solid panel"(Pevný panel)
* **Dráty**: Čárkami oddělený seznam drátů, na kterých je komponenta založena
* **Tloušťka**: Tloušťka vysunutí komponenty
* **Odsazení**: Vzdálenost mezi komponentou a její základovou 2D lomenou čárou(čárami)

![](/images/Arch_Window_options.jpg)

## Volby

* Můžete teké vytvořit uzavřený 2D profil (např. pomocí [Kreslicí plochy](/Draft_Workbench "Draft Workbench") nebo [Náčrtové plochy](/Sketcher_Workbench "Sketcher Workbench")), potom s tímto vybraným 2D profilem stisknete tlačítko ![](/images/Arch_Window.png) [Okno](/Arch_Window "Arch Window").
* Přidejte vybrané okno do [zdi](/Arch_Wall "Arch Wall") vybráním obou (zdi i okna), potom stisknutím tlačítka ![](/images/Arch_Add.png) [Přidat](/Arch_Add "Arch Add").
* Odebrání vybraného okna ze [zdi](/Arch_Wall "Arch Wall") vybráním okna a potom stisknutím tlačítka ![](/images/Arch_Remove.png) [Odebrat](/Arch_Remove "Arch Remove").
* Při využití předvoleb je často výhodné zapnout "Blízký" [Kreslení Přichytit](/Draft_Snap "Draft Snap"), takže můžete přichytit okno na existující plochu.

## Openings

*See also:* [Tutorial for open windows](/Tutorial_for_open_windows "Tutorial for open windows")

Doors and windows can appear partially or fully open in the 3D model, or can display opening symbols both in plan and/or elevation. Consequently, these will also appear in extracted 2D views generated by [Draft Shape2DView](/Draft_Shape2DView "Draft Shape2DView") or [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench"). To obtain this, at least one of the window components must have a hinge and an opening mode defined (see the [Building components](#Building_components) above). Then, using the Údaje**Opening**, Údaje**Symbol Plan** or Údaje**Symbol Elevation** properties, you can configure the appearance of the window:

![](/images/Arch_window_openings.png)

A door showing the symbol plan, symbol elevation and opening properties at work

## Defining window types

Windows can also take advantage of other tools, specifically [PartDesign](/PartDesign_Workbench "PartDesign Workbench") workflows, to define a type. A type is an object that defines the shape of the window. This is specially well suited to work with [App Parts](/App_Part "App Part"):

![](/images/Arch_window_type_example.png)

[Download the example file shown above](https://github.com/FreeCAD/Examples/raw/master/Arch_Example_Files/Window_Type.FCStd)

### Example workflow

* Create a window frame object, a glass panel, and any other window component you need, using [Part Workbench](/Part_Workbench "Part Workbench") or [PartDesign](/PartDesign_Workbench "PartDesign Workbench") tools.
* For example, create a base rectangular sketch for your window, then a profile sketch for the frame, and create a [Part Sweep](/Part_Sweep "Part Sweep") to sweep the profile around the base sketch. Create a [Part Offset2D](/Part_Offset2D "Part Offset2D") from the base sketch, then a [Part Extrude](/Part_Extrude "Part Extrude") to create the glass panel
* Make sure all these pieces have a unique, meaningful name (for example, "Frame" or "Glass Panel")
* Create an [App Part](/App_Part "App Part"), and place all your subcomponents in it
* Create a volume to be subtracted from the wall, for example by extruding the base sketch. Add this volume to the App Part. Make sure the volume is turned off
* You can add 3 properties to your App Part, by right-clicking its properties view and selecting "Add property". Add the following properties (all of them are optional, the group doesn't matter):
  + **Height** as a PropertyLength and link it, for example, to a vertical constraint of your base sketch
  + **Width** as a PropertyLength and link it, for example, to a horizontal constraint of your base sketch
  + **Subvolume** as a PropertyLink and link it to the volume to be subtracted that we created above
  + **Tag** as a PropertyString

Our window type is now ready. We can create window objects from it, simply by selecting the App Part and pressing the window button. The "Height", "Width", "Subvolume" and "Tag" properties of the window will be linked to the corresponding property of the App Part, if existing.

### Materials

To build a material for type-based windows:

* Create a [multi-material](/Arch_MultiMaterial "Arch MultiMaterial")
* Create one entry in the multi-material for each component of your App Part. For example, one "Frame", one "Glass panel" as we used above. Make sure to use the exact same name.
* Attribute that multi-material to each of the windows derived from the same type

You can use any other kind of workflow than the one described above, the important points to remember are:

* The type object must be one object, no matter the type (App Part, PartDesign Body, Part Compound, or even another Arch Window)
* The type object must have a "Subvolume" property (linked to the window's Subvolume property) for openings in host objects to work
* The type object must have a "Group" property with different children with same names as multi-material items for multi-materials to work

## Vlastnosti

An Arch Window object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Window

* Údaje**Části okna**: Seznam textových řetězců (5 řetězců na každou komponentu, nastavuje vlastnosti komponent jak jsou uvedeny výše)

## Scripting

## Skriptování

Nástroj Okno může být využit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

```
Window = makeWindow(baseobj=None, width=None, height=None, parts=None, name="Window")

```

:   vytvoří okno založené na zadaném objektu

Příklad:

```
import FreeCAD, Draft, Arch

Rect1 = Draft.makeRectangle(length=900, height=3000)
Window = Arch.makeWindow(Rect1)
FreeCAD.ActiveDocument.recompute()

```

You can also create a Window from a preset.

```
Window = makeWindowPreset(windowtype, width, height, h1, h2, h3, w1, w2, o1, o2, placement=None)

```

![](/images/Arch_Window_example2.jpg)

Example:

```
import FreeCAD, Arch

base = FreeCAD.Vector(2000, 0, 0)
Axis = FreeCAD.Vector(1, 0, 0)
place=FreeCAD.Placement(base, FreeCAD.Rotation(Axis, 90))

Door = Arch.makeWindowPreset("Simple door",
                             width=900, height=2000,
                             h1=100, h2=100, h3=100, w1=200, w2=100, o1=0, o2=100,
                             placement=place)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Window/cs&oldid=1560842>"