---
title: Drawing Module
---

:::caution
TheDrawing Workbenchis no longer included after version 0.20.TheTechDraw Workbenchis its more advanced replacement.
:::
![](/images/Workbench_Drawing.svg)

Drawing workbench icon

## Introduction

Ritnings modulen tillåter dig att lägga ut ditt 3D arbete på papper. Det är, att lägga vyer av dina modeller i ett 2D fönster osh att sätta in det fönstret i en ritning, till exempel ett ark med en ram, en titel och din logotyp och slutligen skriva ut det arket. Ritningsmodulen är för närvarande under konstruktion och är mer eller mindre en teknologisk förhandstitt!

![](/images/Drawing_extraction.png)

## Gränssnittsverktyg

Detta är verktyg för att skapa, konfigurera och exportera 2D ritningsark

- ![](/images/Drawing_New.png) [Open scalable vector graphic](/Drawing_Open_SVG "Drawing Open SVG"): Opens a drawing sheet previously saved as an SVG file

- ![](/images/Drawing_Landscape_A3.png) [New A3 landscape drawing](/Drawing_Landscape_A3 "Drawing Landscape A3"): Creates a new drawing sheet from FreeCAD's default A3 template

- ![](/images/Drawing_View.png) [Insert a view](/Drawing_View "Drawing View"): Inserts a view of the selected object in the active drawing sheet

- ![](/images/Drawing_Annotation.png) [Annotation](/Drawing_Annotation "Drawing Annotation"): Adds an annotation to the current drawing sheet

- ![](/images/Drawing_Clip.png) [Clip](/Drawing_Clip "Drawing Clip"): Adds a clip group to the current drawing sheet

- ![](/images/Drawing_Openbrowser.png) [Open Browser](/Drawing_Openbrowser "Drawing Openbrowser"): Opens a preview of the current sheet in the browser

- ![](/images/Drawing_Orthoviews.png) [Ortho Views](/Drawing_Orthoviews "Drawing Orthoviews"): Automatically creates orthographic views of an object on the current drawing sheet

- ![](/images/Drawing_Symbol.png) [Symbol](/Drawing_Symbol "Drawing Symbol"): Adds the contents of a SVG file as a symbol on the current drawing sheet

- ![](/images/Drawing_DraftView.png) [Draft View](/Draft_Drawing "Draft Drawing"): Inserts a special Draft view of the selected object in the current drawing sheet

- ![](/images/Drawing_SpreadsheetView.png) [Spreadsheet View](/Drawing_SpreadsheetView "Drawing SpreadsheetView"): Inserts a view of a selected spreadsheet in the current drawing sheet

- ![](/images/Drawing_Save.png) [Save sheet](/Drawing_Save "Drawing Save"): Saves the current sheet as a SVG file

* [Project Shape](/Drawing_ProjectShape "Drawing ProjectShape"): Creates a projection of the selected object (Source) in the 3D view.

**Note**
The [Draft Workbench](/Draft_Workbench "Draft Workbench") has its own [Draft_Drawing](/Draft_Drawing "Draft Drawing") too to place Draft objects on paper. It has a couple of extra capabilities over the standard Drawing tools, and supports specific objects like [Draft dimensions](/Draft_Dimension "Draft Dimension").

I bilden så ser du huvudkoncepten av Ritningsmodulen. Dokumentet innehåller ett formobjekt (Schenkel) som vi vill göra en ritning av. Därför så är en "Sida" skapad. Sidan fås genom en mall, i detta fall "A3_Landskap" mallen. Mallen är ett SVG dokument som kan innehålla din vanliga sidram, din logotyp eller så den överensstämmer med dina presentationsstandarder.

I denna sida så kan vi sätta in en eller fler vyer. Varje vy har en position på sidan (Egenskaper X,Y), en skalfaktor (Egenskap skala) och ytterligare egenskaper. Varje gång som sidan ,eller vyn, eller det refererade objektet ändras så regenereras sidan och visningen uppdateras.

## Skript

För tillfället så är arbetsflödet för slutanvändaren väldigt begränsat, så skript API't är intressantare. Här följer exempel på hur man använder skript API't för ritningsmodulen.

See the [Drawing API example](/Drawing_API_example "Drawing API example") page for a description of the functions used to create drawing pages and views.

## Extending the Drawing Module

Some notes on the programming side of the drawing module will be added to the [Drawing Documentation](/Drawing_Documentation "Drawing Documentation") page. This is to help quickly understand how the drawing module works, enabling programmers to rapidly start programming for it.

## External links

- [Intro to mechanical drawing on Youtube - by Normal Universe](https://www.youtube.com/watch?v=1Hm5Zyjmjac)

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Workbench/sv&oldid=1462060>"
