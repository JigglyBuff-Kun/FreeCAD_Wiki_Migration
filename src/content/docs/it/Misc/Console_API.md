---
title: API della Console
---
:::caution
(Ottobre 2019) Non modificare queste pagine. Le informazioni sono incomplete e obsolete. Per l'API più recente, consultare ladocumentazione API autogeneratao generare la documentazione autonomamente. VedereDocumentazione del codice sorgente.
:::

Questo modulo è contenuto all'interno del modulo di FreeCAD e contiene i metodi per inviare messaggi di testo per l'output della console di FreeCAD e della barra di stato. I messaggi hanno colore diverso secondo se sono messaggio di avviso o di errore.

Esempio:

```
import FreeCAD
FreeCAD.Console.PrintMessage("Hello World!\n")

```

![](/images/Method.png) **GetStatus** ( *"Log" o "Msg" o "Wrn" o "Err"* )

**Descrizione**: Ottiene lo stato di Log, Msg, Wrn o Error per un osservatore

**Restituisce**: una stringa di stato.

![](/images/Method.png) **PrintError** ( *string* )

**Descrizione**: Stampa un messaggio di errore nell'output

**Restituisce**: nulla

![](/images/Method.png) **PrintLog** ( *string* )

**Descrizione**: Stampa un messaggio di log nell'output

**Restituisce**: nulla

![](/images/Method.png) **PrintMessage** ( *string* )

**Descrizione**: Stampa un messaggio nell'output

**Restituisce**: nulla

![](/images/Method.png) **PrintWarning** ( *string* )

**Descrizione**: Stampa un messaggio di avviso nell'output

**Restituisce**: nulla

![](/images/Method.png) **SetStatus** ( *string* )

**Descrizione**: Imposta lo stato di Log, Msg, Wrn o Error per un osservatore

**Restituisce**:

Retrieved from "<http://wiki.freecad.org/index.php?title=Console_API/it&oldid=632416>"