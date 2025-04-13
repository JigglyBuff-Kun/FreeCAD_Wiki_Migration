---
title: Importa un link
---
|  |
| --- |
| Importa un link |
| Posizione nel menu |
| Nessuna |
| Ambiente |
| Tutti |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.19 |
| Vedere anche |
| [Crea un link](/Std_LinkMake/it "Std LinkMake/it"), [Crea un link relativo](/Std_LinkMakeRelative/it "Std LinkMakeRelative/it"), [Importa tutti i link](/Std_LinkImportAll/it "Std LinkImportAll/it") |
|  |

## Descrizione

Lo strumento ![](/images/Std_LinkImport.svg) Importa link importa un Dati**Linked Object** da un collegamento nel documento corrente, quindi modifica l'associazione in questo oggetto.

Questa operazione è utile quando si lavora con gli [assemblaggi](/Assembly/it "Assembly/it") al fine di organizzare i modelli riutilizzabili che possono trovarsi in altri documenti.

Usare ![](/images/Std_LinkImportAll.svg) Importa tutti i link per importare tutti gli oggetti collegati.

## Utilizzo

1. Assicurarsi di avere un documento "sorgente" con un oggetto originale, ad esempio, una ![](/images/Std_Part.svg) [Parte](/Std_Part/it "Std Part/it") e un secondo documento "destinazione" con un collegamento a quell'oggetto.
2. Aprire il documento di destinazione e selezionare il collegamento all'oggetto; la sua Dati**Linked Object** dovrebbe mostrare qualcosa di simile a `source#Part`.
3. Premere ![](/images/Std_LinkImport.svg) Importa link.

Una copia della ![](/images/Std_Part.svg) Parte originale deve ora essere all'interno del documento "destinazione" corrente. La proprietà Dati**Linked Object** del collegamento deve ora mostrare `Part`, indicando che il collegamento non punta più a `Part` nel "sorgente", ma a `Part` nel documento corrente ("destinazione").

![](/images/Std_Link_tree_import_1_example.png) ![](/images/Std_Link_tree_import_2_example.png)

A sinistra: un collegamento punta all'oggetto nel documento "sorgente". A destra: l'oggetto originale è stato importato (copiato) nel documento "destinazione" e il collegamento esistente è stato modificato per puntare a questa copia, quindi non punta più all'oggetto del "sorgente".

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkImport/it&oldid=1186480>"