---
title: Arch File IFC
---

## Descrizione

L'Ambiente ![](/images/Workbench_BIM.svg) [BIM](/BIM_Workbench/it "BIM Workbench/it") fornisce un importatore esportatore [Industry Foundation Classes (IFC)](http://en.wikipedia.org/wiki/Industry_Foundation_Classes). Il formato IFC è un formato sempre più diffuso per scambiare dati tra le applicazioni [BIM](http://en.wikipedia.org/wiki/Building_Information_Modeling), utilizzato in architettura e in ingegneria.

Read more about handling IFC files in FreeCAD on the [Native IFC](/Native_IFC "Native IFC") page.

#### IfcOpenShell

Sia l'importatore che l'esportatore dipendono dalla libreria [IfcOpenShell](/IfcOpenShell/it "IfcOpenShell/it"), che è inclusa in alcune distribuzioni di FreeCAD. Un modo semplice per verificare se IfcOpenShell è presente e disponibile, è provare a importare o esportare un file IFC o semplicemente inserire quanto segue nella [console Python](/Python_console/it "Python console/it") di FreeCAD (che si attiva dal menu Visualizza → Pannelli):

```
import ifcopenshell

```

Se non viene visualizzato alcun messaggio di errore, IfcOpenShell è installato correttamente, e si può procedere con l'[importazione](/Std_Import/it "Std Import/it") dei file IFC. Altrimenti, bisogna installarlo; leggere la pagina [IfcOpenShell](/IfcOpenShell/it "IfcOpenShell/it") per saperne di più su questo processo.

_Nota:_ lo strumento ![](/images/BIM_Setup.svg) [BIM Setup](/BIM_Setup/it "BIM Setup/it") cerca IfcOpenShell ed emette una notifica se non è installato.

## Importazione

Starting from version 1.0, FreeCAD opens and imports IFC files natively. Read more on the [NativeIFC](/NativeIFC "NativeIFC") page.

### Older importers

#### The Arch importer

The original IFC importer from the Arch Workbench has been disabled in FreeCAD version 1.0, but is still available from Python:

```
from importers import importIFC
importIFC.open("C:\\Path\\To\\My\\File.ifc")

```

