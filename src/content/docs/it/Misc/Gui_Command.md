---
title: Comandi dell'interfaccia grafica
---
I comandi dell'interfaccia grafica utente (GuiCommand) sono una delle funzioni più importanti di FreeCAD in quanto principale metodo di interazione dell'utente. Ogni volta che l'utente seleziona una voce di menu o preme un pulsante della barra degli strumenti, attiva un GuiCommand. Alcuni degli attributi della GuiCommand sonoː

* Definisce un nome
* Contiene una icona
* Definisce la possibilità di annullare/ripetere
* Ha una pagina di aiuto
* Apre e controlla le finestre di dialogo
* Registra macro
* etc...

## Nome del comando

Il GuiCommand è denominato in modo standard: *ModuleName\_CommandName* ad esempio, "[Base\_Open](/index.php?title=Base_Open&action=edit&redlink=1 "Base Open (page does not exist)")" questo è il comando Open Gui nel sistema Base. Il GuiCommand in un determinato modulo è denominato con il nome del modulo in primo piano, ad esempio "[Part\_Cylinder](/Part_Cylinder/it "Part Cylinder/it")".

Se la sua documentazione non è completa usare la maschera [Template:UnfinishedDocu](/Template:UnfinishedDocu "Template:UnfinishedDocu") (en) - [Documentazione incompleta](/Template:UnfinishedDocu/it "Template:UnfinishedDocu/it") (it).

## Pagina di aiuto

Ogni GuiCommand deve avere una pagina di aiuto. La pagina di aiuto è ospitata sul wiki della documentazione di FreeCAD. L'articolo ha lo stesso nome del GuiCommand, es. [Draft ShapeString](/Draft_ShapeString "Draft ShapeString").

Per creare le proprie pagine di aiuto si può utilizzare il modello [GuiCommand model](/GuiCommand_model "GuiCommand model") (en) - [Modello di comando Gui](/GuiCommand_model/it "GuiCommand model/it") (it)

Esempi in italiano:

* [Draft Forma da testo](/Draft_ShapeString/it "Draft ShapeString/it")
* [Draft Linea](/Draft_Line/it "Draft Line/it")

Esempi in inglese:

* [Draft ShapeString](/Draft_ShapeString "Draft ShapeString")
* [Draft Line](/Draft_Line "Draft Line")

## Icone

![](/images/Tango-Palette.png)

Ogni comando dell'interfaccia grafica deve avere un'icona. Utilizziamo il [Set di icone Tango](http://tango-project.org/Tango_Desktop_Project/) e le sue linee guida. Sul lato destro si vede la tavolozza dei colori Tango.

Tutte le icone devono essere create in formato [SVG](/SVG/it "SVG/it") con un'applicazione per immagini vettoriali, come [Inkscape](http://inkscape.org). Ciò semplifica l'applicazione delle modifiche e la derivazione di icone aggiuntive nello stesso spazio dell'applicazione.

### Tabella di codifica colori delle icone

![](/images/Colorchart.png)

Cerchiamo di rispettare quanto più possibile questo schema, in modo che il colore delle icone abbia un preciso significato.

Retrieved from "<http://wiki.freecad.org/index.php?title=Gui_Command/it&oldid=1463563>"