import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosInstance } from 'axios'

const timeout = Number(process.env.TIMEOUT_LIMIT) || 20000

let $nuxtAxiosInstance: NuxtAxiosInstance
let $axios: AxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $nuxtAxiosInstance = axiosInstance
  $axios = $nuxtAxiosInstance.create({
    headers: {
      'Time-Zone': 8,
      // 'Accept-Language': window ? navigator.language : '',
    },
    // baseURL: process.env.API_URL,
    baseURL: '',
    timeout
  })

}

export { $axios }
