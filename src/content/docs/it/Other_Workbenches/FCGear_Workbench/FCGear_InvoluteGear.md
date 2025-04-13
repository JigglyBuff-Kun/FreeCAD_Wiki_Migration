---
title: FCGear Ingranaggio ad evolvente esterno
---

|                                                                                    |
| ---------------------------------------------------------------------------------- |
| Ingranaggio ad evolvente                                                           |
| Posizione nel menu                                                                 |
| Gear → Involute Gear                                                               |
| Ambiente                                                                           |
| [FCGear](/FCGear_Workbench/it "FCGear Workbench/it")                               |
| Avvio veloce                                                                       |
| None                                                                               |
| Introdotto nella versione                                                          |
| v0.16                                                                              |
| Vedere anche                                                                       |
| [FCGear: Ingranaggio cicloidale](/FCGear_CycloideGear/it "FCGear CycloideGear/it") |
|                                                                                    |

## Descrizione

Grazie al rapporto di ingranamento favorevole e alla produzione relativamente semplice, la dentatura ad evolvente è la forma del dente più comune nell'ingegneria meccanica. Le ruote dentate si trovano ovunque sia necessario trasferire movimento e forza da una parte all'altra. Si trovano, ad esempio, nelle macchine, nelle automobili, negli orologi o negli elettrodomestici. Il movimento viene spesso trasferito direttamente da una ruota dentata all'altra, ma talvolta anche tramite una catena. Inoltre è possibile modificare il senso di rotazione. È anche possibile trasformare un movimento radiale in uno lineare tramite una [cremagliera ad evolvente](/FCGear_InvoluteRack/it "FCGear InvoluteRack/it").

![](/images/Involute-Gear_example.png)

Da sinistra a destra: ingranaggio cilindrico, ingranaggio elicoidale, ingranaggio elicoidale doppio

## Utilizzo

1. Passare a ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/it "FCGear Workbench/it").
2. Esistono diversi modi per richiamare il comando:
   - Premere il pulsante ![](/images/FCGear_InvoluteGear.svg) Involute Gear nella barra degli strumenti.
   - Selezionare l'opzione **Gear → ![](/images/FCGear_InvoluteGear.svg) Involute Gear** dal menu.
3. Modificare ogni parametro dell'ingranaggio alle condizioni richieste (vedere [Proprietà](#Proprietà)).

## Proprietà

Un oggetto FCGear InvoluteGear deriva da un oggetto [Part Feature](/Part_Feature/it "Part Feature/it") ed eredita tutte le sue proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

accuracy

- Dati**numpoints** (`Integer`): L'impostazione predefinita è `6`. Modifica del profilo dell'evolvente. La variazione di questo valore può portare a risultati imprevisti.
- Dati**simple** (`Bool`): Il valore predefinito è `false`, `true` genera una visualizzazione semplificata (senza denti e solo un cilindro col diametro primitivo).

base

