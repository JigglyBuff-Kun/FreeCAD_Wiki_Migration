---
title: Draft API
---
Aceste funcții fac parte din modulul Draft-Desen 2D și pot fi utilizate în scripturi și macrocomenzi sau de la interpretorul python, odată ce modulul Draft a fost importat.

These functions are part of the [Draft Workbench](/Draft_Workbench "Draft Workbench") and can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console once the `Draft` module has been imported.

Example:

```
import FreeCAD, Draft

myrect = Draft.makeRectangle(4, 3)
mydistance = FreeCAD.Vector(2, 2, 0)
Draft.move(myrect, mydistance)

```

![](/images/Method.png)  **cut (** *FreeCAD.Object, FreeCAD.Object* **)**

**Description**: Returnează un obiect tăiat făcut din diferența dintre cele 2 obiecte date. Obiectele originale se ascund.

**Returns**: Un obiect nou creat

![](/images/Method.png)  **extrude (** *FreeCAD.Object, Vector* **)**

**Description**: Extrudeaza obiectul dat in directia data de vector. Obiectul inițial devine ascuns

**Returns**: Un obiect nou creat

![](/images/Method.png)  **formatObject (** *FreeCAD.Object, [FreeCAD.Object]* **)**

**Description**: Această funcție se aplică obiectului țintă dat, ținând cont de proprietăților curente setate pe bara de instrumente Draft (culoarea liniei și lățimea liniei) sau copiază proprietățile unui al doilea obiect dacă sunt furnizate. De asemenea, plasează obiectul în grupul de construcție dacă este apăsat butonul de construcție.

**Returns**: Nimic

![](/images/Method.png)  **fuse (** *FreeCAD.Object, FreeCAD.Object* **)**

**Description**: Returnează un obiect făcut din unirea celor două obiecte date. În cazul în care obiectele sunt coplanare, se folosește o schemă specială, în caz contrar obiectul final este o siguranță standard a părții.

**Returns**: Un obiect nou creat

![](/images/Method.png)  **getDraftPath (** *[string]* **)**

**Description**: Returnează calea de accesa a utilizatorului sau a sistemului de la care modulul Draft rulează. Dacă este furnizat o sub cale sau un nume de fișier, este furnizat returnează calea completă la sub-calea din modulul Schiță.

**Returns**: O cale de fișier

![](/images/Method.png)  **getGroupContents (** *list* **)**

**Description**: Scanează recursiv lista dată pentru grupuri. În cazul în care grupurile sunt întâlnite, conținutul acestora este adăugat la listă.

**Returns**: O listă a obiectelor FreeCAD

![](/images/Method.png) **getRealName(***string***)**

**Description**: Separă numărul din numele unui obiect .

**Returns**: Numele obiectului astfel dezbrăcat

![](/images/Method.png) **getSelection(****)**

**Description**: Returnează selecția curentă FreeCAD.

**Returns**: Secțiunea curentă FreeCAD

![](/images/Method.png) **makeCircle(***radius, [placement], [facemode], [startangle], [endangle]***)**

**Description**: Creează un obiect de cerc cu o rază dată. Dacă este oferită o destinație de plasare, este utilizată. Dacă facemodul este Fals, cercul este afișat ca un filament (polilinie), alfel ca o fațetă. În cazul în care **startAngle** și **endAngle** sunt date (în grade), ele sunt folosite și obiectul apare ca un arc de cerc.

**Returns**: Obiectul nou creat.

![](/images/Method.png)  **makeDimension (** *Vector, Vector, [Vector] sau FreeCAD.Object, int, [Vector]* **)**

**Description**: Creează un obiect **Cotă** care măsoară distanța dintre primul și al doilea vector, cu linia de cotă care trece prin cel de-al treilea vector, dacă este prevăzută. Se va utiliza lățimea curentă a liniei și culoarea din bara de instrumente Draft. În loc de 2 vectori, puteți trece și un obiect FreeCAD și două numere întregi (și opțional un vector) unde trebuie să treacă linia de dimensiuni. În acest caz, dimensiunea va fi asociată cu obiectul și va măsura două dintre vârfurile sale, indicate de cele două numere de index date.

**Returns**: Un nou obiect va fi creat.

![](/images/Method.png)  **makeLine (** *Vector, Vector* **)**

**Description**: Creează o linie între cei doi vectori dat. Se va utiliza lățimea curentă a liniei și culoarea din bara de instrumente Draft.

**Returns**: Un nou obiect va fi creat.

