---
title: 기술도면 2점 꾸밈선
---

|                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 기술도면 2점 꾸밈선                                                                                                                                                                                                                                       |
| Menu location                                                                                                                                                                                                                                             |
| 기술도면→ 선 추가 → 두 점을 지나는 꾸밈선 추가                                                                                                                                                                                                            |
| Workbenches                                                                                                                                                                                                                                               |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko")                                                                                                                                                                                         |
| Default shortcut                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                    |
| Introduced in version                                                                                                                                                                                                                                     |
| 0.19                                                                                                                                                                                                                                                      |
| See also                                                                                                                                                                                                                                                  |
| [기술도면 면중심선](/TechDraw_FaceCenterLine/ko "TechDraw FaceCenterLine/ko"), [기술도면 2선간 중심선](/TechDraw_2LineCenterLine/ko "TechDraw 2LineCenterLine/ko"), [기술도면 2점간 중심선](/TechDraw_2PointCenterLine/ko "TechDraw 2PointCenterLine/ko") |
|                                                                                                                                                                                                                                                           |

## 설명

**기술도면 2점 꾸밈선** 도구는 두 점 사이에 꾸밈선을 추가합니다. 점은 2D 또는 3D일 수 있습니다. 결과 선은 치수 지정에 사용할 수 있습니다.

![](/images/CosLine2PointsSample.png)

두 점 사이의 꾸밈선

## 생성 방법

1. 기술도면의 보기(View)에서 두 점을 선택하거나 [3D보기](/3D_view/ko "3D view/ko")의 모형에서 두 점을 선택합니다.
2. 3D보기에서 점을 선택한 경우: [나무 보기](/Tree_view/ko "Tree view/ko")에서 해당 기술도면 보기를 선택하여 추가합니다.
3. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_2PointCosmeticLine.svg) 두 점을 지나는 꾸밈선 추가 버튼을 누르세요.
   * 메뉴에서 **기술도면→ 선 추가 → ![](/images/TechDraw_2PointCosmeticLine.svg) 두 점을 지나는 꾸밈선 추가**를 선택하세요.
4. 작업판이 열립니다.
5. 선택적으로 점의 좌표를 조정합니다.
6. 확인 버튼을 누릅니다.
7. 두 점을 연결하는 꾸밈선이 추가됩니다. 3D 점의 경우 선은 점의 투영을 연결합니다.

## 편집 방법

꾸밈선의 끝점을 변경하려면:

1. 꾸밈선을 선택하세요.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_2PointCosmeticLine.svg) 두 점을 지나는 꾸밈선 추가 버튼을 누르세요.
   * 메뉴에서 **기술도면→ 선 추가 → ![](/images/TechDraw_2PointCosmeticLine.svg) 두 점을 지나는 꾸밈선 추가**를 선택하세요.
3. 작업판이 열립니다.
4. 두 끝 점의 좌표를 조정합니다.
5. 확인 버튼을 누릅니다.

## 보충 설명

- 꾸밈선을 삭제하려면 선을 선택하고 삭제를 누르세요. [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0")
- 꾸밈선의 외형을 변경하려면 ![](/images/TechDraw_DecorateLine.svg) [기술도면 선꾸미기](/TechDraw_DecorateLine/ko "TechDraw DecorateLine/ko")를 사용하세요.

## 속성

꾸밈선은 문서 대상체가 아니므로 자체 속성이 없습니다.

## 스크립팅

[자동 생성된 API 문서](https://freecad.github.io/SourceDoc/) 및 [FreeCAD 스크립팅 기본](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko")도 참고하세요.

DrawViewPart의 `makeCosmeticLine(v1, v2)` 또는 `makeCosmeticLine3d(v1, v2)` 메서드를 사용하여 꾸밈선을 생성할 수도 있습니다.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_2PointCosmeticLine/ko&oldid=1567639>"
