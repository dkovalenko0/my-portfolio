<template>
  <div>
    <div class="socials">
      <ul>
        <li>
          <a href="https://www.facebook.com/dkovalenko0" target="_blank">
            <img src="@/assets/icons/facebook.svg" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="https://github.com/dkovalenko0" target="_blank">
            <img src="@/assets/icons/github.svg" alt="github" />
          </a>
        </li>
        <li>
          <a href="mailto:kovalenkodima715@gmail.com?cc=kovalenkodima715@gmail.com" target="_blank">
            <img src="@/assets/icons/gmail.svg" alt="gmail" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/dima.kovalenko0/?hl=ru" target="_blank">
            <img src="@/assets/icons/instagram.svg" alt="instagram" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/%D0%B4%D0%B8%D0%BC%D0%B0-%D0%BA%D0%BE%D0%B2%D0%B0%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE-7124221a6/"
            target="_blank"
          >
            <img src="@/assets/icons/linkedin.svg" alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://t.me/dmitriy_kovalenko0" target="_blank">
            <img src="@/assets/icons/telegram.svg" alt="telegram" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/8VWrrJJSrLuFKOY" target="_blank">
            <img src="@/assets/icons/twitter.svg" alt="twitter" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Socials"
};
</script>

<style scoped lang="scss">
.socials {
  margin-top: 15px;
  padding: 28px 25px 0 0;

  ul {
    text-align: right;
    li {
      display: inline-block;

      &:not(:last-child) {
        margin-right: 12px;
      }
      a {
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}
</style>
