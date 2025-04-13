---
title: Nome dell'oggetto
---
## Introduzione

Tutti gli oggetti nel programma hanno un nome che li identifica in modo univoco in un dato documento.

Queste informazioni si applicano a tutti gli oggetti derivati da un oggetto [App DocumentObject](/App_DocumentObject/it "App DocumentObject/it") (classe `App::DocumentObject`), che essenzialmente comprende tutti gli oggetti che è possibile creare in un documento.

## Nomi

Esistono varie proprietà per i nomi:

* `Name` può includere solo semplici caratteri alfanumerici e il carattere di sottolineatura, `[_0-9a-zA-Z]`.
* Il `Name` non può iniziare con un numero; deve iniziare con una lettera o un carattere di sottolineatura, `[_a-zA-Z]`.
* Il `Name` viene assegnato al momento della creazione dell'oggetto; successivamente non è più modificabile. L'oggetto non può mai essere rinominato.
* Il `Name` deve essere univoco nell'intero documento. Non importa se due oggetti sono di tipo completamente diverso, ad esempio uno è un [PartDesign Tasca](/PartDesign_Pocket/it "PartDesign Pocket/it") e l'altro è un [Arch Muro](/Arch_Wall/it "Arch Wall/it"). Devono avere nomi diversi.
* Quando si crea un oggetto dello stesso tipo, normalmente il nome viene incrementato con un numero sequenziale, quindi `Box`, `Box001`, `Box002`, ecc. Ciò impedisce il conflitto di denominazione.
* Una volta eliminato l'oggetto, il suo `Name` diventa disponibile per essere utilizzato da un oggetto appena creato. Ciò significa che se esistono `Box`, `Box001` e `Box002` e si elimina il primo elemento, verrà creato il box successivo con [Part Box](/Part_Box/it "Part Box/it") non sarà `Box003`, sarà di nuovo `Box`, perché questa stringa è disponibile per essere utilizzata di nuovo. Tenere presente che non è possibile rinominare `Box001` o `Box002` in `Box` poiché i loro nomi sono fissi.

In sintesi, `Name` agisce essenzialmente come un identificatore univoco (UID) per un oggetto. Poiché un `Name` univoco è molto restrittivo, tutti gli oggetti hanno anche una proprietà `Label` che consente di "rinominare" l'oggetto in qualcosa di più descrittivo. L'`Name` interno in realtà rimane fisso, ma l'`Label` modificabile dall'utente può essere utilizzato nella maggior parte delle situazioni in cui verrebbe utilizzato l'`Name`. Nell'uso comune nel programma e nella documentazione, "rinominare" significa cambiare l'`Label` e non l'effettivo `Name` dell'oggetto.

## Etichette

Esistono varie proprietà per le etichette:

* `Label` può accettare qualsiasi stringa UTF8, inclusi accenti e spazi.
* La [vista ad albero](/Tree_view/it "Tree view/it") mostra effettivamente l'`Label` dell'oggetto, non l'`Name`. Pertanto, ogni volta che viene creato un nuovo oggetto, è buona norma modificare `Label` in una stringa più descrittiva. Per rinominare (rietichettare) l'oggetto, selezionalo nella vista ad albero e premere F2 (o meglio Invio su macOS), oppure aprire il menu contestuale (tasto destro) e scegliere { {MenuComando|Rinomina}}.
* Anche dopo che un oggetto è stato rinominato (rietichettato), il `Name` interno verrà comunque riportato in molti posti, ad esempio, nella [barra di stato](/Status_bar/it "Status bar/it") o nella [vista di selezione](/Selection_view/it "Selection view/it") , quando l'oggetto è selezionato.
* Poiché le funzioni interne del programma fanno riferimento agli oggetti tramite `Name`, molte finestre di dialogo visualizzeranno prima `Name`, seguito dall'`Label` modificabile dall'utente tra parentesi, ad esempio, `Box (Pezzo estruso)`.
* Per impostazione predefinita, l'`Label` è univoco, proprio come l'`Name`. Tuttavia, questo comportamento può essere modificato nell'[Editor delle preferenze](/Preferences_Editor/it "Preferences Editor/it"), **Modifica → Preferenze → Generale → Documento → Consenti etichette oggetto duplicate in un documento**. Ciò significa che in generale l'`Label` non è univoco nel documento e può effettivamente essere ripetuto. Tuttavia, la raccomandazione è di mantenere l'`Label` univoco, poiché questo è probabilmente ciò che è più utile per identificare oggetti diversi. Quando si scrivono funzioni personalizzate che manipolano oggetti, i metodi dovrebbero utilizzare l'`Name` dell'oggetto anziché la sua `Label` per garantire che venga utilizzato l'oggetto corretto.
* Quando si utilizzano [Espressioni](/Expressions/it "Expressions/it"), ad esempio, nell'[Editor delle proprietà](/Property_editor/it "Property editor/it") o in un [foglio di calcolo](/Spreadsheet/it "Spreadsheet/it"), è possibile fare riferimento all'etichetta utilizzando parentesi doppie composte dai simboli minore e maggiore.

