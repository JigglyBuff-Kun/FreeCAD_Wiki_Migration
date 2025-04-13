---
title: TechDraw Pagina predefinita
---
|  |
| --- |
| TechDraw Pagina predefinita |
| Posizione nel menu |
| TechDraw → Inserisci Pagina predefinita |
| Ambiente |
| [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [TechDraw Pagina da modello](/TechDraw_PageTemplate/it "TechDraw PageTemplate/it"), [TechDraw Modelli](/TechDraw_Templates/it "TechDraw Templates/it") |
|  |

## Descrizione

Lo strumento **TechDraw Pagina predefinita** crea una nuova Pagina utilizzando il file modello specificato nelle [Preferenze](/TechDraw_Preferences/it "TechDraw Preferences/it").

![](/images/A4_LandscapeTD.svg)

Modello predefinito fornito con TechDraw: A4\_LandscapeTD.svg

## Utilizzo

1. Deve esistere un documento attivo.
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/TechDraw_PageDefault.svg) Inserisci Pagina predefinita.
   * Seleziona l'opzione **TechDraw → Pagina → ![](/images/TechDraw_PageDefault.svg) Inserisci Pagina predefinita** dal menu.

## Note

* Se una Pagina è contrassegnata come "non mantenere aggiornata" tramite la sua proprietà Dati**Keep Updated**, tramite l'opzione **Toggle Keep Updated** dal menu contestuale della finestra o dall'impostazione nella Preferenze, ignorerà le modifiche nel modello 3D. Si potrebbero notare anomalie (geometria mancante, valori di dimensione mancanti, ecc.) nell'aspetto della Pagina. Queste verranno corrette automaticamente una volta aggiornata la pagina con lo strumento [Ridisegna pagina](/TechDraw_RedrawPage/it "TechDraw RedrawPage/it"). La Pagina avrà questa icona ![](/images/TechDraw_Tree_Page_Unsync.svg) nella [Vista ad albero](/Tree_view/it "Tree view/it") mentre l'aggiornamento è sospeso. Questa impostazione influisce anche sul processo di avvio. Se una Pagina è contrassegnata come "non mantenere aggiornata" non verrà disegnata all'avvio del programma.

* Se il modello predefinito non è specificato nel file di configurazione utente `user.cfg`, lo strumento provaː

:   ```
    $INSTALL_DIR/Mod/TechDraw/Templates/A4_LandscapeTD.svg

    ```

ː Dove `$INSTALL_DIR` è la directory in cui è stato installato FreeCAD, per esempioː

:   ```
    /usr/share/freecad/Mod/TechDraw/Templates/A4_LandscapeTD.svg

    ```

## Proprietà

### Dati

Base

* Dati**Projection Type**: tipo di proiezione predefinito (Primo o Terzo angolo) per questa Pagina.

Page

* Dati**Keep Updated**: se false, la Pagina non viene aggiornata con le modifiche al modello 3D. Utile per disegni complicati/lenti. Vedere [Note](#Note).
* Dati**Template**: un collegamento all'oggetto [Template](/TechDraw_Templates/it "TechDraw Templates/it") di questa pagina.
* Dati**Views**: un elenco di collegamenti alle visualizzazioni in questa Pagina.
* Dati**Scale**: scala predefinita per le visualizzazioni in questa Pagina.
* Dati**Next Balloon Index**: numerazione automatica per le Pallinature.

### Vista

Grid

* Vista**Show Grid**: Mostra una griglia su questa Pagina.
* Vista**Grid Spacing**: distanza tra le linee della griglia.

## Script

Vedere [TechDraw PageTemplate](/TechDraw_PageTemplate/it#Scripting "TechDraw PageTemplate/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_PageDefault/it&oldid=1487357>"