<template>
    <div>
        <slot name='list'></slot>
        <div class="list-donetip" v-show='!isLoading&& isDone'>
            <slot name='doneTip'>没有更多数据了</slot>
        </div>

        <div class="list-loading" v-show='isLoading'>
            <slot name='loadingTip'>加载中...</slot>
        </div>
    </div>
</template>

<script>
 import {getScrollview} from '../../libs/getScrollview.js';
export default {
     data () {
        return {
            isLoading : false, //是否正在加载
            isDone : false,  //是否加载完毕
            num : 1
        }
     },
     props : {
         //一旦触发到底部执行的事件函数
          onInfinite : {
              type : Function,
              require : true
          },
          //滚动到底部的距离
          distance : {
              default : 0,
              validator (val) {
                  return /^\d*&/.test(val)
              }
          }
     },
     methods : {
         init () {
             //获取滚动模型
             this.scrollView = getScrollview($el);
             this.scrollView.addEventListener('scroll',function(){
                 console.log(1)
             })
         }
     }
}
</script>

