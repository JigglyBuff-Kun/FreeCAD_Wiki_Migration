---
title: Верстак FEM
---

![](/images/Workbench_FEM.svg)

Логотип верстака FEM

## Введение

Верстак FEM предоставляет современный набор инструментов для анализа [Методом Конечных Элементов](https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4_%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D1%85_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2) (finite element analysis, FEA) в FreeCAD. В основном это означает, что все инструменты для проведения анализа объединены в один графический интерфейс пользователя (GUI).

![](/images/FemWorkbench.jpg)

## Рабочий процесс

Шаги которые необходимо сделать для выполнению анализа методом конечных элементов:

1. Предварительная обработка: постановка задачи анализа.
   1. Моделирование геометрии: создание геометрии с помощью FreeCAD или ее импорт из другого приложения.
   2. Создание анализа.
      1. Добавление ограничений моделирования, таких как нагрузки и фиксированные опоры, к геометрической модели.
      2. Добавление материалов к деталям геометрической модели.
      3. Создание сетки конечных элементов для геометрической модели или ее импорт из другого приложения.
2. Решение: запуск внешнего решателя из FreeCAD.
3. Постобработка: визуализация результатов анализа из FreeCAD или экспорт результатов для их последующей обработки в другом приложении.

Верстак FEM можно использовать в Linux, Windows и Mac OSX. Поскольку данный верстак использует внешние решатели, количество требуемых дополнительных настрлек будет зависеть от используемой вами операционной системы. Инструкции по настройке внешних инструментов смотрите в разделе [Установка FEM](/FEM_Install/ru "FEM Install/ru").

![](/images/FEM_Workbench_workflow.svg)

Рабочий процесс в верстаке FEM ; Верстак обращается к двум внешними программам, к первой для создания сетки твердого объекта и ко второй для выполнения фактического решения задачи методом конечных элементов

## Меню: Модель

- ![](/images/FEM_Analysis.svg) [Analysis container](/FEM_Analysis/ru "FEM Analysis/ru"): Создаёт новый контейнер для механического анализа. Если перед кликом на нём было выделено твёрдое тело, будет запущен диалог создания сетки МКЭ.

### Материалы

- ![](/images/FEM_MaterialSolid.svg) [Твердотельный материал](/FEM_MaterialSolid/ru "FEM MaterialSolid/ru"): Позволяет выбрать твердый материал из базы данных.

- ![](/images/FEM_MaterialFluid.svg) [Текучий материал](/FEM_MaterialFluid/ru "FEM MaterialFluid/ru"): Позволяет выбрать текучий материал из базы данных.

- ![](/images/FEM_MaterialMechanicalNonlinear.svg) [Нелинейный механический материал](/FEM_MaterialMechanicalNonlinear/ru "FEM MaterialMechanicalNonlinear/ru"): Позволяет добавить нелинейную механическую модель материала.

- ![](/images/FEM_MaterialReinforced.svg) [Армированный материал (бетон)](/FEM_MaterialReinforced/ru "FEM MaterialReinforced/ru"): Позволяет выбрать из базы данных армированные материалы, состоящие из матрицы и армирования.

- ![](/images/FEM_MaterialEditor.svg) [Material editor](/FEM_MaterialEditor/ru "FEM MaterialEditor/ru"): Открыть редактор материалов для их редактирования.

### Геометрия элемента

- ![](/images/FEM_ElementGeometry1D.svg) [Поперечное сечение балки](/FEM_ElementGeometry1D/ru "FEM ElementGeometry1D/ru"): Создает условие поперечного сечения балки для МКЭ.

- ![](/images/FEM_ElementRotation1D.svg) [Вращение балки](/FEM_ElementRotation1D/ru "FEM ElementRotation1D/ru"): Создает условие поворота балки для МКЭ.

- ![](/images/FEM_ElementGeometry2D.svg) [Толщина листа материала](/FEM_ElementGeometry2D/ru "FEM ElementGeometry2D/ru"): Создает условие толщины листа материала.

- ![](/images/FEM_ElementFluid1D.svg) [Fluid section for 1D flow](/FEM_ElementFluid1D/ru "FEM ElementFluid1D/ru"): Создает элемент жидкостной секции МКЭ для пневматических и гидравлических сетей.

### Electromagnetic boundary conditions

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Создать электростатический потенциал](/FEM_ConstraintElectrostaticPotential/ru "FEM ConstraintElectrostaticPotential/ru"): Создает граничное условие МКЭ для электростатического потенциала.

