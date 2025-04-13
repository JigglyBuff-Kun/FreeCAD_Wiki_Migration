---
title: 작업대(Workbench)
---

[Revit](https://en.wikipedia.org/wiki/Autodesk_Revit) 또는 [CATIA](https://en.wikipedia.org/wiki/CATIA)와 같은 많은 최신 디자인 응용 프로그램과 마찬가지로 FreeCAD는 [작업대](https://en.wikipedia.org/wiki/Workbench)개념을 기초로 하고 있습니다. 작업대는 특정 작업을 위해 특별히 그룹화된 도구 모음로 볼 수 있습니다.
전통적인 가구 작업장에는 나무를 다루는 사람을 위한 작업대가 있고, 금속 조각을 다루는 사람을 위한 작업대가 있고, 나무와 금속 부품들을 함께 조립하는 사람을 위한 세 번째 작업대가 있을 것입니다.

FreeCAD 에서, 같은 개념이 적용됩니다. 하나의 작업대에는 해당 작업에 관련된 도구들이 모여 있습니다.

(프리캐드라는 작업장 안에서 작업물을 가지고) 다른 작업대로 이동하면, 화면에서 이용할 수 있는 도구들이 바뀝니다. 툴바, 명령어 바 등의 여러가지 화면 내용이 새로운 작업대에 따라서 바뀌지만, 작업대상물의 모습은 바뀌지 않습니다. 예를 들면, 제도 작업대에서 2D 형태의 그림으로 시작하고, 부품 작업대로 변경해서 계속 작업을 할 수 있습니다.

때로는 작업대를 '모듈'이라고 부르기도 합니다. 그러나 작업대와 모듈은 서로 다른 것입니다. 작업대를 포함하여 FreeCAD의 어떠한 확장 프로그램들은 모두 모듈이지만 작업대는 GUI 구성(도구모음과 메뉴)을 갖춘 특별한 유형의 모듈입니다.

## 내장된 작업대

### 현재

다음 작업대들은 FreeCAD 설치시 묶음으로 같이 제공됩니다.

- ![](/images/Freecad.svg) [표준 기반](/Std_Base/ko "Std Base/ko")은 작업대가 아니라 모든 작업대에서 사용할 수 있는 "표준" 명령들의 모음입니다.

- ![](/images/Workbench_Assembly.svg) [조립 작업대](/Assembly_Workbench/ko "Assembly Workbench/ko")에서는 부품들을 조립합니다. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_BIM.svg) [BIM 작업대](/BIM_Workbench "BIM Workbench")는 건축 요소로 작업하고 [BIM](https://en.wikipedia.org/wiki/Building_information_modeling) 모델을 만들 수 있는[외부 작업대](/External_workbenches/ko "External workbenches/ko")입니다. 건축 작업대와 이전의 외부 BIM 작업대가 결합되었고0.21 and below에서 사용가능 합니다.

- ![](/images/Workbench_CAM.svg) [CAM 작업대](/CAM_Workbench/ko "CAM Workbench/ko")는 G-코드 명령어를 만들 때 사용됩니다. 이 작업대는 0.21 and below에서 이름은"Path 작업대"였습니다.

- ![](/images/Workbench_Draft.svg) [설계제도 작업대](/Draft_Workbench/ko "Draft Workbench/ko")에는 2D 제도 도구와 기본적인 2D 및 3D CAD 작업도구들이 있습니다.

- ![](/images/Workbench_FEM.svg) [FEM 작업대](/FEM_Workbench/ko "FEM Workbench/ko")에서는 유한요소 해석을 할 수 있습니다.

- ![](/images/Workbench_Inspection.svg) [검사 작업대](/Inspection_Workbench/ko "Inspection Workbench/ko")는 형상 검사를 위한 특정 도구를 제공하기 위해 만들어졌습니다. 아직은 개발 초기 단계입니다.

- ![](/images/Workbench_Material.svg) The [Material Workbench](/Material_Workbench "Material Workbench") handles the FreeCAD material system. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_Mesh.svg) [메쉬 작업대](/Mesh_Workbench "Mesh Workbench")에서는 삼각 메시 작업을 합니다 .