![](/images/Method.png)  **makeRectangle (** *lungime, lățime, [plasare], [facemode]* **)**

**Description**: Creează un obiect Rectangular cu lungimea în direcția X și înălțime în direcția Y. Dacă este oferită o destinație de plasare, este utilizată. Dacă **facemodul este Fals**, dreptunghiul este afișat ca un cadru de sârmă, altfel ca o față. Se va utiliza lățimea curentă a liniei și culoarea din bara de instrumente Draft.

**Returns**: Un obiect nou este creat.

![](/images/Method.png)  **makeText (** *șir sau listă, [Vector], [screenmode]* **)**

**Description**: Creează un obiect Text, un vector este furnizat, care conține șirul sau șirurile date în listă, un șir după linie. Culoarea curentă din bara de instrumente Draft și înălțimea textului și fontul specificat în preferințe sunt utilizate. Dacă textul de ecran este True, textul se află întotdeauna în direcția vizualizării, altfel se află pe planul XY.

**Returns**: Un obiect nou este creat.

![](/images/Method.png)  **makeWire (** *list sau Part.Wire, [closed], [placement] [facemode]* **)**

**Description**: Creează un obiect DWire din lista dată de vectori sau din sirul dat. Dacă obiectul este închis (True), sau dacă primul și ultimul punct sunt identice, firul este închis. Dacă **facemode** este adevărat (și firul este închis), firul va apărea umplut. Se va folosi lățimea curentă a liniei și culoarea currentă din bara de instrumente Draft .

**Returns**: Un nou obiect Draft DWire este creat (nu o Part Wire).

![](/images/Method.png)  **move (** *FreeCAD.Object sau listă, Vector, [copymode]***)**

**Description**: Mută obiectul dat sau obiectele conținute în lista dată în direcția și distanța indicată de vectorul dat. Dacă **CopyMode** este True, obiectele reale nu sunt mutate, spre deosebire de copiile lor care sunt create în schimb.

**Returns**: Obiectul (obiectele) (sau copiile lor dacă **CopyMode** a fost True)

![](/images/Method.png)  **precision (** *Returneaza valoarea de precizie din Proiectarea setarilor utilizatorului.* **)**

**Description**: Un intreg.

**Returns**: {{{4}}}

![](/images/Method.png)  **rotate (** *FreeCAD.Object sau lista, unghiul, [center], [axis], [copymode]* **)**

**Description**: Rotește obiectul/obeictele conținute în lista dată, cu unghiul dat, în jurul centrului dat, Dacă axa este omisă, rotația va fi în jurul axei **Z** verticale. În cazul în care **CopyMode** este True, obiectele reale nu sunt mutate, dar copiile sunt create în loc de obiecte.

**Returns**: Obiecte (sau copii ale acestora).

![](/images/Method.png)  **scale (** *FreeCAD.Object sau listă, vector, [center], [copymode]* **)**

**Description**: REdimensionează/Scalează obiectul dat sau obiectele conținute în lista dată cu factorii de scalare definiți de vectorul dat (pe direcțiile ‚**X, Y și Z**) în jurul centrului dat, dacă există. În cazul în care **CopyMode** este True, obiectele reale nu sunt mișcate, ci vor fi create în schimb copii .

**Returns**: Obiectele (sau copiile lor).

![](/images/Method.png)  **select (** *FreeCAD.Object* **)**

**Description**: Deselectează totul și selectează numai obiectul trecut

**Returns**: Nimic.

![](/images/Method.png)  **shapify (** *FreeCAD.Object* **)**

**Description**: Transformă un obiect de formă parametric în non-parametric.

**Returns**: Obiectul nou.

![](/images/Method.png)  **draftify (** *FreeCAD.Object sau listă* **)**

**Description**: Transformă obiectul dat sau fiecare obiect în filamente parametric al.

**Returns**: Nimic

![](/images/Method.png)  **getSVG (** *FreeCAD.Object, [linemodifier], [textmodifier], [(u, v)]* **)**

**Description**: Creează o reprezentare SVG a obiectului dat. Atributul linemodifier este un factor de scalare (în procente) pentru lățimea liniei și textmodifier pentru dimensiunea textului. De asemenea, puteți furniza opțional o tuplă de vectori pentru a defini un plan de proiecție, altfel geometria va fi proiectată pe planul XY.

**Returns**: Un șir care conține o reprezentare SVG a obiectului dat.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_API/ro&oldid=621888>"