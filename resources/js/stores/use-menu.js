import { defineStore } from 'pinia'

export const useMenu = defineStore('menuId', { // đây là store riêng cho menu
  state: () => ({
        selectedKeys: [],
        openKeys: []
  }),
  actions: {
    onSelectedKeys(data) {
        this.selectedKeys = [data];
    },
    onOpenKeys(data) {
        this.openKeys = [data];
    }
  }
})
