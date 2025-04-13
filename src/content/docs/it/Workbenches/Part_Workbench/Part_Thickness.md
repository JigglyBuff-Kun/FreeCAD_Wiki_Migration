---
title: Part Spessore
---
|  |
| --- |
| Part Spessore |
| Posizione nel menu |
| Parte → Spessore... |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Part Offset](/Part_Offset/it "Part Offset/it") |
|  |

## Descrizione

Lo strumento ![](/images/Part_Thickness.svg) Spessore lavora su una forma solida e la trasforma in un oggetto cavo, conferendo a ciascuna delle sue facce uno spessore definito e costante. Su alcuni solidi permette di velocizzare notevolmente il lavoro, ed evita di realizzare estrusioni e tasche.

## Utilizzo

1. Creare un solido
2. Selezionare una o più facce
3. Cliccare sullo strumento ![](/images/Part_Thickness.svg) **Spessore...**
4. Impostare i parametri (vedere [Opzioni](#Opzioni))
5. Cliccare su OK per confermare, creare l'operazione e uscire dal comando
6. Se è necessario, regolare i parametri nella tabella delle Proprietà.

## Opzioni

* **Spessore**: Spessore della parete dell'oggetto risultante, impostare il valore desiderato.
  + Un valore positivo sfalserà le facce verso l'esterno
  + Un valore negativo sfalserà le facce verso l'interno
* **Modalità**
  + **Skin**: seleziona questa opzione se si vuole ottenere un oggetto come un vaso, senza testa ma con il fondo.
  + **Tubo**: seleziona questa opzione se si vuole ottenere un oggetto come un tubo, senza testa e senza fondo. In questo caso può essere conveniente selezionare le facce da eliminare prima di avviare lo strumento. Aiutarsi con i pulsanti delle visualizzazioni predefinite o utilizzare i tasti numerici.
  + **Fronte Retro**:
* **Tipo di giuntura**
  + **Arco**: rimuove i bordi esterni e crea un raccordo con un raggio pari allo spessore definito.
  + **Tangente**:
  + **Intersezione**:
* **Intersezione**:
* **Autointersezione**: abilita l'autointersezione.
* Facce: selezionare le facce da rimuovere, quindi fare clic su Fine.
* **Aggiorna la vista**: aggiorna automaticamente la vista in tempo reale.

## Note

* Gli oggetti [App Link](/App_Link/it "App Link/it") collegati ai tipi di oggetto appropriati possono essere utilizzati anche come oggetti di origine. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")
* Le forme complesse possono produrre risultati bizzarri e difficili da prevedere. Ispezionare attentamente la forma risultante e salvare il proprio lavoro prima di applicare l'operazione.

## Link

Un buon esempio su come utilizzare questo strumento nel forum: [Re: Help designing a simple enclosure](http://forum.freecadweb.org/viewtopic.php?f=3&t=3766&p=29741&hilit=enclosure#p29547)

## Esempi

**Cilindro cavo**

1. Creare un ![](/images/Part_Cylinder.svg) [Cilindro](/Part_Cylinder/it "Part Cylinder/it") con raggio 10mm e altezza 20mm
2. Selezionare la superficie superiore e inferiore del cilindro
3. Fare clic sul pulsante ![](/images/Part_Thickness.svg) Spessore (non è necessario modificare le impostazioni predefinite) e premere OK

Nota:

* Per questa forma, considerare l'utilizzo di ![](/images/Part_Tube.svg) [Tubo](/Part_Tube/it "Part Tube/it").
* Selezionare solo la superficie superiore del cilindro per creare un recipiente.

![](/images/ThicknessEsempio1.png)

![](/images/ThicknessEsempio2.png)

**Scatola-Involucro**

![](/images/ThicknessEsempio3.png)

![](/images/ThicknessEsempio4.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Thickness/it&oldid=1361391>"