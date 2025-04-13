---
title: 특징(Feature)
---
## 소개

FreeCAD에서 **특징(Feature)**라는 단어는 일반적으로 [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")에서 만들어지는 [PartDesign Feature](/PartDesign_Feature/ko "PartDesign Feature/ko") 객체(`PartDesign::Feature` 클래스)를 가리키는 데 사용됩니다. 이것은[특징 편집하기](/Feature_editing/ko "Feature editing/ko") 패러다임에 따라 고체 [형상](/Shape/ko "Shape/ko")을 생성하거나 수정하기 위해 수행하는 작업 또는 모델링 단계를 뜻합니다.

이러한 유형의 개체에 대한 자세한 내용은 [도형특징(PartDesign Feature)](/PartDesign_Feature/ko "PartDesign Feature/ko")를 참조하세요.

## 용법

1. ![](/images/Workbench_PartDesign.svg) [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")로 전환합니다.
2. ![](/images/PartDesign_Body.svg)[PartDesign Body](/PartDesign_Body "PartDesign Body")을 누릅니다.
3. ![](/images/PartDesign_NewSketch.svg) [PartDesign NewSketch](/PartDesign_NewSketch "PartDesign NewSketch") 을 눌러서 새 [스케치](/Sketch/ko "Sketch/ko")를 시작합니다.
4. 닫힌 와이어를 그리고, ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") 를 이용해 스케치를 돌출시켜 초기 고체를 만든다. 이 초기 고체는 우리가 만드려는 도형의 초기 특징이 됩니다.
5. 더 많은 스케치와 패드를 추가하고 [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")의 다른 도구를 사용하여 초기 고체를 수정하고 변형합니다. 이러한 각 단계는 도형의 [몸통](/Body/ko "Body/ko")의 특징에 해당합니다.
6. 또는 ![](/images/PartDesign_AdditiveBox.svg) [PartDesignAdditiveBox](/PartDesign_AdditiveBox "PartDesign AdditiveBox") 및 ![](/images/PartDesign_SubtractiveCylinder.svg)[PartDesign Subtractive cylinder](/PartDesign_SubtractiveCylinder "PartDesign SubtractiveCylinder")와 같은 원시 도형 개체를 추가합니다. 모든 덧셈 및 뺄셈 단계는 최종 볼륨을 만드는 데 사용되는 특징이 됩니다.

## 보충 설명

일반적인 의미에서 "특징"은 [작업대](/Workbenches/ko "Workbenches/ko")의 도구를 사용하여 최종 [형상](/Shape/ko "Shape/ko")을 만드는 데 사용되는 모든 모델링 단계가 될 수 있습니다.

* 예를 들면, [부품 작업대](/Part_Workbench/ko "Part Workbench/ko")에서, [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") 작업흐름에서, "특징"은 ![](/images/Part_Fuse.svg) [Part Fuse](/Part_Fuse "Part Fuse"), ![](/images/Part_Cut.svg) [Part Cut](/Part_Cut "Part Cut"), 또는 ![](/images/Part_Common.svg) [Part Common](/Part_Common "Part Common")과 같은 부울 연산이 될 수도 있습니다.

보다 구체적인 의미에서 "특징"은 [몸통](/PartDesign_Body/ko "PartDesign Body/ko") 내부에서 사용되는 모델링 단계를 뜻합니다.

* 예를 들면, ![](/images/PartDesign_AdditiveCylinder.svg) [PartDesign Additive cylinder](/PartDesign_AdditiveCylinder "PartDesign AdditiveCylinder"), ![](/images/PartDesign_AdditiveLoft.svg) [PartDesign Additive loft](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft"), ![](/images/PartDesign_Pocket.svg) [PartDesign Pocket](/PartDesign_Pocket "PartDesign Pocket"), ![](/images/PartDesign_SubtractiveCone.svg) [PartDesign Subtractive cone](/PartDesign_SubtractiveCone "PartDesign SubtractiveCone"), 등은 모두 우리가 만드는 도형의 (기하학적) "특징"들입니다.

Retrieved from "<http://wiki.freecad.org/index.php?title=Feature/ko&oldid=1436379>"