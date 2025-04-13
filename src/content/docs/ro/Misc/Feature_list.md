---
title: Lista funcționalități
---

Aceasta pagina prezinta o mare parte dintre funcționalitățile FreeCAD. Daca doriti sa priviti in viitor vizitati [pagina de planificare](/Development_roadmap/ro "Development roadmap/ro"). Pagina de [screenshot-uri](/Screenshots "Screenshots") va poate face o iede rapida despre capabilitati.

## Descrierea versiunilor

- [Versiunea 0.11](/Release_notes_0.11 "Release notes 0.11") -March 2011
- [Versiunea 0.12](/Release_notes_0.12 "Release notes 0.12")- December 2011
- [Versiunea 0.13](/Release_notes_0.13 "Release notes 0.13")- January 2013
- [Versiunea 0.14](/Release_notes_0.14 "Release notes 0.14") - March 2014
- [Versiunea 0.15](/Release_notes_0.15 "Release notes 0.15") - March 2015
- [Versiunea 0.16](/Release_notes_0.16 "Release notes 0.16") - April 2016
- [Versiunea 0.17](/Release_notes_0.17 "Release notes 0.17") - April 2018

## Funcționalități importante

- ![](/images/Feature1.jpg)

  O tehnologie completă bazată pe **nucleu geometric** al [Open CASCADE](http://en.wikipedia.org/wiki/Open_CASCADE) e care permite operații 3D complexe pe tipuri complexe de forme, cu suport nativ pentru concepte precum **[BRep](http://fr.wikipedia.org/wiki/BRep)**, curbe **[Nurbs](http://fr.wikipedia.org/wiki/Nurbs)** si suprafețe, o gama largă de entitățti geometrice, operatiuni logice, suport pentru integrat pentru formatele [STEP](http://fr.wikipedia.org/wiki/Standard_pour_l%27%C3%A9change_de_donn%C3%A9es_de_produit) și [IGES](http://fr.wikipedia.org/wiki/IGES).

- ![](/images/Feature3.jpg)

  Un **model parametric** complet. Toate obiectele FreeCAD sunt parametrizate, ceea ce inseamna ca forma lor poate depinde de [proprietati](/Property/ro "Property/ro") sau de alte obiecte, cu modificarile calculate la cerere si inregistrate in stiva undo/redo. Tipuri noi de obiecte pot fi adaugate cu usurinta si sunt [programabile in Python](/Scripted_objects/ro "Scripted objects/ro").

- ![](/images/Feature4.jpg)

  **Arhitectura modulara** ce permite modulelor sa adauge noi functionalitati la pachetul de baza. Extensiile pot fi complexe, precum intregi aplicatii programate in C++, sau simple, precum [script-uri Python](/Power_users_hub/ro "Power users hub/ro") sau [macroinstructiuni](/Macros/ro "Macros/ro") inregistrate automat. Utilizatorul are control complet asupra interpretorului **Python** continut, asupra macroinstructiunilor si script-urilor externe si asupra componentelor FreeCAD: [crearea si transformarea geometriei](/Topological_data_scripting/ro "Topological data scripting/ro"), representarea in 2D sau 3D a geometriei sub forma de [grafice](/Scenegraph/ro "Scenegraph/ro") sau chiar [interfata grafica](/PySide/ro "PySide/ro")

- ![](/images/Feature5.jpg)

  Importul si exportul in **formate standard** precum [STEP](http://en.wikipedia.org/wiki/ISO_10303), [IGES](http://en.wikipedia.org/wiki/IGES), [OBJ](http://en.wikipedia.org/wiki/Obj), [STL](http://en.wikipedia.org/wiki/STL_%28file_format%29), [DXF](http://en.wikipedia.org/wiki/Dxf), [SVG](http://en.wikipedia.org/wiki/Svg), [STL](<http://en.wikipedia.org/wiki/STL_(file_format)>), [DAE](http://en.wikipedia.org/wiki/COLLADA), [IFC](http://en.wikipedia.org/wiki/Industry_Foundation_Classes) sau [OFF](http://people.sc.fsu.edu/~jburkardt/data/off/off.html), [NASTRAN](http://en.wikipedia.org/wiki/NASTRAN), [VRML](http://en.wikipedia.org/wiki/VRML) pe langa [formatul nativ FreeCAD](/Fcstd_file_format/ro "Fcstd file format/ro"). Nivelul de compatibilitate dintre FreeCAD si un format dat variaza, depinzand de modulul care implementeaza functionalitatea.

- ![](/images/Feature7.jpg)

  [Editarea schitelor](/Sketcher_Workbench/ro "Sketcher Workbench/ro") cu constrangeri, permitand schitarea formelor 2D constranse ca si geometrie. E posibila crearea catorva tipuri de geometrii constranse precum si imbinarea lor.

- ![](/images/Feature9.jpg)

  [Simulator de roboti](/Robot_Workbench "Robot Workbench") ce permite studierea miscarilor robotilor. Modulul are deja o interfata grafica extinsa, permitand realizarea intregului flux in mod grafic.

- ![](/images/Feature8.jpg)

  [Foi de desen](/Drawing_Workbench "Drawing Workbench") ce permit crearea de vizualizari 2D ale desenului 3D pe o foaie. Acest modul produce foi SVG sau PDF gata de a fi exportate. Acest modul este in lucru, dar are deja implementata functionalitatea Python.

- ![](/images/Feature-raytracing.jpg)

  Modulul de [Afisare](/Raytracing_Workbench/ro "Raytracing Workbench/ro") poate exporta obiectele 3D pentru a fi folosite de programe externe. Singurul format suportat in prezent este [povray](http://en.wikipedia.org/wiki/POV-Ray), dar alte formate sunt planificate pentru viitor.

- ![](/images/Feature-arch.jpg)

  Modulul [Arhitectural](/Arch_Workbench "Arch Workbench") permite lucrul folosing pasii [BIM](http://en.wikipedia.org/wiki/Building_Information_Modeling) compatibil cu [IFC](http://en.wikipedia.org/wiki/Industry_Foundation_Classes). Comunitatea a dezbatut aprins detaliile modlului in [forum](http://forum.freecadweb.org/viewtopic.php?f=10&t=821).

## Funcționalități generale:

- FreeCAD este **Multi-platformă**. Rulează și se comportă la fel pe platformele: Windows, Linux si MacOS.

- **FreeCAD este o aplicație grafică**. FreeCAD are o interfață bazată pe librariile [Qt](http://www.qtsoftware.com/), cu vizualizari 3D bazate pe [Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor), permițând viteze mari de randarea a scenelor 3D ți o prezentare accesibilă a componentelor scenelor.

- **FreeCAD e disponibil de asemena în modul linie de comandă**, folosind foarte puține resurse de memorie. In modul linie de comandă FreeCAD rulează fără componentele de interfață grafică dar cu toate uneltele geometrice. In acest context, poate fi folosit ca si server pentru a produce conținut util altor aplicatii.

- **FreeCAD poate fi încorporat ca și [modul Python](/Embedding_FreeCAD/ro "Embedding FreeCAD/ro")** in alte aplicatii capabile sa ruleze module Python, inclusiv in interpretorul Python implicit. Ca si în modul consolă, interfața grafică FreeCAD

```
este nedisponibilă, dar uneltele geometrice sunt accesibile.

```

- **Conceptul de Workbench**: În interfața grafica FreeCAD uneltele sunt grupate în ateliere ([workbench](/Workbenches/ro "Workbenches/ro")), ceea ce permite afișarea instrumentelor strict necesare la indeplinirea unui obiectiv, lăsând interfața ordonată și responsiva si permitand aplicației sa se încarce rapid.

- **Arhitectura modulara cu plug-in-uri pentru incarcarea intarziata a componentelor si tipurilor de date**. FreeCAD este impartit in functionalitate centrala si module ce sunt incarcate in memorie doar la nevoie. Aproape toate uneltele si tipurile geometrice sunt localizate in module. Acestea se comporta precum plug-in-urile si pot fi adaugate sau indepartate dintr-un pachet FreeCAD instalat.

- **Asociativitatea obiectelor pe baza parametrilor**: Toate obiectele dintr-un document FreeCAD pot fi definite de parametri. Acestia pot fi modificati si recalculati oricand. Relatiile dintre obiecte sunt de asemenea stocate, astfel ca modificare unui obiect atrage dupa sine modificarea obiectelor dependente.

- **Crearea de primitive** (cutie, sfera, cilindru, etc), **expandare** (normal sau in mod Jung/Shin/Choi) sau **operatiuni logice** (adauga, intersecteaza, taie).

- **Operatii de modificare** grafică precum translații, rotații, scalari, copiere in oglindă, expandare, (trivial or after [Jung/Shin/Choi](https://www.researchgate.net/publication/240754626_Self-intersection_Removal_in_Triangular_Mesh_Offsetting)) convertirea formei în orice plan sau în spațiul 3D

- **[operatiuni logice](http://en.wikipedia.org/wiki/Constructive_solid_geometry)** precum **uniunea**, **diferenta** si **intersectia**.

- Creare grafica pentru **geometrie planară simplă** precum linii, polilinii, dreptunghiuri, b-splines, circular or elliptic arce în orice plan sau în spațiul 3D.

- Modelarea folosind **extruziuni**, **sectiuni** si **panglici**, in linie dreapta sau prin rotatie.

- Componente topologice precum **varfuri, margini, polilinii** si **planuri** (folosind de asemenea script-uri Python).

- Unelte de **testare si reparare** a retelelor: pentru solide, tools for meshes: solid test, test non-two-manifolds, autointersectie, umplere goluri si orientare uniforma.

- **Notatii** precum text liber sau dimensiuni

- **Undo/Redo** Toate operatiunile pot fi inlaturate sau redate individual sau in pasi multipli.

- **Managementul tranzactiilor**: stiva undo/redo stocheaza tranzactii in document si nu actiuni individuale permitand fiecarui component sa aleaga ce trebuie sa fie modificat la undo/redo.

- **[Script](/Power_users_hub/ro "Power users hub/ro") incorporat**: FreeCAD contine un interpretor [Python](http://www.python.org/) si API (functii) ce acopera aproape toate componentele aplicatiei, interfata, geometria si reprezentarea acesteia in vizualizarile 3D. Interpretorul poate rula atat comenzi simple cat si rutine complexe; exista module intregi ce au fost programate in intregime in Python.

- **Consola Python incorporata** cu sintaxa evidentiata, completare automata si explorator de clase; comenzile Python pot fi adresate direct in FreeCAD si afiseaza rezultatul imediat, permitand celor ce utilizeaza scripturi sa testeze functiile, sa exploreze continutul modulelor si sa invete usor arhitectura FreeCAD.

- **Acțiunile utilizatorului sunt afișate în consolă**: Tot ce face utilizatorul se traduce în cod Python, care poate fi printat la consolă sau înregistrat ca și macroinstrucțiuni.

- **Inregistrarea si editarea macroinstructiunilor**: Comenzile Python issued when the user manipulates the interface pot fi inregistrate, editate dacă e nevoie, și salvate pentru a fi reproduse mai târziu.

- **Format de fisier modular bazat pe ZIP**: Documentele salvate cu extensia .[fcstd](/Fcstd_file_format/ro "Fcstd file format/ro") pot contine un mare numar de informatii diferite precum: geometrie, script-uri sau previzualizari. The .fcstd file is itself a zip container, so a saved FreeCAD file has already been compressed.

- **Interfata grafica pe de-a-ntregul configurabila**. Interfata bazata pe [Qt](http://www.qtsoftware.com) este accesibila interpretorului Python. Pe langa functii simple furnizate de modulul FreeCAD central, intreaga interfata este si ea accesibila, permitand orice operatii asupra aparentei: creare, adaugare, andocare, modificare si indepartare a ferestrelor si barelor de instrumetne.

- **Thumbnailer** (doar pentru sisteme Linux în acest moment): iconițele pentru documentele FreeeCAD prezintă conținutul fișierului în majoritatea programelor de management, precum Nautilus in Gnome.

- **Instalare MSI modulara** permite instalarea flexibila pe sisteme Windows. Pentru Ubuntu au fost pregatite de asemenea pachete de instalare.

## Extra Workbenches

## Extra Workbenches

Power users have created various custom [external workbenches](/External_workbenches "External workbenches").

Retrieved from "<http://wiki.freecad.org/index.php?title=Feature_list/ro&oldid=1456923>"
