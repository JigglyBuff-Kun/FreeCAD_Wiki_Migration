---
title: 기술도면 기하학적 선무늬
---

|                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| 기술도면 기하학적 선무늬                                                                                                        |
| Menu location                                                                                                                   |
| 기술도면→ 선무늬 넣기→ 기하학적 선무늬를 면에 넣기                                                                              |
| Workbenches                                                                                                                     |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko")                                                               |
| Default shortcut                                                                                                                |
| _None_                                                                                                                          |
| Introduced in version                                                                                                           |
| -                                                                                                                               |
| See also                                                                                                                        |
| [기술도면 선무늬](/TechDraw_Hatch/ko "TechDraw Hatch/ko"), [기술도면 선무늬 넣기](/TechDraw_Hatching/ko "TechDraw Hatching/ko") |
|                                                                                                                                 |

## 설명

**기술도면 기하학적 선무늬** 도구는 AutoDesk PAT 선무늬 사양에 기반한 무늬로 보기의 닫힌 영역을 채웁니다. 또는 ![](/images/TechDraw_Hatch.svg) [기술도면 선무늬](/TechDraw_Hatch/ko "TechDraw Hatch/ko") 도구는 SVG 기반 선무늬를 사용합니다. 자세한 내용은 [선무늬 넣기](/TechDraw_Hatching/ko "TechDraw Hatching/ko")를 참조하세요.

![](/images/TechDraw_GeomHatch_example.png)

면을 채운 기하학적 선무늬

## 용법

1. 보기에서 닫힌 영역을 선택합니다.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_GeometricHatch.svg) 기술도면 기하학적 선무늬 버튼을 누르세요.
   * 메뉴에서 **기술도면→ 선무늬 넣기→ ![](/images/TechDraw_GeometricHatch.svg) 면에 기하학적 선무늬 적용**를 선택하세요.
3. **면에 기하학적 선무늬 적용** 작업창이 열립니다.
4. 선택적으로 **무늬 파일**을 변경합니다.
5. 선택적으로 **무늬 파일**, **무늬 이름**, **무늬 크기**, **선 굵기** 및 **선 색상**을 변경합니다.
6. 확인 버튼을 누르세요.

## 보충 설명

- 단색 채우기의 경우 **무늬 파일**로 solid.svg를 선택합니다.
- 선무늬 대상체는 '"[위상 명명 문제](/Topological_naming_problem/ko "Topological naming problem/ko")"에 취약합니다. 자세한 내용은 [기술도면 길이 치수](/TechDraw_LengthDimension/ko "TechDraw LengthDimension/ko")를 참조하세요. 선무늬 넣기 작업은 그리기 과정의 마지막 단계 중 하나로 하는 것이 좋습니다.
- 몇 가지 견본 무늬들은 아래 경로의 파일 하나에 포함되어 있습니다:

: ```
$INSTALL_DIR/data/Mod/TechDraw/PAT/FCPAT.pat

    ```

: 여기서 `$INSTALL_DIR`은 프리캐드가 설치된 디렉토리입니다. 예:
: ```
/usr/share/freecad/data/Mod/TechDraw/PAT/FCPAT.pat

    ```

## 속성

- 데이터**Source**: 기하학적 선무늬가 적용되는 보기의 면.
- 데이터**File Pattern**: 사용할 PAT 파일의 위치다.
- 데이터**Name Pattern**: 무늬 파일 내의 PAT 사양의 이름입니다.
- 데이터**Scale Pattern**: 무늬에 적용할 배율(> 0.0 이어야 함).
- 보기**Weight Pattern**: 무늬 선의 두께.
- 보기**Color Pattern**: 무늬 선의 색상.

## 스크립팅

[자동 생성된 API 문서](https://freecad.github.io/SourceDoc/) 및 [FreeCAD 스크립팅 기본](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko")도 참고하세요.

다음 함수를 사용하여 [매크로](/Macros/ko "Macros/ko") 및 [파이썬](/Python/ko "Python/ko") 콘솔에서 기하학적 선무늬를 만들 수 있습니다:

```
hatch = FreeCAD.ActiveDocument.addObject("TechDraw::DrawGeomHatch", "GeomHatch")
hatch.Source = (view1, ["Face0"])
hatch.FilePattern = "path/to/myPATfile.pat"
hatch.NamePattern = "Diamond"
page.addView(hatch)

```

기술도면의 기하학적 선무늬 엔진을 사용하여 3D 공간에서 복합 대상체를 생성하는 것도 가능합니다. 이 알고리즘은 아직 다른 경우에 맞춰 조정되지 않았으므로 기본면이 XY 평면에 있는지 확인해야 합니다.

```
import TechDraw
face = Part.makePlane(10, 10)
patfile = "path/to/myPATfile.pat"
pattern = "Diamond"
scale = 10
hatch = TechDraw.makeGeomHatch(face, scale, pattern, patfile)
Part.show(hatch)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_GeometricHatch/ko&oldid=1564068>"
