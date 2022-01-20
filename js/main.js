(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);
// 
var pageList = new Array();
var list=new Array();
            var value = [{ "name" :"medicine 1",
                              "description": "dose",
                               "imgsrc":"img/ACEP.jpg"   },{ "name" :"medicine 1",
                               "description": "liquid",
                                "imgsrc":"img/AZI250.jpg"   },
                                { "name" :"medicine 1",
                              "description": "liquid",
                               "imgsrc":"img/AZI500.jpg"},
                            
                               { "name" :"medicine 1",
                               "description": "liquid",
                                "imgsrc":"img/quote.jpg"},
                            
                                { "name" :"medicine 1",
                                "description": "liquid",
                                 "imgsrc":"img/quote.jpg"},
                                
                                 { "name" :"medicine 7",
                              "description": "liquid",
                               "imgsrc":"img/quote.jpg"},
                               { "name" :"medicine 6",
                               "description": "dose",
                                "imgsrc":"img/quote.jpg"},
                            
                                { "name" :"medicine 5",
                                "description": "liquid",
                                 "imgsrc":"img/quote.jpg"},
                                
                                 { "name" :"medicine 4",
                              "description": "dose",
                               "imgsrc":"img/quote.jpg"},
                            
                               { "name" :"medicine 3",
                               "description": "liquid",
                                "imgsrc":"img/quote.jpg"},
                            
                                { "name" :"medicine 2",
                                "description": "dose",
                                 "imgsrc":"img/quote.jpg"},
                                
                                 { "name" :"medicine 1",
                              "description": "dose",
                               "imgsrc":"img/quote.jpg"},
                               { "name" :"medicine 1",
                               "description":"dose",
                                "imgsrc":"img/quote.jpg"   }
                            ];
            // list.unshift(value)
            var currentPage = 1;
            var numberPerPage = 6;
            var numberOfPages = 0;
            // list.push(value)        
        function makeList() {
            if(list.length<13)
            
            {
                list=new Array();
                for(i=0;i<value.length;i++)
            {
                list.push(value[i])
            }
            console.log("inside make list "+list.length)
            numberOfPages = getNumberOfPages();
        }
            loadList();
        }
            
        
        function loadList() {
            var begin = ((currentPage - 1) * numberPerPage);
            var end = begin + numberPerPage;
            
            pageList = list.slice(begin, end);
            drawList();
            check();
        }
        function filter_liquid()
        { makeList()
            temp_list=new Array()
              console.log("list length is" +list.length) 
            for(i = 0; i<list.length; i++)
            { console.log(list[i]["description"])
                if(!list[i]["description"].localeCompare("liquid"))
                  { 
                      console.log("inside if ")
                        temp_list.push(list[i])
                }
            } 
            list=temp_list
            numberOfPages = getNumberOfPages();
            console.log("number of liquid" + list)
            loadList()
        }
        function filter_dose()
        {   makeList()
            temp_list=new Array()
              console.log("list length is" +list.length) 
            for(i = 0; i<list.length; i++)
            { console.log(list[i]["description"])
                if(!list[i]["description"].localeCompare("dose"))
                  { 
                      console.log("inside if ")
                        temp_list.push(list[i])
                }
            } 
            list=temp_list
            numberOfPages = getNumberOfPages();
            console.log("number of dose" + list)
            loadList()
        }
            
        function drawList() {
           
            switch(pageList.length)
            {
                case 1: document.getElementById("item_1").innerHTML= pageList[0]["description"];
                        document.getElementById("item_1_name").innerHTML= pageList[0]["name"];
                        document.getElementById("item_1_img").src= pageList[0]["imgsrc"];
                        document.getElementById("card2").style.visibility="hidden"
                        document.getElementById("card3").style.visibility="hidden"
                        document.getElementById("card4").style.visibility="hidden"
                        document.getElementById("card5").style.visibility="hidden"
                        document.getElementById("card6").style.visibility="hidden"
                        break
                case 2:
                    document.getElementById("item_1").innerHTML= pageList[0]["description"];
                document.getElementById("item_1_name").innerHTML= pageList[0]["name"];
                document.getElementById("item_1_img").src= pageList[0]["imgsrc"];
                document.getElementById("item_2").innerHTML= pageList[1]["description"];
                document.getElementById("item_2_name").innerHTML= pageList[1]["name"];
                document.getElementById("item_2_img").src= pageList[1]["imgsrc"];
                document.getElementById("card2").style.visibility="Visible"
                document.getElementById("card3").style.visibility="hidden"
                document.getElementById("card4").style.visibility="hidden"
                document.getElementById("card5").style.visibility="hidden"
                document.getElementById("card6").style.visibility="hidden"
                    break
                case 3: document.getElementById("item_1").innerHTML= pageList[0]["description"];
                document.getElementById("item_1_name").innerHTML= pageList[0]["name"];
                document.getElementById("item_1_img").src= pageList[0]["imgsrc"];
                document.getElementById("item_2").innerHTML= pageList[1]["description"];
                document.getElementById("item_2_name").innerHTML= pageList[1]["name"];
                document.getElementById("item_2_img").src= pageList[1]["imgsrc"];
                document.getElementById("item_3_name").innerHTML= pageList[2]["name"];
                document.getElementById("item_3_img").src= pageList[2]["imgsrc"];
               document.getElementById("item_3").innerHTML= pageList[2]["description"];
               document.getElementById("card2").style.visibility="Visible"
               document.getElementById("card3").style.visibility="visible"
               document.getElementById("card4").style.visibility="hidden"
               document.getElementById("card5").style.visibility="hidden"
               document.getElementById("card6").style.visibility="hidden"
              
               break

                case 4: document.getElementById("item_1").innerHTML= pageList[0]["description"];
                document.getElementById("item_1_name").innerHTML= pageList[0]["name"];
                document.getElementById("item_1_img").src= pageList[0]["imgsrc"];
                document.getElementById("item_2").innerHTML= pageList[1]["description"];
                document.getElementById("item_2_name").innerHTML= pageList[1]["name"];
                document.getElementById("item_2_img").src= pageList[1]["imgsrc"];
                document.getElementById("item_3_name").innerHTML= pageList[2]["name"];
                document.getElementById("item_3_img").src= pageList[2]["imgsrc"];
               document.getElementById("item_3").innerHTML= pageList[2]["description"];
               document.getElementById("item_4_name").innerHTML= pageList[3]["name"];
                document.getElementById("item_4_img").src= pageList[3]["imgsrc"];
               document.getElementById("item_4").innerHTML= pageList[3]["description"];
               document.getElementById("card2").style.visibility="Visible"
               document.getElementById("card3").style.visibility="visible"
               document.getElementById("card4").style.visibility="Visible"
               document.getElementById("card5").style.visibility="hidden"
               document.getElementById("card6").style.visibility="hidden"
              
               break
                case 5: document.getElementById("item_1").innerHTML= pageList[0]["description"];
                document.getElementById("item_1_name").innerHTML= pageList[0]["name"];
                document.getElementById("item_1_img").src= pageList[0]["imgsrc"];
                document.getElementById("item_2").innerHTML= pageList[1]["description"];
                document.getElementById("item_2_name").innerHTML= pageList[1]["name"];
                document.getElementById("item_2_img").src= pageList[1]["imgsrc"];
                document.getElementById("item_3_name").innerHTML= pageList[2]["name"];
                document.getElementById("item_3_img").src= pageList[2]["imgsrc"];
               document.getElementById("item_3").innerHTML= pageList[2]["description"];
               document.getElementById("item_4_name").innerHTML= pageList[3]["name"];
                document.getElementById("item_4_img").src= pageList[3]["imgsrc"];
               document.getElementById("item_4").innerHTML= pageList[3]["description"];
               document.getElementById("item_5_name").innerHTML= pageList[4]["name"];
                document.getElementById("item_5_img").src= pageList[4]["imgsrc"];
               document.getElementById("item_5").innerHTML= pageList[4]["description"];
               document.getElementById("card2").style.visibility="Visible"
               document.getElementById("card3").style.visibility="visible"
               document.getElementById("card4").style.visibility="Visible"
               document.getElementById("card5").style.visibility="Visible"
               document.getElementById("card6").style.visibility="hidden"
              
               break
                case 6: document.getElementById("item_1").innerHTML= pageList[0]["description"];
                document.getElementById("item_1_name").innerHTML= pageList[0]["name"];
                document.getElementById("item_1_img").src= pageList[0]["imgsrc"];
                document.getElementById("item_2").innerHTML= pageList[1]["description"];
                document.getElementById("item_2_name").innerHTML= pageList[1]["name"];
                document.getElementById("item_2_img").src= pageList[1]["imgsrc"];
                document.getElementById("item_3_name").innerHTML= pageList[2]["name"];
                document.getElementById("item_3_img").src= pageList[2]["imgsrc"];
               document.getElementById("item_3").innerHTML= pageList[2]["description"];
               document.getElementById("item_4_name").innerHTML= pageList[3]["name"];
                document.getElementById("item_4_img").src= pageList[3]["imgsrc"];
               document.getElementById("item_4").innerHTML= pageList[3]["description"];
               document.getElementById("item_5_name").innerHTML= pageList[4]["name"];
                document.getElementById("item_5_img").src= pageList[4]["imgsrc"];
               document.getElementById("item_5").innerHTML= pageList[4]["description"];
               document.getElementById("item_6_name").innerHTML= pageList[5]["name"];
                document.getElementById("item_6_img").src= pageList[5]["imgsrc"];
               document.getElementById("item_6").innerHTML= pageList[5]["description"];    
               document.getElementById("card2").style.visibility="Visible"
               document.getElementById("card3").style.visibility="visible"
               document.getElementById("card4").style.visibility="Visible"
               document.getElementById("card5").style.visibility="Visible"
               document.getElementById("card6").style.visibility="Visible"
               
               break


            }
            
            
            //    document.getElementById("item_1").innerHTML= pageList[0]["name "];
            //    document.getElementById("item_2").innerHTML= pageList[1]["name "];
            //    document.getElementById("item_3").innerHTML= pageList[2]["name "];
            //    document.getElementById("item_4").innerHTML= pageList[3]["name "];
            //    document.getElementById("item_5").innerHTML= pageList[4]["name "];
            //    document.getElementById("item_6").innerHTML= pageList[5]["name "];
               
        }
        
        function check() {
            document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
            document.getElementById("previous").disabled = currentPage == 1 ? true : false;
            document.getElementById("first").disabled = currentPage == 1 ? true : false;
            document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
        }
        
        function load() {
            makeList();
            loadList();
        }
        function getNumberOfPages() {
            return Math.ceil(list.length / numberPerPage);
        }
        
        function nextPage() {
            currentPage += 1;
            loadList();
        }
        
        function previousPage() {
            currentPage -= 1;
            loadList();
        }
        
        function firstPage() {
            currentPage = 1;
            loadList();
        }
        
        function lastPage() {
            currentPage = numberOfPages;
            loadList();
        }
        
            
        window.onload = load;