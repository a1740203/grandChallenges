/* Scripts  */

    function scrollFunction() {
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