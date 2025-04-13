---
title: Draft Forma da testo
---
|  |
| --- |
| Draft Forma da testo |
| Posizione nel menu |
| Drafting → Forma da testo Annotazione → Forma da testo |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.14 |
| Vedere anche |
| [Testo](/Draft_Text/it "Draft Text/it"), [Draft Etichetta](/Draft_Label/it "Draft Label/it") [Part Estrusione](/Part_Extrude/it "Part Extrude/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_ShapeString.svg) **Forma da testo** crea una forma composta che rappresenta una stringa di testo. Questa forma può essere utilizzata per creare lettere 3D con il comando [Part Estrusione](/Part_Extrude/it "Part Extrude/it").

Il comando Forma da testo non è destinato alle annotazioni di testo standard. Il comando [Testo](/Draft_Text/it "Draft Text/it") o il comando [Etichetta](/Draft_Label/it "Draft Label/it") dovrebbe essere utilizzato a tale scopo.

![](/images/Draft_ShapeString_Example400.png)

Per posizionare una Forma da testo basta un singolo punto

## Utilizzo

Per gli utenti Windows: leggere prima il paragrafo [Selezione file font su Windows](#Selezione_file_font_su_Windows).

1. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_ShapeString.svg) Forma da testo.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Drafting → ![](/images/Draft_ShapeString.svg) Forma da testo** dal menu.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **Annotazione → ![](/images/Draft_ShapeString.svg) Forma da testo** dal menu.
2. Si apre il pannello attività **Forma da testo**.
3. Fare clic su un punto nella [Vista 3D](/3D_view/it "3D view/it") o digitare le coordinate.
4. Facoltativamente, premere il pulsante Reimposta punto per reimpostare il punto all'origine.
5. Inserire una **Stringa**.
6. Specificare l'**Altezza**.
7. Per selezionare un carattere, eseguire una delle seguenti operazioni:
   * Inserire un percorso file nella casella di input **Font file**.
   * Premere il pulsante ... e selezionare un file.
8. Premere il pulsante OK per terminare il comando.
9. Facoltativamente, modificare il Dati**Justification** di ShapeString. Vedere [Proprietà](#Proprietà).

## Opzioni

* Premer Esc o il pulsante Annulla per interrompere il comando.

## Percorso relativo del font

[disponibile dalla versione 1.1](/Release_notes_1.1/it "Release notes 1.1/it")

È possibile specificare un percorso relativo per il file dei caratteri. Per questo il documento di FreeCAD deve essere stato salvato almeno una volta.

Alcuni esempi:

* ./SomeFont.ttf: il file del carattere si trova nella stessa directory del documento.
* ./MyDirectory/SomeFont.ttf: il file del carattere si trova nella sottodirectory MyDirectory della directory dei documenti.
* ../SomeFont.ttf: il file del carattere si trova nella directory principale della directory dei documenti.

## Selezione file font su Windows

In Windows l'accesso alla cartella dei caratteri predefinita è limitato. Ciò influisce sulla selezione del file di carattere per Forma da testo. Esistono tre casi in FreeCAD in cui è possibile specificare un file di font per Forma da testo: nel pannello attività Forma da testo, quando si modifica la proprietà Dati**Font File** di una Forma da testo e quando si specifica il file di font predefinito in [Preferenze per l'ambiente Draft](/Draft_Preferences/it#Testi_e_quotature "Draft Preferences/it").

Non è possibile premere il pulsante ... e quindi selezionare un file dalla cartella predefinita dei font di Windows quando si utilizza la finestra di dialogo dei file nativi. Ci sono una serie di soluzioni alternative:

* Assicurarsi che **DontUseNativeFontDialog** sia impostato su `true`, che è il valore predefinito per questa preferenza. Questo chiamerà una finestra di dialogo file diversa, non nativa, solo quando si preme il pulsante ... nel pannello attività Forma da testo. Con questa finestra di dialogo è possibile accedere alla cartella predefinita dei font di Windows.
* Cambiare **DontUseNativeDialog** in `true`. Ciò indica a FreeCAD di utilizzare sempre la finestra di dialogo dei file non nativi.
* Specificare il file del carattere nella casella di immissione. Ovviamente è possibile digitare il percorso completo o copiare e incollare il percorso da Esplora file di Windows. Ma c'è anche un altro modo per entrare nella cartella. Se si inserisce `C:\` apparirà un elenco a tendina. Selezionare `Windows` da quell'elenco e aggiungere `\F`. Selezionare `Fonts` dal nuovo elenco a discesa. Infine aggiungere `\` e le prime lettere del file del font, quindi selezionalo dall'elenco a discesa.
* Creare una cartella personalizzata contenente i file dei font.

Vedere il paragrafo [Preferenze](#Preferenze) di seguito per la posizione delle preferenze citate.

## Note

* Una Forma da testo può essere modificata facendo doppio clic su di essa nella [Vista ad albero](/Tree_view/it "Tree view/it").
* I font supportati includono TrueType (.ttf), OpenType (.otf) e Type 1 (.pfb).
* Il comando è limitato al testo da sinistra a destra. Il testo da destra a sinistra e dall'alto in basso non è supportato.
* Altezze del testo molto piccole possono causare forme dei caratteri deformate a causa della perdita di dettagli nel ridimensionamento.
* I font possono genererare geometrie problematiche. Questo perché i contorni dei caratteri possono sovrapporsi e avere piccoli spazi. Queste condizioni sono considerate errori nelle poliline utilizzate per definire le facce.
* Forma da testo può anche essere creato con [Macro Fonts Win10 PYMP](/Macro_Fonts_Win10_PYMP/it "Macro Fonts Win10 PYMP/it").
* Per creare Forme da testo disposte in modo circolare utilizzare il [Macro FCCircularText](/Macro_FCCircularText/it "Macro FCCircularText/it").

## Tutorial

* [Tutorial Forma da testo - ShapeString](/Draft_ShapeString_tutorial/it "Draft ShapeString tutorial/it"): come estrudere un testo, posizionarlo nello spazio 3D e creare un'incisione in un altro corpo.
* [How to use ShapeStrings in PartDesign](https://forum.freecadweb.org/viewtopic.php?f=3&t=36623)

## Preferenze

Vedere anche: [Impostare le Preferenze](/Preferences_Editor/it "Preferences Editor/it"), [Preferenze per l'ambiente Draft](/Draft_Preferences/it "Draft Preferences/it") e [Modifica parametri](/Std_DlgParameter/it "Std DlgParameter/it").

* Il file di font predefinito può essere modificato nelle preferenze: **Modifica → Preferenze... → Draft → Testi e quotature → Font predefinito per Forma da testo**.
* Per utenti Windows:
  + Impostare **Strumenti → Modifica parametri... → BaseApp → Preferences → Dialog → DontUseNativeFontDialog** su `true` per utilizzare la finestra di dialogo del file non nativo quando si seleziona un file di carattere dal pannello delle attività Forma da testo.
  + In alternativa, impostare **Strumenti → Modifica parametri... → BaseApp → Preferences → Dialog → DontUseNativeDialog** su `true` per utilizzare sempre la finestra di dialogo del file non nativo.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Forma da testo è derivato da un [Part Part2DObject](/Part_Part2DObject/it "Part Part2DObject/it") e ne eredita tutte le proprietà. Ha anche le seguenti proprietà aggiuntive:

### Dati

Draft

* Dati**Font File** (`File`): nome del file di carattere.
* Dati**Fuse** (`Bool`): fonde le facce se si sovrappongono, solitamente non richiesto (può essere molto lento). Ignorato se Dati**Make Face** è `false`. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
* Dati**Justification** (`Enumeration`): allineamento orizzontale e verticale. Opzioni: `Top-Left`, `Top-Center`, `Top-Right`, `Middle-Left`, `Middle-Center`, `Middle-Right`, `Bottom-Left`, `Bottom-Center`, `Bottom-Right`. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
* Dati**Justification Reference** (`Enumeration`): riferimento di altezza utilizzato per la giustificazione. Opzioni: `Cap Height`, `Shape Height`. L'altezza della forma dipende dai caratteri in Dati**String**. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
* Dati**Keep Left Margin** (`Bool`): mantiene il margine sinistro e lo spazio bianco iniziale quando viene lasciata la giustificazione. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
* Dati**Make Face** (`Bool`): riempie le lettere con facce.
* Dati**Oblique Angle** (`Angolo`): angolo obliquo (inclinato). Deve essere compreso tra -80° e +80°. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
* Dati**Scale To Size** (`Bool`): scala per garantire che l'altezza della maiuscola sia uguale alla dimensione. Se impostato su `false`, a seconda del carattere, l'altezza della maiuscola non corrisponderà esattamente a Dati**Size**. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
* Dati**Size** (`Length`): altezza del testo.
* Dati**String** (`String`): stringa di testo. Un ShapeString può visualizzare solo una singola riga di testo.
* Dati**Tracking** (`Distance`): spaziatura tra caratteri. ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")): Il tipo di proprietà è stato aggiornato.

![](/images/Draft_ShapeString_Justification.png)

L'altezza del rettangolo rosso (linea continua) è uguale all'altezza del carattere maiuscolo.  
L'altezza del rettangolo verde (linea tratteggiata) è uguale all'altezza della forma.  
Gli angoli, i punti medi dei bordi e il centro dei rettangoli  
corrispondono alle 9 opzioni di giustificazione: in alto a sinistra a in basso a destra.

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per creare una Draft Forma da testo usare il metodo `make_shapestring` ([disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")) del modulo Draft. Questo metodo sostituisce il metodo deprecato `makeShapeString`.

```
shapestring = make_shapestring(String, FontFile, Size=100, Tracking=0)

```

* Crea una forma composta `shapestring` usando la `String` specificata e il percorso completo di un `FontFile` supportato.
* `Size` è l'altezza in millimetri del testo risultante.
* `Tracking` è la spaziatura tra caratteri in millimetri.

Il posizionamento di `ShapeString` può essere cambiato sovrascrivendo il suo attributo `Placement`, o sovrascrivendo singolarmente i suoi attributi `Placement.Base` e `Placement.Rotation`.

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

font1 = "/usr/share/fonts/truetype/msttcorefonts/Arial.ttf"
font2 = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
font3 = "/usr/share/fonts/truetype/freefont/FreeSerifItalic.ttf"

S1 = Draft.make_shapestring("This is a sample text", font1, 200)

S2 = Draft.make_shapestring("Inclined text", font2, 200, 10)

zaxis = App.Vector(0, 0, 1)
p2 = App.Vector(-1000, 500, 0)
place2 = App.Placement(p2, App.Rotation(zaxis, 45))
S2.Placement = place2

S3 = Draft.make_shapestring("Upside-down text", font3, 200, 10)
S3.Placement.Base = App.Vector(0, -1000, 0)
S3.Placement.Rotation = App.Rotation(zaxis, 180)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ShapeString/it&oldid=1529900>"