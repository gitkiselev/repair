$(function() {
    new WOW().init();
      $(document).ready(function(){
        /*Validation*/
        jQuery.validator.addMethod("customEmail", function(value, element) {
             return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value);
            }, "Пожалуйста введите корректный email адрес!");

        $('#brif-form').validate({
          rules: {
            phone: {
              required: true
            },
            username: {
              required: true,
              minlength: 2,
              maxength: 15
            },
            email: {
              required: true,
              customEmail:true
            }
          },
          messages: {
            phone: {
              required: 'Заполните поле' 
            },
            username: {
              required: 'Заполните поле' 
            },
            email: {
              required: 'Заполните поле' 
            }
          }
        });

        $('#offer-form').validate({
          rules: {
            phone: {
              required: true
            },
            username: {
              required: true,
              minlength: 2,
              maxength: 15
            },
            phone: {
              required: true
            }
          },
          messages: {
            phone: {
              required: 'Заполните поле' 
            },
            username: {
              required: 'Заполните поле' 
            }
          }
        });
        /*Маска для телефона*/
        $('.phone').mask("+7 (999) 999-99-99");
        $('.slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: $('.arrows__left'),
          nextArrow: $('.arrows__right'),
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
        
      });
  });