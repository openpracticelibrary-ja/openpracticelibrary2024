---
templateKey: practice-page
title: ユビキタス言語
subtitle: ビジネスドメインの用語と概念を明確に定義する。
date: 2023-01-10T09:22:39.364Z
authors:
  - jtudelag
tags:
  - culture
  - learn
mobiusTag: foundation
icon: /images/ubiquitous_language_galaxy_stable_difussion.jpeg
whatIs: >-
  ユビキタス言語とは、ソフトウェア開発プロセスに関わるすべての人の間で、標準的で厳密かつ曖昧性のない言語を構築することです。通常、開発チームとユーザーの間で共通の共有言語となるが、それに限定されるものではありません。プロダクトオーナーやその他のステークホルダーも同様に採用すべきものです。


   これはドメイン駆動設計の世界から来ています。これは、エリック・エバンス（Eric Evans）が自身の著書["Domain-Driven Design: Tackling Complexity in the Heart of Software"](https://www.amazon.com/exec/obidos/ASIN/0321125215/domainlanguag-20)で2003年に初めて紹介したものです。

whyDo: >-
  ビジネス・ドメインが非常に複雑な場合、チーム・メンバーやユーザーが、同じコンセプトについて異なる理解をしているという状況がよく見られます。


  共通理解の欠如は、開発チームが提供するものの速度と品質に深い影響を及ぼし、また、ユーザーが思い描いていたものが最終的に実装されたものではないため、ユーザーのフラストレーションにつながることもあります。


  複雑なドメイン・コンセプトの例:


  * AIモデル開発領域における *”タイム・トラベリング”*

  * データエンジニアリングの領域における *”マージ vs ジョイン”*


  ユビキタス言語の開発には多くの利点があります。


  * ビジネス・ドメインとユーザーをよりよく理解する。

  * 開発プロセスから曖昧さを取り除く。

  * 開発プロセスに関わるすべての人、特に開発者とユーザーの間で共通言語を確立する。
howTo: >-
  ユビキタス言語プラクティスのアウトプットは、用語・概念とその定義の用語集であるべきです。この用語集は、開発者だけでなく、開発プロセスに関わるすべての人が読んだりレビューしたりできるのが理想的です。変更を追跡し、提案することができるgitリポジトリは、そのための理想的な格納場所となるでしょう。


  書くよりも描くことが良い場合もあります。平易な言葉よりも図で説明した方が良い概念もあるかもしれません。


  ユビキタス言語の開発を始めるために：


  1. 他のプラクティスからドメインの概念を収集し始めます。[イベントストーミング](https://openpracticelibrary-ja.netlify.app/practice/event-storming/)は、ビジネスドメインに関連するが、イベントストーミングの参加者全員が等しく理解していない概念を収集し始めるのに最適なプラクティスの候補です。イベントストーミングに限定しないでください。[インパクトマッピング](https://openpracticelibrary-ja.netlify.app/practice/impact-mapping/)や[共感マッピング](https://openpracticelibrary-ja.netlify.app/practice/empathy-mapping/)のような他のディスカバリープラクティスも良い選択肢です。

  2. それらの概念の定義を策定します。

  3. 開発チーム、ユーザー、POなどとそれらを検証し、フィードバックを求めます。

  4. 反復します ;)
mediaGallery:
  - link: https://www.youtube.com/watch?v=pMuiVlnGqjk&t=2978s
resources:
  - link: https://martinfowler.com/bliki/UbiquitousLanguage.html
    linkType: web
    description: Martin Fowler article on Ubiquitous Language
  - link: https://www.amazon.com/exec/obidos/ASIN/0321125215/domainlanguag-20
    linkType: purchase
    description: 'Eric Evans book: "Domain-Driven Design: Tackling Complexity in the
      Heart of Software"'
  - link: https://thedomaindrivendesign.io/developing-the-ubiquitous-language/
    linkType: web
    description: How to develop an Ubiquitous Language
  - link: https://www.youtube.com/watch?v=pMuiVlnGqjk&t=2978s
    linkType: video
    description: What is DDD - Eric Evans - DDD Europe 2019
difficulty: easy
participants:
  - Team
  - ProductOwner
  - Stakeholders
  - Users
---
