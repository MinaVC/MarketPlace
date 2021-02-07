<template>
  <div id="home">
    <MyComponent />
    <div class="container">
      <div class=" cover" v-for="item in main" :key="item.id">
        <div class="row">
          <div class="col-xs-12 col-md-9 cancel-padding-right">
            <img src="../assets/imgs/subway.jpg" height="210" />
          </div>
          <div class="col-xs-12 col-md-3 cancel-padding-left">
            <div class="white-bg">
              <div class="title">{{ item.title | truncate(14) }}</div>
              <div class="sub-title">SYBO Games</div>
              <div class="description">
                {{ item.body | truncate(46, "...") }}
              </div>
              <div class="downloads">{{ item.size }}k Downloads</div>
              <router-link
                :to="'/details/' + item.id"
                class="btn purple-btn btn-primary"
                >More Info</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <section class="recommendation">
        <div class="white-bg">
          <div class="row">
            <div class="col-xs-12 col-md-12">
              <div class=" card-title">
                <div class="title">
                  Most Recommendation
                </div>
                <a href="javascript:void(0)" class="see-more">
                  See more <i class="icon-Shape1"></i>
                </a>
              </div>
            </div>
            <div class="col-xs-12 col-md-12">
              <div class="item-wrapper">
                <div class="item" v-for="item in recommended" :key="item.id">
                  <div class="img">
                    <img src="../assets/imgs/asphalet.jpg" />

                    <div class="rating"><span> ★ </span> {{ item.rating }}</div>
                  </div>
                  <div class="title">
                    {{ item.title | truncate(37) }}
                  </div>
                  <router-link
                    :to="'/details/' + item.id"
                    class="btn purple-btn btn-primary"
                    >More Info</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="popular">
        <div class="white-bg">
          <div class="row">
            <div class="col-xs-12 col-md-12">
              <div class=" card-title">
                <div class="title">
                  Most Popular
                </div>
                <a href="javascript:void(0)" class="see-more">
                  See more <i class="icon-Shape1"></i>
                </a>
              </div>
            </div>
            <div class="col-xs-12 col-md-12">
              <div class="item-wrapper">
                <div class="item" v-for="item in popular" :key="item.id">
                  <div class="img">
                    <img src="../assets/imgs/asphalet.jpg" />
                    <div class="rating"><span> ★ </span> {{ item.rating }}</div>
                  </div>
                  <div class="title">
                    {{ item.title | truncate(37) }}
                  </div>
                  <router-link
                    :to="'/details/' + item.id"
                    class="btn purple-btn btn-primary"
                    >More Info</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import MyComponent from "./CategorySlider";
import axios from "axios";

export default {
  name: "Home",
  components: {
    MyComponent,
  },
  data() {
    return {
      games: [],
      main: [],
      popular: [],
      recommended: [],
    };
  },
  created() {
    axios.get(`https://api.mocki.io/v1/8ef77ace`).then((response) => {
      // JSON responses are automatically parsed.
      this.games = response.data;
      this.games.forEach((item) => {
        if (item.type == "main") {
          this.main.push(item);
          console.log(this.games);
        } else if (item.type == "popular") {
          this.popular.push(item);
        } else if (item.type == "recommended") {
          this.recommended.push(item);
        }
      });
    });
  },
};
</script>

<style lang="scss">
.white-bg {
  background: #fff;
  height: 100%;
  padding: 20px;
}
.cover {
  margin-bottom: 20px;
  .title {
    font-size: 19px;
  }
  .sub-title {
    font-size: 14px;
    margin-bottom: 10px;
  }
  .description {
    font-size: 14px;
  }
  .downloads {
    font-size: 12px;
    color: #c3c3c3;
    margin: 10px 0;
  }

  img {
    width: 100%;
    height: 100%;
  }
}
.cancel-padding-right {
  padding-right: 0 !important;
}
.cancel-padding-left {
  padding-left: 0 !important;
}
.purple-btn {
  background: #572589 !important;
  border-color: #572589 !important;
  border-radius: none;
  width: 100%;
  transition: 0.3s;
  &:hover {
    background: #7b34c2 !important;
  }
}
.recommendation,
.popular {
  margin-bottom: 20px;
}
.item-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .item {
    width: 19%;
    .img {
      position: relative;
      img {
        width: 100%;
      }
    }
    .title {
      font-size: 14.4px;
      margin-bottom: 5px;
      min-height: 42px;
    }
    .rating {
      position: absolute;
      top: 5px;
      left: 5px;
      background: #fff;
      width: 48px;
      height: 22px;
      border-radius: 7px;
      font-size: 12px;
    }
  }
}
.card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 17px;
    text-transform: uppercase;
  }
}
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
</style>
