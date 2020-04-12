<template>
  <div class="user-selection">
    <header>
      <h2>Selections (1/3)</h2>
      <small>Total weight: 70</small>
    </header>
    <section>

    </section>
  </div>
</template>

<script>
export default {
  name: 'UserSelection',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .user-selection {
    flex: 1 1 100%;
    max-width: 75%;
    min-width: 75%;
    display: flex;
    flex-direction: column;
    padding: 4px 16px 4px;
    border-right-style: solid;
    border-right-color: #8080808c;
    border-right-width: 2px;

    header, h2, section {
      width: 100%
    }

    h2 {
      margin: 0px;
    }

  }
</style>
