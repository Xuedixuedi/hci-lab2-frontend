<template>
    <div class="dashboard-container">
        <div class="dashboard-text">Picture Search!</div>
        <div class="upload">
            <el-upload
                class="avatar-uploader"
                action="111"
                :show-file-list="false"
                :http-request="httpRequest"
                drag="true"
            >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-button @click="search()" class="upload-button"
                >Upload</el-button
            >
        </div>
        <div>
            <el-row>
                <el-col
                    :span="5"
                    v-for="(o, index) in this.picPathList"
                    :key="index"
                    :offset="2"
                    class="pic-set"
                >
                    <el-card v-if="o.visible">
                        <img
                            :src="o.imgUrl"
                            class="image"
                            width="200"
                            height="200"
                        />
                        <div style="padding: 14px;">
                            <span>{{ o.tag }}</span>
                            <div class="bottom clearfix">
                                <el-button
                                    type="text"
                                    class="button"
                                    @click="like(o)"
                                >
                                    ❤️
                                </el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <div class="button-group">
                <div class="filter-group">
                    <el-select v-model="tag" placeholder="choose tag">
                        <el-option
                            v-for="item in this.tagList"
                            :key="item"
                            :label="item"
                            :value="item"
                        >
                        </el-option>
                    </el-select>
                    <el-button @click="tagFilter()">Filter</el-button>
                </div>
                <el-button @click="likeFilter()">Like Only</el-button>
                <el-button @click="showAll()">Show All</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import axios from "axios"
var baseUrl = "http://localhost:5000"
//存放结果图片的地址

export default {
    name: "Search",
    data() {
        return {
            imageUrl: "",
            formData: null,
            file: null,
            picList: [],
            picTagList: [], //与pic对应关系
            tagList: [],
            likeList: [],
            picPathList: [], //一个很长的对象数组，记录了名字，tag，like
            tag: "" //筛选的tag
        }
    },
    methods: {
        sleep(d) {
            return new Promise(resolve => setTimeout(resolve, d))
        },
        httpRequest(item) {
            this.file = item.file
        },
        setPath() {
            this.picPathList = []

            this.picPathList = [
                {
                    imgUrl: require("@/../../lab2-image-retrieval/server/static" +
                        this.picList[0]),
                    name: this.picList[0],
                    tag: this.picTagList[0].split(".")[0],
                    like: false,
                    visible: true
                },
                {
                    imgUrl: require("@/../../lab2-image-retrieval/server/static" +
                        this.picList[1]),
                    name: this.picList[1],
                    tag: this.picTagList[1].split(".")[0],
                    like: false,
                    visible: true
                },
                {
                    imgUrl: require("@/../../lab2-image-retrieval/server/static" +
                        this.picList[2]),
                    name: this.picList[2],
                    tag: this.picTagList[2].split(".")[0],
                    like: false,
                    visible: true
                },
                {
                    imgUrl: require("@/../../lab2-image-retrieval/server/static" +
                        this.picList[3]),
                    name: this.picList[3],
                    tag: this.picTagList[3].split(".")[0],
                    like: false,
                    visible: true
                },
                {
                    imgUrl: require("@/../../lab2-image-retrieval/server/static" +
                        this.picList[4]),
                    name: this.picList[4],
                    tag: this.picTagList[4].split(".")[0],
                    like: false,
                    visible: true
                },
                {
                    imgUrl: require("@/../../lab2-image-retrieval/server/static" +
                        this.picList[5]),
                    name: this.picList[5],
                    tag: this.picTagList[5].split(".")[0],
                    like: false,
                    visible: true
                },
                {
                    imgUrl: require("@/../../lab2-image-retrieval/server/static" +
                        this.picList[6]),
                    name: this.picList[6],
                    tag: this.picTagList[6].split(".")[0],
                    like: false,
                    visible: true
                },
                {
                    imgUrl: require("@/../../lab2-image-retrieval/server/static" +
                        this.picList[7]),
                    name: this.picList[7],
                    tag: this.picTagList[7].split(".")[0],
                    like: false,
                    visible: true
                },
                {
                    imgUrl: require("@/../../lab2-image-retrieval/server/static" +
                        this.picList[8]),
                    name: this.picList[8],
                    tag: this.picTagList[8].split(".")[0],
                    like: false,
                    visible: true
                }
            ]
            console.log(this.picPathList)
        },
        async search() {
            this.formData = new FormData()
            this.formData.append("file", this.file)

            const res = await axios
                .post(baseUrl + "/imgUpload", this.formData)
                .catch(err => {
                    this.$message({
                        message: err.message,
                        type: "error"
                    })
                })

            console.log("res.data:", res.data)

            this.tagList = res.data.tagList

            this.picList.push(res.data.image0[0])
            this.picTagList.push(res.data.image0[1].split(".")[0])
            this.picList.push(res.data.image1[0])
            this.picTagList.push(res.data.image1[1].split(".")[0])
            this.picList.push(res.data.image2[0])
            this.picTagList.push(res.data.image2[1].split(".")[0])
            this.picList.push(res.data.image3[0])
            this.picTagList.push(res.data.image3[1].split(".")[0])
            this.picList.push(res.data.image4[0])
            this.picTagList.push(res.data.image4[1].split(".")[0])
            this.picList.push(res.data.image5[0])
            this.picTagList.push(res.data.image5[1].split(".")[0])
            this.picList.push(res.data.image6[0])
            this.picTagList.push(res.data.image6[1].split(".")[0])
            this.picList.push(res.data.image7[0])
            this.picTagList.push(res.data.image7[1].split(".")[0])
            this.picList.push(res.data.image8[0])
            this.picTagList.push(res.data.image8[1].split(".")[0])

            //遍历taglist 把后缀去掉
            for (var i in this.tagList) {
                this.tagList[i] = this.tagList[i].split(".")[0]
            }

            await this.sleep(1800)

            this.setPath()
        },
        isNowTag(item) {
            console.log("item:", item)
            return item.tag == this.tag
        },
        //按照tag筛选
        tagFilter() {
            for (var item in this.picPathList) {
                console.log("item:", this.picPathList[item])
                if (this.isNowTag(this.picPathList[item])) {
                    this.picPathList[item].visible = true
                } else {
                    this.picPathList[item].visible = false
                }
            }
        },
        showAll() {
            for (var i in this.picPathList) {
                this.picPathList[i].visible = true
            }
        },
        like(item) {
            item.like = true
            console.log(item.tag)
        },
        //按照like筛选
        likeFilter() {
            for (var i in this.picPathList) {
                if (this.picPathList[i].like) {
                    this.picPathList[i].visible = true
                } else {
                    this.picPathList[i].visible = false
                }
            }
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
.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both;
}

.upload {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px;
}

.upload-button {
    height: 40px;
    margin-left: 40px;
}

.pic-set {
    margin-bottom: 50px;
}

.button-group {
    display: flex;
    justify-content: space-around;
    margin: 100px;
}

.filter-group {
    display: flex;
    justify-content: space-between;
    width: 300px;
}
</style>
