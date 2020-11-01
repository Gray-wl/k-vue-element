<template>
    <div class="k-table">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "KTable",
  provide() {
    return {
      table: this
    }
  },
  props: {
    data: {
      type: Array,
      default: new Array
    },
    defaultSort: Object,
  },
  data() {
    return {
      sort: this.defaultSort && {order: 'ascending', ...this.defaultSort} || {}
    }
  },
  computed: {
    tableData() {
      let arr = JSON.parse(JSON.stringify(this.data)) || [];
      if (this.sort.prop && this.sort.order) {
        arr = arr.sort((a, b) => {
          if (this.sort.order === 'ascending') {
            if (a[this.sort.prop] < b[this.sort.prop]) {
              return -1
            } else if (a[this.sort.prop] > b[this.sort.prop]) {
              return 1
            } else {
              return 0
            }
          } else {
            if (a[this.sort.prop] < b[this.sort.prop]) {
              return 1
            } else if (a[this.sort.prop] > b[this.sort.prop]) {
              return -1
            } else {
              return 0
            }
          }
        });
      }
      return arr;
    }
  },
  methods: {
    changeOrder(prop) {
      let order = this.sort.order;
      if (this.sort.prop !== prop) {
        this.sort = {
          prop,
          order: 'ascending'
        }
        return;
      }
      if (order === '') {
        order = 'ascending';
      } else if (order === 'ascending') {
        order = 'descending';
      } else if (order === 'descending') {
        order = '';
      }
      this.sort = {
        prop,
        order
      }
    }
  },
  mounted() {
    this.defaultSort && this.$on('changeSort', prop => {
      this.changeOrder(prop);
    });
  }
}
</script>

<style scoped>
    .k-table {
        display: flex;
        flex-direction: row;
        border: 1px solid #ebeef5;
    }
</style>