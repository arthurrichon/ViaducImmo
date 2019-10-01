<template lang="html">
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <button type="button" name="button" class="ctrl-button prev" v-on:click="emit('prev')">Précédent</button>
        <button type="button" name="button" class="ctrl-button next" v-on:click="emit('next')">Suivant</button>
        <img v-bind:src="image" alt="" v-bind:style="{height: imgHeight ? imgHeight + 'px' : '100%'}">
        <button
          type="button"
          class="btn-green"
          @click="close"
          aria-label="Close modal"
        >x</button>
      </div>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'Lightbox',
  data: () => ({
    imgHeight: 0
  }),
  props: {
    image: {
      type: String,
      default: ''
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    emit (eventName) {
      this.$emit(eventName)
    },
    onResize (e) {
      this.imgHeight = (e.target.innerHeight / 10) * 8
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.onResize)
      this.imgHeight = (window.innerHeight / 10) * 8
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  watch: {
    imgHeight: function (c, o) {
      console.log(c)
    }
  }
}
</script>

<style lang="css" scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    overflow-y: hidden;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #000000;
    border: 1px solid #4AAE9B;
    border-radius: 15px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 22px;
    position: absolute;
    top: -15px;
    right: -15px;
    z-index: 10001;
  }

  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .modal {
      width: 80%;
    }

    .modal img {
      width: 100%;
    }
  }

  .ctrl-button {
    width: 80px;
    height: 30px;
    background-color: #3FD1FF;
    border: 1px solid #3FD1FF;
    color: #FFF;
    position: absolute;
    top: 50%;
    margin-top: -15px;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
  }

  .ctrl-button.prev { left: 0; }
  .ctrl-button.next { right: 0; }
</style>
