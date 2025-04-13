---
title: Mesh Mesh da forma
---

|                                                |
| ---------------------------------------------- |
| Mesh da forma‏‎                                |
| Posizione nel menu                             |
| Mesh → Crea mesh da una forma...               |
| Ambiente                                       |
| [Mesh](/Mesh_Workbench/it "Mesh Workbench/it") |
| Avvio veloce                                   |
| _Nessuno_                                      |
| Introdotto nella versione                      |
| -                                              |
| Vedere anche                                   |
| _Nessuno_                                      |
|                                                |

## Descrizione

Il comando **Mesh_FromPartShape** crea oggetti [mesh](/Mesh/it "Mesh/it") non parametrici ([Mesh Features](/Mesh_Feature/it "Mesh Feature/it")) da [shape](/Shape/it "Shape/it") di oggetti ([Part Features](/Part_Feature/it "Part Feature/it")).

L'operazione inversa è [Crea forma da mesh](/Part_ShapeFromMesh/it "Part ShapeFromMesh/it") dell' ![](/images/Workbench_Part.svg) [Ambiente Part](/Part_Workbench/it "Part Workbench/it").

## Utilizzo

1. Facoltativamente selezionare uno o più oggetti.
2. Esistono diversi modi per richiamare il comando:
   - Premere il pulsante ![](/images/Mesh_FromPartShape.svg) Crea mesh da una forma....
   - Selezionare l'opzione **Mesh → ![](/images/Mesh_FromPartShape.svg) Crea mesh da una forma...** dal menu.
