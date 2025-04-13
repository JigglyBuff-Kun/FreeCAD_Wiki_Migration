---
title: Fișier SaveAs
---
|  |
| --- |
| Std SaveAs |
| poziția meniului |
| [File](/Std_File_Menu/ro "Std File Menu/ro") → Save as... |
| Ateliere |
| All |
| scurtătură |
| Maius+Crtl+S |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Save](/Std_Save/ro "Std Save/ro") |
|  |

## Descriere

Salvați documentul activ sub un nou nume de fișier.

The **Std SaveAs** command saves the active document under a new file name.

## Utilizare

Alegeți  File → ![](/images/Std_SaveAs.png) Save As... din meniul principal.

Comanda Save as... permite salvarea documentului activ din proiectul în curs.

Deschideți o fereastră pentru a defini **path** și **name**:

![](/images/FileSaveAs.png)

Salvați documentele de proiect în fișiere separate.
Dacă există alte documente în proiect, acestea nu sunt salvate.
Numele atribuit documentului pentru ao salva devine și numele folosit pentru rădăcina acelui document din arborele copacului.
În salvările ulterioare, dacă se efectuează cu.Save, calea și numele definite pentru prima salvare sunt utilizate automat. Pentru a salva fișierul într-o altă locație sau pentru a-i da un nume nou, trebuie să reutilizați comanda Save as....

Când încercați să închideți un document care nu a fost salvat, modificat sau ieșit din FreeCAD cu documentele pe care doriți să le salvați, primiți o alertă:

![](/images/UnsavedDocument.png)

Folderul/dosarul de destinație al fișierelor salvate poate fi, de asemenea, definit în fila [Std DlgParameter](/Std_DlgParameter/ro "Std DlgParameter/ro") din meniul **Strumenti → Modifica parametri... → BaseApp → Preferences → General → FileOpenSavePath**.  
![](/images/FileOpenSavePath.png)

Mai multe opțiuni pot fi găsite în meniu **Modifica → Preferenze → Generale → Documento → Archiviazione**

1. Select the **File → ![](/images/Std_SaveAs.svg) Save As...** option from the menu.
2. Enter a filename in the dialog box.
3. Press the Save button.

## Options

* Press Esc or the Cancel button to abort the command.

## Notes

* This command can also be used to save dependency graphs. See [Std DependencyGraph](/Std_DependencyGraph "Std DependencyGraph").

## Scripting

See [Std New](/Std_New#Scripting "Std New").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SaveAs/ro&oldid=1448710>"