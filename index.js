
<script>
    $(function(){
        var myImages = $('.product-images-pagination-item');
        
        
        var countImages = myImages.length;
        var page = 1;
        var i = 0;
        var j,k;
        var imgInRow = 4;
        var showRow = 3;
        if ($(window).width() <= 500) {  
            showRow = 1;
        }     
        var totalImageShow = imgInRow * showRow;
        
        //function renderView(i, imgInRow, showRow, page){}
        
        // when click next i = i + imgInRow * showRow;
        // when click prev i = i - imgInRow * showRow;
        function renderView(){
                //console.log(i);
            $('.product-images-pagination-item').hide();
            $('.next').show();
            $('.prev').show();
            for(k = 0; k < totalImageShow; k++){
                j = k+i;
                if(j == countImages){ $('.next').hide(); break; }
                if(j == 0){ $('.prev').hide(); }
                $('.product-images-pagination-item[data-image-position="'+j+'"]').show();
            }
        }
        
        renderView();
        
        $('.next').click(function(){
            i = i + totalImageShow;
            renderView();
        });
        
        $('.prev').click(function(){
            i = i - totalImageShow;
            renderView();
        });
        
        /*
        $.each(myImages, function(index, item){
            var position = $(this).data('image-position');
            if(position > 11){
                $(this).hide();
            }
        });
        
        $('.next').click(function(){
            $(this).hide();
            var myImages = $('.product-images-pagination-item');
            $.each(myImages, function(index, item){
                var position = $(this).data('image-position');
                $(this).hide();
                if(position > 11){
                    $(this).show();
                }
            });
            $('.prev').show();
        });
        
        $('.prev').click(function(){
            $(this).hide();
            var myImages = $('.product-images-pagination-item');
            $.each(myImages, function(index, item){
                var position = $(this).data('image-position');
                $(this).hide();
                if(position <= 11){
                    $(this).show();
                }
            });
            $('.next').show();
        });
        */
    });
    
</script>​
