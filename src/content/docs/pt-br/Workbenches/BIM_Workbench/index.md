---
title: Bancada de trabalho BIM
---

:::caution
Na v1.0 do BIM, as Bancadas Native-IFC andArchforam mescladas na Bancada integrada BIM.Esta página foi atualizada para essa versão.
:::
![](/images/Workbench_BIM.svg)

ícone da bancada BIM

## Introdução

A ![](/images/Workbench_BIM.svg) [Bancada BIM](/BIM_Workbench "BIM Workbench") provê um fluxo de trabalho de [Modelo da Informação da Construção](https://en.wikipedia.org/wiki/Building_information_modeling) moderno no FreeCAD, com objetos totalmente parametrizados como, por exemplo, paredes, vigas, telhados, janelas, escadas, canos, e móveis. Ela é compatível com arquivos [Industry Foundation Classes](/Arch_IFC "Arch IFC") (IFC), e a produção de plantas 2D em combinação com a ![](/images/Workbench_TechDraw.svg) [Bancada TechDraw](/TechDraw_Workbench "TechDraw Workbench").

A Bancada BIM importa ferramentas da ![](/images/Workbench_Draft.svg) [Bancada Draft](/Draft_Workbench "Draft Workbench"), para utilizar seus objetos 3d na contrução de objetos 3D paramétricos. Mas ela pode também usar formas sólidas criadas com outras bancadas como as ![](/images/Workbench_Part.svg) [Part](/Part_Workbench "Part Workbench") e ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench "PartDesign Workbench").

Veja o [guia de migração FreeCAD BIM](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide) (em inglês) para uma rápida visão geral se você for usuários de outra aplicação BIM.

