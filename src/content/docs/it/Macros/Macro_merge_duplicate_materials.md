---
title: Unisci i materiali duplicati
---

|                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unisci materiali duplicati                                                                                                                                                                                                                         |
| Descrizione                                                                                                                                                                                                                                        |
| Unisce i materiali che hanno lo stesso nome di base Versione macro: 2.0 Ultima modifica: 20197-07-12 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ed/Macro_merge_duplicate_materials.png) Autore: yorik |
| Autore                                                                                                                                                                                                                                             |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                                  |
| Download                                                                                                                                                                                                                                           |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/e/ed/Macro_merge_duplicate_materials.png)                                                                                                                                                    |
| Link                                                                                                                                                                                                                                               |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                           |
| Versione macro                                                                                                                                                                                                                                     |
| 2.0                                                                                                                                                                                                                                                |
| Data ultima modifica                                                                                                                                                                                                                               |
| 20197-07-12                                                                                                                                                                                                                                        |
| Versioni di FreeCAD                                                                                                                                                                                                                                |
| All                                                                                                                                                                                                                                                |
| Scorciatoia                                                                                                                                                                                                                                        |
| _Nessuna_                                                                                                                                                                                                                                          |
| Vedere anche                                                                                                                                                                                                                                       |
| _Nessuno_                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                    |

## Descrizione

Fonde i materiali che hanno lo stesso nome di base (con differenti terminazioni numerali come 001, 002, ...) in uno solo. Viene mantenuto solo il primo, e tutti gli oggetti che puntano ai duplicati sono invece indirizzati al primo. Quindi, prima di utilizzare questa macro, assicurarsi che il primo materiale sia quello giusto (sia quello senza finale numerico o con il numero più basso presente).

## Script

Icona barra strumenti
![](/images/Macro_merge_duplicate_materials.png)

**Merge duplicate materials.FCMacro**

```
import FreeCAD,FreeCADGui
mats = [o for o in FreeCAD.ActiveDocument.Objects if o.isDerivedFrom("App::MaterialObject")]
todelete = []
for mat in mats:
    if mat.Label[-1].isdigit() and mat.Label[-2].isdigit() and mat.Label[-3].isdigit():
        orig = None
        for om in mats:
            if om.Label == mat.Label[:-3].strip():
                orig = om
                break
        if orig:
            for par in mat.InList:
                for prop in par.PropertiesList:
                    if getattr(par,prop) == mat:
                        print( "Changed property '"+prop+"' of object "+par.Label+" from "+mat.Label+" to "+orig.Label)
                        setattr(par,prop,orig)
            todelete.append(mat)
for tod in todelete:
    if not tod.InList:
        print( "Deleting material "+tod.Label)
        FreeCAD.ActiveDocument.removeObject(tod.Name)
    elif (len(tod.InList) == 1) and (tod.InList[0].isDerivedFrom("App::DocumentObjectGroup")):
        print( "Deleting material "+tod.Label)
        FreeCAD.ActiveDocument.removeObject(tod.Name)
    else:
        print( "Unable to delete material "+tod.Label+": InList not empty")
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_merge_duplicate_materials/it&oldid=1186486>"
