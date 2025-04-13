---
title: 기술도면 반지름 치수
---
|  |
| --- |
| 기술도면 반지름 치수 |
| Menu location |
| 기술도면→ 치수→ 반지름 치수 삽입 |
| Workbenches |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [기술도면 지름 치수](/TechDraw_DiameterDimension/ko "TechDraw DiameterDimension/ko") |
|  |

## 설명

**기술도면 반지름 치수** 도구는 보기에 반지름 치수를 추가합니다. 이 치수는 원이나 원호인 모든 모서리에 적용될 수 있습니다.

![](/images/TechDraw_Dimension_Radius_example.png)

원의 반지름 치수 표시

## 용법

1. 원이나 원호를 선택하세요. 형상은 [3D보기](/3D_view/ko "3D view/ko")나 도면에서 선택할 수 있습니다. 원형으로 보이는 일부 호는 실제로는 타원 또는 B-조절곡선 일 수도 있는데 이 경우에는 반지름 치수를 만들 수 없습니다.
2. 3D보기에서 도형을 선택한 경우: [나무 보기](/Tree_view/ko "Tree view/ko")에서 올바른 기술도면 보기를 함께 선택(Ctrl)하여 선택 항목에 추가합니다.
3. 도구를 호출하는 방법은 여러 가지가 있습니다.
   * [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0"): **치수 도구** [환경 설정](/TechDraw_Preferences/ko#치수 "TechDraw Preferences/ko")이 `단일 도구`(기본값)로 설정된 경우: ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) 버튼 오른쪽에 있는 아래쪽 화살표를 누르고 드롭다운에서 **![](/images/TechDraw_RadiusDimension.svg) 반지름 치수 삽입**을 선택하세요.
   * 이 기본 설정에 다른 값이 있는 경우(0.21 and below인 경우): ![](/images/TechDraw_RadiusDimension.svg) 반지름 치수 삽입 버튼을 누르세요.
   * 메뉴에서 **기술도면 → 치수 → ![](/images/TechDraw_RadiusDimension.svg) 반지름 치수 삽입**을 선택하세요.
4. 치수가 보기에 추가되었습니다.
5. 치수를 원하는 위치로 끌어 낼 수 있습니다.
6. 필요한 경우 [이 페이지](/TechDraw_Geometric_dimensioning_and_tolerancing/ko#공차(Tolerances) "TechDraw Geometric dimensioning and tolerancing/ko")에 설명된 대로 허용 오차를 추가하세요.

### 3D 측정 표시

[기술도면 길이 치수](/TechDraw_LengthDimension/ko#3D_측정_표시 "TechDraw LengthDimension/ko") 참조하세요.

### 속성 변경

치수 대상체의 속성을 변경하려면 도면이나 [나무 보기](/Tree_view/ko "Tree view/ko")에서 치수 대상체를 두 번 클릭합니다. 이렇게 하면 [치수 대화 상자](/TechDraw_LengthDimension/ko#치수_대화_상자 "TechDraw LengthDimension/ko")가 열립니다.

## 제한사항

치수 대상체는 "[위상적 명명 문제](/Topological_naming_problem/ko "Topological naming problem/ko")"에 취약합니다. [기술도면 길이 치수](/TechDraw_LengthDimension/ko "TechDraw LengthDimension/ko")를 참조하세요.

## 보충 설명

[기술도면 길이 치수](/TechDraw_LengthDimension/ko#보충_설명 "TechDraw LengthDimension/ko")를 참조하세요.

## 속성

[기술도면 길이 치수](/TechDraw_LengthDimension/ko#Properties "TechDraw LengthDimension/ko")를 참조하세요.

## 스크립팅

[자동 생성된 API 문서](https://freecad.github.io/SourceDoc/) 및 [FreeCAD 스크립팅 기본](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko")도 참고하세요.

반지름 치수 도구는 다음 함수를 사용하여 [매크로](/Macros/ko "Macros/ko") 및 [파이썬](/Python/ko "Python/ko") 콘솔에서 사용할 수 있습니다:

```
dim1 = FreeCAD.ActiveDocument.addObject("TechDraw::DrawViewDimension", "Dimension")
dim1.Type = "Radius"
dim1.References2D=[(view1, "Edge1")]
page.addView(dim1)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_RadiusDimension/ko&oldid=1563408>"