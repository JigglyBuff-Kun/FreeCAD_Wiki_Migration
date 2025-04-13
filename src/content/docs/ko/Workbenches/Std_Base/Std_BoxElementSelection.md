---
title: 표준 면 선택 상자(Std BoxElementSelection)
---
|  |
| --- |
| 표준 면 선택 상자 |
| 메뉴 위치 |
| 편집 → 면 선택 상자 |
| 작업대 |
| 모두 |
| 기본 단축키 |
| Shift+E |
| 도입 버전 |
| - |
| 참조 |
| [표준 개체 선택 상자](/Std_BoxSelection/ko "Std BoxSelection/ko"), [표준 모두 선택](/Std_SelectAll/ko "Std SelectAll/ko") |
|  |

## 설명

**표준 면 선택 상자(Std BoxElementSelection)** 명령은 [3D 보기](/3D_view/ko "3D view/ko")에 사용자 정의 사각 영역 즉 상자를 그려 개체의 면을 선택합니다.

Note that if a whole object falls inside the rectangle, the object itself, instead of its faces, is selected. To avoid this create two box selections for each object (hold down Ctrl while dragging the 2nd rectangle), or use the [Part BoxSelection](/Part_BoxSelection "Part BoxSelection") command instead.

## 용법

1. 이 명령을 실행하는 방법은 여러 가지입니다:
   * 메뉴에서 **편집 → ![](/images/Std_BoxElementSelection.svg) 개체 선택 상자** 옵션을 선택합니다.
   * 단축키를 사용합니다: Shift+E.
2. 다음 중 하나를 수행합니다:
   * 선택하려는 개체의 면의 기하학적 중심이 포함되도록 왼쪽에서 오른쪽으로 드래그하여 사각형을 그립니다.
   * 선택하려는 개체의 면의 경계 상자가 (일부) 포함되거나 접하도록 오른쪽에서 왼쪽으로 드래그하여 사각형을 그립니다.

## 비고

* 면 대신 객체 자체를 선택하려면 [표준 개체 선택 상자](/Std_BoxSelection/ko "Std BoxSelection/ko") 명령을 사용합니다.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_BoxElementSelection/ko&oldid=1466288>"