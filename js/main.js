$(document).ready(function() {





    function info(i) {
        $.ajax({

            url: "https://restcountries-v1.p.mashape.com/name/" + i,
            headers: {
                "X-Mashape-Key": "u1PJ2fJD7pmshMSFYQFnbneZq2WQp1x7JQMjsnNjpNTu8ktPQe",
                "Accept": "application/json"
            },
            dataType: "json",
            success: function(response) {

                var cname = response[0].name;
                var ccity = response[0].capital;
                var cregion = response[0].region;
                var cpop = response[0].population;
                var cnatname = response[0].nativeName;
                var ccur = response[0].currencies[0];
                var clanguage = response[0].languages[0];
                var countryCode = response[0].alpha2Code;
                var ikonica = "http://flags.fmcdn.net/data/flags/normal/" + response[0].alpha2Code.toLowerCase() + ".png";

                $('img').attr('src',ikonica);
                
                $(".name").html(cname);
                $(".city").html(ccity);
                $(".region").html(cregion);
                $(".population").html(numberWithCommas(cpop));
                $(".nativeName").html(cnatname);
                $(".currencies").html(ccur);
                $(".languages").html(clanguage);
                $(".code img").html(ikonica);




            }


        });

    }

    function numberWithCommas(x) {
       return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }


    $(".submit").on('click', function(e) {
      e.preventDefault();
        var $value = $("#inputName").val();
        info($value);



    });




});
