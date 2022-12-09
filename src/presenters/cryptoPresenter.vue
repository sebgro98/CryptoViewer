<template>
  <homeView
      :name="name"
      :image="image"
      :symbol="symbol"
      :marketCap="marketCap"
      :price="price"
      :priceChange="priceChange"
      :volume="volume"
  ></homeView>
</template>

<script>
import homeView from "@/views/HomeView.vue";

export default {
  name: "cryptoPresenter",
  components: {
    homeView,
  },
  data() {
    crypto._rawValue.map(crypto =>{
    return {
      key: crypto._rawValue.id,
      name: crypto._rawValue.name,
      image: crypto._rawValue.image,
      symbol: crypto._rawValue.symbol,
      marketCap: crypto._rawValue.market_cap,
      price: crypto._rawValue.current_price,
      priceChange: crypto._rawValue.price_change_percentage_24h,
      volume: crypto._rawValue.total_volume,
    }
    })
  }


}
</script>

