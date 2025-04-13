---
title: Parte
---
## Introduzione

In FreeCAD il termine "Parte" è in genere usato per riferirsi ad una ![](/images/Std_Part.svg) [Parte](/Std_Part/it "Std Part/it") (classe `App::Part`), un tipo di oggetto contenitore che è definito dal sistema base. Questa Parte è usata per gestire la posizione di forme tridimensionali allo scopo di creare assemblaggi meccanici.

Si veda ![](/images/Std_Part.svg) [Parte](/Std_Part/it "Std Part/it") per maggiori informazioni riguardo questo tipo d'oggetto.

## Utilizzo

Lo strumento Parte non è definito da un particolare ambiente di lavoro, ma dal sistema base; di conseguenza lo si ritrova nella **barra degli strumenti struttura**, che è disponibile in tutti gli [ambienti di lavoro](/Workbenches/it "Workbenches/it").

1. Premere il pulsante ![](/images/Std_Part.svg) [Parte](/Std_Part/it "Std Part/it"). Una Parte vuota viene creata e diventa automaticamente *[attiva](/Std_Part/it#Stato_attivo "Std Part/it")*.

## Note

Nell'uso informale, una "Parte" può essere qualunque figura geometrica che sia visibile nella [Vista 3D](/3D_view/it "3D view/it"), e dunque il suo concetto può essere confuso con quello di "[Corpo](/Body/it "Body/it")" o "[Assemblaggio](/Assembly/it "Assembly/it")".

Tuttavia, quando è richiesta maggiore precisione, vanno fatte le dovute distinzioni.

* Un "[Corpo](/Body/it "Body/it")" è usato per singoli elementi contigui, di solito creati con gli ambienti di lavoro [Parte](/Part_Workbench/it "Part Workbench/it") o [Part Design](/PartDesign_Workbench/it "PartDesign Workbench/it").
* Una "Parte" è usata per raggruppare un singolo "Corpo", o diversi, per formare un "Assemblaggio".
* Un "Assemblaggio" è una collezione di "Parti" organizzate in una qualche maniera, manualmente, o usando un ambiente di assemblaggio.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part/it&oldid=1224805>"