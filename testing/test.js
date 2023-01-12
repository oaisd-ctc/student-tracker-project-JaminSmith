$(function() {

    fetch('https://boards-api.greenhouse.io/v1/boards/example/jobs?content=true', {})
  
    .then(function (response) {
      return response.json();
    })
  
    .then(function (data) {
      appendDataToHTML(data);
    })
  
    .catch(function (err) {
      console.log(err);
    });
  
  
    function appendDataToHTML(data) {
  
      const mainContainer = document.getElementById("careers-listing");
  
      // for each object, create card
      for (var i = 0; i <  Object.keys(data.jobs).length; i++) {
  
        var department = data.jobs[i].departments[0].name;
        department = department.replace(/\s+/g, '-').toLowerCase();
        var job_title = data.jobs[i].title;
        var job_location = data.jobs[i].location.name;
  
        var html =
  
          '<figure class="careercard" data-dept="'+ department +'">' +
            '<div class="careercard__inner">' +
  
              '<figcapton class="careercard__role">' +
                '<span class="careercard__title">' + job_title + '</span>' +
              '</figcapton>' +
  
              '<div class="careercard__address">' +
                '<span class="careercard__location">' + job_location + '</span>' +
              '</div>' +
  
            '</div>' +
          '</figure>';
  
  
          // filter card in correct parent category
          if ("[data-dept^="+ department +"]") {
            $(".careersIntegration__accordion-jobs[data-dept^='" + department + "']").append(html);
  
          } else{
            $(".careersIntegration__accordion-jobs[data-dept='other']").append(html);
          }
  
      }
    }
  
    /* fetch end */
  
    $('.careersIntegration__accordion-jobs').each(function(index, obj){
      console.log(this);
      if ( $(this).length == 0 ) {
        console.log("hide");
      } else{
        console.log("dont hide");
      }
    });
  
  
  });