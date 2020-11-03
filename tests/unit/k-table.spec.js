import { shallowMount } from '@vue/test-utils'
import KTable from '@/components/table/KTable.vue'
import KTableColumn from '@/components/table/KTableColumn.vue'

const getTestData = function () {
  return [{
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
  }];
};

describe('KTable', () => {
  describe('数据显示', () => {
    const defaultSort = {
      prop: 'date', order: 'descending'
    };
    const wrapper = shallowMount(KTable, {
      slots: {
        default: '<k-table-column  prop="date" label="日期" sortable></k-table-column>'
      },
      stubs: {
        'k-table-column': KTableColumn
      },
      propsData: {
        data: getTestData(),
        defaultSort: defaultSort
      }
    })

    it('KTable列表数据', () => {
      const tableData = wrapper.vm.tableData;
      expect(JSON.stringify(tableData)).toBe(JSON.stringify(getTestData().sort((a, b) => {
        if (a[defaultSort.prop] < b[defaultSort.prop]) {
          return 1
        } else if (a[defaultSort.prop] > b[defaultSort.prop]) {
          return -1
        } else {
          return 0
        }
      })));
    })

    it('KTableColumnBox组件显示', async () => {
      const KTableColumnBox = wrapper.findComponent(KTableColumn);
      const vm = KTableColumnBox.vm;
      // KTableColumn组件是否显示
      expect(KTableColumnBox.exists()).toBe(true);

      // label显示是否正常
      const h3 = KTableColumnBox.find('h3');
      const label = KTableColumnBox.props().label;
      expect(h3.text()).toBe(label);

      // 排序按钮是否显示
      const prop = KTableColumnBox.props().prop;
      const sortBtn = h3.find('.caret-wrapper');
      expect(sortBtn.isVisible()).toBe(!!KTableColumnBox.props().sortable);
      expect(KTableColumnBox.classes(vm.sort.order)).toBe(true);

      // 触发排序按钮
      await h3.trigger('click');
      expect(vm.sort.prop).toBe(prop);
      const tableData = vm.data;
      expect(JSON.stringify(tableData)).toBe(JSON.stringify(getTestData()));

      //列表数据是否展示 长度是否一致
      const list = KTableColumnBox.findAll('.k-table-column-list');
      expect(list.length).toBe(getTestData().length);
    })
  })
});
