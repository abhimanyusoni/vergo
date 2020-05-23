jQuery(document).ready(function () {
    $(".main_sidebar_navigation .navbar-nav .menu_arrow").on("click", function () {
        $(this).siblings("ul").slideToggle();
        $(this).toggleClass('open');
        $(this).parent().toggleClass('dropdown_active');
        $(this).parent(".navbar-nav li ").siblings().children("ul").hide();
        $(this).parents('.navbar-nav li').siblings().children('span').removeClass('open');
        $(this).parents('.navbar-nav li').siblings().children('span').parent().removeClass('dropdown_active');
        $(this).siblings('ul').children('li').children('ul').hide();
        $(this).siblings('ul').children('li').children('span').removeClass('open');
        $(this).siblings('ul').children('li').children('span').parent().removeClass('dropdown_active');
    });
    $(document).on('focus', ':input', function () {
        $(this).attr('autocomplete', 'off');
    });
    $("form").attr('autocomplete', 'off');
    $(".main_sidebar_navigation").mCustomScrollbar({
        theme: "minimal"
    });
    $(".notification_content").mCustomScrollbar({
        theme: "minimal"
    });
    $(".table_style_21").mCustomScrollbar({
        theme: "minimal",
        axis: "x"
    });

    $(document).on("click", ".notification_icon_link", function (e) {
        e.stopPropagation();
        $(".header_notification").toggleClass("show");
    });
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.header_notification').length) {
            $(".header_notification").removeClass("show");
        }
    });
    main_height_content();
    function main_height_content() {
        var w_height = jQuery(window).height();
        var h_height = jQuery('.header_style_2').outerHeight();
        var f_height = jQuery('.footer_main').outerHeight();
        var t_height = w_height - (h_height + f_height);
        jQuery('.all_content_main').css('min-height', t_height);
        jQuery('.main_content').css('padding-top', h_height);
        jQuery('.sidebar_main').css('padding-bottom', (h_height + 30));
    }
    jQuery(window).resize(function () {
        main_height_content();
    });
    $(document).on("click", ".display_sidebar", function (e) {
        e.stopPropagation();
        $(this).toggleClass("show_display_sidebar");
        $(".sidebar_main").toggleClass("show");
        $('body').toggleClass("body_sidebar");
        $('.navbar-nav .dropdown_active .dropdown_menu').css('display', 'none');
        $('.dropdown_current_active .dropdown_menu').css('display', 'none');

        $('.navbar-nav .dropdown_menu').hide();
    });
    $(document).on("click", ".show_display_sidebar", function (e) {
        e.stopPropagation();
        $('.navbar-nav .dropdown_active .dropdown_menu').css('display', 'block');
        $('.dropdown_current_active .dropdown_menu').css('display', 'block');
        $('.navbar-nav .dropdown_active .dropdown_menu').show();
    });
    $(document).on("click", ".hide_sidebar_close", function (e) {
        e.stopPropagation();
        $(".sidebar_main").removeClass("show");
        $('body').removeClass("body_sidebar");
    });
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.sidebar_main').length) {
            $(".sidebar_main").removeClass("show");
            $('body').removeClass("body_sidebar");
        }
    });

    jQuery(document).on("click", ".header_style_2 .user_log .round_img", function (e) {
        e.stopPropagation();
        jQuery(".user_log_toggle").toggleClass("show");
    });
    jQuery(document).on('click', function (event) {
        if (!jQuery(event.target).closest('.header_style_2 .user_log_toggle').length) {
            jQuery(".user_log_toggle").removeClass("show");
        }
    });

    function load() {
        $('#preloader').delay(900).fadeOut(500);
    }
    $(window).on('load', load());

    $('.nav-item .menu_arrow ').hover(
            function () {
                $(this).addClass('menu_arrow_hover');
                $(this).parent('.nav-item').addClass('nav_item_menuarrow_hover');
            },
            function () {
                $('.dropdown_active_hover .dropdown-menu').removeClass('nav_item_hover');
                $(this).parent('.nav-item').removeClass('nav_item_menuarrow_hover');

            }
    );
    // Tab JS :: START
    $(".tab_content").hide();
    $("ul.tabs li").click(function () {
        $(".tab_content").hide();
        var activeTab = $(this).attr("data-rel");
        $("#" + activeTab).fadeIn();
        $("ul.tabs li").removeClass("active_content");
        $(this).addClass("active_content");
        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[data-rel^='" + activeTab + "']").addClass("d_active");
    });