- ![](/images/FEM_ConstraintCurrentDensity.svg) [Current density boundary condition](/FEM_ConstraintCurrentDensity "FEM ConstraintCurrentDensity"): Used to define a current density. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_ConstraintMagnetization.svg) [Magnetization boundary condition](/FEM_ConstraintMagnetization "FEM ConstraintMagnetization"): Used to define a magnetization. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_ConstraintElectricChargeDensity.svg) [Electric charge density](/FEM_ElectricChargeDensity "FEM ElectricChargeDensity"): Used to define electric charge density load. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

### Жидкостные ограничения

- ![](/images/FEM_ConstraintInitialFlowVelocity.svg) [Начальное условие скорости потока](/FEM_ConstraintInitialFlowVelocity/ru "FEM ConstraintInitialFlowVelocity/ru"): Применяется для определения начальной скорости потока в области.

- ![](/images/FEM_ConstraintInitialPressure.svg) [Initial pressure condition](/FEM_ConstraintInitialPressure "FEM ConstraintInitialPressure"): Used to define an initial pressure for a body (volume). [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_ConstraintFlowVelocity.svg) [Граничное условие скорости потока](/FEM_ConstraintFlowVelocity/ru "FEM ConstraintFlowVelocity/ru"): Применяется для задания скорости потока как граничного условия на ребре (2D) или грани (3D).

### Геометрические Ограничения

- ![](/images/FEM_ConstraintPlaneRotation.svg) [Constraint plane rotation](/FEM_ConstraintPlaneRotation/ru "FEM ConstraintPlaneRotation/ru"): Используется для определения ограничения плоского вращения на плоской поверхности.

- ![](/images/FEM_ConstraintSectionPrint.svg) [Constraint sectionprint](/FEM_ConstraintSectionPrint/ru "FEM ConstraintSectionPrint/ru"): Creates a FEM constraint sectionprint [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru").

- ![](/images/FEM_ConstraintTransform.svg) [Constraint transform](/FEM_ConstraintTransform/ru "FEM ConstraintTransform/ru"): Используется для назначения ограничения трансформации на грани.

### Механические ограничения

- ![](/images/FEM_ConstraintFixed.svg) [Constraint fixed](/FEM_ConstraintFixed/ru "FEM ConstraintFixed/ru"): Используется для определения ограничения с фиксацией точки/грани/поверхности.

- ![](/images/FEM_ConstraintRigidBody.svg) [Rigid body constraint](/FEM_ConstraintRigidBody "FEM ConstraintRigidBody"): Used to apply the CalculiX's rigid body constraint that constrains the motion of the nodes of a selected geometrical entity to the motion of a reference point positioned by the user. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/FEM_ConstraintDisplacement.svg) [Ограничение перемещения](/FEM_ConstraintDisplacement/ru "FEM ConstraintDisplacement/ru"): Используется для определения ограничений смещения для точки/грани/поверхности.

- ![](/images/FEM_ConstraintContact.svg) [Constraint contact](/FEM_ConstraintContact/ru "FEM ConstraintContact/ru"): Используется для определения контактного ограничения между двумя поверхностями.

- ![](/images/FEM_ConstraintTie.svg) [Constraint tie](/FEM_ConstraintTie/ru "FEM ConstraintTie/ru"): Creates a FEM constraint tie [представлено в версии 0.19](/Release_notes_0.19/ru "Release notes 0.19/ru").

- ![](/images/FEM_ConstraintSpring.svg) [Spring](/FEM_ConstraintSpring "FEM ConstraintSpring"): Used to define a spring. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/FEM_ConstraintForce.svg) [Constraint force](/FEM_ConstraintForce/ru "FEM ConstraintForce/ru"): Используется для определения силы в [N], приложенной равномерно к выбираемой поверхности в определяемом направлении.

- ![](/images/FEM_ConstraintPressure.svg) [Constraint pressure](/FEM_ConstraintPressure/ru "FEM ConstraintPressure/ru"): Используется для определения ограничения давления.

- ![](/images/FEM_ConstraintCentrif.svg) [Centrifugal load](/FEM_ConstraintCentrif "FEM ConstraintCentrif"): Used to define a centrifugal force body load. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

- ![](/images/FEM_ConstraintSelfWeight.svg) [Constraint self weight](/FEM_ConstraintSelfWeight/ru "FEM ConstraintSelfWeight/ru"): используется для определения ускорения свободного падения, действующего на модель.

### Температурные ограничения

