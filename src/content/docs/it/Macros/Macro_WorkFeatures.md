---
title: WorkFeatures
---

|                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WorkFeatures                                                                                                                                                                                                                                      |
| Descrizione                                                                                                                                                                                                                                       |
| Utility Tool per creare Punti, Assi, Piani e diverse altre funzioni. Versione macro: 2019-05 Ultima modifica: 2019-05-01 Versione FreeCAD: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/9d/WF_wf.png) Autore: rentlau_64 |
| Autore                                                                                                                                                                                                                                            |
| [rentlau_64](/index.php?title=User:Rentlau_64&action=edit&redlink=1 "User:Rentlau 64 (page does not exist)")                                                                                                                                      |
| Download                                                                                                                                                                                                                                          |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/9/9d/WF_wf.png)                                                                                                                                                                             |
| Link                                                                                                                                                                                                                                              |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                          |
| Versione macro                                                                                                                                                                                                                                    |
| 2019-05                                                                                                                                                                                                                                           |
| Data ultima modifica                                                                                                                                                                                                                              |
| 2019-05-01                                                                                                                                                                                                                                        |
| Versioni di FreeCAD                                                                                                                                                                                                                               |
| All                                                                                                                                                                                                                                               |
| Scorciatoia                                                                                                                                                                                                                                       |
| _Nessuna_                                                                                                                                                                                                                                         |
| Vedere anche                                                                                                                                                                                                                                      |
| _Nessuno_                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                   |

## Descrizione

Utilità per creare:

- Punti (punti medi, centro del cerchio, centro degli oggetti...),
- Assi (da 2 punti, Normale di un piano...),
- Piani (da 3 punti, da un asse e un punto...)
- E tante altre funzionalità utili per facilitare la creazione del proprio progetto. Questa utilità è la successiva nella vista combinata con l'etichetta "Funzioni di lavoro".

![](/images/WF.png)

WorkFeatures

## Utilizzo

**Work Features**

