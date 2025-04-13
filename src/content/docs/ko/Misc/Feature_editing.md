---
title: 특징 편집하기
---
## 소개

이 페이지에서는 FreeCAD 0.17부터 도입된![](/images/Workbench_PartDesign.svg) [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")를 사용하는 방법을 설명합니다.

## 몸통(Body)

부품설계 작업대에서 작업하려면 먼저 **[몸통](/Body/ko "Body/ko")**을 만들어야 합니다. ![](/images/PartDesign_Body.svg)몸통([PartDesign Body](/PartDesign_Body "PartDesign Body"))은 하나의 연속된 고체(single contiguous solid)를 형성하는 일련의 특징들을 담는 그릇입니다.

![](/images/PartDesign_Feature_example.png)

Feature editing in practice. From left to right:  
Body with a [box](/PartDesign_AdditiveBox "PartDesign AdditiveBox") feature.  
Body with a box and a [chamfer](/PartDesign_Chamfer "PartDesign Chamfer") feature.  
Body with a box, a chamfer and a [pocket](/PartDesign_Pocket "PartDesign Pocket") feature.

문서에서는 하나의 몸통만 활성화할 수 있습니다. 활성화된 몸통은 새로 생성된 특징을 가져옵니다. 몸통을 두 번 클릭하면 활성화하거나 비활성화할 수 있습니다. 활성화된 몸통은 연한 파란색으로 강조 표시됩니다.

![](/images/PartDesign_Body_tree.png)

### What is a contiguous solid?

**하나의 연속된 고체란 무엇입니까?** 단일 금속 블록을 기계로 가공한 주물이나 물체와 같은 물체입니다. 물체에 못, 나사, 접착제 또는 용접이 포함된 경우 단일 연속 고체가 아닙니다. 실제적인 예로, 나무 의자는 각 하위 구성요소(다리, 칸막이, 좌석 등)마다 하나씩 포함된 여러 몸통들로 구성됩니다.

In FreeCAD version 1.0 an experimental property was introduced that allows the Body to have non-contiguous solids. This can also be set in the [Preferences](/PartDesign_Preferences#General "PartDesign Preferences") as default for newly created Bodies. This is not intended to be used to build, as in the example, a chair in one Body. It is meant to allow features that may produce disconnected solids that will be made contiguous by later features.

이전 나무 의자 예와 같이 모델에 여러 몸통들이 필요한 경우 범용 목적 ![](/images/Std_Part.svg) [Part 컨테이너](/Std_Part "Std Part")를 사용하여 몸통들을 그룹화하고 전체를 하나의 단위로 이동할 수 있습니다.

### 몸통 가시성 관리

몸통은 기본적으로 가장 최근의 특징을 외부에 표시합니다. 이 특징은 기본적으로 끝단(tip)으로 정의됩니다. 좋은 비유는 '빙산의 일각(tip)'이라는 표현입니다: 물 위에는 빙산의 끝부분만 보이고 나머지 덩어리의 대부분(다른 특징들)은 숨겨져 있습니다. 몸통에 새로운 특징이 추가되면서 이전 특징의 가시성은 꺼지고 새로운 특징이 끝단이 되어 표시됩니다.

한 번에 하나의 특징만 표시될 수 있습니다. 모델 트리에서 특징을 선택하고 Spacebar를 눌러 몸통내 특징의 [가시성 전환](/index.php?title=Std_ToggleVisibility/ko&action=edit&redlink=1 "Std ToggleVisibility/ko (page does not exist)")을 할 수 있으며, 실제로 몸통의 특징생성 이력을 거슬러 올라갑니다.

### 개체 이동 및 재정렬

새로운 개체(특징, 스케치 또는 데이텀 형상)를 삽입하기 위해 몸통 트리 중간에 있는 특징에 대한 끝단(tip)을 일시적으로 재정의할 수 있습니다. 몸통 내의 특징을 재정렬하거나 다른 몸통으로 이동하는 것도 가능합니다. 개체를 선택하고 마우스 오른쪽 버튼을 클릭하면 두 가지 옵션을 모두 제공하는 상황에 맞는 메뉴가 나타납니다. 객체가 면에 부착되는 등 소스 몸통에 종속성이 있는 경우 이동이 불가능 할 수 있습니다. 스케치를 다른 몸통으로 이동하려면 외부 형상에 대한 링크가 포함되어서는 안 됩니다.

![](/images/PartDesign_workflow.svg)

Schematic representation of the PartDesign workflow.

## 기준 도형

기준 도형은 사용자 정의 평면, 선, 점 또는 외부에 연결된 형상으로 구성됩니다. 스케치 및 특징에 대한 참조로 사용하기 위해 생성될 수 있습니다. 기준 도형에 대한 부착 가능성은 다양합니다.

FreeCAD에서는 비표준 방향으로 스케치(패딩, 포켓 등)를 배치하는 경우 기준 평면이 적합합니다. 즉, 세 개의 주요 축을 중심으로 오프셋되거나 회전된 평면에서입니다. 기준면과 동일한 방식으로 스케치를 비표준 방향으로 배치할 수도 있으므로 기준면을 사용할 필요가 없는 경우가 많습니다.

스케치와 기준 평면은 모두 기본 평면에 부착되어야 합니다. 생성된 형상(패드나 포켓과 같은 형상 생성 작업의 결과 형상)을 참조하는 것은 피해야 합니다. 면과 모서리의 이름이 바뀌고 번호가 다시 매겨지고 참조가 더 이상 동일한 것을 참조하지 않기 때문입니다. 이를 위상적 불안정성(topological instability) 이라고 하며 FreeCAD가 일부 외부 기하학적 라이브러리를 사용하는 방식 때문입니다. 앞으로는 이 부분이 개선되길 바랍니다. (아래의 안정적인 모델 생성을 위한 조언을 참조하세요).

## 안정적인 모델을 만들기 위한 조언

파라메트릭 모델링의 아이디어는 특정 매개변수의 값을 변경할 수 있고 후속 단계가 새 값에 따라 변경된다는 것을 의미합니다. 그러나 심각한 변경이 이루어지면 FreeCAD에서 아직 해결되지 않은 [topological naming problem](/Topological_naming_problem "Topological naming problem")로 인해 모델이 깨져 버릴 수 있습니다. 다음 설계 원칙을 준수하면 깨짐을 최소화할 수 있습니다.

* Avoid attaching sketches and custom datum geometry to generated geometry, that is any face, edge or vertex, of the model's solid. Attach them to standard planes/axes instead. Sketches attached to standard planes/axes or to datum geometry attached to standard planes/axes, will not get unexpectedly reattached to a different reference. Use attachment offsets as needed.
* Use a "master sketch". Since a master sketch is done before the rest of the model, it can only reference the standard planes/axes.
  + A master sketch should be as simple as possible, containing the basic geometric elements of your model.
  + Master sketch elements can be referenced when modelling subsequent features.
  + A master sketch can be the first sketch in the Body, or outside the Body completely. In the first case it can be referenced directly as external geometry, in the latter it can be referenced via a ![](/images/PartDesign_ShapeBinder.svg) [ShapeBinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder") or ![](/images/PartDesign_SubShapeBinder.svg) [SubShapeBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder").
* Don't create (Sub)ShapeBinders from generated geometry. Keep in mind that (Sub)ShapeBinders can be an issue if geometry is deleted from the sketch it is based on.
* Always first try to reference a sketch, or sketch geometry, rather than generated geometry. If you inevitably have to reference generated geometry, use the first feature where the element to be referenced occurs. Changes to later steps then won't break your model.
* Use dress ups, like fillets and chamfers, as late in the feature tree as possible.

## 자습서

[자습서](/Tutorials/ko "Tutorials/ko") 페이지에서는 ![](/images/Workbench_PartDesign.svg) [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")의 특징 편집하기 방법을 사용하는 몇 가지 예를 제공합니다.

* [부품작업대에서 간단한 부품 만들기](/index.php?title=Creating_a_simple_part_with_PartDesign/ko&action=edit&redlink=1 "Creating a simple part with PartDesign/ko (page does not exist)")
* [기본 부품 설계 자습서](/index.php?title=Basic_Part_Design_Tutorialko&action=edit&redlink=1 "Basic Part Design Tutorialko (page does not exist)")
* [기본 부착 자습서](/index.php?title=Basic_Attachment_Tutorialko&action=edit&redlink=1 "Basic Attachment Tutorialko (page does not exist)")

## 관련

* [Constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry")

Retrieved from "<http://wiki.freecad.org/index.php?title=Feature_editing/ko&oldid=1511474>"