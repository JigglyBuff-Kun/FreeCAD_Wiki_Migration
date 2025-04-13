---
title: 표준 기반(Std Base)
---

![](/images/Freecad.svg)

표준 기반 아이콘

## 소개

표준 기반(Std Base)은 작업대가 아니라 모든 작업대에서 사용할 수 있는 "표준" 명령들의 모음입니다.

## 도구

대부분의 **표준 기반** 도구는 [표준 메뉴](/Standard_Menu/ko "Standard Menu/ko")와 표준 도구모음에서 접근할 수 있습니다. 도구 모음이나 상황에 맞는 메뉴를 통해서만 사용할 수 있는 도구는 [추가도구](#Additional_tools) 아래에 나열되어 있습니다.

### 표준 메뉴 도구

표준 메뉴는 7 개의 하위 메뉴로 구성됩니다. 각 하위 메뉴에는 전용 페이지가 있습니다. 아래 이름 중 하나를 클릭하십시오.

[파일](/Std_File_Menu/ko "Std File Menu/ko")

[편집](/Std_Edit_Menu/ko "Std Edit Menu/ko")

[보기](/Std_View_Menu/ko "Std View Menu/ko")

[도구](/Std_Tools_Menu/ko "Std Tools Menu/ko")

[매크로](/Std_Macro_Menu/ko "Std Macro Menu/ko")

[창](/Std_Windows_Menu/ko "Std Windows Menu/ko")

[도움말](/Std_Help_Menu/ko "Std Help Menu/ko")

### Structure toolbar

- ![](/images/Std_Part.svg) [Create part](/Std_Part "Std Part"): Creates a new part and makes it active.

- ![](/images/Part_CoordinateSystem.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create datums: [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Part_CoordinateSystem.svg) [Create coordinate system](/Part_CoordinateSystem "Part CoordinateSystem"): Creates a coordinate system object that can be attached to other objects. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Part_DatumPlane.svg) [Create datum plane](/Part_DatumPlane "Part DatumPlane"): Creates a datum plane object that can be attached to other objects. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Part_DatumLine.svg) [Create datum line](/Part_DatumLine "Part DatumLine"): Creates a datum line object that can be attached to other objects. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Part_DatumPoint.svg) [Create datum point](/Part_DatumPoint "Part DatumPoint"): Creates a datum point object that can be attached to other objects. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Std_Group.svg) [Create group](/Std_Group "Std Group"): Creates a new group.

- ![](/images/Std_LinkMake.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Link tools:

- ![](/images/Std_LinkMake.svg) [Make link](/Std_LinkMake "Std LinkMake"): Creates a link.

- ![](/images/Std_LinkMakeRelative.svg) [Make sub-link](/Std_LinkMakeRelative "Std LinkMakeRelative"): Creates a sub-object or sub-element link.

- ![](/images/Std_LinkReplace.svg) [Replace with link](/Std_LinkReplace "Std LinkReplace"): Replaces object(s) with new link(s).

- ![](/images/Std_LinkUnlink.svg) [Unlink](/Std_LinkUnlink "Std LinkUnlink"): Replaces link(s) with their linked object(s).

- ![](/images/Std_LinkImport.svg) [Import link](/Std_LinkImport "Std LinkImport"): Imports selected external link(s).

- ![](/images/Std_LinkImportAll.svg) [Import all links](/Std_LinkImportAll "Std LinkImportAll"): Imports all external link(s).

- ![](/images/Std_VarSet.svg) [Create a variable set](/Std_VarSet "Std VarSet"): Creates a set of properties that can be used as variables in [expressions](/Expressions "Expressions"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

## 추가 도구

- ![](/images/Std_LinkMakeGroup.svg) [Make link group](/index.php?title=Std_LinkMakeGroup&action=edit&redlink=1 "Std LinkMakeGroup (page does not exist)"): Creates a group of links.

- [Expression actions](/Std_Expressions "Std Expressions"):

: \* [Copy selected](/Std_Expressions#Copy_selected "Std Expressions"): Copies expression data from selected objects to the Clipboard.

: \* [Copy active document](/Std_Expressions#Copy_active_document "Std Expressions"): Copies expression data from the active document to the Clipboard.

: \* [Copy all documents](/Std_Expressions#Copy_all_documents "Std Expressions"): Copies expression data from all documents to the Clipboard.

: \* [Paste](/Std_Expressions#Paste "Std Expressions"): Pastes expression data from the Clipboard.

- ![](/images/Part_SelectFilter.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) [Selection filter](/Part_SelectFilter "Part SelectFilter"): [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Vertex-selection.svg) [Vertex selection](/Part_SelectFilter#Vertex_selection "Part SelectFilter"): Only allows the selection of vertices.

- ![](/images/Edge-selection.svg) [Edge selection](/Part_SelectFilter#Edge_selection "Part SelectFilter"): Only allows the selection of edges.

- ![](/images/Face-selection.svg) [Face selection](/Part_SelectFilter#Face_selection "Part SelectFilter"): Only allows the selection of faces.

- ![](/images/Clear-selection.svg) [All selection filters cleared](/Part_SelectFilter#All_selection_filters_cleared "Part SelectFilter"): Allows the selection of all subelements.

- ![](/images/Std_TreeSelectAllInstances.svg) [Select all instances](/Std_TreeSelectAllInstances "Std TreeSelectAllInstances"): Selects all instances of an object in the [Tree view](/Tree_view "Tree view").

- ![](/images/Std_ToggleFreeze.svg) [Toggle freeze](/Std_ToggleFreeze "Std ToggleFreeze"): Toggles the freeze state of objects. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

### Obsolete tools

- ![](/images/View_Measure_Clear_All.svg) [Clear measurement](/View_Measure_Clear_All "View Measure Clear All"): Clears [Part](/Part_Workbench "Part Workbench") measurements. Not available in 1.0 and above. Use [Std Measure](/Std_Measure "Std Measure") instead.

- ![](/images/View_Measure_Toggle_All.svg) [Toggle measurement](/View_Measure_Toggle_All "View Measure Toggle All"): Toggles the display of Part measurements. Not available in 1.0 and above. Use [Std Measure](/Std_Measure "Std Measure") instead.

- ![](/images/Std_MeasureDistance.svg) [Measure distance](/Std_MeasureDistance "Std MeasureDistance"): Creates an object to measure and display a distance. Not available in 1.0 and above. Use [Std Measure](/Std_Measure "Std Measure") instead.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Base/ko&oldid=1529663>"
