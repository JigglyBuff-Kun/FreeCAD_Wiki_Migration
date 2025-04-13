---
title: 부품설계 작업대
---

![](/images/Workbench_PartDesign.svg)

부품설계 작업대 아이콘

## 소개

![](/images/Workbench_PartDesign.svg) **부품설계 작업대**에는 복잡한 고체 부품을 만들기 위한 다양한 도구들이 있습니다. 주로 완제품으로 제조 및 조립될 수 있는 기계 부품을 만드는 데 중점을 두고 있지만 생성된 고체는 일반적으로 [건축 작업대](/Arch_Workbench/ko "Arch Workbench/ko"), [FEM 작업대](/FEM_Workbench/ko "FEM Workbench/ko") 또는 [CAM 작업대](/CAM_Workbench/ko "CAM Workbench/ko")와 같은 다른 목적의 작업대에서도 사용될 수 있습니다.

![](/images/Workbench_Part.svg) [부품 작업대](/Part_Workbench/ko "Part Workbench/ko")는 형상을 만들기 위해 [구성적 고체 기하학(Constructive solid geometry)](/Constructive_solid_geometry/ko "Constructive solid geometry/ko")(CSG) 방법론을 기반으로 하지만, 부품설계 작업대는 매개변수를 사용하여 도형의 특징을 편집하는 방법을 사용하는데, 이는 최종 형상을 얻을 때까지 기본 고체 위에 특징을 추가하여 순차적으로 변형하는 것을 의미합니다. 이 작업과정에 대한 더 자세한 설명은 [특징 편집하기](/Feature_editing/ko "Feature editing/ko") 페이지를 참조하고, 고체 생성을 시작하려면 [부품설계 작업대에서 간단한 부품 만들기](/index.php?title=Creating_a_simple_part_with_PartDesign/ko&action=edit&redlink=1 "Creating a simple part with PartDesign/ko (page does not exist)")를 참조하세요.

See the [feature editing](/Feature_editing "Feature editing") page for a more complete explanation of this process, and then see [Creating a simple component with PartDesign](/Creating_a_simple_part_with_PartDesign "Creating a simple part with PartDesign") to get started with creating solids.

부품 작업대와 부품설계 작업대에 대한 자세한 설명은 [부품 작업대와 부품설계 작업대](/Part_and_PartDesign/ko "Part and PartDesign/ko")에서 확인할 수 있습니다.

![](/images/PartDesign_Workbench_Example.jpg)

## 도구

부품설계 작업대의 도구는 모두 **Part Design** 메뉴와 부품설계 작업대를 로드할 때 나타나는 PartDesign 도구 모음에 있습니다.

### 부품설계 도우미 도구

- ![](/images/PartDesign_Body.svg) [몸통 생성](/PartDesign_Body/ko "PartDesign Body/ko"): 활성 문서에 [몸통(Body)](/Body/ko "Body/ko") 객체를 생성하고 활성화합니다.

