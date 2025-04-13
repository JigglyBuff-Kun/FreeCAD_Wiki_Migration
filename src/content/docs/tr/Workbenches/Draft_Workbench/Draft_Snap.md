---
title: Taslak Yakalama
---

## Açıklama

[Taslak tezgahı](/Draft_Workbench/tr "Draft Workbench/tr") araçları, imleçle 3D görünümü tıklatarak noktaları, mesafeleri, yarıçapları ve açıları grafiksel olarak seçmenize olanak sağlar.

Yakalama çoğu [Taslak tezgahı](/Draft_Workbench/tr "Draft Workbench/tr") ve [Mimari Tezgah](/Arch_Workbench/tr "Arch Workbench/tr") araçlarıyla kullanılabilir ve ![](/images/Draft_Snap_Lock.svg) [Yakalama aç/kapa](/Draft_Snap_Lock/tr "Draft Snap Lock/tr") düğmesi, yakalama araç çubuğunda bulunur ve bu düğmeye tıklayarak global olarak etkinleştirilebilir veya devre dışı bırakılabilir. **Görünüm → Araç Çubukları → Taslak Yakalama** menüsü ile aktif hale getirilebilir. Her bir yakalama yöntemi, araç çubuğundaki ilgili düğmeye tıklayarak ayrı ayrı etkinleştirilebilir veya devre dışı bırakılabilir.

![](/images/Draft_Snap_Endpoint_example.png)

Çizgi yakalama başka bir satıra dikey olarak yakalar

## Snap tools

These tools are available in the Draft snap toolbar and in the [Draft snap widget](/Draft_snap_widget "Draft snap widget").

Note that circular edges do not have to be full circles.

- ![](/images/Draft_Snap_Lock.svg) [Snap lock](/Draft_Snap_Lock "Draft Snap Lock"): enables or disables snapping globally.

- ![](/images/Draft_Snap_Endpoint.svg) [Snap endpoint](/Draft_Snap_Endpoint "Draft Snap Endpoint"): snaps to the endpoints of edges.

- ![](/images/Draft_Snap_Midpoint.svg) [Snap midpoint](/Draft_Snap_Midpoint "Draft Snap Midpoint"): snaps to the midpoint of edges.

- ![](/images/Draft_Snap_Center.svg) [Snap center](/Draft_Snap_Center "Draft Snap Center"): snaps to the center point of faces and circular edges, and to the Veri**Placement** point of [Draft WorkingPlaneProxies](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy") and [Arch BuildingParts](/Arch_BuildingPart "Arch BuildingPart").

- ![](/images/Draft_Snap_Angle.svg) [Snap angle](/Draft_Snap_Angle "Draft Snap Angle"): snaps to the special cardinal points on circular edges, at multiples of 30° and 45°.

- ![](/images/Draft_Snap_Intersection.svg) [Snap intersection](/Draft_Snap_Intersection "Draft Snap Intersection"): snaps to the intersection of two edges.

- ![](/images/Draft_Snap_Perpendicular.svg) [Snap perpendicular](/Draft_Snap_Perpendicular "Draft Snap Perpendicular"): snaps to the perpendicular points on faces ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) and edges.

- ![](/images/Draft_Snap_Extension.svg) [Snap extension](/Draft_Snap_Extension "Draft Snap Extension"): snaps to an imaginary line that extends beyond the endpoints of straight edges.

- ![](/images/Draft_Snap_Parallel.svg) [Snap parallel](/Draft_Snap_Parallel "Draft Snap Parallel"): snaps to an imaginary line parallel to straight edges.

- ![](/images/Draft_Snap_Special.svg) [Snap special](/Draft_Snap_Special "Draft Snap Special"): snaps to special points defined by the object.

- ![](/images/Draft_Snap_Near.svg) [Snap near](/Draft_Snap_Near "Draft Snap Near"): snaps to the nearest point on faces and edges.

