---
title: PartDesign ProceduraGuidataAlberi
---
|  |
| --- |
| PartDesign Procedura guidata per alberi |
| Posizione nel menu |
| PartDesign → Assistente Formazione Albero... |
| Ambiente |
| [DisegnoPezzo](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Description

## Descrizione

Questo strumento permette di creare un albero da una tabella di valori, e di analizzare forze e momenti. Si può avviare la procedura guidata dal menu Part Design **Part Design → ![](/images/PartDesign_WizardShaft.svg) Procedura guidata per alberi...**.

## Usage

You can start the wizard from the Part Design menu **Part Design → ![](/images/PartDesign_WizardShaft.svg) Shaft design wizard...**.

L'assistente si avvierà e mostrerà una tabella predefinita, la parte d'albero corrispondente e i grafici forza/momento.

![](/images/WizardShaft_Part.jpg)

La parte superiore della finestra è occupata dalla tabella. È organizzata in colonne numerate che corrispondono ai segmenti dell'albero. Un segmento d'albero è caratterizzato da una certa lunghezza e diametro. La finestra principale mostra due schede. Una è la parte dell'albero stesso (una caratteristica di rivoluzione), mostrata nell'immagine sopra. La seconda scheda mostra i grafici delle forze di taglio e dei momenti creati dai carichi definiti nella tabella.

![](/images/Shaftwizard1.jpg)

## Prerequisites

## Prerequisiti

L'assistente di creazione dell'albero dipende dalla [matplotlib](http://matplotlib.org/) libreria per creare e visualizzare i grafici della forza di taglio e del momento di flessione. Per i sistemi basati su Debian/Ubuntu, è disponibile tramite il pacchetto python-matplotlib.

## Parameters

## Parametri

Per ogni segmento dell'albero, possono essere definiti i seguenti parametri:

* La lunghezza del segmento.
* Il diametro del segmento.
* Il tipo di carico. (Notare che dopo il suo scorrimento, è necessario fare clic nel menu sulla voce desiderata, altrimenti non viene selezionata).
  + None : Nessun carico.
  + Fixed : L'albero è fissato ad una estremità (ad esempio saldato a un'altra parte). Questo tipo di carico può essere definito per il primo o l'ultimo segmento.
  + Static : C'è un carico statico sul segmento dell'albero.
* Il carico sul segmento dell'albero.
* La posizione in cui è applicato il carico al segmento. La posizione viene calcolata dal bordo sinistro del segmento.

(La funzionalità per altre linee e tipi di carico non è stata ancora implementata)

## Menus

## Menu

Per aggiungere un nuovo segmento all'albero, fare clic con il tasto destro nello spazio vuoto a destra della tabella, quindi fare clic su **Aggiungi colonna**.

## Limitations

## Limitazioni

* Non è possibile avere segmenti d'albero adiacenti con lo stesso diametro.

## Planned functionality

## Funzionalità pianificate

* Tabella guidati smussi e arrotondamenti sui le bordi dell'albero
* Riconoscono una parte creato prima con assistente albero e inizializzare dei valori della tabella da essa
* Calcolazione sollecitazioni sull'albero
* Visualizzazione dei carichi sull'albero (può usare la stessa funzionalità del modulo FEM)
* Definizione dei carichi come un oggetto documento (può usare la stessa funzionalità del modulo FEM)
* Database dei materiali
* Permettere carichi in direzione Z e in direzione Y (richiede la definizione dei carichi come un oggetto documento, altrimenti la tabella diventerà molto lunga)

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_WizardShaft/it&oldid=1461405>"