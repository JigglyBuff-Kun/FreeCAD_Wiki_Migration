---
title: Draftː Imposta stile
---
|  |
| --- |
| Draft Imposta stile |
| Posizione nel menu |
| Utilità → Imposta stile |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| Draft: S S |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Draft Stile delle annotazioni](/Draft_AnnotationStyleEditor/it "Draft AnnotationStyleEditor/it"), [Draft Applica lo stile](/Draft_ApplyStyle/it "Draft ApplyStyle/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_SetStyle.svg) **Draft Imposta stile** imposta lo stile predefinito per i nuovi oggetti.

![](/images/Draft_SetStyle_Taskpanel_Tab_Shape.png) ![](/images/Draft_SetStyle_Taskpanel_Tab_Annotation.png)

Le due schede ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")) del pannello azioni delle impostazioni di Stile

## Utilizzo

1. Esistono diversi modi per richiamare il comando:
   * Premere il pulsante ![](/images/Draft_tray_button_style.png) nel [Vassoio di Draft](/Draft_Tray/it "Draft Tray/it"). A seconda delle impostazioni di stile correnti, questo pulsante può avere un aspetto diverso.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Utilità → ![](/images/Draft_SetStyle.svg) Imposta lo stile** dal menu, o dalla [Vista ad albero](/Tree_view/it "Tree view/it") o dal menu contestuale della [Vista 3D](/3D_view/it "3D view/it").
   * Draft: Usare la scorciatoia da tastiera: S quindi S.
2. Si apre il pannello delle attività **Impostazioni dello stile**. Vedere [Opzioni](#Opzioni) per ulteriori informazioni.
3. Facoltativamente modificare una o più impostazioni.
4. Premere il pulsante OK per salvare le impostazioni.
5. Il pulsante nella [Vassoio di Draft](/Draft_Tray "Draft Tray") viene aggiornato.

## Opzioni

* Dall'elenco a discesa nella parte superiore del pannello delle attività è possibile selezionare uno stile predefinito.
* Premere il pulsante ![](/images/Document-save.svg) per salvare le impostazioni correnti dello stile come preimpostazione.
* Nella scheda **Forma** è possibile specificare le seguenti impostazioni:
  + **Aspetto della forma**
    - **Colore forma**.
    - **Colore ambiente della forma**. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
    - **Colore emissione della forma**. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
    - **Colore speculare della forma**. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
    - **Trasparenza della forma**.
    - **Lucentezza della forma**. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
  + **Altro**
    - **Colore della linea**.
    - **Spessore linea**.
    - **Colore punto**. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
    - **Dimensione punto**. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
    - **Stile di disegno**.
    - **Modalità visualizzazione**.
* Le impostazioni nella scheda **Annotazione** si applicano ai [Draft Testi](/Draft_Text/it "Draft Text/it"), [Draft Quote](/Draft_Dimension/it "Draft Dimension/it") e [Draft Etichette](/Draft_Label/it "Draft Label/it"). È possibile specificare le seguenti impostazioni (vedere [Draft Testo](/Draft_Text/it#Vista "Draft Text/it") e [Draft Quota](/Draft_Dimension/it#Vista "Draft Dimension/it") per i dettagli):
  + **Testi**
    - **Tipo di carattere**.
    - **Dimensione del carattere**. Questa è infatti l'altezza della riga predefinita, le lettere sono più piccole.
    - **Fattore di spaziatura linea**. Non utilizzato per le dimensioni.
    - **Moltiplicatore di scala**. Questo è l'inverso della scala impostata nel [Widget scala annotazione](/Draft_annotation_scale_widget/it "Draft annotation scale widget/it"). Se la scala è `1:100` il moltiplicatore è `100`. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
    - **Colore testo**.
  + **Linee e frecce**
    - **Spessore linea**. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
    - **Tipo di freccia**.
    - **Dimensione freccia**.
    - **Colore linea e freccia**. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
  + **Quote**
    - **Mostra unità di misura**.
    - **Sostituzione unità**.
    - **Estensione della linea di misura**. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")
    - **Lunghezza della linea di riferimento**. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")
    - **Estensione della linea di riferimento**. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")
    - **Spaziatura del testo**.
* Premere il pulsante ![](/images/Draft_SetStyle.svg) Selezionato per applicare le impostazioni agli oggetti o ai gruppi selezionati. Gli oggetti possono essere selezionati mentre il pannello delle attività è aperto.
* Premere il pulsante ![](/images/Draft_Text.svg) Annotazioni per applicare le impostazioni a tutti i [Testi](/Draft_Text/it "Draft Text/it"), [Quote](/Draft_Dimension "Draft Dimension") e  [Etichette](/Draft_Label "Draft Label") nel documento corrente. [disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")
* Premere il pulsante Annulla per terminare il comando senza salvare le impostazioni.

## Note

* Le impostazioni nel pannello **Forma**, eccetto **Stile disegno** e **Modalità di visualizzazione**, non vengono utilizzate solo per gli oggetti Draft, ma anche per gli oggetti creati con altri ambienti di lavoro.
* Tutte le impostazioni, eccetto **Stile di disegno** e **Modalità di visualizzazione**, possono essere modificate anche nelle preferenze. Vedere [Preferenze PartDesign](/PartDesign_Preferences/it#Shape_appearance "PartDesign Preferences/it") e [Preferenze Draft](/Draft_Preferences/it#Testi_e_quotature "Draft Preferences/it").
* Gli stili vengono salvati in un file con un nome fisso: StylePresets.json che è archiviato nella cartella utente Draft dell'utente di FreeCAD:
  + Su Linux solitamente è /home/<nomeutente>/.local/share/FreeCAD/Draft/.
  + Su Windows è %APPDATA%\FreeCAD\Draft\, che solitamente è C:\Users\<nomeutente>\Appdata\Roaming\FreeCAD\Draft\.
  + Su macOS di solito è /Users/<username>/Library/Preferences/FreeCAD/Draft/.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SetStyle/it&oldid=1513762>"