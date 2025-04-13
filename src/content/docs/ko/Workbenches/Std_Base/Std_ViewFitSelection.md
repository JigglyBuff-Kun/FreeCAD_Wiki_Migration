---
title: 표준 선택 보기(ViewFitSelection)
---

|                                                          |
| -------------------------------------------------------- |
| 표준 선택 보기                                           |
| 메뉴 위치                                                |
| 보기 → 표준 보기 → 선택 보기                             |
| 작업대                                                   |
| 모두                                                     |
| 기본 단축키                                              |
| V S                                                      |
| 도입 버전                                                |
| -                                                        |
| 참조                                                     |
| [표준 전체 보기](/Std_ViewFitAll/ko "Std ViewFitAll/ko") |
|                                                          |

## 설명

**표준 선택 보기(Std ViewFitSelection)** 명령은 선택한 개체가 모두 활성 [3D 보기](/3D_view/ko "3D view/ko")에 보이도록 카메라를 확대·축소 하거나 이동합니다.

## 용법

1. 하나 이상의 개체를 선택합니다.
2. 이 명령을 실행하는 방법은 여러 가지 입니다:
   - ![](/images/Std_ViewFitSelection.svg) 표준 선택 보기 버튼을 누릅니다.
   * 메뉴에서 **보기 → 표준 보기 → ![](/images/Std_ViewFitSelection.svg)선택 보기** 옵션을 선택합니다.
   * [3D 보기](/3D_view/ko "3D view/ko")의 상황에 맞는 메뉴에서 **![](/images/Std_ViewFitSelection.svg) 선택 보기** 옵션을 선택합니다.
   * 단축키를 사용합니다: V 다음 S.

## 스크립트

_참조:_ [FreeCAD 스크립트 기초](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko").

3D 보기를 '선택 보기'로 변경하려면 FreeCADGui 객체의 `SendMsgToActiveView` 메소드를 사용할 수 있습니다. 이 메소드는 FreeCAD 콘솔 모드에서는 사용할 수 없습니다.

```
import FreeCADGui

FreeCADGui.SendMsgToActiveView("ViewSelection")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewFitSelection/ko&oldid=1449523>"
