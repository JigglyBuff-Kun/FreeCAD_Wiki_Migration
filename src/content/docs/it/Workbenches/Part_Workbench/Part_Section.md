---
title: Part Seziona
---
|  |
| --- |
| Part Seziona |
| Posizione nel menu |
| Parte → Seziona |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Part Sezioni](/Part_CrossSections/it "Part CrossSections/it") |
|  |

## Descrizione

Il comando ![](/images/f/f7/Part_Section.svg) **Part Seziona** restituisce la geometria delle linee di intersezione di due oggetti. Il risultato è completamente parametrico.

* Un'intersezione di due solidi/facce dà come risultato una o più linee di sezione.
* Un'intersezione di due linee, o di una linea e di un solido/faccia, dà come risultato uno o più punti.

![](/images/PartSection1_it.png)

Un cubo sezionato con un cilindro

## Utilizzo

1. Selezionare due oggetti.
2. Il primo oggetto sarà il Dati**Base** della Sezione, ma l'ordine di selezione non ha alcun impatto sul risultato.
3. Esistono diversi modi per richiamare il comando:
   * Premere il pulsante ![](/images/f/f7/Part_Section.svg) Seziona.
   * Selezionare l'opzione **Parte → ![](/images/f/f7/Part_Section.svg) Seziona** dal menu.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Part Seziona deriva da un oggetto [Part Feature](/Part_Feature/it "Part Feature/it") e ne eredita tutte le proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

Base

* Dati**Base** (`Link`): collegamento al primo oggetto.
* Dati**Tool** (`Link`): collegamento al secondo oggetto.

Boolean

* Dati (hidden)**History** (`ShapeHistory`): "Cronologia delle forme".
* Dati**Refine** (`Bool`): "Perfeziona la forma (ripulisci i bordi ridondanti) dopo questa operazione booleana". Il valore predefinito è determinato dalla preferenza **Perfeziona automaticamente il modello dopo l'operazione basata su schizzo**. Vedere [Preferenze PartDesign](/PartDesign_Preferences/it#Generale "PartDesign Preferences/it").

Section

* Dati**Approximation** (`Bool`): approssima i bordi di output.

## Link

Per creare sezioni con un piano di sezione vedere ![](/images/Part_CrossSections.svg) [Sezioni](/Part_CrossSections/it "Part CrossSections/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Section/it&oldid=1359489>"