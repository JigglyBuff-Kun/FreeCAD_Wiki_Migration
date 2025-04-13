---
title: 기술도면 수평 범위 치수
---
|  |
| --- |
| 기술도면 수평 범위 치수 |
| Menu location |
| 기술도면→ 치수→ 수평 범위 치수 삽입 |
| Workbenches |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| [기술도면 치수](/TechDraw_LengthDimension/ko "TechDraw LengthDimension/ko"), [기술도면 수직 범위 치수](/TechDraw_VerticalExtentDimension/ko "TechDraw VerticalExtentDimension/ko") |
|  |

## 설명

**기술도면 수평 범위 치수** 도구는 보기에 수평 방향 선형 치수를 추가합니다. 치수는 선택한 대상체의 가장 왼쪽 지점에서 가장 오른쪽 지점까지 확장됩니다.

![](/images/TechDraw_Dimension_Horizontal_Extent_example.png)

B-조절곡선의 수평 및 수직 범위 치수

## 용법

1. 보기 또는 모서리들을 선택하세요.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   * [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0"): **치수 도구** [환경 설정](/TechDraw_Preferences/ko#치수 "TechDraw Preferences/ko")이 `단일 도구`(기본값)로 설정된 경우: ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) 버튼 오른쪽에 있는 아래쪽 화살표를 누르고 드롭다운에서 **![](/images/TechDraw_HorizontalExtentDimension.svg) 수평 범위 치수**를 선택하세요.
   * 이 기본 설정에 다른 값이 있는 경우(0.21 and below인 경우):  ![](/images/TechDraw_HorizontalExtentDimension.svg)수평 범위 치수 버튼을 누르세요.
   * 메뉴에서 **기술도면 → 치수 → ![](/images/TechDraw_HorizontalExtentDimension.svg) 수평 범위 치수 삽입**을 선택하세요.
3. 치수가 보기에 추가되었습니다.
4. 치수를 원하는 위치로 끌어 낼 수 있습니다.
5. 필요한 경우 [이 페이지](/TechDraw_Geometric_dimensioning_and_tolerancing/ko#공차(Tolerances) "TechDraw Geometric dimensioning and tolerancing/ko")에 설명된 대로 허용 오차를 추가하세요.

### 속성 변경

치수 대상체의 속성을 변경하려면 도면이나 [나무 보기](/Tree_view/ko "Tree view/ko")에서 치수 대상체를 두 번 클릭합니다. 이렇게 하면 [치수 대화 상자](/TechDraw_LengthDimension/ko#치수_대화_상자 "TechDraw LengthDimension/ko")가 열립니다.

## 제한사항

치수 대상체는 "[위상적 명명 문제](/Topological_naming_problem/ko "Topological naming problem/ko")"에 취약합니다. [기술도면 길이 치수](/TechDraw_LengthDimension/ko "TechDraw LengthDimension/ko")를 참조하세요.

## 보충 설명

[기술도면 길이 치수](/TechDraw_LengthDimension/ko#보충_설명 "TechDraw LengthDimension/ko")를 참조하세요.

## 속성

[기술도면 치수 길이](/TechDraw_LengthDimension/ko#속성 "TechDraw LengthDimension/ko")를 참조하세요. 아래에는 예외사항이 있습니다.

### Data

Base

* 데이터**Measure Type** (`Enumeration`): 아직 범위 치수에는 구현되지 않았습니다.

## 스크립팅

[자동 생성된 API 문서](https://freecad.github.io/SourceDoc/) 및 [FreeCAD 스크립팅 기본](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko")도 참고하세요.

수평 범위 치수 도구는 다음 함수를 사용하여 [매크로](/Macros/ko "Macros/ko") 및 [파이썬](/Python/ko "Python/ko") 콘솔에서 사용할 수 있습니다:

```
selection = ['Edge1', 'Edge2']                      # or [] for all

TechDraw.makeExtentDim(view1, selection, 0)         # view1 is a DrawViewPart; 0 for horizontal
App.ActiveDocument.DimExtent.Y = -60                # offset dimension line from dimensioned edges in Y direction
App.ActiveDocument.DimExtent.X = 10                 # offset dimension text along dimension line in X direction
App.ActiveDocument.DimExtent.FormatSpec = '%.0f'    # Dimension format

TechDraw.makeExtentDim(view1, selection, 1)         # view1 is a DrawViewPart; 1 for vertical
App.ActiveDocument.DimExtent001.X = -130            # offset dimension line from dimensioned edges in X direction
App.ActiveDocument.DimExtent001.Y = 10              # offset dimension text along dimension line in Y direction
App.ActiveDocument.DimExtent001.FormatSpec = '%.0f'

# Note the dimension names are 'DimExtent', 'DimExtent001' etc in the order created.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_HorizontalExtentDimension/ko&oldid=1563679>"