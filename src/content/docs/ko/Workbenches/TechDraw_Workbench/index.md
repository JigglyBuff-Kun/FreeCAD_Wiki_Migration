---
title: 기술도면 작업대(TechDraw Workbench)
---

![](/images/Workbench_TechDraw.svg)

기술도면 작업대 아이콘

## 소개

![](/images/Workbench_TechDraw.svg) **기술도면 작업대**는 [부품 작업대](/Part_Workbench/ko "Part Workbench/ko"), [부품설계 작업대](/PartDesign_Workbench/ko "PartDesign Workbench/ko") 또는 [BIM 작업대](/BIM_Workbench/ko "BIM Workbench/ko")와 같은 다른 작업대에서 생성되거나 다른 응용 프로그램에서 가져온 3D 모형에서 기본적인 기술 도면을 생성하는 데 사용됩니다. 각 도면은 페이지이며, 여기에는 Part::Features, PartDesign::Bodies, App::Part 그룹, Document Object 그룹 등 그릴 수 있는 다양한 대상체가 포함될 수 있습니다. 생성된 도면은 문서, 제조 지침, 계약서, 허가서 등에 사용할 수 있습니다.

치수, 단면, 해칭 영역, 주석 및 [SVG](/SVG/ko "SVG/ko") 기호를 페이지에 추가할 수 있습니다.이 페이지는 [DXF](/DXF/ko "DXF/ko"), [SVG](/SVG/ko "SVG/ko") 및 [PDF](/PDF/ko "PDF/ko")와 같은 다른 형식으로 추가로 내보낼 수 있습니다.

