---
title: 도면(Drawing)
---
## 소개

FreeCAD에서 "도면(Drawing)"이라는 단어는 일반적으로 [3D 모형](/Model/ko "Model/ko")의 2D 투상을 나타내는 데 사용됩니다. 이는 일반적으로 [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko")에서 생성됩니다.

## 용법

1. [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")등을 통해 만들어진 [3D 모형](/Model/ko "Model/ko")으로 시작합니다. 사실은 2D 대상체를 포함하여 [형상](/Shape/ko "Shape/ko")이 있는 것이면 어느 것이나 가능합니다.
2. [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko")로 전환합니다.
3. ![](/images/TechDraw_PageDefault.svg) [기술도면 기본 페이지](/TechDraw_PageDefault/ko "TechDraw PageDefault/ko") 또는 ![](/images/TechDraw_PageTemplate.svg) [기술도면 페이지 템플릿](/TechDraw_PageTemplate/ko "TechDraw PageTemplate/ko")을 눌러서 페이지를 생성합니다.
4. 기존 모형을 선택한 다음 ![](/images/TechDraw_View.svg) [기술도면 보기](/TechDraw_View/ko "TechDraw View/ko") 또는 ![](/images/TechDraw_ProjectionGroup.svg)[기술도면 투상도](/TechDraw_ProjectionGroup/ko "TechDraw ProjectionGroup/ko")를 누릅니다.
5. 페이지에 2D 투상이 생성됩니다. 이제 데이터**Scale**, 데이터**Rotation** 및 데이터**Direction**과 같은 속성을 조정할 수 있습니다.
6. 도면이 준비되면 이를 다른 소프트웨어에서 추가로 사용하거나 인쇄하기 위해 페이지를 SVG, DXF 또는 PDF 형식으로 내보냅니다. ![](/images/TechDraw_ExportPageSVG.svg) [기술도면 페이지 SVG로 내보내기](/TechDraw_ExportPageSVG/ko "TechDraw ExportPageSVG/ko"), ![](/images/TechDraw_ExportPageDXF.svg) [기술도면 페이지 DXF로 내보내기](/TechDraw_ExportPageDXF/ko "TechDraw ExportPageDXF/ko")를 누를 수 있습니다. 또는 [내보내기](/Std_Export/ko "Std Export/ko")를 사용합니다.

## 보충 설명

일상적 용법에서 "도면(Drawing)"은 [3D 보기](/3D_view/ko "3D view/ko")에 표시되는 기하학적 도형일 수 있습니다. 따라서 그 개념은 "[몸통](/Body/ko "Body/ko")", "[부품](/Part/ko "Part/ko")" 또는 "[모형](/Model/ko "Model/ko")"의 개념과 혼동될 수 있습니다.

그러나 보다 정밀한 작업이 필요한 경우에는 구분이 필요합니다.

* "[몸통](/Body/ko "Body/ko")"([부품설계 작업에서의 몸통](/PartDesign_Body/ko "PartDesign Body/ko"))은 [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko")에서 만들어지는 [Part Feature](/Part_Feature "Part Feature")(`Part::Feature` 클래스)에서 파생되어 생성된 대상체입니다.
* "[부품(Part)](/Part/ko "Part/ko")"([App Part](/App_Part "App Part"))은 여러 "[몸통들](/Body/ko "Body/ko")"를 모두어 조립품를 구성하는 데 사용됩니다.
* "도면"은 3D"몸통" 또는 "부품"의 2D 투상입니다.

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing/ko&oldid=1567265>"