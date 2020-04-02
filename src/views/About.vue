<template>
  <div class="about">
    <div class="about__leftside">
      <div class="photo">
        <img src="@/assets/images/about/about.jpg" alt="about" />
      </div>
      <div class="about-me">
        <div class="page__title">About me</div>
        <p class="page__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          accusantium aperiam dolorem doloremque, esse in ipsum laborum officiis
          omnis possimus quod tempora voluptas voluptatum. Architecto asperiores
          id nam sed. Doloribus.
        </p>
      </div>
    </div>
    <div class="about__rightside">
      <div class="personal-info">
        <div class="page__title">
          Personal information
        </div>
        <ul>
          <li>Dmitro Kovalenko</li>
          <li>+38 (073) 048-05-99</li>
          <li>kovalenkodima715@gmail.com</li>
          <li>08.11.1999</li>
        </ul>
      </div>
      <div class="education">
        <div class="page__title">
          Education
        </div>
        <ul>
          <li>2017 - 2021</li>
          <li>Bachelor</li>
          <li>
            National Technical University of Ukraine “Igor Sikorsky Kyiv
            Polytechnic Institute”
          </li>
        </ul>
      </div>
      <div class="skills">
        <div class="page__title">
          Main Skills
        </div>
        <ul>
          <li>HTML + CSS</li>
          <li>PUG</li>
          <li>SCSS/SASS</li>
          <li>BEM</li>
          <li>JavaScript(ES5+)</li>
          <li>jQuery</li>
          <li>Git</li>
          <li>Gulp</li>
          <li>Webpack</li>
          <li>Firebase</li>
          <li>Vue</li>
        </ul>
      </div>
      <div class="languages">
        <div class="page__title">
          Languages
        </div>
        <ul>
          <li>Russian - native</li>
          <li>Ukrainian - native</li>
          <li>English - intermediate</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped lang="scss">
.about {
  padding: 30px;
  height: inherit;
  color: #a3a3a3;
  background-color: darken(#fff, 0.7);
  display: flex;

  &__leftside {
    padding-right: 30px;
    border-right: 1px solid rgba(#a3a3a3, 0.7);

    .photo {
      img {
        width: 720px;
      }
    }

    .about-me {
      margin-top: 25px;
    }
  }

  &__rightside {
    padding-left: 30px;

    .skills {
      margin-top: 30px;
    }

    .languages {
      margin-top: 30px;
    }

    .education {
      margin-top: 30px;
    }
  }
}

ul {
  margin-top: 15px;
  li {
    margin-top: 5px;
    list-style: disc inside;
  }
}
</style>
