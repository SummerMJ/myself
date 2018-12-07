<template>
    <div class="a-login">
        <div class="login-box abs-center">
            <p class="title">LOGIN</p>
            <div class="from-row">
                <div class="key">UserName</div>
                <div class="value">
                    <input type="text" class="l-input" @keyup.enter="signIn" v-model="userName">
                </div>
            </div>
            <div class="from-row">
                <div class="key">Password</div>
                <div class="value">
                    <input type="password" class="l-input" @keyup.enter="signIn" v-model="password">
                </div>
            </div>
            <div class="operate-box">
                <div class="sign-in" @click="signIn">SIGN IN</div>
                <div class="sign-in" @click="signUp">SIGN Up</div>
            </div>

        </div>
    </div>
</template>

<script>
    import ajax from "@/libs/fench.js";
    import { Message } from "element-ui"
    import { mapMutations } from "vuex"
    export default {
        name: "a-login",
        data() {
            return {
                userName: "",
                password: ""
            };
        },
        methods: {
            ...mapMutations(["setUserInfo"]),
            signIn() {
				if (!this.userName || !this.password) {
					Message.warning("用户名,密码不能为空");
					return;
				}
                let data = { userName: this.userName, password: this.password };
                ajax.post("/user/login", data).then(res => {
                    Message.success(res.msg);
                    this.setUserInfo(res.data);
                    this.$router.push("/home/dashboard");
                })
            },
			signUp () {

			}
        }
    };
</script>

<style lang="scss" scoped>
    .a-login {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.8);

        .login-box {
            color: #fff;

            p.title {
                margin-bottom: 30px;
                text-align: center;
                font-size: 30px;
                animation: bounce 2s infinite;
            }

            .from-row {
                margin-bottom: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .key {
                    text-align: right;
                    margin-right: 15px;
                }

                .l-input {
                    outline: none;
                    height: 35px;
                    width: 200px;
                    font-size: 21px;
                    border: none;
                    border-radius: 5px;
                    padding-left: 10px;
                }
            }

            .operate-box {
                display: flex;
                align-items: center;

                .sign-in {
                    cursor: pointer;
                    margin-left: 95px;
                    margin-top: 30px;
                    color: #ccc;
					margin-right: 15px;
                    &:hover {
                        color: #fff;
                    }
                }
            }

        }

        @keyframes bounce {
            0% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-20px);
            }

            100% {
                transform: translateY(0);
            }
        }
    }
</style>