```
<<Custom Label With Spaces>>.Height
<<Label may use UTF8 characters>>.Width

```

### Label2

È una stringa semplice che può contenere testo arbitrario e quindi può essere utilizzata per documentare (descrivere con maggiore dettaglio) l'oggetto creato.

* Nella [vista ad albero](/Tree_view/it "Tree view/it") modificare il campo accanto all'icona, sotto "Descrizione", cliccandoci sopra e premendo F2 (o meglio Invio su macOS) .
* E' possibile anche cambiare questa proprietà modificando l'attributo `Label2` dalla [Console Python](/Python_console/it "Python console/it").
* L'attributo Dati**Label2** è normalmente nascosto nell'[editor delle proprietà](/Property_editor/it "Property editor/it") ma può essere reso visibile aprendo il menu contestuale (clic destro) e selezionando **Mostra nascoste**.

## Script

*Vedere anche:* [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it"), e [script di oggetti](/Scripted_objects/it "Scripted objects/it").

Qualsiasi oggetto nel software viene creato internamente con il metodo `addObject()` del documento. La maggior parte degli oggetti 2D e 3D che l'utente vedrà nella [Vista 3D](/3D_view/it "3D view/it") derivano da una [Part Feature](/Part_Feature/it "Part Feature/it"). Nell'esempio seguente, l'oggetto creato è un [Part Cubo](/Part_Box/it "Part Box/it").

```
import FreeCAD as App

doc = App.newDocument()
obj = doc.addObject("Part::Box", "Name")
obj.Label = "Custom label"

```

### Nome

La funzione `addObject` ha di base due argomenti stringa.

* Il primo argomento indica il tipo di oggetto, in questo caso, `"Part::Box"`.
* Il secondo argomento è una stringa che definisce l'attributo `Name`. Se non viene fornito, il valore predefinito è lo stesso nome della classe dell'oggetto, ovvero `"Part__Box"`, dove i due simboli non validi, i due punti `::`, sono sostituito da due trattini bassi `__`.
  + `Name` può includere solo semplici caratteri alfanumerici e il carattere di sottolineatura, `[_0-9a-zA-Z]`. Se vengono forniti altri simboli, questi verranno convertiti in trattini bassi; ad esempio, `"A+B:C*"` viene convertito in `"A_B_C_"`.
  + Il `Name` non può iniziare con un numero; deve iniziare con una lettera o un carattere di sottolineatura, `[_a-zA-Z]`. Ad esempio, `"123ABC"` viene convertito in `"_23ABC"`.
  + Il `Name` è fisso al momento della creazione; non può essere modificato successivamente.
  + Il `Nome` deve essere univoco nell'intero documento. Se viene utilizzato lo stesso `"Name"`, verrà aggiunto automaticamente un numero sequenziale in modo che i nomi risultanti siano univoci; ad esempio, se `"Name"` esiste già, i nuovi oggetti verranno chiamati `"Name001"`, `"Name002"`, {{incode|"Name003"} }, ecc.

### Etichetta

L'`Label` è una proprietà dell'oggetto creato e può essere modificata in un testo più significativo.

* Al momento della creazione dell'oggetto, l'`Label` è uguale all'`Name`.
* Tuttavia, a differenza di `Name`, `Label` può accettare qualsiasi stringa UTF8, inclusi accenti e spazi.
* L'`Label` può essere modificato in qualsiasi momento semplicemente assegnando la stringa desiderata, `obj.Label = "Nuova etichetta"`

### Ottenere un oggetto per Name o Label

Tutti gli oggetti in un documento sono attributi di dati dell'oggetto [Document](/App_DocumentObject/it "App DocumentObject/it") corrispondente. Il nome dell'attributo corrisponde al `Name` interno dell'oggetto.

```
import FreeCAD as App

obj1 = App.ActiveDocument.Box
obj2 = App.ActiveDocument.Box001
obj3 = App.ActiveDocument.Box002

```

Ciò equivale a utilizzare il metodo `getObject` del Document.

```
import FreeCAD as App

obj1 = App.ActiveDocument.getObject('Box')
obj2 = App.ActiveDocument.getObject('Box001')
obj3 = App.ActiveDocument.getObject('Box002')

```

Tuttavia, è anche possibile ottenere l'oggetto tramite il più descrittivo `Label`.

```
import FreeCAD as App

obj1 = App.ActiveDocument.getObjectsByLabel("Concrete wall")[0]
obj2 = App.ActiveDocument.getObjectsByLabel("Custom parallelepiped")[0]
obj3 = App.ActiveDocument.getObjectsByLabel("Some special name for this cube__002")[0]

```

Dato che `Label` in generale non è univoco, il metodo `getObjectsByLabel` restituisce un elenco con tutti gli oggetti trovati con quella `Label`. Tuttavia, se l'`Label` è univoco nel documento, allora il primo elemento dell'elenco dovrebbe essere l'oggetto desiderato.

Retrieved from "<http://wiki.freecad.org/index.php?title=Object_name/it&oldid=1562492>"