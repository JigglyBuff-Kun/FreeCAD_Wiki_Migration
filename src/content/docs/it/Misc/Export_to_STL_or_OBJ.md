---
title: Exportare in STL o OBJ
---
|  |
| --- |
| Tutorial |
| Argomento |
| Esportare in STL o OBJ |
| Livello di difficoltà |
| Base |
| Tempo di esecuzione |
| 20 minuti |
| Autori |
| r-frank |
| Versione di FreeCAD |
| 0.16.6703 |
| Files di esempio |
| *Nessuno* |
| Vedere anche |
| *Nessuno* |
|  |

## Introduzione

In questo tutorial tratteremo come esportare file STL/OBJ da FreeCAD. Il formato mesh STL/OBJ è adimensionale; FreeCAD assumerà durante l'esportazione che le unità utilizzate nel modello siano in mm. Se questo non è il caso si deve ridimensionare il proprio modello. Un modo per farlo è utilizzare ![](/images/Draft_Scale.svg) [Draft Scala](/Draft_Scale/it "Draft Scale/it").

## La parte modello

E' possibile utilizzare il proprio file FreeCAD, ma è possibile anche creare un file di test rapido:

1. Aprire FreeCAD.
2. Creare un nuovo documento.
3. Passare all'![](/images/Workbench_Part.svg) [Ambiente Part](/Part_Workbench/it "Part Workbench/it").
4. Inserire un cubo facendo clic su ![](/images/Part_Box.svg) [Part Cubo](/Part_Box/it "Part Box/it").
5. Inserire un cono facendo clic su ![](/images/Part_Cone.svg) [Part Cono](/Part_Cone/it "Part Cone/it").
6. Selezionare entrambi gli oggetti nella [vista ad albero](/Tree_view/it "Tree view/it").
7. Applicare una fusione facendo clic su ![](/images/Part_Fuse.svg) [Part Unisci](/Part_Fuse/it "Part Fuse/it").
8. Salvare il file.

## Metodo di esportazione 1: utilizzando "File → Esporta"

1. Con le impostazioni predefinite, questo metodo crea una mesh con curve notevolmente frastagliate. Per ottenere una finitura più liscia quando ad es. per la Stampa 3D, la risoluzione della mesh deve essere configurata:
   1. Assicurarsi che l'![](/images/Workbench_Mesh.svg) [Ambiente Mesh](/Mesh_Workbench/it "Mesh Workbench/it") sia stato caricato (non è caricato per impostazione predefinita).
   2. Andare in **Modifica → Preferenze... → Importa-Esporta → Formati mesh**.
   3. Cambiare **Deviazione massima della mesh**. Un valore più basso produrrà una mesh con una risoluzione più alta.
2. Selezionarere il solido da esportare nella vista ad albero.
3. Scegliere **File → Esporta...** e impostare il tipo di file su **STL mesh (\*.stl \*.ast)**.
4. Inserire il nome del file. L'estensione predefinita è .stl. È necessario includere l'estensione .ast per produrre un file .ast.
5. Scegliere Salva.

## Metodo di esportazione 2: utilizzo dell'ambiente Mesh in FreeCAD

1. Passare all'![](/images/Workbench_Mesh.svg) [Ambiente Mesh](/Mesh_Workbench "Mesh Workbench").
2. Selezionare il solido da convertire in mesh nella vista ad albero.
3. Scegliere **Meshes → ![](/images/Mesh_FromPartShape.svg) Crea mesh dalla forma...** dal menu principale (in alto).
4. Selezionare uno dei mesher disponibili e specificare le opzioni disponibili. Per ulteriori informazioni fare riferimento a [Mesh da forma](/Mesh_FromPartShape/it "Mesh FromPartShape/it").
5. Scegliere OK. L'oggetto mesh verrà creato nella vista ad albero (con un'icona mesh verde ![](/images/Workbench_Mesh.svg)).
6. Fare clic con il pulsante destro del mouse sull'oggetto mesh nella vista ad albero e scegliere **![](/images/Mesh_Export.svg) Esporta mesh...**.
7. Inserire il nome del file, l'estensione non è necessaria. L'estensione verrà impostata in base al tipo di file. Se si include un'estensione che non corrisponde al tipo di file selezionato, quando il file verrà salvato verrà aggiunta un'estensione per il tipo selezionato.
8. Il tipo di file predefinito è **Binary STL (\*.stl)**. Cambiare il tipo se lo si desidera.
9. Scegliere Salva.

## Quale metodo scegliere?

* Il metodo 1 può essere utilizzato per la maggior parte delle situazioni in cui è necessario un file mesh.
* Con il metodo 2 è possibile verificare la mesh in FreeCAD. E se si ha più di un solido da convertire si possono utilizzare gli Strumenti dell'[Ambiente Mesh](/Mesh_Workbench/it "Mesh Workbench/it"). Ad esempio, è possibile fondere le mesh prima dell'esportazione.

## Collegamenti

* [Importare da STL o OBJ](/Import_from_STL_or_OBJ/it "Import from STL or OBJ/it")
* [Importazione e esportazione](/Import_Export/it "Import Export/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Export_to_STL_or_OBJ/it&oldid=1476877>"