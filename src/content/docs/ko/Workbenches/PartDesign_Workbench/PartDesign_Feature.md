---
title: 도형특징(PartDesign Feature)
---
## 소개

부품설계 작업에서 **특징(PartDesign Feature)**은 [몸통(PartDesign Body)](/PartDesign_Body/ko "PartDesign Body/ko") 내부에서 발생하는 모델링 과정에서의 (도형의 기하학적 특징을 추가하는)"단계"를 나타냅니다. 예를 들어, [PartDesign AdditiveBox](/PartDesign_AdditiveBox "PartDesign AdditiveBox")를 사용하여 고체 상자를 추가할 때마다 여러분은 도형의 기하학적 특징(Feature)을 추가하는 것입니다; [모따기](/PartDesign_Chamfer/ko "PartDesign Chamfer/ko")를 사용하여 가장자리에 모따기를 추가하면 (도형의) 다른 특징이 추가됩니다. [스케치](/Sketch/ko "Sketch/ko") 및 [PartDesign Pocket](/PartDesign_Pocket "PartDesign Pocket")을 사용하여 구멍을 만들면 여러분은 또 다른 특징을 추가한 것입니다.

![](/images/PartDesign_Feature_example.png)

3개의 순차적 특징이 있는 [몸통](/PartDesign_Body/ko "PartDesign Body/ko")에서 특징 편집.

초기 고체에 부피를 추가하거나 제거할 수 있는 다양한 유형의 특징들이 있습니다. "특징(Feature)"라는 단어는 작업 자체를 의미하며 해당 작업 이후에 생성되는 고체도 의미합니다.

