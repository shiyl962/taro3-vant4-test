<template>
  <!--<img src="./arrow.png">-->
  <van-image src="/components/arrow-right/arrow.png" />
</template>

<script>
  import { Image } from 'vant';

  export default {
    components: {
      [Image.name]: Image
    },
  };
</script>
