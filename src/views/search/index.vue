<template>
    <div class="dashboard-container">
        <div class="dashboard-text">Picture Search!</div>
        <el-upload
            class="avatar-uploader"
            action="111"
            :show-file-list="false"
            :http-request="httpRequest"
        >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-button @click="search()">Test</el-button>
        <!-- <el-form>
            <el-input type="file" v-model="file" required></el-input>
        </el-form>
        <el-button @click="search()">Test</el-button> -->
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import axios from "axios"
var baseUrl = "http://localhost:5000"

export default {
    name: "Search",
    data() {
        return {
            formData: null,
            file: null,
            imageUrl: ""
        }
    },
    methods: {
        httpRequest(item) {
            console.log(item.file)
            this.file = item.file
        },
        search() {
            this.formData = new FormData()
            this.formData.append("file", this.file)
            console.log("file", this.file)
            console.log("formData", this.formData)

            axios
                .post(baseUrl + "/imgUpload", this.formData)
                .then(res => {
                    console.log("formData", this.formData)
                    console.log("res:", res)
                })

                .catch(err => {
                    this.$message({
                        message: err.message,
                        type: "error"
                    })
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.dashboard {
    &-container {
        margin: 30px;
    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
