---
title: Bancada de trabalho Arch
---

:::caution
In v1.0 the BIM, Native-IFC and Arch Workbenches have been merged into the integratedBIM Workbench.
:::
![](/images/Workbench_Arch.svg)

Ícone da bancada de trabalho Arch

## Introdução

The ![](/images/Workbench_Arch.svg) [Arch Workbench](/Arch_Workbench "Arch Workbench") provides a modern [**B**uilding **I**nformation **M**odelling](http://en.wikipedia.org/wiki/Building_Information_Modeling) (BIM) workflow to FreeCAD, with support for features like fully parametric architectural entities such as walls, beams, roofs, windows, stairs, pipes, and furniture. It supports [**I**ndustry **F**oundation **C**lasses](/Arch_IFC "Arch IFC") (IFC) files, and production of 2D floor plans in combination with the ![](/images/Workbench_TechDraw.svg) [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").

A bancada Arch importa todas as ferramentas da [Bancada Draft](/Draft_Workbench "Draft Workbench"), pois usa objetos 2D para construir seus objetos arquitetônicos. No entanto, a Arch também pode usar objetos sólidos criados em outras bancadas, como a [Bancada Part](/Part_Workbench "Part Workbench") e a [Bancada PartDesign](/PartDesign_Workbench "PartDesign Workbench").

A funcionalidade BIM do FreeCAD agora está dividida progressivamente nesta Bancada, que contém ferramentas arquitetônicas básicas, e no [BIM Workbench](/BIM_Workbench "BIM Workbench"), que você pode instalar através do [Gerenciador de Complementos](/Std_AddonMgr "Std AddonMgr"). Este ambiente de trabalho adiciona uma nova camada de interface às ferramentas do Arch, com o objetivo de tornar o fluxo de trabalho BIM no FreeCAD mais intuitivo e fácil de usar.

Os desenvolvedores das bancadas Arch, Draft e BIM também colaboram com a [comunidade OSArch](https://osarch.org), que fomenta o uso do software livre no âmbito da construção e do design.

![](/images/Screenshot_arch_window.jpg)

## Ferramentas

Estas são as ferramentas para criar objetos arquitetônicos:

- ![](/images/Arch_Wall.svg) [Wall](/Arch_Wall "Arch Wall"): Creates a wall from scratch or using a selected object as a base.

- ![](/images/Arch_Structure.svg) [Structure](/Arch_Structure "Arch Structure"): Creates a structural element from scratch or using a selected object as a base.

- ![](/images/Arch_CompRebarStraight.png) [Rebar tools](/Arch_CompRebarStraight "Arch CompRebarStraight"): These tools, except the last, are only available if the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench") has been installed.

- ![](/images/Reinforcement_StraightRebar.svg) [Straight Rebar](/Reinforcement_StraightRebar "Reinforcement StraightRebar"): Creates a straight reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_UShapeRebar.svg) [U-Shape Rebar](/Reinforcement_UShapeRebar "Reinforcement UShapeRebar"): Creates a U-shape reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_LShapeRebar.svg) [L-Shape Rebar](/Reinforcement_LShapeRebar "Reinforcement LShapeRebar"): Creates an L-shape reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_StirrupRebar.svg) [Stirrup](/Reinforcement_StirrupRebar "Reinforcement StirrupRebar"): Creates a stirrup reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_BentShapeRebar.svg) [Bent-Shape Rebar](/Reinforcement_BentShapeRebar "Reinforcement BentShapeRebar"): Creates a bent-shape reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_HelicalRebar.svg) [Helical Rebar](/Reinforcement_HelicalRebar "Reinforcement HelicalRebar"): Creates a helical reinforcement bar in a selected structural element.

