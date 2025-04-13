---
title: 機能一覧
---

以下は FreeCAD に実装されている機能の包括的なリストですが、全てを網羅できているわけではありません。

## リリースノート

- [第 1.1 版](/Release_notes_1.1/ja "Release notes 1.1/ja") - _開発版（毎週更新中）_
- **[第 1.0 版](/Release_notes_1.0/ja "Release notes 1.0/ja") - 2024 年 11 月**
- [第 0.21 版](/Release_notes_0.21 "Release notes 0.21") - 2023 年 8 月
- [第 0.20 版](/Release_notes_0.20 "Release notes 0.20") - 2022 年 6 月
- [第 0.19 版](/Release_notes_0.19 "Release notes 0.19") - 2021 年 3 月
- [第 0.18 版](/Release_notes_0.18 "Release notes 0.18") - 2019 年 3 月
- [第 0.17 版](/Release_notes_0.17 "Release notes 0.17") - 2018 年 4 月
- [第 0.16 版](/Release_notes_0.16 "Release notes 0.16") - 2016 年 4 月
- [第 0.15 版](/Release_notes_0.15 "Release notes 0.15") - 2015 年 3 月
- [第 0.14 版](/Release_notes_0.14 "Release notes 0.14") - 2014 年 3 月
- [第 0.13 版](/Release_notes_0.13 "Release notes 0.13") - 2013 年 1 月
- [第 0.12 版](/Release_notes_0.12 "Release notes 0.12") - 2011 年 12 月
- [第 0.11 版](/Release_notes_0.11 "Release notes 0.11") - 2011 年 3 月

## 主要な機能

