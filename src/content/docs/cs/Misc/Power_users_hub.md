---
title: Centrum pokročilého uživatele
---
![](/images/Power_user_hub.png)

---

Toto je místo kam jdete, pokud máte zájem o hlubší nahlédnutí do FreeCADu. Zde se můžete dozvědět více o přizpůsobení FreeCADu pro Vaše potřeby.

Jedna z nejlepších vlastností FreeCADu je, že můžete skriptovat a značně rozšiřovat jeho možnosti bez nutnosti cokoliv kompilovat nebo sahat do zdrojového kódu. Všechny tyto skriptové části jsou dělány v [Pythonu](http://en.wikipedia.org/wiki/Python_(programming_language)), velice mocném a zároveň jednoduchém programovacím jazyce. Pomocí jednoduchých Pythonovský skriptů máte úplný přístup ke všem částem FreeCADu. Například můžete:

* **Vytvářet a upravovat konstrukce**: Je nějaký druh speciálního objektu, který není přítomen v instalaci FreeCADu? Můžete snadno vytvořit nový typ objektu, buď z náčrtu nebo přizpůsobením existujícího typu.
* **Vytváření uživatelských nástrojů a příkazů**: V této době má FreeCAD už hodně širokou funkcionalitu, ale není zde zatím mnoho nástrojů a příkazů pro koncové uživatele. Ale je jednoduché vytvořit Váši vlastní sbírku nástrojů.
* **Úprava interface**: Uživatelský interface FreeCADu je zatím docela strohý. Ale máte zde vše co potřebujete pro jeho vylepšení. Například můžete vytvářet pruhy nástrojů s Vašimi vlastními nástroji, vytvářet speciální panely pro interakce s Vašimi nástroji, atd.
* **Úpravy reprezentace úloh**: FreeCAD má samostatné procesy pro vytváření a počítání konstrukcí a zobrazování konstrukcí na obrazovce. Máte plný přístup ke způsobu jak je obsah úlohy zobrazován na obrazovce, proto můžete měnit toto zobrazování a ovlivňovat je nebo přidávat všechny druhy uživatelského chování a widgetů, jako informace, přetahování, odkazování nebo dočasné entity.

Tyto stránky jsou zatím v ranném vývoji. Nemůžete-li najít informace, které hledáte nebo jste našli informace, na které zatím nemáme odkazy, přidejte prosím komentář na [diskusní stránce](/Talk:Power_users_hub "Talk:Power users hub") a nebo  [sem sami přidejte nějaké další komentáře!](/Help_FreeCAD/cs "Help FreeCAD/cs")

## Přizpůsobování FreeCADu

* [Přizpůsobení interface](/Interface_Customization/cs "Interface Customization/cs"): Od začátku: Nástrojové pruhy a klávesové zkratky
* [Práce s makry](/Macros/cs "Macros/cs"): Pohodlný záznam často opakovaných úloh nebo Pythonovského kódu

## Skriptování ve FreeCADu

### General

### Obecně

* [Úvod do Pythonu](/Introduction_to_Python/cs "Introduction to Python/cs") - Podívejte se na další výukové programy Pythonu na konci této stránky
* [Výukový program skriptování FreeCADu](/Python_scripting_tutorial/cs "Python scripting tutorial/cs") - Obecný pohled na skriptování ve FreeCADu
* [Základy skriptování ve FreeCADu](/FreeCAD_Scripting_Basics/cs "FreeCAD Scripting Basics/cs"): Ano, základy ...
* [Příkazy GUI](/Gui_Command/cs "Gui Command/cs") : Přidávání uživatelských příkazů do GUI (Grafický uživatelský interface)
* Použití různých [jednotek](/Units/cs "Units/cs") ve FreeCADu

### Modules

The functionality of FreeCAD is separated in Modules which deal with special data types and applications. FreeCAD has built-in modules and Extension Modules (plug-ins). Once plugin modules are installed, they become availible to you as easily as the built-in modules. The modules described below are the default modules, includeed in every FreeCAD installation.

* The [Builtin modules](/Builtin_modules "Builtin modules") are the principal FreeCAD modules. They contain tools for manipulating general FreeCAD configurations, documents and their contents.
* [Workbench creation](/Workbench_creation "Workbench creation") shows you how to create your own workbench

#### Working with Meshes

### Práce se Sítěmi

* [Skriptování sítí](/Mesh_Scripting/cs "Mesh Scripting/cs"): Jak spolupracovat s [Modulem Sítě](/Mesh_Workbench/cs "Mesh Workbench/cs")

#### Working with Parts

### Práce s Díly

* [Modul díl](/Part_Workbench/cs "Part Workbench/cs"): Jak jsou použity nástroje a struktura [technologie Open CASCADE](http://en.wikipedia.org/wiki/Open_CASCADE) ve FreeCADu
* [Skriptování topologických dat](/Topological_data_scripting/cs "Topological data scripting/cs"): Jak spolupracovat s modulem Díl
* [PythonOCC](/PythonOCC/cs "PythonOCC/cs"): Jak využít celou sílu Open CASCADE
* [Síť do Dílu](/Mesh_to_Part/cs "Mesh to Part/cs"): Konverze mezi typy objektů

#### Accessing the Coin scenegraph

### Přístup k zobrazovači Coin

* [The Coin/Inventor scenegraph](/Scenegraph/cs "Scenegraph/cs"): Jak funguje zobrazování úlohy ve FreeCADu
* [Pivy/cs](/Pivy/cs "Pivy/cs"): Jak zpřístupnit a upravovat zobrazení úlohy

### Controlling the Qt interface

### Řízení rozhraní Qt

* [PySide/cs](/PySide/cs "PySide/cs"): Jak přistupovat k interface a upravovat jeho obsah
* [Použití GUI FreeCADu](/Embedding_FreeCADGui/cs "Embedding FreeCADGui/cs") v jiné Qt aplikaci s PyQt

### Práce s parametrickými objekty

* [Skriptované objekty](/Scripted_objects/cs "Scripted objects/cs"): Jak vytvořit 100% Pythonovsky skriptovaný objekt ve FreeCADu
* [Modul Kreslení](/Drawing_Workbench/cs "Drawing Workbench/cs"): Automatizace procesů 3D-do-2D

* [Scripted objects](/Scripted_objects "Scripted objects"): how to make 100% Python-scripted objects.
  + [Scripted objects with attachment](/Scripted_objects_with_attachment "Scripted objects with attachment"): how to make scripted objects attachable to other objects.
  + [Scripted objects saving attributes](/Scripted_objects_saving_attributes "Scripted objects saving attributes"): how to save and restore attributes of the proxy class with `dumps` and `loads`.
  + [Scripted objects migration](/Scripted_objects_migration "Scripted objects migration"): how to migrate old scripted objects to a new class.

### Examples

### Příklady

* [Ukázky kódu](/Code_snippets/cs "Code snippets/cs") : Sbírka kousků Pythonovských skriptů ve FreeCADu, které mohou sloužít jako části Vašich skriptů...
* [Funkce kreslení přímky](/Line_drawing_function/cs "Line drawing function/cs"): Jak vytvořit jednoduchý nástroj pro kreslení přímek
* [Vytváření dialogového okna](/Dialog_creation/cs "Dialog creation/cs"): Jak vytvořit dialogové okno pomocí designeru Qt a použít je ve FreeCADu
* [Vkládání FreeCADu](/Embedding_FreeCAD/cs "Embedding FreeCAD/cs"): Jak importovat FreeCAD jako Pythonovský modul do jiných aplikací
* [Modul Kreslení](/Draft_Workbench/cs "Draft Workbench/cs") přidává základní 2D kreslicí funkce do FreeCADu. Je plně napsán v Pythonu, takže to může být dobrý příklad, když chcete napsat Vaše vlastní moduly
* [Knihovna vektorové matematiky FreeCADu](/FreeCAD_vector_math_library/cs "FreeCAD vector math library/cs") : Pár šikovných funkcí pro práci s vektory ve FreeCADu. Tato knihovna je také včleněna do modulu Kreslení.

## Funkce API

Kompletní popis API lze nalézt [zde](/Category:API "Category:API"). Připomínám, že může být nekompletní, protože jsme zatím nenašli způsob jak je automaticky začlenit do této wiki. Pro přesnější informace se podívejte na moduly přímo z FreeCADu.

Related: [Exposing C++ to Python](/Exposing_C%2B%2B_to_Python "Exposing C++ to Python")

## Pokročilé úpravy

* [Spuštění a konfigurace](/Start_up_and_Configuration/cs "Start up and Configuration/cs"): Spuštění a volby příkazové řádky
* [Instalace na Windows](/Installing_on_Windows/cs "Installing on Windows/cs"): Použití instalátoru Windows
* [Kompilování FreeCADu na Windowsech](/Compile_on_Windows/cs "Compile on Windows/cs") a [Kompilování FreeCAD na Unixu](/Compile_on_Linux/cs "Compile on Linux/cs")
* [Práva na značku](/Branding/cs "Branding/cs"): Můžet dělat jednoduché úpravy zdrojového kódu a měnit některé aspekty FreeCADu
* [Extra moduly Pythonu](/Extra_python_modules/cs "Extra python modules/cs") : Rozšiřuje Pythonovský interpreter FreeCADu těmito výkonnými moduly!

## Výukový program Pythonu

Jsou to dobré obecné výukové programy, které nejsou specifické pro FreeCAD, mohou Vás zajímat jste-li v Pythonu úplný nováček.

**Python**

* [Oficiální výukový program Pythonu](http://docs.python.org/tut/tut.html) - Velmi kompletní výukový program pro objevování Pythonu
* [Neprogramátorský výukový program pro Python](http://en.wikibooks.org/wiki/Non-Programmer%27s_Tutorial_for_Python) - excelentní wikibook
* [Python pro nováčky](http://npt.cc.rsu.ru/user/wanderer/ODP/Python_for_Newbies.htm) - jeden velký výukový program pokrývající všechy základní věci Pythonu

**PyQt** - Jak vytvořit a řídit Qt UI FreeCADu z Pythonu

* [Základní výukový program PyQt](http://www.cs.usfca.edu/~afedosov/qttut/) : Jednoduchý a krátký výukový program založený na Linuxu, který vysvětlí jak pracovat s PyQt a Qt Designerem
* [První programy v PyQt4](http://zetcode.com/tutorials/pyqt4/firstprograms/) : Multiplatformní výukový program ukazující vnitřnosti Pythonu + Qt
* [Programování Qt aplikací v Pythonu](http://vizzzion.org/?id=pyqt) : Další hloubkový výukový program pokrývající všechny procesy pracující s Qt a Pythonem.

The following two references are PyQt specific (not PySide) but may offer some information of use:

* [Basic PyQt tutorial](http://www.cs.usfca.edu/~afedosov/qttut/) : A simple and short linux-based tutorial that will explain how to work with PyQt and Qt Designer
* [Programming Qt applications in python](http://vizzzion.org/?id=pyqt) : A more in-depth tutorial covering all the process of working with qt and python

**Pivy** - Jak nakládat se 3D zobrazením ve FreeCADu

* [Základní výukový program Pivy](http://pivy.coin3d.org/documentation/pycon) : Velmi jednoduchý výukový program z oficiálních stránek Pivy
* [Introducing Pivy into studierstube](http://www.google.com.br/url?sa=U&start=3&q=http://studierstube.icg.tu-graz.ac.at/doc/pdf/PivyStudierstubeTutorial.pdf&ei=XyC1Sc2wOeCKmQem_eHnBQ&usg=AFQjCNEYhb-0DcUc6OxFVijAe1epBb-4aA) : Dokument, který není ve skutečnosti výukovým programem, ale velmi dobře ilustruje jak Pivy funguje

## Komunitní projekty

Na [komunitním portalu](/FreeCAD_Community_Portal "FreeCAD Community Portal") najdete další projekty založené na FreeCADu vytvořené členy komunity. Když začnete nový projekt ve FreeCADu, určitě ho přidejte sem! Máme také stránku kde najdete věci, které můžete dělat pokud byste měli zájem [pomoci FreeCADu](/Help_FreeCAD/cs "Help FreeCAD/cs").

Retrieved from "<http://wiki.freecad.org/index.php?title=Power_users_hub/cs&oldid=1463662>"