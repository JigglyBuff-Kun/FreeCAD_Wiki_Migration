---
title: マニュアル：3D印刷のためのモデルの準備
---

FreeCAD の主な目的の 1 つは、実際の製品に変換できるオブジェクトの設計です。これらの設計データーは工場に共有して製造することもできますし、最近では[https://ja.wikipedia.org/wiki/3D%E3%83%97%E3%83%AA%E3%83%B3%E3%82%BF%E3%83%BC](https://en.wikipedia.org/wiki/3D_printing)や[コンピューター数値制御フライス盤など](https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E6%95%B0%E5%80%A4%E5%88%B6%E5%BE%A1)に直接送って自動的に製品を製造することもできます。FreeCAD を使えば、さまざまな製造方法に対応した正確で詳細なモデルをすぐい作成できるのです。この章では、あなたが他の人と共同作業しているのか一人で全ての作業をしているのかによらず、これらの製造方法にに適した仕様を満たすモデルを作成するために必要な手順について説明します。

注意深くモデリングすれば、3D 印刷時の課題の多くは事前に回避できます。特に注意すべき点は下記の通りです。

- **設計したオブジェクトがソリッドであること**：実際の部品と同じように、3D モデルもソリッド（物理的に閉じた形状）である必要があります。FreeCAD、特にパートデザインワークベンチを使うと、設計工程を通じてモデルがソリッドであることを確認できます。もしソリッド性を損なう操作をした場合、そのことを通知してくれます。さらに、パートワークベンチの![](/images/Part_CheckGeometry.svg) [幾何形状のチェック](/Part_CheckGeometry/ja "Part CheckGeometry/ja")ツールを使うと、3D 印刷で問題になり得る欠陥や問題を特定することができます。

- **寸法の正確性を確認する**：FreeCAD 上のデーターがそのまま実際の製品に反映されるため、長さの精度は非常に重要です。FreeCAD 上の 1 ミリメートルは、製品上でも 1 ミリメートルです。したがって、全ての寸法を慎重に設定し、検証して精度を保つ必要があります。

- **製造誤差の管理**：どんな 3D プリンターや CNC フライス盤でも FreeCAD のデーターを直接扱えるわけではないことに留意することが重要です。これらの機械は、G コードと呼ばれる機械言語を使っています。G コードには、機種やメーカーによってさまざまの方言があります。多くの場合、モデルを G コードに変換する工程ではスライサーと呼ばれるソフトウェアを使いますが、さらに詳細をコントロールするために、手動で行うことも可能です。いずれにしても、この変換の過程、特にモデルを印刷のためのメッシュ形式に変換する際に詳細や品質が一定程度失われてしまうことは避けられません。この誤差が最終的な製品の機能や外観に影響しない許容範囲内に収まるようにする必要があります。

- **エクスポート形式の互換性**：3D 印刷では STL ファイルがよく使われますが、この形式ではモデルを三角形のメッシュで表現するため、一定の詳細が失われてしまいます。したがって、どこまで詳細を保存するのかとファイルサイズのバランスをとって、エクスポート時に適切な解像度を設定することが重要です。また、CNC 加工では、STL よりも元のデザインの幾何学的整合性を維持できる STEP または IGS の方が望ましい形式です。G コードに変換する際に精度が維持される適切なファイル形式を選択することが重要です。

- **メッシュ解析と調整**：スライサーや CNC ツールパス生成プログラムにデーターをエクスポートする前に、FreeCAD の[メッシュワークベンチ](/Mesh_Workbench/ja "Mesh Workbench/ja")のメッシュ解析を実施し、不規則な形状や非マニフォールドエッジ、その他製造を難しくする可能性のある問題を検出することを推奨します。モデルが完璧であったとしても、さらに 3D プリンターや CNC 加工機が正しく調整されているか（例えば、ベッドレベリング、ステッパーモーター設定、エクストルーダー設定など）を確認し、最終製品の品質問題を回避する必要があります。

以下では、既にモデルのソリッド性や寸法に注意してモデルを作成したものとして、3D 印刷や CNC 加工で必要なモデルの品質を維持できるよう、どのように G コードへの変換を行ったらいいのかについて考察します。これらについて注意することで、FreeCAD モデルから直接物理的なオブジェクトを正しく製造する準備が整います。

### スライサーへのエクスポート

3D モデルから印刷の準備をする最も一般的な方法は、3D オブジェクトをスライサーと呼ばれる専用ソフトウェアにエクスポートすることです。スライサーは、モデルを薄い層に切り分け（スライスし）G コードを生成します。プリンターは、それを 1 層 1 層積み上げることでオブジェクトを製造します。多くの 3D プリンター、特に自作されたものやホビー向けのものには独自の校正があるため、スライサーソフトウェアは幅広い高度な設定機能を持っています。これらの設定を通じて、層の高さ、印刷スピード、インフィルの密度、サポートの構造などの重要なパラメタを調整し、特定のプリンターの機能や性能に合わせて確実に調整された G コードが生成されます。

多くのスライサーは、印刷プロセスを事前に確認するためのシミュレーションや印刷検証機能を提供しており、非常に役立ちます。各層で印刷がどのようなパスで行われるのかを見ることができるので、サポートが必要なオーバーハングや冷却が不十分な場所など、潜在的な問題を検出するのに役立ちます。この印刷前の検証により、印刷開始前にモデルが適切に準備されており、印刷失敗や材料の無駄遣いを避けられます。

推定印刷時間やフィラメントやレジン量、それに基づく印刷コストなどを表示する機能などを持っているスライサーは少なくありません。これら印刷プロセスに関する情報をもとに、効率や材料の節約のために設定を調整することができます。3D 印刷の詳細な技術、例えば機械のキャリブレーション、材料選定、後処理などは本ガイドの範囲外ですが、ここでは FreeCAD モデルを適切にエクスポートし、スライサーソフトウェアを使って特定のプリンターに最適化された正しい G コードをどのように出力すればいいのかについて焦点を当てます。

### オブジェクトのメッシュへの変換

現在利用可能なスライサーは、それも FreeCAD のソリッド図形を直接には受け付けません。Cura や PrusaSlicer といったスライサーは、オブジェクトの表面を三角形を組み合わせて表現する、STL、OBJ、3MF といった[mesh](https://ja.wikipedia.org/wiki/%E3%83%9D%E3%83%AA%E3%82%B4%E3%83%B3%E3%83%A1%E3%83%83%E3%82%B7%E3%83%A5)ベースのファイル形式しか扱えません。したがって、まず最初に FreeCAD で作成したモデルを、スライサーが解釈できるメッシュフォーマットに変換する必要があります。
（訳注：PrusaSlicer などの多くのスライサーは STEP ファイルを読み込むことができるようになっており、この部分の記述は古くなっている。したがって、この節は翻訳しない）

The most commonly used format for 3D printing is STL. One reason STL is preferred is its simplicity—it represents the 3D geometry as a mesh of triangles without including complex details like colors, materials, or textures. This minimalistic approach ensures that STL files are lightweight and compatible with virtually all slicers and 3D printers, making it the industry standard. While OBJ and 3MF are also supported, they can carry additional information like textures and materials, which is unnecessary for most 3D printing tasks and can complicate the slicing process.

Fortunately, converting a solid object to a mesh in FreeCAD is straightforward, even though converting a mesh back into a solid is a more complicated operation. During the conversion process, it is crucial to keep in mind that some degradation of the model’s quality may occur, especially when reducing complex geometry to a simple triangular mesh. You must ensure that this degradation remains within acceptable limits to maintain the accuracy of your printed object.

In FreeCAD, the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") handles all mesh-related tasks. This workbench contains tools not only for converting between Part and Mesh objects but also for analyzing and repairing meshes. While mesh manipulation isn’t the primary focus of FreeCAD, it becomes essential when preparing models for 3D printing. Mesh objects are widely used in other applications, and the Mesh Workbench allows you to fully manage and adjust these objects, ensuring they are ready for the next step in the printing process.

- Let's convert the Lego piece we created in the last chapter into an STL mesh. The geometry can be downloaded at the end of said chapter.
- Open the FreeCAD file containing the Lego piece.
- Switch to the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench")
- Select the Lego brick
- Select menu **Meshes → Create Mesh from Shape**
- A task panel will open with several options. Some additional meshing algorithms (Mefisto or Netgen) might not be available, depending on how your version of FreeCAD was compiled. The Standard meshing algorithm will always be present. It offers fewer possibilities than the two others, but is totally sufficient for small objects that fit into the maximum print size of a 3D printer.

![](/images/FreeCAD_MeshLego.png)

- Select the **Standard** mesher, and leave the deviation value to the default value of **0.10**. Press **Ok**.
- A mesh object will be created, exactly on top of our solid object. Either hide the solid or move one of the objects aside, so you can compare both.
- Change the **View → Display Mode** property of the new mesh object to **Flat Lines**, in order to see how the triangulation occurred.
- If you are not happy, and think that the result is too coarse, you can repeat the operation, lowering the deviation value. In the example below, the left mesh used the default value of **0.10**, while the right one uses **0.01**:

![](/images/Exercise_meshing_02.jpg)

In most cases, though, the default values will give a satisfying result.

- We can now export our mesh to a mesh format, such as [STL](https://en.wikipedia.org/wiki/STL_%28file_format%29), which is currently the most widely used format in 3D printing, by using menu **File → Export** and choosing the STL file format.

In FreeCAD, the Mesh Workbench provides several algorithms for converting a solid model into a mesh, including Standard, Mefisto, Netgen, and Gmsh. The Standard algorithm is commonly used for small to medium-sized objects as it provides a balance between speed and mesh quality. When creating a mesh, two critical parameters are the surface deviation and angular deviation. Surface deviation controls how closely the mesh follows the original geometry, with smaller values providing a finer, more accurate mesh but potentially leading to larger file sizes. Angular deviation defines how much deviation is allowed based on changes in the model's angles, particularly for curves and sharp edges. Other options like relative surface deviation allow you to adjust the precision dynamically based on the model's scale, and features like applying face colors or defining mesh segments by color are useful for advanced rendering or grouping different regions of the model. Once the mesh is generated, it can be exported in formats like STL, OBJ, or 3MF, which are essential for preparing models for 3D printing. Mesh quality is crucial for ensuring that 3D printers interpret the model correctly, so selecting the right meshing algorithm and deviation settings can significantly affect the final print outcome.

### PrusaSlicer を使う

[PrusaSlicer](https://github.com/prusa3d/prusaslicer/releases)は、STL、OBJ、3MF ファイルを、3D プリンターに直接送れる G コードに変換するためのアプリケーションです。FreeCAD と同じく、自由でオープンソースのソフトウェアであり、Windows、macOS、Linux 上で動作します。Prusa Research 社によって開発され Prusa 社のプリンター向けに最適化されていますが、PrusaSlicer はほとんど全ての 3D プリンターと互換性があり、さまざまな機種で利用することができます。PrusaSlicer は Slic3r というスライサーを基にしていますが、大幅な改善と頻繁なアップデートが行われていあす。Slic3r はもはや積極的には更新されていませんが、PrusaSlicer は進化し続けており、適応型レイヤー高さ調整、ツリー型サポート、印刷戦略の改善などの新しい機能が追加され続けています。

3D 印刷のためにスライサーを正しく設定するのは、対象となる 3D プリンターの機能・性能をきちんと理解していることが前提となる複雑なプロセスです。あるプリンター向けに設定したスライサーを、この知識に基づいて適切に設定し直さないまま G コードを生成すると、別のプリンターではうまく動かないファイルになってしまいます。PrusaSlicer は、STL ファイルから正しく G コードに変換され印刷できるのかを事前に検証する素晴らしい機能を持っています。PrusaSlicer のシミュレーション機能を使うと、G コードに基づくプリンターの動作をプレビューし、実際の印刷の前に深刻な問題がないことを確認できます。

これは、エクスポートした STL ファイルを PrusaSlicer で開いたところです。単に**スライス**ボタンを押すだけで、スライサーはモデルを複数の層に分解し、3D プリンターのヘッドのパスを生成し、必要なスピードと温度を設定します。インフィル、サポート、外周を計算し、プリンターが必要とする詳細の命令を含む G コードを生成します。スライスされたモデルの各層をプレビューし、想定印刷時間と必要フィラメント量を確認できます。そのうえで、実際のプリントのために G コードをセーブしたりプリンターに送信することができます。

![](/images/FreeCAD_PrusaSlicer.png)

PrusaSlicer 以外にも、3D 印刷で使えるスライサーソフトウェアの選択肢があります。Ultimaker 社製の[Cura](https://ultimaker.com/fr/software/ultimaker-cura/)は、幅広いプリンターと互換性があり、広範囲なカスタマイズの可能な、最も人気のあるオープンソースのスライサーの 1 つです。[Simplify3D](https://www.simplify3d.com/)は、先進的な機能と効率的なパスを生成することで知られる専有ソフトウェアです。[MatterControl](https://www.matterhackers.com/store/l/mattercontrol/sk/MKZGTDW6)は、簡易 CAD ツールを含むオープンソースのスライサーです。Raise3D 社製の[IdeaMaker](https://www.raise3d.com/fr/ideamaker/)は、適応型レイヤー高さ調整の機能とユーザーフレンドリーなインタフェースを持つスライサーです。最後に、PrusaSlicer と Bambu Studio を基にした新しいオープンソースのスライサーである[OrcaSlicer](https://github.com/SoftFever/OrcaSlicer)は、さまざまの機種向けの追加機能を提供しています。それぞれのスライサーにはそれぞれ特徴があり、利用しているプリンターや印刷要件によって最適な選択は変わります。

### G コード生成

The ![](/images/Workbench_CAM.svg) [CAM Workbench](/CAM_Workbench "CAM Workbench") in FreeCAD provides advanced options for generating G-code directly for CNC machines, offering greater flexibility and control compared to automatic slicing tools like those used for 3D printing. While 3D printing slicers can automatically convert a model into G-code with minimal input, CNC milling requires much more user involvement to ensure precise control over the toolpaths, speeds, depths, and other machining parameters. This makes the CAM Workbench essential for tasks that demand fine-tuned G-code, particularly for CNC milling, where machine complexity and the variety of operations (like cutting, drilling, and contouring) require careful planning.

In the CAM Workbench, G-code path generation is highly customizable. It features tools to generate complete machine paths for various operations, or, alternatively, you can build partial G-code segments and assemble them into a full milling operation. This modular approach allows you to tailor each step of the machining process, optimizing the toolpaths for efficiency, material type, and specific machine capabilities.

The CAM process is indeed much more intricate than 3D printing because CNC machines use different tools and must account for material removal, tool geometry, and safety margins, all of which are configured manually. In FreeCAD, building a simple CAM project requires defining toolpaths, adjusting cutting depths, selecting appropriate tools, and configuring work offsets, feeds, and speeds. Unlike slicer software, which handles most of this automatically, the CAM Workbench places the control in your hands, making it highly customizable but also more complex.

Though generating CNC milling paths is a topic too broad to cover in detail here, we’ll demonstrate how to create a simple CAM project in FreeCAD. While we won’t focus on every detail of real-world CNC machining, this guide will introduce you to the essential steps, emphasizing the level of input required to ensure accurate and efficient results. This added complexity is essential for CNC projects, where precision and customizability are critical to achieving desired machining outcomes.

- Load the file containing our Lego piece, and switch to the ![](/images/Workbench_CAM.svg) [CAM Workbench](/CAM_Workbench "CAM Workbench").
- Press on the ![](/images/CAM_Job.svg) [Job](/CAM_Job "CAM Job") button and select our lego piece.
- Since this section doesn’t aim to provide an in-depth tutorial of the CAM Workbench, we will be using the default values. If you would like a more detailed tutorial, please refer to [CAM walk-through](/CAM_Walkthrough_for_the_Impatient "CAM Walkthrough for the Impatient"). Keep in mind that in the CAM Workbench, a stock body is automatically created around your object, representing the raw material that will be machined. Right now, this stock body extends 1 mm in all directions from the object.

![](/images/FreeCAD_CAM1.png)

- The first step is to remove the unnecessary material from around our object. At this stage, we’re starting with a solid block of raw material, and we need to carve out the Lego brick from this block. This process involves defining the toolpaths that will gradually cut away the excess material, leaving behind the desired shape of the Lego.

- The following image shows the FreeCAD CAM Workbench setup for machining a Lego block. The model tree includes solid modeling operations like Pad, Pocket, and LinearPattern, which were used to shape the part. A Job is created, containing toolpaths under Operations that define how the material will be removed from the Stock. The Default Tool is selected for machining, and the Model-Body represents the 3D part being worked on. This setup prepares the object for generating G-code to control the CNC machine.

![](/images/FreeCAD_CAMtree.png)

- Before we begin cutting away the excess material, let's make some adjustments to the milling tool that will be used. Although the CAM Workbench allows you to define custom tools, for simplicity, we will modify the default tool. This will ensure the settings are optimized for our project without needing to create a new tool from scratch.

- Click on the **TC:Default Tool** text. This will open up the **Tool Controller Editor**. Change the feed rates and spindle velocities as shown in the picture. The feed rates for horizontal and vertical cutting are set to 2000 mm/min, while the spindle speed is set to 2000 RPM with forward rotation. These settings control the movement and cutting speed of the tool during the machining process.

![](/images/FreeCAD_toolController.png)

- Double-click on the tool itself and change its diameter to 1mm.
- Now we are ready to begin removing the excess material from the block, gradually carving out the Lego geometry. This process will involve the toolpaths we set, ensuring the final shape matches the intended design.
- Click on the ![](/images/CAM_Profile.svg) [Profile](/CAM_Profile "CAM Profile"). This option is used to carve out the unnecessary material around the perimeter of the part, effectively shaping the outer boundaries to achieve the general dimensions of the Lego piece.
- Normally you will not have to change any of the default values, except the **Extra Offset** located in the Operation tab. Set this option to 1 mm to ensure that the remaining object corresponds correctly to the Lego's boundaries.
- Once you press **apply** you should be able to see those green lines around the object. Those lines visualize the path our cutting object will follow when cutting the initial block.

![](/images/FreeCAD_CAMProfile.png)

- Our next step is to create the 6 extruding cylinders on the top of the Lego block.
- Choose the top face and click on the ![](/images/CAM_Pocket_Shape.svg) [Pocket Shape](/CAM_Pocket_Shape "CAM Pocket Shape") button. On the **Extensions** tab, enable Extensions and click on the edge of the top face (it should normally be automatically added in the default length box.
- Finally, on the **Operation** tab input -1.5 mm in the **Pass Extension box** and change the pattern option to a ZigZagOffset.
- Press **apply** and then close the tab.
- In a similar manner we can create the three cylinders on the bottom of the Lego piece.
- We can easily visualize the steps followed during the milling of the object by using the ![](/images/CAM_SimulatorGL.svg) [SimulatorGL](/CAM_SimulatorGL "CAM SimulatorGL") option.

### ダウンロード

- 本解説で生成した STL ファイル: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/lego.stl>
- 本解説で生成した FreeCAD ファイル: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/path.FCStd>
- 本解説で生成し t あ G コードファイル: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/lego.gcode>

**参考情報**

- [メッシュワークベンチ](/Mesh_Workbench/ja "Mesh Workbench/ja")
- [STL ファイル形式](https://ja.wikipedia.org/wiki/Standard_Triangulated_Language)
- [Slic3r](http://slic3r.org/)
- [Cura](https://ultimaker.com/en/products/cura-software)
- [Cura ワークベンチ](https://github.com/cblt2l/FreeCAD-CuraEngine-Plugin)
- [CAM ワークベンチ](/CAM_Workbench/ja "CAM Workbench/ja")
- [Camotics](http://camotics.org/)

### 解説動画

- [How To Use FreeCAD For 3D Printing | Using The Realthunder Branch](https://www.youtube.com/playlist?list=PL6Fiih6ItYsWCE20KtUJYpiDPrCA2rVpN) A video playlist by Maker Tales about how to use FreeCAD for 3D printing.

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:Preparing_models_for_3D_printing/ja&oldid=1544110>"
