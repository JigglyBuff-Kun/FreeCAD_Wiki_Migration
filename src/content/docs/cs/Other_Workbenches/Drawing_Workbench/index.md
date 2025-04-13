---
title: Modul Výkres
---

:::caution
TheDrawing Workbenchis no longer included after version 0.20.TheTechDraw Workbenchis its more advanced replacement.
:::
![](/images/Workbench_Drawing.svg)

Drawing workbench icon

## Introduction

Modul Výkres umožňuje dostat Vaši 3D práci na papír. To znamená dát pohledy na Vaše modely do 2D okna a vložit toto okno do výkresu, např. list s okraji, hlavička a logo a nakonec tento list vytisknout.

![](/images/Drawing_extraction.png)

## GUI Nástroje

These are tools for creating, configuring and exporting 2D drawing sheets

- ![](/images/Drawing_New.png) [Open scalable vector graphic](/Drawing_Open_SVG/cs "Drawing Open SVG/cs"): Opens a drawing sheet previously saved as an SVG file

- ![](/images/Drawing_Landscape_A3.png) [New A3 landscape drawing](/Drawing_Landscape_A3/cs "Drawing Landscape A3/cs"): Creates a new drawing sheet from FreeCAD's default A3 template

- ![](/images/Drawing_View.png) [Insert a view](/Drawing_View/cs "Drawing View/cs"): Inserts a view of the selected object in the active drawing sheet

- ![](/images/Drawing_Annotation.png) [Annotation](/Drawing_Annotation/cs "Drawing Annotation/cs"): Adds an annotation to the current drawing sheet

- ![](/images/Drawing_Clip.png) [Clip](/Drawing_Clip/cs "Drawing Clip/cs"): Adds a clip group to the current drawing sheet

- ![](/images/Drawing_Openbrowser.png) [Open Browser](/Drawing_Openbrowser/cs "Drawing Openbrowser/cs"): Opens a preview of the current sheet in the browser

- ![](/images/Drawing_Orthoviews.png) [Ortho Views](/Drawing_Orthoviews/cs "Drawing Orthoviews/cs"): Automatically creates orthographic views of an object on the current drawing sheet

- ![](/images/Drawing_Symbol.png) [Symbol](/Drawing_Symbol/cs "Drawing Symbol/cs"): Adds the contents of a SVG file as a symbol on the current drawing sheet

- ![](/images/Drawing_DraftView.png) [Draft View](/Draft_Drawing "Draft Drawing"): Inserts a special Draft view of the selected object in the current drawing sheet

- ![](/images/Drawing_SpreadsheetView.png) [Spreadsheet View](/Drawing_SpreadsheetView "Drawing SpreadsheetView"): Inserts a view of a selected spreadsheet in the current drawing sheet

- ![](/images/Drawing_Save.png) [Save sheet](/Drawing_Save/cs "Drawing Save/cs"): Saves the current sheet as a SVG file

* [Project Shape](/Drawing_ProjectShape "Drawing ProjectShape"): Creates a projection of the selected object (Source) in the 3D view.

**Poznámka**
[Kreslicí modul](/Draft_Workbench/cs "Draft Workbench/cs") má také svůj vlastní [Výkres](/Draft_Drawing/cs "Draft Drawing/cs") pro umístění Kreslených objektů na papír. Má pár zvláštních možností nad standardními nástroji Výkresu a podporuje specifické objekty jako je [Kótování](/Draft_Dimension/cs "Draft Dimension/cs").

Na obrázku vidíte koncept modulu Výkresu. Dokument obsahuje konstrukční objekt, který chceme vyjmout do výkresu. Proto je vytvořena "Stránka (Page)". Stránka je realizována pomocí šablony, v tomto případě přes šablonu "A3_Landscape". Šablona je SVG dokument, který může obsahovat Váš běžný rámeček stránky, Vaše logo nebo dodržuje Vaše prezentační standardy.

Do stránky můžeme vložit jeden nebo více pohledů. Každý pohled má svoji pozici na stránce (Vlastnosti X,Y), měřítko (Vlastnost měřítko) a další vlastnosti. Pokaždé když se stránka, pohled nebo odkazovaný objekt změní, stránka změny zachytí a zobrazení se aktualizuje.

## Skriptování

V současnosti je uživatelské rozhraní (GUI) velmi omezené, proto je skriptovací API mnohem zajímavější. Následují příklady ukazují jak použít skriptovací API modulu Výkresu.

See the [Drawing API example](/Drawing_API_example "Drawing API example") page for a description of the functions used to create drawing pages and views.

## Rozšíření modulu Výkres

Některé poznámky k programovací stránce vykreslovacího modulu budou přidány na stránku [Dokumentace výkresu](/Drawing_Documentation/cs "Drawing Documentation/cs"). Je to příspěvek k rychlejšímu porozumění jak funguje modul výkresu, aby programátorům umožnily rychle začít s jejich programováním.

## External links

- [Intro to mechanical drawing on Youtube - by Normal Universe](https://www.youtube.com/watch?v=1Hm5Zyjmjac)

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Workbench/cs&oldid=1462052>"
