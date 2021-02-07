<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div>
        <a href="#">Arcade </a>
      </div>
      <div class="item"><a href="#">Action</a></div>
      <div class="item"><a href="#">Advanture</a></div>
      <div class="item"><a href="#">Arcade</a></div>
      <div class="item"><a href="#">Arcade </a></div>
      <div class="item"><a href="#">sports</a></div>
      <div class="item"><a href="#">Advanture</a></div>
      <div class="item"><a href="#">Arcade</a></div>
      <div class="item"><a href="#">Arcade </a></div>
      <div class="item"><a href="#">Action</a></div>
      <div class="item"><a href="#">Advanture</a></div>
      <div class="item"><a href="#">Arcade</a></div>
      <div class="item"><a href="#">Advanture</a></div>
      <div class="item"><a href="#">Action</a></div>
      <div class="item"><a href="#">Advanture</a></div>
      <div class="item"><a href="#">Arcade</a></div>
      <div class="item"><a href="#">Advanture</a></div>
      <div class="item"><a href="#">Advanture</a></div>
      <div class="item"><a href="#">Arcade</a></div>
      <div class="item"><a href="#">Advanture</a></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        speed: 500,
        slidesToShow: 17,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 16,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.slick-track {
  margin: 0 auto !important;
  background: #fff;
  width: 100% !important;
  display: flex !important;
  justify-content: center;
}
.slick-slide {
  text-align: center;
  border: 1px solid #d2d2d2;
  margin-right: 44px;
  padding: 5px 15px;
  border-radius: 30px;
}
.slick-slide a {
  color: #545454;
}
.slick-list {
  background: #fff;
}
.slick-list {
  padding: 15px !important;
  border-top: 2px solid #eee;
}
.slick-arrow.slick-prev {
  display: none;
}
@media (max-width: 600px) {
  .slick-slide {
    margin-right: 30px !important;
  }
}
</style>
