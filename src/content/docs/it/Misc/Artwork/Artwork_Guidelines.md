---
title: Linee guida per le opere grafiche
---
## Introduzione

*Note:* for all icons in the source tree, see [Artwork](/Artwork "Artwork").

Un'icona di FreeCAD è composta da 6 elementi che possono essere ricordati con l'acronimo SALCHO: **S**troke, **A**lignment, **L**ighting, **C**olor, **H**ighlighting, **O**utline.

Ecco un esempio concreto, ma arbitrario:

![](/images/FreeCAD_icon_example_details.svg)

|  |  |
| --- | --- |
| A | The highlight color is used for this entire surface to indicate light falling from above. |
| B | The obligatory dark outline surrounds the icon shape to provide form contrast. |
| C | Just inside the outline, the highlight stroke (Highlight color) provides contrast on dark backgrounds. |
| D | This face is primarily the base color, but a light gradient from highlight (top left) to base (bottom right) gives the impression of light falling from above left. |
| E | The highlight here is the base color (one tone down) to give the impression of this being the face furthest from the light. |
| F | This face is like D but goes from Base (top left) to Dark (bottom right), to indicate that this is the face furthest from the light. |

Le sezioni seguenti spiegano questi elementi in modo più dettagliato.

This icon is displayed as follows:

|  |  |
| --- | --- |
|  | 64 px, original size, large buttons. |
|  | 32 px, medium size, regular buttons. |
|  | 16 px, small size, as it appears in the [tree view](/Tree_view "Tree view"). |

## Colori

*Obbligatorio*

