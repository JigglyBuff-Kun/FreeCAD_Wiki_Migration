---
title: 기술도면 보기틀 전환
---

|                                                                   |
| ----------------------------------------------------------------- |
| 기술도면 보기틀 전환                                              |
| Menu location                                                     |
| 기술도면 → 기술도면 보기 → 보기틀 켜기/끄기                       |
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

**기술도면 보기틀 전환** 도구는 보기의 틀, 레이블 및 꼭지점의 표시/숨김을 전환합니다.

![](/images/TechDraw_ToggleFrame.png)

보기틀이 켜지고 꺼진 고체 투상의 보기

## 용법

1. 문서에 여러 개의 도면 페이지가 있는 경우: [나무 보기](/Tree_view/ko "Tree view/ko")에서 원하는 페이지를 선택하여 활성화합니다.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_ToggleFrame.svg) 보기틀 전환 버튼을 누르세요.
   * 메뉴에서 **기술도면 → 기술도면 보기 → ![](/images/TechDraw_ToggleFrame.svg) 보기틀 켜기/끄기**를 선택하세요.
   * 페이지가 [주요 보기 영역](/Main_view_area/ko "Main view area/ko")에 표시되는 경우: 페이지 창을 마우스 오른쪽 버튼으로 클릭하고 상황에 맞는 메뉴에서 **틀 전환**을 선택하세요.
3. 문서에 여러 개의 도면 페이지가 있고 아직 페이지를 활성화하지 않은 경우 **페이지 선택기** 대화 상자가 열립니다.
   1. 원하는 페이지를 선택하세요.
   2. 확인 버튼을 누르세요.
4. 현재 보이는 보기틀이 사라지거나 현재 보이지 않는 보기틀이 나타납니다.
5. 서로 다른 보기가 틀 표시의 다른 상태에 있을 수 있습니다. 이런 경우 이 도구를 한두 번 호출하여 보기를 다시 동기화합니다.

## 배경

점선으로 표시된 보기틀과 꼭짓점은 단지 참조용일 뿐이며, 실제로 도면의 일부가 아니므로 페이지를 PDF나 SVG로 내보내면 볼 수 없습니다.

제안되는 작업방식은 ![](/images/TechDraw_ToggleFrame.svg) 보기틀 전환을 사용하여 보기를 둘러싼 틀과 점들을 비활성화하는 것입니다. 점을 이용하여 치수 도구로 측정할 모서리를 선택한 다음 틀(및 점)을 숨기고 최종 결과를 확인합니다. 결과가 만족스럽지 다면 틀(과 점)을 다시 켜고, 다른 꼭짓점을 선택하고 새로운 치수를 넣은 다음 틀을 다시 끕니다.

[기술도면 환경설정/척도 탭](/TechDraw_Preferences/ko#척도 "TechDraw Preferences/ko")에서 꼭지점 점의 크기를 조정할 수 있습니다. 크기를 0으로 설정하지 마세요. 작거나 크게 설정해서 편안하게 잡을 수 있을 정도로만 설정하세요.

## 스크립팅

[자동 생성된 API 문서](https://freecad.github.io/SourceDoc/) 및 [FreeCAD 스크립팅 기본](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko")도 참고하세요.

The Toggle tool currently doesn't have a programming interface.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ToggleFrame/ko&oldid=1563059>"
