---
title: Верстак Полигональные сетки
---

![](/images/Workbench_Mesh.svg)

Логотип верстака Mesh

## Введение

![](/images/Workbench_Mesh.svg) Верстак Mesh оперирует с [треугольными сетками](https://ru.wikipedia.org/wiki/Полигональная_сетка). Сетки (Meshes) - это особый тип 3D объектов, составленный из треугольных граней, соединенных по ребрам и вершинам.

Многие из 3D приложений, такие, как [sketchup](http://ru.wikipedia.org/wiki/Sketchup), [blender](http://ru.wikipedia.org/wiki/Blender), [maya](http://ru.wikipedia.org/wiki/Autodesk_Maya) или [3d studio max](http://ru.wikipedia.org/wiki/Autodesk_3ds_Max) используют сетки (meshes) в качестве основного типа 3D объекта. Сетки это очень простые объекты, содержащие только вершины (точки), ребра и (треугольные) грани, их очень легко создать, модифицировать, разбивать, растягивать, и можно легко передаваться из одного приложения в другое без потерь в деталях. Кроме того, поскольку сетки определяются очень простыми данными, 3D приложения обычно могут управляться с очень большими их количеством без использования чрезмерных ресурсов. По этим причинам сетки как 3D объекты часто выбирают для приложений, работающих с кино, анимацией и созданием изображений.

**Однако Для инженерных применений, сетки обладают очень большим ограничением:** они только создают поверхность, и не содержат информацию о массе, так что они не ведут себя как [твердые тела](/Glossary/ru#Solid "Glossary/ru"). Это означает что все твердотельные операции, такие как сложение, вычитание, на сетках выполнять всегда труднее. Верстак Mesh полезен для импорта трёхмерных данных в формате сеток, для их анализа, обнаружения ошибок, и в итоге конвертирует их в твёрдые тела для использования в ![](/images/Workbench_Part.svg) [верстаке Part](/Part_Workbench/ru "Part Workbench/ru").

![](/images/Mesh_example.jpg)

## Инструменты

Модуль полигонального моделирования сейчас обладает очень простым интерфейсом, все его функции сгруппированы в меню **Сетки**.

- ![](/images/Mesh_Import.svg) [Import mesh...](/Mesh_Import "Mesh Import"): Imports a mesh object from a file.

- ![](/images/Mesh_Export.svg) [Export mesh...](/Mesh_Export "Mesh Export"): Exports a mesh object to a file.

- ![](/images/Mesh_FromPartShape.svg) [Create mesh from shape...](/Mesh_FromPartShape "Mesh FromPartShape"): Creates mesh objects from shape objects.

- ![](/images/Mesh_RemeshGmsh.svg) [Refinement...](/Mesh_RemeshGmsh "Mesh RemeshGmsh"): Remeshes a mesh object.

### Анализ

```
Анализ кривизны, граней и проверка может ли сетка безопасно преобразована в твердое тело

```

- [Оценить и отремонтировать сетку...](/Mesh_EvaluateRepair/ru "Mesh EvaluateRepair/ru"): Анализирует и чинит сетку

* ![](/images/Mesh_EvaluateFacet.svg) [Информация о поверхности](/Mesh_EvaluateFacet/ru "Mesh EvaluateFacet/ru"): Даёт информацию о поверхностях

- [Данные о кривизне](/Mesh_EvaluateCurvature/ru "Mesh EvaluateCurvature/ru"): Даёт информацию о кривизне
- [Проверить прочность сетки](/Mesh_EvaluateSolid/ru "Mesh EvaluateSolid/ru"): Проверить, можно ли тело превратить в сетку
- [Информация о структуре...](/Mesh_BoundingBox/ru "Mesh BoundingBox/ru"): Вычисляет границы сетки

* ![](/images/Mesh_VertexCurvature.svg) [Curvature plot](/Mesh_VertexCurvature "Mesh VertexCurvature"): Creates Mesh Curvature objects for mesh objects.

* ![](/images/Mesh_HarmonizeNormals.svg) [Harmonize normals](/Mesh_HarmonizeNormals "Mesh HarmonizeNormals"): Harmonizes the normals of mesh objects.

* ![](/images/Mesh_FlipNormals.svg) [Flip normals](/Mesh_FlipNormals "Mesh FlipNormals"): Flips the normals of mesh objects.

* ![](/images/Mesh_FillupHoles.svg) [Fill holes...](/Mesh_FillupHoles "Mesh FillupHoles"): Fills holes in mesh objects.

* ![](/images/Mesh_FillInteractiveHole.svg) [Close hole](/Mesh_FillInteractiveHole "Mesh FillInteractiveHole"): Fills selected holes in mesh objects.

* ![](/images/Mesh_AddFacet.svg) [Add triangle](/Mesh_AddFacet "Mesh AddFacet"): Adds faces along a boundary of an open mesh object.

* ![](/images/Mesh_RemoveComponents.svg) [Remove components...](/Mesh_RemoveComponents "Mesh RemoveComponents"): Removes faces from mesh objects.

* ![](/images/Mesh_RemoveCompByHand.svg) [Remove components by hand...](/Mesh_RemoveCompByHand "Mesh RemoveCompByHand"): Removes components from mesh objects.

* ![](/images/Mesh_Segmentation.svg) [Create mesh segments...](/Mesh_Segmentation "Mesh Segmentation"): Creates separate mesh segments for specified surface types of a mesh object.

* ![](/images/Mesh_SegmentationBestFit.svg) [Create mesh segments from best-fit surfaces...](/Mesh_SegmentationBestFit "Mesh SegmentationBestFit"): Creates separate mesh segments for specified surface types of a mesh object, and can identify their parameters.

* ![](/images/Mesh_Smoothing.svg) [Smooth...](/Mesh_Smoothing "Mesh Smoothing"): Smooths mesh objects.

* ![](/images/Mesh_Decimating.svg) [Decimation...](/Mesh_Decimating "Mesh Decimating"): Reduces the number of faces in mesh objects.

* ![](/images/Mesh_Scale.svg) [Scale...](/Mesh_Scale "Mesh Scale"): Scales mesh objects.

* ![](/images/Mesh_BuildRegularSolid.svg) [Regular solid...](/Mesh_BuildRegularSolid "Mesh BuildRegularSolid"): Creates a regular parametric solid mesh object.

### Булевы операции

- [Объединение](/Mesh_Union/ru "Mesh Union/ru"): объединить сетки
- [Пересечение](/Mesh_Intersection/ru "Mesh Intersection/ru"): выделить пересечение полигональных сеток
- [Разность](/Mesh_Difference/ru "Mesh Difference/ru"): выполнить вычитание (вырезание) из полигональных сеток

- Cutting
  - ![](/images/Mesh_PolyCut.svg) [Cut mesh](/Mesh_PolyCut "Mesh PolyCut"): Cuts whole faces from mesh objects.
  - ![](/images/Mesh_PolyTrim.svg) [Trim mesh](/Mesh_PolyTrim "Mesh PolyTrim"): Trims faces and parts of faces from mesh objects.
  - ![](/images/Mesh_TrimByPlane.svg) [Trim mesh with a plane](/Mesh_TrimByPlane "Mesh TrimByPlane"): Trims faces and parts of faces on one side of a plane from a mesh object.
  - ![](/images/Mesh_SectionByPlane.svg) [Create section from mesh and plane](/Mesh_SectionByPlane "Mesh SectionByPlane"): Creates a cross section across a mesh object.
  - ![](/images/Mesh_CrossSections.svg) [Cross-sections...](/Mesh_CrossSections "Mesh CrossSections"): Creates multiple cross sections across mesh objects. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

* ![](/images/Mesh_Merge.svg) [Merge](/Mesh_Merge "Mesh Merge"): Creates a mesh object by combining the meshes of two or more mesh objects.

* ![](/images/Mesh_SplitComponents.svg) [Split by components](/Mesh_SplitComponents "Mesh SplitComponents"): Splits a mesh object into its components.

* ![](/images/MeshPart_CreateFlatMesh.svg) [Unwrap mesh](/MeshPart_CreateFlatMesh "MeshPart CreateFlatMesh"): Creates a flat representation of a mesh object.

* ![](/images/MeshPart_CreateFlatFace.svg) [Unwrap face](/MeshPart_CreateFlatFace "MeshPart CreateFlatFace"): Creates a flat representation of a face of a shape object.

## Preferences

There are some [export preferences related to Mesh Formats](/Import_Export_Preferences#Mesh_Formats "Import Export Preferences") but these are not used by commands belonging to this workbench. They are used by the [Std Export](/Std_Export "Std Export") command.

Mesh Workbench preferences can be found in the following groups in the [Preferences Editor](/Preferences_Editor "Preferences Editor"):

- ![](/images/Preferences-display.svg) [Display](/Preferences_Editor#Display "Preferences Editor"): On the [Mesh view](/Preferences_Editor#Mesh_view "Preferences Editor") page several preferences can be set.
- ![](/images/Preferences-openscad.svg) [OpenSCAD](/OpenSCAD_Preferences "OpenSCAD Preferences"): The [Mesh Union](/Mesh_Union "Mesh Union"), [Mesh Intersection](/Mesh_Intersection "Mesh Intersection") and [Mesh Difference](/Mesh_Difference "Mesh Difference") commands require [OpenSCAD](http://www.openscad.org/) and use the **OpenSCAD executable** preference to find its executable.

## Ссылки

- [Импорт сеток в FreeCAD](/FreeCAD_and_Mesh_Import/ru "FreeCAD and Mesh Import/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Workbench/ru&oldid=1464286>"
