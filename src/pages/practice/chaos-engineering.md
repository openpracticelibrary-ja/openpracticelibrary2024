---
templateKey: practice-page
title: カオスエンジニアリング
subtitle: 意図的に障害や欠陥のあるシナリオを本番環境へ導入して、ランダムな混乱に直面したときの回復力を検証する分散型ソフトウェアのテスト手法
date: 2022-07-22T09:16:22.656Z
authors:
  - sebw
mobiusTag: delivery
icon: /images/chaos-engineering.png
whatIs: >-
  カオスエンジニアリングは、組織が予測不可能なことを予測しようとするプラクティスです。インフラ障害、ネットワーク障害、アプリケーション障害に対する回復力を獲得するために使われます。


  一般的にテスト駆動開発とは、2＋2＝4であることをテストするとか、データベースに書き込む前にデータベースが利用可能であることをテストするといった、予測可能な不具合をテストすることです。


  カオスエンジニアリングでは、本番システムにわざと障害を導入し、そのカオスにどう耐えるかをチェックします。


  障害にはさまざまな性質がある:


  * サーバーのシャットダウン（サービス、サーバー、データセンター全体のシャットダウンなど）

  * ネットワークの劣化や停止をシミュレートするための遅延注入

  * CPUの高負荷やディスクの一杯といったリソースの枯渇


  このような障害は、アプリケーションに予測不可能な反応を引き起こす可能性があります。


  障害が発生した場合、特定の障害シナリオに耐えられるようにアプリケーションを改善する必要があります。
whyDo: >-
  * 開発者は、CI/CDパイプラインで再現するのが難しい障害シナリオに耐えられるよう、アプリケーションを改善することができます。

  * CI/CDパイプラインでは実装が困難な障害シナリオ（ネットワーク遅延など）をオペレーションでテストできます。

  * アプリケーションの改善に繋がります。
howTo: >-
  [カオスメッシュ（Chaos Mesh）](<https://chaos-mesh.org>) は、Kubernetesのためのカオスエンジニアリングプラットフォームです。


  [カオスモンキー（Chaos Monkey）](https://netflix.github.io/chaosmonkey/) は、本番環境でランダムにインスタンスを停止します。


  [カオスブレイド（Chaos Blade）](https://chaosblade.io/) は、マルチ環境、マルチクラスタ、マルチ言語をサポートするクラウドネイティブなカオスエンジニアリングプラットフォームです。

mediaGallery:
  - link: https://www.verica.io/wp-content/uploads/PrinciplesOfCE2-1.png
resources:
  - link: https://www.dynatrace.com/news/blog/what-is-chaos-engineering/#:~:text=Chaos%20engineering%20is%20a%20method,and%20can%20break%20under%20pressure.
    linkType: web
    description: Chaos Engineering explained by Dynatrace
  - link: https://en.wikipedia.org/wiki/Chaos_engineering
    description: Wikipedia definition of Chaos Engineering
    linkType: web
  - link: https://principlesofchaos.org/
    linkType: web
    description: Principles of chaos
participants: []
---
