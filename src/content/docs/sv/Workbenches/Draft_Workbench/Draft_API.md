---
title: Draft API
---
Dessa funktioner är en del av Skissmodulen och kan användas i skript och makron eller från pythontolken, när Skissmodulen har importerats.

These functions are part of the [Draft Workbench](/Draft_Workbench "Draft Workbench") and can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console once the `Draft` module has been imported.

Exempel:

```
import FreeCAD, Draft

myrect = Draft.makeRectangle(4, 3)
mydistance = FreeCAD.Vector(2, 2, 0)
Draft.move(myrect, mydistance)

```

![](/images/Method.png) **cut(***FreeCAD.Object, FreeCAD.Object***)**

**Description**: Returnerar ett klippt objekt som gjorts från skillnaden mellan 2 givna objekt. Originalobjekten göms.

**Returns**: Det nyligen skapade objektet

![](/images/Method.png) **extrude(***FreeCAD.Object, Vector***)**

**Description**: Extruderar det givna objektet i den riktning som ges av vektorn. Originalobjektet göms.

**Returns**: Det nyligen skapade objektet

![](/images/Method.png) **formatObject(***FreeCAD.Object, [FreeCAD.Object]***)**

**Description**: Denna funktion tillämpar de nuvarande egenskaperna som ställts in i Skiss verktygslådan på det givna objektet (linjefärg och linjebredd), eller om ett andra objekt är specificerat så kopieras egenskaperna från det. Det placerar också objektet i konstruktionsgruppen om konstrktion knappen trycks ned.

**Returns**: Ingenting

![](/images/Method.png) **fuse(***FreeCAD.Object, FreeCAD.Object***)**

**Description**: Returnerar ett objekt som gjorts från föreningen av de 2 givna objekten. Om objekten är koplanära, så används en speciell Skisstråd, annars så är det slutliga objektet an standard Del förening.

**Returns**: Det nyligen skapade objektet

![](/images/Method.png) **getDraftPath(***[string]***)**

**Description**: Returnerar användaren eller systemsökvägen varifrån Skissmodulen körs. Om en delsökväg eller filnamn anges, så returneras den fulla sökvägen till delsökvägen inuti Skiismodulen.

**Returns**: En filsökväg

![](/images/Method.png) **getGroupContents(***list***)**

**Description**: Skannar den givna listan rekursivet efter grupper. Om grupper hittas, så adderas dess innehåll till llistan.

**Returns**: En lista med FreeCAD Objekt

![](/images/Method.png) **getRealName(***string***)**

**Description**: Tar bort efterföljande nummer fårn ett objektnamn.

**Returns**: Det nedkortade objektnamnet

![](/images/Method.png) **getSelection(****)**

**Description**: Returnerar det nuvarande FreeCAD valet.

**Returns**: Det nuvarande FreeCAD valet.

![](/images/Method.png) **makeCircle(***radius, [placement], [facemode], [startangle], [endangle]***)**

**Description**: Skapar ett cirkelobjekt med given radie. Om en placering ges, så används den. Om facemode är falskt, så visas cirkeln som en trådram, annars som en yta. Om startangle OCH endangle är givna (i grader), så används de och objektet visas som en cirkelbåge.

**Returns**: Det nyligen skapade objektet.

![](/images/Method.png) **makeDimension(***Vector, Vector, [Vector] or FreeCAD.Object, int, int, [Vector]***)**

**Description**: Skapar ett Dimensioneringsobjekt som mäter distansen mellan den första och den andra vektorn, med dimensionslinjen passerande genom den tredje vektorn. Nuvarande linjebredd och färg från Skissverktygslådan kommer att användas. Istället för 2 vektorer, så kan du även använda ett FreeCAD objekt, och två heltal (och valfritt, en vektor där dimensionlinjen måste passera). I det fallet, så kommer dimensionen att associeras med objektet, och mäta två av dess hörn, som indikeras av de två givna indexnumren.

**Returns**: Det nyligen skapade objektet.

![](/images/Method.png) **makeLine(***Vector, Vector***)**

**Description**: Skapar en linje mellan de två givna vektorerna. Nuvarande linjebredd och färg från Skissverktygslådan kommer att användas.