- ![Dopo l'attivazione di WorkFeatures i suoi strumenti sono visibili nella corrispondente scheda della Vista combinata.](/images/Macro_WorkFeatures_01.png)

  Dopo l'attivazione di WorkFeatures i suoi strumenti sono visibili nella corrispondente scheda della Vista combinata.

- ![Ogni funzione e ogni voce che corrisponde a un gruppo di funzioni è inserita in un sottogruppo creato con il nome della scheda utilizzata. Gli Assi, i Punti e i Piani in origine sono impostati Nascosti.](/images/Macro_WorkFeatures_07.png)

  Ogni funzione e ogni voce che corrisponde a un gruppo di funzioni è inserita in un sottogruppo creato con il nome della scheda utilizzata. Gli Assi, i Punti e i Piani in origine sono impostati Nascosti.

- [![Si può entrare nel gruppo e usare i normali comandi per rendere visibili le funzioni create. Ad es. con il comando Spazio oppure selezionare l'oggetto, fare clic destro del mouse e poi fare clic su "Nascondi selezione" o "Mostra selezione".](/images/Macro_WorkFeatures_08.png)](/File:Macro_WorkFeatures_08.png (Si può entrare nel gruppo e usare i normali comandi per rendere visibili le funzioni create. Ad es. con il comando Spazio oppure selezionare l'oggetto, fare clic destro del mouse e poi fare clic su "Nascondi selezione" o "Mostra selezione ".))

  Si può entrare nel gruppo e usare i normali comandi per rendere visibili le funzioni create.  
  Ad es. con il comando **Spazio** oppure selezionare l'oggetto, fare clic destro del mouse e poi fare clic su "**Nascondi selezione**" o "**Mostra selezione**".

**Scheda Origin**

|     |                                                                                                                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     | _ **Scheda Origin** _ Origin : Crea una origine: un punto con gli assi X,Y,Z e i piani XZ,XY,YZ. Tutti gli elementi sono automaticamente impostati nascosti. |

**Scheda Points**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Scheda Points** _ Object(s) Center : Crea un punto nel centro di tutti gli oggetti selezionati. _ Lines(s) Center : Crea un punto nel centro di ciascuna linea selezionata. _ Line(s) Extrema : Crea punti all'inizio e alla fine di ogni linea selezionata. _ Circle(s) Center : Crea un punto nel centro di ogni cerchio o arco selezionato. _ Point along Line : Crea un punto su una linea ad una certa distanza dal punto estremo selezionato. _ **SpinBox** : immettere il valore di scostamento _ Face(s) Center : Crea un punto nel centro di ogni faccia selezionata. _ Point (Line,Face) : Crea un punto nell'intersezione tra la linea e il piano selezionato. _ Point (Line,Point) : Crea un punto di proiezione di un punto su una linea e un punto simmetrico. _ Point (Point,Face) : Crea un punto di proiezione di un punto su una faccia. _ Object(s) Base Point : Crea un punto base di tutti gli oggetti selezionati. |

**Scheda Axis**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Scheda Axis** _ Object(s) X, Y, Z Axes : Crea 3 assi nel centro di tutti gli oggetti selezionati. _ Two Points Axis : Crea un asse passante per due punti _ **SpinBox** : immettere il valore di scostamento _ Cylinder(s) Axis : Crea l'asse del cilindro. _ Axis (Line,Line) : Creare un asse tra due assi. _ Plane(s) Axes : Crea 2 assi perpendicolari nel centro di un piano. _ Axis (Point,Axis) : Crea un asse parallelo ad un altro asse e passante per un punto. _ Axis (Axis,Point) : Crea un asse perpendicolare ad un altro asse e passante per un punto. _ **SpinBox** : immettere il valore di scostamento _ Axis (Plane,Axis) : Crea un asse su un piano dalla proiezione di un altro asse. _ Axis (Plane,Plane) : Crea un asse dalla intersezione di 2 piani. \* Object(s) Base Axis : Crea 3 assi nella posizione di base di tutti gli oggetti selezionati. |

**Scheda Plane**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Scheda Plane** _ Three Points Plane : Crea un piano passante per 3 Punti. _ Plane (Point, Axis) : Crea un piano passante per una linea e un punto. Il punto non deve appartiene alla linea! _ Plane (Point, \_Axis) : Crea un piano perpendicolare ad una linea e passante per un punto. _ Plane (Point, Plane) : Crea un piano passante per un punto e parallelo ad un piano. _ **SpinBox** : immettere il valore di scostamento _ Plane (Plane, Axis) : Crea un piano passante per una linea e perpendicolare ad un piano. _ **SpinBox** : immettere il valore di scostamento \* Object(s) Center Planes : Crea 3 piani (XY, XZ e YZ) nel centro di tutti gli oggetti selezionati. |

**Scheda Objects**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     | _ **Scheda Objects** _ Bounding Box(es) : Crea un solido di contenimento intorno a ogni oggetto selezionato. _ Bounding Box : Crea un solido di contenimento intorno a tutti gli oggetti selezionati. _ Cylinder : Prima selezionare un asse e un punto. Definire diametro e lunghezza, se necessario. Quindi fare clic sul pulsante ... Si crea un cilindro allineato sull'asse selezionato con una estremità nel punto selezionato. \* Cube : Prima selezionare un asse e un punto. Definire le dimensioni se necessario. Quindi fare clic sul pulsante ... Si crea un cubo allineato sull'asse selezionato con una estremità nel punto selezionato. |

**Scheda Views**

|     |                                                                                                                                                                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     | _ **Scheda Views** _ Align to ... : Imposta la vista corrente perpendicolare alla faccia selezionata, o allineata lungo l'asse selezionato, o allineata lungo 2 punti. Ricliccando sulla stessa selezione si invertire la direzione. |

**Scheda Modif.**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Scheda Modif. Cutting** _ Select Object : Prima, selezionare l'oggetto da tagliare poi fare clic sul pulsante 'Select Object', + Viene visualizzato il nome dell'oggetto selezionato _ Select Cut Line : Secondo, selezionare una linea di taglio, cliccare sul pulsante 'Select Cut Line', + Viene visualizzato il nome della linea selezionata _ Select Ref. Plane : Ultimo, selezionare un piano di riferimento e cliccare sul pulsante 'Select Ref. Plane'! + Viene visualizzato il nome del piano selezionato _ **Angle** : Angolo di taglio (Defaut : 0.0) _ **Thichness** : Spessore di taglio (Defaut : 0.0) _ Reset : Ripristina i valori _ Apply : Applica i valori |

**Check. Tab**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Check. Tab** _ are Parallel ? : Controlla se due facce o due bordi sono paralleli + Selezionare 2 facce/piani o 2 bordi/linee, poi cliccare questo pulsante _ are Perpendicular ? : Controlla se due facce o due bordi sono perpendicolari + Selezionare 2 facce/piani o 2 bordi/linee, poi cliccare questo pulsante _ are Coplanar ? : Controlla se due facce o due bordi sono complanari + Selezionare 2 facce/piani o 2 bordi/linee, poi cliccare questo pulsante _ Distance Clearance ? : Controlla la distanza di sicurezza tra due oggetti + Misura rapidamente la distanza tra le facce parallele e oggetti posizionati in modo simile. Selezionare i 2 oggetti e fare clic sul pulsante _ Angle ? : Calcola l'angolo tra 2 oggetti, due bordi, due piani o tra un bordo e un piano + Selezionare 2 elementi poi cliccare sul pulsante _ Distance ? : Controlla la distanza e i valori delta (sugli assi principali) tra due punti + Selezionare 2 punti poi cliccare sul pulsante _ Length ? : Misura la lunghezza e i valori delta (sugli assi principali) di una linea + Selezionare una linea poi cliccare sul pulsante _ Area ? : Misura l'area di una superficie, o di un gruppo di superfici + Selezionare uno o più piani poi cliccare sul pulsante _ View : Rileva la posizione della fotocamera. Il valore restituito è il valore fornito dalla funzione getCameraOrientation(). |

## Script

Dopo aver scaricato il file compresso

Icona barra strumenti ![](/images/WF_wf.png)

**[Download the latest version on GitHub](https://github.com/Rentlau/WorkFeature)** ,
è necessario decomprimerlo e copiare tutti i file nella directory delle macro di FreeCAD.

**Nota: Questa macro è ancora in fase di sviluppo si prega di visitare questa pagina per essere sicuri di avere l'ultima versione.**

![Download in GitHub click the Download ZIP button](/images/Macro_Work_Features_GitHub_00.png)

Download in GitHub click the Download ZIP button

Utilizzare ![](/images/AddonManager.svg) [Addon manager](/Std_AddonMgr/it "Std AddonMgr/it"), **Menu → Strumenti → Addon manager** per una facile installazione di WorkFeatures e altre macro interessanti

Per informazioni dettagliate vedere la pagina [Come installare le Macro](/How_to_install_macros/it "How to install macros/it")

## Esempi

### Strumenti di taglio

**Impostazione dello strumento Taglio:** Selezionare un oggetto da tagliare, una linea di taglio e un piano di riferimento.
Angle è un angolo tra il piano di taglio e il piano di riferimento.
Spessore è la larghezza del piano di taglio.

- ![Qui è selezionato un cilindro.](/images/CuttingSettings.jpg)

  Qui è selezionato un cilindro.

- ![Il risultato: il cilindro tagliato in due parti!](/images/CuttingResult.jpg)

  Il risultato: il cilindro tagliato in due parti!

**Esempio pratico**

- ![Selezionare la Scheda Plane](/images/Macro_Work_Features_Cutting_01.png)

  Selezionare la **Scheda Plane**

- [![e cliccare il pulsante Plane (è possibile modificare le dimensioni del piano (Default: 10 x 10)).](/images/Macro_Work_Features_Cutting_02.png)](/File:Macro_Work_Features_Cutting_02.png  "e cliccare il pulsante Plane (è possibile modificare le dimensioni del piano (Default: 10 x 10)).")

  e cliccare il pulsante Plane  
   (è possibile modificare le dimensioni del piano (**Default: 10 x 10**)).

- [![scegliere l'oggetto da lavorare. Il piano viene creato tangente all'oggetto (qui un cilindro)](/images/Macro_Work_Features_Cutting_03.png)](/File:Macro_Work_Features_Cutting_03.png  "scegliere l'oggetto da lavorare. Il piano viene creato tangente all'oggetto (qui un cilindro)")

  scegliere l'oggetto da lavorare. Il piano viene creato tangente all'oggetto (qui un cilindro)

- [![cliccare la scheda Modif, e 1 : cliccare l'oggetto da tagliare 2 : cliccare il pulsante Select object (qui il cilindro e quindi ne viene visualizzato il nome)](/images/Macro_Work_Features_Cutting_04.png)](/File:Macro_Work_Features_Cutting_04.png  "cliccare la scheda Modif, e 1 : cliccare l'oggetto da tagliare 2 : cliccare il pulsante Select object (qui il cilindro e quindi ne viene visualizzato il nome)")

  cliccare la scheda Modif, e  
  **1 :** cliccare l'oggetto da tagliare  
  **2 :** cliccare il pulsante Select object (qui il cilindro e quindi ne viene visualizzato il nome)

- [![3 : fare clic sulla linea di taglio 4 : cliccare su Select Cut Line (quindi ne viene visualizzato il nome)](/images/Macro_Work_Features_Cutting_05.png)](/File:Macro_Work_Features_Cutting_05.png  "3 : fare clic sulla linea di taglio 4 : cliccare su Select Cut Line (quindi ne viene visualizzato il nome)")

  **3 :** fare clic sulla linea di taglio  
  **4 :** cliccare su Select Cut Line (quindi ne viene visualizzato il nome)

- [![5 : cliccare il piano di lavoro 6 : cliccare su Select Ref. Plane (quindi ne viene visualizzato il nome)](/images/Macro_Work_Features_Cutting_06.png)](/File:Macro_Work_Features_Cutting_06.png  "5 : cliccare il piano di lavoro 6 : cliccare su Select Ref. Plane (quindi ne viene visualizzato il nome)")

  **5 :** cliccare il piano di lavoro  
  **6 :** cliccare su Select Ref. Plane (quindi ne viene visualizzato il nome)

- ![cliccare su Apply](/images/Macro_Work_Features_Cutting_07.png)

  cliccare su Apply

- ![L'operazione è completata e tutte le operazioni sono salvaguardate.](/images/Macro_Work_Features_Cutting_08.png)

  L'operazione è completata e tutte le operazioni sono salvaguardate.

- ![per il vostro taglio si può anche assegnare un Angolo e uno Spessore.](/images/Macro_Work_Features_Cutting_09.png)

  per il vostro taglio si può anche assegnare un Angolo e uno Spessore.

### Vincolo concentrico tra due parti non cilindriche

- ![](/images/Concentric_Constraint_Between_two_non_cylindrical_parts.gif)

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Come vincolare tra due parti non cilindriche. **1 :' _L'oggetto originale da modificare._** _2 : **L'obiettivo centra due tubi quadrati.** 3 : **Selezionare il primo oggetto e nel menu** Asse 1/2 **fare clic su "Oggetto(i)" Assi X, Y, Z.** 4 :'_ Stessa procedura per il secondo oggetto. **5 :** Clicca sul pulsante **Disegna stile** e su "Wireframe", **6 :** per chiarire la vista. **7 :** Selezionare l'oggetto da centrare e creare il suo asse. **8 :** Fare clic sul pulsante **Sposta Progetto** **9 :** e seleziona il primo asse per spostarlo sul secondo asse. **10 :** Ripristina la visualizzazione normale con il pulsante **Disegna stile** e su **Così com'è**. **11 :** Fare clic sul primo oggetto spostato e correggere la posizione con "Vista combinata > Dati > Posizionamento". **12 :** Seleziona l'oggetto creato da WorkFeature (asse contenitore) ed eliminalo. **13 :** L'oggetto è scomparso. **14 :** Il risultato. |

### Rotazione oggetti

- ![Click the image for see the animation.](/images/WorkFeature_Rotation_Object.gif)

  Click the image for see the animation.

- ![Click the image for see the animation. Click the object, click the Face tangent button, click the point on face for create the plane.](/images/Macro_Work_Features_PlaneFaceTangent.gif)

  Click the image for see the animation.  
  Click the object, click the Face tangent button, click the point on face for create the plane.

## Link

La discussione nel forum [MACRO:Work Feature 2014_12](http://forum.freecadweb.org/viewtopic.php?f=22&t=9056)

## Ambienti aggiuntivi

Gli ambienti di FreeCAD sono facili da programmare in [Python](/Python/it "Python/it"), quindi ci sono molte persone che sviluppano ambienti aggiuntivi al di fuori degli sviluppatori principali di FreeCAD.

La pagina [Ambienti complementari](/External_workbenches/it "External workbenches/it") contiene alcune informazioni e tutorial su alcuni di loro, e il progetto [Addons](https://github.com/FreeCAD/FreeCAD-addons/FreeCAD) mira a raccoglierli e renderli facilmente installabili dall'interno di FreeCAD.

Sono in fase di sviluppo ulteriori nuovi ambienti.

## Ultima versione

**Icone:**

![](/images/WF_wf.png)

![](/images/WF_centerObjectsPlanes.png)

**Sorgenti:**

Su github : [/github.com/Rentlau/WorkFeature-WB.git](https://github.com/Rentlau/WorkFeature-WB.git)

Data 2019-05-01 (YYYY-MM-DD)

20/01/2019

08/03/2015: [WF_2015_03_08](http://github.com/Rentlau/WorkFeature.git)

- Circle cut added
- Are Parallel, Are Perpendicular, Are Coplanar added

17/02/2015 : [WF_2015_02_17](https://github.com/Rentlau/WorkFeature.git)

- Circle and Ellipse Tab added
- Cutting tab added

25/01/2015 : [WF_2015_01_25.zip](http://forum.freecadweb.org/download/file.php?id=10937&sid=b770dec5362ae499adb4173547ef445f) add Object Cylinder Cube

18/01/2015 : [WF_2015_01_18.tar.gz](http://forum.freecadweb.org/download/file.php?id=10799) add plane and face to view

28/12/2014 : [WorkFeatures_2014_12_28.zip](http://forum.freecadweb.org/download/file.php?id=10347)

27/12/2014 : [WF_2014_12_27.zip](http://forum.freecadweb.org/download/file.php?id=10325)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_WorkFeatures/it&oldid=1396848>"
