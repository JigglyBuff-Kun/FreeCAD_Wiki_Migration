---
title: 도형 검사
---
|  |
| --- |
| 도형 검사‏‎ |
| Menu location |
| 부품 → 도형 검사 |
| Workbenches |
| [부품 작업대](/Part_Workbench/ko "Part Workbench/ko") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## 설명

![](/images/Part_CheckGeometry.svg) 도형 검사 도구는 도형의 기하 구조가 유효한 고체인지 검증하고 결과를 보고합니다. 이 도구는 모형의 [경계 표현](https://en.wikipedia.org/wiki/Boundary_representation) (BRep 또는 [B-rep](/Glossary#B "Glossary"))이 유효한지 확인합니다.

## 용법

1. 검사할 부품을 선택하세요 (유효한 고체인지 확인하려면 부품의 일부 면만이 아니라 부품 전체를 선택해야 합니다)
2. 다음 중 하나를 통해 도구를 호출합니다.
   * 부품(Part)작업대 도구 모음에서 사용 가능한 ![](/images/Part_CheckGeometry.svg) 도형 검사 버튼을 클릭합니다.
   * 상단 메뉴에서 **부품 → ![](/images/Part_CheckGeometry.svg) 도형 검사** 항목을 사용합니다.
3. **설정** 작업 패널은 **설정 페이지 건너뛰기**가 활성화되어 있지 않으면 열립니다. 자세한 내용은 [옵션](#Options)을 참조하세요. 검사 실행을 클릭하세요.

결과는 [작업 패널](/Task_panel/ko "Task panel/ko")에 보고됩니다. 검사에서 오류가 발생한 경우: 보고서에서 특정 오류 메시지를 클릭하면 해당 기하학적 개체(모서리, 면 등)가 [3D 보기](/3D_view/ko "3D view/ko")에서 강조 표시됩니다.

## 선택 사항

### 설정 페이지 건너뛰기

이 확인란을 선택하면 이후 도구를 호출할 때 **설정** 작업 패널이 표시되지 않습니다.

### BOP 검사 실행

체크하면, 부울 연산(BOP:Boolean OPerations) 검사도 추가로 수행됩니다.

### 오류 기록

체크하면 발견된 모든 오류도 [보고서 보기](/index.php?title=Report_view/ko&action=edit&redlink=1 "Report view/ko (page does not exist)")에 기록됩니다.

## 형상 내용(Shape Content)

이 도구는 잠재적인 기하학적 오류를 감지하는 것 외에도 선택한 대상체에 대한 다양한 속성을 보여줍니다:

* 검사 대상체 이름
* 형상 유형
* 기하학적 실체들의 수: 꼭지점, 모서리, 철사(Wire), 면, 껍질(Shell), 고체, 복합 고체, 화합물, 전체 형상 수
* 기하학적 및 질량 속성:
  + 면적
  + 부피
  + 질량
  + 길이
  + 질량 중심
  + 방향
  + 대칭 축
  + 대칭 점
  + 모멘트
  + 관성의 첫 번째 축
  + 관성의 두 번째 축
  + 관성의 세 번째 축
  + 회전 반경
  + 전역 배치

## 보충 설명

* 적절한 개체 유형에 연결된 [앱 링크](/index.php?title=App_Link/ko&action=edit&redlink=1 "App Link/ko (page does not exist)") 개체와 적절한 표시 개체가 포함된 [앱 파트](/index.php?title=App_Part/ko&action=edit&redlink=1 "App Part/ko (page does not exist)") 컨테이너도 이 도구를 사용하여 확인할 수 있습니다. [앱 링크](/index.php?title=App_Link/ko&action=edit&redlink=1 "App Link/ko (page does not exist)")의 경우 링크된 객체의 모양이 검사 됩니다. [앱 파트](/index.php?title=App_Part/ko&action=edit&redlink=1 "App Part/ko (page does not exist)") 컨테이너의 경우 그 안에 있는 보이는 객체는 화합물로 확인됩니다. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
* FreeCAD에는 오류가 있는 형상을 자동으로 수정하는 방법이 없습니다. 오류가 확인되면 모형을 만드는 데 필요한 단계를 검사하여 수동으로 수정해야 합니다.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_CheckGeometry/ko&oldid=1553086>"