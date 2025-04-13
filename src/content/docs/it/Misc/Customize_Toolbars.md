---
title: Personalizzare la barra degli strumenti
---
|  |
| --- |
| Tutorial |
| Argomento |
| Configurazione |
| Livello di difficoltà |
| Principiante |
| Tempo di esecuzione |
| 5 minuti |
| Autori |
| [Mario52](/User:Mario52 "User:Mario52") |
| Versione di FreeCAD |
| Tutte |
| Files di esempio |
| *Nessuno* |
| Vedere anche |
| [Personalizzare l'interfaccia](/Interface_Customization/it "Interface Customization/it"). |
|  |

## Introduzione

Questo tutorial mostra come aggiungere un pulsante per una [macro](/Macros/it "Macros/it") ad una barra degli strumenti personalizzata.

Per informazioni più generali vedere [Personalizzare l'interfaccia](/Interface_Customization/it "Interface Customization/it").

## Utilizzo

**1.** Trovare il menu Personalizza

* Selezionare **Menu principale → Strumenti → Personalizza**

![Customize](/images/CustomizeToolBar_01.png)

Customize

* o fare clic con il pulsante destro del mouse su qualsiasi barra degli strumenti

![Right mouse click](/images/CustomizeToolBar_02.png)

Right mouse click

* Appare la finestra Personalizza

![The Customize window appears](/images/CustomizeToolBar_03.png)

The Customize window appears

**2.** Trasformare una macro in uno Strumento-macro

Selezionare la tabella *Macro*

* Per selezionare un'icona della barra degli strumenti per la macro cliccare sul pulsante Pixmap ... .

![Select a toolbar](/images/CustomizeToolBar_04.png)

Select a toolbar

* Cercare l'icona appropriata tra quelle già presenti in FreeCAD,

[o aggiungere una propria icona cliccando sul pulsante Aggiungi icone...].                   (Espandere per un esempio)

![Add icon](/images/CustomizeToolBar_05.png)

Add icon

     [Si apre una finestra di selezione dei file, selezionare un file immagine che deve essere di 64x64 pixel in formato PNG]

![Get a file](/images/CustomizeToolBar_06.png)

Get a file

* Selezionare l'icona desiderata poi cliccare sul pulsante OK

![Select your icon](/images/CustomizeToolBar_07.png)

Select your icon

* L'icona selezionata ora è visualizzata accanto al pulsante Pixmap ....

![Your icon is displayed](/images/CustomizeToolBar_08.png)

Your icon is displayed

* Scegliere la macro e specificare un Testo di menu (il testo che appare come etichetta nel menu); compilare anche il campo Suggerimento (il testo che appare quando il mouse si trova sopra al pulsante sulla barra degli strumenti); per il pulsante si possono anche compilare altri campi opzionali

* Cliccare su Aggiungi.

![Click the button](/images/CustomizeToolBar_09.png)

Click the button

* Ora il pulsante dello Strumento-macro è creato

![Your button is created](/images/CustomizeToolBar_10.png)

Your button is created

**3.** Creare una barra degli strumenti al di fuori dell'ambiente **Macro** che contenga lo **Strumento-macro** creato

* Cliccare sulla scheda **Barre degli strumenti** e, nel menu a discesa sulla destra, scegliere l'ambiente di lavoro a cui è destinata la barra degli strumenti (**Parte** in questo esempio)

[Dalla versione 0.15 c'è una barra degli strumenti ![](/images/Freecad.svg) Globale . Se la barra degli strumenti è allegata a questa barra, essa rimane sempre visibile]

![Toolbars tab](/images/CustomizeToolBar_11.png)

Toolbars tab

* Nel menu a discesa sulla sinistra selezionare **Macros**.

![Macros](/images/CustomizeToolBar_12.png)

Macros

* Ora lo Strumento-macro e la sua icona appaiono nell'elenco

![Your icon is listed](/images/CustomizeToolBar_13.png)

Your icon is listed

* Cliccare su Nuovo...

![Click on "New"](/images/CustomizeToolBar_14.png)

Click on "New"

* Nella finestra "Nuova barra degli strumenti" inserire il nome che si vuole dare alla nuova barra per l'ambiente Part e poi cliccare su OK

![Enter the name for your toolbar](/images/CustomizeToolBar_15.png)

Enter the name for your toolbar

* Ora la barra è stata creata

* Per aggiungere lo Strumento-macro a questa barra degli strumenti, selezionarla nella finestra di sinistra e quindi fare clic sul Pulsante freccia destra.

![Select your macro](/images/CustomizeToolBar_16.png)

Select your macro

* È stata creata una barra degli strumenti chiamata "Camera" contenente lo Strumento-macro **Camera**.

* Cliccare sul pulsante Chiudi

![Close](/images/CustomizeToolBar_17.png)

Close

* La nuova barra degli strumenti è ora contenuta nel menu di scelta rapida della barra degli strumenti. Se la barra degli strumenti viene attivata (segno di spunta blu) le sue icone sono visibili (nel nostro esempio c'è solo la fotocamera).

![New Toolbar](/images/CustomizeToolBar_18.png)

New Toolbar

Retrieved from "<http://wiki.freecad.org/index.php?title=Customize_Toolbars/it&oldid=1468296>"