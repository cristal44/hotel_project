<template>
    <div class="pt-4 pl-4 pr-4">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <search/>
                    <selectroom/>
                </b-col>

                <!-- <b-col cols="3">
                    <reservationDetails/>

                </b-col> -->
            </b-row>
                
        </b-container>
  

    </div>
</template>

<script>
import search from '@/components/search';
import selectroom from '@/components/selectroom';
// import reservationDetails from '@/components/reservationDetails';

export default{
  components: {
    search,
    selectroom,
    // reservationDetails
  },
}
</script>
