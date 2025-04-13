---
title: Utilizarea foilor de calcul
---

FreeCAD oferă un alt atelier de lucru interesant pentru a explora: [Spreadsheet Workbench](/Spreadsheet_Workbench "Spreadsheet Workbench"). Acest atelier vă permite să creați [spreadsheets](https://en.wikipedia.org/wiki/Spreadsheet) ca cele realizate cu [Excel](https://en.wikipedia.org/wiki/Microsoft_Excel) sau

```
LibreOffice direct în FreeCAD. Aceste foi de calcul pot fi apoi populate cu date extrase din modelul dvs. și pot efectua, de asemenea, o serie de calcule între valori. Foile de calcul pot fi exportate ca fișiere CSV, care pot fi apoi importate în orice altă aplicație de calcul tabelar.

```

Cu toate acestea, în FreeCAD, foile de calcul au o utilitate suplimentară: Celulele lor pot primi un nume și pot fi menționate de orice domeniu susținut de [expressions engine](/Expressions "Expressions"). Aceste foi de calcul se transformă în structuri de control puternice, unde valorile introduse în celule specifice pot modifica dimensiunile modelului. Nu trebuie să țineți minte doar că, deoarece FreeCAD interzice dependența circulară între obiecte, aceeași foaie de lucru nu poate fi utilizată pentru a defini o proprietate a unui obiect și, în același timp, pentru a recupera o valoarea de proprietate a aceluiași obiect. Asta ar însemna că foaia de calcul și obiectul depind unul de celălalt.

In addition to managing values, the workbench is excellent for data management, storing critical information such as material properties, dimensions, and project-wide parameters. This becomes particularly useful in complex projects where multiple values need to be referenced or adjusted.

Spreadsheets also allow users to input formulas for calculations and data management. These formulas can reference other spreadsheet cells or parameters within the 3D model, making the entire design process adaptable and responsive to changes.

În următorul exemplu, vom crea câteva obiecte, vom prelua unele dintre proprietățile lor dintr-o foaie de calcul și apoi vom folosi foaia de lucru pentru a modifica proprietățile altor obiecte.

In practice, the Spreadsheet Workbench is versatile for different use cases, including defining project-wide parameters, managing bills of materials (BOM), and performing custom calculations that influence design decisions. It simplifies complex projects by centralizing the control of parameters in one location.

### Lectura Proprietăților

- Începeți prin comutarea pe [Part Workbench](/Part_Workbench "Part Workbench"), și crearea câtorva obiecte: ![](/images/Part_Box.png) [box](/Part_Box "Part Box"), ![](/images/Part_Cylinder.png) [cylinder](/Part_Cylinder "Part Cylinder") și ![](/images/Part_Sphere.png) [sphere](/Part_Sphere "Part Sphere").
- Editați proprietatea de **Placement** (sau utilizați ![](/images/Draft_Move.png) [Draft Move](/Draft_Move "Draft Move") tool) pentru a le puțin mai departe, astfel încât să putem vedea efectele a ceea ce vom face:

![](/images/Exercise_spreadsheet_01.jpg)

- Now, let's extract some information about these objects. Switch to the [Spreadsheet Workbench](/Spreadsheet_Workbench "Spreadsheet Workbench")
- Press the ![](/images/Spreadsheet_Create.png) **New Spreadsheet** button
- Double-click the new Spreadsheet object in the tree view. The spreadsheet editor opens:

![](/images/Exercise_spreadsheet_02.jpg)

The spreadsheet editor of FreeCAD, although it is not as complete and powerful as the more complete spreadsheet applications we listed above, has nevertheless most of the basic tools and functions that are commonly used, such as the possibility to change the aspect of the cells (size, color, alignment), join and split cells, use formulas such as **=2+2**, or reference other cells with **=B1**.

In FreeCAD, on top of these common features, there is a new interesting one: The possibility to reference not only other cells, but other objects from the document, and retrieve values from their properties. For example, let's retrieve a couple of properties from the 3 objects we created above. Properties are what we can see in the properties editor window, under the **Data** tab, when an object is selected.

- Let's start by entering a couple of texts in the cells A1, A2 and A3, so we remember what is what later on, for example **Cube Length**, **Cylinder Radius** and **Sphere Radius**. To enter text, just write in the "Contents" field above the spreadsheet, or double-click a cell.
- Now let's retrieve the actual length of our cube. In cell B1, type **=Cube.Length**. You will notice that the spreadsheet has an autocompletion mechanism, which is actually the same as the expression editor we used in the previous chapter.
- Do the same for cell B2 (**=Cylinder.Radius**) and B3 (**=Sphere.Radius**).

![](/images/Exercise_spreadsheet_03.jpg)

- Although these results are expressed with their units, the values can be manipulated as any number, try for example entering in cell C1: **=B1\*2**.
- We can now change one of these values in the properties editor, and the change will be immediately reflected in the spreadsheet. For example, let's change the length of our cube to **20mm**:

![](/images/Exercise_spreadsheet_04.jpg)

The [Spreadsheet Workbench](/Spreadsheet_Workbench "Spreadsheet Workbench") page will describe in more detail all the possible operations and functions available in spreadsheets.

### Scrierea proprietăților

O altă utilizare foarte interesantă a Atelierul foi de calcul (Spreadsheet) în FreeCAD este de a face exact opusul a ceea ce am făcut până acum: n loc să citim valorile proprietăților obiectelor 3D, putem atribui valori acestor obiecte. Amintiți-vă, totuși, una dintre regulile fundamentale ale FreeCAD: dependențele circulare sunt interzise. Noi nu putem folosi aceeași foaie de calcul pentru a citi **and** scrie valorile la un obiect 3D. Acest lucru ar face ca obiectul să depindă de foaia de calcul, care depinde, de asemenea, de obiect. În schimb, vom crea o altă foaie de calcul.

- We can now close the spreadsheet tab (under the 3D view). This is not mandatory, there is no problem in keeping several spreadsheet windows open.
- Press the ![](/images/Spreadsheet_Create.png) **New Spreadsheet** button again
- Change the name of the new spreadsheet to something more meaningful, such as **Input** (do this by right-clicking the new spreadsheet object, and choosing **Rename**).
- Double-click the Input spreadsheet to open the spreadsheet editor.
- In cell A1, let's put a descriptive text, for example: "Cube dimensions"
- In cell B1, write **=5mm** (using the = sign makes sure the value is interpreted as a unit value, not a text).
- Now to be able to use this value outside the spreadsheet, we need to give a name, or alias, to the B1 cell. Right-click the cells, click **Properties** and select the **Alias** tab. Give it a name, such as **cubedims**:

![](/images/Exercise_spreadsheet_05.jpg)

- Press **OK**, then close the spreadsheet tab
- Select the cube object
- In the properties editor, click the little ![](/images/Bound-expression-unset.png) **expression** icon at the right side of the **Length** field. This will open the [expressions editor](/Expressions "Expressions"), where you can write **Spreadsheet001.cubedims**. Repeat this for Height and Width:

![](/images/Exercise_spreadsheet_06.jpg)

You might wonder why we had to use "Spreadsheet001" instead of "Input" in the expression above. This is because each object, in a FreeCAD document, has an **internal name**, which is unique in the document, and a **label**, which is what appears in the tree view. If you uncheck the relevant option in the preferences window, FreeCAD will allow you to give the same label to more than one object. This is why all operations that must identify an object uniquely, will use the internal name instead of the label, which could designate more than one object. The easiest way to know the internal name of an object is by keeping the **selection panel** (menu Edit->Panels) open, it will always indicate the internal name of a selected object:

![](/images/Exercise_spreadsheet_07.jpg)

By using cell aliases in spreadsheets, we are able to use a spreadsheet to store "master values" in a FreeCAD document. This can be used, for example, to have a model of a piece of certain dimensions, and to store these dimensions in a spreadsheet. It then becomes very easy to produce another model with different dimensions, it is just a matter of opening the file and changing a couple of dimensions in the spreadsheet.

În cele din urmă, rețineți că constrângerile dintr-o schiță pot primi, de asemenea, valoarea unei celule de foaie de calcul tabelar:

![](/images/Exercise_spreadsheet_08.jpg)

Puteți, de asemenea, să dați aliasuri constrângerilor dimensionale (orizontale, verticale sau distanțe) într-o schiță (puteți utiliza și această valoare din afara schiței):

![](/images/Exercise_spreadsheet_09.jpg)

**Fişiere de descărcat**

- Fișierul produs în cadrul acestui exercițiu: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/spreadsheet.FCStd>

**De citit în plus**

- [The Spreadsheet Workbench](/Spreadsheet_Workbench "Spreadsheet Workbench")
- [The Expressions engine](/Expressions "Expressions")

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:Using_spreadsheets/ro&oldid=1526543>"
