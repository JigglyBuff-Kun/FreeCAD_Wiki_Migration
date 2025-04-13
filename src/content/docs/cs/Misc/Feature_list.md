---
title: Seznam charakteristických vlastností
---

Toto je obsáhlý, i když ne kompletní, seznam charakteristických vlastností implementace FreeCADu. Chcete-li se nahlédnout do budoucnosti, podívejte se na [Směry vývoje](/index.php?title=Development_roadmap/cs&action=edit&redlink=1 "Development roadmap/cs (page does not exist)") na rychlý přehled o tom co se očekává. Zajímavé jsou i [Screenshoty](/Screenshots/cs "Screenshots/cs").

## Poznámky k verzím

- [Release 0.11](/Release_notes_0.11 "Release notes 0.11") - Březen 2011
- [Release 0.12](/Release_notes_0.12 "Release notes 0.12") - Prosinec 2011
- [Release 0.13](/Release_notes_0.13 "Release notes 0.13") - Leden 2013

## Klíčové vlastnosti

- ![](/images/Feature1.jpg)

  Založeno na kompletní [Open CASCADE Technologii](http://en.wikipedia.org/wiki/Open_CASCADE) **konstrukčního jádra** umožňujícího komplexní 3D operace na komplexních tvarových typech s nativní podporou konceptů jako jsou B-rep, NURB křivky a povrchy, širokou oblast konstrukčních entit, logických operací a zaoblení a zabudovanou podporu pro STEP a IGES formáty

- ![](/images/Feature3.jpg)

  Plně **parametrický model**. Všechny objekty FreeCADu jsou nativně parametrické, což znamená, že jejich tvar může být založen na [vlastnostech](/Property/cs "Property/cs") nebo dokonce záviset na jiných objektech, všechny změny jsou přepočítávány na požádání a zaznamenávány do undo/redo zásobníku (lze se při kreslení vracet několik kroků zpět nebo vpřed). Snadno mohou bát přidávány nové objektové typy a mohou být dokonce i [plně programovány v Pythonu](/Scripted_objects/cs "Scripted objects/cs")

- ![](/images/Feature4.jpg)

  **Modulární architektura** dovoluje pluginy (moduly) pro přidávání dalších funkcionalit k základní aplikaci. Tato rozšíření mohou být tak komplexní jako jsou celé nové aplikace programované v C++ nabo až tak jednoduché jako jsou [skripty v Pythonu](/Scripting/cs "Scripting/cs") nebo samozaznamenávaná [makra](/Macros/cs "Macros/cs"). Máte kompletní přístup ze zabudovaného interpreteru **Pythonu**, maker nebo externích skriptů k téměř všem částem FreeCADu, jako jsou [vytváření a transformace konstrukcí](/Topological_data_scripting/cs "Topological data scripting/cs"), 2D nebo 3D reprezentace jejich konstrukce ([Scene graph](/Scenegraph/cs "Scenegraph/cs")) nebo i [FreeCAD interface](/PySide/cs "PySide/cs")

- ![](/images/Feature5.jpg)

  Import/export do **standardních formátů** jako jsou [STEP](http://en.wikipedia.org/wiki/ISO_10303), [IGES](http://en.wikipedia.org/wiki/IGES), [OBJ](http://en.wikipedia.org/wiki/Obj), [STL](http://en.wikipedia.org/wiki/STL_%28file_format%29), [DXF](http://en.wikipedia.org/wiki/Dxf), [SVG](http://en.wikipedia.org/wiki/Svg), [STL](<http://en.wikipedia.org/wiki/STL_(file_format)>), [DAE](http://en.wikipedia.org/wiki/COLLADA), [IFC](http://en.wikipedia.org/wiki/Industry_Foundation_Classes) or [OFF](http://people.sc.fsu.edu/~jburkardt/data/off/off.html), [NASTRAN](http://en.wikipedia.org/wiki/NASTRAN), [VRML](http://en.wikipedia.org/wiki/VRML) navíc do nativního FreeCAD [Fcstd formátu](/Fcstd_file_format/cs "Fcstd file format/cs"). Úroveň kompatibility mezi FreeCADem a daným souborovým formátem se může měnit, protože závisí na modulu, který ji implementuje.

- ![](/images/Feature7.jpg)

  [Pracovní plocha Náčrt](/Sketcher_Workbench/cs "Sketcher Workbench/cs") s řídícím programem umožňujícím náčrty konstrukčně výzaných 2D tvarů. Náčrt v současné době umožňuje stavět několik typů vázaných konstrukcí a používat je jako základ pro vytváření dalších objektů prostřednictvím FreeCADu.

- ![](/images/Feature9.jpg)

  [Robotický simulační](/Robot_Workbench/cs "Robot Workbench/cs") modul umožňuje studovat robotické pohyby. Robotický modul již má rozšířený grafický interface, který umožňuje práci i prostřednictvím GUI.

- ![](/images/Feature8.jpg)

  Modul [výkresy](/Drawing_Workbench/cs "Drawing Workbench/cs") dovoluje ukládat 2D pohledy Vašeho 3D modelu na stránky. Tento modul pak vytváří stránky v SVG nebo PDF připravené pro export. Tento modul ještě není dokonalý, ale dává vysokou funkcionalitu v Pythonu.

- ![](/images/Feature-raytracing.jpg)

  [Zobrazovací](/Raytracing_Workbench/cs "Raytracing Workbench/cs") modul může exportovat 3D objekty pro zobrazování v externích renderovacích systémech. V současnosti podporuje pouze [povray](http://en.wikipedia.org/wiki/POV-Ray), ale očekává se, že v budoucnosti bude rozšířen i na další renderery.

- ![](/images/Feature-arch.jpg)

  Modul [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") umožňuje práci podobně jako [BIM](http://en.wikipedia.org/wiki/Building_Information_Modeling), s kompatibilitou s [IFC](http://en.wikipedia.org/wiki/Industry_Foundation_Classes). Tvorba modulu Architektura je intenzivně diskutována komunitou [zde](http://forum.freecadweb.org/viewtopic.php?f=10&t=821).

## Základní charakteristiky

- **FreeCAD je multi-platformní**. Běží a chová se přesně stejně na platformách Windows, Linux i Mac OSX.

- **FreeCAD je plně GUI aplikace**. FreeCAD má kompletní grafické uživatelské rozhraní (GUI) založené na skvělém frameworku [Qt](http://www.qtsoftware.com/) se 3D prohlížečem založeným na [Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor), který umožňuje rychlé zobrazování 3D scén a velmi dostupné grafické zobrazování scén.

- **FreeCAD běží také jako aplikace z příkazové řádky**, s nízkými paměťovými nároky. V módu příkazové řádky běží FreeCAD bez svého rozhraní, ale zachovává si všechny konstrukční nástroje. Může být využit například jako server k vytváření obsahu pro jiné aplikace.

- **FreeCAD může být importován jako [modul Pythonu](/Embedding_FreeCAD/cs "Embedding FreeCAD/cs")**, uvnitř jiných aplikací, které mohou spouštět skripty Pythonu nebo na Pythonovské konzoli. Stejně jako v konzolovém módu není dostupné rozhraní, ale jsou dostupné všechny konstrukční nástroje.

- **Koncept pracovní plochy**: V rozhraní FreeCADu jsou nástroje seskupovány do [pracovních ploch](/Workbenches/cs "Workbenches/cs"). Ty umožňují zobrazovat pouze nástroje, které se budou používat k provedení určité úlohy při udržení pracovní plochy uspořádané a dobře reagující a dovolují rychlé načítání aplikace.

- **Plugin/Module framework pro dodatečné načítání dalších vlastností nebo datových typů**. FreeCAD je rozdělen na jádro aplikace a moduly, které jsou načítány podle potřeby. Téměř všechny nástroje a konstrukční typy jsou uloženy v modulech. Moduly se chovají jako pluginy a mohou být přidávány nebo odebírány z existující instalace FreeCADu.

- **Parametrické asociativní objekty documentu**: Všechny objekty v dokumentu FreeCADu mohou být definovány pomocí parametrů. Tyto parametry mohou být za běhu měněny a kdykoliv přepočítávány. Ukládány jsou i vztahy mezi objekty, takže úprava jednoho objektu modifikuje i závislé objekty.

- **Vytváření parametrických primitiv** (krychle, koule, válec, atd.)

- Grafické **modifikační operace** jako jsou transformace, rotace, změna velikosti, zrcadlení, posun (triviální nebo podle [Jung/Shin/Choi](http://www.ann.jussieu.fr/~frey/papers/meshing/Jung%20W.,%20Self-intersection%20removal%20in%20triangular%20mesh%20offsetting.pdf)) nebo tvarové konverze v jakékoliv rovině 3D prostoru.

- **[Logické operace](http://en.wikipedia.org/wiki/Constructive_solid_geometry)** (sjednocení, rozdíl, průnik)

- Gragické vytváření **jednoduchých rovinných konstrukcí** jako jsou přímky, dráty (lomené čáry), obdélníky, oblouky nebo kružnice v jakékoliv rovině 3D prostoru

- Modelování přímých nebo rotačních **vysunutí**, **řezů** a **zaoblení**.

- Topologické komponenty jako jsou **vrcholy, hrany, dráty** a **roviny** (pomocí skriptování v Pythonu).

- **Testovací a opravné** nástroje pro sítě: test na těleso, non-two-manifolds test, test na protínání sama sebe, uzavírání mezer a stejná orientace.

- **Popisky** jako texty nebo kóty

- **Undo/Redo framework**: Všechno je undo/redo (kroky zpět nebo vpřed při práci s objekty), s přístupem so zásobníku undo (dříve provedené operace), takže je možné udělat najednou více kroků zpět.

- **Transakční management**: Zásobník undo/redo ukládá celé transakce dokumentu a ne jednotlivé akce, což umožňuje každému nástroji definovat přesně to co se musí undone or redone (uděláno při krocích zpět nebo vpřed).

- **Zabudovaný [skriptovací](/Scripting/cs "Scripting/cs") framework**: FreeCAD zahrnuje zabudovaný interpreter [Pythonu](http://www.python.org/) a API, které pokrývá téměř všechny části aplikace, rozhraní, konstrukce a reprezentace konstrukcí ve 3D prohlížeči. Interpreter může spouštět od jednotlivých příkazů až po komplexní skripty, ve skutečnosti mohou být i celé moduly programovány kompletně v Pythonu.

- **Zabudovaná konzola Pythonu** se zvýrazněnou syntaxí, automatickým doplňováním a prohlížečem tříd: Příkazy Pythonu mohou být zadávány přímo ve FreeCADu a ihned vrací výsledky, dovolující autorům skriptů testovat funkcionalitu za běhu skriptu, prohlížet obsah modulů a snadno zjišťovat interní údaje FreeCADu.

- **Odraz uživatelského dialogu na konsoli**: Všechno co uživatel udělá v rozhraní FreeCADu provádí kód Pythonu, který může být tištěn na konzoli a zaznamenáván do maker.

- **Plné zaznamenávání & editování maker**: Výstupy Pythonovských příkazů, které vycházejí z uživatelské činnosti mohou být zaznamenávány, podle potřeby upravovány a ukládány pro pozdější použití.

- **Složený formát dokumentu (založený na ZIPu) pro ukládání**: Dokument FreeCADu uložený s příponou .[fcstd](/Fcstd_file_format/cs "Fcstd file format/cs") může obsahovat mnoho různých typů informací, jako jsou konstrukce, skripty nebo ikony náhledů obrázků.

- **Plně upravitelné/skriptovatelné uživatelské grafické rozhraní GUI (Graphical User Interface)**. Rozhraní FreeCADu založené na [Qt](http://www.qtsoftware.com) je zcela přístupné přes interpreter Pythonu. Kromě jednoduchých funkcí které FreeCAD sám poskytuje pracovním plochám je přístupný celý framework Qt, který umožňuje libovolné operace v GUI, jako je vytváření, přidávání, usazování, úpravy nebo odstraňování pomůcek a pruhů nástrojů.

- **Vytváření ikon dokumentů** (dostupné zatím pouze na systémech Linux): Ikony dokumentů FreeCADu ukazují obsah souborů ve většině souborových manažerů jako je třeba Nautilus v GNOME.

- **Modulární MSI installer** umožňuje flexibilní instalace na systémech Windows. Udržovány jsou také balíčky pro Ubuntu.

## Extra Workbenches

Power users have created various custom [external workbenches](/External_workbenches "External workbenches").

Retrieved from "<http://wiki.freecad.org/index.php?title=Feature_list/cs&oldid=1456933>"
