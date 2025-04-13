---
title: 기술도면 사분점
---

|                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 기술도면 사분점                                                                                                                                |
| Menu location                                                                                                                                  |
| 기술도면→ 점 추가 → 사분점 추가                                                                                                                |
| Workbenches                                                                                                                                    |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko")                                                                              |
| Default shortcut                                                                                                                               |
| _None_                                                                                                                                         |
| Introduced in version                                                                                                                          |
| 0.19                                                                                                                                           |
| See also                                                                                                                                       |
| [기술도면 꾸밈점](/TechDraw_CosmeticVertex/ko "TechDraw CosmeticVertex/ko"), [기술도면 중간점](/TechDraw_Midpoints/ko "TechDraw Midpoints/ko") |
|                                                                                                                                                |

## 설명

**기술도면 사분점** 도구는 선택한 하나 이상의 모서리 길이를 따라 세 개의 [꾸밈점](/TechDraw_CosmeticVertex/ko "TechDraw CosmeticVertex/ko")을 추가합니다. 점은 모서리 길이의 1/4지점, 2/4지점, 3/4지점에 배치됩니다. 원형 모서리의 경우 0°의 기하학적 점 외에도 90°, 180° 및 270°지점에 꾸밈점이 생성됩니다.

![](/images/TechDraw_CosmeticQuadrant_Sample.png)

원의 사분 지점에 추가된 꾸밈점

## 용법

1. 보기에서 하나 이상의 모서리를 선택합니다. 원뿐만 아니라 모든 모서리를 선택할 수 있습니다.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_Quadrants.svg) 사분점 추가 버튼을 누르세요.
   * 메뉴에서 **기술도면→ 점 추가 → ![](/images/TechDraw_Quadrants.svg) 사분점 추가**를 선택하세요

## 보충 설명

- 생성된 꾸밈점은 선택한 모서리와 매개변수적으로 연결되지 않습니다.
- 꾸밈점을 삭제하려면 해당 점을 선택하고 삭제를 누르세요. [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0")

## 속성

꾸밈점은 문서 대상체가 아니기 때문에 자체 속성이 없습니다. 일반 도형의 점과 색상 및 크기 설정을 공유합니다.

## 스크립팅

[자동 생성된 API 문서](https://freecad.github.io/SourceDoc/) 및 [FreeCAD 스크립팅 기본](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko")도 참고하세요.

지금은 [매크로](/Macros/ko "Macros/ko")나 [파이썬](/Python/ko "Python/ko") 콘솔에서 꾸밈점에 접근할 수 없습니다. 아래의 파이썬 코드는 보기에서 모든 꾸밈점을 제거합니다.

```
v = App.ActiveDocument.View
v.clearCV()
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Quadrants/ko&oldid=1567358>"
