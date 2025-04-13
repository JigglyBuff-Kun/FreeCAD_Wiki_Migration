---
title: Makra
---
## Introduction

Makra jsou pohodlný způsob jak provádět komplexní akce ve FreeCADu. Můžete jednoduše zaznamenat operace tak jak jste je prováděli, potom je uložit pod nějakým jménem a kdykoliv později je znovu spouštět. Vzhledem k tomu, že makra jsou ve skutečnosti jen seznamy příkazů Pythonu, můžete je upravovat a vytvářet velmi komplexní skripty.

While Python scripts normally have the `.py` extension, FreeCAD macros should have the `.FCMacro` extension. A collection of macros written by experienced users is found in the [macros recipes](/Macros_recipes "Macros recipes") page.

See the [Power users hub](/Power_users_hub "Power users hub") to learn more about the [Python](/Python "Python") programming language, and about writing macros. In particular, you should start with these pages:

* [Introduction to Python](/Introduction_to_Python "Introduction to Python")
* [Python scripting tutorial](/Python_scripting_tutorial "Python scripting tutorial")
* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics")

### Jak to funguje

Když povolíte výstup na konzolu (Menu Úpravy -> Předvolby -> Obecné -> Makra -> Zobraz skriptovací příkazy v konzole Pythonu), uvidíte ve FreeCADu, že každá operace, kterou provedete, jako je stisk tlačítka, zobrazí na výstupu příslušný příkaz Pythonu. Tyto příkazy jsou to, co se ukládá v makru. Hlavní nástroj pro vytváření maker je pruh nástrojů maker: ![](/images/Macros_toolbar.jpg). Na něm jsou 4 tlačítka: Spustit záznam, Zastavit záznam, Upravit makro a Spustit aktuální makro.

Enable the console output in the menu **Edit → Preferences → Python → Macro → Show scripts commands in python console**. You will see that in FreeCAD, every action you do, such as pressing a button, outputs a Python command. Those commands are what can be recorded in a macro. The main tool for making macros is the macros toolbar: ![](/images/Macros_toolbar.jpg). On it you have 4 buttons: Record, stop recording, edit and play the current macro.

Použití je velmi jednoduché: Stisknete tlačítko Spustit záznam, nejdříve zadáte jméno makra a potom provádíte požadované operace. Když jste hotovi, kliknete ma Zastavit záznam a provedené operace budou uloženy. Nyní máte přístupný i editovací režim pod tlačítkem Upravit záznam:

![](/images/Macros.png)

Macro dialog, listing the macros available in the system

V tom můžete pracovat s makrem, můžete je smazat, upravovat nebo vytvářet zcela nové. Když makro upravujete, bude otevřeno v editovacím okně, kde můžete dělat změny v jeho kódu.

### Příklad

Stiskněte tlačítko Spustit záznam a zadejte jméno makra, třeba "Válec 10x10", potom v [pracovní ploše Díl](/Part_Workbench/cs "Part Workbench/cs"), vytvořte válec s poloměrem = 10 a výškou = 10. Potom stiskněte tlačítko Zastavit záznam. V dialogu pro úpravu makra vidíte kód Pythonu, který byl zaznamenán a když chcete můžete v něm udělat změny. Chcete-li makro spustit, jednoduše stiskněte tlačítko Spustit makro v nástrojovém pruhu, když je makro v editovacím okně. Makro je vždy uloženo na disk, takže každá změna makra nebo nové makro bude vždy znovu dostupné při příštím spuštění FreeCADu.

Press the record button, give a name, let's say "cylinder 10x10", then, in the [Part Workbench](/Part_Workbench "Part Workbench"), create a cylinder with radius = 10 and height = 10. Then, press the "stop recording" button. In the edit macros dialog, you can see the python code that has been recorded, and, if you want, make alterations to it. To execute your macro, simply press the execute button on the toolbar while your macro is in the editor. You macro is always saved to disk, so any change you make, or any new macro you create, will always be available next time you start FreeCAD.

### Přizpůsobení

Samozřejmě, že není praktické natahovat makro do editoru vždy, když je chcete použít. FreeCAD nabízí mnohem lepší způsoby pro použití makra, jako jsou třeba klávesové zkratky nebo vložení makra do menu. Když už je makro vytvořeno, můžete takové úpravy udělat přes Nástroje -> Přizpůsobení menu:

Of course it is not practical to load a macro in the editor in order to use it. FreeCAD provides much better ways to use your macro, such as assigning a keyboard shortcut to it or putting an entry in the menu. Once your macro is created, all this can be done via the **Tools → Customize** menu.

![](/images/Macros_config.jpg)

Tímto způsobem se z makra stane skutečný nástroj, stejný jako jsou standardní nástroje FreeCADu. Tím lze přidat sílu skriptů Pythonu do FreeCADu a usnadňuje přidávat Vaše vlastní nástroje do oken. Přečtěte si stránku [Skriptování](/Scripting/cs "Scripting/cs"), jestli chcete vědět víc o skriptování v Pythonu.

See [Customize Toolbars](/Customize_Toolbars "Customize Toolbars") for a more detailed description.

### Vytváření maker bez záznamu

Můžete také přímo kopírovat/vkládat kód Pythonu do makra, bez zaznamenávání operací z okna. Jednoduše vytvořte nové makro, upravte jej a vložte Váš kód. Makro můžete uložit stejným způsobem jako ukládáte dokument FreeCADu. Při příštím spuštění FreeCADu se makro objeví pod položkou "Instalovaná makra" v menu Makro.

You can also directly copy/paste python code into a macro, without recording GUI action. Simply create a new macro, edit it, and paste your code. You can then save your macro the same way as you save a FreeCAD document. Next time you start FreeCAD, the macro will appear under the "Installed Macros" item of the Macro menu.

See [How to install macros](/How_to_install_macros "How to install macros") for a more detailed description.

### Repozitář maker

Podívejte se na stránku [Návody pro makra](/Macros_recipes/cs "Macros recipes/cs"), kde najdete několik užitečných maker, která jsou přiložena k instalaci FreeCAD.

There are two main places for macros. The first one is the official peer-reviewed macro repository on [GitHub](https://github.com/FreeCAD/FreeCAD-macros). The second one is the [Macros recipes](/Macros_recipes "Macros recipes") page from which you can pick some useful macros to add to your FreeCAD installation. Macros from both repositories can be installed via the [Addon Manager](/Std_AddonMgr "Std AddonMgr") directly from FreeCAD.

## Additional information

* [Automatically run macro at startup](/Macro_at_Startup "Macro at Startup")
* [Installing more workbenches](/Installing_more_workbenches "Installing more workbenches")

## Tutorials

You can manually install extensions, however, it is much simpler to just use the [Addon Manager](/Std_AddonMgr "Std AddonMgr").

* [How to install macros](/How_to_install_macros "How to install macros")
* [How to install additional workbenches](/How_to_install_additional_workbenches "How to install additional workbenches")

Retrieved from "<http://wiki.freecad.org/index.php?title=Macros/cs&oldid=1296746>"