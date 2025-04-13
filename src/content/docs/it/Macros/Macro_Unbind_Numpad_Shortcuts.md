---
title: Annulla collegamenti al tastierino numerico
---

|                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Annulla collegamenti al tastierino numerico                                                                                                                                                                                                                                                                                                                     |
| Descrizione                                                                                                                                                                                                                                                                                                                                                     |
| Riassocia i comandi di visualizzazione standard dai tasti numerici a Ctrl + digit, in modo che non ruotino la vista per errore durante l'immissione dei numeri. Versione macro: 2.0 Ultima modifica: 2022-04-13 Versione FreeCAD: 0.20 Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_Unbind_Numpad_Shortcuts.png) Autore: DeepSOIC |
| Autore                                                                                                                                                                                                                                                                                                                                                          |
| [DeepSOIC](/User:DeepSOIC "User:DeepSOIC")                                                                                                                                                                                                                                                                                                                      |
| Download                                                                                                                                                                                                                                                                                                                                                        |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/1/1e/Macro_Unbind_Numpad_Shortcuts.png)                                                                                                                                                                                                                                                                   |
| Link                                                                                                                                                                                                                                                                                                                                                            |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                                                                                                                        |
| Versione macro                                                                                                                                                                                                                                                                                                                                                  |
| 2.0                                                                                                                                                                                                                                                                                                                                                             |
| Data ultima modifica                                                                                                                                                                                                                                                                                                                                            |
| 2022-04-13                                                                                                                                                                                                                                                                                                                                                      |
| Versioni di FreeCAD                                                                                                                                                                                                                                                                                                                                             |
| 0.20                                                                                                                                                                                                                                                                                                                                                            |
| Scorciatoia                                                                                                                                                                                                                                                                                                                                                     |
| _Nessuna_                                                                                                                                                                                                                                                                                                                                                       |
| Vedere anche                                                                                                                                                                                                                                                                                                                                                    |
| _Nessuno_                                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                                                                 |

## Descrizione

Quando si immettono i numeri e la casella di immissione del numero non è correttamente focalizzata, FreeCAD reagisce alle cifre cambiando le viste standard. Questa macro è un modo rapido per reindirizzare le scorciatoie a Ctrl + numero. Non aiuta molto con l'inserimento dei numeri, ma almeno la vista non cambia.

Vedere nel forum la discussione [Come disattivare (disabilitare) la navigazione dal tastierino numerico?](https://forum.freecadweb.org/viewtopic.php?f=3&t=26667)

## Utilizzo

1. Fare copia-incolla del codice della macro nella console Python di FreeCAD.

2. Premere invio due volte (per assicurarsi che tutto sia eseguito).

3. Riavviare FreeCAD affinché le modifiche abbiano effetto.

## Script

Icona barra strumenti ![](/images/Macro_Unbind_Numpad_Shortcuts.png)

**Macro_Unbind_Numpad_Shortcuts.FCMacro**

```
preset = [
    ("Std_ViewIsometric"   , "Ctrl+0"),
    ("Std_ViewFront" , "Ctrl+1"),
    ("Std_ViewTop"   , "Ctrl+2"),
    ("Std_ViewRight" , "Ctrl+3"),
    ("Std_ViewRear"  , "Ctrl+4"),
    ("Std_ViewBottom", "Ctrl+5"),
    ("Std_ViewLeft"  , "Ctrl+6"),
]
for (cmd, shortcut) in preset:
    App.ParamGet("User parameter:BaseApp/Preferences/Shortcut").SetString(cmd, shortcut)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Unbind_Numpad_Shortcuts/it&oldid=1259584>"
