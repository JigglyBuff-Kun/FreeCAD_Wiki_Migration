---
title: 형상(Shape)
---
## 소개

FreeCAD에서 **형상(Shape)**이라는 단어는 일반적으로 [Part TopoShape](/Part_TopoShape "Part TopoShape")(`Part::TopoShape` 클래스)를 나타내는 데 사용됩니다. 이것은 요소에 3D 기하학적 및 파라메트릭 표현(큐브, 피라미드, 구, 원통, 융합 등)을 제공하는 개체 유형입니다.

기본적으로 [3D view](/3D_view "3D view")에 표시되는 모든 개체에는 [TopoShape](/Part_TopoShape "Part TopoShape")가 있습니다. 단, "[Meshes](/Mesh "Mesh")"(`Mesh::MeshObject` 클래스)는 예외입니다. .

이 객체 유형에 대한 자세한 내용은 [Part TopoShape](/Part_TopoShape "Part TopoShape")를 참조하세요.

![](/images/Shape_and_mesh.svg)

왼쪽: 속성에 의해 정의된 파라메트릭 형상. 오른쪽: 정점과 삼각형 표면으로 정의되는 [mesh](/Mesh "Mesh").

## 용법

Shapes are normally created by internal functions of the [Part Workbench](/Part_Workbench "Part Workbench"), and are ultimately defined by the [OpenCASCADE Technology](/OpenCASCADE "OpenCASCADE") kernel (OCCT).

Once a Shape is created, it can be used and modified by all [workbenches](/Workbenches "Workbenches") by creating [scripted objects](/Scripted_objects "Scripted objects") around that Shape.

Essentially, every object derived from a [Part Feature](/Part_Feature "Part Feature") (`Part::Feature` class) is expected to hold and manipulate a Shape.

Any OpenCascade Shape has a tesselation mainly to view the Shape on screen. More information about this can be found in this German [forum post](https://forum.freecad.org/viewtopic.php?t=77521&start=10#p674947) and in the [OpenCascad Mesh documentation](https://dev.opencascade.org/doc/overview/html/occt_user_guides__mesh.html).

## Notes

In informal usage, a "Shape" may be any geometrical figure that is visible in the [3D view](/3D_view "3D view"), and thus its concept may be confused with that of "[Body](/Body "Body")" or "[Part](/Part "Part")".

However, when more precision is required, the distinction must be made.

* A "[Body](/Body "Body")" is an object derived from a [Part Feature](/Part_Feature "Part Feature") (`Part::Feature` class), created with the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").
* A "Shape" is an internal object, embedded within the "[Body](/Body "Body")".
* A "[Part](/Part "Part")" is used to group several "[Bodies](/Body "Body")" to form an [assembly](/Assembly "Assembly"). A "Part" has a collection of "Shapes", but doesn't have a "Shape" of its own.

Retrieved from "<http://wiki.freecad.org/index.php?title=Shape/ko&oldid=1427814>"