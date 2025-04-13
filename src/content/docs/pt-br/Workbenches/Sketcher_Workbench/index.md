---
title: Bancada de trabalho Sketcher
---

![](/images/Workbench_Sketcher.svg)

Ícone da Sketcher workbench

## Introdução

A bancada de trabalho ![](/images/Workbench_Sketcher.svg) bancada de trabalho Sketcher do FreeCAD é usada para criar Sketches 2D destinadas ao uso na ![](/images/Workbench_PartDesign.svg) [bancada de trabalho PartDesign](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br"), ![](/images/Workbench_Arch.svg) [bancada de trabalho Arch](/Arch_Workbench/pt-br "Arch Workbench/pt-br"), e outras bancadas de trabalho. Geralmente, um desenho 2D é considerado o ponto de partida para a maioria dos modelos CAD, pois um esboço 2D pode ser "extrudado" para criar uma forma 3D; outros esboços 2D podem ser usados para criar outros recursos como bolsos, saliências ou extrusões no topo das formas 3D previamente construídas. Junto com as operações booleanas definidas na ![](/images/Workbench_Part.svg) [bancada de trabalho Part](/Part_Workbench/pt-br "Part Workbench/pt-br"), o Sketcher forma a base do método de [Geometria Sólida Construtiva](/Constructive_solid_geometry/pt-br "Constructive solid geometry/pt-br")(constructive solid geometry - CSG) de construção de sólidos. Além disso, junto com as operações da ![](/images/Workbench_PartDesign.svg) [bancada de trabalho PartDesign](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br"), o Sketcher também forma a base da metodologia de [edição de recursos](/Feature_editing/pt-br "Feature editing/pt-br") de criação de sólidos .

