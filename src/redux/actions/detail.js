// import '../../../node_modules/swiper/dist/js/swiper.min.js';
export let bannerRender = (function () {
    let bannerExample = null,
        $bannerBox = $('.bannerBox'),
        $wrapper = $bannerBox.find('.swiper-wrapper'),
        $plan = $.Callbacks();

    //=>数据绑定
    $plan.add(result=>{
        $bannerBox.css('display','block');
        let str = ``;
        result.forEach(item=>{
            str += `<div className="swiper-slide">
                <a href="">
                    <img data-src="${item.img}" alt="">
                </a>
            </div>`;
        });
        $wrapper.html(str);
    });

    //=>初始化swiper
    $plan.add(()=>{
        bannerExample = new Swiper($bannerBox,{
            autoplay:3000,
            autoplayDisableOnInteraction:false,
            loop:true,
            pagination:'.swiper-pagination',
            paginationType:'fraction',
        });
    });

    return {
        init: function () {
            $.ajax({
                url:'../../resource/json/banner.json',
                method:'get',
                dataType:'json',
                cache:false,
                success:$plan.fire
            });
        }
    }
})();