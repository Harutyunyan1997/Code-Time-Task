$(document).on('ready', function () {

  $(function () {
    // countdownStart
    var storageCountdownReset = "countdownResetPoplavok",
      storageCountdownTime = "countdownTimePoplavok",
      countdownResetTimeVal = 41,
      nowDateTime = new Date().getTime(),
      countdownReset = localStorage.getItem(storageCountdownReset);
    if (countdownReset == null) {
      localStorage.setItem(storageCountdownReset, nowDateTime);
    } else {
      if (nowDateTime - countdownReset > countdownResetTimeVal * 60 * 1000) {
        var countdownTime = (new Date).getTime() + 24e5;
        localStorage.setItem(storageCountdownTime, countdownTime);
        localStorage.setItem(storageCountdownReset, nowDateTime);
      }
    }

    if (localStorage.getItem(storageCountdownTime)) {
      var countdownTime = localStorage.getItem(storageCountdownTime);
    } else {
      countdownTime = (new Date).getTime() + 24e5;
    }

    $(".countdown").countdown(countdownTime, function (s) {
      $(this).html(s.strftime('' +
        '<div class="countdown__item hour">%H</div>' +
        '<div class="countdown__item minute">%M</div>' +
        '<div class="countdown__item second">%S</div>'
      ));
    }).on('update.countdown', function (e) {
      countdownTime = e.finalDate.getTime();
      localStorage.setItem(storageCountdownTime, countdownTime);
    }).on('finish.countdown', function (e) {
      $('.countdown').countdown('stop');
    });
    // countdownEnd
  });

  $('.test-wrapper input').change(function () {
    calc();
  });

  $('.test-wrapper input').keyup(function () {
    calc();
  });

  // TODAY - start
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  $('span.today').text(today);
  // TODAY - end

  // Counter-  start
  // 60 is default packageCount
  let currentPackageCount = localStorage.getItem('packageCount') || 60;
  $('span.left_count').text(currentPackageCount);

  setInterval(() => {
    currentPackageCount = currentPackageCount - 1;
    if (currentPackageCount >= 7) {
      $('span.left_count').text(currentPackageCount);
      localStorage.setItem('packageCount', currentPackageCount);
    } else {
      clearInterval(interval);
    }
  }, 15000);

  // Counter - end

  function calc() {
    var age = $('.test-wrapper .inp1').val();
    var height2 = $('.test-wrapper .inp2').val();
    var weight2 = $('.test-wrapper .inp3').val();

    age = parseInt(age.replace(/\D+/g, ""));
    height2 = parseInt(height2.replace(/\D+/g, ""));
    weight2 = parseInt(weight2.replace(/\D+/g, ""));


    if (age > 0 && height2 > 0 && weight2 > 0) {
      if (weight2 < 55) {
        $('.test-wrapper .line1').attr('style', 'visibility: display;');
        $('.test-wrapper .line2').attr('style', 'visibility: display;');
        $('.test-wrapper .line1').html('<span class="green">У вас нормальный вес</span>');
        $('.test-wrapper .line2').html('Но если вы склонны к полноте остерегайтесь последствий!');
      } else {
        if (weight2 >= 55 && weight2 < 70) {
          $('.test-wrapper .line1').attr('style', 'visibility: display;');
          $('.test-wrapper .line2').attr('style', 'visibility: display;');
          $('.test-wrapper .line1').html('Ожирение<br>1-й степени');
          $('.test-wrapper .line2').html('Немедленно начните лечение!');
        } else {
          if (weight2 >= 70 && weight2 < 80) {
            $('.test-wrapper .line1').attr('style', 'visibility: display;');
            $('.test-wrapper .line2').attr('style', 'visibility: display;');
            $('.test-wrapper .line1').html('Ожирение<br>2-й степени');
            $('.test-wrapper .line2').html('Немедленно начните лечение!');
          } else {
            if (weight2 >= 80) {
              $('.test-wrapper .line1').attr('style', 'visibility: display;');
              $('.test-wrapper .line2').attr('style', 'visibility: display;');
              $('.test-wrapper .line1').html('Ожирение<br>3-й степени');
              $('.test-wrapper .line2').html('Немедленно начните лечение!');
            }
          }
        }
      }
    }

  };

  $(".zak").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 65 + 'px';
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1000);
    return false;
  });

  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true
  });

  $(".owl-prev").empty();
  $(".owl-next").empty();

});