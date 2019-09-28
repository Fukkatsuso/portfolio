<template>
  <div>
    <SubTitle name="Skills"/>
    <div class="skills-flex-container">
      <SkillCard v-for="skill in skills"
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
        content: 'C言語は最初に触れた言語で大学の講義で主に使用しています。C++はロボットのプログラミングに使用していました。'},
        {name: 'Ruby', 
        term: '1年', 
        content: 'Webアプリや競技プログラミングに使用しています。'},
        {name: 'JavaScript',
        term: '1ヵ月',
        content: 'Web開発で必要になった際に適宜使っている程度で、簡単なものしか記述できずあまり得意とは言えません。'},
        {name: 'HTML/CSS',
        term: '1年',
        content: 'Webアプリのフロントエンドで使用しています。'},
        {name: 'Ruby on Rails',
        term: '1年',
        content: 'Webアプリ作成で主に使用しているフレームワークです。'},
        {name: 'Vue.js',
        term: '1週間',
        content: '新しめなフロントエンド技術の習得の第1歩に選びました。このポートフォリオに使用しています。'},
        {name: 'Git/GitHub',
        term: '1年',
        content: 'プロジェクトのソース管理に使用しています。'}
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