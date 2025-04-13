---
title: 기술도면 활성보기
---

|                                                                   |
| ----------------------------------------------------------------- |
| 기술도면 활성보기                                                 |
| Menu location                                                     |
| 기술도면 → 다른 작업대의 보기 → 활성보기 삽입 (3D보기)            |
| Workbenches                                                       |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko") |
| Default shortcut                                                  |
| _None_                                                            |
| Introduced in version                                             |
| 0.19                                                              |
| See also                                                          |
| [TechDraw Image](/TechDraw_Image "TechDraw Image")                |
|                                                                   |

## 설명

**기술도면 활성보기** 도구는 활성3D 창의 비트맵 이미지를 도면 페이지에 삽입합니다.

![](/images/TechDraw_ActiveView_example.png)

3D모형으로부터 가져온 간단한 보기.

## 용법

1. 올바른 [3D보기](/3D_view/ko "3D view/ko")로 이동합니다.
2. 문서에 여러 개의 도면 페이지가 있는 경우: [나무 보기](/Tree_view/ko "Tree view/ko")에서 원하는 페이지를 선택하세요.
3. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_ActiveView.svg) 활성보기 삽입(3D 보기) 버튼을 누르세요.
   * 메뉴에서 **기술도면 → 다른 작업대의 보기 → ![](/images/TechDraw_ActiveView.svg) 활성 보기 삽입(3D 보기)**를 선택합니다.
4. 문서에 여러 개의 도면 페이지가 있고 아직 페이지를 선택하지 않은 경우 **페이지 선택기** 대화 상자가 열립니다.
   1. 원하는 페이지를 선택하세요.
   2. 확인 버튼을 누르세요.
5. **ActiveView to TD View** 작업창이 열립니다. 자세한 내용은 [선택사항](#선택사항)을 참조하세요.
6. 확인 버튼을 누르세요.

## 선택 사항

다음을 지정할 수 있습니다.

- **자르기**: 생성된 비트맵을 자릅니다.
- **너비**: 생성된 보기를 잘라낼 너비(mm)입니다.
- **높이**: 생성된 보기를 잘라낼 높이(mm)입니다.
- **배경 없음**: 체크하면 생성되는 비트맵에 투명한 배경이 생깁니다.
- **단색 배경**: 체크하면 선택된 색상의 배경이 생성됩니다.
- **3D 배경 사용**: 체크하면, 생성된 비트맵은 3D 창의 배경을 사용합니다.

## 보충 설명

- 활성보기는 생성된 후 고정적이며 3D 모형이 변경되어도 그에 따라 갱신되지 않습니다.
- 배경의 활성보기는 [이미지](/TechDraw_Image/ko "TechDraw Image/ko")입니다. 따라서 데이터**Scale Type**은 항상 `Custom`으로 초기화됩니다.
- 0.20 and below에서 활성보기는 [기호](/TechDraw_Symbol/ko "TechDraw Symbol/ko")였습니다.

## 속성

[기술도면 이미지](/TechDraw_Image/ko#속성 "TechDraw Image/ko")를 참조하세요.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ActiveView/ko&oldid=1563093>"
