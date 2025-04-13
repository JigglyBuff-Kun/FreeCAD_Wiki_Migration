---
title: Ambiente Part Design
---

![](/images/Workbench_PartDesign.svg)

L'icona dell'ambiente PartDesign

## Introduzione

L'\*_Ambiente PartDesign_- ![](/images/Workbench_PartDesign.svg) fornisce strumenti per la modellazione di componenti solidi. È principalmente focalizzato sulla creazione di componenti meccaniche che possono essere fabbricate e assemblate in un prodotto finito. Tuttavia, i solidi creati possono essere utilizzati per qualsiasi altro scopo come [modellazione BIM](/BIM_Workbench/it "BIM Workbench/it"), [analisi degli elementi finiti](/FEM_Workbench/it "FEM Workbench/it"), o [lavorazione e stampa 3D](/CAM_Workbench/it "CAM Workbench/it").

L'ambiente PartDesign utilizza una metodologia basata sulle funzionalità. Un componente è rappresentato dal contenitore dell'oggetto Body (corpo). Il Body definisce un sistema di coordinate locali e contiene le caratteristiche cumulative che definiscono il componente. La maggior parte delle funzionalità si basa su schizzi parametrici e sono additive o sottrattive. Ad esempio, lo [strumento Estrusione](/PartDesign_Pad/it "PartDesign Pad/it") aggiunge lo schizzo estruso al solido di sviluppo, lo [strumento Tasca](/PartDesign_Pocket/it "PartDesign Pocket/it") sottrae lo schizzo estruso. Ciascuna funzionalità è cumulativa e si basa sul risultato delle funzionalità precedenti. È anche possibile utilizzare le primitive ([Cilindro](/PartDesign_AdditiveCylinder/it "PartDesign AdditiveCylinder/it"), [Sfera](/PartDesign_AdditiveSphere/it "PartDesign AdditiveSphere/it"), ecc.) così come i solidi creati all'esterno del Body come feature.

Vedere la pagina [modifica delle funzionalità](/Feature_editing/it "Feature editing/it") per una spiegazione più completa di questo processo, quindi vedere [Creazione di un componente semplice con PartDesign](/Creating_a_simple_part_with_PartDesign/it "Creating a simple part with PartDesign/it") per iniziare con la creazione di solidi.

L' ![](/images/Workbench_Part.svg) [Ambiente Part](/Part_Workbench/it "Part Workbench/it") fornisce una metodologia alternativa, [geometria solida costruttiva](/Constructive_solid_geometry/it "Constructive solid geometry/it") (CSG), per la costruzione di forme. Per una discussione dettagliata dell'ambiente Part e dell'ambiente Part Design vedere [Part e Part Design](/Part_and_PartDesign/it "Part and PartDesign/it").

![](/images/PartDesign_Workbench_Example.jpg)

## Strumenti

Gli strumenti di Part Design si trovano tutti nel menu di **Part Design** e nella barra degli strumenti di PartDesign che appare quando si carica l'ambiente Part Design.

### Strumenti di supporto di Part Design

- ![](/images/PartDesign_Body.svg) [Crea un corpo](/PartDesign_Body/it "PartDesign Body/it"): crea un oggetto [Corpo](/Body/it "Body/it") nel documento attivo e lo rende attivo.