- ![](/images/Draft_Snap_Ortho.svg) [Snap ortho](/Draft_Snap_Ortho "Draft Snap Ortho"): snaps to imaginary lines that cross the previous point at multiples of 45°.

- ![](/images/Draft_Snap_Grid.svg) [Snap grid](/Draft_Snap_Grid "Draft Snap Grid"): snaps to the intersections of grid lines.

- ![](/images/Draft_Snap_WorkingPlane.svg) [Snap working plane](/Draft_Snap_WorkingPlane "Draft Snap WorkingPlane"): projects snap points onto the current [working plane](/Draft_SelectPlane "Draft SelectPlane").

- ![](/images/Draft_Snap_Dimensions.svg) [Snap dimensions](/Draft_Snap_Dimensions "Draft Snap Dimensions"): shows temporary X and Y dimensions.

- ![](/images/Draft_ToggleGrid.svg) [Toggle grid](/Draft_ToggleGrid "Draft ToggleGrid"): changes the visibility of the grid.

### Gelişmiş yapışma

- [Orto](/Draft_Snap_Ortho/tr "Draft Snap Ortho/tr") ve [Uzantı](/index.php?title=Draft_Snap_Extension/tr&action=edit&redlink=1 "Draft Snap Extension/tr (page does not exist)") gibi iki yakalama yöntemini birleştirerek, hayali çizgilerin kesişme noktasında bir nokta yakalama noktası oluşturacak şekilde ek yakalama konumları elde edilebilir.
- Diğer yakalama yerleri, [Kısıtlama](/Draft_Constrain/tr "Draft Constrain/tr") kullanılarak, yani Shift tuşuna basılarak veya X, Y veya Z tuşuna basılarak elde edilebilir.
- İmlecin geçerli konumuna bir "tutma noktası" eklemek için çizim yaparken Q tuşuna basın. Daha sonra ortogonal olarak bu tutma noktalarını ve ortogonal eksenlerinin kesişme noktalarını yakalayabilirsiniz. Eğer [Orta Nokta](/Draft_Snap_Midpoint/tr "Draft Snap Midpoint/tr") yakalama özelliği etkinse, iki tutma noktası arasındaki orta mesafeden de yakalayabilirsiniz. [0.17 sürümünde kullanılabilir](/Release_notes_0.17/tr "Release notes 0.17/tr")

![](/images/Draft_Snap_example_cycling_1.png)

Snap cycling 1: The red rectangle was created first therefore it has snap priority. Without snap cycling you cannot snap to the green rectangle where it is overlapped by the red rectangle.

![](/images/Draft_Snap_example_cycling_2.png)

Snap cycling 2: After using the snap cycle key once the green rectangle receives snap priority. Snapping to the midpoint of the overlapped green edge is now possible.

## Notes

Aynı anda birçok yakalam yöntemi kullanmak, nesnelerinizi istenen pozisyonlara çekmek için faydalı olabilir, imleciniz sürekli olarak yanlış noktalara tutturulduğunda sorunlu olabilir. Bu durumda, o zaman yalnızca bir yakalama yöntemi kullanmayı deneyin.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

## Seçenekler

- ![](/images/Draft_ToggleGrid.svg) [Izgara aç/kapa](/Draft_ToggleGrid/tr "Draft ToggleGrid/tr"): Çalışma düzlemi ızgarasını açar veya kapatır.
- ![](/images/Draft_Snap_Lock.svg) [Yakalama aç/kapa](/Draft_Snap_Lock/tr "Draft Snap Lock/tr"): Tüm çalışma ortamlarında yakalamayı açar veya kapatır.

* Bir noktanın yakalama noktası olarak kabul edildiği maksimum mesafe [Seçeneklerde](/index.php?title=Draft_Preferences/tr&action=edit&redlink=1 "Draft Preferences/tr (page does not exist)") belirtilir ve ayrıca [ (artır) veya ](azalt) tuşuna basılarak anında değiştirilebilir.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap/tr&oldid=1338350>"
