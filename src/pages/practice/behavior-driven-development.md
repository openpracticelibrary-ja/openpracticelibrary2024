---
templateKey: practice-page
title: 振る舞い駆動開発
subtitle: プロダクトチームにおける要件理解の共有化
date: 2023-02-09T16:56:48.187Z
authors:
  - rmarting
tags:
  - methods
mobiusTag: foundation
icon: /images/bdd.png
whatIs: >-
  振る舞い駆動開発（BDD）は、テストファースト、つまりアジャイルなテストプラクティスにフォーカスしたソフトウェア開発プロセスであり、システムの振る舞いを指定したテストを定義（自動化も可能）することで品質の作り込みを実現します。


  このプラクティスは、*Given/When/Then*のようなパターンを使って、ビジネス担当者と技術担当者の会話からシステムの振る舞いを捉えるという、ビジネス価値に焦点を当てたものです。
whyDo: >-
  これは、以下によって、ビジネス担当者と技術担当者の間のギャップを埋めるプロダクトチームの進め方です:


  * ユビキタス言語による要件の共有化

  * 開発をリードし、手戻りを減らし、フローを向上

  * ストーリー、フィーチャー、ケイパビリティの動作をユーザーの視点から記述しようとする、ビジネス向けのシナリオを作成
howTo: >-
  BDDプロセスでは、あらゆるソフトウェアのテストを、そのユニットの望ましい振る舞いの観点から特定する必要があります。望ましい振る舞いは、どのようなソフトウェア・ユニットであれ、ビジネス上の価値を持つ、ビジネスによって設定された要件で構成され、これは「アウトサイド・イン」活動と呼ばれます。


  このプロセスは、ビジネス担当者と技術担当者の会話に基づいており、ディスカバリーワークショップと呼ばれることもあります。ディスカバリー・ワークショップの一例であるExample Mappingは、特定のケースについて複数の例を挙げることで、1つの概念について下手な抽象化をするよりも情報をうまく伝えられるという考えに基づいています。


  最終的に、技術担当者は、これらのテストを開発活動の受け入れ基準の一部として使用する、あるいは開発ライフサイクルをガイドするために自動化することができます。


  このプロセスは次のように要約できる:


  1. システムのシナリオまたは望ましい動作を設定する。

  2. ディスカバリー・ワークショップでのさまざまなテストを文書化する。

  3. テストを実施するか、開発ライフサイクルの受け入れ基準の一部に含める。
mediaGallery:
  - link: https://github.com/openpracticelibrary/openpracticelibrary/blob/main/static/images/bdd.png?raw=true
  - link: https://github.com/openpracticelibrary/openpracticelibrary/blob/main/static/images/example-mapping.jpg?raw=true
resources:
  - link: https://en.wikipedia.org/wiki/Behavior-driven_development
    linkType: web
    description: Behavior-Driven Development (Wikipedia)
  - link: https://openpracticelibrary-ja.netlify.app/practice/example-mapping/
    linkType: web
    description: 実例マッピング - Open Practice Library
difficulty: moderate
participants:
  - Product_Owner
  - Development_Team
  - Test_Team
  - Business_Owner
---
