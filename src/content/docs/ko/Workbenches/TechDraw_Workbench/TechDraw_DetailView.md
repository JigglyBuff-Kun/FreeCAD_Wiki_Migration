---
title: 기술도면 상세보기
---

|                                                                   |
| ----------------------------------------------------------------- |
| 기술도면 상세도                                                   |
| Menu location                                                     |
| 기술도면 → 기술도면 보기 → 상세보기 삽입                          |
| Workbenches                                                       |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko") |
| Default shortcut                                                  |
| _None_                                                            |
| Introduced in version                                             |
| -                                                                 |
| See also                                                          |
| [기술도면 보기](/TechDraw_View/ko "TechDraw View/ko")             |
|                                                                   |

## 설명

**기술도면 상세보기** 도구는 기존 보기의 작은 영역에 대한 보기를 생성합니다.

![](/images/ViewDetail.png)

원형 강조선이 있는 상세 보기

## 용법

1. 상세 보기를 할 기본 보기를 선택하세요.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_DetailView.svg) 상세 보기 삽입 버튼을 누르세요.
   * 메뉴에서 **기술도면 → 기술도면 보기 → ![](/images/TechDraw_DetailView.svg) 상세 보기 삽입**을 선택하세요.
3. 기본 보기에 상세하게 볼 부분이 원형선으로 강조 표시되며 페이지에 원형 강조선 내부의 상세 보기가 추가되고, 작업창이 열립니다.
4. 명확성을 위해 기본 보기와 겹치지 않도록 세부 보기를 이동하는 것이 좋습니다. 상세보기의 틀이나 라벨을 마우스 왼쪽 버튼으로 누른 채 다른 위치로 끕니다.
5. 원형 강조선의 위치를 ​​변경하려면 다음 중 하나를 수행하세요.
   - 원형 강조선을 잡아끌기:
     1. 강조표시 잡아끌기 버튼을 누르세요.
     2. 원형 강조선이나 해당 라벨을 마우스 왼쪽 버튼으로 누른 채 강조선을 새 위치로 끕니다.
   - 좌표 입력으로 윤곽선 이동:
     1. 작업창에서 X 및 Y 좌표를 변경합니다. 좌표는 기본 보기의 중심을 기준으로 합니다.
6. 상세 보기의 **반지름**크기를 변경할 수 있습니다.
7. 세부 보기의 **스케일 유형** 및 **스케일 계수**를 변경할 수 있습니다. 자세한 내용은 [기술도면 보기](/TechDraw_View#Properties/ko "TechDraw View")를 참조하세요.
8. **참조** 라벨을 지정합니다. 이 라벨은 원형 강조선 근처에 표시됩니다.
9. 확인 버튼을 누르세요.

## 보충 설명

- 상세 보기를 편집하려면 [나무 보기](/Tree_view/ko "Tree view/ko")에서 해당 상세 보기를 두 번 클릭합니다.
- 상세 보기의 윤곽선은 원형이거나 정사각형일 수 있습니다. 이는 **상세보기 윤곽선 모양** [환경 설정](/TechDraw_Preferences/ko#주석 "TechDraw Preferences/ko")에 의해 제어됩니다.
- [앵커 설정에 관한 좋은 토론이 있는 포럼 주제입니다.](https://www.forum.freecadweb.org/viewtopic.php?f=35&t=34055#p285281)

## Properties

See also: [Property editor](/Property_editor "Property editor").

In the properties of the 데이터**Base View** you can change the appearance of the detail outline.

A Detail View, formally a `TechDraw::DrawViewDetail` object, is derived from a [Part View](/TechDraw_View#Properties_Part_View "TechDraw View"), formally a `TechDraw::DrawViewPart` object, and inherits all its properties. It also has the following additional properties:

### Data

Appearance

- 데이터**Show Matting** (`Bool`): Show or hide the matting around the detail view. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
- 데이터**Show Highlight** (`Bool`): Show or hide the detail highlight in the source view. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

Detail

- 데이터**Base View** (`Link`): The view on which the detail view is based.
- 데이터**Anchor Point** (`Vector`): The center of the detail view within the 데이터**Base View**.
- 데이터**Radius** (`Float`): The size of the area in the 데이터**Base View** that is displayed in the detail view.
- 데이터**Reference** (`String`): An identifier for the detail view in the 데이터**Base View**.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_DetailView/ko&oldid=1562918>"
