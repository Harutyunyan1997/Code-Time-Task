$(function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '//click.lucky.online/click/ip-location.html', false);
  xhr.send();
  if (xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    setGeoData(response.city, response.country, response.code);
  }
  function setGeoData(city, country, countryCode) {
    $('.user-city').text(city);
    $('.country').text(country);
    $('.js-city').html(city);
    document.getElementsByTagName('body')[0].setAttribute('data-city', city);
    document.getElementsByTagName('body')[0].setAttribute('data-prod', 'Нейросистема-7');
    setCountryPrice(countryCode);
  }
  function setCountryPrice(geoCountry) {
    if (typeof (country) == 'undefined') {
      country = geoCountry;
    }
    if (country == 'KZ') {
      kz_selected = 'selected="selected"';
    } else {
      kz_selected = '';
    }
    if (country == 'UA') {
      ua_selected = 'selected="selected"';
    } else {
      ua_selected = '';
    }
    if (country == 'GE') {
      ge_selected = 'selected="selected"';
    } else {
      ge_selected = '';
    }
    if (country == 'BY') {
      by_selected = 'selected="selected"';
    } else {
      by_selected = '';
    }
    if (country == 'AM') {
      am_selected = 'selected="selected"';
    } else {
      am_selected = '';
    }
    if (country == 'AZ') {
      az_selected = 'selected="selected"';
    } else {
      az_selected = '';
    }
    if (country == 'KG') {
      kg_selected = 'selected="selected"';
    } else {
      kg_selected = '';
    }
    if (country == 'UZ') {
      uz_selected = 'selected="selected"';
    } else {
      uz_selected = '';
    }
    selects = $("select[name='country']");
    selects.append('<option value="RU">Россия</option>');
    selects.append('<option value="KZ" ' + kz_selected + '>Казахстан</option>');
    selects.append('<option value="UA" ' + ua_selected + '>Украина</option>');
    selects.append('<option value="BY" ' + by_selected + '>Белоруссия</option>');
    // selects.append('<option value="GE" ' + ge_selected + '>Грузия</option>');
    // selects.append('<option value="AM" ' + am_selected + '>Армения</option>');
    // selects.append('<option value="AZ" ' + az_selected + '>Азербайджан</option>');
    selects.append('<option value="KG" ' + kg_selected + '>Киргизия</option>');
    selects.append('<option value="UZ" ' + uz_selected + '>Узбекистан</option>');
    var change = 0,
      updatePrices = function (item) {
        change = 1;
        $(item.children).each(function () {
          if (this.selected) sel = $(this).val();
        });
        if (typeof sel === 'undefined') {
          sel = 'RU';
        }
        if (sel == 'RU') {
          $('.old_price_val').html('');
          $('.old_price_cur').html('');
          $('.old_price_sig').html('');
          $('.new_price_val').html('бесплатно');
          $('.new_price_cur').html('');
          $('.new_price_sig').html('');
          $('.country_name').text('Россия');
          $('.country_name1').text('России');
          $('.country_name2').text('России');
          $('.country_name3').text('Россию');
          $('.country_name4').text('российских');
          $('.country_name5').text('российской');
          $('.country_name6').text('российским');
          $('.country_name7').text('российскому');
          $('.country_name8').text('российскую');
          $('.country_name9').text('российские');
          $('.country_name10').text('российский');
          $('.country_name11').text('российская');
          $('.country_name12').text('российского');
          $('.country_name13').text('Россиян');
          $('.country_name14').text('россиянина');
          $('.country_name15').text('россияне');
          $('select').val('RU').trigger('change');


        }
        if (sel == 'KZ') {
          $('.old_price_val').html('');
          $('.old_price_cur').html('');
          $('.old_price_sig').html('');
          $('.new_price_val').html('бесплатно');//KZval
          $('.new_price_cur').html('');//KZcur
          $('.new_price_sig').html('');
          $('.country_name').text('Казахстан');
          $('.country_name1').text('Казахстане');
          $('.country_name2').text('Казахстана');
          $('.country_name3').text('Казахстану');
          $('.country_name4').text('казахских');
          $('.country_name5').text('казахской');
          $('.country_name6').text('казахским');
          $('.country_name7').text('казахскому');
          $('.country_name8').text('казахскую');
          $('.country_name9').text('казахские');
          $('.country_name10').text('казахский');
          $('.country_name11').text('казахская');
          $('.country_name12').text('казахского');
          $('.country_name13').text('Казахов');
          $('.country_name14').text('казаха');
          $('.country_name15').text('казахи');
          $('select').val('KZ').trigger('change');

        }
        if (sel == 'UA') {
          $('.old_price_val').html('');
          $('.old_price_cur').html('');
          $('.old_price_sig').html('');
          $('.new_price_val').html('бесплатно');//UAval
          $('.new_price_cur').html('');//UAcur
          $('.new_price_sig').html('');
          $('.country_name').text('Украина');
          $('.country_name1').text('Украине');
          $('.country_name2').text('Украины');
          $('.country_name3').text('Украину');
          $('.country_name4').text('украинских');
          $('.country_name5').text('украинской');
          $('.country_name6').text('украинским');
          $('.country_name7').text('украинскому');
          $('.country_name8').text('украинскую');
          $('.country_name9').text('украинские');
          $('.country_name10').text('украинский');
          $('.country_name11').text('украинская');
          $('.country_name12').text('украинского');
          $('.country_name13').text('Украинцев');
          $('.country_name14').text('украинца');
          $('.country_name15').text('украинцы');
          $('select').val('UA').trigger('change');


        }
        if (sel == 'GE') {
          $('.old_price_val').html('');
          $('.old_price_cur').html('');
          $('.old_price_sig').html('');
          $('.new_price_val').html('');//GEval
          $('.new_price_cur').html('');//GEcur
          $('.new_price_sig').html('');
          $('.country_name').text('Грузия');
          $('.country_name1').text('Грузии');
          $('.country_name2').text('Грузии');
          $('.country_name3').text('Грузию');
          $('.country_name4').text('грузинских');
          $('.country_name5').text('грузинской');
          $('.country_name6').text('грузинским');
          $('.country_name7').text('грузинскому');
          $('.country_name8').text('грузинскую');
          $('.country_name9').text('грузинские');
          $('.country_name10').text('грузинский');
          $('.country_name11').text('грузинская');
          $('.country_name12').text('грузинского');
          $('.country_name13').text('Грузинов');
          $('.country_name14').text('грузина');
          $('.country_name15').text('грузины');
          $('select').val(sel).trigger('change');

        }
        if (sel == 'BY') {
          $('.old_price_val').html('');
          $('.old_price_cur').html('');
          $('.old_price_sig').html('');
          $('.new_price_val').html('бесплатно');//BYval
          $('.new_price_cur').html('');//BYcur
          $('.new_price_sig').html('');
          $('.country_name').text('Беларусь');
          $('.country_name1').text('Беларуси');
          $('.country_name2').text('Беларуси');
          $('.country_name3').text('Белорусью');
          $('.country_name4').text('белорусских');
          $('.country_name5').text('белорусской');
          $('.country_name6').text('белорусским');
          $('.country_name7').text('белорусскому');
          $('.country_name8').text('белорусскую');
          $('.country_name9').text('белорусские');
          $('.country_name10').text('белорусский');
          $('.country_name11').text('белорусская');
          $('.country_name12').text('белорусского');
          $('.country_name13').text('Беларусов');
          $('.country_name14').text('беларуса');
          $('.country_name15').text('беларуси');
          $('select').val('BY').trigger('change');

        }
        if (sel == 'AM') {
          $('.old_price_val').html('');
          $('.old_price_cur').html('');
          $('.old_price_sig').html('');
          $('.new_price_val').html('');//AMval
          $('.new_price_cur').html('');//AMcur
          $('.new_price_sig').html('');
          $('.country_name').text('Армения');
          $('.country_name1').text('Армении');
          $('.country_name2').text('Армении');
          $('.country_name3').text('Армению');
          $('.country_name4').text('армянских');
          $('.country_name5').text('армянской');
          $('.country_name6').text('армянским');
          $('.country_name7').text('армянскому');
          $('.country_name8').text('армянскую');
          $('.country_name9').text('армянские');
          $('.country_name10').text('армянский');
          $('.country_name11').text('армянская');
          $('.country_name12').text('армянского');
          $('.country_name13').text('Армян');
          $('.country_name14').text('армянина');
          $('.country_name15').text('армянины');
          $('select').val(sel).trigger('change');

        }

        if (sel == 'AZ') {
          $('.old_price_val').html('');
          $('.old_price_cur').html('');
          $('.old_price_sig').html('');
          $('.new_price_val').html('');//AZval
          $('.new_price_cur').html('');//AZcur
          $('.new_price_sig').html('');
          $('.country_name').text('Азербайджан');
          $('.country_name1').text('Азербайджане');
          $('.country_name2').text('Азербайджана');
          $('.country_name3').text('Азербайджану');
          $('.country_name4').text('азербайджанских');
          $('.country_name5').text('азербайджанской');
          $('.country_name6').text('азербайджанским');
          $('.country_name7').text('азербайджанскому');
          $('.country_name8').text('азербайджанскую');
          $('.country_name9').text('азербайджанские');
          $('.country_name10').text('азербайджанский');
          $('.country_name11').text('азербайджанская');
          $('.country_name12').text('азербайджанского');
          $('.country_name13').text('Азербайджанцев');
          $('.country_name14').text('азербайджанца');
          $('.country_name15').text('азербайджанцы');
          $('select').val(sel).trigger('change');

        }

        if (sel == 'KG') {
          $('.old_price_val').html('');
          $('.old_price_cur').html('');
          $('.old_price_sig').html('');
          $('.new_price_val').html('бесплатно');//KGval
          $('.new_price_cur').html('');//KGcur
          $('.new_price_sig').html('');
          $('.country_name').text('Киргизия');
          $('.country_name1').text('Киргизии');
          $('.country_name2').text('Киргизии');
          $('.country_name3').text('Киргизию');
          $('.country_name4').text('киргизских');
          $('.country_name5').text('киргизской');
          $('.country_name6').text('киргизским');
          $('.country_name7').text('киргизскому');
          $('.country_name8').text('киргизскую');
          $('.country_name9').text('киргизские');
          $('.country_name10').text('киргизский');
          $('.country_name11').text('киргизская');
          $('.country_name12').text('киргизского');
          $('.country_name13').text('Киргизов');
          $('.country_name14').text('киргиза');
          $('.country_name15').text('киргизы');
          $('select').val('KG').trigger('change');

        }

        if (sel == 'UZ') {
          $('.old_price_val').html('');
          $('.old_price_cur').html('');
          $('.old_price_sig').html('');
          $('.new_price_val').html('бесплатно');//UZval
          $('.new_price_cur').html('');//UZcur
          $('.new_price_sig').html('');
          $('.country_name').text('Узбекистан');
          $('.country_name1').text('Узбекистане');
          $('.country_name2').text('Узбекистана');
          $('.country_name3').text('Узбекистану');
          $('.country_name4').text('Узбекских');
          $('.country_name5').text('Узбекской');
          $('.country_name6').text('Узбекским');
          $('.country_name7').text('Узбекскому');
          $('.country_name8').text('Узбекскую');
          $('.country_name9').text('Узбекские');
          $('.country_name10').text('Узбекхский');
          $('.country_name11').text('Узбекская');
          $('.country_name12').text('Узбекиского');
          $('.country_name13').text('Узбекиов');
          $('.country_name14').text('Узбека');
          $('.country_name15').text('Узбеки');
          $('select').val('UZ').trigger('change');

        }

        change = 0;

      };

    $("select").change(function () {
      if (change == 0) updatePrices(this);
    }).change();

  }
});
