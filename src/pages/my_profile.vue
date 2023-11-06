<template>
  <div style="color: ">
    <div class="My_Introduction">
      <!-- <h3 style="text-align: center"><u>PROFILE</u></h3> -->
      <br /><br />
      <img
        style="width: 200px; height: 200px; border: 2px solid black"
        src="../assets/Peeyush_Profile_picture.png"
        alt="Profile Picture"
        class="center"
      />
      <h3>Peeyush Yadav</h3>
    </div>
    <div class="details">
      <q-card>
        <q-card-title style="width: 500px; height: 500px; font-size: x-large">
          <u>Background Details </u>
        </q-card-title>
        <!-- <q-card-separator />
      <q-card-body>
        Hii,This is Peeyush Yadav,Software Engineer-ACE ACADEMY
      </q-card-body> --> </q-card
      ><br />
      <body style="font-size: large">
        Hello,I am Peeyush Yadav and I hail from Mahoba in Uttar Pradesh,
        India.<br />
        Currently, I am employed as a Software Engineer at LTIMindtree.
      </body>

      <q-card>
        <q-card-title style="font-size: large"> </q-card-title>
        <q-card-separator />
        <q-card-main> </q-card-main>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    personName: String,
    profilePicture: String,
  },
};
</script>
<style scoped>
/* .My_Introduction {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  align-content: center;
} */
/* .details {
  display: block;
  margin-left: 500px;
  margin-right: 500px;
  width: 50%;
} */
</style>
