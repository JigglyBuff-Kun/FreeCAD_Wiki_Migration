---
title: 기술도면 페이지 템플릿
---

|                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw PageTemplate                                                                                                                         |
| Menu location                                                                                                                                 |
| 기술도면 → 페이지 → 템플릿으로 페이지 삽입                                                                                                    |
| Workbenches                                                                                                                                   |
| [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko")                                                                             |
| Default shortcut                                                                                                                              |
| _None_                                                                                                                                        |
| Introduced in version                                                                                                                         |
| -                                                                                                                                             |
| See also                                                                                                                                      |
| [기술도면 기본 페이지](/TechDraw_PageDefault/ko "TechDraw PageDefault/ko"), [기술도면 템플릿](/TechDraw_Templates/ko "TechDraw Templates/ko") |
|                                                                                                                                               |

## 설명

**기술도면 페이지 템플릿** 도구는 대화 상자에서 선택한 템플릿 파일을 사용하여 새 페이지 대상체를 만듭니다.

대화 상자의 시작 디렉토리는 [기술도면 기본 설정](/TechDraw_Preferences/ko "TechDraw Preferences/ko")에서 지정할 수 있습니다.

![](/images/A4_Landscape_ISO7200_Pep.svg)

기술도면 작업대에서 제공되는 템플릿 중 하나: A4_Landscape_ISO7200_Pep.svg

## 용법

1. 활성 문서가 있어야 합니다.
2. 도구를 호출하는 방법은 여러 가지가 있습니다.
   - ![](/images/TechDraw_PageTemplate.svg) 템플릿을 사용하여 페이지 삽입 버튼을 누르세요.
   * 메뉴에서 **기술도면 → 페이지 → ![](/images/TechDraw_PageTemplate.svg) 템플릿을 사용하여 페이지 삽입** 옵션을 선택하세요.

## 속성

[기술도면 기본 페이지](/TechDraw_PageDefault#Properties/ko "TechDraw PageDefault")를 참조하세요.

## 스크립팅

[자동 생성된 API 문서](https://freecad.github.io/SourceDoc/) 및 [FreeCAD 스크립팅 기본](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko")도 참고하세요.

선택한 템플릿을 기반으로 하는 페이지는 [매크로](/Macros/ko "Macros/ko")와 [파이썬](/Python/ko "Python/ko") 콘솔에서 다음 기능을 사용하여 만들 수 있습니다.

```
import FreeCAD as App
from PySide import QtGui

doc = App.ActiveDocument
default_dir = App.getResourceDir() + "Mod/TechDraw/Templates"
param = App.ParamGet("User parameter:BaseApp/Preferences/Mod/TechDraw/Files")
template_dir = param.GetString("TemplateDir", default_dir)

template_file = QtGui.QFileDialog.getOpenFileName(QtGui.QApplication.activeWindow(),
                                                  "Select a Template File",
                                                  template_dir,
                                                  "Template (*.svg)")

page = doc.addObject("TechDraw::DrawPage", "Page")
template = doc.addObject("TechDraw::DrawSVGTemplate", "Template")
template.Template = template_file[0]
page.Template = template

doc.recompute()

```

### 편집 가능한 텍스트 필드

템플릿 생성에 대한 자세한 내용은 [기술도면 템플릿](/TechDraw_Templates/ko "TechDraw Templates/ko")을 참고하세요.

새 페이지가 생성되면 `Template` 속성은 편집 가능한 필드(키)의 이름과 텍스트 값을 포함하는 `EditableTexts` 사전을 보유합니다. 이 사전을 변수에 복사하고 변경한 다음 사전을 `EditableTexts` 속성에 다시 할당하여 변경 사항을 확인하세요.

```
page = FreeCAD.ActiveDocument.Page
texts = page.Template.EditableTexts

for key, value in texts.items():
    print("{0} = {1}".format(key, value))

texts["FC-Title"] = "The title of my page"
page.Template.EditableTexts = texts

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_PageTemplate/ko&oldid=1560062>"