- ![](/images/Reinforcement_ColumnRebars.svg) [Column Reinforcement](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars"): Creates reinforcement bars in a selected column.

- ![](/images/Reinforcement_BeamRebars.svg) [Beam Reinforcement](/Reinforcement_BeamRebars "Reinforcement BeamRebars"): Creates reinforcement bars in a selected beam.

- ![](/images/Reinforcement_SlabRebars.svg) [Slab Reinforcement](/Reinforcement_SlabRebars "Reinforcement SlabRebars"): Creates reinforcement bars in a selected slab.

- ![](/images/Reinforcement_FootingRebars.svg) [Footing Reinforcement](/Reinforcement_FootingRebars "Reinforcement FootingRebars"): Creates reinforcement bars in a selected footing.

- ![](/images/Arch_Rebar.svg) [Custom Rebar](/Arch_Rebar "Arch Rebar"): Creates a custom reinforcement bar in a selected structural element using a sketch.

- ![](/images/Arch_CurtainWall.svg) [Curtain Wall](/Arch_CurtainWall "Arch CurtainWall"): Creates a curtain wall from scratch or using a selected object as a base.

- ![](/images/Arch_BuildingPart.svg) [Building Part](/Arch_BuildingPart "Arch BuildingPart"): Creates a building part including selected objects.

- ![](/images/Arch_Project.svg) [Project](/Arch_Project "Arch Project"): Creates a project including selected objects.

- ![](/images/Arch_Site.svg) [Site](/Arch_Site "Arch Site"): Creates a site including selected objects.

- ![](/images/Arch_Building.svg) [Building](/Arch_Building "Arch Building"): Creates a building including selected objects.

- ![](/images/Arch_Floor.svg) [Level](/Arch_Floor "Arch Floor"): Creates a floor including selected objects.

- ![](/images/Arch_Reference.svg) [External reference](/Arch_Reference "Arch Reference"): Links objects from another FreeCAD file into the current document.

- ![](/images/Arch_Window.svg) [Window](/Arch_Window "Arch Window"): Creates a window from scratch or using a selected object as a base.

- ![](/images/Arch_Roof.svg) [Roof](/Arch_Roof "Arch Roof"): Creates a sloped roof from a selected wire.

- ![](/images/Arch_CompAxis.png) [Axis tools](/Arch_CompAxis "Arch CompAxis")

- ![](/images/Arch_Axis.svg) [Axis](/Arch_Axis "Arch Axis"): Adds a 1-direction array of axes.

- ![](/images/Arch_AxisSystem.svg) [Axis System](/Arch_AxisSystem "Arch AxisSystem"): Adds an axis system composed of several axes.

- ![](/images/Arch_Grid.svg) [Grid](/Arch_Grid "Arch Grid"): Adds a grid-like object.

- ![](/images/Arch_SectionPlane.svg) [Section Plane](/Arch_SectionPlane "Arch SectionPlane"): Adds a section plane object.

- ![](/images/Arch_Space.svg) [Space](/Arch_Space "Arch Space"): Creates a space object.

- ![](/images/Arch_Stairs.svg) [Stairs](/Arch_Stairs "Arch Stairs"): Creates a stairs object.

- ![](/images/Arch_CompPanel.png) [Panel tools](/Arch_CompPanel "Arch CompPanel")

- ![](/images/Arch_Panel.svg) [Panel](/Arch_Panel "Arch Panel"): Creates a panel object from a selected 2D object.

- ![](/images/Arch_Panel_Cut.svg) [Panel Cut](/Arch_Panel_Cut "Arch Panel Cut"): Creates a 2D cut view from a panel.

- ![](/images/Arch_Panel_Sheet.svg) [Panel Sheet](/Arch_Panel_Sheet "Arch Panel Sheet"): Creates a 2D cut sheet including panel cuts or other 2D objects.

- ![](/images/Arch_Nest.svg) [Nest](/Arch_Nest "Arch Nest"): Allows to nest several flat objects inside a container shape.

- ![](/images/Arch_Equipment.svg) [Equipment](/Arch_Equipment "Arch Equipment"): Creates an equipment or furniture object.

- ![](/images/Arch_Frame.svg) [Frame](/Arch_Frame "Arch Frame"): Creates a frame object from a selected layout.

- ![](/images/Arch_Fence.svg) [Fence](/Arch_Fence "Arch Fence"): Creates a fence object from a selected post and path.

- ![](/images/Arch_Truss.svg) [Truss](/Arch_Truss "Arch Truss"): Creates a truss from a selected line or from scratch.

- ![](/images/Arch_Profile.svg) [Profile](/Arch_Profile "Arch Profile"): Creates a parametric 2D profile.

- ![](/images/Arch_CompSetMaterial.png) [Material tools](/Arch_CompSetMaterial "Arch CompSetMaterial")

- ![](/images/Arch_SetMaterial.svg) [Material](/Arch_SetMaterial "Arch SetMaterial"): Creates a material and attributes it to selected objects, if any.

- ![](/images/Arch_MultiMaterial.svg) [Multi-Material](/Arch_MultiMaterial "Arch MultiMaterial"): Creates a multi-material and attributes it to selected objects, if any.

- ![](/images/Arch_Schedule.svg) [Schedule](/Arch_Schedule "Arch Schedule"): Creates different types of schedules.

- ![](/images/Arch_CompPipe.png) [Pipe tools](/Arch_CompPipe "Arch CompPipe")

- ![](/images/Arch_Pipe.svg) [Pipe](/Arch_Pipe "Arch Pipe"): Creates a pipe.

- ![](/images/Arch_PipeConnector.svg) [Connector](/Arch_PipeConnector "Arch PipeConnector"): Creates a corner or T-connection between 2 or 3 selected pipes.

### Ferramentas de Modificação

Estas são as ferramentas para modificar objetos arquitetônicos:

- ![](/images/Arch_CutPlane.svg) [Cut with plane](/Arch_CutPlane "Arch CutPlane"): Cuts an object according to a plane.

- ![](/images/Arch_CutLine.svg) [Cut with line](/Arch_CutLine "Arch CutLine"): Cuts an object according to a line.

- ![](/images/Arch_Add.svg) [Add component](/Arch_Add "Arch Add"): Adds objects to a component.

- ![](/images/Arch_Remove.svg) [Remove component](/Arch_Remove "Arch Remove"): Subtracts or removes objects from a component.

- ![](/images/Arch_Survey.svg) [Survey](/Arch_Survey "Arch Survey"): Enters or leaves surveying mode.

### Utilidades

Estas são as ferramentas adicionais para te ajudar em tarefas específicas.

- ![](/images/Arch_Component.svg) [Component](/Arch_Component "Arch Component"): Creates a non-parametric Arch component.

- ![](/images/Arch_CloneComponent.svg) [Clone component](/Arch_CloneComponent "Arch CloneComponent"): Produces Arch Components that are clones of selected Arch objects (not to be confused with [Draft Clone](/Draft_Clone "Draft Clone")).

- ![](/images/Arch_SplitMesh.svg) [Split Mesh](/Arch_SplitMesh "Arch SplitMesh"): Splits a selected mesh into separate components.

- ![](/images/Arch_MeshToShape.svg) [Mesh to Shape](/Arch_MeshToShape "Arch MeshToShape"): Converts a mesh into a shape, unifying coplanar faces.

- ![](/images/Arch_SelectNonSolidMeshes.svg) [Select non-manifold meshes](/Arch_SelectNonSolidMeshes "Arch SelectNonSolidMeshes"): Selects all non-manifold meshes from the current selection or from the document.

- ![](/images/Arch_RemoveShape.svg) [Remove Shape from Arch](/Arch_RemoveShape "Arch RemoveShape"): Turns cubic shape-based Arch object fully parametric.

- ![](/images/Arch_CloseHoles.svg) [Close holes](/Arch_CloseHoles "Arch CloseHoles"): Closes holes in a selected shape-based object.

- ![](/images/Arch_MergeWalls.svg) [Merge Walls](/Arch_MergeWalls "Arch MergeWalls"): Merge two or more walls.

- ![](/images/Arch_Check.svg) [Check](/Arch_Check "Arch Check"): Check if the selected objects are solids and don't contain defects.

- ![](/images/Arch_ToggleIfcBrepFlag.svg) [Toggle IFC Brep flag](/Arch_ToggleIfcBrepFlag "Arch ToggleIfcBrepFlag"): Forces a selected object to be exported as an [IfcFacetedBrep](http://www.buildingsmart-tech.org/ifc/IFC4/final/html/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm).

- ![](/images/Arch_3Views.svg) [3 Views from mesh](/Arch_3Views "Arch 3Views"): Creates top, front and side views from a [mesh](/Mesh_Workbench "Mesh Workbench").

- ![](/images/Arch_IfcSpreadsheet.svg) [Create IFC spreadsheet...](/Arch_IfcSpreadsheet "Arch IfcSpreadsheet"): Creates a spreadsheet to store [IFC](/Arch_IFC "Arch IFC") properties of an object.

- ![](/images/Arch_ToggleSubs.svg) [Toggle subcomponents](/Arch_ToggleSubs "Arch ToggleSubs"): Shows or hides the subcomponents of an Arch object.

### Preferências

- ![](/images/Preferences-arch.svg) [Preferências](/Arch_Preferences/pt-br "Arch Preferences/pt-br"): preferências em relação à aparência padrão de paredes, estruturas, vergalhões, janelas, escadas, painéis, tubos, grades e eixos.

### Formatos de arquivos

- [IFC](/Arch_IFC/pt-br "Arch IFC/pt-br"): classes de fundação da indústria
- [DAE](/Arch_DAE/pt-br "Arch DAE/pt-br"): Formato de malha Collada
- [OBJ](/Arch_OBJ/pt-br "Arch OBJ/pt-br"): Formato da malha objeto (somente exportação)
- [JSON](/Arch_JSON/pt-br "Arch JSON/pt-br"): Formato JavaScript Object Notation (somente exportação)
- [3DS](/Arch_3DS/pt-br "Arch 3DS/pt-br"): Formato 3DS (somente importação)
- [SHP](/Arch_SHP/pt-br "Arch SHP/pt-br"): Arquivos em forma de GIS (somente importação)

## API

A bancada (módulo) Arch pode ser usado em scripts [Python](/Python/pt-br "Python/pt-br") e [macros](/Macros/pt-br "Macros/pt-br") usando as funções [Arch Python API](http://www.freecadweb.org/api/Arch.html).

## Tutoriais

- [Architecture workflow](http://yorik.uncreated.net/guestblog.php?tag=freecad): Um exemplo de como o FreeCAD pode começar a ter seu lugar preliminar em um fluxo de trabalho de arquitetura.
- [Tutorial Arch](/Arch_tutorial/pt-br "Arch tutorial/pt-br") (v0.14)
- [Visão geral rápida da Arch no blog de Yorik](http://yorik.uncreated.net/guestblog.php?2012=180) (v0.13)
- [Apresentação em vídeo da bancada de trabalho Arch](https://www.youtube.com/watch?v=lTDOeHapv_E) (2016)
- [Tutorial do painel da Arch](/Arch_panel_tutorial/pt-br "Arch panel tutorial/pt-br") (v0.15)
- [Capítulo de modelagem BIM do manual do FreeCAD](/Manual:BIM_modeling/pt-br "Manual:BIM modeling/pt-br")
- [Importação de STL ou OBJ](/Import_from_STL_or_OBJ/pt-br "Import from STL or OBJ/pt-br")
- [Exportação para STL ou OBJ](/Export_to_STL_or_OBJ/pt-br "Export to STL or OBJ/pt-br")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Workbench/pt-br&oldid=1433537>"