FreeCAD uses a palette adapted from the [Tango palette](https://web.archive.org/web/20190921043652/http://tango.freedesktop.org/tango_icon_theme_guidelines). Each main color comes in 4 tones: Highlight, Base, Dark and Outline. Notice that the Outline is not completely black but a very dark variation of the Base.

| #fce94f   (252, 233, 79)   Butter 1 | #edd400   (237, 212, 0)   Butter 2 | #c4a000   (196, 160, 0)   Butter 3 | #302b00   (48, 43, 0)   Butter 4 |
| --- | --- | --- | --- |
| #8ae234   (138, 226, 52)   Chameleon 1 | #73d216   (115, 210, 22)   Chameleon 2 | #4e9a06   (78, 154, 6)   Chameleon 3 | #172a04   (23, 42, 4)   Chameleon 4 |
| #fcaf3e   (252, 175, 62)   Orange 1 | #f57900   (245, 121, 0)   Orange 2 | #ce5c00   (206, 92, 0)   Orange 3 | #321900   (50, 25, 0)   Orange 4 |
| #729fcf   (114, 159, 207)   Sky Blue 1 | #3465a4   (52, 101, 164)   Sky Blue 2 | #204a87   (32, 74, 135)   Sky Blue 3 | #0b1521   (11, 21, 33)   Sky Blue 4 |
| #ad7fa8   (173, 127, 168)   Plum 1 | #75507b   (117, 80, 123)   Plum 2 | #5c3566   (92, 53, 102)   Plum 3 | #171018   (23, 16, 24)   Plum 4 |
| #e9b96e   (233, 185, 110)   Chocolate 1 | #c17d11   (193, 125, 17)   Chocolate 2 | #8f5902   (143, 89, 2)   Chocolate 3 | #271903   (39, 25, 3)   Chocolate 4 |
| #ef2929   (239, 41, 41)   Scarlet Red 1 | #cc0000   (204, 0, 0)   Scarlet Red 2 | #a40000   (164, 0, 0)   Scarlet Red 3 | #280000   (40, 0, 0)   Scarlet Red 4 |
| #34e0e2   (52, 224, 226)   FreeTeal 1 | #16d0d2   (22, 208, 210)   FreeTeal 2 | #06989a   (6, 152, 154)   FreeTeal 3 | #042a2a   (4, 42, 42)   FreeTeal 4 |
| #ffffff   (255, 255, 255)   Snowy White | #eeeeec   (238, 238, 236)   Aluminium 1 | #d3d7cf   (211, 215, 207)   Aluminium 2 | #babdb6   (186, 189, 182)   Aluminium 3 |
| #888a85   (136, 138, 133)   Aluminium 4 | #555753   (85, 87, 83)   Aluminium 5 | #2e3436   (46, 52, 54)   Aluminium 6 | #000000   (0, 0, 0)   Jet Black |

Complete palette

A selection of some key colors.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  |  |  | Use the Yellow tones for tools that create objects; for an example, see [Part](/Part_Workbench "Part Workbench") and [Draft Workbenches](/Draft_Workbench "Draft Workbench"). |
|  |  |  |  | Use the Blue tones for tools that modify objects; for an example, see [Part](/Part_Workbench "Part Workbench") and [Draft Workbenches](/Draft_Workbench "Draft Workbench"). |
|  |  |  |  | Use the Teal tones for view-related tools; for an example, see the [View Menu](/Std_View_Menu "Std View Menu"). |
|  |  |  |  | Use the Red tones for Constraint related tools; for an example, see [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"). |

|  |  |
| --- | --- |
| Why limit myself to these colors? | Restricting the colors to a defined palette helps avoid heterogeneous iconography and improves readability when there are many icons. |
| How do I use the FreeCAD palette? | Installing [the palette](https://gist.github.com/GAZ082/724d2092b2986e3b17b9663f34093cf5) is as easy as [copying it into your Inkscape palette folder](https://inkscape.org/en/learn/faq/#how-install-new-extensions-palettes-document-templates-symbol-sets-icon-sets-etc). |

## Grid and stroke width

*Obbligatorio*

FreeCAD icons have a nominal size of 64 pixels both in width and height. When creating or editing an icon, make sure the document size is 64 x 64 with the units being pixels (px). Leaving an inner 2px margin of empty space all around the document area is useful as it prevents effects like anti-aliasing (blurring of edges). That is, the usable space for the icon should be considered 60 x 60, and the edges should be left empty.

![](/images/FreeCAD_icon_size.svg)

Draw the icon inside the blue area and everything will work out fine.

It's also strongly recommended to use a visual grid that has a minor grid line every pixel, and a major grid line every 2 pixels. The strokes of the icon should be aligned along the minor grid intersections.

Strokes should be no *thinner* than 2px, with rounded caps and corners in most cases. Strokes can be *thicker*, but they should preferably be a multiple of 2px in order to minimize scaling fuzziness.

![](/images/FreeCAD_icon_stroke_2px.svg)

Grid with strokes that are multiples of 2px.

|  |  |
| --- | --- |
| Why use this grid and stroke size? | For historical reasons, FreeCAD uses a 64x64 icon that then gets scaled down. Not ideal, but it adds character. As a result, keeping things aligned to a power of two grid with thicknesses that are powers of two helps to avoid or at least mitigate anti-aliasing issues upon re-scaling. |
| How do I comply with this? | If you are using Inkscape, go to **File → Document Properties** and confirm the width, height and units of your page are correct. Then go to the **Grids** tab, click New, set the units to `px`, `Spacing X` and `Spacing Y` to 1 and `Major grid line every` to 2. |

## Contorno

*Obbligatorio*

Basing yourself on the main color of the icon, ensure that there is a dark outline of 2px, as mentioned earlier. This works in unison with the highlight to ensure good form contrast on multiple background tones.

![](/images/Draft_Point.svg) ![](/images/Draft_Point_backgrounds.svg)

Il bordo scuro dell'icona è il contorno.

|  |  |
| --- | --- |
| Why is the outline needed? | The outline is the skeleton on which everything else hangs by adding form contrast. Using the Outline color or the Dark color depends on the situation, but without this line, the range of backgrounds on which the icon is visible gets drastically limited |
| How do I comply with this? | Simply add a stroke of 2px around every part of the icon that will be adjacent to the background color, that is, the outline is for external strokes. In case of shapes that have a hole in the middle, for example, a donut, the outline should also be added to the interior hole. Snap your path's nodes to the grid whenever possible, aiming for the minor grid intersections. |

## Evidenziare

*Fortemente consigliato*

Using the Highlight color, add an internal stroke of 2px to help make that outline pop. On dark backgrounds, it's this highlight what will be providing the form to the icon.

![](/images/Draft_Move.svg) ![](/images/Draft_Move_backgrounds.svg)

The light highlight helps in dark backgrounds.

|  |  |
| --- | --- |
| Why use the highlight? | The highlight works in unison with the outline to improve form contrast, especially on dark backgrounds. It is never a bad idea, but if you don't have the space, for example, you have a very thin line, you can opt out of it provided you have ensured enough contrast between the main color and the outline. |
| How do I comply with this? | Just like the outline, simply trace a stroke of 2px around the internal side of the outline, snapping nodes to the grid when possible, aiming for the minor grid intersections. |

## Illuminazione

*Opzionale*

As per Tango guidelines, if you're adding a gradient lighting effect, try to make it look like the light is coming from the top left. This is done by adding the highlight color up top left and the Base or Dark color bottom right. Notice that only palette colors are used.

![](/images/Draft_Clone.svg) ![](/images/Draft_Clone_backgrounds.svg)

Subtle lighting effect coming from top left.

|  |  |
| --- | --- |
| Why use lighting? | Lighting is just another way to tie icons together and ensure that there are varying levels of ["value"](https://en.wikipedia.org/wiki/Lightness) to improve their readability. Provided the outline and highlight are present though, it can be considered optional |
| How do I comply with this? | Set the fill to be a linear or a radial gradient. In Inkscape this is available in the stroke and fill settings; with "F2" it is possible to move the nodes of the gradient around to make sure they are at the right angle. |

## Recommended recording format

All icons should be created in [SVG](/SVG "SVG") format with a vector image application, such as [Inkscape](http://inkscape.org).
This makes it easier to apply changes and derive additional icons in the same application space.

When committing icons to be used directly by FreeCAD (in a \*.qrc file), save them as "Plain SVG". This will reduce the icon size and save the disk and memory space.

## Closing remarks

Remember: **SALCHO**, Stroke, Alignment, Lighting, Color, Highlight, Outline

Here are some tips to check your work.

### Checking size

Inkscape has a handy tool to check your icon at various sizes. Go to **View → Icon Preview...** and it'll show you previews of your icon resized to 16, 24, 32 and 64 pixels.

### Checking your outline

1. Put your icon on a big rectangle that is the same color as the darkest color in your icon.
2. Still looks OK? Great. Go to the next step. If not, adjust the highlight.
3. Do the same but this time using the lightest color.
4. Still looks OK? Great. Outlines and highlights have been used appropriately. Otherwise, adjust the outline.

![](/images/Draft_Move_backgrounds_outline.svg)

Testing the icon against the darkest and lightest colors as background

|  |  |
| --- | --- |
| My icon is barely visible. | You have poor form contrast. Double check the outline and highlight, one of these is probably missing or improperly applied. |

### Checking your contrast

1. Export your icon from SVG to a bitmap format, like `.png` or `.jpg`.
2. Load your bitmap in an image program, and change it to grayscale. For example, in GIMP you would go to **Image → Mode → Grayscale**.
3. Inkscape allows you to convert the SVG directly to grayscale using **Extensions → Color → Grayscale**.
4. Can you still clearly make out any internal details? Great. The contrast is good.

A grayscale image allows you to more easily identify problems in contrast, as only a mix of black and white is present. Testing grayscale images is also good for colorblind users. If they can see the details in a grayscale image, then the contrast of the fully colored image is probably good as well.

![](/images/Draft_Move_contrast_grayscale.svg)

Testing the icon's contrast in grayscale

|  |  |
| --- | --- |
| I can't make out all the details. | The colors you've chosen have poor value contrast. Try using colors that are further apart in your 4 tone palette, that is, a highlight green beside a highlight yellow will be difficult to see, knock one of those colors down to Base or Dark. |

Retrieved from "<http://wiki.freecad.org/index.php?title=Artwork_Guidelines/it&oldid=1494625>"