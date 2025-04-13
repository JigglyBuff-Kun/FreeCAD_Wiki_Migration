---
title: Mesh Importa
---

|                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Importa mesh                                                                                                                                       |
| Posizione nel menu                                                                                                                                 |
| Mesh → Importa mesh...                                                                                                                             |
| Ambiente                                                                                                                                           |
| [Mesh](/Mesh_Workbench/it "Mesh Workbench/it")                                                                                                     |
| Avvio veloce                                                                                                                                       |
| _Nessuno_                                                                                                                                          |
| Introdotto nella versione                                                                                                                          |
| -                                                                                                                                                  |
| Vedere anche                                                                                                                                       |
| [Importa](/Std_Import/it "Std Import/it"), [Apri](/Std_Open/it "Std Open/it"), [Importazione e Esportazione](/Import_Export/it "Import Export/it") |
|                                                                                                                                                    |

## Descrizione

Il comando **Importa mesh** importa la geometria da un formato file mesh nel documento attivo. Sono supportati diversi formati di file. Il comando crea un oggetto mesh non parametrico, una [Mesh Feature](/Mesh_Feature/it "Mesh Feature/it").

## Utilizzo

1. Esistono diversi modi per invocare il comando:
   - Premere il pulsante ![](/images/Mesh_Import.svg) Importa mesh....
   - Selezionare l'opzione **Mesh → ![](/images/Mesh_Import.svg) Importa mesh...** dal menu.
   - Selezionare l'opzione **![](/images/Mesh_Import.svg) Importa mesh...** dal menu contestuale della [vista ad albero](/Tree_view/it "Tree view/it") o della [vista 3D](/3D_view/it "3D view/it"). Questa opzione è disponibile solo se è stato selezionato un oggetto mesh esistente. Notare che l'oggetto selezionato non viene effettivamente utilizzato o modificato dal comando.
2. Facoltativamente, selezionare il formato file corretto nella finestra di dialogo.
3. Selezionare un file.
4. Premere il pulsante Apri.

## Formati di file supportati

Il comando supporta: file stl, ast, bms, obj, off, iv, ply, nas e bdf. Per il formato file NASTRAN (nas/bdf), sono supportate solo le schede GRID, CTRIA3 e CQUAD4.

## Preferenze

- L'ultima posizione del file utilizzato viene memorizzata in: **Strumenti → Modifica parametri... → BaseApp → Preferences → General → FileOpenSavePath**.

## Proprietà

Vedere: [Mesh Feature](/Mesh_Feature/it "Mesh Feature/it").

## Script

Vedere anche: [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it")

Per importare un file mesh utilizzare il metodo `insert` del modulo Mesh.

```
import Mesh
Mesh.insert('D:/testfiles/cylinder.stl')

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Import/it&oldid=1334181>"