- ![](/images/Workbench_OpenSCAD.svg)[OpenSCAD 작업대](/OpenSCAD_Workbench/ko "OpenSCAD Workbench/ko")에서는 OpenSCAD와의 상호 운용성 및 [Constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry")(CSG) 모델 이력을 수리합니다 .

- ![](/images/Workbench_Part.svg) [부품 작업대](/Part_Workbench/ko "Part Workbench/ko") 에서는 기하학적 기본도형 및 부울 연산을 사용하여 작업합니다.

- ![](/images/Workbench_PartDesign.svg) [부품 설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")에서는 스케치로부터 부품을 설계합니다.

- ![](/images/Workbench_Points.svg) [점 작업대](/Points_Workbench/ko "Points Workbench/ko")에서는 점구름 작업을 합니다.

- ![](/images/Workbench_Reverse_Engineering.svg) [역설계 작업대](/Reverse_Engineering_Workbench/ko "Reverse Engineering Workbench/ko")는 형상/솔리드/메시를 파라메트릭 FreeCAD 호환 기능으로 변환하는 특정 도구를 제공하기 위한 것입니다.

- ![](/images/Workbench_Robot.svg) [로봇 작업대](/Robot_Workbench/ko "Robot Workbench/ko") 에서는 로봇의 움직임을 다루는데 현재는 관리되지 않고 있습니다.

- ![](/images/Workbench_Sketcher.svg) [스케치 작업대](/Sketcher_Workbench/ko "Sketcher Workbench/ko")에서는 형상 구속이 있는 스케치를 합니다.

- ![](/images/Workbench_Spreadsheet.svg) [스프레드시트 작업대](/Spreadsheet_Workbench/ko "Spreadsheet Workbench/ko")에서는 스프레드시트 데이터를 생성하고 조할 수 있습니다.

- ![](/images/Workbench_Surface.svg) [표면 작업대](/Surface_Workbench/ko "Surface Workbench/ko")는 표면을 생성하고 수정하는 도구를 제공합니다. 이는 [Part Builder](/Part_Builder "Part Builder")의 가장자리로부터 면 생성 옵션과 유사합니다.

- ![](/images/Workbench_TechDraw.svg) [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko") 에서는 3D모델을 기술도면화 하는 작업을 합니다. 0.20버전 이후 사라진[Drawing Workbench](/Drawing_Workbench "Drawing Workbench")의 후계자입니다.

- ![](/images/Workbench_Test.svg) The [Test Framework Workbench](/Testing "Testing") is for debugging FreeCAD.

### 더 이상 사용되지 않음

아래 작업대들은 프리캐드 0.21판 이후부터는 더이상 포함되지 않습니다.

- ![](/images/Workbench_Start.svg) The [Start Workbench](/Start_Workbench "Start Workbench") allows you to quickly jump to one of the most common workbenches. This workbench has been replaced by the Start page that can be accessed via the [Help menu](/Std_Help_Menu "Std Help Menu").

- ![](/images/Workbench_Web.svg) The [Web Workbench](/Web_Workbench "Web Workbench") provides you with a browser window instead of the [3D view](/3D_view "3D view") within FreeCAD.

The following workbenches are no longer included after version 0.20:

- ![](/images/Workbench_Drawing.svg) The [Drawing Workbench](/Drawing_Workbench "Drawing Workbench") was used for producing technical drawings. The [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") is its more advanced replacement.

- ![](/images/Workbench_Image.svg) The [Image Workbench](/Image_Workbench "Image Workbench") was used for working with bitmap images. Its functionality has been integrated in [Std Base](/Std_Base "Std Base"). See [Std Import](/Std_Import "Std Import") and [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage").

- ![](/images/Workbench_Raytracing.svg) The [Raytracing Workbench](/Raytracing_Workbench "Raytracing Workbench") was used for ray-tracing (rendering). The external [Render Workbench](https://github.com/FreeCAD/FreeCAD-render) should be used instead.

## 외부 작업대

프리캐드의 작업대들은 [python](/Python "Python")으로 프로그램하기가 쉽습니다. 그래서 많은 사람들이 프리캐드의 주 개발 영역 밖에서도 추가적인 작업대들을 만들어 내고 있습니다.

[외부 작업대](/External_workbenches/ko "External workbenches/ko") 페이지에는 이 커뮤니티에 알려진 모든 작업대들이 나열되어 있습니다. [애드온 관리자](/Std_AddonMgr "Std AddonMgr")를 이용해 대부분은 FreeCAD 내에서 쉽게 설치할 수 있습니다.found under menu **Tools → ![](/images/Std_AddonMgr.svg) Addon manager**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Workbenches/ko&oldid=1540534>"
