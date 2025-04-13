---
title: Draft Campitura
---
## Descrizione

Gli oggetti [Draft](/Draft_Workbench/it "Draft Workbench/it") con una proprietà Dati**Make Face** possono visualizzare un modello SVG invece di un colore a tinta unita della faccia.

![](/images/DraftPatternSample.png)

Un'ellisse e un poligono con un modello SVG

## Utilizzo

1. Assicurarsi che gli oggetti siano chiusi e planari e non si intersechino.
2. Per chiudere una [Draft Polilinea](/Draft_Wire/it "Draft Wire/it"), una [Draft BSpline](/Draft_BSpline/it "Draft BSpline/it"), una [Draft Curva di Bézier cubica](/Draft_CubicBezCurve/it "Draft CubicBezCurve/it") o una [Draft Curva di Bézier](/Draft_BezCurve/it "Draft BezCurve/it") impostare la sua proprietà Dati**Closed** su `true`.
3. Per chiudere un [Draft Cerchio](/Draft_Circle/it "Draft Circle/it") o una [Draft Ellisse](/Draft_Ellipse/it "Draft Ellipse/it") impostare le sue proprietà Dati**First Angle** e Dati**Last Angle** sullo stesso valore.
4. Selezionare gli oggetti.
5. Passare alla scheda **Visualizza** dell'[Editor di proprietà](/Property_editor "Property editor").
6. La Vista**Modalità di visualizzazione** deve essere impostata su `Flat Lines`.
7. Selezionare un Vista**Pattern**.
8. Facoltativamente, modificare la Vista**Pattern Size**. Si noti che un valore più elevato determina un modello più denso.
9. Il motivo non viene visualizzato quando gli oggetti vengono selezionati. Deselezionarli per verificare il risultato.
10. Facoltativamente riselezionare gli oggetti per modificare le proprietà del modello.

## Campiture Disponibili

* ![aluminium](/images/Aluminium.svg)

  aluminium
* ![brick01](/images/Brick01.svg)

  brick01
* ![concrete](/images/Concrete.svg)

  concrete
* ![cross](/images/Cross.svg)

  cross
* ![cuprous](/images/Cuprous.svg)

  cuprous
* ![diagonal1](/images/Diagonal1.svg)

  diagonal1
* ![diagonal2](/images/Diagonal2.svg)

  diagonal2
* ![earth](/images/Earth.svg)

  earth
* ![general_steel](/images/General_steel.svg)

  general\_steel
* ![glass](/images/Glass.svg)

  glass
* ![hatch45L](/images/Hatch45L.svg)

  hatch45L
* ![hatch45R](/images/Hatch45R.svg)

  hatch45R
* ![hbone](/images/Hbone.svg)

  hbone
* ![line](/images/Line.svg)

  line
* ![plastic](/images/Plastic.svg)

  plastic
* ![plus](/images/Plus.svg)

  plus
* ![simple](/images/Simple.svg)

  simple
* ![solid](/images/Solid.svg)

  solid
* ![square](/images/Square.svg)

  square
* ![steel](/images/Steel.svg)

  steel
* ![titanium](/images/Titanium.svg)

  titanium
* ![wood](/images/Wood.svg)

  wood
* ![woodgrain](/images/Woodgrain.svg)

  woodgrain
* ![zinc](/images/Zinc.svg)

  zinc

## Note

* I modelli SVG sono archiviati nei file .SVG. È possibile utilizzare i propri modelli personalizzati. Vedere [Preferenze](#Preferenze).
* I modelli stessi non vengono salvati nel documento di FreeCAD. Gli oggetti il ​​cui Vista**Pattern** non può essere trovato vengono invece visualizzati con un colore della faccia a tinta unita.

## Preferenze

Vedere anche: [Impostare le preferenze](/Preferences_Editor/it "Preferences Editor/it") e [Preferenze per l'ambiente Draft](/Draft_Preferences/it "Draft Preferences/it").

* Per modificare la Vista**Pattern Size** utilizzata per i nuovi oggetti: **Modifica → Preferenze... → Draft → Visualizzazione → Dimensione della campitura SVG**.
* Per specificare una directory con campiture SVG aggiuntive: **Modifica → Preferenze... → Draft → Visualizzazione → Posizione aggiuntiva delle campiture SVG**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Pattern/it&oldid=1338627>"