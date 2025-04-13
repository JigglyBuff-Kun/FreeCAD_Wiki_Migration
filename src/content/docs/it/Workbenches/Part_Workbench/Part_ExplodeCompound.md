---
title: Part Esplodi composto
---
|  |
| --- |
| Part esplodi composto |
| Posizione nel menu |
| Part → Composto → Esplodi composto |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.18 |
| Vedere anche |
| [Crea composto](/Part_Compound/it "Part Compound/it"), [Draft Declassa](/Draft_Downgrade/it "Draft Downgrade/it") |
|  |

## Descrizione

Lo strumento ![](/images/Part_ExplodeCompound.svg) **Part Esplodi composto** suddivide un composto di forme, per rendere disponibile ciascuna forma contenuta (figlio) come oggetto separato nell'albero del modello. I figli vengono automaticamente inseriti in un [Gruppo](/Std_Group/it "Std Group/it") se c'è più di un figlio.

È semi-parametrico: le forme dei figli si aggiorneranno man mano che il composto sorgente cambia, ma se viene modificato il numero di figli nel composto, nell'esploso mancheranno alcune forme o ci saranno oggetti ridondanti in una condizione di errore.

I posizionamenti delle forme estratte seguono i posizionamenti degli originali, oltre alla proprietà Posizionamento di ogni figlio.

Lo strumento esplode anche forme non composte nei loro costituenti di livello inferiore: solidi composti in solidi, solidi in gusci, gusci in facce, facce in contorni, contorni in bordi, bordi in vertici.

## Utilizzo

1. Selezionare un singolo composto.
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Part_ExplodeCompound.svg) Esplodi composto.
   * Selezionare l'opzione **Parte → Composto → ![](/images/Part_ExplodeCompound.svg) Esplodi composto** dal menu.

## Casi d'uso

* La modifica delle posizioni delle forme create da ![](/images/Draft_OrthoArray.svg) [Draft Serie ortogonale](/Draft_OrthoArray/it "Draft OrthoArray/it")
* L'ottenimento di pezzi divisi dal risultato di ![](/images/Part_Slice.svg) [Part Affetta](/Part_Slice/it "Part Slice/it") e ![](/images/Part_Cut.svg) [Part Taglio](/Part_Cut/it "Part Cut/it")
* L'ottenimento di contorni individuali da schizzi e facce a più contorni
* L'ottenimento di un solido puro da un solido in composto, da utilizzare in ![](/images/Workbench_FEM.svg) [Ambiente FEM](/FEM_Workbench/it "FEM Workbench/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ExplodeCompound/it&oldid=1497699>"