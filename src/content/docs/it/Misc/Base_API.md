---
title: API del modulo Base
---
:::caution
(Ottobre 2019) Non modificare queste pagine. Le informazioni sono incomplete e obsolete. Per l'API più recente, consultare ladocumentazione API autogeneratao generare la documentazione autonomamente. VedereDocumentazione del codice sorgente.
:::

Il modulo Base è contenuto all'interno del modulo FreeCAD e contiene i costruttori per i diversi tipi di oggetti intensamente utilizzati in FreeCAD.

![](/images/Class.png) **BoundBox(***[Xmin,Ymin,Zmin,Xmax,Ymax,Zmax] ) o ( Tuple, Tuple ) o ( Vector, Vector***)**

**Description**: Crea una scatola di delimitazione. Una scatola di delimitazione è un cubo che serve a descrivere i limiti esterni. Si può ottenere una scatola di delimitazione da diversi tipi di 3D. Si utilizza spesso per verificare se una entità 3D interferisce con un altro oggetto. La verifica iniziale dei limiti di interferenza può evitare di perdere un sacco di tempo in calcoli!

![](/images/Class.png) **Matrix(****)**

**Description**: Crea una [Matrice](/Matrix_API/it "Matrix API/it") 4x4, che può essere usata per applicare delle trasformazioni agli oggetti.

![](/images/Class.png) **Vector(***) o ( x,y,z***)**

**Description**: Crea un [Vettore](/Vector_API/it "Vector API/it") 3D di FreeCAD, che rappresenta un punto 3D o una direzione.

![](/images/Class.png) **Placement(****)**

**Description**: Crea una [Posizione](/Placement_API/it "Placement API/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Base_API/it&oldid=632389>"