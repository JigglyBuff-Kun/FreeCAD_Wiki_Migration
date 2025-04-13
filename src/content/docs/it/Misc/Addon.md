---
title: Addon
---
## Introduzione

In FreeCAD e in questa documentazione, un addon è un componente che non fa parte dell'installazione di base di FreeCAD, ma che può essere aggiunto al sistema con determinati metodi.

## I diversi tipi

Esistono tre tipi di componenti aggiuntivi:

* Le [Macro](/Macros/it "Macros/it"): brevi frammenti di codice [Python](/Python/it "Python/it") che forniscono un nuovo strumento o funzionalità in un singolo file che termina con `.FCMacro`.
* Gli [Ambienti](/External_workbenches/it "External workbenches/it"): raccolte di file Python che forniscono [comandi GUI](/Gui_Command/it "Gui Command/it") (strumenti) correlati, centrati su un argomento particolare, ad esempio strumenti per progettare cabine o strumenti per lavorare con l'architettura o strumenti per progettare barche, ecc. Questi ambienti di lavoro di solito definiscono nuove barre degli strumenti in cui sono posizionati i pulsanti dei [comandi](/Gui_Command/it "Gui Command/it").
* [Pacchetti Preferenze](/Preference_Packs/it "Preference Packs/it"): raccolte distribuibili di preferenze utente. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

## Installazione

Il modo consigliato per installare i componenti aggiuntivi è con l'![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it").

Ma per le macro e gli ambienti di lavoro è anche possibile l'installazione manuale:

* [Come installare le macro](/How_to_install_macros/it "How to install macros/it")
* [Installare ambienti aggiuntivi](/Installing_more_workbenches/it "Installing more workbenches/it")

## Informazioni per gli sviluppatori

Se avete sviluppato un workbench o una macro e volete vederlo incluso in Addon manager, leggete come farlo nelle pagine del repository ([FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons/) e [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros/)). Se aggiungete la vostra macro a [Raccolta di macro](/Macros_recipes "Macros recipes"), non dovete fare nient'altro, essa verrà automaticamente selezionata da Addon manager.

Vedere anche:

* [Distribuzione di un workbench Python](/Workbench_creation/it#Distribuzione "Workbench creation/it")
* [Distribuzione di un workbench C++](/Workbench_creation/it#Distribuzione_2 "Workbench creation/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Addon/it&oldid=1276959>"