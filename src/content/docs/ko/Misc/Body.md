---
title: 몸통
---
## 소개

FreeCAD에서 "몸통(Body)"라는 단어는 일반적으로 [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")에 서 만들어 지는[PartDesign Body](/PartDesign_Body "PartDesign Body") 객체(`PartDesign::Body` 클래스)를 가리킵니다. 이는 [2D 스케치](/Sketch/ko "Sketch/ko") 및 [3D 기하학적 특징](/PartDesign_Feature/ko "PartDesign Feature/ko") 을 담아 고체 형상을 만들 수 있는 그릇(컨테이너)입니다.

이러한 유형의 개체에 대한 자세한 내용은 [부품설계 작업대에서의 몸통(PartDesignBody)](/PartDesign_Body/ko "PartDesign Body/ko")를 참조하세요.

## 용법

1. [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")로 전환합니다.
2. ![](/images/PartDesign_Body.svg) [몸통 생성](/PartDesign_Body/ko "PartDesign Body/ko")버튼을 누릅니다.
3. 새 [스케치](/Sketch/ko "Sketch/ko")를 생성하기 위해 ![](/images/PartDesign_NewSketch.svg) [스케치 생성](/PartDesign_NewSketch/ko "PartDesign NewSketch/ko")버튼을 누릅니다.
4. 폐곡선을 스케치 합니다. 그 다음 그 스케치를 돌출시키기 위해![](/images/PartDesign_Pad.svg) [깔판 생성](/index.php?title=PartDesign_Pad/ko&action=edit&redlink=1 "PartDesign Pad/ko (page does not exist)")버튼을 누릅니다.그러면 초기 고체가 만들어 집니다.
5. 더 많은 스케치와 깔판을 추가하고 [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")의 다른 도구를 사용하여 초기 고체를 수정하고 변형합니다.

또는 [스케치](/Sketch/ko "Sketch/ko")를 사용하는 대신 ![](/images/PartDesign_AdditiveBox.svg) [상자](/index.php?title=PartDesign_AdditiveBox/ko&action=edit&redlink=1 "PartDesign AdditiveBox/ko (page does not exist)") 와 같은 기본 3D[도형특징](/PartDesign_Feature/ko "PartDesign Feature/ko")을 곧바로 추가할 수 있습니다. 도형특징을 더하거나 빼 가면서 최종 형태를 만들 수 있습니다.

## 보충 설명

[특징 편집](/Feature_editing/ko "Feature editing/ko") 방법론에서 [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")를 사용할 때에는 몸통이 필요합니다.

[(부품 작업대Part Workbench)](/Part_Workbench/ko "Part Workbench/ko")를 사용할 때는 몸통이 필요하지 않습니다. 부품 작업대는 [기본 도형](/index.php?title=Part_Primitives/ko&action=edit&redlink=1 "Part Primitives/ko (page does not exist)")과 부울 연산을 기반으로 하는 [구성적 고체 기하 방법](/Constructive_solid_geometry/ko "Constructive solid geometry/ko")을 사용하기 때문입니다.

Retrieved from "<http://wiki.freecad.org/index.php?title=Body/ko&oldid=1446204>"