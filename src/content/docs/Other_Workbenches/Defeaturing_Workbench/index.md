---
title: Defeaturing Workbench
---

![](/images/Defeaturing_workbench_icon.svg)

Defeaturing workbench icon

## Introduction

![](/images/Defeaturing_workbench_icon.svg) [Defeaturing Workbench](/Defeaturing_Workbench "Defeaturing Workbench") is an add-on workbench intended for editing STEP models, removing of the selected features from the model. It is an [external workbench](/External_Workbenches "External Workbenches") and therefore not part of the standard FreeCAD install.

## Features

- Features a set of tools to edit a Shape or a STEP model, removing hole(s), face(s), simplifying the model, changing the tolerance, applying Fuzzy Boolean operations etc...
- There are also tools to create more solid shape(s), from edge(s), face(s) or shell(s).
- It is also possible to use direct modeling of the model, when the history of operations is unavailable. (This is the case for 3D STEP models).
- Useful in situations to quickly remove proprietary details of the model before sharing it. See [Defeaturing](/Defeaturing "Defeaturing")

Note: More advance Defeaturing tools can be used if [OCC7.3](/OpenCASCADE "OpenCASCADE") is available.

## Installation

### Automatic (recommended)

Using the FreeCAD ![](/images/AddonManager.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr") available in v0.17+ via **Tools → Addon Manager**. Search for the ![](/images/Defeaturing_workbench_icon.svg) Defeaturing workbench icon. The Addon Manager also notifies the user when a new version of this Addon is available.

### Manually

See [How to install additional workbenches](/How_to_install_additional_workbenches "How to install additional workbenches")

### Supports

- FreeCAD v0.15 4671
- FreeCAD v0.16 >= 6712
- FreeCAD v0.17 >= 13522
- FreeCAD v0.18+

## References

- Author: Github: [@easyw](https://github.com/easyw) | FreeCAD Forums: [[1]](https://forum.freecadweb.org/viewtopic.php?f=9&t=29506)
- Source code on github: <https://github.com/easyw/Defeaturing_WB>
- FC forum thread <https://forum.freecadweb.org/viewtopic.php?t=29506>

## Tools

![Defeaturing tools dialog](/images/Defeaturing_WB.png)

Defeaturing tools dialog

![](/images/Defeaturing_Tools.svg) Defeaturing Tools are located in a separate mask.

- ![](/images/DefeatWB_Tools_rmv_hole.png) [Remove Holes](/index.php?title=DefeatWB_Tools_rmv_hole&action=edit&redlink=1 "DefeatWB Tools rmv hole (page does not exist)"): remove Hole from Face
- ![](/images/DefeatWB_Tools_rmv_listed_Faces.png) [Remove listed Faces](/index.php?title=DefeatWB_Tools_rmv_listed_Faces&action=edit&redlink=1 "DefeatWB Tools rmv listed Faces (page does not exist)"): remove 'in List' Faces
- ![](/images/DefeatWB_Tools_add_Faces_listed_Edges.png) [Add Faces from 'in List' Edges](/index.php?title=DefeatWB_Tools_add_Faces_listed_Edges&action=edit&redlink=1 "DefeatWB Tools add Faces listed Edges (page does not exist)"): add Faces from 'in List' Edges
- ![](/images/DefeatWB_Tools_select_Faces_Param_Defeat.png) [Select Faces to be Parametric defeatured](/index.php?title=DefeatWB_Tools_select_Faces_Param_Defeat&action=edit&redlink=1 "DefeatWB Tools select Faces Param Defeat (page does not exist)"): select Faces to be Parametric defeatured
- ![](/images/DefeatWB_Tools_create_copy_listed_edges.png) [Create a copy of the 'in List' Edges](/index.php?title=DefeatWB_Tools_create_copy_listed_edges&action=edit&redlink=1 "DefeatWB Tools create copy listed edges (page does not exist)") : create a copy of the 'in List' Edges

- ![](/images/DefeatWB_Tools_copy_Faces_listed_faces.png) [copy Faces from 'in List' Faces](/index.php?title=DefeatWB_Tools_copy_Faces_listed_faces&action=edit&redlink=1 "DefeatWB Tools copy Faces listed faces (page does not exist)") : copy Faces from 'in List' Faces
- ![](/images/DefeatWB_Tools_offset_face.png) [offset face](/index.php?title=DefeatWB_Tools_offset_face&action=edit&redlink=1 "DefeatWB Tools offset face (page does not exist)"): offset face
- ![](/images/DefeatWB_Tools_offset_edge.png) [offset edge](/index.php?title=DefeatWB_Tools_offset_edge&action=edit&redlink=1 "DefeatWB Tools offset edge (page does not exist)"): offset edge

- ![](/images/DefeatWB_Tools_make_solid_listed_faces.png) [Make Solid from in List Faces](/index.php?title=DefeatWB_Tools_make_solid_listed_faces&action=edit&redlink=1 "DefeatWB Tools make solid listed faces (page does not exist)"): make Solid from in List Faces
- ![](/images/DefeatWB_Tools_make_solid_faces_selected_objects.png) [Make Solid from the Faces of the selected Objects](/index.php?title=DefeatWB_Tools_make_solid_faces_selected_objects&action=edit&redlink=1 "DefeatWB Tools make solid faces selected objects (page does not exist)"): make Solid from the Faces of the selected Objects
- ![](/images/DefeatWB_Tools_select_one_object_2_make_solid_step_proc.png) [Make Solid from in List Faces](/index.php?title=DefeatWB_Tools_select_one_object_2_make_solid_step_proc&action=edit&redlink=1 "DefeatWB Tools select one object 2 make solid step proc (page does not exist)"): select ONE object to try to make a Solid through STEP import/export process
- ![](/images/DefeatWB_Tools_Connect.png) [Connect](/index.php?title=DefeatWB_Tools_Connect&action=edit&redlink=1 "DefeatWB Tools Connect (page does not exist)"): connect
- ![](/images/DefeatWB_Tools_clean_face_rmv_holes.png) [clean Face(s) removing holes and merging Outwire](/index.php?title=DefeatWB_Tools_clean_face_rmv_holes&action=edit&redlink=1 "DefeatWB Tools clean face rmv holes (page does not exist)"): clean Face(s) removing holes and merging Outwire

- ![](/images/DefeatWB_Tools_show_listed_edges.png) [show 'in List‘ Edge(s)](/index.php?title=DefeatWB_Tools_show_listed_edges&action=edit&redlink=1 "DefeatWB Tools show listed edges (page does not exist)"): show 'in List‘ Edge(s)
- ![](/images/DefeatWB_Tools_show_listed_faces.png) [show 'in List‘ Face(s)](/index.php?title=DefeatWB_Tools_show_listed_faces&action=edit&redlink=1 "DefeatWB Tools show listed faces (page does not exist)"): show 'in List‘ Face(s)
- ![](/images/DefeatWB_Tools_refine.png) [refine](/index.php?title=DefeatWB_Tools_refine&action=edit&redlink=1 "DefeatWB Tools refine (page does not exist)"): refine
- ![](/images/DefeatWB_Tools_simple_copy.png) [simple copy](/index.php?title=DefeatWB_Tools_simple_copy&action=edit&redlink=1 "DefeatWB Tools simple copy (page does not exist)"): simple copy
- ![](/images/DefeatWB_Tools_parametric_refine.png) [parametric Refine](/index.php?title=DefeatWB_Tools_parametric_refine&action=edit&redlink=1 "DefeatWB Tools parametric refine (page does not exist)"): parametric Refine

- ![](/images/DefeatWB_Tools_geometry_check.png) [geometry check](/index.php?title=DefeatWB_Tools_geometry_check&action=edit&redlink=1 "DefeatWB Tools geometry check (page does not exist)"): geometry check
- ![](/images/DefeatWB_Tools_get_Tolerance_value.png) [get Tolerance value](/index.php?title=DefeatWB_Tools_get_Tolerance_value&action=edit&redlink=1 "DefeatWB Tools get Tolerance value (page does not exist)"): get Tolerance value
- ![](/images/DefeatWB_Tools_set_Tolerance_value.png) [set Tolerance value](/index.php?title=DefeatWB_Tools_set_Tolerance_value&action=edit&redlink=1 "DefeatWB Tools set Tolerance value (page does not exist)"): set Tolerance value

- ![](/images/DefeatWB_Tools_make_edges_selected_vertexes.png) [make Edge from selected Vertexes](/index.php?title=DefeatWB_Tools_make_edges_selected_vertexes&action=edit&redlink=1 "DefeatWB Tools make edges selected vertexes (page does not exist)"): make Edge from selected Vertexes
- ![](/images/DefeatWB_Tools_reset_placement.png) [reset Placement](/index.php?title=DefeatWB_Tools_reset_placement&action=edit&redlink=1 "DefeatWB Tools reset placement (page does not exist)"): reset Placement
- ![](/images/DefeatWB_Tools_show_hide_typeId_shape.png) [show/hide TypeId of the Shape](/index.php?title=DefeatWB_Tools_show_hide_typeId_shape&action=edit&redlink=1 "DefeatWB Tools show hide typeId shape (page does not exist)"): show/hide Type Id of the Shape
- ![](/images/DefeatWB_Tools_help.png) [help](/index.php?title=DefeatWB_Tools_help&action=edit&redlink=1 "DefeatWB Tools help (page does not exist)"): help

- ![](/images/DefeatWB_Tools_Fuzzy_Cut.png) [Fuzzy Cut](/index.php?title=DefeatWB_Tools_Fuzzy_Cut&action=edit&redlink=1 "DefeatWB Tools Fuzzy Cut (page does not exist)"): Fuzzy Cut
- ![](/images/DefeatWB_Tools_Fuzzy_Union.png) [Fuzzy Union](/index.php?title=DefeatWB_Tools_Fuzzy_Union&action=edit&redlink=1 "DefeatWB Tools Fuzzy Union (page does not exist)"): Fuzzy Union
- ![](/images/DefeatWB_Tools_Fuzzy_Common.png) [Fuzzy Common](/index.php?title=DefeatWB_Tools_Fuzzy_Common&action=edit&redlink=1 "DefeatWB Tools Fuzzy Common (page does not exist)"): Fuzzy Common

## Video Tutorials

### Defeaturing

Removing Features using OCC7.3 new tools

[![](/images/Defeaturing-WB-%40Work_v3.png](https://raw.githubusercontent.com/easyw/FreeCAD-tutorials/master/testing-files/removing-holes.mp4)

Defeaturing-WB: removing-features (holes)

[![](/images/Defeaturing-WB-%40Work_v1.png)](https://youtu.be/yrTtWFakAyE)

YouTube: Defeaturing tools - Simplifying the model

[![](/images/Defeaturing-WB-%40Work_v2.png)](https://youtu.be/vgQwGI6Fk6Q)

YouTube: Defeaturing tools - Multi-select faces for defeaturing

[![](/images/Defeaturing-WB-%40Work_v4.png)](https://raw.githubusercontent.com/easyw/FreeCAD-tutorials/master/testing-files/removing-fillet-chamfer.mp4)

Defeaturing-WB - removing-fillet-chamfer

[![](/images/Defeaturing-WB-%40Work_v5.png)](https://peertube.mastodon.host/videos/watch/c6bc5abd-2eb7-48c7-af67-c4d8e6783872)

Defeaturing-WB - overview-features (in german language)

[![](/images//Defeaturing-WB-%40Work_v6.png)](https://raw.githubusercontent.com/easyw/FreeCAD-tutorials/master/testing-files/parametric-defeaturing.mp4)

Defeaturing-WB - parametric-defeaturing

### Repairing

- Sew a Shape
- Removing or Simplify Faces
- Remove Holes or Pockets
- Read or Change Tolerance
- make Fuzzy Boolean operations

## External workbenches

FreeCAD workbenches are easy to program in [Python](/Python "Python"), there are therefore many people developing additional workbenches outside of the FreeCAD main developers.

The [external workbenches](/External_workbenches "External workbenches") page has some information and tutorials on some of them, and the [FreeCAD Addons](https://github.com/FreeCAD/FreeCAD-addons) project aims at gathering them and making them easily installable from within FreeCAD.

New workbenches are in development, stay tuned!

Retrieved from "<http://wiki.freecad.org/index.php?title=Defeaturing_Workbench/en&oldid=811813>"
