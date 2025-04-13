---
title: 나무 보기(Tree view)
---
## 소개

**나무 보기(Tree View)**는 [인터페이스](/Interface/ko "Interface/ko")에서 가장 중요한 패널 중 하나입니다. FreeCAD 문서의 일부인 모든 사용자 정의 개체를 표시합니다. 나무 보기는 [문서의 구조](/Document_structure/ko "Document structure/ko")를 표현하고 디스크에 어떤 정보가 저장되어 있는지를 나타냅니다.

이러한 객체는 반드시 [3D 보기](/3D_view/ko "3D view/ko")에 표시되는 기하학적 모양일 필요는 없지만 [작업대](/Workbenches/ko "Workbenches/ko")에서 생성된 지원 데이터 객체일 수도 있습니다.

![](/images/FreeCAD_Tree_view.png)

문서의 다양한 요소를 보여주는 나무 보기입니다.

## 나무 보기에서 작업하기

기본적으로 새 개체가 생성될 때마다 나무 보기의 목록 끝에 추가됩니다. 나무 보기를 사용하면 개체를 관리하여 정리된 상태를 유지할 수 있습니다. 나무 보기는 [모둠(Group)](/Std_Group/ko "Std Group/ko") 생성, 모둠 내 개체 이동, 다른 모둠 내 모둠 이동, 개체 레이블 재지정, 개체 복사, 개체 삭제 및 [컨텍스트 메뉴](#Context_menu)의 옵션 사용을 허용합니다.

많은 작업은 이전에 존재하는 개체에 종속되는 개체를 만듭니다. 이 경우 나무 보기는 새 개체 내부에 이전 개체를 흡수하여 이러한 관계를 보여줍니다. 나무 보기에서 개체를 펼치고 접으면서 해당 개체의 파라메트릭 기록을 볼 수 있습니다. 다른 개체 내부에 더 깊이 있는 개체는 오래된 개체인 반면, 외부에 있는 개체는 더 새로운 개체이며 오래된 개체에서 파생됩니다. 내부 개체를 수정하면 파라메트릭 작업이 맨 위로 전파되어 새로운 결과가 생성됩니다.

![](/images/FreeCAD_Tree_view_parametric_history.png)

최상위 개체는 이전 작업으로 생성된 개체에 대해 매개변수 작업을 수행하여 생성됩니다.   
 나무를 완전히 펼쳐 보면 부분적 고체를 만드는 데 사용된 원래 요소가 드러납니다.

### 나무 보기의 열(colum)

기본적으로 나무 보기에는 개체의 이름표와 아이콘이 포함된 단일 열만 표시됩니다. 두 개의 추가 열도 선택적으로 표시될 수 있습니다. 이 열을 활성화하려면 나무 보기를 마우스 오른쪽 버튼으로 클릭하고 상황에 맞는 메뉴에서 **Tree settings**를 선택하세요. 그런 다음 **설명 표시**([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) 및/또는 **내부 이름 표시**([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"))를 선택합니다. 둘 이상의 열이 표시되면 열 머리글이 추가됩니다. 개체의 내부 이름은 변경할 수 없습니다.

### 개체 이름표 편집

첫 번째 열에서 개체를 선택하고 F2(Windows 및 Linux의 경우) 또는 Enter(macOS의 경우)를 눌러 데이터**Label** 속성을 편집합니다. 이 속성은 상황에 맞는 메뉴 옵션 **Rename** 또는 [속성 편집기](/Property_editor/ko "Property editor/ko")를 통해 편집할 수도 있습니다.

### 개체 설명 편집

개체에는 선택적으로 설명을 추가할 수 있습니다. 이 정보는 데이터**Label2** 속성에 저장됩니다. 설명 열이 표시되면 해당 열에서 개체를 선택하고 F2(Windows 및 Linux의 경우) 또는 Enter(macOS의 경우)를 눌러 이 속성을 편집할 수 있습니다. 속성은 [속성 편집기](/Property_editor/ko "Property editor/ko")에서도 변경할 수 있습니다.

### 상황에 맞는 메뉴

나무 보기의 상황에 맞는 메뉴에 있는 옵션은 선택한 개체와 현재 활성화된 작업대에 따라 달라집니다. 이 메뉴를 표시하려면 목록 배경을 마우스 오른쪽 버튼으로 클릭하거나, 목록의 개체를 마우스 오른쪽 버튼으로 클릭하거나, 목록에서 여러 개체를 선택한 다음 그 중 하나를 마우스 오른쪽 버튼으로 클릭합니다.

### Keyboard modifiers

The usual keyboard modifiers can be used in the Tree view. The modifiers can be combined as well.

* Ctrl: hold down this key to select multiple objects.
* Shift: hold down this key to select all objects between a previously selected object and the next selected object.

### 키보드 단축키

포커스가 트리 보기에 있을 때 다음 키보드 단축키를 사용할 수 있습니다:

* Ctrl+F: 트리 하단에 검색 상자를 열어 이름이나 레이블을 사용하여 개체를 검색하고 접근할 수 있습니다.
* Alt+화살표 조합을 사용하여 작업 확장 및 축소: [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
  + Alt+왼쪽: 선택한 항목을 접습니다.
  + Alt+오른쪽: 선택한 항목을 펼칩니다.
  + Alt+위: 모든 Tier-1 하위 항목이 축소된 상태로 선택한 항목을 확장합니다(더 깊은 하위 항목은 변경되지 않음).
  + Alt+아래: 모든 Tier-1 하위 항목도 확장된 상태로 선택한 항목을 확장합니다(더 깊은 하위 항목은 변경되지 않은 상태로 유지됨).

## 중첩 아이콘

나무 보기에서 개체의 기본 아이콘 위에 하나 이상의 아이콘이 중첩 표시될 수 있습니다. 사용 가능한 중첩 아이콘과 그 의미는 다음과 같습니다.

### 파란색 배경에 흰색 체크 표시

이는 모형 변경으로 인해 또는 사용자가 나무 보기 상황에 맞는 메뉴에서 객체를 재계산하도록 표시했기 때문에 객체가 [재계산](/Std_Refresh/ko "Std Refresh/ko")되어야 함을 나타냅니다. 대부분의 경우 재계산은 자동으로 실행되지만 성능상의 이유로 지연되는 경우도 있습니다.

### 빨간색 배경에 흰색 느낌표

이는 개체에 수정해야 할 오류가 있음을 나타냅니다. 전체 문서를 다시 계산한 후 나무 보기에서 개체 위로 마우스를 가져가면 오류를 설명하는 도구 설명이 표시됩니다. 참고: 이러한 오류 상태의 개체에 종속된 다른 모든 개체는 제대로 다시 계산되지 않으므로 여전히 일부 이전 상태가 표시될 수 있습니다.

### 보라색 체인 링크

이는 일반적으로 [스케치](/Sketch/ko "Sketch/ko"), 상자, 원통 등과 같은 기하학적 기본 요소와 [ko|기준도형(Datum)](/Datum "Datum")에 대해 표시됩니다. 이는 객체가 아무 것에도 부착되지 않았음을 나타냅니다. 부착 오프셋이 없으며 [배치](/Placement/ko "Placement/ko") 속성에서만 위치와 정렬을 가져옵니다.

이러한 개체를 처리하는 방법을 설명하는 [기본 부착 자습서](/index.php?title=Basic_Attachment_Tutorial/ko&action=edit&redlink=1 "Basic Attachment Tutorial/ko (page does not exist)")가 있습니다.

### 노란색 X

이는 [스케치](/Sketch/ko "Sketch/ko")에만 사용되며 스케치가 완전히 구속되지 않았음을 나타냅니다. 스케치가 [편집 모드](/index.php?title=Sketcher_EditSketch/ko&action=edit&redlink=1 "Sketcher EditSketch/ko (page does not exist)")인 경우 남은 자유도 수가 [솔버 메시지](/Sketcher_Dialog#Solver_messages "Sketcher Dialog")에 표시됩니다.

### 녹색 배경에 흰색 화살표

이는 몸통의 소위 [끝단(Tip)](/PartDesign_Body#Tip "PartDesign Body")을 나타냅니다. 이는 일반적으로 [부품설계 작업에서 몸통](/PartDesign_Body/ko "PartDesign Body/ko")의 마지막 도형특징이며 외부 세계에 보이는 전체 몸통을 나타냅니다. 몸통을 외부로 내보내거나 [부울](/index.php?title=Part_Boolean/ko&action=edit&redlink=1 "Part Boolean/ko (page does not exist)") 작업에서 사용할 때 끝단은 사용자가 변경할 수 있습니다.

### 빨간색 백슬래시

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

이는 억제된 [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko") 기능을 나타냅니다.

### White upwards curved arrow

This indicates a [linked](/Std_LinkMake "Std LinkMake") object.

### Two white upwards curved arrows

This indicates a [linked](/Std_LinkMake "Std LinkMake") object loaded from an external document.

### 눈 기호

이는 **나무 보기에 숨겨진 항목 표시** 컨텍스트 메뉴 옵션이 선택 취소된 경우 개체가 나무 보기에서 숨겨짐을 나타냅니다.

### 청록색 얼음 결정

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

이는 상위 항목이 변경될 때 다시 계산되지 않는 고정된 개체를 나타냅니다.

## Preferences

See [Combo view](/Combo_view#Preferences "Combo view").

Retrieved from "<http://wiki.freecad.org/index.php?title=Tree_view/ko&oldid=1495028>"