---
title: TechDraw Vista attiva
---
|  |
| --- |
| TechDraw Vista attiva |
| Posizione nel menu |
| TechDraw → Viste Da Altri Ambienti → Inserisci Vista attiva (Vista 3D) |
| Ambiente |
| [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.19 |
| Vedere anche |
| [TechDraw Immagine](/TechDraw_Image/it "TechDraw Image/it") |
|  |

## Descrizione

Lo strumento **TechDraw Vista attiva** inserisce un'immagine bitmap della finestra 3D attiva in una pagina di disegno.

![](/images/TechDraw_ActiveView_example.png)

Una vista semplice dal modello 3D.

## Utilizzo

1. Passare alla [Vista 3D](/3D_view/it "3D view/it") corretta.
2. Se nel documento sono presenti più pagine di disegno: facoltativamente selezionare la pagina desiderata nella [Vista ad albero](/Tree_view/it "Tree view/it").
3. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/TechDraw_ActiveView.svg) Inserisci Vista attiva (Vista 3D).
   * Seleziona l'opzione **TechDraw → Viste Da Altri Ambienti → ![](/images/TechDraw_ActiveView.svg) Inserisci Vista attiva (Vista 3D)** dal menu.
4. Se nel documento sono presenti più pagine di disegno e non si ha ancora selezionato una pagina, si apre la finestra di dialogo **Scelta pagina**:
   1. Selezionare la pagina desiderata.
   2. Premere il pulsante OK.
5. Si apre il pannello delle attività da **ActiveView a TD View**. Vedere [Opzioni](#Opzioni) per ulteriori informazioni.
6. Premere il pulsante OK.

## Opzioni

È possibile specificare quanto segue:

* **Ritaglia**: Ritaglia la bitmap generata.
* **Larghezza**: La larghezza (in mm) per ritagliare la vista generata.
* **Altezza**: L'altezza (in mm) per ritagliare la vista generata.
* **Nessuno sfondo**: Se selezionato, la bitmap generata avrà uno sfondo trasparente.
* **Sfondo uniforme**: Se selezionato, il generato avrà uno sfondo del colore selezionato.
* **Usa sfondo 3D**: Se selezionato, la bitmap generata utilizzerà lo sfondo della finestra 3D.

## Note

* Le Viste attive sono statiche una volta generate e non vengono mai aggiornate con le modifiche al modello 3D.
* Una Vista Attive dietro le quinte è una [Immagine](/TechDraw_Image/it "TechDraw Image/it"). Il suo Dati**Scale Type** è quindi sempre inizializzato come `Custom`.
* In versione 0.20 e precedenti le Viste Attive erano un [Simbolo](/TechDraw_Symbol/it "TechDraw Symbol/it").

## Proprietà

Vedere [TechDraw Immagine](/TechDraw_Image/it#Properietà "TechDraw Image/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ActiveView/it&oldid=1490903>"