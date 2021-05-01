$("button").click(function () { //click function to use random button
    let api=`https://wendy-cors.herokuapp.com/https://mma-fighters.herokuapp.com/api/fighter/` //fighter api
    var searchFighter = Math.ceil(Math.random()*1583) //fighter search

  fetch(api + searchFighter)
    .then(function (data) {
      return data.json();
    })

    .then(function (data) { //sets the data received in card form 
      console.log(data);
      $("body").append(`
      <div class="card" style="background-color:red; color: white; width: 80%; margin: auto;">
      <div class="card-body">
      <h3 class="card-title">${data.fields.name.toUpperCase()}</h3>
      <p>Also Known as: ${data.fields.nickname?.toUpperCase()||"N.A"}</p>
      <p>Standing: ${data.fields.height?.toUpperCase()||"N/A"}</p>
      <p>Weighing in at: ${data.fields.weight?.toUpperCase()||"N/A"}</p>
      <p>Fighting out of: ${data.fields.location?.toUpperCase()||"N/A"}</p>
      <p>Country: ${data.fields.country?.toUpperCase()||"N/A"}</p>
      <p>Training Camp: ${data.fields.camp?.toUpperCase()||"N/A"}</p>
      </div>
      </div>`);
    });
  });
