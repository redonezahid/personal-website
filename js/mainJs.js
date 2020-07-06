   $(document).ready(function(){
      $('.skillgrid').each(function(){
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width",per+'%');
        $({animatedValue: 0}).animate({animatedValue: per},{
          duration: 1000,
          step: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          },
          complete: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          }
        });
      });

//Typewriter text Effects Jquery Code
      var typed2 = new Typed('#typed2', {
      strings: ['Web Designer.', 'Web Developer', 'Css Bug Fixer','Wordpress Blog Install','Responsive Design','Re-design Old Website'],
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 1000,
        fadeOut: false,
        loop: true
        });

  });


