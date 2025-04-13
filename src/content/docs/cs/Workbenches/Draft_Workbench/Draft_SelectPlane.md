---
title: Kreslení VýběrRoviny
---
|  |
| --- |
| Kreslení VýběrRoviny |
| Umístění Menu |
| Kreslení -> Utility -> Výběr roviny |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| *Nikdo* |
|  |

## Description

## Popis

Modul kreslení má pracovní rovinu, která umožňuje specifikovat uživatelskou rovinu ve 3D, na které se bude realizovat následujíci kreslicí příkaz. Pro definování pracovní roviny existuje několik metod:

* Z vybrané plochy
* Z aktuálního pohledu
* Z předvolby: horní, přední nebo boční
* Žádná, v tomto případě je pracovní rovina automaticky adaptována podle aktuálního pohledu, kde spouštíte příkaz nebo na ploše, pokud začínáte kreslení na existující ploše.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): For each 3D view a separate working plane is stored.

The ![](/images/Draft_tray_button_plane.png) button in the [Draft Tray](/Draft_Tray "Draft Tray") changes depending on the current working plane. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the working plane is not set to **Auto** an asterisk (**\***) is appended to the button label if the origin of the working plane does not match the global origin.

![](/images/WorkingPlane_example.png)

Shapes created on different working planes

## Usage with pre-selection

1. Do one of the following:
   * Select a single object. The following objects are supported:
     + [Draft WorkingPlaneProxies](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy"): the Pohled**View Data** (the camera position) and the Pohled**Visibility Map** (the saved visibility of objects) of the working plane proxy are also restored.
     + [Arch Axes](/Arch_Axis "Arch Axis") ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"))
     + [Arch AxisSystems](/Arch_AxisSystem "Arch AxisSystem") ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"))
     + [Arch BuildingParts](/Arch_BuildingPart "Arch BuildingPart")
     + [Arch SectionPlanes](/Arch_SectionPlane "Arch SectionPlane")
     + [Std Parts](/Std_Part "Std Part"): to avoid selecting subelements it is advisable to select these in the [Tree view](/Tree_view "Tree view").
     + Non-solid objects that consist of a single flat face or a single curved edge, or ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) that have three or more vertices.
     + Solid objects or objects without a shape that have a Údaje**Placement** property. ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"))
   * Select one or more subelements. You can select:
     + A flat face.
     + A curved edge.
     + Three vertices.
     + An edge and a vertex, or two edges. The combined vertices must define a plane. ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"))
2. There are several ways to invoke the command:
   * Press the ![](/images/Draft_tray_button_plane.png) button in the [Draft Tray](/Draft_Tray "Draft Tray").
   * [Draft](/Draft_Workbench "Draft Workbench"): Select the **Utilities → ![](/images/Draft_SelectPlane.svg) Select plane** option from the menu, or from the [Tree view](/Tree_view "Tree view") or [3D view](/3D_view "3D view") context menu.
   * Draft: Use the keyboard shortcut: W then P.
3. The working plane and the button in the [Draft Tray](/Draft_Tray "Draft Tray") are updated.

## Usage with post-selection

1. Invoke the command as explained above.
2. The **Working plane setup** task panel opens. See [Options](#Options) for more information.
3. Do one of the following:
   * Select a single object. See the [previous paragraph](#Usage_with_pre-selection).
   * Select one or more subelements. See the [previous paragraph](#Usage_with_pre-selection).
4. Click anywhere in the [3D view](/3D_view "3D view") to confirm the selection and finish the command.
5. The working plane and the button in the [Draft Tray](/Draft_Tray "Draft Tray") are updated.

## Usage with presets

1. Invoke the command as explained above.
2. The **Working plane setup** task panel opens. See [Options](#Options) for more information.
3. Press any of the buttons to finish the command.
4. The working plane and the button in the [Draft Tray](/Draft_Tray "Draft Tray") are updated.

## Options

## Volby

* Pro nastavení pracovní roviny na existující plochu: vyberte existující objekt ve 3D pohledu a potom stiskněte tlačítko ![](/images/Draft_SelectPlane.png) VýběrRoviny
* Stisknutí tlačítka **POHLED** nastaví pracovní rovinu jako je rovina pohledu, kolmo k osám kamery a procházející počátkem (0,0,0).
* Stisknutí tlačítka **ŽÁDNÁ** zruší nastavení aktuální pracovní roviny. Následující 2D operace budou závislé na pohledu.
* Múžete také specifikovat hodnotu odsunutí, což odsune pracovní rovinu o zadanou vzdálenost od vybrané roviny.

## Notes

* It can be useful to align the [3D view](/3D_view "3D view") with the selected Draft working plane. For example after switching the working plane to Front you may want to switch to the [Front view](/Std_ViewFront "Std ViewFront") as well.
* The grid can be toggled with the [Draft ToggleGrid](/Draft_ToggleGrid "Draft ToggleGrid") command.
* By double-clicking [Draft WorkingPlaneProxies](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy") in the [Tree view](/Tree_view "Tree view") you can quickly switch between working planes.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* The grid settings in the task panel as well as several other grid settings are available as preferences: **Edit → Preferences... → Draft → Grid and snapping**.
* The Snapping radius can also be changed on-the-fly (see [Draft Snap](/Draft_Snap#Preferences "Draft Snap")) or by changing: **Tools → Edit parameters... → BaseApp → Preferences → Mod → Draft → snapRange**.

## Scripting

## Skriptování

Objekt pracovní roviny může být snadno vyvořen a manipulován ve skriptech a [makrech](/Macros/cs "Macros/cs"). Můžete vytvářet vlastní a používat je nezávisle na aktuální pracovní ploše Kreslení.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"):

The WorkingPlane module offers two classes to create working plane objects: the `PlaneBase` class and the `PlaneGui` class. The second class inherits from the first. Objects of the `PlaneGui` class interact with the GUI (the [Draft Tray](/Draft_Tray "Draft Tray") button), the [3D view](/3D_view "3D view") and the [grid](/Draft_Snap_Grid "Draft Snap Grid"). `PlaneBase` objects do not.

Use the `get_working_plane()` method of the WorkingPlane module to get an instance of the `PlaneGui` class linked to the current 3D view. The method either returns the existing working plane linked to the view or creates a new working plane if required.

```
import FreeCAD as App
import WorkingPlane

wp = WorkingPlane.get_working_plane()

origin = App.Vector(0, 0, 0)
normal = App.Vector(1, 1, 1).normalize()
offset = 17
wp.align_to_point_and_axis(origin, normal, offset)

point = App.Vector(10, 15, 2)
projection = wp.project_point(point)
print(projection)

```

The `PlaneBase` class can be used to create working planes independent of the GUI:

```
import WorkingPlane

wp = WorkingPlane.PlaneBase()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SelectPlane/cs&oldid=1473287>"