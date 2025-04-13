---
title: 기술도면 템플릿 만들기
---
|  |
| --- |
| Tutorial |
| Topic |
| 제도 |
| Level |
| 중간 |
| Time to complete |
| 60 분 |
| Authors |
| [wandererfan](http://freecadweb.org/wiki/index.php?title=User:wandererfan) |
| FreeCAD version |
| 0.17 |
| Example files |
| *None* |
| See also |
| *None* |
|  |

## 소개

이 자습서에서는 [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko") 페이지의 배경 [템플릿](/TechDraw_Templates/ko "TechDraw Templates/ko")으로 사용할 수 있는 [SVG](/SVG/ko "SVG/ko") 파일을 만드는 방법을 보여줍니다.

이 자습서에서는 여러분이 [잉크스케이프](https://en.wikipedia.org/wiki/Inkscape)와 [SVG](/SVG/ko "SVG/ko"), 그리고 프리캐드와 [기술도면 작업대](/TechDraw_Workbench/ko "TechDraw Workbench/ko")에 대해 어느 정도 알고 있다고 가정합니다.

우리는 가로 방향으로 US Letter 크기 용지에 맞는 간단한 템플릿을 만들어 보겠습니다.

이 자습서의 결과 사본은 아래에서 찾아 볼 수 있습니다.

```
$INSTALL_DIR/Mod/TechDraw/Templates/HowToExample.svg

```

여기서 `$INSTALL_DIR`은 프리캐드가 설치된 디렉토리입니다. 예:

```
/usr/share/freecad/Mod/TechDraw/Templates/HowToExample.svg

```

## 기본 문서 만들기

1. 잉크스케이프에서 새 문서를 엽니다.

2. 문서 속성에서

* 페이지 크기 "US Letter" 또는 "A4" 및 방향 "가로"를 선택합니다.
* 기본 단위를 "mm"로 설정하고, 페이지 크기를 너비 "279.4", 높이 "215.9"로 설정합니다. DIN-A4의 경우 "210"과 "297"을 사용합니다. ![](/images/InkDocProp.png)

  잉크스케이프: 페이지 크기와 방향이 있는 문서

3. Use the XML Editor to add a "freecad" namespace clause to the `<svg>` item.

* 0.20 and below: `xmlns:freecad="http://www.freecadweb.org/wiki/index.php?title=Svg_Namespace"`

:   Note that your editable texts will *not* work if you use "https://...", even though the wiki is reached via https these days.

* 0.21 and above: `xmlns:freecad="https://www.freecad.org/wiki/index.php?title=Svg_Namespace"`

Since SVG is a human readable format you can also enter the line above into the file with a text editor.

![](/images/InkXMLNameSpace.png)

Inkscape: XML Editor adding the "freecad" namespace clause to the <svg> item

## Create template drawing

4. Draw outlines, zone numbers, center lines, and other geometry.

5. Draw the boxes and lines for the title block.

6. Add and position your static text.

7. Add and position the text that will be editable.

8. You now have your finished artwork, that should look something like this:

![](/images/InkFinishedArt.png)

Inkscape: tentative template layout

## Create editable fields

9. Use the XML Editor to add a `freecad:editable` tag to each editable `<text>` item.

* Assign a meaningful field name to each editable text.

![](/images/InkXMLeditableTag.png)

Inkscape: XML Editor adding the "freecad:editable" property to the desired <text> item

## Adjust size of the SVG

10. Use the XML editor to adjust the `viewBox` attribute to match your page size in millimeters.

* It is four values, in the format `"0 0 width height"`

![](/images/InkXMLviewBox.png)

Inkscape: XML Editor adjusting the viewbox to match the page size in millimeters

11. Your template will now appear much bigger than desired.

![](/images/InkMuchTooBig.png)

Inkscape: tentative template layout exceeding the page size

12. We need to shrink it.

* **Edit → Select All in All Layers**, or box select and select all.
* Adjust the W: and H: spinboxes to match your artwork's size in millimeters.
* Set it to the page size less any applicable margins, for example, W: 250, and H: 200.

13. Use "Align and Distribute" or the X: and Y: spinboxes to position the artwork within the limits of the page if required.

14. Your template should now look right, just like it did in the finished artwork picture above.

## Remove transformans on the SVG

15. Ensure that all your editable texts are "ungrouped" with Shift+Ctrl+g.

16. Select everything on your page, **Edit → Select All**, and then **Edit → Copy** (Ctrl+c).

17. Then delete the current layer, **Layer → Delete Current Layer**.

:   Note: if you deleted the layer already (in your layer panel is no layer listed) this step is not required. In that case you should select all (Ctrl+a), cut the selection (Ctrl+x) and paste it with the command in the next step.

18. Then paste, **Edit → Paste in Place**.

:   **Note:** This command prevents that the text positions are stored in transform tags. It's important that you do not use the normal paste command!

19. Your template should now look right and shouldn't have any unwanted transforms.

20. Save your template. When you use Inkscape, save it preferably as **Plain SVG** because FreeCAD can only handle the features of the SVG 1.1 specification. **Plain SVG** will remove any Inkscape-specific XML tags.

21. Try it in FreeCAD and [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") with [Insert Page using Template](/TechDraw_PageTemplate "TechDraw PageTemplate").

![](/images/FCTemplateHow.png)

FreeCAD: finished template with an editable text field being modified

## Notes

Don't use Layers in Inkscape until you've mastered template creation without them. Layers and Groups can automatically insert unwanted transforms into your [SVG](/SVG "SVG") file.

As a final step before using your new template, make sure to remove any transform clauses from the Svg code. Transform clauses **will cause problems**.

See a Stackoverflow discussion on [removing transform clauses in SVG files](https://stackoverflow.com/questions/13329125/removing-transforms-in-svg-files).

If you do not see the green boxes for your editable texts, there might be something wrong with your document scale. Open your file in Inkscape again and confirm the values of the viewBox and the sizes are matching.

If texts appear offset in FreeCAD, you may need to remove the `xml:space="preserve"` attributes in the SVG file. See: <https://www.forum.freecadweb.org/viewtopic.php?t=50897>.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_TemplateHowTo/ko&oldid=1567988>"