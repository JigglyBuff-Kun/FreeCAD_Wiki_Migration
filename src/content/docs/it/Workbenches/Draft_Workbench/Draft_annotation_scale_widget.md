---
title: Draftː Dispositivo scala annotazione
---
## Descrizione

Il **Dispositivo (widget) Draft scala annotazione** può essere utilizzato per specificare la scala di annotazione di Draft. Questa scala determina il Vista**Scale Multiplier** dei nuovi [Testi](/Draft_Text/it "Draft Text/it"), [Quote](/Draft_Dimension/it "Draft Dimension/it") e [Etichette](/Draft_Label/it "Draft Label/it"). Il dispositivo è disponibile solo in ambiente ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/it "Draft Workbench/it"). È un elemento GUI [opzionale](#Preferenze) che si trova nella [Barra di stato](/Status_bar/it "Status bar/it").

![](/images/Draft_annotation_scale_widget_button.png)

Il dispositivo Draft scala annotazione

## Utilizzo

1. Premere il pulsante x:x nella [Barra di stato](/Status_bar/it "Status bar/it"). Il pulsante visualizza la scala di annotazione corrente.
2. Si apre il menu della scala.
3. Effettuare una delle seguenti operazioni:
   * Selezionare una delle scale standard.
   * Selezionare l'opzione **Personalizza**:
     + Nella finestra di dialogo che si apre inserire una scala personalizzata utilizzando il formato `x:x` o `x=x`.
     + Premere Enter o il pulsante OK.

![](/images/Draft_annotation_scale_widget_menu.png)

Il menu del dispositivo

## Preferenze

Vedere anche: [Impostare le preferenze](/Preferences_Editor/it "Preferences Editor/it") e [Preferenze per l'ambiente Draft](/Draft_Preferences/it "Draft Preferences/it").

* Il dispositivo Draft Scala annotazione è facoltativo: **Modifica → Preferenze... → Draft → Interfaccia → Mostra il dispositivo Scala annotazione nell'Ambiente Draft**.
* Per modificare la scala dell'annotazione senza il dispositivo: **Strumenti → Modifica parametri... → BaseApp → Preferences → Mod → Draft → DraftAnnotationScale**. La scala è definita da un singolo numero. Per una scala di `1:50` inserire `0.02`.

## Note

* Vedere anche: [Draft Imposta Stile](/Draft_SetStyle/it "Draft SetStyle/it") e [Draft Applica Stile](/Draft_ApplyStyle/it "Draft ApplyStyle/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_annotation_scale_widget/it&oldid=1505007>"