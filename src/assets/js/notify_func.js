 $(function() {
     setTimeout(function() {
         $.notify({
             // options
             icon: '',
             title: "<h4> For book contact us directly</h4>",
             message: "<figure><img src=\"../../assets/img/notify_img.jpg\"></figure><p>Badriville Homestay and Resorts.!"
         }, {
             // settings
             icon_type: 'image',
             type: 'info',
             delay: 500,
             timer: 3000,
             z_index: 9999,
             showProgressbar: false,
             placement: {
                 from: "bottom",
                 align: "right"
             },
             animate: {
                 enter: 'animated bounceInUp',
                 exit: 'animated bounceOutDown'
             },
         });
     }, 5000); // change the start delay
 });