---
title: Path Personalizza
---
|  |
| --- |
| Personalizza |
| Posizione nel menu |
| Path → Comandi parziali → Personalizza |
| Ambiente |
| [Path](/Path_Workbench/it "Path Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Questo strumento inserisce un oggetto tracciato che è costituito da codice G personalizzato e codificato a mano.

Poiché il comando personalizzato del codice G non fornisce alcun collegamento a un controller degli strumenti, se uno strumento viene utilizzato dal codice G personalizzato, è necessario scrivere l'indice dello strumento, nonché il codice M di avvio, in modo che sia trasmesso al post-processore. Ciò garantisce che le modifiche allo strumento e all'avvio siano generate correttamente.

Ad esempio, per passare al postprocessore che l'utensile utilizzato nell'operazione di codice G personalizzato ha indice 6 e una velocità del mandrino è di 10.000, inserire il seguente codice all'inizio dell'operazione di codice G personalizzato:

(T6: 4mm Endmill)

M6 T6

M3 S10000

Notare che le velocità di avanzamento sono generate correttamente dal postprocessore, solo se le velocità di avanzamento del codice G personalizzato sono scritte in unità al secondo.

## Utilizzo

1. Premere il pulsante ![](/images/Path_Custom.png) [Personalizza](/Path_Custom/it "Path Custom/it")
2. Scrivere il Codice G personalizzato nella proprietà **G Code** dell'oggetto appena creato. Consultare la pagina [Script di Path](/Path_scripting/it "Path scripting/it") per conoscere i comandi G-Code supportati.

## Proprietà

* Dati**G Code**: I comandi G-Code personali per costruire il percorso

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Custom/it&oldid=1386257>"