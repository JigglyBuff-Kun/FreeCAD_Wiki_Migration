---
title: Vista 3D
---
## Introduzione

La Vista 3D di FreeCAD è un'istanza di una [scena grafica](/Scenegraph/it "Scenegraph/it") di Coin3D che costituisce la finestra più importante dell'[interfaccia](/Interface/it "Interface/it")
. Coin3D è una libreria che implementa lo standard di descrizione della scena OpenInventor 2.1.

Alcune proprietà della vista, come il colore di sfondo, lo stile di [navigazione con il mouse](/Mouse_navigation/it "Mouse navigation/it") e i passi dello zoom, possono essere configurate con l'[editor delle preferenze](/Preferences_Editor/it "Preferences Editor/it").

![](/images/FreeCAD_3D_view.png)

La vista 3D è un componente dell'[interfaccia](/Interface/it "Interface/it") di FreeCAD . Per impostazione predefinita, essa mostra un piccolo widget con gli assi delle coordinate e il cubo di navigazione anche esso con gli assi delle coordinate; la griglia può essere visualizzata e configurata caricando l'ambiente [Draft](/Draft_Workbench/it "Draft Workbench/it").

## Menù contestuale

Le opzioni nel menù contestuale della vista 3D dipendono dall'oggetto/i selezionato/i e dall'ambiente di lavoro attualmente attivo. Per visualizzare questo menu, selezionare facoltativamente uno o più oggetti e quindi fare clic con il pulsante destro del mouse nella vista 3D.

## Dettagli

FreeCAD usa la libreria Quarter per usare Coin3D in un ambiente Qt.

È possibile interagire direttamente con lo scena 3D dalla [console Python](/Python_console/it "Python console/it") utilizzando la libreria Python Pivy.

Per ulteriori informazioni, consultare la documentazione per utenti esperti:

* [Scena grafica](/Scenegraph/it "Scenegraph/it"), descrizione di Coin3D.
* [Pivy](/Pivy/it "Pivy/it"), utilizzo di Coin3D dalla console Python.
* [Librerie di terze parti](/Third_Party_Libraries/it "Third Party Libraries/it") usate da FreeCAD.
* [Coin3D](https://grey.colorado.edu/coin3d/index.html) C++ documentation.

Retrieved from "<http://wiki.freecad.org/index.php?title=3D_view/it&oldid=1442262>"