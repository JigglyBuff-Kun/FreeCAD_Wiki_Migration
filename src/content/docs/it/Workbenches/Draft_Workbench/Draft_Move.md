---
title: Draftː Sposta
---
|  |
| --- |
| Draft Sposta |
| Posizione nel menu |
| Modifiche → Sposta Modifica → Sposta |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| M V |
| Introdotto nella versione |
| 0.7 |
| Vedere anche |
| [Draft Evidenzia i sottoelementi](/Draft_SubelementHighlight/it "Draft SubelementHighlight/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_Move.svg) **Sposta** sposta o copia gli oggetti selezionati da un punto all'altro. In modalità sottoelemento il comando sposta i punti e gli spigoli selezionati, o copia gli spigoli selezionati, di [Linee](/Draft_Line/it "Draft Line/it") e [Polilinee](/Draft_Wire/it "Draft Wire/it").

Il comando può essere utilizzato su oggetti 2D creati con [Draft](/Draft_Workbench/it "Draft Workbench/it") o [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it"), ma anche su molti oggetti 3D come quelli creati con gli ambienti [Part](/Part_Workbench/it "Part Workbench/it"), [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") o [BIM](/BIM_Workbench/it "BIM Workbench/it").

![](/images/Draft_Move_example.jpg)

Spostare un oggetto da un punto a un altro punto

## Utilizzo

Vedere anche: [Aggancio](/Draft_Snap/it "Draft Snap/it") e [Vincolare](/Draft_Constrain/it "Draft Constrain/it").

1. Opzionalmente selezionare uno o più oggetti, o uno o più sottoelementi di [Linee](/Draft_Line/it "Draft Line/it") o [Polilinee](/Draft_Wire/it "Draft Wire/it").
2. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_Move.svg) Sposta.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Modifiche → ![](/images/Draft_Move.svg) Sposta** dal menu.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **Modifica → ![](/images/Draft_Move.svg) Sposta** dal menu.
   * Usare la scorciatoia da tastiera: M poi V.
