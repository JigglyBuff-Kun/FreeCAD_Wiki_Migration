---
title: TechDraw Modelli di squadrature
---
## Descrizione

Ogni pagina TechDraw è basata su un oggetto Modello (Template). Il Modello fornisce un'area sullo sfondo della pagina per inserire viste, simboli e altri oggetti di annotazione e ne definisce le dimensioni del foglio. Verrà eseguito il rendering per l'esportazione o la stampa solo degli elementi all'interno dell'area di disegno.

Il modello può anche contenere elementi grafici come una cornice che definisce l'area di disegno, compresi campi indicizzati, segni di piegatura e, facoltativamente, un cartiglio che a sua volta contiene testi fissi e [modificabili](/Svg_Namespace#freecad:editable "Svg Namespace"). Il cartiglio può anche essere inserito separatamente come [simbolo](/TechDraw_Symbol/it "TechDraw Symbol/it").

I Modelli, come i simboli, sono file [SVG](/SVG/it "SVG/it") che possono essere creati e modificati all'esterno di FreeCAD, sia con un'applicazione come [Inkscape](https://en.wikipedia.org/wiki/Inkscape), sia con un semplice editor di testo. Entrambi possono contenere campi di testo modificabili ma utilizzano strumenti di modifica diversi.

Un nuovo strumento di compilazione automatica ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")) può riempire automaticamente i campi di testo modificabili di un modello nel momento in cui viene inserito. Ciò richiede modelli che utilizzano il nuovo attributo [freecad:autofill](/Svg_Namespace#freecad:autofill "Svg Namespace"). I seguenti nomi di attributi sono validi per la compilazione automatica: "author", "date", "organization", "scale", "sheet", "title", "page\_number", e "page\_count".

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Modello ha le seguenti proprietà:

Base

* Dati**Orientation** (`Enumeration`): `Portrait` o `Landscape`.

Page Properties

* Dati**Width** (`Length`): Larghezza della carta in mm.
* Dati**Height** (`Length`): Altezza della carta in mm.
* Dati (Hidden)**Editable Texts** (`Map`): Key:Value elenco dei testi modificabili nel modello.

Template

* Dati**Page Result** (`FileIncluded`): Una copia del file Modello originale che include tutte le modifiche ai testi modificabili. Ciò consente agli utenti che potrebbero non disporre di una copia del file modello di visualizzare la Pagina come previsto. In genere non è utile per gli utenti finali.
* Dati**Template** (`File`): Un puntatore alla copia del file modello originale incorporato in questo file \*.FCStd o un percorso file a un Modello accessibile sul dispositivo corrente. Consultare il [paragrafo successivo](#Selezionare_un_file_Modello_diverso) per informazioni su come modificare il Modello.

## Selezionare un file Modello diverso

Per selezionare un Modello diverso per un disegno:

1. Individuare l'oggetto Pagina desiderato nella [Vista ad albero](/Tree_view/it "Tree view/it").
2. Espandere il nodo Pagina se necessario.
3. Selezionare l'oggetto Modello.
4. Nell'[Editor delle proprietà](/Property_editor "Property editor") fare clic sul campo della proprietà Dati**Template**.
5. Premere il pulsante ... (puntini di sospensione) visualizzato.
6. Una finestra di dialogo apre la cartella in cui si trova il modello corrente. Se la pagina è stata creata nella sessione corrente di FreeCAD, questa sarà la cartella del modello predefinita (come impostata in [Preferenze di TechDraw](/TechDraw_Preferences/it#Files "TechDraw Preferences/it")).
7. Facoltativamente passare a un'altra cartella.
8. Selezionare un file modello diverso.
9. Premere il pulsante OK.

Se si ha modificato un file modello e si desidera aggiornare una pagina creata nella sessione corrente di FreeCAD che utilizza questo modello, selezionare prima temporaneamente un file diverso, quindi seleziona nuovamente il file modificato.

## Modelli personalizzati

In FreeCAD è incluso un numero limitato di modelli preformattati in vari formati di pagine standard. Questi si trovano in

```
$INSTALL_DIR/Mod/TechDraw/Templates/

```

dove `$INSTALL_DIR` è la directory in cui è stato installato FreeCAD, per esempio

```
/usr/share/freecad/Mod/TechDraw/Templates/

```

I modelli personalizzati possono anche essere specificati come predefiniti nelle [Preferenze di TechDraw](/TechDraw_Preferences/it "TechDraw Preferences/it").

Vedere anche [Come creare un modello TechDraw personalizzato](/TechDraw_TemplateHowTo/it "TechDraw TemplateHowTo/it") oppure, se si preferiscono i modelli generati da script, [TechDraw TemplateGenerator](/index.php?title=TechDraw_TemplateGenerator/it&action=edit&redlink=1 "TechDraw TemplateGenerator/it (page does not exist)") e [Macro TemplateHelper](/index.php?title=Macro_TemplateHelper/it&action=edit&redlink=1 "Macro TemplateHelper/it (page does not exist)").

## Note

* La libreria che FreeCAD utilizza per elaborare SVG **supporta solo la specifica svg-tiny**. In particolare: "SVG Tiny non supporta sfumature, trasparenza, ritaglio, maschere, simboli, motivi, testo sottolineato, testo barrato, testo verticale o effetti filtro SVG." (dalla Guida di Adobe Illustrator). L'utilizzo di queste funzionalità nel modello personalizzato causerà problemi di rendering.

* Le clausole di trasformazione Svg possono causare dei problemi nei modelli personalizzati. Vedere la [Stackoverflow](https://stackoverflow.com/questions/13329125/removing-transforms-in-svg-files) discussione sulla rimozione delle clausole di trasformazione nei file SVG, soprattutto se Inkscape ne ha usati troppi. Ma non possono essere evitati se si ha bisogno di testo ruotato nel proprio modello.

La clausola **xml:space="preserve"** causa a volte problemi di dimensioni e posizionamento del testo. È meglio evitare o rimuovere questa clausola dal codice SVG del proprio modello personalizzato.

* I modelli funzionano meglio quando non contengono codice SVG superfluo (da alcuni chiamato "spazzatura SVG"). C'è un buon articolo su [removing garbage from SVG here](https://freecad-gost.ru/news/gost-templates-techdraw-09-01-2020/). L'articolo è in russo.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Templates/it&oldid=1461799>"