- ![](/images/Feature1.jpg)

  複雑な形状に対する高度な 3D 操作を可能にする、完全な[[1]](https://ja.wikipedia.org/wiki/Open_Cascade_%E3%83%86%E3%82%AF%E3%83%8E%E3%83%AD%E3%82%B8%E3%83%BC)ベースの*ジオメトリカーネルを持ち、以下のような概念を標準でサポートしています。[境界表現](https://en.wikipedia.org/wiki/Boundary_representation)（BREP）、[N非一様有理Bスプライン](https://ja.wikipedia.org/wiki/NURBS)（NURBS）曲線と表面、幅広い幾何エンティティ、ブール演算や[フィレット](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%AC%E3%83%83%E3%83%88_(%E6%A9%9F%E6%A2%B0%E5%B7%A5%E5%AD%A6))、[STEP](https://ja.wikipedia.org/wiki/ISO_10303)や[IGES](https://ja.wikipedia.org/wiki/IGES)フォーマット。*

- ![](/images/Feature3.jpg)

  完全にパラメトリックなモデリング。すべての FreeCAD オブジェクトは本質的にパラメトリックです。その形状は[プロパティー](/Property/ja "Property/ja")または他のオブジェクトによって決まります。すべての変更点は必要に応じて再計算され、変更履歴の管理（アンドゥ／リドゥ）機能に記録されます。新しいオブジェクト・タイプを追加することも容易で、[Python プログラム](/Scripted_objects "Scripted objects")でプログラムすることも可能です。

- ![](/images/Feature4.jpg)

  **モジュール構造**によって、（モジュールやワークベンチなどの）プラグインを追加して機能の拡張ができます。これら拡張機能は、C++でプログラムされた複雑なものから、簡単な[Python スクリプト](/Power_users_hub "Power users hub")、自分で記録した[マイロ](/Macros "Macros")まで対応可能です。組み込み**Python**インタプリター、マクロ、あるいは外部スクリプトを通じて、[形状の作成と変形](/Topological_data_scripting "Topological data scripting")、形状の 2D または 3D[表現](/Scenegraph "Scenegraph")、さらには[FreeCAD ユーザー・インタフェース](/PySide "PySide")など、FreeCAD のほとんど全ての部分にアクセスできます。

- ![](/images/Feature5.jpg)

  FreeCAD のネイティブ・フォーマットである[FCStd](/File_Format_FCStd "File Format FCStd")に加えて、下記**標準フォーマット**をインポート・エクスポートできます： [STEP](https://ja.wikipedia.org/wiki/ISO_10303)、[IGES](https://ja.wikipedia.org/wiki/IGES)、[OBJ](http://en.wikipedia.org/wiki/Obj)、[STL](https://ja.wikipedia.org/wiki/Standard_Triangulated_Language)、[DXF](https://ja.wikipedia.org/wiki/DXF)、[SVG](https://ja.wikipedia.org/wiki/Scalable_Vector_Graphics)、[DAE](https://ja.wikipedia.org/wiki/COLLADA)、[IFC](https://ja.wikipedia.org/wiki/Industry_Foundation_Classes)、[OFF](http://people.sc.fsu.edu/~jburkardt/data/off/off.html)、[NASTRAN](https://ja.wikipedia.org/wiki/Nastran)、[VRML](https://ja.wikipedia.org/wiki/VRML)。実装しているワークベンチに依存しているため、各ファイル形式と FreeCAD の互換性のレベルはまちまちです。

- ![](/images/Feature7.jpg)

  拘束ソルバーを組み込んだ[Sketcher](/Sketcher_Workbench/ja "Sketcher Workbench/ja")を使用すると、拘束条件に基づいて 2D の図形を作成できます。Sketcher で作成した 2D 図形を使って、さらに FreeCAD の中で別のオブジェクトを作成することができます。

- ![](/images/Feature8.jpg)

  詳細図面、断面図、寸法定義などの機能を備えた[技術的製図ワークベンチ](/TechDraw_Workbench/ja "TechDraw Workbench/ja")を使うと、既存の 3D モデルの 2D 図面を作成できます。作成した 2D 図面は、そのまま SVG や PDF で形式でエクスポート可能です。

- ![](/images/Feature-arch.jpg)

  [BIM ワークベンチ](/BIM_Workbench "BIM Workbench")を使って、[Industry Foundation Classes](https://ja.wikipedia.org/wiki/Industry_Foundation_Classes)（IFC）互換の[建築情報モデリング](https://ja.wikipedia.org/wiki/BIM)（BIM）的なワークフロー管理が可能になります。

- ![](/images/Feature-CAM.jpg)

  [コンピュータ支援製造](https://ja.wikipedia.org/wiki/CAM)（CAM）のための、専用の機械加工用の[CAM ワークベンチ](/CAM_Workbench "CAM Workbench")を提供しています。CAM ワークベンチによって、対象となる製造機械を制御するための[G コード](http://en.wikipedia.org/wiki/G-code)を出力、表示、調整できます。

- ![](/images/Feature_spreadsheet.png)

  [組み込みスプレッドシート](/Spreadsheet_Workbench "Spreadsheet Workbench")と[数式](/Expressions "Expressions")を使用して、モデルのデーターを一箇所で集中管理し、数式ベースでモデルを作成することができます。

## 基本機能

- **マルチプラットフォーム**　 FreeCAD は Windows、Linux、macOS 等で完全に同じように動作します。

- **完全な GUI アプリケーション** FreeCAD は完全なグラフィカルユーザーインターフェースを持っています。このグラフィカルユーザーインターフェースは[Qt](http://www.qtsoftware.com/)フレームワークを利用しており、3D ビューワーは[Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor)を元に作成されています。これによって高速な 3D シーン描画が可能になり、シーンのグラフィック表現の取り扱いが非常に容易になっています。

- **コマンド・ライン・アプリケーション**　 FreeCAD はコマンド・ライン・アプリケーションとしても動作します。GUI はありませんが、図形オブジェクトを扱うツールは全て利用可能です。メモリーの消費量が少なくなる他、例えば他のアプリケーション用のデータを作成するためのサーバーとして FreeCAD を使用することも可能になります。

- **[Python モジュール](/index.php?title=Embedding_FreeCAD/jp&action=edit&redlink=1 "Embedding FreeCAD/jp (page does not exist)")としてインポート可能** FreeCAD を Pytho モジュールとして他のアプリケーションに組み込み、Python スクリプトを実行できます。コマンド・ラインで実行したときと同様に FreeCAD の GUI は利用できませんが、図形オブジェクトを扱うツールは全て利用可能です。

- **ワークベンチ・コンセプト** FreeCAD のユーザー・インターフェイスでは、ツールは[ワークベンチ](/Workbenches "Workbenches")によってグループ分けされます。これによってある作業を行う上で必要なツールだけを表示し、作業スペースを整頓された使いやすい状態に保ち、アプリケーションの読み込みを高速にすることができます。

- **機能・データー型の遅延読み込みのためのプラグイン・モジュール・フレームワーク** FreeCAD は核となるアプリケーションと、必要時にのみ読み込まれるモジュールやワークベンチから構成されます。ほとんど全てのツールや図形の型はワークベンチに含まれています。ワークベンチはプラグインとして動作します。必要になった時に読み込まれるだけでなく、個別に FreeCAD に追加・削除できます。

- **パラメーター連動オブジェクト** FreeCAD ドキュメント上の全てのオブジェクトは、パラメーターによって定義できます。これらパラメーターは、いつでも変更し再計算可能です。オブジェクトの間の関連性を保持するため、1 つのオブジェクトを変更すると、それに依存するオブジェクトにも自動的に変更が反映されます。

- **パラメトリック・プリミティブ作成** 立方体、球、円柱などのプリミティブ・オブジェクトは、その形状のパラメターを指定することで作成できます。

- **グラフィカル修正操作** FreeCAD は、3D 空間内の任意の平面上で、平行移動、回転、拡大縮小、鏡像反転、オフセット（簡単なもの、あるいは[Jung/Shin/Choi](https://www.researchgate.net/publication/240754626_Self-intersection_Removal_in_Triangular_Mesh_Offsetting)で説明されているもの）、形状変換を行うことができます。

- **[空間領域構成法](https://ja.wikipedia.org/wiki/Constructive_Solid_Geometry)** FreeCAD は、空間領域構成法のためのブーリアン演算（和集合、差集合、共通集合）を行えます。

- **グラフィカルな平面図形作成** 直線、折れ線、四角形、B スプライン曲線、円弧、楕円弧を、3D 空間内の任意の平面上に作成できます。

- **直線押し出し・回転押し出し・断面・フィレットによるモデリング**

- **構成要素** 例えば**頂点**、**辺**、**折れ線**、**面**。

- **テストと修復** メッシュのためのツールを用意しています：ソリッド・テスト（面が全て連結して穴がないか）、非多様体テスト（形状が正しく接続され、連続した 3D 形状として扱えるか）、自己交差テスト、メッシュの修復（穴埋め、メッシュの整合性を確保するためにすべての面の法線ベクトルを外向きに揃える）

- **注釈** FreeCAD では、文字列や寸法に注釈を入れることができます。

- **変更履歴管理（アンドゥ・リドゥ）** 変更履歴にアクセスすることで、FreeCAD での操作はアンドゥ・リドゥが可能です。一度に複数のステップをアンドゥすることもできます。

- **トランザクション志向** 変更履歴は、個別の内部処理ではなく、操作をトランザクションとして保持します。これによって各ツールは何をアンドゥまたはリドゥするかを正確に定義することができます。

- **組み込み[スクリプト・フレームワーク](/Scripting "Scripting")** FreeCAD は組み込みの[Python](http://www.python.org/)インタプリターを搭載しています。ユーザー・インタフェース、図形、3D ビューアー上の図形表現など、FreeCAD のほぼ全てにアクセス可能な API を用意しています。インタプリターは単純なコマンドだけでなく、複雑なスクリプトを実行できます。ワークベンチ全体を Python だけでプログラムすることも可能です。

- **組み込み Python コンソール** Python インタプリターには、構文ハイライト、自動補完、クラスブラウザー機能を含むコンソールが備わっています。Python コマンドを FreeCAD に直接入力すると直ちに結果を返します。スクリプト作成者はその場で機能をテストしたり、FreeCAD のモジュールやワークベンチの中身を調べたりすることが可能で、FreeCAD の内部構造を理解することも容易です。

- **ユーザー操作のミラーリング** ユーザーが FreeCAD のユーザー・インタフェースで行う操作は Python コードとして実行され、そのコードはコンソール上に表示されたり、マクロとして記録されます。

- **完全な[マクロ](/Macros "Macros")記録と編集** ユーザーの操作は Python コマンドとして実行されます。後で再実行するために、それを記録、必要に応じて編集した上で、保存しておくことができます。

- **（ZIP ベースの）複合ドキュメント保存フォーマット** FreeCAD ドキュメントは、.[FCStd](/File_Format_FCStd "File Format FCStd")拡張子付きで保存されます。このフォーマットには、図形、スクリプト、サムネイル・アイコンなど様々な種類の情報を保存できます。.FCStd ファイルは zip アーカイブなので、FreeCAD のファイルは保存時に既に圧縮されています。

- **完全にカスタマイズ・スクリプト化可能なグラフィカル・ユーザー・インターフェース**　[Qt](http://www.qtsoftware.com)ベースの FreeCAD のユーザー・インターフェイスは、Python インタープリターから全てアクセスできます。FreeCAD 自体がワークベンチに提供する単純な機能だけではなく、Qt フレームワーク全体にアクセスできます。ユーザーは、ウィジェットやツールバーを作成、追加、ドッキング、変更、削除など、GUI に対してあらゆる操作を行うことができます。

- **サムネイラー** (今のところ Linux システムのみ): Gnome の Nautilus を始めとしたほとんどのファイルマネージャーアプリケーションで FreeCAD ドキュメントのアイコン上にファイルの内容を表示します。

- **モジュール化された MSI インストーラー** Windows への柔軟なインストールが可能です。Ubuntu 用のパッケージも整備されています。

## その他のワークベンチ

パワーユーザが作成した様々なカスタム[外部ワークベンチ](/External_workbenches/ja "External workbenches/ja")があります。。

Retrieved from "<http://wiki.freecad.org/index.php?title=Feature_list/ja&oldid=1544038>"
