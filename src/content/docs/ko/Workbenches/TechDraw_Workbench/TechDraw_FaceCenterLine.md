---
title: 기술도면 면중심선
---

|                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 기술도면 면중심선                                                                                                                                                          |
| Menu location                                                                                                                                                              |
| 기술도면→ 선 추가 → 면에 중심선 추가                                                                                                                                       |
| Workbenches                                                                                                                                                                |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko")                                                                                                          |
| Default shortcut                                                                                                                                                           |
| _None_                                                                                                                                                                     |
| Introduced in version                                                                                                                                                      |
| 0.19                                                                                                                                                                       |
| See also                                                                                                                                                                   |
| [기술도면 2선간 중심선](/TechDraw_2LineCenterLine/ko "TechDraw 2LineCenterLine/ko"), [기술도면 2점간 중심선](/TechDraw_2PointCenterLine/ko "TechDraw 2PointCenterLine/ko") |
|                                                                                                                                                                            |

## 설명

**기술도면 면중심선** 도구는 선택한 면에 중심선을 추가합니다.

![](/images/TechDraw_FaceCenterLine_Sample.png)

면에 추가된 중심선

## 생성 방법

1. 보기(View)에서 하나 이상의 면을 선택합니다.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_FaceCenterLine.svg) 면에 중심선 추가 버튼을 누르세요.
   * 메뉴에서 **기술도면→ 선 추가 → ![](/images/TechDraw_FaceCenterLine.svg) 면에 중심선 추가** 를 선택하세요.
3. 작업판이 열립니다. 자세한 내용은 [#선택 사항](#선택_사항)을 참조하세요.
4. 확인 버튼을 눌러 확인합니다.
5. 선택한 면의 경계 상자 중간 지점에 중심선이 추가됩니다.

## 편집 방법

모든 중심선 도구(![](/images/TechDraw_FaceCenterLine.svg) 기술도면 면중심선, ![](/images/TechDraw_2LineCenterLine.svg) [기술도면 2선간 중심선](/TechDraw_2LineCenterLine/ko "TechDraw 2LineCenterLine/ko") 그리고 ![](/images/TechDraw_2PointCenterLine.svg) [기술도면 2점간 중심선](/TechDraw_2PointCenterLine/ko "TechDraw 2PointCenterLine/ko"))를 사용하여 중심선을 편집할 수 있습니다.

1. 중심선을 선택하세요.
2. 중심선 도구를 호출합니다.
3. 작업판이 열립니다. 자세한 내용은 [#선택 사항](#선택_사항)을 참조하세요.
4. 확인 버튼을 눌러 확인합니다.

## 선택 사항

- **방향**:
  - **수직**: 중심선을 수직으로 강제합니다. 2점간 중심선에서는 무시됩니다.
  - **수평**: 중심선을 수평으로 강제합니다. 2점간 중심선에서는 무시됩니다.
  - **정렬**: 면중심선에는 사용할 수 없습니다. 2선간 중심선에 대해 중심선이 선택된 모서리의 일반 방향을 따르도록 강제합니다. 2점간 중심선에서는 무시됩니다.
- **수평으로 이동**: 중심선을 기본 위치에서 왼쪽이나 오른쪽으로 이동합니다.
- **수직 이동**: 중심선을 기본 위치에서 위나 아래로 이동합니다.
- **회전**: 중심선을 중간점을 중심으로 회전합니다(도 + 시계 반대 방향, - 시계 방향).
- **연장**: 중심선을 해당 양만큼 더 길게 만듭니다.
- **색상**: 중심선의 색상.
- **두께**: 중심선의 너비.
- **스타일**: 중심선의 선 종류.다음과 같습니다.
  - ![](/images/Continuous-line.svg) **Continuous**
  - ![](/images/Dash-line.svg) **Dash**
  - ![](/images/Dot-line.svg) **Dot**
  - ![](/images/DashDot-line.svg) **DashDot**
  - ![](/images/DashDotDot-line.svg) **DashDotDot**

## 보충 설명

- 중심선을 삭제하려면 중심선을 선택하고 삭제를 누르세요. [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0")
- 면중심선은 결국 두 개의 보기 속성을 대체하게 됩니다:
  - 보기**HorizCenterLine**: 보기를 통과하는 수평 중심선을 표시합니다.
  - 보기**VertCenterLine**: 보기를 통과하는 수직 중심선을 표시합니다.

## 속성

중심선은 문서 대상체가 아니므로 자체 속성이 없습니다.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_FaceCenterLine/ko&oldid=1567431>"
