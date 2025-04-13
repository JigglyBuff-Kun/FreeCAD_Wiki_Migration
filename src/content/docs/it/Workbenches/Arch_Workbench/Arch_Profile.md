---
title: Arch Profilo
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- |
| Profilo                                        |
| Posizione nel menu                             |
| Arch → Profilo                                 |
| Ambiente                                       |
| [Arch](/Arch_Workbench/it "Arch Workbench/it") |
| Avvio veloce                                   |
| _Nessuno_                                      |
| Introdotto nella versione                      |
| 0.19                                           |
| Vedere anche                                   |
| _Nessuno_                                      |
|                                                |

## Descrizione

Lo strumento **Profilo** crea un oggetto profilo 2D parametrico. Questo oggetto può quindi essere utilizzato come base in diversi altri strumenti che eseguono estrusioni, come [Carpenteria](/Arch_Frame/it "Arch Frame/it"), [Facciata continua](/Arch_CurtainWall/it "Arch CurtainWall/it") o [Estrusione di Part](/Part_Extrude/it "Part Extrude/it").

Vedere [l'elenco dei preset disponibili](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Arch/Presets/profiles.csv).

Lo strumento profilo è anche integrato nello strumento [Struttura](/Arch_Structure/it "Arch Structure/it"), tutti i profili preimpostati sono disponibili anche lì.

## Utilizzo

1. Premere il pulsante ![](/images/Arch_Profile.svg) Profilo.
2. Selezionare un profilo preimpostato nel pannello delle azioni dello strumento.
3. Fare clic su un punto nella vista 3D per posizionare il profilo.

## Proprietà

### Dati

- Dati**Height**: L'altezza complessiva del profilo
- Dati**Width**: La larghezza complessiva del profilo
- Dati**Diameter**: Il diametro del profilo (solo per i profili circolari)
- Dati**Thickness**: Lo spessore della parete del tubo (solo per i profili cavi circolari e rettangolari)
- Dati**Web Thickness**: Lo spessore dell'anima del profilo (solo per i profili H e I)
- Dati**Flange Thickness**: Lo spessore della flangia o ala del profilo (solo per i profili H e I)

## Aggiungere dei profili personalizzati

L'utente può creare un file CSV aggiuntivo, contenente le definizioni del profilo personalizzato. Deve essere denominato `profiles.csv` e inserito in

```
$FREECAD_USER_DIR/BIM/

```

Il percorso `$FREECAD_USER_DIR` può essere ottenuto dalla [console Python](/Python_console/it "Python console/it"):

```
FreeCAD.getUserAppDataDir()

```

Il contenuto del file `profiles.csv` personalizzato deve essere modellato con le stesse regole del [profiles.csv](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Arch/Presets/profiles.csv) nel codice sorgente.

Il file CSV deve contenere una riga per ogni profilo disponibile, formattata come segue:

- Per profili a C: Category, Name, Class, Diameter, Thickness
- Per i profili H, U e T: Category, Name, Class, Width, Height, Web thickness, Flange thickness
- Per profili R: Category, Name, Class, Width, Height
- Per profili RH: Category, Name, Class, Width, Height, Thickness

Tutte le misure devono essere in millimetri. Le possibili classi di profilo sono:

- C: Tubo circolare
- H: Profilo H o I
- R: Rettangolare
- RH: Rettangolare pieno
- U: Profilo a U
- L: Profilo a L
- T: Profilo a T

È possibile creare tipi di profilo aggiuntivi, ma è necessario prima definire una classe corrispondente in [ArchProfile.py](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Arch/ArchProfile.py).

## Script

Lo strumento Profilo può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
profile = makeProfile(profile_list)

```

Dove profile_list contiene i diversi elementi di un elenco nel file CSV.

Esempio:

```
import Arch
Arch.makeProfile([0, 'REC', 'REC100x100', 'R', 100, 100])

```

Dove il primo elemento della lista è un numero d'ordine non ancora utilizzato.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Profile/it&oldid=1481132>"