- ![](/images/FEM_ConstraintInitialTemperature.svg) [Constraint initial temperature](/FEM_ConstraintInitialTemperature/ru "FEM ConstraintInitialTemperature/ru"): Используется для определения начальной температуры тела.

- ![](/images/FEM_ConstraintHeatflux.svg) [Constraint heatflux](/FEM_ConstraintHeatflux/ru "FEM ConstraintHeatflux/ru"): Используется для определения ограничений тепловых потоков на поверхностях.

- ![](/images/FEM_ConstraintTemperature.svg) [Constraint temperature](/FEM_ConstraintTemperature/ru "FEM ConstraintTemperature/ru"): Используется для определения температурных ограничений для точки/грани/поверхности.

- ![](/images/FEM_ConstraintBodyHeatSource.svg) [Задать тело, являющееся источником тепла](/FEM_ConstraintBodyHeatSource/ru "FEM ConstraintBodyHeatSource/ru"): Создает граничное условие для МКЭ определяющее тело, являющееся источником тепла.

### Overwrite Constants

- ![](/images/FEM_ConstantVacuumPermittivity.svg) [Constant vacuum permittivity](/FEM_ConstantVacuumPermittivity/ru "FEM ConstantVacuumPermittivity/ru"): Creates a FEM constant vacuum permittivity to overwrite standard value.

## Меню: Сетка

- ![](/images/FEM_MeshNetgenFromShape.svg) [Cетка МКЭ из фигуры генерируемая построителем Netgen](/FEM_MeshNetgenFromShape/ru "FEM MeshNetgenFromShape/ru"): Create a FEM mesh from a solid or face shape by Netgen internal mesher.

- ![](/images/FEM_MeshGmshFromShape.svg) [Сетка МКЭ из фигуры генерируемая построителем Gmsh](/FEM_MeshGmshFromShape/ru "FEM MeshGmshFromShape/ru"): Создать сетку МКЭ из фигуры с помощью генератора сетки Gmsh.

- ![](/images/FEM_MeshBoundaryLayer.svg) [Граничный слой сетки МКЭ](/FEM_MeshBoundaryLayer/ru "FEM MeshBoundaryLayer/ru"): Создает граничный слой сетки МКЭ.

Translations:FEM Module/141/ru

- ![](/images/FEM_MeshRegion.svg) [Область сетки МКЭ](/FEM_MeshRegion/ru "FEM MeshRegion/ru"): Создать область сетки МКЭ.

- ![](/images/FEM_MeshGroup.svg) [Группа сетки МКЭ](/FEM_MeshGroup/ru "FEM MeshGroup/ru"): Создает группу сетки МКЭ.

- ![](/images/FEM_CreateElementsSet.svg) [Erase Elements](/FEM_CreateElementsSet "FEM CreateElementsSet"): Hides elements selected by a polygon from the mesh. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/FEM_FemMesh2Mesh.svg) [FEM mesh to mesh](/FEM_FemMesh2Mesh/ru "FEM FemMesh2Mesh/ru"): Преобразуйте поверхность сетки МКЭ в сетку.

## Меню: Решение

- ![](/images/FEM_SolverCalculixCxxtools.svg) [Solver CalculiX Standard](/FEM_SolverCalculixCxxtools/ru "FEM SolverCalculixCxxtools/ru"): Создает новый решатель для этого анализа. В большинстве случаев решатель создается вместе с анализом.

- ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer/ru "FEM SolverElmer/ru"): Создает контроллер решателя для Элмера. Он не зависит от других объектов решателя.

- ![](/images/FEM_SolverMystran.svg) [Решатель Mystran](/FEM_SolverMystran/ru "FEM SolverMystran/ru"): [представлено в версии 0.20](/Release_notes_0.20/ru "Release notes 0.20/ru")

- ![](/images/FEM_SolverZ88.svg) [Решатель Z88](/FEM_SolverZ88/ru "FEM SolverZ88/ru"): Создает задачу для решателя МКЭ Z88 .

### Mechanical equations

- ![](/images/FEM_EquationElasticity.svg) [Уравнение гибкости](/FEM_EquationElasticity/ru "FEM EquationElasticity/ru"): Создает уравнение для расчета упругости МКЭ.

