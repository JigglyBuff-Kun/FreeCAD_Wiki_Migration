---
title: 기술도면 템플릿
---
## 설명

모든 기술도면 페이지는 템플릿 대상체를 기반으로 합니다. 템플릿은 페이지 배경에 보기, 기호 및 기타 주석 대상체를 삽입할 수 있는 영역을 제공하며 용지 크기를 정의합니다. 내보내기 또는 인쇄를 위해 도면 영역 내의 요소만 렌더링됩니다.

템플릿은 인덱스 필드, 접기 표시, 선택적으로 고정 및 [editable texts](/Svg_Namespace#freecad:editable "Svg Namespace")를 포함하는 제목 블록을 포함하여 도면 영역을 정의하는 프레임과 같은 그래픽을 보관할 수도 있습니다. 제목 블록은 [기호](/TechDraw_Symbol/ko "TechDraw Symbol/ko")로 별도로 삽입할 수도 있습니다.

템플릿은 기호와 마찬가지로 [SVG](/SVG/ko "SVG/ko") 파일로, [Inkscape](https://en.wikipedia.org/wiki/Inkscape)와 같은 애플리케이션이나 간단한 텍스트 편집기를 사용하여 프리캐드 외부에서 만들고 수정할 수 있습니다. 둘 다 편집 가능한 텍스트 필드를 포함할 수 있지만 사용하는 편집 도구는 서로 다릅니다.

새로운 자동 채우기 도구([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"))를 사용하면 템플릿에 편집 가능한 텍스트 필드를 삽입할 때 자동으로 채울 수 있습니다. 이렇게 하려면 새로운 [freecad:autofill](/Svg_Namespace#freecad:autofill "Svg Namespace") 속성을 사용하는 템플릿이 필요합니다. 자동 채우기에 유효한 속성 이름은 다음과 같습니다: "작성자", "날짜", "조직", "척도", "시트", "제목", "페이지 번호" 및 "페이지 수".

## 속성

[속성 편집기](/Property_editor/ko "Property editor/ko")도 참조하세요.

템플릿 대상체에는 다음과 같은 속성이 있습니다.

Base

* 데이터**Orientation** (`Enumeration`): `세로` 또는 `가로`.

Page Properties

* 데이터**Width** (`Length`): mm 단위의 용지 너비.
* \* 데이터**Height** (`Length`): mm 단위의 용지 높이.
* 데이터 (Hidden)**Editable Texts** (`Map`): 템플릿에 있는 편집 가능한 텍스트의 키:값 목록입니다.

Template

* 데이터**Page Result** (`FileIncluded`): 편집 가능한 텍스트에 대한 모든 변경 사항을 포함한 원본 템플릿 파일의 사본입니다. 이렇게 하면 템플릿 파일 사본이 없는 사용자가 페이지를 의도한 대로 볼 수 있습니다. 일반적으로 최종 사용자에게는 유용하지 않습니다.
* 데이터**Template** (`File`): 이 \*.FCStd 파일에 통합된 원본 템플릿 파일 복사본에 대한 포인터이거나 현재 컴퓨터에서 액세스할 수 있는 템플릿에 대한 파일 경로입니다. 템플릿을 변경하는 방법에 대한 자세한 내용은 [다음 문단](#다른_템플릿_파일_선택)을 참조하세요.

## 다른 템플릿 파일 선택

도면에 대해 다른 템플릿을 선택하려면:

1. [나무 보기](/Tree_view/ko "Tree view/ko")에서 원하는 페이지 대상체를 찾습니다.
2. 필요한 경우 페이지 노드를 확장합니다.
3. 템플릿 대상체를 선택합니다.
4. [속성 편집기](/Property_editor/ko "Property editor/ko")에서 데이터**템플릿** 속성 필드를 클릭합니다.
5. 나타나는 ... (줄임표) 버튼을 누르세요.
6. 파일 대화 상자가 현재 템플릿이 있는 폴더를 엽니다. 페이지가 현재 프리캐드 세션에서 생성된 경우 이는 기본 템플릿 폴더가 됩니다([기술도면 기본 설정](/TechDraw_Preferences#Files/ko "TechDraw Preferences")에서 설정한 대로).
7. 다른 폴더를 찾아 볼 수도 있습니다.
8. 다른 템플릿 파일을 선택하세요.
9. 확인 버튼을 누르세요.

템플릿 파일을 수정했고 이 템플릿을 사용하는 현재 프리캐드 세션에서 만들어진 페이지를 업데이트하려는 경우, 먼저 다른 파일을 일시적으로 선택한 다음 수정된 파일을 다시 선택합니다.

## 사용자 정의 템플릿

다양한 표준 페이지 크기의 미리 포맷된 템플릿이 프리캐드에 포함되어 있습니다. 이는 다음에서 찾을 수 있습니다.

```
$INSTALL_DIR/Mod/TechDraw/Templates/

```

여기서 `$INSTALL_DIR`은 프리캐드가 설치된 디렉토리입니다.

```
/usr/share/freecad/Mod/TechDraw/Templates/

```

사용자 정의 템플릿은 [기술도면 기본 설정](/TechDraw_Preferences/ko "TechDraw Preferences/ko")에서 기본값으로 지정할 수도 있습니다.

[사용자 정의 기술도면 템플릿을 만드는 방법](/TechDraw_TemplateHowTo/ko "TechDraw TemplateHowTo/ko")을 참조하거나, 스크립트로 생성된 템플릿을 선호하는 경우 [기술도면 탬플릿 생성기](/index.php?title=TechDraw_TemplateGenerator/ko&action=edit&redlink=1 "TechDraw TemplateGenerator/ko (page does not exist)") 및 [TemplateHelper매크로](/index.php?title=Macro_TemplateHelper/ko&action=edit&redlink=1 "Macro TemplateHelper/ko (page does not exist)") 를 사용하세요.

## 보충 설명

* The library FreeCAD uses to process SVG **only supports the svg-tiny specification**. In particular: "SVG Tiny does not support gradients, transparency, clipping, masks, symbols, patterns, underline text, strike through text, vertical text, or SVG filter effects." (from Adobe Illustrator Help). Using these features in your custom template will cause problems in rendering.

* Svg transform clauses **may cause problems** in custom templates. See a Stackoverflow discussion on [removing transform clauses in SVG files](https://stackoverflow.com/questions/13329125/removing-transforms-in-svg-files), especially if Inkscape used too many of them. But they can't be avoided if you need rotated text in your template.

* The **xml:space="preserve"** clause sometimes causes problems with text size and positioning. It is best to avoid/remove this clause from your custom template's SVG code.

* Templates work best when they contain no extraneous SVG code (called "garbage SVG" by some). There is a good article on [removing garbage from SVG here](https://freecad-gost.ru/news/gost-templates-techdraw-09-01-2020/). The article is in Russian.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Templates/ko&oldid=1560026>"