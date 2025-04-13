---
title: 부품설계 작업대에서 새 스케치
---
|  |
| --- |
| PartDesign NewSketch |
| Menu location |
| Sketch → Create sketch |
| Workbenches |
| [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| [스케치 작업대의 새 스케치](/index.php?title=Sketcher_NewSketch/ko&action=edit&redlink=1 "Sketcher NewSketch/ko (page does not exist)") |
|  |

## 설명

이 도구는 새 스케치를 생성합니다. 아직 몸통이 없는 경우 스케치를 포함할 새 [몸통](/PartDesign_Body/ko "PartDesign Body/ko")을 생성한 후 [스케치 작업대](/Sketcher_Workbench/ko "Sketcher Workbench/ko")로 자동으로 전환합니다.

[부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")를 사용하여 모형을 생성할 때, 이 도구는 ![](/images/Sketcher_NewSketch.svg) [스케치 작업대의 새 스케치](/index.php?title=Sketcher_NewSketch/ko&action=edit&redlink=1 "Sketcher NewSketch/ko (page does not exist)") 도구보다 선호됩니다.

## 용법

1. 부품설계 작업대의 도구 모음에서 ![](/images/PartDesign_NewSketch.svg) 스케치 생성 버튼을 누릅니다.
2. 작업 패널에 특징 선택(Select feature) 대화 상자가 나타납니다. 목록에서 평면 중 하나를 선택하거나 3D 보기에서 더 잘 보이도록 방향을 바꿀 수 있는 평면을 선택합니다.
3. OK를 누릅니다.
4. 인터페이스가 자동으로 스케치 작업대로 전환되고 스케치를 편집할 수 있습니다. 스케치가 종료되면 인터페이스가 다시 부품설계 작업대로 돌아가고 3D 보기는 스케치를 생성하기 전의 보기 방향으로 복원됩니다.
5. 또는, 스케치를 생성하기 전에 기존 활성 몸통의 평면이나 면을 선택할 수 있으며, 이 경우 스케치가 즉시 생성됩니다.

## 선택 사항

* 기존 스케치의 부착을 변경하려면 해당 *Map Mode* 속성을 변경하세요(아래의 속성부분 참조).

* *특징 선택(Select feature)* 대화상자는 새 스케치의 특징을 정의합니다.

:   :   ![](/images/PartDesign.CreateSketch.SelectFeatureDialog.jpeg)
    :   *특징 선택(Select feature)* 대화상자. 이러한 설정은 XY 평면에 스케치를 생성하고 동일한 몸통의 다른 항목과의 상호 참조를 허용합니다.

대화상자 설정

* 좌표계 상자: 스케치 평면의 방향을 정의합니다.
* Allow Used Features: TBD

:   Allow external features options

* From other bodies of the same part: any elements used in the same body can be referenced
* From different parts or free features: *TBD*
* Make independent copy: all other elements will be separate copies, i.e. they will not change when the original changes.
* Make dependent copy: the elements will be copies, but a dependency to the original elements is kept. This is basically using a [Shapebinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder")
* Create cross-reference: the linked elements will not be copies, but point to the original elements, e.g. a master sketch. Any changes are reflected to this sketch

[스케치 작업대](/Sketcher_Workbench/ko "Sketcher Workbench/ko")에서 어떠한 항목을 참조하려면 ![](/images/Sketcher_External.svg) [외부 Geometry](/index.php?title=Sketcher_External/ko&action=edit&redlink=1 "Sketcher External/ko (page does not exist)") 및 ![](/images/Sketcher_CarbonCopy.svg) [카본 카피](/index.php?title=Sketcher_CarbonCopy/ko&action=edit&redlink=1 "Sketcher CarbonCopy/ko (page does not exist)") 도구를 사용합니다. 일반적으로 면이나 모서리 대신 다른 스케치를 참조용 소스로 사용하는 것이 좋습니다. 왜냐하면  [위상학적 이름 지정 문제](/Topological_naming_problem/ko "Topological naming problem/ko")의 영향을 덜 받기 때문입니다.

## 속성

* 데이터**Map Mode**: 스케치를 다른 객체(보통 평면이나 면이지만 다른 유형의 객체일 수도 있음)에 부착하는 모드입니다. 필드를 한 번 클릭하면 ... 버튼이 표시되고 해당 버튼을 눌러 [부착](/index.php?title=Part_EditAttachment/ko&action=edit&redlink=1 "Part EditAttachment/ko (page does not exist)") 대화 상자를 엽니다. 비활성화됨으로 설정되면 배치 속성이 활성화됩니다.
* 데이터**Placement**: 3D 공간에서 스케치 방향을 제어합니다; [배치](/Std_Placement/ko "Std Placement/ko")를 참조하세요. Map Mode 속성을 통해 스케치가 부착된 경우 비활성화됩니다.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_NewSketch/ko&oldid=1458287>"