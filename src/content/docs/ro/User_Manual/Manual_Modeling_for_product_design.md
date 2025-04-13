---
title: Modeling for product design
---

[Product design](https://en.wikipedia.org/wiki/Product_design) este inițial un termen comercial, dar în lumea 3D, adesea înseamnă a modela ceva cu ideea de a o avea [3D-printed](https://en.wikipedia.org/wiki/3D_printing)
sau, în general, fabricate de o mașină unealtă, de exemplu o imprimantă 3D sau o [CNC machine](https://en.wikipedia.org/wiki/Numerical_control).

Când tipăriți obiecte în 3D, este foarte important ca obiectele dvs. să fie**solid**. As they will become real, obiecte solide, asta este evident. Nimic nu le împiedică să fie goale în interior, bineînțeles. Dar trebuie să aveți întotdeauna o idee clară despre care punct este în interiorul materialului și care este punctul afară, deoarece imprimanta 3D sau mașina CNC trebuie să știe exact ce este material de umplutură și ce nu. Pentru acest motiv, in FreeCAD, Atelierul [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") are instrumentul perfect pentru a construi astfel de piese, deoarece se va avea grijă ca obiectele să fie solide și construibile.

Pentru a ilustra cum Atelierul PartDesign funcționează, aideți să modelăm această bine cunoscută piesă [Lego](https://en.wikipedia.org/wiki/Lego):

![](/images/FreeCAD_Exercise1_RedBrick.png)

Partea cool la ​​piesele Lego este că dimensiunile sunt ușor de obținut pe Internet, cel puțin pentru piesele standard. Acestea sunt destul de ușor de modelat și tipărite pe o imprimantă 3D și, cu puțină răbdare (tipărirea 3D necesită adesea multe ajustări și reglaj fin), puteți face piese care sunt complet compatibile și se îmbină cu un click caracteristic perfect în blocurile originale Lego. În exemplul de mai jos, vom face o piesă care este de 1,5 ori mai mare decât originalul.

Vom folosi acum exclusiv instrumentele: [Sketcher](/Sketcher_Workbench "Sketcher Workbench") și [PartDesign](/PartDesign_Workbench "PartDesign Workbench"). Deoarece toate instrumentele de la Sketcher Workbench sunt de asemenea incluse în Workbench Part Design, putem să rămânem în Design Part și nu va trebui să basculăm înainte și înapoi între ele.

A sketch is considered fully constrained when every point is locked into position by the appropriate number of constraints, meaning no part of the sketch can be moved freely. Achieving a fully constrained sketch is ideal because it ensures the design is well-defined and stable, allowing for predictable changes later in the design process. On the other hand, if more constraints are added than necessary—referred to as an over-constrained sketch—this can cause conflicts in the geometry. FreeCAD will alert you to any redundant or conflicting constraints, as over-constraining can cause issues in further operations like extrusions or cuts.

Obiectele Part Design sunt bazate în întregime pe **Sketches**. O schiță(Sketch) este un obiect 2D, format din elemente lineare (linii, sau segmente de dreaptă, arce de cerc sau elipse) și constrângeri. Aceste constrângeri pot fi aplicate fie pe segmente de dreaptă, fie pe punctele lor finale sau puncte centrale, și vor forța geometria să adopte anumite reguli. De exemplu, puteți plasa o constrângere verticală pe un segment de linie pentru ao forța să rămână verticală sau o constrângere de poziție (blocare) pentru un punct extrem pentru a interzice mutarea acestuia. Atunci când o schiță are o cantitate exactă de constrângeri care interzic mișcarea oricărui punct al schiței, vorbim despre o schiță complet constrânsă. Când există constrângeri redundante, care ar putea fi eliminate fără a permite mutarea geometriei, se numește supra-constrânsă. Acest lucru ar trebui evitat, iar FreeCAD vă va notifica dacă apare un astfel de caz.

Schițele dispun de un mod de editare, unde geometria lor și constrângerile lor pot fi modificate. Când ați terminat editarea și ați ieșit din modul editare, schițele se comportă ca orice alt obiect FreeCAD și pot fi folosite ca elemente de construcție pentru toate instrumentele de proiectare a pieselor, dar și în alte ateliere de lucru, cum ar fi [Part](/Part_Workbench "Part Workbench") or [Arch](/Arch_Workbench "Arch Workbench"). Atelierul [Draft workbench](/Draft_Workbench "Draft Workbench") dispune, de asemenea, de un instrument care convertește obiectele Draft în Schițe și invers.

- Să începem prin modelarea unei forme cubice (de fapt paralelipipedice) va fi baza cărămizii noastre Lego. Mai târziu, vom sculpta/excava interiorul și vom adăuga cele 8 puncte deasupra. Deci, să începem acest lucru făcând o schiță dreptunghiulară pe care o vom extruda:
- Comuntați pe Atelierul [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench")
- Faceți Click pe butonul ![](/images/Sketcher_NewSketch.png) [New Sketch](/Sketcher_NewSketch "Sketcher NewSketch").Va apărea o casetă de dialog care vă întreabă unde doriți să puneți schița, alegeți planul "XY", care este planul "la sol". Schița va fi creată și va fi imediat schimbată în modul de editare, iar vizualizarea va fi rotită și orientată pentru a putea privi după normala la planul de lucru.
- Acum putem desena un dreptunghi, selectând instrumentul ![](/images/Sketcher_CreateRectangle.png) [Rectangle](/Sketcher_CreateRectangle/ro "Sketcher CreateRectangle/ro") și făcând clicl pe 2 vârfuri diagonal opuse. Puteți plasa cele două puncte oriunde, deoarece locația lor corectă va fi definită în pasul următor
- Veți observa că o serie de constrângeri au fost adăugate automat dreptunghiului nostru: segmentele verticale au primit o constrângere verticală, cele orizontale o constrângere orizontală și fiecare colț o constrângere punct-pe-punct care leagă segmentele împreună. Puteți experimenta mișcarea dreptunghiului prin tragerea liniilor cu mouse-ul, toată geometria va respecta constrângerile.

![](/images/FreeCAD_Exercise1_re_UC.png)

- Now, let's add three more constraints:
  - Select one of the vertical segments and add a ![](/images/Sketcher_ConstrainDistanceY.png) [Vertical Distance Constraint](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY"). Give it a size of 23.7mm.
  - Select one of the horizontal segments and add a ![](/images/Sketcher_ConstrainDistanceX.png) [Horizontal Distance Constraint](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"). Make it 47.7mm.
  - Finally, select one of the corner points, then the origin point (which is the dot at the crossing of the red and green axes), then add a ![](/images/Sketcher_ConstrainCoincident.png) [Coincident Constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident"). The rectangle will then jump to the origin point, and your sketch will turn green, meaning it is now fully constrained. You can try moving its lines or points, nothing will move anymore.

![](/images/FreeCAD_Exercise1_re.png)

- Our base sketch is now ready, we can leave edit mode by pressing the **Close** button on top of its task panel, or simply by pressing the **Escape** key. If needed later on, we can reenter edit mode anytime by double-clicking the sketch in the tree view.
- Let's extrude it by using the ![](/images/PartDesign_Pad.png) [Pad](/PartDesign_Pad "PartDesign Pad") tool, and giving it a distance of 14.4mm. The other options can be left at their default values:

![](/images/FreeCAD_Exercise1_padding.png)

The **Pad** behaves very much like the [Extrude](/Part_Extrude "Part Extrude") tool that we used in the previous chapter. There are a couple of differences, though, the main one being that a pad cannot be moved. It is attached forever to its sketch. If you want to change the position of the pad, you must move the base sketch. In the current context, where we want to be sure nothing will move out of position, this is an additional security.

- We will now carve the inside of the block, using the ![](/images/PartDesign_Pocket.png) [Pocket](/PartDesign_Pocket "PartDesign Pocket") tool, which is the PartDesign version of [Part Cut](/Part_Cut "Part Cut"). To make a pocket, we will create a sketch on the bottom face of our block, which will be used to remove a part of the block.
- With the bottom face selected, press the ![](/images/Sketcher_NewSketch.png) [New sketch](/Sketcher_NewSketch "Sketcher NewSketch") button.
- Draw a rectangle on the face.

![](/images/FreeCAD_Exercise1_TopFaceSketch.png)

- We will now constrain the rectangle in relation to the bottom face. To do this, we need to "import" some edges of the face with the ![](/images/Sketcher_External.png) [External geometry](/Sketcher_External "Sketcher External") tool. Use this tool on the two vertical lines of the bottom face:

![](/images/FreeCAD_Exercise1_topCylPad.png)

You will notice that only edges from the base face can be added by this tool. When you create a sketch with a face selected, a relation is created between that face and the sketch, which is important for further operations. You can always remap a sketch to another face later with the ![](/images/Sketcher_MapSketch.png) [Map sketch](/Sketcher_MapSketch "Sketcher MapSketch") tool.

![](/images/FreeCAD_Exercise1_topPattern.png)

![](/images/Exercise_lego_07.jpg)

![](/images/FreeCAD_Exercise1_BottomRec.png)

![](/images/Exercise_lego_08.jpg)

![](/images/FreeCAD_Exercise1_BottomOuterCirc.png)

![](/images/Exercise_lego_09.jpg)

![](/images/FreeCAD_Exercise1_bottomSketchCom.png)

- By choosing the completed sketch use the ![](/images/PartDesign_Pocket.svg) [Pocket](/PartDesign_Pocket "PartDesign Pocket") tool setting the length to 12 mm.

![](/images/FreeCAD_Exercise1_BottomPad.png)

- This is it. Our brick is ready. If you wish to change its color, you can do so by going to the **View tab**.

![](/images/FreeCAD_Exercise1_redBrick2.png)

You will notice that our modeling history (what appears in the tree view) has become quite long. This is precious because every single step of what we did can be changed later on. Adapting this model for another kind of brick, for example one with 2x2 dots, instead of 2x4, would be a piece of cake, we would just need to change a couple of dimensions and the number of occurrences in linear patterns. We could as easily create bigger pieces that don't exist in the original Lego game.

But we could also want to get rid of the history, for example if we are going to model a castle with this brick, and we don't want to have this whole history repeated 500 times in our file.

There are two simple ways to get rid of the history, one is using the [Create simple copy](/Part_SimpleCopy "Part SimpleCopy") tool from the [Part Workbench](/Part_Workbench "Part Workbench"), which will create a copy of our piece that doesn't depend anymore on the history (you can delete the whole history afterwards), the other way is exporting the piece as a STEP file and reimporting it.

**Downloads**

- Modelul produs pe durata acestui exercițiu: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/lego.FCStd>

**Read more**

- [The Sketcher](/Sketcher_Workbench "Sketcher Workbench")
- [The Part Design Workbench](/PartDesign_Workbench "PartDesign Workbench")
- [The Assembly2 Workbench](https://github.com/hamish2014/FreeCAD_assembly2)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:Modeling_for_product_design/ro&oldid=1538737>"