- ![](/images/FEM_EquationDeformation.svg) [Deformation equation](/FEM_EquationDeformation "FEM EquationDeformation"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to perform nonlinear mechanical analyses (deformations). [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

### Electromagnetic equations

- ![](/images/FEM_EquationElectrostatic.svg) [Электростатические уравнение](/FEM_EquationElectrostatic/ru "FEM EquationElectrostatic/ru"): Создает уравнение для расчета электростатики МКЭ.

- ![](/images/FEM_EquationElectricforce.svg) [Electricforce equation](/FEM_EquationElectricforce/ru "FEM EquationElectricforce/ru"): Creates a FEM equation for electric forces.

- ![](/images/FEM_EquationMagnetodynamic.svg) [Magnetodynamic equation](/FEM_EquationMagnetodynamic "FEM EquationMagnetodynamic"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate magnetodynamics. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_EquationMagnetodynamic2D.svg) [Magnetodynamic 2D equation](/FEM_EquationMagnetodynamic2D "FEM EquationMagnetodynamic2D"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate magnetodynamics in 2D. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_EquationStaticCurrent.svg) [Static current equation](/FEM_EquationStaticCurrent "FEM EquationStaticCurrent"): Equation for the ![](/images/FEM_SolverElmer.svg) [Solver Elmer](/FEM_SolverElmer "FEM SolverElmer") to calculate static current conduction. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ![](/images/FEM_EquationFlow.svg) [Уравнение потока](/FEM_EquationFlow/ru "FEM EquationFlow/ru"): Создает уравнение МКЭ для потока вещества.

- ![](/images/FEM_EquationFlux.svg) [Flux equation](/FEM_EquationFlux/ru "FEM EquationFlux/ru"): Creates a FEM equation for flux.

- ![](/images/FEM_EquationHeat.svg) [Heat equation](/FEM_EquationHeat/ru "FEM EquationHeat/ru"): Creates a FEM equation for heat.

- ![](/images/FEM_SolverControl.svg) [Solver job control](/FEM_SolverControl/ru "FEM SolverControl/ru"): Открывает меню для настройки и запуска выбранного решателя.

- ![](/images/FEM_SolverRun.svg) [Run solver calculations](/FEM_SolverRun/ru "FEM SolverRun/ru"): Запускает выбранный решатель текущего анализа.

## Меню: Результаты

- ![](/images/FEM_ResultsPurge.svg) [Purge results](/FEM_ResultsPurge/ru "FEM ResultsPurge/ru"): Очищает текущие результаты расчёта (Results в древе проекта).

- ![](/images/FEM_ResultShow.svg) [Show result](/FEM_ResultShow/ru "FEM ResultShow/ru"): Используется для показа результатов исследования (Von Mises Stress или Displacement).

- ![](/images/FEM_PostApplyChanges.svg) [Apply changes to pipeline](/FEM_PostApplyChanges/ru "FEM PostApplyChanges/ru"): Apply changes to parameters directly and not on recompute only....

- ![](/images/FEM_PostPipelineFromResult.svg) [Post pipeline from result](/FEM_PostPipelineFromResult/ru "FEM PostPipelineFromResult/ru"): Creates a post processing pipeline from a result object.

- ![](/images/FEM_PostFilterWarp.svg) [Warp filter](/FEM_PostFilterWarp/ru "FEM PostFilterWarp/ru"): Warp the geometry along a vector field by a certain factor.

- ![](/images/FEM_PostFilterClipScalar.svg) [Scalar clip filter](/FEM_PostFilterClipScalar/ru "FEM PostFilterClipScalar/ru"): Применяется для обрезки поля с заданным скалярным значением.

- ![](/images/FEM_PostFilterCutFunction.svg) [Function cut filter](/FEM_PostFilterCutFunction/ru "FEM PostFilterCutFunction/ru"):

- ![](/images/FEM_PostFilterClipRegion.svg) [Region clip filter](/FEM_PostFilterClipRegion/ru "FEM PostFilterClipRegion/ru"):

- ![](/images/FEM_PostFilterContours.svg) [Contours filter](/FEM_PostFilterContours "FEM PostFilterContours"): Used to display iso-lines (for analyses in 2D) or iso-contours. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_PostFilterDataAlongLine.svg) [Line clip filter](/FEM_PostFilterDataAlongLine/ru "FEM PostFilterDataAlongLine/ru"): Применяется для построения цветовой диаграммы вдоль указанной линии.

- ![](/images/FEM_PostFilterLinearizedStresses.svg) [Stress linearization plot](/FEM_PostFilterLinearizedStresses/ru "FEM PostFilterLinearizedStresses/ru"): Создает график линеаризации напряжений.

- ![](/images/FEM_PostFilterDataAtPoint.svg) [Data at point clip filter](/FEM_PostFilterDataAtPoint/ru "FEM PostFilterDataAtPoint/ru"):

### Filter functions

- ![](/images/FEM_PostCreateFunctionPlane.svg) [Plane](/FEM_PostCreateFunctionPlane "FEM PostCreateFunctionPlane"): Cuts the result mesh with a plane.

- ![](/images/FEM_PostCreateFunctionSphere.svg) [Sphere](/FEM_PostCreateFunctionSphere "FEM PostCreateFunctionSphere"): Cuts the result mesh with a sphere.

- ![](/images/FEM_PostCreateFunctionCylinder.svg) [Cylinder](/FEM_PostCreateFunctionCylinder "FEM PostCreateFunctionCylinder"): Cuts the result mesh with a cylinder. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/FEM_PostCreateFunctionBox.svg) [Box](/FEM_PostCreateFunctionBox "FEM PostCreateFunctionBox"): Cuts the result mesh with a box. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

