---
title: Sandbox Blocktomo
---

This is the sandbox for [User:Blocktomo](/User:Blocktomo "User:Blocktomo").

Summary :

- [#Improvements to Toothbrush Head Stand](#Improvements_to_Toothbrush_Head_Stand)
- d
- d

# Improvements to [Toothbrush Head Stand](/Toothbrush_Head_Stand "Toothbrush Head Stand")

This text will go at the very end of the [Toothbrush Head Stand](/Toothbrush_Head_Stand "Toothbrush Head Stand") tutorial, right after "Export as a .STL" section.
«

## to go further

You may have noticed that in the tutorial for the plate, it was laborious to repeat 4 times the action of setting the distance to the borders (20mm). A good practice would be to set it _once_ and then duplicate it 3 times. We will look into this here.

What we will do is actually duplicate the sketch, the pad and the chamfer. We could also only duplicate the sketch using ![](/images/Sketcher_Translate.svg) [Array transform](/Sketcher_Translate "Sketcher Translate") ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) and then ![](/images/Sketcher_Symmetry.svg) [Symmetry](/Sketcher_Symmetry "Sketcher Symmetry") in the Sketcher Workbench.

The point is : we make only _one_ custom sketch, and create replicas of this sketch, which will evolve with any changes applied to the original sketch.

First, save your document as a new document (**File → Save As**), in order to edit freely your model.
Go back to Sketch001, and delete the four occurences of circles. Keep only one of them. We recommend in this tutorial to keep the top-left one.

[Screencapture of the sketch.]

Your sketch should still be fully constrained : the distances of the only circle to the borders are still 20 mm, and its radius 5mm.

Then, close the sketcher, and extrude this shape on 25 mm. This pad should logically be named "Pad001". If not, just remember the name you have.

Repeat the step described earlier consisting of applying a chamfer to the base of the pillar.

Then, in the [tree view](/Tree_view "Tree view"), select both **Pad001** and **Chamfer**.

Open the ![](/images/PartDesign_MultiTransform.svg) [PartDesign MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform") tool . It should look like this :

[ScreenCapture]

If not, check that you have indeed selected the pad and the chamfer.

Then, right-click again in the **Transformations** list, and select **Add [linear pattern](/PartDesign_LinearPattern "PartDesign LinearPattern")**. Set it to 40mm and two occurences, and click OK.

- Here, however, the better practive would have been to use the constraints : enter the [expression](/Expression "Expression") mode by first clicking in the spinbox for the length. A small blueish circular icon will appear at the right side. Clicking that icon opens in a new window the Formula editor where formulas and expressions can be entered. Enter this expression : <<Sketch>>.Constraints.length - 2\*<<Sketch001>>.Constraints.distanceToBorder, where distanceToBorder is the name we gave to the 20mm Horizontal Constraint in **Sketch001**. This way, if you decide to make your stand a rectangle instead of a square shape, by only changing the shape's "length" constraint, the linear pattern will also update itself.

[ScreenCapture of this example]

Next, Right-click again in the **Transformations** list and select **linear pattern**, and repeat the previous operation, along the Y-Axis this time..
[ScreenCapture of the second linear pattern being set, with the pillars having been duplicated already.]

Note : a [mirrored transformation](/PartDesign_Mirrored "PartDesign Mirrored") of the two pillars (with their chamfers) instead of the linear pattern would have worked too, but we would have to add reference [lines](/PartDesign_Line "PartDesign Line") so as to apply the mirro transformation in relation to the center of the sketch.

Why is this a good practice? Imagine you realise the radius of the pilars is simply to small. Using this method, you can change the sketch of the top left pillar and all pillars will change.

The same goes for setting formulas which rely on a sketche's constraints : by using this method, if you make your square shape into a larger rectangular shape, the pillars will continue to be repeated to the right distance. Try doing that, and compare the results using the first method described and the using the method with the Constraints.

---

Retrieved from "<http://wiki.freecad.org/index.php?title=Sandbox:Blocktomo&oldid=1441900>"
