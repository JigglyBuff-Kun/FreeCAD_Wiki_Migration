---
title: Tutorial pentru atelierul Desen 2D (Draft)
---

|                                                              |
| ------------------------------------------------------------ |
| Tutorial                                                     |
| Topic                                                        |
| Drafting                                                     |
| Level                                                        |
| Beginner                                                     |
| Time to complete                                             |
| 20 minutes                                                   |
| Authors                                                      |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| FreeCAD version                                              |
| 0.16 or above                                                |
| Example files                                                |
|                                                              |
| See also                                                     |
| _None_                                                       |
|                                                              |

### Introducere

Acest îndrumător este menit să deprindă utilizatorul cu elementele de bază ale unui flux de operaţii bazat pe [Panoul Ciornă (Draft)](/Draft_Workbench/ro "Draft Workbench/ro"), printre care se numără crearea de profile, folosirea planurilor active, crearea dimensiunilor de cotare, textelor şi notelor. Acest îndrumător foloseşte notarea **(X, Y, Z)** pentru desemnarea coordonatelor necesare pentru definirea diferitelor puncte într-un obiect.

This tutorial was originally written by Drei, and it was rewritten and illustrated by vocx.

This tutorial is meant to introduce the reader to the basic workflow of the ![](/images/Workbench_Draft.svg) [Draft Workbench](/Draft_Workbench "Draft Workbench").

The reader will practice:

- creation of lines, arcs, and polygons
- the use of working planes
- the creation of dimensions, text, and shapestrings
- the creation of a technical drawing

This tutorial uses the notation `(x, y, z)` to denote the coordinates required to define points in an object. The default unit is millimeters `mm`.

![](/images/00_Dr01_Draft_Tutorial_final.png)

Final drawing including various Draft objects.

### Cerinţe

- FreeCAD versiunea 0.16 sau anterioară
- Cititorul cunoaşte cum se folosesc _tab_-urile **Date** şi **Vedere** pentru a schimba proprietăţile unui element atunci când doreşte acest lucru.

1. Open FreeCAD, create a new empty document with **File → ![](/images/Std_New.svg) [New](/Std_New "Std New")**.

: 1.1. Switch to the [Draft Workbench](/Draft_Workbench "Draft Workbench") from the [workbench selector](/Std_Workbench "Std Workbench"), or the menu **View → Workbench → ![](/images/Workbench_Draft.svg) Draft**.
: 1.2. Make sure you understand how to use the [property editor](/Property_editor "Property editor"), particularly the **Data** and **View** tabs to change the properties. When changing properties, you may have to do a ![](/images/Std_Refresh.svg) [Std Refresh](/Std_Refresh "Std Refresh") action to see the result in the [3D view](/3D_view "3D view").
: 1.3. Since the Draft objects are planar shapes, they are better viewed from the top. Use ![](/images/Std_ViewTop.svg) [View top](/Std_ViewTop "Std ViewTop") to set the [3D view](/3D_view "3D view").
: 1.4. Although it is not used in this tutorial, the Draft grid is helpful to position geometrical elements. Use ![](/images/Draft_SelectPlane.svg) [SelectPlane](/Draft_SelectPlane "Draft SelectPlane") to set both the working plane and the grid, and then show and hide the grid with ![](/images/Draft_ToggleGrid.svg) [Toggle grid](/Draft_ToggleGrid "Draft ToggleGrid").

### Cum se procedează

Este obligatoriu să vă asigurați că bara de instrumente **Ciornă Ancorare** (Draft Snap toolbar) va fi disponibilă pentru utilizare pe parcursul operaţiilor din acest îndrumător.

