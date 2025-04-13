---
title: 기술도면 모두 보이기
---

|                                                                           |
| ------------------------------------------------------------------------- |
| 기술도면 모두 보이기                                                      |
| Menu location                                                             |
| 기술도면→ 선 추가 → 안보이는 모서리 표시/숨김                             |
| Workbenches                                                               |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko")         |
| Default shortcut                                                          |
| _None_                                                                    |
| Introduced in version                                                     |
| 0.19                                                                      |
| See also                                                                  |
| [기술도면 선꾸미기](/TechDraw_DecorateLine/ko "TechDraw DecorateLine/ko") |
|                                                                           |

## 설명

**기술도면 모두 보이기** 도구는 보기(View)에서 보이지 않는 선을 일시적으로 표시한 다음 숨기는 데 사용됩니다. 선은 [기술도면 선꾸미기](/TechDraw_DecorateLine/ko "TechDraw DecorateLine/ko") 도구로 보이지 않게 만들 수도 있습니다. "보이지 않는"이란 표현은 외관상의 상태이며, 기하학적 구조인 숨겨진 선과 혼동해서는 안 됩니다.

## 용법

1. 페이지나 [나무 보기](/Tree_view/ko "Tree view/ko")에서 보이지 않는 선이 있는 보기를 선택하세요.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_ShowAll.svg) 안보이는 모서리 표시/숨김 버튼을 누르세요.
   * 메뉴에서 **기술도면→ 선 추가 → ![](/images/TechDraw_ShowAll.svg) 안보이는 모서리 표시/숨김**을 선택하세요.
3. 보기에서 보이지 않는 모든 선은 표시되거나 숨겨집니다.

## 보충 설명

- 보이지 않는 선을 영구적으로 보이게 하려면 ![](/images/TechDraw_DecorateLine.svg) [기술도면 선꾸미기](/TechDraw_DecorateLine/ko "TechDraw DecorateLine/ko")도구를 사용하세요.

## 스크립팅

[자동 생성된 API 문서](https://freecad.github.io/SourceDoc/) 및 [FreeCAD 스크립팅 기본](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko")도 참고하세요.

모두 보이기 도구의 효과는 [매크로](/Macros/ko "Macros/ko") 또는 [파이썬](/Python/ko "Python/ko") 콘솔에서 만들 수도 있습니다.

```
v = App.ActiveDocument.View
vvo = v.ViewObject
vvo.ShowAllEdges = True
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ShowAll/ko&oldid=1567757>"
