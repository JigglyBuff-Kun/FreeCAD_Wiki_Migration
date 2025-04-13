---
title: 기술도면 페이지를 SVG로 내보내기
---

|                                                                                                        |
| ------------------------------------------------------------------------------------------------------ |
| TechDraw ExportPageSVG                                                                                 |
| Menu location                                                                                          |
| 기술도면 → 페이지 → 페이지를 SVG로 내보내기                                                            |
| Workbenches                                                                                            |
| [기술도면](/TechDraw_Workbench/ko "TechDraw Workbench/ko")                                             |
| Default shortcut                                                                                       |
| _None_                                                                                                 |
| Introduced in version                                                                                  |
| -                                                                                                      |
| See also                                                                                               |
| [기술도면 템플릿](/TechDraw_Templates/ko "TechDraw Templates/ko"), [Draft SVG](/Draft_SVG "Draft SVG") |
|                                                                                                        |

## 설명

_페이지를 SVG로 내보내기'_ 도구는 현재 도면 페이지를 [SVG](/SVG/ko "SVG/ko") 파일로 저장합니다.

## 용법

1. 문서에 여러 개의 도면 페이지가 있는 경우: [나무 보기](/Tree_view/ko "Tree view/ko")에서 원하는 페이지를 선택하여 활성화합니다.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_ExportPageSVG.svg) **페이지를 SVG로 내보내기** 버튼을 누르세요.
   * 메뉴에서 **기술도면 → 페이지 → ![](/images/TechDraw_ExportPageSVG.svg) 페이지를 SVG로 내보내기**를 선택하세요.
   * 페이지가 [기본 보기 영역](/Main_view_area/ko "Main view area/ko")에 표시되는 경우: 페이지 창을 마우스 오른쪽 버튼으로 클릭하고 상황에 맞는 메뉴에서 **SVG 내보내기**를 선택하세요.
3. 문서에 여러 개의 도면 페이지가 있고 아직 페이지를 활성화하지 않은 경우 **페이지 선택기** 대화 상자가 열립니다.
   1. 원하는 페이지를 선택하세요.
   2. 확인 버튼을 누르세요.
4. **페이지를 SVG로 내보내기** 대화 상자가 열립니다.
5. 위치와 파일 이름을 선택하세요.

## 보충 설명

- [기술도면 선 채우기](/TechDraw_Hatch/ko "TechDraw Hatch/ko") 패턴은 Qt4의 SVG 지원 제한으로 인해 [SVG](/SVG/ko "SVG/ko")로 내보내지지 않습니다.
- 내보낸 파일에서 글자 위치와 크기가 올바르지 않습니다. 도면에서 "시스템" 기본 글꼴을 사용하면 크기 문제가 상당히 개선됩니다.

## 스크립팅

[자동 생성된 API 문서](https://freecad.github.io/SourceDoc/) 및 [FreeCAD 스크립팅 기본](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko")도 참고하세요.

SVG저장 도구는 다음 함수를 사용하여 [매크로](/Macros/ko "Macros/ko") 및 [파이썬](/Python/ko "Python/ko") 콘솔에서 사용할 수 있습니다.

```
TechDrawGui.exportPageAsSvg(DrawPageObject,FilePath)

```

이 기능을 사용하려면 FreeCADGui 모듈이 활성화되어 있어야 합니다.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExportPageSVG/ko&oldid=1560293>"
