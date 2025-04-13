---
title: Visualizza Commutare la visibilità
---

|                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mostra/Nascondi                                                                                                                                                                                                                                                                                                                                                     |
| Posizione nel menu                                                                                                                                                                                                                                                                                                                                                  |
| Visualizza → Mostra/Nascondi                                                                                                                                                                                                                                                                                                                                        |
| Ambiente                                                                                                                                                                                                                                                                                                                                                            |
| Tutti                                                                                                                                                                                                                                                                                                                                                               |
| Avvio veloce                                                                                                                                                                                                                                                                                                                                                        |
| Spazio                                                                                                                                                                                                                                                                                                                                                              |
| Introdotto nella versione                                                                                                                                                                                                                                                                                                                                           |
| -                                                                                                                                                                                                                                                                                                                                                                   |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                        |
| [Mostra la selezione](/Std_ShowSelection/it "Std ShowSelection/it"), [Nascondi la selezione](/Std_HideSelection/it "Std HideSelection/it"), [Commuta tutti gli oggetti](/Std_ToggleObjects/it "Std ToggleObjects/it"), [Mostra tutti gli oggetti](/Std_ShowObjects/it "Std ShowObjects/it"), [Nascondi tutti gli oggetti](/Std_HideObjects/it "Std HideObjects/it") |
|                                                                                                                                                                                                                                                                                                                                                                     |

## Descrizione

Il comando **Mostra/Nascondi** alterna la visibilità degli oggetti selezionati nella [Vista 3D](/3D_view/it "3D view/it").

## Utilizzo

1. Selezionare uno o più oggetti.
   - Gli oggetti invisibili possono essere selezionati nella [Vista ad albero](/Tree_view/it "Tree view/it").
   - Fare attenzione quando si usa Ctrl+A per selezionare tutti gli oggetti nella vista ad albero. Questo selezionerà anche i sotto-elementi dei [Corpi di PartDesign](/PartDesign_Body/it "PartDesign Body/it") e gli oggetti usati per le [operazioni booleane](/Part_Boolean/it "Part Boolean/it"). Nella maggior parte dei casi questi dovrebbero rimanere invisibili.
   - Gli oggetti utilizzati per le [operazioni booleane](/Part_Boolean/it "Part Boolean/it") vengono selezionati anche quando si utilizza Ctrl+A in una vista 3D.
2. Esistono diversi modi per invocare il comando:
   - Selezionare l'opzione **![](/images/Std_ToggleVisibility.svg) Attiva/disattiva visibilità** dal menu contestuale della vista ad albero o dal menu contestuale della vista 3D.
   - Usare la scorciatoia da tastiera: Spazio.

## Note

- Gli oggetti invisibili vengono visualizzati con un'etichetta in grigio e un'icona in grigio nella [Vista ad albero](/Tree_view/it "Tree view/it").
- Oggetti nidificati in una [Parte](/Std_Part/it "Std Part/it"), o [Link](/Std_LinkMake/it "Std LinkMake/it") verso un [Gruppo](/Std_Group/it "Std Group/it"), o in un LinkGroup, e [funzioni](/PartDesign_Feature/it "PartDesign Feature/it") di un [Corpo di PartDesign](/PartDesign_Body/it "PartDesign Body/it") saranno visibili solo nella [Vista 3D](/3D_view/it "3D view/it") se sono visibili anche i genitori successivi. Ciò significa che una funzione in un corpo di PartDesign annidata in una parte standard sarà visibile solo nelle viste 3D se la funzione stessa, il corpo di PartDesign e la parte standard sono tutti visibili. E se l'oggetto Part è a sua volta nidificato in un altro oggetto Part, anche quest'ultimo oggetto deve essere visibile.
- Se la visibilità di un [Gruppo](/Std_Group/it "Std Group/it") (o di un oggetto derivato da esso come un [Parte di edificio Arch](/Arch_BuildingPart/it "Arch BuildingPart/it")) viene modificata, la visibilità dei suoi oggetti nidificati cambierà di conseguenza. Ma anche la loro visibilità può essere modificata in modo indipendente.
- L'azione può essere annullata solo con [Annulla](/Std_Undo/it "Std Undo/it") se il parametro [fine-tuning](/Fine-tuning/it "Fine-tuning/it") **AutoTransactionView** è impostato su `true`.
- La visibilità di un oggetto può anche essere modificata tramite la relativa proprietà Dati**Visibility** in [Editor delle proprietà](/Property_editor/it "Property editor/it").

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Utilizza i metodi `show` e `hide` di un oggetto per modificarne la visibilità. La proprietà `Visibility` di un oggetto può anche essere modificata direttamente.

```
import FreeCADGui

obj = FreeCADGui.ActiveDocument.myObjectName

if obj.Visibility == True:
    obj.hide()
else:
    obj.show()

# Alternatively:
obj.Visibility = not obj.Visibility

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleVisibility/it&oldid=1451508>"
