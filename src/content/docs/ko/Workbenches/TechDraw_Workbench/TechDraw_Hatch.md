---
title: 기술도면 선무늬(Hatch)
---

|                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 기술도면 선무늬                                                                                                                                            |
| Menu location                                                                                                                                              |
| 기술도면→ 선무늬 넣기→ 이미지 파일의 선무늬를 면에 넣기                                                                                                    |
| Workbenches                                                                                                                                                |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko")                                                                                          |
| Default shortcut                                                                                                                                           |
| _None_                                                                                                                                                     |
| Introduced in version                                                                                                                                      |
| -                                                                                                                                                          |
| See also                                                                                                                                                   |
| [기술도면 기하학적 선무늬](/TechDraw_GeometricHatch/ko "TechDraw GeometricHatch/ko"), [기술도면 선무늬 넣기](/TechDraw_Hatching/ko "TechDraw Hatching/ko") |
|                                                                                                                                                            |

## 설명

**기술도면 선무늬** 도구는 보기의 닫힌 영역을 tiled [SVG](/SVG/ko "SVG/ko") 또는 비트맵([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) 기반 선무늬로 채웁니다. 또는 ![](/images/TechDraw_GeometricHatch.svg) [기술도면 기하학적 선무늬](/TechDraw_GeometricHatch/ko "TechDraw GeometricHatch/ko") 도구는 PAT 기반 해치 패턴을 사용합니다. 자세한 내용은 [선무늬 넣기](/TechDraw_Hatching/ko "TechDraw Hatching/ko")를 참조하십시오.

![](/images/TechDraw_Hatch_example.png)

면에 넣은 SVG 선무늬

## 용법

1. 보기에서 닫힌 영역을 선택합니다.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_Hatch.svg) 기술도면 선무늬 버튼을 누르세요.
   * 메뉴에서 **기술도면→ 선무늬 넣기→ ![](/images/TechDraw_Hatch.svg) 이미지 파일의 선무늬를 면에 넣기**를 선택하세요.
3. **면에 선무늬 적용** 작업창이 열립니다.
4. 선택적으로 **선무늬 파일**을 변경합니다.
5. 선택적으로 **무늬 크기**와 **선 색상**을 변경합니다. 이러한 설정은 비트맵에서는 무시됩니다.
6. 확인 버튼을 누르세요.

## 보충 설명

- 단색 채우기의 경우 **무늬 파일**로 solid.svg를 선택합니다.
- 선무늬 대상체는 '"[위상 명명 문제](/Topological_naming_problem/ko "Topological naming problem/ko")"에 취약합니다. 자세한 내용은 [기술도면 길이 치수](/TechDraw_LengthDimension/ko "TechDraw LengthDimension/ko")를 참조하세요. 선무늬 넣기 작업은 그리기 과정의 마지막 단계 중 하나로 하는 것이 좋습니다.
- 견본 선무늬[SVG](/SVG/ko "SVG/ko")는 다음 위치에서 로컬로 사용 가능합니다:

: ```
$INSTALL_DIR/data/Mod/TechDraw/Patterns

    ```

: 여기서 `$INSTALL_DIR`은 프리캐드가 설치된 디렉토리입니다. 예:
: ```
/usr/share/freecad/data/Mod/TechDraw/Patterns

    ```

: [GitHub](https://github.com/FreeCAD/FreeCAD/tree/master/src/Mod/TechDraw/Patterns)에서도 내려받아 사용할 수 있습니다.

## 속성

- 데이터**Source**: 선무늬가 적용되는 보기의 면.
- 데이터**Hatch Pattern**: SVG 무늬 파일의 전체 경로와 파일 이름.
- 보기**Hatch Color**: 선무늬의 색상.
- 보기**Hatch Scale**: 선무늬 크기

## 스크립팅

[자동 생성된 API 문서](https://freecad.github.io/SourceDoc/) 및 [FreeCAD 스크립팅 기본](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko")도 참고하세요.

다음 함수를 사용하여 [매크로](/Macros/ko "Macros/ko") 및 [파이썬](/Python/ko "Python/ko") 콘솔에서 선무늬를 만들 수 있습니다:

```
hatch = FreeCAD.ActiveDocument.addObject("TechDraw::DrawHatch", "Hatch")
hatch.Source = (view1, ["Face0"])
hatch.HatchPattern = hatchFileSpec
page.addView(hatch)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Hatch/ko&oldid=1564033>"
