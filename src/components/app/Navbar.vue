<template>
  <div>
    <nav class="navbar">
      <ul>
        <router-link tag="li" to="/" exact active-class="active"
          >Home</router-link
        >

        <router-link tag="li" to="/work" active-class="active"
          >Work</router-link
        >

        <router-link tag="li" to="/about" active-class="active"
          >About</router-link
        >

        <router-link tag="li" to="/blog" active-class="active"
          >Blog</router-link
        >

        <router-link tag="li" to="/services" active-class="active"
          >Services</router-link
        >

        <router-link tag="li" to="/contact" active-class="active"
          >Contact</router-link
        >
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped lang="scss">
.navbar {
  ul {
    text-transform: uppercase;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    font-size: 18px;
    font-weight: 300;
    line-height: 32px;
    li {
      text-align: right;
      cursor: pointer;
      background-color: #2f373b;
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.02) 0%,
        rgba(255, 255, 255, 0.02) 100%
      );
      padding: 12px 25px 12px 0;
      color: #ffffff;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      transition: all 0.3s linear;

      &:hover {
        background-color: #1ab5b3;
        background-image: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.1) 0%,
          rgba(255, 255, 255, 0.1) 100%
        );
      }

      &:last-child {
        border-bottom: 1px solid #202426;
      }
    }
  }
}
</style>
