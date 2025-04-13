---
title: 기술도면 선무늬 넣기
---

## 설명

기술도면 작업대에는 두 가지 선무늬 넣기 도구가 포함되어 있습니다:

- ![](/images/TechDraw_Hatch.svg) [기술도면 선무늬](/TechDraw_Hatch/ko "TechDraw Hatch/ko") (타일링된 SVG 또는 비트맵 이미지 기반)
- ![](/images/TechDraw_GeometricHatch.svg) [기술도면 기하학적 선무늬](/TechDraw_GeometricHatch/ko "TechDraw GeometricHatch/ko") (선 기반)

## 이미지 기반 선무늬

![](/images/TechDraw_Hatch.svg) [기술도면 선무늬](/TechDraw_Hatch/ko "TechDraw Hatch/ko")는 타일링된 [SVG](/SVG/ko "SVG/ko") 또는 비트맵([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) 이미지를 사용하여 선택한 면을 덮습니다. 타일링 격자의 원점은 면의 기하학적 중심과 일치합니다.

[SVG](/SVG/ko "SVG/ko") 타일은 일반적으로 **64x64** 픽셀 이미지입니다. 프리캐드와 함께 제공되는 모든 무늬 파일은 [GitHub](https://github.com/FreeCAD/FreeCAD/tree/master/src/Mod/TechDraw/Patterns)에서 내려받을 수도 있습니다.

비트맵 기반 무늬는 페이지를 기준으로 10px/mm의 고정된 해상도로 표시됩니다.

기본 선무늬 파일은 [기술도면 환경설정](/TechDraw_Preferences/ko "TechDraw Preferences/ko")에서 지정할 수 있습니다.

### 사용가능한 SVG 무늬들

- ![aluminium](/images/Aluminium.svg)

  aluminium

- ![brick01](/images/Brick01.svg)

  brick01

- ![concrete](/images/Concrete.svg)

  concrete

- ![cross](/images/Cross.svg)

  cross

- ![cuprous](/images/Cuprous.svg)

  cuprous

- ![diagonal1](/images/Diagonal1.svg)

  diagonal1

- ![diagonal2](/images/Diagonal2.svg)

  diagonal2

- ![earth](/images/Earth.svg)

  earth

- ![general_steel](/images/General_steel.svg)

  general_steel

- ![glass](/images/Glass.svg)

  glass

- ![hatch45L](/images/Hatch45L.svg)

  hatch45L

- ![hatch45R](/images/Hatch45R.svg)

  hatch45R

- ![hbone](/images/Hbone.svg)

  hbone

- ![line](/images/Line.svg)

  line

- ![plastic](/images/Plastic.svg)

  plastic

- ![plus](/images/Plus.svg)

  plus

- ![simple](/images/Simple.svg)

  simple

- ![solid](/images/Solid.svg)

  solid

- ![square](/images/Square.svg)

  square

- ![steel](/images/Steel.svg)

  steel

- ![titanium](/images/Titanium.svg)

  titanium

- ![wood](/images/Wood.svg)

  wood

- ![woodgrain](/images/Woodgrain.svg)

  woodgrain

- ![zinc](/images/Zinc.svg)

  zinc

## 기하학적 선무늬

![](/images/TechDraw_GeometricHatch.svg) [기술도면 기하학적 선무늬](/TechDraw_GeometricHatch/ko "TechDraw GeometricHatch/ko")는 파일에서 읽은 사양을 기반으로 선무늬를 형성합니다. 이 파일은 일반적으로 널리 사용되는 AutoDesk® PAT 형식과 호환됩니다. FCPAT.pat 파일에는 일부 무늬가 포함되어 있습니다.

```
; standard PAT patterns

*Diamond, 45 diagonals L & R, Solid, 1.0 mm separation
45,0,0,0,1.0
-45,0,0,0,1.0
*Diamond2, 45 diagonals L & R, Solid, 2.0 mm separation
45,0,0,0,2.0
-45,0,0,0,2.0
*Diamond4, 45 diagonals L & R, Solid, 4.0 mm separation
45,0,0,0,4.0
-45,0,0,0,4.0
*Diagonal4, 45 diagonal R, Solid, 4.0 mm separation
45,0,0,0,4.0
*Diagonal5, 45 diagonal L, Solid, 4.0 mm separation
-45,0,0,0,4.0
*Square, square grid, Solid, 5.0 mm separation
90,1,1,0,5.0
0,0,0,1,5.0
*Horizontal5, horizontal lines, Solid 5.0 separation
0,0,0,0,5.0
*Vertical5, vertical lines, Solid, 5.0 separation
90,0,0,0,5.0

```

FCPAT.pat에 대한 쓰기 권한이 있는 경우 사용자 고유의 선무늬를 추가할 수 있으며, 사용자 고유의 \*.pat 파일을 생성하여 [기술도면 환경설정](/TechDraw_Preferences/ko "TechDraw Preferences/ko")에서 해당 파일을 지정할 수도 있습니다.

### PAT 파일 경로

`FCPAT.pat` 파일은 다음 위치에서 찾을 수 있습니다.

- **Windows**: `C:\Program Files\FreeCAD\data\Mod\TechDraw\PAT\`
- **Mac**: `/Applications/FreeCAD.app/Contents/Mod/TechDraw/PAT/`
- **Linux**: `/usr/share/freecad/Mod/TechDraw/PAT/`
  - _freecad-daily PPA_: `/usr/share/freecad-daily/Mod/TechDraw/PAT/`

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Hatching/ko&oldid=1564104>"
