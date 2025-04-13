---
title: 표준 삭제(Std Delete)
---
|  |
| --- |
| 표준 삭제 |
| 메뉴 위치 |
| 편집 → 삭제 |
| 작업대 |
| 모두 |
| 기본 단축키 |
| Del |
| 도입 버전 |
| - |
| 참조 |
| *없음* |
|  |

## 설명

**표준 삭제(Std Delete)** 명령은 선택한 개체를 삭제합니다.

## 용법

1. 하나 이상의 개체를 선택합니다..
2. 이 명령을 실행하는 방법은 여러 가지입니다:
   * 메뉴에서 **편집 → ![](/images/Std_Delete.svg) 삭제** 옵션을 선택합니다.
   * [트리 보기](/Tree_view/ko "Tree view/ko")의 상황에 맞는 메뉴 혹은 [3D 보기](/3D_view/ko "3D view/ko")의 상황에 맞는 메뉴에서 **![](/images/Std_Delete.svg) 삭제** 옵션을 선택합니다.
   * 단축키를 사용합니다: Del.

## 스크립트

*참조:* [FreeCAD 스크립트 기초](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko").

개체를 삭제하려면 문서 객체의 `removeObject` 메소드를 사용하십시오.

```
import FreeCAD

FreeCAD.ActiveDocument.removeObject("myObjectName")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Delete/ko&oldid=1448989>"