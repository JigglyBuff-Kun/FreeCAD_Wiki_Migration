---
title: Interfaccia
---
## Introduzione

L'interfaccia di FreeCAD si basa su Qt, un noto toolkit di interfaccia utente grafica (GUI), particolarmente utilizzato in Linux, ma disponibile anche in Windows e MacOS.

![](/images/FreeCAD_interface_base_divisions.svg)

Interfaccia standard di FreeCAD 0.19.

La finestra principale dell'applicazione può essere suddivisa approssimativamente in 11 sezioni:

1. L'[area della vista principale](/Main_view_area/it "Main view area/it"), che può contenere diverse finestre a schede
2. La [vista 3D](/3D_view/it "3D view/it"), normalmente incorporata nell'area della vista principale
3. La parte superiore della [vista combinata](/Combo_view/it "Combo view/it"), che include la [vista ad albero](/Tree_view/it "Tree view/it") e il [pannello delle azioni](/Task_panel/it "Task panel/it")
4. La parte inferiore della [vista combinata](/Combo_view/it "Combo view/it"), che include l'[editor delle proprietà](/Property_editor/it "Property editor/it")
5. La [vista della selezione](/Selection_view/it "Selection view/it")
6. La [vista dei report](/Report_view/it "Report view/it")
7. La [console Python](/Python_console/it "Python console/it")
8. La [barra di stato](/Status_bar/it "Status bar/it")
9. L'area della barra degli strumenti, vedere le informazioni seguenti sulla barra degli strumenti
10. Il [selettore degli ambienti](/Std_Workbench/it "Std Workbench/it"), che a sua volta è una barra degli strumenti
11. Il [menu standard](/Standard_Menu/it "Standard Menu/it")

## Componenti dell'interfaccia

Come molti software, FreeCAD include una barra dei menu standard, quindi una serie di barre degli strumenti e pannelli in cui si trovano gli strumenti per l'utente.

### Menu

I [menu standard](/Standard_Menu/it "Standard Menu/it") sono: [**File**](/Std_File_Menu/it "Std File Menu/it"), [**Modifica**](/Std_Edit_Menu/it "Std Edit Menu/it"), [**Visualizza**](/Std_View_Menu/it "Std View Menu/it"), [**Strumenti**](/Std_Tools_Menu/it "Std Tools Menu/it"), [**Macro**](/Std_Macro_Menu/it "Std Macro Menu/it"), [**Finestre**](/Std_Windows_Menu/it "Std Windows Menu/it"), [**Aiuto**](/Std_Help_Menu/it "Std Help Menu/it").

### Barre degli strumenti

Le barre degli strumenti standard che appaiono nell'interfaccia sono:

* Barra degli strumenti File: strumenti per lavorare con i file, aprire documenti, copiare, incollare, annullare e ripetere azioni.
* [Selettore degli ambienti](/Std_Workbench/it "Std Workbench/it"): contiene un singolo widget per selezionare l'[ambiente](/Workbenches/it "Workbenches/it") attivo.
* Barra degli strumenti Macro: strumenti per registrare, modificare ed eseguire le [macro](/Macros/it "Macros/it").
* Barra degli strumenti Visualizza: strumenti per controllare la modalità di visualizzazione degli oggetti nella [Vista 3D](/3D_view/it "3D view/it").
* Barra degli strumenti Struttura: strumenti per organizzare gli oggetti nel documento e creare collegamenti a documenti aggiuntivi.

Questi possono essere attivati e disattivati facendo clic con il pulsante destro del mouse su uno spazio vuoto su una delle barre degli strumenti e scegliendo l'elemento desiderato, oppure dal menu **Visualizza → Barre degli strumenti**.

### Pannelli

I pannelli principali che consentono di lavorare con gli oggetti sono:

* [Vista 3D](/3D_view/it "3D view/it"): l'area in cui viene disegnata la geometria 2D e 3D.
* [Vista combinata](/Combo_view/it "Combo view/it"): il pannello che contiene la [vista ad albero](/Tree_view/it "Tree view/it"), il [pannello azioni](/Task_panel/it "Task panel/it"), e l'[editor delle proprietà](/Property_editor/it "Property editor/it").
* [Vista ad albero](/Tree_view/it "Tree view/it"): l'elemento che mostra tutti gli oggetti nel documento e la loro cronologia parametrica.
* [Pannello Azioni](/Task_panel/it "Task panel/it"): il pannello che mostra diverse azioni e opzioni a seconda dello strumento selezionato.
* [Editor delle proprietà](/Property_editor/it "Property editor/it"): il luogo in cui si possono modificare le proprietà dell'oggetto.
* [Vista selezione](/Selection_view/it "Selection view/it"): il pannello che mostra gli elementi attualmente selezionati.
* [Vista report](/Report_view/it "Report view/it"): il campo di testo che mostra i messaggi dell'applicazione e dei suoi strumenti.
* [Console Python](/Python_console/it "Python console/it"): l'editor che consente di eseguire il codice [Python](/Python/it "Python/it") in modo interattivo per vedere i risultati nella [vista 3D](/3D_view/it "3D view/it").
* [Barra di stato](/Status_bar/it "Status bar/it"): la barra che mostra determinati messaggi dell'applicazione e che ha il selettore per impostare il [tipo di mouse](/Mouse_navigation/it "Mouse navigation/it").
* [Vista DAG](/DAG_view/it "DAG view/it"): un'alternativa alla [vista ad albero](/Tree_view/it "Tree view/it"), che mostra le relazioni tra oggetti diversi attraverso un grafico.

Ad eccezione della vista 3D, tutto può essere attivato e disattivato facendo clic con il pulsante destro del mouse su uno spazio vuoto su una delle barre degli strumenti in alto e scegliendo l'elemento desiderato, oppure dal menu **Visualizza → Pannelli**.

Per attivare e disattivare la barra di stato utilizzare il menu **Visualizza → Barra di stato**.

### Altro

Altre interfacce e finestre utili includono:

* [Ispettore di scena](/Std_SceneInspector/it "Std SceneInspector/it"): un pannello che mostra i nodi Coin3D che compongono la [scena grafica](/Scenegraph/it "Scenegraph/it"). Per utenti esperti e sviluppatori, può essere utile per risolvere le operazioni che manipolano direttamente la scena e gli oggetti creati nella [Vista 3D](/3D_view/it "3D view/it").
* [Grafico delle dipendenze](/Std_DependencyGraph/it "Std DependencyGraph/it"): una finestra che mostra il grafico delle dipendenze di tutti gli oggetti nel documento, creato con il programma ausiliario [Graphviz](https://graphviz.org/). È utile per riconoscere i problemi nella creazione di oggetti, come le dipendenze circolari, che potrebbero non essere del tutto evidenti dalla [vista ad albero](/Tree_view/it "Tree view/it") o dalla [vista DAG](/DAG_view/it "DAG view/it").

### Personalizzazione

Le barre degli strumenti possono avere più o meno pulsanti e le barre degli strumenti personalizzate possono essere create con un mix di strumenti diversi e per ospitare le macro sviluppate.

Queste opzioni sono nel menu **Strumenti → Personalizza**. Vedere [Personalizzare l'interfaccia](/Interface_Customization/it "Interface Customization/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Interface/it&oldid=1187622>"