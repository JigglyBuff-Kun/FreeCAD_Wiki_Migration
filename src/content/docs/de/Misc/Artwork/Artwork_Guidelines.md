---
title: Illustrationsrichtlinien
---
## Einleitung

*Hinweis:* für alle Symbole im Quellbaum, siehe [Grafik](/Artwork/de "Artwork/de").

Ein FreeCAD **Symbol** (icon) wird aus 6 Elementen zusammengesetzt, die man sich mit dem Akronym SALCHO merken kann: **S**troke, **A**lignment, **L**ighting, **C**olor, **H**ighlighting, **O**utline.
(deutsch: *Strich*, *Ausrichtung*, *Beleuchtung*, *Farbe*, *Hervorhebung*, *Kontur*)

Hier ist ein konkretes, wenn auch willkürliches Beispiel:

![](/images/FreeCAD_icon_example_details.svg)

|  |  |
| --- | --- |
| A | Die Hervorhebungsfarbe wird für die gesamte Oberfläche benutzt, um von oben hereinfallendes Licht anzudeuten |
| B | Die obligatorische dunkle Außenlinie umgibt die Symbolform, um Formkontrast zu bieten |
| C | Direkt innerhalb der Außenlinie bietet der Hervorhebungsstrich (Hervorhebungsfarbe) Kontrast zu dunklen Hintergründen |
| D | Diese Fläche ist hauptsächlich die Basisfarbe, aber ein leichter Verlauf von der Hervorhebung (oben links) zur Basis (unten rechts) vermittelt den Eindruck von Licht, das von links einfällt |
| E | Die Hervorhebung hier ist die Basisfarbe (ein Ton darunter), um den Eindruck zu vermitteln, dass dies die am weitesten vom Licht entfernte Fläche ist |
| F | Diese Fläche ist wie D, geht aber von der Basisfarbe (oben links) nach Dunkel (unten links), um den Eindruck zu vermitteln, dass dies die am weitesten vom Licht entfernte Fläche ist |

In den folgenden Abschnitten werden diese Elemente ausführlicher erläutert.

Dieses Symbol wird wie folgt angezeigt:

|  |  |
| --- | --- |
|  | 64 px, Originalgröße, große Schaltflächen. |
|  | 32 px, mittlere Größe, normale Schaltflächen. |
|  | 16 px, geringe Größe, wie sie in der [Baumansicht](/Tree_view/de "Tree view/de") erscheint. |

## Farben

*Obligatorisch*

