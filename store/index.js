/*
 * @Author: 左太宇
 * @Date: 2020-12-01 10:41:55
 * @LastEditTime: 2020-12-01 12:08:49
 * @LastEditors: 左太宇
 * @message:
 */

import Cookies from 'js-cookie'
export const state = () => ({
  themes: ['theme-white', 'theme-black'],
  theme: 'theme-white',
})

export const mutations = {
  setTheme(state, theme) {
    if (state.themes.includes(theme)) {
      state.theme = theme
      localStorage.setItem('theme', theme)
    }
  },
}

export const actions = {
  // nuxtServerInit({ commit }, { req }) {
  //   const cookie = req && req.headers.cookie
  //   console.log("cookie",cookie);
  //   if (cookie) {
  //     // 将cookie转成json对象（自己实现该方法）
  //     // const cookieObj = cookieParse(cookie)
  //     // const { theme } = cookieObj
  //     theme && commit('setTheme', theme)
  //   }
  // },
}
