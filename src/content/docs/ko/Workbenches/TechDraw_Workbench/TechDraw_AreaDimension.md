---
title: 기술도면 면적 치수
---
|  |
| --- |
| 기술도면 면적 치수 |
| Menu location |
| 기술도면→ 치수→ 면적 주석 삽입 |
| Workbenches |
| [기술도면](/TechDraw_Workbench/ko "TechDraw Workbench/ko") |
| Default shortcut |
| *None* |
| Introduced in version |
| 1.0 |
| See also |
| [기술도면 면적 주석 확장](/index.php?title=TechDraw_ExtensionAreaAnnotation/ko&action=edit&redlink=1 "TechDraw ExtensionAreaAnnotation/ko (page does not exist)") |
|  |

## 설명

**기술도면 면적 치수** 도구는 부품 보기의 면에 면적 치수를 추가합니다.

![](/images/TechDraw_AreaDimension_Example.png)

구멍이 있는 면의 면적 치수.[제한사항](#제한사항)참고.

## 용법

1. 면을 선택합니다. 면은 [3D보기](/3D_view/ko "3D view/ko") 또는 도면 페이지에서 선택할 수 있습니다.
2. 3D보기에서 도형을 선택한 경우: [나무 보기](/Tree_view/ko "Tree view/ko")에서 올바른 기술도면 보기를 함께 선택(Ctrl)하여 선택 항목에 추가합니다.
3. 도구를 호출하는 방법은 여러 가지가 있습니다.
   * [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0"): **치수 도구** [환경 설정](/TechDraw_Preferences/ko#치수 "TechDraw Preferences/ko")이 `단일 도구`(기본값)로 설정된 경우: ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) 버튼 오른쪽에 있는 아래쪽 화살표를 누르고 드롭다운에서 **![](/images/TechDraw_AreaDimension.svg)면적 치수 삽입**을 선택하세요.
   * 이 기본 설정에 다른 값이 있는 경우(0.21 and below인 경우): ![](/images/TechDraw_3PtAngleDimension.svg)**면적 치수 삽입** 버튼을 누르세요.
   * 메뉴에서 **기술도면 → 치수 → ![](/images/TechDraw_AreaDimension.svg)면적 치수 삽입**을 선택하세요.
4. 치수가 보기에 추가되었습니다.
5. 치수를 원하는 위치로 끌어 낼 수 있습니다.
6. 필요한 경우 [이 페이지](/TechDraw_Geometric_dimensioning_and_tolerancing/ko#공차(Tolerances) "TechDraw Geometric dimensioning and tolerancing/ko")에 설명된 대로 허용 오차를 추가하세요.

## 제한사항

* 1.0 and below: 해당 도구는 3D 보기에서 선택한 면에서 구멍(섬)만 감지할 수 있습니다. 도면에서 해당 면에 대한 올바른 영역을 선택하려면 다음을 수행합니다.
  1. ![](/images/TechDraw_DimensionRepair.svg) [기술도면 치수 복구](/index.php?title=TechDraw_DimensionRepair/ko&action=edit&redlink=1 "TechDraw DimensionRepair/ko (page does not exist)")를 사용하여 올바른 데이터**참조 3D**를 설정하세요.
  2. 데이터**측정 유형** 속성을 `True`로 변경합니다.
  3. 필요한 경우 ![](/images/Std_Refresh.svg) [새로 고침](/Std_Refresh/ko "Std Refresh/ko")을 호출합니다.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_AreaDimension/ko&oldid=1563544>"