1. Porniţi **FreeCAD**.
2. Dacă nu ați deschis un nou document FreeCAD (cea mai mare parte a ferestrei FreeCAD se prezintă ca fiind gri), din meniul derulant, faceți clic pe Fișier, apoi pe Nou sau faceți clic pe instrumentul \*_Creați un document nou_- ![](/images/Document-new.svg).
3. Activați panoul **Ciornă** (Draft );
4. Selectați meniul **Editare**;
5. Faceți clic pe **Preferințe**;
6. Mergeți la **Ciornă** (Draft ) și selectați tab-ul **Grilă și ancorare** (Grid and snapping);
7. Verificați dacă bara de instrumente **Arată bara Ciornă Ancorare** (Show Draft Snap toolbar) este activă.

Rețineți că puteți modifica vizibilitatea **Grilei** din acest meniu, în cazul în care doriți să o dezactivați.

#### Folosirea planelor

Planele sunt folosite pentru a delimita efectul uneltelor din **Ciornă** la un anumit plan, evitând astfel problemele cu localizarea punctelor și curbelor în piesele complexe.
Planele pot să se refere la axele sistemului de coordonate **(XY, YZ, ...)** sau pot să folosească o suprafață plană din document ca referință.

Most Draft objects are planar shapes so they are naturally based on a _working plane_. A working plane can be one of the main XY, XZ, and YZ global coordinate planes, or it can be a plane that is parallel to them with a positive or negative offset, or it can be a plane defined by the face of a solid object.

1. Selectați ![](/images/Draft_SelectPlane.png) [Alegeţi planul de lucru](/Draft_SelectPlane "Draft SelectPlane"). Acesta poate fi localizat în **Bara de unelte Panou Ciornă** sau în **Meniul Ciornă** din secţiunea **Unelte pentru crearea de ciorne**.
2. Selectați planul **XY**.

Before pressing the button, you can also change the value of the offset in millimeters, as well as the grid spacing, the main lines and snapping radius.

##### Linii și Arce

1. Selectați ![](/images/Draft_Arc.png) [Arc](/Draft_Arc "Draft Arc").
2. Setați **centrul** la **(0, 0, 0)**.
3. Setați **raza** la 30 mm.
4. **Unghiul de pornire** este de 60,0°.
5. **Deschiderea** este de 60,0°.

Repetați procedeul pentru trasarea unui al doilea arc cu o rază de 25 mm. Celelalte proprietăți rămân neschimbate.

1. Selectaţi ![](/images/Draft_Line.png) [Linie](/Draft_Line/ro "Draft Line/ro").
2. Îndreptaţi-vă către **capătul** oricărui arc. Când cursorul Dvs. ![](/images/Draft_Snap_Endpoint.svg) se va apropia de punctul de terminare, la apropierea de el, punctul va deveni alb.
3. Selectaţi capătul celuilalt arc şi uniţi.
4. Repetaţi operaţia în cealaltă parte a arcelor.

![](/images/01_Dr01_Draft_Arc_profile.png)

Closed profile created by two arcs and two lines.

## Fusing or compounding

Acum avem mai multe curbe care descriu un profil, însă acesta nu este recunoscut ca o entitate de sine stătătoare. Se poate continua lucrul cu elementele nemodificate, totuşi în acest caz vom prefera să le unim într-un singur obiect.

1. Selectaţi un arc şi o linie în timp ce apăsaţi tasta **CTRL**
2. Daţi clic pe ![](/images/Draft_Upgrade.png) [Actualizare](/Draft_Upgrade/ro "Draft Upgrade/ro")

6b. If you wish to maintain the parametric nature of the objects you can create a compound instead.

: 6b.1. Switch to the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench").
: 6b.2. With these objects selected, click on ![](/images/Part_Compound.svg) [Part Compound](/Part_Compound "Part Compound").

##### Plane, dreptunghiuri şi cercuri

1. Daţi clic pe ![](/images/Draft_Rectangle.png) [Dreptunghi](/Draft_Rectangle/ro "Draft Rectangle/ro")
2. Setaţi coordonatele primului punct la **(-100, -60, 0)**
3. Setaţi coordonatele celui de-al doilea punct la **(140, 90, 0)**

