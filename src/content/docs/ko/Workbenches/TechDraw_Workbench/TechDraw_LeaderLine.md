---
title: 기술도면 지시선
---

|                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 기술도면 지시건                                                                                                                                                     |
| Menu location                                                                                                                                                       |
| 기술도면→ 선 추가 → 보기에 지시선 추가                                                                                                                              |
| Workbenches                                                                                                                                                         |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko")                                                                                                   |
| Default shortcut                                                                                                                                                    |
| _None_                                                                                                                                                              |
| Introduced in version                                                                                                                                               |
| 0.19                                                                                                                                                                |
| See also                                                                                                                                                            |
| [기술도면 서식 있는 주석](/TechDraw_RichTextAnnotation/ko "TechDraw RichTextAnnotation/ko"), [기술도면 용접 기호](/TechDraw_WeldSymbol/ko "TechDraw WeldSymbol/ko") |
|                                                                                                                                                                     |

## 설명

**기술도면 지시건** 도구는 보기에 선을 추가합니다. 다른 주석 대상체(예: [서식 있는 주석](/TechDraw_RichTextAnnotation/ko "TechDraw RichTextAnnotation/ko"))를 지시선에 연결하여 복잡한 주석을 만들 수 있습니다.

![](/images/TechDraw_LeaderLine_sample.png)

보기에 추가된 지시선

## 생성 방법

1. 보기를 선택하세요.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_LeaderLine.svg) 보기에 지시선 추가 버튼을 누르세요.
   * 메뉴에서 **기술도면 → 선 추가 → ![](/images/TechDraw_LeaderLine.svg) 보기에 지시선 추가**를 선택하세요.
3. 작업창이 열립니다.
4. 점 선택 버튼을 누르세요.
5. 페이지의 첫 번째 지점을 선택하여 지시선의 시작점을 정의합니다.
6. 페이지에서 다음 지점을 선택합니다. 22.5° 각도의 배수로 포착하려면 Ctrl을 누르고 있습니다. 한 번 클릭하는 대신 두 번 클릭해서 점 입력을 완료할 수도 있습니다.
7. 원하는 만큼 점을 더 추가하세요.
8. 지시선의 마지막 지점을 두 번 클릭하지 않은 경우: 점 저장 버튼을 누르세요.
9. 선택적으로 지시선의 **시작 기호**, **끝 기호**, **색상**, **너비** 및 **스타일**을 변경합니다. 자세한 내용은 <#속성>을 참조하세요.
10. 확인 버튼을 누르세요.

## 편집 방법

1. [나무 보기](/Tree_view/ko "Tree view/ko")에서 지시선을 두 번 클릭합니다.
2. 작업창이 열립니다.
3. 지시선의 점을 편집 하려면:
   1. 지시선의 꺾인 부분은 임시로 마디가 표시됩니다.
   2. 마디를 잡아 원하는 새 위치로 끄세요.
   3. 변경 사항 저장 버튼을 누르세요.
4. 선택적으로 지시선의 **시작 기호**, **끝 기호**, **색상**, **너비** 및 **스타일**을 변경합니다. 자세한 내용은 <#속성>을 참조하세요.
5. 확인 버튼을 누르세요.

## 보충 설명

- 기존 지시선에 점을 추가하거나 제거할 수 없습니다.
- 생성 시에 점을 지정하지 않으면 보기의 중앙에 짧은 선이 배치됩니다. 이러한 선을 수정할 방법은 없으므로 삭제해야 합니다.
- 기본적으로 **지시선 자동 수평** [환경 설정](/TechDraw_Preferences/ko#주석 "TechDraw Preferences/ko")이 선택되어 있습니다. 즉, 새로운 지시선의 마지막 선분이 수평으로 그려집니다. 선분이 하나뿐인 경우 결과는 단일 수평 선입니다.
- 기존 지시선의 자동 수평 기능을 해제하려면 데이터**자동 수평(Auto Horizontal)** 속성을 변경하면 됩니다.

## 속성

### Data

Base

- 데이터**Start Symbol** (`Enumeration`): The symbol at the start of the leaderline. Options: ![](/images/Arrowfilled.svg) Filled Arrow, ![](/images/Arrowopen.svg) Open Arrow, ![](/images/Arrowtick.svg) Tick, ![](/images/Arrowdot.svg) Dot, ![](/images/Arrowopendot.svg) Open Circle, ![](/images/Arrowfork.svg) Fork, ![](/images/Arrowpyramid.svg) Filled Triangle, None.
- 데이터**End Symbol** (`Enumeration`): The symbol at the end of the leaderline. Idem.
- 데이터**X** (`Distance`): The X coordinate of the leaderline relative to the View.
- 데이터**Y** (`Distance`): The Y coordinate of the leaderline relative to the View.

Leader

- 데이터**Leader Parent** (`Link`): The View the leaderline is attached to.
- 데이터**Way Points** (`VectorList`): The points of the leaderline.
- 데이터**Scalable** (`Bool`): Specifies if the leaderline scales with 데이터**Leader Parent**.
- 데이터**Auto Horizontal** (`Bool`): 지시선의 마지막 분절이 수평이 되도록 강제할지 여부를 지정합니다.

### 보기

Base

- 보기**Keep Label** (`Bool`): Not used.
- 보기**Stack Order** (`Integer`): Over or underlap relative to other drawing objects. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

Line Format

- 보기**Color** (`Color`): 지시선의 색상
- 보기**Line Style** (`Enumeration`): 지시선의 종류: NoLine, ![](/images/Continuous-line.svg) Continuous, ![](/images/Dash-line.svg) Dash, ![](/images/Dot-line.svg) Dot, ![](/images/DashDot-line.svg) DashDot, ![Length](/images/DashDotDot-line.svg) DashDotDot.
- 보기**Line Width** (`Length`): 지시선의 두께

## 스크립팅

[자동 생성된 API 문서](https://freecad.github.io/SourceDoc/) 및 [FreeCAD 스크립팅 기본](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko")도 참고하세요.

지시선 도구는 다음 함수를 사용하여 [매크로](/Macros/ko "Macros/ko") 및 [파이썬](/Python/ko "Python/ko") 콘솔에서 사용할 수 있습니다.

```
myPage = FreeCAD.ActiveDocument().Page
myBase = FreeCAD.ActiveDocument().View
leaderObj = FreeCAD.ActiveDocument.addObject('TechDraw::DrawLeaderLine','DrawLeaderLine')
FreeCAD.activeDocument().myPage.addView(leaderObj)
FreeCAD.activeDocument().leaderObj.LeaderParent = myBase
#first waypoint is always (0,0,0)
#rest of waypoints are positions relative to (0,0,0)
leaderObj.WayPoints = [p0,p1,p2]
leaderObj.X = 5
leaderObj.Y = 5

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_LeaderLine/ko&oldid=1567197>"
