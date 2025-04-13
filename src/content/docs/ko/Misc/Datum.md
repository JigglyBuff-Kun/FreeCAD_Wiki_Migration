---
title: 기준도형(Datum)
---
## 소개

FreeCAD에서 "기준도형(Datum)"이라는 단어는 일반적으로 [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")에서 보조 형상을 나타내는 데 사용됩니다. 이러한 기하학적 요소는 [몸통](/Body/ko "Body/ko")의 최종 [형상](/Shape/ko "Shape/ko")의 일부를 구성하지는 않지만, [스케치](/Sketch/ko "Sketch/ko") 및 다른 유형의 [도형특징](/Feature/ko "Feature/ko")에 대한 참조 및 지원으로 사용할 수 있습니다.

다음은 [Part Feature](/Part_Feature "Part Feature")에서 파생된 `Part::Datum` 클래스에서 파생된 요소에 해당합니다.

* [PartDesign Point](/PartDesign_Point "PartDesign Point")
* [PartDesign Line](/PartDesign_Line "PartDesign Line")
* [PartDesign Plane](/PartDesign_Plane "PartDesign Plane")
* [PartDesign CoordinateSystem](/PartDesign_CoordinateSystem "PartDesign CoordinateSystem")

다음은 [Part Feature](/Part_Feature "Part Feature")에서 직접 파생됩니다.

* [PartDesign ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder")
* [PartDesign SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder")

## 용법

1. [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")로 전환합니다.
2. ![](/images/PartDesign_Body.svg) [몸통생성](/PartDesign_Body/ko "PartDesign Body/ko")버튼을 누릅니다.
3. 몸통의 원점을 선택하고 키보드의 Space 바를 눌러 표시되도록 합니다.
4. ![](/images/PartDesign_Plane.svg) [PartDesign Plane](/PartDesign_Plane "PartDesign Plane")를 눌러 평면 [task\_panel](/Task_panel "Task panel")을 엽니다.
5. [3D 보기](/3D_view/ko "3D view/ko")에서 표준 평면 중 하나(예: XY 평면)를 클릭합니다. 그런 다음 OK를 눌러 작업 패널을 닫습니다.
6. 이제 [tree\_view](/Tree_view "Tree view")에서 새로 생성된 기준평면을 선택한 다음 ![](/images/PartDesign_NewSketch.svg) [스케치 생성](/PartDesign_NewSketch/ko "PartDesign NewSketch/ko")버튼을 누릅니다.
7. 닫힌 와이어를 생성한 다음 ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad")를 사용하여 스케치를 돌출시키고 초기 고체를 생성합니다.

이제 [속성 편집기](/Property_editor/ko "Property editor/ko")에서 해당 속성을 변경하여 원하는 대로 기준평면을 이동하고 회전할 수 있으며 스케치와 패드는 새로운 [Placement](/Placement "Placement")를 따릅니다.

여러분은 다른 스케치 및 도형특징과 함께 사용할 다른 유형의 기준도형을 추가할 수 있습니다.

## 보충 설명

기준도형 객체는 [0.17버전](/Release_notes_0.17/ko "Release notes 0.17/ko")에서 등장했기 때문에 [몸통(PartDesign Bodies)](/PartDesign_Body/ko "PartDesign Body/ko") 내부에서 사용되도록 의도되었습니다. 그러나 이는 다양한 [Part\_EditAttachment](/Part_EditAttachment "Part EditAttachment")을 사용하는 유용한 "참조" 객체이므로 [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko") 외부에서 사용할 수 있어야 한다는 제안이 있었습니다. 이러한 방식으로 모든 작업대에서 특히 [조립품](/Assembly/ko "Assembly/ko") 생성과 관련된 지원 형상으로 사용할 수 있습니다.

* [Create and display local coordinate system](https://forum.freecadweb.org/viewtopic.php?f=10&t=2604)
* [Datum objects in App::Part](https://forum.freecadweb.org/viewtopic.php?f=22&t=33654)
* [Structure toolbar and datums](https://forum.freecadweb.org/viewtopic.php?t=42759)
* [Local CS cannot be used in Part Wb?](https://forum.freecadweb.org/viewtopic.php?f=3&t=42960)

Retrieved from "<http://wiki.freecad.org/index.php?title=Datum/ko&oldid=1429884>"