4. We will draw a rectangular frame. (Switch back to the ![](/images/Workbench_Draft.svg) [Draft Workbench](/Draft_Workbench "Draft Workbench").)

: 7.1. Press ![](/images/Draft_Rectangle.svg) [Rectangle](/Draft_Rectangle "Draft Rectangle").
: 7.2. Enter the values of the first point `(-100, -60, 0)`, and press Enter.
: 7.3. Make sure the **Relative** option is unchecked, as we will use absolute units. You may press R in the keyboard to quickly toggle this option on and off.
: 7.4. Enter the values for the second point `(140, 90, 0)`, and press Enter.

Rezultatul este un **Plan**. Aspectul lui pot fi modificat prin clic dreapta: dacă doriţi înlăturarea **suprafeţei de umplere**, schimbaţi **Stil de desenare** în **Cadru cu linii** (Wireframe).

1. Selectaţi ![](/images/Draft_Circle.png)
2. Setaţi coordonatele centrului la **(0, 0, 0)**
3. Setaţi raza ca 15 mm

##### Polygons

1. Selectaţi ![](/images/Draft_Polygon.png) [Poligon](/Draft_Polygon/ro "Draft Polygon/ro")
2. Punctul central este localizat la **(0, 0, 0)**.
3. Setaţi raza la 50 mm.
4. Selectaţi ca număr de laturi 6.

Again, you may change the Date**Make Face** and Vizualizare**Display Mode** properties in the [property editor](/Property_editor "Property editor") if you want.

The rectangle, the circle, the polygon, and most other objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") share many data and view properties because they are derived from the same base class, [Part Part2DObject](/Part_Part2DObject "Part Part2DObject").

![](/images/02_Dr01_Draft_Rectangle_circle_polygon.png)

Rectangle, circle and polygon added.

##### Matrici (tablouri)

Matricile sunt folosite pentru a replica un obiect de mai multe ori pe o direcție, după o axă de rotație sau de-a lungul unei căi.

1. Selectaţi **Cablul** creat anterior
2. Daţi clic pe ![](/images/Draft_Array.png) [Matrici](/Draft_Array/ro "Draft Array/ro")
3. În tab-ul **Date** al objectului, schimbaţi tipul matricii din **orto** în **polar**
4. Schimbaţi **Numărul polar** din 1 în 3

Arrays are used to replicate an object several times in an orthogonal direction (X, Y, Z), around a revolution axis, or along a path.

10. We will create a polar array.

: 10.1. Select the `Wire` object that was previously created with the ![](/images/Draft_Upgrade.svg) [Upgrade](/Draft_Upgrade "Draft Upgrade") tool, or the `Compound` created with the ![](/images/Part_Compound.svg) [Part Compound](/Part_Compound "Part Compound") tool.
: 10.2. Press ![](/images/Draft_PolarArray.svg) [PolarArray](/Draft_PolarArray "Draft PolarArray").
: 10.3. Adjust the polar angle to `360°`.
: 10.4. Set the number of elements to `4`.
: 10.5. Enter the values for the center of rotation `(0, 0, 0)`, and press Enter.

The array object shows copies of the object around the origin.

![](/images/03_Dr01_Draft_PolarArray.png)

Polar array of the small profile centered around the origin.

#### Adăugaţi dimensiunile de cotare

Dimensiunile de cotare necesită o utilizare constantă a **ancorării constrângerilor** pentru a selecta corect punctele pe care doriți să le folosiţi la dimensionare. Pentru a schimba selectarea punctelor posibile, se va utiliza bara de instrumente **Ancorare**.

Linear dimensions work best when using the appropriate [Draft Snap](/Draft_Snap "Draft Snap") methods to select points and edges to measure. However, they can also be created by specifying absolute coordinates.

