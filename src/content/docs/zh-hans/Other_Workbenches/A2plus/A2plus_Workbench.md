---
title: A2plus工作台
---

![](/src/assets/images/A2p_workbench.svg)

A2plus workbench icon

## 简介

A2plus 工作台是[外部工作台](/index.php?title=External_workbenches/zh-hans&action=edit&redlink=1 "External workbenches/zh-hans (page does not exist)")，用于在 FreeCAD 中的不同零件组装成一个部件。

本文档介绍了 A2plus 0.4.33 或更高版本的使用。

## 安装

A2plus 工作台是 FreeCAD 的插件。 可以通过菜单**工具 →[插件管理器](/Std_AddonMgr "Std AddonMgr")**轻松安装。
A2plus 正在积极开发中，并将经常获得新功能。 因此，您还应该使用菜单**工具 →[插件管理器](/Std_AddonMgr "Std AddonMgr")**定期对其进行更新。
A2plus 代码是在 GitHub 上托管和开发的[[1]](https://github.com/kbwbe/A2plus)，也可以通过将其复制到FreeCAD的MOD目录中进行手动安装。

## 入门

首先，切换到 FreeCAD 中的 A2plus 工具栏。 要创建部件，请在 FreeCAD 中创建一个新文件。 首先，该文件需要命名后保存才能开展后续工作。 建议（但不是必需）将其保存在要装配的零件的同一文件夹中。

现在，可以使用工具栏按钮![](/src/assets/images/A2p_ImportPart.svg)或![](/src/assets/images/A2p_ShapeReference.svg)将零件添加到装配体中。 按钮![](/src/assets/images/A2p_ImportPart.svg)将所选文件中的所有实体作为单个部分添加。 使用按钮![](/src/assets/images/A2p_ShapeReference.svg)时，您可以选择将文件的哪个实体作为零件导入。  
默认情况下，第一个添加的零件会固定在一个固定位置。(您可以稍后通过零件属性 Data**固定位置**对其位置进行改变。)  
可以使用工具栏按钮![](/src/assets/images/A2p_DuplicatePart.svg)复制装配中已经存在的零件。  
要编辑部件中的零件，请在模型树中选择它，然后使用工具栏按钮![](/src/assets/images/A2p_EditPart.svg)。 这将在 FreeCAD 中将零件在新选项卡中打开，或者如果文件已经打开，则切换到其选项卡。  
要将零件中的更改导入到部件中，请单击工具栏按钮![](/src/assets/images/A2p_ImportPart_Update.svg)。

The first added part gets a fixed position by default. (You can change this later via the part property Data**fixed Position**.)

Parts that are already in the assembly can be cloned with the toolbar button ![](/src/assets/images/A2p_DuplicatePart.svg).

To edit a part from the assembly, select it in the model tree and use the toolbar button ![](/src/assets/images/A2p_EditPart.svg). This will open the part into a new tab in FreeCAD or switch to its tab if the file is already opened.

To update changed parts in assemblies click on the toolbar button ![](/src/assets/images/A2p_ImportPart_Update.svg). The toolbar button ![](/src/assets/images/A2p_RecursiveUpdate.svg) imports parts too but recursively over possible [subassemblies](#Subassemblies). If you select one or some parts in FreeCAD's the tree view, A2plus will ask you to only update the selected parts.

导入的零件将保留其外部依赖性，并且可以进行编辑。 但是，对于像螺丝这样定义明确的零件，防止对其进行编辑造成意外修改很有用。 这可以通过工具栏按钮![](/src/assets/images/A2p_ConvertPart.svg)实现，该按钮可将所选零件转换为原始零件的静态副本。

要保存装配体并随后将其关闭，可以使用工具栏按钮 ![](/src/assets/images/A2p_Save_and_exit.svg)。

Toggling the toolbar button ![](/src/assets/images/A2p_CD_OneButton.svg) sets the way you can select several several edges, faces etc.: Either with a single click or by Ctrl+click.

## 装配

通过在零件之间添加约束来将零件组装成部件。 约束后，如果可能，A2plus 将根据约束移动零件。  
对于零件之间的复杂约束，A2plus 可能无法解析。 因此也可以参考[故障排除](#Troubleshooting/zh-hans)部分中有关解决此类情况的策略。

通过按住 Ctrl(MAC 用户需使用 command)键并选择两个零件的边或面来添加零件之间的约束。 约束将附加在模型树中，并添加到受影响的零件。

For complex constraints between parts A2plus might fail to solve the constraints. Therefore also have a look at section [Troubleshooting](#Troubleshooting) for strategies to resolve such cases.

### 保持追踪

添加的零件越多，跟踪就越重要。 因此，A2plus 提供了以下工具来移动和查看零件：

- 要在部件中移动零件，请先在模型树中将其选中，然后点击工具栏按钮![](/src/assets/images/A2p_MovePart.svg)。将零件放置在所需位置后，用鼠标左键单击完成移动操作。如果被移动的零件已经具有约束，它将通过按下工具栏按钮![](/src/assets/images/A2p_solver.svg)进行相应放置，因为这将触发部件的所有约束的解析操作。
- 要显示约束，请在模型树中将其选中，然后点击工具栏按钮![](/src/assets/images/A2p_ViewConnection.svg)。这将使整个装配透明，并突出显示通过约束连接的两个对象。要返回普通视图，请在部件中单击鼠标左键。
- 要仅显示装配中的某些零件，请在模型树中选择这些零件，然后使用工具栏按钮![](/src/assets/images/A2p_Isolate_Element.svg)。或者，您可以通过在模型树中选择某个零件并按 Space 来切换其可见性来隐藏该零件。
- 要切换整个装配体的透明度视图，可以点击工具栏按钮![](/src/assets/images/A2p_ToggleTransparency.svg)。
- 使用正常的 FreeCAD 编辑可以使每个零件透明。但是，有时由于 FreeCAD 中的错误，在重新打开装配体时零件的透明度设置会丢失。解决方法是，可以点击工具栏按钮![](/src/assets/images/A2p_Restore_Transparency.svg)恢复透明度设置。

### 约束

创建约束时，按下约束工具栏按钮后将显示一个对话框:  
![](/src/assets/images/A2p_ConstraintPropertiesDialog.png)  
对于某些约束，它允许您修改约束方向。 点击按钮![](/src/assets/images/A2p_solver.svg) Solve 您可以预先检查是否可以用 A2plus 解析这个新约束。 如果不是，请查看[故障排除](#Troubleshooting)部分。

![](/src/assets/images/A2p_ConstraintPropertiesDialog.png)

Above: The A2plus Constraint Properties Dialog

For certain constraints it allows you to modify the constraint direction. With the button ![](/src/assets/images/A2p_solver.svg) Solve you can check beforehand if this new constraint can be solved by A2plus. If not, have a look at section [Troubleshooting](#Troubleshooting).

Constraints can be disabled by changing its [visibility](/Std_ToggleVisibility "Std ToggleVisibility"). This is done by selecting the constraint in the tree view and pressing Space. This toggles the property Data**Suppressed**. A suppressed constraint is not taken into account when the assembly is solved.

A2plus 提供下列约束:

#### 点对点

在不同的两个零件上各选择一个[顶点](/Glossary#Vertex "Glossary") （点）。点击工具栏按钮![](/src/assets/images/A2p_PointIdentity.svg)添加**点重合**约束，它将使选中的两个顶点重合。

#### 点对线

选择一个零件上的[顶点](/Glossary#Vertex "Glossary")（点）或圆形[边](/Glossary#Edge "Glossary")（将选择其中心点）或一个球[面](/Glossary#Face "Glossary")（也将选择其中心点）,然后选择另一零件上的[边](/Glossary#Edge "Glossary")。工具栏按钮![](/src/assets/images/A2p_PointOnLineConstraint.svg) 添加**线上点**约束。它会把顶点移动到边的上面。

#### 点对面

选择一个零件上的[顶点](/Glossary#Vertex "Glossary")（点）或圆形[边](/Glossary#Edge "Glossary")（将选择其中心点）或一个球面[面](/Glossary#Face "Glossary")（也将选择其中心点）和另一个零件上的平面。点击工具栏按钮![](/src/assets/images/A2p_PointOnPlaneConstraint.svg)添加**面上点**约束。“约束”对话框允许您设定点和平面之间的偏移。此偏移也可以在平面的两侧之间翻转。如果偏移为零，则约束将顶点放置在平面上。

#### 球面对球面

在两个零件上选择球[面](/Glossary#Face "Glossary")或[顶点](/Glossary#Vertex "Glossary")（点）。 点击工具栏按钮![](/src/assets/images/A2p_SphericalSurfaceConstraint.svg)添加**球心重合**约束。 它将使两个零件的球心，一个零件的球的中心与零件的顶点或两个零件的顶点重合。

#### 圆边对圆边

在两个零件上选择圆形[边](/Glossary#Edge "Glossary")。 点击工具栏按钮![](/src/assets/images/A2p_CircularEdgeConstraint.svg)添加**圆形边**约束。 约束对话框允许您指定边缘之间的偏移。 该偏移量也可以翻转。 您还可以设置约束方向并锁定零件的旋转。 如果偏移量为零，则约束将使边缘同心于同一平面。

#### 轴约束

在两个部分上选择圆柱形[面](/Glossary#Face "Glossary")或线性[边](/Glossary#Edge "Glossary")。点击工具栏按钮 ![](/src/assets/images/A2p_AxialConstraint.svg)添加**轴约束**。 约束对话框允许您指定轴方向。 该对话框还允许您锁定零件的旋转。 约束将使轴或线重合。

#### 轴平行

在两个零件上选择圆柱形[面](/Glossary#Face "Glossary")或线性[边](/Glossary#Edge "Glossary")。 工具栏按钮![](/src/assets/images/A2p_AxisParallelConstraint.svg)添加了**轴平行**约束。 约束对话框允许您指定轴方向。 约束将使轴或线平行。

#### 轴对面平行

在一个零件上选择圆柱[面](/Glossary#Face "Glossary")或线性[边](/Glossary#Edge "Glossary")，在另一部分选择一个平面。 工具栏按钮![](/src/assets/images/A2p_AxisPlaneParallelConstraint.svg)添加**轴与面平行**约束。 约束将使轴或线平行于平面。

#### 轴对面法线

在一个零件上选择圆柱[面](/Glossary#Face "Glossary")或线性[边](/Glossary#Edge "Glossary")，在另一零件选择一个平面。 工具栏按钮![](/src/assets/images/A2p_AxisPlaneNormalConstraint.svg)添加**轴与面法线平行**约束。 约束将使轴或线垂直于平面。

#### Axis on Plane angle

Select either a cylindrical [face](/Glossary#Face "Glossary") or a linear [edge](/Glossary#Edge "Glossary") on one part and a plane on the other part. The toolbar button ![](/src/assets/images/A2p_AxisPlaneAngleConstraint.svg) adds the constraint **axisPlaneAngle**. The constraint will at first make the axis parallel to the plane. Then you can adjust the angle for the axis in the appearing constraint settings dialog.

#### 面平行

在两个零件上选择一个平面。 按下工具栏按钮![](/src/assets/images/A2p_PlanesParallelConstraint.svg)添加**面与面相互平行**约束。 约束对话框允许您指定约束方向。 约束将使平面平行。

#### 面对面

在两个零件上选择平面。 按下工具栏按钮![](/src/assets/images/A2p_PlaneCoincidentConstraint.svg)添加**面与面重合**约束。 约束对话框允许您指定约束方向和平面之间的偏移。 该偏移量也可以翻转。 如果偏移量为零，则约束将使平面重合。

#### 斜面

在两个零件上选择平面。 点击工具栏按钮![](/src/assets/images/A2p_AngleConstraint.svg)添加**斜面**约束。 约束对话框允许您指定平面之间的角度。 约束将使平面首先平行，并设置指定的角度。

#### 重心重合

在两个零件上选择闭合的[边](/Glossary#Edge "Glossary")或平面。 点击工具栏按钮![](/src/assets/images/A2p_CenterOfMassConstraint.svg)添加**重心**约束。 约束对话框允许您指定边或平面之间的偏移。 该偏移量也可以翻转。 您还可以设置约束方向并锁定零件的旋转。 如果偏移量为零，则约束会将边或平面置于同一平面中。

### 子部件

一个部件可以包含其他部件。 通过按下工具栏按钮![](/src/assets/images/A2p_ImportPart.svg)，然后选择包含部件\* .FCStd 文件，可以像零件一样添加它们。 也可以使用工具栏按钮![](/src/assets/images/A2p_EditPart.svg)像零件一样编辑这些子部件。请确保当发生更改后通过工具栏按钮![](/src/assets/images/A2p_ImportPart_Update.svg)更新部件关系。

## 约束处理

通过启用相应的按钮，可以选用的约束会高亮显示在工具栏和“约束工具”对话框中。 通过点击工具栏按钮 ![](/src/assets/images/A2p_DefineConstraints.svg)打开“约束工具”对话框。 它旨在保持打开状态，以便能够快速向部件添加多个约束。

可以通过在模型树中选择现有约束来进行编辑，然后双击它或使用工具栏按钮![](/src/assets/images/A2p_EditConstraint.svg)。 这将打开“约束属性”对话框。

Constraints can be temporarily suppressed by selecting them in the model tree and changing the tree element property Data**Suppressed**.

可以通过在模型树中选择约束并按 Del 或在模型树中选择带有约束的零件并使用工具栏按钮![](/src/assets/images/A2p_DeleteConnections.svg)来删除约束。

使用工具栏按钮 ![](/src/assets/images/A2p_solver.svg)可以随时解析所有约束。 如果工具栏按钮![](/src/assets/images/A2p_ToggleAutoSolve.svg)处于打开状态，则在每次编辑约束后都会自动完成解析。

工具栏按钮 ![](/src/assets/images/A2p_FlipConstraint.svg)影响最近添加的约束。 点击后将翻转约束方向。

With the ![](/src/assets/images/A2p_CD_ConstraintViewer.svg) tool, it is possible the show and inspect existing constraints. After clicking it a dialog pops up. Then either select a part in the tree and click the button Import from part to get all constraints of this part, or select one or more constraints in the tree and click the button Import from Tree. As result you get all info about the constraints. By clicking in the column _Suppress_ a single constraint can be suppressed. For more features, follow the tooltips of the other dialog buttons.

## 零件清单

要创建部件的零件清单，部件的不同零件必须获取 A2plus 可以读取的零件信息。 这可以通过使用工具栏按钮![](/src/assets/images/A2p_EditPart.svg)编辑零件来完成。 在打开的部件中，按下工具栏按钮![](/src/assets/images/A2p_PartsInfo.svg) ，并创建一个名称为*#PARTINFO#*的 [电子表格](/index.php?title=Spreadsheet_Workbench/zh-hans&action=edit&redlink=1 "Spreadsheet Workbench/zh-hans (page does not exist)")。

电子表格的结构如下：

![](/src/assets/images/A2p_PartinfoTable.png)

在最终零件列表中，用您希望使用的信息填写灰色字段。

在部件或子部件中，使用工具栏按钮![](/src/assets/images/A2p_PartsList.svg)。 它将询问您是否要对所有子部件进行递归迭代。 点击“是”。 这将创建一个名为“＃PARTSLIST＃”的新电子表格。 它包含来自零件的不同“＃PARTSINFO＃”电子表格的信息，列表如下：

![](/src/assets/images/A2p_PartslistTable.png)

位置（POS）根据模型树中零件的外观自动设置。 顶层零件将获得 POS1。  
数量（QTY）是自动从装配中计算得出的。 如果零件在装配中出现两次，则将得到数量 2。

The quantity (QTY) is automatically calculated from the assembly. If a parts is twice in the assembly it will get QTY 2.

如果您更新了零件信息，则可以再次按下工具栏按钮![](/src/assets/images/A2p_PartsList.svg)来刷新零件列表。

对于子部件，您还可以使用工具栏按钮![](/src/assets/images/A2p_PartsInfo.svg)创建信息电子表格。 当您创建或更新主部件的零件清单时，如果您要对所有子部件进行递归迭代，请单击“否”以使用此信息。 这样，不同的零件不在零件清单中，而仅在子装配中。

## 特殊功能

### 部件结构

点击工具栏按钮![](/src/assets/images/A2p_Treeview.svg)将创建一个具有部件结构的 HTML 文件。 默认情况下，将在部件文件的文件夹中创建该文件。 结构看起来像这样：  
 ![](/src/assets/images/A2p_Dependency-Tree.jpg)

: ![](/src/assets/images/A2p_Dependency-Tree.jpg)

### 自由度

```
![](/src/assets/images/6/6f/A2p_DOFs.svg)按钮用其自由度标记部件的每个零件。 此外，它的输出包含所有零件及其依存关系的列表。 该列表输出到FreeCAD的小程序“报告视图”中。 如果当前不可见此小程序，则可以通过右键单击FreeCAD工具栏区域的空白部分，然后在出现的上下文菜单中或通过菜单 View → Panels → Report view。
再次单击按钮![](/src/assets/images/6/6f/A2p_DOFs.svg)可以删除自由度标签。

```

The degrees of freedom labels can be removed by clicking the button ![](/src/assets/images/A2p_DOFs.svg) again.

### 零件标签

点击按钮 ![](/src/assets/images/A2p_PartLabel.svg) 用其名称标记三维视图中部件的每个零件。再次单击按钮![](/src/assets/images/A2p_PartLabel.svg)可以删除零件标签

### 部件整体形状

有时有必要将整个组件组合为一个形状。 然后，该形状可以用于[网格工作台](/index.php?title=Mesh_Workbench/zh-hans&action=edit&redlink=1 "Mesh Workbench/zh-hans (page does not exist)")中的 3D 打印或[技术图纸工作台](/index.php?title=TechDraw_Workbench/zh-hans&action=edit&redlink=1 "TechDraw Workbench/zh-hans (page does not exist)")中的图形。 使用工具栏按钮![](/src/assets/images/A2p_SimpleAssemblyShape.svg)创建。 默认情况下，该形状不可见。 如果部件发生更改，请使用相同的工具栏按钮来更新形状。

### Convert absolute Paths to relative Ones

With the menu **A2plus → Misc → ![](/src/assets/images/A2p_SetRelativePathes.svg) Convert absolute paths of imported parts to relative ones** you can convert absolute paths of imported parts to relative ones.

## 参考

可以通过 FreeCAD 的菜单**Edit → [Preferences](/Preferences_Editor "Preferences Editor")**访问 A2plus 首选项，并在“ A2plus”部分中进行访问。 您可以设置以下选项：

### 默认解析方法

- **使用局部系统求解**  
  求解器以将属性 Data**fixed Position**设置为“True”的零件以及受其约束的零件开始。 不计算所有其他部分。 如果可以找到解析方案，则将下一个约束部分添加到计算中，依此类推。
- **使用“磁性”求解器，一次求解所有零件**  
  求解器尝试将所有零件一次定向移动到 Data**fixed Position**属性设置为 *True*的零件上。 请注意，在大多数情况下，这将需要更多时间来计算解决方案。
- **强制固定位置**  
  它将装配中所有零件的属性 Data**fixed Position**设置为“ true”。 由于所有零件将始终固定在其创建位置，因此实际上不执行任何计算。

### 默认求解器行为

Solve automatically if a constraint property is changed
: The solver will automatically be started. The same as turning on the toolbar button ![](/src/assets/images/A2p_ToggleAutoSolve.svg).

- '_如果更改约束属性，则自动求解_  
  求解器将自动启动。 与打开工具栏按钮![](/src/assets/images/A2p_ToggleAutoSolve.svg)后的结果相同。

### 更新导入零件时的行为

- **在更新之前重新计算导入的零件**  
  将在 FreeCAD 中打开装配的所有零件，包括子 bujian ，以便使用电子表格中的值进行重建。  
  此功能旨在完全参数化构造。 **注意：**此功能是非常试验性的，不建议用于重要项目。  
  已知问题：

  - 由于错误引用零件中的拓扑名称，可能会破坏装配体
  - 如果在已关闭参考零件文件的情况下进行编辑，则主电子表格可能会损坏。 这会使 FreeCAD 崩溃。

- **启用对导入零件的递归更新**  
  递归打开所有子部件以更新它们。

- **使用实验性的拓扑命名**  
  将零件导入部件时，算法会为导入形状的每个子元素生成拓扑名称。拓扑名称被写入 Data**mux Info**。当需要更新导入的零件时，这些拓扑名称用于更新约束的子元素。因此，程序集对 FreeCAD 的易失性子元素数变得更加健壮。  
  “注意：**这会增加导入部件期间的文件大小和计算时间。如果要使用拓扑命名，则必须在创建程序集之前激活它。**

- **子部件从零件继承面的透明度**  
  部件将使用导入零件的颜色和透明度设置。  
  **注意：**此功能是非常试验性的，不建议用于重要项目。

- **不导入不可见的形状**  
  这将隐藏不可见的基准/构造形状。 **注意：**不要将任何约束条件连接到更高层级部件或其他子部件中的基准/构造形状。 否则，您可能会破坏部件。

- '_使用实体联合体来导入零件和子装配_  
  所有导入的零件将直接作为联合体放在一起。  
  如果只允许使用一个实体，此功能对于[有限元](/index.php?title=FEM_Workbench/zh-hans&action=edit&redlink=1 "FEM Workbench/zh-hans (page does not exist)")模拟或[3D 打印](/Manual:Preparing_models_for_3D_printing "Manual:Preparing models for 3D printing")很有用。 另一种方法是稍后创建 [整个部件的外形](#Shape_of_whole_Assembly)。

### 用户界面设置

- '_在工具栏中显示约束_  
  如果不使用此选项，则不同约束的工具栏按钮将不可见，以节省工具栏中的空间。 仍然可以使用“约束工具”对话框（工具栏按钮 ![](/src/assets/images/A2p_DefineConstraints.svg)）设置新约束。
- **使用操作系统的本机文件管理器**  
  如果使用此选项，则在选择部件文件时会出现操作系统的文件对话框。

### 文件存储

- **使用导入零件的相对路径**  
  使用零件文件的相对文件路径。
- **为导入的零件使用绝对路径**  
  使用零件文件的绝对文件路径。
- **所有文件都在此项目文件夹中：**  
  所有项目文件都必须在指定文件夹中。 它们是否在此文件夹的子文件夹中并不重要。 **注意：**不允许在相同文件夹中多次存在同一文件（例如，在不同的子文件夹中）。  
  此选项在不同的计算机上工作很有帮助，因为这样一来，仅需复制项目文件夹即可。

## 故障排除

迟早您会遇到 A2plus 无法解决您设置的约束的问题。 为了克服这个问题，有不同的策略：

### Using the Conflict Finder Tool

This is the safest method when you have several constraints because this tool attempts to solve one constraint after another until it finds the conflicting constraint. Then you can go on with the other strategies to resolve the identified constraint. The tool is called using the toolbar button ![](/src/assets/images/A2p_SearchConstraintConflicts.svg).

### Checking Constraint Direction

有时似乎总是定义了约束，但仍然无法解决。 一个示例：假设为两个平面设置了**[面平行](#Plane_Parallel)**约束。 现在，您想为相同的平面设置 **[面重合](#Plane_on_Plane)**约束，而 A2plus 无法解决该约束。 然后**面平行** 和 **面重合** 的约束方向是不同的。 对两个约束使用相同的方向来解决此问题。

A2plus offers to automatically check the right direction for **all** constraints of the assembly using the toolbar button ![](/src/assets/images/A2p_ReAdjustConstraints.svg).

### 删除约束

大多数无法解决的约束在添加新约束时直接发生。然后，解决方案是删除上次添加的约束。A2plus 也会提出这个建议。

有时删除策略是唯一的策略，例如，在 FreeCAD 中编辑零件时，会丢失连接到约束的面或边。然后，应一次删除一个连接到已更改零件的约束。每次删除后，使用工具栏按钮![](/src/assets/images/A2p_solver.svg)查看是否达到可解状态。

当得到可以求解的装配体时，请逐步添加所需的约束。

### 移动零件

当您得到的部件在某些情况下，求解器仅需要更好的起始值即可求解约束。 例如，您有一个轴零件和一个车轮零件。 您添加了**轴重合**约束，没有获得求解器失败但零件没有相应移动的信息，在 FreeCAD 的“报告视图”小部件中，您看到“_REACHED POS-ACCURACY：0.0' '”。 一种解决方案是通过约束将零件移到您想要获得的位置附近。可以解决此问题，逐步添加所需的约束。_

*注意：*确保约束的至少一部分将属性 Data**fixed Position**设置为*false*。

### 设置提示属性

如果在导入到 A2plus 部件后错过了零件的某些特征，请检查属性 Data**[提示](/PartDesign_MoveTip "PartDesign MoveTip")**。  
 A2plus 会导入具有所有特征的零件实体特征。 这是明智的，因为将提示设置为某个特征意味着提示背后的所有特征都不应出现在最终零件中。 因此，如果您丢失了 A2plus 中的零件特征，请通过工具栏按钮![](/src/assets/images/A2p_EditPart.svg)打开零件，然后选择一个实体并查看其属性 Data**Tip**。 如果提示不在所需的功能上，请右键单击该提示应位于的特征，然后选择**![](/src/assets/images/PartDesign_MoveTip.png)设置提示**。 最后，保存零件并使用工具栏按钮 ![](/src/assets/images/A2p_ImportPart_Update.svg)重新加载部件。

A2plus imports bodies of parts with all their features up to the tip feature. This is sensible because setting the tip to a certain feature means that all features behind the tip should not appear in the final part. So if you miss a part feature in A2plus, open the part via the toolbar button ![](/src/assets/images/A2p_EditPart.svg), then select a body and look at its property Data**Tip**. If the tip is not at the feature where you want it, right-click on the feature where the tip should be and choose **![](/src/assets/images/PartDesign_MoveTip.svg) Set tip**. Finally save the part and reload the assembly using the toolbar button ![](/src/assets/images/A2p_ImportPart_Update.svg).

### 修复部件树

如果您看不到无法解决某些约束的明确原因，则可以尝试使用工具栏按钮![](/src/assets/images/A2p_RepairTree.svg)。 这将解析所有约束，然后在不同零件下重新分组。

### Migrating old A2plus assemblies

Assemblies created with A2plus older than March 2019 do not show the correct icons for imported parts and have obsolete properties. These assemblies can be migrated to A2plus version 0.4.35 and newer using the menu **A2plus → Misc → ![](/src/assets/images/A2p_Upgrade.svg) Migrate proxies of imported parts**. After doing this, you must save and reopen your assembly file.

### 避免使用重音符号

**This strategy is not necessary for Windows.**

在某些操作系统上，如果零件或部件的文件名或文件路径包含重音符号，则可能会出现问题。 因此，一般应避免使用此类字符以及特殊字符。

### 固定位置

**使用 A2plus 0.3.11 或更高版本创建的装配体不再需要此策略，因为 A2plus 现在会发出警告，提示缺少固定位置。**

当您在两个零件之间设置约束时，没有零件的属性 Data**fixed Position**设置为“ true”，或者没有约束将零件连接到 Data**fixed Position**设置为' 'true'，约束无法解决。 如果约束的两个部分都将 Data**fixed Position**设置为“ true”，则会发生相同的情况。

随后 A2plus 会输出有关失败解决方案的信息，但是有时您只会看到零件没有相应移动，在 FreeCAD 的“报告视图”小部件中，您会看到“_REACHED POS-ACCURACY：0.0_”。 这意味着求解器完成时没有错误，但实际上无法解决约束。

因此，请检查装配中至少有一个零件的 Data**fixed Position**设置为“ true”。 然后确保仅对以某种方式连接到固定零件的零件设置约束。 要可视化这些依赖关系，请参见[装配体结构](#Assembly_Structure/zh-hans)节。

### 旋转零件

'_使用 A2plus 0.4.0 或更高版本创建的装配体不再需要此策略，因为 A2plus 现在会在后台自动旋转零件一点以为求解器获得足够的起始角度。_

如果两个选定平面当前的角度为 0° 或 180°，则求解器通常由于约束 **斜面**而失败。（零件不会相应移动，在 FreeCAD 的“报告视图”小部件中，您会看到“_REACHED POS-ACCURACY：0.0_”。）一种解决方案是使用 FreeCAD 将零件旋转几度。 变换功能（右键单击模型树中的零件，然后在上下文菜单**变换**中进行选择）。

*注意：*确保约束的至少一部分将属性 Data**fixed Position**设置为*false*。

## 动画

A2plus 通过拖动和 Python 脚本提供动画功能。

### 拖动

拖动动画是交互式的，因为您可以通过拖动部件的一部分来触发动画。
要获得这些动画：

1. 完全约束应该对其运动或旋转进行动画处理的部分
2. 单击工具栏按钮![](/src/assets/images/A2p_MovePartUnderConstraints.svg)。 这将启用拖动模式。
3. 单击装配体中所需的零件。
4. 现在，您可以移动鼠标，并且零件将在定义的约束内跟随鼠标的移动。
5. 要结束拖动模式，请在部件中单击鼠标左键或按 ESC。

这是一个尝试拖动动画的示例部件：[A2p_example-for-dragging-animation.FCStd](https://forum.freecadweb.org/download/file.php?id=99204)

![](/src/assets/images/A2p_dragging-animation-result.gif)

这是使用示例程序集的拖动动画：

### 脚本编写

尽管拖动模式提供了不错的交互式动画，但有时对于截屏视频或视频而言，它们的精度还不够高。 脚本动画的优势在于，它们可以以定义的方式对移动和旋转进行动画处理。 例如，您可以将零件前后精确旋转 10°。 以下示例使用了应旋转零件的装配体。 如果您尝试使用拖动模式对此进行动画处理，则将看到获得来回旋转的难度有多大，例如 在演示中向老板展示。 但是，使用交互式示例脚本，这是一个简单的任务。

脚本动画通常以这种方式工作：

1. 部件完全约束
2. 脚本更改参数，例如零件的位置或旋转角度
3. 更改参数后，解决了部件约束
4. 重复步骤 2.和 3.以获取动画

代替放置参数也可以改变约束，例如两个平面之间的距离。

#### 简单脚本示例

编写动画脚本的最简单方法是遵循定义的动作的非交互式动画。 这是一个例子：
首先下载此程序集文件：[A2p_animated-example.FCStd](https://forum.freecadweb.org/download/file.php?id=97554)以及此 Python 脚本：[/file.php?id=97981 A2p_animation-example-script.py](https://forum.freecadweb.org/download)。

这是脚本的内容，以“＃”开头的行描述了不同脚本行的作用：

```
# import libraries
import time, math, PySide
import A2plus.a2p_solversystem as a2p_solver

# 我们使用1度的步幅
step = 1
# 每步之间等待1毫秒
timeout = 0.001
# 初始角度为0度
angle = 0
# 我们获取当前打开的文档
document = FreeCAD.activeDocument()
# 我们获取当前打开的文档
starWheel = document.getObject("star_wheel_001")
# 我们获取当前打开的文档
progressDialog = PySide.QtGui.QProgressDialog(u"Animation progress", u"Stop", 0, 360)

# while程序块是更改角度和求解的主循环
# 随后的装配体约束
while angle < 360: # run this loop until we have one full turn (360 degrees)
    # 增加旋转角度
    angle += step
    # 设置进度对话框的新角度
    progressDialog.setValue(angle)
    # 更改零件“ star_wheel_001”的旋转角度
    starWheel.Placement.Rotation.Angle = math.radians(angle)
    # 解决约束
    a2p_solver.solveConstraints(document, useTransaction=True)
    # 解决后更新视图（“ Gui”代表“图形用户界面”）
    FreeCADGui.updateGui()
    # 将进度对话框置于最前面
    PySide.QtGui.QWidget.raise_(progressDialog)
    #等待一段时间再执行下一步
    if progressDialog.wasCanceled():
        angle = 360
    # wait some time before performing the next step
    time.sleep(timeout)

```

要使用脚本执行动画，我们必须

1. 在 FreeCAD 中打开程序集文件。
2. 在 FreeCAD 中打开脚本文件。
3. 单击工具栏按钮![](/src/assets/images/Menu_Std_DlgMacroExecute_fr_02.png)执行脚本（也称为宏）。
4. 转到装配件的选项卡以查看旋转。

如果要练习，只需更改脚本中的某些内容，然后再执行即可。 例如，将“ step”增加到“ 5”。

这是示例动画的结果：

![](/src/assets/images/A2p_animated-example-result.gif)

#### 交互式脚本示例

第一个脚本示例演示了如何在没有任何用户反馈的情况下创建动画。 对于大多数应用程序，您需要与动画进行交互。 例如，示例中有趣的问题是查看驱动销如何与车轮的中心凹槽交叉。 要仔细看，您可以将此细节提供给您的同事或老板。 因此，您需要一个交互式解决方案。

这可以通过使用带有滑块的自定义动画对话框来完成。 通过移动滑块，您可以设置旋转角度，从而在有趣的位置来回旋转。

我们使用相同的装配体文件：[A2p_animated-example.FCStd](https://forum.freecadweb.org/download/file.php?id=97554)和此 Python 脚本：[/file.php?id=97982 A2p_animation-example-script.py](https://forum.freecadweb.org/download)。

这是获取交互式动画对话框的脚本内容：

```
# import libraries
import time, math, PySide, sys
import FreeCAD.A2plus.a2p_solversystem as a2p_solver
from FreeCAD import Units
from PySide import QtCore, QtGui

＃每次计算后等待1毫秒
timeout = 0.001
＃我们获取当前打开的文档
document = FreeCAD.activeDocument()
＃我们稍后要更改零件“ star_wheel_001”的旋转角度
starWheel = document.getObject("star_wheel_001")

class AnimationDlg(QtGui.QWidget): # 动画对话框

    def __init__(self): # to initialize the dialog
        super(AnimationDlg, self).__init__()
        self.initUI()

    def initUI(self): # 对话框组件的定义
        self.setMinimumSize(self.minimumSizeHint()) # 将最小对话框大小设置为最小
        self.setWindowTitle('Animation Dialog')
        # 对整个表单使用网格布局
        self.mainLayout = QtGui.QGridLayout()
        self.lineNo = 0 # first dialog grid line
        # 添加描述标签
        DescriptionLabel = QtGui.QLabel(self)
        DescriptionLabel.setText("Change slider to change rotation angle")
        self.mainLayout.addWidget(DescriptionLabel,self.lineNo,0,1,4)
         # 下一个对话框网格线
        self.lineNo += 1
        # 添加标签；不需要“自我”前缀，因为我们不想以后更改标签
        LabelMin = QtGui.QLabel(self)
        LabelMin.setText("Min")
        LabelMin.setFixedHeight(32)
        self.mainLayout.addWidget(LabelMin,self.lineNo,0)
        # 添加旋转编辑以定义滑块最小值
        self.MinEdit = QtGui.QSpinBox(self)
        # 获取角度单位为字符串
        self.MinEdit.setSuffix(" " + str(FreeCAD.Units.Quantity(1, FreeCAD.Units.Angle))[2:])
        self.MinEdit.setMaximum(999)
        self.MinEdit.setMinimum(0)
        self.MinEdit.setSingleStep(10)
        self.MinEdit.setValue(0)
        self.MinEdit.setFixedHeight(32)
        self.MinEdit.setToolTip("Minimal angle for the slider")
        QtCore.QObject.connect(self.MinEdit, QtCore.SIGNAL("valueChanged(int)"), self.setMinEdit)
        self.mainLayout.addWidget(self.MinEdit,self.lineNo,1)
        # 添加滑块
        self.slider = QtGui.QSlider(QtCore.Qt.Horizontal, self)
        self.slider.setRange(0, 360)
        self.slider.setValue(0)
        self.slider.setFixedHeight(32)
        self.slider.setToolTip("Move the slider to change the rotation angle")
        QtCore.QObject.connect(self.slider, QtCore.SIGNAL("sliderMoved(int)"), self.handleSliderValue)
        self.mainLayout.addWidget(self.slider,self.lineNo,2)
        # 添加标签
        LabelMax = QtGui.QLabel(self)
        LabelMax.setText("Max")
        LabelMax.setFixedHeight(32)
        self.mainLayout.addWidget(LabelMax,self.lineNo,3)
        # 添加旋转编辑以定义滑块最大值
        self.MaxEdit = QtGui.QSpinBox(self)
        # 获取角度单位为字符串
        self.MaxEdit.setSuffix(" " + str(FreeCAD.Units.Quantity(1, FreeCAD.Units.Angle))[2:])
        self.MaxEdit.setMaximum(999)
        self.MaxEdit.setMinimum(1)
        self.MaxEdit.setSingleStep(10)
        self.MaxEdit.setValue(360)
        self.MaxEdit.setFixedHeight(32)
        self.MaxEdit.setToolTip("Maximal angle for the slider")
        QtCore.QObject.connect(self.MaxEdit, QtCore.SIGNAL("valueChanged(int)"), self.setMaxEdit)
        self.mainLayout.addWidget(self.MaxEdit,self.lineNo,4)
         # 下一个对话框网格线
        self.lineNo += 1
        # 添加一个间隔
        self.mainLayout.addItem(QtGui.QSpacerItem(10,10), 0, 0)
        # 添加标签
        LabelCurrent = QtGui.QLabel(self)
        LabelCurrent.setText("Current angle:")
        LabelCurrent.setFixedHeight(32)
        self.mainLayout.addWidget(LabelCurrent,self.lineNo,1)
        # 输出当前角度
        self.CurrentAngle = QtGui.QLineEdit(self)
        self.CurrentAngle.setText(str(0))
        self.CurrentAngle.setFixedHeight(32)
        self.CurrentAngle.setToolTip("Current rotation angle")
        self.CurrentAngle.isReadOnly()
        self.mainLayout.addWidget(self.CurrentAngle,self.lineNo,2)
        # 添加单位标签
        LabelUnit = QtGui.QLabel(self)
        LabelUnit.setText("deg")
        LabelUnit.setFixedHeight(32)
        self.mainLayout.addWidget(LabelUnit,self.lineNo,3)
        # 关闭对话框按钮
        self.Close = QtGui.QPushButton(self)
        self.Close.setText("Close")
        self.Close.setFixedHeight(32)
        self.Close.setToolTip("Closes the dialog")
        QtCore.QObject.connect(self.Close, QtCore.SIGNAL("clicked()"), self.CloseClicked)
        self.mainLayout.addWidget(self.Close,self.lineNo,4)
        # 将定义的网格布局放置到对话框中g
        self.setLayout(self.mainLayout)
        self.update()

    def handleSliderValue(self):
        # 将滑块值设置为角度
        starWheel.Placement.Rotation.Angle = math.radians(self.slider.value())
        # 输出当前角度
        self.CurrentAngle.setText(str(self.slider.value()))
        # 解析约束
        a2p_solver.solveConstraints(document)
        # 解决后更新视图（“ Gui”代表“图形用户界面”）
        FreeCADGui.updateGui()
        # 等待一些时间，重要的是要花时间进行计算
        time.sleep(timeout)

    def setMinEdit(self):
        # 确保最小值比最大值大
        if self.MinEdit.value() >=  self.MaxEdit.value():
            self.MaxEdit.setValue(self.MinEdit.value() + 1)
        self.slider.setRange(self.MinEdit.value(), self.MaxEdit.value())

    def setMaxEdit(self):
        # 确保最小值比最大值大
        if self.MinEdit.value() >=  self.MaxEdit.value():
            self.MinEdit.setValue(self.MaxEdit.value() - 1)
        self.slider.setRange(self.MinEdit.value(), self.MaxEdit.value())

    def CloseClicked(self):
        AnimationDialog.close()

# 创建并显示定义的对话框
AnimationDialog = AnimationDlg()
AnimationDialog.show()

# 在对话框可见时运行此循环
while AnimationDialog.isVisible():
    # 更新视图， 给OS反馈对话框处于激活状态是很重要的
    FreeCADGui.updateGui()
    # 将对话框置于最前面，以便对话框始终可见
    QtGui.QWidget.raise_(AnimationDialog)
    #在这里也输出滑块值，因为在计算过程中滑块可能已经移动了
    AnimationDialog.CurrentAngle.setText(str(AnimationDialog.slider.value()))

```

脚本中定义的对话框如下所示:  
![](/src/assets/images/A2p_AnimationDialog.png)

![](/src/assets/images/A2p_AnimationDialog.png)

### 脚本命令

为了更好地理解脚本语法，这是一些命令信息：

```
starWheel.Placement.Rotation.Angle = math.radians(angle)

```

Here we change the placement property `Rotation.Angle` of the part get got previously as `starWheel`. This property gets the angle as [radian](https://en.wikipedia.org/wiki/Radian). The function `radians()` from the library `math` converts the angle from degree to radian.

属性“ Rotation.Angle”使用零件的当前放置轴（在我们的示例中为 x 轴）。 旋转零件 您可以使用命令

```
starWheel.Placement.Rotation.Axis = FreeCAD.Vector(0,0,1)

```

围绕 z 轴设置旋转轴（在调用旋转命令之前）

```
starWheel.Placement.Rotation.Axis = FreeCAD.Vector(0,0,1)

```

除了旋转，零件也可以移动。 例如，要更改车轮在 y 方向上的放置，命令将为

```
starWheel.Placement.Base.y = PositionShift

```

在这种情况下，我们将不定义变量“ angle”，而是 我们在每次循环运行时都会更改“ PositionShift”。  
有不同的方法来设置零件的位置。 一些是[在此处记录](/Placement "Placement")。 不幸的是，没有列出所有可能的放置命令。

```
starWheel.Placement.Base.y = PositionShift

```

In this case we would not define the variable `angle` but `PositionShift` that we change on every loop run.

There are different ways to set the placement of a part. Some are [documented here](/Placement "Placement"). Unfortunately there is no list (yet) with all possible placement commands.

```
a2p_solver.solveConstraints(document, useTransaction=False/True)

```

This is an A2plus-specific command. It solves the assembly constraints of the assembly we previously got as `document`. The option `useTransaction` specifies if FreeCAD should store every change in the undo/redo stack. For large animations you might therefore set it to `false`.

Retrieved from "<http://wiki.freecad.org/index.php?title=A2plus_Workbench/zh-hans&oldid=1536551>"
