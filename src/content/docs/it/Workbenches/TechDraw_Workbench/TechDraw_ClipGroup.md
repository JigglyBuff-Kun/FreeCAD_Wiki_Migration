---
title: TechDraw Gruppo di ritaglio
---
|  |
| --- |
| TechDraw Gruppo di ritaglio |
| Posizione nel menu |
| TechDraw → Viste TechDraw → Gruppo di ritaglio |
| Ambiente |
| [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Lo strumento **TechDraw Gruppo di ritaglio** crea una finestra di ritaglio (clip) che può contenere Viste.

![](/images/TechDraw_Clipview.png)

Finestra di ritaglio di diverse viste esistenti

## Utilizzo

1. Se nel documento sono presenti più pagine di disegno: facoltativamente attivare la pagina desiderata selezionandola nella [Vista ad albero](/Tree_view/it "Tree view/it").
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/TechDraw_ClipGroup.svg) Inserisci Gruppo di ritaglio.
   * Selezionare l'opzione **TechDraw → Viste TechDraw → ![](/images/TechDraw_ClipGroup.svg) Inserisci Gruppo di ritaglio** dal menu.
3. Se nel documento sono presenti più pagine di disegno e non si ha ancora attivato una pagina, si apre la finestra di dialogo **Scelta pagina**:
   1. Selezionare la pagina desiderata.
   2. Premere il pulsante OK.
4. Le viste possono essere trascinate e rilasciate da e verso il Gruppo di ritaglio (Clip) nella vista ad albero. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un Ggruppo di ritaglio, formalmente un oggetto `TechDraw::DrawViewClip`, ha le [proprietà](/TechDraw_View/it#Properties_Part_View "TechDraw View/it") comuni a tutti i tipi di visualizzazione. Ha anche le seguenti proprietà aggiuntive.

### Dati

Clip Group

* Dati**Width** (`Length`): La larghezza della finestra di ritaglio in unità
* Dati**Height** (`Length`): L'altezza della finestra di ritaglio in unità
* Dati**ShowFrame** (`Bool`): Quando è vero, mostra una cornice attorno alla finestra di ritaglio
* Dati**Views** (`LinkList`): Le Viste contenute nella finestra di ritaglio

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ClipGroup/it&oldid=1493602>"