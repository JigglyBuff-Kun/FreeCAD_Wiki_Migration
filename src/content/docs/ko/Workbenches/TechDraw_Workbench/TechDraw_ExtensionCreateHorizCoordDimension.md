---
title: 기술도면 수평 병렬 치수
---
|  |
| --- |
| 기술도면 수평 병렬 치수 |
| Menu location |
| 기술도면→ 확장: 치수→ 수평 병렬 치수 생성 |
| Workbenches |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.20 |
| See also |
| [기술도면 수직 병렬 치수](/index.php?title=TechDraw_ExtensionCreateVertCoordDimension/ko&action=edit&redlink=1 "TechDraw ExtensionCreateVertCoordDimension/ko (page does not exist)"), [기술도면 경사 병렬 치수](/index.php?title=TechDraw_ExtensionCreateObliqueCoordDimension/ko&action=edit&redlink=1 "TechDraw ExtensionCreateObliqueCoordDimension/ko (page does not exist)") |
|  |

## 설명

**기술도면 수평 병렬 치수** 도구는 수평 병렬 치수를 생성합니다. 즉, 동일한 기준선에서 시작하여 균등하게 간격이 떨어진 여러 개의 치수입니다.

![](/images/TechDraw_ExtensionCreateHorizCoordDimensionExample.png)

오른쪽 그림에 생성된 수평 병렬 치수

## 용법

1. ![](/images/TechDraw_ExtensionSelectLineAttributes.svg) [기술도면 선 속성 선택](/index.php?title=TechDraw_ExtensionSelectLineAttributes/ko&action=edit&redlink=1 "TechDraw ExtensionSelectLineAttributes/ko (page does not exist)") 도구를 사용하여 계단식 간격을 지정할 수 있습니다.
2. 세 개 이상의 꼭지점을 선택하세요.
3. 처음 두 꼭지점의 선택 순서는 기준선의 위치를 ​​결정합니다. 먼저 선택된 꼭지점이 두 번째 꼭지점의 왼쪽에 있는 경우 기준선은 가장 왼쪽 꼭지점에 생성되고 그렇지 않으면 가장 오른쪽 꼭지점에 생성됩니다.
4. 도구를 호출하는 방법은 여러 가지가 있습니다.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): **치수 도구** [환경 설정](/TechDraw_Preferences/ko#치수 "TechDraw Preferences/ko")이 `단일 도구`(기본값)로 설정된 경우: ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) 버튼 오른쪽에 있는 아래쪽 화살표를 누르고 드롭다운에서 **![](/images/TechDraw_ExtensionCreateHorizCoordDimension.svg) 수평 병렬 치수**를 선택하세요.
   * 이 기본 설정에 다른 값이 있는 경우(0.21 and below인 경우):  ![](/images/TechDraw_ExtensionCreateHorizCoordDimension.svg)수평 병렬 치수 버튼을 누르세요.
   * 메뉴에서 **기술도면 → 확장: 치수 → ![](/images/TechDraw_ExtensionCreateHorizCoordDimension.svg) 수평 병렬 치수 삽입**을 선택하세요.
5. 중앙에 치수 글자가 있는 병 치수가 생성됩니다.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExtensionCreateHorizCoordDimension/ko&oldid=1563757>"