## Меню: Утилиты

- ![](/images/FEM_ClippingPlaneAdd.svg) [Clipping plane on face](/FEM_ClippingPlaneAdd/ru "FEM ClippingPlaneAdd/ru"):

- ![](/images/FEM_ClippingPlaneRemoveAll.svg) [Remove all clipping planes](/FEM_ClippingPlaneRemoveAll/ru "FEM ClippingPlaneRemoveAll/ru"):

- ![](/images/FEM_Examples.svg) [Open FEM examples](/FEM_Examples/ru "FEM Examples/ru"): Открыть графический интерфейс для доступа к примерам МКЭ.

## Контекстное меню

- ![](/images/FEM_MeshClear.svg) [Clear FEM mesh](/FEM_MeshClear/ru "FEM MeshClear/ru"):

- ![](/images/FEM_MeshDisplayInfo.svg) [Display FEM mesh info](/FEM_MeshDisplayInfo/ru "FEM MeshDisplayInfo/ru"):

## Obsolete tools

- ![](/images/FEM_ConstraintFluidBoundary.svg) [Fluid boundary condition](/FEM_ConstraintFluidBoundary/ru "FEM ConstraintFluidBoundary/ru"): Create fluid boundary condition on face entity for Computional Fluid Dynamics.

- ![](/images/FEM_ConstraintBearing.svg) [Constraint bearing](/FEM_ConstraintBearing/ru "FEM ConstraintBearing/ru"): Используется для определения подшипниковых ограничений.

- ![](/images/FEM_ConstraintGear.svg) [Constraint gear](/FEM_ConstraintGear/ru "FEM ConstraintGear/ru"): Используется для определения редукторных ограничений.

- ![](/images/FEM_ConstraintPulley.svg) [Constraint pulley](/FEM_ConstraintPulley/ru "FEM ConstraintPulley/ru"): Используется для определения ограничений шкива.

- ![](/images/FEM_SolverCalculiX.svg) [Решатель CalculiX (экспериментальный)](/FEM_SolverCalculiX/ru "FEM SolverCalculiX/ru"): Создает решатель МКЭ CalculiX (экспериментальный).

- ![](/images/FEM_CreateNodesSet.svg) [Nodes set](/FEM_CreateNodesSet/ru "FEM CreateNodesSet/ru"): Creates a FEM mesh nodes set.

## Настройки

- ![](/images/Std_DlgPreferences.svg) [Preferences...](/FEM_Preferences/ru "FEM Preferences/ru"): Доступные настройки инструментов FEM.

## Информация

На следующих страницах объясняются различные темы верстака FEM.

[Установка FEM](/FEM_Install/ru "FEM Install/ru"): подробное описание по установке(настройке) внешних программ используемых для работы верстака.

[FEM Geometry Preparation and Meshing](/FEM_Geometry_Preparation_and_Meshing "FEM Geometry Preparation and Meshing"): tips regarding geometry preparation for FEM and meshing.

[FEM Mesh](/FEM_Mesh/ru "FEM Mesh/ru"): дополнительная информация о получении сетки для анализа методом конечных элементов.

[FEM Solver](/FEM_Solver/ru "FEM Solver/ru"): дополнительная информация о различных решателях метода конечных элементов, доступных в верстаке, и о тех, которые могут быть использованы в будущем.

[FEM CalculiX](/FEM_CalculiX/ru "FEM CalculiX/ru") дополнительная информация о CalculiX, решателе по умолчанию, используемом в инструментальных средствах для расчета конструкций.