1. Selectați ![](/images/Draft_Dimension.png) [Dimension](/Draft_Dimension "Draft Dimension")
2. Selectați primul punct. Acesta poate să fie un element existent, fie specificat de coordonate. Pentru acest tutorial, primul punct va fi întotdeauna la **(0, 0, 0)**
3. Selectați al doilea punct. Abordați punctul de mijloc al liniei de sus a poligonului. Un punct alb trebuie să apară lângă această pictogramă ![](/images/Draft_Snap_Midpoint.svg)
4. Mutați cursorul în locația dorită a dimensiunii și dați clic pe ea.
5. Schimbați dimensiunea fontului în **View** tab la 6 mm

Repetați procesul pentru arcuri de cerc și cercuri.

13. Repeat the process for the circle located in the center. The first point of the measurement will still be the origin. To select the second point make sure ![](/images/Draft_Snap_Lock.svg) [Toggle snap](/Draft_Snap_Lock "Draft Snap Lock") is active, and only ![](/images/Draft_Snap_Angle.svg) [Angle](/Draft_Snap_Angle "Draft Snap Angle") as well. As you move the pointer to the top of the circle, the ![](/images/Draft_Snap_Angle.svg) [Angle](/Draft_Snap_Angle "Draft Snap Angle") icon should appear; click to select this point. Then move the cursor to the right, and click to fix the dimension.

Remember to adjust the Vizualizare**Font Size**, and other properties to see the dimension correctly.

![](/images/04_Dr01_Draft_Dimension.png)

Dimensions that measure the vertical distance from the origin to the top of the circle, arcs, and polygon.

#### Adnotări şi text

Între cele două, există doar o diferență de nuanţă : textul oferă un profil ce poate fi utilizat pentru a efectua modelări 3D.

##### Annotations

1. Selectaţi ![](/images/Draft_Text.png) [Text](/Draft_Text/ro "Draft Text/ro")
2. Selectaţi punctul de referinţă în **Vedere 3D**. In acest caz, este punctul de mijloc al arcului de sus.
3. Introduceţi textul şi apăsaţi tasta **Enter**. Repetaţi pentru fiecare linie de text pe care doriţi s-o introduceţi.
4. Ca să terminaţi, apăsaţi tasta **Enter** de două ori.

##### Text

1. Selectaţi ![](/images/Draft_ShapeString.png) [ShapeString](/Draft_ShapeString/ro "Draft ShapeString/ro")
2. Selectaţi punctul de referinţă în **Vederea 3D View**. Acesta poate fi un punct existent sau dat de poziţia curentă a cursorului.
3. Introduceţi textul şi apăsaţi tasta **Enter**.
4. Setaţi mărimea literelor.
5. Păstraţi **urma** (tracking) de 0 mm
6. Selectaţi **calea de acces** către fişierul tipului de font pe care doriţi să-l folosiţi (dacă lăsaţi gol, se va folosi **fontul implicit**)

![](/images/05_Dr01_Draft_Text_ShapeString.png)

Text and ShapeString objects added.

To extrude letters and engrave them on to solids, see the [Draft ShapeString tutorial](/Draft_ShapeString_tutorial "Draft ShapeString tutorial").

#### Crearea planşelor

As it is now, the objects that we have created can be saved, exported to other formats like [SVG](/SVG "SVG") or [DXF](/DXF "DXF"), or printed.

If you wish, you may create a technical drawing to display these objects together with additional information like a frame.

Before doing anything, hide the Draft grid by pressing ![](/images/Draft_ToggleGrid.svg) [Toggle grid](/Draft_ToggleGrid "Draft ToggleGrid").