Os desenvolvedores das bancadas Draft e BIM também colaboram com a [comunidade OSArch](https://osarch.org), cujo principal objetivo é melhorar o design de construção usando unicamente software livre.

![](/images/BIM_workbench_presentation.png)

## Começando

![](/images/BIM_welcome_screen.png)

Quando a Bancada BIM é iniciada pela primeira vez, um diálogo de boas-vindas é apresentado, apresentando um visão geral de como a bancada funciona, e permitindo que o usuário inicie um [tutorial integrado](/BIM_ingame_tutorial "BIM ingame tutorial"). Esse diálogo também está disponível a partir do menu **Ajuda**. Quando a tela de boas-vindas é fechada ao clicar em OK, o [diálogo de configuração BIM](/BIM_Setup "BIM Setup") será mostrado, permitindo ao usuário atribuir rapidamente algumas preferências mais comuns referentes ao BIM do FreeCAD sem necessitar navegar nas [Páginas de preferências do FreeCAD](/Preferences_Editor "Preferences Editor").

A ferramenta [configuração do projeto BIM](/BIM_Setup "BIM Setup") permite que você configure rapidamente um projeto BIM inserindo algumas informações básicas sobre o seu projeto. Em seguida, você pode, por exemplo, usar as diferentes ferramentas de desenho 2D para esboçar diretrizes e linhas de base, e depois usar as diferentes ferramentas de modelagem 3D para construir automaticamente objetos BIM 3D a partir delas. Uma linha, por exemplo, pode se tornar uma parede simplesmente selecionando-a e pressionando o botão [Parede](/Arch_Wall "Arch Wall").

Elementos comuns de construção, como [paredes](/Arch_Wall "Arch Wall") ou [colunas](/BIM_Column "BIM Column"), são facilmente criados pressionando o botão apropriado na barra de ferramentas e clicando em pontos na vista 3D. Eles podem ser movidos, rotacionados e editados após a criação. A maioria dos elementos BIM são criados no [plano de trabalho](/Draft_SelectPlane "Draft SelectPlane") atual, portanto, um fluxo de trabalho típico envolve posicionar o plano de trabalho primeiro e, em seguida, criar um elemento BIM. Elementos mais complexos podem ser criados desenhando elementos 2D primeiro e, em seguida, usando uma das ferramentas BIM para convertê-los no elemento desejado.

Elementos de projetos de construção podem ser organizados usando [terrenos](/Arch_Site "Arch Site"), [edifícios](/Arch_Building "Arch Building") e [níveis](/Arch_BuildingPart "Arch BuildingPart"), para reproduzir o que é comumente feito em outras aplicações BIM. No FreeCAD, no entanto, essas estruturas não são obrigatórias, e você é livre para organizar os elementos do seu modelo como achar melhor, por exemplo, usando [grupos](/Std_Group "Std Group").

Desenhos 2D podem ser gerados a partir de um modelo para representar vistas de planta, corte ou elevação. Para gerar esse tipo de desenho, [planos de corte](/Arch_SectionPlane "Arch SectionPlane") são posicionados no modelo para indicar onde ele deve ser cortado ou visualizado. Uma vez que os planos de corte estão posicionados, dois métodos são possíveis:

1. Criar vistas projetadas no documento usando [vistas de forma](/Draft_Shape2DView "Draft Shape2DView"), depois adicionar todas as anotações necessárias, como textos e cotas, e então colocar tudo isso em uma página. Essa é a maneira recomendada, pois oferece mais flexibilidade.
2. Criar uma vista diretamente em uma página a partir do plano de corte. Nesse caso, todas as anotações 2D necessárias devem ser adicionadas ao plano de corte ou feitas diretamente na página. Esse método é menos flexível.

Por fim, tabelas de quantitativos podem ser criadas usando a ferramenta [cronograma](/Arch_Schedule "Arch Schedule").

Se você está acostumado com outra aplicação BIM, confira nossa [tabela de compatibilidade de aplicativos BIM](/BIM_application_compatibility_table "BIM application compatibility table") para se orientar ao começar a usar o FreeCAD.

![](/images/BIM_tutorial_screenshot.png)

O [tutorial integrado](/BIM_ingame_tutorial "BIM ingame tutorial") é uma maneira fácil de rapidamente se familiarizar com a bancada de trabalho BIM.

## Ferramentas

A bancada de trabalho BIM reúne ferramentas de várias outras bancadas do FreeCAD, principalmente [Draft](/Draft_Workbench "Draft Workbench") e [Part](/Part_Workbench "Part Workbench"), reorganizadas de forma aproximada em categorias lógicas.

Além disso, se [addons](/External_workbenches "External workbenches") como esses estiverem instalados, ferramentas de [Reinforcement](/Reinforcement_Workbench "Reinforcement Workbench") (ferramentas adicionais para barras de reforço), [Fasteners](/Fasteners_Workbench "Fasteners Workbench") (parafusos e porcas), [Flamingo/Dodo](/Flamingo_Workbench "Flamingo Workbench") (ferramentas para estruturas metálicas e tubulações) e [Parts Library](/Parts_Library_Workbench "Parts Library Workbench") são automaticamente incluídas na bancada de trabalho BIM.

A bancada de trabalho BIM também adiciona uma série de itens na **barra de status** do FreeCAD e alguns **itens de menu de contexto**, acessíveis ao clicar com o botão direito na vista 3D ou na vista em árvore.

### Desenho 2D

Objetos 2D são comumente usados como auxiliares de desenho, ou para traçar linhas de base e perfis para construir objetos BIM. Eles também podem ser usados para desenhar símbolos e anotações no seu modelo. Além dos esboços, que usam seu próprio sistema de coordenadas, os objetos 2D serão desenhados no [plano de trabalho](/Draft_SelectPlane "Draft SelectPlane") atual.

- ![](/images/BIM_Sketch.svg) [Esboço](/BIM_Sketch/pt-br "BIM Sketch/pt-br"): Cria um novo esboço e entra no modo de edição de esboço. Os esboços são objetos 2D avançados com suporte a restrições.

- ![](/images/Draft_Line.svg) [Linha](/Draft_Line "Draft Line"): Cria uma linha reta.

- ![](/images/Draft_Wire.svg) [Polilinha](/Draft_Wire "Draft Wire"): Cria uma polilinha (também chamada de fio), uma sequência de vários segmentos de linha conectados.

- ![](/images/Draft_Circle.svg) [Círculo](/Draft_Circle "Draft Circle"): Cria um círculo a partir de um centro e um raio.

- ![](/images/Draft_Arc.svg) [Arco](/Draft_Arc "Draft Arc"): Cria um arco circular a partir de um centro, um raio, um ângulo inicial e um ângulo de abertura.

- ![](/images/Draft_Arc_3Points.svg) [Arc by 3 points](/Draft_Arc_3Points "Draft Arc 3Points"): Creates a circular arc from three points that define its circumference.

- ![](/images/Draft_Fillet.svg) [Fillet](/Draft_Fillet "Draft Fillet"): Creates a fillet, a rounded corner, or a chamfer, a straight edge, between two [Draft Lines](/Draft_Line "Draft Line").

- ![](/images/Draft_Ellipse.svg) [Ellipse](/Draft_Ellipse "Draft Ellipse"): Creates an ellipse from two points defining a rectangle in which the ellipse will fit.

- ![](/images/Draft_Polygon.svg) [Polygon](/Draft_Polygon "Draft Polygon"): Creates a regular polygon from a center and a radius.

- ![](/images/Draft_Rectangle.svg) [Rectangle](/Draft_Rectangle "Draft Rectangle"): Creates a rectangle from two points.

- ![](/images/Draft_BSpline.svg) [B-spline](/Draft_BSpline "Draft BSpline"): Creates a B-spline curve from several points.

- ![](/images/Draft_BezCurve.svg) [Bézier curve](/Draft_BezCurve "Draft BezCurve"): Creates a Bézier curve from several points.

- ![](/images/Draft_CubicBezCurve.svg) [Cubic Bézier curve](/Draft_CubicBezCurve "Draft CubicBezCurve"): Creates a Bézier curve of the third degree.

- ![](/images/Draft_Point.svg) [Point](/Draft_Point "Draft Point"): Creates a simple point.

### 3D/BIM

3D and BIM objects are the real-world elements that will compose your BIM project.

- ![](/images/BIM_Project.svg) [Project](/BIM_Project "BIM Project"): Creates an IFC project including selected objects.

- ![](/images/Arch_Site.svg) [Site](/Arch_Site "Arch Site"): Creates a site including selected objects.

- ![](/images/Arch_Building.svg) [Building](/Arch_Building "Arch Building"): Creates a building including selected objects.

- ![](/images/Arch_Floor.svg) [Level](/Arch_Floor "Arch Floor"): Creates a floor including selected objects.

- ![](/images/Arch_Space.svg) [Space](/Arch_Space "Arch Space"): Creates a space object.

- ![](/images/Arch_Wall.svg) [Wall](/Arch_Wall "Arch Wall"): Creates a wall from scratch or using a selected object as a base.

- ![](/images/Arch_CurtainWall.svg) [Curtain Wall](/Arch_CurtainWall "Arch CurtainWall"): Creates a curtain wall from scratch or using a selected object as a base.

- ![](/images/BIM_Column.svg) [Column](/BIM_Column "BIM Column"): Creates a vertical [structural](/Arch_Structure "Arch Structure") element at a given point, optionally using a selected object as a profile.

- ![](/images/BIM_Beam.svg) [Beam](/BIM_Beam "BIM Beam"): Creates a horizontal [structural](/Arch_Structure "Arch Structure") element between two points, optionally using a selected object as a profile.

- ![](/images/BIM_Slab.svg) [Slab](/BIM_Slab "BIM Slab"): Creates a flat [structural](/Arch_Structure "Arch Structure") element by extruding a selected flat object.

- ![](/images/BIM_Door.svg) [Door](/BIM_Door "BIM Door"): Creates a [Window](/Arch_Window "Arch Window") object using door presets.

- ![](/images/Arch_Window.svg) [Window](/Arch_Window "Arch Window"): Creates a window from scratch or using a selected object as a base.

- ![](/images/Arch_Pipe.svg) [Pipe](/Arch_Pipe "Arch Pipe"): Creates a pipe.

- ![](/images/Arch_PipeConnector.svg) [Connector](/Arch_PipeConnector "Arch PipeConnector"): Creates a corner or T-connection between 2 or 3 selected pipes.

- ![](/images/Arch_Stairs.svg) [Stairs](/Arch_Stairs "Arch Stairs"): Creates a stairs object.

- ![](/images/Arch_Roof.svg) [Roof](/Arch_Roof "Arch Roof"): Creates a sloped roof from a selected wire.

- ![](/images/Arch_Panel.svg) [Panel](/Arch_Panel "Arch Panel"): Creates a panel object from a selected 2D object.

- ![](/images/Arch_Frame.svg) [Frame](/Arch_Frame "Arch Frame"): Creates a frame object from a selected layout.

- ![](/images/Arch_Fence.svg) [Fence](/Arch_Fence "Arch Fence"): Creates a fence object from a selected post and path.

- ![](/images/Arch_Truss.svg) [Truss](/Arch_Truss "Arch Truss"): Creates a truss from a selected line or from scratch.

- ![](/images/Arch_Equipment.svg) [Equipment](/Arch_Equipment "Arch Equipment"): Creates an equipment or furniture object.

- Reinforcement tools:

: These tools, except the first, are only available if the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench") has been installed.

- ![](/images/Arch_Rebar.svg) [Custom Rebar](/Arch_Rebar "Arch Rebar"): Creates a custom reinforcement bar in a selected structural element using a sketch.

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

* Generic 3D tools:

: These tools build generic 3D objects that can be turned or used into BIM components.

- ![](/images/Arch_Profile.svg) [Profile](/Arch_Profile "Arch Profile"): Creates a parametric 2D profile.

- ![](/images/BIM_Box.svg) [Box](/BIM_Box "BIM Box"): Creates a box by specifying its dimensions graphically.

- ![](/images/Part_Builder.svg) [Shape builder...](/Part_Builder "Part Builder"): Creates more complex shapes from various geometric primitives.

- ![](/images/Draft_Facebinder.svg) [Facebinder](/Draft_Facebinder "Draft Facebinder"): creates a surface object from selected faces.

- ![](/images/BIM_Library.svg) [Objects library](/BIM_Library "BIM Library"): Inserts an equipment or furniture object. Requires the [Parts Library](/Parts_Library "Parts Library") addon.

- ![](/images/Arch_Component.svg) [Component](/Arch_Component "Arch Component"): Creates a non-parametric Arch component.

- ![](/images/Arch_Reference.svg) [External reference](/Arch_Reference "Arch Reference"): Links objects from another FreeCAD file into the current document.

### Annotation

Annotations are visual help objects that can be placed inside your model. They can be used to export your model directly to a 2D format like [DXF](/Draft_DXF "Draft DXF"), or reused when creating 2D views of your model with the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").

- ![](/images/BIM_Text.svg) [Text](/BIM_Text "BIM Text"): Creates a 2D text in a document or on a TechDraw page.

- ![](/images/Draft_ShapeString.svg) [Shape from text](/Draft_ShapeString "Draft ShapeString"): Creates a compound shape that represents a text string.

- ![](/images/BIM_DimensionAligned.svg) [Aligned dimension](/BIM_DimensionAligned "BIM DimensionAligned"): Creates a dimension aligned with two points or a selected edge.

- ![](/images/BIM_DimensionHorizontal.svg) [Horizontal dimension](/BIM_DimensionHorizontal "BIM DimensionHorizontal"): Creates an horizontal dimension between two points or from a selected edge.

- ![](/images/BIM_DimensionVertical.svg) [Vertical dimension](/BIM_DimensionVertical "BIM DimensionVertical"): Creates a vertical dimension between two points or from a selected edge.

- ![](/images/BIM_Leader.svg) [Leader](/BIM_Leader "BIM Leader"): Creates a 2-segment polyline with an arrow at its end, to be used as a leader line in conjunction with a [Text](/BIM_Text "BIM Text").

- ![](/images/Draft_Label.svg) [Label](/Draft_Label "Draft Label"): Creates a multi-line text with a 2-segment leader line and an arrow.

- ![](/images/Arch_Axis.svg) [Axis](/Arch_Axis "Arch Axis"): Adds a 1-direction array of axes.

- ![](/images/Arch_AxisSystem.svg) [Axis System](/Arch_AxisSystem "Arch AxisSystem"): Adds an axis system composed of several axes.

- ![](/images/Arch_Grid.svg) [Grid](/Arch_Grid "Arch Grid"): Adds a grid-like object.

- ![](/images/Arch_SectionPlane.svg) [Section Plane](/Arch_SectionPlane "Arch SectionPlane"): Adds a section plane object.

- ![](/images/Draft_Hatch.svg) [Hatch](/Draft_Hatch "Draft Hatch"): Creates hatches on the planar faces of a selected object.

- ![](/images/BIM_TDPage.svg) [Page](/BIM_TDPage "BIM TDPage"): Creates a [TechDraw page](/TechDraw_PageTemplate "TechDraw PageTemplate") from a template SVG file.

- ![](/images/BIM_TDView.svg) [View](/BIM_TDView "BIM TDView"): Creates a view of the selected object(s) such as a [Section plane](/Arch_SectionPlane "Arch SectionPlane") or a Group containing the different elements of a 2D view.

- ![](/images/BIM_Shape2DView.svg) [Shape-based view](/BIM_Shape2DView "BIM Shape2DView"): Creates a 2D projected view from a selected object such as a [Section plane](/Arch_SectionPlane "Arch SectionPlane") or a [Level](/Arch_BuildingPart "Arch BuildingPart").

### Snapping

This menu contains the [Draft Snap](/Draft_Snap "Draft Snap") tools as well as the following tools:

- ![](/images/BIM_SetWPTop.svg) [Working Plane Top](/BIM_SetWPTop "BIM SetWPTop"): Places the working plane on the global XY plane (ground).

- ![](/images/BIM_SetWPFront.svg) [Working Plane Front](/BIM_SetWPFront "BIM SetWPFront"): Places the working plane on the global XZ plane (front).

- ![](/images/BIM_SetWPSide.svg) [Working Plane Side](/BIM_SetWPSide "BIM SetWPSide"): Places the working plane on the global YZ plane (side).

### Modificar

- ![](/images/Draft_Move.svg) [Move](/Draft_Move "Draft Move"): Moves or copies selected objects from one point to another.

- ![](/images/BIM_Copy.svg) [Copy](/BIM_Copy "BIM Copy"): Copies selected objects from one point to another.

- ![](/images/Draft_Rotate.svg) [Rotate](/Draft_Rotate "Draft Rotate"): Rotates or copies selected objects around a center point by a given angle.

- ![](/images/BIM_Clone.svg) [Clone](/BIM_Clone "BIM Clone"): Clones selected objects.

- ![](/images/BIM_SimpleCopy.svg) [Create simple copy](/BIM_SimpleCopy "BIM SimpleCopy"): Creates a non-parametric copy of a selected object. This is the same tool as [Part SimpleCopy](/Part_SimpleCopy "Part SimpleCopy").

- ![](/images/BIM_Compound.svg) [Make compound](/BIM_Compound "BIM Compound"): Creates a compound from selected objects. This is the same tool as [Part Compound](/Part_Compound "Part Compound").

- ![](/images/Draft_Offset.svg) [Offset](/Draft_Offset "Draft Offset"): Offsets each segment of a selected object over a given distance, or creates an offset copy of the selected object.

- ![](/images/BIM_Offset2D.svg) [2D Offset...](/BIM_Offset2D "BIM Offset2D"): Constructs a parallel wire at a given distance from the original, or enlarges/shrinks a planar face (parametric version). This is the same tool as [Part Offset2D](/Part_Offset2D "Part Offset2D").

- ![](/images/Draft_Trimex.svg) [Trimex](/Draft_Trimex "Draft Trimex"): Trims or extends a selected object.

- ![](/images/Draft_Join.svg) [Join](/Draft_Join "Draft Join"): Joins [Draft Lines](/Draft_Line "Draft Line") and [Draft Wires](/Draft_Wire "Draft Wire") into a single wire.

- ![](/images/Draft_Split.svg) [Split](/Draft_Split "Draft Split"): Splits a [Draft Line](/Draft_Line "Draft Line") or [Draft Wire](/Draft_Wire "Draft Wire") at a specified point or edge.

- ![](/images/Draft_Scale.svg) [Scale](/Draft_Scale "Draft Scale"): Scales or copies selected objects around a base point.

- ![](/images/Draft_Stretch.svg) [Stretch](/Draft_Stretch "Draft Stretch"): Stretches objects by moving selected points.

- ![](/images/Draft_Draft2Sketch.svg) [Draft to sketch](/Draft_Draft2Sketch "Draft Draft2Sketch"): Converts Draft objects to [Sketcher Sketches](/Sketcher_NewSketch "Sketcher NewSketch") and vice versa.

- ![](/images/Draft_Upgrade.svg) [Upgrade](/Draft_Upgrade "Draft Upgrade"): Upgrades selected objects.

- ![](/images/Draft_Downgrade.svg) [Downgrade](/Draft_Downgrade "Draft Downgrade"): Downgrades selected objects.

- ![](/images/Arch_Add.svg) [Add component](/Arch_Add "Arch Add"): Adds objects to a component.

- ![](/images/Arch_Remove.svg) [Remove component](/Arch_Remove "Arch Remove"): Subtracts or removes objects from a component.

- ![](/images/Draft_OrthoArray.svg) [Array](/Draft_OrthoArray "Draft OrthoArray"): Creates an orthogonal array from a selected object. It can optionally create a [Link](/App_Link "App Link") array.

- ![](/images/Draft_PathArray.svg) [Path array](/Draft_PathArray "Draft PathArray"): Creates an array from a selected object by placing copies along a path.

- ![](/images/Draft_PolarArray.svg) [Polar array](/Draft_PolarArray "Draft PolarArray"): Creates an array from a selected object by placing copies along a circumference. It can optionally create a [Link](/App_Link "App Link") array.

- ![](/images/Draft_PointArray.svg) [Point array](/Draft_PointArray "Draft PointArray"): Creates an array from a selected object by placing copies at the points from a point compound.

- ![](/images/Arch_CutPlane.svg) [Cut with plane](/Arch_CutPlane "Arch CutPlane"): Cuts an object according to a plane.

- ![](/images/Draft_Mirror.svg) [Mirror](/Draft_Mirror "Draft Mirror"): Creates mirrored copies from selected objects.

- ![](/images/BIM_Extrude.svg) [Extrude...](/BIM_Extrude "BIM Extrude"): Extrudes planar faces of an object. This is the same tool as [Part Extrude](/Part_Extrude "Part Extrude").

- ![](/images/BIM_Cut.svg) [Difference](/BIM_Cut "BIM Cut"): Subtracts one object from another. This is the same tool as [Part Cut](/Part_Cut "Part Cut").

- ![](/images/BIM_Fuse.svg) [Union](/BIM_Fuse "BIM Fuse"): Fuses two objects. This is the same tool as [Part Fuse](/Part_Fuse "Part Fuse").

- ![](/images/BIM_Common.svg) [Intersection](/BIM_Common "BIM Common"): Extracts the common part of two objects. This is the same tool as [Part Common](/Part_Common "Part Common").

### Gerenciar

- ![](/images/BIM_Setup.svg) [BIM Setup...](/BIM_Setup "BIM Setup"): Configures some of the FreeCAD preferences most commonly used for BIM.

- ![](/images/BIM_Views.svg) [Views manager](/BIM_Views "BIM Views"): Manage the different views and levels of your project.

- ![](/images/BIM_ProjectManager.svg) [Manage project...](/BIM_ProjectManager "BIM ProjectManager"): Allows to create some basic objects such as a [site](/Arch_Site "Arch Site"), a [building](/Arch_Building "Arch Building") and [axes](/Arch_Axis "Arch Axis") by filling basic project information.

- ![](/images/BIM_Windows.svg) [Manage doors and windows...](/BIM_Windows "BIM Windows"): Manage the doors and windows of your project.

- ![](/images/BIM_IfcElements.svg) [Manage IFC elements...](/BIM_IfcElements "BIM IfcElements"): Manage how the different elements of your project will be exported to IFC.

- ![](/images/BIM_IfcQuantities.svg) [Manage IFC quantities...](/BIM_IfcQuantities "BIM IfcQuantities"): Manage how the quantities of your objects are explicitely exported to IFC

- ![](/images/BIM_IfcProperties.svg) [Manage IFC properties...](/BIM_IfcProperties "BIM IfcProperties"): Manage the IFC properties attached to each of your objects.

- ![](/images/BIM_Classification.svg) [Manage classification...](/BIM_Classification "BIM Classification"): Manage how objects and materials of your project relate to classifications systems such as [Uniclass](https://en.wikipedia.org/wiki/Uniclass).

- ![](/images/BIM_Layers.svg) [Manage layers...](/BIM_Layers "BIM Layers"): Manage the layers of your document.

- ![](/images/BIM_Material.svg) [Material](/BIM_Material "BIM Material"): Manages [materials](/Arch_SetMaterial "Arch SetMaterial") or [multimaterials](/Arch_MultiMaterial "Arch MultiMaterial") of selected objects

- ![](/images/Arch_Schedule.svg) [Schedule](/Arch_Schedule "Arch Schedule"): Creates different types of schedules.

- ![](/images/BIM_Preflight.svg) [Preflight checks...](/BIM_Preflight "BIM Preflight"): Perform different checks on your model before exporting to IFC.

- ![](/images/Draft_AnnotationStyleEditor.svg) [Annotation styles...](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor"): Allows you to define styles that affect the visual properties of annotation-like objects.

### Utilitários

- ![](/images/BIM_TogglePanels.svg) [Toggle bottom panels](/BIM_TogglePanels "BIM TogglePanels"): Shows or hides output windows (the Report view and the Python console).

- ![](/images/BIM_Trash.svg) [Move to Trash](/BIM_Trash "BIM Trash"): Moves selected objects to a Trash group, which gets created if necessary

- ![](/images/BIM_WPView.svg) [Working Plane View](/BIM_WPView "BIM WPView"): Sets the camera to face the current working plane

- ![](/images/Draft_SelectGroup.svg) [Select group](/Draft_SelectGroup "Draft SelectGroup"): Selects the contents of [Std Groups](/Std_Group "Std Group") or group-like [Arch](/Arch_Workbench "Arch Workbench") objects.

- ![](/images/Draft_Slope.svg) [Set slope](/Draft_Slope "Draft Slope"): Slopes selected [Draft Lines](/Draft_Line "Draft Line") or [Draft Wires](/Draft_Wire "Draft Wire") by increasing, or decreasing, the Z coordinate of all points after the first one.

- ![](/images/Draft_WorkingPlaneProxy.svg) [Create working plane proxy](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy"): Creates a working plane proxy to save the current [Draft working plane](/Draft_SelectPlane "Draft SelectPlane").

- ![](/images/Draft_AddConstruction.svg) [Add to construction group](/Draft_AddConstruction "Draft AddConstruction"): Moves objects to the [Draft construction group](/Draft_ToggleConstructionMode "Draft ToggleConstructionMode").

- ![](/images/Arch_SplitMesh.svg) [Split Mesh](/Arch_SplitMesh "Arch SplitMesh"): Splits a selected mesh into separate components.

- ![](/images/Arch_MeshToShape.svg) [Mesh to Shape](/Arch_MeshToShape "Arch MeshToShape"): Converts a mesh into a shape, unifying coplanar faces.

- ![](/images/Arch_SelectNonSolidMeshes.svg) [Select non-manifold meshes](/Arch_SelectNonSolidMeshes "Arch SelectNonSolidMeshes"): Selects all non-manifold meshes from the current selection or from the document.

- ![](/images/Arch_RemoveShape.svg) [Remove Shape from Arch](/Arch_RemoveShape "Arch RemoveShape"): Turns cubic shape-based Arch object fully parametric.

- ![](/images/Arch_CloseHoles.svg) [Close holes](/Arch_CloseHoles "Arch CloseHoles"): Closes holes in a selected shape-based object.

- ![](/images/Arch_MergeWalls.svg) [Merge Walls](/Arch_MergeWalls "Arch MergeWalls"): Merges walls.

- ![](/images/Arch_Check.svg) [Check](/Arch_Check "Arch Check"): Check if the selected objects are solids and don't contain defects.

- ![](/images/Arch_ToggleIfcBrepFlag.svg) [Toggle IFC B-rep flag](/Arch_ToggleIfcBrepFlag "Arch ToggleIfcBrepFlag"): Forces a selected object to be exported as an [IfcFacetedBrep](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm).

- ![](/images/Arch_ToggleSubs.svg) [Toggle subcomponents](/Arch_ToggleSubs "Arch ToggleSubs"): Shows or hides the subcomponents of an Arch object.

- ![](/images/Arch_Survey.svg) [Survey](/Arch_Survey "Arch Survey"): Enters or leaves surveying mode.

- ![](/images/BIM_Diff.svg) [IFC Diff](/BIM_Diff "BIM Diff"): Shows a visual diff between two IFC files

- ![](/images/BIM_IfcExplorer.svg) [IFC explorer](/BIM_IfcExplorer "BIM IfcExplorer"): Opens a tool to explore the structure of an IFC file prior to importing

- ![](/images/Arch_IfcSpreadsheet.svg) [Create IFC spreadsheet...](/Arch_IfcSpreadsheet "Arch IfcSpreadsheet"): This tool creates a spreadsheet to store IFC properties of an object.

- ![](/images/BIM_ImagePlane.svg) [Image plane](/index.php?title=BIM_ImagePlane&action=edit&redlink=1 "BIM ImagePlane (page does not exist)"): Inserts an image plane in the document.

- ![](/images/BIM_Unclone.svg) [Unclone](/index.php?title=BIM_Unclone&action=edit&redlink=1 "BIM Unclone (page does not exist)"): Makes a cloned object independent from its original object

- ![](/images/BIM_Rewire.svg) [Rewire](/index.php?title=BIM_Rewire&action=edit&redlink=1 "BIM Rewire (page does not exist)"):

- ![](/images/BIM_Glue.svg) [Glue](/index.php?title=BIM_Glue&action=edit&redlink=1 "BIM Glue (page does not exist)"):

- ![](/images/BIM_Reextrude.svg) [Reextrude](/index.php?title=BIM_Reextrude&action=edit&redlink=1 "BIM Reextrude (page does not exist)"): Recreates an extrusion from a shape that has lost its parametric extrusion by selecting a base face

- Panel tools:

- ![](/images/Arch_Panel.svg) [Panel](/Arch_Panel "Arch Panel"): Creates a panel object from a selected 2D object.

- ![](/images/Arch_Panel_Cut.svg) [Panel Cut](/Arch_Panel_Cut "Arch Panel Cut"): Creates a 2D cut view from a panel.

- ![](/images/Arch_Panel_Sheet.svg) [Panel Sheet](/Arch_Panel_Sheet "Arch Panel Sheet"): Creates a 2D cut sheet including panel cuts or other 2D objects.

- ![](/images/Arch_Nest.svg) [Nest](/Arch_Nest "Arch Nest"): Allows to nest several flat objects inside a container shape.

- Structure tools:

- ![](/images/Arch_Structure.svg) [Structure](/Arch_Structure "Arch Structure"): Creates a structural element from scratch or using a selected object as a base.

- ![](/images/Arch_StructuralSystem.svg) [Structural System](/index.php?title=Arch_StructuralSystem&action=edit&redlink=1 "Arch StructuralSystem (page does not exist)"):

- ![](/images/Arch_StructuresFromSelection.svg) [Multiple Structures](/index.php?title=Arch_StructuresFromSelection&action=edit&redlink=1 "Arch StructuresFromSelection (page does not exist)"):

- ![](/images/IFC_Diff.svg) [IFC Diff...](/index.php?title=IFC_Diff&action=edit&redlink=1 "IFC Diff (page does not exist)"):

- ![](/images/IFC_Expand.svg) [IFC Expand](/index.php?title=IFC_Expand&action=edit&redlink=1 "IFC Expand (page does not exist)"):

- ![](/images/IFC_MakeProject.svg) [Make IFC project](/index.php?title=IFC_MakeProject&action=edit&redlink=1 "IFC MakeProject (page does not exist)"):

- ![](/images/IFC_UpdateIOS.svg) [IfcOpenShell update](/index.php?title=IFC_UpdateIOS&action=edit&redlink=1 "IFC UpdateIOS (page does not exist)"):

- Nudge:

: \* [Nudge Switch](/index.php?title=BIM_Nudge_Switch&action=edit&redlink=1 "BIM Nudge Switch (page does not exist)"):

: \* [Nudge Up](/index.php?title=BIM_Nudge_Up&action=edit&redlink=1 "BIM Nudge Up (page does not exist)"):

: \* [Nudge Down](/index.php?title=BIM_Nudge_Down&action=edit&redlink=1 "BIM Nudge Down (page does not exist)"):

: \* [Nudge Left](/index.php?title=BIM_Nudge_Left&action=edit&redlink=1 "BIM Nudge Left (page does not exist)"):

: \* [Nudge Right](/index.php?title=BIM_Nudge_Right&action=edit&redlink=1 "BIM Nudge Right (page does not exist)"):

: \* [Nudge Rotate Left](/index.php?title=BIM_Nudge_RotateLeft&action=edit&redlink=1 "BIM Nudge RotateLeft (page does not exist)"):

: \* [Nudge Rotate Right](/index.php?title=BIM_Nudge_RotateRight&action=edit&redlink=1 "BIM Nudge RotateRight (page does not exist)"):

: \* [Nudge Extend](/index.php?title=BIM_Nudge_Extend&action=edit&redlink=1 "BIM Nudge Extend (page does not exist)"):

: \* [Nudge Shrink](/index.php?title=BIM_Nudge_Shrink&action=edit&redlink=1 "BIM Nudge Shrink (page does not exist)"):

### Barra de status

The status bar contains a few buttons that allow to easily change different states:

- ![](/images/BIM_TogglePanels.svg) [Toggle panels](/BIM_TogglePanels "BIM TogglePanels"): Shows or hides the [Report view](/Report_view "Report view") and the [Python console](/Python_console "Python console").

- ![](/images/BIM_ToggleViews.svg) Toggle Views: Shows or hides the [BIM Views](/BIM_Views "BIM Views") panel.

- ![](/images/BIM_ToggleBackground.svg) Cycle background: Cycles between vertical gradient, radial gradient and simple color background modes. This can be used to toggle between a dark background for modelling and a white background for 2D drawing.

- ![](/images/IFC.svg) Lock IFC: Switches between [locked and unlocked IFC mode](/NativeIFC#Locked_and_unlocked_modes "NativeIFC").

### Menu de contexto da visualização em árvore

TBD

### Menu de contexto da visualização 3D

TBD

### Ferramentas obsoletas

- ![](/images/Arch_3Views.svg) [Arch 3Views](/Arch_3Views "Arch 3Views"): Creates top, front and side views from a [mesh](/Mesh_Workbench "Mesh Workbench"). Not available in 1.0 and above.

- ![](/images/Arch_BuildingPart.svg) [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart"): Creates a building part including selected objects. Not available in 1.0 and above. Use [Arch Floor](/Arch_Floor "Arch Floor") instead.

- ![](/images/Arch_CloneComponent.svg) [Arch CloneComponent](/Arch_CloneComponent "Arch CloneComponent"): Produces Arch Components that are clones of selected Arch objects. Not available in 1.0 and above. Use [Draft Clone](/Draft_Clone "Draft Clone") instead.

- ![](/images/Arch_CutLine.svg) [Arch CutLine](/Arch_CutLine "Arch CutLine"): Cuts an object according to a line. Not available in 1.0 and above. Use [Arch CutPlane](/Arch_CutPlane "Arch CutPlane") instead.

- ![](/images/Arch_MultiMaterial.svg) [Arch MultiMaterial](/Arch_MultiMaterial "Arch MultiMaterial"): Creates a multi-material and attributes it to selected objects, if any. Not available in 1.0 and above. Use [BIM Material](/BIM_Material "BIM Material") instead.

- ![](/images/Arch_Project.svg) [Arch Project](/Arch_Project "Arch Project"): Creates a project including selected objects. Not available in 1.0 and above. Use [BIM Project](/BIM_Project "BIM Project") instead.

- ![](/images/Arch_SetMaterial.svg) [Arch SetMaterial](/Arch_SetMaterial "Arch SetMaterial"): Creates a material and attributes it to selected objects, if any. Not available in 1.0 and above. Use [BIM Material](/BIM_Material "BIM Material") instead.

## Preferências

- ![](/images/Preferences-bim.svg) [Preferences](/BIM_Preferences "BIM Preferences"): General preferences for the BIM Workbench.
- [Fine tuning](/Fine-tuning#BIM_Workbench "Fine-tuning"): Extra parameters to fine-tune BIM behavior.

## Working with IFC

The BIM workbench works natively with [Industry Foundation Classes](https://en.wikipedia.org/wiki/Industry_Foundation_Classes) (IFC) files. Native means there is no more translation between the IFC contents and FreeCAD: The IFC contents are directly rendered in FreeCAD, and any change affects the IFC contents directly. Read more on [NativeIFC](/NativeIFC "NativeIFC").

If you don't plan to work with others, and have no need for IFC, you can still use the BIM workbench tools and simply ignore anything related to IFC. You can still export your model to IFC anytime.

The old [Arch IFC](/Arch_IFC "Arch IFC") importer is disabled by default in FreeCAD, but still available from Python.

There is also a specific [NativeIFC Tutorial](/NativeIFC_Tutorial "NativeIFC Tutorial") that explains the concepts further.

## Formatos de arquivo

- [IFC](/Arch_IFC "Arch IFC"): industry foundation classes
- [DAE](/Arch_DAE "Arch DAE"): Collada mesh format
- [OBJ](/Arch_OBJ "Arch OBJ"): OBJ mesh format (export only)
- [JSON](/Arch_JSON "Arch JSON"): JavaScript Object Notation format (export only)
- [3DS](/Arch_3DS "Arch 3DS"): 3DS format (import only)
- [SHP](/Arch_SHP "Arch SHP"): GIS Shapefiles (import only)

## API

The Arch module can be used in [Python](/Python "Python") scripts and [macros](/Macros "Macros") using the [Arch Python API](/Arch_API "Arch API") functions.

## Tutoriais e aprendizado

- [Migrating to FreeCAD from Revit](/Migrating_to_FreeCAD_from_Revit "Migrating to FreeCAD from Revit")
- [Arch & BIM tutorials on this wiki](/Tutorials#Architecture_and_BIM "Tutorials")
- ["BIM with FreeCAD" video series by Yorik](https://www.youtube.com/playlist?list=PLmKdGVtV5Vnt2cj4IZIv9FM39QHaE1ZaU)
- ["FreeCAD tutorials" video series by Regis](https://www.youtube.com/playlist?list=PLDd21g-eSHwkkxVOfVmR8ObpPN5QbL7ye)
- ["Quinta Monroy" video series by Regis](https://www.youtube.com/playlist?list=PLDd21g-eSHwnAYyutuKhrPY51skaBhrVU)
- ["HRCompacta" youtube channel (most content is in portuguese)](https://www.youtube.com/@HRCompacta)
- ["FreeCADBIM" youtube channel (most content is in portuguese)](https://www.youtube.com/@FreeCadBIM)

## Arquivos de exemplo

- FreeCAD features a BIM example file on the Start page.
- More example BIM files are available at <https://github.com/yorikvanhavre/FreeCAD-BIM-examples> . From within FreeCAD, use menu Help -> BIM examples.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Workbench/pt-br&oldid=1551689>"
