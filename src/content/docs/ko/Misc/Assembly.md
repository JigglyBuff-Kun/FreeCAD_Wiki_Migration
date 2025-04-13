---
title: 조립품
---

## 소개

FreeCAD에서 "조립품"이라는 단어는 일반적으로 여러 개의 구별 가능한 부분으로 구성된 [3D 모델](/Model/ko "Model/ko")을 지칭하는 데 사용됩니다. 이 부분은 어떤 방식으로든 함께 결합되어 기능적인 객체를 생성합니다. 실제 제품이 만들어지는 것처럼요.

예를 들어, 볼트, 와셔 및 너트는 함께 조립할 때 조립품을 구성하는 세 개의 별도 몸통들입니다.

![](/images/PartDesign_Body_contiguous_separate.png) ![](/images/PartDesign_Body_contiguous_assembly.png)

왼쪽: 3개의 개별 연속 고체, 각각 [몸통](/PartDesign_Body/ko "PartDesign Body/ko")으로 모델링됨. 오른쪽: 조립품을 생성하기 위해 [표준 부품](/Std_Part/ko "Std Part/ko") 내부에 결합된 개별 몸통.

## 용법

### 수동 조립

일반적으로 조립품을 생성하는 데 특별한 도구가 필요하지 않으며, 단지 여러 가지 다른 [몸통들](/Body/ko "Body/ko")을 어떤 방식으로든 배열하면 됩니다.

원하는 위치에 몸통을 배치하려면

- [Std TransformManip](/Std_TransformManip "Std TransformManip") 도구를 사용하거나

* ![](/images/Std_Placement.svg) [Std Placement](/Std_Placement "Std Placement") 대화상자를 사용할 수 있고 또는

- [속성 편집기](/Property_editor/ko "Property editor/ko")에서 [placement](/Placement "Placement") 속성을 직접 수정하면 됩니다.

Lattice2, Manipulator, Part-o-magic 또는 WorkFeature와 같은 유사 조립품 [외부 작업대](/External_workbenches/ko "External workbenches/ko") 중 하나를 사용하여 교차점을 찾고, 거리를 측정하고, 원하는 방식으로 개체를 배포할 수 있습니다.

일반적으로 ![](/images/Std_Part.svg) [표준부품](/Std_Part/ko "Std Part/ko") 객체는 조립품을 생성하기 위한 기본 빌딩 블록 역할을 하도록 설계되었습니다. 이 객체는 여러 개의 [몸통들](/Body/ko "Body/ko")을 그룹화하여 하나의 단위, 즉 하위 조립품으로 함께 이동하는 데 사용됩니다. 그런 다음 이 하위 어셈블리를 다른 하위 조립품 옆에 배치하거나 다른 하위 조립품 내부에 사용하여 최종 조립품을 만들 수 있습니다.

### 구속조건 지어진 조립

내장된 [조립 작업대](/Assembly_Workbench/ko "Assembly Workbench/ko") 또는
![](/images/A2p_workbench.svg) [A2plus](/A2plus_Workbench "A2plus Workbench"), ![](/images/Assembly3_workbench_icon.svg) [Assembly3](/Assembly3_Workbench "Assembly3 Workbench"), ![](/images/Assembly4_workbench_icon.svg) [Assembly4](/Assembly4_Workbench "Assembly4 Workbench")와 같은 별도 설치 가능한 다른 조립 작업대를 사용할 수도 있습니다. [Assembly2](/Assembly2_Workbench "Assembly2 Workbench")작업대는 유지 관리되지 않으므로 새 모델에는 권장되지 않습니다.

조립 작업대는 수학적으로 객체를 제자리에 묶기 위해 구속조건과 표현식을 사용하여 모델의 객체 간의 관계를 생성합니다. 예를 들면, "이 면은 다른 면에 달라붙어야 합니다.", "이 원통은 저 원과 중심이 같아야 합니다.", "이 점은 이 가장자리를 따라야 합니다." 등이 있습니다.

이는 복잡한 기계 시스템에서 일반적으로 사용되는 소프트웨어의 고급 사용법입니다. [모델](/index.php?title=Mod;e/ko&action=edit&redlink=1 "Mod;e/ko (page does not exist)")이 그다지 복잡하지 않다면 조립 작업대를 사용할 필요가 없을 수도 있습니다.

## 보충 설명

- FreeCAD 1.0부터는 공식 [조립 작업대](/Assembly_Workbench/ko "Assembly Workbench/ko")가 기본적으로 포함되어 있습니다.

조립 작업대는 일반적으로 서로 호환되지 않는 것에 주의 하세요. 이러한 작업대 중 하나를 사용하여 조립품을 생성하는 경우 해당 작업대를 고수해야 하며 동일한 문서에 다른 조립 작업대를 혼용해 사용해서는 안 됩니다.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly/ko&oldid=1538645>"
