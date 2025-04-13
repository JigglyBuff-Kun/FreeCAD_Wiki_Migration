---
title: ObjectInfo
---

|                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro ObjectInfo                                                                                                                                                                                                                                                                                                                                                              |
| Popis                                                                                                                                                                                                                                                                                                                                                                         |
| Poskytuje informace o vybraném objektu Version macro : 1.0 Date last modification : 2012-11-09 FreeCAD version : Until 0.17 **and PyQt4** Download : Ово није макро него једна ВоркБенцх, декомпримирајте .зип датотеку и налепите комплетан директоријум у Мод корисничком именику [Info](https://github.com/KeithSloan/FreeCAD_Info/archive/master.zip) Autor: keithsloan52 |
| Autor                                                                                                                                                                                                                                                                                                                                                                         |
| [keithsloan52](/index.php?title=User:Keithsloan52&action=edit&redlink=1 "User:Keithsloan52 (page does not exist)")                                                                                                                                                                                                                                                            |
| Download                                                                                                                                                                                                                                                                                                                                                                      |
| Ово није макро него једна ВоркБенцх, декомпримирајте .зип датотеку и налепите комплетан директоријум у Мод корисничком именику [Info](https://github.com/KeithSloan/FreeCAD_Info/archive/master.zip)                                                                                                                                                                          |
| Odkazy                                                                                                                                                                                                                                                                                                                                                                        |
| [Makro recepty                                                                                                                                                                                                                                                                                                                                                                | ](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze                                                                                                                                                                                                                                                                                                                                                                         |
| 1.0                                                                                                                                                                                                                                                                                                                                                                           |
| Datum poslední úpravy                                                                                                                                                                                                                                                                                                                                                         |
| 2012-11-09                                                                                                                                                                                                                                                                                                                                                                    |
| Verze FreeCAD                                                                                                                                                                                                                                                                                                                                                                 |
| Until 0.17 **and PyQt4**                                                                                                                                                                                                                                                                                                                                                      |
| Výchozí zástupce                                                                                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                                                                                        |
| Viz též                                                                                                                                                                                                                                                                                                                                                                       |
| [Arch Survey](/File:Arch_Survey.svg "Arch Survey") [Arch Survey](/Arch_Survey/cs "Arch Survey/cs")                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                               |

## Description

## Popis

Toto WorkBench vám umožňuje znát informační plochu objemu, střed hmoty a okamžik intertiktury vybraného objektu.

![](/images/ObjectInfoIt.png)

## Instalace

Pokud používáte Linux, musíte vytvořit složku s názvem "Mod" ve skryté složce .FreeCAD, která se nachází ve složce Home. Pak vytvořte složku s názvem "Info" ve složce "Mod" a extrahujte obsah archivu do něj. V systému Windows nemám tušení, kde to bude. Stejný postup použijte v systému Windows C:\Program Files\FreeCAD\Mod.

## Usage

## Jak používat

Pak spusťte aplikaci FreeCAD, otevřete soubor STEP a přejděte na pracovním stole "Info" pomocí přepínače pracovních stolů nebo přejděte do nabídky Zobrazit → Workbench. Nyní vyberte své pevné a klikněte na ikonu "Info"; levý panel úloh zobrazí některé informace o modelu, včetně objemu, plochy povrchu, středu hmotnosti a momentu intertia.

## Kód

```
import webbrowser

##########
# WorkBenche
# Code used to download the zip file from FreeCAD
##########

FreeCAD.Console.PrintMessage("\n" + "You must download the Info.zip file in the author github KeithSloan/FreeCAD_Infosite" + "\n")
FreeCAD.Console.PrintMessage("http://keithsloan.dynu.com/Keith&Jenny/" + "\n")
webbrowser.open("https://github.com/KeithSloan/FreeCAD_Info/archive/master.zip")
```

## Links

## Odkazy

Uživatel FreeCAD vytvořil uživatelsky přívětivý modul "Info", který můžete získat zde: <http://www.sloan-home.co.uk/FreeCAD/Info/Info.html>

Z fóra [Info Workbench - Help with icons please.](http://forum.freecadweb.org/viewtopic.php?f=10&t=3185)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_ObjectInfo/cs&oldid=1345588>"
