---
title: Draftː DXF
---
## Descrizione

Draft DXF è un modulo software utilizzato dai comandi ![](/images/Std_Open.svg) [Apri](/Std_Open/it "Std Open/it"), ![](/images/Std_Import.svg) [Importa](/Std_Import/it "Std Import/it") ![](/images/Std_Export.svg) ed [Esporta](/Std_Export/it "Std Export/it") per gestire il formato DXF.

![](/images/Screenshot_qcad.jpg)

Disegno fatto con Qcad esportato in DXF, e successivamente aperto in FreeCAD

## Importazione

Sono disponibili due importatori, i quali possono essere specificati in **Modifica → Preferenze... → Importa-Esporta → DXF**. Uno è integrato, basato su C++ e veloce, l'altro è legacy, codificato in Python, più lento e richiede l'installazione di un componente aggiuntivo, ma può gestire meglio alcune entità e può creare oggetti FreeCAD più raffinati. Entrambi supportano tutte le versioni DXF a partire dalla R12.

I solidi 3D all'interno di un file DXF sono memorizzati in un blob binario ACIS/SAT, che al momento non può essere letto da FreeCAD.

### Importatore C++

Questo importatore può importare i seguenti oggetti DXF:

* linee
* polilinee (e lwpolylines)
* archi
* cerchi
* ellissi
* spline
* punti
* testi e testim
* quote
* direttrici
* blocchi (solo la geometria, non vengono importati i testi, le quote e gli attributi all'interno dei blocchi)
* layers
* Oggetti dello spazio carta

### Importatore Legacy

Questo importatore può importare i seguenti oggetti DXF:

* linee
* polilinee (e lwpolylines)
* archi
* cerchi
* ellissi
* spline
* facce 3D
* testi e testim
* direttrici
* layers

## Esportazione

Ci sono anche due esportatori. L'esportatore legacy esporta nel formato DXF R12, l'esportatore C++ nel formato DXF R14. Entrambi i formati possono essere gestiti da molte applicazioni.

### Esportatore C++

Alcune delle caratteristiche e limitazioni di questo esportatore sono:

* Viene esportata tutta la geometria 2D di FreeCAD, eccetto [Draft CubicBezCurves](/Draft_CubicBezCurve/it "Draft CubicBezCurve/it"), [Draft BezCurves](/Draft_BezCurve/it "Draft BezCurve/it") e [Draft Points](/Draft_Point/it "Draft Point/it").
* I bordi diritti delle facce degli oggetti 3D vengono esportati, ma i bordi curvi solo se si trovano su un piano parallelo al piano XY del sistema di coordinate globale. Tenere presente che un DXF creato da oggetti 3D conterrà linee duplicate.
* Testi e quotature non vengono esportati.
* I colori vengono ignorati.
* I layer vengono mappati in base ai nomi degli oggetti.

### Esportatore Legacy

Alcune delle caratteristiche e limitazioni di questo esportatore sono:

* Viene esportata tutta la geometria 2D di FreeCAD, eccetto [Draft Points](/Draft_Point/it "Draft Point/it"). Ma le ellissi, le B-spline e le curve di Bézier non vengono esportate correttamente.
* Gli oggetti 3D vengono esportati come viste 2D appiattite.
* Gli oggetti composti vengono esportati come blocchi.
* I testi e le quotature vengono esportati.
* I colori nel DXF si basano sul colore della linea degli oggetti. Il nero è mappato su "ByBlock", gli altri colori sono mappati utilizzando i colori AutoCAD Color Index (ACI).
* I layer vengono mappati in base ai nomi dei layer e dei gruppi. Quando i gruppi sono nidificati, il nome del layer viene assegnato al gruppo più profondo.

## Installazione

Per motivi di licenza, le librerie di importazione/esportazione [DXF](/DXF/it "DXF/it") richieste dalla versione legacy dell'importatore non fanno parte del codice sorgente di FreeCAD.
Per ulteriori informazioni vedere: [FreeCAD e Importazione DXF](/FreeCAD_and_DXF_Import/it "FreeCAD and DXF Import/it").

## Preferenze

Vedere [Preferenze di Importa/Esporta](/Import_Export_Preferences/it "Import Export Preferences/it").

## DWG

Poiché il formato DWG è un formato proprietario, chiuso e non documentato, è difficile per i progetti open source come FreeCAD supportarlo. Ecco perché FreeCAD si affida a convertitori esterni per leggere e scrivere file DWG. Per importare un file DWG viene utilizzato un convertitore per creare prima un DXF, che può poi essere elaborato dall'importatore DXF di FreeCAD. Quando si esporta in DWG avviene la conversione opposta: il DXF creato dall'esportatore DXF di FreeCAD viene trasformato in un DWG.

Tenere presente che il formato DXF consente una conversione 1:1 del formato DWG. Tutte le applicazioni in grado di leggere e scrivere file DWG possono fare lo stesso con file DXF, senza perdita di dati. Pertanto, richiedere file DXF invece di file DWG e fornire file DXF non dovrebbe causare problemi.

È disponibile il supporto integrato per i seguenti convertitori DWG:

* [LibreDWG](https://www.gnu.org/software/libredwg) (open source, manca il supporto per alcune entità DWG).
* [Convertitore di file ODA](https://www.opendesign.com/guestfiles/oda_file_converter) (gratuito).
* [QCAD pro](https://qcad.org/en/qcad-command-line-tools#dwg2dwg) (commerciale).

Vedere [Preferenze di Importa/Esporta](/Import_Export_Preferences/it#DWG "Import Export Preferences/it") e [Importare i file DWG in FreeCAD](/FreeCAD_and_DWG_Import/it "FreeCAD and DWG Import/it") per maggiori informazioni.

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per esportare oggetti in DXF utilizzare il metodo `export` del modulo importDXF.

```
importDXF.export(objectslist, filename, nospline=False, lwPoly=False)

```

* Per il sistema operativo Windows: utilizzare un / (barra) come separatore del percorso in `filename`.

Esempio:

```
import FreeCAD as App
import Draft
import importDXF

doc = App.newDocument()

polygon1 = Draft.make_polygon(3, radius=500)
polygon2 = Draft.make_polygon(5, radius=1500)

doc.recompute()

objects = [polygon1, polygon2]
importDXF.export(objects, "/home/user/Pictures/myfile.dxf")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_DXF/it&oldid=1513735>"