- Dati**height** (`Length`): Il valore predefinito è `5 mm`. Valore della larghezza dell'ingranaggio.
- Dati**module** (`Length`): L'impostazione predefinita è `1 mm`. Il modulo è il rapporto tra il diametro di riferimento dell'ingranaggio diviso per il numero di denti (vedere [Note](#Note)).
- Dati**teeth** (`Integer`): L'impostazione predefinita è `15`. Numero di denti (vedere [Note](#Note)).

computed

- Dati**angular_backlash** (`Angle`): (sola lettura)
- Dati**da** (`Length`): (sola lettura) Diametro esterno, misurato all'addendum (la testa dei denti).
- Dati**df** (`Length`): (sola lettura) Diametro di fondo, misurato ai piedi dei denti.
- Dati**dw** (`Length`): (sola lettura) Diametro primitivo di lavoro.
- Dati**transverse_pitch** (`Length`): (sola lettura) Passo nel piano di rotazione.

fillets

- Dati**head_fillet** (`Float`): L'impostazione predefinita è `0 mm`.
- Dati**root_fillet** (`Float`): L'impostazione predefinita è `0 mm`.
- Dati**undercut** (`Bool`): L'impostazione predefinita è `false`, `true` cambia il profilo del dente sul fondo (vedere [Note](#Note)).

helical

- Dati**beta** (`Angle`): L'impostazione predefinita è `0 °`. Con l'angolo dell'elica β viene creato un ingranaggio elicoidale – valore positivo → senso di rotazione destra, valore negativo → senso di rotazione sinistra (vedere [Note](#Note)).
- Dati**double_helix** (`Bool`): L'impostazione predefinita è `false`, `true` crea un ingranaggio a doppia elica (vedere [Note](#Note)).
- Dati**properties_from_tool** (`Bool`): L'impostazione predefinita è `false`. Se `true` e Dati**beta** non è zero, i parametri dell'ingranaggio vengono ricalcolati internamente per l'ingranaggio ruotato.

hole

- Dati**Axle_hole** (`Bool`): Default is `false`. `true` enables a central hole for an axle.
- Dati**Axle_holesize** (`Length`): Default is `10 mm`. Diameter of the hole for an axle.
- Dati**offset_hole** (`Bool`): Default is `false`, `true` enables an offset hole.
- Dati**offset_holeoffset** (`Length`): Default is `10 mm`. The offset of the offset hole.
- Dati**offset_holesize** (`Length`): Default is `10 mm`. The diameter of the offset hole.

involute

- Dati**pressure_angle** (`Angle`): Il valore predefinito è `20 °` (vedere [Note](#Note)).
- Dati**shift** (`Float`): Il valore predefinito è `0`. Genera uno spostamento del profilo positivo o negativo (vedere [Note](#Note)).

tolerance

- Dati**backlash** (`Length`): L'impostazione predefinita è `0`. Il gioco, chiamato anche aria o spaziatura, è la distanza tra i denti di una coppia di ingranaggi.
- Dati**clearance** (`Float`): L'impostazione predefinita è `0.25` (vedere [Note](#Note)).
- Dati**head** (`Float`): L'impostazione predefinita `0`. Questo valore viene utilizzato per modificare l'altezza del dente.
- Dati**reversed_backlash** (`Bool`): `true` diminuzione del gioco o `false` (predefinito) aumento del gioco vedere [Note](#Note)).

version

- Dati**version** (`String`):

## Note

- _beta_: Quando viene modificato _beta_, cambia anche _diametro primitivo_. La seguente formula illustra come interagiscono i parametri: d = m \* Z / cos beta (Z = numero di denti, d = diametro primitivo, m = modulo). Ciò significa che per la ruota dentata cilindrica: cos beta = 0 e per la ruota elicoidale: cos beta > 0. Tuttavia un angolo dell'elica inferiore a 10° non presenta quasi alcun vantaggio rispetto ai denti diritti.
- _clearance_: In una coppia di ingranaggi, il gioco è la distanza tra la testa del dente del primo ingranaggio e il piede del dente del secondo ingranaggio.
- _double_gear_: Per utilizzare la doppia dentatura elicoidale è necessario prima inserire l'angolo dell'elica β (_beta_) per la dentatura elicoidale.
- _module_: Utilizzando le linee guida ISO (Organizzazione internazionale per la standardizzazione), la dimensione del modulo è designata come l'unità che rappresenta le dimensioni dei denti degli ingranaggi. Modulo (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). Se si moltiplica il modulo per pigreco, si può ottenere il passo (p). Il passo è la distanza tra i punti corrispondenti dei denti adiacenti.
- _shift_: Lo spostamento del profilo non viene utilizzato semplicemente per prevenire il sottosquadro. Può essere utilizzato per regolare la distanza centrale tra due ingranaggi. Se viene applicata una correzione positiva, tale da prevenire il sottosquadro in un pignone, lo spessore del dente nella parte superiore è più sottile.
- _teeth_: Se si cambia il numero di denti, cambia anche il diametro primitivo (_dw_).
- _undercut_: Il sottosquadro viene utilizzato quando il numero di denti di un ingranaggio è troppo piccolo. Altrimenti l'ingranaggio di accoppiamento taglia il piede del dente. Il sottosquadro non solo indebolisce il dente come un vitino di vespa, ma rimuove anche parte dell'evolvente utile adiacente al cerchio di base.
- _pressure_angle_: 20° è un valore standard in questo caso. L'angolo di pressione è definito come l'angolo tra la linea d'azione (tangente comune ai cerchi di base) e una perpendicolare alla linea dei centri. Pertanto, per gli ingranaggi standard, gli ingranaggi con angolo di pressione di 14,5° hanno i cerchi di base molto più vicini ai piedi dei denti rispetto agli ingranaggi da 20°. È per questo motivo che gli ingranaggi da 14,5° incontrano maggiori problemi di sottosquadro rispetto agli ingranaggi da 20°. Importante. l'angolo di pressione cambia con uno spostamento del profilo. Modificare il parametro solo se si dispone di una conoscenza sufficiente della geometria dell'ingranaggio.
- _reversed_backlash_: Se sono presenti più ingranaggi, prestare attenzione per quale ingranaggio viene impostato il parametro.

## Limitazioni

Un profilo del dente 2D, ottenuto impostando Dati**height** su zero, non può essere utilizzato con funzionalità che richiedono una forma 2D. Ad esempio, le funzioni [PartDesign: Estrusione](/PartDesign_Pad/it "PartDesign Pad/it") e [PartDesign: Elica additiva](/PartDesign_AdditiveHelix/it "PartDesign AdditiveHelix/it") non accettano tale profilo come base. Per i dettagli tecnici, fare riferimento al relativo [issue su GitHub](https://github.com/looooo/freecad.gears/issues/97).

## Formule utili

### Ingranaggi cilindrici standard

Qui “standard” si riferisce a quegli ingranaggi cilindrici senza coefficiente di spostamento del profilo (

x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4)).

Formule base comuni agli ingranaggi cilindrici standard interni ed esterni

| Simbolo                                                       | Termine                                          | Formula                                                                                                                                                           | Parametro FCGear                                                                                                                        |
| ------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| m {\displaystyle m} {\displaystyle m}                         | _Modulo_                                         | -                                                                                                                                                                 | module {\displaystyle {\texttt {module}}} {\displaystyle {\texttt {module}}}                                                            |
| z {\displaystyle z} {\displaystyle z}                         | _Numero di denti_                                | -                                                                                                                                                                 | teeth {\displaystyle {\texttt {teeth}}} {\displaystyle {\texttt {teeth}}}                                                               |
| α {\displaystyle \alpha } {\displaystyle \alpha }             | _Pressure Angle_                                 | Tipicamente, α = 20 ∘ {\displaystyle \alpha =20^{\circ }} {\displaystyle \alpha =20^{\circ }}                                                                     | pressure \_ angle {\displaystyle {\texttt {pressure}}{\\\_}{\texttt {angle}}} {\displaystyle {\texttt {pressure}}{\_}{\texttt {angle}}} |
| d {\displaystyle d} {\displaystyle d}                         | _Diametro di riferimento_ o _Diametro primitivo_ | z ⋅ m {\displaystyle z\cdot m} {\displaystyle z\cdot m}                                                                                                           | dw {\displaystyle {\texttt {dw}}} {\displaystyle {\texttt {dw}}}                                                                        |
| h a ∗ {\displaystyle h\_{a}^{\*}} {\displaystyle h\_{a}^{\*}} | _Coefficiente di Addendum_                       | Tipicamente, h a ∗ = 1 {\displaystyle h\_{a}^{\*}=1} {\displaystyle h\_{a}^{\*}=1}                                                                                | h a ∗ = 1 + head {\displaystyle h\_{a}^{\*}=1+{\texttt {head}}} {\displaystyle h\_{a}^{\*}=1+{\texttt {head}}}                          |
| h f ∗ {\displaystyle h\_{f}^{\*}} {\displaystyle h\_{f}^{\*}} | _Coefficiente di Dedendum_                       | Tipicamente, h f ∗ = 1.25 {\displaystyle h\_{f}^{\*}=1.25} {\displaystyle h\_{f}^{\*}=1.25}                                                                       | h f ∗ = 1 + clearance {\displaystyle h\_{f}^{\*}=1+{\texttt {clearance}}} {\displaystyle h\_{f}^{\*}=1+{\texttt {clearance}}}           |
| h a {\displaystyle h\_{a}} {\displaystyle h\_{a}}             | _Addendum_                                       | h a = h a ∗ ⋅ m {\displaystyle h\_{a}=h\_{a}^{\*}\cdot m} {\displaystyle h*{a}=h*{a}^{\*}\cdot m}                                                                 | -                                                                                                                                       |
| h f {\displaystyle h\_{f}} {\displaystyle h\_{f}}             | _Dedendum_                                       | h f = h f ∗ ⋅ m {\displaystyle h\_{f}=h\_{f}^{\*}\cdot m} {\displaystyle h*{f}=h*{f}^{\*}\cdot m}                                                                 | -                                                                                                                                       |
| h {\displaystyle h} {\displaystyle h}                         | _Altezza dente_ o _Profondità dente_             | h = h a + h f {\displaystyle h=h\_{a}+h\_{f}} {\displaystyle h=h*{a}+h*{f}} Tipicamente, h = 2.25 ⋅ m {\displaystyle h=2.25\cdot m} {\displaystyle h=2.25\cdot m} | -                                                                                                                                       |
| x {\displaystyle x} {\displaystyle x}                         | _Coefficiente di spostamento del profilo_        | Per ingranaggi standard, x = 0 {\displaystyle x=0} {\displaystyle x=0}                                                                                            | shift {\displaystyle {\texttt {shift}}} {\displaystyle {\texttt {shift}}}                                                               |

Formule di base specifiche per ingranaggi cilindrici standard esterni

| Simbolo                                           | Termine             | Formula                                                                                                                                                                                                      |
| ------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| d a {\displaystyle d\_{a}} {\displaystyle d\_{a}} | _Diametro di testa_ | d a = d + 2 ⋅ h a {\displaystyle d\_{a}=d+2\cdot h\_{a}} {\displaystyle d*{a}=d+2\cdot h*{a}} Tipicamente, d a = ( z + 2 ) ⋅ m {\displaystyle d\_{a}=(z+2)\cdot m} {\displaystyle d\_{a}=(z+2)\cdot m}       |
| d f {\displaystyle d\_{f}} {\displaystyle d\_{f}} | _Diametro di piede_ | d f = d − 2 ⋅ h f {\displaystyle d\_{f}=d-2\cdot h\_{f}} {\displaystyle d*{f}=d-2\cdot h*{f}} Tipicamente, d f = ( z − 2.5 ) ⋅ m {\displaystyle d\_{f}=(z-2.5)\cdot m} {\displaystyle d\_{f}=(z-2.5)\cdot m} |

Formule di base specifiche per ingranaggi cilindrici standard interni

| Simbolo                                           | Termine             | Formula                                                                                                                                                                                                      |
| ------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| d a {\displaystyle d\_{a}} {\displaystyle d\_{a}} | _Diametro di testa_ | d a = d − 2 ⋅ h a {\displaystyle d\_{a}=d-2\cdot h\_{a}} {\displaystyle d*{a}=d-2\cdot h*{a}} Tipicamente, d a = ( z − 2 ) ⋅ m {\displaystyle d\_{a}=(z-2)\cdot m} {\displaystyle d\_{a}=(z-2)\cdot m}       |
| d f {\displaystyle d\_{f}} {\displaystyle d\_{f}} | _Diametro di piede_ | d f = d + 2 ⋅ h f {\displaystyle d\_{f}=d+2\cdot h\_{f}} {\displaystyle d*{f}=d+2\cdot h*{f}} Tipicamente, d f = ( z + 2.5 ) ⋅ m {\displaystyle d\_{f}=(z+2.5)\cdot m} {\displaystyle d\_{f}=(z+2.5)\cdot m} |

Formule di base specifiche per una coppia di ingranaggi cilindrici esterni standard

| Simbolo                               | Termine                   | Formula                                                                                                                                                                                                                                                                             |
| ------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| a {\displaystyle a} {\displaystyle a} | _Distanza tra i centri_   | a = d 1 + d 2 2 {\displaystyle a={\frac {d\_{1}+d\_{2}}{2}}} {\displaystyle a={\frac {d*{1}+d*{2}}{2}}}                                                                                                                                                                             |
| c {\displaystyle c} {\displaystyle c} | _Giogo tra testa e piede_ | c 1 = h f 2 − h a 1 {\displaystyle c\_{1}=h\_{f2}-h\_{a1}} {\displaystyle c*{1}=h*{f2}-h*{a1}} c 2 = h f 1 − h a 2 {\displaystyle c\_{2}=h\_{f1}-h\_{a2}} {\displaystyle c*{2}=h*{f1}-h*{a2}} Tipicamente, c = 0.25 ⋅ m {\displaystyle c=0.25\cdot m} {\displaystyle c=0.25\cdot m} |

- **Ingranaggi elicoidali e a doppia elica**
  - _diametro primitivo (dw)_ = _module_ \* *teeth* : _cos beta_
  - _interasse_ = *(diametro primitivo (dw) 1 + diametro primitivo (dw) 2)* : 2
  - _diametro addendum_ = _diametro primitivo (dw)_ + 2 \* _modulo_
  - _module_ = _diametro primitivo (dw)_ \* *cos beta* : _denti_

## Script

Utilizzare la potenza di Python per automatizzare la modellazione degli ingranaggi:

```
import FreeCAD as App
import freecad.gears.commands
gear = freecad.gears.commands.CreateInvoluteGear.create()
gear.teeth = 20
gear.beta = 20
gear.height = 10
gear.double_helix = True
App.ActiveDocument.recompute()
Gui.SendMsgToActiveView("ViewFit")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InvoluteGear/it&oldid=1529003>"
