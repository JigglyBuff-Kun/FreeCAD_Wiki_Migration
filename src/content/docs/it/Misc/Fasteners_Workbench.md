---
title: Fasteners
---

![](/images/Fasteners_workbench_icon.svg)

Icona dell'Ambiente Fasteners

## Introduzione

![](/images/Fasteners_workbench_icon.svg) [L'Ambiente Fasteners](/Fasteners_Workbench "Fasteners Workbench") è un [ambiente di lavoro complementare](/External_workbench "External workbench") con cui aggiungere vari elementi di fissaggio alle parti.

![](/images/Fasteners_Toolbars.png)

Il layout opzionale della barra singola dell'ambiente di lavoro.  
Gli elementi di fissaggio con dimensioni metriche hanno icone arancioni.  
Gli elementi di fissaggio con dimensioni in pollici hanno icone verdi.

## Installazione

1. Installare l'Ambiente Fasteners tramite ![](/images/AddonManager.svg) [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it"). Per l'installazione manuale vedere [Installare ulteriori ambienti di lavoro](/Installing_more_workbenches/it "Installing more workbenches/it").
2. Riavviare FreeCAD.
3. Selezionare ![](/images/Fasteners_workbench_icon.svg) Fasteners Workbench dall'elenco a discesa degli [Ambienti di lavoro](/Std_Workbench/it "Std Workbench/it").
4. Facoltativamente, modificare la barra degli strumenti e il layout del menu:
   1. Andare su: **Modifica → Preferenze... → Fasteners → General settings**.
   2. Selezionare una delle opzioni disponibili di **Toolbar screw icons grouping**:
      - **None**: tutti gli elementi di fissaggio vengono visualizzati in un'unica barra degli strumenti. Per vedere tutti i pulsanti disponibili, utilizzare il pulsante >> per mostrarli.
      - **Separate toolbars**: gli elementi di fissaggio sono raggruppati in diverse barre degli strumenti. Questo è il layout predefinito.
      - **Dropdown buttons**: gli elementi di fissaggio sono raggruppati in barre degli strumenti con spunte.
   3. Facoltativamente deselezionare una o più opzioni **Fastener standards shown in toolbars**. I componenti standard non selezionati saranno ancora disponibili nel menu.
   4. Riavviare FreeCAD.

## Utilizzo

Gli elementi di fissaggio possono essere attaccati o staccati. Gli elementi di fissaggio attaccati hanno un Dati**Base Object**, un bordo circolare e il loro Dati**Placement** è collegato dinamicamente a quell'oggetto. Il comando ![](/images/Fasteners_Move.svg) [Muovi di Fasteners](/Fasteners_Move/it "Fasteners Move/it") può essere utilizzato per attaccare o staccare un elemento di fissaggio.

### Elementi di fissaggio staccati

1. Selezionare l'elemento di fissaggio desiderato facendo clic sul relativo pulsante o selezionandolo dal menu.
2. Un elemento di fissaggio viene creato all'origine.
3. Facoltativamente modificare le dimensioni e altre proprietà dell'elemento di fissaggio:
   1. Selezionare il dispositivo di fissaggio.
   2. Andare alla scheda **Data** dell'[Editor delle proprietà](/Property_editor/it "Property editor/it").
   3. Modificare le proprietà ai valori richiesti.

### Elementi di fissaggio attaccati

![](/images/Fasteners_Attached_Selected.png) ![](/images/Fasteners_Attached_Created.png)

A sinistra i due bordi circolari selezionati. A destra gli elementi di fissaggio attaccati.

1. Specificare se i fori selezionati sono fori filettati o fori passanti selezionando ![](/images/Fasteners_MatchTypeInner.svg) [Fasteners MatchTypeInner](/Fasteners_MatchTypeInner/it "Fasteners MatchTypeInner/it") o ![](/images/Fasteners_MatchTypeOuter.svg) [Fasteners MatchTypeOuter](/Fasteners_MatchTypeOuter/it "Fasteners MatchTypeOuter/it") rispettivamente (non utilizzato per viti a testa svasata).
2. Selezionare uno o più bordi circolari e/o facce con bordi circolari. Per le viti a testa svasata è necessario selezionare il bordo superiore del foro smussato.
3. Selezionare l'elemento di fissaggio desiderato facendo clic sul relativo pulsante o selezionandolo dal menu.
4. Un elemento di fissaggio è attaccato a ciascuno dei bordi circolari selezionati.
5. Le dimensioni predefinite di ciascun elemento di fissaggio dipendono dal raggio del bordo circolare a cui è attaccato. Le viti a testa svasata sono abbinate al diametro della testa, gli altri elementi di fissaggio sono abbinati al diametro dell'albero.
6. Facoltativamente modificare le dimensioni e altre proprietà degli elementi di fissaggio. Vedere sopra.
7. Gli elementi di fissaggio che appaiono capovolti possono essere invertiti con il comando ![](/images/Fasteners_Flip.svg) [Fasteners Flip](/Fasteners_Flip/it "Fasteners Flip/it") o modificando la loro proprietà Dati**Invert**.
8. Facoltativamente, modificare la proprietà Dati**Offset** per creare spazio tra gli elementi di fissaggio e i bordi a cui sono attaccati.

## Note

- Per generare le filettature, la proprietà Dati**Thread** di un elemento di fissaggio deve essere modificata in `true`. La generazione di thread è onerosa. Il ricalcolo richiede molto più tempo se in un documento sono presenti molti elementi di fissaggio con filettature.
- La proprietà Dati**Invert** e la proprietà Dati**Offset** vengono ignorate per gli elementi di fissaggio non attaccati.

## Comandi

- ![](/images/Fasteners_Flip.svg) [Invert fastener](/Fasteners_Flip/it "Fasteners Flip/it"): Inverte l'orientamento degli elementi di fissaggio attaccati.

- ![](/images/Fasteners_Move.svg) [Move fastener](/Fasteners_Move/it "Fasteners Move/it"): Sposta e attacca un elemento di fissaggio a un bordo circolare. Può essere utilizzato anche per staccare un elemento di fissaggio.

- ![](/images/Fasteners_Simplify.svg) [Simplify shape](/Fasteners_Simplify/it "Fasteners Simplify/it"): Crea copie non parametriche degli elementi di fissaggio.

- ![](/images/Fasteners_MatchTypeInner.svg) [Match for tap hole](/Fasteners_MatchTypeInner/it "Fasteners MatchTypeInner/it"): Considera i bordi circolari come fori maschiati quando ad essi vengono attaccati nuovi elementi di fissaggio.

- ![](/images/Fasteners_MatchTypeOuter.svg) [Match for pass hole](/Fasteners_MatchTypeOuter/it "Fasteners MatchTypeOuter/it"): Considera i bordi circolari come fori passanti quando ad essi vengono attaccati nuovi elementi di fissaggio.

- ![](/images/Fasteners_BOM.svg) [Generate BOM](/Fasteners_BOM/it "Fasteners BOM/it"): Crea un foglio di calcolo con una distinta materiali per gli elementi di fissaggio nel documento.

- ![](/images/Fasteners_ScrewCalculator.svg) [Screw calculator](/Fasteners_ScrewCalculator/it "Fasteners ScrewCalculator/it"): Mostra una calcolatrice per determinare la dimensione del preforo delle viti.

- ![](/images/Fasteners_ChangeParameters.svg) [Change fastener parameters](/Fasteners_ChangeParameters/it "Fasteners ChangeParameters/it"): Modifica i parametri degli elementi di fissaggio.

## Elementi di fissaggio

Gli elementi di fissaggio con dimensioni metriche hanno icone arancioni. Gli elementi di fissaggio con dimensioni in pollici hanno icone verdi.

### Viti e bulloni a testa esagonale

- ![](/images/Fasteners_ASMEB18.2.1.6.svg) **ASME B18.2.1.6** vite a testa esagonale UNC.

- ![](/images/Fasteners_ASMEB18.2.1.8.svg) **ASME B18.2.1.8** vite a testa esagonale flangiata UNC.

- ![](/images/Fasteners_DIN571.svg) **DIN 571** Vite per legno a testa esagonale.

- ![](/images/Fasteners_ISO4017.svg) **DIN 933** Vite a testa esagonale con gambo interamente filettato.

- ![](/images/Fasteners_ISO4017.svg) **DIN 961** Vite a testa esagonale con gambo interamente filettato – passo fine.

- ![](/images/Fasteners_EN1662.svg) **EN 1662** Vite a testa esagonale con flangia - serie leggera.

- ![](/images/Fasteners_EN1665.svg) **EN 1665** Vite a testa esagonale flangiata con o senza zigrinatura sottotesta - serie pesante.

- ![](/images/Fasteners_ISO4014.svg) **ISO 4014** Bullone a testa esagonale con gambo parzialmente filettato. _Prodotto di categoria A e B._

- ![](/images/Fasteners_ISO4014.svg) **ISO 4015** Vite a testa esagonale con gambo parzialmente filettato e ridotto.

- ![](/images/Fasteners_ISO4014.svg) **ISO 4016** Vite a testa esagonale con gambo parzialmente filettato - _Prodotto di categoria C._

- ![](/images/Fasteners_ISO4017.svg) **ISO 4017** Vite a testa esagonale con gambo interamente filettato. _Prodotto di categoria A e B._

- ![](/images/Fasteners_ISO4017.svg) **ISO 4018** Vite a testa esagonale con gambo interamente filettato . _Prodotto di categoria C._

- ![](/images/Fasteners_EN1662.svg) **ISO 4162** Vite esagonale con flangia, serie leggera. _Prodotto di categoria A con funzionalità di guida di prodotto di categoria B._

- ![](/images/Fasteners_ISO4017.svg) **ISO 8676** Viti a testa esagonale con gambo interamente filettato e con filettatura metrica a passo fine. _Prodotto di categoria A e B._

- ![](/images/Fasteners_ISO4014.svg) **ISO 8765** Bulloni a testa esagonale con gambo parzialmente filettato – passo fine.

- ![](/images/Fasteners_EN1662.svg) **ISO 15071** Vite a testa esagonale con flangia, serie leggera. _Prodotto di categoria A._

- ![](/images/Fasteners_EN1662.svg) **ISO 15072** Viti a testa esagonale flangiate con filettatura metrica a passo fine, serie leggera. _Prodotto di categoria A._

### Viti a esagono incassato

- ![](/images/Fasteners_ASMEB18.3.1A.svg) **ASME B18.3.1A** Vite a testa cilindrica con esagono incassato UNC.

- ![](/images/Fasteners_ASMEB18.3.1G.svg) **ASME B18.3.1G** Vite a testa cilindrica con cava esagonale a testa bassa UNC.

- ![](/images/Fasteners_ASMEB18.3.2.svg) **ASME B18.3.2** Vite a testa svasata con cava esagonale UNC.

- ![](/images/Fasteners_ASMEB18.3.3A.svg) **ASME B18.3.3A** Vite a testa tonda con cava esagonale UNC.

- ![](/images/Fasteners_ASMEB18.3.3B.svg) **ASME B18.3.3B** Vite a testa tonda con cava esagonale e flangia UNC.

- ![](/images/Fasteners_ASMEB18.3.4.svg) **ASME B18.3.4** Vite con spallamento a testa esagonale UNC.

- ![](/images/Fasteners_DIN6912.svg) **DIN 6912** Vite a testa cilindrica bassa con esagono incassato e con foro guida.

- ![](/images/Fasteners_DIN7984.svg) **DIN 7984** Vite a testa cilindrica bassa con cava esagonale.

- ![](/images/Fasteners_ISO2936.svg) **ISO 2936** Chiave a brugola.

- ![](/images/Fasteners_ISO4762.svg) **ISO 4762** Viti a testa cilindrica con cava esagonale.

- ![](/images/Fasteners_ISO7379.svg) **ISO 7379** Viti a testa cilindrica con cava esagonale, gambo rettificato e codolo filettato

- ![](/images/Fasteners_ISO7380.svg) **ISO 7380-1** Vite a testa bombata con cava esagonale.

- ![](/images/Fasteners_ISO7380-2.svg) **ISO 7380-2** Vite a testa bombata con cava esagonale con flangia.

- ![](/images/Fasteners_ISO10642.svg) **ISO 10642** Vite a testa svasata con cava esagonale.

### Viti a testa cava esalobata

- ![](/images/Fasteners_ISO14579.svg) **ISO 14579** Vite a testa cilindrica con cava esalobata.

- ![](/images/Fasteners_ISO14580.svg) **ISO 14580** Vite a testa cilindrica con cava esalobata.

- ![](/images/Fasteners_ISO14581.svg) **ISO 14581** Vite a testa svasata piana con cava esalobata.

- ![](/images/Fasteners_ISO14582.svg) **ISO 14582** Vite a testa svasata con cava esalobata, testa alta.

- ![](/images/Fasteners_ISO14583.svg) **ISO 14583** Vite a testa cilindrica con cava esalobata.

- ![](/images/Fasteners_ISO14584.svg) **ISO 14584** Vite a testa svasata rialzata con cava esalobata.

### Viti a testa con intaglio

- ![](/images/Fasteners_ASMEB18.6.1.2.svg) **ASME B18.6.1.2** Vite per legno a testa svasata piana con intaglio.

- ![](/images/Fasteners_ASMEB18.6.1.4.svg) **ASME B18.6.1.4** Vite per legno a testa svasata ovale con intaglio.

- ![](/images/Fasteners_ASMEB18.6.3.1A.svg) **ASME B18.6.3.1A** Vite UNC a testa piatta svasata con intaglio.

- ![](/images/Fasteners_ASMEB18.6.3.4A.svg) **ASME B18.6.3.4A** Vite UNC a testa svasata ovale con intaglio.

- ![](/images/Fasteners_ASMEB18.6.3.9A.svg) **ASME B18.6.3.9A** Vite UNC a testa cilindrica con intaglio.

- ![](/images/Fasteners_ASMEB18.6.3.10A.svg) **ASME B18.6.3.10A** Vite UNC a testa cilindrica con intaglio.

- ![](/images/Fasteners_ASMEB18.6.3.12A.svg) **ASME B18.6.3.12A** Viti UNC a testa tonda con intaglio.

- ![](/images/Fasteners_ASMEB18.6.3.16A.svg) **ASME B18.6.3.16A** Vite UNC a testa tonda con intaglio.

- ![](/images/Fasteners_ISO1207.svg) **DIN 84 (superseded by ISO 1207)** Vite a testa cilindrica con intaglio. _Prodotto di categoria A._

- ![](/images/Fasteners_DIN96.svg) **DIN 96** Vite per legno a testa semitonda con intaglio.

- ![](/images/Fasteners_DIN96.svg) **GOST 1144-1** Vite per legno a testa semitonda con intaglio.

- ![](/images/Fasteners_DIN96.svg) **GOST 1144-2** Vite per legno a testa a calotta con intaglio.

- ![](/images/Fasteners_ISO1207.svg) **ISO 1207** Vite a testa cilindrica con intaglio. _Prodotto di categoria A._

- ![](/images/Fasteners_ISO1580.svg) **ISO 1580** Vite a testa cilindrica con intaglio. _Prodotto di categoria A._

- ![](/images/Fasteners_ISO2009.svg) **ISO 2009** Vite a testa svasata piana con intaglio. _Prodotto di categoria A._

- ![](/images/Fasteners_ISO2010.svg) **ISO 2010** Vite a testa svasata bombata con intaglio. _Prodotto di categoria A._

### Viti con testa a croce

- ![](/images/Fasteners_ASMEB18.6.1.3.svg) **ASME B18.6.1.3** Vite per legno a testa svasata piana.

- ![](/images/Fasteners_ASMEB18.6.1.5.svg) **ASME B18.6.1.5** Vite per legno a testa svasata ovale.

- ![](/images/Fasteners_ASMEB18.6.3.1B.svg) **ASME B18.6.3.1B** Vite UNC a testa svasata piana.

- ![](/images/Fasteners_ASMEB18.6.3.4B.svg) **ASME B18.6.3.4B** Vite UNC a testa svasata ovale.

- ![](/images/Fasteners_ASMEB18.6.3.9B.svg) **ASME B18.6.3.9B** Vite UNC a testa cilindrica.

- ![](/images/Fasteners_ASMEB18.6.3.10B.svg) **ASME B18.6.3.10B** Vite UNC a testa cilindrica.

- ![](/images/Fasteners_ASMEB18.6.3.12C.svg) **ASME B18.6.3.12C** Vite UNC a testa tonda.

- ![](/images/Fasteners_ASMEB18.6.3.16B.svg) **ASME B18.6.3.16B** Vite UNC a testa tonda.

- ![](/images/Fasteners_DIN967.svg) **DIN 967** Vite a testa bombata flangiata con impronta a croce.

- ![](/images/Fasteners_DIN7996.svg) **DIN 7996** Viti per legno a testa tonda e impronta a croce.

- ![](/images/Fasteners_DIN7996.svg) **GOST 1144-3** Vite per legno a testa cilindrica.

- ![](/images/Fasteners_DIN7996.svg) **GOST 1144-4** Vite per legno a testa cilindrica.

- ![](/images/Fasteners_ISO7045.svg) **ISO 7045** Vite a testa cilindrica. _Prodotto di categoria A._

- ![](/images/Fasteners_ISO7046.svg) **ISO 7046** Vite a testa svasata piana. _Prodotto di categoria A._

- ![](/images/Fasteners_ISO7047.svg) **ISO 7047** Vite a testa svasata rialzata. _Prodotto di categoria A._

- ![](/images/Fasteners_ISO7048.svg) **ISO 7048** Viti a testa cilindrica con impronta croce

- ![](/images/Fasteners_DIN7996.svg) **ISO 7049-C** Viti autofilettanti a testa cilindrica con impronta a croce.

- ![](/images/Fasteners_ISO7049-F.svg) **ISO 7049-F** Viti autofilettanti a testa bombata con punta piatta.

- ![](/images/Fasteners_DIN7996.svg) **ISO 7049-R** Viti autofilettanti a testa bombata con punta arrotondata.

### Bulloni con altre teste

- ![](/images/Fasteners_ASMEB18.2.1.1.svg) **ASME B18.2.1.1** Bullone UNC a testa quadra.

- ![](/images/Fasteners_ASMEB18.5.2.svg) **ASME B18.5** Bullone UNC a testa tonda e colletto quadro.

- ![](/images/Fasteners_DIN478.svg) **DIN 478** Bullone a testa quadra con collare

- ![](/images/Fasteners_DIN603.svg) **DIN 603** Vite a testa tonda con quadro sotto testa.

- ![](/images/Fasteners_ISO2342.svg) **ISO 2342** Vite senza testa con intaglio parzialmente filettata.

### Grani

- ![](/images/Fasteners_ASMEB18.3.5A.svg) **ASME B18.3.5A** Grano UNC con cava esagonale ed estremità piatta.

- ![](/images/Fasteners_ASMEB18.3.5B.svg) **ASME B18.3.5B** Grano UNC con cava esagonale ed estremità conica.

- ![](/images/Fasteners_ASMEB18.3.5C.svg) **ASME B18.3.5C** Grano UNC con esagono incassato ed estremità cilindrica.

- ![](/images/Fasteners_ASMEB18.3.5D.svg) **ASME B18.3.5D** Grano UNC con cava esagonale ed estremità a coppa.

- ![](/images/Fasteners_ISO4026.svg) **ISO 4026** Vite senza testa con esagono incassato ed estremità piana smussata.

- ![](/images/Fasteners_ISO4027.svg) **ISO 4027** Vite senza testa con cava esagonale ed estremità conica.

- ![](/images/Fasteners_ISO4028.svg) **ISO 4028** Vite senza testa con cava esagonale ed estremità piana cilindrica.

- ![](/images/Fasteners_ISO4029.svg) **ISO 4029** Vite senza testa con cava esagonale ed estremità a coppa.

- ![](/images/Fasteners_ISO4026.svg) **ISO 4766** Vite senza testa con intaglio ed estremità piana.

- ![](/images/Fasteners_ISO4027.svg) **ISO 7434** Vite senza testa con intaglio ed estremità conica.

- ![](/images/Fasteners_ISO4028.svg) **ISO 7435** Vite senza testa con intaglio ed estremità cilindrica.

- ![](/images/Fasteners_ISO4029.svg) **ISO 7436** Vite senza testa con intaglio ed estremità a coppa.

### Viti a testa zigrinata

- ![](/images/Fasteners_DIN464.svg) **DIN 464** Viti a testa cilindrica zigrinata con colletto alto.

- ![](/images/Fasteners_DIN465.svg) **DIN 465** Viti a testa cilindrica zigrinata con colletto alto ad intaglio.

- ![](/images/Fasteners_DIN653.svg) **DIN 653** Viti a testa cilindrica bassa zigrinata.

### Viti per fondazioni

- ![](/images/Fasteners_GroundScrew.svg) **Vite per fondazioni** Vite per fondazioni a terra con testa piatta tonda.

### Dadi

- ![](/images/Fasteners_ASMEB18.2.2.1A.svg) **ASME B18.2.2.1A** Dado esagonale UNC.

- ![](/images/Fasteners_ASMEB18.2.2.1B.svg) **ASME B18.2.2.1B** Dado quadrato UNC per macchinari.

- ![](/images/Fasteners_ASMEB18.2.2.2.svg) **ASME 18.2.2.2** Dado quadrato UNC.

- ![](/images/Fasteners_ASMEB18.2.2.1A.svg) **ASME B18.2.2.4A** Dado esagonale UNC.

- ![](/images/Fasteners_ASMEB18.2.2.4B.svg) **ASME B18.2.2.4B** Dado esagonale sottile UNC.

- ![](/images/Fasteners_ASMEB18.2.2.5.svg) **ASME 18.2.2.5** Dado esagonale a corona UNC.

- ![](/images/Fasteners_ASMEB18.2.2.12.svg) **ASME 18.2.2.12** Dado esagonale UNC con flangia.

- ![](/images/Fasteners_ASMEB18.2.2.13.svg) **ASME 18.2.2.13** Dado distanziale esagonale UNC.

- ![](/images/Fasteners_ASMEB18.6.9A.svg) **ASME 18.6.9A** Dado ad alette, tipo A.

- ![](/images/Fasteners_DIN315.svg) **DIN 315** Dado ad alette.

- ![](/images/Fasteners_DIN557.svg) **DIN 557** Dado quadro.

- ![](/images/Fasteners_DIN562.svg) **DIN 562** Dado quadro sottile.

- ![](/images/Fasteners_DIN917.svg) **DIN 917** Dado esagonale cieco forma bassa.

- ![](/images/Fasteners_DIN928.svg) **DIN 928** Dado a saldare chiave quadra .

- ![](/images/Fasteners_DIN929.svg) **DIN 929** Dado a saldare.

- ![](/images/Fasteners_ISO4032.svg) **DIN 934 (sostituito da ISO 4035 e ISO 8673)** Dado esagonale sottile cianfrinato. _Prodotto di categoria A e B._

- ![](/images/Fasteners_DIN935.svg) **DIN 935** Dado esagonale a corona tipo alto.

- ![](/images/Fasteners_DIN985.svg) **DIN 985** Dado autobloccante basso con inserto in nylon.

- ![](/images/Fasteners_DIN1587.svg) **DIN 1587** Dado esagonale cieco con calotta sferica.

- ![](/images/Fasteners_DIN6330.svg) **DIN 6330** Dado esagonale alto con estremità sferica.

- ![](/images/Fasteners_DIN6331.svg) **DIN 6331** Dado esagonale alto flangiato con estremità sferica.

- ![](/images/Fasteners_DIN6334.svg) **DIN 6334** Dado esagonale di giunzione.

- ![](/images/Fasteners_DIN7967.svg) **DIN 7967** Controdado elastico di sicurezza.

- ![](/images/Fasteners_EN1661.svg) **EN 1661** Dado esagonale con flangia.

- ![](/images/Fasteners_DIN1587.svg) **GOST 11860-1** Dado cieco.

- ![](/images/Fasteners_ISO4032.svg) **ISO 4032** Dado esagonale, tipo 1. _Prodotto di categoria A e B._

- ![](/images/Fasteners_ISO4033.svg) **ISO 4033** Dado esagonale alto, tipo 2. _Prodotto di categoria A e B._

- ![](/images/Fasteners_ISO4034.svg) **ISO 4034** Dado esagonale, tipo 1.

- ![](/images/Fasteners_ISO4035.svg) **ISO 4035** Dado esagonale basso cianfrinato, tipo 0. _Prodotto di categoria A e B._

- ![](/images/Fasteners_EN1661.svg) **ISO 4161** Dado esagonale con flangia zigrinata.

- ![](/images/Fasteners_DIN985.svg) **ISO 7040** Dado autobloccante alto con inserto non metallico.

- ![](/images/Fasteners_DIN985.svg) **ISO 7041** Dado esagonale autobloccante (con inserto non metallico), tipo 2.

- ![](/images/Fasteners_ISO7043.svg) **ISO 7043** Dado esagonale autobloccante con flangia (con inserto non metallico).

- ![](/images/Fasteners_ISO7044.svg) **ISO 7044** Dado esagonale autobloccante interamente metallico con flangia.

- ![](/images/Fasteners_ISO7719.svg) **ISO 7719** Dado esagonale autobloccante interamente metallico.

- ![](/images/Fasteners_ISO7719.svg) **ISO 7720** Dado esagonale autobloccante interamente metallico, tipo 2.

- ![](/images/Fasteners_ISO8673.svg) **ISO 8673** Dado esagonale a passo fine, tipo 1. _Prodotto di categoria A e B._

- ![](/images/Fasteners_ISO8674.svg) **ISO 8674** Dado esagonale alto con filettatura metrica a passo fine, tipo 2. _Prodotto di categoria A e B._

- ![](/images/Fasteners_ISO8675.svg) **ISO 8675** Dado esagonale basso con filettatura metrica a passo fine tipo 0. _Prodotto di categoria A e B._

- ![](/images/Fasteners_DIN985.svg) **ISO 10511** Dado esagonale autofrenante basso (con inserto non metallico).

- ![](/images/Fasteners_DIN985.svg) **ISO 10512** Dado esagonale autofrenante normale (con inserto non metallico) con filettatura metrica a passo fine.

- ![](/images/Fasteners_ISO7719.svg) **ISO 10513** Dado esagonale alto autofrenante interamente metallico con filettatura metrica a passo fine.

- ![](/images/Fasteners_EN1661.svg) **ISO 10663** Dado esagonale con flangia e filettatura metrica a passo fine.

- ![](/images/Fasteners_ISO7043.svg) **ISO 12125** Dado esagonale autobloccante con flangia (con inserto non metallico), filettatura metrica passo fine.

- ![](/images/Fasteners_ISO7044.svg) **ISO 12126** Dado esagonale autobloccante, interamente metallico, con flangia, con filettatura metrica fine.

- ![](/images/Fasteners_ISO21670.svg) **ISO 21670** Dado esagonale flangiato da saldare.

- ![](/images/Fasteners_SAEJ483a1.svg) **SAE J483a 1** Dado a calotta bassa.

- ![](/images/Fasteners_SAEJ483a2.svg) **SAE J483a 2** Dado a calotta alta.

### Elementi di fissaggio per cave a T

- ![](/images/Fasteners_DIN508.svg) **DIN 508** Dado per cave a T.

- ![](/images/Fasteners_GN505.svg) **GN 505** Dado per cave a T a quarto di giro zigrinato.

- ![](/images/Fasteners_GN505.4.svg) **GN 505.4** Bullone per cave a T zigrinato.

- ![](/images/Fasteners_GN506.svg) **GN 506** Tassello per cave a T con gradino guida.

- ![](/images/Fasteners_GN507.svg) **GN 507** Tassello per cave a T.

- ![](/images/Fasteners_DIN508.svg) **ISO 299** Tassello per cave a T.

### Rondelle

- ![](/images/Fasteners_ASMEB18.21.1.12A.svg) **ASME B18.21.1.12A** Rondella UN, serie stretta.

- ![](/images/Fasteners_ASMEB18.21.1.12B.svg) **ASME B18.21.1.12B** Rondella UN, serie normale.

- ![](/images/Fasteners_ASMEB18.21.1.12C.svg) **ASME B18.21.1.12C** Rondella UN, serie larga.

- ![](/images/Fasteners_DIN6319C.svg) **DIN 6319C** Rondella sferica.

- ![](/images/Fasteners_DIN6319D.svg) **DIN 6319D** Rondella conica.

- ![](/images/Fasteners_DIN6319G.svg) **DIN 6319G** Rondella conica.

- ![](/images/Fasteners_DIN6340.svg) **DIN 6340** Rondella per dispositivi di bloccaggio.

- ![](/images/Fasteners_ISO7089.svg) **ISO 7089** Rondella piana, serie normale. _Prodotto di categoria A._

- ![](/images/Fasteners_ISO7090.svg) **ISO 7090** Rondelle piane smussate, serie normale. _Prodotto di categoria A._

- ![](/images/Fasteners_ISO7092.svg) **ISO 7092** Rondella piana, serie stretta. _Prodotto di categoria A._

- ![](/images/Fasteners_ISO7093-1.svg) **ISO 7093-1** Rondella piana, serie larga. _Prodotto di categoria A._

- ![](/images/Fasteners_ISO7094.svg) **ISO 7094** Rondella piana, serie extra larga. _Prodotto di categoria C._

- ![](/images/Fasteners_ISO8738.svg) **ISO 8738** Rondella piana per perni a cerniera.

- ![](/images/Fasteners_NFE27-619.svg) **NFE27-619** Rondella svasata.

### Barre, maschi e filiere

- ![](/images/Fasteners_ScrewTapInch.svg) Maschio per filettatura interna in pollici.

- ![](/images/Fasteners_ScrewDieInch.svg) Filiera per filettatura esterna in pollici.

- ![](/images/Fasteners_ThreadedRodInch.svg) Barra filettata UNC in pollici.

- ![](/images/Fasteners_ThreadedRod.svg) DIN 975 Barra filettata metrica.

- ![](/images/Fasteners_ScrewTap.svg) Maschio per filettatura interna metrica.

- ![](/images/Fasteners_ScrewDie.svg) Filiera per filettatura esterna metrica.

### Inserti

- ![](/images/Fasteners_IUTHeatInsert.svg) Inserto ribadito a caldo.

- ![](/images/Fasteners_PEMPressNut.svg) Dado autoagganciante.

- ![](/images/Fasteners_PEMStandoff.svg) Distanziale autoagganciante

- ![](/images/Fasteners_PEMStud.svg) Perno autoagganciante.

- ![](/images/Fasteners_PCBSpacer.svg) Distanziale PCB femmina/femmina.

- ![](/images/Fasteners_PCBStandoff.svg) Distanziale PCB femmina/maschio.

- ![](/images/Fasteners_4PWTI.svg) Inserto in legno filettato a 4 poli (dadi a T DIN 1624).

### Anelli di sicurezza

- ![](/images/Fasteners_DIN471.svg) **DIN 471** Anello elastico esterno.

- ![](/images/Fasteners_DIN472.svg) **DIN 472** Anello elastico interno.

- ![](/images/Fasteners_DIN6799.svg) **DIN 6799** Anello elastico radiale.

### Chiodi

- ![](/images/Fasteners_DIN1143.svg) **DIN 1143** Chiodo a testa tonda piatta per chiodatrici automatiche.

- ![](/images/Fasteners_DIN1144-A.svg) **DIN 1144-A** Chiodo per l'installazione di pannelli compositi in truciolare di legno, testa tonda da 20 mm.

- ![](/images/Fasteners_DIN1151-A.svg) **DIN 1151-A** Chiodo a filo tondo a testa liscia.

- ![](/images/Fasteners_DIN1151-B.svg) **DIN 1151-B** Chiodo a filo tondo a testa svasata.

- ![](/images/Fasteners_DIN1152.svg) **DIN 1152** Chiodo a filo tondo testa a gruppino.

- ![](/images/Fasteners_DIN1151-A.svg) **DIN 1160-A** Chiodo per legno o ardesia.

- ![](/images/Fasteners_DIN1151-A.svg) **DIN 1160-B** Chiodo a testa larga di grosso spessore per ardesia.

### Spine

- ![](/images/Fasteners_ISO1234.svg) **ISO 1234** Copiglia.

- ![](/images/Fasteners_ISO2338.svg) **ISO 2338** Spina cilindrica.

- ![](/images/Fasteners_ISO2339.svg) **ISO 2339** Spina conica.

- ![](/images/Fasteners_ISO2340A.svg) **ISO 2340A** Perno senza testa.

- ![](/images/Fasteners_ISO2340B.svg) **ISO 2340B** Perno senza testa (con fori per copiglie).

- ![](/images/Fasteners_ISO2341A.svg) **ISO 2341A** Perno con testa.

- ![](/images/Fasteners_ISO2341B.svg) **ISO 2341B** Perno con testa (con foro per copiglia).

- ![](/images/Fasteners_ISO8733.svg) **ISO 8733** Spina cilindrica con foro filettato, non temprata.

- ![](/images/Fasteners_ISO8734.svg) **ISO 8734** Spina di centraggio.

- ![](/images/Fasteners_ISO8735.svg) **ISO 8735** Spina cilindrica con filettatura interna, temprata.

- ![](/images/Fasteners_ISO8736.svg) **ISO 8736** Spina conica con foro filettato, non temprata.

- ![](/images/Fasteners_ISO8737.svg) **ISO 8737** Spina conica con gambo filettato, non temprata.

- ![](/images/Fasteners_ISO8739.svg) **ISO 8739** Spina cilindrica con intagli su tutta la lunghezza ed estremità d'invito.

- ![](/images/Fasteners_ISO8740.svg) **ISO 8740** Spina cianfrinata per tutta la lunghezza.

- ![](/images/Fasteners_ISO8741.svg) **ISO 8741** Spina con intagli conici a mezza lunghezza invertita.

- ![](/images/Fasteners_ISO8742.svg) **ISO 8742** Spina ad intagli centrali su un terzo della lunghezza.

- ![](/images/Fasteners_ISO8743.svg) **ISO 8743** Spina ad intagli centrali su metà lunghezza.

- ![](/images/Fasteners_ISO8744.svg) **ISO 8744** Spina ad intagli conici su tutta la lunghezza.

- ![](/images/Fasteners_ISO8745.svg) **ISO 8745** Spina ad intagli conici su metà lunghezza con diametro di forzamento ad una estremità.

- ![](/images/Fasteners_ISO8746.svg) **ISO 8746** Spina intagliata a testa tonda.

- ![](/images/Fasteners_ISO8747.svg) **ISO 8747** Spina ad intagli con testa svasata.

- ![](/images/Fasteners_ISO8748.svg) **ISO 8748** Spina elastica a spirale - Serie pesante.

- ![](/images/Fasteners_ISO8750.svg) **ISO 8750** Spina elastica a spirale - Serie media.

- ![](/images/Fasteners_ISO8751.svg) **ISO 8751** Spina elastica a spirale - Serie leggera.

- ![](/images/Fasteners_ISO8752.svg) **ISO 8752** Spina elastica con fenditura - Serie pesante.

- ![](/images/Fasteners_ISO13337.svg) **ISO 13337** Spina elastica con fenditura serie leggera.

## Obsoleti

- ![](/images/Fasteners_ChamferHole.svg) [Smusso per foro](/Fasteners_ChamferHole/it "Fasteners ChamferHole/it"): Fori smussati per viti a testa svasata. Non disponibile dalla versione 0.5.13 e superiori.

## Riferimenti

- Autore: [shaise](http://theseger.com/projects/author/shaise/)
  - Creatore di viti: Ulrich Brammer
  - Wrapper per l'ambiente: Shai Seger
- Source code: <https://github.com/shaise/FreeCAD_FastenersWB>
- Segnalazioni di bug e richieste di funzionalità: <https://github.com/shaise/FreeCAD_FastenersWB/issues>
- Topic nel Forum: <https://forum.freecadweb.org/viewtopic.php?t=11429>

## Collegamenti

- [BOLTS](https://github.com/jreinhardt/BOLTS): Una libreria open per le specifiche tecniche.

Retrieved from "<http://wiki.freecad.org/index.php?title=Fasteners_Workbench/it&oldid=1567994>"
