---
title: Console Python
---
## Introduzione

La console Python è un pannello che fa parte dell'[interfaccia utente](/Interface/it "Interface/it") di FreeCAD . Esegue un'istanza dell'interprete [Python](/Python/it "Python/it") che può essere utilizzato per controllare i processi di FreeCAD e creare e modificare gli oggetti e le loro proprietà.

Può essere resa visibile/nascosta tramite il menu a tendina **Visualizza → Panelli → Console Python**.

La console Python di FreeCAD ha l'evidenziazione di base della sintassi, in grado di differenziare con vari stili e colori, commenti, stringhe, valori numerici, funzioni integrate, output di testo stampato e delimitatori come parentesi e virgole. Queste proprietà della console possono essere configurate nell'[editor delle Preferenze](/Preferences_Editor/it "Preferences Editor/it").

![](/images/FreeCAD_Python_console.png)

Console Python che mostra i messaggi quando FreeCAD è appena stato avviato.

## Script

*Per i principianti assoluti, vedere:* [Introduzione a Python](/Introduction_to_Python/it "Introduction to Python/it"), e [Tutorial di script Python](/Python_scripting_tutorial/it "Python scripting tutorial/it").

*Vedere anche:* [Script di base in FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it"), e [Oggetti script](/Scripted_objects/it "Scripted objects/it").

La console Python può eseguire il completamento del codice di base quando viene scritto un punto dopo un oggetto; mostra metodi e gli attributi pubblici (variabili) dell'oggetto corrente (classe), ad esempio `obj.`

La console è anche in grado di mostrare la stringa di documentazione di una particolare funzione quando viene scritta la parentesi iniziale, ad esempio `function(`

![](/images/FreeCAD_Python_console_example.png)

Esempio di codice Python che produce degli oggetti nella vista 3D.

Gli script di inizializzazione di FreeCAD caricano automaticamente alcuni moduli e definiscono alcuni alias. Pertanto, nella console Python sono disponibili

```
App = FreeCAD
Gui = FreeCADGui

```

che sono quindi uguali a

```
App.newDocument()
FreeCAD.newDocument()

```

*Nota:* questi moduli e alias precaricati sono disponibili solo dalla console Python incorporata nel programma FreeCAD. Se si usa FreeCAD come libreria in un programma esterno, bisogna ricordarsi di caricare i moduli `FreeCAD` e `FreeCADGui` e, se lo si desidera, definire gli alias necessari.

## Azioni

Un clic con il tasto destro sulla console Python mostra alcuni comandi:

* **Copia**: memorizza il testo selezionato negli appunti per un successivo incollaggio; è disabilitato se non è selezionato nulla.
* **Copia il comando**: memorizza il comando selezionato negli appunti per un successivo incollaggio; è disabilitato se non è selezionato nulla.
* **Copia la cronologia**: copia l'intera cronologia dei comandi Python immessi in questa sessione.
* **Salva la cronologia come**: salva l'intera cronologia dei comandi Python immessi in questa sessione in un file di testo.
* **Incolla**: incolla il testo precedentemente copiato negli appunti nella console di Python.
* **Seleziona tutto**: seleziona tutto il testo nella console di Python.
* **Pulisci la console**: cancella tutti i comandi immessi nella console Python. Ciò è utile se la console Python è piena di messaggi e comandi precedentemente immessi che potrebbero distrarre durante il test di una nuova funzione. Questo è puramente estetico, poiché questo comando non cancella le variabili esistenti né cancella i moduli importati nella sessione.
* **Inserisci il nome del file**: apre una finestra di dialogo per cercare un file nel sistema, quindi inserisce il percorso completo del file. Ciò è utile per testare le funzioni che elaborano un file di input, senza dover scrivere l'intero nome nella console, che è soggetto a errori. Questo comando non esegue il file e non lo importa come modulo Python, restituisce semplicemente il percorso completo di quel file.
* **A capo automatico**: avvolge le linee molto lunghe che superano la dimensione orizzontale della console Python.

## Note

* Si ha la possibilità di scorrere l'API nella console Python. Esempio:
  1. Nella console digita: `FreeCAD.`
  2. Verrà visualizzata una finestra di dialogo con classi/funzioni opzionali tra cui scegliere
  3. Scorri l'elenco per leggere la descrizione di ogni classe/funzione
  4. Scegliendo una funzione e facendola seguire da un `.` è possibile ripetere i passaggi 2 e 3 per approfondire l'API
* Il completamento di etichette/parole è supportato utilizzando la scorciatoia Ctrl+Space

Retrieved from "<http://wiki.freecad.org/index.php?title=Python_console/it&oldid=1461235>"