---
title: 표준 가져오기(Std Import)
---
|  |
| --- |
| 표준 가져오기 |
| 메뉴 위치 |
| 파일 → 가져오기... |
| 작업대 |
| 모두 |
| 기본 단축키 |
| Ctrl+I |
| 도입 버전 |
| - |
| 참조 |
| [표준 열기](/Std_Open/ko "Std Open/ko"), [가져오기 내보내기](/Import_Export/ko "Import Export/ko"), [가져오기 내보내기 환경 설정](/Import_Export_Preferences/ko "Import Export Preferences/ko") |
|  |

## 설명

**표준 가져오기(Std Import)** 명령은 다른 형식의 파일에서 지오메트리를 활성 문서로 가져옵니다. 다양한 파일 형식이 지원되며 어떤 형식에는 가져오기 옵션이 여러 가지 존재합니다. 자세한 내용은 [가져오기 내보내기](/Import_Export/ko "Import Export/ko")를 참조하십시오.

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): If an image format is selected the command will create an [Image Plane](#Image_Plane).

## 용법

1. 이 명령을 수행하는 방법은 여러 가지입니다:
   * 메뉴에서 **파일 → ![](/images/Std_Import.svg) 가져오기...** 옵션을 선택합니다.
   * 단축키를 사용합니다: Ctrl+I.
2. 필요하다면 대화 상자에서 알맞는 파일 형식을 선택합니다.
3. 파일을 선택합니다.
4. 열기 버튼을 누릅니다.

## 선택 사항

* 명령을 중지하려면 Esc 키나 취소 버튼을 누릅니다.

## 비고

* 가져온 [메시 개체](/Mesh_Workbench/ko "Mesh Workbench/ko")를 솔리드로 변환하려면 [STL이나 OBJ 가져오기](/Import_from_STL_or_OBJ/ko "Import from STL or OBJ/ko") 자습서를 참조하십시오.
* 새 문서로 가져오려면 [표준 열기](/Std_Open/ko "Std Open/ko") 명령을 사용할 수 있습니다.
* 일부 작업대에는 추가적인 가져오기 명령이 있습니다. 참조: [가져오기 내보내기](/Import_Export/ko "Import Export/ko").

## 환경 설정

* 참조: [가져오기 내보내기 환경 설정](/Import_Export_Preferences/ko "Import Export Preferences/ko").
* 마지막으로 사용한 파일의 위치가 다음에 저장됩니다: **도구 → 파라미터 편집... → BaseApp → Preferences → General → FileOpenSavePath**.
* 마지막으로 가져온 파일의 위치가 다음에 저장됩니다: **도구 → 파라미터 편집... → BaseApp → Preferences → General → FileImportFilter**.

## Image Plane

An Image Plane is a planar representation of an image in the [3D view](/3D_view "3D view"). It can for example be used when creating a model based on photographs of an existing object.

By default an Image Plane is placed on the global XY plane. The initial size of an Image Plane is calculated using a 96px/inch resolution.

### Edit

1. To edit an Image Plane do one of the following:
   * Double-click the Image Plane in the [Tree view](/Tree_view "Tree view").
   * Right-click the Image Plane in the Tree view and select **![](/images/Image-scaling.svg) Change image...** from the context menu.
2. If the Image Plane is not plane-parallel to the XY, XZ or YZ plane of the global coordinate system, it is realigned to be plane-parallel to the XY plane.
3. The **Image plane settings** task panel opens.
4. Optionally select the **XY-Plane**, **XZ-Plane** or **YZ-Plane** of the global coordinate system.
5. Check **Reverse direction** to rotate the Image Plane 180°. The rotation axis depends on the selected plane. For the XY plane it is the global X axis. For the XZ and YZ plane it is the global Z axis.
6. The **Offset**, **X distance** and **Y distance** are relative to the coordinate system of the Image Plane. A small negative offset can be useful when tracing the image with a [sketch](/Sketcher_Workbench "Sketcher Workbench") or [Draft](/Draft_Workbench "Draft Workbench") geometry.
7. Optionally change the **Transparency**.
8. **Image size** options:
   * Scale by numerical input:
     1. Optionally uncheck **Keep aspect ratio** for unequal scaling.
     2. Enter a **Width** and/or **Height**.
   * Scale by picking points:
     1. Press the Calibrate button.
     2. Pick two points inside the image.
     3. A dimension line is displayed.
     4. Enter the desired dimension.
     5. Press Enter or the Apply button.
9. Press the OK button to confirm the changes and close the task panel.

### Properties

See also: [Property editor](/Property_editor "Property editor").

An Image Plane object is derived from an [App GeoFeature](/App_GeoFeature "App GeoFeature") object and inherits all its properties. It also has the following additional properties:

#### Data

Image Plane

* 데이터**Image File** (`FileIncluded`): The image file used for the Image Plane. This file is stored in the .FCStd file.
* 데이터**XSize** (`Length`): The width of the Image Plane.
* 데이터**YSize** (`Length`): The height of the Image Plane.

#### View

Object Style

* 보기**Lighting** (`Enumeration`): How the Image Plane is illuminated in the [3D view](/3D_view "3D view"). Can be `Two side` or `One side`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Import/ko&oldid=1506719>"