- ![](/images/PartDesign_NewSketch.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 스케치 생성:

: \- ![](/images/Sketcher_NewSketch.svg) [스케치 생성](/PartDesign_NewSketch/ko "PartDesign NewSketch/ko"): 선택한 면이나 평면에 새 스케치를 만듭니다. 이 도구를 실행하는 동안 면을 선택하지 않으면 작업 패널에서 평면을 선택하라는 메시지가 사용자에게 표시됩니다. 그런 다음 인터페이스는 스케치 편집 모드에서 [스케치 작업대](/Sketcher_Workbench/ko "Sketcher Workbench/ko")로 전환됩니다.

: \- ![](/images/Sketcher_MapSketch.svg) [스케치 부착하기](/index.php?title=Sketcher_MapSketch/ko&action=edit&redlink=1 "Sketcher MapSketch/ko (page does not exist)"): 활성 몸통에서 선택한 형상에 스케치를 붙입니다.

: \- ![](/images/Sketcher_EditSketch.svg) [스케치 편집](/index.php?title=Sketcher_EditSketch/ko&action=edit&redlink=1 "Sketcher EditSketch/ko (page does not exist)"): 편집을 위해 선택한 스케치를 엽니다.

- ![](/images/Sketcher_ValidateSketch.svg) [스케치 유효성 검사](/index.php?title=Sketcher_ValidateSketch/ko&action=edit&redlink=1 "Sketcher ValidateSketch/ko (page does not exist)"): 다양한 점의 공차를 확인하고 조정합니다.

- ![](/images/Part_CheckGeometry.svg) [기하학적 요소 검사](/Part_CheckGeometry/ko "Part CheckGeometry/ko"): 선택한 개체의 기하학적 구조에 오류가 있는지 확인합니다.

- ![](/images/PartDesign_ShapeBinder.svg) [Create a shape binder](/PartDesign_ShapeBinder "PartDesign ShapeBinder"): creates a shape binder referencing geometry from a single parent object.

- ![](/images/PartDesign_SubShapeBinder.svg) [Create a sub-object(s) shape binder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder"): creates a shape binder referencing geometry from one or more parent objects.

- ![](/images/PartDesign_Clone.svg) [복제하기](/index.php?title=PartDesign_Clone/ko&action=edit&redlink=1 "PartDesign Clone/ko (page does not exist)") : 선택한 몸통을 복제합니다.

- ![](/images/PartDesign_Plane.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 기준도형 생성:

: \- ![](/images/PartDesign_Plane.svg) [기준 평면 생성](/index.php?title=PartDesign_Plane/ko&action=edit&redlink=1 "PartDesign Plane/ko (page does not exist)"): 기준 평면을 활성 몸통에 생성합니다.

: \- ![](/images/PartDesign_Line.svg) [기준선 생성](/index.php?title=PartDesign_Line/ko&action=edit&redlink=1 "PartDesign Line/ko (page does not exist)"): 기준선을 활성 몸통에 생성합니다.

: \- ![](/images/PartDesign_Point.svg) [기준점 생성](/index.php?title=PartDesign_Point/ko&action=edit&redlink=1 "PartDesign Point/ko (page does not exist)"): 기준점을 활성 몸통에 생성합니다.

: \- ![](/images/PartDesign_CoordinateSystem.svg) [지역 좌표계 생성](/index.php?title=PartDesign_CoordinateSystem/ko&action=edit&redlink=1 "PartDesign CoordinateSystem/ko (page does not exist)"): 기준도형에 부착된 지역 좌표계를 활성 몸통에 생성합니다.

: [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): these tools have been replaced by new [datum tools](/Std_Base#Part_Datums "Std Base").

### 조형 도구

#### 덧셈적 도구

아래는 기본적인 도형특징을 생성하거나 기존 몸통에 재료를 더하기 위한 도구입니다.

- ![](/images/PartDesign_Pad.svg) [깔판](/index.php?title=PartDesign_Pad/ko&action=edit&redlink=1 "PartDesign Pad/ko (page does not exist)"): 선택한 (닫힌) 스케치를 돌출하여 평평한 고체 판을 만듭니다.

- ![](/images/PartDesign_Revolution.svg) [회전](/index.php?title=PartDesign_Revolution/ko&action=edit&redlink=1 "PartDesign Revolution/ko (page does not exist)"): 축을 중심으로 스케치를 회전하여 고체를 생성합니다. 스케치는 닫힌 윤곽선을 만들어야 합니다.

- ![](/images/PartDesign_AdditiveLoft.svg) [로프트 추가](/index.php?title=PartDesign_AdditiveLoft/ko&action=edit&redlink=1 "PartDesign AdditiveLoft/ko (page does not exist)"): 두 개 이상의 스케치 사이를 전환하여 고체를 생성합니다.

- ![](/images/PartDesign_AdditivePipe.svg) [파이프 추가](/PartDesign_AdditivePipe/ko "PartDesign AdditivePipe/ko"): 열려 있거나 닫힌 경로를 따라 하나 이상의 스케치를 쓸어 나가며 고체를 생성합니다.

- ![](/images/PartDesign_AdditiveHelix.svg) [나선 추가](/index.php?title=PartDesign_AdditiveHelix/ko&action=edit&redlink=1 "PartDesign AdditiveHelix/ko (page does not exist)"): 나선을 따라 스케치를 쓸어 나가며 고체를 생성합니다.

- ![](/images/PartDesign_AdditiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 기본 입체도형 추가:

: \- ![](/images/PartDesign_AdditiveBox.svg) [상자 추가](/index.php?title=PartDesign_AdditiveBox/ko&action=edit&redlink=1 "PartDesign AdditiveBox/ko (page does not exist)"): 상자를 만들어 활성 몸통에 더합니다.

: \- ![](/images/PartDesign_AdditiveCylinder.svg) [원통 추가](/index.php?title=PartDesign_AdditiveCylinder/ko&action=edit&redlink=1 "PartDesign AdditiveCylinder/ko (page does not exist)"): 원통을 만들어 활성 몸통에 더합니다.

: \- ![](/images/PartDesign_AdditiveSphere.svg) [구체 추가](/index.php?title=PartDesign_AdditiveSphere/ko&action=edit&redlink=1 "PartDesign AdditiveSphere/ko (page does not exist)"): 구체를 만들어 활성 몸통에 더합니다.

: \- ![](/images/PartDesign_AdditiveCone.svg) [원뿔 추가](/index.php?title=PartDesign_AdditiveCone/ko&action=edit&redlink=1 "PartDesign AdditiveCone/ko (page does not exist)"): 원뿔을 만들어 활성 몸통에 더합니다.

: \- ![](/images/PartDesign_AdditiveEllipsoid.svg) [타원체 추가](/index.php?title=PartDesign_AdditiveEllipsoid/ko&action=edit&redlink=1 "PartDesign AdditiveEllipsoid/ko (page does not exist)"): 타원체를 만들어 활성 몸통에 더합니다.

: \- ![](/images/PartDesign_AdditiveTorus.svg) [원환체 추가](/index.php?title=PartDesign_AdditiveTorus/ko&action=edit&redlink=1 "PartDesign AdditiveTorus/ko (page does not exist)"): 원환체를 만들어 활성 몸통에 더합니다.

: \- ![](/images/PartDesign_AdditivePrism.svg) [각기둥 추가](/index.php?title=PartDesign_AdditivePrism/ko&action=edit&redlink=1 "PartDesign AdditivePrism/ko (page does not exist)"): 각기둥을 만들어 활성 몸통에 더합니다.

: \- ![](/images/PartDesign_AdditiveWedge.svg) [쐐기 추가](/index.php?title=PartDesign_AdditiveWedge/ko&action=edit&redlink=1 "PartDesign AdditiveWedge/ko (page does not exist)"): 쐐기를 만들어 활성 몸통에 더합니다.

#### 뺄셈적 도구

아래는 기존 몸통에서 재료를 빼는 도구입니다.

- ![](/images/PartDesign_Pocket.svg) [오목 자리](/index.php?title=PartDesign_Pocket/ko&action=edit&redlink=1 "PartDesign Pocket/ko (page does not exist)"): 선택한 스케치에서 오목한 자리를 생성합니다.

- ![](/images/PartDesign_Hole.svg) [구멍](/index.php?title=PartDesign_Hole/ko&action=edit&redlink=1 "PartDesign Hole/ko (page does not exist)"): 선택한 스케치에서 구멍을 생성합니다. 스케치에는 하나 이상의 원이 포함되어야 합니다.

- ![](/images/PartDesign_Groove.svg) [홈파기](/index.php?title=PartDesign_Groove/ko&action=edit&redlink=1 "PartDesign Groove/ko (page does not exist)"): 축을 중심으로 스케치를 회전시켜 홈을 생성합니다.

- ![](/images/PartDesign_SubtractiveLoft.svg) [로프트 빼기](/index.php?title=PartDesign_SubtractiveLoft/ko&action=edit&redlink=1 "PartDesign SubtractiveLoft/ko (page does not exist)"): 두 개 이상의 스케치 사이를 전환하여 고체 형상을 만들고 활성 몸통에서 뺍니다.

- ![](/images/PartDesign_SubtractivePipe.svg) [파이프 빼기](/index.php?title=PartDesign_SubtractivePipe/ko&action=edit&redlink=1 "PartDesign SubtractivePipe/ko (page does not exist)"): 열려 있거나 닫힌 경로를 따라 하나 이상의 스케치를 쓸어 나가며 고체 형상을 만들고 활성 몸통에서 뺍니다.

- ![](/images/PartDesign_SubtractiveHelix.svg) [나선 빼기](/index.php?title=PartDesign_SubtractiveHelix/ko&action=edit&redlink=1 "PartDesign SubtractiveHelix/ko (page does not exist)"): 나선을 따라 스케치를 쓸어 나가며 고체 형상을 만들고 활성 몸통에서 뺍니다.

- ![](/images/PartDesign_SubtractiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 기본 입체도형 빼기:

: \- ![](/images/PartDesign_SubtractiveBox.svg) [상자 빼기](/index.php?title=PartDesign_SubtractiveBox/ko&action=edit&redlink=1 "PartDesign SubtractiveBox/ko (page does not exist)"): 상자를 만들어 활성 몸통에서 뺍니다.

: \- ![](/images/PartDesign_SubtractiveCylinder.svg) [원통 빼기](/index.php?title=PartDesign_SubtractiveCylinder/ko&action=edit&redlink=1 "PartDesign SubtractiveCylinder/ko (page does not exist)"): 원통을 만들어 활성 몸통에서 뺍니다.

: \- ![](/images/PartDesign_SubtractiveSphere.svg) [구체 빼기](/index.php?title=PartDesign_SubtractiveSphere/ko&action=edit&redlink=1 "PartDesign SubtractiveSphere/ko (page does not exist)"): 구체를 만들어 활성 몸통에서 뺍니다.

: \- ![](/images/PartDesign_SubtractiveCone.svg) [원뿔 빼기](/index.php?title=PartDesign_SubtractiveCone/ko&action=edit&redlink=1 "PartDesign SubtractiveCone/ko (page does not exist)"): 원뿔을 만들어 활성 몸통에서 뺍니다.

: \- ![](/images/PartDesign_SubtractiveEllipsoid.svg) [타원체 빼기](/index.php?title=PartDesign_SubtractiveEllipsoid/ko&action=edit&redlink=1 "PartDesign SubtractiveEllipsoid/ko (page does not exist)"): 타원체를 만들어 활성 몸통에서 뺍니다.

: \- ![](/images/PartDesign_SubtractiveTorus.svg) [원환체 빼기](/index.php?title=PartDesign_SubtractiveTorus//ko&action=edit&redlink=1 "PartDesign SubtractiveTorus//ko (page does not exist)"): 원환체를 만들어 활성 몸통에서 뺍니다.

: \- ![](/images/PartDesign_SubtractivePrism.svg) [각기둥 빼기](/index.php?title=PartDesign_SubtractivePrism/ko&action=edit&redlink=1 "PartDesign SubtractivePrism/ko (page does not exist)"): 각기둥을 만들어 활성 몸통에서 뺍니다.

: \- ![](/images/PartDesign_SubtractiveWedge.svg) ‎[쐐기 빼기](/index.php?title=PartDesign_SubtractiveWedge/ko&action=edit&redlink=1 "PartDesign SubtractiveWedge/ko (page does not exist)"): 쐐기를 만들어 활성 몸통에서 뺍니다.

#### 부울(Boolean) 도구

- ![](/images/PartDesign_Boolean.svg) [부울 연산](/PartDesign_Boolean/ko "PartDesign Boolean/ko"): 하나 이상의 몸통 또는 복제품을 활성 몸통으로 가져와 부울 연산을 적용합니다.

### 꾸밈 도구

아래 도구는 모서리나 면에 처리를 적용합니다.

- ![](/images/PartDesign_Fillet.svg) [모깎기](/PartDesign_Fillet/ko "PartDesign Fillet/ko"): 활성 본체의 모서리를 (둥글게) 깎아냅니다.

- ![](/images/PartDesign_Chamfer.svg) [모따기](/PartDesign_Chamfer/ko "PartDesign Chamfer/ko"): 활성 몸통의 모서리를 (평평하게) 따냅니다.

- ![](/images/PartDesign_Draft.svg) [구배](/index.php?title=PartDesign_Draft/ko&action=edit&redlink=1 "PartDesign Draft/ko (page does not exist)"): 활성 몸통의 선택한 면에 각도 구배를 적용합니다.

- ![](/images/PartDesign_Thickness.svg) [두께](/index.php?title=PartDesign_Thickness/ko&action=edit&redlink=1 "PartDesign Thickness/ko (page does not exist)"): 활성 몸통에서 두께가 있는 껍질을 만들고 선택한 면은 개방합니다.

### 변환 도구

아래는 이미 생성된 도형특징을 몇 가지 방식으로 복사 변환하기 위한 도구입니다.

- ![](/images/PartDesign_Mirrored.svg) [대칭 복사](/PartDesign_Mirrored/ko "PartDesign Mirrored/ko"): 하나 이상의 도형특징을 대칭 복사 변환합니다.

- ![](/images/PartDesign_LinearPattern.svg) [선형 복사](/index.php?title=PartDesign_LinearPattern/ko&action=edit&redlink=1 "PartDesign LinearPattern/ko (page does not exist)"): 하나 이상의 도형특징을 선형으로 복사 변환합니다.

- ![](/images/PartDesign_PolarPattern.svg) [원형 복사](/index.php?title=PartDesign_PolarPattern/ko&action=edit&redlink=1 "PartDesign PolarPattern/ko (page does not exist)"): 하나 이상의 도형특징을 원형으로 복사 변환합니다.

- ![](/images/PartDesign_MultiTransform.svg) [다중 변환](/PartDesign_MultiTransform/ko "PartDesign MultiTransform/ko"): 위에서 언급한 변환과 [배율변환](/index.php?title=PartDesign_Scaled/ko&action=edit&redlink=1 "PartDesign Scaled/ko (page does not exist)") 을 결합하여 도형특징을 복사 변환합니다.
  - ![](/images/PartDesign_Scaled.svg) [배율변환](/index.php?title=PartDesign_Scaled/ko&action=edit&redlink=1 "PartDesign Scaled/ko (page does not exist)"): 하나 이상의 도형특징을 배율변환합니다. 개별적으로는 사용할 수 없습니다.

#### 기타 도구

부품 설계 메뉴에 있는 몇 가지 추가 기능은 다음과 같습니다.

- ![](/images/PartDesign_Sprocket.svg) [사슬톱니바퀴](/index.php?title=PartDesign_Sprocket/ko&action=edit&redlink=1 "PartDesign Sprocket/ko (page does not exist)"): 사슬톱니바퀴 윤곽선을 생성합니다.

- ![](/images/PartDesign_InternalExternalGear.svg) [점개선 기어](/PartDesign_InvoluteGear/ko "PartDesign InvoluteGear/ko"): 점개선(漸開線 involute curve) 기어 윤곽선을 생성합니다.

- ![](/images/PartDesign_WizardShaft.svg) [축 설계 마법사](/index.php?title=PartDesign_WizardShaft/ko&action=edit&redlink=1 "PartDesign WizardShaft/ko (page does not exist)"): 값 테이블에서 축을 생성하고 힘과 모멘트를 분석할 수 있습니다. 축은 편집할 수 있는 회전된 스케치로 만들어집니다.

### 상황에 맞는 메뉴 항목

- [Suppressed](/index.php?title=PartDesign_Suppressed&action=edit&redlink=1 "PartDesign Suppressed (page does not exist)"): checkbox to disable a specific feature without deleting it. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/PartDesign_MoveTip.svg) [끝단(tip)설정](/index.php?title=PartDesign_MoveTip/ko&action=edit&redlink=1 "PartDesign MoveTip/ko (page does not exist)") : 몸통이 외부에 노출되는 도형특징인 Tip을 재정의합니다.

- ![](/images/PartDesign_MoveFeature.svg) [다른 몸통으로 이동](/index.php?title=PartDesign_MoveFeature/ko&action=edit&redlink=1 "PartDesign MoveFeature/ko (page does not exist)"): 선택한 스케치, 기준 도형 또는 도형특징을 다른 몸통으로 이동합니다.

- ![](/images/PartDesign_MoveFeatureInTree.svg) [다른 개체 뒤로 개체 이동](/index.php?title=PartDesign_MoveFeatureInTree/ko&action=edit&redlink=1 "PartDesign MoveFeatureInTree/ko (page does not exist)"): 선택한 스케치, 기준도형 또는 도형특징을 목록의 다른 위치로 이동하여 몸통 트리의 순서를 변경할 수 있습니다.

#### 부품 작업대와 공유되는 항목

- ![](/images/Std_SetAppearance.svg) [외관 설정](/index.php?title=Std_SetAppearance/ko&action=edit&redlink=1 "Std SetAppearance/ko (page does not exist)"): 전체 부품의 외관(색상 투명도 등)을 결정합니다.

- ![](/images/Part_ColorPerFace.svg) [면색상](/index.php?title=Part_ColorPerFace/ko&action=edit&redlink=1 "Part ColorPerFace/ko (page does not exist)"): 개체의 개별 면에 색상을 할당합니다.

### 오래된 도구

- ![](/images/PartDesign_Migrate.svg) [Migrate](/PartDesign_Migrate "PartDesign Migrate"): migrates files from FreeCAD versions below 0.17 to version 0.17. This tool is not available in 1.0 and above.

## 환경설정

- ![](/images/Preferences-part_design.svg) [환경설정](/index.php?title=PartDesign_Preferences/ko&action=edit&redlink=1 "PartDesign Preferences/ko (page does not exist)"): 부품설계 작업대 도구에 사용할 수 있는 기본 설정입니다.
- [미세 조정](/index.php?title=Fine-tuning/ko&action=edit&redlink=1 "Fine-tuning/ko (page does not exist)"): 부품설계 작업대의 동작을 미세 조정하기 위한 몇 가지 추가 매개변수입니다.

## 자습서

- [How to use FreeCAD](http://help-freecad-jpg87.fr/), 기계 설계 작업 흐름을 설명하는 웹 사이트.
- [부품설계 작업대에서 간단한 부품 만들기](/index.php?title=Creating_a_simple_part_with_PartDesign/ko&action=edit&redlink=1 "Creating a simple part with PartDesign/ko (page does not exist)")
- [기초적인 부품설계 작업대 자습서](/index.php?title=Basic_Part_Design_Tutorial/ko&action=edit&redlink=1 "Basic Part Design Tutorial/ko (page does not exist)")
- [PartDesign Bearingholder Tutorial I](/PartDesign_Bearingholder_Tutorial_I "PartDesign Bearingholder Tutorial I") (needs updating)
- [PartDesign Bearingholder Tutorial II](/PartDesign_Bearingholder_Tutorial_II "PartDesign Bearingholder Tutorial II") (needs updating)

## 예제

부품 설계 도구로 무엇을 얻을 수 있는지에 대한 몇 가지 아이디어를 보려면 다음을 살펴보십시오:
[부품설계 예제](/index.php?title=PartDesign_Examples/ko&action=edit&redlink=1 "PartDesign Examples/ko (page does not exist)").

![](/images/PartDesign_ExampleSphere-02.png)
![](/images/PartDesign_ExampleTorus-01.png)
![](/images/PartDesign_ExamplePad-09.png)
![](/images/PartDesign_ExampleSweep-02.png)
![](/images/PartDesign_ExampleSweep-05.png)
![](/images/PartDesign_ExampleSpring-04.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Workbench/ko&oldid=1529319>"