3. Si apre il pannello delle azioni **Tessellazione**.
4. Mentre il pannello delle azioni è aperto, si può fare una nuova selezione o modificare una selezione esistente.
5. Selezionare la scheda per il mesher che si desidera utilizzare.
6. Specificare le impostazioni richieste. Vedere [Programmi mesher](#Programmi_mesher).
7. Premere il pulsante OK per chiudere il pannello delle attività e terminare il comando.

## Programmi mesher

Questi sono i mesher disponibili e le loro impostazioni:

### Mesher standard

- **Deviazione di superficie**: la massima [deviazione lineare](https://www.opencascade.com/doc/occt-7.3.0/overview/html/occt_user_guides__modeling_algos.html#occt_modalg_11_2) di una sezione di mesh dalla superficie dell'oggetto.
- **Deviazione angolare**: la massima [deviazione angolare](https://www.opencascade.com/doc/occt-7.3.0/overview/html/occt_user_guides__modeling_algos.html#occt_modalg_11_2) da una sezione di mesh a quella successiva. Questa impostazione viene utilizzata durante la creazione di mesh di superfici curve.
- **Deviazione relativa delle superfici**: se selezionata, la deviazione lineare massima di un segmento di mesh sarà la **Deviazione di superficie** specificata moltiplicata per la lunghezza del segmento di mesh corrente (bordo).
- **Applica i colori delle facce alla mesh**: se selezionato, la mesh otterrà i colori della faccia dell'oggetto.
- **Definisci i segmenti con i colori delle facce**: se selezionato, i segmenti di mesh vengono raggruppati in base ai colori delle facce dell'oggetto. Questi gruppi verranno esportati per i formati di output mesh che supportano questa funzione (ad esempio il formato [OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file)).

### Mesher Mefisto

- **Lunghezza massima dello spigolo**: la lunghezza massima del bordo della maglia. Un valore piccolo genera una mesh più fine. Specificando `0` o deselezionando la casella di controllo, si ottiene una mesh molto grossolana.
  - Se si preme il pulsante Stima, il mesher inserirà un valore stimato per la **Lunghezza massima dello spigolo**. Questo valore non è molto affidabile se sono stati selezionati più oggetti.

### Mesher Netgen

- **Finezza**: selezionare un'opzione per la finezza della mesh:
  - **Molto grossa**
  - **Grossa**
  - **Moderata**
  - **Fine**
  - **Molto fine**
  - **Definita dall'utente**: per questa opzione è possibile specificare le seguenti impostazioni:
    - **Dimensione della mesh**: un valore più piccolo crea una maglia più fine. Il valore deve essere compreso nell'intervallo `0.1` - `1.0`.
    - **Numero di elementi per spigolo**: un valore più grande crea una maglia più fine. Il valore deve essere compreso nell'intervallo `0.2` - `10.0`.
    - **Numero di elementi per il raggio di curvatura**: un valore più grande crea una maglia più fine. Il valore deve essere compreso nell'intervallo `0.2` - `10.0`.
- **Ottimizza la superficie**: se selezionata, la forma della superficie sarà ottimizzata.
- **Elementi di secondo ordine**: se selezionato, verranno generati elementi di secondo ordine producendo una mesh più fine.
- **Dominato da quadrangoli**: se selezionata, la mesh utilizzerà preferibilmente [facce quadrilatere bidimensionali](https://en.wikipedia.org/wiki/Types_of_mesh#Two-dimensional).

### Mesher Gmsh

Per utenti Linux è richiesto il modulo esterno [Gmsh](https://gmsh.info/).

- **Meshing**: selezionare un'opzione di mesh:
  - **Automatica**
  - **Adattivo**
  - **Delaunay**
  - **Frontale**
  - **BAMG**
  - **Quad frontale**
  - **Parallelogrammi**
  - **Quasi-structured Quad**
- **Dimensione massima dell'elemento**: un valore più piccolo si traduce in una maglia più fine. Specificare `0` per determinare automaticamente questa dimensione.
- **Dimensione minima dell'elemento**: un valore più piccolo si traduce in una maglia più fine. Il valore dovrebbe essere inferiore a **Dimensione massima dell'elemento**. Specificare `0` per determinare automaticamente questa dimensione.
- **Angolo**: sembra non essere supportato in questo momento.
- **Percorso**: premere il pulsante ... e individuare il percorso del file gmsh.exe.
- Se il processo di meshing richiede troppo tempo si può premere il pulsante Termina per interromperlo.
- Premere il pulsante Pulisci per rimuovere le informazioni nell'area di testo.

## Note

- Questo comando non è limitato agli oggetti creati con [Part](/Part_Workbench/it "Part Workbench/it"). Può creare una mesh da qualsiasi oggetto che abbia una forma, inclusi gli oggetti creati con [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it").
- Il comando [Esporta](/Std_Export/it "Std Export/it") può esportare oggetti forma direttamente in un formato mesh.
- Vedere anche il tutorial [Esportare in STL o OBJ](/Export_to_STL_or_OBJ/it "Export to STL or OBJ/it").

## Preferenze

### Mesher standard

- L'impostazione di **Surface deviation** viene memorizzata in: **Strumenti → Modifica parametri... → BaseApp → Preferences → Mod → Mesh → Meshing → Standard → LinearDeflection**.
- L'impostazione di **Angular deviation** viene memorizzata in: **Strumenti → Modifica parametri... → BaseApp → Preferences → Mod → Mesh → Meshing → Standard → AngularDeflection**.
- L'impostazione di **Relative surface deviation** viene memorizzata in: **Strumenti → Modifica parametri... → BaseApp → Preferences → Mod → Mesh → Meshing → Standard → RelativeLinearDeflection**.

### Mesher Gmsh

- L'impostazione di **Path** viene memorizzata in: **Strumenti → Modifica parametri... → BaseApp → Preferences → Mod → Mesh → Meshing → gmshExe**.

## Proprietà

Vedere: [Mesh Feature](/Mesh_Feature/it "Mesh Feature/it").

## Script

Vedere anche: [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it")

Per creare un oggetto mesh da un oggetto shape usa il metodo `meshFromShape` del modulo MeshPart. Questo metodo ha diverse firme. La firma determina il mesher che verrà utilizzato. L'esempio seguente utilizza la firma mesher Mefisto.

```
import FreeCAD, Part, Mesh, MeshPart

cyl = FreeCAD.ActiveDocument.addObject("Part::Cylinder","Cylinder")
FreeCAD.ActiveDocument.recompute()

msh = FreeCAD.ActiveDocument.addObject("Mesh::Feature", "Mesh")
msh.Mesh = MeshPart.meshFromShape(Shape=cyl.Shape, MaxLength=1)
msh.ViewObject.DisplayMode = "Flat Lines"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_FromPartShape/it&oldid=1549990>"