- ![](/images/PartDesign_NewSketch.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Crea schizzo:

: \- ![](/images/PartDesign_NewSketch.svg) [Crea schizzo](/PartDesign_NewSketch/it "PartDesign NewSketch/it"): crea un nuovo schizzo su una faccia o un piano selezionati. Se non viene selezionata alcuna faccia mentre viene eseguito questo strumento, all'utente viene richiesto di selezionare un piano dal pannello Azioni. L'interfaccia passa quindi all'ambiente [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") nella modalità di modifica dello schizzo.

: \- ![](/images/Sketcher_MapSketch.svg) [Mappa schizzo su faccia](/Sketcher_MapSketch/it "Sketcher MapSketch/it"): collega uno schizzo alla geometria selezionata dal corpo attivo.

: \- ![](/images/Sketcher_EditSketch.png) [Edita schizzo](/Sketcher_EditSketch/it "Sketcher EditSketch/it"): apre lo schizzo selezionato per la modifica.

- ![](/images/Sketcher_ValidateSketch.svg) [Convalida lo schizzo](/Sketcher_ValidateSketch/it "Sketcher ValidateSketch/it"): controlla se nell'area di tolleranza ci sono dei punti distinti e li fa coincidere.

- ![](/images/Part_CheckGeometry.svg) [Controlla la geometria](/Part_CheckGeometry/it "Part CheckGeometry/it"): Verifica la presenza di errori nella geometria degli oggetti selezionati.

- ![](/images/PartDesign_ShapeBinder.svg) [Crea un Forma legata](/PartDesign_ShapeBinder/it "PartDesign ShapeBinder/it"): crea un raccoglitore di forme che fa riferimento alla geometria da un singolo oggetto principale

- ![](/images/PartDesign_SubShapeBinder.svg) [Crea una Forma legata a sotto-oggetti](/PartDesign_SubShapeBinder/it "PartDesign SubShapeBinder/it"): crea un raccoglitore di forme che fa riferimento alla geometria da uno o più oggetti principali.

- ![](/images/PartDesign_Clone.svg) [Crea un clone](/PartDesign_Clone/it "PartDesign Clone/it"): crea un clone del corpo selezionato.

- ![](/images/PartDesign_Plane.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Crea un riferimento (versione 1.0 e precedenti):

: \- ![](/images/PartDesign_Plane.svg) [Crea un piano di riferimento](/PartDesign_Plane/it "PartDesign Plane/it"): crea un piano di riferimento nel corpo attivo. (versione 1.0 e precedenti)

: \- ![](/images/PartDesign_Line.svg) [Crea una linea di riferimento](/PartDesign_Line/it "PartDesign Line/it"): crea una linea di riferimento nel corpo attivo. (versione 1.0 e precedenti)

: \- ![](/images/PartDesign_Point.svg) [Crea un punto di riferimento](/PartDesign_Point/it "PartDesign Point/it"): crea un punto di riferimento nel corpo attivo. (versione 1.0 e precedenti)

: \- ![](/images/PartDesign_CoordinateSystem.svg) [Sistema di coordinate locali](/PartDesign_CoordinateSystem/it "PartDesign CoordinateSystem/it"): crea nel corpo attivo un sistema di coordinate locale collegato alla geometria di riferimento. (versione 1.0 e precedenti)

: [disponibile dalla versione 1.1](/Release_notes_1.1/it "Release notes 1.1/it"): questi strumenti sono stati sostituiti dai nuovi [strumenti datum](/Std_Base/it#Part_Datums "Std Base/it").

### Strumenti di modellazione di Part Design

#### Strumenti Additivi

I seguenti strumenti servono per creare funzioni di base o per aggiungere del materiale a un corpo esistente.

- ![](/images/PartDesign_Pad.svg) [Estrusione](/PartDesign_Pad/it "PartDesign Pad/it"): estrude un solido da uno schizzo selezionato.

- ![](/images/PartDesign_Revolution.svg) [Rivoluzione](/PartDesign_Revolution/it "PartDesign Revolution/it"): crea un solido ruotando uno schizzo attorno ad un asse. Lo schizzo deve avere un profilo chiuso.

- ![](/images/PartDesign_AdditiveLoft.svg) [Loft additivo](/PartDesign_AdditiveLoft/it "PartDesign AdditiveLoft/it"): crea un solido eseguendo una transizione tra due o più schizzi.

- ![](/images/PartDesign_AdditivePipe.svg) [Sweep additivo](/PartDesign_AdditivePipe/it "PartDesign AdditivePipe/it"): crea un solido spostando uno o più schizzi lungo un percorso aperto o chiuso.

- ![](/images/PartDesign_AdditiveHelix.svg) [Elica additiva](/PartDesign_AdditiveHelix/it "PartDesign AdditiveHelix/it"): crea un solido facendo scorrere uno schizzo lungo un'elica.

- ![](/images/PartDesign_AdditiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Crea una primitiva additiva:

: \- ![](/images/PartDesign_AdditiveBox.svg) [Cubo additivo](/PartDesign_AdditiveBox/it "PartDesign AdditiveBox/it"): crea un cubo additivo.

: \- ![](/images/PartDesign_AdditiveCylinder.svg) [Cilindro additivo](/PartDesign_AdditiveCylinder/it "PartDesign AdditiveCylinder/it"): crea un cilindro additivo.

: \- ![](/images/PartDesign_AdditiveSphere.svg) [Sfera additiva](/PartDesign_AdditiveSphere/it "PartDesign AdditiveSphere/it"): crea una sfera additiva.

: \- ![](/images/PartDesign_AdditiveCone.svg) [Cono additivo](/PartDesign_AdditiveCone/it "PartDesign AdditiveCone/it"): crea un cono additivo.

: \- ![](/images/PartDesign_AdditiveEllipsoid.svg) [Ellissoide additivo](/PartDesign_AdditiveEllipsoid/it "PartDesign AdditiveEllipsoid/it"): crea un ellissoide additivo.

: \- ![](/images/PartDesign_AdditiveTorus.svg) [Toro additivo](/PartDesign_AdditiveTorus/it "PartDesign AdditiveTorus/it"): crea un toro additivo.

: \- ![](/images/PartDesign_AdditivePrism.svg) [Prisma additivo](/PartDesign_AdditivePrism/it "PartDesign AdditivePrism/it"): crea un prisma additivo.

: \- ![](/images/PartDesign_AdditiveWedge.svg) [Cuneo additivo](/PartDesign_AdditiveWedge/it "PartDesign AdditiveWedge/it"): crea un cuneo additivo.

#### Strumenti sottrattivi

I seguenti strumenti servono per sottrarre del materiale da un corpo esistente.

- ![](/images/PartDesign_Pocket.svg) [Tasca](/PartDesign_Pocket/it "PartDesign Pocket/it"): crea una tasca da uno schizzo selezionato.

- ![](/images/PartDesign_Hole.svg) [Foro](/PartDesign_Hole/it "PartDesign Hole/it"): crea una funzione foro da uno schizzo selezionato. Lo schizzo deve contenere uno o più cerchi.

- ![](/images/PartDesign_Groove.svg) [Gola](/PartDesign_Groove/it "PartDesign Groove/it"): crea un solco ruotando uno schizzo attorno ad un asse.

- ![](/images/PartDesign_SubtractiveLoft.svg) [Loft sottattivo](/PartDesign_SubtractiveLoft/it "PartDesign SubtractiveLoft/it"): crea una forma solida effettuando una transizione tra due o più schizzi e la sottrae dal corpo attivo.

- ![](/images/PartDesign_SubtractivePipe.svg) [Sweep sottrattivo](/PartDesign_SubtractivePipe/it "PartDesign SubtractivePipe/it"): crea una forma solida spostando uno o più schizzi lungo un percorso aperto o chiuso e la sottrae dal corpo attivo.

- ![](/images/PartDesign_SubtractiveHelix.svg) [Elica sottrattiva](/PartDesign_SubtractiveHelix/it "PartDesign SubtractiveHelix/it"): crea una forma solida facendo scorrere uno schizzo lungo un'elica e la sottrae dal corpo attivo.

- ![](/images/PartDesign_SubtractiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Crea una primitiva sottrativa:

: \- ![](/images/PartDesign_SubtractiveBox.svg) [Cubo sottrattivo](/PartDesign_SubtractiveBox/it "PartDesign SubtractiveBox/it"): aggiunge un cubo sottrattivo al corpo attivo.

: \- ![](/images/PartDesign_SubtractiveCylinder.svg) [Cilindro sottattivo](/PartDesign_SubtractiveCylinder/it "PartDesign SubtractiveCylinder/it"): aggiunge un cilindro sottrattivo al corpo attivo.

: \- ![](/images/PartDesign_SubtractiveSphere.svg) [Sfera sottattiva](/PartDesign_SubtractiveSphere/it "PartDesign SubtractiveSphere/it"): aggiunge una sfera sottrattiva al corpo attivo.

: \- ![](/images/PartDesign_SubtractiveCone.svg) [Cono sottrattivo](/PartDesign_SubtractiveCone/it "PartDesign SubtractiveCone/it"): aggiunge un cono sottrattivo al corpo attivo.

: \- ![](/images/PartDesign_SubtractiveEllipsoid.svg) [Ellissoide sottrattivo](/PartDesign_SubtractiveEllipsoid/it "PartDesign SubtractiveEllipsoid/it"): aggiunge un ellissoide sottrattivo al corpo attivo.

: \- ![](/images/PartDesign_SubtractiveTorus.svg) [Toro sottrattivo](/PartDesign_SubtractiveTorus/it "PartDesign SubtractiveTorus/it"): aggiunge un toro sottrattivo al corpo attivo.

: \- ![](/images/PartDesign_SubtractivePrism.svg) [Prisma sottattivo](/PartDesign_SubtractivePrism/it "PartDesign SubtractivePrism/it"): aggiunge un prisma sottrattivo al corpo attivo.

: \- ![](/images/PartDesign_SubtractiveWedge.svg) ‎[Cuneo sottrattivo](/PartDesign_SubtractiveWedge/it "PartDesign SubtractiveWedge/it"): aggiunge un cuneo sottrattivo al corpo attivo.

#### Booleane

- ![](/images/PartDesign_Boolean.svg) [Operazione booleana](/PartDesign_Boolean/it "PartDesign Boolean/it"): importa uno o più Corpi o Cloni PartDesign nel corpo attivo e applica un'operazione booleana.

### Strumenti di abbellimento

Questi strumenti applicano un trattamento ai bordi o alle facce.

- ![](/images/PartDesign_Fillet.svg) [Raccordo](/PartDesign_Fillet/it "PartDesign Fillet/it"): raccorda (arrotonda) i bordi del corpo attivo.

- ![](/images/PartDesign_Chamfer.svg) [Smusso](/PartDesign_Chamfer/it "PartDesign Chamfer/it"): smussa i bordi del corpo attivo.

- ![](/images/PartDesign_Draft.svg) [Sformo](/PartDesign_Draft/it "PartDesign Draft/it"): applica uno sformo angolare alle facce selezionate nel corpo attivo.

- ![](/images/PartDesign_Thickness.svg) [Spessore](/PartDesign_Thickness/it "PartDesign Thickness/it"): crea un guscio di dato spessore dal corpo attivo e apre la faccia o le facce selezionate.

### Strumenti di trasformazione

Questi sono gli strumenti per trasformare le funzioni esistenti.

- ![](/images/PartDesign_Mirrored.svg) [Specchiato](/PartDesign_Mirrored/it "PartDesign Mirrored/it"): rispecchia una o più caratteristiche.

- ![](/images/PartDesign_LinearPattern.svg) [Serie lineare](/PartDesign_LinearPattern/it "PartDesign LinearPattern/it"): crea un modello lineare di una o più funzioni.

- ![](/images/PartDesign_PolarPattern.svg) [Serie polare](/PartDesign_PolarPattern/it "PartDesign PolarPattern/it"): crea una serie polare di una o più funzioni.

- ![](/images/PartDesign_MultiTransform.svg) [Multitrasformazione](/PartDesign_MultiTransform/it "PartDesign MultiTransform/it"): crea un modello combinando una qualsiasi delle trasformazioni sopra menzionate, nonché la trasformazione [Scala](/PartDesign_Scaled/it "PartDesign Scaled/it").
  - ![](/images/PartDesign_Scaled.svg) [Scala](/PartDesign_Scaled/it "PartDesign Scaled/it"): ridimensiona una o più funzioni. Questo non è disponibile come strumento di trasformazione separato.

#### Extra

Alcune funzionalità aggiuntive che si trovano nel menu di Part Design:

- ![](/images/PartDesign_Sprocket.svg) [Pignone](/PartDesign_Sprocket/it "PartDesign Sprocket/it"): crea un profilo del pignone, che può essere estruso.

- ![](/images/PartDesign_InvoluteGear.svg) [Ingranaggio evolvente](/PartDesign_InvoluteGear/it "PartDesign InvoluteGear/it"): crea un profilo ad evolvente d'ingranaggio, che può essere estruso.

- ![](/images/PartDesign_WizardShaft.svg) [Procedura guidata per alberi](/PartDesign_WizardShaft/it "PartDesign WizardShaft/it"): genera un albero da una tabella di valori e consente di analizzare forze e momenti. L'albero è realizzato con uno schizzo ruotato che può essere modificato.

### Elementi del menu contestuale

- [Soppressa](/index.php?title=PartDesign_Suppressed/it&action=edit&redlink=1 "PartDesign Suppressed/it (page does not exist)"): casella di controllo per disabilitare una funzione specifica senza eliminarla. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

- ![](/images/PartDesign_MoveTip.svg) [Imposta punta](/PartDesign_MoveTip/it "PartDesign MoveTip/it"): ridefinisce la punta, che è la caratteristica esposta all'esterno del corpo.

- ![](/images/PartDesign_MoveFeature.svg) [Sposta oggetto in altro corpo](/PartDesign_MoveFeature/it "PartDesign MoveFeature/it"): sposta lo schizzo, la geometria di riferimento o la funzione selezionata in un altro corpo.

- ![](/images/PartDesign_MoveFeatureInTree.svg) [Sposta l'oggetto dopo un altro oggetto](/PartDesign_MoveFeatureInTree/it "PartDesign MoveFeatureInTree/it"): consente il riordino del corpo dell'albero spostando lo schizzo selezionato, la geometria di riferimento o la funzione in un'altra posizione nell'elenco delle funzioni.

#### Elementi condivisi con l'ambiente Part

- ![](/images/Std_SetAppearance.svg)[Aspetto](/Std_SetAppearance/it "Std SetAppearance/it"): determina l'aspetto dell'intera parte (trasparenza del colore ecc.).

- ![](/images/Part_ColorPerFace.svg) [Colore per faccia](/Part_ColorPerFace/it "Part ColorPerFace/it"): assegna i colori alle singole facce degli oggetti.

### Strumenti obsoleti

- ![](/images/PartDesign_Migrate.svg) [Migrazione](/PartDesign_Migrate/it "PartDesign Migrate/it"): migra i file dalle versioni di FreeCAD precedenti alla 0.17 alla versione 0.17. Questo strumento non è disponibile nella versione 1.0 e superiori.

## Preferenze

- ![](/images/Preferences-part_design.svg) [Preferenze](/PartDesign_Preferences/it "PartDesign Preferences/it"): preferenze disponibili negli strumenti PartDesign.
- [Ottimizzare l'installazione](/Fine-tuning/it "Fine-tuning/it"): alcuni parametri extra per ottimizzare il comportamento di PartDesign.

## Tutorial

- [Come usare FreeCAD](http://help-freecad-jpg87.fr/), un sito web che descrive il flusso di lavoro per la progettazione meccanica.
- [Creare una parte semplice con PartDesign](/Creating_a_simple_part_with_PartDesign/it "Creating a simple part with PartDesign/it")
- [Esercitazione di base PartDesign 019](/index.php?title=Basic_Part_Design_Tutorial_019/it&action=edit&redlink=1 "Basic Part Design Tutorial 019/it (page does not exist)")
- [PartDesign Tutorial per i supporti dei cuscinetti I](/PartDesign_Bearingholder_Tutorial_I/it "PartDesign Bearingholder Tutorial I/it") (da aggiornare)
- [PartDesign Tutorial per i supporti dei cuscinetti II](/PartDesign_Bearingholder_Tutorial_II/it "PartDesign Bearingholder Tutorial II/it") (da aggiornare)

## Esempi

Per alcune idee su cosa si può ottenere con gli strumenti di Part Design, dare un'occhiata a: [Esempi di PartDesign](/PartDesign_Examples/it "PartDesign Examples/it").

![](/images/PartDesign_ExampleSphere-02.png)
![](/images/PartDesign_ExampleTorus-01.png)
![](/images/PartDesign_ExamplePad-09.png)
![](/images/PartDesign_ExampleSweep-02.png)
![](/images/PartDesign_ExampleSweep-05.png)
![](/images/PartDesign_ExampleSpring-04.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Workbench/it&oldid=1561898>"
