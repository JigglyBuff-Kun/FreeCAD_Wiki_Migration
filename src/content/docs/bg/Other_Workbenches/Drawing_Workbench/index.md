---
title: Drawing Module
---

:::caution
TheDrawing Workbenchis no longer included after version 0.20.TheTechDraw Workbenchis its more advanced replacement.
:::
![](/images/Workbench_Drawing.svg)

Drawing workbench icon

## Introduction

The Drawing module allows you to put your 3D work on paper. That is, to put views of your models in a 2D window and to insert that window in a drawing, for example a sheet with a border, a title and your logo and finally print that sheet.

![](/images/Drawing_extraction.png)

## Tools

These are tools for creating, configuring and exporting 2D drawing sheets

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

* _Note:_ the [Draft Drawing](/Draft_Drawing "Draft Drawing") tool is used with [Draft objects](/Draft_Workbench "Draft Workbench"). It has some additional capabilities over the Drawing tools, and supports specific objects like [Draft dimensions](/Draft_Dimension "Draft Dimension").

## Workflow

The document contains a 3D shape object (leg) from which we want to produce a drawing. Therefore a "Page" is created. A page it's instantiated from a template, for example, the "A3_Landscape" template. The template is an [SVG](/SVG "SVG") document which can hold a page frame, a logo, and other elements.

In this page we can insert one or more views. Each view has a position on the page, a scale factor, and additional properties. Every time the page or the view or the referenced object changes, the page is regenerated and the page display updated.

## Scripting

At the moment the graphical user interface workflow is very limited, so the scripting API is more interesting.

See the [Drawing API example](/Drawing_API_example "Drawing API example") page for a description of the functions used to create drawing pages and views.

## Extending the Drawing Module

Some notes on the programming side of the drawing module will be added to the [Drawing Documentation](/Drawing_Documentation "Drawing Documentation") page. This is to help quickly understand how the drawing module works, enabling programmers to rapidly start programming for it.

## External links

- [Intro to mechanical drawing on Youtube - by Normal Universe](https://www.youtube.com/watch?v=1Hm5Zyjmjac)

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Workbench/bg&oldid=1462064>"
