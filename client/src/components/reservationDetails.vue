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

             <div class="pt-4">

                <span class="title">Stay dates:</span> <br>
                <span>Tue, 13 Apr 2021 - Thu, 15 Apr 2021</span> <br>
                <span>1 Adult, 2 Children</span>
             </div>


             <div class="pt-4">
                <b-row>
                    <b-col cols="6">
                        <p>Deluxe Room x 1 night</p>  
                        <p>Taxes and Fees</p>                             
                    </b-col>

                     <b-col cols="6" class="text-right">
                         <p>$300.00</p>
                         <p>$30.00</p>
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
                         <h5>$330.00</h5>
                    </b-col>
                </b-row>
             </div>
    </div>
</template>

<style scoped>

.details {
    /* font-size: 14px; */
}
.title, p{
    color: #b38600;
}
</style>