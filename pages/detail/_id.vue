<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="box">
          <div class="vid">
            <div class="vid__content">
              <div
                class="vid__btn vid__btn--prev"
                v-show="slides.length > 0 && slide > 0"
                @click="handleSlideUpdate(-1)"
              >
                <fa :icon="['fas', 'arrow-left']" class="btn__icon--small"></fa>
              </div>
              <img :src="slideUrl" alt="Image" />
              <div
                class="vid__btn vid__btn--next"
                v-show="slides.length > 0 && slide < slides.length - 1"
                @click="handleSlideUpdate(1)"
              >
                <fa :icon="['fas', 'arrow-right']" class="btn__icon--small"></fa>
              </div>
            </div>
            <div class="vid__desc">
              <div class="vid__title">
                <fa icon="check-circle" class="card__authorIcon"></fa>
                {{ info.fullName }}
              </div>
              <div class="vid__status">
                <div class="vid__statusLeft">
                  <div class="vid__li vid__statusNum">{{ info.publishDate }}&nbsp;</div>
                  <div class="vid__li vid__statusRate">&nbsp;{{ info.rating ? info.rating.split('-')[1] : 'Frontend Engineer' }}&nbsp;</div>
                  <div class="vid__li vid__li--last vid__statusDate">&nbsp;{{ info.location }}</div>
                </div>
                <div class="vid__statusRight">
                  <div class="vid__toolBtn vid__upvote">
                    <fa :icon="['fas', 'thumbs-up']" class="vid__toolBtnIcon btn__icon--small"></fa>
                    {{ Math.floor(Math.random(0, 1) * 100) }}
                  </div>
                  <div class="vid__toolBtn vid__downvote">
                    <fa :icon="['fas', 'thumbs-down']" class="vid__toolBtnIcon btn__icon--small"></fa>
                    0
                  </div>
                  <div class="vid__toolBtn vid__add">
                    <fa :icon="['fas', 'plus']" class="vid__toolBtnIcon btn__icon--small"></fa>
                    Add
                  </div>
                  <div class="vid__toolBtn vid__report">
                    <fa :icon="['fas', 'flag']" class="vid__toolBtnIcon btn__icon--small"></fa>
                    Report
                  </div>
                  <div class="vid__toolBtn vid__misc">
                    <fa :icon="['fas', 'bars']" class="vid__toolBtnIcon btn__icon--small"></fa>
                  </div>
                </div>
              </div>
              <div class="vid__author">
                <div class="vid__authorDp"></div>
                <div class="vid__authorDetail">
                  <div class="vid__authorName">
                    <div class="vid__authorNameText">keiko15678</div>
                    <fa icon="check-circle" class="card__authorIcon"></fa>
                  </div>
                  <div class="vid__authorSubDetail">
                    <div class="vid__li vid__authorVids">3+ years experience&nbsp;</div>
                    <div class="vid__li vid__li--last vid__authorSubs">&nbsp;Fullstack Engineer</div>
                  </div>
                </div>
                <div class="vid__authorSubscribe">Subscribe</div>
              </div>
              <div class="vid__categories">
                <div class="vid__categoriesTitle">Tech Stack</div>
                <div class="vid__categoriesContent">
                  <div class="vid__categoriesItem" v-for="item in stack" :key="item">
                    {{ item }}
                  </div>
                </div>
              </div>
              <div class="vid__showMore">
                <div class="vid__showMoreText">Show More</div>
              </div>
            </div>
            <div class="vidComments">
              <div class="vidComments__title">Job Description ({{ info.comments.length }})</div>
              <div class="vidComments__box" v-for="item in info.comments" :key="item">
                <div class="vidComments__user">
                  <div class="vidComments__userDp"></div>
                  <div class="vidComments__userName">keiko15678</div>
                  <div class="vidComments__date">1 week ago</div>
                </div>
                <div class="vidComments__content">{{ item }}</div>
                <div class="vidComments__votes">
                  <div class="vid__toolBtn vid__upvote vidComments__upvote">
                    <fa :icon="['fas', 'thumbs-up']" class="vid__toolBtnIcon btn__icon--small"></fa>
                    {{ Math.floor(Math.random(0, 1) * 100) }}
                  </div>
                  <div class="vid__toolBtn vid__downvote">
                    <fa :icon="['fas', 'thumbs-down']" class="vid__toolBtnIcon btn__icon--small"></fa>
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="vidSide">
            <div class="vidSide__title">Related</div>
            <div class="vidSide__content">
              <BaseCard
                :properties="item"
                v-for="item in related"
                :key="item.id"
                @click-pic="handleVisitLink(item.link)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Card } from '~/types/index.ts'
import BaseTitleBar from '~/components/BaseTitleBar.vue'
import BaseCard from '~/components/BaseCard.vue'

@Component({
  layout: 'default',
  components: {
    BaseTitleBar,
    BaseCard,
  },
})
export default class DetailId extends Vue {
  private stack: Array<string> = []

  private slide: number = 0

  private slides: Array<string> = []

  private get slideUrl(): string {
    return this.slides.length ? this.slides[this.slide] !== '' ? this.slides[this.slide] : '/card-placeholder.png' : '/card-placeholder.png'
  }

  private get related(): Array<any> {
    return JSON.parse(this.$route.query.related.toString()) || []
  }

  private handleSlideUpdate(direction: number): void {
    if (direction === -1) {
      if (this.slide > 0) {
        this.slide += direction
      }
    } else if (direction === 1) {
      if (this.slide < this.slides.length - 1) {
        this.slide += direction
      }
    }
  }

  private info: any = {}

  private created(): void {
    try {
      if (this.$route.query.info) {
        const info = JSON.parse(this.$route.query.info.toString())
        this.stack = info.stack
        this.slides = [info.imageUrl]
        this.info = info
      }
    } catch (e) {
      console.log((e as Error).message)
    }
  }
}
</script>
