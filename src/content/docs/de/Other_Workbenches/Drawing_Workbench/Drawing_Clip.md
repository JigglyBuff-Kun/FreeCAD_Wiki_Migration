---
title: Drawing Ausschnitt
---
|  |
| --- |
| Drawing Ausschnitt |
| Menüeintrag |
| Drawing → Ausschnitt |
| Arbeitsbereich |
| [Drawing](/Drawing_Workbench/de "Drawing Workbench/de"), Complete |
| Standardtastenkürzel |
| - |
| Eingeführt in Version |
| - |
| Siehe auch |
| - |
|  |

:::caution
Die Entwicklung des Drawing-Moduls wurde gestoppt und ein neuer in v0.17 eingeführterTechDraw-Arbeitsbereichzielt darauf, es zu setzen. Beide Module stehen in v0.17 zur Verfügung, aber das Drawing-Modul könnte in zukünftigen Ausgaben entfernt werden.
:::

## Beschreibung

Dieser Befehl erlaubt, ein beschneidendes Rechteck auf einer [Zeichnungsseite](/Drawing_Landscape_A3/de "Drawing Landscape A3/de") zu platzieren. [Zeichnungsansicht](/Drawing_View/de "Drawing View/de")-Objekte können dann zu diesem Rechteck hinzugefügt werden und ihre Ansicht wird durch die Ränder des Rechtecks beschnitten.

## Anwendung

1. Erstelle eine [Zeichnungsseite](/Drawing_Landscape_A3/de "Drawing Landscape A3/de")
2. [Aktualisiere](/Std_Refresh "Std Refresh") die Ansicht, falls keine Zeichnungsansicht geöffnet war
3. Drücke den ![](/images/Drawing_Clip.png) Zeichnung Ausschnitt-Button
4. Passe die gewünschten Eigenschaften an, wie Größe und Position.
5. Ziehe die [Zeichnungsansicht](/Drawing_View/de "Drawing View/de")-Objekte auf das Ausschnittsobjekt in der Baumansicht und lasse sie dort fallen (drag & drop)

## Optionen

* Eine Eigenschaft erlaubt das Anzeigen oder Verstecken des beschneidenden Rechtecks selbst.

## Einschränkungen

* Beschneidende Objekte werden nicht sauber durch den internen Qt-basierten Svg-Viewer angezeigt, aber der [Open Browser](/Drawing_Openbrowser/de "Drawing Openbrowser/de")-Befehl zeigt sie korrekt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Clip/de&oldid=1010761>"