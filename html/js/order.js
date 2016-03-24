$(function() {
	var selectConsigneeItem = false; // 用户是否重新选择了收货人信息
	// 收货地址选择
	$('div.consignee-item').on('click', function() {
		$('div.consignee-item-selected').removeClass('consignee-item-selected');
		$(this).addClass('consignee-item-selected');
		selectConsigneeItem = true;
	});
	// 收货地址折叠和展示
	$('.addr-more-linkbtn').on('click', function() {
		var collapse = false;
		if ($(this).text() == '更多地址') {
			$(this).html('收起地址<b class="collapse"></b>');
		} else {
			$(this).html('更多地址<b></b>');
			collapse = true;
		}
		$('.consignee-item:not(.consignee-item-selected)').parent("li").toggle(300);
		if (collapse) {
			if (!('div.consignee-item').hasClass('consignee-item-selected')) {
				$('div.consignee-item-selected').parent("li").insertBefore($('.consignee-list li:first-child'));
			}
			selectConsigneeItem = false;
		}
	});
	// 设为默认地址
	$('.consignee-btn-default').on('click', function() {
		// 选中当前收货地址
		$('div.consignee-item-selected').removeClass('consignee-item-selected');
		var $current = $(this).parent().siblings('div.consignee-item');
		$current.addClass('consignee-item-selected');
		
		// 显示其他所有栏目按钮“设为默认地址”
		$('.consignee-btn-default').removeClass('hidelast');
		// 隐藏当前栏目按钮“设为默认地址”
		$(this).addClass('hidelast');
		
		// 隐藏其他栏目默认地址
		$('.addr-default').removeClass('showlast').addClass('hidelast');
		// 显示当前栏目的默认地址
		$(this).parent().siblings('div.addr-detail').find('.addr-default').removeClass('hidelast');
		
		selectConsigneeItem = true;
	});
	// 编辑地址
	$('.consignee-btn-edit').on('click', function() {

	});
	// 删除地址
	$('.consignee-btn-del').on('click', function() {
		if(confirm('你确定要是出该收获地址吗？')) {
			$(this).parent().parent().remove();
			if($('.consignee-item-selected').length==0) {
				$('.consignee-item:first').addClass('consignee-item-selected');
			}
		}
	});
	// 支付方式选择
	$('div.payment-item').on('click', function() {
		$('div.payment-item-selected').removeClass('payment-item-selected');
		$(this).addClass('payment-item-selected');
	});
});