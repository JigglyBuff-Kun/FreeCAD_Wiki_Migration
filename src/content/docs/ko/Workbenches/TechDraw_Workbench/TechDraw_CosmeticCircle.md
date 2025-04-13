---
title: 기술도면 꾸밈원
---

|                                                                                         |
| --------------------------------------------------------------------------------------- |
| 기술도면 꾸밈원                                                                         |
| Menu location                                                                           |
| 기술도면→ 선 추가 → 꾸밈원 추가                                                         |
| Workbenches                                                                             |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko")                       |
| Default shortcut                                                                        |
| _None_                                                                                  |
| Introduced in version                                                                   |
| 1.0                                                                                     |
| See also                                                                                |
| [기술도면 2점 꾸밈선](/TechDraw_2PointCosmeticLine/ko "TechDraw 2PointCosmeticLine/ko") |
|                                                                                         |

## 설명

**기술도면 꾸밈원** 도구는 선택한 중심점에 꾸밈원을 추가합니다. 점은 2D 또는 3D일 수 있습니다.

![](/images/CosmeticCircleSample.png)

꾸밈원

## 생성 방법

1. 기술도면의 보기(View) 또는 [3D 보기](/3D_view/ko "3D view/ko")에서 중심점을 선택합니다.
2. 3D 보기에서 지점을 선택한 경우: 올바른 기술도면의 보기를 선택하여 추가(Ctrl) 합니다.
3. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_CosmeticCircle.svg) 꾸밈원 추가 버튼을 누르세요.
   * 메뉴에서 **기술도면→ 선 추가 → ![](/images/TechDraw_CosmeticCircle.svg) 꾸밈원 추가** 를 선택하세요.
4. 작업판이 열립니다.
5. 원의 중심점, 반지름, 시작 및 종료 각도의 좌표를 선택적으로 조정합니다.
6. 확인 버튼을 누릅니다.
7. 꾸밈원이 추가되었습니다. 3D 중심점의 경우 원은 점의 투영에 위치합니다.

## 편집 방법

꾸밈원의 속성을 변경하려면:

1. 꾸밈원을 선택하세요.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_CosmeticCircle.svg) 꾸밈원 추가 버튼을 누르세요.
   * 메뉴에서 **기술도면→ 선 추가 → ![](/images/TechDraw_CosmeticCircle.svg) 꾸밈원 추가** 를 선택하세요.
3. 작업판이 열립니다.
4. 원의 중심점, 반지름 또는 시작 및 종료 각도의 좌표를 조정합니다.
5. 확인 버튼을 누릅니다.

## 보충 설명

- 꾸밈원을 삭제하려면 선을 선택하고 삭제를 누르세요. [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0")
- 꾸밈원의 외형을 변경하려면 ![](/images/TechDraw_DecorateLine.svg) [기술도면 선꾸미기](/TechDraw_DecorateLine/ko "TechDraw DecorateLine/ko")를 사용하세요.

## 속성

꾸밈원은 문서 대상체가 아니므로 자체 속성이 없습니다.

## 스크립팅

[자동 생성된 API 문서](https://freecad.github.io/SourceDoc/) 및 [FreeCAD 스크립팅 기본](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko")도 참고하세요.

DrawViewPart의 `makeCosmeticCircle(center, radius, start angle, end angle)` 메서드를 사용하여 꾸밈원을 만들 수도 있습니다.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_CosmeticCircle/ko&oldid=1567681>"
