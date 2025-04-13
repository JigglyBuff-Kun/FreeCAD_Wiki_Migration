---
title: Part Controlla la geometria
---
|  |
| --- |
| Part Controlla geometria‏‎ |
| Posizione nel menu |
| Parte → Controlla la geometria |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Lo strumento ![](/images/Part_CheckGeometry.svg) Controlla la geometria esegue una verifica e segnala se la geometria è un solido valido. Lo strumento controlla se la [Rappresentazione della delimitazione](https://en.wikipedia.org/wiki/Boundary_representation) (BRep o [B-rep](/Glossary/it#B "Glossary/it")) del modello è valida.

## Utilizzo

1. Selezionare una parte (attenzione a selezionare l'intera parte e non solo una faccia per verificare la validità del solido)
2. Richiamare lo strumento in uno dei seguenti modi:
   * Facendo clic sul pulsante ![](/images/Part_CheckGeometry.svg) Controlla la geometria disponibile nella barra degli strumenti dell'ambiente Part.
   * Utilizzando la voce **Parte → ![](/images/Part_CheckGeometry.svg) Controlla la geometria** dal menu in alto.
3. Si apre il pannello delle attività **Impostazioni**, a meno che non sia abilitato **Salta pagina impostazioni**. Vedi [Opzioni](#Opzioni) per ulteriori informazioni. Fai clic su Esegui controllo.

I risultati verranno riportati nel [Pannello delle azioni](/Task_panel/it "Task panel/it"). Se il controllo ha prodotto errori: fare clic nel report su uno specifico messaggio di errore e l'oggetto geometrico corrispondente (bordo, faccia, ecc.) verrà evidenziato nella [Vista 3D](/3D_view/it "3D view/it").

## Opzioni

### Salta la pagina delle impostazioni

Se selezionato, le successive invocazioni dello strumento salteranno la visualizzazione del pannello delle attività **Impostazioni**.

### Esegui controllo BOP

Se selezionato, viene eseguito inoltre un controllo delle operazioni booleane (BOP).

### Registro degli errori

Se selezionato, eventuali errori rilevati verranno registrati anche nella [finestra dei report](/Report_view/it "Report view/it")

## Contenuto della forma

Oltre a rilevare potenziali errori geometrici, questo strumento mostra una serie di proprietà relative all'oggetto selezionato:

* Oggetto controllato
* Tipo di forma
* Numero di entità geometriche: vertici, bordi, fili, facce, gusci, solidi, compsolidi, composti, forme totali
* Proprietà geometriche e di massa:
  + Area
  + Volume
  + Massa
  + Lunghezza
  + Centro di Massa
  + Orientamento
  + Asse di simmetria
  + Punto di simmetria
  + Momenti
  + Primo asse d'inerzia
  + Secondo asse d'inerzia
  + Terzo asse d'inerzia
  + Raggio d'inerzia
  + Posizionamento globale

## Note

* Utilizzando questo strumento è possibile controllare anche gli oggetti [App Link](/App_Link/it "App Link/it") collegati ai tipi di oggetto appropriati e i contenitori [App Part](/App_Part/it "App Part/it") con gli oggetti visibili appropriati all'interno. Per [Link app](/App_Link/it "App Link/it") viene controllata la forma dell'oggetto collegato. Per i contenitori [App Part](/App_Part/it "App Part/it") gli oggetti visibili all'interno vengono controllati come composti. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")
* FreeCAD non dispone di metodi per riparare automaticamente la geometria. Se vengono rilevati errori, i passaggi necessari per creare il modello devono essere esaminati e corretti manualmente.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_CheckGeometry/it&oldid=1468252>"