---
title: Mesh Esporta
---

|                                                                                                                |
| -------------------------------------------------------------------------------------------------------------- |
| Esporta mesh                                                                                                   |
| Posizione nel menu                                                                                             |
| Mesh → Esporta mesh...                                                                                         |
| Ambiente                                                                                                       |
| [Mesh](/Mesh_Workbench/it "Mesh Workbench/it")                                                                 |
| Avvio veloce                                                                                                   |
| _Nessuno_                                                                                                      |
| Introdotto nella versione                                                                                      |
| -                                                                                                              |
| Vedere anche                                                                                                   |
| [Esporta](/Std_Export/it "Std Export/it"), [Importazione e Esportazione](/Import_Export/it "Import Export/it") |
|                                                                                                                |

## Descrizione

Il comando **Esporta mesh** esporta un oggetto mesh in un formato file mesh. Sono supportati diversi formati di file.

## Utilizzo

1. Selezionare un singolo oggetto mesh.
2. Esistono diversi modi per invocare il comando:
   - Premere il pulsante ![](/images/Mesh_Export.svg) Esporta mesh....
   - Selezionare l'opzione **Mesh → ![](/images/Mesh_Export.svg) Esporta mesh...** dal menu.
   - Selezionare l'opzione **![](/images/Mesh_Export.svg) Esporta mesh...** dal menu contestuale della [vista ad albero](/Tree_view/it "Tree view/it") o della [vista 3D](/3D_view/it "3D view/it").
3. Selezionare il formato file corretto nella finestra di dialogo.
4. Inserisci un nome file. Se nel passaggio precedente è stata selezionata l'opzione `Tutti i file (*.*)` e non si specifica un'estensione di file, viene utilizzata l'estensione .stl.
5. Premere il pulsante Salva.

## Note

- Esistono alcune preferenze di esportazione correlate ai [Formati mesh](/Import_Export_Preferences/it#Formati_mesh "Import Export Preferences/it") ma queste non si applicano a questo comando. Sono utilizzati dal comando [Esporta](/Std_Export/it "Std Export/it").

## Preferenze

- L'ultima posizione del file utilizzato viene memorizzata in: **Strumenti → Modifica parametri... → BaseApp → Preferences → General → FileOpenSavePath**.

## Script

Vedere anche: [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it")

Per esportare oggetti (inclusi gli oggetti mesh) in un formato file mesh, utilizzare il metodo `export` del modulo Mesh.

```
import FreeCAD
import Mesh

doc = FreeCAD.ActiveDocument

Mesh.export([doc.Cone, doc.Cylinder], 'D:/testfiles/mymodel.stl')

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Export/it&oldid=1334179>"
