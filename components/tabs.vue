<template>
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
          <a class="nav-link" :class="{ active: tab.active }" @click="activateTab(tab)">{{ tab.label }}</a>
        </li>
      </ul>
      <div class="tab-content">
        <div v-for="(tab, index) in tabs" :key="index" class="tab-pane" :class="{ active: tab.active }">
          <slot :name="tab.name"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tabs: [
          { label: 'Painel Geral', name: 'tab1', active: true },
          { label: 'Insights', name: 'tab2', active: false },
        ]
      };
    },
    methods: {
      activateTab(tab) {
        this.tabs.forEach(t => t.active = (t === tab));
      }
    }
  }
  </script>
  