Together with boolean operations defined in the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench"), the Sketcher Workbench, or "The Sketcher" for short, forms the basis of the [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") (CSG) method of building solids. Together with ![](/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") operations, it also forms the basis of the [feature editing](/Feature_editing "Feature editing") methodology of creating solids. But many other workbenches use sketches as well.

A bancada do Sketcher apresenta restrições ("constraints"), permitindo que formas 2D sigam definições geométricas precisas em termos de comprimento, ângulos e relações (horizontalidade, verticalidade, perpendicularidade, etc.). Um solucionador de restrições calcula a extensão do efeito das restrições sobre a geometria 2D e permite a exploração interativa dos graus de liberdade do esboço.

O Sketcher não se destina à produção de plantas 2D. Depois que os esboços são usados para gerar um sólido, eles são automaticamente ocultados. As restrições são visíveis apenas no modo de edição de esboço.

![](/images/FC_ConstrainedSketch.png)

_Um esboço básico totalmente restrito_

## Constraints

Em vez de cotas, restrições são usadas para limitar os graus de liberdade de um objeto. Por exemplo, uma linha sem restrições tem 4 graus de liberdade - (em inglês, Degrees Of Freedom - abreviado como " DOF "): ela pode ser movida horizontal e verticalmente, pode ser estendida/encurtada, e pode ser rotacionada.

Aplicar uma restrição horizontal ou vertical, ou uma restrição angular (em relação a outra linha ou a um dos eixos), limitará sua capacidade de rotação, deixando-a com 3 graus de liberdade. Travar um de seus pontos em relação à origem removerá outros 2 graus de liberdade, e a aplicação de uma restrição de tamanho (dimensão) removerá o último grau de liberdade. A linha é então considerada **totalmente restrita**.

Vários objetos podem ser restringidos entre si. Duas linhas podem ser unidas por meio de um de seus pontos com a restrição de ponto coincidente. Um ângulo pode ser definido entre elas, ou elas podem ser postas como perpendiculares. Uma linha pode ser tangente a um arco ou círculo e assim por diante. Um esboço complexo com vários objetos terá uma série de soluções diferentes e torná-lo **totalmente restrito** significa que apenas uma dessas soluções possíveis foi alcançada com base nas restrições aplicadas.

Existem dois tipos de restrições: geométricas e dimensionais. Eles são detalhados na seção ['Ferramentas'](#Ferramentas/pt-br) abaixo.

### Edit constraints

When a [driving dimensional constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") is created, and if the **Ask for value after creating a dimensional constraint** [preference](/Sketcher_Preferences#Display "Sketcher Preferences") is selected (default), a dialog opens to edit its value.

![Sketcher_Edit_Constraint.png](/images/Sketcher_Edit_Constraint.png)

You can enter a numerical value or an [expression](/Expressions "Expressions"), and it is possible to name the constraint to facilitate its use in other expressions. You can also check the **Reference** checkbox to switch the constrain to [reference mode](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint").

To edit the value of an existing dimensional constraint do one of the following:

- Double-click the constraint value in the [3D view](/3D_view "3D view").
- Double-click the constraint in the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
- Right-click the constraint in the Sketcher Dialog and select the **Change value** option from the context menu.

### Reposition constraints

Dimensional constraints can be repositioned in the 3D view by dragging. Hold down the left mouse button over the constraint value and move the mouse. The symbols of geometric constraints are positioned automatically and cannot be moved.

## Profile sketches

To create a sketch that can be used as a profile for generating solids certain rules must be followed:

- The sketch must contain only closed contours. Gaps between endpoints, however small, are not allowed.
- Contours can be nested, to create voids, but should not self-intersect or intersect other contours.
- Contours cannot share edges with other contours. Duplicate edges must be avoided.
- T-connections, that is more than two edges sharing a common point, or a point touching an edge, are not allowed.

These rules do not apply to construction geometry (default color blue), which is not shown outside edit mode, or if the sketch is used for a different purpose. Depending on the workbench and the tool that will use the profile sketch, additional restrictions may apply.

## Drawing aids

The Sketcher Workbench has several drawing aids and other features that can help when creating geometry and applying constraints.

### Continue modes

There are two continue modes: **Geometry creation "Continue Mode"** and **Constraint creation "Continue Mode"**. If these are checked (default) in the [preferences](/Sketcher_Preferences#Display "Sketcher Preferences"), related tools will restart after finishing. To exit a continuous tool press Esc or the right mouse button. This must be repeated if a continuous geometry tool has already received input. You can also exit a continuous tool by starting another geometry or constraint creation tool. Note that pressing Esc if no tool is active will exit sketch edit mode. Uncheck the **Esc can leave sketch edit mode** [preference](/Sketcher_Preferences#General "Sketcher Preferences") if you often inadvertently press Esc too many times.

### Auto constraints

In sketches that have **Auto constraints** checked (default) several constraints are applied automatically. The icon of a proposed automatic constraint is shown next to the cursor when it is placed correctly. Left-clicking will then apply that constraint. This is a per-sketch setting that can be changed in the [Sketcher Dialog](/Sketcher_Dialog#Constraints "Sketcher Dialog") or by changing the Vista**Autoconstraints** [property](/Property_editor "Property editor") of the sketch.

The following constraints are applied automatically:

- ![](/images/Sketcher_ConstrainCoincident.svg) [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident")
- ![](/images/Sketcher_ConstrainPointOnObject.svg) [Point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject")
- ![](/images/Sketcher_ConstrainHorizontal.svg) [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal")
- ![](/images/Sketcher_ConstrainVertical.svg) [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical")
- ![](/images/Sketcher_ConstrainTangent.svg) [Tangent](/Sketcher_ConstrainTangent "Sketcher ConstrainTangent")
- [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): ![](/images/Sketcher_ConstrainSymmetric.svg) [Symmetric](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric") (line midpoint)

### Snapping

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

It is possible to [snap](/Sketcher_Snap "Sketcher Snap") to grid lines and grid intersection, to edges of geometry and midpoints of lines and arcs, and to certain angles. Please note that snapping does not produce constraints in and of itself. For example, only if [Auto constraints](#Auto_constraints) is switched on will snapping to an edge produce a [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject"). But just picking a point on the edge would then have the same result.

### On-View-Parameters

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Depending on the selected option in the [preferences](/Sketcher_Preferences#General "Sketcher Preferences") only the dimensional On-View-Parameters or both the dimensional and the positional On-View-Parameters can be enabled. Positional parameters allow the input of exact coordinates, for example the center of a circle, or the start point of a line. Dimensional parameters allow the input of exact dimensions, for example the radius of a circle, or the length and angle of a line. On-View-Parameters are not available for all tools.

![](/images/Sketcher_On_view_parameters_positional.png)

Determining the center point of a circle with the positional parameters enabled

![](/images/Sketcher_On_view_parameters_dimensional.png)

Determining the radius of a circle with the dimensional parameters enabled

If values are entered and confirmed by pressing Enter or Tab, related constraints are added automatically. If two parameters are displayed at the same time, for example the X and Y coordinate of a point, it is possible to enter one value and pick a point to define the other. Depending on the object additional constraints may be required to fully constrain it. Constraints resulting from On-View-Parameters take precedence over those that may result from [Auto constraints](/Sketcher_Dialog#Constraints "Sketcher Dialog").

![](/images/Sketcher_ArcExample3.png)

Arc created by entering all On-View-Parameters with resulting automatically created constraints

### Coordinate display

If the **Show coordinates beside cursor while editing** [preference](/Sketcher_Preferences#Display "Sketcher Preferences") is checked (default), the parameters of the current geometry tool (coordinates, radius, or length and angle) are displayed next to the cursor. This is deactivated while On-View-Parameters are shown.

## Métodos de seleção

While a sketch is in edit mode the following selection methods can be used:

### Seleção de elemento de visualização 3D

As elsewhere in FreeCAD, an element can be selected in the [3D view](/3D_view "3D view") with a single left mouse click. But there is no need to hold down the Ctrl key when selecting multiple elements. Holding down that key is possible though and has the advantage that you can miss-click without losing the selection. Edges, points and constraints can be selected in this manner.

### Seleção da caixa de visualização 3D

Box selection in the 3D view works without using [Std BoxSelection](/Std_BoxSelection "Std BoxSelection") or [Std BoxElementSelection](/Std_BoxElementSelection "Std BoxElementSelection"):

1. Make sure that no tool is active.
2. Do one of the following:
   - Click in an empty area and drag a rectangle from left to right to select elements that lie completely inside the rectangle.
   - Click in an empty area and drag a rectangle from right to left to also select elements that touch or cross the rectangle.

You can box-select edges and points, constraints cannot be box-selected.

### 3D view connected geometry selection

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Double-clicking an edge in the 3D view will select all edges directly and indirectly connected with that edge via endpoints. There is no need for the edges to be connected with [Coincident constraints](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident"), endpoints need only have the same coordinates.

### Seleção da caixa de diálogo do Sketcher

Edges and points can also be selected from the Elements section of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog"), and constraints from the Constraints section of that dialog.

## Copy, cut and paste

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

The standard keyboard shortcuts, Ctrl+C, Ctrl+X and Ctrl+V, can be used to copy, cut and paste selected Sketcher geometry including related constraints. But these tools are also available from the **Sketch → Sketcher tools** menu. They can be used within the same sketch but also between different sketches or separate instances of FreeCAD. Since the data is copied to the clipboard in the form of Python code, it can be used in other ways too (e.g. shared on the forum).

## Ferramentas

As ferramentas do Sketcher Workbench estão localizadas no menu Sketch e/ou em várias barras de ferramentas. [introduzido na versão 0.21](/Release_notes_0.21 "Release notes 0.21"): Quase todas as barras de ferramentas do Sketcher são exibidas apenas enquanto um esboço está no modo de edição. A única exceção é o [Barra de ferramentas do Sketcher](#Barra_de_ferramentas_do_Sketcher) que só é exibida se nenhum esboço estiver no modo de edição.

Some tools are also available from the [3D view](/3D_view "3D view") context menu while a sketch is in edit mode, or from the context menus of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").

[introduzido na versão 0.21](/Release_notes_0.21 "Release notes 0.21"): Se um esboço estiver no modo de edição, a barra de ferramentas Estrutura ficará oculta, pois nenhuma de suas ferramentas poderá ser usada.

### Gerais

#### Barra de ferramentas do Sketcher

- ![](/images/Sketcher_NewSketch.svg) [Criar um novo esboço](/Sketcher_NewSketch/pt-br "Sketcher NewSketch/pt-br"): Cria um novo esboço em uma face ou plano selecionado. Se nenhuma face estiver selecionada enquanto esta ferramenta é executada, o usuário é solicitado a selecionar um plano em uma janela pop-up.

- ![](/images/Sketcher_EditSketch.svg) [Editar o esboço selecionado](/Sketcher_EditSketch/pt-br "Sketcher EditSketch/pt-br"): Abre a edição do esboço selecionado. Isso abrirá a [caixa de diálogo do Sketcher](/Sketcher_Dialog/pt-br "Sketcher Dialog/pt-br").

- ![](/images/Sketcher_MapSketch.svg) [Mapear um esboço para uma face](/Sketcher_MapSketch/pt-br "Sketcher MapSketch/pt-br"): Mapeia um esboço para a face previamente selecionada de um sólido.

- ![](/images/Sketcher_ReorientSketch.svg) [Reorientação](/Sketcher_ReorientSketch/pt-br "Sketcher ReorientSketch/pt-br"): Permite anexar o esboço a um dos planos principais.

- ![](/images/Sketcher_ValidateSketch.svg) [Validar](/Sketcher_ValidateSketch/pt-br "Sketcher ValidateSketch/pt-br"): Verifica a tolerância de diferentes pontos e as ajusta.

- ![](/images/Sketcher_MergeSketches.svg) [Fundir](/Sketcher_MergeSketches/pt-br "Sketcher MergeSketches/pt-br"): Mescla dois ou mais esboços.

- ![](/images/Sketcher_MirrorSketch.svg) [Espelhar](/Sketcher_MirrorSketch/pt-br "Sketcher MirrorSketch/pt-br"): Espelha um esboço em relação ao eixo x, ao eixo y ou à origem.

#### Barra de ferramentas do Sketcher Modo de Edição

- ![](/images/Sketcher_LeaveSketch.svg) [Fechar a edição do esboço](/Sketcher_LeaveSketch/pt-br "Sketcher LeaveSketch/pt-br"): Sai do modo de edição do esboço.

- ![](/images/Sketcher_ViewSketch.svg) [Olhar perpendicularmente ao plano do esboço](/Sketcher_ViewSketch/pt-br "Sketcher ViewSketch/pt-br"): Configura a vista do modelo como perpendicular ao plano do esboço.

- ![](/images/Sketcher_ViewSection.svg) [Alternar entre a seção e a exibição completa](/Sketcher_ViewSection/pt-br "Sketcher ViewSection/pt-br"): Cria um plano de seção que oculta temporariamente qualquer coisa na frente do plano do esboço.

#### Barra de ferramentas de edição do Sketcher

- ![](/images/Sketcher_Grid.svg) [Toggle grid](/Sketcher_Grid "Sketcher Grid"): Toggles the grid in the sketch currently being edited. Settings can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Sketcher_Snap.svg) [Toggle snap](/Sketcher_Snap "Sketcher Snap"): Toggles snapping in all sketches. Settings can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/Sketcher_RenderingOrder.svg) [Configure rendering order](/Sketcher_RenderingOrder "Sketcher RenderingOrder"): The rendering order of all sketches can be changed in the related menu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

#### Outros

- ![](/images/Sketcher_StopOperation.svg) [Parar a operação](/Sketcher_StopOperation/pt-br "Sketcher StopOperation/pt-br"): Quando no modo de edição, para a operação atual, seja desenho, configuração de restrições, etc.

### Geometrias do Sketcher

Estas são ferramentas para criar objetos.

- ![](/images/Sketcher_CreatePoint.svg) [Criar um ponto no esboço](/Sketcher_CreatePoint/pt-br "Sketcher CreatePoint/pt-br"): Desenha um ponto.

- ![](/images/Sketcher_CreatePolyline.svg) [Polilinha (linha de múltiplos pontos)](/Sketcher_CreatePolyline/pt-br "Sketcher CreatePolyline/pt-br"): Desenha uma linha composta de vários segmentos de linha. Pressionar a tecla M enquanto se desenha uma polilinha alterna entre os diferentes modos de polilinha.

- ![](/images/Sketcher_CreateLine.svg) [Criar uma linha no esboço](/Sketcher_CreateLine/pt-br "Sketcher CreateLine/pt-br"): Desenha um segmento de reta entre 2 pontos. As linhas são infinitas em relação a certas restrições.

- ![](/images/Sketcher_CreateArc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create arc:

- ![](/images/Sketcher_CreateArc.svg) [Pontos de centro e extremidades](/Sketcher_CreateArc/pt-br "Sketcher CreateArc/pt-br"): Desenha um segmento de arco a partir do centro, raio, ângulo inicial e ângulo final.

- ![](/images/Sketcher_Create3PointArc.svg) [Pontos de extremidade e ponto de borda](/Sketcher_Create3PointArc/pt-br "Sketcher Create3PointArc/pt-br"): Desenha um segmento de arco a partir dos dois pontos finais e outro ponto na circunferência.

- ![](/images/Sketcher_CreateArcOfEllipse.svg) [Arco de elipse](/Sketcher_CreateArcOfEllipse/pt-br "Sketcher CreateArcOfEllipse/pt-br"): Desenha um arco de elipse pelo ponto central, ponto do raio maior, ponto inicial e ponto final.

- ![](/images/Sketcher_CreateArcOfHyperbola.svg) [Arco de hipérbole](/Sketcher_CreateArcOfHyperbola/pt-br "Sketcher CreateArcOfHyperbola/pt-br"): Desenha um arco de hipérbole.

- ![](/images/Sketcher_CreateArcOfParabola.svg) [Arco de parábola](/Sketcher_CreateArcOfParabola/pt-br "Sketcher CreateArcOfParabola/pt-br"): Desenha um arco de parábola.

- ![](/images/Sketcher_CreateCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create circle/ellipse:

- ![](/images/Sketcher_CreateCircle.svg) [Ponto de centro e borda](/Sketcher_CreateCircle/pt-br "Sketcher CreateCircle/pt-br"): Desenha um círculo a partir do centro e do raio.

- ![](/images/Sketcher_Create3PointCircle.svg) [3 pontos de borda](/Sketcher_Create3PointCircle/pt-br "Sketcher Create3PointCircle/pt-br"): Desenha um círculo a partir de três pontos na circunferência.

- ![](/images/Sketcher_CreateEllipseByCenter.svg) [Elipse centro](/Sketcher_CreateEllipseByCenter/pt-br "Sketcher CreateEllipseByCenter/pt-br"): Desenha uma elipse pelo ponto central, ponto do raio maior e ponto do raio menor.

- ![](/images/Sketcher_CreateEllipseBy3Points.svg) [Elipse 3 pontos](/Sketcher_CreateEllipseBy3Points/pt-br "Sketcher CreateEllipseBy3Points/pt-br"): Desenha uma elipse pelo diâmetro maior (2 pontos) e ponto do raio menor.

- ![](/images/Sketcher_CreateRectangle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create rectangle:

- ![](/images/Sketcher_CreateRectangle.svg) [Rectângulo](/Sketcher_CreateRectangle/pt-br "Sketcher CreateRectangle/pt-br"): Desenha um retângulo a partir de dois vértices opostos.

- ![](/images/Sketcher_CreateRectangle_Center.svg) [Rectângulo Centrado](/Sketcher_CreateRectangle_Center/pt-br "Sketcher CreateRectangle Center/pt-br"): Desenha um retângulo a partir de um ponto central e de um ponto de borda. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/Sketcher_CreateOblong.svg) [Rectângulo Arredondado](/Sketcher_CreateOblong/pt-br "Sketcher CreateOblong/pt-br"): Traça um retângulo arredondado a partir de 2 pontos opostos. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/Sketcher_CreateHexagon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create regular polygon:

- ![](/images/Sketcher_CreateTriangle.svg) [Triangulo](/Sketcher_CreateTriangle/pt-br "Sketcher CreateTriangle/pt-br"): Desenha um triângulo regular inscrito em um círculo de geometria de construção.

- ![](/images/Sketcher_CreateSquare.svg) [Quadrado](/Sketcher_CreateSquare/pt-br "Sketcher CreateSquare/pt-br"): Desenha um quadrado regular inscrito em um círculo de geometria de construção.

- ![](/images/Sketcher_CreatePentagon.svg) [Pentágono](/Sketcher_CreatePentagon/pt-br "Sketcher CreatePentagon/pt-br"): Desenha um pentágono regular inscrito em um círculo de geometria de construção.

- ![](/images/Sketcher_CreateHexagon.svg) [Hexágono](/Sketcher_CreateHexagon/pt-br "Sketcher CreateHexagon/pt-br"): Desenha um hexágono regular inscrito em um círculo de geometria de construção.

- ![](/images/Sketcher_CreateHeptagon.svg) [Heptágono](/Sketcher_CreateHeptagon/pt-br "Sketcher CreateHeptagon/pt-br"): Desenha um heptágono regular inscrito em um círculo de geometria de construção.

- ![](/images/Sketcher_CreateOctagon.svg) [Octágono](/Sketcher_CreateOctagon/pt-br "Sketcher CreateOctagon/pt-br"): Desenha um octógono regular inscrito em um círculo de geometria de construção.

- ![](/images/Sketcher_CreateRegularPolygon.svg) [Criar Polígono Regular](/Sketcher_CreateRegularPolygon/pt-br "Sketcher CreateRegularPolygon/pt-br") : Desenha um polígono regular selecionando o número de lados e escolhendo dois pontos: o centro e um canto.

- ![](/images/Sketcher_CreateSlot.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create slot:

- ![](/images/Sketcher_CreateSlot.svg) [Oblongo](/Sketcher_CreateSlot/pt-br "Sketcher CreateSlot/pt-br"): Desenha uma forma oval selecionando o centro de um semicírculo e a extremidade do outro semicírculo.

- ![](/images/Sketcher_CreateArcSlot.svg) [Arc slot](/Sketcher_CreateArcSlot "Sketcher CreateArcSlot"): Creates an arc slot. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_CreateBSpline.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create B-spline:

- : ![](/images/Sketcher_CreateBSpline.svg) [Criar B-spline](/Sketcher_CreateBSpline/pt-br "Sketcher CreateBSpline/pt-br"): Desenha uma curva B-spline por seus pontos de controle.

- : ![](/images/Sketcher_CreatePeriodicBSpline.svg) [Criar B-spline periódica](/Sketcher_CreatePeriodicBSpline/pt-br "Sketcher CreatePeriodicBSpline/pt-br"): Cria uma curva B-spline periódica (fechada) por pontos de controle.[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Esta é a mesma ferramenta que [B-spline por pontos de controle](/Sketcher_CreateBSpline/pt-br "Sketcher CreateBSpline/pt-br"), mas com um modo inicial diferente.

- ![](/images/Sketcher_CreateBSplineByInterpolation.svg) [B-spline by knots](/Sketcher_CreateBSplineByInterpolation "Sketcher CreateBSplineByInterpolation"): Creates a B-spline curve by knot points. Idem.

- ![](/images/Sketcher_CreatePeriodicBSplineByInterpolation.svg) [Periodic B-spline by knots](/Sketcher_CreatePeriodicBSplineByInterpolation "Sketcher CreatePeriodicBSplineByInterpolation"): Creates a periodic (closed) B-spline curve by knot points. Idem.

- ![](/images/Sketcher_ToggleConstruction.svg) [Modo de construção](/Sketcher_ToggleConstruction/pt-br "Sketcher ToggleConstruction/pt-br"): Alterna a geometria do esboço de/para o modo de construção. A geometria de construção é mostrada em azul e é descartada fora do modo de edição do esboço.

### Restrições do Sketcher

As restrições são usadas para definir comprimentos, definir regras entre os elementos do esboço e para bloquear o esboço ao longo dos eixos vertical e horizontal. Algumas restrições requerem o uso de [Restrições de ajuda](/Sketcher_helper_constraint/pt-br "Sketcher helper constraint/pt-br").

- ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Dimensional constraints:

- ![](/images/Sketcher_Dimension.svg) [Dimension](/Sketcher_Dimension "Sketcher Dimension"): Is the context-sensitive constraint tool of the Sketcher Workbench. Based on the current selection, it offers appropriate dimensional constraints, but also geometric constraints. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainDistanceX.svg) [Distancia Horizontal](/Sketcher_ConstrainDistanceX/pt-br "Sketcher ConstrainDistanceX/pt-br"): Fixa a distância horizontal entre dois pontos quaisquer, ou pontos extremos de uma linha. Se apenas um item for selecionado, a distância é definida para a origem.

- ![](/images/Sketcher_ConstrainDistanceY.svg) [Distancia Vertical](/Sketcher_ConstrainDistanceY/pt-br "Sketcher ConstrainDistanceY/pt-br"): Fixa a distância vertical entre dois pontos quaisquer, ou pontos extremos de uma linha. Se apenas um item for selecionado, a distância é definida para a origem.

- ![](/images/Sketcher_ConstrainDistance.svg) [Distancia](/Sketcher_ConstrainDistance/pt-br "Sketcher ConstrainDistance/pt-br"): Define o comprimento de uma linha, a distância perpendicular entre um ponto e uma linha, a distância entre dois pontos, ou, [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"), a distância entre as arestas de dois círculos.

- ![](/images/Sketcher_ConstrainRadiam.svg) [Radiano](/Sketcher_ConstrainRadiam/pt-br "Sketcher ConstrainRadiam/pt-br"): Define o raio de um arco, o diâmetro de um círculo ou o peso de um pólo B-spline.[introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/Sketcher_ConstrainRadius.svg) [Raio ou peso](/Sketcher_ConstrainRadius/pt-br "Sketcher ConstrainRadius/pt-br"): Define o raio de um arco ou círculo ou o peso de um pólo B-spline.

- ![](/images/Sketcher_ConstrainDiameter.svg) [Diâmetro](/Sketcher_ConstrainDiameter/pt-br "Sketcher ConstrainDiameter/pt-br"): Define o diâmetro de um arco ou círculo.

- ![](/images/Sketcher_ConstrainAngle.svg) [Angulo](/Sketcher_ConstrainAngle/pt-br "Sketcher ConstrainAngle/pt-br"): Define o ângulo interno entre duas linhas selecionadas.

- ![](/images/Sketcher_ConstrainLock.svg) [Restringir](/Sketcher_ConstrainLock/pt-br "Sketcher ConstrainLock/pt-br"): Restringe o item selecionado definindo distâncias verticais e horizontais em relação à origem, travando assim a localização desse item. Essas distâncias podem ser editadas posteriormente.

- ![](/images/Sketcher_ConstrainCoincidentUnified.svg) [Coincident (unified)](/Sketcher_ConstrainCoincidentUnified "Sketcher ConstrainCoincidentUnified"): Creates a coincident constraint between points, fixes points on edges or axes, or creates a concentric constraint. It combines the [Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") and [Point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") tools. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainCoincident.svg) [Coincidente](/Sketcher_ConstrainCoincident/pt-br "Sketcher ConstrainCoincident/pt-br"): Afixa um ponto em (coincidente com) um ou mais outros pontos. Atua como uma restrição concêntrica se dois ou mais círculos, arcos, elipses ou arcos de elipses forem selecionados.

- ![](/images/Sketcher_ConstrainPointOnObject.svg) [Ponto sobre o objeto](/Sketcher_ConstrainPointOnObject/pt-br "Sketcher ConstrainPointOnObject/pt-br"): Afixa um ponto em outro objeto, como uma linha, arco ou eixo.

- ![](/images/Sketcher_ConstrainHorVer.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg)Horizontal/vertical constraints:

- ![](/images/Sketcher_ConstrainHorVer.svg) [Horizontal/vertical](/Sketcher_ConstrainHorVer "Sketcher ConstrainHorVer"): Constrains lines or pairs of points to be horizontal or vertical, whichever is closest to the current alignment. It combines the [Horizontal](/Sketcher_ConstrainHorizontal "Sketcher ConstrainHorizontal") and [Vertical](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") tools. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_ConstrainHorizontal.svg) [Horizontal](/Sketcher_ConstrainHorizontal/pt-br "Sketcher ConstrainHorizontal/pt-br"): Restringe as linhas selecionadas ou elementos de polilinha a uma orientação horizontal verdadeira. Mais de um objeto pode ser selecionado antes de aplicar esta restrição.

- ![](/images/Sketcher_ConstrainVertical.svg) [Vertical](/Sketcher_ConstrainVertical/pt-br "Sketcher ConstrainVertical/pt-br"): Restringe as linhas selecionadas ou elementos de polilinha a uma orientação vertical verdadeira. Mais de um objeto pode ser selecionado antes de aplicar esta restrição.

- ![](/images/Sketcher_ConstrainParallel.svg) [Paralela](/Sketcher_ConstrainParallel/pt-br "Sketcher ConstrainParallel/pt-br"): Restringe duas ou mais linhas, fazendo-as paralelas entre si.

- ![](/images/Sketcher_ConstrainPerpendicular.svg) [Perpendicular](/Sketcher_ConstrainPerpendicular/pt-br "Sketcher ConstrainPerpendicular/pt-br"): Restringe duas linhas, fazendo-as perpendiculares uma à outra, ou restringe uma linha perpendicular à extremidade de um arco.

- ![](/images/Sketcher_ConstrainTangent.svg) [Tangente](/Sketcher_ConstrainTangent/pt-br "Sketcher ConstrainTangent/pt-br"): Cria uma restrição tangente entre duas entidades selecionadas ou uma restrição colinear entre dois segmentos de linha. Um segmento de linha não precisa estar diretamente sobre um arco ou círculo para ser restrito tangente a esse arco ou círculo.

- ![](/images/Sketcher_ConstrainEqual.svg) [Iguadade](/Sketcher_ConstrainEqual/pt-br "Sketcher ConstrainEqual/pt-br"): Restringe duas entidades selecionadas, fazendo-as iguais uma à outra. Se usado em círculos ou arcos, seus raios resultarão iguais.

- ![](/images/Sketcher_ConstrainSymmetric.svg) [Simetria](/Sketcher_ConstrainSymmetric/pt-br "Sketcher ConstrainSymmetric/pt-br"): Restringe dois pontos simetricamente em relação a uma linha, ou restringe os dois primeiros pontos selecionados simetricamente em relação a um terceiro ponto selecionado.

- ![](/images/Sketcher_ConstrainBlock.svg) [Bloquear](/Sketcher_ConstrainBlock/pt-br "Sketcher ConstrainBlock/pt-br"): Impede que uma aresta se mova, ou seja, impede que seus vértices mudem suas posições atuais. Deve ser particularmente útil para corrigir a posição de B-Splines. Veja o tópico [Block Constraint](https://forum.freecadweb.org/viewtopic.php?f=9&t=26572) no fórum.

- ![](/images/Sketcher_ConstrainSnellsLaw.svg) [A Lei de Snell](/Sketcher_ConstrainSnellsLaw/pt-br "Sketcher ConstrainSnellsLaw/pt-br"): Restringe duas linhas à obediência a uma lei de refração, para simular a luz que passa por uma interface.

- ![](/images/Sketcher_ToggleDrivingConstraint.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Toggle constraints:

- ![](/images/Sketcher_ToggleDrivingConstraint.svg) [Alternar restrição de direção/referência](/Sketcher_ToggleDrivingConstraint/pt-br "Sketcher ToggleDrivingConstraint/pt-br"): Alterna a barra de ferramentas ou as restrições selecionadas de/para o modo de referência.

- ![](/images/Sketcher_ToggleActiveConstraint.svg) [Ativar/Desativar restrição](/Sketcher_ToggleActiveConstraint/pt-br "Sketcher ToggleActiveConstraint/pt-br"): Habilita ou desabilita uma restrição já colocada. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

### Ferramentas do Sketcher

- ![](/images/Sketcher_CreateFillet.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create fillet/chamfer:

- ![](/images/Sketcher_CreateFillet.svg) [Filete](/Sketcher_CreateFillet/pt-br "Sketcher CreateFillet/pt-br"): Faz um filete entre duas linhas unidas em um ponto. Selecione as duas linhas ou clique no ponto de canto e ative a ferramenta.

- ![](/images/Sketcher_CreateChamfer.svg) [Chamfer](/Sketcher_CreateChamfer "Sketcher CreateChamfer"): creates a chamfer between two non-parallel edges. This is the same tool as [Fillet](/Sketcher_CreateFillet "Sketcher CreateFillet") but with a different initial mode. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Trimming.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Edit edge:

- ![](/images/Sketcher_Trimming.svg) [Ajustar](/Sketcher_Trimming/pt-br "Sketcher Trimming/pt-br"): Corta uma linha, círculo ou arco em relação ao ponto clicado.

- ![](/images/Sketcher_Split.svg) [Dividir](/Sketcher_Split/pt-br "Sketcher Split/pt-br"): Divide uma linha ou um arco em dois, converte um círculo em um arco, mantendo a maior parte das restrições. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/Sketcher_Extend.svg) [Ampliar](/Sketcher_Extend/pt-br "Sketcher Extend/pt-br"): Estende uma linha ou um arco a uma linha limite, arco, elipse, arco de elipse ou um ponto no espaço.

- ![](/images/Sketcher_External.svg) [Geometria externa](/Sketcher_External/pt-br "Sketcher External/pt-br"): Cria uma aresta vinculada à geometria externa.

- ![](/images/Sketcher_Projection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) External geometry:

- ![](/images/Sketcher_Projection.svg) [Create external projection geometry](/Sketcher_Projection "Sketcher Projection"): Creates the projection edges of external geometry. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Sketcher_Intersection.svg) [Create external intersection geometry](/Sketcher_Intersection "Sketcher Intersection"): Creates the intersection edges of external geometry with the sketch plane. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/Sketcher_CarbonCopy.svg) [Cópia em carbono](/Sketcher_CarbonCopy/pt-br "Sketcher CarbonCopy/pt-br"): Copia a geometria de outro esboço.

- ![](/images/Sketcher_SelectOrigin.svg) [Selecionar Origem](/Sketcher_SelectOrigin/pt-br "Sketcher SelectOrigin/pt-br"): Seleciona a origem de um esboço.

- ![](/images/Sketcher_SelectHorizontalAxis.svg) [Selecionar Eixo Horizontal](/Sketcher_SelectHorizontalAxis/pt-br "Sketcher SelectHorizontalAxis/pt-br"): Seleciona o eixo horizontal de um esboço.

- ![](/images/Sketcher_SelectVerticalAxis.svg) [Selecionar Eixo Vertical](/Sketcher_SelectVerticalAxis/pt-br "Sketcher SelectVerticalAxis/pt-br"): Seleciona o eixo vertical de um esboço.

- ![](/images/Sketcher_Translate.svg) [Array transform](/Sketcher_Translate "Sketcher Translate"): Moves or optionally creates copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Rotate.svg) [Polar transform](/Sketcher_Rotate "Sketcher Rotate"): Rotates or optionally creates rotated copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Scale.svg) [Scale transform](/Sketcher_Scale "Sketcher Scale"): Scales or optionally creates scaled copies of selected elements. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Offset.svg) [Offset geometry](/Sketcher_Offset "Sketcher Offset"): Creates equidistant edges around selected edges. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_Symmetry.svg) [Simetria](/Sketcher_Symmetry/pt-br "Sketcher Symmetry/pt-br"): Copia um elemento do sketcher simétrico a uma linha escolhida.

- ![](/images/Sketcher_RemoveAxesAlignment.svg) [Retirar o alinhamento dos eixos](/Sketcher_RemoveAxesAlignment/pt-br "Sketcher RemoveAxesAlignment/pt-br"): Remover o alinhamento dos eixos enquanto tenta preservar a relação de restrição da seleção [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/Sketcher_DeleteAllGeometry.svg) [Eliminar toda a geometria](/Sketcher_DeleteAllGeometry/pt-br "Sketcher DeleteAllGeometry/pt-br"): Deleta todas as geometrias do esboço.

- ![](/images/Sketcher_DeleteAllConstraints.svg) [Eliminar todas as restrições](/Sketcher_DeleteAllConstraints/pt-br "Sketcher DeleteAllConstraints/pt-br"): Deleta todas as restrições do esboço.

- ![](/images/Edit-copy.svg) Copy in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

- ![](/images/Edit-cut.svg) Cut in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

- ![](/images/Edit-paste.svg) Paste in Sketcher: See [Copy, cut and paste](#Copy,_cut_and_paste).

### Ferramentas de B-spline do Sketcher

- ![](/images/Sketcher_BSplineApproximate.svg) [Converte geometria para B-spline](/Sketcher_BSplineApproximate/pt-br "Sketcher BSplineApproximate/pt-br")

- ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Aumenta o grau da B-spline](/Sketcher_BSplineIncreaseDegree/pt-br "Sketcher BSplineIncreaseDegree/pt-br")

- ![](/images/Sketcher_BSplineDecreaseDegree.svg) [Diminui o grau da B-spline](/Sketcher_BSplineDecreaseDegree/pt-br "Sketcher BSplineDecreaseDegree/pt-br"), [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [Aumenta a multiplicidade do nó](/Sketcher_BSplineIncreaseKnotMultiplicity/pt-br "Sketcher BSplineIncreaseKnotMultiplicity/pt-br")

- ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Diminui a multiplicidade do nó](/Sketcher_BSplineDecreaseKnotMultiplicity/pt-br "Sketcher BSplineDecreaseKnotMultiplicity/pt-br")

- ![](/images/Sketcher_BSplineInsertKnot.svg) [Insert knot](/Sketcher_BSplineInsertKnot "Sketcher BSplineInsertKnot"): Inserts a knot into a B-spline or increases the multiplicity of an existing knot.

- ![](/images/Sketcher_JoinCurves.svg) [Join curves](/Sketcher_JoinCurves "Sketcher JoinCurves"): Creates a B-spline by joining two existing B-splines or other edges. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### Sketcher visual

- ![](/images/Sketcher_SelectElementsWithDoFs.svg) [Exibindo os graus de liberdade](/Sketcher_SelectElementsWithDoFs/pt-br "Sketcher SelectElementsWithDoFs/pt-br"): Destaca em verde a geometria com graus de liberdade (GDLs), isto é, não toalmente restrita.

- ![](/images/Sketcher_SelectConstraints.svg) [Selecione Restrições](/Sketcher_SelectConstraints/pt-br "Sketcher SelectConstraints/pt-br"): Seleciona as restrições de um elemento do Sketcher.

- ![](/images/Sketcher_SelectElementsAssociatedWithConstraints.svg) [Selecione Elementos Associados a Restrições](/Sketcher_SelectElementsAssociatedWithConstraints/pt-br "Sketcher SelectElementsAssociatedWithConstraints/pt-br"): Seleciona elementos do Sketcher associados com restrições.

- ![](/images/Sketcher_SelectRedundantConstraints.svg) [Selecione Restrições Redundantes](/Sketcher_SelectRedundantConstraints/pt-br "Sketcher SelectRedundantConstraints/pt-br"): Seleciona restrições redundantes de um esboço.

- ![](/images/Sketcher_SelectConflictingConstraints.svg) [Selecione Restrições Conflitantes](/Sketcher_SelectConflictingConstraints/pt-br "Sketcher SelectConflictingConstraints/pt-br"): Seleciona restrições conflitantes de um esboço.

- ![](/images/Sketcher_ArcOverlay.svg) [Show/hide circular helper for arcs](/Sketcher_ArcOverlay "Sketcher ArcOverlay"): Shows or hides the circular helpers (underlying virtual circles) for arcs in all sketches. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Sketcher_BSplinePolygon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Show/hide B-spline information layer:

- ![](/images/Sketcher_BSplineDegree.svg) [Mostra/esconde o grau da B-spline](/Sketcher_BSplineDegree/pt-br "Sketcher BSplineDegree/pt-br")

- ![](/images/Sketcher_BSplinePolygon.svg) [Mostra/esconde o polígono de controle da B-spline](/Sketcher_BSplinePolygon/pt-br "Sketcher BSplinePolygon/pt-br")

- ![](/images/Sketcher_BSplineComb.svg) [Mostra/esconde o pente de curvatura da B-spline](/Sketcher_BSplineComb/pt-br "Sketcher BSplineComb/pt-br")

- ![](/images/Sketcher_BSplineKnotMultiplicity.svg) [Mostra/esconde o nó de multiplicidade da B-spline](/Sketcher_BSplineKnotMultiplicity/pt-br "Sketcher BSplineKnotMultiplicity/pt-br")

- ![](/images/Sketcher_BSplinePoleWeight.svg) [Mostra/esconde o peso dos pontos de controle da B-spline](/Sketcher_BSplinePoleWeight/pt-br "Sketcher BSplinePoleWeight/pt-br"), [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

- ![](/images/Sketcher_RestoreInternalAlignmentGeometry.svg) [Mostrar/ocultar geometria interna](/Sketcher_RestoreInternalAlignmentGeometry/pt-br "Sketcher RestoreInternalAlignmentGeometry/pt-br"): Recria o que falta ou deleta geometria interna desnecessária em uma elipse, arco de elipse, hipérbole, parábola ou B-spline.

- ![](/images/Sketcher_SwitchVirtualSpace.svg) [Trocar espaço virtual](/Sketcher_SwitchVirtualSpace/pt-br "Sketcher SwitchVirtualSpace/pt-br"): Permite esconder todas as restrições de um esboço e fazê-las visíveis novamente.

### Ferramentas obsoletas

- ![](/images/Sketcher_Clone.svg) [Clonar](/Sketcher_Clone/pt-br "Sketcher Clone/pt-br"): Clona um elemento do Sketcher.

- ![](/images/Sketcher_CloseShape.svg) [Forma fechada](/Sketcher_CloseShape/pt-br "Sketcher CloseShape/pt-br"): Cria uma forma fechada aplicando restrições coincidentes a exremidades. Não disponível em 0.21 and above.

- ![](/images/Sketcher_CreatePointFillet.svg) [Corner-preserving fillet](/Sketcher_CreatePointFillet "Sketcher CreatePointFillet"): Creates a fillet between two non-parallel lines while preserving their corner point. Not available in 1.0 and above.

- ![](/images/Sketcher_ConnectLines.svg) [Conectar bordas](/Sketcher_ConnectLines/pt-br "Sketcher ConnectLines/pt-br"): Conecta elementos do Sketcher aplicando restrições de coincidência nas extremidades. Não disponível em 0.21 and above.

- ![](/images/Sketcher_Copy.svg) [Copiar](/Sketcher_Copy/pt-br "Sketcher Copy/pt-br"): Copia um elemento do Sketcher.

- ![](/images/Sketcher_Move.svg) [Mover](/Sketcher_Move/pt-br "Sketcher Move/pt-br"): Move a geometria selecionada tomando como referência o último ponto selecionado.

- ![](/images/Sketcher_RectangularArray.svg) [Matriz Retangular](/Sketcher_RectangularArray/pt-br "Sketcher RectangularArray/pt-br"): Cria uma matriz de elementos do Sketcher selecionados.

## Preferências

- ![](/images/Workbench_Sketcher.svg) [Preferências](/Sketcher_Preferences/pt-br "Sketcher Preferences/pt-br"): Preferências para a bancada de trabalho **Sketcher**.

## Boas Práticas

Cada usuário CAD desenvolve sua própria maneira de trabalhar ao longo do tempo, mas existem alguns princípios gerais úteis a seguir.

- Uma série de esboços simples é mais fácil de gerenciar do que um único e complexo. Por exemplo, um primeiro esboço pode ser criado para o recurso 3D base (um “pad” ou um “revolve”), enquanto um segundo pode conter furos ou recortes (“pockets”). Alguns detalhes podem ser omitidos, para serem adicionados posteriormente como elementos 3D. Você pode escolher evitar filetes em seu esboço se houver muitos e adicioná-los como um elemento 3D.
- Sempre crie um perfil fechado, ou seu esboço não produzirá um sólido, mas sim um conjunto de faces abertas. Se você não quiser que alguns dos objetos sejam incluídos na criação do sólido, transforme-os em elementos de construção com a ferramenta Construction Mode.
- Use o recurso de restrições automáticas para limitar o número de restrições que você terá que adicionar manualmente.
- Como regra geral, aplique primeiro as restrições geométricas, depois as restrições dimensionais e bloqueie o esboço por último. Mas lembre-se: as regras são feitas para serem quebradas. Se você estiver tendo problemas para manipular seu esboço, pode ser útil restringir alguns objetos antes de completar seu perfil.
- Se possível, centralize seu esboço na origem (0,0) com a restrição de bloqueio ("Lock"). Se o seu esboço não for simétrico, localize um de seus pontos na origem ou escolha bons números redondos para as distâncias de bloqueio – Uma restrição de bloqueio de (25,75) da origem é mais facilmente lembrada do que (23,47 , 73,02). Na v0.12, as restrições externas (restringindo o esboço à geometria 3D existente, como arestas ou outros esboços) não estão implementadas. Isso significa que, para localizar a geometria de esboços subsequentes em seu primeiro esboço, você precisará definir manualmente as distâncias relativas ao primeiro esboço.
- Se você tiver a possibilidade de escolher entre a restrição Length e as restrições de distância Horizontal Distance ou Vertical Distance, prefira as últimas. Elas consomem menos recursos computacionais.
- Em geral, as melhores restrições a serem usadas são: Restrições horizontais e verticais; restrições de comprimento horizontal e vertical; tangência ponto a ponto. Se possível, limite o uso destes: a restrição geral de comprimento; tangência borda a borda; restrição de fixar o ponto em uma linha; restrição de simetria.
- Se estiver em dúvida sobre a validade de um esboço depois de concluído (os elementos ficam verdes), feche a caixa de diálogo do Sketcher, mude para a ![](/images/Workbench_Part.svg) [Bancada de trabalho Part](/Part_Workbench/pt-br "Part Workbench/pt-br") e execute ![](/images/Part_CheckGeometry.svg) [Verificar geometria](/Part_CheckGeometry/pt-br "Part CheckGeometry/pt-br").

## Tutoriais

- [Sketcher tutorial](https://forum.freecadweb.org/viewtopic.php?f=36&t=30104) por chrisb. Este é um documento PDF de 70 páginas que serve como um manual detalhado para o desenhista. Ele explica os fundamentos do uso do Sketcher e dá muitos detalhes sobre a criação de formas geométricas e cada uma das restrições.
- [Tutorial Básico de Sketcher](/Basic_Sketcher_Tutorial/pt-br "Basic Sketcher Tutorial/pt-br") para iniciantes.
- [Sketcher Micro Tutorial - Práticas de Restrição](/Sketcher_Micro_Tutorial_-_Constraint_Practices/pt-br "Sketcher Micro Tutorial - Constraint Practices/pt-br").
- [Requisitos de esboço para um esboço](/Sketcher_requirement_for_a_sketch/pt-br "Sketcher requirement for a sketch/pt-br") Requisito Mínimo para um Esboço e Determinação Completa de um Esboço.

## Scripting

A página [Sketcher scripting](/Sketcher_scripting/pt-br "Sketcher scripting/pt-br") contém exemplos de como criar restrições a partir de scripts Python.

## Exemplos

For some ideas of what can be achieved with Sketcher tools, have a look at: [Sketcher examples](/Sketcher_Examples "Sketcher Examples").

![](/images/Sketcher_ExampleHinge-01.gif)
![](/images/Sketcher_ExampleHinge-15.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Workbench/pt-br&oldid=1537993>"
