---
title: Módulo de Dibujo
---

:::caution
TheDrawing Workbenchis no longer included after version 0.20.TheTechDraw Workbenchis its more advanced replacement.
:::
![](/images/Workbench_Drawing.svg)

El icono del Ambiente de trabajo Dibujar

## Introducción

El módulo de Dibujo le permite poner su trabajo 3D en papel. Es decir, poner vistas de tus modelos en una ventana 2D e insertar esa ventana en un dibujo, por ejemplo una hoja con un borde, un título y tu logo y finalmente imprimir esa hoja.

![](/images/Drawing_extraction.png)

## Herramientas

Estas son las herramientas para la creación, configuración y exportación de hojas de dibujo 2D

- ![](/images/Drawing_New.png) [Abre SVG scalable vector graphic](/Drawing_Open_SVG/es "Drawing Open SVG/es"): Abre una hoja de dibujo previamente guardada en un archivo SVG

- ![](/images/Drawing_Landscape_A3.png) [Nueva hoja de dibujo en formato A3](/Drawing_Landscape_A3/es "Drawing Landscape A3/es"): Crea una hoja de dibujo nueva a partir de la plantilla por defecto A3 de FreeCAD

- ![](/images/Drawing_View.png) [Insertar una vista](/Drawing_View/es "Drawing View/es"): Inserta una vista de los objetos seleccionados en la hoja de dibujo activa

- ![](/images/Drawing_Annotation.png) [Anotación](/Drawing_Annotation/es "Drawing Annotation/es"): Añade una anotación a la hoja de dibujo actual

- ![](/images/Drawing_Clip.png) [Clip](/Drawing_Clip "Drawing Clip"): Adds a clip group to the current drawing sheet

- ![](/images/Drawing_Openbrowser.png) [Open Browser](/Drawing_Openbrowser "Drawing Openbrowser"): Opens a preview of the current sheet in the browser

- ![](/images/Drawing_Orthoviews.png) [Ortho Views](/Drawing_Orthoviews "Drawing Orthoviews"): Automatically creates orthographic views of an object on the current drawing sheet

- ![](/images/Drawing_Symbol.png) [Symbol](/Drawing_Symbol "Drawing Symbol"): Adds the contents of a SVG file as a symbol on the current drawing sheet

- ![](/images/Drawing_DraftView.png) [Draft View](/Draft_Drawing "Draft Drawing"): Inserts a special Draft view of the selected object in the current drawing sheet

- ![](/images/Drawing_SpreadsheetView.png) [Spreadsheet View](/Drawing_SpreadsheetView "Drawing SpreadsheetView"): Inserts a view of a selected spreadsheet in the current drawing sheet

- ![](/images/Drawing_Save.png) [Guardar hoja de dibujo](/Drawing_Save/es "Drawing Save/es"): Guarda la hoja de dibujo actual como un archivo SVG

* [Project Shape](/Drawing_ProjectShape "Drawing ProjectShape"): Creates a projection of the selected object (Source) in the 3D view.

* _Nota_

La herramienta [Borrador boceto](/Draft_Drawing/es "Draft Drawing/es") es utilizada para [objetos boceto](/Draft_Workbench/es "Draft Workbench/es"). Tiene algunas capacidades adicionales sobre las herramientas de Dibujo, y soporta objetos específicos como [Dimensiones de borrador](/Draft_Dimension/es "Draft Dimension/es").

## Flujo de trabajo

El documento contiene un objeto de forma 3D (pierna) del que queremos producir un dibujo. Por lo tanto, se crea una "Página". Una página es instanciada desde una plantilla, por ejemplo, la plantilla "A3_Landscape". La plantilla es un documento [SVG](/SVG/es "SVG/es") que puede contener un marco de página, un logotipo y otros elementos.

En esta página podemos insertar una o varias vistas. Cada vista tiene una posición en la página, un factor de escala y propiedades adicionales. Cada vez que la página o la vista o el objeto referenciado cambian, la página se regenera y la visualización de la página se actualiza.

## Guión

Por el momento, el flujo de trabajo de la interfaz gráfica de usuario es muy limitado, por lo que la API de scripting es más interesante.

See the [Drawing API example](/Drawing_API_example "Drawing API example") page for a description of the functions used to create drawing pages and views.

## Ampliación del módulo dibujo

Some notes on the programming side of the drawing module will be added to the [Drawing Documentation](/Drawing_Documentation "Drawing Documentation") page. This is to help quickly understand how the drawing module works, enabling programmers to rapidly start programming for it.

## External links

## Enlaces externos

- [Introducción al dibujo mecánico en Youtube - por el Universo Normal](https://www.youtube.com/watch?v=1Hm5Zyjmjac)

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Workbench/es&oldid=1462054>"
