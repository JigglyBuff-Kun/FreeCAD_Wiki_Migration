---
title: Part SectionCut
---

|                                                                   |
| ----------------------------------------------------------------- |
| Part SectionCut                                                   |
| Menu location                                                     |
| View → Persistent section cut                                     |
| Workbenches                                                       |
| All                                                               |
| Default shortcut                                                  |
| _None_                                                            |
| Introduced in version                                             |
| 0.20                                                              |
| See also                                                          |
| [Std ToggleClipPlane](/Std_ToggleClipPlane "Std ToggleClipPlane") |
|                                                                   |

## Description

The **Section Cut** feature is available for all workbenches but it only works for Part and PartDesign objects and assemblies of those. It creates a persistent cut of objects and assemblies. Since the cut result is a normal ![](/src/assets/images/Part_Cut.svg) [Part Cut](/Part_Cut "Part Cut") object, it can be modified further or for example 3D-printed. See below for possible applications.

![](/src/assets/images/Part_SectionCut_example.png)

A cut assembly. Some cut faces were manually colored. The yellow part is not cut because it was purposely moved by one micron into another part.

## Usage

![](/src/assets/images/Part_SectionCut_Dialog.png)

The Section Cut dialog.

The **Section Cut** dialog is opened via the menu **View → ![](/src/assets/images/Part_SectionCut.svg) Persistent section cut**. It is independent of the current workbench and the currently opened document. It can be detached from its opening position by pressing the button at the upper right of the dialog.

The **Section Cut** feature takes all currently visible Part objects in the active document into account. Therefore you can control what will be cut, by making a part visible or not. By checking one of the **Cutting** options in the dialog the feature is activated. You can then either enter a position (in coordinates of the document) or use the sliders to set the cut position. It is also possible to combine cuts, for example to cut in X and Z direction. The buttons Flip flip the side that is cut.

As soon as a **Cutting** option is checked in the dialog, you get a cut object in the [tree view](/Tree_view "Tree view"). Its name is e.g. _SectionCutY_ when it is a cut in Y direction.

The dialog option **Keep only cuts visible when closing** hides everything in the tree view except of the cut object when the button Close is clicked to close the dialog.

To remove the cut object, uncheck all **Cutting** options.

By unchecking all **Cutting** options, the button Refresh view becomes active. When pressed, it takes a kind of a screenshot of the currently visible Part objects. This will be used when you check the next time a **Cutting** option. The refreshing is necessary when you switched the document. It is furthermore useful for assemblies, where you might want to hide some parts or later want to add them to the cut. In this case the refreshing recalculates the min/max values of the sliders and cut positions according to the currently visible object dimensions.

If the option **Auto** in the cut face section is checked, the color and transparency of the cut objects will be taken for the cut face. This only works if all cut objects have the same color or transparency.

The option **Cut intersecting objects** allows to cut also objects that intersects each other. I assemblies intersections happen sometimes for object that are designed to only touch each other due to numerical precision issues. The drawback of the option is that all visible objects will get the same color. This color can be specified like in the cut face section of the dialog.  
If you need the cut for e.g. a nice picture with several face colors, you can change the face colors using the tool ![](/src/assets/images/Part_ColorPerFace.svg) [Color per face](/Part_ColorPerFace "Part ColorPerFace").

**Note:** For assemblies the sliders in the dialog are disabled (except the one for the transparency). The reason is that a slider movement results in many cut operations is a short time. For assemblies this quickly consumes all CPU power and a sticky slider movement is not helpful.

When you select a cut object in the tree view and then open the Section Cut dialog, the cut positions will be read into the dialog.

## Applications