3. Se non si ha ancora selezionato un oggetto: selezionare un oggetto nella [Vista 3D](/3D_view/it "3D view/it").
4. Si apre il pannello delle attività **Sposta**. Vedere [Opzioni](#Opzioni) per maggiori informazioni.
5. Se i sottoelementi sono stati selezionati: selezionare la casella **Modifica i sottoelementi** per attivare la modalità sottoelemento.
6. Scegliere il primo punto, il punto base, nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
7. Scegliere il secondo punto, il punto di destinazione, nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.

## Opzioni

È possibile modificare le scorciatoie da tastiera a carattere singolo disponibili nel pannello delle attività. Vedere [Preferenze di Draft](/Draft_Preferences/it "Draft Preferences/it"). Le scorciatoie qui menzionate sono le scorciatoie predefinite (per la versione 1.0).

* Per inserire manualmente le coordinate, inserire le componenti X, Y e Z e premere Enter dopo ognuna di esse. Oppure si può premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto quando ha i valori desiderati. Si consiglia di spostare il puntatore fuori dalla [Vista 3D](/3D_view/it "3D view/it") prima di inserire le coordinate.
* Per usare le coordinate polari inserire un valore per **Lunghezza** e un valore per **Anglo**, e premere Enter dopo ciascuno.
* Selezionare la casella **Anglo** per vincolare il puntatore all'angolo specificato.
* Premere L per cambiare il focus dalla casella di input **X** alla casella di input **Lunghezza** e viceversa. A seconda della casella di input che riceve il focus, la casella di controllo **Anglo** è selezionata o deselezionata.
* Premere R o fare clic sulla casella di controllo **Relativo** per attivare o disattivare la modalità relativa. Se la modalità relativa è attiva, le coordinate del secondo punto sono relative al primo punto, altrimenti sono relative all'origine del sistema di coordinate.
* Premere G o fare clic sulla casella di controllo **Globale** per attivare o disattivare la modalità globale. Se la modalità globale è attiva, le coordinate sono relative al sistema di coordinate globale, altrimenti sono relative al sistema di coordinate [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it").
* Premere N o fare clic sulla casella di controllo **Continua** per attivare o disattivare la modalità continua. Se la modalità continua è attiva, il comando verrà riavviato al termine. Questa modalità ha davvero senso solo se la modalità di copia è attivata. A seconda della preferenza **Seleziona gli oggetti di base dopo la copia**, per la successiva chiamata al comando vengono selezionati gli oggetti originali o le copie create per ultime. Vedi [Preferenze](#Preferenze).
* Premere C o fare clic sulla casella di controllo **Copia** per attivare o disattivare la modalità di copia. Se la modalità copia è attiva, il comando creerà copie spostate invece di spostare gli oggetti originali.
* Premere B o fare clic sulla casella di controllo **Modifica sottoelementi** per attivare o disattivare la modalità sottoelemento. Se la modalità sottoelemento è attiva, il comando utilizzerà i sottoelementi selezionati invece degli oggetti interi. I sottoelementi devono appartenere a [Linee](/Draft_Line/it "Draft Line/it") o [Polilinee](/Draft_Wire/it "Draft Wire/it").
* Se la modalità copia e la modalità sottoelemento sono entrambe attive e sono selezionati i bordi di [Polilinee](/Draft_Wire/it "Draft Wire/it"), verranno creati nuove polilinee da quei bordi.
* Tenendo premuto Alt dopo aver scelto il punto base si attiverà anche la modalità di copia. Mentre Alt viene tenuto premuto, è possibile selezionare più punti bersaglio. Rilasciare Alt per terminare il comando e vedere le copie create.
* Premere S per attivare o disattivare [Aggancia](/Draft_Snap/it "Draft Snap/it").
* Premere Esc o il pulsante Chiudi per interrompere il comando.

## Note

* Un Oggetto che è [allegato](/Part_EditAttachment/it "Part EditAttachment/it") non può essere spostato con il comando Sposta. Per spostarlo è necessario spostare il suo oggetto Dati**Support** o modificare il suo Dati**Attachment Offset**.

## Preferenze

Vedere anche: [Impostare le preferenze](/Preferences_Editor/it "Preferences Editor/it") e [Preferenze per l'ambiente Draft](/Draft_Preferences/it "Draft Preferences/it").

* Per cambiare il focus iniziale del pannello delle attività nella casella di input **Lunghezza**: **Modifica → Preferenze... → Draft → Generale → Imposta il focus sulla Lunghezza invece che sulla coordinata X**. Tenere presente che si deve spostare il puntatore nella [vista 3D](/3D_view/it "3D view/it") affinché la modifica abbia effetto.
* Per riselezionare gli oggetti base dopo aver copiato gli oggetti: **Modifica → Preferenze... → Draft → Generale → Seleziona oggetti di base dopo la copia**.

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per spostare gli oggetti usare il metodo `move` del modulo Draft.

```
moved_list = move(objectslist, vector, copy=False)

```

* `objectslist` contiene gli oggetti da spostare. È un singolo oggetto o un elenco di oggetti.
* `vector` è lo spostamento.
* Se `copy` è `True` vengono create delle copie invece di spostare gli oggetti originali.
* `moved_list` viene restituito con gli oggetti spostati originali o con le nuove copie. È un singolo oggetto o un elenco di oggetti, a seconda di `objectslist`.

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(5, radius=1000)
polygon2 = Draft.make_polygon(3, radius=500)
polygon3 = Draft.make_polygon(6, radius=220)

Draft.move(polygon1, App.Vector(500, 500, 0))
Draft.move(polygon1, App.Vector(500, 500, 0))
Draft.move(polygon2, App.Vector(1000, -1000, 0))
Draft.move(polygon3, App.Vector(-500, -500, 0))

list1 = [polygon1, polygon2, polygon3]

vector = App.Vector(-2000, -2000, 0)
list2 = Draft.move(list1, vector, copy=True)
list3 = Draft.move(list1, -2*vector, copy=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Move/it&oldid=1513745>"