16. Switch to the ![](/images/Workbench_TechDraw.svg) [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench").

: 16.1. Create a standard page by pressing ![](/images/TechDraw_PageDefault.svg) [TechDraw PageDefault](/TechDraw_PageDefault "TechDraw PageDefault").
: 16.2. In the [tree view](/Tree_view "Tree view") select all objects created, except for the Page, and then press ![](/images/TechDraw_ActiveView.svg) [TechDraw ActiveView](/TechDraw_ActiveView "TechDraw ActiveView"). Press OK with the default options; it may take a few seconds to create the view in the page.
: 16.3. Selecting the Page object in the [tree view](/Tree_view "Tree view") will automatically display the Page in the main window. With the Page selected, go to the [property editor](/Property_editor "Property editor"), and change Date**Scale** to `0.75`.
: 16.4. Expand the Page object in the [tree view](/Tree_view "Tree view") to select the ActiveView object. With this view selected, go to the [property editor](/Property_editor "Property editor"), and change Date**Scale Type** to `Page`.
: 16.5. Recompute the model by using ![](/images/Std_Refresh.svg) [Refresh](/Std_Refresh "Std Refresh") or pressing F5.
: 16.6. Hide the frames of the objects by pressing ![](/images/TechDraw_ToggleFrame.svg) [TechDraw ToggleFrame](/TechDraw_ToggleFrame "TechDraw ToggleFrame").

Learn more about the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench") by reading the [Basic TechDraw Tutorial](/Basic_TechDraw_Tutorial "Basic TechDraw Tutorial").

![](/images/06_Dr01_Draft_TechDraw_page.png)

TechDraw page with a projection of the shapes created with the Draft Workbench.

TechDraw works best with objects that have a [Part TopoShape](/Part_TopoShape "Part TopoShape"). Since some objects from Draft, like [Draft Texts](/Draft_Text "Draft Text") and [Draft Dimensions](/Draft_Dimension "Draft Dimension"), don't have such "[shapes](/Shape "Shape")", some operations of TechDraw don't work with these elements.

Tools like ![](/images/TechDraw_ActiveView.svg) [TechDraw ActiveView](/TechDraw_ActiveView "TechDraw ActiveView"), ![](/images/TechDraw_DraftView.svg) [TechDraw DraftView](/TechDraw_DraftView "TechDraw DraftView"), and ![](/images/TechDraw_ArchView.svg) [TechDraw ArchView](/TechDraw_ArchView "TechDraw ArchView") work by receiving an internal SVG image that is generated by internal Draft functions; therefore, TechDraw doesn't have much control about how these views are displayed. More integration of Draft and TechDraw is a work in progress.

Aici se termină şirul de operaţii elementare ce pot fi realizate cu [panoul Ciornă (Draft)](/Draft_Workbench/ro "Draft Workbench/ro").

The [Draft Workbench](/Draft_Workbench "Draft Workbench") in many ways is similar to the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), as both are intended to produce 2D shapes. The main difference is in the way each workbench handles coordinate systems, and how the objects are positioned. In Draft, objects are freely positioned in the global coordinates system, usually snapping their points to a grid, or to other objects. In Sketcher, a "[sketch object](/Sketch "Sketch")" defines a local coordinate system which serves as the reference for all geometrical elements within that sketch. Moreover, the sketch relies on "constraints" to define the final position of its points.

- The [Draft Workbench](/Draft_Workbench "Draft Workbench") is intended for 2D drawings which are suitable to be drawn on a grid. The [BIM Workbench](/BIM_Workbench "BIM Workbench") mostly builds on top of the tools defined in the [Draft Workbench](/Draft_Workbench "Draft Workbench").

- The [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") is intended for 2D drawings that require precise relationships between its points. It does not rely on a grid, but on rules of positioning (constraints) to determine where the points and edges will be placed. The [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench") is mostly used together with the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") for the creation of solid [bodies](/Body "Body").

- It is possible to transform a Draft object into a [Sketch](/Sketch "Sketch"), and the other way around, using the ![](/images/Draft_Draft2Sketch.svg) [Draft Draft2Sketch](/Draft_Draft2Sketch "Draft Draft2Sketch") tool.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_tutorial/ro&oldid=1462049>"
