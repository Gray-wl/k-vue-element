<template>
    <div class="table">
        <k-table :data="tableData" :default-sort="{prop: 'date', order: 'descending'}">
            <k-table-column prop="date" label="日期" sortable></k-table-column>
            <k-table-column prop="name" label="姓名" sortable></k-table-column>
            <k-table-column prop="address" label="地址"></k-table-column>
            <k-table-column label="操作">
                <template v-slot="scope">
                    <button @click="handleClick(scope.row)">{{ scope.row.operation }}</button>
                </template>
            </k-table-column>
        </k-table>
    </div>
</template>

<script>
import KTable from '@/components/table/KTable.vue'
import KTableColumn from '@/components/table/KTableColumn.vue'

export default {
  name: "Table",
  components: {
    KTable,
    KTableColumn
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        operation: '添加'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        operation: '删除'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        operation: '修改'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        operation: '查找'
      }]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
}
</script>

<style scoped>

</style>