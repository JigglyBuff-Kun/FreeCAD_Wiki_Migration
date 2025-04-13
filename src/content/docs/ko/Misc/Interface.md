---
title: 인터페이스
---
## 소개

FreeCAD **인터페이스**는 잘 알려진 그래픽 사용자 인터페이스(GUI) 툴킷인 Qt를 기반으로 하며, 특히 Linux에서 사용되지만 Windows 및 MacOS에서도 사용할 수 있습니다.

![](/images/FreeCAD_interface_base_divisions.svg)

v0.19의 표준 인터페이스.

애플리케이션의 기본 창은 대략 11개 섹션으로 나눌 수 있습니다.

1. 다양한 탭 창을 포함할 수 있는 [주요 보기 영역](/Main_view_area/ko "Main view area/ko")
2. [3D 보기](/3D_view/ko "3D view/ko")는 일반적으로 [주요 보기 영역](/Main_view_area/ko "Main view area/ko")에 포함됩니다.
3. [트리 보기](/Tree_view/ko "Tree view/ko") 및 [작업판](/Task_panel/ko "Task panel/ko")을 포함하는 [콤보 보기](/index.php?title=Combo_view/ko&action=edit&redlink=1 "Combo view/ko (page does not exist)")의 상단 부분
4. [속성 편집기](/Property_editor/ko "Property editor/ko")를 포함하는 [콤보 보기](/index.php?title=Combo_view/ko&action=edit&redlink=1 "Combo view/ko (page does not exist)")의 하단 부분
5. [선택 보기](/index.php?title=Selection_view/ko&action=edit&redlink=1 "Selection view/ko (page does not exist)")
6. [보고서 보기](/index.php?title=Report_view/ko&action=edit&redlink=1 "Report view/ko (page does not exist)")
7. [파이썬 콘솔](/Python_console/ko "Python console/ko")
8. [상태 표시줄](/index.php?title=Status_bar/ko&action=edit&redlink=1 "Status bar/ko (page does not exist)")
9. 도구 모음 영역, 도구 모음에 대한 다음 정보를 참조하세요.
10. [작업대 모음](/index.php?title=Std_Workbench/ko&action=edit&redlink=1 "Std Workbench/ko (page does not exist)")
11. [표준메뉴](/Standard_Menu/ko "Standard Menu/ko")

## 인터페이스의 구성 요소

많은 소프트웨어와 마찬가지로 FreeCAD에는 표준 메뉴 표시줄과 사용자 도구가 있는 일련의 도구 모음 및 패널이 포함되어 있습니다.

### 메뉴

[표준 메뉴](/Standard_Menu/ko "Standard Menu/ko")는: [**파일**](/Std_File_Menu "Std File Menu"), [**편집**](/Std_Edit_Menu "Std Edit Menu"), [**보기**](/Std_View_Menu "Std View Menu"), [**도구**](/Std_Tools_Menu "Std Tools Menu"), [**매크로**](/Std_Macro_Menu "Std Macro Menu"), [**창**](/Std_Windows_Menu "Std Windows Menu"), [**도움말**](/Std_Help_Menu "Std Help Menu") 입니다.

### 도구 모음

인터페이스에 나타나는 표준 도구 모음은 다음과 같습니다:

* 파일 도구 모음: 파일 작업, 문서 열기, 복사, 붙여넣기, 실행 취소 및 다시 실행 작업을 수행하는 도구입니다.
* [작업대 모음](/index.php?title=Std_Workbench/ko&action=edit&redlink=1 "Std Workbench/ko (page does not exist)"): 활성 [작업대](/Workbenches/ko "Workbenches/ko")를 선택하는 단일 위젯이 포함되어 있습니다.
* 매크로 도구 모음: [매크로](/Macros/ko "Macros/ko")를 기록, 편집, 실행하는 도구입니다.
* 보기 도구 모음: [3D 보기](/3D_view/ko "3D view/ko")에 개체가 표시되는 방식을 제어하는 ​​도구입니다.
* 구조 도구 모음: 문서의 개체를 구성하고 추가 문서에 대한 링크를 만드는 도구입니

도구 모음 중 하나의 빈 공간을 마우스 오른쪽 버튼으로 클릭하고 원하는 요소를 선택하거나 메뉴, **View → Toolbars**에서 이 기능을 켜고 끌 수 있습니다.

### 패널

개체 작업을 허용하는 기본 패널은 다음과 같습니다.

