---
title: 标准基础
---

![](/src/assets/images/Freecad.svg)

Std Base icon

## Introduction

标准基础不是一个真实的工作台，该页面从不属于任何特定工作台但可能被所有工作台使用的的基础系统收集所有命令。

## 工具

多数此页面中命令可以访问菜单、工具条和上下文菜单。

### 标注菜单

The standard menu is composed of 7 sub-menus. Each sub-menu has a dedicated page. Just click on any of the names below.

[File](/Std_File_Menu "Std File Menu")

[Edit](/Std_Edit_Menu "Std Edit Menu")

[View](/Std_View_Menu "Std View Menu")

[Tools](/Std_Tools_Menu "Std Tools Menu")

[Macro](/Std_Macro_Menu "Std Macro Menu")

[Windows](/Std_Windows_Menu "Std Windows Menu")

[Help](/Std_Help_Menu "Std Help Menu")

### Structure toolbar

- ![](/src/assets/images/Std_Part.svg) [Create part](/Std_Part "Std Part"): Creates a new part and makes it active.

- ![](/src/assets/images/Part_CoordinateSystem.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Create datums: [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/src/assets/images/Part_CoordinateSystem.svg) [Create coordinate system](/Part_CoordinateSystem "Part CoordinateSystem"): Creates a coordinate system object that can be attached to other objects. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/src/assets/images/Part_DatumPlane.svg) [Create datum plane](/Part_DatumPlane "Part DatumPlane"): Creates a datum plane object that can be attached to other objects. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/src/assets/images/Part_DatumLine.svg) [Create datum line](/Part_DatumLine "Part DatumLine"): Creates a datum line object that can be attached to other objects. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/src/assets/images/Part_DatumPoint.svg) [Create datum point](/Part_DatumPoint "Part DatumPoint"): Creates a datum point object that can be attached to other objects. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/src/assets/images/Std_Group.svg) [Create group](/Std_Group "Std Group"): Creates a new group.

- ![](/src/assets/images/Std_LinkMake.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) Link tools:

- ![](/src/assets/images/Std_LinkMake.svg) [Make link](/Std_LinkMake "Std LinkMake"): Creates a link.

- ![](/src/assets/images/Std_LinkMakeRelative.svg) [Make sub-link](/Std_LinkMakeRelative "Std LinkMakeRelative"): Creates a sub-object or sub-element link.

- ![](/src/assets/images/Std_LinkReplace.svg) [Replace with link](/Std_LinkReplace "Std LinkReplace"): Replaces object(s) with new link(s).

- ![](/src/assets/images/Std_LinkUnlink.svg) [Unlink](/Std_LinkUnlink "Std LinkUnlink"): Replaces link(s) with their linked object(s).

- ![](/src/assets/images/Std_LinkImport.svg) [Import link](/Std_LinkImport "Std LinkImport"): Imports selected external link(s).

- ![](/src/assets/images/Std_LinkImportAll.svg) [Import all links](/Std_LinkImportAll "Std LinkImportAll"): Imports all external link(s).

- ![](/src/assets/images/Std_VarSet.svg) [Create a variable set](/Std_VarSet "Std VarSet"): Creates a set of properties that can be used as variables in [expressions](/Expressions "Expressions"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

### Additional tools

- ![](/src/assets/images/Std_LinkMakeGroup.svg) [Make link group](/index.php?title=Std_LinkMakeGroup&action=edit&redlink=1 "Std LinkMakeGroup (page does not exist)"): Creates a group of links.

- [Expression actions](/Std_Expressions "Std Expressions"):

: \* [Copy selected](/Std_Expressions#Copy_selected "Std Expressions"): Copies expression data from selected objects to the Clipboard.

: \* [Copy active document](/Std_Expressions#Copy_active_document "Std Expressions"): Copies expression data from the active document to the Clipboard.

: \* [Copy all documents](/Std_Expressions#Copy_all_documents "Std Expressions"): Copies expression data from all documents to the Clipboard.

: \* [Paste](/Std_Expressions#Paste "Std Expressions"): Pastes expression data from the Clipboard.

- ![](/src/assets/images/Part_SelectFilter.svg)![](/src/assets/images/Toolbar_flyout_arrow_blue_background.svg) [Selection filter](/Part_SelectFilter "Part SelectFilter"): [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/src/assets/images/Vertex-selection.svg) [Vertex selection](/Part_SelectFilter#Vertex_selection "Part SelectFilter"): Only allows the selection of vertices.

- ![](/src/assets/images/Edge-selection.svg) [Edge selection](/Part_SelectFilter#Edge_selection "Part SelectFilter"): Only allows the selection of edges.

- ![](/src/assets/images/Face-selection.svg) [Face selection](/Part_SelectFilter#Face_selection "Part SelectFilter"): Only allows the selection of faces.

- ![](/src/assets/images/Clear-selection.svg) [All selection filters cleared](/Part_SelectFilter#All_selection_filters_cleared "Part SelectFilter"): Allows the selection of all subelements.

- ![](/src/assets/images/Std_TreeSelectAllInstances.svg) [Select all instances](/Std_TreeSelectAllInstances "Std TreeSelectAllInstances"): Selects all instances of an object in the [Tree view](/Tree_view "Tree view").

- ![](/src/assets/images/Std_ToggleFreeze.svg) [Toggle freeze](/Std_ToggleFreeze "Std ToggleFreeze"): Toggles the freeze state of objects. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

### Obsolete tools

- ![](/src/assets/images/View_Measure_Clear_All.svg) [Clear measurement](/View_Measure_Clear_All "View Measure Clear All"): Clears [Part](/Part_Workbench "Part Workbench") measurements. Not available in 1.0 and above. Use [Std Measure](/Std_Measure "Std Measure") instead.

- ![](/src/assets/images/View_Measure_Toggle_All.svg) [Toggle measurement](/View_Measure_Toggle_All "View Measure Toggle All"): Toggles the display of Part measurements. Not available in 1.0 and above. Use [Std Measure](/Std_Measure "Std Measure") instead.

- ![](/src/assets/images/Std_MeasureDistance.svg) [Measure distance](/Std_MeasureDistance "Std MeasureDistance"): Creates an object to measure and display a distance. Not available in 1.0 and above. Use [Std Measure](/Std_Measure "Std Measure") instead.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Base/zh-hans&oldid=1529659>"