Nel documento di FreeCAD sono importate dai file IFC2x3 o IFC4 tutte le entità basate su [IfcProduct](http://www.buildingsmart-tech.org/ifc/IFC4/Add1/html/schema/ifckernel/lexical/ifcproduct.htm). Le impostazioni delle preferenze IFC consentono di impostare il modo di importazione degli oggetti IFC:

- **Oggetti Arch completamente parametrici**, la geometria sarà, per quanto possibile, modificabile in FreeCAD
- **Oggetti Arch non parametrici**, gli oggetti porteranno informazioni e proprietà IFC ma non saranno modificabili
- **Forme di Part non parametriche**, la geometria verrà riprodotta fedelmente ma le informazioni IFC verranno scartate
- **Una forma di Part per ogni piano**, una forma tutta in un oggetto, solo per riferimento

Ognuno di questi tipi perde alcune informazioni rispetto a quello precedente, ma richiede meno risorse, e questo permette di aprire file più grandi. Un ultimo tipo permette di scartare in blocco l'importazione di oggetti Arch, ed è utile per i modelli analitici strutturali.

In genere, se si prova ad aprire un file di grandi dimensioni e FreeCAD impiega troppo tempo per importarlo, provare con una modalità di importazione di grado inferiore.

IfcOpenShell supporta tutte le entità IFC2x3 e IFC4 (IFC4-add1 e IFC4-add2 sono in fase di implementazione nella v0.6 e potrebbero essere disponibili al momento della lettura), ma non tutte le entità possono essere convertite in oggetti [Arch](/Arch_Workbench/it "Arch Workbench/it"), quelle che non possono essere convertite sono importate come semplici forme [Part](/Part_Workbench/it "Part Workbench/it"). L'importatore IFC inizia importando tutte le entità IFC derivate da [IfcProduct](http://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/TC1/HTML/ifckernel/lexical/ifcprodrod.htm), ovvero, sostanzialmente, tutti gli oggetti che compongono un edificio, come pareti o finestre o tubi. Tutte le altre entità necessarie a uno di questi oggetti, come profili di estrusione o componenti di operazioni booleane, sono importate quando sono necessarie.

Se si utilizza una modalità di importazione che utilizza oggetti Arch, parametrici o meno, tutti gli oggetti porteranno il set completo di [ifcproperty.htm IfcProperties](http://www.buildingsmart-tech.org/ifc/IFC4/Add1/html/schema/ifcpropertyresource/lexical/) collegato a ciascun oggetto, raggruppato per Set di proprietà.

Le strutture di edifici come siti, edifici e piani vengono importate fedelmente e la struttura viene ricreata correttamente in FreeCAD. Anche le strutture di gruppo (usando IfcGroups) sono importate e renderizzate in FreeCAD e possono essere combinate con strutture di edifici, ad esempio si possono avere gruppi all'interno di piani o piani all'interno di gruppi.

Sono anche importati gli oggetti [IfcAnnotation](http://www.buildingsmart-tech.org/ifc/IFC4/Add1/html/schema/ifcproductextension/lexical/ifcannotation.htm), così come le entità lineari e curve basate su [IfcStructuralItem](http://www.buildingsmart-tech.org/ifc/IFC4/Add1/html/schema/ifcstructuralanalysisdomain/lexical/ifcstructuralitem.htm).

Le quantità specificate nel file IFC **NON** vengono importate. Tuttavia, poiché la geometria viene completamente ricreata in FreeCAD, la maggior parte delle quantità per ogni oggetto come lunghezza, area, ecc. sono facilmente ottenibili.

Attivando **mostra i messaggi di debug** nelle impostazioni delle preferenze IFC viene stampato un rapporto che indica se l'importazione di un oggetto dal file IFC non è riuscita.

**Nota**: l'ambiente BIM contiene lo strumento [IFC explorer](/BIM_IfcExplorer/it "BIM IfcExplorer/it") che consente di aprire un file IFC in modalità veloce, solo testo, e di importare solo le parti desiderate.

#### The legacy importer

_Nota 2:_ In passato (2013) Arch utilizzava un importatore IFC più semplice che non dipende da IfcOpenShell. Questo vecchio modulo è ancora incluso nel codice sorgente ma a partire dalla v0.19 non è affatto raccomandato; è in grado di importare solo un piccolo sottoinsieme di oggetti IFC e dovrebbe essere considerato completamente obsoleto.

The legacy importer can be used from Python:

```
from importers import importIFClegacy
importIFClegacy.open("C:\\Path\\To\\My\\File.ifc")

```

## Exportazione

L'esportazione in IFC esporta tutti gli oggetti selezionati e i loro discendenti. Sono supportati tutti gli oggetti Arch e BIM, così come altri oggetti creati in altri ambienti. Al momento, gli unici oggetti non completamente supportati sono i ![](/images/PartDesign_Body.svg) [corpi PartDesign](/PartDesign_Body/it "PartDesign Body/it"), le ![](/images/Std_Part.svg) [Parti standard](/Std_Part/it "Std Part/it") e le nuove strutture come i ![](/images/Link.svg) [Link](/Std_LinkMake/it "Std LinkMake/it") e i ![](/images/LinkGroup.svg) Gruppi di link, quindi è necessario fare ualcune prove se si usano. I [Riferimenti Arch](/Arch_Reference/it "Arch Reference/it") attualmente sono esportati come `IfcBuildingElementProxies`.

Per esportare un intero sito o edificio o un intero piano o un gruppo contenente altri oggetti, basta selezionare quell'edificio o piano o gruppo. Gli oggetti Arch verranno esportati con il tipo impostato nella proprietà "Tipo IFC". Vengono esportati anche le loro [IfcProperties](http://www.buildingsmart-tech.org/ifc/IFC4/Add1/html/schema/ifcpropertyresource/lexical/ifcproperty.htm) e se questi oggetti hanno un UID IFC da una precedente importazione, all'esportazione viene mantenuto lo stesso UID. Gli oggetti che non sono oggetti Arch vengono esportati come [IfcBuildingElementProxy](http://www.buildingsmart-tech.org/ifc/IFC4/Add1/html/schema/ifcsharedbldgelements/lexical/ifcbuildingelementproxy.htm).

I file IFC vengono esportati come IFC2x3 o IFC4, a seconda della versione di IfcOpenShell, che può essere compilato con qualsiasi degli schemi IFC. Se si utilizza IfcOpenShell v0.6 o versioni successive, viene utilizzata la versione IFC specificata nelle preferenze di Arch.

Se la forma degli oggetti esportati si basa su una estrusione o una operazione booleana, le operazioni ed i componenti sono esportati correttamente nel IFC. In caso contrario, la forma dell'oggetto viene esportata come [IfcFacetedBrep](http://www.buildingsmart-tech.org/ifc/IFC4x1/html/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm). Se la forma contiene delle curve, esse vengono triangolate. IfcOpenShell v0.5 o versione successiva presenta un serializzatore, che deve essere abilitato nelle preferenze Importa / Esporta → IFC. Se abilitato, questo serializzatore è in grado di esportare oggetti curvi molto complessi come quelli basati su NURBS, evitando così facce triangolate. Al momento della stesura, tuttavia, poche altre applicazioni BIM supportano gli oggetti IFC NURBS, quindi è consigliabile eseguire un po' di test.

## Ulteriori informazioni

- [IfcOpenShell](/IfcOpenShell/it "IfcOpenShell/it"), ulteriori informazioni sull'installazione di questa libreria.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_IFC/it&oldid=1545522>"
