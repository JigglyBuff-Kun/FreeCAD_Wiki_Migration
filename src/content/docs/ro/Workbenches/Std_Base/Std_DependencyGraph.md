---
title: Std Graficul Dependențelor
---
|  |
| --- |
| Std DependencyGraph |
| Menu location |
| [Tools](/Std_Tools_Menu "Std Tools Menu") → Dependency graph... |
| Workbenches |
| All |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descriere

**Dependency graph** afișează dependețele între obiecte în documentul activ sub formă de graf. Spre deosebire de arborescența Model, obiectele sunt listate în ordine cronologică inversă, cu primul obiect creat în partea de jos.

Poate fi util în analizarea unui document FreeCAD și în localizarea ramurilor într-o arborescență. Schema de dependență a graficului va depinde de ce Atelier de lucru a fost folosit pentru a crea obiectele din document. De exemplu, în FreeCAD 0.16, un model realizat exclusiv în Atelierul PartDesign ar trebui să afișeze un grafic de dependență liniară cu o singură ramificație verticală. Un model realizat cu Atelierul Part va avea multe ramuri, dar pentru o singură parte se vor alătura la început după operațiunile booleene. Dacă nu, înseamnă că acestea sunt obiecte separate.

Graficul de dependență este pur și simplu un instrument de vizualizare, prin urmare nu poate fi editat; se actualizează automat dacă se fac modificări ale modelului.

![](/images/Std_DependencyGraph_example.svg)
![DependencyGraph1.png](/images/DependencyGraph1.png)

## Installation

## Instalarea

Pentru a se utiliza Dependency graph, un software terț numit [Graphviz](http://graphviz.org/) trebuie să fie instalat prima dată. Dacă nu-l aveți preinstalat sau este instalat într-o locație neconvențională, FreeCAD va afișa următorul dialog: ![](/images/FreeCAD-0.17-missing-Graphviz-error-dialogue.png)

![](/images/FreeCAD-0.17-missing-Graphviz-error-dialogue.png)

The saved path can be changed in the [Parameter Editor](/Std_DlgParameter "Std DlgParameter") under **BaseApp → Preferences → Paths → Graphviz**.

### Windows

### Windows

Descărcați programul **graphviz-2.xx.msi** de instalare de la [Graphviz Download page](https://graphviz.gitlab.io/_pages/Download/Download_windows.html) și lansați-l pentru a instala

### macOS

### Mac/OSX

Puteți instala graphviz folosind [Homebrew](https://brew.sh/):

```
brew install graphviz

```

Aceasta instalează binarele graphviz sub / usr / local / bin. Din păcate, nu putem naviga direct din dialogul de fișiere care apare din FreeCAD → Instrumente → Graficul dependenței.
Când obțineți dialogul de selectare a fișierelor, utilizați tastele Cmd + Shift + G pentru a obține un câmp de introducere pentru cale. Introduceți

```
/usr/local/bin

```

or:

```
/opt/homebrew/bin

```

și confirmați câmpul de introducere și dialogul de selectare a fișierelor.

În cazul în care fișierele binare Graphviz sunt instalate într-o locație nestandard, încercați să găsiți programul împreună cu comanda:

```
type dot

```

Se va emite ceva de genul

```
dot is /usr/local/bin/dot

```

Și, prin urmare, puteți să îi spuneți lui FreeCAD să se uite în acel director.

If you don't have macOS Big Sur (11) (or higher) Homebrew might not work, but you can use [MacPorts](https://www.macports.org/index.php) instead. Just download the [appropriate version for your OS](https://www.macports.org/install.php). Once the installation is complete, enter this command in the [Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS)):

```
sudo port install graphviz

```

Enter your password and wait while the dependencies are downloaded and installed (it can take some time).

The Graphviz binaries may be under /usr/local/bin or /opt/local/bin/dot. FreeCAD may automatically find the Graphviz program with the file dialog that comes up from **Tools → Dependency graph...**, if not enter this command:

```
type dot

```

It will output something like:

```
dot is /opt/local/bin/dot

```

And you can tell FreeCAD to look in that directory as explained before.

It is also possible to make the opt directory visible with this command:

```
defaults write com.apple.finder AppleShowAllFiles YES;

```

then:

```
killall Finder /System/Library/CoreServices/Finder.app;

```

Therefore you can tell FreeCAD to follow this path. It has been successfully tested on macOS 10.13 (High Sierra).

### Linux

### Linux

Sub cele mai multe distribuții Linux (Debian / Ubuntu, Fedora, OpenSUSE), trebuie doar să instalați pachetul grafic din colecțiile de depozitare. Cu toate acestea, în mod similar cu MacOSX, în cazurile în care binarele Graphviz sunt instalate într-o locație nestandardă, încercați să găsiți programul cu comanda:

```
type dot

```

Poate ieși ceva asemănător

```
dot is /usr/local/bin/dot

```

Și, prin urmare, puteți orienta FreeCAD să se uite în acel director.

## Usage

## Cum se folosește

1. Mergeți la meniu **Tools → Dependency graph...**
2. Un nou tab întitulat **Dependency graph**

se deschide în zona principală a ferestrei FreeCAD.

1. Utilizați rotița de derulare a mouse-ului pentru a mări / micșora imaginea.
2. Utilizați cursorul orizontal din partea inferioară a ecranului pentru a panorama în lateral.

## Save

## Save/Export

Puteți salva / exporta graficul de dependență afișat ca fișier imagine. În timp ce tab-ul Dependency graph este în prim plan:

* Just choose **File** → [Save As](/Std_SaveAs "Std SaveAs") to save the graph as a picture (PNG/BMP/GIF/JPG), a vector graphic (SVG) or as a PDF document.
* **File** → [Export](/Std_Export "Std Export") or **Tools** → [Save picture](/Std_ViewScreenShot "Std ViewScreenShot") will **NOT** work.

## Principii Generale

* Graficul afișează obiectele în ordine cronologică inversă, de jos în sus.
* Direcția săgeților care arată dependențele trebuie să fie întotdeauna în jos, de la obiectul copil la obiectul părinte. O săgeată îndreptată indică o dependență ciclică, o problemă care trebuie rezolvată.
* O schiță care conține legături către  [geometry extern](/Sketcher_External "Sketcher External") va avea un număr cu un sufix "x", în afară de săgeata care o leagă de părinți, indicând numărul de geometrie externă legat în schiță.
* Obiectele pot avea dependențe față de mai mulți părinți. De exemplu, pentru un model construit în PartDesign, un buzunar poate fi legat de schița sa și de caracteristica Pad (Protrusion) care a venit înainte.
* Se vor afișa dependențe nepermise (de exemplu, între o operațiune de Draft/Part și un element din cadrul unui [PartDesign Body](/PartDesign_Body "PartDesign Body")) cu o săgeată roșie. Acest tip de link afișează, de obicei, o eroare "Links go out of allowed scope" în afișarea raportului.
* [Container](/Std_Part "Std Part") și [PartDesign\_Body](/PartDesign_Body "PartDesign Body") își înglobează conținutul într-un cadru cu fundal aleatoriu colorat. Originea acestora include, de asemenea, conținutul lor (planuri și axe standard) într-un cadru.
* [Group](/Std_Group "Std Group") este afișat ca un singur element legat de conținutul său.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DependencyGraph/ro&oldid=1536843>"