$(document).ready(function() {

    $('#tip-submit').click(function(e) {
        e.preventDefault();

        let gender = $('#gender').val();
        let rate = $('#rate').val();
        let meal_total = $('#meal_total').val();
        let tip = null;
        //console.log(gender, rate, meal);
        //$('.notification').show();

         // Check input fields
         if(rate === '' && meal_total === '') {
            $('.notification-alert').show();
            $(".info").text("Missing fields");

            // Hide 
            setTimeout(function(){
                $('.notification-alert').hide(3000);
            }, 3000);
        };


        // Strings to numbers
        let rate_int = parseInt(rate);
        let total_int = parseInt(meal_total);


        // Tip calculations
        if(rate_int < 5) {
            // Calculating tip
            tip = total_int * 0.04;

        } else if(rate_int >= 5 && rate_int < 9) {
             // Calculating tip
            tip = total_int * 0.06;
            
        } else if (rate_int === 9 ) {
            // Calculating tip
            tip = total_int * 0.1;

        } else if(rate_int > 9){
            // Show notification
            $('.notification-alert').show();
            $(".info").text("Error Rate exceeded!");

            // Hide 
            setTimeout(function(){
                $('.notification-alert').hide(3000);
            }, 3000);
        }

        // Tip notification
        if (tip != null) {
            // Show notification
            $('.notification').show();
            $("#tip").text(tip);

            // Hide 
            setTimeout(function(){
                $('.notification').hide(3000);
            }, 3000);
        }
    });


    $('#reset-btn').click(function() {
        // Clear fields
        $('#rate').val('');
        $('#meal_total').val('');

        // Show notification
        $(".info").text("Fields cleared.");
        $('.notification-alert').show();

          // Hide 
          setTimeout(function(){
            $('.notification-alert').hide(3000);
        }, 3000);
    });
});