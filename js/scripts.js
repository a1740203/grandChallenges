/* Scripts  */

<!--

    function scrollFunction() {
        var fileName, map, matchID, time, winner;
        /*
        // 240248990 1209 5261118 4329518 70
        // 012345678 9012 3456789 0123456 7
            
            for (var i = 0; i < 1000; i++) { // Test values: x = 657725.1 y = 146275.2
                var matchID = res[i].slice(0, 8);
                var time = res[i].slice(9, 12);
                var winner = res[i].slice(17, 18);
                var xcoordconv = res[i].slice(13, 18);
                var xcoord = parseInt((((xcoordconv/800000)*500)));
                var ycoordconv = res[i].slice(20, 26)*4;
                var ycoord = parseInt((((ycoordconv/800000)*500)));
                var strength = 1;
        */ 
        
        sliderStore("0");
        window.onbeforeunload = function () {
        window.scrollTo(0,0);
        
        window.onscroll = function() {
            headerFloat();
        }
        
        var header = document.getElementById("h_Container");
        var sticky = header.offsetTop;

        function headerFloat() {
            if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            }
            else {
                header.classList.remove("sticky");
            }
        }
        }
        $(document).ready(function() {
            // Adds smooth scrolling to a links in css
            $("a").on('click', function(event) {

                if (this.hash !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();
                
                    // Stores the hash
                    var hash = this.hash;
                
                    // Using jQuery's animate() method to add smooth page scroll
                    $('html, body').animate( {
                    scrollTop: $(hash).offset().top
                    }, 800, function() {
                
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                    });
                }
            });
        });
    }
-->