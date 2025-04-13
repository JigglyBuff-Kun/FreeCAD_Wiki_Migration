---
title: Atelierul Desenare 3D
---

:::caution
TheDrawing Workbenchis no longer included after version 0.20.TheTechDraw Workbenchis its more advanced replacement.
:::
![](/images/Workbench_Drawing.svg)

Drawing workbench icon

## Introducere

Modulul de desenare vă permite să puneți lucrul 3D pe hârtie. Adică, pentru a afișa vizualizările modelelor dvs. într-o fereastră 2D și pentru a insera acea fereastră într-un desen, de exemplu o foaie cu graniță, un titlu și logo-ul dvs. și, în final, să tipăriți această foaie.

![](/images/Drawing_extraction.png)

## Instrumente

Unelte pentru crearea, configurarea si exportul foilor de desen 2D

- ![](/images/Drawing_New.png) [Deschide imagine vectoriala scalabila - SVG](/Drawing_Open_SVG/ro "Drawing Open SVG/ro"): Deschide o foaie de desen salvata anterior ca si fisier SVG

- ![](/images/Drawing_Landscape_A3.png) [Desen nou A3 peisaj](/Drawing_Landscape_A3/ro "Drawing Landscape A3/ro"): Creaza o noua foaie de desen din sablonul implicit FreeCAD

- ![](/images/Drawing_View.png) [Inserare vizualizare](/Drawing_View/ro "Drawing View/ro"): Insereaza o vizualizare a obiectelor selectate in foaia din desenul activ

- ![](/images/Drawing_Annotation.png) [Annotation](/Drawing_Annotation "Drawing Annotation"): Adaugă o adnotare în foaia de desen curent

- ![](/images/Drawing_Clip.png) [Clip](/Drawing_Clip "Drawing Clip"): Adaugă un grup de clipuri în foaia de desen curent

- ![](/images/Drawing_Openbrowser.png) [Open Browser](/Drawing_Openbrowser "Drawing Openbrowser"): Deschide o previzualizare a foii curente din browser

- ![](/images/Drawing_Orthoviews.png) [Ortho Views](/Drawing_Orthoviews "Drawing Orthoviews"): Creează automat vederi ortografice ale unui obiect

- ![](/images/Drawing_Symbol.png) [Symbol](/Drawing_Symbol "Drawing Symbol"): Adaugă conținutul unui fișier SVG ca simbol în foaie de desen curentă

- ![](/images/Drawing_DraftView.png) [Draft View](/Draft_Drawing "Draft Drawing"): Inserează o vizualizare specială a unui obiect selectat în foaia de desen curent

- ![](/images/Drawing_SpreadsheetView.png) [Spreadsheet View](/Drawing_SpreadsheetView "Drawing SpreadsheetView"): Inserts a view of a selected spreadsheet in the current drawing sheet

- ![](/images/Drawing_Save.png) [Salveaza foaie](/Drawing_Save/ro "Drawing Save/ro"): Salveaza foaia curenta ca si fisier SVG

* [Project Shape](/Drawing_ProjectShape "Drawing ProjectShape"): Creează o proiecție a obiectului selectat (Sursă) în vizualizarea 3D.

* Notă _Note:_

Instrumentul [Draft View](/Draft_Drawing "Draft Drawing") este utilizat în special pentru a plasa obiecte 2D Draft pe hârtie. Acesta are câteva capabilități adiționale și suportă obiecte specifice ca de ex: [Draft dimensions](/Draft_Dimension "Draft Dimension").

## Flux de lucru

Documentul conține un obiect 3D (Schenkel) din care dorim să realizăm un desen. Prin urmare, este creată o "pagină". O pagină este instanțiată dintr-un șablon, de exemplu șablonul "A3_Landscape". Șablonul este un document [SVG](/SVG "SVG") care poate conține un cadru de pagină, un logo și alte elemente.

În această pagină putem introduce una sau mai multe vizualizări. Fiecare vizualizare are o poziție pe pagină (Proprietăți X, Y), un factor de scară (Scala proprietății) și proprietăți suplimentare. De fiecare dată când pagina sau vizualizarea sau obiectul referință se modifică, pagina este regenerată și actualizarea paginii este actualizată.

## Scrip-Programare

În prezent, fluxul de lucru al interfeței grafice cu utilizatorul este foarte limitat, astfel încât API-ul de scripting este mai interesant.

Consultați pagina [Drawing API example](/Drawing_API_example "Drawing API example") pentru o descriere a funcțiilor utilizate pentru a crea pagini de desen și vizualizări.

## Extensii la Atelierul de Desen 3D

Unele note despre partea de programare a modulului de desen vor fi adăugate la pagina [Drawing Documentation](/Drawing_Documentation "Drawing Documentation") . Acest lucru va ajuta să intelegeți rapid modul în care funcționează modulul de desen, permițând programatorilor sa înceapă rapid programarea pentru aceasta.

## External links

## legături Externe

- [Intro to mechanical drawing on Youtube - by Normal Universe](https://www.youtube.com/watch?v=1Hm5Zyjmjac)

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Workbench/ro&oldid=1462071>"
