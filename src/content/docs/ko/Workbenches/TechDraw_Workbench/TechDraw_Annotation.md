---
title: 기술도면 주석
---

|                                                                                           |
| ----------------------------------------------------------------------------------------- |
| 기술도면 주석                                                                             |
| Menu location                                                                             |
| 기술도면→ 주석→ 주석 삽입                                                                 |
| Workbenches                                                                               |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko")                         |
| Default shortcut                                                                          |
| _None_                                                                                    |
| Introduced in version                                                                     |
| -                                                                                         |
| See also                                                                                  |
| [TechDraw RichTextAnnotation](/TechDraw_RichTextAnnotation "TechDraw RichTextAnnotation") |
|                                                                                           |

## 설명

_기술도면 주석'_ 도구는 도면 페이지에 글자 블록을 추가합니다.

![](/images/AnnotationSample.png)

도면 페이지의 주석

## 용법

1. 문서에 여러 개의 도면 페이지가 있는 경우: [나무 보기](/Tree_view/ko "Tree view/ko")에서 원하는 페이지를 선택하여 활성화합니다.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_Annotation.svg) 주석 삽입 버튼을 누르세요.
   * 메뉴에서 **기술도면→ 주석 → ![](/images/TechDraw_Annotation.svg) 주석 삽입**을 선택하세요.
3. 문서에 여러 개의 도면 페이지가 있고 아직 페이지를 활성화하지 않은 경우 **페이지 선택기** 대화 상자가 열립니다:
   1. 원하는 페이지를 선택하세요.
   2. 확인 버튼을 누르세요.
4. *기본 글자*가 포함된 글자 블록이 페이지에 나타납니다.
5. [속성 편집기](/Property_editor/ko "Property editor/ko")를 사용하여 글자를 변경하세요.
6. 원하는 경우 주석을 다른 위치로 끌어다 놓습니다.

![](/images/UpdateAnnotation.png)

속성 편집기를 통해 주석 수정

## 보충 설명

- 일부 문자는 주석 텍스트의 내부 표현을 방해합니다. 구체적으로, 이는 큰따옴표 `"`, `<` 미만, `>` 초과 기호입니다. 이는 각각 HTML 이스케이프 문자 `&quot;`, `&lt;`, `&gt;`로 대체되어야 합니다. 자세한 내용은 [HTML의 문자 인코딩](https://en.wikipedia.org/wiki/Character_encodings_in_HTML#HTML_character_references)을 참조하세요.

## 속성

주석은 데이터**Scale**을 제외한 모든 적용 가능한 기본 보기(View) 속성을 상속합니다. 대신 데이터**TextSize** 속성을 사용하세요.

- 데이터**Text**: 표시되는 글자.
- 데이터**Font**: 사용할 글꼴의 이름입니다. 주석은 설치된 글꼴 중 가장 잘 맞는 글꼴을 사용합니다.
- 데이터**TextColor**: 글자의 색
- 데이터**TextSize**: 글의 크기(mm).
- 데이터**MaxWidth**: 주석 블록의 최대 너비입니다. -1은 최대 너비가 없음을 나타냅니다.
- 데이터**LineSpace**: 줄간격 조정(%).
- 데이터**TextStyle**: "Normal", "Bold", "Italic", "Bold-Italic"

## 스크립팅

[자동 생성된 API 문서](https://freecad.github.io/SourceDoc/) 및 [FreeCAD 스크립팅 기본](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko")도 참고하세요.

새로운 주석 도구는 다음 함수를 사용하여 [매크로](/Macros/ko "Macros/ko") 및 [파이썬](/Python/ko "Python/ko") 콘솔에서 사용할 수 있습니다:

```
anno = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewAnnotation','TestAnno')
anno.Text = ['Different Text']
anno.TextStyle = 'Bold'
rc = page.addView(anno)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Annotation/ko&oldid=1564142>"
