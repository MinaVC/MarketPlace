<template>
  <div class="details">
    <div class="container">
      <div class="wrapper" v-for="item in filtered" :key="item.id">
        <div class="cover">
          <div class="row">
            <div class="col-xs-12 col-md-12">
              <img src="../assets/imgs/subway.jpg" height="210" />
            </div>
          </div>
        </div>
        <div class="details white-bg">
          <div class="col-xs-12 col-md-12">
            <div class="mobile">
              {{ item.mobile }}
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="text-wrap">
              <div class="sub-title">SYBO Games</div>
              <div class="downloads">{{ item.size }}k Downloads</div>
            </div>
            <div class="description">
              <ul class="sub-title">
                <li v-for="(subtitle, index) in item.subtitle" :key="index">
                  {{ subtitle }}
                </li>
              </ul>
              <div class="teaser">{{ item.teaser }}</div>
            </div>

            <ul class="game-details" v-if="showMore">
              <li v-for="(summary, index) in item.summary" :key="index">
                <span> ★ </span> {{ summary }}
              </li>
            </ul>

            <a
              href="javascript:void(0)"
              class="see-more"
              @click="showToggle('more')"
              v-if="showMore"
            >
              Read more
            </a>

            <ul class="game-details" v-if="showLess">
              <li v-for="(details, index) in item.details" :key="index">
                <span> ★ </span> {{ details }}
              </li>
            </ul>
            <a
              href="javascript:void(0)"
              class="see-more"
              @click="showToggle('less')"
              v-if="showLess"
            >
              Read less
            </a>
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
                <a href="javascript:void(0)" class="see-more"> See more > </a>
              </div>
            </div>
            <div class="col-xs-12 col-md-12">
              <div class="item-wrapper">
                <div
                  class="item"
                  v-for="(item, index) in recommended"
                  :key="index"
                >
                  <div class="img">
                    <img src="../assets/imgs/asphalet.jpg" />
                    <div class="rating"><span> ★ </span>{{ item.rating }}</div>
                  </div>
                  <div class="title">
                    {{ item.title | truncate(37) }}
                  </div>
                  <a
                    class="btn purple-btn btn-primary"
                    :href="'/details/' + item.id"
                    @click="reloadPage(item.id)"
                    >Get Now</a
                  >
                  <div class="mobile-type">{{ item.mobile }}</div>
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
import axios from "axios";

export default {
  name: "Details",
  data() {
    return {
      // id: this.$route.params.id,
      detailsPage: [],
      filtered: [],
      showMore: true,
      showLess: false,
      recommended: [],
    };
  },
  props: ["id"],
  created() {
    axios.get(`https://api.mocki.io/v1/5998f425`).then((response) => {
      // JSON responses are automatically parsed.
      this.detailsPage = response.data;
      console.log(this.detailsPage);

      this.filtered = this.detailsPage.filter((item) => {
        return item.id == this.id;
      });

      this.recommended = this.detailsPage.filter((item) => {
        return item.type == "recommended";
      });
      console.log(this.recommended);
    });
  },
  methods: {
    showToggle(status) {
      if (status == "more") {
        this.showMore = false;
        this.showLess = true;
      } else if (status == "less") {
        this.showMore = true;
        this.showLess = false;
      }
    },
    reloadPage(id) {
      this.id = id;
      window.location.reload();
    },
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
    margin-bottom: 5px;
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
.see-more {
  color: #572589 !important;
  font-size: 12px;
  margin-top: 15px;
}

/***********************/
.details {
  .mobile-type {
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    color: #cecece;
  }
  margin: 20px 0;
  .teaser {
    margin: 20px 0;
    font-size: 14px;
  }
  .mobile {
    font-size: 12px;
    color: #cecece;
    display: flex;
    justify-content: flex-end;
  }
  .title {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .text-wrap .sub-title {
    font-size: 14px;
  }
  .text-wrap .downloads {
    font-size: 12px;
    color: #cecece;
  }
  .text-wrap {
    margin-bottom: 15px;
  }
  ul.game-details {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .description {
    margin-bottom: 15px;
  }
  .sub-title {
    line-height: 1.2;
  }
}
</style>