[FEM Concrete](/FEM_Concrete/ru "FEM Concrete/ru"): интересная информация по теме моделирования бетонных конструкций.

## Учебные материалы для самостоятельного изучения

Пример 1: [Анализ деформации консольной балки (CalculiX)](/FEM_CalculiX_Cantilever_3D/ru "FEM CalculiX Cantilever 3D/ru"), простейший анализ деформации консольной балки под воздействием нагрузки.

Пример 2: [Учебник по МКЭ](/FEM_tutorial/ru "FEM tutorial/ru"), простой анализ натяжения конструкции.

Пример 3: [FEM Tutorial Python](/FEM_Tutorial_Python/ru "FEM Tutorial Python/ru"), настроить пример консоли только с помощью скриптов на Python, включая сетку.

Пример 4: [Анализ деформации композитного блока](/FEM_Shear_of_a_Composite_Block/ru "FEM Shear of a Composite Block/ru"); анализ деформации композитного блока, состоящего из двух материалов.

Пример 5: [Переходный анализ методом конечных элементов](/Transient_FEM_analysis/ru "Transient FEM analysis/ru")

Пример 6: [Постобработка результатов МКЭ с помощью Paraview](/Post-Processing_of_FEM_Results_with_Paraview/ru "Post-Processing of FEM Results with Paraview/ru")

Пример 7: [FEM Example Capacitance Two Balls](/FEM_Example_Capacitance_Two_Balls/ru "FEM Example Capacitance Two Balls/ru"), Учебное пособие по графическому интерфейсу Элмера 6 «Электростатическая емкость двух шариков» с использованием примеров МКЭ.

Набор руководств по термомеханическому анализу от [openSIM](https://opensimsa.github.io/training.html)

Video tutorial 1: [FEM video for beginner](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499#p158353) (including YouTube link)

Video tutorial 2: [FEM video for beginner](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499&start=10#p162321) (including YouTube link)

Many video tutorials: [anisim Open Source Engineering Software](https://www.youtube.com/channel/UCnvFCm2BbXOVI3ObfXcxXhw) (in German)

## Развитие верстака FEM

Верстак FEM находится в постоянном развитии. Цель проекта - найти способы простого взаимодействия с различными решателями МКЭ, чтобы конечный пользователь мог упростить процесс создания, построения сетки, моделирования и оптимизации задачи инженерного проектирования, и все это внутри FreeCAD.

Дальнейшая информация предназначена для опытных пользователей и разработчиков, которые хотят расширить верстак FEM. Ожидается знакомство с C ++ и Python, а также необходимы некоторые знания о системе «объект документа», используемой в FreeCAD; эта информация доступна в [Центре опытных пользователей](/Power_users_hub/ru "Power users hub/ru") и [Центре разработчиков](/Developer_hub/ru "Developer hub/ru"). Обратите внимание: поскольку FreeCAD находится в активной разработке, некоторые статьи могут быть слишком старыми и, следовательно, устаревшими. Самая последняя информация обсуждается на [форумах FreeCAD](https://forum.freecadweb.org/index.php) в разделе «Разработка». Для обсуждения FEM, советов или помощи в расширении верстака читателю следует обратиться к [подфоруму FEM](https://forum.freecadweb.org/viewforum.php?f=18).

В следующих статьях объясняется, как можно расширить рабочую среду, например, путем добавления новых типов граничных условий (ограничений) или уравнений.

- [Extend FEM Module](/Extend_FEM_Module/ru "Extend FEM Module/ru")
- [Добавление ограничений в верстак FEM](/Add_FEM_Constraint_Tutorial/ru "Add FEM Constraint Tutorial/ru")
- [Учебник по добавлению уравнений в верстак FEM](/Add_FEM_Equation_Tutorial/ru "Add FEM Equation Tutorial/ru")

Руководство разработчика было написано, чтобы помочь опытным пользователям разобраться в сложной кодовой базе FreeCAD и взаимодействиях между основными элементами и отдельными рабочими средами. Книга размещена на github, поэтому несколько пользователей могут вносить в нее свой вклад и постоянно обновлять.

- [Early preview of ebook: Module developer' guide to FreeCAD source](https://forum.freecadweb.org/viewtopic.php?t=17581) (тема форума)
- [FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide) (хранилище github)

## Дополнительная документация к Верстаку FEM

- More information regarding extending or missing FEM documentation can be found in the forum: [FEM documentation missing on the Wiki](https://forum.freecadweb.org/viewtopic.php?f=18&t=20823)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Workbench/ru&oldid=1568044>"
