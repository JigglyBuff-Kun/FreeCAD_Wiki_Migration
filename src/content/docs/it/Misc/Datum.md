---
title: Datum
---
## Introduzione

In FreeCAD la parola **Datum** viene normalmente utilizzata per fare riferimento alla geometria ausiliaria (di riferimento) in [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it"). Questi elementi geometrici non faranno parte della [Forma](/Shape/it "Shape/it") (Shape) finale del [Corpo](/Body/it "Body/it") (Body), ma possono essere usati come riferimenti e supporti per gli [schizzi](/Sketch/it "Sketch/it") e altri tipi di [Funzioni](/Feature/it "Feature/it") (Feature).

I seguenti elementi corrispondono agli elementi derivati dalla classe `Part::Datum`, a sua volta derivata da [Part Feature](/Part_Feature/it "Part Feature/it"):

* [Punto di riferimento di PartDesign](/PartDesign_Point/it "PartDesign Point/it")
* [Linea di riferimento di PartDesign](/PartDesign_Line/it "PartDesign Line/it")
* [Piano di riferimento di PartDesign](/PartDesign_Plane/it "PartDesign Plane/it")
* [Sistema di coordinate di PartDesign](/PartDesign_CoordinateSystem/it "PartDesign CoordinateSystem/it")

I seguenti elementi sono derivati direttamente da [Part Feature](/Part_Feature "Part Feature"):

* [PartDesign Forma legata](/PartDesign_ShapeBinder/it "PartDesign ShapeBinder/it")
* [PartDesign Forma legata secondarie](/PartDesign_SubShapeBinder/it "PartDesign SubShapeBinder/it")

## Utilizzo

1. Passare nell'ambiente [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it").
2. Premere ![](/images/PartDesign_Body.svg) [Crea un corpo](/PartDesign_Body/it "PartDesign Body/it").
3. Selezionare l'origine del corpo e renderla visibile premendo la barra Spazio sulla tastiera.
4. Premere ![](/images/PartDesign_Plane.svg) [Piano di riferimento](/PartDesign_Plane/it "PartDesign Plane/it") per aprire la scheda [Azioni](/Task_panel/it "Task panel/it") per il piano.
5. Nella [vista 3D](/3D_view/it "3D view/it"), fare clic su uno dei piani standard, ad esempio il piano XY. Quindi premere OK per chiudere il pannello delle azioni.
6. Ora nella [vista ad albero](/Tree_view/it "Tree view/it"), selezionare il piano di riferimento appena creato, quindi premere ![](/images/PartDesign_NewSketch.svg) [Crea uno schizzo](/PartDesign_NewSketch/it "PartDesign NewSketch/it").
7. Creare un contorno chiuso, quindi utilizzare ![](/images/PartDesign_Pad.svg) [Pad](/PartDesign_Pad/it "PartDesign Pad/it") per estrudere lo schizzo e creare un solido iniziale.

Ora si può spostare e ruotare il piano di riferimento come si desidera, modificandone le proprietà nell'[editor delle proprietà](/Property_editor/it "Property editor/it") e Schizzo e Pad seguiranno il suo nuovo [Posizionamento](/Placement/it "Placement/it").

È possibile aggiungere altri tipi di riferimenti da utilizzare con altri schizzi e funzioni.

## Note

Quando sono apparsi nella v0.17, gli oggetti di riferimento erano destinati ad essere utilizzati all'interno dei [Corpi](/PartDesign_Body/it "PartDesign Body/it") di PartDesign. Tuttavia, poiché sono utili oggetti "di riferimento" con diversi [metodi di associazione](/Part_EditAttachment/it "Part EditAttachment/it"), è stato proposto che siano disponibili al di fuori di [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it"). In questo modo, saranno utilizzabili in gli ambienti di lavoro come geometria di supporto, in particolare nel contesto della creazione di [assemblaggi](/Assembly/it "Assembly/it").

* [Create and display local coordinate system](https://forum.freecadweb.org/viewtopic.php?f=10&t=2604)
* [Datum objects in App::Part](https://forum.freecadweb.org/viewtopic.php?f=22&t=33654)
* [Structure toolbar and datums](https://forum.freecadweb.org/viewtopic.php?t=42759)
* [Local CS cannot be used in Part Wb?](https://forum.freecadweb.org/viewtopic.php?f=3&t=42960)

Retrieved from "<http://wiki.freecad.org/index.php?title=Datum/it&oldid=1186374>"