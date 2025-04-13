---
title: 기술도면 기본 페이지
---

|                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw PageDefault                                                                                                                              |
| Menu location                                                                                                                                     |
| 기술도면 → 페이지 → 기본 페이지 삽입                                                                                                              |
| Workbenches                                                                                                                                       |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko")                                                                                 |
| Default shortcut                                                                                                                                  |
| _None_                                                                                                                                            |
| Introduced in version                                                                                                                             |
| -                                                                                                                                                 |
| See also                                                                                                                                          |
| [기술도면 페이지 템플릿](/TechDraw_PageTemplate/ko "TechDraw PageTemplate/ko"), [기술도면 템플릿](/TechDraw_Templates/ko "TechDraw Templates/ko") |
|                                                                                                                                                   |

## 설명

**기술도면 기본 페이지** 도구는 [기술도면 기본 설정](/TechDraw_Preferences/ko "TechDraw Preferences/ko")에 지정된 템플릿 파일을 사용하여 새 페이지 개체를 만듭니다.

![](/images/A4_LandscapeTD.svg)

기술도면에 함께 제공되는 기본 템플릿: A4_LandscapeTD.svg

## 용법

1. 활성 문서가 있어야 합니다.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_PageDefault.svg) 기본 페이지 삽입 버튼을 누르세요.
   * 메뉴에서 **기술도면 → 페이지 → ![](/images/TechDraw_PageDefault.svg) 기본 페이지 삽입**을 선택하세요.

## 보충 설명

- If a Page is marked as "do not keep updated" either through its 데이터**Keep Updated** property, through the **Toggle Keep Updated** option from its window context menu, or by the setting in the Preferences, it will ignore changes in the 3D model. You may notice anomalies (missing geometry, missing Dimension values, etc) in the appearance of the Page. These will correct themselves once the Page is updated with the [Redraw Page](/TechDraw_RedrawPage "TechDraw RedrawPage") tool. The Page will have this icon ![](/images/TechDraw_Tree_Page_Unsync.svg) in the [Tree view](/Tree_view "Tree view") while updating is suspended. This setting also affects the startup process. If a Page is marked as "do not keep updated" it will not be drawn at program start.

- 사용자 구성 파일 `user.cfg`에 기본 템플릿이 지정되지 않은 경우 도구는 다음을 시도합니다.

: ```
$INSTALL_DIR/Mod/TechDraw/Templates/A4_LandscapeTD.svg

    ```

여기서 `$INSTALL_DIR`은 프리캐드가 설치된 디렉토리입니다. 예:

: ```
/usr/share/freecad/Mod/TechDraw/Templates/A4_LandscapeTD.svg

    ```

## 속성

### 자료

Base

- 데이터**Projection Type**: 이 페이지의 기본 투상법(제1각 또는 제3각법).

Page

- 데이터**Keep Updated**: If false, the Page is not updated with changes to the 3D model. Useful for complicated/slow drawings. See [Notes](#Notes).
- 데이터**Template**: A link to this Page's [Template](/TechDraw_Templates "TechDraw Templates") object.
- 데이터**Views**: A list of links to the Views on this Page.
- 데이터**Scale**: Default scale for Views in this Page.
- 데이터**Next Balloon Index**: Auto-numbering for Balloons.

### 보기

Grid

- 보기**Show Grid**: 이 페이지에 격자를 표시합니다.
- 보기**Grid Spacing**: 격자 선 사이의 거리.

## 스크립팅

See [TechDraw PageTemplate](/TechDraw_PageTemplate#Scripting "TechDraw PageTemplate").

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_PageDefault/ko&oldid=1559951>"
