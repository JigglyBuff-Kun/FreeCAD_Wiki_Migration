---
title: 기술도면 풍선
---

|                                                                   |
| ----------------------------------------------------------------- |
| 기술도면 풍선                                                     |
| Menu location                                                     |
| 기술도면 → 주석→ 풍선 주석 삽입                                   |
| Workbenches                                                       |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko") |
| Default shortcut                                                  |
| _None_                                                            |
| Introduced in version                                             |
| 0.19                                                              |
| See also                                                          |
| [기술도면 주석](/TechDraw_Annotation/ko "TechDraw Annotation/ko") |
|                                                                   |

## 설명

**기술도면 풍선** 도구를 사용하면 도면에 지시선이 있는 풍선을 추가할 수 있습니다.

![](/images/Techdraw_balloon.png)

## 용법

1. 다음 중 하나를 선택하세요:
   - 보기(페이지 또는 [나무 보기](/Tree_view/ko "Tree view/ko")에서).
   - 보기에서 꼭지점.
   - 보기에서 가장자리.
   - 보기에서 선으로 닫힌 영역.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_Balloon.svg) 풍선 주석 삽입 버튼을 누르세요.
   * 메뉴에서 **기술도면→ 주석 → ![](/images/TechDraw_Balloon.svg) 풍선 주석 삽입**을 선택하세요.
3. 보기 또는 영역이 선택된 경우:
   1. 커서가 풍선 아이콘으로 바뀝니다.
   2. 풍선의 원점을 찾으려면 페이지의 한 지점을 클릭하세요.

풍선의 거품을 이동하려면 풍선의 중앙을 마우스 왼쪽 버튼으로 누른 채 끌어 이동합니다.

풍선의 속성을 변경하려면 페이지나 [나무 보기](/Tree_view/ko "Tree view/ko")에서 풍선을 두 번 클릭합니다. 그러면 풍선 작업창이 열립니다.

**참고:** 풍선의 위치는 도면상의 보기에 상대적이며 동일한 축척을 사용합니다.

## 구분 기호 사용

직사각형 모양을 사용할 때 구분 기호 "|"를 사용하여 추가할 수 있습니다. 예를 들어 "AAA|TEST|111"은 아래와 같이 표시됩니다.

![](/images/Balloon_separator.png)

## 속성

### Data

- 데이터**Text**: 풍선 안에 표시되는 글자.
- 데이터**Source View**: 풍선 주석이 붙은 보기.
- 데이터**Origin X**: 보기의 중심점을 기준으로 하는 풍선 원점의 X좌표
- 데이터**Origin Y**: 보기의 중심점을 기준으로 하는 풍선 원점의 Y좌표
- 데이터**End Type**: 풍선 지시선의 끝 기호: ![](/images/Arrowfilled.svg) 채워진 화살표, ![](/images/Arrowopen.svg) 열린 화살, ![](/images/Arrowtick.svg) Tick, ![](/images/Arrowdot.svg) 점, ![](/images/Arrowopendot.svg) 열린 , ![](/images/Arrowfork.svg) 갈퀴, ![](/images/Arrowpyramid.svg) 채워진 삼각형, 없음.
- 데이터**End Type Scale**: Scale factor for the **End Type**.
- 데이터**Bubble Shape**: 풍선의 모양: ![](/images/Circular.svg) 원형, ![](/images/Triangle.svg) 삼각형, ![](/images/Inspection.svg) 검사거울, ![](/images/Hexagon.svg) 육각형, ![](/images/TechDraw_Square.svg) 정사각형, ![](/images/Rectangle.svg) 직사각형, 없음.
- 데이터**Shape Scale**: Scale factor for the **Shape**.
- 데이터**Text Wrap**: Text wrap length; -1 means the text will never be wrapped and the result is in every case a single line.
- 데이터**Kink Length**: Distance from the **Shape** to the leader line kink.
- 데이터**X**: Horizontal position of the balloon bubble relative to the View.
- 데이터**Y**: Vertical position of the balloon bubble relative to the View.

### View

- 보기**Color**: 풍선 주석 전체 색상.
- 보기**Font**: 풍선 거품에 사용할 글꼴의 이름.
- 보기**Fontsize**: 풍선 속 글자 크기(mm).
- 보기**Line Visible**: 풍선에 연결된 지시선이 표시되는지 여부.
- 보기**Line Width**: 풍선 선 두께.

## 스크립팅

[자동 생성된 API 문서](https://freecad.github.io/SourceDoc/) 및 [FreeCAD 스크립팅 기본](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko")도 참고하세요.

풍선 도구는 다음 함수를 사용하여 [매크로](/Macros/ko "Macros/ko") 및 [파이썬](/Python/ko "Python/ko") 콘솔에서 사용할 수 있습니다:

```
bal1 = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewBalloon','Balloon')
rc = page.addView(bal1)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Balloon/ko&oldid=1563847>"
