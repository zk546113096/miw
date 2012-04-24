  jQuery.fn.toggleInputText = function() { /* toggle input {{{ */
    var v = jQuery(this).val(); 
    if(jQuery(this).val() == "")
      jQuery(this).val(v).css({'color' : '#898888'});
    jQuery(this).focus(function(){
      jQuery(this).val('').select().css({'color' : '#000'});
    }).blur(function(){
      if(jQuery(this).val()==""){
         jQuery(this).val(v).css({'color' : '#898888'});
      }
    });
  };/* }}} */
jQuery(document).ready(function() {
  jQuery('.header-search-tabs > li').click(function() {/* 首页 搜索框 切换 {{{ */
    jQuery(this).addClass('current').siblings().removeClass('current');

    var idx = jQuery('.header-search-tabs > li').index(this);
    jQuery(this).parents('#header-search').css(
      'background', 'url("./sources/images/base/header-search-' + idx + '.png") no-repeat' 
    );
    jQuery('.header-search-blocks > li:eq(' + idx + ')').addClass('current').siblings().removeClass('current');
    return false;
  });/* }}} */
  jQuery('.switch-tabs > li').mouseover(function() {/* tab 鼠标经过切换 切换 {{{ */
    jQuery(this).addClass('current').siblings().removeClass('current');

    var idx = jQuery('.switch-tabs > li').index(this);
    jQuery('.switch-blocks > li:eq(' + idx + ')').addClass('current').siblings().removeClass('current');
    return false;
  });/* }}} */
  jQuery('.header-01 ul.menu li.down').hover(function() { /* header-01 子菜单 显示 隐藏 {{{ */
    jQuery(this).find('dl').fadeIn('slow'); 
    jQuery(this).addClass('active');
    return false;
  }, function() {
    jQuery(this).find('dl').fadeOut('slow'); 
    jQuery(this).removeClass('active');
    return false;
  }); /* }}} */
  jQuery('.header-01 .search-type').hover(function() { /* header-01 search type 显示 隐藏 {{{ */
    jQuery(this).find('dl').fadeIn('slow'); 
    jQuery('.header-01 .search-type dl dt').hover(function() {
      jQuery(this).addClass('active'); 
    }, function() {
      jQuery(this).removeClass('active'); 
    });
  }, function() {
    jQuery(this).find('dl').fadeOut('slow'); 
  }); /* }}} */

  jQuery('.header-01 .search-text input').toggleInputText();
  jQuery('.footer-links-text').toggleInputText();
});
