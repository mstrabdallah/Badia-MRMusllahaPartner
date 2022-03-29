<template>
  <v-container class="my-10 pt-8">
    <h1 class="about_heading">{{ $t("About mrmusllaha") }}</h1>
    <v-row>
      <v-col cols="12">
        <p>
          {{
            $t(
              "We at mr musalaha always strive to provide our customers with Integrated Mobility Solutions that satisfy their changing needs while ensuring optimum quality and safety services through our reliable and trusted workforce. By doing so, we will maintain a long-term relationship with our stakeholders based on integrity and respect."
            )
          }}
        </p>
        <h2 class="my-5">{{ $t("What We Do") }}</h2>
        <p>
          {{
            $t(
              "To enrich the Quality of Life of our customers and facilitate their daily commuting behavior through employment of technology with world class skills to avail mobility solutions that fulfill their needs"
            )
          }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.about_heading {
  margin: 10px 0px 30px;
}
p {
  width: 70%;
  font-size: 18px !important;
  line-height: 1.7;
}
</style>
