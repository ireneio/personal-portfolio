<template>
  <div>
    <BaseTitleBar label="Concepts" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in skillset.concepts" :key="item.id" />
        </div>
      </div>
    </div>
    <BaseTitleBar label="Languages & Runtimes" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in skillset.languages" :key="item.id" />
        </div>
      </div>
    </div>
    <BaseTitleBar label="Javascript Frameworks & Tools" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in skillset.jsFrameworks" :key="item.id" />
        </div>
      </div>
    </div>
    <BaseTitleBar label="Databases" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in skillset.databases" :key="item.id" />
        </div>
      </div>
    </div>
    <!-- <BaseTitleBar label="DevOps & Cloud" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in skillset.devops" :key="item.id" />
        </div>
      </div>
    </div>
    <BaseTitleBar label="Operating Systems" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in skillset.os" :key="item.id" />
        </div>
      </div>
    </div>
    <BaseTitleBar label="Web Servers" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in skillset.webServers" :key="item.id" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Card, Skillset } from '~/types/index.ts'
import BaseTitleBar from '~/components/BaseTitleBar.vue'
import BaseCard from '~/components/BaseCard.vue'
import { dataStore } from '~/store/index'

@Component({
  layout: 'default',
  components: {
    BaseTitleBar,
    BaseCard,
  },
})
export default class Skill extends Vue {
  private get skillset(): Skillset {
    return dataStore.data.skillset ? dataStore.data.skillset : {}
  }

  private mounted(): void {
    window.scrollTo(0, 0)
  }
}
</script>

<style></style>
