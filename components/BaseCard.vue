<template>
  <div class="card">
    <!-- <div class="cardLoading"></div> -->
    <div
      class="card__pic"
      @click="$emit('click-pic', $event)"
      :style="{
        'background-image':
          properties.imageUrl && properties.imageUrl !== ''
            ? `url(${properties.staticPath ? properties.staticPath.concat(properties.imageUrl) : properties.imageUrl})`
            : 'card-placeholder.png',
      }"
      :class="{
        'card__pic--active': properties.link && properties.link !== '',
        'card__pic--disabled': !properties.link || properties.link === '',
      }"
    >
      <div class="card__duration">
        <div class="card__resolution">HD</div>
        {{
          `${Math.floor(properties.duration / 60)}:${
            properties.duration % 60 >= 10 ? properties.duration % 60 : '0' + (properties.duration % 60)
          }`
        }}
      </div>
    </div>
    <div class="card__title">{{ properties.name }}</div>
    <div class="card__author">
      <fa icon="check-circle" class="card__authorIcon"></fa>
      {{ properties.sourceUrl }}
    </div>
    <div class="card__footer" v-if="$route.path !== '/projects'">
      <div class="card__views">
        {{
          typeof properties.publishDate === 'number'
            ? (properties.publishDate / 1000000000000).toFixed(1) + 'M views'
            : properties.publishDate
        }}
      </div>
      <div class="card__ratings">
        {{ typeof properties.publishDate === 'number' ? properties.rating + '%' : properties.rating }}
      </div>
    </div>
    <div class="card__footer" v-else>
      <div
        class="card__views"
        :class="{
          'card__source--active': properties.source && properties.source !== '',
          'card__source--disabled': !properties.source || properties.source === '',
        }"
        @click="$emit('click-source', $event)"
      >
        Source
      </div>
      <div
        class="card__ratings"
        :class="{
          'card__source--activeLink': properties.link && properties.link !== '',
          'card__source--disabledLink': !properties.link || properties.link === '',
        }"
        @click="$emit('click-pic', $event)"
      >
        Demo
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Card } from '~/types/index.ts'

@Component
export default class BaseCard extends Vue {
  @Prop({ required: true }) readonly properties!: Card
}
</script>
