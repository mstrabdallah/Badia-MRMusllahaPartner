<template>
  <section id="mobileApp" class="container_cc mob">
    <div class="mob_body">
      <template>
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" md="6">
              <div class="mob_imgs">
                <img
                  src="https://www.mrmusllaha.com/static/media/mobileapp1.b7b023d7.png"
                />
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="mob_des">
                <h3>
                  {{ $t("sections_m_t") }}
                </h3>
                <p v-html="$t('sections_m_p')"></p>

                <div class="but_download">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.Musllaha"
                    target="_blank"
                    rel="noreferrer"
                    ><img
                      src="https://www.mrmusllaha.com/app_store.png"
                      alt=""
                      style="max-height: 48px; max-width: 142px"
                    /> </a
                  ><a
                    href="https://apps.apple.com/us/app/mr-musllaha/id1582292480"
                    target="_blank"
                    rel="noreferrer"
                    ><img
                      src="https://www.mrmusllaha.com/playstore.png"
                      alt=""
                      style="max-height: 48px; max-width: 142px"
                    />
                  </a>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </div>
  </section>
</template>

<style scoped>
.mob {
  padding: 20px;
  margin-top: 100px;
}
.mob_body {
}
.mob_imgs {
  text-align: center;
}
.mob_des {
}

h3 {
  display: block;
  padding-top: 50px;
  font-size: 30px;
}
p {
  border-left: 1px solid #dfb754;
  padding-left: 12px;
  line-height: 35px;
  margin-top: 40px;
  margin-left: 20px;
}
p:lang(ar) {
  border-right: 1px solid #dfb754;
  border-left: none;
  padding-right: 12px;
  margin-right: 20px;
}

.but_download {
  margin-top: 70px;
}
.but_download :nth-child(2):lang(en) {
  margin-left: 40px;
}
.but_download :nth-child(2):lang(ar) {
  margin-right: 40px;
}

@media(max-width:768px){
h3{
      text-align: center;
    font-size: 1.6em;
}
.but_download{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.but_download a:nth-child(2){
    margin-left: 0px!important;
    margin-right: 0px!important;
    margin-top: 20px;

}
}
</style>