여러분의 주요 목표가 복잡한 2D 도면 및 [DXF](/DXF/ko "DXF/ko") 파일 제작이고 3D 모형이 필요하지 않은 경우라면, 프리캐드는 적당한 선택이 아닐 수 있습니다. 대신 [LibreCAD](https://en.wikipedia.org/wiki/LibreCAD) 또는 [QCad](https://en.wikipedia.org/wiki/QCad)와 같이 기술 도면 작성을 위한 전용 프로그램을 고려해 볼 수도 있습니다.

![](/images/TechDraw_Workbench_Example.png)

### 포착하기(捕捉,Snapping)

[1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0"): 기술도면 작업대에는 포착 기능이 있습니다. 마우스로 드래그하여 뷰, 단면도 및 치수를 배치할 때 자동으로 정렬하는 데 사용할 수 있습니다. [환경 설정](/TechDraw_Preferences#Snapping "TechDraw Preferences")에서 **스냅 뷰 정렬**을 활성화(기본값)하면, 충분히 가까울 때(**뷰 스냅 계수** 설정) 뷰가 다른 뷰와 정렬되도록 포착됩니다. 치수는 다른 평행 치수에도 포착되고 치수 텍스트는 치수선의 중앙에 포착될 수 있습니다. Alt 키를 누르고 있으면 포착기능을 일시적으로 비활성화할 수 있습니다.

## 도구

### 페이지

- ![](/images/TechDraw_PageDefault.svg) [기본 페이지 삽입](/TechDraw_PageDefault/ko "TechDraw PageDefault/ko"): 기본 [템플릿](/TechDraw_Templates/ko "TechDraw Templates/ko")을 사용하여 새 페이지를 추가합니다.

- ![](/images/TechDraw_PageTemplate.svg) [템플릿을 사용하여 페이지 삽입](/TechDraw_PageTemplate/ko "TechDraw PageTemplate/ko"): 선택한 [템플릿](/TechDraw_Templates/ko "TechDraw Templates/ko")을 사용하여 새 페이지를 추가합니다.

- ![](/images/TechDraw_FillTemplateFields.svg) [템플릿 필드 갱신](/TechDraw_FillTemplateFields/ko "TechDraw FillTemplateFields/ko"): [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_RedrawPage.svg) [페이지 다시 그리기](/TechDraw_RedrawPage/ko "TechDraw RedrawPage/ko"): 선택한 페이지를 강제로 갱신합니다.

- ![](/images/TechDraw_PrintAll.svg) [모든 페이지 인쇄](/TechDraw_PrintAll/ko "TechDraw PrintAll/ko"): 문서의 모든 페이지를 인쇄합니다. [0.21 버전부터 도입](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_ExportPageSVG.svg) [페이지를 SVG로 내보내기](/TechDraw_ExportPageSVG/ko "TechDraw ExportPageSVG/ko"): 현재 페이지를 [SVG](/SVG/ko "SVG/ko") 파일로 저장합니다.

- ![](/images/TechDraw_ExportPageDXF.svg) [페이지를 DXF로 내보내기](/TechDraw_ExportPageDXF/ko "TechDraw ExportPageDXF/ko"): 현재 페이지를 [DXF](/DXF/ko "DXF/ko") 파일로 저장합니다.

### 보기(View)

#### 기술도면 보기(view)

- ![](/images/TechDraw_View.svg) [보기 삽입](/TechDraw_View/ko "TechDraw View/ko"): 하나 이상의 대상체를 기술도면 페이지에 넣습니다. [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0"): 단일 보기, [투상 모둠](/TechDraw_ProjectionGroup/ko "TechDraw ProjectionGroup/ko"), [스프레드시트 보기](/index.php?title=TechDraw_SpreadsheetView/ko&action=edit&redlink=1 "TechDraw SpreadsheetView/ko (page does not exist)"), [아치 보기](/index.php?title=TechDraw_ArchView/ko&action=edit&redlink=1 "TechDraw ArchView/ko (page does not exist)"), [기호](/index.php?title=TechDraw_Symbo/kol&action=edit&redlink=1 "TechDraw Symbo/kol (page does not exist)") 또는 [화상 보기](/TechDraw_Image/ko "TechDraw Image/ko")를 생성할 수 있습니다.

- ![](/images/TechDraw_BrokenView.svg) [분할 보기 삽입](/index.php?title=TechDraw_BrokenView/ko&action=edit&redlink=1 "TechDraw BrokenView/ko (page does not exist)"): 하나 이상의 대상체에 대한 분할 보기를 추가합니다. [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_SectionView.svg) [단면도 삽입](/TechDraw_SectionView/ko "TechDraw SectionView/ko"): 기존 보기의 단면도를 삽입합니다.

- ![](/images/TechDraw_ComplexSection.svg) [복합 단면도 삽입](/TechDraw_ComplexSection/ko "TechDraw ComplexSection/ko"): 윤곽선을 기반으로 기존 보기의 절단면도를 삽입합니다. [0.21 버전부터 도입](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_DetailView.svg) [상세보기 삽입](/TechDraw_DetailView/ko "TechDraw DetailView/ko"): 기존 보기의 일부에 대한 상세보기를 삽입합니다.

- ![](/images/TechDraw_ProjectionGroup.svg) [투상도 삽입](/TechDraw_ProjectionGroup/ko "TechDraw ProjectionGroup/ko"): 다양한 방향에서 대상체의 여러 가지 보기를 생성하기 위한 대화 상자를 호출합니다. [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0"): [보기 삽입](/TechDraw_View/ko "TechDraw View/ko") 도구를 대신 사용할 수 있습니다.

- ![](/images/TechDraw_ClipGroup.svg) [Insert Clip Group](/TechDraw_ClipGroup "TechDraw ClipGroup"): inserts a clip group.

- ![](/images/TechDraw_Symbol.svg) [Insert SVG Symbol](/TechDraw_Symbol "TechDraw Symbol"): inserts a symbol from a [SVG](/SVG "SVG") file into a page. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The [Insert View](/TechDraw_View "TechDraw View") tool can be used instead.

- ![](/images/TechDraw_Image.svg) [Insert Bitmap Image](/TechDraw_Image "TechDraw Image"): inserts a PNG or JPG [bitmap](/Bitmap "Bitmap") image into a page. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The [Insert View](/TechDraw_View "TechDraw View") tool can be used instead.

- ![](/images/TechDraw_ShareView.svg) [Share View](/TechDraw_ShareView "TechDraw ShareView"): shares a view between multiple pages.

- ![](/images/TechDraw_ToggleFrame.svg) [보기틀 켜기/끄기](/TechDraw_ToggleFrame/ko "TechDraw ToggleFrame/ko"): 보기 주변의 틀과 이름표를 켜거나 끕니다.

- ![](/images/TechDraw_ProjectShape.svg) [Project Shape](/TechDraw_ProjectShape "TechDraw ProjectShape"): creates projections of shapes in the [3D view](/3D_view "3D view").

#### 다른 작업대에의 보기(view)

- ![](/images/TechDraw_ActiveView.svg) [활성화된 보기 삽입](/TechDraw_ActiveView/ko "TechDraw ActiveView/ko"): 활성화된 3D보기의 장면을 삽입합니다.

- ![](/images/TechDraw_DraftView.svg) [Insert Draft Workbench Object](/TechDraw_DraftView "TechDraw DraftView"): inserts a view of a [Draft Workbench](/Draft_Workbench "Draft Workbench") object.

- ![](/images/TechDraw_ArchView.svg) [Insert BIM Workbench Object](/TechDraw_ArchView "TechDraw ArchView"): inserts a view of a [BIM Workbench](/BIM_Workbench "BIM Workbench") [Arch Section Plane](/Arch_SectionPlane "Arch SectionPlane") object. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): The [Insert View](/TechDraw_View "TechDraw View") tool can be used instead.

- ![](/images/TechDraw_SpreadsheetView.svg) [스프레드시트 보기 삽입](/index.php?title=TechDraw_SpreadsheetView/ko&action=edit&redlink=1 "TechDraw SpreadsheetView/ko (page does not exist)"): [스프레드시트 작업대](/Spreadsheet_Workbench/ko "Spreadsheet Workbench/ko") 시트의 보기를 삽입합니다. [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0"):[보기 삽입](/TechDraw_View/ko "TechDraw View/ko") 도구를 대신 사용할 수 있습니다.

### 적층

아래의 도구는 페이지에서 보기의 겉보기 깊이를 제어하는 ​​적층 순서를 변경하기 위한 도구입니다.

- ![](/images/TechDraw_StackTop.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 적층 순서 조정:

- ![](/images/TechDraw_StackTop.svg) [층의 맨 위로 보기 이동](/index.php?title=TechDraw_StackTop/ko&action=edit&redlink=1 "TechDraw StackTop/ko (page does not exist)"): 보기를 적층 순서에서 맨 위로 이동합니다. [0.21 버전부터 도입](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_StackBottom.svg) [층의 맨 아래로 보기 이동](/index.php?title=TechDraw_StackBottom/ko&action=edit&redlink=1 "TechDraw StackBottom/ko (page does not exist)"): 보기를 적층 순서의 맨 아래로 이동합니다.[0.21 버전부터 도입](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_StackUp.svg) [보기를 한 단계 위로 이동](/index.php?title=TechDraw_StackUp/ko&action=edit&redlink=1 "TechDraw StackUp/ko (page does not exist)"): 보기를 적층 순서에서 한 단계 위로 이동합니다. [0.21 버전부터 도입](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_StackDown.svg) [보기를 한 단계 아래로 이동](/index.php?title=TechDraw_StackDown/ko&action=edit&redlink=1 "TechDraw StackDown/ko (page does not exist)"): 보기를 적층 순서에서 한 단계 아래로 이동합니다. [0.21 버전부터 도입](/Release_notes_0.21 "Release notes 0.21")

### 치수

- ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 치수:

- ![](/images/TechDraw_Dimension.svg) [치수 삽입](/TechDraw_Dimension/ko "TechDraw Dimension/ko"): 상황에 맞는 치수를 추가합니다. [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_LengthDimension.svg) [길이 치수 삽입](/TechDraw_LengthDimension/ko "TechDraw LengthDimension/ko"): 길이 치수를 추가합니다.

- ![](/images/TechDraw_HorizontalDimension.svg) [수평 치수 삽입](/TechDraw_HorizontalDimension/ko "TechDraw HorizontalDimension/ko"): 수평 길이 치수를 추가합니다.

- ![](/images/TechDraw_VerticalDimension.svg) [수직 치수 삽입](/TechDraw_VerticalDimension/ko "TechDraw VerticalDimension/ko"): 수직 길이 치수를 추가합니다.

- ![](/images/TechDraw_RadiusDimension.svg) [반지름 치수 삽입](/TechDraw_RadiusDimension/ko "TechDraw RadiusDimension/ko"): 원이나 원호에 반지름 치수를 추가합니다.

- ![](/images/TechDraw_DiameterDimension.svg) [지름 치수 삽입](/TechDraw_DiameterDimension/ko "TechDraw DiameterDimension/ko"): 원이나 원호에 지름 치수를 추가합니다.

- ![](/images/TechDraw_AngleDimension.svg) [각도 치수 삽입](/TechDraw_AngleDimension/ko "TechDraw AngleDimension/ko"): 두 직선 사이에 각도 치수를 추가합니다.

- ![](/images/TechDraw_3PtAngleDimension.svg) [3점 각도 치수 삽입](/TechDraw_3PtAngleDimension/ko "TechDraw 3PtAngleDimension/ko"): 3개의 점을 사용하여 각도 치수를 추가합니다.

- ![](/images/TechDraw_AreaDimension.svg) [면적 주석 삽입](/TechDraw_AreaDimension/ko "TechDraw AreaDimension/ko"): 면에 면적 치수를 추가합니다. [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_ExtensionCreateLengthArc.svg) [호 길이 치수 삽입](/TechDraw_ExtensionCreateLengthArc/ko "TechDraw ExtensionCreateLengthArc/ko"): 호 길이 치수를 생성합니다.

- ![](/images/TechDraw_HorizontalExtentDimension.svg) [수평 범위 치수 삽입](/TechDraw_HorizontalExtentDimension/ko "TechDraw HorizontalExtentDimension/ko"): 수평 범위 치수를 추가합니다.

- ![](/images/TechDraw_VerticalExtentDimension.svg) [수직 범위 치수 삽입](/TechDraw_VerticalExtentDimension/ko "TechDraw VerticalExtentDimension/ko"): 수직 범위 치수를 추가합니다.

- ![](/images/TechDraw_ExtensionCreateHorizChainDimension.svg) [수평 직렬 치수 삽입](/TechDraw_ExtensionCreateHorizChainDimension/ko "TechDraw ExtensionCreateHorizChainDimension/ko"): 직렬로 정렬된 수평 치수들을 추가합니다.

- ![](/images/TechDraw_ExtensionCreateVertChainDimension.svg) [수직 직렬 치수 삽입](/index.php?title=TechDraw_ExtensionCreateVertChainDimension/ko&action=edit&redlink=1 "TechDraw ExtensionCreateVertChainDimension/ko (page does not exist)"): 직렬로 정렬된 수직 치수들을 추가합니다.

- ![](/images/TechDraw_ExtensionCreateObliqueChainDimension.svg) [경사 직렬 치수 삽입](/index.php?title=TechDraw_ExtensionCreateObliqueChainDimension/ko&action=edit&redlink=1 "TechDraw ExtensionCreateObliqueChainDimension/ko (page does not exist)"): 직렬로 정렬된 경사 치수들을 추가합니다.

- ![](/images/TechDraw_ExtensionCreateHorizCoordDimension.svg) [수평 병렬 치수 삽입](/TechDraw_ExtensionCreateHorizCoordDimension/ko "TechDraw ExtensionCreateHorizCoordDimension/ko"): 동일한 기준선에서 시작하여 균일하게 간격이 떨어진 여러 개의 수평 치수들을 병렬로 추가합니다.

- ![](/images/TechDraw_ExtensionCreateVertCoordDimension.svg) [수직 병렬 치수 삽입](/index.php?title=TechDraw_ExtensionCreateVertCoordDimension/ko&action=edit&redlink=1 "TechDraw ExtensionCreateVertCoordDimension/ko (page does not exist)"): 동일한 기준선에서 시작하여 균일하게 간격이 떨어진 여러 개의 수직 치수들을 병렬로 추가합니다.

- ![](/images/TechDraw_ExtensionCreateObliqueCoordDimension.svg) [경사 병렬 치수 삽입](/index.php?title=TechDraw_ExtensionCreateObliqueCoordDimension/ko&action=edit&redlink=1 "TechDraw ExtensionCreateObliqueCoordDimension/ko (page does not exist)"): 동일한 기준선에서 시작하여 균일하게 간격이 떨어진 여러 개의 경사 치수들을 병렬로 추가합니다.

- ![](/images/TechDraw_ExtensionCreateHorizChamferDimension.svg) [수평 모따기 치수 삽입](/TechDraw_ExtensionCreateHorizChamferDimension/ko "TechDraw ExtensionCreateHorizChamferDimension/ko"): 모따기의 수평 크기와 각도 치수를 추가합니다.

- ![](/images/TechDraw_ExtensionCreateVertChamferDimension.svg) [수직 모따기 치수 삽입](/index.php?title=TechDraw_ExtensionCreateVertChamferDimension/ko&action=edit&redlink=1 "TechDraw ExtensionCreateVertChamferDimension/ko (page does not exist)"): 모따기의 수직 크기와 각도 치수를 생성합니다

- ![](/images/TechDraw_Balloon.svg) [풍선 주석 삽입](/TechDraw_Balloon/ko "TechDraw Balloon/ko"): 페이지에 "풍선" 주석을 추가합니다.

- ![](/images/TechDraw_AxoLengthDimension.svg) [축측 길이 치수 삽입](/TechDraw_AxoLengthDimension/ko "TechDraw AxoLengthDimension/ko"): 축측 길이 치수를 추가합니다. [0.21 버전부터 도입](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_LandmarkDimension.svg) [Insert Landmark Dimension - EXPERIMENTAL](/TechDraw_LandmarkDimension "TechDraw LandmarkDimension"): adds a landmark distance dimension.

- ![](/images/TechDraw_DimensionRepair.svg) [Dimension Repair](/TechDraw_DimensionRepair "TechDraw DimensionRepair"): can adjust the 2D or 3D geometry references of a dimension. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_LinkDimension.svg) [3D 도형에 치수 연결](/index.php?title=TechDraw_LinkDimension/ko&action=edit&redlink=1 "TechDraw LinkDimension/ko (page does not exist)"): 기존 치수를 3D 도형에 연결합니다(더 이상 지원되지 않음).

### 선무늬 넣기(Hatching)

- ![](/images/TechDraw_Hatch.svg) [이미지 파일을 사용하여 무늬 넣기](/TechDraw_Hatch/ko "TechDraw Hatch/ko"): 선무늬 파일을 면에 적용합니다.

- ![](/images/TechDraw_GeometricHatch.svg) [면에 기하학적 무늬 적용](/TechDraw_GeometricHatch/ko "TechDraw GeometricHatch/ko"): Autodesk PAT 사양을 사용하여 면에 선무늬를 적용합니다.

### 주석

- ![](/images/TechDraw_Annotation.svg) [주석 삽입](/TechDraw_Annotation/ko "TechDraw Annotation/ko"): 일반 글자 블록을 주석으로 추가합니다.

- ![](/images/TechDraw_LeaderLine.svg) [지시선 삽입](/TechDraw_LeaderLine/ko "TechDraw LeaderLine/ko"): 보기에 지시선을 추가합니다.

- ![](/images/TechDraw_RichTextAnnotation.svg) [서식 있는 주석 삽입](/TechDraw_RichTextAnnotation/ko "TechDraw RichTextAnnotation/ko"): 지시선이나 보기에 서식 있는 주석을 추가합니다.

- ![](/images/TechDraw_CosmeticVertex.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 꾸밈 점 삽입:

- ![](/images/TechDraw_CosmeticVertex.svg) [꾸밈점 추가](/TechDraw_CosmeticVertex/ko "TechDraw CosmeticVertex/ko"): 원래의 도형에는 없는 점을 추가합니다.

- ![](/images/TechDraw_Midpoints.svg) [중간점 추가](/TechDraw_Midpoints/ko "TechDraw Midpoints/ko"): 선택한 모서리에 중간점을 추가합니다.

- ![](/images/TechDraw_Quadrants.svg) [사분점 추가](/TechDraw_Quadrants/ko "TechDraw Quadrants/ko"): 선택한 (원형) 모서리에 사분점을 추가합니다.

- ![](/images/TechDraw_FaceCenterLine.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 중심선 삽입:

- ![](/images/TechDraw_FaceCenterLine.svg) [면에 중심선 추가](/TechDraw_FaceCenterLine/ko "TechDraw FaceCenterLine/ko"): 선택한 면에 중심선을 추가합니다.

- ![](/images/TechDraw_2LineCenterLine.svg) [2개 선 사이에 중심선 추가](/TechDraw_2LineCenterLine/ko "TechDraw 2LineCenterLine/ko"): 2개 선 사이에 중심선을 추가합니다.

- ![](/images/TechDraw_2PointCenterLine.svg) [2개 점 사이에 중심선 추가](/TechDraw_2PointCenterLine/ko "TechDraw 2PointCenterLine/ko"): 2개 점 사이에 중심선을 추가합니다.

- ![](/images/TechDraw_2PointCosmeticLine.svg) [2개의 점을 통과하는 꾸밈선 추가](/TechDraw_2PointCosmeticLine/ko "TechDraw 2PointCosmeticLine/ko"): 2개의 꼭지점을 연결하는 꾸밈선을 추가합니다.

- ![](/images/TechDraw_CosmeticCircle.svg) [꾸밈 원 추가](/TechDraw_CosmeticCircle/ko "TechDraw CosmeticCircle/ko"): 꾸밈 원을 추가합니다. [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_DecorateLine.svg) [선 외형 변경](/TechDraw_DecorateLine/ko "TechDraw DecorateLine/ko"): 선택한 선의 모양과 색상을 변경합니다.

- ![](/images/TechDraw_ShowAll.svg) [보이지 않는 모서리 표시/숨기기](/TechDraw_ShowAll/ko "TechDraw ShowAll/ko"): 보기에서 보이지 않는 선/모서리를 표시하거나 숨깁니다.

- ![](/images/TechDraw_WeldSymbol.svg) [지시선에 용접 정보 추가](/TechDraw_WeldSymbol/ko "TechDraw WeldSymbol/ko"): 기존 지시선에 용접 사양을 추가합니다.

- ![](/images/TechDraw_SurfaceFinishSymbols.svg) [표면 마감 기호 추가](/TechDraw_SurfaceFinishSymbols/ko "TechDraw SurfaceFinishSymbols/ko"): 페이지에 표면 마감 기호를 추가합니다. [0.21 버전부터 도입](/Release_notes_0.21 "Release notes 0.21")

- ![](/images/TechDraw_HoleShaftFit.svg) [구멍/축 맞춤 추가](/TechDraw_HoleShaftFit/ko "TechDraw HoleShaftFit/ko"): ISO 286을 사용하여 치수에 구멍 또는 축 허용 오차를 추가합니다. [0.21 버전부터 도입](/Release_notes_0.21 "Release notes 0.21")

### 확장

#### 속성 및 수정

- ![](/images/TechDraw_ExtensionSelectLineAttributes.svg) [Select Line Attributes, Cascade Spacing and Delta Distance](/TechDraw_ExtensionSelectLineAttributes "TechDraw ExtensionSelectLineAttributes"): selects the attributes (style, width and color) for new cosmetic lines and centerlines, and specifies the cascade spacing and delta distance.

- ![](/images/TechDraw_ExtensionChangeLineAttributes.svg) [선 속성 변경](/TechDraw_ExtensionChangeLineAttributes/ko "TechDraw ExtensionChangeLineAttributes/ko"): 미용선과 중심선의 속성(스타일, 너비 및 색상)을 변경합니다.

- ![](/images/TechDraw_ExtensionExtendLine.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 꾸밈선 또는 중심선의 길이 변경:

- ![](/images/TechDraw_ExtensionExtendLine.svg) [선 연장](/TechDraw_ExtensionExtendLine/ko "TechDraw ExtensionExtendLine/ko"): 양쪽 끝에서 꾸밈선이나 중심선을 연장합니다.

- ![](/images/TechDraw_ExtensionShortenLine.svg) [선 단축](/TechDraw_ExtensionShortenLine/ko "TechDraw ExtensionShortenLine/ko"): 양쪽 끝에서 꾸밈선이나 중심선을 단축합니다.

- ![](/images/TechDraw_ExtensionLockUnlockView.svg) [Lock/Unlock View](/TechDraw_ExtensionLockUnlockView "TechDraw ExtensionLockUnlockView"): locks or unlocks the position of a view.

- ![](/images/TechDraw_ExtensionPositionSectionView.svg) [Position Section View](/TechDraw_ExtensionPositionSectionView "TechDraw ExtensionPositionSectionView"): orthogonally aligns a section view with its source view.

- ![](/images/TechDraw_ExtensionPosHorizChainDimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Align Dimensions:

- ![](/images/TechDraw_ExtensionPosHorizChainDimension.svg) [Position Horizontal Chain Dimensions](/TechDraw_ExtensionPosHorizChainDimension "TechDraw ExtensionPosHorizChainDimension"): aligns horizontal dimensions to create a chain dimension.

- ![](/images/TechDraw_ExtensionPosVertChainDimension.svg) [Position Vertical Chain Dimensions](/TechDraw_ExtensionPosVertChainDimension "TechDraw ExtensionPosVertChainDimension"): aligns vertical dimensions to create a chain dimension.

- ![](/images/TechDraw_ExtensionPosObliqueChainDimension.svg) [Position Oblique Chain Dimensions](/TechDraw_ExtensionPosObliqueChainDimension "TechDraw ExtensionPosObliqueChainDimension"): aligns oblique dimensions to create a chain dimension.

- ![](/images/TechDraw_ExtensionCascadeHorizDimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Evenly Space Dimensions:

- ![](/images/TechDraw_ExtensionCascadeHorizDimension.svg) [Cascade Horizontal Dimensions](/TechDraw_ExtensionCascadeHorizDimension "TechDraw ExtensionCascadeHorizDimension"): evenly spaces horizontal dimensions.

- ![](/images/TechDraw_ExtensionCascadeVertDimension.svg) [Cascade Vertical Dimensions](/TechDraw_ExtensionCascadeVertDimension "TechDraw ExtensionCascadeVertDimension"): evenly spaces vertical dimensions.

- ![](/images/TechDraw_ExtensionCascadeObliqueDimension.svg) [Cascade Oblique Dimensions](/TechDraw_ExtensionCascadeObliqueDimension "TechDraw ExtensionCascadeObliqueDimension"): evenly spaces oblique dimensions.

- ![](/images/TechDraw_ExtensionAreaAnnotation.svg) [Calculate the area of selected faces](/TechDraw_ExtensionAreaAnnotation "TechDraw ExtensionAreaAnnotation"): calculates the area of selected faces and inserts an area annotation.

- ![](/images/TechDraw_ExtensionArcLengthAnnotation.svg) [Calculate the arc length of selected edges](/TechDraw_ExtensionArcLengthAnnotation "TechDraw ExtensionArcLengthAnnotation"): calculates the arc length of selected edges and inserts an arc length annotation. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_ExtensionCustomizeFormat.svg) [Customize format label](/TechDraw_ExtensionCustomizeFormat "TechDraw ExtensionCustomizeFormat"): customizes the formatting of a balloon text or dimension text. GD&T symbols and other special character can be added.

#### 중심선과 나사선

- ![](/images/TechDraw_ExtensionCircleCenterLines.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 중심선 추가:

- ![](/images/TechDraw_ExtensionCircleCenterLines.svg) [원 중심선 추가](/TechDraw_ExtensionCircleCenterLines/ko "TechDraw ExtensionCircleCenterLines/ko"): 원과 호에 중심선을 추가합니다.

- ![](/images/TechDraw_ExtensionHoleCircle.svg) [볼트 원 중심선 추가](/index.php?title=TechDraw_ExtensionHoleCircle/ko&action=edit&redlink=1 "TechDraw ExtensionHoleCircle/ko (page does not exist)"):원형 패턴에 중심선을 추가합니다.

- ![](/images/TechDraw_ExtensionThreadHoleSide.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 꾸밈 나사선 추가:

- ![](/images/TechDraw_ExtensionThreadHoleSide.svg) [Add Cosmetic Thread Hole Side View](/TechDraw_ExtensionThreadHoleSide "TechDraw ExtensionThreadHoleSide"): adds a cosmetic thread to the side view of a hole.

- ![](/images/TechDraw_ExtensionThreadHoleBottom.svg) [Add Cosmetic Thread Hole Bottom View](/TechDraw_ExtensionThreadHoleBottom "TechDraw ExtensionThreadHoleBottom"): adds a cosmetic thread to the top or bottom view of holes.

- ![](/images/TechDraw_ExtensionThreadBoltSide.svg) [Add Cosmetic Thread Bolt Side View](/TechDraw_ExtensionThreadBoltSide "TechDraw ExtensionThreadBoltSide"): adds a cosmetic thread to the side view of a bolt/screw/rod.

- ![](/images/TechDraw_ExtensionThreadBoltBottom.svg) [Add Cosmetic Thread Bolt Bottom View](/TechDraw_ExtensionThreadBoltBottom "TechDraw ExtensionThreadBoltBottom"): adds a cosmetic thread to the top or bottom view of bolts/screws/rods.

- ![](/images/TechDraw_ExtensionVertexAtIntersection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Add Vertexes:

- ![](/images/TechDraw_ExtensionVertexAtIntersection.svg) [Add Cosmetic Intersection Vertex(es)](/TechDraw_ExtensionVertexAtIntersection "TechDraw ExtensionVertexAtIntersection"): adds cosmetic vertex(es) at the intersection(s) of selected edges.

- ![](/images/TechDraw_CommandAddOffsetVertex.svg) [Add an offset vertex](/TechDraw_CommandAddOffsetVertex "TechDraw CommandAddOffsetVertex"): adds a cosmetic vertex at a specified offset from a selected vertex. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_ExtensionDrawCosmCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Add Cosmetic Circles or Arcs:

- ![](/images/TechDraw_ExtensionDrawCosmCircle.svg) [Add Cosmetic Circle](/TechDraw_ExtensionDrawCosmCircle "TechDraw ExtensionDrawCosmCircle"): adds a cosmetic circle based on two vertexes.

- ![](/images/TechDraw_ExtensionDrawCosmArc.svg) [Add Cosmetic Arc](/TechDraw_ExtensionDrawCosmArc "TechDraw ExtensionDrawCosmArc"): adds a cosmetic counter clockwise arc based on three vertexes.

- ![](/images/TechDraw_ExtensionDrawCosmCircle3Points.svg) [Add Cosmetic Circle 3 Points](/TechDraw_ExtensionDrawCosmCircle3Points "TechDraw ExtensionDrawCosmCircle3Points"): adds a cosmetic circle based on three vertexes.

- ![](/images/TechDraw_ExtensionLineParallel.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Add Cosmetic Parallel or Perpendicular Lines:

- ![](/images/TechDraw_ExtensionLineParallel.svg) [Add Cosmetic Parallel Line](/TechDraw_ExtensionLineParallel "TechDraw ExtensionLineParallel"): adds a cosmetic line parallel to another line through a vertex.

- ![](/images/TechDraw_ExtensionLinePerpendicular.svg) [Add Cosmetic Perpendicular Line](/TechDraw_ExtensionLinePerpendicular "TechDraw ExtensionLinePerpendicular"): adds a cosmetic line perpendicular to another line through a vertex.

### 치수

몇 가지 확장 치수 도구는 위의 [치수](#치수)에 나열되어 있습니다.

- ![](/images/TechDraw_ExtensionInsertDiameter.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 접두사 삽입:

- ![](/images/TechDraw_ExtensionInsertDiameter.svg) ['⌀' 접두사 삽입](/TechDraw_ExtensionInsertDiameter/ko "TechDraw ExtensionInsertDiameter/ko"): 치수 시작 부분에 '⌀' 기호를 삽입합니다.

- ![](/images/TechDraw_ExtensionInsertSquare.svg) ['□' 접두사 삽입](/index.php?title=TechDraw_ExtensionInsertSquare/ko&action=edit&redlink=1 "TechDraw ExtensionInsertSquare/ko (page does not exist)"): 치수 시작 부분에 '□' 기호를 삽입합니다.

- ![](/images/TechDraw_ExtensionInsertRepetition.svg) ['n×' 접두사 삽입](/index.php?title=TechDraw_ExtensionInsertRepetition/ko&action=edit&redlink=1 "TechDraw ExtensionInsertRepetition/ko (page does not exist)"): 치수 시작 부분에 반복되는 도형특징의 갯수를 삽입합니다. [1.0 버전부터 도입](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/TechDraw_ExtensionRemovePrefixChar.svg) [접두사 제거](/index.php?title=TechDraw_ExtensionRemovePrefixChar/ko&action=edit&redlink=1 "TechDraw ExtensionRemovePrefixChar/ko (page does not exist)"): 치수 시작 부분의 모든 기호를 제거합니다.

- ![](/images/TechDraw_ExtensionIncreaseDecimal.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) 소수점 자릿수 변경:

- ![](/images/TechDraw_ExtensionIncreaseDecimal.svg) [소수점 자릿수 늘리기](/index.php?title=TechDraw_ExtensionIncreaseDecimal/ko&action=edit&redlink=1 "TechDraw ExtensionIncreaseDecimal/ko (page does not exist)"): 치수의 소수점 자릿수를 늘립니다.

- ![](/images/TechDraw_ExtensionDecreaseDecimal.svg) [소수점 자릿수 감소](/index.php?title=TechDraw_ExtensionDecreaseDecimal/ko&action=edit&redlink=1 "TechDraw ExtensionDecreaseDecimal/ko (page does not exist)"): 치수의 소수점 자릿수를 감소시킵니다.

### 기타 도구

- ![](/images/TechDraw_CosmeticEraser.svg) [꾸밈 대상체 제거](/index.php?title=TechDraw_CosmeticEraser/ko&action=edit&redlink=1 "TechDraw CosmeticEraser/ko (page does not exist)"): 페이지에서 꾸밈 대상체를 제거합니다.

### 폐기된 도구들

- ![](/images/TechDraw_ClipGroupAdd.svg) [클립 그룹에 보기 추가](/index.php?title=TechDraw_ClipGroupAdd/ko&action=edit&redlink=1 "TechDraw ClipGroupAdd/ko (page does not exist)"): 기존 보기를 클립 그룹에 추가합니다. 1.0 and above에서는 사용할 수 없습니다.

- ![](/images/TechDraw_ClipGroupRemove.svg) [클립 그룹에서 보기 제거](/index.php?title=TechDraw_ClipGroupRemove/ko&action=edit&redlink=1 "TechDraw ClipGroupRemove/ko (page does not exist)"): 클립 그룹에서 보기를 제거합니다. 1.0 and above에서는 사용할 수 없습니다.

- ![](/images/TechDraw_MoveView.svg) [보기 이동](/index.php?title=TechDraw_MoveView/ko&action=edit&redlink=1 "TechDraw MoveView/ko (page does not exist)"): 보기와 종속 보기를 다른 페이지로 이동합니다. 1.0 and above에서는 사용할 수 없습니다.

## 추가적인 기능

- [선 그룹](/index.php?title=TechDraw_LineGroup/ko&action=edit&redlink=1 "TechDraw LineGroup/ko (page does not exist)"): 다양한 유형의 선 모양을 제어합니다.
- [템플릿](/TechDraw_Templates/ko "TechDraw Templates/ko"): 도면 페이지에 대해 정의된 기본 템플릿입니다.
- [선무늬 넣기(Hatching)](/TechDraw_Hatching/ko "TechDraw Hatching/ko"): 다양한 선무늬 넣기 기술에 대한 설명입니다.
- [기하학적 치수 지정 및 허용 오차](/TechDraw_Geometric_dimensioning_and_tolerancing/ko "TechDraw Geometric dimensioning and tolerancing/ko"): 기하학적 치수 지정 및 허용 오차를 달성하는 방법에 대한 설명입니다.

## 환경설정

- ![](/images/Preferences-techdraw.svg) [기술도면 환경설정](/TechDraw_Preferences/ko "TechDraw Preferences/ko"): 투상 각도, 색상, 글자 크기 및 선 스타일과 같은 도면 페이지의 기본값에 대한 환경 설정입니다.

## 스크립팅

기술도면 도구는 [매크로](/Macros/ko "Macros/ko") 및 [파이썬](/Python/ko "Python/ko") 콘솔에서 사용할 수 있습니다. 자세한 내용은 다음을 참조하세요.

- [자동 생성된 API 문서](https://freecad.github.io/SourceDoc/)
- [프리캐드 스크립트 기초](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko")
- [편집 가능한 글자 필드](/TechDraw_PageDefault#Editable_text_fields/ko "TechDraw PageDefault")

## 제한사항

- [나무 보기](/Tree_view/ko "Tree view/ko")에서 기술도면의 대상체를 잘라내거나 복사하여 붙여넣지 마십시오. 일반적으로 이 작업은 잘 수행되지 않습니다.
- 마우스로 [나무 보기](/Tree_view/ko "Tree view/ko")에서 기술도면의 대상체를 끌지 마세요.

## 자습서

- [기본 기술도면 자습서](/Basic_TechDraw_Tutorial/ko "Basic TechDraw Tutorial/ko"): 기술도면 작업대를 사용하여 도면을 만드는 방법을 소개합니다.
- [새 템플릿 만들기](/TechDraw_TemplateHowTo/ko "TechDraw TemplateHowTo/ko"): 기술도면 작업대와 함께 사용할 Inkscape에서 새 페이지 템플릿을 만드는 방법에 대한 지침입니다.
- [기술도면 템플릿 생성기](/index.php?title=TechDraw_TemplateGenerator/ko&action=edit&redlink=1 "TechDraw TemplateGenerator/ko (page does not exist)"): 기본 템플릿을 생성하기 위한 매크로를 만드는 지침. : "몇 줄"의 코드를 추가하면 [TemplateHelper매크로](/index.php?title=Macro_TemplateHelper/ko&action=edit&redlink=1 "Macro TemplateHelper/ko (page does not exist)")와 같은 도구가 생성됩니다.
- [구멍의 각도 측정](/index.php?title=Measurement_Of_Angles_On_Holes/ko&action=edit&redlink=1 "Measurement Of Angles On Holes/ko (page does not exist)"): 구멍에 중심선과 후속 각도 표현을 추가하는 방법에 대한 지침입니다.
- [기타](/TechDraw_HowTo_Page "TechDraw HowTo Page"): 중심 표시 등 다양한 설정에 대한 지침.
- [기술도면 피치 원 자습서](/index.php?title=TechDraw_Pitch_Circle_Tutorial/ko&action=edit&redlink=1 "TechDraw Pitch Circle Tutorial/ko (page does not exist)"): 피치 원을 추가하는 방법에 대한 지침입니다.

sliptonic의 비디오 자습서

- 기술도면 작업대 [1부(기본)](https://www.youtube.com/watch?v=7LbOmSGW9F0), [2부(치수)](https://www.youtube.com/watch?v=z3w84RfvqaE), [3부(멀티뷰)](https://www.youtube.com/watch?v=uNjXg-m38aI)
- 기술도면 작업대 [4부(섹션 및 세부 정보)](https://www.youtube.com/watch?v=3zSdeFV6I5o), [5부(템플릿 사용자 정의)](https://www.youtube.com/watch?v=kcmdJ7xa7gg)

## 개발

기술도면 작업대의 미래에 대해 알고 싶으신가요? [the TechDraw Roadmap Page](/TechDraw_Roadmap "TechDraw Roadmap")를 방문하여 자세히 알아보세요.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Workbench/ko&oldid=1567887>"
