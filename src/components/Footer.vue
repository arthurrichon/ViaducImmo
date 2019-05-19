<template lang="html">
  <div class="footer-container">
    <span>Mentions légales / Design</span>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="css" scoped>
  .footer-container {
    width: 100%;
    padding: 20px 0;
    background-color: #0A0633;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    color: white;
    font-family: 'Karla', sans-serif;
    font-weight: bold;
    font-size: 16px;
  }
</style>
