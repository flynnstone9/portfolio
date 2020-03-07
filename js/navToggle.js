function navToggle() {
    var navLinks = document.getElementById('nav-links');
    var navSection = document.getElementById('nav-section');
    var hamburger = document.getElementsByClassName('patty');
    var closeIcon = document.getElementById('closeIcon');
    var docBody = document.getElementById('body-select');
    var mobileheader = document.getElementById('mobile-intro');
    

    navLinks.classList.toggle('closed');
    navSection.classList.toggle('fullpage');
    mobileheader.classList.toggle('hidden');
    //for loop to toggle class of all the hamburger's array items
    for (var i = 0; i < hamburger.length; i++) {
        hamburger[i].classList.toggle('closed');
    }
    closeIcon.classList.toggle('zeroopacity');
}


//picture logic for fullcreen - would need to rewrite without jquery and add swipe function 
//        $(document).ready(function () {
//            function imgIDs() {
//                var enlargableImages = document.getElementsByClassName('enlarge');
//                for (i = 0; i < enlargableImages.length; i++) {
//                    var num = i;
//                    var id = 'img' + num.toString();
//                    enlargableImages[i].id = id;
//                }
//            }
//            imgIDs();
//        });
//
//        function navToggle() {
//            var navLinks = document.getElementById('nav-links');
//            var navSection = document.getElementById('nav-section');
//            var hamburger = document.getElementsByClassName('patty');
//            var docBody = document.getElementById('body-select');
//            //console.log(hamburger);
//            navLinks.classList.toggle('closed');
//            navSection.classList.toggle('fullpage');
//            $(".patty").toggleClass("closed");
//            $("#closeIcon").toggleClass("zeroopacity");
//            //docBody.classList.toggle('frozenPosition');
//            $("#back-arrow").toggleClass('zeroopacity');
//        }
//
//        function imageEnlarge(id) {
//            var selectedImageWidth = document.getElementById(id).naturalWidth;
//            var selectedImagesrc = document.getElementById(id).src;
//            $('#popup-image').attr("src", selectedImagesrc);
//            $('#popup-image-wrap').width(selectedImageWidth);
//            $('#popup').toggleClass('hidden');
//            $('#popup').toggleClass('flexy');
//        }