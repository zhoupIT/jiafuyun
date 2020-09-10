<!--  -->
<template>
<div class='addHospital'>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="基础信息" name="first">
      <el-form ref="form" :rules="rules" :model="form" label-width="100px">
        <el-form-item label="医院名称" prop="hospitalName">
          <el-input v-model="form.hospitalName" placeholder="请输入医院名称"></el-input>
        </el-form-item>
        <el-form-item label="医院类型" prop="hospitalType">
          <el-select v-model="form.hospitalType" placeholder="请选择">
            <el-option label="公立医院" value="shanghai"></el-option>
            <el-option label="三甲医院" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="医院级别" prop="hospitalLevel">
          <el-select v-model="form.hospitalLevel" placeholder="请选择">
            <el-option label="三级" value="shanghai"></el-option>
            <el-option label="二级" value="beijing"></el-option>
            <el-option label="一级" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="医院等次" prop="hospitalRank">
          <el-select v-model="form.hospitalRank" placeholder="请选择">
            <el-option label="甲级" value="shanghai"></el-option>
            <el-option label="乙级" value="beijing"></el-option>
            <el-option label="丙级" value="beijing"></el-option>
            <el-option label="其它" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="省/市/区/县">
          <el-cascader
            size="small"
            :options="city.options"
            :props="props"
            v-model="cityValue"
            @active-item-change="handleItemChange"
            @change="cityChange">
          </el-cascader>
        </el-form-item>
        <el-form-item label="详细地址" prop="hospitalAddress">
          <el-input type="textarea" v-model="form.hospitalAddress" placeholder="请输入详细地址"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">下一步</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="配置时间" name="second">配置时间</el-tab-pane>
    <el-tab-pane label="套餐配置" name="third">套餐配置</el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import * as api from "@/api/api";
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  form: {
    hospitalName: '',
    hospitalType: '',
    hospitalLevel: '',
    hospitalRank: '',
    hospitalAddress: ''
  },
  rules: {
    hospitalName: [
      { required: true, message: '请输入医院名称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    hospitalType: [
      { required: true, message: '请选择医院类型', trigger: 'change' }
    ],
    hospitalLevel: [
      { required: true, message: '请选择医院级别', trigger: 'change' }
    ],
    hospitalRank: [
      { required: true, message: '请选择医院等次', trigger: 'change' }
    ],
    hospitalAddress: [
      { required: true, message: '请输入详细地址', trigger: 'blur' }
    ]
  },
  activeName: 'first',
  listLoading: false,
  tableData: [
    {
      orderNumber: 'TJ202008221234',
      orderStatus: "预约中",
      hospital: "上海市中医医院",
      package: "体检套餐H（女性）",
      monney: "1006.00",
      realPay: "1008.00",
      timeOutResult: "24小时内不处理会导致落单失败",
      time: "2020/08/22 15:37:25",
      payTime: "2020/08/22 15:37:25",
      note: "备注001",
    }
  ],
  // 所在省市
  city: {
    obj: {},
    options: []
  },
  props: { // 级联选择器的属性配置
    value: 'value',
    children: 'cities',
    checkStrictly: true
  },
  cityValue: [], // 城市代码
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  handleClick(tab, event) {
    console.log(tab, event);
  },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>

</style>
