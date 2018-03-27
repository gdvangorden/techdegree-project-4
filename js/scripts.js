
function imageSearch() {
	//Declare Variables
	var userSearch, search, photoGallery, photo;
	userSearch = document.getElementById('searchBar');
	search = userSearch.value.toLowerCase();
	photoGallery = document.getElementById('gallery');
	photo = photoGallery.children;
	
	//Loop through photos and compare user's search to image captions
	for (i = 0; i < photo.length; i++) {
		p = photo[i];
		if (search = photo.getAttribute('data-caption').toLowerCase()) {
			photo[i].style.display = "";
		} else {
			photo[i].style.display = "none";
		}
	}
}