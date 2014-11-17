
(function ($) {
    var self = {
        nCageImgs: [
		'http://entretenimento.r7.com/blogs/andre-barcinski/files/2014/08/tiririca-1.jpg',
		'http://upload.wikimedia.org/wikipedia/commons/f/f3/Tiririca_na_camara.jpg',
		'http://imagens.dm.com.br/midia/oTI74_755d414e6b9175efbb8e94de8c469887.jpg',
		'http://static.congressoemfoco.uol.com.br/2013/02/tiririca-20fev2013-fabiorodriguespozzebom-agbrasil.jpg',
		'http://www.jogosejogosonline.com.br/wp-content/uploads/2011/03/jogo_do_tiririca_destaque.jpg',
		'http://f.i.uol.com.br/fotografia/2014/08/21/430153-970x600-1.jpeg',
		'http://economia.estadao.com.br/blogs/radar-da-propaganda/wp-content/uploads/sites/67/2014/07/tiririca1.jpg',
		'http://1.bp.blogspot.com/_BSCeP9r5uD8/TJnyNrfnA6I/AAAAAAAABms/Xu5eK6ERpFU/s400/tiririca.jpg',
		'http://veja.abril.com.br/blog/politica/files/2013/02/Tiririca-loiro1.jpg',
    'http://www.revistabrasileiros.com.br/wp-content/uploads/2014/07/6y45y35y3.jpg',
    'http://www.diarioonline.com.br/app/painel/modulo-noticia/img/imagensdb/original/destaque-246899-tiririca.jpg',
    'http://static.eleicoes2014.com.br/upload/images/ti/ri/tiririca_fbs.jpg',
    'http://content-portal.istoe.com.br/istoeimagens/imagens/mi_1835918634059959.jpg',
    'http://www.primeirahora.com.br/fotos-noticias/tiririca-novo-estilo.jpg',
    'http://3.bp.blogspot.com/-6sv2SIjXN3E/TdRZMjEWI8I/AAAAAAAAAMc/B2yZwbUJK9g/s400/QUINHO%2B-%2BTIRIRICA%2BDEPUTADO%2BPALHACO%2BCONGRESSO.jpg',
    'https://lh4.googleusercontent.com/-I7q27XPLE3U/TYF5zDmCYzI/AAAAAAAAANw/IDNHPdgfXmw/s320/tiririca+20+reais.jpg',
    'http://img.r7.com/images/2013/02/18/13_02_57_68_file?dimensions=780x340',
    'http://1.bp.blogspot.com/-YUhF6c2FOiI/Tbb3nIl1aQI/AAAAAAAACuU/iWVGufHeh1M/s1600/Tiririca.jpg',
    'http://www.estadao.com.br/fotos/tiririca_dida_sampaio_ae_19022012.jpg'
        ],
        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        self.handleImg(item, lstImgs);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                self.handleImg(item, lstImgs);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },
        handleImg: function (item, lstImgs) {
            $(item).error(function () {
                //Handle broken imgs
                self.handleBrokenImg(item, lstImgs);
            });

            self.setRandomImg(item, lstImgs);
        },
        setRandomImg: function (item, lstImgs) {
            var h = $(item).height();
            var w = $(item).width();
            $(item).css('width', w + 'px').css('height', h + 'px');
            $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
        },
        handleBrokenImg: function (item, lstImgs) {

            var brokenImg = $(item).attr('src');
            var index = lstImgs.indexOf(brokenImg);
            if (index > -1) {
                lstImgs.splice(index, 1);
            }
            self.setRandomImg(item, lstImgs);
        },
    };

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.nCageImgs, 3000);
    });

    //Set global variable
    $.nCage = self;

})(jQuery);

