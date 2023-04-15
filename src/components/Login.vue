<script setup lang="ts" type="module">
import { reactive,ref } from 'vue'
import axios from 'axios'
const ruleForm = reactive({
    name: '',
    stnum:'',
})
const onSubmit = async () => {
let res = await axios.post('http://127.0.0.1:5174'+'/login',ruleForm)
console.log(res)
}
</script>

<template>
  <el-form
  ref="ruleFormRef"
  :model="ruleForm"
  >
    <el-row justify="center">
      <el-col :span="4" >
        <el-form-item label="姓名" prop="name">
          <el-input
            v-model="ruleForm.name"
            class="name"
            placeholder="请输入你的姓名"
          />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row justify="center">
      <el-col :span="4" >
        <el-form-item label="学号" prop="stnum">
          <el-input
            v-model="ruleForm.stnum"
            class="stnum"
            placeholder="请输入你的学号"
          />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row justify="center">
      <el-col :span="4" >
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>