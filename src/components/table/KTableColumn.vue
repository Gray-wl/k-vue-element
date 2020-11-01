<template>
    <div class="k-table-column" :class="sort.prop === prop && sort.order">
        <h3 @click="changeOrder" :class="{pointer: sortable}">{{label}}
            <span class="caret-wrapper" v-if="sortable"><i
                    class="sort-caret ascending"></i><i
                    class="sort-caret descending"></i></span></h3>
        <div class="k-table-column-list" v-for="(item, index) in data.map(v => v[this.prop])" :key="index">{{item}}
            <slot :row="data[index]"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: "KTableColumn",
  inject: ['table'],
  props: {
    prop: String,
    label: String,
    sortable: {
      type: [Boolean, String],
      default: false
    },
  },
  computed: {
    sort() {
      return this.table.sort;
    },
    data() {
      return this.table.tableData;
    }
  },
  methods: {
    changeOrder() {
      if (!this.sortable) return;
      this.$parent.$emit('changeSort', this.prop);
    }
  },
}
</script>
<!--暗号：杨哥喊你来搬砖
暗号：see you next time-->

<style scoped>
    .k-table-column {
        flex: 1;
    }

    .k-table-column:not(:last-child) {
        border-right: 1px solid #ebeef5;
    }

    h3 {
        margin: 0;
        height: 40px;
        line-height: 40px;

    }

    .pointer {
        cursor: pointer;
    }

    .k-table-column-list {
        border-top: 1px solid #ebeef5;
        height: 30px;
        line-height: 30px;
    }

    .caret-wrapper {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        height: 34px;
        width: 24px;
        vertical-align: middle;
        cursor: pointer;
        overflow: initial;
        position: relative;
    }

    .sort-caret {
        width: 0;
        height: 0;
        border: 5px solid transparent;
        position: absolute;
        left: 7px;
    }

    .ascending {
        border-bottom-color: #c0c4cc;
        top: 5px;
    }

    .descending {
        border-top-color: #c0c4cc;
        bottom: 7px;
    }

    .ascending .sort-caret.ascending {
        border-bottom-color: #409eff;
    }

    .descending .sort-caret.descending {
        border-top-color: #409eff;
    }
</style>