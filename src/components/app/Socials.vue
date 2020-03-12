<template>
  <div>
    <div class="socials">
      <ul>
        <li>
          <a href="#">
            <img src="@/assets/icons/facebook.svg" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/icons/github.svg" alt="github" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/icons/gmail.svg" alt="gmail" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/icons/instagram.svg" alt="instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/icons/linkedin.svg" alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/icons/discord.svg" alt="discord" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/icons/telegram.svg" alt="telegram" />
          </a>
        </li>
        <li>
          <a href="#">
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
  padding: 28px 25px 0 0;

  ul {
    text-align: right;
    li {
      display: inline-block;

      &:not(:last-child) {
        margin-right: 9px;
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
