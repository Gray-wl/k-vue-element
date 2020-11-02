import {shallowMount} from '@vue/test-utils'
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

describe('KTableColumn.vue', () => {
  it('数据显示', () => {
    const propsData = {
      prop: 'date',
      label: '日期',
      sortable: false,
    }
    const wrapper = shallowMount(KTableColumn, {
      inject: {table: {default: {}}},
      propsData: propsData,
      computed: {
        sort() {
          return {};
        },
        data() {
          return getTestData();
        }
      }
    })
    const h3 = wrapper.find('h3');
    const list = wrapper.findAll('.k-table-column-list');
    // toMatch
    expect(h3.text()).toBe(propsData.label)
    expect(list.length).toBe(getTestData().length)
  })

  it('数据变动', () => {
    const propsData = {
      prop: 'date',
      label: '日期',
      sortable: true,
    }
    const wrapper = shallowMount(KTableColumn, {
      inject: {table: {default: {}}},
      propsData: propsData,
      computed: {
        sort() {
          return {};
        },
        data() {
          return getTestData();
        }
      }
    })
    const h3 = wrapper.find('h3');
    const sortBtn = h3.find('.caret-wrapper');
    expect(sortBtn.isVisible()).toBe(true);
  });
})
