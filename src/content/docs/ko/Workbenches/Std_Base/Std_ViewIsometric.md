---
title: 표준 등각투영(Std Viewisometric)
---

|                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 표준 등각투영                                                                                                                                                                          |
| 메뉴 위치                                                                                                                                                                              |
| 보기 → 표준 보기 → Axonometric → Isometric                                                                                                                                             |
| 작업대                                                                                                                                                                                 |
| 모두                                                                                                                                                                                   |
| 기본 단축키                                                                                                                                                                            |
| 0                                                                                                                                                                                      |
| 도입 버전                                                                                                                                                                              |
| -                                                                                                                                                                                      |
| 참조                                                                                                                                                                                   |
| [표준 등각투영](/Std_ViewDimetric/ko "Std ViewDimetric/ko"), [표준 삼각투영](/index.php?title=Std_ViewTrimetric/ko&action=edit&redlink=1 "Std ViewTrimetric/ko (page does not exist)") |
|                                                                                                                                                                                        |

## 설명

**표준 등각투영(Std ViewIsometric)** 명령은 [3D 보기](/3D_view/ko "3D view/ko")의 카메라를 재조정하여 등각투영([isometric](https://en.wikipedia.org/wiki/Isometric_projection)) 보기 각도로 전환합니다. 진정한 등각투영(isometric) 보기를 하려면 3D 보기가 [직교투영(orthographic) 모드](/Std_OrthographicCamera/ko "Std OrthographicCamera/ko")이어야 하지만 이 명령은 [원근투영(perspective) 모드](/Std_PerspectiveCamera/ko "Std PerspectiveCamera/ko")일 때도 작동합니다.

![](/images/Std_ViewIsometric_example.svg)

등각투영(isometric) 일 때 [좌표축](/index.php?title=Std_AxisCross/ko&action=edit&redlink=1 "Std AxisCross/ko (page does not exist)")과 육면체

## 용법

1. 이 명령을 실행하는 방법은 여러 가지입니다:
   - ![](/images/Std_ViewIsometric.svg) 표준 등각투영 버튼을 누릅니다.
   * 메뉴에서 **보기 → 표준 보기 → Axonometric → ![](/images/Std_ViewIsometric.svg) Isometric** 옵션을 선택합니다.
   * [3D 보기](/3D_view/ko "3D view/ko")의 상황에 맞는 메뉴에서 **표준 보기 → ![](/images/Std_ViewIsometric.svg) Isometric** 옵션을 선택합니다.
   * 단축키를 사용합니다: 0.

## 스크립트

_참조:_ [FreeCAD 스크립트 기초](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko").

등각투영(isometric) 보기로 변경하려면 ActiveView 객체의 `viewIsometric` 메소드를 사용하십시오. 이 메소드는 FreeCAD가 콘솔 모드일 때는 사용할 수 없습니다.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.viewIsometric()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewIsometric/ko&oldid=1449554>"