// For Tab to Accordion JS :: START
    var allPanels = $('.tab_content').hide();
    $(".active_content").show();
    $('.tab_drawer_heading').click(function () {
        if ($(this).hasClass('d_active')) {
            $(".tab_drawer_heading").removeClass("d_active");
            $('.tab_content').removeClass('active_content');
            allPanels.slideUp();
            $(this).next().slideUp();
            $(this).next().removeClass('active_content');
            $('.faq_content').removeClass('active_shadow');
        }
        else {
            $(".tab_drawer_heading").removeClass("d_active");
            $('.tab_content').removeClass('active_content');
            $('.faq_content').removeClass('active_shadow');
            $(this).addClass("d_active");
            allPanels.slideUp();
            $(this).next().slideDown();
            $(this).next().addClass('active_content');
            $(this).parent().addClass('active_shadow');
        }
        return false;
    });
// For Tab to Accordion JS :: END
// Tab JS :: END

//DATEPICKER JS :: START
    $(".date_picker").datepicker({
        gotoCurrent: true
    });
//DATEPICKER JS :: END
//    jQuery('.remove_img').click(function () {
//        debugger;
//        jQuery('#profile_pic').attr('src', jQuery('#old_pic').val());
//        jQuery("#profile_img").val('');
//        jQuery(this).hide();
//    });


    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.custom_image_preview').css('background-image', 'url(' + e.target.result + ')');
                $('.custom_image_preview').hide();
                $('.custom_image_preview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(".file_upload_v_h").change(function () {
        readURL(this);
    });
    $(".remove_custom_file").on("click", function () {
        $('.custom_image_preview').css('background-image', 'url("images/no_img.png")');
    });

//$('#fileupload').change(function(){debugger;
//   //get the input and the file list
//   var input = document.getElementById('fileupload');
//   if(input.files.length>4){
//       $('.validation').show();
//   }else{
//       $('.validation').hide();
//   }
//});
//function validateImage(id) {
//    var formData = new FormData();
//
//    var file = document.getElementById(id).files[0];
//
//    formData.append("Filedata", file);
//    var t = file.type.split('/').pop().toLowerCase();
//    if (t != "jpeg" && t != "jpg" && t != "png" && t != "bmp" && t != "gif") {
//        alert('Please select a valid image file');
//        document.getElementById(id).value = '';
//        return false;
//    }
//    if (file.size > 1024000) {
//        alert('Max Upload size is 1MB only');
//        document.getElementById(id).value = '';
//        return false;
//    }
//    return true;
//}

    $(".multiple_file_upload").change(function () {
        readFile(this);
    });
    function readFile(input) {
        debugger;
        //    $("#status").html('Processing...');
        counter = input.files.length;
        number_of_file = 4;
        var count_total_div = $('.multi_column_image_preview').length;
        if (counter <= number_of_file && count_total_div <= number_of_file) {
            for (x = 0; x < counter; x++) {
                if (input.files && input.files[x]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $(".multiple_images_photos").append('<div class="multi_column_image_preview"><div class="multi_column_image_preview_inner"><img src="' + e.target.result + '" class="img-thumbnail inner_preview_main"></div></div>');
                        $('.multi_column_image_preview').removeClass("file_multi_max_upload_size");
                        $('body').removeClass("body_file_multi_max_upload_size");
                    };
                    reader.readAsDataURL(input.files[x]);
                }
            }
        } else {
            $(".file_upload_v_h").val("");
            $('.multi_column_image_preview').addClass("file_multi_max_upload_size");
            $('body').addClass("body_file_multi_max_upload_size");
        }
//        if (counter == 0) {
//            $("#status").html('');
//        }
    }
});