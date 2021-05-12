<template>
    <div class="details">
        <h4>Your Stay</h4>
 
            <div class="pt-3">
                <b-row>
                    <b-col cols="6">
                    
                        <span class="title">CHECK-IN</span> <br>
                        <span>After 2:00 PM</span>
               
                               
                    </b-col>

                     <b-col cols="6">
                        <span class="title">CHECK-OUT</span> <br>
                        <span>Before 12:00 PM</span>
                    </b-col>
                </b-row>
             </div>

             <template v-if="reservation">

                <div class="pt-4">

                    <span class="title">Stay dates:</span> <br>
                    <span>{{ reservation.checkin | formatDate}} - {{ reservation.checkout | formatDate}}</span> <br>
                    <span>{{reservation.adult}} Adult, {{reservation.child}} Children</span>
                </div>


                <div class="pt-4">
                    <b-row>
                        <b-col cols="8">
                            <p> ({{reservation.days}} night)</p>  
                            <p>Taxes and Fees</p>                             
                        </b-col>

                        <b-col cols="4" class="text-right">
                            <p>$ {{reservation.bill.roomTotalPrice}}</p>
                            <p>$ {{reservation.bill.tax}}</p>
                        </b-col>
                    </b-row>
                </div>


                <hr>
                <div>
                    <b-row>
                        <b-col cols="6">
                            <h5>Total:</h5>                            
                        </b-col>

                        <b-col cols="6" class="text-right">
                            <h5>$ {{reservation.bill.amount}}</h5>
                        </b-col>
                    </b-row>
                </div>
             </template>
    </div>
</template>



<script>

export default{
  props: ['reservation']
}

</script>


<style scoped>

.title, p{
    color: #b38600;
}
</style>