* [3D 보기](/3D_view/ko "3D view/ko"): 2D 및 3D 기하학이 그려지는 영역입니다.
* [콤보 보기](/index.php?title=Combo_view/ko&action=edit&redlink=1 "Combo view/ko (page does not exist)"): [트리 보기](/Tree_view/ko "Tree view/ko"), [작업 패널](/Task_panel/ko "Task panel/ko"), [속성 편집기](/Property_editor/ko "Property editor/ko")를 포함하는 패널입니다.
* [트리 보기](/Tree_view/ko "Tree view/ko"): 문서의 모든 개체와 해당 매개변수 기록을 표시하는 요소입니다.
* [작업 패널](/Task_panel/ko "Task panel/ko"): 선택한 그리기 도구에 따라 다양한 동작과 옵션을 표시하는 패널입니다.
* [속성 편집기](/Property_editor/ko "Property editor/ko") : 객체의 속성을 수정하는 곳입니다.
* [선택 보기](/index.php?title=Selection_view/ko&action=edit&redlink=1 "Selection view/ko (page does not exist)"): 현재 선택된 요소들을 보여주는 패널입니다.
* [보고서 보기](/index.php?title=Report_view/ko&action=edit&redlink=1 "Report view/ko (page does not exist)"): 애플리케이션과 해당 도구의 다양한 메시지를 표시하는 텍스트 상자입니다.
* [파이썬 콘솔](/index.php?title=Python_consol/ko&action=edit&redlink=1 "Python consol/ko (page does not exist)"): [파이썬](/Python/ko "Python/ko") 코드를 대화형으로 실행하여 [3D 보기](/3D_view/ko "3D view/ko")에서 결과를 볼 수 있는 편집기입니다.
* [상태 표시줄](/index.php?title=Status_bar/ko&action=edit&redlink=1 "Status bar/ko (page does not exist)"): 애플리케이션의 특정 메시지를 표시하는 표시줄이며 [마우스 탐색](/Mouse_navigation/ko "Mouse navigation/ko") 선택기가 있습니다.
* [DAG 보기](/DAG_view/ko "DAG view/ko"): [트리 보기](/Tree_view/ko "Tree view/ko")의 대안으로, 그래프를 통해 서로 다른 개체 간의 관계를 보여줍니다.

3D 보기를 제외하고 상단 도구 모음 중 하나의 빈 공간을 마우스 오른쪽 버튼으로 클릭하고 원하는 요소를 선택하거나 메뉴에서 **View → Panels**를 통해 모두 켜고 끌 수 있습니다.

상태 표시줄을 활성화 및 비활성화하려면 **View → Status bar** 메뉴를 사용하세요.

## 그 밖에

기타 유용한 인터페이스 및 창은 다음과 같습니다:

* [장면 검사기](/index.php?title=Std_SceneInspector/ko&action=edit&redlink=1 "Std SceneInspector/ko (page does not exist)"): [장면 그래프](/index.php?title=Scenegraph/ko&action=edit&redlink=1 "Scenegraph/ko (page does not exist)")를 구성하는 Coin3D 노드를 보여주는 패널입니다. 고급 사용자와 개발자의 경우 장면을 직접 조작하는 작업과 [3D 보기](/3D_view/ko "3D view/ko")에서 생성된 개체의 문제를 해결하는 것이 유용할 수 있습니다.
* [종속성 그래프](/Std_DependencyGraph/ko "Std DependencyGraph/ko"): 보조 프로그램 [[1]](https://graphviz.org/Graphviz)으로 생성된 문서 내 모든 개체의 종속성 그래프를 보여주는 창입니다. [트리 보기](/Tree_view/ko "Tree view/ko") 또는 [DAG 보기](/DAG_view/ko "DAG view/ko")에서 완전히 명확하지 않을 수 있는 순환 종속성과 같은 객체 생성 시 문제를 인식하는 데 도움이 됩니다.

### 사용자 정의

도구 모음에는 더 많거나 적은 버튼이 있을 수 있으며, 다양한 도구를 혼합하여 사용자 정의 도구 모음을 만들고 개발된 매크로를 저장할 수 있습니다.

이러한 옵션은 **Tools → Customize** 메뉴에 있습니다. [인터페이스 사용자 정의](/Interface_Customization/ko "Interface Customization/ko")를 참조하세요.

Retrieved from "<http://wiki.freecad.org/index.php?title=Interface/ko&oldid=1430229>"