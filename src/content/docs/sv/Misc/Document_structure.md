---
title: Document structure
---
![](/images/Screenshot_treeview.jpg)

Ett FreeCAD document inehåller alla objekten i din scen. Det kan innehålla grupper, och objekt gjorda med valfri arbetsbänk. Du kan därför växla mellan arbetsbänkar, och ändå arbeta med samma dokument. Dokumentet är det som sparas till disk när du sparar ditt arbete. Du kan också äppna flera dokument samtidigt i FreeCAD, och öppna flera vyer av samma dokument.

Inuti dokumentet, så kan objekten flyttas in i grupper, och ha unika namn. Hantering av grupper, objekt och objektnamn görs huvudsakligen från Trädvyn. Det kan förstås också göras, som allt annat i FreeCAD, från pythontolken. I trädvyn, så kan du skapa grupper, flytta objekt till grupper, radera objekt eller grupper, genom att högerklicka i trädvyn eller på ett objekt, döpa om objekt genom att dubbelklicka på dess namn, eller möjligtvis andra operationer, beroende på vilken arbetsbänk som används.

Objekten inuti ett FreeCAD dokument kan vara av olika typer. Varje arbetsbänk kan skapa sina egna objekttyper, till exempel [Nät arbetsbänken](/Mesh_Workbench/sv "Mesh Workbench/sv") skapar nätobjekt, [Del arbetsbänken](/Part_Workbench/sv "Part Workbench/sv") skapar Del objekt, [Rit arbetsbänken](/Draft_Workbench/sv "Draft Workbench/sv") skapar också Del objekt, etc.

Om det finns åtminstone ett dokument öppet i FreeCAD, så finns det alltid ett och endast ett aktivt dokument. Det är det dokument som syns i den nuvarande 3D vyn, dokumentet som du för närvarande jobbar med.

## Applikations och Användargränssnitt

Liksom nästan allt annat i FreeCAD, så är användargränssnittsdelen separerad från basapplikationsdelen. Detta gäller även för dokument. Dokumenten utgörs också av två delar: Applikationsdokumentet, vilket innehåller våra objekt, och Vydokumentet, vilket innehåller skärmrepresentationen av våra objekt.

Tänk på det som två rymder, där objekten är definierade. Dess konstruktiva parametrar (är det en kub? en kon? vilken storlek?) lagras i Applikationsdokumentet, emedan dess grafiska representation (Är den ritad med svarta linjer? med blå ytor?) lagras i Vydokumentet. Varför är det så? därför att FreeCAD kan även användas UTAN grafiskt gränssnitt, till exempel inuti andra program, och vi måste fortfarande kunna manipulera våra objekt, även om inget ritas på skärmen.

En annan sak som lagras i Vydokumentet är 3D vyer. Ett dokument kan ha flera vyer öppnade, så du kan inspektera ditt dokument från flera håll samtidigt. Du kanske vill se en toppvy och en frontvy av ditt arbete samtidigt? Då kommer du att ha två vyer av samma dokument, båda lagrade i Vydokumentet. Skapande av nya vyer eller stänga vyer kan göras från Visa menyn eller genom att högerklicka på en vytabb.

## Skript

Dokument kan lätt skapas, kommas åt och ändras från tolken. Till exempel:

```
FreeCAD.ActiveDocument

```

Kommer att returnera det nuvarande (aktiva) dokumentet

```
FreeCAD.ActiveDocument.Blob

```

Kommer åt ett objekt kallat "Blob" inuti ditt dokument

```
FreeCADGui.ActiveDocument

```

Kommer att returnera det vydokument som är associerat med det nuvarande dokumentet

```
FreeCADGui.ActiveDocument.Blob

```

Kommer åt den grafiska representationen (vy) delen av vårt Blob objekt

```
FreeCADGui.ActiveDocument.ActiveView

```

Kommer att returnera nuvarande vy

Retrieved from "<http://wiki.freecad.org/index.php?title=Document_structure/sv&oldid=1536809>"