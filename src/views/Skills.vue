<template>
  <div>
    <SubTitle name="Skills"/>
    <div class="skills-flex-container">
      <SkillCard v-for="skill in skills"
      v-bind:key="skill.name"
      v-bind:name="skill.name"
      v-bind:term="skill.term"
      v-bind:content="skill.content" />
    </div>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle.vue'
import SkillCard from '@/components/SkillCard.vue'

export default {
  name: 'skills',
  components: {
    SubTitle,
    SkillCard
  },
  data () {
    return {
      skills: [
        {name: 'C/C++',
        term: '2年半',
        content: 'C言語は最初に触れた言語で大学の講義で主に使用しています。C++はロボットのプログラミングに使用していました。習熟度で言えば一番だと思います。'},
        {name: 'Ruby', 
        term: '1年', 
        content: 'サーバーサイドや競技プログラミングに使用しています。便利なメソッドやライブラリが豊富なところが好きです。が、自分で処理を書きたいなと思うようになったきっかけもこの言語です。'},
        {name: 'JavaScript',
        term: '3ヶ月',
        content: 'Web開発で必要になった際に適宜使っている程度で、簡単なものしか記述できずあまり得意とは言えません。調べながらであれば大体の処理は書けそうな気がします。'},
        {name: 'Go',
        term: '3,4ヶ月',
        content: '静的型付けがトレンドと聞いて始めてみました。競プロで使用していますが、interfaceや並列処理などのコードは書いておらず、まだ慣れていません。APIサーバーを立ててアプリを作ってみたいと考えています。'},
        {name: 'HTML/CSS',
        term: '1年',
        content: 'Webアプリのフロントエンドで使用しています。あまり見た目にこだわらないタイプなので、最低限のデザインで済ませがちです。'},
        {name: 'Ruby on Rails',
        term: '1年',
        content: 'Webアプリ作成で主に使用している（いた）フレームワークです。Webの勉強をするにつれて、なんでもござれなRailsは基礎を学ぶのに不向きだと思い始めました。'},
        {name: 'Sinatra',
        term: '2ヶ月',
        content: 'サーバーサイドのコードを極力自分で書きたいという気持ちが高まって始めました。MySQLと連携して簡単なAPIサーバーを立てるところまではできます。'},
        {name: 'Vue.js',
        term: '2ヶ月',
        content: '新しめなフロントエンド技術の習得の第1歩に選びました。このポートフォリオに使用しています。'},
        {name: 'MySQL',
        term: '半年',
        content: 'Railsと一緒に使うことが多く、SQLはあまり書いた経験がありませんでしたが、Sinatraを始めたのを機に自力でSQLを書くようになりました。'},
        {name: 'Docker',
        term: '半年',
        content: '念願のmacbookを手に入れて以降、開発環境はDockerで作るようにしています。コンテナの立ち上げ・破棄が手軽にでき、ローカル環境が汚れないので気に入っています。'},
        {name: 'Git/GitHub',
        term: '1年',
        content: 'プロジェクトのソース管理に使用しています。個人での使用がほとんどですが、ハッカソンでプルリクを経験したことはあります。'}
      ]
    }
  }
}
</script>

<style lang="scss">
.skills-flex-container {
  width: 80%;
  margin-left: 10%;
  @media screen and (max-width: 767px) {
    width: 90%;
    margin-left: 5%;
  }
}
.skills-flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  align-content: flex-start;
}
</style>