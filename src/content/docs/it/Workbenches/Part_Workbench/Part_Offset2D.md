---
title: Part Offset 2D
---
|  |
| --- |
| Part Offset 2D |
| Posizione nel menu |
| Parte → Offset 2D... |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Part Offset 3D](/Part_Offset/it "Part Offset/it"), [Part Spessore](/Part_Thickness/it "Part Thickness/it"),  [Draft Offset](/Draft_Offset/it "Draft Offset/it") |
|  |

## Descrizione

Lo strumento ![](/images/Part_Offset2D.svg) **Part Offset 2D** costruisce una polilinea, parallela alla polilinea originale, ad una certa distanza da essa. Oppure ingrandisce/rimpicciolisce una faccia planare, in modo simile.

La polilinea/faccia deve essere planare. In un oggetto ci possono essere più contorni, non necessariamente complanari.

![](/images/Part_Offset2D_Demo.png)

## Utilizzo

1. Selezionare un oggetto da sfalsare.
2. Premere il pulsante ![](/images/Part_Offset2D.svg) Offset 2D.
3. Impostare l'offset nel [Pannello Azioni](/Task_panel/it "Task panel/it").
4. Premere OK.

## Note

* Gli oggetti [App Link](/App_Link/it "App Link/it") collegati ai tipi di oggetto appropriati e i contenitori [App Part](/App_Part/it "App Part/it") con gli oggetti visibili appropriati all'interno possono essere utilizzati anche come oggetti di origine. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

## Problemi noti

* La maggior parte delle modalità non predefinite funziona solo con OCC 7.0.0 o superiori.

* Questo strumento può mandare in crash FreeCAD (vedere il punto successivo). In Windows, questi incidenti vengono convertiti in eccezioni e in genere non causano la chiusura di FreeCAD; su altri OS può capitare. Quindi, si consiglia di salvare i progetti prima di tentare di utilizzare lo strumento. Neanche le ellissi vengono gestite.

* Allargando delle facce con fori circolari di una quantità sufficiente a chiudere i fori, si verifica un crash (OCC 7.0.0). Il problema sembra essere specifico per cerchi; le altre forme sembrano chiudersi in modo corretto.

* Quando si applica l'offset a cerchi che hanno un posizionamento diverso da zero, il risultato può essere posizionato in modo sbagliato. (OCC 7.0.0)

* Quando si applica l'offset ai cerchi, a volte essi sono scalati in direzione inattesa (per esempio verso l'interno anziché verso l'esterno). (OCC 7.0.0)

* Fill="true" non funziona quando si trattano collettivamente dei contorni aperti in modalità "Skin"

* La modalità di unione "Tangent" non funziona (OCC 7.0.0)

* L'offeset di contorni composti da un singolo segmento non è supportato (perché un segmento non definisce un piano). I contorni composti da una singola linea non possono neanche essere trattati in un offset collettivo.

## Proprietà

* Dati**Source**: Link alla forma originale

* Dati**Value**ː La distanza a cui allargare la faccia del contorno. Se è negativa, la faccia del contorno si restringe.

* Dati**Mode** ("Pipe" or "Skin"): Imposta il modo in cui vengono elaborati i contorni non chiusi. Se "Pipe", il contorno è delineato come se fosse un contorno chiuso estremamente sottile. Se "Skin", viene creato un contorno aperto.

:   ![](/images/Part_Offset2D_Mode.png)

* Dati**Join** ("Arc", "Tangent", "Intersection"): Imposta il comportamento nelle pieghe. Se "Arc", i segmenti dell'offset sono collegati con un arco di cerchio, centrato nel vertice. "Tangent" non è supportato con OCC7.0.0. "Intersection": i segmenti dell'offset sono estesi fino a quando non si intersecano.

:   ![](/images/Part_Offset2D_Join.png)

* Dati**Intersection** ("false", "true"): stabilisce se più contorni vengono trattati collettivamente o in modo indipendente. Se "false", i contorni sono trattati in modo indipendente, le intersezioni tra i contorni risultanti vengono ignorate. Se "true", i contorni sono trattati in modo collettivo.

:   ![](/images/Part_Offset2D_Intersection.png)

:   Sono accoppiati solo i contorni all'interno di un composto. Ad esempio, se la struttura è composto simile a (wire1, wire2, compound(wire3, wire4)), wire1 e wire2 sono trattati collettivamente, ma indipendentemente da wire3 e wire4. Allo stesso modo, wire3 e wire4 sono trattati collettivamente, ma indipendentemente da wire1+wire2.

:   Inoltre, in modalità collettiva, le direzioni dei contorni sono importanti, e la direzione influenza l'offset. Questo è in stretto rapporto con il modo in cui vengono trattati i fori nelle facce.

:   I contorni da trattare collettivamente devono essere complanari. I contorni da trattare in modo indipendente possono anche non essere complanari.

* Dati**Fill** ("false", "true"): se "true", lo spazio tra la faccia del contorno primitivo e l'offset viene riempito con una faccia.

:   ![](/images/Part_Offset2D_Fill.png)

## Script

Lo strumento può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando la seguente funzione:

```
f = App.ActiveDocument.addObject("Part::Offset2D", "Offset2D")
f.Source =  #some object
f.Value = 10.0

```

Offset 2D è anche disponibile come metodo di Part.Shape. Esempio:

```
import Part
circle = Part.Circle().toShape()
enlarged_circle = circle.makeOffset2D(10.0)
Part.show(circle)
Part.show(enlarged_circle)
# makeOffset2D(offset, join = 0, fill = False, openResult = false, intersection = false)
# 
# * offset: distance to expand the shape by. 
# 
# * join: method of offsetting non-tangent joints. 0 = arcs, 1 = tangent, 2 =
# intersection
# 
# * fill: if true, the output is a face filling the space covered by offset. If
# false, the output is a wire/face.
# 
# * openResult: True for "Skin" mode; False for Pipe mode. 
# 
# * intersection: collective offset
# 
# Returns: result of offsetting (wire or face or compound of those). Compounding
# structure follows that of source shape.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Offset2D/it&oldid=1360024>"