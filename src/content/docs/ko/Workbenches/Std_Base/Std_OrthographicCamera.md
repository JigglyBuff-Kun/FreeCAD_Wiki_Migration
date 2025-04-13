---
title: 표준 직교투영 카메라(Std OrthographicCamera)
---
|  |
| --- |
| 표준 직교투영 카메라 |
| 메뉴 위치 |
| 보기 → 직교투영 |
| 작업대 |
| 모두 |
| 기본 단축키 |
| V O |
| 도입 버전 |
| - |
| 참조 |
| [표준 원근투영 카메라](/Std_PerspectiveCamera/ko "Std PerspectiveCamera/ko") |
|  |

## 설명

**표준 직교투영 카메라(Std OrthographicCamera)** 명령은 활성 [3D 보기](/3D_view/ko "3D view/ko")의 카메라를 직교투영 보기 모드로 전환합니다. 이 모드에서는 카메라에서 먼 개체가 가까운 개체보다 작게 보이지 않습니다.

![](/images/Std_OrthographicCamera_example.svg)

직교 투영 보기에서 크기가 같은 두 육면체

## 용법

1. 이 명령을 실행하는 방법은 여러 가지입니다:
   * 메뉴에서 **보기 → ![](/images/Std_OrthographicCamera.svg) 직교투영** 옵션을 선택합니다.
   * 단축키를 사용합니다: V를 누른 다음 O.

## 환경 설정

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor").

* 카메라 유형은 환경 설정에서 변경할 수 있습니다: **편집 → 환경설정... → Display → 3D 보기 → 카메라 유형**. 선택한 유형은 모든 열린 문서 및 새로 열리는 문서의 3D 보기에 적용됩니다. [환경 설정 편집기](/Preferences_Editor/ko#3D_보기 "Preferences Editor/ko")를 참조하십시오.

## 스크립트

*참조:* [FreeCAD 스크립트 기초](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko").

3D 보기를 직교투영으로 변경하려면 ActiveView 객체의 `setCameraType` 메소드를 사용하십시오. FreeCAD가 콘솔 모드인 경우 이 메소드는 사용할 수 없습니다.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.setCameraType("Perspective")
view.setCameraType("Orthographic")
view.getCameraType()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_OrthographicCamera/ko&oldid=1449477>"