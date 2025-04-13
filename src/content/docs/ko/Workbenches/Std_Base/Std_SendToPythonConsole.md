---
title: 표준 파이썬 콘솔로 보내기(Std SendToPythonConsole)
---
|  |
| --- |
| 표준 파이썬 콘솔로 보내기 |
| 메뉴 위치 |
| 편집 → 파이썬 콘솔로 보내기 |
| 작업대 |
| 모두 |
| 기본 단축키 |
| Ctrl+Shift+P |
| 도입 버전 |
| 0.19 |
| 참조 |
| *없음* |
|  |

## 설명

**표준 파이썬 콘솔로 보내기(Std SendToPythonConsole)** 명령은 선택한 개체를 참조하는 변수를 [파이썬 콘솔](/Python_console/ko "Python console/ko") 안에 생성합니다. 만약 개체의 하위 셰이프를 선택했다면 변수 2개가 더 생성됩니다. 하나는 개체의 셰이프를 참조하고 다른 하나는 하위 셰이프 자체를 참조합니다. 관련 변수와 코드는 파이썬 코드를 작성하는데 사용할 수 있습니다.

Depending on the selected object and its selected subshapes, if any, the following variables are created:

| Variable name | Referenced object(s) |
| --- | --- |
| `doc` | The document containing the selected object |
| `lnk` | The selected Link object (only created if the selected object is a Link) |
| `obj` | Depending on the selected object:  The selected object itself (if the selected object is not a Link)  The Linked object (if the selected object is a Link) |
| `shp` | Depending on the type of `obj`:  The `Shape` property of `obj` (for objects derived from the `Part::Feature` class)  The `Mesh` property of `obj` (for Mesh objects)  The `Points` property of `obj` (for Points objects) |
| `sub` | The first selected subshape (only created if at least one subshape is selected) |
| `subs` | A list containing all subshapes (only created if two or more subshapes are selected) |

```
>>> ### Begin command Std_SendToPythonConsole
>>> try:
>>>     del(doc,lnk,obj,shp,sub,subs)
>>> except Exception:
>>>     pass
>>> 
>>> doc = App.getDocument("Unnamed")
>>> lnk = doc.getObject("Link")
>>> obj = lnk.getLinkedObject()
>>> shp = obj.Shape
>>> sub = obj.getSubObject("Edge10")
>>> subs = [obj.getSubObject("Edge10"),obj.getSubObject("Face3"),obj.getSubObject("Vertex5"),]
>>> ### End command Std_SendToPythonConsole

```

출력 예시: [부품 상자](/Part_Box/ko "Part Box/ko")의 모서리가 선택된 경우

## 용법

1. 단일 개체를 선택합니다.
2. 이 명령을 실행하는 방법은 여러 가지입니다:
   * 메뉴에서 **편집 → ![](/images/Std_SendToPythonConsole.svg) 파이썬 콘솔로 보내기** 옵션을 선택합니다.
   * [트리 보기](/Tree_view/ko "Tree view/ko")의 상황에 맞는 메뉴 혹은 [3D 보기](/3D_view/ko "3D view/ko")의 상황에 맞는 메뉴에서 **![](/images/Std_SendToPythonConsole.svg) 파이썬 콘솔로 보내기** 옵션을 선택합니다.
   * 단축키를 사용합니다: Ctrl+Shift+P.

## Notes

* All previously created variables are deleted each time the command is run.

* If the selected object is a Link (`App::Link`) and the Linked object is derived from the `Part::Feature` class, the `shp` variable will be the shape of the Linked object. If the Link has been transformed or scaled and you want to access the scaled/transformed shape, you can do so with this code:

:   ```
    lnk_shp = Part.getShape(lnk)

    ```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SendToPythonConsole/ko&oldid=1448994>"