[부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")를 사용하여 고체를 생성하는 방법에 대해 자세히 알아보려면 [특징 편집하기](/Feature_editing/ko "Feature editing/ko")를 참조하세요.

## 용법

[부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")에 있는 거의 모든 도구는 도형의 [몸통](/PartDesign_Body/ko "PartDesign Body/ko")에 기하학적 특징을 추가하기 위한 것입니다. 이러한 도구는 개체나 하위 요소(꼭지점, 모서리, 면)가 선택되어 있는 동안 메뉴 및 도구 모음 버튼을 통해 접근할 수 있습니다.

도형의 특징들은 다양한 범주에 배치될 수 있습니다.

* 특징 기반: [몸통](/PartDesign_Body/ko "PartDesign Body/ko")에서 생성할 수 있는 기반 특징(Base Feature) 객체를 말합니다.
* 덧셈과 뺄셈 특징
  + 기본 형상: [Box](/PartDesign_AdditiveBox "PartDesign AdditiveBox"), [Cone](/PartDesign_AdditiveCone "PartDesign AdditiveCone"), [Cylinder](/PartDesign_AdditiveCylinder "PartDesign AdditiveCylinder"), [Ellipsoid](/PartDesign_AdditiveEllipsoid "PartDesign AdditiveEllipsoid"), [Prism](/PartDesign_AdditivePrism "PartDesign AdditivePrism"), [Sphere](/PartDesign_AdditiveSphere "PartDesign AdditiveSphere"), [Torus](/PartDesign_AdditiveTorus "PartDesign AdditiveTorus"), 그리고 [Wedge](/PartDesign_AdditiveWedge "PartDesign AdditiveWedge").
  + 기본 형상 뺄셈: [Subtractive Box](/PartDesign_SubtractiveBox "PartDesign SubtractiveBox"), [Subtractive Cone](/PartDesign_SubtractiveCone "PartDesign SubtractiveCone"), [Subtractive Cylinder](/PartDesign_SubtractiveCylinder "PartDesign SubtractiveCylinder"), [Subtractive Ellipsoid](/PartDesign_SubtractiveEllipsoid "PartDesign SubtractiveEllipsoid"), [Subtractive Prism](/PartDesign_SubtractivePrism "PartDesign SubtractivePrism"), [Subtractive Sphere](/PartDesign_SubtractiveSphere "PartDesign SubtractiveSphere"), [Subtractive Torus](/PartDesign_SubtractiveTorus "PartDesign SubtractiveTorus"), 그리고 [Subtractive Wedge](/PartDesign_SubtractiveWedge "PartDesign SubtractiveWedge").
  + 프로파일 기반: [Pad](/PartDesign_Pad "PartDesign Pad"), [Revolution](/PartDesign_Revolution "PartDesign Revolution"), [Loft](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft"), [Pipe](/PartDesign_AdditivePipe "PartDesign AdditivePipe").
  + 프로파일 기반 뺄셈: [Pocket](/PartDesign_Pocket "PartDesign Pocket"), [Hole](/PartDesign_Hole "PartDesign Hole"), [Groove](/PartDesign_Groove "PartDesign Groove"), [Subtractive Loft](/PartDesign_SubtractiveLoft "PartDesign SubtractiveLoft"), [Subtractive Pipe](/PartDesign_SubtractivePipe "PartDesign SubtractivePipe").
* [Boolean](/PartDesign_Boolean "PartDesign Boolean"), 결합, 잘라내기 및 교차를 포함합니다.
* 꾸밈
  + [모따기](/PartDesign_Chamfer/ko "PartDesign Chamfer/ko")
  + [PartDesign\_Draft](/PartDesign_Draft "PartDesign Draft")
  + [모깎기](/PartDesign_Fillet/ko "PartDesign Fillet/ko")
  + [PartDesign\_Thickness](/PartDesign_Thickness "PartDesign Thickness")
* 변환
  + [대칭복사](/PartDesign_Mirrored/ko "PartDesign Mirrored/ko")
  + [선형복사](/index.php?title=PartDesign_LinearPattern/ko&action=edit&redlink=1 "PartDesign LinearPattern/ko (page does not exist)")
  + [원형복사](/index.php?title=PartDesign_PolarPattern/ko&action=edit&redlink=1 "PartDesign PolarPattern/ko (page does not exist)")
  + [다중변환](/PartDesign_MultiTransform/ko "PartDesign MultiTransform/ko")
  + [배율변환](/index.php?title=PartDesign_Scaled/ko&action=edit&redlink=1 "PartDesign Scaled/ko (page does not exist)")

## 상속

![](/images/FreeCAD_core_objects.svg)

프로그램의 핵심 개체 간의 관계를 단순화한 다이어그램입니다. `PartDesign::Feature` 객체는 파라메트릭 3D 솔리드를 만드는 데 사용되므로 기본 `Part::Feature` 객체에서 파생됩니다.

## 스크립팅

*참고* [FreeCAD 스크립트 기초](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko"), 그리고 [scripted objects](/Scripted_objects "Scripted objects").

[파이썬 콘솔](/Python_console/ko "Python console/ko")에서 개체를 추가하는 방법에 대한 일반적인 정보는 [Part Feature](/Part_Feature "Part Feature")를 참조하세요.

몸통(Body) 추가에 대한 일반적인 정보는 [부품설계 작업대에서의 몸통](/PartDesign_Body/ko "PartDesign Body/ko")을 참조하세요. 몸통이 존재하면 몸통의 `addObject()` 메서드를 사용하여 도형의 특징을 추가할 수 있습니다.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject('PartDesign::Body', 'Body')
obj.Label = "Custom label"

feature = App.ActiveDocument.addObject('PartDesign::AdditiveBox', 'Box')
feature.Width = 200
feature.Length = 300
feature.Height = 500
obj.addObject(feature)
App.ActiveDocument.recompute()

feature2 = App.ActiveDocument.addObject('PartDesign::SubtractiveBox', 'Box')
feature2.Width = 50
feature2.Length = 200
feature2.Height = 400
obj.addObject(feature2)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Feature/ko&oldid=1436381>"