FreeCAD verwendet eine Palette, die der [Tango Palette](https://web.archive.org/web/20190921043652/http://tango.freedesktop.org/tango_icon_theme_guidelines) nachempfunden ist. Jede Hauptfarbe gibt es in 4 Farbtönen: Highlight, Base, Dark und Outline. Beachte, dass die Umrisslinie nicht komplett schwarz ist, sondern eine sehr dunkle Variante der Grundfarbe.

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

Vollständige Palette

Eine Auswahl einiger Hauptfarben.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  |  |  | Gelbtöne sollten für Werkzeuge verwendet werden, die Objekte erstellen; siehe die Arbeitsbereiche [Part](/Part_Workbench/de "Part Workbench/de") und [Draft](/Draft_Workbench/de "Draft Workbench/de") für Beispiele. |
|  |  |  |  | Blautöne sollten für Werkzeuge verwendet werden, die Objekte verändern; siehe die Arbeitsbereiche [Part](/Part_Workbench/de "Part Workbench/de") und [Draft](/Draft_Workbench/de "Draft Workbench/de") für Beispiele. |
|  |  |  |  | Türkistöne sollten für Werkzeuge im Zusammenhang mit Ansichten verwendet werden; siehe [Menü Ansicht](/Std_View_Menu/de "Std View Menu/de") für Beispiele. |
|  |  |  |  | Rottöne sollten für Werkzeuge im Zusammenhang mit (dem Festlegen von) Randbedingungen verwendet werden; siehe den Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") für Beispiele. |

|  |  |
| --- | --- |
| Warum sollte ich mich auf diese Farben beschränken? | Die Einschränkung auf eine bestimmte Farbpalette hilft, eine heterogene Ikonographie zu vermeiden und verbessert die Lesbarkeit bei vielen Symbolen. |
| Wie verwende ich die FreeCAD-Palette? | Die Installation [der Palette](https://gist.github.com/GAZ082/724d2092b2986e3b17b9663f34093cf5) ist so einfach wie [Kopiere dir sie in deinen Inkscape Palettenordner](https://inkscape.org/en/learn/faq/#how-install-new-extensions-palettes-document-templates-symbol-sets-icon-sets-etc). |

## Gitter und Strichbreite

*Obligatorisch*

FreeCAD Symbole haben eine nominale Größe von 64 Pixeln, sowohl in der Breite als auch in der Höhe. Bei der Erstellung oder Bearbeitung, vergewissere dich, dass die Dokumentgröße 64 x 64 beträgt, wobei die Einheit Pixel (px) ist. Ein innerer Rand von 2px Leerraum rund um den Dokumentbereich ist nützlich, da er Effekte wie Anti-Aliasing (Verwischung der Kanten) verhindert. Das heißt, der nutzbare Raum für das Symbol sollte als 60 x 60 betrachtet werden, und die Ränder sollten leer gelassen werden.

![](/images/FreeCAD_icon_size.svg)

Zeichne das Symbol innerhalb des blauen Bereichs und alles wird gut funktionieren.

Es wird auch dringend empfohlen, ein visuelles Gitter zu verwenden, das alle Pixel eine Nebenrasterlinie und alle 2 Pixel eine Hauptrasterlinie aufweist. Die Striche des Symbols sollten an den Schnittpunkten des Nebenrasters ausgerichtet werden.

Striche sollten nicht "dünner" als 2px sein, mit abgerundeten Köpfen und Ecken in den meisten Fällen. Striche können *dicker* sein, aber sie sollten vorzugsweise ein Vielfaches von 2px sein, um die Skalierung Unschärfe zu minimieren.

![](/images/FreeCAD_icon_stroke_2px.svg)

Raster mit Strichen, die ein Vielfaches von 2px sind.

|  |  |
| --- | --- |
| Warum dieses Gitter und Strichbreite verwenden? | Aus historischen Gründen verwendet FreeCAD ein 64x64 Symbol, das dann verkleinert wird. Das ist nicht ideal, aber es verleiht dem Ganzen Charakter. Infolgedessen hilft die Ausrichtung an einem Zweierpotenzraster mit Dicken, die Zweierpotenzen sind, Anti-Aliasing Probleme bei der Neuskalierung zu vermeiden oder zumindest abzuschwächen. |
| Wie kann ich das einhalten? | Wenn du Inkscape verwendest, gehe zu **Datei → Dokumenteigenschaften** und stelle sicher, dass die Breite, Höhe und Einheiten deiner Seite korrekt sind. Dann gehe auf den **Gitter** reiter, klicke auf Neu, setze die Einheiten auf `px`, `Abstand X` und `Abstand Y` auf 1 und `Hauptgitterlinie jede` auf 2. |

## Außenlinie

*Obligatorisch*

Gestützt auf die Hauptfarbe des Symbols stelle sicher, dass es, wie bereits erwähnt, eine dunkle Umrandung von 2 px gibt. Dies funktioniert zusammen mit der Hervorhebung, um einen guten Formkontrast auf mehreren Hintergrundtönen zu gewährleisten.

![](/images/Draft_Point.svg) ![](/images/Draft_Point_backgrounds.svg)

Der dunkle Rand des Symbols ist der Umriss.

|  |  |
| --- | --- |
| Warum wird die Außenlinie gebraucht? | Die Umrisslinie ist das Skelett, an dem alles andere hängt, indem sie den Formkontrast erhöht. Die Verwendung der Umrissfarbe oder der dunklen Farbe hängt von der jeweiligen Situation ab, aber ohne diese Linie wird die Auswahl an Hintergründen, auf denen das Symbol sichtbar ist, drastisch begrenzt |
| Wie kann ich dies beheben? | Füge einfach um jeden Teil des Symbols, der an die Hintergrundfarbe angrenzt, einen Strich von 2 px hinzu, d. h. die Umrisslinie ist für externe Striche. Bei Formen, die in der Mitte ein Loch haben, z. B. ein Donut, sollte der Umriss auch um das innere Loch gelegt werden. Richte die Knoten deines Pfades so weit wie möglich am Raster aus, die auf die kleineren Gitterschnittpunkte abzielen. |

## Hervorhebung

*Dringend empfohlen*

Füge einen internen Strich von 2px unter Verwendung der Hervorhebungsfarbe hinzu, um zu helfen, dass die Außenlinie hervorspringt. Auf dunklen Hintergründen ist es diese Hervorhebung, die dem Symbol die Form gibt.

![](/images/Draft_Move.svg) ![](/images/Draft_Move_backgrounds.svg)

Die helle Hervorhebung hilft bei dunklen Hintergründen.

|  |  |
| --- | --- |
| Warum die Hervorhebung benutzen? | Die Hervorhebung arbeitet mit der Kontur zusammen, um den Kontrast der Form zu verbessern, insbesondere auf dunklen Hintergründen. Es ist nie eine schlechte Idee, aber wenn du nicht den nötigen Platz hast, z. B. wenn du eine sehr dünne Linie hast, kannst du darauf verzichten, vorausgesetzt, du hast für einen ausreichenden Kontrast zwischen der Hauptfarbe und dem Umriss gesorgt. |
| Wie kann ich das einhalten? | Ziehe wie bei der Kontur einfach einen Strich von 2 px um die Innenseite der Kontur, wobei du die Knoten nach Möglichkeit am Raster fängst und auf die kleineren Rasterschnittpunkte abzielst. |

## Beleuchtung

*Optional*

Gemäß den Tango Richtlinien solltest du beim Hinzufügen eines Beleuchtungsverlaufseffekts versuchen, es so aussehen zu lassen, als käme das Licht von links oben. Dazu fügst du die Farbe für die Lichter oben links und die Farbe für die Basis oder Dunkelheit unten rechts hinzu. Beachte, dass nur Palettenfarben verwendet werden.

![](/images/Draft_Clone.svg) ![](/images/Draft_Clone_backgrounds.svg)

Subtiler Lichteffekt von links oben kommend.

|  |  |
| --- | --- |
| Warum Beleuchtung verwenden? | Beleuchtung ist nur eine weitere Möglichkeit, Symbole miteinander zu verbinden und sicherzustellen, dass es verschiedene Stufen von ["value"](https://en.wikipedia.org/wiki/Lightness) gibt, um ihre Lesbarkeit zu verbessern. Vorausgesetzt, der Umriss und die Hervorhebung sind vorhanden, kann dies als optional betrachtet werden. |
| Wie kann ich das einhalten? | Stelle die Füllung auf einen linearen oder radialen Farbverlauf ein. In Inkscape ist dies in den Strich- und Fülleinstellungen möglich; mit "F2" kann man die Knoten des Farbverlaufs verschieben, um sicherzustellen, dass sie im richtigen Winkel stehen. |

## Empfohlenes Aufzeichnungsformat

Alle Symbole sollten im Format [SVG](/SVG/de "SVG/de") mit einer Vektorbildanwendung, wie beispielsweise [Inkscape](http://inkscape.org), erstellt werden.
Dies erleichtert die Anwendung von Änderungen und die Ableitung zusätzlicher Symbole im selben Anwendungsbereich.

Wenn Symbole für die direkte Verwendung durch FreeCAD (in einer \*.qrc-Datei) übertragen werden, speichere sie als "Reines SVG". Dies reduziert die Größe des Symbols und spart Festplatten- und Speicherplatz.

## Abschließende Bemerkungen

Denke daran:: **SALCHO**, Stroke, Alignment, Lighting, Colour, Highlight, Outline

Hier sind einige Tips, um Deine Arbeit zu überprüfen:

### Größe prüfen

Inkscape verfügt über ein praktisches Werkzeug, um dein Symbol in verschiedenen Größen zu prüfen. Gehe zu **Ansicht → Symbolvorschau...** und es wird dir Voransichten deines Symbols geändert auf 16, 24, 32 und 64 Pixel anzeigen.

### Prüfung Deiner Umrißlinie

1. Setze dein Symbol auf ein großes Rechteck, das die gleiche Farbe hat wie die dunkelste Farbe deines Symbols.
2. Sieht das immer noch gut aus? Prima! Gehe zum nächsten Schritt. Wenn nicht, passe die Hervorhebung an.
3. Mache dasselbe, aber dieses Mal mit der hellsten Farbe.
4. Sieht das immer noch gut aus? Sehr gut. Umrisse und Hervorhebungen wurden richtig eingesetzt. Andernfalls passe die Umrißlinie an.

![](/images/Draft_Move_backgrounds_outline.svg)

Testen des Symbols vor der dunkelsten und der hellsten Farbe als Hintergrund

|  |  |
| --- | --- |
| Mein Symbol ist kaum sichtbar. | Du hast einen schlechten Formkontrast. Überprüfe den Umriss und die Hervorhebung. Wahrscheinlich fehlt eines der beiden Elemente oder ist nicht richtig angewendet. |

### Prüfung Deines Kontrastes

1. Exportiere dein Symbol von SVG in ein Bitmap Format, wie `.png` oder `.jpg`.
2. Lade dein Bitmap in ein Bildprogramm und ändere es in Graustufen. In GIMP würdest du zu **Bild → Modus→ Graustufen** gehen.
3. Inkscape erlaubt dir das SVG direkt mit **Erweiterungen → Farbe → Graustufen** in Graustufen umzuwandeln.
4. Kannst du die internen Details noch klar erkennen? Sehr gut. Der Kontrast ist gut.

Ein Graustufenbild erlaubt dir Kontrastprobleme leichter zu erkennen, da nur eine Mischung aus Schwarz und Weiß vorhanden ist. Das Testen von Graustufenbildern ist auch für farbenblinde Benutzer von Vorteil. Wenn sie die Details in einem Graustufenbild erkennen können, dann ist der Kontrast des vollfarbigen Bildes wahrscheinlich auch gut.

![](/images/Draft_Move_contrast_grayscale.svg)

Prüfung des Symbolkontrasts in Graustufen

|  |  |
| --- | --- |
| Ich kann nicht alle Details ausmachen. | Die von Ihnen gewählten Farben haben einen schlechten Wertkontrast. Versuche, Farben zu verwenden, die in deiner 4 Ton Palette weiter voneinander entfernt sind, d. h. ein helles Grün neben einem hellen Gelb wird schwer zu erkennen sein. |

Retrieved from "<http://wiki.freecad.org/index.php?title=Artwork_Guidelines/de&oldid=1494662>"