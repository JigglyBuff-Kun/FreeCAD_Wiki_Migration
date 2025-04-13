---
title: 부품(Part)
---
## 소개

FreeCAD에서 "부품(Part)"이라는 단어는 일반적으로 ![](/images/Std_Part.svg) [표준부품(Std Part)](/Std_Part/ko "Std Part/ko") (`App::Part` 클래스)를 가리킵니다. 이것은 기본 시스템에 의해 정의된 컨테이너 개체 유형입니다. 이 부품은 기계 조립품을 생성하기 위해 3D 형상의 위치를 ​​관리하는 데 사용됩니다.

이 유형의 개체에 대한 자세한 내용은 ![](/images/Std_Part.svg) [표준부품(Std\_Part)](/Std_Part/ko "Std Part/ko")를 참조하세요.

## 용법

표준부품(Std Part) 도구는 특정 작업대에 의해 정의되지 않고 기본 시스템에 의해 정의되며, 따라서 모든 [작업대](/Workbenches/ko "Workbenches/ko")에서 사용할 수 있는 **MenuCommand**에서 찾을 수 있습니다.

1. ![](/images/Std_Part.svg) [표준부품](/Std_Part/ko "Std Part/ko") 버튼을 누릅니다. 빈 부품이 생성되고 자동으로 *[활성화](/Std_Part#Active_status "Std Part")*가 됩니다.

## 보충 설명

일상적인 사용에서 "부품"은 [3D 보기](/3D_view/ko "3D view/ko")에 표시되는 기하학적 도형일 수 있습니다. 따라서 해당 개념은 "[몸통](/Body/ko "Body/ko")" 또는 "[조립품](/Assembly/ko "Assembly/ko")" 개념과 혼동될 수 있습니다.

그러나 보다 정밀한 작업이 필요한 경우에는 구분이 필요합니다.

* "[몸통](/Body/ko "Body/ko")"은 일반적으로 [부품 작업대](/Part_Workbench/ko "Part Workbench/ko") 또는 [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")를 사용하여 생성된 단일 연속 요소에 사용됩니다.
* "부품"은 단일 "몸통"을 그룹화하거나 여러 개를 그룹화하여 "조립품"을 구성하는 데 사용됩니다.
* "조립품"은 수동으로 또는 조립 작업대를 사용하여 어떤 방식으로든 배열된 "부품"의 모음입니다.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part/ko&oldid=1430101>"