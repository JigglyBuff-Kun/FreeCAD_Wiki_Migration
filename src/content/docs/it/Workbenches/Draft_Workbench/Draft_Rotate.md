---
title: Draftː Ruota
---
|  |
| --- |
| Draft Ruota |
| Posizione nel menu |
| Modifiche → Ruota Modifica → Ruota |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| R O |
| Introdotto nella versione |
| 0.7 |
| Vedere anche |
| [Draft Evidenzia i sottoelementi](/Draft_SubelementHighlight/it "Draft SubelementHighlight/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_Rotate.svg) **Ruota** ruota o copia gli oggetti selezionati attorno ad un punto centrale di un dato angolo. L'asse di rotazione è perpendicolare al [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") corrente e l'angolo di rotazione è relativo a quel piano. In modalità sottoelemento il comando ruota i punti e gli spigoli selezionati, o copia gli spigoli selezionati, di [Linee](/Draft_Line/it "Draft Line/it") e [Polilinee](/Draft_Wire/it "Draft Wire/it").

Il comando può essere utilizzato su oggetti 2D creati con [Draft](/Draft_Workbench/it "Draft Workbench/it") o [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it"), ma anche su molti oggetti 3D come quelli creati con gli ambienti [Part](/Part_Workbench/it "Part Workbench/it"), [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") o [BIM](/BIM_Workbench/it "BIM Workbench/it").

![](/images/Draft_Rotate_example.jpg)

Rotazione di un oggetto intorno ad un punto centrale

## Utilizzo

Vedere anche: [Aggancio](/Draft_Snap/it "Draft Snap/it") e [Vincolare](/Draft_Constrain/it "Draft Constrain/it").

1. Opzionalmente selezionare uno o più oggetti, o uno o più sottoelementi di [Linee](/Draft_Line/it "Draft Line/it") o [Polilinee](/Draft_Wire/it "Draft Wire/it").
2. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_Rotate.svg) Ruota.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Modifiche → ![](/images/Draft_Rotate.svg) Ruota** dal menu.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **Modifica → ![](/images/Draft_Rotate.svg) Ruota** dal menu.
   * Usare la scorciatoia da tastiera: R poi O.
