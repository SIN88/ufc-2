var wikiAPIBase = "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=" //batchcomplete
//example of Jessica Eye
//var query = wikiAPIBase + "Jessica_Eye"
//console.log(query);
//https://en.wikipedia.org/wiki/Special:ApiSandbox 
//action = query; format json; from sandbox regarding origin (For non-authenticated requests, specify the value *. This will cause the Access-Control-Allow-Origin header to be set, but Access-Control-Allow-Credentials will be false and all user-specific data will be restricted.)


//eventListner to get the fighter name:
var allFighterElements = document.querySelectorAll("li, span.champion")
//allFighterElements=allFighterElements.concat(document.querySelectorAll(".champion"))

allFighterElements.forEach(function(element) {
     //forEach Performs the specified action for each node in an list.
    //use the textContent and make a valid query:
    
    var fighterName = element.textContent
    var fighterNameFormatted = fighterName.replaceAll(" ", "%20") //The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.
    
    var url = wikiAPIBase + fighterNameFormatted
    
    element.addEventListener("click", function() {
        var contentInnerHTML; //innerHTML gets or sets the HTML or XML markup contained within the element.
        //fetch the WIKI api:
        fetch(url) //returning a promise which is fulfilled once the response is available. 
        /* .then(function(response) {
            console.log(response.body);
            response.json()
        }) */
        .then(response => response.json())
        .then(function(data) {
            // data.query.pages={12345:{extract:"hello"}}
            // Object.values(data.query.pages)=[{extract:"hello"}]
            // [{extract:"hello"}][0]={extract:"hello"}
            // {extract:"hello"}.extract = "hello"
            contentInnerHTML = Object.values(data.query.pages)[0].extract; //object.values method makes an array then grabs the extract from it;
            console.log(contentInnerHTML)
            var content = document.getElementById('result');
            content.innerHTML = contentInnerHTML;
            document.body.append(content) //The append() method inserts specified content at the end of the selected elements.
        });
        
        
    })
})