---
title: FreeCADについて
---
![](/images/Freecad_default.jpg)

**FreeCAD**は、[LGPL License](/License/ja "License/ja")でライセンスされる、汎用の[オープンソース](https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BD%E3%83%BC%E3%82%B9)のパラメトリック3D [**CAD**](https://ja.wikipedia.org/wiki/CAD)モデラーです。もともと[機械設計](https://ja.wikipedia.org/wiki/%E6%A9%9F%E6%A2%B0%E5%B7%A5%E5%AD%A6)や[プロダクトデザイン](https://ja.wikipedia.org/wiki/%E3%83%97%E3%83%AD%E3%83%80%E3%82%AF%E3%83%88%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3)を主な対象としていますが、汎用性が高いため、建築設計、有限要素解析、3Dプリントなど幅広いエンジニアリング分野にも適しています。

FreeCADは、[CATIA](https://ja.wikipedia.org/wiki/CATIA)、[SolidWorks](https://ja.wikipedia.org/wiki/SolidWorks)、[Solid Edge](https://ja.wikipedia.org/wiki/Solid_Edge)、[Revit](https://ja.wikipedia.org/wiki/Revit)などと同様のツールを備えており、[**CAD**](https://ja.wikipedia.org/wiki/CAD)だけでなく[**製品ライフサイクル（PLM）**](https://ja.wikipedia.org/wiki/%E8%A3%BD%E5%93%81%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB)、[**CAx**](http://en.wikipedia.org/wiki/CAx)、[**CAE**](https://ja.wikipedia.org/wiki/CAE)、[**ビルディング・インフォメーション・モデリング（BIM）**](https://ja.wikipedia.org/wiki/BIM)ツールとしても利用できます。FreeCADは[フィーチャーベースのパラメトリックモデラー](http://en.wikipedia.org/wiki/Parametric_feature_based_modeler)であり、モジュール構造を採用しているため、コアシステムを改変することなく機能追加することが可能です。

他のCADモデラーと同様に、多くの2D機能を備えており、平面形状のスケッチや図面を作成できます。しかし、[Inkscape](https://inkscape.org/)や[AutoCAD LT](http://en.wikipedia.org/wiki/AutoCAD#AutoCAD_LT)のような直接的な2D製図は主な目的ではありません。[Blender](https://www.blender.org/)や[Maya](https://ja.wikipedia.org/wiki/Maya), [Autodesk 3ds Max](https://ja.wikipedia.org/wiki/3ds_Max)、[Cinema 4D](https://ja.wikipedia.org/wiki/CINEMA_4D)のようなアニメーションやメッシュ編集も重視していません。それでも、その幅広い拡張性のおかげで、FreeCADは基本機能を超えて幅広い分野でも有用です。

FreeCADは、多くの[計算科学](https://ja.wikipedia.org/wiki/%E8%A8%88%E7%AE%97%E7%A7%91%E5%AD%A6)分野のオープンソースライブラリを活用しています。
その中には、強力なCADカーネルである[Open Cascade Technology (OCCT)](http://OpenCascade.org)、[Open Inventor](https://ja.wikipedia.org/wiki/Open_Inventor)互換の3Dグラフィック開発用ツールキットの[Coin3D](https://github.com/coin3d/coin/wiki)、世界的に有名なUIフレームワークである[Qt](http://www.qt.io/)、そして現代的なスクリプト言語の一つである[Python](http://www.python.org)等が含まれています。FreeCAD自身も、ライブラリとして他のプログラムから利用することができます。

FreeCADは[クロスプラットフォーム](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%97%E3%83%A9%E3%83%83%E3%83%88%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0)対応しています。現在、Linux/Unix、Windows、macOSの各システム上で、同じ外観で同じ機能が動きます。

FreeCADの機能についてさらに知りたければ、[機能一覧](/Feature_list/ja "Feature list/ja")、[最新版のリリースノート](/Feature_list/ja#Release_notes "Feature list/ja")、[はじめてみよう](/Getting_started/ja "Getting started/ja")のページ、[スクリーンショット](/Screenshots/ja "Screenshots/ja")を参照してください。

### FreeCADプロジェクトについて

[歴史](/History/ja "History/ja")にある通り、FreeCADプロジェクトは2001年に始まりました。

FreeCADは[熱心な開発者とユーザーのコミュニティー](/Contributors/ja "Contributors/ja")によって維持・開発されており、数百人の貢献者による根気強い作業によって構築されています。定期的に活動している人もいれば、時折貢献する人もいます。多くの人はボランティアとしてFreeCADを支えています。ほとんどのアイディアや意思決定は[FreeCADフォーラム](http://forum.freecad.org)で議論されます。コードは、[GitHubリポジトリ](https://github.com/FreeCAD/FreeCAD)で管理・共有・議論・開発されています。誰でも[FreeCADプロジェクトに参加できます](/Help_FreeCAD/ja "Help FreeCAD/ja")。

### FreeCADプロジェクト協会

FreeCADプロジェクトは、[FreeCADプロジェクト協会（FPA）](https://fpa.freecad.org)という非営利団体にも支援されています。FPAは2021年にFreeCADのベテランメンバーが設立した独立の組織で、プロジェクトやそのコミュニティーを支援するための[寄付](/Donate/ja "Donate/ja")やその他のリソースを集め、コミュニティを保護し、最適な環境で開発が続けられるように支援し、企業や機関など他の団体に対してプロジェクトを代表する役割も果たしています。

Retrieved from "<http://wiki.freecad.org/index.php?title=About_FreeCAD/ja&oldid=1556780>"