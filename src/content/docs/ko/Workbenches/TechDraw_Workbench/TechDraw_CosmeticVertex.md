---
title: 기술도면 꾸밈점
---

|                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| 기술도면 꾸밈점                                                                                                                      |
| Menu location                                                                                                                        |
| 기술도면→ 점 추가 → 꾸밈점 추가                                                                                                      |
| Workbenches                                                                                                                          |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko")                                                                    |
| Default shortcut                                                                                                                     |
| _None_                                                                                                                               |
| Introduced in version                                                                                                                |
| 0.19                                                                                                                                 |
| See also                                                                                                                             |
| [기술도면 중간점](/TechDraw_Midpoints/ko "TechDraw Midpoints/ko"), [기술도면 사분점](/TechDraw_Quadrants/ko "TechDraw Quadrants/ko") |
|                                                                                                                                      |

## 설명

**기술도면 꾸밈점** 도구는 원래 도형의 일부가 아닌 [꼭지점](/Glossary/ko#V "Glossary/ko")을 보기에 추가합니다. 이 점은 다른 점과 마찬가지로 동작하며 치수 지정에 사용할 수 있습니다.

![](/images/TechDraw_CosmeticVertex_Sample.png)

원래 도형에 있는 점만으로는 만들 수 없는 치수를 생성하기 위해 추가된 꾸밈점

## 용법

1. 보기(View)를 선택하세요.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_CosmeticVertex.svg) 꾸밈점 추가 버튼을 누르세요.
   * 메뉴에서 **기술도면→ 점 추가 → ![](/images/TechDraw_CosmeticVertex.svg) 꾸밈점 추가** 를 선택하세요.
3. 작업판이 열립니다.
4. 선택적으로 점 찍기 버튼을 누르고 페이지에서 점을 찍습니다. 이 작업을 취소하려면 찍기 취소 버튼을 누릅니다.
5. 선택적으로 점의 X 및 Y 좌표를 변경하거나 지정합니다. 좌표는 보기의 중심을 기준으로 합니다.
6. 확인 버튼을 누르세요.

## 보충 설명

- 기존 꾸밈점의 위치를 ​​변경할 수 없습니다. 현재로서는 삭제하고 새 점을 만드는 것 외에 다른 방법이 없습니다.

## 속성

꾸밈점은 문서 대상체가 아니기 때문에 자체 속성이 없습니다. 일반 도형의 점과 색상 및 크기 설정을 공유합니다.

## 스크립팅

[자동 생성된 API 문서](https://freecad.github.io/SourceDoc/) 및 [FreeCAD 스크립팅 기본](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko")도 참고하세요.

꾸밈점은 [매크로](/Macros/ko "Macros/ko") 또는 [파이썬](/Python/ko "Python/ko") 콘솔에서 사용할 수 있습니다.

```
dvp = App.ActiveDocument.View
org = App.Vector(0.0, 0.0, 0.0)
dvp.makeCosmeticVertex(org);

#lines too!
start = FreeCAD.Vector (1.0, 5.0, 0.0)
end = FreeCAD.Vector(1.0, -5.0, 0.0)
style = 2
weight = 0.75
pyGreen = (0.0, 0.0, 1.0, 0.0)
dvp.makeCosmeticLine(start,end,style, weight, pyGreen)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_CosmeticVertex/ko&oldid=1567362>"