3. Se non si ha ancora selezionato un oggetto: selezionare un oggetto nella [Vista 3D](/3D_view/it "3D view/it").
4. Si apre il pannello attività **Ruota**. Vedere [Opzioni](#Opzioni) per maggiori informazioni.
5. Se i sottoelementi sono stati selezionati: selezionare la casella **Modifica i sottoelementi** per attivare la modalità sottoelemento.
6. Scegliere il primo punto, il centro di rotazione, nella [Vista 3D](/3D_view/it "3D view/it"), oppure digitare le coordinate e premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto.
7. Scegliere il secondo punto nella [Vista 3D](/3D_view/it "3D view/it"), o inserire un **Angolo base**.
8. Scegliere il terzo punto nella [Vista 3D](/3D_view/it "3D view/it"), o inserire una **Rotazione**.

## Opzioni

È possibile modificare le scorciatoie da tastiera a carattere singolo disponibili nel pannello delle attività. Vedere [Preferenze di Draft](/Draft_Preferences/it "Draft Preferences/it"). Le scorciatoie qui menzionate sono le scorciatoie predefinite (per la versione 1.0).

* Per inserire manualmente le coordinate per il centro di rotazione, inserire le componenti X, Y e Z e premere Enter dopo ciascuna. Oppure si può premere il pulsante ![](/images/Draft_AddPoint.svg) Inserisci punto quando ha i valori desiderati. Si consiglia di spostare il puntatore fuori dalla [Vista 3D](/3D_view/it "3D view/it") prima di inserire le coordinate.
* Premere G o fare clic sulla casella di controllo **Globale** per attivare o disattivare la modalità globale. Se la modalità globale è attiva, le coordinate sono relative al sistema di coordinate globale, altrimenti sono relative al sistema di coordinate [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it").
* Premere N o fare clic sulla casella di controllo **Continua** per attivare o disattivare la modalità continua. Se la modalità continua è attiva, il comando verrà riavviato al termine. Questa modalità ha davvero senso solo se la modalità di copia è attivata. A seconda della preferenza **Seleziona gli oggetti di base dopo la copia**, per la successiva chiamata al comando vengono selezionati gli oggetti originali o le copie create per ultime. Vedi [Preferenze](#Preferenze).
* Premere C o fare clic sulla casella di controllo **Copia** per attivare o disattivare la modalità di copia. Se la modalità copia è attiva, il comando creerà copie ruotate invece di ruotare gli oggetti originali.
* Premere B o fare clic sulla casella di controllo **Modifica i sottoelementi** per attivare o disattivare la modalità sottoelemento. Se la modalità sottoelemento è attiva, il comando utilizzerà i sottoelementi selezionati invece degli oggetti interi. I sottoelementi devono appartenere a  [Linee](/Draft_Line/it "Draft Line/it") o [Polilinee](/Draft_Wire/it "Draft Wire/it").
* Se la modalità copia e la modalità sottoelemento sono entrambe attive e sono selezionati i bordi di [Polilinee](/Draft_Wire/it "Draft Wire/it"), verranno creati nuove polilinee da quei bordi.
* Tenendo premuto Alt dopo aver inserito **Angolo base** si attiverà anche la modalità di copia. Mentre Alt viene tenuto premuto, è possibile selezionare più punti per **Rotazione**. Rilasciare Alt per terminare il comando e vedere le copie create.
* Premere S per attivare o disattivare [Aggancia](/Draft_Snap/it "Draft Snap/it").
* Premere Esc o il pulsante Chiudi per interrompere il comando.

## Note

* Un oggetto che è [allegato](/Part_EditAttachment/it "Part EditAttachment/it") non può essere ruotato con il comando Ruota. Per ruotarlo è necessario ruotare il suo oggetto Dati**Support** o modificare il suo Dati**Attachment Offset**.
* Il concetto di angolo base può creare confusione. Soprattutto perché funziona solo quando si selezionano i punti, non quando si specifica l'angolo utilizzando il campo di input. Una spiegazione di come funziona, con un esempio, può essere trovata in [questo thread del forum](https://forum.freecad.org/viewtopic.php?p=736674#p736674).

## Preferenze

Vedere anche: [Impostare le preferenze](/Preferences_Editor/it "Preferences Editor/it") e [Preferenze per l'ambiente Draft](/Draft_Preferences/it "Draft Preferences/it").

* Per riselezionare gli oggetti base dopo aver copiato gli oggetti: **Modifica → Preferenze... → Draft → Generale → Seleziona oggetti di base dopo la copia**.

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per ruotare gli oggetti usa il metodo `rotate` del modulo Draft.

```
rotated_list = rotate(objectslist, angle, center=Vector(0,0,0), axis=Vector(0,0,1), copy=False)

```

* `objectslist` contiene gli oggetti da ruotare. È un singolo oggetto o un elenco di oggetti.
* `angle` è l'angolo di rotazione in gradi.
* `center` è il punto centrale della rotazione.
* `axis` è la direzione dell'asse di rotazione.
* Se `copy` è `True` vengono create delle copie invece di ruotare gli oggetti originali.
* `rotated_list` viene restituito con gli oggetti originali ruotati o con le nuove copie. È un singolo oggetto o un elenco di oggetti, a seconda di `objectlist`.

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(3, radius=300)
Draft.move(polygon1, App.Vector(1000, 0, 0))

# Rotation around the origin
angle1 = 45
rot2 = Draft.rotate(polygon1, angle1, copy=True)
rot3 = Draft.rotate(polygon1, 2*angle1, copy=True)
rot4 = Draft.rotate(polygon1, 4*angle1, copy=True)

polygon2 = Draft.make_polygon(3, radius=1000)
polygon3 = Draft.make_polygon(5, radius=500)
Draft.move(polygon2, App.Vector(2000, 0, 0))
Draft.move(polygon3, App.Vector(2000, 0, 0))

# Rotation around another point
angle2 = 60
cen = App.Vector(3100, 0, 0)
list2 = [polygon2, polygon3]
rot_list2 = Draft.rotate(list2, angle2, center=cen, copy=True)
rot_list3 = Draft.rotate(list2, 2*angle2, center=cen, copy=True)
rot_list4 = Draft.rotate(list2, 4*angle2, center=cen, copy=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Rotate/it&oldid=1513756>"