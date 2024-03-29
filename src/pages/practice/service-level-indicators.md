---
templateKey: practice-page
title: サービスレベル指標
subtitle: サービスの品質を定量化する
date: 2021-04-14T21:07:30.597Z
authors:
  - ckavili
tags:
  - methods
mobiusTag: foundation
icon: /images/sli.png
whatIs: サービスレベル指標（SLI） は利用者視点のサービス評価指標です。
  これは、サービスの利用者が関心を持つ可用性、遅延、応答時間と密接に関係しています。
whyDo: サイト信頼性エンジニアリング（SRE）には、サービスレベル指標（SLI）、サービスレベル目標（SLO）、エラーバジェットの3つの重要な指標があります。
  これらの3つの要素を計測する目的は、データに基づいたよりよい情報をもとに、意思決定や作業の優先順位付けを行えるようにすることです。
  SLO とエラーバジェットは信頼性と新機能のバランスをとるために客観的言語（Objective Language）を提供します。
  SLI は3つの中で最も重要な役割を果たすため、正しい意思決定を行うために本当に意味のあるSLIが必要になります。
howTo: >
  ソフトウェアのプラットフォームは日々複雑化しているため、ユニークなコンポーネントやデータポイントも増加しています。
  多くのSLIを持つと、本当に重要なことに焦点を当てる妨げになることがあります。
  プロダクトオーナーやビジネスオーナー、チームとセッションを行い、どの測定値をSLIとして使用するべきか決めましょう。


  * *ユーザーにとって「良い」または「利用可能」が何を意味するか定義する*: 「ユーザーはサービスをどのように利用しているか？」「ユーザーはサービスを利用することでどのようなことを成し遂げようとしているか？」といった質問によって重要なユーザージャーニーを定義することから始めます。

  * *システムコンポーネントをマッピングする*: 各ユーザージャーニーに対して、プラットフォームまたはシステム間の相互作用の中におけるシステム上の境界を定義します。「ユーザージャーニーがインフラのどの部分とやり取りしているか？」という質問は、ユーザーに機能を提供しているコンポーネントを定義するのに役立つでしょう。

  * *各コンポーネントに対するSLIを定義する*: コンポーネントに対して1つまたは複数のSLIを定義し、それが計測できるポイントを特定します。これらのSLIはユーザーの「良い」または「利用可能」を反映したものでなくてはなりません。注意したいのは、測定するSLIは特定の瞬間ではなく、一定期間（例えば一時間など）測定する必要があることです。つまり、ある瞬間ではなく、ある期間のサービスのパフォーマンスを計測することができるのです。SLIを利用する1つの理由は、継続的改善です。ですから、過去、現在、未来のパフォーマンスを比較できることが重要なのです。「1日あたりのエラー数」や「1時間あたりの平均レイテンシー」などのような期間の指標を使用することで比較可能にしましょう。

  * *データポイントを定義する*: 何のテレメトリデータ/メトリクスを、どこで、どのように使用するかを定義し、実装手順を作成します。その際、ユーザに最も近いポイントを探します。そうすればそれがユーザの体験を代表するデータになります。

  * *ベースラインを作る*: ベースラインを作るために、計測を始めましょう。計測を始める前に「もっとよい」ものを始めに決める方が良いような気がしていたとしても、可能な限り早い段階でベースラインのデータを得ることが重要です。なぜなら計測した情報を加味して意思決定を行い、進捗を計測できるようになるからです。

  * *観察と繰り返し*: 一定期間（例えば1〜2週間）に渡ってSLIを観察しましょう。ユーザの幸福度を関連するものをトラッキングし、それをサービスのパフォーマンスをより理解するために繰り返します。


  ### 参考例:


  プラットフォームチームが初期のSLIを決めました。まず、重要なユーザージャーニーをリストアップしました。


  プラットフォームチームのユーザは以下のことを求めている:


  * プラットフォーム上にサンドボックス環境をつくる

  * 新しい候補者がプラットフォームに簡単にオンボードできる

  * プラットフォーム上で彼らのアプリケーションがどのような状態かわかる

  * アプリケーションやユーザに影響のある問題が起きたことを通知する

  * 問題によっては課題のデバッグができる

  * 問題によってはログやメトリクスにアクセスできる

  * アプリケーションを自動的にスケールする


  チームが選んだ最も重要なユーザージャーニー:「新しい候補者がプラットフォームに簡単にオンボードできる」


  このジャーニーは「セルフサービスポータルの利用」にマッピングされました。ユーザはセルフサービスポータルにログインし、プラットフォームにアプリケーションを載せるために必要な情報を入力します。


  このユーザージャーニーのステップ:


  1. ユーザーは会社の認証情報を使ってポータルにログインする

  2. ユーザーはオンボーディングページにいく

  3. ユーザはアプリケーション情報のフォームを埋める（入力する）


  このジャーニーにおけるユーザ視点の「良い」は以下のような意味として定義した:


  * ポータルはいつでも利用可能である

  * ポータルは正しい認証情報を提供したとき、ユーザを認証する

  * ポータルは十分速くレスポンスする


  チームはこのジャーニーを次のようにマッピングした:


  1. ユーザーはブラウザでダッシュボードを見られる

  2. ブラウザはプラットフォームで稼働しているポータルを表示する

  3. ポータルは認証APIにアクセスしてユーザ認証を行うことができる

  4. ポータルはプラットフォームのAPIにアクセスしてオンボーディングフローをトリガーできる


  そして、チームはSLIを以下のように定義した:


  * リクエスト成功率（%）（例：ステータスコードが5xxでない）

  * ポータルは5秒以内に応答する


  その後のステップは、このSLIを収集する最も適した場所を定義することです。ユーザに最も近いポイントを選ぶことが重要です。チームはどこでデータを取得するか決定し、サービスの品質を反映させるダッシュボードを作成します。


  ![example dashboard for request rate](/images/sli_exampleboard.png)
mediaGallery: []
resources:
  - link: https://sre.google/sre-book/service-level-objectives/#indicators-o8seIAcZ
    linkType: web
    description: Google SRE Book - Indicators Chapter
  - link: https://newrelic.com/blog/best-practices/best-practices-for-setting-slos-and-slis-for-modern-complex-systems
    linkType: web
    description: Best Practices for Modern Complex Systems as example
participants: []
---
