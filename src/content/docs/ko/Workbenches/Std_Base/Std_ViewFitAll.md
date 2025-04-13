---
title: 표준 전체 보기(Std ViewFitAll)
---

|                                                                      |
| -------------------------------------------------------------------- |
| 표준 전체 보기                                                       |
| 메뉴 위치                                                            |
| 보기 → 표준 보기 → 전체 보기                                         |
| 작업대                                                               |
| 모두                                                                 |
| 기본 단축키                                                          |
| V F                                                                  |
| 도입 버전                                                            |
| -                                                                    |
| 참조                                                                 |
| [표준 선택 보기](/Std_ViewFitSelection/ko "Std ViewFitSelection/ko") |
|                                                                      |

## 설명

**표준 전체 보기(Std ViewFitAll)** 명령은 숨기지 않은 개체가 모두 활성 [3D 보기](/3D_view/ko "3D view/ko")에 보이도록 카메라를 확대·축소 하거나 이동합니다.

## 용법

1. 이 명령을 실행하는 방법은 여러 가지입니다:
   - ![](/images/Std_ViewFitAll.svg) [표준 전체 보기](/Std_ViewFitAll "Std ViewFitAll") 버튼을 누릅니다.
   * 메뉴에서 **보기 → 표준 보기 → ![](/images/Std_ViewFitAll.svg) 전체 보기** 옵션을 선택합니다.
   * [3D 보기](/3D_view "3D view")의 상황에 맞는 메뉴에서 **![](/images/Std_ViewFitAll.svg) 전체 보기** 옵션을 선택합니다.
   * 단축키를 사용합니다: V 다음 F.

## 스크립트

_참조:_ [FreeCAD 스크립트 기초](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko").

3D 보기를 '전체 보기'로 변경하려면 ActiveView 객체의 `fitAll` 메소드를 사용하십시오. 이 메소드는 FreeCAD가 콘솔 모드일 때는 사용할 수 없습니다.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.fitAll()

```

또는 FreeCADGui 객체의 `SendMsgToActiveView` 메소드를 사용할 수도 있습니다. 이 메소드는 FreeCAD가 콘솔 모드일 때는 사용할 수 없습니다.

```
import FreeCADGui

FreeCADGui.SendMsgToActiveView("ViewFit")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewFitAll/ko&oldid=1449512>"