- An important use case is that Section Cut creates filled cuts, not hollow ones like the ![](/src/assets/images/Std_ToggleClipPlane.svg) [Clip Plane](/Std_ToggleClipPlane "Std ToggleClipPlane") feature.
- Section Cut is useful for assemblies to visualize for example the working principle of a device. You thereby might want to color certain cut faces using the ![](/src/assets/images/Part_ColorPerFace.svg) [Color per face](/Part_ColorPerFace "Part ColorPerFace") tool. To use the tool, switch to the Part or PartDesign workbench, right-click on the cut object in the tree view and select in the context menu **Set colors**.
- Without the option **Cut intersecting objects** only parts that don't intersect others will be cut. This can be used as a collision test.
- The Section Cut feature can be used for technical drawings to highlight certain areas or to be able to draw in dimensions. The image below shows an example where the [TechDraw](/TechDraw_Workbench "TechDraw Workbench") features ![](/src/assets/images/TechDraw_ActiveView.svg) [ActiveView](/TechDraw_ActiveView "TechDraw ActiveView") and ![](/src/assets/images/TechDraw_View.svg) [View](/TechDraw_View "TechDraw View") are used.

![](/src/assets/images/Part_SectionCut_TD-example.png)

A technical drawing where a Section Cut result is used. (Click on the image for full size.)

## Special cut positions

![](/src/assets/images/Part_SectionCut_slant-cut.png)

A slant cut of an assembly.

- For example in the first image in this page only one quarter of the assembly is cut. This was done by creating a cut in X direction. Then in the resulting cut object **SectionCutX** the [placement](/Placement "Placement") of the subobject **SectionCutBoxX** was changed.
- To get a cut in any direction, you can do this:

1. Create a new [Std Part](/Std_Part "Std Part") container.
2. Select all objects you want to cut in the tree view and move them into the container.
3. Now set the placement of the container to a rotation of your choice. For the image at the left, the container was rotated by 45° around the X and Z axis and the section cut was performed in X direction.

## Limitations

![](/src/assets/images/Part_SectionCut_Color-artifact.png)

An assembly where two parts intersect each other and that are therefore not cut. Note the color artifacts at the cut face.

- **Important:** The Section Cut feature works poorly with [OpenCASCADE](/OpenCASCADE "OpenCASCADE") 7.4 and older due to bugs. It is therefore recommended to use OpenCASCADE 7.5 or newer (all builds of FreeCAD 0.20 and above assure this).
- 1.0 and above: The option **Cut intersecting objects** will color all visible parts the same. This can technically not be avoided. However, if one needs the persistent cut for e.g. a presentation, see the method described above how to reset the color manually.
- 0.20 and below: In assemblies **parts that intersect each other cannot be cut**. Normally intersecting objects will not be cut while the others will. However, sometimes the cutting can produce strange results which is a bug in the OpenCASCADE libraries.  
   To get a cut view also for intersecting objects, you can use the the macro [Cross Section](/Macro_cross_section "Macro cross section").
- 0.20 and below: Especially when using the [A2plus workbench](/A2plus_Workbench "A2plus Workbench"), some the assembled parts can overlap each other by just a micron due to internal rounding errors. To fix this, add a micron as space in the constraint settings.
- There can be color artifacts in the cut result. If and how depends on the OpenCASCADE library and also on the view position. In many cases the color artifacts disappear when the 3D view is slightly rotated.
- When having cut objects with different colors, it is not possible to apply automatically their color to the corresponding cut faces. All cut faces will get the same color selected in the dialog.
- When using the [A2plus workbench](/A2plus_Workbench "A2plus Workbench"), it is not possible to apply automatically the color of the assembled parts to the corresponding cut faces. All cut faces will get the same color selected in the dialog. The reason is that A2plus does not input the parts [as link](/App_Link "App Link") but loads them as file.

## Background Info

**Section Cut** is inspired by the macro [Cross Section](/Macro_cross_section "Macro cross section") and works technically this way:

All visible objects are put into a ![](/src/assets/images/Part_Compound.svg) [Part Compound](/Part_Compound "Part Compound") container. For the option **Cut intersecting objects** a ![](/src/assets/images/Part_BooleanFragments.svg) [Boolean Fragments](/Part_BooleanFragments "Part BooleanFragments") container is used instead. The compound is cut using a ![](/src/assets/images/Part_Box.svg) [Part Box](/Part_Box "Part Box") object. The box must be as large as necessary to cover the whole volume of all visible objects. To achieve this, the bounding box of the objects is acquired. When changing the view by adding/removing objects or changing the document, the bounding box must be updated. This is done when the button Refresh view is clicked.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_SectionCut/en&oldid=1469270>"
