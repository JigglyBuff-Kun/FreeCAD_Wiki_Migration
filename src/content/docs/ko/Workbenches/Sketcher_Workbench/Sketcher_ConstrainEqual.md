---
title: 스케치의 동일구속
---

|                                                                 |
| --------------------------------------------------------------- |
| Sketcher ConstrainEqual                                         |
| Menu location                                                   |
| Sketch → Sketcher constraints → Constrain equal                 |
| Workbenches                                                     |
| [스케치 작업대](/Sketcher_Workbench/ko "Sketcher Workbench/ko") |
| Default shortcut                                                |
| E                                                               |
| Introduced in version                                           |
| -                                                               |
| See also                                                        |
| _None_                                                          |
|                                                                 |

## 설명

스케치에서 ![](/images/Sketcher_ConstrainEqual.svg) 동일구속 도구는 모서리가 동일한 길이(직선인 경우)나 동일한 곡률([B-조절곡선](/index.php?title=Sketcher_CreateBSpline/ko&action=edit&redlink=1 "Sketcher CreateBSpline/ko (page does not exist)")을 제외한 곡선일 경우)을 갖도록 구속합니다.

## 용법

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [계속 모드](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. 선택된 것이 없는지 확인하세요.
2. 동일구속 도구를 호출하는 방법은 여러가지 입니다.
   - ![](/images/Sketcher_ConstrainEqual.svg) 동일구속 버튼을 누릅니다.
   * 메뉴에서 **Sketch → Sketcher Constraints → ![](/images/Sketcher_ConstrainEqual.svg) 동일구속**을 선택합니다.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): [3D 보기](/3D_view/ko "3D view/ko")영역에서 마우스 오른쪽 버튼으로 클릭하여 상황 메뉴에서 **Constrain → ![](/images/Sketcher_ConstrainEqual.svg) 동일구속**을 선택합니다.
   * 키보드 단축키: E를 사용합니다.
3. 커서가 동일구속 아이콘이 있는 십자 모양으로 변경됩니다.
4. 동일한 유형의 모서리 두 개를 선택합니다.
5. 구속이 적용됩니다.
6. 선택적으로 구속을 계속 진행합니다.
7. 마치려면 마우스 오른쪽 버튼을 클릭하거나 Esc를 누르거나 다른 형상 또는 다른 구속 도구를 시작하세요.

### 단일 실행 모드

1. 동일한 유형의 두 개 이상의 모서리를 선택합니다.
2. 위에서 설명한 대로 동일구속 도구를 호출하거나 다음 추가 옵션을 사용하여 호출합니다.
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): [3D 보기](/3D_view/ko "3D view/ko")영역에서 마우스 오른쪽 버튼을 클릭하여 상황 메뉴에서 **![](/images/Sketcher_ConstrainEqual.svg) 동일구속**을 선택합니다.
3. 선택 사항에 따라 하나 이상의 구속이 추가됩니다.

## Scripting

```
Sketch.addConstraint(Sketcher.Constraint('Equal', Edge1, Edge2))

```

[Sketcher scripting](/Sketcher_scripting "Sketcher scripting") 페이지에서는 `Edge1` 및 `Edge2`에 사용할 수 있는 값을 설명합니다. 파이썬 스크립트에서 제약 조건을 만드는 방법에 대한 추가 예제가 포함되어 있습니다.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainEqual/ko&oldid=1470748>"