**Returns**: Det nyligen skapade objektet.

![](/images/Method.png) **makeRectangle(***length, width, [placement], [facemode]***)**

**Description**: Skapar ett Rektangelobjekt med längden i X riktningen och höjden i Y riktningen. Om en placering ges, så navänds den. Om facemode är falskt, så visas rektangeln som en trådram, annars som en yta. Nuvarande linjebredd och färg från Skissverktygslådan kommer att användas.

**Returns**: Det nyligen skapade objektet.

![](/images/Method.png) **makeText(***string or list, [Vector], [screenmode]***)**

**Description**: Skapar ett Textobjekt vid den givna punkten om en vektor finns, som innehåller strängen eller de strängar som ges i listan, en sträng per rad. Nuvarande färg från Skissverktygslådan och texthöjd samt typsnitt som specificerats i alternativ, används. Om screenmode är sant, så kommer texten alltid att visas mot vyriktningen, annars så läggs den på XY planet.

**Returns**: Det nyligen skapade objektet.

![](/images/Method.png) **makeWire(***list or Part.Wire, [closed], [placement], [facemode]***)**

**Description**: Skapar ett trådobjekt från den givna listan med vektorer eller från den givna Tråden. Om closed är sant eller om den första och den sista punkten är identisk, så är tråden sluten. Om facemode är Sant (och tråden är sluten), så kommer tråden att visas fylld. Nuvarande linjebredd och färg från Skissverktygslådan kommer att användas.

**Returns**: Det nyligen skapade objektet.

![](/images/Method.png) **move(***FreeCAD.Object or list, Vector, [copymode]***)**

**Description**: Flyttar det givna objektet eller objekten som finns i den givna listan, i den riktning och distans som indikeras av den givna vektorn. Om copymode är Sant, så flyttas inte de aktuella objekten, utan kopior skapas istället.

**Returns**: Objekt(en) (eller dess kopior om copymode var Sant).

![](/images/Method.png) **precision(****)**

**Description**: Returnerar precisionsvärdet från användarinställningarna i Skiss.

**Returns**: Ett heltal.

![](/images/Method.png) **rotate(***FreeCAD.Object or list, angle, [center], [axis] ,[copymode]***)**

**Description**: Roterar det givna objektet eller objekten som finns i den givna listan, med given vinkel runt ett givet centrum, och använder axis som rotationsaxel. Om axis är ospecificerat, så kommer rotationen at ske runt den vertikala Z axeln. Om copymode är Sant, så flyttas inte de aktuella objekten, utan kopior skapas istället.

**Returns**: Objekt(en) (eller dess kopior om copymode var Sant).

![](/images/Method.png) **scale(***FreeCAD.Object or list, vector, [center], [copymode]***)**

**Description**: Skalar det givna objektet eller objekten som finns i den givna listan med en skalfaktor don definieras av den givna vektorn (i X, Y och Z riktningarna) runt ett givet centrum. Om copymode är Sant, så flyttas inte de aktuella objekten, utan kopior skapas istället.

**Returns**: Objekt(en) (eller dess kopior om copymode var Sant).

![](/images/Method.png) **select(***FreeCAD.Object***)**

**Description**: Avmarkerar allting och markerar bara det givna objektet

**Returns**: Ingenting.

![](/images/Method.png) **shapify(***FreeCAD.Object***)**

**Description**: Omvandlar ett parametriskt formobjekt till icke-parametriskt.

**Returns**: Det nya objektet.

![](/images/Method.png) **draftify(***FreeCAD.Object or list***)**

**Description**: Omvandlar det givna objektet eller varje objekt i den givna listan till Skiss parametriska trådar.

**Returns**: Ingenting.

![](/images/Method.png) **getSVG(***FreeCAD.Object, [linemodifier], [textmodifier], [(u,v)]***)**

**Description**: Skapar en SVG representation av det givna objektet. linemodifier attributet är en skalfaktor (i procent) för linjebredd, och textmodifier för textstorlek. Du kan alternativt också ange en tupel med vektorer för att definiera ett projektionsplan, annars så kommer geometrin att projiceras på XY planet.

**Returns**: en sträng som innehåller en SVG representation av det givna objektet.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_API/sv&oldid=621892>"