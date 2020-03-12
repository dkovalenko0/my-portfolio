<template>
  <div>
    <div class="work-filter">
      <div class="filter__title">Filter</div>
      <ul>
        <li>
          <a href="#">All Works</a>
        </li>
        <li>
          <a href="#">web design</a>
        </li>
        <li>
          <a href="#">illustration</a>
        </li>
        <li>
          <a href="#">photography</a>
        </li>
        <li>
          <a href="#">wallpapers</a>
        </li>
        <li>
          <a href="#">brochures</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorksFilter"
};
</script>

<style scoped lang="scss">
.work-filter {
  text-align: right;
  padding: 25px 25px 25px 0;
  border-bottom: 1px solid #1e282b;

  .filter__title {
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    color: #1ab5b3;
    font-size: 19px;
    font-weight: 400;
    line-height: 32px;

    &:after {
      content: "";
      background-image: url("../../assets/icons/filter.svg");
      background-size: 17px 15px;
      display: inline-block;
      width: 17px;
      height: 15px;
      margin-left: 12px;
    }
  }

  ul {
    li {
      a {
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
        color: #6b7072;
        font-size: 13px;
        font-weight: 300;
        line-height: 24px;

        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>
