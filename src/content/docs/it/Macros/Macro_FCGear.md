---
title: Ingranaggi
---

:::caution
Questa macro è stata convertita in un ambiente chiamatoAmbiente FCGear. Utilizza l'ambiente invece di questa macro poiché è attivamente gestito.
:::

|                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ingranaggi                                                                                                                                                                                                               |
| Descrizione                                                                                                                                                                                                              |
| Ambiente aggiuntivo per creare diversi tipi di ingranaggi. Versione macro: 1.0 Ultima modifica: 2015-10-27 Autore: looooo                                                                                                |
| Autore                                                                                                                                                                                                                   |
| [looooo](/index.php?title=User:Looooo&action=edit&redlink=1 "User:Looooo (page does not exist)")                                                                                                                         |
| Download                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                   |
| Link                                                                                                                                                                                                                     |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it") |
| Versione macro                                                                                                                                                                                                           |
| 1.0                                                                                                                                                                                                                      |
| Data ultima modifica                                                                                                                                                                                                     |
| 2015-10-27                                                                                                                                                                                                               |
| Versioni di FreeCAD                                                                                                                                                                                                      |
| _None_                                                                                                                                                                                                                   |
| Scorciatoia                                                                                                                                                                                                              |
| _Nessuna_                                                                                                                                                                                                                |
| Vedere anche                                                                                                                                                                                                             |
| _Nessuno_                                                                                                                                                                                                                |
|                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                          |

## Descrizione

Workbench aggiuntivo per creare diversi tipi di ingranaggi, ingranaggi evolventi, cremagliere, ingranaggi cicloidi o conici.

![](/images/FCGear_00.png)

FCGear

## Installazione

- git clone <https://github.com/looooo/freecad.gears.git>
- creare un collegamento o copiare freecad.gears in /.FreeCAD/Mod

Note:

- se si scarica il file zip, decomprimerlo, e poi
- copiare la cartella **FCGear** in /freecad/Mod
  - in Windows si devono rendere visibili i file nascosti, altrimenti Mod non appare
  - in Linux di solito il percorso di Mod è usr/lib/freecad/Mod. Si deve aprire .Mod come amministratore e si deve dare a tutti i file di "gear" il permesso di accesso. È anche possibile copiare in Mod con: ~/.FreeCAD/Mod
- FCGear richiede "NUMPY", che è stato incluso in FreeCAD solo con la versione 0.15.4671, quindi non funziona con le versioni precedenti

## Creare un ingranaggio

- passare nell'ambiente gear
- cliccare sul simbolo di un tipo di ingranaggio
- adattare i parametri

![Involutegear](/images/Involutegear.png)![FCGear_involutegear_par](/images/FCGear_involutegear_par.png) ![Involuterack](/images/Involuterack.png)![FCGear_involuterack_par](/images/FCGear_involuterack_par.png)

![Cycloidegear](/images/Cycloidegear.png)![FCGear_cycloide_par](/images/FCGear_cycloide_par.png) ![Bevelgear](/images/Bevelgear.png)![FCGear_bevel_par](/images/FCGear_bevel_par.png)

## Link

- [FCGear](https://github.com/looooo/FCGear)
- [Discussione nel Forum](http://forum.freecadweb.org/viewtopic.php?f=3&t=12878&start=20)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FCGear/it&oldid=1203686>"
