---
title: Importare oggetti Mesh in FreeCAD
---
## Operazioni dopo l'importazione

Dopo l'importazione, per FreeCAD, il modello è solo un insieme di facce. Si potrebbe desiderare di convertire il modello in una forma riconoscibile e modificabile da FreeCAD.

Per fare questo:

1. Passare nel'ambiente ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/it "Part Workbench/it")
2. Selezionare la mesh e andare in **Parte → [Crea forma da mesh](/Part_ShapeFromMesh/it "Part ShapeFromMesh/it")** o premere il pulsante ![](/images/Part_ShapeFromMesh.svg) [Forma da mesh](/Part_ShapeFromMesh/it "Part ShapeFromMesh/it")
3. Cliccare OK nel dialogo
4. Selezionare la forma appena creata
5. Andare in **Part → [Converti in solido](/Part_MakeSolid/it "Part MakeSolid/it")**
6. Selezionare il solido appena creato
7. Andare in **Parte → [Affina forma](/Part_RefineShape/it "Part RefineShape/it")** o premere il pulsante ![](/images/Part_RefineShape.svg) [Affina forma](/Part_RefineShape/it "Part RefineShape/it")

**Nota:** L'ultimo passaggio non è obbligatorio, ma serve a pulire il solido della maggior parte dei bordi residui rimasti sulle superfici piane e cilindriche.

## Errori

### "cannot convert because shape is not a shell"

Il guscio (shell dell'oggetto mesh) sembra avere degli errori, forse non è chiuso (ha dei buchi). Dato che le capacità dell'ambiente Mesh di FreeCAD per ora sono un po' limitate, si potrebbe provare ad esaminare e riparare il modello con un software di terze parti. Dopo aver fatto questo, lo si può di nuovo provare ad importare e trasformare.

## Programmi di terze parti

* [MeshLab](https://www.meshlab.net/)
  + Licenza: Open Source (GPL V2)
  + Funziona su Windows 32/64 bit, Linux e macOS
* [Meshmixer](https://meshmixer.com/)
  + Licenza: Freeware
  + Funziona su Windows 64-bit

## Tutorial

* [Importare da STL o OBJ](/Import_from_STL_or_OBJ/it "Import from STL or OBJ/it")
* [Esportare in STL o OBJ](/Export_to_STL_or_OBJ/it "Export to STL or OBJ/it")

## Correlazioni

* [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_and_Mesh_Import/it&oldid=1501573>"