// My Scripts


//Get url for flickr api
const url = "https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=d3701b105b291c3acef6bf4c5bed690a&photoset_id=72177720305885454&format=json&nojsoncallback=1";
//Instantiate flickr URL to put photo id's into
const photoUrl = "https://live.staticflickr.com/65535/"
// Get data
var index = 0;
fetch(url)
  .then( response  => response.json())
  .then( data  => {
    // check-check: get one image
    // get container for data
    data.photoset.photo.forEach( photo => {
      var ID = (data.photoset.photo[index].id);
      var secret = (data.photoset.photo[index].secret);
      const gall = document.querySelector(".gallery")
      const name = (data.photoset.photo[index].title)
      const photoUrlID = (photoUrl+ID+"_"+secret+".jpg");
      // template
      const template = `
          <figure>
            <img src="${photoUrlID}" alt="Placeholder" />
          </figure>`;
      gall.insertAdjacentHTML("afterbegin", template);
      index++;
    });
  });