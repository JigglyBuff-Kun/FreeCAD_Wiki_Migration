---
title: FEM MeshGmshFromShape
---
|  |
| --- |
| FEM MeshGmshFromShape |
| Расположение в меню |
| Mesh → Сетка МКЭ из фигуры генерируемая построителем Gmsh |
| Верстаки |
| [FEM](/FEM_Workbench/ru "FEM Workbench/ru") |
| Быстрые клавиши |
| нет |
| Представлено в версии |
| - |
| См. также |
| [FEM tutorial](/FEM_tutorial/ru "FEM tutorial/ru") |
|  |

## Описание

Для анализа методом конечных элементов геометрия должна быть дискретизирована в [сетке МКЭ](/FEM_Mesh/ru "FEM Mesh/ru"). Эта команда использует для рассчета сетки gmsh, который должен быть установлен в системе.

Depending on your operating system and your installation package, Gmsh might be bundled with FreeCAD or not. For further information see [FEM Install](/FEM_Install#FEM_mesh_generator "FEM Install").

## Применение

1. Выберите форму, которую хотите проанализировать. Для объёмных МКЭ это должно быть твердое тело или композит. Композит необходим, если ваша деталь сделана из нескольких материалов. (Композит может быть создан с помощью команды [BooleanFragments](/Part_BooleanFragments/ru "Part BooleanFragments/ru").) -- Для МКЭ оболочки и балки кто-то должен указать здесь детали.
2. Нажмите кнопку ![](/images/FEM_MeshGmshFromShape.png) FEM mesh from shape by GMSH
3. При желании отредактируйте минимальный и максимальный размер элемента. (Автоопределение отлично работает, если вы не применяете сложные граничные условия.)
4. Нажмите кнопку Apply и дождитесь завершения вычисления сетки
5. Закройте задачу. Теперь вы должны увидеть новый объект FEMMeshGMSH в вашем активном контейнере анализа.

After the mesh has been created, you can change its properties using the [property editor](/Property_editor "Property editor"). After you change a property, you must reopen the Gmsh dialog again and click the Apply button (you can leave the dialog open while changing properties).

The Gmsh version button allows you to check the details about the currently linked Gmsh binary.

## Properties

* Данные**Algorithm2D**: The algorithm to create 2D meshes. The different algorithms are [explained here](https://gmsh.info/doc/texinfo/gmsh.html#Choosing-the-right-unstructured-algorithm). For Delaunay, see [Delaunay triangulation](https://en.wikipedia.org/wiki/Delaunay_triangulation).
* Данные**Algorithm3D**: The algorithm to create 3D meshes. The different algorithms are [explained here](https://gmsh.info/doc/texinfo/gmsh.html#Choosing-the-right-unstructured-algorithm).
* Данные**Characteristic Length Max**: The maximal size of the mesh elements. If set to *0.0*, the size will be set automatically. This property can also be changed in the Gmsh dialog in the field **Max element size**.
* Данные**Characteristic Length Min**: The minimal size of the mesh elements. If set to *0.0*, the size will be set automatically. This property can also be changed in the Gmsh dialog in the field **Min element size**.
* Данные**Coherence Mesh**:
  + true (default); duplicate mesh nodes will be removed
  + false
* Данные**Element Dimension**: The dimension of the mesh elements. This property can also be changed in the Gmsh dialog in the field **Mesh element dimension**.
  + From Shape (default); the dimension will be determined from the dimension of the object that is meshed
  + 1D
  + 2D
  + 3D
* Данные**Element Order**: The [mesh element order](https://www.comsol.de/support/knowledgebase/1270). This property can also be changed in the Gmsh dialog in the field **Mesh order**. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
  + 1st
  + 2nd (default)  
    **Note:** If you use the solver [Elmer](/FEM_SolverElmer "FEM SolverElmer") you may get this error: *ERROR:: GetEdgeBasis: Can't handle but linear elements, sorry.* This means the solver equation cannot handle 2nd order meshes. Use either 1st order meshes then, or check the FreeCAD Wiki page for the solver equation for possible options to handle 2nd order meshes.
* Данные**Geometrical Tolerance**: The geometrical tolerance for the mesh to match the object edges. The default *0.0* means that Gmsh's default of 1e-8 is used.
* Данные**Groups Of Nodes**: All nodes and not only the elements will be saved for each physical mesh group. Physical groups are collections of mesh entities (points, curves, surfaces and volumes). They and are identified by their dimension and by a tag. For example a mesh of the same object region is internally tagged the same. So all surfaces of this region will form one physical group.
* Данные**High Order Optimize**: If and how meshes with Данные**Element Order** = *2nd* are optimized. The optimization is done by a deformation of the element borders.  
  [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20") Gmsh supports different optimization algorithms. **Elastic** is an algorithm in which the mesh elements are treated as a collection of deformable viscoelastic solids. 1st order meshes cannot be optimized because their element borders are linear an cannot be deformed.
* Данные**Mesh Size From Curvature** [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): The number of mesh elements per 

  2
  π
  {\displaystyle 2\pi }
  ![{\displaystyle 2\pi }](https://wikimedia.org/api/rest_v1/media/math/render/svg/73efd1f6493490b058097060a572606d2c550a06) times the radius of the curvature. To get a finer mesh at small corners or holes, this value can be increased for better results

![](/images/FEM_Gmsh-MeshSizeFromCurvature.png)

Effect of *Mesh Size From Curvature'*; left: set to 12, right: deactivated

* Данные**Optimize Netgen**: Whether the mesh will be optimized using the 3D mesh generator [Netgen](https://github.com/NGSolve/netgen) to improve the quality of tetrahedral elements. **Note:** since Netgen can only create tetrahedral elements, this option is ignored for meshes whose Данные**Element Dimension** is not *3D*.
* Данные**Recombination Algorithm** [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): The algorithm used for Данные**Recombine 3D All** and also for Данные**Recombine All**. For more info, see section [Element Recombination](#Element_Recombination) and for technical details see the [Gmsh documentation](https://www.gmsh.info/doc/texinfo/gmsh.html#t11).
* Данные**Recombine 3D All** [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20"): Applies a recombination 3D-algorithm to all volumes. Tetrahedra will be recombined into prisms, hexahedra or pyramids if possible.
* Данные**Recombine All**: Applies a recombination algorithm to all surfaces. Triangles will be recombined into quadrangles when possible.
* Данные**Optimize Std** Optimizes the mesh to improve the quality of tetrahedral elements.
* Данные**Second Order Linear**: Option if second order nodes (if Данные**Element Order** set to *2nd*) and/or mesh refinement points are created by linear interpolation.
  + true; linear interpolation is used
  + false (default); curvilinear interpolation is used
* Данные**Subdivision Algorithm** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): allows the creation of quadrilateral and hexahedral elements by subdivision
  + None; doesn't use any subdivision algorithm
  + All Quadrangles; creates quadrilateral elements by subdivision
  + All Hexahedra; creates hexahedral elements by subdivision
  + Barycentric; creates triangular elements by barycentric subdivision

## Notes

### Nonpositive Jacobians

When you get a meshing error about nonpositive Jacobians, you can try out the following strategies:

* Set Данные**Second Order Linear** to *true* but keep Данные**Element Order** at *2nd*.
* Set Данные**Element Order** to *1st*.
* Use a smaller element size by reducing the Данные**Characteristic Length Max**.
* If solver ccxtools is used and the run button is used (not the task panel) the nodes of nonpositive jacobian elements will be green.

### Mesh Growth

At edges and small geometric entities, the mesh has to be smaller than in areas without edges. So the mesh element size grows away from the edges. The growing strategy of Gmsh is to grow between edges of different sizes. So the growing fails when an area has the same sized edges like for example this tube:

![](/images/FEM_Gmsh-MeshGrowth-failing.png)

Failing mesh growing because the cylindrical area is surrounded by the same edges

To enable a sensible mesh growing, you must in this case add an edge to the area. In the example, this would be a circle in the middle of the cylinder. The circle is added as part of a [BooleanFragments](/Part_BooleanFragments "Part BooleanFragments") compound (to form a CompSolid), see [the project file](https://forum.freecadweb.org/download/file.php?id=146255) of the example.

![](/images/FEM_Gmsh-MeshGrowth-success.png)

Sensible mesh growing due to the additional edge in the middle of the cylindrical area

### Element Recombination

Elements can be recombined in two ways, on the surface of objects so that triangles will be recombined into quadrangles if possible and in the volume of objects so that tetrahedra will be recombined into prisms, hexahedra or pyramids if possible. Thinking about the geometry, it becomes clear that the recombination result depends strongly on the geometry of the body and that recombining a 3D body only at the surface will mostly lead to strange results.

To illustrate this, look at the image below. A cuboid body is meshed using the standard settings (tetrahedra, 2nd order mesh). This is the subimage at the upper left. The image at the upper right shows the result, when additionally the elements are recombined only at the surface of the body. The result is bad because the changed surface elements don't fit to the unchanged volume elements. So Данные**Recombine All** alone usually only makes sense for 2D meshes.   
When we use now also Данные**Recombine 3D All**, the result is better, see the lower left subimage. However, the result doesn't show a great difference compared to the mesh without recombinations. Since our body is a cuboid, it is therefore sensible to use a recombination algorithm that tries to create cuboids as well. And this result is shown in the subimage at the lower right.

The *Simple* recombination algorithm will leave some triangles in the mesh in case the recombining leads to badly shaped quads. In such cases use a *full-quad* recombination algorithm, which will automatically perform a coarser mesh followed by the recombination, smoothing and subdividing. See [forum topic](https://forum.freecadweb.org/viewtopic.php?f=18&t=20351#p520392)

![](/images/FEM_Gmsh-Recombination.png)

Effect of mesh element recombination.  
Upper left: standard mesh.  
Upper right: recombination only at the surface using the **Simple** algorithm.  
Lower left: recombination at the surface and in the volume using the **Simple** algorithm.  
Lower right: recombination at the surface and in the volume using the **Simple full-quad** algorithm

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshGmshFromShape/ru&oldid=1531341>"